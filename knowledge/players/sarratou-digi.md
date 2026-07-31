# Sarratou_Digi

```json
{
  "id": "sarratou-digi",
  "name": "Sarratou_Digi",
  "aliases": ["Sarratou_Digi"],
  "authors": ["Pierre Sarratou"],
  "released": "1989 Demonware — attested identically (census: all 5 tagged files' CSDb `Released` field checked via the CSDb webservice, not a sample) on SID ids 52898, 52899, 52900, 52902, 52903. This is the game's completion/intended-release year: the C64 version of Evil Garden was finished in 1989 but never commercially released — Demonware shelved it in favour of the Amiga version — and stayed unpublished until Games That Weren't's public release of the recovered C64 build in 2016 (https://www.gamesthatwerent.com/2016/05/evil-garden-found-and-released-more/, https://www.gamesthatwerent.com/gtw64/evil-garden/)",
  "status": "stub",
  "platform": "Native C64, in-game digi/sample routine custom-coded for one cancelled game: Evil Garden (Demonware, C64, completed 1989, publicly released only in 2016 by Games That Weren't). Per GTW64's writeup, programmer Lutz Vieweg (credited in-game as Karl Vieweg per Lemon64) wrote custom sample-replay software that triggers the NMI to modulate the SID's output volume for 4-bit-digitized percussion playback, while musician Dennis Pierre Sarratou recorded the percussion samples via microphone and wrote the three-channel SID music itself. Sources: https://www.gamesthatwerent.com/gtw64/evil-garden/, https://www.gamesthatwerent.com/2016/05/evil-garden-found-and-released-more/, https://www.lemon64.com/game/evil-garden — no CSDb scener profile, tool/release entry, or SIDId tag exists to add further platform detail beyond this",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

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
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Sarratou_Digi' returns undefined).",
    "No CSDb scener profile was locatable for Pierre Sarratou during this research pass: the local composer profile (data/composers/pierre-sarratou.json) records csdb_id 0 and a blank country field, and a direct CSDb search for 'Pierre Sarratou' returned no matching scener result. As a result, no independent scene-credit corroboration (a 'Sampling' role or otherwise) could be checked for this tag — identity here rests solely on the local HVSC composer-folder attribution and the PSID header author field.",
    "Fully single-composer usage: all 5 locally-tagged files belong to Pierre Sarratou (data/composers/pierre-sarratou.json), and all four distinct titles follow the pattern 'Evil Garden N (...)' (Title/Game Complete/Game Over, etc.) — reading as one game or production's soundtrack subtunes/variants rather than a spread across unrelated works.",
    "The digi/sample replay routine itself was, per GTW64's writeup, written by programmer Lutz Vieweg (in-game credit 'Karl Vieweg'), not by Sarratou: Vieweg coded the NMI-triggered SID-volume-modulation playback for 4-bit-digitized percussion, while Sarratou (full name Dennis Pierre Sarratou per Lemon64/AllMusic) recorded the percussion samples by microphone and composed the 3-channel SID music. The `authors` field follows this card's/HVSC's composer-folder convention (Sarratou, since the tag/folder is his), but the actual replay-code author may be Vieweg — flagged here since no source states this as a named, reusable 'player' tool, only a one-game bespoke routine. Source: https://www.gamesthatwerent.com/gtw64/evil-garden/",
    "Evil Garden (C64) was never a commercial or scene release in 1989 — it was completed but shelved by Demonware in favour of the Amiga version, and only surfaced publicly in 2016 via the Games That Weren't preservation project. A CSDb webservice query at depth=4 on all 5 SID entries (52898/52899/52900/52902/52903) returned no release/UsedIn linkage, consistent with there being no CSDb release entry for the game — hence `csdb_release: null` is confirmed, not just unresearched."
  ],
  "sources": [
    "CSDb SID-file entries (census of all 5 tagged files via CSDb webservice, `Released` field identical on each): https://csdb.dk/sid/?id=52898, https://csdb.dk/sid/?id=52899, https://csdb.dk/sid/?id=52900, https://csdb.dk/sid/?id=52902, https://csdb.dk/sid/?id=52903",
    "Local dataset: 5 files tagged 'Sarratou_Digi', all under composer Pierre Sarratou — data/composers/pierre-sarratou.json",
    "data/sidid.json (checked: no 'Sarratou_Digi' entry exists in byTag, confirming the absence noted above)",
    "CSDb scener search for 'Pierre Sarratou' (no matching result returned, confirming the absence noted above): https://csdb.dk/search/?seinsel=6&search=Pierre+Sarratou",
    "Games That Weren't, 'Evil Garden (C64)' entry — developer/coder/music credits, sound-routine description (NMI/SID-volume digi playback): https://www.gamesthatwerent.com/gtw64/evil-garden/",
    "Games That Weren't, 'Evil Garden found and released + more!' (2016 recovery/release writeup): https://www.gamesthatwerent.com/2016/05/evil-garden-found-and-released-more/",
    "Lemon64 game entry 'Evil Garden' — publisher/credits confirmation (musician: Pierre Sarratou, programmer: Karl Vieweg): https://www.lemon64.com/game/evil-garden"
  ]
}
```

