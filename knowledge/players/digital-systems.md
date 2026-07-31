# Digital_Systems

```json
{
  "id": "digital-systems",
  "name": "Digital_Systems",
  "aliases": ["Digital_Systems"],
  "authors": ["P. Eradus (coder — CSDb Handle id 11229, Netherlands; sole 'Coder'-function member of CSDb group 'Digital Systems', id 3117)", "Harlequin / Arjen Bokhoven (musician/composer on all 3 tagged tunes)"],
  "released": "TODO: no formal tool/editor release date exists on CSDb — but full census (all 3 tagged files) of the SID webservice's Released field gives '1991 Silicon Limited' for every one (ids 45750, 38983, 13881: https://csdb.dk/webservice/?type=sid&id=45750, &id=38983, &id=13881). CSDb's Credits data independently confirms coder P. Eradus (group 'Digital Systems', https://csdb.dk/webservice/?type=group&id=3117&depth=3) has exactly 3 'Code'-type credits total, on release ids 21412/64455/64454 — the SAME 3 releases used by the 3 tagged SIDs. Earliest (and only) attested year: 1991. No distinct tool release beyond these tune credits was found.",
  "status": "stub",
  "platform": "Native C64 in-house code routine, not a released standalone editor. CSDb has no 'release'-type entry for a 'Digital Systems' program/tool — only a 'group' entry (id 3117, Netherlands, https://csdb.dk/webservice/?type=group&id=3117) representing coder P. Eradus's one-man credit line; the group record carries no Grouptype classification, no found-date, and no website, consistent with an unpublished in-house coding credit rather than a distributed tool. Attempted Lemon64 (lemon64.com/forum) and Forum64 (forum64.de) searches for 'Digital Systems'/'P. Eradus' via curl; both returned no usable/parseable result content in this session (likely JS-rendered search UI, and the claude-in-chrome browser tool was unavailable) — recorded as inconclusive, not a confirmed negative.",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null; confirmed again this pass with a case-insensitive key scan, no 'digital' match).",
    "CORRECTION (2026-07-31 pass): the prior pass concluded no CSDb credit corroborated a digi/sample role, because it only checked Harlequin's own scener page. A direct CSDb site search for 'Digital Systems' (https://csdb.dk/search/?seinsel=all&search=Digital+Systems) surfaces a Netherlands-based CSDb GROUP by that exact name (id 3117) whose sole listed member is coder 'P. Eradus' (CSDb Handle id 11229). P. Eradus's CSDb Credits list exactly 3 'Code'-type credits, on release ids 21412 ('Are you paranoia too?'), 64455 ('Axel F'), 64454 ('Natural Mystics Song 1') — precisely the 3 releases behind this card's 3 tagged SID files. This is strong direct evidence the 'Digital_Systems' tag names P. Eradus's coding credit (i.e. the actual player/routine author), not a name Harlequin gave his own code.",
    "Full census this pass, all 3 tagged files (csdb.dk/webservice type=sid): Are_You_Paranoia_Too.sid (id 45750, Released '1991 Silicon Limited', UsedIn release 21412), Axel_F.sid (id 38983, Released '1991 Silicon Limited', UsedIn release 64455), Natural_Mystics_Song_1.sid (id 13881, Released '1991 Silicon Limited', UsedIn releases 14859/64454/7364). All three composed/performed by Harlequin (Arjen Bokhoven), all coded per-credit by P. Eradus, all released via Silicon Limited (Netherlands) in 1991.",
    "PSID header fields read during this census (metadata only, NOT disassembly — do not promote to entry/memory): 45750 load=$0FFF init=$0FFF play=$1003; 38983 load=$1000 init=$1000 play=$1003; 13881 load=$C000 init=$CCE0 play=$C003. The load/init addresses differ noticeably between files (two share $0FFF/$1000-ish load, one is at $C000 with a distant init at $CCE0) — worth flagging for whoever eventually disassembles this: it is not obviously one fixed relocatable routine across all 3 files without checking.",
    "3 files, 1 composer: Harlequin himself. A small in-house/two-person (composer + coder) routine by usage pattern, not a widely published tool.",
    "Harlequin is Dutch, current groups Focus and Silicon Limited (since 1989), formerly Audial Arts/The Federation Against Megadeath/Sonical Dreams; CSDb's FreelanceFunctions list for him (fetched via webservice this pass) is BBS Graphician, Co-Organizer, Cover Designer, Diskmag Editor, Fullscreen Graphician, Graphician, Logo Graphician, Musician, Organizer, Phreaker, Swapper — no Coder function, consistent with P. Eradus (not Harlequin) being the actual routine author.",
    "Lemon64 (lemon64.com/forum) and Forum64 (forum64.de) were searched by name per this batch's instructions, via curl against their search endpoints; both returned pages with no parseable search-result markup in this session (likely JS-rendered search UI) and the claude-in-chrome browser tool was not available to load them live. Recorded as an inconclusive attempt, not a confirmed absence of discussion."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Digital_Systems\"",
    "CSDb site search 'Digital Systems' surfacing group id 3117 (Netherlands): https://csdb.dk/search/?seinsel=all&search=Digital+Systems",
    "CSDb group 'Digital Systems' (id 3117), member P. Eradus, 3 Code credits matching this card's 3 tagged releases: https://csdb.dk/webservice/?type=group&id=3117&depth=3",
    "CSDb scener P. Eradus (Handle id 11229, Netherlands, function Coder): https://csdb.dk/webservice/?type=scener&id=11229&depth=2",
    "CSDb scener Harlequin (Handle id 3934, Netherlands; FreelanceFunctions list, no Coder function): https://csdb.dk/webservice/?type=scener&id=3934&depth=4",
    "CSDb SID entries (full census, all 3 tagged files): https://csdb.dk/webservice/?type=sid&id=45750, &id=38983, &id=13881",
    "CSDb release credits confirming Music=Harlequin / Code=P. Eradus: https://csdb.dk/webservice/?type=release&id=21412&depth=2 (id 21412, 'Are you paranoia too?')",
    "Local dataset: 3 files tagged Digital_Systems, 1 composer (Harlequin) — data/composers/harlequin.json",
    "data/composers/harlequin.json (profile country Netherlands, csdb id 3934)"
  ]
}
```

