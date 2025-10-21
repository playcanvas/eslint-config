import * as pluginPackageJson from 'eslint-plugin-package-json';
import jsoncEslintParser from 'jsonc-eslint-parser';

export default [
    {
        files: ['**/package.json', '**/package-lock.json'],
        languageOptions: {
            parser: jsoncEslintParser,
        },
        plugins: {
            'package-json': pluginPackageJson,
        },
        rules: pluginPackageJson.configs.recommended.rules,
    },
];
