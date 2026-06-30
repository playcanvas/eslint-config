import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import pluginImport from 'eslint-plugin-import-x';
import * as pluginPackageJson from 'eslint-plugin-package-json';
import globals from 'globals';
import jsoncEslintParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

const ignoreConfig = {
    ignores: ['**/node_modules', '**/dist']
};

const baseConfig = {
    rules: {
        curly: 'error',
        'import-x/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object']
            }
        ],
        // TS enforces these more accurately and they're the slow, resolver-heavy import rules;
        // turning them off keeps large TS codebases fast (no-unresolved stays on for path typos)
        'import-x/named': 'off',
        'import-x/namespace': 'off',
        'import-x/default': 'off',
        'import-x/no-named-as-default-member': 'off',
        // keep type-only imports as separate top-level `import type` statements
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import-x/no-duplicates': ['warn', { 'prefer-inline': false }],
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }
        ]
    },
    settings: {
        // pass the resolver object directly — eslint-plugin-import-x reads it under its own
        // `import-x/` settings namespace, so resolution never depends on how the resolver is
        // hoisted in a consumer's node_modules (no name-based lookup from the linted file)
        'import-x/resolver-next': [createTypeScriptImportResolver({ alwaysTryTypes: true })]
    }
};

const tsFilesConfig = {
    files: ['**/*.{js,mjs,cjs,ts,tsx,mts,cts}'],
    plugins: {
        '@typescript-eslint': tseslint.plugin
    },
    languageOptions: {
        parser: tseslint.parser,
        ecmaVersion: 2022,
        sourceType: 'module',
        globals: globals.node
    },
    rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/prefer-for-of': 'off'
    }
};

const packageJsonConfig = {
    files: ['**/package.json', '**/package-lock.json'],
    languageOptions: {
        parser: jsoncEslintParser
    },
    plugins: {
        'package-json': pluginPackageJson
    },
    rules: pluginPackageJson.configs.recommended.rules
};

const spacingConfig = {
    rules: {
        'object-curly-spacing': ['error', 'always']
    }
};

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    pluginImport.flatConfigs.recommended,
    ignoreConfig,
    baseConfig,
    tsFilesConfig,
    packageJsonConfig,

    // turn off ESLint formatting rules that would conflict with Prettier
    // (run Prettier itself separately — see the prettier export / README)
    eslintConfigPrettier,
    spacingConfig
];
