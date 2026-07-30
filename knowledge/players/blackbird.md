# Blackbird (Lft)

```json
{
  "id": "blackbird",
  "name": "Blackbird",
  "aliases": ["Blackbird/LFT"],
  "authors": ["Linus Åkesson (lft) / Kryo"],
  "released": "2017 (v1.0, Datastorm 2017, 12 Feb 2017); v1.1; v1.2, 19 Jan 2018",
  "status": "verified",
  "platform": "Native C64 tracker/editor — runs and is composed on the C64 itself (\"Native / C64 emulator\" per DeepSID players.json), not a cross-platform editor. Freeware.",
  "csdb_release": 161554,

  "memory": {
    "load_address": "No single fixed address — the resident playroutine is fully relocatable. Birdcruncher (the export/crunching tool bundled with Blackbird) takes the player's load address via its '-a' commandline option and the 16-byte zero-page base via '-z'. CONFIRMED by reading the PSID headers of all 40 tagged files: 36 of 40 load at $1000 (init=$1000, play=$1003), the rest at $0900 (Thus_Spoke_the_PC_Speaker), $3500 (Crank_Crank_Revolution), $5000 (Crank_Crank_Airwolf, Maple_Leaf_Rag) and $A000 (Reminiscence). The PSID init vector always equals the resident block's own base and play always equals base+3. Sources: Blackbird User's Guide rev.2, Ch.7 'Exporting with Birdcruncher', p.40; direct PSID-header reads (2026-07-30 pass).",
    "zero_page": "EXACTLY 16 consecutive bytes, base relocatable via Birdcruncher's '-z' option; DEFAULT base is $E0 — now confirmed from birdcruncher's own source (`Export/source/cruncher.c`, usage text: \"-z --zeropage Set start of zero-page area (16 bytes). Default: e0\"), not just inferred from the manual. Offsets, verbatim from the author's `Export/source/player.s` header block: zp_bufs=zp_base+$00 (three unpack-buffer pointer WORDS at +$00/+$01, +$07/+$08, +$0E/+$0F, addressed with a 7-byte stride via X=0/7/14), zp_inptr=zp_base+$02 (word, input-stream pointer), zp_trwpos=zp_base+$04, zp_pendoob=zp_base+$05, zp_master=zp_base+$06, zp_filtpos=zp_base+$09, zp_tempo=zp_base+$0A, zp_extsync=zp_base+$0D (external-sync/syncpoint byte, cleared by init, used by trackmo host code). RESOLVED (was TODO): offsets +$0B and +$0C are genuinely UNUSED by the playroutine — they are never referenced anywhere in player.s and no indexed access reaches them; they exist only because the block is allocated as one contiguous 16 bytes. Verified against files with zp_base=$E0 (39 files) and $F0 (Reminiscence).",
    "layout": "The resident part is TWO separate segments, not one: `seg_play` = exactly 1280 bytes ([+0] 'jmp initroutine', [+3] the playroutine entry, then the code, then a 256-byte frequency table and a page-aligned pad), and `seg_init` = exactly 86 bytes, placed elsewhere by Birdcruncher (its address is only discoverable from the 'jmp initroutine' operand at base+1/+2). Byte-exact confirmation on 19 real files (2026-07-30 pass); the two sizes are also declared literally in the author's own `Export/source/player.h` (`uint8_t seg_play_data[1280]` / `seg_init_data[86]`). Per-voice working storage (v_pwidth/v_trwpos/v_pendnote/v_pendfx/v_pendins/v_wavemask/v_trtimer/v_fxpos/v_currfx/v_currins/v_basepitch/v_wavepos, 7-byte stride) lives INSIDE seg_play, at roughly +$28C..+$316, and several instruction operands there are self-modified (m_cutoff, m_copyend, m_buf2/m_buf3, m_transp, preparejmp). The instrument/effect/wave/filter tables (fxtable, wavetable, filttable, fx_start, ins_ad, ins_sr, ins_wave, ins_filt), the note/effect datastream base (streamstart) and the three 256-byte unpack buffers (unpackbufs) are all EXTERNAL, per-song addresses that Birdcruncher patches into 30-odd relocation slots — their layout is not fixed by the player. Runtime format is NOT the on-editor track/pattern layout: the exported song is re-encoded as a long run-length-encoded per-voice sequence, the three voices interleaved into one stream, then LZ-compressed with a 'copy-with-transpose' primitive (User's Guide Ch.7, p.38-39) — an editor-format vs. runtime-format split, same caution as noted for Laxity NewPlayer. Total resident size 9-12 pages depending on instrument/effect count used (User's Guide Ch.1.1, p.5 / DeepSID players.json 'player_size': 'Less than 1400 bytes')."
  },
  "entry": {
    "init": "Offset +0 of the resident part ('jmp initroutine', 3-byte trampoline before the +3 play entry). Per Appendix A's printed source: sets zp_inptr = streamstart, clears zp_extsync/zp_pendoob/zp_filtpos and all 25 ($18) SID registers, sets the filter cutoff MSB to $80, initializes the 3 voices' unpack-buffer pointers/timers, then calls the playroutine once in a 'prepare' mode before returning. Source: Blackbird User's Guide rev.2, Appendix A, p.55.",
    "play": "Offset +3 of the resident part (12 cycles/bytes of jsr/rts overhead per the manual's own accounting). Called once per frame; a per-frame dispatch on zp_master selects between voice-unpack ('Prepare1/2/3') and the main 'execute' path that reads the fx/wave/filter tables and every voice's note stream. Manual gives an exact cycle budget: Prepare1=1093, Prepare2=1125, Prepare3=1134, Execute=1125 cycles, all within the 'guaranteed maximum 18 rasterlines' bound quoted by DeepSID/HVSC. Source: Blackbird User's Guide rev.2, Appendix A, pp.44-48.",
    "note": "RESOLVED (was TODO — 'CIA vs raster'): NEITHER. The resident playroutine installs no interrupt of its own — the author's `Export/source/player.s` contains no writes to $0314/$0315, $FFFE/$FFFF, $D01A or any CIA control register, and no SEI/CLI at all; its only hardware writes are to $D400-$D418. Timing is entirely the host's responsibility (a PSID wrapper's own per-frame call, or the trackmo's own IRQ for the distributed/streamed build). Confirmed by grep over the full published source, not inferred."
  },
  "speed": "1x per DeepSID players.json ('speeds': '1x', 'digi': 'No') and confirmed by the manual's own cycle accounting (max 1134 cycles / 18 rasterlines per call, including realtime LZ decompression of the note stream) — Blackbird User's Guide rev.2, Appendix A p.45-48, Ch.1.1 p.5. CIA-vs-raster trigger mechanism not stated in the material found; left TODO. A compact resident streaming player (9-12 pages) exists for embedding playback in other C64 programs (trackmos), per the HVSC news announcement and User's Guide Ch.7.3.",

  "data_format": {
    "order_list": "On-editor authoring format uses up to 255 tracks/'sequences' up to 32 rows each with 'same size sequence stacking' (DeepSID players.json) — but the EXPORTED/runtime format abandons this entirely: Birdcruncher re-encodes the song as one interleaved, LZ-compressed byte stream per Ch.7 of the User's Guide (see `memory.layout`). No song/order-list table address documented in the excerpts read.",
    "patterns": "Runtime note stream per voice is variable-length RLE, not a fixed pattern grid; see the note/effect byte encoding in `effects.encoding` (Blackbird User's Guide rev.2, Appendix A p.44-45, comment block 'Encoding (in order of appearance)').",
    "instruments": "48 instruments (DeepSID players.json 'instruments': '48'). Appendix A's source references four parallel per-instrument arrays: ins_ad (attack/decay), ins_sr (sustain/release), ins_wave (waveform), ins_filt (filter-routing byte) — indexed by instrument number, external symbols only (table base addresses not given in the excerpt read). Two 'hard-restart' workaround modes are shown explicitly in the code (comments 'Hard-restart 1'/'Hard-restart 2', both stated to avoid a SID 'decay rate bug'), consistent with DeepSID's 'hard_restart': 'Three modes' field. Source: Blackbird User's Guide rev.2, Appendix A pp.53-54.",
    "wavetable": "'wavetable' and 'fxtable' are external tables read once per frame by the 'everyframe' routine ('Code that runs on each frame. Reads the fx-, wave- and filter tables.') to compute per-voice arpeggio/frequency offsets, using an interpolated frequency lookup (freq_lsb/freq_msb tables). DeepSID players.json: 'arpeggio': 'Wave table (relative) + Chord table'. Source: Blackbird User's Guide rev.2, Appendix A p.47-49.",
    "pulsetable": "RESOLVED (was TODO): confirmed directly in `Export/source/player.s`. There is no separate pulse TABLE — pulse width is an accumulator: a per-voice 8-bit `v_pwidth` value is advanced each frame by a signed step (`adc v_pwidth,x` / `sta v_pwidth,x`) taken from the wavetable entry, then written to both $D402 and $D403 for that voice (`sta $d402,x` / `sta $d403,x`, i.e. the same byte into PW-lo and PW-hi). The `nopulse`/`postpulse` branch skips it when the wavetable entry has no pulse component. Consistent with DeepSID's 'pulsating': 'Programmable'.",
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
    "CONFIRMED by download (2026-07-30): DeepSID's 'source_code': 'Only the player source' is exactly right, and the source in question is better than the manual's printed appendix. All three released zips (blackbird-1.0.zip / 1.1.zip / 1.2.zip, all still live at hd0.linusakesson.net/files/) contain `Export/source/player.s` — the complete playroutine in xa65 syntax, with a `#if REPEAT` conditional selecting between two build flavours (seg_play/seg_init and seg_rplay/seg_rinit) — plus `player.h` and `rplayer.h`, which hold the two ALREADY-ASSEMBLED 1280+86-byte binary templates as C arrays together with birdcruncher's own relocation functions (`seg_play_reloc` etc.). Those reloc functions are the machine-readable key to the whole format: each is a list of `data[idx] = (sym->NAME + k) & 0xff | >> 8` assignments, so a real .sid's per-song external addresses can be INVERTED straight out of the file rather than guessed. `player.h` and `rplayer.h` are byte-identical across 1.0/1.1/1.2 (md5 c5fb20eb4fcd0ce28c855999abc435ef and 63dfe52e0a43306ef7ead6caf9581e41), i.e. the shipped player binary never changed across the three public releases — the 1.1/1.2 changelog entries are editor/birdcruncher fixes. Still no explicit license text anywhere in the archives; treat licensing as unstated, same caution as odintracker.md.",
    "CONFIRMED (upgrade from prior pass's hedge): the playroutine genuinely uses undocumented/illegal 6502 opcodes — Appendix A's printed source contains `lax` (LAX/LAA, undocumented LDA+LDX) and `sbx` (SBX/AXS, undocumented compare-and-decrement-X) instructions directly, e.g. `lax zp_master` in the main dispatch and `sbx #7` used repeatedly for the per-voice 7-byte stride. This matches (and now sources properly) a repeated web-search claim that could not be pinned to a primary citation on the first pass; the primary source is the User's Guide itself, not a forum post. Source: Blackbird User's Guide rev.2, Appendix A, pp.44-53.",
    "Re-researched (2026-07-24): the Blackbird User's Guide PDF (rev.2) turns out to reproduce the COMPLETE playroutine assembly source in Appendix A (~1500 lines), plus a full chapter (Ch.7) on the Birdcruncher export/crunching tool. This is genuine public documentation of runtime facts (zero-page map, entry-point structure, note/effect byte encoding, hard-restart workarounds, cycle-budget accounting) — enough to move `status` from `stub` to `in-progress` per this project's Tier 3 boundary rule (\"a public source repo plainly documents a runtime fact\"). It is still NOT independently reassembled or traced through `sidm2-siddump`/`mcp-c64`, so `verified` remains out of reach; several fields (fixed table base addresses, pulsetable specifics, CIA-vs-raster trigger) were not stated in the excerpts read and stay TODO rather than inferred from the surrounding code.",
    "Birdcruncher (the C64-side export/crunching tool, distributed as C source for UNIX-like systems + a win32 binary, per the User's Guide Ch.7) is the ONLY source distributed with the package per DeepSID's 'source_code': 'Only the player source' field — this now reads consistently with the manual's own description of what's in the zip (Birdcruncher's C source + the printed asm listing), not the full on-C64 editor GUI's own source. No explicit license text was located in the manual or on the author's site for either the Birdcruncher source or the printed playroutine listing; still treat as unstated/unconfirmed, same caution as odintracker.md.",
    "Local dataset: 40 files tagged 'Blackbird/LFT' across only 3 composers, and one of those — Lft himself, the tool's author — accounts for 37 of the 40 (92.5%); the remaining 3 files split between Freqvibez (2) and Rytone (1). This is an extremely concentrated usage pattern, consistent with a personal/showcase tool with a polished manual and real releases but almost no adoption beyond its own author (contrast e.g. GoatTracker's broad composer spread).",
    "A SEPARATE, bare 'LFT' tag (no 'Blackbird/' prefix) also exists in this dataset and now has its own card, knowledge/players/lft.md — 18 files, all by Lft, all dated 2001-2014 (pre-Blackbird), each with a different load/init/play address. It is very likely the uncredited referent of this card's 'hacked-together cross-platform tools' quote below, but that link is NOT asserted as a formal edge in either card — see lft.md's quirks for the reasoning.",
    "TOOLING BLOCKER, NOW ROUTED AROUND (2026-07-30). The historical blocker was real and still is: `SIDdecompiler.exe -a4096 -z -d -c -v2` on Toy_Rocket.sid floods 'Unimplemented opcode: cb' 30,000 times and ends with 'TraceNode pairs: 0', and `sidm2-sid-trace.exe` / the `sidm2-siddump` MCP report INIT 'done' then 0 SID writes over 20 frames and self-flag the file 'untraceable' (reproduced on Toy_Rocket.sid and, independently, Reminiscence.sid) — neither emulator core implements the `lax`/`sbx` undocumented opcodes this playroutine opens with. What changed is that NEITHER tool is needed. Disassembly is unnecessary because the author ships the playroutine source; tracing goes through this repo's own `scripts/dev/vsid-trace.js` (VICE `vsid`, full 6502 including undocumented opcodes), which traces these files cleanly at ~3,700-5,600 SID writes per 300 frames. RetroDebugger was available and permitted on the 2026-07-30 run but was NOT needed and NOT used. General form worth remembering: an 'untraceable' verdict from the light tracer on a file that plays fine in any emulator is a tool-capability statement, not a file statement — check for illegal opcodes and re-route through VICE before recording a blocker.",
    "SUPERSEDED (2026-07-30) but kept for the methodology lesson: the 2026-07-24 pass hand-transcribed the User's Guide's Appendix A listing into 64tass and reached 99.8438% (1278/1280) on Toy_Rocket.sid and Glyptodont.sid, with 2 residual bytes it could not explain (the `jmp initroutine` operand) and '6 bytes of extra zero-initialization' it read as a discrepancy between the printed listing and real exports. Both were artefacts of working from the PDF rather than from the shipped archive. The `jmp initroutine` operand is simply seg_init's own per-song address, which Birdcruncher chooses and which is recoverable from the file itself; and the 'extra' init bytes are just the parts of seg_init the appendix's printed excerpt elides. Working from `Export/source/player.s` + `player.h`/`rplayer.h` instead closes both to 0 bytes. Lesson: when a printed-in-a-manual listing gets you to ~99.8%, look for the machine-readable original before spending effort explaining the last 0.2%.",
    "EXTERNAL RESULT, SIDM2 (recorded 2026-07-25, left in place for cross-project traceability): SIDM2 reports a completed Blackbird port at 99.96%, 11 of 16 tunes at exactly 100.0%. That figure is not re-derived here and is NOT what this card's `verified` status rests on — the status comes from an independent, local, source-derived reconstruction plus VICE trace-diffs (see Verification). The two results are consistent in shape: both find most-but-not-all files reproducible, which the 2026-07-30 pass can now explain precisely (unpublished pre-2017 and post-2018 player revisions, see the four-builds quirk).",
    "CORRECTED (2026-07-30) — the prior pass's PAT_A/PAT_B guess was backwards. The two entry-trampoline signatures do split the tagged files, but PAT_B (`lax`/`sbx`/`bmi`) is EARLIER, not later. All 7 PAT_B files (A_Computer_in_My_Backpack, Lunatico_Note, Lunatico_Side_1, Lunatico_Side_2, Perfectly_Well-Adjusted, Reminiscence, To_Die_For) carry PSID `released` = 2016, i.e. they predate Blackbird 1.0's public release (Datastorm, Feb 2017) and are pre-release development builds of the player — NOT the 'later v1.1/v1.2 revision' the prior pass assumed. Reading the release year out of each file's own PSID header (offset $56) is what settles this in seconds and should be done before speculating about version order from code shape.",
    "THE 40 TAGGED FILES SPLIT INTO FOUR PLAYER BUILDS BY DATE (2026-07-30, from a byte-diff of every file against both published build flavours). (1) 19 files, PSID released 2017-2021, reproduce the published `player.s` EXACTLY: 11 the plain build (seg_play/seg_init) and 8 the REPEAT build (seg_rplay/seg_rinit). (2) 1 file, Crank_Crank_Revolution (2018), is the REPEAT build with 35 bytes of non-default per-voice working state (see its own quirk). (3) 13 files, PSID released 2022-2026 (plus Hachi_Bitto_Whirlwind, tagged 2018), share ONE consistent UNPUBLISHED post-1.2 revision — their player differs from the published one in a contiguous stretch of engine code roughly seg_play+$CC..+$315 while the trailing 256-byte frequency table and the whole 490-byte tail are untouched, and masking the relocation slots shows all 13 agree with each other to within ~9 bytes. Lft evidently kept developing the player privately after the last public release (Jan 2018). (4) the 7 pre-release 2016 PAT_B files, which are NOT one build but several (227-328 bytes of mutual difference after masking relocation slots).",
    "Crank_Crank_Revolution.sid is a one-file oddity worth knowing about: it is the published REPEAT build, but its exported image carries a RUNTIME-DIRTY snapshot of the player's own per-voice working-storage block instead of the cold-start defaults birdcruncher normally emits — 35 bytes across v_pwidth/v_trwpos/v_pendnote/v_wavemask/v_trtimer/v_fxpos/v_currfx/v_currins/v_basepitch/v_wavepos plus the self-modified operands m_cutoff/m_copyend/preparejmp/copyloop_uv/notransp_uv/poststop. Those bytes are LOAD-BEARING, not dead: a reconstruction built from the source's own defaults diverges from register write #25 onward (4569/4606 writes wrong, cycle drift -19,791), while the identical build with those 35 bytes carried over from the original file traces 4606/4606 exact. This is the mirror image of the usual 'drifted self-modified workspace' trap — here the drift is baked into the SHIPPED FILE, not into a disassembler's post-execution snapshot.",
    "2 further Lft files that a naive tag-count would sweep in are NOT Blackbird exports at all: Your_Heptacular_Eyes.sid (play entry `a0 03 88 10 03 4c…`, no `lax`) and Platform_Hopping.sid (PSID play address literally $0000 — a self-installing build). Neither has the `lax zp_master` entry signature; a one-byte check (`payload[playAddr-loadAddr] == $A7`) separates real Blackbird PSID exports from these cleanly and found exactly 40 across the three composer folders, matching the tag count."
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
    "Real files used this pass: MUSICIANS/L/Lft/Toy_Rocket.sid, MUSICIANS/L/Lft/Glyptodont.sid, MUSICIANS/L/Lft/Reminiscence.sid (HVSC_85-all-of-them collection)",
    "SIDM2 port-status report (2026-07-25, via the SIDM2 project's own native-driver/bin ports table): 'Blackbird / lft -- 99.96%, 11/16 at exactly 100.0'. External result, not re-derived here; see docs/SIDM2-INTEGRATION.md for the joint worklist this feeds.",
    "Local blocker re-confirmation run (2026-07-25): sidm2-siddump MCP trace_sid on MUSICIANS/L/Lft/Toy_Rocket.sid (HVSC_83-all-of-them) -- 0 SID writes over 20 frames, tracer self-reports 'untraceable'.",
    "PRIMARY SOURCE for the 2026-07-30 verification pass: the author's own released archives, downloaded fresh that pass -- https://hd0.linusakesson.net/files/blackbird-1.0.zip, blackbird-1.1.zip, blackbird-1.2.zip. Files used: Export/source/player.s (the complete playroutine, xa65 syntax, with the #if REPEAT conditional), Export/source/player.h and rplayer.h (the two assembled 1280+86-byte binary templates plus birdcruncher's relocation functions; md5-identical across all three releases), Export/source/cruncher.c (the -a/-z option defaults), ChangeLog.txt.",
    "Tooling used for the 2026-07-30 pass: 64tass 1.60.3243 with `.cpu \"6502i\"` (undocumented-opcode support) for assembly; this repo's own scripts/dev/vsid-trace.js (VICE vsid) for register-write tracing. SIDdecompiler.exe and sidm2-sid-trace.exe were NOT used and cannot be; RetroDebugger was permitted but not needed and not used.",
    "Real files reconstructed and traced on 2026-07-30 (all HVSC_85-all-of-them): MUSICIANS/L/Lft/{Toy_Rocket, Glyptodont, Maple_Leaf_Rag, Thus_Spoke_the_PC_Speaker, Dishwasher_Groove, Dithered_Island, Elvendance, Euclid_Was_Here, Fargo, Into_the_Unknown, Revolutions_Delivered, Crank_Crank_Airwolf, Fugue_on_a_Theme_by_D_M_Hanlon, Quintessence, To_Die_For_II, Trinket, Crank_Crank_Revolution}.sid, MUSICIANS/F/Freqvibez/{Arhymetriarchy, Krackenblochen}.sid, MUSICIANS/R/Rytone/Cybernetic_Raven.sid."
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
C source **and the playroutine's own `.s` assembly source plus two
already-assembled binary templates with birdcruncher's relocation tables**,
but **not the full C64 editor's own source**, and its license is unstated;
the shipped player binary is **byte-identical across all three public
releases** (1.0/1.1/1.2), so the changelog's 1.1/1.2 entries are editor and
cruncher fixes, not player changes; **21 of the 40 tagged files were exported
by unpublished player revisions** (one consistent post-1.2 build used
2022-2026, and several pre-1.0 development builds dated 2016) and therefore
cannot be reproduced from any released source; the playroutine's use of
**undocumented 6502 opcodes** (`lax`, `sbx`) is now confirmed directly from
the printed source, not just repeated web commentary; the runtime data format
is a **completely different shape from the on-editor track/pattern format**
(RLE-per-voice + interleaving + LZ compression, not a fixed pattern grid); and
usage in this collection is **almost entirely the author's own** (37/40
files).

