# TODO

Improvement ideas identified while building out CSDb/HVSC cross-referencing,
not yet implemented. Not a commitment list — pick off whichever's useful.

- [x] ~~Parse `STIL.txt` for a partial file listing.~~ Done, then
      largely superseded — `import-deepsid-dump.js` now gets ~55,000
      files with *real* `player` data (not just title/artist) for
      ~1,895 composers straight from DeepSID's own published database
      export, no live API needed. STIL.txt fallback still exists for
      anything outside the dump's coverage.
- [x] ~~Full composer coverage.~~ Done, via the DeepSID database export
      rather than `npm run seed:full` (which still depends on the
      broken `?folder=` endpoint) — see "The DeepSID database export"
      in README.md. ~1,895 real composers, up from the curated 56.
- [x] ~~Improve HVSC name matching~~ Partially done — fixed a real parsing
      bug affecting 181 of 1870 Musicians.txt entries (composers with 2+
      group memberships broke the handle/realname split; see git history)
      and added `findHvscLooseMatch` as a conservative fallback (only
      accepts an unambiguous single candidate — see `scripts/lib/hvsc.js`).
      Exact matches went from 16 to 23 of 56 curated composers just from
      the parsing fix. Still exact-string-only for the "HVSC verified"
      badge (intentional — that badge shouldn't claim unverified matches);
      accented-character normalization (e.g. "Hülsbeck" vs "Huelsbeck")
      is still unaddressed.
- [x] ~~Feed the Countries tab from the full HVSC list~~ Superseded by
      the DeepSID database export (see git history) — checked before
      implementing: `profile.country` now comes straight from DeepSID's
      own `composers.sql` (`buildProfile()` in
      `scripts/import-deepsid-dump.js`), not a live per-composer fetch,
      and already covers 1792 of 1903 composers (94%). Cross-checked the
      remaining 110 against `data/hvsc/musicians.json` by exact handle —
      only 5 gain a country that way, not worth adding a fallback for.
      HVSC's Musicians.txt is also the wrong source to switch to anyway:
      it's a community-maintained list of *all* sceners (crackers,
      graphicians, groups), not composers specifically, so aggregating
      it directly would count non-composers. The Countries tab's current
      DeepSID-sourced data is both more complete and more authoritative.
- [x] ~~Investigate the 8 `COMPOSER_NO_PROFILE` gaps~~ Checked each of
      the 8 (4-Mat, Clever Music, Conrad, Dane, Fun Fun, Glenn Gallefoss,
      Intensity, Randall) directly in `data/composers/*.json`: every one
      has real `folder` data (1 to 445 files), which proves the HVSC
      path being queried is genuinely correct — a wrong path would fetch
      zero files, not just an empty profile. `profile` is a literal empty
      array (`[]`, not an error or missing key) for all 8. These are
      confirmed genuine DeepSID gaps, safe to report upstream as-is; no
      path-mistake false positives found. (Note: `data/composer-list.json`
      does carry a stale path for a couple of these, e.g. "Fun Fun" as
      `/MUSICIANS/F/Fun_Fun/` vs the confirmed-correct
      `/MUSICIANS/T/Troelsen_Michael/` in the composer's own cache file —
      cosmetic only, since `find-gaps.js` reads the path from the
      per-composer cache file, not from `composer-list.json`.)
- [ ] **Resolve `import_from` cross-references properly.** Only 6 of 129
      players have this field populated (see "Player Families" tab on
      the generated page). Matching finds every exact version-intact
      substring match, then separately loose-matches (version-stripped)
      anything not already covered, so a multi-product string like
      "Soundmonitor + Future Composer v1.0" links *both* products instead
      of losing the unversioned one once the versioned one hit an exact
      match (real bug, found and fixed this pass — previously the loose
      pass only ran when zero exact matches were found at all, an
      all-or-nothing check, not per-product). Still text matching over a
      free-text field, though — not a real identifier join, since DeepSID
      doesn't expose one.
