# Dave Lowe (player routine)

```json
{
  "id": "dave-lowe",
  "name": "Dave Lowe (player routine)",
  "aliases": ["Dave_Lowe"],
  "authors": ["Dave Lowe"],
  "released": "~1988-1992 (US Gold / Virgin Mastertronic conversion era)",
  "status": "verified",
  "platform": "British composer Dave Lowe's ('Uncle Art') own playroutine, used for his C64 conversion soundtracks. Sources conflict on whether he personally coded it (see quirks — his own documented programming credits are Z80/Spectrum, not confirmed 6502). Player-ID-fingerprinted across 13 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file (song data is relocatable): Betrayal loads at $ed13 (play address == load address, PSID header load field 0 → embedded in payload); E-SWAT loads at $a040. In both files disassembled, SIDdecompiler's own -v2 memory-touch map reports a 'Start:' address slightly AFTER the file's declared load address — Betrayal: Start=$ed13 (matches exactly); E-SWAT: Start=$a04a, i.e. the leading 10 bytes ($a040-$a049) are never touched by any traced execution path (a small genuinely-dead header/stub — see gotcha 40's family of findings). Relocate to the -v2 Start address, not the PSID load address, when it differs.",
    "zero_page": "$F0-$FB (zf0..zfb, a fixed 12-byte scratch block) — used as: two independent 16-bit pointer pairs (zf0/zf1 and zf2/zf3) for indirect-indexed (zfX),Y access into per-voice pattern/sample-like data; zf4-zf9 as a 6-byte per-voice-parameter copy buffer (round-tripped to/from a fixed table near the player's own code, e.g. $f517-$f51c in Betrayal); zfa/zfb as a third pointer pair (confirmed via 'sta (zfa),Y' in Betrayal). Consistent across both disassembled files.",
    "layout": "Player code + song data share one contiguous relocatable block (no separate low/high split observed). A small per-file dispatch/init header precedes the main routines (Betrayal: ~24 bytes from load to init; E-SWAT: ~24 bytes from load to init, plus the 10-byte untouched leading stub noted above)."
  },
  "entry": {
    "init": "Betrayal: $ed2b. E-SWAT: $a058. Both = load address + $18 (24), consistent across the two files sampled.",
    "play": "Betrayal: $ed13 (== load address itself). E-SWAT: $a078 (called in IRQ)."
  },
  "speed": "TODO — not derived from either trace (both traced at a fixed 50Hz frame cadence without checking for CIA/speed-byte variation).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (no filter writes observed in either 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Dave Lowe (alias 'Uncle Art') — British composer/sound engineer, active 1985-1998 (gameography per VGMPF extends to 2003). 14 C64 titles credited on Lemon64: Betrayal, Count Duckula II, Double Dragon II, ESWAT, Exceleron, Final Fight, Garfield: Winter's Tail, Hard Drivin', Line of Fire, Night Shift, P47 Thunderbolt, Postman Pat III, Power Drift, Street Fighter II — mostly US Gold arcade-conversion licenses, late 1980s-early 1990s.",
    "CODER-OR-NOT SOURCE CONFLICT — deliberately left unresolved rather than picking a side: VGMPF explicitly states he was 'not a coder', while Wikipedia/a VGMO interview document real assembler-programming credits ('co-author and assembler programmer for Buggy Blast', 'programmer for the Spectrum Z80 version of Thrust', both Rainbird 1985-86). Those credits are Z80 (Spectrum), not demonstrated on 6502/C64 specifically — so the single-composer 13-file tag signal is a STRONGER indicator of 'this routine was hand-coded FOR him' than 'coded BY him', absent further evidence.",
    "USED A THIRD-PARTY DRIVER ON OTHER PLATFORMS: for Game Boy/Mega Drive work he used sound drivers by Martin Walker (also carded in this KB as [[martin-walker]]) — confirming Lowe did not always write his own platform driver, which weakens (without ruling out) the self-coded-on-C64 hypothesis. No source directly confirms whether this Walker-driver relationship extended back to his C64-era work.",
    "No CSDb scener page found — he's a commercial games-industry composer, not a demoscene participant (HVSC lists no scene-group affiliation), same pattern as [[dave-warhol]] and [[paul-norman]] among the American/commercial-industry composers in this KB.",
    "STILL ACTIVE: runs 'Uncle Art Music' with his daughter Holly; subject of a 2019 documentary ('Uncle Art'); released a 2016/2017 orchestral remaster album ('A Temporal Shift', recorded at Abbey Road) of his game-music work.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Dave Lowe entry). No known relationship found to any other composer/tool already in this KB besides the Martin Walker driver-sharing note above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note) — this KB's disassembly (2026-07-24) is original, produced via SIDdecompiler + 64tass reconstruction from two real HVSC files.",
    "ADDRESSING-MODE RECONSTRUCTION GOTCHA (confirmed on both files disassembled): a subset of STA/INC instructions writing to the player's zero-page scratch symbols (zf0-zfb) use the original hand-written code's 3-byte ABSOLUTE encoding (e.g. $8D $FA $00) rather than the 2-byte zero-page encoding a modern assembler would pick automatically for a $F0-$FB target. SIDdecompiler's symbolic disassembly output doesn't preserve this distinction, so 64tass silently re-encodes every such instruction 1 byte shorter, cascading into a severe (~93-99% !) false byte-diff mismatch across the whole rest of the file even though only ~1% of instructions are actually affected (38 occurrences in Betrayal, 51 in E-SWAT — same instruction pattern, same fix, in both files). Diagnosed via a synchronized instruction-length walker (script, not manual) that reads the true original opcode byte at each computed address and compares it against both the zp and abs opcode values for that mnemonic. Fixed by replacing each flagged line with an explicit `.byte $<abs-opcode>, $<lo>, $00` triplet. See Verification section for the full methodology and per-file numbers.",
    "SELF-MODIFYING JMP DISPATCH: both files build one indirect-style jump table entry at runtime (a `JMP $xxxx` whose 2-byte target operand is overwritten via `sta <label>+1` / `sta <label>+2` from a small per-call lookup, e.g. Betrayal's $f105, E-SWAT's $a330). SIDdecompiler's default trace window can capture this operand's POST-execution value instead of the file's true pristine cold-start bytes (confirmed happening in Betrayal, at $f105; NOT triggered in E-SWAT, where the captured value happened to already be pristine) — a file-dependent instance of the project's established 'drifted self-modified workspace' pattern, not a reconstruction defect once identified."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Lowe, Dave (Uncle Art) - UNITED KINGDOM (ENGLAND)')",
    "Wikipedia — David Lowe (video game composer): https://en.wikipedia.org/wiki/David_Lowe_(video_game_composer)",
    "VGMPF (gameography, 'not a coder' claim): https://www.vgmpf.com/Wiki/index.php/David_Lowe",
    "Lemon64 — 14 C64 titles credited to Dave Lowe: https://www.lemon64.com/games/list.php?list_individual=dave-lowe",
    "VGMOnline interview (Z80/assembler programming credits, Yamaha CX5M/DX7/RX11 use, Martin Walker driver on other platforms): http://www.vgmonline.net/davidloweinterview/",
    "TimeExtension (career retrospective, Abbey Road remaster, documentary): https://www.timeextension.com/news/2024/12/a-disc-collection-belonging-to-the-prolific-video-game-musician-dave-lowe-is-being-preserved",
    "Local dataset: 13 files tagged Dave_Lowe, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Lowe` tag is British composer Dave Lowe's ('Uncle Art') own
