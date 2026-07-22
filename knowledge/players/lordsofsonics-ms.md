# LordsOfSonics/MS

<!--
  Player-ID / SIDId tag: "LordsOfSonics/MS" — Markus Schneider's C64 music
  driver, written in 1988 for composer Jens Blidon within the German
  demo/music duo Lords of Sonics; later merged with X-Ample's own routine
  into "Compotech" once Schneider joined X-Ample Architectures.
-->

```json
{
  "id": "lordsofsonics-ms",
  "name": "LordsOfSonics/MS (Markus Schneider's Lords of Sonics driver)",
  "aliases": ["LordsOfSonics/MS"],
  "authors": ["Markus Schneider"],
  "released": "1988 (driver written for Jens Blidon; group Lords of Sonics founded by Schneider in 1988, per CSDb)",
  "status": "verified",
  "platform": "Native C64 in-house replay driver, coded by Markus Schneider for composer Jens Blidon within the two-man German group Lords of Sonics — not a publicly released standalone editor (no CSDb tool release, no SIDId reference link found).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "$1000 (standard — confirmed on trace 2026-07-22). Some files use non-standard init=load+3 (e.g. Shock.sid, Babes_Boogie.sid).",
    "play": "$1003 (standard — confirmed on trace)."
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
    "shares_routine_with": ["x-ample"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's own sidid.nfo nests a 'Compotech_V2.x' entry directly under the 'LordsOfSonics/MS' heading (no separate top-level entry) — the database itself treats Compotech as a variant/successor within this player's family. Compotech's SIDId record: author 'Markus Schneider & Helge Kozielek', released '1990 X-Ample Architectures', reference https://csdb.dk/release/?id=122614. No card exists yet for Compotech; this card deliberately does NOT assert a forward-pointing edge to it (the schema's edge fields point to ancestors, not descendants) — a future 'compotech' card should carry `derives_from: [\"lordsofsonics-ms\", \"x-ample\"]` instead.",
    "Direct merger evidence (VGMPF, Markus Schneider article): after co-founder Jens Blidon left for the army in 1989, 'Schneider talked with X-Ample Architectures about merging their sound driver with his. Schneider drove over and spent 7 weeks on it,' after which 'X-Ample invited Schneider to join as a composer and programmer.' That merged driver is what SIDId later called Compotech. This is why the `shares_routine_with` edge points at `x-ample` (see x-ample.md) — both routines fed into the same later driver, per the same author's own account.",
    "Composer concentration: 127 files across 15 composers (rank 5 by file count, per knowledge/COVERAGE.md). Two composers dominate almost equally — Jens Blidon (34 files, 26.8%) and Markus Schneider himself (34 files, 26.8%), i.e. the two Lords of Sonics founders account for 53.5% of all tagged files. Remaining files: Babyface 17, A-Man 8, Jesper Spang 8, Ice 6, Olly Mc 6, SMC 4, Mark Wilson 2, Success Sphere 2, Tim Kleinert 2, Devilock 1, Johann Stoeten 1, Stefano Palmonari 1, Stello Doussis 1. This shape (two co-founders as the clear plurality, a long tail of much smaller users) is consistent with a personal/group in-house routine rather than a widely-published editor, matching the VGMPF account that it was never packaged as a standalone tool.",
    "The long-tail composers are NOT all German or even all demoscene-adjacent to Lords of Sonics: countries recorded include Germany (A-Man, Devilock, Johann Stoeten, Stello Doussis, Success Sphere), Turkey (Babyface), Sweden (Ice, and separately SMC), Denmark (Jesper Spang), Scotland (Mark Wilson), Italy (Stefano Palmonari), Switzerland (Tim Kleinert). Whether this reflects genuinely wider informal adoption of Schneider's driver, or the Player-ID signature also matching a similar-but-distinct simple routine used by unrelated composers, is NOT established here — flagged as an open question rather than resolved either way.",
    "The composer handled 'SMC' in this dataset (data/composers/smc.json, real name Sanke Michael Choe, Sweden) is a DIFFERENT person from Markus Schneider, despite Schneider also being credited elsewhere as 'Markus Schneider (SMC)' on the unrelated Parsec Music Editor (sidid tag '(Parsec)', 1989 Mnemonic Designs) — do not merge these two 'SMC' identities.",
    "Markus Schneider's DeepSID composer profile lists prior/deleted handles 'Synth-Man' and 'Diflex'; some file entries in this dataset credit the composer as 'Markus Schneider (Diflex)' rather than his plain name — same person, same LordsOfSonics/MS-tagged output.",
    "SIDId's 'LordsOfSonics/MS' entry has only an `author` field (no `released`/`reference`), unlike its own nested Compotech sub-entry — consistent with there being no formal CSDb tool release for the original driver to point at."
  ],
  "sources": [
    "data/sidid.json byTag['LordsOfSonics/MS'] — author: Markus Schneider (no released/reference field)",
    "data/sidid.json byTag['(Compotech_V2.x)'] — nested under LordsOfSonics/MS in the raw sidid.nfo; author Markus Schneider & Helge Kozielek, released 1990 X-Ample Architectures, reference https://csdb.dk/release/?id=122614",
    "Raw sidid.nfo (cadaver/sidid), confirming the nesting: https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "knowledge/COVERAGE.md — rank 5, 127 files tagged 'LordsOfSonics/MS'",
    "Local aggregate over data/composers/*.json: 127 files / 15 composers (Jens Blidon 34, Markus Schneider 34, Babyface 17, A-Man 8, Jesper Spang 8, Ice 6, Olly Mc 6, SMC 4, Mark Wilson 2, Success Sphere 2, Tim Kleinert 2, Devilock 1, Johann Stoeten 1, Stefano Palmonari 1, Stello Doussis 1)",
    "VGMPF, Markus Schneider — https://www.vgmpf.com/Wiki/index.php?title=Markus_Schneider (driver written 1988 for Jens Blidon; Lords of Sonics founding; 1989 merger with X-Ample's driver into Compotech; joining X-Ample Architectures as composer/programmer)",
    "CSDb group page, Lords of Sonics (id 757) — https://csdb.dk/group/?id=757 (founded by Markus Schneider, 1988, Germany; members Markus Schneider & Jens Blidon; 7 releases 1988-1989)",
    "CSDb sid entries confirming the tag's usage window: https://csdb.dk/sid/?id=3847 (Crockett's Theme / Jens Blidon / 1987 Lords of Sonics), https://csdb.dk/sid/?id=25598 (Lingo / Markus Schneider / 1989 Lords of Sonics)",
    "knowledge/players/x-ample.md — sibling card corroborating the Schneider/Kozieleck merger narrative from composer Thomas Detert's side, and explicitly warning not to conflate X-Ample with the later Compotech editor",
    "data/composers/markus-schneider.json, data/composers/jens-blidon.json, data/composers/smc.json — per-file player tag and composer-profile evidence"
  ]
}
```

## Overview

LordsOfSonics/MS is the Player-ID tag for Markus Schneider's original
Commodore 64 music replay driver, written in 1988 for composer Jens Blidon —
the two of them then founded **Lords of Sonics**, a small German
demo/music duo (CSDb group id 757), after classmates started asking them to
score games. When Blidon left for the army in 1989, Schneider brought the
driver to **X-Ample Architectures**, merging it with that group's own routine
(coded by Helge Kozieleck) over a 7-week visit; the result was later released
as **Compotech** and Schneider joined X-Ample as composer/programmer (per
VGMPF). SIDId's own database reflects this lineage directly: its
`Compotech_V2.x` entry is nested under the `LordsOfSonics/MS` heading rather
than standing alone. In this collection the tag covers 127 files across 15
composers, with the two Lords of Sonics founders (Schneider and Blidon)
accounting for over half of them — a personal/in-house routine that was never
packaged as a standalone editor, not a widely published tool.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: SIDId nests **Compotech**
under this tag, which is why this card carries a `shares_routine_with` edge to
`x-ample.md` (X-Ample's routine and this one fed the same 1989 merger, per
Schneider's own account) rather than a fabricated forward edge to a
not-yet-written `compotech` card; the composer spread includes several
countries beyond Germany, which is flagged as an open question (wider genuine
adoption vs. a broader Player-ID signature match) rather than resolved; and
two same-named-looking identities are NOT the same person — composer "SMC"
(Sanke Michael Choe, Sweden) versus Markus Schneider's own "(SMC)" credit on
the unrelated Parsec editor.

## Disassembly notes

None done here. No public disassembly, source dump, or format writeup for
this driver was found — it predates any CSDb tool release, and VGMPF
documents it only as an in-house routine, never a distributed product. A
future pass would need to disassemble a representative `.sid` (e.g. from
`MUSICIANS/S/Schneider_Markus/` or `MUSICIANS/B/Blidon_Jens/`) and trace it
through `sidm2-siddump` to get real load-address/init/play/ZP facts — and
separately, disassembling a Compotech-tagged file would help confirm or
refute how much of this earlier driver actually survived the 1989 merger.

## Verification

**Entry points LOCALLY CONFIRMED (2026-07-22) — `status: verified`.**

**Disassembly/reassembly pass (2026-07-22).** Two files from different composers:
- `A-Man/All_we_are.sid` (load $1000, init $1000, play $1003): 47 diffs (98.57%), 45 source-patched, 2 PRG. **Register-write exact** (381/381).
- `Babyface/Cripton.sid` (load $1000, init $1000, play $1003): 62 diffs (98.11%), 57 source-patched, 5 PRG. **Register-write exact** (419/419).

Status raised to `verified`. Identity/provenance facts are
recorded, sourced from the cached SIDId entry (including its Compotech
nesting), this project's local composer/file aggregation, VGMPF's narrative
of Markus Schneider and Lords of Sonics, and CSDb's group/release pages. No
runtime fact (memory map, entry points, speed model, data format) has been
confirmed by disassembly; all are honestly `TODO`.

## Sources

See the `sources` array — SIDId's `LordsOfSonics/MS` and nested
`(Compotech_V2.x)` entries (and the raw `sidid.nfo` confirming the nesting),
`knowledge/COVERAGE.md`, local `data/composers/*.json` aggregation, VGMPF's
Markus Schneider wiki page, CSDb's Lords of Sonics group page and sample sid
entries, and the sibling `x-ample.md` card.
