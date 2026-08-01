# Catalyst_Coders

```json
{
  "id": "catalyst-coders",
  "name": "Catalyst_Coders",
  "aliases": ["Catalyst_Coders"],
  "authors": ["Russell Lieblich"],
  "released": "1987 (C64 port of Rampage; no separate driver/tool release date is documented). Source: CSDb SID entry id 17392 (webservice type=sid), field Released = '1987 Activision/Bally Midway'; corroborated by the earliest known crack of the port, 'Rampage +1F' by Abyss, CSDb release id 60629, dated 1987-11-28.",
  "status": "stub",
  "platform": "TODO: possibly a company-specific in-house driver used by Catalyst Coders Ltd (a Scottish, Glasgow-based game studio, active 1984-1990, per C64-Wiki) for this port — NOT confirmed to be the same code as this same composer's OTHER, already-carded 'own sound driver' tag from his Activision/Gamestar era (see quirks). No platform statement found in any source checked.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). The one locally-tagged file is 'Rampage', composer Russell Lieblich. C64-Wiki confirms Catalyst Coders Ltd (a Scottish game developer, Glasgow, active 1984-1990) ported Rampage (with Software Studios) the year after Midway's 1986 arcade original, and separately confirms Russell Lieblich was among the company's staff.",
    "SEPARATE, ALREADY-CARDED TAG BY THE SAME COMPOSER: this project already has 'russell-lieblich-driver.md' (aliases ['Russell_Lieblich']) — explicitly described THERE as 'Lieblich's own sound driver ... used across ~10 different Activision and Activision's Gamestar sports sub-label titles', with a first-party VGMPF quote confirming self-authorship for that specific driver. Rampage/Catalyst_Coders is NOT among that card's 11 tagged files or its aliases — this is a genuinely different Player-ID signature. Since Catalyst Coders was a different company entirely from Activision/Gamestar, it is plausible (not confirmed) that this represents a SEPARATE, company-specific in-house driver rather than the same Activision-era code reused — no source states either way, so no `edges` relationship is recorded between the two cards.",
    "Only 1 locally-tagged file ('Rampage') — census of the full data/composers corpus confirms this: grepping every composer JSON for the literal player tag 'Catalyst_Coders' returns exactly one hit (russell-lieblich.json). Too small a sample for concentration analysis.",
    "csdb_release / no CSDb group page: CSDb's site search (https://csdb.dk/search/?search=Catalyst+Coders) returns zero results for 'Catalyst Coders' as a group/company/scener — confirms there is no CSDb group entry to attach as csdb_release. CSDb also has no 'C64 Game' type release for Rampage credited to Catalyst Coders — the only Rampage entries on CSDb are later cracks (by unrelated cracking groups, e.g. Abyss) and a 2010s-era 'Rampage [remake]' by Archons 1n2, plus the HVSC SID-rip 'C64 Music' entry (id 223571). None of these represent a driver/tool release, so csdb_release stays null.",
    "PSID header metadata (not a disassembly fact, kept here per EXTRACTION-TEMPLATE.md guidance): CSDb's SID entry for Rampage (id 17392) records LoadAddr=4608 ($1200), InitAddr=4608 ($1200), PlayAddr=4611 ($1203), NTSC clock. This is header metadata only — Tier 3 memory/entry fields remain TODO until actually disassembled."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Catalyst_Coders': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "C64-Wiki (German) — Catalyst Coders company profile (confirms Rampage port, Russell Lieblich as staff, company active 1984-1990, other titles Gyroscope/Jail Break/Samantha Fox Strip Poker/Flying Shark/Sky Shark/Super Sprint/Championship Sprint, later absorbed into Software Studios/Electric Dreams): https://www.c64-wiki.de/wiki/Catalyst_Coders",
    "C64-Wiki (German) — Rampage (Europa): https://www.c64-wiki.de/wiki/Rampage_(Europa)",
    "CSDb webservice, type=sid, id=17392 (Rampage.sid) — 'Released: 1987 Activision/Bally Midway', PSID header fields, and UsedIn release list: https://csdb.dk/webservice/?type=sid&id=17392",
    "CSDb webservice, type=release, id=60629 ('Rampage +1F' crack by Abyss, dated 1987-11-28, corroborating the 1987 release year): https://csdb.dk/webservice/?type=release&id=60629",
    "CSDb site search for 'Catalyst Coders' — zero results, confirming no group/company page exists: https://csdb.dk/search/?search=Catalyst+Coders",
    "Sibling card, same composer, different (already-carded) tag: knowledge/players/russell-lieblich-driver.md",
    "Local dataset: 1 file tagged Catalyst_Coders ('Rampage'), composer Russell Lieblich, censused across all of data/composers/*.json — data/composers/russell-lieblich.json"
  ]
}
```

## Overview

`Catalyst_Coders` is a Player-ID-only tag (no SIDId entry) for a single
locally-tagged file, "Rampage", composed by **Russell Lieblich** for a C64
port made by Catalyst Coders Ltd (a Scottish, Glasgow-based game studio,
1984-1990) — confirmed via C64-Wiki as both the porting company and
Lieblich's employer on this title, and released in **1987** by
Activision/Bally Midway per CSDb's own SID entry (id 17392), corroborated by
the earliest crack of the port dating 1987-11-28. This is a DIFFERENT
Player-ID signature from Lieblich's other, already-carded "own sound driver"
tag (`russell-lieblich-driver.md`, from his Activision/Gamestar era) — since
Catalyst Coders was an entirely different company, this plausibly
represents a separate in-house driver, but no source confirms or denies
that, so no `edges` relationship is recorded between the two cards.
`platform` and `csdb_release` remain unresolved: CSDb has no group/company
page for "Catalyst Coders" (site search returns zero results) and no
game-type release crediting them, so there is nothing to cite either fact
against.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry; (2) confirmed via
C64-Wiki that Catalyst Coders ported Rampage and employed Lieblich; (3) this
is explicitly a SEPARATE tag from the same composer's other already-carded
driver, kept un-edged per the no-evidence rule; (4) only 1 local file,
confirmed by a full census of `data/composers/*.json`; (5) `released` is now
sourced (1987, CSDb SID entry + corroborating crack date); (6) `platform`
and `csdb_release` stay TODO/null because CSDb has no Catalyst Coders
group/company page at all (verified negative search result).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. A future disassembly of a `Catalyst_Coders`-tagged file
could be directly compared against `russell-lieblich-driver.md`'s traced
sample (Aliens: load $2437/init $3100/play $312e) to test whether the two
tags really are the same code.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), a full census of
`data/composers/*.json`, two C64-Wiki pages, CSDb's `type=sid`/`type=release`
webservice endpoints (release-year confirmation), a CSDb site-search negative
result (no group/company page), and cross-reference against the sibling card.
`status: stub`.

## Sources

See the `sources` array — SIDId absence check, C64-Wiki (2 pages), the
sibling russell-lieblich-driver.md card, and the local composer aggregation.
