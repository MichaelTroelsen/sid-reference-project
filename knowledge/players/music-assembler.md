# Music Assembler

```json
{
  "id": "music-assembler",
  "name": "Music Assembler",
  "aliases": ["Music_Assembler", "Music-Assembler", "MA"],
  "authors": ["Marco Swagerman (MC)", "Oscar Giesen (OPM)"],
  "released": "1989 (V1.0, Feb 1989; developed Nov 1987 – Feb 1989)",
  "status": "in-progress",
  "platform": "Native C64 SID tool by The Dutch USA-Team. Closed classic tool (no source/license located).",
  "csdb_release": 94388,

  "memory": {
    "load_address": "TODO: not documented publicly",
    "zero_page": "TODO",
    "layout": "TODO: no published memory map for the C64 SID replay"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO: no documented init/play convention for the C64 replay"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO (Amiga .MA sibling format uses position lists — indicative only, not the C64 replay)",
    "patterns": "TODO (Amiga .MA sibling uses 'tracks')",
    "instruments": "TODO (Amiga .MA sibling has instruments + sample info/data — MA supports digi/samples)",
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
    "LINEAGE (the genuinely useful find): SIDId's signature database (Cadaver's sidid.cfg) tags VoiceTracker (1991) and Music_Mixer (1991) as 'Editor based on the Music Assembler player' — so MA's replay/packed format was reused by at least those two later C64 editors. Those aren't carded yet, so it's noted here rather than wired as a graph edge.",
    "CORRECTION to a claim floated during research: the 'based on the Music Assembler player' note is from SIDId, NOT from SID-Wizard's docs (the SID-Wizard 1.4/1.9 manuals have zero mentions of Music Assembler). Do not draw an MA↔SID-Wizard edge.",
    "The Dutch USA-Team's earlier tool was Rock Monitor (a SoundMonitor derivative with an added digi-drum routine) — so this project's separate 'DUSAT/RockMon' tag is by the same team and predates MA. A lineage worth wiring when RockMon is carded.",
    "An Amiga '.MA' module format shares the name and is a related but SEPARATE format from the C64 SID replay (playable by NostalgicPlayer); don't use Amiga-side structure as authoritative for the C64 player.",
    "6,127 files across 352 composers — the 2nd-most-used uncarded player. A 'v1.4' is mentioned on one forum but uncorroborated by CSDb (TODO)."
  ],
  "sources": [
    "CSDb release (authors, dates, 28 example SIDs): https://csdb.dk/release/?id=94388",
    "SIDId signature comment (VoiceTracker / Music_Mixer 'based on the Music Assembler player') — via deepsid_dl/sidid.nfo (Cadaver's sidid.cfg)",
    "Dutch USA-Team history: https://amiga.cafe/forum/main-forum/aan-de-bar/24653-dutch-usa-team-music-assembler ; Rock Monitor V5 https://csdb.dk/release/?id=10632",
    "NostalgicPlayer MA agent (Amiga .MA format structure — sibling, not the C64 replay): https://github.com/neumatho/NostalgicPlayer/tree/master/Source/Agents/Players/MusicAssembler",
    "JC64dis ships example 'Music Assembler player' .dis disassembly projects — a public RE starting point: https://iceteam.itch.io/jc64dis",
    "sidid:Music_Assembler (authors MC & OPM, 1989, The Dutch USA-Team, CSDb 94388)",
    "Local dataset: 6,127 files tagged Music_Assembler (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Music Assembler is a native C64 SID editor by **Marco Swagerman (MC)** and
**Oscar Giesen (OPM)** of **The Dutch USA-Team**, released February 1989 after
15 months of development. It's the second-most-used uncarded player here
(6,127 files / 352 composers) and was influential enough that later C64 editors
(**VoiceTracker**, **Music_Mixer**) were built on its player, per SIDId's
signature notes. The team's earlier tool, **Rock Monitor** (a SoundMonitor
derivative), is the same lineage as this project's separate `DUSAT/RockMon` tag.

## Quirks & gotchas

See the `quirks` array. The load-bearing item is the **lineage**: MA's replay
was reused by VoiceTracker and Music_Mixer (a real, SIDId-sourced edge to wire
when those are carded) — and importantly, the "based on the Music Assembler
player" note is **SIDId's, not SID-Wizard's** (a mix-up worth not repeating).
Also: the **Amiga `.MA` format is a separate sibling**, not the C64 replay.

## Disassembly notes

None done here; the C64 replay's memory map/format is undocumented online. Two
leads: the Amiga `.MA` structure (position lists / tracks / instruments +
samples) is indicative of the general model, and **JC64dis ships example
"Music Assembler player" disassembly projects** — the most concrete public
starting point for an RE pass (then assemble + trace via `sidm2-siddump`).

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC Music_Assembler `.sid` (load $C000, init $C048, play $C021, 163 register writes / 50 frames) — the replay runs; entry addresses are per-file. Identity, lineage, and history are
web/CSDb-sourced; every runtime field is `TODO` (no public C64 memory map).

## Sources

See the `sources` array — CSDb release, SIDId's lineage note, Dutch USA-Team
history, the NostalgicPlayer Amiga-format agent, and the JC64dis disassembly
projects.
