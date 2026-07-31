# SounDemon

```json
{
  "id": "soundemon",
  "name": "SounDemon",
  "aliases": ["SounDemon"],
  "authors": ["Otto Järvinen (SounDemoN)"],
  "released": "TODO: no tool-release date exists (never packaged as a product). Census of all 7 locally tagged files' CSDb `Released` fields: 2001 (Incora; Psycho Killer), 2001 (Moral of the Day, Dekadence/Church of 64), 2004 (1K Tune), 2005 (Bojojoing), 2006 (Tense Years, Onslaught), 2008 (Iloliemi) — earliest attested use 2001, not a release date",
  "status": "stub",
  "platform": "Native C64 in-house routine, confirmed by the author: \"I seldom reuse a player because they are typically coded for a specific tune\" — not a released standalone editor. Otto Järvinen used Turbo Assembler to edit the player source and music data directly per production (CHIPFLIP interview, 2009: https://chipflip.wordpress.com/2009/07/06/interview-with-soundemon-the-sound-chip-hacker/)",
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
    "SIDId's entry for the raw tag 'SounDemon' carries only an AUTHOR line (Otto Järvinen (SounDemoN)) — no NAME, reference, or comment fields (deepsid_dl/sidid.nfo). The absence of a NAME/reference is itself a signal this was never packaged/released as a titled standalone tool, consistent with a personal in-house routine rather than a published editor. No CSDb tool/release page under 'SounDemon' as a product was found in this pass.",
    "Single-composer, single-country concentration: all 7 files in the local dataset are by SounDemon himself (Otto Järvinen, Finland, CSDb scener 1257) — a textbook personal-routine signature, not a widely shared tool.",
    "SounDemoN is otherwise a well-known and prolific Finnish SID composer/coder (member of various demoscene groups per CSDb); do not confuse this bare-name Player-ID signature with any of his other, separately-tagged work — this card covers only the raw 'SounDemon' tag as it appears in the local dataset.",
    "Direct author confirmation of the 'personal routine, not a tool' hypothesis: \"I seldom reuse a player because they are typically coded for a specific tune\" (CHIPFLIP interview, 2009). He edited player source and music data together in Turbo Assembler per production, rather than authoring against a fixed, reusable editor format.",
    "CSDb scener-page trivia (attributed to CyberBrain): \"This dude made a 4 rasterline player!\" — a claim about extreme playback efficiency, not independently verified here (https://csdb.dk/scener/?id=1257).",
    "Census of PSID header load/init/play addresses across all 7 tagged files (via CSDb webservice, header metadata only, NOT a disassembly fact — do not promote to Tier 3): 1K Tune load=$1000 init=$1000 play=$1003; Bojojoing load=$1000 init=$1000 play=(none, PSID play vector unset); Iloliemi load=$1000 init=$1000 play=$1003; Incora load=$A000 init=$A000 play=$A003; Moral of the Day load=$1C00 init=$1C00 play=$1C03; Tense Years load=$2C00 init=$2C00 play=$2C03; Psycho Killer load=$0A00 init=$1A08 play=$1A1A (init/play NOT at load — an outlier among the 7, unexplained in this pass). Six of seven share the load=init, play=init+3 pattern typical of a small fixed jump table at the routine's start; each is placed at a different address per production, consistent with per-tune hand-assembly rather than a fixed-address shared driver.",
    "All 7 files were released via Dekadence (5 files, 2001-2008) or Onslaught (1 file, 2006) demo/game productions, per CSDb `Released`/`UsedIn` fields — consistent with per-production authorship, not a standalone tool distributed independently of a demo."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Otto Järvinen / SounDemoN (Finland): https://csdb.dk/scener/?id=1257",
    "Local dataset: 7 files tagged SounDemon, all by SounDemon himself — see data/composers/soundemon.json",
    "CSDb webservice, type=sid, depth=1/2, for all 7 files' Released/LoadAddr/InitAddr/PlayAddr (ids 25808, 25809, 25817, 25842, 25852, 25868, 39249): https://csdb.dk/webservice/?type=sid&id=<id>",
    "CHIPFLIP interview with SounDemon, 'the Sound Chip Hacker' (2009-07-06), author's own account of per-tune, non-reused player coding practice: https://chipflip.wordpress.com/2009/07/06/interview-with-soundemon-the-sound-chip-hacker/"
  ]
}
```

## Overview

`SounDemon` is the raw Player-ID tag for a routine attributed to
**Otto Järvinen**, handle **SounDemoN**, a Finnish scener (CSDb scener 1257).
Locally it appears in only **7 files, all by SounDemon himself** — a strong
personal-routine signature. SIDId's entry for the tag has only an `AUTHOR`
line, no `NAME`/`reference`/`comment`, consistent with an in-house routine
that was never packaged and released as a titled, standalone tool. All 7
tagged files were censused directly against CSDb (webservice `type=sid`):
they span 2001-2008, released via the Dekadence (5 files) and Onslaught
(1 file) groups, with no tool-release date because none exists — a 2009
CHIPFLIP interview has the author stating directly that he "seldom
reuse[s] a player because they are typically coded for a specific tune,"
confirming platform as a native-C64, per-production in-house routine
rather than a distributed editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) single-composer, single-country
concentration (7/7 files by SounDemon himself) marks this as a personal
routine, not a published tool; (2) no dedicated CSDb tool/release page was
found under this name; (3) SounDemoN is a well-known, prolific composer more
broadly — this card is scoped strictly to the bare `SounDemon` Player-ID tag,
not his whole body of work (most of which likely uses other, separately
tagged players); (4) the author's own 2009 CHIPFLIP interview statement is
direct, first-party confirmation of the personal-routine hypothesis, not
inference from absence of data; (5) census of PSID header addresses across
all 7 files shows 6/7 sharing a load=init/play=init+3 jump-table pattern at a
different address per file, and one outlier (Psycho Killer, init/play far from
load) — header metadata only, not a disassembly fact.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/soundemon.json`, `data/sidid.json`), a full census of all 7
tagged files against the CSDb webservice (`type=sid`), the CSDb scener page,
and a 2009 author interview (CHIPFLIP). `status: stub` — no runtime fact has
been confirmed by disassembly or trace; Tier 3 remains untouched.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for SounDemon,
the CSDb webservice census of all 7 tagged files, the CHIPFLIP author
interview, and the local composer aggregation.
