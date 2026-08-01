# Andreas Bauernfeind (CCP driver)

```json
{
  "id": "andreas-bauernfeind",
  "name": "Andreas Bauernfeind (CCP driver)",
  "aliases": ["Andreas_Bauernfeind"],
  "authors": ["Andreas Bauernfeind"],
  "released": "1986-1989 (Construction Computer Players era)",
  "status": "verified",
  "platform": "German composer-graphic-artist Andreas Bauernfeind, house musician for a small hobbyist team called Construction Computer Players (C.C.P.), alongside coder Marcus Wagner — described by the team's own fan history as 'ALWAYS the number one for the acoustic coloring.' NOT a coder on C64 (his coding talent surfaced later, on Amiga). Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Disassembled+reassembled from real HVSC file (Block_n_Bubble.sid, 1986/87, 64'er magazine): load $9006 (init $92c1, play $925d). SIDdecompiler -v2 map Start:$9006 matches the PSID header's own load address exactly (no gotcha-40 relocation trap; no self-modified working-storage drift found with the -r flag, see Verification). Tiny 746-byte payload — note stream at $9006-$9236 (582 bytes, terminated $00), 6 small lookup tables at $9237-$924e (24 bytes: 2 shadow/scratch tables + 2 SID-register-offset tables + a duration counter byte + a loop-vs-external-jump flag byte), code at $924f-$92c0 (play dispatcher + note-stream reader), init at $92c1-$92e4.", "zero_page": "$40/$41 (z40/z41): 16-bit read pointer into the note stream, reset to $9006 by the reset routine at $924f. No other ZP use.", "layout": "See load_address above — one contiguous block, no block-copy, no fixed low-RAM workspace." },
  "entry": { "init": "$92c1 — zeroes SID $D400-$D418 (volume $0F), calls the stream-reset routine ($924f, which also sets a 1-frame duration counter at $924c), then hardcodes ADSR for all 3 voices: $D405=$09,$D406=$A9 (voice1 AD/SR), $D40C=$05,$D40D=$1E (voice2 AD/SR), $D414=$5A (voice3 SR; voice3 AD left at $00 from the clear loop). No filter writes anywhere in the file.", "play": "$925d — called every frame from the game's own IRQ handler (not embedded in this SID rip; consistent with a small in-game listing-magazine driver, not a standalone player)." },
  "speed": "1x (play called once per IRQ frame, no per-call skip/multiplier in this file — the $924c countdown byte only gates re-reading the NEXT note-stream step, not the play-call cadence itself)",
  "data_format": { "order_list": "None — a single flat note stream at $9006, read via an 8-bit (z40/z41),Y pointer, one entry per note-stream 'step'.", "patterns": "One 7-byte step: byte 0 = duration/continuation control ($00 = end-of-stream sentinel; nonzero = duration count reloaded into $924c, or new-note trigger — the exact duration-vs-flag split within that byte was not independently decoded), bytes 1-6 = 3 voices' SID FREQ_HI/FREQ_LO byte PAIRS written directly as raw register values (via a 6-entry offset table at l9245 mapping stream-byte-index -> SID register offset $00/$01/$07/$08/$0e/$0f), $00 in any of the 6 meaning 'leave that voice's frequency register unchanged this step'.", "instruments": "None — ADSR is fixed once at init per voice (see entry.init), never varied per-note.", "wavetable": "None — waveform/gate byte is a fixed $20 (test off, no gate) written every step then $21 (gate on) written selectively per-voice from a second small lookup table (l923f/l9238) for voices whose frequency changed that step — i.e. legato/gate-retrigger logic, not a wavetable.", "pulsetable": "None observed (no $D402-$D403-style pulse writes anywhere in the file).", "filtertable": "None — confirmed by full disassembly, not just the earlier 50-frame sample: no code path anywhere in the 746-byte payload writes $D415-$D418's filter-cutoff/resonance bits (only the init-time $D418=$0F volume-only write)." },
  "effects": { "encoding": "No command/effect encoding — this is a hardcoded 3-voice note-frequency sequencer with no instrument, arpeggio, vibrato, or filter engine. The only 'effect' is the gate-retrigger (legato) logic described under data_format.wavetable.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HOUSE MUSICIAN FOR A SMALL HOBBYIST TEAM, CONFIRMED via GamesThatWerent (GTW64) and a dedicated CCP fan-history site: Construction Computer Players (C.C.P.) was a duo/trio of coder Marcus Wagner and graphics-and-music man Andreas Bauernfeind (spelled 'Bauerfeind' in GTW64's own credits — treat as the same person, HVSC's 'Bauernfeind' spelling used as the card's authoritative one). Games traced to the pair: Paratron (1987, graphics only, no sound credited), Jupple Dust (1986, graphics + sound, unfinished — later restored to a playable preview by [[laxity-newplayer]]'s own scener Laxity in 2016), Wizerior 2 (1991, graphics + sound — also debugged/released by Laxity in late 2016), and Block'n'Bubble (1986/87, 64'er magazine, the traced file — 'graphics, music and levels by Andreas Bauernfeind' per a CSDb-indexed snippet).",
    "THE CCP FAN-HISTORY SITE ITSELF DESCRIBES HIM DIRECTLY: 'was ALWAYS the number one for the acoustic coloring' (house musician) and a 'graphic all-rounder,' but explicitly states his true programming skill only emerged LATER, on the AMIGA (Buxom Bull series, Alase, Silent Goblet, Flood Manoeuvres, Tygard, Traffic, Gadget, 'countless pieces of music') — he 'stayed almost entirely out of' coding on the C64. This directly answers the coder-vs-musician question: NOT a coder on C64, confirmed rather than assumed.",
    "A GENUINE PRESERVATION-CREDIT LINK TO [[laxity-newplayer]]'S OWN SCENER exists but is CIRCUMSTANTIAL, not technical: Laxity personally restored/debugged two of Bauernfeind's unfinished C64 games (Jupple Dust, Wizerior 2) in 2016 and cracked a 2026 Block'n'Bubble re-release — this is a preservation/release credit, not a shared player-driver or SIDId link, and is explicitly noted as such rather than overstated into a technical connection.",
    "NO CSDb SCENER PROFILE OR DEMOSCENE GROUP MEMBERSHIP EXISTS for either Bauernfeind or Marcus Wagner — CCP appears to have been a 64'er-magazine hobbyist listing-game duo/trio, not a registered demoscene group, so there's genuinely no CSDb scener page to link, not a research gap.",
    "TWO NAME-COLLISION RISKS EXPLICITLY FLAGGED, NOT INCLUDED AS FACT: (1) name spelling varies across sources — HVSC 'Bauernfeind,' GTW64 'Bauerfeind,' one CSDb snippet 'Bavernfeind' — treated as the same person here, but the variance is real; (2) a same-named 'Andreas Bauernfeind' credited as music composer on the 2026 indie C64 release 'Vault of Seraphim' (Natthrafn) is VERY LIKELY an unrelated contemporary musician coincidentally sharing the name — explicitly NOT conflated with this 1980s CCP composer.",
    "Not confirmed in SIDId (no entry for this tag). Circumstantial preservation-credit link to Laxity (already carded as [[laxity-newplayer]]) noted above, not encoded as a technical edge. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bauernfeind, Andreas - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "GamesThatWerent — Paratron: http://www.gamesthatwerent.com/gtw64/paratron/",
    "GamesThatWerent — Jupple Dust: http://www.gamesthatwerent.com/gtw64/jupple-dust/",
    "GamesThatWerent — Wizerior 2: https://www.gamesthatwerent.com/gtw64/wizerior-2/",
    "CCP fan-history site (biography, 'acoustic coloring' quote, Amiga career): https://sites.google.com/site/ccpcommodore64/ccpinfo",
    "CSDb release id=261540 (Block'n'Bubble +4DT, 2026 Laxity re-release): https://csdb.dk/release/?id=261540",
    "Existing KB card: knowledge/players/laxity-newplayer.md (the preservation-credit connection noted above)",
    "Local dataset: 3 files tagged Andreas_Bauernfeind, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Andreas_Bauernfeind` tag is German composer Andreas Bauernfeind's
