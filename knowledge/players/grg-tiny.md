# GRG Tiny (v1-v4)

```json
{
  "id": "grg-tiny",
  "name": "GRG Tiny",
  "aliases": ["GRG_tiny_1", "GRG_tiny_2", "GRG_tiny_3", "GRG_tiny_4"],
  "authors": ["Glenn Rune Gallefoss (GRG / 6R6)"],
  "released": "TODO: no fixed release date found. Local dataset spans GRG_tiny_1 tunes dated 2006 ('Lightforce 2006') through GRG_tiny_4 tunes dated 2025 ('N0s Intro 84', CSDb sid id 65178) — roughly two decades of personal use/iteration, not a single publication date.",
  "status": "stub",
  "platform": "Native C64 personal/in-house replay routine. No CSDb tool release, manual, or public source found for 'GRG Tiny' as a named program — unlike his other, actually-published tool (SID Duzz' It).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not published; per-file PSID load addresses vary by rip (e.g. one representative file loads at $6600, but that is a single rip's relocation, not a documented fixed engine address)",
    "zero_page": "TODO: no disassembly done here",
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
    "100% personal: all 43 files across GRG_tiny_1..4 (and the separate bare 'GRG' tag's 11 files) belong to a single composer, Glenn Gallefoss himself — no other musician in the collection uses this signature. Strong signal this is a private/in-house routine, not a shared editor (data/composers/glenn-gallefoss.json).",
    "No CSDb release, manual, or public source was found for 'GRG Tiny' as a named tool — searched CSDb and the open web directly. Contrast with the same author's actually-published, credited tool SID Duzz' It (see sidduzzit.md, CSDb release 7175) — GRG Tiny appears to be a separate, unpublished personal routine, not a rebrand of SDI.",
    "COVERAGE.md's own raw-tag grouping already merges GRG_tiny_1/2/3/4 into one family (43 files) — this card follows that grouping. The plain 'GRG' tag (11 files, also 100% Gallefoss) is Tier-1-evident but was deliberately left OUT of this card: HVSC's Prg2Sid ripping-tool changelog (December 2022 update) documents 'GRG Tiny4' as a newly-identified signature, but does NOT mention a separate 'GRG' entry anywhere in that changelog (checked directly) — so no source found during this pass confirms whether the two tags are the same underlying code or genuinely distinct signatures. Treat bare GRG as an unconfirmed lead for a future card, not pre-merged here.",
    "RESOLVED in a later pass: written up as its own card, knowledge/players/grg.md. SIDId's actual signature-matching config (sidid.cfg, not just the author-only .nfo index checked here) shows GRG's three byte-pattern signatures share no bytes with any of GRG_tiny_1..4's four signatures — genuinely different code, not a relocated copy of the same routine. Kept as a separate card rather than merged in as a fifth alias. That card also found the two tags' usage windows overlap almost entirely (bare GRG: CSDb dates 1999-2022; GRG Tiny: 2006-2025) rather than one preceding the other, with several same-era file pairs (adjacent CSDb ids, near-identical titles) appearing under both tags — consistent with Gallefoss using both routines side by side.",
    "Versioned over a long span: dataset dates suggest GRG_tiny_1 tunes go back to at least 2006 ('Lightforce 2006') while GRG_tiny_4 is still being used in 2025 ('N0s Intro 84' for Nostalgia, https://csdb.dk/sid/?id=65178) — a personal routine iterated across roughly two decades, not a single dated release.",
    "Many GRG_tiny-tagged titles are 'N0s Intro NN' (N0s Intro, N0s Intro 83/84/85, N0s TapeCart Intro) — the tag correlates with his intro/demo output for the group Nostalgia, consistent with a compact in-house routine rather than a general-purpose tracker.",
    "Gallefoss has two other, real connections to published C64 music tools worth knowing but NOT asserted as edges here (no source/header ties GRG Tiny's code to either): he co-authored SID Duzz' It with Geir Tjelta (knowledge/players/sidduzzit.md), and DeepSID's own players.json credits him (as '6R6') as a co-developer of Digitalizer alongside Olav Mørkrid (knowledge/players/digitalizer.md, data/players.json). Do not infer a derives_from link from name or author overlap alone — none of these sources states GRG Tiny shares code with either.",
    "Re-researched (later pass, no new tool/source found): explicit site-restricted-style searches for 'GRG Tiny'/'Glenn Rune Gallefoss' on Lemon64 (lemon64.com) and Forum64 (forum64.de) turned up no thread naming 'GRG Tiny' as a program — only unrelated hits (Lemon64 threads about SID Duzz' It's bundled demo tunes and about a *different* 'GRG' contributing 1541 Ultimate II support to the Sidplay64 hardware-playback frontend, sourceforge.net/p/sidplay64/wiki/Home/ — a SID-collection playback tool, not a replay routine embedded in .sid files, and not confirmed to be the same Gallefoss). Also checked WilfredC64/player-id (github.com/WilfredC64/player-id), a second independent player-signature-ID tool alongside cadaver/sidid — its README credits signature authors Wilfred Bos, iAN CooG, Professor Chaos, Cadaver, Ninja, Ice00 and Yodelking but surfaced no 'GRG'/'GRG_tiny'/'Gallefoss' mention differing from cadaver/sidid. Re-checked Gallefoss's CSDb scener page directly (csdb.dk/scener/?id=8098): lists only music/graphics releases (e.g. 'Hyperdrift' 2020, 'Room with a View' 2011 graphics) under his 6R6/GRG handles, no tool/utility release matching 'GRG Tiny' — consistent with, not new evidence beyond, the original pass's finding. Status remains stub; no public source or documentation exists to promote it."
  ],
  "sources": [
    "SIDId sidid.nfo entries for GRG_tiny_1/_2/_3/_4 and GRG (author field only, no dates/reference/comment for any of the five tags): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: data/composers/glenn-gallefoss.json (per-file player tags, all 5 GRG* tags used only by this one composer, 43 files across GRG_tiny_1..4)",
    "HVSC Update 80 / December 2022 news (Prg2Sid 1.08 changelog: 'GRG Tiny4' listed as a newly identified player signature; no separate 'GRG' entry appears anywhere in this changelog, checked directly): https://www.hvsc.c64.org/download/files/news/20221223.txt",
    "HVSC Update 81 / June 2024 news (Prg2Sid 1.20 changelog, re-checked this pass: 'GRG Tiny4: Workaround to support more variants.' — a signature-matching refinement, not a new tool release): https://hvsc.c64.org/download/files/news/20240630.txt",
    "CSDb SID entry, GRG_tiny_4 tune 'N0s Intro 84' (2025, group Nostalgia): https://csdb.dk/sid/?id=65178",
    "CSDb SID entry, GRG_tiny_1 tune 'Delta Ingame': https://csdb.dk/sid/?id=2704",
    "Scener identity (Glenn Rune Gallefoss aka GRG / 6R6, Bergen, Norway; groups incl. Nostalgia, SHAPE, Blues Muz'): https://demozoo.org/sceners/948/ ; https://csdb.dk/sid/?id=2754",
    "CSDb scener profile, re-checked this pass for any tool/utility release matching 'GRG Tiny' (none found, music/graphics releases only): https://csdb.dk/scener/?id=8098",
    "Lemon64 (lemon64.com) and Forum64 (forum64.de) searched this pass for 'GRG Tiny'/'Glenn Rune Gallefoss' as a named program — no matching thread found; one unrelated Lemon64/Sidplay64 hit noted in quirks but not treated as evidence about this routine",
    "WilfredC64/player-id, a second independent SID player-signature database, checked this pass for a 'GRG'/'GRG_tiny' entry differing from cadaver/sidid (none found): https://github.com/WilfredC64/player-id",
    "Cross-reference only (not an asserted edge): knowledge/players/sidduzzit.md (SID Duzz' It, Gallefoss co-author), knowledge/players/digitalizer.md and data/players.json (Digitalizer, Gallefoss/'6R6' credited as co-developer)"
  ]
}
```

