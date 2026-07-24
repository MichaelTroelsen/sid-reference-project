# Will Harvey's Music Construction Set

```json
{
  "id": "music-construction-set",
  "name": "Will Harvey's Music Construction Set",
  "aliases": ["Music_Construction_Set"],
  "authors": ["Will Harvey"],
  "released": "1984 (Electronic Arts)",
  "status": "verified",
  "platform": "One of the first commercial WYSIWYG/graphical sheet-music editors for home computers — drag notes onto a staff, play back, print. Written by Will Harvey as a teenager (age reported as either 15 or 17 depending on source — see quirks), originally for Apple II, published by Electronic Arts 1984, ported to Atari 8-bit, Commodore 64, IBM PC, and Atari ST, later (1986) Apple IIGS; sold over a million units. Harvey later created The Immortal (1990) and Zany Golf (1988), earned a CS PhD from Stanford, and co-founded There, Inc. and IMVU. Player-ID-fingerprinted across 19 files, ALL by a different person — Douglas Fulton — who composed the bundled demo tunes for the C64 port; Harvey himself wrote the tool, not these tunes.",
  "csdb_release": 185248,

  "memory": { "load_address": "Confirmed via disassembly+trace-diff on 2 files (Allegro, Canon): PSID load/init $40fe, play $41b1 — but SIDdecompiler's own -v2 memory-touch map reports the TRUE emulated span as $0a02-$9fd8, far wider than the file's own 5.4-6.5KB payload (extra touched range is runtime scratch RAM/self-modified-pointer targets, not on-disk file content). A 17th file, Skyfox (the real EA game rip, not a generic MCS demo tune), uses a completely different load/init/play ($27bd/$2a56/$28a3) — a structurally different build; NOT covered by this verification, see Verification section.", "zero_page": "$64/$65 used as a 2-byte pointer pair (only ZP use surfaced in the disassembled span); full ZP map not otherwise characterized.", "layout": "Not documented beyond the load-address/entry-point facts above." },
  "entry": { "init": "Confirmed $40fe (18 of 19 files share this exact entry; Skyfox uses $2a56 instead).", "play": "Confirmed $41b1 (18 of 19 files; Skyfox uses $28a3 instead)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TOOL-BUILT-BY-X, TUNES-COMPOSED-BY-Y — unlike most single-author player cards in this KB: Will Harvey wrote the tool itself; Douglas Fulton, a separate and otherwise almost entirely undocumented person, composed the demo tunes bundled with the C64 port (his only clean CSDb credit is exactly this release, tagged Music role). All 19 locally traced files are Fulton's demo tunes, not Harvey's own work — the tag correctly represents the PLAYBACK ROUTINE (Harvey's), but every composer credit under it belongs to Fulton.",
    "WILL HARVEY'S AGE WHEN WRITING THIS IS UNRESOLVED between two conflicting sources: Wikipedia and VGMPF both say 15; a contemporary 1984 San Francisco Examiner profile ('17-year-old's \"note\"worthy software') says 17. No source reconciles the discrepancy (plausibly: started at 15, EA published when he was 17) — left as an open discrepancy rather than picking one.",
    "ORIGIN STORY: Harvey wanted to add music to his own Apple II game 'Lancaster', learned music theory basics from his high-school choir, then consulted professional musicians on what composition software should offer.",
    "COMMERCIALLY SIGNIFICANT: sold over a million units, ranked #3 in Apple II educational software sales by late 1985; later rebranded 'Deluxe Music Construction Set' on Amiga/Mac.",
    "HARVEY'S LATER CAREER, well documented: ported Marble Madness for EA (1986); wrote Zany Golf (1988) and The Immortal (1990) for Apple IIGS; earned BS/MS/PhD in Computer Science, all from Stanford; founded There, Inc. (1998, an early 3D virtual social world) and IMVU (2003, avatar-based IM) — a long, well-known career trajectory well beyond this one C64 tool.",
    "Douglas Fulton has essentially NO other documented footprint: no CSDb group affiliation, country, or real-name detail beyond the name itself — reads as a one-off EA-commissioned demo composer, not a demoscene figure. A second CSDb credit search result ('Thief Sample II' by Gandalf, 1985) surfaced but is FLAGGED AS UNCONFIRMED/possibly a different person or database mis-link — not included as fact. A minor, unexplained discrepancy: CSDb's release page lists 18 SID files for this tag while this project's own local count is 19 — not investigated further, likely a filename/release mapping quirk, not a contradiction.",
    "Not confirmed in SIDId beyond the metadata already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Ed Bogas/Russell Lieblich [[music-studio]] — none found).",
    "SKYFOX RESOLVES THE 18-vs-19 CSDb DISCREPANCY noted above: 18 of the 19 locally tagged files (all but Skyfox.sid) share byte-for-byte the exact same $40fe/$41b1 player routine — a generic, reusable MCS demo-tune stub. Skyfox.sid alone loads/inits/plays at completely different addresses ($27bd/$2a56/$28a3) — almost certainly the real EA game's own in-game rip of the routine, not the standalone demo-tune wrapper. CSDb's release-page count of 18 most likely reflects only the demo-tune set; this project's local count of 19 additionally includes the Skyfox game rip. Not fully disassembled/traced (out of scope for this pass) — see Verification.",
    "DISASSEMBLY QUIRK: SIDdecompiler's -v2 memory-touch map reports Start:$0a02, far below the PSID load address ($40fe) — but unlike the fixed-low-RAM-workspace pattern seen on SoundMonitor/SoundMaster (KB gotcha 31/38), here the touched span balloons all the way to End:$9fd8 (~38KB), almost entirely `.byte $00` filler/unreferenced scratch RAM. Relocating with `-a<decimal load address>` (the by-the-book move) silently squeezes this whole 38KB span into one blob starting at the load address — wrong. The fix that worked: relocate with `-a2562` (decimal for $0a02, the map's own Start address) — an *identity* relocation (offset 0) — which leaves the real file's own bytes sitting at their correct native $40fe-origin addresses inside the 38KB output; extracting just that window and byte-diffing against the real payload is what actually closed this file."
  ],
  "sources": [
    "Wikipedia — Music Construction Set (origin story, ports, sales figures): https://en.wikipedia.org/wiki/Music_Construction_Set",
    "Wikipedia — Will Harvey (later career, education, There/IMVU): https://en.wikipedia.org/wiki/Will_Harvey",
    "VGMPF — Music Construction Set: https://www.vgmpf.com/Wiki/index.php/Music_Construction_Set",
    "CSDb release 185248 (C64 port, 18 SID files credited to Fulton): https://csdb.dk/release/?id=185248",
    "CSDb scener — Douglas Fulton (id=14019): https://csdb.dk/scener/?id=14019",
    "Wikipedia — The Immortal (video game): https://en.wikipedia.org/wiki/The_Immortal_(video_game)",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 19 files tagged Music_Construction_Set, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Construction_Set` tag is one of the first commercial WYSIWYG
