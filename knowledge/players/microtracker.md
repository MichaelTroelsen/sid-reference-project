# Microtracker

```json
{
  "id": "microtracker",
  "name": "Microtracker",
  "aliases": ["Microtracker"],
  "authors": ["Matthias Hartung (The Syndrom)"],
  "released": "TODO: no single original-release year confirmed. Census of all 3 tagged files' own CSDb `Released` fields: Cyclemania=1997 (csdb.dk/sid/?id=28354), Micromania='199?' (imprecise, csdb.dk/sid/?id=28434), Size Matters=2022 (csdb.dk/sid/?id=60442) — a 25-year span across 3 files, so no year can be inferred as the player's creation date. The player's source code was separately released on CSDb in 2007 (csdb.dk/release/?id=48523), but the author's own release note says this is a disassembly of a *lost* original ('I disassembled one of my tunes, as I lost the original sourcecode'), so 2007 is not the original release year either.",
  "status": "stub",
  "platform": "Native C64 tool: a self-coded 6502/assembly SID player, not a cross-platform editor. Author (Matthias Hartung, CSDb Coder/Musician handle 'The Syndrom') states in the CSDb source release (id 48523, 2007): 'the player was done to fit a special demopart made by crossbow, where only 6 rasterlines were left, so it's a little limited' — i.e. a purpose-built, minimal demo-scene player rather than a general-purpose tracker product. Source is publicly available (Kick Assembler format, redisassembled by the author himself after losing the original) at csdb.dk/release/?id=48523, released informally ('feel free to use it') with no formal license stated.",
  "csdb_release": 48523,

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
    "The Codebase64 reference cited by SIDId (https://codebase64.org/doku.php?id=base:microtracker_v1.0) is DEAD as of this pass (2026-07-31): codebase64.org now 301-redirects to an unrelated domain (huefestival.com) that 404s on the target path. The Wayback Machine was not reachable from this environment to check for an archived copy. The reference is preserved in `sources` for record-keeping, but should not be treated as a live source going forward.",
    "A separate, LIVE, and much more informative source was found by CSDb search that SIDId's citation did not point to: CSDb release 48523, 'Microtracker (player) Sourcecode' (released 11 May 2007 by The Syndrom, CSDb handle 1028 — the same composer/scener as all 3 tagged files, confirmed by matching CSDb Handle ID, so this is NOT a name collision with an unrelated 'Microtracker' product on another platform). It contains the author's own release note (quoted in `platform`) plus a Kick Assembler `.asm` source file (http://csdb.dk/getinternalfile.php/39778/microtracker.asm, 905 downloads) and a user comment noting a third-party ACME-format conversion also exists (http://www.akaydin.com/misc_files/microtracker.zip, link unverified/unfetched this pass). Per this card's explicit scope (Tier 1/2 gap-fill only, no Tier 3 touch), the .asm was NOT read for memory-map/format content in this pass — that remains the obvious next step and would very likely move this card to `in-progress`.",
    "Author: Matthias Hartung, handle 'The Syndrom' / 'Syndrom The', Germany, CSDb scener/Handle ID 1028 — CSDb lists his freelance functions as Coder/Graphician/Musician/Organizer/Swapper (source: csdb.dk webservice type=scener id=1028), corroborating that he plausibly coded his own player rather than using a third party's.",
    "Census of all 3 tagged files' PSID headers (via CSDb webservice type=sid): all three share the identical LoadAddr=$1000 (4096), InitAddr=$1000 (4096), PlayAddr=$1003 (4099) — Cyclemania (csdb.dk/sid/?id=28354), Micromania (csdb.dk/sid/?id=28434), Size Matters (csdb.dk/sid/?id=60442). This is PSID header metadata, not a disassembly fact — recorded here per this project's own rule that header values must not be written into Tier 3 `entry`/`memory` fields, but it is a striking signal (fixed load/init/play across a 25-year usage span) for whoever does the Tier 3 pass next.",
    "Small local footprint: 3 files, all by Matthias Hartung himself (Cyclemania 1997, Micromania '199?', Size Matters 2022) — despite being a genuinely documented/named tool with public source, it does not appear to have been adopted by other composers in this dataset, and its own author's usage spans 25 years on what looks like the same fixed load/init/play layout."
  ],
  "sources": [
    "SIDId sidid.nfo (author + Codebase64 reference URL, now dead — see quirks): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Codebase64 article, cited by SIDId but DEAD as of 2026-07-31 (301s to an unrelated domain that 404s): https://codebase64.org/doku.php?id=base:microtracker_v1.0",
    "CSDb release 48523, 'Microtracker (player) Sourcecode' (2007-05-11, The Syndrom) — author's own release note + source download link: https://csdb.dk/release/?id=48523",
    "CSDb scener Matthias Hartung / Syndrom The (Germany), Handle ID 1028: https://csdb.dk/scener/?id=1028",
    "CSDb SID entries for all 3 tagged files (Released dates + PSID header fields, fetched via CSDb webservice type=sid): https://csdb.dk/sid/?id=28354 (Cyclemania), https://csdb.dk/sid/?id=28434 (Micromania), https://csdb.dk/sid/?id=60442 (Size Matters)",
    "Local dataset: 3 files tagged Microtracker, all by Syndrom The — see data/composers/syndrom-the.json"
  ]
}
```

