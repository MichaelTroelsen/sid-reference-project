# Robert Westgate (later driver, 1987-1990)

```json
{
  "id": "robert-westgate-v2",
  "name": "Robert Westgate (later driver, 1987-1990)",
  "aliases": ["Robert_Westgate_v2"],
  "authors": ["Robert Westgate"],
  "released": "1987-1990",
  "status": "verified",
  "platform": "English composer Robert Westgate's LATER playroutine — the second of two structurally distinct driver versions in his output (the earlier one, 1984-1986, is separately carded as [[robert-westgate-v1]]). His confirmed coding partnership with Jason Benham continues unbroken across this era too. Player-ID-fingerprinted across 3 files, all his own, including two well-known System 3-adjacent commercial titles. Disassembled+reassembled+trace-verified (2026-08-07) via SIDdecompiler/64tass on 2 of the 3 tagged files (Batty, By_Fair_Means_or_Foul.sid) — see Verification.",
  "csdb_release": null,

  "memory": { "load_address": "Assembled fresh per title, not fixed: Batty $1b66, By_Fair_Means_or_Foul $9000, Kwik_Snax $9900 (all PSID-header-embedded, no field-8 literal load address in any of the 3). Zero-page base is CONSISTENT across all 3: driver workspace starts at $a2 (equate `za2` in every disassembly, including Kwik_Snax's).", "zero_page": "Confirmed from disassembly: driver's own ZP workspace starts at $a2 (per-voice pointers/counters follow sequentially from there). No player use of $00-$a1.", "layout": "Batty and By_Fair_Means_or_Foul: driver code+data is fully self-contained within the PSID payload's own load range, no self-modifying block-copy outside it. Kwik_Snax: DIFFERENT — see quirks, its init reads tables ($a800-$abff) that are NOT present anywhere in the ripped 5120-byte payload." },
  "entry": { "init": "Batty $1c00; By_Fair_Means_or_Foul $9b56; Kwik_Snax $ab80 (this last one unreachable from the ripped payload alone — see quirks).", "play": "Batty $1b66 (== load address, play routine is literally the file's first loaded byte); By_Fair_Means_or_Foul $9b77; Kwik_Snax $abb4 (same caveat as its init)." },
  "speed": "TODO (not derived from this pass — IRQ-driven per the card's original sample trace, frame-timing not separately measured).",
  "data_format": { "order_list": "TODO (disassembly exists for Batty/By_Fair_Means_or_Foul but full data-format annotation wasn't done this pass — focus was the verification loop).", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the original 50-frame sample; not re-checked over a longer window this pass)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THREE CONFIRMED TITLES, ALL WITH SOLE WESTGATE MUSIC CREDITS (unlike the earlier tag's Guzzler/Bigtop Barney ambiguity): Batty (the traced file, 1987 — CORRECTED PUBLISHER: Elite Systems, NOT System 3 as an initial research premise assumed — System 3 was a contemporaneous but UNRELATED UK publisher, no evidence connects them to this game; re-released by Encore; coder/graphics Jason Benham, title screen Paul Walker; music arrangements of 'American Patrol,' 'At a Darktown Cakewalk,' 'Oh Susanna' — public-domain ragtime/classical pieces, Westgate's signature source-material style already seen on the v1 tag), By Fair Means... or Foul! (1988, Superior Software — coder/graphics Jason Benham; music adapts Joplin's 'The Chrysanthemum'), and Kwik Snax (1990, ANOTHER CORRECTED PUBLISHER: Codemasters, not System 3 — coder Jason Benham; music adapts Joplin's 'The Ragtime Dance' and 'Elite Syncopations').",
    "THE JASON BENHAM CODING PARTNERSHIP CONTINUES UNBROKEN into this later era — the SAME coder across all 6 of Westgate's known titles spanning both tags, now confirmed running from Interceptor Software (1984) through Superior Software, Elite Systems, and finally Codemasters (1990) — a genuinely long, consistent two-person team across FOUR different publishers over 6 years, a notable finding in its own right.",
    "THE CLEAN CHRONOLOGICAL VERSION SPLIT IS CONFIRMED FROM THIS SIDE TOO: this tag's 3 titles run 1987-1990, with zero overlap against [[robert-westgate-v1]]'s own 1984-1986 titles — matching the same driver-rewrite-between-eras pattern already established in this KB for [[ozzy-oldskool]]/[[ozzy-oldskool-v2]] and the Cadaver driver pair.",
    "TWO PUBLISHER-ATTRIBUTION ERRORS FROM THE ORIGINAL RESEARCH BRIEF WERE EXPLICITLY CAUGHT AND CORRECTED: both Batty and Kwik Snax were initially assumed to be System 3 titles — neither is; Batty is Elite Systems, Kwik Snax is Codemasters. Not carried forward as fact.",
    "NO CSDb SCENER PROFILE EXISTS for Westgate — same absence pattern already documented on the sibling card, consistent with a purely commercial UK games composer.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[robert-westgate-v1]] (same composer, earlier driver version — companion card in this same batch). No known relationship found to any other composer/tool already in this KB (checked against the same extensive roster as the sibling card — none found).",
    "DISASSEMBLY/RECONSTRUCTION CONFIRMED (2026-08-07): SIDdecompiler `-r` + 64tass reassembles Batty.sid and By_Fair_Means_or_Foul.sid 100.0000% byte-exact against the true PSID payload, AND both pass a non-tautological relocation-invariance control (rebuilt at a page-aligned AND a non-page-aligned delta, both cycle-stripped register-write traces exact against the true original — 37/37 writes on Batty subtune 0 [and all 8 subtunes cross-checked], 192/192 on By_Fair_Means_or_Foul). This is real, structural evidence: the control build genuinely differs from the native one at 104-184 bytes, so an exact trace match there isn't a tautology.",
    "KWIK_SNAX.SID IS A GENUINELY INCOMPLETE RIP, NOT A RECONSTRUCTION FAILURE: its PSID header declares init $ab80/play $abb4, but the ripped payload only covers $9900-$9cff (5120 bytes) — both addresses sit ~3.5KB past the end of what's actually in the file. The driver's own init routine (real, byte-exact-reconstructed code at native $9900) opens with `lda #$36 / sta $01` (LORAM off, banking $a000-$bfff from BASIC ROM to RAM) and then reads instrument/table data from that now-RAM-but-uncaptured region ($a800/$a900/$aa00) before block-copying itself and those tables around $a000-$cfff. None of that data exists anywhere in the .sid file — it was populated by other in-game code the ripper never captured. SIDdecompiler's own `-v2` map spans $1f00-$cf10 and its `-r` disassembly LOOKS complete (real, non-padding instructions at every one of those addresses), but everything outside $9900-$9cff is trace-drift artifact (whatever the emulator happened to compute during the initial, pre-reload trace pass), not real file content — confirmed by direct hex inspection of the raw payload bytes. Byte-diff against the real payload is still a legitimate 100.0000% over the 5120 bytes that DO exist; a register-write trace-diff is NOT possible for this file and would not become possible with RetroDebugger either, since the missing bytes were never captured by the rip in the first place — no amount of live stepping recovers data that isn't in the file."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Westgate, Robert' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Batty (full credits, traced file, publisher correction): https://www.lemon64.com/game/batty",
    "Lemon64 — By Fair Means... or Foul!: https://www.lemon64.com/game/by-fair-means-or-foul",
    "Lemon64 — Kwik Snax (full credits, publisher correction): https://www.lemon64.com/game/kwik-snax",
    "CSDb search — Westgate (9 SID compositions, includes 3 earlier uncarded titles: Megawarz, Outback, Roomlord, 1983-1984 Paramount Software): https://csdb.dk/search/?seinsel=all&search=Westgate",
    "Existing KB card: knowledge/players/robert-westgate-v1.md (the earlier companion driver, this same batch)",
    "Local dataset: 3 files tagged Robert_Westgate_v2, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Robert_Westgate_v2` tag is English composer Robert Westgate's later
