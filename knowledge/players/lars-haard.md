# Lars Hård (Greve Graphics)

```json
{
  "id": "lars-haard",
  "name": "Lars Hård (Greve Graphics)",
  "aliases": ["Lars_Haard"],
  "authors": ["UNKNOWN — no source credits Hård with any code; Bengt Caroli is the plausible author (see quirks)"],
  "released": "1985-1987",
  "status": "in-progress",
  "platform": "Native C64. A player-ID label named after the composer whose tunes it plays — authorship unconfirmed either way.",
  "csdb_release": null,

  "memory": {
    "load_address": "All 6 files: PSID v2, PAL, header loadAddr=$0 with the load word EMBEDDED IN THE DATA — a trap that silently shifted the analysis by 2 bytes until caught.",
    "zero_page": "UNKNOWN. Only $fb-$fe observed, as Soldier One's init copy pointers. Do NOT guess a memory map.",
    "layout": "Three Musketeers holds FIVE RELOCATED COPIES of the same player, one per subtune — dispatch table $4ffa = pages $6b/$50/$57/$5e/$65; init self-modifies the HIGH BYTE of the JMPs at $4ff6/$4ff9; subtunes 1-4 spaced $700 (1792 B) apart. Soldier One's init $8f00 copies 14 pages $9000 -> $C000, then dispatches on subtune (CMP #$0c): subtune 12 -> player 2 at $cd00, else player 1 at $8e00; $8fff is the selector — TWO player instances. Blood'n Guts: music data lives UNDER BASIC/KERNAL ROM (span $69c0-$b808 crosses $a000), so play $69c0 -> JMP $69dd wraps the player in LDA #$35/STA $01 ... LDA #$37/STA $01."
  },
  "entry": {
    "init": "Supercan/Captured $780c (same driver, same addresses). Three Musketeers: per-subtune via the $4ffa dispatch table. Soldier One $8f00.",
    "play": "Supercan/Captured $7816. Blood'n Guts $69c0 (-> JMP $69dd)."
  },
  "speed": "Blood'n Guts: init programs CIA1 Timer A ($dc04/$dc05) = $4025 = 16421 cycles ~= 59.999 Hz on PAL; PSID speed 0x1 corroborates (song 1 CIA-timed).",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE 'HIS OWN ROUTINE' ASSUMPTION IS LIKELY WRONG — NO SOURCE CREDITS LARS HÅRD WITH ANY CODE. Every credit list (Lemon64 for Blood 'n Guts / Soldier One / Captured; GTW64 for The SuperCan; Wikipedia's Greve Graphics article) names BENGT CAROLI as the SOLE CODER and Hård as musician. CSDb lists his function as Musician only. The Greve Graphics team was consistently Bengt Caroli (code), Nils Hård (graphics), Lars Hård (music). So Lars_Haard is a player-ID label named after the COMPOSER whose tunes it plays; the driver was plausibly written by Caroli. AUTHORSHIP IS UNCONFIRMED EITHER WAY — do not assert Hård coded it.",
    "THE ACCENT IS REAL: 'Lars Hård' (ISO-8859-1 å). 'Haard' is the ASCII-folded form used in the DeepSID/HVSC tag. HVSC Musicians.txt: 'Hård, Lars - SWEDEN' — no handle, no group. Compare [[oliver-klaewer]], where searching the folded form instead of the accented one produced a false 'no HVSC entry exists' conclusion that stood on that card for sessions. Search BOTH forms.",
    "NOT A DEMOSCENER — a commercial game musician. CSDb scener 17494's trivia literally reads 'Just added for crediting tunes.' Function: Musician only, no group membership. His credits span 1986-1999, but the later ones are demos/music collections REUSING his tunes, not activity. DeepSID's affiliation: 'American Action' is the PUBLISHER, not a scene group; its active: 1987 is too narrow (the games run 1985-87).",
    "GREVE GRAPHICS is widely described as SWEDEN'S / SCANDINAVIA'S FIRST GAME DEVELOPMENT COMPANY.",
    "THE TAG UNDERCOUNTS: 4 files tagged, but the composer has 6. 1943-One_Year_After and Soldier_One are UNTAGGED, yet 1943 demonstrably uses the same driver family. Soldier One sold 75,000+ copies in Sweden.",
    "CAPTURED = A LATER VERSION OF THE SUPERCAN — resolved, and confirmed two ways. A Lemon64 forum thread states 'Super Can is indeed an earlier version of Captured', resprited and renamed. The BINARY EVIDENCE INDEPENDENTLY CONFIRMS IT: identical driver at identical addresses (init $780c, play $7816), 55-68 leading opcodes identical — BUT THE TUNES DIFFER FROM REGISTER-WRITE #1 (200-frame traces: 396 vs 526 writes). Same game, same driver, genuinely rewritten music.",
    "SHARED 73-ENTRY PITCH TABLE across all 6 files — index 0 = rest, 12-TET (exactly 2.0x/octave: 49.98 -> 100.01 Hz), 6 octaves, ~31.5-1903 Hz. Byte-identical lo/hi tables in 4 files. Family lineage: Supercan/Captured, Three Musketeers, AND the untagged 1943 all converge on the core run LDA STA LDA STA LDX DEC BNE LDA STA LDY LDA AND STA — same driver family, different versions.",
    "REGISTER USAGE (trace-authoritative; scope: subtune 0, 200 frames, Supercan + Captured): freq lo/hi, PW lo/hi, control, attack_decay, filter_mode_volume — NEVER sustain_release, NEVER filter cutoff/resonance. Voices addressed via STA $d400,Y with Y = voice x 7. NOTE: a byte-scan suggested SR/filter code exists, but that scan was NOT instruction-aligned and is unreliable — it was DISCARDED rather than reported.",
    "A SOURCED CLAIM THAT SHOULD NOT BE UPGRADED TO FACT: Wikipedia's The SuperCan article says 'The music in The SuperCan was the first on the C64 to include single-channel delay.' Traced to its actual source — the chipflip timeline, under 1986: 'C64: Single-channel delay: Supercan by Lars Hård (02.20), or more obviously Hysteria (#3) by Fred Gray in 1987.' THE SOURCE ITSELF HEDGES. Report as a sourced claim, not established fact. See [[fred-gray]] — the chipflip line directly juxtaposes Supercan with Gray's Hysteria.",
    "IDENTITY COLLISIONS RULED OUT: 'Lars Hård' is a 1935 Jan Fridegård NOVEL and a 1948 Swedish FILM — fiction, pure search noise. CSDb has exactly one Lars Haard, so no scene-internal collision. SIDId's 'HardTrack_Composer' is a substring false-match trap for 'hard' — unrelated.",
    "UNRESOLVED — DO NOT ASSERT: (1) Whether Lars and Nils Hård are RELATED/brothers. Only Grokipedia claims 'brothers', and it is AI-GENERATED AND UNRELIABLE — it also contradicts every other source on the founding (claiming 1983 Stockholm). Wikipedia's 'Lars was asked to join' arguably cuts AGAINST co-founding siblings. Shared surname + same tiny team is suggestive only. (2) Greve Graphics' founding year/city: 1983 Stockholm (Grokipedia, unreliable) vs 1984 (Wikipedia) vs 1985 Lund (grevegraphics.com, official) vs Malmö (a search summary). Unresolved.",
    "No SIDId entry, not in DeepSID's curated 129, and NOT in realdmx (checked) — so there is no external RE to build on. COVERAGE.md ranks it #357, 4 files, no source."
  ],
  "sources": [
    "HVSC Musicians.txt ('Hård, Lars - SWEDEN'); local HVSC 85 files + siddump traces: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener 17494 (Musician only; trivia 'Just added for crediting tunes.'): https://csdb.dk/scener/?id=17494",
    "Wikipedia — Greve Graphics: https://en.wikipedia.org/wiki/Greve_Graphics · The SuperCan (the delay claim): https://en.wikipedia.org/wiki/The_SuperCan",
    "chipflip timeline (the ACTUAL source of the single-channel-delay claim — note it hedges): https://chipflip.wordpress.com/timeline/",
    "Lemon64 — Blood 'n Guts: https://www.lemon64.com/game/blood-n-guts · Soldier One: https://www.lemon64.com/game/soldier-one · Captured: https://www.lemon64.com/game/captured · the Supercan/Captured thread: https://www.lemon64.com/forum/viewtopic.php?t=24325",
    "GamesThatWerent GTW64 — The SuperCan: https://www.gamesthatwerent.com/gtw64/the-supercan/",
    "Greve Graphics official site: https://www.grevegraphics.com (founding 1985 Lund — conflicts with Wikipedia's 1984)",
    "UNRELIABLE, cited only to mark it as rejected: https://grokipedia.com/page/video_games_in_sweden (AI-generated; the sole 'brothers' claim; contradicts all sources on founding)"
  ]
}
```

