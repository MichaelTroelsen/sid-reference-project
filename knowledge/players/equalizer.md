# Equalizer

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "equalizer",
  "name": "Equalizer",
  "aliases": ["Equalizer"],
  "authors": ["TODO: unconfirmed. No credited author found for this Player-ID tag. CSDb lists a same-named C64 'Tool' — Equalizer V1.5 (Omega Supreme) and Equalizer V2.0 (Olav Mørkrid / Panoramic Designs, Feb 1992) — but nothing on either release page ties it to this tag or to composer Ronny Nilsen; treat as an unconfirmed lead only, see Quirks."],
  "released": "TODO: exact year unconfirmed for the routine itself. The 5 sampled Equalizer-tagged files that give a CSDb release date are all '1994 Atlantis' (or 'Atlantis/Sound Etity') — https://csdb.dk/sid/?id=21486, https://csdb.dk/sid/?id=21430, https://csdb.dk/sid/?id=21628",
  "status": "stub",
  "platform": "Native C64 hand-coded 6502 play routine (not a cross-platform tracker export) — inferred from real, consistent 6502 load/init/play addresses read directly from CSDb's PSID technical-info table across 5 sampled files (see memory/entry below). No disassembly performed.",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — identical across all 5 sampled Equalizer-tagged files checked on CSDb (Agenda id=21486, 1994 Atlantis. The Last Song id=21431, Ambient Try id=21434, Vandalism News #18 id=21430, Welcome Home id=21628). Not confirmed for the remaining ~34 of 39 files, and not from a disassembly — just the PSID header field as shown on each CSDb sid page.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "$1000 — same 5-file sample as load_address above (CSDb technical-info table).",
    "play": "$1003 — same 5-file sample. Note: play = init + 3 in every sample, consistent with a 3-byte 'JMP init / JMP play' trampoline at the load address. This exact init+3=play offset appears on knowledge/players/olav-morkrid.md's own traced sample too (load $1000, init $1003, play $1006 — play=init+3, but load != init there, unlike this tag's load==init pattern), and a closer load==init==$0b5a/play=$0b5d match appears on the separate knowledge/players/henning-rokling.md card — a suggestive structural parallel across two different cards, NOT asserted as a shared-routine edge here (no author statement or source header found linking any of these tags). Flagged as a disassembly lead, see Quirks."
  },
  "speed": "TODO: no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "EXTREME composer concentration: all 39 of 39 files tagged 'Equalizer' in this dataset (grep across data/composers/*.json) belong to a single composer, Ronny Nilsen (handle 'Snap'), Norway — data/composers/ronny-nilsen.json. Per this project's own heuristic (CLAUDE.md / knowledge/EXTRACTION-TEMPLATE.md), a single-composer tag is a strong signal of a small-scene or personal player routine rather than a widely-published tool — even stronger than the Rob Hubbard case (51 composers) already flagged elsewhere in this KB.",
    "NOT in SIDId's index (data/sidid.json byTag has no 'Equalizer' key/variant) — so unlike ~247 of the other 496 uncurated tags, this one gets no independent SIDId-sourced author/year/comment. The 'Equalizer' tag comes solely from DeepSID's own per-file database dump (the composer JSON's raw `player` field), not from a SIDId byte-signature match. Also absent from data/players.json (not a DeepSID-curated player) and from knowledge/COVERAGE.md's 'source' column (blank — no known public source flagged there either).",
    "UNCONFIRMED CANDIDATE LEAD: CSDb catalogues a same-named C64 'Tool' release, 'Equalizer' — V1.5 by Omega Supreme (https://csdb.dk/release/?id=132759) and V2.0 credited 'Code .... Olav Mørkrid of Panoramic Designs', Feb 1992 (https://csdb.dk/release/?id=132732). Olav Mørkrid (aka Omega Supreme) is the SAME coder already carded in this KB as knowledge/players/olav-morkrid.md, a distinct personal playroutine used by his Panoramic Designs bandmates. Neither CSDb release page states what the tool does (no 'music editor' description, no linked SID files, no file listing of the disk image), and no source was found connecting Ronny Nilsen (Xentrix/Eternity/Atlantis groups, not Panoramic Designs) to Mørkrid or to this specific release. This is a plausible but NOT confirmed identification — do not treat 'Equalizer' the CSDb tool and 'Equalizer' the Player-ID tag as proven to be the same thing.",
    "Distinguish from the many unrelated CSDb entries also named 'Equalizer' or 'The Equalizer' found while researching this tag: several 1986-1989 demos (Plasma Grafix, Triad, The Equalizer Team) and unrelated SID tunes literally titled 'The Equalizer' (Sam Roads 1986, Jay Derrett 1986, Matt Gray 1987) — none of these are music editors/players and were ruled out."
  ],
  "sources": [
    "Local dataset: 39 files tagged 'Equalizer', 1 composer (Ronny Nilsen/Snap) — data/composers/ronny-nilsen.json",
    "data/sidid.json — checked, no 'Equalizer' entry in byTag",
    "data/players.json — checked, no 'Equalizer' entry",
    "CSDb composer profile, Ronny Nilsen (Snap), csdb_id 945: https://csdb.dk/scener/?id=945",
    "CSDb sid entries sampled for load/init/play (all show $1000/$1000/$1003): Agenda https://csdb.dk/sid/?id=21486, 1995. The Last Song https://csdb.dk/sid/?id=21431, Ambient Try https://csdb.dk/sid/?id=21434, Vandalism News (issue #18) https://csdb.dk/sid/?id=21430, Welcome Home https://csdb.dk/sid/?id=21628",
    "Control sample (same composer, different tag Music_Assembler, to confirm the address pattern is tag-specific not composer-wide): Alphaflight Mix, load $1000 / init $1048 / play $1021 — https://csdb.dk/sid/?id=21433",
    "Unconfirmed candidate-lead sources: CSDb 'Equalizer V2.0' https://csdb.dk/release/?id=132732, 'Equalizer V1.5' https://csdb.dk/release/?id=132759, Panoramic Designs group https://csdb.dk/group/?id=312, Olav Mørkrid scener profile https://csdb.dk/scener/?id=8158",
    "Existing KB card consulted for the init+3=play structural parallel: knowledge/players/olav-morkrid.md (and knowledge/players/henning-rokling.md)"
  ]
}
```

## Overview

`Equalizer` is a Player-ID tag covering 39 SID files in this dataset,
**all 39 by a single composer**: Ronny Nilsen ("Snap"), a Norwegian musician
active in the Xentrix/Eternity/Atlantis scene groups. That total concentration
— unlike a genuinely published, widely-adopted tool — is this project's own
signal for a small-scene or personal player routine (see
`knowledge/EXTRACTION-TEMPLATE.md`'s composer-concentration guidance). The tag
is not in SIDId's index and has no DeepSID-curated player entry, so nothing
about its authorship is independently corroborated; everything below is
either a directly-cited CSDb observation or an explicitly-flagged unconfirmed
lead.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: **100% single-composer
concentration** (Ronny Nilsen/Snap, all 39 files), and an **unconfirmed
candidate identification** with a CSDb C64 "Tool" also named "Equalizer"
(V1.5/V2.0, 1992) credited to Olav Mørkrid (Omega Supreme) of Panoramic
Designs — the same coder already carded as
[knowledge/players/olav-morkrid.md](olav-morkrid.md). No source ties that
release to this Player-ID tag or to Ronny Nilsen, so this is recorded as a
lead for a future disassembly pass, not a fact. A second, more technical
observation worth flagging alongside it: this tag's sampled `play = init + 3`
address offset matches the exact same offset pattern already observed on the
`olav-morkrid.md` card's own traced samples — circumstantial, not proof.

## Disassembly notes

None performed (out of scope for this pass — Tier 1/2 identity + provenance
only). If a future pass disassembles a representative `Equalizer`-tagged
`.sid` (e.g. Agenda, csdb id 21486, load/init/play `$1000`/`$1000`/`$1003`),
the first thing to check is whether its code is byte-identical or a close
variant of the `olav-morkrid.md` routine — that would resolve the "same tool,
different tag" question raised in Quirks.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (composer
concentration, file count) and directly-read CSDb PSID-header addresses
(load/init/play, consistent across 5 independently sampled files) are
confirmed. No source code, disassembly, or author statement was found for
this player; the CSDb "Equalizer" tool candidate is an explicitly unconfirmed
lead. Every Tier 3 format/effect/zero-page fact is honestly `TODO`.

## Sources

See the `sources` array — the local dataset (`data/composers/ronny-nilsen.json`,
`knowledge/COVERAGE.md`), `data/sidid.json`/`data/players.json` (checked,
no entry), the CSDb composer profile and sampled sid-entry technical-info
pages, and the unconfirmed CSDb "Equalizer" tool release pages plus the
related `olav-morkrid.md`/`henning-rokling.md` cards consulted for the
structural-offset comparison.
