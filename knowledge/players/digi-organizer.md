# Digi-Organizer

```json
{
  "id": "digi-organizer",
  "name": "Digi-Organizer",
  "aliases": ["Digi-Organizer"],
  "authors": ["Pawel Soltysinski (Polonus/Padua, Quartet, Science 451)", "Marco Wienkoop (Lubber/Padua)"],
  "released": "1991-03-27 (Padua, released at Horizon Easterparty 1991)",
  "status": "in-progress",
  "platform": "Native C64 tool. NOT a standalone SID music player/tracker — an add-on 4th-channel digi-sample module + editor meant to be loaded alongside a separately-composed SID tune (author's own example pairs it with Voicetracker).",
  "csdb_release": 871,

  "memory": {
    "load_address": "Digi-performer module: $9000-$91FF player code, $9200-$94FF tables, $9500-$9FFF pattern space, $A000 up to $D000 sample data. The host SID tune it rides alongside loads separately (author's own worked example uses $1000/$1003 for a Voicetracker tune) — per the program's own built-in manual (digi-organizer_manual.txt, CSDb release 871).",
    "zero_page": "One byte, $F8 (per DeepSID/SIDId player spec table, data/players.json 'Digi-Organizer' entry).",
    "layout": "Per the manual: $9000-$91FF = digi player code; $9200-$94FF = 'important datas' (tables, unspecified which); $9500-$9FFF = pattern space; $A000-$D000 = raw sample data. Patterns are fixed-length 32 ($20) rows, shortenable by writing $FF as the instrument-number byte to end a pattern early. The 'Track-Edit' order list is terminated by $FF (loop from start) or $FE (stop playing)."
  },
  "entry": {
    "init": "$9000 for the digi module itself ('jsr $9000' after the host tune's own init, e.g. 'jsr musicinit'), per the manual. CONFIRMED by disassembly (2026-07-23): real byte at $9000 is `4C 40 90` = `JMP $9040`, the module's real init body (sets up CIA2 timers/NMI vector, zeroes workspace) — matches the manual literally, not just approximately.",
    "play": "$9003 for the digi module ('jsr $9003' alongside the host tune's own play call, e.g. 'jsr musicplay'), per the manual. CONFIRMED by disassembly (2026-07-23): real byte at $9003 is `4C 87 90` = `JMP $9087`, a rate-divider dispatcher (`DEC` a countdown byte at $9081, `RTS` early most calls) — matches the manual literally."
  },
  "speed": "Editor lets the user pick the digi routine's own call rate independent of the host tune, via SHIFT+A through SHIFT+I in the UI (9 speed settings) — per the manual. CONFIRMED mechanism (2026-07-23, disassembly): the $9003 entry is a rate-divider — `DEC $9081` (a countdown byte, reloaded from a template constant at $908E by an $91BD helper called from init); only when it goes negative does the real per-row work happen, else an early `RTS`. This is the '9 speed settings' knob. A SEPARATE, faster mechanism drives the actual digi-sample output: CIA2 Timer A/B are cascaded (init sets $DD0E=$11, $DD0F=$51 — Timer B counts Timer A underflows) and the CIA2 IRQ line (wired to NMI on real hardware, vector $FFFA/$FFFB) is pointed at a small self-modifying NMI handler ($9157 in the one real file checked) that increments a self-modified sample-pointer operand and writes the nibble to $D418 (the classic volume-register DAC trick) — i.e. TWO independent interrupt sources drive this player: raster/CIA1 IRQ → $9003 (row-rate dispatcher) and cascaded-CIA2-timer NMI → sample DAC output. Not stated anywhere in the manual; this is new information from disassembly, not a manual-restated fact.",

  "data_format": {
    "order_list": "'Track-Edit' list, one byte per step, terminated by $FF (loop to start) or $FE (stop) — per the manual.",
    "patterns": "Fixed at 32 ($20) rows by default; a pattern can end early by placing $FF in the instrument-number byte of a row — per the manual.",
    "instruments": "64 digi-sample slots (per DeepSID/SIDId spec table). Load-Sample menu shows each slot as 'aa:hb-he' — sample number, hi-byte-only of start address, hi-byte-only of end address — per the manual (implies page-aligned sample blocks).",
    "wavetable": "N/A — this module only plays back raw 4-bit digi samples; it has no SID waveform/arpeggio table of its own (DeepSID spec table lists 'arpeggio'/'pulsating'/'filtering'/'vibrato' all as 'N/A' for this entry).",
    "pulsetable": "N/A — see wavetable note.",
    "filtertable": "None documented; the manual explicitly advises against using the SID filter in the paired host tune 'b'coz of samples quality (when playing)', i.e. filter use is discouraged, not that this module implements one."
  },
  "effects": {
    "encoding": "TODO: only the two order-list terminator bytes ($FF loop, $FE stop) and the per-row pattern-end marker ($FF as instrument number) are documented; no other command/effect encoding found.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "It is NOT a music player — DeepSID's own spec table says so explicitly: 'noteworthy: No SID player; optionally load your own' and 'description: This was originally designed as a way to add a fourth digi channel to any music player.' Despite the tag ending up in this project's digi/sample coverage bucket, do not describe it as a tracker/replayer.",
    "The author's own built-in help text survives as a plain-text manual attached to the CSDb release (digi-organizer_manual.txt, release 871) — a rare primary source for this project's digi-class families, giving real memory-map and entry-point facts without any disassembly. Quoted directly in the json block above.",
    "Widest composer spread in this batch: 33 files across 11 composers (2NY, Active, Adam Morton, Boris Koester, Chromance/Sphere, Feekzoid, Jer, Phyton, Richard Bayliss, The Mighty Bulldozer, Yoko — counted directly from data/composers/*.json 'player' fields, not COVERAGE.md). Per this project's own concentration heuristic that marks published tools, this is a genuinely released, freely distributed editor, not a personal routine — consistent with the CSDb release, manual, and demo disk it shipped with.",
    "Authorship is slightly muddied: CSDb's release-page credits list both Polonus and Lubber under 'Code', and SIDId (data/sidid.json) names both as 'authors', but the manual itself — written in first person by Polonus — credits only 'Polonus/Padua' for coding and 'Tracker and Polonus' for testing. Lubber's contribution to this specific release may be to a bundled companion tool ('mzx tools.zip', also on the release) rather than the digi-organizer code itself; not resolved here.",
    "Designed to overlay a 4th digi channel onto a separately-composed 3-voice SID tune (worked example in the manual pairs it with a Voicetracker music block at $1000/$1003) rather than being a self-contained composing environment — the host tune and the digi module are two independent, separately-loaded blocks glued together at runtime by calling both init/play pairs each frame.",
    "Sample directory entries store only the high byte of each sample's start/end address ('aa:hb-he' in the Load-Sample menu per the manual) — implies samples are handled as whole memory pages, not arbitrary byte ranges.",
    "Real HVSC rips are RSID (not PSID), with the PSID-header `play` field = $0 — the digi module is never called by a fixed 'play' address the header names; it's dispatched by a raster/CIA1 IRQ the per-file wrapper's own `init` installs (see `entry.play`'s CONFIRMED note). The header `init` address also varies per file ($9400 for Koester's Digi-Music_001, $9340 for 2NY's Heavy-Beat, $9C00 for Active's Digitune, etc.) — that address is the PER-FILE WRAPPER's own init (glue code + the host tune, different every rip), not the digi module's own $9000 entry. The module itself (`jsr $9000`/`jsr $9003`) is called FROM inside that per-file wrapper, exactly as the manual describes for a hand-integrated host tune — HVSC rips just package host+module+glue into one load image instead of two separately-loaded blocks.",
    "The disassembler `SIDdecompiler.exe`'s naive 'call play N times' trace model works fine for the $9003 row-dispatcher (17-19 TraceNode pairs, real coverage of $9000-$91FF) but cannot exercise the NMI-driven DAC engine (calling it repeatedly as a subroutine just re-runs the same 4-instruction stub, TraceNode pairs: 1) — see Verification for how this was worked around (disassemble via the module's own `$9000`/`$9003` convention, not the per-file RSID header's `init`/`play`)."
  ],
  "sources": [
    "Author's own in-program manual, extracted text: https://csdb.dk/getinternalfile.php/110410/digi-organizer_manual.txt (via CSDb release 871 download list) — source of all memory/entry/speed/data_format facts above.",
    "CSDb release (credits, release date, group, downloads): https://csdb.dk/release/?id=871",
    "SIDId sidid.nfo entry 'Digi-Organizer' (authors, year, reference): data/sidid.json byTag.Digi-Organizer, upstream https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "DeepSID player spec table (platform, distribution, zero_pages, instruments, description, noteworthy): data/players.json title='Digi-Organizer' (csdb_id 871)",
    "Local dataset: 33 files across 11 composers, counted directly from data/composers/*.json 'player' fields (2NY, Active, Adam Morton, Boris Koester, Chromance/Sphere, Feekzoid, Jer, Phyton, Richard Bayliss, The Mighty Bulldozer, Yoko)"
  ]
}
```

