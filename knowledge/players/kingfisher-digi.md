# KingFisher_Digi

```json
{
  "id": "kingfisher-digi",
  "name": "KingFisher_Digi",
  "aliases": ["KingFisher_Digi"],
  "authors": ["King Fisher (Sweden, Triad; real name not disclosed on CSDb)"],
  "released": "TODO: no explicit driver/tool release date found (personal in-house routine, no separate CSDb tool/release entry exists). The 4 census-confirmed KingFisher_Digi-tagged tunes' own CSDb 'Released' fields span 1990-04 (Keep This Frequency Clear, sid id 16773) to 1992-07 (Red Storm, sid id 37623), all credited to Triad — earliest-tune-attested, not a tool release date. Corrects an earlier draft of this card that cited an unrelated 1988 'Ninja Music II' credit, which is not among King Fisher's own SID files at all (confirmed via full census of data/composers/fisher-king.json, 18 files)",
  "status": "stub",
  "platform": "Native C64 in-house digi/sample routine embedded in King Fisher's own Triad-era tracks (1990-1992) — no dedicated CSDb tool/release entry under this name found; searched CSDb webservice (scener/release lookups), general web search, Lemon64 (lemon64.com), and Codebase64. Modest corroborating (not authoritative) signal: 'Keep This Frequency Clear' (1990) was included in the 1993 compilation 'Digi Ripp #02' by Noice (https://csdb.dk/release/?id=171530), a disk explicitly compiling ripped digi tunes — consistent with sample-playback technique, though that compilation's own 'Ripping' credit belongs to a different scener (Devil), not King Fisher, so this remains circumstantial",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb research.",
    "Full census of all 4 tagged files (data/composers/fisher-king.json, cross-checked against CSDb sid entries): Keep_This_Frequency_Clear.sid (csdb id 16773, Released '1990 Triad', co-authored with Hans Axelsson), Red_October.sid (id 37624, '1991 Triad'), Red_Storm.sid (id 37623, '1992 Triad'), Utopia.sid (id 16782, '1991 Triad'). An earlier draft of this card cited an unrelated 1988 'Ninja Music II' CSDb scener credit ('Code, Graphics, Ripping') as weak digi-technique evidence — Ninja Music II is NOT among King Fisher's 18 own SID files at all (confirmed via full folder census), so that citation was replaced rather than repeated.",
    "New corroborating (still circumstantial) signal for the 'digi' label: Keep_This_Frequency_Clear.sid was reused in the 1993-05-23 compilation 'Digi Ripp #02' by group Noice (https://csdb.dk/release/?id=171530) — a disk explicitly compiling ripped/digi tunes, crediting King Fisher under 'Music' (not 'Ripping'; that credit there belongs to a different scener, Devil). Consistent with sample-playback technique but not a technical confirmation.",
    "4 files, 1 composer: Fisher King ('Keep This Frequency Clear', 'Red October', 'Red Storm', 'Utopia') — a personal routine by usage pattern, not a published tool. Confirmed no dedicated CSDb tool/release entry exists for 'KingFisher_Digi' (CSDb webservice search + general web search, checked Lemon64 and Codebase64 by name; no hits).",
    "Lemon64 has an interview thread 'King Fisher of Triad interviewed' (https://www.lemon64.com/forum/viewtopic.php?t=19160, pointing to an external c64hq.com interview not independently checked) and Remix64 hosts a full interview (https://remix64.com/interviews/interview-kingfisher.html) in which King Fisher/Linus Walleij describes using existing tools ('SoundTracker 64 and Future Composer with TDM from Triad' from 1988, later 'SoundTracker on Linux, and software synthesizers, wave editors') — neither interview mentions a self-written digi/sample routine or the name 'KingFisher_Digi'.",
    "Codebase64's SID programming index credits 'Linus Wallej (King Fisher/Triad)' with 'A SID Player Routine' — pseudocode for a MIDI-controlled SID player (https://codebase.c64.org/doku.php?id=base:sid_programming) — a different, MIDI-related player routine, not digi/sample playback; recorded as general-credibility context only, not evidence for this tag.",
    "King Fisher (real name Linus Walleij per data/composers/fisher-king.json's DeepSID profile; CSDb's own scener page does not disclose a real name field) is a Swedish scener, current group Triad (joined 9-1990), former Byterapers/Mute 101/Rebels/Royalty/The Zaints; CSDb notes he later became a Linux kernel subsystem maintainer (top-10 committer in 2016) — trivia, not player-relevant."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"KingFisher_Digi\"",
    "data/players.json — confirmed no curated entry for \"KingFisher_Digi\" or \"KingFisher\"",
    "CSDb scener King Fisher/Triad: https://csdb.dk/scener/?id=659 (via scripts/lib/csdb-client.js, type=scener)",
    "CSDb sid entries for all 4 census-confirmed files (via scripts/lib/csdb-client.js, type=sid): https://csdb.dk/sid/?id=16773 (Keep This Frequency Clear), https://csdb.dk/sid/?id=37624 (Red October), https://csdb.dk/sid/?id=37623 (Red Storm), https://csdb.dk/sid/?id=16782 (Utopia)",
    "CSDb release entry for 'Digi Ripp #02': https://csdb.dk/release/?id=171530",
    "Lemon64 interview thread: https://www.lemon64.com/forum/viewtopic.php?t=19160",
    "Remix64 interview: https://remix64.com/interviews/interview-kingfisher.html",
    "Codebase64 SID programming index: https://codebase.c64.org/doku.php?id=base:sid_programming",
    "Local dataset: 4 files tagged KingFisher_Digi, 1 composer (Fisher King), full 18-file census — data/composers/fisher-king.json",
    "data/composers/fisher-king.json (profile country Sweden, csdb id 659, full_name Linus Walleij)"
  ]
}
```

