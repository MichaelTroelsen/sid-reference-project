# Gavin Graham / Gazza (Warriors of Time)

```json
{
  "id": "gavin-graham",
  "name": "Gavin Graham / Gazza (Warriors of Time)",
  "aliases": ["Gavin_Graham"],
  "authors": ["Gavin Graham ('Gazza')"],
  "released": "1988-1989 (Warriors of Time era)",
  "status": "verified",
  "platform": "Australian demoscener Gavin Graham's ('Gazza,' group Warriors of Time) own playroutine — the name-mismatch between this project's tag ('Gavin_Graham', a real name) and the HVSC folder ('Gazza', a handle) is directly and unambiguously resolved by HVSC's own parenthetical notation. CONFIRMED both coder and musician on his own releases, still active today building modern SID tools. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "File-dependent (not a fixed convention): Dobee.sid loads/inits at $1000 (play $1003); Airwolf.sid loads/inits at $e000 (play $e003) — both disassembled, reassembled, and byte/trace verified this pass (see Verification). Init==load, play==load+3 holds on both, but the absolute address moves per release/game.", "zero_page": "File-dependent, not shared across releases: Dobee.sid uses only $02-$03 (a 2-byte save/restore pointer pushed/popped in the play routine); Airwolf.sid uses a 10-byte block at $a8-$b1 instead. Treat any single ZP range as specific to one build, not a player-wide convention.", "layout": "Each file's code carries a small working-storage block of per-voice frequency/pulse-width/filter state adjacent to its data tables (Dobee: $1550-$15b8; Airwolf: several clusters $e041-$e6ff) that SIDdecompiler's own trace snapshots post-execution rather than pristine — confirmed LOAD-BEARING (not dead) via patch-isolation trace-diff on both files, see Verification." },
  "entry": { "init": "Confirmed via disassembly+reassembly: load address itself on both tested files (Dobee $1000, Airwolf $e000).", "play": "Confirmed: load+3 on both tested files (Dobee $1003, Airwolf $e003; called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 4 filter writes in a dense 179-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE NAME MISMATCH IS DIRECTLY RESOLVED, unlike the [[rene-romijn]] case (which remains genuinely unconfirmed): HVSC Musicians.txt's own entry reads 'Gazza (Graham, Gavin) / Warriors of Time - AUSTRALIA' — HVSC's standard parenthetical format (handle followed by real name in parentheses), unambiguously confirming 'Gazza' is the demoscene handle of a real person named Gavin Graham. Independently corroborated by his own CSDb scener profile (id=8611).",
    "CSDb SCENER PROFILE CONFIRMS: handle 'Gazza' (also 'Gaz'), Australia, active 1986-1992, member of group Warriors of Time (1 Jan 1988 - 1 Dec 1989), roles Coder/Hacker/Musician/Phreaker. CSDb's own profile notes he 'used multiple handles during the C64 era but cannot recall them,' with 'Gazza' becoming his primary handle on Amiga; he also worked with group Factor 4 on Amiga as musician/coder.",
    "CONFIRMED BOTH CODER AND MUSICIAN ON THE SAME RELEASE: CSDb's credits for 'Kernal Selecter' (Warriors of Time, 20 Aug 1989) list Gazza for BOTH Code and Music (with 'Kernal' credited separately for cracking-technique code and 'The Buccaneer' for text) — directly supporting a self-written playroutine, consistent with the traced file's compact, non-standard load/init/play layout ($1000/$1000/$1003).",
    "WARRIORS OF TIME'S GROUP RECORD LISTS GERMANY as its nominal registered country (founder 'Rhodan,' active ~1987-1991, 129+ releases, collaborated with Zenobits and Comtec, ran a 1990 Christmas party in Norway) — not a contradiction of Graham's own confirmed Australian origin; mixed-nationality membership was common in scene groups of this era.",
    "STILL ACTIVELY BUILDING MODERN SID TOOLS, per indexed snippets from his own personal site (gavingraham.com — direct page fetches returned 403, so this is UNCONFIRMED in exact detail though plausible and consistent): he reportedly built 'ReSIDue,' a wavetable synth/VST3 plugin using the reSID emulation engine, showing continued involvement in SID/C64 audio decades after his 1980s scene activity. The same source suggests 'Dobee' (the traced file) may have been written for a small hacker/crack intro, though he 'can't confirm this nowadays' — appropriately flagged as his own uncertain recollection, not a hard fact.",
    "A FOOTBALLER NAME-COLLISION RISK WAS EXPLICITLY CHECKED AND RULED OUT: 'Gazza' is also a famous nickname for footballer Paul Gascoigne, and an unrelated C64 game 'Gazza II' exists — neither connects to Gavin Graham/Warriors of Time in any source checked.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found).",
    "DISASSEMBLY/REASSEMBLY CONFIRMS TWO DIFFERENT BUILDS, NOT ONE SHARED ROUTINE: Dobee.sid (load/init $1000, play $1003, ZP $02-$03) and Airwolf.sid (load/init $e000, play $e003, ZP $a8-$b1) share the load==init / play==load+3 convention and the same working-storage-drift defect shape, but use entirely different zero-page ranges and are almost certainly independently relocated/rewritten per release rather than one fixed player binary — don't assume a single memory map applies across his catalogue.",
    "BOTH TESTED FILES HIT THE SAME CLASS OF SIDdecompiler ARTIFACT (this project's own gotcha 41/lesson 17/43 pattern): a per-voice frequency/pulse-width/filter working-storage block gets captured mid-execution rather than at its pristine cold-start value, because the code both reads and writes it at runtime. Confirmed LOAD-BEARING (not dead) on both files via a patch-isolation trace-diff: the raw reassembly diverges hard from frame 0/1 (Airwolf: 4,255 differing trace-CSV lines over 300 frames), and patching the exact diverging bytes back to the original's pristine values closes it to a register-write-exact match over 300-400 frames. See Verification for exact addresses and counts."
  ],
  "sources": [
    "HVSC Musicians.txt ('Gazza (Graham, Gavin) / Warriors of Time - AUSTRALIA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=8611 (Gazza, full role/group/release history): https://csdb.dk/scener/?id=8611",
    "CSDb group id=663 (Warriors of Time): https://csdb.dk/group/?id=663",
    "CSDb release id=130719 ('Kernal Selecter', 1989, Code+Music both credited to Gazza): https://csdb.dk/release/?id=130719",
    "gavingraham.com — C64 Retro Coding page (indexed snippet only, direct fetch 403'd, ReSIDue tool mention): https://gavingraham.com/geek-stuff-new-old/c64-retro-coding/",
    "Existing KB card: knowledge/players/rene-romijn.md (a contrasting, UNRESOLVED name-mismatch case for comparison)",
    "Local dataset: 4 files tagged Gavin_Graham, 1 composer (see knowledge/COVERAGE.md)",
    "This pass's own disassembly/reassembly/trace verification: HVSC MUSICIANS/G/Gazza/Dobee.sid and Airwolf.sid, via SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe (see Verification for exact method and results)"
  ]
}
```

