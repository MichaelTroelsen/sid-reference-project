# Øyvind Jergan (player routine)

```json
{
  "id": "oeyvind-jergan",
  "name": "Øyvind Jergan (player routine)",
  "aliases": ["Oeyvind_Jergan"],
  "authors": ["Øyvind Jergan"],
  "released": "~1992 (War Deal Lamers)",
  "status": "in-progress",
  "platform": "Norwegian coder-musician Øyvind Jergan's ('Outlaw', group War Deal Lamers) own playroutine. He is a CONFIRMED coder (not musician-only), and released two named, self-coded C64 tools the same year as his active SID output ('MP Player V2.0' and 'Decibel Blaster V2.0', both 1992) — plausibly the origin of this tag, though this specific link is this card's own inference from the CSDb data, not a stated fact anywhere. Player-ID-fingerprinted across 10 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (2 Fat 2 Fuck part 3): load $5000 (init $6003, play $6000).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $6003.", "play": "Sample trace: $6000 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 2 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED via HVSC Musicians.txt: 'Jergan, Oeyvind (Outlaw) / War Deal Lamers - NORWAY' — real name Øyvind Jergan, handle 'Outlaw', group War Deal Lamers (a Norwegian demo group founded 1989, active through 1994, 22 releases: demos, cracks, music, games, tools).",
    "CONFIRMED CODER AND MUSICIAN (CSDb functions list both, plus some Graphician/Logo Graphician credits — a genuinely multi-role scener, not just a music-only tag). Named, self-coded tools released 1992, the same year as active War Deal Lamers SID output: 'Decibel Blaster V2.0' (Text/Music/Code credit) and 'MP Player V2.0' (Code credit, 16 June 1992) — the latter's name literally suggests 'Music Player'. This is a REASONABLE, but explicitly UNCONFIRMED, hypothesis for what this tag actually is — no source directly states 'MP Player' is the same routine as the 'Oeyvind_Jergan' tag; flagged as inference, not fact.",
    "ONE CLAIM EXPLICITLY RULED OUT: an earlier AI-search snippet suggested a 'SHAPE/Blues Muz'' group affiliation for Jergan — this did NOT check out against CSDb's own authoritative webservice data (which lists War Deal Lamers only) and is noted here only as a ruled-out lead, not included as fact.",
    "A same-name real-world professional (an IT consultant named 'Øyvind Jergan' in Oslo) surfaced in general web search — explicitly NOT treated as a confirmed identity match; a common enough Norwegian name with zero scene corroboration linking the two, excluded from this card.",
    "NO CONNECTION FOUND to this KB's other two carded Norwegian composers, Olav Mørkrid and Henning Rokling (who ARE linked to each other via Funcom) — checked explicitly, none found. War Deal Lamers appears to be a separate Norwegian scene circle.",
    "War Deal Lamers group notable release: 'Lame Over' (1994) placed 3rd-best demo at the Tribute 1994 party.",
    "The '2_Fat_2_Fuck' multi-part filenames in his own HVSC folder line up chronologically with his 1992 tool releases — noted neutrally, no further meaning attached.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Jergan, Oeyvind (Outlaw) / War Deal Lamers - NORWAY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=36437, functions Coder+Musician, 'Decibel Blaster V2.0'/'MP Player V2.0'/'The Lame Game' credits): https://csdb.dk/scener/?id=36437",
    "CSDb webservice (authoritative group/function data cross-check): https://csdb.dk/webservice/?type=scener&id=36437&depth=3",
    "CSDb group — War Deal Lamers (id=615, Norwegian demo group, 1989-1994, 22 releases): https://csdb.dk/group/?id=615",
    "Local dataset: 10 files tagged Oeyvind_Jergan, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Oeyvind_Jergan` tag is Norwegian coder-musician Øyvind Jergan's
('Outlaw') own playroutine, for the group War Deal Lamers. He is a
confirmed coder who released two named, self-coded tools the same year as
his active SID output — a plausible but explicitly unconfirmed origin for
this tag. Player-ID-fingerprinted across 10 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed dual
coder+musician role**, with two named 1992 tools ('MP Player V2.0',
'Decibel Blaster V2.0') offered as a reasonable but explicitly unproven
hypothesis for this tag's origin. Also note **one ruled-out lead**
(a false group-affiliation claim) and the **absence of any connection**
to this KB's other Norwegian composers.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Oeyvind_Jergan`-tagged
`.sid` + trace — which would also help confirm or refute the MP Player
hypothesis above.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Oeyvind_Jergan` `.sid` (2 Fat 2 Fuck part 3): load
`$5000`, init `$6003`, play `$6000`, **153 register writes / 50 frames**
(2 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (scener + webservice +
group).
