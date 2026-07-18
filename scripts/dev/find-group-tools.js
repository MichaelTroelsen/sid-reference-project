#!/usr/bin/env node
/**
 * CSDb GROUP-level connection scan — a companion to find-connections.js.
 * Where that tool finds tool<->tool links via shared COMPOSERS, this one uses
 * CSDb scene-group membership: an explicit, curated scene affiliation, so a
 * group-level concentration is a stronger social signal than incidental
 * composer overlap.
 *
 * Usage:  node scripts/dev/find-group-tools.js [--min-composers K] [--share F]
 *
 * WHY THIS EXISTS. The history/connection endgame (project_tdz_endgame) needs
 * more than "who used the same tools" — it needs "which scene communities drove
 * which tools." CSDb group membership answers that directly. Data source:
 * data/csdb/<slug>.json -> scener.Handle.MemberOf[].Group.Name (the same field
 * build-html.js's summarizeCsdb() reads); joined against composer->carded-tag
 * usage exactly like find-connections.js.
 *
 * It prints two views:
 *   1. GROUP TOOL-SPAN — groups whose members collectively used the most carded
 *      tools. NOTE: dominated by big long-running groups (Onslaught, Triad,
 *      Genesis Project, Fairlight…) the same way find-connections' pairs are
 *      dominated by popular tools — a size artifact. Low signal on its own.
 *   2. HOUSE TOOLS — carded tools whose group-attributable usage concentrates
 *      in ONE group (>= --share of files). This is the useful view: a tool that
 *      was effectively a scene group's house instrument.
 *
 * THE VERIFICATION RULE (learned 2026-07-18 — do NOT skip it). A high house-tool
 * share has TWO innocent explanations you must rule out before believing it is a
 * group-adoption finding:
 *   (a) AUTHOR-DOMINATED. The tool's own author made most of the files and
 *       happens to be in that group. (Real example: "Jeff (Music Editor)" reads
 *       95% Camelot — but Jeff/Søren Lund IS the author and made 176 of 203
 *       files; it is his personal editor, not a Camelot house tool. NOT a
 *       finding.) Always check the top user is not the tool's author.
 *   (b) SELF-NAMED. The group IS the author's group and the card already says so
 *       (Zong Player/Audial Arts, Glover/Samar, MoN-Deenen/Maniacs of Noise).
 *       Confirms known facts; not new.
 * A house-tool result is only a NEW finding when the dominant group is NOT the
 * author's group and NOT explained by author-domination — e.g. Digitalizer,
 * whose heavy users are SHAPE (Nordbø 357 + Røstøen 106), not the author's own
 * Panoramic Designs. Verify the actual per-composer breakdown (print users +
 * their groups) before writing anything, then record it as a shared-USERS /
 * house-group prose note on the tool's card, NEVER an edges[] entry.
 *
 * Blind spots: CSDb group data covers only composers with a data/csdb/*.json
 * cache; a member's files count toward every group they ever joined (approximate
 * attribution, and it can double-count multi-group composers); and, like
 * find-connections.js, data/composers/*.json is HVSC MUSICIANS/ only. Every
 * count is a lower bound and every finding is a LEAD to verify, not a fact.
 */
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const MIN_COMPOSERS = parseInt(opt('--min-composers', '4'), 10);
const MIN_SHARE = parseFloat(opt('--share', '0.5'));

const g = JSON.parse(fs.readFileSync('knowledge/graph.json', 'utf8'));
const byId = new Map(g.nodes.map((n) => [n.id, n]));
const tag2card = new Map();
for (const n of g.nodes) for (const a of (n.aliases || [])) tag2card.set(a, n);

// composer name -> [group names]  (mirrors build-html.js summarizeCsdb)
function groupsOf(entry) {
  if (!entry || entry.isGroup) return [];
  const h = entry.scener && entry.scener.Handle;
  if (!h) return [];
  let mo = h.MemberOf;
  mo = Array.isArray(mo) ? mo : mo ? [mo] : [];
  return mo.filter((m) => m.Group && m.Group.Name).map((m) => m.Group.Name);
}
const compGroups = new Map();
for (const f of fs.readdirSync('data/csdb')) {
  if (!f.endsWith('.json')) continue;
  let c; try { c = JSON.parse(fs.readFileSync(path.join('data/csdb', f), 'utf8')); } catch { continue; }
  const gs = groupsOf(c);
  if (gs.length) compGroups.set(c.name, gs);
}