## Overview

GRG Tiny is a personal, unpublished C64 replay routine used exclusively by its
author, Norwegian musician/coder **Glenn Rune Gallefoss** (handle GRG, also
seen as 6R6), across four SIDId-distinguished variants (`GRG_tiny_1`
through `GRG_tiny_4`). Every one of the 43 files tagged with these four
signatures — and the 11 files tagged with the separate, undated `GRG` tag —
belongs to this one composer; nobody else in the collection uses it. Unlike
Gallefoss's other, genuinely published work (he co-authored the tracker
**SID Duzz' It** and is credited as a co-developer of **Digitalizer**), no
CSDb release, manual, or public source was found for "GRG Tiny" as a named
program, so this reads as an in-house routine he kept refining over roughly
two decades (dataset evidence spans 2006 to 2025) rather than a released tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: this is **100% one composer**
(the strongest "personal routine" signal in the project's own concentration
heuristic); **no tool release/manual exists** for it despite a real search;
the four `_1`..`_4` tags were merged into one family here because
`knowledge/COVERAGE.md` already groups them that way, while the **separate
bare `GRG` tag was deliberately left out and is now its own card**,
`knowledge/players/grg.md` — SIDId's raw `sidid.cfg` signature bytes (not
just the author-only `.nfo` index checked in this card's original pass)
show `GRG` and `GRG_tiny_1..4` share no byte patterns, i.e. genuinely
different code, resolving the open question this card originally left
unconfirmed. And: despite Gallefoss's real credits on SID Duzz' It
and Digitalizer, **no source ties GRG Tiny's code to either** — that
would-be edge is deliberately NOT asserted.

