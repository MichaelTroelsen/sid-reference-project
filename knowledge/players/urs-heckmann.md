# Urs Heckmann Driver

```json
{
  "id": "urs-heckmann",
  "name": "Urs Heckmann Driver",
  "aliases": ["Urs_Heckmann"],
  "authors": ["Urs Heckmann-Jebens (composer AND driver coder — self-reported, see quirks)"],
  "released": "1986-1989",
  "status": "in-progress",
  "platform": "Native C64. A hand-coded personal driver + sequencer, written in 6502 assembler by the composer himself. No editor artifact known to survive.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file: Das_Model $c000, La_Piranha $c000, Nippon $b8f8 (relocates to $9000), Howard_the_Coder $e812 (driver body at $f1d9).",
    "zero_page": "Nippon: $fb-$fe (zfb/zfc = source ptr, zfd/zfe = dest ptr) — used ONLY by the init-time relocation copy loop ($b8f8->$9000); confirmed by exhaustive grep of the full disassembly, no other ZP reference anywhere. Howard_the_Coder: ZERO zero-page usage anywhere in its disassembly (confirmed same way) — its init/play routines are 100% absolute/immediate addressing. Das_Model/La_Piranha: not yet disassembled.",
    "layout": "One driver family across all four files. Shared table block sits at driver_base+$03, preceded by a JMP vector. Frequency table offsets: Das_Model/La_Piranha $c03f, Howard $f218, Nippon $cad0. Byte-identical driver spans confirm reuse: La_Piranha 177 bytes from $c000 identical to Das_Model, Howard 172 bytes, Nippon 79 bytes."
  },
  "entry": {
    "init": "Das_Model $c000, La_Piranha $c000, Nippon $c000 (a relocation stub; real init at $c0b7), Howard_the_Coder $e812.",
    "play": "Nippon $c09f, Howard_the_Coder $e913. Das_Model and La_Piranha are PSID play=$0000 — they install their own IRQ via $0314/$0315 (Das_Model vectors to $c128) then CLI."
  },
  "speed": "Nippon/Howard: 1x (traced). Das_Model/La_Piranha: UNRESOLVED but NOT 1x — they trace at ~1,086 and ~1,136 writes PER FRAME (54,295 / 56,790 writes over 50 frames), an order of magnitude above the other two. That rate implies heavy multispeed or per-sample register churn. Measured, not explained — do not record a speed until it is understood.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE HEADLINE: this is the C64 driver of URS HECKMANN, founder of u-he — the German software-synth company behind Diva, Zebra and Hive. CONFIRMED from a primary source in his own words, not merely a same-name match. In a 2017 bonedo.de interview (sole interviewee, quote attributed verbatim to 'Urs Heckmann:'): 'ich hatte als Jugendlicher natuerlich einen Commodore C64, und da ist ja ein Synthesizerchip eingebaut gewesen. DAFUER HABE ICH EINEN SEQUENZER GESCHRIEBEN, und die Idee, dass ich gerne mal einen Synthesizer bauen moechte war schon damals vorhanden.' He also says 'Fuer ein Spiel durfte ich dann die Titelmelodie komponieren' and 'So um 1986 oder 1987 traten dann auch andere an mich heran' (800 Mark across three years). That independently corroborates the two most unusual facts the file evidence already implied: he wrote his OWN sequencer (hence a unique tag with no SIDId entry) and composed game title melodies ~1986/87 (the SID headers span exactly 1986-1989). u-he was founded 2001. Confidence ~97%.",
    "THE RESIDUAL 3% — recorded honestly rather than rounded away: the bonedo interview never names the game or the magazine. So the step from 'the u-he founder composed a game title melody' to 'Nippon and Howard the Coder SPECIFICALLY' rests on VGMPF + C64-Wiki, not on Heckmann's own quote. Everything else converges (born 1970 Cologne -> age 15 -> 64'er competition -> the two 1986 headers; industrial-design degree stated by both the C64-composer bio and the u-he founder).",
    "NAME VARIANT, UNEXPLAINED: every C64 source says 'Urs Heckmann-JEBENS' (SID headers, HVSC Musicians.txt, CSDb, DeepSID); u-he, VGMPF and C64-Wiki say plain 'Urs Heckmann'. Not a contradiction (VGMPF covers the same two games under the short name), but the reason for the difference could not be determined. Do not silently normalize one to the other.",
    "NOT A SCENE MEMBER: no handle, no CSDb scener profile (csdb_id 0), no HVSC group. He was a magazine/commercial contributor, not a scener. Notably the scene picked HIM up rather than the reverse — CSDb lists La Piranha appearing in compilations by Genesis Project (1987), Sky-Soft (1987) and Austrian Phantom Crackers (1988).",
    "DATA-QUALITY NOTE: DeepSID records active: 1989. That is wrong — the files span 1986-1989.",
    "THE TWO 1986 TUNES ARE 64'ER COMPETITION ENTRIES (top 29). This is the SAME 64'er music competition that Chris Huelsbeck WON with 'Shades' — see [[soundmonitor]], whose card already documents that competition. One competition produced both the era's most important editor and this hand-rolled personal driver. Das_Model is a Kraftwerk cover (STIL: 'The Model [from The Man-Machine]').",
    "A REAL TUNING BUG, ISOLATED TO ONE TABLE INDEX: the 2-octave semitone frequency table (ratio ~2^(1/12), base $20) is byte-identical across all four files EXCEPT index 19 — Nippon has $60, the other three have $62. The ideal value is 32*2^(19/12) = 95.9, so $60 is CORRECT and $62 is ~36 cents sharp. But this is NOT a clean chronological fix: Nippon (1988) has it right while Howard (1989) still carries the 1986 value — implying two source branches rather than a linear fix. The fact is solid; the explanation is NOT — do not assert a cause.",
    "NIPPON'S INIT IS A RELOCATION STUB (fully disassembled): $c033 banks out BASIC ($01 |= %101, &= ~%10), then $c040 memcpys 7 pages + 2 bytes ($702) from $b8f8 -> $9000 because the music data sat under BASIC ROM; $c02b restores $01 |= %111; JMP $c0b7 is the real init, which clears $d400-$d418 (LDA #$00 / LDX #$18 / STA $d400,X / DEX / BPL).",
    "FILTER: NO-FILTER-ON-HOWARD IS A COMPOSITIONAL CHOICE, NOT A DRIVER DIFFERENCE — an easy wrong conclusion to draw from traces alone. Traced Nippon (600 frames): $d417=$01 (voice 1 routed, res 0), $d418 $0f->$1f (bit 4 = low-pass on), $d416 swept $00->$72 in steps of 5 (cutoff sweep). Traced Howard: ZERO $d416/$d417 writes, $d418 only ever $01-$0f (volume nibble, high nibble always 0, so no filter mode). But Howard's BINARY still contains the static $d416/$d418 stores — same driver, same code paths — the song data simply never triggers them. Das_Model is the most filter-active statically (5x STA $d417, incl. $c0bd: LDA #$f8 -> resonance 15).",
    "PWM: Nippon writes osc1/2/3_pw_lo every frame (599 of 600) = continuous PWM on all three voices; Howard writes osc3_pw_lo 600x = PWM on voice 3 only.",
    "RECONSTRUCTION (2026-07-31): Nippon and Howard_the_Coder both now disassemble/reassemble/trace BYTE- AND REGISTER-WRITE-EXACT at their native (header) addresses — see Verification. Both files independently FAIL a relocation-invariance control (rebuilding the identical disassembly at a shifted base address, per this project's standard non-tautological check), and the failure starts at frame 0 on Howard and survives patching the one confirmed hardcoded-immediate-pointer defect found on Nippon (LDA #$90/LDY #$00 building the copy-destination pointer, not symbolized by SIDdecompiler — fixed to LDA #>l9000/LDY #<l9000, which improved but did not close the divergence). Working hypothesis, NOT confirmed: this is a hand-rolled personal driver whose compiled SONG DATA (not just its code) embeds absolute pointers/table indices tied to a fixed workspace base ($9000 for Nippon), which no static relocation can fix without decoding the song-data format itself — analogous to this project's own precedent for other page/address-locked drivers, but here the lock appears tighter (whole-address, not just page) and the exact byte(s) responsible were not isolated. Do not assert the cause; the native-address match is unaffected by this and stands as the byte/trace evidence."
  ],
  "sources": [
    "bonedo.de interview, Sebastian Berweck, 2017-02-03 (PRIMARY — Heckmann's own words on writing a C64 sequencer and composing game title melodies): https://bonedo.de/artikel/einzelansicht/software-synthesizer-und-analog-modeling-hinter-den-kulissen.html",
    "VGMPF (born 1970-04-06 Cologne; attributes Nippon 1988 + Howard the Coder 1989; 'programmed his own driver and possibly an editor, mostly in 6502 assembler'; industrial design Halle 1993-2001; u-he.com; primary-researched, incl. direct quote and contact with Nippon's devs): https://www.vgmpf.com/Wiki/index.php?title=Urs_Heckmann",
    "C64-Wiki DE (links the C64 musician to founding u-he in 2001): https://www.c64-wiki.de/wiki/Urs_Heckmann",
    "Attack Magazine interview (u-he founder: 'I have a university degree in industrial design' — matches the C64-composer bio): https://www.attackmagazine.com/features/interview/we-do-it-because-we-want-to-not-because-we-see-commercial-opportunities-urs-heckmann/",
    "CSDb SID entries: Das_Model https://csdb.dk/sid/?id=1101 · La_Piranha https://csdb.dk/sid/?id=1103 · Nippon https://csdb.dk/sid/?id=46058 · Howard_the_Coder https://csdb.dk/sid/?id=37863",
    "Local HVSC #85 (Musicians.txt: 'Heckmann-Jebens, Urs - GERMANY'; SID headers; STIL cover tag) + local disassembly/trace of all four files"
  ]
}
```

