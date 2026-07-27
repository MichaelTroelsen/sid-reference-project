# Matt Furniss (Krisalis/Teque driver)

```json
{
  "id": "matt-furniss",
  "name": "Matt Furniss (Krisalis/Teque driver)",
  "aliases": ["Matt_Furniss"],
  "authors": ["Shaun Hollingworth (coder)", "Matt Furniss (musician)"],
  "released": "1989-1991 (Teque Software Development / Krisalis era)",
  "status": "verified",
  "platform": "A driver used to play back musician Matt Furniss's compositions on the C64 — CONFIRMED, in Furniss's own words, to be CODED BY SHAUN HOLLINGWORTH, not Furniss himself, since Furniss 'didn't know programming.' Furniss composed on Amiga/Atari ST tools (Pro24 on an Atari Mega ST) and Hollingworth's driver played the result back on C64. Used at Teque Software Development (whose in-house label Krisalis became the studio's name in 1991). Player-ID-fingerprinted across 6 files, all by Furniss.",
  "csdb_release": null,

  "memory": { "load_address": "SIDdecompiler access map Start: $b060 (workspace). Code load: $f2ca. PSID header load: 0 (from C64 data = $f2ca-$ffdc, 3347 bytes). End: $ff6c.", "zero_page": "$fb-$fe (indirection pointer for init copy loop, also accessed by main player).", "layout": "Low workspace at $b040-$b2ff (runtime state, ~2.7KB). Code and data at $f2ca-$ff6c. Init copies 8 pages of data from song tables to workspace." },
  "entry": { "init": "$f2ca. Sets up $fb-$fe pointer, copies 8 pages from song data to $b060-$bff, selects subtune from table at $f2fe.", "play": "$f2f6. Banks in RAM ($01=$35), calls main player loop at $b0cc, RTS." },
  "speed": "TODO (CIA/NMI-based, not analyzed — no $dc04/$dc05 writes in 50-frame trace, so main player likely runs per-IRQ).",
  "data_format": { "order_list": "TODO (likely within $f300-$f36b data tables)", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "No filter writes observed (confirmed: 0 in 50-frame trace)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CODER IDENTITY CONFIRMED IN A PRIMARY SOURCE, Furniss's own words: 'Shaun wrote most of the sound engines I used in the early years' (Sega-16 interview) — corroborated by VGMPF: 'Since Furniss didn't know programming, Hollingworth coded the sound drivers for his games.' This means the composer-name tag ('Matt_Furniss') is a MUSICIAN signature, not the actual driver author — same important distinction already established on several other tags in this KB (e.g. tools attributed by composer name that were actually coded by a labelmate).",
    "FURNISS NEVER OWNED A C64 HIMSELF — he composed on Amiga/Atari ST tools (specifically Pro24 by Steinberg, on an Atari Mega ST) and his tunes were ported/played back on C64 via Hollingworth's driver. This is a distinctive, sourced production workflow worth preserving: unlike most composers in this KB, the C64 was never his own composing platform at all.",
    "EMPLOYER RECONCILED ACROSS TWO SLIGHTLY DIFFERING SOURCES: hired 1989 by Teque Software Development (founded 1987 by Tony Kavanagh, Peter Harrap, Shaun Hollingworth); Teque's in-house label 'Krisalis' became the company's own official name in 1991 — this reconciles VGMPF's phrasing ('hired by Krisalis 1989') with Furniss's own account of his first job being at 'Teque,' first project Laser Squad (Amiga).",
    "20 CONFIRMED C64 GAME CREDITS (1989-1992) per Lemon64's own individual list, independently roughly matched by CSDb's own 18-result search for the surname: Badlands (the traced file, 1990 Domark, Atari Games arcade conversion), Castle Master, Castle Master II, Chase HQ, Cyberball, Escape from the Planet of the Robot Monsters, Jahangir Khan World Championship Squash (1991, Krisalis, multi-platform), KLAX, Manchester United (both versions), Passing Shot, S.T.U.N. Runner, Scramble Spirits, Shadow Warriors, The Shoe People, Skull and Crossbones, Space Harrier II, The Spy Who Loved Me, Subbuteo, Toobin'.",
    "THE GREMLIN GRAPHICS / BEN DAGLISH CONNECTION FROM [[ben-daglish]]'s CARD IS CONFIRMED BUT REFINED, NOT TIGHTENED: per VGMPF, Furniss started as a Gremlin Graphics PLAYTESTER (he frequented the 'Just Micro' shop near/above Gremlin's office) and met Ben Daglish, his favorite composer, there — but Furniss was NEVER a Gremlin in-house composer; his actual composing career was entirely at Teque/Krisalis. Given that Furniss's own C64 output runs through Hollingworth's Krisalis/Teque driver rather than a self-written one, the research explicitly concludes the 'Matt_Furniss' tag and the 8-file 'Ben_Daglish/Gremlin' tag overlap noted on Daglish's own card are LIKELY DIFFERENT CODE ENTIRELY (Hollingworth's engine vs. Daglish's own Crowther-derived compiler) — the existing Daglish-card caution ('plausible reuse, not confirmed') should stay as-is, not be tightened toward a confirmed shared-routine claim.",
    "A CROSS-PLAYER HALLUCINATION TRAP WAS FOUND AND RULED OUT: CSDb scener id=13681, handle 'Matt' (Compunet ID 'FP1'), is a DIFFERENT, unrelated mid-1980s demoscene musician with 2023-dated re-releases and no groups — NOT Matt Furniss, and must not be cited as his scener profile. No trustworthy CSDb scener page for the real Matt Furniss was found.",
    "Birth details ('6 Mar 1973, Sheffield' per VGMPF) are single-sourced and NOT independently cross-verified — flagged as unconfirmed, not stated as settled fact.",
    "Not confirmed in SIDId (no entry for this tag). No other known relationship found to any composer/tool already in this KB beyond the Daglish/Gremlin connection discussed above (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Furniss, Matt - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Sega-16 — Matt Furniss interview (his own quote: 'Shaun wrote most of the sound engines I used in the early years'): https://www.sega-16.com/2010/04/interview-matt-furniss/",
    "VGMPF — Matt Furniss (Hollingworth coding confirmation, Pro24/Atari Mega ST composing workflow, Gremlin playtester origin story, birth details): https://www.vgmpf.com/Wiki/index.php/Matt_Furniss",
    "Wikipedia — Krisalis Software (Teque founding, 1987, renamed 1991): https://en.wikipedia.org/wiki/Krisalis_Software",
    "Lemon64 — Badlands (full credits, traced file): https://www.lemon64.com/game/badlands",
    "Lemon64 — Matt Furniss game list (20 titles): https://www.lemon64.com/games/list.php?list_individual=matt-furniss",
    "CSDb search — Furniss (18 SID matches, 1989-1991): https://csdb.dk/search/?seinsel=all&search=Furniss",
    "CSDb scener id=13681 ('Matt'/'FP1') — explicitly a DIFFERENT, unrelated person, not to be cited as Furniss's profile: https://csdb.dk/scener/?id=13681",
    "Existing KB card: knowledge/players/ben-daglish.md (the 8-file Ben_Daglish/Gremlin overlap this card's research refines)",
    "Local dataset: 6 files tagged Matt_Furniss, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Matt_Furniss` tag identifies compositions by musician Matt Furniss,
