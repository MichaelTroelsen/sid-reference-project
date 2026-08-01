# Digitize_Design_Group

```json
{
  "id": "digitize-design-group",
  "name": "Digitize_Design_Group",
  "aliases": ["Digitize_Design_Group"],
  "authors": ["Mac Gyver (credited 'Sampling' on a DDG release — see quirks; not confirmed as sole/original coder of the fingerprinted routine)"],
  "released": "TODO: no distinct tool-release year exists (this is an in-house group routine, not a separately published editor). Census of both tagged files, by their own CSDb SID `Released` fields: 'Heart' (Mac Gyver) is dated December 1987, credited 'Code' to Mac Gyver and released BY the group Digitize Design Group itself (CSDb release #14804, https://csdb.dk/release/?id=14804); 'Jimi Digi' (Feekzoid) is dated 2 May 1992, released solo by Feekzoid with no DDG credit at all (CSDb release #10599, https://csdb.dk/release/?id=10599). December 1987 is the earliest attested USE, inside DDG's documented 1986-1989 active window, not a tool-release date — see quirks.",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house sample/digi routine of the Finnish group Digitize Design Group (DDG), not a released standalone editor. Corroborated by a second, non-tagged DDG release: 'Sabrina Mix' (1988, CSDb release #10769, https://csdb.dk/release/?id=10769) credits April7 with both 'Sampling' and 'Code', and Mac Gyver with 'Code' too — i.e. the same DDG 'Code'/'Sampling' credit pattern recurs across a second, independent release by a second coder, consistent with a shared in-house routine rather than a one-off. Native C64, not a cross-platform editor (no evidence of any host/PC tooling found).",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). Everything below is CSDb/local-dataset provenance, not a SIDId-sourced technique claim.",
    "The tag name matches a real, documented Finnish C64 group: Digitize Design Group (DDG), CSDb group #1390, active c. 1986-1989, tagline 'Digitizing Power!', ~35 releases across demos/tools/music/graphics, who ran a 'DDG Digi-Party' in 1988 (https://csdb.dk/group/?id=1390). This is real corroboration that the tag is a genuine group-scoped routine, not a filename-regex artifact.",
    "One of the 2 locally-tagged files' composer directly matches a confirmed DDG member: 'gyver-mac' (handle Mac Gyver, Finland, data/composers/gyver-mac.json) is listed as a DDG coder member, and CSDb's own credits for the group's 1987 release 'Sex' name Mac Gyver for BOTH 'Code' and 'Sampling' (https://csdb.dk/release/?id=51889) — i.e. Mac Gyver is independently, directly credited with sample/digi work for this exact group, on a release contemporary with the group's active era. This is stronger evidence than most tags in this batch.",
    "The SECOND locally-tagged file's composer, 'feekzoid' (Paul Hannay, Scotland, data/composers/feekzoid.json), is NOT found among DDG's documented members (April7 [founder], Mac Gyver, Toincware, WPC, Kenny Everett, JSA, Miy, Mr. Moonlight, Snowballs, Hawk, Wolf, Wery Well — per CSDb group #1390) and has no obvious DDG connection in the sources checked. Why his file ('Jimi Digi') carries the same Player-ID signature as a DDG member's is unresolved — plausibly the routine circulated beyond the group's own membership, but that is inference, not sourced.",
    "Because the tag spans a group (not one person) and the SIDId author-attribution rule of this batch is 'no per-tag record exists,' `authors` here names only the one directly-CSDb-credited candidate (Mac Gyver), flagged as not necessarily the sole or original coder of the fingerprinted routine — DDG had multiple coders.",
    "Census of both tagged files' own CSDb SID entries (webservice type=sid, not spot-checked): 'Heart' (SID #60083, csdb.dk/sid/?id=60083) carries `Released: '1987 Digitize Design Group'`, InitAddr/LoadAddr both 2061 ($080D); 'Jimi Digi' (SID #12444, csdb.dk/sid/?id=12444) carries `Released: '1992 Feekzoid'`, LoadAddr 2061 ($080D) but InitAddr 3648 ($0E40) — a 5-year gap, and the two files' own CSDb metadata never link them to each other; only the shared Player-ID tag does. These are PSID header values, not disassembly facts, and are not written into the Tier 3 fields.",
    "'Jimi Digi's own release page (CSDb release #10599, https://csdb.dk/release/?id=10599) is released solely BY Feekzoid ('ReleasedBy: Handle FeekZoid'), with a single 'Music' credit to Feekzoid and zero DDG group credit or mention — strengthening the reading that this file's connection to DDG, if any, is only the shared byte-pattern SIDId fingerprints, not a documented group affiliation.",
    "By contrast 'Heart's own release page (CSDb release #14804, https://csdb.dk/release/?id=14804) IS released BY the group Digitize Design Group itself, with 'Code' credited to Mac Gyver and 'Design'/'Idea' credited to April7 — direct, first-party confirmation that this specific tagged file is a genuine in-house DDG production, not just an inference from the group-name-matching tag.",
    "A THIRD, non-tagged DDG release ('Sabrina Mix', 1988, CSDb release #10769, https://csdb.dk/release/?id=10769, also released BY the group) credits April7 with BOTH 'Sampling' and 'Code', and separately credits Mac Gyver with 'Code' — i.e. the group's 'Code'+'Sampling' credit pattern recurs with a second coder (April7) the year after 'Heart', reinforcing that DDG had an in-house digi/sampling routine used by more than one member, even though only Mac Gyver's use of it is directly tagged in this dataset."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Digitize_Design_Group': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb group #1390, Digitize Design Group (Finland, 1986-1989, DDG Digi-Party 1988, member list): https://csdb.dk/group/?id=1390",
    "CSDb release #51889, 'Sex' (Digitize Design Group, 1987) — credits Mac Gyver for Code AND Sampling: https://csdb.dk/release/?id=51889",
    "CSDb release #14804, 'Heart' (Digitize Design Group, Dec 1987) — credits Mac Gyver 'Code', April7 'Design'/'Idea'; UsedSIDs = the tagged file: https://csdb.dk/release/?id=14804",
    "CSDb release #10599, 'Jimi-digi' (Feekzoid solo, 2 May 1992) — released by Feekzoid, no DDG credit; UsedSIDs = the tagged file: https://csdb.dk/release/?id=10599",
    "CSDb release #10769, 'Sabrina Mix' (Digitize Design Group, 1988) — credits April7 'Sampling'+'Code', Mac Gyver 'Code' (not one of this tag's 2 files, corroborating context only): https://csdb.dk/release/?id=10769",
    "CSDb webservice, type=sid, id=60083 ('Heart') and id=12444 ('Jimi Digi') — Released/LoadAddr/InitAddr fields, queried via scripts/lib/csdb-client.js: https://csdb.dk/webservice/?type=sid&id=60083 , https://csdb.dk/webservice/?type=sid&id=12444",
    "Local dataset: 2 files tagged Digitize_Design_Group — 'Jimi Digi' (feekzoid, csdb_id 12444) and 'Heart' (gyver-mac, csdb_id 60083) — data/composers/feekzoid.json, data/composers/gyver-mac.json; see knowledge/COVERAGE.md rank 99",
    "CSDb scener profile, Mac Gyver (Finland): data/composers/gyver-mac.json profile.csdb_id 4059"
  ]
}
```

