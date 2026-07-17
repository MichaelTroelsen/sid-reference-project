# OmegaSupreme_Digi

```json
{
  "id": "omegasupreme-digi",
  "name": "OmegaSupreme_Digi",
  "aliases": ["OmegaSupreme_Digi"],
  "authors": ["Olav Mørkrid (Omega Supreme)"],
  "released": "TODO: no year in SIDId; earliest known use is Hero's \"Digi Dreams #01/#02\" (CSDb release, The Ruling Company/Royalty, 1990)",
  "status": "in-progress",
  "platform": "Native C64. Not a standalone editor/tracker — no CSDb release, no in-program UI found; appears to be an embedded playback routine (SIDId 'player_type' in the local dataset is \"Normal built-in\" for every file).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not established — SIDId's detection signature is a relocatable byte pattern, not tied to one file's load address",
    "zero_page": "Uses a ZP pointer at $FB/$FC (indexed via Y) to fetch the sample/data byte — confirmed only from the SIDId signature snippet, not a full disassembly",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO: exact address unknown; confirmed PARTIAL routine content (see quirks/effects) is `85 01 A0 00 B1 FB 4A 4A 4A 4A 8D 18 D4 A9` — STA $01 / LDY #$00 / LDA ($FB),Y / LSR A x4 / STA $D418 / LDA #imm"
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
    "encoding": "TODO: not a tracker-style command byte; the confirmed fragment is a per-frame digi-sample fetch/output loop, not a pattern-effect encoding",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "CONFIRMED digi/sample routine — unlike its likely namesake Digitalizer (see below), this one is not merely suggestively named. SIDId's byte-signature detection pattern for this tag (sidid.cfg) decodes as: STA $01 / LDY #$00 / LDA ($FB),Y / LSR A / LSR A / LSR A / LSR A / STA $D418 / LDA #imm — a classic 4-bit-sample-via-volume-register playback trick (read a byte through a ZP pointer, shift the top nibble into the low nibble, write it straight to SID's volume/filter register $D418). This is the same general class of technique as the 'Mahoney 8-bit via volume register' trick already noted in this project's SIDId comments. Source: cadaver/sidid `sidid.cfg`, entry `OmegaSupreme_Digi` (raw bytes quoted above).",
    "Author per SIDId is 'Olav Mørkrid (Omega Supreme)' — the SAME person who wrote Digitalizer (see knowledge/players/digitalizer.md) — but the two are BYTE-LEVEL DISTINCT routines, not variants of one program. Digitalizer_V2.x's own SIDId signature (`9D ?? ?? 0A 90 ?? B9`) shares no bytes with OmegaSupreme_Digi's; Digitalizer_V3.0's (`FE 3A 03 B1 FB C8 C9 80 90 22 C9 C0 B0 1E 69 80 9D 3D 03 9D 40 03 C9 3F D0 0C FE 3A 03 B1 FB C8`) DOES share the 2-byte sequence `B1 FB` (LDA ($FB),Y sample fetch) — but that is a single common instruction, not a shared routine, and the $FB/$FC ZP fetch pointer is therefore NOT a distinguishing feature between them. What is distinguishing: NEITHER Digitalizer signature contains OmegaSupreme's output stage — the `LSR A` x4 into `STA $D418` nibble-write to the volume register — nor any $D418 write at all. This is real evidence bearing on Digitalizer's own open question ('does Digitalizer do digi playback? unverified') — it does NOT resolve it, because these are provably different code. What it DOES establish: Mørkrid separately wrote (or at least is credited with) a genuine, confirmable digi routine, tagged distinctly from his tracker product. The two should NOT be merged into one card.",
    "SIDId's own entry for this tag has ONLY an `AUTHOR` line — no `RELEASED` year and no `REFERENCE` CSDb link (contrast with both Digitalizer entries, which have both). Mørkrid's own CSDb scener page (id 8158) lists his releases — Digitalizer V2.2 through V3.5, Equalizer, Turbo-Ass+, Zoomatic, Block Editor, Turbo-Assembler — and NONE of them is titled 'OmegaSupreme_Digi' or an obvious variant. This was never a packaged/released tool with its own CSDb entry; it reads as an unreleased or informally-shared routine, identified by SIDId only from its code signature.",
    "Used by only 2 composers, both Swedish, NEITHER of whom is Mørkrid himself (Norwegian, Panoramic Designs): Hero (Johan Åkerberg, ex-member of Royalty/The Ruling Company/Triad/Success/Baboons/Byterapers/Light/Rebels/The Zaints/The Hacking Computer Team) and Maniac Metal (Mattias Pihlström). No shared group with Panoramic Designs was found for either. Hero's own CSDb scener credits for the 'Digi Dreams #01/#02' release (Royalty/The Ruling Company, 1990) list Hero himself under 'Code, Sampling' — i.e. Hero is credited as a co-coder/sampler on the release the routine appears in, not a passive user of a Mørkrid-distributed binary. This is consistent with a small digi playback snippet that circulated informally in the Scandinavian scene (BBS/diskmag code-sharing was routine in this era) and got adapted/recoded by whoever used it, rather than a maintained, versioned tool — the inverse pattern of Digitalizer, which stayed inside Mørkrid's own group (12 composers, all attributable to Panoramic Designs' orbit per its card).",
    "Only 11 files, 2 composers, in the local dataset (data/composers/hero.json: 4 files; data/composers/maniac-metal.json: 7 files) — a genuinely tiny footprint. Titles are suggestive of deliberate digi/sample demos: Hero's 'Digi Dreams #01' and '#02', and covers/tributes like Metal Maniac's 'Smells Like Teen Spirits' (Nirvana) and 'Seek & Destroy' (Metallica), consistent with sample-heavy novelty tunes of the early-90s scene rather than a general-purpose music tracker output.",
    "No HVSC STIL.txt comment found for any of the 11 files (checked data/composers/*.json's cross-referenced comment field — all empty)."
  ],
  "sources": [
    "SIDId sidid.nfo entry 'OmegaSupreme_Digi' (author only, no year/reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId sidid.cfg byte-signature entries for OmegaSupreme_Digi / Digitalizer_V2.x / Digitalizer_V3.0 (used for the byte-level distinctness finding above): https://github.com/cadaver/sidid/blob/master/sidid.cfg",
    "CSDb SID entry 'Digi Dreams #01' (Hero, 1990, The Ruling Company/Royalty): https://csdb.dk/sid/?id=43255",
    "CSDb SID entry 'Arla (tune 1)' (Metal Maniac, Dual Crew, 1993): https://csdb.dk/sid/?id=41508",
    "CSDb scener 'Hero' (id 9462) — groups and 'Code, Sampling' credit on Digi Dreams: https://csdb.dk/scener/?id=9462",
    "CSDb scener 'Olav Mørkrid / Omega Supreme' (id 8158) — his full release list, no 'OmegaSupreme_Digi' entry: https://csdb.dk/scener/?id=8158",
    "Local dataset: data/composers/hero.json (4 files tagged OmegaSupreme_Digi), data/composers/maniac-metal.json (7 files tagged OmegaSupreme_Digi) — 11 files, 2 composers total",
    "See knowledge/players/digitalizer.md for the related-but-distinct Digitalizer card (same author, different routine — do not merge)"
  ]
}
```

