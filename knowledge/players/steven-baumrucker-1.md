# Steven Baumrucker (early driver, arcade/educational)

```json
{
  "id": "steven-baumrucker-1",
  "name": "Steven Baumrucker (early driver, arcade/educational)",
  "aliases": ["Steven_Baumrucker_1"],
  "authors": ["Steven Baumrucker"],
  "released": "1983-1984 (Screenplay era)",
  "status": "in-progress",
  "platform": "American musician Steven Baumrucker's own playroutine, the first of two driver versions in this KB — used for Screenplay's arcade-action and educational titles. A second, uncarded-until-this-batch [[steven-baumrucker-2]] covers his RPG-genre scoring for the same publisher. Now generally believed (per an external classic-game-programmers list) to be the same Steven Baumrucker who became a physician. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Pogo Joe, 1983, Screenplay): load $9200 (init $a050, play $a0c0).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a050.", "play": "Sample trace: $a0c0 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 3 filter writes in a sparse 21-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL for this composer — a bare 'Baumrucker, Steven' entry, no country, no group, the same sparse-entry pattern already seen for [[paul-mudra]].",
    "A LIKELY REAL-WORLD IDENTITY WAS FOUND, EXPLICITLY FLAGGED AS PLAUSIBLE-NOT-CONFIRMED: 'The Giant List of Classic Game Programmers' lists him explicitly as 'Baumrucker, Steven, MD' crediting all 7 of his known titles (across both this tag and [[steven-baumrucker-2]]) to Screenplay. Many independent medical-profile pages corroborate a real physician named Steven Baumrucker (hospice/palliative medicine). The game-credit-to-physician link rests on the Giant List alone — plausible, but NOT cross-confirmed by a second gaming-specific source, and explicitly reported as such rather than asserted as fact.",
    "THREE CONFIRMED TITLES: Pogo Joe (1983, Screenplay, the traced file — a real, fairly well-known Q*bert-style game, also released on Atari 8-bit; full Lemon64 credits: concept David Handel, programming Oliver Steele & William F. Denman Jr., graphics Michael Haire, MUSIC/SOUND Steven Baumrucker, 'level designer and sound/music director,' music built on J.S. Bach themes), Playful Professor - Math Tutor (1984, Screenplay, an educational math/logic title), and The Trivia Arcade (Screenplay, co-credited with Randall Masteller — DATES CONFLICT ACROSS SOURCES, 1984 per the Giant List vs. a 1987 Internet Archive label, likely a later re-release/repackage rather than the true original date — EXPLICITLY LEFT UNRESOLVED).",
    "THE HYPOTHESIZED PUBLISHER/EMPLOYER SPLIT BETWEEN THIS TAG AND [[steven-baumrucker-2]] IS NOT CONFIRMED, and likely disproven: ALL SEVEN titles across both tags are Screenplay releases — there is no distinct second publisher explaining two driver versions. The more plausible explanation (genuinely inference, NOT sourced by any interview or credits page) is a genre/era split within the same company — arcade-action music here vs. RPG dungeon-crawler music on the sibling tag — drawn only from the trace metrics themselves (this tag's sparser, differently-voiced 21-write/50-frame sample vs. the sibling's own denser trace), not stated by any external source.",
    "NO EVIDENCE HE WAS A CODER — every source (Lemon64, Wikipedia, the Giant List) credits him strictly as musician/sound designer; programming on all titles is credited to others (Oliver Steele, William F. Denman Jr., and on The Trivia Arcade, co-composer Randall Masteller may also have had a design role, not fully itemized).",
    "NO CSDb SCENER PROFILE EXISTS — consistent with a purely US commercial/educational-software composer with zero European demoscene footprint, the same absence pattern already established for [[al-lowe]] and [[paul-mudra]].",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[steven-baumrucker-2]] (same composer, companion tag/possible driver split — this same batch). No sourced connection found to [[al-lowe]], [[paul-mudra]], [[ed-bogas-accolade]]/[[ed-bogas-hakansson]], or [[rick-cardinali]] despite categorical similarity (all US commercial/educational-software-era composers with no CSDb presence) — explicitly checked, different companies (Sierra, Westwood, Accolade/Håkansson, and Baumrucker's own Screenplay respectively), no shared driver/collaborator/company link found."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Baumrucker, Steven' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "The Giant List of Classic Game Programmers ('Baumrucker, Steven, MD'): http://ifarchive.ifreviews.org/if-archive/info/classic-game-programmers.list",
    "Wikipedia — Pogo Joe: https://en.wikipedia.org/wiki/Pogo_Joe",
    "Lemon64 — Pogo Joe (full credits, traced file): https://www.lemon64.com/game/pogo-joe",
    "Lemon64 — Playful Professor - Math Tutor: https://www.lemon64.com/game/playful-professor-math-tutor",
    "CSDb release id=77261 (Playful Professor - Math Tutor): https://csdb.dk/release/?id=77261",
    "Internet Archive — The Trivia Arcade (labeled 1987, likely a re-release): https://archive.org/details/Trivia_Arcade_The_1987_Screenplay",
    "Existing KB card: knowledge/players/steven-baumrucker-2.md (the companion driver, this same batch)",
    "Local dataset: 3 files tagged Steven_Baumrucker_1, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steven_Baumrucker_1` tag is American musician Steven Baumrucker's