## Overview

Microtracker is a genuinely named, self-coded C64 SID player by **Matthias
Hartung** ("The Syndrom" / "Syndrom The"), Germany — a CSDb scener credited as
Coder/Graphician/Musician (Handle ID 1028). SIDId's cited Codebase64 article
is now dead (see quirks), but a 2026-07-31 CSDb search surfaced a better, live
source: CSDb release 48523, "Microtracker (player) Sourcecode" (2007-05-11),
which carries the author's own description of the player as a purpose-built,
minimal routine made to fit a demopart with only 6 rasterlines of budget, plus
a public Kick Assembler `.asm` download. Local usage census of all 3 tagged
files (Cyclemania, Micromania, Size Matters) confirms all are by Hartung
himself, spanning 1997-2022, all sharing identical PSID load/init/play
addresses ($1000/$1000/$1003). No original release year for the player itself
could be established — see `released` for the full reasoning. Runtime facts
remain TODO; the .asm source was located but not read in this pass (out of
scope — Tier 3 untouched per task instructions).

## Quirks & gotchas

See the `quirks` array. Load-bearing: the SIDId-cited Codebase64 reference is
now dead (domain redirects elsewhere and 404s); the useful live source found
instead is CSDb release 48523, which was NOT read for technical content in
this pass since that would be a Tier 3 (disassembly-adjacent) task outside
this pass's scope. All 3 census'd files share one PSID load/init/play triple
across a 25-year composition span, which is a strong signal for the next Tier
3 pass. Despite public source, adoption in the local dataset is limited to
the author's own tracks.

## Disassembly notes

None done here (out of scope for this pass). The obvious next source is the
`.asm` linked from CSDb release 48523
(http://csdb.dk/getinternalfile.php/39778/microtracker.asm) — a real,
public, author-provided Kick Assembler disassembly, not merely a
name-checked wiki stub. The dead Codebase64 URL cited by SIDId should be
dropped as a research target unless recovered via an archive.

## Verification

Not verified. This pass filled the recorded Tier 1/2 gaps (`released`,
`platform`, `csdb_release`) from a full census of all 3 tagged files' own
CSDb `Released`/PSID-header fields (via `scripts/lib/csdb-client.js`, type=sid)
plus a newly located CSDb release (48523) containing the author's own
description of the player and its public source. `status` intentionally left
at `stub` per task scope — Tier 3 fields were not touched. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (dead Codebase64 citation), CSDb
release 48523 (live, author's own note + source download), CSDb scener page,
CSDb SID entries for all 3 census'd files, and the local composer
aggregation.
