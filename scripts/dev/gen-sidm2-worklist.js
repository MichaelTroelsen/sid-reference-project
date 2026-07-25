#!/usr/bin/env node
/**
 * Regenerate the joint SIDM2 worklist table inside `docs/SIDM2-INTEGRATION.md`.
 *
 * Usage:
 *   node scripts/dev/gen-sidm2-worklist.js            # rewrite the table in place
 *   node scripts/dev/gen-sidm2-worklist.js --check    # exit 1 if the table is stale
 *   node scripts/dev/gen-sidm2-worklist.js --stdout   # print the table, don't write
 *
 * WHY THIS EXISTS. The priority table on that page was hand-written, and it
 * rotted completely: it ranked six players to tackle next -- jch-newplayer,
 * sid-factory-ii, goattracker, dmc, cheesecutter, soundmonitor -- and ALL SIX
 * had reached `verified` by the time anyone re-read it. A worklist that lists
 * finished work as "next" is worse than no worklist. The same page also carried
 * "the 7 verified are ..." long after the count passed 130. Both are exactly the
 * failure mode gen-coverage.js was written to stop for COVERAGE.md, so this is
 * the same treatment for the same reason: generate it, and gate it with --check.
 *
 * WHAT IS DERIVED VS WHAT IS NOT. Everything measurable comes from local data --
 * file counts from `data/composers/*.json` player tags, edge degree from
 * `knowledge/graph.json`, card status and open `TODO:` counts from the cards
 * themselves. SIDM2's port status and accuracy figures cannot be derived here;
 * they are SIDM2's own reported results and live in `knowledge/sidm2-ports.json`,
 * hand-maintained. That split is deliberate: it means adding a newly-ported
 * player is a one-line data edit plus a re-run, with no hand-counting.
 *
 * THE FILE COUNT IS A LOWER BOUND, and the table says so. `data/composers/*.json`
 * covers HVSC's MUSICIANS/ tree only, so GAMES/ files are invisible -- which
 * understates precisely the game-composer drivers (Galway, Hubbard, Whittaker,
 * the Grays, Jeroen Tel). Do not let a low count here read as low value.
 *
 * ROW MEMBERSHIP is: every card SIDM2 has an opinion on (i.e. every key in
 * sidm2-ports.json), plus every card at or above FILE_FLOOR tagged files, so
 * high-usage never-ported players surface on their own without being listed by
 * hand. Ports with no single corresponding card id (Jeroen Tel's GAMES/ work)
 * are rendered from `unmapped` rather than dropped.
 */

const fs = require('fs');
const path = require('path');

const DOC = path.join('docs', 'SIDM2-INTEGRATION.md');
const PORTS = path.join('knowledge', 'sidm2-ports.json');
const GRAPH = path.join('knowledge', 'graph.json');
const COMPOSERS = path.join('data', 'composers');
const CARDS = path.join('knowledge', 'players');

const BEGIN = '<!-- BEGIN GENERATED: sidm2-worklist -->';
const END = '<!-- END GENERATED: sidm2-worklist -->';

/** Cards at or above this many tagged files appear even if SIDM2 never touched them. */
const FILE_FLOOR = 90;

const STATE_MARK = {
  done: '✅',
  partial: '⚠️',
  variant: '✅',
  unlisted: '❓',
};

/** Content-equality helper: line endings and trailing whitespace are not content. */
function normalise(s) {
  return s.replace(/\r\n/g, '\n').trim();
}

/** Raw player tag -> file count, aggregated across every cached composer. */
function readTags() {
  const tags = new Map();
  for (const f of fs.readdirSync(COMPOSERS).filter((f) => f.endsWith('.json'))) {
    let c;
    try {
      c = JSON.parse(fs.readFileSync(path.join(COMPOSERS, f), 'utf8'));
    } catch {
      continue;
    }
    if (!Array.isArray(c.folder)) continue;
    for (const rec of c.folder) {
      if (!rec.player) continue;
      tags.set(rec.player, (tags.get(rec.player) || 0) + 1);
    }
  }
  return tags;
}

/** One row's worth of derived facts per card. */
function readCards(tags) {
  const out = new Map();
  for (const f of fs.readdirSync(CARDS).filter((f) => f.endsWith('.md') && f !== '_template.md')) {
    const txt = fs.readFileSync(path.join(CARDS, f), 'utf8');
    const m = txt.match(/```json([\s\S]*?)```/);
    if (!m) continue;
    let o;
    try {
      o = JSON.parse(m[1]);
    } catch {
      console.error(`WARN: unparseable json block in ${f} -- skipped`);
      continue;
    }
    const id = o.id || f.replace(/\.md$/, '');
    let files = 0;
    for (const a of new Set([...(o.aliases || []), o.name].filter(Boolean))) {
      if (tags.has(a)) files += tags.get(a);
    }
    out.set(id, {
      id,
      name: o.name || id,
      status: o.status || '?',
      files,
      todos: (txt.match(/TODO:/g) || []).length,
    });
  }
  return out;
}

