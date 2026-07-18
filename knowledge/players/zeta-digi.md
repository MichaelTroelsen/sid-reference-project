# Zeta Digi (player routine)

```json
{
  "id": "zeta-digi",
  "name": "Zeta Digi (player routine)",
  "aliases": ["Zeta_Digi"],
  "authors": ["Fredrik Zetterlund (Zeta)"],
  "released": "TODO: no explicit year in SIDId (no entry for this tag); the one dated file (Zamplingmicz) is credited to 1987 via its CSDb SID entry",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found — Swedish composer Fredrik Zetterlund's own catalog otherwise uses many off-the-shelf trackers (SoundMonitor, DUSAT/RockMon, FutureComposer, GoatTracker), so this tag looks like a small personal digi routine rather than a distributed editor, but not confirmed by a direct citation",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "100% single-composer concentration: both files tagged 'Zeta_Digi' in this project's local dataset (data/composers/zeta.json) belong to Fredrik Zetterlund himself — 'Zamplingmicz' (CSDb sid id 52557, 1987, released by Digital Crackers) and 'ZZ Top Mix' (CSDb sid id 52559). Out of Zeta's ~39 tagged files total, only these 2 use this tag — the remaining 37 spread across SoundMonitor, DUSAT/RockMon3/4, FutureComposer, Music Assembler, and (much later) GoatTracker, i.e. conventional published trackers, not this routine.",
    "REAL, INDEPENDENT CORROBORATION OF DIGI/SAMPLE CONTENT (not just the filename): 'Zamplingmicz' is itself a pun on 'sampling' ('zampling' + 'micz'/Zetterlund's own initials pattern), AND its CSDb SID entry lists an unusually large data size — 48,896 bytes — far larger than typical synthesized-tracker SID data, consistent with embedded PCM sample data. This satisfies this KB's 'digi by name is not evidence' bar via file-size and title-pun corroboration together, though the exact playback mechanism (volume-register trick, sample-and-hold, etc.) remains unconfirmed (TODO).",
    "SIDId (data/sidid.json) has NO entry for 'Zeta_Digi' — this tag was fingerprinted by this project's own Player-ID tooling only, not sourced from SIDId's byte-signature database.",
    "No CSDb group/scener credit for 'Sampling' or any similar role was found on either SID entry — the size/title evidence above is the strongest signal available, not a scene-credited role as seen on e.g. Toaster_Digi (see knowledge/players/toaster-digi.md for that comparison case)."
  ],
  "sources": [
    "Local dataset: data/composers/zeta.json — 2 files tagged Zeta_Digi ('Zamplingmicz' csdb sid id 52557, 'ZZ Top Mix' csdb sid id 52559) out of ~39 total files by Fredrik Zetterlund; see knowledge/COVERAGE.md row #133 (2 files)",
    "data/sidid.json: no entry for 'Zeta_Digi' (checked, absent)",
    "CSDb SID entry https://csdb.dk/sid/?id=52557 — 'Zamplingmicz', author Fredrik Zetterlund (Zeta), released 1987 by Digital Crackers, data size 48,896 bytes",
    "data/composers/zeta.json profile: full_name Fredrik Zetterlund, handles 'Zeta, Frallan', country Sweden, csdb_id 6300"
  ]
}
```

## Overview

`Zeta_Digi` is a small, apparently personal digi/sample routine used by
Swedish composer **Fredrik Zetterlund** ("Zeta") on exactly **2 of his ~39**
locally-tagged files: "Zamplingmicz" (1987, Digital Crackers — a title that
puns on "sampling") and "ZZ Top Mix". Unlike most `_Digi`-suffixed tags in
this batch, there is real corroborating evidence beyond the name itself: the
"Zamplingmicz" SID entry carries an unusually large data payload (~48.9KB),
consistent with embedded sample data rather than pure synthesized-tracker
data. The rest of Zeta's catalog uses conventional published trackers
(SoundMonitor, DUSAT/RockMon, FutureComposer, GoatTracker), reinforcing that
this tag is a one-off routine rather than his main tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: real (if indirect) corroboration of
digi content via title pun + oversized SID data, not just the filename
convention; and total concentration on 2 of Zeta's own ~39 files, with his
remaining catalog spread across mainstream trackers.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`, not guessed — no public source
or disassembly of this routine was located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 2-file usage, CSDb-sourced size/date evidence for the digi
claim). No SIDId entry exists for this tag. No runtime behaviour has been
confirmed.

## Sources

See the `sources` array — local dataset aggregation and one CSDb SID-entry
lookup.
