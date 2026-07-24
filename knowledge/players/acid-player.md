# Acid Player (Stuart McDowell)

```json
{
  "id": "acid-player",
  "name": "Acid Player (Stuart McDowell)",
  "aliases": ["Acid_Player"],
  "authors": ["Stuart McDowell"],
  "released": "1988-1991",
  "status": "verified",
  "platform": "English musician Stuart McDowell's ('Acid') own hand-coded playroutine, never released as a public tool — file titles across his output read like a personal development/testbed narrative rather than a distributed editor. Player-ID-fingerprinted across 30 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per file/build — the PSID header's own load address, not fixed (confirmed on 3 real files: A_Little_Something $7000, Filter_Test $142d [an unusual, non-page-aligned real load address], Zygon $2000).", "zero_page": "$A8-$C6 observed across all 3 disassembled builds (A_Little_Something used $A8-$BC, Filter_Test $A8-$B7, Zygon $A8-$C6) — consistent ~30-byte window across independent builds, likely per-voice/tempo counters and table-index pointers; not walked instruction-by-instruction.", "layout": "Init/play code sits directly at the PSID load address in 2 of 3 files (A_Little_Something, Zygon); Filter_Test is the exception — SIDdecompiler's -v2 memory map reports its true 'Start:' as $0800, a fixed low-page runtime workspace BELOW the file's own load address ($142d), the same class of trap documented project-wide as gotcha 31/38. Relocating to that Start: address (not the PSID load address) was required for a non-wrapping reassembly." },
  "entry": { "init": "Not a fixed offset from load — varies per file/build. Confirmed via 3 real-file PSID headers + trace: A_Little_Something $8000, Filter_Test $2fb5, Zygon $2fcd.", "play": "Not a fixed offset from load — varies per file/build. Confirmed: A_Little_Something $8fc0 (IRQ-called), Filter_Test $3004, Zygon $3d80." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 54 filter writes in the 50-frame sample; independently corroborated by a 'Filter Test' title existing in his own catalog)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "PERSONAL DEVELOPMENT/TESTBED SIGNAL, not a public tool: file titles across his 30 SID credits are strongly consistent with an iterative, self-directed development narrative rather than a distributed editor — 'Filter Test', 'New Routine M-02', 'New Routine M-03', 'L 01 trial', 'Test File R', 'Demo 1' through 'Demo 6', plus several 'C128'-prefixed files (possibly cross-platform tests). No CSDb release exists for 'Acid Player' as a named/shipped product — consistent with an undistributed personal routine.",
    "TIGHT 1988-1991 WINDOW with no later output found anywhere — likely a short-lived personal project he moved on from, not an actively maintained/adopted tool.",
    "NAME-COLLISION TRAP, explicitly flagged: naive searches for 'Acid Player' overwhelmingly surface 'ACID 64 Player Pro' (by Wilfred Bos, 2010-present) — a completely unrelated MODERN third-party SID-playback application, not connected to Stuart McDowell or this tag in any way. Do not conflate the two; this KB card is about the 1988-91 hand-coded playroutine, not the 2010s playback tool.",
    "NO CSDb SCENER PAGE FOUND for Stuart McDowell or the handle 'Acid' — CSDb's SID index has all 30 credits, but no linked composer/scener profile page exists at all. Consequently: no confirmed coder role, no group membership, no commercial game credits, no interviews or biographical material of any kind were found — a genuinely thin footprint, left honestly unfilled rather than speculated.",
    "HVSC Musicians.txt entry is bare-minimum: 'McDowell, Stuart (Acid) - UNITED KINGDOM (ENGLAND)', no group/active-years fields.",
    "Not in SIDId with a distinct tool name (only the author string 'Stuart McDowell (Acid)', no separate name/released/comment fields). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note). Own original disassembly (2026-07-24) confirms register-write-exact reconstruction on 3 real files — see Verification.",
    "PERSONAL-TESTBED SIGNAL CONFIRMED AT THE CODE LEVEL, not just the file-titles: the 3 disassembled files (A_Little_Something, Filter_Test, Zygon) each use DIFFERENT init/play addresses relative to their own load address, i.e. genuinely different player-code builds per file, not one fixed routine reused with different data — consistent with the 'New Routine M-02'/'New Routine M-03' file-title narrative describing real, distinct code iterations.",
    "Filter_Test.sid (and, by identical init/play addresses, Smile.sid) loads at an unusual non-page-aligned address ($142d) and needs a relocation base BELOW its own PSID load address ($0800, per SIDdecompiler's -v2 'Start:' line) to reassemble without 16-bit wraparound — a fixed low-page runtime workspace the file's own header doesn't mention. See gotcha 31/38 in the verify-agent's lessons_learned for the general pattern.",
    "All 3 disassembled files show a small residual byte-diff (0.11%-0.71%, 12-58 bytes) fully explained as dead/self-modified working-storage: every diverging byte sits inside a SIDdecompiler -v2 map '+' (write-touched) region, and a full 50-frame register-write trace (all 3 subtunes on Zygon) is byte-for-byte identical between original and reconstruction despite the byte-diff. This is the standard 'drifted post-execution snapshot' pattern documented project-wide, not a real code difference."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('McDowell, Stuart (Acid) - UNITED KINGDOM (ENGLAND)')",
    "CSDb search — McDowell (30 matching SID credits, 1988-1991, cross-confirms the file count): https://csdb.dk/search/?search=McDowell",
    "CSDb — ACID 64 Player Pro (unrelated modern tool, explicitly ruled out as a connection): https://csdb.dk/release/?id=200590",
    "Local dataset: 30 files tagged Acid_Player, 1 composer (see knowledge/COVERAGE.md)",
    "Own disassembly/trace-diff verification (2026-07-24) against 3 real HVSC files (MUSICIANS/M/McDowell_Stuart/A_Little_Something.sid, Filter_Test.sid, Zygon.sid) using SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe — see Verification section for method and results."
  ]
}
```

