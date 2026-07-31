# Lethal_Digi

```json
{
  "id": "lethal-digi",
  "name": "Lethal_Digi",
  "aliases": ["Lethal_Digi"],
  "authors": ["Lead (real name not disclosed on CSDb; group Lethal)"],
  "released": "1992 (CSDb-credited releases 'No Women Allowed', 'Paradise', 'Poing' by the group Lethal)",
  "status": "stub",
  "platform": "Native C64 in-house digi/sample routine, personal to Lead, embedded directly in his own productions — NOT a released standalone editor/tool. Confirmed by Lead's own CSDb group comment (dated 20.01.2026, on group Lethal's page): \"As I made some digi's back then but the others did not find them suiting with House Designs I decided to label them with the 'Lethal' name.\" https://csdb.dk/group/?id=6829",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb's scener page for Lead.",
    "STRONG, EXACT-TITLE evidence for the 'digi' label: CSDb credits Lead with 'Code, Graphics, Sampling' on THREE 1992 releases by the group 'Lethal' — 'No Women Allowed', 'Paradise', 'Poing' — and all three titles are an EXACT match to all 3 locally-tagged files for this composer. This is one of the strongest-evidenced tags in this batch: the tag name 'Lethal_Digi' plausibly derives from the GROUP name 'Lethal', not a personal nickname, and CSDb corroborates both the group and the explicit Sampling role on the exact same tracks.",
    "3 files, 1 composer: Lead — 'No Women Allowed', 'Paradise', 'Poing'.",
    "Lead is Dutch, current group House Designs (since Aug 1991), formerly Sense Designs; CSDb also lists a 'Lethal' group affiliation implied by the 1992 credits (not listed among his named former groups on the summary fetched, but the release credits themselves name the group 'Lethal' directly) — worth confirming the exact CSDb group id in a future pass. Later became a 'Product specialist for Pioneer DJ' per his CSDb trivia.",
    "CONFIRMED, direct-author evidence (not inference): CSDb group id 6829 = 'Lethal', a cracking label of House Designs 'in disguise', Netherlands, founded 1990, dissolved 1993, founded by Chesoner and Lead of House Designs so House Designs wouldn't be associated with cracks. Lead's own group-page comment (dated 20.01.2026): \"As I made some digi's back then but the others did not find them suiting with House Designs I decided to label them with the 'Lethal' name.\" This settles both open questions from the prior pass: the tag names the group, and the group name was chosen by Lead specifically to badge HIS digi work as distinct from House Designs — i.e. Lethal_Digi is a personal labelling convention, not a distributed tool. https://csdb.dk/group/?id=6829",
    "Full census of all 3 tagged files via CSDb XML webservice (scripts/lib/csdb-client.js getSidRelease): 'No Women Allowed' (SID id 51319, LoadAddr $106F/4207, InitAddr $106F/4207), 'Paradise' (SID id 51318, LoadAddr $0800/2048, InitAddr $3B00/15104), 'Poing' (SID id 51320, LoadAddr $10A8/4264, InitAddr $10A8/4264) — all released '1992 Lethal', all player_type 'Normal built-in' in data/composers/lead.json. These are PSID header values, not disassembly facts, recorded here per EXTRACTION-TEMPLATE.md guidance, not in memory/entry fields.",
    "All 3 releases are CSDb Type 'C64 One-File Demo' credited to group Lethal (id 6829): Lead did Code+Graphics+Sampling, Slide (Udo Gorissen) did Music on all three — confirms this is a small in-house demo-scene production, not a published editor with third-party adopters."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Lethal_Digi\"",
    "CSDb scener Lead (Netherlands; 'Code, Graphics, Sampling' credit on 'No Women Allowed'/'Paradise'/'Poing', group Lethal, 1992): https://csdb.dk/scener/?id=2666",
    "CSDb group Lethal (id 6829), incl. Lead's own comment on the group naming/purpose: https://csdb.dk/group/?id=6829",
    "CSDb XML webservice, SID entries 51318/51319/51320 and Release entries 100669/100670/100671 (via scripts/lib/csdb-client.js getSidRelease/getRelease)",
    "Local dataset: 3 files tagged Lethal_Digi, 1 composer (Lead) — data/composers/lead.json (full census, all 3 files checked)",
    "data/composers/lead.json (profile country Netherlands, csdb id 2666)"
  ]
}
```

## Overview

Lethal_Digi is a raw Player-ID tag attributed to **Lead** (Jeroen
Groenendijk), a Dutch scener (House Designs, ex-Sense Designs). It appears
in only **3 files, all by Lead** (full census confirmed via CSDb) — a
personal, in-house routine, not a distributed tool. No SIDId entry
exists, but this is one of the strongest-corroborated tags in this batch:
CSDb credits Lead with an explicit "Code, Graphics, Sampling" role on the
group Lethal's 1992 "C64 One-File Demo" releases "No Women Allowed",
"Paradise", and "Poing" — an exact title match to all 3 locally-tagged
files. Lead himself confirms on CSDb (group page comment) that he named
his own digi work "Lethal" specifically to distinguish it from his main
group House Designs's output — settling both the naming and the
"personal vs. published tool" question with direct author testimony,
not inference.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) unusually strong evidence —
CSDb's Sampling credit matches the exact 3 tagged files by title, not just
a plausible author link; (2) CSDb group id 6829 ("Lethal") is now
confirmed, along with Lead's own comment explaining he coined the
"Lethal" label for his personal digi work specifically to keep it
separate from House Designs — this resolves the prior pass's open TODO
and confirms `platform` as a personal/in-house routine, not a released
editor.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb scener page for
Lead, and the local composer aggregation.
