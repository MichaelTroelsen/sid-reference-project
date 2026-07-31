# Odie_tiny

```json
{
  "id": "odie-tiny",
  "name": "Odie_tiny",
  "aliases": ["Odie_tiny"],
  "authors": ["Sean Connolly (Odie)"],
  "released": "1998-04-16 to 1999 (earliest/latest attested per-file dates from CSDb's own Released field on all 3 tagged files, full census, not a tool release date — no dedicated 'Odie_tiny' tool/editor release exists on CSDb)",
  "status": "stub",
  "platform": "Native C64, hand-coded routine (not a distributed editor) — corroborated, not just inferred: all 3 tagged files are size-constrained 4k democompo entries at the 'Driven 4k Compo' events (CSDb release data below), and for the two full 4k-intro releases carrying this tag the CSDb Code credit is 'The Magic Roundabout' (TMR), with 'Odie' credited Music only — raising an open question (not resolved here) of whether the tiny routine itself is TMR's code rather than Odie's own, despite the SIDId tag naming the composer. See quirks.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has only an AUTHOR field ('Sean Connolly (Odie)') — no NAME, reference, or comment, matching the pattern of this same author's OTHER unpublished tag 'Odie/Cosine' (already carded: knowledge/players/odie-cosine.md).",
    "THIS IS A SEPARATE, THIRD SIDId SIGNATURE by the same author, alongside the already-carded 'EMS/Odie' (formally published editor, CSDb release 4649, 1997 — knowledge/players/ems-odie.md) and 'Odie/Cosine' (personal pre-editor routine, 1988-1991 — knowledge/players/odie-cosine.md, which explicitly flagged 'Odie_tiny' as an out-of-scope sibling tag needing its own card). No `edges` relationship is asserted between any of these three — no source states a direct code-sharing/derivation link, only shared authorship, per this project's rule against inferring edges from shared authorship alone.",
    "CORRECTED after full 3-file census via CSDb's XML webservice (scripts/lib/csdb-client.js csdbGet('sid', id)): an earlier draft of this card guessed 'earliest locally-tagged file dated 1988' from filename impressions alone, with no citation. All 3 files' own CSDb `Released` fields actually read 1998-1999: '4k Digi Competition Entry' (csdb.dk/sid/?id=5669) = '1998 Cosine Systems', released 1998-04-16, placed 3rd in the C64 Music compo at 'Driven 4k Compo 1998'; '4k Party 2' (id=5671) = '1998 Sonix Systems', same event, its own release (csdb.dk/release/?id=24530) placed 1st in the C64 4K Intro compo; 'Wild One' (id=5735) = '1999 Cosine', used in '4K Party 3' (csdb.dk/release/?id=24531), 1st place C64 4K Intro at 'Driven 4k Compo 1999'. This is a first/last-attested-file date range, not a tool-release date — no dedicated CSDb tool page exists for this tag.",
    "Filenames and CSDb Release `Type` fields ('C64 Music' compo entry, 'C64 4K Intro' x2) confirm this specific tag was used for size-constrained (4k) intro/demo-competition entries specifically — a plausible reason for a distinct, smaller routine from his general-purpose 'Odie/Cosine' tag of the same era.",
    "New lead, not resolved here: for the two full 4k-intro releases carrying this tag ('4K Party 2' csdb.dk/release/?id=24530, '4K Party 3' csdb.dk/release/?id=24531), CSDb's own Credits list 'Code' as 'The Magic Roundabout' (TMR, a Cosine-affiliated coder/scene-historian — also the source of the Lemon64 post cited on the sibling odie-cosine.md card) and 'Music' as 'Odie' only. This raises the possibility that the tiny/size-constrained playback routine itself is TMR's code, not Odie's, despite SIDId naming the tag after the composer. Not asserted as an `edges` fact — no source states the music-driver code's authorship specifically, only the overall intro's code credit.",
    "All 3 locally-tagged files are by Sean Connolly himself — single-composer concentration, consistent with a personal, competition-specific routine (full census, not a sample: only sean-connolly.json in data/composers/*.json carries the 'Odie_tiny' player tag)."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Odie_tiny'], author only)",
    "Sibling card (same author, explicitly notes 'Odie_tiny' as out of scope there): knowledge/players/odie-cosine.md",
    "Sibling card (same author's later published editor): knowledge/players/ems-odie.md",
    "Local dataset: 3 files tagged Odie_tiny, 1 composer (Sean Connolly), full census read from data/composers/sean-connolly.json — csdb_id 5669 (4k Digi Competition Entry), 5671 (4k Party 2), 5735 (Wild One)",
    "CSDb XML webservice, all 3 tagged files' own SID entries (Released field, LoadAddr/InitAddr/PlayAddr as PSID-header metadata only, not disassembly): https://csdb.dk/sid/?id=5669, https://csdb.dk/sid/?id=5671, https://csdb.dk/sid/?id=5735 — fetched via scripts/lib/csdb-client.js csdbGet('sid', id)",
    "CSDb release pages for the 2 full 4k-intro releases carrying this tag (Type, event, Credits): https://csdb.dk/release/?id=24530 (4K Party 2, Driven 4k Compo 1998), https://csdb.dk/release/?id=24531 (4K Party 3, Driven 4k Compo 1999) — fetched via scripts/lib/csdb-client.js csdbGet('release', id)",
    "CSDb release page for the standalone C64 Music compo entry: https://csdb.dk/release/?id=62973 (4k Music Entry, Driven 4k Compo 1998)",
    "CSDb full-text search for a standalone 'Odie_tiny' tool/driver page (csdb.dk/search/?search=Odie_tiny) 503'd repeatedly; no such page is referenced by any of the 3 files' own release pages either — csdb_release stays null"
  ]
}
```

