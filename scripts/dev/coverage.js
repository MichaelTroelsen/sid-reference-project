#!/usr/bin/env node
/**
 * File-level carding coverage: what fraction of tagged SID files resolve to a
 * knowledge card, and where the remaining mass actually sits.
 *
 * Usage:  node scripts/dev/coverage.js
 *
 * WHY THIS EXISTS. `find-uncarded-tags.js` answers "which tags are uncarded",
 * but its default heuristics show only small personal-driver tags -- the tail.
 * Reading that as progress once produced the conclusion that the work was
 * nearly finished while 91% of uncarded FILES sat untouched in bigger tags.
 * This script counts files, not tags, so the head of the distribution can't
 * hide. Run it when deciding what a batch should target.
 *
 * Note it shares find-uncarded-tags.js's blind spot: `data/composers/*.json`
 * covers HVSC's MUSICIANS/ tree only, so GAMES/ files are invisible and every
 * count here is a lower bound.
 */
const fs = require('fs');
const path = require('path');

const RSID = /digi|sample|mixer/i;
const dir = path.join('data', 'composers');
const tags = new Map();
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
  let c;
  try {
    c = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  } catch {
    continue;
  }
  if (!Array.isArray(c.folder)) continue;
  for (const rec of c.folder) {
    const p = rec.player;
    if (!p) continue;
    if (!tags.has(p)) tags.set(p, { count: 0, comps: new Set() });
    const t = tags.get(p);
    t.count++;
    t.comps.add(c.name);
  }
}

const cardsDir = path.join('knowledge', 'players');
const carded = new Set();
for (const f of fs.readdirSync(cardsDir).filter((f) => f.endsWith('.md') && f !== '_template.md')) {
  const txt = fs.readFileSync(path.join(cardsDir, f), 'utf8');
  const m = txt.match(/"aliases":\s*\[([^\]]*)\]/);
  if (m) for (const a of m[1].match(/"([^"]+)"/g) || []) carded.add(a.replace(/"/g, ''));
}

let totalFiles = 0, cardedFiles = 0, uncardedFiles = 0;
const uncarded = [];
for (const [tag, v] of tags) {
  totalFiles += v.count;
  if (carded.has(tag)) cardedFiles += v.count;
  else {
    uncardedFiles += v.count;
    uncarded.push({ tag, count: v.count, ncomp: v.comps.size, rsid: RSID.test(tag) });
  }
}
uncarded.sort((a, b) => b.count - a.count);

const pct = (n) => ((n / totalFiles) * 100).toFixed(1);
console.log(`TAGGED FILES: ${totalFiles}`);
console.log(`  carded tag:   ${cardedFiles}  (${pct(cardedFiles)}%)`);
console.log(`  uncarded tag: ${uncardedFiles}  (${pct(uncardedFiles)}%)`);
console.log(`\nUNCARDED TAGS: ${uncarded.length}`);

const rsid = uncarded.filter((u) => u.rsid);
const nonRsid = uncarded.filter((u) => !u.rsid);
const sum = (a) => a.reduce((s, x) => s + x.count, 0);
console.log(`  [RSID?] digi/sample/mixer: ${rsid.length} tags, ${sum(rsid)} files`);
console.log(`  other:                     ${nonRsid.length} tags, ${sum(nonRsid)} files`);

const buckets = [[10, Infinity], [5, 9], [3, 4], [2, 2], [1, 1]];
console.log('\nUNCARDED TAGS BY FILE COUNT:');
for (const [lo, hi] of buckets) {
  const b = uncarded.filter((u) => u.count >= lo && u.count <= hi);
  const label = hi === Infinity ? `${lo}+` : lo === hi ? `${lo}` : `${lo}-${hi}`;
  console.log(`  ${label.padStart(4)} files: ${String(b.length).padStart(3)} tags, ${String(sum(b)).padStart(5)} files`);
}

console.log('\nTOP 20 UNCARDED BY FILE COUNT:');
for (const u of uncarded.slice(0, 20)) {
  console.log(
    `  ${String(u.count).padStart(4)} files  ${u.ncomp === 1 ? ' 1 comp' : String(u.ncomp).padStart(2) + ' comps'}  ${u.rsid ? '[RSID?] ' : '        '}${u.tag}`
  );
}
