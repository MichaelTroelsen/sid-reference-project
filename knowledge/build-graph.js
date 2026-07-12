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
 * Usage: node knowledge/build-graph.js
 */
const fs = require('fs');
const path = require('path');

const PLAYERS_DIR = path.join(__dirname, 'players');
const OUT_PATH = path.join(__dirname, 'graph.json');
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

function main() {
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

  const graph = { generatedAt: new Date().toISOString(), nodes, edges };
  fs.writeFileSync(OUT_PATH, JSON.stringify(graph, null, 2));

  // Summary
  const byStatus = nodes.reduce((a, n) => ((a[n.status] = (a[n.status] || 0) + 1), a), {});
  const byType = edges.reduce((a, e) => ((a[e.type] = (a[e.type] || 0) + 1), a), {});
  console.log(`Wrote ${path.relative(path.join(__dirname, '..'), OUT_PATH)}`);
  console.log(`  nodes: ${nodes.length} (${Object.entries(byStatus).map(([k, v]) => `${v} ${k}`).join(', ') || 'none'})`);
  console.log(`  edges: ${edges.length}${Object.keys(byType).length ? ` (${Object.entries(byType).map(([k, v]) => `${v} ${k}`).join(', ')})` : ''}`);
  if (dangling.length) console.log(`  dangling edge targets (no card yet — next candidates): ${dangling.join(', ')}`);
  if (cycles.length) console.log(`  ! derivation cycles detected: ${cycles.join(' | ')}`);
}

main();
