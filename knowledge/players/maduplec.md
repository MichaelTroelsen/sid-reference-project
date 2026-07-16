# Maduplec

<!--
  Player-ID / SIDId tag: "Maduplec" — a hand-coded personal play routine
  embedded by Martin Arentoft (handle Maduplec) directly into his own
  1990-1993 demo/music productions, not a distributed editor tool.
-->

```json
{
  "id": "maduplec",
  "name": "Maduplec",
  "aliases": ["Maduplec"],
  "authors": ["Martin Arentoft (Maduplec)"],
  "released": "~1990-1993 (earliest tagged tune: \"Tripler (tune 5)\", 1990 NATO/BUDS)",
  "status": "stub",
  "platform": "Native C64 6502 hand-coded play routine, embedded directly in each of Maduplec's own demo/music productions — not a distributed/published editor tool.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no fixed address — the routine is relocated per production. CSDb's PSID header fields for two Maduplec-tagged .sids show different load addresses ($1000 for \"Tripler (tune 5)\", csdb.dk/sid/?id=18967; $3400 for \"BUDS Intro\", csdb.dk/sid/?id=18951), consistent with a routine assembled fresh into each demo rather than shipped as a fixed-address tool.",
    "zero_page": "TODO: not disassembled here.",
    "layout": "TODO: not disassembled here."
  },
  "entry": {
    "init": "TODO: not a fixed constant (see memory.load_address note). Observed PSID header pattern on 2 sampled files: init address == load address.",
    "play": "TODO: not a fixed constant. Observed PSID header pattern on 2 sampled files: play address == load address + 3 (both csdb.dk/sid/?id=18967 and id=18951) — likely just a JMP table, not verified by disassembly."
  },
  "speed": "TODO: not disassembled here.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled here.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Almost certainly a personal, hand-coded play routine rather than a published tool: of the 37 files in this project's local dataset tagged with the raw player tag \"Maduplec\", 36 (97%) are in Martin Arentoft's own HVSC composer folder (data/composers/maduplec.json). The 1 remaining file (\"Mad4.sid\") is in Jens-Christian Huus's (JCH) own composer folder — that record's `author` field reads \"Jens-Christian Huus\", NOT Arentoft, so this is a second, distinct composer independently carrying the same raw Player-ID tag, not a JCH tune crediting Maduplec as its origin. Usage is 97% one composer, not literally 100%.",
    "Martin Arentoft did not use his own routine for his entire catalogue: his composer folder shows a mix of players across his output — \"Maduplec\" for most of his 1990-93 BUDS/NATO-era tunes, but also JCH_NewPlayer_V5/V6/V9 and FutureComposer_V1.0 for other tracks in the same folder — so \"Maduplec\" identifies only a subset of his work, not a career-long personal engine.",
    "SIDId's sidid.nfo entry for this tag has only an AUTHOR field (\"Martin Arentoft (Maduplec)\") — no NAME/RELEASED/REFERENCE/COMMENT — confirming it was catalogued purely from Player-ID signature scanning, not from a documented/released tool with its own CSDb release page. Verified directly against the upstream sidid.nfo (github.com/cadaver/sidid), which matches this project's local data/sidid.json byte-for-byte on this entry.",
    "The PSID load address differs between sampled .sid files ($1000 vs $3400) while the play-minus-load offset (+3) stays constant — treat this as circumstantial (2-file sample, read from CSDb's rendered header, not from a disassembly), not a confirmed entry-point convention."
  ],
  "sources": [
    "data/sidid.json byTag.Maduplec (author only; no reference/comment) — matches upstream https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/maduplec.json — local HVSC/DeepSID-dump snapshot of Martin Arentoft's composer folder (folderSource: deepsid-dump), 36 of 48 files tagged \"Maduplec\" (the folder also carries JCH_NewPlayer_V5/V6/V9 and FutureComposer_V1.0 tags on other tracks)",
    "data/composers/jch.json — 1 additional \"Maduplec\"-tagged file (\"Mad4.sid\") in Jens-Christian Huus's own folder; that record's `author` field reads \"Jens-Christian Huus\", not Arentoft",
    "data/hvsc/musicians.json — Musicians.txt entry: handle Maduplec, real name Arentoft, Martin, group \"NATO / BUDS\", country Denmark",
    "CSDb scener profile (Martin Arentoft / Maduplec): https://csdb.dk/scener/?id=701 — groups Crest, B.U.D.S. (founder), Fairlight, NATO, Noise, Sidewize, The Pulse Magazine Staff; coder/graphician/musician",
    "CSDb SID entry (PSID header sample 1): https://csdb.dk/sid/?id=18967 (\"Tripler (tune 5)\", 1990 NATO/BUDS, load $1000 / init $1000 / play $1003)",
    "CSDb SID entry (PSID header sample 2): https://csdb.dk/sid/?id=18951 (\"BUDS Intro\", 1991 NATO/BUDS, load $3400 / init $3400 / play $3403)"
  ]
}
```

## Overview

"Maduplec" is a Player-ID signature name for a hand-coded C64 play routine
embedded by Martin Arentoft (scene handle Maduplec, Danish demoscene coder/
musician/graphician, founder of B.U.D.S., later a member of NATO, Fairlight,
and Crest) directly into his own 1990-1993 music and demo productions. Local
composer concentration is near-total: 36 of the 37 files carrying this raw
tag in the project's dataset (97%) are in Arentoft's own HVSC folder; the
remaining file is a Jens-Christian Huus (JCH) tune independently carrying
the same raw Player-ID tag, not a Maduplec-credited JCH production. Combined
with SIDId's sparse `sidid.nfo` entry (author only, no name/reference/
comment) and no CSDb release entry for the routine itself, this reads as a
personal in-house routine rather than a published/distributed editor —
Arentoft used other tools (JCH NewPlayer, FutureComposer) for other tracks in
the same folder, so it covers only part of his output, not his whole career.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) this is a near-one-
composer signature (97% Arentoft), not a published tool — treat any "family"
framing cautiously; (2)
the two sampled PSID headers show different load addresses, meaning the
routine is reassembled/relocated per production rather than shipped at a
fixed address, so no single `memory.load_address` fact can honestly be
recorded.

## Disassembly notes

None performed. No public source or prior disassembly was found for this
routine; the only runtime-adjacent facts here are two PSID header field
readings taken from CSDb's rendered SID-entry pages (load/init/play
addresses), which is not a substitute for reading the actual 6502 code and is
flagged as such in `quirks` and left largely `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed (author, scene affiliations, file-count/composer-concentration from
local data, and the sparse upstream SIDId entry). Every runtime field is
`TODO`; a future pass would need to disassemble a representative Maduplec-
tagged `.sid` (e.g. csdb.dk/sid/?id=18967) directly rather than relying on
CSDb's rendered header fields, then trace it through `sidm2-siddump` before
any of memory/entry/data-format/effects facts could be filled in.

## Sources

See the `sources` array — `data/sidid.json`,
`data/composers/maduplec.json` and `data/composers/jch.json` (local
DeepSID-dump snapshot), `data/hvsc/musicians.json`, the upstream
`cadaver/sidid` `sidid.nfo`, and two CSDb pages (scener profile + two SID
entries).