## Overview

The `Acid_Player` tag is English musician Stuart McDowell's ('Acid') own
hand-coded playroutine — never released as a public tool, with file titles
reading like a personal development log ('Filter Test', 'New Routine
M-02', 'Demo 1'-'Demo 6'). Player-ID-fingerprinted across 30 files, all his
own, all within a tight 1988-1991 window. Verified `status: verified`
(2026-07-24) via original disassembly + register-write-exact trace match on
3 real files spanning 3 distinct code builds — see Verification.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **testbed-narrative
file titles**, strong circumstantial evidence this was a personal project
never distributed; a **genuinely thin CSDb footprint** (no scener profile
page exists at all); and an explicitly flagged **name-collision trap**
with a modern, unrelated tool also called "Acid Player"/"ACID64".

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Own original
disassembly (`SIDdecompiler.exe` + `64tass.exe`, 2026-07-24) on 3 real HVSC
files — see Verification for the full method and results. Internal data
format (order list / patterns / instruments / wave-pulse-filter tables) and
effect-command encoding were **not** reverse-engineered this pass — a
register-write-exact reconstruction only requires the code to run correctly,
not for a human to have named its data tables yet. Those remain `TODO` for
a future pass through `knowledge/playbooks/disassemble-a-player.md`'s
steps 3-5 specifically.

## Verification

**Register-write-exact trace match confirmed (2026-07-24) — `status: verified`.**

Disassembled and reassembled 3 real HVSC `Acid_Player`-tagged files, each a
genuinely different player-code build (different init/play offsets from
load), and trace-diffed each against the original:

| File | Load | Init | Play | Byte-diff | Trace-diff (50 frames) |
|---|---|---|---|---|---|
| `A_Little_Something.sid` | `$7000` | `$8000` | `$8fc0` | 99.2917% (58/8189 bytes diff, all within `+`-marked self-modified ranges `$8500-$87b9`) | **Exact** (219 register writes) |
| `Filter_Test.sid` | `$142d` | `$2fb5` | `$3004` | 99.8928% (12/11191 bytes diff, `$1430-$3f92`, all `+`-marked) | **Exact** (377 register writes) |
| `Zygon.sid` (3 subtunes) | `$2000` | `$2fcd` | `$3d80` | 99.4739% (40/7603 bytes diff, `$3aa9-$3bcd`, all `+`/`w`-marked) | **Exact on all 3 subtunes** |

Method (per `knowledge/playbooks/disassemble-a-player.md` +
`.claude/agents/sid-player-verify.md`): `SIDdecompiler.exe <file> -o<out.asm>
-a<decimal load addr> -z -d -c -v2`, cross-checked the `-v2` map's own
`Start:` line against the PSID header's load address before relocating
(caught the `Filter_Test.sid` low-page-workspace case — relocated to `$0800`
instead of the header's `$142d`, per the project's gotcha 31/38 pattern),
reassembled with `64tass.exe -a --cbm-prg`, byte-diffed the payloads in
Node, then traced both original and reconstruction with
`sidm2-sid-trace.exe <prg> 50 <init_hex> <play_hex> [subtune]` (MCP
`sidm2-siddump` tools were available but the raw binary was used directly
for convenience) and `diff`'d the two trace logs — the only difference in
every case was the echoed input filename on line 1, i.e. every SID register
write, in order, at the same frame/cycle, matched exactly.

The small residual byte-diffs (0.11%-0.71%) are not a real divergence:
every diverging byte falls inside a `-v2`-map `+`/`w` (write-touched)
address, and the trace match proves those bytes are always overwritten
before being read — SIDdecompiler snapshots their post-execution value
(a value that drifted during its own internal emulation window) rather
than the file's pristine cold-start byte. This is the same well-documented
pattern seen across many other players in this project (dead
self-modified working storage) — not a gap in this reconstruction.

Zero-page usage ($A8-$C6, consistent across all 3 independent builds) and
the init/play-varies-per-build finding are new facts from this pass, now
recorded in the `memory`/`entry` fields above. Internal data/effect format
is still `TODO` — a genuinely separate task from trace verification (see
Disassembly notes).

## Sources

See the `sources` array — HVSC Musicians.txt and CSDb (search + the
unrelated-tool disambiguation).
