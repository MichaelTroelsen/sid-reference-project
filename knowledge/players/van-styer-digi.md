# Van_Styer_Digi

```json
{
  "id": "van-styer-digi",
  "name": "Van_Styer_Digi",
  "aliases": ["Van_Styer_Digi"],
  "authors": ["Piotr Przewozny (Van Styer)"],
  "released": "TODO: no tool-release date documented. Full census (all 6 tagged files, CSDb 'sid' entries) of tune-level Released fields: 5 files by Van Styer himself are dated 1997 De-Koder, all used in the compilation 'Vector Power' (CSDb release id 30640, released 1997-08-27), where CSDb credits Van Styer with a 'Sampling' role; 1 file, 'Go!' by Rule3 Helios (Marcin Jedrusik), is dated 1996-05-05 (used in 'Voice Over'/'Helios Sample Collection', CSDb release id 47184) — this earliest-attested tune predates Van Styer's own 1997 tunes by over a year, but its 'Sampling' credit on that release belongs to Helios himself (CSDb scener id 15843), not Van Styer, and its PSID load/init address (7680/$1E00, init 8205/$200D) differs from all 5 Van Styer files (load=init=2060/$080C each) — see quirks for why this one file's inclusion under the tag is doubtful.",
  "status": "stub",
  "platform": "TODO: appears to be a native C64 personal digi/sample-playback routine embedded directly in Van Styer's own tracks, not a released standalone tool — no dedicated CSDb tool/driver/release entry found under this name after searching csdb.dk, Lemon64, and Forum64 (all negative); CSDb's 'Vector Power' compilation (release id 30640) credits Van Styer specifically with a 'Sampling' role (not 'Code' — that credit on the same release belongs to 'Kapshel'), consistent with an in-house sample-preparation routine rather than a published editor/tool (unconfirmed as platform is inferred, not stated outright anywhere).",
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
    "SIDId (data/sidid.json byTag.\"Van_Styer_Digi\") records only 'AUTHOR: Piotr Przewozny (Van Styer)' — no name, released date, or comment; confirmed against the upstream sidid.nfo source (cadaver/sidid on GitHub), same content.",
    "CORRECTED on full census (prior card sampled only 1 of 6 files): CSDb's scener page for Van Styer (id 13184) lists one 'Sampling'-role credit on the compilation 'Vector Power' (release id 30640, 1997 De-Koder) — this DOES match 5 of the 6 locally-tagged files (Mega Bump, Polizei Death, The Revolution, Super Sonic Dance Attack, Yeaah!), all of which CSDb's own 'sid' entries list as UsedIn that same release id 30640. The prior card's claim that this credit was 'unrelated' and matched no tagged file was a false negative from a 1-file sample.",
    "The 6th tagged file, 'Go!' by Rule3 Helios (Marcin Jedrusik, CSDb sid id 42283), is the outlier: its PSID load/init addresses (7680/$1E00, init 8205/$200D) differ from all 5 Van Styer files (load=init=2060/$080C, identical across all 5), and the 'Sampling' credit on its own release ('Voice Over' aka 'Helios Sample Collection', release id 47184) is held by Helios himself (CSDb scener id 15843), not Van Styer, whose Code credit there is 'CJ Warlock'. SIDId's byte-signature match still tagged it 'Van_Styer_Digi', but the address and credit evidence together suggest either code reuse without Van Styer's direct involvement, or a coincidental/partial signature match — the identity of the routine in this one file is weaker than the other 5.",
    "Usage: 6 files across 2 composers — Van Styer himself (5 files, all in the single 1997 'Vector Power' compilation) and Rule3 Helios / Marcin Jedrusik (1 file, also Polish, dated 1996 — see the outlier note above)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Van_Styer_Digi\"; cross-checked against https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "CSDb scener profile, Van Styer / Piotr Przewozny (groups De-Koder, Xantem; Poland; 'Sampling' credit on release id 30640): https://csdb.dk/scener/?id=13184",
    "CSDb SID-file entries (full census, all 6 tagged files, via csdb.dk webservice type=sid): id 44417 Mega Bump, 44418 Polizei Death, 44419 The Revolution, 44420 Super Sonic Dance Attack, 44421 Yeaah! (all Van Styer, 1997 De-Koder, load=init=2060, UsedIn release 30640), and 42283 Go! (Rule3 Helios, 1996, load 7680/init 8205, UsedIn release 47184) — https://csdb.dk/sid/?id=44417 etc.",
    "CSDb release entry 'Vector Power' (id 30640, De-Koder, 1997-08-27; Van Styer credited 'Sampling', 'Kapshel' credited 'Code'): https://csdb.dk/release/?id=30640",
    "CSDb release entry 'Voice Over' / 'Helios Sample Collection' (id 47184, Rule3, 1996-05-05; 'Sampling' credited to Helios/scener id 15843, 'Code' credited to CJ Warlock): https://csdb.dk/release/?id=47184",
    "CSDb scener profile, Helios (id 15843): https://csdb.dk/scener/?id=15843",
    "Negative search (no dedicated tool/driver entry found): WebSearch for \"Van Styer\" SID digi player driver csdb.dk, site:lemon64.com \"Van Styer\", site:forum64.de \"Van Styer\" — no results on Lemon64 or Forum64",
    "Local dataset: 6 files tagged 'Van_Styer_Digi' — 5 by Van Styer, 1 by Rule3 Helios — data/composers/styer-van.json, data/composers/rule3-helios.json"
  ]
}
```

## Overview

Van_Styer_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **Piotr Przewozny**, handle **Van Styer**, a Polish scener
(groups De-Koder, Xantem). SIDId carries only an author line — no name,
release date, or comment. Locally it covers 6 files, censused in full: 5 by
Van Styer himself, all released 1997 by De-Koder in the single compilation
"Vector Power" (CSDb release id 30640), where CSDb explicitly credits Van
Styer with a "Sampling" role — real corroborating evidence, not just an
author-attribution guess. The 6th file, "Go!" by Rule3 Helios (Marcin
Jedrusik), is dated 1996 (a year earlier) but is an evidentiary outlier: its
PSID load/init addresses differ from the other 5, and its own release's
"Sampling" credit belongs to Helios, not Van Styer. No standalone tool,
driver, or editor release was found under this name anywhere searched
(CSDb, Lemon64, Forum64, general web) — it reads as a routine embedded in
Van Styer's own tracks rather than a published, reusable tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has author only, no
release/reference; (2) full census (not sampling) shows CSDb's "Sampling"
credit for Van Styer DOES match 5 of the 6 tagged files via a shared release
id (30640) — the prior card's 1-file sample had wrongly called this
"unrelated"; (3) the 6th file ("Go!", Rule3 Helios) is a probable weak/false
tag match: different PSID load/init address, and its release's own
"Sampling" credit names Helios, not Van Styer.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity from SIDId, scene context
and full 6-file census from CSDb, composer concentration from local dataset
aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo (cross-checked against upstream),
CSDb's Van Styer and Helios scener profiles, all 6 tagged files' CSDb
SID-entries and their two parent release entries, negative Lemon64/Forum64
searches, and local composer-file aggregation.
