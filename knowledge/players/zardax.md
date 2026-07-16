# Zardax

<!--
  Tier 1 + Tier 2 stub. No disassembly performed. See "Quirks & gotchas" for
  the load-bearing distinction this card makes: two related but NOT proven-
  identical raw Player-ID tags are covered here, not one player.
-->

```json
{
  "id": "zardax",
  "name": "Zardax",
  "aliases": ["Zardax", "Zardax/SoundKiller"],
  "authors": ["Ari-Pekka Paljakka (Zardax)", "Sami Ilmonen (Scapegoat)"],
  "released": "TODO: bare 'Zardax' tag's first release date is unknown (earliest catalogued CSDb tune using it: 'Proven Futile', 1993, Origo Dreamline — https://csdb.dk/sid/?id=32665). The related 'Sound Killer' package (Zardax/SoundKiller tag) was released 10 Jul 1991 (CSDb release 99054).",
  "status": "stub",
  "platform": "Native C64 tool(s), not cross-platform. Two distinct Player-ID signatures are grouped under this one author's name (see quirks): 'Zardax' (bare tag) reads as an undocumented personal/in-house routine, almost entirely used on the author's own tunes; 'Zardax/SoundKiller' is a formally released, packaged tool ('Sound Killer' + companion utilities TuneSqueezer/TuneRelocator) co-authored with Sami Ilmonen (Scapegoat) and used by other composers too.",
  "csdb_release": 99054,

  "memory": {
    "load_address": "TODO: no public disassembly or documentation found for either tag",
    "zero_page": "For the 'Sound Killer' release ('Zardax/SoundKiller' tag) ONLY, DeepSID's curated player database documents 8 bytes of zero-page usage: $35-$36 + $FA-$FF (source: data/players.json, entry 'Sound Killer v3.x', csdb_id 99054 — this project's own cached copy of DeepSID's player spec, not verified here by disassembly/trace). The bare 'Zardax' personal routine's zero-page usage is undocumented — TODO.",
    "layout": "TODO: not documented publicly for either tag"
  },
  "entry": {
    "init": "TODO: no PSID header survey or disassembly performed here",
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
    "TWO DISTINCT RAW TAGS, NOT PROVEN TO BE THE SAME CODE. This card covers both because SIDId groups them under the same author name, but treat them as separate signatures until a disassembly says otherwise: 'Zardax' (rank #7 in knowledge/COVERAGE.md, 71 files) vs 'Zardax/SoundKiller' (rank #29, 42 files). No edge is asserted between them in the `edges` block for exactly this reason.",
    "COMPOSER CONCENTRATION IS THE TELL. Aggregating data/composers/*.json: the bare 'Zardax' tag is used on 70 of its 71 files by Zardax himself (1 file by Oeie_Karl_Bjoernar) — a textbook personal/in-house routine, almost certainly never published as a standalone tool. 'Zardax/SoundKiller' is spread across 4 composers (Coax 24, Antti Piirainen 16, Ati 1, Touldie 1) — consistent with it being an actually distributed, third-party-usable tool.",
    "'Sound Killer' is a real, dated CSDb release: 'Sound Killer V3.7 + TuneSqueezer V1.3 + TuneRelocator V3.0', released 10 July 1991, published by Topaz Beerline, credited to 'Scapegoat (Studio 3, Topaz Beerline) and Zardax (Elysion, Origo Dreamline)' (https://csdb.dk/release/?id=99054). It bundles a player plus two separate companion utilities (a size-optimizer and a relocator) — the 'Sound Killer' name is the player component specifically.",
    "No public source code or format documentation was found for either tag during this pass — everything below `platform` in the JSON block is honestly `TODO`, not guessed.",
    "Ari-Pekka Paljakka (Zardax) is a long-active Finnish (later Spain-based) scener/composer — groups include Origo Dreamline, Elysion, Albion, Brains, Frame, Artline Designs (per Demozoo) — with tunes catalogued from 1993 through at least 2019, well past the c.1991 era of the Sound Killer release. This is composer biography, not player provenance; it does not establish when the bare 'Zardax' routine itself first appeared."
  ],
  "sources": [
    "CSDb release (Sound Killer V3.7 + TuneSqueezer V1.3 + TuneRelocator V3.0, 10 Jul 1991, Scapegoat & Zardax, pub. Topaz Beerline): https://csdb.dk/release/?id=99054",
    "sidid.nfo (cadaver/sidid project) entries 'Zardax' and 'Zardax/SoundKiller': https://github.com/cadaver/sidid/blob/master/sidid.nfo — cached locally as data/sidid.json byTag['Zardax'] / byTag['Zardax/SoundKiller']",
    "data/players.json curated entry 'Sound Killer v3.x' (csdb_id 99054, zero_pages field) — this repo's cached copy of DeepSID's player database (deepsid.chordian.net)",
    "Local dataset: knowledge/COVERAGE.md ranks #7 'Zardax' (71 files) and #29 'Zardax/SoundKiller' (42 files); composer breakdown aggregated from data/composers/*.json's per-file `player` tags in this research pass",
    "Demozoo scener profile (Zardax / Artline Designs): https://demozoo.org/sceners/2806/",
    "CSDb SID entry showing an early dated Zardax tune ('Proven Futile', 1993, Origo Dreamline): https://csdb.dk/sid/?id=32665"
  ]
}
```