function main() {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  const toStdout = args.includes('--stdout');

  for (const p of [DOC, PORTS, GRAPH, COMPOSERS, CARDS]) {
    if (!fs.existsSync(p)) {
      console.error(`missing ${p} -- run from the repo root`);
      process.exit(1);
    }
  }

  const portsFile = JSON.parse(fs.readFileSync(PORTS, 'utf8'));
  const ports = portsFile.ports || {};
  const graph = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));

  const deg = new Map();
  for (const e of graph.edges || []) {
    deg.set(e.from, (deg.get(e.from) || 0) + 1);
    deg.set(e.to, (deg.get(e.to) || 0) + 1);
  }

  const tags = readTags();
  const cards = readCards(tags);

  // Any port keyed to a card id that no longer exists is a real error, not a
  // cosmetic one -- it means a card was renamed or deleted and this data file
  // still points at the old id, so that port would silently vanish from the table.
  const dangling = Object.keys(ports).filter((id) => !cards.has(id));
  if (dangling.length) {
    console.error(`ERROR: ${PORTS} references card ids that do not exist:`);
    dangling.forEach((d) => console.error(`  ${d}`));
    process.exit(1);
  }

  const rows = [];
  for (const [id, c] of cards) {
    const port = ports[id];
    if (!port && c.files < FILE_FLOOR) continue;
    rows.push({ ...c, deg: deg.get(id) || 0, port });
  }
  rows.sort((a, b) => b.files - a.files || a.id.localeCompare(b.id));

  const counts = { verified: 0, 'in-progress': 0, stub: 0 };
  let totalFiles = 0;
  const filesByStatus = { verified: 0, 'in-progress': 0, stub: 0 };
  for (const c of cards.values()) {
    if (counts[c.status] !== undefined) counts[c.status]++;
    if (filesByStatus[c.status] !== undefined) filesByStatus[c.status] += c.files;
    totalFiles += c.files;
  }
  const pct = (n) => ((n / totalFiles) * 100).toFixed(1);

  const L = [];
  L.push(BEGIN);
  L.push('');
  L.push(
    `_Generated by \`node scripts/dev/gen-sidm2-worklist.js\` from \`knowledge/sidm2-ports.json\` ` +
      `(SIDM2's own reported results, hand-maintained) joined with local data. ` +
      `**Do not hand-edit** — regenerate instead, and run \`--check\` to verify freshness. ` +
      `The table this replaced rotted badly: it listed six players as "tackle next" ` +
      `after all six had reached \`verified\`._`
  );
  L.push('');
  L.push(
    `Card status across ${cards.size} cards: **${counts.verified} verified / ` +
      `${counts['in-progress']} in-progress / ${counts.stub} stub**, covering ` +
      `${filesByStatus.verified.toLocaleString('en-US')} (${pct(filesByStatus.verified)}%), ` +
      `${filesByStatus['in-progress'].toLocaleString('en-US')} (${pct(filesByStatus['in-progress'])}%) and ` +
      `${filesByStatus.stub.toLocaleString('en-US')} (${pct(filesByStatus.stub)}%) of ` +
      `${totalFiles.toLocaleString('en-US')} tagged files respectively.`
  );
  L.push('');
  L.push(
    `**Reading the columns.** \`Files\` is HVSC \`MUSICIANS/\`-tagged files and is a ` +
      `**lower bound that badly understates the game-composer drivers** — \`GAMES/\` is ` +
      `invisible here, which is where Galway, Hubbard, Whittaker, the Grays and Jeroen ` +
      `Tel did most of their work. \`Deg\` is \`edges[]\` degree (a hub anchors its ` +
      `cluster). \`T\` is unresolved \`TODO:\` fields — the depth gap remaining *after* ` +
      `\`verified\`. Rows are every player SIDM2 has an opinion on, plus every card at ` +
      `≥${FILE_FLOOR} files. SIDM2 figures are its own reported results ` +
      `(${portsFile.reportedAt}), not re-derived here.`
  );
  L.push('');
  L.push('| # | Player | SIDM2 state | Files | Deg | Card |');
  L.push('|--:|---|---|--:|--:|---|');

  let n = 0;
  for (const r of rows) {
    n++;
    const state = r.port
      ? `${STATE_MARK[r.port.state] || ''} ${r.port.note}`.trim()
      : '❌ not ported';
    const card = `${r.status}, ${r.todos}T`;
    L.push(
      `| ${n} | [[${r.id}]] | ${state} | ${r.files.toLocaleString('en-US')} | ${r.deg} | ${card} |`
    );
  }
  for (const u of (portsFile.unmapped && portsFile.unmapped.entries) || []) {
    n++;
    L.push(
      `| ${n} | ${u.label} | ${STATE_MARK[u.state] || ''} ${u.note} | — | — | ${u.why} |`
    );
  }

  L.push('');
  L.push(END);

  const table = L.join('\n');

  if (toStdout) {
    process.stdout.write(table + '\n');
    return;
  }

  const doc = fs.readFileSync(DOC, 'utf8');
  const bi = doc.indexOf(BEGIN);
  const ei = doc.indexOf(END);
  if (bi === -1 || ei === -1) {
    console.error(`ERROR: ${DOC} is missing the generated-block markers.`);
    console.error(`Expected ${BEGIN} ... ${END}`);
    process.exit(1);
  }
  const next = doc.slice(0, bi) + table + doc.slice(ei + END.length);

  if (check) {
    // Same normalised comparison as gen-coverage.js: git checks the doc out with
    // CRLF on Windows while this writes LF, so a byte compare would report STALE
    // on every fresh clone and train everyone to ignore the gate.
    if (normalise(doc) !== normalise(next)) {
      console.error(`STALE: ${DOC}'s worklist table differs from a fresh generation.`);
      console.error('Run: node scripts/dev/gen-sidm2-worklist.js');
      process.exit(1);
    }
    console.log(`${DOC} worklist table is up to date.`);
    return;
  }

  fs.writeFileSync(DOC, next);
  console.log(`Wrote the worklist table into ${DOC}`);
  console.log(`  ${rows.length} card rows + ${((portsFile.unmapped || {}).entries || []).length} unmapped`);
  console.log(`  ${Object.keys(ports).length} ports declared in ${PORTS}`);
  console.log(`  ${counts.verified} verified / ${counts['in-progress']} in-progress / ${counts.stub} stub`);
}

main();
