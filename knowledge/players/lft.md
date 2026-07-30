# LFT (Linus Akesson hand-coded routines)

```json
{
  "id": "lft",
  "name": "LFT (Linus Akesson hand-coded routines)",
  "aliases": ["LFT"],
  "authors": ["Linus Akesson (lft)"],
  "released": "~2001-2014 in this dataset (per-tune hand-coded routines, predating Blackbird 2017; earliest dated file: 'Forkladd Gud (alpha)', 2001)",
  "status": "verified",
  "platform": "NOT a distributed tool or editor. Player-ID's bare 'LFT' tag fingerprints assorted per-tune, hand-written 6502 player routines that composer Linus Akesson (lft) wrote for his own tunes before consolidating his workflow into the native tracker Blackbird (2017, see blackbird.md). Unlike Blackbird, there is no single fixed player binary -- load/init/play addresses differ per file (see memory/entry below), consistent with ad hoc, tune-specific code rather than one reusable engine. HOWEVER, the Forkladd Gud septet (7 of the 18 tagged files) shares a single player engine, PROVEN this pass by reassembling the author's own public-domain source to a 100.0000% byte-exact match of all seven HVSC payloads (a cmdtable-driven bytecode interpreter -- see effects.encoding and data_format); those 7 files are NOT independently hand-written, just per-movement-evolved copies of one engine with different sequence data. The engine grew monotonically across the septet (46 commands in alpha up to 58 in zeta/eta -- append-only, commands 0-45 identical in all seven), and a few handlers were also edited in place between movements (c_vol adds +2 to its parameter in alpha, +1 in beta, nothing from gamma on; c_pw drives 1 pulse-width register pair in alpha-epsilon and 3 in zeta/eta). The other 11 files use different load addresses and are empirically confirmed this pass NOT to use this engine (see Verification); their own engines remain unexamined. `status: verified` therefore covers the Forkladd Gud engine (7/18 files) -- every playroutine fact this card states -- and nothing is claimed about the other 11 beyond their PSID header addresses.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies. PSID headers read directly this pass for all 18 tagged HVSC files. Forkladd Gud septet (alpha, beta, gamma, delta, epsilon, zeta, eta): load $4000 / init $4000 / play $4003 / 1 subtune, all seven (matches the author's source `*=$4000`). The other 11: Allt under himmelens faeste load $0817 init $0da0 play $0817; ...v2 load $0801 init $0d57 play $0d84; A Chipful of Love for You load $1000 init $152b play $1200; Fratres (Arvo Paert) load $0801 init $0e2e play $0819 (2 subtunes); Hardsync load $2d00 init $30f4 play $2e42 (3 subtunes); Nymphaea load $0801 init $0daf play $0817; Scene Spirit load $0900 init $0900 play $0903; Shards of Fancy load $1000 init $1528 play $1200; Slaepwerigne load $0801 init $0daf play $0817; Specular Highlight load $1000 init $1000 play $1003; Summer Cloud load $0817 init $0da0 play $0817.",
    "zero_page": "Forkladd Gud engine (7 files): $90-$91 (seqptr, pointer into the command-sequence byte stream), $92-$93 (tmpjmp, used for command dispatch via jmp (tmpjmp)). 4 bytes total. Confirmed from author's source (alpha.s lines 51-52). No ZP usage documented for the other 11 files.",
    "layout": "Forkladd Gud engine (7 files): the player occupies a contiguous block at the load address. Layout: [+0] jmp initroutine (3 bytes), [+3] playroutine entry, then command handlers (c_note, c_ad, etc.), write_sid (register-output routine), sidreset, and the cmdtable (46-58 entries of 2-byte handler addresses, count depends on the movement). After the code: song-specific data -- sequence (the interleaved command/delay byte stream), freq tables (lofreq/hifreq), vibrato table (sinvibr), and per-song variables (timeleft, playflag, vibrdepth, basefreq, etc.). The initroutine zeroes all 25 SID registers ($d400-$d418) via sidreset (`ldx #$18 / lda #0 / sta $d400,x / dex / bpl / rts`), then sets volume ($d418=$0f) and the CIA#1 Timer A latch to $5c00 (`lda #$5c / sta $dc05 / lda #$0 / sta $dc04` -- $dc05 is the HIGH byte, $dc04 the low). Total payload $4000-$4be6 (epsilon, 3047 bytes) up to $4000-$5205 (alpha, 4614 bytes). Verified: all seven reassemble from the author's source 100.0000% byte-exact against the HVSC payloads. Layout of the other 11 files is unexamined."
  },
  "entry": {
    "init": "Forkladd Gud engine (7 files): load+0 = $4000 (the 'jmp initroutine' trampoline at the load address). Init sets seqptr to point at the song's 'sequence:' data, calls sidreset (zeroes $d400-$d418), sets volume to $0f, and loads CIA#1 Timer A with $5c00 (23552 cycles, ~41.8 Hz PAL -- NOT $005c and NOT 60 Hz; $dc05 is the timer HIGH byte). Source: alpha.s initroutine, lines 478-493. Other 11 files: see memory.load_address for the init addresses read from their PSID headers.",
    "play": "Forkladd Gud engine (7 files): load+3 (immediately after the 3-byte jmp trampoline). Called once per frame. Checks playflag -- if zero, skips straight to write_sid. Otherwise decrements timeleft; if still non-zero, skips to write_sid. When timeleft hits zero, reads the next command byte from the (seqptr) stream, dispatches via cmdtable jump table, then postcmd reads a delay byte (0 = process next command immediately, non-zero = set timeleft for that many frames). Source: alpha.s lines 56-81. Other 11 files: play addresses from CSDb vary ($4003, $0817, $1200, $0903, $1003)."
  },
  "speed": "Forkladd Gud engine (7 files): CIA-timer-driven, NOT 1x-per-raster-frame. The PSID header's speed field is 1 for all seven (CIA timer, not VBI), and init programs CIA#1 Timer A ($dc04 low / $dc05 high) to $5c00 = 23552 cycles = ~41.8 Hz PAL. The _TEMPO command (40) rewrites ONLY the high byte ($dc05) and zeroes the low byte, so tempo is quantised to multiples of 256 cycles; values across the septet's sequence data range $28-$61, i.e. ~96.2 Hz down to ~39.7 Hz. The player contains no IRQ handler of its own -- the PSID host installs the timer interrupt and calls the play entry at that rate; the play routine then counts calls down in its own 'timeleft' variable. Source: alpha.s initroutine + c_tempo, and PSID speed field read directly. Other 11 files: speed model unconfirmed.",

  "data_format": {
    "order_list": "Forkladd Gud engine: NO conventional order list. The song is a single linear byte-stream pointed to by seqptr, with backward jumps only via the c_jump command (which uses a compile-time label, not a dynamic address -- each tune hardcodes its own loop point). No song-position table, no pattern-order array. Source: alpha.s initroutine (sets seqptr to sequence: label) and c_jump handler (loads hardcoded jumphere label).",
    "patterns": "Forkladd Gud engine: NO pattern grid. The runtime format is an interleaved [command_byte] [parameter(s)] [delay_byte] stream read sequentially by getbyte via (seqptr),y. Each command handler reads 0-3 parameter bytes, then postcmd reads 1 delay byte. The byte stream is effectively a bytecode program: the musician hand-assembled a sequence of command/delay pairs (e.g. '.byt _VOL,$43 / .byt 20,_FILTER,$46' -- set volume to $43, wait 20 frames, then set filter). Source: alpha.s sequence: label and getbyte routine (lines 467-475, 529+).",
    "instruments": "Forkladd Gud engine: NO instrument table. Timbral parameters (AD, SR, waveform, pulse width, filter routing, cutoff) are set inline via explicit commands in the byte-stream. There are separate command handlers for each voice (voice 1: _AD/$03, _SR/$04, _CR/$05, _SAW/$06; voice 2: _2AD/$08, _2SR/$09, _2CR/$10, _2SAW/$11, _2TRI/$16; voice 3/bass: _3AD/$32, _3SR/$33, _3SAW/$34, _3CR/$45, _BSAW/$42, _BSR/$44, _BREL/$43) plus _TRI/$37, _PUL/$18, _2PUL/$19, _FILTER/$21, _CUTO/$22. Source: alpha.s cmdtable (lines 197-212) and individual command handlers.",
    "wavetable": "Forkladd Gud engine: lofreq/hifreq tables (probably standard 96-note lookup) plus sinvibr (sine table for vibrato). No 'wave table' in the arpeggio sense -- the _3ARP command takes 3 absolute note indices as parameters, not a table index. Source: alpha.s write_sid references lofreq/hifreq and sinvibr.",
    "pulsetable": "Forkladd Gud engine: NO dedicated pulse-width table. Pulse width is set by _PW (20) from a SINGLE parameter byte, which c_pw splits into nibbles: `pha / asl x4 / sta pwidth / pla / lsr x4 / sta pwidth+1` -- i.e. the low nibble becomes the 12-bit PW's low byte<<4 and the high nibble the high byte. In alpha-epsilon this drives one shared pwidth applied to voices 1+2; in zeta/eta c_pw also stores to pwidth2/pwidth3 (three independent voices). Optional per-frame slide via _PWD (26), also a single byte, added to pwidth in write_sid (zeta/eta add _2PWD/56 and _3PWD/57 for the other voices). Source: alpha.s/zeta.s c_pw and c_pwd handlers and write_sid pulse section.",
    "filtertable": "Forkladd Gud engine: NO dedicated filter table. Filter cutoff is set by _CUTO (22) from a SINGLE parameter byte stored into cutoff+1 (the cutoff HIGH byte -- the low byte is only ever moved by the slide), with optional per-frame slide via _CUTOD (23), also a single byte, which c_cutod sign-extends into cutoffd+1 ($00 or $ff) so the delta can be negative. Filter routing/type is set by _FILTER (21), one byte straight to $d417. Source: alpha.s c_filter, c_cuto, c_cutod handlers and write_sid filter section."
  },
  "effects": {
    "encoding": "Forkladd Gud engine (7 files): command-driven bytecode interpreter. Each command byte indexes into a cmdtable of 16-bit handler addresses via `jsr getbyte / asl / tax / lda cmdtable,x / sta tmpjmp / lda cmdtable+1,x / sta tmpjmp+1 / jmp (tmpjmp)`. The table is APPEND-ONLY across the septet: 46 entries (0-45) in alpha, 48 in beta, 52 in gamma, 54 in delta, 56 in epsilon, 58 in zeta and eta -- commands 0-45 have identical meanings in all seven, so the alpha table below is the common core. The byte-stream format is: command_byte [0-3 parameter bytes, depending on command] delay_byte. The delay byte is read by postcmd after every command: 0 = immediately dispatch next command; non-zero = set timeleft to that many play calls (the playroutine decrements timeleft each call and skips command dispatch until it reaches zero). The initial startup delay is hardcoded (20 in alpha.s). c_end (command 1) sets playflag to 0, terminating command dispatch (write_sid keeps running). c_jump (command 39) rewinds seqptr to a compile-time `jumphere` label for looping -- it is NOT a dynamic index or offset. Source: alpha.s getcmd/postcmd/getbyte flow (lines 56-81, 467-475), cmdtable (lines 197-212), and the _XXX constant table (lines 4-49); command tables of all seven compared programmatically this pass.",
    "commands": {
      "0 (_NOP)": "No operation -- jumps to postcmd to read next delay byte.",
      "1 (_END)": "Sets playflag to 0, terminating playback (write_sid continues to run but no new commands are dispatched).",
      "2 (_NOTE)": "Sets voice 1 base frequency from the parameter byte (note index into lofreq/hifreq tables).",
      "3 (_AD)": "Sets voice 1 attack/decay ($d405) to the parameter byte.",
      "4 (_SR)": "Sets voice 1 sustain/release ($d406) to the parameter byte.",
      "5 (_CR)": "Sets voice 1 control register ($d404) to the parameter byte (waveform + gate).",
      "6 (_SAW)": "Sets voice 1 waveform to sawtooth ($21) unconditionally (no parameter).",
      "7 (_2NOTE)": "Sets voice 2 base frequency from parameter byte.",
      "8 (_2AD)": "Sets voice 2 attack/decay ($d40c) to the parameter byte.",
      "9 (_2SR)": "Sets voice 2 sustain/release ($d40d) to the parameter byte.",
      "10 (_2CR)": "Sets voice 2 control register ($d40b) to the parameter byte.",
      "11 (_2SAW)": "Sets voice 2 waveform to sawtooth ($21).",
      "12 (_DEPTH)": "Sets voice 1 vibrato depth (vibrdepth) from parameter byte. Depth is applied in write_sid as a right-shift count on the sine-table value, so larger = SHALLOWER.",
      "13 (_VRESTART)": "Vibrato restart, not gate restart: `lda #0 / sta vibrpos`. Resets the shared vibrato LFO phase to 0. Takes no parameter. (Earlier revisions of this card described it as a hard-restart gate trick -- that is wrong.)",
      "14 (_REL)": "Voice 1 gate off: `lda ctrlshadow / and #$fe / sta $d404`. Clears the gate bit from the shadow copy of the control register. Takes NO parameter.",
      "15 (_2REL)": "Voice 2 gate off, same mechanism via ctrlshadow2 -> $d40b. No parameter.",
      "16 (_2TRI)": "Sets voice 2 waveform to triangle+gate ($11) via ctrlshadow2 -> $d40b.",
      "17 (_VOL)": "Writes master volume / filter mode to $d418. alpha adds 2 to the parameter first (`clc / adc #2`), beta adds 1, gamma onwards write the parameter unchanged -- one of the few handlers the author edited mid-septet.",
      "18 (_PUL)": "Sets voice 1 waveform to pulse+gate ($41) via ctrlshadow -> $d404. (zeta/eta alias this constant as _SQ.)",
      "19 (_2PUL)": "Sets voice 2 waveform to pulse+gate ($41) via ctrlshadow2 -> $d40b. (aliased _2SQ in zeta/eta.)",
      "20 (_PW)": "Sets pulse width from ONE parameter byte, nibble-split into the 12-bit PW pair (see data_format.pulsetable). alpha-epsilon: one shared width; zeta/eta: also copied to pwidth2/pwidth3.",
      "21 (_FILTER)": "Sets filter routing/resonance byte ($d417) from the parameter byte.",
      "22 (_CUTO)": "Sets filter cutoff HIGH byte (cutoff+1) from ONE parameter byte; write_sid emits the 11-bit cutoff pair to $d415/$d416.",
      "23 (_CUTOD)": "Sets the per-call cutoff slide delta from ONE parameter byte, sign-extended into cutoffd+1 ($00/$ff) so it can slide down as well as up.",
      "24 (_VSPEED)": "Sets vibrato speed (vibrdelta, added to vibrpos each play call in write_sid).",
      "25 (_RESET)": "Calls sidreset -- zeroes $d400-$d418.",
      "26 (_PWD)": "Sets the per-call pulse-width slide delta from ONE parameter byte.",
      "27 (_TRANSPH)": "Sets transpose offset HIGH byte (transpoffs+1).",
      "28 (_TRANSPDH)": "Sets transpose-delta HIGH byte (per-call pitch bend).",
      "29 (_TRANSPDL)": "Sets transpose-delta LOW byte.",
      "30 (_TRANSPL)": "Sets transpose offset LOW byte (transpoffs).",
      "31 (_3ARP)": "Sets a 3-note arpeggio -- reads 3 note-index bytes into arpnotes[0..2]; write_sid cycles arppos through them once per play call.",
      "32 (_3AD)": "Sets voice 3 attack/decay -- writes $d413 (NOT $d412).",
      "33 (_3SR)": "Sets voice 3 sustain/release -- writes $d414 (NOT $d413).",
      "34 (_3SAW)": "Sets voice 3 waveform to sawtooth+gate ($21) via ctrlshadow3 -> $d412.",
      "35 (_3REL)": "Voice 3 gate off: ctrlshadow3 AND $fe -> $d412. No parameter.",
      "36 (_3TRI)": "Sets voice 3 waveform to triangle+gate ($11) via ctrlshadow3 -> $d412.",
      "37 (_TRI)": "Sets voice 1 waveform to triangle+gate ($11) via ctrlshadow -> $d404.",
      "38 (_2DEPTH)": "Sets voice 2 vibrato depth (vibrdepth2).",
      "39 (_JUMP)": "Rewinds seqptr to the compile-time `jumphere` label for song looping -- NOT a dynamic parameter.",
      "40 (_TEMPO)": "Writes the parameter byte to CIA#1 Timer A HIGH byte ($dc05) and zeroes the LOW byte ($dc04). The parameter is therefore the tempo period in units of 256 cycles, not an LSB. Observed range across the septet: $28-$61 (~96 Hz down to ~40 Hz).",
      "41 (_BNOTE)": "'Bass note' -- a DOUBLED note, not a voice-3 note: sets voice 1 base frequency from the note index AND voice 2 base frequency from index+12 (one octave up), via lofreq/hifreq.",
      "42 (_BSAW)": "Sets BOTH voice 1 and voice 2 to sawtooth+gate ($21) -- writes ctrlshadow/$d404 and ctrlshadow2/$d40b.",
      "43 (_BREL)": "Gate off on voice 2 ($d40b) then falls through into c_rel, gating off voice 1 ($d404) as well. No parameter.",
      "44 (_BSR)": "Sets sustain/release on voices 1 AND 2 from one parameter byte -- writes $d406 and $d40d (NOT $d414).",
      "45 (_3CR)": "Sets voice 3 control register -- writes ctrlshadow3 and $d412 (NOT $d40b).",
      "46-57 (beta onward, append-only)": "46 _CHORD (3 note bytes -> voices 1/2/3 base freqs, then forces vibrdepth=6 and vibrdelay=4); 47 _CREL (gate off voices 2 then 1, falling through to c_rel); 48 _3NOTE (voice 3 base freq from index-12, i.e. an octave down); 49 _3DEPTH; 50 _2VSPEED; 51 _3VSPEED; 52 _TR (2 trill note bytes into trnotes, resets trpos/trpos2/trpos3); 53 _ANOTE (sets all three voices to one note, then plays a short noise+$f0-PW attack transient: writes $d401=$f0, $d404=$81, spins a 256-iteration `nop/nop/nop/dex/bne` delay loop of ~2.8k cycles, then restores ctrlshadow to $d404); 54 _NOI (voice 1 waveform noise+gate, $81); 55 _3SQ (voice 3 pulse+gate $41 -- note this handler writes ctrlshadow, not ctrlshadow3, apparently a copy-paste slip in the author's source that is nevertheless present in the shipped binaries); 56 _2PWD; 57 _3PWD. First appearance: 46-47 in beta, 48-51 in gamma, 52-53 in delta, 54-55 in epsilon, 56-57 in zeta/eta."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is almost certainly NOT the same thing as the 'Blackbird/LFT' tag already carded at knowledge/players/blackbird.md. Blackbird is a named, versioned, publicly released native tracker (CSDb releases 153555/161554, 2017-2018) with its own SIDId entry (name 'Blackbird 1.0', a reference URL, a comment). The bare 'LFT' tag's SIDId entry, by contrast, has ONLY an author field ('Linus Akesson (LFT)') -- no name, no release, no reference -- consistent with Player-ID fingerprinting a family of unnamed, non-identical routines rather than one product. All 18 locally-tagged 'LFT' files date to CSDb release years 2001-2014, entirely BEFORE Blackbird's 2017 debut.",
    "The Forkladd Gud septet (7 of the 18 files) shares a single player engine -- a cmdtable-driven bytecode interpreter -- copied forward and extended per movement. PROVEN, not inferred: all seven reassemble from the author's own source to a 100.0000% byte-exact match of their HVSC payloads (see Verification). The author's README explicitly states the source code is 'public domain - do what thou wilt' (larsson-sids.tgz README). The remaining 11 files use different load addresses and their engines are unexamined.",
    "The seven .sid files SHIPPED INSIDE the author's own larsson-sids.tgz are byte-identical (0 differing payload bytes, all 7) to HVSC's Foerklaedd_Gud_*.sid. HVSC merely re-wrapped them in a PSID v2 header (init $4000 instead of the author's init $0000 = 'use load address'; flags $14 added). So the tarball is not a look-alike rebuild -- it is the provenance of the HVSC files.",
    "The tarball's src/*.s is a LATER revision than the shipped binaries. In alpha, delta and epsilon the author later commented out one or two `;jumphere:  .byt ...` loop-point lines whose DATA bytes are still present in the released .sid files -- 3, 6 and 3 bytes respectively. Assembling the source verbatim therefore yields a file 3-6 bytes short, and every absolute operand past the deletion point resolves 3-6 too low (alpha byte-diffed at 63.59% before this was found). Restoring only the data on those commented lines (leaving the label commented, so the active `jumphere:` and hence the c_jump target stays put) takes all three to 100.0000%. Anyone rebuilding these must apply that edit.",
    "The engine is NOT frozen across the septet. The cmdtable grows append-only 46 -> 48 -> 52 -> 54 -> 56 -> 58 (alpha, beta, gamma, delta, epsilon, zeta=eta) and several existing handlers were edited in place as the author went: c_vol adds +2 to its parameter in alpha, +1 in beta, and nothing from gamma on; c_pw drives one pulse-width pair in alpha-epsilon and three in zeta/eta. Any card fact taken from alpha.s alone should be re-checked against the later movements before being generalised.",
    "The engine is CIA-timer driven, not VBI/1x. PSID speed field = 1 on all seven; init loads CIA#1 Timer A with $5c00 (~41.8 Hz PAL) and _TEMPO rewrites only the HIGH byte ($dc05), zeroing the low. An earlier revision of this card recorded this as 'CIA timer 2 to $005c ... ~60Hz' -- wrong on the chip ($dc0x is CIA#1), wrong on the byte order, and wrong on the rate. (This is the trap of lessons_learned entry 50 -- check the derived real-world rate, not just the mnemonics.)",
    "Signature-scanned this pass (lessons_learned 68 method: 5 address-operand-free opcode patterns from the verified engine, requiring both hit AND consistent relative offsets): NONE of the other 11 tagged files uses the Forkladd Gud engine. Six of them (Allt under himmelens faeste + v2, Fratres, Nymphaea, Slaepwerigne, Summer Cloud) contain the 11-byte sidreset idiom `a2 18 a9 00 9d 00 d4 ca 10 fa 60`, but that is a textbook SID-clear loop and the four engine-SPECIFIC patterns (getbyte's `(seqptr),y` fetch at zp $90, the vibrato right-shift loop, the $dc05/$dc04 tempo write pair, the $d418/$dc05 init block) miss in all 11.",
    "This strongly matches Blackbird's own author description of his prior workflow: 'For some time, I've been making my C64 music using hacked-together cross-platform tools. Here the various features of those tools have been brought together into a polished native tracker' (quoted already in blackbird.md). No source or manual explicitly says 'the LFT tag = those prior tools', so per this project's edge-evidence rule this is recorded here as a strong circumstantial hypothesis, NOT as a derives_from/successor_of edge.",
    "Extreme composer concentration: all 18 locally-tagged files are by Lft himself (100%, 1/1 composers) -- the tightest possible concentration, consistent with genuinely personal, uncirculated per-tune code rather than a tool anyone else could have adopted.",
    "The Forkladd Gud engine has NO instrument table, NO pattern grid, and NO order list -- it is a single linear byte-stream with a compile-time-hardcoded loop point (c_jump reads a label, not a dynamic address). The musician literally hand-assembled a sequence of '.byt _VOL,$43 / .byt 20,_NOTE,35' directives, making the .s file itself the 'score.' This is fundamentally different from every tracker-based player in this knowledge base and explains why lft later built Blackbird.",
    "A separate, unrelated raw tag '256bytes/LFT' (1 file in this dataset) is already carded at knowledge/players/256bytes-lft.md -- almost certainly tied to Akesson's 256-byte C64 demo 'A Mind Is Born' (2017), not to music playback. Out of scope here; flagged so a future pass doesn't conflate it with this tag."
  ],
  "sources": [
    "sidid:LFT (author 'Linus Akesson (LFT)', no name/released/reference fields) -- data/sidid.json",
    "Local dataset: 18 files tagged 'LFT', all by composer 'Lft' (100% concentration) -- aggregated from data/composers/Lft.json folder[] records",
    "CSDb SID entry 7493 'Forkladd Gud (alpha)' (2001, load/init $4000, play $4003): https://csdb.dk/sid/?id=7493",
    "CSDb SID entry 38178 'Summer Cloud' (2007, load/play $0817): https://csdb.dk/sid/?id=38178",
    "CSDb SID entry 48653 'A Chipful of Love for You' (2013, load $1000, init $152B, play $1200): https://csdb.dk/sid/?id=48653",
    "CSDb SID entry 50759 'Scene Spirit' (2014, load/init $0900, play $0903): https://csdb.dk/sid/?id=50759",
    "CSDb SID entry 50400 'Specular Highlight' (2014, load/init $1000, play $1003): https://csdb.dk/sid/?id=50400",
    "Forkladd Gud source code tarball (7 .s files, 11,103 lines by `wc -l` / 11,110 counting the trailing line; also ships the 7 reference .sid files and mkheader.c; public domain): https://www.linusakesson.net/music/sidstuff/larsson-sids.tgz -- downloaded and used as the reconstruction source this pass. (An earlier revision of this card said 11,141 lines; the measured figure is 11,103.)",
    "larsson-sids/src/mkheader.c -- the author's own PSID header generator, confirming load $4000 (b[0x76]/b[0x77]), init $0000 (= use load address), play $4003, 1 subtune, speed field 1 (CIA timer)",
    "Forkladd Gud README: 'This is public domain - do what thou wilt' -- https://www.linusakesson.net/music/sidstuff/forkladdgud.php",
    "Composer's own page on Forkladd Gud ('handcrafted in 6502 assembler', source available): https://www.linusakesson.net/music/sidstuff/forkladdgud.php",
    "Composer's SID music index (tune list): https://www.linusakesson.net/music/sidstuff/index.php",
    "Composer's software page (confirms Blackbird 2017 as his first named/released tracker; pre-2017 tools listed are Sidreloc, Spindle -- no pre-Blackbird music editor): https://www.linusakesson.net/software/",
    "knowledge/players/blackbird.md -- sibling card for the later, named, publicly released tracker by the same author",
    "knowledge/players/256bytes-lft.md -- sibling card for the unrelated 256-byte demo tag"
  ]
}
```

## Overview

"LFT" is a bare Player-ID tag that fingerprints a handful of **hand-written,
per-tune 6502 player routines** by C64 musician Linus Akesson (lft), not a
distributed tool. In this dataset it covers 18 files, all by Lft himself
(100% concentration), spanning CSDb release years 2001-2014. That timeframe
predates Akesson's first named, publicly released, versioned tracker,
**Blackbird** (2017 -- already carded separately at `blackbird.md`).

Unlike Blackbird, there is no single fixed player binary -- load/init/play
addresses differ across the 18 files. However, the **Forkladd Gud septet**
(7 files: alpha through zeta, 2001) shares a single engine, confirmed by the
author's own public-domain source code. That engine is a **command-driven
bytecode interpreter**: the musician hand-assembled sequences of command and
delay bytes into the .s file itself (e.g. `.byt _NOTE,35` for "play note 35"),
with no pattern grid, no instrument table, and no conventional order list.
The byte-stream is walked sequentially by a small player that reads one
command per variable number of frames and writes SID registers each frame.
The other 11 files (Summer Cloud 2007, Scene Spirit 2014, Specular Highlight
2014, etc.) have different load addresses and their engines are unexamined.

The composer himself describes the Forkladd Gud parts as "handcrafted in 6502
assembler," and his software page lists no pre-Blackbird music editor (only
Sidreloc and Spindle). The "LFT" tag thus represents Akesson's pre-tracker
era -- a personal toolkit of hand-tweaked, tune-specific routines that he
eventually consolidated into Blackbird (2017).

## Quirks & gotchas

See the `quirks` array for the load-bearing points:

- This is **not** the `Blackbird/LFT` tag already carded (different SIDId entry shape, different years, no single fixed load address).
- The Forkladd Gud septet shares a single engine (proven byte-exact, not just inferred), not seven independently written routines -- but that engine is a unique bytecode-interpreter design with no instrument table, no pattern grid, and no conventional order list. The `.s` source file IS the score. It also evolved between movements (46 -> 58 commands, plus in-place handler edits), so "one engine" does not mean "one binary".
- The Forkladd Gud engine is public domain ("do what thou wilt" per the README), but only covers 7 of 18 files -- and the other 11 are now empirically confirmed *not* to use it.
- The published source is a **later revision** than the released binaries: three of the seven need commented-out `;jumphere:` data lines restored before they rebuild byte-exactly.
- Usage is 100% by the author himself.
- The connection to Blackbird is circumstantial (strongly suggested by the timeline and Blackbird's own author description of his prior workflow) but is NOT asserted as a formal `edges` relationship -- there is no citable statement linking the two by name.

## Disassembly notes

**No disassembly needed.** The Forkladd Gud engine facts above come from the
author's own 6502 assembly source (alpha.s, 1,927 lines; 11,103 lines total
across all 7 parts), which this pass proved *is* the source of the shipped
binaries by reassembling it byte-exactly. Key observations from the source:

- `*=$4000` (line 2) -- all seven parts assemble to the same base address.
- `seqptr =$90`, `tmpjmp =$92` (lines 51-52) -- only 4 bytes of ZP used.
- `jmp initroutine` at +0, `playroutine` starts at +3 (lines 54-56).
- `cmdtable` (lines 197-212) declares 46 command handlers as `.word` entries; the command byte (0-45) is doubled via `asl` / `tax` then dispatched via `jmp (tmpjmp)`.
- `getbyte` (lines 467-475) reads `(seqptr),y`, auto-increments seqptr -- the player walks the byte-stream linearly.
- `write_sid` (lines 82-196) runs every frame: applies vibrato (sine table lookup), transposition (per-frame pitch bend), arpeggio cycling (_3ARP), pulse-width slide (_PWD), and filter-cutoff slide (_CUTOD) to the SID registers.
- `sequence:` (line 529+) is the song data -- a flat list of `.byt` directives encoding the command/delay stream.
- `c_jump` (line 455) uses compile-time labels (`jumphere`), not dynamic addresses -- the loop point is baked into each tune's source, not configurable at runtime.
- `timeleft` (initial value 20 in alpha.s, line 1857) controls the startup silence before the first command fires.
- CIA#1 Timer A is set to `$5c00` in initroutine (lines 486-489: `lda #$5c / sta $dc05 / lda #$0 / sta $dc04`), and there is no IRQ handler in the player -- the PSID host installs the timer IRQ (speed field = 1) and calls play at that rate.

