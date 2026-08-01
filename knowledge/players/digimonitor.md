# DigiMonitor

```json
{
  "id": "digimonitor",
  "name": "DigiMonitor",
  "aliases": ["DigiMonitor"],
  "authors": ["Pex Tufvesson (Mahoney) / Defiers"],
  "released": "1987 (V1.01; CSDb catalog date — a 2014 user comment suggests 1988 is possible)",
  "status": "stub",
  "platform": "Native C64 tool. CSDb catalogs it as a 'C64 Tool' (editor), release group Defiers.",
  "csdb_release": 34224,

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
    "Author attribution comes from an in-binary string, not a title screen credit: a CSDb comment (Fred, 31 Dec 2013) notes 'In memory there is a string \"Mahoney was here!\", so I've added him to the credits' — i.e. CSDb's own Mahoney credit is itself evidence-of-a-string, not a stated byline. SIDId independently lists the author as 'Pex Tufvesson (Mahoney)', 1987, matching CSDb release 34224.",
    "SIDId's comment field for this exact tag is unusually specific and directly verifiable against this project's local dataset: 'Uses the digi routine used in /MUSICIANS/M/MC/Nemesis.sid which is also used in JamMaster II and JamMaster III by Banana'. Nemesis.sid is in fact one of this family's own 8 local files (composer MC), and Banana (the other JamMaster author, real name Christof Mühlan per SIDId's separate 'JamMasterV1' entry) is one of this family's 3 composers with 3 of the 8 files. This is a genuinely sourced 'digi routine' fact (from SIDId's technical comment, NOT from the tag containing the word 'Digi') and a real cross-tool-usage lead — but JamMaster II/III have no card in this knowledge base yet (only a distinct 'JamMasterV1' SIDId tag exists, author Christof Mühlan (Banana) & TAM, CSDb 106085, not confirmed to be the same II/III releases referenced in this comment), so no formal `shares_routine_with` edge is asserted here. Revisit once a JamMaster card exists.",
    "NOT a Mahoney personal routine despite his authorship: usage is split across 3 composers fairly evenly (Banana 3 files, Mahoney 3, MC 2 — data/composers/*.json aggregation), consistent with a small shared editor passed around a group rather than a private tool used only by its author.",
    "UPDATE — 'Zupermon' resolved beyond the 2014 comment: it is itself a distinct CSDb release, id 129093 ('Zupermon', AKA 'Digimonitor V1.01', released by Defiers 04.05.1988, d64 download 'Zupermon-Mahoney.d64'), cross-linked both ways — release 129093's own comment (Fred, 16.02.2014) reads 'A different version of the same editor with a working sample tune can be found here: <release id=34224>', and release 34224's matching comment reads 'A different version of the same editor can be found here: <release id=129093>. Most likely this version is also released in 1988 and not in 1987.' Fetched directly via scripts/lib/csdb-client.js getRelease(129093) and getRelease(34224), not just the earlier single-comment read. Still NOT claimed as an alias here: Zupermon carries no SIDId tag and tags no file in this project's local dataset (data/composers/*.json) — it is a second version of the same tool, catalogued separately, not a separate player family.",
    "UPDATE — the 'no technical confirmation' gap above is partly closed: Mahoney's own website (timeline.php) directly names and describes the tool, independent of SIDId or the tag's name. On 1987's 'Digi Demo 19' he writes: \"The tune, which was all that this demo was about, was done with my music-program 'Digi-Monitor v1.0'. Sid-sounds and sampled drums!\" This is a primary-source (the author's own words) confirmation that Digi-Monitor mixes SID-synth sound with sampled ('digi') drum playback — a genuine exception to this batch's general rule that a 'Digi' name is not evidence, precisely because the confirmation here comes from the author, not the tag. It does NOT confirm any specific sample format, bit-depth, or playback mechanism (e.g. not shown to be the same as Mahoney's separate, more famous 8-bit-via-volume-register trick documented elsewhere) — that remains TODO.",
    "Despite CSDb's 'Tool' type and the word 'Digi' in the name, no technical confirmation of the exact sample format/mechanism exists beyond Mahoney's own general description above and the SIDId comment (e.g. no confirmed bit-depth, no confirmed volume-register trick like Mahoney's famous 8-bit-via-volume technique elsewhere) — do not conflate this tag with that unrelated, better-documented Mahoney technique.",
    "Full census (all 8 tagged files, via scripts/lib/csdb-client.js getSidRelease, each tune's own `Released` field — not a title-year or UsedIn-release-year read): 5 files dated 1987 (IBM Music 24 csdb id 4455; Let's Twist/IBM Music 25 id 4463; Digimonitor id 19600; Nemesis id 19157; Vainqueur id 19190) and 3 dated 1988 (Jammaster III Demo id 4460; CP-Demo V id 19595; Very Short id 19610). Earliest per-tune attestation is 1987, consistent with the 1987 date on CSDb release 34224 itself — but per the Zupermon cross-comment above, the *editor's* true release date may be 1988 regardless of when the earliest tune using it was authored. Composer split confirmed exact: Banana 3 (data/composers/banana.json), Mahoney 3 (data/composers/mahoney.json), MC 2 (data/composers/mc.json)."
  ],
  "sources": [
    "SIDId sidid.nfo, tag 'DigiMonitor' (author, year, CSDb reference, technical comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 'Digimonitor V1.01' (type, group, date, in-binary-string credit comment, Zupermon cross-comment): https://csdb.dk/release/?id=34224 — fetched via scripts/lib/csdb-client.js getRelease(34224)",
    "CSDb release 'Zupermon' AKA 'Digimonitor V1.01' (the variant named in the 2014 comment; confirmed as its own catalogued release, 04.05.1988, Defiers): https://csdb.dk/release/?id=129093 — fetched via scripts/lib/csdb-client.js getRelease(129093)",
    "SIDId sidid.nfo, tag 'JamMasterV1' (cross-reference for Banana/Christof Mühlan authorship): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Mahoney's own timeline page (primary-source quote naming and describing 'Digi-Monitor v1.0' as mixing SID sound + sampled drums): https://livet.se/mahoney/timeline.php",
    "CSDb sid entries for all 8 census files, fetched via scripts/lib/csdb-client.js getSidRelease: https://csdb.dk/sid/?id=4455 (IBM Music 24, 1987), https://csdb.dk/sid/?id=4460 (Jammaster III Demo, 1988), https://csdb.dk/sid/?id=4463 (Let's Twist/IBM Music 25, 1987), https://csdb.dk/sid/?id=19595 (CP-Demo V, 1988), https://csdb.dk/sid/?id=19600 (Digimonitor, 1987), https://csdb.dk/sid/?id=19610 (Very Short, 1988), https://csdb.dk/sid/?id=19157 (Nemesis, 1987), https://csdb.dk/sid/?id=19190 (Vainqueur, 1987)",
    "Local dataset: 8 files tagged DigiMonitor across 3 composers (Banana 3, Mahoney 3, MC 2) — data/composers/*.json aggregation, full census confirmed (not a sample) via glob-scoped grep across all data/composers/*.json"
  ]
}
```

