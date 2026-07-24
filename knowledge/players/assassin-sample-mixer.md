# Sample Mixer (Assassin)

```json
{
  "id": "assassin-sample-mixer",
  "name": "Sample Mixer",
  "aliases": ["Assassin_Sample_Mixer"],
  "authors": ["Assassin / Vermes (Poland)"],
  "released": "1993 (SIDId) / 1994 (CSDb release date, v2.17)",
  "status": "in-progress",
  "platform": "Native C64 tool. No public source found — closed scene tool distributed only as a D64 disk image.",
  "csdb_release": 129555,

  "memory": {
    "load_address": "TODO: no disassembly/trace performed",
    "zero_page": "DeepSID players.json documents 4 bytes of ZP usage: $A4-$A5 + $A8-$A9. Not independently verified by disassembly here.",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "'Assassin' is a Polish scener (CSDb scener id 6833, country Poland), ex-member of the Polish group Vermes — CSDb release 129555 ('Sample Mixer V2.17', 1994) credits him as sole coder and releaser. This is NOT the same person as composer Magnar Harestad, whose HVSC Musicians.txt entry lists a struck-through former handle 'Assassin' (also 'Lizard') — that's a Norwegian composer with no connection to Vermes or this tool; a pure name collision, not evidence of any relationship.",
    "Unlike most name-only 'digi/sample/mixer' tags in this batch, this one has real corroborating evidence: DeepSID's players.json records this player's 'digi' field as 'Yes; 4-bit', i.e. DeepSID's own curated database (not just the filename) confirms it does digitized-sample playback at 4-bit resolution. What is NOT confirmed is the 'Mixer' half of the name literally — whether it blends/mixes multiple simultaneous sample streams versus just playing back one digi channel alongside SID voices is unconfirmed (TODO).",
    "Highly concentrated, small-scene tool: exactly 14 files across 3 composers in the local dataset (JFK 6, Puma 7, Mamba 1 — data/composers/jfk.json, puma.json, mamba.json), and all three composers are themselves tagged country=Poland (data/composers/*.json). Consistent with a Polish-scene tool that stayed local rather than spreading internationally — no evidence it was ever adopted outside this circle.",
    "SIDId (data/sidid.json byTag) gives released='1993', while the CSDb release page for the same reference id (129555) gives a 1994 release date for 'Sample Mixer V2.17' — a year discrepancy between the two sources, left unresolved here.",
    "No source code, distribution notes, or documentation found anywhere (DeepSID players.json's source_code/distribution/docs fields are all blank for this entry); the only known distribution is a CSDb-hosted D64 disk image on release 129555 — i.e. a closed scene tool, never released as source. (An earlier draft cited a specific D64 filename and a 2014 CSDb comment; neither could be confirmed from the release page and both were dropped.)"
  ],
  "sources": [
    "data/sidid.json byTag.Assassin_Sample_Mixer (name, author, released=1993, reference=CSDb 129555)",
    "data/players.json 'Assassin Sample Mixer' entry (developer, start_year=1994, csdb_id=129555, digi='Yes; 4-bit', zero_pages='4 bytes ($A4-$A5 + $A8-$A9)')",
    "CSDb release (title 'Sample Mixer V2.17', credits 'Code: Assassin', 1994): https://csdb.dk/release/?id=129555",
    "CSDb scener profile for Assassin (Poland, ex-Vermes): https://csdb.dk/scener/?id=6833",
    "CSDb group Vermes (Poland): https://csdb.dk/group/?id=310",
    "HVSC Musicians.txt entry for Magnar Harestad (struck-through former handle 'Assassin' — unrelated name collision, cross-checked via data/composers/magnar.json)",
    "Local dataset aggregation: data/composers/jfk.json (6 files), data/composers/puma.json (7 files), data/composers/mamba.json (1 file) = 14 files, 3 composers, all country=Poland"
  ]
}
```

## Overview

Sample Mixer (tagged `Assassin_Sample_Mixer`) is a native C64 tool by the
Polish scener **Assassin** (CSDb scener id 6833), ex-member of the Polish
group **Vermes**, released as "Sample Mixer V2.17" in 1993/1994 (sources
disagree by a year — see quirks). It is a small, regionally-concentrated tool:
only 14 files across 3 composers in the local dataset (JFK, Puma, Mamba),
all three themselves Polish. Unlike several other "digi/sample/mixer"-named
tags in this batch, DeepSID's own curated database independently confirms a
real digi-playback capability (`digi: Yes; 4-bit`) rather than the name being
the only evidence — though the "mixer" (multi-sample-blending) implication
specifically remains unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the author identity is a **real,
CSDb-documented Polish scener** distinct from an unrelated Norwegian composer
who happens to share the old handle "Assassin" — do not conflate them; (2) the
digi claim has **actual DeepSID-sourced corroboration** (`digi: Yes; 4-bit`),
a rarity in this batch, but the "mixer" (multi-channel blending) half of the
name is still unconfirmed; (3) it is a **tight Polish-scene tool** (14
files/3 composers, all Poland) with no public source, docs, or wider scene
adoption found.

