#!/usr/bin/env node
/**
 * Pre-commit sanity check for the knowledge cards.
 *
 * Usage:  node scripts/dev/check-cards.js
 * Exits non-zero if anything fails, so it can gate a commit.
 *
 * Checks three things that `knowledge/build-graph.js` does NOT:
 *
 *   1. JSON VALIDITY of every card's ```json block.
 *      build-graph.js SILENTLY SKIPS a card whose JSON won't parse -- it just
 *      reports a lower node count and exits 0. A malformed card can therefore
 *      sit unnoticed indefinitely. (Caught for real: a dropped trailing comma
 *      in oliver-kirwa.md showed up only as "nodes: 199" against 200 files.)
 *
 *   2. COUNT RECONCILIATION: cards on disk vs nodes in the graph. This is the
 *      check that surfaces (1) even when the JSON error is subtle.
 *
 *   3. BROKEN PROSE [[links]]. build-graph.js validates the structured JSON
 *      `edges` field only; it never looks at prose links. Two consecutive
 *      batches have shipped a broken prose link that this catches
 *      ([[daniel-stenberg]] in batch 13, [[peter-langston]] in batch 15).
 *
 * Run this BEFORE staging a batch, alongside `node knowledge/build-graph.js`.
 */

const fs = require('fs');
const path = require('path');

const CARDS_DIR = path.join('knowledge', 'players');
const GRAPH = path.join('knowledge', 'graph.json');

function cardFiles(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== '_template.md');
}

function main() {
  if (!fs.existsSync(CARDS_DIR)) {
    console.error(`missing ${CARDS_DIR} -- run from the repo root`);
    process.exit(1);
  }

  const files = cardFiles(CARDS_DIR);
  const ids = new Set();
  let failures = 0;

  // 1. JSON validity + id extraction
  for (const f of files) {
    const txt = fs.readFileSync(path.join(CARDS_DIR, f), 'utf8');
    const block = txt.match(/```json\s*([\s\S]*?)```/);
    if (!block) {
      console.log(`FAIL  no \`\`\`json block: ${f}`);
      failures++;
      continue;
    }
    let parsed;
    try {
      parsed = JSON.parse(block[1]);
    } catch (e) {
      console.log(`FAIL  invalid JSON: ${f} -> ${e.message}`);
      failures++;
      continue;
    }
    if (!parsed.id) {
      console.log(`FAIL  no "id" field: ${f}`);
      failures++;
      continue;
    }
    const expected = f.replace(/\.md$/, '');
    if (parsed.id !== expected) {
      console.log(`FAIL  id "${parsed.id}" != filename "${expected}" (${f})`);
      failures++;
    }
    ids.add(parsed.id);
  }

  // 2. Reconcile against the graph, if it's been built
  if (fs.existsSync(GRAPH)) {
    try {
      const graph = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
      const nodes = Array.isArray(graph.nodes) ? graph.nodes.length : null;
      if (nodes !== null && nodes !== files.length) {
        console.log(
          `FAIL  graph has ${nodes} nodes but ${files.length} cards exist -- ` +
            `build-graph.js silently dropped ${files.length - nodes}. Rebuild and re-check.`
        );
        failures++;
      }
    } catch {
      console.log('WARN  graph.json unreadable; skipping count reconciliation');
    }
  } else {
    console.log('WARN  graph.json absent; run `node knowledge/build-graph.js` first');
  }

  // 3. Broken prose [[links]]
  let broken = 0;
  for (const f of files) {
    const txt = fs.readFileSync(path.join(CARDS_DIR, f), 'utf8');
    for (const m of txt.matchAll(/\[\[([a-z0-9-]+)\]\]/g)) {
      if (!ids.has(m[1])) {
        console.log(`FAIL  ${f} -> broken prose link: [[${m[1]}]]`);
        broken++;
      }
    }
  }
  failures += broken;

  console.log(
    `\n${files.length} cards checked, ${ids.size} ids, ${broken} broken prose links, ` +
      `${failures} failure(s)`
  );
  process.exit(failures ? 1 : 0);
}

main();