## Overview

Digitize_Design_Group is a SIDId Player-ID tag matching the name of a real,
documented Finnish demo group — **Digitize Design Group (DDG)**, active
c. 1986-1989 (CSDb group #1390). Both of the tag's 2 files (a full census,
not a sample) were checked against their own CSDb SID/release entries.
"Heart" (Mac Gyver) is a genuine, first-party DDG production: its own CSDb
release page (#14804, Dec 1987) is released BY the group, crediting Mac
Gyver "Code" — inside DDG's documented 1986-1989 window. "Jimi Digi"
(Feekzoid, Scotland) is dated 2 May 1992 and released solely by Feekzoid,
with zero DDG credit anywhere on its own release page (#10599) — five years
after "Heart" and three years after DDG's group page's own documented
end-date. A third, non-tagged DDG release ("Sabrina Mix," 1988, #10769)
independently shows the same "Code"/"Sampling" credit pattern used by a
second coder (April7), which corroborates an in-house group routine — but
does not explain the Feekzoid file. No distinct tool-release year or
CSDb tool/release entry exists for a standalone "Digitize Design Group"
editor; `released` and `csdb_release` stay TODO/null for that reason, with
the tune-level dates now cited directly rather than merely inferred.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) DDG is a real, CSDb-documented
group with a confirmed member directly credited for "Sampling" work, and a
second confirmed 1988 instance of the same credit pattern with a different
coder — better evidence than most tags here; (2) full census of both tagged
files' own CSDb release pages shows "Heart" is a first-party DDG production
(Dec 1987) while "Jimi Digi" is a solo 1992 Feekzoid release with no DDG
credit at all — the tag's scope beyond "Heart" is unresolved, not merely
under-researched; (3) no SIDId entry exists to independently confirm
authorship or technique; (4) PSID header values (load/init addresses) were
gathered for both files during the census but are recorded only as quirks,
never promoted into the Tier 3 `entry`/`memory` fields.

## Disassembly notes

None done here. No public source or CSDb tool/release entry (distinct from
the group's own demo/music releases) was found. All Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local composer data and CSDb group/release
research. `status: stub`.

## Sources

See the `sources` array — CSDb (group and release pages), the local composer
aggregation, and a confirmed-absent SIDId check.
