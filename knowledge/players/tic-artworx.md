# TIC/Artworx (player routine)

```json
{
  "id": "tic-artworx",
  "name": "TIC/Artworx (player routine)",
  "aliases": ["TIC/Artworx"],
  "authors": ["Rolf Nooteboom (The Invincible Cracker / TIC)"],
  "released": "198? (exact year not recorded). CSDb's per-tune `Released` field reads '198? Artworx' identically on all 3 tagged SID entries (ids 37931/37932/37933) - a census, not a sample. Consistent with group The Artworx's CSDb-recorded active window, Dec 1986-1988.",
  "status": "stub",
  "platform": "Native C64, in-house/personal routine - not a separately published or named editor tool. CSDb's scener record for Rolf Nooteboom (Handle 'Rolf', id 11904) lists FreelanceFunctions: Coder and MemberOf: The Artworx (group id 2405, short 'TAW'), corroborating a coder-authored in-group routine rather than a distributed tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 3 locally-tagged files (each titled '<?>' — no track name recorded, csdb ids 37931/37932/37933) are credited to composer 'The_Invincible_Cracker', author string 'Rolf Nooteboom (TIC)' (data/composers/the-invincible-cracker.json). Census of all 3, not a sample.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent). CSDb corroborates 'The Artworx' and 'The Invincible Cracker' collaborating on C64 releases in 1987 ('Hot Chocolate', 'Hi Tech Hero') — consistent with the tag's group suffix — but no player/tool-specific documentation was found beyond that group-collaboration evidence.",
    "The tag suffix 'Artworx' likely refers to the demo/crack group 'The Artworx', distinct from the composer's own handle 'TIC' — but no source explicitly states this routine was authored jointly or shared beyond Nooteboom's own files in this dataset.",
    "CSDb scener record (id 11904, current handle 'Rolf') lists FreelanceFunctions: 'Coder' and MemberOf: 'The Artworx' (group id 2405, active Dec 1986-1988) — consistent with 'TIC' having coded an in-house player routine for that group rather than releasing a named/distributed tool.",
    "CSDb's group-2405 trivia text spells the composer's handle 'TIC (The Invisible Cracker)', while the local composer profile and CSDb scener record both use 'The Invincible Cracker' — an apparent inconsistency in CSDb's own free-text trivia field, not a second identity.",
    "PSID header metadata read from all 3 tagged files (not disassembly facts, kept out of Tier 3): load $1000, init $1000+0x2d/0x33 ($102d/$1033), play $1000+0x7e/0x84 ($107e/$1084) — near-identical layouts across the 3 files, consistent with one shared routine, not proof of it."
  ],
  "sources": [
    "data/sidid.json: no entry for 'TIC/Artworx' (checked, absent)",
    "Local dataset: data/composers/the-invincible-cracker.json — 3 files tagged 'TIC/Artworx', all authored 'Rolf Nooteboom (TIC)'; see knowledge/COVERAGE.md row #57 (3 files)",
    "CSDb release, 'Hot Chocolate' by The Artworx and The Invincible Cracker (1987): https://csdb.dk/release/?id=75365",
    "CSDb release, 'Hi Tech Hero' by The Artworx and The Invincible Cracker (1987): https://csdb.dk/release/?id=220318",
    "CSDb webservice type=sid ids 37931/37932/37933 (via scripts/lib/csdb-client.js): all 3 have Released='198? Artworx', confirming the tag's group attribution at the per-tune level (census of all 3)",
    "CSDb webservice type=scener id=11904 (Handle 'Rolf'/TIC): FreelanceFunctions=Coder, MemberOf=The Artworx (group id 2405)",
    "CSDb webservice type=group id=2405 ('The Artworx', short TAW): FoundMonth=12, FoundYear=1986, DissolveYear=1988 — no MusicRoutines/tool-release field present, corroborating no separately named/released player tool exists on CSDb for this signature"
  ]
}
```

## Overview

`TIC/Artworx` is a bare-signature SIDId tag matching all 3 locally-tagged
files, each by composer **Rolf Nooteboom**, handle **The Invincible Cracker
("TIC")**. No SIDId fingerprint entry exists for this tag. CSDb's own
per-tune `Released` field reads "198? Artworx" identically on all 3 files, and
CSDb's scener record for Nooteboom lists him as a "Coder" member of the group
**The Artworx** (active Dec 1986-1988) — together these support reading
"TIC/Artworx" as an in-house player routine Nooteboom coded for that group,
not a separately published/named editor tool. No tool/format-specific
documentation was found on CSDb. This pass's WebSearch quota was exhausted
before Lemon64/Forum64 could be searched directly for this tag — a gap for a
future pass, not a "checked, absent" result.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration, no
SIDId corroboration, only general group-collaboration evidence from CSDb.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established.

## Sources

See the `sources` array — local composer-file aggregation and two CSDb
release pages.
