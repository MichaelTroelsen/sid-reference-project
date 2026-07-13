# Georg Brandt (player routine)

```json
{
  "id": "georg-brandt",
  "name": "Georg Brandt (player routine)",
  "aliases": ["Georg_Brandt"],
  "authors": ["Georg Brandt"],
  "released": "1986-1993 (Magic Bytes / Rainbow Arts era)",
  "status": "in-progress",
  "platform": "German composer-coder Georg Brandt's own hand-coded 6502 music engine (3 SID channels plus an optional drum/sample channel), used across his Magic Bytes/Rainbow Arts work. A distinct sub-tag, 'Georg_Brandt/Rhythm_CS', likely corresponds to a separate named tool he also authored ('RCS' / Rhythm Construction Set, 1986) — not covered by this card. Player-ID-fingerprinted across 12 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Mental Warriors): load $8000 (init $80c9, play $8062).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Piano-roll style per his own account (see quirks) — notes stored in memory and edited with a raw hex editor, no dedicated GUI tool."
  },
  "entry": {
    "init": "Sample trace: $80c9.",
    "play": "Sample trace: $8062 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Georg Brandt (b. 12 March 1969, Essen-Kupferdreh, West Germany) — got a VIC-20 at 13, learned BASIC/6502 assembly, moved to C64 ~18 months later; first 4 tunes published in 64'er magazine, 1986. Worked for Magic Bytes (composed music, arranged the company jingle) and Rainbow Arts (audio development). Later studied electrical engineering at Ruhr-Universität Bochum.",
    "CONFIRMED SELF-WRITTEN ENGINE, first-party quote: 'The notes were stored in memory in a piano roll style. A simple memory hex editor was sufficient to view and create the song data.' — a notably primitive/DIY composing method compared to contemporaries who used dedicated GUI editors, worth citing verbatim.",
    "BOTH CODER AND MUSICIAN on his own releases — not a musician-only scener: sole Code+Music credit on Mindbender (1990, C64 game; graphics by Veto) and Disk-Demon (1987, a C64 tool). No CSDb group membership at all — solo/freelance his whole career.",
    "'RHYTHM_CS' SUB-TAG LIKELY EXPLAINED (high-confidence, not 100% verified): CSDb lists a 1986 release 'Rhythm Construction Set [german]', database short name 'RCS', type Tool, Code+Music both by Brandt, no group — strongly suggesting 'Georg_Brandt/Rhythm_CS' is this same named editor/tool, authored by him but distinct from the plain 'Georg_Brandt' routine covered by this card. No functional description of RCS was found, so its internal relationship to this routine (shared code? independent?) is unconfirmed.",
    "THE 2 CHRIS_HUELSBECK-TAGGED FILES in his own folder are NOT explained by any external source — no connection to Chris Huelsbeck (already carded in this KB as [[chris-huelsbeck]]) was found in any biography checked. Most plausible reading: Brandt simply used Huelsbeck's SoundMonitor editor for those 2 particular tunes, common practice in this era — but this is inferred only from the local file tags themselves, not externally confirmed. Flagged as speculative.",
    "Games/tunes confirmed: Mindbender (1990), Disk-Demon (1987), B.E.A.M. (1989, Magic Bytes), Dein ist mein ganzes Herz (1986), Mental Warriors (1986, the traced file), Mission 'Overflow' (1986), Odissea Veneziana (1986). Note: another file in his folder, Boersenfieber.sid, is an RSID with play address 0 (a self-installing/digi variant) — not used for the trace, but present in his output.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Georg Brandt entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — his German Magic Bytes/Rainbow Arts/64'er circle doesn't overlap the mostly-British/American names in this KB; none found)."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Brandt, Georg - GERMANY')",
    "CSDb scener (id=10962, country Germany, function Musician, no group): https://csdb.dk/scener/?id=10962",
    "VGMPF biography (birth, education, Magic Bytes/Rainbow Arts, own-words engine description): https://www.vgmpf.com/Wiki/index.php/Georg_Brandt",
    "CSDb release — Mindbender (1990, Code+Music by Brandt): https://csdb.dk/release/?id=16769",
    "CSDb release — Disk-Demon (1987, Code by Brandt): https://csdb.dk/release/?id=135329",
    "CSDb release — Rhythm Construction Set / 'RCS' (1986, Code+Music by Brandt — likely source of the Rhythm_CS sub-tag): https://csdb.dk/release/?id=134813",
    "CSDb SID — B.E.A.M. (1989, Magic Bytes): https://csdb.dk/sid/?id=4107",
    "Local dataset: 12 files tagged Georg_Brandt, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Georg_Brandt` tag is German composer-coder Georg Brandt's own
hand-coded music engine, used across his Magic Bytes and Rainbow Arts work.
Player-ID-fingerprinted across 12 files, all his own — confirmed
self-written via his own description of a deliberately primitive
piano-roll-plus-hex-editor composing method, no dedicated GUI tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **first-party quote**
describing his DIY composing method; **both coder and musician** on his own
releases (Mindbender, Disk-Demon); and the **'Rhythm_CS' sub-tag**, likely
his own separately named tool ('RCS', 1986) rather than a third party's.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Georg_Brandt`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Georg_Brandt` `.sid` (Mental Warriors): load `$8000`,
init `$80c9`, play `$8062`, **233 register writes / 50 frames** (1 filter
write). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (scener + 3 releases),
and VGMPF.
