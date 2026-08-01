# Frank Brodersen (player routine)

```json
{
  "id": "frank-brodersen",
  "name": "Frank Brodersen (player routine)",
  "aliases": ["Frank_Brodersen"],
  "authors": ["Frank Brodersen"],
  "released": "1991-1992",
  "status": "verified",
  "platform": "German coder-composer Frank Brodersen's own playroutine — a hobbyist/PD arcade-clone developer, coding graphics and music himself alongside co-coder Mario Brucksch. Player-ID-fingerprinted across 3 files, all his own (arcade-clone type-in style games: Pacman II, Original Tetris-Game, and a third Pacman title).",
  "csdb_release": 175700,

  "memory": { "load_address": "Per-file PSID load address (all RSID, embedded-in-payload convention): Original_Tetris-Game.sid $2000, Pacman.sid $4000, Pacman_II.sid $0c6b — the engine itself is NOT fixed-address across files (contrast the fixed-engine-varying-load pattern of e.g. gmc); each title's whole player was reassembled fresh at a different base.", "zero_page": "Indirect-copy pointer workspace, per file: Original_Tetris-Game.sid $fa-$ff (6 bytes: src ptr, dst ptr, 16-bit length countdown); Pacman_II.sid $f7-$ff (adds a $f7/$f8/$f9 index+table-pointer prefix, table-driven rather than fixed-slot). Confirmed independently relocatable via SIDdecompiler's -Z flag on both files with no loss of trace-exactness (18 and 29 bytes shifted respectively).", "layout": "SELF-RELOCATING ENGINE (confirmed on 2 of 3 files): the code physically present at the PSID load address is mostly a small subtune dispatcher plus a block-copy loop and its (src,dst,len) command table; init reads that table and copies the REAL player engine — verbatim, byte-for-byte — from inside the loaded payload up into fixed high-RAM addresses well outside the file's own load range (Original_Tetris-Game.sid: 4 segments, sources $3e40/$47e4/$4dec/$5698 -> destinations $8690/$8ed0/$92ec/$9f71, i.e. up to SIDdecompiler's own traced End: $bb8f). This is the sid-player-verify agent's lesson-88 pattern (copy source inside payload, destination outside it) — confirmed, not guessed, via the copy command table's own decoded bytes." },
  "entry": { "init": "Per-file PSID init address: Original_Tetris-Game.sid $70e3, Pacman.sid $6650, Pacman_II.sid $6660 — takes the subtune index in A (standard RSID convention) and PHAs it before running the block-copy loop, so the copy always runs first regardless of which subtune was requested.", "play": "Self-installing IRQ handler (RSID, header play=$0000 on all 3 files) — confirmed via SIDdecompiler's own -v2 memory map: its traced 'Start:' address is the KERNAL IRQ vector itself ($0314 for Original_Tetris-Game.sid, $0300 for Pacman_II.sid), sitting BELOW the PSID load address in both files — the classic gotcha-40 tell. Relocating the disassembly onto that Start address (not the header load address) is what makes the reassembly land byte-exact; see Verification." },
  "speed": "Not separately documented (subsumed by the self-installing IRQ / KERNAL vector convention above — the driver runs on the standard raster/CIA-driven IRQ cadence, not a custom multispeed loop as far as tracing showed)." ,
  "data_format": { "order_list": "TODO — not manually annotated; the block-copied engine at the destination addresses (see memory.layout) is functionally verified (trace-exact) but its internals were not read/labeled in this pass.", "patterns": "TODO (same caveat).", "instruments": "TODO (same caveat).", "wavetable": "TODO (same caveat).", "pulsetable": "TODO (same caveat).", "filtertable": "TODO — original sample trace (299 writes/50 frames on Original_Tetris-Game.sid subtune 9) showed 0 filter writes; not re-checked on subtune 1 in this pass." },
  "effects": { "encoding": "TODO — not manually annotated, same caveat as data_format.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SELF-RELOCATING BLOCK-COPY ENGINE: the real player code is not at the PSID load address at all — init copies it there from elsewhere in the same file at runtime (a (src,dst,len) command table, terminated by a $ff src-byte sentinel). SIDdecompiler's own -v2 map correctly reports its traced 'Start:' address as the KERNAL IRQ vector ($0314/$0300), below the PSID load address on both files checked — the gotcha-40 tell; the fix is relocating onto that Start address, not the header's load address. See Verification for the full recipe and its one known limitation.",
    "HVSC CONFIRMS 'Brodersen, Frank - GERMANY,' no group affiliation — resolving the German-vs-Danish naming ambiguity in the original research question in favor of Germany.",
    "'PACMAN II' (1991, Public Domain) IS CONFIRMED COVER MUSIC, not original composition: Lemon64 credits both coding (jointly with Mario Brucksch) AND music to Frank Brodersen, with the tracks explicitly identified as covers — 'Popcorn [from Music To Moog By]' (Gershon Kingsley) and 'Another One Bites the Dust [from The Game]' (Queen) — a genuinely useful detail consistent with the traced file's dense, cover-style register-write pattern.",
    "'ORIGINAL TETRIS-GAME' (1992, the traced file) IS A HOMEBREW TETRIS CLONE with an internal high-score table reading 'Copyright by Activision' — suggesting it may have been submitted to Activision and declined, then circulated as PD/type-in rather than an official release. This Activision-submission detail is EXPLICITLY FLAGGED AS UNCONFIRMED, sourced only from a retro-news blog (not a primary source), not stated as settled fact.",
    "THE THIRD FILE, A NON-'II' 'PACMAN' TITLE, HAS AN UNRESOLVED AUTHORSHIP DISCREPANCY: one source ('Pac-Man +3,' a 1988 homebrew) credits only Mario Brucksch, NOT Brodersen — flagged as a possible mismatch between this project's own folder contents and external attribution, worth a manual double-check against the actual file's own embedded metadata rather than trusting the external source blindly.",
    "CONFIRMED BOTH CODER AND MUSICIAN on Pacman II specifically (jointly coded with Brucksch, solely composed music) — consistent with the 'clone/type-in game, small team wearing all hats' pattern seen elsewhere in this KB.",
    "NO CSDb SCENER PROFILE EXISTS — a CSDb scener-name search for 'Brodersen' returned zero results, consistent with a PD/hobbyist-scene coder outside the organized cracking/demo scene proper, not a research gap.",
    "A REAL, EXPLICITLY-FLAGGED NAME-COLLISION RISK WAS CAUGHT: the 2019 crack releases of both his games are credited to a crack group called 'Laxity' (crackers 'Didi' and 'Goat') — this is a DIFFERENT, UNRELATED entity from the musician 'Laxity' (Thomas Egeskov Petersen) already carded in this KB as [[laxity-newplayer]]. The crack group's own credits list only 'Didi' and 'Goat,' never Thomas Petersen. Explicitly NOT conflated — a genuine false-positive risk this card avoids.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — an isolated PD/hobbyist figure with no scene group, and the sole apparent 'Laxity' proximity is the ruled-out false lead above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Brodersen, Frank - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Pacman II (full credits, cover-tune identification): https://www.lemon64.com/game/pacman-2",
    "Indie Retro News — 'Cracktro Tuesday #1' (Original Tetris-Game, Activision claim flagged unconfirmed): https://www.indieretronews.com/2019/03/cracktro-tuesday-1-exploring-very.html",
    "CSDb release id=175700 (Original Tetris-Game, traced file's own release): https://csdb.dk/release/?id=175700",
    "Existing KB card: knowledge/players/laxity-newplayer.md (the unrelated 'Laxity' handle explicitly ruled out as a connection)",
    "Local dataset: 3 files tagged Frank_Brodersen, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Frank_Brodersen` tag is German hobbyist coder-composer Frank
