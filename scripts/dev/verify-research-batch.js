#!/usr/bin/env node
// Verify a batch of research-agent card edits before committing.
//
// Checks the invariants the agents were told to hold, rather than trusting
// their self-reports. Caught one real defect already this session: an agent
// wrote prose into `csdb_release`, which is a number on 152 cards and null on
// 366 -- check-cards.js passed it because the JSON was still valid.
const { execSync } = require('child_process');
const fs = require('fs');

const ROOT = 'C:/Users/mit/claude/sid-reference-project';
process.chdir(ROOT);

const changed = execSync('git diff --name-only -- knowledge/players/', { encoding: 'utf8' })
  .trim().split('\n').filter(Boolean);

if (!changed.length) {
  console.log('no modified cards');
  process.exit(0);
}

// Tier 3 = runtime facts that require a disassembler. A research pass must not
// touch these; header metadata (load/init/play) is NOT a disassembly fact.
const TIER3 = ['load_address', 'zero_page', 'layout', 'init', 'play', 'speed',
  'order_list', 'patterns', 'instruments', 'wavetable', 'pulsetable',
  'filtertable', 'encoding'];

let problems = 0;
const report = [];

for (const file of changed) {
  const id = file.replace(/^.*\//, '').replace(/\.md$/, '');
  const now = fs.readFileSync(file, 'utf8');
  const was = execSync(`git show HEAD:${file}`, { encoding: 'utf8' });

  const field = (txt, k) => {
    const m = txt.match(new RegExp('"' + k + '":\\s*([^,\\n]+)'));
    return m ? m[1].trim() : null;
  };

  const issues = [];

  // 1. status must be unchanged
  if (field(now, 'status') !== field(was, 'status')) {
    issues.push(`STATUS CHANGED: ${field(was, 'status')} -> ${field(now, 'status')}`);
  }

  // 2. csdb_release must be a number or null -- never prose
  const cr = field(now, 'csdb_release');
  if (cr && cr !== 'null' && !/^\d+$/.test(cr)) {
    issues.push(`csdb_release is not number|null: ${cr.slice(0, 60)}`);
  }

  // 3. no Tier 3 field may have changed value
  for (const k of TIER3) {
    const a = field(was, k), b = field(now, k);
    if (a !== null && b !== null && a !== b) {
      issues.push(`TIER 3 EDITED (${k}): ${String(a).slice(0, 40)} -> ${String(b).slice(0, 40)}`);
    }
  }

  // 4. new facts should come with new sources -- a card that grew its quirks
  //    but not its sources is a soft smell, not a hard failure
  const count = (txt, k) => ((txt.match(new RegExp('"' + k + '":\\s*\\[([\\s\\S]*?)\\n  \\]'))
    || ['', ''])[1].split(/\n    "/).length - 1);
  const dq = count(now, 'quirks') - count(was, 'quirks');
  const ds = count(now, 'sources') - count(was, 'sources');
  if (dq > 0 && ds === 0) issues.push(`+${dq} quirks but +0 sources (uncited?)`);

  // 5. dated re-research note present, so the next pass doesn't redo the work
  const dated = /Re-research pass, 2026-07-31|RE-RESEARCH PASS, 2026-07-31/i.test(now);

  report.push({ id, issues, dq, ds, dated });
  problems += issues.length;
}

console.log(`cards modified: ${report.length}\n`);
console.log('id                        +quirks  +src  dated  issues');
for (const r of report) {
  console.log(
    r.id.padEnd(26) +
    String(r.dq).padStart(6) + String(r.ds).padStart(6) +
    (r.dated ? '    yes' : '    NO ') +
    (r.issues.length ? '  ' + r.issues.join('; ') : '  -')
  );
}
console.log(`\n${problems} problem(s) found`);
process.exit(problems ? 1 : 0);
