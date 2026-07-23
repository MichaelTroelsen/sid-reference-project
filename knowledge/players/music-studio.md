# The Music Studio (Bogas / Lieblich)

```json
{
  "id": "music-studio",
  "name": "The Music Studio (Bogas / Lieblich)",
  "aliases": ["Music_Studio/Lieblich"],
  "authors": ["Ed Bogas", "Russell Lieblich"],
  "released": "1985 (Activision)",
  "status": "verified",
  "platform": "Native C64 music-notation editor, published by Activision — one of the notable cross-platform music editors of the era, later ported to Atari 8-bit, Atari ST (1986, first version with real MIDI support), Amiga, and Apple IIGS. Player-ID-fingerprinted across 34 files: 19 by film/TV composer Ed Bogas (Activision's bundled demo compositions), 15 by fellow Activision composer-programmer Russell Lieblich, who is documented writing custom sound drivers elsewhere in Activision's catalog — the tag's own naming ('/Lieblich') plus his programmer credentials suggest he likely wrote the embedded playback engine, while Bogas contributed compositions (see quirks — this specific division of labor is inference, not directly confirmed by any source found).",
  "csdb_release": null,

  "memory": { "load_address": "All 34 tagged files share the identical PSID load/init/play addresses ($0fad/$0fad/$1013, confirmed across 5 sampled files spanning both composers and file sizes 2294-10204 bytes) — one shared player build, only the song data differs per file. IMPORTANT for reconstruction: SIDdecompiler's own -v2 memory-touch map reports the real emulated Start address as $02a6, well below the $0fad load address — the player reads/writes a small amount of fixed low-page workspace outside the loaded file itself. Relocating to the PSID load address ($0fad, decimal 4013) produces a wrong reassembly (init/play land at $1cb4/$1d1a instead); relocating to the -v2 Start address ($02a6, decimal 678) is required and produces a correct, trace-exact build. See gotcha 40/31/38 precedent in the verify-agent's lessons_learned.", "zero_page": "Confirmed via disassembly: $9b, $9c, $a6, $a7, $a9, $aa, $de, $fb, $fc, $fd, $fe (11 bytes, non-contiguous — indexing/pointer workspace for the play routine).", "layout": "Player code + ZP workspace at $0fad upward; song/pattern data occupies the remainder of the file up to its own end (varies per file, e.g. $2234 for Aisle_Dance, $3788 for Bolero). Exact code/data boundary and data-table layout not walked (TODO — out of scope for this verification pass)." },
  "entry": { "init": "$0fad, confirmed via disassembly + trace-diff on 4 files (PSID header alone checked on a 5th).", "play": "$1013, confirmed via disassembly + trace-diff on 4 files (jmp $10c9 — a dispatcher, not the routine body directly)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 11 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ED BOGAS is a notable American film/TV composer: succeeded Vince Guaraldi on Peanuts specials from 1977 ('It's Your First Kiss, Charlie Brown') through 1989, was the primary composer for all 121 half-hours of Garfield and Friends, and scored Ralph Bakshi's Fritz the Cat and Heavy Traffic. Wikipedia explicitly credits him as 'Composer of software's demo songs' for The Music Studio (Amiga/Apple IIGS editions listed in his discography). Also composed C64 game music separately: Hardball!, Jukebox, Beanstalk, Murder on the Mississippi, Park Patrol, and many others across a long career (Road Riot 4WD, Wordtris, even Action 52/Cheetahmen II).",
    "RUSSELL LIEBLICH (2 March 1953 - 26 January 2005, heart attack, Coram NY) — Master's in Music from UC San Diego, one of Activision's lead C64 composers in the 1980s AND a genuine programmer: VGMPF documents him writing CUSTOM SOUND DRIVERS for multiple Activision titles, a distinct credential from pure composing. Did the C64 music translation of LucasArts' Ballblazer; composed for Little Computer People, Aliens, MechWarrior, Master of the Lamps, Web Dimension (which he also designed), Stealth ATF (NES); 30+ titles across Intellivision, C64, Amiga, NES/SNES/Genesis.",
    "NO SOURCE FOUND explicitly states 'Bogas and Lieblich co-created The Music Studio' as a stated fact — one search-engine-aggregated author list (naming several unrelated people) was checked and DISCARDED as likely cross-contaminated from an unrelated multi-game roster page, not a real credit line. MobyGames' credits page (the best likely source) was inaccessible (bot-blocked) in this research pass. The Bogas/Lieblich authorship split used on this card rests on: (1) Bogas's own Wikipedia page explicitly crediting him with the software's bundled demo songs, and (2) Lieblich's documented sound-driver-programming role elsewhere in Activision's catalog, combined with the tag itself being named '/Lieblich' — this is a REASONABLE INFERENCE about division of labor, not a directly sourced fact. Flagged accordingly.",
    "A SEPARATE, uncarded tag 'Russell_Lieblich' (11 files) also exists in this project's data — plausibly one of Lieblich's OTHER custom in-game sound drivers (documented across several different Activision titles), distinct from this shared editor tag. Which specific game it's from is not confirmed.",
    "Ported widely beyond the C64: Atari 8-bit, Atari ST (1986 — the first version with real MIDI support via the ST's built-in ports), Amiga, and Apple IIGS — a notably long-lived, cross-platform product for its era.",
    "Both HVSC Musicians.txt entries are minimal ('Bogas, Ed - USA', 'Lieblich, Russell - USA', no group/alias/comment fields). No known relationship found to any other composer/tool already in this KB — different scene entirely (US commercial/Activision vs. this KB's mostly UK/European composer-driver cards; checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt (both entries): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Wikipedia — Ed Bogas (Peanuts/Garfield career, Music Studio demo-song credit): https://en.wikipedia.org/wiki/Ed_Bogas",
    "Wikipedia — Russell Lieblich (biography, death, career, custom driver work): https://en.wikipedia.org/wiki/Russell_Lieblich",
    "VGMPF — Ed Bogas (full gameography): https://vgmpf.com/Wiki/index.php/Ed_Bogas",
    "VGMPF — Russell Lieblich (full gameography, sound-driver credits): https://vgmpf.com/Wiki/index.php/Russell_Lieblich",
    "Atari Magazines — The Music Studio (Atari ST) review, MIDI support: https://www.atarimagazines.com/compute/issue78/028_1_Reviews_The_Music_Studio.php",
    "CSDb release 90711 (C64 crack of The Music Studio, no credits filled in): https://csdb.dk/release/?id=90711",
    "gb64.com — The Music Studio description: https://gb64.com/oldsite/gameofweek/melodymakers/util_musicstudio.htm",
    "Local dataset: 34 files tagged Music_Studio/Lieblich, 2 composers (see knowledge/COVERAGE.md)",
    "Own disassembly/reassembly/trace-diff (2026-07-23): SIDdecompiler.exe + 64tass.exe against 4 real HVSC files (Aisle_Dance, Bolero, Dripper, Waltz — 2 by each credited composer) — see Verification section for full results."
  ]
}
```

