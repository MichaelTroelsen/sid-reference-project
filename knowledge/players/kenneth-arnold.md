# Kenneth Arnold (Origin Systems driver)

```json
{
  "id": "kenneth-arnold",
  "name": "Kenneth Arnold (Origin Systems driver)",
  "aliases": ["Kenneth_Arnold"],
  "authors": ["Kenneth W. Arnold"],
  "released": "1983-1988 (Origin Systems)",
  "status": "in-progress",
  "platform": "American composer-programmer Kenneth W. 'Ken' Arnold's own C64 driver, used across the Ultima series — a founding-era Origin Systems figure, not a late hire brought in just for audio: he worked alongside Richard Garriott at the same ComputerLand store in 1979 and co-drew/co-coded the original Ultima's graphics, with the in-game town 'Arnold' named after him and his character fictionalized as 'Lord Kenneth,' Lord British's Court Composer. Player-ID-fingerprinted across 3 files, all his own — Ultima III: Exodus, Ultima IV: Quest of the Avatar, Ultima V: Warriors of Destiny.",
  "csdb_release": null,

  "memory": { "load_address": "Disassembled+reassembled all 3 HVSC files (SIDdecompiler -r + 64tass, verified 2026-08): Ultima III-Exodus.sid load $99e8 (init $99e8, play $99f4, header loadAddr=0/embedded, one contiguous code block, 100.0000% byte-exact). Ultima IV-Quest_of_the_Avatar.sid load $1000, init $4c00, PLAY VECTOR ($ec89) is OUTSIDE the file's own payload range ($1000-$4cb8) — reached only via a runtime block-copy at init (same class as lesson 88/66(2)); the on-disk payload itself is 100.0000% byte-exact but the play routine at $ec89 was never traced/verified. Ultima V-Warriors_of_Destiny.sid load $7200 but SIDdecompiler's own -v2 memory map reports Start: $033c, ~28.5KB BELOW the load address (gotcha-40/lesson-31/38/60 pattern — a fixed low-RAM workspace block, not yet distinguished from a copy-loop destination per lesson 62's diagnostic); relocating to -a828 (decimal for $033c) instead of the header load address gives one contiguous, non-wrapping block that is 100.0000% byte-exact in the code region from $7200 up.", "zero_page": "z1a/z1b ($1a/$1b): per-voice indirect song-data read pointer, dereferenced via (z1a,X)/(z1a),Y with X=voice*2 (0,2,4; a 4th slot at X=6/8 also observed, see quirks). z19 ($19): adjoins z1a from below — part of the same per-voice pointer array built by init (indices interleave low/high bytes for each voice starting at $19). z58/z59: song loop-point pointer (subtune restart position). z5a: 'note transpose active' flag / current voice index during table rebuild. z5b/z5c ($5b/$5c): general-purpose 16-bit scratch pointer, reused constantly (song-table setup, opcode-$83 'poke' target, opcode-$80/$81 gosub/return stack pointer).", "layout": "One code+data block per file, no separate order-list/pattern-table split visible — a single command-byte stream per voice (see effects), with the note-frequency/octave/duration logic and dispatch tables all embedded in the same $9a00-$aed0-ish span for Ultima III." },
  "entry": { "init": "Ultima III: $99e8 (== load). Ultima IV: $4c00 (well inside payload). Ultima V: $7c00 (inside payload, above the $033c workspace Start).", "play": "Ultima III: $99f4 (load+$c), called once per frame — confirmed NOT IRQ-self-installing in the traced file (a plain per-frame poll via the PSID play vector). Ultima IV's declared play vector ($ec89) sits outside the on-disk payload entirely; not independently traced." },
  "speed": "One event per real PLAY call (no observed per-call frame-skip in Ultima III); note/duration timing is driven by a per-voice countdown byte in a small workspace table (l9f68-family in the U3 disassembly), refilled from a duration byte in the command stream (bit 7 set = duration marker, low 7 bits = frame count).",
  "data_format": { "order_list": "No separate order list found for Ultima III — each voice reads directly from a per-voice command-byte stream (song data) via an indirect pointer (z1a/z1b), advanced one byte at a time by a shared read-helper routine.", "patterns": "Not pattern-based in the tracker sense: a flat byte stream per voice. Plain bytes $00-$7F with bit 7 clear are note bytes (folded into range via a 'subtract 12 until <$60' octave-fold loop); bytes with bit 7 set are duration/command markers.", "instruments": "No separate instrument table identified in the U3 disassembly pass; ADSR/waveform values are set once at init ($0f/$20/$0c/$40 per voice) and not revisited per note in the traced sample.", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (still no filter writes observed in any traced U3 subtune)" },
  "effects": { "encoding": "Command-byte stream per voice (Ultima III), bit 7 set = special byte. Values $80-$85 confirmed by disassembly+relocation-control-verified fix (2026-08):", "commands": { "$80": "gosub — push current voice read-pointer (z1a/z1b) onto a small 'call stack' built into unused song-data bytes (table computed once at init), then jump to a computed sub-position.", "$81": "return — pop the saved read-pointer back into z1a/z1b.", "$82": "set duration-count to $ff and a 'held' flag ($04) on this voice — effectively 'hold/rest'.", "$83": "poke — read 2 bytes as a 16-bit target address (relative to the song-data pointer, via 3 calls to the byte-read helper), then write a 3rd read byte to that address indirectly.", "$84": "read a byte and dispatch it through the bit-test table (l9dd6-family) to set/hold a value in l9dd4 workspace, then perform a second read+dispatch through the same helper — a 2-parameter SID-register bit-set command.", "$85": "AND/OR-mask update: reads a byte, ANDs it against a small 2-entry mask table (l9dea/l9dea+1, indexed by voice), ORs the masked byte into a running accumulator (l9f78), then dispatches it — looks like a filter/voice-select control-byte builder." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "A GENUINELY FOUNDING-ERA ORIGIN SYSTEMS FIGURE, not a late audio specialist: VGMPF states he 'worked for Origin Systems from the company's inception in 1983, although he was officially an employee only from March 1987 until December 1988' — matching this project's own DeepSID dump employment field exactly ('[ds-W]Origin Systems|1987-1988, [ds-X]|1988-'). He and Richard Garriott worked at the same ComputerLand store in summer 1979, hand-drawing/hand-coding the graphics for the original Ultima (Akalabeth-era) together — Garriott named the game's in-game town 'Arnold' after him, and within the Ultima fiction he's portrayed as 'Sir Kenneth'/'Lord Kenneth,' Lord British's Court Composer.",
    "COMPOSED NEARLY ALL THE MUSIC FOR ULTIMA III, IV, AND V — this project's 3 traced files exactly match this scope — with a couple of tracks reused in Ultima VI (arranged there by Herman Miller for the DOS version, not Arnold himself).",
    "CONFIRMED ORIGINALLY A PROGRAMMER, THEN COMPOSER — VGMPF explicitly frames him as programmer-turned-composer, not an outside audio specialist brought in later: he contributed code to the earliest Ultima titles pre-dating any dedicated audio role. No source found crediting him as coder specifically on the C64 PORTS of III/IV/V (as opposed to the original Apple II versions) — that attribution is left UNCONFIRMED at the port level, not asserted as fact.",
    "A NOTABLE TECHNICAL DETAIL FOR THE TRACE: Ultima V's C64 release reportedly only played SOUND EFFECTS — full music was C128-exclusive due to memory constraints (per a Lemon64 forum discussion). UPDATE (2026-08 disassembly pass): Ultima III's sparseness is now explained structurally rather than by the Ultima V memory-constraint theory — the driver is a slow, command-byte-stream sequencer (not a per-frame tracker), so most PLAY calls legitimately produce 0 SID writes; a deeper 200-frame trace of Ultima III subtune 10 still shows only ~19 writes total, at a steady ~46-frame period, confirming the earlier 7-writes/50-frames sample was simply catching a single sparse event, not evidence of an SFX-only branch. Whether the C128-exclusive-music claim still applies to Ultima V specifically was not re-checked.",
    "A REAL TOOL BUG FOUND DURING DISASSEMBLY (2026-08): `SIDdecompiler` omits the zero-page equate for `$19` on this player even though its own generated code references it (`sta z19,Y`) — a plain missing-equate bug (not a computed/relative address issue like some prior cases in this KB's sibling `sid-player-verify` agent's lessons), fixed by manually adding `z19 = $19`. Separately, `SIDdecompiler` misclassified 8 genuinely-reachable fall-through code blocks in Ultima III as `.byte ... ; Unreferenced data` (all sitting right after a conditional branch's not-taken path) — each containing a hardcoded absolute operand into the file's own workspace/code range that therefore silently failed to relocate; all 8 were hand-decoded and fixed. See Verification for the full list and the one remaining unexplained residual (a relocation-dependent tempo/period drift on subtune 10 only, isolated but not root-caused).",
    "POST-ORIGIN CAREER (post-1988) MOVED ENTIRELY AWAY FROM GAMES: Dell, Hewlett-Packard, nVidia, and Leggett & Platt (Missouri) — per VGMPF, single-sourced for this later-career detail.",
    "NO CSDb SCENER PROFILE EXISTS — expected and unremarkable, matching every other purely-commercial US studio composer already carded in this KB: `csdb_id: 0` in this project's own cached DeepSID profile confirms DeepSID never matched him to a scener page. CSDb does have separate RELEASE (not scener) pages for the three SIDs, showing only bare composer/year/publisher/technical-data fields.",
    "Not confirmed in SIDId (no entry for this tag). No documented working relationship found to any other US commercial-studio composer already in this KB despite the adjacent era/genre — [[ed-bogas-accolade]], [[ed-bogas-hakansson]], [[david-thiel]], [[kyle-johnson]], [[al-lowe]], [[paul-mudra]], [[rick-cardinali]] — all checked directly, different studios entirely (Origin Systems, Texas, vs. Gottlieb/Action Graphics/Incredible Technologies/Westwood/Sierra/Music Sales Ltd elsewhere in this KB). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Twice Effect Editor)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Arnold, Kenneth W. - USA'): local cache data/hvsc/Musicians.txt line 137",
    "Local dataset: data/composers/kenneth-arnold.json (DeepSID dump snapshot — employment field, active year)",
    "VGMPF — Ken Arnold (biography, Origin Systems founding-era role, Ultima gameography): https://www.vgmpf.com/Wiki/index.php/Ken_Arnold",
    "MobyGames — Kenneth W. Arnold (fetch blocked, used search snippet only): https://www.mobygames.com/person/83830/kenneth-w-arnold/",
    "CSDb sid id=7190 (Ultima III - Exodus, traced file's own release page): https://csdb.dk/sid/?id=7190",
    "Lemon64 forum — Ultima V C64 music/SFX constraint discussion: https://www.lemon64.com/forum/viewtopic.php?t=47280",
    "Local dataset: 3 files tagged Kenneth_Arnold, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kenneth_Arnold` tag is Ken Arnold's own C64 driver, used across the
