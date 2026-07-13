# Player extraction template — what we want to know about an "unknown" player

This is the standard dossier we try to fill for every player that has files in
the collection but no knowledge card. It is derived from the properties the
existing cards (`knowledge/players/*.md`) actually capture, reorganised by
**where each fact comes from** — because most of the identity/usage data is
already in this repo, most of the provenance is a web/CSDb lookup, and only the
low-level runtime facts require real reverse-engineering.

Fill what a tier gives you; leave everything else as a literal `"TODO: …"`
string. **Never invent a memory map, ZP range, entry point, or format.** The
card's JSON block (the `knowledge/players/_template.md` skeleton) is the
machine-readable output; this document is the checklist that feeds it.

Rule of thumb for `status`: **Tier 1+2 only → `stub`**; **some Tier 3 confirmed
from a real disassembly → `in-progress`**; **entry points + behaviour
reassembled and traced through `sidm2-siddump` → `verified`**.

---

## Tier 1 — Identity & usage (already in this repo; no research needed)

Source: `data/sidid.json` (`byTag`), `data/composers/*.json` (`folder[]`
records), `data/players.json`, and the family aggregation in
`knowledge/COVERAGE.md`.

| Want | Card field | Where |
|---|---|---|
| Canonical name | `name` | SIDId `name`, else the tag |
| Player-ID tag(s) / signature names | `aliases` | the raw `player` tags in the dataset (these ARE the Player-ID signature names) |
| Author(s) | `authors` | SIDId `author` |
| Release year / publisher | `released` | SIDId `released` |
| CSDb release id | `csdb_release` | SIDId `reference` (`csdb.dk/release/?id=…`) |
| Playback-technique note | a `quirks` entry | SIDId `comment` (present for ~66 tags) |
| File count in the collection | Overview / a `sources` line | aggregate `player` tags across `data/composers` |
| Top composers + composer concentration | Overview / `quirks` | per-family composer counts. **Concentration is signal**: ≤~12 composers or one dominant → likely a small-scene or personal routine (cf. Rob Hubbard: 51 composers, only 28% his own); spread wide → a real published tool |

## Tier 2 — Provenance (web + CSDb research; "search csdb.dk or websearch")

Source: the CSDb release page, the author's site, HVSC docs, Codebase64,
Wikipedia/forums. Cite a URL for every fact.

| Want | Card field | Notes |
|---|---|---|
| Platform | `platform` | native C64 tool vs cross-platform editor + C64 replay |
| Open-source? + license | `platform` / `quirks` / `sources` | **public ≠ open-source** — verify. Freeware/donationware (e.g. DefleMask) still gets a card, but as a `stub` with runtime fields `TODO` |
| Source repo URL | `sources` | GitHub/SourceForge/CSDb-src-zip if any; note if none found |
| Documentation | `sources` | manual, format spec, Codebase64 article, HVSC notes |
| First-release date / version history | `released` / Overview | CSDb release chain |
| Lineage claims | `edges` + `quirks` | a source/manual/header that states derivation (e.g. CheeseCutter's `"Based on JCH NP 21.G4 by Laxity/VIB"`) — only assert an edge from real evidence |

## Tier 3 — Runtime / reverse-engineering (usually TODO until disassembled)

Source: a real disassembly of a representative `.sid` (public source if it
exists; otherwise a SIDwinder/own disassembly), then assemble + trace via
`sidm2-siddump`. For closed classic players with no source, these stay `TODO`.

| Want | Card field |
|---|---|
| Load address | `memory.load_address` |
| Zero-page usage the play routine clobbers | `memory.zero_page` |
| Where order lists / patterns / tables live | `memory.layout` |
| Init entry (+ A/X/Y convention) | `entry.init` |
| Play entry (+ call rate) — **beware IRQ-driven players** where the PSID play vector is a flag, not the real dispatcher (cf. SF2 Driver 11 → `$1006`) | `entry.play` |
| Speed model (1x/multispeed, CIA vs raster) | `speed` |
| Order list format | `data_format.order_list` |
| Pattern/sequence format | `data_format.patterns` |
| Instrument table (size, fields, row- vs column-major) | `data_format.instruments` |
| Wave / pulse / filter (/ speed) tables | `data_format.wavetable` / `pulsetable` / `filtertable` |
| Effect/command encoding + per-command semantics — **distinguish editor/source format from runtime binary** (cf. laxity: super-commands are the editor layer; runtime is parallel type/param arrays) | `effects.encoding` / `effects.commands` |
| Relationships to other players | `edges.*` |

## Meta (always)

| Want | Card field |
|---|---|
| Confidence level | `status` (stub / in-progress / verified) |
| The non-obvious, time-costing facts | `quirks` |
| Every fact's origin | `sources` (SIDId / CSDb / HVSC / public source / your own disassembly) |
| How the facts were confirmed | `## Verification` prose |

---

## The JSON skeleton

Same as `knowledge/players/_template.md` — copy it, fill Tier 1+2, leave Tier 3
as `"TODO: …"`. Optional extra `data_format` keys seen in real cards:
`speedtable` (GoatTracker). Keep the block valid JSON (no comments, no trailing
commas) so `knowledge/build-graph.js` can read it.

## Exemplars to copy the depth/tone from

- **Verified, full RE:** `laxity-newplayer.md` (entry points + round-trip + command-table correction).
- **Open-source, source-documented stub:** `goattracker.md`, `cheesecutter.md` (the latter shows a real `derives_from` edge from a source header), `sidwizard.md`.
- **Public-but-closed, identity-only stub:** `deflemask.md` (every runtime field honestly `TODO`).
- **Source-available but unread stub:** `odintracker.md`.
