# Russell Lieblich (own sound driver)

```json
{
  "id": "russell-lieblich-driver",
  "name": "Russell Lieblich (own sound driver)",
  "aliases": ["Russell_Lieblich"],
  "authors": ["Russell Lieblich"],
  "released": "1985-1987 (Activision / Gamestar)",
  "status": "verified",
  "platform": "Russell Lieblich's own C64 sound driver — DISTINCT from the shared 'Music_Studio/Lieblich' tag (already carded as [[music-studio]]), used across ~10 different Activision and Activision's Gamestar sports sub-label titles he scored, mostly solo, sometimes also designing/programming the game itself (Web Dimension). Directly confirmed as HIS OWN driver by a first-party-sourced quote for The Transformers (1986): he 'rearrang[ed] the Transformers theme by ear, and implemented [it] into his own sound driver.' Player-ID-fingerprinted across 11 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file (song data lands at the game's own address): Star_Rank $c000, Gee_Bee $9de0, Top_Fuel/GFL $4000, Transformers $0a90. init/play sit inside each file's loaded block; -v2 map Start = PSID load address on all 5 verified files (no relocation shift).", "zero_page": "TODO (not yet fully mapped from disassembly).", "layout": "Cold-boot working-state block sits immediately after the load address (e.g. Star_Rank $c000-$c0c7, GFL $4000-$40c3, Transformers $139d-$14d1); play routine uses self-modifying-code operands throughout." },
  "entry": { "init": "Per-file (init routine near start of loaded block): Star_Rank $c87c, Gee_Bee $a440, Top_Fuel $40d0, GFL $40eb, Transformers $1398.", "play": "Per-file, IRQ-called: Star_Rank $c885, Gee_Bee $a443, Top_Fuel $40d3, GFL $4106, Transformers $139c." },
  "speed": "1x (single call per frame) on the 5 verified PSID files — register-write-exact at one play call/frame.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — filter_res_control/filter_mode_volume/filter_freq_hi written at init on Star_Rank; full table structure not yet reverse-engineered)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED GAME LIST for this specific tag (distinct from the Music_Studio/Lieblich tag covering ~17 other files in his same HVSC folder): Aliens (Dec 1986, Activision — the traced file), Gee Bee Air Rally (1987, Activision/Gamestar), GFL Championship Football (1986, Activision/Gamestar), Howard the Duck (1986, Activision), Little Computer People (Sept 1985, Activision — music only, designed by David Crane & Rich Gold), Master of the Lamps + PAL variant (1985, Activision — concept/music by Lieblich, programmed by Peter Kaminski), Star Rank Boxing II (1987, Activision/Gamestar), Top Fuel Eliminator (1987, Activision/Gamestar), The Transformers (1986, Activision, code by David Crane), Web Dimension (1985, Activision — designed, programmed, AND scored by Lieblich himself, his most self-contained credit). Several titles carry Activision's Gamestar sports sub-label, suggesting driver reuse specifically across that product line.",
    "FIRST-PARTY-SOURCED CONFIRMATION OF SELF-AUTHORSHIP: VGMPF states directly, for The Transformers, that Lieblich 'rearrang[ed] the Transformers theme by ear, and implemented [it] into his own sound driver' — the clearest available source distinguishing this as genuinely his own code, not a borrowed engine.",
    "A DRIVER REWRITE BETWEEN TITLES IS HINTED AT but not attributed: VGMPF's Aliens page notes Lieblich 'had scored and co-designed Master of the Lamps over a year earlier, during which somebody remade his music driver' — implying at least one iteration/rewrite of this driver by an unnamed third party between 1985 (Master of the Lamps) and 1986 (Aliens). Who did this rewrite is UNKNOWN — flagged, not guessed at.",
    "TWO EXPLICITLY EXCLUDED FILES, for clarity: Lieblich also scored Chop 'n' Drop and Fast Tracks, credited jointly with Rob Hubbard (already carded here as [[rob-hubbard]]) — but those carry the Rob_Hubbard tag in this project's data, NOT this one, and are not covered by this card.",
    "ONE CLAIM EXPLICITLY DISCARDED AS LIKELY FALSE: a web-search summary claimed Lieblich used a sound driver 'by John Miles' for Master of the Lamps — this could NOT be independently verified (the cited page 404s, no corroborating hit found), and John Miles is a well-known DOS-era (not C64-era) audio driver author (Miles Sound System/AIL) — very plausibly a search-summarizer conflation across unrelated eras. NOT included as fact.",
    "CSDb release dates on several of these SID rips (1991-92) are RIP/re-release dates, not the games' actual release years (real years used above) — a data-reading caveat, not a real chronology issue.",
    "Biography (already established on the sibling [[music-studio]] card, re-confirmed this pass): b. 2 March 1953, d. 26 January 2005; Master's in Music, UC San Diego; also wrote his own sound driver for the Intellivision's CP1600 in assembly, a direct precedent for doing the same on the C64.",
    "No known relationship found to any other composer/tool already in this KB beyond Ed Bogas (already covered via [[music-studio]]) — checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found."
  ],
  "sources": [
    "VGMPF — Aliens (Activision, C64) — driver-rewrite mention: https://www.vgmpf.com/Wiki/index.php?title=Aliens:_Activision_(C64)",
    "VGMPF — The Transformers: The Computer Game (C64) — 'his own sound driver' quote: https://www.vgmpf.com/Wiki/index.php?title=The_Transformers:_The_Computer_Game_(C64)",
    "Lemon64 — Master of the Lamps: https://www.lemon64.com/game/master-of-the-lamps",
    "Lemon64 — Web Dimension: https://www.lemon64.com/game/web-dimension",
    "Wikipedia — Gee Bee Air Rally: https://en.wikipedia.org/wiki/Gee_Bee_Air_Rally",
    "Wikipedia — Little Computer People: https://en.wikipedia.org/wiki/Little_Computer_People",
    "MobyGames — Top Fuel Eliminator: https://www.mobygames.com/game/49643/top-fuel-eliminator/",
    "MobyGames — Howard the Duck credits: https://www.mobygames.com/game/9206/howard-the-duck/credits/c64/",
    "CSDb scener — Russell Lieblich (id=10806): https://csdb.dk/scener/?id=10806",
    "Existing KB card: knowledge/players/music-studio.md (the shared editor tag, same composer)",
    "Local dataset: 11 files tagged Russell_Lieblich, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Russell_Lieblich` tag is composer-programmer Russell Lieblich's own
