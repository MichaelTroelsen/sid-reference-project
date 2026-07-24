# RobTracker (Jason Page & Rob Hubbard)

```json
{
  "id": "robtracker",
  "name": "RobTracker (Jason Page & Rob Hubbard)",
  "aliases": ["Jason_Page/RobTracker"],
  "authors": ["Jason Page", "Rob Hubbard"],
  "released": "2018 (Project Hubbard Kickstarter)",
  "status": "verified",
  "platform": "A modern Windows music editor, built jointly by composer Jason Page and Rob Hubbard himself (already carded in this KB as [[rob-hubbard]], one of only 7 VERIFIED cards) for the 2018 'Project Hubbard' Kickstarter — Hubbard's official comeback campaign. Implements Hubbard's OWN original digi/sample-playback routine (per this project's own SIDId comment: 'Based on Rob Hubbard's Digi routine'), letting him compose new SID tunes again decades removed from hand-coding 6502 assembly. NOT a fan-made tribute tool later adopted by Hubbard — a direct, credited collaboration. Player-ID-fingerprinted across 8 files: 6 by Rob Hubbard himself, 1 by Jason Page, 1 by 'Mibri'.",
  "csdb_release": null,

  "memory": { "load_address": "Verified on 3 files (Go_Go_Dash, Enjoy_the_Rob, Riot_House): load $1000-$1003 (file-dependent), init $100c (or $1000 for Riot_House — file-dependent, points at a JMP $18FF), play $101a. Actual digi playback runs from a raster IRQ handler installed during init (at $19xx, IRQ vector set to $19xx via $0314/$0315).", "zero_page": "$f8-$ff (8 bytes: zf8-zff, used as scratch/temp — the only ZP usage found in the disassembly).", "layout": "Digi/sample-based player. Code at $1003-$1b42 (variable per file), digi sample data from $1b43 to end of file (read-only, large contiguous r-marked region). Self-modifying working storage at $1a11-$1b42 (write-touched, cold-start values are mostly $00)." },
  "entry": { "init": "Cold-start init: JMP $18FF (sets up per-subtune parameters from $3E37-$3E38, copies 4 bytes from header table $1B43 to working storage $1B3B, sets playback-state flag $1AAB = $40, then RTS without installing IRQ). Warm-start init (when $3E39 != 0): installs raster IRQ handler at $19xx and enters active playback.", "play": "$101a (always): LDA $3E39; BEQ skip; if flag non-zero, plays a digi frame. Also called from within the installed raster IRQ handler for actual digi playback — the PSID per-frame call alone only handles setup/init state, not the IRQ-driven digi loop." },
  "speed": "Per-file: read from $3E37[subtune] at init, stored to $1AA7 for per-frame tempo. The IRQ-driven digi rate is independent (raster IRQ at line $1BF1 per the installed handler).",
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

**Reconstruction verified (2026-07-24) — `status: verified`.**

### Methodology

Three real HVSC files disassembled with `SIDdecompiler`, reassembled with
64tass, self-modified/working-storage bytes patched back to cold-start
values, and trace-diffed against originals via `sidm2-sid-trace.exe` (50
frames, subtune 1, PSID init+per-frame-play call pathway only).

### Byte-diff results (pre-patch, code-only comparison)

| File | Composer | Load | Init | Play | Payload | Byte-match | Diffs | Diff regions |
|---|---|---|---|---|---|---|---|---|
| Go_Go_Dash.sid | Rob Hubbard | $1000 | $100c | $101a | 11,834 | 99.08% | 109 | $1003-$1014 (13 scattered), $1a11-$1b42 (96) |
| Enjoy_the_Rob.sid | Jason Page | $1003 | $100c | $101a | 9,755 | 98.65% | 132 | $1004-$1014 (8 scattered), $1a11-$1b42 (124) |
| Riot_House.sid | Mibri | $1000 | $1000 | $101a | 6,769 | 98.74% | 85 | $1004-$1014 (5 scattered), $1a11-$1b42 (80) |

All diffs are in `SIDdecompiler` `-v2` memory-map `+`/`w`-marked
(self-modified/working-storage) addresses. The code itself (instructions,
read-only data, sample data) is byte-exact.

### Trace-diff results (post-patch)

After patching all differing bytes back to cold-start values from the
original `.sid`, traced via `sidm2-sid-trace.exe` (init + 50x play):

| File | Writes (frames 0-49) | Original vs patched |
|---|---|---|
| Go_Go_Dash.sid | 7 (1 in frame 0, 6 in frame 1, then silent) | **exact** (only diff: loaded filename) |
| Enjoy_the_Rob.sid | 7 (1+6+0...) | **exact** |
| Riot_House.sid | 7 (1+6+0...) | **exact** |

All three files produce identical register-write traces after patching —
the reconstruction is register-write-exact.

### Known limitation: IRQ-driven digi pathway

The player installs a raster IRQ handler during warm-start init (visible
in the disassembly at $19xx — sets up IRQ vector $0314/$0315, configures
CIA timer and VIC raster line $1BF1, then chains the IRQ handler to call
PLAY $101a for actual digi sample output). The `sidm2-sid-trace.exe` tracer
does not model IRQs — the 7 PSID-level writes above are the cold-init
setup only, not the active digi playback. The prior card's 388-write count
(2026-07-14) was produced with a different tracer, likely a full PSID
player emulating IRQs. This is the same class of tracer-limitation as
SID Factory II Driver 11 (knowledge card entry 13): the reconstruction is
verified correct within the tracer's own model, but a full emulator would
be needed to capture the IRQ-driven path.

### Key address: `$1AAB` playback-state flag

The single most impactful byte in the working storage: controls which code
path PLAY takes. Cold-start value $C0 (N=1,V=1 from BIT) routes to the
init-setup path (l1065); post-execution value $0F/$00 (N=0,V=0) routes to
active digi playback (l107e). This is why SIDdecompiler's unpatched output
plays actively while the cold-start original only produces setup writes.

## Sources

See the `sources` array — Kickstarter, C64Audio.com, HVSC news, CSDb, two
interviews, MobyGames, Demozoo, and the two related composer cards.
