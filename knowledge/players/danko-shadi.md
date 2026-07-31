# Danko/Shadi

```json
{
  "id": "danko-shadi",
  "name": "Danko/Shadi",
  "aliases": ["Danko/Shadi"],
  "authors": ["Tomas Danko (Gaunt) — inferred from the tag name; not independently confirmed as the routine's actual author"],
  "released": "TODO: no player/tool release date exists (personal in-house routine, not a published tool — see platform). All 4 tagged files censused via CSDb's per-SID 'Released' field (not a title-year guess): 'Shadi-Music' = 1986 Shadi Software (csdb_id 64188), 'Shadi Demo 7 (part 3)' = 1987 Shadi Software (csdb_id 43906), 'Zyntomix' = 1987 Shadi Software (csdb_id 55368), 'Exploding Fist Demo' = 1987 Shadi Software (csdb_id 64190) — earliest attestation 1986, not a routine release date, per EXTRACTION-TEMPLATE guidance not to promote a first-use year into `released`",
  "status": "stub",
  "platform": "Personal/in-house routine, not a separately distributed editor. CONFIRMED (upgraded from inference): 'Shadi' is not a demo/production series name guessed from file titles — it is 'Shadi Software', a real Swedish demo group (csdb.dk/group/?id=1569, founded 1985-09-01). Tomas Danko (CSDb handle 'Danko', formerly 'Gaunt'/'Groovemeister') is that group's FOUNDER, credited with the freelance function 'Musician'. All 4 tagged files' own CSDb 'Released' field literally reads '<year> Shadi Software' — i.e. Danko composed with his own routine for productions released by the group he founded, never as a packaged, separately released C64 tool. No SIDId entry and no CSDb player/tool release page exist for 'Danko/Shadi' — checked directly.",
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
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "4 files, 1 composer (100% Tomas Danko, handle Gaunt/Danko, Sweden) — a textbook personal/in-house routine, not a published tool.",
    "RESOLVED (was an unconfirmed inference): 'Shadi' is 'Shadi Software', a real Swedish demo group founded 1985-09-01 (csdb.dk/group/?id=1569), of which Tomas Danko was the founder (freelance function 'Musician'). All 4 tagged files' own CSDb 'Released' field reads '<year> Shadi Software'. The tag names composer + group, not composer + a separate tool/editor.",
    "Composer's own CSDb handle history: Groovemeister -> Gaunt (used while in group S451) -> Danko (current), all the same scener (CSDb Handle ID 23 = the 'Danko' handle, matching the local composer profile's csdb_id). Cross-checked via csdb.dk/webservice/?type=group&id=1569 member list.",
    "No SIDId entry exists for 'Danko/Shadi' (checked data/sidid.json directly), and no CSDb tool/release page exists for it either — only the group page (id 1569) and the individual SID/release entries the 4 files were used in.",
    "Independently checked the caller's lead that 'charlescallet-musicpro' mentions 'Danko' naming in a JC64dis-related context: no such mention exists in that card (grepped 'Danko' case-insensitively, zero matches) — the lead did not hold up and no edge is asserted from it.",
    "All 4 tagged files censused (not sampled) via CSDb's XML webservice (type=sid): csdb_id 43906 (Shadi Demo 7 part 3, load $5000/init $6f80/play $7030, 3 subtunes, used in release 22714 'Shadi-Demo 7' 1987-04-17), 55368 (Zyntomix, load/init $7000/play $7030, used in release 162552 'Picture Delight 1' 1987-05-01), 64190 (Exploding Fist Demo, load/init $7000/play $7030, used in release 246569 'Exploding Fist Demo' 1987-01-01), 64188 (Shadi-Music, load $50e7/init $6f90/play $7030, 10 subtunes, used in 6 different Shadi Software releases 1986-1987, earliest as 246620 'Shadi-Music'/'Exploding Fist Sprite' 1986). PSID header addresses are metadata only, not a disassembly fact — recorded here in quirks, not in the Tier 3 memory/entry fields."
  ],
  "sources": [
    "Local dataset: data/composers/tomas-danko.json — 4 files (Shadi Demo 7 part 3 csdb_id 43906, Zyntomix csdb_id 55368, Exploding Fist Demo csdb_id 64190, Shadi-Music csdb_id 64188); knowledge/COVERAGE.md rank #46",
    "data/sidid.json byTag — checked, no entry for 'Danko/Shadi'",
    "data/players.json — checked, no 'Shadi' or 'Danko' entry",
    "CSDb webservice (csdb.dk/webservice/?type=sid&id=<id>) via scripts/lib/csdb-client.js, for each of the 4 tagged files' own 'Released' field and PSID load/init/play addresses: ids 43906, 55368, 64190, 64188",
    "CSDb webservice (csdb.dk/webservice/?type=group&id=1569) — 'Shadi Software' (Sweden), founded 1985-09-01, Demo Group, founder/member Tomas Danko (Handle ID 9983 'Gaunt' at founding, current handle 'Danko' ID 23), https://csdb.dk/group/?id=1569",
    "Checked knowledge/players/charlescallet-musicpro.md directly for the caller-flagged 'Danko' naming lead — no match found, lead discarded, no edge asserted"
  ]
}
```

## Overview

`Danko/Shadi` is a raw Player-ID tag covering 4 files, all by a single
Swedish composer, **Tomas Danko** (CSDb handles Groovemeister -> Gaunt ->
Danko). No SIDId entry or CSDb tool page exists for it — because it isn't a
distributed tool. CSDb research (2026-07-31) confirms "Shadi" is **Shadi
Software**, a real Swedish demo group founded 1985-09-01
(csdb.dk/group/?id=1569), which Danko himself founded, credited as
"Musician." All 4 tagged files' own CSDb `Released` field literally reads
"`<year> Shadi Software`" — the tag names composer + the group he wrote
music for/founded, not composer + separate editor. This upgrades the prior
pass's unconfirmed "Shadi = demo series" reading from a plausible guess to a
sourced fact.

## Quirks & gotchas

See the `quirks` array. The main points: 100% single-composer concentration
(textbook personal routine); "Shadi" resolved to a real CSDb-documented demo
group Danko founded, not a guess from file titles; and the caller-flagged
lead that `charlescallet-musicpro` mentions "Danko" naming did not check
out on independent verification (no such text exists in that card).

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Tier 1 (local composer/usage data) and
Tier 2 (CSDb provenance: the "Shadi Software" group, its founding date, and
Danko's founder/member role) are now confirmed with citations. No SIDId
entry or CSDb player/tool page exists — there never will be one, since this
is an in-house routine rather than a released tool. No runtime fact was
guessed; every Tier 3 field remains `TODO`.

## Sources

See the `sources` array — local composer data, SIDId (checked, no match),
data/players.json (checked, no match), and CSDb's XML webservice for both
the 4 tagged files' own `Released`/PSID-header metadata and the "Shadi
Software" group record (id 1569).
