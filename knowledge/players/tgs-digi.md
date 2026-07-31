# TGS_Digi

```json
{
  "id": "tgs-digi",
  "name": "TGS_Digi",
  "aliases": ["TGS_Digi"],
  "authors": ["Gábor Gáspár (The Galactic Stranger)"],
  "released": "TODO: no explicit tool-release date found (no CSDb release/tool entry exists for TGS_Digi itself). Full census of all 3 locally-tagged files (not a sample) confirms the earliest and only attested year across every one is 1989, read from each file's own CSDb `Released` field: csdb.dk sid ids 48285 and 48286 ('Future Megademo (end)'/'(intro)') both read 'Released: 1989 The Galactic Stranger', and csdb.dk sid id 25642 ('Fine Time') reads 'Released: 1989 Contex'. Sources: https://csdb.dk/webservice/?type=sid&id=48285 , &id=48286 , &id=25642 (fetched directly, this pass).",
  "status": "stub",
  "platform": "In-house C64 digi/sample routine, not a released standalone editor/tool — confirmed by querying the CSDb scener/handle record for 'The Galactic Stranger' (handle id 22677) directly: https://csdb.dk/webservice/?type=scener&id=22677 lists exactly ONE production under this handle, 'Future Megademo' (1989), with Code/Graphics/Charset/Sampling credits — no separate driver/tool/release entry exists. Corroborating: when the same tag is reused by a different composer (Scrap, on 'Fine Time', release id 32140: https://csdb.dk/webservice/?type=release&id=32140), CSDb's own credit list attributes the 'Sampling' role to Scrap himself (alongside his own Code/Music/Graphics/Text/Charset credits) — not to TGS or to any named shared driver — consistent with informal code/technique reuse between sceners rather than a published, separately-credited tool.",
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
    "SIDId (data/sidid.json) has an entry: author 'Gábor Gáspár (The Galactic Stranger)', comment 'Probably derived from C64_Speech_System'. This is a SPECULATIVE claim by the SIDId author, not a sourced derivation with hard evidence — per the already-carded [[c64-speech-system]] card (which documents this exact same SIDId comment appearing on THREE separate tags: MrWarp_Digi, (Mahoney_Digi), and TGS_Digi), it is deliberately recorded here as context ONLY and NOT asserted as a graph `edges` relationship, consistent with that precedent and this project's no-similar-names-as-evidence rule.",
    "Real corroborating evidence for the 'digi' label independent of the speculative C64_Speech_System note: CSDb credits Gábor Gáspár (TGS) with a 'Sampling' role (alongside Code/Graphics/Charset) on 'Future Megademo' (1989) — and that exact title matches 2 of the 3 locally-tagged files ('Future Megademo (end)', 'Future Megademo (intro)'), a genuine file-level match, not just a plausible-sounding author link.",
    "3 files, 2 composers: Gabor Gaspar (2: both 'Future Megademo' parts) and Scrap (1: 'Fine Time') — Scrap is a separate, German scener (CSDb 1929) reusing TGS's routine, similar to the cross-composer pattern seen elsewhere in this batch (e.g. Toaster_Digi).",
    "'Future Megademo' (1989) was a multi-group collaboration (Genius, Cement Crew, Idler Company, Sector, Very Important Persons) per CSDb — TGS (Hungary) contributed Sampling/Code/Graphics/Charset to this cross-group production.",
    "Full census (this pass) of all 3 tagged files, read directly from CSDb's webservice rather than sampled: sid ids 48285 ('Future Megademo (end)', LoadAddr/InitAddr 4096, 1989), 48286 ('Future Megademo (intro)', LoadAddr/InitAddr 4096, 1989), 25642 ('Fine Time', LoadAddr/InitAddr 10224, 1989 Contex). All three PSID header load/init values are PSID header metadata only, NOT disassembly facts — recorded here in quirks per the extraction template's explicit rule, and deliberately NOT written into the Tier 3 `memory`/`entry` fields, which remain TODO.",
    "Querying CSDb's scener/handle record for 'The Galactic Stranger' (id 22677) directly returns exactly ONE credited production (Future Megademo, 1989) — no separate tool/release entry for a 'TGS_Digi' driver exists anywhere on CSDb, strengthening (not just asserting) the in-house-routine characterization in `platform`.",
    "On 'Fine Time' (release 32140, Scrap/Contex, Oct 1989), CSDb's own credit list gives the 'Sampling' role to Scrap himself, not to TGS or to a shared/named driver — i.e. CSDb's data models this as Scrap's own credited work, even though SIDId's binary-signature match still ties the underlying playback code to the TGS_Digi tag. The two attributions (CSDb human credit vs. SIDId code-signature match) are not contradictory but are tracking different things and should not be conflated."
  ],
  "sources": [
    "data/sidid.json byTag: TGS_Digi — author 'Gábor Gáspár (The Galactic Stranger)', comment 'Probably derived from C64_Speech_System'; no `reference`/csdb_release field present for this tag",
    "knowledge/players/c64-speech-system.md — documents the same speculative SIDId comment on TGS_Digi/MrWarp_Digi/(Mahoney_Digi); NOT asserted as an edge here, same reasoning",
    "CSDb scener/handle 'The Galactic Stranger' (Hungary, handle id 22677) — queried directly this pass via the webservice, lists exactly one production (Future Megademo, 1989), no dedicated tool/release entry: https://csdb.dk/webservice/?type=scener&id=22677 (HTML equivalent: https://csdb.dk/scener/?id=22677)",
    "CSDb sid entries for all 3 tagged files, queried directly this pass: https://csdb.dk/webservice/?type=sid&id=48285 , &id=48286 , &id=25642",
    "CSDb release entries, queried directly this pass: Future Megademo (id 99562, https://csdb.dk/webservice/?type=release&id=99562) and Fine Time (id 32140, https://csdb.dk/webservice/?type=release&id=32140) — both show full credit lists used above",
    "Local dataset: 3 files tagged TGS_Digi across 2 composers — Gabor Gaspar (2), Scrap (1); full census confirmed this pass by grepping data/composers/gabor-gaspar.json and data/composers/scrap.json directly (no other TGS_Digi rows found in either file)",
    "data/composers/gabor-gaspar.json (country Hungary, csdb id 22677), data/composers/scrap.json (country Germany, csdb id 1929)"
  ]
}
```

