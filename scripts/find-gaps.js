#!/usr/bin/env node
/**
 * find-gaps.js
 *
 * The point of this script: DeepSID's data is community-maintained by one
 * person (JCH) parsing decades of scattered scene history. It has real
 * gaps — players with no developer credited, SID files whose player
 * routine couldn't be identified, composers with no profile at all.
 *
 * This script scans everything fetched into data/ and produces two
 * outputs:
 *
 *   1. data/gaps-report.json  — machine-readable, for scripting / SIDM2
 *   2. docs/GAPS_REPORT.md    — human-readable, copy-pasteable into a
 *      GitHub issue at github.com/Chordian/deepsid/issues
 *
 * Categories of gap detected:
 *   - PLAYER_MISSING_FIELDS : player/editor entries missing developer,
 *                             platform, start_year, or description
 *   - COMPOSER_NO_PROFILE   : composer folder exists but ?profile= 404s
 *                             or returns near-empty data
 *   - FILE_UNIDENTIFIED_PLAYER : individual SID files where the `player`
 *                             field is empty, "?", or "unknown"
 *   - COMPOSER_MISSING_COUNTRY : profile exists but no country field —
 *                             useful since this project cross-checks
 *                             nationality against HVSC Musicians.txt
 *   - COMPOSER_COUNTRY_MISMATCH : DeepSID profile country disagrees with
 *                             HVSC's own Musicians.txt for the same
 *                             handle (requires data/hvsc/musicians.json —
 *                             run fetch-hvsc-docs.js first, skipped
 *                             entirely if that file isn't cached)
 *
 * Where possible, a gap also gets a `suggestion` — a candidate fix found
 * in a second independent source (CSDb, HVSC), for a human to verify
 * before reporting upstream. This is deliberately conservative: composer
 * suggestions only use an unambiguous single match (see
 * lib/hvsc.js's findHvscLooseMatch), and player `site` suggestions only
 * come from CSDb's own Website field for that release (sparse — not
 * every release has one). No suggestion is invented from nothing; gaps
 * without a `suggestion` field genuinely have no candidate fix available
 * from data already fetched, not "this script didn't try."
 *
 * Usage:
 *   node scripts/find-gaps.js
 */

const fs = require('fs');
const path = require('path');
const { readJSON, writeJSON } = require('./lib/cache');
const { loadHvscMusicians, findHvscMatch, findHvscLooseMatch, countriesRoughlyMatch } = require('./lib/hvsc');

const ROOT = path.join(__dirname, '..');
const COMPOSERS_DIR = path.join(ROOT, 'data', 'composers');
const PLAYERS_PATH = path.join(ROOT, 'data', 'players.json');
const PLAYER_MEDIA_PATH = path.join(ROOT, 'data', 'csdb', 'players.json');
const REPORT_JSON = path.join(ROOT, 'data', 'gaps-report.json');
const REPORT_MD = path.join(ROOT, 'docs', 'GAPS_REPORT.md');

// Fields we expect a well-documented player/editor entry to have.
const EXPECTED_PLAYER_FIELDS = [
  'developer', 'description', 'start_year', 'platform', 'site',
];

function isBlank(v) {
  return v === undefined || v === null || v === '' || v === '?' || v === 'unknown';
}

function findPlayerGaps(playersData) {
  const gaps = [];
  const list = Array.isArray(playersData?.players)
    ? playersData.players
    : Object.values(playersData?.players || {});
  const playerMedia = readJSON(PLAYER_MEDIA_PATH) || {};

  for (const p of list) {
    const missing = EXPECTED_PLAYER_FIELDS.filter((f) => isBlank(p[f]));
    if (missing.length > 0) {
      const gap = {
        type: 'PLAYER_MISSING_FIELDS',
        title: p.title || p.name || '(untitled entry)',
        missingFields: missing,
        currentData: p,
      };

      if (missing.includes('site') && p.csdb_id) {
        const media = playerMedia[String(p.csdb_id)];
        if (media && media.website) {
          gap.suggestion = { site: media.website, source: `CSDb release #${p.csdb_id}` };
        }
      }

      gaps.push(gap);
    }
  }
  return gaps;
}