## Overview

Sarratou_Digi is the local raw tag for a digi/sample-playback routine used in
exactly one game: **Evil Garden**, a Commodore 64 Centipede-style shoot'em up
completed by Demonware in 1989 but never commercially released — it stayed
unpublished until the Games That Weren't preservation project put the
recovered C64 build online in 2016. The music/samples are credited to
**Pierre Sarratou** (full name Dennis Pierre Sarratou), whose HVSC composer
profile records no CSDb scener id and no country; the digi replay routine
itself was, per Games That Weren't, coded by programmer Lutz Vieweg
(in-game credit "Karl Vieweg"), who triggered the NMI to modulate the SID's
output volume for 4-bit-digitized, microphone-sampled percussion while
Sarratou wrote the three-channel SID music. No SIDId entry exists for this
tag, so identity beyond the game credits rests on the local HVSC
composer-folder attribution and the PSID header's author field. All 5
locally-tagged files (a full census, not a sample) belong to Sarratou, are
all dated "1989 Demonware" identically on CSDb, and their titles
("Evil Garden 1-4", "ingame 1-2", "ingame 3-6") are that one game's subtune
set.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists for this
tag; (2) no CSDb scener profile could be located for the author, so no
independent scene-credit corroboration was possible from CSDb itself — an
unusually thin provenance trail even by this batch's standards, though
Games That Weren't and Lemon64 corroborate the game credits independently;
(3) 100% single-composer usage, one game's soundtrack, confirmed by census
of all 5 tagged files, not a sample; (4) the actual digi replay code is
credited to the game's programmer (Lutz/Karl Vieweg), not to Sarratou, per
Games That Weren't — the `authors` field follows HVSC/composer-folder
convention rather than "who wrote the replay routine".

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`. Games That Weren't's writeup
describes the playback *technique* in prose (NMI-triggered SID volume
modulation for 4-bit digi) but is not a disassembly and gives no
address/format detail, so nothing from it was promoted into Tier 3.

## Verification

Not verified. This card is `status: stub`. Tier 1/2 identity and provenance
are now reasonably well attested (game credits corroborated independently
by Games That Weren't and Lemon64; release year and its absence-of-CSDb-release
confirmed by a census of all 5 tagged files plus a depth=4 CSDb webservice
query), but no runtime fact has been disassembled or traced, and no SIDId or
CSDb scener profile exists for the author.

## Sources

See the `sources` array — a full census of all 5 tagged CSDb SID-file
entries, local composer-file aggregation, the negative results of
SIDId/CSDb-scener lookups, and two independent game-history sources (Games
That Weren't, Lemon64) that corroborate the game credits and sound-routine
description.
