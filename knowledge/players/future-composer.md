# Future Composer (C64)

```json
{
  "id": "future-composer",
  "name": "Future Composer (C64)",
  "aliases": ["FutureComposer_V1.0", "FutureComposer_V3.x", "FutureComposer_V4_Packed", "FC"],
  "authors": ["Maniacs of Noise (replay driver — Charles Deenen / Jeroen Tel)", "Finnish Gold (editor)"],
  "released": "1988 (V1.0, 20 Jun 1988); V4.1+ 1990",
  "status": "verified",
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

A disassembly/reassembly pass was run 2026-07-18 on `Test_in_FC.sid`, and a
second, independent pass was run 2026-07-19 on `Party_Demo_end_part.sid`
(24 subtunes) — see Verification for the numbers on both. Summary: entry
points and the executed code path reassemble to an exact register-write
trace match on **both** files (2000 frames on file 1; multiple subtunes at
50-500 frames each on file 2), which is why `status` moved to `verified`
2026-07-19. File 1's reassembly was only 73.2% byte-complete (a genuinely
large, unexplained 1002-byte tail); file 2's reassembly reached 99.8% byte
coverage, with the small remaining gap fully explained (a 6-byte leading
`JMP`/`JMP` stub the header-driven emulation never calls through, plus 1
trailing edge byte) and the in-range byte differences (40 of 3464 bytes)
fully explained as self-modified working-storage drift, confirmed inert by
trace-diff across 7 different subtunes. This second file supports the
card's own prior hypothesis: file 1's large tail is file-specific leftover/
test data (matching its filename), not a structural SIDdecompiler/FC-format
limitation. No C64-specific data-format spec (ZP layout, order-list/
pattern/instrument table encoding, effect set) was derived from either
pass; those remain `TODO`, same as this project's other `verified` composer-
driver cards (e.g. `rob-hubbard.md`) whose `data_format` block is also
entirely `TODO` — `verified` here certifies the register-write reconstruction,
not full data-format documentation. libsidplayfp's FC player remains a
format lead for that follow-up work.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC FutureComposer `.sid` (load $1800, init $1800, play $1806, 387 register writes / 50 frames) — the C64 driver runs; entry addresses are per-file. Identity/history are CSDb+VGMPF-sourced;
every runtime field is `TODO`. Even the authorship of the editor is unresolved
(flagged, not guessed).

**Disassembly + reassembly attempted (2026-07-18) — first file; register-
write trace is exact, but byte reconstruction is only partially complete;
see below (superseded by the second-file pass further down, which moved
`status` to `verified`).** File: `MUSICIANS/P/Phase_2/Test_in_FC.sid`
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

**Why this stayed `in-progress` after the first file (2026-07-18).** The
register-write trace was exact — stronger, by frame count, than this
project's `laxity-newplayer` precedent (2000 frames here vs. 50 there). But
the underlying static reconstruction was only 73.2% byte-complete: over a
quarter of the real file's bytes were not present in the reassembly at all,
and — even though 2000 frames of trace evidence suggested that tail was
inert for *this* specific file — its content and purpose remained
undetermined (`TODO`). The recorded next step was to test a second real
file to see whether this was a structural SIDdecompiler/FC limitation or a
one-file quirk.

**Second file, second pass (2026-07-19) — `status` moved to `verified`.**
File: `MUSICIANS/S/Stenija/Party_Demo_end_part.sid` (author Joerg Pfeffer /
Stenija; deliberately picked for scale — 24 subtunes, vs. file 1's 1).
PSID header: `load=$1800` (payload's own first 2 bytes, `loadAddr===0`
convention), `init=$2000`, `play=$1806`, 24 subtunes, `startSong=1`,
payload 3471 bytes after stripping the 2-byte embedded load address.

*Method*: same as file 1, but relocating to the PSID **play** address
($1806, decimal `-a6150`) rather than the load address ($1800,
`-a6144`) — the first attempt at `-a6144` produced a `-v2` memory map whose
own reported `Start:` was `$1806`, not `$1800` (per this project's own
`lessons_learned` #31/#33: relocate to the emulation's own touched-memory
`Start:`, not the PSID load address, whenever the two differ). The file's
real leading 6 bytes turned out to be `4C 08 21 4C 17 21` (`JMP $2108` /
`JMP $2117`) — a small vector table the PSID header-driven init/play calls
never go through (matching the "unidentified run-stub" pattern from
`lessons_learned` #11/#31, confirmed here on a second, independent player).

*Byte-diff*: reassembled `.prg` covers `$1806-$258D` (3464 of 3471 payload
bytes, 99.8% coverage) — only the 6-byte leading stub (`$1800-$1805`) and 1
trailing edge byte (`$258E`, value `$D0`) are absent, both fully explained
(the stub is never called through under the PSID entry convention; the
trailing byte is a single edge-of-region byte with no further significance
identified). Within the covered range: **40 of 3464 bytes differ (98.8453%
match; 98.6459% counting the 7 edge bytes as differences against the full
3471-byte payload)**. All 40 differing bytes fall in two small clusters,
`$1EA1-$1EA3` and `$2121-$2178` — both marked `+`/read+write (self-modified)
in the `-v2` memory-touch map, the same drifted-working-storage-table
pattern documented on several other players in `lessons_learned`
(#10/#16/#17/#25).

*Trace-diff* (`sidm2-sid-trace.exe`, `init=$2000 play=$1806`, since the
`mcp__sidm2-siddump__*` MCP tools were again not registered in this
session): traced the original file's own payload (`fc_orig.prg`) against
the reassembled `fc2b.prg`. **Subtune 0 at 50 and 500 frames: exact match**
(the only diff line in either run is the echoed input filename; 1919/1919
register writes at 500 frames). **Six further subtunes (1, 5, 10, 15, 20,
23) at 200 frames each: also exact match** (894, 769, 1543, 1138, 828, and
819 register writes respectively, all byte-for-byte identical). Seven of
24 subtunes tested, zero divergence in any of them — strong evidence the
40-byte drifted-table difference is genuinely inert across this file's
actual play range, not just for the one subtune first checked.

**Conclusion**: the second file supports the hypothesis recorded after file
1 — `Test_in_FC.sid`'s large 1002-byte unreferenced tail is file-specific
leftover/test data (its filename literally suggests a test rip), **not** a
structural SIDdecompiler/FC-format limitation. A second, more complex real
file (24 subtunes vs. 1) reassembles to 99.8% byte coverage with a fully
explained, small edge gap, and traces register-write-exact across every
subtune sampled. Combined with file 1's exact 2000-frame trace match, this
meets this project's `verified` bar (an actual, cited register-write match,
with every byte-level divergence explicitly quantified and localized —
matching, and arguably exceeding, the `rob-hubbard.md` precedent, whose
`verified` status was likewise reached without fully decoding
per-file data-format internals). Data-format internals (order-list/pattern/
instrument/table encoding) remain entirely `TODO` — `verified` here
certifies the entry-point/runtime reconstruction, not the data format.

**Next step (if continuing)**: decode the order-list/pattern/instrument
data format itself (currently all `TODO`) — libsidplayfp's FC player source
is the standing lead for that. Also worth a look, lower priority: identify
what `Test_in_FC.sid`'s unreferenced $22B2-$26DB tail actually contains
(leftover editor scratch data vs. genuinely unreachable pattern data), since
that's still an open, undetermined byte range on that one file even though
it's now understood not to generalize.

## Sources

See the `sources` array — VGMPF, the CSDb V1.0/V4.1+ releases, and
libsidplayfp as a modern format reference. No SIDId entry.
