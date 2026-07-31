# Censor Digi (Swallow / Censor Design)

```json
{
  "id": "censor-digi",
  "name": "Censor Digi (Swallow / Censor Design)",
  "aliases": ["Censor_Digi_1", "Censor_Digi_2"],
  "authors": ["Fredrik Ternell (Swallow)"],
  "released": "TODO: no explicit release date — this is an in-house routine, not a distributed tool. Full census (2026-07-31) of all 14 tagged files' own CSDb `Released` fields (via scripts/lib/csdb-client.js, type=sid) shows earliest attested use is 1989: Wonderland IV (part 1), CSDb sid id 27909, own `Released` field '1989 Censor Design', used in Wonderland IV, CSDb release 625 (1989-11-21). This corrects an earlier spot-checked '1990' claim in this same card — Wonderland IV (1989) was missed the first time.",
  "status": "stub",
  "platform": "Native C64 — coded directly into Censor Design demo parts, not a standalone distributed editor/tool. Censor Design is a Sweden-based C64-only group (CSDb group 2310: BaseCountry Sweden, Grouptypes Cracker/Demo/Fixing/Import Group/Magazine Staff, no Amiga/PC crossover listed): https://csdb.dk/group/?id=2310 . No CSDb tool/editor release or public source archive found under 'Censor Digi' (re-checked 2026-07-31 via CSDb webservice + web search; the only CSDb tool releases by Censor Design are the unrelated Pixcen and C6510 utilities).",
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
    "No SIDId entry exists for either raw tag. deepsid_dl/sidid.nfo goes straight from 'Censor_8bit_Digi_2' to 'Censored_Editor' with nothing for 'Censor_Digi_1'/'Censor_Digi_2' in between (verified by alphabetical position and direct grep) — unlike the sibling Censor_8bit_Digi_1/_2, which DO have SIDId author entries. Author/attribution here comes only from this project's own per-file composer-data aggregation, not from SIDId.",
    "Local dataset (data/composers/swallow.json + data/composers/tomas-danko.json): 8 files tagged Censor_Digi_1, 6 tagged Censor_Digi_2 = 14 total, 2 composers. Every Censor_Digi_1 file is solo Fredrik Ternell (Swallow): Eye_Damage, Pray, Wonderland_IX(part3), Wonderland_VI(part4), Wonderland_V(part3/5/7), plus one more. Censor_Digi_2 is more mixed: Swallow solo (Bla_Bla, Bouncy_Balls_RCA_Intro, Spasmolytic part6), two 'Fredrik Ternell & Tomas Danko' collabs (Wonderland_IX part9, Wonderland_X part1), and one Tomas Danko solo (Ragga_Run).",
    "Full census, 2026-07-31 (every one of the 14 tagged files' own CSDb `Released` field, via scripts/lib/csdb-client.js type=sid — not a sample): Censor_Digi_1 (8 files) — Wonderland_IV_part_1 '1989 Censor Design' (csdb sid 27909, used in Wonderland IV, release 625, 1989-11-21), Wonderland_V_part_3/5/7 '1990 Censor Design' (release 619, 1990-01-07), Wonderland_VI_part_4 '1990 Censor Design' (release 628, 1990-06-08), Pray '1991 Censor Design' (used in Wonderland VIII, release 633, 1991-05-02), Eye_Damage '1990 Censor Design/FairLight' (one-file demo, release 23766, 1990-08-16), Wonderland_IX_part_3 '1992 Censor Design' (release 11605, 1992-06-28). Censor_Digi_2 (6 files) — Spasmolytic_part_6 '1991 Censor Design' (but used in the Spasmolytic release, 636, dated 1993-12-29 — the tune's own field predates the release it shipped in, an interesting but unexplained gap), Bla_Bla '1992 Censor Design' (used in a one-file demo, release 638, dated 1994-12-30 — same kind of gap), Wonderland_IX_part_9 '1992 Censor Design' (release 11605, same as above), Wonderland_X_part_1 '1993 Censor Design' (release 11646, 1993-05-30), Ragga_Run '1993 Tomas Danko' (release 14883, 1993-12-26), Bouncy_Balls_RCA_Intro '1996 Cherry Software' (used in the Bouncy Balls C64 game, release 7234, 1995 — tune dated a year after the game it appeared in). Per this project's rule to trust the tune's own `Released` field over a `UsedIn` release's year, these tune-vs-release mismatches are recorded as-is, unexplained.",
    "CORRECTED chronology, superseding this card's earlier (pre-census) claim that _1/_2 usage started in 1990: Wonderland IV (1989-11-21, CSDb 625) is the earliest attested file of EITHER tag and uses _1 — a full year earlier than the '1990 (Wonderland V)' figure this card previously recorded from a partial read. Wonderland V (1990-01-07, CSDb 619), VI (1990-06-08, CSDb 628) and VIII (1991-05-02, CSDb 633) also used _1. But within the SAME 1992 release, Wonderland IX (CSDb 11605), part 3 is tagged _1 and part 9 is tagged _2 — so the two are not a strict 'old version retired, new version adopted' succession within that demo; they coexisted in the same release. Wonderland X (1993, CSDb 11646), Spasmolytic (1993, CSDb 636) and Ragga Run (1993) use only _2, as does the 1996 Bouncy Balls digi. Read together this is consistent with _1/_2 being two configurations or a version bump of ONE personal routine (same author throughout, same demo series, SIDId's own '_1'/'_2' numeric-suffix convention elsewhere in this dataset marks variants of one tool, not distinct products) — but this is an inference from usage pattern, NOT a confirmed byte-level fact. No sidid.cfg (the binary byte-signature file SIDId actually scans with) is available locally to check whether _1 and _2 share code; deepsid_dl/ only ships the human-readable sidid.nfo index.",
    "PSID header LoadAddr/InitAddr (gathered during the 2026-07-31 CSDb census; header metadata, not a disassembly fact — recorded here per this batch's rule, never promoted to Tier 3 `entry`/`memory`): load addresses vary wildly across the 14 files — $0829, $0900, $0A00, $1000, $3A00, $5700, $8E00 all appear as load addresses, and init addresses equally scattered ($0900 through $8F00). This is NOT a fixed player load address shared across files, consistent with the routine being hand-assembled/relocated per demo part rather than a relocatable shared library loaded at one convention. Source: CSDb webservice `type=sid` records for all 14 files (see sources).",
    "Lemon64 thread 'Digitised speech on C64' (page 2), a post by scener TMR, states: \"Everything up until Censor's Wonderland series that didn't use external hardware was 4bit, from memory only the Commodore sampler was 8bit.\" This is real external corroboration (not a tag-name inference) that the Wonderland-series digi routine — i.e., this Censor_Digi tag family — played 4-bit samples, as distinct from the separately-tagged Censor_8bit_Digi (8-bit, per its own SIDId comment). No further detail on the routine's coder or byte layout was found in that thread. https://www.lemon64.com/forum/viewtopic.php?p=164881",
    "The tag contains 'Digi' and several file titles literally say 'Digi' (e.g. the sibling 'Wonderland XII - Digi' tracks, tagged Censor_Digi/16khz, researched separately), which is suggestive of real sample/digi playback — but per this batch's rule, the tag name itself is not evidence, and no source/documentation was found confirming the actual playback technique for THIS tag specifically. Contrast with sibling Censor_8bit_Digi_1/_2, which DOES have a SIDId comment ('uses the same technique to play 8-bit samples as in OxyMod/THCM') — no equivalent comment exists for plain Censor_Digi.",
    "Three sibling tags (Censor_Digi, Censor_Digi/16khz, Censor_8bit_Digi) share the same author, Fredrik Ternell (Swallow) of Censor Design — but SIDId lists Censor_8bit_Digi as a byte-distinguishable signature from Censor_Digi (separate .nfo entries, no cross-reference or shared-routine comment between them). Same author is not the same as same code; no merge evidence was found connecting this family to either sibling, so no `edges` were asserted here. If a future pass gets access to sidid.cfg's raw byte signatures and finds overlap, that would be the actual evidence needed.",
    "No CSDb tool/release page exists for a 'Censor Digi' editor or player itself — this looks like an in-house routine embedded directly in demo code, not a distributed tool. The only curated DeepSID player with 'Censor' in the name is the unrelated 'Censor Editor v1.6' by a different scener, Kenneth Mutka (Slaygon) — CSDb release 67187/91724, a Censor Design music tracker, not this digi routine (different author, different CSDb id, no shared-routine evidence).",
    "Very small footprint (14 files, effectively one composer's routine used across a 1989-1996 span of one Swedish group's demos and one game, with one co-composer credit) — squarely a personal/in-house routine, not a published editor, consistent with this batch's expectation.",
    "Re-research pass, 2026-07-31: gap-fill for `released`/`platform`/`csdb_release`. Findings — `released` corrected from the prior spot-checked 1990 to a census-confirmed earliest-attested 1989 (Wonderland IV part 1). `platform` confirmed native C64 via the CSDb group record (Sweden-based, C64-only Grouptypes) and a targeted CSDb tool-release search that again found no 'Censor Digi' entry. `csdb_release` confirmed to stay `null` — no dedicated tool/editor release exists; both a CSDb webservice search and a general web search for a Censor Digi editor/tool page came back empty except for the two known-unrelated Censor Design tools (Pixcen, C6510). Negatives recorded, not just positives: no author-name-for-the-routine's-*coder* (as opposed to the tune's composer) was found on Lemon64, Forum64, or CSDb group credit lists — Forum64 (forum64.de) turned up nothing about Censor Design's digi technique specifically in this pass's searches. No sidid.cfg byte-signature access, so the _1/_2 shared-code question remains unresolved. `status` stays `stub`; no Tier 3 field was touched."
  ],
  "sources": [
    "deepsid_dl/sidid.nfo (confirms no entry for Censor_Digi_1/Censor_Digi_2; entries exist for Censor_8bit_Digi_1, Censor_8bit_Digi_2, Censored_Editor): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag (same, as imported JSON)",
    "Local dataset: data/composers/swallow.json and data/composers/tomas-danko.json, per-file `player` tag aggregation (8 files Censor_Digi_1, 6 files Censor_Digi_2, 2 composers)",
    "data/players.json curated entry 'Censor Editor v1.6' (csdb_id 67187, developer Slaygon) — shown to be a distinct, unrelated tool",
    "CSDb group Censor Design (Sweden): https://csdb.dk/group/?id=2310",
    "CSDb scener Swallow (Fredrik Ternell): https://csdb.dk/scener/?id=2547",
    "CSDb releases used for chronology: Wonderland IV https://csdb.dk/release/?id=625 ; Wonderland V https://csdb.dk/release/?id=619 ; Wonderland VI https://csdb.dk/release/?id=628 ; Wonderland VIII https://csdb.dk/release/?id=633 ; Wonderland IX https://csdb.dk/release/?id=11605 ; Wonderland X https://csdb.dk/release/?id=11646 ; Spasmolytic https://csdb.dk/release/?id=636 ; Bla Bla https://csdb.dk/release/?id=638 ; Bouncy Balls (game) https://csdb.dk/release/?id=7234 ; Ragga Run https://csdb.dk/release/?id=14883 ; Eye Damage https://csdb.dk/release/?id=23766 ; Wonderland XII https://csdb.dk/release/?id=120907",
    "2026-07-31 full census: CSDb webservice type=sid records for all 14 tagged files' own CSDb sid ids (queried via scripts/lib/csdb-client.js, source of the `Released`/LoadAddr/InitAddr data in the quirks above): Censor_Digi_1 — 40214, 27905, 27909, 27912, 27916, 51660, 27917, 27918; Censor_Digi_2 — 27900, 45892, 27908, 27915, 27919, 10549",
    "CSDb group Censor Design record (BaseCountry Sweden, Grouptypes Cracker/Demo/Fixing/Import Group/Magazine Staff, founded 1989-06-28), fetched via scripts/lib/csdb-client.js type=group id=2310, used to confirm native-C64 platform",
    "2026-07-31 web search for a 'Censor Digi' CSDb tool/editor release (none found; only unrelated Censor Design tools Pixcen and C6510 turned up): https://csdb.dk/release/?id=149752 (Pixcen), https://csdb.dk/release/?id=256566 (C6510)",
    "Lemon64 forum, 'Digitised speech on C64' thread, post by TMR confirming the Wonderland-series routine used 4-bit samples (distinct from Censor_8bit_Digi): https://www.lemon64.com/forum/viewtopic.php?p=164881",
    "Lemon64 forum search performed but returned no further detail on this specific routine's coder/format: 'SID files with digital samples?' https://www.lemon64.com/forum/viewtopic.php?t=72046 ; Wonderland XII (2013) discussion https://www.lemon64.com/forum/viewtopic.php?t=48956 (mentions Swallow's 16kHz digi upgrade for Wonderland XII/XIV — the separately-tagged Censor_Digi/16khz sibling, not this tag)"
  ]
}
```

