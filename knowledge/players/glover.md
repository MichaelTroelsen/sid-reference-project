# Glover

```json
{
  "id": "glover",
  "name": "Glover",
  "aliases": ["Glover"],
  "authors": ["Lukasz Baran (Glover)"],
  "released": "No formal tool release — files tagged with this signature span 1997-2003 (per-file CSDb `Released` field, full census of all 11 files; see quirks)",
  "status": "stub",
  "platform": "Native C64 in-tune routine, not a distributed editor/tool. 10 of 11 files carry PSID Init=$1000/Play=$1003 (identical to their Load address); no standalone 'Glover' editor/tool release exists on CSDb, and the author (CSDb scener id 3860) was never a member of Kreciki, the group behind the earliest (1997) files using this tag — see quirks",
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
    "sidid.nfo's 'Glover' entry provides only AUTHOR — no comment describing a playback technique, unlike the 66 SIDId entries elsewhere in this dataset that do carry one. Nothing beyond authorship attribution is confirmed.",
    "Re-research pass, 2026-07-31: full census of all 11 tagged files' own CSDb `Released` fields (previous pass had only checked 6 of 11) corrects the attested date range from 1999-2003 to **1997-2003**. Five Kordiaukis files were missed by the earlier spot-check and are all dated '1997 Kreciki': 'Dn 3d' (CSDb sid 17027), 'Epilog' (17029), 'For Adwarp' (17036), 'Woodka' (17057) and 'Adwarp #5 (tune 3)' (44079, 'Released: 1997 Arise' per its own CSDb entry, distinct release credit from the other four). 'Dn 3d'/'Epilog'/'For Adwarp'/'Woodka' were each also used in 'The Adwarp' (CSDb release 77830, a diskmag released at Center Party 1997, Pleszew, Poland, 1997-07-06) confirming the 1997 date independently of the SID entry's own field. This follows the exact failure pattern documented in knowledge/EXTRACTION-TEMPLATE.md's census table (dates skew late when sampled) — full source: https://csdb.dk/webservice/?type=sid&id=17027&depth=4 etc. via scripts/lib/csdb-client.js.",
    "Re-research pass, 2026-07-31: PSID header census (Load/Init/Play, via csdb-client.js `type=sid`) across all 11 files shows 10 of 11 share Load=$1000 (4096), Init=$1000 (4096), Play=$1003 (4099) — i.e. init and play both sit at/near the load address, consistent with a small in-tune routine rather than a relocatable library. The one outlier is Kordiaukis's 'Double Sided' (CSDb sid 17028): Load=$1000 but Init=$1F21 (7969), Play=$1F29 (7977) — a materially different entry-point layout from the other 10 files sharing this tag, meaning 'Double Sided' may not share the exact same binary routine despite carrying the same SIDId signature. This is PSID header metadata only, not a disassembly fact, and is recorded here rather than in the Tier 3 `entry`/`memory` fields.",
    "Re-research pass, 2026-07-31: negative checks recorded. (1) Lukasz Baran/'Glover' (CSDb scener id 3860) was never a member of Kreciki (CSDb group id 656, founded 1996, Poland) per his own CSDb scener record (MemberOf lists only Palladium, Snake, Crystal Sound, Samar Productions) — yet 5 of the 11 tagged files are Kreciki-affiliated Kordiaukis tunes from 1997, meaning the routine crossed group lines informally rather than via any documented tool release or membership. (2) Web searches for 'Glover C64 sid editor' (general web, Lemon64, forum64.de-targeted queries) returned no result naming a standalone 'Glover' editor/tool; Kreciki's own CSDb group release list (checked to depth 2) contains diskmags, demos and graphics but no music tool. No positive evidence found; recorded as a negative rather than left unchecked.",
    "Drift-recheck pass, 2026-08-07: re-pulled all 11 files' CSDb sid entries (Released/Load/Init/Play), the Samar Productions and Kreciki group release lists (now 700 and 39 releases respectively, re-scanned for any tool/editor with 'Glover' in the credits), and scener 3860's MemberOf list, all live via scripts/lib/csdb-client.js — every value is unchanged from the 2026-07-31 pass, no new tool or trivia surfaced, no drift. One additional negative source checked for the first time: Samar's own current tools page (https://samar.group/index.php?page=tools) lists only 'C64 Debugger' and 'MG Tracker' (credited to Matt Gray's Dominator replayer) — no 'Glover' tool, corroborating the existing 'no standalone tool release' finding from a source not previously consulted (the author's own group's site, not just CSDb). Also confirmed CSDb sid 13597 ('For North Party', 1997, Glover's earliest known tune) is correctly excluded from this family: its own player tag in data/composers/glover.json is 'JCH_NewPlayer_V20', a third, distinct signature, not 'Glover' — so the 11-file census remains exhaustive and correct."
  ],
  "sources": [
    "sidid:Glover (author Lukasz Baran (Glover); no name/released/reference/comment) — data/sidid.json and https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "knowledge/COVERAGE.md — family 'Glover', rank 18, 11 files, single grouped raw tag Glover",
    "Local dataset: data/composers/{glover,kordiaukis,manex}.json — 11 files across 3 composers (Kordiaukis 6, Glover 4, Manex 1), matching knowledge/COVERAGE.md exactly",
    "CSDb sid entry 17028, 'Double Sided' by Kordiaukis, 1999 Kreciki/Fraction, Init=$1F21/Play=$1F29 (outlier, see quirks): https://csdb.dk/sid/?id=17028",
    "CSDb sid entry 19645, 'Windbreak' by Manex, 2000 Anubis: https://csdb.dk/sid/?id=19645",
    "CSDb sid entry 13598, 'For Ramos' by Glover, 2001 Samar Productions: https://csdb.dk/sid/?id=13598",
    "CSDb sid entry 13608, 'Inside' by Glover, 2002 Samar Productions: https://csdb.dk/sid/?id=13608",
    "CSDb sid entry 13621, 'Ode to Wizard' by Glover, 2002: https://csdb.dk/sid/?id=13621",
    "CSDb sid entry 13590, 'Arranged' by Glover, 2003 Samar Productions: https://csdb.dk/sid/?id=13590",
    "CSDb sid entry 17027, 'Dn 3d' by Kordiaukis, 1997 Kreciki, used in 'The Adwarp' diskmag (release 77830, Center Party 1997): https://csdb.dk/sid/?id=17027",
    "CSDb sid entry 17029, 'Epilog' by Kordiaukis, 1997 Kreciki: https://csdb.dk/sid/?id=17029",
    "CSDb sid entry 17036, 'For Adwarp' by Kordiaukis, 1997 Kreciki: https://csdb.dk/sid/?id=17036",
    "CSDb sid entry 17057, 'Woodka' by Kordiaukis & Baldhead, 1997 Kreciki: https://csdb.dk/sid/?id=17057",
    "CSDb sid entry 44079, 'Adwarp #5 (tune 3)' by Kordiaukis, 1997 Arise: https://csdb.dk/sid/?id=44079",
    "CSDb group 201, Samar Productions (Poland) — no standalone Glover tool/editor release found: https://csdb.dk/group/?id=201",
    "CSDb group 656, Kreciki (Poland, founded 1996) — release list checked to depth 2, no music tool/editor found: https://csdb.dk/group/?id=656",
    "CSDb scener 3860, Lukasz Baran/'Glover' — MemberOf lists Palladium, Snake, Crystal Sound, Samar Productions only (never Kreciki): https://csdb.dk/scener/?id=3860",
    "knowledge/players/glover-newplayer.md — the separate, JCH-derived 2000 fork by the same author, cross-referenced here to avoid conflation",
    "Re-research pass 2026-07-31: web searches for a standalone 'Glover' C64 sid editor/tool (general web, Lemon64-targeted, forum64.de-targeted) — no result found naming one; treated as a checked negative, not an absence of research",
    "Drift-recheck pass 2026-08-07: re-fetched all 11 CSDb sid entries, both group pages (Samar 700 releases, Kreciki 39), and scener 3860 live via scripts/lib/csdb-client.js — every value unchanged, no drift found. New source checked: Samar Productions' own tools page, https://samar.group/index.php?page=tools (lists only 'C64 Debugger' and 'MG Tracker'; no Glover tool). Also confirmed CSDb sid 13597 ('For North Party', 1997, https://csdb.dk/sid/?id=13597) is correctly excluded from this family — its player tag is 'JCH_NewPlayer_V20', not 'Glover'"
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
"earlier version, superseded" pair — files tagged plain "Glover" run from 1997
(five Kordiaukis/Kreciki tunes, per a full census of all 11 files' own CSDb
`Released` fields — corrected 2026-07-31 from an earlier 6-file sample that
had missed these and read the range as 1999-2003) through 2003 (Glover's own
later tunes), so Glover appears to have kept using this separate, apparently
unpublished routine in parallel with his JCH-fork work rather than retiring
it. No CSDb release names a standalone tool for this signature, and three
composers (Kordiaukis, Glover, Manex) share it — too small and undocumented a
sample to say more than "a routine Glover wrote and occasionally lent out."
Notably, Glover himself was never a member of Kreciki (the group behind the
earliest, 1997 files), so the routine's spread even predates and crosses his
own known group affiliations.

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
(composer/file counts, release dates establishing the 1997-2003 span via a
full census of all 11 files, not a sample) are confirmed, from cached SIDId
data and individual CSDb sid-entry pages. PSID header values (Load/Init/Play)
were also censused across all 11 files and recorded as `quirks`, not as
Tier 3 facts. No runtime fact (memory map, entry points, data format, effect
encoding) has been established, and none is guessed. No `edges` are
asserted, since no source documents a relationship between this signature
and any other player, including `glover-newplayer`.

## Sources

See the `sources` array — SIDId's `Glover` entry (author-only), all 11
individual CSDb sid-entry pages (full census, via `scripts/lib/csdb-client.js`)
used to establish the 1997-2003 date range and PSID header values, the Samar
Productions and Kreciki CSDb group pages (checked for and not finding a
standalone tool release), Glover's own CSDb scener profile (group memberships
checked against Kreciki), and this project's own `data/composers/*.json` for
usage counts.
