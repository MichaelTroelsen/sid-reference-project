# Documentation Audit — sid-reference-project

**Audited:** 2026-07-30 · **Commit:** `424f72b` · **Branch:** master
**Working tree:** clean at audit time (`git status --porcelain` → 0 lines at `424f72b`), so **every finding below is reproducible from that commit**. The fixes were then applied in the same session, so the tree is no longer clean as you read this — to reproduce a finding, check out `424f72b` first.
**Documents read:** 14 prose files (~180 KB) read in full; 2 generated files (`docs/GAPS_REPORT.md`, `knowledge/COVERAGE.md`) spot-verified against their generators rather than read line-by-line; 521 knowledge cards indexed only (see Scope).
**Findings:** 0 P0 · 1 P1 · 4 P2 · 1 P3
**Confidence:** 6 HIGH · 0 MEDIUM · 0 LOW (LOW is never reported)
**Status:** all 6 fixed in this session; see "Applied" per finding.

**Disclosure — this run audited its own session's work.** The same session that ran this audit had, minutes earlier, split `CLAUDE.md` (379 → 162 lines) into a new `docs/IMPLEMENTATION-NOTES.md`, and committed `tools/delegate.py`. Finding **P2-2 is a defect this session introduced.** It is reported rather than quietly fixed because an audit that exempts its own edits is not an audit.

---

## Scope — what was and was not read

**Read in full** (14 files): `README.md` (394 lines), `CLAUDE.md` (162), `TODO.md` (320), `docs/SID-HISTORY.md` (561), `docs/SIDM2-INTEGRATION.md` (300), `docs/SOURCES.md` (133), `docs/DEEPSID-API.md` (222), `docs/IMPLEMENTATION-NOTES.md` (293), `scripts/dev/README.md` (243), `knowledge/README.md` (66), `knowledge/EXTRACTION-TEMPLATE.md` (97), `knowledge/playbooks/disassemble-a-player.md` (79), `knowledge/players/reconstructions/README.md` (30).

Reading of 9 of those was delegated to three cheap-model extraction readers (transcription only, verification explicitly forbidden); every claim they returned was re-checked centrally against the filesystem before it could become a finding. All three reported reaching each file's true final line.

**Generated, verified against generator not prose:** `docs/GAPS_REPORT.md` (header stats cross-checked against `data/gaps-report.json`), `knowledge/COVERAGE.md`.

**Indexed, not read:** `knowledge/players/*.md` — 521 files. Count verified and cross-referenced numerically against `graph.json`, but their asserted disassembly facts were not read card-by-card; that is the remit of this project's own `sid-card-falsify` agent (`.claude/agents/`), not a docs-vs-code audit.

**Out of scope:** `.claude/worktrees/agent-*/` (two stale agent worktrees holding pre-split copies of `CLAUDE.md`/`README.md`/`TODO.md`/`DOC-AUDIT.md`; excluded via `.git/info/exclude:11`, never published), `docs/legacy/sid_reference.html` (explicitly frozen, per README).

---

## Ground truth

Established by execution or source inspection **before** any prose was read.

| Fact | Actual value | Source | Confidence |
|---|---|---|---|
| Version | 1.1.0 | `package.json` | HIGH |
| Dependencies | 1 runtime (`fast-xml-parser`), 0 dev | `package.json` | HIGH |
| Node floor | `>=18` | `package.json` `engines` | HIGH |
| Branch / remote | `master` / `MichaelTroelsen/sid-reference-project` (public) | `git` | HIGH |
| `npm run all` chain | 7 steps (`fetch:all`×5 → `gaps` → `build`) | `package.json` `scripts` | HIGH |
| Automated tests | none; no test script, no test files | `package.json`, `find` | HIGH |
| **Knowledge cards** | **520 real cards** (154 verified · 83 in-progress · 283 stub) **+ 1 `_template.md`** = 521 files | `build-graph.js` vs `ls` | HIGH |
| Graph | 520 nodes, **55 edges**, **19 clusters** (size>1) | `graph.json` + union-find | HIGH |
| Curated players | 129 | `data/players.json` `.count` | HIGH |
| `import_from` populated | 6 of 129 | scan of `data/players.json` | HIGH |
| Composer seed / cached | 1,895 / 1,902 | `data/composer-list.json`, `ls data/composers/*.json` | HIGH |
| **Total file records** | **55,223** | sum of `folder[]` across all 1,902 caches | HIGH |
| Distinct raw player tags | 605 | scan of all `folder[]` records | HIGH |
| Tagged files (coverage denominator) | 54,608 | `knowledge/COVERAGE.md` | HIGH |
| CSDb-enriched composers | 1,608 of 1,902 (1,611 have a `csdb_id`; 1 group + 2 no-handle skipped) | `summarizeCsdb()` logic replayed over `data/csdb/` | HIGH |
| Gaps / with suggestion | 240 / 97 | `data/gaps-report.json` | HIGH |
| Generated page size | 11,275,475 bytes ≈ 10.75 MB | `ls -l output/index.html` | HIGH |
| Rate limit | 400 ms in both clients | `deepsid-client.js:20`, `csdb-client.js:33` | HIGH |
| Tabs in generated page | 9 total, 7 beyond Composers/Gaps | `TABS` array, `index.html.template:237` | HIGH |

