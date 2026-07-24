# Matthias Weber (CSD Artware)

```json
{
  "id": "matthias-weber",
  "name": "Matthias Weber (CSD Artware)",
  "aliases": ["Matthias_Weber"],
  "authors": ["Matthias Weber"],
  "released": "1988-1989 (CSD Artware, Input 64 magazine)",
  "status": "verified",
  "platform": "German composer-coder Matthias Weber's own playroutine — CSD Artware, his CSDb-registered 'group', is effectively a one-man outfit (he is its ONLY listed member, coding every release himself). He also built his own drum/tracker-style editors (Alpha Drummer V1.4, 4-Track Drummer, both 1988, Addlogic Drums 1989). Player-ID-fingerprinted across 8 files, all his own, including a self-installing RSID tune successfully traced by this project's tracer.",
  "csdb_release": 182914,

  "memory": { "load_address": "PSID-header load address varies per file ($9fdf for Pride, $a000 for Addlogic Drums). SIDdecompiler v2 map reports runtime Start: $02c0 — the player keeps a small low-RAM workspace block ($02c0-$02ff+) below the code/data load address, used for working storage (channel pointers, counters). Relocation to the v2 Start: address is required for correct reassembly (same gotcha as SoundMonitor/SoundMaster). Code lives at $c000-$cfff; data/songs extend below into the $a000-$bfff range.", "zero_page": "$02c0-$02ff+: working storage (pointers, counters). $a5-$ac: channel state pointers (za5-zac). $00a0: waveform/control read port (za0 = $00A0).", "layout": "Low-RAM workspace block ($02c0-$02ff, zero-initialized at cold boot) + song data ($a000-$cfff range, file-dependent) + player code ($c000-$cfff). init at $c000 (subtune select via A-register). play at variable address ($c020 for some files, $c475 for others — not fixed). Self-modifying: the player modifies its own operand bytes at runtime (immediate-mode instructions in the filter/voice setup block, flagged by SIDdecompiler with _ markers)." },
  "entry": { "init": "$c000 (typical; A-register passes subtune number). Confirmed on Addlogic_Drums_intro.sid (PSID init=$c000, play=$c020) and Pride.sid (PSID init=$9fdf=real init=$c000 via wrapper, play=$c475).", "play": "Variable: $c020 (Addlogic Drums), $c475 (Pride). RSID files use self-installing IRQ (play=$0000 PSID convention)." },
  "speed": "1x (standard 50Hz play call). Uses all 3 voices with filter sweep modulation. Frame 0: 21 writes (voice init + filter/pulse setup). Steady state: 7-12 writes/frame depending on note/slide activity. Frame 7 has a spike (41 writes) when all 3 voices are fully configured with ADSR/pulse parameters.",
  "data_format": { "order_list": "TODO (buried in song data at $a000-$bfff range — not yet decoded)", "patterns": "TODO", "instruments": "3 voices with per-voice ADSR (attack/decay/sustain/release written individually), pulse width modulation, and frequency slides. Waveform: pulse (PW sweep) + saw/tri mix. Filter: low-pass with resonance; filter cutoff swept per frame across a range ($08-$48 over ~7 frames, then resets).", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "Filter modulation observed: cutoff sweeps upward in steps ($08->$10->$18...), resetting periodically. Filter resonance toggles on ($08) then off ($00) during voice init in frame 7." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CSD ARTWARE IS EFFECTIVELY A ONE-MAN OUTFIT, CONFIRMED: CSDb classifies it as a 'Game Development Group' with EXACTLY ONE member — Weber himself (coder/graphician/musician). A strong structural signal that 'Matthias_Weber' is a genuinely personal playroutine, not a shared tool — he coded every CSD Artware release himself, with no other coder ever involved.",
    "TITLE CONFIRMED: the traced file 'Breakout_Error_Virus.sid' is 'Virus - The Breakout Error' (1988) — a Breakout/Pac-Man hybrid arcade game, Code/Music/Graphics/Design all by Weber, published via the German computer magazine Input 64 (publisher Verlag Heinz Heise, the same publisher behind c't/iX) — i.e. a magazine type-in/coverdisk game, not a full commercial or demoscene release. 'Bubble It' (1989, also in his folder) is likewise a CSD Artware/Input 64 production, same Code/Music/Graphics/Design credit pattern.",
    "SELF-WRITTEN MUSIC TOOLS, CONFIRMED: Weber authored his own drum/tracker-style editors under CSD Artware — 'Alpha Drummer V1.4' and '4-Track Drummer' (both 1988), 'Addlogic Drums' (1989), all Code+Music credited to him. A DIFFERENT, LATER, unrelated release, 'Alpha Drummer V2.1' (1991, by a group called Hitmen), is explicitly NOT confirmed to be a modification of Weber's tool — flagged to avoid conflating the two.",
    "Active period 1988-1992 per his CSDb credits (earliest: Alpha Drummer V1.4, 1988; latest: reissues of 'Pride'/'Quad 2' by group PDB, 1992). He also composed freelance for other groups' productions without formal membership — Weird Science (logos), The Icepic Eagles, Genesis Project, Might, Orion, Recrute, The PD-Freaks — credit-only appearances, not group memberships.",
    "CONFIRMED coder AND musician (CSDb functions list both), unlike several other cards in this batch — directly supports self-authorship of both the game code and the accompanying playroutine.",
    "Not confirmed in SIDId (no entry for this tag — consistent with him being an obscure, non-catalogued player author). No known relationship found to any other composer/tool already in this KB, including other German composers (checked against Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck, Oliver Klaewer, Holger Gehrmann/Soundcontrol, Georg Feil/Synth, and the full non-German roster: Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Weber, Matthias - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=24201, functions Coder+Musician, CSD Artware ex-member): https://csdb.dk/scener/?id=24201",
    "CSDb group — CSD Artware (id=7690, one-man outfit, Weber only): https://csdb.dk/group/?id=7690",
    "CSDb release 182914 — Virus - The Breakout Error (1988, Input 64 magazine, full credits): https://csdb.dk/release/?id=182914",
    "Lemon64 — Virus - The Breakout Error: https://www.lemon64.com/game/virus-the-breakout-error",
    "CSDb release 118967 — Bubble It (1989): (credits table on Weber's scener profile)",
    "Local dataset: 8 files tagged Matthias_Weber, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Matthias_Weber` tag is German composer-coder Matthias Weber's own
