# MahoneyDigi (THCM)

```json
{
  "id": "mahoneydigi-thcm",
  "name": "MahoneyDigi (THCM)",
  "aliases": ["MahoneyDigi/THCM"],
  "authors": [
    "Pex Tufvesson (Mahoney) — inferred from the tag name; not directly confirmed for THIS tag (see quirks)",
    "Uwe Anfang (The Human Code Machine / THCM) — inferred from the tag name and THCM's established X/THCM naming pattern; not directly confirmed for THIS tag (see quirks)"
  ],
  "released": "TODO: no year given anywhere for this exact tag (no SIDId entry exists); observed files in this dataset span 2018 (C=Bit 18) to 2023 (Next Level)",
  "status": "stub",
  "platform": "TODO: not confirmed as a standalone tool at all. No SIDId entry, no CSDb release, no source found under this name. Best-supported reading (see quirks): a per-track configuration of THCM's own personal, never-publicly-released C64-executable-building routine (already carded here as `oxymod4bit-thcm` under its SIDId names OxyMod/THCM and OxyMod4Bit/THCM, aka \"THCMod\") — NOT independently confirmed, kept as prose hypothesis only.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx",
    "zero_page": "TODO: which ZP addresses the play routine clobbers",
    "layout": "TODO: notes on where order lists / tables / patterns live"
  },
  "entry": {
    "init": "TODO: $xxxx (A/X/Y convention if any)",
    "play": "TODO: $xxxx (call rate / speed model)"
  },
  "speed": "TODO: 1x-Nx, CIA vs raster/VBI, how multispeed is signalled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: how a command byte is laid out",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NO SIDId ENTRY EXISTS for this exact tag. Checked both the locally cached `data/sidid.json` (byTag has 373 keys, none matching 'MahoneyDigi/THCM' or any 'mahoneydigi' variant) and the live upstream source, github.com/cadaver/sidid/blob/master/sidid.nfo (fetched directly and grepped this session) — confirmed absent there too, so this is a genuine data gap, not a stale local import. This means, unlike its cluster-mates 8bitDigi/Mahoney and OxyMod/THCM|OxyMod4Bit/THCM, there is no SIDId author/comment/reference to draw on for THIS tag at all.",
    "Composer concentration: 4/4 files in this dataset (100%) are by a single composer, Jammer (Kamil Wolnikowski) — aggregated from data/composers/jammer.json. No other composer uses this tag anywhere in the local dataset. This is a personal/one-off routine embedded in a handful of specific demo productions, not a distributed tool — do not read it as a published editor.",
    "All four tagged files are Jammer tracks inside Performers-group demo productions that credit BOTH Pex Tufvesson (Mahoney) and Uwe Anfang (The Human Code Machine / THCM) as coders: 'Immigrant Song' (csdb.dk/sid/?id=56130) in C=Bit 18, Performers, 2018 (csdb.dk/release/?id=170950, code credits list Mahoney and The Human Code Machine); 'Next Level of Insomnia' (csdb.dk/sid/?id=62219), 'Next Level of Insomnia (short)' (csdb.dk/sid/?id=62227) and 'Sky Buster' (csdb.dk/sid/?id=62222), all in Next Level, Performers, 2023 (csdb.dk/release/?id=232976, code credits list Mahoney and The Human Code Machine among others).",
    "Jammer himself — the sole composer of every file carrying this tag — commented directly on the Next Level release page describing THCM's tool: \"THCMod is mainly a vessel for software mixing of digi channels - it can have different playback methods assigned\" (csdb.dk/release/?id=232976, comment dated 24 June 2023). This is first-party evidence from the actual composer of these exact tracks, not a secondhand guess.",
    "HYPOTHESIS, NOT CONFIRMED — kept as prose only, no edges[] asserted per this repo's rule that implied/inferred lineage must not become a machine-readable edge: 'THCMod' is the same tool already carded in this repo as `oxymod4bit-thcm.md` (there merged from SIDId tags OxyMod/THCM + OxyMod4Bit/THCM, partly on the remix64 LMan interview naming it 'THCMod'). If so, 'MahoneyDigi/THCM' could be a THIRD SIDId-visible fingerprint of that same per-track digi-mixing tool, this instance configured to use Mahoney's specific volume-register 8-bit technique (per SIDId's separate '8bitDigi/Mahoney' comment: '...via the volume register') rather than the frequency-register technique OxyMod/THCM's own SIDId comment describes. FOR: THCM's well-established one-tool/many-tag pattern (see oxymod4bit-thcm.md's own merge precedent), Jammer's direct statement that the tool supports multiple assignable playback methods, and Mahoney+THCM sharing the coder credit on every release these exact files come from. AGAINST/UNCERTAIN: no source states this equivalence outright for this specific tag; SIDId added entries for THCM's other two tags but never this one, which could equally mean it is a genuinely distinct, unrelated routine that merely happens to share THCM's naming convention. Left as an open, sourced hypothesis for a future pass (a byte-level disassembly diff against an OxyMod/THCM file, per the plan already noted in oxymod4bit-thcm.md, would resolve it either way).",
    "Real shared-scene-circle link, offered as corroboration only, not proof of authorship: THCM and Jammer are both long-standing members of the same group, MultiStyle Labs (THCM since 15 Oct 2016 per csdb.dk/scener/?id=9589; Jammer since 2002 per csdb.dk/scener/?id=8105)."
  ],
  "sources": [
    "Local dataset: 4 files, 1 composer (Jammer, 100%) — aggregated from data/composers/jammer.json (raw 'player' field on 4 folder records)",
    "data/sidid.json byTag — checked, no key matches 'MahoneyDigi/THCM' or any case variant (373 total keys)",
    "github.com/cadaver/sidid/blob/master/sidid.nfo — fetched and grepped directly this session, confirms no entry exists upstream either",
    "data/sidid.json byTag['8bitDigi/Mahoney'] — author Pex Tufvesson (Mahoney), technique comment (volume-register 8-bit @ 44.1kHz)",
    "data/sidid.json byTag['OxyMod4Bit/THCM'] / ['OxyMod/THCM'] — author Uwe Anfang (The Human Code Machine)",
    "CSDb release, C=Bit 18 by Performers (2018) — code credits include Mahoney and The Human Code Machine; music credits include Jammer's 'Immigrant Song' — https://csdb.dk/release/?id=170950",
    "CSDb release, Next Level by Performers (2023) — code credits include Mahoney and The Human Code Machine; music credits include Jammer's 'Next Level of Insomnia', 'Next Level of Insomnia (short)', 'Sky Buster'; Jammer's own comment describing THCMod as \"a vessel for software mixing of digi channels\" — https://csdb.dk/release/?id=232976",
    "CSDb SID entries: https://csdb.dk/sid/?id=56130 (Immigrant Song), https://csdb.dk/sid/?id=62219 (Next Level of Insomnia), https://csdb.dk/sid/?id=62227 (Next Level of Insomnia short), https://csdb.dk/sid/?id=62222 (Sky Buster)",
    "CSDb scener profiles: The Human Code Machine — https://csdb.dk/scener/?id=9589 ; Jammer — https://csdb.dk/scener/?id=8105 (both list MultiStyle Labs membership)",
    "knowledge/players/oxymod4bit-thcm.md (this repo) — sibling card establishing THCM's tool identity/history ('THCMod'), cited here only for the hypothesis in quirks, not asserted as a confirmed edge"
  ]
}
```

