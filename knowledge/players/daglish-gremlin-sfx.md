# Daglish/Gremlin_SFX

```json
{
  "id": "daglish-gremlin-sfx",
  "name": "Daglish/Gremlin_SFX",
  "aliases": ["Daglish/Gremlin_SFX"],
  "authors": ["Ben Daglish"],
  "released": "1988 (Gremlin Graphics) — per the SID file's own 'Released' field, CSDb webservice type=sid id=10357: 'Released>1988 Gremlin Graphics'; corroborated by VGMPF's Ben Daglish gameography listing 'Skate Crazy' as a 1988 release for C64/ZXS (https://www.vgmpf.com/Wiki/index.php/Ben_Daglish)",
  "status": "stub",
  "platform": "In-game/in-house 6502 music driver embedded in the Gremlin Graphics C64 game 'Skate Crazy' (1988), credited to Ben Daglish; local dataset marks it player_type 'Normal built-in' (not a standalone editor/tool — no CSDb tool release exists for it, only the 1992 archival SID-rip release id 225890). Whether this is the same code as the separately-tagged Ben_Daglish/Gremlin driver (knowledge/players/ben-daglish.md) is UNCONFIRMED — see quirks.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). This is a DIFFERENT, separate Player-ID tag from the already-carded 'Ben_Daglish/Gremlin' (knowledge/players/ben-daglish.md, aliases ['Ben_Daglish/Gremlin', 'Ben_Daglish'], 54 files) — 'Daglish/Gremlin_SFX' is not among that card's aliases and was not folded in here without direct evidence.",
    "POSSIBLE BUT UNCONFIRMED RELATIONSHIP: the existing ben-daglish.md card's own quirks state that, per VGMPF, once Daglish 'joined Gremlin in-house, [he] used another driver' — a still-undocumented Gremlin-house routine distinct from the earlier Crowther/Music Master tooling. This tag's name ('Gremlin_SFX') is suggestive of being exactly that undocumented in-house Gremlin routine, but NO source directly states this identification — recorded here as an open lead only, and per this project's rule, no `edges` entry is asserted without direct evidence.",
    "Only 1 locally-tagged file: 'Skate Crazy' (Gremlin Graphics, credited to Ben Daglish; CSDb sid entry 10357) — too small a sample to say anything about composer concentration beyond noting it is Daglish's own credited tune.",
    "Release/date resolved via the CSDb webservice sid entry itself (type=sid&id=10357), whose 'Released' field reads '1988 Gremlin Graphics' verbatim — not a title-year guess. VGMPF's Ben Daglish gameography page independently lists 'Skate Crazy' as a 1988 C64/ZXS release, corroborating. VGMPF's own text on Gremlin-era Daglish is only 'At Gremlin, Daglish used another driver' — no driver name, no technical detail, so the 'Gremlin_SFX' label cannot be confirmed as this driver's real historical name; it is only the local Player-ID tag.",
    "csdb_release intentionally left null: the only CSDb release tied to this SID (via UsedIn in the webservice response) is release id 225890, a February 1992 'C64 Music' archival rip release (ripped by PDB) — that is not a tool/editor release for the driver itself, so it does not belong in csdb_release (cf. how other cards use that field for an actual tool release id, e.g. knowledge/players/4-mat-miniseq.md).",
    "Lemon64 forum search and Codebase64's SID player-identification page were checked for 'Gremlin SFX' / 'Daglish' driver documentation; Lemon64's search requires a logged-in account (blocked, read-only stance maintained, not worked around) and Codebase64's page (via its huefestival.com redirect) returned 404 for the expected path — no additional provenance found via either route."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Daglish/Gremlin_SFX': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Sibling card, same composer, different (already-carded) tag: knowledge/players/ben-daglish.md",
    "Local dataset: 1 file tagged Daglish/Gremlin_SFX ('Skate Crazy', csdb sid id 10357), composer Ben Daglish — data/composers/*.json aggregation",
    "CSDb webservice, SID entry: https://csdb.dk/webservice/?type=sid&id=10357&depth=3 (Released field, load/init/play header values, UsedIn release 225890)",
    "CSDb release page (archival SID-rip, not a tool release): https://csdb.dk/release/?id=225890",
    "VGMPF, Ben Daglish page (gameography + 'used another driver' at Gremlin note): https://www.vgmpf.com/Wiki/index.php/Ben_Daglish"
  ]
}
```

## Overview

`Daglish/Gremlin_SFX` is a Player-ID-only tag (no SIDId entry) for a single
locally-tagged file, "Skate Crazy" (Gremlin Graphics, 1988 per the SID
entry's own `Released` field), credited to **Ben Daglish** — the same
composer already carded under a DIFFERENT tag, `Ben_Daglish/Gremlin`
(`knowledge/players/ben-daglish.md`). That existing card notes an
unresolved, undocumented "Gremlin-house" driver Daglish used once he
joined Gremlin in-house, distinct from his earlier Crowther/Music Master
tooling — this tag's name is suggestive of being exactly that routine, but
no source confirms the identification (VGMPF names no driver, only "used
another driver"), so no `edges` entry is recorded. No CSDb tool release
exists for the driver itself; `csdb_release` stays `null`.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is a genuinely separate
SIDId/Player-ID tag from the existing `ben-daglish.md` card, not folded in
without evidence; (2) a plausible but unconfirmed link to that card's own
"undocumented Gremlin-house driver" lead; (3) only 1 file, too small a
sample for composer-concentration signal.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. Comparing a disassembly of this tag's file against the
`ben-daglish.md` card's traced sample (720 Degrees) would be the natural
next step to test the "same Gremlin-house driver" lead.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
and cross-reference against the sibling card. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, the sibling `ben-daglish.md`
card, and the local composer aggregation.
