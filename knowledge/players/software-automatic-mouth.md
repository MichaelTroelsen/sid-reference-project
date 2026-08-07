# Software Automatic Mouth (S.A.M.)

```json
{
  "id": "software-automatic-mouth",
  "name": "Software Automatic Mouth (S.A.M.)",
  "aliases": ["SoftwareAutomaticMouth"],
  "authors": ["Mark Barton (developer, per Wikipedia and c64-wiki.de)", "Don't Ask (Computer) Software (publisher, per SIDId/Wikipedia/c64-wiki.de)"],
  "released": "1982, C64 version, per Wikipedia (https://en.wikipedia.org/wiki/Software_Automatic_Mouth) and c64-wiki.de (https://www.c64-wiki.de/index.php/SAM), both independent of SIDId. SIDId's own local data records '1983 Don't Ask Computer Software' for this tag (data/sidid.json) — a 1-year discrepancy against two independent sources noted, not resolved (could be first-release vs a later revision/re-release; no source pins which).",
  "status": "stub",
  "platform": "Cross-platform commercial text-to-speech / phoneme-based speech synthesizer ('S.A.M.', Software Automatic Mouth), not a music tracker — released for Apple II, Apple Lisa, Atari 8-bit, and Commodore 64 (per Wikipedia and c64-wiki.de). On the C64 it ships as a BASIC extension: a machine-language speech engine ('SAM') plus a text-to-phoneme front end ('RECITER') (per c64-wiki.de). The C64 release circulates on CSDb as a crack titled 'SAM/Reciter' (release id 42843, credited to cracker 1103/OJO of group JEDI per the CSDb webservice; no release date is recorded on that CSDb page itself — a user comment only speculates a date from a BASIC line). Original company Don't Ask Software is defunct; a community C reimplementation (github.com/s-macke/SAM) states it was produced by converting a disassembly of the original C64 6502 code opcode-by-opcode, and describes the result as abandonware distributed under US 'Fair Use' rather than any formal open-source licence — see `sources`.",
  "csdb_release": 42843,

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
    "encoding": "TODO: SAM synthesizes speech from text/phonemes, not from a music-tracker command set — this project's `effects` schema (built for music trackers) does not cleanly apply",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's own comment field links directly to Wikipedia's 'Software Automatic Mouth' page — the strongest identity corroboration found in this batch, since it's an independent, well-known historical product rather than an obscure scene tool.",
    "This is NOT a music tracker/player in the usual sense — it's a text-to-speech engine. It appears in this dataset because a composer (Antony Crowther) embedded S.A.M.-synthesized speech in a game tune ('Suicide Express'), and SIDId's/DeepSID's Player-ID scanner fingerprints the resulting playback code the same way it fingerprints music players.",
    "Locally used by exactly 1 composer / 1 file (Antony Crowther, 'Suicide Express', HVSC path MUSICIANS/C/Crowther_Antony/Suicide_Express.sid, CSDb sid id 5617) despite being a well-documented, historically significant commercial product — its rarity here reflects local HVSC coverage, not obscurity of the underlying software. Census: this is the ONLY file among Antony Crowther's 30 tagged tunes carrying this tag; his other files carry Antony_Crowther_V1/V2/V3 tags instead (a separate, larger card family — not merged here).",
    "CSDb's own release page for the C64 version (id 42843) is filed as a 'crack' by the group JEDI, titled 'SAM/Reciter', AKA 'Software Automatic Mouth, S.A.M.', credited to cracker handle 1103 (aka OJO) — user comments there describe using it for speech greetings and demo samples, consistent with its role as a general-purpose speech tool rather than a game-specific driver. Per the CSDb webservice (type=release, id=42843), the release itself has no recorded release date; one 2006 user comment only speculates a date from a BASIC line in the cracked disk image.",
    "Real developer identified: Mark Barton, published by Don't Ask (Computer) Software, per both Wikipedia and c64-wiki.de (independent of SIDId, which names only the publisher). On the C64 it is documented as a BASIC extension occupying ~6KB ($9500-$C000) of working memory when loaded normally, or ~2KB in upper RAM as an alternative — per c64-wiki.de's SAM article. This describes the general S.A.M. product, not confirmed to be an exact memory-layout match for the specific code embedded in 'Suicide Express'; left out of this card's Tier 3 `memory` field for that reason (Tier 3 is out of scope for this pass regardless).",
    "A community C reimplementation (github.com/s-macke/SAM) states its source was produced by disassembling and converting the original C64 6502 SAM code opcode-by-opcode, and describes the software as abandonware (original company defunct) distributed on the basis of US 'Fair Use', not a formal open-source licence. Potentially useful as a disassembly reference for a future Tier 3 pass, but not used here to fill any runtime field.",
    "1-year discrepancy: SIDId's local `released` value is '1983 Don't Ask Computer Software'; Wikipedia and c64-wiki.de both independently state 1982 for the C64 release specifically. Not resolved — recorded as-is in the `released` field rather than silently picking one."
  ],
  "sources": [
    "sidid:SoftwareAutomaticMouth (released '1983 Don't Ask Computer Software', reference https://csdb.dk/release/?id=42843, comment linking https://en.wikipedia.org/wiki/Software_Automatic_Mouth) — data/sidid.json",
    "CSDb webservice, type=release id=42843 ('SAM/Reciter', AKA Software Automatic Mouth/S.A.M., crack by handle 1103/OJO of JEDI, no release date recorded): https://csdb.dk/release/?id=42843 (queried via scripts/lib/csdb-client.js)",
    "CSDb webservice, type=sid id=5617 ('Suicide Express' by Antony Crowther, Released '1984 Gremlin Graphics', player tag SoftwareAutomaticMouth): https://csdb.dk/sid/?id=5617 (queried via scripts/lib/csdb-client.js)",
    "Wikipedia, 'Software Automatic Mouth': https://en.wikipedia.org/wiki/Software_Automatic_Mouth (1982, developer Mark Barton, published by Don't Ask Software, released for Atari 8-bit/Apple II/Commodore 64)",
    "c64-wiki.de, 'SAM': https://www.c64-wiki.de/index.php/SAM (1982 C64 release, publisher DON'T ASK Computer Software, developer Mark Barton, BASIC-extension architecture, memory occupancy $9500-$C000)",
    "github.com/s-macke/SAM README (community C reimplementation via disassembly of the original C64 code; abandonware/Fair-Use framing, no formal licence): https://github.com/s-macke/SAM",
    "Local dataset: data/composers/antony-crowther.json (full census of all 30 tagged files — exactly 1 carries this tag); knowledge/COVERAGE.md rank #99"
  ]
}
```

