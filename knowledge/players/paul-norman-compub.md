# Paul Norman's Computerized Publishing Co. (demo tunes)

```json
{
  "id": "paul-norman-compub",
  "name": "Paul Norman's Computerized Publishing Co. (demo tunes)",
  "aliases": ["Paul_Norman/ComPub"],
  "authors": ["Paul Norman"],
  "released": "1986 (Cosmi Corporation)",
  "status": "verified",
  "platform": "A genuinely distinct, later tag from already-carded [[paul-norman]]'s own main game-scoring driver — the bundled demo/showcase tunes for 'Paul Norman's Computerized Publishing Co.,' a real, commercially-boxed C64 desktop-publishing/print utility (per its own Commodore Software manual, creates custom print characters/text combined with graphics for newsletters, banners, letterheads, cards, labels), copyright 1986 Cosmi per the SID files' own embedded PSID header — NOT the same product, and — now confirmed via disassembly (see Verification) — structurally NOT the same driver code as his games either. All 3 tunes are classical/patriotic covers, not original compositions. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": 48192,

  "memory": {
    "load_address": "Fixed across all 3 files (unlike [[paul-norman]]'s per-game varying addresses): load $c4e0, init $c8e8, play $c800 — a dedicated standalone player, not re-embedded per song.",
    "zero_page": "Contiguous 16-byte block $60-$6F: z60/z61, z62/z63, z64/z65 = three 16-bit indirect pointers into the three per-voice frequency streams; z66/z67/z68 = their read indices (Y-offsets); z69 = frame-tick countdown; z6a = tick-countdown reload value; z6b = tempo divisor; z6c/z6d/z6e = per-voice control-byte OR-masks; z6f = voice-retrigger OR-mask.",
    "layout": "$c4e0-$c4ff (32 bytes): SID-register init block, block-copied verbatim to $D400-$D41F at INIT. Its last 6 bytes ($c4f9-$c4fe) are ALSO copied to ZP z6a-z6f. $c500-~$c583: voice-1 (osc1) frequency-pair stream ($ff-terminated). $c658-$c66d: pointer-advance helper (bumps all 3 stream pointers by 16, handles page-carry into their high bytes). $c693-$c698: pointer-index-reset helper (also the accidental page-lock mechanism — see quirks). $c700-~$c785: voice-2 (osc2) frequency-pair stream. $c800-$c8e7: PLAY routine + subroutines. $c8e8-$c8ff: INIT entry. $c900 onward: voice-3 (osc3) frequency-pair stream."
  },
  "entry": { "init": "$c8e8, fixed across all 3 files.", "play": "$c800, fixed across all 3 files." },
  "speed": "50Hz (1 PLAY call/frame). Per-note duration is a tick-countdown: z69 decrements every frame; when it hits 0 it reloads from z6a and a new note-pair is read from all 3 voice streams — i.e. all 3 voices always advance together, no independent per-voice timing.",
  "data_format": {
    "order_list": "None — single linear stream per voice, no pattern/order-list indirection.",
    "patterns": "Three parallel per-voice byte streams (voice-1 at $c500, voice-2 at $c700, voice-3 at $c900), each a flat sequence of (freq_lo, freq_hi) pairs, one pair per note event, terminated by a single $ff byte. All 3 voices are read in lockstep on each tick.",
    "instruments": "None — voice waveform/ADSR is set ONCE at INIT from the $c4e0 header block (direct 32-byte copy to $D400-$D41F) and never touched again during playback; only frequency changes per note. Per-note control-byte writes ($D404/$D40B/$D412) just re-OR the header's fixed control byte with a small ZP mask (z6c/z6d/z6e) each tick — gate on/off pulsing, not a real instrument system.",
    "wavetable": "Not present.",
    "pulsetable": "Not present.",
    "filtertable": "CONFIRMED: no filter writes in any of the 3 traced files (matches [[paul-norman]]'s own filter-free finding)."
  },
  "effects": { "encoding": "None found — no vibrato/slide/arpeggio logic in the disassembly; the routine is a bare 3-voice freq-stream sequencer.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'PAUL NORMAN'S COMPUTERIZED PUBLISHING CO.' IS A REAL, COMMERCIALLY-BOXED PRODUCT — CONFIRMED, not just a tune-title guess: a genuine C64 desktop-publishing/print utility, boxed copies confirmed on sale (eBay), with its own Commodore Software manual describing it as creating 'regular or custom print characters and text combined with graphics or fonts for newsletters, banners, letterheads, cards, labels, or as part of a screen display.' A distinct product from any game, not a music-composition tool itself — these 3 files are its bundled DEMO/SHOWCASE tunes.",
    "PUBLISHER AND YEAR CONFIRMED VIA PRIMARY EMBEDDED METADATA, refining what the existing [[paul-norman]] card previously only sourced from a later crack date: this project's own local DeepSID dump (`hvsc_files.sql`) shows all 3 files' PSID header copyright field reads verbatim **'1986 Cosmi'** — i.e. the SAME publisher as Norman's games, released under his own personal name as the product's brand, one year BEFORE the CSDb-catalogued crack date of 23 September 1987 (a normal lag between original release and crack circulation, not a contradiction).",
    "ALL THREE TUNES ARE CLASSICAL/PATRIOTIC COVERS, NOT ORIGINAL COMPOSITIONS — a genuinely new finding not previously documented anywhere in this KB: 'music A' = Tchaikovsky's 1812 Overture (the traced file), 'music B' = Sousa's The Stars and Stripes Forever, 'music C' = Bagley's National Emblem — all public-domain classical/patriotic marches, sourced from this project's own DeepSID dump title/STIL data (`data/composers/paul-norman.json`). Fitting demo/showcase music for a print-shop utility rather than game scoring.",
    "NOW SETTLED BY DISASSEMBLY (2026-08-07): this is NOT the same driver code as [[paul-norman]]'s main game-scoring routine, despite the superficially similar filter-free write-density that had made the question genuinely open. ComPub's INIT does a single direct 32-byte block-copy of the song header straight into $D400-$D41F (`ldx #$1f / lda lc4e0,X / sta $d400,X`) with no explicit silence step, whereas [[paul-norman]]'s routine explicitly silences all 29 SID regs first, then programs defaults from a *separate* 25-byte table. ComPub's PLAY reads THREE independent per-voice frequency streams via 16-bit zero-page indirect pointers ((z60),Y / (z62),Y / (z64),Y, one per voice, all advanced in lockstep) — an architecture with no analogue in [[paul-norman]]'s documented direct-indexed playback. ComPub also uses fixed, identical load/init/play addresses across all 3 files ($c4e0/$c8e8/$c800) rather than [[paul-norman]]'s per-game-relocated embedding. Both cards' `shares_routine_with` edges are correctly left empty.",
    "PAGE-LOCKED BY DESIGN (confirmed via relocation-invariance control, not merely suspected): INIT's tail (`jsr lc871`) sets up the 3 stream pointers' LOW bytes via `lda #<lc500 / sta z60/z62/z64`, then calls `jsr lc695` — but lc695 is entered MID-INSTRUCTION (the routine's real top is `lc693: lda #$00`), so the JSR at $c871 lands on the bare `sta z66/z67/z68` and reuses whatever the accumulator STILL HOLDS from 4 instructions earlier: the low byte of `lc500`'s address. At the file's native load address ($c4e0) this is a harmless coincidence (`lc500`=$c500, low byte $00, so z66/z67/z68 end up correctly zeroed) — but it means the 3 read-indices are silently seeded from `<lc500` rather than a real `lda #$00`, and playback is only correct when `lc500`'s low byte is $00, which requires the file's own load address to end in exactly $E0 (since lc500 = load+$20). Verified empirically: a relocation control rebuilt at a base with the SAME low byte as the original ($90E0) traced 0/35 writes diverged (music A) and 0/29 (music B); a control at a DIFFERENT low byte ($9000, page-aligned but wrong low byte) diverged from frame 0 on both. This is the same class of driver-design page-lock this KB has documented on several other players (see e.g. [[shaun-southern]], [[colin-davies]]) — not a defect in this reconstruction.",
    "Not confirmed in SIDId (no entry for this tag, matching the sibling card's own gap — also checked directly in `deepsid_dl/sidid.nfo`, no entry there either). Direct, confirmed relationship to [[paul-norman]] (same composer, later/separate product — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against the same extensive roster as the sibling card — none found)."
  ],
  "sources": [
    "Commodore Software archive — Computerized Publishing Co. manual: https://commodore.software/downloads/download/211-application-manuals/13428-computerized-publishing",
    "eBay listing — boxed copy (confirms commercial retail packaging): https://www.ebay.com/itm/Commodore-64-Paul-Norman-s-Computerized-Publishing-Company-Software-In-Box-/133292894142",
    "CSDb release id=48192 (crack, 23 September 1987, Radwar/The Light Circle): https://csdb.dk/release/?id=48192",
    "Local dataset: deepsid_dl/DeepSID_Database/hvsc_files.sql (PSID copyright field '1986 Cosmi' for all 3 files, rows ~33690-33692)",
    "Local dataset: data/composers/paul-norman.json (DeepSID dump — real titles: 1812 Overture, Stars and Stripes Forever, National Emblem)",
    "Existing KB card: knowledge/players/paul-norman.md (the earlier, main game-scoring tag, updated in this same batch)",
    "Local dataset: 3 files tagged Paul_Norman/ComPub, 1 composer (see knowledge/COVERAGE.md)",
    "SIDdecompiler disassembly + 64tass reassembly + sidm2-sid-trace.exe verification (2026-08-07), including a relocation-invariance control: scratchpad artifacts (this session's scratchpad, not committed) music{A,B,C}.{asm,prg} — all 3 files 100.0000% byte-exact and trace-exact at native address."
  ]
}
```

## Overview

The `Paul_Norman/ComPub` tag is the bundled demo/showcase music for
'Paul Norman's Computerized Publishing Co.,' a real, commercially-boxed
1986 Cosmi desktop-publishing utility — a distinct product from
already-carded [[paul-norman]]'s own game-scoring career, and now
**confirmed via disassembly** to be a structurally distinct playroutine
too (see Verification). All 3 tunes are classical/patriotic covers.
Player-ID-fingerprinted across 3 files, all his own. A bare 3-voice
frequency-stream sequencer: one shared engine, fixed load/init/play
addresses across all 3 files, no filter/effect/instrument system.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed real
product identity and publisher**, sourced directly from the SID files'
own embedded PSID metadata rather than only the later crack date; all 3
tunes identified as classical/patriotic covers, not original
compositions (previously undocumented anywhere in this KB); the
disassembly-settled finding that this is **NOT** the same driver as
[[paul-norman]]'s game routine; and a confirmed **page-lock-by-design**
defect (the driver only plays correctly when its load address's low
byte is $E0, due to a leftover-accumulator index-reset bug baked into
the original hand-coded routine, not a reconstruction artifact).

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly completed 2026-08-07 via `SIDdecompiler -> 64tass`, no
override flags needed (native `-v2` Start: matched the PSID load address
exactly on all 3 files). Scratchpad artifacts:
`scratchpad/paul-norman-compub/music{A,B,C}.{asm,prg}` (this session's
own scratchpad — not yet copied anywhere permanent).

## Verification

**VERIFIED (2026-08-07).** All 3 HVSC `Paul_Norman/ComPub` files
disassembled, reassembled, and trace-diffed against their originals.

| File | Load/Init/Play | Byte-diff | Native trace | Aligned-relocation control |
|------|------|-----------|-------|-------|
| music A (1812 Overture) | $c4e0/$c8e8/$c800 | 100.0000% (1184/1184) | 35 writes/30 frames, exact | 0 of 35 writes diverged, rebuilt at $90E0 (same low byte as native) |
| music B (Stars and Stripes Forever) | $c4e0/$c8e8/$c800 | 100.0000% (1312/1312) | 29 writes/30 frames, exact | 0 of 29 writes diverged, rebuilt at $90E0 |
| music C (National Emblem) | $c4e0/$c8e8/$c800 | 100.0000% (1312/1312) | 13 writes/30 frames, exact | not re-run (engine code confirmed byte-identical to A/B) |

**Methodology:** `SIDdecompiler -a50400 -z -d -c -v2` (decimal for
$c4e0, matching the PSID load address — `-v2`'s own Start: address
agreed exactly, no gotcha-40 relocation needed) -> `64tass` reassembly,
clean on all 3 (no wrap warnings, no label collisions) -> byte-diff
against the original PSID payload -> `sidm2-sid-trace.exe` (30 frames,
init/play from the PSID header) on both the original and the
reassembled `.prg`, diffed with the cycle column stripped.

Because the native reassembly is 100% byte-identical to the original,
the native trace-diff is tautological by construction (lessons
69/70/72 in `sid-player-verify`'s own accumulated notes) — so a
**non-tautological relocation-invariance control** was also run: the
same disassembly rebuilt at a different absolute base and traced
against the original at the shifted init/play addresses. This
uncovered a genuine, precisely-localized page-lock (see the quirks
array entry) — a control at a base sharing the *same low byte* as the
native load address ($c4e0, i.e. any base ending `$E0`) traces exactly;
a control at a different low byte (tried: page-aligned $9000) diverges
from frame 0. This is a real, driver-design property (confirmed by
reading the disassembly: INIT's `jsr lc695` reuses a leftover
accumulator value as an implicit index reset), not a defect in the
reconstruction — the file's own native build is exact regardless.

**Structural finding:** the engine (PLAY/INIT code) disassembles
byte-identical across all 3 files (`diff` on the play/init instruction
ranges is empty) — only the 3 per-voice frequency-stream tables and
the header block differ, confirming a single shared engine with 3
different song payloads, consistent with "bundled demo tunes for one
product" rather than 3 independently hand-coded pieces.

## Sources

See the `sources` array — Commodore Software archive, eBay, CSDb, local
dataset (3 files), the related paul-norman card, and this session's
disassembly/reassembly/trace-diff artifacts.
