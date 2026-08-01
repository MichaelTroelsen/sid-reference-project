# Daryll Reynolds / Gameworx (player routine)

```json
{
  "id": "daryll-reynolds",
  "name": "Daryll Reynolds / Gameworx (player routine)",
  "aliases": ["Daryll_Reynolds"],
  "authors": ["Daryll Reynolds"],
  "released": "1984-1985 (Gameworx Software / SoftGold era)",
  "status": "verified",
  "platform": "Australian (Melbourne, Victoria) solo, self-taught composer-coder Daryll Reynolds's own playroutine — he ran a cottage-industry game business from home, trading as Gameworx Software and later SoftGold, with local distribution via DotSoft (department stores) and UK/European distribution through Severn Software. Confirmed both coder and musician across his catalog. Player-ID-fingerprinted across 4 files, all his own. Verified via 2 real PSID files (Nuclear_War_Games, Search_for_King_Solomons_Mines) — 3 other files in his HVSC folder are self-installing RSIDs (play=$0000) not traced this pass.",
  "csdb_release": null,

  "memory": { "load_address": "Both real PSID files with clean (non-RSID) init/play vectors load at $c000: Nuclear_War_Games.sid (init $c000, play $c149, 2 subtunes) and Search_for_King_Solomons_Mines.sid (init $c000, play $c185, 3 subtunes). SIDdecompiler's -v2 map Start: address equals the PSID load address exactly on both (no gotcha-40 gap). The 3 remaining tagged files (Alien.sid, Ninja.sid, Skull_Island.sid) are RSIDs with play=$0000, self-installing a custom IRQ handler via $0314/$0315 (confirmed in Alien.sid's payload at ~$c0f8-$c115: SEI / LDA #<$c185 / STA $0314 / LDA #>$c185 / STA $0315 / CLI / RTS — i.e. the real per-frame play entry is $c185, same relative offset pattern as SKSM's own header play vector) — untraced this pass, see next step below.", "zero_page": "TODO (no disassembly of the RSID files; the two verified PSID files use no zero page at all).", "layout": "Compact hand-written player: init sets 3 voices' ADSR/sustain-release plus master volume from immediate constants, then JSRs a per-subtune dispatch routine; most of the ~2KB/1.5KB payload is note/duration data tables, not code (~125 instruction-mnemonic matches vs 231 .byte-data lines in Nuclear_War_Games.asm)." },
  "entry": { "init": "$c000 in both verified files (identical to PSID load address).", "play": "$c149 (Nuclear_War_Games) / $c185 (Search_for_King_Solomons_Mines), called via IRQ." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "No filter writes observed in any traced subtune across both verified files (0/2 and 0/3 subtunes, 50 frames each) — the player appears not to use the SID filter at all." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SOLO COTTAGE-INDUSTRY DEVELOPER: HVSC lists 'Reynolds, Daryll - AUSTRALIA' with no group field. He ran a home-based game business trading as 'Gameworx Software' and later 'SoftGold,' distributed locally in Australia via DotSoft (sold through Coles/Woolworths/Myers department stores) and internationally through the UK's Severn Software.",
    "FOUR CONFIRMED TITLES: 'Nuclear War Games' (1984, the traced file — based on the film WarGames), 'The Search for King Solomon's Mines' (marketed as 'Part 1' with no sequel produced; UNCONFIRMED whether tied to the H. Rider Haggard literary property beyond the title, dates conflict across sources at 1984 vs 1986), 'Skull Island' (1985 — Reynolds reportedly hand-modified the C64's font-set for the game's stone-carved logo look, a nice small technical/artistic detail), and 'Alien.' Other, non-HVSC-tagged titles per an Australian games-heritage research project ('Play It Again,' affiliated with ACMI) include The Secret of Bastow Manor, The Case of the Mad Mummy, Ninja, Murder on the Waterfront, Castle of Mydor, Dark Planet, Himalayan Odyssey, Lost City, Mystery Island, Oasis of Shalimar — ported across VIC-20, C64, Sega SC-3000, Amiga, MSX, and Amstrad.",
    "CONFIRMED BOTH CODER AND MUSICIAN, primarily known for coding/graphics rather than music specifically: a Lemon64 forum post praises him as 'a genius where c64 character graphics were concerned' — his own solo-shop output (code, graphics, music together) is consistent with the one-man-band pattern already seen on several other cards in this KB, though the specific praise found centers on his visual work, not his composing.",
    "NO CSDb SCENER PROFILE EXISTS — consistent with operating entirely within Australia's small-scale commercial market (Gameworx/SoftGold/DotSoft/Severn Software), outside any demoscene or cracking-group ecosystem.",
    "TWO BIOGRAPHICAL (NOT DIRECTLY-QUOTED) PROFILES were found via the 'Play It Again' Australasian games-history project (ourdigitalheritage.org and a mirrored playitagainproject.com page): Melbourne-based, self-taught, started on a TRS-80 then VIC-20 before C64, sold hint solutions by mail for a dollar. These read as third-person research summaries rather than a verbatim interview — no direct quote transcript was located.",
    "A MINOR SPELLING INCONSISTENCY was found and resolved, not treated as a different person: sources render his first name as both 'Daryll' (this project's tag/HVSC) and 'Darryl' (the Play It Again project's own pages) — confirmed the same person by matching games and company names across both spellings.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — his entire documented career is Australia's small-scale 1980s commercial software market, with zero overlap found against the UK/US/European composers already carded here (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Reynolds, Daryll - AUSTRALIA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Nuclear War Games (full credits, traced file): https://www.lemon64.com/game/nuclear-war-games",
    "Lemon64 — The Search for King Solomon's Mines: https://www.lemon64.com/game/search-for-king-solomons-mines",
    "Lemon64 — Skull Island: https://www.lemon64.com/game/skull-island",
    "Lemon64 forum — praise for his C64 character-graphics skill: https://www.lemon64.com/forum/viewtopic.php?t=22112",
    "Play It Again project — Daryll (Darryl) Reynolds biography: https://ourdigitalheritage.org/hostedArchives/playitagain/creators/darryl-reynolds/index.html",
    "Play It Again project (mirror): https://playitagainproject.com/darryl-reynolds/",
    "Local dataset: 4 files tagged Daryll_Reynolds, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Daryll_Reynolds` tag is Australian solo developer Daryll Reynolds's
