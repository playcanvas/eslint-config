import base from './configs/base.js';
import json from './configs/json.js';
import legacy from './configs/legacy.js';
import typescript from './configs/typescript.js';

export default {
    legacy,
    typescript,
    json,
    base,
    recommended: [...base, ...json, ...typescript],
};
