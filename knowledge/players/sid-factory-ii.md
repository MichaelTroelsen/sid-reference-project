# SID Factory II

```json
{
  "id": "sid-factory-ii",
  "name": "SID Factory II",
  "aliases": ["SF2", "SidFactory_II", "SidFactory_II/Laxity"],
  "authors": [
    "Thomas Egeskov Petersen (Laxity)",
    "JCH (assistance)",
    "Michel de Bree (assistance)"
  ],
  "released": "2019",
  "status": "verified",
  "platform": "Cross-platform editor (Windows / Mac / Linux, reSID preview) + native C64 player ('drivers')",
  "csdb_release": 210571,

  "memory": {
    "load_address": "TODO: driver-dependent — read from the chosen driver's source/build",
    "zero_page": "CONFIRMED 2026-07-19 for Driver 11 (the reference/most-verified driver): exactly 2 bytes, $FC-$FD — a TRANSIENT indirect-addressing pointer pair (`zfc`/`zfd` in the disassembly) used for `LDA (zfc),Y` reads of sequence/table data, not persistent state — it's rewritten via `STA zfc`/`STA zfd` immediately before each of ~15 uses scattered through the play routine. Sourced from the disassembly already `verified` byte-exact/trace-exact on sid-factory-ii-driver-11.md (arpeggio2.asm, 9,495 SIDdecompiler trace-node pairs) — $FC/$FD are the ONLY zero-page symbols that disassembly ever references, across its full traced coverage. Cross-checked against Driver 11's ~18 PERSISTENT playback-state addresses (the DriverCommon header block: init/stop/update/tick-counter/order-list-index/sequence-index/etc — see memory.layout below) via 3 independent real Laxity .sf2 files (github.com/chordian/sidfactory2's own example-song convention; local copies: SIDM2:Original_SF2/Laxity/{Cybertrunk,Farfisa,Nowhere}.sf2, spanning driver 11.00 and 11.04.00) parsed directly per the real public source's header format — all 18 addresses in all 3 files are non-zero-page ($1000-$18xx range). Matches DeepSID's '~1-2 bytes' estimate closely. NOT re-checked for drivers 12-16 this pass — SIDM2's own DRIVER_REFERENCE.md documents Driver 15/16 ('Tiny') as deliberately zero-page-resident (unlike Driver 11), so this 2-byte figure is Driver-11-specific, not a family constant.",
    "layout": "Driver-dependent for tables/entry points (see sid-factory-ii-driver-11.md), but the CONTAINER format is editor-level and driver-independent: every .sf2 file is a C64 PRG with a $1337 magic word at the load address, followed by a TLV header-block chain (block IDs 1=Descriptor,2=DriverCommon,3=DriverTables,4=InstrumentDescriptor,5=MusicData,6-9=optional,255=End; blocks 1/2/3/4/5 are required or the file is rejected), then the driver binary + music-data tables, then an auxiliary-data chain (song names, instrument/command text, SID model/region) located via a pointer at C64 $0FFB — hardcoded, NOT pack-time-relocatable, unlike everything else. The whole block-chain parser is TopAddress-relative (block_address = load_address + 2), so an .sf2 can load anywhere above a hard floor of $0100 and under $D000 (music-data ceiling), and stay valid. **CONFIRMED 2026-07-19 against the real public GPL source** (github.com/chordian/sidfactory2, `source/runtime/editor/driver/driver_info.h`/`.cpp`): `DriverInfo::ExpectedFileIDNumber = 0x1337` (compared via `C64File::GetWord(topAddress)`) — exact match; `DriverInfo::AuxilaryDataPointerAddress = 0x0ffb`, read as an ABSOLUTE hardcoded C64 address (`inFile.GetWord(AuxilaryDataPointerAddress)`, NOT offset by TopAddress) — confirms 'hardcoded, NOT pack-time-relocatable'; `ParseHeader()` computes `block_address = m_TopAddress + 2` literally — exact match; the `HeaderBlockID` enum matches exactly (`ID_Descriptor=1, ID_DriverCommon=2, ID_DriverTables=3, ID_DriverInstrumentDescriptor=4, ID_MusicData=5, ID_TableColorRules=6, ID_TableInsertDeleteRules=7, ID_TableActionRules=8, ID_DriverInstrumentDataDescriptor=9, ID_End=0xff`), with blocks 1/2/3/4/5 required per `DriverInfo::HasParsedRequiredBlocks()` — exact match. Also empirically re-parsed 3 real Laxity .sf2 files byte-for-byte against this exact logic (see `memory.zero_page` above) — magic word, block chain, and aux-pointer all resolved correctly and consistently across all 3. **NOT independently re-confirmed this pass**: the specific '$0100 hard floor / $D000 ceiling' relocation-bounds claim — no such literal constant was found in a quick pass over the packer source (`packer.cpp`, `packing_utils.cpp`); left as unverified prose, not a confirmed fact."
  },
  "entry": {
    "init": "TODO: driver-dependent — see driver source (github.com/chordian/sidfactory2). For the reference Driver 11 on its canonical template build, CONFIRMED $1000 — see sid-factory-ii-driver-11.md Verification (2026-07-18, exact register-write trace match).",
    "play": "TODO: driver-dependent; single play call per frame, multispeed per driver. For Driver 11: the real per-frame dispatcher is at init+6 ($1006), NOT the PSID header's declared play vector (which points at a command-flag byte, $16CC on the template build) — CONFIRMED by trace and reassemble+byte-diff, see sid-factory-ii-driver-11.md."
  },
  "speed": "TODO: per-driver (1x + multispeed variants)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "JCH-style contiguous sequence stacking (see track_system)",
    "instruments": "32 instruments",
    "wavetable": "Wave table + arpeggio-only table (in driver 11)",
    "pulsetable": "Programmable (in driver 11)",
    "filtertable": "Programmable (in driver 11)"
  },
  "effects": {
    "encoding": "TODO: per-driver command encoding",
    "commands": {
      "vibrato": "Yes; via a command",
      "hard_restart": "Per-instrument (driver 11)"
    }
  },

  "edges": {
    "derives_from": ["sid-factory"],
    "successor_of": ["sid-factory"],
    "shares_routine_with": ["jch-newplayer", "sid-factory-ii-driver-11"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Driver-based: the C64 player is a swappable 'driver' (e.g. driver 11), so memory map, ZP usage, CPU time and even the feature set depend on the driver — there is no single 'SF2 player'.",
    "Open source, but CORRECTED 2026-07-19: only the C++ EDITOR/PACKER source is public at github.com/chordian/sidfactory2 (GPL) — genuinely useful for confirming the .sf2 CONTAINER format (see memory.layout above, confirmed directly against driver_info.h/.cpp) and each driver's declared persistent-state addresses (DriverCommon header block, present in every packed .sf2 file). The DRIVER 6502 CODE ITSELF is NOT shipped as source — only precompiled binaries (`SIDFactoryII/drivers/sf2driver11_XX.prg` etc, confirmed via a full repo-tree listing: zero `.asm`/`.s` files anywhere in the repo). Disassembly (SIDdecompiler, as done for sid-factory-ii-driver-11.md) is therefore still required for any driver-internal 6502 fact (entry points, transient zero-page scratch usage, effect-command implementation) — the earlier version of this quirk overstated what 'open source' gets you here.",
    "Track system is JCH 'Contiguous sequence stacking' (JCH co-authored) — same sequence model as X-SID and the JCH NewPlayer line.",
    "Subtunes not supported yet (planned).",
    "The driver-11 sub-card this card called for now exists: sid-factory-ii-driver-11.md. SIDM2 also ships (or evaluated) 5 other stock drivers (12-16, each a different size/feature tradeoff) plus a driver template for JCH NewPlayer V20 and its own custom from-scratch driver for native Laxity NewPlayer round-trips — none of those have their own sub-cards yet, only summarized where relevant on the players they target.",
    "SF2's editor architecture is genuinely open to new drivers: SIDM2 reverse-engineered the requirement as 'descriptor type 0x00, declared init/stop/update entry points, declared playback-state variable addresses, declared table addresses' — a new native driver needs zero SF2 source changes, only a conforming 6502 binary + header blocks. This is why SIDM2 was able to build working native drivers for several other players (Galway, ROMUZAK/MoN/Hubbard/DMC/Sound Monitor via a shared engine) without touching SF2 itself."
  ],
  "sources": [
    "deepsid:players.json (SID Factory II)",
    "sidid:SidFactory_II/Laxity (released 2020, csdb release 210571)",
    "source:https://github.com/chordian/sidfactory2",
    "tdz-c64-knowledge:doc 7f75330d7a4d 'SID Factory II Driver Family Comparison' (SIDM2) — full driver-11-through-16 + NP20 + custom-Laxity-driver feature matrix, found 2026-07-12",
    "tdz-c64-knowledge:doc f742a4d03d0c 'SF2 File Format (SID Factory II container)' (SIDM2) — the container/TLV/aux-chain facts pulled into memory.layout above",
    "tdz-c64-knowledge:doc 57738c395f16 'Authoring a Native SID Factory II Driver (SIDM2 method)' — the descriptor-genericity fact in quirks above; a full methodology doc, not a player card, not imported wholesale",
    "source:https://raw.githubusercontent.com/Chordian/sidfactory2/master/SIDFactoryII/source/runtime/editor/driver/driver_info.h (and .cpp, and driver_architecture_sidfactory2.h/.cpp) — fetched 2026-07-19 directly, the real GPL parser source confirming $1337/TLV/$0FFB claims in memory.layout",
    "SIDM2:Original_SF2/Laxity/{Cybertrunk,Farfisa,Nowhere}.sf2 — 3 real, never-repacked .sf2 files parsed 2026-07-19 against the confirmed format to cross-check zero_page and layout claims empirically"
  ]
}
```

