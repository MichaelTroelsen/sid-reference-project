# Sosperec

```json
{
  "id": "sosperec",
  "name": "Sosperec",
  "aliases": ["Sosperec", "Graffity/Grabowsky"],
  "authors": ["Gabor Torday (Grabowsky) / Trays, Graffity"],
  "released": "1991",
  "status": "stub",
  "platform": "Native C64 tool (\"Sosperec Editor V1.0\") — no evidence of a cross-platform editor; all known artifacts (editor, relocator, depacker) are C64 disk images",
  "csdb_release": 18233,

  "memory": {
    "load_address": "NOT FIXED — the compiled tune binary is relocated per release/disk rather than always loading at one address. PSID-header load addresses read directly from CSDb's per-file SID pages vary widely across the sample checked: $0FFC (Cane \"Accord\"/\"Bahamas\"/\"Bassliner\", all same ADSR 1993 compilation, csdb.dk/sid/?id=5819/5824/5825), $0FFA (Eclipse \"Farewell\", id=11661), $1000 (Peet \"Harvy\", id=23233; also the standalone \"Sosperec Test\" SID, id=13639), $2500 (Trays \"Amöba\", id=29600), $BD00 (DOS \"Blue-eyes\", id=9221, same 1993 ADSR compilation as the Cane files above yet a completely different address). This is consistent with the separately-catalogued \"Sosperec Relocator\" tooling noted elsewhere in this card. No single canonical load address exists to document; no disassembly of the relocated binary itself was performed.",
    "zero_page": "DeepSID players.json lists \"6 bytes ($FA-$FF)\" for Sosperec's zero-page usage — cached from DeepSID's own player database, not independently verified here",
    "layout": "TODO: order list / pattern / table addresses — no disassembly performed"
  },
  "entry": {
    "init": "NOT FIXED — varies with the load-address relocation above (PSID header init addresses read from CSDb): $0FFC (Cane, ids 5819/5824/5825), $0FFA (Eclipse \"Farewell\", id=11661), $1103 (Peet \"Harvy\", id=23233), $2500 (Trays \"Amöba\", id=29600), $BE03 (DOS \"Blue-eyes\", id=9221). No disassembly performed to confirm what init actually does at any of these addresses.",
    "play": "NOT FIXED — same relocation pattern (PSID header play addresses read from CSDb): $1100 (Cane's 3 ADSR-compilation files above and Peet \"Harvy\", id=23233), $0FFD (Eclipse \"Farewell\", id=11661), $BE00 (DOS \"Blue-eyes\", id=9221), $0000 (Trays \"Amöba\", id=29600 — per PSID convention a play address of 0 means play is IRQ-driven rather than directly callable, not that the field is unset). No disassembly performed to confirm play routine structure."
  },
  "speed": "TODO: not documented publicly; a Lemon64 forum post (2007) calls its 1991 playroutine \"quite advanced for its time\" with rastertime comparable to GoatTracker 2 with optimizations disabled, but gives no numeric speed/timing model",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no source or format spec found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "No public source or disassembly was located for this card. players.json's zero-page figure (\"6 bytes, $FA-$FF\") is DeepSID's own cached player-database entry, not something verified here from a disassembly — treat it as a lead, not a confirmed fact, until re-derived independently.",
    "Composer concentration: of 91 files in this dataset tagged \"Sosperec\", 48% (44/91) are by a single composer (Cane), a further 21% (19/91) by DOS, and the remaining ~31% is spread across 11 other composers (Cherubs Sentinel, Chubrock, Eclipse, Fire, JVD, Marcy, Mercury, NecroPolo, Peet, Trays, Vincenzo). This is a moderately concentrated tool — heavily used by its core circle (Grabowsky's own groups Trays/Graffity, and affiliated Samar Productions members) but not a single-composer personal routine.",
    "Follow-on tooling by other groups exists (a \"Sosperec Relocator\" by Trays 1991 and by Chimera 1994, and a \"Sosperec V1.4 Depacker\" by Samar Productions 1998), evidence the format/binary needed relocating or depacking for reuse outside its original disk — but no derivation/lineage claim is made here since none of these state they modify or extend the play routine itself, only that they relocate or unpack existing Sosperec-format tunes.",
    "A dedicated SID entry 'Sosperec Test' (composer Lukasz Baran/Glover, Samar Productions; CSDb lists its release year as unknown, '199?', not a confirmed date) exists on CSDb — evidence of ongoing scene interest/use beyond the original 1991 authors, but not evidence of a format or lineage relationship to another player.",
    "'Graffity/Grabowsky' is a SECOND raw DeepSID tag (8 files) for what is the SAME tool as this card, not a different player. Evidence: all 8 files are by composer Trays (László Imre Földes / handles Trays, Hetye), who ALSO has 5 files tagged plain 'Sosperec' — and the two tags are INTERLEAVED within the same multi-part tune sets in data/composers/trays.json (e.g. 'Justintime part 3/6/8' = Sosperec, 'Justincase note/part 4/part 7' = Graffity/Grabowsky; 'Promethida note' = Sosperec, 'Promethida part 2/5/6/7/9' = Graffity/Grabowsky, all by the same composer in the same series). No separate 'Graffity/Grabowsky' entry exists in data/sidid.json — only 'Sosperec' does — consistent with 'Graffity/Grabowsky' being an unmatched-signature fallback (likely echoing the PSID header's own credit string) on files SidId's Sosperec rule didn't recognize, rather than a distinct tool. Folded into this card's aliases/totals rather than given a separate card.",
    "SPECIAL NOTE ON GROUP OVERLAP: 'Graffity' is also the group behind GMC and DMC (see gmc.md / dmc.md), authored by a DIFFERENT member, Brian (Balázs Farkas). Grabowsky (Gabor Torday) joined Graffity in May 1991 alongside Hetye/Trays, arriving FROM the group Trays (per Grabowsky's CSDb scener page); Sosperec Editor's own CSDb credit line reads 'Grabowsky of Graffity and Trays groups'. This explains the shared 'Graffity' label on two unrelated tools by two different coders — no source, credit, or lineage evidence ties Sosperec's code to GMC/DMC's, so no edge is asserted between them.",
    "SHARED HUNGARIAN-SCENE COMPOSER CIRCLE with [[chubrocker]] — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Chubrock, DOS, Mercury and Peet each used both Sosperec and Chubrocker (László Benke/Dec's mid-1990s Hungarian tracker); all four are Hungarian and neither tool's author. Same-scene composer circle picking up two native-Hungarian trackers — a shared-USERS relationship, NOT shared code (different coders, Gabor Torday/Grabowsky vs László Benke/Dec; neither disassembled). No `shares_routine_with` edge asserted; navigational link only.",
    "RELOCATABLE BINARY, NOT A FIXED LOAD/ENTRY ADDRESS — verified 2026-07-23 by pulling the PSID-header load/init/play addresses (as shown on CSDb's per-file SID pages) for six Sosperec-tagged files spanning five different composers: Cane's \"Accord\"/\"Bahamas\"/\"Bassliner\" (all from the same 1993 ADSR compilation) load at $0FFC with play at $1100; Eclipse's \"Farewell\" loads at $0FFA with play at $0FFD; Peet's \"Harvy\" loads at $1000 with play at $1100; Trays' \"Amöba\" loads at $2500 with play $0000 (IRQ-driven per PSID convention); DOS's \"Blue-eyes\" — from the SAME 1993 ADSR compilation as the Cane files, yet a different composer's tune — loads at $BD00 with play at $BE00. Even within one compilation the address differs by composer, ruling out a single fixed engine address. This matches the standalone \"Sosperec Relocator\" tooling already noted in this card and explains why no fixed memory map can be published for this tool: each release is individually relocated. Source: csdb.dk/sid/?id=5819,5824,5825,11661,23233,29600,9221 (fetched directly, not from any local cache)."
  ],
  "sources": [
    "sidid:Sosperec (author Gabor Torday (Grabowsky); released 1991; reference CSDb release 18233) — data/sidid.json byTag.Sosperec",
    "CSDb release \"Sosperec Editor V1.0\" by Grabowsky (Trays/Graffity), 1991: https://csdb.dk/release/?id=18233",
    "CSDb scener profile \"Grabowsky\" (handle GRB, Hungary, coder, groups 1111 Team → Smartworks → Trays 1989-1991 → Graffity from 1991): https://csdb.dk/scener/?id=9937",
    "Lemon64 forum, \"Hein Holt is a genius\" thread — user nata: \"IMO rastertime from sosperec editor is quite OK. It had quite a really advanced playroutine for it's time (1991)\": https://www.lemon64.com/forum/viewtopic.php?p=949535",
    "CSDb search for related Sosperec tooling: \"Sosperec V1.4 Depacker\" (Samar Productions, 1998, id 34081), \"Sosperec Relocator V1.2\" (Chimera, 1994, id 101770), \"Sosperec Relocator\" (Trays, 1991, id 256703), and \"Sosperec Test\" SID (Lukasz Baran/Glover, Samar Productions, release year unknown per CSDb ('199?'), id 13639)",
    "data/players.json (cached DeepSID player entry: developer \"Grabowsky\", start_year 1991, csdb_id 18233, platform \"Native / C64 emulator\", zero_pages \"6 bytes ($FA-$FF)\"; most other fields blank in the source dump)",
    "Local dataset: 91 files tagged Sosperec + 8 files tagged Graffity/Grabowsky (all composer Trays, folded in here as the same tool) = 99 files across the same 13 composers (aggregated from data/composers/*.json, cross-checked directly against data/composers/trays.json)",
    "No public source code, format spec, or Codebase64/HVSC documentation was found for Sosperec — searches of Codebase64 and general web returned nothing beyond the CSDb release/scener pages and the Lemon64 forum mention above",
    "2026-07-23 research pass: re-verified the 91+8=99 file / 13-composer split directly against data/composers/*.json (script count matches the card's existing figures exactly); fetched CSDb's scener page for Grabowsky (https://csdb.dk/scener/?id=9937, confirms group timeline 1111 Team -> Smartworks -> Trays 1989-1991 -> Graffity from 1991, and a separate, non-SID collaboration 'The Old Typer' with Hetye — not a music tool, not added as an edge); fetched CSDb's per-file SID pages for six Sosperec-tagged files across five composers (ids 5819, 5824, 5825, 11661, 23233, 29600, 9221) to check PSID load/init/play addresses, finding the binary is relocated per release rather than fixed (see quirks) — no new source code, format spec, or disassembly was found, so status remains stub"
  ]
}
```

