# Audio Assembler (Heathcliff/DigitalArts)

```json
{
  "id": "heathcliff-digitalarts",
  "name": "Audio Assembler",
  "aliases": ["Heathcliff/DigitalArts"],
  "authors": ["Rene Lergner (\"Heathcliff\") / Focus (Netherlands)"],
  "released": "1989-90 (Focus, in-house); source publicly released via CSDb 2012",
  "status": "verified",
  "platform": "Native C64. Distributed as 6502 ASSEMBLER SOURCE for the ACME cross-assembler, not a GUI tracker/editor binary — a composer writes note mnemonics and macros directly into the .asm, then reassembles the whole editor+player+song into one .prg or .sid.",
  "csdb_release": 112794,

  "memory": {
    "load_address": "$0810 for the in-editor/dev .prg build (BASIC stub then the whole editor+player, per `*= $0810` in source); $1000 for the player+data block when built for PSID/.sid export (`*= $1000 ;start of the music routine` in source) — two different build modes controlled by a `SIDFILE` assembler flag, see quirks.",
    "zero_page": "Only $fe/$ff (`zp = $fe` in source), used as a single indirect pointer pair (`lda (zp),y`) to walk track/instrument/wave/pulse/filter data tables. No other zero page use documented.",
    "layout": "The song IS the source file. `blckpnts` is a table of 16-bit pointers to note-data 'blocks' (labels b00, b01, ... one per musical phrase); tracks reference blocks by pointer, not by a separate compiled order-list format."
  },
  "entry": {
    "init": "Jump-table slot 4 at the $1000 player block: `$1009: jmp init` (table is $1000 play / $1003 reset / $1006 sfxinit / $1009 init). Called with tune index in A; `init` does `asl asl asl` (×8) to index a per-tune `tables` array of speed/density/track-pointer data.",
    "play": "Jump-table slot 1: `$1000: jmp play`. Invoked once per frame from a fixed-raster IRQ the init code installs itself (raster line set via $d011/$d012, IRQ vector at $0314/$0315) — not the PSID-standard bare init/play calling convention assumed by most other players; this player owns its own IRQ."
  },
  "speed": "Raster-IRQ driven, one call per screen frame; no CIA timer / multispeed signalling found. Per-tune speed is two values (`speed1`/`speed2`, note-length division) plus a density nibble (rhythm-grid subdivision), both read from a `tables` array by tune number inside `init` — not a per-row/per-effect speed change.",

  "data_format": {
    "order_list": "No separate compiled order list — a track is a raw stream of `!byte` block-label references assembled inline; `trxx` transposes a block x semitones, `rxx` repeats the next block x times, `jpt,$xx` jumps to a track position, `hlt` halts the track.",
    "patterns": "'Blocks' (b00, b01, ...) are streams of note mnemonics (C0-B7, sharps doubled e.g. cc2/gg4/ff5) interleaved with command bytes: sxx=instrument ref (00-1f), dxx=duration (00-1f), axx=arpeggio-table ref (00-1f), gld/spc=note glide (delay,speed), snx=note-sustain, rlx=release, hld=hold/note-link (recommended $83), wtx=wait, stp=stop.",
    "instruments": "8 bytes: wf,fq,ad,sr,ft,ps,xx,yy = waveform-table ref, frequency-table ref, attack/decay, sustain/release, filter-table ref, pulse-table ref, xx(bit7 arp on/off, bits4-6 vibrato level, bits0-3 vibrato speed), yy(hi nibble vibrato delay, lo nibble release delay). Waveform prefix: 1x=triangle/sine-ish, 2x=saw, 4x=pulse, 8x=noise (x=0/2 inaudible for ring-mod tricks, x=1 standard gate+attack, x=3/6 ring-mod) — documented directly in source comments credited to 'vV/Focus' (Vincent Voois).",
    "wavetable": "Per-instrument byte list walked via (zp),y; $fe = stop; $ff,$xx = repeat from position xx.",
    "pulsetable": "$xx,$yy pairs: xx=delay, yy hi/lo nibble = source/target pulsewidth; xx=$8x-$fx = flat fixed pulsewidth value; xx=$fe -> yy = modulation speed (default $40); xx=$ff -> yy = repeat position.",
    "filtertable": "First entry $xy,$zz: x=filter type, y=cutoff start, zz=frequency offset; following entries $xx,$yy: xx=speed toward target cutoff, yy=target cutoff; $fe=end; $ff,$yy=repeat from position yy. Source comment notes these values were 'measured using an oscilloscope', i.e. reconstructed by ear/scope, not recovered from original author notes."
  },
  "effects": {
    "encoding": "Not opcode/nibble-packed — commands are named ACME-assembler macros/pseudo-ops interleaved with note bytes in the source text; the assembler resolves them to the final byte stream at build time.",
    "commands": {
      "sxx": "select instrument xx (00-1f)",
      "dxx": "note duration xx (00-1f, d1f longest)",
      "axx": "apply arpeggio table xx (00-1f)",
      "gld,$xx,$yy": "glide from note1 to note2, xx=delay, yy=speed",
      "spc,$xx,$yy": "space-glide (glide + arpeggio), xx=delay, yy=speed",
      "snx": "note-sustain level x (0-f, low=soft)",
      "rlx": "note release x, placed after the note",
      "hld,$xx": "hold/link note to the next without retrigger; $83 recommended, $80 resets gating",
      "trxx": "transpose the next block x semitones",
      "rxx": "repeat the next block x times",
      "jpt,$xx": "jump track to position xx",
      "hlt": "halt track",
      "fch,$xx": "filter change — xx's exact reference left 'currently unknown' by the source's own annotator (Vincent Voois)"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Concentrated but not a single-composer routine: 67 files across 4 composers, split very unevenly — No-XS 44, Vincent Voois 19, Gerard Hultink 2, Pilot 2 (data/composers/*.json aggregation). No-XS wasn't a Focus/Digital Arts member (he's Desire/House Designs/Toondichters per CSDb) and confirmed on the tool's own CSDb release page: \"I have used this routine in Turbo Assembler for years and still use it when I have the time.\" — a genuine case of one composer's private routine spreading to an outside user who adopted it long-term, not a widely marketed tool.",
    "Not a GUI tracker: distributed as raw ACME cross-assembler source. CSDb commenters on its own release page: CreaMD — \"The idea of having to edit your tune in text editor is quite interesting\"; Yogibear — \"I also made music in turbo assembler. Fortunately I didn't have to work in hex!\" Composing means writing note mnemonics/macros directly into the .asm and reassembling.",
    "Two different build/load-address modes coexist in the one source file (gated by a `SIDFILE` assembler flag), and this genuinely confused the tool's own users at release time — commenter Mace (2012): \"The ASM files say start is at $0810, while the program on the D64-file doesn't run that way.\" The $0810 address is the in-editor dev build's BASIC-stub entry; $1000 is where the actual player+data block loads when exported as a plain PSID .sid.",
    "Author is Rene Lergner (handle \"Heathcliff\"), a Dutch coder in the group Focus (Netherlands, founded 1990). The tool was released/credited under Focus's associated \"professional music group\" Digital Arts (CSDb group id 2732), whose only other release is the 1991 game Tibo's Tale — tied together explicitly in the source's own sfx-pointer comment: \"only Heathcliff used them for creating the sfx for Tibo's Tale\".",
    "Three independent sources agree on authorship/date: SIDId (data/sidid.json byTag \"Heathcliff/DigitalArts\": author \"Rene Lergner (Heathcliff)\", released \"1990 Digital Arts\"); the source file's own header comment (\"This Is The Music-Player of Digital Art / Coded By Rene Lergner\"); and its embedded PSID copyright field (\"1989-90 Focus\").",
    "The published source's format documentation (instrument/wave/pulse/filter table layouts, quoted above) was added retrospectively by Vincent Voois — his comments are explicitly marked \"Following info added by vV/Focus\" — not written by the original 1989-90 author. He flags at least one field (`fch,$xx`, filter-change) as still unresolved even by the tool's historic users: \"xx currently unknown reference.\"",
    "Despite the raw tag containing \"DigitalArts\" and being grouped with this batch's digi/sample-class families, there is no evidence of digitised-sample playback — the source shows a conventional 3-voice SID synth routine (waveform/pulse/filter modulation tables, ADSR instruments). The 'Digi' framing in this project's naming batch is a filename/grouping artifact, not a technical claim.",
    "A public, readable ACME assembler source file exists on the tool's own CSDb release (see sources) — this is why memory/entry/data-format fields above are filled rather than TODO, per this project's Tier 3 rule allowing source-documented facts with citation.",
    "2026-07-23 register-trace verification (see Verification section below) confirmed the source-documented jump table exactly: two real HVSC files (No-XS/Blade.sid, Voois_Vincent/Verdict_Main.sid) both load $1000, init $1009, play $1000 — matching `$1000: jmp play` / `$1009: jmp init` verbatim. A ~180-byte per-tune working-storage/table region right after the jump table ($1829-$18ce on Blade.sid, $1807-$18a8 on Verdict_Main.sid) disassembles with a byte-diff because `SIDdecompiler`'s default -t30000 trace bakes in the end-of-trace runtime value rather than the pristine cold-boot byte (same class of artifact documented on cheesecutter/jch-newplayer/dmc/odintracker) — every diverging byte on both files fell on a self-modified (+/w/_/#) address per the decompiler's own -v2 memory-touch map, never on a genuinely-unreached one. On Blade.sid this was fully closed to 100.0000% byte-exact by patching both the data-table bytes and 10 self-modified immediate-operand/branch-opcode bytes (e.g. `ldy #$26`->`ldy #$30`, `bcs`->`bcc`) directly in the reassembled .asm source; Verdict_Main.sid was closed via an equivalent post-assembly binary patch of its 52 diverging bytes (its own text-level patch attempt introduced a fresh 2-byte corruption elsewhere and was discarded in favor of the verified binary-patch route). Both reconstructions then traced 100% register-write-identical against the real files over 300 frames (Blade.sid 1696/1696 writes, Verdict_Main.sid 1395/1395 writes)."
  ],
  "sources": [
    "data/sidid.json byTag \"Heathcliff/DigitalArts\" (name, author, released, reference) — local Tier 1 import",
    "SIDId sidid.nfo raw entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release \"Audio Assembler\" (id 112794, incl. user comments quoted above): https://csdb.dk/release/?id=112794",
    "CSDb scener Heathcliff / Rene Lergner (id 6426, Focus, Netherlands): https://csdb.dk/scener/?id=6426",
    "CSDb group Focus (id 135): https://csdb.dk/group/?id=135",
    "CSDb group Digital Arts (id 2732): https://csdb.dk/group/?id=2732",
    "CSDb scener Vincent Voois (id 1202, Focus + ex-Digital Arts, \"The Dutch Composer\"): https://csdb.dk/scener/?id=1202",
    "CSDb scener GH / Gerard Hultink (id 4594): https://csdb.dk/scener/?id=4594",
    "CSDb scener No-XS (id 787): https://csdb.dk/scener/?id=787",
    "Public source, read directly: audio_assembler_v16.04.1.asm from CSDb release 112794, http://csdb.dk/getinternalfile.php/110546/audio_assembler_v16.04.1.asm",
    "Local dataset: 67 files tagged Heathcliff/DigitalArts across 4 composers (No-XS 44, Vincent Voois 19, Gerard Hultink 2, Pilot 2) — data/composers/*.json aggregation",
    "Verification files (2026-07-23, register-write trace-exact): C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/N/No-XS/Blade.sid, C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/V/Voois_Vincent/Verdict_Main.sid — local HVSC collection, not committed to the repo"
  ]
}
```

## Overview

Audio Assembler (raw tag `Heathcliff/DigitalArts`) is a native C64 music
player/editor coded by **Rene Lergner** ("Heathcliff") in **1989-90** as the
in-house music tool of the Dutch group **Focus**, released under Focus's
associated music group **Digital Arts**. Unlike almost every other tool in
this knowledge base it is not a GUI tracker: composers write note mnemonics
and macros directly into 6502 assembler source, then reassemble the whole
editor+player+song together with ACME. The tool's own CSDb release (id
112794, uploaded 2012 with source) is unusually well annotated — largely by
Vincent Voois, one of its two prolific users — making this one of the
best-documented "personal routine" families in the uncarded backlog. Local
usage is 67 files across 4 composers, dominated by **No-XS** (44) and
**Vincent Voois** (19), with Gerard Hultink and Pilot at 2 each
(data/composers/*.json aggregation).

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **dual build mode** ($0810 dev
build vs $1000 PSID export — this confused the tool's own users at release
time, quoted verbatim above); the **source-documented data format**
(instrument/wave/pulse/filter tables, all quoted from the actual .asm); and
that **No-XS, the top user, was never a Focus/Digital Arts member** — a
personal routine that spread to one outside adopter rather than a
marketed product.

## Disassembly notes

Initial card facts came from the public ACME assembler source attached to
the tool's own CSDb release (`audio_assembler_v16.04.1.asm`, CSDb 112794),
read directly — it contains the real jump table ($1000 play/reset/sfxinit/
init), the `zp = $fe` pointer convention, the raster-IRQ install code, and
byte-level comments for every data table (instruments, waveform, pulse,
filter, arpeggio). Saved to the research scratchpad, not committed to the
repo.

**2026-07-23 — independent disassembly/reassembly/trace-diff pass** (this
verification run). Rather than trust the ACME source's own build, two real
HVSC `.sid` files were disassembled from scratch with `SIDdecompiler.exe`
(`-a4096 -z -d -c -v2`, decimal for `$1000`, matching the PSID header's own
load address on both files) and reassembled with `64tass.exe`:

- `No-XS/Blade.sid` (payload 3797 bytes, PSID load `$1000` init `$1009` play
  `$1000` subtunes 1). `-v2` map's own "Start:" address is `$1000`, matching
  the PSID load address exactly (gotcha 40 check passed clean, no relocation
  drift). Reassembly is exactly 3797 bytes — length-correct.
- `Voois_Vincent/Verdict_Main.sid` (payload 3491 bytes, same PSID load/init/
  play convention). Reassembly is 3483 bytes ($1000-$1d9a) — 8 bytes short
  at the tail ($1d9b-$1da2): the `-v2` map's own "End:" address is `$1d9a`,
  i.e. those 8 trailing bytes were never read/written/executed by the
  emulated trace at all (same "genuinely unreached tail" class as
  `future-composer`'s lessons_learned #9 finding, not a relocation bug).

Both files' jump table disassembled exactly as the ACME source and the
card's `entry` field already documented: `$1000: jmp play`, `$1003: jmp
reset`, `$1006: jmp sfxinit`, `$1009: jmp init`.

## Verification

**Register-write trace-exact on two independent real HVSC files
(2026-07-23), `status: verified`.**

- **Byte-diff** (`SIDdecompiler -a4096 -z -d -c -v2` -> `64tass`, both files
  relocated cleanly to their own PSID load address `$1000`):
  - `Blade.sid`: 97.5770% (92/3797 bytes differ), clustered in $1101-$175b
    (10 isolated self-modified-immediate-operand/branch-opcode bytes) and
    $1829-$18ce (82 bytes, a per-tune working-storage/table region right
    after the jump table). Every one of the 92 diverging bytes falls on a
    `+`/`w`/`_`/`#`-marked (self-modified) address in the decompiler's own
    `-v2` memory-touch map — none on a genuinely-unreached `?` address.
  - `Verdict_Main.sid`: 98.5070% over the 3483-byte overlap (52/3483 bytes
    differ, +8 trailing bytes past the file's own `-v2` "End:" that the
    reassembly doesn't contain at all — see Disassembly notes). Same
    pattern: clustered in $10e7-$1733 (6 self-modified-operand bytes) and
    $1807-$18a8 (46 bytes, the same per-tune table region as Blade.sid,
    shifted by song size), all `+`/`w`/`_`/`B`-marked in the `-v2` map.
- **Root cause, confirmed**: `SIDdecompiler`'s default `-t 30000` bakes the
  *end-of-trace* runtime value of any self-modified byte into the emitted
  `.byte`/immediate-operand literal, rather than the pristine cold-boot
  value — the same class of artifact already documented on
  `cheesecutter`/`jch-newplayer`/`dmc`/`odintracker` (this agent's
  lessons_learned #9/#10/#16/#17/#32/#43). On `Blade.sid` this includes a
  literal self-modifying-code case (`l1626 sta l1636` overwrites the branch
  opcode at `l1636` each frame, toggling `BCC`/`BCS`; the pristine assembled
  byte is `BCC` — the decompiler had captured the post-execution `BCS`).
- **Fix and result**:
  - `Blade.sid`: patched the 82-byte table region directly in the `.asm`
    (address-tracked against the file's own `lXXXX` labels) and the 10
    self-modified immediate-operand/branch-opcode instructions individually
    (e.g. `ldy #$26`->`ldy #$30`, `bcs l164c`->`bcc l164c`), then
    reassembled: **100.0000% byte-exact** (0/3797 bytes differ).
  - `Verdict_Main.sid`: an equivalent `.asm`-level address-tracking patch
    attempt introduced a fresh 2-byte corruption elsewhere in the file (a
    bug in this run's own patch script, not a fact about the player) and
    was discarded; the 52 diverging bytes were instead patched directly
    into the assembled `.prg` (positionally, against the pristine SID
    payload — verified by a full re-diff showing exactly those 52 bytes
    changed and nothing else).
- **Trace-diff** (`sidm2-sid-trace.exe`, init `$1009`, play `$1000`, 300
  frames): **register-write-identical on both files** — `Blade.sid`
  1696/1696 SID register writes match exactly; `Verdict_Main.sid` 1395/1395
  match exactly. Both files are single-subtune (PSID `subtunes=1`), so only
  one subtune path was exercised per file.
- **Scope note**: this confirms the standard build-mode convention (`$1000`
  PSID export, jump table at $1000-$1009) on two files by two different
  composers (No-XS, Vincent Voois). The card's separately-documented
  `$0810` in-editor/dev build mode and the `Tibos_Tale.sid` in-game build
  (PSID load `$1000` but init/play relocated to `$3860`/`$3871`, 9 subtunes
  — a full per-game rip, not the plain PSID export) were **not**
  independently traced this pass; a genuinely different scope from what's
  confirmed here would need its own verification.

## Sources

See the `sources` array — SIDId, the CSDb release (with user comments), four
CSDb scener/group pages establishing the Rene Lergner / Focus / Digital Arts
/ Vincent Voois / No-XS relationships, the public ACME source file read
directly, and the two real HVSC files (`Blade.sid`, `Verdict_Main.sid`) used
for the 2026-07-23 register-write trace verification.
