#!/usr/bin/env node
/**
 * fetch-players.js
 *
 * Fetches the entire players/editors database from DeepSID
 * (?players endpoint) and caches it to data/players.json.
 *
 * This is a single request returning every player/editor DeepSID knows
 * about, with ~40 fields each (developer, platform, year, instrument
 * count, packer, source code link, etc). Some entries will have many
 * empty fields — that sparse data is exactly what find-gaps.js looks for.
 *
 * Usage:
 *   node scripts/fetch-players.js
 */

const path = require('path');
const client = require('./lib/deepsid-client');
const { writeJSON } = require('./lib/cache');

const OUT_PATH = path.join(__dirname, '..', 'data', 'players.json');

async function main() {
  console.log('Fetching full players/editors database from DeepSID...');
  const players = await client.getAllPlayers();
  const count = Array.isArray(players) ? players.length : Object.keys(players).length;
  writeJSON(OUT_PATH, {
    fetchedAt: new Date().toISOString(),
    source: `${client.BASE_URL}?players`,
    count,
    players,
  });
  console.log(`Done. Cached ${count} player/editor entries to data/players.json`);
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
