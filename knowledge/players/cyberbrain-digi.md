# Cyberbrain_Digi

```json
{
  "id": "cyberbrain-digi",
  "name": "Cyberbrain_Digi",
  "aliases": ["Cyberbrain_Digi"],
  "authors": ["Bjarke Nørgaard Laustsen (CyberBrain)"],
  "released": "TODO: no tool-release date documented (not a distributed tool). Census of all 5 tagged files' CSDb 'Released' fields: Holy Maling and Voodoo People parts 1-3 are each '1995 No Name'; Sverige is '1996 No Name' — earliest attested use 1995, latest 1996, no evidence of a separate editor/tool release date",
  "status": "stub",
  "platform": "Native C64: an embedded digi/sample-playback routine inside Cyberbrain's own 1995-1996 tracks, not a distributed standalone tool — SIDId's sidid.nfo entry for 'Cyberbrain_Digi' carries no REFERENCE line (unlike the same author's later, actually-released 'CyberTracker', which does), and no CSDb tool/release entry exists under this name",
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
    "SIDId (data/sidid.json byTag.\"Cyberbrain_Digi\") records only 'AUTHOR: Bjarke Nørgaard Laustsen (CyberBrain)' — no NAME, RELEASED, REFERENCE, or COMMENT field. Confirmed directly against the upstream sidid.nfo (https://github.com/cadaver/sidid/blob/master/sidid.nfo), which lists the entry as just the two lines 'Cyberbrain_Digi' / 'AUTHOR: Bjarke Nørgaard Laustsen (CyberBrain)' with no REFERENCE — contrast the same file's very next entry, 'CyberTracker' (same author, RELEASED: 2001, REFERENCE: https://csdb.dk/release/?id=2601), which does have one. That contrast is the basis for reading Cyberbrain_Digi as an unreleased embedded routine rather than a distributed tool.",
    "CSDb's scener page for CyberBrain (id 5; groups No Name [1994-], ex-Acheron 1994, ex-BlastMaster 1987-1994, ex-Daniax 2004; Denmark) lists only one 'Sampling'-role credit, on a much later 2014 production ('Hardware Accelerated Samples: My Humps') — it does not match any of the 5 locally-tagged 1990s filenames (Holy Maling, Sverige, Voodoo People part 1, etc.). The 'Digi' label for these specific files is therefore author-attested via SIDId only, not confirmed by a matching scene credit.",
    "Fully single-composer usage: all 5 locally-tagged files belong to Cyberbrain himself (data/composers/cyberbrain.json).",
    "Census of all 5 tagged files' own CSDb 'Released' fields (not a title year, not a UsedIn release year read off a demo — the SID entry's own field): Holy Maling (id 41061) '1995 No Name'; Voodoo People part 1 (id 6634), part 2 (id 6635), part 3 (id 6636) each '1995 No Name'; Sverige (id 41062) '1996 No Name'. So earliest attested 1995, latest 1996 — no outlier missed by a partial sample.",
    "CyberBrain is separately documented (CSDb scener page, and corroborated by press coverage of CSDb's own history) as one of CSDb's own founders/original team (with Perff, KBS, Celtic, ~2001) — a notable biographical fact about the author, not evidence about the Cyberbrain_Digi routine itself, so it is not used to fill any Tier 2 field."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no REFERENCE): data/sidid.json byTag.\"Cyberbrain_Digi\", cross-checked against upstream https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener profile, CyberBrain / Bjarke Nørgaard Laustsen (groups No Name/Acheron/BlastMaster/Daniax, Denmark; one unrelated 2014 'Sampling' credit; CyberTracker 2001 credit): https://csdb.dk/scener/?id=5",
    "CSDb SID-file entry 'Holy Maling' (Bjarke N. Laustsen/Cyberbrain, Released '1995 No Name'): https://csdb.dk/sid/?id=41061",
    "CSDb SID-file entry 'Sverige' (Released '1996 No Name'): https://csdb.dk/sid/?id=41062",
    "CSDb SID-file entry 'Voodoo People part 1' (Released '1995 No Name'): https://csdb.dk/sid/?id=6634",
    "CSDb SID-file entry 'Voodoo People part 2' (Released '1995 No Name'): https://csdb.dk/sid/?id=6635",
    "CSDb SID-file entry 'Voodoo People part 3' (Released '1995 No Name'): https://csdb.dk/sid/?id=6636",
    "CSDb release entry, CyberTracker (contrast case — this one has a real CSDb release id, unlike Cyberbrain_Digi): https://csdb.dk/release/?id=2601",
    "Local dataset: 5 files tagged 'Cyberbrain_Digi', all under composer Cyberbrain, all cross-checked against their own CSDb SID entries — data/composers/cyberbrain.json"
  ]
}
```

## Overview

Cyberbrain_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **Bjarke Nørgaard Laustsen**, handle **CyberBrain**, a Danish
scener (groups No Name, ex-Acheron, ex-BlastMaster, ex-Daniax). SIDId carries
only an author line, no REFERENCE — unlike this same author's later,
CSDb-catalogued **CyberTracker** (RELEASED 2001, `release/?id=2601`), which
does have one. Locally it covers exactly 5 files (a full census, not a
sample), all by Cyberbrain himself, each cross-checked against its own CSDb
SID entry's `Released` field: Holy Maling and Voodoo People parts 1-3 are
each "1995 No Name"; Sverige is "1996 No Name". So the routine is attested
in use from 1995 into 1996, with no evidence of ever being packaged or
distributed as a standalone editor/tool — read together with the missing
SIDId REFERENCE, this points to an in-house/embedded routine rather than a
released tool. CSDb's only "Sampling"-role credit for this scener is on a
much later (2014) and unrelated production, so the "digi" label for these
specific 1990s files is not confirmed by a matching scene credit — author
attribution only. Platform is native C64 (no cross-platform editor found).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has author only, no
release/reference, confirmed against the upstream sidid.nfo and contrasted
with the same author's actually-released CyberTracker; (2) full 5-file census
of CSDb `Released` fields gives 1995-1996 as the attested-use range, with no
separate tool-release date; (3) CSDb's one "Sampling" credit for this scener
is on an unrelated, much later title — no direct corroboration for these 5
files; (4) 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity from SIDId (cross-checked
against upstream sidid.nfo), scene context from CSDb, and a full 5/5-file
census of CSDb `Released` fields plus composer concentration from local
dataset aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo (both the local copy and the
upstream GitHub source), CSDb's CyberBrain scener profile, all 5 tagged
files' own CSDb SID-file entries (a full census), the contrasting
CyberTracker CSDb release entry, and local composer-file aggregation.
