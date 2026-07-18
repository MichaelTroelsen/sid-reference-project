# Documentation Audit — sid-reference-project

**Audited:** 2026-07-18 · **Commit:** c02d7a9 · **Branch:** master
**Working tree:** dirty — 2 untracked files (`HANDOFF-2026-07-16-subagents.md`, `whats-next.md`). Findings describe the working tree, not a clean checkout of `c02d7a9`.
**Documents read:** 12 files read in full (~193 KB) + 511 knowledge cards indexed but **not** read — see Scope below.
**Findings:** 2 P0 · 3 P1 · 3 P2 · 1 P3
**Confidence:** 8 HIGH · 1 MEDIUM · 0 LOW (LOW is never reported)

---

## Scope — what was and was not read

Tiered, because the doc set is 541 markdown files. Stating the tiers because presenting this as comprehensive would be false.

**Tier 1 — read in full, by the auditing session:**
`README.md` (19.5 KB), `CLAUDE.md` (23 KB), `TODO.md` (21.9 KB), `knowledge/README.md`, `knowledge/COVERAGE.md`, `scripts/dev/README.md` (9.3 KB).

**Tier 2 — read in full by a delegated extraction agent** (mechanical transcription only; every claim re-verified centrally against the filesystem before reaching a finding):
`docs/DEEPSID-API.md` (222 lines), `docs/SOURCES.md` (133), `docs/SIDM2-INTEGRATION.md` (134), `docs/GAPS_REPORT.md` (254), `docs/SID-HISTORY.md` (528), `.claude/agents/sid-card-research.md` (124), `.claude/agents/sid-card-falsify.md` (104, read directly), `.claude/commands/sid-card.md` (47), `knowledge/EXTRACTION-TEMPLATE.md` (97), `knowledge/playbooks/disassemble-a-player.md` (79), `knowledge/players/_template.md` (83). Each reader confirmed it reached the last line.

**Tier 3 — indexed, contents NOT audited: 511 files.**
`knowledge/players/*.md`. Their existence, `status` field distribution, and projection into `graph.json` were verified mechanically. **Their prose and asserted facts were not read.** One card (`laxity-newplayer.md`) was routed to the project's own `sid-card-falsify` agent — see Unverifiable.

**Not audited, deliberately:** `HANDOFF-2026-07-16-subagents.md` and `whats-next.md` — untracked working notes, not published documentation. `docs/legacy/sid_reference.html` — explicitly frozen by README.

---

## Ground truth

Established by execution and source inspection **before** any prose was read.

| Fact | Actual value | Source | Confidence |
|---|---|---|---|
| Version | 1.1.0 | `package.json` | HIGH |
| Automated tests | none — no `test` script, no test files | `package.json` + absence protocol | HIGH |
| Dependencies | 1 runtime (`fast-xml-parser`) | `package.json` | HIGH |
| Branch | `master` | `git branch --show-current` | HIGH |
| Under version control | yes | `git rev-parse` | HIGH |
| Knowledge cards | **511** (excl. `_template.md`) | `ls knowledge/players/*.md` | HIGH |
| Card status split | 311 stub · 194 in-progress · 7 verified | `rg -o '"status"\s*:\s*"[^"]*"'` | HIGH |
| Graph | 511 nodes, **51 edges**, 0 dangling | `node -e` over `knowledge/graph.json` | HIGH |
| Connected clusters (size>1) | **19** | union-find over `graph.json` edges | HIGH |
| Curated players | 129 | `data/players.json` `.count` | HIGH |
| Composer seed | 1,895 entries | `data/composer-list.json` length | HIGH |
| Cached composers | 1,902 | `ls data/composers/*.json` | HIGH |
| Tagged files / raw tags | 54,608 / 605 | `knowledge/COVERAGE.md` (generator-verified fresh) | HIGH |
| `output/index.html` | 11,275,101 bytes = **10.75 MB** | `ls -l`, `fs.statSync` | HIGH |
| `npm run all` real chain | 7 steps | `package.json` `scripts.all` + `scripts['fetch:all']` | HIGH |

