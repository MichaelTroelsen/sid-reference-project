# Wizax-A (pre-NP21 Laxity-era player)

```json
{
  "id": "wizax-a",
  "name": "Wizax-A (pre-NP21 Laxity-era player)",
  "aliases": ["Wizax", "Wizax-A"],
  "authors": ["Thomas E. Petersen (Laxity) — confirmed tune author on every cluster file (CSDb SID-entry 'Author' field, csdb.dk/webservice/?type=sid&id=<id>, one query per file). PLAYER-ROUTINE authorship is less certain: the actual local dataset tags all 7 cluster files 'Rob_Hubbard' (see aliases note below), and VGMPF's Rob Hubbard driver page independently names 'Thomas Petersen (Laxity)' as one of several other scene musicians who reverse-engineered/reused Hubbard's driver (https://www.vgmpf.com/Wiki/index.php?title=Rob_Hubbard_(C64_Driver), cited on knowledge/players/rob-hubbard.md) — so this is plausibly an adapted Rob Hubbard routine, not an original Petersen design"],
  "released": "1987 — every sampled cluster file's PSID 'Released' copyright string reads either '1987 Wizax 2004' (6 files) or '1987 Yield Point Music' (1 file, Min_Axel_F — see quirks); independently corroborated by two of the files' own CSDb UsedIn scene-release dates (Hall of Fame demo, Sept 1987; Fight TST 002 demo, Oct 1987) and by the Wizax C64 group's own founding date, Oct 1986 (csdb.dk/group/?id=1120)",
  "status": "stub",
  "platform": "Native C64 player routine embedded per-file (no distributed editor) — pre-NP21 byte-stream player. All 7 known cluster files are tagged 'Rob_Hubbard' by this project's local Player-ID data (not any 'Wizax' tag — see aliases note), and are plausibly an adapted/reused Rob Hubbard driver rather than an original design (see authors); values are provisionally NP21-range-compatible but this is NOT itself an NP21 fork",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "Per-file, not fixed: 2000_A_D $58/$59, Fight_TST_II $FD/$FE, Hall_of_Fame $FD/$FE, Min_Axel_F $4B/$4D",
    "layout": "Per-voice byte stream addressed via a ZP-indirect-Y pointer, set up from a 3-byte-lo + 3-byte-hi parallel pointer table (file-specific address + file-specific ZP pair, see zero_page): 2000_A_D ptr-lo $150C / ptr-hi $153D; Fight_TST_II ptr-lo $184A / ptr-hi $18B8; Hall_of_Fame ptr-lo $C73E / ptr-hi $C773; Min_Axel_F TBD."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "Byte stream, provisionally NP21-range-compatible: $00-$6F = note (ASL-indexed into a 16-bit frequency LUT, per-file address — 2000_A_D's is $1367), $80-$9F = duration/command prefix, $FF = loop/terminator. <note><duration> pairs visible in sampled streams.",
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
    "derives_from": ["rob-hubbard"],
    "successor_of": [],
    "shares_routine_with": ["zetrex-yp"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "CENSUS-ZERO EXPLAINED: this card's aliases ('Wizax', 'Wizax-A') are SIDM2-INTERNAL cluster names taken from the files' PSID copyright string, not SIDId/Player-ID tags — data/sidid.json's byTag has no 'Wizax' key at all. Every file in this cluster is actually tagged 'Rob_Hubbard' in the local dataset (data/composers/laxity.json), the same tag documented on knowledge/players/rob-hubbard.md (256 files/51 composers). 'Rob_Hubbard' was deliberately NOT added to this card's aliases array — doing so would conflate this narrow 5-9-file SIDM2 sub-cluster with that much larger, largely unrelated tag family. Treat 'Rob_Hubbard' as the real underlying Player-ID signature match, cited here rather than merged.",
    "FULL CENSUS (searched laxity.json for every 'Wizax'-adjacent filename/label, not just the 4 files SIDM2's own docs name) found 2 MORE cluster members SIDM2's docs don't mention: Wizax_Logo.sid (csdb_id 17899, load $400D) and Wizax_tune.sid (csdb_id 17900, load $0900) — both player=Rob_Hubbard, both PSID Released='1987 Wizax 2004', same as 2000_A_D/Fight_TST_II/Hall_of_Fame/Cool_as_Wize_Title. That makes 6 files sharing the exact '1987 Wizax 2004' label (all via csdb.dk/webservice/?type=sid&id=<id>), plus Min_Axel_F under a DIFFERING label (next item) = 7 total candidate cluster files, not 4-5.",
    "NEGATIVE FINDING (avoid the name trap): Quit_Wizax.sid (csdb_id 17841, also by Laxity) has 'Wizax' in its filename but is NOT part of this cluster — its player tag is 'SoundMonitor/MusicMaster_1' (unrelated) and its PSID Released string is '1987 Zetrex 2005', not '1987 Wizax 2004'. Filename match alone is not evidence.",
    "UNRESOLVED DISCREPANCY, now sharpened by CSDb header data: SIDM2's cluster includes Min_Axel_F, but its own PSID Released string is '1987 Yield Point Music' — NOT '1987 Wizax 2004' like the other 6 files — and 'Yield Point Music' is exactly the label on Racer, a file already assigned to the SEPARATE zetrex-yp cluster (see zetrex-yp.md). This raises the possibility Min_Axel_F was mis-clustered by SIDM2 (belongs with zetrex-yp instead), or that 'Wizax' and 'Yield Point' code shared enough signature to fool both SIDM2's detector and this project's byte-stream reading. Not resolved here — flagged for a future disassembly pass rather than silently picking a side.",
    "SIDM2's own detector docstring calls this 'a pre-NP21 player used by Thomas E. Petersen (Laxity) in the late-1980s era' — i.e. it's presented as Laxity's OWN early player, not a third-party fork of anything. This card does NOT assert a derives_from/successor_of edge toward laxity-newplayer (NP21), since that specific claim is attributional (from a code comment) rather than verified code-lineage — but it DOES now assert derives_from toward rob-hubbard (see edges), backed by the independent Rob_Hubbard tag match plus VGMPF's named reuser list, which is stronger evidence than a single code comment.",
    "SCENE CONTEXT (csdb.dk/group/?id=1120): 'Wizax' (AKA 'Wizax 2004') was a real Danish C64 demo/cracker group founded October 1986 by Count Dracula, The Nop and Ecan, with 120+ releases; Laxity is listed as a Wizax member as of August 1987 ('unknown function'). The '1987 Wizax 2004' string in these SIDs is that group's own copyright/release label, not a player-tool name — corroborating that 'Wizax-A' names a scene-group release context, not a distributed player product.",
    "PSID header values for the two newly-found files (header metadata, not disassembly — recorded here per policy, not written into the Tier 3 memory/entry fields): Wizax_Logo.sid load=$400D size=2275; Wizax_tune.sid load=$0900 size=7520.",
    "UNRESOLVED DISCREPANCY between two SIDM2 internal sources: one memory note lists exactly 4 files in this cluster (2000_A_D, Fight_TST_II, Hall_of_Fame, Min_Axel_F); another lists 'Cool_as_Wize_Title' under the same '1987 Wizax 2004' label but says it is NOT matched by the detector. Not resolved as of this card — flagged rather than silently picking a side.",
    "This player's detector was part of a false-positive bug: it originally over-matched 22 of 27 unrelated Laxity NP21 files on a too-common 11-byte voice-control-clear signature, corrupting their live player data on load. Fixed by gating on a broader 'Vibrants V20 class' copyright-string + file-size check, recovering 20 of 27 affected files to byte-identical audio. Any SF2 conversion pipeline reusing this detector should be aware false positives are a known failure mode here, not just a hypothetical risk.",
    "Belongs to SIDM2's 'V20 umbrella' — its internal label for 5+ distinct PRE-NP21 (1987-1990) Vibrants/Laxity-era player variants (14 files total, no shared encoding across variants). That 'V20' is unrelated to JCH NewPlayer V20 (see jch-newplayer-v20.md) — same digit, different codebase concept entirely.",
    "Editor status: streams reverse-engineered (note/duration format, NP21-compatible byte ranges), F1 wiring judged implementable but explicitly deferred — audio plays correctly regardless via the embedded-binary passthrough."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2:sidm2/wizax_a_detector.py",
    "SIDM2 memory:wizax-a-byte-stream-re.md",
    "SIDM2 memory:vibrants-v20-findings.md",
    "SIDM2 memory:v3.5.26-wizax-false-positive.md",
    "Local dataset: data/composers/laxity.json (player='Rob_Hubbard' on all 7 cluster files; full census of every 'Wizax'-labelled filename in the file, 2026-08-01)",
    "data/sidid.json byTag (confirms no 'Wizax'/'Wizax-A' Player-ID tag exists — 'Rob_Hubbard' is the real match)",
    "CSDb webservice, type=sid, one query per file (Released/LoadAddr/InitAddr/PlayAddr/UsedIn): ids 17713 (2000_A_D), 17762 (Fight_TST_II), 52231 (Hall_of_Fame), 17811 (Min_Axel_F), 17744 (Cool_as_Wize_Title), 17899 (Wizax_Logo), 17900 (Wizax_tune), 17841 (Quit_Wizax, negative check) — https://csdb.dk/webservice/?type=sid&id=<id>",
    "CSDb group Wizax (id 1120): https://csdb.dk/group/?id=1120 — founding date, members, Laxity's Aug-1987 membership",
    "knowledge/players/rob-hubbard.md (cites VGMPF's Rob Hubbard driver page naming Thomas Petersen/Laxity as a reuser) — https://www.vgmpf.com/Wiki/index.php?title=Rob_Hubbard_(C64_Driver)"
  ]
}
```

