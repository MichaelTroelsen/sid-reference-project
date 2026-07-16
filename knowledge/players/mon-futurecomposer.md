# MoN/FutureComposer

<!--
  Player-ID / SIDId tag: "MoN/FutureComposer" — a distinct raw tag from the
  already-carded "FutureComposer_V1.0"/"V3.x"/"V4_Packed"/"FC" family (see
  future-composer.md). Same underlying tool lineage (same CSDb release, same
  author credits), different signature match. Kept as its own card because
  knowledge/COVERAGE.md tracks it as a separate uncarded family (rank 15).
-->

```json
{
  "id": "mon-futurecomposer",
  "name": "MoN/FutureComposer",
  "aliases": ["MoN/FutureComposer"],
  "authors": ["Charles Deenen (Maniacs of Noise) — player/driver", "Juha Granberg (FCS, Finnish Gold) — editor"],
  "released": "1988 (same CSDb release as future-composer.md: V1.0, id 10604, completed 13 Jun 1988, released 20 Jun 1988 by Finnish Gold)",
  "status": "stub",
  "platform": "Native C64 editor (Finnish Gold's FCS) wrapping a Maniacs of Noise replay driver — same tool family as future-composer.md. NOT the unrelated Amiga program of the same name.",
  "csdb_release": 10604,

  "memory": {
    "load_address": "TODO: not verified for files carrying this specific raw tag (see Disassembly notes — a related tag family was traced in future-composer.md, but not confirmed to be byte-identical to this signature)",
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
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["future-composer", "mon-deenen"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a SEPARATE raw Player-ID/SIDId tag from 'FutureComposer_V1.0'/'V3.x'/'V4_Packed'/'FC' (see future-composer.md, already carded, 3,398 files). Both trace to the SAME CSDb release (id 10604, 'Future Composer V1.0') and the same author credits, but they are distinct signature matches over the dataset — do not assume they are byte-identical or merge their aliases without independent verification. knowledge/COVERAGE.md's grouping script treats them as unrelated families because it only merges tags on version-suffix stripping, not on semantic/tool identity.",
    "SIDId's own author line for this tag: 'Charles Deenen made the player & Juha Granberg (FCS) made the editor' (data/sidid.json byTag['MoN/FutureComposer']) — matches future-composer.md's authorship account (Maniacs of Noise driver + Finnish Gold/FCS editor) almost verbatim.",
    "SIDId's comment: 'Editor made for the player of /MUSICIANS/T/Tel_Jeroen/Noisy_Pillars_tune_1.sid'. In THIS project's own dataset that exact file is itself tagged 'MoN/FutureComposer' (self-referential — checked directly in data/composers/jeroen-tel.json), not 'MoN/Deenen' as the mon-deenen.md card's narrative might suggest. This is flagged, not resolved: SIDId's fingerprint scanner may simply be unable to distinguish the pre-editor Noisy Pillars player from the later FCS-editor-generated code at the byte level. Kept as a conservative `shares_routine_with` edge to mon-deenen rather than `derives_from`, mirroring mon-deenen.md's own conservative choice.",
    "Six sibling raw tags share the 'MoN/FutureComposer/' prefix with a scene-group suffix — RWE (45 files), Cyb2 (38), TTWII (18), Bantam (14), Deenen_Digi (11), JTS (11) — per knowledge/COVERAGE.md rows 42/52/88/105/112/116. These are each tracked as SEPARATE uncarded families (the coverage grouper does not merge on '/' sub-paths), likely group-specific hacked/re-signed builds of the same editor output. NOT claimed as aliases of this card without individual verification — do not merge them in without checking each one's own file set first.",
    "Composer concentration: 97 files across 24 composers in this collection (rank 15 by file count per knowledge/COVERAGE.md). Top users: Jeroen Tel 19 (20%), Markus Schneider 15 (15%), SMC 13 (13%), Barry Leitch 6, Charles Deenen 6 — no single composer dominates, consistent with a genuinely-adopted public tool rather than a personal routine (contrast MoN/Deenen's driver, 51% Jeroen Tel).",
    "No SIDId 'released' field is given for this tag (only author/reference/comment) — the 1988 date above is carried over from the shared CSDb release, not from a SIDId-native field."
  ],
  "sources": [
    "data/sidid.json byTag['MoN/FutureComposer'] — author line, csdb reference (id 10604), comment naming the reference tune",
    "knowledge/COVERAGE.md — rank 15, 97 files tagged 'MoN/FutureComposer'; rows 42/52/88/105/112/116 for the six sibling '/RWE' etc. tags",
    "Local aggregate over data/composers/*.json: 97 files / 24 composers (Jeroen Tel 19, Markus Schneider 15, SMC 13, Barry Leitch 6, Charles Deenen 6, Joe 5, AMJ 4, TC 4, and 16 more with 1-3 each)",
    "data/composers/jeroen-tel.json — confirms Noisy_Pillars_tune_1.sid's own player tag in this dataset is 'MoN/FutureComposer'",
    "CSDb release 'Future Composer V1.0' (id 10604): https://csdb.dk/release/?id=10604 — 20 Jun 1988, Finnish Gold; code: Charles Deenen (Maniacs of Noise/Scoop) + Finland Cracking Service; music: Jeroen Tel + Rock",
    "knowledge/players/future-composer.md — sibling card for the 'FutureComposer_V1.0/V3.x/V4_Packed/FC' raw-tag family; same CSDb release, distinct signature match",
    "knowledge/players/mon-deenen.md — sibling card for Charles Deenen's original 'MoN/Deenen' driver; documents the pre-editor MoN lineage this tag's SIDId comment points at",
    "cadaver/sidid project (source of sidid.nfo / SIDId data): https://github.com/cadaver/sidid"
  ]
}
```

