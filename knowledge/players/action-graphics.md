# Action Graphics (C64 conversion studio — shared driver signature)

```json
{
  "id": "action-graphics",
  "name": "Action Graphics (C64 conversion studio — shared driver signature)",
  "aliases": ["?Action_Graphics"],
  "authors": ["David Thiel", "Russell Lieblich"],
  "released": "1983-1984 (Action Graphics-converted C64 titles)",
  "status": "stub",
  "platform": "NOT a single named tool — 'Action Graphics' was a real early-1980s American game-development/conversion studio. C64-Wiki explicitly credits Action Graphics as the company that produced the Commodore 64 conversion of Activision's Decathlon (music by Russell Lieblich). VGMPF states composer/sound-programmer David Thiel worked at Action Graphics 1983-1985 and created audio there, including for Artillery Duel. The Player-ID tag `?Action_Graphics` (leading '?' = SIDId/Player-ID's own low-confidence marker) covers exactly 2 HVSC files, one by each composer, both from that same 1983-1984 window — read as a studio-level/company driver signature, DISTINCT from either composer's own later, individually-named driver tag already carded in this KB ([[david-thiel]]'s 'Thiel_Sound_System'/DDTSS, and [[russell-lieblich-driver]]'s 'Russell_Lieblich' driver, neither of which include these 2 files).",
  "csdb_release": null,

  "memory": {
    "load_address": "Two files' CSDb SID-header data (static metadata, NOT a disassembly or trace): Artillery Duel (csdb.dk/sid/?id=1148) load/init $B990, play $B9BB. Decathlon (csdb.dk/sid/?id=17380) load/init $BBF0, play $BC58.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: not documented"
  },
  "entry": {
    "init": "Artillery Duel: $B990 (= load address). Decathlon: $BBF0 (= load address). Both per CSDb SID header only.",
    "play": "Artillery Duel: $B9BB. Decathlon: $BC58. Both per CSDb SID header only; call rate/speed model not established."
  },
  "speed": "TODO: not established (no trace performed)",

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
    "ONLY 2 FILES, ONE PER COMPOSER: `?Action_Graphics` is used by exactly Artillery Duel.sid (David Thiel, 13 subtunes, csdb_id 1148, in data/composers/david-thiel.json) and Decathlon.sid (Russell Lieblich, 5 subtunes, csdb_id 17380, in data/composers/russell-lieblich.json) — confirmed directly from local composer JSON, not inferred.",
    "COMPANY IDENTITY CONFIRMED, NOT A GUESS: C64-Wiki's Decathlon article states the C64 version was 'skillfully designed by Action Graphics' (developer field lists 'Action Graphics' alongside Activision as publisher), with Russell Lieblich credited as musician — i.e. Action Graphics did the C64 conversion/port work while Lieblich supplied the music. Separately, VGMPF's David Thiel biography states he worked at Action Graphics 1983-1985 and, per a web search summary of that page, created the sound for Artillery Duel. Lemon64 independently confirms David Thiel as the credited musician for the C64 Artillery Duel (music: Rossini's 'William Tell Overture', arranged by Thiel). Together this makes Action Graphics a real, name-checked contract studio doing C64 conversions/audio for at least two different 1983-1984 publishers (Xonox's Artillery Duel, Activision's Decathlon), NOT a fictitious or misattributed tag.",
    "WHY THIS IS A SEPARATE CARD FROM [[david-thiel]] AND [[russell-lieblich-driver]]: both composers already have their own KB cards for a DIFFERENT, individually-named Player-ID tag each ('Thiel_Sound_System'/DDTSS — 5 files, none of them Artillery Duel; 'Russell_Lieblich' — 11 files, none of them Decathlon). Since `?Action_Graphics` is a third, distinct tag covering neither composer's usual tag and spans BOTH composers, it reads as SIDId identifying a shared, earlier/company-level driver signature specific to these two 1983-1984 files — plausibly an in-house Action Graphics driver used before Thiel's own later, self-named DDTSS existed (DDTSS's known titles are dated 1985-1986 per the david-thiel.md card, i.e. after Artillery Duel/Decathlon). This is offered as a HYPOTHESIS grounded in the dated tag correlation, not an asserted fact — no source directly states DDTSS supersedes an earlier Action Graphics-house driver, so no `derives_from`/`successor_of` edge is asserted here.",
    "NOT IN SIDId: `data/sidid.json`'s `byTag` has no entry for `Action_Graphics` or `?Action_Graphics` (checked directly) — consistent with the leading '?' marking this as one of Player-ID's own uncertain/heuristic matches rather than a confirmed signature with a maintained database entry.",
    "NOT IN data/players.json either (checked directly, no match) — this tag has no curated DeepSID player-spec entry, only the raw Player-ID string.",
    "CSDb's `type=sid` entries for both files carry ONLY the standard header table (load/init/play, PSID metadata, release list) — no player-routine credit field, no mention of 'Action Graphics' on the CSDb SID pages themselves. The company identification comes entirely from C64-Wiki (Decathlon) and VGMPF/Lemon64 (Artillery Duel/Thiel), not from CSDb."
  ],
  "sources": [
    "C64-Wiki — Decathlon (credits 'Action Graphics' as the C64 conversion company, Russell Lieblich as musician): https://www.c64-wiki.com/wiki/Decathlon",
    "VGMPF — David Thiel (states he worked at Action Graphics 1983-1985; DDTSS driver built there, dated 1985-1986 per knowledge/players/david-thiel.md): https://www.vgmpf.com/Wiki/index.php?title=David_Thiel",
    "Lemon64 — Artillery Duel (confirms David Thiel as musician, C64 version): https://www.lemon64.com/game/artillery-duel",
    "CSDb — Artillery Duel SID entry (load/init $B990, play $B9BB): https://csdb.dk/sid/?id=1148",
    "CSDb — Decathlon SID entry (load/init $BBF0, play $BC58): https://csdb.dk/sid/?id=17380",
    "Local dataset: data/composers/david-thiel.json (Artillery_Duel.sid, player=?Action_Graphics, csdb_id 1148), data/composers/russell-lieblich.json (Decathlon.sid, player=?Action_Graphics, csdb_id 17380)",
    "data/sidid.json — no byTag entry for 'Action_Graphics' or '?Action_Graphics' (checked directly)",
    "data/players.json — no entry for 'Action_Graphics' (checked directly)",
    "knowledge/COVERAGE.md — '?Action_Graphics', 2 files, uncarded prior to this card",
    "Sibling KB cards (cross-referenced, not edited): knowledge/players/david-thiel.md, knowledge/players/russell-lieblich-driver.md"
  ]
}
```

