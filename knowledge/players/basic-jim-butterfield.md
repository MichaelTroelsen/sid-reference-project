# Basic/Jim Butterfield

```json
{
  "id": "basic-jim-butterfield",
  "name": "Basic/Jim Butterfield",
  "aliases": ["Basic/Jim_Butterfield"],
  "authors": ["Jim Butterfield"],
  "released": "1983-1984 (the routine's earliest confirmed publications: Jim Butterfield, 'The Commodore 64 Skiffle Band', Commodore Power/Play Vol.2 No.1, Spring 1983, p.21 — full BASIC listing; and Jim Butterfield, 'Commodore 64 Music: Happy Birthday', COMPUTE! Issue 53, October 1984, p.177. The same M1-M8 tune programs shipped on Commodore's C64/1541 demo diskette. Individual HVSC files carry 1982-1984 copyright years.)",
  "status": "in-progress",
  "platform": "NOT a software tool/editor at all — a hand-typed Commodore BASIC V2 program pattern (three-voice tune playback via direct POKEs to the SID's three voice base addresses, 54272/54279/54286 = $D400/$D407/$D40E) that Player-ID fingerprints by matching literal tokenized-BASIC bytes in the file, not a machine-code replay routine. The exact routine was PUBLISHED by Jim Butterfield in Commodore Power/Play (Spring 1983, 'The Commodore 64 Skiffle Band') and COMPUTE! (Oct 1984, 'Happy Birthday'), and shipped on Commodore's own C64/1541 demo diskette (files M1 MUSIK / M2 SYNTHESIZER / M3 DIXIE / M4 YANKEE ...). Distinct from the much larger generic 'Basic_Program' catch-all tag in this dataset (234 files) — that tag matches OTHER/unidentified BASIC music code; this one specifically matches Butterfield's own statement structure.",
  "csdb_release": null,

  "memory": {
    "load_address": "$0801 (standard Commodore BASIC program start) — each file is its own standalone BASIC program. In HVSC these are wrapped as RSID files with loadAddress = 0 (reserved) and initAddress=0 (RSID C64 auto-boot convention); per the SID file format spec initAddress MUST be 0 for such files (source: HVSC SID_file_format.txt). NOTE: the RSID flags field at $7A was read as 0x0 (no C64 BASIC flag set) on all 4 files checked (M4_Yankee, Happy_Birthday, Moonlight_Sonata, Fuer_Elise) — contrary to an earlier assumption. This is still valid RSID; a player that supports RSID should treat initAddress=0 as auto-boot regardless of the BASIC flag.",
    "zero_page": "N/A — this is BASIC-interpreter-driven, not a machine-code play routine; the play logic runs inside the C64 BASIC/KERNAL ROM, which uses its own normal zero page. There is no dedicated play-routine ZP allocation to document.",
    "layout": "Confirmed from Butterfield's own published listing (Commodore Power/Play, Spring 1983, lines 110-140): three variables hold the three SID voice base addresses — L1=54272 ($D400), L2=54279 ($D407), L3=54286 ($D40E); H1/H2/H3 = L+1 (frequency high byte per voice); V1/V2/V3 = L+4 (voice control register per voice); master volume via POKE 54296 ($D418),15. Note data lives in inline BASIC DATA statements. This matches the Player-ID signature bytes exactly (see quirks)."
  },
  "entry": {
    "init": "N/A in the machine-code sense — a BASIC program is RUN, not called via an init vector. In HVSC these files are RSID with the C64 BASIC flag set and initAddress=0; the C64 ROM boots and auto-RUNs the embedded BASIC program (the song number to play is written to $030C, 0x00 = song 1). Source: HVSC SID_file_format.txt.",
    "play": "No separate play address — playback IS the BASIC interpreter loop. From the published Power/Play listing (lines 200-290): POKE the per-voice control registers, READ the next DATA note record, busy-wait on the jiffy clock for the note's duration, then loop back; DATA timing value 0 ends the tune."
  },
  "speed": "Jiffy-clock (TI) paced — roughly 60 Hz resolution — NOT a CIA/raster IRQ player. Published listing: '180 T=TI', '260 T=T+S', '270 IF T>TI GOTO 270' — the routine busy-waits on the KERNAL jiffy clock, and the first value (S) in each DATA record sets that note's duration in jiffies (source: Commodore Power/Play, Spring 1983).",

  "data_format": {
    "order_list": "N/A — no order list in the tracker sense; a single BASIC program with inline DATA statements.",
    "patterns": "Inline BASIC DATA statements. Demo-disk / Skiffle-Band variant (Power/Play, Spring 1983, lines 210-220): each DATA record = one timing value S followed by six bytes X1,Y1,X2,Y2,X3,Y3 (frequency high/low byte per voice); a record with S=0 terminates. The 'Happy Birthday' variant (COMPUTE! #53, Oct 1984) inserts a lyric string after the timing value, giving 8 fields per record ('READ S : READ S$ : READ X1,Y1,X2,Y2,X3,Y3'). A zero pitch value leaves that voice silent for the note.",
    "instruments": "No instrument table — per-voice ADSR and waveform are fixed POKEs in the listing header. Power/Play listing (lines 150-200): attack/decay + sustain/release written once per voice to V+1 / V+2, and the waveform (triangle 16 / sawtooth 32) written to the control register V; gate is toggled by making the control value odd (17/33) to start a note.",
    "wavetable": "N/A",
    "pulsetable": "N/A",
    "filtertable": "N/A observed — the published listing does not touch the SID filter registers ($D415-$D417) or the filter routing bits of $D418; it only writes voice registers and the volume nibble of $D418 (source: Commodore Power/Play, Spring 1983)."
  },
  "effects": {
    "encoding": "N/A — plain BASIC POKE sequence, no command/effect byte encoding.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SPECIFICALLY NOT the 'Basic_Program' tag (234 uncarded files, rank #1 in knowledge/COVERAGE.md) — that is a separate, generic catch-all raw tag for unidentified BASIC music code. 'Basic/Jim_Butterfield' (30 files, rank #14) is Player-ID's fingerprint for one particular, recognizable BASIC statement pattern published by Jim Butterfield. Do not conflate the two families or assume this card resolves the larger one.",
    "The Player-ID signature is literal tokenized-BASIC bytes, not machine code — confirmed from WilfredC64/player-id's config (`config/sidid.cfg`, GitHub): the 'Basic/Jim_Butterfield' entry is `4C 31 B2 35 34 32 37 32 3A 4C 32 B2 35 34 32 37 39 3A 4C 33 B2 35 34 32 38 36 00 && 31 B2 4C 31 AA 34 3A ?? 32 B2 4C 32 AA 34 3A ?? 33 B2 4C 33 AA 34 00` — tokenized ASCII for `L1=54272:L2=54279:L3=54286:` followed by `V1=L1+4:...V2=L2+4:...V3=L3+4` (the `??` wildcards the leading V). These two lines correspond EXACTLY to lines 110 and 130 of Butterfield's published 'Skiffle Band' listing (Commodore Power/Play, Spring 1983) — so the fingerprint pins down that specific published routine, not merely any BASIC music code.",
    "PRIMARY SOURCE FOUND (this re-research pass): the routine is Jim Butterfield's own published work. 'The Commodore 64 Skiffle Band' (Commodore Power/Play, Spring 1983, p.21, archived on archive.org) prints the complete BASIC listing — the base-address-per-voice variable setup, the jiffy-timed play loop, and the DATA-record format — and 'Commodore 64 Music: Happy Birthday' (COMPUTE! Issue 53, Oct 1984, p.177, atarimagazines.com) prints a lyric-displaying variant. The identical tunes (M1 MUSIK / M2 SYNTHESIZER / M3 DIXIE / M4 YANKEE / M5 GONG ...) shipped on Commodore's C64/1541 demo diskette (zimmers.net c64-demodiskette.readme; c64-wiki.de Demodiskette).",
    "COMPOSER CONCENTRATION IS THE OPPOSITE OF WHAT THE NAME SUGGESTS: only 4 of 30 files (13%) in this dataset are actually authored by Jim Butterfield himself (Happy_Birthday, Lincolnshire, M3_Dixie, M4_Yankee — data/composers/jim-butterfield.json). Wayne Pace alone accounts for 16/30 (53%) — he reused Butterfield's published listing pattern to arrange his own classical/pop tunes (Moonlight Sonata, Fuer Elise, Claire de Lune, etc.). The rest spread across R. Keays (3), Harry Metz (2), Markus Müller (2), Sonki (2), Dente Arturo (1). This is the signature of a widely-copied PUBLISHED BASIC LISTING (magazine type-in / demo-disk program), not a personal routine or an authored tool.",
    "The reuse spans four decades: Butterfield's own files date to 1982-1984, yet Dente Arturo's 'Arkadenoid_BASIC.sid' (composer profile 'active: 2024') and Sonki's two BASIC files ('active: 2024') carry the identical Player-ID signature — someone was still typing in or copy-pasting this exact 1983 BASIC pattern in 2024.",
    "HVSC STIL confirms the tune identities (data/hvsc/stil.json): M4_Yankee = 'Yankee Doodle', M3_Dixie = 'Dixie Land' (also noted 'Also used in the game \"21\"'), Lincolnshire = 'Lincolnshire Poacher', Happy_Birthday = 'Happy Birthday' with the note 'This tune takes 51 seconds to start' (BASIC read-through delay). 'M4 Yankee' is independently corroborated on YouTube as 'M4 Yankee - Jim Butterfield - (1982)'.",
    "No entry exists for this tag in the SIDId database (data/sidid.json byTag has no 'Butterfield'/'Basic/Jim' key; the nearest is an unrelated 'Basically_Music'), unlike most families already carded here — so no SIDId author/comment/reference citation was available; author/dates come instead from the published magazine listings, HVSC's cached composer profile, and CSDb SID entries."
  ],
  "sources": [
    "PRIMARY: Jim Butterfield, 'The Commodore 64 Skiffle Band', Commodore Power/Play Vol.2 No.1 (Spring 1983), p.21 — full BASIC listing (variable setup L1=54272/L2=54279/L3=54286, jiffy-timed play loop, DATA format). Archived: https://archive.org/details/commodore-power-play-04 (Commodore_Power-Play_1983_Issue_04_V2_N01_Spring)",
    "PRIMARY: Jim Butterfield, 'Commodore 64 Music: Happy Birthday', COMPUTE! Issue 53 (October 1984), p.177 — lyric-displaying variant, listing lines 100-290: https://www.atarimagazines.com/compute/issue53/079_1_Commodore_64_Music_Happy_Birthday.php",
    "Player-ID signature bytes (definitive for WHAT is matched): https://github.com/WilfredC64/player-id , config/sidid.cfg, entry 'Basic/Jim_Butterfield'",
    "Commodore C64/1541 demo diskette directory (M1 MUSIK / M2 SYNTHESIZER / M3 DIXIE / M4 YANKEE / M5 GONG / M6 BOMBE / M7 SCHUSS / M8 SOUND): http://www.zimmers.net/anonftp/pub/cbm/demodisks/c64/c64-demodiskette.readme ; German descriptions at https://www.c64-wiki.de/wiki/Demodiskette",
    "HVSC SID file format spec — RSID C64 BASIC flag, initAddress=0, song number at $030C: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/SID_file_format.txt",
    "Local dataset: 30 files across 7 composers (Jim Butterfield 4, Wayne Pace 16, R. Keays 3, Harry Metz 2, Markus Müller 2, Sonki 2, Dente Arturo 1) — knowledge/COVERAGE.md rank #14 and data/composers/*.json (per-file player tag 'Basic/Jim_Butterfield')",
    "HVSC STIL tune identities: data/hvsc/stil.json (Butterfield_Jim, Pace_Wayne, Keays_R, Metz_Harry folders)",
    "Jim Butterfield composer profile/dates (1936-02-14 to 2007-06-29, Canada, Commodore): data/composers/jim-butterfield.json ; HVSC Musicians.txt line 'Butterfield, Jim - CANADA'",
    "CSDb SID entries confirming author/year: M4 Yankee 'Jim Butterfield / 1982 Commodore' (csdb.dk/sid/?id=66); Happy Birthday '1984 Jim Butterfield' (id=43837); Lincolnshire '1984 Jim Butterfield' (id=424). Wayne Pace 'The Moonlight Sonata (1984)' release: csdb.dk/release/?id=147857",
    "YouTube corroboration 'M4 Yankee - Jim Butterfield - (1982)': https://www.youtube.com/watch?v=1To9WnBOMdQ",
    "Checked and NOT found: no entry for this tag in the SIDId database (data/sidid.json byTag; github.com/cadaver/sidid sidid.nfo)"
  ]
}
```

