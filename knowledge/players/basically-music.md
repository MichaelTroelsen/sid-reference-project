# Basically Music (Greg Tarr)

```json
{
  "id": "basically-music",
  "name": "Basically Music (Greg Tarr)",
  "aliases": ["Basically_Music"],
  "authors": ["Greg Tarr"],
  "released": "1988 (Compute!'s Gazette, Vol. 6 No. 3, Issue 57, March 1988, pp. 72-73)",
  "status": "verified",
  "platform": "A magazine type-in tool, 'Basically Music: A Complete Composition Tool For The 64' by Greg Tarr — despite the punning name, written ENTIRELY IN MACHINE LANGUAGE (typed in via Compute!'s MLX entry program), which adds new BASIC keywords (MUS, ATT, DEC, SUS, REL) letting BASIC programs drive the SID chip without manual PEEK/POKE, and can compile songs into standalone machine-language files that play in the background. Player-ID-fingerprinted across 10 files, all by hobbyist Chester Claff — a magazine-tool user, not a demoscene participant.",
  "csdb_release": null,

  "memory": { "load_address": "All 10 HVSC files: load $7d2b, init $7d4a, play $7d5a (from PSID header + confirmed by disassembly). MLX typed-in load range per the original article: $0801-$2000, saved as 'BAS-MUS' — the standalone compiled songs relocate the player+data to $7d2b.", "zero_page": "$fb/$fc (little-endian) = 16-bit pointer walking the compiled song byte-stream. NOTE: init does NOT initialize it — it is set by the host BASIC environment or by a reached $01 'restart' command (pointer <- song base, $7f00 in Dill_Pickles). This uninitialized-pointer behavior, not blank note fields, is the true cause of the sparse natural-PSID trace (see quirks/Verification).", "layout": "$7d2b-$7d43: 25-byte SID-init table copied verbatim to $d400-$d418 by init. $7d45-$7d59: small self-modified working-storage block (tempo counters $7d58/$7d59, tempo reload $7d45, per-voice waveform-control bytes $7d47/48/49, cold value $20=sawtooth). $7e07/$7e08: note-freq scratch. Song data at $7f00 (Dill_Pickles)." },
  "entry": { "init": "$7d4a — copies 25-byte SID-init table ($7d2b) to $d400-$d418; does NOT set the $fb/$fc song pointer.", "play": "$7d5a (called in IRQ) — two-level tempo divider (dec $7d59 inner, dec $7d58 outer, reload from $7d45), then jsr $7d75 on tick." },
  "speed": "1x (single play call per frame); internal tempo via the $7d58/$7d59 two-level divider.",
  "data_format": { "order_list": "Single linear compiled byte-stream (no separate order list); a $01 'restart' command loops the pointer back to the song base.", "patterns": "Note rows are inline in the stream. Row-type flag = bit0 of the first byte: bit0=0 -> 4-byte note row (voice1, voice2, voice3, duration); bit0=1 -> command escape. Each voice byte: low nibble = note index into freq tables ($7e09 hi / $7e1b lo), high nibble = octave (that many lsr/ror right-shifts of the base freq); index $00 = rest (no write), $ff = tie (gate held, no re-trigger). Pointer += 4 per note row.", "instruments": "Set inline via command $03 (12-byte block: tempo $7d45/$7d46, attack/decay $d405/$d40c/$d413, sustain/release $d406/$d40d/$d414, per-voice waveform-control $7d47/48/49) and command $05 (7-byte block: pulse-width hi $d403/$d40a/$d411, lo $d402/$d409/$d410). Matches the article's ATT/DEC/SUS/REL keywords.", "wavetable": "N/A — no wavetable; waveform is a single control byte per voice set by command $03.", "pulsetable": "N/A — no pulse table; pulse-width set directly by command $05.", "filtertable": "N/A confirmed by disassembly — the engine has NO filter writes anywhere ($d415-$d418 written only once, from the init table). Filter control is a genuine engine limitation, not a per-song choice." },
  "effects": { "encoding": "Command escape (first byte bit0=1); the byte value selects the command.", "commands": { "01": "Restart — song pointer ($fb/$fc) <- song base ($7f00).", "03": "Set tempo + ADSR + per-voice waveform (12-byte block).", "05": "Set per-voice pulse width (7-byte block)." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SPARSE NATURAL-PSID TRACE ROOT CAUSE CORRECTED BY DISASSEMBLY (2026-07-24): it is NOT blank note fields (the earlier article-based guess) — it is that `init` ($7d4a) does NOT initialize the $fb/$fc zero-page song pointer; it only copies the 25-byte SID-init table to $d400. The standalone player relies on its host BASIC environment (or a reached $01 'restart' command) to set $fb/$fc to the song base ($7f00 in Dill_Pickles). Under a bare PSID init->play call the pointer is uninitialized, so playback reads garbage and produces only a few stray writes — a real host-integration artifact, not a probe bug. PROOF: a trace harness that sets $fb/$fc=$7f00 before calling init yields full playback (Dill_Pickles 493 writes / 900 frames, Kitten 912, Jelly_Roll 528, Von_Meinem 253), all register-write-identical between original and reconstruction. The article's own MUS command semantics (a blank note field leaves that voice untouched, no register write) are still accurate at the command level — quoted from Compute!'s Gazette Issue 57, March 1988 — they just were not the cause of the observed sparseness.",
    "WRITTEN ENTIRELY IN MACHINE LANGUAGE despite the pun name suggesting BASIC — typed in via Compute!'s MLX machine-language entry program (load range $0801-$2000, saved as 'BAS-MUS'). Adds new BASIC keywords (MUS, ATT, DEC, SUS, REL) so BASIC programs can drive the SID chip without manual register PEEKs/POKEs. Also supports COMPILING songs into small standalone machine-language files that play in the background while other programs run — almost certainly the mechanism behind the standalone `.sid` files carrying this tag today. Explicit target audience per the article: 'designed to help programmers and nonprogrammers alike.'",
    "CHESTER CLAFF is confirmed a magazine-tool hobbyist, NOT a demoscene participant: HVSC lists only a bare 'Claff, Chester - USA' entry; CSDb has no scener/group profile for him at all. His 10 file titles (Dill Pickles, Every Tub, Frisco Rag, Jelly Roll Blues, Jumpin' at the Woodside, Kitten on the Keys, Moonlight Cocktail, and others) are all classic ragtime/jazz standards, strongly supporting a jazz/ragtime-arrangement hobby project. CSDb dates these files 1995-1996 — roughly 7-8 years after the tool's 1988 publication, another hobbyist-use signal (a magazine reader picking up an old tool much later, not a contemporary scene release).",
    "GREG TARR (the tool's author) has NO other findable Compute!/Compute's Gazette byline or biographical information — a one-time magazine contributor with no further documented footprint.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "Compute!'s Gazette, Vol. 6 No. 3 (Issue 57), March 1988, pp. 72-73, 'Basically Music: A Complete Composition Tool For The 64' by Greg Tarr (primary source, directly quoted): https://archive.org/details/1988-03-computegazette",
    "HVSC Musicians.txt ('Claff, Chester - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 10 files tagged Basically_Music, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Basically_Music` tag is a machine-language Compute!'s Gazette
