# Kyle Hodgetts / African Safari (unidentified play routine)

```json
{
  "id": "kyle-hodgetts-african-safari",
  "name": "Kyle Hodgetts / African Safari (unidentified play routine)",
  "aliases": ["?Unknown_1"],
  "authors": ["Kyle Hodgetts (probable — credited as the game's sole coder/graphics/music)"],
  "released": "1984",
  "status": "stub",
  "platform": "Native C64 in-game music routine embedded in the single game 'African Safari' (Interdisc, Europe / Roflow Computer Software, Australia, 1984). Never distributed as a standalone editor/tracker; only known to exist inside this one game binary.",
  "csdb_release": null,

  "memory": {
    "load_address": "$C000 (per CSDb SID-entry metadata for this file)",
    "zero_page": "TODO: no disassembly performed here",
    "layout": "TODO"
  },
  "entry": {
    "init": "$C260 (per CSDb SID-entry metadata)",
    "play": "$C27E (per CSDb SID-entry metadata)"
  },
  "speed": "TODO: not documented anywhere found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The raw Player-ID tag itself is '?Unknown_1' — read literally, this is Player-ID/SIDId's OWN placeholder label for 'an unidentified/unclassified play routine, instance 1', not a proper tool or author name. This is a materially different situation from other '?'-prefixed tags already carded in this KB (e.g. '?Source' / unknown-c64-driver.md, '?Source_2' / source-c64-driver.md), where the '?' only marks an UNCONFIRMED name and an independent source (VGMPF) supplied a real driver identity and game list. Here, no such independent naming exists anywhere found — SIDId (data/sidid.json) has zero entries for 'Unknown_1' or any 'Unknown_' variant, confirmed by direct grep of the local sidid.json.",
    "Exactly 1 file in this dataset carries this tag: African_Safari.sid, HVSC MUSICIANS/H/Hodgetts_Kyle/, CSDb SID-entry id 48797 (confirmed by direct read of data/composers/kyle-hodgetts.json — the only occurrence of the literal string 'Unknown_1' as a `player` value anywhere in data/composers/*.json; a second, unrelated hit in data/composers/stello-doussis.json is a FILENAME 'Unknown_1.sid' whose actual `player` tag is 'SoedeSoft/Soundmaster_V3.1' — a false-positive grep match, not this tag).",
    "The composer folder itself is otherwise a Muso user: Kyle Hodgetts' other 3 local files (Black_Knight.sid — player blank/unidentified in DeepSID's own dump too, Pingo.sid, Star_Soldier.sid) are tagged 'Muso' (already carded: knowledge/players/muso.md). Only African_Safari.sid diverges, which is consistent with it being a one-off, earlier (1984, vs. Muso which is a later general-purpose tool) hand-coded routine rather than a mislabelled Muso file.",
    "CSDb's own metadata for this SID entry (fetched directly) gives load $C000, init $C260, play $C27E, PAL, 6581, 1 subtune, 1841 bytes of data — but does not name a player/driver anywhere in its listing, consistent with this being an uncatalogued in-house routine rather than a recognized tool.",
    "Web sources (Lemon64, mocagh.org, MyAbandonware, GameBase64) independently and consistently credit Kyle Hodgetts as the sole creator of 'African Safari' — code, graphics, AND music — for Interdisc (Europe) / Roflow Computer Software (Australia), 1984, a puzzle/adventure game about finding a lost diamond in Kenya. This supports (but does not first-party-confirm, unlike e.g. dave-warhol.md's Remix64 interview) that the unidentified routine is Hodgetts' own hand-written driver for this single game, not a third-party tool.",
    "No CSDb tool/release page, no public source repository, no Codebase64 article, and no disassembly of this routine was found anywhere. Given it is a single 1984 in-house game routine with zero re-use evidence (only 1 file, 1 game, 1 composer), a future pass's only path to more than identity facts would be disassembling this specific .sid from its CSDb-documented load/init/play addresses and tracing it via sidm2-siddump — not further web research.",
    "`csdb_release` is deliberately `null`, not unresearched: CSDb's own SID-entry webservice record for id 48797 (fetched directly) carries no 'Used in productions/releases' link at all, and a CSDb site-wide search for 'African Safari' returns only 15 unrelated CRACK-group release entries (The Phantoms, Danish Crackers, Mantua Soft, etc., 1984-1988) plus this one SID entry — none of those cracks is the original publisher release this routine ships in, and none is referenced from the SID entry itself. There is no CSDb release page to cite."
  ],
  "sources": [
    "Local dataset: data/composers/kyle-hodgetts.json — the sole file tagged '?Unknown_1' (African_Safari.sid, CSDb sid id 48797); confirmed this is the only genuine occurrence of the tag across data/composers/*.json (a second grep hit, stello-doussis.json, is a filename coincidence with an unrelated player tag)",
    "knowledge/COVERAGE.md — '?Unknown_1' ranked #8 among uncarded families, 1 file",
    "data/sidid.json — no entry for 'Unknown_1' or any 'Unknown_' variant (checked directly, zero occurrences)",
    "CSDb SID-entry metadata for id 48797 (load $C000, init $C260, play $C27E, PAL/6581, 1 subtune, 1841 bytes; no player named): https://csdb.dk/sid/?id=48797",
    "Lemon64 game page (publisher Interdisc/Roflow, 1984, creator+musician credited to Kyle Hodgetts): https://www.lemon64.com/game/african-safari",
    "pirates.emucamp.com Kyle Hodgetts page (credits him with code, graphics, music('?') across Black Knight and African Safari for Interdisc): http://pirates.emucamp.com/i/hodgetts.html",
    "Supplementary game documentation (release date/publisher corroboration, no player-routine detail): https://www.mocagh.org/miscgame/africansafari-alt.pdf , https://gb64.com/game.php?id=164 , https://www.myabandonware.com/game/african-safari-6ai",
    "CSDb webservice record for SID id 48797 (fetched directly, confirms '1984 Interdisc' release note but no UsedInReleases link): https://csdb.dk/webservice/?type=sid&id=48797&list=1",
    "CSDb site-wide search for 'African Safari' (15 unrelated crack-group release entries, 1984-1988, plus this SID entry; no release tied to this routine): https://csdb.dk/search/?seinsel=all&search=African+Safari"
  ]
}
```

