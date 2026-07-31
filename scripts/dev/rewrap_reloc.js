// Wrap a RELOCATED raw binary into the original PSID/RSID header, shifting the
// embedded load address and the header's init/play addresses by the same delta.
//
// rewrap.js (batch29) deliberately preserves the original load address, which is
// correct for a same-address rebuild and wrong for a relocation control: leave
// init/play pointing at the old addresses and the player jumps into whatever now
// occupies them, which would fail for a reason that has nothing to do with the
// disassembly being right or wrong.
//
//   node rewrap_reloc.js <orig.sid> <reloc.bin> <delta-hex> <out.sid>
const fs = require('fs');
const [, , origPath, binPath, deltaHex, outPath] = process.argv;
const delta = parseInt(deltaHex, 16);

const sid = Buffer.from(fs.readFileSync(origPath));
const dataOffset = sid.readUInt16BE(0x06);
const hdrLoad = sid.readUInt16BE(0x08);
const hdrInit = sid.readUInt16BE(0x0a);
const hdrPlay = sid.readUInt16BE(0x0c);

let payloadStart = dataOffset;
let loadAddr = hdrLoad;
if (hdrLoad === 0) {
  loadAddr = sid.readUInt16LE(dataOffset);
  payloadStart = dataOffset + 2;
}

const bin = fs.readFileSync(binPath);
const payloadLen = sid.length - payloadStart;
if (bin.length !== payloadLen) {
  console.error(`length mismatch: payload ${payloadLen}, binary ${bin.length}`);
  process.exit(1);
}

// shift header entry points; play=0 means "no play routine", leave it alone
const newInit = (hdrInit + delta) & 0xffff;
const newPlay = hdrPlay === 0 ? 0 : (hdrPlay + delta) & 0xffff;
sid.writeUInt16BE(newInit, 0x0a);
sid.writeUInt16BE(newPlay, 0x0c);
if (hdrLoad === 0) sid.writeUInt16LE((loadAddr + delta) & 0xffff, dataOffset);
else sid.writeUInt16BE((loadAddr + delta) & 0xffff, 0x08);

bin.copy(sid, payloadStart);
fs.writeFileSync(outPath, sid);

const hex = (n) => '$' + n.toString(16).padStart(4, '0');
console.log(JSON.stringify({
  out: outPath, delta: hex(delta),
  load: `${hex(loadAddr)} -> ${hex(loadAddr + delta)}`,
  init: `${hex(hdrInit)} -> ${hex(newInit)}`,
  play: hdrPlay === 0 ? '$0000 (unchanged, no play routine)' : `${hex(hdrPlay)} -> ${hex(newPlay)}`,
  payloadBytes: payloadLen,
}));
