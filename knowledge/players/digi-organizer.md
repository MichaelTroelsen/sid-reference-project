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
    "init": "$9000 for the digi module itself ('jsr $9000' after the host tune's own init, e.g. 'jsr musicinit'), per the manual.",
    "play": "$9003 for the digi module ('jsr $9003' alongside the host tune's own play call, e.g. 'jsr musicplay'), per the manual."
  },
  "speed": "Editor lets the user pick the digi routine's own call rate independent of the host tune, via SHIFT+A through SHIFT+I in the UI (9 speed settings) — per the manual. Exact frame-rate mapping and CIA-vs-raster mechanism not stated; TODO.",

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
    "Sample directory entries store only the high byte of each sample's start/end address ('aa:hb-he' in the Load-Sample menu per the manual) — implies samples are handled as whole memory pages, not arbitrary byte ranges."
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

None performed. All runtime facts in this card come from the author's own
plain-text in-program manual (see Sources), not from reading the `.sid` binary
or the play routine. A real disassembly would still need to confirm the exact
tables at $9200-$94FF ("important datas", left vague by the manual itself) and
the actual effect/command byte layout inside a pattern row, both left TODO.

## Verification

Not verified — no reconstruction assembled, no `mcp-c64` trace run. `status:
in-progress` reflects that concrete runtime facts (load address, init/play
entry points, pattern format, order-list terminators) are cited directly from
the author's own manual rather than guessed, per the Tier 3 exception for a
public source that plainly documents a runtime fact — but nothing here has
been independently confirmed by tracing a real `.sid` file.

## Sources

See the `sources` array: the extracted manual text (CSDb download id 110410,
release 871), the CSDb release page itself, SIDId's `sidid.nfo` entry, and
DeepSID's player spec table (`data/players.json`). Composer/file counts
counted directly from `data/composers/*.json`, not `knowledge/COVERAGE.md`.
