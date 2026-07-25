# Andy Brown (player routine)

```json
{
  "id": "andy-brown",
  "name": "Andy Brown (player routine)",
  "aliases": ["Andy_Brown"],
  "authors": ["Andy Brown"],
  "released": "1988 (UK budget/full-price releases)",
  "status": "verified",
  "platform": "English musician Andy Brown's own playroutine — a confirmed composer-only credit across 3 confirmed 1988 UK commercial games, always crediting a separate coder. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "$0914-$10FD (2026 bytes). Load, init, and play are all in this range — no separate data segment.", "zero_page": "None — all player state is in absolute-addressed workspace $0974-$0980 (13 bytes). No ZP addressing used.", "layout": "Code at $914-$A39, data tables at $A3A-$10FD. Two independent sequencers share the workspace." },
  "entry": { "init": "$0914. Clears SID, configures 3 voices + filter, zeros workspace.", "play": "$0981. Called per-frame (IRQ-driven). Advances filter sweep, runs two sequencers for filter modulation and voice-1 pitch." },
  "speed": "~50 Hz (PAL, one play call per frame). No tempo subdivision — each call = one frame tick.",
  "data_format": { "order_list": "Hardcoded fixed sequence — no configurable order list. Song structure is baked into the data tables ($0EEB filter table, $0F03 duration table, $0F1B/$0F24 loop-point tables, $0ADF note-index table, $0F2D 10-entry frequency table).", "patterns": "Filter track: 24-step sequence. Each step = 1 byte filter mode/volume ($0EEB) + 1 byte duration ($0F03, where 0 = 256 frames). Loop points defined by 9-entry key/value table pairs at $0F1B/$0F24 — when the sequence index matches a key, it resets to the corresponding value.", "instruments": "No instrument system. Voice-1 pitch: note index from $0ADF table, scaled via ROL into index into 10-entry 16-bit frequency table at $0F2D. Voice-1 waveform alternates gate+saw ($15) or gate+saw ($41) depending on filter-jump flag ($097D). Voices 2 & 3 are static drones set in init and never updated during play.", "wavetable": "None — waveforms are hardcoded constants in the playroutine, not table-driven.", "pulsetable": "None — pulse widths are set once in init ($0C00 for voice 1, $0364 for voice 2, $0364 for voice 3) and never modulated.", "filtertable": "Filter mode/volume table at $0EEB (24 entries, lowpass with varying volume). Per-frame filter sweep: +$08 added to $D416 every frame (continuous rising sawtooth). Occasional $F6 jump on $D417 triggered by filter-jump flag $097D (sequence position key at $0C97 matching $0975). Resonance fixed at $07 (set once in init)." },
  "effects": { "encoding": "None — no effect command system. The only modulation is the per-frame filter sweep (+$08/ADC) and occasional $F6 filter-frequency-high jump, both hardcoded in the play routine with no configurable parameters.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC ENTRY IS BARE: 'Brown, Andy - UNITED KINGDOM,' no group, no realname parenthetical.",
    "THREE CONFIRMED 1988 GAME CREDITS, all crediting Andy Brown as musician with a SEPARATE named coder in every case: Little Green Man (Bug-Byte — developer Peter Tuleby, the traced file), Power Pyramids (Quicksilva/Grandslam — coder 'Eclipse'), and Rik the Roadie (Alternative Software — coder 'Eclipse,' graphics by 'Rik'). Consistently a musician-only credit, never a coder credit, across all three.",
    "'RIK THE ROADIE' — A SPECULATIVE RIK MAYALL CONNECTION WAS INVESTIGATED AND EXPLICITLY RULED OUT: the game's own credits list a graphic artist named 'Rik' (not a licensed celebrity tie-in), and its plot concerns a roadie named Rik for a fictional band 'Alternative Rock' — no evidence ties it to comedian Rik Mayall. A red herring, not a finding.",
    "THE CODER 'ECLIPSE' CREDITED ON TWO OF THE THREE GAMES DOES NOT MATCH the CSDb scener 'Eclipse' (id=2248, a US-based demoscener active 1988-91, Outline/Impulse/Havok/Lords) — almost certainly a different, unrelated 'Eclipse,' likely a common commercial UK coding freelancer/studio name of the era. Flagged as a checked-and-ruled-out false lead, not a real connection.",
    "A FOURTH, UNCARDED GAME CREDIT WAS FOUND: 'Starburst' (Digital Dynamite, 1990, '4 tunes'), a troubled, barely-distributed release per GamesThatWerent — plausibly explaining why its music never entered HVSC (UNCONFIRMED whether those tunes survive anywhere).",
    "A CSDb SCENER PROFILE EXISTS (id=15132, handle 'Andy Brown,' role Musician, no country/realname/group listed) whose release list is entirely 1988 demoscene crack-intros/music-disk credits with titles like 'SPL Bust' and 'Beyond Bust' — strongly suggesting these are CRACKER-GROUP INTROS reusing/ripping his commercial game tunes, not new scene compositions. WHETHER THIS IS EVEN THE SAME INDIVIDUAL AS THE GAME COMPOSER IS EXPLICITLY UNCONFIRMED — no realname or biographical link ties the two profiles together, it's inferred from name+era+SID-reuse pattern only, not established fact.",
    "A COINCIDENTAL NAME SIMILARITY TO THE ALREADY-CARDED GROUP TAG 'Zetrex_YP' WAS CHECKED AND RULED OUT ('Zetrex 2005' appears as one of the crack-group credits on his CSDb scener profile) — nothing indicates an actual relationship, flagged as coincidence only.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Brown, Andy - UNITED KINGDOM'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Little Green Man (traced file, full credits): https://www.lemon64.com/games/details.php?ID=3240",
    "Lemon64 — Power Pyramids: https://www.lemon64.com/games/details.php?ID=4139",
    "Lemon64 — Rik the Roadie: https://www.lemon64.com/game/rik-the-roadie",
    "GamesThatWerent — Starburst: https://www.gamesthatwerent.com/gtw64/starburst-2/",
    "CSDb scener id=15132 (Andy Brown, crack-group music credits): https://csdb.dk/scener/?id=15132",
    "CSDb scener id=2248 ('Eclipse', explicitly a DIFFERENT, unrelated US demoscener, not the game's coder): https://csdb.dk/scener/?id=2248",
    "Local dataset: 3 files tagged Andy_Brown, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Andy_Brown` tag is English musician Andy Brown's own playroutine —