---

## Findings

### P0-1 · `CLAUDE.md` states the SID trace tooling does not exist yet; it does

**Locations:** `CLAUDE.md:336-337`
**Claim:** "A card only becomes `status: verified` once re-run through `mcp-c64` here (which needs a SID register-write/siddump trace tool it doesn't have yet)."
**Verified by:** inverse-of-gap check, three independent patterns plus direct filesystem checks.
**Actual:** The trace tooling exists and is wired up.
**Evidence:**

| Check | Command | Result | Confidence |
|---|---|---|---|
| MCP server declared | `cat .mcp.json` | `"sidm2-siddump"` server registered | HIGH |
| Server file exists | `ls -l C:/Users/mit/claude/c64server/SIDM2/mcp-siddump/server.py` | 7,886 bytes, present | HIGH |
| In-repo tracer exists | `ls -l scripts/dev/vsid-trace.js` | 18,390 bytes, present | HIGH |
| Three other docs say it's available | `rg -n 'sidm2-siddump'` | `docs/SIDM2-INTEGRATION.md:57-60`, `.claude/agents/sid-card-research.md:27`, `.claude/commands/sid-card.md:41` | HIGH |
| Loop already closed 7 times | `rg -o '"status": "verified"'` | 7 cards at `verified` | HIGH |

`docs/SIDM2-INTEGRATION.md:57-60` says the opposite in as many words: "The trace tooling to close the loop is available in this workspace: `sidm2-siddump` (`trace_sid` for an existing `.sid`, `trace_prg` for a hand-assembled reconstruction, `diff_traces` ...)". `scripts/dev/README.md` documents `vsid-trace.js` as a validated VICE-based SID register-write tracer, cross-checked against `sidm2-sid-trace.exe` to an identical 374-write sequence with "zero divergences".

**Confidence:** HIGH — the code agrees with `SIDM2-INTEGRATION.md`, so the doc-vs-doc conflict is adjudicated: `CLAUDE.md` is the wrong copy.
**Consequence:** `CLAUDE.md` is the agent-facing orientation file. An agent reading it concludes the verification loop is blocked on missing tooling and will either skip verification entirely or rebuild a tracer that already exists twice over. Per the severity escalation rule, a stale "not implemented" note in an agent-facing doc is P0.
**Fix:** Replace the parenthetical at `CLAUDE.md:336-337` with a pointer to `docs/SIDM2-INTEGRATION.md`'s "The verification loop" section, which is current. Do not restate the tool list — that is the duplication that produced this.

---

### P0-2 · `CLAUDE.md` says "all 5 cards are ingested"; there are 511 cards

**Locations:** `CLAUDE.md:316`
**Claim:** "is the *access* layer — all 5 cards are ingested into it via `add_document`, tagged `sid-player-kb` + the card's id"
**Verified by:** `ls knowledge/players/*.md | grep -v _template | wc -l`
**Actual:** 511 cards. Confirmed independently: `graph.json` has 511 nodes; `knowledge/COVERAGE.md` (generator-verified fresh this session) states "**511 knowledge cards**".
**Evidence:** card count `511`; graph `nodes 511 edges 51`.
**Confidence:** HIGH on the count. The *ingestion* status of those 511 into the external MCP server is separately unverifiable — see Unverifiable.
**Consequence:** Agent-facing. An agent reads "all 5 cards" and forms a model of a 5-card toy KB rather than a 511-card one — suppressing exactly the search-before-you-write behaviour the KB exists to enable.
**The project already diagnosed this exact failure, ten lines below the defect.** `CLAUDE.md:326-328`: "The card count grows every batch — run `node knowledge/build-graph.js` for the current figure rather than trusting a number written here. (This line claimed "currently 5 connected cards" long after there were ~190; two separate research passes flagged it as stale before it got fixed.)" The rule was written; a second hardcoded `5` in the same sentence survived it.
**Fix:** Delete the number. "the cards are ingested into it via `add_document`" carries the same meaning and cannot rot.