work as house musician for hobbyist team Construction Computer Players
(C.C.P.), alongside coder Marcus Wagner — confirmed not to have coded on
C64 himself, though his programming skill later emerged on Amiga. Player-
ID-fingerprinted across 3 files, all his own. On the smallest of those
files, the underlying routine is a minimal hardcoded 3-voice
note-frequency sequencer (no order list, no instruments, no filter, gate-
retrigger only) — see Verification, byte-exact and trace-exact against
the real HVSC file.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct
first-party-adjacent confirmation** (a dedicated CCP fan-history site)
that he was music/graphics only on C64, not a coder — a clean, sourced
answer rather than an inference. Also notable: a real **preservation-
credit link** to already-carded [[laxity-newplayer]], explicitly kept
circumstantial rather than overstated into a technical connection.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). This session
produced an original disassembly (SIDdecompiler + 64tass reassembly) of
`Block_n_Bubble.sid` — see `memory`/`entry`/`data_format` above and
Verification below. Not yet cross-checked against the other 7 files in
the HVSC `Bauernfeind_Andreas` directory (see Verification's next-lead
note — most of those are much larger and may use a materially different,
non-hardcoded driver; this card's `status: verified` scope covers only
the one file actually disassembled).

## Verification

**Byte-exact + trace-exact reconstruction produced this session
(2026-07-31) — `status: verified`.** Disassembled the real HVSC file
`Block_n_Bubble.sid` (load `$9006`, init `$92c1`, play `$925d`, 746-byte
payload) with `SIDdecompiler.exe -a36870 -z -d -c -v2 -r` (the `-v2` map's
own `Start: $9006` matches the PSID header's load address exactly, so no
gotcha-40 relocation trap applies here) and reassembled with 64tass —
clean assembly, no warnings, 746 bytes.

