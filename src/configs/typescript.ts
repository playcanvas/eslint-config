import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginImport from 'eslint-plugin-import';
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
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object']
            }
        ],
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
        'import/resolver': {
            typescript: true
        }
    }
};

const tsFilesConfig = {
    files: ['**/*.{js,mjs,ts}'],
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
        '@typescript-eslint/no-non-null-assertion': 'off'
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

    // last: turn off ESLint formatting rules that would conflict with Prettier
    // (run Prettier itself separately — see the prettier export / README)
    eslintConfigPrettier
];
