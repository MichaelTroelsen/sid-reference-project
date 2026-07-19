# Soundmaster (SoedeSoft)

```json
{
  "id": "soundmaster",
  "name": "Soundmaster (SoedeSoft)",
  "aliases": ["SoedeSoft/Soundmaster_V1.0", "SoedeSoft/Soundmaster_V3.1", "SoedeSoft/Soundmaster_V3.2", "SoedeSoft", "SoedeSound Editor"],
  "authors": ["Jeroen Soede (driver/player)", "Michiel Soede (editor)"],
  "released": "1988 (V1.0); V3.0-V3.2 1988-1989",
  "status": "verified",
  "platform": "Native C64 music editor+player by the Soede brothers (SoedeSoft label). Closed scene tool.",
  "csdb_release": 117095,

  "memory": {
    "load_address": "Genuinely relocatable, not fixed — confirmed across 5 real files with distinct load addresses: $1800 (Airwolf_Title.sid), $2000 (Soede_2.sid/SMC, Soede_Soft.sid/Drumbeat), $C000 (Kaskade.sid), $F400 (Airwolf.sid), $F700 (Sphinx.sid). The third-party 'Soundmaster Relocator V1.0' most likely exists to reposition already-built tunes for whatever free RAM a given game/intro has, not because the player has one fixed origin.",
    "zero_page": "5 bytes, identical across both files verified byte-for-byte: $A9, $AA, $FB, $FC, $FD (auto-labelled za9/zaa/zfb/zfc/zfd by SIDdecompiler; zaa=za9+1, zfc=zfb+1, zfd=zfc+1 — i.e. two small adjacent-pair blocks, likely a pointer + index each). Confirmed identical footprint in Airwolf.sid (Michiel Soede) and Sphinx.sid (Jeroen Soede) — same driver build reused by both brothers. Role of each byte not further decoded (TODO).",
    "layout": "Verified in the 'standard' build (5 files sampled: Airwolf, Airwolf_Title, Kaskade, Sphinx, plus header-only check on others): the file's first 6 loaded bytes are a 2-entry JMP table — `JMP <real_init>` then `JMP <real_play>` — and the PSID header's own init/play vectors point directly at this table (init = load address exactly, play = load+3). One SMC-tagged file (Soede_2.sid, likely an older/differently-built V1.0 release) deviates: init = load+$29 (not load+0) and play = load+$106, i.e. NOT a fixed +3 offset from init — a different internal convention, not further investigated (TODO: confirm whether this is a genuinely earlier driver version or just a different code layout choice by the same driver)."
  },
  "entry": {
    "init": "= the file's own load address in the 'standard' build (confirmed: Airwolf $F400, Sphinx $F700, Kaskade $C000, Airwolf_Title $1800) — the PSID init vector points at the JMP table's first entry, i.e. `JMP <real init routine>`.",
    "play": "= load address + 3 in the 'standard' build (JMP table's second entry). Deviates on at least one file (Soede_2.sid, SMC) — see memory.layout."
  },
  "speed": "TODO (not measured this pass — trace-diffed at the standard once-per-frame PAL cadence and it matched, but no explicit speed-table/multi-speed check was done)",

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
    "'SoedeSoft' = the label of the Soede brothers, Dutch twin programmers Jeroen Soede and Michiel Soede. Division of labour: Jeroen developed the driver/PLAYER routine; Michiel developed the editor.",
    "Jeroen wrote the driver from scratch specifically 'to be able to arrange with drums like Rob Hubbard's' — a stated design motivation (not a code-derivation from Hubbard). No import/derivation link to other C64 editors established (TODO).",
    "V1.0 was also released as 'SoedeSound Editor V1.0' — a CSDb note confirms it 'uses the exact same player/editor as Soundmaster V1.0 but under a different name'. Version line: V1.0 (1988, id 117095), V3.0 (Jan 1989, id 126831), V3.1 (1989, id 90307), V3.2 (id 117086; shows '1988' on-screen but was a members-only Fire-Eagle release, V3.1 being the 1989 public one).",
    "CONFUSION WARNING: there is an UNRELATED 'Soundmaster V1.0' by Fire-Eagle/Rage for Order (CSDb 10735/10736) and a 'Sound Master 2' by Cabana — different tools, exclude. The Soedes' later Amiga 'SoundMaster Professional' is also separate. This card is strictly the C64 SoedeSoft Soundmaster.",
    "Replay internals (load address, ZP, init/play) CONFIRMED 2026-07-19 via disassembly+reassembly+trace of two real files (Airwolf.sid, Sphinx.sid) — see Verification. Data format (order list/patterns/instruments/tables) and effect encoding remain UNKNOWN — TODO, would need semantic decoding of the disassembly's data tables, not just structural/byte-level confirmation.",
    "Below the code's own (relocatable) load address, the driver also touches a small low-memory (roughly page-2/page-3, e.g. $02a7-ish/$0334-ish, size and exact base vary per file) runtime workspace — confirmed via SIDdecompiler's `-v2` memory-touch map. This is NOT song data from the file (the PSID payload itself only spans the code's own load-address range) — it's pure runtime scratch state (channel pointers/counters etc.), zero at cold boot. Relocating SIDdecompiler's output to this workspace's own reported 'Start:' address (rather than the file's true PSID load address) was necessary to get a non-wrapping, byte-diffable reassembly — see Verification's method note.",
    "A separate, unversioned raw tag 'SoedeSoft' (56 files, listed as its own 'uncarded family' in knowledge/COVERAGE.md since it doesn't share the 'SoedeSoft/Soundmaster_Vx.x' string prefix the grouping script keys on) is the SAME tool under the DeepSID dump's generic label — every composer who uses it (Jeroen Soede, Michiel Soede, Tomas Danko, LDX40, Rudolf Stember, SMC, Zagor, and 'SoedeSoft' itself) also appears under the versioned tags. Folded in here as an alias rather than given its own card. Combined dataset total: 908 files across 63 composers."
  ],
  "sources": [
    "VGMPF Jeroen Soede (authorship: Jeroen=driver, Michiel=editor; Rob-Hubbard-drums motivation): https://www.vgmpf.com/Wiki/index.php?title=Jeroen_Soede",
    "CSDb V1.0 / SoedeSound Editor identity link (1988): https://csdb.dk/release/?id=117095",
    "CSDb V3.1 (1989): https://csdb.dk/release/?id=90307 ; V3.2: https://csdb.dk/release/?id=117086",
    "Local dataset: 852 files tagged SoedeSoft/Soundmaster_V1.0/V3.1/V3.2 + 56 more tagged bare 'SoedeSoft' (same composer set — see knowledge/COVERAGE.md), 908 total.",
    "data/sidid.json has four matching entries — 'SoedeSoft', '(Soundmaster_V1.0)', '(Soundmaster_V3.1)', '(Soundmaster_V3.2)' — all authored 'Jeroen Soede & Michiel Soede' with comment 'The editor is also known as Soundmaster or SoedeSound Editor', independently corroborating this card's authorship/identity claims"
  ]
}
```

