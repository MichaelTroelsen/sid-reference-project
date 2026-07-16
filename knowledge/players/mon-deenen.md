# MoN/Deenen

<!--
  Player-ID / SIDId tag: "MoN/Deenen" — Charles Deenen's in-house Maniacs of
  Noise music driver, distinct from the later, GUI-wrapped "MoN/FutureComposer".
-->

```json
{
  "id": "mon-deenen",
  "name": "MoN/Deenen (Maniacs of Noise music driver)",
  "aliases": ["MoN/Deenen"],
  "authors": ["Charles Deenen"],
  "released": "TODO: exact year of first version not documented; VGMPF dates Deenen writing 'a C64 sound-driver' to circa 1985, in use as the house driver of Maniacs of Noise from the group's 1987 founding",
  "status": "stub",
  "platform": "Native C64 in-house replay driver, hand-coded in 6502 assembly (Turbo Assembler) — NOT a GUI editor. Composers arranged music by typing hexadecimal note/label data directly into the driver's own assembly source and reassembling it.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO: no pattern/table format in the usual tracker sense — data was hex/label constants embedded directly in the driver's asm source per tune (per VGMPF)",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["future-composer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is NOT an editor/tracker — it is Charles Deenen's own hand-written replay driver ('Musicfile'), coded in Turbo Assembler. VGMPF: 'Deenen, Donné, Tel and Ouwehand arranged by typing hexadecimal numbers and labels into the driver's source code.' There is no GUI, order-list editor, or pattern grid in the conventional sense — every tune is a hand-assembled variant of the driver source.",
    "Supported 4-bit sample ('digi') playback per VGMPF's Maniacs of Noise article: 'Deenen sent Bjerregaard a disk with Turbo Ass, his music driver, and some 4-bit samples.'",
    "DO NOT CONFLATE with 'MoN/FutureComposer' (see future-composer.md) — that is a later, separate, GUI-wrapped tool (editor by Juha Granberg/Finnish Gold) built around a Maniacs-of-Noise player routine. SIDId's own 'MoN/FutureComposer' entry comment ('Editor made for the player of /MUSICIANS/T/Tel_Jeroen/Noisy_Pillars_tune_1.sid') ties that editor's origin to a Jeroen Tel tune from the same MoN driver lineage this card covers — evidence for a routine relationship, not proof of byte-identical code, hence the conservative `shares_routine_with` edge rather than `derives_from`.",
    "DO NOT CONFLATE with 'MoN/Bjerregaard' (Johannes Bjerregaard's own, separate driver) either — VGMPF states plainly Bjerregaard was offered Deenen's driver and declined: 'Deenen sent Bjerregaard a disk with Turbo Ass, his music driver, and some 4-bit samples, but Bjerregaard preferred his own driver. Petersen also used his own.' Same source group (Maniacs of Noise circle), three genuinely distinct player routines/tags.",
    "After Charles Deenen relocated to the USA around late 1990/1991, VGMPF states 'Tel programmed himself' — implying Jeroen Tel moved to his own driver after that point, so this tag's usage window is effectively bounded to Deenen's Netherlands-era MoN tenure (1987-1990/91).",
    "No dedicated CSDb release exists for the driver itself — Charles Deenen's CSDb scener page (id 1040) lists his tool credits as 'Future Composer V3.1' (release 7775), 'MON SFX Editor V1.00' (release 7936), and 'Sound Machine V1.1' (release 122536), but nothing titled 'Musicfile' or matching this Player-ID tag. Unlike Future Composer, this was never packaged/released as a standalone product.",
    "126 files across 13 composers in this collection (rank 6 by file count per knowledge/COVERAGE.md). Composer concentration: Jeroen Tel 64 files (51%), Charles Deenen 17 (13%), Reyn Ouwehand 16 (13%), Francois Prijt 8, JVD 7, remaining 8 composers 1-3 each. This matches VGMPF's account of who directly used the driver (Deenen, Tel, Ouwehand, and 'Donné') — a genuinely shared in-house commercial tool among a small team, not one person's personal routine, but also never a publicly released/adopted tool the way Future Composer was.",
    "SIDId's 'MoN/Deenen' entry has only an `author` field — no `released` or `reference` (CSDb release id), unlike most SIDId entries — consistent with there being no formal release to point at."
  ],
  "sources": [
    "data/sidid.json byTag['MoN/Deenen'] — author: Charles Deenen (no release/reference field)",
    "data/sidid.json byTag['MoN/FutureComposer'] — comment tying the FutureComposer editor's origin to /MUSICIANS/T/Tel_Jeroen/Noisy_Pillars_tune_1.sid",
    "knowledge/COVERAGE.md — rank 6, 126 files tagged 'MoN/Deenen'",
    "Local aggregate over data/composers/*.json: 126 files / 13 composers (Jeroen Tel 64, Charles Deenen 17, Reyn Ouwehand 16, Francois Prijt 8, JVD 7, Barry Leitch 2, Hein Holt 2, Joachim Wijnhoven 3, No-XS 2, Trugoy 2, DRAX 1, Marc Francois 1, Yavin 1)",
    "VGMPF, Charles Deenen — https://vgmpf.com/Wiki/index.php/Charles_Deenen (driver origin c.1985, MoN formation)",
    "VGMPF, Maniacs of Noise — https://vgmpf.com/Wiki/index.php/Maniacs_of_Noise ('Musicfile' driver name, Turbo Ass authorship, hex-in-source arranging method, 4-bit samples, Bjerregaard/Petersen declining it, Tel taking over after Deenen left)",
    "CSDb scener page, Charles Deenen (id 1040) — https://csdb.dk/scener/?id=1040 (tool credits checked: no standalone 'Musicfile'/driver release found)",
    "CSDb group page, Maniacs of Noise (id 448) — https://csdb.dk/group/?id=448",
    "data/composers/charles-deenen.json, data/composers/jeroen-tel.json, data/composers/reyn-ouwehand.json — per-file player tag evidence"
  ]
}
```

