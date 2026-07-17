# Censor Digi/16kHz (Swallow / Censor Design)

```json
{
  "id": "censor-digi-16khz",
  "name": "Censor Digi/16kHz (Swallow / Censor Design)",
  "aliases": ["Censor_Digi/16khz"],
  "authors": ["Fredrik Ternell (Swallow)"],
  "released": "2013 (Wonderland XII, Censor Design, BFP 2013)",
  "status": "stub",
  "platform": "TODO: presumed a native-C64 digi routine embedded directly in one Censor Design demo, not a standalone distributed editor/tool — no CSDb tool release or source archive found under this name",
  "csdb_release": null,

  "memory": {
    "load_address": "$0800 (identical across all 4 files' SID headers — see sources)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "$1400 (identical across all 4 files' SID headers)",
    "play": "$0000 in all 4 files' SID headers — i.e. no discrete play-vector is called; consistent with (but not proof of) a fully interrupt/NMI-driven digi playback loop kicked off entirely from init. Not disassembled, so the mechanism itself is TODO."
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
    "The '16khz' in the tag is NOT a restated name guess — it is directly attested: a Lemon64 thread on the Wonderland XII release records a post-release fix ('a high pitched tone in the end part digi') after which the demo achieved 'pure 16khz samples on the real computer with no noticeable carrier'. So the sample rate claim is sourced, not assumed. The exact playback MECHANISM (PWM vs volume-register vs other) is still TODO — no disassembly or format spec was found.",
    "No SIDId entry exists for 'Censor_Digi/16khz' — deepsid_dl/sidid.nfo has no matching tag at all (checked by direct search of the imported data/sidid.json). This mirrors the sibling 'Censor_Digi' (also no SIDId entry), but contrasts with 'Censor_8bit_Digi_1/_2' (which DO have SIDId author entries, one with a technique comment). Attribution here comes only from this project's own composer-data aggregation, not SIDId.",
    "Extremely concentrated and single-production: all 4 files are 'Wonderland XII - Digi (part 1-4)', one composer (Fredrik Ternell/Swallow), one demo, one release (CSDb 120907, Censor Design, 3 Aug 2013, 1st place at BFP 2013). This reads as a routine built for ONE specific demo, not a reused personal tool spanning years — even more concentrated than a typical personal-routine finding.",
    "CLUSTER NOTE (batch hypothesis test): this tag's usage is chronologically ISOLATED from its two siblings. Plain 'Censor_Digi' spans 1990-1993 (Wonderland V through Spasmolytic, per the sibling censor-digi.md card); this '16khz' tag appears only in 2013 — a 20+ year gap. Same author (Swallow) and same demo series name ('Wonderland') recur, but the SID-header entry points ($0800/$1400/$0000) were not checked against the 1990s Censor_Digi files, and no CSDb credit, source archive, or SIDId comment states these are versions of one routine. The era gap argues AGAINST a simple 'baseline/16kHz/8-bit quality ladder built at one time' story and toward '16kHz' being a separately-built, later achievement for this one demo — but this is inference from usage pattern and public release chronology, not a byte-level or source-level confirmation. No edges asserted to either sibling.",
    "CSDb credits list Swallow's role on Wonderland XII specifically as 'Sampling' (distinct from the 'Code' credit shared by five other members) — consistent with a bespoke digi/sampling contribution for this release rather than reuse of a shared group codebase, though this is a production credit, not a code-provenance statement."
  ],
  "sources": [
    "data/composers/swallow.json — 4 files tagged Censor_Digi/16khz, all 'Wonderland XII - Digi (part 1-4)', csdb_id 49548-49552, all solo Fredrik Ternell (Swallow)",
    "data/sidid.json byTag — confirms no 'Censor_Digi/16khz' (or any '16khz') entry exists in the imported SIDId index",
    "CSDb SID entries (load/init/play addresses, identical across all 4 files): https://csdb.dk/sid/?id=49548 ; https://csdb.dk/sid/?id=49551 ; https://csdb.dk/sid/?id=49552",
    "CSDb release Wonderland XII (date, credits, 'Sampling: Swallow'): https://csdb.dk/release/?id=120907",
    "Lemon64 thread on Wonderland XII, source for the '16khz ... no noticeable carrier' post-fix quote: https://www.lemon64.com/forum/viewtopic.php?t=48956",
    "Demozoo record (release date, team list, cross-check): https://demozoo.org/productions/82035/",
    "CSDb scener Swallow (Fredrik Ternell) / Censor Design: https://csdb.dk/scener/?id=2547"
  ]
}
```

## Overview

Censor Digi/16kHz is the local project's tag for a digi/sample playback routine
used on exactly 4 files — all four "Digi" parts of **Censor Design**'s 2013
demo **Wonderland XII** (BFP 2013, 1st place), credited to **Fredrik Ternell
(Swallow)** for sampling. All 4 files share identical SID-header entry points
(load $0800, init $1400, play $0000). No SIDId entry, CSDb tool release, or
source archive exists for it — this looks like a bespoke routine built for one
production, not a distributed editor. The "16kHz" name is directly attested by
a scene forum post-release note ("pure 16khz samples... no noticeable
carrier"), not merely restated from the tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **16kHz claim is sourced** (Lemon64
quote), not just the tag name; **no SIDId entry**, unlike the `Censor_8bit_Digi`
sibling; **extreme concentration** to a single 2013 demo; and the **cluster
hypothesis test** — this tag's usage is 20+ years removed from plain
`Censor_Digi`'s (1990s), which argues against a simple version-ladder story
even though the author is the same person. No `edges` asserted to either
sibling for lack of byte-level or source-level evidence.

## Disassembly notes

None done. No source, format spec, or disassembly was found publicly for this
routine. The uniform SID-header entry points (load $0800/init $1400/play
$0000) across all 4 files are the only structural fact available without
disassembly.

## Verification

Not verified — Tier 1/2 (identity, usage, provenance) only. `status: stub`.
The load/init/play addresses come straight from each file's public CSDb SID
header (not a disassembly or trace), so they are recorded with citation but
no runtime behavior (speed, data format, effects) is asserted. All Tier 3
format/effect fields are `TODO`.

## Sources

See the `sources` array — this project's own `data/composers/swallow.json`
aggregation, `data/sidid.json` (confirming absence), CSDb SID/release pages,
a Lemon64 forum thread, Demozoo, and the CSDb scener page for Swallow.