## Overview

TGS_Digi is the SIDId tag for a digi/sample-playback routine attributed to
**Gábor Gáspár**, handle **The Galactic Stranger (TGS)**, a Hungarian
scener. SIDId's entry names the author and adds a speculative comment,
"Probably derived from C64_Speech_System" — the same speculative claim SIDId
makes about two other unrelated tags (see [[c64-speech-system]]'s own
quirks), so it is recorded here as context only, not as a graph edge. It
appears in **3 files across 2 composers** (a full census this pass, not a
sample): Gabor Gaspar himself (2, both "Future Megademo" parts) and Scrap
(1, "Fine Time"). Real corroboration independent of the speculative comment:
CSDb explicitly credits TGS with a "Sampling" role on "Future Megademo"
(1989) — a title match with 2 of the 3 locally-tagged files. Querying CSDb's
own record for the "The Galactic Stranger" handle directly (this pass)
returns exactly one credited production, ever — no dedicated TGS_Digi
tool/release entry exists on CSDb, confirming this is an in-house digi
routine rather than a released, separately-credited editor. All 3 tagged
files' own `Released` fields read 1989 (no earlier or later date found in
this census), so 1989 is recorded as the earliest/only attested year rather
than a formal tool-release date, which does not exist for this routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the "derived from C64 Speech
System" claim is speculative per SIDId's own author and is deliberately
**not** asserted as an `edges` relationship, following the precedent set on
the c64-speech-system card itself; (2) CSDb's "Sampling" credit on "Future
Megademo" is genuine, file-title-matching corroboration of the digi claim,
independent of that speculative note; (3) cross-composer usage (Scrap using
TGS's routine) mirrors a pattern seen elsewhere in this batch; (4) CSDb's
own scener/handle record confirms "The Galactic Stranger" has exactly one
credited production ever — no separate CSDb tool/release entry for a
"TGS_Digi" driver exists, which is real (not inferred) evidence for the
`platform` field's "in-house routine, not a released tool" conclusion; (5)
on "Fine Time", CSDb attributes the "Sampling" credit to Scrap himself, not
to TGS — a reminder that CSDb's human credit-list and SIDId's binary
signature match are two different kinds of evidence that happen to agree
here, not one confirming the other.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the c64-speech-system card
(cross-referenced), CSDb's webservice queried directly this pass for the
scener/handle record (id 22677), all 3 tagged files' own `sid` entries
(ids 48285, 48286, 25642), and both `release` entries they belong to
(Future Megademo id 99562, Fine Time id 32140), plus the local composer
aggregation (re-grepped directly this pass, not re-derived from a cache).
