# Cadaver Musicdriver (Lasse Öörni's MiniPlayer)

```json
{
  "id": "cadaver-musicdriver",
  "name": "Cadaver Musicdriver (Lasse Öörni's MiniPlayer)",
  "aliases": ["Cadaver_Musicdriver_10"],
  "authors": ["Lasse Öörni (Cadaver)"],
  "released": "2000s-2010s (Covert Bitops)",
  "status": "verified",
  "platform": "Finnish coder-musician Lasse Öörni's ('Cadaver,' co-founder of group Covert Bitops) LEAN, COMPACT IN-GAME playback routine — CONFIRMED via SIDId's own raw signature file as a technically distinct driver from his other, already-carded [[goattracker]] editor's own player: this is his 'MiniPlayer'/'MiniPlayer2' family, per his own tools.html page, used in-game (e.g. 'Metal Warrior 3') rather than exported from the full-featured editor. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": 142950,

  "memory": { "load_address": "Per-file, not fixed — all 3 HVSC files verified this run: Metal_Warrior_3.sid load/init $1000, play $1003 ($1000-$3ca7); Rant_7_Example.sid load/init $1000, play $1003 ($1000-$139b); Slither.sid load/init $0ffa, play $1000 ($0ffa-$17ff). Relocatable — SIDdecompiler's -v2 'Start:' equals the PSID load address on all three (no gotcha-40 trap).", "zero_page": "Only 2-5 consecutive bytes at the top of ZP, no fixed allocation elsewhere. MINIMAL variant (Rant_7_Example): $fb-$fc ONLY — a single 16-bit sequence-stream read pointer used via (zp),Y. FULL variant (Slither, Metal_Warrior_3): $fb-$ff — $fb/$fc sequence pointer, $fd/$fe a 16-bit scratch frequency pair for the toneportamento/slide subroutines, $ff a saved stream index. Verified from a 100%-byte-exact disassembly, not inferred.", "layout": "Three contiguous sections, in order: (1) player code at the load address (Rant ~$12d bytes; Slither ~$4a0 bytes), (2) a per-voice working-storage block + instrument/note tables, (3) the sequence (pattern) data streams. MINIMAL variant, exact: $1000 init JMP, $1003 play JMP, $1006-$112c code, $112a SID voice-offset constants ($00/$07/$0e), $112d-$1153 per-voice working storage (13 arrays x 3 channels, stride 3), $1154-$11b3 note frequency HI table (96 notes), $11b4-$1213 note frequency LO table (96 notes), $1214-$1225 instrument tables (6 arrays x 3 instruments), $1226-$122b per-subtune channel start-pointer table (lo/hi interleaved, 2 bytes per channel), $122c+ sequence streams. Metal_Warrior_3 additionally wraps the player in a per-subtune COPY loop at $1000-$1046: init self-modifies the source lo/hi at $101c/$101e and dest hi at $1021 from tables at $1047/$1061, then block-copies that subtune's whole module (player code + data) from within the file up to $4000-$7fff and plays there — i.e. the $4000+ player image is runtime-generated and is NOT part of the .sid payload." },
  "entry": { "init": "$1000 (Metal Warrior 3, Rant #7) / $0ffa (Slither) — always the load address itself, a JMP to the real init. Init takes the subtune number in A and does nothing but store it into a self-modified immediate operand inside the play routine ($100e on Rant, play+1 on Slither), then RTS; the actual song setup happens on the FIRST play call. $ff in that operand = 'silence/idle'.", "play": "$1003 (Metal Warrior 3, Rant #7) / $1000 (Slither) — load+3, a JMP to the real play. Called once per frame from IRQ." },
  "speed": "Single-speed (1x, one play call per frame) on all 3 verified files. Measured register-write density over 50 frames: Metal_Warrior_3 212 writes (subtune 0), Slither 245, Rant_7_Example 87.",
  "data_format": { "order_list": "No separate orderlist/pattern split — each channel has ONE flat byte stream, with an explicit $ff <lo> <hi> 'jump to address' command used both for looping and for stitching sections together (verified in the minimal variant's parser at $10d5). Per-subtune start pointers live in a small lo/hi table (minimal variant: $1226/$1227, 2 bytes per channel per subtune).", "patterns": "Byte stream, parsed at $10d5 (minimal variant): read byte B at (ptr),Y. B < $80 -> NOTE: B is the note number, the NEXT byte is the duration in frames, then advance. B >= $80 and B < $ff -> INSTRUMENT CHANGE: (B AND $7f) is the instrument number, keep parsing. B = $ff -> JUMP: next two bytes are a new stream pointer lo/hi, reload and keep parsing. Note $60 and above skips the freq/instrument setup entirely (rest / keyoff); note $61 additionally skips the 1-frame gate-off, i.e. it is the tie/legato marker. All other notes clear bit 0 of the waveform shadow for one frame before retriggering (the '1 frame of gateoff' hard-restart the author's own later MiniPlayer README describes as a known limitation).", "instruments": "Minimal variant: 6 parallel byte arrays indexed by instrument number, all of length = instrument count (3 in Rant_7_Example) — $1214 pulse-width lo init, $1217 pulse-width hi init, $121a per-frame pulse-width ADD value (16-bit sweep, added to the voice's pulse shadow every non-note frame), $121d attack/decay, $1220 sustain/release, $1223 waveform/control. Full variant (Slither / Metal_Warrior_3) adds parallel arrays for a wavetable pointer, a filter-program pointer and an ADSR pair, plus a per-instrument 'gate length' counter.", "wavetable": "ABSENT in the minimal variant (Rant_7_Example) — there is no wavetable at all, the instrument's waveform byte is written once at note start and only bit 0 is toggled for gate-off. PRESENT in the full variant (Slither, Metal_Warrior_3): a stream at $1567+ (Slither) read one step per frame with $10-and-above bytes meaning 'new waveform' and $ff meaning 'jump', plus delayed-step / indefinite-slide / vibrato commands and $fe = 'set frequency absolutely' — matching the author's own later MiniPlayer README feature list.", "pulsetable": "No table in either variant. Pulse width is a per-instrument 16-bit start value plus a per-instrument 16-bit signed ADD applied once per frame (minimal variant: $1214/$1217 + $121a, applied at $1090-$109e). The 'destination value compare' pulse programs the author's later MiniPlayer describes are NOT present here.", "filtertable": "ABSENT in the minimal variant: Rant_7_Example writes $d417 = $00 and $d418 = $0f exactly once, at song init, and never touches the filter again (this is the origin of the '2 filter writes in a 212-write sample' observation in the earlier pass — they are init-only constants, not a filter engine). PRESENT in the full variant (Slither, Metal_Warrior_3): $d416/$d417/$d418 are written every frame at the end of the play routine via a read-modify-write merge (ORA #$f0 on the resonance/routing byte, AND #$f0 / ORA #$0f on the volume byte), driven by a self-modified cutoff/filter-type pair fed from a per-instrument filter program." },
  "effects": { "encoding": "Not a tracker-style effect column. The minimal variant has NO effects at all — only note, duration, instrument-change and stream-jump. The full variant carries its effects in the per-instrument wavetable program rather than the pattern stream (slide, vibrato, absolute-frequency set, waveform change), plus a toneportamento path in the play routine ($1120-$1163 on Slither, three subroutine calls at $12b1/$12c0/$12cf that compare/step a 16-bit target frequency).", "commands": { "stream: $00-$5f": "note number (next byte = duration in frames)", "stream: $60": "rest / no retrigger (next byte = duration)", "stream: $61": "tie / legato — same as $60 but also skips the 1-frame gate-off", "stream: $80-$fe": "instrument change, instrument = value AND $7f", "stream: $ff": "jump — next 2 bytes are the new stream pointer lo/hi (used for both loop and section stitching)", "wavetable (full variant only): $10-$fd": "set waveform register", "wavetable (full variant only): $fe": "set frequency absolutely (next byte = note index)", "wavetable (full variant only): $ff": "jump to another wavetable position" } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED: Cadaver = Lasse Öörni, Finnish demoscener/coder active since ~1998 — CSDb scener id=2908, groups Covert Bitops (his own, co-founded with Olli Niemitalo/'Yehar') and Protovision (joined 2020), country Finland, roles coder/graphician/musician. An initial research guess that he was linked to 'Byterapers' was checked and found UNSUPPORTED by any source — his actual group is Covert Bitops, not Byterapers, and that incorrect premise is not carried forward.",
    "CONFIRMED TECHNICALLY DISTINCT FROM [[goattracker]] (his other, already-carded tool), via SIDId's raw signature file (`sidid.cfg`, verified by direct fetch/grep, not just search snippets): only TWO numbered 'Cadaver_Musicdriver' signatures exist total ('_7' and '_10'), no others — meaning '10' is not the tenth entry in a documented public sequence, just the second of two distinct byte-pattern signatures Öörni himself captured for revisions of his OWN in-game driver code. SIDId's human-readable `sidid.nfo` has NO entry at all for 'Cadaver_Musicdriver' — it only documents his separate GoatTracker editor (V1.x/2001 through V2/Mini2/2021) — confirming this is a genuinely different, undocumented-by-name routine, not a naming variant of GoatTracker.",
    "CORRECTED (2026-07-30, disassembly pass): THIS IS *NOT* HIS PUBLISHED 'MiniPlayer'/'MiniPlayer2' — an earlier pass inferred that from tools.html prose, and a direct byte-level check falsifies it. Öörni publishes full 6502 source for both (github.com/cadaver/miniplayer and .../miniplayer2, `player.s`, DASM format, MIT-licensed, copyright 2018 and 2026 respectively) together with a reference `example.sid` built from that exact source. Scanning both reference `.sid`s with SIDId's own raw `Cadaver_Musicdriver_7`/`_10` byte patterns returns NO MATCH for either, and the longest common byte run between `Slither.sid` (a `_10` file) and either reference build is 14 bytes (i.e. noise, not shared code). Chronology agrees: the `_10` files are dated 2000-2002 in their own PSID headers, sixteen years before MiniPlayer's copyright. What IS real is a DESIGN lineage, not code identity — MiniPlayer's own README feature list (wavetable with delayed-step/slide/vibrato, legato instruments, keyoff, transpose, sound-FX channel override, 'several music modules with the same player code' in NinjaTracker gamemusic style, and the '1 frame of gateoff before new note' hard-restart limitation) describes, item for item, mechanisms that are already present in the verified `_10` disassembly. Read this driver as MiniPlayer's undocumented in-game ANCESTOR, not as MiniPlayer itself.",
    "TWO STRUCTURAL VARIANTS SHARE THE ONE `_10` TAG (established by disassembling all 3 tagged files this run — the SIDId signature `98 18 65 ?? 9D ?? ?? A5 ?? 69 ?? 9D ?? ?? 4C` is just the shared 'advance the 16-bit sequence pointer by Y' idiom TYA/CLC/ADC zp/STA abs,X/LDA zp/ADC #$00/STA abs,X/JMP, which both variants contain verbatim). (a) MINIMAL variant — `Rant_7_Example.sid` (2002): 2 ZP bytes ($fb-$fc), ~$12d bytes of code, no wavetable, no filter engine (writes $d417/$d418 once at init and never again), pulse width is a constant plus a per-frame linear sweep. (b) FULL variant — `Slither.sid` and `Metal_Warrior_3.sid` (both 2000): 5 ZP bytes ($fb-$ff), ~$4a0 bytes of code, wavetable stream with slide/vibrato/absolute-frequency commands, per-frame filter read-modify-write on $d416-$d418, toneportamento subroutines, and a per-channel sound-FX override slot. Slither and Metal_Warrior_3 share a 192-byte identical run (their two 96-entry note-frequency tables); Rant shares only 19 bytes with either, i.e. it was built with a different note table as well as a different feature set.",
    "`Metal_Warrior_3.sid` IS A MULTI-MODULE WRAPPER, NOT A BARE PLAYER (verified byte-exact): the payload at $1000-$3ca7 is 26 separate music modules plus a ~$47-byte loader at $1000-$1046. Init self-modifies the copy loop's source lo/hi ($101c/$101e, from lookup tables at $1047/$1061 indexed by subtune) and its destination hi ($1021), then block-copies the selected subtune's entire module — player code AND data — from inside the file up to $4000-$7fff, and play jumps there. Consequence for anyone disassembling it: the $4000+ code SIDdecompiler shows is RUNTIME-GENERATED and is not present at those addresses in the .sid payload at all, so the reassembled `.prg` must be truncated back to the file's own $1000-$3ca7 length before byte-diffing or the comparison is meaningless. This is Öörni's 'several music modules with the same player code, similar to NinjaTracker gamemusic mode' feature, visible in the wild.",
    "AN EARLIER SIBLING VERSION IS NOW SEPARATELY CARDED as [[cadaver-musicdriver-7]] (tag `Cadaver_Musicdriver_7`, 2 files from the ORIGINAL 'Metal Warrior,' 1999 — two years before this card's own 'Metal Warrior 3'). Its trace is structurally distinct: init lives far from load/play ($9a10 vs. load/play both $8000, vs. this card's tightly-packed $1000-$1003) and write density is lower (167/50 frames vs. this card's 212/50 frames) — genuine evidence of a materially different, earlier code revision, not a relocated copy of the same binary. Plausibly maps to Öörni's own 'MiniPlayer' (original) vs. 'MiniPlayer 2' (updated) distinction on his tools.html page, though no source explicitly names which tag is which.",
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
    "Öörni's published MiniPlayer 6502 source (checked and found NOT to be this driver): https://github.com/cadaver/miniplayer (player.s, README.md, example.sid)",
    "Öörni's published MiniPlayer2 6502 source (same, NOT this driver): https://github.com/cadaver/miniplayer2 (player.s, README.md, example.sid)",
    "Own disassembly this run (SIDdecompiler 0.8 + 64tass 1.60), 3 HVSC files: MUSICIANS/C/Cadaver/{Metal_Warrior_3,Slither,Rant_7_Example}.sid",
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

See the `quirks` array. Two load-bearing ones:

- The **confirmed technical distinction from GoatTracker**, verified by
  fetching SIDId's own raw signature file rather than a search summary.
- The **correction that this is not the published MiniPlayer/MiniPlayer2**
  — Öörni's own 6502 source for both is public, and a direct byte
  comparison against their reference `example.sid` builds falsifies the
  earlier inference. This driver is MiniPlayer's undocumented in-game
  ancestor (2000-2002 vs. MiniPlayer's 2018), sharing its design
  vocabulary but no code.

## Disassembly notes

Fully reconstructed from original binaries (2026-07-30) — see
**Verification**. Method: `SIDdecompiler.exe <file> -o<out.asm>
-a<decimal load address> -z -d -c -v2` (relocation base = the file's own
PSID load address; SIDdecompiler's `-v2` "Start:" matched it exactly on
all three files, so no gotcha-40 relocation correction was needed), then
`64tass -a --cbm-prg`.

Two per-file wrinkles worth knowing before repeating this:

- **`Metal_Warrior_3.sid` needs `-1 -s0`** and its reassembly must be
  truncated to the file's own length. Without `-1`, SIDdecompiler emulates
  all 26 subtunes in sequence and the map runs to `$7fff`; with `-1 -s0` it
  still runs to `$7fff`, because the file genuinely block-copies each
  module up to `$4000-$7fff` at init (see the wrapper quirk). Only
  `$1000-$3ca7` is real file content.
- **`Metal_Warrior_3.sid` also emits four illegal `l<hex>+1` label
  definitions** (`l405e`, `l41aa`, `l41af`, `l41ba`) that 64tass rejects.
  Fixed per this project's lesson 19: rename each definition to
  `l<hex>_anc`, add `l<hex>_1 = l<hex>_anc + 1`, and rewrite every
  `l<hex>+1` reference to `l<hex>_1`. Do **not** simply strip the `+1` —
  and note the `.byte >l405e+1` style references genuinely need the
  rename, since 64tass parses `>label+1` as `(>label)+1`, not
  `>(label+1)`.

The published sources at `github.com/cadaver/miniplayer` and
`.../miniplayer2` were checked and are **not** this driver (see the
corrected quirk) — but their READMEs are still the best available prose
description of the design family, and `player.s` in either repo is a
useful, author-written glossary for the mechanisms this disassembly
exposes.

## Verification

**`status: verified` (2026-07-30).** All 3 HVSC files carrying the
`Cadaver_Musicdriver_10` signature were disassembled, reassembled,
byte-diffed and register-write trace-diffed against the originals in this
pass. Tag membership was re-confirmed independently by scanning the whole
`MUSICIANS/C/Cadaver/` folder with SIDId's own raw byte patterns rather
than trusting the DeepSID tag: `_10` matches exactly
`Metal_Warrior_3.sid`, `Rant_7_Example.sid`, `Slither.sid`.

| file | PSID load / init / play / subtunes | raw byte-diff | after patch | trace-diff |
|---|---|---|---|---|
| `Metal_Warrior_3.sid` | `$1000` / `$1000` / `$1003` / 26 | **99.9738%** (3 / 11432) | 100.0000% | **exact**, 0 register-write diffs |
| `Rant_7_Example.sid` | `$1000` / `$1000` / `$1003` / 1 | **96.4286%** (33 / 924) | 100.0000% | **exact**, 0 register-write diffs |
| `Slither.sid` | `$0ffa` / `$0ffa` / `$1000` / 1 | **97.1890%** (54 / 1921 covered) | 100.0000% over the covered region | **exact**, 0 register-write diffs |

**`Metal_Warrior_3.sid` — the strongest result.** Reassembly truncated to
the file's own `$1000-$3ca7` (everything above that is the runtime-copied
module image, not payload). Only **3 bytes** differ, all at `$101b-$101f`:
they are the copy loop's self-modified source-lo/source-hi/dest-hi
operands, which `init` unconditionally writes before the loop runs, so
they are provably dead. Traced with `sidm2-sid-trace.exe`, 50 frames,
**five subtunes spot-checked** (0, 1, 5, 12, 25 → 212 / 156 / 257 / 99 /
118 register writes respectively) — **byte-for-byte identical CSV on every
one, with no patch applied at all.** The 212-writes/50-frames figure from
the 2026-07-14 pass is reproduced exactly.

**`Rant_7_Example.sid` — full coverage, no borrowed bytes.** The 33
diffs sit in exactly two `-v2`-map-flagged places: one `_`-marked byte at
`$100d`/`$100e` (the self-modified subtune-select immediate operand at the
play entry) and the 39-byte `+`-marked per-voice working-storage block
`$112d-$1153`. A patch-isolation test (gotcha 41) separated them cleanly:
patching **only** `$100d` left the trace still diverging (50 diff lines,
15 SID changes in frame 1 vs. the original's 3 — wrong pitch/pulse/ADSR
on all three voices, not silence); patching **everything except**
`$100d` gave a **0-diff, 87-write trace** — i.e. the workspace block is
load-bearing and the self-modified operand is dead, because `init` writes
it first. Patching all 33 yields a binary byte-identical to the original
payload and an equally exact trace.

**`Slither.sid` — one honest caveat.** SIDdecompiler's emulated range ends
at `$177a`, so the reassembly covers 1921 of the file's 2054 bytes
(93.5%); the trailing **`$177b-$17ff`** (133 bytes, marked `?` / never
accessed in the `-v2` map — the tail of the sequence data) is absent and
was carried over verbatim from the original in order to trace. Over the
covered region the diffs are `$1001` (the self-modified subtune operand
again — dead, `init` writes it) plus the `$148d-$14cc` / `$14d3` / `$14da`
per-voice working storage. Patched → 100% over the covered region, and a
50-frame trace is **register-write-exact (245 writes, 0 diffs)**. The
only residual line in that diff was the tracer's own informational
`Mem[$1000]:` echo, not a register write.

**Method notes / traps hit.** `sidm2-sid-trace.exe` writes its CSV to
stderr (lesson 46 — captured with `2>&1`), and was fed real `.prg` files
built from the PSID payload, never a `.sid` path (lesson 22).

**Side finding, flagged not acted on:** the same signature scan shows
`Metal_Warrior_Unused_Music.sid` carries the **`_7`** pattern, not `_10`.
The sibling [[cadaver-musicdriver-7]] card's own second-file note reads
that file's `$1000`/`$1000`/`$1003` header as "structurally like the
`_10` card's layout, possibly a mis-tag" — the raw signature says it is
genuinely a `_7` file whose header layout happens to coincide. Left for
that card's next pass rather than edited here.

**Next lead (not required for this status):** `Slither.sid`'s unreached
`$177b-$17ff` tail. It is `?` in the `-v2` map at the default `-t 30000`,
so a longer `-t` sweep (or `-C1`) may pull it into the traced range and
close that file to full coverage without borrowing bytes.

## Sources

See the `sources` array — CSDb (2 entries), Demozoo, Zak's bio page,
SIDId (2 files), Cadaver's own tools.html, Lemon64, C64-Wiki, and the
related goattracker card.
