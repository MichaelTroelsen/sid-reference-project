# Mixer

```json
{
  "id": "mixer",
  "name": "Mixer",
  "aliases": ["Mixer"],
  "authors": ["Jouni Ikonen (Mixer / Wild Finn / James Bond II)"],
  "released": "No dedicated tool/editor release exists — the tag marks a personal hand-coded routine embedded per-tune, not a product. Full census of all 8 tagged files: earliest attested 1989 (SurSumTheme, CSDb sid id 20749, and Ikari & Talent Tune, id 20746, both 'Origo Dreamline'); latest 2025 (Hittibiisi, id 64572, also 'Origo Dreamline') — a 36-year span (see Overview)",
  "status": "stub",
  "platform": "Native C64 — a hand-coded personal play routine embedded per-tune, not a distributable/relocatable editor or cross-platform tool. Confirmed native 6502 C64 machine code via the PSID headers of all 8 tagged files (load addresses from $0810 to $F000; see quirks); no separate tool/editor release found on CSDb (scener page https://csdb.dk/scener/?id=745 credits no player/tool) or via web search (Lemon64/Forum64/general web, 2026-07-31 — no hits)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file — not a fixed relocatable player (see Overview for observed addresses)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: varies per file (see Overview)",
    "play": "TODO: varies per file (see Overview)"
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
    "The tag 'Mixer' is the composer's OWN HANDLE, not an independent tool name — this is a hand-coded personal play routine, SIDId-tagged with its author's scene handle, not a published editor. Confirmed by exact 1:1 overlap: local dataset shows 8 files tagged player='Mixer', all 8 authored by 'Jouni Ikonen (Mixer)' (data/composers/mixer.json) — the ONLY composer with this tag.",
    "sidid.nfo's entry for 'Mixer' has only an AUTHOR line ('Jouni Ikonen (Mixer)') — no NAME, RELEASED, or REFERENCE fields, unlike genuine tool entries in the same file (e.g. the neighbouring 'Mjoosic_Mejker' entry has all four). This is consistent with SIDId having identified a recurring signature in his tunes without it being a named, released product.",
    "CSDb scener page for Jouni Ikonen/Mixer (id 745, Finland, groups Origo Dreamline/Brains founder/Performers/Side B, handles also Wild Finn and James Bond II) lists no music player or tool called 'Mixer' among his releases — checked directly.",
    "Not a fixed relocatable player: full census of all 8 tagged tunes' PSID headers shows load/init/play addresses vary — Ikari & Talent Tune (id 20746, 1989): load $1000/init $1000/play $1003; SurSumTheme (id 20749, 1989): load $1000/init $1000/play $1003 (identical to the previous — same release year, same group); Dawn (id 20741, 1991): load $E000/init $E000/play $E003; Elysion (intro/loader) (id 20743, 1992): load $E000/init $E000/play $E003 (identical to Dawn); Hellraiser (id 20744, 1991): load $8000/init $8011/play $8003; Do You Wanna ANALize Me? (id 43475, 1991): load $F000/init $F000/play $F003; Iisibiisi (id 20745, 1993): load $0F00/init $5000, no PlayAddr in the PSID header; Hittibiisi (id 64572, 2025): load $0810/init $0810, no PlayAddr. A genuine distributable player normally keeps a stable load/entry layout across tunes made with it; this one does not overall, though pairs from the same release moment share an address exactly (1989 pair at $1000, 1991/1992 Origo Dreamline pair at $E000) — consistent with one evolving personal routine that got reassembled/relocated per production rather than either a fixed tool or fully bespoke code each time.",
    "The same composer's other tunes in the same folder use real named tools instead (FutureComposer_V1.0, FutureComposer_V4_Packed, Ubik's_Musik, GoatTracker_V2.x) — 'Mixer' covers only a minority (8 of ~65) of his own output, the tunes where he apparently wrote his own routine rather than using an existing editor.",
    "Nothing here confirms or denies digi/sample playback of any kind — no source, disassembly, or documentation exists to check. Do not infer capability from the name.",
    "The 8 tagged files span a 36-year release range per CSDb 'Released' fields: 1989 (Ikari & Talent Tune, SurSumTheme, both Origo Dreamline) through 2025 (Hittibiisi, also Origo Dreamline) — the composer (active per his DeepSID profile through 2025) appears to have kept reusing/re-hand-coding this same personal routine on and off across his whole scene career, not just in one burst. Do You Wanna ANALize Me? (1991) is the one outlier credited to group 'Beyond Force' rather than Origo Dreamline. No single 'released' date exists because this was never a one-time product release."
  ],
  "sources": [
    "Local dataset: data/composers/mixer.json — 8 files tagged player='Mixer', all under composer Jouni Ikonen (Mixer), csdb scener id 745",
    "SIDId sidid.nfo, entry 'Mixer' (author-only, no name/released/reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo (local copy deepsid_dl/sidid.nfo, line ~965)",
    "CSDb scener profile (handles, groups, no player/tool credited): https://csdb.dk/scener/?id=745",
    "CSDb SID entries (webservice, type=sid) for all 8 files tagged player='Mixer' — full census, load/init/play addresses and Released fields: Dawn https://csdb.dk/sid/?id=20741 (1991 Origo Dreamline); Do You Wanna ANALize Me? https://csdb.dk/sid/?id=43475 (1991 Beyond Force); Elysion (intro/loader) https://csdb.dk/sid/?id=20743 (1992 Origo Dreamline); Hellraiser https://csdb.dk/sid/?id=20744 (1991 Origo Dreamline); Iisibiisi https://csdb.dk/sid/?id=20745 (1993 Origo Dreamline); Ikari & Talent Tune https://csdb.dk/sid/?id=20746 (1989 Origo Dreamline); SurSumTheme https://csdb.dk/sid/?id=20749 (1989 Origo Dreamline); Hittibiisi https://csdb.dk/sid/?id=64572 (2025 Origo Dreamline)",
    "WebSearch 2026-07-31 for 'Jouni Ikonen Mixer C64 Origo Dreamline sid player routine' and a Lemon64-targeted search: no evidence found of an independent named tool/editor called 'Mixer' — only the composer's own tunes and profile pages (remix64.com, demozoo.org/sceners/18821, c64.ch/groups/77) turned up"
  ]
}
```