Ultima series at Origin Systems — a founding-era figure who worked with
Richard Garriott from 1979, had a game town named after him, and is
fictionalized in-game as 'Lord Kenneth.' Player-ID-fingerprinted across 3
files: Ultima III, IV, and V.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **founding-era
Origin Systems identity**, a rare case in this KB of a composer whose own
name is literally woven into the fiction of the games he scored. Also
notable: a plausible technical explanation for the trace's sparseness,
tied to a documented C64/C128 memory constraint on the series.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Disassembled
directly from the HVSC files with `SIDdecompiler -r` + `64tass` (2026-08) —
see Verification below for the full method and results.

## Verification

**Disassembled, reassembled, byte-diffed and trace-diffed (2026-08) —
`status: in-progress` (not raised to `verified`; see the residual below).**

All 3 tagged HVSC files (`Ultima_III-Exodus.sid`, `Ultima_IV-Quest_of_the_Avatar.sid`,
`Ultima_V-Warriors_of_Destiny.sid`) disassembled with `SIDdecompiler -r -z -d -c`
and reassembled with `64tass`. One real tool defect found and fixed on all
three: `SIDdecompiler` omits the zero-page equate for `$19` even though the
disassembly references it (`sta z19,Y`) — added `z19 = $19` manually.

**Byte-diff**: all three files reach **100.0000% byte-exact** in their
on-disk code/data region once correctly relocated (Ultima III: whole
5357-byte traced region, native load address, no relocation needed;
Ultima IV: whole 15544-byte payload, native load address; Ultima V: whole
11771-byte payload, relocated to `-a828`/`$033c` — SIDdecompiler's own -v2
map Start address, ~28.5KB below the PSID load address `$7200`, per
gotcha-40 — the header-load-address relocation instead wraps and produces
two disjoint blocks with `-Wwrap-pc`/`-Wwrap-mem` warnings). Ultima III's
file has a 299-byte trailing region ($aed5-$b000) SIDdecompiler's trace
never touches; hex-dumped directly and confirmed it is a plain readable
ASCII documentation/comment block (Apple II special-memory-location notes:
"IRQVEC $D9 $03FE = RAM IRQ...", "ACC $DC $445 = temporary accumulator...")
— inert leftover text from the presumed Apple II source port, not code,
per the lesson-47 discipline of hex-dumping before writing a structural
interpretation.

