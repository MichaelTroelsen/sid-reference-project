# Hein_tiny

```json
{
  "id": "hein-tiny",
  "name": "Hein_tiny",
  "aliases": ["Hein_tiny"],
  "authors": ["Hein Pieter Holt (Hein Holt / Hein / Vision)"],
  "released": "2022 (all 4 tagged files carry CSDb `Released: 2022 Vision`, and were all entered in the same event, 'Unofficial Tiny SID Compo 2022', Feb-May 2022 — https://csdb.dk/event/?id=3157)",
  "status": "stub",
  "platform": "Not a distributable tool/editor — this is a hand-coded, size-constrained tune+player routine written directly for a size-coding competition. All 4 tagged files (csdb.dk sid ids 60833-60836) were entries in CSDb event 'Unofficial Tiny SID Compo 2022' (id=3157, organized by Karmic/HVSC Crew, Feb-May 2022), a genre of compo (cf. Codebase64's 'Tiny SID compo #1', a documented '256 bytes tune+player' entry format: https://codebase64.net/doku.php?id=base:sid_programming) where the whole point is a minimal, self-contained tune+player under a tight byte budget — not a reusable, general-purpose editor. No dedicated CSDb tool/release entry exists under the name 'Hein_tiny'; each file has its own tiny init/play routine per its PSID header (see quirks) rather than sharing one packaged player binary.",
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
    "SIDId's sidid.nfo has NO entry for 'Hein_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool. Contrast with the SAME author's Virtuoso (already carded, knowledge/players/virtuoso.md, released 2015 per that card) — Hein_tiny is chronologically LATER (2022, see below), so the SIDId silence is NOT because it's an earlier/pre-Virtuoso routine; it is silent because it was never packaged as a reusable tool at all, only used for one-off compo entries.",
    "Census of all 4 tagged files via CSDb's `sid` webservice endpoint (csdb.dk sid ids 60833-60836) shows every one carries `Released: 2022 Vision` and was entered into the SAME event, CSDb event id=3157 'Unofficial Tiny SID Compo 2022' (organizer: Karmic/HVSC Crew, 4 Feb - 14 May 2022): https://csdb.dk/event/?id=3157 . This is a size-coding competition genre — cf. Codebase64's documented 'Tiny SID compo #1' entry format ('256 bytes tune+player'): https://codebase64.net/doku.php?id=base:sid_programming . Each file is its own hand-coded, self-contained tune+player under a tight byte budget, not output from a shared packaged editor.",
    "PSID headers (gathered during the census, NOT disassembly facts, recorded here per extraction-template guidance): Airport (csdb sid id 60834) load=$1000 init=$1000 play=$1017; Lift Off (id 60833) load=$1000 init=$1000 play=$1028; Humming a Cheesy Melody (id 60835) load=$1000 init=$1000 play=$1032; Lift Off V2 (id 60836) load=$1000 init=$10E6 play=$1118. All four share load address $1000 but init/play addresses differ per file — consistent with each being its own hand-assembled routine rather than one shared player binary at a fixed offset.",
    "100% single-composer concentration: all 4 locally tagged files ('Airport', 'Lift Off', 'Humming a Cheesy Melody', 'Lift Off V2') belong to Hein Holt himself (data/composers/hein-holt.json). No evidence this routine's code is shared with Virtuoso or the sosperec editor (also praising Hein Holt's playroutine work per Lemon64 quotes cited in knowledge/players/sosperec.md) — no edge asserted absent a real disassembly comparison. Also no edge asserted to sibling '*-tiny' cards (magnar-tiny, 4-mat-tiny-1, rotteroy-tiny) on name-pattern alone — 'tiny' here is independently explained by the 'Tiny SID Compo' event context, not a shared codebase.",
    "Hein Holt (Netherlands, b. 13 Nov 1973, handle Hein / Vision, also 'Hein Design') is a known, prolific C64 music-tool author in this KB already — see [[virtuoso]] and the quote of him in [[sosperec]].",
    "csdb_release is left null: no dedicated CSDb tool/release page exists for 'Hein_tiny' as a named player/editor (checked) — only the 4 individual tune release pages listed above, none of which represent a distributable tool.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Hein_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/hein-holt.json (profile: full_name Hein Pieter Holt, short_name 'Hein Holt', handles 'Hein Design', country Netherlands, born 1973-11-13, notable 'Created Virtuoso', csdb_id 8054)",
    "CSDb webservice, type=sid, censused all 4 tagged files (ids 60833, 60834, 60835, 60836) via scripts/lib/csdb-client.js: https://csdb.dk/webservice/?type=sid&id=60833 (and 60834/60835/60836) — each returns Released: '2022 Vision' and UsedIn -> Release -> ReleasedAt -> Event id 3157",
    "CSDb event page, type=event id=3157 'Unofficial Tiny SID Compo 2022': https://csdb.dk/event/?id=3157",
    "Codebase64 SID programming wiki, 'Tiny SID compo #1' reference ('256 bytes tune+player' entry by FTC/HT): https://codebase64.net/doku.php?id=base:sid_programming",
    "Existing sibling KB cards, cross-checked for code-sharing evidence (none found): knowledge/players/virtuoso.md, knowledge/players/sosperec.md",
    "Local dataset: 4 files tagged Hein_tiny, single composer (Hein Holt) — see data/composers/hein-holt.json folder[]"
  ]
}
```

## Overview

Hein_tiny is the Player-ID tag for a set of hand-coded, size-constrained
tune+player routines by **Hein Holt** (handle Hein, of Vision; Netherlands),
the same composer who authored the fully documented [Virtuoso](virtuoso.md)
tracker (2015). All 4 locally tagged files ("Airport", "Lift Off", "Humming
a Cheesy Melody", "Lift Off V2") are his own, and a full census via CSDb's
`sid` webservice endpoint shows all 4 carry `Released: 2022 Vision` and were
entered into the same CSDb event, "Unofficial Tiny SID Compo 2022"
(csdb.dk/event/?id=3157, 4 Feb - 14 May 2022) — a size-coding compo genre
(cf. Codebase64's "Tiny SID compo #1", a documented 256-byte tune+player
entry format). This tag is therefore **not** a packaged, distributable
editor/tool: each file is its own minimal routine written for a
byte-budget competition, which explains both why it postdates Virtuoso
(2015) rather than predating it, and why SIDId has no entry for it.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) all 4 tagged files are 2022
"Unofficial Tiny SID Compo" entries, not output of a shared packaged
player — the "_tiny" name reflects the compo, not a generic small personal
routine as originally guessed; (2) 100% single-composer usage; (3) SIDId's
total silence on this tag is explained by the routines never being
packaged as a tool, not by them predating Virtuoso; (4) no evidence of
code-sharing with Virtuoso, the sosperec editor, or any other "*-tiny"
carded player is asserted — no edge in this card.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/hein-holt.json`, `data/sidid.json`), a full census of all
4 tagged files against CSDb's `sid` webservice endpoint (not a sample),
the CSDb event page for the compo they were entered into, a Codebase64
cross-reference for the "Tiny SID compo" genre, plus cross-reference
against sibling KB cards. `status: stub` — Tier 1+2 only, no disassembly.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile, CSDb `sid`/`event` webservice lookups for all 4 files,
Codebase64, and sibling KB cards for Hein Holt's other tools.
