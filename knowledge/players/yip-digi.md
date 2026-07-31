# Yip_Digi

```json
{
  "id": "yip-digi",
  "name": "Yip_Digi",
  "aliases": ["Yip_Digi"],
  "authors": ["Jori Olkkonen (Yip)"],
  "released": "TODO: no standalone-tool release date exists — this is a one-off routine written for a single tune, the 'Netherworld' title theme (C64 game, Hewson, 1988). Confirmed (not merely PSID-header context): a 2021 v2.fi retrospective states the composer built the routine specifically to test simultaneous playback of 4 digitized sample channels (drums, bass, 2 guitars) for that title theme, and it was never reused. 1988 is the tune's only attested use, not a tool release.",
  "status": "stub",
  "platform": "TODO: a one-off, native-C64 multi-channel digi-sample playback routine, not a released/reusable tool or editor — written by Jori Olkkonen (Yip, later known as Petrik Salovaara) as an experiment for the 'Netherworld' C64 title theme (Hewson, 1988). No SIDId entry and no dedicated CSDb tool/release page exist under this name; the only third-party documentation found is JC64dis (a disassembler) including the tune as an example file, explicitly labelled 'YIP digi'.",
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
    "This tag is explicitly the sibling flagged (but deliberately NOT merged) by knowledge/players/yip-megasound.md's own quirks: \"A separate, smaller raw tag 'Yip_Digi' (6 files)...also exists for the same author but is NOT the same family as this card — it is used only by Yip's own composer folder(s), suggesting a distinct personal digi-playback routine. No edge is asserted here for lack of direct evidence of a code relationship between the two.\" This card exists to give that sibling tag its own record, per this project's rule that similar names/authors are not evidence of shared code.",
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Yip_Digi' returns undefined) — unlike 'Yip_MegaSound' from the same author, which has a full name/release/reference/comment. That absence is itself a signal consistent with an unpublished, in-house routine rather than a titled, released tool.",
    "Census correction: the 6 tagged records are only 3 DISTINCT files (CSDb sid ids 32109 'Netherworld', 38386 'Netherworld (preview 2)', 58890 'Netherworld (preview 1)'), each counted twice because it appears in two HVSC composer catalogue folders for the same person — data/composers/yip.json and data/composers/jori-olkkonen.json list the identical collection_path/hash trio. Perfectly single-composer, 100% self-use either way (3/3 or 6/6), but the file count is 3 distinct tunes, not 6.",
    "The composer profile itself documents a name correction consistent with this being one person under two catalogue entries: data/composers/yip.json's full_name field reads '<del>Jori Olkkonen</del> Petrik Salovaara' — HVSC's own record striking the birth-name credit in favour of a later legal name. A 2021 v2.fi retrospective independently confirms 'the composer now goes by the name Petrik Salovaara.'",
    "The 3 files are not identical in format: 'Netherworld' (32109) and 'Netherworld (preview 2)' (38386) share LoadAddr/InitAddr $8AC0 (35008) and DataSize 5952 per the CSDb webservice sid entry, but 'Netherworld (preview 1)' (58890) has a different LoadAddr $3000 (12288) / InitAddr $5000 (20480) and DataSize 8236 — PSID header metadata only, not disassembled, but it means the 3 tagged files are not guaranteed to be byte-identical instances of one routine.",
    "JC64dis (a C64 disassembler, Ice Team) lists this tune as an included example file in its v2.6 release notes, named exactly 'YIP digi (tune \"Netherworld\" by Jori Olkkonen (Yip) (c) 1988 Hewson)' — third-party corroboration that the routine circulates under the 'YIP digi' name, independent of this project's own raw-tag naming. No entry-point or format facts were extracted from this reference; it is cited for the name/example-file fact only, not as a Tier 3 source.",
    "A 2021 v2.fi retrospective (Finnish-language) states the routine plays 4 simultaneous digitized sample channels (drums, bass, two guitars) and was built as a one-off experiment testing whether the C64 could play multiple digi samples at once; it was used only for the game's title screen because of the CPU load, never during gameplay, and never reused elsewhere — direct evidence this is a personal one-off, not a released tool.",
    "No CSDb 'Sampling'-role credit was found on Yip's own scener page (id 2599) matching any of the locally-tagged titles (e.g. 'Netherworld') — his listed credits there are 'Music'/'Code', not a distinct sampling role. So unlike Mcee_Digi, Steve_Day_Digi, or Madhacker_Digi in this same batch (which have direct or partial CSDb 'Sampling' credit matches), the 'Digi' label here is unconfirmed by any scene credit — author attribution only, from the raw tag/filename pattern and file ownership."
  ],
  "sources": [
    "Cross-reference: knowledge/players/yip-megasound.md quirks array (notes 'Yip_Digi' as a separate, not-merged sibling tag by the same author)",
    "Local dataset: 6 records tagged 'Yip_Digi', census-verified as 3 distinct files (CSDb sid ids 32109, 38386, 58890) duplicated across 2 HVSC composer catalogue folders for the same person — data/composers/yip.json, data/composers/jori-olkkonen.json",
    "CSDb scener profile, Yip / Jori Olkkonen (groups Artline Designs, ex-Pure-Byte; Finland; no 'Sampling'-role credit found matching locally tagged titles): https://csdb.dk/scener/?id=2599",
    "CSDb webservice, SID-file entries 'Netherworld' / 'Netherworld (preview 2)' / 'Netherworld (preview 1)' (PSID header fields only, via scripts/lib/csdb-client.js getSidRelease): https://csdb.dk/sid/?id=32109, https://csdb.dk/sid/?id=38386, https://csdb.dk/sid/?id=58890",
    "data/sidid.json (checked: no 'Yip_Digi' entry exists in byTag, confirming the absence noted above)",
    "v2.fi retrospective (Finnish, 2021), '33 vuotta vanhan suomipelin soundtrack nousi nettihitiksi' — confirms the routine was a one-off 4-channel digi-sample experiment for Netherworld's title theme, and that the composer now goes by Petrik Salovaara: https://www.v2.fi/uutiset/pelit/34877/33-vuotta-vanhan-suomipelin-soundtrack-nousi-nettihitiksi/",
    "Lemon64 thread, JC64dis 2.6 release notes — lists 'YIP digi (tune \"Netherworld\" by Jori Olkkonen (Yip) (c) 1988 Hewson)' as an included example disassembly file: https://www.lemon64.com/forum/viewtopic.php?t=82491",
    "Wikipedia, 'Netherworld (video game)' — confirms Jori Olkkonen composed the game's music, no further technical detail: https://en.wikipedia.org/wiki/Netherworld_(video_game)"
  ]
}
```

