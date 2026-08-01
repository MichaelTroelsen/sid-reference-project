# Drum Studio

```json
{
  "id": "drum-studio",
  "name": "Drum Studio",
  "aliases": ["DrumStudio"],
  "authors": ["Mark Wilson"],
  "released": "1990 — developed by Mark Wilson, originally published by Interceptor Software, then budget-re-released under Interceptor's 'Players' label (which is what SIDId's 'Players Software' attribution refers to — 'Players' was not a separate company). The program's own in-memory copyright string reads '(c) 1989-1990 Mark Wilson' per a CSDb user comment — see quirks.",
  "status": "stub",
  "platform": "Native C64 application: a two-voice digital sample sequencer/drum machine (not a music-editor-with-SID-driver in the CheeseCutter/GoatTracker sense — it plays back user-arranged sequences of pre-recorded PCM-style drum samples, not synthesized SID voices per se). Up to 64 chainable sequences, joystick (port 2) step/real-time entry, optional Commodore SFX Soundexpander / Sound Sampler output boost ('DIGIBOOST'). Per c64-wiki.de and a Lemon64 forum thread.",
  "csdb_release": 59864,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId gives name 'Drum Studio', author 'Mark Wilson', released '1990 Players Software', reference CSDb release 59864. Fetching that CSDb page directly (via WebFetch, not a search-engine summary) confirms it is a 'C64 Crack' page (group: Legend, cracker: TMBC), not the original release; its one user comment (by 'Fred', 2014-03-17) reads verbatim: \"I've changed the release year to 1990 since in memory it has: '(c) 1989-1990 Mark Wilson.'\" — directly corroborating SIDId's author/year.",
    "'Players Software' (SIDId's publisher field) resolves to 'Players', a budget label (£1.99 tapes, 1986-1991) run by British publisher Interceptor Software/Interceptor Micros (founded 1982, Richard Paul Jones & Julian Jones) — NOT a standalone company. Drum Studio's original publisher was Interceptor Software itself; the Players/Players Premier release was a later budget re-issue. Per c64-wiki.de's infobox and en.wikipedia.org/wiki/Interceptor_Micros.",
    "A SECOND, separate CSDb crack release of the same title exists: release id 27211, 'Drum Studio' by Ikari/Talent/The Shaolin Monastery, dated 1990-08-12 (no credits listed on that page) — distinct from the SIDId-referenced 59864 (Legend/TMBC). Not used as `csdb_release` since SIDId's own reference is 59864, but noted as evidence the title circulated via multiple independent cracks.",
    "Per c64-wiki.de and a Lemon64 forum thread (viewtopic.php?t=13337): Drum Studio is a two-voice digital sample sequencer/drum machine, not a synthesized-SID-voice tracker — 7 sampled sounds (kick, snare, 4 basses, vocal) per one source, up to 64 chainable sequences, joystick-driven step/real-time entry with metronome, optional Commodore SFX Soundexpander/Sound Sampler ('DIGIBOOST') output boost. Available on both disk and cassette. This is a feature/identity description only, not a disassembly finding — no memory map or data format follows from it.",
    "POSSIBLE (not confirmed) SAME-PERSON LEAD: this project already has a card for a DIFFERENT Player-ID tag, 'Mark_Wilson' (knowledge/players/mark-wilson.md), covering a confirmed Scottish coder+musician (CSDb scener id 5989) active 1987-1990, with a traced sample file. The name, active years (1987-1990 there vs. 1989-1990 copyright here), and nationality context (UK-scene) all plausibly line up with this being the SAME Mark Wilson — but no CSDb scener page or other source directly cross-references 'Drum Studio' to scener id 5989 specifically, so this is recorded as a lead only. No `edges` entry is added (edges in this KB describe code/routine lineage between players, not composer identity), and the two cards are kept separate per this project's evidence rule.",
    "Census (full, not sampled): exactly 1 file across all of data/composers/*.json carries the 'DrumStudio' player tag — 'Volfied' (subtunes: 5, csdb_id 31495), composer Mark Wilson, in mark-wilson.json. Too small a sample for concentration analysis, but consistent with either reading (a personal tool used once, or a real released tool that happens to have only 1 file surviving in this collection). Note the tag is absent from knowledge/COVERAGE.md's grouped listing (below its inclusion threshold at 1 file) and from the CSDb webservice's release payload (which carries no user-comment field — the corroborating comment quote above required an HTML fetch, not the XML webservice)."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['DrumStudio'])",
    "CSDb release id 59864 ('Drum Studio', C64 Crack, group Legend, cracker TMBC, user comment quoting '(c) 1989-1990 Mark Wilson'): https://csdb.dk/release/?id=59864",
    "CSDb release id 27211 (second, independent 'Drum Studio' crack, Ikari/Talent/The Shaolin Monastery, 1990-08-12): https://csdb.dk/release/?id=27211",
    "c64-wiki.de infobox (Developer: Mark Wilson; Publisher: Interceptor Software, Players budget-release; Genre: Musikbearbeitung; 1990): https://www.c64-wiki.de/wiki/Drum_Studio",
    "Wikipedia, Interceptor Micros (Players/Players Premier budget labels, 1986-1991, £1.99/£2.99): https://en.wikipedia.org/wiki/Interceptor_Micros",
    "Lemon64 forum thread on Drum Studio (Players Premier, 1990, DIGIBOOST feature): https://www.lemon64.com/forum/viewtopic.php?t=13337",
    "Sibling card, same author name, different (already-carded, confirmed-distinct-person-pending) tag: knowledge/players/mark-wilson.md",
    "Local dataset: 1 file tagged DrumStudio ('Volfied'), composer Mark Wilson — full census of data/composers/*.json (note: ripgrep/Grep silently skips this gitignored directory; a direct Node scan was used instead)"
  ]
}
```