## Overview

The `Urs_Heckmann` tag is the **personal, hand-coded driver and sequencer of Urs
Heckmann-Jebens** — the same Urs Heckmann who went on to found **u-he**, the
German software-synthesizer company behind Diva, Zebra and Hive. He wrote it as
a teenager in 6502 assembler, entered two tunes in the 1986 *64'er* magazine
music competition (top 29 — the competition [[soundmonitor]]'s card already
notes Chris Hülsbeck **won** with *Shades*), and over roughly three years
composed title music for two Markt & Technik games for about 800 Mark total.

The through-line is unusually neat: a fifteen-year-old writes his own sequencer
for the SID chip *because it was the synthesizer he had*, and says in the same
breath that the idea of building a synthesizer "was already there back then."
Fifteen years later he founded a company that does exactly that. Four files in
HVSC are the surviving artifact of the first half of that sentence.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The u-he identification is confirmed from a primary source** — Heckmann's
  own interview quote, not a wiki cross-reference. But the last mile (which
  *specific* games) rests on secondary sources; that gap is recorded, not
  papered over.
- **Howard the Coder's silent filter is a composition choice, not a driver
  variant.** The code paths are present in the binary; the song data never
  fires them. A trace-only reading would get this wrong.
- **A real ~36-cent tuning error** sits at frequency-table index 19 in three of
  the four files. Nippon has the correct value — but it's *newer than one file
  and older than the other*, so it isn't a chronological fix. Two source
  branches is the obvious guess and is **not** asserted here.

