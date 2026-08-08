# Documentation Audit — sid-reference-project

**Audited:** 2026-08-08 · **Commit:** `6fd39f9` · **Branch:** `master`
**Documents read:** 13 files, ~198 KB — all read in full (3 directly, 10 via delegated extraction with central adjudication)
**Findings:** 0 P0 · 0 P1 · 2 P2 · 0 P3
**Confidence:** 2 HIGH · 0 MEDIUM · 0 LOW (LOW is never reported)

Working tree was clean (`git status --porcelain` → 0 lines) at audit time — findings are reproducible from the commit above.

---

## Ground truth

Established by execution or source inspection before documentation was read.

| Fact | Actual value | Source | Confidence |
|---|---|---|---|
| Version | 1.1.0 | `package.json` | HIGH |
| Node floor | `>=18` | `package.json` engines | HIGH |
| Dependencies | 1 (`fast-xml-parser ^5.9.3`) | `package.json` | HIGH |
| Automated tests | none present | 4 independent zero-result patterns + `find`, positive-controlled | HIGH |
| Branch | `master` | `git branch --show-current` | HIGH |
| Under version control | yes, clean tree | `git rev-parse` / `git status --porcelain` | HIGH |
| Knowledge cards | 520 live cards (216 verified / 21 in-progress / 283 stub) | `node knowledge/build-graph.js`, fresh rebuild | HIGH |
| Graph edges/clusters | 56 edges, 19 connected clusters (58 linked cards) | same fresh rebuild | HIGH |

---

## Findings

### P2-1 · `docs/SID-HISTORY.md`'s edge/cluster count is stale, and nothing catches it

**Locations:** `docs/SID-HISTORY.md:48`
**Claim:** "There are currently **53 such edges across 18 connected clusters**."
**Verified by:** `node knowledge/build-graph.js` (fresh rebuild, run directly)
**Actual:** 56 edges (23 `shares_routine_with`, 21 `derives_from`, 9 `successor_of`, 3 `same_effect_encoding_as`) across 19 connected clusters, 58 linked cards.
**Evidence:** Build output: `edges: 56 (...)  connected clusters: 19 (over 58 linked cards)`.
**Confidence:** HIGH — the number was produced by executing the actual generator, not inferred.
**Consequence:** Low direct harm (no reader takes a destructive action on this number), but it undercuts the document's own opening claim that "every factual anchor... is traceable to a specific player card, a card lineage `edges[]` relationship" — a stale count in the one summary line that *is* directly checkable against the graph weakens trust in the surrounding narrative claims, which mostly aren't independently checkable.
**Fix:** Regenerate the line from `knowledge/graph.json` (a one-line template substitution would do), or add it to the existing pre-commit drift-guard pattern this project already uses successfully for `knowledge/COVERAGE.md` and the `docs/SIDM2-INTEGRATION.md` worklist table (see Structural observations below — this is the one generated-adjacent number in the repo *without* that protection).

### P2-2 · `scripts/dev/rewrap.js` referenced, never existed

**Locations:** `scripts/dev/README.md:361`
**Claim:** "(`rewrap.js` deliberately preserves the original load address, which is right for a same-address rebuild and wrong here...)"
**Verified by:** `find . -iname 'rewrap*'` (repo-wide, archive/node_modules excluded) → no match beyond `rewrap_reloc.js`; `git log --all --oneline -- scripts/dev/rewrap.js` → empty (never committed, not a rename).
**Actual:** No file of this name exists on disk or anywhere in git history. Only `scripts/dev/rewrap_reloc.js` exists.
**Confidence:** HIGH — both the filesystem fallback and the full git-history check came back empty.
**Consequence:** Low — this is a parenthetical aside contrasting two tools' behavior, not a documented command in a code fence, so a reader wouldn't try to run it and fail. Reads as describing a script that either existed transiently in an untracked scratchpad and was never committed, or was planned and not built.
**Fix:** Either remove the parenthetical (if `rewrap.js` never existed as a real tool) or rewrite it to describe the *concept* of a same-address rebuild without naming a nonexistent file.

---

## Duplicated facts

| Fact | Locations | Currently agree? | Canonical source should be |
|---|---|---|---|
| Composer count (~1,895 seed vs 1,902 cached) | `README.md`, `TODO.md`, `CLAUDE.md`, `docs/SOURCES.md`, `docs/IMPLEMENTATION-NOTES.md` | Yes — both figures independently correct (1895 = `data/composer-list.json` entries, 1902 = `data/composers/*.json` cache files) | Neither — **CLAUDE.md's own "Known TODOs" section already documents that these are legitimately different denominators** and says not to harmonize them. Quoting it back rather than re-flagging it. |
| Player database size (129 curated) | `README.md`, `SOURCES.md`, `SIDM2-INTEGRATION.md`, `GAPS_REPORT.md` header | Yes — all four independently confirmed against `data/players.json` | `data/players.json`'s own `count` field, which they already agree with |