playroutine, used across his US Gold arcade-conversion soundtracks
(Betrayal, ESWAT, Final Fight, Street Fighter II, and others). Player-ID-
fingerprinted across 13 files, all his own — but unlike some other cards in
this batch, whether Lowe personally coded the C64 driver is genuinely
disputed between sources, not confirmed.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **direct source conflict**
over whether he coded at all (VGMPF says no, Wikipedia/VGMO cite Z80
programming credits — but not confirmed 6502); and that on **other
platforms he used a third-party driver by Martin Walker** (also carded in
this KB), which is evidence against, not for, a fully self-coded C64
routine.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). This KB's
disassembly (2026-07-24) is original, produced via `SIDdecompiler.exe` +
`64tass.exe` reconstruction from two real HVSC files (Betrayal, E-SWAT).
See `quirks` for the addressing-mode reconstruction gotcha that had to be
solved to get a byte-accurate rebuild, and the Verification section below
for full numbers/methodology.

## Verification

**Register-write-exact on two independent files (2026-07-24) —
`status: verified`.**

Disassembled and reassembled two real HVSC `Dave_Lowe`-tagged files:

- **Betrayal.sid** — load/play `$ed13`, init `$ed2b` (PSID header load
  field 0, embedded in payload). SIDdecompiler `-v2` map's own `Start:`
  address matched the header's load address exactly ($ed13), no
  relocation-base trap. Raw reassembly (before any fix) byte-diffed at
  only **~7%** against the original — traced to 38 STA/INC instructions
  writing to the player's zf0-zfb zero-page scratch symbols using the
  original's 3-byte absolute encoding, silently shortened to 2-byte
  zero-page by 64tass (see `quirks`). After patching all 38 (`.byte`
  triplet replacement) the reassembled `.prg` matched the original's
  exact length (4791 bytes, `$ed13-$ffc9`) and byte-diffed
  **99.2695% exact (4756/4791 bytes)** — all 35 remaining diffs
  clustered in two small ranges: `$f105` (1 byte, a self-modified JMP
  dispatch operand — SIDdecompiler captured a post-execution value, not
  the pristine cold-start byte) and `$f515-$f592` (34 bytes, a
  self-modified per-voice parameter workspace table). Binary-patched
  those 35 bytes to the file's true pristine values and traced both the
  patched AND unpatched reassembly against the real file:
  **register-write-identical over both 50 and 500 frames** (76 SID
  register writes over 50 frames; 0 filter writes) in every
  case — confirming all 35 divergent bytes are dead/self-modified
  workspace with zero effect on actual playback, not a reconstruction
  defect.

