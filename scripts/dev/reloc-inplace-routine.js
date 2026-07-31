// Relocation control for James_Brown_Is_Dead.sid, where the 4753 routine sits
// IN-PLACE at $093C rather than being copied out to the tape buffer. That makes
// the control a physical move rather than a copy-source patch.
//
// Delta is +$10, not the +$20 used for the $080d files: the routine ends at
// $09E7 and real code resumes at $0A00 (LDA #$3B / STA $D011), leaving only 24
// bytes of zero padding, so +$20 would overwrite live code.
const fs = require('fs');
const DELTA = 0x10;
const RSTART = 0x093c, RLEN = 0xac, REND = RSTART + RLEN - 1; // $093C..$09E7
const LO = RSTART - 1, HI = REND; // include $093B, the copy-base style operand

const prg = fs.readFileSync('C:/Users/mit/claude/sid-reference-project/scratchpad/jbid_bad.prg');
const org = prg.readUInt16LE(0);
const mem = Buffer.from(prg.subarray(2));
const at = (a) => mem[a - org];

const LEN3 = new Set([0x4c,0x20,0x6c,0xad,0x8d,0xbd,0x9d,0xb9,0x99,0xae,0x8e,0xac,0x8c,
  0xcd,0xed,0x6d,0x2d,0x0d,0x4d,0x2c,0xee,0xce,0xdd,0xd9,0xbc,0xbe,0x1d,0x19,0x3d,0x39,
  0x5d,0x59,0x7d,0x79,0xfd,0xf9,0xde,0xfe,0x0e,0x1e,0x2e,0x3e,0x4e,0x5e,0x6e,0x7e]);

const rMap = JSON.parse(fs.readFileSync(
  'C:/Users/mit/claude/sid-reference-project/scratchpad/jbid_routine.map.json', 'utf8'));
const lMap = JSON.parse(fs.readFileSync(
  'C:/Users/mit/claude/sid-reference-project/scratchpad/jbid_bad.map.json', 'utf8'));

// 1. take a clean copy of the routine, patch its own self-references
const body = Buffer.alloc(RLEN);
for (let i = 0; i < RLEN; i++) body[i] = at(RSTART + i);
let bodyPatched = 0;
for (const a of rMap.codeStarts) {
  const off = a - RSTART;
  const op = body[off];
  if (!LEN3.has(op)) continue;
  const t = body[off + 1] | (body[off + 2] << 8);
  if (t < LO || t > HI) continue;
  const nt = t + DELTA;
  body[off + 1] = nt & 0xff;
  body[off + 2] = nt >> 8;
  bodyPatched++;
}

// 2. patch the loader's references to the routine
let loaderPatched = 0;
for (const a of lMap.codeStarts) {
  const op = at(a);
  if (!LEN3.has(op)) continue;
  const t = at(a + 1) | (at(a + 2) << 8);
  if (t < LO || t > HI) continue;
  const nt = t + DELTA;
  mem[a - org + 1] = nt & 0xff;
  mem[a - org + 2] = nt >> 8;
  loaderPatched++;
}

// 3. write the patched routine at its new home. The old first $10 bytes stay
//    behind as stale content; nothing references them once step 2 is applied.
body.copy(mem, RSTART + DELTA - org);

const out = Buffer.concat([Buffer.from([org & 0xff, org >> 8]), mem]);
fs.writeFileSync('C:/Users/mit/claude/sid-reference-project/scratchpad/jbid_reloc.prg', out);
const orig = prg.subarray(2);
let diff = 0;
for (let i = 0; i < mem.length; i++) if (mem[i] !== orig[i]) diff++;
console.log(JSON.stringify({
  delta: '$' + DELTA.toString(16),
  newExtent: '$' + (RSTART + DELTA).toString(16) + '..$' + (REND + DELTA).toString(16),
  routineSelfRefsPatched: bodyPatched,
  loaderRefsPatched: loaderPatched,
  bytesDifferingFromOriginal: diff,
}));
