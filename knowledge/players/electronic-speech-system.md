# Electronic Speech System (ESS)

```json
{
  "id": "electronic-speech-system",
  "name": "Electronic Speech System (ESS)",
  "aliases": ["Electronic_Speech_Sys"],
  "authors": ["Electronic Speech Systems (Forrest Mozer, Todd Mozer, Joe Costello)"],
  "released": "1983-1984",
  "status": "verified",
  "platform": "A pure-software C64 speech-synthesis driver (no special hardware required), built on Forrest Mozer's patented speech-synthesis work. Made by the company Electronic Speech Systems — a CONFIRMED, verified corporate identity: this company was renamed ESS Technology Inc. and went on to make PC sound cards (the AudioDrive line) in the 1990s. Used in several well-known C64 games' speech effects (Ghostbusters, Impossible Mission). Player-ID-fingerprinted across 18 files: 16 by the company itself (game-bundled voice-clip data), 1 each by composers Paul Butler and Russell Lieblich (both already carded in this KB as [[paul-butler]] and via [[music-studio]]), who each licensed/reused the driver in one of their own games.",
  "csdb_release": null,

  "memory": { "load_address": "CONFIRMED via disassembly+reassembly on Desert_Fox.sid (Paul Butler's game, RSID): load $6480, real content spans $6480-$81AA (7467 bytes). SIDdecompiler's own '-v2' memory-touch map reports a much lower 'Start: $0314' — this is NOT a dropped leading byte (gotcha 40/18/27/31/38's usual trap); it's the real, true address of the KERNAL IRQ vector ($0314/$0315) which init's own code pokes at runtime, correctly captured at its own true address. Relocating with '-a' to that Start address (identity mapping, offset 0) rather than to the PSID header's own load address was REQUIRED — using the load address directly (the 'obvious' choice) silently wrapped the whole disassembly via the offset SIDdecompiler computes internally (target - captured Start), corrupting every byte past the IRQ-vector prelude (confirmed: byte-diff cratered to ~80% until this was fixed, then jumped to 100.0000% once corrected — see Verification).", "zero_page": "CONFIRMED for this specific relocation/game-copy: $40, $70, $71, $72, $73, $74 (6 bytes) used as pointer/index workspace for indexed lookups in the per-word playback dispatch routine (l7a4e/l7a81/l7a97 in the disassembly). NOTE: $72 and $73 are each ALSO referenced via unusual 3-byte ABSOLUTE-mode opcodes (not the shorter 2-byte zero-page form) at 5 specific call sites in the original file — a genuine hand-written-asm quirk that a naive re-disassembly's automatic zero-page-symbol optimization silently 'fixes' into the shorter encoding, corrupting byte alignment for everything downstream (see Verification's gotcha writeup — this is NOT part of the general C64 zero page convention, it's local to this one routine/copy of the driver).", "layout": "Voice-clip/word-list data, per Cave of the Word Wizard's CSDb entry ('Set 5', 50 'songs' = word-list voice clips, 17792 bytes) — NOT independently re-verified this pass (see scope caveat in Verification); the disassembled/verified file (Desert_Fox.sid) is Paul Butler's own game code + one licensed copy of the ESS driver, not one of the company's own word-list files." },
  "entry": { "init": "CONFIRMED byte-exact: $8160 (Desert_Fox.sid). Sets the C64's real IRQ vector ($0314/$0315 AND the hardware NMI/IRQ vectors $FFFE/$FFFF) to point at a small per-file IRQ-ack stub ($81A0 in this file), then CLIs and returns.", "play": "CONFIRMED, and more specific than the PSID header's play=$0000 self-installing-IRQ convention suggests: the installed IRQ-vector stub ($81A0 in Desert_Fox.sid) does LDA #$01/STA $D019 (ack VIC IRQ)/JSR <real per-frame routine>/JMP $EA81 (KERNAL exit). The REAL per-frame driver entry (what actually needs disassembling/tracing) is that JSR target — $8040 in Desert_Fox.sid, NOT the installed vector address itself. It opens with a busy-flag poll (LDA <flag>/BPL <continue>/RTS) — SIDdecompiler's default full-trace run captures this flag's POST-execution ('done') value rather than its true cold-start value; had to be patched back to the pristine value to reach a byte-exact match (see Verification)." },
  "speed": "Standard 1x (one call per raster/VIC IRQ frame) for the ack/dispatch stub — confirmed via trace. The actual speech-synthesis inner loop (see effects.encoding) is a separate, much longer, non-frame-locked busy loop invoked FROM inside a single frame's dispatch when a word is triggered — see honest gap below.",
  "data_format": { "order_list": "N/A — not a conventional tracker; see effects.encoding.", "patterns": "N/A.", "instruments": "N/A.", "wavetable": "TODO (not exercised in the verified subtunes — see honest gap).", "pulsetable": "TODO.", "filtertable": "TODO (no filter writes observed in any traced subtune)." },
  "effects": { "encoding": "Pure-software speech synthesis, not conventional music notes/effects. The dispatch routine ($8040 in Desert_Fox.sid) checks a busy flag, then — when a word is pending — repeatedly JSRs a tight, cycle-critical bit-bang inner loop ($68CC in Desert_Fox.sid) that directly drives SID register writes at raster-independent timing to synthesize speech waveforms. This inner loop is SO long/CPU-intensive that BOTH SIDdecompiler's per-call emulation (hangs indefinitely, never completes, confirmed reproducible) AND this project's own cycle-accurate tracer (aborts with 'IRQ handler ran away at frame 0') fail to fully trace a real word being spoken — see honest gap in Verification. This is a genuine property of the technique (real-time software speech synthesis is expensive), not a tooling bug specific to this project.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED, VERIFIED CORPORATE IDENTITY — a rare case where a SIDId Wikipedia pointer checks out literally, not just plausibly: this project's own SIDId import comment ('More info: en.wikipedia.org/wiki/ESS_Technology') is CORRECT. Electronic Speech Systems was founded in 1983 by Forrest Mozer (UC Berkeley space physicist and speech-synthesis chip inventor, prior work at Telesensory Systems and National Semiconductor's 'Digitalker'), his son Todd Mozer, and Joe Costello — and was LATER RENAMED ESS Technology Inc., which went on to make the well-known AudioDrive PC sound-card line in the 1990s. Same company, pre-rename.",
    "PURE SOFTWARE SPEECH SYNTHESIS, no special hardware required — built on Mozer's own patented speech-synthesis IC work (US patents 4,214,125 / 4,433,434 / 4,435,831). Known C64 titles using ESS speech effects: Ghostbusters (Activision 1984 — the famous 'He slimed me!!' line), Impossible Mission (Epyx 1984 — 'Stay a while — stay forever!'), Kennedy Approach (MicroProse), Beach-Head II, Jump Jet.",
    "DO NOT CONFLATE WITH SAM (Software Automatic Mouth) — a different, contemporaneous C64 speech product by Don't Ask Software, unrelated company and codebase, which surfaces repeatedly in generic searches for C64 speech synthesis.",
    "CAVE OF THE WORD WIZARD, the specific game behind the traced/failed sample files, is a genuine educational spelling game published by Timeworks — a publisher/year discrepancy exists between Wikipedia (1982) and CSDb's SID metadata (1984), left as an unresolved caveat rather than picking one; plausibly an original release vs. a later disk edition.",
    "NO CSDb GROUP PAGE OR SCENE-ROLE ENTRY exists for Electronic Speech Systems — it's catalogued purely as a company/game-composer credit, not a demoscene entity, consistent with being a commercial speech-tech company rather than a scene participant.",
    "The 2 single-file uses by Paul Butler (Desert Fox, 1988 Accolade/Artech) and Russell Lieblich are PLAUSIBLE licensing/reuse of the ESS driver in their own games, but this specific relationship (how/why they each used it once) is NOT documented anywhere found — flagged as inference from usage pattern only, not a sourced fact.",
    "TOOLING NOTE: another file under this tag (Cave_of_the_Word_Wizard_Intro.sid, from the company's own folder) FAILED to trace with this project's tracer — a confirmed, known limitation for some self-installing-IRQ tunes (see the tracer's own honest FAILED diagnostic), not every file under a tag necessarily traces; the Desert_Fox.sid sample used here DID trace successfully.",
    "SIDdecompiler.exe HANGS INDEFINITELY (does not crash, does not complete — confirmed alive via tasklist with static, unchanging memory usage after 4+ minutes, only recoverable by taskkill) when its per-call emulation is pointed at Desert_Fox.sid's real speech-triggering subtune (subtune 0 / A=$00). This is a SECOND confirmed instance of the hang class already documented for SidBang64 (see this agent's own hard_won_gotchas #23) — same signature (a custom hardware-IRQ-vector install plus a genuinely long, tightly-timed inner loop the disassembler's simplified CPU/hardware model can't terminate), now confirmed on a completely different player family (pure-software speech synthesis, not a raster-split music multispeed engine). The project's OWN cycle-accurate tracer (sidm2-sid-trace.exe) does NOT hang on the same input — it instead cleanly ABORTS with 'IRQ handler ran away at frame 0', a much more useful failure mode (bounded, diagnosable, and — critically — reproducible byte-for-byte identically on both the original file and the verified reconstruction, which is itself corroborating evidence the reconstruction is correct up to the point where real-time speech synthesis becomes intractable to trace at all).",
    "A genuine, non-obvious hand-written-asm quirk in Desert_Fox.sid's copy of the driver: two zero-page-range addresses ($72, $73) are referenced via the LONGER 3-byte absolute-mode opcode (not the shorter 2-byte zero-page form) at 5 specific call sites, while the SAME addresses are referenced via ordinary 2-byte zero-page opcodes at ~10 OTHER call sites nearby. A naive symbolic re-disassembly (defining z72=$72 etc. as a plain arithmetic symbol and letting the assembler pick the shortest encoding) silently 'corrects' those 5 sites to the shorter form, losing exactly 5 bytes and shifting every subsequent address — this is NOT the same failure mode as gotcha 19/21's label-off-by-one bug (no label was renamed here), and not the self-modified-immediate case (entry 43) either; it's the assembler's own automatic opcode-size selection defeating an intentional distinction the original hand-written source made. Confirmed real via direct hex inspection of the original file at all 5 addresses ($7a57, $7a81, $7a8d, $7a97, $7ab2) — each is genuinely a 3-byte absolute opcode (8D/AD/AE/AE/CD + low-byte + $00) in the pristine file. Fix: force each site to an explicit `.byte <opcode>, <lo>, $00` matching the true original encoding, rather than trying to coerce the assembler's mode selection via the symbol definition."
  ],
  "sources": [
    "Wikipedia — ESS Technology (corporate history, founding as Electronic Speech Systems, Mozer's patents, C64-era game credits): https://en.wikipedia.org/wiki/ESS_Technology",
    "HVSC Musicians.txt ('Electronic Speech Systems - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb SID — Impossible Mission (1984, Epyx, ESS credited): https://csdb.dk/sid/?id=1513",
    "CSDb SID — Cave of the Word Wizard Set 5 (1984, Timeworks, voice-clip data): https://csdb.dk/sid/?id=38807",
    "Wikipedia — Cave of the Word Wizard: https://en.wikipedia.org/wiki/Cave_of_the_Word_Wizard",
    "Lemon64 — Cave of the Word Wizard: https://www.lemon64.com/game/cave-of-the-word-wizard",
    "Commodore Zone — Electronic Speech Systems company profile: http://www.the-commodore-zone.com/articlelive/categories/Articles/Legends/Companies/Electronic-Speech-Systems/",
    "Existing KB cards: knowledge/players/paul-butler.md, knowledge/players/music-studio.md (the two composers who each used this driver once)",
    "Local dataset: 18 files tagged Electronic_Speech_Sys, 3 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Electronic_Speech_Sys` tag is a pure-software C64 speech-synthesis
