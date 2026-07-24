# Oliver Kläwer (player routine)

```json
{
  "id": "oliver-klaewer",
  "name": "Oliver Kläwer (player routine)",
  "aliases": ["Oliver_Klaewer"],
  "authors": ["Oliver Kläwer"],
  "released": "1986-1992 (three successive self-written drivers)",
  "status": "verified",
  "platform": "German composer Oliver Kläwer's own hand-coded playroutine — he NEVER used a music editor/tracker at all, instead hand-writing note data directly as assembler source (first in Turbo Ass, later Macro-Ass), building THREE successive drivers of his own across his career (1986, 1988, 1992). Player-ID-fingerprinted across 10 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "VARIES PER FILE (this is hand-assembled per-game source, not a shared relocatable player — see quirks). CONFIRMED by disassembling+reassembling+trace-diffing 2 real HVSC files: Emerald_Mine.sid load $c000 (init $c000 = `jmp lc9ee`, play $c003 = `jmp lca47`); Emerald_Mine_II.sid load $c000 (init $c000, play $c726). Other files in the tagged set have very different load/init/play addresses (Floating_Point_Action $a800/$af80/$afc2, K_A_O_S $3000/$3080/$30e0, Maniax $8400/$9403(init)/$8403(play), Soul_Crystal $6970, Tronic $3200/$3203/$3338, Zero_Gravity $2000/$28d1/$28e4) — UNCONFIRMED whether these are the same driver generation or one of the other two (his interview describes three successive self-written drivers, 1986/1988/1992); only Emerald Mine (1988) and Emerald Mine II were actually disassembled.", "zero_page": "CONFIRMED (Emerald_Mine.sid disassembly): only $FD-$FE used, as an indirect-indexed pointer pair (`zfd`/`zfe = zfd+1`) — a minimal ZP footprint, consistent with a small, purpose-built routine rather than a general-purpose tracker engine.", "layout": "Not a separate tracker-file format — hand-assembled note data lives directly in the same code/data block as the player routine (confirmed: no `.sid`-external data segment; PSID payload is one contiguous $c000-based block for both traced files)." },
  "entry": { "init": "CONFIRMED per file (see memory.load_address) — no single fixed convention across the tagged set; each game's build has its own init address.", "play": "CONFIRMED per file (see memory.load_address); called from IRQ per the original in-game setup (not independently re-verified this pass — inherited from the 2026-07-14 trace note)." },
  "speed": "TODO — not investigated this pass (frame-rate/multi-speed behavior unconfirmed).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "CONFIRMED structural role only (not the encoding): both traced files (Emerald_Mine.sid, Emerald_Mine_II.sid) drive a per-voice pulse-width SWEEP via a small self-modified 8-bit accumulator table indexed per voice (`lcda7`/`lcda8`/`lcda9`/`lcdaa`/... region in Emerald_Mine.sid; `lca9c`-`lcab4` region in Emerald_Mine_II.sid) — written by the play routine every frame, read back next frame to keep incrementing. SIDdecompiler's default disassembly captures this table's POST-EXECUTION (drifted) value rather than its true cold-boot constant — see Verification/reconstructions for the full patch table. Full encoding of what drives the sweep depth/rate is TODO.", "filtertable": "TODO (very filter-heavy — 52 filter writes in a dense 486-write/50-frame Emerald_Mine.sid sample; plausibly a heavy filter-sweep effect baked into his own routine)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED, FIRST-PARTY SOURCED: NEVER USED AN EDITOR — a 2001 Remix64 interview has him stating directly that he composed by hand-writing note data as assembler source ('My own assemblerscript with turboass (later makroass)'), building three successive music drivers of his own (1986, 1988, 1992), driven by wanting more speed/flexibility than existing shared players offered. No source maps which specific driver produced any given traced file.",
    "EMERALD MINE PUBLISHER CORRECTION: the game was published/developed by KINGSOFT, not Rainbow Arts (a wrong assumption in the initial research brief, caught and corrected) — designed by Klaus Heinz and Volker Wertich (the latter later famous for The Settlers). Original 1987 release was Amiga/Atari ST; C64/C16/Plus4 ports followed 1988. On Emerald Mine II specifically, the CODER was Jörg Dierks — Kläwer was MUSIC-ONLY on this title, not the game's programmer (his own driver work is separate from any game-coding credit).",
    "CORRECTED — THIS CARD PREVIOUSLY GOT THIS WRONG. It asserted 'NO HVSC MUSICIANS.TXT ENTRY EXISTS for him at all — confirmed by direct search of the full downloaded file', and concluded this project's HVSC-cross-reference logic could never match him. THAT IS FALSE. Musicians.txt LINE 891 reads 'Kläwer, Oliver - GERMANY' (the ä is byte 0xE4). The original search looked for 'Klaewer' — the ASCII-folded spelling used in the DeepSID TAG — which returns 0 hits, while 'Kläwer' returns 1. There is no gap in the cross-reference logic; there was a gap in the search. THIS IS THE EXACT ISO-8859-1 LANDMINE CLAUDE.md ALREADY DOCUMENTS FOR fetch-hvsc-docs.js — except it bit a RESEARCHER rather than the code. When checking Musicians.txt for any non-ASCII name, search the accented form, not the tag's folded form.",
    "SEARCH BOTH SPELLINGS: the DeepSID tag/folder is 'Klaewer' (ASCII-folded), HVSC's Musicians.txt is 'Kläwer' (ISO-8859-1). Neither finds the other.",
    "BIOGRAPHY: born 1969, Hanover, Germany. Worked with Golden Games and reLine Software (Hanover — the same studio [[soundcontrol]]'s Holger Gehrmann founded, though no direct collaboration between the two was found), also Kingsoft, EAS Software, and Starbyte Software. Games (1986-1999): Floating Point Action, Tronic, K.A.O.S., the Emerald Mine series, Maniax, Zero Gravity, Ringside, Soul Crystal, Biing! 2 (1999). Returned to C64 composing in 2023 ('Full-Size Oompa Oompa'). By 2001 he was a professional PHP/MySQL web programmer running a home hip-hop studio ('BlackBeatDepot') — a coding career, but unrelated to his earlier game work.",
    "NAMED FAVORITE/NOTABLE TUNES per his own interview: 'Zero-Gravity' (his own favorite), 'Floating Point Action' (title data was algorithmically derived from text printed on a milk carton — a genuinely quirky anecdote, not literal floating-point math). Cites Rob Hubbard and Jeroen Tel as listening influences (already carded here as [[rob-hubbard]]; Jeroen Tel not yet carded) — admiration only, no evidence of collaboration or code derivation.",
    "No known relationship found to any other composer/tool already in this KB beyond the influence-only Rob Hubbard citation above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck, Holger Gehrmann — none found).",
    "VERIFIED (2026-07-24) ON 2 OF 10 FILES, NOT ALL: disassemble/reassemble/trace-diff confirmed register-write-exact on Emerald_Mine.sid and Emerald_Mine_II.sid only (both 1988, load $c000). The other 8 tagged files have visibly different load/init/play addresses (see memory.load_address) and were NOT disassembled this pass — per his own interview he wrote three successive drivers (1986/1988/1992), so those 8 files may be a different driver generation entirely. Don't assume the fix/mechanism found here (a self-modified per-voice pulse-width-sweep accumulator table SIDdecompiler snapshots post-execution) generalizes to them without independently disassembling at least one."
  ],
  "sources": [
    "Remix64 interview with Oliver Kläwer (2001, primary source for the no-editor/hand-assembled workflow, three-driver history): https://remix64.com/interviews/interview-oliver-klaewer.html",
    "CSDb scener (id=6007, handles Oliver Kläwer/Woogle Sound Ltd./Jess, Musician, hundreds of credits 1987-2024): https://csdb.dk/scener/?id=6007",
    "VGMPF — Oliver Klaewer (biography, Golden Games/reLine/Kingsoft/EAS/Starbyte, game list): https://www.vgmpf.com/Wiki/index.php?title=Oliver_Klaewer",
    "Wikipedia — Emerald Mine (publisher/designer correction): https://en.wikipedia.org/wiki/Emerald_Mine",
    "Lemon64 — Emerald Mine II (coder Jörg Dierks, musician Oliver Kläwer credit): https://www.lemon64.com/game/emerald-mine-2",
    "HVSC Musicians.txt line 891 — 'Kläwer, Oliver - GERMANY' (search the ACCENTED form; the ASCII 'Klaewer' returns 0 hits — see the corrected quirk above): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 10 files tagged Oliver_Klaewer, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Oliver_Klaewer` tag is German composer Oliver Kläwer's own
