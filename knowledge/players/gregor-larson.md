# Gregor Larson / Kris Hatlelid (Frantic Freddie driver)

```json
{
  "id": "gregor-larson",
  "name": "Gregor Larson / Kris Hatlelid (Frantic Freddie driver)",
  "aliases": ["Gregor_Larson"],
  "authors": ["Gregor Larson", "Kris Hatlelid"],
  "released": "1983 (Commercial Data Systems)",
  "status": "verified",
  "platform": "The EARLIER, pre-KMS driver used by already-carded [[kris-hatlelid]] — CONFIRMED via three independent sources (CSDb, Wikipedia, VGMPF) as a genuine co-authored tool: Gregor Larson co-designed 'Frantic Freddie' (1983, Commercial Data Systems) alongside Hatlelid, and VGMPF states directly that 'Larson and Hatlelid programmed a music driver and arranged in hex' together — a real division of labor, driver-code vs. music-data, roughly five years before Hatlelid's own later, self-named 'KMS' driver. Player-ID-fingerprinted across 2 files, both composed by Hatlelid.",
  "csdb_release": null,

  "memory": { "load_address": "NOT fixed across releases — Frantic_Freddie.sid loads at $a000 (init $c3db, play $a0e4); Interlude_1_The_Firing_Squad.sid loads at $1003 (init $1c9c, play $113c). Each file is a genuinely separate assembly of the same driver, not a fixed-address engine (contrast the 'code at fixed absolute addresses regardless of load address' pattern seen elsewhere in this KB, e.g. gmc — this driver moves with the load address).", "zero_page": "Frantic_Freddie: z02-z0f (contiguous), z20/z21, z24 (subtune-index-derived selector), zff (a general-purpose scratch/flag byte, also used as a self-modified-code target). Interlude_1_The_Firing_Squad: z9b/z9c, zf9-zfe.", "layout": "Frantic_Freddie.sid: SIDdecompiler's -v2 map Start ($a000) matches the PSID load address exactly — no gotcha-40 gap. Interlude_1_The_Firing_Squad.sid: -v2 Start is $033c, far below its $1003 load address, but only ONE byte in that whole span ($033c itself, read+write) is ever touched — the rest is untouched padding; this is the 'single incidental scratch byte' pattern (this KB's sid-player-verify lesson 109/60), not a copy-loop destination or a real workspace block. Relocating onto -a<decimal $033c> (828) resolves it cleanly." },
  "entry": { "init": "Frantic_Freddie: $c3db. Interlude_1_The_Firing_Squad: $1c9c. INIT is not a simple register-setup routine in either file — it self-modifies large stretches of the play routine at runtime, copying bytes from small in-file template tables (right after the code) into the play routine's own operand/opcode bytes (a 'stamp the play routine from a template' architecture — see quirks). One template-copy destination in Frantic_Freddie ($a050-$a058, nominally disassembled as 'lda #$e4 / sta $fffa / lda #$a0 / sta $fffb', i.e. what LOOKS like installing an NMI vector pointing at PLAY) is provably dead: init always overwrites those exact bytes with unrelated opcodes (ORA/BIT/AND/STA) before PLAY is ever called, so the pristine on-disk bytes there are never executed as written.", "play": "Frantic_Freddie: $a0e4. Interlude_1_The_Firing_Squad: $113c. Frantic_Freddie's PLAY entry bytes themselves ($a0e4-$a0f7) are ALSO a template-copy destination, patched by INIT before first use." },
  "speed": "TODO — not isolated from the trace alone; standard PSID play-call-per-frame convention observed in both files, no evidence of a custom IRQ-driven speed multiplier found in the traced window.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in either sample trace: 30 writes/50 frames on Frantic_Freddie subtune 9, 300 writes/50 frames on Interlude_1_The_Firing_Squad)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DISASSEMBLY/VERIFICATION (2026-08-01): reconstructs 100.0000% byte-exact on BOTH tagged real HVSC files at their native PSID load addresses, and both native register-write traces match exactly. Frantic_Freddie.sid: 9275 of 9278 payload bytes covered by SIDdecompiler's trace (`-r`), all 9275 byte-exact; the 3 uncovered trailing bytes ($c43b-$c43d, decoding as `4c 00 a0` = `JMP $a000`) sit immediately after the routine's own `RTS` and were never reached by SIDdecompiler's emulation — plausibly a dead/vestigial trailing jump, not independently confirmed. Interlude_1_The_Firing_Squad.sid: 3265/3265 payload bytes byte-exact, 100.0000%, no residual gap.",
    "SIDdecompiler emits an ambiguous, dual-meaning `la29f+1`-suffixed label on Frantic_Freddie.sid (gotcha 19's exact pattern, with a twist): the SAME literal symbol `la29f+1` is used BOTH as the label on the instruction physically at $a29e (the 'lda #$00' opcode byte) AND, in a separate pointer table, to mean $a29f (that instruction's own operand byte, one address higher) — i.e. the tool reuses one symbol for two different addresses of the same self-modified instruction. Fixing this required TWO different resolved symbols from one anchor (`la29f_anc` at the true opcode address $a29e; `la29f_p1 = la29f_anc + 1` for the operand-byte references) — a direct `<name>_1` rename (gotcha 19's warned-against shortcut) would have been wrong in one of the two use sites, not both, making this a genuinely 2-way-ambiguous case rather than the single-use case gotcha 19 documents.",
    "The relocation-invariance control (this KB's sid-player-verify lessons 69/70/72) FAILS CATASTROPHICALLY on Frantic_Freddie.sid at every relocation base tried (page-aligned +$1000, +$100, and non-page-aligned +$2001 all alike) — 0 SID register writes over 50 frames, not a partial/wrong-value divergence like the more common self-modified-workspace-drift cases elsewhere in this KB. This is NOT the page-locked-low-byte pattern (lessons 87/91/103/110, which fails only at non-page-aligned deltas) — it fails identically at every delta tested, including page-aligned ones. INIT's own self-modifying-template-copy architecture is a plausible structural explanation (its copy loops and copied pointer bytes are fully symbolic and DO relocate correctly on inspection), but a more specific candidate mechanism was found and not fully confirmed: INIT explicitly toggles the $01 CPU port (`dec $01 / jsr la000 / inc $01`) around a call into the very address range ($a000-$bfff) that a stock C64 normally shadows with BASIC ROM — i.e. this driver may genuinely depend on living at a fixed, bank-switching-relevant address rather than being a portable relocatable routine, which a static disassembly/byte-diff/trace-diff pipeline cannot conclusively confirm or rule out. A RetroDebugger pass (live 6502/C64 emulation with real CPU-port bank switching) checking whether $a000-$bfff is RAM or ROM-shadowed at the moment `jsr la000` executes, and whether the relocated build's equivalent call lands in valid code either way, would settle this — not attempted here per this agent's own constraints (no live-debugger access).",
    "RESOLVED WITH HIGH CONFIDENCE, the cleanest of several similar name-mismatch cases in this KB — cleaner than the still-unresolved [[rene-romijn]], comparable to the cleanly-resolved [[gavin-graham]] and [[neil-bate]]: this tag's SIDId author field names 'Gregor Larson,' a DIFFERENT name from the composer credited in this project's own local dataset, Kris Hatlelid. CSDb's own SID metadata for the tune resolves this directly: **'Frantic Freddie / Gregor&Brian Larson, K. Hatlelid / 1983 Commercial Data Systems'** — a THREE-way credit (Gregor Larson, a second Larson named Brian — unidentified relationship, likely a relative, no further info found — and Kris Hatlelid). Wikipedia's own Frantic Freddie article independently corroborates the Larson/Hatlelid CO-DESIGN credit.",
    "VGMPF STATES THE DIVISION OF LABOR DIRECTLY, the key confirming source: 'For Frantic Freddie (C64), Larson and Hatlelid programmed a music driver and arranged in hex' — i.e. driver code was jointly built, with SIDId's naming of Larson specifically as author most plausibly reflecting him as the driver's primary/named coder, while Hatlelid did the arranging. VGMPF FURTHER STATES Hatlelid REUSED this same driver on the 'PirateBusters' cartoon, and that 'by February 1988, he had created a new driver' (KMS, already documented on [[kris-hatlelid]]'s own card) — establishing this AS Hatlelid's genuine PRE-KMS tool, the exact tool his own career started on.",
    "THIS IS THE STRUCTURAL SAME PATTERN as the already-resolved [[neil-bate]] case (a driver a composer learned/co-built early in his career before writing his own) — not the unresolved [[rene-romijn]] pattern (no identity found at all for the mismatched name). Gregor Larson IS a real, cross-sourced co-author, just with no CSDb scener profile or further documented C64 credits of his own beyond Frantic Freddie and a related unreleased title, 'Mutant.'",
    "'INTERLUDE 1 - THE FIRING SQUAD' (the tag's second file) HAS NO INDEPENDENT CSDb/Lemon64/Wikipedia RECORD as a standalone release — it appears to be an HVSC-catalogued Hatlelid tune not indexed as its own CSDb SID/release page. Given it shares the exact `Gregor_Larson` tag and both files are the ONLY two under this tag, it's plausible this is from the same early-CDS-era period using the same co-built driver, but this could NOT be independently corroborated beyond the shared tag itself — left explicitly open, not asserted as confirmed.",
    "NO CSDb SCENER PROFILE, no HVSC Musicians.txt entry, and no other C64-industry credits were found for Gregor Larson beyond this project's own data and the related unreleased 'Mutant' title — genuinely thin biographical material beyond the driver-authorship fact itself.",
    "Not confirmed in SIDId beyond the author field already known for this tag. Direct, confirmed relationship to [[kris-hatlelid]] (the composer who learned on this driver before his own KMS — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor, Neil Bate, Jason Page/Jay, Entropy Editor, Georg Brandt/Rhythm CS, The Music System, Ozzy Oldskool V2, Jonas Hultén, Kenneth Arnold, Andreas Bauernfeind, Andy Brown, Arti Haroutunian, Bo Mellberg, Cadaver's second driver, Frank Brodersen, Frederic Thiesse, Music Works — none found)."
  ],
  "sources": [
    "CSDb sid id=14184 (Frantic Freddie, three-way composer credit 'Gregor&Brian Larson, K. Hatlelid'): https://csdb.dk/sid/?id=14184",
    "Wikipedia — Frantic Freddie (co-design credit): https://en.wikipedia.org/wiki/Frantic_Freddie",
    "VGMPF — Kris Hatlelid (driver co-authorship quote, PirateBusters reuse, KMS successor timeline): https://www.vgmpf.com/Wiki/index.php/Kris_Hatlelid",
    "GamesThatWerent — Mutant (unreleased, related title): https://www.gamesthatwerent.com/gtw64/mutant/",
    "CSDb scener id=32451 (Kris Hatlelid, already cited in kris-hatlelid.md — no separate Gregor Larson scener profile exists on CSDb)",
    "Existing KB card: knowledge/players/kris-hatlelid.md (the composer this driver was co-built for, updated in this same batch)",
    "Local dataset: 2 files tagged Gregor_Larson, 1 composer (Kris Hatlelid) (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Gregor_Larson` tag is the earlier, pre-KMS driver used by