## Overview

`?Action_Graphics` is a Player-ID tag covering exactly 2 HVSC files: Artillery
Duel (David Thiel) and Decathlon (Russell Lieblich). It is not a discrete
authored tool with a name and a release date — it corresponds to **Action
Graphics**, a real early-1980s American studio confirmed by C64-Wiki as the
company that produced the Commodore 64 conversion of Activision's Decathlon,
and independently confirmed by VGMPF as David Thiel's employer (1983-1985)
where he did sound/audio work including Artillery Duel. Both composers already
have their own KB cards for a *different*, individually-named driver tag each
([[david-thiel]]'s DDTSS, [[russell-lieblich-driver]]'s own driver) — this
tag is a third, earlier/company-level signature that predates both, read here
as a studio identifier rather than a named, disassemblable routine.

## Quirks & gotchas

See the `quirks` array — load-bearing: the tag spans **both** composers
(unlike either of their own dedicated tags), Action Graphics' identity is
**independently confirmed by two separate sources** (C64-Wiki for Decathlon,
VGMPF/Lemon64 for Artillery Duel/Thiel), and the tag has **no SIDId or
`data/players.json` entry** — consistent with its leading `?` marking it as
one of Player-ID's own low-confidence matches.

## Disassembly notes

None performed. Only static CSDb SID-header metadata (load/init/play
addresses) was recorded for the 2 files — not a disassembly, not a trace.

## Verification

**Not verified.** No local HVSC audio file was traced (this project does not
store the actual SID audio archive); the only Tier 3-adjacent facts are the
two files' CSDb-published load/init/play addresses, cited directly and kept
separate from any claim of confirmed runtime behaviour. `status` is `stub`.

## Sources

See the `sources` array — C64-Wiki (Decathlon), VGMPF (David Thiel), Lemon64
(Artillery Duel), two CSDb SID entries, local composer JSON, `data/sidid.json`,
`data/players.json`, and `knowledge/COVERAGE.md`.
