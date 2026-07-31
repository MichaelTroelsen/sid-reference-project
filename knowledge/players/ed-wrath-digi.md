# Ed/Wrath Digi (player routine)

```json
{
  "id": "ed-wrath-digi",
  "name": "Ed/Wrath Digi (player routine)",
  "aliases": ["Ed/Wrath_Digi", "Ed/Wrath_Digi_2"],
  "authors": ["Eddie Svärd (Ed)"],
  "released": "1993 — per-file CSDb type=sid census of all 3 tagged files (2026-07-31 pass): 'Compotune' (csdb sid id 11930) 'Released: 1993 Wrath Designs'; 'Miracle #8 (intro)' (csdb sid id 43019) 'Released: 1993 Maniax'; 'Winning Tune' (csdb sid id 37569) 'Released: 1993 FairLight/Wrath Designs' — all three cluster in the same year, unlike the wider 1997-2012 span on the sibling ed-wrath.md card",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under this name — re-confirmed this pass via WebFetch on Ed's CSDb scener page (id 1671), whose 5 listed 'Tool' releases (The Miracle Writer/V2.17, Diamoneditor, ED-itor Preview, 16 Pattern Animeditor) are a text/diskmag/animation editor, none a music or digi tool; working hypothesis (not a citable fact) remains an in-house, presumably native-C64 digi/sample routine, consistent with all 3 tagged files being used in native C64 releases (a music compo entry, a diskmag, a party-compo winner)",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIBLING OF AN ALREADY-CARDED TAG, DELIBERATELY NOT MERGED: knowledge/players/ed-wrath.md (status: stub, 69 files, the plain 'Ed/Wrath' tag) explicitly flags this exact tag in its own quirks: '\"Ed/Wrath_Digi\" (1 file) and \"Ed/Wrath_Digi_2\" (2 files) are SEPARATE SIDId/Player-ID signatures from \"Ed/Wrath\"... NOT consolidated onto this card's aliases despite the shared name/author/composer-exclusive usage — no source confirms they share code with the main routine, only that Eddie Svärd made both.' This card gives Eddie Svärd's digi routine its own record and folds in BOTH its Player-ID signatures as aliases — 'Ed/Wrath_Digi' (1 file) and 'Ed/Wrath_Digi_2' (2 files) — as V1/V2 of the same author's same-purpose digi variant (3 files total). They are kept together here, and kept OUT of the main 'Ed/Wrath' card (ed-wrath.md), which documents a distinct signature with 69 files; no source confirms any of the three share code, only that Eddie Svärd made them all.",
    "THE ONE FILE: 'Compotune' (data/composers/ed.json, CSDb sid id 11930), authored by Eddie Svärd (Ed) alone — matching the 100% single-composer concentration already established for his other tags. 'Compotune' as a title is a generic placeholder name common for scene-competition entries, not itself informative about the routine's purpose.",
    "SIDId's sidid.nfo entry for 'Ed/Wrath_Digi' (data/sidid.json byTag) carries only an AUTHOR line — 'Eddie Svärd (Ed)' — no NAME, RELEASED, REFERENCE, or COMMENT field, identical in thinness to the plain 'Ed/Wrath' tag's own SIDId record (per ed-wrath.md).",
    "PER THIS KB'S CORE RULE: no source found confirms actual sample/digi playback technique for this specific tag — the '_Digi' suffix is SIDId/Player-ID naming convention only here, not a verified claim about the routine's mechanism.",
    "Re-research pass, 2026-07-31 (Tier 1/2 gap-fill: released/platform/csdb_release): censused all 3 tagged files (not just 'Compotune') via CSDb's type=sid webservice — 'Miracle #8 (intro)' (Ed/Wrath_Digi_2, csdb sid id 43019, used in 'Miracle #8' C64 Diskmag, 1993 Maniax) and 'Winning Tune' (Ed/Wrath_Digi_2, csdb sid id 37569, used in a C64 Music release, 1993 FairLight/Wrath Designs) were not previously checked. All 3 files cluster in 1993, giving `released` a concrete cited value instead of a TODO. PSID header metadata (not disassembly, recorded here only): Compotune and Miracle #8 (intro) both LoadAddr/InitAddr $0900 (2304); Winning Tune LoadAddr/InitAddr $0863 (2147) — differing load addresses across only 3 files is a mild flag against a single fixed-address in-house driver, but not conclusive without disassembly. `platform` re-confirmed via WebFetch on Ed's CSDb scener page (id 1671, same person as the ed-wrath.md card): still no music/digi tool release among his 5 registered 'Tool' credits. WebSearch was unavailable this pass (session budget exhausted); no Lemon64/Forum64 search was performed for this specific tag."
  ],
  "sources": [
    "Local dataset: data/composers/ed.json — 1 file tagged Ed/Wrath_Digi ('Compotune', csdb sid id 11930), author Eddie Svärd (Ed); see knowledge/COVERAGE.md row #62 (Ed/Wrath_Digi + Ed/Wrath_Digi_2 combined, 3 files total across the two raw tags)",
    "data/sidid.json byTag['Ed/Wrath_Digi']: author 'Eddie Svärd (Ed)', no other fields",
    "knowledge/players/ed-wrath.md (status: stub) — cited for the explicit prior flag of this tag as a distinct, uncarded sibling signature; not edited by this card",
    "SIDId project source (raw sidid.nfo, upstream of the cached copy): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb webservice, type=sid, all 3 census files (queried this pass via scripts/lib/csdb-client.js): id 11930 'Compotune' Released '1993 Wrath Designs' (https://csdb.dk/sid/?id=11930); id 43019 'Miracle #8 (intro)' Released '1993 Maniax', UsedIn 'Miracle #8' C64 Diskmag (https://csdb.dk/sid/?id=43019); id 37569 'Winning Tune' Released '1993 FairLight/Wrath Designs', UsedIn C64 Music release 'Winning Tune' (https://csdb.dk/sid/?id=37569)",
    "WebFetch, CSDb scener profile (Ed / Eddie Svärd, id 1671), 2026-07-31: https://csdb.dk/scener/?id=1671 — 5 'Tool' releases listed (The Miracle Writer/V2.17, Diamoneditor, ED-itor Preview, 16 Pattern Animeditor), none a music/digi editor; same underlying person as knowledge/players/ed-wrath.md's cited scener research"
  ]
}
```

