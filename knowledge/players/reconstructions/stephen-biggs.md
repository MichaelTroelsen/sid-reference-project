# stephen-biggs — reconstruction manifest

See `knowledge/players/stephen-biggs.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

Both files use the same player routine (identical code, identical general
workspace layout: 3 voice "busy/gate" flag bytes, 3 voice control bytes, 3
voice song-data pointer pairs, 3 voice frequency-storage pairs, one frame
countdown byte, one unrelated stray flag byte). The player's `play` routine
writes all 6 frequency-storage bytes into the SID's oscillator frequency
registers unconditionally, every single frame, regardless of whether a note
actually triggered that frame — so a stale/wrong workspace byte doesn't just
sit inertly, it gets flushed straight to the SID chip on the very next frame,
making this workspace class load-bearing rather than dead (the opposite of
gotcha 10's usual finding, closer to gotchas 16/17/41's drifted-table case).

## File 1: `MUSICIANS/B/Biggs_Stephen/Blue_Max.sid`

load `$759c`, init `$759c`, play `$7620`, payload 1,478 bytes.

`SIDdecompiler`'s own `-v2` memory map reports `Start: $4085 End: $9016` —
far below and above the file's own load address — caused by two isolated
absolute-address workspace bytes the player code references directly
(`l4085`, one write-only stray flag byte; `l9000`-`l9016`, a 23-byte voice
workspace block) that live in fixed RAM completely OUTSIDE the loaded SID
payload (part of Blue Max the game's own free RAM, not part of the ripped
tune). Relocating to `-a16517` (decimal for `$4085`, the `-v2` Start
address, per gotcha 40) produces a reassembly that byte-diffs
**100.0000% exact (0/1478 diffs)** against the real payload directly — the
disassembly itself needed no correction.

Trace-diff (50 then 300 frames) still showed a real divergence: voice 2 and
3 frequency registers get written 24 frames too early in the reassembly
(frame 3 instead of frame 27), with the exact wrong values traceable to
`SIDdecompiler`'s captured (post-execution-snapshot) initial byte values at
6 workspace addresses **entirely outside the loaded payload** — these have
no "pristine original byte" to recover from the SID file itself, since the
real HVSC rip never included that memory. Patched to `$00` (the standard
cold-RAM assumption used by both the reference tracer and this project's own
convention), matching real playback exactly:

```
$9010: decompiler-captured=$31  patched=$00   (voice1 freq lo, dead — masked by voice1's own frame-3 trigger)
$9011: decompiler-captured=$1c  patched=$00   (voice1 freq hi, dead — masked by voice1's own frame-3 trigger)
$9012: decompiler-captured=$c3  patched=$00   (voice2 freq lo — load-bearing, caused the frame-3 false trigger)
$9013: decompiler-captured=$11  patched=$00   (voice2 freq hi — load-bearing)
$9014: decompiler-captured=$0c  patched=$00   (voice3 freq lo — load-bearing)
$9015: decompiler-captured=$07  patched=$00   (voice3 freq hi — load-bearing)
```

Result after patching: trace-exact (register-write-identical,
`sidm2-sid-trace.exe`, `init=$759c play=$7620`) over 300 frames (~6 seconds
of real playback), confirmed via plain `diff` of the two write logs (0
differences).

## File 2: `MUSICIANS/B/Biggs_Stephen/Sentinel.sid`

load `$1c70`, init `$1c70`, play `$2090`, payload 1,078 bytes (the 1984
Synapse shooter, NOT the Firebird game — see the main card's identity
correction).

Here the `-v2` map's Start/End addresses ($1c70/$20a5) match the file's own
load address exactly (no external-workspace complication, unlike Blue Max) —
the equivalent voice workspace block sits at `$1ec7-$1edf`, INSIDE the
loaded payload, so its true cold-start values are directly recoverable from
the original file bytes. Direct `-a7280` relocation reassembled to the
correct length ($1c70-$20a5, matching the original exactly) but only
98.4230% byte-exact (17/1078 diffs), all confined to that one workspace
region:

```
$1eca: pristine=$1c  decompiler-drifted=$00   (voice1 gate/busy flag)
$1ecb: pristine=$1c  decompiler-drifted=$00   (voice2 gate/busy flag)
$1ecc: pristine=$3c  decompiler-drifted=$00   (voice3 gate/busy flag)
$1ecd: pristine=$41  decompiler-drifted=$40   (voice1 control byte)
$1ece: pristine=$41  decompiler-drifted=$40   (voice2 control byte)
$1ecf: pristine=$41  decompiler-drifted=$40   (voice3 control byte)
$1ed0: pristine=$13  decompiler-drifted=$9d   (voice1 song-pointer lo)
$1ed2: pristine=$ab  decompiler-drifted=$fd   (voice2 song-pointer hi)
$1ed4: pristine=$11  decompiler-drifted=$73   (voice3 song-pointer lo)
$1ed6: pristine=$df  decompiler-drifted=$0f   (voice1 freq lo — load-bearing, see below)
$1ed7: pristine=$27  decompiler-drifted=$43   (voice1 freq hi — load-bearing)
$1ed8: pristine=$1e  decompiler-drifted=$3e   (voice2 freq lo — load-bearing)
$1ed9: pristine=$19  decompiler-drifted=$2a   (voice2 freq hi — load-bearing)
$1eda: pristine=$18  decompiler-drifted=$30   (voice3 freq lo)
$1edb: pristine=$02  decompiler-drifted=$04   (voice3 freq hi)
$1edc: pristine=$01  decompiler-drifted=$00   (frame countdown)
$1edf: pristine=$89  decompiler-drifted=$87   (unrelated stray flag byte)
```

Note this file's song-pointer/gate-flag bytes (`$1eca-$1ed0`, `$1ed2`,
`$1ed4`) are overwritten unconditionally by `init` before first use, so
those particular diffs are cosmetically real but functionally dead — the
genuinely load-bearing ones are the frequency-storage pair for voice 1/2
(`$1ed6-$1ed9`), which caused a real early/wrong write at frame 2 (matching
Blue Max's mechanism exactly). Patched all 17 bytes to their real original
values (recovered directly from the pristine SID payload, not guessed) →
**100.0000% byte-exact (0/1078 diffs)**, reassembled from the patched
source (`Sentinel_patched.asm`).

Trace-diff (50 then 300 frames) confirmed exact register-write match after
patching (0 diffs via plain `diff` of both write logs); unpatched
reassembly showed the same class of false-early-trigger defect as Blue Max
(voice1/2 frequency registers written at frame 2 instead of their real
later trigger frame, using the drifted values listed above).

## Blocked: the RSID "Invention" files (Two/Three Part Invention series)

`Two_Part_Invention_1.sid` (RSID, load `$8000`, init `$8000`, **play `$0000`**
— an IRQ-driven RSID convention, the routine installs its own IRQ vector at
init and is never called via a directly-declared play address) makes
`SIDdecompiler.exe` hang indefinitely with zero output (confirmed: the log
file it was writing to stayed 0 bytes; the process had to be killed via
`taskkill`) — the same failure signature as gotcha 23 (SidBang64's
custom-IRQ-vector hang), not gotcha 13's "0 trace nodes but completes" case.
No `-P`/`-I` override address is known for this player's IRQ dispatcher (no
disassembly reached far enough to find one), so this subset of the 9 tagged
files remains genuinely unverified — a real, structural blocker, not a
skipped step. The two files verified above (Blue Max, Sentinel) are both
PSID rips with directly-callable play addresses, a materially different
export convention from the RSID Invention pieces; do not assume this
player's IRQ path behaves the same way without independently confirming it.
