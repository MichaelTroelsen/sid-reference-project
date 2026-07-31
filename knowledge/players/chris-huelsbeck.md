# Chris Hülsbeck (game player routine)

```json
{
  "id": "chris-huelsbeck",
  "name": "Chris Hülsbeck (game player routine)",
  "aliases": ["Chris_Huelsbeck"],
  "authors": ["Chris Hülsbeck"],
  "released": "1985+ (Musicmaster driver begun 1985; The Final Musicplayer Jul 1987)",
  "status": "stub",
  "platform": "Native C64 6502 in-game music player (Musicmaster / The Final Musicplayer routine), embedded in game SID rips — NOT a standalone tool release. DISTINCT from his [[soundmonitor]] editor (carded separately) and from his later TFMX system (tagged separately as `TFMX`).",
  "csdb_release": null,

  "memory": { "load_address": "TODO: per-game (SoundMonitor's MusicMaster player is at $C000-$CE26 in editor rips; game builds may vary)", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO: per-row tempo (based on the MusicMaster player documented in the [[soundmonitor]] card).",
  "data_format": { "order_list": "TODO: likely row/bar table-walking (see soundmonitor card's MusicMaster format)", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["soundmonitor"], "same_effect_encoding_as": [] },

  "quirks": [
    "SCOPE (load-bearing): the DeepSID `Chris_Huelsbeck` tag is Hülsbeck's in-game PLAYER routine — NOT the SoundMonitor editor (carded as [[soundmonitor]]) and NOT TFMX (tagged separately as `TFMX`). In his composer folders the files split across THREE tags: Chris_Huelsbeck (22 files), TFMX (32 files across two composer folders), and SoundMonitor/MusicMaster variants (~26 files). Don't conflate the three.",
    "FILE COUNT: 22 files tagged `Chris_Huelsbeck` across 3 composer folders — Chris Huelsbeck (10), Chris Hulsbeck/alt-spelling (10), Georg Brandt (2). This is extremely concentrated: only 2 distinct composers (Hülsbeck himself + Georg Brandt, who was the only person Hülsbeck shared The Final Musicplayer with).",
    "LINEAGE / timeline: Musicmaster (driver, begun 1985, Profi-Ass 64, composed in hex) → SoundMonitor (1986, the editor written FOR Musicmaster — so the soundmonitor card covers the editor and documents this player's internals, hence `shares_routine_with`) → The Final Musicplayer (Jul 1987, optimised Musicmaster, private to Hülsbeck + Georg Brandt only) → TFMX for C64 (summer 1988, a NEW system, separate tag). So this tag ≈ the Musicmaster/Final Musicplayer in-game routine.",
    "GAMES on this tag (from tagged files): The Great Giana Sisters, Katakis, Bad Cat, Danger Freak, Jinks, Hard'n'Heavy, To be on Top, Oxxonian, The Antics. NOTE: R-Type, Starball, Circus Attractions, Grand Monster Slam, Bugbomber are tagged TFMX — do NOT attribute those here.",
    "Georg Brandt's use (provenance confirmed): Brandt has 2 files tagged Chris_Huelsbeck ('In 80 Days Around the World', 'Street Gang') — VGMPF confirms Hülsbeck gave The Final Musicplayer 'only to Georg Brandt' (https://www.vgmpf.com/Wiki/index.php?title=Soundmonitor), and these game rips corroborate that.",
    "Techniques: arpeggio-simulated chords (SoundMonitor heritage); a userport sampler as a 4th voice for digi percussion/bass (with Peter Thierolf, 1986-87 — the separate Huelsbeck_Digi tags); TFMX later abstracted this into 'sound macros'.",
    "The MusicMaster player documented in the [[soundmonitor]] card (memory at $C000-$CE26, init=$C000, play=$C475/$C020) is the same player family — but the `Chris_Huelsbeck` game rips may embed variant builds with different addresses or the Final Musicplayer optimisations.",
    "NO PUBLIC SOURCE CODE FOUND. Extensive search of GitHub, CSDb source-zips, Codebase64, Lemon64, Forum64 yielded nothing. SoundMonitor was a type-in hex listing in 64'er magazine (Oct 1986, ~11KB hex dump), not source code. Musicmaster and The Final Musicplayer were private, never published as source. No known disassembly of the game-embedded variants exists.",
    "Re-research pass, 2026-07-31 (targeted at `csdb_release`, which stays `null`): censused every CSDb `type=sid` entry behind all 22 tagged file records — they resolve to only 12 DISTINCT CSDb sid ids, because the `chris-huelsbeck.json` and `chris-hulsbeck.json` composer caches are duplicate entries (alt-spelling folder names) pointing at the SAME 10 physical files with IDENTICAL csdb_id values (13979, 13983, 13990, 13992, 13997, 13999, 14005, 14007, 14010, 14024), plus Georg Brandt's 2 distinct files (4111, 4119). Each entry's own `Released` field (via csdb-client.js `type=sid`, not a title-derived guess) gives an EARLIEST TUNE ATTESTED of 1987 (Antics: Chip War, Antics: Dulcedo Cogitationis, Bad Cat, Jinks, To be on Top, Great Giana Sisters, In 80 Days Around the World, Street Gang — all '1987'), then 1988 (Danger Freak, Katakis) and 1989 (Hard'n'Heavy, Oxxonian) — this is the tune-level attestation, DISTINCT from the driver's own 1985 origin date already sourced from VGMPF for `released` above. Every `Released` value names a game/publisher (e.g. '1987 Rainbow Arts', '1987 Time Warp'), never a CSDb release id for a tool — confirming these are per-game tune credits, not player-tool releases.",
    "Re-research pass, 2026-07-31 (continued): fetched Chris Hülsbeck's own CSDb scener page (id 8645, `type=scener`) directly via the webservice — its `<Released>` credit list (releases where HE is the credited releaser, i.e. tool/production releases as opposed to music-only credits) contains exactly TWO entries: 'Soundmonitor V1.0' (release 59929, type 'C64 Tool', Oct 1986 — the SoundMonitor EDITOR, already the subject of the soundmonitor.md card, not this game-player routine) and 'Shades' (release 20462, a music-competition entry). No 'Musicmaster' or 'Final Musicplayer' tool release exists anywhere in his CSDb credit list. This directly corroborates VGMPF's 'never released' claim (already used for the TFMX sibling card) for this driver too: `csdb_release` is correctly `null` because there is nothing to find, not because research is incomplete. SIDId's `sidid.json` also carries NO `byTag` entry at all for `Chris_Huelsbeck` (unlike `TFMX`, which has an entry with no `reference`) — this tag is a DeepSID-only `player` field, not a SIDId fingerprint, so there is no `sidid.nfo` reference to check either."
  ],
  "sources": [
    "VGMPF Soundmonitor (Musicmaster driver, Final Musicplayer, only shared with Georg Brandt): https://www.vgmpf.com/Wiki/index.php?title=Soundmonitor",
    "VGMPF Chris Hülsbeck (Musicmaster timeline, TFMX history): https://www.vgmpf.com/Wiki/index.php?title=Chris_H%C3%BClsbeck",
    "Wikipedia (C64 career overview, 64'er type-in listing): https://en.wikipedia.org/wiki/Chris_Huelsbeck",
    "CSDb Soundmonitor V1.0 (release 59929, type-in listing origin): https://csdb.dk/release/?id=59929",
    "CSDb Soundmonitor V1.1 (release 10198, CCT improvement, play=$C475): https://csdb.dk/release/?id=10198",
    "CSDb scener 8645 (Huelsbeck's author page, tool release history): https://csdb.dk/scener/?id=8645",
    "Local dataset: 22 files tagged Chris_Huelsbeck across 3 composer folders (see data/composers/chris-huelsbeck.json, chris-hulsbeck.json, georg-brandt.json)",
    "SoundMonitor knowledge card (documents the MusicMaster player internals shared by this routine): knowledge/players/soundmonitor.md",
    "Re-research pass, 2026-07-31: CSDb webservice `type=sid` census of all 12 distinct sid ids behind the 22 tagged file records (13979, 13983, 13990, 13992, 13997, 13999, 14005, 14007, 14010, 14024, 4111, 4119) via scripts/lib/csdb-client.js — each entry's `Released` field read directly, e.g. https://csdb.dk/webservice/?type=sid&id=13979 ('1987 Time Warp'). Establishes earliest tune attested as 1987, distinct from the driver's own 1985 origin date.",
    "Re-research pass, 2026-07-31: CSDb webservice `type=scener` for Chris Hülsbeck (id 8645) via curl (node's fetch hung on this endpoint at depth=4 — same landmine noted in prior batches; curl at default depth=2 worked): https://csdb.dk/webservice/?type=scener&id=8645&depth=2 — `<Released>` credit list contains only Soundmonitor V1.0 (release 59929, the editor) and Shades (release 20462, a competition entry); no Musicmaster/Final Musicplayer tool release exists, confirming `csdb_release: null` is correct rather than a research gap.",
    "Local dataset: data/sidid.json byTag has no entry for the key `Chris_Huelsbeck` — confirmed by direct key lookup, 2026-07-31 pass — this tag is a DeepSID `player` field, not a SIDId-fingerprinted tag."
  ]
}
```

