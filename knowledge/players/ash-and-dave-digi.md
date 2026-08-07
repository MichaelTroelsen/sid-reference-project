# Ash&Dave_Digi

```json
{
  "id": "ash-and-dave-digi",
  "name": "Ash&Dave_Digi",
  "aliases": ["Ash&Dave_Digi"],
  "authors": ["Ash & Dave — Ashley Routledge & Dave Saunders (real names not shown on CSDb's group page, but given as the file Author field on all 4 locally-tagged SIDs, and independently corroborated by gamesthatwerent.com/MobyGames)"],
  "released": "TODO: no explicit player/tool release date found; group formed 1987 per CSDb. Full census of all 4 tagged files' own CSDb `Released` fields: \"Digital Acid\" 1988 Ash & Dave (earliest; CSDb sid id 235), \"Dragon Breed\" 1990 Activision (sid id 31373), \"Daffy Duck (intro)\" 1992 Hi-Tec (sid id 52191), \"Digital Acid (Zaw Remix)\" 1995 Zaw Productions (sid id 30174) — these are each tune's own attested release, not a tool-release date",
  "status": "stub",
  "platform": "Native C64, in-house routine — not a released standalone editor/tool: no dedicated CSDb tool/release entry found under this name. gamesthatwerent.com's 2015 Ash & Dave asset-recovery article independently confirms an in-house \"SFX editor\" existed among Ashley Routledge's preserved disks, noting it was possibly used across several of the duo's titles but uncertain whether it was ever released (even informally, e.g. onto Compunet) — consistent with, though not proven identical to, this digi routine.",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null) — everything here comes from this project's own composer aggregation plus CSDb group/release pages.",
    "Ash & Dave is a UK demo/game-dev DUO (CSDb group id 871, est. 1987, alternate name 'Digital Design'), credited on their CSDb group page as having 'done some commercial games for f.e. Activision' — i.e. a coder-composer pair, not a distributed tool vendor. No dedicated 'Ash & Dave Digi' tool/editor release was found on CSDb.",
    "Real corroborating evidence for the 'digi' label: CSDb's release page for 'Digital Acid!' (1988, CSDb release 6636, credited 'Ash' and 'Dave' both Code+Music) carries a comment that the music is 'a sample-mix of \"Humanoid\" by Stakker' — i.e. this specific locally-tagged title (also present here as 'Digital Acid') is independently attested as a sample-based track, not just filename-suggestive.",
    "Only 4 files / 3 composers locally: Ash_and_Dave themselves (2: 'Daffy Duck (intro)', 'Digital Acid'), Martin Walker (1: 'Dragon Breed' — a Thalamus/Ocean-era composer who otherwise built his OWN player for Armalyte per a Commodore Format Archive interview, so this one credit looks like borrowed/reused code rather than his usual routine), and Waz (1: 'Digital Acid (Zaw Remix)' — a remix of Ash & Dave's own 'Digital Acid', consistent with reusing their sample data/routine rather than an independent tool adoption). Concentrated usage, consistent with a personal/small-circle routine rather than a published tool.",
    "CSDb id-namespace note: Ash & Dave's GROUP id (871) coincidentally collides numerically with an unrelated RELEASE id (871 = 'Digi-Organizer V.1' by Padua) — different CSDb namespaces, verified not to be the same page; do not conflate.",
    "Full census (2026-07-31) of all 4 tagged files' CSDb sid entries (type=sid webservice, ids 235/31373/52191/30174) confirms the 3-composer/4-file count already recorded and gives each tune's own `Released` field: Digital Acid 1988 Ash & Dave, Dragon Breed 1990 Activision, Daffy Duck (intro) 1992 Hi-Tec, Digital Acid (Zaw Remix) 1995 Zaw Productions. No 5th file or hidden cluster found. Every tagged file's own `Author` field also reads 'Ash Routledge & David Saunders' for the two Ash&Dave-composed tracks — real names present in local data even though CSDb's group page itself only shows the handles.",
    "gamesthatwerent.com's 2015 asset-recovery article (disks loaned by Ashley Routledge) independently mentions an in-house 'SFX editor' among the recovered files, 'not sure yet if this was released onto Compunet, or if this was just done for Ash n Dave's own work' — supports (but does not prove identical to) the in-house/unreleased-tool read of this digi routine.",
    "UPDATE 2026-08-07 (drift recheck, no other changes found): a Lemon64 forum post by Warren Pilkington (Waz — himself one of the 3 local composers, credited for 'Digital Acid (Zaw Remix)') states the locally-tagged 'Daffy_Duck_intro.sid' was 'also used in the tape loading intro to Slicks by Codemasters as well' — independent scene-insider corroboration that this specific digi track/routine was reused across another Ash & Dave title, consistent with gamesthatwerent.com's 'may well have been used on a number of titles' claim. Slicks is not itself a locally-tagged file, so this does not change the 4-file/3-composer census."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Ash&Dave_Digi\"",
    "CSDb group Ash & Dave (United Kingdom, est. 1987, alt. name 'Digital Design'): https://csdb.dk/group/?id=871",
    "CSDb release 'Digital Acid!' (1988, Ash+Dave, Code+Music; comment: sample-mix of 'Humanoid' by Stakker): https://csdb.dk/release/?id=6636",
    "Commodore Format Archive — Martin Walker interview (built his own player/editor for Armalyte, 1988 Thalamus): https://commodoreformatarchive.com/the-martin-walker-interview/",
    "Local dataset: 4 files tagged Ash&Dave_Digi across 3 composers — Ash_and_Dave (2), Martin Walker (1), Waz (1) — data/composers/*.json aggregation",
    "data/composers/ash-and-dave.json, martin-walker.json, waz.json (profile country/csdb id)",
    "CSDb webservice type=sid, ids 235, 31373, 52191, 30174 (full census of tagged files' own Released/Author fields): https://csdb.dk/webservice/?type=sid&id=235 etc.",
    "gamesthatwerent.com — 'Ash and Dave assets' (2015 disk-preservation article, mentions an in-house SFX editor): https://www.gamesthatwerent.com/2015/12/ash-and-dave-assets/",
    "MobyGames — Ashley Routledge (real name corroboration): https://www.mobygames.com/person/174184/ashley-routledge/",
    "Lemon64 forum — 'List of C64 games which use sampling/\"4th channel\"' (post by Warren Pilkington/Waz, 2016-03-25, notes Daffy_Duck_intro.sid reused in Slicks' tape loading intro): https://www.lemon64.com/forum/viewtopic.php?t=60061"
  ]
}
```

