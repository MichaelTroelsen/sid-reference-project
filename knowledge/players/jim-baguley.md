# Jim Baguley / Solar Software

```json
{
  "id": "jim-baguley",
  "name": "Jim Baguley / Solar Software",
  "aliases": ["Jim_Baguley/SolarSoft"],
  "authors": ["Jim Baguley (ATTRIBUTED by HVSC/DeepSID, not proven — see quirks)"],
  "released": "1984",
  "status": "verified",
  "platform": "Native C64. A SHARED driver — used by two composers (Baguley and John P. Shay), and ported at SOURCE level, not copied as a binary.",
  "csdb_release": null,

  "memory": {
    "load_address": "Bizy_Beez $4E00; Jungle_Quest $5F00; Monkey_Magic $6000. NOTE both Baguley files RELOCATE and clobber RAM outside their declared footprint — see quirks.",
    "zero_page": "Baguley's files: $49-$4E and $5D-$60 (two disjoint ranges). Shay's Monkey_Magic: $E0-$E9 (one contiguous block). The remap between them is the card's key finding — see quirks. Roles: three parallel data pointers ($49/$4A, $5D/$5E, $5F/$60) advanced/rewound together under one shared Y index; $4D a duration counter.",
    "layout": "Bizy_Beez init $6200 is a RELOCATOR ($6000->$4700, $6100->$1610, then JMP $4E00). Jungle_Quest init $6E00 relocates $6F00-$73FF -> $C900-$CDFF, then self-modifies a JMP through a per-subtune table at $6E38/$6E3C (subtunes -> $6E40, $6E80, $6F00)."
  },
  "entry": {
    "init": "Bizy_Beez $6200; Jungle_Quest $6E00; Monkey_Magic $6EB6.",
    "play": "Bizy_Beez $4E50; Jungle_Quest $CC0D (OUTSIDE its own $5F00-$7400 load range — not a bug, see quirks); Monkey_Magic $6050."
  },
  "speed": "TODO — not determined. Traced Jungle_Quest at 32 register writes / 50 frames.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": { "encoding": "Command bytes #$80 / #$81 / #$FF seen in the core loop — read as forward seek / backward seek / restart (restart reloads pointer high bytes with #$51/#$56). THE OPCODES ARE CERTAIN; the semantic reading is interpretation, not sourced.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE SOURCE CIRCULATED, NOT THE BINARY — the best finding here, and it is provable. Bizy_Beez (Baguley) and Monkey_Magic (Shay) are OPCODE-FOR-OPCODE IDENTICAL for ~82 bytes, with every difference an operand remap: $49->$E0, $4A->$E1, $4B->$E2, $4C->$E3, $4D->$E4, $4E->$E5, $5D->$E6, $5E->$E7, $5F->$E8, $60->$E9. A perfect order-preserving 1:1 map — BUT Baguley's TWO DISJOINT ranges ($49-$4E, $5D-$60) become Shay's ONE CONTIGUOUS block ($E0-$E9). A binary copy CANNOT re-allocate zero page. Whoever ported it had the SOURCE. Per-game glue differs only at the entry prologue (Bizy Beez: PHA/TYA/PHA/TXA/PHA; Monkey Magic: LDA #$1F/STA $D418 — and the trace's first write is exactly filter_mode_volume=$1F, confirming the disassembly; Jungle Quest: 3x NOP).",
    "IT IS A SHARED DRIVER, 3 FILES / 2 COMPOSERS — and the reason it looks like 2/1 is a real structural blind spot worth knowing. DeepSID's dump tags a third file, GAMES/M-R/Monkey_Magic.sid, composed by JOHN P. SHAY, not Baguley. The local count says 2 because data/composers/*.json ONLY COVERS THE MUSICIANS/ TREE — GAMES/ FILES ARE INVISIBLE TO IT. COVERAGE.md row 449 undercounts for this structural reason, and it likely affects other tags too. So this is a shared driver like Ben_Daglish/Gremlin, not a personal one.",
    "'IN-HOUSE DRIVER' IS THE WRONG MODEL — Solar Software was a BEDROOM PUBLISHER, not a studio. Its registered address on cassettes was 77 West Drive, Bury, Lancashire — a RESIDENTIAL property. Its other C64 musician, John P. Shay, 'programmed the monkey magic game in his bedroom in Radcliffe' (per a forum member who contacted him). Bury and Radcliffe are ~2 miles apart. A thread member notes Solar likely 'just bought the game off him or got him to do it freelance.' So the driver spread between two freelancers in the same corner of Greater Manchester — which fits the source-level port exactly. Contrast [[music-works]], where Simulmondo genuinely did have an in-house tool.",
    "THE TAG-ORDERING PREMISE DOESN'T HOLD — a correction worth recording project-wide. Across 167 slash-tags BOTH orders coexist: Ben_Daglish/Gremlin, Daglish/Gremlin_SFX and ?Bob_Vieira/Epyx are Person/Publisher; Bubble_Bus/Love_R is Publisher/Person (see [[bubble-bus-love-r]]). Ordering is NOT a convention. What IS consistent: the segment naming a PERSON marks the driver's attributed author. Also note the '?' prefix marks uncertain attribution — Jim_Baguley/SolarSoft has none.",
    "JUNGLE_QUEST'S play=$CC0D SITS OUTSIDE ITS OWN LOAD RANGE ($5F00-$7400) — not a bug. Init $6E00 is a relocator: LDA $6F00,X / STA $C900,X copying $6F00-$73FF to $C900-$CDFF, so $720D lands exactly at $CC0D in the copied block. Confirmed by trace (32 writes / 50 frames). Bizy_Beez's init is also a relocator. BOTH CLOBBER RAM OUTSIDE THEIR DECLARED FOOTPRINT, which HVSC's reloc fields do not reflect.",
    "HE IS A CODER WHO ALSO COMPOSED — confirmed unusually cleanly. Lemon64 credits Baguley for BOTH code and music on all three Solar games. But on Death Wake (1985, Quicksilva) he is credited specifically as 'Coder' with NO music credit (graphics: Pete Harrison and Ste Pickford). So: a career programmer who wrote his own music in 1984, then worked purely as a coder. Same pattern as [[music-works]] (Ivan Venturi, Simulmondo's lead programmer writing his own music).",
    "COLLISION RULED OUT — AND IT BIT THE RESEARCH MID-TASK, so it is recorded loudly. JIM BAGLEY (MobyGames person/60414) is a DIFFERENT English programmer — Ocean/Special FX, Cabal, Midnight Resistance, Hudson Hawk. JIM BAGULEY is person/69070. They sit adjacent alphabetically, and a Giant List fetch SILENTLY MERGED them, wrongly attributing Dan Dare III, Back to the Future Part III and Addams Family Values to Baguley. The Giant List's own verbatim entries are separate: 'Bagley, Jim [P] Throne Of Fire (1987, SPEC, Melbourne House)...' vs 'Baguley, Jim  Bogey Men (1984, C64, Solar) Bizy BeeZZzz (1984, C64, Solar) Jungle Quest (1984, C64, Solar)'. DO NOT credit Baguley with any Bagley title — search engines conflate them constantly.",
    "AUTHORSHIP IS ATTRIBUTED, NOT PROVEN — the honest limit. Bytes cannot say whether Baguley or Shay wrote it. The evidence is CONSISTENT WITH Baguley authoring and Shay adopting: Shay's 1983 Galaxions uses a cruder, unrelated routine, and the shared driver appears in 1984 across both. HVSC/DeepSID attribute it to Baguley with no '?' marker. BUT Lemon64 credits Monkey_Magic SOLELY to Shay — Baguley isn't mentioned there at all.",
    "THE BYTE ANALYSIS INDEPENDENTLY REPRODUCES HVSC'S TAGGING — INCLUDING ITS TWO NEGATIVES, which is what makes it trustworthy. Tagged and sharing the core: Bizy_Beez, Jungle_Quest, Monkey_Magic. Untagged and genuinely different: Bogymen (Baguley, $2300/$2300/$2356 — uses absolute $09F0-$09F2) and Galaxions (Shay, 1983, $0811/$0811/$0847 — primitive, ZP $FD/$FE). HVSC got both exclusions right.",
    "IDENTITY: Jim Baguley, English (HVSC 'Baguley, Jim - UNITED KINGDOM'; DeepSID country England, active 1984, affiliation Solar Software, no handle, csdb_id: 0 — no CSDb scener page exists). Whether 'Jim' is short for James is undetermined. C64 credits (Lemon64): Bizy-Beezzzz, Bogymen, Jungle Quest (1984, Solar); Death Wake (1985, Quicksilva); Max Headroom (1986, Quicksilva); Storm (1986, Mastertronic); Dr. Jackle and Mr. Wide, Spore (1987, Bulldog).",
    "LANDMINE (independently confirmed by several other cards this batch): csdb_id in data/composers/*.json is the CSDb SID id space, NOT the release id space. csdb.dk/release/?id=3860 returns 'Muskuripp #26', an unrelated Norwegian music collection; csdb.dk/sid/?id=3860 is Bizy Beez. The card template's csdb_release field invites exactly this error. The 3 SIDs are sid ids 3860/3861/3862; there is NO CSDb release for this driver, hence csdb_release: null.",
    "RECONSTRUCTED AND TRACE-VERIFIED (this pass) — see Verification for the full methodology. All three files disassemble (SIDdecompiler) and reassemble (64tass) to 100.0000% byte-exact over their real loaded content, and register-write trace (sidm2-sid-trace) exact over every subtune, once two file-specific gotchas are handled correctly (both below).",
    "MONKEY_MAGIC IS RELOCATABLE, BUT ONLY TO A PAGE-ALIGNED BASE — a new instance of the 'implicit zero constant' self-modification idiom (see lessons_learned 87/91 in the verify agent for the general pattern). The init/clear routine at $601C loads `LDA #<l6300` purely to get the byte value $00 (since $6300 is page-aligned, its low byte is always zero) and uses it to zero-fill ZP $DF-$EF and part of $D400-$D418. A relocation-invariance control at a NON-page-aligned base ($9007, delta $3002) breaks this silently: `<l6300` evaluates to $02 instead of $00, so the 'clear' loop fills those bytes with $02 garbage instead of zero, corrupting SID/ZP state from the very first INIT call — no crash, no assembler warning, just wrong playback (all voices desynced by ~2 frames). A page-aligned control ($9005, delta $3000) traces register-write-exact across all 3 subtunes. Jungle_Quest's init ($6E42, `LDA #<l6000`) uses the identical trick and inherits the same page-alignment requirement.",
    "BOTH RELOCATOR FILES' BLOCK-COPY DESTINATIONS ARE PROVABLY SAFE TO IGNORE FOR TRACE PURPOSES, but for two DIFFERENT reasons — worth keeping distinct. Bizy_Beez's init copies $6000->$4700 and $6100->$1610 (both write-only in SIDdecompiler's own -v2 map — never subsequently executed within any traced subtune/frame window), so those bytes are dead as far as the audible driver goes; relocating the disassembly to SIDdecompiler's own -v2 Start ($1610, below the $4E00 load address) and comparing only the real loaded window ($4E00-$6213) gives 100.0000% byte-exact. Jungle_Quest's init instead copies $6F00-$73FF -> $C900-$CDFF and then PLAYS FROM the copy (play=$CC0D lives inside it) — SIDdecompiler's default (non -r) trace captures a post-execution/self-modified snapshot of that copied region that differs from the pristine source by exactly the bytes the play routine self-modifies at runtime (e.g. `lccff .byte $54`, an `inc`-incremented counter) — but since init unconditionally re-copies fresh source bytes into that region on every single INIT call (`lda l6f00,X / sta lc900,X` ... across all 5 pages, X=0..255), whatever static value ends up baked into the reassembled .prg at the destination is irrelevant to runtime correctness. Confirmed: reassembled byte-diff 99.9814% (1 provably-dead workspace byte + the drifted copy-destination byte), trace-diff exact across all 3 subtunes."
  ],
  "sources": [
    "HVSC 85 local: Musicians.txt ('Baguley, Jim - UNITED KINGDOM'), STIL.txt, and disassembly/traces of the 5 .sid files analysed: https://www.hvsc.c64.org",
    "DeepSID dump hvsc_files.sql (the tag rows, incl. the GAMES/ file invisible to data/composers/); data/composers/jim-baguley.json",
    "Lemon64 — Jim Baguley: https://www.lemon64.com/games/list.php?list_individual=jim-baguley · Solar Software: https://www.lemon64.com/games/list.php?list_company=solar-software · Jungle Quest: https://www.lemon64.com/game/jungle-quest · Bizy-Beezzzz: https://www.lemon64.com/game/bizy-beezzzz · Bogymen: https://www.lemon64.com/game/bogymen · Monkey Magic: https://www.lemon64.com/game/monkey-magic · Death Wake: https://www.lemon64.com/game/death-wake",
    "Lemon64 forum — Solar Software (the Bury address, Shay's Radcliffe bedroom, the freelance model): https://www.lemon64.com/forum/viewtopic.php?p=432976",
    "Giant List of Classic Game Programmers (both Bagley and Baguley entries, verbatim — the collision source): https://dadgum.com/giantlist/",
    "CSDb SID entries 3860/3861/3862: https://csdb.dk/sid/?id=3860 — and https://csdb.dk/release/?id=3860 as the namespace counter-example",
    "Collision: Jim Bagley https://www.mobygames.com/person/60414/jim-bagley/ vs Jim Baguley https://www.mobygames.com/person/69070/jim-baguley/ · https://www.vgmpf.com/Wiki/index.php/Jim_Bagley",
    "SIDId sidid.nfo: no entry (grepped, confirmed absent)",
    "This pass: SIDdecompiler.exe (disassembly) + 64tass (reassembly) + sidm2-sid-trace.exe (register-write trace) against the local HVSC copies of Bizy_Beez.sid, Jungle_Quest.sid and Monkey_Magic.sid (MUSICIANS/B/Baguley_Jim/ and GAMES/M-R/) — see Verification for exact invocations and results."
  ]
}
```

## Overview

`Jim_Baguley/SolarSoft` is a **shared 1984 replay routine** running in three
files by **two** composers — Jim Baguley and John P. Shay — released through
**Solar Software**, a UK bedroom publisher operating out of a house in Bury,
Lancashire.

The finding worth the card is *how* it was shared. Baguley's and Shay's copies
are opcode-for-opcode identical, but Shay's rewrites the zero-page allocation
from two disjoint ranges into one contiguous block. **A binary copy cannot do
that.** The source circulated between two freelancers living two miles apart —
which is exactly the shape of the "publisher" they both worked for.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **Source-level port, provable from the ZP remap** — not a shared binary.
- **The tag looks personal but isn't**, because `data/composers/*.json` can't see
  `GAMES/`. That blind spot probably undercounts other tags too.
- **Jim Bagley ≠ Jim Baguley** — a collision that actively corrupted the research
  mid-task before being caught.
- **"In-house driver" is the wrong model** — there was no house.

## Disassembly notes

Both Baguley files are **relocators that clobber RAM outside their declared
footprint** — Jungle Quest's `play $CC0D` isn't a bug, it's a copied block at
`$C900-$CDFF`, and HVSC's reloc fields don't reflect any of it.

The byte analysis **independently reproduces HVSC's tagging including its two
negatives** (Bogymen and Galaxions genuinely use different routines) — which is
the main reason to trust it.

Core loop: three parallel data pointers advanced/rewound together under one
shared Y index, a duration counter, and `#$80`/`#$81`/`#$FF` command bytes. **The
opcodes are certain; reading them as forward-seek / backward-seek / restart is
interpretation and is flagged as such.**

## Verification

`status: verified`. All three tagged files were independently disassembled
(`SIDdecompiler.exe`), reassembled (`64tass`) and register-write traced
(`sidm2-sid-trace.exe`) against the local HVSC copies this pass — the first
time this card had an actual reconstruction to cite, not just static
disassembly/trace observations.

**Monkey_Magic.sid** (load $6000, init $6EB6, play $6050, 3 subtunes).
`SIDdecompiler -a24576 -r` (decimal for $6000) reassembles 100.0000%
byte-exact over the 3777 traced/decoded bytes ($6005-$6EC5); the 5 leading
bytes ($6000-$6004, a `JSR $601A / NOP / NOP`) are unreached by init/play in
this file and excluded — confirmed dead, not merely unreached, by every
control below. Native trace: 0 register-write divergences over 50 frames on
all 3 subtunes — but since `-r` reproduced the pristine bytes exactly, this
native trace is tautological (guaranteed to match by construction; see the
verify agent's own lessons_learned on this). A genuine, non-tautological
relocation-invariance control was therefore run: rebuilding the same
disassembly at a page-aligned base ($9005, delta $3000 from native) produces
a binary differing from the original at 17 bytes (all correctly-relocated
absolute operands) and traces register-write-exact across all 3 subtunes,
50 frames each. (A first attempt at a NON-page-aligned base, $9007/delta
$3002, failed — root-caused, not left unexplained: the driver's ZP/SID clear
loop reuses the low byte of the page-aligned address `$6300` as an implicit
`#$00` constant, which becomes `$02` under a non-page-aligned relocation —
see the new quirk above. This is a real property of the driver, not a
reconstruction defect.)

**Jungle_Quest.sid** (load $5F00, init $6E00, play $CC0D, 3 subtunes,
runtime block-copy $6F00-$73FF -> $C900-$CDFF). `SIDdecompiler -a24320`
(no `-r`, since `-r` would erase the copy destination — see quirks)
reassembles 99.9814% byte-exact over the real loaded window ($5F00-$73FF,
1 diff: a dead self-modified subtune-index byte at $6EFF) plus one further
drifted byte in the copy destination's static image ($CCFF, a self-modified
counter irrelevant at runtime since init re-copies fresh source bytes on
every call). Trace: 0 register-write divergences over 50 frames on all 3
subtunes, using the file's own native init/play addresses directly (no
relocation needed — SIDdecompiler's own Start address matched the PSID load
address exactly for this file).

**Bizy_Beez.sid** (load $4E00, init $6200, play $4E50, 1 subtune, runtime
block-copy $6000->$4700 and $6100->$1610). SIDdecompiler's own -v2 map
reports Start=$1610 (below the load address) because of the copy
destinations; relocating to that Start (`-a5648`, decimal for $1610) per
this project's own gotcha 40 correctly places the real loaded content at its
true addresses. Byte-diff over the real loaded window ($4E00-$6213):
100.0000% exact, no patching needed. Trace: 0 register-write divergences
over 50 frames (1 subtune), using native init/play addresses directly.

**Not yet verified / left TODO**: `data_format` (order_list, patterns,
instruments, wavetable/pulsetable/filtertable) — the full command-byte
semantics beyond the `#$80`/`#$81`/`#$FF` opcodes already confirmed by
disassembly. The reassembled `.asm` for Monkey_Magic is complete enough to
support this (most of the play routine decodes as real instructions, not
`.byte` fallback), but working out the full data layout wasn't attempted
this pass — a reasonable next step, using the reassembled `.asm` files as a
starting point rather than a fresh disassembly.

Not determined: whether Baguley or Shay wrote the driver; Baguley's full legal
first name, birth year or whereabouts; whether his later games (Death Wake, Max
Headroom, Storm, Spore) contain SID music at all — **HVSC holds only the three
Solar 1984 tunes**; Solar Software's founding date, principals or fate; John P.
Shay's biography beyond the Radcliffe detail (he has no card — a reasonable
future one). GB64 and MobyGames both hard-403 fetches, so their credit data is
unverified here.

## Sources

See the `sources` array above.