music editors for home computers, written by teenage programmer Will
Harvey (Electronic Arts, 1984) — a tool with a long commercial afterlife
and a famous author who went on to found There, Inc. and IMVU. All 19
locally traced files, however, are demo tunes composed by a separate,
almost entirely undocumented person, Douglas Fulton — a genuine
tool-vs-tune-author split, unusual for this KB.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **tool-author/tune-
author split** (Harvey wrote it, Fulton composed everything traced here);
Harvey's **unresolved reported age** (15 vs. 17) when he wrote it; and his
**well-documented, famous later career**, in sharp contrast to Fulton's
near-total obscurity.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this KB's own
disassembly (via `SIDdecompiler.exe`, see Verification) is the only one on
record. 18 of the 19 locally tagged files share one identical player
routine at `$40fe`/`$41b1`; the 19th (`Skyfox.sid`) is a distinct,
undisassembled build.

## Verification

**Register-write-exact trace match on 2 independent files (2026-07-24) —
`status: verified`.**

Method: `SIDdecompiler.exe` (from `C:\Users\mit\claude\c64server\SIDM2\tools\`)
against two real HVSC files, `Allegro.sid` and `Canon.sid`
(`MUSICIANS/F/Fulton_Douglas/`), both PSID load/init `$40fe`, play `$41b1`.

- `SIDdecompiler`'s own `-v2` memory-touch map reported `Start: $0a02 End:
  $9fd8` — far below the PSID load address and spanning ~38KB (mostly
  unreferenced/zero scratch RAM), not the file's own ~5.5-6.5KB payload.
  Relocating with `-a16638` (decimal `$40fe`, the by-the-book load address)
  squeezed that whole 38KB span into a wrongly-shifted blob. Relocating
  instead with `-a2562` (decimal `$0a02`, the map's own literal `Start:`
  address — an *identity* relocation, offset 0) left the file's real bytes
  sitting at their correct native `$40fe`-origin addresses; extracting that
  window from the 38KB output and byte-diffing against the real payload is
  what actually worked.
- Both files' `.asm` failed to reassemble on 3 syntactically-illegal
  `<label>+1` label definitions (`l8900+1`, `l8a00+1`, `l8b00+1` — the exact
  case in KB gotcha 1/entry 19); fixed by a plain legality-only rename
  (`l8900_1` etc, no arithmetic adjustment — verified correct by the
  resulting byte-diff, see below).
- **Allegro.sid**: byte-diff after reassembly: 99.8150% (12/6486 bytes
  differing, in 6 small clusters: `$40ff`, `$4125-4126`, `$4128-4129`,
  `$41b6`, `$41d1-41d3`, `$41e7-41e9`). Every cluster is a self-modified
  operand/pointer byte the disassembly's own `.asm` shows both written
  (`stx init+1`, `sta l4125+1`, `sta l4128+1/+2`, `sta l41b6+1`) and read —
  SIDdecompiler captured the post-execution drifted value, not the pristine
  on-disk constant (same mechanism as KB entries 17/43). Patched all 12
  bytes directly in the assembled `.prg` to the real file's own pristine
  values (computed from the PSID payload directly, not guessed) →
  **100.0000% byte-exact**.
- **Canon.sid**: identical 6-cluster pattern at the identical addresses,
  identical patch values (`$40ff:$80→$6a`, `$4125-26:$cc48→$0742`,
  `$4128-29:$667f→$0000`, `$41b6:$ff→$00`, `$41d1-d3:$ffffff→$000000`,
  `$41e7-e9:$88898a→$898a8b`) — confirms these are fixed player-code
  constants, not song-data drift. → **100.0000% byte-exact**.
- Trace-diff (`sidm2-sid-trace.exe`, 50 frames, init `$40fe` play `$41b1`,
  writes captured to `$D400-$D418`): both files' patched reconstruction
  produced a byte-for-byte identical `frame,cycle,register,old_val,new_val`
  log to the real file's own trace — **0 differences, register-write-exact**
  on both Allegro (183 lines / ~35 writes over the trace window) and Canon
  (90 lines).

**Not covered by this verification**: `Skyfox.sid`, the 19th/last file
under this tag, uses an entirely different load/init/play (`$27bd`/`$2a56`/
`$28a3`) — confirmed via its own `-v2` map to be a structurally different
build (almost certainly the real EA game's in-game rip, not the generic
demo-tune stub the other 18 files share — see quirks). Data
format/effects/zero-page beyond the one `$64/$65` pointer pair spotted
remain `TODO` — this pass verified playback fidelity, not the full internal
format per the playbook's steps 3-5.

## Sources

See the `sources` array — Wikipedia (2 pages), VGMPF, CSDb (release +
scener), and HVSC Musicians.txt.