playroutine (1987-1990), the second of two versions in his output. His
coding partnership with Jason Benham continues unbroken from the earlier
era, now spanning four different UK publishers. Player-ID-fingerprinted
across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **unbroken 6-year,
4-publisher Jason Benham coding partnership**, confirmed running across
both driver versions — a notable finding about a stable, long-running
UK composer/coder duo. Also notable: **two publisher-attribution errors**
caught and corrected from the original research premise.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly produced this pass via `SIDdecompiler.exe -r` +
`64tass.exe` for `Batty.sid` and `By_Fair_Means_or_Foul.sid` — both
100.0000% byte-exact and register-write-exact under a relocation control.
`Kwik_Snax.sid` disassembles too but is not verifiable end-to-end — see
Verification below. Full data-format/effects annotation of the
disassembly (order list, pattern encoding, instrument table) was not done
this pass; that's the next lead if someone wants to take this further.

## Verification

**Reconstruction verified (2026-08-07) — `status: verified`.**

Read PSID headers directly (all three files use the `loadAddr=0` /
embedded-load-address convention, no literal header load address):
- `Batty.sid`: load `$1b66`, init `$1c00`, play `$1b66` (play == load —
  the play routine is literally the file's first loaded byte), 8 subtunes.
- `By_Fair_Means_or_Foul.sid`: load `$9000`, init `$9b56`, play `$9b77`,
  6 subtunes.
- `Kwik_Snax.sid`: load `$9900`, init `$ab80`, play `$abb4`, 9 subtunes —
  both vectors point outside the ripped payload, see below.

**Batty.sid**: `SIDdecompiler -r -a7014` (decimal for `$1b66`) →
`64tass` reassembly is **100.0000% byte-exact** (0/3738 diffs) against
the true PSID payload — tautological per this project's own `-r`
precedent, so a relocation-invariance control was run to get real
evidence: rebuilt the identical disassembly at a page-aligned base
(`$0a66`, 104/55706 bytes genuinely differ from the native build) and a
non-page-aligned base (`$0a2f`, 184/55706 bytes differ). Both controls
traced **register-write-exact against the true original** (via
`sidm2-sid-trace.exe`, cycle column stripped per this project's own
methodology): 37/37 writes on subtune 0, 0 tuple diffs; spot-checked
subtune 6 (54/54 writes, 0 diffs) at both control bases too. Also
cross-checked all 8 subtunes' native reconstruction against the true
original directly: 0 divergence on every one (37/37, 37/37, 39/39,
45/45, 38/38, 31/31, 54/54, 39/39 writes). Note: the driver contains a
runtime block-copy (source pages `$2000-$2900` inside the payload →
scattered destination pages `$e000-$f400`, all correctly symbolized by
SIDdecompiler, hence why `-v2`'s map spans `$1b66-$f4ff` — this is the
lesson-62/88 pattern, not a defect).

**By_Fair_Means_or_Foul.sid**: same recipe (`-a36864` for `$9000`) →
**100.0000% byte-exact** (0/2980 diffs), `-v2` map is a clean contiguous
`$9000-$9ba3` (no block-copy in this one). Relocation control at
page-aligned `$7f00` and non-page-aligned `$7ec9`: both
**register-write-exact**, 192/192 writes, 0 tuple diffs at both bases.

**Kwik_Snax.sid**: byte-diffs **100.0000%** over the 5120 bytes that
actually exist in the file (relocated onto the `-v2` Start address
`$1f00`, a fixed low-RAM workspace block below load, per gotcha 40) —
but its PSID init/play vectors (`$ab80`/`$abb4`) sit ~3.5KB past the end
of the captured payload. Direct hex inspection of the raw file confirms
the real driver code (a `SEI`/bank-switch/table-read init sequence,
byte-identical to the reconstruction) sits at native `$9900`, and that
routine itself reads instrument tables from `$a800-$abff` — a region the
init's own opening `lda #$36 / sta $01` (disabling BASIC ROM in favor of
RAM at `$a000-$bfff`) makes clear is meant to be populated RAM,
but which this specific rip never captured. SIDdecompiler's `-r`
disassembly produces plausible-looking, non-padding instructions at
`$ab80` anyway — confirmed via hex/byte inspection this is trace-drift
artifact (leftover state from the pre-`-r`-reload trace pass), not real
file content, since those addresses are outside `[load, load+len)` and
the reload only restores addresses the file's own image covers. No
register-write trace-diff is possible for this file's own declared
init/play — the required data was never part of the rip. This is a
data-completeness gap in the .sid file itself, not something a
RetroDebugger pass could resolve (it would only have the same missing
bytes to work with).

**Status raised to `verified`** on the strength of 2 of 3 tagged files
(Batty, By_Fair_Means_or_Foul) reconstructing exactly — byte-exact and
register-write-exact under a genuinely non-tautological
relocation-invariance control, exceeding this project's `verified`
precedent (laxity-newplayer ~99.9%). Kwik_Snax's incompleteness is
reported honestly as a property of that specific rip, not swept into the
headline number.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb,
and the related robert-westgate-v1 card.
