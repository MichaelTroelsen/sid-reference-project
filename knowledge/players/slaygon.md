# Slaygon

```json
{
  "id": "slaygon",
  "name": "Slaygon",
  "aliases": ["Slaygon"],
  "authors": ["Kenneth Mutka (Slaygon)"],
  "released": "TODO: no release year for this tag in SIDId. The author's own self-made C64 tools span 1989 (Notemaker) to 1990 (Slaygon Coder V1.0); no confirmed link from this Player-ID tag to one specific CSDb release (see quirks).",
  "status": "stub",
  "platform": "Native C64 — a personal, self-coded music editor/player routine written by the composer himself (not a distributed multi-user tracker). Confirmed by the author's own words: \"You learn a lot of the sid by doing your own music routine.\" (Remix64 interview, see sources).",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — read off the PSID header shown on CSDb's SID-entry pages, identical across every file checked (2001.sid id=27445, Basoni.sid id=27449, Sadis.sid id=27478). Not from disassembly; TODO beyond this: no zero-page/layout facts.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "$1000 — same 3 files checked via CSDb SID-entry pages (see memory.load_address); A/X/Y convention TODO",
    "play": "$1003 — same 3 files checked via CSDb SID-entry pages; call rate/convention TODO"
  },
  "speed": "TODO: PSID header alone does not establish CIA-vs-raster timing or multispeed signalling; no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer routine: every one of the 20 files tagged 'Slaygon' in this project's dataset is by Kenneth Mutka (Slaygon) himself (data/composers/slaygon.json — 20 of his 43 catalogued files use this tag; no other composer's file in the dataset does, grep-verified across all of data/composers/*.json). This is the exact 'personal/hand-coded routine' pattern called out in CLAUDE.md (cf. the Rob_Hubbard inferred-player case) rather than a genuinely shared, published tool.",
    "Confirmed in his own words: asked about the pros/cons of using his own editor, Slaygon told Remix64: \"The positive side is that when ever you needed a feature, you'd just code it in\" and \"You learn a lot of the sid by doing your own music routine\" — direct first-person confirmation this is a self-written routine, not a general-purpose tracker (https://remix64.com/interviews/interview-slaygon.html).",
    "CSDb credits Kenneth Mutka (Slaygon) with several of his own C64 tools over the years: Notemaker (1989, id=5133), Notemaker V2 (1990, id=142470), Slaygon Coder V1.0 (1990, id=20865, code credited to Slaygon alone), Censored Editor V1.1 (1990, id=91724) / V1.6 (2001, id=67187), Contactdealer V3.0 (1990, id=45668), Censor Writer (undated, id=187342) — https://csdb.dk/scener/?id=934. SIDId separately tracks 'Censored_Editor' as its own Player-ID tag with a CSDb reference (release 91724); the bare 'Slaygon' tag in data/sidid.json has NO reference field at all, so which of these self-made tools the plain 'Slaygon' tag actually corresponds to is not confirmed here. 'Slaygon Coder V1.0' (self-titled, solely his own code credit, same 1990 era) is the most plausible single candidate but this is a guess, not a cited fact — do not promote it to `csdb_release` without a real Player-ID/SIDId source confirming it.",
    "The load/init/play addresses ($1000/$1000/$1003) are identical across every file spot-checked on CSDb, which is consistent with a real, reused fixed-address routine rather than bespoke per-tune assembly — but this was read from each file's PSID header via CSDb's web pages, not verified by disassembly, so treat it as a strong hint rather than a confirmed fact."
  ],
  "sources": [
    "data/sidid.json byTag.Slaygon (author: Kenneth Mutka (Slaygon); no released/reference/comment supplied)",
    "data/composers/slaygon.json — 20 of 43 records tagged 'Slaygon' (grep-verified across all of data/composers/*.json as the only composer using this tag)",
    "data/composers/slaygon.json (local composer profile + per-file folder records; confirms sole-composer usage)",
    "CSDb scener profile: https://csdb.dk/scener/?id=934",
    "CSDb release 'Slaygon Coder V1.0' (1990, Censor Design): https://csdb.dk/release/?id=20865",
    "CSDb release 'Notemaker' (1989, Censor Design): https://csdb.dk/release/?id=5133",
    "CSDb SID entries (PSID header load/init/play): https://csdb.dk/sid/?id=27445 , https://csdb.dk/sid/?id=27449 , https://csdb.dk/sid/?id=27478",
    "Remix64 interview with Slaygon: https://remix64.com/interviews/interview-slaygon.html"
  ]
}
```

## Overview

"Slaygon" is the Player-ID tag for a personal music routine coded by Kenneth
Mutka (handle Slaygon), a Swedish scener with Censor Design, best known today
as the founder of SLAY Radio. In this project's dataset it is used by exactly
one composer — Mutka himself, 20 of his 43 catalogued files — matching the
"composer's own hand-coded in-game routine" pattern (see CLAUDE.md's
`Rob_Hubbard` precedent) rather than a widely distributed tracker. Mutka
confirms this directly in a Remix64 interview: he wrote his own editor because
"when ever you needed a feature, you'd just code it in," and said doing so
taught him "a lot of the sid." CSDb separately credits him with several
named C64 tools across 1989–2001 (Notemaker, Notemaker V2, Slaygon Coder V1.0,
Censored Editor V1.1/V1.6, Contactdealer V3.0, Censor Writer) — but none of
those CSDb release entries is confirmed by SIDId as the specific tool behind
this plain "Slaygon" tag, so no `csdb_release` is asserted.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are: (1) this is a
single-composer, self-coded routine, not a published tool with a real user
base; (2) CSDb lists multiple candidate tools by the same author but none is
confirmably THE tool behind this Player-ID tag, so `csdb_release` stays
`null` rather than guessing; (3) the $1000/$1000/$1003 load/init/play
addresses recur identically across every file checked, a real hint toward a
reused fixed routine, but sourced from CSDb's PSID header display, not a
disassembly.

## Disassembly notes

None performed. No `.sid` from this family has been disassembled here; the
only runtime facts recorded (load/init/play addresses) come from reading
CSDb's per-file SID-entry pages (which parse the PSID header), not from
tracing code. Zero-page usage, data layout, and effect encoding are all
unknown.

## Verification

**Not verified — `status: stub`.** Identity (sole author, single-composer
usage, self-coded-routine claim from the author's own interview) and the
load/init/play addresses (from PSID headers, cross-checked on 3 files) are
the only facts recorded with citations. No init/play code has been
reassembled or traced through `sidm2-siddump`; do not promote this card
past `stub` without doing that.

## Sources

See the `sources` array — SIDId's cached `byTag.Slaygon` entry, this
project's local `data/composers/slaygon.json`,
Kenneth Mutka's CSDb scener profile and two of his tool releases, three of
his SID files' CSDb entries (for PSID header addresses), and his Remix64
interview.