a consistent musician-only credit across 3 confirmed 1988 UK commercial
games, always with a separate named coder. Player-ID-fingerprinted
across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is a **ruled-out Rik
Mayall speculation** on the 'Rik the Roadie' title, investigated and
explicitly dismissed. Also notable: an **explicitly unconfirmed**
identity link between his commercial-game credits and a same-named CSDb
scener profile of crack-group music reuse — reported as plausible but
unproven rather than assumed.

## Disassembly notes

Disassembled 2026-07-25 as part of verification. Key findings:
- **Two-track hardcoded sequencer** with no configurable order list — the entire
  song structure (24 filter steps, note pitches, loop points) is baked into the
  binary tables. Not a general-purpose player that could be reused for another
  tune — this is more of a "data-driven playback routine" than a tracker-like
  player.
- **State variables** at `$0974-$0980` (absolute addressed, not ZP):
  `$0974`/`$0975` = voice-1 note index + track-2 position; `$0976` = tempo
  reload; `$0978` = filter sequence index; `$0979` = voice control selector;
  `$097C` = current step duration counter; `$097D` = filter-jump flag + track-2
  position; `$0980` = pattern loop index.
- **No effects system** — the per-frame `ADC #$08` filter sweep is hardcoded,
  and the `$F6` jump on `$D417` is triggered by a lookup-table comparison, not
  a command byte. This might be the simplest playroutine in the entire KB.
- The init routine clears `$D400-$D418` (25 bytes, `LDX #$19`/`STA $D3FF,X`
  loop), then hardcodes all voice parameters. Voices 2 and 3 are never touched
  again after init — they're static drones.

## Verification

**Verified (2026-07-25) — `status: verified` via disassemble + reassemble + trace-diff.**

Disassembled the real HVSC `Little_Green_Man.sid` (Andy_Brown tag, downloaded from
`hvsc.csdb.dk`). Raw-byte reassembly with 64tass produced a byte-identical `.prg`.
Traced both the original `.sid` and the reassembled `.prg` through `trace_sid` /
`trace_prg` (init `$0914`, play `$0981`, 50 frames) — **exact match: 59/59
register writes identical, including cycle timing.**

The player is a hardcoded two-track sequencer:
- **Filter track**: 24-step sequence with loop points, drives `$D418` (filter
  mode + volume) per step. A per-frame filter sweep (`ADC #$08` on `$D416`)
  runs continuously, with occasional `$F6` jump on `$D417`.
- **Voice-1 pitch track**: note index from `$0ADF` table, scaled into a
  10-entry 16-bit frequency table at `$0F2D`. Waveform alternates `$15`/`$41`
  (gate + sawtooth).
- **Voices 2 & 3**: static drones set in init, never updated.
- **No ZP usage** — all state in absolute-addressed workspace `$0974-$0980`.
- **No effects system** — the filter sweep and occasional jump are hardcoded,
  not parameterized.

Original 2026-07-14 verification entry kept below for history.

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Andy_Brown` `.sid` (Little Green Man): load `$914`,
init `$914`, play `$981`, **59 register writes / 50 frames** (51 filter
writes — heavily filter-dominant). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages),
GamesThatWerent, and CSDb (2 entries).