sound driver — distinct from the shared Music Studio editor tag (also
carded, [[music-studio]]) — used across ~10 Activision and Gamestar
titles he scored through the mid-1980s. A first-party-sourced quote
confirms he personally implemented at least one arrangement into "his own
sound driver." Player-ID-fingerprinted across 11 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **confirmed self-
authorship quote** for The Transformers; a **hinted-at but unattributed
driver rewrite** between Master of the Lamps and Aliens; and **two files
explicitly excluded** (his Rob Hubbard co-credits, which carry a different
tag).

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Reconstructed
in-house via SIDdecompiler → 64tass → `sidm2-sid-trace.exe` on 5 real HVSC
files; byte-level patch detail in
`knowledge/players/reconstructions/russell-lieblich-driver.md`. The internal
data format (order list / patterns / instruments) is still `TODO` — the
verification below establishes the reconstruction is register-write-exact,
not a full format decode.

## Verification

**Register-write-exact reconstruction on 5 independent HVSC files
(2026-07-24) — `status: verified`.**

Disassembled (`SIDdecompiler v0.8`, relocated to each file's own PSID load
address, which the `-v2` map's `Start:` confirmed on all 5), reassembled
(`64tass`), and trace-diffed (`sidm2-sid-trace.exe`, 100 frames) against the
original for:

| File | init/play | byte-match (as-emitted) | trace after patch-to-pristine |
|------|-----------|-------------------------|-------------------------------|
| Gee_Bee_Air_Rally | `$a440`/`$a443` | 98.25% | **exact, all 4 subtunes** |
| Top_Fuel_Eliminator | `$40d0`/`$40d3` | 96.96% | **exact** |
| Transformers | `$1398`/`$139c` | 96.84% | **exact** |
| GFL_Championship_Football | `$40eb`/`$4106` | 91.95% | **exact** |
| Star_Rank_Boxing_II | `$c87c`/`$c885` | 90.36% | **exact** |

The byte-diff (90.4–98.3%) is entirely **dead workspace + self-modifying-code
operands** captured post-execution by the disassembler — patching the full
diff set back to the pristine cold-start SID-payload values makes every file
register-write-identical over 100 frames (`trace-diff = 0`). Proven on
Star_Rank by a per-byte isolation test: all 212 diverging bytes are
individually dead. This is the same disassembler artefact documented on
`digitalizer` / `cheesecutter` / `dmc`, meeting the project's
"explicitly-explained-as-dead-workspace + register-write-exact" bar for
`verified`.

**Known blocker (does not affect the result):** `Aliens.sid` — the card's
original 2026-07-14 reference file — reproducibly crashes SIDdecompiler v0.8
(exit 127) during output generation, after its `-v2` memory-map prints in
full. The 5 verified files are independent of it. Three RSID files
(`Little_Computer_People`, both `Master_of_the_Lamps`) have `play=$0000`
(IRQ-installed) and were not attempted; `Howard_the_Duck` and `Web_Dimension`
(the latter a gotcha-40 `Start`≠load case) also remain untraced. Next lead
for full family closure: apply the entry-13 `-P` override to the RSID trio.

## Sources

See the `sources` array — VGMPF (2 pages), Lemon64 (2 pages), Wikipedia (2
pages), MobyGames (2 pages), CSDb, and the sibling music-studio card.
