# Zod_Digi

```json
{
  "id": "zod-digi",
  "name": "Zod_Digi",
  "aliases": ["Zod_Digi"],
  "authors": ["Massimo Trento (Zod)"],
  "released": "1989 (earliest dated tune, \"C in China\", CSDb sid id 49858)",
  "status": "stub",
  "platform": "Native C64. Appears to be one scener's own private digi/sample routine, embedded in his own tunes — not a distributed editor or standalone tool.",
  "csdb_release": null,

  "memory": {
    "load_address": "$0850 on every checked file (CSDb sid ids 49858, 37807, 64131) — consistent, but only 3 of 9 spot-checked",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "$0850 (same as load address on all checked files, per CSDb SID header data — not independently disassembled)",
    "play": "$0000 on every checked file (CSDb sid ids 49858, 37807, 64131) — suggests a self-installing routine (e.g. sets its own IRQ/NMI at init and needs no externally-driven play call), a pattern typical of one-shot digi players, but this is inferred from the header field, not confirmed by disassembly"
  },
  "speed": "TODO: not disassembled",

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
    "Textbook personal-routine signature: 9 of Zod's 10 HVSC files carry the 'Zod_Digi' tag, all by a single composer (Massimo Trento, handle Zod, Belgium) — data/composers/zod.json. This is very likely his own private playback routine, reused across his own tunes, never released as a separate tool for others.",
    "The word 'Digi' in the tag is NOT itself evidence of sample/digi playback — per this project's convention (see digitalizer.md), the tag name is a naming hint from a filename regex, not a verified technical fact.",
    "However, there IS independent supporting evidence here (unlike a bare name guess): Zod's own CSDb scener bio records a contemporaneous anecdote that someone phoned in specifically to criticize 'Zod's digital audio work' as poor quality — a scene-era acknowledgement that his tunes were recognized as sample/digi work, not just modern speculation from the filename. https://csdb.dk/scener/?id=7796",
    "All three spot-checked SID files (C in China, Kiss, Acid Mix) share load=$0850, init=$0850, play=$0000 in the CSDb SID header. play=$0000 (no separate play-call address) is consistent with a self-installing IRQ/NMI-driven digi routine, a known pattern for one-shot sample players — but this is a header-field observation, not a disassembly finding, and is not proof of the playback mechanism.",
    "One Zod file in the same folder (Aciiiidd!!, CSDb sid id 60592) has a BLANK player tag despite being by the same composer in the same period — either untagged, or technically different from the other nine; not investigated further.",
    "No SIDId (sidid.nfo / data/sidid.json byTag) entry exists for 'Zod_Digi' — checked 2026-07-17. Unlike most catalogued players, SIDId's byte-signature scanner never picked this up as a recognized/reusable player signature, consistent with it never having spread beyond its author.",
    "No CSDb release exists for a 'Zod_Digi' tool/player itself — CSDb only lists Zod's music releases and cracks, no separate player/editor product credited to him. https://csdb.dk/scener/?id=7796"
  ],
  "sources": [
    "Local dataset: data/composers/zod.json — 9 of 10 files tagged Zod_Digi; composer Massimo Trento (Zod), Belgium, active 1989, CSDb scener id 7796",
    "CSDb scener profile (identity, groups, scener bio anecdote about digi work): https://csdb.dk/scener/?id=7796",
    "CSDb SID entry, 'C in China' (load/init/play addresses): https://csdb.dk/sid/?id=49858",
    "CSDb SID entry, 'Kiss' (load/init/play addresses): https://csdb.dk/sid/?id=37807",
    "CSDb SID entry, 'Acid Mix' (load/init/play addresses): https://csdb.dk/sid/?id=64131",
    "SIDId sidid.nfo via data/sidid.json byTag — no 'Zod_Digi' entry found (checked 2026-07-17)"
  ]
}
```

## Overview

Zod_Digi is the player tag attached to 9 of the 10 HVSC files by **Massimo
Trento**, handle **Zod**, a Belgian scener (coder/cracker/swapper active
1987–1991 in The Mediterranean Team, Orion, Rough Trade Inc., and Warriors
of the Wasteland — CSDb scener id 7796). Local usage is exactly one
composer across 9 files (`data/composers/zod.json`) — the textbook
signature of a personal playback routine, not a published editor. There is
no SIDId catalogue entry and no CSDb release for a "Zod_Digi" tool itself;
only Zod's own tunes exist. Per this batch's convention, the "Digi" in the
name is not itself proof of sample playback, but Zod's own CSDb scener bio
records a contemporaneous anecdote of someone criticizing his "digital
audio work," which is independent, era-appropriate corroboration that this
was recognized as sample/digi work at the time.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the **single-composer/9-file
concentration** (personal routine, not a tool); the **scener-bio anecdote**
as real (if informal) evidence the routine did digi/sample work, going
beyond the bare tag name; and the **consistent load=$0850/init=$0850/
play=$0000** pattern across every spot-checked file, which is suggestive of
a self-installing IRQ/NMI routine but is a header observation, not a
disassembly finding.

## Disassembly notes

None done. No `.sid` was loaded or traced for this card — the memory/entry
notes above come solely from CSDb's published SID header metadata for
three of the nine files, not from opening the binary. A full picture of the
data format, effect encoding, and actual playback mechanism (raster IRQ vs
NMI, sample rate, PWM vs volume-register technique) is entirely `TODO` and
would require disassembling at least one file (e.g. CSDb sid id 49858,
"C in China", load $0850).

## Verification

Not verified. This is `status: stub` — Tier 1/Tier 2 identity and
provenance research only, no reconstruction, no `mcp-c64` trace. All
runtime facts (data format, effects, true entry-point behavior) remain
`TODO`.

## Sources

See the `sources` array — the local composer dataset, Zod's CSDb scener
profile, three CSDb SID-entry pages (header metadata only), and a
confirmed absence in SIDId's `sidid.nfo`.