## Overview

`DrumStudio` is SIDId's tag for **Drum Studio**, a native C64 two-voice
digital sample sequencer/drum machine credited to **Mark Wilson**, dated
1990 (in-memory copyright string "(c) 1989-1990 Mark Wilson"), originally
published by **Interceptor Software** and later budget-re-released under
Interceptor's own **Players** label — SIDId's "Players Software"
attribution is that budget re-issue, not a distinct company. This project
already has a separate card for a "Mark_Wilson" Player-ID tag (a confirmed
Scottish coder+musician, CSDb scener id 5989) — the names, dates, and
UK-scene context are plausibly the same person, but no source directly
cross-links the two, so they are kept as separate cards with no asserted
`edges` relationship. Locally, exactly 1 file in the whole collection
carries this tag (full census, not a sample) — too small to assess
composer concentration.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's reference resolves to a
crack page, not the original release, but its own user comment quotes the
in-memory copyright string, corroborating the claimed author/date; (2)
"Players Software" is Interceptor Software's own budget label, not a
separate publisher; (3) a second, independent crack of the same title
exists (CSDb 27211) but is not used as `csdb_release`; (4) a
plausible-but-unconfirmed same-person link to the existing `mark-wilson.md`
card — explicitly not merged or edged without direct evidence; (5) only 1
local file, confirmed by full census, not a sample; (6) this project's
`Grep` tool silently skips `data/composers/*.json` because it is
gitignored — the census required a direct Node `fs` scan instead.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. If this does turn out to be the same Mark Wilson as
`mark-wilson.md`, that card's traced sample (Augie Doggie and Doggie Daddy,
load $9866/init $a296/play $a293) would be a natural comparison point for a
future disassembly of a `DrumStudio`-tagged file.

## Verification

Not verified. Seeded from `data/sidid.json`, a full census of
`data/composers/*.json`, two CSDb release pages, c64-wiki.de, Wikipedia
(Interceptor Micros), a Lemon64 forum thread, and cross-reference against
the sibling card. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb releases 59864 and 27211,
c64-wiki.de, Wikipedia, Lemon64, the sibling mark-wilson.md card, and the
local composer aggregation.
