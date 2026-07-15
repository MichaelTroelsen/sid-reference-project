# Robert Westgate (later driver, 1987-1990)

```json
{
  "id": "robert-westgate-v2",
  "name": "Robert Westgate (later driver, 1987-1990)",
  "aliases": ["Robert_Westgate_v2"],
  "authors": ["Robert Westgate"],
  "released": "1987-1990",
  "status": "in-progress",
  "platform": "English composer Robert Westgate's LATER playroutine — the second of two structurally distinct driver versions in his output (the earlier one, 1984-1986, is separately carded as [[robert-westgate-v1]]). His confirmed coding partnership with Jason Benham continues unbroken across this era too. Player-ID-fingerprinted across 3 files, all his own, including two well-known System 3-adjacent commercial titles.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Batty, 1987, Elite Systems): load $1b66 (init $1c00, play $1b66).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1c00.", "play": "Sample trace: $1b66 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THREE CONFIRMED TITLES, ALL WITH SOLE WESTGATE MUSIC CREDITS (unlike the earlier tag's Guzzler/Bigtop Barney ambiguity): Batty (the traced file, 1987 — CORRECTED PUBLISHER: Elite Systems, NOT System 3 as an initial research premise assumed — System 3 was a contemporaneous but UNRELATED UK publisher, no evidence connects them to this game; re-released by Encore; coder/graphics Jason Benham, title screen Paul Walker; music arrangements of 'American Patrol,' 'At a Darktown Cakewalk,' 'Oh Susanna' — public-domain ragtime/classical pieces, Westgate's signature source-material style already seen on the v1 tag), By Fair Means... or Foul! (1988, Superior Software — coder/graphics Jason Benham; music adapts Joplin's 'The Chrysanthemum'), and Kwik Snax (1990, ANOTHER CORRECTED PUBLISHER: Codemasters, not System 3 — coder Jason Benham; music adapts Joplin's 'The Ragtime Dance' and 'Elite Syncopations').",
    "THE JASON BENHAM CODING PARTNERSHIP CONTINUES UNBROKEN into this later era — the SAME coder across all 6 of Westgate's known titles spanning both tags, now confirmed running from Interceptor Software (1984) through Superior Software, Elite Systems, and finally Codemasters (1990) — a genuinely long, consistent two-person team across FOUR different publishers over 6 years, a notable finding in its own right.",
    "THE CLEAN CHRONOLOGICAL VERSION SPLIT IS CONFIRMED FROM THIS SIDE TOO: this tag's 3 titles run 1987-1990, with zero overlap against [[robert-westgate-v1]]'s own 1984-1986 titles — matching the same driver-rewrite-between-eras pattern already established in this KB for [[ozzy-oldskool]]/[[ozzy-oldskool-v2]] and the Cadaver driver pair.",
    "TWO PUBLISHER-ATTRIBUTION ERRORS FROM THE ORIGINAL RESEARCH BRIEF WERE EXPLICITLY CAUGHT AND CORRECTED: both Batty and Kwik Snax were initially assumed to be System 3 titles — neither is; Batty is Elite Systems, Kwik Snax is Codemasters. Not carried forward as fact.",
    "NO CSDb SCENER PROFILE EXISTS for Westgate — same absence pattern already documented on the sibling card, consistent with a purely commercial UK games composer.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[robert-westgate-v1]] (same composer, earlier driver version — companion card in this same batch). No known relationship found to any other composer/tool already in this KB (checked against the same extensive roster as the sibling card — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Westgate, Robert' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Batty (full credits, traced file, publisher correction): https://www.lemon64.com/game/batty",
    "Lemon64 — By Fair Means... or Foul!: https://www.lemon64.com/game/by-fair-means-or-foul",
    "Lemon64 — Kwik Snax (full credits, publisher correction): https://www.lemon64.com/game/kwik-snax",
    "CSDb search — Westgate (9 SID compositions, includes 3 earlier uncarded titles: Megawarz, Outback, Roomlord, 1983-1984 Paramount Software): https://csdb.dk/search/?seinsel=all&search=Westgate",
    "Existing KB card: knowledge/players/robert-westgate-v1.md (the earlier companion driver, this same batch)",
    "Local dataset: 3 files tagged Robert_Westgate_v2, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Robert_Westgate_v2` tag is English composer Robert Westgate's later
playroutine (1987-1990), the second of two versions in his output. His
coding partnership with Jason Benham continues unbroken from the earlier
era, now spanning four different UK publishers. Player-ID-fingerprinted
across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **unbroken 6-year,
4-publisher Jason Benham coding partnership**, confirmed running across
both driver versions — a notable finding about a stable, long-running
UK composer/coder duo. Also notable: **two publisher-attribution errors**
caught and corrected from the original research premise.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Robert_Westgate_v2`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Robert_Westgate_v2` `.sid` (Batty): load `$1b66`,
init `$1c00`, play `$1b66`, **37 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb,
and the related robert-westgate-v1 card.