- **Byte-diff (native, `-r` build): 100.0000% (746/746 bytes exact, 0
  diffs).**
- **Trace-diff (native build, `sidm2-sid-trace.exe`, 50 frames,
  init=$92c1/play=$925d): the full register-write trace — 36 SID writes
  over 50 frames including exact cycle timestamps — is byte-for-byte
  IDENTICAL to a trace of the original file's own bytes** (`diff` on the
  two trace logs, past the echoed filename line, returns no differences
  at all).
- Because the native build is 100% byte-identical to the original, that
  trace match is expected by construction (tautological — see this
  agent's own lesson 63/69/70) and was NOT treated as sufficient alone.
  A **relocation-invariance control** was built per lessons 69/70/72: the
  same disassembly was reassembled at a different base (`-a41216` =
  `$A100`, delta `$10FA`, a non-page-aligned shift) — this produced a
  genuinely different binary (**28 of 746 bytes differ** from the native
  build at the same relative offsets, i.e. a real structural test, not a
  no-op) that still reassembled cleanly with no wrap warnings. Traced at
  the shifted entry points (init=$A3BB, play=$A357) and diffed against
  the original's trace on `(frame, register, old, new)` with the cycle
  column stripped (expected to drift on relocation from page-crossing
  penalties, per lesson 70): **0 of 36 register-write tuples diverge.**
  This confirms the disassembly is genuinely source-derived (a
  mis-parsed instruction boundary anywhere would have broken this test),
  not just a pass-through byte dump.
- **One 3-byte region ($9273: `.byte $4c,$f0,$96`, reachable only via
  `bne l9273` at $9271) was never executed during the 50-frame trace**
  and SIDdecompiler correctly marked it `?` (never accessed) in its `-v2`
  map — it decodes as `JMP $96F0`, an address well outside this file's
  own $9006-$92F0 range. Traced the reachability of this branch by hand
  in the disassembly rather than guessing: the byte it's gated on
  (`l924e`, initialized to `$00` and never written anywhere in this
  746-byte payload) is a flag that can only ever be set nonzero by
  code *outside* this SID rip (the original game binary) — so within
  this isolated file the branch is **provably, permanently dead code**,
  not an unresolved gap. (When `l924e` is $00, as it always is here, the
  stream-end sentinel instead calls the loop-reset routine at $924f and
  the tune repeats from $9006 — consistent with 0 divergence at frame 49,
  the last frame traced, well before any loop point in this ~40-frame
  cycle.)

**Scope honestly stated**: this verifies one real file
(`Block_n_Bubble.sid`, the smallest and simplest of 8 files physically
present in HVSC's `Bauernfeind_Andreas` directory) byte-exact and
trace-exact, plus a genuine non-tautological relocation control. It does
NOT verify the other files in that directory — several
(`Brektwon-The_Curse_of_the_Key.sid`, `Vault_of_Seraphim.sid`,
`Girlguard.sid`, `Underland.sid`) are an order of magnitude larger
(11-22KB vs 746 bytes) and were not disassembled this session; a quick
header check found `Brektwon-The_Curse_of_the_Key.sid` and
`Vault_of_Seraphim.sid` share an identical load/init/play/length
signature (`$a000`/`$c000`/`$c020`/11220 bytes) worth a lesson-68-style
shared-routine check in a future pass, especially given the card's own
quirks flag a possible unrelated-namesake risk for `Vault_of_Seraphim`
(2026 release) — this signature match is at minimum worth re-examining
that assumption against, though it was not pursued further here.

## Sources

See the `sources` array — HVSC Musicians.txt, GamesThatWerent (3 pages),
the CCP fan-history site, CSDb, and the related laxity-newplayer card.
