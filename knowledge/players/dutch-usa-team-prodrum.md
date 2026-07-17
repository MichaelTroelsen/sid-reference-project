# Pro-Drum (Dutch USA-Team)

```json
{
  "id": "dutch-usa-team-prodrum",
  "name": "Pro-Drum (Dutch USA-Team)",
  "aliases": ["Dutch-USA_Team/ProDrum"],
  "authors": ["Marco Swagerman (MC), The Dutch USA-Team"],
  "released": "1988",
  "status": "stub",
  "platform": "Native C64 tool — a 2-track digi-drum sequencer (not a full song editor), distributed as a scene D64 release. Closed classic tool; no source/license located.",
  "csdb_release": 20672,

  "memory": {
    "load_address": "TODO: not documented publicly",
    "zero_page": "TODO",
    "layout": "TODO: no published memory map"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO (described publicly only as '2-track sequences' of pre-assigned digi/drum samples — no byte-level format documented)",
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
    "SAME TEAM AS TWO OTHER CARDED TOOLS, but NOT a confirmed code-sharing edge: The Dutch USA-Team also made Rock Monitor (soundmonitor.md-derivative, coded by OPM=Oscar Giesen) and Music Assembler (music-assembler.md, coded by MC+OPM jointly). Pro-Drum's CSDb credits list MC (Marco Swagerman) alone for code+music on both Pro-Drum 1 and Pro-Drum 2 — a different authorship split than either sibling tool. No source/manual states Pro-Drum reuses RockMon's or MA's player routine, so no `edges` entry is asserted here; flagging the team link as a lead only.",
    "Pro-Drum is a DEDICATED DRUM SEQUENCER, not a music tracker: contemporary description is '2-track sequences with preassigned electro-era digi-samples', prized for 'rock-solid timing and easy interface' but criticized for lacking MIDI sync (c64music.blogspot.com, 2005 retrospective). This is a narrower tool than RockMon/MA, consistent with why only 9 files in this collection are tagged with its signature.",
    "VERSION HISTORY: Pro-Drum 1 (CSDb id 20672, 1988, = 'Professional Drums Part 1', released with Fucked Beyond Repair per CSDb id 153558, 3 Jun 1988) -> Pro-Drum 2 (CSDb id 33854, 1988, different/expanded sample bank per user comments) -> Pro-Drum V2.0 by Antifan/Equinoxe (CSDb id 74041, undated, credited 'totally rewritten' digital player with a different sample bank, code credited to Antifan AND MC). The Antifan V2.0 remake does not appear as a separate raw tag in this dataset's COVERAGE.md, so it's not known whether any catalogued .sid uses it, or whether SIDId's single 'Dutch-USA_Team/ProDrum' signature would even distinguish it from the MC originals.",
    "SMALL, CONCENTRATED USAGE: 9 files across 4 composers — Commander (5), Ice-T (2), Pilot (1), PVCF (1) (aggregated from data/composers/*.json). 3 of the 4 are Dutch (Commander, Ice-T, Pilot); PVCF is German. Commander alone accounts for 56% of files — signal of a small-scene tool used mainly by one or two people close to the DUSAT circle, not a widely-redistributed editor (contrast Rock Monitor's 163-composer spread).",
    "Unrelated same-name tool: 'Prodrum V3.3' by Kosa/Samar (1999, per a Lemon64 thread) is a much later, unaffiliated drum program reusing the 'Prodrum' name — do not conflate it with this DUSAT 1988 tool."
  ],
  "sources": [
    "sidid:Dutch-USA_Team/ProDrum (author 'The Dutch USA-Team', released 1988, reference https://csdb.dk/release/?id=20672) — via deepsid_dl/sidid.nfo, imported into data/sidid.json",
    "CSDb Pro-Drum 1 (1988, code+music: MC): https://csdb.dk/release/?id=20672",
    "CSDb Pro-Drum 2 (1988, code+music: MC, different sample bank): https://csdb.dk/release/?id=33854",
    "CSDb Professional Drums Part 1 (3 Jun 1988, DUSAT + Fucked Beyond Repair, AKA 'Pro-Drum 1'): https://csdb.dk/release/?id=153558",
    "CSDb Pro-Drum V2.0 by Antifan/Equinoxe ('totally rewritten' digital player, different sample bank; code: Antifan + MC): https://csdb.dk/release/?id=74041",
    "C64Music! blog, 'The Commodore 64 as a Drum machine' (2005) — contemporary description of Pro-Drum v2.0's feature set and reputation: http://c64music.blogspot.com/2005/11/commodore-64-as-drum-machine.html",
    "Sibling cards for the same author team: knowledge/players/rockmonitor.md (Rock Monitor, OPM-coded), knowledge/players/music-assembler.md (Music Assembler, MC+OPM-coded) — team link only, no confirmed routine sharing with Pro-Drum",
    "Local dataset: 9 files / 4 composers tagged Dutch-USA_Team/ProDrum (rank #33 uncarded family before this card; see knowledge/COVERAGE.md, computed from data/composers/*.json)"
  ]
}
```

## Overview

Pro-Drum is a native C64 tool by **The Dutch USA-Team** (DUSAT) — specifically
credited to **Marco Swagerman (MC)** — first released in 1988 as a dedicated
2-track digi-drum sequencer, distinct from the same team's fuller music
editors [Rock Monitor](rockmonitor.md) (coded by OPM) and
[Music Assembler](music-assembler.md) (coded by MC+OPM). It let users lay
down rhythm tracks from pre-assigned electro-era digi-samples with, per a
period retrospective, "rock-solid timing" but no MIDI sync. In this dataset
it is a small, concentrated family: 9 files across 4 composers, over half
from a single composer (Commander), consistent with a narrow scene tool
rather than a broadly-adopted editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: this is a **drum sequencer, not
a tracker** (narrower scope than its DUSAT siblings); the **team link to
Rock Monitor/Music Assembler is real but not a confirmed code-sharing edge**
(different credited coders, no source/manual states routine reuse); there is
a **documented version history** (Pro-Drum 1 → 2 → Antifan's V2.0 rewrite)
that this dataset's single raw tag does not distinguish between; and an
**unrelated later tool** ("Prodrum V3.3" by Kosa/Samar, 1999) shares the name
by coincidence.

## Disassembly notes

None done here. No public disassembly, source, or memory-map documentation
was found for Pro-Drum's player routine — it remains a closed classic scene
tool distributed only as a D64 disk image. A future RE pass would need to
start from a representative `.sid`'s PSID header (init/play addresses) and
trace it live, the same way `music-assembler.md` and other DUSAT-team tools
were approached, since no source exists to read instead.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
team, release year, version history, usage concentration) are confirmed,
from SIDId and CSDb. Every runtime field is honestly `TODO`: no public
source or disassembly of Pro-Drum's player routine was located.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb releases for
Pro-Drum 1, Pro-Drum 2, Professional Drums Part 1, and Antifan's Pro-Drum
V2.0 rewrite, a 2005 retrospective blog post describing the tool's feature
set, and the sibling `rockmonitor.md`/`music-assembler.md` cards for the
same author team.