## Overview

DigiMonitor (CSDb: "Digimonitor V1.01") is a native C64 tool released in 1987
by the Swedish group **Defiers**, catalogued by CSDb as a "C64 Tool" (release
34224). SIDId attributes its authorship to **Pex Tufvesson (Mahoney)** —
matching a CSDb comment noting an in-binary string "Mahoney was here!" was
the actual basis for crediting him, rather than an on-screen byline. In this
project's local dataset it accounts for only 8 files, spread fairly evenly
across 3 composers (Banana, Mahoney, MC) — not a one-person private routine,
despite Mahoney's own authorship, but a small tool that circulated within a
group. SIDId's comment field is unusually specific here: it states the tool
"uses the digi routine used in /MUSICIANS/M/MC/Nemesis.sid which is also used
in JamMaster II and JamMaster III by Banana" — a real, checkable cross-tool
lead (Nemesis.sid is indeed one of this family's own 8 files), though no
JamMaster card exists yet in this knowledge base to formally link to.
Mahoney's own website independently confirms what the tool actually does —
his 1987 write-up of "Digi Demo 19" calls it "my music-program 'Digi-Monitor
v1.0' ... Sid-sounds and sampled drums!" — a rare case in this "digi"-tagged
batch where the playback claim comes from the author himself, not an
inference from the tag's name. A full census of all 8 tagged files' own CSDb
`Released` fields (not titles, not `UsedIn` release years) confirms usage
begins in 1987 and runs through 1988 (5 files 1987, 3 files 1988), matching
the composer split already on record. CSDb also holds a second, distinct
release entry — "Zupermon" (id 129093, 04.05.1988, AKA "Digimonitor V1.01")
— cross-commented against release 34224 as "a different version of the same
editor"; it is not a SIDId tag and tags no file locally, so it stays
un-aliased, but it corroborates the possibility that the tool's true release
date is 1988, not 1987.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: (1) the Mahoney author credit
traces back to a **discovered in-binary string**, not a stated byline —
worth remembering when weighing "authorship" confidence; (2) SIDId's comment
gives a **real, sourced technical lead** (a digi routine shared with
Nemesis.sid / JamMaster II / III) that is NOT derived from the tag's name
containing "Digi" — it is independently verifiable against this project's
own composer data; (3) usage is balanced across 3 composers, arguing against
a "personal routine" read despite the author being one of the three users;
(4) "Zupermon" is a real, separately-catalogued CSDb release (id 129093,
04.05.1988) explicitly cross-linked to release 34224 as "a different version
of the same editor" — confirmed by fetching both release records directly,
not just the single comment seen in an earlier pass — but it is still NOT
claimed as an alias, since it carries no SIDId tag and tags no file in the
local dataset; (5) Mahoney's own site confirms the tool mixes SID-synth sound
with sampled drums, a genuine author-sourced exception to "the name is not
evidence" — though the exact sample mechanism/format is still unconfirmed;
(6) a full census (not a sample) of all 8 tagged files' own CSDb `Released`
fields confirms 5 files in 1987 and 3 in 1988, with no earlier outlier missed.

## Disassembly notes

None performed here. No public source repo or format-spec document was
found; the CSDb release page (34224) offers only a T64 disk image download,
not a documented file format. A disassembly would need to start from that
T64 image — not attempted in this Tier 1/2 pass.

## Verification

No verification performed — `status: stub`. All identity/provenance facts
are SIDId- and CSDb-sourced (see `sources`); every runtime field (memory
map, entry points, speed, data format, effects) is unknown and left `TODO`.
Nothing here has been traced with `sidm2-siddump` or assembled/run.

## Sources

See the `sources` array — SIDId's `DigiMonitor` and `JamMasterV1` tag entries,
CSDb releases 34224 and 129093 (including the cross-linked user comments that
are the basis for both the Mahoney credit and the Zupermon relationship),
CSDb sid entries for all 8 census files (own `Released` fields, fetched via
`scripts/lib/csdb-client.js`), and this project's own local composer-data
aggregation (8 files / 3 composers, full census not a sample).
