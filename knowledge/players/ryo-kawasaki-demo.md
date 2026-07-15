# Kawasaki Synthesizer Demo Driver (Ryo Kawasaki)

```json
{
  "id": "ryo-kawasaki-demo",
  "name": "Kawasaki Synthesizer Demo Driver (Ryo Kawasaki)",
  "aliases": ["Ryo_Kawasaki"],
  "authors": ["Ryo Kawasaki"],
  "released": "1983-1984 (Sight & Sound Music)",
  "status": "in-progress",
  "platform": "A THIRD, separately-fingerprinted tag from already-carded [[kawasaki-synthesizer]] (jazz-fusion guitarist/guitar-synth pioneer Ryo Kawasaki's own C64 music-editor product) — this one covers files explicitly bearing the PRODUCT'S OWN NAME in their titles ('Kawasaki Synthesizer Demo,' 'Kawasaki Synthesizer Theme Song'), plausibly a self-promotional demo-disk driver distinct from the 25 plainly-titled files on the main tag. Whether this is architecturally distinct at the code level, or the same driver simply re-fingerprinted, remains UNCONFIRMED. Player-ID-fingerprinted across 3 files, all by Kawasaki.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Kawasaki Synthesizer Demo): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a 150-write/50-frame sample, evenly split across all three voices)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "A GENUINELY THIRD (not just second) FINGERPRINTED KAWASAKI TAG WAS FOUND, a new discovery for this KB: this project's own DeepSID-dump snapshot shows Kawasaki has 28 total files across THREE separate player tags, not two — the already-carded `Kawasaki_Synthesizer` (25 files, plainly-named tunes like '12_8,' 'Blues_F,' 'Calypso'), THIS tag `Ryo_Kawasaki` (3 files, all explicitly bearing the product's own branding in their titles), and a fourth, entirely UNCARDED tag `Kawasaki_Rhythm_Rocker` (1 file, 'Satellite_Station.sid') — matching the 'FOUR C64 programs' Wikipedia already credits him with authoring (Kawasaki Synthesizer, Kawasaki Rhythm Rocker, Kawasaki Magical Musicquill, Kawasaki MIDI Workstation), flagged as a lead for a future card.",
    "SUGGESTIVE BUT NOT CONCLUSIVELY PROVEN TO BE A DISTINCT DRIVER: CSDb independently confirms the SAME load/init/play addresses given for the sample trace ($1000/$1000/$1003) as the already-carded main tag's own trace — IDENTICAL entry points, yet DeepSID's fingerprinter still splits them into a separate tag, meaning some byte-level signature differs beyond just those three addresses. No disassembly or source exists to confirm exactly what differs. The write-count difference (150 writes/50 frames here, evenly split across all 3 voices, vs. the main card's 51 writes/50 frames) is plausibly just note-density/voice-count (chords vs. a monophonic sample), NOT proof of an architecturally distinct driver — explicitly flagged as unresolved, would need an actual trace/disassembly comparison to settle.",
    "AN INTERNET ARCHIVE DISK IMAGE TITLED EXACTLY 'Kawasaki Synthesizer Demo (1984)(Ryo Kawasaki)' EXISTS — a single-sided 174,848-byte D64, distinct in size from the two-disk Performer/Composer main product already documented on [[kawasaki-synthesizer]]'s card. Its metadata gave no directory listing, so it could NOT be directly confirmed to contain these exact 3 files, but it strongly suggests a genuine, separately-distributed standalone promotional demo disk.",
    "'PRELUDE BY J S BACH' (the tag's third file) IS CONFIRMED TO EXIST under this tag via its own CSDb SID entry (id=16523), consistent with demo material showing off the product's range on a classical piece — but no further description exists anywhere beyond its bare existence.",
    "A DISCREPANCY WITH WIKIPEDIA'S OWN 'KAWASAKI SYNTHESIZER' ARTICLE WAS FOUND AND FLAGGED, not smoothed over: Wikipedia states the PRODUCT bundled a techno track called 'Satellite Station' — but this project's own data instead tags that exact file under the separate, uncarded `Kawasaki_Rhythm_Rocker` tag, NOT under this tag or the main `Kawasaki_Synthesizer` tag. Possible explanation: Wikipedia conflated two of his four separate C64 products, or the file genuinely reflects engine reuse across products — left explicitly unresolved. Already noted as a quirk on [[kawasaki-synthesizer]]'s own card, updated in this same batch.",
    "NO CSDb RELEASE SPECIFICALLY CATALOGS A 'DEMO DISK' BUNDLE — all three files exist only as standalone HVSC-sourced CSDb SID entries (ids 16518, 51334, 16523), none linked to a formal release page. No SIDId `byTag` match found for any of the three Kawasaki tags.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[kawasaki-synthesizer]] (same composer, plausibly-related driver — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (same finding as the main card — none found)."
  ],
  "sources": [
    "Existing KB card: knowledge/players/kawasaki-synthesizer.md (the main 25-file tag, same author, updated in this same batch)",
    "CSDb sid id=16518 (Kawasaki Synthesizer Demo, traced file): https://csdb.dk/sid/?id=16518",
    "CSDb sid id=51334 (Kawasaki Synthesizer Theme Song, identical entry points to id=16518): https://csdb.dk/sid/?id=51334",
    "CSDb sid id=16523 (Prelude by J S Bach): https://csdb.dk/sid/?id=16523",
    "CSDb release id=135444 (generic 'Kawasaki Synthesizer' crack, undated, does not explicitly reference these 3 files): https://csdb.dk/release/?id=135444",
    "Internet Archive — 'Kawasaki Synthesizer Demo (1984)(Ryo Kawasaki)' D64 disk image: https://archive.org/details/d64_Kawasaki_Synthesizer_Demo_1984_Ryo_Kawasaki",
    "Wikipedia — Kawasaki Synthesizer (the 'Satellite Station' bundling discrepancy): https://en.wikipedia.org/wiki/Kawasaki_Synthesizer",
    "Local dataset: data/composers/ryo-kawasaki.json (DeepSID dump — confirms the 3-tag, 28-file total split)",
    "Local dataset: 3 files tagged Ryo_Kawasaki, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ryo_Kawasaki` tag is a third, separately-fingerprinted driver from
already-carded [[kawasaki-synthesizer]] — files explicitly bearing the
product's own name, plausibly a self-promotional demo-disk driver.
Whether it's architecturally distinct from the main tag at the code
level remains genuinely unconfirmed. Player-ID-fingerprinted across 3
files, all by Kawasaki.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **discovery of a
third fingerprinted Kawasaki tag** (plus a fourth, entirely uncarded
one), matching the 'four C64 programs' Wikipedia already credits him
with. Also notable: a genuine, unresolved **discrepancy with Wikipedia's
own article** about which product bundled the 'Satellite Station' track
— flagged rather than silently reconciled.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Ryo_Kawasaki`-tagged
`.sid` + trace — the only way to settle whether this is genuinely
architecturally distinct from [[kawasaki-synthesizer]]'s own driver
despite sharing identical entry-point addresses.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Ryo_Kawasaki` `.sid` (Kawasaki Synthesizer Demo):
load `$1000`, init `$1000`, play `$1003`, **150 register writes / 50
frames** (0 filter writes). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — the related kawasaki-synthesizer card, CSDb
(3 entries), Internet Archive, Wikipedia, and local dataset cache.