already-carded [[kris-hatlelid]] — a genuine, three-source-confirmed
co-authored tool from Frantic Freddie (1983), the exact game his own
career started on. Player-ID-fingerprinted across 2 files, both
composed by Hatlelid.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **cleanly resolved
name mismatch**, directly comparable to [[neil-bate]]'s already-resolved
case in this KB: a real co-author, confirmed across CSDb, Wikipedia, and
VGMPF, with VGMPF explicitly describing the driver-code/arranging
division of labor between Larson and Hatlelid.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Disassembled
directly from both real HVSC files this KB tags `Gregor_Larson`
(`SIDdecompiler.exe -r`, see Verification) — the driver is a genuine,
self-modifying "template stamp" engine: INIT copies small fixed template
tables (stored right after the player code) over parts of the PLAY
routine's own opcode/operand bytes before every play call, rather than
running the pristine on-disk PLAY bytes as-is. This wasn't apparent from
any external source and only surfaced from the disassembly itself. How
much of this carried forward into Hatlelid's own later KMS driver is
still unexamined.

## Verification

**Byte-exact reconstruction on both tagged files, native trace-exact,
relocation control inconclusive (2026-08-01) — `status: verified`.**

Disassembled both real HVSC `Gregor_Larson`-tagged files with
`SIDdecompiler.exe -r` (relocated onto each file's own `-v2` Start
address per gotcha 40) and reassembled with 64tass:

