# Jim Baguley / Solar Software

```json
{
  "id": "jim-baguley",
  "name": "Jim Baguley / Solar Software",
  "aliases": ["Jim_Baguley/SolarSoft"],
  "authors": ["Jim Baguley (ATTRIBUTED by HVSC/DeepSID, not proven — see quirks)"],
  "released": "1984",
  "status": "in-progress",
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
    "LANDMINE (independently confirmed by several other cards this batch): csdb_id in data/composers/*.json is the CSDb SID id space, NOT the release id space. csdb.dk/release/?id=3860 returns 'Muskuripp #26', an unrelated Norwegian music collection; csdb.dk/sid/?id=3860 is Bizy Beez. The card template's csdb_release field invites exactly this error. The 3 SIDs are sid ids 3860/3861/3862; there is NO CSDb release for this driver, hence csdb_release: null."
  ],
  "sources": [
    "HVSC 85 local: Musicians.txt ('Baguley, Jim - UNITED KINGDOM'), STIL.txt, and disassembly/traces of the 5 .sid files analysed: https://www.hvsc.c64.org",
    "DeepSID dump hvsc_files.sql (the tag rows, incl. the GAMES/ file invisible to data/composers/); data/composers/jim-baguley.json",
    "Lemon64 — Jim Baguley: https://www.lemon64.com/games/list.php?list_individual=jim-baguley · Solar Software: https://www.lemon64.com/games/list.php?list_company=solar-software · Jungle Quest: https://www.lemon64.com/game/jungle-quest · Bizy-Beezzzz: https://www.lemon64.com/game/bizy-beezzzz · Bogymen: https://www.lemon64.com/game/bogymen · Monkey Magic: https://www.lemon64.com/game/monkey-magic · Death Wake: https://www.lemon64.com/game/death-wake",
    "Lemon64 forum — Solar Software (the Bury address, Shay's Radcliffe bedroom, the freelance model): https://www.lemon64.com/forum/viewtopic.php?p=432976",
    "Giant List of Classic Game Programmers (both Bagley and Baguley entries, verbatim — the collision source): https://dadgum.com/giantlist/",
    "CSDb SID entries 3860/3861/3862: https://csdb.dk/sid/?id=3860 — and https://csdb.dk/release/?id=3860 as the namespace counter-example",
    "Collision: Jim Bagley https://www.mobygames.com/person/60414/jim-bagley/ vs Jim Baguley https://www.mobygames.com/person/69070/jim-baguley/ · https://www.vgmpf.com/Wiki/index.php/Jim_Bagley",
    "SIDId sidid.nfo: no entry (grepped, confirmed absent)"
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

`status: in-progress`. The shared-driver conclusion, the source-level port, the
relocators and the entry points are all **verified by disassembly and trace**.

**Not verified**: nothing reconstructed or re-run. Data format is `TODO`.

Not determined: whether Baguley or Shay wrote the driver; Baguley's full legal
first name, birth year or whereabouts; whether his later games (Death Wake, Max
Headroom, Storm, Spore) contain SID music at all — **HVSC holds only the three
Solar 1984 tunes**; Solar Software's founding date, principals or fate; John P.
Shay's biography beyond the Radcliffe detail (he has no card — a reasonable
future one). GB64 and MobyGames both hard-403 fetches, so their credit data is
unverified here.

## Sources

See the `sources` array above.