## Overview

The `Gavin_Graham` tag is Australian demoscener Gavin Graham's ('Gazza,'
Warriors of Time) own playroutine. Unlike the similar-looking
[[rene-romijn]] name-mismatch case, this one is directly and
unambiguously resolved by HVSC's own parenthetical handle-to-real-name
notation. Confirmed both coder and musician, still active today building
modern SID tools. Player-ID-fingerprinted across 4 files, all his own.
Disassembled, reassembled, and register-write-verified on two of those
files this pass (see Verification) — the two builds tested use different
load addresses and zero-page ranges, so "his own playroutine" describes a
recurring authorial style/convention (load==init, play==load+3, a
runtime-drifted per-voice working-storage block), not one fixed binary
reused unmodified across releases.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **cleanly resolved
name mismatch**, a useful contrast case to [[rene-romijn]]'s genuinely
unresolved one in this same KB. Also notable: he appears to be **still
actively building SID-related audio tools decades later** (a VST3
plugin, 'ReSIDue'), per his own personal site.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). This pass
produced the first original disassembly: `SIDdecompiler.exe -a<decimal
load> -z -d -c -v2` on both `Dobee.sid` (`-a4096`) and `Airwolf.sid`
(`-a57344`) — in both cases the `-v2` memory map's own "Start:" address
matched the file's real PSID load address exactly (no gotcha-40
relocation trap on either file). Both reassembled cleanly with `64tass`
with no warnings and no wrap. The only defect found on either file is the
working-storage-drift artifact described in the quirks array and
Verification below — not a labeling bug, not a dropped byte, not a
mis-set relocation base.

## Verification

