#!/usr/bin/env node
// Recursive-descent 6502 disassembler for SID payloads, emitting 64tass source.
//
// WHY: SIDdecompiler hangs on self-modifying players (see lesson 95). It is a
// hybrid static/dynamic tool whose trace state diverges when the player writes
// into its own code. A purely static recursive-descent pass has no such state:
// it reads whatever bytes are there now, which are exactly the bytes we must
// reproduce byte-for-byte.
//
//   node dis6502.js <prg> <org> <entry,entry,...> <out.asm>
//
// Entries are hex without $. Everything reachable from an entry is emitted as
// instructions; everything else as .byte data.

const fs = require('fs');

// --symbolic emits every in-range absolute address as `ORG + $offset` and every
// code label as `LABEL_ORG + $offset`, instead of hard literals. Changing the
// single ORG definition then relocates the whole player, INCLUDING addresses
// that land mid-instruction -- which matters because self-modifying players
// write into their own operand bytes (defmon zeroes seven such slots at init),
// and a label-based scheme cannot name a mid-instruction target at all.
// This exists to build the relocation control: a byte-identical rebuild proves
// nothing (lesson 98), but a RELOCATED rebuild that still traces identically
// proves the code/data split was right.
// --keep-literal <file> : instruction starts listed in <file> (hex, whitespace
// separated) keep LITERAL absolute operands even in --symbolic mode, so they
// emit byte-identical content at any ORG. This isolates a relocation control to
// a trusted subset: bytes that are really data stay intact, and any that are
// genuinely cold code never execute anyway, so neither can perturb the trace.
const keepIdx = process.argv.indexOf('--keep-literal');
const KEEP = new Set();
if (keepIdx > -1) {
  for (const t of require('fs').readFileSync(process.argv[keepIdx + 1], 'utf8').trim().split(/\s+/)) {
    if (t) KEEP.add(parseInt(t, 16));
  }
}
const args = process.argv.filter((a, i) =>
  a !== '--symbolic' && a !== '--keep-literal' && i !== keepIdx + 1);
const SYMBOLIC = process.argv.includes('--symbolic');
const [, , prgPath, orgHex, entryList, outPath] = args;
const raw = fs.readFileSync(prgPath);
const org = parseInt(orgHex, 16);
const mem = raw.subarray(2); // strip the .prg load-address word
const END = org + mem.length;

const at = (a) => mem[a - org];
const inRange = (a) => a >= org && a < END;

// opcode -> [mnemonic, addressing mode]. Undocumented opcodes are marked ILL so
// a run of them reads as a decode error rather than silently becoming "code".
const IMP='imp',IMM='imm',ZP='zp',ZPX='zpx',ZPY='zpy',ABS='abs',ABX='abx',ABY='aby',
      IND='ind',IZX='izx',IZY='izy',REL='rel';
