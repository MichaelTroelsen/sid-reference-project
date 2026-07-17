# `scripts/dev/` — developer tools

Ad-hoc tooling for reverse-engineering work. Nothing here is part of
`npm run all`; these are run by hand.

- `find-uncarded-tags.js` — player tags with no knowledge card yet.
- `find-connections.js` — candidate player<->player connections from
  composer-overlap over `data/composers/*.json` + card `edges[]`. Surfaces
  bridge composers, high-overlap card pairs with no curated edge (with the
  actual shared composers), and the curated lineage clusters. Confirmed pairs
  become prose `[[links]]`, never machine edges — see the script header for the
  discipline that separates real scene cohorts from popular-tool/omnivore noise.
- `vsid-trace.js` — VICE-based SID register-write tracer (below).

---

## `vsid-trace.js` — tracing RSID files that the other tracers can't drive

### Why it exists

`sidm2-sid-trace.exe` drives a tune by calling the **PSID-declared play
address** once per frame. RSID files that install their own IRQ declare
`playAddress = $0000` — there is nothing to call, so that tracer honestly
returns `write_count: 0`. `SIDwinder.exe` refuses RSID outright.

`vsid` runs a full emulated C64 with autonomous VIC/CIA interrupt delivery, so
a self-installing-IRQ player is driven by the machine itself. That is the whole
point of this wrapper.

**Validated result:** every previously-blocked tag now traces —
`Music_Processor` (64/64 files, 0 failures), `Cycleburner_Digi`,
`Toaster_Digi`, `Assassin_Sample_Mixer`, `OmegaSupreme_Digi`,
`Faith_Sample_Mixer`, `Zod_Digi`. All are RSID with `play=$0000`, and all
returned 0 writes from `sidm2-sid-trace.exe`.

### Usage

```
node scripts/dev/vsid-trace.js <file.sid> [--frames 50] [--json] [--out <path>]
```

Key options (`--help` for all):

