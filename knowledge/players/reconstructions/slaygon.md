# slaygon — reconstruction manifest

See `knowledge/players/slaygon.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

## Relocation base (applies to every file)

`SIDdecompiler`'s `-v2` memory-touch map reports `Start: $0334` on every file
tested here, well below the PSID header's own load address (`$1000`).
Relocating with `-a4096` (decimal for `$1000`, i.e. the PSID load address —
the naive choice) produces a plausible-looking but subtly wrong reassembly.
The correct command relocates to the map's own `Start:` address instead:

```
SIDdecompiler.exe <file>.sid -o<file>.asm -a820 -z -d -c -v2
```

(`820` = decimal for `$0334`.) This lands `init`/`play` exactly on the file's
real `$1000`/`$1003` addresses and produces one contiguous, non-wrapping
`$0334-<end>` block. Same mechanism as the `soundmonitor`/`soundmaster`
cards' relocation notes (this project's `hard_won_gotchas` #40 / lessons
31/33/38) — a new confirmed instance of that pattern for this player.

The block `$0334-$0356` (the C64's RS-232/tape-buffer page) is real,
load-bearing persistent state populated from the PSID payload's own leading
bytes, read directly by the SIDId-signature code (`LDA $033F`/`$0342`/`$0345`
→ `STA $D412`/`$D413`/`$D414`) — not zero-initialized runtime workspace.

## The one recurring divergence: a drifted per-voice working-storage table

After correct relocation, every file byte-diffs to 98.6%-99.0%, with 100% of
the mismatches clustered in one ~40-70-byte range, `$16C9-$1727` (exact
extent is file-length-dependent). `init` (at native `$1046`) explicitly
zeroes *some* of this range (`$16D5-$16D7`, `$1712-$1721` triples, `$1727`
triple, `$034C-$0356`) but not other parts of it (`$16C9`, `$16CB`,
`$16CD-$16D3`, `$16DC-$16E9`, `$16EE`, `$16F4-$16F6`) — i.e. this is a MIX of
genuinely-dead-after-init workspace and load-bearing cold-start constants
(the per-voice pitch/pulse-width/ADSR staging values used by the first few
play calls). `SIDdecompiler`'s default `-t 30000` emulation window captures
this whole range's *post-execution* (drifted) snapshot rather than the
pristine file bytes for both classes alike. The fix is the same for both:
substitute the pristine byte (read directly from the original SID payload)
at every diverging address. No guessing was needed — the correct value is
simply the real file's own byte, already known before patching.

## File 1: `MUSICIANS/S/Slaygon/2001.sid`

load `$1000` (embedded in payload, PSID header field 0), init `$1000`, play
`$1003`, payload 3,064 bytes. 42 bytes patched (unpatched reassembly →
98.6292%; patched → 100.0000%, confirmed by direct byte-diff, and
register-write-exact over 100 traced frames):

```
$16cb: pristine=$80  decompiler-drifted=$50
$16cd: pristine=$42  decompiler-drifted=$38
$16ce: pristine=$45  decompiler-drifted=$48
$16cf: pristine=$1b  decompiler-drifted=$4b
$16d1: pristine=$43  decompiler-drifted=$a2
$16d2: pristine=$1a  decompiler-drifted=$1b
$16d3: pristine=$63  decompiler-drifted=$43
$16d6: pristine=$08  decompiler-drifted=$14
$16d8: pristine=$42  decompiler-drifted=$46
$16dc: pristine=$34  decompiler-drifted=$07
$16dd: pristine=$19  decompiler-drifted=$27
$16de: pristine=$27  decompiler-drifted=$26
$16e0: pristine=$38  decompiler-drifted=$46
$16e1: pristine=$42  decompiler-drifted=$38
$16e4: pristine=$00  decompiler-drifted=$3f
$16e5: pristine=$04  decompiler-drifted=$00
$16e6: pristine=$01  decompiler-drifted=$00
$16e8: pristine=$01  decompiler-drifted=$00
$16e9: pristine=$01  decompiler-drifted=$00
$16eb: pristine=$01  decompiler-drifted=$00
$16ee: pristine=$75  decompiler-drifted=$14
$16f4: pristine=$a5  decompiler-drifted=$6e
$16f5: pristine=$59  decompiler-drifted=$16
$16f6: pristine=$12  decompiler-drifted=$46
$16fb: pristine=$01  decompiler-drifted=$00
$16fc: pristine=$00  decompiler-drifted=$01
$16fd: pristine=$02  decompiler-drifted=$01
$16fe: pristine=$0a  decompiler-drifted=$01
$16ff: pristine=$02  decompiler-drifted=$09
$1700: pristine=$e8  decompiler-drifted=$01
$1701: pristine=$94  decompiler-drifted=$6a
$1702: pristine=$6a  decompiler-drifted=$7f
$1706: pristine=$00  decompiler-drifted=$80
$1707: pristine=$00  decompiler-drifted=$80
$1708: pristine=$a0  decompiler-drifted=$00
$1709: pristine=$00  decompiler-drifted=$20
$170a: pristine=$00  decompiler-drifted=$50
$170b: pristine=$50  decompiler-drifted=$40
$170c: pristine=$00  decompiler-drifted=$df
$170d: pristine=$00  decompiler-drifted=$af
$170e: pristine=$af  decompiler-drifted=$bf
$1726: pristine=$00  decompiler-drifted=$01
```

## File 2: `MUSICIANS/S/Slaygon/Basoni.sid`

load `$1000`, init `$1000`, play `$1003`, payload 3,075 bytes. 32 bytes
patched (unpatched reassembly → 98.9593%; patched → 100.0000%;
register-write-exact over 100 traced frames):

```
$16cd: pristine=$4c  decompiler-drifted=$31
$16ce: pristine=$39  decompiler-drifted=$30
$16cf: pristine=$89  decompiler-drifted=$c5
$16d1: pristine=$11  decompiler-drifted=$a5
$16d2: pristine=$1a  decompiler-drifted=$19
$16d5: pristine=$00  decompiler-drifted=$01
$16d6: pristine=$00  decompiler-drifted=$01
$16d7: pristine=$00  decompiler-drifted=$01
$16d8: pristine=$3c  decompiler-drifted=$31
$16dc: pristine=$0d  decompiler-drifted=$27
$16de: pristine=$19  decompiler-drifted=$1a
$16df: pristine=$54  decompiler-drifted=$0d
$16e0: pristine=$18  decompiler-drifted=$23
$16e1: pristine=$3c  decompiler-drifted=$31
$16e2: pristine=$00  decompiler-drifted=$55
$16e3: pristine=$00  decompiler-drifted=$27
$16e5: pristine=$05  decompiler-drifted=$00
$16e8: pristine=$00  decompiler-drifted=$01
$16f4: pristine=$3c  decompiler-drifted=$00
$16f5: pristine=$38  decompiler-drifted=$3b
$16f6: pristine=$96  decompiler-drifted=$9f
$16fd: pristine=$0e  decompiler-drifted=$11
$1700: pristine=$ec  decompiler-drifted=$a9
$1703: pristine=$17  decompiler-drifted=$18
$1707: pristine=$70  decompiler-drifted=$40
$1709: pristine=$00  decompiler-drifted=$50
$170c: pristine=$00  decompiler-drifted=$af
$1718: pristine=$00  decompiler-drifted=$3b
$171b: pristine=$00  decompiler-drifted=$91
$171e: pristine=$00  decompiler-drifted=$cd
$1721: pristine=$00  decompiler-drifted=$0a
$1727: pristine=$00  decompiler-drifted=$4f
```

## File 3: `MUSICIANS/S/Slaygon/Sadis.sid`

load `$1000`, init `$1000`, play `$1003`, payload 3,946 bytes. 38 bytes
patched (unpatched reassembly → 99.0370%; patched → 100.0000%;
register-write-exact over 100 traced frames):

```
$16c9: pristine=$00  decompiler-drifted=$01
$16ca: pristine=$21  decompiler-drifted=$24
$16cd: pristine=$46  decompiler-drifted=$41
$16ce: pristine=$4b  decompiler-drifted=$48
$16cf: pristine=$5a  decompiler-drifted=$1d
$16d0: pristine=$1b  decompiler-drifted=$1d
$16d1: pristine=$65  decompiler-drifted=$85
$16d2: pristine=$1c  decompiler-drifted=$1d
$16d3: pristine=$1b  decompiler-drifted=$6d
$16d4: pristine=$1b  decompiler-drifted=$1d
$16d5: pristine=$03  decompiler-drifted=$05
$16d6: pristine=$00  decompiler-drifted=$05
$16d7: pristine=$03  decompiler-drifted=$05
$16d8: pristine=$1b  decompiler-drifted=$41
$16dc: pristine=$02  decompiler-drifted=$07
$16dd: pristine=$0d  decompiler-drifted=$23
$16de: pristine=$2f  decompiler-drifted=$1a
$16df: pristine=$1b  decompiler-drifted=$18
$16e0: pristine=$3c  decompiler-drifted=$35
$16e1: pristine=$3f  decompiler-drifted=$41
$16e3: pristine=$00  decompiler-drifted=$41
$16e6: pristine=$0b  decompiler-drifted=$00
$16e9: pristine=$00  decompiler-drifted=$01
$16ea: pristine=$00  decompiler-drifted=$01
$16ee: pristine=$80  decompiler-drifted=$70
$16f0: pristine=$70  decompiler-drifted=$80
$16f4: pristine=$64  decompiler-drifted=$6e
$16f5: pristine=$36  decompiler-drifted=$00
$16f6: pristine=$3e  decompiler-drifted=$9f
$16fd: pristine=$03  decompiler-drifted=$01
$16fe: pristine=$07  decompiler-drifted=$01
$16ff: pristine=$03  decompiler-drifted=$01
$1701: pristine=$ec  decompiler-drifted=$a9
$1702: pristine=$94  decompiler-drifted=$40
$1704: pristine=$17  decompiler-drifted=$18
$1706: pristine=$d0  decompiler-drifted=$80
$170a: pristine=$00  decompiler-drifted=$50
$170d: pristine=$00  decompiler-drifted=$af
```

## Tooling notes specific to this player

- `sidm2-sid-trace.exe <file.prg> <frames> 1000 1003 0` — same init/play
  address pair works across all 20 tagged files (identical entry-point
  convention confirmed on 3 independent files).
- The reassembled `.prg` load address is `$0334` (from the `-a820`
  relocation), not `$1000` — when byte-diffing or building an `orig.prg` to
  trace, always compute `skip = realLoadAddr - reassembledLoadAddr` (here
  `$1000 - $0334 = $0CCC = 3276`) before comparing/patching, not a naive
  byte-0-to-byte-0 comparison.
