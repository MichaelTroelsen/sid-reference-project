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
- [x] ~~Player screenshot thumbnails~~ Done, via a different source than
      first assumed — `scripts/fetch-player-media.js` pulls a real
      screenshot from CSDb's `type=release` endpoint (same csdb_id
      already used for the CSDb link), not from DeepSID's own page. 123
      of 124 players with a csdb_id got one.
- [ ] **Suggestions coverage is intentionally conservative.** Only 15 of
      127 gaps have a `suggestion` field (see `find-gaps.js`) — composer
      suggestions require an exact or unambiguous HVSC match (Clever
      Music and Randall have none, correctly, since Randall genuinely
      matches 2 different HVSC entries), and player `site` suggestions
      only use CSDb's `Website` field, which is sparse (14 of 123 cached
      releases have one). Raising real coverage means better sources, not
      looser matching — loosening the matching further risks reintroducing
      the false-positive problem this was built to avoid (see git history
      for the "Fun Fun" → wrong scener false match caught during CSDb
      search testing).