const OPS = {};
const def = (op, m, mode) => { OPS[op] = [m, mode]; };
// load/store
def(0xA9,'LDA',IMM);def(0xA5,'LDA',ZP);def(0xB5,'LDA',ZPX);def(0xAD,'LDA',ABS);
def(0xBD,'LDA',ABX);def(0xB9,'LDA',ABY);def(0xA1,'LDA',IZX);def(0xB1,'LDA',IZY);
def(0xA2,'LDX',IMM);def(0xA6,'LDX',ZP);def(0xB6,'LDX',ZPY);def(0xAE,'LDX',ABS);def(0xBE,'LDX',ABY);
def(0xA0,'LDY',IMM);def(0xA4,'LDY',ZP);def(0xB4,'LDY',ZPX);def(0xAC,'LDY',ABS);def(0xBC,'LDY',ABX);
def(0x85,'STA',ZP);def(0x95,'STA',ZPX);def(0x8D,'STA',ABS);def(0x9D,'STA',ABX);
def(0x99,'STA',ABY);def(0x81,'STA',IZX);def(0x91,'STA',IZY);
def(0x86,'STX',ZP);def(0x96,'STX',ZPY);def(0x8E,'STX',ABS);
def(0x84,'STY',ZP);def(0x94,'STY',ZPX);def(0x8C,'STY',ABS);
// transfers / stack
def(0xAA,'TAX',IMP);def(0xA8,'TAY',IMP);def(0xBA,'TSX',IMP);def(0x8A,'TXA',IMP);
def(0x9A,'TXS',IMP);def(0x98,'TYA',IMP);
def(0x48,'PHA',IMP);def(0x08,'PHP',IMP);def(0x68,'PLA',IMP);def(0x28,'PLP',IMP);
// arithmetic
def(0x69,'ADC',IMM);def(0x65,'ADC',ZP);def(0x75,'ADC',ZPX);def(0x6D,'ADC',ABS);
def(0x7D,'ADC',ABX);def(0x79,'ADC',ABY);def(0x61,'ADC',IZX);def(0x71,'ADC',IZY);
def(0xE9,'SBC',IMM);def(0xE5,'SBC',ZP);def(0xF5,'SBC',ZPX);def(0xED,'SBC',ABS);
def(0xFD,'SBC',ABX);def(0xF9,'SBC',ABY);def(0xE1,'SBC',IZX);def(0xF1,'SBC',IZY);
def(0x29,'AND',IMM);def(0x25,'AND',ZP);def(0x35,'AND',ZPX);def(0x2D,'AND',ABS);
def(0x3D,'AND',ABX);def(0x39,'AND',ABY);def(0x21,'AND',IZX);def(0x31,'AND',IZY);
def(0x09,'ORA',IMM);def(0x05,'ORA',ZP);def(0x15,'ORA',ZPX);def(0x0D,'ORA',ABS);
def(0x1D,'ORA',ABX);def(0x19,'ORA',ABY);def(0x01,'ORA',IZX);def(0x11,'ORA',IZY);
def(0x49,'EOR',IMM);def(0x45,'EOR',ZP);def(0x55,'EOR',ZPX);def(0x4D,'EOR',ABS);
def(0x5D,'EOR',ABX);def(0x59,'EOR',ABY);def(0x41,'EOR',IZX);def(0x51,'EOR',IZY);
def(0xC9,'CMP',IMM);def(0xC5,'CMP',ZP);def(0xD5,'CMP',ZPX);def(0xCD,'CMP',ABS);
def(0xDD,'CMP',ABX);def(0xD9,'CMP',ABY);def(0xC1,'CMP',IZX);def(0xD1,'CMP',IZY);
def(0xE0,'CPX',IMM);def(0xE4,'CPX',ZP);def(0xEC,'CPX',ABS);
def(0xC0,'CPY',IMM);def(0xC4,'CPY',ZP);def(0xCC,'CPY',ABS);
def(0x24,'BIT',ZP);def(0x2C,'BIT',ABS);
// inc/dec
def(0xE6,'INC',ZP);def(0xF6,'INC',ZPX);def(0xEE,'INC',ABS);def(0xFE,'INC',ABX);
def(0xC6,'DEC',ZP);def(0xD6,'DEC',ZPX);def(0xCE,'DEC',ABS);def(0xDE,'DEC',ABX);
def(0xE8,'INX',IMP);def(0xC8,'INY',IMP);def(0xCA,'DEX',IMP);def(0x88,'DEY',IMP);
// shifts
def(0x0A,'ASL',IMP);def(0x06,'ASL',ZP);def(0x16,'ASL',ZPX);def(0x0E,'ASL',ABS);def(0x1E,'ASL',ABX);
def(0x4A,'LSR',IMP);def(0x46,'LSR',ZP);def(0x56,'LSR',ZPX);def(0x4E,'LSR',ABS);def(0x5E,'LSR',ABX);
def(0x2A,'ROL',IMP);def(0x26,'ROL',ZP);def(0x36,'ROL',ZPX);def(0x2E,'ROL',ABS);def(0x3E,'ROL',ABX);
def(0x6A,'ROR',IMP);def(0x66,'ROR',ZP);def(0x76,'ROR',ZPX);def(0x6E,'ROR',ABS);def(0x7E,'ROR',ABX);
// flow
def(0x4C,'JMP',ABS);def(0x6C,'JMP',IND);def(0x20,'JSR',ABS);
def(0x60,'RTS',IMP);def(0x40,'RTI',IMP);def(0x00,'BRK',IMP);
def(0x10,'BPL',REL);def(0x30,'BMI',REL);def(0x50,'BVC',REL);def(0x70,'BVS',REL);
def(0x90,'BCC',REL);def(0xB0,'BCS',REL);def(0xD0,'BNE',REL);def(0xF0,'BEQ',REL);
// flags / nop
def(0x18,'CLC',IMP);def(0x38,'SEC',IMP);def(0x58,'CLI',IMP);def(0x78,'SEI',IMP);
def(0xB8,'CLV',IMP);def(0xD8,'CLD',IMP);def(0xF8,'SED',IMP);def(0xEA,'NOP',IMP);