## Disassembly notes

One driver family across all four files, confirmed by byte-identical spans
(La_Piranha 177 B from `$c000` identical to Das_Model; Howard 172 B; Nippon
79 B). Layout: a `JMP` vector followed by a table block at `driver_base+$03`.

Nippon's init is the most interesting region and is fully disassembled (see
quirks): a BASIC-bank-out → `$702`-byte memcpy from `$b8f8` to `$9000` → bank
restore → `JMP $c0b7`, because the music data was parked under BASIC ROM.

Unresolved: Howard's `$e812` wrapper vs. the `$f1d9` driver body — the JMP
target (`$f1a9`) sits *before* the table block, so that file was re-assembled
rather than purely relocated.

**2026-07-31: full `SIDdecompiler` disassemblies of Nippon and Howard now
exist** (byte/trace-exact — see Verification) and could resolve the item
above with a direct read; not done this pass. Confirms the `-v2` memory map
for both files never shows a `Start:` address matching the PSID header's own
load address — Nippon's gap is the documented relocation-copy destination
(`$9000`, below load `$b8f8`), Howard's is a single unrelated scratch byte
(`$cffe`, 6164 bytes below load `$e812`, written once from a saved
filter/volume snapshot inside init) — two different mechanisms producing the
same symptom, both requiring relocation onto the `-v2` Start address rather
than the header's load address to reassemble correctly.

## Verification

`status: in-progress`. Identity is confirmed and primary-sourced. Nippon and
Howard were **traced locally** (600 frames each) and their filter/PWM behavior
above is measured, not inferred.

**Update (2026-07-31): Nippon and Howard_the_Coder disassembled, reassembled,
and byte/trace-diffed against their real HVSC files — both are exact.**

Method: `SIDdecompiler.exe -z -d -c -v2 -r`, relocated to the `-v2` map's own
reported `Start:` address (not the PSID header's load address — both files'
`Start:` sits below the header load address, for two different reasons, see
below), reassembled with `64tass`, byte-diffed against the original PSID
payload at the header's real load-address window, then register-write
trace-diffed via `sidm2-sid-trace.exe` at the header's real init/play
addresses.

- **Nippon** (load `$b8f8`, init `$c000`, play `$c09f`). `-v2` Start is
  `$9000` — this is the relocation stub's COPY DESTINATION (already
  documented on this card: init copies `$702` bytes from `$b8f8` to `$9000`
  because the song data sits under BASIC ROM), not dead workspace. Relocating
  onto `-a36864` (decimal for `$9000`) gave one clean contiguous 64tass
  block, no wrap warnings. **Byte-diff: 5074/5074 bytes = 100.0000% exact**
  at the real load address. **Trace-diff: 2202/2202 register writes exact**
  over 600 frames (raw diff of the two `sidm2-sid-trace.exe` outputs is 0
  lines, including cycle counts).
