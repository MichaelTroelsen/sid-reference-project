# Audial Revolution Music Editor (Yoga)

```json
{
  "id": "audial-revolution",
  "name": "Audial Revolution Music Editor (Yoga)",
  "aliases": ["Audial_Revolution"],
  "authors": ["Maikel van de Lisdonk ('Yoga')"],
  "released": "8 March 1989 (Venlo Meeting, group Audial Revolution)",
  "status": "in-progress",
  "platform": "A C64 music editor coded by Dutch demoscener Maikel van de Lisdonk ('Yoga') for the group Audial Revolution — CONFIRMED via a two-source-corroborated identity resolution: 'Whizz' (real name Ramon van de Laar), this tag's sole composer, and 'Yoga,' the tool's coder, are TWO DIFFERENT PEOPLE who were groupmates — the same 'composer used a groupmate's tool' pattern already documented elsewhere in this KB, not a self-credit-under-alias case. NOT to be confused with the similarly-named but unrelated already-carded [[audial-arts]] group/tool. Player-ID-fingerprinted across 2 files, both by Whizz.",
  "csdb_release": 71543,

  "memory": { "load_address": "Sample HVSC file traced (Cool Ripp 31, composed by Whizz): load $2fd3 (init $2fd3, play $2ff4). Second tagged file (Revenge tune 2): load $3000, init $3000, play $3003 — same driver.", "zero_page": "CONFIRMED via disassembly (2026-08-01): $40-$55 (12-16 bytes, named z40-z55 in the reconstructed .asm), used as indirect pointer pairs for per-voice pattern/wavetable data (3 voices, X=0/7/14 stride-7 indexing throughout).", "layout": "3-voice engine, stride-7 per-voice state tables around $37xx-$38xx (Cool Ripp 31) / similar region (Revenge tune 2). Cool Ripp 31 additionally copies 3 x 8 bytes of payload data ($3bb8-$3bf7) to three DISJOINT fixed-RAM workspace blocks outside its own payload ($0340-$0347, $07e0-$07e7, $fd30-$fd4f) at INIT via an indexed copy loop — SIDdecompiler's -v2 map reports these as the trace's lowest ('Start: $0340') and highest touched addresses, well outside the load-address range (gotcha-40 class; see Verification)." },
  "entry": { "init": "Sample trace: $2fd3.", "play": "Sample trace: $2ff4 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a very dense 357-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE COMPOSER/TOOL-AUTHOR NAME MISMATCH IS RESOLVED WITH TWO INDEPENDENT SOURCES: HVSC Musicians.txt reads 'Whizz (van de Laarm Ramon) / Audial Revolution - NETHERLANDS' (the file's own minor typo, 'Laarm,' matches CSDb's SID-credit spelling 'Ramon van de Laar' exactly — treated as the same name, not a different person). CSDb release id=71543, 'Audial Revolution Music Editor' (aka 'The Music Maker,' released 8 March 1989 at Venlo Meeting, group Audial Revolution), is credited to 'Yoga' (CSDb scener id=7826) for BOTH Code and Music. So the tool's own author is confirmed to be Yoga, a DIFFERENT person from Whizz, the tag's sole traced composer — GROUPMATES, not the same person under two aliases.",
    "SIDId INDEPENDENTLY CONFIRMS YOGA'S REAL NAME AS Maikel van de Lisdonk — CSDb's own scener profile for Yoga (id=7826) lists no real name field, so SIDId is the corroborating source for that identity detail specifically.",
    "THE SAME 'COMPOSER USED A GROUPMATE'S TOOL' PATTERN ALREADY DOCUMENTED ELSEWHERE IN THIS KB, not a novel resolution mechanism: directly comparable to [[audial-arts]] (Zong Player, coded by group member François Prijt, used across the whole Audial Arts composer roster) and [[audio-effect-editor]] (Alexander Kirsch/groupmate Rudolf Stember). Both Whizz and Yoga are confirmed groupmates — first in Audial Revolution itself, and LATER both also members of Actual Trading Generation (ATG, 1990-91, the group credited on both this tag's traced 1989 SID releases) — a doubly-confirmed social link, not a one-off.",
    "A REAL NAME-COLLISION RISK IS EXPLICITLY FLAGGED: 'Audial Revolution' (this card's group/tool) is a COMPLETELY DIFFERENT, unrelated Dutch group/tool from the similarly-named already-carded [[audial-arts]] (Zong Player) — worth noting explicitly to avoid future confusion between the two similarly-branded entities.",
    "'COOL RIPP 31' (the traced file's title) HAS AN UNCONFIRMED MEANING: no CSDb page or forum thread was found explaining what 'Ripp' references — it reads like a numbered personal tune-series name (the '31' suggesting many prior installments) rather than a literal 'rip' of another artist's melody, but no direct evidence was found either way. Left explicitly unresolved.",
    "Not confirmed in SIDId beyond the author identification already cited. No connection found to [[twice-effect-editor]], [[entropy-editor]], or [[mega-player]] — no shared authors, groups, or titles surfaced. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Whizz (van de Laarm Ramon) / Audial Revolution - NETHERLANDS'): local cache data/hvsc/Musicians.txt line 1832",
    "CSDb search — Whizz/Ramon van de Laar SID credits (Cool Ripp 31, The Revenge tune 2, both 1989, group Actual Trading Generation): https://csdb.dk/search/",
    "CSDb release id=71543 ('Audial Revolution Music Editor'/'The Music Maker', 8 March 1989, Code+Music: Yoga): https://csdb.dk/release/?id=71543",
    "CSDb scener id=7826 (Yoga, Netherlands, groups Audial Revolution/Actual Trading Generation/Demix/Visual Delight): https://csdb.dk/scener/?id=7826",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — real name Maikel van de Lisdonk for Yoga",
    "CSDb group id=907 (Actual Trading Generation, both Whizz and Yoga members): https://csdb.dk/group/?id=907",
    "Existing KB card: knowledge/players/audial-arts.md (the similarly-named but unrelated group, explicitly flagged to avoid confusion)",
    "Existing KB card: knowledge/players/audio-effect-editor.md (the parallel groupmate-tool-reuse pattern)",
    "Local dataset: 2 files tagged Audial_Revolution, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Audial_Revolution` tag is a C64 music editor coded by Dutch
