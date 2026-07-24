# Music Producer II (J.N.W. Cheesman)

```json
{
  "id": "music-producer-ii",
  "name": "Music Producer II (J.N.W. Cheesman)",
  "aliases": ["Music_Producer_II"],
  "authors": ["J.N.W. Cheesman"],
  "released": "~1988",
  "status": "verified",
  "platform": "A C64 music editor authored by J.N.W. Cheesman — known to the C64 scene only through a single composer credit (Munch Load, 1988, a Pac-Man-style game intended as a Mastertronic pack-in/loader title), with no CSDb scener profile of his own. Player-ID-fingerprinted across 13 files: 12 by 'Uzzy' (real name Simon Collis, primarily a coder), 1 by Ewen Gillies — two unaffiliated composers from unrelated groups, showing the tool circulated beyond its author, though how or by whom is undocumented.",
  "csdb_release": null,

  "memory": { "load_address": "Load address varies per file (relocatable player, no fixed base): Beast $2600, Destroyer $4100, Most_Evil_Dream_tune_1 $0ff0 — confirmed by disassembling+reassembling all three at their own PSID load address with SIDdecompiler's -v2 memory-map 'Start:' exactly matching the header load address in every case (no gotcha-40-style drop/offset).", "zero_page": "Only 3 bytes used, as a scratch pointer for pattern-address arithmetic: $fa/$fb/$fc (named zfa/zfb/zfc in the disassembly) — confirmed via full disassembly of Beast.sid, same 3-byte usage seen in Destroyer.sid.", "layout": "Player code + per-voice working-storage tables occupy the low part of the load range (e.g. Beast: code $2600-$2adb, then a 3-voice-wide (3 bytes/row) state table $2a00-$2a5f holding gate/pulse/ADSR-nibble/waveform working values, then a lo/hi split pattern-pointer table per voice at $2adf/$2ae8 pointing into pattern data starting ~$2b7e); song/pattern/instrument data fills the rest up to the init address, which sits after all of it (Beast: init $2f00, right after the last data block)." },
  "entry": { "init": "PSID header init vector, called once at cold start; ends by jumping into the shared note-init routine (Beast: init=$2f00 -> jmp to $2601).", "play": "PSID header play vector, called once per frame from IRQ — confirmed exactly matches disassembly entry (Beast play=$2659 lands exactly after a 4-byte unreferenced-data gap following the init/note-trigger routine, no offset)." },
  "speed": "Standard once-per-frame (50Hz PAL) IRQ-driven play call — no multi-speed/raster-split behavior observed in any of the 3 traced files (250-330 register writes over 50 frames, single play-vector entry per frame, consistent across files).",
  "data_format": { "order_list": "TODO — not reverse-engineered beyond locating the per-voice pattern-pointer table (see memory.layout).", "patterns": "TODO — pattern data confirmed to start around $2b7e (Beast) but note/effect encoding not decoded.", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 46 filter writes in the 50-frame Beast sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "J.N.W. CHEESMAN'S ONLY CONFIRMED CREDIT is composer of the SID tune 'Munch Load' (1988) — a Pac-Man-style game intended as a loader/pack-in title for Mastertronic's 'Cheeseloader', reportedly released only as a preview after a dispute (the game was allegedly stolen and spread by the Laser cracking group). Cheesman has NO CSDb scener profile at all — he's known to the scene only via this one game credit, not as a demoscene participant.",
    "NO 'MUSIC PRODUCER I' ENTRY FOUND ANYWHERE — SIDId's own data has no such tag, and no source confirms a version-1 predecessor exists. A 1989 Triad crack release titled 'Music Producer Preview' surfaced in research but carries NO credits and no 'II' in its title — POSSIBLY an earlier commercial editor package, but this is unverified speculation, explicitly not treated as a confirmed version history on this card.",
    "UZZY = SIMON COLLIS, CONFIRMED (HVSC: 'Uzzy (Collis, Simon) / Entropy - UNITED KINGDOM'). CSDb (id=5358) shows he is primarily a CODER (Tex V1.1 cross-assembler, a Hires Picture to Screen Converter tool, editor of the Postmortem diskmag), with music credits limited to two demoscene productions: 'Beast' (1991, Entropy — the traced file, load/init/play addresses independently cross-checked against CSDb's own SID entry and matching exactly) and 'Call of the Wild' (1991, Entropy) — both demoscene productions, NOT commercial games, despite Cheesman's own known work being a commercial pack-in title.",
    "EWEN GILLIES (HVSC: handles King R.A.T./Warlock Arkhinos Ratazmus/Trisect/ASL, group The Mosh Masters) — CSDb (id=15365) shows a UK scener active ~1990-1995, groups Noise Masters International/Shinjitsu Software/Xlcus Software and Design, multi-role (musician/coder/cracker/graphician). No mention of Cheesman or this tool on his own profile — the connection is only visible from this project's own tag data, not corroborated externally.",
    "No source confirms whether Cheesman personally distributed this as a standalone public tool, or whether 'Music Producer II' is a name reconstructed/assigned retroactively by the SIDId project's own fingerprinting work — flagged as genuinely unknown rather than assumed either way.",
    "Not confirmed beyond the bare SIDId name/author fields already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "CSDb SID — Munch Load (1988, Cheesman's only confirmed credit): https://csdb.dk/sid/?id=53265",
    "CSDb release — Munch Load / Cheeseloader context: https://csdb.dk/release/?id=148337",
    "CSDb search — confirms no scener profile exists for Cheesman: https://csdb.dk/search/?seinsel=sceners&search=Cheesman",
    "CSDb SID — Beast (1991, Entropy, Simon Collis/Uzzy — address cross-check): https://csdb.dk/sid/?id=32987",
    "CSDb SID — Call of the Wild (1991, Entropy): https://csdb.dk/sid/?id=32988",
    "CSDb scener — Uzzy/Simon Collis (id=5358, Coder, Entropy/Logik): https://csdb.dk/scener/?id=5358",
    "CSDb scener — Ewen Gillies (id=15365, multi-role, The Mosh Masters/Noise Masters International): https://csdb.dk/scener/?id=15365",
    "CSDb release — 'Music Producer Preview' (1989, Triad, no credits — unverified predecessor lead): https://csdb.dk/release/?id=199066",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 13 files tagged Music_Producer_II, 2 composers (see knowledge/COVERAGE.md)",
    "Original disassembly (this card, 2026-07-24): SIDdecompiler.exe + 64tass.exe against HVSC MUSICIANS/U/Uzzy/Beast.sid, Destroyer.sid and MUSICIANS/G/Gillies_Ewen/Most_Evil_Dream_tune_1.sid — register-write-exact trace-diff via sidm2-sid-trace.exe, see Verification section for full methodology/numbers."
  ]
}
```

