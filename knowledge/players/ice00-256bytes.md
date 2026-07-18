# 256bytes/Ice00 (player routine)

```json
{
  "id": "ice00-256bytes",
  "name": "256bytes/Ice00 (player routine)",
  "aliases": ["256bytes/Ice00"],
  "authors": ["Stefano Tognon (Ice00)"],
  "released": "2005-2006 (per CSDb SID entries for both locally-tagged files)",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Italian composer Stefano Tognon for size-limited demoscene competitions, following the same pattern as the already-carded knowledge/players/agemixer-256bytes.md.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256bytes' TAG NAME IS APPROXIMATE, NOT LITERALLY TRUE FOR BOTH FILES: 'Random Ninja' (data/composers/stefano-tognon.json, CSDb sid id 29481) has a CSDb-listed data size of 250 ($00FA) bytes — genuinely sub-256. 'XL5' (CSDb sid id 37940), despite CSDb's own release title being 'XL5 (256 bytes)', actually measures 263 ($0107) bytes — 7 bytes OVER the 256 threshold. Recorded exactly as found via direct CSDb lookup, not assumed from the tag or title string.",
    "GENUINE REUSE ACROSS MULTIPLE PRODUCTIONS: CSDb shows 'Random Ninja' reused in '512B4N2019' (2019, a 1K Intro by Excess) and 'PETSCII Ate My TinySID' (2005 Music Collection by Chrome and Ice Team); 'XL5' was reused in 'Raster Roller' (2021, The Solution) and 'You're Just My Type' (2011, Arise) — i.e. both of Ice00's own size-coded routines were picked up and reused by OTHER groups/composers in later size-capped productions, years after original release. This is why the tag earned a stub card rather than a SKIP, following the same 'real reused routine, not a one-off' bar set by the already-carded knowledge/players/agemixer-256bytes.md.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Ice00' — fingerprinted by this project's own Player-ID tooling only, same as the Agemixer sibling tag.",
    "Stefano Tognon (Ice00) is an Italian scener; no further biography beyond the CSDb credit lines was researched in this pass."
  ],
  "sources": [
    "Local dataset: data/composers/stefano-tognon.json — 2 files tagged '256bytes/Ice00' ('Random Ninja' csdb id 29481, 'XL5' csdb id 37940); see knowledge/COVERAGE.md row #90 (2 files)",
    "data/sidid.json: no entry for '256bytes/Ice00' (checked, absent)",
    "CSDb SID entry, 'Random Ninja': data size 250 ($00FA) bytes, reused in '512B4N2019' (2019) and 'PETSCII Ate My TinySID' (2005): https://csdb.dk/sid/?id=29481",
    "CSDb SID entry, 'XL5': data size 263 ($0107) bytes despite the '(256 bytes)' release title, reused in 'Raster Roller' (2021) and 'You're Just My Type' (2011): https://csdb.dk/sid/?id=37940",
    "knowledge/players/agemixer-256bytes.md (status: stub) — sibling card establishing the same 'real reused routine' evaluation criterion for '256bytes/*' tags; cited for methodology, not edited"
  ]
}
```

## Overview

`256bytes/Ice00` is Italian composer **Stefano Tognon**'s ("Ice00") own
size-constrained player+data routine, in the same "256bytes/*" tag family as
the already-carded `256bytes/Agemixer` (`knowledge/players/agemixer-256bytes.md`).
Unlike that sibling, the "256 bytes" claim is only exactly true for one of the
two locally-tagged files — "Random Ninja" measures 250 bytes, but "XL5"
measures 263 bytes despite CSDb's own release title calling it "XL5 (256
bytes)". Both routines were genuinely reused by other groups in later
size-capped demoscene productions years after their original release, which
is why this earned a stub card rather than a SKIP.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "256 bytes" label is not uniformly
accurate (XL5 is 263 bytes) — recorded exactly as measured via CSDb, not
smoothed over; and both files show confirmed reuse by unrelated later
productions, meeting this project's bar for a real (if tiny) routine.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located. A ~250-263 byte SID would be an unusually small and
tractable future disassembly target, as already noted for the Agemixer
sibling.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data and two CSDb SID-entry lookups. No SIDId entry
exists for this tag.

## Sources

See the `sources` array — local composer-file aggregation, two CSDb SID
entries, and the sibling `agemixer-256bytes.md` card (cited, not edited).
