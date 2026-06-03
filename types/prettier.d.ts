// types for the shared Prettier config (@playcanvas/eslint-config/prettier).
// hand-written and kept in sync with src/configs/prettier.ts — the eslint configs
// can't emit declarations (typescript-eslint composed types aren't portable), so
// only this simple config ships types.
declare const config: {
    tabWidth: number;
    singleQuote: boolean;
    printWidth: number;
    trailingComma: 'none';
};

export default config;