**Rebuilding the septet (recipe, reproduced this pass).** The source is
xa65 syntax. Mechanical translation to 64tass: `.byt` -> `.byte`; `.(`/`.)`
-> `.block`/`.bend` emitted on their own line so a preceding label keeps its
address meaning; rename the `_XXX` command constants (64tass reads a leading
underscore as a cheap-local label, so `_VOL` resolves to nothing inside a
block); add a colon to column-0 labels (`shl` collides with a 64tass token
otherwise); drop one stray trailing comma in eta.s line 1247. Then restore
the data on the commented-out `;jumphere: .byt ...` lines (alpha 1308, delta
1214+1357, epsilon 1063) -- see quirks. Assemble with
`64tass -a --cbm-prg`.

The other 11 files were not disassembled and their engines remain unknown.
A coarse shared-10-gram similarity matrix over all 18 payloads (a weak
instrument -- it is depressed by differing load addresses, so treat as
hypothesis only, not as an lessons-68-grade result) suggests the 11 fall into
roughly four further groups: {Allt under himmelens faeste, ...v2, Summer
Cloud, Nymphaea, Slaepwerigne, Fratres} (all load $0801/$0817, 8-68% mutual),
{A Chipful of Love for You, Shards of Fancy} (both load $1000 / play $1200,
19%), {Scene Spirit, Specular Highlight} (8%), and Hardsync alone.

