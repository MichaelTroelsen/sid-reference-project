# Thomas Kolbe (player routine)

```json
{
  "id": "thomas-kolbe",
  "name": "Thomas Kolbe (player routine)",
  "aliases": ["Thomas_Kolbe"],
  "authors": ["Thomas H. Kolbe"],
  "released": "1986-1989",
  "status": "in-progress",
  "platform": "German coder-composer Thomas H. Kolbe's own playroutine — a confirmed dual-role coder/musician who consistently co-developed his titles with Zuheir Urwani, both working on Markt & Technik/64'er-magazine-adjacent releases. Now a research assistant at the University of Bonn's Institute for Cartography and Geoinformation. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "All 3 files carry PSID load-address field 0 (real load address embedded as the payload's own first 2 LE bytes). Hyperrace.sid: load $095d. Das_Schwarze_Schloss.sid: load $7a66. Omidar.sid: load $2916 — three different absolute bases, per-title, not a fixed convention.", "zero_page": "Disassembled from Hyperrace.sid: $2b/$2c is the base of 3 consecutive zero-page-indexed indirect pointers ($2b/$2c, $2d/$2e, $2f/$30), one per voice, dereferenced via (zp,X) with X = voice_index*2. Each points at a per-voice pattern/command byte stream.", "layout": "Hyperrace.sid: a ~7-byte working-storage block at $0335-$033b sits immediately below the load address ($095d) — SIDdecompiler's `-v2` map reports its own traced Start at $033c (gotcha-40 territory: fixed low-RAM workspace below load, not code, not a copy-loop destination — confirmed via the absence of any page-copy loop and the absence of `x`/execute markers in that region)." },
  "entry": { "init": "Per-file, read from each file's own PSID header directly (do not assume convention): Hyperrace $095d, Das_Schwarze_Schloss $a34c, Omidar $2920.", "play": "Hyperrace $0960 (called in IRQ). Das_Schwarze_Schloss $a3fc. Omidar $2943." },
  "speed": "TODO — not derived from this pass's disassembly.",
  "data_format": { "order_list": "TODO", "patterns": "Hyperrace.sid: per-voice pattern stream read via indirect pointer, command byte values $fb/$fc/$fe/$ff reserved for special ops (branch targets confirmed in disassembly, exact semantics not fully mapped this pass).", "instruments": "Hyperrace.sid: a 16-byte-per-instrument table at load+$0c (native $0969), indexed as instrument_id<<4; fields copied into per-voice workspace at note-trigger time (waveform/pulse-width-related bytes duplicated into two workspace slots, then 6 further bytes copied into ADSR/pulse-width/filter-adjacent workspace cells) — full field-by-field semantics TODO.", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample from a prior pass; not re-checked this pass)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS 'Kolbe, Thomas - GERMANY,' no group listed — consistent with a games-industry rather than demoscene composer.",
    "FULL BIOGRAPHY FOUND: Thomas H. Kolbe, born 1968, Germany — described on C64-Wiki (DE) as 'Programmierer, Musiker, Grafiker' (programmer/musician/graphic artist). Married with two children; since 1999 a research assistant at the Institute for Cartography and Geoinformation, University of Bonn — a genuinely notable, well-documented later academic career for a 1980s C64 composer.",
    "THREE CONFIRMED TITLES, all co-developed with Zuheir Urwani: Hyperrace (1987, Ariolasoft — a top-view scrolling shooter with split-screen two-player mode; Kolbe credited as BOTH programmer AND composer, title screen music/level-transition themes/SFX), Omidar (1986 per C64-Wiki, though other sources give 1987 — an Amidar-clone maze game published via Markt & Technik/Happy Computer/64'er magazine type-in or budget line; which of the two composed the music is UNCONFIRMED), and Das Schwarze Schloß ('The Black Castle,' the traced file — an action-RPG/adventure, publishers Markt & Technik Verlag/Profiteam Software, dates conflict across sources between 1987 and 1989 — a magazine type-in program with a later disk release, both years plausible depending on which format is meant).",
    "DAS SCHWARZE SCHLOSS'S MUSICIAN CREDIT IS EXPLICITLY CONTESTED ACROSS SOURCES, reported honestly rather than picking one: CSDb's own SID entry (id=51323) lists BOTH 'Zuheir Urwani & Thomas Kolbe' as composers of the traced file, but C64-Wiki's own game page marks the musician credit as 'unbekannt' (unknown) rather than confirming Kolbe specifically. Left explicitly unresolved.",
    "CONFIRMED DUAL CODER/COMPOSER ROLE ON HYPERRACE SPECIFICALLY — likely true for the other two titles as well given the consistent two-person Urwani/Kolbe team pattern, but the exact coding-vs-music split for Omidar and Das Schwarze Schloß specifically is UNCONFIRMED (Urwani is co-credited as composer on at least one SID entry, suggesting the two may have split music duties differently per title).",
    "A LATER, POST-C64 COLLABORATION WAS FOUND: with Urwani, an Amiga music program called 'Soundfactory' (1989-1991), self-published — sourced only from a single C64-Wiki mention, UNCONFIRMED beyond that.",
    "NO CSDb SCENER PROFILE EXISTS — a CSDb search for 'Kolbe' returns zero scener/group matches, consistent with him being a commercial games-industry figure, not a demoscene participant.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other German composer already carded in this KB — checked against [[andreas-bauernfeind]], [[christoph-bergmann]], [[georg-brandt]], [[georg-brandt-rhythm-cs]], [[ulrich-muehl]] — no direct collaborator, publisher, or group overlap surfaced beyond incidental shared years (1987/1989), which is not treated as a real connection. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Kolbe, Thomas - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "C64-Wiki (DE) — Thomas H. Kolbe (biography, later academic career): https://www.c64-wiki.de/wiki/Thomas_H._Kolbe",
    "C64-Wiki (DE) — Hyperrace (full credits): https://www.c64-wiki.de/wiki/Hyperrace",
    "MobyGames — Hyperrace: https://www.mobygames.com/game/70184/hyperrace/",
    "GB64 — Hyperrace: https://gamebase64.com/game.php?d=24&h=0&id=3671",
    "Lemon64 — Omidar: https://www.lemon64.com/game/omidar",
    "CSDb sid id=51323 (Das Schwarze Schloß, dual composer credit): https://csdb.dk/sid/?id=51323",
    "C64-Wiki (DE) — Das Schwarze Schloß (musician credit marked unknown): https://www.c64-wiki.de/wiki/Das_Schwarze_Schlo%C3%9F",
    "Local dataset: 3 files tagged Thomas_Kolbe, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Thomas_Kolbe` tag is German coder-composer Thomas H. Kolbe's own