## Overview

`?Unknown_1` is Player-ID/SIDId's own placeholder tag for an unidentified/
unclassified play routine — literally "unknown, instance 1" — not a real tool
or author name. In this local dataset it applies to exactly one file:
`African_Safari.sid`, HVSC `MUSICIANS/H/Hodgetts_Kyle/`, the music from the
1984 C64 puzzle-adventure game "African Safari" (Interdisc in Europe, Roflow
Computer Software in Australia). Multiple independent web sources credit
Kyle Hodgetts as the game's sole creator — code, graphics, and music — which
makes a self-written, one-off in-game routine the most plausible explanation,
though no first-party account of him writing a sound driver was found (unlike,
e.g., David Warhol's confirmed case). Hodgetts' three other local files all use
the unrelated, already-carded `Muso` tool instead, reinforcing that this one
file is a genuine outlier rather than a mislabelled `Muso` file.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name itself is Player-ID's
generic "unidentified" placeholder, not a proper name — this card documents
identity/provenance around the one file it applies to, but makes no claim of
having identified an actual named tool or author beyond "probably the game's
own credited creator, hand-coding a one-off routine."

## Disassembly notes

None performed. CSDb's metadata gives load `$C000`, init `$C260`, play
`$C27E` for this file (cited above) — a future pass could disassemble from
those addresses and trace via `sidm2-siddump`, but that is out of scope here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed: the single file this tag applies to, its CSDb load/init/play
metadata, and independently-sourced credits for the game it comes from. No
SIDId entry, no CSDb tool/release page, and no disassembly exist for this
routine. All Tier 3 runtime fields beyond the CSDb-sourced entry-point
addresses are honestly `TODO`.

## Sources

See the `sources` array — the local dataset (`data/composers/kyle-hodgetts.json`,
`knowledge/COVERAGE.md`), `data/sidid.json` (confirmed absent), CSDb's SID-entry
metadata for id 48797, and independent game-documentation sites (Lemon64,
pirates.emucamp.com, mocagh.org, GB64, MyAbandonware) for the game's credits.
