# Bjerregaard

<!--
  Player-ID / SIDId tag: "Bjerregaard" — Johannes Bjerregaard's own,
  self-authored C64 music driver. NOT merged with the separate "MoN/Bjerregaard"
  Player-ID tag (see the "MoN/Bjerregaard vs Bjerregaard" quirk below for why).
-->

```json
{
  "id": "bjerregaard",
  "name": "Bjerregaard (Johannes Bjerregaard's in-house music driver)",
  "aliases": ["Bjerregaard"],
  "authors": ["Johannes Bjerregaard"],
  "released": "TODO: no exact year confirmed for this specific driver generation. VGMPF documents Bjerregaard wrote three successive drivers: a first in 1987 (for Tiger Mission), a second in 1987-1988 adapted from Rob Hubbard's driver and 'arranged in his DMC Edit' (programmed in Profi-Ass 64), and a third, faster Turbo Ass driver written after joining Maniacs of Noise in October 1988. This card's plain 'Bjerregaard' tag is most consistent with the pre-MoN driver(s) given its near-total self-use (see quirks) — not confirmed which generation(s) it covers exactly.",
  "status": "stub",
  "platform": "Native C64 in-house replay driver arranged via his own 'DMC Edit' editor tool (per VGMPF), not a publicly distributed GUI tracker in the CheeseCutter/GoatTracker sense.",
  "csdb_release": 110685,

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
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "MoN/Bjerregaard vs Bjerregaard — investigated, NOT merged. Two separate SIDId Player-ID tags exist: 'Bjerregaard' (65 files) and 'MoN/Bjerregaard' (77 files); both resolve to author 'Johannes Bjerregaard' in data/sidid.json with no other distinguishing metadata. But: (1) SIDId itself keeps them as two distinct scanner signatures rather than one, matching its established pattern elsewhere in this same author circle (MoN/Deenen, MoN/FutureComposer, and MoN/Bjerregaard are three separately-tagged, genuinely distinct routines per the mon-deenen.md card, sourced to VGMPF's Maniacs of Noise article). (2) VGMPF documents Bjerregaard writing THREE successive, non-identical drivers over 1987-1990: a 1987 first driver (Tiger Mission), a 1987-88 second driver adapted from Rob Hubbard's code and arranged via his own 'DMC Edit' tool, and a third, faster Turbo Ass driver written after he joined Maniacs of Noise in Oct 1988 ('Bjerregaard preferred his own driver... upon Deenen's request, he programmed a faster one in Turbo Ass, his third, tuned at 441 Hz except on Fruitbank'). (3) Usage patterns in this collection sharply diverge: plain 'Bjerregaard' is 94% self-use (61/65 files, only Henrik Jensen and Swallow otherwise) — consistent with an early, personal, pre-MoN driver — while 'MoN/Bjerregaard' is spread across 15 composers with Bjerregaard himself only 19% (15/77), heavily used by Fozzie (17), ELA (9), Dokken (6), and others — consistent with a later driver that got adopted/reused within a wider scene circle, the same 'driver got reused by others' pattern seen with Rob Hubbard's own driver (which Bjerregaard's second driver was itself derived from). Conclusion: genuinely different tool/generation, correctly kept as two separate cards; the 'MoN/Bjerregaard' tag is being carded separately in this same research batch.",
    "This driver was arranged through Bjerregaard's OWN editor, not a third-party tracker — CSDb release 110685 ('Bjerregaard DMC Editor', Danish Music Company, 17 Aug 2012, credited Code/Music/Text solely to Johannes Bjerregaard) preserves what a CSDb user comment on that page states was 'originally sent to Charles Deenen around 1988' — matching VGMPF's account of the second driver era and its 'DMC Edit' arranging tool. Password-protected on the original disk, with an easter-egg Bubble Bobble picture on failed access attempts (per CSDb user comments on that release).",
    "Composer concentration: 65 files across only 3 composers in this collection (rank 13 by file count per knowledge/COVERAGE.md) — Johannes Bjerregaard himself 61 (94%), Henrik Jensen 3, Swallow 1. This is a textbook personal/small-circle routine, not a widely published tool (contrast the 15-composer spread of the separate 'MoN/Bjerregaard' tag above).",
    "The Henrik Jensen co-occurrence (3 files tagged 'Bjerregaard' in his own HVSC folder) was checked independently in knowledge/players/henning-andersen.md and left as an unexplained, unconfirmed connection to Bjerregaard rather than guessed at — repeated here for consistency; no further resolution found in this pass either.",
    "'Bjerregaard' should not be confused with 'DMC_V4.x'/'DMC_V5.x'/'DMC_V6.x' etc. — those tags are Graffity's unrelated 'Demo Music Creator' editor (Balazs Farkas/Brian, per data/sidid.json and CSDb), a coincidentally similar 'DMC' initialism to Bjerregaard's own group 'Danish Music Company' (also abbreviated DMC on CSDb), but a completely different tool by a different author. Do not conflate the two DMCs.",
    "No public source code, format spec, or Codebase64 writeup was found for this driver — only the CSDb tool-release page (110685) and VGMPF's prose history. Every runtime field (memory map, entry points, data format, effects) is honestly TODO.",
    "Refined driver count from a direct VGMPF re-check (2026-07): Bjerregaard's first C64 music was actually on a RIPPED driver, not his own — 'For The Vikings (C64), he ripped an early driver by David Whittaker and appended his own composition.' His first OWN driver followed for Tiger Mission (1987), matching this card's 'released' field; the Rob-Hubbard-derived DMC-Edit driver (1987-88) and the post-Oct-1988 Turbo Ass driver (441 Hz, except Fruitbank) are his 2nd and 3rd own drivers respectively. Doesn't change which generation this 'Bjerregaard' tag covers (still unconfirmed) but corrects the count of driver generations in circulation before he owned one outright.",
    "Re-checked the CSDb tool-release page (110685) directly (2026-07): its disk image contains '4 BASIC files,' the first of which documents how the EDITOR (not the runtime player) functions — no full 6502 source listing is provided, so this does not unlock any Tier 3 runtime fact and status stays 'stub', not 'in-progress'."
  ],
  "sources": [
    "data/sidid.json byTag['Bjerregaard'] — author: Johannes Bjerregaard (no released/reference field)",
    "data/sidid.json byTag['MoN/Bjerregaard'] — author: Johannes Bjerregaard (no released/reference field), used for the non-merge comparison",
    "knowledge/COVERAGE.md — this family is now fully carded (100% coverage); COVERAGE.md's per-family rank/grouping table only lists still-uncarded families as of the 2026-07 regeneration, so the original 'rank 13' figure is no longer independently checkable there — re-verified instead by direct aggregation below (2026-07 re-check, counts unchanged)",
    "Local aggregate over data/composers/*.json, re-verified 2026-07: 'Bjerregaard' tag = 65 files / 3 composers (Johannes Bjerregaard 61, Henrik Jensen 3, Swallow 1); 'MoN/Bjerregaard' tag = 77 files / 15 composers (Fozzie 17, Johannes Bjerregaard 15, ELA 9, Dokken 6, Joachim Wijnhoven 6, Widding_Roy_Johan 5, Drumtex 4, Rage 4, Zipper 3, Lynx 2, Scroll 2, Art 1, Glenn Gallefoss 1, JO 1, Trurl 1)",
    "VGMPF, Johannes Bjerregaard — https://vgmpf.com/Wiki/index.php/Johannes_Bjerregaard (three driver generations: 1987 first driver/Tiger Mission, 1987-88 second driver adapted from Rob Hubbard's code and arranged via 'DMC Edit'/Profi-Ass 64, post-Oct-1988 third Turbo Ass driver tuned at 441 Hz except on Fruitbank)",
    "VGMPF, Maniacs of Noise — https://vgmpf.com/Wiki/index.php/Maniacs_of_Noise ('Deenen sent Bjerregaard a disk with Turbo Ass, his music driver, and some 4-bit samples, but Bjerregaard preferred his own driver')",
    "CSDb release, Bjerregaard DMC Editor (id 110685) — https://csdb.dk/release/?id=110685 (17 Aug 2012, Danish Music Company, Code/Music/Text: Johannes Bjerregaard; user comment states the editor was 'originally sent to Charles Deenen around 1988')",
    "CSDb scener page, Johannes Bjerregaard (id 8138) — https://csdb.dk/scener/?id=8138 (group memberships: founder of Danish Music Company; ex-member Maniacs of Noise 10-1988 to 1990, Triton Technology, Upfront, Soul Syndicate; handles JOZZ, The Jerk)",
    "CSDb group page, Danish Music Company (id 1498) — https://csdb.dk/group/?id=1498",
    "knowledge/players/mon-deenen.md — sibling card documenting the same three-way MoN/Deenen vs MoN/FutureComposer vs MoN/Bjerregaard distinction from the SIDId/VGMPF angle",
    "knowledge/players/henning-andersen.md — prior note on the unresolved Henrik Jensen 'Bjerregaard' co-occurrence",
    "data/composers/*.json (johannes-bjerregaard, henrik-jensen, etc.) — per-file player tag evidence"
  ]
}
```

