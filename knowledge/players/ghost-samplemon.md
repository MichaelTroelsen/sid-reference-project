# Sample Mon (Ghost/SampleMon)

```json
{
  "id": "ghost-samplemon",
  "name": "Sample Mon",
  "aliases": ["Ghost/SampleMon"],
  "authors": ["Slawomir Skrzynski (Ghost)"],
  "released": "1994 (V1.1, CSDb 9876); 1994 (V1.2, CSDb 121423)",
  "status": "stub",
  "platform": "Native C64 tool. CSDb categorizes it under release-type \"C64 Tool\" (not Music), published by Biuro Informatyczno-Wydawnicze (BIW), Poland.",
  "csdb_release": 9876,

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
    "Name reading confirmed by SIDId ('Sample Mon' — i.e. Sample Monitor) and by CSDb's own categorization: both V1.1 (id 9876) and V1.2 (id 121423) are filed under release-type 'C64 Tool', not Music. A user comment on the V1.2 CSDb page reads 'I make my samples with this software' — direct, if informal, evidence the tool is used to author/monitor digitized samples. This is stronger evidence than most tags in this batch, but the actual playback/register technique used inside a .sid built with it is still unconfirmed (TODO).",
    "Same author (Ghost / Slawomir Skrzynski) also released 'Digi Ripper V1.1' in 1994 (per his CSDb scener credits list) — a sample-extraction tool. This suggests Sample Mon was one piece of a small in-house digi-sample toolkit at BIW alongside Digi Ripper, but no byte-level or source evidence ties their code together, so no `shares_routine_with` edge is asserted.",
    "BIW (Biuro Informatyczno-Wydawnicze) is a Polish company/publisher, not a classic demoscene group — CSDb's own group page carries a user note that it 'does not actually look like a scene group' but functions as a developer/publisher (key figure: Boguslaw Radziszewski).",
    "Moderate, not extreme, concentration: 18 files across 6 composers in this dataset (Yattaman 6, Swayze 5, Rule3 Helios 4, Killer 1, Secret Miss 1, Warlock 1 — data/composers/*.json aggregation). All 6 composers' HVSC profiles list Poland as country, consistent with a nationally-scoped tool tied to BIW rather than one person's private routine.",
    "Two versions are distinguished in SIDId (V1.1 and V1.2, both 1994) but SIDId collapses both to the single tag 'Ghost/SampleMon' with no version suffix — unlike some other families in this project's dataset, there is no per-version split visible in local usage data."
  ],
  "sources": [
    "SIDId sidid.nfo entry 'Ghost/SampleMon' (name, author, release year/publisher, reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo ; local copy deepsid_dl/sidid.nfo lines 520-524",
    "CSDb release Sample Mon V1.1 (id 9876, 'C64 Tool', author Ghost/code, download listing): https://csdb.dk/release/?id=9876",
    "CSDb release Sample Mon V1.2 (id 121423, 'C64 Tool', user comment 'I make my samples with this software'): https://csdb.dk/release/?id=121423",
    "CSDb scener 'Ghost' (id 7073, Poland, credits including Digi Ripper V1.1, Sample Mon V1.1/V1.2, Programator C-64): https://csdb.dk/scener/?id=7073",
    "CSDb group 'Biuro Informatyczno-Wydawnicze' (id 6079, Poland, publisher not classic scene group, 9 releases): https://csdb.dk/group/?id=6079",
    "Local dataset: data/composers/*.json aggregation — 18 files tagged Ghost/SampleMon across 6 composers (Killer 1, Rule3 Helios 4, Secret Miss 1, Swayze 5, Warlock 1, Yattaman 6), all Poland"
  ]
}
```

## Overview

Sample Mon is a native C64 utility by **Slawomir Skrzynski ("Ghost")**, released in
1994 (V1.1 and V1.2) by the Polish publisher **Biuro Informatyczno-Wydawnicze
(BIW)**. Unlike most tags in this batch, the "monitor" reading of the name has
real support here: CSDb files both versions under the **"C64 Tool"** release
type (not Music), and a user comment on the V1.2 page states plainly **"I make
my samples with this software."** The same author released a companion tool,
**Digi Ripper V1.1**, the same year — suggestive of a small in-house digi-sample
toolkit at BIW, though no source or byte evidence ties the two together. Local
usage is modest and geographically tight: 18 files across 6 composers, all
Poland.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the CSDb release-type + user-comment
evidence for the "sample authoring/monitor" reading (stronger than a bare name
guess); the sibling "Digi Ripper" tool by the same author (a lead, not a proven
code relationship); and the moderate, Poland-wide (not single-composer)
concentration.

## Disassembly notes

None done here. No public source or disassembly was found for Sample Mon; the
CSDb release pages carry only the .d64/.t64 binaries.

## Verification

Not verified. Identity (author, release dates, publisher) and the
tool/authoring-vs-player reading are CSDb/SIDId-sourced as cited above; every
runtime field (memory map, entry points, data format) is `TODO` — `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb releases (V1.1 id 9876, V1.2 id
121423), CSDb scener page for Ghost, CSDb group page for BIW, and the local
composer-data aggregation for usage counts.