Note the card-count trap: `ls knowledge/players/*.md | wc -l` returns **521** because `_template.md:18` carries `"status": "stub"`; `build-graph.js:74` filters it out, so every generated figure says **520 / 283 stub**. Both numbers are correct for their own denominator. Prefer `node knowledge/build-graph.js`.

---

## Findings

### P1-1 · An agent-facing doc documents a command that silently returns no data (`rg -h`)

**Locations:** `docs/SIDM2-INTEGRATION.md:17`
**Claim:** ``rg -h '"status"' knowledge/players/*.md | sort | uniq -c``
**Context:** sits inside the section headed `## Current state (2026-07-18) — read this first`, offered as *the* way to get the verified/in-progress/stub breakdown.
**Verified by:** executing it, in this repo, this session.
**Actual:** In ripgrep, `-h` is `--help`, not `--no-filename` (that is `-I`). The command prints ripgrep's help text, ignores the pattern and the file list entirely, and **exits 0**:

```
$ rg -h '"status"' knowledge/players/*.md | head -4
ripgrep 14.1.1 (rev f6d0fcd24a)
Andrew Gallant <jamslam@gmail.com>

ripgrep (rg) recursively searches the current directory for lines matching
$ echo $?
0
```

The working form returns the real breakdown:
```
$ rg -I '"status"' knowledge/players/*.md | sed 's/.*: *"//; s/".*//' | sort | uniq -c
     83 in-progress
    284 stub
    154 verified
