# PlayCanvas ESLint Config

ESLint configuration developed by the PlayCanvas team and leveraged by many PlayCanvas-related projects, including the [PlayCanvas Engine](https://github.com/playcanvas/engine). However, you can use it for any JavaScript-based project if you approve of the PlayCanvas coding style.

The configuration is defined in [`eslint.config.mjs`](https://github.com/playcanvas/eslint-config/blob/main/eslint.config.mjs). It configures ESLint's rules in a comprehensive manner, covering Possible Problems, Suggestions, and Formatting categories. It also includes additional plugins:

- `eslint-plugin-jsdoc`: For JSDoc validation and enforcement
- `eslint-plugin-import`: For import/export validation and ordering
- `eslint-plugin-regexp`: For regular expression best practices

The configuration attempts to enable as many rules as possible, particularly those categorized as 'recommended' by ESLint, while maintaining practicality for real-world development.

## Using this config in your own projects

1. Install the package:

```bash
npm install --save-dev @playcanvas/eslint-config eslint
```

2. Create an `eslint.config.js` file in your project root:

```js
import playcanvasConfig from '@playcanvas/eslint-config';

export default [
    ...playcanvasConfig,
    // Your custom configurations here
];
```

## Features

- Full flat config format support for ESLint 8+
- Comprehensive rule configuration
- Support for ESM Script JSDoc tags used in PlayCanvas
- Import ordering and validation
- Strict JSDoc validation
- Regular expression pattern enforcement

## Requirements

- ESLint 8 or later
- Node.js 16 or later
