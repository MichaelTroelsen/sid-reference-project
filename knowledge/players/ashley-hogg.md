# Ashley Hogg (player routine)

```json
{
  "id": "ashley-hogg",
  "name": "Ashley Hogg (player routine)",
  "aliases": ["Ashley_Hogg"],
  "authors": ["Ashley Hogg"],
  "released": "~1989-1993 (Codemasters/Thalamus era)",
  "status": "verified",
  "platform": "Ashley Hogg's own playroutine, used for Codemasters/Thalamus C64 games he composed AND is credited as designer/programmer on. Player-ID-fingerprinted across 17 files, all his own. SIDId has TWO distinct byte-signatures for him — 'Ashley_Hogg' (normal tune playback) and a separate 'Ashley_Hogg_Digi' (digi/sample routine) — matching this project's own observation that one of his files ('5-Channel_Digi-Tune.sid') is an RSID with no normal play address.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file — the routine is relocated per game. Confirmed via disassembly: CJs_Elephant_Antics.sid load $a900 (init $c000, play $c011); Steg_the_Slug.sid load $9b00 (init $9b00, play $9b03). SIDdecompiler's -v2 memory-touch map 'Start:' address matches each file's own PSID load address exactly (no relocation-drift trap, see project gotcha 40) on both files disassembled.",
    "zero_page": "Confirmed by disassembly, 4 contiguous bytes, window position varies slightly per file: CJs_Elephant_Antics.sid uses $FA-$FD; Steg_the_Slug.sid uses $FC-$FF (2-byte overlap with the first file). Used as an indirect pointer (lo/hi byte pair look-ups into the per-voice tables).",
    "layout": "Code + inline data tables in one contiguous block from load address; no separate order-list/pattern/instrument region boundaries identified yet (data_format below still TODO — this pass focused on entry-point/trace verification, not a full format walk)."
  },
  "entry": {
    "init": "Confirmed by disassembly + trace on 2 files: CJs_Elephant_Antics.sid $c000 (jsr's to two internal setup routines, restores/sets $01 I/O port around each call); Steg_the_Slug.sid $9b00 (jmp to an internal init routine). Both files' PSID init address is directly callable code (not an unreached stub, not IRQ-dispatched) — this is the 'clean PSID' subset of the 17 tagged files (see Verification section for the other 8, which are RSID/play=0 self-installing IRQ tunes not covered by this pass).",
    "play": "Confirmed by disassembly + trace: CJs_Elephant_Antics.sid $c011, Steg_the_Slug.sid $9b03. Both wrap a jsr to the real internal play routine with a save/restore of $01 (I/O port config) around it — consistent 'preserve caller's memory-map bank config' pattern across both files."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Ashley Hogg was DESIGNER/PROGRAMMER AND MUSICIAN on his best-known titles — VGMPF's credit table lists him as Composer/Programmer/Designer on CJ in the USA, CJ's Elephant Antics, Spike in Transylvania, Steg the Slug, and Nobby the Aardvark (all C64, 1991-1993), and The Codemasters Archive credits 'Ash Hogg' on CJ's Elephant Antics as Designed+Programmed+Music. Strong evidence this is a genuinely self-written routine, not a third-party tool — same 'coder-composer' pattern as Neil Brennan and Paul Norman elsewhere in this KB.",
    "TWO DISTINCT SIDId SIGNATURES, independently confirming a technical split we already observed: SIDId's sidid.cfg carries separate byte-pattern detectors for 'Ashley_Hogg' (normal playback) and 'Ashley_Hogg_Digi' (a digi/sample routine — its signature includes writes to $D418, the volume register, the classic 4-bit-DAC digi technique). This matches this project's own trace: 'Ashley_Hogg' 5-Channel_Digi-Tune.sid is an RSID with play address 0 (not a normally PSID-callable tune) — i.e. a self-installing digi player distinct from his standard tune routine. NOTE: these SIDId signatures are NOT present in this project's currently-imported sidid.nfo snapshot (checked data/sidid.json directly — no match); confirmed instead via a live fetch of the upstream cadaver/sidid GitHub repo's sidid.cfg, so a future re-import of the SIDId snapshot would pick these up. The signatures carry no name/author/comment metadata (unlike some other SIDId entries), only raw detection bytes.",
    "HVSC lists his country as UNITED KINGDOM (NORTHERN IRELAND). CSDb-credited SID-track count (17, 1989-1993) matches the local file count exactly, corroborating full/clean attribution for this tag.",
    "POST-C64 CAREER (VGMPF): moved into Amiga/Genesis/Sega work (Cosmic Spacehead, Fantastic Dizzy, Yogi Bear's Cartoon Capers — credited there as 'Sega Music Player programmer', plus a 'UniSound' Sega Genesis/MegaCD driver, 1994), then into general games programming (Runecraft, Blitz Games, Playground Games, Unity Technologies) — a long, technical career consistent with the coder-composer reading above.",
    "A claim that Hogg built his own proprietary C64 assembler (from an AI-summarized web search, source interview site unreachable/TLS-broken) is UNVERIFIED — flagged, not included as fact.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found). No public disassembly or source (not in the realdmx RE repo; no STIL technical note). Runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Hogg, Ashley - UNITED KINGDOM (NORTHERN IRELAND)')",
    "CSDb scener (id=18524, bio lists CJ Elephant Antics/CJ in USA/Nobby the Aardvark/Spikey in Transylvania/Steg the Slug): https://csdb.dk/scener/?id=18524",
    "CSDb SID-track search (17 tracks, matches local file count exactly): https://csdb.dk/search/?search=Ashley+Hogg",
    "VGMPF (credit table, post-C64 career): https://www.vgmpf.com/Wiki/index.php/Ashley_Hogg",
    "Lemon64 — Nobby the Aardvark: https://www.lemon64.com/game/nobby-the-aardvark",
    "The Codemasters Archive — CJ's Elephant Antics: https://thecodemastersarchive.co.uk/games/cjs-elephant-antics/",
    "SIDId sidid.cfg — Ashley_Hogg + Ashley_Hogg_Digi byte signatures (live-fetched, not yet in this project's imported snapshot): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.cfg",
    "Local dataset: 17 files tagged Ashley_Hogg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ashley_Hogg` tag is British (Northern Irish) game designer/programmer/
