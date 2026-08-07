# Padua's Music Mixer

```json
{
  "id": "padua-music-mixer",
  "name": "Padua's Music Mixer",
  "aliases": ["Padua's Music Mixer"],
  "authors": ["Pawel Soltysinski (Polonus)"],
  "released": "1991 (Padua)",
  "status": "stub",
  "platform": "Native C64 music editor. Closed scene tool (no public source located).",
  "csdb_release": 82618,

  "memory": {
    "load_address": "TODO: not documented publicly",
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
    "derives_from": ["music-assembler"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The word 'Mixer' in the tag is NOT evidence of digi/sample playback. This project's grouping is a bare filename regex (/digi|sample|mixer/i in scripts/dev/coverage.js), not a read of the SID's RSID flag or any inspected routine. Whether this player does digi/sample output at all is UNCONFIRMED (TODO).",
    "LINEAGE: SIDId's signature database keys this tool as '(Music_Mixer)' — name 'Music Mixer', author Pawel Soltysinski (Polonus), 'released 1991 Padua', reference CSDb 82618, comment 'Editor based on the Music Assembler player'. That comment is the sole basis for the derives_from edge to Music Assembler (card: music-assembler.md), which itself already lists Music_Mixer as a known downstream user of its player — this card is the first time that edge is actually wired both directions instead of just noted.",
    "The SIDId byTag key ('(Music_Mixer)') differs textually from this project's raw tag ('Padua's Music Mixer'), but author/group/year all line up — treated as the same tool, not a name-alone guess.",
    "CSDb release 82618 ('Music Mixer V6', 11 Oct 1991) formally titles the tool just 'Music Mixer' — 'Padua's Music Mixer' (this project's tag) is a descriptive form (group + tool), not the release's own title.",
    "PERSONAL/NICHE USE IN THIS DATASET: only 8 files, all by a single HVSC folder/composer ('Nebula' = handle of Wolfgang Reszel, credited on-file as 'Seesaw Widow' on 7 tunes and 'Tekl' on 1). Whether the tool saw wider scene adoption outside this HVSC subset is unknown here — only that within this collection it is effectively one composer's usage.",
    "Author Polonus (Pawel Soltysinski) is Polish, a member of Padua (from March 1991) and Quartet (founder, from June 1988) per his CSDb scener profile — code credit for Music Mixer V6 lists 'Polonus of Padua and Quartet'; music on the release's example tunes credited to Smart Monkey and Tracker of Padua.",
    "GROUP IDENTITY CHECK (task-flagged, verified via CSDb webservice, not assumed from the name): 'Padua' is NOT an Italian group despite the city-name resemblance. CSDb's own Group record (id 5, queried via scripts/lib/csdb-client.js getRelease/getGroup) gives BaseCountry 'Germany', founded March 1990, Grouptype 'Demo Group'. The three people credited on Music Mixer V6 (Polonus/code, Tracker/music, Smart Monkey/music) are all Poland-based Scener records, so at the time of this release the group's active roster skewed Polish even though the group itself is German-founded — worth stating precisely rather than calling it either 'Italian' or 'Polish'.",
    "PSID header data collected in passing while cross-checking the CSDb release (informational only, NOT written into Tier 3 fields): the release's 5 UsedSIDs (No_Easy.sid, Maruder.sid, Michael.sid, Brutal.sid, Saxophone.sid) all share LoadAddr $1000/InitAddr $1000/PlayAddr $1003 per CSDb's own SID metadata — consistent across all 5, but this is CSDb-recorded header metadata, not a disassembly-confirmed memory map, and is NOT the same 8-file set found tagged in this project's local dataset (that set is under composer folder Nebula, not Tracker/Smart_Monkey)."
  ],
  "sources": [
    "SIDId sidid.nfo, key '(Music_Mixer)' (name, author, 1991/Padua, CSDb reference, 'based on the Music Assembler player' comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 82618, 'Music Mixer V6' (title, date, code/music credits, group): https://csdb.dk/release/?id=82618",
    "CSDb scener Polonus (nationality, groups, roles): https://csdb.dk/scener/?id=823",
    "knowledge/players/music-assembler.md (sibling card; its quirks already note Music_Mixer as a SIDId-documented downstream user of the Music Assembler player, prior to this card existing)",
    "Local dataset: data/composers/*.json aggregation — 8 files tagged \"Padua's Music Mixer\" (full census, glob *.json across data/composers), all under composer folder Nebula (Wolfgang Reszel)",
    "CSDb XML webservice, group id 5 'Padua' (BaseCountry Germany, founded March 1990, Grouptype Demo Group) and release 82618 credits (Code: Polonus; Music: Tracker, Smart Monkey — all Scener Country Poland), queried live via scripts/lib/csdb-client.js getRelease(82618): https://csdb.dk/webservice/?type=release&id=82618",
    "Demozoo scener page for Polonus corroborates 'Music Mixer v6', C64 Tool, group Padua, Oct 1991, code credit: https://demozoo.org/sceners/29043/ (and production https://demozoo.org/productions/126594/)",
    "Lemon64 forum search for 'Music Mixer'/Padua/Polonus turned up no dedicated discussion thread — the only hit (\"Comparison of C64 Music Editors\", https://www.lemon64.com/forum/viewtopic.php?t=67248) does not mention this tool when fetched directly; no manual or format spec found on Lemon64 or Forum64 (forum64.de not searched directly due to language/login constraints, but general web search surfaced nothing)."
  ]
}
```

## Overview

Padua's Music Mixer (formally titled "Music Mixer V6" on its CSDb release) is
a native C64 music editor coded by **Pawel Soltysinski (Polonus)**, released
by the group **Padua** on 11 October 1991. Padua's own CSDb group record
gives its `BaseCountry` as **Germany** (founded March 1990) — this is a
correction against the assumption that the Italian-sounding name implies an
Italian group; the tool's actual credited people (coder Polonus, musicians
Tracker and Smart Monkey) are all Polish-based scener records, so "Padua" is
better read as a German-founded group with a Polish-heavy roster at the time
of this release, not a Polish or Italian group itself. SIDId's
signature database records it as built on the **Music Assembler** player (see
`knowledge/players/music-assembler.md`), which already independently noted
Music_Mixer as a downstream user of its engine — this card wires that edge.
In this project's local dataset it is a niche tool: **8 files, all from one
HVSC composer folder** (Nebula, the handle of Wolfgang Reszel, credited
on-file as "Seesaw Widow"/"Tekl") — concentration consistent with limited
adoption, at least within this collection.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "Mixer" name is **not** confirmation
of digi/sample playback (unverified, TODO); the **derives_from Music Assembler**
edge is SIDId-sourced and corroborated by the Music Assembler card's own notes;
and usage here is essentially **one composer's output** (8/8 files, full census
confirmed). Also load-bearing: **Padua is a German-founded demo group**
(CSDb `BaseCountry: Germany`), not an Italian or Polish group, despite the
city-name resemblance and its Polish-heavy roster on this specific release.

## Disassembly notes

None done here. No public memory map, entry points, or data format for this
player were found — same undocumented-internals situation as its parent,
Music Assembler.

## Verification

Not verified. All identity/provenance facts are SIDId- and CSDb-sourced
(cited above); every runtime/memory-map field is `TODO`. `status: stub`.

## Sources

See the `sources` array — SIDId's `(Music_Mixer)` entry, CSDb release 82618
and group 5 (queried live via `scripts/lib/csdb-client.js`), the CSDb scener
page for Polonus, Demozoo's corroborating production/scener pages, the
sibling `music-assembler.md` card, and a Lemon64 search that found no
dedicated discussion thread or documentation for this tool.
