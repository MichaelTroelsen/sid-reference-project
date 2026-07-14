# Music Producer II (J.N.W. Cheesman)

```json
{
  "id": "music-producer-ii",
  "name": "Music Producer II (J.N.W. Cheesman)",
  "aliases": ["Music_Producer_II"],
  "authors": ["J.N.W. Cheesman"],
  "released": "~1988",
  "status": "in-progress",
  "platform": "A C64 music editor authored by J.N.W. Cheesman — known to the C64 scene only through a single composer credit (Munch Load, 1988, a Pac-Man-style game intended as a Mastertronic pack-in/loader title), with no CSDb scener profile of his own. Player-ID-fingerprinted across 13 files: 12 by 'Uzzy' (real name Simon Collis, primarily a coder), 1 by Ewen Gillies — two unaffiliated composers from unrelated groups, showing the tool circulated beyond its author, though how or by whom is undocumented.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Beast, composed by Uzzy/Simon Collis): load $2600 (init $2f00, play $2659).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $2f00.", "play": "Sample trace: $2659 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 46 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "J.N.W. CHEESMAN'S ONLY CONFIRMED CREDIT is composer of the SID tune 'Munch Load' (1988) — a Pac-Man-style game intended as a loader/pack-in title for Mastertronic's 'Cheeseloader', reportedly released only as a preview after a dispute (the game was allegedly stolen and spread by the Laser cracking group). Cheesman has NO CSDb scener profile at all — he's known to the scene only via this one game credit, not as a demoscene participant.",
    "NO 'MUSIC PRODUCER I' ENTRY FOUND ANYWHERE — SIDId's own data has no such tag, and no source confirms a version-1 predecessor exists. A 1989 Triad crack release titled 'Music Producer Preview' surfaced in research but carries NO credits and no 'II' in its title — POSSIBLY an earlier commercial editor package, but this is unverified speculation, explicitly not treated as a confirmed version history on this card.",
    "UZZY = SIMON COLLIS, CONFIRMED (HVSC: 'Uzzy (Collis, Simon) / Entropy - UNITED KINGDOM'). CSDb (id=5358) shows he is primarily a CODER (Tex V1.1 cross-assembler, a Hires Picture to Screen Converter tool, editor of the Postmortem diskmag), with music credits limited to two demoscene productions: 'Beast' (1991, Entropy — the traced file, load/init/play addresses independently cross-checked against CSDb's own SID entry and matching exactly) and 'Call of the Wild' (1991, Entropy) — both demoscene productions, NOT commercial games, despite Cheesman's own known work being a commercial pack-in title.",
    "EWEN GILLIES (HVSC: handles King R.A.T./Warlock Arkhinos Ratazmus/Trisect/ASL, group The Mosh Masters) — CSDb (id=15365) shows a UK scener active ~1990-1995, groups Noise Masters International/Shinjitsu Software/Xlcus Software and Design, multi-role (musician/coder/cracker/graphician). No mention of Cheesman or this tool on his own profile — the connection is only visible from this project's own tag data, not corroborated externally.",
    "No source confirms whether Cheesman personally distributed this as a standalone public tool, or whether 'Music Producer II' is a name reconstructed/assigned retroactively by the SIDId project's own fingerprinting work — flagged as genuinely unknown rather than assumed either way.",
    "Not confirmed beyond the bare SIDId name/author fields already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "CSDb SID — Munch Load (1988, Cheesman's only confirmed credit): https://csdb.dk/sid/?id=53265",
    "CSDb release — Munch Load / Cheeseloader context: https://csdb.dk/release/?id=148337",
    "CSDb search — confirms no scener profile exists for Cheesman: https://csdb.dk/search/?seinsel=sceners&search=Cheesman",
    "CSDb SID — Beast (1991, Entropy, Simon Collis/Uzzy — address cross-check): https://csdb.dk/sid/?id=32987",
    "CSDb SID — Call of the Wild (1991, Entropy): https://csdb.dk/sid/?id=32988",
    "CSDb scener — Uzzy/Simon Collis (id=5358, Coder, Entropy/Logik): https://csdb.dk/scener/?id=5358",
    "CSDb scener — Ewen Gillies (id=15365, multi-role, The Mosh Masters/Noise Masters International): https://csdb.dk/scener/?id=15365",
    "CSDb release — 'Music Producer Preview' (1989, Triad, no credits — unverified predecessor lead): https://csdb.dk/release/?id=199066",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 13 files tagged Music_Producer_II, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Producer_II` tag is a C64 music editor by J.N.W. Cheesman, a
figure known to the scene only through one commercial game credit (Munch
Load, 1988) with no demoscene profile of his own. Player-ID-fingerprinted
across 13 files, mostly by Uzzy/Simon Collis — a coder primarily known for
other tools — showing this editor circulated beyond its author into
unrelated demoscene circles.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Cheesman's **near-total
obscurity** outside one game credit; an **unverified 'Music Producer I'
lead** explicitly not treated as confirmed; and the tool's use by **two
unaffiliated composers from unrelated groups**, whose connection to
Cheesman himself is undocumented.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Music_Producer_II`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Music_Producer_II` `.sid` (Beast, composed by Uzzy):
load `$2600`, init `$2f00`, play `$2659`, **250 register writes / 50
frames** (46 filter writes — very filter-heavy). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (5 entries), HVSC Musicians.txt.