type-in tool by Greg Tarr (1988) — despite its punning name, not a BASIC
program, but a machine-language extension adding new BASIC keywords to
drive the SID chip. Player-ID-fingerprinted across 10 files, all by
hobbyist Chester Claff, a magazine-tool user with no demoscene presence
who used it to arrange classic ragtime/jazz standards years later.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is that the **genuinely
sparse trace is fully explained by the tool's own documented command
semantics** (a blank note field leaves that voice's registers untouched,
found by directly quoting the original 1988 magazine article) — a rare
case where a primary source fully resolves an otherwise-puzzling trace
result rather than leaving it as an open question.

## Disassembly notes

Fully disassembled (2026-07-24) via `SIDdecompiler.exe -a32043 -z -d -c`
(32043 = `$7d2b`, matching both the PSID load address and the `-v2` map's
own "Start:") and reassembled with `64tass`. Engine structure, zero-page
usage, entry points, and the compiled-song data format are all recovered —
see the `memory`/`entry`/`data_format`/`effects` facts blocks and the
byte-level manifest at
`knowledge/players/reconstructions/basically-music.md`.

## Verification

**VERIFIED (2026-07-24) — register-write-exact on multiple independent
files, `status: verified`.** Disassembled and reassembled all 10 Chester
Claff HVSC files (load `$7d2b`, init `$7d4a`, play `$7d5a`).

- **Byte-diff**: raw reassembly is 99.45%-99.85% byte-exact on every file;
  every differing byte (6-8 per file) is self-modified working storage in a
  single fixed block (`$7d45`, `$7d47-$7d49`, `$7d58/$7d59`, `$7e07/$7e08`)
  that SIDdecompiler captured post-execution. Patching each back to its
  pristine cold value yields **100.0000% byte-exact reassembly on all 10
  files** (per lessons_learned entries 10/17/43 — drifted self-modified
  working storage, both data bytes and instruction-referenced scratch).
- **Trace-diff** (`sidm2-sid-trace.exe`): the patched reconstruction is
  **register-write-identical** to the original on both trace paths — the
  natural sparse PSID path, and a pointer-initialized harness giving full
  playback (Dill_Pickles 493/493 writes, Kitten_on_the_Keys 912/912,
  Jelly_Roll_Blues 528/528, Von_Meinem_Bergli 253/253 — all 0 diff lines
  over 900 frames). The unpatched reassembly diverges (1608 diff lines on
  Dill_Pickles), confirming the small patch set is load-bearing.
- **Sparse-trace root cause corrected**: it is the uninitialized `$fb/$fc`
  song pointer, not blank note fields (see the load-bearing quirk).
- **Filter**: confirmed 0 filter writes anywhere in the engine — a genuine
  limitation, not a per-song choice.

## Sources

See the `sources` array — the original Compute!'s Gazette article (primary
source) and HVSC Musicians.txt.
