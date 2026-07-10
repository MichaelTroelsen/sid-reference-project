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
