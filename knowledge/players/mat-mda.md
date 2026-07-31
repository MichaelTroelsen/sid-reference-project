# Mat/MDA (player routine)

```json
{
  "id": "mat-mda",
  "name": "Mat/MDA (player routine)",
  "aliases": ["Mat/MDA"],
  "authors": ["Matthias Hillebrand (Mat) of Modern Arts (per SIDId) — but see quirks: every locally-tagged file is authored by Tim Kleinert, not Hillebrand"],
  "released": "No SIDId RELEASED field (confirmed absent, not just unfetched — see sources). Per-tune CSDb 'Released' fields on all 7 tagged files (full census) span 1987-1989: earliest Stavros.sid ('1987 MDA-Empire/Spot 3001', csdb.dk/sid/?id=16873); latest Agima.sid ('1989 Modern Arts', csdb.dk/sid/?id=16866). This is composition/use dating of individual tunes, not a player/tool release date.",
  "status": "stub",
  "platform": "Native C64 in-house/personal player routine embedded directly in Modern Arts' own productions. No standalone editor, CSDb tool/release page, or public source found under this name: csdb.dk site search for 'Mat/MDA' returns zero results, and the c64.ch scener page for Mat/Hillebrand (https://c64.ch/sceners/1232/Mat) credits him only with per-production Code/Graphics/Music roles, never a named music tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SAME AUTHOR/COMPOSER DISCREPANCY PATTERN AS THE SIBLING '_DIGI' TAG: data/sidid.json byTag['Mat/MDA'] credits 'Matthias Hillebrand of Modern Arts' as author, but all 7 locally-tagged files (data/composers/tim-kleinert.json) are credited solely to Tim Kleinert — Modern Arts co-founder and, separately, the confirmed author of SoundBox (knowledge/players/soundbox-mda.md, CSDb release 112576, 1991). No file in this dataset carries a Hillebrand co-credit on this tag. This mirrors the identical, already-documented discrepancy on 'Mat/MDA_Digi' (knowledge/players/mat-mda-digi.md), where the one tagged file likewise belongs to someone other than Hillebrand.",
    "Kleinert's own catalog uses at least FOUR distinct player tags across his files: 'Mat/MDA' (7f), 'SoundBox/MDA' (his own confirmed tool, 8f), 'Symphonica/MDA' (his own 'Symphonica Music System V1.0'), and 'Music_Assembler' — i.e. Kleinert's files carrying the 'Mat/MDA' tag are NOT simply mistagged SoundBox files; SIDId's fingerprint scanner distinguishes 'Mat/MDA' from 'SoundBox/MDA' as a genuinely different byte signature on the same author's disk (data/composers/tim-kleinert.json folder records for Agima.sid, First_Demo.sid, Fresh_Intro.sid, Graphixmania (part 1), Stavros, Warriors, ZSS Intro all read player='Mat/MDA', distinct from the SoundBox/MDA-tagged Demo_Tune.sid and Graphixmania_2 files).",
    "Two plausible, unconfirmed explanations: (1) this is an earlier/simpler player Kleinert used before or alongside SoundBox, possibly co-written with or borrowed from Hillebrand (both were Modern Arts co-founders, per c64.ch and Demozoo), or (2) SIDId's author attribution for this signature is simply wrong/swapped relative to the composer credit. No source (STIL, CSDb credits, SIDId comment) resolves which. This card does not assert Hillebrand actually wrote the code used in these 7 files — only that SIDId's fingerprint database says so.",
    "Distinct from the plain tag 'Charles_Callet'-style personal routines in this batch: this tag has real corroborating identity (a named author in SIDId, a known demo group, a known co-founder relationship), just an unresolved mismatch against the local composer credit."
  ],
  "sources": [
    "data/sidid.json byTag['Mat/MDA']: author 'Matthias Hillebrand of Modern Arts', no other fields",
    "Local dataset: data/composers/tim-kleinert.json — 7 files tagged 'Mat/MDA' (Agima, The First Demo, Fresh Intro, Graphixmania (part 1), Stavros, Warriors, ZSS Intro), all authored solely 'Tim Kleinert'; see knowledge/COVERAGE.md row #4 (7 files)",
    "cadaver/sidid sidid.nfo source (https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo, lines ~920-925), fetched directly: 'Mat/MDA' entry has ONLY an AUTHOR line — no RELEASED/REFERENCE/COMMENT fields, unlike the neighboring 'SoundBox/MDA' entry (lines 926-929) which does carry RELEASED 1991 + REFERENCE csdb.dk/release/?id=112576 — confirms the released/csdb_release TODOs are a genuine absence in SIDId, not a missed lookup",
    "CSDb webservice, all 7 tagged files' own SID entries queried by id via scripts/lib/csdb-client.js getSidRelease() (full census, not a sample): Agima id=16866 Released '1989 Modern Arts'; The First Demo id=49083 '1988 Modern Arts'; Fresh Intro id=40467 '1988 Modern Arts'; Graphixmania (part 1) id=16869 '1988 Modern Arts'; Stavros id=16873 '1987 MDA-Empire/Spot 3001'; Warriors id=41751 '1988 Modern Arts'; ZSS Intro id=1097 '1988 Modern Arts'",
    "CSDb site search for 'Mat/MDA' (https://csdb.dk/search/?seinsel=1&search=Mat%2FMDA) returns zero results — no tool/release page under this name",
    "knowledge/players/mat-mda-digi.md (status: stub) — sibling card documenting the identical author/composer-mismatch pattern on the '_Digi' variant tag; cited for corroborating context, not edited",
    "knowledge/players/soundbox-mda.md (status: stub) — Tim Kleinert's confirmed own tool, cited for corroborating context on Kleinert's multi-tag catalog; not edited",
    "c64.ch scener page for Mat / Matthias Hillebrand: https://c64.ch/sceners/1232/Mat — credits him with per-production Code/Graphics/Music roles, no named music tool",
    "Demozoo — Modern Arts (Swiss demo group, founded by Mat and Tim, originally 'MDA-Empire', active 1987-1991): https://demozoo.org/groups/54783/"
  ]
}
```