## Overview

Sosperec is a native Commodore 64 music editor/player written by Gabor Torday,
known on the scene as Grabowsky, released in 1991 as "Sosperec Editor V1.0"
while he was a coder for the Hungarian groups Trays (until May 1991) and then
Graffity. The raw dataset splits its usage across TWO tags — "Sosperec" (91
files) and "Graffity/Grabowsky" (8 files, all by composer Trays, interleaved
with plain-Sosperec-tagged files within the same tune series) — folded
together here as one tool (see quirks). Combined it covers **99 files across
13 composers**, dominated by Cane (48% of the 91 Sosperec-tagged files) and
DOS (21%), with a long tail of smaller users tied to Trays/Graffity/Samar
Productions — consistent with a small-scene tool that was adopted by a real
circle of composers rather than staying a single author's private routine.
Despite the shared "Graffity" group label, this is NOT the same code as
[GMC](gmc.md)/[DMC](dmc.md) — those are by a different Graffity coder, Brian
(Balázs Farkas); no source or credit evidence links Sosperec to their code. A
2007 Lemon64 forum post recalls its playroutine as unusually advanced for
1991, with rastertime comparable to GoatTracker 2 running with several
optimizations disabled — the only qualitative technical claim found for this
card. No source code, disassembly, or format documentation was located. A
2026-07-23 check of PSID-header addresses across six files from five
composers confirms the compiled player binary is relocated per release (load
addresses seen: $0FFC, $0FFA, $1000, $2500, $BD00) rather than always loaded
at one fixed location — explaining why no single memory map can be published
for this tool, and matching the separately-catalogued "Sosperec Relocator"
tooling already noted below.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this is an **identity-only
stub** with no public source or prior disassembly to draw on. The one
low-level lead — DeepSID's cached "6 bytes ($FA-$FF)" zero-page note in
`data/players.json` — is carried into the card's `memory.zero_page` field
*with its origin flagged*, not treated as independently confirmed; it should
be re-derived from an actual disassembly before being trusted for a `verified`
card. Also load-bearing: **"Graffity/Grabowsky" is this same tool under a
second raw tag**, not a distinct player — merged in via interleaved
composer/tune-series evidence (see quirks) — and it is **unrelated to
GMC/DMC** despite the shared "Graffity" group name (different coder, no
code-sharing evidence).

