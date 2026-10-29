// `npm test` for this package is a clean-room install test (there is no unit
// suite). pack the publishable tarball, install it into a temp project with
// ONLY the declared peers, then import every entry point. fails if any runtime
// plugin is missing from `dependencies` — the failure publint cannot detect,
// and the reason v3.0.0-beta.0 was unusable.
//
// it then lints a small file with each config, on every supported ESLint major:
// a rule only runs its setup when it lints a file, and that is where a plugin
// that calls an API the major removed throws, as eslint-plugin-react did on 10.
import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = process.cwd();
const dir = mkdtempSync(join(tmpdir(), 'pc-eslint-config-test-'));
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });

const tarball = execSync(`npm pack --silent --pack-destination "${dir}"`, { cwd: root })
    .toString()
    .trim()
    .split('\n')
    .pop();

writeFileSync(
    join(dir, 'package.json'),
    JSON.stringify({ name: 'consumer', version: '1.0.0', type: 'module', private: true })
);

// a config file and a file it should lint cleanly, per entry point
const lintCases = {
    javascript: {
        config: "import javascript from '@playcanvas/eslint-config/javascript';\n\nexport default javascript;\n",
        file: 'fixture.js',
        code: [
            '/**',
            ' * Adds one to a number.',
            ' *',
            ' * @param {number} value - The number to add one to.',
            ' * @returns {number} The number plus one.',
            ' */',
            'export const addOne = value => value + 1;',
            ''
        ].join('\n')
    },
    typescript: {
        config: "import typescript from '@playcanvas/eslint-config/typescript';\n\nexport default typescript;\n",
        file: 'fixture.ts',
        // interfaces are allowed alongside types
        code: 'export const addOne = (value: number): number => value + 1;\n\nexport interface Point {\n    x: number;\n}\n'
    },
    'javascript-test': {
        // mocha globals, function callbacks and chai-style expression statements
        config: "import javascript from '@playcanvas/eslint-config/javascript';\n\nexport default javascript;\n",
        file: 'javascript.test.mjs',
        code: [
            "describe('fixture', function () {",
            "    it('passes', function () {",
            '        const result = { ok: true };',
            '        result.ok;',
            '    });',
            '});',
            ''
        ].join('\n')
    },
    'javascript-ts-test': {
        // the javascript config must not select TypeScript tests: ESLint skips the file with a
        // warning instead of failing to parse it with the JavaScript parser
        config: "import javascript from '@playcanvas/eslint-config/javascript';\n\nexport default javascript;\n",
        file: 'skipped.test.ts',
        code: 'export const value: number = 1;\n'
    },
    'typescript-test': {
        config: "import typescript from '@playcanvas/eslint-config/typescript';\n\nexport default typescript;\n",
        file: 'typescript.test.mjs',
        code: [
            "describe('fixture', () => {",
            "    it('passes', () => {",
            '        const result = { ok: true };',
            '        result.ok;',
            '    });',
            '});',
            ''
        ].join('\n')
    },
    react: {
        // automatic JSX runtime: no React import; prop-types reads the TypeScript prop types
        config: [
            "import react from '@playcanvas/eslint-config/react';",
            "import typescript from '@playcanvas/eslint-config/typescript';",
            '',
            'export default [...typescript, ...react];',
            ''
        ].join('\n'),
        file: 'fixture.tsx',
        code: 'export const Greeting = ({ name }: { name: string }) => <p>Hello, {name}</p>;\n'
    }
};
for (const [name, { config, file, code }] of Object.entries(lintCases)) {
    writeFileSync(join(dir, `${name}.config.mjs`), config);
    writeFileSync(join(dir, file), code);
}

for (const eslint of ['eslint@9', 'eslint@10']) {
    console.log(`test: ${eslint}`);

    // install ONLY the peers + the packed tarball — never the config's devDependencies
    run(`npm install --no-audit --no-fund --no-save ${eslint} typescript@5 "${join(dir, tarball)}"`, dir);

    const entries = ['', '/typescript', '/javascript', '/react', '/prettier'];
    for (const entry of entries) {
        const spec = `@playcanvas/eslint-config${entry}`;
        run(`node --input-type=module -e "await import('${spec}'); console.log('  loaded ${spec}')"`, dir);
    }

    for (const [name, { file }] of Object.entries(lintCases)) {
        run(`npx --no-install eslint --config ${name}.config.mjs ${file}`, dir);
        console.log(`  linted ${file} with the ${name} config`);
    }
}

rmSync(dir, { recursive: true, force: true });
console.log('test: every entry point loads with only declared dependencies, and lints on ESLint 9 and 10');
