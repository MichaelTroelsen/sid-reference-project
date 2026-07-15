# Steven Baumrucker (later driver, Warrior of Ras RPG series)

```json
{
  "id": "steven-baumrucker-2",
  "name": "Steven Baumrucker (later driver, Warrior of Ras RPG series)",
  "aliases": ["Steven_Baumrucker_2"],
  "authors": ["Steven Baumrucker"],
  "released": "1983 (Screenplay, ported from Med Systems Software's TRS-80 originals)",
  "status": "in-progress",
  "platform": "American musician Steven Baumrucker's own playroutine, the second of two driver versions in this KB — scoring the C64 ports of the 4-part 'Warrior of Ras' RPG dungeon-crawler series, originally a 1982 TRS-80 franchise by Med Systems Software (renamed Screenplay). A companion tag, [[steven-baumrucker-1]], covers his arcade/educational-genre scoring for the same publisher. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Warrior of Ras I: Dunzhin): load $c000 (init $c000, play $c010).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c000.", "play": "Sample trace: $c010 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ALL FOUR TITLES ARE C64 PORTS OF A REAL, NAMED RPG FRANCHISE, designed by Randall Don Masteller, originating on TRS-80 in 1982 at Med Systems Software (later renamed Screenplay) — Wikipedia has its own dedicated article on 'Dunzhin,' the first volume. The 4-part series (Vol. I: Dunzhin, the traced file; Vol. II: Kaiv; Vol. III: The Wylde; Vol. IV: Ziggurat) was ported across Apple II/Atari 8-bit/C64, with the C64 ports (carrying Baumrucker's music) dated 1983.",
    "SAME PUBLISHER AS [[steven-baumrucker-1]], DISPROVING A HYPOTHESIZED EMPLOYER-SPLIT EXPLANATION for the two driver versions: all 7 of Baumrucker's known titles across both tags are Screenplay releases — no distinct second publisher. The most plausible (though EXPLICITLY UNSOURCED, purely trace-metric-based inference) explanation for two driver versions is a genre split: arcade/educational music (the sibling tag) vs. RPG dungeon-crawler music (this tag, load $c000, denser instrumentation split — 10/6/6 voice writes vs. the sibling's 9/3/6).",
    "NO EVIDENCE HE WAS A CODER on any of the 4 titles — programming/design credit for the series belongs to Randall Masteller; Baumrucker's role is strictly musical across the whole franchise, same pattern as the sibling tag.",
    "THE SAME PLAUSIBLE-BUT-UNCONFIRMED PHYSICIAN IDENTITY LINK applies here too (already detailed on [[steven-baumrucker-1]]'s own card, not re-derived separately) — 'The Giant List of Classic Game Programmers' credits both this tag's and the sibling tag's titles to the same 'Baumrucker, Steven, MD.'",
    "NO CSDb SCENER PROFILE EXISTS — same absence pattern already documented on the sibling card, consistent with a purely US commercial-studio composer.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[steven-baumrucker-1]] (same composer, companion tag — this same batch). No other known relationship found to any composer/tool already in this KB (same extensive roster check as the sibling card — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Baumrucker, Steven' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Wikipedia — Dunzhin (Warrior of Ras Vol. I, franchise origin at Med Systems Software): https://en.wikipedia.org/wiki/Dunzhin",
    "Lemon64 — Warrior of Ras Vol. I: Dunzhin (traced file): https://www.lemon64.com/game/warrior-of-ras-1",
    "Lemon64 — Warrior of Ras Vol. II: Kaiv: https://www.lemon64.com/game/warrior-of-ras-2",
    "Lemon64 — Warrior of Ras Vol. III: The Wylde: https://www.lemon64.com/game/warrior-of-ras-3",
    "Lemon64 — Warrior of Ras Vol. IV: Ziggurat: https://www.lemon64.com/game/warrior-of-ras-volume-4-ziggurat",
    "Existing KB card: knowledge/players/steven-baumrucker-1.md (the companion driver, this same batch)",
    "Local dataset: 4 files tagged Steven_Baumrucker_2, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steven_Baumrucker_2` tag is American musician Steven Baumrucker's
own playroutine, scoring the C64 ports of the 4-part 'Warrior of Ras'
RPG series — originally a 1982 TRS-80 franchise. The second of two
driver versions in this composer's output, this one for RPG-genre
scoring vs. the sibling tag's arcade/educational work. Player-ID-
fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed same-
publisher finding across both driver tags**, which disproves a
hypothesized employer-split explanation and instead points toward a
genre-based split (RPG vs. arcade/educational) — reported as trace-based
inference, not sourced fact.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Steven_Baumrucker_2`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Steven_Baumrucker_2` `.sid` (Warrior of Ras I:
Dunzhin): load `$c000`, init `$c000`, play `$c010`, **22 register
writes / 50 frames** (0 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia, Lemon64 (4
pages), and the related steven-baumrucker-1 card.