## Disassembly notes

None performed. No public Sosperec source was found (searches covered CSDb,
Codebase64, and general web). A 2026-07-23 pass did pull PSID-header
load/init/play addresses (public metadata on CSDb's per-file SID pages, no
disassembly required) for six files across five composers, and found the
compiled binary is **relocated per release** rather than loaded at one fixed
address — even two tunes from the same 1993 ADSR compilation (Cane vs DOS)
load at completely different addresses. See `memory`/`entry` fields and the
matching quirk for the full address table and citations. This rules out
publishing a single canonical entry point, but doesn't reveal what the code at
any of those addresses actually does. The concrete next step to move this card
past `stub` would still be to pull one representative Sosperec-tagged `.sid`
(e.g. from composer Cane, the largest user) and disassemble its init/play
routines from the PSID-embedded binary directly, since no separate source
archive exists to read instead.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release, composer usage) and PSID-header metadata
(load/init/play addresses, shown to be non-fixed/relocated) are confirmed,
from the cached SIDId entry, the CSDb release/scener/per-file SID pages, and
this project's own composer-tag aggregation. Every format/routine-behavior
field is still `TODO` because no source or disassembly was available; the
zero-page memory field remains explicitly attributed to DeepSID's own cached
database rather than to any verification done here. None of this pass's
findings amount to a documented runtime fact strong enough to promote past
`stub` — quite the opposite, it positively rules out a fixed memory map.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release
(`?id=18233`) and scener (`?id=9937`) pages, a Lemon64 forum mention of its
playroutine quality, related CSDb tooling entries (relocators/depacker),
`data/players.json`'s cached DeepSID entry, this project's local
composer-tag aggregation (91 "Sosperec" + 8 "Graffity/Grabowsky" = 99 files,
13 composers, re-verified 2026-07-23), and (new this pass) CSDb's per-file SID
pages for six files across five composers used to check PSID load/init/play
addresses (`?id=5819,5824,5825,11661,23233,29600,9221`).