// UNDOCUMENTED OPCODES. Not optional: defMON genuinely executes $CB (AXS/SBX)
// at $14C3 and $154A, confirmed by RetroDebugger CPU tracking. Omitting these
// made the walker stop dead at the first one and misclassify everything
// downstream as data -- and the byte-diff still reported 100.000000%, because
// misclassified code round-trips perfectly as .byte. Only the cross-check
// against executed addresses caught it.
def(0xCB,'AXS',IMM);                                   // SBX #imm
def(0x0B,'ANC',IMM);def(0x2B,'ANC',IMM);
def(0x4B,'ALR',IMM);def(0x6B,'ARR',IMM);
def(0x8B,'ANE',IMM);def(0xAB,'LXA',IMM);def(0xEB,'SBC',IMM);
def(0xA7,'LAX',ZP);def(0xB7,'LAX',ZPY);def(0xAF,'LAX',ABS);def(0xBF,'LAX',ABY);
def(0xA3,'LAX',IZX);def(0xB3,'LAX',IZY);
def(0x87,'SAX',ZP);def(0x97,'SAX',ZPY);def(0x8F,'SAX',ABS);def(0x83,'SAX',IZX);
def(0xC7,'DCP',ZP);def(0xD7,'DCP',ZPX);def(0xCF,'DCP',ABS);def(0xDF,'DCP',ABX);
def(0xDB,'DCP',ABY);def(0xC3,'DCP',IZX);def(0xD3,'DCP',IZY);
def(0xE7,'ISC',ZP);def(0xF7,'ISC',ZPX);def(0xEF,'ISC',ABS);def(0xFF,'ISC',ABX);
def(0xFB,'ISC',ABY);def(0xE3,'ISC',IZX);def(0xF3,'ISC',IZY);
def(0x07,'SLO',ZP);def(0x17,'SLO',ZPX);def(0x0F,'SLO',ABS);def(0x1F,'SLO',ABX);
def(0x1B,'SLO',ABY);def(0x03,'SLO',IZX);def(0x13,'SLO',IZY);
def(0x27,'RLA',ZP);def(0x37,'RLA',ZPX);def(0x2F,'RLA',ABS);def(0x3F,'RLA',ABX);
def(0x3B,'RLA',ABY);def(0x23,'RLA',IZX);def(0x33,'RLA',IZY);
def(0x47,'SRE',ZP);def(0x57,'SRE',ZPX);def(0x4F,'SRE',ABS);def(0x5F,'SRE',ABX);
def(0x5B,'SRE',ABY);def(0x43,'SRE',IZX);def(0x53,'SRE',IZY);
def(0x67,'RRA',ZP);def(0x77,'RRA',ZPX);def(0x6F,'RRA',ABS);def(0x7F,'RRA',ABX);
def(0x7B,'RRA',ABY);def(0x63,'RRA',IZX);def(0x73,'RRA',IZY);
// undocumented NOPs, which consume operand bytes and so shift decoding
def(0x1A,'NOP',IMP);def(0x3A,'NOP',IMP);def(0x5A,'NOP',IMP);def(0x7A,'NOP',IMP);
def(0xDA,'NOP',IMP);def(0xFA,'NOP',IMP);
def(0x80,'NOP',IMM);def(0x82,'NOP',IMM);def(0x89,'NOP',IMM);def(0xC2,'NOP',IMM);def(0xE2,'NOP',IMM);
def(0x04,'NOP',ZP);def(0x44,'NOP',ZP);def(0x64,'NOP',ZP);
def(0x14,'NOP',ZPX);def(0x34,'NOP',ZPX);def(0x54,'NOP',ZPX);def(0x74,'NOP',ZPX);
def(0xD4,'NOP',ZPX);def(0xF4,'NOP',ZPX);
def(0x0C,'NOP',ABS);
def(0x1C,'NOP',ABX);def(0x3C,'NOP',ABX);def(0x5C,'NOP',ABX);def(0x7C,'NOP',ABX);
def(0xDC,'NOP',ABX);def(0xFC,'NOP',ABX);

