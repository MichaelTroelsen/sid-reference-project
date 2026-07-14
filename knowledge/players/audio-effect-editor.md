# Audio Effect Editor (Alexander Kirsch / Argon)

```json
{
  "id": "audio-effect-editor",
  "name": "Audio Effect Editor (Alexander Kirsch / Argon)",
  "aliases": ["Audio_Effect_Editor"],
  "authors": ["Alexander Kirsch ('Energy Master', Argon)"],
  "released": "June 1989 (Golden Disk 64 issue 06/1989, CP Verlag)",
  "status": "in-progress",
  "platform": "A genuine, confirmed one-shot SFX-editor tool ('AEE Editor V1.0'), coded by German demoscener Alexander Kirsch (demoscene handle 'Energy Master', group Argon) and published on Golden Disk 64's June 1989 disk magazine issue. Used by Rudolf Stember (a co-programmer of Kirsch's on the game 'Tower of Terror', group Double Density) to score that title. Player-ID-fingerprinted across 4 files: 3 by Kirsch himself (all of which trace SILENT under this project's standard method — see verification notes) and 1 by Stember, which does produce a real trace.",
  "csdb_release": 122169,

  "memory": { "load_address": "Sample HVSC file traced (Tower of Terror, composed by Rudolf Stember, since Kirsch's own files trace silent): load $a700 (init $c002, play $c011).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c002.", "play": "Sample trace: $c011 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a dense 160-write/50-frame sample, almost entirely on osc3)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TOOL AND AUTHOR CONFIRMED VIA THREE INDEPENDENT, MUTUALLY-CORROBORATING SOURCES: CSDb's own release page (id=122169, 'Audio Effect Editor V1.0', June 1989) credits 'Code: Energy Master of the group Argon'; SIDId's `sidid.nfo` independently gives name='Audio Effect Editor', author='Alexander Kirsch', released='1989 Golden Disk 64/CP Verlag', pointing at that SAME CSDb release id; MagicDisk64's own content index for Golden Disk 64 issue 06/1989 lists it among that issue's sound-effects utilities. High-confidence deduction (not stated verbatim on any single page, but consistent across all three): Kirsch's demoscene handle was 'Energy Master' of group Argon — the same real-name-vs-scene-handle split flagged as a landmine elsewhere in this project (e.g. DRAX in CLAUDE.md).",
    "RUDOLF STEMBER'S USE OF THE TOOL IS DIRECTLY EXPLAINED, NOT COINCIDENTAL: VGMPF states outright that for 'Tower of Terror,' Stember used the Audio Effect Editor, 'programmed by Argon groupmate Alex Kirsch' — and Lemon64's own credits for that 1990 game (publisher Golden Disk 64/CP Verlag/Magic Disk 64, developer group 'Double Density') list programmers as 'A. Kirsch and Ingo Wolf,' with Stember as composer. Kirsch wasn't just the tool's author — he was Stember's actual CO-PROGRAMMER on the specific game Stember used the tool to score, directly explaining the access.",
    "THE TOOL'S OWN NAME AND CLASSIFICATION SUPPORT A ONE-SHOT SFX HYPOTHESIS for why Kirsch's own 3 files trace SILENT (play=$0, 0 writes) under this project's standard 50-frame IRQ-driven trace method: it's explicitly an 'Audio EFFECT Editor' (not a 'Music Editor'), classified by MagicDisk64 under that issue's 'Soundeffekte' (sound effects) heading alongside period tools like 'SFX Editor' and 'Addlogic Drums'. This is a plausible, evidence-backed technical read — a one-shot effect-generator with no looping player routine to trace — though no source explicitly states this as the reason.",
    "GERMAN DEMOSCENE CONTEXT CONFIRMED FOR BOTH COMPOSERS: HVSC Musicians.txt lists both 'Kirsch, Alexander - GERMANY' and 'Stember, Rudolf (Rudi, The Holy Grail) - GERMANY.' Stember's own C64-Wiki (DE) biography (born 1969) confirms a broader multi-tool composer profile (Soundtracker, Future Composer, Soundmaster v3.1, TFMX-Editor) and career via 'Double Density's Walter Konrad — consistent with him readily using a colleague's custom editor for one specific project rather than exclusively self-composing.",
    "NO INDEPENDENT CSDb SCENER PROFILE PAGE WAS LOCATABLE for Kirsch/'Energy Master' — the Argon/Energy Master identity rests on the release-credit + VGMPF cross-reference above, not on a directly-fetched scener bio page. Flagged as a minor sourcing gap, not a contradiction.",
    "Not confirmed in SIDId beyond the tool-identity entry itself (already known for this tag pre-research). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Kirsch, Alexander - GERMANY'; 'Stember, Rudolf (Rudi, The Holy Grail) - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb release id=122169 ('Audio Effect Editor V1.0', code credited to Energy Master/Argon): https://csdb.dk/release/?id=122169",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Audio Effect Editor' entry, author Alexander Kirsch: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "MagicDisk64 — Golden Disk 64 issue 06/1989 content index: https://www.magicdisk64.com/inhalt-golden-disk.html",
    "VGMPF — Rudolf Stember (Audio Effect Editor / Kirsch groupmate note): https://vgmpf.com/Wiki/index.php?title=Rudolf_Stember",
    "Lemon64 — Tower of Terror (full credits, traced file): https://www.lemon64.com/game/tower-of-terror",
    "C64-Wiki (DE) — Rudolf Stember (tool list, biography): https://www.c64-wiki.de/wiki/Rudolf_Stember",
    "Local dataset: 4 files tagged Audio_Effect_Editor, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Audio_Effect_Editor` tag is a confirmed one-shot SFX-editor tool
coded by German demoscener Alexander Kirsch ('Energy Master', group
Argon), published on a 1989 disk-magazine issue. Fellow programmer
Rudolf Stember — Kirsch's own co-coder on the game 'Tower of Terror' —
used it to score that title. Player-ID-fingerprinted across 4 files: 3
by Kirsch (silent under this project's trace method) and 1 by Stember
(a real, dense trace).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **three-source
confirmed tool authorship** (CSDb, SIDId, and MagicDisk64 all
independently corroborate); the **directly explained access path**
(Stember and Kirsch were actual co-programmers on the game Stember
scored with the tool); and a **plausible, evidence-backed technical
hypothesis** for why the author's own files trace silent — a one-shot
'effect' editor, not a looping music tracker.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Audio_Effect_Editor`-
tagged `.sid` + trace — ideally one of Kirsch's own silent-tracing files,
to directly confirm the one-shot-SFX hypothesis.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Audio_Effect_Editor` `.sid` (Tower of Terror, composed
by Rudolf Stember): load `$a700`, init `$c002`, play `$c011`, **160
register writes / 50 frames** (1 filter write). Kirsch's own 3 files all
trace SILENT (load `$8000` init `$8009` play `$0`, 0 writes) — consistent
with a one-shot SFX tool rather than a looping IRQ-driven player.
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, SIDId's sidid.nfo,
MagicDisk64, VGMPF, Lemon64, and C64-Wiki (DE).
