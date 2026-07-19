# sid-factory-ii-driver-11 — reconstruction manifest

See `knowledge/players/sid-factory-ii-driver-11.md` for the full
Verification narrative (the IRQ-dispatch / `-P` override discovery is the
valuable part — read that first). This file records the residual byte-level
diff, recomputed directly from the original file and the surviving
reassembled `.prg`.

## File: `d11_arpeggio.sid`

load `$1000`, init `$1000`, real per-frame play dispatcher `$1006` (the
PSID header's own declared play address, `$16CC`, is a command-flag byte,
not real code — see the card). Disassembled with `-a4096 -I4096 -P4102`
(all decimal: `$1000`/`$1000`/`$1006`).

**Reassembly (`arpeggio2.prg`, 6,480 bytes at `$1000-$294F`) vs. pristine
payload: 61/6480 bytes differ (99.0586%)** — matches the card's own reported
figure exactly, recomputed directly from the surviving `.prg`:

```
$131c: pristine=$00  decompiler-drifted=$06
$16cc: pristine=$40  decompiler-drifted=$80
$16ce: pristine=$0f  decompiler-drifted=$03
$16d8: pristine=$00  decompiler-drifted=$01
$16e1: pristine=$00  decompiler-drifted=$0a
$16e2: pristine=$00  decompiler-drifted=$08
$16e3: pristine=$00  decompiler-drifted=$09
```
(first 7 of 61 shown; the remainder cluster in the same `$16xx` self-modified
command-dispatch working-storage region — re-derivable directly by
byte-diffing `original.prg` against a fresh reassembly at the same flags if
ever needed in full).

Note `$16cc` itself is in this list — the command-flag byte the PSID header
declares as "play address" is itself self-modified working storage (`$40`
pristine = RTI opcode byte, per the card's own account), consistent with the
rest of the cluster.

Trace-diff (`play=$1006`, both files): **193 register writes, exact match**
— confirming the residual byte-diff is self-modified workspace, not a
defect.
