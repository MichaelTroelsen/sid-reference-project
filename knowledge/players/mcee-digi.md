# Mcee_Digi

```json
{
  "id": "mcee-digi",
  "name": "Mcee_Digi",
  "aliases": ["Mcee_Digi"],
  "authors": ["Mcee"],
  "released": "No dedicated tool-release date exists. Census of all 6 locally-tagged files' CSDb 'Released' PSID-header fields: 2 of 6 read '1993 Bad Karma' (Lord Have Mercy, csdb sid id 40796; Grapevine #9 intro, id 40799), the other 4 read '199? Bad Karma' (year uncertain within the decade) — She Drives Me Crazy (40795), No Limits! (40797), Break the Chain (40798), Finally I-Play (40800). The two 1993 dates are independently corroborated by their UsedIn release years (Lord Have Mercy, a C64 One-File Demo, ReleaseYear 1993; The Grapevine #09 diskmag, 1993-11-27). Bad Karma itself was founded January 1993 per its CSDb group record, consistent with 1993 as the earliest attested use. No file carries an earlier or more precise date.",
  "status": "stub",
  "platform": "Native C64, embedded/built-in — not a standalone editor or cross-platform tool. All 6 locally-tagged files carry player_type 'Normal built-in' in the local dataset (data/composers/mcee.json), and CSDb credits Mcee himself with 'Code' (not just 'Music') on several of these releases (Lord Have Mercy id 58629, Grapevine #09 id 58682, No Limits id 177595, Finally I-Play id 177593), consistent with a personal playback routine he coded and embedded in his own tunes. CSDb's full credit list for Mcee (scener id 17820, depth=2) shows only one 'C64 Tool' type release under his name — Turbo Assembler V7.1 (ids 128463/128471), unrelated to digi playback — confirming no dedicated tool/release entry exists for a 'Mcee_Digi' player.",
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
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Mcee_Digi' returns undefined).",
    "Unusually strong CSDb corroboration despite the missing SIDId entry: CSDb's scener page for Mcee (id 17820; group Bad Karma; Australia) lists explicit 'Sampling'-role credits on releases whose titles directly match locally-tagged files — 'Finally I-Play' (credited 'Music, Sampling') and 'Break the Chain' (credited 'Code, Music, Sampling') are BOTH among the 6 files tagged Mcee_Digi in this dataset. This is a rare case in this batch where the scene credit matches the exact tagged filename, not just the general author.",
    "Fully single-composer usage: all 6 locally-tagged files belong to Mcee (data/composers/mcee.json).",
    "Full census of all 6 files (csdb sid ids 40795-40800): only 2 carry a precise year (1993), the rest read '199?' — see the 'released' field for the per-file breakdown.",
    "CSDb's group record for Bad Karma gives a founding date of January 1993, matching the earliest attested use of this tag and supporting the reading of it as an in-house routine coded around the group's formation rather than a pre-existing published tool.",
    "Mcee died in August 2000; a CSDb trivia note from a fellow scener ('Nath(e) / The Hegg') describes him as 'a very talented and meticulous coder' who left unreleased routines behind — consistent with, but not direct proof of, a self-coded unreleased/undocumented digi routine (https://csdb.dk/scener/?id=17820)."
  ],
  "sources": [
    "CSDb scener profile, Mcee (group Bad Karma, Australia; 'Sampling'-role credits on 'Finally I-Play' and 'Break the Chain', among others; freelance function 'Coder'; full release/credit list checked via webservice depth=2): https://csdb.dk/scener/?id=17820",
    "CSDb SID-file entries for all 6 census files, fetched via CSDb webservice (type=sid): id 40795 'She Drives Me Crazy' (199? Bad Karma), id 40796 'Lord Have Mercy' (1993 Bad Karma), id 40797 'No Limits!' (199? Bad Karma), id 40798 'Break the Chain' (199? Bad Karma), id 40799 'Grapevine #9 (intro)' (1993 Bad Karma), id 40800 'Finally I-Play' (199? Bad Karma) — https://csdb.dk/sid/?id=40795 through https://csdb.dk/sid/?id=40800",
    "CSDb release entries corroborating the two 1993 dates: 'Lord Have Mercy' (C64 One-File Demo, ReleaseYear 1993) https://csdb.dk/release/?id=58629; 'The Grapevine #09' (C64 Diskmag, 1993-11-27) https://csdb.dk/release/?id=58682",
    "CSDb group record, Bad Karma (New Zealand; founded January 1993; Demo Group/Cracker Group): https://csdb.dk/group/?id=1334",
    "Local dataset: 6 files tagged 'Mcee_Digi', all under composer Mcee, all with player_type 'Normal built-in' — data/composers/mcee.json",
    "data/sidid.json (checked: no 'Mcee_Digi' entry exists in byTag, confirming the absence noted above)"
  ]
}
```

## Overview

Mcee_Digi is the local raw tag for a digi/sample-playback routine attributed
to **Mcee**, an Australian scener (group Bad Karma, coder). No SIDId entry
exists for this tag, but CSDb independently corroborates the "digi"/sampling
association more directly than most tags in this batch: Mcee's own scener
page lists a "Sampling" role credit on both "Finally I-Play" and "Break the
Chain" — titles that match two of the 6 locally-tagged files exactly. All 6
files belong to Mcee himself, and all 6 carry `player_type: "Normal built-in"`
in the local dataset, i.e. the routine is embedded per-tune rather than a
shared external driver. A full census of all 6 files' CSDb headers found
only 2 with a precise year (1993), the rest reading "199?"; the 1993 dates
line up with Bad Karma's own founding month (January 1993). No CSDb release
of type "C64 Tool" exists under Mcee's name for a digi player (only an
unrelated Turbo Assembler V7.1 credit), supporting the reading of this as an
unpublished personal/in-house routine rather than a distributed tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists for this tag;
(2) despite that, CSDb's "Sampling" credits directly match two of the
locally-tagged filenames — stronger, more specific corroboration than most
other tags in this batch, which typically only match the author, not the
title; (3) 100% single-composer usage; (4) full census of all 6 files finds
only 2 with a precise year (1993), not a single release date for a tool —
this is embedded-per-tune code, not a versioned product.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity/corroboration from CSDb's
scener profile with direct title matches, a full census of all 6 tagged
files' PSID `Released` headers (via CSDb's webservice, `type=sid`), the
Bad Karma group record, and composer concentration from local dataset
aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — CSDb's Mcee scener profile (webservice depth=2,
full credit/release list), all 6 CSDb SID-file entries (census, not a
sample), two corroborating CSDb release entries, the Bad Karma group
record, and local composer-file aggregation.