---

### P1-1 · `npm run all` and `npm run refresh` are documented with fewer steps than they run

**Locations:** `README.md:142`, `README.md:185`, `CLAUDE.md:12-13`
**Claims:**
- `README.md:142` — "That's `fetch:players` → `fetch:composers` → `gaps` → `build` chained"
- `README.md:185` — "This passes `--refresh` to both fetch scripts, so every composer and the full players database get re-requested"
- `CLAUDE.md:12-13` — "`npm run all` does everything: fetch (DeepSID players/composers, CSDb, HVSC docs) → analyze gaps → build HTML"

**Verified by:** `node -e "const s=require('./package.json').scripts; ..."`
**Actual:**
```
all     = npm run fetch:all && npm run gaps && npm run build
fetch:all = npm run fetch:players && npm run fetch:composers && npm run fetch:csdb
            && npm run fetch:player-media && npm run fetch:hvsc-docs
refresh = fetch-composers --refresh && fetch-players --refresh && fetch-csdb --refresh
          && fetch-player-media --refresh && fetch-hvsc-docs --refresh && gaps && build
```
`all` runs **7** steps, documented as 4. `refresh` passes `--refresh` to **5** scripts, documented as "both". `CLAUDE.md` lists 4 of the 5 fetches, omitting `fetch:player-media`.
**Confidence:** HIGH — read from the manifest that npm actually executes.
**Consequence:** A reader budgets for two network fetches and gets five, two of which (`fetch:csdb`, `fetch:player-media`) are per-composer/per-release loops at a 400 ms rate limit. `TODO.md:94` records one such re-run taking "~11 min". Someone running `npm run refresh` expecting a short job is off by an order of magnitude, against a free third-party service.
**Fix:** One canonical description. The step list is already machine-readable in `package.json`; the prose should say "see `scripts.all` in `package.json`" rather than re-listing it a third time.

---

### P1-2 · `docs/SIDM2-INTEGRATION.md` states 345 knowledge cards; there are 511

**Locations:** `docs/SIDM2-INTEGRATION.md:15-16`
**Claim:** "**~1,895 composers** and **~54,600 SID files** cataloged; **345 player knowledge cards** under `knowledge/players/` (7 `verified`, the rest `in-progress`/`stub`)"
**Verified by:** `ls knowledge/players/*.md | grep -v _template | wc -l` → `511`
**Actual:** 511 cards. The other figures in the same sentence are correct: `~1,895 composers` matches `data/composer-list.json` (1,895); `~54,600 SID files` matches `COVERAGE.md`'s 54,608; `7 verified` matches exactly (`rg -o '"status": "verified"'` → 7); `in-progress`/`stub` is the correct residual vocabulary (194 / 311).
**Confidence:** HIGH.
**Consequence:** This section is headed "## Current state (2026-07-18) — read this first" and exists specifically to correct the stale figures below it — it says so: "This doc predates most of the project. The figures further down ("56 composers", "145 documents") are stale". The file's mtime is today and the count is already 166 cards behind. A correction block that is itself stale is worse than none, because it carries borrowed authority.
**Fix:** Regenerate the three counts from `COVERAGE.md`, or link to it. `COVERAGE.md` is generated and has a `--check` freshness gate; this paragraph has neither.

---

### P1-3 · README's rate-limit section still describes the 56-composer seed

**Locations:** `README.md:315`
**Claim:** "Fetching all 56 seed composers takes about 45 seconds because of this; that's intentional."
**Verified by:** `node -e "console.log(require('./data/composer-list.json').length)"` → `1895`
**Actual:** The seed is 1,895 entries. At the documented 400 ms throttle that is ≈12.6 minutes, not 45 seconds.
**Evidence:** `data/composer-list.json` length `1895`. The same README states the expansion twice — `README.md:224` "regenerated from the dump's full composer list (~1,895 entries, up from the original 56 curated ones)" and `README.md:331-332`. So the file contradicts itself and the code sides against line 315.
**Confidence:** HIGH on the seed size and the throttle. MEDIUM on the exact wall-clock, since fetches are skipped per-composer when already cached — a fully-cached run is fast. The 45-second figure is wrong for the cold-cache case the sentence describes.
**Consequence:** Someone runs `npm run fetch:composers` on a cold cache expecting under a minute, then assumes it has hung. Worse, they may lower the throttle — the exact outcome the paragraph is written to prevent.
**Fix:** State the per-request rate and let the reader multiply, or cite the current seed size from the file.

