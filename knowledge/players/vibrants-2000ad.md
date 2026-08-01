# Vibrants 2000 A.D. (pre-NP21 player)

```json
{
  "id": "vibrants-2000ad",
  "name": "Vibrants 2000 A.D. (pre-NP21 player)",
  "aliases": ["2000 A.D.", "2000AD"],
  "authors": ["TODO: unconfirmed as player-routine author — CSDb's webservice confirms the tune-composer field for all three '1988 2000 A.D.'-labelled files (Echo_Beat, Galax_it_y, James_Bond_Theme_Remix) is 'Thomas E. Petersen (Laxity)', but that is composer attribution, not a verified claim about who wrote this specific player routine (same caution SIDM2 applies to the sibling wizax-a/zetrex-yp cards)"],
  "released": "1988 (CSDb `Released` field for Echo_Beat.sid and James_Bond_Theme_Remix.sid: '1988 2000 A.D.'; Galax_it_y.sid: same. Earliest dated UsedIn release attestations: James_Bond_Theme_Remix in 'Snolli Kill', June 1988; Galax_it_y in 'Seeker III', 9 Oct 1988, Abnormal Party, Norway)",
  "status": "stub",
  "platform": "Native C64 player routine — pre-NP21 (1988), architecturally distinct from the Laxity NP21 fork family (own orderlist/pattern/byte-stream model, not an NP21 variant)",
  "csdb_release": null,

  "memory": {
    "load_address": "File-specific: Echo_Beat $0400, Galax_it_y $1000",
    "zero_page": "TODO",
    "layout": "Per-voice orderlist -> pattern pointer table (file-specific address, not fixed: Galax_it_y $1788/$178E vs. Echo_Beat $0A29/$0A2D) -> pattern byte-stream. Standard PAL chromatic frequency LUT at a per-file address (Galax_it_y $150F/$1510, Echo_Beat $090F/$0910)."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "Per-voice orderlist bytes: $00-$7F = pattern index, $80-$FE = commands (not individually decoded), $FE = end, $FF = loop. Transpose command decoded: AND #$1F; STA $XXEF,X.",
    "patterns": "Byte-stream per pattern: duration+octave-flag byte, then note byte, terminated by $FF.",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO beyond the orderlist transpose command above — in-pattern command bytes ($80-$FE) are not yet decoded.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NOT an NP21 variant — this predates NP21 entirely (1988) and uses a completely different orderlist/pattern/byte-stream architecture, unlike Stinsen/Beast-Angular/DRAX which are all NP21 forks. Do not group it with those in the graph or in prose.",
    "James_Bond_Theme_Remix carries the SAME '1988 2000 A.D.' copyright label as Echo_Beat and Galax_it_y but is a DIFFERENT, unrelated player — no shared code signature. An earlier SIDM2 note wrongly grouped all three files together; this was corrected. A shared copyright/scene label on a SID file is not proof of a shared player.",
    "Editor status: only F1 (chromatic notes, per-pattern transpose) is populated. In-pattern commands and full write-back (propagating edits back into the binary) are undone — this player's byte format differs enough from NP21 that the shadow-buffer/ch_seq_ptr write-back mechanisms built for the NP21 fork family don't apply; a bespoke translator would be needed.",
    "CENSUS CHECK (2026-08-01): the card's `aliases` ('2000 A.D.', '2000AD') are NOT raw Player-ID/SIDId tags — grepping every file in data/composers/*.json and data/sidid.json's byTag map for '2000' or 'Vibrant' turns up zero matches for either string. This is a genuine zero, not a spelling bug: no automated Player-ID scan ever produced a '2000 A.D.'-branded signature. The three underlying files SIDM2 groups under this label (Echo_Beat.sid, Galax_it_y.sid, James_Bond_Theme_Remix.sid — all in data/composers/laxity.json) DO exist in the local dataset, but SIDId's automated tagger tags all three 'Vibrants/Laxity' — the exact same raw tag that laxity-newplayer.md already claims as its own alias for the NP21 player. So the automated tagger does not distinguish this pre-NP21 (and the unrelated James_Bond) player from genuine NP21 Laxity files at the tag level; that tag was deliberately NOT added to this card's aliases, to avoid a false identity collision with laxity-newplayer.md. This mirrors the documented over-matching behaviour of the sibling wizax-a/zetrex-yp detectors (see those cards' quirks).",
    "'2000 A.D.' is not a registered CSDb group/scener entity — a CSDb webservice search (type=search, search=2000 A.D.) returns 'No result'. The '1988 2000 A.D.' string is PSID header text (CSDb's `Released` field for all three files), most plausibly a personal copyright/vanity label Laxity embedded himself, not evidence of a separate outside group or author."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2 memory:vibrants-2000ad-cluster-re.md",
    "Census: data/sidid.json (byTag, grepped for '2000'/'Vibrant' — no '2000 A.D.'/'2000AD' tag exists) and data/composers/*.json (grepped for player tag containing '2000' or 'Vibrant' across all 1902 composer files)",
    "data/composers/laxity.json (Echo_Beat.sid, Galax_it_y.sid, James_Bond_Theme_Remix.sid entries: csdb_id 17756/17770/17790, all tagged player='Vibrants/Laxity')",
    "CSDb webservice https://csdb.dk/webservice/?type=sid&id=17756 (Echo Beat: Released '1988 2000 A.D.', LoadAddr 1024/$0400, InitAddr 1024, PlayAddr 1030)",
    "CSDb webservice https://csdb.dk/webservice/?type=sid&id=17770 (Galax(it)y: Released '1988 2000 A.D.', LoadAddr 4096/$1000; earliest UsedIn 'Seeker III', 9 Oct 1988, Abnormal Party)",
    "CSDb webservice https://csdb.dk/webservice/?type=sid&id=17790 (James Bond Theme Remix: Released '1988 2000 A.D.', LoadAddr 4096/$1000; earliest UsedIn 'Snolli Kill', June 1988)",
    "CSDb webservice https://csdb.dk/webservice/?type=search&search=2000+A.D. (group/entity search: 'No result')"
  ]
}
```