## Verification

**`status: verified` for the Forkladd Gud engine (7 of the 18 tagged files).
Nothing is claimed or verified about the other 11 beyond their PSID header
addresses.**

Verified 2026-07-30 by a source-derived reconstruction (stronger than a
disassembly: the input is the author's own public-domain 6502 source, and the
reconstruction proves that source *is* what shipped).

**Provenance.** larsson-sids.tgz ships both `src/*.s` and seven reference
`.sid` files. Those seven are byte-identical to HVSC's
`MUSICIANS/L/Lft/Foerklaedd_Gud_*.sid` payloads -- 0 differing bytes on all
seven (HVSC only re-wrapped them in a PSID v2 header).

**Byte-diff: 100.0000% on all 7 files, 0 differing bytes.**
Method: translate xa65 -> 64tass (see Disassembly notes), restore the
commented-out `;jumphere:` data lines, `64tass -a --cbm-prg`, compare against
the PSID payload extracted per the standard load-address rule.

| file | payload | range | byte-diff |
|---|---|---|---|
| alpha | 4614 | $4000-$5205 | 100.0000% (0 diffs) |
| beta | 4036 | $4000-$4fc3 | 100.0000% (0 diffs) |
| gamma | 3154 | $4000-$4c51 | 100.0000% (0 diffs) |
| delta | 4109 | $4000-$500c | 100.0000% (0 diffs) |
| epsilon | 3047 | $4000-$4be6 | 100.0000% (0 diffs) |
| zeta | 3448 | $4000-$4d77 | 100.0000% (0 diffs) |
| eta | 3406 | $4000-$4d4d | 100.0000% (0 diffs) |

