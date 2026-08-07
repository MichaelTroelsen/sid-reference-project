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
tagged files (2026-08-01). Relocation-invariance control (2026-08-07
re-test): PASSES on Revenge_tune_2 (correcting a prior false
"catastrophic failure" finding), still FAILS on Cool_Ripp_31 — `status`
stays `in-progress`, NOT raised to `verified`, because both tagged
files must close for this one driver card.**

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

**Relocation-invariance control, RE-TESTED 2026-08-07 (solo pass, own
rebuild from scratch, not trusting the prior pass's numbers) — the
prior pass's Revenge_tune_2 "catastrophic failure" finding was WRONG
(stale/reproducibility bug in that pass, not a real defect);
Cool_Ripp_31's failure is real and reproduced, now more precisely
characterized:**

- **Revenge_tune_2: relocation control now PASSES CLEANLY.** Rebuilt
  the disassembly independently (fresh `SIDdecompiler -r` run at a
  second base too, to confirm the z40/41-class fix generalizes), with
  the same `l3802/l3803`/`l3809/l380a`/`l3810/l3811` symbolization the
  prior pass already had in its saved `.asm`. Assembled and traced at
  **two independent non-page-aligned deltas** (`+$137` and `+$251`)
  over **500 frames each** (10x the prior pass's window): both are
  **byte-for-byte, cycle-for-cycle identical** to the native trace
  (1680/1680 write-tuples matching, cycle column stripped per this
  project's standard method). The prior pass's "1/100 writes,
  catastrophic, near frame 0" result could not be reproduced at all
  with the exact same delta and the exact same fix already applied —
  it was evidently a stale build or a mistaken test artifact from that
  session, not a real property of this file. This is a correction to
  the KB, not just an update.
- **Cool_Ripp_31: relocation control still FAILS — confirmed
  reproducible** (voice 0/osc1 diverges starting at the first
  mode-2-dispatch frame; voices 1/2 remain exact), but two specific
  candidate mechanisms were tested THIS pass and both **ruled out**,
  narrowing the search:
  - The `l3081` "portamento continuation" routine (an entire
    fallthrough-code-misclassified-as-`.byte`-data block, same defect
    class as gotcha/lesson 89, ~40 bytes, embedded absolute operands
    `$3759/$375a/$3746/$390f/$38e5/$3719/$3744/$3099` never
    symbolized) was fully hand-disassembled, restored as real
    instructions with correct symbolic operands (verified
    byte-for-byte against the original at every branch target), and
    reassembled — **byte-diff stayed 100.0000% exact, but the trace
    was UNCHANGED (still the same divergence)**. This is a genuine,
    real SIDdecompiler defect (confirmed valid 6502, confirmed
    unsymbolized addresses) but it is CONFIRMED DEAD for this song —
    not merely untested as the prior pass left it.
  - The z40/z41-class unsymbolized-pointer defect (same table
    structure as Revenge's, now confirmed present at all 3 per-voice
    offsets: `l3802/l3803`→native `$3bb0`, `l3809/l380a`→`$3bd0`,
    `l3810/l3811`→`$3be0`) was fixed at the source level (not just
    binary-patched) for all three voices and reassembled — still
    100.0000% byte-exact, and this DOES measurably change the
    relocated trace (357→363 register writes) but does **not** resolve
    the divergence. Root cause read from the disassembly: this
    specific z40/z41 value gets **overwritten at runtime** (via
    `l3457`'s `lda (z42),Y / sta z40`) before voice 0 ever reads it
    through the affected code path — and z42/z43 come from an
    ALREADY-symbolic, already-correctly-relocating pointer
    (`l3800,X`/`l3801,X` = `<l393f`/`>l393f`) — so this fix, while
    real and worth keeping, is moot for THIS specific divergence.
  - **Still open**: the actual divergence starts with voice 0 writing
    entirely different SID *registers* at frame 1 (`osc1_freq_lo` etc.
    instead of `osc1_sustain_release`) — not just wrong values —
    which points at an early branch-decision difference (most likely
    inside the `(z46),Y` wavetable-walk in `l3403`/its branch targets
    `l3418`/`l3422`/`l3431`, which contain at least 3 more
    un-examined fallthrough-misclassified-as-data blocks of the same
    kind as `l3081`) rather than a simple wrong-data-value bug. Not
    isolated within this pass's budget either.

The native-address match remains real and strongly evidenced (2
independent files, both byte-exact and cycle-exact at native
addresses). `status` stays `in-progress`, NOT `verified` — Revenge_tune_2
alone would now qualify, but Cool_Ripp_31 (same driver, same card)
still has a real, reproduced, precisely-localized-but-unresolved
relocation-control failure.

**Next lead, specific**: decode the remaining 3 fallthrough-as-data
blocks reachable from `l3403`'s branch tree (at native addresses
`$3418` [`.byte $a9,$03,$9d,$06,$38,$60`], `$3431`'s block just past
`cmp #$fc`, and `$34a0`'s continuation) the same way `l3081` was
decoded this pass (byte-by-byte, cross-checking every branch target
lands on an instruction boundary) — one of them very likely contains
the actual unsymbolized operand. If that doesn't resolve it, this is a
genuine case for a live 6502 debugger (RetroDebugger, main-session-only
per this agent's own constraints — not available in this dispatched
subagent's toolset): load the relocated build
(`coolripp31d_fix1.prg`/`.asm` in scratchpad, init `$310a`, play
`$312b`), single-step PLAY for X=0 at the first mode-2 frame, and watch
exactly where PC diverges from native.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (4 entries), SIDId's
sidid.nfo, and 2 related KB cards.