played back on C64 via a driver CODED BY SHAUN HOLLINGWORTH (Furniss
himself never learned programming) at Teque Software Development/
Krisalis. Furniss composed on Amiga/Atari ST tools, not the C64 itself.
Player-ID-fingerprinted across 6 files, all by Furniss.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **primary-source
confirmation that Hollingworth, not Furniss, coded the driver**; the
**cross-platform composing workflow** (Pro24 on Atari ST, never a C64
composing tool); and a **refinement, not a tightening**, of the existing
Ben_Daglish/Gremlin card's tag-overlap caution — new evidence suggests
different underlying code, not a confirmed shared routine.

## Disassembly notes

Badlands.sid (1990, Domark/Atari Games, HVSC MUSICIANS/F/Furniss_Matt/) was
disassembled with SIDdecompiler (relocated to $b060 per -v2 Start address,
not the PSID header's $f2ca load — an INIT-time workspace that sits below
the code), reassembled with 64tass, byte-diffed, patched, and trace-diffed
against the original.

**97.8% byte match pre-patch (3165/3235).** 70 bytes in 25 contiguous ranges
needed cold-start patching — all are INIT-modified data tables and runtime
counters, not code differences. Post-patch: **100.0% byte match (3235/3235)
and register-write-exact trace-diff (245/245 writes, 50 frames, frame/cycle
identical).**

The driver structure: a main player loop at $b0cc (called from play at
$f2f6, which banks in $01=$35). Init at $f2ca sets up ($fb)-($fe) as an
indirection pointer, copies 8 pages ($0800 bytes) of song data from table
at $f304-$f36b down to workspace at $b060, then selects a subtune from a
3-byte table at $f2fe. The player writes pulse width and frequency for all
three oscillators (no filter writes observed). OSC1 acts as melody lead
(changing freq+AD at measure boundaries), OSC2 and OSC3 as pulse-width-
modulated accompaniment.

The 70-byte patch breaks down as:
- $f304-$f36b (52 bytes): song data tables (orderlist, pattern pointers,
  instrument data) — initialized/sorted by INIT
- $f58d-$f593 (4 bytes): runtime counters (song position, pattern index)
- $f664, $f684-$f691, $f786-$f787, $f89a (14 bytes): scattered data bytes,
  also INIT-modified in-place

Artifacts at `scratchpad/matt-furniss/`: `badlands_v2.asm` (SIDdecompiler
output), `badlands_patched.asm` (with documented patch comments),
`badlands_patched.prg` (patched binary, trace-exact), `PATCHES.txt` (manifest).

No SIDId entry exists for this player; no known relationship to other
players confirmed beyond the Ben_Daglish/Gremlin tag-overlap already
documented on the Daglish card.

## Verification

**Playback + entry points confirmed (2026-07-14) → trace-diff exact
(2026-07-25) — `status: verified`.** Full pipeline: SIDdecompiler ($b060
relocation, -v2 address) → 64tass reassembly ($b060-$ff6c, 20237 bytes,
clean) → 70-byte cold-start patch → byte-diff 100.0% → trace-diff
245/245 writes exact over 50 frames (frame/cycle/register/value identical).

The relocation address ($b060) came from SIDdecompiler's -v2 "Start:"
address, not the PSID header's $f2ca load. The gap ($b060-$f2c9) is
INIT-time workspace below the code, not present in the original .sid
file — a clean example of gotcha 40 (the -v2 Start-vs-header-load trap).

## Sources

See the `sources` array — HVSC Musicians.txt, Sega-16, VGMPF, Wikipedia,
Lemon64 (2 pages), CSDb (2 entries), and the related ben-daglish card.