beta, gamma, zeta were exact on the first assembly; eta needed only the
stray-trailing-comma fix; alpha/delta/epsilon needed the `;jumphere:` data
restored (byte-diff before that fix: alpha 63.5891%, delta 64.6386%,
epsilon 67.2793% -- the classic "one deletion upstream, every later absolute
operand off by the same amount" signature).

**Trace-diff: NOT tautological.** A byte-identical build would make any
trace comparison vacuous, so the check was run against *relocated* rebuilds
of the same source:

- Relocated to `*=$6123` (non-zero low byte, so low-byte operand relocation
  is exercised): the resulting binaries differ from the originals in 466
  (alpha) to 698 (zeta/eta) bytes, i.e. **10.1%-21.0% of every file**, same
  lengths.
- Traced both sides with `sidm2-sid-trace.exe`, 3000 play calls each
  (original at init $4000/play $4003, relocated at $6123/$6126), compared
  programmatically on `(frame, register, old_value, new_value)`:

| file | writes (orig) | writes (reloc $6123) | tuple diffs |
|---|---|---|---|
| alpha | 11450 | 11450 | **0** |
| beta | 3692 | 3692 | **0** |
| gamma | 4349 | 4349 | **0** |
| delta | 3282 | 3282 | **0** |
| epsilon | 11330 | 11330 | **0** |
| zeta | 4922 | 4922 | **0** |
| eta | 4922 | 4922 | **0** |

Cycle timestamps do drift on the $6123 builds (0..+4603 cumulative), as
expected from page-crossing penalties at a different intra-page offset. A
control rebuild at the page-aligned `*=$6000` (233 bytes differing on alpha)
was additionally **cycle-exact**: 0 cycle diffs across all 11450 (alpha) and
11330 (epsilon) writes -- confirming the drift is page-crossing, not
behavioural.

**Scope: the other 11 files do NOT use this engine.** Signature-scanned with
the offset-agreement method (5 patterns with no address operands, taken from
the verified engine: sidreset, getbyte, the vibrato right-shift loop, the
$dc05/$dc04 tempo pair, the $d418/$dc05 init block). All 7 Forkladd Gud files
hit all 5 with consistent relative offsets (getbyte at sidreset-$26 and the
init block at sidreset-$10 in every one). All 11 others miss 4 of the 5; six
of them hit only the generic 11-byte SID-clear loop. So the engine covers
exactly 7/18, and that boundary is now empirical rather than assumed.

**Facts corrected this pass** (the previous card's Tier 3 prose had a number
of real errors, all now re-derived from the source and cross-checked against
all 7 movements): `_VRESTART` is a vibrato-phase reset, not a gate
hard-restart; `_REL`/`_2REL`/`_3REL`/`_BREL`/`_CREL` are parameterless gate-off
operations via shadow registers, not SR writes; `_PW`, `_CUTO`, `_CUTOD`,
`_PWD` each take ONE parameter byte, not two; `_3AD`/`_3SR`/`_3CR` write
$d413/$d414/$d412, not $d412/$d413/$d40b; `_BNOTE`/`_BSAW`/`_BREL`/`_BSR`
operate on voices 1+2 (an octave-doubled "bass"), not voice 3; `_VOL` adds a
per-movement bias; `_TEMPO` writes the timer HIGH byte; the timer is CIA#1
Timer A at $5c00 (~41.8 Hz), not "CIA timer 2 at $005c, ~60 Hz"; and the
cmdtable has 46-58 entries depending on the movement, not a fixed 46.

**Remaining gap.** The 11 non-Forkladd-Gud files. No edges have been asserted
(no source links this player to any other by name).

## Sources

See the `sources` array for the full list. Key additions from this research
pass: the Forkladd Gud source tarball at linusakesson.net (public domain,
README states "do what thou wilt"), the composer's software page confirming
no pre-Blackbird music editor, and the sibling 256bytes-lft.md card.
