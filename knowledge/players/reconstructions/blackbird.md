# blackbird — reconstruction manifest

See `knowledge/players/blackbird.md` for the full Verification narrative.
Unlike every other card in this directory, this reconstruction was NOT built
by disassembling the real files (`SIDdecompiler` cannot: see the blocker
below) — it was built by **manually transcribing the Blackbird User's Guide
rev.2 Appendix A playroutine source** (pp.44-55) into 64tass syntax and
reassembling it directly, then substituting the handful of genuinely
per-song external table addresses by reading them straight out of the real
files (same technique as gotcha 39 in `sid-player-verify.md`: locate the
operand byte position via a first pass with placeholder constants, then read
the real value at that exact file offset — not guessed).

## Tooling blocker (confirmed, both tools, two independent files)

Both `SIDdecompiler.exe` and `sidm2-sid-trace.exe` fail on this player's
illegal/undocumented 6502 opcodes (`lax` $A7/$B3/$BF, `sbx` $CB — used
directly in the very first instructions of the play routine, e.g. `lax
zp_master` / `sbx #7`):

- `SIDdecompiler -a4096 -z -d -c -v2` on `Toy_Rocket.sid`: floods
  `Unimplemented opcode: cb at address $123d` 30,000 times (the emulator's
  own retry/timeout ceiling, not a crash), `-v2`'s own memory map shows
  almost the entire file still marked `?` (never accessed) beyond $123d,
  and the run ends with **`TraceNode pairs: 0`** — i.e. nothing useful was
  ever captured.
- `sidm2-sid-trace.exe orig.prg 20 1000 1003` on the same file: INIT
  reports "done" but produces all-zero SID registers, and **every one of 20
  frames shows 0 SID changes** — the tool's own built-in self-check flags
  this explicitly: `FAILED: PLAY @ $1003 produced 0 SID writes over 20
  frames ... treat as untraceable.` Reproduced identically on a second,
  independent file (`Reminiscence.sid`, load `$a000`, a different
  player-build variant per the PAT_B classification below) — same "done"
  INIT, same all-zero SID state, same 0-writes-per-frame failure.

This means **no trace-diff is achievable with the tools available in this
project for this player, on any file, regardless of reconstruction
quality** — a structural blocker (illegal-opcode emulation), not a
reconstruction-quality problem. RetroDebugger was not used (forbidden this
run — see `sid-player-verify.md`'s parallel-batch constraint).

## Static byte-level reconstruction (2 files, both PAT_A / v1.0-matching)

Manually transcribed `blackbird_v10.asm` (64tass, `.cpu "6502i"` for illegal
opcode support) from Appendix A's printed source, with repeated `.( .)`
local-scope labels renamed to be globally unique (`vloop_p1/p2/p3/ef/ex`,
`vskip_p1/p2/p3`, `noc1_tempo/lit`, `noc2_eos/copy`, `norestart_p2/ex`,
`no_fx_p1/ex`) and the custom assembler's `+`-prefix (local→global export
marker) and backtick (force-zp) syntax dropped as no-ops (64tass has no
local scoping in this flat file, and auto-selects zp addressing). The three
self-modified-operand `sta/lda !0,x`/`!0,y` placeholders (`m_buf1`,
`m_buf2`, `m_buf3`) were emitted as explicit `.byte $9d/$bd,$00,$00` to force
3-byte absolute encoding (per gotcha 36 — a plain `sta $0000,x` would let
64tass pick the shorter zp,X form).

**Pass 1** (externals as placeholder sentinels $9100-$9a00): assembled
clean, 1366 bytes ($1000-$1555 incl. the constant `freq_msb`/`freq_lsb`/
`pwprepare` tables). Byte-diffed against `Toy_Rocket.sid`'s real payload
over the comparable $1000-$14FF (1280-byte) range — the range covered by
the appendix's own printed code+constant-data, i.e. up to but not including
`initroutine` (see below for why `initroutine`'s real position is out of
scope): **97.5000%** (32/1280 bytes differ), and **every single diff traced
to one of the 9 genuinely-external per-song symbols** (`fxtable`,
`wavetable`, `filttable`, `fx_start`, `ins_ad`, `ins_sr`, `ins_wave`,
`ins_filt`, `INS_RESTART`/`INS_RESTART2`) — confirmed via the 64tass listing
file (`--list=`), not assumed.

**Pass 2**: read each external's real value directly out of
`Toy_Rocket.sid`'s own bytes at the operand offsets identified in Pass 1
(`fxtable=$15b9`, `wavetable=$1652`, `filttable=$158e`, `fx_start=$156c`,
`ins_ad=$1500`, `ins_sr=$151b`, `ins_wave=$1536`, `ins_filt=$1551`,
`INS_RESTART=4`, `INS_RESTART2=9`) and reassembled:

- **Toy_Rocket.sid** (load/init `$1000`, play `$1003`): **99.8438%**
  (1278/1280 bytes exact) over the $1000-$14FF range. The only 2 remaining
  bytes are the `jmp initroutine` operand itself (`$1001-$1002`) — see
  "initroutine" below for why this specific value is out of scope.
- **Glyptodont.sid** (load/init `$1000`, play `$1003`, independently
  re-derived externals: `fxtable=$15D4`(5588 dec), `wavetable=$169F`(5791
  dec), `filttable=$15AF`(5551 dec), `fx_start=$1580`(5504 dec),
  `ins_ad=$1500`, `ins_sr=$1520`, `ins_wave=$1540`, `ins_filt=$1560`,
  `INS_RESTART=4`, `INS_RESTART2=8`): **99.8438%** (identical ratio,
  same 2 bytes differing at the same 2 addresses) — confirms the fixed
  code is genuinely invariant across files, not a one-file coincidence.

