# Modulator

```json
{
  "id": "modulator",
  "name": "Modulator",
  "aliases": ["Modulator"],
  "authors": ["Thomas Krätzig"],
  "released": "1985 (64'er / Markt & Technik magazine)",
  "status": "stub",
  "platform": "Native C64 tool, apparently published as a type-in listing in the German computer magazine 64'er (Markt & Technik) — consistent with adoption by more than one German composer rather than a purely private routine.",
  "csdb_release": 129802,

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
    "SIDId gives a full entry for this tag: name 'Modulator', author Thomas Krätzig, released '1985 64'er/Markt & Technik', reference to CSDb release 129802 (data/sidid.json byTag['Modulator']).",
    "CSDb release 129802 ('Modulator [german]') confirms: code by Thomas Krätzig, released by Krätzig himself (no group), dated 1985, categorized as a 'C64 Tool' — checked directly via CSDb (https://csdb.dk/release/?id=129802). No further functional description is given on the release page itself.",
    "AUTHORSHIP VS USAGE SPLIT, RESOLVED WITH A SOURCED LINEAGE: SIDId credits only Thomas Krätzig as author, but the local dataset shows the tag used by TWO German composers — Bernhard Arenz (3 files: 'Der Ring der Nibelungen', 'Hotel', 'Sereamis', all csdb_id 52182/52185/52183) and Thomas Kraetzig himself (1 file: 'Quiwi', csdb_id 49671) — a full census of every file tagged 'Modulator' in data/composers/*.json (confirmed via direct grep, 4 files, 2 composers, matches SIDId's own tag). C64-Wiki's 'Nibelungen' game page states directly (German, translated): \"Bernhard Arenz's arrangements utilized a music program by Ralf Junge, which was based on the 'Modulator' from the 64'er-Musikkurs 1985 (created by Thomas Krätzig).\" So Arenz's 3 tunes were not made with Krätzig's original tool at all, but with a DERIVATIVE editor coded by Ralf Junge for the game 'Nibelungen' (Ariolasoft, 1985) — apparently close enough in output/fingerprint that SIDId/the player-ID signature still classifies it under the 'Modulator' tag. Krätzig's own 'Quiwi' (Kingsoft, 1985) is the one file plausibly using the original tool directly (self-usage, no group). Source: https://www.c64-wiki.de/wiki/Nibelungen (fetched 2026-08-01).",
    "Ralf Junge's derivative editor has no separate Player-ID tag/card of its own in this project's data — it is not asserted as an `edges` relationship here because there is no sibling card id to point at, only a prose citation. A future card for 'Ralf Junge's Modulator-derived editor', if the fingerprint is ever split out by SIDId, should carry a `derives_from: [\"modulator\"]` edge citing the same c64-wiki quote.",
    "PSID headers (metadata only, not a disassembly fact) for all 3 Ariolasoft/Nibelungen files show PlayAddr == LoadAddr (Der Ring der Nibelungen: load/play $8000, init $9E61; Hotel: load/play $7000, init $862E; Sereamis: load/play $4200, init $4D7C) — consistent with an IRQ-driven or self-installing player where the nominal 'play' vector in the header is not a directly-callable routine. Krätzig's own 'Quiwi' (Kingsoft) has no PlayAddr recorded by the CSDb SID webservice call, load $C002 init $C854. Recorded here as a lead for a future disassembly pass, not written into Tier 3 `entry`/`memory` per the extraction template's rule. Source: csdb.dk sid webservice, type=sid ids 52182/52185/52183/49671.",
    "No public disassembly or source found for the original Modulator tool itself. All Tier 3 runtime internals unknown — 1985 vintage, predates most documented C64 music-tool source releases."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, year, CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Modulator'] = {\"name\":\"Modulator\",\"author\":\"Thomas Krätzig\",\"released\":\"1985 64'er/Markt & Technik\",\"reference\":\"https://csdb.dk/release/?id=129802\"}",
    "CSDb release 129802, 'Modulator [german]' (Thomas Krätzig, 1985, C64 Tool, released by Krätzig himself/no group, download link to Modulator.d64 present): https://csdb.dk/release/?id=129802 (queried live via scripts/lib/csdb-client.js webservice, type=release id=129802)",
    "CSDb scener/handle 26412 'Thomas Krätzig' (AKA 'Thomas Kraetzig'), FreelanceFunctions Coder+Musician, no group membership listed — confirms composer 'Thomas Kraetzig' in data/composers/thomas-kraetzig.json is the same person as the tool's credited author (self-usage on 'Quiwi'): queried via scripts/lib/csdb-client.js, type=scener id=26412",
    "C64-Wiki 'Nibelungen' game page, credits section, direct quote on Ralf Junge's derivative editor: https://www.c64-wiki.de/wiki/Nibelungen (fetched 2026-08-01)",
    "CSDb sid webservice entries for all 4 census files (Released dates, load/init/play addresses): type=sid ids 52182, 52185, 52183, 49671 via scripts/lib/csdb-client.js",
    "data/composers/bernhard-arenz.json, data/composers/thomas-kraetzig.json (both profile focus1 'PRO', country Germany)",
    "Local dataset: full census, 4 files tagged Modulator across 2 composers — Bernhard Arenz (3), Thomas Kraetzig (1) — see data/composers/*.json aggregation (grep -l \\\"player\\\": *\\\"Modulator\\\" across data/composers/*.json with explicit glob)"
  ]
}
```

## Overview

Modulator is a native C64 tool by **Thomas Krätzig**, published in 1985
via the German computer magazine **64'er** (Markt & Technik) — CSDb release
129802 confirms code, author, and year, and lists no group (Krätzig
released it himself). Unlike most tags in this family-of-small-tags batch,
it shows genuine cross-composer adoption: a full census of every file
tagged `Modulator` in the local dataset finds exactly 4 files split
between Bernhard Arenz (3: "Der Ring der Nibelungen", "Hotel", "Sereamis")
and Krätzig himself (1: "Quiwi"). The mechanism is now sourced rather than
guessed: C64-Wiki's page for the 1985 Ariolasoft game "Nibelungen" states
that Arenz's arrangements used a music program by **Ralf Junge**,
explicitly built *on top of* Modulator from the 64'er music course — so
Arenz's 3 files were made with a derivative editor, not Krätzig's tool
directly, and the derivative is apparently close enough that the
Player-ID signature still resolves it as "Modulator." Krätzig's own
"Quiwi" (Kingsoft, 1985) is the one file plausibly made with the original
tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives a full, well-sourced
identity (name/author/year/CSDb reference) — unusually complete for this
batch; (2) the 2-composer usage split is now explained by a directly-quoted
source rather than a guess — 3 of the 4 files actually run a derivative
editor by Ralf Junge, not Krätzig's original Modulator, even though the
Player-ID signature still tags them "Modulator"; (3) no separate card/id
exists for Ralf Junge's editor, so no `edges` entry was added — this is a
prose-only lineage note, not a graph edge; (4) PSID headers across the 3
Ariolasoft-game files show `PlayAddr == LoadAddr`, a possible IRQ-driven
pattern worth flagging for a future disassembly pass (recorded as a lead,
not written into Tier 3).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. A 1985 vintage magazine tool is a plausible future
disassembly candidate given the CSDb release exists, a specific
self-usage file (Krätzig's own "Quiwi") is identifiable as likely using
the original tool, and the PSID `PlayAddr == LoadAddr` pattern on the
Nibelungen-derivative files is a lead worth checking against the
original.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb release lookup.
`status: stub` — no runtime fact has been confirmed by disassembly or
trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the CSDb release page, and the
local composer profiles/aggregation.
