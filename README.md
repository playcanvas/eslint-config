# PlayCanvas ESLint Config

[![NPM Version](https://img.shields.io/npm/v/@playcanvas/eslint-config)](https://www.npmjs.com/package/@playcanvas/eslint-config)
[![NPM Downloads](https://img.shields.io/npm/dw/@playcanvas/eslint-config)](https://npmtrends.com/@playcanvas/eslint-config)
[![License](https://img.shields.io/npm/l/@playcanvas/eslint-config)](https://github.com/playcanvas/eslint-config/blob/main/LICENSE)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white&color=black)](https://discord.gg/RSaMRzg)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=flat&logo=reddit&logoColor=white&color=black)](https://www.reddit.com/r/PlayCanvas)
[![X](https://img.shields.io/badge/X-000000?style=flat&logo=x&logoColor=white&color=black)](https://x.com/intent/follow?screen_name=playcanvas)

| [User Manual](https://developer.playcanvas.com) | [API Reference](https://api.playcanvas.com) | [Blog](https://blog.playcanvas.com) | [Forum](https://forum.playcanvas.com) |

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
- `@playcanvas/eslint-config/javascript` — rules for JavaScript + JSDoc (ESM) projects, such as the PlayCanvas engine
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

The root export also provides `esmScriptTags`, the JSDoc tags PlayCanvas ESM Scripts use. Overriding `jsdoc/check-tag-names` replaces the config's own extra tags (`alpha`, `beta`, `category`, `import`), so include them when you add your own:

```js
import { esmScriptTags } from '@playcanvas/eslint-config';
import javascriptConfig from '@playcanvas/eslint-config/javascript';

export default [
    ...javascriptConfig,
    {
        rules: {
            'jsdoc/check-tag-names': [
                'error',
                { definedTags: [...esmScriptTags, 'alpha', 'beta', 'category', 'import', 'myTag'] }
            ]
        }
    }
];
```

Alternatively, the default export exposes every config as an object:

```js
import playcanvasConfig from '@playcanvas/eslint-config';

export default [
    ...playcanvasConfig.typescript
    // ...playcanvasConfig.javascript, // JavaScript + JSDoc rules
    // ...playcanvasConfig.react // React rules
];
```

3. Prettier is run as a separate step, not through ESLint — the config above only disables the ESLint formatting rules that would conflict with Prettier. To apply the PlayCanvas house style, create a `prettier.config.mjs` that re-exports the shared config:

```js
export { default } from '@playcanvas/eslint-config/prettier';
```

Then run both, for example:

```json
{
    "scripts": {
        "lint": "prettier --check . && eslint ."
    }
}
```

Test files (`test/`, `tests/` and `__tests__/` folders, and `*.test.*` or `*.spec.*` files) get mocha globals and allow chai-style assertions such as `expect(x).to.be.true`. The `javascript` config also allows function callbacks in tests, which mocha uses to pass its context as `this`.

If your config imports a package itself, such as `globals`, add it to your own `devDependencies`. ESLint 9 happens to install `globals`, but ESLint 10 does not.

## Migrating from v2

v3 changes the default export from a config array to an object, so spreading it (`...playcanvasConfig`) throws `TypeError: playcanvasConfig is not iterable`. To migrate:

- Import the config for your project type from its subpath (`/typescript`, `/javascript` or `/react`) instead of the default export. React projects spread `/typescript`, then `/react`.
- Remove any hand-wired `@typescript-eslint` parser and plugin setup: `/typescript` includes it.
- `/typescript` doesn't load the `jsdoc` or `regexp` plugins, and registers the import plugin as `import-x`. Remove `jsdoc/*` and `regexp/*` rules and `eslint-disable` comments, and rename `import/*` rules to `import-x/*`.
- Run Prettier separately using `/prettier`, and remove `eslint-plugin-prettier` if you use it.
- The `/legacy` entry point from the v3 betas is now `/javascript`.

## Features

- Flat config for ESLint 9 and 10
- Import ordering and validation
- Strict TypeScript rules from typescript-eslint, and `package.json` linting (`typescript`)
- JSDoc validation, including the tags PlayCanvas ESM Scripts use, and regular expression checks (`javascript`)
- React, hooks and accessibility rules (`react`)

## Requirements

- ESLint 9 or 10
- Node.js 20.19, 22.13, 24 or later

On ESLint 10, npm warns `ERESOLVE overriding peer dependency` for `eslint-plugin-react` and `eslint-plugin-jsx-a11y`, whose peer ranges don't list ESLint 10 yet. The warnings are harmless: the `react` config patches eslint-plugin-react for ESLint 10, and eslint-plugin-jsx-a11y doesn't use the APIs ESLint 10 removed.