**Trace-diff (Ultima III only — the only file with init/play fully inside
its own payload with no runtime copy)**: since the native reconstruction
is byte-exact, a native trace-diff against the original is tautological
(dissolves no evidence). Built a non-tautological relocation-invariance
control instead (two rebuilds of the identical disassembly at `-a43496`/
`$a9e8`, page-aligned +$1000, and `-a43551`/`$aa1f`, non-page-aligned
+$1037; confirmed the two control builds differ from the native build at
127-254 real bytes at matching offsets, i.e. a genuine non-trivial test).
The FIRST attempt at this control found 8 real defects: `SIDdecompiler`
had misclassified 8 reachable fall-through code blocks (conditional-branch
not-taken paths, matching this agent's own lesson-89 pattern exactly) as
`.byte ... ; Unreferenced data`, each containing an absolute operand into
the file's own workspace/code region that therefore did NOT get relocated.
Hand-decoded and fixed all 8 (an octave-fold loop at native $9c56 needing
its own new label; a duplicate `lda l9f60,X / cmp l9f58,X` pair at $9b70;
three bare `jmp l9c1f` fall-throughs; and the full command-$83/$84/$85
handler bodies at $9d53-$9d9b). One further block ($9a6e-$9aad, right after
init's own `rts`, no incoming `jsr`/`jmp` anywhere in the file) decodes as
real 6502 code too but calls addresses outside the file entirely ($b80c,
$b80f) and uses a non-standard indirect JMP vector ($032e) — left
unpatched as genuinely dead/unreferenced Apple-II-source leftover code
(matches the trailing ASCII block's own Apple II documentation), confirmed
via exhaustive search for any `jsr`/`jmp` landing on its start address
(none found).

After the fix, re-verified via an exhaustive scan of every one of the
control build's 151 differing bytes against the native build: **all 151
are valid, uniform +$10-high-byte-only shifts** (zero anomalies), i.e. the
static byte content is now a provably complete and correct relocation —
and re-grepped the whole `.asm` for any remaining out-of-range literal or
un-symbolized `Unreferenced data` block (per lessons 77/89): none found.
The control now traces **register-write-exact (0 divergences) on 3 of 4
tested subtunes (1, 3, 5 — 19/39/19 writes over 200 frames each, both the
aligned and unaligned control)**.

**Residual (subtune 10 only, unresolved)**: one further genuine, precisely
quantified divergence remains, confirmed NOT explained by any leftover
static-byte defect (see the exhaustive shift-check above). Subtune 10
produces a periodic cross-voice event (writes to `osc1_freq_hi` +
`osc3_control` together — likely a special/4th-channel effect, not a
normal 3-voice note) at a native period of exactly 46 frames (events at
frames 0, 46, 92, 138 over a 200-frame trace, 19 writes total). BOTH
relocation controls reproduce every write correctly but at a stretched
period — 62 frames (page-aligned +$1000) and ~63 frames (non-page-aligned
+$1037) — i.e. the SAME +16-frame stretch appears in both, and 16 exactly
equals the relocation delta's own high byte ($10). This rules out a
page-alignment/low-byte issue (lessons 79/87/91/103/110 — those would
differ between the aligned and unaligned control, and here they don't) and
was NOT traceable to any code path found by static reading (searched for
`#>l`/`#<l` immediate high-byte loads used arithmetically, for the code
region's own zero-page pointer arithmetic, and for a stack-imbalance in
the newly-added code — none found). This looks like a genuine, narrow,
address-dependent bug in how a periodic duration/tempo value is computed
for this one event, isolated to subtune 10 specifically — **a good
candidate for a live RetroDebugger pass** (single-step the X=6/X=8
"special channel" dispatch across the native and one relocated build,
watching the zero-page workspace and the `l9f68`/`l9f70`/`l9dd4` duration
fields, to find exactly where a relocation-dependent value enters the
duration computation) rather than further static analysis — not attempted
here per this agent's own constraint against using RetroDebugger itself.

**Not verified**: Ultima IV's PSID play vector ($ec89) sits entirely
outside its own on-disk payload ($1000-$4cb8) — SIDdecompiler's -v2 map
shows End: $fff9, confirming a large runtime block-copy at init (matching
the lesson-66(2)/88 pattern) that was not chased further (would need a
synthetic pre-copied image + injected play stub, per lesson 88, to trace).
Ultima V's -v2 Start-below-load-address gap was fixed for byte-diff
purposes (relocating onto Start) but not yet distinguished between
"fixed low-RAM workspace" (lesson 60) and "runtime copy-loop destination"
(lesson 62) — no page-copy loop was searched for.

**Why status stays `in-progress`, not `verified`**: the reconstruction is
100.0000% byte-exact on all 3 files (stronger than the project's own
`laxity-newplayer` ~99.9% precedent), and the relocation-invariance control
— the only non-tautological trace evidence available here, since a
byte-exact native build makes a native trace-diff prove nothing (lessons
63/69/70) — passed cleanly on 3 of 4 tested subtunes after 8 real defects
were found and fixed. But subtune 10's residual is a real, unexplained,
address-dependent divergence, not merely dead/cosmetic bytes, so this
does not meet the bar for a clean register-write match across the tested
material.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset cache, VGMPF,
MobyGames, CSDb, and a Lemon64 forum thread.