const SIZE = { [IMP]:1, [IMM]:2, [ZP]:2, [ZPX]:2, [ZPY]:2, [REL]:2,
               [ABS]:3, [ABX]:3, [ABY]:3, [IND]:3, [IZX]:2, [IZY]:2 };

// 64tass does not accept the same spellings for undocumented opcodes (it
// rejects `ALR #$7f` outright). The WALKER still has to decode them, or control
// flow stops dead at the first one -- but the EMITTER writes them as raw bytes
// with the decode in a comment, which sidesteps assembler-dialect disagreement
// and makes byte-exactness structural rather than something to verify.
const ILLEGAL = new Set([
  0xCB,0x0B,0x2B,0x4B,0x6B,0x8B,0xAB,0xEB,
  0xA7,0xB7,0xAF,0xBF,0xA3,0xB3, 0x87,0x97,0x8F,0x83,
  0xC7,0xD7,0xCF,0xDF,0xDB,0xC3,0xD3, 0xE7,0xF7,0xEF,0xFF,0xFB,0xE3,0xF3,
  0x07,0x17,0x0F,0x1F,0x1B,0x03,0x13, 0x27,0x37,0x2F,0x3F,0x3B,0x23,0x33,
  0x47,0x57,0x4F,0x5F,0x5B,0x43,0x53, 0x67,0x77,0x6F,0x7F,0x7B,0x63,0x73,
  0x1A,0x3A,0x5A,0x7A,0xDA,0xFA,
  0x80,0x82,0x89,0xC2,0xE2, 0x04,0x44,0x64,
  0x14,0x34,0x54,0x74,0xD4,0xF4, 0x0C, 0x1C,0x3C,0x5C,0x7C,0xDC,0xFC,
]);

const isCode = new Uint8Array(mem.length);   // 1 = instruction start
const covered = new Uint8Array(mem.length);  // 1 = belongs to an instruction
const labels = new Set();
const terminal = new Set(['RTS', 'RTI', 'JMP', 'BRK']);

function walk(start) {
  const stack = [start];
  while (stack.length) {
    let pc = stack.pop();
    for (;;) {
      if (!inRange(pc) || covered[pc - org]) break;
      const op = at(pc);
      const info = OPS[op];
      if (!info) break;                      // undocumented opcode: stop, treat as data
      const [mn, mode] = info;
      const len = SIZE[mode];
      if (!inRange(pc + len - 1)) break;
      isCode[pc - org] = 1;
      for (let i = 0; i < len; i++) covered[pc - org + i] = 1;

      if (mode === REL) {
        const target = pc + 2 + ((at(pc + 1) << 24) >> 24);
        if (inRange(target)) { labels.add(target); stack.push(target); }
      } else if (mode === ABS && (mn === 'JMP' || mn === 'JSR')) {
        const target = at(pc + 1) | (at(pc + 2) << 8);
        if (inRange(target)) { labels.add(target); stack.push(target); }
      }
      if (terminal.has(mn)) break;
      pc += len;
    }
  }
}

const entries = entryList.split(',').map((e) => parseInt(e, 16));
for (const e of entries) { labels.add(e); walk(e); }

