# Rene Romijn (unresolved driver credit)

```json
{
  "id": "rene-romijn",
  "name": "Rene Romijn (unresolved driver credit)",
  "aliases": ["Rene_Romijn"],
  "authors": ["Rene Romijn (identity unconfirmed)"],
  "released": "1989 (per the traced file's release context)",
  "status": "in-progress",
  "platform": "A player-tag naming 'Rene Romijn' — but EVERY file under this tag was actually composed by Dutch demoscener Michel de Rooij, handle 'Emotional Mozes' (Tetragon/Clash/Orion), NOT by anyone named Romijn. The tag most plausibly identifies a driver/routine (or its author) distinct from the composer, matching the same structural slot as de Rooij's OTHER files' player tags (e.g. 'DUSAT/RockMon4', 'MoN/FutureComposer/Bantam' — editor/driver names, not composer names). WHO Rene Romijn actually is could NOT be confirmed by any source checked — this card documents the tag as a genuinely open identity question, not a resolved fact.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Bangers_89, composed by Emotional Mozes): load $900 (init $900, play $903).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $900.", "play": "Sample trace: $903 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE NAME MISMATCH IS THE CENTRAL FACT OF THIS CARD, deliberately investigated rather than assumed: HVSC Musicians.txt's entry for the actual composer reads 'Emotional Mozes (de Rooij, Michel) / Tetragon - NETHERLANDS' — 'Romijn' does not appear ANYWHERE in Musicians.txt (confirmed via direct grep of the raw file, zero matches). This project's own local composer cache independently corroborates de Rooij as every file's actual author, including the traced 'Bangers_89.sid'.",
    "THE DRIVER-NOT-COMPOSER HYPOTHESIS IS SUPPORTED BY STRUCTURAL EVIDENCE, not just absence: de Rooij's OTHER files (outside this tag) carry player-tag values like 'DUSAT/RockMon4' and 'MoN/FutureComposer/Bantam' — i.e. editor/tool names occupying that exact field, not composer names. 'Rene_Romijn' sits in that identical structural slot for this specific file, strongly suggesting it names a driver/routine (or its author) rather than a second composer credit.",
    "WHO 'RENE ROMIJN' ACTUALLY IS COULD NOT BE CONFIRMED, despite an exhaustive check: no CSDb scener or group match, no match in the SIDId player index (`sidid.nfo`), no Demozoo/MobyGames/general-web match for a person of that name in any C64 or demoscene context. This is EXPLICITLY LEFT AS AN OPEN QUESTION, not guessed at — the most honest current reading is that it's a one-off driver credit typed into this SID rip's metadata (by de Rooij himself or an HVSC cataloguer) that was never formally documented as a named, attributable tool.",
    "THE ACTUAL COMPOSER (Michel de Rooij / 'Emotional Mozes', also called 'Red Mozes') IS WELL DOCUMENTED, per his own CSDb scener profile (id=13281): Netherlands, roles Coder/Graphician/Musician, member of Clash (left 03/1988), Tetragon (03/1988-09/1988), and Orion (~09/1988-01/1989) — a typical multi-role Dutch demoscener of the era, credited code+music+graphics across most of his own productions (ThunderClash, Beyond Reality, Just Like That, In God We Thrust, We Are Chillin', Prophets of Composition, Christmas Carol, Orion Intro 07, Never Scared). One additional group affiliation, 'Musicians on Duty,' appears on one release credit but could not be further corroborated — flagged as unconfirmed/single-sourced.",
    "A GENUINE, SOURCED CONNECTION TO THREE EXISTING KB COMPOSERS: the Tetragon demo 'Beyond Reality' (1 May 1988) is a multi-composer music-showcase with 7 individually-authored tunes — credits include Emotional Mozes ALONGSIDE Adam Gilmore, Fred Gray, and Rob Hubbard (plus Georg Brandt and Jeroen Tel, not currently in this KB), each contributing a SEPARATE tune to the same release. This is a shared-release credit line, not a collaboration or shared driver — explicitly not overstated as more than that, but worth preserving as a real cross-reference point.",
    "Not confirmed in SIDId (no entry for this tag). The Beyond Reality shared-release credit above touches [[rob-hubbard]], [[fred-gray]], and Adam Gilmore (not a card in this KB by that exact id at time of writing) — not encoded as technical edges since it's a same-release, different-tune credit, not shared code. No other known relationship found (checked against David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Martin Galway, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Emotional Mozes (de Rooij, Michel) / Tetragon - NETHERLANDS'; 'Romijn' confirmed absent via direct grep): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/composers/mozes-emotional.json (composer='M. de Rooij (Emotional Mozes)' on every file, including Bangers_89.sid)",
    "sidid.nfo (project's local SIDId import — no match for 'Rene Romijn')",
    "CSDb scener id=13281 (Emotional Mozes / Michel de Rooij, full role/group history): local cache data/csdb/mozes-emotional.json",
    "Demozoo — Emotional Mozes (id=121582, production credit list): https://demozoo.org/sceners/121582/",
    "Demozoo — Beyond Reality (Tetragon, 1988, the shared-release credit with Gilmore/F.Gray/Hubbard): https://demozoo.org/productions/291790/",
    "CSDb release — Beyond Reality: https://csdb.dk/release/index.php?id=89389",
    "Local dataset: 6 files tagged Rene_Romijn, 1 composer folder (Emotional_Mozes) (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Rene_Romijn` tag names a driver/routine credit whose actual
composer — on every single file — is Dutch demoscener Michel de Rooij
('Emotional Mozes,' Tetragon/Clash/Orion). Structural evidence (the same
tag slot holds editor/driver names, not composer names, on de Rooij's
other files) supports reading 'Rene Romijn' as a driver or driver-author
credit, but WHO that person is could not be confirmed by any source
checked — this card reports that honestly as an open question.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **name-mismatch
investigation itself**: HVSC has zero record of anyone named Romijn, the
composer is confirmed via two independent sources to be de Rooij, and the
driver-not-composer hypothesis rests on a real structural pattern in his
other files' player tags, not a guess. A genuine, sourced **shared-release
credit** connects this tag to three existing KB composers (Rob Hubbard,
Fred Gray, Adam Gilmore) via the 1988 Tetragon demo 'Beyond Reality.'

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Rene_Romijn`-tagged `.sid`
+ trace — which could also be the only way to actually resolve who 'Rene
Romijn' is, if the routine's code carries any internal signature/comment.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Rene_Romijn` `.sid` (Bangers_89, composed by Emotional
Mozes): load `$900`, init `$900`, play `$903`, **65 register writes / 50
frames** (3 filter writes). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset caches (2),
sidid.nfo, Demozoo (2 pages), and CSDb.
