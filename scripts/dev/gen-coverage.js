#!/usr/bin/env node
/**
 * Regenerate `knowledge/COVERAGE.md` — the ranked list of player families that
 * still have no knowledge card.
 *
 * Usage:
 *   node scripts/dev/gen-coverage.js            # rewrite knowledge/COVERAGE.md
 *   node scripts/dev/gen-coverage.js --check    # exit 1 if the file is stale
 *   node scripts/dev/gen-coverage.js --stdout   # print, don't write
 *
 * WHY THIS EXISTS. COVERAGE.md was previously generated ad-hoc, committed, and
 * then never regenerated -- its header said "Generated from data/composers/*.json"
 * but no generator was ever checked in. It rotted badly: written when the KB had
 * 13 cards, it still claimed 531 uncarded families / 50,177 uncarded files long
 * after 200 cards existed and the real figure was ~6,673. Its #1 entry, DMC
 * (10,491 files), had had a card for months. Any batch job trusting it as a
 * work-list would have wasted ~29% of its runs rediscovering existing cards.
 *
 * Run `--check` from a pre-commit gate so it cannot rot again.
 *
 * TWO GROUPING FIXES vs the original hand-made table:
 *
 *   1. Trailing bare digits are only stripped when doing so ACTUALLY MERGES two
 *      or more tags. The old rule stripped them unconditionally, which turned
 *      `System6581` into a family called "System" and `Prophet64` into "Prophet"
 *      -- mangling tool names that simply end in a number. `DUSAT/RockMon2..5.1`
 *      still groups to `DUSAT/RockMon`, because there it genuinely merges.
 *
 *   2. Families where SOME tags are carded and some are not are reported
 *      separately as PARTIALLY CARDED rather than silently counted as uncarded.
 *      That section is a live alias-gap detector: it is exactly the bug that hid
 *      2,474 files behind a `"JCH NewPlayer V5-V20"` range string sitting in an
 *      aliases array where machine-readable tags belong.
 *
 * KNOWN BLIND SPOT (shared with find-uncarded-tags.js / coverage.js):
 * `data/composers/*.json` covers HVSC's MUSICIANS/ tree only, so GAMES/ files
 * are invisible and every count here is a lower bound.
 */

const fs = require('fs');
const path = require('path');

const OUT = path.join('knowledge', 'COVERAGE.md');
const COMPOSERS = path.join('data', 'composers');
const CARDS = path.join('knowledge', 'players');

/**
 * Families whose player source is publicly available, so a higher-confidence
 * card is possible. Hand-curated -- this is real knowledge, not derivable from
 * the dump. Carried over from the original table; add to it as you learn more.
 */
const OPEN_SOURCE = new Set([
  'GoatTracker',
  'GoatTracker_V2/Mini',
  'Hermit/SidWizard',
  'CheeseCutter',
  'DefleMask',
  'SidTracker',
  'OdinTracker',
  'Reflextracker',
  'CyberTracker_exe',
  '(SidWizard_2SID)',
]);

/** Content-equality helper: line endings and trailing whitespace are not content. */
function normalise(s) {
  return s.replace(/\r\n/g, '\n').trim();
}

/** Strip an unambiguous _V<version> suffix: DMC_V4.x -> DMC, FC_V4_Packed -> FC. */
function stripVersionSuffix(tag) {
  return tag.replace(/_V\d+(\.(\d+|x))?(_Packed)?$/i, '');
}

/** Strip a trailing bare version number: RockMon5.1 -> RockMon, MusicMaster_1 -> MusicMaster. */
function stripBareDigits(tag) {
  return tag.replace(/_\d+$/, '').replace(/\d+(\.\d+)?$/, '');
}

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

function readCardedAliases() {
  const byAlias = new Map(); // alias -> card id
  const files = fs.readdirSync(CARDS).filter((f) => f.endsWith('.md') && f !== '_template.md');
  for (const f of files) {
    const txt = fs.readFileSync(path.join(CARDS, f), 'utf8');
    const id = (txt.match(/"id":\s*"([^"]+)"/) || [])[1] || f.replace(/\.md$/, '');
    const m = txt.match(/"aliases":\s*\[([^\]]*)\]/);
    if (m) {
      for (const a of m[1].match(/"([^"]+)"/g) || []) {
        byAlias.set(a.replace(/"/g, ''), id);
      }
    }
  }
  return { byAlias, cardCount: files.length };
}

/** Group raw tags into families. See the header for the two fixes vs the old rule. */
function buildFamilies(tags) {
  // Pass 1: strip _V suffixes unconditionally.
  const stage = new Map(); // stripped -> [rawTag]
  for (const tag of tags.keys()) {
    const k = stripVersionSuffix(tag);
    if (!stage.has(k)) stage.set(k, []);
    stage.get(k).push(tag);
  }

  // Pass 2: bare-digit stripping ONLY where it merges 2+ distinct stage keys.
  const bareGroups = new Map(); // bare -> [stageKey]
  for (const k of stage.keys()) {
    const b = stripBareDigits(k);
    if (b === k || !b) continue;
    if (!bareGroups.has(b)) bareGroups.set(b, []);
    bareGroups.get(b).push(k);
  }

  const families = new Map(); // family -> Set(rawTag)
  const claimed = new Set();
  for (const [bare, keys] of bareGroups) {
    // Merge only if this bare name pulls together 2+ stage keys, or pulls a
    // stage key into an already-existing bare-named tag (e.g. "DMC" + "DMC_V4.x").
    const mergesRealTags = keys.length >= 2 || stage.has(bare);
    if (!mergesRealTags) continue;
    const set = new Set();
    for (const k of keys) {
      stage.get(k).forEach((t) => set.add(t));
      claimed.add(k);
    }
    if (stage.has(bare)) {
      stage.get(bare).forEach((t) => set.add(t));
      claimed.add(bare);
    }
    families.set(bare, set);
  }
  for (const [k, raws] of stage) {
    if (claimed.has(k)) continue;
    families.set(k, new Set(raws));
  }
  return families;
}

