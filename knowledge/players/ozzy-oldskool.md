# Ozzy Oldskool V1 (Ossi Aarnio)

```json
{
  "id": "ozzy-oldskool",
  "name": "Ozzy Oldskool V1 (Ossi Aarnio)",
  "aliases": ["Ozzy_Oldschool_V1"],
  "authors": ["Ossi Aarnio (Ozzy Oldskool)"],
  "released": "2002 (Upstars, 'Risperdal Dreams')",
  "status": "verified",
  "platform": "Finnish coder-musician Ossi Aarnio's ('Ozzy Oldskool', founder of group Upstars) own playroutine — confirmed load $A000, the FIRST of two structurally distinct versions in his output (a separate 'Ozzy_Oldschool_V2' tag, uncarded, uses load $1000 and was later shared with at least one other composer). V1 is exclusively self-used, all 7 files from a single 2002 release. Player-ID-fingerprinted across 7 files, all his own.",
  "csdb_release": 6496,

  "memory": { "load_address": "NOT a single fixed address (an earlier draft of this card wrongly said '$A000 across all 7 files' — corrected 2026-07-30 by reading the PSID headers directly). The 7 V1 files use FOUR different load addresses: $A000 (end, intro, part_2, part_4), $A600 (part_1), $AE00 (part_3), $8700 (part_5). The player is position-relocatable at assembly time; every internal offset below is quoted relative to the file's own load address.", "zero_page": "Only $E0-$E3 (four bytes, two 16-bit pointers). $E0/$E1 = current voice's sequence-stream pointer / arithmetic accumulator; $E2/$E3 = instrument-record pointer (also reused for the global filter-sequence pointer). Nothing else in ZP is touched — no $02-$FF scratch, no stack tricks.", "layout": "Fixed 3072-byte ($C00) player block followed by song data. load+$0000-$0002 = JMP init; load+$0003 = play entry; load+$0015 = init body; load+$00BB = per-voice instrument-pointer reset; load+$00D2 = per-voice update (called 3x from play with X=$00/$07/$0E); load+$0125 = sequence-stream fetch/command decode; load+$0238 = orderlist step; load+$0931 = global filter engine (only writer of $D416/$D417); load+$09F1-load+$0AE5 = note frequency table, 16-bit little-endian, interleaved lo/hi, indexed by (note*2) via 'lda tbl,Y / lda tbl+1,Y'; load+$0AC9 = a small addend table used by the $E0/$E1 16-bit accumulator (slide/portamento step); load+$0AE6-load+$0BFF = working storage, 256 bytes of it cleared by init's 'sta load+$0AE6,X' loop; load+$0C00 = song data. Verified: bytes load+$0000-load+$0AE5 are byte-identical across the four $A000 files apart from 8 self-modified operand bytes (load+$0145, +$0150, +$036F, +$094A, +$095F, +$09CC, +$09D1, +$09E7), all of which init overwrites from the song header." },
  "entry": { "init": "load+$0000 (a JMP to load+$0015). Init zeroes $D400-$D418, sets $D418 = $1F (volume 15 + lowpass), clears 256 bytes of working storage, seeds the three voices' orderlist indices to 0/3/6, copies the song header's two pointers into self-modified operands, then runs a 4-call setup chain per voice for X=$00/$07/$0E.", "play": "load+$0003. Body is exactly: 'ldx #$00 / jsr voiceupd / ldx #$07 / jsr voiceupd / ldx #$0E / jsr voiceupd / jmp filterengine'. X doubles as both the SID voice register offset ($D400,X) and the stride into every per-voice state table, so all per-voice tables are stride 7." },
  "speed": "Single-speed 50 Hz VBI. PSID speed field = 0 on all 7 files; the disassembly contains no $DC0x/$DD0x CIA writes and no raster/$D011/$D012 access at all — the player is a pure 'call me once per frame' routine with no timer setup of its own.",
  "data_format": { "order_list": "Interleaved 3-wide: one byte per voice per row, so a row is 3 bytes and each voice steps its own index by +3. Init seeds voice 0/1/2 indices to 0/3/6 (per-voice index lives at load+$0BA4 stride 7). Base pointer is the song header word at load+$0C00/$0C01. Marker byte $82 = end of orderlist: the player reloads the base pointer from load+$0C00/$0C01 and re-reads at the same index, i.e. loop-to-start rather than a stored loop point.", "patterns": "Per-voice byte streams reached indirectly via $E0/$E1, read at offset Y=2 upward. A fetched byte with bit 7 clear is a note/rest; bytes >= $80 are commands (see effects.commands).", "instruments": "A lo/hi pointer TABLE whose base is the song header word at load+$0C02/$0C03; command $81 takes the following byte, doubles it (asl/tay) and indexes that table. The pointed instrument record is read at offsets +2..+6: [+2] -> per-voice state load+$0B26, [+3] -> pulse width HI ($D403,X), [+4] -> pulse width LO ($D402,X), [+5] -> load+$0B3A, [+6] -> load+$0B3C and load+$0B3B. Note the on-disk pristine operand bytes at load+$0145/$0146 and load+$0150/$0151 are stale leftovers from the authoring tool and are unconditionally overwritten by init — do not read them as the real table address.", "wavetable": "Default per-voice pointer is the fixed address load+$0C09, stored at init into load+$0B64/$0B65 (stride 7) and load+$0BCD/$0BCE. Not fully decoded.", "pulsetable": "Not a separate table on this player — pulse width comes straight from instrument record bytes [+3]/[+4] into $D403/$D402 at note start, then is modulated by the per-voice update routine.", "filtertable": "A single GLOBAL filter sequence (not per-voice), run by the routine at load+$0931 via the $E2/$E3 pointer held in load+$0BE8/$0BE9. Records are 5 bytes, read sequentially: [0] -> cutoff-hi target, [1] -> compare/limit value, [2] -> step (signed; sign-tested with 'bpl'), [3]/[4] -> 16-bit duration counter (load+$0BE7/$0BE6, decremented as a 16-bit pair). The routine's only hardware writes are $D416 (cutoff hi) and $D417 (resonance/routing, initialised to $F1). $D415 (cutoff lo) is written only once, as a side effect of init's blanket 'sta $D400,X' zeroing loop over X=$18..$00, and never again — the filter sweeps on the high byte alone." },
  "effects": { "encoding": "In-stream command bytes with bit 7 set, decoded in the sequence fetch at load+$0125 and the orderlist step at load+$0238. Only two command values are actually exercised by the 7 shipped files; a third code path exists at load+$00D2 but is dead in these builds (an 'lda #$FF / cmp #$FF / beq' guard whose #$FF is a self-modified enable flag, permanently on, skipping a 12-byte transpose/detune block).", "commands": { "$81": "Set instrument: next stream byte is the instrument index; doubled and used to index the instrument pointer table at load+$0C02/$0C03. Immediately programs $D402/$D403 (pulse width) and seeds four per-voice state slots.", "$82": "End of orderlist (seen in the orderlist stream, not the note stream): reload the orderlist base pointer from load+$0C00/$0C01 and re-read — an unconditional loop back to the start of the song.", "<$80": "Ordinary note/rest value, consumed by the per-voice update routine." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY TRIPLE-CONFIRMED, no cross-player hallucination risk: HVSC Musicians.txt ('Ozzy Oldskool (Aarnio, Ossi) / Upstars - FINLAND'), CSDb scener id=4568 (real name Ossi Aarnio, alt handle 'Ozz', country Finland), and this project's own local DeepSID database dump (scener id=4568) all independently agree. CSDb functions: Coder, Fullscreen Graphician, Graphician, Logo Graphician, Musician, Organizer — a confirmed coder, not purely a musician, supporting genuine self-authorship of this routine. Founder of the Finnish group Upstars. NOT to be confused with the unrelated 'Ozzy Osbourne' string appearing elsewhere in this project's tag data.",
    "TWO STRUCTURALLY DISTINCT VERSIONS EXIST, confirmed directly from this project's own local DeepSID dump (not just SIDId): 'Ozzy_Oldschool_V1' (this card, 7 files, load $A000, all from the single 2002 release 'Risperdal Dreams', credited 'Ozzy Oldskool & yAmmer' — one track, 'part_3', instead credits '& Nothappy') versus a sibling tag 'Ozzy_Oldschool_V2' (4 files, load $1000 — a genuinely different memory layout, not just a version bump) spanning 2004-2012 releases, NOW SEPARATELY CARDED as [[ozzy-oldskool-v2]]. No V3 or higher tag exists in the local data.",
    "V2 (now its own card, [[ozzy-oldskool-v2]]) shows GENUINE CROSS-COMPOSER REUSE, unlike V1: 3 of its 4 files are by Aarnio himself, but the 4th ('Vertical Smiley', 2005, an Asymptote party demo intro) is credited to a DIFFERENT composer, Mikko Tanni ('Mordicus') — with CSDb separately confirming Ozzy Oldskool himself has a 'Code' credit on that same 2005 release, consistent with him having coded the player that Mordicus then used for his own tune. Per this project's own inferred-player heuristic (spread across composers = more likely a genuine reusable tool vs. a personal routine), V2 is the more 'real tool' of the two versions — V1 (this card) remained exclusively self-used.",
    "'RISPERDAL DREAMS' is a demo title referencing the real pharmaceutical Risperdal/risperidone (an antipsychotic medication) — noted here neutrally, without further interpretation.",
    "No source found describing the player routine's internals (memory map, effect commands, ZP usage) — nothing beyond tag/author/CSDb-release metadata exists anywhere searched.",
    "LOAD ADDRESS IS NOT FIXED — an earlier draft of this card claimed '$A000, consistent across all 7 files' and that is simply wrong; reading the 7 PSID headers directly (2026-07-30) gives FOUR distinct load addresses: $A000 (end, intro, part_2, part_4), $A600 (part_1), $AE00 (part_3), $8700 (part_5), with init always == load and play always == load+3. The DeepSID-dump-derived '$A000' figure evidently reflects only the majority. The player itself is fully relocatable at assembly time (all internal references are absolute and re-emitted per build), which is why the same 7 files share a byte-identical engine when compared at a common base but only ~81% when compared raw across different bases.",
    "SELF-MODIFYING BUT TRIVIALLY SO: exactly 8 bytes in the fixed engine region are self-modified operands (load+$0145, +$0150, +$036F, +$094A, +$095F, +$09CC, +$09D1, +$09E7). All 8 are unconditionally written by init or by the filter engine before any read, so none of them is load-bearing at cold start — this player needed ZERO byte patching to reconstruct (see Verification). The on-disk values of load+$0145/$0146 and load+$0150/$0151 are stale authoring-tool leftovers pointing at a wrong instrument-table address; init overwrites them from the song header at load+$0C02/$0C03. Anyone reading the raw file to recover the instrument-table pointer must read the header word, not the instruction operand.",
    "NO ZERO PAGE PRESSURE AT ALL: the entire player uses just $E0-$E3. It also touches no CIA, no VIC, no IRQ vectors and no memory outside its own load..load+len block — an unusually well-behaved, drop-in in-game routine for a 2002 demo tune, and a large part of why it reconstructs cleanly.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Kris Hatlelid, Harri Palviainen, Ere Lievonen — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Ozzy Oldskool (Aarnio, Ossi) / Upstars - FINLAND'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Ossi Aarnio / Ozzy Oldskool (id=4568, functions incl. Coder, Upstars founder): https://csdb.dk/scener/?id=4568",
    "CSDb release 6496 — Risperdal Dreams (2002, Upstars, Code+Music+Graphics): https://csdb.dk/release/?id=6496",
    "This project's local DeepSID database dump (deepsid_dl/DeepSID_Database/hvsc_files.sql — authoritative source for the V1/V2 load-address split, verbatim rows)",
    "Local dataset: 7 files tagged Ozzy_Oldschool_V1, 1 composer (see knowledge/COVERAGE.md); a separate, uncarded 'Ozzy_Oldschool_V2' tag (4 files) exists in the same folder"
  ]
}
```

