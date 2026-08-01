# Martin_Galway_Digi

```json
{
  "id": "martin-galway-digi",
  "name": "Martin_Galway_Digi",
  "aliases": ["Martin_Galway_Digi"],
  "authors": ["TODO: SIDId's author line names Martin Galway, but the only local files carrying this tag are composed by a different, unrelated scener ('Bowie') — see quirks; do not read this as Galway's own routine without further evidence"],
  "released": "TODO: no distributed-tool release year exists — SIDId's byTag entry for this tag carries only `author`/`comment`, no `released`/`reference` field (data/sidid.json byTag['Martin_Galway_Digi']). Full census of both locally-tagged files' own CSDb `Released` field (not a UsedIn/title year): 'Touch Me' (csdb.dk/?ID=51172) = 1987, used in Final Frontiers' one-file demo 'Combat Music' (csdb.dk/release/?id=25763); 'Silent Love' (csdb.dk/?ID=41473) = 1988, its own eponymous release (csdb.dk/release/?id=25769). These are per-tune composition dates for an embedded routine, not a tool release — earliest attested is 1987.",
  "status": "stub",
  "platform": "Native C64 only — no evidence of a cross-platform editor or standalone tool. Both locally-tagged files are native C64 .sid binaries with the routine embedded in-tune (LoadAddr $9a00/InitAddr $9a00 for 'Touch Me'; LoadAddr $9a00/InitAddr $9f00 for 'Silent Love'; per csdb.dk XML webservice getSidRelease for IDs 51172/41473) — PSID header metadata, not a disassembly fact. A direct CSDb site search for the exact tag string returned zero results (csdb.dk/search/?search=Martin_Galway_Digi, checked 2026-08-01), confirming no standalone editor/tool release page exists under this name. Still unresolved whether this is Martin Galway's own drum-sample ('Digidrums'-derived) technique reused by a third party, an independent implementation inspired by his published description, or a SIDId attribution quirk — see quirks. Not to be confused with the verified [[martin-galway]] card (Galway's own Wizball-era driver), which this card does NOT edit or extend.",
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
    "IDENTITY MISMATCH — the load-bearing fact of this card. SIDId's byTag entry for 'Martin_Galway_Digi' names the author as 'Martin Galway' and carries an unusually long comment: a direct quote from Galway himself describing how he discovered sampled-sound playback by 'hacking into someone else's code... a drum synthesizer package called Digidrums,' then built his own realtime drum samples for Arkanoid, later refined for Game Over (data/sidid.json byTag['Martin_Galway_Digi']). BUT the only 2 files in this project's local dataset carrying this exact tag are BOTH by a composer named 'Bowie' (data/composers/bowie.json) — a Danish scener (CSDb scener id 11080, handle BWI, groups incl. Final Frontiers, active 1987-1988) with no documented connection to Martin Galway, Ocean Software, or the games Galway scored (checked Bowie's CSDb scener page directly — no mention of Galway/Ocean). This does NOT mean Galway coded these two files; it more likely means SIDId's byte-signature scanner fingerprinted a routine that reuses/reimplements the published Digidrums-style technique Galway described, and SIDId's author field records the TECHNIQUE's originator/documenter rather than the CODER of this specific instance. That reading is inference, not sourced fact — flagged, not resolved.",
    "Do NOT edit or extend the existing verified [[martin-galway]] card from this finding. That card is grounded in Galway's own published Wizball assembly source and is `status: verified`; nothing here confirms Bowie's files run Galway's actual code, so no alias or edge is added there.",
    "100% of the 2 locally-tagged files ('Silent Love', 'Touch Me') belong to the composer 'Bowie' alone (data/composers/bowie.json) — a personal-routine-level concentration, whatever its true authorship.",
    "No CSDb tool/release page for a standalone 'Martin_Galway_Digi' editor was found — confirmed by a direct CSDb site search for the exact tag string, which returned zero results (csdb.dk/search/?search=Martin_Galway_Digi, checked 2026-08-01). This looks like an in-tune embedded routine, not a distributed tool.",
    "Full census (both tagged files, per the extraction template's 'never spot-check' rule): 'Touch Me' (csdb.dk/?ID=51172), own CSDb `Released` field = 1987, used in Final Frontiers' one-file demo 'Combat Music' (csdb.dk/release/?id=25763, ReleaseYear 1987); 'Silent Love' (csdb.dk/?ID=41473), own `Released` field = 1988, its own eponymous release (csdb.dk/release/?id=25769, ReleaseYear 1988). Both CSDb `Released` strings carry a trailing '2019' after the group name ('1987 Final Frontiers 2019' / '1988 Final Frontiers 2019') whose meaning is not established here — not read as the tune's composition year; the leading year (matching each tune's own UsedIn.Release.ReleaseYear) is treated as the composition year instead.",
    "The composer profile's 'active: 1988' summary field (data/composers/bowie.json profile.active) undercounts by a year against the actual earliest tagged file (Touch Me, 1987) — a case of trusting an aggregate summary field over the per-file census; corrected here."
  ],
  "sources": [
    "SIDId sidid.nfo (author 'Martin Galway', long comment quoting Galway on Digidrums/Arkanoid/Game Over drum samples; no `released`/`reference` field present in the entry): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Martin_Galway_Digi']",
    "Local dataset: 2 files tagged Martin_Galway_Digi, both by composer 'bowie' — data/composers/bowie.json; see knowledge/COVERAGE.md rank 93",
    "CSDb scener profile, Bowie (BWI), Denmark, groups incl. Final Frontiers, active 1987-1988: https://csdb.dk/scener/?id=11080 — no mention of Martin Galway or Ocean Software found on this page",
    "CSDb XML webservice (scripts/lib/csdb-client.js getSidRelease), SID entry 51172 'Touch Me' (Released 1987, LoadAddr $9a00, InitAddr $9a00) and SID entry 41473 'Silent Love' (Released 1988, LoadAddr $9a00, InitAddr $9f00) — https://csdb.dk/?ID=51172 / https://csdb.dk/?ID=41473 (checked 2026-08-01)",
    "CSDb release pages: 'Combat Music' (Final Frontiers, 1987 one-file demo containing 'Touch Me') https://csdb.dk/release/?id=25763; 'Silent Love' (Final Frontiers, 1988) https://csdb.dk/release/?id=25769",
    "CSDb site search for the exact tag string, zero results, confirming no standalone tool/editor release page: https://csdb.dk/search/?search=Martin_Galway_Digi (checked 2026-08-01)",
    "knowledge/players/martin-galway.md — the separate, verified card for Galway's own Wizball-era driver; not edited by this card"
  ]
}
```

