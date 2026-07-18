# Software Automatic Mouth (S.A.M.)

```json
{
  "id": "software-automatic-mouth",
  "name": "Software Automatic Mouth (S.A.M.)",
  "aliases": ["SoftwareAutomaticMouth"],
  "authors": ["Don't Ask Computer Software (per SIDId); individual programmer not confirmed in this pass"],
  "released": "1983 Don't Ask Computer Software (per SIDId); the underlying S.A.M. product is documented on Wikipedia as an early-1980s commercial text-to-speech / phoneme synthesizer for multiple 8-bit platforms",
  "status": "stub",
  "platform": "Cross-platform commercial text-to-speech / phoneme-based speech synthesizer ('S.A.M.', Software Automatic Mouth), not a music tracker — released for multiple 8-bit platforms including the C64. The C64 release is cracked/distributed on CSDb as 'SAM/Reciter' (release id 42843, cracked by 1103 of the group JEDI).",
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
    "Locally used by exactly 1 composer / 1 file (Antony Crowther, 'Suicide Express') despite being a well-documented, historically significant commercial product — its rarity here reflects local HVSC coverage, not obscurity of the underlying software.",
    "CSDb's own release page for the C64 version (id 42843) is filed as a 'crack' by the group JEDI, titled 'SAM/Reciter', AKA 'Software Automatic Mouth, S.A.M.' — user comments there describe using it for speech greetings and demo samples, consistent with its role as a general-purpose speech tool rather than a game-specific driver."
  ],
  "sources": [
    "sidid:SoftwareAutomaticMouth (released '1983 Don't Ask Computer Software', reference https://csdb.dk/release/?id=42843, comment linking https://en.wikipedia.org/wiki/Software_Automatic_Mouth) — data/sidid.json",
    "CSDb release 42843 ('SAM/Reciter', AKA Software Automatic Mouth/S.A.M., crack by JEDI): https://csdb.dk/release/?id=42843",
    "Local dataset: data/composers/antony-crowther.json — 1 file (Suicide Express); knowledge/COVERAGE.md rank #99"
  ]
}
```

## Overview

`SoftwareAutomaticMouth` is a raw Player-ID tag naming **S.A.M. (Software
Automatic Mouth)**, a well-known early-1980s commercial text-to-speech
synthesizer released by Don't Ask Computer Software for multiple 8-bit
platforms including the C64 (documented independently on Wikipedia, linked
directly from SIDId's own comment field). Unlike most tags in this batch,
this is a genuinely famous, historically significant product — not a
personal or obscure scene routine — even though it appears on only 1 file
in this local dataset (Antony Crowther's "Suicide Express", which embeds
S.A.M.-synthesized speech). The C64 release circulates on CSDb as a crack
titled "SAM/Reciter".

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a speech synthesizer, not a
music tracker, so this card's `effects`/`data_format` schema (built for
music players) is a poor fit and left `TODO` by design rather than
oversight; and its 1-file local footprint understates its real-world
significance.

## Disassembly notes

None done here. No memory map or entry-point disassembly was performed;
every Tier 3 field is honestly `TODO`. A future pass on S.A.M.'s actual
C64 code would need to approach it as a speech synthesis engine, not a
music player.

## Verification

**Not verified — `status: stub`.** Identity is well-confirmed via SIDId,
CSDb, and (indirectly) Wikipedia, but no runtime fact was extracted or
guessed.

## Sources

See the `sources` array — SIDId, the CSDb release page, and local composer
data.
