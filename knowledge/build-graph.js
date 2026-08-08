#!/usr/bin/env node
/**
 * build-graph.js
 *
 * Projects the machine-readable facts out of every player card
 * (knowledge/players/<id>.md — the first ```json fenced block) into a single
 * derived graph, knowledge/graph.json: { nodes, edges }. The cards are the
 * source of truth; this file is regenerable and gitignored — never hand-edit
 * graph.json.
 *
 * Nodes  = players (id, name, status, authors, released, aliases).
 * Edges  = typed relations pulled from each card's `edges` object
 *          (derives_from / successor_of / shares_routine_with /
 *          same_effect_encoding_as).
 *
 * Also reports: edge targets that have no card yet ("dangling" — these are
 * your next candidates), and derivation cycles (which shouldn't exist).
 *
 * Zero dependencies (no YAML/graph libs) — that's why the facts live in a
 * JSON block instead of YAML frontmatter.
 *
 * Usage:
 *   node knowledge/build-graph.js            # rewrite knowledge/graph.json
 *   node knowledge/build-graph.js --check    # exit 1 if docs/SID-HISTORY.md's
 *                                             # edge/cluster line is stale
 *
 * WHY --check EXISTS. docs/SID-HISTORY.md quotes an "N such edges across M
 * connected clusters" figure and points readers here for the live number --
 * but nothing ever compared the two, so it rotted twice with the same shape:
 * once as "55/19 in prose vs 53/18 real" (fixed by making this script print
 * both halves instead of just edges), and again as "53/18 in prose vs 56/19
 * real" once more cards accrued edges (a 2026-08-08 doc audit). Printing the
 * live number for a human to copy by hand doesn't stop it from going stale
 * the moment nobody copies it — only a gate does. This mirrors the existing
 * `gen-coverage.js --check` / `gen-sidm2-worklist.js --check` pattern.
 */
const fs = require('fs');
const path = require('path');

const PLAYERS_DIR = path.join(__dirname, 'players');
const OUT_PATH = path.join(__dirname, 'graph.json');
const SID_HISTORY_PATH = path.join(__dirname, '..', 'docs', 'SID-HISTORY.md');
const EDGE_TYPES = ['derives_from', 'successor_of', 'shares_routine_with', 'same_effect_encoding_as'];

function extractFacts(md, file) {
  const m = md.match(/```json\s*\n([\s\S]*?)\n```/);
  if (!m) {
    console.warn(`  ! ${file}: no \`\`\`json facts block — skipped`);
    return null;
  }
  try {
    return JSON.parse(m[1]);
  } catch (e) {
    console.warn(`  ! ${file}: invalid JSON in facts block — ${e.message}`);
    return null;
  }
}

/**
 * Count connected components over the edge list, treating every edge type as
 * undirected. This is the "M connected clusters" figure docs/SID-HISTORY.md
 * quotes alongside the edge count; isolated cards (no edges at all) are not
 * clusters and are excluded.
 */
function countClusters(edges) {
  const adj = new Map();
  for (const e of edges) {
    if (!adj.has(e.from)) adj.set(e.from, []);
    if (!adj.has(e.to)) adj.set(e.to, []);
    adj.get(e.from).push(e.to);
    adj.get(e.to).push(e.from);
  }
  const seen = new Set();
  let clusters = 0;
  for (const start of adj.keys()) {
    if (seen.has(start)) continue;
    clusters++;
    const stack = [start];
    while (stack.length) {
      const cur = stack.pop();
      if (seen.has(cur)) continue;
      seen.add(cur);
      for (const next of adj.get(cur) || []) if (!seen.has(next)) stack.push(next);
    }
  }
  return clusters;
}

function detectCycles(nodes, edges) {
  // Only derivation edges should be acyclic.
  const adj = new Map(nodes.map((n) => [n.id, []]));
  edges
    .filter((e) => e.type === 'derives_from' || e.type === 'successor_of')
    .forEach((e) => { if (adj.has(e.from)) adj.get(e.from).push(e.to); });
  const state = new Map(); // id -> 0 visiting, 1 done
  const cycles = [];
  const stack = [];
  function dfs(id) {
    if (!adj.has(id)) return;
    state.set(id, 0);
    stack.push(id);
    for (const next of adj.get(id)) {
      if (state.get(next) === 0) cycles.push([...stack.slice(stack.indexOf(next)), next].join(' -> '));
      else if (state.get(next) === undefined) dfs(next);
    }
    stack.pop();
    state.set(id, 1);
  }
  nodes.forEach((n) => { if (state.get(n.id) === undefined) dfs(n.id); });
  return cycles;
}

