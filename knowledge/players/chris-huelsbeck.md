# Chris Hülsbeck (game player routine)

```json
{
  "id": "chris-huelsbeck",
  "name": "Chris Hülsbeck (game player routine)",
  "aliases": ["Chris_Huelsbeck"],
  "authors": ["Chris Hülsbeck"],
  "released": "1985+ (Musicmaster driver begun 1985; Final Musicplayer Jul 1987)",
  "status": "stub",
  "platform": "Chris Hülsbeck's in-GAME 6502 music routine (the Musicmaster / Final Musicplayer era) — DISTINCT from his SoundMonitor editor and from TFMX. Player-ID-fingerprinted across ~10 files.",
  "csdb_release": null,

  "memory": { "load_address": "TODO (per-game)", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO (reputation for high-quality/multispeed SID sound).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["soundmonitor"], "same_effect_encoding_as": [] },

  "quirks": [
    "SCOPE (load-bearing): the DeepSID `Chris_Huelsbeck` tag is his in-game PLAYER routine, NOT the SoundMonitor editor (carded as [[soundmonitor]]) and NOT TFMX (tagged separately as `TFMX`). In his composer folder the files split across THREE tags — Chris_Huelsbeck (~10), TFMX (~16), SoundMonitor/MusicMaster (~13). Don't conflate the three.",
    "LINEAGE / timeline: Musicmaster (driver, begun 1985, Profi-Ass 64, composed in hex) → SoundMonitor (1986, the EDITOR written FOR Musicmaster — so the soundmonitor card is the editor for THIS player, hence shares_routine_with) → The Final Musicplayer (Jul 1987, optimised Musicmaster, private to Hülsbeck + Georg Brandt) → TFMX for C64 (summer 1988, a NEW system, separate tag). So this tag ≈ the Musicmaster/Final Musicplayer in-game routine.",
    "GAMES on this tag (from the tagged files): The Great Giana Sisters, Katakis, Bad Cat, Danger Freak, Jinks, Hard'n'Heavy, To be on Top, Oxxonian, The Antics. NOTE: R-Type, Starball, Circus Attractions, Grand Monster Slam, Bugbomber are tagged TFMX — do NOT attribute those here.",
    "Techniques: arpeggio-simulated chords (SoundMonitor heritage); a userport sampler as a 4th voice for digi percussion/bass (with Peter Thierolf, 1986-87 — the separate Huelsbeck_Digi tags); later TFMX abstracted this into 'sound macros'.",
    "Driver internals (memory map, ZP, init/play, format, effects) all UNKNOWN — per-game. TODO: trace an HVSC file (e.g. The_Great_Giana_Sisters.sid, Katakis.sid) for confirmed init/play + playback, then disassemble."
  ],
  "sources": [
    "Wikipedia (driver timeline, TFMX): https://en.wikipedia.org/wiki/Chris_Huelsbeck",
    "VGMPF (Musicmaster/Final Musicplayer detail, games): https://www.vgmpf.com/Wiki/index.php?title=Chris_H%C3%BClsbeck",
    "CSDb scener 8645 + local data/sidid.json (authorship of the tag family, Huelsbeck_Digi, TFMX): https://csdb.dk/scener/?id=8645",
    "Local dataset: ~10 files tagged Chris_Huelsbeck (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Chris_Huelsbeck` tag is Chris Hülsbeck's in-game C64 music player — the
**Musicmaster / Final Musicplayer** routine (begun 1985) — carrying his game
soundtracks (Giana Sisters, Katakis, Bad Cat…). It is **distinct from** his
[SoundMonitor](soundmonitor.md) editor (which was written *for* Musicmaster)
and from his later **TFMX** system (a separate tag). ~10 files here.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is the **three-tag split**
(Chris_Huelsbeck game player vs SoundMonitor editor vs TFMX), plus the Musicmaster
→ SoundMonitor → Final Musicplayer → TFMX timeline (hence `shares_routine_with:
soundmonitor` — the editor for this player). Watch the game attributions
(R-Type etc. are TFMX, not here).

## Disassembly notes

None here; per-game and undocumented. Trace an HVSC Hülsbeck game SID
(Giana Sisters / Katakis) for init/play + playback, then disassemble.

## Verification

**Not verified — `status: stub`.** Timeline/lineage/scope are Wikipedia/VGMPF/
SIDId-sourced; all runtime internals are `TODO`.

## Sources

See the `sources` array — Wikipedia, VGMPF, CSDb, and the local SIDId data.