## Disassembly notes

None done here. No public source or manual was located, so any memory
map/entry-point/format facts would have to come from disassembling a
representative `.sid` (e.g. the GRG_tiny_4 file behind CSDb sid id 65178) and
tracing it via `sidm2-siddump` — not attempted in this pass.

## Verification

**Not verified — `status: stub`, identity/provenance only.** Confirmed:
single-author/single-composer usage (local dataset) and the absence of a public
tool release (CSDb/web search). Whether the separate bare `GRG` tag shares code
with `GRG Tiny4` was originally left unconfirmed here — HVSC's Prg2Sid changelog
documents only `GRG Tiny4`, not a separate `GRG` entry — but is now resolved in
`knowledge/players/grg.md`: SIDId's `sidid.cfg` signature bytes show the two are
genuinely distinct code, not a shared/relocated routine. Every runtime field
(memory map, entry points, speed model, data/effect format) is `TODO` because
no source or disassembly was consulted for the actual code.

**Re-researched (this pass):** explicit Lemon64 and Forum64 searches, a
second independent signature database (WilfredC64/player-id), a re-check of
Gallefoss's CSDb scener page, and HVSC's June 2024 news file all turned up
nothing beyond what the prior pass already found — no tool release, manual,
or source for "GRG Tiny" exists publicly. Status correctly stays `stub`.

## Sources

See the `sources` array — SIDId's five bare author-only entries, this
project's own `COVERAGE.md` grouping and per-composer dataset, two HVSC news
changelog entries documenting `GRG Tiny4`'s signature identification/refinement
(with no separate `GRG` entry found in either), two
CSDb SID entries used to bound the usage timeline, Gallefoss's scener
identity and profile (re-checked this pass), and this pass's explicit
Lemon64/Forum64/WilfredC64-player-id checks (all negative). The related
`sidduzzit.md`/`digitalizer.md` cards are cited only as cross-reference
context, not as an asserted lineage edge.
