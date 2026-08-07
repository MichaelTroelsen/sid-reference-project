# John Prince (player routine)

```json
{
  "id": "john-prince",
  "name": "John Prince (player routine)",
  "aliases": ["John_Prince"],
  "authors": ["John Prince"],
  "released": "1984-1986 (Artic Computing / US Gold era)",
  "status": "verified",
  "platform": "English coder-composer John Prince's own playroutine — a confirmed programmer who also did his own in-game music across at least 4 UK commercial titles (Artic Computing, Tynesoft, Virgin Games, US Gold). He went on to co-found Tiertex Design Studios, a prolific Manchester arcade-conversion house, with fellow ex-Artic Computing developer Donald Campbell in 1987. Player-ID-fingerprinted across 4 files, all his own. Disassembly (2026-08-01) confirms all 4 files share one hand-written driver: same 24+-byte freq-lo/freq-hi lookup tables byte-identical at load+0, same note-trigger/gate idiom, no zero page usage.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per game, not fixed: FA_Cup_Football $1c00; Mutant_Monty/Super_Gran/World_Cup_2 $4000 (confirmed via direct PSID header read on all 4 files).", "zero_page": "None used at all — confirmed zero `z<hex>` equates in any of the 4 files' SIDdecompiler output.", "layout": "load+0: shared freq-lo table (24-88 bytes depending on file); load+$80: shared freq-hi table (same offset in all 4 files) — byte-identical leading sequence `12 23 34 46 5a 6e 84 9b b3 cd e9 06 25 45 68 8c...` confirmed across all 4 files, strong proof of one shared driver reused 1984-1986. load+~$100: order-list/duration-pair table(s), one per voice. Sequencer workspace (order-list index byte + duration-counter byte, per voice) sits as ordinary bytes near the END of the payload, not zero page — e.g. FA_Cup_Football $1cf0/$1cf1 (1 voice); Super_Gran $5a41-$5a44 (2 voice pairs, placed ~$1a20 ABOVE the payload's own end, inflating a naive SIDdecompiler reassembly to 6692 bytes via unreferenced-data padding, lesson 24 — harmless once the byte-diff/trace window is restricted to the real payload); Mutant_Monty $40f0/$40f1 + a second pair for its 2nd subtune. GOTCHA-40 NOTE: SIDdecompiler's `-v2` Start: sits 16-33 bytes above the PSID load address on 3 of 4 files (Mutant_Monty +16, Super_Gran +33, World_Cup_2 +31) — those leading bytes are the shared freq-lo table's own lowest, unused-by-that-song entries (confirmed identical to the used portion, not dead/garbage), and relocating onto -v2 Start (not the header load address) is required for a clean reassembly on those 3 files. FA_Cup_Football has Start==load, no shift needed." },
  "entry": { "init": "Sets order-list index=0, duration-counter=$10, calls the note-trigger/gate subroutine once, RTS. Confirmed byte-exact on all 4 files: FA_Cup $1e80, Mutant_Monty $436c, Super_Gran $454b, World_Cup_2 $454e.", "play": "IRQ-driven (very sparse writes/frame; no explicit IRQ-vector install found in the traced payload itself, install presumably done by each game's own outer code, not part of this routine). Confirmed byte-exact: FA_Cup $1e47, Mutant_Monty $4382, Super_Gran/World_Cup_2 both $456e." },
  "speed": "Not a fixed frame divider — per-note duration comes directly from the order-list's own duration byte (variable-length notes), re-read every time the previous note's duration counter reaches 0. No $ff/speed-table concept found.",
  "data_format": { "order_list": "Interleaved (note-index, duration) byte pairs per voice, terminated by a fixed pair-count (`cpx #$b9` etc. per file/voice) - NOT a null/sentinel terminator. FA_Cup_Football (1 voice) SILENCES $d418 and halts on reaching the end (one-shot goal-stinger); Super_Gran and World_Cup_2 (2 voices) WRAP the index back to 0 and loop forever (background music). Mutant_Monty (2 subtunes) has two distinct play routines selected per subtune, each with its own gate/ADSR profile — the subtune-select dispatcher itself (a small self-modifying NOP-slide near $42b4/$4269) was not fully traced through in this pass, flagged as a TODO below.", "patterns": "No pattern/track separation — one flat linear order list per voice, not pattern-based.", "instruments": "No instrument table — ADSR/pulse/waveform are hardcoded constants inside the note-trigger subroutine itself (one routine per file/subtune, e.g. FA_Cup: PW=$00bf, AD=$5a, SR=$00, CTRL 0x10->0x11 hard-restart = pulse; Mutant_Monty subtune 1's l4300: PW=$00bf, AD=$0a, SR=$00, CTRL 0x40->0x41 = sawtooth).", "wavetable": "N/A — waveform fixed per note-trigger routine (see instruments), not switchable per note.", "pulsetable": "N/A — pulse width is a hardcoded constant ($00BF observed on every voice/file checked), not tabled.", "filtertable": "Confirmed: filter is never touched anywhere in any of the 4 files' disassembly or trace (0 filter writes across 400-frame traces on all 4) — not merely a sparse-sample artifact as the prior pass guessed." },
  "effects": { "encoding": "None — no effect/command byte space in the order list at all, just (note-index, duration) pairs.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL for this composer — a bare 'Prince, John' entry, confirmed via direct grep of the raw file (not a fetch error); unlike a neighboring, unrelated 'Prince (Zygowski, Maciej) / Vaudeville - POLAND' entry, which is a different person. No CSDb scener profile exists either.",
    "FOUR CONFIRMED GAME CREDITS, all as coder-composer or musician: FA Cup Football (1986, Virgin Games, the traced file — developer credited as 'Kerian UK'), Mutant Monty (1984, Artic Computing — credited as creator/musician, implying he coded it too), Super Gran (1985, Tynesoft — programmer Michael Woodroffe, musician John Prince, a licensed UK children's TV tie-in), and World Cup Carnival: Mexico '86 (1985, US Gold, © Sport-Billy Productions — credited as BOTH coder AND musician). The trace profile (a very sparse 6 register writes/50 frames, no filter) is consistent with a minimal, programmer-written routine rather than a dedicated specialist composer's player.",
    "'MUTANT MONTY' HAS NO CONFIRMED CONNECTION TO GREMLIN GRAPHICS' 'MONTY MOLE' SERIES — explicitly investigated and ruled out: Mutant Monty was published by Artic Computing (also ported to CPC/Spectrum via Amsoft/Artic), an entirely separate company from Gremlin Graphics (publisher of 'Wanted: Monty Mole,' coded/composed by [[antony-crowther]]). No source ties the two titles, companies, or people together — the shared 'Monty' name appears to be pure coincidence, a common mole/character-naming trend in early-80s UK platformers.",
    "CO-FOUNDED TIERTEX DESIGN STUDIOS (Manchester) with Donald Campbell in 1987, per Wikipedia and the German C64-Wiki — Tiertex became a prolific US Gold-contracted arcade-conversion house (720°, Thunder Blade, Indiana Jones and the Last Crusade, later Disney/THQ licensed titles). Donald Campbell's own C64-Wiki bio states he ALSO worked at Artic Computing, and made a 'World Cup' game there in 1984 — plausibly a predecessor to Prince's own 'World Cup Carnival'/'World Cup 2' for US Gold the following years, though direct collaboration on those specific titles is UNCONFIRMED, not stated outright by any source. Campbell is not currently carded in this KB but is flagged here as a strong future-card candidate given this direct, sourced link.",
    "GAME-CREDIT WORDING SHOULD BE TREATED AS MODERATE CONFIDENCE, EXPLICITLY FLAGGED BY THE RESEARCH ITSELF: the four credit lists above were extracted from Lemon64 pages via automated fetching, not a manual spot-check — the composer/coder attribution itself is consistent across all four independently-fetched pages (high confidence), but exact wording of secondary credits (programmer names, publisher details) carries lower confidence and would benefit from a manual verification pass in a future session.",
    "No interviews or first-person material found. Not confirmed in SIDId (no entry for this tag). No known relationship found to [[antony-crowther]] (explicitly ruled out above) or any other composer/tool already in this KB — a strong, sourced link exists to Donald Campbell (not yet carded), noted above for future reference (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin — none beyond Campbell found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Prince, John', bare entry): https://hvsc.sannic.nl/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — FA Cup Football (traced file): https://www.lemon64.com/game/fa-cup-football",
    "Lemon64 — Mutant Monty: https://www.lemon64.com/game/mutant-monty",
    "Lemon64 — Super Gran: https://www.lemon64.com/game/super-gran",
    "Lemon64 — World Cup Carnival: Mexico '86: https://www.lemon64.com/game/world-cup-carnival-mexico-86",
    "Wikipedia — Tiertex Design Studios (co-founding with Donald Campbell, 1987): https://en.wikipedia.org/wiki/Tiertex_Design_Studios",
    "C64-Wiki (DE) — Donald Campbell (Artic Computing background, World Cup 1984): https://www.c64-wiki.de/wiki/Donald_Campbell",
    "Existing KB card: knowledge/players/antony-crowther.md (the Monty Mole connection explicitly ruled out)",
    "Local dataset: 4 files tagged John_Prince, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `John_Prince` tag is English coder-composer John Prince's own
playroutine — a confirmed programmer who also scored at least 4 UK
commercial titles (Artic Computing, Tynesoft, Virgin Games, US Gold),
before co-founding Tiertex Design Studios, a prolific Manchester
arcade-conversion house, in 1987. Player-ID-fingerprinted across 4 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **ruled-out Monty Mole
connection**, investigated and explicitly dismissed rather than assumed
from the shared name; and a **genuine, sourced link to Donald Campbell**
(Tiertex co-founder, shared Artic Computing background) — a strong future
card candidate flagged for a later session.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly produced this session (2026-08-01) via `SIDdecompiler.exe -r`
on all 4 tagged HVSC files — see Verification below.

## Verification

**`status: verified` (2026-08-01).** All 4 `John_Prince`-tagged HVSC
files disassembled (`SIDdecompiler.exe -a<-v2 Start> -z -d -c -v2 -r`),
reassembled (`64tass`), byte-diffed, and trace-diffed
(`sidm2-sid-trace.exe`) against the real files, plus a non-tautological
relocation-invariance control (rebuild at delta +$1137, non-page-aligned)
on each — the standard cure for `-r`'s tautological-trace problem
(lessons 63/69/70/72 in the verify-agent's own gotchas).

- **FA_Cup_Football.sid** (load $1c00): Start==load, no shift needed.
  Byte-diff **100.0000%** (654/654 bytes). Native trace-exact (58/58
  register writes, 400 frames). Relocation control: rebuild at $2d37
  genuinely differs from the original at 26/654 bytes (proves it's not
  tautological) and still traced **0 divergences** — passed clean with
  zero patching needed.
- **Mutant_Monty.sid** (load $4000, 2 subtunes): gotcha-40 applies,
  relocated onto `-v2` Start=$4010 (+16 bytes, confirmed dead — same
  shared freq-lo table, unused low entries). Byte-diff **100.0000%**
  (1008/1008 covered bytes). Native trace-exact both subtunes (133/133,
  77/77 writes). Relocation control initially **failed** (93/133 writes
  on subtune 0) — root cause: `SIDdecompiler` left the freq-lo table
  reference as a raw literal `lda $4000,Y` rather than symbolizing it,
  because $4000 sits below its own `-v2` Start address (the verify
  agent's gotcha 77 pattern, "absolute literal pointing below the
  disassembled range"). Fixed by hand-patching the literal to the
  correct relocated table address (`$4000 - $10` relative to the new
  base); after the fix, relocation control passed **0 divergences**
  both subtunes.
- **Super_Gran.sid** (load $4000): gotcha-40 applies, relocated onto
  `-v2` Start=$4021 (+33 bytes, confirmed dead — same shared table).
  Byte-diff **100.0000%** (1454/1454 covered bytes). Native trace-exact
  (123/123 writes). Relocation control hit the identical gotcha-77
  defect (raw `lda $4000,Y`, 30/123 writes lost) — same fix applied,
  then passed **0 divergences**.
  This file also demonstrates lesson 24's oversized-reassembly artifact
  harmlessly: its 2-voice sequencer workspace ($5a41-$5a44) sits ~$1a20
  above the payload's own end, so a naive full reassembly is 6692 bytes
  of mostly `; Unreferenced data` padding — restricting the byte-diff/
  trace window to the real payload ($4000-$45c6) is what makes the
  100.0000% figure meaningful.
- **World_Cup_2.sid** (load $4000): gotcha-40 applies, relocated onto
  `-v2` Start=$401f (+31 bytes, confirmed dead). Byte-diff **100.0000%**
  (1458/1458 covered bytes). Native trace-exact (178/178 writes).
  Relocation control hit the same gotcha-77 defect, same fix, then
  **0 divergences**.

**Net result: 4/4 tagged files are 100.0000% byte-exact and
register-write-exact against the real HVSC files, with a genuine
(non-tautological) relocation-invariance control passing clean on all 4
once one recurring, well-localized `SIDdecompiler` limitation (an
unsymbolized below-range table literal) was identified and patched the
same way on 3 of them.** This meets the project's `verified` bar (cf.
`laxity-newplayer`'s ~99.9% precedent) — here at a clean 100% across
every tagged file, not just one representative sample.

**Open TODO, not blocking `verified`:** Mutant_Monty's subtune-select
dispatcher (a small self-modifying NOP-slide near $42b4/$4269 that picks
between its two per-subtune note-trigger/gate routines) was not traced
through in detail — both subtunes independently verify byte/trace-exact,
but the mechanism switching between them wasn't fully documented. Not a
correctness gap (both subtunes are individually confirmed exact), just
an unfinished internals note for a future pass.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (4 pages),
Wikipedia, C64-Wiki (DE), and the related antony-crowther card.
