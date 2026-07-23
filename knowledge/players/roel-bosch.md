# Roel Bosch (player routine)

```json
{
  "id": "roel-bosch",
  "name": "Roel Bosch (player routine)",
  "aliases": ["Roel_Bosch"],
  "authors": ["Roel Bosch"],
  "released": "~1989-1995 (Dutch demoscene/diskmag era)",
  "status": "verified",
  "platform": "A playroutine used exclusively by Dutch demoscene musician Roel Bosch (handles 'TSC'/'RB'), mostly for diskmag music across ~17 different Dutch groups. Player-ID-fingerprinted across 21 files, all his own. Whether Bosch himself wrote the driver code is UNCONFIRMED — the one release with explicit credits found (Music Mania, 1990) names a separate coder.",
  "csdb_release": null,

  "memory": {
    "load_address": "$4000 (init $4000, play $4003). Some files also have a small runtime workspace block at $0388-$03FF (low RAM, not loaded from file — see disassembly notes).",
    "zero_page": "$2C-$5A (16 bytes; counters, channel pointers, filter state).",
    "layout": "Code/data at $4000-$54F8 (varies per song). Runtime workspace at $4100-$4158 ($40-$60 bytes, self-modified — partially dead, partially load-bearing per file)."
  },
  "entry": {
    "init": "$4000 (standard JMP init / JMP play vectors at $4000/$4003).",
    "play": "$4003."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (heavy filter modulation observed — 77 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Roel Bosch — Dutch C64 musician, handles 'TSC'/'RB', per HVSC Musicians.txt affiliated with 'The Satanic Angels' (Netherlands); CSDb additionally lists a formal group membership in Focus (Aug 1990-Jun 1991). Active 1989-1995 (~31 credited CSDb releases), almost entirely diskmag music/intros rather than standalone demos or commercial games — matches the local filenames (Blow_it_Down, Cowabunga_1_magazine, Head_and_Hat, Just_A_Demo, Look).",
    "UNUSUALLY WIDE GROUP SPREAD for a single-composer tag: credited across ~17 different Dutch groups over the period (Full Force, Browbeat, Manowar, Ruthless, Mega Industries, Focus, Gloom, Playboy, Mad Aussie Dealers, Hanz, Lore of Arts, Paradise, Proxyon, Elysium, Bad Karma, X-Vector, Merlin) — i.e. this looks like a routine tied to BOSCH PERSONALLY (he carried it with him across many one-off diskmag productions for different groups/coders), not to any single studio or fixed coder. This is circumstantial support for the personal-routine hypothesis, not a documented confirmation of authorship.",
    "ONE DATA POINT AGAINST SELF-CODING: the 'Music Mania' release (1990, The Satanic Angels; https://csdb.dk/release/?id=9238) explicitly credits code to 'HL' (of Focus/The Satanic Angels) and music to 'TSC' (Bosch) separately — so on at least that release, someone else wrote the code. Whether that coder also wrote the underlying sound driver, or Bosch supplied his own driver code into someone else's demo/diskmag binary, is unresolved either way.",
    "No overlap found with any other Dutch composer already in this KB (checked Jeroen Koops and Jeroen Kimmel specifically for group overlap via Focus/Mega Industries/Lore of Arts — none found); different scene entirely from this KB's mostly UK/US mid-1980s commercial-game composers.",
    "Not in SIDId (checked directly via deepsid_dl/sidid.nfo — no Roel_Bosch/Bosch entry). No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO.",
    "RELOCATION TRAP (SIDdecompiler): some files use a low-RAM runtime workspace at $0388-$03FF that sits BELOW the PSID load address. SIDdecompiler's -v2 map reports Start: $0388 for these files — the -a flag MUST target that Start address (decimal 904), NOT the PSID header's load address ($4000=decimal 16384). Using the PSID load address produces a 23% byte match (effectively random, gotcha 40). Files without this workspace block (e.g. Blow_it_Down) have Start: matching the PSID load address and work fine with -a16384. Always check -v2's Start: output before choosing -a."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Bosch, Roel (TSC) / The Satanic Angels - NETHERLANDS')",
    "CSDb scener — Roel Bosch (id=6505, handles RB/TSC, Focus membership Aug 1990-Jun 1991): https://csdb.dk/scener/?id=6505",
    "Demozoo — Roel Bosch (TSC): https://demozoo.org/sceners/90210/",
    "CSDb release — Music Mania (1990, code by HL, music by TSC): https://csdb.dk/release/?id=9238",
    "Local dataset: 21 files tagged Roel_Bosch, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Roel_Bosch` tag is Dutch demoscene musician Roel Bosch's ('TSC')
playroutine, used across ~17 different Dutch groups for diskmag music
between 1989 and 1995. Player-ID-fingerprinted across 21 files, all his
own — the wide group spread suggests the routine travelled with Bosch
personally rather than belonging to any one studio.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **unusually wide spread
across ~17 groups** (circumstantial support for a personal routine); the
**Music Mania counter-evidence** (a separate coder, 'HL', credited on at
least one release); and the lack of any confirmed primary source stating
who actually wrote the driver code — left honestly unresolved rather than
asserted.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Roel_Bosch`-tagged `.sid` +
trace.

## Verification

**Verified — SIDdecompiler reconstruction trace-exact on two files (2026-07-23).**

Two real HVSC files disassembled, reassembled, traced, and diffed:

| File | Bytes | Byte match | Diffs | Diff range | Trace result |
|------|-------|-----------|-------|------------|--------------|
| Blow_it_Down.sid | 3,891 | 98.89% | 43 | $4100-$4158 (self-modified workspace) | 100% exact (315 register writes / 50 frames) |
| Prove_of_Quality.sid | 5,369 | 99.96% | 2 | $402c, $4032 (self-modified song-state bytes) | 100% exact |

**Methodology**: SIDdecompiler -z -d -c -v2, 64tass --cbm-prg, sidm2-sid-trace.exe 50 frames init=$4000 play=$4003.

**Key findings**:
- Both files trace 100% register-write exact. The byte diffs are all in self-modified working-storage addresses (marked `+`/`w` in the -v2 map) and are dead at cold boot — the code writes to them before reading.
- **Relocation trap on larger files**: Prove_of_Quality needed relocation to -v2's Start: ($0388, decimal 904) instead of the PSID load address — see quirks. Blow_it_Down's -v2 Start: matched the PSID load address ($4000) and worked without adjustment.
- Player structure: standard JMP init/JMP play vectors at $4000/$4003, runtime workspace at $4100-$4158. The disassembly covers a contiguous $0388-$54F8 for files with low-RAM workspace, $4000-$4F32 for those without.

**Honest scope / known gap**: The reconstruction is byte-imperfect (dead workspace bytes differ from the original file's pristine cold-start values) but register-write-exact. No manual patching needed — the trace is exact as-is from SIDdecompiler's output. The low-RAM workspace block at $0388 appears file-dependent (present in Prove_of_Quality, absent in Blow_it_Down) and must be checked per-file via -v2.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo, and the Music Mania release credits.