// emit
const hex2 = (n) => n.toString(16).padStart(2, '0');
const hex4 = (n) => n.toString(16).padStart(4, '0');
const lbl = (a) => 'L' + hex4(a).toUpperCase();
const out = [`; generated by dis6502.js from ${prgPath.split(/[\\/]/).pop()}`,
             `; recursive descent from ${entries.map((e) => '$' + hex4(e)).join(', ')}`,
             ...(SYMBOLIC
               ? [`; --symbolic: change ORG below to relocate the whole player.`,
                  `; NOTE: absolute addresses inside DATA (pointer tables) are not`,
                  `; rewritten by this -- only operands of decoded instructions are.`,
                  `ORG = $${hex4(org)}`, `        * = ORG`]
               : [`        * = $${hex4(org)}`]), ''];

let a = org;
while (a < END) {
  if (isCode[a - org]) {
    const [mn, mode] = OPS[at(a)];
    const len = SIZE[mode];
    let operand = '';
    if (mode === IMM) operand = `#$${hex2(at(a + 1))}`;
    else if (mode === ZP) operand = `$${hex2(at(a + 1))}`;
    else if (mode === ZPX) operand = `$${hex2(at(a + 1))},x`;
    else if (mode === ZPY) operand = `$${hex2(at(a + 1))},y`;
    else if (mode === IZX) operand = `($${hex2(at(a + 1))},x)`;
    else if (mode === IZY) operand = `($${hex2(at(a + 1))}),y`;
    else if (mode === REL) {
      const t = a + 2 + ((at(a + 1) << 24) >> 24);
      operand = inRange(t) ? lbl(t) : `$${hex4(t)}`;
    } else if (mode !== IMP) {
      const t = at(a + 1) | (at(a + 2) << 8);
      const base = SYMBOLIC && inRange(t) && !KEEP.has(a) ? `ORG+$${hex4(t - org)}`
                 : inRange(t) && labels.has(t) ? lbl(t)
                 : `$${hex4(t)}`;
      operand = mode === ABS ? base
              : mode === ABX ? `${base},x`
              : mode === ABY ? `${base},y`
              : `(${base})`;
      // force 3-byte encoding so a low target cannot assemble as zero page
      if (mode !== IND && t < 0x100) operand = mode === ABS ? `$${hex4(t)}` : operand;
    }
    const label = labels.has(a) ? lbl(a) : '';
    if (ILLEGAL.has(at(a))) {
      const raw = [];
      for (let i = 0; i < len; i++) raw.push(`$${hex2(at(a + i))}`);
      out.push(`${label.padEnd(8)}.byte ${raw.join(',')}  ; ${mn}${operand ? ' ' + operand : ''} (undocumented)`);
    } else {
      out.push(`${label.padEnd(8)}${mn}${operand ? ' ' + operand : ''}`);
    }
    a += len;
  } else {
    // data run up to the next instruction start
    const runStart = a;
    const bytes = [];
    while (a < END && !isCode[a - org]) { bytes.push(at(a)); a++; }
    if (labels.has(runStart)) out.push(`${lbl(runStart)}`);
    for (let i = 0; i < bytes.length; i += 16) {
      out.push('        .byte ' + bytes.slice(i, i + 16).map((b) => `$${hex2(b)}`).join(','));
    }
  }
}

fs.writeFileSync(outPath, out.join('\n') + '\n');
// Dump the authoritative code map so cross-checks do not have to re-derive
// instruction lengths from the emitted text (which is guesswork, not fact).
fs.writeFileSync(outPath.replace(/\.asm$/, '') + '.map.json', JSON.stringify({
  org, end: END - 1,
  codeStarts: Array.from(isCode).map((v, i) => (v ? org + i : -1)).filter((v) => v >= 0),
  coveredAddrs: Array.from(covered).map((v, i) => (v ? org + i : -1)).filter((v) => v >= 0),
}));
const codeBytes = covered.reduce((s, v) => s + v, 0);
console.log(JSON.stringify({
  org: '$' + hex4(org), end: '$' + hex4(END - 1), total: mem.length,
  codeBytes, dataBytes: mem.length - codeBytes,
  codePct: ((100 * codeBytes) / mem.length).toFixed(1) + '%',
  labels: labels.size, out: outPath,
}));