## Overview

"Mixer" is not an independent music tool — it is the SIDId-assigned tag for a
recurring signature found in some hand-coded tunes by **Jouni Ikonen**, whose
scene handle is itself **Mixer** (also Wild Finn, James Bond II; groups Origo
Dreamline, Brains, Performers, Side B; Finland). Local data shows an exact 1:1
overlap between the tag and the composer: all 8 files tagged `player: "Mixer"`
belong to this one composer, and no other composer's file carries the tag.
SIDId's own index entry for "Mixer" has only an `AUTHOR` line — no name, release
year, or CSDb reference — unlike genuine published tools cross-referenced in the
same file. His CSDb scener page credits him with no music player/tool release.
Checking the PSID headers of all eight tagged tunes (a full census, not a
sample) shows the load/init/play addresses vary overall — though two pairs
made in the same release moment share an address exactly (the 1989 pair at
$1000; the 1991/1992 Origo Dreamline pair at $E000) — which rules out a
single fixed distributable player and points instead to one evolving personal
routine, reassembled/relocated per production. Per CSDb's `Released` field on
each of the 8 files, the tag spans a 36-year range: earliest 1989
(SurSumTheme, Ikari & Talent Tune), latest 2025 (Hittibiisi) — all but one
credited to his own group Origo Dreamline. There is accordingly no single
tool "release" to record; `released` documents this span with per-file
citations instead. This composer used real named tools (FutureComposer,
Ubik's Musik, GoatTracker) for the rest of his output; "Mixer" only covers
the minority of tunes where he apparently rolled his own routine, on and off
across his entire scene career.

## Quirks & gotchas

See the `quirks` array. Load-bearing finding: **the tag is the author's own
handle, not a tool name** — established by the 1:1 file/composer overlap, the
sparse SIDId entry, the absence of any credited tool on his CSDb scener page,
and inconsistent PSID load/init/play addresses across the tagged tunes (ruling
out a fixed relocatable player). This is a personal/ad-hoc routine, not a
scene-published editor, and the card should stay near-empty rather than invent
structure for it.

## Disassembly notes

None done. Given the address inconsistency across tunes (see Overview), there
may not even be one single routine to disassemble — each tagged tune could
carry its own variant. Not attempted here.

## Verification

Not verified. No init/play trace was run through `mcp-c64`/`sidm2-siddump` for
this card. All facts above come from cached local data (`data/composers/*.json`),
SIDId's `sidid.nfo`, and live CSDb pages fetched during this research pass —
`status: stub`.

## Sources

See the `sources` array — local composer dataset, SIDId `sidid.nfo`, and three
CSDb pages (one scener profile, two SID entries) fetched directly.
