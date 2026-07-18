# Mr Watson Digi (player routine)

```json
{
  "id": "mr-watson-digi",
  "name": "Mr Watson Digi (player routine)",
  "aliases": ["Mr_Watson_Digi"],
  "authors": ["C. Nussdorfer (Mr Watson)"],
  "released": "TODO: no explicit year in SIDId (no entry for this tag); both locally-tagged files are credited to the group The Ancient Temple, one confirmed 1991 via its CSDb SID entry",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under 'Mr Watson' — both known uses are collaborations with the composer 'Sir' (Helmut), suggesting an embedded in-tune routine rather than a distributed editor, but not confirmed by a direct citation",
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
    "Both known files are credited to the same releasing group, The Ancient Temple, and share the same composer pairing (Nussdorfer + Sir) — consistent with a small, closed collaboration rather than a published tool ever used by anyone outside that pairing, in this local dataset."
  ],
  "sources": [
    "Local dataset: data/composers/sir.json — 2 files tagged Mr_Watson_Digi ('Airdance IV - Chicken MC' csdb sid id 29178, 'Megablast (part 3)' csdb sid id 53762), both co-authored 'C. Nussdorfer (Mr Watson) & Sir'; see knowledge/COVERAGE.md row #126 (2 files)",
    "data/sidid.json: no entry for 'Mr_Watson_Digi' (checked, absent)",
    "CSDb SID entry https://csdb.dk/sid/?id=29178 — 'Airdance IV - Chicken MC', authors 'C. Nussdorfer (Mr Watson) & Sir', released 1991 by The Ancient Temple, no sampling/digi role or note listed",
    "Web search for a CSDb scener page under 'Nussdorfer' or 'Mr Watson' (Austria) — no confirmed match found in this pass"
  ]
}
```

## Overview

`Mr_Watson_Digi` is the Player-ID tag for **C. Nussdorfer**'s (handle "Mr
Watson") contribution to two collaborative tunes with the Austrian composer
**Sir** (Helmut) — "Airdance IV - Chicken MC" and "Megablast (part 3)", both
released in 1991 by the group **The Ancient Temple**. Both known files live in
Sir's own HVSC folder but are explicitly co-credited to both musicians; only
Nussdorfer's routine carries this named tag, while Sir's own contributions in
the same folder have no player tag at all. No independent confirmation of an
actual digi/sample-playback technique was found for this specific tag.

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
(co-authorship, exact 2-file usage, release group/year from CSDb). No SIDId
entry exists for this tag. No runtime behaviour has been confirmed.

## Sources

See the `sources` array — local dataset aggregation and one CSDb SID-entry
lookup.
