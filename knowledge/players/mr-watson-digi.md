# Mr Watson Digi (player routine)

```json
{
  "id": "mr-watson-digi",
  "name": "Mr Watson Digi (player routine)",
  "aliases": ["Mr_Watson_Digi"],
  "authors": ["C. Nussdorfer (Mr Watson)"],
  "released": "1991 (The Ancient Temple) — confirmed for BOTH tagged files via each SID entry's own CSDb `Released` field: csdb.dk/sid/?id=29178 'Airdance IV - Chicken MC' = \"1991 The Ancient Temple\"; csdb.dk/sid/?id=53762 'Megablast (part 3)' = \"1991 The Ancient Temple\" (used in release id 6833 'Megablast', ReleaseMonth 1 ReleaseYear 1991)",
  "status": "stub",
  "platform": "Native C64, embedded in-demo routine, not a distributed editor/tool — confirmed via CSDb webservice: 'Mr Watson' is scener id 2514 (Austria, CSDb Handle id 2524), FreelanceFunctions = 'Coder' (not Musician), and his only CSDb-credited releases are demo/intro Code credits (Airdance IV id 3205, Megablast id 6833, Megablast II id 6835, Lazer Link id 40059) plus one unrelated 1988 machine-code monitor tool 'Maschinensprache - Editor' (csdb.dk release id 173896, AKA 'MSE Lader V1.0') — no music editor/player tool release exists under his handle",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "AUTHOR IS NOT THE COMPOSER FOLDER OWNER: both files carrying this tag live in composer 'Sir' (Helmut, Austria)'s HVSC folder (data/composers/sir.json), but both are explicitly co-credited 'C. Nussdorfer (Mr Watson) & Sir' — 'Airdance IV - Chicken MC' (CSDb sid id 29178, released 1991 by The Ancient Temple) and 'Megablast (part 3)' (CSDb sid id 53762). This is the SIDId/Player-ID tag for Nussdorfer's contribution, distinct from Sir's own (untagged, player field empty) contributions in the same folder — the two collaborated, and only Nussdorfer's routine was fingerprinted with a name.",
    "NO SEPARATE COMPOSER PROFILE EXISTS in this project's local dataset for C. Nussdorfer / 'Mr Watson' — he appears ONLY as a co-author string inside Sir's composer JSON, never as his own data/composers/*.json entry. No CSDb scener page for 'Mr Watson' or 'Nussdorfer' was found in this pass (a web search for a c64.ch/csdb.dk scener match came up empty against Austrian sceners specifically).",
    "'DIGI' LABEL NOT INDEPENDENTLY CONFIRMED: unlike Silas_Warner_Digi or Zeta_Digi in this same batch, no CSDb credit line, STIL comment, or SIDId note was found describing actual sample/digi playback for this specific tag — the CSDb SID entry for 'Airdance IV - Chicken MC' lists only the composer credit, no 'Sampling' role or technical note. Per this KB's core rule ('digi by name is not evidence'), this card does NOT assert confirmed sample-playback technique; the '_Digi' suffix is treated as SIDId/Player-ID's naming convention only, unverified as to actual mechanism.",
    "Both known files are credited to the same releasing group, The Ancient Temple, and share the same composer pairing (Nussdorfer + Sir) — consistent with a small, closed collaboration rather than a published tool ever used by anyone outside that pairing, in this local dataset.",
    "'Mr Watson' DOES have a CSDb scener page after all (id 2514, Handle id 2524, AKA 'Mr. Watson', Austria) — the earlier pass's web search simply failed to surface it; found this round via the CSDb webservice's own Credit/UsedIn expansion from the two SID entries, not a fresh web search. His CSDb FreelanceFunctions is 'Coder', and every one of his own CSDb-credited releases is a Code credit on a TAT demo/intro, plus one 1988 machine-code monitor tool unrelated to music ('Maschinensprache - Editor', release id 173896) — no music editor/player tool release exists under his handle, which is why `platform` is now stated as an embedded in-demo routine rather than left fully TODO.",
    "'Airdance IV - Chicken MC' (sid id 29178) is also used in a second release, 'Duck Song' AKA 'Duck Song Digi TAT' (csdb.dk release id 195442, no year/credits available at depth 1) — the AKA's own use of 'Digi' is a mild secondary data point but NOT treated as confirmation of the sample-playback mechanism per this KB's rule; not investigated further as it falls outside this pass's three recorded gaps (released, platform, csdb_release)."
  ],
  "sources": [
    "Local dataset: data/composers/sir.json — 2 files tagged Mr_Watson_Digi ('Airdance IV - Chicken MC' csdb sid id 29178, 'Megablast (part 3)' csdb sid id 53762), both co-authored 'C. Nussdorfer (Mr Watson) & Sir'; see knowledge/COVERAGE.md row #126 (2 files). Census: both of the 2 tagged files checked directly against sir.json's folder array in this pass.",
    "data/sidid.json: no entry for 'Mr_Watson_Digi' (checked, absent)",
    "data/players.json: no entry matching 'Watson' (checked, absent) — no dedicated tool/player release recorded",
    "CSDb webservice type=sid id=29178 (https://csdb.dk/sid/?id=29178) — 'Airdance IV - Chicken MC', Released='1991 The Ancient Temple' (tune's own Released field, not a UsedIn release year)",
    "CSDb webservice type=sid id=53762 (https://csdb.dk/sid/?id=53762) — 'Megablast (part 3)', Released='1991 The Ancient Temple'; UsedIn release id 6833 'Megablast', ReleaseMonth=1 ReleaseYear=1991, released by group The Ancient Temple (group id 156, Austria)",
    "CSDb webservice type=scener id=2524 (https://csdb.dk/scener/?id=2524) — Handle 'Mr Watson' AKA 'Mr. Watson', scener id 2514, Country Austria, FreelanceFunctions='Coder'; MemberOf The Ancient Temple (group id 156) and Cyberpunk (group id 9552, ex-member both); Credits list Code on release ids 3205 (Airdance IV), 6833 (Megablast), 6835 (Megablast II), 40059 (Lazer Link), and Released list includes tool release id 173896 'Maschinensprache - Editor' (1988, C64 Tool, AKA 'MSE Lader V1.0')",
    "CSDb webservice type=release id=173896 (https://csdb.dk/release/?id=173896) — confirms 'Maschinensprache - Editor' is a standalone 1988 C64 tool, unconnected to music/SID playback"
  ]
}
```

