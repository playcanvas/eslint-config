# PlayCanvas ESLint Config

[![NPM Version](https://img.shields.io/npm/v/@playcanvas/eslint-config)](https://www.npmjs.com/package/@playcanvas/eslint-config)
[![NPM Downloads](https://img.shields.io/npm/dw/@playcanvas/eslint-config)](https://npmtrends.com/@playcanvas/eslint-config)
[![License](https://img.shields.io/npm/l/@playcanvas/eslint-config)](https://github.com/playcanvas/editor-api/blob/main/LICENSE)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white&color=black)](https://discord.gg/RSaMRzg)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=flat&logo=reddit&logoColor=white&color=black)](https://www.reddit.com/r/PlayCanvas)
[![X](https://img.shields.io/badge/X-000000?style=flat&logo=x&logoColor=white&color=black)](https://x.com/intent/follow?screen_name=playcanvas)

| [User Manual](https://developer.playcanvas.com/user-manual/editor) | [API Reference](https://api.playcanvas.com/editor) | [Blog](https://blog.playcanvas.com) | [Forum](https://forum.playcanvas.com) |

ESLint configuration developed by the PlayCanvas team and leveraged by many PlayCanvas-related projects, including the [PlayCanvas Engine](https://github.com/playcanvas/engine). However, you can use it for any JavaScript-based project if you approve of the PlayCanvas coding style.

## Usage

1. Install the package:

```bash
npm install -D @playcanvas/eslint-config eslint
```

2. Create an `eslint.config.js` file in your project root. Import the config for your project type from its subpath — this loads only that config's plugins:

```js
// TypeScript projects (modern, strict rules)
import typescriptConfig from '@playcanvas/eslint-config/typescript';

export default [
    ...typescriptConfig
    // Your custom configurations here
];
```

The available entry points are:

- `@playcanvas/eslint-config/typescript` — modern, strict rules for TypeScript (ESM) projects
- `@playcanvas/eslint-config/javascript` (alias: `/legacy`) — rules for JavaScript + JSDoc (ESM) projects, such as the PlayCanvas engine
- `@playcanvas/eslint-config/react` — React rules, layered on top of one of the above

For example, a React + TypeScript project:

```js
import reactConfig from '@playcanvas/eslint-config/react';
import typescriptConfig from '@playcanvas/eslint-config/typescript';

export default [
    ...typescriptConfig,
    ...reactConfig
    // Your custom configurations here
];
```

Alternatively, the default export exposes every config as an object:

```js
import playcanvasConfig from '@playcanvas/eslint-config';

export default [
    ...playcanvasConfig.typescript
    // ...playcanvasConfig.legacy, // JavaScript + JSDoc rules
    // ...playcanvasConfig.react // React rules
];
```

## Features

> [!WARNING]
> The typescript and react rules are incomplete and are still being developed based on current practises and existing legacy rules

- Full flat config format support for ESLint 9+
- Comprehensive rule configuration
- Support for ESM Script JSDoc tags used in PlayCanvas
- Import ordering and validation
- Strict JSDoc validation
- Regular expression pattern enforcement

## Requirements

- ESLint 9 or later
- Node.js 18 or later