## Overview

The `Ozzy_Oldschool_V1` tag is Finnish coder-musician Ossi Aarnio's
('Ozzy Oldskool', Upstars founder) own playroutine — the first of two
structurally distinct versions in his output, this one used exclusively
by himself across a single 2002 release. Player-ID-fingerprinted across 7
files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **triple-confirmed
identity** across three independent sources; **two genuinely distinct
versions** (different load addresses, not just a version bump), confirmed
directly from this project's own local database; and V2's **real
cross-composer reuse** (a different musician used it for one tune) versus
V1's exclusive self-use — a clean signal for which version is the 'more
real tool'.

## Disassembly notes

No published source exists (not in the realdmx RE repo, no STIL note) —
everything in this card's `memory`/`entry`/`data_format`/`effects` blocks
is derived from an original disassembly produced 2026-07-30 (see
Verification). The engine is small and conventional: a 3072-byte
relocatable block, three voices driven by a single routine called with
X = $00/$07/$0E (X serving as both the `$D400,X` voice offset and the
stride-7 index into every per-voice state table), byte-stream sequences
read through a zero-page indirect pointer, a 3-wide interleaved orderlist,
and one *global* filter sequencer that only ever moves the cutoff high
byte. A card for the sibling `Ozzy_Oldschool_V2` tag now exists at
[[ozzy-oldskool-v2]].