## Overview

`Lars_Haard` is a player-ID label named after **Lars Hård**, the composer at
**Greve Graphics** — widely described as Sweden's (or Scandinavia's) first game
development company. The team was consistently **Bengt Caroli** (code), **Nils
Hård** (graphics), **Lars Hård** (music), publishing through American Action.

The card's honest centre is that **the tag's name probably isn't the driver's
author**. Nothing credits Lars Hård with code; Caroli is the plausible author,
and neither is confirmed.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **`Hård` vs `Haard`** — the accented HVSC form vs. the folded tag form. This
  exact mismatch produced a false conclusion on [[oliver-klaewer]] that survived
  several sessions.
- **Captured is a later SuperCan** — with the unusual twist that the driver and
  addresses are identical while the *music* was rewritten from write #1.
- **The "first single-channel delay on C64" claim hedges at its source.** Don't
  upgrade it.
- **Grokipedia is the only "brothers" source and is AI-generated.** Rejected.

## Disassembly notes

Header trap worth knowing: all six files carry `loadAddr=$0` with the real load
word **embedded in the data** — which silently shifted the analysis by two bytes
until caught.

The structural finds: Three Musketeers ships **five relocated copies of the same
player**, one per subtune, dispatched through a self-modified JMP high byte.
Soldier One carries **two player instances** and copies 14 pages to `$C000`.
Blood'n Guts parks its music data under BASIC/KERNAL ROM and banks `$01` around
every call.

A byte-scan suggesting sustain-release/filter code exists was **discarded**, not
reported — it wasn't instruction-aligned.

## Verification

`status: in-progress`. Entry points, relocations, the pitch table and the traced
register profile are measured. The Supercan/Captured relationship is confirmed
independently of the forum claim.

**Not verified**: nothing reconstructed. Data format internals are `TODO`; zero
page is essentially unknown (only `$fb`-`$fe`, as copy pointers).

Not determined: whether Hård or Caroli wrote the driver — **the card's central
question**; whether Lars and Nils are related; Greve Graphics' founding year and
city (four sources, four answers); whether the unreleased *Goremium* (1987) has
Hård music. MobyGames 403'd.

## Sources

See the `sources` array above.
