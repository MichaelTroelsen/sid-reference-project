# Groo/Psygon

```json
{
  "id": "groo-psygon",
  "name": "Groo/Psygon",
  "aliases": ["Groo/Psygon"],
  "authors": ["Claus Leth Gregersen (Groo)"],
  "released": "1988 (census of all 4 tagged files: each carries CSDb 'Released: 1988 Mechanix' — earliest/only compositional attestation, not a tool-release date; separately the plausible tool match 'Psynus V1.0' is also CSDb-dated 1988 — see quirks)",
  "status": "stub",
  "platform": "Native C64 tool (not a cross-platform editor) — if this tag is 'Psynus', both CSDb releases V1.0 and V1.1 are typed 'C64 Tool'; not independently confirmed as the exact code behind this Player-ID tag",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has only an AUTHOR field ('Claus Leth Gregersen (Groo)') — no NAME, reference, or comment; confirmed no `reference`/`comment` key exists in data/sidid.json's byTag['Groo/Psygon'], so `csdb_release` is correctly null, not an unresearched gap.",
    "STRENGTHENED (still not confirmed) LEAD: CSDb lists TWO C64 Tool releases named 'Psynus' from group Psygon: V1.0 (release id 185499, dated 1988, code credited to 'Groo of Mechanix and Psygon' and 'Spe of Mechanix and Psygon', music by Matt Gray) and V1.1 (release id 126610, undated, co-released with The Last Generation 1945, code: Groo + Spe, bug-fix by The Generator). V1.0's exact group-pairing for both coders ('of Mechanix and Psygon') matches this tag's dual-group-style name ('Groo/Psygon') more closely than V1.1, and its 1988 date matches the 4 tagged files' own 1988 dates. This is a converging, not a decisive, lead — no CSDb page or other source directly states 'Psynus is the Groo/Psygon Player-ID routine', so it is NOT set as the card's `name` or `csdb_release`.",
    "Census of all 4 tagged files (Axel_F, Broken_Limits, Mechanix_Introtune, Oh_l_Amour; CSDb sid ids 13780-13783): every one carries CSDb field `Released: '1988 Mechanix'` — i.e. attributed to the Mechanix group, not Psygon, at the point of composition. Groo was a member of both Mechanix (joined 1988) and Psygon in 1988 per his CSDb scener profile, so this is not a contradiction of the Psygon-tool lead, just a reminder that the tag name reflects the routine's own group, not necessarily each tune's release group.",
    "All 4 locally-tagged files are by the same composer (Groo) — consistent with a personal or small-group routine.",
    "Two other files by Groo in the same HVSC folder use a DIFFERENT, already-distinct player tag ('Sound-Tracker_64' — CSDb tool release id 699, also a Mechanix release from 1988) — confirms Groo/Psygon is not simply a mislabelling of Sound-Tracker '64."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Groo/Psygon'], author only)",
    "CSDb release 'Psynus V1.0' (Psygon; code: Groo, Spe; music: Matt Gray; 1988): https://csdb.dk/release/?id=185499",
    "CSDb release 'Psynus V1.1' (Psygon / The Last Generation 1945; code: Groo, Spe): https://csdb.dk/release/?id=126610",
    "CSDb sid entries (webservice type=sid): id 13780 Axel_F, 13781 Broken_Limits, 13782 Mechanix_Introtune, 13783 Oh_l_Amour — all 'Released: 1988 Mechanix' (queried via scripts/lib/csdb-client.js)",
    "CSDb scener 'Groo' (webservice type=scener, id 2071): member of Mechanix (joined 1988) and Psygon",
    "Local dataset: 4 files tagged Groo/Psygon, 1 composer (Groo) — data/composers/groo.json"
  ]
}
```

## Overview

`Groo/Psygon` is SIDId's tag for a routine attributed to **Claus Leth
Gregersen**, handle **Groo**, a member of the Psygon demogroup (also
Mechanix, Mega Soft Incorporated). SIDId itself gives author only, no
name/reference. Two CSDb tool releases named "Psynus" (V1.0, 1988, and
V1.1, undated) by group Psygon, both coded by Groo and Spe, are a
plausible match for the tool behind this tag — V1.0 credits both coders
as "of Mechanix and Psygon", echoing this tag's naming style, and is
CSDb-dated 1988, the same year as all 4 locally-tagged files — but no
source directly states the identification, so it remains a lead, not a
confirmed fact, and platform/released are recorded accordingly (native
C64 tool, 1988) without setting `csdb_release`. All 4 locally-tagged
files (a full census) are by Groo himself and each carries CSDb
`Released: 1988 Mechanix`.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives author only, no
CSDb reference — `csdb_release: null` is a confirmed absence, not an
unresearched gap; (2) a strengthened but still unconfirmed lead ties this
tag to the CSDb-listed tool "Psynus" (V1.0, 1988, is the closer match of
the two Psynus releases); (3) all 4 tagged files, censused, carry CSDb
`Released: 1988 Mechanix`, giving a solid compositional-attestation year
even though no tool-release date is confirmed; (4) single-composer
concentration (4/4 files); (5) Groo's other files use a distinct,
separately-tagged player ("Sound-Tracker_64"), ruling out a mix-up.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found.

## Verification

Not verified. Seeded from `data/sidid.json`, a full census (4/4) of
`data/composers/groo.json`'s tagged files cross-checked against CSDb's
`type=sid` webservice, and two CSDb `type=release`/`type=scener` lookups.
`status: stub` (Tier 1+2 only; no disassembly, no Tier 3 field touched).

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb releases 185499 and
126610, CSDb sid entries 13780-13783, CSDb scener 2071, and the local
composer aggregation.