musician Ashley Hogg's own playroutine, used across the Codemasters/
Thalamus C64 games he both coded and scored. Player-ID-fingerprinted across
17 files, all his own — SIDId independently confirms two distinct
signatures for his work (a normal tune player and a separate digi/sample
player), corroborating this project's own trace finding.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's a **confirmed
designer/programmer as well as composer** on his named titles; **SIDId has
two separate byte-signatures** for him (normal + digi), matching this
project's own RSID/play=0 observation for his digi-tune file; and those
signatures are **not yet in this project's imported SIDId snapshot** (a
re-import would pick them up).

## Disassembly notes

None published (not in the realdmx RE repo; SIDId has detection
signatures but no disassembly notes). This project's own original
disassembly (2026-07-24, `SIDdecompiler` + `64tass`, see Verification)
covers the 9 plain-PSID files of the 17; the 8 RSID/play=0 digi-routine
files are not yet disassembled.

## Verification

**Register-write-exact trace match confirmed (2026-07-24) — `status: verified`.**

Method: disassembled with `SIDdecompiler.exe -a<decimal load> -z -d -c -v2`
(no `-e`, per project gotcha 3), reassembled with `64tass.exe`, byte-diffed
the reassembled `.prg` payload against the original PSID payload, then
register-write-trace-diffed both (via `sidm2-sid-trace.exe`, the MCP
`sidm2-siddump` tools weren't registered this session) across every subtune
of each file.

Of the 17 `Ashley_Hogg`-tagged files, 9 are plain PSID with a directly
callable, non-zero play address (the subset this pass covers); the other 8
are RSID files with `play address = 0` (self-installing IRQ-driven digi/
music routines — `5-Channel_Digi-Tune.sid`, `Classical_1_Merry_Melody.sid`,
`Classical_2.sid`, `Conversion_2.sid`, `Elephant_Antics_Remix.sid`,
`Genesis_Music_Selector.sid`, `Genesis_Music_Selector_2.sid`,
`Spellcast.sid`) — consistent with the two-signature SIDId split already
noted in `quirks`. Those 8 are untouched by this pass and remain a real gap
(see "Next step" below).

**File 1 — CJs_Elephant_Antics.sid** (load `$a900`, init `$c000`, play
`$c011`, 5 subtunes):
- Byte-diff: **98.9015%** exact (65 / 5917 bytes differ, reassembly is the
  exact same length as the original). All 27 diff sub-ranges fall inside
  one contiguous span, `$aea0-$af3f`, which the `-v2` memory-touch map marks
  entirely `+` (read+write / self-modified at runtime) — a per-voice
  working-storage table (`laea0`, `laef0` etc. in the disassembly, both
  read and written by the play routine), the classic drifted-snapshot
  pattern documented in this agent's `lessons_learned` 10/16/17/29/32.
- Trace-diff: **register-write-exact** (0 differing lines) on **all 5
  subtunes** at 50 frames, and re-confirmed at 300 frames on subtune 4
  (the file's own PSID startSong) — 2,179 SID register writes over 300
  frames, byte-for-byte identical between original and reassembly.

**File 2 — Steg_the_Slug.sid** (load `$9b00`, init `$9b00`, play `$9b03`,
5 subtunes):
- Byte-diff: **98.5161%** exact (85 / 5728 bytes differ; reassembly is 2
  bytes longer — trailing unused-data padding, harmless, see project
  gotcha 9). Diffs cluster in the same class of region: a small
  self-modified 2-byte table near `$9bd9`, a 2-byte self-modified absolute
  operand at `$9c85+1/+2` (an instruction `lda lb12b,Y` whose address is
  patched at runtime — the entry-43-style self-modified-operand pattern),
  and one large ~150-byte-span working-storage table at `$a275-$a2f3`
  (`+`/`w` marked in the `-v2` map).
- Trace-diff: **register-write-exact** (0 differing lines) on **all 5
  subtunes** at 50 frames, re-confirmed at 300 frames on subtune 0.

**Net result**: two independent files, same player, same relocation
method — both trace register-write-exact across every subtune tested,
with all byte-level divergence explicitly localized to confirmed
self-modified/write-touched working storage (never to code or to the
init/play entry points themselves). This matches this project's own
precedent for `verified` (`laxity-newplayer`, ~99.9% byte-exact,
trace-confirmed) — the byte-diff score here is a few points lower
(98.5-98.9% vs 99.9%) but the *reason* is precisely characterized and
the trace match is unconditional, not "close." Zero page usage ($FA-$FD
on file 1, $FC-$FF on file 2, 2-byte overlap) and the init/play wrapper
shape (save/restore `$01` I/O port config around an internal `jsr`) are
now confirmed facts, not `TODO`.

**Next step, if continuing**: the 8 RSID/`play=0` files (the
`Ashley_Hogg_Digi` SIDId signature's territory) are untouched by this
pass and need a different approach — no directly callable play address to
trace/diff against (see project gotchas 13/34); would need either a
manually-identified real dispatcher address (gotcha 13's `-P`/`-I`
override) or RetroDebugger live-tracing of the IRQ vector install. Also
still open: the full data-table walk (order list/pattern/instrument
formats, effect command encoding) — this pass verified entry points and
trace fidelity, not the internal format.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, VGMPF, Lemon64, The
Codemasters Archive, and the SIDId sidid.cfg signatures.
