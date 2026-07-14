# Cadaver Musicdriver (Lasse Öörni's MiniPlayer)

```json
{
  "id": "cadaver-musicdriver",
  "name": "Cadaver Musicdriver (Lasse Öörni's MiniPlayer)",
  "aliases": ["Cadaver_Musicdriver_10"],
  "authors": ["Lasse Öörni (Cadaver)"],
  "released": "2000s-2010s (Covert Bitops)",
  "status": "in-progress",
  "platform": "Finnish coder-musician Lasse Öörni's ('Cadaver,' co-founder of group Covert Bitops) LEAN, COMPACT IN-GAME playback routine — CONFIRMED via SIDId's own raw signature file as a technically distinct driver from his other, already-carded [[goattracker]] editor's own player: this is his 'MiniPlayer'/'MiniPlayer2' family, per his own tools.html page, used in-game (e.g. 'Metal Warrior 3') rather than exported from the full-featured editor. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": 142950,

  "memory": { "load_address": "Sample HVSC file traced (Metal Warrior 3, 2012 patch, Covert Bitops): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 2 filter writes in a dense 212-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED: Cadaver = Lasse Öörni, Finnish demoscener/coder active since ~1998 — CSDb scener id=2908, groups Covert Bitops (his own, co-founded with Olli Niemitalo/'Yehar') and Protovision (joined 2020), country Finland, roles coder/graphician/musician. An initial research guess that he was linked to 'Byterapers' was checked and found UNSUPPORTED by any source — his actual group is Covert Bitops, not Byterapers, and that incorrect premise is not carried forward.",
    "CONFIRMED TECHNICALLY DISTINCT FROM [[goattracker]] (his other, already-carded tool), via SIDId's raw signature file (`sidid.cfg`, verified by direct fetch/grep, not just search snippets): only TWO numbered 'Cadaver_Musicdriver' signatures exist total ('_7' and '_10'), no others — meaning '10' is not the tenth entry in a documented public sequence, just the second of two distinct byte-pattern signatures Öörni himself captured for revisions of his OWN in-game driver code. SIDId's human-readable `sidid.nfo` has NO entry at all for 'Cadaver_Musicdriver' — it only documents his separate GoatTracker editor (V1.x/2001 through V2/Mini2/2021) — confirming this is a genuinely different, undocumented-by-name routine, not a naming variant of GoatTracker.",
    "STRUCTURALLY CONSISTENT WITH HIS OWN DOCUMENTED 'MiniPlayer'/'MiniPlayer2' TOOLS: per his own tools.html page, these are minimal ~9-10-rasterline in-game routines with a GoatTracker-conversion path, distinct from the full editor's own player. The trace data supports this reading directly: load/init/play all packed at $1000-$1003 (a lean, lower-overhead layout) and 212 writes/50 frames (~4.2/frame) is typical of a hand-optimized in-game routine rather than a full-featured editor's export.",
    "'METAL WARRIOR 3' (the traced release) IS CONFIRMED AS A GENUINE COVERT BITOPS TITLE, via CSDb release id=142950 (a 2012 patched V1.4; the original game reportedly dates to 2001, per Lemon64 and C64-Wiki): Öörni is credited for BOTH code AND graphics — the classic solo-demoscene-developer pattern — but the MUSIC was a genuinely multi-composer effort (Aeuk, Amanojaku, Cadaver, Crow, Hybrido, Necrotum, Neomancia, Temuz, Warlord/phObos), with Cadaver himself composing only some tracks, including the traced file.",
    "Not confirmed in SIDId beyond the raw-signature-file evidence already cited (no human-readable `sidid.nfo` entry exists). Direct, confirmed relationship to [[goattracker]] (same author, technically distinct tool — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "CSDb scener id=2908 (Lasse Öörni / Cadaver, Covert Bitops/Protovision): https://csdb.dk/scener/?id=2908",
    "Demozoo — Lasse Öörni: https://demozoo.org/sceners/16419/",
    "Zak's C64 bio page — Lasse Öörni: https://zak.fi/Lasse_%C3%96%C3%B6rni",
    "SIDId sidid.cfg (github.com/cadaver/sidid) — raw signature entries 'Cadaver_Musicdriver_7'/'_10', verified via direct fetch",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — confirms only GoatTracker is documented there, no Cadaver_Musicdriver entry",
    "Cadaver's own tools.html (MiniPlayer/MiniPlayer2 description): https://cadaver.github.io/tools.html",
    "CSDb release id=142950 (Metal Warrior 3 V1.4, 2012, full credits): https://csdb.dk/release/?id=142950",
    "Lemon64 — Metal Warrior 3: https://www.lemon64.com/game/metal-warrior-3",
    "C64-Wiki — Metal Warrior: https://www.c64-wiki.com/wiki/Metal_Warrior",
    "Existing KB card: knowledge/players/goattracker.md (his other tool, updated in this same batch)",
    "Local dataset: 3 files tagged Cadaver_Musicdriver_10, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Cadaver_Musicdriver_10` tag is Finnish coder-musician Lasse Öörni's
('Cadaver') lean, in-game playback routine — a 'MiniPlayer' family
distinct from his other, already-carded [[goattracker]] editor, per
SIDId's own raw signature file. Player-ID-fingerprinted across 3 files,
all his own, including tracks from his own game 'Metal Warrior 3.'

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
technical distinction from GoatTracker**: verified directly by fetching
SIDId's own raw signature file rather than trusting a search summary,
showing this is a genuinely separate, undocumented-by-name routine, not
a GoatTracker naming variant.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Cadaver_Musicdriver_10`-
tagged `.sid` + trace — Öörni's own public GoatTracker source could serve
as a useful comparison point even though this driver is distinct.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Cadaver_Musicdriver_10` `.sid` (Metal Warrior 3):
load `$1000`, init `$1000`, play `$1003`, **212 register writes / 50
frames** (2 filter writes). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — CSDb (2 entries), Demozoo, Zak's bio page,
SIDId (2 files), Cadaver's own tools.html, Lemon64, C64-Wiki, and the
related goattracker card.
