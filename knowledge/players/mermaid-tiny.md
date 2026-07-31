# Mermaid Tiny

```json
{
  "id": "mermaid-tiny",
  "name": "Mermaid Tiny",
  "aliases": ["Mermaid_tiny"],
  "authors": ["Vanja Utne (Mermaid)"],
  "released": "TODO: no fixed release date / no dedicated tool release found. Full census of all 8 'Mermaid_tiny'-tagged files' own CSDb `Released` fields (via csdb.dk webservice, not tune titles or UsedIn release years): 7 of 8 dated 2016 — Attack of the Mutant Cabbages (id 53750), Bonkey Kong (53752), DOG (53754), Goblin! (53749), Goblin! (note) (53744), Super Ski (53746), Winky Blinky (53753) — and 1 dated 2018, Chef Quest (56011). Confirms the prior partial-sample range of 2016-2018 now via a full 8/8 census — a personal routine used across at least 2-3 years, not a single dated publication.",
  "status": "stub",
  "platform": "Native C64 personal/in-house replay routine, hand-assembled per tune. No CSDb tool/release page, manual, or public source found for 'Mermaid Tiny' as a named program (direct CSDb search for \"mermaid tiny\" returns no results).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no fixed engine address — every sampled file's PSID header loads at $1000 (5 of 5 checked: csdb.dk/sid/?id=53744, 53750, 53752, 53754, 56011), but that is each rip's own load point, not a documented shared library address.",
    "zero_page": "TODO: no disassembly done here",
    "layout": "TODO: no disassembly done here"
  },
  "entry": {
    "init": "TODO: varies per file, read from each .sid's PSID header, not a fixed constant — e.g. $1202 (Attack of the Mutant Cabbages), $11A7 (Bonkey Kong), $1000 (Goblin! (note); DOG), $10E1 (Chef Quest). Sources: csdb.dk/sid/?id=53750, 53752, 53744, 53754, 56011.",
    "play": "TODO: varies per file likewise — e.g. $1131 (Attack of the Mutant Cabbages), $10B1 (Bonkey Kong), $1003 (Goblin! (note); DOG), $105A (Chef Quest). Same CSDb sources as init."
  },
  "speed": "TODO: no disassembly done here",

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
    "100% personal: every one of the 8 files tagged 'Mermaid_tiny' in the local dataset belongs to a single composer, Vanja Utne (Mermaid) herself — no other musician in the collection uses this signature (data/composers/mermaid.json). Same 'strong personal/small-scene routine' signal as grg-tiny.md and 4-Mat_tiny (knowledge/COVERAGE.md #16).",
    "No entry in SIDId's sidid.nfo for the tag 'Mermaid_tiny' (checked data/sidid.json's byTag, no match, case-insensitive) — unlike ~247 other inferred players, this one has no author/date/reference/comment enrichment from SIDId at all.",
    "Genuinely tiny data: PSID data sizes on the sampled files range from 283 bytes (Chef Quest) to 1186 bytes (DOG, which packs 2 subtunes for a 2016 4K-intro-scene game also called 'Dog') — consistent with the '_tiny' naming convention seen elsewhere in this dataset (cf. 4-Mat_tiny) denoting a composer's own minimal/compact routine, likely built for size-limited scene productions (4K intros, tiny loaders) rather than general composing.",
    "Load address is $1000 on every sampled file, but init/play vary per file ($1202/$1131 down to $1000/$1003) — this looks like a hand-assembled routine re-laid-out per tune rather than a fixed shared library called at a constant address. Do not read the $1000 load address as a canonical 'engine' address; it is simply the common PSID default load point.",
    "Vanja Utne is documented as both a coder and musician: her own GFXZone interview states 'Coding on the C64 and making music on the C64 and Amiga' as her activities, and her CSDb scener profile (id 19) credits her as a member of Genesis Project (since 2011) with a general 'coder' credit — but no source checked specifically names her an intro coder for that group, so that narrower claim is not asserted. The broader coder+musician fact is consistent with her having hand-written her own compact player rather than using a published tracker for these specific tiny productions. Her other/main output uses published tools instead: GoatTracker, DMC, John Player, NinjaTracker, Music Assembler, Power_Music all appear elsewhere in the same composer's file list (data/composers/mermaid.json).",
    "CSDb shows two separate scener profiles that both resolve to this same person's tunes: csdb.dk/scener/?id=19 ('Mermaid/Genesis Project/Vision', the id cached in data/composers/mermaid.json's profile) and csdb.dk/scener/?id=28260 ('Vanja Utne/Pond/Privy Software') — the Mermaid_tiny-tagged tunes checked here are credited under the Pond/Privy Software releases. Not resolved further in this pass; noted so a future pass doesn't re-derive it from scratch.",
    "Full census (all 8/8 tagged files, up from the prior pass's 5/8) confirms rather than corrects the 2016-2018 release-year range: the 3 previously unchecked files (Goblin! id 53749, Super Ski id 53746, Winky Blinky id 53753) are all dated 2016 via their own CSDb `Released` field, same as the earlier-checked majority. Per-file PSID init/play addresses for these three, also gathered in this pass: Goblin! init $1200/play $1203; Super Ski init $136A/play $1227; Winky Blinky init $11D1/play $1109 — all still load at $1000, consistent with the already-recorded per-file-varying pattern.",
    "A repeat web search targeting Lemon64 and Forum64 by name (per the extraction template's Tier 2 checklist) turned up no dedicated 'Mermaid Tiny' tool/driver page or technical discussion on either forum — only composer-identity results (a Lemon64 games list, a 'famous female SID composer' thread mentioning her, her CSDb scener page). This reinforces rather than newly establishes the 'no public source/tool page' conclusion already in `platform`."
  ],
  "sources": [
    "Local dataset: data/composers/mermaid.json (per-file player tags; all 8 'Mermaid_tiny' files belong to this one composer)",
    "knowledge/COVERAGE.md #27: Mermaid_tiny, 8 files, no public source flagged",
    "data/sidid.json byTag: checked, no entry for 'Mermaid_tiny' (no author/date/reference/comment available from SIDId for this tag)",
    "CSDb SID entries used for PSID header facts (load/init/play/size/date/group), all 8/8 tagged files fetched directly via csdb.dk's XML webservice (scripts/lib/csdb-client.js, type=sid): https://csdb.dk/sid/?id=53750 (Attack of the Mutant Cabbages), https://csdb.dk/sid/?id=53752 (Bonkey Kong), https://csdb.dk/sid/?id=53754 (DOG), https://csdb.dk/sid/?id=53749 (Goblin!), https://csdb.dk/sid/?id=53744 (Goblin! (note)), https://csdb.dk/sid/?id=53746 (Super Ski), https://csdb.dk/sid/?id=53753 (Winky Blinky), https://csdb.dk/sid/?id=56011 (Chef Quest)",
    "CSDb search for a dedicated tool/release page: https://csdb.dk/search/?seinsel=all&search=mermaid+tiny — no results",
    "Vanja Utne (Mermaid) scener identity and coding background: https://gfxzone.planet-d.net/interviews/mermaid/mermaid-interview_01.html ; https://csdb.dk/scener/?id=19 ; https://csdb.dk/scener/?id=28260",
    "Repeat web search (2026-07-31 gap-fill pass) explicitly targeting Lemon64/Forum64 for any 'Mermaid Tiny' technical page: no dedicated tool/driver page found on either forum; only composer-identity hits (https://www.lemon64.com/games/list.php?list_individual=vanja-utne ; https://www.lemon64.com/forum/viewtopic.php?t=72635 'Any famous female SID composer?')"
  ]
}
```

