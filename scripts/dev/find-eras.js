#!/usr/bin/env node
/**
 * Temporal analysis: per-FILE production years from PSID/RSID headers, joined
 * against player tags — the chronological layer the connection scans lack.
 *
 * Usage:  node scripts/dev/find-eras.js
 *
 * WHY THIS EXISTS. find-connections.js / find-group-tools.js answer "who used
 * what"; they cannot answer "WHEN", because data/composers/*.json folder records
 * carry no date. docs/SID-HISTORY.md long recorded the temporal dimension as
 * data-blocked. It isn't: every .sid file in the local HVSC collection has a
 * PSID/RSID header whose `released` field (offset 0x56, 32 bytes) almost always
 * contains a year. This reads that year for every carded file and produces a
 * real production timeline + per-tool usage-year distribution.
 *
 * REQUIRES the local HVSC collection. Set HVSC env or edit HVSC below.
 * Default: C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music
 *
 * THE ONE CAVEAT (do not forget it): the header `released` year is the year of
 * the WORK, not the moment the tagged composer touched the file. For an original
 * tune those coincide; for a COVER or remake it carries the ORIGINAL's year. So a
 * min–max span over-reads (a modern composer who remade a 1989 tune shows a 1989
 * min — e.g. NecroPolo). Trust the DISTRIBUTION and the MEDIAN, not the extremes.
 * The built-in validity check (per-tool median usage-year vs the card's release
 * year) is the guard: they track closely, which cross-validates both the header
 * dates and the card release dates. ~97% of files carry a parseable year;
 * missing ones are simply skipped, so every count is a lower bound.
 */
const fs = require('fs');
const path = require('path');

const HVSC = process.env.HVSC || 'C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music';
if (!fs.existsSync(HVSC)) {
  console.error(`HVSC collection not found at: ${HVSC}\nSet the HVSC env var to your C64Music root.`);
  process.exit(1);
}

const g = JSON.parse(fs.readFileSync('knowledge/graph.json', 'utf8'));
const byId = new Map(g.nodes.map((n) => [n.id, n]));
const tag2card = new Map();
for (const n of g.nodes) for (const a of (n.aliases || [])) tag2card.set(a, n);

// PSID/RSID header `released` year (offset 0x56, 32 bytes, ISO-8859-1)
function headerYear(file) {
  try {
    const fd = fs.openSync(file, 'r');
    const b = Buffer.alloc(0x76);
    fs.readSync(fd, b, 0, 0x76, 0);
    fs.closeSync(fd);
    const magic = b.toString('latin1', 0, 4);
    if (magic !== 'PSID' && magic !== 'RSID') return null;
    const m = b.toString('latin1', 0x56, 0x76).match(/\b(19[7-9]\d|20[0-2]\d)\b/);
    return m ? +m[1] : null;
  } catch { return null; }
}
// collection_path "_High Voltage SID Collection/MUSICIANS/..." -> HVSC/MUSICIANS/...
const hvscPath = (cp) => path.join(HVSC, cp.slice(cp.indexOf('/') + 1));
const median = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };

const decades = {};
const cardYears = new Map();
const compYears = new Map();
let scanned = 0, dated = 0;
for (const f of fs.readdirSync('data/composers')) {
  if (!f.endsWith('.json')) continue;
  let c; try { c = JSON.parse(fs.readFileSync(path.join('data/composers', f), 'utf8')); } catch { continue; }
  if (!Array.isArray(c.folder)) continue;
  for (const rec of c.folder) {
    if (!rec.collection_path) continue;
    scanned++;
    const y = headerYear(hvscPath(rec.collection_path));
    if (!y) continue;
    dated++;
    decades[Math.floor(y / 10) * 10] = (decades[Math.floor(y / 10) * 10] || 0) + 1;
    if (!compYears.has(c.name)) compYears.set(c.name, []);
    compYears.get(c.name).push(y);
    const card = tag2card.get(rec.player);
    if (card) { if (!cardYears.has(card.id)) cardYears.set(card.id, []); cardYears.get(card.id).push(y); }
  }
}

console.log(`Scanned ${scanned} files; ${dated} carry a header year (${(100 * dated / scanned).toFixed(1)}%).`);

console.log('\n=== PRODUCTION TIMELINE (files by decade, from PSID header year) ===');
const maxd = Math.max(...Object.values(decades));
for (const k of Object.keys(decades).sort())
  console.log(`  ${k}s: ${String(decades[k]).padStart(6)}  ${'#'.repeat(Math.round(40 * decades[k] / maxd))}`);

console.log('\n=== TOOL USAGE-YEARS vs CARD RELEASE (validity check — median should track release) ===');
const rows = [];
for (const [id, ys] of cardYears) {
  if (ys.length < 20) continue;
  const rel = (byId.get(id).released || '').match(/\b(19[7-9]\d|20[0-2]\d)\b/);
  rows.push({ id, n: ys.length, lo: Math.min(...ys), hi: Math.max(...ys), med: median(ys), rel: rel ? +rel[0] : null });
}
rows.sort((a, b) => (a.rel || 0) - (b.rel || 0) || a.med - b.med);
for (const r of rows.slice(0, 30))
  console.log(`  ${r.id.padEnd(24)} n=${String(r.n).padStart(5)}  ${r.lo}–${r.hi}  median ${r.med}  | release ${r.rel ?? '?'}${r.rel && r.med >= r.rel ? '' : '  <-- median precedes release (cover effect / check)'}`);

console.log('\n=== PERSISTING vs MODERN (composers >=20 dated files) ===');
console.log('   Uses median, not min, to avoid the cover-year trap. "veteran" = median <=1995; "modern" = median >=2008.');
const comps = [];
for (const [c, ys] of compYears) { if (ys.length < 20) continue; comps.push({ c, n: ys.length, med: median(ys), lo: Math.min(...ys), hi: Math.max(...ys) }); }
const vet = comps.filter((x) => x.med <= 1995).sort((a, b) => a.med - b.med);
const mod = comps.filter((x) => x.med >= 2008).sort((a, b) => b.med - a.med);
console.log(`  veterans (median<=1995): ${vet.length}   modern (median>=2008): ${mod.length}   total profiled: ${comps.length}`);
