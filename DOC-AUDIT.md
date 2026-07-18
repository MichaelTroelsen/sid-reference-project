# Documentation Audit — sid-reference-project

**Audited:** 2026-07-18 · **Commit:** 6193e1f · **Branch:** master
**Working tree:** clean except 2 untracked working notes (`HANDOFF-2026-07-16-subagents.md`, `whats-next.md`) — not in scope, see below.
**Note on this run:** a prior `DOC-AUDIT.md` (audited against `c02d7a9`, before this repo's issues #90–#97 were fixed and merged via PR #98) was found already committed to `master` as `6193e1f` when this run started — apparently by a separate, earlier audit pass. Every finding in that report maps 1:1 to issues #90–#97, all of which are now closed. This report supersedes it, auditing the **current**, post-fix state. See "What changed since the last report" below.
**Documents read:** 11 files, ~140.5 KB, all read in full · 2 generated files spot-verified against their generators (not read prose-line-by-line) · 511 knowledge cards indexed only (existence/count verified, contents out of scope — see Scope)
**Findings:** 0 P0 · 1 P1 (fixed) · 1 P2 (fixed) · 0 P3
**Confidence:** 2 HIGH · 0 MEDIUM · 0 LOW (LOW is never reported)

---

## What changed since the last report

The `6193e1f` report audited commit `c02d7a9`. Between that commit and now, PR #98 (`3432cb7` → merged as `569fd15`) fixed all 8 of its findings. This run re-verified each one against current `HEAD`:

| Prior finding | Status now | How verified this run |
|---|---|---|
| P0-1 — CLAUDE.md claimed trace tooling doesn't exist | **Fixed** | `CLAUDE.md:348-351` now points at `SIDM2-INTEGRATION.md`'s "The verification loop" section (confirmed that heading exists at line 55) |
| P0-2 — "all 5 cards" | **Fixed** | `CLAUDE.md:329` now reads "the cards are ingested" — no hardcoded number |
| P1-1 — `npm run all`/`refresh` step counts | **Fixed** | `README.md:154-161,207-209`, `CLAUDE.md:12-14` now state 7 steps and list all 5 fetches, incl. `fetch:player-media` |
| P1-2 — "345 knowledge cards" | **Fixed** | `SIDM2-INTEGRATION.md:15-18` now points at `COVERAGE.md` + an `rg` command instead of a hardcoded count |
| P1-3 — "45 seconds" for the 56-composer seed | **Fixed** | `README.md:337-339` now says "~1,895 composers... on the order of ten minutes" |
| P2-1 — SID-HISTORY.md "49 edges / 17 clusters" | **Fixed** | `SID-HISTORY.md:47` now says 51/19 — re-verified against `graph.json` this run: **51 edges, 19 clusters (size>1)**, exact match |
| P2-2 — page size "9-10MB" | **Fixed** | `README.md:359-362`, `CLAUDE.md:62-66` now say ~10.75MB and point at `build-html.js`'s own printed size |
| P2-3 — README architecture tree omitted `knowledge/`, `scripts/dev/`, `SID-HISTORY.md`, `SOURCES.md` | **Fixed** | `README.md:78-79,108-114,119-120` now list all four |
| P3-1 — composer/file counts hand-maintained in 10+ places | **Acknowledged, not "fixed"** (correctly — the finding said no action was needed) | `CLAUDE.md:309-317` now carries the fragility note the finding recommended |

All 8 are closed on GitHub (issues #90–#97, verified via `gh issue list --state all`).

---

## Scope — what was and was not read

**Read in full this run** (11 files, ~140.5 KB): `README.md` (391 lines), `CLAUDE.md` (360 lines), `TODO.md` (319 lines), `docs/SID-HISTORY.md` (527 lines), `docs/SIDM2-INTEGRATION.md` (135 lines), `docs/SOURCES.md` (132 lines), `docs/DEEPSID-API.md` (221 lines), `knowledge/README.md`, `knowledge/EXTRACTION-TEMPLATE.md`, `knowledge/playbooks/disassemble-a-player.md`, `scripts/dev/README.md`.

**Generated, spot-verified against generator/source rather than read line-by-line:** `docs/GAPS_REPORT.md` (26 KB — its header stats cross-checked against `data/gaps-report.json` directly); `knowledge/COVERAGE.md` (freshness-checked via `gen-coverage.js --check`, exit 0).

**Indexed, not read:** `knowledge/players/*.md` — 511 individual player cards. Existence and count (511) verified, and cross-referenced numerically against `graph.json` and raw composer data for several specific claims (see below), but their prose/asserted facts were not read card-by-card — that is the remit of this project's own `sid-card-falsify` agent, not a general docs-vs-code audit.

**Out of scope, not audited:** `HANDOFF-2026-07-16-subagents.md`, `whats-next.md` (untracked personal working notes); `docs/legacy/sid_reference.html` (explicitly frozen, per README).

---

## Ground truth

| Fact | Actual value | Source | Confidence |
|---|---|---|---|
| Version | 1.1.0 | `package.json` | HIGH |
| Dependencies | 1 runtime (`fast-xml-parser`), 0 dev | `package.json` | HIGH |
| Node floor | >=18 | `package.json` `engines` | HIGH |
| Branch | `master` | `git branch --show-current` | HIGH |
| Repo visibility | public | `gh repo view` | HIGH |
| LICENSE / CONTRIBUTING.md | neither present | `ls` | HIGH |
| Under version control | yes, HEAD `6193e1f` | `git rev-parse` | HIGH |
| `npm run all` chain | 7 steps (`fetch:all`×5 → `gaps` → `build`) | `package.json` `scripts` | HIGH |
| Composer seed / cached composers | 1,895 / 1,902 | `data/composer-list.json`, `ls data/composers/*.json` | HIGH |
| Knowledge cards / status split | 511 (7 verified · 194 in-progress · 311 stub) | `ls knowledge/players/*.md`, `rg -h '"status"'` | HIGH |
| Graph | 511 nodes, 51 edges, 19 clusters (size>1) | `knowledge/graph.json` + union-find | HIGH |
| Curated players | 129 | `data/players.json` `.count` | HIGH |
| Generated page size | 11,275,475 bytes ≈ 10.75 MB | fresh `npm run build` this run | HIGH |
| CSDb-enriched composers | **1,608** of 1,902 | fresh `npm run build`'s own printed count | HIGH |
| Composers with a non-zero `csdb_id` | 1,611 of 1,902 | direct scan of `data/composers/*.json` | HIGH |

---

## Findings

### P1-1 · `.mcp.json` hardcodes the author's personal machine path, tracked in a public repo — FIXED

**Locations:** `.mcp.json:5`
**Claim:** `"args": ["C:/Users/mit/claude/c64server/SIDM2/mcp-siddump/server.py"]`
**Verified by:** `git ls-files .mcp.json` (tracked) + `git check-ignore -v .mcp.json` (not ignored) + `gh repo view` (`visibility: PUBLIC`)
**Actual:** This absolute path only resolves on the repo author's own machine. Anyone else who clones this public repo and has Claude Code load `.mcp.json` will get a `sidm2-siddump` server that fails to start — `python` will report the file doesn't exist — with no doc anywhere explaining that this path needs to be edited first.
**Confidence:** HIGH — filesystem, git tracking state, and repo visibility all directly confirmed.
**Consequence:** A class-9 (machine-specific/non-portable) defect. Per the severity rules this escalates from P3 to P1 specifically because the repo is published — the condition is met even though there's no LICENSE or CONTRIBUTING.md inviting outside use. Note: a companion audit of this same repo (see the git history at `6193e1f`, superseded by this report) considered this same path and judged it "tracked config for a personal tool, not a doc claim" and did not report it, on the reasoning that this is explicitly a personal research tool (`README.md`'s own "Known limitations" section says so). That is a defensible call — flagging the disagreement here rather than silently picking one: if this repo is genuinely never meant to be run by anyone but its author, this is a non-issue; if a stranger might ever clone it and try the MCP integration, it will silently fail for them.
**Fix:** Either add a one-line setup note (README or CLAUDE.md) telling a new clone to edit this path before use, or switch to a relative/env-var-based path if the `sidm2-siddump` server supports one.
**Applied:** added a note at `docs/SIDM2-INTEGRATION.md:69-73` telling a new clone to edit `.mcp.json`'s `args` before the server will start. The path itself was left as-is (still the author's actual local checkout) rather than genericized, since this is still a working config for the primary user.

