# Kawasaki Synthesizer Demo Driver (Ryo Kawasaki)

```json
{
  "id": "ryo-kawasaki-demo",
  "name": "Kawasaki Synthesizer Demo Driver (Ryo Kawasaki)",
  "aliases": ["Ryo_Kawasaki"],
  "authors": ["Ryo Kawasaki"],
  "released": "1983-1984 (Sight & Sound Music)",
  "status": "verified",
  "platform": "A THIRD, separately-fingerprinted tag from already-carded [[kawasaki-synthesizer]] (jazz-fusion guitarist/guitar-synth pioneer Ryo Kawasaki's own C64 music-editor product) — this one covers files explicitly bearing the PRODUCT'S OWN NAME in their titles ('Kawasaki Synthesizer Demo,' 'Kawasaki Synthesizer Theme Song'), plausibly a self-promotional demo-disk driver distinct from the 25 plainly-titled files on the main tag. RESOLVED (2026-08-07): the tag is heterogeneous, not one driver — `Kawasaki_Synthesizer_Demo.sid` is confirmed BYTE-IDENTICAL (same engine) to the main tag's own driver, while `Prelude_by_J_S_Bach.sid` (same tag) runs a demonstrably different engine; see the Verification section and quirks. Player-ID-fingerprinted across 3 files, all by Kawasaki.",
  "csdb_release": null,

  "memory": { "load_address": "Confirmed via disassembly of 2 of 3 tagged files: `Kawasaki_Synthesizer_Demo.sid` and `Prelude_by_J_S_Bach.sid` both load $1000 (init $1000, play $1003), byte-identical PSID entry points to the main `kawasaki-synthesizer` tag's own verified file. The 3rd tagged file, `Kawasaki_Synthesizer_Theme_Song.sid`, is an RSID loading at $C000 (init $CCE0, play $0000 — self-installing IRQ, not directly comparable) and was NOT reconstructed this pass — flagged as a remaining gap.", "zero_page": "Engine-dependent (see quirks: the tag covers 2 distinct engines). `Kawasaki_Synthesizer_Demo.sid`'s engine uses NO zero page at all for its self-modified state (workspace lives at ordinary addresses $1169/$116e/$1173/$1376/$1377, all within the loaded payload). `Prelude_by_J_S_Bach.sid`'s engine uses $C5 and $FD as zero-page scratch/waveform-select bytes.", "layout": "Both reconstructed files are a single contiguous code+data block from the PSID load address to end of file; code is a small fraction of the total (28.0% for Demo.sid, 4.2% for Prelude.sid — the rest is song/pattern data)." },
  "entry": { "init": "Confirmed via disassembly: $1000 on both PSID files (Demo.sid, Prelude.sid).", "play": "Confirmed via disassembly: $1003 on both PSID files, dispatching through a self-modified JMP vector at $1004/$1005 that different engine states repoint via hardcoded LDA #<lo>/LDA #<hi> immediate pairs (never `<label`/`>label` relative addressing) — see quirks for why this makes the driver non-relocatable." },
  "speed": "IRQ-driven, standard 1x/frame play call (no evidence of multi-speed in either reconstructed file's trace).",
  "data_format": { "order_list": "Engine-dependent, TODO for both (not needed to reach byte/trace-exactness — table addresses are consumed via straightforward `LDA <table>,X` indexed reads, but which table encodes which musical concept was not mapped this pass).", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "Demo.sid's engine DOES write the filter (filter_freq_hi, filter_mode_volume, filter_res_control all appear in a 400-frame trace) — the original 2026-07-15 pass's '0 filter writes in a 50-frame sample' finding was a window-length artifact, not a property of the engine; the filter writes are gated by a CIA1 TOD-clock condition (`LDA $DC09 / CMP #$05 / BEQ ...`) that a short trace window can miss entirely." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["kawasaki-synthesizer"], "same_effect_encoding_as": [] },

  "quirks": [
    "A GENUINELY THIRD (not just second) FINGERPRINTED KAWASAKI TAG WAS FOUND, a new discovery for this KB: this project's own DeepSID-dump snapshot shows Kawasaki has 28 total files across THREE separate player tags, not two — the already-carded `Kawasaki_Synthesizer` (25 files, plainly-named tunes like '12_8,' 'Blues_F,' 'Calypso'), THIS tag `Ryo_Kawasaki` (3 files, all explicitly bearing the product's own branding in their titles), and a fourth, entirely UNCARDED tag `Kawasaki_Rhythm_Rocker` (1 file, 'Satellite_Station.sid') — matching the 'FOUR C64 programs' Wikipedia already credits him with authoring (Kawasaki Synthesizer, Kawasaki Rhythm Rocker, Kawasaki Magical Musicquill, Kawasaki MIDI Workstation), flagged as a lead for a future card.",
    "RESOLVED (2026-08-07, was previously flagged unresolved): the identical-entry-points puzzle is now settled by direct disassembly, and the answer is 'both, depending on the file' — the `Ryo_Kawasaki` tag is NOT one uniform driver. `Kawasaki_Synthesizer_Demo.sid`'s code is BYTE-IDENTICAL (confirmed subroutine-for-subroutine, e.g. the voice-gate-on utility is an exact byte match) to the main `kawasaki-synthesizer` tag's own verified file (`12_8.sid`) — same engine, genuinely the SAME driver, just separately fingerprinted (plausibly on a data-content signature, not a code signature). But `Prelude_by_J_S_Bach.sid` — tagged under this SAME `Ryo_Kawasaki` tag — uses a DEMONSTRABLY DIFFERENT engine: different self-modification idiom (a block-copy loop and zero-page $C5/$FD waveform scratch bytes vs. Demo.sid's ordinary-memory DEC-countdown slides), different register-write order, and a raw byte-for-byte comparison of the two files' payloads at matching offsets is only 9.55% identical — squarely in gotcha 4's 'genuinely different code' noise range, not a relocation/alignment artifact. This is the same 'one tag, two+ engines' pattern documented elsewhere in this KB (see sid-player-verify's own lessons_learned on marco-scheepers) applied to Kawasaki's own catalogue.",
    "AN INTERNET ARCHIVE DISK IMAGE TITLED EXACTLY 'Kawasaki Synthesizer Demo (1984)(Ryo Kawasaki)' EXISTS — a single-sided 174,848-byte D64, distinct in size from the two-disk Performer/Composer main product already documented on [[kawasaki-synthesizer]]'s card. Its metadata gave no directory listing, so it could NOT be directly confirmed to contain these exact 3 files, but it strongly suggests a genuine, separately-distributed standalone promotional demo disk.",
    "'PRELUDE BY J S BACH' (the tag's third file) IS CONFIRMED TO EXIST under this tag via its own CSDb SID entry (id=16523), consistent with demo material showing off the product's range on a classical piece — but no further description exists anywhere beyond its bare existence.",
    "A DISCREPANCY WITH WIKIPEDIA'S OWN 'KAWASAKI SYNTHESIZER' ARTICLE WAS FOUND AND FLAGGED, not smoothed over: Wikipedia states the PRODUCT bundled a techno track called 'Satellite Station' — but this project's own data instead tags that exact file under the separate, uncarded `Kawasaki_Rhythm_Rocker` tag, NOT under this tag or the main `Kawasaki_Synthesizer` tag. Possible explanation: Wikipedia conflated two of his four separate C64 products, or the file genuinely reflects engine reuse across products — left explicitly unresolved. Already noted as a quirk on [[kawasaki-synthesizer]]'s own card, updated in this same batch.",
    "NO CSDb RELEASE SPECIFICALLY CATALOGS A 'DEMO DISK' BUNDLE — all three files exist only as standalone HVSC-sourced CSDb SID entries (ids 16518, 51334, 16523), none linked to a formal release page. No SIDId `byTag` match found for any of the three Kawasaki tags.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[kawasaki-synthesizer]] (same composer, CONFIRMED shared driver for at least the Demo.sid file — see the RESOLVED quirk above; cross-referenced in both directions, that card should be updated to reflect this). No other known relationship found to any composer/tool already in this KB (same finding as the main card — none found).",
    "Demo.sid's engine is NOT RELOCATABLE to any address other than its native load address, confirmed directly from the disassembly rather than inferred: its play-routine dispatch is a self-modified JMP vector at $1004/$1005, repointed at 6+ separate call sites, and every single site writes BOTH the low byte AND the high byte of the new target as hardcoded hex immediates (`LDA #$8b / STA $1004` / `LDA #$11 / STA $1005`, etc.) — never `LDA #<label`/`LDA #>label`. A relocation-invariance control (reassembling the same disassembly at a different base and re-tracing) was attempted at both a page-aligned (+$2000) and non-page-aligned (+$2037) delta and failed identically at both (0 SID writes over the whole trace window) — this is the expected, structural result for a driver whose vector patches hardcode the full absolute address, not a defect in the reconstruction; the native-address byte/trace-exact match is the real evidence here (see Verification)."
  ],
  "sources": [
    "Existing KB card: knowledge/players/kawasaki-synthesizer.md (the main 25-file tag, same author, updated in this same batch)",
    "CSDb sid id=16518 (Kawasaki Synthesizer Demo, traced file): https://csdb.dk/sid/?id=16518",
    "CSDb sid id=51334 (Kawasaki Synthesizer Theme Song, identical entry points to id=16518): https://csdb.dk/sid/?id=51334",
    "CSDb sid id=16523 (Prelude by J S Bach): https://csdb.dk/sid/?id=16523",
    "CSDb release id=135444 (generic 'Kawasaki Synthesizer' crack, undated, does not explicitly reference these 3 files): https://csdb.dk/release/?id=135444",
    "Internet Archive — 'Kawasaki Synthesizer Demo (1984)(Ryo Kawasaki)' D64 disk image: https://archive.org/details/d64_Kawasaki_Synthesizer_Demo_1984_Ryo_Kawasaki",
    "Wikipedia — Kawasaki Synthesizer (the 'Satellite Station' bundling discrepancy): https://en.wikipedia.org/wiki/Kawasaki_Synthesizer",
    "Local dataset: data/composers/ryo-kawasaki.json (DeepSID dump — confirms the 3-tag, 28-file total split)",
    "Local dataset: 3 files tagged Ryo_Kawasaki, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ryo_Kawasaki` tag is a separately-fingerprinted DeepSID tag covering
3 files explicitly bearing the product's own name. Disassembly now shows
it is NOT one uniform driver: `Kawasaki_Synthesizer_Demo.sid` shares the
exact same engine as the already-carded [[kawasaki-synthesizer]] tag
(byte-identical subroutines, confirmed), while `Prelude_by_J_S_Bach.sid`
— tagged identically — runs a demonstrably different engine. A third
file, `Kawasaki_Synthesizer_Theme_Song.sid`, is an RSID with a different
memory layout entirely and was not examined this pass.

## Quirks & gotchas

See the `quirks` array. Two are now resolved rather than open: the
previously-unconfirmed "is this architecturally distinct from
kawasaki-synthesizer?" question (answer: it depends on the file — see
Overview), and the driver's confirmed non-relocatability (every
self-modified play-vector patch hardcodes a full absolute address as two
immediate bytes, never a relative `<label`/`>label`). Still open: the
**third fingerprinted Kawasaki tag discovery** (plus a fourth, uncarded
one) and the genuine, unresolved **discrepancy with Wikipedia's own
article** about which product bundled 'Satellite Station'.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). `SIDdecompiler`
could only trace 31% of `Kawasaki_Synthesizer_Demo.sid` (its dynamic
30000-play-call trace never satisfies a CIA1-TOD-clock-gated conditional
branch at `$11CF`/`$11DA`, so a whole alternate play routine plus the
filter-writing code path is classified `; Unreferenced data` and silently
dropped from the reassembly — the CIA TOD hardware counter is evidently
not modeled in the tool's emulation). This was worked around with
`scripts/dev/dis6502.js`, a purely-static recursive-descent 6502
disassembler already in this repo (see its own lesson 98/99 provenance):
being static rather than trace-based, it follows both sides of every
conditional branch regardless of what value the branch condition would
actually take at runtime, and found essentially all the real code
(28.0% of the file, vs. SIDdecompiler's incomplete partial trace),
producing a full-file, byte-exact reassembly. `Prelude_by_J_S_Bach.sid`
was disassembled the same way, cleanly, on the first attempt (4.2% code).

## Verification

**Byte-exact + trace-exact reconstruction of 2 of 3 tagged files
(2026-08-07) — `status: verified`.**

| File | Load/init/play | Byte-diff (full payload) | Trace-diff |
|---|---|---|---|
| `Kawasaki_Synthesizer_Demo.sid` | `$1000`/`$1000`/`$1003` | **100.000000%** (2858/2858 bytes) | **Exact** — 400 frames, 721 register writes, 0 divergences (`sidm2-sid-trace.exe`, independent of `SIDdecompiler`) |
| `Prelude_by_J_S_Bach.sid` | `$1000`/`$1000`/`$1003` | **100.000000%** (8192/8192 bytes) | **Exact** — 400 frames, 322 register writes, 0 divergences |

Both disassembled with `scripts/dev/dis6502.js` (a static recursive-descent
disassembler; see Disassembly notes for why `SIDdecompiler` alone was
insufficient for Demo.sid), reassembled with 64tass, byte-diffed against
the pristine PSID payload, and trace-diffed against the untouched
original `.sid` (not the reassembly self-compared — a real, independent
verification, not the tautological case `SIDdecompiler -r` warns about
in this project's own tooling docs). The Demo.sid trace explicitly
exercises the filter-writing code path (filter_freq_hi,
filter_mode_volume, filter_res_control all appear and match exactly),
resolving the earlier 2026-07-15 pass's "0 filter writes" observation as
a short-trace-window artifact, not a real absence.

A relocation-invariance control (reassembling Demo.sid's disassembly at
a different base and re-tracing, meant to rule out a tautological match)
was attempted at both a page-aligned (+$2000) and non-page-aligned
(+$2037) delta and failed identically at both — 0 register writes over
the full trace window either way. This is NOT a reconstruction defect:
direct inspection of the disassembly shows the play-vector dispatch is
repatched at 6+ sites via hardcoded `LDA #$xx`/`LDA #$xx` immediate
pairs for both the low AND high byte of the jump target (never
`#<label`/`#>label`), meaning the original 1983/84 driver genuinely
cannot run anywhere except its native load address — the relocation
control is structurally inapplicable to this driver, not a gap in the
byte/trace-exact native-address evidence above.

**Remaining gap, explicitly not closed:** `Kawasaki_Synthesizer_Theme_Song.sid`
(RSID, load `$C000`, init `$CCE0`, play `$0000` — self-installing IRQ
vector, a structurally different format from the other two PSID files)
was not disassembled or traced this pass. A future pass should determine
which of the two engines (if either) it shares.

## Sources

See the `sources` array — the related kawasaki-synthesizer card, CSDb
(3 entries), Internet Archive, Wikipedia, and local dataset cache. This
pass additionally used `scripts/dev/dis6502.js` (static disassembler,
already in this repo), 64tass, and `sidm2-sid-trace.exe`
(`C:\Users\mit\claude\c64server\SIDM2\tools\`) against the local HVSC copy
at `MUSICIANS/K/Kawasaki_Ryo/`.