## Overview

Vibrants 2000 A.D. is SIDM2's name for a pre-NP21 (1988) native player found
in two files, Echo_Beat and Galax_it_y — architecturally its own
orderlist/pattern/byte-stream design, unrelated to the
[Laxity NewPlayer](laxity-newplayer.md) NP21 architecture that the
Stinsen/Beast-Angular/[DRAX](drax-newplayer.md) forks share. A third file
carrying the same "1988 2000 A.D." copyright label, James_Bond_Theme_Remix,
turned out on inspection to use a completely different, unrelated player —
worth remembering as a caution against grouping files by copyright string
alone.

This is not a Player-ID/SIDId signature family: a full census of
`data/sidid.json` and every file in `data/composers/*.json` found zero raw
tags matching "2000 A.D." or "2000AD" (confirmed via CSDb webservice too —
no CSDb group/entity by that name exists). The three underlying files are all
present in the local dataset (`data/composers/laxity.json`), but SIDId's
automated tagger lumps all three under "Vibrants/Laxity" — the same tag
[laxity-newplayer](laxity-newplayer.md) (NP21) already claims — so the tagger
does not distinguish this pre-NP21/unrelated-James_Bond player from genuine
NP21 files at the tag level. See the `quirks` array for the full finding.

## Quirks & gotchas

See the `quirks` array above — most important: this is **not part of the
NP21 fork family** despite living in the same SIDM2 "clusters" research
alongside Stinsen/Beast/Angular/DRAX; keep it graph-separate (no
`derives_from` edge to `laxity-newplayer` is asserted here, unlike those
cards).

## Disassembly notes

Orderlist and pattern-pointer structure confirmed via disassembly for both
Echo_Beat and Galax_it_y independently (different load addresses, different
pointer-table locations, same encoding). In-pattern command bytes ($80-$FE
beyond the confirmed transpose command) remain undecoded.

## Verification

F1 (note/transpose) editor wiring is functional per SIDM2's CLUSTERS.md, but
no `mcp-c64` re-run has happened here. `status: stub` — entry points, speed
model, and most command bytes remain undocumented.

## Sources

See the `sources` array. Tier 1/2 gap-filling pass (2026-08-01) added the
census confirmation (genuine zero Player-ID tag, not a spelling bug), the
"Vibrants/Laxity" tag-collision finding, CSDb webservice cross-checks of the
load addresses and "1988 2000 A.D." release text for all three files, and a
CSDb group-search confirming "2000 A.D." is not a registered scene entity.
