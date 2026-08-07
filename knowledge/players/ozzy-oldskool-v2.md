# Ozzy Oldskool V2 (Ossi Aarnio)

```json
{
  "id": "ozzy-oldskool-v2",
  "name": "Ozzy Oldskool V2 (Ossi Aarnio)",
  "aliases": ["Ozzy_Oldschool_V2"],
  "authors": ["Ossi Aarnio (Ozzy Oldskool)"],
  "released": "2004-2012 (Upstars)",
  "status": "in-progress",
  "platform": "The SECOND, structurally distinct version of already-carded [[ozzy-oldskool]]'s (Ossi Aarnio, Upstars founder) own playroutine — load $1000, versus V1's $A000, spanning 2004-2012 releases. Unlike V1, V2 shows genuine cross-composer reuse: one of its 4 files was scored by a DIFFERENT musician, Mikko Tanni ('Mordicus'), while Aarnio himself retains a 'Code' credit on that release — direct evidence he built the tool a second person then used. Player-ID-fingerprinted across 4 files: 3 by Aarnio, 1 by Tanni.",
  "csdb_release": 51523,

  "memory": { "load_address": "CONFIRMED via disassembly on all 3 available V2 HVSC files (Bulliting/2004, No_Direction/2007, Starglide/2012), not just the earlier single-file sample: load $1000, init $1000, play $1003, identical across all 3 — homogeneous engine, no per-file load-address drift (contrast lesson 71's V1 warning).", "zero_page": "zp $fb/$fc (zfb/zfc, a `(zp),Y` order/pattern pointer) and $fd/$fe/$ff (zfd=subtune*2 index, zfe/zff a second `(zp),Y` pointer used for per-voice parameter fetch).", "layout": "INIT unconditionally zeroes a 105-byte ($69) working-storage block at native $1685-$16ed via `ldx #$69 / lda #$00 / sta $d400,X / sta l1685,X / dex / bpl`, which ALSO zeroes SID registers $d400-$d469 (i.e. clears all 3 voices via the 32-byte hardware mirror) in the same loop — the same block SIDdecompiler's `-r` bakes in a stale non-zero 'pristine' snapshot for (e.g. l1686/l1687 showing $a0/$21), which is DEAD (lesson 10's pattern) since it's zeroed before first use in every build. Native load $1000-$28de (Bulliting)/$1000-$2bba (No_Direction)/$1000-$2d5d (Starglide)." },
  "entry": { "init": "Confirmed all 3 files: $1000.", "play": "Confirmed all 3 files: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 39 filter writes in a dense 399-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED SAME AS V1: both `data/composers/oldskool-ozzy.json` and the raw DeepSID dump (`hvsc_files.sql`) place all V1 and V2 files under the single composer folder `MUSICIANS/O/Ozzy_Oldskool/`, same CSDb scener id=4568 (Ossi Aarnio, Finland, Upstars founder) as [[ozzy-oldskool]]'s own card.",
    "NO FORMAL VERSION CHANGELOG EXISTS — only an inferable timeline, EXPLICITLY NOT OVERSTATED as a documented fact: per the raw dump, V1 is exclusive to the single 2002 release ('Risperdal Dreams,' load $A000) and never recurs after that year. V2's full set spans Bulliting (2004, the traced file), Vertical Smiley (2005), No Direction (2007), and Starglide (2012) — all load $1000, a genuinely different memory layout, covering the rest of his active career. This is DeepSID's own tag split, not a self-published 'V2' name by Aarnio; no source explicitly documents WHY or WHAT CHANGED between versions — this is inference from load address and dates, not a stated changelog.",
    "GENUINE CROSS-COMPOSER REUSE, unlike V1: 'Vertical Smiley' (2005, an Asymptote party demo intro) is credited to a DIFFERENT musician, Mikko Tanni ('Mordicus') — while CSDb SEPARATELY confirms Ozzy Oldskool himself has a 'Code' credit on that same 2005 release, directly supporting that he built the player Tanni then used for his own tune. Per this project's own inferred-player heuristic (spread across composers = more likely a genuine reusable tool), V2 is the more 'real tool' of the two versions.",
    "THE DENSITY DIFFERENCE (399 writes/39 filter for V2's traced file vs. V1's 133 writes/2 filter) IS CONSISTENT WITH, BUT NOT PROOF OF, AN IMPROVED/MORE CAPABLE DRIVER — flagged as a reasonable but not fully proven inference, since write density also reflects the specific tune's own compositional choices, not necessarily a hard capability ceiling of either driver version.",
    "'STARGLIDE' (2012) HAS NO CONFIRMED CONNECTION TO ARGONAUT SOFTWARE'S 1988 GAME OF THE SAME NAME — explicitly investigated and found unsupported: no CSDb release titled 'Starglide' exists under Ozzy Oldskool/Upstars credits (Upstars' full CSDb catalog is only 4 releases total: Risperdal Dreams 2002, Emulated 2004, No Direction 2007, Recharger 2012). The embedded PSID copyright string reads '2012 Upstars' (same year as Recharger), suggesting a loose/unreleased single-file HVSC upload rather than a demo-compo release. Best read: an unrelated, same-titled original tune, not a tribute or cover.",
    "A REAL DATA-QUALITY ISSUE WAS FOUND AND MUST BE FLAGGED, similar to the Ulrich Mühl case already documented elsewhere in this KB: this project's own stored `csdb_id` values for all 3 of the V2 dataset's non-primary files are WRONG — verified by direct CSDb fetch, id 22480 (stored for Bulliting) actually resolves to 'Penetrator' (a 1984 crack), id 38427 (stored for No Direction) to 'Freddy Hardest +' (a 1987 crack), and id 47436 (stored for Starglide) to 'Labyrinth +8' (a 1991 crack) — all unrelated. No Direction's REAL CSDb release id is 51523 (used as this card's `csdb_release`, confirmed 4 August 2007, Assembly Summer 2007 competition, credited solely to Ozzy Oldskool for Code/Music/Graphics). Bulliting and Starglide appear to have NO standalone CSDb release page at all. Do not cite the wrong IDs (22480/38427/47436) elsewhere.",
    "Not confirmed in SIDId (no entry for this tag, matching V1's own gap). Direct, confirmed relationship to [[ozzy-oldskool]] (same author, earlier version — cross-referenced in both directions, that card updated in this same batch). No card exists for Mikko Tanni/'Mordicus' or for the Upstars/Asymptote groups. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "CSDb scener id=4568 (Ossi Aarnio / Ozzy Oldskool, same identity as V1): https://csdb.dk/scener/?id=4568",
    "This project's local DeepSID database dump (deepsid_dl/DeepSID_Database/hvsc_files.sql — authoritative for V1/V2 load-address split and V2's full 4-file/date span)",
    "CSDb release id=51523 ('No Direction', confirmed real release, Assembly Summer 2007): https://csdb.dk/release/?id=51523",
    "CSDb group id=1481 (Upstars, full 4-release catalog): https://csdb.dk/group/?id=1481",
    "Existing KB card: knowledge/players/ozzy-oldskool.md (V1, same author, updated in this same batch)",
    "Local dataset: 4 files tagged Ozzy_Oldschool_V2, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ozzy_Oldschool_V2` tag is the second, structurally distinct version
of already-carded [[ozzy-oldskool]]'s own playroutine — a different load
address, spanning his 2004-2012 output. Unlike V1, V2 shows genuine
cross-composer reuse by a second musician. Player-ID-fingerprinted across
4 files: 3 by Aarnio, 1 by Mikko Tanni ('Mordicus').

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
cross-composer reuse**, directly supported by Aarnio's own separate 'Code'
credit on the release scored by someone else. Also notable: a **real
data-quality catch** — 3 of this tag's own cached CSDb IDs in the
project's dump resolve to unrelated releases, now flagged and corrected.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). An original
disassembly was produced this batch (see Verification) — native
byte-diff is 100.0000% exact on all 3 available V2 files, but the native
trace is tautological (SIDdecompiler's `-r` flag guarantees a byte-exact
build, per gotcha 63/69) so it is not by itself sufficient evidence for
`verified`. The relocation-invariance control that would supply
non-tautological evidence currently fails (two real unsymbolized-pointer
defects found and fixed, a third still unresolved — see Verification for
the exact addresses and the RetroDebugger escalation this needs). Not yet
compared against V1's own disassembly to settle whether V2 shares code
or is a genuine rewrite — that comparison is still open.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Ozzy_Oldschool_V2` `.sid` (Bulliting): load `$1000`,
init `$1000`, play `$1003`, **399 register writes / 50 frames** (39
filter writes — very dense, filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

**Disassembly + byte-diff + relocation-control attempted (2026-08-07) —
`status` unchanged (`in-progress`), real progress made but not closed.**

Disassembled `Bulliting.sid` with `SIDdecompiler.exe -a4096 -z -d -c -v2 -r`
(load $1000; `-r` per gotcha 63 to get pristine bytes). Reassembled with
64tass, no warnings. **Byte-diff: 100.0000% exact** on the 6367 covered
bytes (`-v2` map reports `Start: $1000 End: $28de`, confirmed stable even
at `-t 200000` — the 3 trailing file bytes at $28df-$28e1 are genuinely
unreferenced by this file's own playback, not a defect: 6367/6370 =
99.95% full-file coverage, 100% match on the covered region). Confirmed
the same native byte-exactness on the other two available V2 HVSC files
too: `No_Direction.sid` (100.0000%, full 7099/7099 bytes covered) and
`Starglide.sid` (100.0000%, full 7518/7518 bytes covered) — all three use
identical load/init/play addresses, homogeneous engine.

Because `-r` makes the native reassembly byte-identical to the original,
any trace-diff at the native address is tautological by construction
(gotcha 63/69/70) and was **not** treated as verification evidence on its
own. Ran the prescribed relocation-invariance control instead (lessons
69/70/72): rebuilt the same Bulliting disassembly at a page-aligned base
(`$6000`) and a non-page-aligned base (`$5011`), confirming both differ
from the native build at 435 and 874 byte offsets respectively (a real
structural test, not a no-op). **Both controls failed identically**: only
3 of the original's 399 register writes reproduced (all wrong values,
`sustain_release` FF->$00 instead of FF->$A7 for all 3 voices), then
total silence for the remaining 49 frames. Failing identically at both a
page-aligned and non-page-aligned base rules out the common
page-relocation-lock explanation (lessons 79/87/91/103/110) — this is a
genuine unrelocated-pointer defect, not a driver design constraint.

Found and fixed **two concrete instances** of the unsymbolized-literal
class (lessons 72(b)/77/80): (1) native `$2000`/`$2001` — a per-subtune
base-pointer literal (`.byte $80` / `.byte $23` = raw $2380) read once by
INIT via `adc l2000,Y` / `adc l2001,Y` to compute the `l16de`/`l16df`
per-voice pointer table; fixed to `<(init+$1380)` / `>(init+$1380)`. (2)
native `$1686`/`$1687` (plus its X=7/X=14 table entries at
`$168d`/`$168e` and `$1694`/`$1695`) — a per-voice pointer scratch read by
the `l10f4` subroutine (called every play-frame) that SIDdecompiler left
as raw literals `$a0`/`$21` (=$21a0=l21a0) and `$c0`/`$22` (=$22c0=l22c0);
fixed to `<l21a0`/`>l21a0` and `<l22c0`/`>l22c0`. Both fixes reassemble
correctly (native byte-diff stays 100.0000%, confirming they're
genuinely dead-weight at the native address per lesson 10), but **the
relocation control still fails identically after both fixes** — same 3
wrong writes, same silence. Manual tracing further into the play routine
(the `l16ee`/`l169f`/`l15a1` lookup chain that produces the actual SR
write) showed this specific area is itself inside the INIT-zeroed
$1685-$16ed workspace, making by-hand simulation unreliable past that
point (confirmed at least one hand-derived intermediate value was wrong
during this pass) — this is exactly the kind of static-disassembly
mystery a byte-diff/trace-diff cannot resolve on its own.

**This blocker specifically calls for RetroDebugger, not further static
reading.** RetroDebugger was unavailable in this session (MCP server
disconnected) — not attempted, per this agent's constraints. A live pass
would need to: load the page-aligned control build (`bull_pagealigned.prg`
in this run's scratchpad, base $6000, init $6000/play $6003), set a
breakpoint on the write to `$d414` (osc3 SR) in frame 0, and compare
zero-page ($fb-$ff) and the `$1685`-$16ed-equivalent workspace contents
step-by-step against the same breakpoint on the untouched original —
looking for the first byte where the two diverge upstream of that write.
The `l16f2`/`l16f4`/`l1700`/`l169f`/`l15a1` lookup chain (all pure numeric
tables, not addresses, per this pass's analysis) is the most likely
remaining unrelocated-literal candidate but was not conclusively
isolated statically.

Scratchpad artifacts for a future pass:
`C:\Users\mit\AppData\Local\Temp\claude\C--Users-mit-claude-sid-reference-project\9858d9d8-b167-4c7a-8e7c-af8fa3c90c44\scratchpad\ozzy2\`
(bulliting.asm/prg with both fixes applied, bull_pagealigned.asm/prg,
bull_unaligned.asm/prg, trace logs).

## Sources

See the `sources` array — CSDb (3 entries), this project's local DeepSID
database dump, and the related ozzy-oldskool card.
