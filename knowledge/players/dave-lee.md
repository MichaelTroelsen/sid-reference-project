# Dave Lee (Virgin Games "Falcon" driver)

```json
{
  "id": "dave-lee",
  "name": "Dave Lee (Virgin Games \"Falcon\" driver)",
  "aliases": ["Dave_Lee"],
  "authors": ["Dave Lee"],
  "released": "1984-1987 (Virgin Games)",
  "status": "verified",
  "platform": "British composer Dave Lee's playroutine, used across Virgin Games's linked 'Falcon' shooter lineage. Player-ID-fingerprinted across 7 files: 4 by Dave Lee himself, 2 by 'Steve Lee' (the team's coder — no confirmed family relationship to Dave, despite the shared surname), 1 by Martin Wheeler (a fellow Virgin Games composer on the same lineage, plausibly reusing this same driver — see quirks).",
  "csdb_release": null,

  "memory": { "load_address": "Fully relocatable at assembly time — every tagged file uses a different base. Verified builds: Erebus load $9fd (init $9fd, play $a00, 1275 bytes, $9fd-$ef7); Falcon_Patrol_II load $d00 (init $fc6, play $fd8, 746 bytes); Hideous_Bill load $400 (init $411, play $400, 1242 bytes, 3 subtunes); Hunter_Patrol_hidden_tune load $1046 (init $1046, play $1170, 1025 bytes). Star_Lifter (Steve Lee) and Falcon-The_Renegade_Lord (Martin Wheeler) instead load high ($4000 / $7630) and block-copy the driver down to $0a10 at init, so the running driver sits at Erebus's exact addresses.", "zero_page": "One contiguous ~17-byte block plus 2-4 pointer bytes, relocatable per title. Erebus uses $09-$19 + $fa-$fd; Falcon_Patrol_II $a4-$b1 + $f7-$fe; Hideous_Bill $56-$68 + $70; Hunter_Patrol $02-$12. Erebus map: z09/z0a = 16-bit song-stream pointer; z0b = byte index into stream; z0c/z0d/z0e = per-voice note countdown (voices 1-3); z0f/z10/z11 = per-voice control/waveform byte with gate bit forced on (`ora #$01`); z12 = current voice index 0-2; z13/z14 = decoded frequency hi/lo scratch; z15/z16 = the one-note-lookahead stream byte pair; z17 = low byte of the SID voice pointer (7*voice), z18 = $d4 constant high byte, so `sta (z17),Y` reaches $d400+7*voice+Y; z19 = restart flag. zfa/zfb + zfc/zfd are the init-only copy-loop dest/source pointers.", "layout": "Erebus: $9fd-$a2f entry + per-frame SID trim; $a30-$a7f (re)init; $a80-$b24 the note engine (the whole driver core); $b25-$b3e note-frequency table; $b3f-$b42 duration table; $b43-$b9d init copy loop; $b9e-$ba9 copy-descriptor table; $baa-$eda song note stream (821 bytes, copied to $3c00); $edf-$ef7 a 25-byte $d400-$d418 register snapshot (copied to $8330). $3c00 and $8330 are fixed absolute RAM workspace OUTSIDE the .sid payload — created by init's own copy loop, so they legitimately do not byte-diff. Star_Lifter uses the identical $3c00/$8330 workspace addresses." },
  "entry": { "init": "Erebus $9fd = `jmp` to the copy-loop init at $b43, which walks a 2-entry descriptor table (source lo/hi, dest lo/hi, remainder, page count) and block-copies the song stream to $3c00 and the SID register snapshot to $8330, then sets the restart flag. Hideous_Bill's init instead takes the subtune number in A, stores it, and indexes a per-subtune 8-byte descriptor table at $482 (`asl asl asl / tax`) — that is the only multi-subtune build of the four.", "play": "Erebus $a00: if the restart flag (z19) is set, re-run the soft-init at $a30 (which writes the 25-byte snapshot to $d400-$d418 via `lda $8330,X / sta $d400,X`, X=$18..0, and reloads the stream pointer); then `jsr $a10` TWICE per PSID frame. $a10 = one engine tick: call the note engine at $a80, then the per-frame SID trim. Hideous_Bill has the same double `jsr` at its play entry. Hunter_Patrol calls the engine once. Falcon_Patrol_II's PSID play ($fd8) is a small wrapper past the driver proper that calls the engine once per frame plus a second time every other frame via a self-modified counter at $fc5 (~1.5 ticks/frame); the driver's own native double-call sequence (`jsr $f86 / jsr $f86`) sits unreferenced at $f91." },
  "speed": "1x PSID play call, but the engine tick rate is doubled INSIDE play (`jsr engine / jsr engine`) on Erebus and Hideous_Bill, single on Hunter_Patrol, and ~1.5x on Falcon_Patrol_II via a self-modified frame counter. Note durations are therefore in engine ticks, not frames.",
  "data_format": { "order_list": "None — there is no order list or pattern layer. A single flat note stream is shared by all three voices: whichever voice's countdown expires next consumes the next 2-byte event from the one stream pointer (z09/z0a + index z0b). $ff terminates and sets the restart flag, which makes the next play call re-init and loop the tune.", "patterns": "N/A (flat stream, see order_list). Erebus's stream is 821 bytes = ~410 events.", "instruments": "None. There is no instrument/ADSR layer at all: the 25-byte $d400-$d418 snapshot copied at init sets ADSR, pulse width and filter once, and the per-voice control byte (z0f/z10/z11, taken from the snapshot's own $d404/$d40b/$d412 slots with `ora #$01`) is the only waveform source for the whole tune. A voice's timbre never changes after init.", "wavetable": "None.", "pulsetable": "None — but Erebus drives voice 1 and voice 2 pulse-width HIGH ($d403/$d40a) directly from that voice's note countdown shifted right 3 (`lda z0c / lsr lsr lsr / sta $d403`), giving a free pulse sweep locked to note length. Voice 3 is not swept.", "filtertable": "None. Erebus's only per-frame filter action is `lda $d41c / sta $d416` — feeding SID's ENV3 (voice 3 envelope readback) straight into filter cutoff high, i.e. an envelope-follower cutoff modulation. This idiom is present in Erebus only, not in the other three verified files." },
  "effects": { "encoding": "2 bytes per event, decoded one note ahead of use. Byte 0: low nibble = index into the 13-entry hi/lo frequency table (entry 0 = rest/$0000; entries 1-9 ascend $010c..$01a9; entries 10-12 hold the three LOWEST semitones $00e1/$00ee/$00fd — one chromatic octave stored rotated by three). Byte 0's high nibble is masked off (`and #$0f`) and unused by the driver. Byte 1 bits 0-2 = octave: max(0, (v&7)-1) left-shifts of the 16-bit frequency. Byte 1 bits 3-7 = a ONE-HOT duration selector: the driver shifts right 3 then counts to the lowest set bit and indexes the duration table ($80,$40,$20,$10 frames on the three Dave Lee 4-entry builds; Hunter_Patrol adds a 5th entry $08). Gate-off is automatic: when a voice's countdown reaches a fixed threshold the driver rewrites the control register with the gate bit cleared (`and #$fe`, Y=4) — threshold $02 on Erebus, $10 on Hunter_Patrol.", "commands": { "$ff (byte 0)": "End of stream — increments the restart flag, causing the next play call to re-init and loop.", "byte0 low nibble $0": "Rest (frequency $0000), duration still applies." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DRIVER REUSE ACROSS ALL THREE COMPOSERS — CONFIRMED BY DISASSEMBLY (2026-07-30), closing the card's previously-hypothetical claim. A 5-pattern raw opcode signature taken from the verified Erebus disassembly (gate-off `29 fe a0 04 91`, note decode `29 0f 0a aa`, octave shift `29 07 a8 88 30`, one-hot duration search `4a 4a 4a a2 ff e8 4a 90`, duration table `80 40 20 10`) hits in ALL SEVEN Dave_Lee-tagged files, at byte-for-byte IDENTICAL relative offsets (+$19, +$4f, +$11, +$83 from the gate-off anchor) — including Steve Lee's Star_Lifter and Shogun and Martin Wheeler's Falcon-The_Renegade_Lord. The same scan finds ZERO hits in Steve Lee's two untagged files (Falcon_Patrol.sid, Beirut_84.sid), so the signature is specific, not generic 6502.",
    "STRENGTH OF THE REUSE VARIES BY FILE, and this is measurable rather than assumed. Star_Lifter (Steve Lee) block-copies its driver to $0a10 and is 306/307 = 99.67% byte-identical to Erebus's driver core over $0a10-$0b42 — the same BUILD, sharing even the fixed $3c00 song-data and $8330 SID-snapshot workspace addresses. Falcon-The_Renegade_Lord (Martin Wheeler) uses the same $0a10 copy-down convention and the same instruction sequence at the same relative offsets, but only ~68% of the operand bytes match — the same SOURCE assembled with different symbol values (different ZP base, different table addresses), not the same binary.",
    "NO INSTRUMENT LAYER AT ALL — the single most distinctive design fact. A 25-byte snapshot of $d400-$d418 is copied verbatim at init and that is the entire sound design: ADSR, pulse width, filter and waveform are set once and never changed for the rest of the tune. All three voices then pull 2-byte note events from ONE shared flat stream in the order their countdowns expire (no order list, no patterns, no per-voice sequence). Erebus's only per-frame timbral movement is a pulse sweep on voices 1-2 driven by the note countdown and an ENV3->cutoff envelope-follower (`lda $d41c / sta $d416`).",
    "PUBLISHER CORRECTION: Erebus (the traced file) is confirmed 1986, VIRGIN GAMES — every source checked (Lemon64, general web search) consistently gives Virgin Games, NOT 'Grandslam/Martech' (a wrong assumption baked into the initial research brief, caught and corrected here; possibly a mix-up with a different game or an unfound later budget re-release — flagged as unresolved rather than asserted).",
    "THE VIRGIN GAMES 'FALCON' TEAM, CONFIRMED across a linked run of mid-1980s titles, same coder (Steve Lee) throughout but different composers per title: Hideous Bill & the Gi-Gants (1983, Steve Lee coder), Falcon Patrol II (1984, Steve Lee coder/designer, Dave Lee music), Erebus (1986, Steve Lee coder, Martin Wheeler graphics, Dave Lee music), Falcon: The Renegade Lord (1987, Steve Lee coder, Martin Wheeler MUSIC this time, not Dave Lee).",
    "PLAUSIBLE EXPLANATION FOR THE MARTIN WHEELER OUTLIER FILE: Falcon: The Renegade Lord and Falcon Patrol II are both entries in the same Virgin 'Falcon' shooter lineage, same coder both times, but the composer changed from Dave Lee to Martin Wheeler between the two. This plausibly explains why Wheeler's Falcon-The_Renegade_Lord file carries the 'Dave_Lee' player tag: it likely reuses the SAME music-driver/routine established on the earlier Falcon-series titles, rather than being a naming coincidence — a real, sourced continuity across a change in composer, though not independently confirmed via disassembly.",
    "STEVE LEE, CONFIRMED CODER+MUSICIAN (CSDb scener id=17214, dual role, UK): coded the whole 'Falcon' lineage and also composed on his own titles (Air Raid 1985, Beirut '84 1983, Hideous Bill 1983) — a genuinely separate figure from Dave Lee, not a shared identity.",
    "NO EVIDENCE OF A FAMILY RELATIONSHIP between Dave Lee and Steve Lee despite the shared surname — explicitly checked and found NOTHING supporting or refuting this; do not assert 'possibly related' without a citation. Treated here as coincidental surname sharing unless proven otherwise.",
    "NO CSDb SCENER PAGE located for either Dave Lee or Martin Wheeler (CSDb's coverage skews toward the demoscene, not 1980s commercial-only composers) — consistent with a thin footprint for both, not a research gap.",
    "Not confirmed in SIDId (no entry for this tag — so no independent confirmation of driver authorship beyond the tag itself). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare entries for Lee, Dave / Lee, Steve / Wheeler, Martin): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Falcon Patrol II (Steve Lee coder/designer, Dave Lee music): https://www.lemon64.com/game/falcon-patrol-2",
    "Wikipedia — Falcon Patrol II (corroborates Steve Lee designer/coder, Virgin Games): https://en.wikipedia.org/wiki/Falcon_Patrol_II",
    "Lemon64 — Erebus (Steve Lee coder, Martin Wheeler graphics, Dave Lee music, Virgin Games 1986): https://www.lemon64.com/game/erebus",
    "Lemon64 — Falcon: The Renegade Lord (Steve Lee coder, Martin Wheeler music, Virgin Games/ItalVideo 1987): https://www.lemon64.com/game/falcon-the-renegade-lord",
    "CSDb scener — Steve Lee (id=17214, Coder+Musician, UK): https://csdb.dk/scener/?id=17214",
    "computinghistory.org.uk — Hideous Bill & the Gi-Gants (1983, Steve Lee coder): https://www.computinghistory.org.uk/cgi/archive.pl?type=Games&author=Steve+Lee,+Dave+Lee",
    "Local dataset: 7 files tagged Dave_Lee, 3 composers (see knowledge/COVERAGE.md)",
    "First-party disassembly (2026-07-30) of HVSC MUSICIANS/L/Lee_Dave/{Erebus,Falcon_Patrol_II,Hideous_Bill_and_The_Gi-Gants,Hunter_Patrol_hidden_tune}.sid via SIDdecompiler 0.8 + 64tass 1.60 + sidm2-sid-trace — all four 100.0000% byte-exact and register-write-exact (see Verification)"
  ]
}
```

## Overview

The `Dave_Lee` tag is British composer Dave Lee's playroutine, used across
Virgin Games's linked 'Falcon' shooter lineage in the mid-1980s. Player-
ID-fingerprinted across 7 files, split between Dave Lee, his frequent
coder collaborator Steve Lee (no confirmed relation despite the shared
surname), and fellow composer Martin Wheeler, who plausibly inherited the
same driver on a later title in the same series.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **driver reuse across all
three composers, now confirmed by disassembly** (a 5-pattern opcode
signature hits all 7 tagged files at identical relative offsets, and
Steve Lee's Star_Lifter is 99.67% byte-identical to Erebus's driver core);
the **complete absence of an instrument layer** (one 25-byte `$d400-$d418`
snapshot copied at init *is* the sound design); a **corrected publisher
attribution** for Erebus (Virgin Games, not the initially assumed
Grandslam/Martech); the **Virgin 'Falcon' team lineage**, confirmed across
four linked titles with a consistent coder but changing composers; and an
explicitly **unconfirmed family-relationship question** between the two
Lees, left open rather than assumed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Everything in
the `memory` / `entry` / `data_format` / `effects` blocks above is
first-party, derived from an original disassembly of the four
`Lee_Dave/*.sid` files done for this card (2026-07-30) — see
Verification.

The driver is small and unusually flat: ~380 bytes of code in Erebus, of
which the entire note engine is one 165-byte routine (`$a80-$b24`). There
is no instrument/pattern/order abstraction to reverse — the only tables
are 13 frequency pairs, 4 durations, and a 2-entry copy descriptor.

## Verification

**Reconstructed byte-exact and register-write-exact (2026-07-30) —
`status: verified`.**

Method: `SIDdecompiler.exe <file> -o<n>.asm -a<decimal Start> -z -d -c -r
-v2`, reassembled with `64tass -a --cbm-prg`, byte-diffed against the PSID
payload, then traced with `sidm2-sid-trace.exe` (50 frames) against the
original rebuilt as a `.prg` (per the PSID header's own load address).
The `-r` flag was decisive: every file came back byte-exact on the FIRST
attempt with zero hand-patching, including Falcon_Patrol_II's
self-modified frame counter at `$fc5`.

| file | load / init / play | window | byte-diff | trace |
|---|---|---|---|---|
| Erebus | `$9fd` / `$9fd` / `$a00` | `$9fd-$ef7` (1275 B) | **100.0000%** (0 diffs) | 94 writes / 50 frames, **identical** |
| Falcon_Patrol_II | `$d00` / `$fc6` / `$fd8` | `$d00-$fe9` (746 B) | **100.0000%** (0 diffs) | 33 writes, **identical** |
| Hideous_Bill | `$400` / `$411` / `$400` | `$400-$8cc` (1229 B) | **100.0000%** (0 diffs) | subtunes 0/1/2 = 41/29/30 writes, all **identical** |
| Hunter_Patrol_hidden_tune | `$1046` / `$1046` / `$1170` | `$1046-$1446` (1025 B) | **100.0000%** (0 diffs) | 19 writes, **identical** |

The 94-writes-in-50-frames figure reproduces the 2026-07-14 pass exactly.

**Honest scope of the trace claim.** On three of the four files the
reassembly is byte-identical to the original over the whole payload, so
the trace match is guaranteed by construction and is a consistency check,
not independent evidence. What the round-trip *does* establish is that
the disassembly is a real reconstruction rather than a pass-through: in
Erebus's compared window, **382 of 382 code bytes are decoded as
instructions** (only 14 bytes of `nop`/`$ea` padding carry the
"Unreferenced data" comment, and there are 0 undecoded code bytes), with
the remaining 893 bytes being genuine music data and pointer tables. All
382 were re-encoded from mnemonics and symbols by 64tass — every
addressing mode, branch offset, self-modified operand target and
`(zp),Y` pointer resolved back to the original byte. Hideous_Bill is the
one non-tautological case: its reassembly is **13 bytes SHORT** of the
original (`$8cd-$8d9` is never touched by any of the three subtunes and
SIDdecompiler drops it), and it still traces exact on all three subtunes,
proving that tail is genuinely dead.

**Known gaps, stated precisely:**
- `$8cd-$8d9` in Hideous_Bill (13 bytes) is outside the reconstruction.
  Untouched across all 3 subtunes; content not identified.
- Erebus's reassembly additionally materialises `$ef8-$8348` as zeros
  (the `$3c00` song-data and `$8330` SID-snapshot workspace that init's
  copy loop fills at runtime). These addresses are outside the `.sid`
  payload, so they are excluded from the byte-diff window rather than
  matched; the truncated `$9fd-$ef7` build was used for tracing.
- The three files tagged `Dave_Lee` but *not* by Dave Lee
  (Star_Lifter, Shogun, Falcon-The_Renegade_Lord) were signature-matched
  and byte-compared (see quirks) but **not** independently reassembled
  and trace-diffed. Star_Lifter and Falcon-The_Renegade_Lord both
  block-copy the driver down to `$0a10`, i.e. SIDdecompiler's `-v2`
  "Start:" lands far *below* their PSID load address; that is a copy
  DESTINATION, not workspace, so relocating onto `$0a10` would be
  backwards. Closing those two needs the discard-the-copy-destination /
  re-origin-at-load-address treatment, not a plain `-a` change.

**Next lead if extending:** reassemble Star_Lifter (`$4000`, Steve Lee) by
deleting the `$0a10-$0b42` copy-destination region from the `.asm`,
re-originating at `$4000`, and emitting equates for the surviving
references — its driver core is already confirmed 306/307 byte-identical
to Erebus's, so it should close quickly and would extend the verification
to a second composer.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages),
Wikipedia, CSDb, and computinghistory.org.uk.