## Overview

`Mr_Watson_Digi` is the Player-ID tag for **C. Nussdorfer**'s (handle "Mr
Watson", CSDb scener id 2514, Austria) contribution to two collaborative
tunes with the Austrian composer **Sir** (Helmut) — "Airdance IV - Chicken
MC" and "Megablast (part 3)", both confirmed released in 1991 by the group
**The Ancient Temple** via each SID entry's own CSDb `Released` field. Both
known files live in Sir's own HVSC folder but are explicitly co-credited to
both musicians; only Nussdorfer's routine carries this named tag, while
Sir's own contributions in the same folder have no player tag at all.
CSDb's own webservice records Mr Watson's `FreelanceFunctions` as "Coder",
not "Musician" — his only credited releases are Code credits on TAT
demos/intros (Airdance IV, Megablast, Megablast II, Lazer Link) plus one
unrelated 1988 machine-code monitor tool, with no dedicated music
editor/player release under his handle, which is why `platform` is recorded
as an embedded in-demo routine. No independent confirmation of an actual
digi/sample-playback technique was found for this specific tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the tag's author is not the
composer-folder owner (a real collaboration, not a misattribution); no
separate CSDb/composer profile exists for Nussdorfer in this project's
dataset; and — per this KB's core rule — the "_Digi" name is **not** treated
as confirmation of sample playback absent independent evidence, which was not
found here.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(co-authorship, exact 2-file usage, release group/year, and coder-not-musician
role, all from CSDb). No SIDId entry exists for this tag, and no dedicated
CSDb tool/player release exists for "Mr Watson", so `csdb_release` stays
`null`. No runtime behaviour has been confirmed.

## Sources

See the `sources` array — local dataset aggregation plus CSDb webservice
lookups (both SID entries, the scener/handle page, and the one unrelated tool
release).
