# FAME

```json
{
  "id": "fame",
  "name": "FAME",
  "aliases": ["FAME"],
  "authors": ["Adam Bulka"],
  "released": "1988 (F.A.M.E. group)",
  "status": "stub",
  "platform": "Native C64. A hand-coded music/player routine used internally by the demoscene/cracking group F.A.M.E. (\"Fallacious Antrophoid Music Entertainment\"), not a distributed standalone editor or tool — no CSDb tool/release entry for it was found separately from the tunes themselves.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no fixed constant found — per-file PSID load address varies (e.g. $7000 on the 'My Instinct' SID, per CSDb: https://csdb.dk/sid/?id=12043)",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: per-file PSID header (e.g. $7003 on 'My Instinct', per CSDb sid entry #12043) — not confirmed as a fixed player convention",
    "play": "TODO: per-file PSID header (e.g. $7000 on 'My Instinct') — not confirmed as a fixed player convention"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's comment for this tag reads: \"Player used by the group F.A.M.E. (Fallacious Antrophoid Music Entertainment)\" — i.e. this is a group-internal routine, not a published/general-purpose editor. No separate CSDb tool/release page for a 'FAME' editor was found; csdb_release is left null rather than guessed.",
    "Composer concentration in this dataset (54 files, 4 composers) strongly supports the 'group-internal routine' reading: Michael Hendriks 37/54 (69%), Holger Knipping 8/54, a composer entry literally named 'FAME' 8/54, and Ramiro Vaca 1/54. This is the classic 'few composers / one dominant' signature of a personal or small-scene routine, not a widely adopted tool (contrast a spread-out family like Rob Hubbard's, 51 composers).",
    "SIDId lists the author as Adam Bulka (presumably the routine's coder), but the dataset's most prolific user by far is Michael Hendriks, who performed under the alias/handle 'FAME' and is credited on CSDb as both Coder and Musician — group member roles for the F.A.M.E. group (Adam Bulka, Holger Knipping, Michael Hendriks; Germany, active ~1988-1991) per Demozoo. Do not conflate the routine's author with its main user — both are documented separately, not asserted as the same claim.",
    "The one directly-inspected file ('My Instinct', Michael Hendriks & Adam Bulka, 1989, Masters' Design Group, CSDb sid #12043) shows load/init/play addresses of $7000/$7003/$7000 — recorded here only as a per-file data point, NOT generalized into a fixed memory-map fact for the whole family."
  ],
  "sources": [
    "SIDId (via data/sidid.json byTag['FAME']): author Adam Bulka, released '1988 F.A.M.E.', comment 'Player used by the group F.A.M.E. (Fallacious Antrophoid Music Entertainment)'",
    "Local dataset aggregate (data/composers/*.json, folder[].player === 'FAME'): 54 files across 4 composers — Michael Hendriks 37, Holger Knipping 8, 'FAME' 8, Ramiro Vaca 1 — single raw tag 'FAME', no public source flagged",
    "CSDb sid entry (My Instinct, Michael Hendriks & Adam Bulka, 1989 Masters' Design Group): https://csdb.dk/sid/?id=12043 — load $7000 / init $7003 / play $7000, HVSC path /MUSICIANS/F/FAME/My_Instinct.sid, a scene comment calls it 'True FAME signature'",
    "CSDb scener profile, Michael Hendriks (Germany; functions Coder, Musician; alt handles Brian/Mike/Bat): https://csdb.dk/scener/?id=2458",
    "CSDb scener profile, Adam Bulka (Germany; function Musician; credits 1989-2018): https://csdb.dk/scener/?id=16887",
    "Demozoo group page, F.A.M.E. ('Fallacious Antrophoid Music Entertainment'; members Adam Bulka, Holger Knipping, Michael Hendriks; Germany; active ~1988-1991): https://demozoo.org/groups/60763/",
    "Remix64 composer page, Michael Hendriks (FAME alias; game credits incl. X-Out, Chambers of Shaolin, Strike Force, Paranoimia, Sphinx 2): https://remix64.com/composer/michael-hendriks/",
    "data/players.json (curated DeepSID player list) has no 'FAME' entry — confirms this is not one of DeepSID's curated 129 players, only Player-ID/SIDId-identified"
  ]
}
```

## Overview

FAME is a native C64 music/player routine associated with the demoscene group
F.A.M.E. ("Fallacious Antrophoid Music Entertainment", active roughly
1988-1991, Germany), whose members were Adam Bulka, Holger Knipping and
Michael Hendriks. SIDId credits Adam Bulka as the routine's author. In this
project's dataset it is a small, concentrated family: 54 files across only 4
composers, with Michael Hendriks (who performed under the FAME handle)
responsible for 69% of them. That concentration, combined with the absence of
any standalone CSDb tool/release page for a "FAME" editor, points to a
group-internal composing routine rather than a published, widely-adopted
tracker. It is not one of DeepSID's curated 129
players (`data/players.json` has no entry for it); it is identified purely
via Player-ID / SIDId tagging.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) this looks like a
group-internal routine, not a released tool — composer concentration (4
composers, one at 69%) is the signal, same read as the Rob Hubbard case
described in `knowledge/EXTRACTION-TEMPLATE.md`; (2) the routine's credited
author (Adam Bulka, per SIDId) and its dominant user in this dataset (Michael
Hendriks, who used "FAME" as a handle) are two distinct, separately-cited
facts — do not merge them into one unsupported claim; (3) the one file
inspected directly on CSDb shows a $7000/$7003/$7000 load/init/play triple,
but this is recorded as a single data point, not generalized into a family
memory map.

## Disassembly notes

None. No public source or prior disassembly for this routine was found. A
future pass would need to disassemble a representative FAME-tagged `.sid`
(e.g. "My Instinct", CSDb sid #12043, or one of Michael Hendriks' other 36
FAME-tagged files) from its PSID init/play addresses and trace it through
`sidm2-siddump` — that is the only route to real memory-map/format facts
here, since no source is available.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
approximate release year, group membership, composer concentration in this
dataset) are confirmed, from SIDId and CSDb/Demozoo. Every Tier 3 runtime
field is left `TODO` on purpose: no source or disassembly was available or
attempted in this pass.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the local composer-file
aggregate, CSDb (one sid entry + two scener profiles), Demozoo's F.A.M.E.
group page, and Remix64's Michael Hendriks composer page.