## Overview

`Ed/Wrath_Digi` is a Player-ID signature distinct from the plain `Ed/Wrath`
tag (see `knowledge/players/ed-wrath.md`, `status: stub`, 69 files, which
explicitly names this tag as an uncarded sibling and declines to merge it).
Locally it covers 3 files (V1 'Compotune' + 2 under the V2 signature), all authored by Swedish
demoscener **Eddie Svärd ("Ed")** of Wrath Designs, matching the 100%
single-composer concentration already established for his other tags. Both
Player-ID signatures of his digi routine — `Ed/Wrath_Digi` (V1, 1 file) and
`Ed/Wrath_Digi_2` (V2, 2 files) — are folded in here as aliases. A
2026-07-31 census of all 3 files via CSDb's `type=sid` webservice found all
three dated **1993** (Compotune/Wrath Designs; Miracle #8 intro/Maniax;
Winning Tune/FairLight+Wrath Designs) — a tight one-year cluster, unlike the
15-year usage span on the sibling `ed-wrath.md` card. No packaged tool
release was found under this name; a WebFetch re-check of Ed's CSDb scener
page (id 1671) confirmed his 5 registered 'Tool' releases are a text,
diskmag, and animation editor, none a music/digi tool, so `platform` and
`csdb_release` remain unresolved despite the added citation.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this card fulfills a TODO explicitly
raised by the sibling `ed-wrath.md` card rather than being an independent
discovery, and — per this KB's core rule — no source confirms an actual
sample/digi playback mechanism for this tag; the name is treated as a bare
Player-ID label only.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, a censused 3-file usage across the V1/V2 signatures with a
cited 1993 date for every file, the thin SIDId author-only record, and a
re-confirmed absence of any packaged music/digi tool release under Ed's
CSDb scener profile). No runtime behaviour has been confirmed or
reconstructed, and no source confirms an actual sample/digi playback
mechanism — the "_Digi" name stays a bare Player-ID label, not a verified
technique claim.

## Sources

See the `sources` array — local dataset aggregation (a full 3-file census,
not a sample), the cached SIDId record, the upstream `cadaver/sidid` repo,
per-file CSDb `type=sid` lookups, a WebFetch of Ed's CSDb scener tool-release
list, and the sibling `ed-wrath.md` card (cited, not edited).
