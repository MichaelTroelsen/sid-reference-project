# RobTracker (Jason Page & Rob Hubbard)

```json
{
  "id": "robtracker",
  "name": "RobTracker (Jason Page & Rob Hubbard)",
  "aliases": ["Jason_Page/RobTracker"],
  "authors": ["Jason Page", "Rob Hubbard"],
  "released": "2018 (Project Hubbard Kickstarter)",
  "status": "in-progress",
  "platform": "A modern Windows music editor, built jointly by composer Jason Page and Rob Hubbard himself (already carded in this KB as [[rob-hubbard]], one of only 7 VERIFIED cards) for the 2018 'Project Hubbard' Kickstarter — Hubbard's official comeback campaign. Implements Hubbard's OWN original digi/sample-playback routine (per this project's own SIDId comment: 'Based on Rob Hubbard's Digi routine'), letting him compose new SID tunes again decades removed from hand-coding 6502 assembly. NOT a fan-made tribute tool later adopted by Hubbard — a direct, credited collaboration. Player-ID-fingerprinted across 8 files: 6 by Rob Hubbard himself, 1 by Jason Page, 1 by 'Mibri'.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Go Go Dash, composed by Rob Hubbard using RobTracker): load $1000 (init $100c, play $101a).", "zero_page": "TODO (no disassembly)", "layout": "Digi/sample-based, per the routine's own description — not a conventional pattern/table format." },
  "entry": { "init": "Sample trace: $100c.", "play": "Sample trace: $101a (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (minimal filter use observed — 1 filter write in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["rob-hubbard"], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED, NOT A FAN TOOL: RobTracker was built as part of 'Project Hubbard', the official Rob Hubbard Kickstarter run by C64Audio.com (funded October 2018, 916 backers, £81,707 raised against a £50,000 goal). HVSC's own December 2018 update notes confirm: 'the album Rob Returns has been released digitally and also the music editor RobTracker for Windows has been released.' The tunes traced under Hubbard's own name in this tag — Radio Ace, Go Go Dash (the traced file), Lionheart, Lakers vs Celtics, Pacific, Sun Never Shines — are directly named by C64Audio.com as 'produced by Jason and Rob in RobTracker', an exact match to the 6-file split seen in this project's own data. 'Don't Step On My Wire' was the first tune the pair put together for the Kickstarter.",
    "JASON PAGE'S IDENTITY IS CONFIRMED, NOT ASSUMED: CSDb (id=4121, handle 'Jay', Compunet ID 'JP22', member of MultiStyle Labs since 2020) is independently corroborated by his own retrovideogamer.co.uk interview describing his Compunet-era musical start (matching the JP22 Compunet ID) and stating he'd returned to C64/SID composing 'working with Rob Hubbard' a few years before that 2019 interview — the same person across both the scene profile and the professional games-audio career, not a namesake.",
    "JASON PAGE'S CAREER, CONFIRMED: started at Graftgold at age 16, REPLACING STEVE TURNER (already carded in this KB as [[steve-turner]]) as in-house C64 musician exactly as Graftgold pivoted to Amiga/ST — a genuine, documented lineage link between two composers in this KB. First credited track: Orion (1988). Later scored Paradroid 90, Fire & Ice, Uridium 2, Ruff 'n' Tumble, Rise of the Robots, The Chaos Engine; became audio manager at Sony Computer Entertainment Europe, wrote ~45 minutes of music for the original Gran Turismo, and authored the XM/Mod player used on PS1/PS2 by Codemasters and Team17.",
    "PAGE'S OWN STATED INFLUENCE (Remix64 interview, direct quote): 'Rob Hubbard, as it was his tunes that I heard before anyone else. Note that its also his fault (!) that I'm still doing game music 15 years later!' — this admiration directly led to the eventual real collaboration confirmed above.",
    "MIBRI (1 file, 'Riot House') — UK scener based in Newcastle upon Tyne, groups Atlantis/MultiStyle Labs/Proxima/Rift (formerly Hokuto Force), active 2018-2026, 163 productions on Demozoo — shares MultiStyle Labs membership with Jason Page, but no documented personal connection to Hubbard or Page beyond that shared group was found. Real name not found.",
    "NO CSDb RELEASE ENTRY EXISTS for RobTracker itself — expected and unsurprising, since it's a native Windows tool, not a C64 program, and therefore falls outside CSDb's scope entirely.",
    "A minor data-quality caution: Jason Page's own CSDb profile lists 'Birth Year: 1988' — almost certainly wrong or mislabeled (possibly an account-creation year), since it's irreconcilable with him starting at Graftgold at age 16 around 1988-1990. Flagged as unreliable, not used as fact anywhere on this card.",
    "SAME-AUTHOR EDGE ADDED: `shares_routine_with: [\"rob-hubbard\"]` reflects that this tool directly implements Hubbard's own routine, per SIDId's own description — a categorically different relationship from most other tool/composer pairs in this KB (most are 'coder writes it, someone else uses it'; this is 'the original author co-built a modern re-implementation of his own decades-old technique')."
  ],
  "sources": [
    "Kickstarter — Project Hubbard (funding, scope): https://www.kickstarter.com/projects/c64audio/project-hubbard-official-rob-hubbard-kickstarter",
    "C64Audio.com — Project Hubbard 9-Disc Box Set (confirms RobTracker-produced tune list matching this tag's data exactly): https://c64audio.com/products/project-hubbard-9-disc-box-set",
    "HVSC news update, December 2018 (confirms RobTracker's release alongside the Rob Returns album): https://www.hvsc.c64.org/download/files/news/20181223.txt",
    "CSDb scener — Jason Page (id=4121, handle Jay, Compunet ID JP22, MultiStyle Labs): https://csdb.dk/scener/?id=4121",
    "RetroVideoGamer interview with Jason Page (Compunet-era origin, 'working with Rob Hubbard' confirmation): https://www.retrovideogamer.co.uk/rvg-interviews-jason-page/",
    "Remix64 interview with Jason Page (career, Rob Hubbard influence quote): https://remix64.com/interviews/interview-jason-page.html",
    "MobyGames — Jason Page developer sheet: https://www.mobygames.com/developer/sheet/view/developerId,1864/",
    "Demozoo — Mibri (id=76869): https://demozoo.org/sceners/76869/",
    "Existing KB cards: knowledge/players/rob-hubbard.md, knowledge/players/steve-turner.md (the Graftgold successor link)",
    "Local dataset: 8 files tagged Jason_Page/RobTracker, 3 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Page/RobTracker` tag is a modern Windows music editor built
jointly by composer Jason Page and Rob Hubbard himself for the 2018
'Project Hubbard' Kickstarter — Hubbard's official comeback campaign.
Unlike most tool/composer pairs in this KB, this isn't a reverse-engineered
or fan-made tribute — it's a direct, credited collaboration implementing
Hubbard's own original technique. Player-ID-fingerprinted across 8 files,
mostly by Hubbard himself.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed 2018
Kickstarter collaboration story**, sourced from multiple independent
places all matching this project's own tag data exactly; and a genuine
**Graftgold succession link** — Jason Page replaced already-carded
composer Steve Turner as Graftgold's in-house musician when Turner moved
on, a real documented connection between two cards in this KB.

## Disassembly notes

None published (a modern Windows tool, not natively C64 — outside the
realdmx RE repo's scope). A future `verified` needs an original
disassembly of a `Jason_Page/RobTracker`-tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Jason_Page/RobTracker` `.sid` (Go Go Dash, composed by
Rob Hubbard): load `$1000`, init `$100c`, play `$101a`, **388 register
writes / 50 frames** (1 filter write). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — Kickstarter, C64Audio.com, HVSC news, CSDb, two
interviews, MobyGames, Demozoo, and the two related composer cards.
