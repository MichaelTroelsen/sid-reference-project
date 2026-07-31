# StreetTuff_Digi

```json
{
  "id": "street-tuff-digi",
  "name": "StreetTuff_Digi",
  "aliases": ["StreetTuff_Digi"],
  "authors": ["Frank Fenske (Street Tuff)"],
  "released": "TODO: no dedicated tool/routine release date exists (not a distributed editor). Census of all 3 tagged files' own CSDb `Released` fields (not the composer profile's 'active 2021' field, which is a different, unrelated attribute): 'Acid Preview' csdb_id 27825 = 1999 Tristar & Red Sector Inc.; 'Calling Earth' csdb_id 27826 = 1999 Tristar & Red Sector Inc.; 'G-Spot (tinitus remix)' csdb_id 47992 = 2012 Tristar & Red Sector Inc. Earliest attested use is 1999, not 2021 as the prior draft of this card implied — corrected by full census, see sources.",
  "status": "stub",
  "platform": "native C64 in-house digi/sample routine, not a distributed cross-platform tool. All 3 tagged files are genuine C64 PSID files (confirmed via CSDb SID webservice: 6581&8580 or 8580 SID model, PAL clock) released by Tristar & Red Sector Inc. and played on real hardware per a party-attendee CSDb comment on release id 110217. No standalone editor/tool release found under this name.",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). This is a bare Player-ID byte-signature with no author/release/comment field from SIDId itself, distinct from the sibling tag 'StreetTuff_4K' (also uncarded here, not investigated as part of this batch).",
    "100% single-composer concentration: all 3 locally-tagged files ('Acid Preview', 'Calling Earth', 'G-Spot (tinitus remix)') belong to the composer 'Street Tuff' himself (data/composers/tuff-street.json) — the strongest available personal-routine signal, consistent with an in-house digi routine rather than a distributed tool.",
    "Census correction: all 3 tagged files' own CSDb SID-entry `Released` fields were checked directly (csdb.dk/webservice type=sid, ids 27825/27826/47992), not sampled. They span 1999 (Acid Preview, Calling Earth) to 2012 (G-Spot tinitus remix), both credited to Tristar & Red Sector Inc. — a wider and earlier span than the composer profile's 'active 2021' field alone would suggest; that field is a DeepSID composer-activity marker, not evidence of this routine's own timeline, and an earlier draft of this card conflated the two.",
    "PSID header LoadAddr differs across the family's own files: Acid Preview and Calling Earth both load at $0810 (2064), while G-Spot (tinitus remix) loads at $3400 (13312) — header metadata only (per project rule, not a disassembly fact), but it is at least consistent with these being separate embeddings of a routine in different tunes rather than one fixed relocatable driver at a stable address. Not proof either way.",
    "Street Tuff = Frank Fenske, a German scener best known as the driving force of Tristar & Red Sector Inc.'s (TRSI) C64 division (also ex-member of Digital Sounds System). He passed away in early 2025; TRSI's tribute post is cited below. Nothing in the sources checked documents the digi routine's mechanism or origin beyond the tag name — 'digi by name' is not itself confirmation of a specific playback technique (project rule), so no technique claim is made here.",
    "The '_Digi' suffix by itself is not evidence of a specific sample-playback mechanism — no independent confirmation (SIDId comment, CSDb credit, manual) of what technique this routine actually uses was found.",
    "A CSDb comment on release id 110217 (G-SPot Tinitus Remix, by CSDb user 'Britelite', csdb_id 248 — NOT Street Tuff himself) says 'the sample player routine is from about 95-96', but its subject is ambiguous (it opens 'my entry for the nordlicht 2012 gvravedigger compo', i.e. plausibly describing Britelite's own unrelated entry at the same party, not Street Tuff's routine) — discarded as unreliable, not used as evidence of this routine's origin date.",
    "A full census of Street Tuff's CSDb scener credit list (webservice depth=3, ~95k-line XML) found two other named sound-code releases — '14 byte soundroutine' (2012) and '12b vocoder (monster in the zeropage)' (2012) — plus a self-comment on a different tune ('4Krawall', tagged StreetTuff_4K not StreetTuff_Digi) that it 'is based on the soundroutine i used in 4krawall...optimized my soundroutine a little more'. None of these credits are named 'digi' or otherwise directly tied to the StreetTuff_Digi tag; no dedicated CSDb tool/release entry for a routine called 'digi' was found."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'StreetTuff_Digi' (author-only or absent tags are recorded in data/sidid.json; this tag is absent): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged StreetTuff_Digi, all by composer 'tuff-street' — data/composers/tuff-street.json (census confirmed: no 4th file exists)",
    "CSDb SID webservice, full census of all 3 tagged files' own Released/LoadAddr/SIDModel fields: https://csdb.dk/webservice/?type=sid&id=27825 , https://csdb.dk/webservice/?type=sid&id=27826 , https://csdb.dk/webservice/?type=sid&id=47992",
    "CSDb scener profile, Street Tuff / Frank Fenske (groups Digital Sounds System, TRSI), full credit list checked at depth=3: https://csdb.dk/scener/?id=2491 (webservice: https://csdb.dk/webservice/?type=scener&id=2491&depth=3)",
    "CSDb release 110217 (G-SPot Tinitus Remix), used to check UsedSIDs/Credits/Comments: https://csdb.dk/release/?id=110217",
    "TRSI tribute post confirming real name and TRSI role: https://8bitlegends.com/2025/03/31/street-tuff-trsi-has-left-us-so-early/"
  ]
}
```

