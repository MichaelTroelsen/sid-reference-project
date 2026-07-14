# GoatTracker

```json
{
  "id": "goattracker",
  "name": "GoatTracker",
  "aliases": ["GoatTracker_V1.x", "GoatTracker_V2.x", "GoatTracker_V2/Mini", "GoatTracker 2", "GoatTracker Stereo", "gt2"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2001 (V1, Covert Bitops); 2005 (V2)",
  "status": "stub",
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

Not disassembled here. The format is fully documented in the GPL source's
`goattracker.guide` (entry points `start`/`start+3`/`start+6`, orderlist/
pattern/instrument/table layout, the 0-F command table). For a real memory
map, assemble the player from the upstream source (`src/`) — the exact ZP
usage and per-routine addresses are source-level and left `TODO` here.

## Verification

**Not verified locally — `status: stub`.** All facts above are from the
authoritative GPL manual (`goattracker.guide`) and the cached SIDId entry,
not from a local disassemble/assemble/trace pass. Because the player source
is public, a future pass could assemble it and confirm entry points/behaviour
through `sidm2-siddump` the way `laxity-newplayer` was verified — that would
be the path to `in-progress`/`verified`. The exact first-release year, the
precise DeepSID tag strings, and the full ZP/memory map are left `TODO`.

## Sources

See the `sources` array — primary is the GPL `goattracker.guide` and the
upstream SourceForge repo, corroborated by the cached SIDId entry
(`GoatTracker_V1.x`/`V2.x`, Lasse Öörni / Covert Bitops).
