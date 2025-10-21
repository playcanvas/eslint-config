import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

const baseConfig = {
    plugins: {
        'react-refresh': pluginReactRefresh,
        'react-hooks': pluginReactHooks.default,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

export default [
    pluginJsxA11y.flatConfigs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReactRefresh.configs.recommended,
    baseConfig,
];
