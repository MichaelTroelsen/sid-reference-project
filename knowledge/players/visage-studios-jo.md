# a player by JO of Visage Studios

```json
{
  "id": "visage-studios-jo",
  "name": "a player by JO of Visage Studios",
  "aliases": ["a player by JO of Visage Studios"],
  "authors": ["JO (identity unconfirmed — see quirks)"],
  "released": "TODO: no explicit tool-release date found; corroborating first-party evidence (JCH's own blog) dates a matching test file to February 1991",
  "status": "stub",
  "platform": "TODO: an editor/replay routine attributed by name to 'JO' of a 'Visage Studios' — corroborated only indirectly by JCH's own 2018 blog post recalling a 1991 test file made in \"Visage's music editor\"; no CSDb tool/release entry or SIDId record found under this name",
  "csdb_release": null,

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
    "UNUSUAL TAG FORM: the raw player tag itself is a full descriptive sentence ('a player by JO of Visage Studios') rather than a typical short Player-ID/SIDId code — reproduced verbatim from the local dataset's raw 'player' field (data/composers/jch.json). SIDId's sidid.nfo has NO entry matching this string, nor anything containing 'Visage' (checked directly).",
    "The single locally tagged file is 'JCH in Visage's Editor', by JCH himself (data/composers/jch.json) — JCH is the very well-documented author of JCH NewPlayer/OldPlayer (see knowledge/players/jch-newplayer.md, jch-oldplayer.md), so this tag records him using SOMEONE ELSE's editor, not his own.",
    "FIRST-PARTY CORROBORATION FOUND: JCH's own blog (chordian.net, 'From JCH's Special Collection', 29 June 2018) states: \"I found my crappy test in Visage's music editor and a nice Vibrants intro by Maduplec that used the side-border... Both were from February 1991.\" This independently confirms a real editor associated with the name 'Visage' that JCH personally tested in Feb 1991 — strong circumstantial support for this tag, though the blog post does not itself name 'JO' as the editor's author.",
    "IDENTITY OF 'JO' IS UNCONFIRMED AND FLAGGED AS UNRESOLVED: this project's KB already has a separate, well-documented 'JO' — Poul-Jesper Olsen, hand-coder of the Vibrants/JO player routine (knowledge/players/vibrants-jo.md). However, that card states JO 'joined Vibrants c. 1992', a full year AFTER the Feb 1991 date JCH's blog attaches to the Visage editor test. Given this timeline mismatch, DO NOT assume the two 'JO's are the same person — flagged as an open question, no merge or edge asserted.",
    "A CSDb SID entry named 'Visage' (id 17658) exists, but is a 1989 TUNE by Klaus Grøngaard (handle Link, a Vibrants co-founder), not an editor or company — explicitly noted here to avoid a false merge; the tag under study refers to an EDITOR by 'JO', not this unrelated same-named tune.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for this tag or for 'Visage': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "JCH's own blog, 'From JCH's Special Collection' (29 June 2018) — first-party mention of 'Visage's music editor', dated Feb 1991: https://blog.chordian.net/2018/06/29/from-jchs-special-collection/",
    "CSDb SID entry 17658, 'Visage' (Klaus Grøngaard/Link, 1989, Vibrants) — checked and confirmed to be an unrelated tune, not this editor: https://csdb.dk/sid/?id=17658",
    "data/composers/jch.json (folder[] entry: 'JCH in Visage's Editor', player tag 'a player by JO of Visage Studios')",
    "Sibling KB card, cross-checked for a possible (but unconfirmed, timeline-mismatched) identity link: knowledge/players/vibrants-jo.md",
    "Local dataset: 1 file tagged 'a player by JO of Visage Studios' — 'JCH in Visage's Editor', by JCH"
  ]
}
```

## Overview

This tag is an unusually literal, full-sentence Player-ID signature — "a
player by JO of Visage Studios" — attached to a single file, "JCH in
Visage's Editor", composed by **JCH** himself (the well-documented author
of [JCH NewPlayer](jch-newplayer.md)/[OldPlayer](jch-oldplayer.md)). It
records JCH using someone else's editor. JCH's own 2018 blog post
independently corroborates testing a real "Visage['s] music editor" in
February 1991, giving genuine (if thin) first-party provenance for the
"Visage" name — though it does not itself confirm "JO" as that editor's
author.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tag's unusual full-sentence
form is reproduced verbatim, not paraphrased; (2) JCH's own blog
corroborates a real "Visage" editor tested Feb 1991; (3) a tempting but
UNCONFIRMED identity link to the separately-carded Poul-Jesper Olsen "JO"
([[vibrants-jo]]) is explicitly flagged as unresolved due to a timeline
mismatch (that card's JO joined Vibrants c. 1992, a year after this Feb
1991 evidence) — do not merge without further evidence; (4) a same-named
but unrelated 1989 CSDb tune "Visage" is explicitly ruled out as a false
lead.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/jch.json`, `data/sidid.json`) plus a first-party blog
source and cross-reference against a sibling KB card. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), JCH's own blog,
a CSDb SID entry (ruled out as unrelated), local composer data, and the
sibling vibrants-jo.md card.