playroutine — a dual-role coder/musician who consistently co-developed
his titles with Zuheir Urwani. Now a research assistant at the
University of Bonn. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **well-documented,
notable later career** as a university research assistant, a rare depth
of biographical detail for a small 1980s German type-in composer. Also
notable: an **honestly-preserved credit conflict** on the traced file's
own musician attribution, left unresolved between two sources rather
than picking one arbitrarily.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). This pass
produced an original `SIDdecompiler`/64tass disassembly+reassembly of
`Hyperrace.sid` (see Verification) — the first real disassembly-derived
evidence on this card. Das Schwarze Schloß and Omidar were not
disassembled this pass (see next lead below); note Das Schwarze Schloß
in particular is a ~10KB game-engine rip whose PSID init/play vectors
sit deep inside a much larger payload than Hyperrace's compact ~2.5KB
dedicated tune (structurally a different shape — worth checking before
assuming it's the same routine, per this KB's own precedent for
same-tag-different-engine cases).

## Verification

**Byte-diff + trace-diff attempted this pass (2026-08-07) —
`status: in-progress` (unchanged; native match likely tautological, and
the non-tautological relocation control found real, unresolved
divergence — see below).**

Disassembled `Hyperrace.sid` (PSID load `$095d`, init `$095d`, play
`$0960`, 4 subtunes) with `SIDdecompiler -a828 -z -d -c -v2 -r`
(`-a828` = decimal for the tool's own `-v2` Start address `$033c`, 7
bytes below the load address — a small fixed workspace gap, not code;
see `memory.layout`).

