# Crunched:PUCrunch (Player-ID packer signature — NOT a player routine)

```json
{
  "id": "crunched-pucrunch",
  "name": "Crunched:PUCrunch (meta-tag, not a player)",
  "aliases": ["Crunched:PUCrunch"],
  "authors": ["Pasi 'Albert' Ojala"],
  "released": "N/A — PUCrunch itself dates from 1997 (per upstream source), but the tag marks packed DATA, not a dated music tool",
  "status": "stub",
  "platform": "NOT A PLAYER ROUTINE. 'Crunched:PUCrunch' is Player-ID's signature for a SID file whose payload was compressed with PUCrunch, a general-purpose C64/C128/VIC-20/Plus4 data cruncher (hybrid LZ77+RLE) written by Pasi Ojala — it detects a packer/depacker stub, not a music replay engine. This card documents that determination and removes the tag from the uncarded-player backlog; it is a deliberate exclusion, not a tool card.",
  "csdb_release": 6089,

  "memory": {
    "load_address": "N/A — PUCrunch is a general compressor; the packed payload's own load address/player are whatever the original (uncompressed) file used, and are outside this tag's scope",
    "zero_page": "N/A",
    "layout": "N/A"
  },
  "entry": {
    "init": "N/A — the tag marks a depacker stub, not a music init/play pair",
    "play": "N/A"
  },
  "speed": "N/A",

  "data_format": {
    "order_list": "N/A",
    "patterns": "N/A",
    "instruments": "N/A",
    "wavetable": "N/A",
    "pulsetable": "N/A",
    "filtertable": "N/A"
  },
  "effects": { "encoding": "N/A — no music effect model; PUCrunch is a byte-stream compressor (Elias Gamma-coded LZ77 offsets/lengths + ranked RLE), not a SID player", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DETERMINATION (2026-07-18): 'Crunched:PUCrunch' is a PACKER/COMPRESSOR signature, not an identifiable music-player family, and is treated as a PERMANENT EXCLUSION from the player-carding backlog — same shape as knowledge/players/basic-program.md's 'Basic_Program' meta-tag determination. Evidence: (1) in this project's local dataset the tag appears exactly ONCE, in knowledge/COVERAGE.md's raw-tag ranking (rank 7, 1 file); (2) PUCrunch is independently and extensively documented on the public web as a general-purpose C64/C128/VIC-20/Plus4 data compression program (hybrid LZ77+RLE, Elias Gamma-coded), written by Pasi Ojala starting 1997 — a self-extracting depacker stub, used to shrink ANY program or data (games, intros, SID payloads), not a sound-chip replay routine; see github.com/mist64/pucrunch and a1bert.kapsi.fi/Dev/pucrunch/.",
    "CENSUS CORRECTION (2026-08-01 gap-fill pass): the 2026-07-18 claim of 'zero hits for PUCrunch outside COVERAGE.md' is WRONG and is corrected here — a full re-grep of data/composers/*.json for the exact string 'Crunched:PUCrunch' finds exactly ONE match (matching the 1-file count, so this was a stale/incomplete prior check, not new data): data/composers/gerard-hultink.json, the file 'Crazy_Sue_unused.sid' (collection_path _High Voltage SID Collection/MUSICIANS/H/Hultink_Gerard/Crazy_Sue_unused.sid, csdb_id 14753, 21 subtunes, player_type 'Normal built-in'). data/sidid.json has no byTag entry matching /pucrunch/i (checked case-insensitively) — still no SIDId player-routine signature exists. CSDb's own entry for this SID (csdb.dk/sid/?id=14753, fetched via scripts/lib/csdb-client.js getSidRelease) lists Released '1994-96 Gerard Hultink' and carries a 2019 user comment from JCH/Chordian ('What's up with the massive amounts of code in the HVSC version of this?') hinting the packed payload is unusually large — consistent with a PUCrunch-compressed music program, not contradicting the packer-tag determination. PSID header fields (Load $0800/Init $20C0/Play $20C3) are recorded here as metadata only, per EXTRACTION-TEMPLATE.md's rule that header values are not Tier 3 disassembly facts — they are NOT written into this card's memory/entry fields.",
    "SIBLING PATTERN: 'Crunched:Exomizer' (rank 2, 2 files per knowledge/COVERAGE.md) sits in the same dataset under the same 'Crunched:' prefix — Exomizer is likewise a well-known general C64 cruncher (Magnus Lind), not a music player. This confirms 'Crunched:' is Player-ID's naming convention for 'this SID's data is packed with cruncher X', independent of whatever music routine the packed payload actually contains. That sibling tag is NOT touched by this card (a different agent's scope per the batch-24 sweep discipline) — flagging it here only as corroborating pattern evidence.",
    "WHY NO CARD-MERGE: there is no existing player card whose subject is a packer/cruncher (checked knowledge/players/ for 'Crunched', 'Exomizer', 'PUCrunch', 'pucrunch' — the only hit was an unrelated passing mention in goattracker.md), so this is a new documented exclusion, not a merge into an existing alias list.",
    "DO NOT attempt to disassemble a 'PUCrunch player' — there isn't one. If a future pass wants to identify the actual music routine inside the single SID file that carries this tag, that is a per-file investigation (unwrap the PUCrunch depacker, then identify whatever player the decompressed payload contains), not a tool-level card for 'Crunched:PUCrunch' itself.",
    "GAP-FILL PASS (2026-08-01): resolved the two recorded gaps, csdb_release and authors, both from public sources. csdb_release: CSDb release id 6089 (https://csdb.dk/release/?id=6089) is the CSDb entry for the PUCrunch UTILITY ITSELF ('PuCrunch', category 'Other Platform C64 Tool'), credited to scener 'Albert' (CSDb scener id 3981, group Pu-239, founder, country Finland), dated 2002-03-08 — this is a later archival upload of the tool, not a dated music release, and has no relationship to the single tagged SID file. authors: confirmed 'Pasi Ojala' as PUCrunch's author, handle 'a1bert'/'Albert' (matches the CSDb scener credited on release 6089 and the domain a1bert.kapsi.fi), via the tool's own GitHub repository (github.com/mist64/pucrunch, contact a1bert@iki.fi, first version dated 1997-03-14: 'Since I started writing demos for the C64 in 1989 I have always wanted to program a compression program.'). Neither field describes a music player, per this card's core determination — both are recorded as PUCrunch-the-tool provenance, not player provenance."
  ],
  "sources": [
    "knowledge/COVERAGE.md — 'Crunched:PUCrunch' listed as rank 7 raw tag, 1 file (and 'Crunched:Exomizer' as rank 2, 2 files, corroborating the 'Crunched:' packer-signature convention)",
    "2026-08-01 gap-fill pass census: grep of data/composers/*.json for exact string 'Crunched:PUCrunch' finds exactly 1 hit — data/composers/gerard-hultink.json ('Crazy_Sue_unused.sid', csdb_id 14753); data/sidid.json has no byTag key matching /pucrunch/i. Corrects the earlier (2026-07-18) claim of zero local occurrences, which was a stale/incomplete check, not new data — the file count (1) is unchanged",
    "https://github.com/mist64/pucrunch — 'pucrunch, an Optimizing Hybrid LZ77 RLE Data Compression Program for C64/C128/VIC-20/Plus4', author Pasi Ojala (contact a1bert@iki.fi), first version dated 1997-03-14",
    "https://a1bert.kapsi.fi/Dev/pucrunch/ — Pasi Ojala's own PUCrunch page: 'Compression Basics' / 'Lossless Data Compression Program: Hybrid LZ77 RLE', describing it as a self-extracting compressor for C64-family machines, not a music tool",
    "https://csdb.dk/release/?id=6089 — CSDb release entry 'PuCrunch', category 'Other Platform C64 Tool', credited to scener 'Albert' (Pu-239), dated 2002-03-08 — fills the csdb_release gap (tool provenance, not a music release)",
    "https://csdb.dk/scener/?id=3981 — CSDb scener page for 'Albert', founder of Pu-239, country Finland, functions Coder/Graphician — corroborates 'Albert' as PUCrunch author Pasi Ojala's scene handle",
    "https://csdb.dk/sid/?id=14753 (via scripts/lib/csdb-client.js getSidRelease) — the single tagged SID's own CSDb entry: 'Crazy Sue (unused)' by Gerard Hultink, Released '1994-96 Gerard Hultink'; PSID header metadata only (Load $0800/Init $20C0/Play $20C3), not written into this card's Tier 3 fields per EXTRACTION-TEMPLATE.md",
    "knowledge/players/basic-program.md — precedent card establishing the 'documented exclusion, not a tool card' pattern this card follows",
    "knowledge/players/crunched-exomizer.md — sibling exclusion card for the same 'Crunched:' Player-ID prefix convention"
  ]
}
```

