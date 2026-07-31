# Sorex_Digi

```json
{
  "id": "sorex-digi",
  "name": "Sorex_Digi",
  "aliases": ["Sorex_Digi"],
  "authors": ["Geert Verschueren (Sorex)"],
  "released": "TODO: no exact year — CSDb's own webservice record for all 4 tagged tunes gives Released as the literal, unresolved '199? Warriors of the Wasteland' (not a real date); one tune ('Give It Up') is UsedIn a 1993-dated release, which is corroborative but is the compilation's date, not the tune's own",
  "status": "stub",
  "platform": "TODO: native C64, in-house digi/sample routine — CSDb's scener record for Sorex lists his freelance/group role as Coder (not Musician) across Nostalgia, Raiders of the Lost Empire, and Warriors of the Wasteland, consistent with a routine he coded for his own tracks rather than a distributed editor; no dedicated CSDb tool/release entry exists under this name, and a direct CSDb site search plus a DuckDuckGo web search for the literal string 'Sorex_Digi' both return zero results outside this project's own data",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'Geert Verschueren (Sorex)' — no NAME, reference, or comment. The absence of a NAME field is itself a signal this was never packaged as a titled, released tool.",
    "Real corroborating evidence for the 'digi' label: CSDb's scener page for Sorex lists EXTENSIVE 'Sampling' credits, primarily on Warriors of the Wasteland releases (e.g. 'WOW Story 3' 1993, 'Kcor Leurc' 1993, 'Tri-Demo' 1993) — a genuine, repeated sampling role, not a one-off. This is stronger evidence than most tags in this batch, though these particular CSDb-credited releases are not the same titles as the 4 locally-tagged SID files (see next point), so the link is via consistent role/era, not an exact file match.",
    "4 files, 1 composer: Sorex himself — 'Give It Up', \"I'm Not a Number\", 'Out of Space', 'Utter (hardcore power mix)'. A personal routine by usage pattern.",
    "Sorex is a Belgian scener, groups Nostalgia and Warriors of the Wasteland (ex-Raiders of the Lost Empire); CSDb also lists roles Coder/Cracker/Diskmag Editor/NTSC-Fixer, consistent with an in-house coder-composer profile rather than a tool vendor.",
    "Census of all 4 Sorex_Digi-tagged files confirmed via CSDb webservice (type=sid, ids 44331/44332/44335/44338): each carries the identical, unresolved 'Released: 199? Warriors of the Wasteland' field — CSDb itself never resolved a specific year for these tunes, so no better 'released' value than TODO exists. PSID LoadAddr differs per file ($0800/$0880/$0859/$0E00) — header metadata only, not a Tier 3 fact, but consistent with each track carrying its own freshly-assembled copy of the routine rather than a shared fixed-address driver.",
    "Confirmed via grep of all data/composers/*.json that Sorex_Digi is used by exactly 1 composer (Sorex) across exactly 4 files — no other composer's cache references this tag, reinforcing the personal-routine reading.",
    "A direct CSDb site search for 'Sorex_Digi' 503'd repeatedly (CSDb's HTML frontend, not the XML webservice); a DuckDuckGo web search for the literal string returned zero results anywhere on the public web, further supporting that this was never a named, released tool."
  ],
  "sources": [
    "data/sidid.json byTag: Sorex_Digi — author 'Geert Verschueren (Sorex)', no name/reference/comment",
    "CSDb scener Sorex/Nostalgia/Warriors of the Wasteland (Belgium; extensive 'Sampling' credits on WoW releases): https://csdb.dk/scener/?id=952 (also confirmed via csdb.dk/webservice/?type=scener&id=952 — FreelanceFunctions: Coder/Cracker/Diskmag Editor/NTSC-Fixer)",
    "CSDb webservice type=sid records for all 4 tagged files (ids 44331, 44332, 44335, 44338): each 'Released' field reads literally '199? Warriors of the Wasteland' — https://csdb.dk/sid/?id=44331 etc.",
    "Local dataset: 4 files tagged Sorex_Digi, 1 composer (Sorex) — data/composers/sorex.json; confirmed by `grep -rl Sorex_Digi data/composers` returning only sorex.json",
    "data/composers/sorex.json (profile country Belgium, csdb id 952)",
    "DuckDuckGo search for literal string 'Sorex_Digi' (https://html.duckduckgo.com/html/?q=%22Sorex_Digi%22): zero results found"
  ]
}
```

## Overview

Sorex_Digi is the SIDId tag for a digi/sample-playback routine attributed
to **Geert Verschueren**, handle **Sorex**, a Belgian scener (groups
Nostalgia, Warriors of the Wasteland). SIDId's entry carries only an
`AUTHOR` line, no title/reference/comment. It appears in only **4 files,
all by Sorex himself**. Unlike many sibling tags in this batch, there is
genuine corroboration for the "digi" label: CSDb's scener page credits
Sorex with repeated, explicit "Sampling" roles across multiple Warriors of
the Wasteland productions — though those specific credited releases are
not the same titles as the 4 locally-tagged files, so the evidence is
role/era-level, not a file-for-file match.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but not a
titled product — consistent with a personal/in-house routine; (2) CSDb's
"Sampling" credits are genuine corroboration of the sample-playback claim,
stronger than a bare filename regex, but not tied to the exact 4 locally
tagged tracks; (3) a full census (all 4 files, via CSDb's XML webservice)
confirms none carries a resolvable release year — CSDb's own record is the
literal placeholder `199?`, so `released` stays TODO honestly rather than
guessing from a `UsedIn` compilation date; (4) Sorex's CSDb scener record
lists his role as Coder (not Musician) in all three of his groups, which is
the best available evidence for `platform` being an in-house routine rather
than a distributed tool — no CSDb tool/release entry and no web presence for
the string "Sorex_Digi" exists outside this project.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Sorex, and
the local composer aggregation.