---

### P2-1 · `docs/SID-HISTORY.md` edge and cluster counts disagree with the generator it cites

**Locations:** `docs/SID-HISTORY.md:47`
**Claim:** "There are currently **49 such edges across 17 connected clusters** (`build-graph.js`)."
**Verified by:** direct computation over `knowledge/graph.json` — the artifact `build-graph.js` produces.
**Actual:** **51 edges** across **19 connected clusters** (components of size > 1).
**Evidence:**
```
edges total 51 dangling 0
connected clusters (size>1): 19
cluster sizes: 15,4,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2
edge types: { shares_routine_with: 22, derives_from: 20, successor_of: 9 }
```
The three edge types enumerated at `SID-HISTORY.md:45` (`derives_from` / `successor_of` / `shares_routine_with`) are exactly the three in the graph, so "such edges" means all 51 — the denominator is not the issue, the number is stale.
**Confidence:** HIGH.
**Consequence:** Low individually — a reader recomputing gets the right answer. Reported because the doc names its own generator as the source, which means the number was regenerable and simply was not regenerated. Note that a related claim at `SID-HISTORY.md:212`, "**15 cards in one connected `edges[]` cluster**", is **correct** — the largest cluster is exactly 15. The drift is confined to the summary line.
**Fix:** Have `build-graph.js` emit these two figures, or drop them and point at the graph.

---

### P2-2 · Generated page size has crept past its documented range

**Locations:** `README.md:336-337`, `CLAUDE.md:61-62`
**Claims:**
- `README.md:336` — "The generated page is correspondingly large now — about 9-10MB"
- `CLAUDE.md:61-62` — "Fixed down to ~8-9MB (still large, but usable) — see git history if this creeps back up after future changes. Now ~9-10MB"

**Verified by:** `ls -l output/index.html`; `fs.statSync`
**Actual:** 11,275,101 bytes = **10.75 MB** — above the stated 9-10 MB band.
**Confidence:** HIGH on the measurement. MEDIUM on it being current: `output/index.html` is gitignored and was built 2026-07-13, while `templates/index.html.template` was modified 2026-07-16, so the next build may differ. A fresh build was **not** run — `npm run build` writes to `output/`, and this audit does not run commands with side effects.
**Consequence:** `CLAUDE.md` explicitly asks to be told about this: "see git history if this creeps back up after future changes." It has crept up by ~0.75 MB past the band.
**Fix:** Re-run `npm run build` and re-measure before editing the number. Better, have `build-html.js` print the output size so the figure is observed rather than remembered.

---

### P2-3 · README's architecture tree omits the project's largest component

