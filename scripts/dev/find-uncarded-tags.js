#!/usr/bin/env node
/**
 * Find player tags in the DeepSID data that don't have a knowledge card yet.
 *
 * The knowledge base (`knowledge/players/*.md`) is built up in batches; this
 * script picks the next batch's candidates. It cross-references every `player`
 * tag seen across `data/composers/*.json` against the `aliases` field of every
 * existing card, and reports what's left.
 *
 * Usage:
 *   node scripts/dev/find-uncarded-tags.js [--floor N] [--limit N] [--all] [--json]
 *
 *   --floor N   minimum file count to report (default 2; lower as the tail thins)
 *   --limit N   max candidates to print (default 40)
 *   --all       don't apply the composer/tool-personal-tag heuristics
 *   --json      machine-readable output
 *
 * READ THIS BEFORE TRUSTING THE DEFAULT VIEW. The default heuristics
 * (`ncomp <= 3` and a `Foo_Bar` name shape) select for *personal* driver tags
 * -- which are, almost by construction, the SMALLEST tags in the collection.
 * The default view is therefore the TAIL of the distribution, and reading it as
 * "what's left" is actively misleading: it once produced the conclusion that
 * the work was nearly done when 91% of uncarded files were sitting untouched
 * in tags the heuristic hides.
 *
 * The real shape (2026-07-16, 54,608 tagged files, 83.2% covered):
 *
 *     10+ files: 150 tags,  8,316 files   <- 91% of everything uncarded
 *     5-9 files:  76 tags,    494 files
 *     3-4 files:  52 tags,    181 files
 *       2 files:  52 tags,    104 files
 *       1 files:  52 tags,     52 files   <- the default view lives here
 *
 * Run `--all` to see the head: the big uncarded tags are real, documented,
 * multi-composer TOOLS (SidTracker64, CyberTracker, DefMon, SidWinder,
 * Reflextracker, Ariston, System6581, MoN/Deenen), not obscure person drivers.
 * Prefer them when picking a batch -- the value per card is far higher.
 *
 * NOTE: an aliases-field match is necessary but NOT sufficient. For each
 * candidate this prints, also run:
 *
 *     grep -rl -- "<base-name>" knowledge/players/*.md
 *
 * That has repeatedly caught real near-duplicates and legitimate sibling tags
 * (e.g. Cadaver_Musicdriver_7, Ryo_Kawasaki) which should be written as new,
 * separate, cross-referenced cards rather than skipped or merged in.
 *
 * KNOWN UNDERCOUNT: `data/composers/*.json` only covers HVSC's `MUSICIANS/`
 * tree, so files under `GAMES/` are invisible here and every count below is a
 * lower bound. This is not cosmetic -- it can change what a tag *is*:
 * `Jim_Baguley/SolarSoft` reads as 2 files by one composer, but a third tagged
 * file (`GAMES/M-R/Monkey_Magic.sid`, by John P. Shay) makes it a *shared*
 * driver across two composers. Cross-check a candidate against the dump's
 * `hvsc_files.sql` before concluding a tag is personal to one composer.
 */

const fs = require('fs');
const path = require('path');

// RSID / self-installing-IRQ tags the project's own tracer can't drive. These
// aren't uninteresting, they're blocked on tooling -- see whats-next.md.
const RSID_DEAD_ENDS = /digi|sample|mixer/i;

function parseArgs(argv) {
  const opts = { floor: 2, limit: 40, all: false, json: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--floor') opts.floor = Number(argv[++i]);
    else if (a === '--limit') opts.limit = Number(argv[++i]);
    else if (a === '--all') opts.all = true;
    else if (a === '--json') opts.json = true;
    else throw new Error(`unknown argument: ${a}`);
  }
  if (!Number.isFinite(opts.floor) || opts.floor < 1) throw new Error('--floor must be >= 1');
  if (!Number.isFinite(opts.limit) || opts.limit < 1) throw new Error('--limit must be >= 1');
  return opts;
}

/** Every player tag across every cached composer, with per-composer counts. */
function collectTags(dir) {
  const tags = new Map();
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    let composer;
    try {
      composer = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    } catch {
      continue; // a half-written cache file shouldn't sink the whole run
    }
    if (!Array.isArray(composer.folder)) continue;
    for (const rec of composer.folder) {
      const tag = rec.player;
      if (!tag) continue;
      if (!tags.has(tag)) tags.set(tag, { count: 0, composers: new Map() });
      const entry = tags.get(tag);
      entry.count++;
      entry.composers.set(composer.name, (entry.composers.get(composer.name) || 0) + 1);
    }
  }
  return tags;
}

/** Every tag already claimed by a card's `aliases` field. */
function collectCardedAliases(dir) {
  const aliases = new Set();
  for (const f of cardFiles(dir)) {
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = txt.match(/"aliases":\s*\[([^\]]*)\]/);
    if (m) for (const a of m[1].match(/"([^"]+)"/g) || []) aliases.add(a.replace(/"/g, ''));
  }
  return aliases;
}

function cardFiles(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== '_template.md');
}

function main() {
  const opts = parseArgs(process.argv.slice(2));

  const composersDir = path.join('data', 'composers');
  const cardsDir = path.join('knowledge', 'players');
  for (const d of [composersDir, cardsDir]) {
    if (!fs.existsSync(d)) {
      console.error(`missing ${d} -- run this from the repo root (and \`npm run all\` first?)`);
      process.exit(1);
    }
  }

  let sidid = {};
  try {
    sidid = require(path.resolve('data/sidid.json')).byTag || {};
  } catch {
    // sidid.json is an optional one-time import; absence just means no enrichment
  }

  const tags = collectTags(composersDir);
  const carded = collectCardedAliases(cardsDir);

  let candidates = [...tags.entries()].map(([tag, v]) => ({
    tag,
    count: v.count,
    ncomp: v.composers.size,
    top: [...v.composers.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([n, c]) => `${n}(${c})`),
    sidid: sidid[tag] || null,
  }));

  candidates = candidates.filter((a) => !carded.has(a.tag) && a.count >= opts.floor);
  if (!opts.all) {
    // Composer/tool-personal tags: few composers, and a Foo_Bar shaped name.
    candidates = candidates.filter(
      (a) => a.ncomp <= 3 && /^[A-Z][a-zA-Z]+_[A-Z][a-zA-Z]+/.test(a.tag)
    );
  }
  candidates.sort((x, y) => y.count - x.count);

  const shown = candidates.slice(0, opts.limit);

  if (opts.json) {
    console.log(JSON.stringify({ total: candidates.length, shown }, null, 2));
    return;
  }

  const blocked = shown.filter((a) => RSID_DEAD_ENDS.test(a.tag)).length;
  console.log(
    `${tags.size} distinct tags, ${carded.size} carded aliases, ` +
      `${candidates.length} uncarded candidates at floor >=${opts.floor}\n`
  );
  for (const a of shown) {
    const s = a.sidid ? ` | SIDId:YES (${a.sidid.name || ''}/${a.sidid.author || ''})` : '';
    const flag = RSID_DEAD_ENDS.test(a.tag) ? ' [RSID?]' : '';
    console.log(`${a.tag}${flag} | files=${a.count} comps=${a.ncomp} | top: ${a.top.join(', ')}${s}`);
  }
  if (candidates.length > shown.length) {
    console.log(`\n... and ${candidates.length - shown.length} more (raise --limit)`);
  }
  if (blocked) {
    console.log(`\n${blocked} shown candidate(s) flagged [RSID?] -- likely blocked on the tracer gap.`);
  }
}

main();
