# TFMX/TimeComposer (Time-Composer V4.0)

<!--
  Player-ID / SIDId tag: "TFMX/TimeComposer" — a THIRD-PARTY demoscene editor
  for TFMX-style music on the C64, distinct from Chris Hülsbeck's own private
  "TFMX" in-game driver (see tfmx.md) and from the sibling "TFMX/MasterComposer"
  tag (Bierfront, 1990). Deliberately not merged with either — different
  SIDId author/reference and its own composer set.
-->

```json
{
  "id": "tfmx-timecomposer",
  "name": "TFMX/TimeComposer (Time-Composer V4.0)",
  "aliases": ["TFMX/TimeComposer"],
  "authors": ["Rhodan (Oliver Hoeller)"],
  "released": "1990",
  "status": "stub",
  "platform": "Native C64 6502 music editor/tool, built by the Warriors of Time group as a replacement TFMX-style editor since Chris Hülsbeck's own TFMX Editor was never released to the public (see tfmx.md).",
  "csdb_release": 199016,

  "memory": { "load_address": "TODO (no public disassembly found)", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO — no verified frame/IRQ model found",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "AUTHORSHIP DISCREPANCY (resolved during this research pass): SIDId's sidid.nfo credits 'Oliver Hoeller (Rhodan)' as author and points its `reference` field at https://csdb.dk/release/?id=62502, whose CSDb page lists releasing group 'Playboy' and type 'C64 Crack' — no 'Oliver Hoeller' or 'Rhodan' anywhere on it. This looked like a real conflict. It resolves cleanly once you notice CSDb actually holds FIVE separate 'Time-Composer V4.0' entries (ids 62502, 101891, 199016, 208646, 235874) — one is the original tool release, the rest are later cracks/re-releases by other groups. The ORIGINAL TOOL release is id=199016 ('C64 Tool' by Warriors of Time, 1990), whose credits are Code: Rhodan / Music: Matthias Steffens / Graphics: Phil — i.e. CSDb itself credits Rhodan as coder, exactly matching SIDId's author field. SIDId's `reference` link (id=62502) simply points at a crack of the tool by the 'Playboy' group rather than the original id=199016 tool release — a citation-target mistake in sidid.nfo, not a genuine authorship disagreement. Recommendation for future sidid.nfo maintenance: the reference should point at csdb.dk/release/?id=199016 instead.",
    "CSDb scener 'Rhodan' (id 6980, Germany, founder of Warriors of Time, ex-member of Defence) is credited as coder on the id=199016 tool release, matching the 'Rhodan' half of SIDId's 'Oliver Hoeller (Rhodan)' author string — but CSDb's own scener profile page does not list a real name, so 'Oliver Hoeller' as the real-name half of that credit is taken on SIDId's authority alone, not independently corroborated on CSDb.",
    "Strong corroborating evidence tying the original tool release to this dataset: id=199016's own credited demo/example music is by 'Matthias Steffens' — and Matthias Steffens is by far the dominant composer using this tag in the tracked collection (10 of 19 files, 53%), with two of his tagged titles ('Passion' and 'Timemaniac') matching the exact track names CSDb's id=199016 page names as the tool's own bundled music. This is not a coincidence — Steffens' involvement in the tool's original release plausibly explains why he authored the bulk of tunes using it afterward.",
    "Composer concentration: only 5 composers across 19 files in this dataset — Matthias Steffens (10), Dirk Wilberg/Willi (5), Matthias Deutsch (2), Rene Griebel/Bleed Into One (1), Maarten Vellinga/Warrior (1). A small, semi-personal user base typical of a demoscene tool that never reached wide adoption outside its own circle, consistent with the tool's Warriors-of-Time origin.",
    "Not one of DeepSID's curated 129 `players.json` entries — this card is seeded from the SIDId `sidid.nfo` fingerprint plus CSDb release research, with zero DeepSID spec data to check against.",
    "No public source or disassembly of the Time-Composer editor/player was found. Every runtime field below is honestly TODO.",
    "RE-RESEARCH PASS (2026-07-24, second look): targeted searches for 'Time-Composer'/'Timecomposer' + 'Rhodan'/'Warriors of Time' on lemon64.com and forum64.de (via WebSearch site: filters) found no dedicated scene-forum thread on either site — same negative result as the sibling tfmx.md card's own Lemon64/Forum64 search. Pagetable.com's '62 Reverse-Engineered C64 Assembly Listings' index (a curated list of publicly disassembled C64 programs) was also checked directly and does not include Timecomposer, Time-Composer, TFMX, or Rhodan. CSDb release id=199016's own page was re-fetched and confirms it carries no Production Notes/User Comments content and no source-code or format-documentation links — only the credits already recorded below, plus a note that no original download exists ('original release version needed - cracks available', with an external link to Pokefinder.org for a crack). No new facts changed the card; recorded here so a future pass doesn't repeat the same searches expecting a different outcome."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag.'TFMX/TimeComposer' — author 'Oliver Hoeller (Rhodan)', released '1990', reference https://csdb.dk/release/?id=62502 (no comment field)",
    "Local dataset: 19 files tagged 'TFMX/TimeComposer' across 5 composers (Matthias_Steffens x10, Willi x5, Matthias_Deutsch x2, Bleed_Into_One x1, Maarten_Vellinga x1) — data/composers/*.json aggregation",
    "CSDb release (SIDId's cited reference, a crack): https://csdb.dk/release/?id=62502 — 'Time-Composer V4.0', 1990, releasing group 'Playboy', type C64 Crack, credited coder 'Playboy' (for the crack, not the tool)",
    "CSDb release (the original tool, found via CSDb search during this pass, NOT the one SIDId links to): https://csdb.dk/release/?id=199016 — 'Time-Composer V4.0' (aka Timecomposer V4.0 / Timemagician V4.0), 1990, releasing group Warriors of Time, type C64 Tool, credits Code: Rhodan / Music: Matthias Steffens / Graphics: Phil — this is what resolves the authorship discrepancy",
    "CSDb scener (Rhodan): https://csdb.dk/scener/?id=6980 — Germany, founder of Warriors of Time, ex-member of Defence, coder+musician active 1987-1991, credited on id=199016; no real name listed on CSDb itself",
    "CSDb group (Warriors of Time): https://csdb.dk/group/?id=663 — Germany, demo/cracker group active ~1987-1991, Rhodan listed as founder",
    "CSDb search for other 'Time-Composer V4.0' entries: ids 101891 (Fantastic 4 Cracking Group crack, 1994), 208646 (Hysteric crack), 235874 (Playboy and Twins crack) — all later re-releases/cracks of the same tool, none the original",
    "VGMPF, 'TFMX Editor': https://www.vgmpf.com/Wiki/index.php?title=TFMX_Editor — establishes that the demoscene built Mastercomposer (1989/90, Bierfront) then Timecomposer (1990) as independent replacement editors because Hülsbeck's own TFMX Editor was never released; does not name Rhodan/Oliver Hoeller/Playboy",
    "Sibling card knowledge/players/tfmx.md — establishes the three-way tag split (TFMX / TFMX/MasterComposer / TFMX/TimeComposer) and records this discrepancy as an open question this card resolves",
    "Re-fetch of CSDb release id=199016 (2026-07-24 second pass): confirms no Production Notes/User Comments, no source/format documentation, download status 'original release version needed - cracks available' with an external crack link to Pokefinder.org",
    "Lemon64 (lemon64.com) and Forum64 (forum64.de) searched directly (2026-07-24 second pass) via WebSearch site: filters for 'Time-Composer'/'Rhodan'/'Warriors of Time' — no dedicated thread found on either, matching the sibling tfmx.md card's own negative result",
    "Pagetable.com, '62 Reverse-Engineered C64 Assembly Listings': https://www.pagetable.com/?p=904 — checked directly (2026-07-24); does not list a Timecomposer/Time-Composer/TFMX/Rhodan disassembly"
  ]
}
```

