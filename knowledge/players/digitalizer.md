# Digitalizer

```json
{
  "id": "digitalizer",
  "name": "Digitalizer",
  "aliases": ["Digitalizer_V2.x", "Digitalizer_V3.0", "Digitalizer"],
  "authors": ["Olav Mørkrid (Omega Supreme) / Panoramic Designs"],
  "released": "1989 (V2.x); 1992 (V3.0)",
  "status": "verified",
  "platform": "Native C64 music player/editor. Closed scene tool.",
  "csdb_release": 33646,

  "memory": {
    "load_address": "$1000",
    "zero_page": "$FC-$FF used as channel pointers/counters (zfc-zff confirmed; full ZP map not yet complete)",
    "layout": "Code/data loaded at $1000-$~$198e (file-dependent end). SIDdecompiler's -v2 Start is $0334 because the player keeps fixed low-RAM workspace/counters at $0334-$03ff; relocate to $0334 (decimal 820), not $1000, for reassembly."
  },
  "entry": {
    "init": "$1003",
    "play": "$1006"
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
    "HOUSE-GROUP REFINEMENT (surfaced 2026-07-18 by a CSDb group-membership scan, scripts/dev/find-group-tools.js): the dominant user cohort is NOT the author's own group. Olav Mørkrid is Panoramic Designs but produced only ~10 released Digitalizer files here; the tool's actual heavy users are the group SHAPE — Kjell Nordbø (357 files) and Kristian Røstøen (106) together account for ~83% of the group-attributable files, plus SHAPE's Eivind Sommersten/Proxxon. (The V3.5 co-release credit 'Panoramic Designs + SHAPE' and the SHAPE-authored 'Digitalizer → SDI Converter' already hinted at this.) So the earlier note's 'consistent with the author's own group' is imprecise: the editor was Mørkrid's, but its principal user base was SHAPE, not Panoramic. A shared-USERS / house-group relationship (group affiliation from data/csdb/*.json), not code evidence; no edge asserted.",
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

**`status: verified`** — real disassembly/reassembly/trace-diff on two independent Digitalizer_V2.x HVSC files.

- Files used:
  - `MUSICIANS/B/Blues_Muz/Roestoeen_Kristian/Budget.sid` — PSID load $1000, init $1003, play $1006, subtunes 1, payload 2447 bytes.
  - `MUSICIANS/B/Blues_Muz/Roestoeen_Kristian/Calm.sid` — PSID load $1000, init $1003, play $1006, subtunes 1, payload 2339 bytes.
- Disassembly: `SIDdecompiler.exe <file> -o<out.asm> -a820 -z -d -c -v1` (decimal 820 = $0334, the `-v2` Start address; relocating to the PSID load address $1000 instead places low-RAM workspace data at the start of the file and yields a ~9% byte-diff).
- Reassembly: `64tass.exe -a --cbm-prg -o out.prg out.asm`.
- Byte-diff (original payload vs reassembled payload at the file's own $1000-$end region): 2447/2447 bytes exact for `Budget.sid`, 2339/2339 bytes exact for `Calm.sid` after the patch below.
- Trace-diff: 50-frame `sidm2-sid-trace.exe` output is byte-for-byte identical (210 writes per file) except for the echoed filename line.
- Required patch: SIDdecompiler emits the *runtime-computed* values of self-modified immediate operands in the filter/voice setup block around $143x-$147x. Patching those bytes back to the pristine cold value before tracing is what makes the reconstruction trace-exact.

  Per-byte patch table (pristine byte taken from the original `.sid` payload; drifted byte from the raw reassembly before patching):

  `Budget.sid` (3 bytes):

  | Address | Pristine | Drifted |
  |---------|----------|---------|
  | $143A   | $00      | $01     |
  | $1463   | $00      | $20     |
  | $1466   | $00      | $E0     |

  `Calm.sid` (4 bytes):

  | Address | Pristine | Drifted |
  |---------|----------|---------|
  | $143A   | $00      | $02     |
  | $1444   | $00      | $04     |
  | $146D   | $00      | $09     |
  | $1470   | $00      | $EF     |

- Status before: `in-progress`. Status after: `verified` because the reassembled code matches the original register writes exactly on multiple real files once the self-modified-operand drift is corrected.

Known remaining gap: the music data-format internals (order-list, pattern/instrument encoding, effects) are still TODO; only the runtime memory map, entry points, and replay fidelity are verified.
- Exact byte-level patch tables for both files (durable, not scratchpad): `knowledge/players/reconstructions/digitalizer.md`.

## Sources

See the `sources` array — SIDId, CSDb (V3.0 with help-doc + V2.2), and the CSDb
scener page for Olav Mørkrid.