## Overview

MoN/Deenen is the Player-ID tag for Charles Deenen's original Commodore 64
music replay driver — internally called "Musicfile" per VGMPF — written in
Turbo Assembler and used as the house sound engine of **Maniacs of Noise**
(MoN), the Dutch game-audio company Deenen co-founded with Jeroen Tel in 1987.
Unlike a conventional tracker, there was no separate GUI editor: composers
(Deenen, Tel, Reyn Ouwehand, and "Donné" per VGMPF) arranged tunes by typing
hexadecimal note/label data directly into the driver's own assembly source
and reassembling it. It is closely related to, but must not be conflated
with, two other Player-ID tags: **MoN/FutureComposer** (a later, GUI-wrapped
tool built by Juha Granberg's Finnish Gold circle around a MoN player
routine — see `future-composer.md`) and **MoN/Bjerregaard** (Johannes
Bjerregaard's own separate driver, which he used instead of Deenen's after
being offered it). In this collection it accounts for 126 files across 13
composers, dominated by Jeroen Tel (51%) — evidence of a real shared
commercial tool within a small team, not a single composer's personal
routine, but also never released/documented as a standalone product the way
Future Composer was.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: this is a **hand-coded
asm driver edited by typing hex directly into its own source**, not a
tracker with a data format in the usual sense; and it must be kept
**distinct from MoN/FutureComposer and MoN/Bjerregaard**, two other
Player-ID tags that sit in the same Maniacs-of-Noise orbit but are
genuinely separate routines per VGMPF's own account.

## Disassembly notes

None done here. No public disassembly, source dump, or format writeup for
this driver was found (CSDb has no standalone release for it, and the "typed
hex into source" workflow means there may never have been a distributable
data format to document in the first place — each tune is effectively its
own hand-assembled build of the driver). A future pass would need to
disassemble a representative `.sid` from this tag (e.g. a Charles Deenen or
Jeroen Tel file) and trace it through `sidm2-siddump` to get real
load-address/init/play/ZP facts.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
recorded, sourced from the cached SIDId entry, this project's local composer
data, and VGMPF's narrative history of Maniacs of Noise. No runtime fact
(memory map, entry points, speed model, data format) has been confirmed by
disassembly; all are honestly `TODO`.

## Sources

See the `sources` array — SIDId's `MoN/Deenen` and `MoN/FutureComposer`
entries, `knowledge/COVERAGE.md`, local `data/composers/*.json` aggregation,
VGMPF's Charles Deenen and Maniacs of Noise wiki pages, and Charles Deenen's
CSDb scener page (checked for, and finding no, a standalone driver release).
