# Sample Mixer (Faith Design)

```json
{
  "id": "faith-sample-mixer",
  "name": "Sample Mixer",
  "aliases": ["Faith_Sample_Mixer"],
  "authors": ["Slawomir Balon (BS) / Faith Design (Poland)"],
  "released": "1994",
  "status": "stub",
  "platform": "TODO: presumed native C64 tool (only known distribution is a single .prg download from a CSDb release page) — no manual, documentation, or platform description found to confirm.",
  "csdb_release": 7296,

  "memory": {
    "load_address": "TODO: no disassembly/trace performed",
    "zero_page": "TODO: not documented anywhere found (unlike the unrelated Assassin_Sample_Mixer, this player has no DeepSID players.json entry at all)",
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
    "Despite the tag ending in '_Sample_Mixer', there is NO confirmation this player actually performs digitized-sample playback or 'mixes' multiple sample streams — the name is suggestive but unverified (TODO). Unlike the unrelated Assassin_Sample_Mixer (which DeepSID's players.json independently confirms as 'digi: Yes; 4-bit'), this tool has NO curated DeepSID players.json entry at all — grep of data/players.json for 'Sample Mixer' finds only the Assassin one, not this one. The only description found anywhere (CSDb release 7296) is the bare title 'Sample Mixer V1.2' with no functional write-up.",
    "Author is 'BS' (aliases 'Biseptol'/'BeeS' per CSDb scener id 5048), a Polish scener, coder/diskmag-editor/graphician/hardware-guru, member of Faith Design and formerly of Impact Laboratories (the former-Impact-Laboratories membership is BS's own, per his CSDb scener page — NOT an alternate name of the group Faith Design, whose only listed alt-names are Faith/Faith Des16n/16). SIDId's byTag gives the real name 'Slawomir Balon' for this handle — not independently corroborated on the CSDb scener page itself, which lists no real name, but SIDId is treated as authoritative for this field per project convention.",
    "Extremely concentrated, small-scene tool: exactly 10 files across 2 composers in the local dataset (Blackman: 6 of Blackman's 9 total files; Pajda: 4 of Pajda's 5 total files — data/composers/blackman.json, data/composers/pajda.json). Both composers are tagged country=Poland, consistent with a tool that stayed within the Polish scene and was never widely adopted.",
    "Compared against the sibling tag Assassin_Sample_Mixer (also researched in this batch, id assassin-sample-mixer): both are 1993/1994 Polish tools literally titled 'Sample Mixer', but they are DIFFERENT CSDb releases (7296 vs 129555), by DIFFERENT authors (BS/Faith Design vs Assassin/Vermes), used by DIFFERENT, non-overlapping composer sets (Blackman/Pajda vs JFK/Puma/Mamba) in the local dataset. No shared byte signature, bundled source, or SIDId comment was found linking them — the shared name is very likely just a coincidence of two independent Polish groups picking the same generic descriptive title for a similar class of tool (sample-mixing utility), not evidence of a shared routine or common lineage. Per project rule, name similarity alone is not evidence either way — this is reported, not asserted as an edge.",
    "The author's own tool catalog (CSDb scener id 5048) also lists a Sprite Editor, Hires Converter, and later 'Karampuk Noter' (a noter — a scrolling-text display tool, not a music tracker — 1996-1997) and a 'Trawnik' editor (1996) — suggesting BS was a general-purpose Faith Design tool coder, of which this sample tool was one of several, rather than a dedicated music-scene player author.",
    "Only known distribution is a single .prg on CSDb (getinternalfile.php/42479/Sample_Mixer.prg, 524 downloads) — no D64 image, no source code, no documentation package found."
  ],
  "sources": [
    "data/sidid.json byTag.Faith_Sample_Mixer (name, author='Slawomir Balon (BS)', released='1994 Faith Design', reference=CSDb 7296) — also present verbatim in deepsid_dl/sidid.nfo line 423",
    "CSDb release 'Sample Mixer V1.2' (1994, Faith Design, code: BS): https://csdb.dk/release/?id=7296",
    "CSDb group Faith Design (Poland), listing BS as coder/diskmag-editor/graphician/hardware-guru: https://csdb.dk/group/?id=1281",
    "CSDb scener profile for BS (aliases Biseptol/BeeS, Poland, ex-Impact Laboratories, full release catalog): https://csdb.dk/scener/?id=5048",
    "data/players.json checked (grep 'Sample Mixer') — confirms NO curated entry exists for this tool (only the unrelated Assassin Sample Mixer is curated)",
    "Local dataset aggregation: data/composers/blackman.json (6 of 9 files), data/composers/pajda.json (4 of 5 files) = 10 files, 2 composers, both country=Poland"
  ]
}
```

## Overview

Sample Mixer (tagged `Faith_Sample_Mixer`) is a native-C64-presumed tool by
the Polish scener **BS** (aliases Biseptol/BeeS; SIDId gives the real name
"Slawomir Balon") of the group **Faith Design**, released as "Sample Mixer
V1.2" in 1994. Local dataset usage is tiny and concentrated: **10 files
across exactly 2 composers**, both Polish (Blackman and Pajda) — a
personal/small-scene tool rather than a widely-adopted editor, consistent
with the composer-concentration signal this project treats as evidence for
that conclusion (`_Sample_Mixer` per se says nothing; the concentration
numbers do).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) despite the name, **no source
confirms actual digi/sample-mixing playback** — this tool has no DeepSID
`players.json` entry at all, unlike its namesake sibling; (2) it is a
**tight 2-composer, all-Poland tool**, never seen wider adoption; (3) the
similarly-named **Assassin_Sample_Mixer** (also in this batch) is a
DIFFERENT release, different author, different group, and disjoint
composer set — the shared "Sample Mixer" title is reported as a likely
naming coincidence between two independent Polish scene groups, NOT
asserted as any kind of shared-routine or lineage edge, per this batch's
evidence rule.

## Disassembly notes

None performed. No source code, format documentation, or DeepSID spec data
was found anywhere for this tool; the only known artifact is a single
`.prg` download on its CSDb release page (no D64, no readme/doc file
attached). A disassembly would have to start cold from that binary.

## Verification

Not verified — no trace/reconstruction performed here (Tier 1/2 provenance
work only). No runtime facts (memory map, entry points, speed, data format)
were found in any public source, so all Tier 3 fields remain `TODO` and
`status` stays `stub` (not `in-progress`, since unlike some sibling cards
there is no DeepSID-curated spec fact to seed even one runtime field with).

## Sources

See the `sources` array — SIDId (`data/sidid.json` / `deepsid_dl/sidid.nfo`),
the CSDb release and group/scener pages, a confirmed absence-check against
DeepSID's curated `players.json`, and the local composer-file aggregation.
