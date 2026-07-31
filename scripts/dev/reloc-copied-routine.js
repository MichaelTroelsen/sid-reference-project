// Relocation control for 4753-softcopy's copied decode routine.
//
// The player copies a 172-byte routine out of its own payload to $033C (the
// tape buffer) and runs it there. batch29 verified the $1000-convention files
// by moving that routine $033C -> $035C (+$20, deliberately not page-aligned)
// and requiring a cycle-identical trace. This does the same for an $080d file.
//
// Two edits are needed and nothing else:
//   1. the routine's OWN internal absolute references, which live in the copy
//      SOURCE bytes inside the payload, shift by +$20
//   2. the loader's references to the routine -- the copy destination operand
//      ($033b,X), the JSR target, and the per-segment operand pokes
//      ($038F/$039F/$03A5) -- shift by +$20
//
// Operands are patched ONLY inside instructions the disassembler identified.
// A blind scan for 16-bit values in range would fire constantly inside 60KB of
// PCM sample data.
const fs = require('fs');
const DELTA = 0x20;
const LO = 0x033b, HI = 0x03e7; // routine extent, incl. the $033b copy base

const [, , prgPath, mapPath, srcHex, lenHex, outPath] = process.argv;
const SRC = parseInt(srcHex, 16), N = parseInt(lenHex, 16);

const prg = fs.readFileSync(prgPath);
const org = prg.readUInt16LE(0);
const mem = Buffer.from(prg.subarray(2));
const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const starts = new Set(map.codeStarts);

const LEN3 = new Set([0x4c,0x20,0x6c,0xad,0x8d,0xbd,0x9d,0xb9,0x99,0xae,0x8e,0xac,0x8c,
  0xcd,0xed,0x6d,0x2d,0x0d,0x4d,0x2c,0xee,0xce,0xdd,0xd9,0xbc,0xbe,0x1d,0x19,0x3d,0x39,
  0x5d,0x59,0x7d,0x79,0xfd,0xf9,0xde,0xfe,0x0e,0x1e,0x2e,0x3e,0x4e,0x5e,0x6e,0x7e]);

// (1) the loader's own instructions
let loaderPatched = 0;
for (const a of starts) {
  const op = mem[a - org];
  if (!LEN3.has(op)) continue;
  const t = mem[a - org + 1] | (mem[a - org + 2] << 8);
  if (t < LO || t > HI) continue;
  const nt = t + DELTA;
  mem[a - org + 1] = nt & 0xff;
  mem[a - org + 2] = nt >> 8;
  loaderPatched++;
}

// (2) the routine body, sitting in the payload as copy-source bytes. Disassemble
// it at its RUNTIME address, then shift its own absolute self-references.
const routineMap = JSON.parse(fs.readFileSync(outPath.replace(/\.prg$/, '') + '.map.json', 'utf8'));
const rStarts = new Set(routineMap.codeStarts);
const RORG = routineMap.org;
let bodyPatched = 0;
for (const ra of rStarts) {
  const off = ra - RORG;               // offset within the routine
  const abs = SRC + off;               // where that byte lives in the payload
  const op = mem[abs - org];
  if (!LEN3.has(op)) continue;
  const t = mem[abs - org + 1] | (mem[abs - org + 2] << 8);
  if (t < LO || t > HI) continue;
  const nt = t + DELTA;
  mem[abs - org + 1] = nt & 0xff;
  mem[abs - org + 2] = nt >> 8;
  bodyPatched++;
}

fs.writeFileSync(outPath, Buffer.concat([Buffer.from([org & 0xff, org >> 8]), mem]));
const orig = prg.subarray(2);
let diff = 0;
for (let i = 0; i < mem.length; i++) if (mem[i] !== orig[i]) diff++;
console.log(JSON.stringify({
  out: outPath, delta: '$' + DELTA.toString(16),
  loaderOperandsPatched: loaderPatched,
  routineOperandsPatched: bodyPatched,
  bytesDifferingFromOriginal: diff,
}));
