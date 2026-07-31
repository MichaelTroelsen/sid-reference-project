# Hansford/Interceptor

```json
{
  "id": "hansford-interceptor",
  "name": "Hansford/Interceptor",
  "aliases": ["Hansford/Interceptor"],
  "authors": ["Graham Hansford"],
  "released": "1984 (Interceptor Software) — CSDb's `Released` field is identical, '1984 Interceptor', on all 4 of the SID entries carrying this tag (ids 14172, 14174, 14175, 14176), confirmed by full census, not a sample",
  "status": "stub",
  "platform": "Native C64 in-house in-game music routine, coded by Graham Hansford himself as staff Coder/Musician at Interceptor Software (Interceptor Micros) — a British C64/multi-platform game developer/publisher active early-1980s to early-1990s per Wikipedia. No dedicated CSDb tool/release entry exists for the player itself, and no editor, manual, or format spec was found on CSDb, Codebase64, Lemon64, or Forum64 — consistent with a per-game hand-coded routine rather than a distributed/titled editor",
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
    "SIDId's entry for this tag has ONLY an AUTHOR field ('Graham Hansford') — no name, no released date, no reference/comment. The absence of a NAME field is consistent with this being an in-house/in-game routine rather than a titled, published tool.",
    "Direct match to the composer's own profile: Graham Hansford's HVSC/DeepSID profile lists focus 'PRO' and affiliation 'Interceptor Software' (data/composers/graham-hansford.json) — i.e. the tag name 'Hansford/Interceptor' exactly matches the composer plus his professional employer, strongly consistent with this being a company in-house player he wrote for Interceptor Software's own C64 games rather than a scene-distributed editor.",
    "Single-composer concentration: all 4 locally-tagged files are by Graham Hansford himself (England, active from 1984, CSDb scener 13854) — expected for a professional in-game player tied to one studio's output.",
    "Not investigated: which specific Interceptor Software titles used this exact player, or whether it differs from any other Hansford-authored in-game routine — no per-game breakdown was researched for this card.",
    "Census of all 4 tagged files (CSDb webservice, type=sid): Caverns of Sillahc (id 14172, LoadAddr $9000/InitAddr $CA50), Trollie Wallie (id 14174, LoadAddr $1300/InitAddr $1A80/PlayAddr $1300), Wallie Goes to Rhymeland (id 14175, LoadAddr $A000/InitAddr $B660/PlayAddr $B663), Wheelin' Wallie (id 14176, LoadAddr $75C0/InitAddr $75C0/PlayAddr $75E0) — every one has a DIFFERENT load/init/play address, which is PSID header metadata (not a disassembly fact) but is consistent with hand-placed, per-game-linked code rather than a fixed relocatable driver binary shared across titles.",
    "A 5th file by Hansford in the same folder, 'Micro Load' (csdb id 14173), carries an EMPTY player tag in the local dataset (not 'Hansford/Interceptor') and was correctly excluded from this card's 4-file count.",
    "No CSDb release/tool entry exists for the player itself under any name search; the 4 CSDb ids found are the games' own SID-tune entries, not a driver/tool page — csdb_release stays null.",
    "Lemon64 and Forum64 searches turned up no threads discussing this routine or Graham Hansford's C64 sound driver specifically; Wikipedia's Interceptor Micros and Trollie Wallie articles confirm the company (native C64 games, 1984, went out of business early 1990s) but do not name a sound programmer or driver."
  ],
  "sources": [
    "sidid:Hansford/Interceptor (author 'Graham Hansford', no name/released/reference/comment) — data/sidid.json",
    "Local dataset: 4 files tagged 'Hansford/Interceptor', all by Graham Hansford — data/composers/graham-hansford.json",
    "data/composers/graham-hansford.json (HVSC profile: England, focus PRO, affiliation 'Interceptor Software', active 1984, CSDb scener 13854)",
    "CSDb webservice type=sid id=14172 'Caverns of Sillahc': Released '1984 Interceptor' — https://csdb.dk/sid/?id=14172",
    "CSDb webservice type=sid id=14174 'Trollie Wallie': Released '1984 Interceptor' — https://csdb.dk/sid/?id=14174",
    "CSDb webservice type=sid id=14175 'Wallie Goes to Rhymeland': Released '1984 Interceptor' — https://csdb.dk/sid/?id=14175",
    "CSDb webservice type=sid id=14176 'Wheelin' Wallie': Released '1984 Interceptor' — https://csdb.dk/sid/?id=14176",
    "Wikipedia, 'Interceptor Micros' — native C64 (plus ZX Spectrum/Atari ST/Amiga/Electron/Vic-20) UK developer-publisher, formed after the Jeff Minter partnership dissolved Sept 1982, out of business early 1990s — https://en.wikipedia.org/wiki/Interceptor_Micros",
    "Wikipedia, 'Trollie Wallie' — 1984 Commodore 64 release by Interceptor Micros (1986 Amstrad CPC port), music arranged by Graham Hansford — https://en.wikipedia.org/wiki/Trollie_Wallie",
    "CSDb scener profile id=13854 'Graham Hansford' — credited as Coder and Musician on Interceptor-era releases — https://csdb.dk/scener/?id=13854"
  ]
}
```

## Overview

`Hansford/Interceptor` is the SIDId tag for a replay routine credited solely
to **Graham Hansford**, a professional UK composer/coder whose own HVSC/DeepSID
profile lists his affiliation as **Interceptor Software** — an exact match to
the tag's name. This strongly suggests an in-house player Hansford wrote for
his employer's own C64 games, rather than a scene-distributed editor. SIDId's
entry has only an author field, no title, consistent with an unreleased,
in-game-only routine. All 4 locally-tagged files (Caverns of Sillahc, Trollie
Wallie, Wallie Goes to Rhymeland, Wheelin' Wallie — full census, none missed)
are his own and are all CSDb-dated `1984 Interceptor`. Interceptor Micros/
Software was a real, native-C64-first British developer/publisher (also
ported to ZX Spectrum, Atari ST, Amiga, Acorn Electron, Vic-20) active from
1982 to the early 1990s (Wikipedia), which corroborates the "in-house,
native-C64" platform read.

## Quirks & gotchas

See the `quirks` array. Load-bearing facts: (1) the tag name is a direct
match to the composer's own documented professional affiliation (Interceptor
Software); (2) all 4 census-checked files share the identical CSDb
`Released` string `1984 Interceptor`; (3) every one of those 4 files has a
*different* PSID load/init/play address, which — while only header metadata,
not a disassembly fact — is consistent with per-game hand-placed code rather
than one relocatable shared driver. No specific per-game version history
beyond the 4 tagged titles was researched.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/graham-hansford.json`, `data/sidid.json`), corroborated by a
full census of all 4 tagged SID entries against the live CSDb webservice
(`type=sid`) and Wikipedia's Interceptor Micros/Trollie Wallie articles.
`status: stub` — no runtime fact has been confirmed by disassembly or trace;
Tier 3 remains untouched.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer profile, the
CSDb webservice `type=sid` records for all 4 tagged files, and Wikipedia.
