# John Hancock (Tiertex in-house driver, author unknown)

```json
{
  "id": "john-hancock",
  "name": "John Hancock (Tiertex in-house driver, author unknown)",
  "aliases": ["John_Hancock"],
  "authors": ["UNKNOWN — the tag names the composer, not the coder. See quirks."],
  "released": "1991-1992",
  "status": "verified",
  "platform": "Native C64. An unidentified Tiertex-era in-house routine with a hard, reproducible fingerprint (3 of 61,157 HVSC files).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file. Shape is constant: play == load+0, init == load+3.",
    "zero_page": "TODO — no disassembly performed. Not guessed.",
    "layout": "Opens with a 4-entry JMP table (4c/4c/4c/4c). NOTE this is the diagnostic difference from Mark Tait's driver, which opens JMP/JMP/BIT (4c/4c/2c) with init == load+0 and play == load+6."
  },
  "entry": {
    "init": "load+3 (all three files).",
    "play": "load+0 (all three files)."
  },
  "speed": "TODO — not determined.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE MARK TAIT RELATIONSHIP IS REAL AND IS NOW PROVEN FROM BINARY EVIDENCE, not inherited from metadata. Method: 6502 opcode-only stream (operands stripped, so relocation-proof), longest-common-run, scanned across ALL 61,157 HVSC 85 files. Cross-family noise floor = 28 ops. Results: the Hancock driver's 84-op run hits exactly 3 files (Alien_Storm, Bonanza_Bros, Die_Hard_2) AND NOTHING ELSE IN HVSC; its 277-op core hits 2 (Bonanza_Bros, Die_Hard_2); Tait's 128-op run hits 10 — 9 Tait files plus MERCS, the only non-Tait file in all of HVSC carrying it. Header shapes corroborate independently: Hancock's 3 are play==load+0 / init==load+3 / 4-entry JMP table; Tait's + Mercs are init==load+0 / play==load+6 / JMP-JMP-BIT. So: Mercs runs Tait's driver (confirmed from code, not just from VGMPF), and the three John_Hancock files run one coherent driver unique to them within all of HVSC. See [[mark-tait]].",
    "ALIEN STORM IS A LOOSER VARIANT of the same lineage — it matches the 84-op run but not the tight 277-op core that Bonanza Bros and Die Hard 2 share. Same driver family, different revision. Whether it is EARLIER or LATER could not be determined.",
    "THE TAG IS A COMPOSER-ATTRIBUTION LABEL, NOT EVIDENCE HANCOCK CODED ANYTHING. Two independent lines point to him being a driver USER: (1) on Game Gear/Master System he wrote Z80 using 'a sound driver by Donald Campbell, one of Tiertex's founders' (VGMPF); (2) Mercs — his own tune — used Tait's driver. Same pattern as [[ken-lagace]], [[jim-cuomo]] and [[silas-warner]].",
    "THE DRIVER DOES NOT TRACK THE GAME'S PROGRAMMER EITHER — a negative result worth recording, because it kills the obvious next hypothesis. PAUL COLE CODED BOTH Mercs (Tait driver) AND Die Hard 2 (Hancock driver). Michael Ager coded Alien Storm (Hancock driver). So the driver is not a coder signature. Who wrote it remains genuinely unknown — Hancock, another Tiertex coder, or Campbell.",
    "ATTRIBUTION CIRCULARITY — an important caveat on the composer credits themselves. VGMPF/Tiertex: 'Since 2008, HVSC credits four C64 game soundtracks to John Hancock. Unfortunately, they did not mention sources.' VGMPF/Die Hard 2 (C64): '(Source: HVSC since 2008. Their own source is unknown; possibly guessed from the used driver. Game lacks credits.)' All four C64 credits are UNSOURCED HVSC attributions; Tiertex rarely credited staff, and Lemon64/Gamebase64 likely inherit from HVSC (circular).",
    "COUNTER-ARGUMENT TO THE CIRCULARITY WORRY (inference, not sourced): if HVSC had guessed the composer FROM THE DRIVER, Mercs would have been credited to Tait, not Hancock. HVSC credited Mercs to Hancock DESPITE it running Tait's driver — which implies HVSC had some non-driver source. This weakens the 'purely guessed' concern but does not resolve it.",
    "TIERTEX IS THE CONSTANT, NOT THE PUBLISHER — a correction to the obvious reading. Die Hard 2 was published by GRANDSLAM, not US Gold. All four files are Tiertex-DEVELOPED conversions: Alien_Storm (1991 US Gold/Sega, coder Michael Ager, Hancock driver, 7 subtunes); Bonanza_Bros (1992 US Gold, coder unknown, Hancock driver, 6 subtunes); Die_Hard_2 (1991 Grandslam, coder Paul Cole, Hancock driver, 7 subtunes); Mercs (1991 US Gold/Capcom, coder Paul Cole, TAIT's driver, 1 subtune).",
    "THE MUSIC IS ARRANGEMENT WORK, NOT ORIGINAL COMPOSITION — STIL credits the originals: Alien Storm to Keisuke Tsukahara, Bonanza Bros to Koichi Namiki.",
    "IDENTITY: John Hancock, real name (no scene handle), ENGLISH, one of Tiertex's main composers from 1991 (VGMPF, verbatim). Professional, not a scener — DeepSID focus1: PRO, csdb_id: 0; CSDb has his 4 SIDs but no scener profile. HVSC Musicians.txt:707 is a bare 'Hancock, John' with NO country and NO group, unusually sparse; DeepSID (affiliation: Tiertex, country: England) is richer here. DeepSID's active: 1992 understates it — the files are 1991-1992.",
    "THE OBVIOUS COLLISIONS (the Declaration of Independence signatory 1737-1793; John Hancock Financial) are pure search noise and were discarded. THE REAL COLLISION RISK IS DIFFERENT AND UNRESOLVED: VGMPF puts the Tiertex-era composer and a LATER John Hancock (Awesome Developments — Archer Maclean's Mercury, LEGO Island 2, Mercury Meltdown, to 2012) in ONE gameography but establishes no narrative link between the two phases. A separate blurb claims he 'retired... now focuses on piano tutoring', which CONTRADICTS the reported 2023 death. So the later-career merge is UNVERIFIED — possibly two people. Do not repeat the merged gameography as fact.",
    "DEATH IS SINGLE-SOURCED AND CONTRADICTED: VGMPF says he 'passed away in early 2023' (2023-02-??). No second source, and the same site's 'retired, now piano tutoring' blurb conflicts. Record as unconfirmed.",
    "Confirmed absent from SIDId: zero hits for 'hancock' AND for 'tait' in deepsid_dl/sidid.nfo. This is not a named or public editor."
  ],
  "sources": [
    "VGMPF — John Hancock: https://vgmpf.com/Wiki/index.php/John_Hancock",
    "VGMPF — Tiertex (the actual source of the Mercs-in-Tait's-driver claim, and of the Donald Campbell driver detail): https://www.vgmpf.com/Wiki/index.php?title=Tiertex",
    "VGMPF — Die Hard 2: Die Harder (C64) (the HVSC-attribution caveat): https://www.vgmpf.com/Wiki/index.php?title=Die_Hard_2:_Die_Harder_(C64)",
    "CSDb SID entries: Alien Storm https://csdb.dk/sid/?id=1425 · Bonanza Bros https://csdb.dk/sid/?id=1201 · Die Hard 2 https://csdb.dk/sid/?id=1325 · Mercs https://csdb.dk/sid/?id=1638",
    "Lemon64: https://www.lemon64.com/game/alien-storm · https://www.lemon64.com/game/bonanza-bros · https://www.lemon64.com/game/mercs · https://www.lemon64.com/game/die-hard-2",
    "HVSC Musicians.txt:707; STIL.txt:47426+ (original-composer credits); local HVSC 85 binaries at MUSICIANS/H/Hancock_John/ + opcode-stream scan across all 61,157 files",
    "Local: data/composers/john-hancock.json; deepsid_dl/sidid.nfo (negative — confirmed absent)"
  ]
}
```

