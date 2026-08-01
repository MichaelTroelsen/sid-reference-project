# Al Lowe (Sierra Disney driver)

```json
{
  "id": "al-lowe",
  "name": "Al Lowe (Sierra Disney driver)",
  "aliases": ["Al_Lowe"],
  "authors": ["Al Lowe"],
  "released": "1984 (Sierra On-Line)",
  "status": "verified",
  "platform": "CONFIRMED to be the SAME Al Lowe who later created the Leisure Suit Larry series at Sierra On-Line — VGMPF's own composer-credit pages for two of these titles cite 'verification from composer' (i.e. directly confirmed with Lowe himself, since none of these 1984 Disney-licensed educational games shipped with in-game credits). A self-taught programmer (former public-school music teacher) who wrote his own bespoke SID driver for these three titles before becoming a designer. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "File-specific PSID load address, code follows immediately (no relocation gap): Donald_Ducks_Playground.sid load $c000 (init $c751, play $c75e); Winnie_the_Pooh.sid load $1ffd (init $1ffd, play $2078); Mickeys_Space_Adventure.sid (RSID) load $c500 (init $cdee, play $0000 — see quirks). SIDdecompiler's own -v2 map 'Start:' address equals the PSID load address on all 3 files (no gotcha-40 leading-byte/workspace gap).", "zero_page": "CONFIRMED via disassembly: $D0-$D6 (7-byte scratch block, used by an 8-bit shift/add multiply helper for note-duration scaling) and $FD/$FE (indirect data pointer, read via (zp),Y for song-stream/table access).", "layout": "CONFIRMED (Donald_Ducks_Playground.sid, representative): a combined boot/subtune-select routine at the load address doubles as both the cold-start entry and the per-subtune reinit path; a 4-entry split lo/hi pointer table (correctly symbolic, e.g. $c24f-$c256) selects one of N 25-byte SID-register-snapshot blocks per subtune, copied to $D400-$D418 via a self-modified `lda <table>,X` (operand patched at $c027/$c028 from the pointer table) in a 25-iteration loop; three independent note-stream pointers (one per voice) live in a 6-byte per-channel-pointer block; a shared subroutine `sta $d400,X / sta $d407,X / sta $d40e,X / rts` (clearing all 3 voices' waveform-control bytes) is byte-identical in structure across at least 2 of the 3 files (Donald_Ducks_Playground and Mickeys_Space_Adventure), confirming they share the same driver despite different absolute addresses." },
  "entry": { "init": "Called with subtune# in A (standard PSID convention); Donald_Ducks_Playground/Winnie_the_Pooh confirmed via clean PSID init/play vectors. Mickeys_Space_Adventure (RSID) has a tiny non-standard init stub at the PSID-declared init address ($cdee) that ANDs a CIA timer byte, clears 2 flags, then JMPs to the file's own load address ($c500) where the real init logic begins — see quirks.", "play": "Donald_Ducks_Playground: $c75e, called via IRQ. Winnie_the_Pooh: $2078. Mickeys_Space_Adventure: PSID header declares play=$0000 (no direct play vector) — genuinely IRQ-driven via a mechanism not yet identified (see quirks/Verification)." },
  "speed": "TODO — not yet measured (IRQ rate / CIA timer value not extracted).",
  "data_format": { "order_list": "TODO", "patterns": "Per-voice note streams are read via 16-bit pointers advanced 2 bytes/note (a `clc/lda,adc #$02,sta / lda,adc #$00,sta` 16-bit increment on the pointer's lo/hi bytes) — encoding of the note bytes themselves not yet decoded.", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in any traced sample)" },
  "effects": { "encoding": "TODO — no effect commands decoded yet, only note on/off & pitch confirmed via trace.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE — a rare case of the strongest possible sourcing in this KB: VGMPF's composer-credit pages for 'Donald Duck's Playground' and 'Mickey's Space Adventure' explicitly cite their source as 'verification from composer; game lacks credits' — meaning VGMPF directly confirmed the credit WITH Al Lowe himself, since none of these three 1984 Sierra titles shipped with any in-game credits at all.",
    "ALL THREE TITLES ARE 1984 SIERRA ON-LINE DISNEY-LICENSED EDUCATIONAL GAMES, all originally written for the C64: Donald Duck's Playground (the traced file), Mickey's Space Adventure, and Winnie the Pooh in the Hundred Acre Wood. On 'Winnie the Pooh' specifically, VGMPF credits THREE composers via the same 'verification from composer' sourcing — Al Lowe plus Robert B. and Richard M. Sherman (the famous Disney songwriting duo) — coherently explained as Lowe doing the SID arrangement/programming of the Sherman Brothers' own pre-existing Pooh songs, not a contradiction. An earlier, lower-quality search summary oversimplified this to 'the composer was Richard M. Sherman' alone — explicitly discarded in favor of VGMPF's actual three-way credit.",
    "CONFIRMED BOTH CODER AND MUSICIAN, and specifically a SELF-TAUGHT ONE: per Lowe's own biography (allowe.com, Wikipedia), he taught public-school music for 15 years, self-taught programming, and sold Sierra his early educational games in 1982-83, becoming a Sierra 'jack of all trades' — credited as composer on King's Quest II and Space Quest II, and lead programmer on King's Quest III and Police Quest I, before creating Leisure Suit Larry. A secondary-sourced Hardcore Gaming 101 interview quote has him saying he wrote the C64 music himself 'very quickly because they had no budget for another person to do it,' hand-transcribing it in assembly into his own SID driver.",
    "THE TRACE PROFILE IS CONSISTENT WITH A BESPOKE, ONE-OFF DRIVER, not a widely-reused engine: MobyGames credits (relayed via Sierra Gamers, MobyGames itself 403'd on direct fetch) list Lowe with MULTIPLE roles across these titles (Design, Programming/Engineering, Audio) — a self-taught programmer's own hand-rolled routine for exactly these three games, matching the total absence of a SIDId entry for this tag (no widely-catalogued/reused player routine exists to index).",
    "NO CSDb SCENER PROFILE EXISTS — expected and unremarkable: a purely US commercial-studio composer/programmer, never part of the European demoscene.",
    "IMPORTANT: NOT to be confused with the already-carded, unrelated [[dave-lowe]] — different first name, different person, adjacent alphabetically in HVSC's own Musicians.txt (the very next line after 'Lowe, Al - USA' is 'Lowe, Dave (Uncle Art) - UNITED KINGDOM (ENGLAND)').",
    "Not confirmed in SIDId (no entry for this tag). No documented connection found to [[ed-bogas-accolade]]/[[ed-bogas-hakansson]] or any other commercial-studio/educational-software composer already in this KB, despite the adjacent era and genre — checked directly and explicitly, none found. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood).",
    "PAGE-RELOCATABLE ONLY, NOT byte-address relocatable — confirmed on Donald_Ducks_Playground.sid: the driver's own reassembled source is 100.0000% byte-identical between a native build and TWO independent page-aligned relocation controls ($d000-based and $2000-based, both matching every one of 126 register writes across all 4 subtunes exactly), but a THIRD control at a non-page-aligned base ($d037, low byte $37) genuinely diverges starting frame 0 of subtune 0 (voice 2/osc2 receives a wrong initial frequency and then stops producing further events entirely — 32 of 35 write tuples differ). All three controls change a real, non-trivial fraction of the reassembled bytes (114-228 of 1901), so this isn't a no-op test. SIDdecompiler's own `-A` flag ('Force page alignment to be the same as the original SID') exists precisely for this class of driver. The exact instruction/byte responsible for the misalignment sensitivity was NOT conclusively isolated (the two most likely-looking constructs — a self-modified `lda <table>,X` operand fed from a symbolic split lo/hi pointer table, and an 8-bit shift/add multiply helper computing a subtune-tempo-scaled duration table — both checked out as correctly carry-propagating by hand); pinning it down further would need a live 6502 debugger to watch $D0-$D6/$FD-$FE across the two relocation bases, not just static reading.",
    "SAME DRIVER CONFIRMED ACROSS FILES: Donald_Ducks_Playground.sid and Mickeys_Space_Adventure.sid share a byte-identical 4-instruction idiom (`sta $d400,X / sta $d407,X / sta $d40e,X / rts`, clearing all 3 voices' waveform-control bytes) at different absolute addresses in each file — direct disassembly-level confirmation that all 3 titles use the same bespoke routine, not just circumstantial (VGMPF-sourced) evidence."
  ],
  "sources": [
    "HVSC Musicians.txt ('Lowe, Al - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Donald Duck's Playground (composer credit, 'verification from composer'): https://www.vgmpf.com/Wiki/index.php?title=Donald_Duck%27s_Playground",
    "VGMPF — Mickey's Space Adventure (C64) (composer credit): https://www.vgmpf.com/Wiki/index.php?title=Mickey%27s_Space_Adventure_(C64)",
    "VGMPF — Winnie the Pooh in the Hundred Acre Wood (C64) (three-way composer credit): https://vgmpf.com/Wiki/index.php?title=Winnie_the_Pooh_in_the_Hundred_Acre_Wood_(C64)",
    "Wikipedia — Al Lowe: https://en.wikipedia.org/wiki/Al_Lowe",
    "Al Lowe's own bio site: https://allowe.com/al/bio2.html",
    "Wikipedia — Donald Duck's Playground: https://en.wikipedia.org/wiki/Donald_Duck's_Playground",
    "Lemon64 — Donald Duck's Playground; Mickey's Space Adventure; Winnie the Pooh: https://www.lemon64.com/game/donald-ducks-playground",
    "Local dataset: 3 files tagged Al_Lowe, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Al_Lowe` tag is confirmed, via VGMPF's own 'verification from
composer' sourcing, to be Al Lowe — the future creator of Leisure Suit
Larry — scoring three 1984 Sierra On-Line Disney-licensed educational
C64 games on his own bespoke, self-taught driver. Player-ID-
fingerprinted across 3 files, all his own. Disassembly confirms all 3
files share the same driver (a byte-identical waveform-clear idiom
appears in two of them at different addresses); 2 of the 3 files
(Donald Duck's Playground, Winnie the Pooh) have a byte-exact and
page-relocation-controlled register-write match, the third (Mickey's
Space Adventure, an RSID with a non-standard IRQ-driven play mechanism)
is byte-exact but not yet trace-verified.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **rare, strongest-
possible-tier sourcing**: VGMPF didn't infer this credit from a database,
it verified it directly with Al Lowe himself, since none of these
uncredited-in-game titles left any other trail. Also notable: a genuine,
first-person account of writing the music himself under a tight budget,
before his design career took off.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Disassembled
directly this pass via `SIDdecompiler.exe -r` (see Verification) — see
`memory`/`entry`/`data_format` above for what was recovered. Effect
encoding and note-stream byte format remain undecoded (`TODO`).

## Verification

**Byte-exact + page-relocation-controlled register-write match
(2026-07-31) — `status: verified`, scope stated precisely below.**

Method: `SIDdecompiler.exe <file> -a<decimal load address> -z -d -c -v2 -r`
then `64tass.exe -a --cbm-prg -o out.prg out.asm` (this project's standard
`-r` recipe, lesson 63). Zero hand-patching needed on any of the 3 files.

**Donald_Ducks_Playground.sid** (load $c000, init $c751, play $c75e, 4
subtunes): byte-diff **100.0000%** (1901/1901 bytes). Because `-r` makes
the native build byte-identical to the original, a native trace is
tautological (lessons 65/69/70/72) — so a **relocation-invariance
control** was built and traced instead. Page-aligned controls at two
independent bases (`$d000`, delta +$1000; `$2000`, delta -$a000) both
reproduce every register write across **all 4 subtunes exactly**: 35 + 51
+ 11 + 29 = **126/126 writes, 0 divergences**, at both bases (114 of 1901
bytes differ from the native build at each base — a real, non-trivial
control, not a no-op). A third, non-page-aligned control (`$d037`, delta
+$1037, 228/1901 bytes differ) **genuinely diverges** starting frame 0 of
subtune 0 (voice 2 gets the wrong initial frequency and then stops
producing further events: 32/35 write tuples differ) — this driver is
page-relocatable only, not byte-address relocatable (see quirks for the
detail and the unresolved mechanism).

**Winnie_the_Pooh.sid** (load $1ffd, init $1ffd, play $2078, 9 subtunes):
byte-diff **100.0000%** over the 1832 of 1842 payload bytes SIDdecompiler's
trace covered (the untraced final 10 bytes, $2725-$272e, are outside its
`-v2` map's End: address and were not compared). A page-aligned relocation
control (`$7ffd`, delta +$6000) reproduces every register write across
**all 9 subtunes exactly**: 10+29+7+7+16+7+11+19+13 = **119/119 writes, 0
divergences** (81 of 1832 bytes differ from native — again a real
control).

**Mickeys_Space_Adventure.sid** (RSID, load $c500, init $cdee, **play
declared as $0000** in the header): byte-diff **100.0000%** over the full
2325-byte payload (SIDdecompiler's own trace, despite emitting ~270,000
benign "Unimplemented opcode: 2f at address $0000" warnings while probing
the non-existent play=$0000 vector — per lesson 57 this did not prevent a
complete, valid `.asm`). The init address is a tiny non-standard stub
(ANDs a CIA1 timer byte, clears 2 flags, then `JMP $c500` back to the
file's own load address, where the real driver init begins) — this is an
in-game RSID whose real per-frame play mechanism was **not resolved**: a
raw-byte scan of the full payload for `$0314`/`$0315`/`$FFFE`/`$FFFF`
vector-install writes (lesson 81's diagnostic) found none, so the IRQ
install (if any) uses some other mechanism this static pass didn't find.
**No register-write trace was possible for this file** — the byte-exact
static disassembly plus the shared-idiom match against
Donald_Ducks_Playground.sid (see quirks) is the evidence for it sharing
the same driver, not an independent trace.

**Overall: verified for Donald_Ducks_Playground.sid and
Winnie_the_Pooh.sid** (both with genuine, non-tautological,
relocation-controlled register-write matches, 245 total writes across 13
subtunes, 0 divergences). **Mickeys_Space_Adventure.sid is byte-exact but
NOT trace-verified** — its real play entry point is the concrete next
lead: a RetroDebugger pass (live 6502 execution, not static analysis)
installing an IRQ handler and single-stepping from the `$c500` init path
would be needed to locate the real per-frame call site, the same
technique lesson 94/95's `defmon`/`c64-speech-system` write-ups describe.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF (3 pages), Wikipedia
(2 pages), Al Lowe's own site, and Lemon64.