own playroutine, used for Screenplay's arcade-action and educational
titles — the first of two driver versions in this composer's output.
Plausibly the same person who later became a physician, per an external
classic-game-programmers list. Player-ID-fingerprinted across 3 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **honestly-flagged
physician identity**: a plausible but single-sourced real-world identity
link, reported as unconfirmed rather than stated as fact. Also notable:
the **hypothesized driver-split-by-publisher theory was checked and
found unsupported** — all 7 titles across both tags share the same
publisher, so the split more likely reflects genre/era than employer.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Steven_Baumrucker_1`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Steven_Baumrucker_1` `.sid` (Pogo Joe): load `$9200`,
init `$a050`, play `$a0c0`, **21 register writes / 50 frames** (3 filter
writes — sparse). Internals undocumented; memory map/format/effects are
`TODO`.

**Disassembly/reassembly attempted (2026-08-07) — `status` unchanged
(`in-progress`, NOT raised to `verified`).** `SIDdecompiler.exe` (`-a37376
-z -d -c -v2 -r`, native load address `$9200`) on `Pogo_Joe.sid` reported
`-v2` `Start: $1594` (far below the `$9200` load address) and `End:
$a0e6`. Ground truth confirmed from the raw PSID header directly:
`PSID` v2, load `$9200` (embedded, header field = 0), init `$a050`, play
`$a0c0`, 6 subtunes.

- The gap ($1594-$91ff) is NOT dead workspace — the `-v2` map's own
  legend marks large stretches of it `#`/`_` (execute+write /
  operand+write, i.e. genuine self-modifying CODE), not `w`/`?`. INIT
  contains an explicit page-copy loop (`ldx #$07 / lda (z80),Y / sta
  (z82),Y / iny / bne ... / inc z81 / inc z83 / dex / bne`) copying 7
  pages from the file's own in-payload data at `l9200` down to `l1594`,
  then `play` does `jsr l15a2` (an address inside the just-copied
  block) every frame — the lesson-88/lesson-93 self-relocating-block-
  copy pattern (copy destination below the load address).
- Relocating with `-a` set to the header's own load address (matching
  gotcha 1/2, and appropriate here since Start < load address is the
  copy-destination case, not the dropped-leading-byte case) gave a
  clean, non-wrapping reassembly once `-a` was corrected to the `-v2`
  Start address ($1594, decimal 5524) per gotcha 40/lesson 54 — a
  35667-byte single contiguous block, no `-Wwrap-*` warnings.
- **Byte-diff of the file's own real payload (`$9200`-`$a0e6`) against
  the reassembly: 100.0000% exact (0/3815 bytes differ).** Native
  trace (60 frames, subtune 0) reproduces the same register-write
  pattern the 2026-07-15 pass found (a sparse ~21-write profile with a
  cluster of 14 writes at frame 6 and smaller clusters at frames 1, 2
  and 48).
