# MicroRhythm

```json
{
  "id": "microrhythm",
  "name": "MicroRhythm",
  "aliases": ["MicroRhythm"],
  "authors": ["Simon Pick"],
  "released": "1986, Firebird",
  "status": "stub",
  "platform": "Native C64 drum-machine/sample-playback tool using real sampled sounds (per SIDId), by Simon Pick; released via Firebird 1986",
  "csdb_release": 49637,

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
    "SIDId gives a full, well-sourced entry (unlike most tags in this batch): author Simon Pick, released 1986 Firebird, CSDb release 49637, comment 'MicroRhythm uses real sampled sounds and was essentially a drum-machine' (deepsid_dl/sidid.nfo). This is genuine confirmed digi/sample usage — not an inferred 'digi-by-name' guess.",
    "All 5 locally tagged files are titled 'Micro*' (Microdisco, Microlatin, Microrhythm, Microtuned, Microvocals) and are all by Simon Pick himself, England, CSDb scener 17045 (also affiliated with The Sales Curve per local composer profile) — consistent with a small suite of sample-based demo tracks showcasing the drum-machine tool rather than a widely-adopted tracker used by other composers. Census confirmed: exactly these 5 files carry the MicroRhythm tag in the local dataset (data/composers/simon-pick.json), no more, no less.",
    "CSDb release 49637 is titled 'Microrhythm' (AKA 'Micro Rhythm') but its own record type is 'C64 Crack', released by Fantasy Cracking Service (FCS, Germany) on 1986-12-10 — this is CSDb's entry for FCS's crack of the commercial game, not a page attributed to publisher Firebird directly. SIDId's '1986 Firebird' characterisation is presumably from the original game's actual publisher, consistent with the per-SID 'Released' field on csdb.dk/sid/?id=47166 which also reads '1986 Firebird'.",
    "Per-file CSDb 'Released' dates are NOT uniform across the 5 tagged files, queried individually via the sid webservice endpoint: Microrhythm.sid (id 47166) = 1986 Firebird; Microdisco.sid (47165), Microlatin.sid (47167), Microtuned.sid (47169), and Microvocals.sid (47168) all = 1987 Firebird. This matches a real sequel: CSDb release 246514 'Infos for the New Micro-Rhythms' (AKA 'Microinfos', a German disk-mag/infofile released 1987-11-11 by scener '5211') credits Simon Pick for Music and lists exactly those 4 files (47165/47167/47168/47169, all tagged 'Released: 1987 Firebird') as UsedSIDs — i.e. 'Microrhythm' (1986) was the original drum-machine tool/demo, and the other 4 'Micro*' tracks are a 1987 follow-on batch ('New Micro-Rhythms') using the same routine. The card's released field is kept at the earliest attested date, 1986, per the template's guidance to record the earliest attestation.",
    "PSID header fields are identical across all 5 files (queried via CSDb sid webservice, header metadata only — not a disassembly fact): LoadAddr 2560 ($0A00), InitAddr 4096 ($1000), no separate PlayAddr reported (pre-2.0-style PSID, IRQ likely installed by init). Consistent load/init across all 5 supports that they share one player routine, but this is PSID-header evidence, not a verified entry point — Tier 3 fields remain TODO."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, year, publisher, CSDb reference, sampled-drum-machine comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 49637 (Microrhythm / Micro Rhythm, C64 Crack by Fantasy Cracking Service, 1986-12-10) via csdb.dk webservice: https://csdb.dk/release/?id=49637",
    "CSDb scener Simon Pick (United Kingdom, credited Music/Sampling on several releases): https://csdb.dk/scener/?id=17045",
    "CSDb sid entries for all 5 tagged files, queried via webservice (per-file Released/LoadAddr/InitAddr): https://csdb.dk/sid/?id=47165 (Microdisco, 1987), https://csdb.dk/sid/?id=47166 (Microrhythm, 1986), https://csdb.dk/sid/?id=47167 (Microlatin, 1987), https://csdb.dk/sid/?id=47168 (Microvocals, 1987), https://csdb.dk/sid/?id=47169 (Microtuned, 1987)",
    "CSDb release 246514 'Infos for the New Micro-Rhythms' (AKA Microinfos, 1987-11-11), crediting Simon Pick for Music and listing 4 of the 5 tagged SIDs as UsedSIDs: https://csdb.dk/release/?id=246514",
    "Local dataset: 5 files tagged MicroRhythm, all by Simon Pick — see data/composers/simon-pick.json"
  ]
}
```

## Overview

MicroRhythm is a C64 drum-machine/sample-playback tool by **Simon Pick**
(England/UK, CSDb scener 17045), originally released via **Firebird in
1986**. SIDId explicitly confirms it "uses real sampled sounds and was
essentially a drum-machine" — genuine, sourced digi/sample-technique
evidence rather than an inferred name-based guess. All 5 locally tagged
files (census confirmed, not sampled) are Simon Pick's own "Micro*"-titled
tracks: the original "Microrhythm.sid" (1986) plus a 1987 follow-on batch
of four — Microdisco, Microlatin, Microtuned, Microvocals — documented by a
1987 disk-mag ("Infos for the New Micro-Rhythms" / "Microinfos", CSDb
release 246514) as a "New Micro-Rhythms" sequel using the same tool. CSDb
release 49637 is the FCS crack-release entry for the original 1986 game,
not a page hosted under the Firebird group directly.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the sample/drum-machine claim is
directly SIDId-sourced, not inferred from the tag's name; usage is entirely
concentrated in Simon Pick's own showcase tracks, suggesting this may not
have circulated as a widely-used tracker among other composers.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec found. PSID
headers for all 5 files agree (Load $0A00/2560, Init $1000/4096, no PlayAddr
reported), consistent with one shared player routine, but this is header
metadata gathered via the CSDb sid webservice, not a disassembly fact — it
is recorded only in `quirks`, never promoted into `entry`/`memory`.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/simon-pick.json`, `data/sidid.json`) plus CSDb release/
scener pages researched for provenance. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 49637, CSDb scener
page for Simon Pick, and the local composer aggregation.