## Overview

`Basic/Jim_Butterfield` is a Player-ID signature for a specific, recognizable
Commodore BASIC V2 program pattern — not a tracker and not a machine-code
replay routine. It matches the literal tokenized-BASIC bytes of a three-voice
SID music technique (one variable per SID voice base address: `L1=54272`,
`L2=54279`, `L3=54286`) that Jim Butterfield, the Canadian Commodore
author/educator (1936-2007), published in **Commodore Power/Play** (Spring
1983, "The Commodore 64 Skiffle Band") and **COMPUTE!** (Oct 1984, "Happy
Birthday"), and which shipped as the M1-M8 tune programs on Commodore's own
C64/1541 demo diskette. Only 4 of the 30 files carrying this tag in the local
dataset are actually his own; the rest (led by Wayne Pace, 53%) are other
hobbyists reusing the same published BASIC pattern to arrange their own tunes,
across a span from 1982 to as recently as 2024. It is explicitly **not** the
much larger, generic `Basic_Program` catch-all tag (234 uncarded files) — see
the note in `quirks`.

## Quirks & gotchas

See the `quirks` array — load-bearing points: (1) this is a BASIC-token
Player-ID signature whose two signature lines map exactly onto lines 110 and
130 of Butterfield's own published listing; (2) the routine is a genuine
published magazine/demo-disk type-in, not a personal or authored tool; (3)
composer concentration runs opposite to the tag name — most matching files are
NOT by Jim Butterfield; (4) the pattern was still being reused 40 years later
(2024 files); (5) no SIDId database entry exists for this tag.

## Disassembly notes

Largely inapplicable — there is no machine-code play routine to disassemble.
What "internals" exist are BASIC statements, and they are now fully documented
from Butterfield's own **published listing** (Commodore Power/Play, Spring 1983;
COMPUTE! #53, Oct 1984): the base-address-per-voice variable setup (lines
110-140), the fixed per-voice ADSR/waveform POKEs (150-200), the jiffy-timed
play loop (200-290), and the DATA-record format. The `memory`, `speed`, and
`data_format` fields above are transcribed from those listings, not guessed. A
future pass could load one of the smaller HVSC files (e.g. `M4_Yankee_BASIC.sid`)
into a BASIC lister to confirm each file's line numbering matches the printed
listing byte-for-byte.