## Overview

**`Crunched:PUCrunch` is not a player and gets no player research.** It is
Player-ID's signature for a SID file whose payload has been compressed with
**PUCrunch**, a general-purpose C64/C128/VIC-20/Plus4 data compression program
(hybrid LZ77+RLE, Elias Gamma-coded offsets/lengths) written by Pasi Ojala,
first released in 1997. PUCrunch is a self-extracting *depacker stub* used to
shrink arbitrary programs or data — games, intros, or a SID's own payload —
not a sound-chip replay routine. This card is a documented exclusion, following
the precedent set by `knowledge/players/basic-program.md`: it records the
determination and, via its `aliases`, removes the tag from the uncarded-player
backlog.

The tag is vanishingly thin in this project's own data: it appears exactly
once, in `knowledge/COVERAGE.md`'s raw-tag ranking (1 file) — a 2026-08-01
census confirms that single occurrence is `data/composers/gerard-hultink.json`
(`Crazy_Sue_unused.sid`, CSDb SID id 14753), and `data/sidid.json` has **no**
byTag entry for it — no SIDId player-routine signature exists to research. A
sibling tag, `Crunched:Exomizer` (2 files), shows the same `Crunched:` prefix
convention with a different well-known cruncher, corroborating that this is a
packer-signature naming scheme, not a music-tool family.