## Overview

The `Chris_Huelsbeck` tag is Chris Hülsbeck's in-game C64 music player — the
**Musicmaster / The Final Musicplayer** routine (begun 1985, optimised through
1987) — carrying his game soundtracks (Giana Sisters, Katakis, Bad Cat, and
others). It is **distinct from** his [SoundMonitor](soundmonitor.md) editor
(which was written *for* Musicmaster, and whose card documents the shared
player internals) and from his later **TFMX** system (a separate tag).

22 files are tagged `Chris_Huelsbeck` in the dataset — 20 in Hülsbeck's own
folders (10 under `Huelsbeck_Chris`, 10 under the alternate-spelling
`Hulsbeck_Chris`) and 2 in Georg Brandt's folder. Brandt was the only person
Hülsbeck ever shared The Final Musicplayer with, per VGMPF. The extreme
composer concentration (2 individuals) confirms this is a personal, private
game-embedding routine, not a published tool.

All runtime internals are `TODO` — no source code, format spec, or published
disassembly of the game-embedded variants exists. The [SoundMonitor](soundmonitor.md)
card documents the editor-era Musicmaster player (memory at `$C000-$CE26`,
init=`$C000`, play=`$C475`/`$C020`), which is the same player family, but the
game rips may embed variant builds with different addresses or Final Musicplayer
optimisations.

