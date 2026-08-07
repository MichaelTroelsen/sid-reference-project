# XPMCK (Cross Platform Music Compiler Kit)

```json
{
  "id": "xpmck",
  "name": "Cross Platform Music Compiler Kit",
  "aliases": ["XPMCK"],
  "authors": ["Mic (Michael Ollanketo)"],
  "released": "2008 is confirmed, not just an SIDId figure: PDRoms news dated 25 Aug 2008 documents an XPMCK release whose changelog reads 'Added playback code for the Commodore 64' and that the compiler 'outputs header information to be used when creating .gbs/.sid files (C64, GBC)' — i.e. C64/SID support existed by Aug 2008. The CSDb release cross-referenced by SIDId's reference link ('Xpmck V32', csdb release 135624) is a later archived version dated 24 Jun 2011 — same ongoing project, not a contradiction. No earlier XPMCK release is archived on CSDb itself (checked: CSDb Handle 27431 'Mic' has exactly one credited release, 135624).",
  "status": "stub",
  "platform": "Genuinely cross-platform: XPMCK ('Cross Platform Music Compiler Kit') is an MML-to-assembly compiler (XPMC, written in the Euphoria scripting language) with per-target playback libraries for 11 systems including the C64 — confirmed directly by its own manual ('-c64  Output data suitable for the Commodore 64') and by its public source tree (github.com/mic-/xpmck, a `lib/c64` directory alongside at8/gbc/etc). Not a native C64-only tool. WLA-DX (6502/Z80 cross-assembler) is required to build the C64 playback library from the compiler's assembly output. The manual explicitly says XPMCK supports 'P(P)MCK commands' — i.e. it is built as an extension of the NES/Famicom-scene PPMCK MML-compiler lineage, confirming (not just inferring) the naming kinship noted below.",
  "csdb_release": 135624,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The 2008/2011 date spread is resolved, not just plausibly reconciled: PDRoms news dated 25 Aug 2008 (https://pdroms.de/nintendo-gameboy-gb-gameboycolor-gbc/xpmck-25-08-2008-gbc-misc) documents a contemporaneous XPMCK release whose changelog explicitly reads 'Added playback code for the Commodore 64', confirming C64/SID support existed under active development in 2008, matching SIDId's 'released: 2008'. CSDb release 135624 ('Xpmck V32', 24 Jun 2011) is simply the specific later version CSDb happens to have archived; querying CSDb's webservice for every release credited to Handle 27431 ('Mic') returns exactly one result (135624) — no earlier XPMCK release is archived on CSDb itself, so 135624 remains the only CSDb-citable release id even though it postdates the tool's actual 2008 debut.",
    "CSDb release 135624 ('Xpmck V32') verified via `getRelease()` (scripts/lib/csdb-client.js): Type field is 'Other Platform C64 Tool', not a crack — this IS the genuine tool release, no crack-vs-original trap here. It bundles two example SIDs, 'Paperboy' (released '2011 Mic') and 'We Wish You a Merry Xmas' (released '2010 Mic'), links to jiggawatt.org, and records 316+67 downloads across two mirrors.",
    "The 'MCK' naming kinship is now a sourced fact, not an inference: XPMCK's own manual (mirrored at github.com/bazz1tv/XPMCK/blob/master/doc/manual.html, a fork of the jiggawatt.org original) has a section literally titled 'P(P)MCK commands supported in XPMCK' and recommends NES-MML-compiler guides (nullsleep.com/treasure/mck_guide, a geocities MCKC guide) for MML syntax — i.e. XPMCK is a direct, self-described extension of the PPMCK/MCK family of NES/Famicom MML compilers, ported/extended to 11 platforms including the C64. PPMCK itself has no card in this project (it's a NES tool, not a SID player), so no `edges` entry was added — the lineage is to a tool outside this project's C64/SID scope, not to a sibling player card.",
    "Source is public but not under any stated open-source license: github.com/mic-/xpmck (created 2017-05-09, 'Initial commit, from xpmck-32.zip' — a later mirror of the V32 archive, not the original 2008 source) has `\"license\": null` via the GitHub API and no LICENSE file in its tree. A community fork, github.com/bazz1tv/XPMCK, exists with bugfixes/features and its own README describing itself as 'Fork of http://jiggawatt.org/muzak/xpmck/ Release 32' — also carries no license file. Treat as source-available freeware, not confirmed open-source.",
    "The compiler itself (XPMC) is written in the Euphoria interpreted language (openeuphoria.org / rapideuphoria.com), not 6502 assembly or C — only the per-target playback libraries (including `lib/c64`) are presumably assembly, built via WLA-DX. This means the compiler's own source is not a disassembly lead for the C64 runtime driver; only `lib/c64` would be.",
    "Only 2 locally-tagged files, both by the same composer, 'Djmaximum' (data/composers/djmaximum.json, csdb_id 64795 and 64796) — census re-confirmed round 32 via `Grep` with an explicit `*.json` glob against data/composers/, no other file in the local dataset carries the XPMCK tag. Single-composer concentration in THIS dataset, though the tool itself is plausibly used more widely across the other 10 platforms it targets, outside this project's C64/HVSC scope."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['XPMCK'])",
    "CSDb release 'Xpmck V32' (Mic, 24 Jun 2011, Type 'Other Platform C64 Tool'), verified via csdb-client.js getRelease(135624): https://csdb.dk/release/?id=135624",
    "CSDb scener query confirming no earlier release credited to Handle 27431 'Mic', verified via csdb-client.js getScener(27431): https://csdb.dk/scener/?id=27431",
    "PDRoms news, XPMCK 25-08-2008 release, confirms C64 playback code added by Aug 2008: https://pdroms.de/nintendo-gameboy-gb-gameboycolor-gbc/xpmck-25-08-2008-gbc-misc",
    "XPMCK manual (mirrors jiggawatt.org original; 'Mic, 2011'; PPMCK-lineage statement, C64 target section): https://github.com/bazz1tv/XPMCK/blob/master/doc/manual.html",
    "Public source, no stated license, GitHub API license:null, created 2017 from xpmck-32.zip: https://github.com/mic-/xpmck",
    "Community fork with bugfixes/features, own README: https://github.com/bazz1tv/XPMCK",
    "Author's own site (jiggawatt.org/muzak/xpmck/) confirmed via search results but could not be fetched directly — its TLS certificate has expired as of this research pass; content cross-checked instead via the GitHub mirror above",
    "Local dataset: 2 files tagged XPMCK, 1 composer (Djmaximum) — data/composers/*.json full-glob census"
  ]
}
```

## Overview

`XPMCK` is SIDId's tag for the **Cross Platform Music Compiler Kit**, an MML
(Music Macro Language) compiler by "Mic" (Michael Ollanketo), targeting 11
different 8/16-bit systems including the C64/SID, with a public source
mirror at github.com/mic-/xpmck and a community fork at
github.com/bazz1tv/XPMCK. It is genuinely cross-platform, not a naming
coincidence: the compiler itself (XPMC) is written in Euphoria, and each
target — including the C64 — gets its own playback library built with
WLA-DX. Its "MCK" naming kinship with the NES/Famicom-scene PPMCK compiler
family is confirmed directly by the manual's own "P(P)MCK commands
supported in XPMCK" section, not just an inference from the name. SIDId's
"released: 2008" is independently corroborated by a PDRoms news post dated
25 Aug 2008 documenting C64 playback code being added that year; the CSDb
release cross-referenced by SIDId ("Xpmck V32", id 135624) is simply a later
archived version (2011) — confirmed as a genuine "Other Platform C64 Tool"
release, not a crack, and the only XPMCK release CSDb has on file for this
author. Only 2 locally-tagged files, both by the same composer (Djmaximum),
which is expected given the tool's user base plausibly lives mostly on the
other 10 platforms it targets, outside this project's C64/HVSC scope.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the 2008-vs-2011 date spread is
resolved (2008 confirmed independently via PDRoms, 2011 is just CSDb's only
archived version) rather than merely plausibly reconciled; (2) the CSDb
release was verified as a genuine tool release (Type "Other Platform C64
Tool"), not a crack; (3) the "MCK"/PPMCK naming kinship is now a sourced
fact, quoted directly from the manual, not an inference — but no `edges`
entry was added since PPMCK has no card in this project (it's a NES tool,
outside C64/SID scope); (4) source is public on GitHub but carries no
license file on either the original mirror or the community fork — treat as
freeware/source-available, not confirmed open-source; (5) single-composer
concentration locally, re-confirmed by a full-glob census, though the
tool's real user base likely extends well beyond this project's C64/HVSC
scope.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields remain TODO, per this task's scope (Tier 1/2 only). A future
disassembly pass has a concrete lead: the public source tree at
github.com/mic-/xpmck contains a `lib/c64` directory (playback library
source, presumably 6502 assembly, built via WLA-DX) — this was not opened
or read during this research pass, only its existence confirmed via the
GitHub contents API. That would be the natural starting point for a Tier 3
pass rather than a coldstart disassembly of a compiled .sid.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, the
CSDb release/scener webservice (via `scripts/lib/csdb-client.js`), PDRoms,
and the GitHub-mirrored manual/source tree. `status: stub` (identity +
provenance only, no runtime facts asserted).

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 135624 + scener
27431, PDRoms's 2008 news post, the XPMCK manual, both GitHub source trees,
and the local composer aggregation.
