# Voicemaster_Covox (player routine)

```json
{
  "id": "voicemaster-covox",
  "name": "Voicemaster_Covox (player routine)",
  "aliases": ["Voicemaster_Covox"],
  "authors": ["Brad Stewart & Ned Higgins (per SIDId, Covox Inc.)"],
  "released": "1984, Covox Inc. (per SIDId; independently corroborated as Covox's first product year — see quirks)",
  "status": "stub",
  "platform": "Real historical hardware: the Covox Voice Master was a low-cost speech-digitizer/voice-recognition peripheral board for the Commodore 64 (also Apple II, Atari 8-bit), released 1984 by Covox Inc. This SIDId tag fingerprints a C64 playback routine associated with that hardware/software bundle, not a music tracker.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "REAL, HISTORICALLY DOCUMENTED HARDWARE PRODUCT: SIDId's byTag entry gives name 'Voicemaster', author 'Brad Stewart & Ned Higgins', released '1984 Covox Inc.'. Independent web research confirms Covox Inc.'s first product, released in 1984, was called 'Voice Master' — a low-cost speech-digitizer/voice-recognition board for the C64 (also ported to Apple II and Atari 8-bit) — and that Brad Stewart (VP, responsible for developing all of Covox's products) was a real, named figure at the company (Internet Archive interview, ANTIC podcast). 'Ned Higgins' as a named co-author was NOT independently corroborated in this pass's web search — recorded only as SIDId states it, not verified against a second source.",
    "ONE LOCALLY-TAGGED FILE ONLY: 'Thunderbirds' by Kevin Moughtin (data/composers/kevin-moughtin.json, csdb id 1969) — a single digitized/sampled cue, not a tracker composition, consistent with a hardware speech-digitizer playback routine rather than a music format.",
    "'DIGI BY NAME' IS UNUSUALLY WELL-EVIDENCED HERE, not just a filename guess: this is a genuine sample-playback technique tied to a real, documented consumer hardware product (a speech digitizer board), not an inferred routine — the strongest identity case of any '_Digi'/sample-adjacent tag in this batch."
  ],
  "sources": [
    "data/sidid.json byTag['Voicemaster_Covox']: name 'Voicemaster', author 'Brad Stewart & Ned Higgins', released '1984 Covox Inc.'",
    "Local dataset: data/composers/kevin-moughtin.json — 1 file tagged 'Voicemaster_Covox' ('Thunderbirds', csdb id 1969); see knowledge/COVERAGE.md row #116 (1 file)",
    "Wikipedia, Covox (first product 1984, Voice Master speech-synthesis/digitizer board for C64): https://en.wikipedia.org/wiki/Covox",
    "Internet Archive, Brad Stewart / Covox interview (Kevin Savetz): https://archive.org/details/brad-stewart-covox",
    "Retrogames.co.uk, 'Voice Master by Covox Inc': https://www.retrogames.co.uk/020774/Commodore/Voice-Master-by-Covox-Inc",
    "VGMPF wiki, Voice Master: https://www.vgmpf.com/Wiki/index.php/Voice_Master"
  ]
}
```

## Overview

`Voicemaster_Covox` is SIDId's tag for a C64 playback routine tied to the
**Covox Voice Master**, a real, historically documented speech-digitizer
peripheral board released in 1984 by **Covox Inc.** — Covox's first product.
SIDId credits authorship to "Brad Stewart & Ned Higgins"; Brad Stewart's role
at Covox is independently corroborated (he was VP and responsible for
developing all of Covox's products), though "Ned Higgins" was not found in a
second, independent source. The one locally-tagged file, "Thunderbirds" by
Kevin Moughtin, is a single digitized cue rather than a tracker composition —
consistent with playback of speech-digitizer hardware, not a music format.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is the most solidly-evidenced
"digi"-adjacent identity in this batch, tied to a real, named consumer
hardware product rather than an inferred routine — but the exact
co-author "Ned Higgins" remains only SIDId-sourced, not independently
verified.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no C64-side disassembly or
public source for the playback routine itself was located in this pass
(only the hardware product's general history).

## Verification

**Not verified — `status: stub`.** Identity/provenance is unusually
well-established for a stub (real hardware product, named author partially
corroborated), but no runtime fact has been confirmed by disassembly.

## Sources

See the `sources` array — the cached SIDId entry, Wikipedia's Covox article,
an Internet Archive interview with Brad Stewart, Retrogames.co.uk, and
VGMPF's Voice Master page.