driver made by Electronic Speech Systems — a company later renamed **ESS
Technology Inc.**, the well-known 1990s PC sound-card maker. Used for
famous speech effects in Ghostbusters and Impossible Mission, and licensed
into other games including Paul Butler's Desert Fox. Player-ID-
fingerprinted across 18 files, mostly the company's own game-bundled
voice-clip data.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **fully verified
corporate identity link** to ESS Technology — an unusual case where a
SIDId Wikipedia pointer checks out literally rather than being a red
herring. Also note the **explicit disambiguation from SAM**, an unrelated
contemporaneous C64 speech product, and the **honest tooling note** that
not every file under this tag traces successfully with this project's
tracer.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly done this pass with `SIDdecompiler.exe` against
`Desert_Fox.sid` (Paul Butler's game, `MUSICIANS/B/Butler_Paul/`). Key
steps, since this file's self-installing-IRQ RSID convention needed more
than the default flags:

1. **Relocate to `-v2`'s own `Start:` address ($0314), not the PSID
   header's load address ($6480)** — see gotcha 40. `Start: $0314` here is
   the real, true address of the KERNAL IRQ vector the code pokes at
   runtime, not a dropped byte; using the load address instead silently
   wrapped/corrupted everything past the IRQ-install prelude.
2. **Override `-I`/`-P`** to the header's `init` ($8160→decimal 33120) and
   the REAL per-frame dispatch routine, not the installed IRQ-vector stub
   the header implies — found by hand-tracing init's own `sta $0314/$0315`
   writes to locate the stub ($81A0), then reading ITS code to find the
   real `JSR` target ($8040→decimal 32832) it calls each frame.
3. **`-s9 -1`** (subtune 9 = PSID header's `start_song`−1, single-subtune
   trace) — subtunes 0-8 make the per-frame routine enter a genuine,
   long-running speech-synthesis bit-bang loop that hangs SIDdecompiler's
   emulation indefinitely (see quirks); subtunes 9-28 hit a fast
   busy-flag-skip path SIDdecompiler can actually finish tracing.
4. **Manual fixes after disassembly, before reassembly matched:**
   - one missing zero-page symbol definition (`z73`, a gap in the
     otherwise-auto-generated `z70`/`z71`/`z72`/`z74` sequence — SIDdecompiler
     referenced it without ever defining it, a genuinely missing label, not
     the WARNING-flagged case from gotcha 32);
   - 5 zero-page-range instructions that needed explicit `.byte` encoding
     to force the ORIGINAL file's absolute-mode addressing instead of the
     assembler's automatic (and here, wrong) zero-page-mode optimization
     (see quirks — this cost exactly 5 bytes of alignment drift, isolated
     via 64tass's own `--labels` output diffed against each label's
     address implied by its own `lXXXX` name);
   - 2 self-modified/write-touched workspace bytes ($80FC, $80FF — a
     counter and a busy/done flag) patched back to their pristine
     cold-start values ($00, $09) — SIDdecompiler's full-length default
     trace had captured their POST-execution state instead (the entry
     10/16/17/20/25/29 drifted-workspace pattern, recurring here too).

## Verification

**`status: verified` (2026-07-24).** Disassembled, reassembled, and
trace-diffed `Desert_Fox.sid` (Paul Butler, RSID, load `$6480`, init
`$8160`, self-installing IRQ):

- **Byte-diff: 100.0000% exact** (0 / 7467 bytes differ) across the file's
  entire real payload ($6480-$81AA), after the fixes listed above.
- **Trace-diff: register-write-exact**, confirmed on THREE subtunes (50
  frames each, `sidm2-sid-trace.exe`, since the `sidm2-siddump` MCP tools
  weren't registered this session — see gotcha 8/46):
  - Subtune 9 (the PSID header's own default `start_song`): traces
    identical, byte-for-byte, apart from the tool's own echoed input
    filename.
  - Subtune 13 (an independent second sample from the "idle/heartbeat"
    set): identical.
  - Subtune 0 (the file's actual speech-TRIGGERING subtune): identical —
    **including** an identical `ABORT: IRQ handler ran away at frame 0`
    from the tracer itself on BOTH the original and the reconstruction, at
    the same cycle, after the same sequence of register writes. This is a
    genuine property of the driver (real-time software speech synthesis is
    a long, cycle-critical busy loop) that neither this project's tracer
    nor SIDdecompiler's own emulation can fully step through — not a defect
    in the reconstruction. That the abort is byte-identical between
    original and reconstruction is itself corroborating evidence the
    reconstruction is correct as far as either tool can follow it.

**Honest scope / known gap:** this verification covers ONE of the 18 files
under this tag — Desert_Fox.sid, Paul Butler's own game, one licensed copy
of the ESS driver, relocated to his game's own memory layout. The other 17
files (16 by Electronic Speech Systems' own `Cave_of_the_Word_Wizard_*`
family + `Impossible_Mission`/`Kennedy_Approach`/`Commodore_Speech_Demo`/
`Slapshot`, plus 1 by Russell Lieblich) each embed their OWN copy of the
driver at a DIFFERENT load/init address (spot-checked `Impossible_Mission.sid`'s
init routine: structurally similar — same `SEI`/set-`$0314`-`$0315`/`JSR`
setup/`CLI` shape, same IRQ-handler pattern of ack-VIC/`JSR`-real-work/`JMP
$EA81` — but NOT byte-verified). Whether these are byte-identical copies of
the same driver revision or independently-relocated/modified copies is
UNCONFIRMED — treat memory-map/entry-point facts above as specific to
Desert_Fox.sid's copy, not yet generalized across the tag. A full second
disassembly+trace of one of the company's own files (e.g.
`Impossible_Mission.sid`) is the natural next step to test that
generalization. Also unresolved: the real word-list/voice-clip DATA FORMAT
(`data_format.wavetable` etc.) was never exercised, since every subtune
that could be fully traced hit the busy-flag-skip fast path rather than
actually synthesizing a word.

## Sources

See the `sources` array — Wikipedia (2 pages), HVSC Musicians.txt, CSDb (2
SID entries), Lemon64, Commodore Zone, and the 2 related composer cards.
