# Digitalizer

```json
{
  "id": "digitalizer",
  "name": "Digitalizer",
  "aliases": ["Digitalizer_V2.x", "Digitalizer_V3.0", "Digitalizer"],
  "authors": ["Olav Mørkrid (Omega Supreme) / Panoramic Designs"],
  "released": "1989 (V2.x); 1992 (V3.0)",
  "status": "in-progress",
  "platform": "Native C64 music player/editor. Closed scene tool.",
  "csdb_release": 33646,

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
    "Author Olav Mørkrid (handle also 'Omega Supreme'), Norwegian, of group Panoramic Designs — both code and design. (He later co-founded Funcom in 1993 and worked on the Opera browser UI.)",
    "Highly concentrated: 656 files but only 12 composers — a tight Norwegian-scene tool, consistent with the author's own group. SIDId collapses the version line to two tags: Digitalizer_V2.x (1989, ref 33646) and Digitalizer_V3.0 (1992, ref 33649). Full line: V2.2/V2.5 (1989), V2.7, V2.8 (1991), V3.0 (1992, alias 'v2.9 FF'), V3.5 (1995, Panoramic Designs + SHAPE).",
    "Despite the name, there is NO confirmation it does digi/sample playback — the name is suggestive but unverified (TODO).",
    "Only known relationship: a 'Digitalizer V3.x → SDI Converter V2.0' by SHAPE exists (CSDb 237762), implying its data format was distinct enough to need conversion to the SDI (SID Duzz' It) format. No confirmed derivation from/to other players (TODO).",
    "Replay internals all UNKNOWN. The in-program help doc (converted to text by user 6R6, 2013, attached to the V3.0 CSDb release id 33649) is the most likely primary source for the format — read it before disassembling.",
    "SAME-AUTHOR CLUSTER (author-level, not a code edge): Olav Mørkrid also has two other separately-carded routines here — [[olav-morkrid]] (his personal general playroutine, tag Olav_Moerkrid, mostly used by Panoramic bandmate Henning Rokling) and [[omegasupreme-digi]] (his digi/sample routine). The latter was byte-signature-compared against this editor (sidid.cfg) and came out DISTINCT — they share only the single instruction LDA ($FB),Y, not a routine. No `shares_routine_with` edge is asserted to either; the link is that they are the same coder's separate works. Surfaced by a composer-overlap connection scan."
  ],
  "sources": [
    "SIDId sidid.nfo (author, years, tags, byte signature): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release V3.0 (id 33649 — has the text-converted help doc, best route to internals): https://csdb.dk/release/?id=33649 ; V2.2 baseline https://csdb.dk/release/?id=33646",
    "CSDb scener Olav Mørkrid (identity/nationality/version list): https://csdb.dk/scener/?id=8158",
    "sidid:Digitalizer_V2.x (author Olav Mørkrid, 1989, CSDb 33646)",
    "Local dataset: 656 files tagged Digitalizer_V2.x/V3.0, 12 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Digitalizer is a native C64 music player/editor by **Olav Mørkrid** (Omega
Supreme) of the Norwegian group **Panoramic Designs**, released 1989 (V2.x)
through 1992 (V3.0) and later V3.5 (1995). It's one of the most concentrated
tools in the collection — **656 files but only 12 composers** — a tight
Norwegian-scene editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **very low composer count** (a
personal/small-scene signal); the **unverified "does it do samples?" question**
(the name suggests it, nothing confirms it); and a concrete **RE lead** (the
in-program help doc text on CSDb 33649). Internals `TODO`.

## Disassembly notes

None done here. Unusually, a **text-converted in-program help doc** is attached
to the V3.0 CSDb release — the best first source before disassembling a
Digitalizer `.sid`.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC Digitalizer_V2.x `.sid` (load $1000, init $1003, play $1006, 289 register writes / 50 frames) — the replay runs; entry per-file. Author, scene, and version history are
SIDId/CSDb-sourced; all runtime fields `TODO`.

## Sources

See the `sources` array — SIDId, CSDb (V3.0 with help-doc + V2.2), and the CSDb
scener page for Olav Mørkrid.
