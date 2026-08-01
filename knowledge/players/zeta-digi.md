# Zeta Digi (player routine)

```json
{
  "id": "zeta-digi",
  "name": "Zeta Digi (player routine)",
  "aliases": ["Zeta_Digi"],
  "authors": ["Fredrik Zetterlund (Zeta)"],
  "released": "1987 (Digital Crackers) — both of the 2 tagged files' own CSDb SID-entry `Released` fields agree: 'Zamplingmicz' (csdb sid 52557) and 'ZZ Top Mix' (csdb sid 52559) are each 'Released: 1987 Digital Crackers'. Full census of both files, not a sample; this is an attested release date for the two one-file demos carrying the routine, not necessarily a tool version date (no standalone tool release exists — see `platform`).",
  "status": "stub",
  "platform": "Native C64, embedded per-demo routine — not a distributed editor. No dedicated digi/sample-player tool release exists under Zeta's name: a full census of his CSDb Credits list (scener id 6300, depth 2, https://csdb.dk/webservice/?type=scener&id=6300&depth=2) found only ONE release of type 'C64 Tool' credited to him — 'Digital Time Cruncher V3.1+' (1988), a data cruncher/packer, not a music or digi tool. Both tagged files are each released standalone as a 'C64 One-File Demo' (CSDb release types 147790 and 147791) by his group Digital Crackers, consistent with a personal/in-house routine hand-embedded per production rather than a packaged product.",
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
    "CORRECTION (2026-08-01 re-research pass): the prior claim above ('no CSDb Sampling credit found') was wrong — it checked the SID entries but not the releases' own Credits list. Querying the CSDb webservice directly (type=sid, depth=3) for both files shows each is `UsedIn` a CSDb release ('Zamplingmicz' release id 147790; 'ZZ Top Mix' release id 147791, both 'C64 One-File Demo' by Digital Crackers, 1987) whose Credits list explicitly includes a `CreditType: Sampling` entry for Zeta himself (handle id 6300), alongside a separate `CreditType: Code` entry — a genuine scene-credited role, not just filename/size inference. This is the same kind of direct 'Sampling' role evidence used on Toaster_Digi (knowledge/players/toaster-digi.md).",
    "Zeta's full CSDb Credits list (scener id 6300, depth 2) was censused for a dedicated digi/sample tool release under his name: only one release of type 'C64 Tool' exists — 'Digital Time Cruncher V3.1+' (1988), a data cruncher, not a digi/sample editor. This directly supports the `platform` conclusion that no distributed tool exists for this routine."
  ],
  "sources": [
    "Local dataset: data/composers/zeta.json — 2 files tagged Zeta_Digi ('Zamplingmicz' csdb sid id 52557, 'ZZ Top Mix' csdb sid id 52559) out of ~39 total files by Fredrik Zetterlund; see knowledge/COVERAGE.md row #133 (2 files)",
    "data/sidid.json: no entry for 'Zeta_Digi' (checked, absent)",
    "CSDb webservice, type=sid, id=52557, depth=3, 2026-08-01: https://csdb.dk/webservice/?type=sid&id=52557&depth=3 — 'Zamplingmicz', author Fredrik Zetterlund (Zeta), Released '1987 Digital Crackers', LoadAddr/InitAddr 3072, data size 48,896 bytes; UsedIn release id 147790 ('C64 One-File Demo', Digital Crackers, 1987) with Credits including CreditType 'Sampling' for handle 6300 (Zeta)",
    "CSDb webservice, type=sid, id=52559, depth=3, 2026-08-01: https://csdb.dk/webservice/?type=sid&id=52559&depth=3 — 'ZZ Top Mix', same author/Released/group, data size 44,032 bytes; UsedIn release id 147791 ('C64 One-File Demo', Digital Crackers, 1987), same Credits pattern (Code + Sampling, both handle 6300)",
    "CSDb webservice, type=scener, id=6300, depth=2, 2026-08-01: https://csdb.dk/webservice/?type=scener&id=6300&depth=2 — Zeta's full Credits list censused for a 'C64 Tool' release; only one found, 'Digital Time Cruncher V3.1+' (1988, release id 20831), not a digi/sample editor",
    "data/composers/zeta.json profile: full_name Fredrik Zetterlund, handles 'Zeta, Frallan', country Sweden, csdb_id 6300"
  ]
}
```

## Overview

`Zeta_Digi` is a small, personal digi/sample routine used by Swedish
composer **Fredrik Zetterlund** ("Zeta") on exactly **2 of his ~39**
locally-tagged files: "Zamplingmicz" and "ZZ Top Mix", both **released 1987
by Digital Crackers** as standalone "C64 One-File Demo"s (CSDb release ids
147790/147791 — confirmed by a full census of both files' own CSDb SID-entry
`Released` fields, not a sample). Unlike most `_Digi`-suffixed tags in this
batch, there is real corroborating evidence beyond the filename: both
releases carry an explicit `CreditType: Sampling` entry for Zeta himself in
their CSDb Credits list (alongside a separate `Code` credit), and
"Zamplingmicz" carries an unusually large data payload (~48.9KB), consistent
with embedded sample data rather than pure synthesized-tracker data. No
dedicated tool release exists — a census of Zeta's full CSDb Credits list
found only one 'C64 Tool' credit under his name ("Digital Time Cruncher
V3.1+", a data cruncher), so `platform` records this as an embedded,
per-demo routine, not a published editor; `csdb_release` stays `null`
accordingly. The rest of Zeta's catalog uses conventional published
trackers (SoundMonitor, DUSAT/RockMon, FutureComposer, GoatTracker),
reinforcing that this tag is a one-off routine rather than his main tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) direct scene-credited corroboration
of digi content — a `CreditType: Sampling` entry for Zeta on both releases'
CSDb Credits lists, not just filename/size inference (this corrects an
earlier pass that had missed the release-level Credits and claimed no such
credit existed); (2) total concentration on 2 of Zeta's own ~39 files, with
his remaining catalog spread across mainstream trackers; (3) a census of
Zeta's full CSDb Credits list confirms no dedicated digi/sample tool release
exists under his name.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`, not guessed — no public source
or disassembly of this routine was located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 2-file census, CSDb-sourced release date/Credits evidence
for the digi claim, and a census of Zeta's tool credits confirming no
distributed editor exists). No SIDId entry exists for this tag. No runtime
behaviour has been confirmed.

## Sources

See the `sources` array — local dataset aggregation and CSDb webservice
lookups (type=sid depth=3 for both tagged files, type=scener depth=2 for
Zeta's full Credits list), 2026-08-01.
