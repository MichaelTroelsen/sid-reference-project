# Daw_Digi

```json
{
  "id": "daw-digi",
  "name": "Daw_Digi",
  "aliases": ["Daw_Digi"],
  "authors": ["David Fahlander (Daw)"],
  "released": "TODO: no tool-release date — this is an in-house routine, not a distributed editor. Full census (all 3 tagged files' own CSDb `Released` fields, via scripts/lib/csdb-client.js type=sid) shows earliest attested use is 1990: Immortal (tune 3), CSDb sid id 10946, own `Released` field '1990 Triad' (used in the demo Immortal, CSDb release 7610, 1990-04-16), and Lickpipe (tune 3), CSDb sid id 43240, own `Released` field '1990 Triad' (used in Lickpipe, CSDb release 7607, 1990). The third file, Jordgubbar (Bellman), CSDb sid id 43238, own `Released` field '1992 Triad' (release 7381).",
  "status": "stub",
  "platform": "Native C64 — coded directly into Triad demo parts, not a standalone distributed editor/tool. Confirmed via CSDb scener record for Daw (Handle ID 440): member of Triad (CSDb group 132, BaseCountry Sweden, Grouptypes Import Group/Demo Group/Cracker Group — no Amiga/PC crossover listed), FreelanceFunctions listed as 'Coder, Musician' (no 'Sampling' function credited). No CSDb tool/editor release or public source archive found under 'Daw' — checked directly against data/players.json's curated player list (0 matches for 'daw', case-insensitive) in addition to the earlier CSDb release search.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'David Fahlander (Daw)' — no NAME, reference, or comment. The absence of a NAME field is a signal this was never packaged as a titled, released tool.",
    "NO SAMPLING/DIGI ROLE CREDIT FOUND on Daw's CSDb scener page — checked directly, and no release lists him with a 'Sampling' function or any credit mentioning digi/sample/digitizer work. Per this batch's core rule, the '_Digi' tag name alone is NOT treated as confirmation here — recorded honestly as unconfirmed (TODO) rather than inferred.",
    "3 files, 1 composer: Daw himself — 'Immortal (tune 3)', 'Jordgubbar (Bellman)', 'Lickpipe (tune 3)'. A personal routine by usage pattern.",
    "Daw is Swedish, member of Censor Design (1990-present) and formerly Triad (1990-1991) — NOT the same author as the already-carded 'Censor Digi' routine ([[censor-digi]]), which is Fredrik Ternell (Swallow) of the same group. Same group membership is not evidence of shared code; no merge asserted.",
    "Full census, gap-fill pass (all 3 tagged files' own CSDb `Released` field, via scripts/lib/csdb-client.js type=sid — not a sample): Immortal (tune 3) csdb sid 10946, '1990 Triad', used in Immortal (release 7610, 1990-04-16 at Horizon Easterparty 1990) and also reused in Chi-Taowon (release 7382, 1992); Lickpipe (tune 3) csdb sid 43240, '1990 Triad', used in Lickpipe (release 7607, 1990); Jordgubbar (Bellman) csdb sid 43238, '1992 Triad', used in Jordgubbar (release 7381, 1992). All three tunes' own `Released` field credits Triad (not Censor Design), consistent with Daw's Triad membership period.",
    "CSDb scener record for Daw (Handle ID 440, depth=3) lists FreelanceFunctions 'Coder, Musician' only — no 'Sampling' function, and a full-text scan of the fetched record found zero occurrences of 'Sampling' and no relevant 'Digi' hits (the few 'Digi' matches were unrelated group/release names like 'The Digital Underground'). This corroborates, rather than newly discovers, the earlier finding that no digi/sampling role is credited to Daw on CSDb.",
    "csdb_release confirmed to stay null: data/players.json (this project's curated player list) has zero entries matching 'daw' (case-insensitive substring search), in addition to the earlier direct CSDb tool/release search finding nothing."
  ],
  "sources": [
    "data/sidid.json byTag: Daw_Digi — author 'David Fahlander (Daw)', no name/reference/comment",
    "CSDb scener Daw (Sweden; groups Censor Design, Triad; no Sampling/digi credit found): https://csdb.dk/scener/?id=440",
    "Local dataset: 3 files tagged Daw_Digi, 1 composer (Daw) — data/composers/daw.json",
    "data/composers/daw.json (profile country Sweden, csdb id 440)",
    "knowledge/players/censor-digi.md — cross-checked, different author (Swallow, not Daw), no merge evidence",
    "Gap-fill pass: CSDb webservice type=sid records for all 3 tagged files, queried via scripts/lib/csdb-client.js — Immortal (tune 3) https://csdb.dk/sid/?id=10946, Jordgubbar (Bellman) https://csdb.dk/sid/?id=43238, Lickpipe (tune 3) https://csdb.dk/sid/?id=43240",
    "CSDb group Triad (BaseCountry Sweden, Grouptypes Import Group/Demo Group/Cracker Group, founded 1986-07-28): https://csdb.dk/group/?id=132",
    "CSDb releases: Immortal https://csdb.dk/release/?id=7610 ; Lickpipe https://csdb.dk/release/?id=7607 ; Jordgubbar https://csdb.dk/release/?id=7381",
    "data/players.json — checked for any curated 'Daw' tool entry; none found",
    "Lemon64 forum search attempted (search system requires an authenticated session — 'you are not permitted to use the search system' when fetched unauthenticated); no corroborating thread found this pass"
  ]
}
```

## Overview

Daw_Digi is the SIDId tag for a routine attributed to **David Fahlander**,
handle **Daw**, a Swedish scener (Censor Design, ex-Triad). SIDId's entry
carries only an `AUTHOR` line — no title/reference/comment. It appears in
only **3 files, all by Daw himself**. Unlike several sibling tags in this
batch, no CSDb credit corroborating an actual sampling/digi role was found
on Daw's own scener page — the sample-playback claim here rests on the tag
name alone and is therefore left unconfirmed rather than asserted. A
gap-fill census of all 3 tagged files' own CSDb `Released` fields puts
earliest attested use at 1990 (Immortal tune 3 and Lickpipe tune 3, both
credited "1990 Triad"), with the third file (Jordgubbar) dated 1992 —
consistent with Daw's Triad membership period and confirming this is a
per-tune composition date, not a tool release. `platform` is confirmed
native C64 (Triad is a Sweden-based, C64-only group per its CSDb record;
Daw's CSDb FreelanceFunctions list only "Coder, Musician", no "Sampling").
`csdb_release` stays `null` — no dedicated tool/editor page exists, now
also checked against `data/players.json`'s curated list directly.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but no
titled product; (2) **no CSDb 'Sampling' credit was found for Daw** —
honestly flagged as unconfirmed technique, per the batch's core rule that
a tag name is not evidence; (3) Daw shares a group (Censor Design) with the
already-carded [[censor-digi]] routine, but that is a different author
(Fredrik Ternell/Swallow) — no merge asserted.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`), a full census of all 3
tagged files' CSDb `type=sid` records, the CSDb scener/group records for
Daw and Triad, and a `data/players.json` check for a curated tool entry.
`status: stub` — no runtime fact has been confirmed by disassembly or
trace; no Tier 3 field was touched in this pass.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Daw, CSDb
sid/release/group records from the gap-fill census, the local composer
aggregation, `data/players.json`, and a cross-check against the
censor-digi card.
