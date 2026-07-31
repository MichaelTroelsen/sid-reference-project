# Sanyo_Digi

```json
{
  "id": "sanyo-digi",
  "name": "Sanyo_Digi",
  "aliases": ["Sanyo_Digi"],
  "authors": ["Stephane Martel (Sanyo)"],
  "released": "TODO: no titled tool-release date exists — SIDId's byTag entry has no `reference`. Per-tune CSDb `Released` fields for all 3 census files: Evolution (tune 3) '1991 Optic Vision' (csdb.dk/sid/?id=45220), Evolution (tune 5) '1991 Optic Vision' (csdb.dk/sid/?id=45219), Tropical Storm (tune 6) '1992 Optic Vision' (csdb.dk/sid/?id=45218) — earliest attested embedding is 1991. Sanyo's separate solo release 'Digi House' (1990, csdb.dk/release/?id=56080, credited 'Text, Sampling') predates these but is NOT one of the 3 tagged files, so 1990 is not promoted into this field",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample-playback routine embedded directly in Sanyo's own SID files, not a released standalone editor/tool. A CSDb site search for 'Sanyo_Digi' returns no player/tool/release entry (https://csdb.dk/search/?seinput=Sanyo_Digi, checked 2026-07-31) and there is no entry in data/players.json. HVSC STIL.txt confirms all 3 tagged files are playbacks of pop-song covers (Yello 'Oh Yeah', Kim Appleby 'Don't Worry', Scorpions 'Send Me An Angel') consistent with a personal digi-sample routine rather than a music tracker, but the technique itself is unconfirmed absent disassembly",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'Stephane Martel (Sanyo)' — no NAME, reference, or comment. The absence of a NAME field is a signal this was never packaged as a titled, released tool.",
    "Real corroborating evidence for the 'digi' label: CSDb credits Sanyo with an explicit 'Text, Sampling' role on 'Digi House' (1990 Music release) — a title-level match to the general theme, and CSDb also lists his handle alternative as 'Digital Sanyo', reinforcing the association. His other credits ('Tropical Storm' 1992, 'Evolution' 1991 — both Optic Vision demos) are listed as 'Music, Idea' rather than Sampling, but those exact titles match 2 of the 3 locally-tagged files ('Evolution (tune 3)'/'(tune 5)', 'Tropical Storm (tune 6)'), so the composer/production link is solid even where the specific credited role on those pages is 'Music' rather than 'Sampling'.",
    "3 files, 1 composer: Sanyo — 'Evolution (tune 3)', 'Evolution (tune 5)', 'Tropical Storm (tune 6)'. Census of all 3 confirmed via CSDb `sid` webservice entries, not sampled.",
    "Sanyo is Canadian, group Optic Vision (since 1-5-1991), function Musician.",
    "csdb_release is left null on purpose: SIDId's byTag entry for this tag carries no `reference` field at all (only `author`). Sanyo's own standalone release 'Digi House' (csdb.dk/release/?id=56080, 1990, 'Text, Sampling' credit) is the closest candidate CSDb entry but is not one of the 3 tagged files and is not confirmed to correspond to the Sanyo_Digi tag/routine itself, so it is not asserted as csdb_release.",
    "All 3 census files play cover versions of pop songs per HVSC STIL.txt (Yello 'Oh Yeah', Kim Appleby 'Don't Worry', Scorpions 'Send Me An Angel', and one untitled R.I.P.-credited track) — consistent with, but not proof of, sample/digi playback rather than a synthesized tracker format.",
    "Lemon64 forum search for 'Sanyo_Digi' returned 'you are not permitted to use the search system' (no results obtainable); Forum64 search returned HTTP 403. Neither forum yielded provenance."
  ],
  "sources": [
    "data/sidid.json byTag: Sanyo_Digi — author 'Stephane Martel (Sanyo)', no name/reference/comment",
    "CSDb scener Sanyo (Canada, aka 'Digital Sanyo'; group Optic Vision; 'Text, Sampling' credit on 'Digi House' 1990; 'Music, Idea' on 'Tropical Storm'/'Evolution'): https://csdb.dk/scener/?id=7418",
    "CSDb sid entries (per-tune Released field, via csdb-client.js webservice): https://csdb.dk/sid/?id=45220 (Evolution tune 3, 1991 Optic Vision), https://csdb.dk/sid/?id=45219 (Evolution tune 5, 1991 Optic Vision), https://csdb.dk/sid/?id=45218 (Tropical Storm tune 6, 1992 Optic Vision)",
    "CSDb release 'Digi House': https://csdb.dk/release/?id=56080 (1990, C64 Music, ReleasedBy Sanyo, credits Text + Sampling to Sanyo)",
    "CSDb site search (no player/tool entry found for 'Sanyo_Digi'): https://csdb.dk/search/?seinput=Sanyo_Digi",
    "HVSC data/hvsc/STIL.txt entries for /MUSICIANS/S/Sanyo/*.sid (title/artist per file, confirming cover-song content)",
    "Local dataset: 3 files tagged Sanyo_Digi, 1 composer (Sanyo) — data/composers/sanyo.json",
    "data/composers/sanyo.json (profile country Canada, csdb id 7418)",
    "Lemon64 forum search (no accessible results): https://www.lemon64.com/forum/search.php?keywords=Sanyo_Digi",
    "Forum64 search (HTTP 403, no results): https://www.forum64.de/index.php?search/1/&q=Sanyo_Digi"
  ]
}
```

## Overview

Sanyo_Digi is the SIDId tag for a digi/sample-playback routine attributed
to **Stephane Martel**, handle **Sanyo** (aka "Digital Sanyo"), a Canadian
scener (Optic Vision). SIDId's entry carries only an `AUTHOR` line — no
`reference`, so `csdb_release` stays `null`. It appears in only **3 files,
all by Sanyo himself** (census confirmed, not sampled) — "Evolution (tune
3)"/"(tune 5)" and "Tropical Storm (tune 6)", both from Optic Vision
demos. Each file's own CSDb `Released` field reads "1991 Optic Vision"
(tune 3, tune 5) and "1992 Optic Vision" (tune 6) — the earliest attested
use of this tag is 1991. Corroboration: CSDb credits Sanyo with an
explicit "Text, Sampling" role on his own solo release "Digi House"
(1990) — an earlier, separate self-published production not among the 3
tagged files — and his alternate handle "Digital Sanyo" reinforces the
digi association, though the exact locally-tagged productions ("Tropical
Storm", "Evolution") are themselves credited "Music, Idea" on CSDb rather
than "Sampling". No CSDb tool/release entry, GitHub repo, or forum thread
(Lemon64, Forum64 both checked) documents "Sanyo_Digi" as a named,
released tool — it reads as an in-house routine. HVSC STIL.txt shows all
3 files are cover versions of pop songs (Yello, Kim Appleby, Scorpions),
consistent with sample playback.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but no
titled product; (2) the "Sampling" role credit is on a differently-titled
release ("Digi House") than the 3 locally-tagged files, though the
composer/production link to "Tropical Storm"/"Evolution" is a direct
title match via the "Music, Idea" credit; (3) the "Digital Sanyo" alt-
handle is corroborating context, not a technique confirmation by itself.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`, `data/hvsc/STIL.txt`) plus
CSDb webservice lookups (scener, per-file `sid`, and the `Digi House`
`release` entry) for provenance. Lemon64 and Forum64 were both checked
directly and yielded nothing. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Sanyo,
and the local composer aggregation.