## Overview

`Bjerregaard` is the Player-ID/SIDId tag for one of the personal C64 music
drivers written by Danish composer **Johannes Bjerregaard** (JOZZ, The Jerk),
founder of the Danish Music Company (DMC) and later the first non-founding
member of Maniacs of Noise (Oct 1988 - 1990). VGMPF documents him writing
three successive, distinct drivers between 1987 and 1990; a CSDb tool
release ("Bjerregaard DMC Editor", id 110685, from 2012) preserves the disk
he sent Charles Deenen around 1988, arranged through his own "DMC Edit"
editor. In this collection the plain `Bjerregaard` tag is heavily
self-used (61 of 65 files, 94%, by Bjerregaard himself) — a personal
routine, not a widely published tool. This card was written alongside a
sibling investigation into the separate `MoN/Bjerregaard` tag (77 files,
spread across 15 composers); the two were found to be genuinely distinct
driver generations by the same author rather than one engine under two
export tags, and are kept as two separate cards (see the merge-investigation
quirk).

## Quirks & gotchas

See the `quirks` array — the load-bearing point is the **MoN/Bjerregaard vs
Bjerregaard non-merge decision**: same author, but SIDId keeps them as
separate scanner signatures, VGMPF documents three non-identical driver
generations by Bjerregaard, and this collection's own usage pattern differs
sharply between the two tags (94% self-use here vs. a 15-composer spread on
`MoN/Bjerregaard`). Also don't confuse this tag's "DMC" (Danish Music
Company, Bjerregaard's own group) with the unrelated "DMC_V4.x"-style tags,
which are Graffity's "Demo Music Creator" editor.

## Disassembly notes

None done here. No public source, format spec, or Codebase64 writeup was
found — only the CSDb tool-release listing (a preserved disk image/editor,
not a documented format) and VGMPF's narrative history. A future pass would
need to disassemble a representative `.sid` from this tag (e.g. one of
Johannes Bjerregaard's own files) and trace it through `sidm2-siddump` to
get real load-address/init/play/ZP facts, and separately determine which of
his three documented driver generations this specific tag's binary
signature actually matches.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
recorded, sourced from the cached SIDId entries, this project's local
composer data, VGMPF's Bjerregaard and Maniacs of Noise articles, and a
CSDb tool release. No runtime fact (memory map, entry points, speed model,
data format) has been confirmed by disassembly; all are honestly `TODO`.

## Sources

See the `sources` array — SIDId's `Bjerregaard` and `MoN/Bjerregaard`
entries, `knowledge/COVERAGE.md`, local `data/composers/*.json`
aggregation, VGMPF's Johannes Bjerregaard and Maniacs of Noise wiki pages,
CSDb release 110685 ("Bjerregaard DMC Editor"), CSDb scener page 8138, CSDb
group page 1498 (Danish Music Company), and the sibling `mon-deenen.md` and
`henning-andersen.md` cards.
