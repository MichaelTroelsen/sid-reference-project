# a player by JO of Visage Studios

```json
{
  "id": "visage-studios-jo",
  "name": "a player by JO of Visage Studios",
  "aliases": ["a player by JO of Visage Studios"],
  "authors": ["JO — CONFIRMED via CSDb group 3652 as CSDb scener ID 8360 (handles JO / Marauder / Marauder Inc. / RAF), a German coder and founding member of Visage Studios. This is NOT Poul-Jesper Olsen of Vibrants/JO (CSDb scener ID 1926, Danish, handles Technic/Rock) — the two 'JO's are confirmed DIFFERENT people (see quirks)."],
  "released": "TODO: no release date confirmed for this specific tag's editor build. Strong circumstantial evidence (CSDb release 40237, 'Sequence Jammer 4', Visage Studios, March 1991, Code+Design by JO) points to this or a related earlier build as the tool in question, but JCH's own blog dates his test of 'Visage's music editor' to February 1991 — a month earlier than the only preserved Visage Studios 'Sequence Jammer' release on CSDb, and no Sequence Jammer 1-3 entries exist in the group's full 19-release CSDb catalogue, so an earlier/unpreserved build cannot be ruled out.",
  "status": "stub",
  "platform": "Native C64 tool, almost certainly Visage Studios' 'Sequence Jammer' — CSDb release 40237 ('Sequence Jammer 4', a 'C64 Tool', March 1991, released by Visage Studios) is Code+Design credited to JO (scener 8360) and uses JCH's own 1990 tune 'Ninjackie' as its demo SID, directly placing JCH and JO's tool in the same circle within a month of JCH's blog-recalled Feb 1991 test of 'Visage's music editor'. JO also self-references 'my Sequence Jammer' in a 2006 CSDb comment on a related Visage Studios release ('Music-Screen 001', CSDb release 37594). No SIDId record or standalone tool-info page exists under the literal tag name.",
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
    "FIRST-PARTY CORROBORATION FOUND: JCH's own blog (chordian.net, 'From JCH's Special Collection', 29 June 2018) states: \"I found my crappy test in Visage's music editor and a nice Vibrants intro by Maduplec that used the side-border... Both were from February 1991.\" This independently confirms a real editor associated with the name 'Visage' that JCH personally tested in Feb 1991.",
    "CSDb GROUP FOUND, RESOLVING 'VISAGE STUDIOS': CSDb group 3652, 'Visage Studios' (AKA 'Visage', short 'V') — a Swedish/German demo group, motto 'Lovely & Legal!', founded when group id 884 ('Riffs') 'slowly died middle/end of 1989'. Founders: JO, Hakan, Henke. 19 releases 1989-1991 (demos, tools, one music release), fully matching JCH's Feb 1991 timeframe. https://csdb.dk/group/?id=3652",
    "IDENTITY OF 'JO' NOW RESOLVED — CONFIRMED DIFFERENT FROM THE VIBRANTS/JO 'JO': CSDb's Visage Studios group page and two of its release credit lists (release 37594 'Music-Screen 001' and release 40237 'Sequence Jammer 4') both identify this group's 'JO' as CSDb scener ID 8360 — handles JO / Marauder / Marauder Inc. / RAF, country GERMANY. The KB's separately-carded 'JO' of Vibrants/JO (knowledge/players/vibrants-jo.md) is Poul-Jesper Olsen, CSDb scener ID 1926, handles Technic/Rock/JO, country DENMARK. Distinct scener IDs, distinct countries, distinct alternate handles — these are two different people who happened to share the two-letter handle 'JO'. This supersedes the previous 'unresolved, timeline-mismatch' flag: the timeline mismatch was actually a symptom of a real non-identity, not just weak evidence. No merge, no edge asserted (this is a same-name coincidence, not a lineage relationship).",
    "STRONG TOOL LEAD (not certain enough for `csdb_release`): CSDb release 40237, 'Sequence Jammer 4' (Visage Studios, C64 Tool, March 1991) — Code+Design credited to JO (scener 8360); its demo SID is JCH's own 1990 tune 'Ninjackie' (HVSC /MUSICIANS/J/JCH/Ninjackie.sid). JO himself, commenting on the related release 'Music-Screen 001' (CSDb release 37594, 1990, also Visage Studios, also JO-coded) under his CSDb login 'Marauder/GSS', writes: \"...later he founded Beatmachine... (watch out my Sequence Jammer;)\" — his own words treating 'Sequence Jammer' as his signature tool. This is very likely the 'Visage's music editor' JCH's blog recalls testing, but the only preserved CSDb release is v4 (March 1991), a month after JCH's recalled Feb 1991 test date, and no v1-3 entries exist in Visage Studios' CSDb catalogue — kept as a strong lead, not asserted as the confirmed underlying tool.",
    "A CSDb SID entry named 'Visage' (id 17658) exists, but is a 1989 TUNE by Klaus Grøngaard (handle Link, a Vibrants co-founder), not an editor or company — explicitly noted here to avoid a false merge; the tag under study refers to an EDITOR by 'JO' of Visage Studios, not this unrelated same-named tune.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for this tag or for 'Visage': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "JCH's own blog, 'From JCH's Special Collection' (29 June 2018) — first-party mention of 'Visage's music editor', dated Feb 1991: https://blog.chordian.net/2018/06/29/from-jchs-special-collection/",
    "CSDb group 3652, 'Visage Studios' (AKA Visage) — full member/founder/release list, fetched via scripts/lib/csdb-client.js getGroup(3652): https://csdb.dk/group/?id=3652",
    "CSDb release 37594, 'Music-Screen 001' (Visage Studios, 1990) — JO (scener 8360) Code+Design credit, and JO's own 2006 comment referencing 'my Sequence Jammer': https://csdb.dk/release/?id=37594",
    "CSDb release 40237, 'Sequence Jammer 4' (Visage Studios, March 1991) — JO (scener 8360) Code+Design credit; demo SID is JCH's own 'Ninjackie' (1990): https://csdb.dk/release/?id=40237",
    "CSDb scener profile cross-check: JO of Visage Studios = scener ID 8360 (Germany, handles JO/Marauder/Marauder Inc./RAF) vs. Poul-Jesper Olsen of Vibrants/JO = scener ID 1926 (Denmark, handles Technic/Rock/JO) — confirmed distinct people, via CSDb group/release XML (getGroup/getRelease)",
    "CSDb SID entry 17658, 'Visage' (Klaus Grøngaard/Link, 1989, Vibrants) — checked and confirmed to be an unrelated tune, not this editor: https://csdb.dk/sid/?id=17658",
    "data/composers/jch.json (folder[] entry: 'JCH in Visage's Editor', player tag 'a player by JO of Visage Studios'; full 270-file census of JCH's other player tags shows NO 'Vibrants/JO' usage, removing one possible circumstantial link to Poul-Jesper Olsen)",
    "Sibling KB card, cross-checked and now confirmed NOT the same 'JO': knowledge/players/vibrants-jo.md",
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
February 1991. CSDb group 3652, "Visage Studios" (AKA "Visage"), confirms
this was a real, small Swedish/German demo group active 1989-1991 —
founded by JO, Hakan and Henke when their previous group ("Riffs")
dissolved. This group's "JO" is CSDb scener ID 8360 (handles JO / Marauder
/ Marauder Inc. / RAF, Germany), directly credited as Code+Design on two
of the group's own releases, including "Sequence Jammer 4" (March 1991, a
"C64 Tool" whose demo SID is JCH's own tune "Ninjackie") — the most
plausible real-world referent for "Visage's music editor". Critically,
this scener ID is confirmed **distinct** from Poul-Jesper Olsen (scener ID
1926, Denmark, Vibrants/JO) — the two "JO"s are different people who
merely share a two-letter handle.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tag's unusual full-sentence
form is reproduced verbatim, not paraphrased; (2) JCH's own blog
corroborates a real "Visage" editor tested Feb 1991; (3) CSDb group 3652
("Visage Studios") is now identified, with its "JO" confirmed as CSDb
scener 8360 (Germany) — CONFIRMED DIFFERENT from Poul-Jesper Olsen's
"JO" ([[vibrants-jo]], scener 1926, Denmark) via distinct CSDb scener
records, resolving the prior open question with direct evidence rather
than the earlier circumstantial timeline-mismatch reasoning; (4) CSDb
release 40237 "Sequence Jammer 4" (Visage Studios' own tool, coded by
this JO, using a JCH tune as its demo) is a strong but not certain lead
for the actual editor underlying this tag; (5) a same-named but unrelated
1989 CSDb tune "Visage" is explicitly ruled out as a false lead.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/jch.json`, `data/sidid.json`) plus a first-party blog
source, CSDb's group/release XML webservice (`scripts/lib/csdb-client.js`),
and a resolved cross-reference against a sibling KB card. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), JCH's own blog,
CSDb group 3652 and two of its release records (37594, 40237), a CSDb SID
entry (ruled out as unrelated), local composer data (full JCH census), and
the sibling vibrants-jo.md card (now confirmed unrelated).
