# C64 Speech System (Speech Basic)

```json
{
  "id": "c64-speech-system",
  "name": "C64 Speech System (Speech Basic)",
  "aliases": ["C64_Speech_System"],
  "authors": ["Kristian Köhntopp", "Daniel Diezemann"],
  "released": "1986 (64'er magazine issue 10/1986, Markt & Technik; V2.7)",
  "status": "stub",
  "platform": "Native C64 tool: a hardware+software combo. A BASIC extension (c64-wiki lists roughly two dozen new commands across several categories, e.g. RECORD/PLAY/SPEED/PAUSE/BLOCK/EXEC — no single total-command-count or extension-size figure was found in any source checked) paired with a simple 2-bit A/D digitizer circuit wired into the joystick port, published as a type-in 'Listing of the Month' in the German magazine 64'er. Playback of recorded samples uses the SID chip only — no extra hardware needed for playback, only for recording. Player-ID tags files that embed/replay its sample format as 'C64_Speech_System'.",
  "csdb_release": 129965,

  "memory": {
    "load_address": "TODO: not stated in the sources checked (CSDb release page, c64-wiki, GitHub source mirror README) — would require reading the actual ACME source/disk image",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: not confirmed from the sources checked",
    "play": "TODO: not confirmed from the sources checked"
  },
  "speed": "TODO: not confirmed (recording rate is documented — see quirks — but the SID playback routine's frame/IRQ rate is not)",

  "data_format": {
    "order_list": "TODO: not applicable in the usual tracker sense — this is a raw sample recorder/player, not a pattern-based composer",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "Documented sample format (not disassembled, but stated outright by c64-wiki): 2-bit, mono samples, 4 samples packed per byte, recorded at up to 18,000 samples/second. Source: https://www.c64-wiki.de/wiki/Speech_Basic",
    "pulsetable": "TODO: n/a (not a synth waveform tool)",
    "filtertable": "TODO: not confirmed"
  },
  "effects": {
    "encoding": "TODO: n/a in the usual sense — the BASIC-extension commands (RECORD/PLAY/SPEED/PAUSE/BLOCK/EXEC etc., see c64-wiki) are the closest analogue, not a pattern-effect-command encoding",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Despite the 'Speech System' name, the files in this collection tagged with this player are NOT speech clips — they are scene sample-mix/'digi' tunes (titles like 'Digital Mix One'-'Five', 'The Mega Digi', 'Otto Music Mix', 'Radio Scratch'). Speech Basic's core function (record/playback of 2-bit digitized audio via the SID) was reused by C64 scene composers purely as a generic sample player, not for speech synthesis per se.",
    "SIDId's own comment on the tag is 'Also known as \"Speech Basic\"' — the two names refer to the same 1986 64'er type-in, confirmed by the CSDb release page title 'Speech Basic V2.7 (also known as C64 Speech System V2.7)'. Source: https://csdb.dk/release/?id=129965",
    "Do NOT confuse with 'Electronic_Speech_Sys' (the unrelated US company Electronic Speech Systems / later ESS Technology Inc., used in Ghostbusters/Impossible Mission) — separate raw Player-ID tag, separate card: knowledge/players/electronic-speech-system.md. Also do not confuse with SAM (Software Automatic Mouth, Don't Ask Software) — a third, unrelated contemporaneous C64 speech product.",
    "SIDId comments on three OTHER, separate raw player tags (MrWarp_Digi, (Mahoney_Digi), TGS_Digi) each read 'Probably derived from C64_Speech_System' — a speculative/unconfirmed lineage claim from the SIDId author, not a sourced derivation with evidence (a header, a manual statement). Recorded here as context only; deliberately NOT asserted as a graph `edges` relationship on this card per the project's no-similar-names-as-evidence rule. Source: data/sidid.json entries for MrWarp_Digi / (Mahoney_Digi) / TGS_Digi.",
    "Source is available, but not from the original 1986 authors directly: a third party (GitHub user LeshanDaFo, crediting 'Claus Schlereth 2023' in the LICENSE) reconstructed/republished the ACME-assembler source from the original 64'er disk images under an MIT license, per the repo's own description ('original authors granted permission for this public GitHub publication'). Treat as source-available-with-permission, not an official open-source release by Köhntopp/Diezemann themselves. Source: https://github.com/LeshanDaFo/C64-Speech-Basic",
    "24 files in this dataset, spread across 10 composers (see knowledge/COVERAGE.md, rank 22). Not a single-composer personal routine, but fairly concentrated: Pet_Shop_Boy alone accounts for 8/24 (33%) and Alien-Crackings 5/24 (21%) — the two together are more than half the corpus. Consistent with a niche scene tool a handful of composers picked up rather than a widely-adopted commercial tracker."
  ],
  "sources": [
    "SIDId (data/sidid.json, tag C64_Speech_System): name 'C64 Speech System', author Kristian Köhntopp, released 1986 64'er/Markt & Technik, reference https://csdb.dk/release/?id=129965, comment 'Also known as \"Speech Basic\"'",
    "CSDb release — Speech Basic V2.7 by Kristian Köhntopp, Oct 1986, incl. scanned 64'er manual and digitizer schematic: https://csdb.dk/release/?id=129965",
    "c64-wiki (German) — Speech Basic technical page (commands, 2-bit/18kHz sample format, digitizer circuit): https://www.c64-wiki.de/wiki/Speech_Basic",
    "Third-party source mirror (MIT-licensed, ACME source + disk images, V2.7 and a corrected V2.8): https://github.com/LeshanDaFo/C64-Speech-Basic",
    "Author's own history post referenced by web search results (not independently re-verified in this pass): https://blog.koehntopp.info/2006/10/26/mut-64er-10-86.html",
    "Local dataset: 24 files tagged C64_Speech_System, 10 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

C64 Speech System — also published as **Speech Basic V2.7** — is a 1986
hardware+software type-in from the German magazine *64'er* (Markt & Technik
issue 10/1986) by Kristian Köhntopp and Daniel Diezemann: a BASIC extension
(roughly two dozen new commands per c64-wiki; no exact count or extension
size is stated in any source checked) paired with a simple 2-bit audio
digitizer circuit for the joystick port. Recording needs the digitizer hardware;
playback uses only the SID chip. In this collection it shows up not as
speech synthesis but as a generic sample/"digi" player picked up by a small
number of scene composers (24 files, 10 composers, led by Pet_Shop_Boy and
Alien-Crackings) for sample-mix tunes.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: the name is
misleading — every file in this dataset tagged with it is a digi/sample-mix
tune, not speech — and it must not be confused with the unrelated
`Electronic_Speech_Sys` tag (a different US company, already carded at
[[electronic-speech-system]]) or with SAM. A third-party GitHub mirror makes
the original ACME source available under MIT, but it is a permitted
republication of a 1986 magazine listing, not an original open-source
release.

## Disassembly notes

None performed. No memory map, entry points, or play-routine timing were
found in the sources checked (CSDb release comments, c64-wiki, the GitHub
source mirror's README) short of actually reading the mirrored ACME source
— a future pass could do that, or disassemble a representative
`C64_Speech_System`-tagged `.sid`'s PSID init/play and trace it via
`sidm2-siddump`.

## Verification

**Not verified — `status: stub`.** Identity (author, year, CSDb release,
alternate name) and the general recording/playback mechanism (2-bit
digitizer input, SID-only playback, up to 18,000 samples/sec, 4
samples/byte) are confirmed from CSDb and c64-wiki. Every runtime fact
(load address, zero page, init/play entry points, play-routine speed) is
`TODO` — honestly left blank rather than guessed, per project rules.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release page
(129965), c64-wiki's Speech Basic article, the third-party MIT-licensed
GitHub source mirror, and the local dataset aggregate from
`knowledge/COVERAGE.md`.