## Overview

SID Factory II (SF2) is Laxity's cross-platform SID music editor (2019, GPL),
built with assistance from JCH and Michel de Bree. Unlike a fixed player, SF2
separates the *editor* from swappable C64 **drivers** — the driver is the
actual player routine, and its capabilities (ZP footprint, CPU time, feature
set) vary. It descends from the original **SID Factory** (Laxity, 2006) and
uses JCH's "contiguous sequence stacking" track system, shared with X-SID and
the JCH NewPlayer lineage.

## Quirks & gotchas

- **There is no single "SF2 player."** Everything memory/CPU-related is
  *per driver* (driver 11 is the reference full-feature one). Any card fact
  about load address, ZP, or entry points must be qualified by which driver.
- **The editor/packer source is public** at `github.com/chordian/sidfactory2`
  and is genuinely sufficient (no disassembly needed) for the `.sf2`
  container format itself — confirmed 2026-07-19, see `memory.layout`.
  **Corrected 2026-07-19**: this does NOT extend to a given driver's own
  6502 code — the repo ships drivers only as precompiled `.prg` binaries,
  with zero `.asm`/`.s` source files anywhere in it. Disassembly
  (`SIDdecompiler`, per `sid-factory-ii-driver-11.md`) is still required for
  driver-internal facts (entry points, zero-page usage, effect encoding).