## Overview

Ash&Dave_Digi is the raw Player-ID tag for a digi/sample-playback routine
associated with the British demo/game-coding duo **Ash & Dave** — Ashley
Routledge & Dave Saunders (CSDb group 871, formed 1987, also credited for
commercial Activision work). It appears in only **4 files across 3
composers**, all confirmed by a full census of the tagged files' CSDb sid
entries: Ash_and_Dave themselves (2, "Digital Acid" 1988 and "Daffy Duck
(intro)" 1992 Hi-Tec), Martin Walker (1, "Dragon Breed" 1990 Activision —
otherwise known for his own custom Armalyte player), and Waz (1, "Digital
Acid (Zaw Remix)" 1995 Zaw Productions). No SIDId entry exists for the tag,
and no dedicated CSDb tool/editor release was found — this looks like
in-house code rather than a distributed product, native C64 (not a
cross-platform editor). Unlike several sibling tags in this batch there IS
independent corroboration of the "digi" label: CSDb's own release comment
on "Digital Acid!" (1988) states the music is "a sample-mix of 'Humanoid'
by Stakker," and a 2015 disk-preservation article (gamesthatwerent.com)
separately mentions an in-house Ash & Dave "SFX editor" of uncertain
release status. No tool-release date is known; the earliest attested use
of the tag is 1988 ("Digital Acid"). Drift recheck (2026-08-07): a Lemon64
post by composer Waz independently confirms the "Daffy Duck (intro)"
sample was reused in Codemasters' *Slicks* loading intro — further
corroboration of cross-title reuse, though *Slicks* is not itself a
locally-tagged file, so the 4-file/3-composer census is unchanged.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the sample-mix claim is
corroborated by a CSDb release comment on the actual locally-tagged track,
not just the filename; (2) extremely small footprint (4 files/3 composers)
with the two non-Ash&Dave uses both looking like one-off borrowed-code
cases rather than independent tool adoption; (3) no CSDb tool/editor page
exists for a standalone "Ash & Dave Digi" product.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus CSDb group/release pages
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — CSDb group page for Ash & Dave, the "Digital
Acid!" release page and its sample-mix comment, the CSDb sid webservice
records for all 4 tagged files (census), the Martin Walker interview, the
gamesthatwerent.com disk-preservation article, MobyGames, and the local
composer aggregation.
