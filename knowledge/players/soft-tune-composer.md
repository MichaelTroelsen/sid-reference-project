# Soft Tune Composer

```json
{
  "id": "soft-tune-composer",
  "name": "Soft Tune Composer",
  "aliases": ["Soft_Tune_Composer"],
  "authors": ["Melih Küçükçalik"],
  "released": "1989-06 (CSDb release 218157, 'Softtune Composer Preview', C64 Tool by Chaos #1) — the original tool preview, found this pass; predates the October 1989 crack (101769) that SIDId's `reference` field pointed to",
  "status": "stub",
  "platform": "Native C64 tool. RESOLVED this pass (see quirks): SIDId's cited reference (CSDb release 101769) is a 1989 CRACK by 'The Joker Crew'; the actual original-tool release is CSDb id 218157 ('Softtune Composer Preview', June 1989, type C64 Tool, group Chaos #1), found via the sample SID's own `UsedIn`/credit chain on CSDb's webservice.",
  "csdb_release": 218157,

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
    "REFERENCE WAS A CRACK, NOT THE ORIGINAL TOOL — RESOLVED THIS PASS: SIDId's `reference` field (https://csdb.dk/release/?id=101769) points at a release titled 'Softtune Composer' (aka 'Soft Tune Composer' / 'ST. Composer'), catalogued on CSDb as type 'C64 Crack', released October 1989 by 'The Joker Crew'. Querying CSDb's XML webservice for the sample SID's own record (type=sid, id=38499 — the file's SID-entry id, NOT the release id) surfaced a second `UsedIn` release, id 244305 ('Game Musicer Preview', type C64 Tool, 1989), whose Code credit resolved to CSDb scener handle 'Melih' (handle id 35865, real scener id 18876, current handle 'Teod'). That same scener's own credit list (queried via type=scener, id=21118) includes a THIRD release: id 218157, 'Softtune Composer Preview', type 'C64 Tool', released June 1989 by group 'Chaos #1' — i.e. an actual tool release (not a crack) of the exact same title as SIDId's referenced crack, four months earlier. Its Code credits are 'Melih' AND 'Kagan Demir' (the same scener as this dataset's sole tagged composer, Babyface); Music credit is Jens Blidon. This is the true original-tool release; `csdb_release` has been updated to 218157 accordingly. Same crack-vs-original trap this project already resolved once for `knowledge/players/tfmx-timecomposer.md`.",
    "AUTHOR NAME PARTIALLY CORROBORATED, NOT FULLY: CSDb independently confirms a coder handle 'Melih' (scener id 18876, Turkey, current handle 'Teod') credited on both id=218157 and id=244305 — matching the first name in SIDId's 'Melih Küçükçalik' author string. CSDb's own scener/handle records for this person (queried at depth 2) carry no `RealName` field, so the surname 'Küçükçalik' rests on SIDId's authority alone, same caveat already logged for the sibling tfmx-timecomposer.md case (Rhodan/Oliver Hoeller).",
    "COMPOSER MATCH UPGRADED FROM COINCIDENCE TO CO-CREDIT: the sole locally-tagged composer using 'Soft_Tune_Composer' is Babyface — real name Kagan Demir, Turkey (data/composers/babyface.json). The CSDb crack (101769) credits its bundled sample tune's music to 'Kagan Demir'; the newly found ORIGINAL tool release (218157) goes further and credits Kagan Demir as CODE (alongside Melih/Teod), not just music — i.e. Babyface may have co-authored the tool itself, not merely supplied its demo tune.",
    "'Melih'/Teod, and the tool's local user (Kagan Demir/Babyface), are both members of the same Turkish group circle (Chaos #1 / The Joker Crew / Assassins), consistent with a small, nationally-concentrated circle of use rather than wide adoption.",
    "A THIRD, DIFFERENTLY-NAMED release ('Game Musicer Preview', CSDb id 244305, also credited to Melih/Teod as coder) carries a 2024 user comment claiming 'music driver is the same as' the Softtune Composer crack (101769) — but the actual example SID bundled with that release (Game_Musicer_Preview.sid, in this same dataset) is SIDId-fingerprinted as `SoundMonitor/MusicMaster_2`, NOT `Soft_Tune_Composer`. Left unresolved: whether this is a related/earlier tool sharing a driver lineage, or the human comment and SIDId's binary fingerprint simply disagree. Not added to `aliases` — no evidence ties the `Soft_Tune_Composer` tag itself to this release.",
    "Only 1 file locally tagged with this signature — a small footprint despite the tool having a real title, credited coders, and three dated CSDb release entries, which is why this earns a card at all rather than being treated as unnamed noise."
  ],
  "sources": [
    "sidid:Soft_Tune_Composer (author 'Melih Küçükçalik', released '1989', reference https://csdb.dk/release/?id=101769, no comment) — data/sidid.json",
    "CSDb release 101769 'Softtune Composer' (aka Soft Tune Composer/ST. Composer, C64 Crack, The Joker Crew, October 1989, bundled music credited to Kagan Demir), via CSDb webservice type=release,id=101769",
    "CSDb release 218157 'Softtune Composer Preview' (C64 Tool, June 1989, group Chaos #1, Code: Melih/Kagan Demir, Music: Jens Blidon) — the true original tool release, via CSDb webservice type=release,id=218157: https://csdb.dk/release/?id=218157",
    "CSDb release 244305 'Game Musicer Preview' (C64 Tool, 1989, Code: Melih, Music: Kagan Demir + Jens Blidon; 2024 user comment by iAN CooG claims shared music driver with release 101769) via CSDb webservice type=release,id=244305: https://csdb.dk/release/?id=244305",
    "CSDb SID entry 38499 (Soft_Tune_Composer_sample.sid, own `Released` field reads '1989 Melih Kucukcalik', `UsedIn` lists releases 101769 and 244305) via CSDb webservice type=sid,id=38499: https://csdb.dk/sid/?id=38499",
    "CSDb scener/handle 'Melih' (handle id 35865) / 'Teod' (handle id 21118, current handle, scener id 18876, Turkey) — credited Code on both 218157 and 244305; no RealName field returned by CSDb webservice at depth 2, via type=scener,id=21118: https://csdb.dk/scener/?id=18876",
    "Local dataset: 1 file tagged 'Soft_Tune_Composer' (Soft_Tune_Composer_sample.sid), by composer Babyface — data/composers/babyface.json (full census of the tag, confirmed via Grep with explicit glob across data/composers/*.json)",
    "data/composers/babyface.json (HVSC profile: full name Kagan Demir, Turkey, active 1992, CSDb scener 3103)",
    "Sibling card knowledge/players/tfmx-timecomposer.md — precedent for the same crack-vs-original-release research trap and the same 'first-name-only corroborated' authorship caveat",
    "WebSearch for 'Küçükçalik' + csdb.dk, and for 'Softtune Composer'/'Melih' across csdb.dk/lemon64.com/forum64.de: no independent hits beyond what CSDb's own webservice already returned; Lemon64's 'Comparison of C64 Music Editors' thread (viewtopic.php?t=67248) checked directly and does not mention Soft Tune Composer"
  ]
}
```

