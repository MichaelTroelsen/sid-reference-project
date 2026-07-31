# (Audial_Arts_Digi)

```json
{
  "id": "audial-arts-digi",
  "name": "(Audial_Arts_Digi)",
  "aliases": ["(Audial_Arts_Digi)"],
  "authors": ["TODO: no source names a coder — both locally-tagged composers are Audial Arts group members (Softmaster, Rodney Balai), but neither is documented as the routine's author (see quirks)"],
  "released": "TODO: no dedicated tool/editor release found — this reads as an in-house routine, not a distributed product. Full census (2026-07-31, both of the 2 tagged files, via scripts/lib/csdb-client.js type=sid) of each file's own CSDb `Released` field: Echodemo (csdb sid id 62807) 'Released: 1991 Audial Arts'; Puke-Box Main Menu (csdb sid id 7207) 'Released: 1991 Inceria', reused in Puke Box diskmags #02 through #10 (earliest UsedIn 1991-03-16, CSDb release 5666). Both censused files' own Released fields read 1991 — earliest attested use is 1991, not a documented tool-release year (see quirks).",
  "status": "stub",
  "platform": "Native C64 — both censused files are ordinary PSID entries (Echodemo: LoadAddr/InitAddr $1000; Puke-Box Main Menu: LoadAddr/InitAddr $5800, PlayAddr $0000 in both, i.e. self-installing/IRQ-driven, not polled), no cross-platform editor evidence. CSDb group #752 (Audial Arts) is listed as a single 'Music Group', BaseCountry Netherlands, no Amiga/PC crossover noted. Still unresolved whether this is a variant of the group's 'Zong Player' ([[audial-arts]]), a third distinct Audial Arts-adjacent routine (cf. [[audial-arts-cody]]), or something else — no reverse-engineered source or SIDId entry names it (see quirks).",
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
    "No CSDb tool/release page for a standalone '(Audial_Arts_Digi)' editor was found.",
    "Re-research pass, 2026-07-31: gap-fill for `released`/`platform`/`csdb_release`, censusing both (all) tagged files via CSDb webservice (scripts/lib/csdb-client.js, type=sid) rather than trusting the earlier TODO placeholders. `released` — both files' own `Released` fields read 1991 (Echodemo: '1991 Audial Arts', csdb sid 62807; Puke-Box Main Menu: '1991 Inceria', csdb sid 7207, first reused in Puke Box #02 on 1991-03-16, CSDb release 5666) — recorded as earliest-attested tune use, not a tool-release date, since no dedicated editor/tool page exists for this tag (per this project's own rule to not promote a first-use year into a tool `released` field). `platform` — confirmed native C64 from both files' own PSID headers (LoadAddr=InitAddr $1000 and $5800 respectively, PlayAddr $0000 in both — header metadata only, not a Tier 3 fact) plus CSDb group #752's record (single 'Music Group' Grouptype, Netherlands, no cross-platform listing). `csdb_release` confirmed to stay `null` — re-checked data/sidid.json byTag directly (only 'Audial_Arts' → Zong Player and 'Audial_Arts_Revolution' entries exist, nothing for this exact tag) and no standalone tool/editor CSDb release page was found for '(Audial_Arts_Digi)' in this pass. `status` stays `stub`; no Tier 3 field was touched."
  ],
  "sources": [
    "knowledge/players/audial-arts.md — flags this tag as the uninvestigated 'fourth AA-family signature'",
    "knowledge/players/audial-arts-cody.md — establishes the precedent that shared 'Audial_Arts/' HVSC foldering does NOT imply shared code, via byte-signature/address comparison of two other AA-family tags",
    "SIDId sidid.nfo checked, no entry for '(Audial_Arts_Digi)': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb group #752, Audial Arts (NL, founded 1990, members incl. Softmaster and Rodney Balai): https://csdb.dk/group/?id=752",
    "Local dataset: 2 files tagged (Audial_Arts_Digi) — 'Echodemo' (patrick-peters/Softmaster), 'Puke-Box Main Menu' (rodney-balai) — data/composers/patrick-peters.json, data/composers/rodney-balai.json; see knowledge/COVERAGE.md rank 117",
    "CSDb webservice (scripts/lib/csdb-client.js), type=sid, full census of both tagged files, fetched 2026-07-31: Echodemo https://csdb.dk/sid/?id=62807 (Released '1991 Audial Arts', LoadAddr/InitAddr $1000); Puke-Box Main Menu https://csdb.dk/sid/?id=7207 (Released '1991 Inceria', LoadAddr/InitAddr $5800, UsedIn Puke Box #02/#03/#04/#06/#07/#08/#09/#10 diskmags 1991-1992, earliest https://csdb.dk/release/?id=5666 dated 1991-03-16)",
    "CSDb webservice, type=group, id=752 (Audial Arts), fetched 2026-07-31: single Grouptype 'Music Group', BaseCountry Netherlands, FoundYear 1990 — https://csdb.dk/group/?id=752",
    "data/sidid.json byTag re-checked directly 2026-07-31: only 'Audial_Arts' (Zong Player) and 'Audial_Revolution' (Audial Revolution Music Editor) keys exist; no key for this exact tag"
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
mistake. A full census of both tagged files (2026-07-31, CSDb webservice)
puts earliest attested tune use at 1991 for both — no dedicated tool/editor
release exists, so this is recorded as a tune-use year, not a player-release
date. Both files are ordinary native-C64 PSID entries with no cross-platform
editor evidence, consistent with an in-house group routine rather than a
distributed tool.

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
SIDId check. Re-research pass 2026-07-31 added a full CSDb-webservice census
of both tagged files (`released`, `platform` PSID header facts) and a
re-check of `data/sidid.json` (`csdb_release` confirmed to stay `null`). No
Tier 3 field was touched. `status: stub`.

## Sources

See the `sources` array — the two sibling AA-family cards, CSDb, SIDId
(checked, absent), and the local composer aggregation.
