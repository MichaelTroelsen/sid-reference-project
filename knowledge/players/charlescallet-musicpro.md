# CharlesCallet/MusicPro (player routine)

```json
{
  "id": "charlescallet-musicpro",
  "name": "CharlesCallet/MusicPro (player routine)",
  "aliases": ["CharlesCallet/MusicPro"],
  "authors": ["Charles Callet"],
  "released": "TODO: SIDId gives no year for the C64-side routine; the Amstrad CPC tool it is named after ('Music Pro') was released 1987 by Callet's own company Music Logiciel — see quirks, these are not confirmed to be the same code",
  "status": "stub",
  "platform": "Amstrad CPC tool 'Music Pro' (1987, Music Logiciel) had NO official C64 release — but per VGMPF's Charles Callet biography, Callet 'had drivers for various platforms including Commodore 64 ... for personal use' though he 'did not release a dedicated editor' for those systems. The 4 locally-tagged C64 SID files are consistent with exactly that: a personal C64 player driver of his own, styled after/named for his released CPC editor, never packaged as a standalone C64 tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's reference field points at cpcrulez.fr, an AMSTRAD CPC documentation site — NOT a C64 source: data/sidid.json byTag['CharlesCallet/MusicPro'] = {name:'Music Pro', author:'Charles Callet', reference:'https://cpcrulez.fr/applications_music-music-pro.htm?t=VA=='}. Fetching that page confirms 'Music Pro' is a French Amstrad CPC music editor released 1987 by Callet's own company Music Logiciel, sold on tape/disk, and explicitly states Callet made 'no C64 editor, as he thought there was no market.'",
    "DESPITE THAT, ALL 4 LOCALLY-TAGGED FILES ARE GENUINE C64 SIDS by Charles Callet himself (data/composers/charles-callet.json: 'Bob Moran - Rittertum', 'Bob Moran - Science Fiction', 'Iznogoud', 'Passengers on the Wind II' — the latter two matching Infogrames game titles ('Les passagers du vent', 'Iznogoud') that the same VGMPF-sourced research says Callet scored). This is resolved, not contradictory: VGMPF's Callet biography separately states he 'had drivers for various platforms including Commodore 64 ... for personal use' but never released a packaged C64 editor — i.e. this SIDId tag fingerprints Callet's own unreleased personal C64 player, presumably styled after his released CPC tool of the same name, not a ported/released version of Music Pro itself.",
    "Single-composer tag (4 of 4 files by Callet) — the classic personal-routine signature, consistent with the 'unreleased C64 editor' reading above.",
    "A separate plain tag 'Charles_Callet' (1 file, see knowledge/players/charles-callet.md) also exists in this dataset for the same composer — no source confirms whether it is the same underlying routine or a different one; recorded as a distinct SIDId signature, not merged."
  ],
  "sources": [
    "data/sidid.json byTag['CharlesCallet/MusicPro']: name 'Music Pro', author 'Charles Callet', reference https://cpcrulez.fr/applications_music-music-pro.htm?t=VA==",
    "cpcrulez.fr — 'Music Pro' Amstrad CPC editor page (1987, Music Logiciel, sequencer-based, 'no C64 editor, as he thought there was no market'): https://cpcrulez.fr/applications_music-music-pro.htm?t=VA==",
    "VGMPF wiki, Music Pro (platform, release, and Callet's cross-platform personal-use drivers note): https://www.vgmpf.com/Wiki/index.php?title=Music_Pro",
    "VGMPF wiki, Charles Callet: https://www.vgmpf.com/Wiki/index.php/Charles%20Callet",
    "64 NOPs (French), 'Les logiciels de composition musicale sur CPC': https://64nops.wordpress.com/2017/12/29/les-logiciels-de-composition-musicale-sur-cpc/",
    "Local dataset: data/composers/charles-callet.json — 4 files tagged 'CharlesCallet/MusicPro'; see knowledge/COVERAGE.md row #39 (4 files)"
  ]
}
```

## Overview

`CharlesCallet/MusicPro` is SIDId's tag for a C64 player routine credited to
French musician **Charles Callet**, named after his real, released **Amstrad
CPC** editor "Music Pro" (1987, his own company Music Logiciel). Music Pro
itself never had an official C64 release — but independent research (VGMPF)
notes Callet had personal-use drivers for several other platforms including
the C64, without ever packaging a dedicated C64 editor. The 4 locally-tagged
C64 files (all by Callet, including two matching Infogrames game titles he is
documented to have scored) are consistent with exactly that: his own unreleased
C64 player, presumably styled after or named for his CPC tool, not a port of
Music Pro itself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the SIDId reference URL points to a
CPC-only tool with no C64 release, which initially looks contradictory —
resolved via independent evidence that Callet maintained unreleased,
personal-use C64 drivers separately from his packaged CPC editor.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public C64 source or
disassembly located (and none would be expected, given Music Pro itself was
never released for the C64).

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
established from the cached SIDId entry and cross-platform web research.

## Sources

See the `sources` array — the cached SIDId entry, cpcrulez.fr, VGMPF's Music
Pro and Charles Callet pages, 64 NOPs, and local composer-file aggregation.