No drifted duplication found — the project's habit of citing the same fact from several docs held up under checking in every instance sampled.

---

## Verified clean

Checked and correct — recorded so audit coverage is legible, not only its failures.

- **Existing doc-drift guards, run live**: `check-docs-index.js` (0 failures, 6 `docs/*.md` checked, 3 referenced), `gen-coverage.js --check` (up to date), `gen-sidm2-worklist.js --check` (up to date), `check-cards.js` (520 cards, 0 broken prose links) — all four pass, all four are wired into `.githooks/pre-commit` and (the first) into `.github/workflows/ci.yml`.
- **README.md architecture tree**: all 20 named files/directories exist — verified via direct `[ -e ]` checks, not pattern search.
- **Composer/file counts**: `data/composer-list.json` = exactly 1895 entries; `data/composers/*.json` = exactly 1902 files; `output/index.html` = 10.7531 MB against a claimed "~10.75MB" — all exact or effectively exact matches.
- **CSDb enrichment count**: claimed "1,608 of 1,902 (85%)"; live count is 1,610 (1,611 raw cache files, 1 `isGroup`, confirmed via the code's own `isGroup` field in `build-html.js`, not guessed). A 2-file drift, but the doc explicitly defers to "`npm run build`'s own console output is the current figure" as the authoritative source rather than asserting the number as fixed — honest hedging, not reported as a finding.
- **`no automated tests`** (README.md's Known Limitations): confirmed via 4 independent zero-result patterns (`"test"` script, jest/mocha/vitest/tape/ava references, `assert(`/`describe(`/`it(` usage, `find -iname 'test*.js'`), with `find` itself proven functional via a positive control (found `CLAUDE.md` at the same call site).
- **TODO.md's 2 open items**, both re-verified against live generated data, not just re-quoted: `import_from` populated on exactly 6 of 129 players (`data/players.json`); gap-suggestion coverage exactly 97 of 240 (`PLAYER_MISSING_FIELDS` 3/111, `COMPOSER_MISSING_COUNTRY` 88/110, `COMPOSER_COUNTRY_MISMATCH` 0/11) against `data/gaps-report.json`.
- **`docs/GAPS_REPORT.md` header**: "Composers scanned: 1902 / Player entries scanned: 129 / Total gaps found: 240" — matches `data/gaps-report.json` exactly, including the same 111/8/110/11 per-type breakdown.
- **`docs/SOURCES.md`/`docs/DEEPSID-API.md`**: rate-limit claim ("1 request per 400ms" for both DeepSID and CSDb clients) confirmed via `RATE_LIMIT_MS = 400` in both `scripts/lib/deepsid-client.js` and `scripts/lib/csdb-client.js`; `apiGet()`'s error-throwing behavior confirmed by reading the function; "only `data/composer-list.json` is committed" confirmed via `git ls-files data/` (returns exactly that file + a `.gitkeep`).
- **`docs/IMPLEMENTATION-NOTES.md`** numeric claims spot-checked against live data: "66 entries with a playback-technique comment" (`data/sidid.json`, exact match); "244 releases fetched, 226 with credits" (`data/csdb/players.json`, exact match on both numbers); "122 curated... players have [a screenshot]" (exact match, computed by cross-referencing `data/players.json` against `data/csdb/players.json`'s `screenshot` field, not just counting release files).
- **`docs/SID-HISTORY.md`'s `[[card-id]]` links**: 82 raw bracket matches, 3 were false positives (prose describing the `[[bracketed]]`-link convention itself, confirmed by reading each match in context) — the remaining 79 unique card-id references all resolve to a real file under `knowledge/players/`.
- **`docs/SID-HISTORY.md`'s "runtime now `verified`" claims**: cross-checked 24 named cards' actual `status` field against the narrative — 23 matched on the first pass; the 24th (`omegasupreme-digi`) initially looked like a mismatch until re-reading the sentence showed the verified claim was scoped to a different card in the same cluster (`digitalizer`), which does check out. All resolved correctly; no false status claims found.
- **Secrets scan**: repo-wide pattern run, one hit — the *previous* audit report's own prose describing its methodology, not a real credential. Archives/binaries that text search can't see inside (`.tokensave/tokensave.db`, 9 zip files under `deepsid_dl/arkiv/` and `scratchpad/`) were enumerated and confirmed **untracked** by git (`git ls-files --error-unmatch` fails on all of them) — so the class-13 "gitignored file archived into a tracked bundle" risk doesn't apply here; nothing among them is committed.
- **Boilerplate placeholders / machine-specific paths**: zero hits across all 13 in-scope files for both patterns.

---

## Unverifiable

| Claim | Location | Why unverifiable |
|---|---|---|
| "122 curated + 95 inferred players currently have [a screenshot]" — the 95-inferred half | `docs/IMPLEMENTATION-NOTES.md:145` | Inferred (synthetic) players aren't persisted in `data/players.json` — they're computed at build time by `build-html.js` from raw file tags, cross-referenced through SIDId. Reproducing the exact count would mean either tracing that computation through the source by hand or running `npm run build`, which this audit avoids per its own no-side-effect-commands rule. The curated half (122) was independently confirmed exact. |
| Various `docs/DEEPSID-API.md` response-shape claims ("24-field shape", "~40-field objects", `"subfolders": 1850`) | `docs/DEEPSID-API.md:84, 173, 116` | These describe live API response shapes from example captures; verifying them would require a live network call to DeepSID's API, which this audit does not perform (no side-effect / rate-limited-API calls). |

---

## Learnings

### Near-misses — checks that nearly produced a false finding

| Expected | What actually happened | Why the check failed | Belongs in |
|---|---|---|---|
| `omegasupreme-digi`'s status ("in-progress") contradicts `SID-HISTORY.md`'s "runtime is now `verified`" claim near it | The verified claim was grammatically scoped to a *different* card (`digitalizer`) named earlier in the same sentence — `omegasupreme-digi` was just a co-listed cluster member, not the claim's subject | A batch-style extraction that maps "card id X appears near the word verified" to "doc claims X is verified" is too coarse for prose with multiple card-ids per sentence and non-trivial scoping. Re-reading the exact sentence in context caught it before it became a finding. | `references/confidence.md` — this is the same class of error the absence protocol already warns about (inspect matches before concluding), but for a *presence* claim with ambiguous scope rather than an absence claim. |
| `rg`/ripgrep available via the Bash tool in this environment | `rg` was not on PATH in the Bash tool's shell (routed through an `rtk` wrapper that failed to resolve it); the dedicated `Grep` tool worked fine with identical patterns | Environment-specific: this session's Bash tool wraps commands through `rtk`, which doesn't always have `rg` resolvable, even though the dedicated Grep tool (which doesn't go through that wrapper) does | `references/verification.md` — worth a note that when `rg` fails via Bash with a wrapper/PATH error, retry via the dedicated Grep tool before concluding a pattern found nothing. |

### Environment notes

| Observed | Consequence | Belongs in |
|---|---|---|
| This session's shell (`rtk`-wrapped Bash) prints a "No hook installed" notice on every invocation and occasionally fails to resolve `rg`/`jq` from PATH even when a plain shell would find them | No missed findings this run (caught by switching to the dedicated Grep tool and to `node -e` for JSON work), but worth flagging for future audits in this same environment | `references/verification.md` |

### Rule gaps

None hit this run that the existing references didn't already cover.

### Cross-project signal

**This repo is itself a strong data point for drift-catalog class 14** (a doc-drift guard is the strongest predictor of clean docs). It ships *three* generated-file guards (`check-docs-index.js`, `gen-coverage.js --check`, `gen-sidm2-worklist.js --check`) plus a card-integrity guard (`check-cards.js`), all wired into both `.githooks/pre-commit` and (partially) CI — and the sweep across 13 documents, several with dozens of specific numeric claims, found exactly **one** stale metric (the SID-HISTORY.md edge count) and **one** dead file reference, both P2, zero P0/P1. The one stale number sits in the *one* generated-adjacent document (`docs/SID-HISTORY.md`) that has no equivalent `--check` gate — consistent with, not just anecdotally supporting, the existing class-14 hypothesis. Worth recording as another point in `runs.jsonl`'s guard-correlation dataset.

> No table above beyond the two rows filled is empty by omission — the Rule gaps section is genuinely empty this run; every judgment call was already covered by an existing reference.

---

## Structural observations

- **`TODO.md` is 20 `[x]` items to 2 `[ ]` items (10:1)**, which would trigger class 11's "outnumbered 5:1" bloat threshold on a literal reading — but the file's own framing ("Improvement ideas identified while building out... not a commitment list") and content (each closed item carries genuine discovery narrative — bugs found, methodology decisions, real numbers from the pass that closed it) make it function as a project changelog/discovery-log rather than a stale wishlist. Not reported as a finding; noting the shape in case the file grows large enough that splitting the closed-item history into a separate `CHANGELOG.md` becomes worth doing on its own merits (navigability, not correctness).
- **`docs/SID-HISTORY.md` is the only substantially narrative (as opposed to structurally generated) document in scope**, and it's also the only one carrying un-gated numeric claims about the knowledge graph. The rest of the project's generated-content discipline (three separate `--check` gates) doesn't yet reach it. See P2-1 and the cross-project signal above.

---

## Recommended order

1. Add `docs/SID-HISTORY.md`'s edge/cluster summary line to the existing pre-commit drift-guard pattern (or regenerate it from `knowledge/graph.json` directly) — closes the one gap in an otherwise well-guarded project (P2-1).
2. Fix or remove the `rewrap.js` reference in `scripts/dev/README.md:361` (P2-2).
3. No P0/P1 action required this run.

<!-- Regenerated on each audit. Git holds the history. -->
