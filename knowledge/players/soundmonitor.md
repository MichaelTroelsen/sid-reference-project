# SoundMonitor

```json
{
  "id": "soundmonitor",
  "name": "SoundMonitor",
  "aliases": ["SoundMonitor/MusicMaster_1", "SoundMonitor/MusicMaster_2", "SoundMonitor/MusicMaster_TMM", "SoundMonitor/DrumMaker2", "SoundMonitor/BeatBox/KarlXII", "SoundMonitor/Karl_XII", "SoundMonitor/Syndicate/BB", "SoundMonitor/Digitronix", "SoundMonitor/ReD_Packed", "Soundmonitor", "MusicMaster (replay routine)"],
  "authors": ["Chris Hülsbeck"],
  "released": "1986 (v1.0 Oct 1986; v1.1 1986; v1.3 1987)",
  "status": "verified",
  "platform": "Native C64 SID editor. Published as a type-in listing in 64'er magazine 10/1986 (so its source was public by design; formal license unclear).",
  "csdb_release": 59929,

  "memory": {
    "load_address": "Editor init at $1000 (SYS 4096). Standalone replay ('MusicMaster') player CODE is byte-identical and fixed at $C000-$CE26 across every real file checked here (no relocation, unlike Hubbard/DMC-family players) — only the song DATA load address varies per rip ($7000/$A000 seen). Player uses a small amount of fixed low-RAM workspace at $02C0-$02D4 BELOW the song's own load address (see quirks — this tripped up SIDdecompiler's relocation and is the one real gotcha in reproducing this verification).",
    "zero_page": "CONFIRMED via disassembly: $A5-$AC = 4 live pointer pairs (one per voice + a shared one) used by the per-voice step fetchers/row-header loader — matches the disassembly's own `za5..zac` constants used throughout. $02C0-$02D4 (non-ZP but fixed low-RAM workspace, not part of the loaded song payload): $02C0 tempo/step scratch, $02C1 row index, $02C3 playing flag, $02C6 a second init flag, $02CF-$02D4 per-voice transpose accumulators.",
    "layout": "CONFIRMED by grepping the disassembly's own labels at these exact addresses: per voice v in {0,1,2} — BAR_LO=$A000/$A400/$A800, BAR_HI=$A100/$A500/$A900 (both tables hold `<label`/`>label` pointers into the bar-pattern data, e.g. voice 0's bars point at $B180), NOTE-transpose=$A200/$A600/$AA00 (direct per-row byte values, not pointers), SOUND-transpose=$A300/$A700/$AB00; shared ROW_HDR_LO=$AC00/ROW_HDR_HI=$AD00 (pointer table into row-header records, e.g. $BF00); SOUND (instrument) table base=$AE00, 24 bytes/record (first record's bytes read $81,$20,$20,$00,$00...); FREQ tables at $C3B7 (repeating low-octave values, e.g. all $01) and $C416 (chromatically increasing, $16,$27,$39,$4B,$5F,$74,$8A...). Song-specific per-file constants: ROW_COUNT=$C010, ROW_START=$C011."
  },
  "entry": {
    "init": "$C000. CONFIRMED by disassembly (two real files, slightly different builds): `LDA #$01 / STA $C00F / RTS` (Fun_Mix.sid) or `LDA #$01 / STA $C00F / LDA #$00 / STA $02C6 / RTS` (Soundmonitor_Projekt_1.sid) — just sets a 'ready' flag at $C00F (+ clears $02C6 in the fuller build), no IRQ install here.",
    "play": "Two real entry points exist in the SAME player image, both CONFIRMED by disassembly + trace: (1) `$C475` — the direct per-frame dispatcher: `JSR $CA17` (ZP save/swap housekeeping) → check $C00F flag → `JSR $C90D` (init/reset) → 4 always-run per-frame engines (`$C034` glide, `$C1BE` vibrato, `$C25F` filter-cutoff sweep, `$C31B` pulse/triangle-PWM) → `JSR $CB65` arpeggio → tempo-divider decrement ($CD80/$CD81) → on underflow, per-voice step fetch. Used by files whose own game/demo context already drives the player each frame (e.g. Fun_Mix.sid, Dance_at_Night_remix.sid — both PSID play=$C475). (2) `$C020` (immediately after a `SEI` at $C01F) — a bank-switch wrapper: `LDA $01 / STA` (save port) `/ LDA #$36 / STA $01` (map I/O in, hide BASIC/KERNAL) `/ JSR $C475 / ` restore `/ RTS`. Used by standalone MusicMaster-only rips (e.g. Soundmonitor_Projekt_1.sid, PSID play=$C020) that can't assume the caller already set up the bank. A third variant seen adjacent in memory (~$C01C, ending `SEI/LDA #$C0/STA $0315/LDA #$1F/STA $0314/CLI/RTS`) installs a raster IRQ vector at $0314/$0315 — for tunes that run standalone off their own interrupt rather than a PSID-style per-frame call."
  },
  "speed": "Per-ROW tempo, CONFIRMED by disassembly: a row-header record's byte2 reloads a tempo divider at $CD81 → decremented each frame at $CD80; on underflow the step/row advances. Uses arpeggio (not real polyphony) to simulate chords beyond the SID's 3 voices.",

  "data_format": {
    "order_list": "A ROW table is the top-level song structure (see `memory.layout` — ROW_HDR_LO/HI at $AC00/$AD00 point to per-row header records); walked by an 8-bit row index ($02C1) compared against the per-song ROW_COUNT ($C010) constant, starting at ROW_START ($C011). (Cross-referenced against SIDM2's independent from-scratch RE of this same player, docs/players/SOUNDMONITOR.md — not re-derived byte-by-byte here, but every address it names was independently found to exist with plausible content in this project's own disassembly, see Verification.)",
    "patterns": "Per-voice BAR = LENGTH x (ctrl, data) byte pairs, one pair per step, all 3 voices stepping synchronously off the one shared tempo divider. ctrl=$00 = rest, $80 = tie/hold, else = note (bit7 = hard retrigger vs legato).",
    "instruments": "24-byte SOUND records at $AE00 + instr*24 (table base independently confirmed in this project's own disassembly). Per SIDM2's parser: byte0=waveform, byte1=AD, byte2=SR, byte4=pulse width (nibble-swapped), byte8=release waveform, byte9=effect flags ($10=PWM enabled), byte12/13=vibrato depth/control.",
    "wavetable": "No separate wave table — waveform comes from the instrument's own byte0, plus an arpeggio semitone-offset table embedded inside the row-header record itself when the arpeggio flag is set.",
    "pulsetable": "No separate pulse table — pulse width is driven by the per-frame $C31B engine (confirmed present in this project's disassembly at that exact address) using per-instrument up/down reload counts.",
    "filtertable": "Global (not per-instrument) resonant filter; a per-frame cutoff-sweep dispatcher at $C25F (confirmed present in this project's disassembly at that exact address) writes $D415/$D416 each frame."
  },
  "effects": {
    "encoding": "Two independent per-step mechanisms: (1) a data-byte flag bitfield on every (ctrl,data) step pair (instrument select + glide/arpeggio/transpose-suppress flags), and (2) a separate per-ROW per-voice direct-value transpose table (not a stream command).",
    "commands": {
      "data & $0F": "instrument index (0-15)",
      "data & $10": "glide/portamento — chromatic walk from the previous note to this one",
      "data & $40": "arpeggio on — reads an 8-byte semitone-offset 'chord bank' appended to the row-header record",
      "row-transpose table ($A200/$A600/$AA00, confirmed by address in this project's disassembly)": "per-row, per-voice note transpose",
      "row-sound-transpose table ($A300/$A700/$AB00, confirmed by address)": "per-row, per-voice instrument transpose"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SEVEN MORE 'SoundMonitor/*' VARIANT TAGS CLAIMED AS ALIASES (2026-07-16), 345 files: /DrumMaker2 (176), /BeatBox/KarlXII (74), /Syndicate/BB (38), /Digitronix (24), /Karl_XII (23), /ReD_Packed (6), /MusicMaster_TMM (4). These read as UNCARDED purely because this card hadn't claimed them, while it already claimed /MusicMaster_1 and /MusicMaster_2 — the identical 'SoundMonitor/<variant>' shape. BE PRECISE ABOUT WHAT THIS CLAIMS: it asserts THIS CARD IS THE RIGHT CARD FOR THOSE TAGS (they are SoundMonitor sub-signatures), NOT that the distinctions are understood. WHAT DrumMaker2, BeatBox, Syndicate/BB, Digitronix or ReD_Packed ACTUALLY DENOTE IS UNDOCUMENTED — variant packers, drum add-ons, or per-group builds are all plausible; none is established. Nothing in the KB mentions any of them. TODO if anyone cares to look.",
    "'MusicMaster' is NOT a separate rival tool — it is SoundMonitor's own detachable replay routine (Hülsbeck wrote the MusicMaster playback routine before the editor; songs saved with it play independently). The DeepSID tag 'SoundMonitor/MusicMaster' lumps one engine + its detachable player. CAUTION: there is an UNRELATED 1983 'MusicMaster' (Chris Metcalf & Marc Sugiyama, Compute! #37) — do not conflate.",
    "HISTORICALLY LOAD-BEARING: SoundMonitor is the acknowledged ancestor of the tracker paradigm — Karsten Obarski used it on the C64 and reused its layout for the Amiga Ultimate Soundtracker (1987), adding samples and a 4th channel. German Wikipedia calls it 'gewissermaßen den Ursprung' of tracker software. (Cross-platform lineage — not wired as a C64 graph edge.)",
    "Published as a 64'er magazine type-in listing (10/1986, 'Listing des Monats'), originating from a 64'er music competition Hülsbeck won with 'Shades'. So the 6502 source was public by design — a rare case where the listing itself is the primary technical source (license/rights nonetheless unclear).",
    "Downstream C64 derivative: 'Rockmonitor' (adds keyboard control + samples). The Dutch USA-Team's 'Rock Monitor' (this project's DUSAT/RockMon tag) is also a SoundMonitor derivative — a lineage to wire when RockMon is carded.",
    "Tags _1/_2 plausibly track versions, but the exact mapping is UNKNOWN. 1,922 files / 229 composers — consistent with being the most popular C64 editor of the late-1980s European scene.",
    "VERIFIED 2026-07-19: reassembling this player's disassembly requires relocating to the memory map's own reported touched-memory 'Start' address (here $02C0, decimal -a704), NOT the PSID header's own load address (here $A000/$7000 depending on file) — SIDdecompiler's `-a` places the LOWEST TOUCHED address overall (across the whole traced memory, including the player's fixed sub-load-address workspace at $02C0-$02D4) at the given target, not the payload's own load address. Passing -a<decimal load address> here silently produces a PC-wraparound-corrupted reassembly (real code ends up spread across two disjoint, wrong address ranges after a 64K wraparound) that still 'looks' plausible-length. This is a bigger-magnitude version of a previously-seen 1-byte case (see agent lessons_learned entry 18/27) — same underlying mechanism, much larger discrepancy here (~0x9D40 bytes) because this player's workspace sits far below its song data's load address rather than 1 byte above it.",
    "The player has (at least) THREE distinct play-callable entry points sharing one code image: $C475 (direct per-frame dispatcher, used when the caller already manages banking/IRQ), $C020 (a SEI-adjacent bank-switch wrapper starting one byte after a SEI at $C01F, used by standalone rips), and a third routine near $C01C that installs its own raster-IRQ vector at $0314/$0315 for fully standalone playback. Different real HVSC files declare different ones as their PSID play address depending on how the rip was made — this is NOT evidence of different player versions, just different call conventions baked into the same fixed player image."
  ],
  "sources": [
    "C64-Wiki (DE): https://www.c64-wiki.de/wiki/Soundmonitor (versions, SYS $1000/$C000 addresses, 64'er publication)",
    "Wikipedia (DE): https://de.wikipedia.org/wiki/Soundmonitor (MusicMaster-before-editor; tracker-origin claim)",
    "CSDb release: https://csdb.dk/release/?id=59929",
    "Soundtracker origins (Obarski/SoundMonitor lineage): https://xavier.borderie.net/blog/2021/09/22/soundtracker-origins-part-1-where-in-the-world-is-karsten-obarski/",
    "Primary technical source (not yet read here in full — this verification pass used direct disassembly instead): the original 64'er 10/1986 type-in listing (pp. 53-64)",
    "Cross-referenced (not the primary source of this card's verification, but consistent with every address independently checked here): SIDM2 project's own from-scratch RE of this player (docs/players/SOUNDMONITOR.md, sidm2/soundmonitor_parser.py), reached via a TDZ-knowledge-base scratch note at C:/Users/mit/.tdz-c64-knowledge/temp/sound-monitor.md — a DIFFERENT card (id `sound-monitor`) for the same player, built against an 11-file Fun_Fun/Michael Trolle corpus.",
    "This project's own verification pass (2026-07-19): SIDdecompiler + 64tass disassembly/reassembly of 3 real HVSC files, byte-diffed and sidm2-sid-trace register-write-diffed against the originals — see Verification section.",
    "Local dataset: 1,922 files tagged SoundMonitor/MusicMaster (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

SoundMonitor is a native C64 SID editor by **Chris Hülsbeck**, published as a
**type-in listing in 64'er magazine 10/1986**. It is one of the most important
tools in SID history: the most popular C64 editor of the late-1980s European
scene (1,922 files / 229 composers here) and the **acknowledged ancestor of the
tracker paradigm** — Karsten Obarski reused its layout for the Amiga Ultimate
Soundtracker (1987). Its detachable replay routine, **MusicMaster**, is what the
DeepSID tag pairs with it (not a separate tool).

## Quirks & gotchas

See the `quirks` array. Load-bearing: **MusicMaster is SoundMonitor's own
replay routine** (and beware the unrelated 1983 Compute! "MusicMaster"); its
**tracker-ancestor lineage** to Ultimate Soundtracker; that it was a
**published type-in listing**, so the source is public by design (the 64'er
10/1986 listing itself was not read for this pass — direct disassembly of
real files was used instead, see below); and, newly load-bearing for anyone
reproducing this verification, the **SIDdecompiler relocation gotcha**
(reproduce with `-a704`, i.e. decimal for $02C0, not the PSID header's own
load address) and the **three distinct play entry points** sharing one fixed
player image.

## Disassembly notes

**Disassembled/reassembled/traced 2026-07-19** against 3 real HVSC files
(`MUSICIANS/F/Fun_Fun/Fun_Mix.sid`, `MUSICIANS/F/Fun_Fun/Dance_at_Night_remix.sid`,
`MUSICIANS/T/Taxim/Soundmonitor_Projekt_1.sid`). The player's traced memory
footprint always starts at $02C0 (a fixed low-RAM workspace below the song
data's own load address) and ends around $CE26; relocating with
`SIDdecompiler -a704` (not the PSID header's load address) keeps the whole
touched span at its true native addresses with no PC-wraparound corruption
(see `quirks`). Key routines confirmed directly in the reassembled,
byte-exact disassembly: `init` ($C000, sets the $C00F ready flag), `play`
($C475, the direct per-frame dispatcher — `JSR $CA17` ZP housekeeping →
`JSR $C90D` init/reset → `$C034` glide → `$C1BE` vibrato → `$C25F` filter
sweep → `$C31B` pulse/PWM → `$CB65` arpeggio → tempo-divider decrement
$CD80/$CD81), and a second wrapper entry at `$C020` (one byte after a `SEI`
at `$C01F`) that swaps in bank config $36 before calling `$C475` — used by
standalone rips instead of the raw dispatcher. Memory-map addresses named by
SIDM2's independent RE of this same player (a different KB, `sound-monitor`,
reached via a TDZ scratch note — see `sources`) were spot-checked against
this project's own disassembly output and found present with plausible
content at every address checked ($A000/$A100/$A200/$A300/$A400/$AC00/$AD00/
$AE00/$C3B7/$C416) — corroboration, not the primary source of this card's
`verified` status, which rests on this project's own byte-diff/trace-diff.
The 64'er 10/1986 listing itself was not located locally and was not read
for this pass (see `sources` for what was searched).

## Verification

**`status: verified` (2026-07-19).** Disassembled with `SIDdecompiler.exe
-a704 -z -d -c`, reassembled with `64tass`, byte-diffed against the original
PSID payload, and register-write-traced with `sidm2-sid-trace.exe` against 3
real HVSC files:

- `Fun_Mix.sid` (load $A000, init $C000, play $C475): **100.0000% byte-exact**
  (0/11220 diffs) and **trace-exact** (`diff` reports zero difference over 20
  frames of register writes).
- `Dance_at_Night_remix.sid` (load $7000, init $C000, play $C475):
  **100.0000% byte-exact** (0/23546 diffs) and **trace-exact** (20 frames).
- `Soundmonitor_Projekt_1.sid` (load $A000, init $C000, play $C020 — the
  *other* documented entry point, exercising the bank-switch wrapper instead
  of the direct dispatcher): **99.9911% byte-exact** (1/11220 diffs, at
  $C00F only) and **trace-exact** (20 frames). The single differing byte is
  the init routine's own "ready" flag ($C00F) — the true cold-start value is
  $01 (written unconditionally by `init`'s first instruction, confirmed in
  the disassembly), while SIDdecompiler's default trace window baked in a
  later runtime value ($00); since `init` overwrites it every time before
  play ever reads it, this is dead workspace, not a real divergence — exactly
  the self-modified-flag pattern this project has seen before (see agent
  lessons_learned entries 10/16/17/20), and the trace-exact result over 20
  frames confirms it plays identically regardless.

All ZP, memory-layout, data-format, and effect-encoding TODOs are now filled
in the `memory`/`data_format`/`effects` JSON fields above, each address
independently spot-checked against this project's own disassembly output
(not just copied from the cross-referenced SIDM2 writeup — see Disassembly
notes). This meets the project's `verified` bar (register-write match, with
the one byte-level divergence explicitly localized and explained, consistent
with `laxity-newplayer`'s ~99.9% precedent).

Exact byte-level patch table (durable, not scratchpad): `knowledge/players/reconstructions/soundmonitor.md`.

## Sources

See the `sources` array — C64-Wiki, German Wikipedia, CSDb, the Soundtracker-
origins writeup, the original 64'er 10/1986 listing (still not read — see
Disassembly notes), the cross-referenced SIDM2 project writeup (reached via a
sibling TDZ knowledge-base card, itself not this project's KB), and this
project's own 2026-07-19 disassembly/byte-diff/trace-diff pass. No SIDId
entry.