## Overview

Wizax-A is SIDM2's internal name for a pre-NP21 (1987) native player. A full
census of `data/composers/laxity.json` (not just the aliases the card
originally shipped with) found **7 candidate files**, all exclusively by one
composer, Thomas E. Petersen (Laxity) — a single-composer, personal-routine
signature, not a published tool. Six carry the exact PSID copyright string
"1987 Wizax 2004" (2000_A_D, Fight_TST_II, Hall_of_Fame, Cool_as_Wize_Title,
and two SIDM2's own docs don't mention: Wizax_Logo, Wizax_tune); a seventh,
Min_Axel_F, carries a differing "1987 Yield Point Music" string and may
actually belong to the neighbouring [Zetrex/YP](zetrex-yp.md) cluster instead
(see quirks). Critically, **none of these files are tagged "Wizax" anywhere
in the actual dataset** — the real Player-ID match for all of them is
`Rob_Hubbard`, which is why a literal alias search initially returned zero
files. "Wizax" was a real Danish C64 group (CSDb group id 1120, founded Oct
1986) that Laxity belonged to in mid-1987, and its name survives only in the
SID files' copyright string, not as a distinct player signature.

That Rob_Hubbard tag match, combined with VGMPF's Rob Hubbard driver page
independently naming "Thomas Petersen (Laxity)" as a known reuser of Hubbard's
driver (cited on [rob-hubbard.md](rob-hubbard.md)), is real evidence for a
routine-lineage connection — enough that this card now asserts
`derives_from: ["rob-hubbard"]`, upgraded from the prior stub's deliberately
empty edge. It still does **not** assert any edge toward
[Laxity NewPlayer](laxity-newplayer.md) (NP21) — that specific claim remains
a bare code-comment attribution, not verified lineage.

## Quirks & gotchas

See the `quirks` array above — most load-bearing: the **census-zero
explanation** (aliases were SIDM2-internal names, not real Player-ID tags;
the real tag is `Rob_Hubbard`), the **2 newly found cluster files** a partial
sample would have missed, the **Min_Axel_F cross-cluster discrepancy** with
zetrex-yp, a **negative finding** on the tempting but unrelated Quit_Wizax.sid,
and the pre-existing **known false-positive history** (this detector
over-matched real Laxity NP21 files and corrupted their data before a fix).

## Disassembly notes

Per-voice ZP-indirect-Y stream pointers and the note/duration byte encoding
were traced per-file (each file has its own pointer-table address and ZP
pair — nothing here is a fixed offset). The frequency LUT was confirmed for
one file (2000_A_D, at $1367); not confirmed for the other three.

## Verification

Streams are reverse-engineered but editor wiring (F1) was assessed as
implementable and explicitly deferred, not built. `status: stub`.

## Sources

See the `sources` array.
