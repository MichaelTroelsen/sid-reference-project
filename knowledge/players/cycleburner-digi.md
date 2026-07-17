# Cycleburner_Digi

```json
{
  "id": "cycleburner-digi",
  "name": "Cycleburner_Digi",
  "aliases": ["Cycleburner_Digi"],
  "authors": ["Even Scharning (Cycleburner)"],
  "released": "TODO: exact year unknown; earliest local file usage (Cycleburner's own tunes, e.g. Anal Probe pt.3, Youthquake) is 1989",
  "status": "stub",
  "platform": "Native C64. Not a distributed editor/tool — a composer's own embedded playback routine, hand-included in each of his music's binaries.",
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
    "The 'Digi' in the tag is NOT confirmed technical evidence of sample/digi playback in the strict per-frame register-trace sense — no disassembly has been done here. However, unlike most _Digi-tagged personal routines in this batch, there IS independent biographical corroboration for the name: Cycleburner's demoscene credits (Demozoo) explicitly list 'Sampling' as a role on '2 MHz Hell' (Oct 1988) and 'Music (sampling)' on 'Youthquake' (Jun 1989), and he is described as having created the 'digimix' for Contex's Batman Digi-Demo. This is corroborating biography, not a confirmed disassembly of the routine in these particular 30 files — still TODO.",
    "SIDId (data/sidid.json byTag) records only 'AUTHOR: Even Scharning (Cycleburner)' for this tag — no released year, no CSDb reference, no comment. That absence itself is a signal: unlike published tools (Digitalizer, SidWizard, etc.) which SIDId links to a CSDb release id, this tag has none — consistent with a personal routine that was never packaged or released as a standalone product.",
    "Local usage is 30 files across 3 composers: Cycleburner himself (Even Scharning, 18 files — his own demos for Contex 1989-90 and Megastyle into 1994), Feekzoid (Paul Hannay, 6 files, Scotland, active 1992-93, group 'Warriors of the Wasteland' per CSDb — no documented group overlap with Cycleburner/Contex/Megastyle), and Thomas Saltkjelvik (6 files, Norway, group 'Creators' per HVSC Musicians.txt — again no documented overlap). Source: data/composers/cycleburner.json, feekzoid.json, thomas-saltkjelvik.json aggregation.",
    "Because this project's 'player' tag is a SIDId byte-signature match against the actual replay code embedded in the .sid binary (not a self-reported credit), Feekzoid's and Saltkjelvik's files matching the same signature as Cycleburner's own tunes is real evidence the routine's code was reused/borrowed across composers who otherwise have no documented scene connection to Cycleburner — not just a coincidental naming. The mechanism of that reuse (shared source, copied binary routine, or a common ancestor routine) is unconfirmed — TODO.",
    "No CSDb release exists for a standalone 'Cycleburner_Digi' tool/player — searches for a Cycleburner-authored 'Digi Player'/'DigiPlayer' release on CSDb turned up nothing. This supports treating it as an embedded personal routine, not a published editor."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no release/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo (local copy: deepsid_dl/sidid.nfo)",
    "Local dataset: data/sidid.json byTag.Cycleburner_Digi; data/composers/cycleburner.json, feekzoid.json, thomas-saltkjelvik.json (30 files: 18 Cycleburner, 6 Feekzoid, 6 Saltkjelvik)",
    "CSDb scener profile, Cycleburner/Megastyle/Offence/ex-Contex (groups, activity, country Norway): https://csdb.dk/scener/?id=8090",
    "CSDb scener profile, FeekZoid (Scotland, ex-Warriors of the Wasteland, active 1992-93): https://csdb.dk/scener/?id=12426",
    "Demozoo, Cycleburner productions with dates incl. 'Sampling'/'Music (sampling)' credits on 2 MHz Hell (1988) and Youthquake (1989): https://demozoo.org/sceners/15762/",
    "HVSC Musicians.txt entry for Thomas Saltkjelvik (group Creators): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt"
  ]
}
```

## Overview

Cycleburner_Digi is the SIDId-detected playback routine embedded in music by
**Even Scharning ("Cycleburner")**, a Norwegian coder/musician active from
1988 on (groups Contex, then Megastyle from 1990, later Offence). It is not
a published editor or tool — no CSDb release exists for it, and SIDId's own
index (`data/sidid.json`) records only an author, no release date or
reference, unlike this batch's genuinely distributed tools. Locally it
appears on 30 files across 3 composers: 18 by Cycleburner himself, and 6
each by two composers with no documented scene connection to him
(Feekzoid/Paul Hannay, Scotland; Thomas Saltkjelvik, Norway/Creators) —
see the Quirks section for why that spread is itself evidence, not noise.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tag's "Digi" has real
biographical corroboration (Cycleburner is independently documented as a
"sampling"-credited coder on 1988-89 productions) but that is NOT the same
as a confirmed disassembly of these 30 files' actual playback code — still
`TODO`; (2) the three-composer spread is meaningful because this project's
player tag comes from a byte-signature match on the embedded routine, not a
self-reported credit — so its reuse by Feekzoid and Saltkjelvik is real
evidence of routine-sharing across otherwise-unconnected composers, not a
naming coincidence; (3) no CSDb release for a tool by this name exists,
consistent with it being a personal/embedded routine rather than a
published product.

## Disassembly notes

None done here. No public source or CSDb release has been found to seed
runtime facts from — all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity (author, composer
concentration, absence of a published-tool CSDb release) is
SIDId/CSDb/Demozoo-sourced per the citations above; no runtime fact has been
disassembled or traced.

## Sources

See the `sources` array — SIDId, local composer-data aggregation, CSDb
scener profiles for Cycleburner and Feekzoid, Demozoo's Cycleburner
production list, and HVSC's Musicians.txt for Thomas Saltkjelvik.