## Quirks & gotchas

See the `quirks` array — the three most important are the **three-tag split**
(Chris_Huelsbeck game player vs SoundMonitor editor vs TFMX), the **Musicmaster
→ SoundMonitor → Final Musicplayer → TFMX timeline** (hence `shares_routine_with:
soundmonitor` — the editor for this player), and the **Georg Brandt connection**
(only person Hülsbeck shared the Final Musicplayer with, confirmed by his
2 tagged files). Also note that **no source code exists** — this was a private
player baked into games, never published.

## Disassembly notes

None here — per-game, undocumented, and no known public disassembly. The
[SoundMonitor](soundmonitor.md) card documents the Musicmaster player used by
the editor; the game-embedded `Chris_Huelsbeck` variants may differ. Tracing
an HVSC file (e.g. The_Great_Giana_Sisters.sid, Katakis.sid) for confirmed
init/play + playback would be the first step.

## Verification

**Not verified — `status: stub`.** Timeline, lineage, scope, and composer
concentration are sourced from VGMPF, Wikipedia, CSDb, and local dataset
analysis. No runtime facts have been confirmed — all Tier 3 fields remain
`TODO`. The SoundMonitor card documents the shared Musicmaster player but
the game-embedded variants tagged `Chris_Huelsbeck` may embed different builds.

## Sources

See the `sources` array — VGMPF (Soundmonitor + Chris Hülsbeck pages), Wikipedia,
CSDb (Soundmonitor V1.0/V1.1 releases, scener page), and the local composer
data. No public source code, format specification, or disassembly has been
located after extensive search.
