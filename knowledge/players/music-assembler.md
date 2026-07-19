# Music Assembler

```json
{
  "id": "music-assembler",
  "name": "Music Assembler",
  "aliases": ["Music_Assembler", "Music-Assembler", "MA"],
  "authors": ["Marco Swagerman (MC)", "Oscar Giesen (OPM)"],
  "released": "1989 (V1.0, Feb 1989; developed Nov 1987 – Feb 1989)",
  "status": "verified",
  "platform": "Native C64 SID tool by The Dutch USA-Team. Closed classic tool (no source/license located).",
  "csdb_release": 94388,

  "memory": {
    "load_address": "No fixed load address — the replay module is relocatable per-game/per-rip. Observed at $1000 (Andreas Stremler's Quix_preview.sid) and $6000 (Active's 4_U_2_C.sid) in two independently-ripped HVSC files disassembled 2026-07-18.",
    "zero_page": "$FA-$FD (4 bytes; SIDdecompiler labels them zfa/zfb/zfc/zfd) used as an indirect pointer register pair — `(zfa),Y` addressing during init's per-voice table read. CONFIRMED IDENTICAL in both files disassembled.",
    "layout": "CONFIRMED (2026-07-18) via SIDdecompiler.exe + 64tass reassembly of 2 independent HVSC rips: module+$00 = JMP init (3 bytes), module+$03 = JMP play (3 bytes) — a standalone external call-table for use outside the PSID/HVSC convention. The true PLAY routine entry is at module+$21 (matches the PSID header's own play address in both files); the true INIT routine entry is at module+$48 (matches the PSID header's own init address in both files). These two offsets ($21/$48) are IDENTICAL across both independently-ripped composer files, strong evidence this is the fixed internal layout of the shared replay routine rather than coincidence. Bytes module+$06 through module+$20 (26 bytes) are NOT yet characterized (not reached by either file's trace) — TODO. Init also builds a 3-entry (one per voice) pointer table from a fixed lo/hi byte pair (labelled l14b9/l14bc in the Quix disassembly) and reads each voice's data indirectly via `(zfa),Y` — this looks like a genuine per-voice track/pattern pointer table, but the exact format was not decoded in this pass (see data_format TODOs)."
  },
  "entry": {
    "init": "module+$48 (offset from wherever the replay is loaded) — confirmed in both disassembled/reassembled files; always matches that file's own PSID header init address.",
    "play": "module+$21 (offset from wherever the replay is loaded) — confirmed in both disassembled/reassembled files; always matches that file's own PSID header play address."
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO (Amiga .MA sibling format uses position lists — indicative only, not the C64 replay)",
    "patterns": "TODO (Amiga .MA sibling uses 'tracks')",
    "instruments": "TODO (Amiga .MA sibling has instruments + sample info/data — MA supports digi/samples)",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "LINEAGE (the genuinely useful find): SIDId's signature database (Cadaver's sidid.cfg) tags VoiceTracker (1991) and Music_Mixer (1991) as 'Editor based on the Music Assembler player' — so MA's replay/packed format was reused by at least those two later C64 editors. Those aren't carded yet, so it's noted here rather than wired as a graph edge.",
    "CORRECTION to a claim floated during research: the 'based on the Music Assembler player' note is from SIDId, NOT from SID-Wizard's docs (the SID-Wizard 1.4/1.9 manuals have zero mentions of Music Assembler). Do not draw an MA↔SID-Wizard edge.",
    "The Dutch USA-Team's earlier tool was Rock Monitor (a SoundMonitor derivative with an added digi-drum routine) — so this project's separate 'DUSAT/RockMon' tag is by the same team and predates MA. A lineage worth wiring when RockMon is carded.",
    "An Amiga '.MA' module format shares the name and is a related but SEPARATE format from the C64 SID replay (playable by NostalgicPlayer); don't use Amiga-side structure as authoritative for the C64 player.",
    "6,127 files across 352 composers — the 2nd-most-used uncarded player. A 'v1.4' is mentioned on one forum but uncorroborated by CSDb (TODO).",
    "DISASSEMBLY GOTCHA (2026-07-18): the naive SIDdecompiler.exe relocation (-a set to the PSID's own load address) produces a near-total false mismatch (~7-8% byte match) against the real payload for this player. The reason: the on-disk module begins with a ~33-byte ($0-$20) run-stub (a 6-byte JMP-init/JMP-play call table plus unidentified bytes) that SIDdecompiler's default trace never visits and silently drops from its output, so everything after gets compacted forward by exactly that many bytes. Fix: relocate to the file's own PSID PLAY address instead (-a<decimal play address>), which lands the recovered code back at its true original addresses (confirmed: the 'init' label then reassembles to exactly the PSID init address in both files tested) and raises the match to ~98.8%. JC64dis (found locally at C:/Users/mit/Downloads/jc64dis-win64/win64/example/MusicAssembler.dis, a gzip-compressed binary project file, not plaintext) ships an example project for this exact player built from a file (`MC_01.sid`, Marco Swagerman's own) not present in this local HVSC copy — not used this pass, but a lead if JC64dis itself (also present locally as JC64dis.exe / the Java jar) is run to export readable source."
  ],
  "sources": [
    "CSDb release (authors, dates, 28 example SIDs): https://csdb.dk/release/?id=94388",
    "SIDId signature comment (VoiceTracker / Music_Mixer 'based on the Music Assembler player') — via deepsid_dl/sidid.nfo (Cadaver's sidid.cfg)",
    "Dutch USA-Team history: https://amiga.cafe/forum/main-forum/aan-de-bar/24653-dutch-usa-team-music-assembler ; Rock Monitor V5 https://csdb.dk/release/?id=10632",
    "NostalgicPlayer MA agent (Amiga .MA format structure — sibling, not the C64 replay): https://github.com/neumatho/NostalgicPlayer/tree/master/Source/Agents/Players/MusicAssembler",
    "JC64dis ships example 'Music Assembler player' .dis disassembly projects — a public RE starting point: https://iceteam.itch.io/jc64dis",
    "sidid:Music_Assembler (authors MC & OPM, 1989, The Dutch USA-Team, CSDb 94388)",
    "Local dataset: 6,127 files tagged Music_Assembler (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Music Assembler is a native C64 SID editor by **Marco Swagerman (MC)** and
**Oscar Giesen (OPM)** of **The Dutch USA-Team**, released February 1989 after
15 months of development. It's the second-most-used uncarded player here
(6,127 files / 352 composers) and was influential enough that later C64 editors
(**VoiceTracker**, **Music_Mixer**) were built on its player, per SIDId's
signature notes. The team's earlier tool, **Rock Monitor** (a SoundMonitor
derivative), is the same lineage as this project's separate `DUSAT/RockMon` tag.

## Quirks & gotchas

See the `quirks` array. The load-bearing item is the **lineage**: MA's replay
was reused by VoiceTracker and Music_Mixer (a real, SIDId-sourced edge to wire
when those are carded) — and importantly, the "based on the Music Assembler
player" note is **SIDId's, not SID-Wizard's** (a mix-up worth not repeating).
Also: the **Amiga `.MA` format is a separate sibling**, not the C64 replay.

## Disassembly notes

**Done (2026-07-18).** Disassembled two independent HVSC rips with
`SIDdecompiler.exe`, reassembled with `64tass`, byte-diffed against the real
PSID payload, and traced both original and reassembly with
`sidm2-sid-trace`. See `Verification` below for the full result — the
memory/entry fields above are no longer `TODO`. Two leads not pursued this
pass: the Amiga `.MA` structure (position lists/tracks/instruments+samples,
still only indicative, not authoritative for the C64 replay), and JC64dis
itself — it ships an example project for this exact player
(`.../jc64dis-win64/win64/example/MusicAssembler.dis`, found locally, a
gzip-compressed binary project file rather than plaintext) built from
`MC_01.sid` (Marco Swagerman's own file, not present in this local HVSC copy).
Running JC64dis (also present locally, both a `.exe` and a Java jar) to
export that project as readable source is the most promising next step for
decoding the still-`TODO` `data_format` fields (order list / patterns /
instruments), since a per-voice pointer table was seen but not decoded this
pass (see `memory.layout`).

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13).** Traced a real HVSC
Music_Assembler `.sid` (load $C000, init $C048, play $C021, 163 register
writes / 50 frames) — the replay runs. Note in hindsight: init-play offset
($C048-$C021 = $27) already matched the pattern confirmed below.

**RECONSTRUCTION VERIFIED (2026-07-18) — `status: verified`.** Disassembled
two independent HVSC rips by two different composers with `SIDdecompiler.exe`,
reassembled with `64tass`, byte-diffed against the real PSID payload, then
traced both the original `.sid` and the reassembled `.prg` with
`sidm2-sid-trace` and diffed the CSVs directly.

- **Files used**: `MUSICIANS/T/The_Flying_Dutchman/Quix_preview.sid` (Andreas
  Stremler, load $1000, init $1048, play $1021) and
  `MUSICIANS/A/Active/4_U_2_C.sid` (load $6000, init $6048, play $6021).
- **Key gotcha found**: relocating `SIDdecompiler.exe` to the PSID's own
  *load* address (the workflow's normal default) produces a near-total false
  mismatch — only **7.3%** (Quix) / **8.5%** (4_U_2_C) of bytes match. Root
  cause: the real on-disk module opens with a ~33-byte ($00-$20) run-stub
  (a 6-byte `JMP init`/`JMP play` call table for standalone execution, plus
  ~26 unidentified bytes) that SIDdecompiler's own trace never reaches and
  silently omits from its output, collapsing every subsequent address forward
  by exactly that amount.
- **Fix**: relocate to the file's own PSID **play** address instead
  (`-a<decimal play address>`, e.g. `-a4129` for Quix, `-a24609` for 4_U_2_C).
  This lands the recovered code back at its true original addresses — the
  reassembled `init` label resolves to exactly `$1048`/`$6048` respectively,
  matching each file's own PSID header exactly — and raises the byte-diff to
  **98.88% (Quix, 27 of 2412 bytes differ)** and **98.77% (4_U_2_C, 27 of 2204
  bytes differ)**. Remaining diffs in both are small, scattered, single-byte
  (occasionally 3-5 byte) clusters at fixed addresses (e.g. `$6082`-`$6090`,
  `$60ca`-`$60e9`, `$6142`-`$6145` for 4_U_2_C) — consistent with a handful of
  data-table entries (likely pulse-width/frequency tables) the disassembler's
  trace pass didn't fully resolve, not code or entry-point errors.
- **Trace-diff result**: **Quix_preview.sid is an EXACT register-write match**
  — `diff` of the original vs. reassembled CSV over 40 traced frames shows
  zero differences (only the trivial "Loaded: <filename>" banner line
  differs). **4_U_2_C.sid has a small, localized divergence**: 2 extra
  register writes (`osc2_pw_hi`, `osc2_pw_lo`) and different frequency values
  at frame 1, traceable directly to the `$6082`-`$6090` byte-diff region above
  — confirms the byte-level finding at the register-write level rather than
  contradicting it.
- **New confirmed memory-map facts** (previously all `TODO`, now filled in
  above): the run-stub/play/init offset structure (module+$00/$03/$21/$48) is
  IDENTICAL across all three HVSC files examined across this and the prior
  session (Quix $1000, 4_U_2_C $6000, and the 2026-07-13 file at $C000, whose
  $27 init-play gap already matched) — strong, reproducible evidence this is
  the fixed internal layout of the shared Music Assembler replay routine, not
  per-file coincidence. Zero-page usage `$FA`-`$FD` is also identical in both
  files disassembled this pass.
- **Honest scope**: `data_format` (order list / patterns / instruments /
  wavetable / pulsetable / filtertable) and `speed` remain `TODO` — a per-voice
  pointer table was found in `init` (3 lo/hi pointer pairs, one per voice, read
  via `(zfa),Y`) but its exact record format was not decoded this pass. The
  ~1.2% remaining byte divergence (isolated data-table values) was not fully
  chased down to a specific table identity either — see the JC64dis lead in
  `Disassembly notes` for the most promising next step.

Exact byte-level patch table (durable, not scratchpad): `knowledge/players/reconstructions/music-assembler.md`.

## Sources

See the `sources` array — CSDb release, SIDId's lineage note, Dutch USA-Team
history, the NostalgicPlayer Amiga-format agent, and the JC64dis disassembly
projects. This pass additionally used: `SIDdecompiler.exe` + `64tass.exe` +
`sidm2-sid-trace.exe` against
`MUSICIANS/T/The_Flying_Dutchman/Quix_preview.sid` and
`MUSICIANS/A/Active/4_U_2_C.sid` from the local HVSC collection, and confirmed
JC64dis (`jc64dis-win64`/Java jar) and its bundled `MusicAssembler.dis`/
`musicAssembler_.dis` example projects are present locally at
`C:/Users/mit/Downloads/jc64dis-win64/` (not yet opened/exported this pass).
