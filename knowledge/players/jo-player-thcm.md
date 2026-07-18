# JO's player + THCM

```json
{
  "id": "jo-player-thcm",
  "name": "JO's player + THCM",
  "aliases": ["JO's player + THCM"],
  "authors": ["Unconfirmed — 'THCM' identifies Uwe Anfang (The Human Code Machine), independently confirmed as a code credit on the one release this tag's file comes from; 'JO' is not identified — no scener by that exact handle appears in that release's credit list (see quirks)"],
  "released": "TODO: sole locally-tagged file is from Masters' Design Group's 'Megademo 1', released February 1997",
  "status": "stub",
  "platform": "TODO: not confirmed as a standalone tool. Possibly related to THCM's other personal digi/conversion routines already carded here ([[oxymod4bit-thcm]], [[mahoneydigi-thcm]]) given the shared 'THCM' naming and confirmed presence on the same release, but no source states this equivalence — kept as an open hypothesis, not an edge.",
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
    "1 file, 1 composer: Hans Jürgen Ehrentraut (HJE), 'Megademo (part 2)' in Masters' Design Group's 'Megademo 1' (CSDb release 5937, February 1997). CSDb's release credit list for that production includes AMJ, Celticdesign, Charles Deenen, Frank Endler, HJE, Jeroen Tel, Odi, Oliver Stiller, Rage, Sky, The Human Code Machine, and Thomas Heinrich — 'The Human Code Machine' (THCM) IS directly confirmed as a coder on this release, corroborating the 'THCM' half of the tag name.",
    "'JO' is NOT an obvious match in that credit list — not Jeroen Tel (already separately credited by his own full handle), not Odi, not any other listed scener. Left unresolved: possibly a nickname/typo not distinguishable from the fetched credit summary, or a scener not individually credited on this specific release.",
    "Parallel case to [[mahoneydigi-thcm]]: no SIDId entry, single composer, THCM confirmed via release-level CSDb credits rather than the tag itself, and an unconfirmed hypothesis about relation to THCM's other carded tools — same evidentiary shape, different composer/release. Per this repo's rule that implied/inferred lineage must not become a machine-readable edge, no `edges` entry is asserted.",
    "No SIDId entry exists for 'JO's player + THCM' (checked data/sidid.json directly)."
  ],
  "sources": [
    "CSDb release 5937 ('Megademo 1' by Masters' Design Group, Feb 1997, full credit list incl. The Human Code Machine and HJE): https://csdb.dk/release/?id=5937",
    "CSDb sid entry 39979 ('Megademo (part 2)', composer HJE): https://csdb.dk/sid/?id=39979",
    "Local dataset: data/composers/hje.json — 1 file; knowledge/COVERAGE.md rank #111",
    "Sibling KB cards: knowledge/players/oxymod4bit-thcm.md, knowledge/players/mahoneydigi-thcm.md (THCM context; cited for the hypothesis only, not as confirmed fact about this specific tag)",
    "data/sidid.json byTag — checked, no entry for \"JO's player + THCM\""
  ]
}
```

## Overview

`JO's player + THCM` is a raw Player-ID tag covering 1 file by composer
**Hans Jürgen Ehrentraut (HJE)**, part of Masters' Design Group's
"Megademo 1" (February 1997). CSDb's own release credit list for that
production directly confirms **Uwe Anfang (The Human Code Machine /
THCM)** as a coder alongside HJE and several others — real corroboration
for the "THCM" half of the tag name — but no scener named "JO" is
identifiable in that same credit list, leaving the other half unresolved.
This tag has no SIDId entry, and its evidentiary shape closely parallels
the KB's existing [[mahoneydigi-thcm]] card: a THCM-adjacent tag,
single-composer, corroborated only at the release-credits level, with an
unconfirmed but plausible relationship to THCM's other personal digi/
conversion tools already documented here.

## Quirks & gotchas

See the `quirks` array. Load-bearing: THCM's presence is genuinely
confirmed via CSDb release credits (not just the tag name); "JO" remains
unidentified; and no `edges` relationship to THCM's other carded tools is
asserted, per this repo's inference-vs-edge rule.

## Disassembly notes

None done here. No source or disassembly was found; every Tier 3 field is
honestly `TODO`. A byte-level comparison against an `OxyMod/THCM`-tagged
file (per the plan already noted on `oxymod4bit-thcm.md`) would be the
most promising next step if this family is picked up again.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts
(composer, release credits) are confirmed via CSDb. No SIDId entry exists.
No runtime fact was guessed.

## Sources

See the `sources` array — two CSDb pages, local composer data, and the two
sibling THCM cards (cited for context only).