## Overview

Yip_Digi is the local/SIDId raw tag for a one-off, native-C64 multi-channel
digi-sample playback routine attributed by file ownership to **Jori
Olkkonen**, known as **Yip** of Pure-Byte/Artline Designs (Finland, later
known as Petrik Salovaara) — the same composer behind the published
"MegaSound Music Editor" (see `knowledge/players/yip-megasound.md`). That
sibling card explicitly declines to merge this tag in, noting it as a
separate, unpublished personal routine; this card exists to give `Yip_Digi`
its own honest record rather than leave it uncarded. A 2021 v2.fi
retrospective confirms this directly: the routine was built as an experiment
to test simultaneous playback of 4 digitized sample channels (drums, bass,
two guitars), used only for the "Netherworld" (C64, Hewson, 1988) title
theme because of its CPU cost, and never reused as a general tool. The 6
tagged records census down to 3 distinct files (Netherworld and two
previews), duplicated across two HVSC composer catalogue folders for the
same person. Unlike MegaSound, this tag has no SIDId entry and no CSDb
tool/release page at all — a purely personal, unreleased routine by every
available signal, now independently corroborated rather than merely inferred.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the explicitly-flagged
sibling of `yip-megasound.md`'s tag, deliberately kept separate per this
project's "similar names/authors are not evidence of shared code" rule; (2)
no SIDId entry or CSDb tool/release page exists for this tag; (3) the 6
tagged records are 3 distinct files, not 6, duplicated across two catalogue
folders for one person (also documented as a name change to Petrik
Salovaara); (4) a 2021 v2.fi retrospective independently confirms the
one-off, non-tool nature of the routine and its technical goal; (5) JC64dis
2.6 includes the tune as an example disassembly file under the name "YIP
digi"; (6) no CSDb scene credit corroborates a distinct "sampling" role for
these files.

## Disassembly notes

None done here. No public source, CSDb tool/release entry, or format
documentation was located for this tag. All Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`, seeded from local dataset
aggregation, the sibling `yip-megasound.md` card's own prior research, a CSDb
scener-profile and webservice sid-entry check, and a Finnish-language
retrospective (v2.fi) plus a disassembler's example-file listing (JC64dis via
Lemon64). No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — the `yip-megasound.md` cross-reference, local
composer-file census, CSDb's Yip scener profile and webservice sid entries,
the v2.fi retrospective, the JC64dis/Lemon64 release notes, and Wikipedia's
Netherworld page.