/**
 * Check docs/SID-HISTORY.md's "N such edges across M connected clusters"
 * sentence against the live edge/cluster counts. Read-only: never rewrites
 * the hand-written prose around the numbers, only validates them.
 */
function checkSidHistory(edgeCount, clusterCount) {
  if (!fs.existsSync(SID_HISTORY_PATH)) {
    console.error(`docs/SID-HISTORY.md not found at ${SID_HISTORY_PATH}`);
    return false;
  }
  const text = fs.readFileSync(SID_HISTORY_PATH, 'utf8');
  const m = text.match(/\*\*(\d+) such edges across (\d+) connected clusters\*\*/);
  if (!m) {
    console.error(
      'STALE: could not find the "N such edges across M connected clusters" sentence ' +
        'in docs/SID-HISTORY.md -- it may have been reworded. Update the sentence and ' +
        'this regex together.'
    );
    return false;
  }
  const [, docEdges, docClusters] = m.map(Number);
  if (docEdges !== edgeCount || docClusters !== clusterCount) {
    console.error(
      `STALE: docs/SID-HISTORY.md says "${docEdges} such edges across ${docClusters} ` +
        `connected clusters", live graph has ${edgeCount} edges across ${clusterCount} clusters.`
    );
    console.error(
      `Update the sentence in docs/SID-HISTORY.md to "${edgeCount} such edges across ` +
        `${clusterCount} connected clusters".`
    );
    return false;
  }
  console.log(
    `docs/SID-HISTORY.md's edge/cluster count is up to date (${edgeCount} edges, ` +
      `${clusterCount} clusters).`
  );
  return true;
}

function main() {
  const check = process.argv.includes('--check');

  if (!fs.existsSync(PLAYERS_DIR)) {
    console.error(`No players dir at ${PLAYERS_DIR}`);
    process.exit(1);
  }
  const files = fs.readdirSync(PLAYERS_DIR).filter((f) => f.endsWith('.md') && f !== '_template.md');

  const nodes = [];
  const edges = [];
  for (const file of files) {
    const facts = extractFacts(fs.readFileSync(path.join(PLAYERS_DIR, file), 'utf8'), file);
    if (!facts) continue;
    const id = facts.id || file.replace(/\.md$/, '');
    nodes.push({
      id,
      name: facts.name || id,
      status: facts.status || 'stub',
      authors: facts.authors || [],
      released: facts.released || null,
      aliases: facts.aliases || [],
    });
    const e = facts.edges || {};
    for (const type of EDGE_TYPES) {
      (e[type] || []).forEach((to) => edges.push({ from: id, to, type }));
    }
  }

  const ids = new Set(nodes.map((n) => n.id));
  const dangling = [...new Set(edges.filter((e) => !ids.has(e.to)).map((e) => e.to))];
  const cycles = detectCycles(nodes, edges);

  const clusterCount = countClusters(edges);

  if (check) {
    // Read-only: never writes graph.json in --check mode, matching the
    // gen-coverage.js / gen-sidm2-worklist.js convention of a check step
    // with no side effects.
    if (!checkSidHistory(edges.length, clusterCount)) process.exit(1);
    return;
  }

  const graph = { generatedAt: new Date().toISOString(), nodes, edges };
  fs.writeFileSync(OUT_PATH, JSON.stringify(graph, null, 2));

  // Summary
  const byStatus = nodes.reduce((a, n) => ((a[n.status] = (a[n.status] || 0) + 1), a), {});
  const byType = edges.reduce((a, e) => ((a[e.type] = (a[e.type] || 0) + 1), a), {});
  console.log(`Wrote ${path.relative(path.join(__dirname, '..'), OUT_PATH)}`);
  console.log(`  nodes: ${nodes.length} (${Object.entries(byStatus).map(([k, v]) => `${v} ${k}`).join(', ') || 'none'})`);
  console.log(`  edges: ${edges.length}${Object.keys(byType).length ? ` (${Object.entries(byType).map(([k, v]) => `${v} ${k}`).join(', ')})` : ''}`);
  // docs/SID-HISTORY.md quotes an "N edges across M connected clusters" figure
  // and points readers here for the live number -- run with --check to gate
  // that sentence in pre-commit instead of trusting someone to copy it by hand.
  console.log(`  connected clusters: ${clusterCount} (over ${new Set(edges.flatMap((e) => [e.from, e.to])).size} linked cards)`);
  if (dangling.length) console.log(`  dangling edge targets (no card yet — next candidates): ${dangling.join(', ')}`);
  if (cycles.length) console.log(`  ! derivation cycles detected: ${cycles.join(' | ')}`);
}

main();
