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

### Census every tagged file. Never spot-check.

**Any claim derived from a subset of a card's tagged files should be treated as
provisional until every file has been checked.** Across 27 stub cards
researched on 2026-07-31, **eleven** claims were corrected, and every single
correction came from replacing a spot-check with a full census:

| card | recorded | actual | what was wrong |
|---|---|---|---|
| `tbb-sideb` | 1994 | 1991 | spot-checked a few files |
| `trident-active` | 1996 | 1994 | 2-file sample |
| `grg-tiny` | 2006 | 2002 | a tune's **title** year read as its release date |
| `cycleburner-digi` | (later) | 1989-02-26 | earlier attestation missed |
| `anvil` | 1997 | 1990 | a `Released` field transcribed wrong |
| `micropearl-fitzpatrick` | 1984 | 1983 | two 1983 files missed |
| `galbard-atoo` | 1988 | 1986 | 3-file sample |
| `tiny-sound-images` | 1988-1994 | 1988-1991 | estimate, and cited "Turtles" files that carry no such tag |
| `daisy` | 2 load addresses | **5** | 2-file sample of PSID headers |
| `rob-hubbard-digi` | "vintage rips" | 2018 Project Hubbard | provenance assumed, not checked |
| `trackplayer` | adopted via Motiv 8 (1996+) | Airwolf-Team | earliest tunes predate the membership |

Dates skew **late** for a structural reason: any subset you happen to look at
is unlikely to contain the earliest file, so sampling can only move a first-use
date later. But note the bottom four rows — the same failure corrupts header
counts, provenance, and causal reasoning, not just dates. One card
(`rob-hubbard-digi`) had a date that turned out **correct**; it was still worth
censusing, because "right but unverified" and "right" are different states.

Two more traps this pass surfaced:

- **A recorded reference id can be dead.** `background-musiceditor`'s
  `sidid.json` reference (`release/?id=138743`) resolves to nothing — the
  webservice returns its generic error. Follow the link; don't trust that a
  stored id still points somewhere.
- **File counts can over-count.** `chris-huelsbeck`'s 22 tagged file records
  resolve to only 12 distinct CSDb SID ids — the rest are duplicates across
  alt-spelling composer caches.

### Search-engine AI summaries are leads, never sources

Two independent passes on 2026-07-31 were offered confident, specific,
citeable-sounding claims by search-engine AI summaries that **evaporated when
the underlying page was fetched directly**: a Gremlin driver author tied to
Barry Leitch/Imagitec (`antony-crowther-v3`), and a shared "repetition format"
across CRL drivers (`companion-jay-derrett`). Both were caught only because the
pass was required to cite a real URL for every fact. Fetch the page. If the
claimed text isn't in it, record the lead as discarded — that is itself worth
writing down, so the next pass doesn't chase it again.

### Working with CSDb's webservice

- The HTML site 503s intermittently. Query the XML webservice through
  `scripts/lib/csdb-client.js` instead.
- Node's own `fetch` has been observed hanging against `csdb.dk` where `curl`
  succeeded (three separate agents hit this, one specifically at `depth=4`).
- Read each tune's own `Released` field. Do **not** read a year out of a tune's
  title, and do not take a `UsedIn` release's year as the tune's own.

Practical notes for the sweep:

- Query CSDb's XML webservice through `scripts/lib/csdb-client.js` rather than
  fetching HTML. The HTML site returns 503 intermittently, and in one case
  node's own `fetch` hung against `csdb.dk` where `curl` worked.
- Read each tune's own `Released` field. Do **not** read a year out of a tune's
  title, and do not take a `UsedIn` release's year as the tune's own.
- **Say which kind of date you have.** "Earliest tune attested" is not "release
  date", and a range of per-tune composition dates is neither. A personal or
  in-house routine usually has no release date at all — record that, with
  evidence, rather than promoting a first-use year into `released`.
- PSID header values (`load`/`init`/`play`) gathered during the sweep are
  header metadata, not disassembly facts. They belong in `quirks`; they must
  never be written into Tier 3 `entry`/`memory` fields.

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
