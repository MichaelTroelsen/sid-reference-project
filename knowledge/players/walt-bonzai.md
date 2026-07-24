# Walt's Music Editor (Walt/Bonzai)

```json
{
  "id": "walt-bonzai",
  "name": "Walt's Music Editor (Walt/Bonzai)",
  "aliases": ["Walt/Bonzai", "Music-Player V2.0", "Walt/Bonzai Music Editor V2.0"],
  "authors": ["Anders Fogh (Walt) / Bonzai"],
  "released": "1990 (v2.0; CSDb release id 12580)",
  "status": "stub",
  "platform": "Native C64 tool (DeepSID players.json: platform \"Native / C64 emulator\", distribution \"Freeware\"). No public source code, GitHub repo, or format documentation was found.",
  "csdb_release": 12580,

  "memory": {
    "load_address": "TODO: no public source/disassembly located; varies per compiled SID (one sampled file, CSDb sid id 30601 'Amiga Works (part 1)', loads at $3E00 — not confirmed as the tool's fixed base)",
    "zero_page": "DeepSID players.json field 'zero_pages': \"2 bytes ($FE-$FF)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (PSID header); sampled file CSDb sid id 30601 gives init $7A08, but that is one specific composition, not a documented fixed engine entry",
    "play": "TODO: per-file (PSID header); sampled file CSDb sid id 30601 reports play $0000, which is unexplained (possibly non-standard dispatch or an extraction artifact) — not reliable enough to record as fact"
  },
  "speed": "TODO: no public source/disassembly located",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 95 files total under the raw tag 'Walt/Bonzai', split almost entirely between two Danish sceners — Walt himself (Anders Fogh, 79 files) and Tjagvad (Henrik Tjagvad Madsen, 16 files). No other composer uses this tag at all. That's a near-personal-routine concentration (83% by the author) shared with just one other person in his circle, not a widely adopted tracker.",
    "'Walt_Digi' is a SEPARATE raw tag/family in this project's aggregation (knowledge/COVERAGE.md rank 193, 5 files), also attributed to Anders Fogh (Walt) in data/sidid.json, but with no `released`/`reference` fields and no evidence tying it structurally to this editor's main player routine. Likely a companion digi-sample playback routine by the same author, but no `edges` entry is asserted here — similar name/author is not evidence of shared code.",
    "DeepSID's curated players.json entry ('Walt's Music Editor v2.0', csdb_id 12580) lists distribution as 'Freeware' and bundles 9 example tunes (`example_tunes: \"9\"`) — matching the CSDb release page's description of the package including 9 compositions ('Popcorn', 'Axel F', 'Living Daylights' among them).",
    "CSDb's release page (id 12580) credits 'Code: Walt of Bonzai; Music: Link of Vibrants and Walt of Bonzai' — i.e. the editor package's example tunes include a contribution from Link/Vibrants, not just Walt. This is a music-credit fact about the bundled package, not a technical derivation claim, so no `edges` entry follows from it.",
    "No public source code, disassembly, GitHub repo, or Codebase64/format-spec article was located anywhere searched (CSDb, general web, Lemon64, Forum64). Every Tier 3 runtime field below is left TODO rather than inferred from the one sampled PSID header (CSDb sid id 30601), whose reported play address ($0000) is unexplained and not trustworthy enough to promote into a fact.",
    "The CSDb release page (id 12580) lists a second download alongside the editor package: 'Instructions_by_Yaemon_for_Music_Editor_V2.t64', a third-party manual made by Yaemon of Depredators and uploaded by user 'Fred' on 9 October 2013 ('I've uploaded an instructions file made by Yaemon of Depredators' — comment on the release page). This is a genuine usage manual, not an author-written spec, but it is the closest thing to documentation found for this tool.",
    "Downloaded and inspected that .t64 tape image directly (raw byte/string extraction only — no PETSCII charset table applied, so this is a lead, not a confirmed read). Legible fragments include: a MAIN-EDITOR vs INSTRUMENT-EDITOR mode split ('NO MAIN-EDITOR FUNCTIONS ARE ALLOWED ... IN THE INSTRUMENT-EDITOR'), quoted two-letter command abbreviations '\"PL\"', '\"VB\"', '\"FT\"' (plausibly portamento/vibrato/filter commands, but their meaning is NOT confirmed from this partial read and is not asserted as fact), an instrument-reference format that looks like 'I00'/'I01' (two-digit, I-prefixed), a key combo 'SHIFT + INST DEL', and a credit block dated '7/4-1991' naming 'WALT' and 'BONZAI' and '1990'. The name 'JCH' also appears elsewhere in the same text with no legible surrounding context — this is NOT asserted as an edge to any JCH-authored player; it may be a credit, a thanks, or unrelated, and similar-name proximity alone is not evidence per this project's rule. None of this is promoted into `data_format`/`effects` — those stay TODO until someone does a proper PETSCII decode of the file (source: https://csdb.dk/getinternalfile.php/121157/Instructions_by_Yaemon_for_Music_Editor_V2.t64).",
    "Re-checked Lemon64 (two threads: 'Comparison of C64 Music Editors' t=67248, general music-editor recommendation threads) and Forum64.de via web search — neither mentions Walt's Music Editor, Walt/Bonzai, or Anders Fogh at all. Also checked Chordian's own 'Comparison of C64 Music Editors' blog post/page (chordian.net/c64editors.htm, blog.chordian.net/2018/02/24) — this tool is absent from both, despite Chordian running DeepSID/SIDId. Searched CSDb for an earlier 'V1.0' release of this editor and for a possible relation to the separately-released 'Advanced Bonzai Note Maker' (CSDb id 8785, V1.2, June 1991) — the Note Maker is a different tool credited to 'The Human Autofire of Bonzai', not Walt, so no edge follows."
  ],
  "sources": [
    "sidid:Walt/Bonzai (author Anders Fogh (Walt), released '1990 Bonzai', reference https://csdb.dk/release/?id=12580) — data/sidid.json",
    "sidid:Walt_Digi (author Anders Fogh (Walt), no released/reference) — data/sidid.json — cited only to note the sibling tag exists, not merged into this card",
    "DeepSID players.json curated entry \"Walt's Music Editor v2.0\" (developer Walt, start_year 1990, csdb_id 12580, platform 'Native / C64 emulator', distribution 'Freeware', zero_pages '2 bytes ($FE-$FF)', example_tunes '9') — data/players.json",
    "CSDb release 'Music Editor V2.0' / Bonzai, 1990: https://csdb.dk/release/?id=12580",
    "CSDb sid entry 'Amiga Works (part 1)', Anders Fogh (Walt), 1991 Bonzai (sampled PSID header only): https://csdb.dk/sid/?id=30601",
    "Local dataset: 95 files tagged 'Walt/Bonzai' across 2 composers — Walt 79, Tjagvad 16 (knowledge/COVERAGE.md line 29; verified by scan of data/composers/*.json)",
    "Composer profile data/composers/Walt.json (full_name Anders Fogh, country Denmark, csdb_id 1857) and data/composers/Tjagvad.json (full_name Henrik Tjagvad Madsen, country Denmark, csdb_id 1887)",
    "CSDb release 12580 'Also Known As' field: 'Music-Player V2.0, Walt/Bonzai Music Editor V2.0' and its Downloads/Comments sections (instructions file + 2013 upload comment): https://csdb.dk/release/?id=12580",
    "Instructions_by_Yaemon_for_Music_Editor_V2.t64, downloaded directly and inspected via raw string extraction (not a full PETSCII decode): https://csdb.dk/getinternalfile.php/121157/Instructions_by_Yaemon_for_Music_Editor_V2.t64",
    "CSDb release 8785 'Advanced Bonzai Note Maker V1.2' (code: The Human Autofire of Bonzai, June 1991) checked and ruled out as unrelated to this editor: https://csdb.dk/release/?id=8785",
    "Demozoo scener profile 'Walt/Bonzai' (no real name given there; group history only): https://demozoo.org/sceners/2813/",
    "Web search of Lemon64 (lemon64.com) and Forum64 (forum64.de) via general search, and Chordian's music-editor comparison (chordian.net/c64editors.htm, blog.chordian.net/2018/02/24/comparison-of-c64-music-editors) — none mention this editor; cited as a negative result, not a positive fact"
  ]
}
```

## Overview

Walt's Music Editor (SIDId/local tag `Walt/Bonzai`) is a native, freeware C64
music editor by Anders Fogh (handle "Walt") of the Danish demo group Bonzai,
released as v2.0 in 1990 (CSDb release id 12580). It's a small-circle tool:
in this project's HVSC-derived dataset it covers 95 files, and every one of
them belongs to just two Danish sceners — Walt himself (79 files, 83%) and
Tjagvad/Henrik Tjagvad Madsen (16 files) — reading as a personal routine that
one other person in his circle also adopted, rather than a tool that spread
through the wider scene. No public source code, disassembly, or author-written
format spec was found, but a third-party usage manual does exist (a
CSDb-hosted `.t64` "instructions" tape image by Yaemon of Depredators,
uploaded 2013) — raw string extraction from it hints at a two-mode editor
(MAIN-EDITOR / INSTRUMENT-EDITOR) and some quoted command abbreviations, but
this was not decoded rigorously enough to promote into the runtime facts, so
this card remains an identity/provenance stub with one documentation lead
flagged for a future pass.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: composer usage is
essentially two people (Walt + Tjagvad, both Danish); a separate `Walt_Digi`
tag exists in this project's own aggregation under the same author but is
NOT folded into this card (different tag/family, no evidence of shared code,
per this project's "similar names are not evidence" rule); and the one PSID
header sampled from CSDb (sid id 30601) reports a play address of `$0000`,
which is unexplained and was deliberately left out of the `entry` fields
rather than recorded as fact.

## Disassembly notes

None. No public source or disassembly of this editor's replay routine was
located anywhere searched. A future pass would need to pull a representative
`Walt/Bonzai`-tagged `.sid` (e.g. one of Walt's own 79 or Tjagvad's 16),
disassemble from its PSID init/play addresses, and trace through
`sidm2-siddump` — the only route to real memory-map/format facts here, since
no author source exists to read. A cheaper interim step: properly decode the
Yaemon instructions `.t64` (real PETSCII charset, not raw string extraction)
before touching a disassembler — it may spell out the editor's own command
set in plain English.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release, freeware distribution, local usage stats/composer
concentration) are confirmed, from SIDId, DeepSID's curated `players.json`,
CSDb, and this project's own composer data. Every Tier 3 runtime field is
`TODO`; the one DeepSID-sourced zero-page figure is cited but not
independently verified, and the one sampled PSID header's addresses are
noted only as an observation, not promoted into the `entry`/`memory` facts.
This pass re-searched CSDb, Lemon64, and Forum64 and found no new author
source or disassembly — the only addition is a third-party instructions
file, whose raw-string read is a documentation lead, not a confirmed fact,
so `status` stays `stub` rather than advancing to `in-progress`.

## Sources

See the `sources` array — SIDId's `data/sidid.json` (`Walt/Bonzai` and
`Walt_Digi` entries), DeepSID's curated `players.json` entry, CSDb pages (the
release id 12580, the ruled-out "Advanced Bonzai Note Maker" id 8785, one
sampled sid entry, and a Demozoo scener profile), the downloaded Yaemon
instructions `.t64` itself, this project's local composer-file aggregate
(`data/composers/*.json`, `knowledge/COVERAGE.md` line 29), the
`Walt`/`Tjagvad` composer profile records, and negative-result web searches
of Lemon64, Forum64, and Chordian's own editor-comparison page.
