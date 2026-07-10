# TODO

Improvement ideas identified while building out CSDb/HVSC cross-referencing,
not yet implemented. Not a commitment list — pick off whichever's useful.

- [ ] **Parse `STIL.txt` for a partial file listing.** It's already
      downloaded to `data/hvsc/STIL.txt` (~3.6MB) but unused. It has
      per-file metadata keyed by collection path, independent of
      DeepSID's `?file=`/`?folder=` endpoints — while those are down,
      STIL.txt could give composers a real (if partial) file list
      instead of an empty one.
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
      the generated page), and matching is currently just substring
      matching against player titles — same approach as the SID-file
      player linking, same false-negative risk on version-number
      mismatches.
