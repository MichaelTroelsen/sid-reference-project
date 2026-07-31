// Adjudicate the code-classified instruction starts that never executed:
// genuinely cold code, or recursive descent that walked into data?
//
// Signal used: how is each one REACHED? A start that is the explicit target of
// a branch/JSR/JMP from a CONFIRMED-EXECUTED instruction is very likely real
// code that simply never ran. One reachable only by falling through from
// another unexecuted instruction inherits that instruction's doubt.
const fs = require('fs');
const ROOT = 'C:/Users/mit/claude/sid-reference-project/scratchpad/';
const map = JSON.parse(fs.readFileSync(ROOT + 'defmon.map.json', 'utf8'));
const executed = new Set(fs.readFileSync(ROOT + 'executed2.txt', 'utf8')
  .trim().split(/\s+/).filter(Boolean).map((h) => parseInt(h, 16)));
const mem = fs.readFileSync(ROOT + 'defmon_antispeed.prg').subarray(2);
const org = map.org, END = map.end + 1;
const at = (a) => mem[a - org];
const starts = new Set(map.codeStarts);

const BRANCH = new Set([0x10,0x30,0x50,0x70,0x90,0xb0,0xd0,0xf0]);
const LEN3 = new Set([0x4c,0x20,0x6c]); // JMP abs, JSR abs, JMP ind

// Build: for every confirmed-executed instruction, which addresses does it
// explicitly transfer control to?
const targetsFromExecuted = new Set();
const targetsFromUnexecuted = new Set();
for (const a of starts) {
  const op = at(a);
  let t = null;
  if (BRANCH.has(op)) t = a + 2 + ((at(a + 1) << 24) >> 24);
  else if (op === 0x4c || op === 0x20) t = at(a + 1) | (at(a + 2) << 8);
  if (t === null || t < org || t >= END) continue;
  (executed.has(a) ? targetsFromExecuted : targetsFromUnexecuted).add(t);
}

const unexec = [...starts].filter((a) => !executed.has(a)).sort((x, y) => x - y);

// contiguity: is this start part of a run of unexecuted starts?
const runOf = new Map();
let runId = 0;
for (let i = 0; i < unexec.length; i++) {
  if (i > 0 && unexec[i] - unexec[i - 1] <= 3) runOf.set(unexec[i], runId);
  else runOf.set(unexec[i], ++runId);
}
const runSize = {};
for (const [, r] of runOf) runSize[r] = (runSize[r] || 0) + 1;

const rows = unexec.map((a) => {
  const calledByExecuted = targetsFromExecuted.has(a);
  const calledByUnexecuted = targetsFromUnexecuted.has(a);
  const op = at(a);
  const hasInRangeAbs = (LEN3.has(op) || [0xad,0x8d,0xbd,0x9d,0xb9,0x99,0xae,0x8e,0xac,0x8c,
    0xcd,0xed,0x6d,0x2d,0x0d,0x4d,0x2c,0xee,0xce].includes(op))
    && (() => { const t = at(a + 1) | (at(a + 2) << 8); return t >= org && t < END; })();
  let verdict;
  if (calledByExecuted) verdict = 'REAL (branch/call target from executed code)';
  else if (calledByUnexecuted) verdict = 'inherited (target only from unexecuted code)';
  else verdict = 'FALLTHROUGH-ONLY (no explicit reference)';
  return { a, verdict, hasInRangeAbs, run: runSize[runOf.get(a)] };
});

const byVerdict = {};
for (const r of rows) byVerdict[r.verdict] = (byVerdict[r.verdict] || 0) + 1;

console.log('unexecuted code-classified instruction starts:', unexec.length);
console.log('\nverdicts:');
for (const [k, v] of Object.entries(byVerdict)) console.log(`  ${v.toString().padStart(3)}  ${k}`);
console.log('\nrisky subset (carries an in-range absolute operand relocation would rewrite):');
for (const r of rows.filter((r) => r.hasInRangeAbs)) {
  console.log(`  $${r.a.toString(16)}  runlen=${r.run}  ${r.verdict}`);
}
fs.writeFileSync(ROOT + 'unexecuted.txt', unexec.map((a) => a.toString(16)).join(' ') + '\n');
console.log('\nwrote scratchpad/unexecuted.txt');
