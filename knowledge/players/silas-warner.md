# Silas Warner (Muse Software driver)

```json
{
  "id": "silas-warner",
  "name": "Silas Warner (Muse Software driver)",
  "aliases": ["Silas_Warner"],
  "authors": ["Silas S. Warner"],
  "released": "1983-1984 (Muse Software)",
  "status": "in-progress",
  "platform": "CONFIRMED to be Silas S. Warner (1949-2004) — the creator of Castle Wolfenstein (1981) and Beyond Castle Wolfenstein, the foundational stealth game whose title/concept later inspired id Software's entire Wolfenstein franchise. A trained musician/composer as well as Muse Software's first employee and lead programmer, he provided ONLY the music (not code) on two John F. Kutcher-programmed C64 titles. A separate tag, `Silas_Warner_Digi`, covers his own Wolfenstein games' digitized-speech routine — not this card. Player-ID-fingerprinted across 2 files, both his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Rescue Squad, 1983, Muse Software): load $c000 (init $cb02, play $cfa8).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $cb02.", "play": "Sample trace: $cfa8 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 2 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE, a genuinely notable find: Silas S. Warner (18 August 1949 - 26 February 2004), Muse Software's FIRST EMPLOYEE, best known as the creator of Castle Wolfenstein (1981) and Beyond Castle Wolfenstein — a foundational stealth-game concept that directly inspired id Software's later Wolfenstein 3D and Return to Castle Wolfenstein, making Warner arguably the originator of an entire modern game genre's naming convention. Also worked at MicroProse (Silent Service, Red Storm Rising) and Virgin Games. This project's own DeepSID composer profile already independently carries `affiliation: 'MUSE Software'`, `active: '1984'`, matching birth/death years — consistent identification across sources, not asserted from name alone.",
    "GENUINELY A TRAINED MUSICIAN, not just a programmer credited on a music line by default: multiple sources describe him as 'a programmer, author and musician,' who composed classical-style works outside games ('Fugue for DRH,' 'Variations on Sonata in A' by Mozart) — this makes a real music credit biographically plausible, not a stretch.",
    "ON BOTH CONFIRMED FILES, HE PROVIDED MUSIC ONLY, NOT CODE: 'Rescue Squad' (1983, the traced file) and 'Space Taxi' (1984) were BOTH programmed by John F. Kutcher, a then-teenage/college-freshman developer at Muse — Warner, already the studio's senior figure, added the music/sound on both titles. C64-Wiki explicitly credits him with 'only music' on Space Taxi.",
    "A REAL SCOPE DISTINCTION FOUND, worth preserving precisely: this project's own composer folder for Silas Warner actually contains FOUR files across TWO separate player tags — this card's `Silas_Warner` tag covers ONLY Rescue Squad and Space Taxi (his conventional music driver), while a SEPARATE tag, `Silas_Warner_Digi` (not covered by this card), covers Castle_Wolfenstein.sid and Beyond_Castle_Wolfenstein.sid — almost certainly his own documented digitized-speech routine (the German guard voices in the Wolfenstein games were a real, pioneering Warner invention on the Apple II, later ported to C64). Two distinct player identities from the same person, not a scope error.",
    "NO CSDb SCENER PROFILE EXISTS — expected and unremarkable, matching every other purely-commercial 1980s US studio composer already carded in this KB: this project's own DeepSID profile shows `csdb_type: 'scener'`, `csdb_id: 0` (never matched). Individual releases DO have their own bare CSDb SID entries (ids 31401-31404), just no scener/group page.",
    "NO VGMPF PAGE WAS FOUND for Silas Warner specifically despite an explicit check — an unusual gap for a figure this well-documented elsewhere (Wikipedia, C64-Wiki, MobyGames); worth a follow-up direct-URL check in a future session, not treated as evidence of non-existence.",
    "Not confirmed in SIDId beyond the bare author field already known for this tag (no name field).",
    "SUPERSEDED CLAIM — a working relationship DOES exist, and it was found later: this card previously asserted 'No documented working relationship found to any other US commercial-studio composer already in this KB', having checked against [[ed-bogas-accolade]], [[ed-bogas-hakansson]], [[david-thiel]], [[kyle-johnson]], [[al-lowe]], [[paul-mudra]], [[rick-cardinali]], [[kenneth-arnold]], [[arti-haroutunian]]. That conclusion was correct for the composers then carded, but it is now FALSIFIED by [[ken-lagace]]: RED STORM RISING (1988, MicroProse) was CODED by Silas S. Warner (with Richard Orban and Sid Meier) and SCORED by Ken Lagace — a same-game, same-studio working relationship. The clue was already sitting on this card ('Also worked at MicroProse (Silent Service, Red Storm Rising)') and simply hadn't been connected. Lesson: this card's own 'no relationship found' was a statement about KB coverage at the time, not about the world.",
    "A STRONG THEMATIC PAIR with [[ken-lagace]], beyond the shared game: both cards document the IDENTICAL pattern — a US commercial-studio figure whose composer-named HVSC tag reflects MUSIC ONLY, NOT CODE. Warner: music-only on Kutcher-programmed Muse titles. Lagace: music-only on a MicroProse house driver he did not write. Note the neat inversion on Red Storm Rising itself, where Warner is on the CODE side and Lagace on the MUSIC side."
  ],
  "sources": [
    "HVSC Musicians.txt ('Warner, Silas S. - USA'): local cache data/hvsc/Musicians.txt line 1808",
    "Local dataset: data/composers/silas-warner.json (DeepSID dump — affiliation, active year, birth/death dates, and the 4-file/2-tag split)",
    "Wikipedia — Silas Warner: https://en.wikipedia.org/wiki/Silas_Warner",
    "C64-Wiki — Silas Warner (music-only credit on Space Taxi): https://www.c64-wiki.com/wiki/Silas_Warner",
    "MobyGames — Silas S. Warner: https://www.mobygames.com/person/673/silas-s-warner/",
    "The Oasis BBS — 'Muse Software's C64 Legacy' retrospective: https://theoasisbbs.com/muse-softwares-c64-legacy-golden-years-episode-3/",
    "Blendo75 — Rescue Squad review (composer/coder credit): https://blendo75.blogspot.com/2014/07/c64-review-rescue-squad-c-1983-muse.html",
    "Wikipedia — Space Taxi: https://en.wikipedia.org/wiki/Space_Taxi",
    "Local dataset: 2 files tagged Silas_Warner, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Silas_Warner` tag is confirmed to be Silas S. Warner — creator of
Castle Wolfenstein, the foundational stealth game whose concept later
inspired the entire modern Wolfenstein franchise. Genuinely a trained
musician as well as a programmer, he provided MUSIC ONLY (not code) on
two John Kutcher-programmed Muse Software titles. Player-ID-
fingerprinted across 2 files, both his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
identity of a genuinely major figure in games history**, cross-sourced
across Wikipedia, C64-Wiki, MobyGames, and this project's own DeepSID
dump. Also notable: a **real, precisely-scoped tag split** — his own
folder holds two separate player identities (this card's conventional
music driver vs. a separate, uncarded `_Digi` speech routine), correctly
kept apart rather than merged.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Silas_Warner`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Silas_Warner` `.sid` (Rescue Squad): load `$c000`,
init `$cb02`, play `$cfa8`, **47 register writes / 50 frames** (2 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset cache,
Wikipedia (2 pages), C64-Wiki, MobyGames, The Oasis BBS, and Blendo75.