hand-coded playroutine — notably, he never used an editor or tracker at
all, hand-writing note data directly in assembler source across three
successive self-written drivers (1986, 1988, 1992). Player-ID-
fingerprinted across 10 files, all his own, including music for the
Emerald Mine series. **Verified (2026-07-24)** by disassembly +
reassembly + trace-diff on the two Emerald Mine files (both 1988,
register-write-exact after patching a drifted self-modified pulse-width
table) — see Verification below for the exact scope (2 of 10 files; the
other 8 may be a different one of his three drivers).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed
no-editor, hand-assembled workflow** across three drivers, sourced from
his own interview; a **corrected Emerald Mine publisher attribution**
(Kingsoft, not Rainbow Arts) plus clarifying he was music-only, not the
game's coder; and a **correction to this card's own earlier claim** that
HVSC's Musicians.txt had no entry for him — it does, at line 891, spelled
**Kläwer**. The original search used the tag's ASCII form (`Klaewer`) and
found nothing. Same ISO-8859-1 trap CLAUDE.md documents for the fetch
code, this time catching a human.

Note also [[oliver-kirwa]] — a *different* German Oliver with his own
self-coded driver, adjacent in Musicians.txt, with Kingsoft in both
gameographies. Easy to conflate; don't.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this is an
original disassembly, done this pass. See
`knowledge/players/reconstructions/oliver-klaewer.md` for the full
byte-level patch table.

