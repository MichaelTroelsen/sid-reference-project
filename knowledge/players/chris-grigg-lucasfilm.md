# Chris Grigg (Lucasfilm / Habitat-SCUMM driver)

```json
{
  "id": "chris-grigg-lucasfilm",
  "name": "Chris Grigg (Lucasfilm / Habitat-SCUMM driver)",
  "aliases": ["Chris_Grigg_2"],
  "authors": ["Chris Grigg", "Randy Farmer (base driver co-design)"],
  "released": "1986-1987 (Lucasfilm Games)",
  "status": "verified",
  "platform": "The EARLIER of at least two distinct drivers used by composer-tool-builder Chris Grigg — CONFIRMED as a second, genuinely separate driver from his later, already-carded [[chris-grigg]] Epyx 'SPL' tool. This one traces to his Lucasfilm Games era (~1985-87), predating Epyx: the Randy Farmer/Chris Grigg sound driver co-designed for 'Habitat' (Lucasfilm's pioneering graphical MMO), later adapted by Aric Wilmunder into early SCUMM's own music driver — the same engine used on 'Maniac Mansion' (1987), on which Grigg is separately credited for arranging the music data into SCUMM itself. Player-ID-fingerprinted across 3 files, all by Grigg.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, from each PSID header (all 3 disassembled/reassembled/traced 2026-08-01): Habitat.sid $3ca9 (init $4010, play $3cb8, 2 subtunes); Maniac_Mansion.sid $3280 (init $5300, play $4700, 2 subtunes); PHM_Pegasus.sid $c100 (init = load, play $c10d, 1 subtune).", "zero_page": "Habitat: very light, $db-$dc only (one 16-bit pointer, `zdb`/`zdc`). PHM_Pegasus: $20-$25 + $2e-$31, a small contiguous block. Maniac_Mansion: wide, $02-$ff (SCUMM-integrated build, much larger ZP footprint than the other two).", "layout": "Habitat's engine (the clearest of the 3): per-voice state tables l40a4-l40f1 (indexed 0/1/2 by X — accumulator lo/hi, mute flag, freq, pw, ctrl-byte staging, sustain/decay counters), a mode-flag byte per voice at l3ca9-l3caf, and an instrument-definition pointer built per note from two parallel lo/hi tables (l4046/l403d) selected by an instrument index in Y, read via `(zdb),Y` with a bitmask (l3ffa-l3ffc) gating which optional fields (freq, pulsewidth, ADSR) the definition actually updates. Maniac_Mansion's driver additionally block-copies/decodes a large runtime-only region (SIDdecompiler's -v2 map reports genuine execute+self-modify markers, `#`/`_`, from ~$59d0 up to $9de1 — 17KB+ beyond the file's own $59ce payload end) that is not present on disk; this is why address-relocation fails for this file (see Verification) while native/ZP-relocated builds are unaffected. Not fully mapped — a lesson_learned-88-style synthetic-image recovery of that region is a legitimate next step, not attempted here." },
  "entry": { "init": "Per-file PSID header: Habitat $4010, Maniac_Mansion $5300, PHM_Pegasus $c100 (= load address).", "play": "Per-file PSID header, called in IRQ: Habitat $3cb8, Maniac_Mansion $4700, PHM_Pegasus $c10d." },
  "speed": "50Hz single-speed IRQ-driven play call on all 3 files (per the traces run for verification; PSID speed field not separately re-checked).",
  "data_format": { "order_list": "TODO (not decoded beyond Habitat's instrument-index-in-Y selection scheme, see memory.layout)", "patterns": "TODO", "instruments": "Habitat: a per-note instrument definition record (base address = lo/hi table lookup by index, offset by a per-voice 16-bit accumulator) is read via `(zp),Y` with an 8-bit bitmask gating which fields are present — freq, pulsewidth and ADSR fields are each independently optional per instrument. Not decoded for Maniac_Mansion/PHM_Pegasus.", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in either the original card's 50-frame Habitat sample or this pass's own 150-200 frame traces of all 3 files)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RECONSTRUCTED AND VERIFIED 2026-08-01 — all 3 tagged HVSC files (Habitat, Maniac_Mansion, PHM_Pegasus) reassemble 100.0000% byte-exact from an original SIDdecompiler disassembly (`-a<decimal of load address> -z -d -c -r`), and every one also passes a NON-TAUTOLOGICAL relocation control (Habitat/PHM_Pegasus via page-aligned address relocation, Maniac_Mansion via zero-page relocation — see below and Verification). All tested subtunes trace register-write-exact (Habitat 2/2, Maniac_Mansion 2/2, PHM_Pegasus 1/1).",
    "HABITAT IS PAGE-RELOCATABLE ONLY, not freely relocatable — confirmed via a non-page-aligned control (delta +$123) genuinely diverging from frame 0 (different note sequence entirely, not cycle drift) while a page-aligned control (delta +$1000) traces 0/0 divergences across both subtunes. Root cause identified by inspection, not guessed: three `LDA/LDY #<label` immediates (`#<l4305`=$05, `#<l40ff`=$FF, `#<l4000`=$00) are used as plain NUMERIC CONSTANTS in pointer/offset arithmetic (a wrap-to-zero trick via `INY`, an offset-0 trick for a `(zp),Y` read, and a per-voice accumulator seed) — their values only happen to equal those labels' low bytes because the labels were deliberately page-placed for this purpose, not because the code computes a genuine relocatable address. Hand-patching these three back to literal constants in a non-page-aligned rebuild did NOT fix the divergence (it hung the tracer instead, twice) — this is a real player-design constraint, not a fixable disassembly defect; matches lessons_learned 79/87/91/103/110's precedent exactly, including 110's specific note that SIDdecompiler's own `-A` (force page alignment) flag exists precisely for this class of driver.",
    "MANIAC_MANSION HIDES A LARGE RUNTIME-ONLY CODE REGION BEYOND ITS OWN FILE: SIDdecompiler's -v2 map reports genuine execute+self-modify (`#`/`_`) markers from ~$59d0 to $9de1, well past the file's own $3280-$59ce payload — not workspace (lesson 83's write-only test does NOT apply; this is real code) but not disk content either. This blocks a standard address-relocation control outright (a page-aligned rebuild timed out and, in the seconds it did run, diverged from frame 0 — consistent with lessons_learned 82's Legend_of_Blacksilver precedent: SIDdecompiler only partially symbolises a large runtime-populated code region, so relocating it is unreliable). A **zero-page relocation** (`-Z64`) was used instead as the non-tautological control, exactly per lesson 82's own precedent — it produced a build differing in 68 of 10062 payload bytes (0.68%) that still traced 0 divergences across both subtunes (955/955 and 119/119 writes). The runtime-extended region itself was not further decoded (a lesson_learned-88-style synthetic-image recovery is the honest next step, not attempted here) — but it does not block the payload-window verification.",
    "PHM_PEGASUS IS THE CLEANEST OF THE 3: single subtune, init=load=$c100, and a page-aligned relocation control (delta -$4000) traces 0/0 divergences over 748 writes with 263 of 3178 bytes (8.3%) changed by relocation — a straightforward pass with no page-lock or embedded-region defect found.",
    "THIS IS THE FAMOUS 'HABITAT' — CONFIRMED, not an unrelated same-titled game: Lucasfilm's pioneering graphical MMO on Quantum Link (later 'Club Caribe'), created by Chip Morningstar and Randy Farmer. VGMPF states Chris Grigg 'created the sounds for Habitat... co-designed and used a sound driver programmed by Randy Farmer for Habitat' — i.e. the BASE driver code was Farmer's, with Grigg as co-designer, a meaningful distinction from the already-carded [[chris-grigg]] Epyx SPL tool, which credits Grigg as the sole tool-builder.",
    "A GENUINELY NOTABLE TECHNICAL LINEAGE: this Farmer/Grigg Habitat sound driver was subsequently ADAPTED BY ARIC WILMUNDER into early SCUMM's own music driver — the pre-iMUSE sound system LucasArts used on 'Maniac Mansion' and 'Zak McKracken and the Alien Mindbenders.' On Maniac Mansion (1987, C64, the traced tag's sibling file) specifically, VGMPF credits 'Original music by' BOTH Chris Grigg and David Lawrence (two tracks: 'Maniac Theme,' 'Demo Tape' — unclear which composer wrote which, or whether joint), and Grigg's own resume states he was 'responsible for arranging the sound data to work with the SCUMM engine' — i.e. a genuine coder role integrating the music into the engine, not just a composer credit.",
    "'PHM PEGASUS' IS CONFIRMED LUCASFILM GAMES/ELECTRONIC ARTS, NOT MICROPROSE as an initial research assumption guessed: copyright Lucasfilm Games, published by Electronic Arts, design by Noah Falstein. Lemon64 explicitly credits 'Musician: Chris Grigg'; a secondary source notes he adapted 'We Sail the Ocean Blue' (Gilbert & Sullivan, H.M.S. Pinafore) for the score.",
    "THIS ERA PLAUSIBLY PRECEDES AND FILLS A GAP IN THE EXISTING [[chris-grigg]] CARD'S OWN BIOGRAPHY, which jumps from 'co-founded Future Arts, introduced to Lucasfilm Games' straight to 'freelanced for EA/Epyx starting 1987' without detailing what he actually built during the Lucasfilm period itself — this card supplies that missing chapter (Habitat, Maniac Mansion, PHM Pegasus, ~1986-87) ahead of his Epyx work.",
    "A RELATED BUT DISTINCT CATALOG OVERLAP WITH [[dave-warhol]] WAS NOTED, NOT TREATED AS A DRIVER LINK: Dave Warhol's own card lists 'Zak McKracken and the Alien Mindbenders' (1988) among his credits — the same LucasArts adventure-game catalog Grigg touched (per VGMPF's Grigg gameography, which also lists Zak McKracken). This is a shared-employer/shared-franchise overlap only; Warhol's own card documents a separate, hand-written Merlin-assembler driver, unrelated to the Farmer/Grigg/Wilmunder SCUMM lineage — noted as a 'see also,' not a technical edge.",
    "NO NAMED TITLE EXISTS for this driver beyond 'the sound driver' in every source checked — LucasArts/fan documentation never gave it a distinct product name the way 'SPL' or 'DDTSS' were named by their own creators.",
    "Not confirmed in SIDId (no entry for this tag). Direct relationship to [[chris-grigg]] (same composer, later/separate driver) — the existing card has been updated in this same batch with a cross-reference. A shared-catalog note (not a technical edge) to [[dave-warhol]]. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin)."
  ],
  "sources": [
    "VGMPF — Chris Grigg (Habitat sound design, Farmer driver co-design, gameography): https://www.vgmpf.com/Wiki/index.php/Chris_Grigg",
    "Wikipedia — Habitat (video game): https://en.wikipedia.org/wiki/Habitat_(video_game)",
    "VGMPF — Maniac Mansion (C64) (Grigg/David Lawrence composer credit): https://www.vgmpf.com/Wiki/index.php/Maniac_Mansion_(C64)",
    "VGMPF — Aric Wilmunder (SCUMM sound driver lineage): https://www.vgmpf.com/Wiki/index.php?title=Aric_Wilmunder",
    "Lemon64 — PHM Pegasus (musician credit): https://www.lemon64.com/game/phm-pegasus",
    "Wikipedia — PHM Pegasus: search result, Lucasfilm Games/Electronic Arts publication confirmed",
    "Existing KB card: knowledge/players/chris-grigg.md (the later, Epyx-era SPL card this research directly precedes and cross-references)",
    "Existing KB card: knowledge/players/dave-warhol.md (shared LucasArts catalog overlap, not a driver link)",
    "Local dataset: 3 files tagged Chris_Grigg_2, 1 composer (see knowledge/COVERAGE.md)",
    "Own disassembly/reassembly/trace pass, 2026-08-01: SIDdecompiler 0.8 + 64tass 1.60 + sidm2-sid-trace, on all 3 HVSC MUSICIANS/G/Grigg_Chris Chris_Grigg_2-tagged files"
  ]
}
```

## Overview

The `Chris_Grigg_2` tag is composer-tool-builder Chris Grigg's EARLIER
driver, from his Lucasfilm Games era — the Randy Farmer/Chris Grigg
sound driver co-designed for 'Habitat,' later adapted by Aric Wilmunder
into early SCUMM's own music engine, used on 'Maniac Mansion.' A genuinely
distinct, earlier chapter from his already-carded [[chris-grigg]] Epyx
SPL tool. Player-ID-fingerprinted across 3 files, all by Grigg.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones are now the **full
disassemble/byte-diff/trace-diff verification** (all 3 files, see
Verification) and the two structural findings that came out of it:
Habitat is **page-relocatable only** (a deliberate low-byte-arithmetic
trick, not a bug), and Maniac_Mansion hides a **large runtime-only code
region** beyond its own file that blocks address relocation (worked
around with a zero-page-relocation control instead). Also still notable
from the original research pass: the **SCUMM engine lineage** (this
driver's code history runs directly from Habitat's own sound driver into
the music engine used on Maniac Mansion), this card **filling a
documented gap** in the existing [[chris-grigg]] card's own biography,
and a publisher correction on 'PHM Pegasus' (Lucasfilm Games/EA, not
MicroProse).

## Disassembly notes

No published source (not in the realdmx RE repo, no STIL note). An
original disassembly of all 3 tagged files now exists (2026-08-01, this
project's own pass) — see Verification. Recipe that worked, first try, no
hand-patching, on every file:

```
SIDdecompiler.exe <file>.sid -o<f>.asm -a<DECIMAL of the PSID load address> -z -d -c -r -v1
64tass.exe -a --cbm-prg -o <f>.prg <f>.asm
```

Relocation bases used for the non-tautological controls: Habitat
`-a19625` ($4ca9, load+$1000, page-aligned), PHM_Pegasus `-a33024`
($8100, load-$4000, page-aligned), Maniac_Mansion `-a12928` ($3280,
i.e. NATIVE base) with `-Z64` (zero-page relocation only) — address
relocation was not usable for Maniac_Mansion, see quirks. Code fraction
is healthy on all 3 (Habitat: 287 instruction lines / 200 `.byte` lines;
PHM_Pegasus: 590/391; Maniac_Mansion: 1980/3182 — the higher `.byte`
share there is the runtime-extended region's padding, not
lesson_learned-65's pass-through case), so these are real disassemblies.

## Verification

**`status: verified` (2026-08-01) — full disassemble → reassemble →
byte-diff → trace-diff pass on all 3 tagged HVSC files, plus a
non-tautological relocation control for each.**

Byte-diff of the reassembled payload against the original PSID payload
(native base, tautological per lesson_learned 63 — reported for
completeness, the real evidence is the relocation control below):

| File | load / init / play | subtunes | compared | native match |
|---|---|---|---|---|
| Habitat.sid | $3ca9 / $4010 / $3cb8 | 2 | 1874 of 1874 | **100.0000%** |
| Maniac_Mansion.sid | $3280 / $5300 / $4700 | 2 | 10062 of 10062 | **100.0000%** |
| PHM_Pegasus.sid | $c100 / $c100 / $c10d | 1 | 3178 of 3178 | **100.0000%** |

Non-tautological relocation control, `(frame, register, old_val,
new_val)` tuples compared with the cycle column stripped:

- **Habitat** → page-aligned base $4ca9 (delta +$1000): 136 of 1874 bytes
  changed (7.3%), **0 divergences** over 527 writes (subtune 0) + 58
  writes (subtune 1), 200 frames each. A NON-page-aligned control (delta
  +$123, 266/1874 bytes changed) genuinely DIVERGED from frame 0 (527 vs
  1161 writes on subtune 0) — traced to a real player-design page-lock,
  not a disassembly defect (see quirks).
- **Maniac_Mansion** → zero-page relocation `-Z64` (address relocation
  blocked, see quirks): 68 of 10062 bytes changed (0.68%), **0
  divergences** over 955 writes (subtune 0) + 119 writes (subtune 1), 150
  frames each.
- **PHM_Pegasus** → page-aligned base $8100 (delta -$4000): 263 of 3178
  bytes changed (8.3%), **0 divergences** over 748 writes, 150 frames.

**Not closed:** the song data format itself (order list, patterns,
wavetable, effects encoding all remain `TODO`) and Maniac_Mansion's
runtime-extended code region beyond its own file (~$59d0-$9de1, see
quirks) were not decoded. Best next lead for the data format: Habitat is
the tractable file (2 subtunes, 1874 bytes, very light zero-page, engine
base = load address $3ca9) — the per-voice state block sits at
`l40a4-l40f1` (indexed 0-2 by X) and the instrument-definition
pointer/bitmask scheme is sketched in `memory.layout`. Best next lead for
Maniac_Mansion's runtime region: a lesson_learned-88-style synthetic
PSID image with the (as-yet-unlocated) copy/decode loop pre-applied,
which would let SIDdecompiler actually disassemble that ~17KB block
instead of leaving it as opaque padding.

Prior pass's figure of "120 register writes / 50 frames, 0 filter
writes" for Habitat is consistent with what was measured here (527
writes / 200 frames on subtune 0, still 0 filter writes — the 50-frame
sample was simply a shorter window of the same trace).

## Sources

See the `sources` array — VGMPF (3 pages), Wikipedia (2 pages), Lemon64,
the related chris-grigg and dave-warhol cards, and this project's own
2026-08-01 disassemble/reassemble/trace-diff pass (SIDdecompiler 0.8 +
64tass 1.60 + sidm2-sid-trace) on all 3 HVSC MUSICIANS/G/Grigg_Chris
Chris_Grigg_2-tagged files.