- **Byte-diff (native addresses):** 100.0000% exact (0/2395 bytes) on
  the region SIDdecompiler's trace actually covered ($095d-$12b7, 2395
  of the file's 2521 payload bytes = 95.0% coverage). The uncovered
  126-byte tail ($12b8-$1335) is not padding — it hex-dumps as
  structured, non-zero, pattern-command-shaped data — and raising `-t`
  to 200000 (20x default) did not extend coverage, so it's very
  plausibly genuine song data none of the 4 subtunes' play routines
  reach within any traced window, not a tool shortfall (per this
  agent's lesson on genuinely-unreached-by-anyone tails).
- **Trace-diff (native addresses, `sidm2-sid-trace.exe`, all 4
  subtunes, 100 frames each):** exact match including cycle timestamps,
  0 diff lines, on all 4 subtunes — **2207 total register writes**
  (768 + 350 + 796 + 293 across subtunes 0-3).
- **Caveat on the native result:** because the byte-diff is 100% exact
  on the covered region (a `-r` build), the native trace-diff is largely
  tautological (this agent's own documented `-r` trap) — it is not, on
  its own, sufficient evidence for `verified`.
- **Relocation-invariance control (page-aligned +$2000 and
  non-page-aligned +$2037, both from the same disassembly):** found and
  fixed two genuine, confirmed relocation defects: (a) 7 code-operand
  absolute literals (`$0335`-`$0339,X`) pointing 3-7 bytes below the
  `-v2` Start address — invisible natively (equal to their correct
  workspace value at native addresses) but unrelocated in the control;
  rewritten against a `RB = $033c` base equate. (b) An unsymbolized
  3-entry split lo/hi pointer table at load+$06 (native `$0963-$0968`)
  feeding the per-voice zero-page indirect pattern pointers described in
  `memory.zero_page` — rewritten as `<label`/`>label` pairs against the
  two now-labelled targets. Both fixes were confirmed to actually change
  the assembled relocated binary (12 and 3 bytes respectively) before
  re-testing. **Neither fix, individually or combined, closed the
  control:** both the page-aligned and non-page-aligned rebuilds still
  diverge from the original by an identical 600/329/622/270 lines
  (cycle-stripped register-write comparison) across the 4 subtunes,
  starting from frame 0 of PLAY (INIT's own SID-register writes match
  exactly in both builds — the divergence is in workspace/control-flow
  state, not SID output, until frame 0). Aligned and unaligned controls
  fail identically, which rules out a page-lock explanation (this KB's
  own precedent for that pattern requires the two to disagree).
- **Not RetroDebugger-attempted this pass** (unavailable this session,
  and this agent does not use it solo per its own constraints even when
  connected) — **the concrete next step is a live single-step
  comparison of the two relocation-control builds' zero-page/workspace
  state right after INIT and through the first PLAY call**, to find
  what unsymbolized runtime-computed reference (if any) survived the two
  fixes above; a further static grep for out-of-range literals and
  self-modified-operand `WARNING` comments in the generated `.asm` found
  nothing else to fix by hand.

Prior pass's playback-only figures for Das Schwarze Schloss (load
`$7a66`, init `$a34c`, play `$a3fc`, 180 writes/50 frames, 0 filter
writes) are unchanged/unverified — no disassembly was attempted on that
file this pass.

## Sources

See the `sources` array — HVSC Musicians.txt, C64-Wiki (DE, 3 pages),
MobyGames, GB64, and CSDb.