- **E-SWAT.sid** — load `$a040`, init `$a058`, play `$a078`.
  SIDdecompiler's `-v2` map reported `Start: $a04a` — 10 bytes AFTER the
  header's load address (a small leading stub genuinely untouched by any
  traced execution path); relocated to `$a04a` per gotcha 40's
  methodology. Raw reassembly again byte-diffed very low (~6%) before
  fixing 51 occurrences of the same absolute-vs-zero-page addressing
  issue found in Betrayal (same instruction pattern, same fix). After
  patching, the reassembled `.prg` covered 3440 of the file's 3460
  traceable-region bytes (SIDdecompiler's own capture window didn't
  extend to the last ~20 bytes near the file's end — a genuine, honestly
  reported gap, not fixed) and byte-diffed **98.6628% exact (3394/3440
  bytes)** within that covered region — 46 diffs, all clustered in
  `$a715-$a780` (the same class of self-modified per-voice workspace
  table as Betrayal's `$f515-$f592` cluster; the one self-modified JMP
  operand at `$a330`, unlike Betrayal's, was already pristine in
  SIDdecompiler's capture). Binary-patched and traced both patched and
  unpatched reassemblies: **register-write-identical over both 50 and
  500 frames** (288 SID register writes over 50 frames; 0 filter writes)
  in every case.

Both independent files reached a full register-write-exact trace match,
with all residual byte-level divergence precisely localized, quantified,
and confirmed (via trace, not assumption) to be dead self-modified
workspace — consistent with this project's established `verified` bar
(cf. `laxity-newplayer` ~99.9%, `cheesecutter`/`dmc`/`roland-hermans`
100% after the same class of fix). Memory map, zero-page layout, and
entry-point facts above are drawn directly from this reconstruction, not
inferred.

**Still open (data-format layer)**: `data_format`/`effects` remain `TODO`
— this verification pass confirmed the player CODE reconstructs and
traces exactly, but did not reverse the song-DATA encoding (pattern/
instrument/order-list format) beyond noting that zf0-zfb's indirect
pointers clearly address per-voice pattern/sample-like data. A future
pass could pick this up from the now-verified disassembly.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia, VGMPF, Lemon64,
VGMOnline, and TimeExtension.