## Overview

`SoftwareAutomaticMouth` is a raw Player-ID tag naming **S.A.M. (Software
Automatic Mouth)**, a well-known early-1980s commercial text-to-speech
synthesizer developed by Mark Barton and published by Don't Ask (Computer)
Software for the Apple II, Apple Lisa, Atari 8-bit, and Commodore 64
(confirmed independently via Wikipedia and c64-wiki.de, not just SIDId's
comment field, which links to the same Wikipedia page). Unlike most tags in
this batch, this is a genuinely famous, historically significant product —
not a personal or obscure scene routine — even though a full census of the
local dataset finds it on only 1 file (Antony Crowther's "Suicide Express",
1984, which embeds S.A.M.-synthesized speech; his other 29 tagged tunes all
carry the separate Antony_Crowther_V1/V2/V3 tags). On the C64 it shipped as
a BASIC extension (a machine-language "SAM" engine plus a "RECITER"
text-to-phoneme front end) and circulates on CSDb as a crack titled
"SAM/Reciter" (release id 42843, no release date recorded there). SIDId's
local `released` year (1983) differs by one from both independent sources
(1982) — recorded as an open discrepancy, not resolved.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a speech synthesizer, not a
music tracker, so this card's `effects`/`data_format` schema (built for
music players) is a poor fit and left `TODO` by design rather than
oversight; its 1-file local footprint (out of 30 Crowther tunes censused)
understates its real-world significance; and a community C reimplementation
(github.com/s-macke/SAM) exists, built from a disassembly of the original
C64 code, but was not used to fill any Tier 3 field in this pass.

## Disassembly notes

None done here. No memory map or entry-point disassembly was performed;
every Tier 3 field is honestly `TODO`, per this pass's explicit scope
(Tier 1/2 only). c64-wiki.de states the general S.A.M. product occupies
$9500-$C000 (~6KB) of C64 RAM when loaded normally, or ~2KB in upper RAM
as an alternative — recorded as a quirk, not as this card's `memory` field,
since it describes the product in general rather than a confirmed
disassembly of the specific code embedded in "Suicide Express". A future
Tier 3 pass on S.A.M.'s actual C64 code would need to approach it as a
speech synthesis engine, not a music player, and could use
github.com/s-macke/SAM as a disassembly reference.

## Verification

**Not verified — `status: stub`.** Identity is well-confirmed via SIDId,
the CSDb webservice, Wikipedia, and c64-wiki.de, but no runtime fact was
extracted or guessed, and none of Tier 3 was in scope for this pass.

## Sources

See the `sources` array — SIDId, the CSDb webservice (release 42843 and
sid 5617), Wikipedia, c64-wiki.de, the s-macke/SAM community reimplementation,
and a full census of local composer data.