## Overview

Mermaid Tiny is a personal, unpublished C64 replay routine used exclusively by
its author, Norwegian musician/coder **Vanja Utne** (handle Mermaid, groups
including Genesis Project, Pond, and Privy Software). All 8 files in the local
dataset tagged `Mermaid_tiny` belong to this one composer (data/composers/mermaid.json);
nobody else in the collection uses the signature. Utne is documented as a coder
as well as a musician, and her broader output uses published tools (GoatTracker,
DMC, John Player, NinjaTracker, Music Assembler) — this tag instead covers a
handful of very small, size-constrained tunes (283-1186 bytes of PSID data,
including a 4K-intro soundtrack) consistent with a hand-assembled, compact
in-house routine rather than a general tracker. No CSDb tool/release page,
manual, or public source was found for "Mermaid Tiny" as a named program (a
repeat search of Lemon64 and Forum64 by name, in addition to CSDb, confirms
this), and SIDId's `sidid.nfo` has no entry for the tag at all. All 8/8 tagged
files are now censused (up from 5/8): CSDb's own `Released` field on each
gives 7 files dated 2016 and 1 (Chef Quest) dated 2018 — the earlier partial
sample's 2016-2018 range holds, now on a full census rather than a majority
sample.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: **100% one composer** (the
project's strongest "personal routine" signal); **no SIDId entry** exists for
this tag, unusual among the inferred players; PSID **load address is a
consistent $1000** across every sampled file but **init/play addresses vary
per tune**, meaning this reads as a routine re-assembled per production, not a
fixed shared library; and Utne's own coding background (a stated C64 coder per her own interview,
and a "coder" credit on her Genesis Project scener profile, though no source
checked specifically confirms an intro-coding role) plausibly explains why a
size-constrained tune would get a custom routine instead of a general
tracker's replay.

## Disassembly notes

None done here. No public source or manual was located, so any memory
map/entry-point/format facts beyond the raw PSID header addresses already
cited would require disassembling a representative `.sid` (e.g. the "DOG"
tune behind csdb.dk/sid/?id=53754, the largest sample at 1186 bytes) and
tracing it via `sidm2-siddump` — not attempted in this pass.

## Verification

**Not verified — `status: stub`, identity/provenance only.** Confirmed:
single-composer usage (local dataset), the absence of any SIDId enrichment or
CSDb tool release for the tag, and per-file PSID header addresses (load/init/
play) plus each file's own CSDb `Released` field, pulled directly from CSDb's
SID entries for all eight of the eight tagged files (a full census, gap-filled
in this pass from the prior 5/8 partial sample — the 2016-2018 range and the
"no dedicated tool page" conclusion both held).
Every deeper runtime field (zero page, data layout, speed model, data/effect
format) is `TODO` because no source or disassembly was consulted for the
actual code — the varying init/play addresses across files also mean there is
no single "entry point" to record even if disassembled, only per-file facts.

## Sources

See the `sources` array — the local per-composer dataset, `COVERAGE.md`'s
family grouping, a checked-and-empty SIDId lookup, five CSDb SID entries used
for PSID header facts, a CSDb search confirming no dedicated tool/release page
exists, and Vanja Utne's scener identity/interview establishing her as both
coder and musician.
