import { r as runCli, a as parseNi } from './shared/ni.f699cf8a.mjs';
import 'node:fs';
import 'node:path';
import 'node:process';
import 'node:buffer';
import 'node:child_process';
import 'child_process';
import 'path';
import 'fs';
import 'node:url';
import 'node:os';
import 'node:timers/promises';
import 'stream';
import 'node:util';
import 'os';
import 'tty';
import 'readline';
import 'events';
import 'fs/promises';

runCli(
  (agent, _, hasLock) => parseNi(agent, ["--frozen-if-present"], hasLock),
  { autoInstall: true }
);
