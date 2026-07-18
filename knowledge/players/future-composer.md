# Future Composer (C64)

```json
{
  "id": "future-composer",
  "name": "Future Composer (C64)",
  "aliases": ["FutureComposer_V1.0", "FutureComposer_V3.x", "FutureComposer_V4_Packed", "FC"],
  "authors": ["Maniacs of Noise (replay driver — Charles Deenen / Jeroen Tel)", "Finnish Gold (editor)"],
  "released": "1988 (V1.0, 20 Jun 1988); V4.1+ 1990",
  "status": "in-progress",
  "platform": "Native C64 editor (Finnish Gold) wrapping a Maniacs of Noise replay driver. NOT the same program as the Amiga 'Future Composer'.",
  "csdb_release": 10604,

  "memory": {
    "load_address": "TODO: not documented publicly for the C64 driver",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO (later scene versions added 3-track support and a better driver from Hawkeye)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO: era-typical ADSR/vibrato/waveform + sequence/pattern model, but no sourced C64-specific offsets",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "DON'T CONFLATE with the Amiga 'Future Composer' — a DISTINCT program (different chip, different authors, associated with Jochen Hippel's toolchain) that shares only the name. This card is strictly the C64 tool.",
    "AUTHORSHIP CONFLICT (unresolved, do not guess): VGMPF says the editor was written by Juha Granberg wrapping a Maniacs of Noise driver; the CSDb V1.0 release credits code to Charles Deenen (Maniacs of Noise) + Finland Cracking Service. Common ground: the REPLAY DRIVER is Maniacs of Noise's; the editor came from the Finnish Gold circle. Exact editor-coder attribution is TODO.",
    "No SIDId entry exists for it — identity rests on CSDb + VGMPF, not the usual SIDId cross-check.",
    "Version history: V1.0 (1988, Finnish Gold) → later scene builds add menus, 3-track support, drum/filter/credits editors and a better Hawkeye driver → V4.0 / V4.1+ (Mar 1990, group Dynamix, code by 'The Syndicate'). The V3.x tag is attested by files but no dedicated release page was found (TODO).",
    "3,398 files across 366 composers — a broadly adopted tool (high composer spread)."
  ],
  "sources": [
    "VGMPF: Future Composer — https://www.vgmpf.com/Wiki/index.php?title=Future_Composer (origin narrative, MoN driver + Finnish Gold editor, authorship)",
    "CSDb V1.0 (id 10604, 20 Jun 1988, credits): https://csdb.dk/release/?id=10604",
    "CSDb V4.1+ (id 10607, Mar 1990, Dynamix): https://csdb.dk/release/?id=10607",
    "Modern replay references (format leads, not C64-authoritative): libsidplayfp FC player https://github.com/libsidplayfp/libsidplayfp",
    "Local dataset: 3,398 files tagged FutureComposer_V1.0/V3.x/V4_Packed (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

Future Composer (C64) is a native C64 music tool from **1988** — a **Finnish
Gold** editor wrapping a **Maniacs of Noise** replay driver (Charles Deenen /
Jeroen Tel). It's broadly adopted here (3,398 files / 366 composers). It must
not be confused with the **Amiga** program of the same name, which is an
entirely separate tool (Jochen Hippel toolchain lineage). Later scene versions
added 3-track support and a stronger driver from Hawkeye, up through V4.1+
(1990).

## Quirks & gotchas

See the `quirks` array. Two load-bearing ones: **the Amiga/C64 name collision**
(distinct programs — this card is C64 only) and an **unresolved editor-authorship
conflict** (Granberg vs Deenen/FCS; only the Maniacs-of-Noise *driver* is firm).
Also note there's **no SIDId entry**, so identity leans on CSDb + VGMPF.

## Disassembly notes

A disassembly/reassembly pass was run 2026-07-18 on `Test_in_FC.sid` — see
Verification for the numbers. Summary: entry points and the executed code
path reassemble to an exact register-write trace match (2000 frames), but
the reassembly is only 73.2% byte-complete (2738 of 3740 payload bytes) —
SIDdecompiler's own emulation never touches the remaining 1002 bytes
($22B2-$26DB), so no C64-specific data-format spec (ZP layout, order-list/
pattern/instrument table encoding, effect set) was derived from this pass;
those remain `TODO` as before. libsidplayfp's FC player remains a format
lead for that follow-up work.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC FutureComposer `.sid` (load $1800, init $1800, play $1806, 387 register writes / 50 frames) — the C64 driver runs; entry addresses are per-file. Identity/history are CSDb+VGMPF-sourced;
every runtime field is `TODO`. Even the authorship of the editor is unresolved
(flagged, not guessed).

**Disassembly + reassembly attempted (2026-07-18) — `status` stays
`in-progress` (register-write trace is exact, but byte reconstruction is
genuinely incomplete; see below).** File: `MUSICIANS/P/Phase_2/Test_in_FC.sid`
(the same file traced 2026-07-13; author Dennis LeDoux). PSID header: `load`
field is `$0000` (real load address `$1800` is embedded as the payload's own
first 2 bytes, per the `loadAddr === 0` convention), `init=$1800`,
`play=$1806`, 1 subtune, payload 3740 bytes after stripping those 2 bytes.

*Method*: `SIDdecompiler.exe Test_in_FC.sid -ofc.asm -a6144 -z -d -c -v1`
(6144 = decimal for `$1800`; no `-e`), reassembled with
`64tass.exe -a --cbm-prg -o fc.prg fc.asm`.

*Byte-diff*: the reassembled `.prg` is only **2738 bytes** (`$1800-$22B1`,
73.2% of the 3740-byte payload) — **not** the full file length. Within that
overlapping range: **35 of 2738 bytes differ (98.72% match)**. Re-running
with `-C1 -t2000000` (more speculative, far longer emulated play-call count)
reassembled to the *same* 2738 bytes — the shortfall is not an under-traced
window. `-v2`'s own memory-touch map confirms this: the emulator's model of
touched memory (`r`/`w`/`x`/`o`/`?` per address) stops around `$22C0` and
never extends further, even with a much longer trace. The trailing
**1002 bytes ($22B2-$26DB, 26.8% of the payload) are absent from the
reassembly entirely** (not merely uncommented data — genuinely not part of
the decompiler's model of the program). This tail is mostly non-`$FF`
(96.1% non-padding, i.e. real varied byte content, not filler) — its
purpose is `TODO`: possibly further pattern/sequence rows this file's play
routine never reaches, possibly leftover editor scratch data. Not resolved
here; a real gap, not guessed at.

All **35 byte mismatches within the covered range fall exactly inside
`$2121-$217F`**, which the `-v2` memory map marks as **written** (`+`/`w`)
during the emulated play — i.e. the decompiler dumped the *post-execution*
runtime value of self-modified working-storage bytes there, not the file's
pristine initial byte value. This is corroborated by the trace-diff below:
those differing initial bytes have **zero effect** on the observed register
writes.

*Trace-diff* (`sidm2-sid-trace.exe`, `init=$1800 play=$1806`, since the
`mcp__sidm2-siddump__*` MCP tools were not registered in this session — see
`lessons_learned` #8): traced the original file's own payload (`fc_orig.prg`,
extracted directly per the PSID-header method) against the reassembled
`fc.prg`, at 50, 500, and 2000 frames. **Result: exact match at every frame
count** — 387/387, 3690/3690, and 14666/14666 register writes respectively,
byte-for-byte identical logs (the only diff line across all three runs is
the echoed input filename). 2000 frames (~40 seconds of real playback) never
touches the missing `$22B2-$26DB` tail on the *original* file either,
consistent with that tail being genuinely unreferenced by this file's actual
playback (not proof of what it's *for*, just that it's not needed to
reproduce this file's sound here).

**Why this stays `in-progress`, not `verified`.** The register-write trace
is exact — stronger, by frame count, than this project's `laxity-newplayer`
precedent (2000 frames here vs. 50 there). But the underlying static
reconstruction is only 73.2% byte-complete: over a quarter of the real
file's bytes are not present in the reassembly at all, and — even though
2000 frames of trace evidence suggests that tail is inert for *this*
specific file — its content and purpose remain undetermined (`TODO`), which
is a materially bigger unresolved gap than a "divergence explicitly
quantified and localized" byte mismatch. Calling this `verified` would
overstate what was actually reconstructed. Data-format internals
(order-list/pattern/instrument encoding) remain entirely `TODO`; this pass
verified entry points and runtime behavior for the covered code, not the
data format.

**Next step**: pick a second FutureComposer file (ideally one that uses more
than 50-ish frames' worth of distinct pattern data, or one with 2+ subtunes)
and check whether its reassembly hits the same kind of unreferenced-tail
shortfall — if so, that's a structural SIDdecompiler/FC-format interaction
worth documenting generally rather than a one-file quirk; if a second file
byte-completes cleanly, `Test_in_FC.sid`'s tail is more likely genuine
leftover/test data specific to that one rip (matching its filename).

## Sources

See the `sources` array — VGMPF, the CSDb V1.0/V4.1+ releases, and
libsidplayfp as a modern format reference. No SIDId entry.