The card's two recorded gaps, `authors` and `csdb_release`, are filled from
the PUCrunch *tool's* own provenance, not from the tagged music file: the
author is Pasi Ojala (GitHub handle context, contact `a1bert@iki.fi`, first
version 1997-03-14), scene handle "Albert", and CSDb carries a release entry
for the tool itself — `https://csdb.dk/release/?id=6089` ("PuCrunch", Other
Platform C64 Tool, credited to scener Albert/Pu-239, dated 2002-03-08, a later
archival upload, not an original release date).

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a **packer/compressor signature,
treated as a permanent exclusion** — do not research or card a "PUCrunch
player," because none exists. The only meaningful future work would be
per-file (unwrap the depacker on the single tagged SID and identify whatever
music routine its decompressed payload actually contains), not tool-level.

## Disassembly notes

None, and none applicable at the tool level — PUCrunch's own depacker is a
well-documented, publicly-sourced general compressor (see sources), not a SID
player, so there is no player routine here to disassemble.

## Verification

**Not a player — no verification applies.** The claim this card makes is a
*classification* claim (that `Crunched:PUCrunch` marks packed data via a known
public compressor, not a music tool), supported by the tag's total absence
from `data/composers/*.json`/`data/sidid.json` and by PUCrunch's own public
documentation. `status` is left `stub` only because the card schema requires a
status field; it should not be read as "a player awaiting further research."

## Sources

See the `sources` array — `knowledge/COVERAGE.md`'s raw-tag ranking, the
confirmed absence from local composer/SIDId data, PUCrunch's public source
repository and author documentation, and the `basic-program.md` precedent for
this exclusion-card pattern.
