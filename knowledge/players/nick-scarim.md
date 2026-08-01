# Nick_Scarim (player routine)

```json
{
  "id": "nick-scarim",
  "name": "Nick_Scarim (player routine)",
  "aliases": ["Nick_Scarim"],
  "authors": ["Nick Scarim"],
  "released": "1984-1985 (per each tagged file's own CSDb `Released` field: Spy vs Spy id 26125 = '1984 First Star Software', Spy vs Spy II id 26126 = '1985 First Star Software' — game release years, not a confirmed tool/routine release date; census of both tagged files, see sources)",
  "status": "stub",
  "platform": "Native C64, in-game only. No CSDb tool/driver release, no source repo, no format documentation found under the 'Nick_Scarim' name — it never circulated as a distributed editor. CSDb credits Nick Scarim with BOTH 'Code' and 'Music' on his other C64 game, Grandma's House (1984, release id 118169) — he was a coder as well as a composer, which supports (but does not prove) that the Spy vs Spy driver is his own hand-written in-game routine rather than a licensed third-party engine. Notably, Grandma's House and Sesame Street Letter-Go-Round (also his, per data/composers/nick-scarim.json) are tagged 'Spinnaker' and 'K-Byte' respectively, NOT 'Nick_Scarim' — so this SIDId tag is specific to the Spy vs Spy I/II driver only, not a catch-all for everything he composed.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG NAMED AFTER A REAL, NOTABLE GAME COMPOSER: both locally-tagged files ('Spy vs Spy', 'Spy vs Spy II: The Island Caper', data/composers/nick-scarim.json) are by Nick Scarim, who composed the C64 music for First Star Software's original 'Spy vs. Spy' (1984) — a well-documented, historically notable soundtrack (OC ReMix, VGMPF, multiple remix communities). One web summary noted 'confusion about whether Mike Riedel or Nick Scarim wrote the music' for the original game, with Mike Riedel credited as the programmer who implemented it while Scarim composed — the two roles are sometimes conflated in secondary sources.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent). This is a self-titled personal/in-game driver, not a documented standalone tool — no CSDb tool release or format spec was found.",
    "csdb_release IS CONFIRMED NULL, NOT MERELY UNSEARCHED: queried CSDb webservice type=sid for both tagged ids (26125, 26126) directly — neither carries a release-type entry for the routine/driver itself, only `UsedIn`/scener `Credit` entries for unrelated demos, intros and a 'Spy vs Spy Demo' one-file-music release that reused the .sid. Also checked Nick Scarim's CSDb scener entity (id 4093/4083, https://csdb.dk/webservice/?type=scener&id=4093) for any driver/tool credit — none exists; his only 'Released' credit as author-of-record is 'Grandma's House' (a game, not a tool).",
    "NAME-COLLISION CHECK, INDEPENDENT OF nick-jones.md: round 13's nick-jones card ruled out 'Scarim_Nick' as unrelated to Nick_Jones during ITS OWN collision check — that is a different person by a different name (Nick Jones vs Nick Scarim), not evidence about this card. Verified independently here: HVSC path is /MUSICIANS/S/Scarim_Nick/ (CSDb scener id 4093, country USA, affiliation First Star Software), a wholly separate identity from Nick Jones (/MUSICIANS/J/Jones_Nick/, UK, Mikro-Gen/Hewson). No shared files, no shared CSDb id, no shared employer. The two cards are unrelated; this note exists only to record that the check was actually performed, not assumed."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Nick_Scarim' (checked, absent)",
    "Local dataset: data/composers/nick-scarim.json — 2 files tagged 'Nick_Scarim' ('Spy vs Spy' csdb id 26125, 'Spy vs Spy II: The Island Caper' csdb id 26126) out of 5 total files by Nick Scarim in the collection (the other 3 — Grandma's House, Sesame Street Letter-Go-Round, Spy vs Spy III: Arctic Antics — carry other/no player tags); census of all 5 performed, only 2 carry this tag; see knowledge/COVERAGE.md row #83 (2 files)",
    "CSDb webservice type=sid id=26125: https://csdb.dk/webservice/?type=sid&id=26125 (Released: '1984 First Star Software')",
    "CSDb webservice type=sid id=26126: https://csdb.dk/webservice/?type=sid&id=26126 (Released: '1985 First Star Software')",
    "CSDb webservice type=scener id=4093: https://csdb.dk/webservice/?type=scener&id=4093 (Code+Music credit on Grandma's House, release id 118169; no driver/tool release)",
    "CSDb release id=118169 (Grandma's House, 1984) credits page: https://csdb.dk/release/?id=118169",
    "Lemon64, Spy vs Spy: https://www.lemon64.com/game/spy-vs-spy (musician credit only, no driver detail)",
    "VGMPF wiki, Spy Vs Spy (C64): https://www.vgmpf.com/Wiki/index.php/Spy_Vs_Spy_(C64)",
    "OC ReMix, Spy vs. Spy (C64, 1984, First Star Software): https://ocremix.org/game/835/spy-vs-spy-c64"
  ]
}
```

## Overview

`Nick_Scarim` is a self-titled SIDId signature tag matching 2 of 5 files by
**Nick Scarim** in the local dataset — specifically the two "Spy vs Spy"
driver files ('Spy vs Spy' id 26125, 1984; 'Spy vs Spy II: The Island Caper'
id 26126, 1985), both for First Star Software. His other three games
(Grandma's House, Sesame Street Letter-Go-Round, Spy vs Spy III) carry
different or no player tags, so this tag is specific to the Spy vs Spy I/II
driver, not a catch-all for his output. No SIDId fingerprint entry exists;
identity rests on strong external corroboration of Scarim as a real,
documented game composer, plus a CSDb Code+Music credit on Grandma's House
that shows he was a coder too, not composer-only. No composer-concentration
signal beyond this: only Scarim himself is tagged (1 composer, 2 files) —
consistent with a personal in-game routine, not a published tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a real, historically notable
composer with a well-attested game credit and his own coding credit
elsewhere, but the *routine itself* has no release documentation beyond the
games it ships in, and `csdb_release` was confirmed null (not merely
unsearched) by directly querying both tagged SIDs and Scarim's CSDb scener
entity.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage and provenance facts
are established (Tier 1 + Tier 2); no memory map, entry points, or data
format were determined, and none were guessed.

## Sources

See the `sources` array — local composer-file aggregation (full census of
all 5 Nick Scarim files), CSDb webservice (both tagged SIDs + the scener
entity), Lemon64, VGMPF, and OC ReMix.