## Overview

StreetTuff_Digi is a SIDId Player-ID byte-signature tag with no upstream
SIDId documentation (no `sidid.nfo` entry at all — checked `data/sidid.json`).
Locally it appears in only **3 files, all by a single composer**: **Frank
Fenske**, handle **Street Tuff**, a German scener best known for driving
TRSI's C64 division (he passed away in early 2025). The 100% single-composer
concentration and complete absence of any SIDId record point to an in-house,
personal digi routine rather than a published tool — but no source actually
confirms the playback mechanism, so per this project's rule that "digi by
name is not evidence," no technique claim is made.

A full census of all 3 tagged files' own CSDb SID-entry data (not a sample)
shows the tag's actual attested span is **1999-2012**, both credited to
Tristar & Red Sector Inc: "Acid Preview" and "Calling Earth" are both dated
1999, "G-Spot (tinitus remix)" 2012. This corrects an earlier draft of this
card, which conflated the composer profile's unrelated "active 2021" field
with the tag's own usage window. All 3 files are genuine C64 PSID entries
(confirmed 6581/8580 SID model, PAL clock via the CSDb webservice), consistent
with a native, in-house C64 routine rather than a cross-platform tool — no
dedicated CSDb tool/release entry for a "digi" routine was found in a full
depth=3 census of Street Tuff's scener credit list, which does list two other
named sound-code works ("14 byte soundroutine", "12b vocoder", both 2012) but
nothing tied to this specific tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists at all for
this tag (a thinner record than most in this batch); (2) 100% single-composer
usage; (3) do not conflate with the separate, uncarded 'StreetTuff_4K' tag;
(4) the name implies sample playback but nothing confirms the actual
technique; (5) the tag's real attested span is 1999-2012 per full census of
the 3 files' own CSDb Released fields, not the composer profile's unrelated
"active 2021" marker; (6) a tempting-looking CSDb comment about a
"sample player routine...from about 95-96" was checked and discarded — it is
by a different scener (Britelite) and its subject is ambiguous, not Street
Tuff's routine.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded entirely from local `data/composers/tuff-street.json`
and CSDb scener/tribute research. `status: stub`.

## Sources

See the `sources` array — SIDId (checked, absent), the local composer
aggregation, and CSDb/8bitlegends for Frank Fenske's identity.
