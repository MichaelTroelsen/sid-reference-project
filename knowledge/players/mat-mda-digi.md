# Mat/MDA Digi (player routine)

```json
{
  "id": "mat-mda-digi",
  "name": "Mat/MDA Digi (player routine)",
  "aliases": ["Mat/MDA_Digi"],
  "authors": ["Matthias Hillebrand (Mat) of Modern Arts"],
  "released": "TODO: no explicit year in SIDId; the one locally-tagged file's CSDb SID entry was not fetched in this pass",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under this name — Matthias Hillebrand co-founded the Swiss demo group Modern Arts (originally 'MDA-Empire') with Tim Kleinert (author of the already-carded knowledge/players/soundbox-mda.md); the plain 'Mat/MDA' tag (7 files, per knowledge/COVERAGE.md row #5) is itself still uncarded.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId CREDITS THE AUTHOR AS MATTHIAS HILLEBRAND, BUT THE ONLY LOCALLY-TAGGED FILE BELONGS TO A DIFFERENT COMPOSER: data/sidid.json byTag['Mat/MDA_Digi'] gives author 'Matthias Hillebrand of Modern Arts', yet the sole file carrying this tag in this project's dataset — 'Digihack 1 (Graphixmania)' (CSDb sid id 38953) — is in Dutch scener Michael Zuurman's ('Mr. Mouse') own HVSC folder (data/composers/mouse-mr.json), credited solely to 'Michael Zuurman (Mr.Mouse)', with NO co-credit to Hillebrand anywhere in the file's author string. This is a genuine, unresolved discrepancy, not a data error assumption — it is recorded here exactly as found.",
    "TWO PLAUSIBLE EXPLANATIONS, NEITHER CONFIRMED: (1) Mr. Mouse used/adapted Hillebrand's digi routine for this one compotune (the file's title, 'Digihack 1,' explicitly signals a digi-technique demonstration/competition entry, which is consistent with someone showcasing a borrowed or referenced routine), or (2) SIDId's byte-signature match is a false positive / coincidental match against Hillebrand's routine. No source (STIL, CSDb credits, SIDId comment field) was found to resolve which. This card does NOT assert authorship of the 'Digihack 1' tune's digi content to Hillebrand — only that SIDId's author field for the fingerprint says so.",
    "MICHAEL ZUURMAN ('MR. MOUSE') IS A NOTABLE FIGURE IN HIS OWN RIGHT: data/composers/mouse-mr.json's DeepSID profile credits him with designing the FM-YAM cartridge (an OPL2/FM-synthesis expansion cartridge for the C64) — he is not a Modern Arts member and has no other tagged files under any Modern-Arts-linked player. His ~100 other tagged files run on Music_Assembler, CyberTracker, FutureComposer, GoatTracker, and his own later 'MrMouse/EasyPlayer' tag (used on several MSX-port OSTs) — none Modern-Arts-linked.",
    "'Mat/MDA' (the plain tag, 7 files, Hillebrand's presumed main routine) remains itself UNCARDED in this KB as of this pass (knowledge/COVERAGE.md row #5) — this card intentionally covers only the '_Digi' variant per this batch's scope, and does not attempt to document the plain tag.",
    "Matthias Hillebrand co-founded Modern Arts (originally 'MDA-Empire,' 1987, Switzerland) together with Tim Kleinert, author of SoundBox (see knowledge/players/soundbox-mda.md) — that card independently notes Hillebrand's own separately-tagged tools 'Mat/MDA' and 'Mat/MDA_Digi' as siblings with no proven code-sharing to SoundBox; this card corroborates and does not contradict that account."
  ],
  "sources": [
    "Local dataset: data/composers/mouse-mr.json — 1 file tagged Mat/MDA_Digi ('Digihack 1 (Graphixmania)', csdb sid id 38953), sole author Michael Zuurman (Mr.Mouse); see knowledge/COVERAGE.md row #163 (1 file)",
    "data/sidid.json byTag['Mat/MDA_Digi']: author 'Matthias Hillebrand of Modern Arts', no other fields",
    "c64.ch scener page for Mat / Matthias Hillebrand: https://c64.ch/sceners/1232/Mat",
    "Demozoo — Modern Arts (Swiss demo group, founded by Mat and Tim, originally 'MDA-Empire', active 1987-1991): https://demozoo.org/groups/54783/",
    "data/composers/mouse-mr.json profile: full_name Michael Zuurman, handle 'Mr. Mouse', country Netherlands, notable 'Designed the FM-YAM cartridge', csdb_id 763",
    "knowledge/players/soundbox-mda.md (status: stub) — cited for corroborating context on Hillebrand/Modern Arts and the sibling 'Mat/MDA'/'Mat/MDA_Digi' tags; not edited by this card"
  ]
}
```

## Overview

`Mat/MDA_Digi` is SIDId's byte-signature tag for a routine it credits to
**Matthias Hillebrand ("Mat")**, co-founder of the Swiss demo group **Modern
Arts** (with Tim Kleinert, author of the already-carded `SoundBox`, see
`knowledge/players/soundbox-mda.md`). The one locally-tagged file, however —
"Digihack 1 (Graphixmania)" — belongs entirely to a **different** composer,
Dutch scener **Michael Zuurman ("Mr. Mouse")**, with no co-credit to
Hillebrand anywhere in the file's own author string. This is recorded as an
unresolved discrepancy rather than smoothed over: either Zuurman used/adapted
Hillebrand's digi routine for this one compotune, or SIDId's signature match
is a coincidence. The plain `Mat/MDA` tag (Hillebrand's presumed main
routine, 7 files) remains itself uncarded in this KB.

## Quirks & gotchas

See the `quirks` array. Load-bearing: a genuine author/composer mismatch
between SIDId's record and the local file's own credit line — flagged
explicitly rather than resolved by assumption, since no source clarifies it.
Also notable: Michael Zuurman is independently notable (FM-YAM cartridge
designer) and otherwise entirely unconnected to Modern Arts in this dataset.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed. Resolving the author discrepancy above would
require an actual disassembly/byte comparison against a confirmed
Hillebrand-authored file (e.g. one of the 7 plain 'Mat/MDA'-tagged files),
which has not been attempted.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established,
and even those carry an unresolved author/composer discrepancy (documented,
not resolved). No runtime behaviour has been confirmed or reconstructed.

## Sources

See the `sources` array — local dataset aggregation, the cached SIDId record,
c64.ch's Mat scener page, Demozoo's Modern Arts group page, and the sibling
`soundbox-mda.md` card (cited, not edited).