- **Howard_the_Coder** (load=init `$e812`, play `$e913`). `-v2` Start is
  `$cffe`, 6164 bytes below the load address — turned out to be a single
  scratch byte (`lda lf343 / sta lcffe`, a saved snapshot of a
  filter/volume-table value inside init), not a workspace block or copy
  target. Relocating onto `-a53246` (decimal for `$cffe`) gave one clean
  block. **Byte-diff: 5901/5901 bytes = 100.0000% exact. Trace-diff:
  1506/1506 register writes exact** over 600 frames (raw diff 0 lines).

**Non-tautological check attempted (relocation-invariance control, per this
project's own precedent for a byte-identical `-r` build):** rebuilding the
identical disassembly at a shifted base address and re-tracing it — this
FAILED on both files (Nippon: 994/2202 writes match before diverging into
garbage values at frame 3, after patching one confirmed hardcoded-immediate
copy-destination pointer; Howard: diverges from frame 0's very first two
writes). This is recorded as an open, honestly-flagged question in `quirks`
("RECONSTRUCTION" entry) — not asserted as a defect in the reconstruction,
since the native byte-diff and trace-diff are unaffected by it and a
plausible structural cause (song-data-embedded absolute pointers in a
personal, never-designed-for-relocation driver) fits the file's own facts,
but the exact responsible byte(s) were not isolated within this pass's
budget. **A live disassembler/debugger pass (RetroDebugger) was not used and
was not needed here** — the blocker is in a symbolic-relocation control, not
a static-disassembly mystery a byte-diff/trace-diff can't explain; isolating
it further would mean binary-search patch-isolation (this agent's own
`lesson 64`/`gotcha 41` technique) on the ~950 relocation-shifted bytes, which
is a good next step but was not attempted here.

**Update (2026-07-16): `Das_Model` and `La_Piranha` now trace.** They are
`play=$0000` self-installing-IRQ files that the project's own tracer cannot drive
(it returned 0 writes, then 15 bogus ones). Re-traced with
`scripts/dev/vsid-trace.js`: **54,295** and **56,790** writes over 50/50 active
frames. This **confirms at runtime** what was previously inferred from static
`$d417` stores alone — `$D416`/`$D417`/`$D418` are all genuinely written.

**But it raises a new question rather than closing one.** Those rates are
**~1,086 and ~1,136 writes per frame** — an order of magnitude above Nippon
(~1/frame) and Howard, on the same driver family. Heavy multispeed and
per-sample register churn are both plausible; **neither is established**, and
the `speed` field deliberately records the measurement without an explanation.
Worth a dedicated look — it may be the most interesting unexplained thing on
this card.

**Not verified overall** (status stays `in-progress` — 2 of 4 files are now
byte/trace-exact, but `Das_Model`/`La_Piranha`'s order-of-magnitude write-rate
anomaly is still completely unexplained, and no reconstruction was attempted
for either this pass), and specifically:
- Data format and effect encodings were not investigated and are left `TODO`
  (zero-page is now filled in for Nippon/Howard — see `memory.zero_page`).
- `Das_Model` and `La_Piranha` (the two self-installing-IRQ files) have never
  been disassembled or reassembled — only traced as opaque black boxes. Their
  `play=$0000`/self-modified-IRQ-vector shape plus the possibility of a
  `SIDdecompiler` hang on this pattern (this agent's own `lesson 81`/`gotcha
  23`) make them a plausibly harder case than Nippon/Howard; not attempted
  here.
- Nippon's play routine beyond init is undisassembled (only the init/copy
  stub was previously worked out; the reconstruction pass this update adds
  covers the WHOLE file mechanically via `SIDdecompiler`, but no line-by-line
  reading of the play routine's logic was done).
- The relocation-invariance control's exact failure cause (Nippon and Howard
  both) was not isolated — see the "RECONSTRUCTION" quirk entry above for the
  concrete next step (binary-search patch isolation).
- Whether *La Piranha* is a cover is **unknown** — STIL doesn't tag it, CSDb
  identifies no original, and VGMPF's "two arrangements" only *hints* that both
  1986 entries were covers. Only Das_Model is confirmed.
- Whether an editor accompanied the sequencer: Heckmann's "einen Sequenzer
  geschrieben" implies one, VGMPF hedges ("possibly"), and no artifact is known
  to survive.
- MobyGames and GB64 both returned HTTP 403 and were not consulted.

## Sources

See the `sources` array above.