function findComposerGaps() {
  const gaps = [];
  if (!fs.existsSync(COMPOSERS_DIR)) return gaps;

  const files = fs.readdirSync(COMPOSERS_DIR).filter((f) => f.endsWith('.json'));
  const hvscMusicians = loadHvscMusicians();

  for (const file of files) {
    const data = readJSON(path.join(COMPOSERS_DIR, file));
    if (!data) continue;
    const { name, path: composerPath, profile, folder } = data;

    // A candidate fix for "no profile"/"no country": an unambiguous HVSC
    // match (exact first, then the conservative loose fallback) gives a
    // real name, group, and country from a second independent source.
    function hvscSuggestion() {
      const exact = findHvscMatch(name, hvscMusicians);
      if (exact) return { ...exact, matchType: 'exact' };
      const loose = findHvscLooseMatch(name, hvscMusicians);
      if (loose) return { ...loose, matchType: 'loose (unverified — confirm before reporting)' };
      return null;
    }

    // Composer has a folder (real HVSC presence) but no usable profile
    const profileEmpty =
      !profile ||
      profile._error ||
      (Object.keys(profile).length === 0);
    if (profileEmpty) {
      const gap = {
        type: 'COMPOSER_NO_PROFILE',
        composer: name,
        path: composerPath,
        detail: profile?._error || 'Profile endpoint returned no usable data',
      };
      const hvsc = hvscSuggestion();
      if (hvsc) {
        gap.suggestion = { realName: hvsc.realName, group: hvsc.group, country: hvsc.country, source: `HVSC Musicians.txt (${hvsc.matchType} match)` };
      }
      gaps.push(gap);
    }

    // Profile exists but has no country
    if (profile && !profile._error && isBlank(profile.country)) {
      const countryGap = {
        type: 'COMPOSER_MISSING_COUNTRY',
        composer: name,
        path: composerPath,
        detail: 'Profile exists but country field is blank',
      };
      const hvsc = hvscSuggestion();
      if (hvsc) {
        countryGap.suggestion = { realName: hvsc.realName, group: hvsc.group, country: hvsc.country, source: `HVSC Musicians.txt (${hvsc.matchType} match)` };
      }
      gaps.push(countryGap);
    }

    // DeepSID's country disagrees with HVSC's own Musicians.txt
    if (profile && !profile._error && profile.country) {
      const hvscMatch = findHvscMatch(name, hvscMusicians);
      if (hvscMatch && hvscMatch.country && !countriesRoughlyMatch(profile.country, hvscMatch.country)) {
        gaps.push({
          type: 'COMPOSER_COUNTRY_MISMATCH',
          composer: name,
          path: composerPath,
          detail: `DeepSID says "${profile.country}", HVSC Musicians.txt says "${hvscMatch.country}"`,
        });
      }
    }

    // Scan individual SID files for unidentified player routine
    const fileEntries = Array.isArray(folder)
      ? folder
      : Object.values(folder || {}).filter((v) => v && typeof v === 'object' && v.name);

    for (const f of fileEntries) {
      if (isBlank(f.player) && isBlank(f.player_type)) {
        gaps.push({
          type: 'FILE_UNIDENTIFIED_PLAYER',
          composer: name,
          file: f.name || f.collection_path || '(unknown filename)',
          path: f.collection_path,
        });
      }
    }
  }
  return gaps;
}

