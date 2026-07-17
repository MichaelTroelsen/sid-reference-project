# ICC/TheVoice (player routine)

```json
{
  "id": "icc-thevoice",
  "name": "ICC/TheVoice",
  "aliases": ["ICC/TheVoice"],
  "authors": ["Incredibly Confused Coder (ICC)"],
  "released": "TODO: year (files in the collection are Goofy tunes from ~1989-1991, but no CSDb release documents the routine itself)",
  "status": "stub",
  "platform": "Almost certainly a demo-embedded, hand-coded 6502 music DRIVER, not a distributed editor/tool — no CSDb tool release, manual, or source has been found for it.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx (no disassembly or source located)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
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
    "SIDId only records the author, no released year or CSDb reference: sidid.nfo entry \"ICC/TheVoice\": author \"Incredibly Confused Coder (ICC)\" (see data/sidid.json byTag).",
    "In this project's dataset ALL 8 files tagged ICC/TheVoice are by a single composer, Goofy (see data/composers/goofy.json) — 100% composer concentration, the strongest possible signal of a personal/small-scene routine rather than a published tool (per EXTRACTION-TEMPLATE.md's concentration heuristic).",
    "CSDb resolves the coder: 'Incredibly Confused Coder' (ICC) was an Austrian scener, ex-member of the group 'The Voice' (csdb.dk/group/?id=1403, founded 1988, Austria) and 'The Austrian Union' — https://csdb.dk/scener/?id=7275. Goofy (the sole composer using this tag) was ALSO a member of The Voice (csdb.dk/scener/?id=7274, joined 1988, role Coder/Graphician/Musician) — so the tag names ICC's own in-demo music driver, used by his groupmate Goofy to score The Voice's own productions.",
    "Corroborating evidence: several of Goofy's ICC/TheVoice-tagged tune titles match The Voice's own demo releases by name — 'Border Show (tune 1)' and 'Imagination (tune 1)' correspond to the group's demos 'Border Show' (CSDb release 10909, 1989) and 'Imagination' (CSDb release 10910, 1989), both crediting Goofy for Music.",
    "No CSDb tool/release entry, manual, source archive, or Codebase64 article was found for the routine itself (searched CSDb search, group page, and scener credits for ICC and for 'TheVoice' player/editor releases) — this is consistent with it being an in-demo driver rather than a released, packaged tool. Treat as closed/undocumented, not confirmed open or closed license — there is simply no tool release to license."
  ],
  "sources": [
    "sidid:ICC/TheVoice (author \"Incredibly Confused Coder (ICC)\", no released year, no CSDb reference) — data/sidid.json byTag",
    "Local dataset: 8 files tagged ICC/TheVoice, all by composer Goofy — knowledge/COVERAGE.md (#25, 8 files) and data/composers/goofy.json",
    "CSDb scener profile, Incredibly Confused Coder: https://csdb.dk/scener/?id=7275",
    "CSDb scener profile, Goofy: https://csdb.dk/scener/?id=7274 (cached at data/csdb/goofy.json)",
    "CSDb group profile, The Voice (Austria): https://csdb.dk/group/?id=1403",
    "CSDb release, Border Show (1989, The Voice, Goofy credited Music): https://csdb.dk/release/?id=10909",
    "CSDb release, Imagination (1989, The Voice, Goofy credited Music): https://csdb.dk/release/?id=10910"
  ]
}
```

## Overview

"ICC/TheVoice" is a Player-ID signature tag, not a known distributed tool.
SIDId records only the author name — "Incredibly Confused Coder (ICC)" — with
no release year or CSDb reference. In this project's dataset every one of the
8 files carrying this tag is by a single composer, **Goofy**, which is the
strongest composer-concentration signal available (see
`EXTRACTION-TEMPLATE.md`'s heuristic: near-total concentration on one composer
means "likely a personal/small-scene routine," not a published tool). CSDb
resolves why: both ICC and Goofy were members of the Austrian demo group **The
Voice** (founded 1988), and at least two of Goofy's ICC/TheVoice-tagged tunes
share their titles with The Voice's own demo releases ("Border Show",
"Imagination"), on which Goofy is credited for Music. The picture this
supports is that ICC coded a music driver in-house for the group's demos, and
Goofy — the group's musician — used it to score them, without it ever becoming
a released, documented, standalone tool.

## Quirks & gotchas

See the `quirks` array. The load-bearing facts: (1) the 100% single-composer
concentration, (2) the identification of ICC and Goofy as demo-group
colleagues in "The Voice" via CSDb, and (3) the title-match corroboration
against two of the group's actual demo releases. No tool release, source, or
documentation was found anywhere for the routine itself — this card is
identity-only.

## Disassembly notes

None. No source, no CSDb tool release, and no existing disassembly were
located for this routine — there is nothing published to start from beyond
the .sid files themselves. A future pass could pull one of Goofy's
ICC/TheVoice `.sid` files from HVSC and disassemble the driver directly, since
no other path to the memory map/entry points exists.

## Verification

**Not verified — `status: stub`.** Everything beyond identity (author,
composer-concentration, and the group-membership/title-match provenance
argument) is `TODO`. No runtime fact was guessed.

## Sources

See the `sources` array — the cached SIDId entry, the local per-composer
dataset, and CSDb scener/group/release pages for ICC, Goofy, and The Voice.
