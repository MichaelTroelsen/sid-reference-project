# Rock Monitor

```json
{
  "id": "rockmonitor",
  "name": "Rock Monitor",
  "aliases": ["DUSAT/RockMon2", "DUSAT/RockMon3", "DUSAT/RockMon3h", "DUSAT/RockMon4", "DUSAT/RockMon5.0", "DUSAT/RockMon5.1", "Rockmonitor"],
  "authors": ["Oscar Giesen (OPM) — code", "Marco Swagerman (MC) — music/demosongs"],
  "released": "1987 (Rockmonitor II, 11 Apr 1987) – 1988 (V5)",
  "status": "stub",
  "platform": "Native C64 music editor+player with digi/sample (digi-drum) support, by The Dutch USA-Team (DUSAT). Closed scene tool.",
  "csdb_release": 20664,

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
    "derives_from": ["soundmonitor"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "LINEAGE: Rock Monitor is The Dutch USA-Team's modification of Chris Hülsbeck's SoundMonitor (1986), adding digi/sample (digi-drum) support — hence the derives_from: soundmonitor edge. The evidence indicates DUSAT's Rock Monitor IS that SoundMonitor-with-samples derivative (not a separate second lineage). [SoundMonitor lineage source 404'd on direct fetch — cited via search excerpt; verify.]",
    "Same team (DUSAT: OPM=Oscar Giesen code, MC=Marco Swagerman music) later made Music Assembler (1989) — MA is a separate/successor product, NOT a Rock Monitor version.",
    "DUSAT original version line: Rockmonitor II (id 20664, 11 Apr 1987), III (id 33038), IV (id 20676, Jul 1987), V5 (id 10632, May 1988; '100%' fix id 122393). Many third-party cracks/hacks exist (V5.3, V6, V7 by other groups) — NOT DUSAT releases. The tags RockMon2-5.1 map onto this II-V5 line (a '5.1' is likely a minor/cracked build).",
    "Replay internals (memory map, ZP, init/play, data format, effect set, digi-drum playback mechanics) all UNKNOWN publicly. As a SoundMonitor derivative, its core is EXPECTED to resemble SoundMonitor's routine — TODO: verify by disassembly + comparison.",
    "709 files across 163 composers (across all DUSAT/RockMon* tags incl. RockMon3h) — a broadly adopted tool (wide composer spread, unlike the concentrated Polish/Norwegian editors in this batch).",
    "'DUSAT/RockMon3h' (added 2026-07-16, 62 files/10 composers, uncarded rank #17 in COVERAGE.md before this update) is a DISTINCT raw player tag from 'DUSAT/RockMon3' (csdb release id 33038) — same numeric series but not string-identical, so it never auto-grouped with the other RockMon tags. What the 'h' suffix denotes (a hack/crack build, a relocated/patched copy, or a DUSAT point-release) is UNCONFIRMED — no CSDb release, SIDId entry, or doc names 'RockMon3h' specifically; CSDb only has the plain 'Rockmonitor III' (ids 33038 and a near-duplicate 131822 credited to 'Dutch USA-Team and The Wild Boys', which could plausibly be the 'h' source but this is NOT confirmed, so left as a lead not a fact). Filed under this card (not a separate id) because it is clearly the same RockMon3 tool line by naming/output, not a different player.",
    "RockMon3h is HEAVILY CONCENTRATED on one composer: 50 of its 62 files (81%) are Alexander Ney (Taxim/B.L.A.); the other 10 files spread across 9 other composers (Anzac Zeus, Dr_Ali_and_Joker, PST, Radon, Red_Duijckaerts_Roger x4, Reverb, Storm, Thomas Detert, Tonid). That concentration is the signature of a personal or near-personal build/copy rather than a widely-redistributed release — consistent with 'h' marking a one-off variant.",
    "VERIFICATION LIMITATION (2026-07-13): a traced HVSC RockMon file is an RSID (IRQ-driven; PSID play address = $0000), so a headless init+play trace can't drive it (0 writes when play is called directly). Verifying RockMon needs IRQ-servicing emulation, not a direct play call — noted for anyone attempting a trace pass."
  ],
  "sources": [
    "CSDb Rockmonitor II (1987, first DUSAT release): https://csdb.dk/release/?id=20664",
    "CSDb Rockmonitor V5 (1988, credits): https://csdb.dk/release/?id=10632",
    "SoundMonitor lineage (Rock Monitor = SoundMonitor + samples): https://www.vgmpf.com/Wiki/index.php?title=Soundmonitor (and namelessalgorithm.com SoundMonitor blog — verify, 404'd on direct fetch)",
    "Dutch USA-Team group: https://demozoo.org/groups/39271",
    "CSDb Rockmonitor III (plain, id 33038): https://csdb.dk/release/?id=33038; possible related/duplicate release credited to Dutch USA-Team and The Wild Boys (id 131822): https://csdb.dk/release/?id=131822 — lead only, NOT confirmed as the 'h' source",
    "Local dataset: 709 files tagged DUSAT/RockMon2-5.1 + RockMon3h across 163 composers (see knowledge/COVERAGE.md; RockMon3h itself was rank #17 uncarded, 62 files/10 composers, computed from data/composers/*.json). SIDId has entries for RockMon2/RockMon3/RockMon4/RockMon5.0/RockMon5.1 (author Oscar Giesen (OPM) throughout) — RockMon3h specifically is the only tag in this family with no SIDId entry."
  ]
}
```

## Overview

Rock Monitor (Rockmonitor) is a native C64 music editor+player by **The Dutch
USA-Team** (OPM = Oscar Giesen, code; MC = Marco Swagerman, music), first
released as Rockmonitor II in April 1987. It is a **modification of Chris
Hülsbeck's [SoundMonitor](soundmonitor.md) with added digi-drum/sample
support** — the same team's later, separate tool being
[Music Assembler](music-assembler.md). 709 files here across 163 composers,
across six raw tags: RockMon2, RockMon3, RockMon3h, RockMon4, RockMon5.0,
RockMon5.1. `RockMon3h` (62 files) is a same-line-but-string-distinct tag from
`RockMon3` — 81% of its files belong to one composer (Alexander Ney/Taxim),
suggesting a personal or near-personal variant/copy rather than a broadly
redistributed DUSAT release; what exactly the 'h' denotes is unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **SoundMonitor derivation** (the
graph edge), the **DUSAT team link to Music Assembler** (sibling tool, not a
version), the version-numbering caveat (DUSAT originals II–V5 vs many
third-party cracks), and the **RockMon3h tag** (added 2026-07-16): a
same-line-but-ungrouped raw tag, 81% concentrated on one composer (Taxim),
whose 'h' suffix meaning is unconfirmed. Internals `TODO`, but expected to
resemble SoundMonitor's.

## Disassembly notes

None done here. As a SoundMonitor derivative, comparing a Rock Monitor `.sid`'s
register trace against SoundMonitor is the natural RE approach (and would
confirm/quantify the derivation).

## Verification

**Not verified — `status: stub`.** Authorship, dates, and the SoundMonitor+
digi-drum lineage are CSDb/VGMPF-sourced (one lineage source 404'd — flagged);
all runtime fields `TODO`.

## Sources

See the `sources` array — CSDb (Rockmonitor II & V5), the SoundMonitor lineage
references, and Demozoo for the Dutch USA-Team. SIDId has entries for
RockMon2/3/4/5.0/5.1 (author Oscar Giesen (OPM)); only RockMon3h lacks one.