- Found and fixed one confirmed relocation defect during this pass:
  `SIDdecompiler` emitted the copy loop's DESTINATION pointer as two
  raw immediate bytes (`lda #$15` / `ldx #$94`, i.e. a hardcoded
  `$1594`) instead of `#>l1594`/`#<l1594` — the lesson-80/109 split-
  immediate-pointer defect. Patched in both the native and a
  relocation-control `.asm` (both keep the label `l1594`, per lesson
  61's "native label names survive relocation" finding).
- **However, this native byte-diff/trace-diff is tautological by
  construction (`-r` reproduces pristine file bytes byte-for-byte, per
  lesson 63/65/69)** — a real, non-tautological verification needs the
  relocation-invariance control (lessons 69/70/72). That control was
  attempted at a page-aligned `+$1000` delta (ruling out a lessons
  79/87/91/103/110-style page-lock, since a page-aligned control would
  be expected to pass under that explanation) and **failed completely:
  0 SID register writes over 60 frames after the split-pointer fix**,
  vs. 21 writes on the native/tautological build. No further
  unsymbolized `#<label`/`#>label` or 4-hex-digit literal candidates
  were found by exhaustive grep of the `.asm` (the only other
  `#$xx`-immediate-pair candidate found in the whole file was an
  unrelated loop counter, `ldx #$07`/`ldy #$00`).
- **Root cause of the relocation-control failure, diagnosed but not
  fixable by this project's static method**: the copied block's own
  internal machine code (whatever lives inside `l15a2` — the routine
  `play` calls every frame) was NEVER actually disassembled as code by
  `SIDdecompiler`. Its source representation (`l9200`-`l98ff` in the
  file) is pure `.byte` data (never executed AT that source address in
  this file's own trace — only after being copied), and its
  destination representation (`l1594` onward) is a run of `.byte $00`
  ("brk") placeholder bytes, because `-r`'s pristine-reload blanks any
  address outside the file's own `[load, load+len)` range (lesson 78) —
  which this copy destination is. The native build "works" purely
  because relocating to `-a<Start>` reproduces the SAME native
  addresses ($9200→$1594) the real file already uses, so the raw byte
  copy is correct by construction without SIDdecompiler ever having to
  understand what's inside it. On relocation, that raw copied machine
  code's own internal absolute-address references (whatever jumps,
  branches or self-modified operands exist inside the real `l15a2`
  routine) are never translated, because they were never classified as
  code with symbolic operands anywhere in the tool's output. This is a
  variant of lesson 78 one level deeper than the case that lesson
  documents (there the destination was merely under-disassembled;
  here the TRUE code content is never disassembled at either the
  source or the destination address).
- **Confirmed as a structural, driver-family-wide trait, not a
  Pogo-Joe-specific fluke**: a raw hex-dump of the sibling tagged file
  `Playful_Professor-Math_Tutor.sid`'s own init routine (`$7f28`, real
  PSID header load `$77df`) shows the identical idiom — `bd $8000,X /
  9d $6200,X` (indexed-absolute, not zero-page-indirect, but the same
  "copy code to lower RAM before running it" trick) copying 5 pages
  from `$8000-$83ff` down to `$6200-$63ff`, then installing a custom
  IRQ vector (`$0314/$0315 = $7f75`) whose handler is `jsr $6212 / jmp
  $ea31` — `$6212` sits inside that same copied block (this file's own
  PSID header declares `play: $0`, i.e. self-installing-IRQ, so its
  real play entry — `$6212` — had to be recovered by hand per lesson 81
  rather than taken from the header).
- **Net result: a well-characterized, honestly-quantified partial
  verification.** The native reconstruction is 100.0000% byte-exact
  against the real file's payload and reproduces the file's own
  register-write profile, but that match is tautological by this
  project's own precedent and cannot be upgraded to `verified` without
  a non-tautological trace, which the relocation control cannot
  currently provide for this driver. **This is exactly the kind of
  blocker that needs RetroDebugger** (a live 6502 emulator) rather than
  more static analysis: single-stepping through `l15a2` at its native
  address ($15a2) after `Pogo_Joe.sid`'s own `init` runs would reveal
  the real instruction stream inside the copied block, which could
  then be hand-annotated back into the `.asm` as proper code with
  symbolic operands — at which point a real relocation-invariance
  trace-diff becomes possible. RetroDebugger was unavailable in this
  session (MCP server disconnected) — this is a concrete, named next
  step for whenever it's reconnected, not a general "keep
  investigating."

## Sources

See the `sources` array — HVSC Musicians.txt, The Giant List, Wikipedia,
Lemon64 (2 pages), CSDb, Internet Archive, and the related steven-
baumrucker-2 card.