## Verification

**`status: verified` (2026-07-24)** — disassembled, reassembled, and
trace-diffed against 2 independent real HVSC files.

**Method**: `SIDdecompiler.exe -a<decimal load addr> -z -d -c -v2`, relocated
to each file's own PSID load address (the `-v2` map's own "Start:" address
matched the PSID header's load address exactly on both files — no
gotcha-40-style relocation shift needed). Reassembled with `64tass`.

**`Emerald_Mine.sid`** (load/init `$c000`, play `$c003`): raw reassembly vs.
pristine payload = 55/4092 bytes differ (98.6559%); reassembly also came out
4 bytes short (4092 vs. 4096) because the trailing `$cffc-$cfff` were never
touched by SIDdecompiler's default trace and got silently dropped (per this
KB's gotcha 9 — genuinely-unreferenced tail, not a relocation error). All 55
differing bytes fall in two `+`/`w`-marked (self-modified) working-storage
clusters (`$cda7-$cdbf`, `$cfb6-$cfbb`+`$cfc0-$cfeb`+`$cff8-$cffb`) — a
per-voice pulse-width sweep accumulator table that the play routine both
reads and writes every frame (`init` explicitly zeros several of these same
addresses at cold start, confirming they're live working storage, not
constant data). Patching all 55 bytes back to the pristine payload values
closed the byte-diff to 0 (over the 4092-byte compared region) and produced
a **register-write-exact trace-diff over 50 frames** (`sidm2-sid-trace.exe`,
init `$c000`/play `$c003`) — confirmed the unpatched reassembly genuinely
diverges from frame 0 (`osc2_pw_lo`/`osc2_pw_hi` drift), so the patch is
load-bearing, not redundant.

**`Emerald_Mine_II.sid`** (load `$c000`, init `$c000`, play `$c726` — a
different, deeper play entry than Emerald Mine I, but the same underlying
mechanism): raw reassembly vs. pristine payload = 64/3313 bytes differ
(98.0682%); reassembly 15 bytes short (3313 vs. 3328, same
never-touched-tail pattern, `$ccf1-$ccff`). All 64 differing bytes fall in
the same two-cluster pulse-width-sweep-table pattern (`$ca9c-$cab4`,
`$ccab-$ccef`). Patching closed the byte-diff to 0 and produced a
**register-write-exact trace-diff over 50 frames** (init `$c000`/play
`$c726`), again confirmed load-bearing against the diverging unpatched
build.

**Net result**: 2 independent real files, same player mechanism (a
self-modified per-voice pulse-width sweep accumulator SIDdecompiler
snapshots post-execution rather than at its cold value), same fix, both
closing to register-write-exact. This matches this project's own
`verified` precedent for a drifted-workspace divergence (cf.
`laxity-newplayer` ~99.9%, `cheesecutter`, `roland-hermans`) — full
byte-exactness after patching, divergence explicitly localized and
explained, not "close enough."

**Known, explicitly-scoped gap (not invented, not closed)**: a handful of
bytes at the very end of each file's loaded block (`Emerald_Mine.sid`
`$cffc-$cfff`, 4 bytes; `Emerald_Mine_II.sid` `$ccf1-$ccff`, 15 bytes) are
never touched by either file's playback in a 50-frame trace and were
silently dropped by SIDdecompiler rather than reconstructed — plausibly
genuinely-dead padding/unused table space (consistent with the register-write
trace matching exactly despite their absence), but not independently proven
dead beyond the 50-frame window tested. Left as `TODO` rather than guessed.

**Not attempted this pass** (scope note, not a blocker to `verified` on the
two files actually tested): the other 8 tagged files (`Floating_Point_Action`,
`Great_Compactor_Sampler`, `Introcoder_1_1`, `K_A_O_S`, `Maniax`,
`Soul_Crystal`, `Tronic`, `Zero_Gravity`) were not disassembled — their
init/play addresses differ substantially from the two Emerald Mine files
(see `memory.load_address`), so they may represent one of the composer's
other two self-written drivers (1986 or 1992) rather than the same one
confirmed here. Anyone extending this card should disassemble one of those
before assuming the fix generalizes further than the two files actually
tested.

## Sources

See the `sources` array — a Remix64 interview (primary source), CSDb,
VGMPF, Wikipedia, and Lemon64.