## Verification

**Reconstructed and register-write matched (2026-07-30) — `status: verified`.**

Method (per this project's standard pipeline): `SIDdecompiler 0.8` with
`-z -d -c -r -v2`, relocating each file to its own `-v2` map `Start:`
address (which equalled its PSID load address on all 7 files — no
gotcha-40 mismatch), reassembled with `64tass -a --cbm-prg`, byte-diffed
against the PSID payload, then traced with `sidm2-sid-trace.exe` for 50
frames at the header's own init/play addresses.

| file | load / init / play | reassembled | byte-diff | writes (orig = recon) |
|---|---|---|---|---|
| Risperdal_Dreams_end | $a000 / $a000 / $a003 | 4272 of 4288 | **100.0000%**, 0 diffs | 133 / 133 |
| Risperdal_Dreams_intro | $a000 / $a000 / $a003 | 3943 of 3952 | **100.0000%**, 0 diffs | 342 / 342 |
| Risperdal_Dreams_part_1 | $a600 / $a600 / $a603 | 4576 of 4608 | **100.0000%**, 0 diffs | 225 / 225 |
| Risperdal_Dreams_part_2 | $a000 / $a000 / $a003 | 4226 of 4256 | **100.0000%**, 0 diffs | 355 / 355 |
| Risperdal_Dreams_part_3 | $ae00 / $ae00 / $ae03 | 4294 of 4304 | **100.0000%**, 0 diffs | 396 / 396 |
| Risperdal_Dreams_part_4 | $a000 / $a000 / $a003 | 4256 of 4288 | **100.0000%**, 0 diffs | 431 / 431 |
| Risperdal_Dreams_part_5 | $8700 / $8700 / $8703 | 4421 of 4448 | **100.0000%**, 0 diffs | 142 / 142 |

All 7 `Ozzy_Oldschool_V1` files in HVSC: **100.0000% byte-exact** and
**0 register-write divergences out of 2024 writes / 350 traced frames**.
No byte patching was needed on any file — `SIDdecompiler`'s `-r` flag
(lesson 63) removed the drifted-self-modified-byte problem outright, and
this player's 8 self-modified operands are all init-overwritten anyway.
The 133 writes / 50 frames figure from the earlier 2026-07-14 pass is
reproduced exactly.

**Honest scope / what this does and does not prove.** Because the
reassembly is byte-identical to the original payload, the trace match is
*guaranteed by construction* and on its own proves nothing (the
lesson-65 tautology). The load-bearing claim is the byte-exact
round-trip itself: `SIDdecompiler` decoded 911 instruction lines
(~2186 instruction bytes, ~51% of the compared payload) and those
re-assembled to the exact original bytes, so the instruction decode and
every operand/label resolution in the engine are confirmed correct. The
remaining ~2126 bytes are `.byte` pass-through, and they are legitimately
data, not undecoded code: song data (load+$0C00 onward, 1216 bytes on
`end`), the note frequency table (load+$09F1-$0AE5, 245 bytes) and
working storage (load+$0AE6-$0BFF, 282 bytes) account for most of it,
leaving roughly 360 bytes of genuinely unreached code inside the engine
region (dead branches such as the transpose block guarded at load+$00D2).
So ~86% of the engine region is decoded instructions, not ~51%.

**Two small residuals, both benign and cited exactly.** (1) The `-v2`
map's `End:` falls a few bytes short of each file's real end, so 9-32
trailing bytes per file were never emitted and are outside the compared
range (`end.sid`: `$b0b0-$b0bf`, 16 bytes, content is a repeating
`60 00 82` pattern, whose 3-byte period and `$82` byte are consistent
with orderlist tail padding — clearly not code, and never executed in
any trace). (2) `$D415` is written only by init's blanket `$D400,X` clear
loop, never during playback, so the filter's low byte is fixed at 0 — a
property of the player, not a reconstruction gap.

**Next lead if extending:** the wavetable format (default pointer
load+$0C09) and the per-voice update routine's ADSR/gate handling at
load+$00D2-$0237 are the least-decoded parts of the format above; and the
sibling [[ozzy-oldskool-v2]] tag ($1000 builds: `Bulliting.sid`,
`No_Direction.sid`, `Starglide.sid` in the same HVSC folder) should be
byte-diffed against this V1 engine at a common base to establish whether
V2 is a rewrite or an extension — the same recipe used here applies
unchanged.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, and this project's
local DeepSID database dump.