function toMarkdown(gaps, meta) {
  const byType = {};
  for (const g of gaps) {
    byType[g.type] = byType[g.type] || [];
    byType[g.type].push(g);
  }

  let md = `# DeepSID Documentation Gaps Report\n\n`;
  md += `Generated: ${meta.generatedAt}\n`;
  md += `Composers scanned: ${meta.composerCount}\n`;
  md += `Player/editor entries scanned: ${meta.playerCount}\n`;
  md += `Total gaps found: ${gaps.length}\n\n`;
  md += `---\n\n`;
  md += `This report was generated by a local script that cross-references data\n`;
  md += `pulled from DeepSID's own API (\`?file=\`, \`?profile=\`, \`?players\`) against\n`;
  md += `each other and against HVSC's official \`Musicians.txt\`. It's intended as a\n`;
  md += `starting point for a GitHub issue at\n`;
  md += `https://github.com/Chordian/deepsid/issues — not a criticism, just a diff.\n\n`;

  const sections = [
    ['PLAYER_MISSING_FIELDS', 'Player/editor entries with missing fields'],
    ['COMPOSER_NO_PROFILE', 'Composers with HVSC files but no DeepSID profile'],
    ['COMPOSER_MISSING_COUNTRY', 'Composer profiles missing a country'],
    ['COMPOSER_COUNTRY_MISMATCH', 'DeepSID country disagrees with HVSC Musicians.txt'],
    ['FILE_UNIDENTIFIED_PLAYER', 'SID files with no identified player routine'],
  ];

  for (const [type, label] of sections) {
    const items = byType[type] || [];
    md += `## ${label} (${items.length})\n\n`;
    if (items.length === 0) {
      md += `_None found._\n\n`;
      continue;
    }
    if (type === 'PLAYER_MISSING_FIELDS') {
      for (const g of items.slice(0, 100)) {
        md += `- **${g.title}** — missing: ${g.missingFields.join(', ')}`;
        if (g.suggestion) md += ` — *suggested site: ${g.suggestion.site} (via ${g.suggestion.source})*`;
        md += `\n`;
      }
    } else if (type === 'FILE_UNIDENTIFIED_PLAYER') {
      for (const g of items.slice(0, 200)) {
        md += `- ${g.composer}: \`${g.file}\`\n`;
      }
    } else {
      for (const g of items.slice(0, 100)) {
        md += `- **${g.composer}** (\`${g.path}\`) — ${g.detail}`;
        if (g.suggestion) {
          const s = g.suggestion;
          const bits = [s.realName && `real name: ${s.realName}`, s.group && `group: ${s.group}`, s.country && `country: ${s.country}`].filter(Boolean);
          md += ` — *suggested (${bits.join(', ')}) via ${s.source}*`;
        }
        md += `\n`;
      }
    }
    if (items.length > 100) {
      md += `\n_(+${items.length - 100} more, see data/gaps-report.json for the full list)_\n`;
    }
    md += `\n`;
  }

  return md;
}

async function main() {
  console.log('Analyzing fetched data for documentation gaps...\n');

  const playersData = readJSON(PLAYERS_PATH);
  if (!playersData) {
    console.warn('  ! data/players.json not found — run scripts/fetch-players.js first');
  }

  const playerGaps = playersData ? findPlayerGaps(playersData) : [];
  const composerGaps = findComposerGaps();
  const allGaps = [...playerGaps, ...composerGaps];

  const composerCount = fs.existsSync(COMPOSERS_DIR)
    ? fs.readdirSync(COMPOSERS_DIR).filter((f) => f.endsWith('.json')).length
    : 0;
  const playerCount = playersData
    ? (Array.isArray(playersData.players) ? playersData.players.length : Object.keys(playersData.players || {}).length)
    : 0;

  const meta = {
    generatedAt: new Date().toISOString(),
    composerCount,
    playerCount,
    totalGaps: allGaps.length,
  };

  writeJSON(REPORT_JSON, { meta, gaps: allGaps });

  const md = toMarkdown(allGaps, meta);
  fs.mkdirSync(path.dirname(REPORT_MD), { recursive: true });
  fs.writeFileSync(REPORT_MD, md, 'utf8');

  console.log(`Found ${allGaps.length} potential documentation gaps:`);
  const counts = {};
  for (const g of allGaps) counts[g.type] = (counts[g.type] || 0) + 1;
  for (const [type, n] of Object.entries(counts)) console.log(`  ${type}: ${n}`);
  console.log(`  with a suggested fix (CSDb/HVSC): ${allGaps.filter((g) => g.suggestion).length}`);
  console.log(`\nWritten:`);
  console.log(`  data/gaps-report.json  (machine-readable)`);
  console.log(`  docs/GAPS_REPORT.md    (human-readable, GitHub-issue-ready)`);
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