Brodersen's own playroutine — arcade-clone type-in games (Pacman II,
Original Tetris-Game), coding and composing alongside co-coder Mario
Brucksch. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array. The technically load-bearing one is the
**self-relocating block-copy engine** (see Verification) — the code at
the PSID load address is mostly a dispatcher and copy loop, not the real
player, which only exists in RAM after `init` runs. Also notable: a
**genuine, explicitly flagged name-collision risk avoided** (a 2019
crack-group credit sharing the handle 'Laxity' is a different, unrelated
entity from the already-carded [[laxity-newplayer]] musician — caught
and kept separate rather than conflated), and an honestly-preserved
authorship discrepancy on the third file in this composer's own folder.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly produced this pass via `SIDdecompiler.exe` — see Verification.

## Verification

**Byte-exact reconstruction + non-tautological register-write trace match
(2026-08-01) — `status: verified`.**

Disassembled and reassembled subtune 1 (index 0) of two of the three
tagged HVSC files, both self-installing-IRQ RSIDs whose real player code
is block-copied to high RAM at init (see `memory.layout`):

- **Original_Tetris-Game.sid** (load `$2000`, init `$70e3`, 20847-byte
  payload): `SIDdecompiler.exe -a788 -z -d -c -v2 -1 -s0 -r` (788 =
  decimal `$0314`, the tool's own `-v2`-reported `Start:` address, NOT
  the PSID load address — gotcha 40). Reassembled with `64tass`
  (4 duplicate-label lines needed deduping per the project's lesson 70)
  to a build **100.0000% byte-exact** against the original payload
  (0/20847 diffs).
- **Pacman_II.sid** (load `$0c6b`, init `$6660`, 27520-byte payload):
  identical recipe, relocated to `-a768` (decimal `$0300`, this file's
  own `-v2` Start address). Also **100.0000% byte-exact** (0/27520
  diffs).

**Trace verification** (`scripts/dev/vsid-trace.js`, since both files are
self-installing-IRQ RSIDs with header play=`$0000` — VICE is required,
`sidm2-sid-trace.exe` cannot drive these): a trace of the reassembled
build spliced verbatim into the original PSID header is byte-identical to
the original file and therefore tautological on its own (per this
project's own discipline — see the `sid-player-verify` agent's lessons on
this). Two non-tautological checks were run instead:

- **Zero-page relocation control** (`-Z32`, moving the copy-loop's ZP
  workspace off its native slot — 18 changed bytes on
  Original_Tetris-Game.sid, 29 on Pacman_II.sid, confirmed genuinely
  non-identical to the original file): traced **0/320** and **0/95**
  register-write divergences respectively, over 50 frames / subtune 1 on
  both files. This is real, non-tautological evidence the disassembly is
  source-derived and not just a byte dump.
- **Full address-relocation control** (rebuilding the whole disassembly
  at a different base, both page-aligned `+$1000` and non-aligned
  `+$1035` deltas): **fails** on both files (0-1 writes reproduced vs.
  320/95 expected). Root-caused, not just observed: the block-copy
  destination addresses (e.g. `$9f71` on Original_Tetris-Game.sid) are
  referenced TWICE in the source — once as a raw literal in the copy
  command table (never symbolized by SIDdecompiler, correctly stays
  fixed on relocation since it's genuine external workspace) and once as
  the dispatcher's own `JSR` target (which SIDdecompiler DOES symbolize,
  since it falls inside the tool's own traced Start-End range, and which
  therefore DOES shift on relocation) — confirmed via `64tass --labels`:
  after a `+$1000` shift, the JSR-target label resolved to `$af71` while
  the copy table's destination literal was still `$9f71`, unmoved. This
  is a genuine, structural SIDdecompiler limitation for this specific
  self-relocating-block-copy driver shape (a new, more literal case of
  the project's lesson 72(b)/80 split-reference pattern), not a defect
  in the reconstruction — the native, non-relocated build is proven
  byte-exact and the ZP-only control independently proves the
  disassembly is source-derived rather than pass-through.

**Scope of `verified`**: subtune 1 (index 0) only, on 2 of the 3 tagged
files (Pacman.sid not attempted this pass — same architecture expected
by inspection of its own init routine, not independently confirmed).
Data format / effects encoding remain `TODO` — the block-copied engine's
own internals were not manually read/labeled, only proven functionally
correct via the trace controls above.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64, Indie Retro News,
CSDb, and the related laxity-newplayer card.