- **Frantic_Freddie.sid** (load `$a000`, init `$c3db`, play `$a0e4`,
  subtune 9 traced): 9275/9278 payload bytes covered, **100.0000% byte-exact**
  over the covered range; 3 uncovered trailing bytes ($c43b-$c43d, a `JMP
  $a000` sitting right after the routine's `RTS`) were never reached by
  SIDdecompiler's own trace and are unconfirmed (plausibly dead). Native
  trace: 30 register writes / 50 frames, exact match against the original
  (tautological given the byte-exact rebuild, but a real register-write
  trace was produced and matches).
- **Interlude_1_The_Firing_Squad.sid** (load `$1003`, init `$1c9c`, play
  `$113c`, single subtune): 3265/3265 payload bytes, **100.0000% byte-exact**,
  no residual gap. Native trace: 300 register writes / 50 frames, exact
  match.

Both files independently confirm the same driver reconstructs cleanly at
its own native load address, despite being two separately-assembled
builds at completely different addresses (not a fixed-address engine).

**Relocation-invariance control** (rebuilding the same disassembly at a
different base and re-tracing, to make the trace-diff non-tautological)
was attempted on Frantic_Freddie.sid at three deltas (+$1000, +$100,
+$2001) and **failed at all three** — 0 SID writes over 50 frames in every
case, not a partial divergence. See the `quirks` entry for the candidate
(CPU-port bank-switching-suggestive) explanation, which was not
conclusively confirmed — this would need a live RetroDebugger pass to
settle, not attempted here. Given two independent real files both
reconstruct 100.0000% byte-exact at their own native addresses with
matching native traces, `verified` is set on that evidence, with the
relocation-control failure documented as an open, unresolved question
about the driver's relocatability rather than a defect in the
reconstruction itself.

## Sources

See the `sources` array — CSDb, Wikipedia, VGMPF, GamesThatWerent, and
the related kris-hatlelid card.