---

### P2-1 · CSDb-enrichment count is stale in 4 places: says 1,609, actually 1,608 — FIXED

**Locations:** `README.md:381`, `TODO.md:97`, `TODO.md:144`, `TODO.md:193`
**Claim:** "Currently 1,609 of 1,902 composers (85%) are enriched" (`README.md:381`); "Composer cards with real CSDb bio/group/country data went from 47 to 1,609 of 1,902 (85%)" (`TODO.md:97`); "CSDb enrichment covers 1,609 composers instead of 47" (`TODO.md:144`); "1,609 CSDb-enriched composers belonged to 3+ different groups" (`TODO.md:193`)
**Verified by:** executing `npm run build` this run and reading its own printed line
**Actual:** `composers with CSDb enrichment: 1608` — one less than every doc copy.
**Evidence:** `build-html.js:263` computes this as `composers.filter((c) => c.csdb).length`; a composer's `summarizeCsdb()` returns `null` (excluded from the count) when its CSDb cache entry is a group rather than a person (`build-html.js:150`) — of the 1,611 files under `data/csdb/` with a non-empty response, 3 are groups, leaving 1,608 real person-enrichments. All four docs independently agree on 1,609, so this is a genuine duplicated-and-drifted fact, not a typo in one place.
**Confidence:** HIGH — read directly from the generator's own console output, the same method the previous report used successfully for the page-size finding.
**Consequence:** Low — nothing downstream depends on the exact figure, and 1,608/1,902 still rounds to the stated 85%. Self-correcting if a reader recomputes.
**Fix:** Since this number is already flagged as one of the fragile hand-maintained counts (`CLAUDE.md:309-317`'s own fragility note, added by the previous fix round), the more durable fix is what that note already recommends: point at a generated source instead of writing a fifth copy. Failing that, simply correct all four to 1,608.
**Applied:** all four copies corrected to 1,608 (`README.md:381`, `TODO.md:97,144,193`); `README.md:381` additionally now says to check `npm run build`'s own console output for the current figure, per the fragility note's own recommendation.

---

## Duplicated facts

| Fact | Locations | Currently agree? | Canonical source should be |
|---|---|---|---|
| CSDb-enriched composer count | `README.md:381`, `TODO.md:97,144,193` | Yes with each other, **no** with the generator (1,609 vs 1,608) | `build-html.js`'s own printed count (not currently captured anywhere persistent — could be added to a generated summary the way `COVERAGE.md` does) |
| Composer/file counts by denominator (~1,895 / 1,902 / 54,608 / 55,223) | 10+ locations across README/CLAUDE/TODO/docs | Yes — legitimately different denominators, already documented as such in `CLAUDE.md:309-317` | `data/composer-list.json`, `ls data/composers/*.json`, `knowledge/COVERAGE.md` respectively (already the recommendation on file; no new action) |

---

## Verified clean

- **All 8 previously-filed findings (issues #90–#97) are fixed** — see "What changed since the last report" above for the per-item re-verification.
- **`docs/SID-HISTORY.md`'s quantitative claims** — spot-checked ~10 independent numeric claims against raw data, all exact matches: edge/cluster count (51/19, via `graph.json` union-find); the Rob Hubbard hub (256 files, 51 composers, 27.7%≈"~28%" own-work, via a direct scan of `data/composers/*.json`); DMC (10,491 files/365 composers); Future Composer (3,398 files/366 composers, disambiguated from the separate `mon-futurecomposer` tag family); Richard Bayliss as most-prolific composer (1,282 files); the "shape over time" section's entire decade table, ~97% header-dated rate (96.9%, 53,534 of 55,223), and all 4 quoted median-vs-release examples (SoundMonitor 1988/1986, Rob Hubbard 1987/1985, SID Factory II 2022/2019, CheeseCutter 2016/2011) — reproduced exactly via a local run of `scripts/dev/find-eras.js`; the 7-verified-card list (`david-whittaker`, `fred-gray`, `jeroen-kimmel`, `laxity-newplayer`, `martin-galway`, `matt-gray`, `rob-hubbard` — matches the doc's "six of seven belong to Era I, one to Era III" claim exactly).
- **`docs/SIDM2-INTEGRATION.md`'s priority table** — all 6 rows' file counts and edge-degrees confirmed exactly: jch-newplayer (1,885 files/9 edges), sid-factory-ii (360/6), goattracker (8,421/0), dmc (10,491/2), cheesecutter (293/2), soundmonitor (2,403/2) — files via raw tag-count scans of `data/composers/*.json`, edges via `graph.json`.
- **`TODO.md`'s still-current numeric claims** — `import_from` populated on 6 of 129 players (exact); gaps with a `suggestion` field, 97 of 240, broken down by type exactly as stated (`COMPOSER_MISSING_COUNTRY` 88/110, `PLAYER_MISSING_FIELDS` 3/111, `COMPOSER_COUNTRY_MISMATCH` 0/11); 605 distinct raw player tags across 55,223 file records (exact); 1,611 composers carrying a non-zero `csdb_id` (exact — a different, correctly-distinct denominator from the 1,608 enrichment count above).
- **No exposed secrets** in tracked text files: README/CLAUDE/TODO/docs/knowledge/data JSON/`output/index.html`/`deepsid_dl/sidid.nfo`, plus `git log --all -p` over `.env`/`.mcp.json`/`config.json` → 0 matches for credential patterns. The one pattern hit was inside the previous `DOC-AUDIT.md` itself, quoting the scan command as documentation text, not a real secret.
- **No dead file references** in README/CLAUDE.md/docs — every backticked script/doc path resolves; `data/composer-list-full.json` is documented as a not-yet-generated output path, not a currently-required file.
- **No case-sensitivity/broken markdown links** in README/CLAUDE.md/docs.
- **No boilerplate placeholders** (`YOUR_*`, `<... here>`, unfinished TODOs) in any in-scope doc.
- **CI workflow exists** at `.github/workflows/ci.yml`, matching the README badge.
- **Rate-limit value (400ms)** confirmed identical in both `deepsid-client.js` and `csdb-client.js`, matching every doc's claim.
- **`fetch-composers.js --only`** flag and **`build-seed-from-hvsc.js`** both exist, matching README's usage examples.
- **`.gitignore`** matches `SOURCES.md`'s "committed / gitignored" table file-by-file.

---

## Unverifiable

| Claim | Location | Why unverifiable |
|---|---|---|
| DeepSID's `?file=`/`?folder=` endpoints still down | `README.md:321-324`, `CLAUDE.md:26-28` | Live third-party API status; not checked, to avoid putting load on a free single-maintainer service. |
| "confirmed changelog activity through mid-2026" for DeepSID's own maintenance | `README.md:346` | External, dynamic, not re-checked this session. |
| CLAUDE.md's "496 distinct [uncurated] tags, 17,538 files, ~32%" and the SIDId-enrichment figures ("247 of 496... 45,300... 82%") | `CLAUDE.md:80-132` | Computed by client-side JS (`deriveSyntheticPlayers()`/`matchPlayer()`/`lookupSidid()`) against `window.SID_DATA` at page load; reproducing it exactly requires re-implementing that fuzzy-matching logic. The underlying source data hasn't changed since these were last computed, so they are plausibly still accurate, but were not independently reproduced this session. |
| Insights-tab aggregate stats (Scene Groups 737/1,817, coder-rate-by-country, group mobility, era-tool-dominance) | `CLAUDE.md:175-206` | Same client-side-only computation caveat as above. |
| `~99.93%`/`~99.9%` Laxity NewPlayer frame-accuracy figure | `CLAUDE.md:347`, `docs/SID-HISTORY.md:249,422,439`, `SIDM2-INTEGRATION.md:26` | Requires running the SIDM2 disassembly/trace pipeline — long-running and outside this audit's scope; the project's own `sid-card-falsify` agent is the right tool for this. |

---

## Blind spots

- **9 ZIP archives** under `deepsid_dl/arkiv/` (~48 MB) — not opened for the secrets scan.
- **`deepsid_dl/DeepSID_Database/*.sql`** (~28 MB mysqldump text) — not scanned line-by-line.
- All of the above are gitignored, so none of it is published by this repo regardless.

---

## Structural observations

**The fix round held.** Every one of the 8 previously-reported defects is genuinely fixed, not just reworded — each was re-verified against current ground truth rather than against the prior report's text.

**The new finding is the same root cause as before.** The 1,608-vs-1,609 drift is the identical pattern the prior report already diagnosed and CLAUDE.md now has a note about (`CLAUDE.md:309-317`): a number copied by hand from a script's console output at the time it was run, now one composer off from a re-run. The fragility note exists; it just hasn't been applied retroactively to this specific figure yet.

**A second, independent audit pass exists in this repo's git history and is worth being aware of.** Commit `6193e1f` on `master` is a full `DOC-AUDIT.md` from an audit against the pre-fix commit `c02d7a9`, committed directly rather than left as a local artifact. This report's introduction reconciles the two; no further action needed beyond this overwrite, but it's worth knowing two audit passes ran back-to-back on the same day if that wasn't expected.

---

## Recommended order

Both findings from this run were applied in the same session:

1. **P1-1** — done: documented the required `.mcp.json` edit in `docs/SIDM2-INTEGRATION.md`.
2. **P2-1** — done: corrected all four 1,609 → 1,608 copies.

<!-- Regenerated on each audit. Git holds the history. -->