## Overview

`John_Hancock` is HVSC's composer label for an **unidentified in-house driver of
Tiertex**, the UK conversion house. John Hancock — English, real name, one of
Tiertex's main composers from 1991 — scored the music; **no source says he wrote
the code**, and the evidence points away from it.

The card's value is a proven relationship and a proven *non*-relationship. The
long-suspected link to [[mark-tait]] is real and now demonstrated from the
binaries rather than inherited from metadata. But the driver turns out to track
neither the composer nor the programmer.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The Tait link is proven, not asserted**: an opcode-stream scan over all
  61,157 HVSC files puts Tait's driver in exactly one non-Tait file (Mercs), and
  the Hancock driver in exactly three files and nowhere else.
- **The driver isn't a coder signature either** — Paul Cole coded one game with
  each driver. That negative result is what leaves authorship genuinely open.
- **The composer credits are themselves unsourced HVSC attributions** — with a
  decent counter-argument (see quirks) that HVSC had a non-driver source.

## Disassembly notes

No disassembly. The findings are **opcode-only stream comparison** (operands
stripped, so relocation-proof) against a measured 28-op cross-family noise floor
— a method strong enough to separate two drivers that share a publisher, an era
and a programmer.

## Verification

**Verified — `status: verified` (2026-07-22).** Disassembled with `SIDdecompiler`,
reassembled with 64tass at native load address $3340, and trace-diffed.

| File | PSID header | Byte-diff | Trace result |
|---|---|---|---|
| `Hancock_John/Bonanza_Bros.sid` (6 subtunes) | load=$3340, init=$4A60, play=$3340 | 99.31% (41/5939) | **Exact** (19/19 writes, cycle-for-cycle, 10 frames) |

The card's earlier trace pass noted init=load+3 — the verified file uses a
non-standard init-at-$4A60 convention. Entry points vary per file in this small
family (3 files). Memory map/ZP/format/effects remain TODO per the card.

Also undetermined: whether Alien Storm's variant is earlier or later; Bonanza
Bros' coder; any independent (non-HVSC) confirmation of the composer credits;
whether the 2023 death is correct; whether the post-1995 Mercury/LEGO credits are
the same person.

## Sources

See the `sources` array above.
