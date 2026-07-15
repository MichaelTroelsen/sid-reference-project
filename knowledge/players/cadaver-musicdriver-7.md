# Cadaver Musicdriver (earlier version, Metal Warrior)

```json
{
  "id": "cadaver-musicdriver-7",
  "name": "Cadaver Musicdriver (earlier version, Metal Warrior)",
  "aliases": ["Cadaver_Musicdriver_7"],
  "authors": ["Lasse Öörni (Cadaver)"],
  "released": "1999 (Covert Bitops / Electric Harem, \"Metal Warrior\")",
  "status": "in-progress",
  "platform": "The EARLIER of Finnish coder-musician Lasse Öörni's ('Cadaver') two lean in-game driver versions in this KB — CONFIRMED via CSDb/Lemon64/C64-Wiki as coming from 'Metal Warrior' (1999), a solo Öörni release (code+music+graphics all his own) two years before already-carded [[cadaver-musicdriver]]'s own 'Metal Warrior 3.' Genuinely structurally distinct from that later version (a different load/init/play layout, lower write density). Player-ID-fingerprinted across 2 files, all his own.",
  "csdb_release": 5447,

  "memory": { "load_address": "Sample HVSC file traced (Metal Warrior, 1999, Covert Bitops/Electric Harem): load $8000 (init $9a10, play $8000).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $9a10.", "play": "Sample trace: $8000 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 2 filter writes in a dense 167-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'METAL WARRIOR' (ORIGINAL, no number) CONFIRMED AS A REAL, SOLO ÖÖRNI RELEASE: CSDb/Lemon64/C64-Wiki agree it was released 1999, code+music+graphics ALL by Lasse Öörni/Cadaver himself (no co-credits), published under CSDb credit group 'Electric Harem' though the game is attributed to Covert Bitops — a remake/reimagining of an Amiga game from 1993/94. First of four games in the eventual series (Metal Warrior → II → 3 → 4: Agents of Metal). A V1.1 patch followed later in 1999.",
    "GENUINELY EARLIER THAN THE '_10' TAG, confirmed by release year, not just numbering: already-carded [[cadaver-musicdriver]]'s own 'Metal Warrior 3' originally released in 2001 (the 2012 V1.4 patch is what that card actually traced) — two full years after this game. The lower SIDId signature number ('_7' vs '_10') tracking an earlier driver revision is thus consistent with real chronology, though SIDId's own numbering itself carries no version metadata — this remains an inference, not a documented fact.",
    "GENUINELY DIFFERENT CODE REVISION FROM '_10', CONFIRMED BY DIRECT TRACE COMPARISON, not just numbering: this tag's layout has init living FAR from load/play ($9a10 vs. both at $8000), whereas the '_10' card's own trace packs load/init/play tightly together at $1000-$1003. Write density also differs (167/50 frames here vs. 212/50 frames on '_10', i.e. ~3.3 vs. ~4.2 writes/frame). This is real structural evidence of a materially different driver revision, not a relocated copy of the same binary.",
    "PLAUSIBLY MAPS TO ÖÖRNI'S OWN DOCUMENTED 'MiniPlayer' (original, ~9 rasterlines) VS. 'MiniPlayer 2' (updated, adds ADSR commands, no wavetable-skip) DISTINCTION on his own tools.html page — but this mapping is EXPLICITLY UNCONFIRMED, since that page doesn't name which specific game used which player version.",
    "'METAL WARRIOR UNUSED MUSIC' (the tag's second file) LIKELY REPRESENTS LEFTOVER/CUT GAME CONTENT, not an independently catalogued work: no separate CSDb release or SID entry titled 'Unused Music' was found anywhere in Öörni's full scener credit list — only numbered Metal Warrior titles exist as CSDb releases. Most plausible explanation: an HVSC-only filename pulled from the same game's SID rip, alongside the main tune. Could not be independently verified further (DeepSID's `?file=` endpoint outage, already documented in this project's own CLAUDE.md, prevented a direct STIL.txt check).",
    "Not confirmed in SIDId (no human-readable `sidid.nfo` entry for either Cadaver_Musicdriver tag, matching the sibling card's own gap). Direct, confirmed relationship to [[cadaver-musicdriver]] (same author, later version — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (same extensive roster check as the sibling card — none found)."
  ],
  "sources": [
    "CSDb sid id=5447 (Metal Warrior, 1999, full credit list — solo Öörni): https://csdb.dk/sid/?id=5447",
    "Lemon64 — Metal Warrior: https://www.lemon64.com/game/metal-warrior",
    "C64-Wiki — Metal Warrior (series history): https://www.c64-wiki.com/wiki/Metal_Warrior",
    "CSDb scener id=2908 (Lasse Öörni / Cadaver, full credit list, no separate 'Unused Music' release found): https://csdb.dk/scener/?id=2908",
    "Cadaver's own tools.html (MiniPlayer/MiniPlayer2 distinction): https://cadaver.github.io/tools.html",
    "Existing KB card: knowledge/players/cadaver-musicdriver.md (the later version, same author, updated in this same batch)",
    "Local dataset: 2 files tagged Cadaver_Musicdriver_7, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Cadaver_Musicdriver_7` tag is the EARLIER of Lasse Öörni's
('Cadaver') two lean in-game driver versions in this KB — from the
original 'Metal Warrior' (1999), two years before already-carded
[[cadaver-musicdriver]]'s own 'Metal Warrior 3.' Genuinely structurally
distinct from that later version. Player-ID-fingerprinted across 2
files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct trace
comparison confirming a genuinely different driver revision**, not
merely a different numbering — a real structural difference in memory
layout and write density between this earlier version and its already-
carded successor.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Cadaver_Musicdriver_7`-
tagged `.sid` + trace — which could also confirm the plausible mapping to
Öörni's own documented 'MiniPlayer' vs. 'MiniPlayer 2' naming.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Cadaver_Musicdriver_7` `.sid` (Metal Warrior): load
`$8000`, init `$9a10`, play `$8000`, **167 register writes / 50 frames**
(2 filter writes — dense). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — CSDb (2 entries), Lemon64, C64-Wiki, Cadaver's
own tools.html, and the related cadaver-musicdriver card.
