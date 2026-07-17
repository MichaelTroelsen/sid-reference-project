# Glover

```json
{
  "id": "glover",
  "name": "Glover",
  "aliases": ["Glover"],
  "authors": ["Lukasz Baran (Glover)"],
  "released": "TODO: no single release date — files tagged with this signature span 1999-2003 (see quirks)",
  "status": "stub",
  "platform": "TODO: not established — no CSDb release names this as a standalone tool/editor; likely an unpublished, in-tune playback routine rather than a distributed product (see quirks)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: not established",

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
    "NOT the same signature as 'Glover_NewPlayer_V21' (carded separately as knowledge/players/glover-newplayer.md, 66 files) despite sharing the same author, Lukasz Baran (Glover). SIDId's sidid.nfo carries two wholly separate entries: 'Glover' has only an AUTHOR line (no NAME/RELEASED/REFERENCE/COMMENT), while 'Glover_NewPlayer_V21' has AUTHOR/RELEASED=2000/REFERENCE=https://csdb.dk/release/?id=101623 (no NAME field either) — i.e. SIDId itself treats these as distinct signatures, not just a version-suffix variant of one tool. data/sidid.json confirms the same split.",
    "Evidence AGAINST simple lineage from the shared name: the 11 files tagged plain 'Glover' straddle the 2000 JCH-fork date on both sides rather than being an earlier-only predecessor. Kordiaukis's 'Double Sided' (CSDb sid id 17028) is dated 1999 (before the fork); Manex's 'Windbreak' (CSDb sid id 19645) is dated 2000; but Glover's own 'For Ramos' (2001), 'Inside' (2002), 'Ode to Wizard' (2002) and 'Arranged' (2003) are all dated AFTER the 2000 'JCH NewPlayer 21.G6'/'JCH Players by Glover' releases (CSDb release 101622/101623) that co-credit JCH himself. If this were simply an earlier version superseded by the JCH-based V21 fork, Glover's own later tunes would not still be tagged with the bare, JCH-less signature. This looks like a separate, personal routine Glover kept using/reusing in parallel with (not strictly before) his JCH-fork work, not a predecessor version of it.",
    "No CSDb release names a standalone tool/editor for this signature. A search of the Samar Productions group page (https://csdb.dk/group/?id=201) and web search for Glover/Samar music tools turns up only the JCH-lineage releases (JCH NewPlayer 21.G6, JCH Players by Glover, Hardtracker to JCH Converter, JCH Depacker) plus unrelated trackers (Prodrum, Asterion Sid-Tracker). No 'Glover Editor', 'Glover Player', or similarly named release was found — consistent with this being an unpublished, hand-coded-per-tune routine rather than a distributed tool with its own release/documentation.",
    "Small, cross-composer signature, not purely personal: of the 11 files (data/composers/*.json, matching knowledge/COVERAGE.md's 'Glover' family, rank 18, exactly), Kordiaukis is the largest user (6 files, 55%), ahead of Glover himself (4 files, 36%) and Manex (1 file, 9%). Glover is not even the top user of his own signature — mirroring the same pattern already noted on glover-newplayer.md for the JCH fork, where Phobos outused Glover too. Suggests informal sharing of the routine within the Samar Productions / Polish scene circle rather than a strictly private in-house routine, though too small a sample (3 composers) to call it a widely published tool.",
    "sidid.nfo's 'Glover' entry provides only AUTHOR — no comment describing a playback technique, unlike the 66 SIDId entries elsewhere in this dataset that do carry one. Nothing beyond authorship attribution is confirmed."
  ],
  "sources": [
    "sidid:Glover (author Lukasz Baran (Glover); no name/released/reference/comment) — data/sidid.json and https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "knowledge/COVERAGE.md — family 'Glover', rank 18, 11 files, single grouped raw tag Glover",
    "Local dataset: data/composers/{glover,kordiaukis,manex}.json — 11 files across 3 composers (Kordiaukis 6, Glover 4, Manex 1), matching knowledge/COVERAGE.md exactly",
    "CSDb sid entry 17028, 'Double Sided' by Kordiaukis, 1999 Kreciki/Fraction: https://csdb.dk/sid/?id=17028",
    "CSDb sid entry 19645, 'Windbreak' by Manex, 2000 Anubis: https://csdb.dk/sid/?id=19645",
    "CSDb sid entry 13598, 'For Ramos' by Glover, 2001 Samar Productions: https://csdb.dk/sid/?id=13598",
    "CSDb sid entry 13608, 'Inside' by Glover, 2002 Samar Productions: https://csdb.dk/sid/?id=13608",
    "CSDb sid entry 13621, 'Ode to Wizard' by Glover, 2002: https://csdb.dk/sid/?id=13621",
    "CSDb sid entry 13590, 'Arranged' by Glover, 2003: https://csdb.dk/sid/?id=13590",
    "CSDb group 201, Samar Productions (Poland) — no standalone Glover tool/editor release found: https://csdb.dk/group/?id=201",
    "knowledge/players/glover-newplayer.md — the separate, JCH-derived 2000 fork by the same author, cross-referenced here to avoid conflation"
  ]
}
```