## Disassembly notes

**No disassembler was used, and none can be.** The playroutine's illegal
opcodes (`lax`, `sbx`) make SIDdecompiler's emulator loop on "Unimplemented
opcode" without ever producing a usable trace. That does not matter here,
because the author ships the playroutine source: every released archive
(`blackbird-1.0/1.1/1.2.zip`) contains `Export/source/player.s` — the
complete routine, with a `#if REPEAT` conditional selecting the two build
flavours — plus `player.h`/`rplayer.h`, which carry the already-assembled
1280+86-byte binary templates *and birdcruncher's own relocation functions*.
The reloc functions are the key artefact: they are literal lists of
`data[idx] = (sym->NAME + k) & 0xff | >> 8` assignments, so every per-song
external address can be inverted straight out of a real `.sid` instead of
guessed. That is how the 2026-07-30 pass reached 100.0000% byte-exactness on
19 files (see Verification). The manual's Appendix A listing, which the
earlier pass worked from, is a lossy excerpt of the same source.

Fields that were `TODO` after the PDF-only pass and are now **resolved from
the shipped source**: the CIA-vs-raster question (neither — the resident
player installs no interrupt at all), the pulse mechanism (a per-voice
`v_pwidth` accumulator written to both $D402 and $D403, not a table), the
unidentified zero-page offsets +$0B/+$0C (genuinely unused), the two
segments' exact sizes (1280 and 86 bytes), the "extra 6 init bytes"
discrepancy (an artefact of the manual's elided excerpt), and the per-song
external table addresses (recoverable per file, not fixed by the player).

What remains genuinely unknown is a *provenance* gap, not a code-reading gap:
21 of the 40 tagged files were exported by player revisions the author has
never released (one consistent post-1.2 revision, and several pre-1.0
development builds). See "Honest scope / known gap" in Verification.

## Verification

### 2026-07-30 — VERIFIED (source-derived, relocation-tested, trace-exact)

**`status: verified`.** 19 of the 40 tagged files are reproduced
**100.0000% byte-exact** from the author's own published playroutine source,
and all 19 — plus a 20th with a documented 35-byte caveat — additionally pass
a **relocated** register-write trace-diff against the real HVSC file, so the
match is structural rather than tautological.

**Method.** No disassembler was involved and none can be (see the tooling
quirk). RetroDebugger was permitted on this run but was not needed and not
used. Instead:

1. Downloaded all three released archives (`blackbird-1.0/1.1/1.2.zip`) from
   the author's own site. Each contains `Export/source/player.s`, the
   complete playroutine, plus `player.h`/`rplayer.h` holding birdcruncher's
   assembled 1280-byte `seg_play` / 86-byte `seg_init` templates **and its
   relocation functions**. All three releases ship byte-identical templates
   (md5 `c5fb20eb4fcd0ce28c855999abc435ef` /
   `63dfe52e0a43306ef7ead6caf9581e41`), so there is exactly one published
   player binary, not three. The manual's Appendix A listing — the earlier
   pass's starting point — is a lossy excerpt of this same source.
2. Transcribed `player.s` to 64tass (`.cpu "6502i"`), including its
   `#if REPEAT` conditional, so both published build flavours
   (`seg_play`/`seg_init` and `seg_rplay`/`seg_rinit`) come from one source
   file. That the transcription reproduces *both* shipped templates exactly is
   itself a check on the transcription.
3. Recovered each file's per-song external symbols
   (`fxtable`/`wavetable`/`filttable`/`fx_start`/`ins_ad`/`ins_sr`/`ins_wave`/
   `ins_filt`/`streamstart`/`unpackbufs`/`zp_base`/`INS_RESTART`/
   `INS_RESTART2`) by **inverting birdcruncher's own relocation table** — each
   entry is a `data[idx] = (sym->NAME + k) & 0xff | >> 8` assignment, so the
   lo/hi pair at those indices in the real file solves directly for the
   symbol. Nothing was guessed; `seg_init`'s address comes from the file's own
   `jmp initroutine` operand.
4. Assembled and byte-diffed against each real payload.
5. Built a **relocated** variant of every byte-exact file (`seg_play` moved to
   a fresh base with a **non-zero low byte**, e.g. `$1000 → $2701`,
   `$5000 → $5B01`, `$0900 → $2201`; `seg_init` moved independently), spliced
   it into the original PSID wrapper past the existing payload, and repointed
   the PSID `init`/`play` vectors at the new copy. The relocated player differs
   from the original in **186 bytes (plain) / 192 bytes (REPEAT) of 1366** — it
   is materially different machine code, not a copy.
6. Traced original and relocated file with `scripts/dev/vsid-trace.js` (VICE
   `vsid`, 300 frames each) and compared programmatically on the flattened
   `(register, value)` write stream with absolute cycle counts.

**Byte-diff result — 19/40 files at 100.0000% (0 of 1366 bytes differ):**

| build flavour | files | which |
|---|---|---|
| plain (`seg_play`/`seg_init`) | 11 | Toy_Rocket, Glyptodont, Maple_Leaf_Rag, Thus_Spoke_the_PC_Speaker, Dishwasher_Groove, Dithered_Island, Elvendance, Euclid_Was_Here, Fargo, Into_the_Unknown, Revolutions_Delivered |
| REPEAT (`seg_rplay`/`seg_rinit`) | 8 | Crank_Crank_Airwolf, Fugue_on_a_Theme_by_D_M_Hanlon, Quintessence, To_Die_For_II, Trinket, Arhymetriarchy (freQvibez), Krackenblochen (freQvibez), Cybernetic_Raven (rytone) |

All three tagged composers are represented (Lft, freQvibez, rytone).

**Trace-diff result — 89,325 register writes compared, 0 divergences.** Every
one of the 19 relocated builds reproduced its original file's write stream
exactly over 300 frames:

```
Toy_Rocket            5100/5100   Dishwasher_Groove      5012/5012
Glyptodont            4401/4401   Dithered_Island        5073/5073
Maple_Leaf_Rag        5557/5557   Elvendance             4050/4050
Thus_Spoke_the_PC_Sp  5005/5005   Euclid_Was_Here        3985/3985
Trinket               4169/4169   Fargo                  3723/3723
Krackenblochen        5353/5353   Into_the_Unknown       4989/4989
Cybernetic_Raven      3955/3955   Revolutions_Delivered  5146/5146
Crank_Crank_Airwolf   5320/5320   Fugue_on_a_Theme…      5493/5493
Quintessence          4313/4313   To_Die_For_II          4341/4341
Arhymetriarchy        4340/4340
```

Absolute-cycle drift is **−3..+5** on every file (one outlier, −24 on
Revolutions_Delivered), i.e. page-crossing penalties from the move; the write
*sequence* and values are identical. 2-18 writes per file land in a different
frame bucket purely because that drift carries them across a frame boundary.

**Crank_Crank_Revolution — a 20th file, trace-exact with a caveat.** It is the
published REPEAT build but ships a runtime-dirty snapshot of its own per-voice
working storage (35 bytes, see quirk). Carrying those 35 bytes over from the
original and reconstructing everything else from source gives **4606/4606
writes exact**; leaving them at the source's cold-start defaults gives
**4569/4606 wrong (0.8% match)**, diverging from write #25 with a cycle drift
of **−19,791**. Those bytes are therefore per-song data, and this file is
reported separately rather than folded into the 19.

**Why the trace test is not tautological.** The byte-exact native build is, by
construction, identical to the original and proves nothing on its own — so
every trace above was run against a *relocated* build differing in 186-192
bytes. Independent confirmation that the relocated copy is what actually
executes: the Crank_Crank_Revolution control above, where the *same* relocated
layout with 35 different bytes traced completely differently (0.8% match,
−19,791 cycle drift, different write count).

### Honest scope / known gap

**21 of the 40 tagged files are NOT reproduced**, and the reason is
provenance, not reconstruction quality — they were exported by player
revisions the author has never published:

- **13 files, PSID `released` 2022-2026** (Arrow_of_Time, Cherry_Waffle,
  Fjaellevator_Music, Hachi_Bitto_Whirlwind, In_Darkness_Hope, Nine,
  Quondam_Tunneling, Racing_the_Beam, Scene_Spirit_v2, Sommargubbe,
  Spin_Crazy_World, Summer_Cloud_v2, Withering_Bytes) — 548/1366 bytes differ
  from the published build, but only ~9 bytes differ *between* them once
  relocation slots are masked, so they are one consistent **unpublished
  post-1.2 revision**. The divergence is a contiguous engine-code stretch,
  roughly `seg_play+$CC..+$315`; the trailing 256-byte frequency table and the
  last 490 bytes are untouched.
- **7 files, PSID `released` 2016** (A_Computer_in_My_Backpack, Lunatico_Note,
  Lunatico_Side_1, Lunatico_Side_2, Perfectly_Well-Adjusted, Reminiscence,
  To_Die_For) — pre-1.0 development builds, 989-1015/1366 bytes differing, and
  not one build but several (227-328 bytes of mutual difference after
  masking).
- Crank_Crank_Revolution is counted above, not here.

**Next lead for anyone continuing:** the 13-file post-1.2 cluster is the
tractable one — it is a single revision, its divergence is localised to
`seg_play+$CC..+$315`, its unchanged 490-byte tail and 256-byte frequency
table give free alignment anchors, and the published `player.s` is a
line-by-line map of the surrounding code. Hand-diffing that ~585-byte window
against the published source (or simply asking the author, who has published
every prior revision) would take coverage from **19/40 to 32/40**. The 2016
pre-release cluster is not worth the same effort: it is several distinct
throwaway builds.

### 2026-07-24 pass (superseded, kept for the record)

**Not verified — `status: in-progress`, and a genuine tooling blocker now
confirms `verified` is out of reach with the tools available in this
project, not merely "not yet attempted".** That pass ran the full
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

### Update 2026-07-25 — blocker reproduced, and SIDM2 has cleared it

Two things happened, and they point in opposite directions:

- **The local blocker was reproduced**, on this repo's own `sidm2-siddump`
  MCP `trace_sid` (a different entry point from the `sidm2-sid-trace.exe`
  invocation used on 2026-07-24), against `Toy_Rocket.sid`. The header is
  read correctly and INIT completes, then every one of 20 frames reports
  `0 SID changes` and the tracer's own self-check declares the file
  *untraceable*. Stable, reproducible, not an environment glitch.
- **SIDM2 reports a finished port at 99.96%, 11/16 tunes at exactly 100.0%.**

Taken together these re-diagnose the problem. The blocker is **not a property
of this player** — it is a property of *this project's tracers*, which do not
emulate the `lax`/`sbx` illegal opcodes that Blackbird's play routine opens
with. SIDM2's tracer plainly does.

`status` stayed `in-progress` at the time. **Resolved on 2026-07-30, but not
the way this section predicted:** adopting SIDM2's tracer turned out to be
unnecessary. This repo already had a full-VICE tracer
(`scripts/dev/vsid-trace.js`), which emulates the undocumented opcodes without
any cross-project work, and the author ships the playroutine source in every
release archive, which removes the need for a disassembler at all. Any other
card parked behind the same `lax`/`sbx` wall should try `vsid-trace.js` before
anything else. See the 2026-07-30 section above; [[lft]] remains a separate
card, verified separately and scoped to a different (Förklädd Gud) engine.

## Sources

See the `sources` array. The load-bearing one is now the author's own released
archives (`blackbird-1.0/1.1/1.2.zip` from hd0.linusakesson.net), whose
`Export/source/player.s` + `player.h`/`rplayer.h` are the primary source for
every runtime fact on this card and for the 2026-07-30 verification. Beyond
that: SIDId (`data/sidid.json`), DeepSID `players.json`,
the author's official page and PDF manual (cited by chapter/page for
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