## Verification

**`status: in-progress`.** The standard trace-diff verification workflow (disassemble a real
`.sid` file, reassemble the machine-code play routine, trace both, diff the
register writes) **cannot be applied** to this player — there is no machine-code
play routine to disassemble. Each file is a standalone tokenized BASIC V2
program (RSID, `loadAddr=0` with embedded `$0801` in the payload's first 2 LE
bytes, `initAddress=0`, `playAddress=0`) that the C64 ROM's BASIC interpreter
executes; the SID register writes come from POKE statements interpreted at
runtime, not from a replay loop in the file itself.

**What this pass attempted (2026-07-24):**

1. **Tracer attempt**: `sidm2-sid-trace.exe` on `M4_Yankee_BASIC.sid` (RSID,
   Butterfield's own file, 1328 bytes).
   - With `init=0, play=0`: FAILED — "self-installing IRQ vector never resolved".
     The tracer cannot deliver autonomous interrupts (no VIC/CIA emulation), so
     init=0 (which requires the C64 ROM to boot) is untraceable.
   - With `init=$0801, play=$0801` (pointing at the tokenized BASIC bytes as if
     they were machine code): produced 0 SID writes over 30 frames. The tracer's
     CPU interpreted tokenized BASIC opcodes as 6502 instructions (the BASIC
     tokens were "executed" but performed nonsense operations, never reaching a
     POKE to $D400+).

2. **Player-ID signature verification**: Extracted tokenized BASIC from 4
   independent HVSC RSID files and confirmed the Player-ID signature bytes match
   exactly in all of them:
   - `M4_Yankee_BASIC.sid` (Butterfield, 1328 bytes): line 110 (`L1=54272...`)
     at $82B, line 130 (`V1=L1+4...`) at $866.
   - `Happy_Birthday_BASIC.sid` (Butterfield, 8335 bytes): signature at $2301.
   - `Moonlight_Sonata_BASIC.sid` (Wayne Pace, 21756 bytes): signature at $805.
   - `Fuer_Elise_BASIC.sid` (Wayne Pace, 19377 bytes): signature at $877.
   All 4 files contain the exact hex sequence matching the Player-ID config's
   `sidid.cfg` entry for `Basic/Jim_Butterfield`.

3. **Detokenization (petcat)**: Ran `petcat -2` on M4_Yankee's tokenized BASIC
   payload. The output matches Butterfield's published "Skiffle Band" listing
   (Commodore Power/Play, Spring 1983, p.21) line-for-line: lines 100-290 with
   the expected `L1=54272:L2=54279:L3=54286` setup, per-voice `V1/H1` variable
   derivation, fixed ADSR/waveform POKEs, and jiffy-clock (`T=TI`) timed play
   loop.

4. **RSID flags field**: Re-read at offset $7A. Contrary to an earlier
   assumption, the C64 BASIC flag (bit 4) is NOT set — flags = 0x0 on all 4
   files. This is still valid RSID; initAddress=0 alone signals auto-boot.

**Conclusion**: The card's identification of this as a published BASIC V2
program pattern (not a machine-code player) is correct and confirmed by
cross-file signature verification + detokenization. The upgrade from `stub` to
`in-progress` remains justified by the primary published sources and by the
now-verified Player-ID signature. A full register-write trace of the BASIC
program's SID output would require a complete C64 emulator with SID dump
support (e.g., VICE x64sc with `-siddump` or RetroDebugger) and would confirm
"the file produces SID output" but would not be a "reconstruction-vs-original"
diff — there is no separate machine-code player to reconstruct. For this card,
`status: verified` requires rethinking what "verified" means for a
BASIC-program-based player that has no replay routine to disassemble.

## Sources

See the `sources` array — primary confirmation is now Butterfield's own
published BASIC listings (Commodore Power/Play Spring 1983 via archive.org;
COMPUTE! #53 via atarimagazines.com), cross-checked against the Player-ID
signature source, the HVSC SID file-format spec, HVSC STIL/Musicians metadata,
and CSDb SID entries.
