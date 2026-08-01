# Zetrex / YP (shared $E000 player)

```json
{
  "id": "zetrex-yp",
  "name": "Zetrex / YP (shared $E000 player)",
  "aliases": ["Zetrex", "Yield Point", "YP", "Zetrex-YP"],
  "authors": ["Thomas E. Petersen (later \"Laxity\") — composed all three known files under earlier handles/affiliations, before adopting the \"Laxity\" handle"],
  "released": "1987-1988 (Racer 1987 via Yield Point Music; Jewels/Waste 1988 via the Zetrex/Zetrex 2005 group)",
  "status": "stub",
  "platform": "Native C64 player routine — pre-NP21, one shared binary loaded at $E000 across at least 3 files under 2 different scene labels",
  "csdb_release": null,

  "memory": {
    "load_address": "$E000 (Jewels, Waste, and Racer all load here)",
    "zero_page": "Per-file: Jewels $FE/$FF, Waste $FE/$FF, Racer $1B/$1C",
    "layout": "35-byte init pattern at binary offset 9, shared with the broader 'Vibrants V20' detector gate. Per-voice stream pointer table (ptr-lo/ptr-hi, file-specific): Jewels $E849/$E859, Waste $E961/$E96C, Racer $E849/$E86C. Per-voice current-note scratch at $E51C+X; frequency LUT at $E447 (lo) / $E448 (hi)."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO — same general shape as wizax-a (pointer-table + ZP-indirect per-voice stream), but the specific byte encoding has not been confirmed for this player.",
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
    "shares_routine_with": ["wizax-a"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "CENSUS FINDING (2026-08-01): zero files in data/composers/*.json carry a player tag matching any of this card's aliases ('Zetrex', 'Yield Point', 'YP', 'Zetrex-YP') — grep-checked case-insensitively against every folder[].player value across the whole dataset. The two near-hits are both false leads, not tag matches: (1) 'Zetrex' appears in zenox.json only as composer Zenox/Nicolai Thilo's retired handle (`<del>Zetrex</del>, Zenox`), not a player tag — his files are tagged 'Vibrants/Laxity' etc.; (2) 'Yield Point' appears in laxity.json only as a *tune title* ('Yield_Point.sid'), tagged player 'Vibrants/Laxity', not as a player-tag value. SIDM2's Jewels/Waste/Racer clustering (this card) is therefore invisible to our player-tag taxonomy — it is SIDM2-internal code-signature detection on files whose HVSC-derived `player` field reads something else entirely (likely 'Vibrants/Laxity', unconfirmed per-file here). No composer-concentration statistic can be computed from local data for this family.",
    "AUTHORSHIP (CSDb, researched 2026-08-01): all three known files are by the same person, Thomas E. Petersen — the composer who later became 'Laxity'. CSDb's search results directly credit 'Jewels' (1988) to 'Thomas E. Petersen/Laxity' via the group Zetrex/Jewels, 'Waste' (1988) to 'Thomas E. Petersen (Laxity)... for Zetrex 2005', and 'Racer' (1987) to 'Thomas E. Petersen (TSS)' released through Yield Point Music. Laxity's own CSDb scener page (csdb.dk/scener/?id=677) lists former handles 'The Sad Sausage' (21 June-1 Aug 1987, i.e. 'TSS') and 'Synth' (Aug 1987) before he settled on 'Laxity' — 'Racer' (1987) falls squarely in his 'The Sad Sausage' period. 'Zetrex' is NOT one of Laxity's own listed handles; it is a separate group (csdb.dk/group/?id=1869, 'Zetrex 2005', founded by 'Wizz' 15 Nov 1987, dissolved March 1988) he contributed music to — a trivia note on that group's page lists 'Laxity' among a Nov-1987 roster ('No Sweat!': Wize, Kaze, Cori, Laxity, Scale, Warp), confirming the association without making Zetrex his handle. 'Yield Point Music' (csdb.dk/group/?id=1859) is a group Laxity founded himself under his 'The Sad Sausage' handle in 1987. Net: this whole player family, previously attributed to no known author, is entirely Laxity's pre-'Laxity'-handle, pre-NP21 work.",
    "'Zetrex/YP' combines two different scene labels into one player: 'Zetrex' (Jewels 1988, Waste 1988) and 'Yield Point Music' (Racer 1987) — SIDM2's detector module treats all three files as one shared player based on matching code signature (the 35-byte init pattern), not on the scene-group name. Don't assume the name implies a single author or group.",
    "CONTRADICTS ITSELF ACROSS SIDM2's OWN DOCS, unresolved as of this card: an older SIDM2 memory note (vibrants-2000ad-cluster-re.md) lists Zetrex-YP as having 'real F1' editor wiring; the more recent docs/players/CLUSTERS.md (dated 2026-07-05, v3.13.1 per SIDM2's changelog) instead says 'V20-gate recovery (audio only); editor view empty.' This card records both rather than silently picking one — treat CLUSTERS.md as the more authoritative/current source per SIDM2's own documentation practice, but verify directly before relying on either claim.",
    "Shares the same false-positive detector history as wizax-a: the Wizax-A/Zetrex-YP detector pair originally over-matched 22 of 27 unrelated Laxity NP21 files on a too-common signature, corrupting their data; fixed by gating on a broader 'Vibrants V20 class' copyright-string + size check.",
    "Belongs to SIDM2's 'V20 umbrella' (pre-NP21 Vibrants/Laxity-era variants, 1987-1990) alongside wizax-a — unrelated to JCH NewPlayer V20 (see jch-newplayer-v20.md)."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2:sidm2/zetrex_yp_detector.py",
    "SIDM2 memory:v3.5.26-wizax-false-positive.md",
    "SIDM2 memory:vibrants-v20-findings.md",
    "SIDM2 memory:vibrants-2000ad-cluster-re.md (contains the contradicting older 'real F1' claim — see quirks)",
    "data/composers/zenox.json + laxity.json (full-dataset grep, 2026-08-01: confirms zero player-tag matches for this card's aliases)",
    "https://csdb.dk/scener/?id=677 (Laxity's CSDb scener page: handle history, 'The Sad Sausage'/'Synth' predate 'Laxity')",
    "https://csdb.dk/group/?id=1859 (Yield Point Music group page: founded by The Sad Sausage, 1987)",
    "https://csdb.dk/group/?id=1869 (Zetrex 2005 group page: founded by Wizz, Nov 1987-Mar 1988, Laxity in Nov-1987 roster trivia)",
    "https://csdb.dk/search/?seinsel=all&search=Jewels (1988 'Jewels' SID credited to Thomas E. Petersen/Laxity, group Zetrex/Jewels)",
    "https://csdb.dk/search/?seinsel=all&search=Waste (1988 'Waste' SID credited to Thomas E. Petersen (Laxity) for Zetrex 2005)",
    "https://csdb.dk/search/?seinsel=all&search=Racer (1987 'Racer' SID credited to Thomas E. Petersen (TSS), released through Yield Point Music)"
  ]
}
```

