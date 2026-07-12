# Wizax-A (pre-NP21 Laxity-era player)

```json
{
  "id": "wizax-a",
  "name": "Wizax-A (pre-NP21 Laxity-era player)",
  "aliases": ["Wizax", "Wizax-A"],
  "authors": ["TODO: SIDM2's detector module attributes this to 'Thomas E. Petersen (Laxity)' in the late-1980s, but this is an attributional claim, not a verified code-lineage fact"],
  "released": "TODO: late 1980s — sampled files carry an '1987 Wizax 2004' scene-group/copyright label",
  "status": "stub",
  "platform": "Native C64 player routine — pre-NP21 byte-stream player; values are provisionally NP21-range-compatible but this is NOT itself an NP21 fork",
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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["zetrex-yp"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDM2's own detector docstring calls this 'a pre-NP21 player used by Thomas E. Petersen (Laxity) in the late-1980s era' — i.e. it's presented as Laxity's OWN early player, not a third-party fork of anything. This card deliberately does NOT assert a derives_from/successor_of edge toward laxity-newplayer, since that claim is attributional (from a code comment) rather than a verified code-lineage finding — treat the Laxity attribution as a strong lead, not a confirmed fact.",
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
    "SIDM2 memory:v3.5.26-wizax-false-positive.md"
  ]
}
```

## Overview

Wizax-A is SIDM2's name for a pre-NP21 (late-1980s) native player found in
four files carrying an "1987 Wizax 2004" scene-group label. SIDM2's own
detector code attributes it to Laxity's own early work, predating
[Laxity NewPlayer](laxity-newplayer.md) (NP21) by roughly two decades of
scene chronology — but that's a code-comment attribution, not a verified
lineage, so this card deliberately leaves the `derives_from` edge empty
rather than asserting a connection SIDM2 hasn't actually confirmed.

## Quirks & gotchas

See the `quirks` array above — most load-bearing: a **known false-positive
history** (this detector over-matched real Laxity files and corrupted their
data before a fix), and an **unresolved discrepancy** between two SIDM2
sources over the cluster's exact file membership.

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
