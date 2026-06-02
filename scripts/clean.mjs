// remove the build output directory for a fresh tsc build
import { rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
