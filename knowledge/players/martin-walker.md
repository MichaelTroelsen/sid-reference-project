# Martin Walker (player routine)

```json
{
  "id": "martin-walker",
  "name": "Martin Walker (player routine)",
  "aliases": ["Martin_Walker"],
  "authors": ["Martin Walker"],
  "released": "1988-onward (developed for Thalamus's Armalyte)",
  "status": "verified",
  "platform": "Martin Walker's own hand-coded 6502 music player/editor, developed specifically while composing the Armalyte (1988, Thalamus) soundtrack, replacing his earlier use of Electrosound. Player-ID-fingerprinted across 17 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per game (player is relocated/reassembled per release, not loaded at a fixed address): Armalyte/Citadel both load+init $c000 (play $c059); SWIV loads $0800 but the player code itself doesn't start until $0ccf (init) — the leading ~1231 bytes of the loaded block are per-game song/pattern data preceding the code, confirmed by SIDdecompiler's own '-v2' memory-touch map (Start: $0ccf, well above the file's own load address).",
    "zero_page": "Two ZP pointer pairs used for (zp),Y indirect-indexed reads of pattern/instrument data — confirmed present in all 3 files checked, but at DIFFERENT addresses per file (picked from whatever was free in that game's own ZP map, not a fixed player convention): Armalyte uses $56/$57 and $58/$59; Citadel uses $fd/$fe (only one pair observed); SWIV uses $fe/$ff.",
    "layout": "Init routine begins with an ASL-shift-and-TAX voice/instrument-index scale (3x on Armalyte/Citadel i.e. x8, 4x on SWIV i.e. x16 — a per-game table-stride difference, not a version difference) then copies an 8-or-16-byte block from a fixed per-voice-setup table into working storage. A dense self-modified/working-storage block immediately follows the init routine (Armalyte $c4b2-$c554, Citadel $c4b2-$c554 — same relative offset) holding per-voice counters/table indices that SIDdecompiler's default trace window captures post-execution (drifted), not at their true cold-start value — see Verification below."
  },
  "entry": {
    "init": "Confirmed via trace + full disassembly: $c000 on Armalyte and Citadel (both share this address exactly — same build/relocation). SWIV's init is $0ccf (see load_address note — different per-game relocation, same routine).",
    "play": "Confirmed: $c059 on Armalyte/Citadel, called once per frame (raster IRQ, standard PSID convention — not independently confirmed via a live interrupt-capable emulator, only via the PSID header's own declared play vector and per-frame trace behavior)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (no filter writes observed in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Martin Walker was a GAME CODER FIRST, musician second — CONFIRMED via a Commodore Format interview: he coded six published games 1985-1989 (Rupert and the Toymaker's Party, Back to the Future, Chameleon, Hunter's Moon, Citadel) before deliberately switching career to freelance music/SFX composition in 1989. This background directly explains the confirmed self-authored player.",
    "OWN PLAYER, CONFIRMED ORIGIN: per the same interview, Thalamus commissioned him to write Armalyte's (1988) soundtrack, 'which afforded him the luxury of developing his own music player and editor' — i.e. this tag is a documented, first-party-sourced self-written routine, not inferred circumstantially.",
    "PRIOR TOOL, CORROBORATED BY LOCAL DATA: VGMPF states he 'developed his own driver after initially using Electrosound 64' — matching this composer's own HVSC folder exactly (1 file still tagged Electrosound alongside the 17 tagged Martin_Walker), independently confirming the timeline from two unrelated sources (VGMPF text vs. this project's own tag data).",
    "Games scored: Armalyte, Citadel, Hunter's Moon (which he also coded; music there by Matt Gray, a separate composer already carded in this KB as [[matt-gray]] — no further connection found beyond both working on the same title), Speedball 2, SWIV, Snare, Dragon Breed, Altered Beast, Atomic Robo-Kid.",
    "POST-C64 CAREER (well-corroborated by two independent secondary sources — CDM and a Lemon64 forum thread — though neither is a first-party statement from Walker himself confirming continuity): went on to write for Sound On Sound magazine, a well-known music-technology publication. Flagged as 'well-corroborated' rather than ironclad, per the sourcing caveat.",
    "Not in SIDId (checked directly via deepsid_dl/sidid.nfo — no Martin_Walker entry). No known relationship to any other composer/tool already in this KB beyond the shared Hunter's Moon credit with Matt Gray (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Original disassembly produced this session (see Verification) — memory map/entry points/ZP now confirmed; data format (pattern/instrument encoding) and effect commands remain TODO, not yet analyzed.",
    "SIDdecompiler's default trace window captures a POST-EXECUTION (drifted) snapshot of a dense self-modified working-storage block right after init ($c4b2-$c554 relative to load, on both Armalyte and Citadel) instead of the true cold-start byte values — 85 bytes wrong on Armalyte, 92 on Citadel, both fully correctable by patching each diverging `.byte` table entry in the disassembly back to the pristine value read directly from the original SID payload at that address. This is the same 'drifted-table' pattern documented for many other players in the KB's `sid-player-verify` agent lessons (not specific to this player) but is the first confirmed instance for Martin Walker's own routine.",
    "Citadel's disassembly is 1 byte short at the very end of the file ($ce2e, value $ff) — SIDdecompiler's own '-v2' map confirms this address was never touched (read/write/executed) across the whole emulated trace, so it's very likely genuine unreferenced trailing data (padding), not a disassembly defect. Does not affect trace-exactness."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Walker, Martin - UNITED KINGDOM (ENGLAND)')",
    "CSDb scener (id=3259, handle 'MW', 200+ credited releases 1985-2023): https://csdb.dk/scener/?id=3259",
    "Commodore Format archive interview (coding career, Armalyte player/editor origin story): https://commodoreformatarchive.com/the-martin-walker-interview/",
    "VGMPF (Electrosound-to-own-driver progression): https://www.vgmpf.com/Wiki/index.php/Martin%20Walker",
    "CDM (post-C64 career, Sound on Sound bylines): https://cdm.link/2018/03/virtuoso-commodore-64-composer-martin-walker-back/",
    "Lemon64 forum (Sound on Sound career corroboration): https://www.lemon64.com/forum/viewtopic.php?t=4933",
    "Local dataset: 17 files tagged Martin_Walker, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly this session: SIDdecompiler.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools) on real HVSC files Armalyte.sid and Citadel.sid, reassembled with 64tass.exe, register-write-traced with sidm2-sid-trace.exe — see Verification section for the full result."
  ]
}
```

