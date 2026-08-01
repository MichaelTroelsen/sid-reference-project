# En-Tech_Studio64

```json
{
  "id": "en-tech-studio64",
  "name": "En-Tech_Studio64",
  "aliases": ["En-Tech_Studio64"],
  "authors": ["TODO: attribution to a company/group called 'En-Tech' is UNCONFIRMED — see quirks"],
  "released": "TODO: no formal tool-release date found. The only tagged file in this collection, 'Rupert and the Toymaker's Party', is itself a 1985 Quicksilva game — CSDb's own SID-entry `Released` field reads '1985 Quicksilva' (https://csdb.dk/sid/?id=31380, csdb.dk XML webservice, type=sid, queried 2026-08-01). This is the game's release date, not a confirmed player/tool release date, but as the single attested use it is the earliest (and only) date evidence points to.",
  "status": "stub",
  "platform": "TODO: no CSDb-attested standalone tool/editor exists under either 'En-Tech' or 'Studio64'/'Studio 64' — both names were searched directly against CSDb's site search (https://csdb.dk/search/?seinsel=all&search=En-Tech and .../search=Studio64, checked 2026-08-01) and returned zero groups, sceners, releases, or tools. The tag implies a product named 'Studio64' by 'En-Tech'. A real, independently-attested vintage C64 music sequencer called 'Studio 64' exists (per a Lemon64 forum thread describing a period eBay listing) but that source does NOT name or confirm 'En-Tech' as its maker, nor confirm it is this same Player-ID-tagged routine — authorship and identity attribution both stay unconfirmed. Given the single known use is embedded in a commercial 1985 Quicksilva game (CSDb SID id 31380) rather than any circulated standalone tool, this looks more consistent with an in-house/single-use player routine than a distributed editor, but that is inference, not direct evidence.",
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
    "SIDId's sidid.nfo has NO entry for 'En-Tech_Studio64' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "A real vintage C64 product called 'Studio 64' is independently attested by a Lemon64 forum thread ('Where can I download a copy of Studio 64?') discussing a period eBay listing: described by forum users as 'a nice but quirky sequencer for the C64' that can 'automate all 3 voices and set the parameters for the Filter', and 'a pretty nice polyphonic preset synth' with 'basic settings and effects'. The thread explicitly distinguishes it from an unrelated, later 'C64 Studio' Windows-based cross-assembler. This corroborates 'Studio64' as a real period product, but the thread does NOT mention 'En-Tech' at all — the company/group attribution in the tag name remains UNCONFIRMED by this research pass.",
    "The single locally tagged file is 'Rupert and the Toymaker's Party', by composer Martin Walker (data/composers/martin-walker.json). This EXACT title is independently cited in the already-carded knowledge/players/martin-walker.md, sourced from a Commodore Format interview, as one of SIX games Walker personally CODED (not merely composed for) between 1985-1989 — before he became a full-time freelance composer and developed his own dedicated player/editor for Thalamus's Armalyte (1988). This is a strong, if circumstantial, chronological lead: En-Tech_Studio64 plausibly belongs to Walker's early, pre-Armalyte game-coding period, potentially even predating the 'Electrosound' tool his existing card documents him using next. Flagged as a plausible lead only — NOT asserted as a confirmed fact, and no edge added to martin-walker.md.",
    "No public disassembly or source found. All runtime internals unknown.",
    "CSDb site search (2026-08-01) for both 'En-Tech' and 'Studio64'/'Studio 64' (https://csdb.dk/search/?seinsel=all&search=En-Tech, .../search=Studio64) returned zero matching groups, sceners, releases, or tools — no CSDb-attested standalone product exists under either name.",
    "CSDb's own SID-entry for the single tagged file (https://csdb.dk/sid/?id=31380, csdb.dk XML webservice type=sid) records `Released: '1985 Quicksilva'` for 'Rupert and the Toymaker's Party' — this is the tune/game's own release date, not a tool-release date, and is the only date evidence found for this Player-ID tag. The same query's `UsedIn` releases (a 1985 GSS/Bitstoppers rip and a 1991 PDB rip) mention neither 'En-Tech' nor 'Studio64' anywhere."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'En-Tech_Studio64': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Lemon64 forum, 'Where can I download a copy of Studio 64?' (period eBay listing discussion, product description): https://www.lemon64.com/forum/viewtopic.php?t=75457",
    "CSDb site search, no results for 'En-Tech': https://csdb.dk/search/?seinsel=all&search=En-Tech (checked 2026-08-01)",
    "CSDb site search, no results for 'Studio64': https://csdb.dk/search/?seinsel=all&search=Studio64 (checked 2026-08-01)",
    "CSDb SID entry (csdb.dk XML webservice, type=sid, id=31380) for 'Rupert and the Toymaker's Party' — `Released: '1985 Quicksilva'`: https://csdb.dk/sid/?id=31380",
    "data/composers/martin-walker.json (folder[] entry: 'Rupert and the Toymaker's Party', player tag 'En-Tech_Studio64')",
    "Sibling KB card, cross-checked for the matching game title and Walker's documented early coding period (no edge asserted): knowledge/players/martin-walker.md",
    "Local dataset: 1 file tagged En-Tech_Studio64 — 'Rupert and the Toymaker's Party', by Martin Walker"
  ]
}
```

## Overview

En-Tech_Studio64 is a Player-ID tag on a single file, "Rupert and the
Toymaker's Party", by composer **Martin Walker**. CSDb's own SID-entry for
that file (id 31380) records the game itself as "1985 Quicksilva" — the
earliest and only date evidence for this tag — but no formal player/tool
release date exists. The tag implies a product named "Studio64" by a
company/group "En-Tech"; a real vintage C64 music sequencer called "Studio
64" is independently attested by a Lemon64 forum discussion of a period
eBay listing, but that source does not confirm "En-Tech" as its maker — the
authorship link stays unconfirmed, and a direct CSDb site search for both
"En-Tech" and "Studio64"/"Studio 64" (2026-08-01) returned no matches at
all, so no CSDb-attested standalone tool exists under either name. The
single known use, embedded in a commercial 1985 game rather than any
circulated standalone editor, is at least consistent with an in-house or
single-use player routine, though that remains inference rather than
direct evidence. Notably, this exact game title is cited in the
already-carded [Martin Walker](martin-walker.md) card as one of six games
he personally CODED (not just composed for) in his pre-Armalyte,
pre-freelance period (1985-1989) — a plausible, but unconfirmed,
chronological lead for this being an early tool from that period.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) "Studio 64" is a real,
independently-attested period C64 sequencer, but "En-Tech" as its maker is
NOT confirmed; (2) the single tagged file matches a game already documented
in Martin Walker's own card as part of his early, pre-Armalyte coding
period — a plausible chronological lead, not a proven fact; (3) no edge is
asserted to martin-walker.md.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/martin-walker.json`, `data/sidid.json`) plus a forum
source for the "Studio 64" product, a direct CSDb SID-entry lookup (id
31380) for the tagged file's own `Released` field, negative CSDb site
searches for "En-Tech" and "Studio64", and cross-reference against the
sibling martin-walker.md card. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the Lemon64
forum thread, local composer data, and the sibling martin-walker.md card.
