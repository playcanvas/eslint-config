// test files: `test/`, `tests/` and `__tests__/` folders, and `*.test.*` / `*.spec.*` files
const TEST_DIRS = ['**/test/**', '**/tests/**', '**/__tests__/**'];

// each list only names extensions its config lints: a `files` pattern also selects files to lint
export const JS_TEST_FILES = [...TEST_DIRS, '**/*.{test,spec}.{js,mjs,cjs}'];

export const TS_TEST_FILES = [...TEST_DIRS, '**/*.{test,spec}.{js,mjs,cjs,ts,tsx,mts,cts}'];