| option | meaning |
| --- | --- |
| `--frames <n>` | frames to trace (default 50 ≈ 1 second) |
| `--song <n>` | subtune (passes vsid's `-tune`) |
| `--json` | machine-readable output |
| `--changed-only` | drop writes that don't change the register — matches `sidm2-sid-trace.exe` semantics |
| `--keep-dump <path>` | keep the raw vsid dump instead of deleting it |
| `--keep-preamble` | retain VICE's own pre-init write (see below) |
| `--cycles-per-frame <n>` | override frame length |
| `--vsid <path>` | path to `vsid.exe` |

`vsid.exe` is looked up at `C:\winvice\bin\vsid.exe`, overridable via the
`VSID` env var or `--vsid`. It is **not on PATH**.

### The underlying vsid invocation

```
vsid.exe -console -sounddev dump -soundarg <out.txt> -limitcycles <N> -pal <file.sid>
```

- `-console` suppresses the GUI.
- `-limitcycles <N>` forces a clean exit after N CPU cycles.
- `-pal` / `-ntsc` pins the sync factor so the cycles→frames maths is right.
  The wrapper picks this from the SID header's clock flag.
- **`vsid` exits with status 1 on a normal `-limitcycles` termination.** The
  exit code says nothing about success — check that the dump file exists.
  (A missing input file exits 127.)
- `-soundarg` accepts an absolute path.

PAL is 19656 cycles/frame (63 × 312); NTSC is 17095 (65 × 263).

## The dump format (reverse-engineered)

There is **no header and no trailer**. The file interleaves two kinds of line.

### 1. Register writes — `<delta_cycles> <reg> <value>`

All three fields are **decimal**.

```
342 24 15
1294 2 0
25 3 8
25 4 64
99584 4 64
```

- **field 1 is a DELTA** — CPU cycles since the *previous* write, not an
  absolute timestamp. Accumulate to get absolute time. (Confirmed: the deltas
  over a `-limitcycles 1000000` run sum to 991,059 — i.e. the whole run, with
  the remainder being the tail after the last write.)
- **field 2 is the register offset from `$D400`** (0–24). `24` = `$D418`.
  Offsets > 24 (2nd/3rd SID) are ignored by this wrapper.
- **field 3 is the byte written** (0–255).

Every write is recorded, **including redundant ones** (writing a register's
current value again). This is a real difference from `sidm2-sid-trace.exe`,
which only records value-*changing* writes — see below.

### 2. Full SID-state snapshots — repeating 7-line blocks

```
FREQ:   0000 0000 0000
PULSE:  0000 0000 0000
CTRL:     00   00   00
ADSR:   0000 0000 0000
FILTER: 0000 RES: 00 MODE/VOL: 0f
ADC: ff ff
OSC3: 00 ENV3: a4
```

These are a periodic rendering of current chip state, **not writes**. They
dominate the file by volume (~15,872 blocks vs 37 writes in one real sample)
and carry no timing the deltas don't already give. The wrapper discards them.

A robust parse rule is "a line is a write iff it matches `^\d+\s+\d+\s+\d+$`" —
snapshot lines always start with a letter.

### VICE's pre-init write

Every dump observed begins with:

```
342 24 15
```

`$D418 = $0F` at cycle 342 — the *identical* cycle across PSID and RSID and
across unrelated players (Hubbard, Galway, Daglish, Music_Processor). That
consistency is what identifies it as VICE's own write rather than any tune's.
Left in, it reads as "this player sets volume to $0F", which is wrong, so the
wrapper strips exactly this one write (`--keep-preamble` retains it).

**It strips nothing else, deliberately.** VICE may emit a few more pre-init
writes (e.g. Commando shows gate-clears `$D404=0 / $D40B=0 / $D412=0` before
its init runs), but those are indistinguishable from a player's own
register-clearing prologue — Wizball and Cobra open their real inits with very
similar-looking descending clears. An earlier "strip everything before the
first big inter-write gap" rule ate the entire 20-write init of every
`Music_Processor` RSID. Under `--changed-only` these extra writes mostly
vanish anyway, since they are `0 → 0` no-ops.

## Cross-check against `sidm2-sid-trace.exe`

On `Hubbard_Rob/Commando.sid` (PSID, which both tools can drive), 50 frames:

| | writes |
| --- | --- |
| `sidm2-sid-trace.exe` | 374 |
| `vsid-trace.js` raw | 532 |
| `vsid-trace.js` `--changed-only` | **374** |

The raw 532 → 374 gap is entirely the redundant-write difference. Modelling the
SID's reset state as `$00` on every register (which is what `sidm2-sid-trace`
does) and dropping VICE's one preamble write, the two tools produce an
**identical `(register, value)` sequence over all 374 writes — zero
divergences.** `REG_NAMES` here matches `sidm2-sid-trace`'s vocabulary exactly
(`filter_freq_lo/hi`, `filter_res_control`, `filter_mode_volume`) so traces can
be diffed without a translation table.

**Cycle timings are not comparable between the two tools** and should not be
diffed. `sidm2-sid-trace` calls play at synthetic frame boundaries; vsid runs a
real machine where the IRQ fires at a raster position, so absolute cycles
differ by roughly a frame. The write *sequence* is the thing that agrees.

### Known definitional difference at the window edge

`sidm2-sid-trace`'s "50 frames" means *init + 50 play calls*. This wrapper's
means *50 frames of emulated time from the tune's first SID write* — and the
machine spends ~1 frame reaching init, so the wrapper captures init + ~49 play
calls. On Commando that shows up as 372 vs 374 under `--changed-only`. It is a
window-boundary artifact, not a disagreement about what the player does. Ask
for a frame or two more if you need an exact-length window.

## Reading the output

`cadence` is a heuristic over how many frames contained writes:

- `per-frame (~50Hz, conventional player)` — ≥90% of frames had writes.
- `sparse (writes only on note/state changes)` — <40%. Normal for primitive
  editors: `Music_Processor` writes only when a note changes (e.g.
  `All_My_Love.sid` gates a note off at frame 14 and on at frame 15, a steady
  15-frame / 0.3s note period). Sparse output here is the player being simple,
  not the trace failing.

Digi players are the opposite extreme — `Hero/Digi_Dreams_01.sid`
(`OmegaSupreme_Digi`) touches **only `$D418`**, ~77 writes/frame, values
tracing a smooth waveform (`03 03 04 05 06 08 08 09 09 09 08 07 06 05 04 03`):
4-bit PCM pushed through the volume register.

Note for scripted use: digi traces are large. `child_process.execFileSync`'s
default 1 MB `maxBuffer` overflows (`ENOBUFS`) on them — raise it or use
`--out`.