## Overview

Martin_Galway_Digi is a SIDId Player-ID tag whose author field names legendary
Ocean composer **Martin Galway**, with a long comment directly quoting him on
how he came to use sampled drum sounds (the "Digidrums" story, later refined
for *Arkanoid* and *Game Over*). However, the only 2 files in this project's
dataset carrying this exact tag are both by an unrelated Danish scener,
**Bowie**, with no documented tie to Galway or Ocean Software. The most likely
reading is that SIDId's author field records the *technique's* originator
rather than the coder of this specific fingerprinted routine — but that is
inference, not a sourced fact, so this card states the mismatch plainly rather
than asserting either reading as settled. This card does **not** touch the
existing, unrelated `status: verified` [[martin-galway]] card, which rests on
Galway's own published Wizball source.

No distributed-tool release exists for this tag: a direct CSDb site search for
the exact string returns zero results, and SIDId's own entry carries no
`released`/`reference` field. Both tagged files' own CSDb `Released` fields put
the earliest attested use at 1987 ("Touch Me", used in the one-file demo
"Combat Music") and 1988 ("Silent Love") — per-tune composition dates for an
in-tune embedded routine, not a tool release date. Both are native C64 `.sid`
binaries with no evidence of a cross-platform editor.

## Quirks & gotchas

See the `quirks` array. The load-bearing fact is the **identity mismatch**
between SIDId's named author (Galway) and the actual composer of every locally
tagged file (Bowie) — recorded, not resolved. Do not merge this tag into the
verified `martin-galway` card on the strength of the shared name alone.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/bowie.json`, SIDId, a
CSDb scener-page check for Bowie (which found no Galway/Ocean connection),
a full census of both tagged files' own CSDb `Released` fields via the XML
webservice (1987/1988), and a CSDb site search confirming no standalone
tool/editor release page exists for the tag string. `status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, CSDb, and the
separate `martin-galway` card (referenced, not edited).
