#!/usr/bin/env node
/**
 * Connection-finding over the project's OWN structured data — surfaces
 * candidate player<->player relationships the card `edges[]` don't yet record.
 *
 * Usage:  node scripts/dev/find-connections.js [--pairs N] [--min-shared K]
 *
 * WHY THIS EXISTS. The corpus was built to eventually surface non-obvious
 * connections between SID players/composers for a history narrative (see the
 * project_tdz_endgame memory + docs). The obvious instrument — TDZ's NLP
 * entity graph — proved WRONG for this: it is a general-C64 graph whose
 * centrality is dominated by generic platform terms (Commodore 64, 1541, …)
 * and doc authors, with SID composers sparse. The RIGHT instrument is the
 * data already in this repo:
 *   - knowledge/graph.json  — card nodes (id, aliases, authors) + edges[]
 *   - data/composers/*.json — each composer's per-file `folder[].player` tags
 * Joining composer->tag usage against the cards gives three cheap signals.
 *
 * It computes:
 *   1. BRIDGE COMPOSERS — who used tools from the most DISTINCT developers.
 *      These are the omnivores (NecroPolo, Vincenzo, …). Useful on their own,
 *      but ALSO the main source of false pair-overlap: two niche modern
 *      trackers can look "connected" purely because the same 2-3 omnivores
 *      tried both. Read this list first so you can discount those pairs.
 *   2. PLAYER PAIRS — card pairs with high shared-composer overlap (Jaccard),
 *      DIFFERENT developers, and NO existing curated edge. Candidate hidden
 *      lineage / shared-scene-tool signal. Prints the actual shared composers
 *      so you can judge coherence yourself.
 *   3. CURATED LINEAGE CLUSTERS — connected components of the edges[] graph
 *      (the Laxity/JCH/SID-Factory dynasty is the spine).
 *
 * HOW TO READ THE PAIRS (the discipline that makes this useful, not noise):
 *   - Composer overlap is a PERSON/SCENE relationship, never code evidence.
 *     A confirmed pair becomes a prose [[link]] in both cards, NEVER a
 *     machine edge[]. (See PR #72 / the 2026-07-17 findings for the template:
 *     state the shared composers, say it's shared-USERS not shared-code, and
 *     "no `shares_routine_with` edge asserted".)
 *   - DISCOUNT two artifact classes before believing a pair:
 *       (a) POPULAR-TOOL artifacts — huge tools (DMC, Future Composer,
 *           Music Assembler, SoundMonitor) share 100+ composers with each
 *           other simply because everyone used them. High `shared`, low signal.
 *       (b) BRIDGE-COMPOSER artifacts — a small pair whose shared names are
 *           all omnivores from analysis 1. Not a scene link, just overlap.
 *   - BELIEVE a pair when the shared composers are a COHERENT cohort that are
 *     NOT omnivores — e.g. all one nationality/scene. Those were the real
 *     finds: Chubrocker<>Sosperec (all Hungarian), Hardtrack<>Reflex-Tracker
 *     (all Polish), Martin Galway<>Music Driver (all Ocean/English). Confirm
 *     nationality/scene from data/composers/*.json before writing anything.
 *
 * SHARES find-uncarded-tags.js's blind spot: data/composers/*.json is HVSC's
 * MUSICIANS/ tree only, so GAMES/ files are invisible and every count is a
 * lower bound. Run `node knowledge/build-graph.js` first so graph.json is fresh.
 */
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const opt = (name, def) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : def;
};
const MAX_PAIRS = parseInt(opt('--pairs', '20'), 10);
const MIN_SHARED = parseInt(opt('--min-shared', '3'), 10);

const g = JSON.parse(fs.readFileSync('knowledge/graph.json', 'utf8'));
const nodes = g.nodes, edges = g.edges;

// tag (alias) -> card node; also index nodes by id.
const tag2card = new Map();
for (const n of nodes) for (const a of (n.aliases || [])) tag2card.set(a, n);
const byId = new Map(nodes.map(n => [n.id, n]));

// primary developer string for a card (first author, stripped of group suffix)
function dev(n) {
  const a = (n.authors && n.authors[0]) || '';
  return a.split('/')[0].trim() || '(unknown)';
}

