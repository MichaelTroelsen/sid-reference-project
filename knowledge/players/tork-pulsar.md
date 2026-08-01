# ?Tork/Pulsar

```json
{
  "id": "tork-pulsar",
  "name": "?Tork/Pulsar",
  "aliases": ["?Tork/Pulsar"],
  "authors": ["Nick Torkington (Tork) — inferred from tag/composer identity; not independently confirmed as the routine's actual author"],
  "released": "No dedicated tool/routine release found — this is a raw usage tag, not a published player. Per-file CSDb data: Circus Games (sid id 1262) 'Released: 1988 Tynesoft'; Pulsar Intro (sid id 41428) 'Released: 1989 Pulsar'. Source: csdb.dk webservice type=sid, ids 1262 and 41428.",
  "status": "stub",
  "platform": "Native C64, in-house/personal routine — not a distributed editor or tool. No SIDId entry and no CSDb tool/editor page exists for '?Tork/Pulsar'. CSDb confirms the tag's second half names the scene group Pulsar (UK, CSDb group id 628, founded 1988, https://csdb.dk/group/?id=628), not a demo/intro title: composer Nick Torkington's CSDb handle 'Tork' (scener id 10325, https://csdb.dk/scener/?id=10325) lists him as an ex-member of Pulsar with functions Coder/Musician, and his brother Andy 'Torky' Torkington (scener id 11962, https://csdb.dk/scener/?id=11962) was also an ex-Pulsar Coder. The two tagged files' own PSID headers differ sharply (see quirks) — treat '?Tork/Pulsar' as a low-confidence SIDId grouping-by-composer-and-group, not a confirmed single runtime routine.",
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
    "2 files, 1 composer (100% Nick Torkington, HVSC composer folder 'Tork_and_Torky', England) — a personal routine. HVSC's own author field flags one file's authorship as uncertain ('Nick Torkington (Tork) <?>').",
    "'Pulsar' in the tag names the UK scene group Pulsar (CSDb group id 628), not the file titled 'Pulsar Intro' — confirmed via both Torkington brothers' CSDb scener pages listing ex-membership in Pulsar (Tork: Coder/Musician; Torky: Coder). csdb.dk/group/?id=628, csdb.dk/scener/?id=10325, csdb.dk/scener/?id=11962.",
    "PSID headers for the two files differ sharply, casting doubt on '?Tork/Pulsar' as one runtime routine: Circus Games — load $4000, init $80F9, play $80FC (csdb sid id 1262); Pulsar Intro — load $1000, init $1465, play $1000 (play address equal to load address — an IRQ-driven-player pattern where the PSID play vector may not be the real dispatcher; csdb sid id 41428). Header metadata only, not disassembly — Tier 3 fields remain TODO.",
    "Circus Games was a commercially published Tynesoft game (1988); Pulsar Intro was a scene crack-intro released by Pulsar in 1989 — so the two tagged files come from a commercial game and an unrelated scene production, further evidence this is a usage tag spanning two contexts rather than one identifiable tool.",
    "No SIDId entry exists for '?Tork/Pulsar' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/tork-and-torky.json — 2 files (Circus Games csdb_id 1262, Pulsar Intro csdb_id 41428); knowledge/COVERAGE.md rank #92 (at time of card creation; COVERAGE.md now lists only uncarded families)",
    "data/sidid.json byTag — checked, no entry for '?Tork/Pulsar'",
    "csdb.dk webservice type=sid id=1262 (Circus Games) — Released, LoadAddr/InitAddr/PlayAddr, UsedIn",
    "csdb.dk webservice type=sid id=41428 (Pulsar Intro) — Released, LoadAddr/InitAddr/PlayAddr, UsedIn (group Pulsar)",
    "csdb.dk webservice type=scener id=10325 (handle 'Tork') — MemberOf Pulsar (Coder, Musician, ex)",
    "csdb.dk webservice type=scener id=11962 (handle 'Torky') — MemberOf Pulsar (Coder, ex); 'Brother of' trivia links the two sceners",
    "csdb.dk webservice type=group id=628 (Pulsar) — UK group, founded 1988, dissolved 1993"
  ]
}
```

## Overview

`?Tork/Pulsar` is a raw Player-ID tag covering 2 files, both by English
composer **Nick Torkington (Tork)**. No SIDId entry or CSDb tool page
exists for it. CSDb research resolved the tag's second half: "Pulsar" is
the UK scene group Pulsar (founded 1988), of which both Nick "Tork" and
his brother Andy "Torky" Torkington were ex-members — not the "Pulsar
Intro" file's own title, as the card previously speculated. The two
tagged files are otherwise unrelated in origin: Circus Games (1988) is a
commercial Tynesoft game; Pulsar Intro (1989) is an unrelated scene
crack-intro released by group Pulsar. Their PSID headers also differ
sharply (see quirks), so this looks like a SIDId tag grouping by
composer+group association rather than a confirmed single runtime player.

## Quirks & gotchas

See the `quirks` array — a minimal, single-composer personal routine; the
leading `?` marks it as one of DeepSID/SIDId's own low-confidence tag
matches, the same convention documented on [[msb]] and
[[unknown-c64-driver]]. The two files' differing PSID load/init/play
addresses are recorded there as header metadata only, not as evidence for
the Tier 3 fields (which remain `TODO`).

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data plus
CSDb provenance (release years, group affiliation) is confirmed. No
SIDId entry exists. No runtime fact was guessed.

## Sources

See the `sources` array — local composer data, SIDId (checked, no
match), and CSDb webservice lookups (`type=sid` for both tagged files,
`type=scener` for both Torkington brothers, `type=group` for Pulsar).