## Overview

Censor Digi is the local project's grouping of two raw SIDId-adjacent tags,
`Censor_Digi_1` and `Censor_Digi_2`, found on 14 files by 2 composers: mostly
**Fredrik Ternell (Swallow)** of the Swedish group **Censor Design**, with 2
collab tracks and 1 solo track by fellow Censor Design member **Tomas Danko**.
Neither tag has a SIDId entry (unusual — the sibling `Censor_8bit_Digi_1`/`_2`
tags do), so everything known here comes from this project's own per-file
composer data plus CSDb's release history for the "Wonderland" demo series the
tagged files come from. A full 2026-07-31 census of all 14 files' own CSDb
`Released` fields puts earliest attested use at 1989 (Wonderland IV part 1,
CSDb release 625) and latest at 1996 (a Bouncy Balls RCA intro reusing the
routine outside the demo series), correcting an earlier spot-checked "1990"
figure. A Lemon64 forum post independently confirms the Wonderland-series
routine used 4-bit samples, distinct from the sibling 8-bit routine. This
reads as an in-house digi/sample routine used across a Swedish group's demos
(and one commercial game reuse), not a distributed editor — no CSDb tool
release or source archive was found for it, re-confirmed this pass.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **no SIDId documentation at all** for
either raw tag (contrast with the 8-bit sibling, which has one); the
**_1 vs _2 chronology overlaps within a single release** (Wonderland IX, 1992
— part 3 tagged _1, part 9 tagged _2), which argues against a clean "_2
replaced _1" story and toward "two configurations of one routine" instead,
though this is inference from usage pattern, not a byte-level check; and the
**cluster hypothesis** (that Censor_Digi / Censor_Digi/16khz / Censor_8bit_Digi
are all one underlying routine) is NOT supported by direct evidence — same
author, but SIDId itself treats them as separate signatures with no
cross-reference, so no `edges` were asserted to either sibling.

## Disassembly notes

None done. No source, format spec, or disassembly was found publicly for this
routine.

## Verification

Not verified — Tier 1/2 (identity, usage, provenance) only. `status: stub`.
No init/play/memory-map facts were asserted; all Tier 3 fields are `TODO`.

## Sources

See the `sources` array — deepsid_dl/sidid.nfo, this project's own
`data/composers/*.json` aggregation, `data/players.json`, and CSDb group/
scener/release pages used to establish the Censor Design / Swallow / Tomas
Danko chronology.
