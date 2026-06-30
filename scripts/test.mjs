// `npm test` for this package is a clean-room install test (there is no unit
// suite). pack the publishable tarball, install it into a temp project with
// ONLY the declared peers, then import every entry point. fails if any runtime
// plugin is missing from `dependencies` — the failure publint cannot detect,
// and the reason v3.0.0-beta.0 was unusable.
import { execSync, spawnSync } from 'node:child_process';
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

// install ONLY the peers + the packed tarball — never the config's devDependencies
run(`npm install --no-audit --no-fund --no-save eslint@9 typescript@5 "${join(dir, tarball)}"`, dir);

const entries = ['', '/typescript', '/legacy', '/javascript', '/react', '/prettier'];
for (const entry of entries) {
    const spec = `@playcanvas/eslint-config${entry}`;
    run(`node --input-type=module -e "await import('${spec}'); console.log('  loaded ${spec}')"`, dir);
}

writeFileSync(
    join(dir, 'eslint.config.mjs'),
    "import typescript from '@playcanvas/eslint-config/typescript';\nexport default typescript;\n"
);
writeFileSync(
    join(dir, 'bad.ts'),
    'const data = {} as AnyRecord;\nconst cast = data as unknown as Record<string, string>;\nvoid cast;\n'
);

const lint = spawnSync('npx', ['eslint', 'bad.ts'], { cwd: dir, encoding: 'utf8' });
const output = `${lint.stdout}\n${lint.stderr}`;
if (
    lint.status === 0 ||
    !output.includes('Use a narrower type instead of AnyRecord') ||
    !output.includes('Do not cast through unknown to bypass type checking')
) {
    console.error(output);
    process.exit(1);
}

rmSync(dir, { recursive: true, force: true });
console.log('test: entry points load and TypeScript restrictions apply');
