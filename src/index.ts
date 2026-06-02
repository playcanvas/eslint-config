import legacy from './configs/legacy.js';
import react from './configs/react.js';
import typescript from './configs/typescript.js';

// re-exported so consumers (e.g. the engine) can extend jsdoc `definedTags`
// without reaching into the config array internals
export { esmScriptTags } from './configs/legacy.js';

export default {
    legacy,
    typescript,
    react
};