## Overview

`Soft_Tune_Composer` is the SIDId tag for **Softtune Composer**, a 1989 C64
music tool credited by SIDId to **Melih Küçükçalik**. SIDId's cited CSDb
release (id 101769) is an October 1989 **crack** of the tool by The Joker
Crew, not the original release — this pass traced the sample SID's own
CSDb credit chain to find the actual original: id 218157, "Softtune Composer
Preview," a June 1989 C64 Tool release by the group Chaos #1, coded by
scener handle "Melih" (current handle "Teod") together with **Kagan Demir** —
who is exactly the sole locally-tagged composer using this tag (handle
Babyface). Kagan Demir is credited as CODE on the original tool, not just
its bundled demo music, upgrading what looked like a coincidental match into
a plausible co-authorship credit. `csdb_release` now points at 218157. Only 1
file carries the tag locally.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the SIDId-cited CSDb release was a
**crack**, not the tool's original release — the same trap this project
already resolved once for `TFMX/TimeComposer` — and this pass found and
substituted the true original (CSDb id 218157, June 1989, group Chaos #1).
The author's surname "Küçükçalik" is corroborated only by first name
("Melih") on CSDb itself; no `RealName` field is present on the matching
scener record. A related-but-distinct release ("Game Musicer Preview," id
244305) claims a shared music driver in a 2024 user comment but its own
bundled SID is fingerprinted by SIDId as a different player family
(`SoundMonitor/MusicMaster_2`) — left as an open, unresolved discrepancy
rather than folded into this card's `aliases`.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/babyface.json`, `data/sidid.json`) plus CSDb webservice
queries (release, sid, and scener/handle endpoints). `status: stub` — no
runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, three CSDb release pages (the
crack SIDId cites, the original tool, and a related third release), a CSDb
SID-entry page, a CSDb scener/handle page, the local composer profile for
Babyface, and the sibling `tfmx-timecomposer.md` card for the crack-vs-original
precedent.