// cardId -> Map(composer -> files)
const cardComps = new Map();
for (const f of fs.readdirSync('data/composers')) {
  if (!f.endsWith('.json')) continue;
  let c; try { c = JSON.parse(fs.readFileSync(path.join('data/composers', f), 'utf8')); } catch { continue; }
  if (!Array.isArray(c.folder)) continue;
  for (const rec of c.folder) {
    const card = tag2card.get(rec.player);
    if (!card) continue;
    if (!cardComps.has(card.id)) cardComps.set(card.id, new Map());
    const m = cardComps.get(card.id); m.set(c.name, (m.get(c.name) || 0) + 1);
  }
}

// primary author (first, group-suffix stripped) — to flag author-domination
function author(n) { const a = (n.authors && n.authors[0]) || ''; return a.split('/')[0].trim(); }

// ---- View 1: group tool-span (size artifact — read the caveat) ----
const groupTools = new Map(); // group -> Set(cardId)
const groupMembers = new Map(); // group -> Set(composer)
for (const [cid, comps] of cardComps) {
  for (const [comp] of comps) {
    for (const grp of (compGroups.get(comp) || [])) {
      (groupTools.get(grp) || groupTools.set(grp, new Set()).get(grp)).add(cid);
      (groupMembers.get(grp) || groupMembers.set(grp, new Set()).get(grp)).add(comp);
    }
  }
}
console.log('=== GROUP TOOL-SPAN (size artifact — big groups dominate; low signal) ===');
[...groupTools.entries()]
  .map(([grp, s]) => ({ grp, tools: s.size, members: (groupMembers.get(grp) || new Set()).size }))
  .filter((r) => r.members >= 2 && r.tools >= 3)
  .sort((a, b) => b.tools - a.tools).slice(0, 12)
  .forEach((r) => console.log(`  ${String(r.tools).padStart(2)} tools / ${String(r.members).padStart(2)} members  ${r.grp}`));

// ---- View 2: house tools (the useful view — VERIFY before believing) ----
console.log('\n=== HOUSE TOOLS: group-attributable usage concentrated in one group ===');
console.log(`   (>=${MIN_COMPOSERS} grouped composers, top group >=${(MIN_SHARE * 100).toFixed(0)}%; ⚠ = author is the top user, likely author-dominated not a group tool)`);
const house = [];
for (const [cid, comps] of cardComps) {
  const tally = new Map();
  let knownFiles = 0; const knownComps = new Set();
  let topUser = null, topUserFiles = 0;
  for (const [comp, files] of comps) {
    if (files > topUserFiles) { topUserFiles = files; topUser = comp; }
    const gs = compGroups.get(comp);
    if (!gs || !gs.length) continue;
    knownComps.add(comp); knownFiles += files;
    for (const grp of gs) tally.set(grp, (tally.get(grp) || 0) + files);
  }
  if (knownComps.size < MIN_COMPOSERS) continue;
  let top = null, topF = 0;
  for (const [grp, fl] of tally) if (fl > topF) { topF = fl; top = grp; }
  const share = topF / knownFiles;
  if (share >= MIN_SHARE && top) {
    const n = byId.get(cid);
    // author-domination flag: top user's handle looks like the card author
    const auth = author(n).toLowerCase();
    const dominated = auth && topUser && (auth.includes(topUser.toLowerCase()) || topUser.toLowerCase().includes(auth));
    house.push({ name: n.name, top, share, gkc: knownComps.size, dominated });
  }
}
house.sort((a, b) => b.share - a.share);
for (const h of house.slice(0, 25))
  console.log(`  ${h.dominated ? '⚠' : ' '} ${(h.share * 100).toFixed(0)}% ${h.top}  <-  ${h.name}  (${h.gkc} grouped composers)`);
console.log('\n  Verify any un-flagged row before treating it as a finding: print the tool\'s');
console.log('  per-composer users + their groups, confirm the top group is not the author\'s.');