## Overview

MoN/FutureComposer is a Player-ID/SIDId raw tag covering 97 files (24
composers) in this collection, per `knowledge/COVERAGE.md` (rank 15 among
uncarded families). Per SIDId's own entry it identifies the same tool already
covered by [`future-composer.md`](future-composer.md) — the **FCS/Finnish
Gold** editor (credited to Juha Granberg) wrapping a **Maniacs of Noise**
replay driver (Charles Deenen), first released as "Future Composer V1.0" on
20 Jun 1988 (CSDb release id 10604) — but detected here under a *different*
raw signature than the `FutureComposer_V1.0`/`V3.x`/`V4_Packed`/`FC` tags that
card's aliases already claim. The two families are kept as separate cards
because they are separate, independently-tracked tag strings in this
project's coverage accounting, and no byte-level comparison has been done to
confirm they are identical binaries. Composer usage is broadly spread (top
user Jeroen Tel at only 20%), consistent with FutureComposer's status as a
genuinely adopted public tool rather than a personal routine — matching the
same conclusion `future-composer.md` reaches from its own, larger tag set.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) **this is not the
same raw tag as `future-composer.md`'s aliases**, even though all evidence
points to the same underlying tool and the same CSDb release — treat them as
related-but-unmerged until verified; and (2) SIDId's own reference file for
this tag's origin story (`Noisy_Pillars_tune_1.sid`) is, in this project's
dataset, tagged with *this same* `MoN/FutureComposer` label rather than the
`MoN/Deenen` label the origin narrative would suggest — flagged, not
resolved.

## Disassembly notes

None done here. `future-composer.md` records a locally-confirmed trace
(load $1800, init $1800, play $1806) for a file carrying the *other*
(`FutureComposer_V1.0`) raw tag — that trace has **not** been checked
against a file carrying this `MoN/FutureComposer` tag, so it is not copied
into this card's `memory`/`entry` fields. A future pass should pick a
representative `MoN/FutureComposer`-tagged `.sid` (e.g. a Jeroen Tel or
Charles Deenen file) and trace it via `sidm2-siddump` to confirm whether the
two tag families really do share entry points/memory layout.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
recorded, sourced from the cached SIDId entry, this project's local composer
data, and the CSDb release page for "Future Composer V1.0". No runtime fact
(memory map, entry points, speed model, data format) has been confirmed by
disassembly for files carrying this specific tag; all are honestly `TODO`.

## Sources

See the `sources` array — SIDId's `MoN/FutureComposer` entry, this project's
`data/composers/*.json` aggregation, `knowledge/COVERAGE.md`, the CSDb
"Future Composer V1.0" release page, and the sibling `future-composer.md`/
`mon-deenen.md` cards this one cross-references.