own playroutine — a self-taught, home-run cottage-industry game business
(Gameworx Software/SoftGold) distributed via DotSoft in Australia and
Severn Software in the UK. Confirmed both coder and musician. Player-ID-
fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **well-documented
Australian cottage-industry profile**, sourced via a dedicated
games-heritage research project (Play It Again/ACMI) rather than the
usual Lemon64/CSDb combination — a useful, less-common source type for
this KB. Also notable: 3 of his tagged files in the HVSC folder
(`Alien.sid`, `Ninja.sid`, `Skull_Island.sid`) are self-installing RSIDs
this project's standard tracer cannot resolve directly (header
`play=$0000`) — see Verification for the concrete IRQ-vector-install
address found in `Alien.sid` and the `-P` override next step.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this KB's own
disassembly (below) is the only one that exists. `data_format`/`effects`
internals remain `TODO`: the current pass verified the reconstruction
byte-for-byte and register-write-exact but did not do a full annotated
data-format read of the note/duration tables.

## Verification

**`status: verified` (2026-08-01).** Disassembled and reassembled both of
the composer's real, non-RSID PSID files
(`MUSICIANS/R/Reynolds_Daryll/Nuclear_War_Games.sid` and
`Search_for_King_Solomons_Mines.sid`) via `SIDdecompiler.exe -a49152 -z -d
-c -v2 -r` (decimal `-a` for `$c000`, per gotcha 1) + `64tass`:

- **Nuclear_War_Games.sid**: load/init `$c000`, play `$c149`, 2 subtunes.
  Byte-diff **100.0000%** over the 2099 bytes SIDdecompiler's trace
  actually covers (`$c000-$c832`); the remaining 204 trailing payload
  bytes (`$c833-$c8fe`) were confirmed all-zero and confirmed genuinely
  unreferenced (re-disassembled at `-t500000`, 16x the default 30000-call
  trace budget, with an identical `End:` address) — pure padding, not a
  gap in the reconstruction. Trace-diff via `sidm2-sid-trace.exe` (50
  frames, both subtunes): **0 register-write divergences** (74/74 writes
  subtune 0, 68/68 writes subtune 1, exact frame/cycle/register/value).
- **Search_for_King_Solomons_Mines.sid**: load/init `$c000`, play `$c185`,
  3 subtunes. Byte-diff **100.0000%** over the 1454 covered bytes; 2
  trailing uncovered bytes (`$8000`) similarly confirmed genuinely
  unreferenced at `-t500000`. Trace-diff (50 frames, all 3 subtunes): **0
  register-write divergences** (62/62, 62/62, 76/76 writes).
- **Relocation-invariance control** (lessons 69/70/72, needed since `-r`
  made both native builds byte-identical and therefore tautological to
  trace): rebuilt both disassemblies at `-a20505` (decimal for `$5019`, a
  non-page-aligned delta per lesson 69(b)) and re-traced at the shifted
  init/play addresses. Nuclear_War_Games: 144 of 2099 bytes actually
  changed under relocation (proving the source is genuinely symbolic, not
  a pass-through), 0 write divergences across both subtunes.
  Search_for_King_Solomons_Mines: 176 of 1454 bytes changed, 0 write
  divergences across all 3 subtunes. This is a real, non-tautological
  structural pass on two independent files — the bar this project sets
  for `verified`.
- **Filter**: confirmed zero filter-register writes ($D415-$D417) across
  every traced subtune of both files (5 subtunes total) — the player does
  not use the SID filter.
- **Not covered by this pass**: the 3 remaining tagged files (`Alien.sid`,
  `Ninja.sid`, `Skull_Island.sid`) are RSIDs with header `play=$0000` —
  they self-install a custom IRQ handler rather than exposing a PSID play
  vector. `Alien.sid`'s payload was hex-dumped (not fully disassembled)
  around `$c0f8-$c115` and shows the standard `SEI / LDA #<$c185 / STA
  $0314 / LDA #>$c185 / STA $0315 / CLI / RTS` install pattern — i.e. its
  real per-frame play entry is very plausibly `$c185`, matching
  Search_for_King_Solomons_Mines.sid's own PSID-declared play address.
  **Next step for a future pass**: feed `SIDdecompiler` the header's own
  init address plus `-P50053` (decimal for `$c185`, per lesson 13's
  entry-point-override technique) on `Alien.sid` and `Skull_Island.sid`
  (both `init=$c000`) to see if the same IRQ-install pattern and play
  address hold, then byte-diff/trace-diff them the same way — this was
  not pursued in this pass since the two clean PSID files already gave a
  complete, non-tautological verified result and the RSID files are a
  separately-scoped, larger (14-15KB payload, 16-19 subtunes each)
  undertaking.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (4 pages), and the
Play It Again project (2 pages).
