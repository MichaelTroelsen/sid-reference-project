# Stephen Biggs (player routine)

```json
{
  "id": "stephen-biggs",
  "name": "Stephen Biggs (player routine)",
  "aliases": ["Stephen_Biggs"],
  "authors": ["Stephen C. Biggs"],
  "released": "1983-1984 (Synapse Software era)",
  "status": "verified",
  "platform": "American composer Stephen C. Biggs's own playroutine, used across Synapse Software titles including Blue Max (1983) and — NOT the famous 1986 Firebird game, see quirks — a different, unrelated 1984 Synapse shooter also titled 'Sentinel'. Player-ID-fingerprinted across 9 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Blue Max: load/init $759c, play $7620 (PSID). Sentinel (1984 Synapse title): load/init $1c70, play $2090 (PSID). Both disassembled + reassembled to 100.0000% byte-exact and register-write-exact over 300 traced frames — see knowledge/players/reconstructions/stephen-biggs.md for the full byte-level patch table.", "zero_page": "$fd/$fe used as a scratch indirect pointer (song-data-stream read). No other ZP usage observed.", "layout": "Per-voice workspace block (23 bytes: gate/busy flag, control byte, 16-bit song-data pointer, 16-bit oscillator-frequency cache, per voice, plus one shared frame-countdown byte) — placed at $9000-$9016 in Blue Max (fixed absolute addresses OUTSIDE the loaded SID payload, in the host game's own free RAM) and at $1ec7-$1edf in Sentinel (inside the loaded payload). The play routine flushes the frequency-cache half of this block to the SID's oscillator registers unconditionally every frame, regardless of whether a note actually triggered that frame." },
  "entry": { "init": "Blue Max $759c; Sentinel $1c70. Both directly PSID-header-called (not IRQ-installed) for these two files.", "play": "Blue Max $7620; Sentinel $2090. Both directly PSID-header-called for these two files — NOT the RSID 'Invention' files, which declare play=$0000 (IRQ-driven, see Verification for the blocker)." },
  "speed": "Once per real frame (standard 1x call rate observed in both traced files; no per-frame multi-call or skip pattern seen in 300 frames)." ,
  "data_format": { "order_list": "TODO — no note/pattern-stream format documented; only the workspace (pointer/cache) layer was reverse-engineered, not the song-data byte encoding it points into.", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in either traced file)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NATIONALITY CORRECTION: he is AMERICAN, not British — HVSC Musicians.txt lists him plainly as 'Biggs, Stephen C. - USA', and CSDb (scener id=14020) independently confirms country United States.",
    "MAJOR GAME-IDENTITY CORRECTION — the traced 'Sentinel.sid' is almost certainly NOT the legendary 1986 Firebird puzzle game 'The Sentinel' (designed by Geoffrey Crammond): Lemon64's own credits box for that famous game lists the musician as Geoffrey J. Crammond HIMSELF, not Biggs. There is a SEPARATE, unrelated 1984 Synapse Software title also simply called 'Sentinel' (no 'The') — a 3D space shoot-'em-up created by Bryan Brandenburg, published by Synapse (US) / US Gold (Europe) — and Lemon64's credits box for THAT game lists Musician: Stephen C. Biggs, with box art by Tim Boxell (the same artist as Blue Max, consistent with Biggs working the Synapse stable). CSDb's music index independently lists both as separate entries. This is a classic same-title cross-game collision — the sparse trace should NOT be read as reflecting the famous game's celebrated minimal/eerie sound design, since it's very likely a different game entirely.",
    "BLUE MAX (1983, Synapse Software) CONFIRMED: Lemon64 and CSDb both credit Stephen C. Biggs as musician (code by Bob Polin originally, C64 conversion by Peter A. Adams, box art by Tim Boxell — the same artist across multiple Biggs-scored Synapse titles).",
    "OTHER CONFIRMED CREDITS (CSDb): 'Slamball' (1984, Synapse). A separate work, 'Inventions' (undated music collection), credits him for BOTH Code and Music — partial, not strongly corroborated evidence that he was a coder as well as musician on at least that piece. Blue Max 2001 (the 1984 sequel) is credited to a DIFFERENT composer, Ihor Wolosenko — not Biggs, despite the similar title/franchise.",
    "The genuinely sparse register-write traces (7 writes/50 frames on 'Sentinel', 13/50 on Blue Max) may simply reflect a generically minimal Synapse-house playroutine style — NOT evidence of the famous Firebird Sentinel's celebrated atmospheric design, since (per the correction above) that's likely not the game being traced.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB — he appears to be a US-based Synapse Software in-house musician, a different scene/studio circle entirely from this KB's mostly UK Ocean/Gremlin/Mastertronic composers (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "VERIFIED (2026-07-24): disassembled + reassembled Blue Max and Sentinel, both 100.0000% byte-exact and register-write-exact over 300 traced frames. Both needed a workspace-drift fix (SIDdecompiler's own internal trace bakes in a post-execution snapshot of a small per-voice frequency-cache block instead of the true cold value) — see knowledge/players/reconstructions/stephen-biggs.md for the exact addresses and byte values. Blue Max additionally needed gotcha-40-style relocation to the `-v2` map's own Start address ($4085, not the PSID load address $759c) because two isolated workspace addresses sit outside the loaded payload in the host game's own RAM.",
    "GENUINE UNRESOLVED GAP: the RSID 'Invention' files (Two/Three Part Invention series, 7 of the 9 tagged files) declare play=$0000 (IRQ-driven — the routine installs its own IRQ vector at init rather than being called via a fixed play address) and make SIDdecompiler.exe hang indefinitely (confirmed: 0-byte log output, process force-killed after no progress) — the same signature as this agent's SidBang64 hang precedent, not a simple '0 trace nodes' case. No override entry address is known for this player's IRQ dispatcher. This subset is NOT covered by the verified byte/trace match above — do not assume it behaves identically without independently confirming it."
  ],
  "sources": [
    "HVSC Musicians.txt ('Biggs, Stephen C. - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=14020, country USA, function Musician): https://csdb.dk/scener/?id=14020",
    "Lemon64 — Blue Max (1983, Synapse, Biggs musician credit): https://www.lemon64.com/game/blue-max",
    "Lemon64 — Sentinel (1984, Synapse Software — Bryan Brandenburg's shooter, Biggs musician credit — NOT the Firebird game): https://www.lemon64.com/game/sentinel-synapse-software",
    "Lemon64 — The Sentinel (1986, Firebird — Geoffrey Crammond's OWN musician credit, confirming the cross-game collision): https://www.lemon64.com/game/sentinel-firebird",
    "Local dataset: 9 files tagged Stephen_Biggs, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Stephen_Biggs` tag is American composer Stephen C. Biggs's own
