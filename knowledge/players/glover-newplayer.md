# Glover NewPlayer V21

```json
{
  "id": "glover-newplayer",
  "name": "Glover NewPlayer V21",
  "aliases": ["Glover_NewPlayer_V21"],
  "authors": ["Lukasz Baran (Glover) / Samar Productions"],
  "released": "2000",
  "status": "in-progress",
  "platform": "Native C64 player routine — Glover's port/adaptation of Jens-Christian Huus's (JCH) NewPlayer for Samar Productions, co-credited to JCH himself on at least one release.",
  "csdb_release": 101623,

  "memory": {
    "load_address": "Player code assembles at $1000 (source: `*= $1000`, label `init` at $1000). The same bundle also carries a small $09e0 sound-effect-pointer setup block and a $0f00-$0fa0 standalone raster-IRQ demo driver (`dinit`/`drun`) plus a jump-vector table at $0fa0 used by Glover's editor to patch a linked tune — these are demo/tooling scaffolding around the player, not guaranteed to be the load address in every release using this player. Source: SRC_JCH_Glover.zip / 21g4.txt (CSDb release 101623), lines 36, 49, 123, 181.",
    "zero_page": "Only one explicit zero-page location is declared in source: `tab = $02` (2 bytes, $02/$03), used throughout as an indirect-pointer scratch pair for table lookups (e.g. `lda (tab),y` in getinit/get3). No other ZP use found in the read source. Source: 21g4.txt line 179 + throughout `getinit`/`get3`/special-command handlers.",
    "layout": "Tables are laid out contiguously via assembler `*=` relocation from a base symbol `tpoin` (per-voice table-pointer set): `arp1 = tpoin+$100`, `arp2 = arp1+$100`, `filttab = arp2+$100`, `pulstab = filttab+$100`, `instr = pulstab+$100`, `lobyt = instr+$100`, `hibyt = lobyt+$100`, `supertab = hibyt+$100`, then three $400-byte order-list buffers `v1 = supertab+$100`, `v2 = v1+$400`, `v3 = v2+$400`, followed by per-pattern sequence data (`s00`, `s01`, `s02`, ... each $100 bytes apart, `*= s00+$100` etc). Source: 21g4.txt lines 988-1013."
  },
  "entry": {
    "init": "$1000 (`init jmp sinit`). Convention: A on entry = tune/subsong number; `sinit` does `asl a / asl a / asl a` (i.e. A*8) then uses the result as a `,y` offset into the `tpoin` per-voice pointer table (3 words + 2 flag bytes = 8 bytes per subsong slot) to set up voice 1/2/3 sequence pointers. Source: 21g4.txt lines 181-247 (`sinit`).",
    "play": "$1003 (`drive jmp main`). `main` is a single per-call play routine (no internal loop) that services chip-write buffering ($d417/$d418 for a shared 3rd-voice/filter effect at the top), decrements a per-frame speed counter (`speed+1`) and dispatches to `getinit`/`getins`/`real`/`endtabs` as voices need new instrument/table data. Source: 21g4.txt lines 249-289 (`main`)."
  },
  "speed": "Not fully established from source alone. The bundled standalone demo driver (`dinit`/`drun`, $0f00-$0f9f) installs a custom raster IRQ at line $fa via $0314/0315 and calls the play routine (`drive`) once per that IRQ — i.e. single-call-per-frame in the demo harness — but this driver is Glover's own test/demo wrapper, not necessarily how a game or a SID-file player calls `drive`/`main` in the wild. Separately, the player DOES have its own internal tempo mechanism: SPECIAL TABLE command `4x` ('set tempo, two split values C/D') writes a two-byte pair into the first two bytes of the `filttab` buffer (confirmed in source at `sc4`, `sta filttab,y`/`sta filttab+1,y`), and `main` reads that same pair via a toggling `half` flag to reload its per-frame counter — i.e. a classic alternating hi/lo tempo-divider (single 6502 opcode-level multispeed emulation), consistent with the wider JCH NewPlayer family's speed model, but the exact call cadence expected by a host program is TODO. Source: 21g4.txt lines 49-104 (`dinit`/`drun`), 249-271 (`main`), 448-461 (`sc4`).",

  "data_format": {
    "order_list": "Three $400-byte per-voice order-list/sequence-pointer buffers (`v1`,`v2`,`v3`), each addressed via a `tpoin` pointer pair set at init time from the subsong-number offset (see `entry.init`). Source: 21g4.txt lines 988, 999-1004.",
    "patterns": "Per-voice sequence data blocks (`s00`, `s01`, `s02`, ...), each $100 bytes, walked via `(tab),y` indirection with the `tab` ZP pointer pair. Byte values below $80 select a note/instrument index (`seq3`/`get3`); $80-$9F set transpose (`trans`); $A0-$BF and $C0-$DF branch to `get4`/`get5` for note-flag ($fflag/insnr) and command (`scom`) bytes respectively; $7E/terminator values end a table row. Source: 21g4.txt lines 290-372 (`getinit`/`get3`).",
    "instruments": "8 bytes per instrument, table `instr` (32 instrument slots implied by the SPECIAL TABLE's 00-1F instrument-index range). Per the author's own format docs (21G4_GLOVER.txt / 21G6_GLOVER.txt, bundled with CSDb release 101623): `AA BB CD EF GH II JJ KK` = AABB attack/decay + sustain/release (ADSR, split across two releases' docs slightly differently — v21.G4 doc says AABB=ADSR, C=1st wavetable-byte delay, D=whole wavetable delay for arpeggios, F bit0=hard-restart flag/bit1=drumsound, G/H=filter resonance/type, II=filtertable index, JJ=pulsetable index, KK=wavetable index; v21.G6 doc's byte layout differs slightly — GG unused, HH=filtertable, II=pulsetable, JJ=wavetable). Source code confirms offset+5=pulsetable pointer and offset+6=wavetable pointer are instrument-table fields patchable at runtime by SPECIAL TABLE commands 80-9F/A0-BF (`sta instr+5,y` / `sta instr+6,y`, y = instrument*8). Sources: CSDb release 101623 files 21G4_GLOVER.txt and 21G6_GLOVER.txt; 21g4.txt lines 469-506 (`sc6`/`sc7`).",
    "wavetable": "Referenced by per-instrument pointer (instrument byte 'JJ' or 'KK' depending on sub-version); a wavetable-byte-delay pair (bytes C/D of the instrument) governs step advance, described by the author as 'good for arpeggios'. No byte-level wavetable command table was found in the read source (only pointer/patch mechanics); table content format itself is TODO. Source: 21G4_GLOVER.txt / 21G6_GLOVER.txt (CSDb release 101623).",
    "pulsetable": "4 bytes/row: v21.G4 doc = `AA` initial pulse value ($FF = smooth change), `BB` add value, `CC` pulse add (00-7F) or subtract (80-FF), `DD` next-row index ($7F = end). v21.G6 doc differs slightly (`AA` hi pulse byte/add, `BB` lo pulse byte/add, `CC` add value, `DD` next-row/$7F=end). Source: 21G4_GLOVER.txt and 21G6_GLOVER.txt, CSDb release 101623.",
    "filtertable": "4 bytes/row, `AA BB CC DD`, row 0 is dual-purposed: per the v21.G4 doc, 'line 00 = tempo values' — confirmed directly in source, where SPECIAL TABLE command 4x ('set tempo') writes its two split-tempo bytes straight into `filttab`/`filttab+1` (the row-0 slot of this same table). Row format otherwise: v21.G4 doc = AA initial filter frequency ($FF = smooth change), BB add(00-7F)/subtract(80-FF), CC delay, DD next-row index ($7F=end); v21.G6 doc's byte layout differs slightly (resonance/filter-type nibbles folded into AA/B, C holds a LO-nibble smoothing value). Sources: 21G4_GLOVER.txt / 21G6_GLOVER.txt (CSDb release 101623); 21g4.txt lines 448-461 (`sc4`, confirms row-0 tempo reuse)."
  },
  "effects": {
    "encoding": "A 32-entry-ish 'SPECIAL TABLE' of 2-byte commands `AB CD` (A = command nibble, BCD = up to 3 packed parameter nibbles), executed inline in the pattern/sequence stream via the `scom` command dispatcher (`sc1`-`sc11` in source). Documented identically (same command set) across both v21.G4 and v21.G6 doc files. Sources: 21G4_GLOVER.txt / 21G6_GLOVER.txt (CSDb release 101623); 21g4.txt lines 402-560 (`sc1`-`sc11`).",
    "commands": {
      "0x": "Glide up, BCD = speed",
      "1x": "Glide down, BCD = speed",
      "2x": "Vibrato: B = speed, CD = add value",
      "3x": "Set sustain/release: C = sustain, D = release",
      "4x": "Set tempo: C = 1st split value, D = 2nd split value (written into filtertable row 0 — confirmed in source, see data_format.filtertable)",
      "5x": "Set filter frequency override: CD = 00-FF",
      "60-7F": "Set new filtertable pointer for instrument 00-1F (instr N -> 60+N), CD = filtertable pointer (confirmed in source: writes instrument-table offset +7 or the filter field)",
      "80-9F": "Set new pulsetable pointer for instrument 00-1F, CD = pulsetable pointer (confirmed in source: `sta instr+5,y`)",
      "A0-BF": "Set new wavetable pointer for instrument 00-1F, CD = wavetable pointer (confirmed in source: `sta instr+6,y`)",
      "C0-DF": "Set new wave-speed pointer for instrument 00-1F",
      "Ex": "Set master music volume 0-F (e.g. E004 sets volume to 4; confirmed in source `sc10`, writes low nibble of `f18+1`, the buffered $D418 volume/filter-mode register)",
      "Fx": "Precise vibrato (v21.G6 doc only): B = depth, C = speed, D = add value"
    }
  },

  "edges": {
    "derives_from": ["jch-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "DIRECT LINEAGE EVIDENCE, not inference from name similarity: CSDb release 101622, titled 'JCH NewPlayer 21.G6' (Samar Productions, 2000), lists credits as 'Code by Glover of Samar Productions and JCH of Vibrants' — i.e. JCH himself is co-credited on Glover's port. The sibling CSDb release 101623 ('JCH Players by Glover', also 2000, Samar Productions, credited to Glover alone) bundles the tool plus source (SRC_JCH_Glover.zip) and two documentation files literally named 21G4_GLOVER.txt and 21G6_GLOVER.txt — JCH's own '21.Gn' version-naming convention (cf. laxity-newplayer.md's 'v21.G5', jch-newplayer-v20.md's '20.G4'), carried over into Glover's fork. This is why `derives_from: [\"jch-newplayer\"]` is asserted here with confidence, unlike a same-name-only guess.",
    "jch-newplayer.md's own quirks list independently name this fork: 'Widely forked: Laxity NewPlayer V21 (2006), Glover NewPlayer V21 (2000), Dane NewPlayer V22-25 (2011)' — corroborating, from the other side of the edge, the same 2000/Samar Productions/V21 identity found directly on CSDb here.",
    "NOT the same signature as the bare 'Glover' tag (a separate, uncarded family in this dataset, ~11 files) — that appears to be Glover's own earlier/unrelated routine. Do not conflate the two when aliasing.",
    "Composer concentration (local `data/composers/*.json`, all 66 files accounted for, matching COVERAGE.md exactly): 6 composers — Phobos (29 files, 44%, the single largest user), Isildur (21), Glover himself (13), Kosa (1), G-Fellow (1), Tomas Danko (1). Notably the author is NOT the top user of his own player — Phobos and Isildur both used it more — which argues against 'personal routine never adopted by anyone else' and toward 'a real, if small-scene, published tool', consistent with it being distributed as a Samar Productions release with its own source/doc package rather than kept private.",
    "Glover (Lukasz Baran) and Samar Productions were active in the Polish C64 scene; Glover also authored a separate, contemporaneous 'Hardtracker to JCH Converter' (CSDb release 101621, 13 Jun 2000, Samar Productions) — consistent with him working specifically within the JCH-format ecosystem around this time, not as an unrelated one-off.",
    "The CSDb release bundles a REAL, readable 6502 assembler source (SRC_JCH_Glover.zip, dated internally 18 Feb 2016 as a repack, but the source header reads '01-02-98' i.e. 1 Feb 1998 — two years before the 2000 CSDb release dates on 101622/101623, suggesting this fork was originally written in 1998 and only formally released/repackaged on CSDb in 2000). This is source code, not a disassembly reconstruction — the strongest possible evidence tier this project recognizes, which is why `memory`/`entry`/`data_format`/`effects` were filled from it directly (status promoted stub -> in-progress) rather than left TODO.",
    "The source zip actually contains TWO sub-versions, 21g4 and 21g5 (not 21g6, despite the doc .txt files being named 21G4_GLOVER.txt / 21G6_GLOVER.txt) — i.e. the exact byte-for-byte version documented here (read from `21g4.txt`) is v21.G4, one step earlier than the 'JCH NewPlayer 21.G6' title of CSDb release 101622. The G4 and G6 docs describe near-identical but NOT byte-identical instrument/table layouts (e.g. instrument byte order and which nibbles hold filter resonance/type differ slightly between G4 and G6 — see `data_format.instruments`). Which sub-version (G4/G5/G6) any given one of the 66 cataloged files actually uses is NOT established — treat the filled-in runtime facts as representative of the v21.G4 revision specifically, not proven identical across the whole 66-file family.",
    "Confirmed cross-check between the prose docs and the actual code: the v21.G4 doc's filtertable note ('line 00 = tempo values') is independently verified in the assembler source itself — the SPECIAL TABLE '4x set tempo' command handler (`sc4`) writes its two tempo-split bytes directly into `filttab`/`filttab+1`, i.e. row 0 of the filter table doubles as tempo storage. Two independent primary sources (doc prose + code) agreeing is why this specific fact is asserted with confidence rather than hedged."
  ],
  "sources": [
    "sidid:Glover_NewPlayer_V21 (author Lukasz Baran (Glover); released 2000; reference https://csdb.dk/release/?id=101623) — data/sidid.json",
    "CSDb release 101623, 'JCH Players by Glover' (Samar Productions, 2000; Code by Glover of Samar Productions): https://csdb.dk/release/?id=101623",
    "CSDb release 101622, 'JCH NewPlayer 21.G6' (Samar Productions, 2000; Code by Glover of Samar Productions and JCH of Vibrants): https://csdb.dk/release/?id=101622",
    "CSDb release 101621, 'Hardtracker to JCH Converter' (Samar Productions, 13 Jun 2000; Code by Glover): https://csdb.dk/release/?id=101621",
    "CSDb group 201, Samar Productions (Poland): https://csdb.dk/group/?id=201",
    "21G4_GLOVER.txt, author's own format doc, bundled with CSDb release 101623: https://csdb.dk/getinternalfile.php/144811/21G4_GLOVER.txt",
    "21G6_GLOVER.txt, author's own format doc, bundled with CSDb release 101623: https://csdb.dk/getinternalfile.php/144810/21G6_GLOVER.txt",
    "SRC_JCH_Glover.zip (21g4.txt / 21g5.txt 6502 assembler source, author Glover/Samar/Crystal Sound), bundled with CSDb release 101623: https://csdb.dk/getinternalfile.php/146134/SRC_JCH_Glover.zip",
    "knowledge/players/jch-newplayer.md quirks — corroborating mention of the Glover NewPlayer V21 (2000) fork from the JCH side of the lineage",
    "knowledge/COVERAGE.md — family 'Glover_NewPlayer', rank 12, 66 files, single grouped raw tag Glover_NewPlayer_V21",
    "Local dataset: data/composers/{phobos,isildur,glover,kosa,g-fellow,tomas-danko}.json — 66 files across 6 composers, matching knowledge/COVERAGE.md exactly"
  ]
}
```

## Overview

Glover NewPlayer V21 is a 2000 fork/port of Jens-Christian Huus's (JCH)
NewPlayer routine, made by Lukasz Baran ("Glover") of the Polish group Samar
Productions. It is not a name-alike guess: CSDb release 101622 ("JCH NewPlayer
21.G6", Samar Productions, 2000) explicitly credits "Code by Glover of Samar
Productions **and JCH of Vibrants**", and the companion release 101623 ("JCH
Players by Glover") bundles source code and documentation files named
`21G4_GLOVER.txt` / `21G6_GLOVER.txt` — JCH's own `21.Gn` version-naming
convention, carried into Glover's build. In the local dataset it is a
mid-sized family (66 files per `knowledge/COVERAGE.md`, rank 12 among
uncarded families before this card), used by more composers than just Glover
himself — Phobos is its single largest user (29 of 66 files), ahead of
Isildur (21) and Glover himself (13) — pointing to a genuinely distributed
small-scene tool rather than a private routine that stayed with its author.
CSDb release 101623 also bundles genuine 6502 assembler source
(`SRC_JCH_Glover.zip`, v21.G4/G5) alongside the prose format docs, which this
pass read directly to establish memory layout, init/play entry points, data
format, and the effect command table — see `Disassembly notes` below.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct, first-party
lineage evidence**: JCH is literally co-credited on the "JCH NewPlayer 21.G6"
release that Glover coded, which is why this card asserts
`derives_from: ["jch-newplayer"]` with confidence rather than as a
name-similarity guess (the constraint this project takes most seriously).
Also note the bare `Glover` tag (~11 files) is a **different, uncarded**
family — don't conflate it with `Glover_NewPlayer_V21`.

## Disassembly notes

No disassembly performed — none needed for this pass. CSDb release 101623
bundles `SRC_JCH_Glover.zip`, which turned out to be real, readable 6502
assembler source (`21g4.txt`/`21g5.txt`, ~1000 lines each, author's own
comments intact, dated internally "01-02-98"), not a binary. It was read
directly (not disassembled) to populate `memory`, `entry`, `data_format`, and
`effects` above: player code at `$1000` (`init jmp sinit` / `drive jmp main`),
one explicit zero-page pointer (`tab = $02`), a chain of `*=`-relocated tables
(`tpoin` → `arp1`/`arp2`/`filttab`/`pulstab`/`instr`/`lobyt`/`hibyt`/
`supertab` → three $400-byte order lists `v1`/`v2`/`v3` → per-voice pattern
data `s00`/`s01`/...), and the full SPECIAL TABLE effect-command dispatcher
(`sc1`-`sc11`). Cross-checked against the author's own prose format docs
(`21G4_GLOVER.txt`/`21G6_GLOVER.txt`, same release) — the two agree, including
a specific and easy-to-miss detail (filtertable row 0 doubling as tempo
storage) confirmed in both the prose and the code. The source only covers
sub-versions v21.G4/G5 explicitly; v21.G6 (the CSDb release title) is
documented in prose but its source wasn't in this particular zip, so the
exact runtime bytes above are proven for v21.G4 specifically, hedged
elsewhere as "representative of the family, not proven identical across all
66 files." `SRC_JCH_Glover.zip` also contains `.seq`/`.prg` files (compiled
song data / tokenized editor-assembler format) not investigated this pass.

## Verification

**Not verified — `status: in-progress`.** Identity and lineage facts (author,
year, CSDb releases, the JCH co-credit, composer usage) are confirmed from
cached SIDId data and CSDb release pages, as before. This pass additionally
promoted several runtime facts (memory layout, init/play entry points, data
format, effect command table) from `TODO` to sourced, because a public,
author-written 6502 assembler source and matching format-spec text files are
bundled directly on the CSDb release page (101623) and were read verbatim —
per this project's Tier 3 boundary rule, a public source that "plainly
documents a runtime fact" earns `in-progress`, not a guess. It remains
short of `verified`: nothing here has been reassembled and run through
`mcp-c64`/`sidm2-siddump`, the exact sub-version (G4 vs G5 vs G6) used by
each of the 66 cataloged files is unconfirmed, and the `.seq`/`.prg` data
files in the same zip (real song data, potentially machine-checkable) were
not touched this pass.

## Sources

See the `sources` array — SIDId's `Glover_NewPlayer_V21` entry, CSDb releases
101621/101622/101623, the Samar Productions CSDb group page, the corroborating
mention in `jch-newplayer.md`, and this project's own `data/composers/*.json`
for usage counts.