## Overview

The `Music_Studio/Lieblich` tag is Activision's 1985 cross-platform C64
music-notation editor, "The Music Studio". Player-ID-fingerprinted across
34 files by its two credited people: film/TV composer Ed Bogas (bundled
demo songs) and programmer-composer Russell Lieblich, who separately wrote
custom sound drivers elsewhere in Activision's catalog — plausibly, though
not directly confirmed, the actual author of this tool's playback engine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **Ed Bogas's notable
separate career** (Peanuts, Garfield and Friends); **Russell Lieblich's
documented sound-driver-programming credentials**, the basis for an
inferred (not directly sourced) division of labor between the two; and a
**separate, uncarded 'Russell_Lieblich' tag** (11 files) plausibly
representing one of his other Activision drivers.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Disassembled
directly from real HVSC files via `SIDdecompiler.exe` for this pass (see
Verification below). The player's real emulated memory footprint starts at
`$02a6` (11 bytes of ZP workspace plus a small amount of fixed low-page
state), well below its own `$0fad` load address — relocating a
reassembly to the PSID header's load address alone produces a wrong build;
relocating to SIDdecompiler's own `-v2` reported Start address ($02a6,
`-a678`) is required. Zero page usage: `$9b, $9c, $a6, $a7, $a9, $aa, $de,
$fb, $fc, $fd, $fe`. Data-table format (order list/patterns/instruments)
and effect-command encoding were not walked in this pass — genuinely
`TODO`, not guessed.

## Verification

**Register-write-exact trace match — `status: verified` (2026-07-23).**

Disassembled and reassembled the shared player build (identical
load/init/play addresses `$0fad`/`$0fad`/`$1013` across all 34 tagged
files) via `SIDdecompiler.exe -a678 -z -d -c -v2` (decimal 678 = `$02a6`,
the tool's own reported memory-touch Start address, NOT the PSID load
address — see Disassembly notes) + `64tass.exe`. PSID headers were read
directly on 5 files (Aisle_Dance, Ballad, Waltz, Bolero, Train — all
identical load/init/play); disassembled, reassembled, byte-diffed and
trace-diffed on 4 of those, spanning both credited composers and file
sizes from 2294 to 10204 bytes:

| File | Composer | Byte-diff | Trace (register-writes, frames) |
|---|---|---|---|
| Aisle_Dance.sid | Ed Bogas | 98.5455% (69/4744 bytes) | Exact, 43 writes / 50 frames |
| Bolero.sid | Russell Lieblich | 99.6178% (39/10204 bytes) | Exact, 30 writes / 50 frames |
| Dripper.sid | Russell Lieblich | 98.2563% (40/2294 bytes) | Exact, 100 frames |
| Waltz.sid | Ed Bogas | 99.3831% (40/6484 bytes) | Exact, 100 frames |

All byte-diff divergence is 100% confined to a small, consistent, cross-file
set of address ranges (`$0fc2-$fc3`, `$100c-$100f`, `$171e-$1748`,
`$184d-$184e`, plus a handful of further-in addresses reached only in the
longer songs) — every diverging byte falls on a `-v2`-map write-touched
(`+`/`w`/`_`) address, i.e. self-modified working-storage/table state
SIDdecompiler's snapshot captured post-execution rather than pristine. This
was confirmed dead (not load-bearing), not just assumed, by an actual
register-write trace-diff on all 4 files above (identical write sequences,
byte-for-byte, over 50-100 frames each) — the project's stated bar for
`verified` (cf. `laxity-newplayer`'s ~99.9% precedent).

Trace method: `sidm2-siddump` MCP tools were not registered this session;
used `sidm2-sid-trace.exe` directly (per the verify-agent's lesson 8/22/46 —
build a proper `.prg` from the SID's own payload first, tracer does not
parse PSID headers and writes its CSV to stdout when invoked this way).

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia (2 pages), VGMPF
(2 pages), Atari Magazines, CSDb, and gb64.com.