## Overview

`Mat/MDA` is SIDId's byte-signature tag for a routine it credits to **Matthias
Hillebrand ("Mat")**, co-founder of the Swiss demo group **Modern Arts**. All 7
locally-tagged files, however, are credited solely to fellow Modern Arts
co-founder **Tim Kleinert** — the confirmed author of the separately-carded
`SoundBox` (`knowledge/players/soundbox-mda.md`) — with no Hillebrand co-credit
anywhere. All 7 files' own CSDb `Released` fields (full census) place the
routine's use between 1987 (Stavros, MDA-Empire/Spot 3001) and 1989 (Agima,
Modern Arts) — composition dating of individual tunes, not a formal tool
release: no CSDb tool/release page or standalone editor exists under this
name (site search returns zero results), and SIDId's own source file
(`sidid.nfo`) confirms it carries no RELEASED/REFERENCE fields at all, unlike
the neighboring `SoundBox/MDA` entry which does. This is the same author/composer mismatch pattern already documented
on the sibling tag `Mat/MDA_Digi` (`knowledge/players/mat-mda-digi.md`), and is
recorded here rather than smoothed over. Kleinert's catalog uses this as a
genuinely distinct SIDId signature from his own `SoundBox/MDA` and
`Symphonica/MDA` tags, so it is not simply a mistagging of his known tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's author attribution
(Hillebrand) does not match any local file's own composer credit (all Kleinert)
— an unresolved discrepancy, not an assumption resolved either way.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or disassembly
located. Resolving the author discrepancy would need a byte-level comparison
against a confirmed Hillebrand-authored file, which was not attempted.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established,
and even those carry an unresolved author/composer discrepancy.

## Sources

See the `sources` array — the cached SIDId entry, local composer-file
aggregation, the sibling `mat-mda-digi.md` and `soundbox-mda.md` cards (cited,
not edited), and two provenance pages on Modern Arts.