## Overview

`MahoneyDigi/THCM` is a SIDId Player-ID signature naming two identifiable C64
sceners — **Pex Tufvesson (Mahoney)**, known for the 8-bit-via-volume-register
digi playback technique, and **Uwe Anfang (The Human Code Machine / THCM)**,
known for a personal, never-publicly-released MOD/digi conversion tool — yet
the tag itself has **no entry at all in SIDId** (checked both the local cache
and the live upstream `sidid.nfo` this session). In this dataset it appears on
exactly 4 files, all by a single composer, **Jammer (Kamil Wolnikowski)**: a
fully personal/embedded routine, not a released tool. All four files are
Jammer tracks inside Performers-group demo productions ("C=Bit 18", 2018;
"Next Level", 2023) whose CSDb code credits list **both** Mahoney and THCM —
and Jammer himself, commenting on the "Next Level" release, described THCM's
tool ("THCMod") as a multi-mode digi-channel mixer. That is real, sourced
corroboration that this tag plausibly denotes THCM's tool configured to use
Mahoney's specific technique for these Jammer tracks — but it stops short of
being a stated fact, so it is recorded here as a cited hypothesis in `quirks`,
not as a machine-readable `edges` relationship.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) SIDId has genuinely no
entry for this tag, unlike its two cluster-mates; (2) the family is 100%
Jammer, 4 files, a personal/embedded routine rather than a tool; (3) both
named parties in the tag (Mahoney, THCM) are independently confirmed as
coders on every release these files come from; (4) the composer's own CSDb
comment describes THCM's tool as a configurable digi mixer, which is
consistent with — but does not prove — this tag being a third fingerprint of
the same tool already carded as `oxymod4bit-thcm`. That equivalence is
deliberately NOT asserted as an `edges` entry.

## Disassembly notes

None done here. No source was found, and no disassembly was attempted (out of
scope for this pass). The most promising concrete next step, if this family
is picked up again, is a byte-level diff of one of these four files' playback
routine against an `OxyMod/THCM`-tagged file (e.g. "Tristar Boulder", per
`oxymod4bit-thcm.md`) — that would either confirm or refute the "same tool,
third fingerprint" hypothesis directly, rather than leaving it as circumstance.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (composer
concentration, the absence of a SIDId entry, and the CSDb credit/comment
evidence) are confirmed, each cited above. No memory map, entry point, or
data format was extracted or guessed; every Tier 3 field is `TODO`. The
Mahoney/THCM authorship attribution is explicitly flagged in the `authors`
array itself as inferred from the tag name plus circumstantial evidence, not
directly confirmed for this specific tag by any single source.

## Sources

See the `sources` array — local dataset aggregation, SIDId (`data/sidid.json`
and the live `sidid.nfo`, the latter confirming the absence), CSDb (two
release pages with full credits and Jammer's own comment, four SID-entry
pages, two scener profiles), and this repo's sibling card `oxymod4bit-thcm.md`
(cited only for the hypothesis, not as a confirmed source of fact about this
tag).