## Overview

The raw SIDId tag `TFMX/TimeComposer` fingerprints **Time-Composer V4.0**, a
1990 third-party C64 music editor built by the German group Warriors of Time
as a replacement for Chris Hülsbeck's own TFMX-style in-game driver (see
`tfmx.md`), whose real editor was never released outside Hülsbeck and Ramiro
Vaca. It followed an earlier attempt, Mastercomposer V1.0 (Bierfront, 1990,
CSDb release 4298 — the sibling `TFMX/MasterComposer` tag, its own uncarded
family). Only 19 files in this dataset carry the tag, spread across 5
composers, with Matthias Steffens alone accounting for just over half of
them — plausibly because Steffens supplied the tool's own bundled example
music (CSDb's release page for the original tool names his tracks "Passion"
and "Timemaniac", both of which also appear as his tagged files here).

## Quirks & gotchas

The load-bearing finding of this research pass is the **authorship
discrepancy noted in `tfmx.md`, now resolved**: SIDId's `sidid.nfo` credits
"Oliver Hoeller (Rhodan)" but links its `reference` field to a CSDb release
(id 62502) credited only to the group "Playboy" — apparently a real
conflict. It isn't one. CSDb hosts five separate "Time-Composer V4.0"
entries; id 62502 is a later *crack* of the tool by Playboy, while the
*original tool release* — a different CSDb id, 199016, not the one SIDId
links to — credits "Rhodan" as coder, matching SIDId's author field exactly.
SIDId's `reference` simply points at the wrong CSDb entry (a downstream
crack instead of the origin release). See the `quirks` array for the full
chain of evidence, including the Matthias Steffens corroboration.

## Disassembly notes

None — no public source or disassembly of the Time-Composer editor/player
was found during this research pass.

## Verification

**Not verified — `status: stub`.** All facts are SIDId/CSDb-sourced (Tier 1
+ Tier 2 only); every Tier 3 runtime field (memory map, entry points, speed
model, data format, effect encoding) is honestly `TODO` pending a real
disassembly of a representative file (e.g.
`MUSICIANS/S/Steffens_Matthias/Passion.sid`).

A second research pass (2026-07-24) re-checked Lemon64, Forum64, and CSDb
release id=199016 directly, plus pagetable.com's reverse-engineered-listings
index, looking for a public source/disassembly or additional provenance.
None was found — the card's identity/provenance facts stand as previously
established, and it correctly stays `stub` rather than advancing to
`in-progress`.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), five CSDb release pages
for the "Time-Composer V4.0" release family (the crack SIDId links to, the
original tool release that resolves the authorship question, and three later
re-cracks), the CSDb scener and group pages for Rhodan / Warriors of Time,
VGMPF's TFMX Editor article, and the sibling `tfmx.md` card that first
flagged this discrepancy as unresolved.