## Overview

Soundmaster is a native C64 music editor+player by the **Soede brothers**
(SoedeSoft) — the Dutch twins **Jeroen Soede** (driver/player) and **Michiel
Soede** (editor) — first released 1988 (also as "SoedeSound Editor V1.0"),
through V3.x in 1988-89. Jeroen wrote the driver from scratch to enable
Rob-Hubbard-style drum arrangements. 908 files here across 63 composers
(852 under versioned `SoedeSoft/Soundmaster_Vx.x` tags, plus 56 more under
the bare `SoedeSoft` tag — same tool, same composer set, just an
unversioned DeepSID-dump label; see `quirks`).

## Quirks & gotchas

See the `quirks` array. Load-bearing: **who did what** (Jeroen=player,
Michiel=editor); the **V1.0 = "SoedeSound Editor" alias**; and a strong
**name-collision warning** (unrelated Fire-Eagle "Soundmaster", Cabana "Sound
Master 2", and the Soedes' separate Amiga "SoundMaster Professional"). Memory
map/ZP/entry points now CONFIRMED (see Verification); data format/effects
still `TODO`.

## Disassembly notes

Two real HVSC files fully disassembled, reassembled, and confirmed
byte-exact + register-write-trace-exact (see Verification):
`MUSICIANS/S/SoedeSoft/Soede_Michiel/Airwolf.sid` and
`MUSICIANS/S/SoedeSoft/Soede_Jeroen/Sphinx.sid`. Both files open with a
2-entry `JMP <init>` / `JMP <play>` table at the file's own load address
(PSID init = load address, play = load+3). `SIDdecompiler`'s default
30000-call trace (`-t` default) baked in a handful of runtime-drifted
self-modified bytes/operands near mid-file self-modifying routines (1 byte
in Airwolf at `$f8e7`, two 3-byte `LDA abs,Y` operand pairs in Sphinx at
`$f948-$f949`/`$f951-$f952`) — all confirmed dead-at-cold-start (the true
pristine SID-file byte is `$00`/table-index-0 in every case) and hand-patched
back to the original bytes to reach 100.0000% byte match; see the project's
`sid-player-verify` agent lessons #10/#16/#17/#20/#21/#29 for the general
pattern. Data format (order list/patterns/instrument/wavetable/pulsetable/
filtertable layouts) and effect command encoding were NOT decoded this pass
— that needs semantic reading of the disassembly's data tables (the ZP
pointer roles at `$A9/$AA/$FB/$FC/$FD` are a good starting point), not just
the structural/byte-level work done here. Also worth investigating: the
SMC-tagged `Soede_2.sid`'s different init/play offset convention (see
`memory.layout`) — possibly an earlier driver revision.

