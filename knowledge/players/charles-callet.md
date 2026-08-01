# Charles_Callet (player routine)

```json
{
  "id": "charles-callet",
  "name": "Charles_Callet (player routine)",
  "aliases": ["Charles_Callet"],
  "authors": ["Charles Callet"],
  "released": "No player release year exists for this signature — 'Charles_Callet' has no data/sidid.json metadata entry (name/author/reference) and no known standalone C64 tool. The sole tagged file is censused (not sampled) against CSDb's own per-file 'Released' field: 'Hostages' (csdb_id 1489) = 1989 Infogrames. This is a first-use attestation for the one file carrying the tag, not a player release date (per EXTRACTION-TEMPLATE guidance not to promote a first-use year into `released`).",
  "status": "stub",
  "platform": "No packaged C64 tool release found for this specific signature. VGMPF's Charles Callet page (fetched directly) confirms he composed on Amstrad CPC with his own 'Music Pro' editor and then 'transferred the compiled music files to the C64, for which a driver existed' — but that statement describes the separately SIDId-tagged 'CharlesCallet/MusicPro' signature (see sibling card charlescallet-musicpro.md), not necessarily this one: SIDId fingerprints 'Charles_Callet' as a DIFFERENT byte signature, and nothing confirms whether 'Hostages' uses the same C64 driver VGMPF references or an unrelated routine. CSDb's own scener credit list for Callet (csdb_id 12666, webservice depth=4) contains zero 'Music Editor'/'Player Routine'-type credits (only Music credits for tunes), and data/players.json has no Callet entry — consistent with no packaged C64 tool ever existing under his name for either signature.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "1-FILE TAG, SAME COMPOSER AS A SEPARATELY-TAGGED SIDId SIGNATURE: the sole locally-tagged file ('Hostages', csdb id 1489, data/composers/charles-callet.json) is by Charles Callet, who also has 4 files under the distinct tag 'CharlesCallet/MusicPro' (see knowledge/players/charlescallet-musicpro.md). SIDId's fingerprint scanner recognises these as two DIFFERENT byte signatures on the same author's disk — this card does NOT merge them, since no source confirms whether 'Hostages' uses an earlier/later/alternate version of the same routine or something unrelated.",
    "No SIDId entry exists for the plain 'Charles_Callet' tag itself (data/sidid.json checked, absent) — unlike 'CharlesCallet/MusicPro', which does have a SIDId record naming the Amstrad CPC tool 'Music Pro' it is styled after (see the sibling card).",
    "Single-file, single-composer — the minimal personal-routine signature; not inflated beyond what the one file supports.",
    "CSDb 'Released' field for the one tagged file, 'Hostages' (csdb_id 1489, queried via csdb.dk webservice type=sid), is '1989 Infogrames' — a first-use attestation for the tag, not a player release date, since no C64 tool release of any 'Charles_Callet'-named routine exists.",
    "csdb_release confirmed null, not merely unresearched: Charles Callet's own CSDb scener credit list (csdb.dk webservice type=scener, id=12666, depth=4) was fetched in full and contains only 'Music' credits (tune-by-tune) — zero 'Music Editor'/'Player Routine'/'Code' credits for any C64 tool, matching the earlier finding (see sibling card) that data/players.json also has no Callet entry.",
    "VGMPF's Charles Callet page, fetched directly, states he composed on his Amstrad CPC editor 'Music Pro' and 'transferred the compiled music files to the C64, for which a driver existed' — but this describes the separately-tagged 'CharlesCallet/MusicPro' SIDId signature (a different byte fingerprint per SIDId), not confirmed to be this 'Charles_Callet' signature. The two remain un-merged for lack of direct evidence either way."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Charles_Callet' (checked, absent)",
    "Local dataset: data/composers/charles-callet.json — 1 file tagged 'Charles_Callet' ('Hostages', csdb id 1489); see knowledge/COVERAGE.md row #104 (1 file)",
    "knowledge/players/charlescallet-musicpro.md (status: stub) — sibling card for the same composer's other, SIDId-attested tag; cited for corroborating context, not edited",
    "CSDb webservice (csdb.dk/webservice/?type=sid&id=1489), queried via scripts/lib/csdb-client.js: 'Hostages' Released field = '1989 Infogrames'",
    "CSDb webservice (csdb.dk/webservice/?type=scener&id=12666&depth=4), queried via scripts/lib/csdb-client.js: Charles Callet's full credit list, no Editor/Player-type credit found",
    "data/players.json — checked for any Callet/Charles_Callet player entry; none found",
    "VGMPF wiki, Charles Callet (fetched directly): https://www.vgmpf.com/Wiki/index.php/Charles_Callet — 'no market for the editor on the C64' (1988) and 'transferred the compiled music files to the C64, for which a driver existed'"
  ]
}
```

## Overview

`Charles_Callet` is a bare-name SIDId signature tag matching a single locally
tagged file, "Hostages" (csdb id 1489), by French musician **Charles Callet**.
No SIDId fingerprint entry exists for this exact tag, and no C64 tool release
or player-type credit exists for Callet on CSDb (his full scener credit list,
depth 4, contains only tune-by-tune Music credits). The file's own CSDb
`Released` field is 1989 (Infogrames) — a first-use attestation for the tag,
not a player release date. Callet also has a separately-tagged, SIDId-attested
signature, `CharlesCallet/MusicPro` (see
`knowledge/players/charlescallet-musicpro.md`); VGMPF documents that Callet
"transferred the compiled music files to the C64, for which a driver existed"
for his Amstrad CPC "Music Pro" work, but that statement is tied to the
`CharlesCallet/MusicPro` signature, not confirmed for this one — SIDId
fingerprints them as different byte signatures, so the two remain un-merged.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is deliberately kept separate from
the sibling `CharlesCallet/MusicPro` card — no evidence merges them.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** A single-file, single-composer identity
stub; no runtime fact confirmed.

## Sources

See the `sources` array — local composer-file aggregation and the sibling
`charlescallet-musicpro.md` card (cited, not edited).