```

**Confidence:** HIGH on the defect (executed, output pasted above). HIGH on it having already fired — see below.
**Consequence:** The failure is silent and exit-code-clean, so it reads as success. This is not hypothetical: **the previous `DOC-AUDIT.md:57` cites this exact command as its verification method** for the card-status split, and the numbers it recorded — `511 (7 verified · 194 in-progress · 311 stub)` — do not sum to 511 (7+194+311 = 512). A verification method that cannot produce data produced an internally inconsistent ground-truth row in a prior audit of this repo.
**Fix:** change `-h` to `-I` at `docs/SIDM2-INTEGRATION.md:17`. Note the same doc already models the better pattern 10 lines below (`:24` — "Run `node knowledge/build-graph.js` for the live figure"); pointing at `build-graph.js` instead of any `rg` incantation would remove the fragility rather than relocate it.
**Applied:** replaced the `rg` incantation with `node knowledge/build-graph.js` (the stronger of the two fixes — removes the fragile shell pipeline rather than correcting one flag in it). Verified no `rg -h` remains in any doc.

---

### P2-1 · `docs/SID-HISTORY.md`'s knowledge-base statistics are hand-maintained and have drifted

**Locations:** `docs/SID-HISTORY.md:47`, `docs/SID-HISTORY.md:72`
**Verified by:** `graph.json` node/edge counts plus a union-find over `edges[]` for cluster count; card statuses via `rg -I`.

| Location | Claim (verbatim) | Actual | Verdict |
|---|---|---|---|
| `:47` | "There are currently **51 such edges across 19 connected clusters**" | 55 edges, 19 clusters | edges stale by 4; cluster count correct |
| `:72` | "**six of the whole knowledge base's 31 `verified` cards belong to it**" | 154 verified | stale by 123 (~5×) |

**Confidence:** HIGH — both derived from `knowledge/graph.json`, regenerated this session; cluster count independently recomputed.
**Consequence:** `:72` is the load-bearing one. A reader is told the knowledge base has 31 verified cards when it has 154, and the sentence's rhetorical point ("this era is the knowledge base's most solid ground: six of 31") inverts once the denominator is 154 — six of 154 is no longer a claim of concentration. The `:47` edge count is cosmetic.
**Not a finding, for contrast:** `docs/SIDM2-INTEGRATION.md:23-25` carries the *same* statistic and is correct behaviour — it is explicitly dated ("As of 2026-07-25"), internally consistent (138+96+286 = 520), and appends "Run `node knowledge/build-graph.js` for the live figure rather than trusting any number written here." That is honest hedging and was not reported.
**Fix:** Either date the two figures in `SID-HISTORY.md` the way `SIDM2-INTEGRATION.md:23-25` already does, or drop the absolute denominator at `:72` and keep the qualitative claim. Prefer the second — the sentence does not need the total.
**Applied:** `:47` corrected to 55 edges **and** given a pointer to `node knowledge/build-graph.js` so it self-invalidates next time; `:72` reworded to "six of its earliest `verified` cards", dropping the stale 31 denominator entirely — the sentence's point survives without a total that has to be maintained.
**Framing:** the project already knows this exact failure mode. `knowledge/COVERAGE.md:3` documents it about itself, verbatim: *"This file rotted badly once: it was written when the KB had 13 cards and still claimed 531 uncarded families long after 200 cards existed."* `SID-HISTORY.md` is now the only knowledge-base-statistics surface with neither a generator nor a date.

---

### P2-2 · `README.md`'s architecture tree omits `docs/IMPLEMENTATION-NOTES.md` — *introduced by this session*

**Locations:** `README.md:116-127` (the `docs/` block)
**Verified by:** reading the block; `grep -rn "IMPLEMENTATION-NOTES" --include=*.md`
**Actual:** The tree lists `GAPS_REPORT.md`, `SIDM2-INTEGRATION.md`, `SID-HISTORY.md`, `SOURCES.md`, `DEEPSID-API.md` and `legacy/` — but not `IMPLEMENTATION-NOTES.md`, which at 17,265 bytes is the second-largest file in `docs/`. It is referenced 8 times from `CLAUDE.md` (`:7, :36, :40, :58, :68, :72, :80, :98`) and from no other document.
**Confidence:** HIGH — filesystem and grep.
**Consequence:** A human entering through `README.md` cannot discover the file; only an agent reading `CLAUDE.md` will. Partially self-correcting, since `CLAUDE.md`'s pointers all resolve.
**Fix:** add one line to `README.md`'s `docs/` block.
**Applied:** added, with a one-line description of what the file is for and why to read it selectively.
**Recurrence, not a new class:** the previous audit filed exactly this defect as **P2-3** ("README architecture tree omitted `knowledge/`, `scripts/dev/`, `SID-HISTORY.md`, `SOURCES.md`") and it was fixed. It reappeared within one session of a new doc being added — evidence that the tree is a hand-maintained index with no guard, not that the earlier fix was wrong.

---

### P2-3 · `TODO.md` contradicts itself on the total file count

**Locations:** `TODO.md:191` (wrong) vs `TODO.md:70` and `TODO.md:223` (right)
**Claim:** `:191` — "of all 55,225 files."
**Verified by:** summing `folder[]` lengths across all 1,902 files in `data/composers/`
**Actual:** **55,223.** Confirmed independently by every other copy in the repo: `TODO.md:70` ("55,223"), `TODO.md:223` ("55,223"), `CLAUDE.md:109` ("55,223"), `docs/SID-HISTORY.md:491` ("55,223"), `docs/IMPLEMENTATION-NOTES.md:128` ("55,223").
**Confidence:** HIGH — counted from source data; five independent doc copies agree with the count and only this one does not.
**Consequence:** Minimal — the surrounding claim ("top 50 composers made 25% of all files") does not turn on ±2 files. Reported because severity rules treat one file disagreeing with itself on a single metric as its own signal: it proves the number is not maintained.
**Fix:** `55,225` → `55,223` at `TODO.md:191`.
**Applied:** corrected; verified `55,225` now appears in no doc.

---

### P2-4 · `scripts/dev/README.md` says the pre-commit hook gates one generator; it gates two

**Locations:** `scripts/dev/README.md:6`
**Claim:** "**One exception:** `gen-sidm2-worklist.js --check` runs automatically from `.githooks/pre-commit`"
**Verified by:** reading `.githooks/pre-commit` in full
**Actual:** The hook runs **two** checks, not one:

| Hook line | Check |
|---|---|
| `.githooks/pre-commit:51` | `node scripts/dev/gen-coverage.js --check` (guards `knowledge/COVERAGE.md`) |
| `.githooks/pre-commit:63` | `node scripts/dev/gen-sidm2-worklist.js --check` (guards the `SIDM2-INTEGRATION.md` table) |

The hook's own header agrees with the code and against the README — `.githooks/pre-commit:4-8` reads "Currently guards two, both of which are marked "do not hand-edit" and both of which have rotted in practice", and names both files.
**Confidence:** HIGH — three sources read directly; the code and its own header agree, so the README is the outlier.
**Consequence:** A contributor reading only `scripts/dev/README.md` doesn't know `COVERAGE.md` is gated, and may not understand why a card-only commit fails on a coverage check. Mild, but it is the *documentation of the project's own drift guard* that has drifted.
**Fix:** name both generators at `scripts/dev/README.md:6`.
**Applied:** rewritten as "Two exceptions", naming both generators and the file each guards. Also fixed two consequential inaccuracies in the same paragraph exposed by the plural: the trigger conditions differ between the two checks (the old text gave only the worklist's set), and the singular "It is a hook rather than a CI step" no longer agreed.

---

### P3-1 · `scripts/dev/` holds 10 scripts; its README documents 7

**Locations:** `scripts/dev/README.md`
**Verified by:** `ls scripts/dev/*.js` against a per-script `grep -c` of the README (each of the three zero-results confirmed individually, not inferred from one pattern)
**Actual:** Documented: `find-uncarded-tags.js`, `find-connections.js`, `find-group-tools.js`, `find-eras.js`, `gen-sidm2-worklist.js`, `check-tdz-sync.js`, `vsid-trace.js`. Undocumented in that README: `check-cards.js`, `coverage.js`, `gen-coverage.js`.
**Confidence:** HIGH on the omission. Deliberately **not** escalated: the README opens "Ad-hoc tooling for reverse-engineering work" and never claims to be an exhaustive index, so this is a structural observation rather than a false claim.
**Mitigating:** `gen-coverage.js` is not actually undiscoverable — it self-documents inside its own output at `knowledge/COVERAGE.md:3` ("Generated by `node scripts/dev/gen-coverage.js` … **Do not hand-edit**"), which is the best available location.

**Correction, recorded rather than quietly dropped.** A first pass of this finding speculated that `coverage.js` (86 lines) was a superseded predecessor of `gen-coverage.js` (295 lines) and suggested deleting it. **That was wrong, and checking disproved it.** They are distinct tools:

- `scripts/dev/coverage.js` — *file-level* carding coverage: what fraction of tagged files resolve to a card, plus the **uncarded-tag ranking that drives the carding backlog**.
- `scripts/dev/gen-coverage.js` — generates `knowledge/COVERAGE.md`, the *family-level* uncarded list.

`coverage.js` is live and load-bearing: five knowledge cards cite it by path, including `basic-program.md:41,63` (which exists *because* the tag topped `coverage.js`'s ranking for ~5 sessions) and three cards that correctly caveat its `/digi|sample|mixer/i` filename-regex grouping as a naming hint rather than a confirmed technique.

**This makes the omission slightly more substantive, not less:** a tool referenced by path in five cards, whose heuristics those cards explicitly reason about, is absent from its own directory's README.
**Fix:** add `check-cards.js` and `coverage.js` to `scripts/dev/README.md` — one line each, describing what `coverage.js` ranks and noting its grouping is a filename regex. Do **not** delete it.
**Applied:** both documented. `coverage.js`'s entry carries the two caveats the cards already record (aliases-keyed with no exclusion mechanism; the digi/sample grouping is a bare filename regex, not a flag read). `check-cards.js`'s entry states the three checks it does that `build-graph.js` does not, including that `build-graph.js` silently skips unparseable cards and still exits 0.

---

## Duplicated facts

| Fact | Locations | Currently agree? | Canonical source should be |
|---|---|---|---|
| Total file records (55,223) | `TODO.md:70,191,223`, `CLAUDE.md:109`, `SID-HISTORY.md:491`, `IMPLEMENTATION-NOTES.md:128` | **No** — `TODO.md:191` says 55,225 (P2-3) | a generated figure; `knowledge/COVERAGE.md` already carries the sibling 54,608 |
| Card status split (154/83/283) | `SIDM2-INTEGRATION.md:23` (dated), `:53` (generated), `SID-HISTORY.md:72` (undated, stale) | **No** — `SID-HISTORY.md:72` says 31 (P2-1) | `node knowledge/build-graph.js`; the `:53` generated block is the model |
| Composer/file counts by denominator (1,895 / 1,902 / 54,608 / 55,223) | 10+ locations across README/CLAUDE/TODO/docs | Yes — legitimately different denominators, documented as such at `CLAUDE.md:105-113` | unchanged; the existing fragility note is the right treatment |
| `docs/` file inventory | `README.md:116-127` only | **No** — omits `IMPLEMENTATION-NOTES.md` (P2-2) | generate the tree, or add a guard |

---

## Verified clean

Each entry came from a check confirmed to have executed.

- **No secrets** in tracked text files — pattern run repo-wide, then **positive-controlled** against a synthetic `api_key = "abcdefghij1234567890XYZ"` to prove the pattern can match (it did). Git history for `.env`/`.mcp.json`/`config.json` → 0 credential-pattern hits.
- **`tools/delegate.py` carries no hardcoded credentials** — checked specifically because this session committed and pushed it to a *public* repo. It reads keys only from `os.environ` (`:135`); `grep -nE 'sk-|nvapi-|=\s*"[A-Za-z0-9]{20,}"'` → no matches. The three provider keys live in the shell environment, not the repo.
- **No dead file references.** Every backticked path in all 14 docs resolved, using the basename-fallback method. Five apparent misses were adjudicated and are all correct-as-written: `SIDwinder.exe`, `sidm2-sid-trace.exe`, `vsid.exe`, `mcp-siddump/server.py` (external tools, outside the repo by design — the last documented at `SIDM2-INTEGRATION.md:227-230` as needing a per-clone edit) and `data/composer-list-full.json` (documented as a not-yet-generated *output* of `npm run seed:full`).
- **`npm run all` is 7 steps** as stated (`README.md:154-156`) — read from `package.json`.
- **CSDb enrichment: 1,608 of 1,902** — `README.md:381` and `TODO.md:97` both exact. Replayed `summarizeCsdb()`'s own skip logic (`isGroup` → null, missing `Handle` → null) over all 1,611 cache files: 1 group + 2 no-handle excluded. 1,608/1,902 = 84.5%, correctly stated as 85%.
- **Gap suggestion coverage: 97 of 240** — `TODO.md:305` exact, and every per-type breakdown matches: `COMPOSER_MISSING_COUNTRY` 88/110, `PLAYER_MISSING_FIELDS` 3/111, `COMPOSER_COUNTRY_MISMATCH` 0/11, plus `COMPOSER_NO_PROFILE` 6/8 (`TODO.md:39`'s "8" still exact).
- **`import_from` on 6 of 129 players** (`TODO.md:53`) — exact.
- **605 distinct raw player tags** (`TODO.md:261`) — exact, counted over all `folder[]` records.
- **Page size ~10.75 MB** (`README.md:359`, `CLAUDE.md:40`) — `output/index.html` is 11,275,475 bytes. Both also point the reader at `build-html.js`'s own printed size rather than resting on the figure.
- **Rate limit 400 ms in both clients** (`README.md:336`, `SOURCES.md:130`, `DEEPSID-API.md:219`) — `deepsid-client.js:20`, `csdb-client.js:33`.
- **Node 18+ / one runtime dependency** — matches `engines` and `dependencies` exactly.
- **`--only` flag exists** on `fetch-composers.js` (`README.md:214`) — 2 occurrences in the script.
- **`fmtNum()` helper exists** in the template, as `CLAUDE.md:74-78` requires.
- **7 tabs beyond Composers/Gaps** (`CLAUDE.md:69`) — `TABS` at `index.html.template:237` has 9 entries; 9−2 = 7, and the 7 named match the ids exactly.
- **`docs/legacy/sid_reference.html` exists** (131,658 bytes), as README describes.
- **"No automated tests" is still true** (`README.md:390`) — inverse checked: no test script in `package.json`, no test files. The `.githooks/pre-commit` gate and CI `build` check are not tests and are not described as such.
- **Prior audit's P1-1 fix holds** — the `.mcp.json` per-clone edit note is present at `SIDM2-INTEGRATION.md:227-230`.

---

## Unverifiable

| Claim | Location | Why unverifiable |
|---|---|---|
| The 496-inferred-player figures and SIDId enrichment stats (`247 of 496`, `~45,300`, `82%`) | `CLAUDE.md:52-60`, `IMPLEMENTATION-NOTES.md` | Computed client-side at page load by `deriveSyntheticPlayers()`/`matchPlayer()`/`lookupSidid()`. Reproducing them exactly requires re-implementing that fuzzy-matching chain; the underlying data is unchanged since they were computed. |
| Insights-tab aggregates (Scene Groups 737/1,817, coder-rate-by-country, group mobility, era dominance, "10 sections") | `CLAUDE.md:70-72`, `TODO.md:135-249` | Same client-side-only computation. Verifying would require running a build that rewrites `output/`, which this audit must not do. |
| `~99.93%` Laxity NewPlayer frame accuracy | `SID-HISTORY.md:256,463`, `SIDM2-INTEGRATION.md` | Requires running the SIDM2 disassembly/trace pipeline — long-running, side-effecting, and the remit of this project's own `sid-player-verify`/`sid-card-falsify` agents. |
| DeepSID's `?file=`/`?folder=` outage still ongoing | `README.md:321-324`, `CLAUDE.md:29` | Live third-party API state; not probed, to avoid load on a free single-maintainer service. |
| Per-card disassembly facts across 521 cards | `knowledge/players/*.md` | Out of scope by design — `sid-card-falsify` exists for this. |

---

## Learnings

### Near-misses — checks that nearly produced a false finding

| Expected | What actually happened | Why the check failed | Belongs in |
|---|---|---|---|
| `gen-coverage.js` is an undocumented generator for a file multiple docs treat as canonical — was ~1 step from filing it | It **is** documented, at `knowledge/COVERAGE.md:3`, inside its own output | Two patterns returned zero (`scripts/dev/README.md`; `package.json` scripts) because both encode a wrong assumption about *where* a generator gets documented. A generated file documenting its own regeneration command is the ideal location and the one place neither pattern looked. Absence-of-documentation claims need a repo-wide pass including the generated artifact itself. | `references/confidence.md` |
| `SIDM2-INTEGRATION.md:23`'s "138 verified / 96 in-progress / 286 stub" vs `:53`'s "154 / 83 / 283" looked like a same-file self-contradiction — the exact shape severity rules call a finding on its own | Not a finding: `:23` is explicitly dated, sums correctly (138+96+286=520), and closes with "Run `node knowledge/build-graph.js` for the live figure rather than trusting any number written here" | "Same metric, two values, one file" is a strong heuristic that inverts when one copy is *dated and self-invalidating*. A dated snapshot beside a live figure is version history, not drift. Check for a date and a pointer-to-generator before firing on the heuristic. | `references/severity.md` |
| `ls knowledge/players/*.md \| wc -l` = 521 vs `build-graph.js` = 520 read as a real off-by-one | Both correct: `_template.md:18` carries `"status": "stub"`, and `build-graph.js:74` filters it out by name | The template file is a *schema*, not a card, but it is schema-valid by construction — so any status-counting pattern picks it up. Counting artifacts that live in the same directory as data is a general trap; the generator's own filter is ground truth. | `references/confidence.md` |
| `scripts/dev/coverage.js` (86 lines) looked like a superseded predecessor of `gen-coverage.js` (295 lines) — nearly recommended deleting it | Live and load-bearing: distinct purpose (file-level ranking that drives the carding backlog vs. generating `COVERAGE.md`), cited by path in 5 knowledge cards | Similar name + smaller size + absent from the README is **not** evidence of deadness; it was three weak signals pointing the same way, which feels like corroboration but is one inference repeated. A "probably dead code" claim needs an inbound-reference search across *all* file types before it is even reportable — here the references were in `.md` cards, not in code, so a code-only search would also have missed them. Recommending a deletion is the highest-cost error class available to a docs audit. | `references/confidence.md` |

### Environment notes

| Observed | Consequence | Belongs in |
|---|---|---|
| In ripgrep, `-h` is `--help`, not `--no-filename` (`-I`). With a pattern and file list supplied, `rg -h PATTERN files` prints help, ignores everything, and **exits 0**. | Produced this audit's own first broken check, then turned out to be finding **P1-1** — the same flag error is committed in the repo, and demonstrably corrupted a prior audit's ground-truth row. A silent, exit-0 no-op is the worst failure shape for the "confirm the check executed" rule. | `references/confidence.md` |
| `grep -c pattern file` on zero matches prints `0` **and** exits 1, so `$(grep -c … \|\| echo 0)` emits `0\n0`. | Doubled every row of a per-script table; readable here, but would silently corrupt any arithmetic over the output. | `references/confidence.md` |
| The `rtk` shell wrapper intercepts `rg`/`grep` and intermittently failed (`Failed to resolve 'rg' via PATH` / `program not found`), killing 3 commands mid-audit. | Two verification steps returned nothing for wrapper reasons, not repo reasons — indistinguishable from "clean" without re-running. Fell back to the Grep tool. On a wrapped shell, a zero result must be re-confirmed through a second, unwrapped mechanism. | `references/integrity.md` |

### Rule gaps

| Situation | What the rules say | What was actually right | Belongs in |
|---|---|---|---|
| The audit's own session had, minutes earlier, restructured `CLAUDE.md` and created the file that became finding P2-2 | Silence — the references assume the auditor is independent of the audited work | Report it, name it as self-inflicted in the header and in the finding, and do not silently fix it mid-audit. Silent self-correction would have made the report describe a repo state that never existed and hidden a recurrence of a previously-fixed defect. | `references/integrity.md` |
| `README.md:390` "No automated tests" — a stated gap, and the repo has a pre-commit hook plus green CI | Class 4 says always check the inverse of a stated gap, and stale gap-notes in agent-facing docs are P0 | Correctly still true. A hook that gates a generated file's freshness and a CI `build` step are not tests, and no doc calls them tests. Checking the inverse must distinguish "a check exists" from "a test exists". | `references/drift-catalog.md` |

### Cross-project signal

- **The guard correlation held again, and now has a within-repo control.** `drift-catalog.md` class 14 predicts that machine-checked docs stay clean. This repo contains both arms: `docs/SIDM2-INTEGRATION.md`'s worklist table is generated and gated by `gen-sidm2-worklist.js --check` in `.githooks/pre-commit`, and `knowledge/COVERAGE.md` has a `--check` mode. **Neither produced a finding.** All four content findings landed in hand-maintained surfaces (`SID-HISTORY.md`, `README.md`'s tree, `TODO.md`, a hand-typed command). Same repo, same author, same week — the difference is the guard. Previous cross-project evidence compared *different* projects and was confounded by coverage; this is the cleaner comparison.
- **Findings per doc read: 6/14 = 0.43**, against this project's 0.75 in the prior sweep. Not directly comparable — that run read 12 docs at 2% coverage — but both runs put this repo in the low-findings band despite having no doc-drift guard for prose.
- **A written-but-uninstalled guard is a distinct, findable state, and probably common.** `scripts/dev/check-cards.js` exists, passes, and is described in its own header as a commit gate — but is not in `.githooks/pre-commit`, which gates only the other two generators. Class 14 tells auditors to look for a guard and run it; it does not say to check whether the guard is *wired in*. The two questions have different answers here, and only the second one predicts whether drift gets caught. Worth adding to the class-14 procedure: enumerate `--check`-capable scripts, then diff that set against what the hook/CI actually invokes.
- **A generated file that documents its own regeneration command in its own header** (`knowledge/COVERAGE.md:3`, including a note about the time it rotted) is the strongest anti-drift pattern seen in six audits. It survives the file being moved, read out of context, or found by grep. Worth recommending by default.

---

## Structural observations

**The findings sort cleanly by guard coverage, not by author care.** Every generated or machine-checked documentation surface in this repo passed. Every hand-maintained one that carries a number drifted. The project already knows this — `knowledge/COVERAGE.md:3` records its own past rot, `SIDM2-INTEGRATION.md:24` tells readers to trust `build-graph.js` over its own prose, and `CLAUDE.md:105-113` carries an explicit fragility note about hand-maintained counts. `docs/SID-HISTORY.md` is the one knowledge-base-statistics surface that got none of those three treatments, and it is where the largest drift (31 vs 154 verified) sits.

**Two findings are recurrences of previously-fixed defects, both within one session of a structural change.** P2-2 is literally the prior audit's P2-3, reappearing because a doc was added. This is the signature of a hand-maintained index: fixing an instance does not reduce the rate. The cheapest durable fix is a guard in the existing `.githooks/pre-commit` — assert that every `docs/*.md` appears in `README.md`'s tree — which is strictly less work than the audit that found it.

**The `rg -h` finding is worth more than its severity suggests.** It is a wrong-flag defect in one line of one doc, but it caused a measurable downstream error in a prior audit of this same repo, and it cost this audit its first check too. Commands committed into agent-facing docs get executed by agents that do not question an exit code of 0.

**There was a third guard, written and passing, that nothing ran — now fixed.** `scripts/dev/check-cards.js` checks the three things `build-graph.js` deliberately does not — JSON validity per card, count reconciliation, and broken prose `[[links]]` — and exits non-zero so it can gate a commit. It passed then and passes now. But `.githooks/pre-commit` invoked only `gen-coverage.js --check` and `gen-sidm2-worklist.js --check`; `check-cards.js` was not wired in, despite its header documenting the exact failure it was built for having already happened once (a dropped trailing comma in `oliver-kirwa.md`, surfacing only as "nodes: 199" against 200 files). This was the single highest-value item in the report — higher than any of the six findings, because those were cosmetic-to-moderate while this one hides malformed data. It is now wired into both the hook and CI, and verified with a negative test (see Recommended order #1).

**The general shape worth keeping:** a `--check`-capable script is not a guard until something invokes it. Auditing "does a guard exist and does it pass" is the wrong question; "what invokes it, and can that be bypassed" is the right one. This repo had three `--check`-capable scripts and two invocations.

---

## Recommended order

**All six findings were fixed in this session** (see "Applied" under each). What remains is structural:

1. ~~**Wire `check-cards.js` into `.githooks/pre-commit`**~~ — **DONE**, and also added to CI. Placed *before* the `data/composers/` guard, since card integrity needs no fetched data and so works on a fresh clone; the two generator checks still skip there as before. Also added to `.github/workflows/ci.yml` (running `build-graph.js` first, so count reconciliation works there too) — CI is the stronger half, because `--no-verify` bypasses a hook but not CI.

   **Verified by negative test, not by assumption.** A comma was deliberately dropped from `laxity-newplayer.md`'s json block:

   | Tool | Result |
   |---|---|
   | `check-cards.js` | **exit 1** — named the file, the parse error, and 11 cascading broken `[[laxity-newplayer]]` prose links |
   | `build-graph.js` | **exit 0** — `nodes: 519` against 520 cards, `edges: 54` (one lost), `verified` recounted as **153 instead of 154**, and the broken card's dependents relisted as "dangling edge targets (no card yet — next candidates)" |

   One correction to the framing in `check-cards.js`'s own header, which says `build-graph.js` "SILENTLY SKIPS" a bad card: it does print a `! laxity-newplayer.md: invalid JSON` warning line. The load-bearing part of the claim is right — exit 0, quieter counts, no gate — but it is not literally silent. Worth knowing, because the misleading part is not the missing warning; it is that a dropped card is re-presented as a *card that has not been written yet*, and that every derived statistic (including the `verified` count corrected in P2-1 above) shifts underneath you.

   The card was restored, `graph.json` regenerated, and both checks re-run clean (`520 cards checked, 520 ids, 0 broken prose links, 0 failure(s)`).
2. **Add a `README.md`-tree guard to the same hook** — assert every `docs/*.md` appears in the architecture tree. It would have caught P2-2 at commit time, and P2-2 is the second occurrence of that exact defect in two audits. Same mechanism, same file.
3. **Consider generating `SID-HISTORY.md`'s statistics** rather than hand-maintaining them, or continue the cheaper mitigation applied here (a pointer to `build-graph.js` beside each figure, so the number self-invalidates instead of silently rotting). Both P2-1 figures sat in the one knowledge-base surface with neither a generator nor a date.



<!-- Regenerated on each audit. Git holds the history. -->
