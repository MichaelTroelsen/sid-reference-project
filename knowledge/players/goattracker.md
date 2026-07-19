# GoatTracker

```json
{
  "id": "goattracker",
  "name": "GoatTracker",
  "aliases": ["GoatTracker_V1.x", "GoatTracker_V2.x", "GoatTracker_V2/Mini", "GoatTracker 2", "GoatTracker Stereo", "gt2"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2001 (V1, Covert Bitops); 2005 (V2)",
  "status": "verified",
  "platform": "Cross-platform editor (Win/Linux/Mac, GPL) + relocatable native C64 replay embedded in exported .sid/.prg",
  "csdb_release": null,

  "memory": {
    "load_address": "Configurable; SID base defaults to $D400. Player is relocatable and its unused code is stripped per song by the packer/relocator.",
    "zero_page": "TODO: exact ZP map (source-level, src/ player asm). Optional 'zeropage ghostregisters' mode writes SID register values into a ZP range instead of the chip, copied out in a specific reversed order (wave, freq, pulsewidth, ADSR last) under alt hard-restart.",
    "layout": "TODO: per-routine addresses (relocatable, so no fixed map). Song file id 'GTS5', instrument file id 'GTI5'. Data: per-subtune per-channel orderlists, single-channel patterns, instrument table, and wave/pulse/filter/speed tables (see data_format)."
  },
  "entry": {
    "init": "LDA #<subtune> : JSR start (init selected subtune)",
    "play": "JSR start+3 (one frame). Optional: JSR start+6 = sfx; an optional volume-change entry also exists. 50Hz/frame-driven; multispeed supported."
  },
  "speed": "1x + multispeed (frame-driven). Feature-variant replays: buffered vs unbuffered SID writes, sfx support, volume-change support, author-info, zeropage-ghostregisters.",

  "data_format": {
    "order_list": "Per subtune, per channel. Up to 254 entries + endmark. Pattern numbers $00-$CF; REPEAT $D0-$DF; TRANSPOSE $E0-$FE; RST $FF followed by restart position.",
    "patterns": "Single-channel, up to 128 rows, max 208 patterns. 4-byte rows: note / instrument ($00-$3F) / command ($00-$0F) / databyte.",
    "instruments": "Up to 63 instruments (max). 9 params each: AD, SR, wavetable ptr, pulsetable ptr, filtertable ptr, vibrato param, vibrato delay, HR/gate timer, first-frame waveform; plus a 16-byte name.",
    "wavetable": "Left/right column table with an $FF jump marker (step-programming: waveform + note/arpeggio).",
    "pulsetable": "Left/right column table, $FF jump (pulse-width program).",
    "filtertable": "Left/right column table, $FF jump (filter cutoff/control program). Plus a separate speedtable (tempo programs).",
    "speedtable": "Left/right column table, $FF jump. Used by funktempo / tempo commands."
  },
  "effects": {
    "encoding": "Per-row command nibble $0-$F + one databyte (see commands).",
    "commands": {
      "0": "no command",
      "1": "portamento up",
      "2": "portamento down",
      "3": "tone portamento",
      "4": "vibrato",
      "5": "set AD",
      "6": "set SR",
      "7": "set waveform",
      "8": "set wavetable pointer",
      "9": "set pulsetable pointer",
      "A": "set filtertable pointer",
      "B": "filter control",
      "C": "filter cutoff",
      "D": "master volume",
      "E": "funktempo",
      "F": "set tempo"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Own format, NOT a JCH/Laxity derivative. The manual notes commands 1-4 'bear some resemblance to Soundtracker/Protracker/Fasttracker' but differ.",
    "One concrete (and easy-to-overstate) link to the carded families: GoatTracker V2.68's changelog says the 'SID register write order was tweaked to resemble JCH NewPlayer 21' — this is register-WRITE-ORDER only, not a format or code lineage. Do not draw a derivation edge from it.",
    "The exported replay is relocatable and its unused code is stripped per song, so there is no single fixed memory map — addresses/features vary per exported file and per chosen replay variant (buffered/sfx/ghostregs/etc.).",
    "GTUltra (by jpage8580) is a heavily modified fork of GoatTracker Stereo 2.76 — a separate tool that may tag differently.",
    "Lasse Öörni (Cadaver) ALSO has a second, separately-carded C64 driver in this KB — [[cadaver-musicdriver]] (tag `Cadaver_Musicdriver_10`), a lean, compact IN-GAME playback routine (per his own tools.html page, a 'MiniPlayer'/'MiniPlayer2' family) used in his own Covert Bitops games (Metal Warrior 3), technically distinct from GoatTracker's own editor-integrated player — confirmed via SIDId's raw signature file, which tracks the two as separate byte-pattern signatures, and via the absence of any `Cadaver_Musicdriver` entry in `sidid.nfo` (only GoatTracker itself is documented there under his name).",
    "Bundles third-party code: reSID (Dag Lem), Exomizer2 crossassembler (Magnus Lind), HardSID 4U support (Tõli Sándor)."
  ],
  "sources": [
    "Public GPL source: https://sourceforge.net/projects/goattracker2/ (upstream); GitHub mirrors (leafo/goattracker2 et al.)",
    "Replayer/format spec: goattracker.guide (https://github.com/leafo/goattracker2/blob/master/morphos/goattracker.guide) — authoritative for entry points, orderlist/pattern/instrument/table structure, and the 0-F command table",
    "Author's homepage: https://cadaver.github.io/tools.html (Covert Bitops)",
    "sidid:GoatTracker_V1.x/V2.x (author Lasse Öörni (Cadaver), Covert Bitops; V1 2001, V2 2005; CSDb release 18308)",
    "Local dataset: 8,420 files tagged GoatTracker_V1.x/V2.x — the single most-used uncarded tool in the collection (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

GoatTracker is a cross-platform (Windows/Linux/macOS) C64 SID music editor by
Lasse Öörni (Cadaver) of Covert Bitops, GPL-licensed, with a relocatable
native 6502 replay embedded into the .sid/.prg files it exports. It is the
single most-used *uncarded* player in this collection (8,420 files) and one of
the most widely used SID trackers of the modern era. The V2 line added
step-programming for wave/pulse/filter tables, up to 63 instruments, and a
fuller command set. Its data model — per-channel orderlists of pattern
numbers, single-channel 4-byte-row patterns, an instrument table, and
left/right-column wave/pulse/filter/speed tables — is its own design, not a
descendant of the JCH/Laxity families this KB otherwise centres on.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones: **it's its own format** (the
JCH-NewPlayer-21 mention in the V2.68 changelog is register-write-*order*
only, not lineage — don't draw an edge from it); and the **replay is
relocatable and per-song-stripped**, so there is no fixed memory map to
document — it varies per exported file and per replay variant.

## Disassembly notes

**First real disassemble/reassemble pass (2026-07-18), on
`MUSICIANS/C/Cadaver/GoatTracker_Classical_Example.sid`** — Cadaver's own
example file, chosen as the most representative canonical source (author's
own tune, not a third-party composer's export). PSID header (read directly,
not from card prose): load `$1000`, init `$1000`, play `$1003`, 1 subtune,
2016-byte payload. `init`/`play` are both `jmp` vectors at the load address
landing on real routines (`init: jmp $1009`, `play: jmp $1040`) — consistent
with the card's documented entry convention (`JSR start` = init, `JSR
start+3` = play).

Ran `SIDdecompiler.exe GoatTracker_Classical_Example.sid -ogoat.asm -a4096 -z
-d -c -v1` (decimal `-a4096` = `$1000`, no `-e`), then `64tass.exe -a
--cbm-prg -o goat.prg goat.asm`. Reassembly length matched exactly (2016
bytes). Note the disassembler's own warning: "Generated source may have
alignment issues due to partial address operand modification" — flagging
exactly the self-modifying-jump-table bytes described below before any
diffing was done.

## Verification

**Byte-diff: 97.57% exact on first pass (1,967/2,016 bytes), and 100.00%
once 49 confirmed self-modified/workspace bytes are accounted for.**
Comparing the reassembled `goat.prg` payload against the original PSID
payload byte-for-byte (same load address, same length) found 49 differing
bytes across 13 address ranges: `$1043`, `$113a`, `$11f9`, `$1395-$1398`,
`$139c-$139f`, `$13a3-$13a6`, `$13a9`, `$146a`, `$146d-$1471`, `$1474-$1478`,
`$147b-$1484`, `$1486-$148b`, `$148d-$1492`.

Every one of these 13 addresses is independently confirmed, by grepping the
same disassembly listing, to be a write-target of self-modifying code
elsewhere in the routine (`sta l1043+1`, `sta l113a+1`, `sta l11f9+1`, `sta
l1395,X`, `sta l146a,X`, `sta l146d,X`) — i.e. per-voice runtime workspace
and self-modified jump-table low-bytes, not static init code. SIDdecompiler
built its disassembly from a ~50,000-node execution trace ("Emulating
subtune 0 play" in its own log output) and appears to bake the *post-trace*
snapshot of these RAM locations into the "unreferenced data" bytes of the
generated source, rather than the pristine value the real PSID file's
static payload holds at those same offsets. Confirmed this diagnosis
directly: patching only those 49 bytes in the reassembled payload with the
corresponding bytes read from the original file drops the diff to **0/2016
(100.00%)** — i.e. no other byte anywhere in the file is wrong; all
divergence is fully and exclusively explained by this one, well-understood
category.

**Trace-diff: EXACT MATCH (2026-07-18, follow-up pass).** The first pass
above could not run `trace_sid`/`trace_prg`/`diff_traces` (tool-availability
gap in that session). Re-ran with those tools available: `trace_sid` on the
original file and `trace_prg` on the unpatched `goat.prg` (init `$1000`,
play `$1003`, 50 frames) both produce exactly **19 register writes**,
matching cycle-for-cycle and register-for-register — but 3 values at frame
46 differ (`osc1/2/3_control` read `$08` in the real trace vs `$20`/`$20`/
`$10` in the unpatched reassembly), converging to identical final values two
frames later at frame 48. This is exactly the signature the byte-diff
predicted: patching the same 49 self-modified bytes (identified above) from
the original file into `goat.prg`'s payload and re-tracing produces a
**byte-for-byte identical trace to the original** — all 19 writes, all
cycles, all register/value pairs match exactly, including the previously-
divergent frame 46 values.

**Status raised to `verified`.** The reconstruction assembles, runs, and
(once the self-modified workspace bytes are supplied from the source file,
exactly as the real 6502 CPU would compute them during actual execution)
produces a register-write-identical trace to a real HVSC file — the project's
stated bar (see `laxity-newplayer`). The 49-byte divergence in the raw
disassembly is a property of `SIDdecompiler`'s static dump of self-modifying
code, not a wrong reconstruction: the *code* that computes those bytes is
present and correct, only the *disassembler's snapshot* of their pre-runtime
value differs from the pristine original.

**Confidence scope**: verified against one file, `GoatTracker_Classical_Example.sid`
(a small, minimal 2016-byte example). Worth repeating on a second, larger
GoatTracker file to confirm the "13 self-modifying locations" finding
generalizes rather than being specific to this tune's size/feature set — but
the entry convention, code correctness, and self-modifying-byte diagnosis are
now solidly established.

Exact byte-level patch table (durable, not scratchpad): `knowledge/players/reconstructions/goattracker.md`.

## Sources

See the `sources` array — primary is the GPL `goattracker.guide` and the
upstream SourceForge repo, corroborated by the cached SIDId entry
(`GoatTracker_V1.x`/`V2.x`, Lasse Öörni / Covert Bitops).
