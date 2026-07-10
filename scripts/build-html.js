#!/usr/bin/env node
/**
 * build-html.js
 *
 * Reads every cached JSON file in data/ and injects it into
 * templates/index.html.template, producing output/index.html.
 *
 * This keeps data and presentation separate: the template holds all the
 * CSS/JS/UI logic, and this script's only job is to serialize the current
 * state of data/ into a single JS object the template can consume at
 * runtime. Re-run this any time data/ changes (after fetch-composers.js
 * or fetch-players.js) to regenerate the page.
 *
 * Usage:
 *   node scripts/build-html.js
 */

const fs = require('fs');
const path = require('path');
const { readJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const COMPOSERS_DIR = path.join(ROOT, 'data', 'composers');
const PLAYERS_PATH = path.join(ROOT, 'data', 'players.json');
const GAPS_PATH = path.join(ROOT, 'data', 'gaps-report.json');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'index.html.template');
const OUTPUT_PATH = path.join(ROOT, 'output', 'index.html');

function loadAllComposers() {
  if (!fs.existsSync(COMPOSERS_DIR)) return [];
  return fs
    .readdirSync(COMPOSERS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => readJSON(path.join(COMPOSERS_DIR, f)))
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function main() {
  console.log('Building output/index.html from cached data...\n');

  const composers = loadAllComposers();
  const players = readJSON(PLAYERS_PATH);
  const gaps = readJSON(GAPS_PATH);

  console.log(`  composers: ${composers.length}`);
  console.log(`  players/editors: ${players?.count ?? 0}`);
  console.log(`  known gaps: ${gaps?.meta?.totalGaps ?? 0}`);

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`\nTemplate not found: ${TEMPLATE_PATH}`);
    console.error('Run this from the project root, or check templates/ exists.');
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  const dataPayload = {
    generatedAt: new Date().toISOString(),
    composers,
    players: players?.players ?? [],
    gaps: gaps?.gaps ?? [],
  };

  // The template contains a marker comment; we replace it with a real
  // <script> tag embedding the JSON payload as a global variable.
  const injected = template.replace(
    '/*__SID_DATA_INJECTION_POINT__*/',
    `window.SID_DATA = ${JSON.stringify(dataPayload)};`
  );

  if (injected === template) {
    console.warn(
      '\n  ! Injection marker not found in template — check templates/index.html.template'
    );
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, injected, 'utf8');

  const sizeKB = (Buffer.byteLength(injected, 'utf8') / 1024).toFixed(0);
  console.log(`\nWrote output/index.html (${sizeKB} KB)`);
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