- Arpeggio/pulse/filter are programmable **tables** (driver 11); hard-restart
  is per-instrument.

## Disassembly notes

**Correction (2026-07-19): the driver's own 6502 code is not published as
source** — only the C++ editor/packer is (see the corrected `quirks` entry
above). For the CONTAINER format (header blocks, `$1337` magic, aux-data
pointer) the editor source is authoritative and sufficient — no disassembly
needed, see `memory.layout` above. For anything inside a driver's own 6502
code (entry points, internal zero-page scratch, effect-command
implementation), disassembly is still the only path in. [Driver 11](sid-factory-ii-driver-11.md)
now has its own card, imported from SIDM2's separate knowledge-base effort
(also ingested into `tdz-c64-knowledge`) — concrete table offsets, command
encoding, and version history for the reference "luxury" driver, since
verified byte-exact/trace-exact via `SIDdecompiler`. Any other driver worth
documenting (12-16, NP20, SIDM2's custom Laxity driver) should get its own
card the same way, linked here via `edges.shares_routine_with`.

## Verification

Seeded from cached DeepSID `players.json`, SIDId (`SidFactory_II/Laxity`), and
the public source repo — this card's own Verification section originally said:
"not yet assembled/run through `mcp-c64`... to reach `verified`: build a
specific driver, confirm its init/play entry points and ZP usage against the
running program."

**2026-07-18 update: half of that bar is now met, for the reference driver.**
[sid-factory-ii-driver-11.md](sid-factory-ii-driver-11.md) was disassembled
(`SIDdecompiler.exe`, with its `-P<decimal>` play-address-override flag —
needed because the PSID header's declared play vector is a command-flag
byte, not the real dispatcher; a prior SIDwinder-based attempt failed at
this same point and could not be reassembled), reassembled (`64tass.exe`),
byte-diffed against the original (`SIDM2:SIDSF2player/Driver 11 Test -
Arpeggio.sid`, 6978-byte payload at $1000), and trace-diffed
(`sidm2-sid-trace.exe`). Result: **99.06% byte match on the 92.9% of the
file SIDdecompiler's execution trace covered** (the uncovered 7.1% is a
tail of ASCII instrument/wave-program name text — ` "Lead vibrato"`,
`"Arp 037c"`, etc — the auxiliary-data chain this card's own
`memory.layout` already describes, genuinely never read during playback,
not a disassembly shortfall), with **100% of the 61 differing bytes
confirmed (via SIDdecompiler's `-v2` memory-access map) to land on
self-modified/working-storage addresses** (post-execution values, not
pristine data), and an **exact register-write trace match** (0 differing
lines, 193 writes over 50 PAL frames) — see
[sid-factory-ii-driver-11.md](sid-factory-ii-driver-11.md)'s Verification
section for the full method, now `status: verified` on that card.

**2026-07-19 update: both remaining halves of this card's own bar are now
closed; `status: verified`.**

**Half 1 — Driver 11 ZP usage (previously unconfirmed).** Re-examined the
same disassembly that already earned `sid-factory-ii-driver-11.md` its
`verified` status (`arpeggio2.asm`, 9,495 SIDdecompiler trace-node pairs,
99.06% byte match / exact register-write trace match) for zero-page symbol
usage: it defines exactly two, `zfc = $fc` and `zfd = zfc + $01`, used
solely as a scratch indirect-addressing pointer pair (`LDA (zfc),Y`),
rewritten via `STA zfc`/`STA zfd` immediately before each of roughly 15
uses through the play routine — i.e. transient working storage, not
persistent state. No other zero-page address appears anywhere in the fully
traced disassembly. Cross-checked this against Driver 11's actual
PERSISTENT playback-state addresses — the `DriverCommon` header block
(block ID 2) present in every real, packed `.sf2` file — by writing a
direct Node parser against the file format confirmed in Half 2 below, and
running it on **3 independent real `.sf2` files** (`SIDM2:Original_SF2/Laxity/{Cybertrunk,Farfisa,Nowhere}.sf2`,
spanning driver versions 11.00 and 11.04.00): all 18 declared state
addresses in all 3 files fall in the $1000-$18xx range, zero of them in
zero page. Net result: **Driver 11 uses exactly 2 bytes of zero page
($FC-$FD), transiently, for indirect table reads — its entire persistent
state lives outside zero page.** This matches DeepSID's own "approx 1-2
bytes" estimate almost exactly and gives it a concrete, sourced address for
the first time. (Scope: Driver 11 only — SIDM2's own driver documentation
notes Driver 15/16 ("Tiny") deliberately live in zero page instead, so this
figure doesn't generalize to the driver family.)

**Half 2 — `.sf2` container-file claims (previously unconfirmed; needed a
real `.sf2` file, not an HVSC/PSID rip).** Fetched the real public GPL
source directly from `github.com/chordian/sidfactory2`
(`source/runtime/editor/driver/driver_info.h`/`.cpp`, via the GitHub API +
raw content, confirmed reachable from this environment) — this is the
actual parser the SF2 editor itself uses to read a `.sf2` file's header,
making it definitive ground truth, not inference:
- `DriverInfo::ExpectedFileIDNumber = 0x1337`, compared against
  `C64File::GetWord(topAddress)` — confirms the `$1337` magic word exactly.
- `DriverInfo::AuxilaryDataPointerAddress = 0x0ffb`, read via
  `inFile.GetWord(AuxilaryDataPointerAddress)` — a call with NO offset by
  `TopAddress`, i.e. a genuinely hardcoded absolute C64 address — confirms
  "hardcoded, NOT pack-time-relocatable" exactly.
- `DriverInfo::ParseHeader()` computes `unsigned short block_address =
  m_TopAddress + 2` literally — confirms "block_address = load_address + 2"
  exactly.
- The `HeaderBlockID` enum matches the card's claim exactly:
  `ID_Descriptor=1, ID_DriverCommon=2, ID_DriverTables=3,
  ID_DriverInstrumentDescriptor=4, ID_MusicData=5, ID_TableColorRules=6,
  ID_TableInsertDeleteRules=7, ID_TableActionRules=8,
  ID_DriverInstrumentDataDescriptor=9, ID_End=0xff`; `HasParsedRequiredBlocks()`
  confirms blocks 1/2/3/4/5 are the required set (a file missing any of
  those is rejected — `m_IsValid` never becomes true).

Then empirically validated this exact parsing logic against **3 real,
never-repacked `.sf2` files** (`SIDM2:Original_SF2/Laxity/*.sf2` — the same
convention as `github.com/chordian/sidfactory2`'s own `SIDFactoryII/music/`
example songs, just sourced locally): a hand-written Node parser
implementing the confirmed format read the `$1337` magic, walked the full
block chain (including the previously-undocumented-here `TableDefinition`,
`MusicData`, and rule blocks), and resolved the `$0FFB` aux-data pointer
correctly and consistently on all 3 files. One incidental cross-confirmation:
the `$16CC` "command-flag byte" address the driver-11 card identified by
tracing (2026-07-12 pass, before this file format was understood) is
exactly the real `m_DriverStateAddress` field from a real 11.00 file's
`DriverCommon` block — the two independent findings agree.

**Not confirmed by this pass** (a real but narrower gap than before): the
parent card's own "$0100 hard floor / $D000 music-data ceiling" relocation-
bounds prose in `memory.layout` — no literal constant matching either bound
turned up in a pass over the packer source (`packer.cpp`,
`packing_utils.cpp`); left as unverified prose rather than a confirmed fact,
and not load-bearing for the magic-word/TLV/aux-pointer claims that were
this task's actual target.

## Sources

- DeepSID `data/players.json` → "SID Factory II" (developer, platform, tables,
  instruments, track system).
- SIDId `sidid.nfo` → `SidFactory_II/Laxity` (author, released 2020, CSDb
  release 210571) and `SidFactory/Laxity` (the 2006 predecessor).
- Public source: <https://github.com/chordian/sidfactory2>.