// composer -> Map(cardId -> fileCount); cardId -> Map(composer -> count)
const compCards = new Map();
const cardComps = new Map();
const dir = 'data/composers';
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.json')) continue;
  let c; try { c = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch { continue; }
  if (!Array.isArray(c.folder)) continue;
  const comp = c.name;
  for (const rec of c.folder) {
    const card = tag2card.get(rec.player);
    if (!card) continue;                       // uncarded tag -> skip
    if (!compCards.has(comp)) compCards.set(comp, new Map());
    const m = compCards.get(comp); m.set(card.id, (m.get(card.id) || 0) + 1);
    if (!cardComps.has(card.id)) cardComps.set(card.id, new Map());
    const cm = cardComps.get(card.id); cm.set(comp, (cm.get(comp) || 0) + 1);
  }
}

// ---- Analysis 1: bridge composers (most distinct developers) ----
console.log('=== BRIDGE COMPOSERS: used tools from the most distinct developers ===');
console.log('   (omnivores — discount pairs whose shared names are all from this list)');
const bridge = [];
for (const [comp, m] of compCards) {
  const devs = new Set();
  for (const [cid] of m) devs.add(dev(byId.get(cid)));
  bridge.push({ comp, nDev: devs.size, nCard: m.size });
}
bridge.sort((a, b) => b.nDev - a.nDev || b.nCard - a.nCard);
for (const b of bridge.slice(0, 15))
  console.log(`  ${String(b.nDev).padStart(2)} devs / ${String(b.nCard).padStart(2)} tools  ${b.comp}`);

// ---- Analysis 2: candidate pairs (high overlap, different dev, no edge) ----
const edgeSet = new Set();
for (const e of edges) { edgeSet.add(e.from + '|' + e.to); edgeSet.add(e.to + '|' + e.from); }
const ids = [...cardComps.keys()];
const pairs = [];
for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
  const A = cardComps.get(ids[i]), B = cardComps.get(ids[j]);
  if (A.size < 3 || B.size < 3) continue;
  const shared = [...A.keys()].filter(k => B.has(k));
  if (shared.length < MIN_SHARED) continue;
  if (edgeSet.has(ids[i] + '|' + ids[j])) continue;         // already a curated edge
  const nA = byId.get(ids[i]), nB = byId.get(ids[j]);
  if (dev(nA) === dev(nB)) continue;                        // same dev -> same-author, not a hidden link
  const jac = shared.length / (A.size + B.size - shared.length);
  const smallFrac = shared.length / Math.min(A.size, B.size);
  pairs.push({ nA, nB, shared, jac, smallFrac, aSize: A.size, bSize: B.size });
}
pairs.sort((a, b) => b.jac - a.jac);
console.log('\n=== PLAYER PAIRS: high shared-composer overlap, different devs, NO curated edge ===');
console.log('   (candidate hidden scene/lineage — VERIFY the shared cohort is coherent, not omnivores)');
for (const p of pairs.slice(0, MAX_PAIRS)) {
  console.log(`\n  J=${p.jac.toFixed(2)} shared=${p.shared.length}/min(${p.aSize},${p.bSize})=${(p.smallFrac * 100).toFixed(0)}%`);
  console.log(`  ${p.nA.name} [${dev(p.nA)}] (${p.nA.id})`);
  console.log(`  ${p.nB.name} [${dev(p.nB)}] (${p.nB.id})`);
  console.log(`  shared: ${p.shared.slice(0, 14).join(', ')}${p.shared.length > 14 ? ` … (+${p.shared.length - 14})` : ''}`);
}

// ---- Analysis 3: curated lineage clusters (components of edges[]) ----
console.log('\n=== CURATED LINEAGE CLUSTERS (connected components of card edges[]) ===');
const adj = new Map();
const link = (a, b) => { if (!adj.has(a)) adj.set(a, []); adj.get(a).push(b); };
for (const e of edges) { link(e.from, e.to); link(e.to, e.from); }
const seen = new Set(), comps = [];
for (const id of adj.keys()) {
  if (seen.has(id)) continue;
  const stack = [id], grp = []; seen.add(id);
  while (stack.length) { const x = stack.pop(); grp.push(x); for (const y of (adj.get(x) || [])) if (!seen.has(y)) { seen.add(y); stack.push(y); } }
  comps.push(grp);
}
comps.sort((a, b) => b.length - a.length);
for (const grp of comps.slice(0, 6))
  console.log(`  [${grp.length}] ${grp.map(id => (byId.get(id) || { name: id }).name).join(' | ')}`);
console.log(`  (${comps.length} lineage clusters total from ${edges.length} edges)`);
