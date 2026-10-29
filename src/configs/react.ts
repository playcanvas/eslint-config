import { fixupConfigRules } from '@eslint/compat';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
    pluginJsxA11y.flatConfigs.recommended,
    // eslint-plugin-react still calls context methods ESLint 10 removed, such as context.getFilename(),
    // so its rules are wrapped to put them back. ESLint 9 still has them, so nothing changes there
    ...fixupConfigRules(pluginReact.configs.flat.recommended),
    pluginReactHooks.configs.flat.recommended,
    {
        settings: {
            react: {
                version: 'detect'
            }
        }
    }
];
