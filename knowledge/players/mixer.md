# Mixer

```json
{
  "id": "mixer",
  "name": "Mixer",
  "aliases": ["Mixer"],
  "authors": ["Jouni Ikonen (Mixer / Wild Finn / James Bond II)"],
  "released": "TODO: no single release — addresses vary per tune (see Overview)",
  "status": "stub",
  "platform": "TODO: likely a native, per-tune hand-assembled routine, not a distributable editor/tool — unconfirmed",
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
    "Not a fixed relocatable player: PSID header load/init/play addresses differ across the 8 tagged tunes — SurSumTheme (CSDb sid id 20749): load $1000 / init $1000 / play $1003; Iisibiisi (id 20745): load $0F00 / init $5000 / play $0000; Hellraiser (id 20744): load $8000 / init $8011 / play $8003. A genuine distributable player normally keeps a stable load/entry layout across tunes made with it; this composer's routine does not, which argues for a per-tune hand-assembled routine rather than a shared tool.",
    "The same composer's other tunes in the same folder use real named tools instead (FutureComposer_V1.0, FutureComposer_V4_Packed, Ubik's_Musik, GoatTracker_V2.x) — 'Mixer' covers only a minority (8 of ~65) of his own output, the tunes where he apparently wrote his own routine rather than using an existing editor.",
    "Nothing here confirms or denies digi/sample playback of any kind — no source, disassembly, or documentation exists to check. Do not infer capability from the name."
  ],
  "sources": [
    "Local dataset: data/composers/mixer.json — 8 files tagged player='Mixer', all under composer Jouni Ikonen (Mixer), csdb scener id 745",
    "SIDId sidid.nfo, entry 'Mixer' (author-only, no name/released/reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo (local copy deepsid_dl/sidid.nfo, line ~965)",
    "CSDb scener profile (handles, groups, no player/tool credited): https://csdb.dk/scener/?id=745",
    "CSDb SID entry, SurSumTheme (load/init/play addresses): https://csdb.dk/sid/?id=20749",
    "CSDb SID entry, Iisibiisi (load/init/play addresses): https://csdb.dk/sid/?id=20745",
    "CSDb SID entry, Hellraiser (load/init/play addresses): https://csdb.dk/sid/?id=20744"
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
Checking the PSID headers of three of the eight tagged tunes shows the
load/init/play addresses are different in every case, which is inconsistent
with a single distributable player and consistent with a per-tune hand-assembled
routine bundled directly into whichever tune needed it. This composer used real
named tools (FutureComposer, Ubik's Musik, GoatTracker) for the rest of his
output; "Mixer" only covers the minority of tunes where he apparently rolled
his own routine.

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