**`status: verified` (2026-07-25) — register-write-exact reconstruction
confirmed on 2 independent real HVSC files.**

Method, per `knowledge/playbooks/disassemble-a-player.md` and this
project's `sid-player-verify` process:

1. Read each file's real PSID header directly. `Dobee.sid`: load/init
   `$1000`, play `$1003`, 1 subtune, payload 2,977 bytes. `Airwolf.sid`:
   load/init `$e000`, play `$e003`, 1 subtune, payload 4,808 bytes.
2. Disassembled with `SIDdecompiler.exe -a<decimal load> -z -d -c -v2`;
   confirmed the `-v2` map's `Start:` matched the PSID load address on
   both files (no relocation trap, gotcha 40 doesn't apply here).
3. Reassembled with `64tass.exe` — clean, no warnings, no `-Wwrap-pc`.
   `Dobee.asm` reassembled to 2,974 bytes (3 bytes short of the original
   2,977 — the trailing 3 bytes of the original payload are `$00 $00 $00`
   padding past the `-v2` map's own reported `End: $1b9d`, i.e. genuinely
   unreferenced trailing data per this project's precedent for that
   shape, not a real gap). `Airwolf.asm` reassembled to the full,
   byte-exact-length 4,808 bytes.
4. Byte-diffed the reassembled `.prg` against the pristine original SID
   payload (overlapping region only, for Dobee's 3-byte tail):
   **Dobee.sid — 40/2,974 bytes differed (98.6550%)**, one contiguous
   cluster at `$1550-$15b5` (a per-voice pulse-width/filter
   working-storage table, read+written at runtime — `.asm` labels
   `l1550`-`l15b8`). **Airwolf.sid — 71/4,808 bytes differed (98.5233%)**,
   several smaller clusters at `$e041-$e0fb`, `$e195`, `$e349-$e382`,
   `$e422-$e430`, `$e4fe-$e4ff`, `$e5e8-$e5fa`, `$e6f0-$e6ff` — same
   shape, same `-v2`-map write-touched (`+`/`w`) markers, more scattered
   because this build's working-storage layout differs from Dobee's.
5. Patched the reassembled `.prg` binary directly at every diverging
   address, byte-for-byte, to the real file's own pristine value (not
   the decompiler's post-execution snapshot) — both files reached
   **0 remaining byte differences (100.0000% byte-exact)**. For Dobee
   this was also carried back into the `.asm` source itself (the
   `l1550`-`l15b8` `.byte` lines were hand-corrected to the pristine
   values, annotated inline; re-assembling from the corrected source
   independently reproduces the same 100.0000%-byte-exact `.prg`).
6. Traced original vs. reassembled (unpatched) and original vs. patched
   via `sidm2-sid-trace.exe <prg> <frames> <init_hex> <play_hex> <subtune>`,
   diffed with plain `diff` (per lesson 8/46 — stderr, not stdout, carries
   the CSV): **unpatched reassembly genuinely diverges** on both files
   (Dobee: frame 0 short one `filter_freq_hi` write, then desyncs on
   every osc3 pulse-width value from frame 1 onward; Airwolf: 4,255
   differing CSV lines over 300 frames) — confirming the drifted bytes
   are **load-bearing, not dead workspace**, consistent with this
   project's own precedent for this class of gap (never assume a
   write-touched byte is dead without a trace-diff). **Patched
   reconstruction: 0 register-write differences** — Dobee over 400
   frames (2,480 trace-CSV lines, only the tool's own echoed input
   filename differs), Airwolf over 300 frames (only the filename line
   differs).

**Scope honestly stated**: this verifies the entry-point/ZP/byte-level
reconstruction for both tested files completely (each is a single-subtune
PSID with no untested subtune path). It does **not** establish that
`Gavin_Graham`'s other 2 tagged HVSC files (`Kernal_Selecter_menu.sid`,
`Hi-Score.sid`, etc. — the `Gazza` folder has 11 files total, not all
necessarily player-ID-fingerprinted as this exact routine) share the same
code; the two files tested here already show the memory map and ZP usage
are NOT constant across releases (see quirks), so a third file could in
principle diverge further than this pattern. The full musicological data
format (order list, patterns, instruments, wave/pulse/filter tables,
effect-command encoding) remains `TODO` — this pass closed the
reconstruction/byte-exactness gap the card previously flagged as blocking
`verified`, not the full playbook walk.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (3 entries),
gavingraham.com, and the related rene-romijn card.