## Overview

KingFisher_Digi is the raw Player-ID tag for a routine attributed to
**King Fisher** (real name Linus Walleij per his DeepSID profile), a
Swedish scener (member of Triad since 1990, formerly Byterapers/Mute
101/Rebels/Royalty/The Zaints). A full census of all 4 tagged files (out
of King Fisher's 18 total SID files) shows they span CSDb's own
"Released" field from 1990 ("Keep This Frequency Clear") to 1992 ("Red
Storm"), all credited to Triad — consistent with a personal, in-house
routine used across a few years rather than a published, separately
released tool. No dedicated CSDb tool/release entry exists for
"KingFisher_Digi" (confirmed via CSDb webservice search, general web
search, and by name on Lemon64 and Codebase64). No SIDId entry exists for
the tag either. The strongest available corroboration for the "digi"
label is circumstantial: one of the four tunes was reused in a 1993
compilation explicitly billed as ripped digi tunes ("Digi Ripp #02" by
Noice) — suggestive, not a technical confirmation.

## Quirks & gotchas

See the `quirks` array. Load-bearing: there is still **no direct technical
confirmation** that this routine does sample/digi playback — no manual,
no SIDId comment, no source. The best available signal is that one tagged
tune was included in a compilation disk of ripped digi tunes ("Digi Ripp
#02", 1993), which is circumstantial corroboration, not proof. An earlier
draft of this card cited an unrelated 1988 "Ninja Music II" CSDb credit
that turned out not to be among King Fisher's own SID files at all — a
reminder that provenance research must be anchored to the actual
census, not to any CSDb credit under the same scener handle.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`, `data/players.json`) plus
CSDb scener/sid/release lookups (via `scripts/lib/csdb-client.js`) and web
research (Lemon64, Remix64, Codebase64) for provenance. `status: stub` —
no runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), `data/players.json`
(no entry), CSDb scener/sid/release pages for King Fisher and his 4
tagged tunes, Lemon64 and Remix64 interviews, Codebase64's SID
programming index, and the local composer aggregation (full 18-file
census of `data/composers/fisher-king.json`).
