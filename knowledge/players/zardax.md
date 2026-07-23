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
  "released": "Sound Killer (Zardax/SoundKiller tag): V3.6B Mar 1991, V3.7 10 Jul 1991 (both via Topaz Beerline, from CSDb release 99054 and Demozoo scener profile). Bare 'Zardax' personal routine: no formal release; earliest catalogued tune is 'Animotion' (1991, csdb 44530) — the routine was embedded per-tune with no consistent base address across files.",
  "status": "stub",
  "platform": "Native C64 tools. The 'Zardax/SoundKiller' tag corresponds to a formally released, packaged tool ('Sound Killer' + companion utilities TuneSqueezer/TuneRelocator) co-authored with Sami Ilmonen (Scapegoat). The bare 'Zardax' tag reads as an undocumented personal/in-house routine, almost entirely used on the author's own tunes — no editor or tool release found for it.",
  "csdb_release": 99054,

  "memory": {
    "load_address": "TODO: not a single fixed address. PSID header survey (7 tunes, see quirks): Zardax/SoundKiller-tagged tunes consistently use play = init + 3, with load addresses varying ($1000, $4800 observed). Bare Zardax-tuned tunes have no consistent base address ($0808, $1000, $E300 observed).",
    "zero_page": "Sound Killer only: DeepSID's player database documents 8 bytes of zero-page usage — $35-$36 + $FA-$FF (source: data/players.json, 'Sound Killer v3.x', csdb_id 99054 — this project's cached copy of DeepSID's player spec, NOT verified here by disassembly/trace). The bare 'Zardax' personal routine's zero-page usage is undocumented — TODO.",
    "layout": "TODO: no public disassembly or documentation found for either tag"
  },
  "entry": {
    "init": "TODO: PSID header survey shows init = load address in all 7 sampled tunes (both tags), but these are embedded-per-tune copies, not canonical player entry points. Not disassembly-verified.",
    "play": "TODO: PSID headers show play = init + 3 in Zardax/SoundKiller tunes and some bare Zardax tunes; other bare Zardax tunes use +6 or +16 offsets. Not disassembly-verified."
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
    "TWO DISTINCT RAW TAGS, NOT PROVEN TO BE THE SAME CODE. This card covers both because SIDId groups them under the same author name, but treat them as separate signatures until a disassembly says otherwise: 'Zardax' (71 files) vs 'Zardax/SoundKiller' (42 files). No edge is asserted between them in the `edges` block for exactly this reason.",
    "COMPOSER CONCENTRATION IS THE TELL. Aggregating data/composers/*.json: the bare 'Zardax' tag is used on 70 of its 71 files by Zardax himself (1 file by Oeie_Karl_Bjoernar) — a textbook personal/in-house routine, almost certainly never published as a standalone tool. 'Zardax/SoundKiller' is spread across 4 composers (Coax 24, Antti Piirainen 16, Ati 1, Touldie 1) — consistent with an actually distributed, third-party-usable tool.",
    "'Sound Killer' is a real, dated CSDb release. V3.7 (10 Jul 1991, CSDb 99054) bundles a player + TuneSqueezer V1.3 + TuneRelocator V3.0, published by Topaz Beerline. V3.6B (Mar 1991, per Demozoo scener profile) is also credited to Scapegoat & Zardax. Both are credited to 'Scapegoat (Studio 3, Topaz Beerline) and Zardax (Elysion, Origo Dreamline)' under Code. Demozoo's production page for V3.6B lists finer credits: Scapegoat — Code (intro, editor) + Graphics (additional); Zardax — Code (player); d'Arc — Graphics (giant charset); music by Coax (Mikko Paronen), to whose memory it was dedicated.",
    "PSID HEADER OBSERVATION: 7 Zardax/SoundKiller-tuned tunes sampled (Coax x3, Antti Piirainen x2, Ati x1, Touldie x1): all use play = init + 3, with load addresses varying ($1000 in 6 tunes, $4800 in 1). 5 bare Zardax-tuned tunes sampled: load/init/play vary ($1000/$1000/$1003, $1000/$1000/$1006, $0808/$0808/$0818, $E300/$E300/$E303, $1000/$1000/$1003). These are PSID header fields, NOT disassembly-confirmed entry points; offsets alone do not prove shared code.",
    "No public source code or format documentation was found for either tag during this pass — all Tier 3 fields are honestly TODO.",
    "Ari-Pekka Paljakka (Zardax) is a Finnish (later Spain-based) composer/scener active from 1988 onward — groups include Origo Dreamline, Elysion, Albion, Brains, Frame, Artline Designs (per Demozoo). Demozoo lists 184 productions across C64, Amiga, Atari ST, and other platforms. He was ranked 20th best musician in Revealed #1 (Sep 1993). This is composer biography, not player provenance; it does not establish when the bare 'Zardax' routine first appeared."
  ],
  "sources": [
    "CSDb release (Sound Killer V3.7 + TuneSqueezer V1.3 + TuneRelocator V3.0, 10 Jul 1991, Scapegoat & Zardax, pub. Topaz Beerline): https://csdb.dk/release/?id=99054",
    "Demozoo scener profile (Zardax): https://demozoo.org/sceners/2806/ — confirms V3.6B (Mar 1991) and V3.7 (Jul 1991) Sound Killer releases, finer credits for V3.6B, and composer biography",
    "sidid.nfo (cadaver/sidid project) entries 'Zardax' and 'Zardax/SoundKiller': https://github.com/cadaver/sidid/blob/master/sidid.nfo — cached locally as data/sidid.json byTag['Zardax'] / byTag['Zardax/SoundKiller']",
    "data/players.json curated entry 'Sound Killer v3.x' (csdb_id 99054, zero_pages field) — this repo's cached copy of DeepSID's player database (deepsid.chordian.net)",
    "Local dataset: file counts aggregated from data/composers/*.json — 71 'Zardax' + 42 'Zardax/SoundKiller' = 113 total files; composer breakdown: Zardax 70, Oeie_Karl_Bjoernar 1 (bare tag); Coax 24, Antti Piirainen 16, Ati 1, Touldie 1 (SoundKiller tag)",
    "CSDb SID entries (PSID header survey): Anastasia (6148), A Quiet Life (6149), Black Christmas (6150), Autentic (23342), Basebeat (23343), For Highlife (29547), Delicious 3 tune 2 (52175) — all Zardax/SoundKiller; Animotion (44530), Adtestsongcrap (32624), After the Party (32710), Alka (32625), Anglia Spirit (32626), Proven Futile (32665) — bare Zardax",
    "Demozoo production page for Soundkiller V3.6B: https://demozoo.org/productions/364415/"
  ]
}
```

## Overview

"Zardax" here covers two related-but-distinct Player-ID signatures credited to
the same Finnish scener, **Ari-Pekka Paljakka (handle Zardax)**: the bare
`Zardax` tag, which composer-concentration data shows is almost entirely used
on his own tunes (70 of 71 files) and reads as an undocumented personal
routine; and `Zardax/SoundKiller`, a formally released C64 tool -- **Sound
Killer** -- co-authored with **Sami Ilmonen (Scapegoat)**, released in two
known versions (V3.6B in March 1991, V3.7 on 10 July 1991) through Topaz
Beerline, bundled with two companion utilities (TuneSqueezer, TuneRelocator).
Sound Killer sees genuine third-party use in the collection (Coax, Antti
Piirainen, and others), consistent with a distributed tool. Together the two
tags cover 113 files in the local dataset (`data/composers/*.json`).

Zardax contributed the player code to Sound Killer; Scapegoat wrote the editor/
intro (per Demozoo's V3.6B credits). DeepSID's player database documents Sound
Killer's zero-page footprint (8 bytes: `$35-$36 + $FA-$FF`), but this has not
been independently verified by disassembly. No public source code, format
specification, or documentation was located for either the bare Zardax routine
or the Sound Killer release.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points:

1. **Do not assume the two tags are the same code** just because they share an
   author's name -- the composer-concentration split (70/71 files self-authored
   vs. spread across 4 composers) is itself the evidence they are different
   signatures, and no `edges` relationship is asserted without a disassembly.

2. **PSID headers do not confirm shared code**: Zardax/SoundKiller tunes
   consistently use `play = init + 3` in PSID headers, which some bare Zardax
   tunes also do -- but the bare Zardax routine's init/play addresses vary
   widely across tunes (`$0808/$0818`, `$1000/$1006`, `$E300/$E303`),
   consistent with a per-tune embedded routine rather than a fixed-address
   distributed player.

## Disassembly notes

None performed. No public source code, format spec, or prior disassembly was
located for either tag during this research pass. The only runtime-adjacent
fact available is DeepSID's cached zero-page note for the Sound Killer release
(`data/players.json`) -- reproduced above with its caveat that it was not
independently verified here. PSID header observations are documented in the
`sources` array but are not disassembly-confirmed entry points.

A future pass would need to identify a representative `.sid` for each tag (one
tagged `Zardax`, one tagged `Zardax/SoundKiller`), disassemble from their PSID
init/play vectors, and trace through `sidm2-siddump` to fill the `memory`,
`entry`, `speed`, `data_format`, and `effects` sections.

## Verification

**Not verified -- `status: stub`.** Only identity and provenance facts are
confirmed here: authorship, the Sound Killer CSDb releases and their dates
(March and July 1991), and the composer-usage split between the two tags
(aggregated directly from this repo's `data/composers/*.json`). All Tier 3
fields are `TODO` because no disassembly or public source was available to
fill them successfully. The PSID header observations in the `sources` array
are surface data from CSDb's SID entry pages, not disassembly-confirmed player
entry points.

## Sources

See the `sources` array -- the CSDb Sound Killer release, Demozoo scener and
production pages, the cached SIDId entries for both raw tags, DeepSID's cached
player spec for Sound Killer, this repo's own local file-count/composer
aggregation, and a PSID header survey across 12 CSDb SID entries (7 Sound
Killer-tagged, 5 bare Zardax-tagged) for the PSID header observation quirk.