## Overview

Zetrex/YP is SIDM2's name for one player binary shared across three files
under two scene labels — "Zetrex" (Jewels, Waste, both 1988) and "Yield Point
Music" (Racer, 1987) — all loading at the same address, $E000. Like
[Wizax-A](wizax-a.md), it belongs to SIDM2's pre-NP21 "V20 umbrella" of
1987-1990 Vibrants/Laxity-era player variants, and shares that player's
false-positive detection history.

**Zero files in this project's own dataset carry a matching player tag** —
checked across every `folder[].player` value in `data/composers/*.json`, not a
sample. This family exists only as a SIDM2 code-signature cluster; our
HVSC-derived `player` tags apparently read something else for these files
(most likely `Vibrants/Laxity`, per neighbouring tags on the same composer
records, but unconfirmed per-file here). No composer-concentration figure can
be computed locally.

CSDb research (2026-08-01) resolved the author: all three files are by
**Thomas E. Petersen**, the composer later known as "Laxity". His CSDb scener
page lists two handles that predate "Laxity" — "The Sad Sausage" (21 Jun-1 Aug
1987) and "Synth" (Aug 1987) — and "Racer" (1987) was released through "Yield
Point Music", a group Petersen founded himself under "The Sad Sausage" that
same year. "Zetrex"/"Zetrex 2005" (Jewels, Waste, 1988) was a separate group,
founded by "Wizz", that Petersen contributed music to but never used as a
personal handle. In short: this is Laxity's earliest attributed work, before
he settled on the "Laxity" handle and years before NP21.

## Quirks & gotchas

See the `quirks` array above — most important: SIDM2's own documentation
**contradicts itself** on whether this player's editor view (F1) actually
works. This card records the contradiction explicitly rather than resolving
it by guesswork; verify directly against the current SIDM2 codebase before
relying on either claim.

## Disassembly notes

Confirmed via the shared 35-byte init pattern (binary offset 9) across all
three files, plus per-file stream-pointer table addresses and ZP pairs. No
data-format (note/duration/command byte) encoding has been independently
confirmed for this player — unlike Wizax-A, where sampled streams were
inspected.

## Verification

Unclear — see the contradiction noted above. `status: stub`; no `mcp-c64`
re-run performed here.

## Sources

See the `sources` array.