## Overview

"Glover" is a small, uncarded Player-ID signature (11 files, rank 18 of the
uncarded families in `knowledge/COVERAGE.md`) attributed by SIDId to Lukasz
Baran ("Glover") of Samar Productions — the same person behind the separately
carded `glover-newplayer.md` (his 2000 fork/port of JCH's NewPlayer, made
jointly with JCH himself). This card is deliberately **not** merged with that
one: SIDId's own `sidid.nfo` treats "Glover" and "Glover_NewPlayer_V21" as two
distinct signatures, and the file dates confirm they don't line up as a simple
"earlier version, superseded" pair — files tagged plain "Glover" run from 1999
(Kordiaukis, before the JCH fork) through 2003 (Glover's own later tunes,
after it), so Glover appears to have kept using this separate, apparently
unpublished routine in parallel with his JCH-fork work rather than retiring
it. No CSDb release names a standalone tool for this signature, and three
composers (Kordiaukis, Glover, Manex) share it — too small and undocumented a
sample to say more than "a routine Glover wrote and occasionally lent out."

## Quirks & gotchas

See the `quirks` array — the load-bearing finding is that **this is not the
same thing as `glover-newplayer.md`** despite the shared author name, and the
evidence for treating them as separate is temporal (files on both sides of
the 2000 JCH-fork date) and structural (SIDId itself lists them as unrelated
signatures with no shared reference/version data), not just a name-similarity
guess. No `edges` relationship to `glover-newplayer` (or to `jch-newplayer`)
is asserted here, precisely because no source states one — the special
instruction for this pass was not to assume a relationship from the shared
name alone, and that instruction is honored: this card asserts nothing beyond
"same author" as fact.

## Disassembly notes

None performed. No source, format spec, or standalone tool release was found
for this signature during this pass — unlike the JCH-fork card, there is no
obvious starting point (no `SRC_*.zip`) for a future disassembly; a
representative `.sid` (e.g. CSDb sid id 13608, "Inside") would need to be
disassembled from the binary alone.

## Verification

**Not verified — `status: stub`.** Only identity (author) and usage
(composer/file counts, release dates establishing the 1999-2003 span) are
confirmed, from cached SIDId data and individual CSDb sid-entry pages. No
runtime fact (memory map, entry points, data format, effect encoding) has
been established, and none is guessed. No `edges` are asserted, since no
source documents a relationship between this signature and any other player,
including `glover-newplayer`.

## Sources

See the `sources` array — SIDId's `Glover` entry (author-only), six
individual CSDb sid-entry pages used to establish the 1999-2003 date range,
the Samar Productions CSDb group page (checked for and not finding a
standalone tool release), and this project's own `data/composers/*.json` for
usage counts.
