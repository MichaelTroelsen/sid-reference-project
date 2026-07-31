# Cope / Omicron

```json
{
  "id": "cope-omicron",
  "name": "Cope / Omicron",
  "aliases": ["Cope/Omicron"],
  "authors": ["Cope (Nik)"],
  "released": "1987 (all 3 tagged files carry CSDb SID-entry field \"Released: 1987 Omicron\"; Omicron formed May 1987 — not a distinct tool-release date, this is the group/year the tune itself was released under)",
  "status": "stub",
  "platform": "Native C64, in-house/personal routine, not a distributed editor or tool. Confirmed: Omicron's own CSDb group release list (33 releases, checked in full) contains no player/tool release under this or Cope's name — only two unrelated \"Text-Editor\" tools and a run of one-file demos/music entries. All 3 locally tagged files carry player_type \"Normal built-in\" (data/composers/cope.json).",
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
    "SIDId's sidid.nfo has NO entry for 'Cope/Omicron' (checked) — Player-ID-only signature. Although the locally cached composer profile's affiliation field is empty (data/composers/cope.json), CSDb's own scener record for Cope (id 9103, depth=3) DOES corroborate 'Omicron': he is listed as an ex-member of CSDb group 1927 'Omicron' (Denmark, founded May 1987 from a merger of 'The Almighty Grabbers' and another group), and Omicron's own member-status trivia names 'Cope' explicitly in its 16-05-1987 roster. So the tag is [composer]/[group he belonged to when the tune shipped], not an unconfirmed internal label.",
    "Single-composer, single-country concentration: all 3 locally tagged files are by Cope himself (Denmark) — 'At Last!', 'Interlude 2', 'Interlude 3' — consistent with a personal routine, not a widely used tool. Census of all 3 files' CSDb SID entries (ids 51534-51536) confirms each carries the identical 'Released: 1987 Omicron' field and each is used in its own 'C64 One-File Demo' release (CSDb release ids 138565-138567), i.e. Cope's personal music routine embedded per-demo, not a standalone editor output.",
    "Omicron's full CSDb group release list (33 entries, all checked) contains no player/tool release matching this name — only two unrelated 'Text-Editor' tool releases (v1.00, v2.00) plus one-file demos and standalone music entries, reinforcing that this is an in-house routine rather than a published/distributed tool."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Cope/Omicron': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Cope / Nik (Denmark): https://csdb.dk/scener/?id=9103",
    "CSDb webservice, scener id=9103 depth=3 (group membership incl. Omicron id 1927, join/leave dates, member-status trivia naming Cope): https://csdb.dk/webservice/?type=scener&id=9103&depth=3",
    "CSDb webservice, group id=1927 'Omicron' (founded May 1987, Denmark, full release list): https://csdb.dk/webservice/?type=group&id=1927&depth=2 ; https://csdb.dk/group/?id=1927",
    "CSDb webservice, SID entries id=51534,51535,51536 (all 3 locally tagged files — 'Released: 1987 Omicron' on each, UsedIn one-file demo releases 138567/138565/138566): https://csdb.dk/webservice/?type=sid&id=51534 (and 51535, 51536)",
    "Local dataset: 3 files tagged Cope/Omicron, all by Cope — see data/composers/cope.json"
  ]
}
```

## Overview

`Cope/Omicron` is a raw Player-ID tag for an in-house music routine
attributed to **Cope** (full name Nik, Denmark, CSDb scener 9103), used in
demos by the Danish demo group **Omicron** (CSDb group 1927, founded May
1987 from a merger of two earlier groups). All 3 locally-tagged files —
"At Last!", "Interlude 2", "Interlude 3" — are by Cope himself, each
released 1987 and each shipped as its own "C64 One-File Demo" on CSDb
(confirmed via CSDb's SID-entry webservice for all 3, a full census, not a
sample). SIDId has no entry for this tag. Cope's CSDb scener record
(depth=3) confirms his membership in Omicron and Omicron's own trivia
names him in its May 1987 roster, so "Omicron" is a real, corroborated
group affiliation, not an unconfirmed label. No dedicated player/editor
tool release for this routine was found anywhere in Omicron's full CSDb
release list (33 releases, all checked).

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer, single-country
concentration (3/3 files by Cope) marks this as a personal in-house
routine, not a widely used tool; "Omicron" is now confirmed (not merely
suspected) as the demo group Cope belonged to, via CSDb group/scener
records, correcting the earlier hedge in this card.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/cope.json`, `data/sidid.json`) plus a Tier 2 CSDb
webservice census of all 3 tagged files and the Omicron group/scener
records. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener
page, CSDb webservice queries for scener 9103, group 1927, and SID entries
51534/51535/51536, and the local composer aggregation.
