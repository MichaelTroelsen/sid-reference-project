# WizPlayer 1.0

```json
{
  "id": "wizplayer-v1",
  "name": "WizPlayer 1.0",
  "aliases": ["WizPlayer_1.0"],
  "authors": ["Piotr Kuciapski (Wizard)"],
  "released": "No formal tool-release date found for 'WizPlayer 1.0' itself (no dedicated CSDb tool/release page under this name — see platform). The sole tagged file's own CSDb SID entry (type=sid, id 31161, 'Wizard_03.sid') gives Released='1996 Oxygen' — a per-tune attestation, not a tool release date. This is the only file censused (1 of 1).",
  "status": "stub",
  "platform": "Native C64 tool by Piotr Kuciapski (handle Wizard). No CSDb release/tool page found under the name 'WizPlayer 1.0' or 'WizPlayer V1' specifically (CSDb HTML search for 'Wizplayer V1' returned zero true hits — checked 2026-08-01, page loaded successfully HTTP 200, only unrelated 'Latest Releases' sidebar links present). However, a genuine CSDb release DOES exist for the author's related tool: 'Wizplayer V2.0 Relocator' (CSDb release id 97038, type 'C64 Tool', released 1996 by the group Street Children, coder credited as 'Wizard' — CSDb Handle ID 1623, the same Handle ID as this card's composer/author), confirmed via the CSDb webservice (type=release, id=97038) independent of any AI search summary. This is a standalone relocator utility for WizPlayer V2.0 output, not a V1.0 release page, and is not asserted as this card's own `csdb_release` — recorded here only as evidence that the WizPlayer line was a genuinely named, publicly released C64 tool, not purely an in-house/undocumented routine.",
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
    "1 file, 1 composer (Oxygen Wizard, Poland) locally tagged 'WizPlayer_1.0' — matches the SIDId-credited author (Piotr Kuciapski / Wizard) directly: this composer IS the credited author, unlike most other 1-file tags in this batch, which merely borrow or reuse a third party's tool.",
    "SIDId's entry for this tag has only an AUTHOR field — no name, released year, reference, or comment — the same 'thin' entry shape as e.g. [[toaster-digi]]'s SIDId record, consistent with an unpackaged/informally distributed tool.",
    "A sibling SIDId entry 'WizPlayer_2.0' exists for the same author but is NOT in this card's scope (not in the source chunk being carded) and is deliberately not folded in or aliased here. That sibling's own card (knowledge/players/wizplayer-20.md) also found no CSDb tool page under either version name at the time it was researched.",
    "Full census of the single tagged file's own CSDb SID entry (type=sid, id 31161, 'Wizard_03.sid', untitled — CSDb Name '<?>'): Released='1996 Oxygen', LoadAddr=$1000, InitAddr=$1000, PlayAddr=$1003, SIDModel=8580, PAL. Header metadata only, not promoted to Tier 3. Notably identical load/init/play addresses to one of WizPlayer_2.0's 4 files ('Vibrations', also $1000/$1000/$1003, also 1996) — consistent with, but not proof of, a shared or adjacent driver base between the two version tags.",
    "A real CSDb release WAS found for the author's related tool line: 'Wizplayer V2.0 Relocator' (release id 97038, C64 Tool, 1996, group Street Children, coder 'Wizard' = CSDb Handle ID 1623, matching this card's author) — confirmed via the CSDb webservice type=release. This is a relocator utility for WizPlayer V2.0's output specifically, not a V1.0 release, so it is NOT used as this card's own csdb_release; it is recorded to show the line was a real named tool with at least one public release, contradicting an assumption of 'purely informal/undocumented'.",
    "Targeted CSDb HTML search for 'Wizplayer V1' (checked 2026-08-01, page loaded HTTP 200) returned zero true hits — the only release links present were the page's generic 'Latest Releases' sidebar widget, not search matches."
  ],
  "sources": [
    "sidid:WizPlayer_1.0 (author 'Piotr Kuciapski (Wizard)', no name/released/reference/comment) — data/sidid.json",
    "Local dataset: data/composers/oxygen-wizard.json — 1 file ('Wizard_03.sid', csdb_id 31161); knowledge/COVERAGE.md rank #17 (combined with sibling WizPlayer_2.0 in the raw grouping)",
    "CSDb SID entry for the sole tagged file, fetched via CSDb webservice type=sid (scripts/lib/csdb-client.js): https://csdb.dk/sid/?id=31161",
    "CSDb release entry for 'Wizplayer V2.0 Relocator', fetched via CSDb webservice type=release (scripts/lib/csdb-client.js): https://csdb.dk/release/?id=97038 (credited coder Handle ID 1623 'Wizard', matches https://csdb.dk/scener/?id=1623)",
    "CSDb HTML search for 'Wizplayer V1' (csdb.dk/search/?seinsel=all&search=Wizplayer+V1): zero true hits, checked 2026-08-01"
  ]
}
```

## Overview

`WizPlayer_1.0` is a SIDId-attested tag naming **Piotr Kuciapski (Wizard)**
as its author. Unusually for a 1-file tag in this batch, the sole locally
tagged file's composer (Oxygen Wizard) directly matches SIDId's credited
author — the tool's own creator is the one using it here, not a third
party. SIDId's entry is otherwise minimal (author only, no name/year/
reference/comment). A separate `WizPlayer_2.0` SIDId entry exists for the
same author but is out of scope for this card (see `knowledge/players/wizplayer-20.md`).

A full census of the one tagged file (`Wizard_03.sid`, CSDb SID id 31161,
untitled) gives its own CSDb `Released` field as **1996 Oxygen** — a
per-tune attestation, not a formal tool release date; no CSDb release page
named "WizPlayer 1.0" or "WizPlayer V1" was found despite a targeted search
(zero true hits, checked 2026-08-01). A related CSDb release **was** found,
though: `Wizplayer V2.0 Relocator` (CSDb release id 97038, a "C64 Tool"
released 1996 by the group Street Children, coder credited as Handle ID
1623 "Wizard" — the same person), confirmed directly via the CSDb
webservice. That entry is specific to the V2.0 line's relocator utility,
not to this V1.0 tag, so it is not used as this card's own `csdb_release`
— but it establishes that "WizPlayer" was a genuinely named, publicly
released C64 tool line, not purely an undocumented in-house routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) composer-equals-author match;
(2) the sole file's PSID header ($1000/$1000/$1003, 1996) matches one of
WizPlayer_2.0's four files exactly; (3) a real CSDb tool release exists for
the V2.0 relocator utility under the same author, even though none was
found for "V1" specifically.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (SIDId
author, local composer match, a full census of the one tagged file's CSDb
SID entry, and a targeted CSDb release-page search) are confirmed. No
runtime fact was guessed.

## Sources

See the `sources` array — SIDId, local composer data, the tagged file's own
CSDb SID entry, the CSDb release entry for the related V2.0 relocator tool,
and the negative-result CSDb search for "Wizplayer V1".