## Overview

"Zardax" here covers two related-but-distinct Player-ID signatures credited to
the same Finnish scener, **Ari-Pekka Paljakka (handle Zardax)**: the bare
`Zardax` tag, which composer-concentration data shows is almost entirely used
on his own tunes (70 of 71 files) and reads as an undocumented personal
routine; and `Zardax/SoundKiller`, a formally released C64 tool — **Sound
Killer** — co-authored with **Sami Ilmonen (Scapegoat)** and released 10 July
1991 through Topaz Beerline, bundled with two companion utilities
(TuneSqueezer, TuneRelocator). Sound Killer sees genuine third-party use in
the collection (Coax, Antti Piirainen, and others), the usage pattern of an
actual distributed tool rather than a personal in-house routine. Together the
two tags cover 113 files in the local dataset (data/composers/*.json).

## Quirks & gotchas

See the `quirks` array. The single load-bearing point: **do not assume the two
tags are the same code just because they share an author's name** — the
composer-concentration split (70/71 files self-authored vs. spread across 4
composers) is itself the evidence they're different signatures, and no
`edges` relationship is asserted between them without a disassembly to confirm
or deny it.

## Disassembly notes

None performed. No public source code, format spec, or prior disassembly was
located for either tag during this research pass. The only runtime-adjacent
fact available is DeepSID's own cached zero-page note for the Sound Killer
release (`data/players.json`) — reproduced above with its caveat that it was
not independently verified here. A future pass would need to identify a
representative `.sid` for each tag (one tagged `Zardax`, one tagged
`Zardax/SoundKiller`) and disassemble from its PSID init/play addresses before
any of the `memory`/`entry`/`data_format`/`effects` TODOs can be filled
honestly.

## Verification

**Not verified — `status: stub`.** Only identity and provenance facts are
confirmed here: authorship, the Sound Killer CSDb release and its 1991 date,
and the composer-usage split between the two tags (aggregated directly from
this repo's `data/composers/*.json` and `knowledge/COVERAGE.md`). Every
runtime field is `TODO` because no disassembly or public source was available
to fill it. This card intentionally does not promote itself past `stub` even
though one cached spec fact (zero-page usage for Sound Killer) exists, per
this project's own ceiling for identity/provenance-only research.

## Sources

See the `sources` array — the CSDb Sound Killer release, the cached SIDId
entries for both raw tags, DeepSID's cached player spec for Sound Killer,
this repo's own local file-count/composer aggregation, and a Demozoo/CSDb
cross-check on the composer's scene history.
