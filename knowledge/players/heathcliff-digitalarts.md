# Audio Assembler (Heathcliff/DigitalArts)

```json
{
  "id": "heathcliff-digitalarts",
  "name": "Audio Assembler",
  "aliases": ["Heathcliff/DigitalArts"],
  "authors": ["Rene Lergner (\"Heathcliff\") / Focus (Netherlands)"],
  "released": "1989-90 (Focus, in-house); source publicly released via CSDb 2012",
  "status": "in-progress",
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
    "A public, readable ACME assembler source file exists on the tool's own CSDb release (see sources) — this is why memory/entry/data-format fields above are filled rather than TODO, per this project's Tier 3 rule allowing source-documented facts with citation. No independent register-trace verification has been run; `status` stays `in-progress`, never `verified`."
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
    "Local dataset: 67 files tagged Heathcliff/DigitalArts across 4 composers (No-XS 44, Vincent Voois 19, Gerard Hultink 2, Pilot 2) — data/composers/*.json aggregation"
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

No original disassembly was performed — none was needed. A public ACME
assembler source file is attached to the tool's own CSDb release
(`audio_assembler_v16.04.1.asm`, CSDb 112794) and was read directly for this
card: it contains the real jump table ($1000 play/reset/sfxinit/init), the
`zp = $fe` pointer convention, the raster-IRQ install code, and byte-level
comments for every data table (instruments, waveform, pulse, filter,
arpeggio). Saved to the research scratchpad, not committed to the repo.

## Verification

Not run through `mcp-c64`/`sidm2-siddump` — no register-write trace was taken
against a real `.sid` from this family. All memory/entry/data-format facts
above are sourced from reading the public assembler source directly (see
`sources`), which is why `status` is `in-progress` rather than `stub` — but
per project rules this can never become `verified` without an actual traced
reconstruction.

## Sources

See the `sources` array — SIDId, the CSDb release (with user comments), four
CSDb scener/group pages establishing the Rene Lergner / Focus / Digital Arts
/ Vincent Voois / No-XS relationships, and the public ACME source file read
directly.
