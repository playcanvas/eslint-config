import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
    pluginJsxA11y.flatConfigs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReactHooks.configs.flat.recommended,
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
