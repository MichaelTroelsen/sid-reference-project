# Henning Andersen (player routine)

```json
{
  "id": "henning-andersen",
  "name": "Henning Andersen (player routine)",
  "aliases": ["Henning_Andersen"],
  "authors": ["Henning Andersen"],
  "released": "1987-1988 (Megamusic Denmark)",
  "status": "in-progress",
  "platform": "A playroutine authored by Danish coder Henning Andersen (handles 'Einstein'/'Dosman') of the group Megamusic Denmark, used almost entirely by his groupmate, musician Henrik B. Jensen — a coder-writes-routine / musician-friend-uses-it pattern, the same shape as this KB's existing [[olav-morkrid]] card. Player-ID-fingerprinted across 16 files: 15 Jensen, 1 Michael Winterberg (a separate composer already carded in this KB as [[michael-winterberg]] — no further connection investigated).",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Alar Alas, composed by Henrik Jensen): load $4100 (init $48b6, play $441c).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $48b6.",
    "play": "Sample trace: $441c (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 2 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "STRUCTURAL EVIDENCE FOR THE 'CODER WROTE IT, MUSICIAN USED IT' READING (CONFIRMED via CSDb group roster, though no source explicitly states the authorship claim in words): both men were in the same 3-person Danish group, Megamusic Denmark (active 1987-1988, alongside graphician Claus B. Jensen — Henrik's older brother). Henning Andersen's CSDb function is Coder — and he has ZERO music-credit output of his own anywhere in this dataset or on CSDb; every trace of him is exclusively as this player tag on other composers' files. Henrik B. Jensen's function is Musician, with 200+ credited works 1987-2020 across many groups (Plan C, Laxity, Remember, Zenith, Accept). This is a CLEANER coder/musician split than the olav-morkrid case (where Mørkrid did also release a few tunes himself) — Andersen has none.",
    "POSSIBLE ROUTINE NAME (UNCONFIRMED — flagged, not asserted): Megamusic Denmark's two Andersen-coded releases are titled 'Funitrax Demo' (1987) and 'Funitrax Banzai II' (1988) — 'Funitrax' is plausibly the routine's actual name, but no CSDb description or other source explicitly confirms this interpretation; treat as a lead, not a fact.",
    "The 'Bjerregaard' co-occurrence in Henrik Jensen's own HVSC folder (3 files tagged Bjerregaard alongside these 15) does NOT resolve to a confirmed connection with the well-known Johannes Bjerregård (Maniacs of Noise) — checked Jensen's full CSDb credit list directly, no mention of Bjerregård or Maniacs of Noise anywhere. Left unexplained rather than guessed at.",
    "A future card specifically about Henrik B. Jensen the musician (his broader 30+ year, 200+ work career, handles Nike→Eleanor) would be a natural next step, following the same pattern as this KB's existing [[henning-rokling]] person-card for a heavy routine-user — not written this session; scope here is Andersen's routine only.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Henning_Andersen entry). No known relationship found to any other composer/tool already in this KB besides the Michael_Winterberg co-occurrence on one file (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "CSDb group — Megamusic Denmark (id=3067, roster: Claus B. Jensen/graphician, Henning Andersen/coder, Henrik B. Jensen/musician; releases Keyboarder 1987, Funitrax Demo 1987, Funitrax Banzai II 1988): https://csdb.dk/group/?id=3067",
    "CSDb scener — Henning Andersen (id=18064, handles Einstein/Dosman, function Coder, 2 credited releases both as coder): https://csdb.dk/scener/?id=18064",
    "CSDb scener — Henrik B. Jensen (id=11048, handles Nike/Eleanor, function Musician, 200+ credits 1987-2020, 'little brother of Claus B. Jensen'): https://csdb.dk/scener/?id=11048",
    "CSDb SID — Sandy Beach (1988, Megamusic Denmark, confirms HVSC folder identity): https://csdb.dk/sid/?id=15811",
    "HVSC Musicians.txt (no direct entry for either name under Musicians.txt's own indexing, cross-checked): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Johannes Bjerregård (id=8138, checked and ruled out as an unconnected figure): https://csdb.dk/scener/?id=8138",
    "Local dataset: 16 files tagged Henning_Andersen, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Henning_Andersen` tag is Danish coder Henning Andersen's playroutine,
written for his group Megamusic Denmark (1987-1988) — but used almost
entirely (15 of 16 files) by his groupmate, musician Henrik B. Jensen, not
by Andersen himself, who has no music credits of his own anywhere. This is
the same coder-writes/musician-uses pattern already documented in this KB's
[[olav-morkrid]] card, here even cleaner (Andersen released zero tunes of
his own).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed Megamusic
Denmark group roster** (coder Andersen, musician Jensen, graphician Claus
B. Jensen); the **plausible-but-unconfirmed 'Funitrax' routine name**; and
the note that a **future Henrik Jensen person-card** would be a natural
follow-up, mirroring [[henning-rokling]].

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Henning_Andersen`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Henning_Andersen`-tagged `.sid` composed by Henrik
Jensen (Alar Alas): load `$4100`, init `$48b6`, play `$441c`, **236
register writes / 50 frames** (2 filter writes). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (group + both scener profiles), a
corroborating SID release, and HVSC Musicians.txt.