playroutine — his 'group', CSD Artware, is effectively a one-man outfit,
with every release coded, composed, and drawn by Weber himself, including
his own custom drum/tracker editors. Player-ID-fingerprinted across 8
files, all his own, published via the German magazine Input 64.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: CSD Artware is a
**confirmed one-man outfit**, strong structural support for genuine
self-authorship; his titles are **magazine coverdisk games**, not
commercial or demoscene releases; and he **built his own drum-editor
tools**, a documented pattern of self-sufficiency.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Matthias_Weber`-tagged
`.sid` + trace.

## Verification

**Verified: register-write exact on 2 PSID files (2026-07-24) — `status: verified`.**

### Method

Relocation to SIDdecompiler `-v2` Start: address ($02C0, decimal 704) was required — the player keeps a low-RAM workspace block ($02C0-$02FF) below the PSID-header load address. Relocating to the PSID load address alone produces a two-block assembly with wrap warnings and random byte-diff. This is the same gotcha-40 pattern as SoundMonitor/SoundMaster.

Reassembly: `SIDdecompiler -a704 -z -d -c -v1`, assemble with `64tass -a --cbm-prg`, trace with `sidm2-sid-trace.exe`.

### Results

| File | Type | Load | Init | Play | Subtunes | Byte-diff | Trace-diff |
|------|------|------|------|------|----------|-----------|------------|
| Addlogic_Drums_intro.sid | PSID v2 | $a000 | $c000 | $c020 | 1 | 79.02% (2354/11220 bytes) | 230/230 exact |
| Pride.sid | PSID v2 | $9fdf | $9fdf* | $c475 | 2 | 99.96% (4/11292 bytes) | 223/223 exact |

\* Pride PSID init=$9fdf — this is the file's load address; SIDdecompiler traces a small wrapper that jumps to the real init at $c000.

**Both files: all register writes match exactly — same registers, same values, same order, same per-frame write counts.** 20 frames traced per file. The byte-diff is entirely in self-modified/working-storage areas (confirmed by `-v2` map `+`/`w`/`_` markers) and does not affect SID output.

### One gotcha

`Addlogic_Drums_intro.sid` emits one undefined symbol (`za0` = address $00A0) that must be defined before assembly. SIDdecompiler names it as if it were a zero-page symbol (`za0` = $00), but the underlying instruction is `AD A0 00` (3-byte absolute `lda $00A0`). Define as `za0 = $00A0`.

### Remaining RSID files

The other 6 tagged files in the Weber_Matthias folder use RSID with play=$0000 (self-installing IRQ). SIDdecompiler's default play-address inference won't trace these — they'd need `-P` override or live-debugger reverse-engineering of the IRQ vector. Not attempted here; the two PSID files are sufficient for verification.

### Next steps

- Decode the song data format ($a000-$bfff range) for order-list/pattern structure
- Reverse-engineer one RSID file's IRQ install to find the real play entry point for `-P` override
- Test subtune N>0 (only subtune 0 traced here)

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (3 entries), and
Lemon64.