function main() {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  const toStdout = args.includes('--stdout');

  for (const d of [COMPOSERS, CARDS]) {
    if (!fs.existsSync(d)) {
      console.error(`missing ${d} -- run from the repo root`);
      process.exit(1);
    }
  }

  const tags = readTags();
  const { byAlias, cardCount } = readCardedAliases();
  const families = buildFamilies(tags);

  const totalTagged = [...tags.values()].reduce((a, b) => a + b, 0);

  const uncarded = [];
  const partial = [];
  let cardedFiles = 0;

  for (const [family, raws] of families) {
    const rawList = [...raws].sort();
    const files = rawList.reduce((s, t) => s + tags.get(t), 0);
    const hit = rawList.filter((t) => byAlias.has(t));
    const miss = rawList.filter((t) => !byAlias.has(t));
    const missFiles = miss.reduce((s, t) => s + tags.get(t), 0);

    if (hit.length === 0) {
      uncarded.push({ family, files, rawList });
    } else if (miss.length > 0) {
      partial.push({
        family,
        card: byAlias.get(hit[0]),
        missFiles,
        miss,
        hit,
      });
      cardedFiles += files - missFiles;
    } else {
      cardedFiles += files;
    }
  }

  uncarded.sort((a, b) => b.files - a.files);
  partial.sort((a, b) => b.missFiles - a.missFiles);

  const uncardedFiles = uncarded.reduce((s, u) => s + u.files, 0);
  const pct = ((cardedFiles / totalTagged) * 100).toFixed(1);

  const L = [];
  L.push('# Knowledge-card coverage: players without a card');
  L.push('');
  L.push(
    '_Generated by `node scripts/dev/gen-coverage.js` from `data/composers/*.json` ' +
      '(DeepSID dump per-file `player` tags). **Do not hand-edit** — regenerate instead, ' +
      'and run `--check` to verify freshness. This file rotted badly once: it was written ' +
      'when the KB had 13 cards and still claimed 531 uncarded families long after 200 ' +
      'cards existed._'
  );
  L.push('');
  L.push(
    `**${totalTagged.toLocaleString('en-US')} tagged files across ${tags.size} raw tags**, ` +
      `grouped into ${families.size} families. **${cardCount} knowledge cards** currently ` +
      `cover **${cardedFiles.toLocaleString('en-US')} files (${pct}%)**.`
  );
  L.push('');
  L.push(
    `**${uncarded.length} uncarded families covering ${uncardedFiles.toLocaleString('en-US')} files.** ` +
      'Ranked by SID-file count. The `source` column flags families whose player source is ' +
      'publicly available (higher-confidence card possible); blank = classic player, ' +
      'research/doc-sourced `stub` only (no local RE/verification path).'
  );
  L.push('');
  L.push(
    '> Counts are a **lower bound**: `data/composers/*.json` covers HVSC\'s `MUSICIANS/` ' +
      'tree only, so `GAMES/` files are invisible here.'
  );
  L.push('');
  L.push('| # | files | player family | source | grouped raw tags |');
  L.push('|--:|--:|---|---|---|');
  uncarded.forEach((u, i) => {
    const src = OPEN_SOURCE.has(u.family) ? 'open-source' : '';
    L.push(`| ${i + 1} | ${u.files} | ${u.family} | ${src} | ${u.rawList.join(', ')} |`);
  });

  L.push('');
  L.push('## Partially carded families — alias gaps');
  L.push('');
  if (partial.length === 0) {
    L.push('_None. Every family with a card claims all of its raw tags._');
  } else {
    L.push(
      'A card exists and claims **some** of the family\'s raw tags but not others. This is ' +
        'almost always a bookkeeping gap in the card\'s `aliases` array, not a real knowledge ' +
        'gap — the fix is usually to add the tag, not to write a card. This exact bug once ' +
        'hid 2,474 files behind the range **string** `"JCH NewPlayer V5-V20"` sitting in an ' +
        'aliases array where machine-readable tags belong.'
    );
    L.push('');
    L.push('| family | card | unclaimed files | unclaimed raw tags |');
    L.push('|---|---|--:|---|');
    for (const p of partial) {
      L.push(`| ${p.family} | \`${p.card}\` | ${p.missFiles} | ${p.miss.join(', ')} |`);
    }
  }
  L.push('');

  const out = L.join('\n');

  if (toStdout) {
    process.stdout.write(out + '\n');
    return;
  }

  if (check) {
    const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
    // Compare on normalised line endings. Git checks this file out with CRLF on
    // Windows (autocrlf) while the generator writes LF, so a byte comparison
    // reports STALE on every fresh clone -- which would make the gate cry wolf
    // permanently and train everyone to ignore it. Content is what we mean.
    if (normalise(cur) !== normalise(out)) {
      console.error('STALE: knowledge/COVERAGE.md differs from a fresh generation.');
      console.error('Run: node scripts/dev/gen-coverage.js');
      process.exit(1);
    }
    console.log('knowledge/COVERAGE.md is up to date.');
    return;
  }

  fs.writeFileSync(OUT, out + '\n');
  console.log(`Wrote ${OUT}`);
  console.log(`  ${totalTagged} tagged files, ${tags.size} raw tags, ${families.size} families`);
  console.log(`  ${cardCount} cards cover ${cardedFiles} files (${pct}%)`);
  console.log(`  ${uncarded.length} uncarded families, ${uncardedFiles} files`);
  console.log(`  ${partial.length} partially-carded families (alias gaps)`);
}

main();
