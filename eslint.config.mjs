// dogfood the published modern-strict config rather than duplicating it
import config from './dist/index.js';

// don't lint the hand-written declaration in types/ — prettier already formats it,
// and @typescript-eslint rules can crash on ambient .d.ts
export default [...config.typescript, { ignores: ['types/**'] }];
