# Sequencer

```json
{
  "id": "sequencer",
  "name": "Sequencer",
  "aliases": ["Sequencer"],
  "authors": ["Thomas Krätzig"],
  "released": "1985 64'er/Markt & Technik",
  "status": "stub",
  "platform": "Native C64 tool. CSDb release 129802 — the same release SIDId's sidid.nfo cites as this tag's REFERENCE — is categorized by CSDb as a \"C64 Tool\" (title \"Modulator [german]\", 1985, code by Thomas Krätzig), consistent with the '64'er/Markt & Technik' magazine credit (64'er was a German type-in-listing magazine of that era). No independently-titled \"Sequencer\" release exists on CSDb; see quirks.",
  "csdb_release": 129802,

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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's sidid.nfo gives a full record for this tag: NAME 'Sequencer', AUTHOR 'Thomas Krätzig', RELEASED '1985 64'er/Markt & Technik', REFERENCE CSDb release 129802 — the most complete SIDId record in this batch, and a NAME field, which is a signal (per this project's convention) that it WAS packaged/published as a titled tool, likely a magazine type-in listing (the '64'er/Markt & Technik' publisher is a well-known German C64 computer magazine of that era), not a personal in-house routine.",
    "REFERENCE mismatch, verified against sidid.nfo directly: CSDb release 129802 is titled 'Modulator [german]', NOT 'Sequencer' — and sidid.nfo's OWN 'Modulator' tag entry (used for the composer's other file, Quiwi.sid) cites the identical REFERENCE (129802), same AUTHOR, same RELEASED string. So SIDId points two distinct detection signatures ('Sequencer' and 'Modulator') at one shared CSDb release/publication rather than two separately-titled ones. Thomas Krätzig's only two CSDb scener credits are 'Modulator [german]' (release 129802, Tool, 1985, code) and 'The Great Sadist' (release 213432, One-File Demo, 1987, music) — no CSDb release titled 'Sequencer' exists. Read literally: 'Sequencer' and 'Modulator' are most plausibly two named routines/modes bundled in the single 1985 64'er tool release, not two independent programs.",
    "Do NOT conflate with the differently-named, differently-ranked SIDId tag 'Visac_Sequencer' (knowledge/COVERAGE.md rank 94, 2 files) — a separate signature, not investigated as part of this batch.",
    "Single-file, single-composer locally: the one tagged file ('Kobold') is by Thomas Krätzig himself (Germany, HVSC 'PRO' composer, affiliation '64er', active 1986 — data/composers/thomas-kraetzig.json), i.e. the tool's own author is also its sole locally-archived user."
  ],
  "sources": [
    "SIDId sidid.nfo (raw, both 'Sequencer' and 'Modulator' entries checked verbatim): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "SIDId REFERENCE — CSDb release 129802, titled 'Modulator [german]', C64 Tool, 1985, code by Thomas Krätzig: https://csdb.dk/release/?id=129802",
    "CSDb SID entry for 'Kobold' (id 53126) — Released '1985 64'er/Markt & Technik', load $C47B, play $C538, used in 'The Great Sadist' (1987, release 213432): https://csdb.dk/sid/?id=53126",
    "Local dataset: 1 file tagged Sequencer ('Kobold'), by composer 'Thomas Krätzig' — data/composers/thomas-kraetzig.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Thomas Krätzig (Germany, affiliation 64er) — lists only two release credits, 'Modulator [german]' (129802) and 'The Great Sadist' (213432): https://csdb.dk/scener/?id=26412"
  ]
}
```

## Overview

Sequencer is a SIDId Player-ID tag with the fullest SIDId record in this
batch — NAME "Sequencer", AUTHOR **Thomas Krätzig**, RELEASED "1985
64'er/Markt & Technik", and a CSDb REFERENCE (129802). The publisher
credit points to the German computer magazine **64'er** (Markt & Technik),
suggesting this was a published type-in listing rather than a personal
in-house routine — the presence of a NAME field is itself signal per this
project's convention. CSDb categorizes release 129802 itself as a native
"C64 Tool", supporting `platform`. Locally it appears in only **1 file**,
"Kobold", by Thomas Krätzig himself (data/composers/thomas-kraetzig.json) —
the sole tagged file was fully censused, not sampled.

Provenance research surfaced a genuine mismatch: CSDb release 129802 is
titled **"Modulator [german]"**, not "Sequencer" — and sidid.nfo's separate
"Modulator" tag entry (used for the same composer's other file, Quiwi.sid)
cites the *identical* REFERENCE, AUTHOR, and RELEASED string. Thomas
Krätzig's only two CSDb release credits are "Modulator [german]" (129802)
and "The Great Sadist" (213432, a 1987 demo he contributed music to) — no
release titled "Sequencer" exists on CSDb. The most defensible reading is
that "Sequencer" and "Modulator" are two named routines/modes within the
one 1985 64'er tool release, not two separately-published programs.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) fullest SIDId record in this
batch, suggesting a published tool/listing, not a personal routine; (2) do
not conflate with the separate, differently-ranked tag "Visac_Sequencer";
(3) single-file usage, by the credited author himself; (4) the
"Sequencer"/"Modulator" tag pair shares one CSDb reference (129802,
titled "Modulator [german]") — treat them as two signatures for one 1985
64'er tool release, not evidence of two distinct programs.

## Disassembly notes

None done here. The CSDb release page (129802) and the "Kobold" SID entry
(id 53126) were read for identity/provenance only (title, author, release
type, PSID load/init/play header values recorded in `quirks`, not in
Tier 3) — no disassembly was performed. All Tier 3 fields remain `TODO`.

## Verification

Not verified. Seeded from `data/composers/thomas-kraetzig.json`,
`data/sidid.json`, the raw `sidid.nfo`, and the CSDb release/SID/scener
pages (129802, 53126, 26412). `status: stub` (unchanged — Tier 1/2
provenance only, no Tier 3 evidence found).

## Sources

See the `sources` array — SIDId sidid.nfo (fully populated), the CSDb
release page for 129802, and the local composer aggregation.