## Overview

Digital_Systems is a raw Player-ID tag appearing in only **3 files, all
composed by Harlequin** (Arjen Bokhoven, Dutch scener — Focus, Silicon
Limited). This pass corrects the prior stub's open question: CSDb credits
show the actual **coder** is **P. Eradus**, a Netherlands-based scener
whose sole CSDb 'Coder' credit line is exactly these 3 releases, grouped
under a CSDb group entry named "Digital Systems" (id 3117). All 3 tagged
files carry the CSDb tune-level `Released` field "1991 Silicon Limited" —
a full census, not a sample. No CSDb release/tool entry, format spec, or
manual for "Digital Systems" as a distributed editor exists; it reads as a
small in-house pairing (Harlequin composing, P. Eradus coding) for three
Silicon Limited productions in 1991, not a published tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the coder is P. Eradus, not
Harlequin — found via a CSDb site search for "Digital Systems" turning up
a group entry, not by trusting the tag name; (2) all 3 tagged files
independently show CSDb Released="1991 Silicon Limited" and each maps to
one of P. Eradus's exactly-3 Code credits, a strong cross-check; (3) PSID
header load/init addresses differ across the 3 files (two near $0FFF-$1000,
one at $C000/$CCE0) — flagged for a future disassembly pass, not resolved
here; (4) Lemon64/Forum64 searches were attempted but were inconclusive
(no browser tool available to render JS search results this session).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found for
"Digital Systems" as a tool.

## Verification

Not verified. This pass added Tier 2 provenance (coder identity, release
year, platform) from CSDb's XML webservice (group/scener/sid/release
endpoints), on top of the prior pass's local-data extraction. `status:
stub` — no runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb group/scener/sid/
release webservice lookups (group 3117 "Digital Systems", scener 11229
"P. Eradus", scener 3934 "Harlequin", sid entries 45750/38983/13881,
release 21412), and the local composer aggregation
(`data/composers/harlequin.json`).
