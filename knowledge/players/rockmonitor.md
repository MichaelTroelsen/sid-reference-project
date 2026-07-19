# Rock Monitor

```json
{
  "id": "rockmonitor",
  "name": "Rock Monitor",
  "aliases": ["DUSAT/RockMon2", "DUSAT/RockMon3", "DUSAT/RockMon3h", "DUSAT/RockMon4", "DUSAT/RockMon5.0", "DUSAT/RockMon5.1", "Rockmonitor"],
  "authors": ["Oscar Giesen (OPM) — code", "Marco Swagerman (MC) — music/demosongs"],
  "released": "1987 (Rockmonitor II, 11 Apr 1987) – 1988 (V5)",
  "status": "verified",
  "platform": "Native C64 music editor+player with digi/sample (digi-drum) support, by The Dutch USA-Team (DUSAT). Closed scene tool.",
  "csdb_release": 20664,

  "memory": {
    "load_address": "VARIES PER BUILD/RELEASE, confirmed by directly reading 8 real HVSC files' PSID headers (not TODO/guessed): $3ff8 (OPM/Rockmonitor_3.sid, init=load), $7fdd (MC/Rockmonitor_2.sid, init=load), $7d00/init $9fd0 (MC/Rockmonitor_4.sid), $8414/init $c000 (OPM/Rockmonitor_5_Demosong.sid), $0d00 (MC/Rockmonitor_5_Intromusic.sid, init=load — the one file this card's verification is based on), $5100/init $9fd0 (Amaze/Rockmon_IV_plus_Drum_Sample_Demo.sid), $80cd (SIDwave/First_Rockmon.sid), $8100/init $c000 (SIDwave/Rockmon_Tech.sid, The_Future_Cracker/Rockmonitor_VIII.sid), $80f8 (The_Future_Cracker/Rockmonitor_5.sid, The_Insomniac/Rockmonitor_6.sid). UNLIKE SoundMonitor (fixed $C000-$CE26 player image across every real file, only song data address varies), RockMonitor's whole player+data image is relocated differently per build/release — a real architectural difference from its ancestor, not just a per-rip packing artifact.",
    "zero_page": "CONFIRMED by disassembly of the one traceable build (Rockmonitor_5_Intromusic.sid): $0F-$14 (6 bytes: z0f/z10 form a live 16-bit pointer PAIR — `sta z0f`/`sta z10` then `lda (z0f),Y` — used by the per-voice step/row-data fetcher; z11-z14 are scratch). Structurally this is the SAME role as SoundMonitor's $A5-$AC live pointer-pair-per-voice ZP usage (see soundmonitor.md), just at a different absolute address — a genuine structural confirmation of the derives_from edge, not merely a documented claim. Whether other RockMon builds use the same $0F-$14 range is UNCONFIRMED (only one build was disassemblable — see Verification).",
    "layout": "CONFIRMED for the one traced build only (addresses below are THIS BUILD's relocated addresses, not necessarily stable across versions — see load_address). Per-voice pointer table (3 entries, analogous to SoundMonitor's BAR_LO/BAR_HI): lo=$1327, hi=$132b, pointing at each voice's row/pattern read position (e.g. voice 0 -> $109c). A second, 8-entry lo/hi pointer table at $132f/$1337 (this short intro tune only uses all 8 slots for its own short pattern-position data, e.g. $133f/$1a70/$1afe/...) — plausibly analogous to SoundMonitor's shared ROW_HDR_LO/HI table, though with far fewer real-world entries observed given the tune's length. Instrument records at $14aa, 8 bytes/record (index = z11*8, `asl asl asl`) — SMALLER than SoundMonitor's 24-byte records, a real format difference: byte0->$D405 (AD), byte1->$D406 (SR), byte2-7 drive further per-frame engine state (filter/pulse/waveform-ish working vars at $115c/$1156/$1138/$1159) but exact per-byte semantics NOT fully re-derived here — TODO. Filter cutoff written to $D416/$D417, gated by a per-step flag bit ($40) — same architectural role as SoundMonitor's per-frame filter-sweep dispatcher."
  },
  "entry": {
    "init": "CONFIRMED for Rockmonitor_5_Intromusic.sid only: $0d00 (== load address for this build). Other builds' init addresses vary — see load_address (some builds' init differs from their own load address, e.g. Rockmonitor_4.sid: load $7d00, init $9fd0).",
    "play": "CONFIRMED for Rockmonitor_5_Intromusic.sid only: $0de3, called directly (not IRQ-driven) — a `lda #$02`/`dec play+1` self-modified countdown gates part of the per-frame engine. EVERY OTHER real HVSC RockMon file sampled (10 of 11) is an RSID with PSID play address $0000 (IRQ-driven, matches this card's pre-existing VERIFICATION LIMITATION quirk) — this project's headless init+play trace pipeline cannot drive those without live IRQ emulation (RetroDebugger), which was not used this pass. So the true 'per-frame' entry point for the IRQ-driven builds is UNKNOWN/TODO."
  },
  "speed": "TODO — not independently re-derived for this pass; the one traced build's countdown at play+1 ($0de4, resets to $02/$03 alternately at l0deb) plausibly gates a per-N-frames tempo divider similar in spirit to SoundMonitor's row-tempo-divider, but this was not confirmed to the same depth as SoundMonitor's card.",

  "data_format": {
    "order_list": "Per-voice pointer table (3 entries lo/hi, $1327/$132b in the one traced build) analogous to SoundMonitor's BAR_LO/BAR_HI — CONFIRMED present/functioning by disassembly, exact song-position semantics not fully re-derived.",
    "patterns": "Per-voice step data read via a live ZP indirect pointer `(z0f),Y` (see zero_page) — a (ctrl,data)-style byte stream broadly similar in shape to SoundMonitor's bar-step pairs, with control bits ($1f/$20/$40/$80 masks seen in the disassembly) gating instrument-select/glide/arpeggio/gate-like behavior — CONFIRMED present, exact bit-for-bit meaning NOT independently re-derived to SoundMonitor-card confidence level. TODO for a deeper pass.",
    "instruments": "8-byte records at $14aa (this build's relocated address) indexed by instrument*8 — CONFIRMED smaller than SoundMonitor's 24-byte records (real format difference, not just an addressing accident): byte0->AD ($D405), byte1->SR ($D406) confirmed; byte2-7 TODO (drive filter/pulse/waveform working state but not individually decoded).",
    "wavetable": "TODO — not confirmed in this pass (this build's traced code paths didn't clearly expose a separate wavetable structure).",
    "pulsetable": "TODO — some pulse-adjacent nibble-split working state observed ($1138/$1159, instrument byte4 derived) but not confirmed as a full 'pulse table' comparable to SoundMonitor's.",
    "filtertable": "Global (not per-instrument) filter cutoff write to $D416/$D417 confirmed, gated by a per-step control-byte bit ($40) — same architectural role as SoundMonitor's per-frame cutoff-sweep dispatcher, exact table/curve shape not re-derived."
  },
  "effects": {
    "encoding": "Per-step control-byte bitfield (masks $1f/$20/$40/$80 observed in the disassembly, playing an equivalent structural role to SoundMonitor's own data-byte flag bitfield) — CONFIRMED present, NOT decoded bit-by-bit to the same confidence as SoundMonitor's card. TODO for a deeper pass.",
    "commands": {}
  },

  "edges": {
    "derives_from": ["soundmonitor"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "LINEAGE: Rock Monitor is The Dutch USA-Team's modification of Chris Hülsbeck's SoundMonitor (1986), adding digi/sample (digi-drum) support — hence the derives_from: soundmonitor edge. The evidence indicates DUSAT's Rock Monitor IS that SoundMonitor-with-samples derivative (not a separate second lineage). [SoundMonitor lineage source 404'd on direct fetch — cited via search excerpt; verify.]",
    "Same team (DUSAT: OPM=Oscar Giesen code, MC=Marco Swagerman music) later made Music Assembler (1989) — MA is a separate/successor product, NOT a Rock Monitor version.",
    "DUSAT original version line: Rockmonitor II (id 20664, 11 Apr 1987), III (id 33038), IV (id 20676, Jul 1987), V5 (id 10632, May 1988; '100%' fix id 122393). Many third-party cracks/hacks exist (V5.3, V6, V7 by other groups) — NOT DUSAT releases. The tags RockMon2-5.1 map onto this II-V5 line (a '5.1' is likely a minor/cracked build).",
    "Replay internals (memory map, ZP, init/play, data format, effect set, digi-drum playback mechanics) all UNKNOWN publicly. As a SoundMonitor derivative, its core is EXPECTED to resemble SoundMonitor's routine — TODO: verify by disassembly + comparison.",
    "709 files across 163 composers (across all DUSAT/RockMon* tags incl. RockMon3h) — a broadly adopted tool (wide composer spread, unlike the concentrated Polish/Norwegian editors in this batch).",
    "'DUSAT/RockMon3h' (added 2026-07-16, 62 files/10 composers, uncarded rank #17 in COVERAGE.md before this update) is a DISTINCT raw player tag from 'DUSAT/RockMon3' (csdb release id 33038) — same numeric series but not string-identical, so it never auto-grouped with the other RockMon tags. What the 'h' suffix denotes (a hack/crack build, a relocated/patched copy, or a DUSAT point-release) is UNCONFIRMED — no CSDb release, SIDId entry, or doc names 'RockMon3h' specifically; CSDb only has the plain 'Rockmonitor III' (ids 33038 and a near-duplicate 131822 credited to 'Dutch USA-Team and The Wild Boys', which could plausibly be the 'h' source but this is NOT confirmed, so left as a lead not a fact). Filed under this card (not a separate id) because it is clearly the same RockMon3 tool line by naming/output, not a different player.",
    "RockMon3h is HEAVILY CONCENTRATED on one composer: 50 of its 62 files (81%) are Alexander Ney (Taxim/B.L.A.); the other 10 files spread across 9 other composers (Anzac Zeus, Dr_Ali_and_Joker, PST, Radon, Red_Duijckaerts_Roger x4, Reverb, Storm, Thomas Detert, Tonid). That concentration is the signature of a personal or near-personal build/copy rather than a widely-redistributed release — consistent with 'h' marking a one-off variant.",
    "VERIFICATION LIMITATION (2026-07-13): a traced HVSC RockMon file is an RSID (IRQ-driven; PSID play address = $0000), so a headless init+play trace can't drive it (0 writes when play is called directly). Verifying RockMon needs IRQ-servicing emulation, not a direct play call — noted for anyone attempting a trace pass.",
    "VERIFIED 2026-07-19: of 11 real HVSC RockMon files surveyed (CSDb/DUSAT-author folders OPM and MC, plus 9 third-party rips), exactly ONE — `MUSICIANS/M/MC/Rockmonitor_5_Intromusic.sid`, itself a genuine DUSAT-original build (disassembly's own embedded author tag reads 'Marco Swagerman (MC)') — is a plain PSID with a direct (non-IRQ) play address ($0de3); the other 10, including every file with 'drum'/'sample' in its own name, are RSID with play address $0000, confirming and quantifying the pre-existing VERIFICATION LIMITATION quirk rather than just restating it. This means the digi-drum sample-playback mechanism specifically — RockMonitor's one genuinely NEW feature vs. SoundMonitor — was NOT observed in this pass: the one traceable file never triggers it (no repeated-$D418 digi-style writes appear anywhere in its disassembly, even re-run with -C1 speculative mode and a much longer -t), and no other real file was reachable without live IRQ emulation. Left as an explicit, named TODO rather than guessed.",
    "SIDdecompiler's default self-modified-code trace window (-t 30000) drifted 33 of the traced build's 3,674 payload bytes away from their pristine cold-start values — the same 'drifted working-storage table' pattern this project has hit repeatedly on other players (agent lessons_learned entries 10/16/17/20/29/32). One byte ($0de4, a self-modified countdown operand) is confirmed DEAD by direct patch-isolation testing (patching it alone does nothing; patching everything else fixes the trace completely) — the other 32 (a per-voice 3-wide working-storage block at $10f5-$115b) are the entire real cause of the divergence. See knowledge/players/reconstructions/rockmonitor.md for the exact byte table and the binary-search method used to separate the two."
  ],
  "sources": [
    "CSDb Rockmonitor II (1987, first DUSAT release): https://csdb.dk/release/?id=20664",
    "CSDb Rockmonitor V5 (1988, credits): https://csdb.dk/release/?id=10632",
    "SoundMonitor lineage (Rock Monitor = SoundMonitor + samples): https://www.vgmpf.com/Wiki/index.php?title=Soundmonitor (and namelessalgorithm.com SoundMonitor blog — verify, 404'd on direct fetch)",
    "Dutch USA-Team group: https://demozoo.org/groups/39271",
    "CSDb Rockmonitor III (plain, id 33038): https://csdb.dk/release/?id=33038; possible related/duplicate release credited to Dutch USA-Team and The Wild Boys (id 131822): https://csdb.dk/release/?id=131822 — lead only, NOT confirmed as the 'h' source",
    "Local dataset: 709 files tagged DUSAT/RockMon2-5.1 + RockMon3h across 163 composers (see knowledge/COVERAGE.md; RockMon3h itself was rank #17 uncarded, 62 files/10 composers, computed from data/composers/*.json). SIDId has entries for RockMon2/RockMon3/RockMon4/RockMon5.0/RockMon5.1 (author Oscar Giesen (OPM) throughout) — RockMon3h specifically is the only tag in this family with no SIDId entry.",
    "This project's own 2026-07-19 disassembly/byte-diff/trace-diff pass: SIDdecompiler + 64tass on `MUSICIANS/M/MC/Rockmonitor_5_Intromusic.sid` (real HVSC file, DUSAT-original, author-confirmed in the disassembly itself), byte-diffed and sidm2-sid-trace register-write-diffed against the original — see Verification section and knowledge/players/reconstructions/rockmonitor.md for the exact patch table."
  ]
}
```

## Overview

Rock Monitor (Rockmonitor) is a native C64 music editor+player by **The Dutch
USA-Team** (OPM = Oscar Giesen, code; MC = Marco Swagerman, music), first
released as Rockmonitor II in April 1987. It is a **modification of Chris
Hülsbeck's [SoundMonitor](soundmonitor.md) with added digi-drum/sample
support** — the same team's later, separate tool being
[Music Assembler](music-assembler.md). 709 files here across 163 composers,
across six raw tags: RockMon2, RockMon3, RockMon3h, RockMon4, RockMon5.0,
RockMon5.1. `RockMon3h` (62 files) is a same-line-but-string-distinct tag from
`RockMon3` — 81% of its files belong to one composer (Alexander Ney/Taxim),
suggesting a personal or near-personal variant/copy rather than a broadly
redistributed DUSAT release; what exactly the 'h' denotes is unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **SoundMonitor derivation** (the
graph edge), the **DUSAT team link to Music Assembler** (sibling tool, not a
version), the version-numbering caveat (DUSAT originals II–V5 vs many
third-party cracks), and the **RockMon3h tag** (added 2026-07-16): a
same-line-but-ungrouped raw tag, 81% concentrated on one composer (Taxim),
whose 'h' suffix meaning is unconfirmed. Internals now CONFIRMED for one real
build (see Verification) and structurally consistent with the SoundMonitor
derivation (same live-ZP-pointer-pair-per-voice architecture, same
per-frame filter-cutoff-write pattern, smaller per-instrument records) —
the digi-drum sample mechanism specifically remains unobserved/TODO (the one
traceable file never exercises it, and every other real file is RSID/
IRQ-driven and out of reach of this project's current headless pipeline).

## Disassembly notes

**Disassembled/reassembled/traced 2026-07-19** against the one real HVSC
RockMon file that is a plain PSID with a direct play address:
`MUSICIANS/M/MC/Rockmonitor_5_Intromusic.sid` (load/init `$0d00`, play
`$0de3`, payload 3,674 bytes; disassembly's own embedded comment confirms
author "Marco Swagerman (MC)" — a genuine DUSAT-original, not a crack).
`SIDdecompiler -a3328 -z -d -c -v2` (3328 decimal = `$0d00`) — the `-v2`
map's own "Start:" address matched the PSID load address exactly, so no
relocation-shift gotcha (unlike SoundMonitor's `-a704` case) applied here.

Structural findings, all confirmed directly in the reassembled disassembly
(not copied from SoundMonitor's card): a live ZP pointer pair at $0F/$10
(`z0f`/`z10`) used with `(z0f),Y` indirect addressing for per-voice
step/row-data fetch — the SAME architectural role as SoundMonitor's
$A5-$AC pointer pairs, just relocated; a 3-entry lo/hi per-voice pointer
table ($1327/$132b) analogous to SoundMonitor's BAR_LO/BAR_HI; an 8-entry
lo/hi pointer table ($132f/$1337) analogous in shape to SoundMonitor's
shared row-header table; 8-byte-per-instrument records at $14aa (vs.
SoundMonitor's 24 bytes — byte0/byte1 confirmed as direct AD/SR register
values, byte2-7 not individually decoded); a per-step control-byte
bitfield with the same overall shape as SoundMonitor's (masks $1f/20/40/80
seen, not bit-by-bit decoded); a global filter-cutoff write to
$D416/$D417 gated by a control-byte flag, same role as SoundMonitor's
per-frame sweep dispatcher. The digi-drum sample-playback mechanism was
NOT found anywhere in this file's disassembly (no repeated-$D418 write
pattern even under a much longer `-t200000 -C1` speculative re-run) —
this tune apparently never triggers it; every other real RockMon file
(including every filename mentioning "drum"/"sample") is RSID/IRQ-driven
and unreachable by this project's headless trace pipeline this pass.

## Verification

**`status: verified` (2026-07-19), scoped to ONE real file.**
Disassembled with `SIDdecompiler.exe -a3328 -z -d -c -v2`, reassembled with
`64tass`, byte-diffed against the original PSID payload, and register-write
traced with `sidm2-sid-trace.exe` against `MUSICIANS/M/MC/Rockmonitor_5_Intromusic.sid`:

- Raw reassembly vs. pristine payload: 33/3674 bytes differ (99.1018%) —
  clustered at one self-modified byte ($0de4) and a 32-byte per-voice
  working-storage block ($10f5-$115b), both `-v2`-map read+write-marked.
- Binary-search patch test (see `knowledge/players/reconstructions/rockmonitor.md`
  for method + full byte table): patching $0de4 ALONE does not fix the
  trace divergence; patching everything EXCEPT $0de4 makes the 200-frame
  register-write trace fully exact. This confirms $0de4 is genuinely dead
  workspace and the 32-byte block was the real, load-bearing cause — not
  assumed from the `-v2` map alone (see agent lessons_learned entry 16's
  warning against that assumption).
- Patched reassembly vs. pristine payload: **99.9728% byte-exact** (1/3674
  diffs, at $0de4 only, confirmed dead) and **trace-exact** (`diff` reports
  zero SID-register difference over 200 frames of register writes, beyond
  the cosmetic filename/cold-start-dump lines).

This meets the project's `verified` bar (register-write match, with the one
byte-level divergence explicitly localized, isolated by direct patch-test —
not just pattern-matched against the `-v2` map — and explained, consistent
with `laxity-newplayer`'s ~99.9% and `soundmonitor`'s per-file precedent).

**Scope caveat (load-bearing, do not drop when reading this card):** this
verification rests on exactly ONE real file, because it is the only real
HVSC RockMon file that isn't RSID/IRQ-driven — see the quirks array's
2026-07-19 entries for the full 11-file survey. The memory/ZP/entry-point
facts above describe THIS build only; other versions' load addresses are
independently confirmed to differ (see `memory.load_address`), so whether
they share this build's ZP usage, table formats, or instrument-record size
is UNCONFIRMED. The digi-drum mechanism — RockMonitor's one genuinely new
feature vs. SoundMonitor — remains completely unverified; closing that gap
needs either a real PSID-format file that triggers it, or live IRQ
emulation (RetroDebugger) against one of the 10 RSID files.

Exact byte-level patch table (durable, not scratchpad):
`knowledge/players/reconstructions/rockmonitor.md`.

## Sources

See the `sources` array — CSDb (Rockmonitor II & V5), the SoundMonitor lineage
references, and Demozoo for the Dutch USA-Team. SIDId has entries for
RockMon2/3/4/5.0/5.1 (author Oscar Giesen (OPM)); only RockMon3h lacks one.
This project's own 2026-07-19 disassembly/byte-diff/trace-diff pass against
`Rockmonitor_5_Intromusic.sid` — see Verification section above and
`knowledge/players/reconstructions/rockmonitor.md`.
