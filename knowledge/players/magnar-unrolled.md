# Magnar / Unrolled

```json
{
  "id": "magnar-unrolled",
  "name": "Magnar / Unrolled",
  "aliases": ["Magnar/Unrolled"],
  "authors": ["CRT (Canada/Sweden, CSDb scener 4221) — per the release's own credits/comments, CRT wrote the SID player used for this piece; 'Magnar' in the tag names the composer (Magnar Harestad), not necessarily the routine's coder"],
  "released": "TODO: not a named/dated tool release. Both of the 2 tagged files are the NTSC/PAL captures of one single production, 'Cherry Pepsi' in the one-file demo '25 Scrollers' (CRT, released 2017-12-10 at World of Commodore 2017) — per CSDb webservice, both files' own `Released` field reads '2017 Censor Design'. This is a one-off, single-use-attested date, not a versioned tool release, so `released` stays TODO at the tool level.",
  "status": "stub",
  "platform": "Not a general-purpose tracker/tool. Per CSDb release-page comments on '25 Scrollers' (id 160807): coder CRT states 'I did write a SID player for this part... The SID was SID-sampled with simple delta compression', and Magnar Harestad's own comment confirms 'Added the SID file that was the original output for this nice intro by CRT. It had to be sampled down to 34 seconds due to rastertime restrictions inside the production.' So the 2 tagged .sid files are a register-dump/digi capture of Magnar's tune, delta-compressed and replayed by a one-off in-house routine CRT wrote specifically for this demo — not an authored music-data tracker format. 'Unrolled' plausibly describes an unrolled (straight-line, deterministic-cycle) 6502 decompression/playback loop, consistent with the demo's tight raster-timing needs, but that specific reading of the tag is not itself stated by any source found.",
  "csdb_release": null,

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
    "SIDId's sidid.nfo has NO entry for 'Magnar/Unrolled' (checked) — Player-ID-only signature.",
    "Census of both tagged files (100%, via CSDb webservice type=sid, checked 2026-08-01): csdb_id 54751 'Cherry Pepsi (NTSC)' — LoadAddr 25344 (0x6300), InitAddr 42304 (0xA540), PlayAddr 42312 (0xA548), SIDModel 8580, DataSize 17253; csdb_id 54753 'Cherry Pepsi (PAL)' — LoadAddr 29440 (0x7300), InitAddr 44576 (0xAE20), PlayAddr 44584 (0xAE28), SIDModel 8580, DataSize 15429. In both files PlayAddr = InitAddr+8, a tight, fixed offset consistent with a small, purpose-built dispatcher rather than a general tracker engine. PSID header metadata only, not a disassembly fact.",
    "Both locally tagged files are the SAME tune in two regional variants of the SAME production ('25 Scrollers', CRT, World of Commodore 2017) — 'Cherry Pepsi (NTSC)' and 'Cherry Pepsi (PAL)'. This is 1 tune / 2 encodings, not 2 independent compositions; n=1 for adoption purposes, and it is unlikely ever to be reused since the routine is a one-off capture tool for one demo part.",
    "No formal 'Code' credit is attributed to Magnar Harestad on the '25 Scrollers' release (CSDb webservice, release id 160807, depth 2) — the release's sole 'Code' credit is Handle ID 7007 'CRT' (scener id 4221, Canada/born-Sweden, functions Coder/Cracker), while Magnar Harestad is credited only as 'Music'. This directly contradicts a naive reading of the tag name as 'authored by Magnar' and was the reason `authors` was corrected away from the tag-name assumption used in the initial stub.",
    "'25 Scrollers' (csdb.dk/release/?id=160807) is a one-file demo, released 2017-12-10 by CRT at World of Commodore 2017 (Mississauga, Canada), rated 8.92; its own page comments (CRT's and Magnar's) are the direct source for the SID-sample/delta-compression description above."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Magnar/Unrolled': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Magnar/Unrolled (100% census) — csdb_id 54751 (Cherry Pepsi NTSC) and 54753 (Cherry Pepsi PAL), both under composer Magnar — see data/composers/magnar.json",
    "CSDb webservice, type=sid, both tagged files, checked 2026-08-01: https://csdb.dk/sid/?id=54751 and https://csdb.dk/sid/?id=54753 (Released field, PSID load/init/play addresses)",
    "CSDb webservice, type=release, id=160807 ('25 Scrollers'), depth=2, checked 2026-08-01: https://csdb.dk/release/?id=160807 — ReleasedBy (CRT, handle 7007 / scener 4221), Credits (Music: Magnar Harestad; Code: CRT), and page comments quoted verbatim in `platform` above",
    "CSDb scener Magnar Harestad (Sweden), tool-release check (no 'Unrolled'/SID-player tool credited): https://csdb.dk/scener/?id=16913",
    "CSDb search for 'magnar unrolled' (no results): https://csdb.dk/search/?seinsel=1&search=magnar+unrolled",
    "Lemon64 forum search attempted for 'Magnar Unrolled' (2026-08-01) — search system returned 'not permitted to use the search system' (rate-limited/blocked), no result obtained; not re-attempted this pass"
  ]
}
```

## Overview

`Magnar/Unrolled` is a raw Player-ID tag covering exactly 2 locally tagged
files (100% census), both NTSC/PAL captures of one single tune, "Cherry
Pepsi," composed by Magnar Harestad and used in the one-file demo "25
Scrollers" (CRT, released 2017-12-10, World of Commodore 2017). CSDb's own
release-page comments establish this is **not** a tracker-authored music
format: the demo's coder, credited on CSDb as "CRT" (not Magnar), states he
"did write a SID player for this part" that works by SID-sampling Magnar's
music with delta compression, and Magnar's own comment confirms the
distributed .sid files are that captured output, trimmed to 34 seconds for
raster-timing reasons. So despite the tag naming Magnar, the actual coder of
record on the release is CRT — a correction from the initial tag-name
assumption. SIDId has no entry for this tag. "Unrolled" plausibly describes
an unrolled, deterministic-cycle 6502 decompression/playback loop fitting
the demo's tight raster budget, but no source states that reading outright.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the release's own CSDb credits list
"Code: CRT" / "Music: Magnar Harestad" — the tag name is the composer, not
the coder; this is a one-off SID-sampled/delta-compressed capture routine
built for a single demo part, not a reusable tracker format; n=1 tune (two
regional encodings); PlayAddr = InitAddr+8 in both files (PSID header
metadata only).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from local data (`data/composers/magnar.json`,
`data/sidid.json`) plus a full CSDb webservice census of both tagged files
and the "25 Scrollers" release (credits, comments), checked 2026-08-01.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb webservice
census of both tagged .sid entries, the "25 Scrollers" release record
(credits + page comments), Magnar Harestad's CSDb scener page (no tool
credit), a CSDb site search, and an attempted (blocked) Lemon64 search.