## Disassembly notes

None performed. No source code or format documentation was found anywhere
(DeepSID's `source_code`/`docs`/`distribution` fields are all blank); the only
known artifact is a CSDb-hosted D64 disk image. A disassembly would need to
start from that D64 image directly — no manual or write-up exists to work
from first.

## Verification

**Attempted, genuinely blocked — `status` remains `in-progress`.** All 14
files tagged `Assassin_Sample_Mixer` in the local dataset (JFK 6, Puma 7,
Mamba 1) were checked directly against the HVSC collection at
`C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/` (all 14 present and
readable). PSID/RSID header inspection (per this project's `psid_header`
convention) on all 14 files shows every one is an **RSID** file (magic
`"RSID"`, v2) with `playAddress = 0x0000` — a real, structural signal, not a
per-file oddity: an RSID with `play=0` means the player is entirely
**interrupt-driven**; there is no discrete, callable per-frame play routine
at all, only an `init` that installs its own IRQ/CIA handler as part of cold
start. Two representative files were carried through disassembly/trace:
`MUSICIANS/J/JFK/Man_Machine.sid` (init=`$1000`=load address, payload 45568
bytes) and `MUSICIANS/P/Puma/Das_Boot.sid` (init=`$13AD`, load=`$0B30`,
payload 57581 bytes).

**Root cause of the block, confirmed directly on both files, two
independent tools:**
- `SIDdecompiler.exe` (`-a<decimal load addr> -z -d -c -v2`, and separately
  with `-I`/`-P` overrides forcing init=play=load address) **hangs
  indefinitely** on every attempt, including at `-t1` (call the play routine
  only once) — confirmed via `tasklist` that the process is genuinely stuck,
  not merely slow (same hang signature as gotcha 23/entry 23, a different
  player family but the same underlying cause: a player that installs a
  custom hardware IRQ vector and expects that interrupt to actually fire
  during its own init).
- `sidm2-sid-trace.exe` (built from the PSID header per this project's
  convention, run directly since the `mcp__sidm2-siddump__*` MCP tools are
  not registered in this session — see gotcha 8) does NOT hang, and instead
  fails cleanly with an explicit, load-bearing diagnostic on both files:
  ```
  play=$0000: bounded INIT @ $1000 (subtune 0), deriving IRQ from $FFFE
  FAILED: self-installing IRQ vector never resolved after 2000000 steps
  (installed=false, handler=$0000). This player's INIT likely waits on its
  own IRQ firing as a handshake before finishing setup; this tracer has no
  autonomous VIC/CIA interrupt delivery so that can never happen here.
  Not a 0-write tune — untraceable with this tool.
  ```
  (identical failure text and mechanism on `Das_Boot.sid`, only the
  addresses differ: `init=$13AD`, `handler=$0000` again after 2,000,000
  steps).

**Conclusion**: this is the same category of block flagged in this agent's
own instructions as a legitimate reason to stop — the player's cold-start
sequence genuinely requires a live, interrupt-capable emulator (real VIC/CIA
IRQ delivery) to even complete `init`, which is a hard prerequisite before
any play-routine tracing could begin. Neither `SIDdecompiler`'s internal
6502 emulator nor `sidm2-sid-trace.exe`'s tracer implement autonomous
interrupt delivery, so both are structurally unable to get past this player's
own cold-start handshake — this is not a per-file quirk (confirmed
identically on two files, two different composers, two different
init/load addresses) and not fixable by any combination of flags tried
(`-t`, `-C1`, `-I`/`-P` overrides). RetroDebugger (a live, interrupt-capable
6502/C64 emulator) is the only tool in this project's toolkit that could
plausibly get past this, but it is out of scope for this run (reserved for
solo sessions, not this parallel batch — see this agent's own constraints).
The one runtime-adjacent fact recorded (`zero_page`, 4 bytes at
$A4-$A5/$A8-$A9) remains taken as-is from DeepSID's curated `players.json`,
not independently confirmed here.

**Next step for a future solo session**: re-run this exact
disassemble/trace pass through RetroDebugger (`mcp__retrodebugger__*`) on
`MUSICIANS/J/JFK/Man_Machine.sid` — load the file, single-step or run past
`init` with real interrupt delivery active, and confirm the IRQ handler
installs and fires; from there, byte-diff/trace-diff exactly as this
agent's standard workflow describes. Static disassembly alone cannot close
this card.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID `players.json`,
the CSDb release and scener pages, HVSC Musicians.txt (for the unrelated
Magnar/"Assassin" name collision), and the local composer-file aggregation.