- [x] ~~Parse STIL.txt's `COMMENT` field.~~ Done — `fetch-hvsc-docs.js`'s
      `parseStilTxt()` now captures multi-line `COMMENT` blocks (same
      default-subtune-only rule as title/artist, so a comment scoped to
      an alternate subtune isn't misattributed). `build-html.js` cross-
      references it by filename onto *every* file regardless of source
      (DeepSID dump vs STIL fallback) — 6,548 of 55,223 DeepSID-sourced
      files gained a real comment this way, not just the tiny STIL-
      fallback subset. Shown as a collapsible "song info" toggle on the
      Files tab and each composer card's file list. Adds ~900KB to
      `output/index.html` (8.7MB → 9.6MB), in line with the size estimate
      given before building this.
      - **Bonus fix found while wiring this up**: composer cards had been
        showing "0 SIDs" for every composer since the DeepSID database
        export import — `build-html.js` deletes `composer.folder` after
        deriving `composer.files` (the 42MB page-size fix), but the
        template's `fileList()`/`buildFileRow()` were never updated to
        read `composer.files` instead and were silently reading the now-
        absent `composer.folder`. Fixed; verified via sandbox that 1892
        of 1902 composers now show their real file count (only 10
        genuinely have zero).
- [x] ~~Player screenshot thumbnails~~ Done, via a different source than
      first assumed — `scripts/fetch-player-media.js` pulls a real
      screenshot from CSDb's `type=release` endpoint (same csdb_id
      already used for the CSDb link), not from DeepSID's own page. 123
      of 124 players with a csdb_id got one.
- [x] ~~Re-run CSDb enrichment against the full composer set.~~ Done —
      `fetch-csdb.js` had only ever been run against the original curated
      56 composers; after the DeepSID database export expanded coverage to
      ~1,895, 1,611 of them already carry a `csdb_id` in their profile but
      only 47 had actually been enriched. Re-ran it (cache-aware, safely
      re-runnable, ~11 min at the existing 400ms rate limit) — 1,564
      fetched, 0 failed. Composer cards with real CSDb bio/group/country
      data went from 47 to 1,609 of 1,902 (85%).
- [x] ~~Surface real player/tool usage (not just that a tool exists).~~
      Done — the Players tab now sorts by real files-made-with-it (a new
      `computePlayerUsageCounts()`) instead of insertion order, with a
      "N files" badge per card. Found and fixed a real bug while building
      this: `matchPlayer()` stripped version numbers *before* comparing,
      so version-forked tools sharing a product name (GoatTracker v1.x
      vs v2.x, DMC v4/v5/v6.x) all collapsed onto whichever entry the
      lossy match hit first — GoatTracker v1.x was silently showing 0
      files with all 8,420 v1+v2 files misattributed to v2.x. Fixed with
      a two-pass match (version-intact first, version-stripped loose
      fallback only when unambiguous — same "don't guess when ambiguous"
      rule already used for HVSC matching). This also fixed the Files tab's
      per-row matches and each player detail page's "files using this"
      list, which shared the same bug. `filesForPlayer()` was refactored
      to reuse `matchPlayer()` instead of its own separate loose logic, so
      all three surfaces now agree.
- [x] ~~Surface composer death dates.~~ Done — 49 of 1902 composers have a
      recorded `date_death` (some with `death_cause`), fetched since the
      DeepSID database export but never shown anywhere. Composer cards
      now show a small "🕯 In memoriam, {year}" line when present (cause
      in the tooltip, when recorded). `deathYear()` treats DeepSID's
      "0000-00-00" convention as absent and handles year-only-known dates
      like "2018-00-00".
- [x] ~~Fix false-positive country mismatches from naming-convention
      differences.~~ Done — found while cross-checking CSDb's newly-
      enriched country data against DeepSID's: **14 of the then-24**
      `COMPOSER_COUNTRY_MISMATCH` gaps were just "England" vs
      "UNITED KINGDOM" (same country), not real disagreements — the
      shared `countriesRoughlyMatch()` in `scripts/lib/hvsc.js` had no
      concept of constituent countries. Added a small alias table
      (England/Scotland/Wales/Northern Ireland → United Kingdom, USA/
      America → United States, Holland → Netherlands — the actual pairs
      observed causing false positives, not a full ISO table). Mismatches
      dropped from 24 to 11, all genuinely different countries now (spot-
      checked the full list). Same function also feeds the "✓ HVSC
      verified" composer-card badge, so ~13 composers that were wrongly
      showing a mismatch warning now correctly show verified.
