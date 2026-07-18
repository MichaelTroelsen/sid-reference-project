# Silas Warner Digi (Wolfenstein speech routine)

```json
{
  "id": "silas-warner-digi",
  "name": "Silas Warner Digi (Wolfenstein speech routine)",
  "aliases": ["Silas_Warner_Digi"],
  "authors": ["Silas S. Warner", "Alan Boyd (speech-synthesis tool co-creator, Apple II origin)"],
  "released": "TODO: no explicit year in SIDId (no entry at all for this tag); Castle Wolfenstein's original Apple II release was 1981, the C64 port 1983",
  "status": "stub",
  "platform": "Not a distributed tool — the digitized/synthesized German guard-speech routine embedded in Silas Warner's own Castle Wolfenstein and Beyond Castle Wolfenstein (Muse Software). Predicted and flagged as a separate, uncarded tag by knowledge/players/silas-warner.md before this card existed; that card's own `Silas_Warner` tag (Rescue Squad, Space Taxi) is a conventional music driver and does NOT cover this digi routine.",
  "csdb_release": null,

  "memory": { "load_address": "TODO: no disassembly performed", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "UNUSUALLY WELL-DOCUMENTED DIGI CLAIM FOR A 1-2 FILE TAG: this is one of the few tags in this batch where 'digi' is confirmed by real history rather than filename convention. Castle Wolfenstein (Apple II, 1981) is widely documented as featuring one of the earliest game speech-synthesis systems, 'The Voice,' created by Silas Warner together with audio engineer Alan Boyd — Warner voiced the German guards himself (shouting 'SS', 'Achtung', 'Schweinhund', 'Halt', 'Kaputt', etc.), and this was one of the game's most-cited distinguishing features. The C64 port (1983, Muse Software) is documented as carrying the same digitized-speech feature forward. This card's routine is the C64-side implementation of that speech playback, NOT necessarily byte-identical to the Apple II original (different CPU/sound hardware) — that porting relationship is plausible but not independently confirmed by a source describing the C64 code specifically (TODO).",
    "EXACTLY 2 FILES, BOTH BY WARNER HIMSELF, BOTH THE NAMESAKE GAMES: Castle Wolfenstein (CSDb sid id 31402, 11 subtunes) and Beyond Castle Wolfenstein (CSDb sid id 31401, 7 subtunes) — data/composers/silas-warner.json. No other composer uses this tag locally. This is the maximum possible personal-routine concentration (2/2 files, 1/1 composers), consistent with an in-house speech engine written for exactly these two titles and never reused elsewhere.",
    "SIDId (data/sidid.json) has NO entry at all for 'Silas_Warner_Digi' — unlike the plain 'Silas_Warner' tag, which also has no SIDId entry either (checked: byTag has neither key). Both Silas Warner tags in this project were fingerprinted by this project's own Player-ID tooling, not sourced from SIDId's byte-signature database.",
    "This card was explicitly anticipated: knowledge/players/silas-warner.md (status: in-progress, verified playback trace on the Silas_Warner tag) states in its own quirks that 'Silas_Warner_Digi... covers Castle_Wolfenstein.sid and Beyond_Castle_Wolfenstein.sid — almost certainly his own documented digitized-speech routine... Two distinct player identities from the same person, not a scope error.' This card fulfills that TODO without editing the parent card's verified facts.",
    "NOT MERGED with the plain Silas_Warner card despite same author and same composer folder: the two are distinct SIDId/Player-ID signatures (Silas_Warner is a conventional in-game music driver used on Rescue Squad/Space Taxi; Silas_Warner_Digi is presumably speech/sample playback used on the Wolfenstein games), and no source demonstrates the two share code."
  ],
  "sources": [
    "Local dataset: data/composers/silas-warner.json — 2 files tagged Silas_Warner_Digi (Castle Wolfenstein csdb sid id 31402, Beyond Castle Wolfenstein csdb sid id 31401), both author Silas S. Warner; see knowledge/COVERAGE.md row #125 (2 files)",
    "data/sidid.json: no entry for 'Silas_Warner_Digi' (checked, absent)",
    "Wikipedia — Castle Wolfenstein: https://en.wikipedia.org/wiki/Castle_Wolfenstein",
    "Medium (june gloom) — 'WW2 #36: Silas Warner's Wolfenstein': https://junegloom.medium.com/ww2-36-silas-warners-wolfenstein-1429d9237757 (Warner & Alan Boyd created 'The Voice' speech-synthesis utility; Warner voiced the German guards)",
    "Hardcore Gaming 101 — Castle Wolfenstein: https://www.hardcoregaming101.net/castle-wolfenstein/",
    "Lemon64 — Castle Wolfenstein (C64 port, Muse Software, 1983): https://www.lemon64.com/game/castle-wolfenstein",
    "knowledge/players/silas-warner.md (status: in-progress) — cited only for its own prediction of this tag's existence and scope; not edited by this card"
  ]
}
```

## Overview

`Silas_Warner_Digi` is the speech/sample-playback routine embedded in Silas S.
Warner's own **Castle Wolfenstein** (1981, Apple II original; C64 port 1983)
and **Beyond Castle Wolfenstein** — the games that introduced one of the
earliest speech-synthesis systems in a video game, "The Voice," co-created by
Warner and audio engineer Alan Boyd, used for the games' famous shouting
German guard voices. This is a **separate SIDId/Player-ID signature** from
the plain `Silas_Warner` tag (see `knowledge/players/silas-warner.md`, which
covers his conventional in-game music driver on *Rescue Squad* and
*Space Taxi* and explicitly predicted this card's existence). Locally it
appears in exactly **2 files, both by Warner himself**: *Castle Wolfenstein*
and *Beyond Castle Wolfenstein*.

## Quirks & gotchas

See the `quirks` array. The headline fact: unlike most `_Digi`-suffixed tags
in this batch, the "digi" claim here is backed by real, independently
documented game history (not just a suggestive filename) — Castle
Wolfenstein's digitized/synthesized German guard speech is one of its most
widely cited features. Also notable: maximum concentration (2/2 files, 1/1
composer), and this card was explicitly anticipated as a TODO by the sibling
`silas-warner.md` card rather than discovered fresh.

## Disassembly notes

None performed. No public source or disassembly of the C64 port's speech
routine was located in this pass — all Tier 3 fields (memory map, entry
points, data format) are `TODO`, not guessed. A natural next step would be a
disassembly of the C64 `Castle_Wolfenstein.sid`/`Beyond_Castle_Wolfenstein.sid`
files to identify whether the speech engine is closer to true PCM sample
playback or the phoneme-based synthesis historically associated with "The
Voice" on the Apple II.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established:
authorship, exact 2-file/1-composer local usage, and well-sourced game-history
context for the digi/speech claim. No SIDId entry exists for this tag. No
runtime behaviour has been confirmed or reconstructed.

## Sources

See the `sources` array — local dataset aggregation, Wikipedia, a dedicated
Medium retrospective on Warner's Wolfenstein/speech work, Hardcore Gaming 101,
Lemon64, and the sibling `silas-warner.md` card (cited, not edited).