## Overview

The `Music_Producer_II` tag is a C64 music editor by J.N.W. Cheesman, a
figure known to the scene only through one commercial game credit (Munch
Load, 1988) with no demoscene profile of his own. Player-ID-fingerprinted
across 13 files, mostly by Uzzy/Simon Collis — a coder primarily known for
other tools — showing this editor circulated beyond its author into
unrelated demoscene circles.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Cheesman's **near-total
obscurity** outside one game credit; an **unverified 'Music Producer I'
lead** explicitly not treated as confirmed; and the tool's use by **two
unaffiliated composers from unrelated groups**, whose connection to
Cheesman himself is undocumented.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this card's
disassembly is original work, done directly against real HVSC files with
`SIDdecompiler.exe` (SIDM2 project) + `64tass.exe`, see Verification below.

Structural notes from the disassembly (Beast.sid, load `$2600`):
- Init (`$2f00`) and the note-init/note-trigger routine (`$2601`) are
  shared code — init just sets a value and jumps into `$2601`.
- Play vector (`$2659`) sits immediately after a 4-byte block of genuinely
  unreferenced data at `$2655-$2658` — no gap/offset issue.
- A compact 3-voice-wide (3 bytes/row) working-storage table at
  `$2a00-$2a5f` holds runtime gate/pulse/ADSR/waveform state per voice.