- [x] ~~Surface CSDb group membership across the whole dataset.~~ Done —
      each composer's CSDb groups were already summarized server-side
      (`composer.csdb.groups`) and shown as tags on individual composer
      cards, but nothing aggregated them across composers. New "Scene
      Groups" tab (`computeGroupMembership()`, all client-side, no new
      fetch) lists every group with 2+ cached composers as members —
      737 of 1,817 distinct groups qualify, sorted by size, each member
      name clickable (jumps to their composer card). Onslaught leads at
      48 composers, Hokuto Force 43, Triad 36. Only viable now that CSDb
      enrichment covers 1,609 composers instead of 47.
- [x] ~~Surface CSDb's other scene roles per composer.~~ Done —
      `summarizeCsdb()` now also extracts `handle.FreelanceFunctions`
      (was fetched and cached but never read). 897 of 1,579 role-tagged
      composers (57%) are credited for more than just music — 688 also
      coded, 461 also did graphics, 183 swapped, 120 cracked, 117
      organized events. Composer cards show these as a second tag row
      (`Musician` itself filtered out — every card here is a SID composer
      by definition, so it's the *other* roles that are informative).
      Checked a related idea and skipped it: CSDb's `country` field could
      only fill 6 of the 110 `COMPOSER_MISSING_COUNTRY` gaps — not enough
      yield to justify wiring it into `find-gaps.js`'s suggestion logic.
- [x] ~~Add real chart visualizations, not just sorted lists.~~ Done — new
      **Insights** tab, three bar charts sharing a new `barChart()` helper
      (Countries tab refactored onto it too, no behavior change there):
      (1) composer activity by year, 1983–2026, chronological rather than
      ranked — 114+68+73+31 = 286 composers active 2023–2026 alone versus
      164 across the entire 1983–1989 era, i.e. the scene this project
      documents is still growing, not just being archived; (2) CSDb scene
      roles aggregated across all composers (Musician 1392, Coder 688,
      Graphician 461, ...); (3) most prolific composers by cached SID file
      count, top 20, clickable back to their composer card.
      - **Found and excluded a real data-identity edge case** while
        building the "most prolific" chart: `/MUSICIANS/L/Link/unreleased/`
        (a subfolder of composer "Link"'s own directory) got imported as
        its own separate composer named "unreleased" by the DeepSID dump's
        folder-depth-based identity derivation — confirmed by both sharing
        the exact same CSDb credit count (2,654). Checked whether this is
        systemic (scanned for other generic subfolder names like `misc`/
        `demos`/`other`/`various`/`unknown` across all 1,902 composers) —
        it's isolated, 1 of 1,902, so excluding it from this one chart
        (`INSIGHTS_EXCLUDED_COMPOSERS`) is the right scope, not a fix to
        `import-deepsid-dump.js`'s identity derivation itself.
- [ ] **Suggestions coverage is intentionally conservative.** Re-measured
      after the DeepSID database export expanded composer coverage:
      **97 of 240 gaps** now have a `suggestion` field (was 15 of 127 —
      most of the jump is `COMPOSER_MISSING_COUNTRY`, 88 of 110, thanks
      to exact HVSC matches going from 23 to 1064 composers). Remaining
      gaps without a suggestion: `PLAYER_MISSING_FIELDS` (3 of 111 — still
      bottlenecked on CSDb's sparse `Website` field, 14 of 123 cached
      releases have one) and `COMPOSER_COUNTRY_MISMATCH` (0 of 11, by
      design — a mismatch is two sources disagreeing, there's no single
      "right" answer to suggest). Composer suggestions still require an
      exact or unambiguous HVSC match (Clever Music and Randall have none,
      correctly, since Randall genuinely matches 2 different HVSC
      entries). Raising coverage further means better sources, not looser
      matching — loosening the matcher risks reintroducing the
      false-positive problem this was built to avoid (see git history for
      the "Fun Fun" → wrong scener false match caught during CSDb search
      testing).
