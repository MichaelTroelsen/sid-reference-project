# Glover NewPlayer V21

```json
{
  "id": "glover-newplayer",
  "name": "Glover NewPlayer V21",
  "aliases": ["Glover_NewPlayer_V21"],
  "authors": ["Lukasz Baran (Glover) / Samar Productions"],
  "released": "2000",
  "status": "verified",
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
    "Confirmed cross-check between the prose docs and the actual code: the v21.G4 doc's filtertable note ('line 00 = tempo values') is independently verified in the assembler source itself — the SPECIAL TABLE '4x set tempo' command handler (`sc4`) writes its two tempo-split bytes directly into `filttab`/`filttab+1`, i.e. row 0 of the filter table doubles as tempo storage. Two independent primary sources (doc prose + code) agreeing is why this specific fact is asserted with confidence rather than hedged.",
    "DISASSEMBLY-CONFIRMED, this pass: a real file's own PSID `init` address does not always equal the source's canonical `$1000` — `Batman.sid` (Phobos) declares `init=$1ac0`, not `$1000`. Disassembly shows `$1ac0` is a tiny 8-byte per-release wrapper (`ldx #$26 / ldy #$63 / stx $dc05 / sty $dc04 / lda #$00 / jmp l1000`) that programs the CIA #2 timer (`$dc04`/`$dc05`, a raster/NMI-independent speed source) before falling straight through into the canonical `l1000 jmp l1040` (`sinit`) entry documented in `entry.init` — i.e. per-file/per-release builds of this player can prepend a small CIA-timer-setup stub ahead of the shared init routine. `Daydream.sid` (Isildur), by contrast, declares `init=$1000` exactly matching the source. Both are the same player underneath; only the outer wrapper differs.",
    "Byte-diffing a clean SIDdecompiler reassembly (relocated to the file's own PSID load address, no -e, `-v2` Start: == real load address on every file checked) against two independent real files lands at ~98.1-98.2%, not higher — but every one of the ~50-65 diverging bytes on both files falls exactly on a `-v2`-map write-touched/self-modified marker (`w`/`+`/`_`), concentrated in two address bands: a small band right after the play-routine's per-voice-table-setup code (roughly `$100c-$1015`ish through `$11c8`ish — self-modified loop counters/pointers written by `main`'s own per-voice dispatch) and a larger band inside the `filttab`/`pulstab`/`instr` table region (`$16fb-$1790` on Batman, `$1755-$17e9` on Daydream — SIDdecompiler's default trace window snapshotting post-execution table contents rather than pristine cold-start bytes, the same class of divergence documented project-wide, see the disassembly playbook's gotcha 41). A binary-search patch-isolation test (patch the small band alone, re-trace; patch the large band alone, re-trace) on BOTH files independently confirmed the small band is load-bearing (alone, it closes the trace to exact) and the large table band is genuinely dead over an 800-frame playback window (patching it alone changes nothing versus the unpatched baseline)."
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
    "Local dataset: data/composers/{phobos,isildur,glover,kosa,g-fellow,tomas-danko}.json — 66 files across 6 composers, matching knowledge/COVERAGE.md exactly",
    "Real HVSC files used for disassembly/trace-diff verification this pass: MUSICIANS/P/Phobos/Batman.sid, MUSICIANS/I/Isildur/Daydream.sid (local HVSC_85 collection)"
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

An earlier pass read the author's own bundled source (`SRC_JCH_Glover.zip` /
`21g4.txt`) directly rather than disassembling — see below for what that
established. This pass added an independent, machine-checkable leg: two real
HVSC files carrying the `Glover_NewPlayer_V21` tag were disassembled with
`SIDdecompiler.exe` (`-a4096 -z -d -c -v2`, relocated to each file's own real
PSID load address, no `-e`) and reassembled with `64tass` — both assembled
cleanly with zero warnings, both `-v2` map "Start:" addresses matched the
real load address exactly (no gotcha-40-style base-address trap on either
file). Byte-diffing each reassembled `.prg` against the original file's
payload came back ~98.1% (`Batman.sid`, 52/2767 diverging bytes) and ~98.2%
(`Daydream.sid`, 65/3639 diverging bytes) — not 100%, but every single
diverging byte on both files lands exactly on a `-v2`-map write-touched or
self-modified marker, never on unambiguous static code/data. A binary-search
patch-isolation test (patch a small ~10-21-byte band alone and re-trace;
patch the remaining ~42-44-byte band alone and re-trace) on both files
independently separated these into a load-bearing subset (self-modified
loop counters/pointers written early in `main`'s per-voice dispatch, right
after the shared table-pointer setup) and a confirmed-dead subset (initial
snapshot values of the `filttab`/`pulstab`/`instr` table region,
`$16fb-$1790` on Batman / `$1755-$17e9` on Daydream — SIDdecompiler captured
the post-execution runtime contents of these tables rather than their
pristine cold-start bytes). See the `quirks` array for the full address
lists and the CIA-timer init-wrapper finding (Batman's PSID `init=$1ac0`, an
8-byte per-release stub ahead of the shared `$1000` `sinit` entry the source
documents — Daydream's `init=$1000` matches the source exactly, confirming
both files run the same underlying player).