demoscener Maikel van de Lisdonk ('Yoga') for the group Audial
Revolution — used by his groupmate Whizz (Ramon van de Laar), a
different person entirely, resolved via two independent sources. NOT to
be confused with the similarly-named [[audial-arts]]. Player-ID-
fingerprinted across 2 files, both by Whizz.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **cleanly resolved
composer/tool-author name mismatch**, confirmed via two independent
sources and further corroborated by BOTH people's later shared
membership in a second group — a doubly-confirmed social link. Also
flagged: a **real name-collision risk** against the unrelated,
similarly-named [[audial-arts]] group already in this KB.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly produced this session (2026-08-01) via `SIDdecompiler -r`
(pristine-reload mode) — see Verification for the full account. A
3-voice, stride-7-indexed engine using zero page `$40-$55` for indirect
pattern/wavetable pointers.

## Verification

**Native-address reconstruction: byte-exact + trace-exact on both
tagged files (2026-08-01). Relocation-invariance control FAILS on
both — `status` stays `in-progress`, NOT raised to `verified`.**

Disassembled and reassembled both real HVSC `Audial_Revolution` files
with `SIDdecompiler -r` at their own native addresses:

- **Cool_Ripp_31.sid** (load/init `$2fd3`, play `$2ff4`): the player
  also copies 3x8 bytes of payload data (`$3bb8-$3bf7`) to three
  DISJOINT fixed-RAM workspace blocks outside the payload
  (`$0340-$0347`, `$07e0-$07e7`, `$fd30-$fd4f`) via an INIT copy loop —
  this pushes SIDdecompiler's `-v2` "Start:" address down to `$0340`,
  well below the load address (gotcha-40's mechanism). The by-the-book
  `-a<decimal load address>` relocation therefore shifted the WHOLE
  emulated trace onto the wrong base; the correct fix (lesson 54/60)
  was `-a832` (decimal for `$0340`, zero net shift onto the tool's own
  reported Start address). Reassembled payload (`$2fd3-$3bf7`, 3109
  bytes): **100.0000% byte-exact**. Traced against the real file:
  **357/357 register writes exact, cycle-for-cycle** (matches this
  card's previously-recorded write count).
- **Revenge_tune_2.sid** (load/init `$3000`, play `$3003`, same
  driver): Start: == load address, no workspace-gap issue. Reassembled
  payload (3715 bytes): **100.0000% byte-exact**. Traced: **100/100
  register writes exact, cycle-for-cycle**.

**Relocation-invariance control (this project's standard check against
the `-r`-tautology trap, lessons 63/69/70/72) FAILS on both files** —
rebuilding the identical disassembly at a shifted, non-page-aligned
base (`+$137`) and re-tracing at the correspondingly shifted init/play
addresses:

- Cool_Ripp_31: divergence is isolated specifically to **voice 0
  (osc1), starting frame 1** — voices 1 and 2 (osc2/osc3) remain exact.
  Root cause investigated: the player's dispatch table
  (`l3806,X`/`l3802,X`/`l3803,X`) builds a ZP indirect pointer
  (`z40`/`z41`) from table entries SIDdecompiler left as raw literal
  bytes instead of symbolic `<label`/`>label` (a lesson-72(b)-class
  defect, confirmed present via hex inspection: the entries resolve to
  `$3bb0`/`$3bd0`/`$3be0`). A direct patch-isolation test (writing
  `$00/$00` over that exact table entry in the NATIVE build and
  re-tracing) proved this specific entry is DEAD for this song (0/357
  diff) — so it is NOT the cause of Cool_Ripp_31's voice-0 divergence.
  The true cause was not isolated within this pass's budget.
- Revenge_tune_2: divergence is catastrophic and immediate — the
  relocated build produces only 1 SID write total over 50 frames (vs.
  100 in the original), starting at/near frame 0. The SAME
  z40/z41-unsymbolized-table defect IS confirmed LIVE in this file
  (its entries resolve to `$3c30`/`$3c90`/`$3cc0`, all inside the
  payload's read-accessed range per the `-v2` map). Manually
  symbolizing all three entries (`l3802/l3803` plus the sibling
  entries at `l3809/l380a` and `l3810/l3811`) and rebuilding did **NOT**
  fix the relocation control (still 1/100 writes) — so there is at
  least one MORE unsymbolized/unrelocated dependency in this player
  beyond the one found and fixed, and it breaks execution almost
  immediately after INIT.

This is exactly the scenario this project's own relocation-invariance
discipline exists to catch: a `-r` byte-identical reconstruction's
trace match is tautological on its own (any byte-identical file traces
identically by construction) — real evidence requires a build that's
genuinely different code but functionally equivalent, and that test
fails here on both files. The native-address match is real and
strongly evidenced (2 independent files, both byte-exact and
cycle-exact), but `status` is not being raised to `verified` because
the relocation control's failure was not resolved to a citable,
localized explanation on either file (contrast this project's
precedent cases where a failed relocation control was traced to a
genuine, provable page-locking design choice in the original code —
here it was instead traced partway into a genuine SIDdecompiler
symbolization gap that resisted a full fix).

**Next lead, specific**: Revenge_tune_2's relocation control breaks
the trace down to 1 write starting at/near frame 0/1 — too early and
too total a failure to isolate further by static disassembly reading
or byte-patch testing alone. This is a genuine case for a live
6502 debugger (RetroDebugger — not attempted in this pass, since this
card was verified as part of a batch dispatch and this agent's own
constraints forbid using RetroDebugger from a parallel/batch run):
load the relocated, z40/41-fixed build (rebuild via
`SIDdecompiler <Revenge_tune_2.sid> -a12599 -z -d -c -v2 -r`, then
apply the same `l3802/l3803`/`l3809/l380a`/`l3810/l3811` symbolization
shown above, init/play at `$313a`/`$313d`), single-step PLAY from
frame 0, and watch for where PC diverges from the intended code path —
most likely an indirect jump or self-modified branch operand landing
in garbage, i.e. the same defect class as the z40/z41 fix, just at a
different, not-yet-found table.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (4 entries), SIDId's
sidid.nfo, and 2 related KB cards.
