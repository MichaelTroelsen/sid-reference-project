# Mike/LSD

```json
{
  "id": "mike-lsd",
  "name": "Mike/LSD",
  "aliases": ["Mike/LSD"],
  "authors": ["Michael Vandenberg (Mike)"],
  "released": "1990 Lightning Soundtrack Development (LSD)",
  "status": "stub",
  "platform": "TODO: native C64 in-house routine (Player-ID/SIDId classifies this as a distinct signature; DeepSID dump marks every file using it 'Normal built-in', i.e. embedded in the PRG rather than a separate replay) — no editor/tool binary or source found to confirm whether it was ever a standalone program vs. hand-assembled per tune",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly; a spot-check of one file (Animantix, CSDb sid id 38927) showed PSID load $9000, but that is a single tune's own load address, not a confirmed fixed player address",
    "zero_page": "TODO: no disassembly available",
    "layout": "TODO: no disassembly available"
  },
  "entry": {
    "init": "TODO: per-file PSID header only; not disassembled",
    "play": "TODO: per-file PSID header only; not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly available",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Near-total single-composer concentration: of the 27 files in this dataset tagged 'Mike/LSD', all 27 are by the same HVSC composer, 'Mike' (data/composers/mike.json) — 27 of his 36 total files in the collection use this player, the rest presumably his own earlier/other routines. This is the textbook signal for a personal, in-house player routine rather than a published tool (cf. CLAUDE.md's Rob_Hubbard concentration note) — no other composer in the local dataset uses this tag.",
    "'LSD' here is 'Lightning Soundtrack Development', a music/scene group Mike (real name Michiel van den Berg, handles Mike / Michael Vandenberg / MB7447/TLD) was part of from 1990 onward (CSDb scener profile https://csdb.dk/scener/?id=26315) — it is not a separate development team credited with writing a generic tool; the 'LSD' in the tag most likely just names the group he released the tunes under, not a shared multi-author player.",
    "CSDb's own profile notes 'There are proofs that MB7447/TLD and Mike/LSD are the same person' — i.e. even CSDb treats 'Mike/LSD' primarily as an alias/credit for this one musician, reinforcing the personal-routine reading above.",
    "No CSDb release entry, no Codebase64 article, and no public source repo were found for this player under any spelling ('Mike/LSD', 'Lightning Soundtrack Development player') — treat as an undocumented/unreleased-as-a-tool in-house routine unless new evidence surfaces."
  ],
  "sources": [
    "Local dataset: sidid:Mike/LSD — data/sidid.json byTag['Mike/LSD'] = {author: 'Michael Vandenberg (Mike)', released: '1990 Lightning Soundtrack Development (LSD)'}, no reference/comment fields",
    "Upstream SIDId source, same entry verified verbatim: https://github.com/cadaver/sidid/blob/master/sidid.nfo ('Mike/LSD — AUTHOR: Michael Vandenberg (Mike) — RELEASED: 1990 Lightning Soundtrack Development (LSD)')",
    "knowledge/COVERAGE.md: 'Mike/LSD' ranked #18 uncarded family, 27 files, single raw tag 'Mike/LSD', no public-source flag",
    "data/composers/mike.json: composer 'Mike' (full_name Michiel van den Berg, CSDb scener id 26315, country Netherlands, active 1990) — 27 of 36 folder[] entries carry player: 'Mike/LSD'",
    "CSDb scener profile: https://csdb.dk/scener/?id=26315 — handles Mike / Michael Vandenberg / MB7447/TLD; groups Magnetix (1989-), Future Technologics 2009 (1990-1991), Lightning Soundtrack Development (1990-); 'proofs that MB7447/TLD and Mike/LSD are the same person'",
    "CSDb SID entry spot-check (one file only, not a general player fact): https://csdb.dk/sid/?id=38927 ('Animantix' by Mike, PSID load $9000, PAL, 6581)"
  ]
}
```

## Overview

"Mike/LSD" is the Player-ID/SIDId signature name for a music player routine
credited to Michael Vandenberg ("Mike"), a Dutch musician active in the C64
scene from 1990, releasing under the group tag "LSD" (Lightning Soundtrack
Development). In this project's dataset it is an entirely single-composer
signature: all 27 files tagged "Mike/LSD" belong to the HVSC composer "Mike"
(`data/composers/mike.json`), out of his 36 total tunes — i.e. no other
composer in the collection uses this tag. Combined with finding no CSDb
release, Codebase64 article, or public source for it, the evidence points to
an in-house personal routine rather than a distributed editor/tool, similar in
kind (though far smaller in reach) to the "Rob_Hubbard" case noted in
`CLAUDE.md`. Every runtime fact is unresearched — no disassembly has been done
here — so this card is identity/provenance only.

## Quirks & gotchas

See the `quirks` array: the near-100% single-composer concentration, the
"LSD" group-vs-tool distinction, CSDb's own note equating "Mike/LSD" with the
same person under a different handle (MB7447/TLD), and the absence of any
public source or documentation.

## Disassembly notes

None performed. No public source or prior disassembly was located for this
player; a future pass would need to pick a representative "Mike/LSD"-tagged
`.sid` (e.g. one of Mike's 27 files) and disassemble its PSID init/play from
scratch, then trace it through `sidm2-siddump` — the only route to real
memory-map/format facts here, since there is no source to read.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year/group, composer concentration) are confirmed, from the local
SIDId cache (cross-checked against the upstream `sidid.nfo` on GitHub),
`data/composers/mike.json`, and Mike's CSDb scener profile. No CSDb release
entry, source repository, or technical documentation was found for the player
routine itself, so every Tier 3 runtime field stays `TODO` rather than
guessed.

## Sources

See the `sources` array — the local SIDId cache and its verified upstream
GitHub source, `knowledge/COVERAGE.md`, `data/composers/mike.json`, Mike's
CSDb scener profile, and one single-file CSDb SID-entry spot-check (explicitly
not generalized to a player-wide memory map).