## Overview

`Odie_tiny` is a third, distinct SIDId signature by **Sean Connolly**
("Odie") of Cosine/Sonix Systems (UK) — alongside the already-carded
"Odie/Cosine" (personal pre-editor routine) and "EMS/Odie" (his later
formally-published editor). SIDId gives author only, no name or reference.
All 3 locally-tagged files are by Connolly himself (full census, not a
sample). All 3 are size-constrained 4k democompo entries at CSDb's "Driven
4k Compo 1998"/"1999" events, per each file's own CSDb release page — this
also corrects an earlier, uncited "1988" date guess in this card: the
files' own `Released` fields read 1998-1999, six years later than
originally drafted. Platform is now positively native-C64/hand-coded
(not a distributed editor), consistent with the sibling "Odie/Cosine" card's
finding for the author generally, but a new lead here is unresolved: CSDb
credits the two full 4k-intro releases' *Code* to TMR, with Odie credited
Music only — raising, without resolving, whether the tiny routine is TMR's
rather than Odie's own. No `edges` relationship is recorded to the sibling
cards or to TMR — shared authorship/credit adjacency alone is not evidence
of shared code per this project's rules.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the third of three
distinct SIDId tags by the same author now surfaced in this KB, all kept
separate per the "no edge without direct evidence" rule; (2) the earlier
draft's 1988 date was wrong — full census of all 3 files' own CSDb
`Released` fields gives 1998-04-16 to 1999, corrected here; (3) CSDb Code
credits on the 2 full-intro releases go to TMR, not Odie — an open lead,
not an asserted edge; (4) single-composer concentration confirmed by full
census (only sean-connolly.json carries this tag).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` and `data/composers/*.json`
(full 3-file census), plus Tier 2 CSDb research (each file's own SID entry
and, for the 2 full-intro releases, their release/credit pages) via
`scripts/lib/csdb-client.js`. No runtime fact was disassembled or traced.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the two sibling cards, the local
composer aggregation (full census), and CSDb SID/release pages for all 3
tagged files.