playroutine, used across Synapse Software titles including Blue Max
(1983). Player-ID-fingerprinted across 9 files, all his own — including a
title, 'Sentinel', that research revealed to be a DIFFERENT, unrelated
1984 Synapse game rather than the famous 1986 Firebird classic, a
name-collision worth flagging clearly. Two of the 9 files (both PSID game
rips, Blue Max and Sentinel) are now disassembled, reassembled, and
trace-verified byte-exact — see Verification below; the remaining 7 (RSID
"Invention" pieces) use a structurally different IRQ-driven convention that
remains a genuine, documented blocker.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **corrected nationality**
(American, not British); and a **major game-identity correction** — the
traced 'Sentinel.sid' is very likely NOT the celebrated Firebird game
(whose own credited musician was designer Geoffrey Crammond himself), but
a separate, unrelated 1984 Synapse shooter of the same name.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly performed this pass with `SIDdecompiler.exe` + `64tass.exe` —
see `knowledge/players/reconstructions/stephen-biggs.md` for the full
byte-level patch table on both verified files.

## Verification

**`status: verified` (2026-07-24).** Disassembled, reassembled, and
trace-diffed two independent real HVSC `Stephen_Biggs`-tagged files:

- **Blue Max** (`MUSICIANS/B/Biggs_Stephen/Blue_Max.sid`, PSID, load/init
  `$759c`, play `$7620`, 1478-byte payload): reassembly was
  **100.0000% byte-exact (0/1478 diffs)** against the real payload with no
  disassembly correction needed — but required relocating to the
  `-v2` memory map's own reported Start address (`$4085`, per the
  project's gotcha-40 pattern) rather than the PSID header's load address,
  since two small workspace addresses the player references sit in the
  host game's own free RAM, outside the loaded SID payload. Trace-diff
  (`sidm2-sid-trace.exe`, 300 frames) initially showed a real divergence —
  voice 2/3 oscillator frequencies written 24 frames too early, using
  values `SIDdecompiler`'s own internal trace had baked in from a
  post-execution snapshot of 6 external workspace bytes ($9010-$9015).
  Patched to `$00` (standard cold-RAM value; these addresses have no
  "pristine original byte" since they're outside the ripped payload) →
  **trace-exact (register-write-identical) over 300 frames**, confirmed by
  plain `diff` of both write logs (0 differences).
- **Sentinel** (`MUSICIANS/B/Biggs_Stephen/Sentinel.sid`, PSID, load/init
  `$1c70`, play `$2090`, 1078-byte payload — the 1984 Synapse title, not
  the Firebird game): direct disassembly reassembled to 98.4230%
  byte-exact (17/1078 diffs), all confined to the same class of per-voice
  workspace block, this time INSIDE the loaded payload. Recovered the true
  cold-start values directly from the pristine SID file bytes at those 17
  addresses (no guessing) and patched the `.asm` source directly →
  **100.0000% byte-exact (0/1078 diffs) from source**, and
  **trace-exact over 300 frames**.

Both files share the identical player routine and workspace layout, and
both hit the same underlying defect class (SIDdecompiler's captured
snapshot of a small per-voice frequency cache, flushed to the SID chip
unconditionally every frame, isn't the true cold value) — a genuine,
confirmed instance of this project's "drifted working-storage table"
pattern (see the `sid-player-verify` agent's `lessons_learned` 16/17/41),
closed cleanly on both files.

**Genuine unresolved gap**: the 7 remaining tagged files (the RSID "Two/Three
Part Invention" series) declare `play=$0000` (IRQ-driven — the player
installs its own IRQ vector at init rather than exposing a directly-callable
play routine) and make `SIDdecompiler.exe` hang indefinitely with zero
output — confirmed via a 0-byte log file and a force-kill after no progress.
This is a structurally different export convention from the two PSID game
rips verified above, and is NOT covered by this verification — no override
entry address for this player's IRQ dispatcher is known. Memory map/data
format/effects beyond the workspace layer documented above remain `TODO` —
no note/pattern-stream encoding was reverse-engineered, only the
pointer/frequency-cache workspace that governs playback timing.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, and Lemon64 (3 pages,
including the critical disambiguation).
