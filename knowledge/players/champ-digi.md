# Champ Digi (player routine)

```json
{
  "id": "champ-digi",
  "name": "Champ Digi (player routine)",
  "aliases": ["Champ_Digi"],
  "authors": ["TODO: sole locally-credited author is Ingmar Weigel (The Magic Man / Crisp), but 'Champ' does not match any of his known handles — identity of 'Champ' is unconfirmed"],
  "released": "1988 (per the file's own CSDb SID entry — released by the group 'The Magic Man')",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under 'Champ' — appears embedded in a single game/demo tune, not confirmed as a distributed editor",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY OF 'CHAMP' IS UNCONFIRMED — the weakest-evidence card in this batch: the one locally-tagged file, 'Rock the World' (data/composers/the-magic-man.json, CSDb sid id 48357, 2 subtunes, released 1988), is credited SOLELY to 'Ingmar Weigel (The Magic Man)' — no second author, and CSDb's own SID entry for this file lists only that one credit, with no mention of 'Champ' anywhere on the page (confirmed by direct fetch). Weigel's other known handle is 'Crisp' (data/composers/the-magic-man.json profile: handles '<del>The Magic Man</del>, Crisp'); 'Champ' matches neither.",
    "A WEAK, EXPLICITLY UNCONFIRMED LEAD: a web search surfaced a CSDb-adjacent (Demozoo) mention of a scener called 'The Champ,' a member of the Danish group NoName (notable as the group that originally created CSDb.dk itself) until being let go from the group in October 1994. This does NOT plausibly connect to this 1988 file — Weigel (The Magic Man) is German and active from 1990 per his own composer profile, and no source ties 'The Champ'/NoName to Weigel or to this specific tune. Recorded here only to rule it out, not as an identification.",
    "SIDId (data/sidid.json) has NO entry for 'Champ_Digi' — this tag was fingerprinted by this project's own Player-ID tooling only, with no upstream research to draw on.",
    "100% single-file/single-composer-folder concentration: 1 file, and it sits in Ingmar Weigel's own HVSC folder alongside 4 other files (2 tagged 'SoundMonitor/MusicMaster_TMM', 1 tagged plain 'Soundmonitor') — 'Champ_Digi' is the sole outlier tag in an otherwise SoundMonitor-family catalog.",
    "PER THIS KB'S CORE RULE: no source confirms actual sample/digi playback technique for this tag — treated as a bare, unverified Player-ID label. Given how thin the evidence is here (not even a confirmed author), this card intentionally asserts almost nothing beyond the raw local-dataset fact of the tag's existence and file count."
  ],
  "sources": [
    "Local dataset: data/composers/the-magic-man.json — 1 file tagged Champ_Digi ('Rock the World', csdb sid id 48357, 2 subtunes), sole file credit 'Ingmar Weigel (The Magic Man)'; see knowledge/COVERAGE.md row #173 (1 file)",
    "data/sidid.json: no entry for 'Champ_Digi' (checked, absent)",
    "CSDb SID entry https://csdb.dk/sid/?id=48357 — 'Rock the World', sole author Ingmar Weigel (The Magic Man), released 1988 by The Magic Man, load address $2000, 2 subtunes, PAL/6581; no 'Champ' credit or mention anywhere on the page",
    "Demozoo — NoName group page (context only, for the ruled-out 'The Champ' lead): https://demozoo.org/groups/8465/",
    "data/composers/the-magic-man.json profile: full_name Ingmar Weigel, handles '<del>The Magic Man</del>, Crisp', country Germany, active 1990, csdb_id 3872"
  ]
}
```

## Overview

`Champ_Digi` is a Player-ID tag covering exactly **1 file** — "Rock the
World" (1988) — in German composer **Ingmar Weigel**'s ("The Magic Man" /
"Crisp") HVSC folder. This is the thinnest-evidence card in this batch: the
file's own CSDb entry credits only Weigel, with no second author and no
mention of "Champ" anywhere; Weigel's own known handles ("The Magic Man",
"Crisp") do not match "Champ" at all. A tenuous, explicitly-ruled-out lead —
a Danish scener nicknamed "The Champ," a former member of the group that
created CSDb.dk itself — does not plausibly connect to this file (wrong era,
wrong country, no source ties the two). The identity behind "Champ" remains
unresolved.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this card deliberately asserts almost
nothing beyond the tag's bare existence and 1-file usage, because even the
author attribution is unconfirmed — a rare case in this KB where the
sole on-file credit (Weigel) plainly doesn't match the tag's own name, and no
source resolves the mismatch.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Even identity is unconfirmed here — only
the bare local-dataset facts (1 file, 1988, CSDb-sourced technical details of
the SID itself) are established. No runtime behaviour has been confirmed or
reconstructed.

## Sources

See the `sources` array — local dataset aggregation, one CSDb SID-entry
lookup, and a Demozoo page cited only to rule out a weak identity lead.