## Overview

Digi-Organizer is a native C64 tool released by the Polish/German group **Padua**
on 27 March 1991 at Horizon Easterparty, coded by **Polonus** (Pawel Soltysinski)
with **Lubber** (Marco Wienkoop) also credited on the CSDb release. It is
**not a SID music player** in the usual sense: it is an add-on editor/module
that bolts a 4th, sample-playback "digi" channel onto an independently-composed
3-voice SID tune (the manual's own worked example uses a Voicetracker music
block). Freeware, built-in docs only, no known source release. With 33 files
across 11 composers — the widest composer spread in this batch — it reads as a
genuinely distributed scene tool rather than a personal routine, and it is
unusually well documented for a digi-class family: the author's own in-program
help text survives intact as a text file on the CSDb release, giving real
memory-map, entry-point, and pattern-format facts without any disassembly.

## Quirks & gotchas

See the `quirks` array — most load-bearing: this is a **4th-channel add-on**,
not a full player (DeepSID's own spec table says so); a **primary-source
manual** exists and was used directly for the runtime facts here; the
**11-composer spread** is real published-tool signal, not personal-routine
signal; and **authorship is split** between what the manual self-credits
(Polonus only) and what CSDb's release credits list (Polonus + Lubber).

## Disassembly notes

Performed 2026-07-23 against two real HVSC files carrying the `Digi-Organizer`
tag: `MUSICIANS/K/Koester_Boris/Digi-Music_001.sid` and
`MUSICIANS/0-9/2NY/Heavy-Beat.sid` (both RSID v2, both load at `$9000`, both
`init`/`play` PSID-header fields pointing at a per-file wrapper, not the
digi module itself — see the new `quirks` entries above).

`SIDdecompiler.exe`'s standard "-a<decimal load>, header init/play" convention
fails outright on these files: the RSID header's `play` field is $0, so the
tool defaults to repeatedly calling address $0000, producing 30000 lines of
`Unimplemented opcode: 2f at address $0000` and an unusable disassembly. The
fix that worked: relocate/trace using the digi MODULE's own documented
convention instead of the file's RSID header — `-I36864 -P36867` (decimal for
`$9000`/`$9003`) — which mimics exactly what the manual says a host program
does (`jsr $9000` once, `jsr $9003` per frame). This raised TraceNode pairs
from 1 (calling the header's own per-file wrapper init/play, which only
exercises a tiny NMI stub) to 17-19 (real coverage of $9000-$91FF: the
module's init, workspace, row-dispatcher, and NMI/DAC handler), and gave a
clean 64tass reassembly with no `-Wwrap-pc`/`-Wwrap-mem` warnings.

Manually traced the raw bytes at $9000 (`4C 40 90` = `JMP $9040`) and $9003
(`4C 87 90` = `JMP $9087`) — both land on real code, confirming the manual's
entry points exactly (see `entry` field's CONFIRMED notes). Also manually
traced the per-file wrapper's own init (Koester's file, RSID header
`init=$9400`): it sets up VIC raster IRQ + CIA1 timer (vector `$FFFE/$FFFF` →
`$9434`), calls `jsr $9000` (the digi module's own init, exactly as the
manual instructs), then `cli`/`rts`. The $9434 raster-IRQ handler itself does
`jsr $9003` once per interrupt — i.e. real files literally follow the
manual's documented integration pattern, just auto-generated by the editor's
own export rather than hand-written by a musician.

The tables at $9200-$94FF ("important datas") and the exact effect/command
byte layout inside a pattern row remain TODO — not reached by this pass
(the traced/reassembled range tops out around $91FF-$9200; sample/pattern
data beyond that was read but not decoded).

## Verification

**Not verified — `status: in-progress`, but substantially advanced beyond
manual-only sourcing.** Disassembled and reassembled the digi-organizer
MODULE ($9000-$91FF+, using the `$9000`/`$9003` entry convention — see
Disassembly notes) via `SIDdecompiler.exe` + `64tass.exe`, byte-diffed
against two independent real HVSC files:

- **`Digi-Music_001.sid` (Boris Koester)**: 10752-byte payload, reassembly
  **99.9256% byte-exact** (8 differing bytes across 4 tiny clusters:
  `$9081-9083`, `$9086`, `$9163-9164`, `$9184-9185`).
- **`Heavy-Beat.sid` (2NY)**: 9216-byte payload, reassembly **99.8806%
  byte-exact** (11 differing bytes across 6 clusters: `$9081-9084`, `$90FA`,
  `$9163-9164`, `$9184-9185`, `$91A4`, `$91D2`).

Every diverging byte in both files falls on an address `SIDdecompiler`'s own
`-v2` memory map marks read+write (self-modified) — `$9081-9086` is the
row-rate countdown/workspace area the manual's own "9 speed settings" knob
reloads, and `$9163-9164`/`$9184-9185` are self-modified low/high bytes of
the sample-pointer operands the NMI DAC handler increments every call
(classic drifted-working-storage pattern, well precedented elsewhere in this
project's card set — see `sid-player-verify.md`'s `lessons_learned` 10/16/17).
The SAME two clusters recur at the SAME addresses in both independently-ripped
files, which is itself corroborating evidence that $9000-$91FF is a genuinely
fixed, shared module (not per-file-compiled) — consistent with the card's own
memory-map claim.

**Trace-diff: blocked by a real tool limitation, not a reconstruction
defect.** `sidm2-sid-trace.exe` failed on both the raw `.sid` (with the
now-known `loadAddr=0`-unrelated header-misparse trap already documented in
`sid-player-verify.md` lesson 22) and on a correctly-built `.prg`: it resolved
the real per-file raster-IRQ handler address ($9434, matching this session's
own manual trace) but reported *"IRQ handler @ $9434 produced 0 SID writes
over 50 frames... this player needs interrupt delivery this tracer cannot
provide"* — because the actual $D418 sample writes happen in the SEPARATE
NMI handler (cascaded CIA2 Timer A/B), and this tracer has no autonomous
VIC/CIA interrupt delivery to fire either interrupt source on its own. This
is a structural gap in the available tooling for a genuinely dual-interrupt
(raster IRQ + cascaded-timer NMI) player, not evidence the disassembly is
wrong — the byte-diff results above are the strongest evidence available
that it's right.

**What would close this to `verified`:** a trace tool (or RetroDebugger,
outside a parallel batch) capable of autonomously firing both the raster/CIA1
IRQ and the cascaded CIA2-timer NMI on schedule, run against the fully
wrapped per-file binary (RSID header `init`, not the module's own `$9000`),
compared register-write-for-register-write against the real file. The
`$9200-$94FF` table layout and per-row effect encoding remain undocumented
TODOs regardless.

## Sources

See the `sources` array: the extracted manual text (CSDb download id 110410,
release 871), the CSDb release page itself, SIDId's `sidid.nfo` entry, and
DeepSID's player spec table (`data/players.json`). Composer/file counts
counted directly from `data/composers/*.json`, not `knowledge/COVERAGE.md`.

**Added 2026-07-23 (disassembly verification pass):** two real HVSC `.sid`
files, disassembled with `SIDdecompiler.exe` and reassembled with
`64tass.exe` — `MUSICIANS/K/Koester_Boris/Digi-Music_001.sid` and
`MUSICIANS/0-9/2NY/Heavy-Beat.sid` (both from
`C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/`). See Verification
for the byte-diff results and Disassembly notes for method.
