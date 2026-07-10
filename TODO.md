# TODO

Improvement ideas identified while building out CSDb/HVSC cross-referencing,
not yet implemented. Not a commitment list — pick off whichever's useful.

- [x] ~~Parse `STIL.txt` for a partial file listing.~~ Done —
      `fetch-hvsc-docs.js` parses the `/MUSICIANS/` subset into
      `data/hvsc/stil.json` (12,038 files across 1382 folders), and
      `build-html.js` falls back to it per-composer when DeepSID's real
      folder data is unavailable. STIL doesn't track which player/editor
      made a file, so those entries can't be linked to a player — that's
      a real gap in what's knowable from that source, not a bug. Right
      now **all** 928 files across the 56 curated composers are STIL
      fallback (0 from DeepSID) since the `?file=`/`?folder=` outage is
      still ongoing — re-run `npm run fetch:composers -- --refresh` once
      it recovers to get real per-file player data back.
- [ ] **Improve HVSC name matching.** `scripts/lib/hvsc.js` only matches
      on an exact, case-insensitive handle string — 16 of 56 curated
      composers match today. Falling back to `full_name` and normalizing
      accented characters (e.g. "Hülsbeck" vs "Huelsbeck") would raise
      coverage and make `COMPOSER_COUNTRY_MISMATCH` more useful.
- [ ] **Feed the Countries tab from the full HVSC list**
      (`data/hvsc/musicians.json`, 1870 entries) instead of just the 56
      cached DeepSID profiles — already fetched, gives a true HVSC-wide
      distribution rather than the curated subset.
- [ ] **Investigate the 8 `COMPOSER_NO_PROFILE` gaps** for path mistakes
      in `data/composer-list.json` before assuming they're genuine
      DeepSID gaps — a wrong path looks identical to a real gap right
      now.
- [ ] **Resolve `import_from` cross-references properly.** Only 6 of 129
      players have this field populated (see "Player Families" tab on
      the generated page). Matching now prefers an exact version-intact
      substring match before falling back to the version-stripped loose
      one (fixed a real bug where it over-matched — see git history), but
      it's still text matching, not a real identifier join.
- [ ] **Parse STIL.txt's `COMMENT` field.** Deliberately skipped when
      building `stil.json` — free-text community commentary, useful for
      a "song info" detail view but not needed for the file listing this
      was built for. Would need per-file storage (not just title/artist)
      given comments can be long.
- [ ] **Player screenshot thumbnails.** DeepSID's own players page shows
      a small screenshot per player; there's no equivalent field in the
      `?players` API and no predictable image URL pattern (the page is a
      JS-rendered SPA, not static HTML) — would need a headless browser
      to extract, for a purely cosmetic gain. Skipped for now; see chat
      history around 2026-07-10 for what was checked.