The original source-reading pass established: CSDb release 101623 bundles
`SRC_JCH_Glover.zip`, real, readable 6502 assembler source (`21g4.txt`/
`21g5.txt`, ~1000 lines each, author's own comments intact, dated internally
"01-02-98"), not a binary. It was read directly to populate `memory`,
`entry`, `data_format`, and `effects`: player code at `$1000`
(`init jmp sinit` / `drive jmp main`), one explicit zero-page pointer
(`tab = $02`), a chain of `*=`-relocated tables (`tpoin` →
`arp1`/`arp2`/`filttab`/`pulstab`/`instr`/`lobyt`/`hibyt`/`supertab` → three
$400-byte order lists `v1`/`v2`/`v3` → per-voice pattern data `s00`/`s01`/
...), and the full SPECIAL TABLE effect-command dispatcher (`sc1`-`sc11`).
Cross-checked against the author's own prose format docs
(`21G4_GLOVER.txt`/`21G6_GLOVER.txt`, same release) — the two agree,
including a specific and easy-to-miss detail (filtertable row 0 doubling as
tempo storage) confirmed in both the prose and the code, and now also
independently confirmed in the disassembly of both real files traced this
pass. The source only covers sub-versions v21.G4/G5 explicitly; v21.G6 (the
CSDb release title) is documented in prose but its source wasn't in this
particular zip — both files disassembled this pass matched the v21.G4/G5
source's `$1000`/`$1003` entry-point convention (modulo Batman's init
wrapper), so this is now confirmed representative of at least those two
files, not proven identical across all 66. `SRC_JCH_Glover.zip` also
contains `.seq`/`.prg` files (compiled song data / tokenized
editor-assembler format) not investigated this pass.

## Verification

**Verified — `status: verified`.** Method, following this project's
disassemble → reassemble → byte-diff → trace-diff pipeline
(`knowledge/playbooks/disassemble-a-player.md`):

- Two independent real HVSC files: `MUSICIANS/P/Phobos/Batman.sid`
  (PSID load=$1000, init=$1ac0, play=$1003) and
  `MUSICIANS/I/Isildur/Daydream.sid` (load=$1000, init=$1000, play=$1003).
- `SIDdecompiler.exe -a4096 -z -d -c -v2`, relocated to each file's own real
  PSID load address (`-v2` "Start:" confirmed == load address on both — no
  base-address relocation trap). `64tass` reassembly: clean, zero warnings,
  correct length, on both files.
- Byte-diff (reassembled `.prg` payload vs. original `.sid` payload,
  same base): **Batman.sid 98.1207% (52/2767 bytes differ)**;
  **Daydream.sid 98.2138% (65/3639 bytes differ)**. Every diverging byte on
  both files lands on a `-v2`-map write-touched/self-modified address, never
  on unambiguous code or static data.
- Patch-isolation (binary search, per `hard_won_gotchas` 41): on both files,
  patching only a small subset of the diverging bytes (Batman: 10 bytes at
  $1009/$100c/$100d/$10b3/$1124/$1125/$11c8/$1589/$15a4/$15a7; Daydream: 21
  bytes at $100c-$1011/$1015/$101a-$101b/$101e-$101f/$10a3/$10a8/$10cb/
  $1123-$1124/$11c7-$11c8/$15e0/$15f5/$1600) closes the byte-diff-explained
  divergence and, when traced, produces a **register-write-exact match
  against the real file over 800 PAL frames** (`sidm2-sid-trace.exe`,
  `init=$1ac0/play=$1003` for Batman, `init=$1000/play=$1003` for Daydream;
  3260 writes/800 frames on Batman, 2531 writes/800 frames on Daydream, 0
  diff lines on both). Patching only the *remaining* bytes (the larger
  table-region band) alone, leaving the load-bearing subset untouched, was
  separately confirmed to leave the trace **unchanged from the unpatched
  baseline** (888 diverging trace lines on Daydream, matching the unpatched
  reassembly exactly) — i.e. that band is genuinely dead over this playback
  window, not merely unexamined.
- Fully patching every diverging byte on either file (not just the
  load-bearing subset) reaches **100.0000% byte-exact** reassembly on both.

This is the same "byte-diff short of 100%, but every divergence lands on
confirmed-dead self-modified/working-storage bytes, and the register-write
trace is exact once isolated" pattern this project already treats as
`verified` elsewhere (e.g. `dmc.md`, `cheesecutter.md`, `jch-newplayer-v20.md`)
— not a rounding-up of a partial match. The exact sub-version (G4 vs G5 vs
G6) used by the other 64 of 66 cataloged files, and whether the two-band
divergence pattern found here holds for every file in the family, remain
untested — a third/fourth file spot-check would be the natural next step if
this family's fidelity is ever questioned.

## Sources

See the `sources` array — SIDId's `Glover_NewPlayer_V21` entry, CSDb releases
101621/101622/101623, the Samar Productions CSDb group page, the corroborating
mention in `jch-newplayer.md`, this project's own `data/composers/*.json`
for usage counts, and the two real HVSC files disassembled/traced this pass
(`Batman.sid`, `Daydream.sid`).