## Verification

**`status: verified` (2026-07-19) — register-write-exact reconstruction of
two independent real files.** Method: `SIDdecompiler.exe` → `64tass.exe` →
byte-diff → `sidm2-sid-trace.exe` (the MCP `sidm2-siddump` tools were not
registered in this session; used the underlying binary directly per this
agent's lesson #8).

- **Airwolf.sid** (Michiel Soede, CSDb SID 26198, 1988): PSID load=$0 (embedded,
  real load $F400), init=$F400, play=$F403, 1 subtune. Disassembled at
  `-a820` (decimal $0334 — SIDdecompiler's own `-v2` memory-touch map
  "Start:" address, one page below the code's true load address, needed to
  avoid a 16-bit-wrap reassembly per this agent's lesson #31/#33).
  Byte-diff over the file's real $F400-$FF5B payload (2908 bytes):
  **99.9656%** before patching (1 diverging byte, `$f8e7`, self-modified/
  drifted per `-v2`'s `+` marker), **100.0000%** after patching it back to
  the true SID-file byte ($7e). Trace-diff (`sidm2-sid-trace.exe`,
  init=$F400/play=$F403, 300 frames, 2451 register writes): **exact match**
  both before and after the patch (the drifted byte was already dead at
  runtime — confirms it wasn't audible, just a leftover of the decompiler's
  own default trace window).
- **Sphinx.sid** (Jeroen Soede, 1988): PSID load=$0 (embedded, real load
  $F700), init=$F700, play=$F703, 1 subtune. Disassembled at `-a679`
  (decimal $02A7, same Start-address-relocation method). Byte-diff over the
  real $F700-$FFF2 payload (2291 bytes): **99.8254%** before patching (4
  diverging bytes in two 2-byte clusters, `$f948-$f949`/`$f951-$f952`, both
  `_`-marked/self-modified-operand in `-v2`), **100.0000%** after patching.
  Trace-diff (300 frames): **exact match** both before and after patching.

Both files independently confirm the same JMP-table entry-point convention,
the same 5-byte zero-page footprint, and the same class of harmless
decompiler-trace-drift divergence — see `memory`/`entry` fields above.
Authorship (Jeroen/Michiel), label, and version history remain VGMPF/CSDb-
sourced (unchanged this pass). Data format and effects remain `TODO` — this
verification covers driver code + entry points, not the song-data format.

## Sources

See the `sources` array — VGMPF (Jeroen Soede), the CSDb V1.0/V3.x releases,
and data/sidid.json's four matching entries (SoedeSoft, Soundmaster_V1.0/
V3.1/V3.2), all authored 'Jeroen Soede & Michiel Soede'.
