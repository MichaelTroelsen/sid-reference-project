# Kosa Protracker (Jakub Kosinski)

```json
{
  "id": "kosa-protracker",
  "name": "Kosa Protracker (Jakub Kosinski)",
  "aliases": ["Kosa_Protracker"],
  "authors": ["Jakub Kosinski (Kosa)"],
  "released": "1995 (Protracker V1.1, Tridam & Tonic)",
  "status": "in-progress",
  "platform": "Sibling tag to the already-carded [[jch-protracker]] — SAME composer (Jakub Kosinski, 'Kosa'), SAME 'Protracker' tool family, but resolved to a DIFFERENT SIDId sub-entry. A real correction to the prior card's framing: the raw SIDId source attributes CSDb release 97901 ('Protracker V1.1') to a sub-version literally named '(Kosa_Protracker_V1)', NOT to 'JCH_Protracker' as that card's citation implied — both tags trace back to the same physical tool release, just different internal SIDId signature buckets. Player-ID-fingerprinted across 13 files, all by Kosa himself.",
  "csdb_release": 97901,

  "memory": { "load_address": "Sample HVSC file traced (Babe Way): load $1000 (init $1000, play $1003 — IDENTICAL addresses to the jch-protracker card's own sample trace, see quirks).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 45 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["jch-protracker"], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId ATTRIBUTION CORRECTION, CONFIRMED via direct inspection of the raw upstream source (raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo, lines 713-829): the `JCH_Protracker` entry has NO release/reference line at all; it's the `(Kosa_Protracker_V1)` sub-entry that carries `RELEASED: 1995 Tridam & Tonic` and `REFERENCE: csdb.dk/release/?id=97901`. The already-carded [[jch-protracker]] card cites this same CSDb release — this is not wrong (CSDb release 97901 genuinely credits BOTH Kosa as coder AND JCH as one of six musicians who contributed a bundled demo tune, per a direct re-check of the release page), but the release ID is more precisely SIDId's reference point for the Kosa_Protracker_V1 signature specifically, not JCH_Protracker's.",
    "IDENTICAL LOAD/INIT/PLAY ADDRESSES to the jch-protracker card's own sample trace ($1000/$1000/$1003 in both) — suggestive of a shared or very similar underlying replay engine, but NOT proof of identical code (many simple players load at the common $1000 address; this is circumstantial, not conclusive).",
    "INTERSPERSED, NON-CHRONOLOGICAL TAG USAGE, CONFIRMED directly from local data: within Kosa's own tune series, the two tags alternate rather than splitting cleanly by date — e.g. 'Zak 1' is tagged JCH_Protracker, 'Zak 1 part 2'/'Zak 2'/'Zak 3' are tagged Kosa_Protracker, then 'Zak 5' reverts to JCH_Protracker. This RULES OUT a simple 'early Kosa engine, later switched to JCH's engine' story.",
    "BEST-SUPPORTED HYPOTHESIS (explicitly flagged as a hypothesis, NOT proven): 'Protracker' is one GUI (Kosa's) that could drive either of two closely related replay engines — Kosa's own smaller routine (this tag, minority use, 13 files) and JCH's more established routine (the sibling tag, majority use, 91 files). Not a linear version upgrade; more likely Kosa could choose per-tune which backing engine to compile with, OR the tag split is simply an artifact of SIDId's signature-matching granularity rather than a genuine authorial distinction. A byte-level disassembly comparison against [[jch-protracker]] would be needed to settle this — logged as the clear next step for a future `verified` pass on either card.",
    "No interview or biographical material on Kosa's development timeline was found anywhere (searched specifically for this). No relationship found to any composer/tool outside the JCH/Kosa/Phobos lineage already documented on the sibling card (checked against Ben Daglish, Rob Hubbard, Martin Galway, David Whittaker, Fred Gray, Matt Gray, Jeroen Kimmel — none found; different, unconnected scene)."
  ],
  "sources": [
    "SIDId raw source (sidid.nfo, JCH_Protracker vs Kosa_Protracker_V1 entries, directly inspected): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "CSDb release 97901 (Protracker V1.1, re-confirmed: Code by Kosa, Music by 6 composers incl. JCH): https://csdb.dk/release/?id=97901",
    "Existing KB card: knowledge/players/jch-protracker.md (the sibling tag and its own Kosa/Phobos research)",
    "Local dataset: data/composers/kosa.json — confirms interspersed, non-chronological tag usage within his own tune series; 13 files tagged Kosa_Protracker, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kosa_Protracker` tag is the sibling of the already-carded
[[jch-protracker]] — same composer (Jakub Kosinski, 'Kosa'), same
"Protracker" tool family, traced to a different SIDId signature bucket
that this card's research corrected: it's actually THIS tag, not
`JCH_Protracker`, that SIDId's own data ties to the 1995 CSDb release both
cards cite. Player-ID-fingerprinted across 13 files, all by Kosa,
interspersed non-chronologically with his JCH_Protracker-tagged tunes.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **genuine attribution
correction** to the sibling card, confirmed by directly inspecting the raw
SIDId source; the **interspersed, non-chronological usage pattern** within
Kosa's own tune series, ruling out a simple version-upgrade story; and an
explicitly-flagged **hypothesis** (not proof) that this may be a
selectable alternate engine within one GUI.

## Disassembly notes

None published. A future `verified` needs an original disassembly of a
`Kosa_Protracker`-tagged `.sid` + trace, specifically compared byte-for-
byte against [[jch-protracker]] to resolve whether the two are genuinely
distinct code.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Kosa_Protracker` `.sid` (Babe Way): load `$1000`, init
`$1000`, play `$1003`, **179 register writes / 50 frames** (45 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — the raw SIDId source, CSDb, and the sibling
jch-protracker card.
