#!/usr/bin/env node
// Extract a PSID/RSID payload to a .prg RetroDebugger can retro_load.
// Honours the loadAddr===0 branch (load address embedded in the payload's
// first 2 LE bytes) -- see lesson 75.
//   node sid2prg.js <in.sid> <out.prg>
const fs = require('fs');
const [, , inPath, outPath] = process.argv;
const b = fs.readFileSync(inPath);

const magic = b.toString('ascii', 0, 4);
const dataOffset = b.readUInt16BE(6);
const loadAddr = b.readUInt16BE(8);
const initAddr = b.readUInt16BE(10);
const playAddr = b.readUInt16BE(12);

let payload = b.subarray(dataOffset);
let realLoad = loadAddr;
if (loadAddr === 0) {
  realLoad = payload.readUInt16LE(0);
  payload = payload.subarray(2);
}

const hex = (n) => '$' + n.toString(16).padStart(4, '0');
console.log(JSON.stringify({
  file: inPath.split(/[\\/]/).pop(),
  magic,
  headerLoad: hex(loadAddr),
  realLoad: hex(realLoad),
  init: hex(initAddr),
  play: hex(playAddr),
  payloadBytes: payload.length,
  endsAt: hex(realLoad + payload.length - 1),
}));

if (outPath) {
  fs.writeFileSync(outPath, Buffer.concat([Buffer.from([realLoad & 0xff, realLoad >> 8]), payload]));
  console.log('wrote', outPath);
}