## Overview

The `Martin_Walker` tag is British composer Martin Walker's own hand-coded
music player and editor, developed specifically while scoring Thalamus's
*Armalyte* (1988) after previously using Electrosound. Player-ID-
fingerprinted across 17 files, all his own — one of the more strongly
documented self-authored routines in this KB, with a direct first-party
interview quote confirming its origin. As of this session it also has an
independent, register-write-exact reconstruction from a real disassembly
(see Verification) — the origin story and the code itself are now both
confirmed, not just the former.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was a **game coder
before becoming a composer**; the **Armalyte commission is the documented
origin** of his own player/editor (not inferred, stated in interview); and
the **Electrosound-to-own-driver progression** is independently corroborated
by both a wiki source and this project's own tag data.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). An original
disassembly was produced this session (SIDdecompiler.exe, relocated to each
file's own PSID load address — `-a49152` decimal for `$c000` on
Armalyte/Citadel) — see Verification for the full byte-diff/trace-diff
result. Data format (pattern/instrument encoding, effect commands) was not
analyzed beyond what fell out of the register-write-exactness work and
remains `TODO` for a future pass.

## Verification

**Register-write-exact reconstruction (2026-07-24) — `status: verified`.**

Disassembled two real HVSC `Martin_Walker` files independently
(`SIDdecompiler.exe -a49152 -z -d -c -v2`, both load/init `$c000`, play
`$c059`), reassembled with `64tass.exe`, byte-diffed against the original
PSID payload, and register-write-traced original vs. reconstruction with
`sidm2-sid-trace.exe` (50 frames, every subtune).

- **Armalyte.sid** (4 subtunes): initial reassembly byte-diffed
  97.86% (85/3970 bytes differing, all concentrated in one contiguous
  self-modified working-storage block, `$c4b4-$c554`, immediately after
  `init`). Confirmed via `-v2`'s memory-touch map that every diverging
  byte falls in a `+`-marked (self-modified) region — SIDdecompiler's
  default trace window captured the POST-execution drifted value of a
  per-voice counter/index table, not its true cold-start value. A raw
  trace-diff at this stage showed a REAL divergence (48/242 register
  writes differed even ignoring cycle-count drift — osc1/osc2
  frequency and pulse-width values), i.e. this table is genuinely
  load-bearing, not dead workspace. Patched all 85 `.byte` table entries
  in the disassembly back to the pristine value read directly from the
  original SID payload at that address (all were plain literal `.byte`
  tokens, none pointer-table expressions) → reassembled to
  **100.0000% byte-exact** (0/3970 differing) and **register-write-exact
  across all 4 subtunes** (242/330/220/6 writes respectively, 0 diff
  each, 50 frames).
- **Citadel.sid** (4 subtunes, same init/play addresses as Armalyte —
  same build): same pattern, 92 diverging bytes in the same relative
  working-storage block (`$c4b2-$c554`) plus 2 bytes right at `play`'s
  own self-modified flag byte (`$c057-$c058`). All 92 were plain
  literal `.byte` tokens; patched to the pristine payload value →
  **100.0000% byte-exact on the 3630 bytes SIDdecompiler's own trace
  actually covered** (the very last file byte, `$ce2e` = `$ff`, sits one
  past the emulator's own reported `-v2` End address and was never
  captured — very likely genuine unreferenced trailing padding, not a
  disassembly defect; 3630/3631 = 99.97% of the whole file, but 100% of
  the covered/reachable range) and **register-write-exact across all 4
  subtunes** (388/381/386/336 writes respectively, 0 diff each, 50
  frames).
- Cross-checked a third file, **SWIV.sid**, for family consistency only
  (not fully verified — different load address `$0800`/init `$0ccf`,
  the player code is relocated further into the file behind per-game
  song data): its `init` routine is structurally identical to
  Armalyte/Citadel's (same shift-index-then-copy-setup-table pattern,
  just a per-game table-stride difference), corroborating that all 17
  `Martin_Walker`-tagged files share one player routine, individually
  reassembled per game.

This meets the project's register-write-match bar for `verified` (per
`laxity-newplayer`'s ~99.9% precedent) on two independent real files.
Scratchpad work (asm/prg/trace files, patch scripts) is in
`C:/Users/mit/AppData/Local/Temp/claude/C--Users-mit-claude-sid-reference-project/2abcf82a-918a-4aa1-abf8-7d266a6b9913/scratchpad/martin-walker/`
(session-local, not committed to the repo).

**Remaining gap**: data format (pattern/instrument/wavetable encoding) and
effect commands are still `TODO` — this pass verified the player CODE is
byte/register-exact, not its data-table semantics. A future session could
build on the now-confirmed disassembly to map that out.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, the Commodore Format
interview (primary source for the player's origin), VGMPF, CDM, and a
Lemon64 forum thread.