**`initroutine`'s real address is a genuine, unresolved gap, not a bug**:
the real `jmp initroutine` targets are `$16c2` (Toy_Rocket) and `$1734`
(Glyptodont) — both well past our transcription's computed `$1500` (right
after the fixed `pwprepare` table). This is expected: the appendix's own
`.ext` declarations (`fxtable`, `wavetable`, `ins_*`, `streamstart`, etc.)
are per-song data placed by Birdcruncher in a variable-size block between
the fixed `seg_play` code (documented, transcribed above) and the
`seg_init` segment — a block whose size depends on how many
instruments/effects/notes the song actually uses, which the manual does
not document a formula for. **Left TODO, not guessed.**

**`initroutine`'s own code, compared positionally** (ignoring the segment
offset itself, i.e. comparing byte-for-byte against the real bytes at each
file's own true `jmp` target): 81/86 bytes match on both files, with the
**same 5-byte diff signature at the same 5 relative offsets on both files**
— 3 of those 5 are expected/uninteresting (`streamstart`'s 2-byte address,
read into `zp_inptr` via `lda #<streamstart`/`lda #>streamstart`, genuinely
differs per file: Toy Rocket's real value is `$22C9`, Glyptodont's is
`$245D`; plus the `jmp initroutine` operand covered above). But **2 are a
real, systematic, unexplained discrepancy**: the `ldy #>(unpackbufs+$200)`
immediate operand (relative offset `+35`) is `$9c` in our transcription
(placeholder `unpackbufs=$9a00`) but reads as the exact same real value,
**`$27`, on BOTH files** despite their different `streamstart`
addresses/song lengths — i.e. `unpackbufs`'s high byte is NOT per-song data,
it looks like a fixed buffer location reused across exports (plausible:
it's scratch working memory for unpacked note-stream data, not song
content) — though this is only confirmed at two files sharing the same
$1000 load address, so it's equally consistent with "relative to load
address" as with "a truly fixed absolute buffer"; a file loading elsewhere
(e.g. `Crank_Crank_Revolution.sid` at `$3500`) would disambiguate this but
wasn't successfully checked this pass (see below). Separately, the `bpl
clr` branch operand at relative offset `+28` is `$f4` in our transcription
(self-consistent, i.e. "clr" sits exactly where the appendix's zero-init
loop puts it) but is `$fa` in BOTH real files — identically — meaning the
actual shipped init routine has **6 extra bytes** between `sta zp_extsync`
and the `clr:` zero-loop that the appendix's printed source does not show.
Not chased further this pass (diminishing value: it doesn't affect the
fixed playroutine already confirmed, and cannot be resolved without either
a working disassembly — blocked, see above — or a live debugger — forbidden
this run). **Concrete next step for whoever picks this up**: (1) find what
6 bytes of extra zero-initialization the real init routine performs right
before the `clr` loop (candidates: an explicit `zp_trwpos`/`zp_master`
clear, or a `sei`/stack-reset not printed in the manual's simplified
excerpt); (2) re-derive externals for a file loading at a different address
(the attempt on `Crank_Crank_Revolution.sid`, load `$3500`, this pass
produced implausible external addresses — e.g. `ins_sr` computing to
decimal 40251 — meaning either the fixed-code offset table used above
doesn't transfer cleanly to a different load address for some file-specific
reason, or that particular file needs its own from-scratch offset check;
not resolved, left as a genuine open item rather than force a guess).

## PAT_A / PAT_B version split (new finding, all 37 tagged files' headers read)

Reading just the 6 bytes at each file's own PSID `play` address (no
disassembly needed) splits the 37 tagged files into two distinct byte
patterns at the very first instructions of the play routine:

- **PAT_A** (`a7 xx f0 0e cb 07` — `lax zp_master / beq do_execute / sbx
  #7`, exactly matching the Appendix A v1.0 source transcribed above): 28 of
  37 files, including both files reconstructed to 99.84% above.
- **PAT_B** (`a7 xx cb 07 30 0c` — `lax zp_master / sbx #7 / bmi ...`, a
  reordered/modified trampoline): 7 files — `A_Computer_in_My_Backpack.sid`,
  `Lunatico_Note.sid`, `Lunatico_Side_1.sid`, `Lunatico_Side_2.sid`,
  `Perfectly_Well-Adjusted.sid`, `Reminiscence.sid`, `To_Die_For.sid`. Not
  reconstructed this pass (out of scope — the appendix explicitly documents
  only v1.0; PAT_B is presumably v1.1 or v1.2, consistent with the two
  known later CSDb releases).
- 2 files (`Your_Heptacular_Eyes.sid`, `Platform_Hopping.sid`) show neither
  pattern at that fixed offset — not investigated further this pass
  (`Platform_Hopping.sid`'s own PSID play address reads as `$0000`, itself
  worth a closer look before assuming it's a Blackbird export at all).

## Artifacts

`blackbird_v10.asm` (Pass-2, Toy_Rocket externals), `blackbird_glyp.asm`
(Pass-2, Glyptodont externals), both under this session's scratchpad —
not checked into the repo (scratchpad is gitignored per project convention;
re-derivable from this manifest plus the User's Guide PDF's Appendix A).