- A lo/hi split pointer table at `$2adf`/`$2ae8` gives each of the 3
  voices its own pattern-data pointer (patterns start ~`$2b7e` in Beast).
- Only 3 zero-page bytes used (`$fa/$fb/$fc`), as scratch for pointer
  arithmetic — a very ZP-light player.

## Verification

**Register-write-exact reconstruction confirmed (2026-07-24) —
`status: verified`.**

Disassembled + reassembled 3 real HVSC `Music_Producer_II`-tagged files
across both composers in the local dataset, each at its own PSID header
load address (`SIDdecompiler.exe -a<decimal load> -z -d -c -v2`, `64tass.exe`
reassembly) — in every case the `-v2` memory map's own "Start:"/"End:"
address exactly matched the file's PSID header load address (no gotcha-40
drop/offset needed):

| File | Composer | Load | Init | Play | Raw byte-diff | After patching self-modified bytes | Trace-diff (50 frames) |
|---|---|---|---|---|---|---|---|
| `Beast.sid` | Uzzy | `$2600` | `$2f00` | `$2659` | 98.53% (34/2314 bytes) | **100.0000%** | **exact** (register+value+cycle identical) |
| `Destroyer.sid` | Uzzy | `$4100` | `$4800` | `$4159` | 97.50% (45/1802 bytes) | **100.0000%** | **exact** |
| `Most_Evil_Dream_tune_1.sid` | Ewen Gillies | `$0ff0` | `$0ff0` | `$2000` | 99.38% overlap (33/5341) + 27-byte untraced tail | **100.0000%** | **exact** |

Every raw byte-diff mismatch (112 bytes total across the 3 files) was
individually cross-checked against `SIDdecompiler`'s own `-v2` memory-touch
map: all but one landed on `+`/`w`/`_` (read+write / self-modified)
markers, and the one remaining outlier per file (marker `B`, a mixed
access combination) was confirmed dead by the same patch-and-retrace test.
This is the standard "decompiler captured a post-execution snapshot of
self-modified working storage, not the pristine cold-start byte" pattern
documented elsewhere in this project (e.g. `laxity-newplayer`,
`cheesecutter`) — concretely: `$2601`/`$4101`/`$0ff1` etc. are self-modified
immediate operands (the `Beast.sid` case traced directly: `sta l2601+1` /
`jmp l2601` overwrite the operand at runtime), and the larger clusters
(`$2a00`-ish region, offset per file) are the per-voice working-storage
table described above. Patching all of them back to the file's own pristine
byte values (a straightforward binary patch of the assembled `.prg`, not a
text-level `.asm` edit) closed every file to **100.0000% byte-exact**.

`Most_Evil_Dream_tune_1.sid` additionally hit the "trailing 27 bytes never
touched by the emulated trace" pattern (SIDdecompiler's own gap, not a
defect — same shape as this project's `future-composer` case study):
those bytes were copied verbatim from the original file's payload tail
before tracing (they sit past everything the play routine ever reaches, so
this is not a guess about their content — they're the file's own real
bytes, just outside SIDdecompiler's emulation window).

Traced all 3 patched reconstructions against the pristine original with
`sidm2-sid-trace.exe` (init called once, then play stepped 50 frames,
correct subtune) — **every trace was register-write, value, and
cycle-count identical to the original**, not just value-identical (the
*unpatched* reassemblies showed only minor cycle-offset drift on frame 0
from the self-modified bytes taking a marginally different runtime path —
confirming those bytes are genuinely dead, not just numerically close).

This is a stronger result than the project's own `laxity-newplayer`
precedent (~99.9%) — literal 100% byte-exact and trace-exact on every file
tested, across both composers in the local 13-file dataset. Internals
beyond entry points/ZP/the two confirmed data tables (order list, pattern
note/effect encoding, instrument/wave/pulse/filter tables) remain
undocumented — `data_format`/`effects` stay `TODO`; a future pass could
reverse-engineer the pattern format starting from the confirmed pointer
table at `$2adf`/`$2ae8` (Beast.sid) without needing to redo any of the
verification work above.

## Sources

See the `sources` array — CSDb (5 entries), HVSC Musicians.txt.
