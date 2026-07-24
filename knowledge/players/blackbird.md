# Blackbird (Lft)

```json
{
  "id": "blackbird",
  "name": "Blackbird",
  "aliases": ["Blackbird/LFT"],
  "authors": ["Linus Åkesson (lft) / Kryo"],
  "released": "2017 (v1.0, Datastorm 2017, 12 Feb 2017); v1.1; v1.2, 19 Jan 2018",
  "status": "in-progress",
  "platform": "Native C64 tracker/editor — runs and is composed on the C64 itself (\"Native / C64 emulator\" per DeepSID players.json), not a cross-platform editor. Freeware.",
  "csdb_release": 161554,

  "memory": {
    "load_address": "No single fixed address — the resident playroutine is fully relocatable. Birdcruncher (the export/crunching tool bundled with Blackbird) takes the player's load address via its '-a' commandline option and the 16-byte zero-page base via '-z'; per-file addresses would still need a PSID-header read of a specific exported .sid. Source: Blackbird User's Guide rev.2, Ch.7 'Exporting with Birdcruncher', p.40 (https://hd0.linusakesson.net/files/BlackbirdUsersGuide.pdf)",
    "zero_page": "16 consecutive bytes, base relocatable via Birdcruncher's '-z' option; DEFAULT base is $E0 (the manual states the sync byte normally sits at $ED, and Appendix A's source gives that sync byte as zp_base+$0D, i.e. zp_base=$E0 by default). Documented offsets from Appendix A (rev.2, p.44-45): zp_bufs=zp_base+$00 (a word, reused at +$07 and +$0E for the 3 voices' unpack buffers), zp_inptr=zp_base+$02 (word, input-stream pointer), zp_trwpos=zp_base+$04, zp_pendoob=zp_base+$05, zp_master=zp_base+$06, zp_filtpos=zp_base+$09, zp_tempo=zp_base+$0A, zp_extsync=zp_base+$0D (external-sync/syncpoint byte, cleared by init, used by trackmo host code). Offsets $0B-$0C not identified in the reproduced source excerpt. Source: Blackbird User's Guide rev.2, Appendix A + Ch.7.1.1 'Syncpoints', pp.40,44-45.",
    "layout": "The distributed/streamed player is: [+0] 'jmp initroutine' (3 bytes) then [+3] the playroutine entry ('the playroutine is located three bytes into the resident part' — User's Guide Ch.7.3 'Distributed output', p.41). The resident part also holds the instrument/effect/wave/filter tables (external symbols fxtable, wavetable, filttable, ins_ad, ins_sr, ins_wave, ins_filt referenced in Appendix A) and the note/effect datastream is read from 'streamstart' via zp_inptr. Runtime format is NOT the on-editor track/pattern layout: per Ch.6/7 the exported song is re-encoded as a long run-length-encoded per-voice sequence, the three voices' sequences interleaved into one combined stream, then LZ-compressed with a 'copy-with-transpose' primitive (User's Guide Ch.7, p.38-39) — this is an editor-format vs. runtime-format split, same caution as noted for Laxity NewPlayer. Total resident size 9-12 pages depending on instrument/effect count used (User's Guide Ch.1.1, p.5 / DeepSID players.json 'player_size': 'Less than 1400 bytes')."
  },
  "entry": {
    "init": "Offset +0 of the resident part ('jmp initroutine', 3-byte trampoline before the +3 play entry). Per Appendix A's printed source: sets zp_inptr = streamstart, clears zp_extsync/zp_pendoob/zp_filtpos and all 25 ($18) SID registers, sets the filter cutoff MSB to $80, initializes the 3 voices' unpack-buffer pointers/timers, then calls the playroutine once in a 'prepare' mode before returning. Source: Blackbird User's Guide rev.2, Appendix A, p.55.",
    "play": "Offset +3 of the resident part (12 cycles/bytes of jsr/rts overhead per the manual's own accounting). Called once per frame; a per-frame dispatch on zp_master selects between voice-unpack ('Prepare1/2/3') and the main 'execute' path that reads the fx/wave/filter tables and every voice's note stream. Manual gives an exact cycle budget: Prepare1=1093, Prepare2=1125, Prepare3=1134, Execute=1125 cycles, all within the 'guaranteed maximum 18 rasterlines' bound quoted by DeepSID/HVSC. Source: Blackbird User's Guide rev.2, Appendix A, pp.44-48.",
    "note": "Whether the per-frame call is CIA-timer-driven or raster/VBI-driven is NOT stated in the reproduced manual text found — left TODO rather than guessed."
  },
  "speed": "1x per DeepSID players.json ('speeds': '1x', 'digi': 'No') and confirmed by the manual's own cycle accounting (max 1134 cycles / 18 rasterlines per call, including realtime LZ decompression of the note stream) — Blackbird User's Guide rev.2, Appendix A p.45-48, Ch.1.1 p.5. CIA-vs-raster trigger mechanism not stated in the material found; left TODO. A compact resident streaming player (9-12 pages) exists for embedding playback in other C64 programs (trackmos), per the HVSC news announcement and User's Guide Ch.7.3.",

  "data_format": {
    "order_list": "On-editor authoring format uses up to 255 tracks/'sequences' up to 32 rows each with 'same size sequence stacking' (DeepSID players.json) — but the EXPORTED/runtime format abandons this entirely: Birdcruncher re-encodes the song as one interleaved, LZ-compressed byte stream per Ch.7 of the User's Guide (see `memory.layout`). No song/order-list table address documented in the excerpts read.",
    "patterns": "Runtime note stream per voice is variable-length RLE, not a fixed pattern grid; see the note/effect byte encoding in `effects.encoding` (Blackbird User's Guide rev.2, Appendix A p.44-45, comment block 'Encoding (in order of appearance)').",
    "instruments": "48 instruments (DeepSID players.json 'instruments': '48'). Appendix A's source references four parallel per-instrument arrays: ins_ad (attack/decay), ins_sr (sustain/release), ins_wave (waveform), ins_filt (filter-routing byte) — indexed by instrument number, external symbols only (table base addresses not given in the excerpt read). Two 'hard-restart' workaround modes are shown explicitly in the code (comments 'Hard-restart 1'/'Hard-restart 2', both stated to avoid a SID 'decay rate bug'), consistent with DeepSID's 'hard_restart': 'Three modes' field. Source: Blackbird User's Guide rev.2, Appendix A pp.53-54.",
    "wavetable": "'wavetable' and 'fxtable' are external tables read once per frame by the 'everyframe' routine ('Code that runs on each frame. Reads the fx-, wave- and filter tables.') to compute per-voice arpeggio/frequency offsets, using an interpolated frequency lookup (freq_lsb/freq_msb tables). DeepSID players.json: 'arpeggio': 'Wave table (relative) + Chord table'. Source: Blackbird User's Guide rev.2, Appendix A p.47-49.",
    "pulsetable": "DeepSID players.json: 'pulsating': 'Programmable'. Not independently confirmed in the Appendix A excerpts read (no pulse-specific code section was located); left as attributed TODO.",
    "filtertable": "'filttable' is a same-per-frame-read external table (see wavetable entry) driving zp_filtpos-indexed filter sweeps. DeepSID players.json: 'filtering': 'Programmable'; 'vibrato': 'Can be simulated'. Source: Blackbird User's Guide rev.2, Appendix A p.47."
  },
  "effects": {
    "encoding": "The runtime note/effect byte-stream encoding is given verbatim as a comment block in Appendix A (User's Guide rev.2, p.44-45, 'Encoding (in order of appearance)'): $00-$7F = Note (LSB is a delay-bit; at most one of Note/Gate-off/Legato/Instrument per row-slot); $80 = Gate off; $81 = Legato; $83-$B2 = Instrument select; $B8-$C7 = Delay (low 4 bits); $C9-$F8 = Arpeggio; $F9-$FF = Out-of-band data (voice 3 only — used for syncpoints/song-structure signalling per Ch.7.1.1/7.3).",
    "commands": {
      "$00-$7F": "Note (per Appendix A; LSB used as a delay-bit)",
      "$80": "Gate off (per Appendix A)",
      "$81": "Legato (per Appendix A)",
      "$83-$B2": "Instrument select (per Appendix A)",
      "$B8-$C7": "Delay, low 4 bits (per Appendix A)",
      "$C9-$F8": "Arpeggio (per Appendix A)",
      "$F9-$FF": "Out-of-band data, voice 3 only (per Appendix A)"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The author's own page frames Blackbird as a consolidation, not a from-scratch design: \"For some time, I've been making my C64 music using hacked-together cross-platform tools. Here the various features of those tools have been brought together into a polished native tracker.\" No specific prior tool is named with a CSDb id or a Player-ID tag of its own, so this is recorded as a quirk, NOT asserted as a `derives_from` edge — there is nothing concrete to point the edge at.",
    "TWO different CSDb release ids are in play for this family, same pattern as other cards in this KB: DeepSID's curated players.json cites csdb_id 161554 ('Blackbird 1.2', 19 Jan 2018), while SIDId's sidid.nfo cites reference https://csdb.dk/release/?id=153555 ('Blackbird 1.0', 12 Feb 2017). Both confirmed via CSDb as legitimate releases of the same tool at different versions; this card uses the DeepSID-curated (later) id as `csdb_release`, per the same convention used in music-shop.md.",
    "DeepSID's players.json spec box (developer, csdb_id, zero_pages, cpu_time, track_system, patterns, instruments, arpeggio/pulsating/filtering/hard_restart fields) is a curated third-party description, not a disassembly done for this card — every field sourced from it is recorded as a hedged TODO with attribution, per this project's Tier 3 rule.",
    "'Only the player source' (DeepSID players.json 'source_code' field) — i.e. the distributed zip is understood to include the compact resident streaming-player's assembly source (for embedding playback in other programs), NOT the full tracker/editor's own source. No explicit license text was located on the author's site or in web search for this streaming-player source; treat as unstated/unconfirmed, same caution as odintracker.md.",
    "CONFIRMED (upgrade from prior pass's hedge): the playroutine genuinely uses undocumented/illegal 6502 opcodes — Appendix A's printed source contains `lax` (LAX/LAA, undocumented LDA+LDX) and `sbx` (SBX/AXS, undocumented compare-and-decrement-X) instructions directly, e.g. `lax zp_master` in the main dispatch and `sbx #7` used repeatedly for the per-voice 7-byte stride. This matches (and now sources properly) a repeated web-search claim that could not be pinned to a primary citation on the first pass; the primary source is the User's Guide itself, not a forum post. Source: Blackbird User's Guide rev.2, Appendix A, pp.44-53.",
    "Re-researched (2026-07-24): the Blackbird User's Guide PDF (rev.2) turns out to reproduce the COMPLETE playroutine assembly source in Appendix A (~1500 lines), plus a full chapter (Ch.7) on the Birdcruncher export/crunching tool. This is genuine public documentation of runtime facts (zero-page map, entry-point structure, note/effect byte encoding, hard-restart workarounds, cycle-budget accounting) — enough to move `status` from `stub` to `in-progress` per this project's Tier 3 boundary rule (\"a public source repo plainly documents a runtime fact\"). It is still NOT independently reassembled or traced through `sidm2-siddump`/`mcp-c64`, so `verified` remains out of reach; several fields (fixed table base addresses, pulsetable specifics, CIA-vs-raster trigger) were not stated in the excerpts read and stay TODO rather than inferred from the surrounding code.",
    "Birdcruncher (the C64-side export/crunching tool, distributed as C source for UNIX-like systems + a win32 binary, per the User's Guide Ch.7) is the ONLY source distributed with the package per DeepSID's 'source_code': 'Only the player source' field — this now reads consistently with the manual's own description of what's in the zip (Birdcruncher's C source + the printed asm listing), not the full on-C64 editor GUI's own source. No explicit license text was located in the manual or on the author's site for either the Birdcruncher source or the printed playroutine listing; still treat as unstated/unconfirmed, same caution as odintracker.md.",
    "Local dataset: 40 files tagged 'Blackbird/LFT' across only 3 composers, and one of those — Lft himself, the tool's author — accounts for 37 of the 40 (92.5%); the remaining 3 files split between Freqvibez (2) and Rytone (1). This is an extremely concentrated usage pattern, consistent with a personal/showcase tool with a polished manual and real releases but almost no adoption beyond its own author (contrast e.g. GoatTracker's broad composer spread).",
    "A SEPARATE, bare 'LFT' tag (no 'Blackbird/' prefix) also exists in this dataset and now has its own card, knowledge/players/lft.md — 18 files, all by Lft, all dated 2001-2014 (pre-Blackbird), each with a different load/init/play address. It is very likely the uncredited referent of this card's 'hacked-together cross-platform tools' quote below, but that link is NOT asserted as a formal edge in either card — see lft.md's quirks for the reasoning.",
    "VERIFICATION ATTEMPTED (2026-07-24): CONFIRMED tooling blocker on both available disassembly/trace tools, exactly as anticipated from prior fame.md/virtuoso.md experience — the playroutine's illegal opcodes (`lax`, `sbx`) are not properly emulated. `SIDdecompiler.exe -a4096 -z -d -c -v2` on Toy_Rocket.sid floods 'Unimplemented opcode: cb' 30,000 times and ends with 'TraceNode pairs: 0' (nothing captured); `sidm2-sid-trace.exe` on the same file reports INIT 'done' but 0 SID writes over 20 frames and its own self-check flags the run 'untraceable'. Reproduced identically on a second, independent file (Reminiscence.sid, a different player-build variant, load $a000). This is a genuine, structural blocker — no trace-diff is achievable for this player with the tools available in this project, regardless of reconstruction quality. Full detail: knowledge/players/reconstructions/blackbird.md.",
    "Despite the trace-diff blocker, a STATIC byte-level reconstruction was still possible and was carried out: the Appendix A source was manually transcribed into 64tass (`.cpu \"6502i\"` for illegal-opcode support), assembled, and byte-diffed directly against two real files' payloads (SIDdecompiler was not usable as the starting point here, since it can't get past the illegal opcodes either — this reconstruction started from the manual's own printed source instead). Result: 99.8438% (1278/1280 bytes) byte-exact match of the FIXED playroutine code on BOTH Toy_Rocket.sid and Glyptodont.sid, once the 9 genuinely per-song external table addresses (fxtable/wavetable/filttable/fx_start/ins_ad/ins_sr/ins_wave/ins_filt/INS_RESTART/INS_RESTART2) were read directly out of each real file (not guessed) rather than left as placeholders. The only 2 bytes NOT matching on either file are the `jmp initroutine` operand itself, whose true value depends on a per-song data-segment size the manual doesn't document a formula for (left TODO, not guessed). Separately, the actual init routine has 6 bytes of extra zero-initialization not shown in the appendix's printed excerpt (same signature on both files) — a small, genuine, still-open discrepancy between the printed v1.0 source and what real exports actually ship. Full byte-level detail, including the exact per-file external addresses read: knowledge/players/reconstructions/blackbird.md.",
    "NEW FINDING (2026-07-24): reading just the 6 bytes at each tagged file's own PSID play address (no disassembly needed) splits the 37 tagged files into two distinct player-build signatures: 28 files ('PAT_A') match the Appendix A v1.0 source transcribed above byte-for-byte at the entry trampoline; 7 files ('PAT_B' — A_Computer_in_My_Backpack, Lunatico_Note, Lunatico_Side_1, Lunatico_Side_2, Perfectly_Well-Adjusted, Reminiscence, To_Die_For) show a reordered trampoline (`lax`/`sbx`/`bmi` instead of `lax`/`beq`/`sbx`) — presumably a later v1.1/v1.2 revision, consistent with the two known later CSDb releases, but NOT independently reconstructed this pass (out of scope: the appendix documents only v1.0). 2 files (Your_Heptacular_Eyes.sid, Platform_Hopping.sid) match neither pattern and weren't investigated further — Platform_Hopping.sid's own PSID play address reads as $0000, worth checking whether it's even a normal Blackbird PSID export before assuming anything about it."
  ],
  "sources": [
    "sidid:Blackbird/LFT (name 'Blackbird 1.0', author 'Linus Åkesson (lft)', released '2017 lft', reference https://csdb.dk/release/?id=153555) — data/sidid.json",
    "DeepSID players.json curated entry 'Blackbird' (developer Lft, start_year 2017, end_year 2018, csdb_id 161554, platform 'Native / C64 emulator', distribution 'Freeware', source_code 'Only the player source', docs 'Built-in + PDF manual', zero_pages '16; can be user defined', player_size 'Less than 1400 bytes', cpu_time 'Max 18 rasterlines', instruments '48', patterns '255; each up to 32 rows', track_system 'Same size sequence stacking', track_cmds 'A word (XXYY) by each sequence', arpeggio/pulsating/filtering/hard_restart/vibrato fields, note_input 'Protracker') — data/players.json",
    "Author's official page (description, versions, downloads): https://www.linusakesson.net/software/blackbird/index.php",
    "Blackbird User's Guide (PDF manual): https://hd0.linusakesson.net/files/BlackbirdUsersGuide.pdf",
    "CSDb release 161554 ('Blackbird 1.2', Lft/Kryo, 19 Jan 2018): https://csdb.dk/release/?id=161554",
    "CSDb release 153555 ('Blackbird 1.0', Lft/Kryo, 12 Feb 2017): https://csdb.dk/release/?id=153555",
    "HVSC news announcement (streaming player size/CPU cost, version-history notes): https://www.hvsc.c64.org/download/files/news/20170624.txt",
    "Local dataset: 40 files tagged 'Blackbird/LFT' across 3 composers (verified by aggregating data/composers/*.json)",
    "Blackbird User's Guide rev.2 Appendix A ('The playroutine' — complete printed assembly source, pp.44-55) and Chapter 7 ('Exporting with Birdcruncher', pp.38-42): https://hd0.linusakesson.net/files/BlackbirdUsersGuide.pdf (fetched and text-extracted via pdftotext for this pass)",
    "Chordian's 'Comparison of C64 Music Editors' blog post, incl. lft's own comment thread confirming stream-from-disk / no-subtune behaviour: https://blog.chordian.net/2018/02/24/comparison-of-c64-music-editors/",
    "Lemon64 forum threads checked, no new facts found: https://www.lemon64.com/forum/viewtopic.php?t=80737 and https://www.lemon64.com/forum/viewtopic.php?t=74382",
    "pouet.net production entry (community comments, no technical content): https://www.pouet.net/prod.php?which=68894",
    "demozoo.org production entry (release metadata): https://demozoo.org/productions/168138/",
    "This pass's own verification work (manual Appendix A -> 64tass transcription, byte-diff against real HVSC payloads, SIDdecompiler/sidm2-sid-trace.exe blocker confirmation): knowledge/players/reconstructions/blackbird.md",
    "Real files used this pass: MUSICIANS/L/Lft/Toy_Rocket.sid, MUSICIANS/L/Lft/Glyptodont.sid, MUSICIANS/L/Lft/Reminiscence.sid (HVSC_85-all-of-them collection)"
  ]
}
```

## Overview

Blackbird is a 2017-2018 native C64 music tracker/editor by Linus Åkesson
(Lft) of Kryo, released at Datastorm 2017 and distributed as freeware with a
polished ~50-page PDF user's guide. The author describes it as a
consolidation of features from his own earlier "hacked-together cross-platform
tools" into one native C64 tracker, rather than a derivative of any other
scene player. In the local dataset it is a small, extremely concentrated tag:
40 files across only 3 composers, 92.5% of them by the author himself — a
polished, well-documented tool that nonetheless saw almost no adoption beyond
its own creator.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the author's own "brought
together into a polished native tracker" framing is NOT enough evidence for a
`derives_from` edge (no named prior tool with an id exists to point at); **two
different CSDb release ids** are in play (161554 for v1.2 per DeepSID,
153555 for v1.0 per SIDId); the distributed archive includes Birdcruncher's
C source plus the printed playroutine listing but **not the full C64 editor's
own source**, and its license is unstated; the playroutine's use of
**undocumented 6502 opcodes** (`lax`, `sbx`) is now confirmed directly from
the printed source, not just repeated web commentary; the runtime data format
is a **completely different shape from the on-editor track/pattern format**
(RLE-per-voice + interleaving + LZ compression, not a fixed pattern grid); and
usage in this collection is **almost entirely the author's own** (37/40
files).

## Disassembly notes

No SIDdecompiler-based disassembly was possible for this card (confirmed
this pass — see Verification below): the playroutine's illegal opcodes
(`lax`, `sbx`) make SIDdecompiler's emulator loop on "Unimplemented opcode"
without ever producing a usable trace. Instead, this pass worked the other
direction: the Blackbird User's Guide (rev.2) reproduces the **complete
playroutine assembly source** in Appendix A (roughly pp.44-55 of the PDF),
which was manually transcribed into 64tass syntax and assembled directly
(no decompiler step needed for the code that's genuinely documented). All
Tier 3 facts in the `json` block above are transcribed from that printed
source with page citations, not inferred. What is still genuinely unknown:
the fixed base addresses of `fxtable`/`wavetable`/`filttable`/`ins_*` (given
only as external symbols in the excerpt — though this pass DID read their
real per-file values directly out of two actual files, see
`reconstructions/blackbird.md`), pulse-table specifics, whether the
per-frame call is CIA- or raster-triggered, and — newly found this pass —
what 6 bytes of extra zero-initialization the real init routine performs
that the printed excerpt doesn't show. None of these are guessed; all left
as `TODO` with the exact gap named.

## Verification

**Not verified — `status: in-progress`, and a genuine tooling blocker now
confirms `verified` is out of reach with the tools available in this
project, not merely "not yet attempted".** This pass ran the full
disassemble/reassemble/trace-diff pipeline for the first time on this card:

- **Tooling blocker (confirmed, 2 independent files)**: both
  `SIDdecompiler.exe` and `sidm2-sid-trace.exe` fail to emulate this
  player's illegal opcodes (`lax`/`sbx`, present in the very first
  instructions of the play routine). SIDdecompiler produces
  `TraceNode pairs: 0`; sidm2-sid-trace.exe's own self-check reports the
  file "untraceable" (INIT completes but 0 SID writes over 20 frames).
  RetroDebugger was not used (forbidden this run — parallel-batch
  constraint). **No trace-diff is achievable for this player with this
  project's current tooling, on any file** — this is the actual, specific
  blocker, not a euphemism for "didn't get to it."
- **Static byte-level reconstruction (done instead, since trace-diff was
  blocked)**: manually transcribed Appendix A's printed source into 64tass
  and byte-diffed the reassembly against two real HVSC files' payloads:
  **99.8438% (1278/1280 bytes) byte-exact** on both `Toy_Rocket.sid` and
  `Glyptodont.sid`, with the only 2 non-matching bytes being the `jmp
  initroutine` operand (whose true value depends on undocumented per-song
  segment sizing — left TODO). Full byte-level detail, including every
  per-file external address read directly from the real files (not
  guessed): `knowledge/players/reconstructions/blackbird.md`.
- Identity/provenance facts (author, release chain/versions, both CSDb
  release ids, platform, distribution, composer-usage concentration) are
  unchanged from the prior pass — confirmed from SIDId's `sidid.nfo`,
  DeepSID's curated `players.json`, the author's own site/manual, CSDb, and
  the HVSC news archive.

This is a genuinely stronger `in-progress` than before (real reconstruction
fidelity numbers plus a confirmed, precisely-characterized tool blocker,
where before there was only cited documentation) but does not meet this
project's `verified` bar, which requires an actual trace-diff — and that
step is now confirmed blocked, not merely undone.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID `players.json`,
the author's official page and PDF manual (now cited by chapter/page for
Appendix A's playroutine source and Chapter 7's Birdcruncher export docs),
two CSDb release pages (161554, 153555), the HVSC news announcement, and the
local per-composer file aggregation (`knowledge/COVERAGE.md` /
`data/composers/*.json`). Additional pages checked this pass with no new
citable facts: Lemon64 threads t=80737 ("Blackbird or other music editors?")
and t=74382 (general 6502 illegal-opcode discussion, no Blackbird mention),
pouet.net prod 68894, demozoo.org production 168138, and Chordian's
"Comparison of C64 Music Editors" blog post (blog.chordian.net) — the latter
confirmed via lft's own comment that Blackbird streams from disk and does not
support subtunes, consistent with the existing DeepSID data. No Forum64.de
thread specifically about Blackbird was found via web search.