**Locations:** `README.md:59-115` (the ``` architecture block), specifically the `docs/` sub-block at `README.md:106-114`
**Claim:** The block presents itself as the project layout: `scripts/`, `data/`, `templates/`, `output/`, `docs/`.
**Verified by:** `rg -c` for each path against `README.md`, plus `ls`.
**Actual:** Four things exist and appear nowhere in the tree:

| Omitted | Size / scale | Mentions in README | Confidence |
|---|---|---|---|
| `knowledge/` | 511 cards + graph + playbooks, git-versioned | `rg -c 'knowledge/' README.md` → **0** | HIGH |
| `scripts/dev/` | 9 tools + a 9.3 KB README | `rg -c 'scripts/dev' README.md` → **0** | HIGH |
| `docs/SID-HISTORY.md` | 32 KB, the largest doc in `docs/` | `rg -c 'SID-HISTORY' README.md` → **0** | HIGH |
| `docs/SOURCES.md` | 6.8 KB | absent from the `docs/` tree (though linked at `README.md:20`) | HIGH |

`docs/SID-HISTORY.md` is referenced from exactly one tracked file in the repo — `docs/SIDM2-INTEGRATION.md` — and from the untracked `whats-next.md`. It is effectively unreachable from the entry point.
**Confidence:** HIGH — counts from `rg -c`, each confirmed to have produced a value rather than an empty result.
**Consequence:** A reader arriving at the README learns nothing about the knowledge base, which by file count and by git-tracked volume is the largest thing in the repo. `CLAUDE.md` documents it; `README.md` does not, so the human-facing and agent-facing entry points disagree about what the project contains.
**Fix:** Add `knowledge/` and `scripts/dev/` to the tree and `SOURCES.md` / `SID-HISTORY.md` to the `docs/` sub-block.

---

### P3-1 · Composer and file counts are maintained by hand in 10+ locations

**Locations:** `README.md:16, 81, 204, 224, 272, 304, 331, 337, 356`; `CLAUDE.md:37, 45, 48, 55, 119, 133, 298`; `TODO.md:7, 9, 15, 70, 83, 93, 97, 114, 173, 174, 191, 223`; `docs/SIDM2-INTEGRATION.md:15`; `docs/GAPS_REPORT.md:4`
**Claim:** Composer counts appear as `~1,895`, `~1,900`, and `1,902`; file counts as `~55,000`, `55,223`, `55,225`, and `~54,600`.
**Verified by:** `rg -n` across all Tier 1/2 docs; cross-checked against `data/composer-list.json` (1,895), `ls data/composers/*.json` (1,902), `COVERAGE.md` (54,608).
**Actual:** The variants are **mostly legitimate** — 1,895 is the seed list, 1,902 is the cached-composer count, and the file totals differ by which denominator (dump-sourced vs tagged vs scanned) is meant. This is **not** currently a correctness error, and it is not reported as one.
**Confidence:** HIGH that the values are spread this widely; MEDIUM that they currently all reconcile, since several denominators are described only in prose.
**Consequence:** Structural fragility, not a present defect. Per the duplication rule this is the root cause behind P1-2 and P2-1: every one of those was a hand-maintained count that had a machine-readable source available. `knowledge/COVERAGE.md` already demonstrates the fix in this repo — generated, with a `--check` gate, and carrying its own rot post-mortem in the generator header.
**Fix:** Nothing urgent. When any of these numbers is next touched, replace it with a link to `COVERAGE.md` rather than a new copy.

---

## Duplicated facts

| Fact | Locations | Currently agree? | Canonical source should be |
|---|---|---|---|
| Knowledge-card count | `CLAUDE.md:316` (5), `docs/SIDM2-INTEGRATION.md:16` (345), `knowledge/COVERAGE.md:5` (511), `graph.json` (511 nodes) | **NO** — 5 vs 345 vs 511 | `knowledge/COVERAGE.md` (generated, `--check`-gated) |
| Whether SID trace tooling exists | `CLAUDE.md:336-337` (no), `docs/SIDM2-INTEGRATION.md:57-60` (yes), `.claude/agents/sid-card-research.md:27` (yes), `.claude/commands/sid-card.md:41` (yes), `.mcp.json` (declared) | **NO** — 1 of 5 disagrees | `.mcp.json` + `docs/SIDM2-INTEGRATION.md` |
| `npm run all` step list | `package.json` `scripts.all` (7), `README.md:142` (4), `CLAUDE.md:12-13` (6) | **NO** | `package.json` |
| Cards ingested into `tdz-c64-knowledge` via `add_document` | `CLAUDE.md:316`, `knowledge/README.md:20-27`, `.claude/commands/sid-card.md:33`, `docs/SIDM2-INTEGRATION.md:17` | prose agrees; count does not | `knowledge/README.md` (procedure), no count anywhere |
| Composer count (~1,895 / ~1,900 / 1,902) | 10+ locations across README/CLAUDE/TODO/docs | yes, but by luck | `data/composer-list.json` |
| Page size (~8-9 / ~9-10 MB) | `README.md:336`, `CLAUDE.md:60-62`, `TODO.md:74` | drifted vs disk (10.75 MB) | `build-html.js` should print it |
| Curated player count (129) | `SOURCES.md:21`, `CLAUDE.md:76,79,124`, `TODO.md:263`, `data/players.json` | **YES** — all correct | `data/players.json` `.count` |

---

## Verified clean

Checked, executed, and correct. Each entry names the method and confirms the check produced output rather than silently matching nothing.

- **No exposed secrets.** `rg -n '(token|api[_-]?key|secret|password|bearer)\s*[=:]\s*["\x27][A-Za-z0-9_\-]{16,}'` across the repo (excluding `node_modules`, `deepsid_dl`, lockfiles) → 0 matches, exit 1. **Positive control passed**: the identical pattern matched a synthetic `api_key = "abcdefghij0123456789"` in a scratch file, exit 0 — so the pattern is capable of matching. Git history also scanned: `git log --all -p -- .env .mcp.json config.json | rg -c 'sk-ant|ghp_|AKIA'` → 0.
- **"No automated tests" is TRUE** (`README.md:363`, `CLAUDE.md:300`). Absence protocol, four patterns: (1) `package.json` has no `test` key — `scripts.test` → `ABSENT`; (2) `find` for `*.test.js` / `*_test.js` / `*.spec.js` / `test_*.py` / `test/` → nothing; (3) `rg` for `jest|mocha|vitest|node:test|assert` in `package.json` → nothing; (4) no runner in dependencies (1 dep, `fast-xml-parser`). **Positive control passed**: a scratch `fake.test.js` containing `node:test` and `describe(` was matched by pattern 3 (count 2) and found by the `find` in pattern 2. The docs correctly state their own limitation.
- **All documented file paths resolve.** 67 backticked path tokens extracted from README/CLAUDE/TODO/docs/knowledge and each tested with `[ -e ]` plus a repo-wide `find` fallback. Zero genuinely missing. The 6 that failed a root-relative test are all correct: `composers.sql`, `hvsc_files.sql`, `sidid.nfo` exist under the gitignored `deepsid_dl/` exactly where documented (verified with `ls -l`); `vsid.exe`, `SIDwinder.exe`, `sidm2-sid-trace.exe` are external tools the docs explicitly locate off-repo (`scripts/dev/README.md:67-68` says `vsid.exe` "is **not on PATH**"); `data/composer-list-full.json` is documented as gitignored and regenerable.
- **No broken markdown links.** Local-target links extracted from all Tier 1/2 docs. The 2 that failed a root-relative test — `](DEEPSID-API.md)` and `](GAPS_REPORT.md)` at `docs/SOURCES.md:16` and `:99` — are sibling-relative from within `docs/` and resolve correctly on GitHub.
- **CI badge and branch agree.** README's badge targets `ci.yml`; `.github/workflows/ci.yml` triggers on `branches: [master]`; `git branch --show-current` → `master`. The classic `main`/`master` badge break is absent. CI's two steps (`node scripts/build-html.js`, `test -s output/index.html`) reference a script that exists (15,203 bytes).
- **`knowledge/COVERAGE.md` is fresh.** `node scripts/dev/gen-coverage.js --check` → "knowledge/COVERAGE.md is up to date.", exit 0. Its stated 511 cards, 605 raw tags, 540 families and 12 uncarded families are generator-produced and current.
- **Curated player count 129 is correct** everywhere it appears — `data/players.json` `.count` → 129, matching `SOURCES.md:21`, `CLAUDE.md:76`, `TODO.md:263`. The derived `496` inferred tags is consistent (605 − 129).
- **Card status vocabulary is accurate.** `SIDM2-INTEGRATION.md:16`'s "7 `verified`, the rest `in-progress`/`stub`" matches exactly: 7 verified, 194 in-progress, 311 stub, no other values, no card missing the key.
- **`graph.json` has no dangling edges** — all 51 edges resolve to real nodes, matching `knowledge/README.md:64`'s instruction to "skim the summary for dangling edges / cycles".
- **No boilerplate placeholders.** `rg -n 'YOUR_[A-Z_]+|<[a-z-]+ here>|TODO: (add|fill|describe)|This is a new (repo|project)|Lorem ipsum'` across all `*.md` → 0 matches.
- **No machine-specific paths in tracked documentation.** The class-9 scan found exactly one hit, `192.168.1.187` at `HANDOFF-2026-07-16-subagents.md:147` — an untracked working note, out of scope. Tracked docs are clean. (`.mcp.json` carries an absolute `C:/Users/mit/...` path, but it is tracked config for a personal tool, not a doc claim — P3 at most under the personal-project caveat, and not reported.)
- **`TODO.md` is not padded with completed work.** 21 of 23 items are `[x]`, which would normally trip the class-11 threshold — but each closed item carries a substantive post-mortem (the bug found, the number measured, why an alternative was rejected). This is a decision log, not a stale checklist. Explicitly **not** a finding.

---

## Unverifiable

Listed rather than dropped, and not counted as findings.

| Claim | Location | Why unverifiable |
|---|---|---|
| Cards "all ingested into the `tdz-c64-knowledge` MCP server (~578 documents)" | `docs/SIDM2-INTEGRATION.md:17-18`, `CLAUDE.md:316`, `knowledge/README.md:20-27`, `.claude/commands/sid-card.md:33` | State lives in an external MCP server, not the repo. No `tdz-c64-knowledge` tool was available in this session, so neither the ingestion nor the 578-document count could be checked. The **card count** in the same sentences is separately verifiable and is reported as P0-2 / P1-2. |
| "~99.93% frame accuracy" for the Laxity NewPlayer reconstruction | `CLAUDE.md:334-335`, `docs/SID-HISTORY.md:249, 422, 439`; also "~99.9%" at `SIDM2-INTEGRATION.md:24` | Requires running the SIDM2 disassembly/trace pipeline — side-effecting and long-running, which this audit does not do. Routed to the project's own `sid-card-falsify` agent against `knowledge/players/laxity-newplayer.md`; its verdict was not returned before this report was written. Note the figure appears as both `~99.93%` and `~99.9%`, i.e. it is already a hand-copied duplicate. |
| Facts asserted on 511 knowledge cards | `knowledge/players/*.md` | Tier 3 — not read. Adjudicating SID player memory maps, entry points and lineage edges is the remit of `sid-card-falsify`, which encodes domain traps (the SF2 Driver 11 `$1006` IRQ-vector trap, the editor-vs-runtime format trap) this skill does not. Contradicting it with weaker tools would be worse than saying nothing. |
| `docs/GAPS_REPORT.md`'s 240 gaps / 1902 composers / 111 player gaps | `docs/GAPS_REPORT.md:3-6` | Generated by `find-gaps.js` from `data/gaps-report.json`. Regenerating means running `npm run gaps`, which **writes** `docs/GAPS_REPORT.md` — a side effect. The file's own header timestamp (2026-07-10) and `data/gaps-report.json`'s mtime (2026-07-10 17:01) are consistent, so nothing suggests staleness; it simply was not re-derived. |
| `find-eras.js` figures: "~97% of 55,223 files", "53,534 dated", the decade table | `docs/SID-HISTORY.md:458-474` | `scripts/dev/README.md:19-24` states the script "Needs HVSC locally (see the `HVSC` env var)". The HVSC collection is not in this repo, so the numbers cannot be reproduced here. |
| Historical/attributive claims about composers, tools and eras | `docs/SID-HISTORY.md` throughout | Scene history sourced from cards and external research. Out of scope for a documentation audit; belongs to `sid-card-research` / `sid-card-falsify`. |
| DeepSID `?file=`/`?folder=` outage still ongoing | `README.md:299-302`, `CLAUDE.md:25-27` | Would require a live network call to a third-party service. Not made — verifying a claim must not put load on a free single-maintainer API. |

---

## Blind spots

Text search could not see inside these. A clean secrets scan over this repo is a claim about text files only.

- **9 ZIP archives** under `deepsid_dl/arkiv/` totalling ~48 MB (`DeepSID_Database.zip` 8.5 MB, `DeepSID_Images_CSDb.zip` 16.1 MB, and 7 others). Not opened.
- **~4,873 files under `deepsid_dl/`**, overwhelmingly binary images (2,775 under `DeepSID_Images_GB64/A` alone). Not searched.
- **`deepsid_dl/DeepSID_Database/*.sql`** — ~28 MB of mysqldump text, including `hvsc_files.sql` (27.5 MB). Grep-able in principle; not scanned line by line.
- **`output/index.html`** (10.75 MB) and **`templates/index.html.template`** (105 KB) — single-file bundles with inlined JS, effectively unsearchable by line-oriented patterns.
- **Git history beyond the three config paths checked.** `git log --all -p` was run only for `.env`, `.mcp.json`, `config.json`.

All of the above except `output/` are gitignored, so nothing in them is published by this repo.

---

## Structural observations

**The recurring class is one class.** Seven of the eight findings are the same defect: a number or a capability status written by hand into prose when a machine-readable source existed. Card count (P0-2, P1-2), tooling status (P0-1), step count (P1-1), seed size (P1-3), edge/cluster count (P2-1), page size (P2-2). None is a judgment error; all are copies that stopped tracking their source.

**The project has already solved this once, and the solution works.** `scripts/dev/gen-coverage.js` exists because `COVERAGE.md` rotted badly — its header records the damage precisely: written at 13 cards, still claiming "531 uncarded families / 50,177 uncarded files long after 200 cards existed and the real figure was ~6,673", with its top entry already carded for months, such that "any batch job trusting it as a work-list would have wasted ~29% of its runs". The fix was a generator plus a `--check` gate. That gate passed cleanly this session. **`COVERAGE.md` is the only count-bearing document in the repo that is currently correct**, and it is the only one that is generated. The pattern to extend is already in the repo, in a sibling directory, written by the same hand.

**The correction blocks are themselves rotting.** Two of the highest-severity findings sit inside text written specifically to correct earlier staleness — `CLAUDE.md:316` is ten lines above its own post-mortem about a hardcoded card count, and `SIDM2-INTEGRATION.md:16` is inside a section headed "read this first" that opens by declaring the figures below it stale. A correction that is not generated has the same half-life as the error it corrects, but carries more authority while it decays.

**`CLAUDE.md` and `README.md` have diverged on what the project is.** `CLAUDE.md` devotes a section to `knowledge/`; `README.md` mentions it zero times. The knowledge base is the largest git-tracked component. Whichever file a reader lands on determines whether they know it exists.

---

## Recommended order

1. **P0-1** — delete the "doesn't have yet" parenthetical at `CLAUDE.md:336-337`. One-line edit; unblocks the verification loop for any agent reading it.
2. **P0-2** — delete the `5` at `CLAUDE.md:316`. One word; the sentence is correct without it.
3. **P1-2** — regenerate or link the three counts at `docs/SIDM2-INTEGRATION.md:15-16`.
4. **P1-1 / P1-3** — replace the hand-listed step chains (`README.md:142, 185`, `CLAUDE.md:12-13`) and the 56-composer figure (`README.md:315`) with pointers to `package.json` and `data/composer-list.json`.
5. **P2-3** — add `knowledge/`, `scripts/dev/`, `SOURCES.md` and `SID-HISTORY.md` to the README architecture tree.
6. **P2-1 / P2-2** — have `build-graph.js` emit edge/cluster counts and `build-html.js` emit output size, then cite those instead of remembering them.
7. **P3-1** — no action now. Apply the `gen-coverage.js` pattern the next time any of these counts is edited.

<!-- Regenerated on each audit. Git holds the history. -->
</content>
</invoke>
