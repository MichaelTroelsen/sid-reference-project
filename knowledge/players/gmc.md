# GMC (Game Music Creator)

```json
{
  "id": "gmc",
  "name": "GMC (Game Music Creator)",
  "aliases": ["GMC/Superiors", "GMC", "Game Music Creator"],
  "authors": ["Brian (Balázs Farkas) / Graffity", "Jay (co-code)"],
  "released": "1990 (V1.0, 8 Dec 1990)",
  "status": "verified",
  "platform": "Native C64 music editor + replay (Graffity). Closed scene tool.",
  "csdb_release": 7268,

  "memory": {
    "load_address": "$1000 for the player code (verified on Akadem/Boogie.sid); files may load at lower addresses (e.g. $0A00 on NecroPolo/GMC-Brandnew.sid) with song data below the player, which is still entered at fixed absolute addresses.",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "$18EA (fixed absolute player entry, verified on two independent files)",
    "play": "$14EA (fixed absolute player entry, verified on two independent files)"
  },
  "speed": "1x IRQ-driven (verified by 50-frame register-write trace)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "GMC is the direct PREDECESSOR of DMC (Demo Music Creator), same author Brian of Graffity — a well-attested lineage (a CSDb comment on the GMC release even says 'they should have called this DMC V1.0'). The dmc card carries the graph edge (derives_from / successor_of gmc).",
    "SIDId also lists a 'GMC_V2.0/Superiors' tag with the identical NAME/AUTHOR fields but no CSDb reference and no confirmed matching release (only V1.0 here and a 'V1.6' are catalogued on CSDb) — carded separately as gmc-v2.md, which carries the derives_from/successor_of edge back to this card.",
    "'Superiors' in the DeepSID tag 'GMC/Superiors' is a SCENE GROUP that USED the GMC player, NOT the developer or a publisher. The developer group is Graffity. SIDId's comment: 'Player used by the group Superiors.'",
    "Only V1.0 is documented on CSDb (8 Dec 1990); development effectively continued as DMC. Code credited to Brian and Jay; music by Andy and Brian; graphics by Jay (all Graffity).",
    "A '.gmc' data-format entry reportedly exists on the ArchiveTeam File Formats wiki (unreachable during research — TODO to verify).",
    "Replay internals (load address, ZP, init/play, format, effect set, whether it shares DMC's testbit hard-restart) are all UNKNOWN. Best RE path: disassemble a GMC .sid (428 files / 43 composers) and compare its register trace against DMC, since the two are said to share 'similar elements'."
  ],
  "sources": [
    "CSDb GMC V1.0 (credits/date/downloads): https://csdb.dk/release/?id=7268",
    "SIDId sidid.nfo (author, year, 'used by Superiors' note): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "TND64 Music Scene (GMC→DMC lineage prose): http://tnd64.unikat.sk/music_scene.html ; DMC context https://csdb.dk/release/?id=2596",
    "sidid:GMC/Superiors (author Balázs Farkas (Brian), 1990, CSDb 7268)",
    "Local dataset: 428 files tagged GMC/Superiors (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

GMC (Game Music Creator) is a native C64 music editor+replay by **Brian
(Balázs Farkas) of Graffity**, released as V1.0 on 8 December 1990. Its main
significance is lineage: it is the **direct predecessor of [DMC](dmc.md)**, the
most-used uncarded player in the collection — same author, and DMC is
essentially GMC improved and renamed. 428 files here are tagged GMC (via the
"GMC/Superiors" tag, where *Superiors* is a group that used the player).

## Quirks & gotchas

See the `quirks` array. Load-bearing: **GMC→DMC** (the [dmc](dmc.md) card holds
the edge); **"Superiors" is a user group, not the developer** (Graffity is); and
all replay internals are `TODO` — the best RE route is to disassemble a GMC
`.sid` and diff it against DMC, since the two reportedly share components.

## Disassembly notes

None done here. Internals undocumented online. Comparison-based RE against DMC
is the promising path (both by Brian/Graffity, "similar elements").

## Verification

**Entry points + playback LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC GMC `.sid` (load $1000, init $18EA, play $14EA, 231 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, year, and the DMC lineage are CSDb/SIDId/TND64-sourced; every runtime field was `TODO`.

**Full disassemble/reassemble/byte-diff/trace-diff pass (2026-07-20) — status raised to `verified`.** Used `SIDdecompiler.exe` + `64tass` on two independent real HVSC files tagged `GMC/Superiors`. Both files share the same fixed absolute player entry points (`init $18EA`, `play $14EA`) even though their load addresses differ, confirming GMC's player code runs at a fixed location while song data may sit below it.

- **File 1**: `MUSICIANS/A/Akadem/Boogie.sid` (load $1000, init $18EA, play $14EA, subtunes 1, payload 4,553 bytes). The `-v2` memory-touch map reported `Start: $1014` because the first 20 bytes ($1000-$1013) are runtime-unaccessed, so the disassembly was relocated to `-a4116` (decimal for `$1014`) per gotcha 40. Reassembled to 4,509 bytes at `$1014-$21B0`. **Unpatched byte-diff: 99.0020% (45/4,509 bytes differ)**, all in the self-modified working-storage table `$1026-$10B8` (marked `+` read+write in the `-v2` map). **Trace-diff: exact — 231/231 register writes identical** over 50 frames. After patching the 45 drifted table bytes back to their pristine cold-start values, **byte-diff reached 100.0000% (0/4,509 bytes differ)** and the trace remained exact. Exact patch table: `knowledge/players/reconstructions/gmc.md`.

- **File 2**: `MUSICIANS/N/NecroPolo/GMC-Brandnew.sid` (load $0A00, init $18EA, play $14EA, subtunes 1, payload 11,224 bytes). The whole file was relocated to its PSID load address `$0A00` (`-a2560`); the `-v2` map's `Start:` matched the header load address. Reassembled to exactly 11,224 bytes at `$0A00-$35D7`. **Byte-diff: 99.2694% (82/11,224 bytes differ)**, clustered in the same player-internal drifted-table region around `$1018-$1053` (analogous to file 1's `$1026-$10B8`). **Trace-diff: exact — 251/251 register writes identical** over 50 frames (the trace logs differ only in the echoed filename). This confirms the drifted-table pattern is a player-family characteristic, not file-specific noise, and that the fixed entry points hold across different load addresses.

Both files independently reach exact register-write parity, and file 1 also reaches 100% byte-exact after patching the drifted startup constants. Meets this project's `verified` bar (matching `dmc` and `laxity-newplayer` precedent). Player data-format internals (ZP, order list / pattern / instrument / wavetable / pulsetable / filtertable layouts, effect encoding) remain unexamined and `TODO` — this pass established playback parity, not the runtime data format.

## Reconstruction manifest

See `knowledge/players/reconstructions/gmc.md`.

See the `sources` array — CSDb release, SIDId, and TND64's Music Scene history.