## Overview

`OmegaSupreme_Digi` is a small, apparently unreleased C64 digi-sample
playback routine attributed by SIDId to **Olav Mørkrid**, the Norwegian
scener known as **Omega Supreme** (Panoramic Designs) — the same person who
wrote the tracker **Digitalizer** (see `knowledge/players/digitalizer.md`).
Despite the shared author, the two are **confirmed byte-level distinct**
routines (no overlapping signature bytes), so this is its own card, not a
Digitalizer variant. Unlike Digitalizer's own unresolved "does it do
digi/sample playback?" question, this tag's SIDId detection signature
decodes cleanly as a genuine 4-bit-via-volume-register digi playback
snippet (`LSR A` x4 into `STA $D418`) — a real, sourced confirmation that
this routine plays samples. It has no CSDb release of its own and shows up
in only 11 files across 2 composers (Hero and Maniac Metal, both Swedish),
neither of whom is Mørkrid himself — most consistent with a small routine
that circulated informally in the scene rather than a maintained, versioned
tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **confirmed digi-via-$D418
technique** (sourced to the actual SIDId signature bytes, decoded above);
the **byte-level proof that this is NOT the same code as Digitalizer**,
despite the shared author — direct, citable evidence relevant to
Digitalizer's own open question, without resolving it; and the **usage
pattern** (2 non-author composers, no group overlap with Panoramic Designs)
that argues for informal circulation rather than a personal routine kept
in-house, the opposite pattern from Digitalizer's tightly-held 12 composers.

## Disassembly notes

No full disassembly performed. The only code evidence available is the
13-byte fragment embedded in SIDId's detection signature (`sidid.cfg`),
quoted and decoded in the `quirks` array. That fragment is enough to
identify the playback *technique* (nibble-extract into the volume
register) but not enough to reconstruct init/play addresses, ZP layout, or
speed — all remain `TODO`. A real disassembly would need to start from one
of the 11 tagged `.sid` files (e.g. HVSC `MUSICIANS/H/Hero/Digi_Dreams_01.sid`)
and locate the full routine around the signature match.

## Verification

Not verified. `status: in-progress` reflects the one directly-sourced
runtime fact (the decoded signature fragment, from a public source —
SIDId's `sidid.cfg` — per the Tier 3 rule allowing this without a full
disassembly), not a `mcp-c64`/`sidm2-siddump` reconstruction. No init/play
addresses, memory map, or speed model are established.

## Sources

See the `sources` array — SIDId `sidid.nfo`/`sidid.cfg`, two CSDb SID
entries, two CSDb scener pages, and the local per-composer dataset.
