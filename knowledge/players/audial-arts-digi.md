# (Audial_Arts_Digi)

```json
{
  "id": "audial-arts-digi",
  "name": "(Audial_Arts_Digi)",
  "aliases": ["(Audial_Arts_Digi)"],
  "authors": ["TODO: no source names a coder — both locally-tagged composers are Audial Arts group members (Softmaster, Rodney Balai), but neither is documented as the routine's author (see quirks)"],
  "released": "TODO: no explicit tool-release year found",
  "status": "stub",
  "platform": "TODO: unresolved whether this is a variant of the group's 'Zong Player' ([[audial-arts]]), a third distinct Audial Arts-adjacent routine (cf. [[audial-arts-cody]]), or something else — no reverse-engineered source or SIDId entry names it (see quirks)",
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
    "This is the 'FOURTH AA-family signature' flagged as uncarded in [[audial-arts]]'s own quirks ('A FOURTH AA-family signature exists and is uncarded: \"(Audial_Arts_Digi)\" (2 files)... not yet investigated'). This card is that investigation.",
    "No SIDId sidid.nfo entry exists for this exact tag (checked data/sidid.json byTag — absent, distinct from the plain 'Audial_Arts' tag which DOES have an entry, 'Zong Player').",
    "Both locally-tagged files are by CONFIRMED Audial Arts group members per [[audial-arts]]'s own member list (CSDb group #752): 'patrick-peters' (handle Softmaster, data/composers/patrick-peters.json) and 'rodney-balai' (handle 'The Jungle Brother', data/composers/rodney-balai.json) — both Dutch, both filed under HVSC's MUSICIANS/A/Audial_Arts/ folder. This is real, if circumstantial, evidence the routine is AA-adjacent.",
    "NOT MERGED into [[audial-arts]] (the 'Zong Player,' coded by François Prijt) — following the precedent already set by [[audial-arts-cody]] on this same family: that card found a THIRD, provably distinct routine (Ronny Pasch/Cody's own code) hiding under the same HVSC 'Audial_Arts/' folder prefix, with zero byte-signature overlap against the Zong Player despite the shared foldering. HVSC foldering records where a file SITS, not what code it RUNS (see [[audial-arts-cody]]'s own explicit warning on this exact point). Without a byte-signature or source comparison for '(Audial_Arts_Digi)' against Zong/Cody, merging would risk repeating the same mistake that card explicitly guards against — so this stays a separate, uninvestigated-at-the-code-level card.",
    "Distinct from 'Audial_Arts/Cody_Digi' (a THIRD, already-noted tag folded as a flagged sibling onto [[audial-arts-cody]], 3 files by Harlequin x2 + Rodney Balai) — note Rodney Balai has files under BOTH 'Audial_Arts/Cody_Digi' and this tag '(Audial_Arts_Digi)', meaning he alone spans three of the four AA-family signatures (plain Audial_Arts is not confirmed for him here, only Cody_Digi and this one) — worth a future look if someone disassembles the family, but not chased further in this pass.",
    "The parentheses in the raw tag name '(Audial_Arts_Digi)' are literal (present in data/composers/*.json's player field) — a SIDId formatting convention seen elsewhere for less-certain/heuristic matches, not a typo.",
    "No CSDb tool/release page for a standalone '(Audial_Arts_Digi)' editor was found."
  ],
  "sources": [
    "knowledge/players/audial-arts.md — flags this tag as the uninvestigated 'fourth AA-family signature'",
    "knowledge/players/audial-arts-cody.md — establishes the precedent that shared 'Audial_Arts/' HVSC foldering does NOT imply shared code, via byte-signature/address comparison of two other AA-family tags",
    "SIDId sidid.nfo checked, no entry for '(Audial_Arts_Digi)': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb group #752, Audial Arts (NL, founded 1990, members incl. Softmaster and Rodney Balai): https://csdb.dk/group/?id=752",
    "Local dataset: 2 files tagged (Audial_Arts_Digi) — 'Echodemo' (patrick-peters/Softmaster), 'Puke-Box Main Menu' (rodney-balai) — data/composers/patrick-peters.json, data/composers/rodney-balai.json; see knowledge/COVERAGE.md rank 117"
  ]
}
```

## Overview

`(Audial_Arts_Digi)` is the fourth SIDId Player-ID signature found under the
Audial Arts (AA) family umbrella, previously flagged but uninvestigated in
[[audial-arts]]'s own quirks. Both of its 2 locally-tagged files are by
confirmed Audial Arts group members (Softmaster, Rodney Balai — CSDb group
#752), which is real circumstantial evidence of an AA connection. However,
this family has an established precedent — [[audial-arts-cody]] — of a
routine that shares the same HVSC folder prefix yet is a completely different,
unrelated piece of code from the group's actual "Zong Player." Without a
byte-signature or source comparison, this tag is therefore carded separately
rather than merged into [[audial-arts]], to avoid repeating that exact
mistake.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the previously-flagged
"fourth AA signature," now investigated but not resolved; (2) both composers
are genuine AA members, but that is not proof of sharing the Zong Player's
code — HVSC foldering records location, not lineage, per the Cody card's own
explicit finding; (3) Rodney Balai has files under both this tag and the
separate `Audial_Arts/Cody_Digi` tag, spanning multiple AA-family signatures.

## Disassembly notes

None done here. No reverse-engineered source or SIDId entry exists for this
specific tag (the realdmx AA sources cover only Prijt's Zong Player v1/v2,
per [[audial-arts]]'s own disassembly notes). All Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local composer data, cross-referencing the two
existing AA-family cards, a CSDb group-page check, and a confirmed-absent
SIDId check. `status: stub`.

## Sources

See the `sources` array — the two sibling AA-family cards, CSDb, SIDId
(checked, absent), and the local composer aggregation.
