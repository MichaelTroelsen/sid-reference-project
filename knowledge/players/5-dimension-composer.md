# 5 Dimension Composer

```json
{
  "id": "5-dimension-composer",
  "name": "5 Dimension Composer",
  "aliases": ["5_Dimension"],
  "authors": ["Pleite Geier"],
  "released": "1990 (CSDb release date for the editor itself, ReleaseYear field, credited Pleite Geier) — but a full census of every 5_Dimension-tagged file's own per-tune 'Released' field found one earlier attestation: 'Intro-zax' (HVSC /MUSICIANS/S/Sid_United_Artists/Intro-zax.sid, CSDb sid id 53802, author 'Michael (Sid)') carries 'Released: 1989 United Artists'. So: earliest attested use of the 5_Dimension player is 1989, one year before the editor's own credited CSDb release date; both are cited facts, not reconciled into one date. See quirks.",
  "status": "stub",
  "platform": "Native C64 tool — a scene-released music editor distributed as a tape image (.t64), not a scene-published/documented tracker with a manual. No public source code or format documentation was found. A follow-up pass specifically checked Codebase64 (the codebase64.org domain now 301-redirects to an unrelated site, huefestival.com — the wiki is gone), Lemon64 (forum search blocked without login/JS) and Forum64 (search blocked, 'not permitted to use the search system') and found nothing further; those checks are recorded as attempted-and-empty, not skipped.",
  "csdb_release": 122330,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"4 bytes ($F7-$FA)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives an aggregate play-routine cost of 'Approx 46-52 rasterlines [SD]' but no address"
  },
  "speed": "TODO: no public source/disassembly located",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 40 files across only 6 composers, heavily dominated by one — A-Man 25 (62.5%), Surtax 9, Sid_United_Artists 3, Compod 1, Goesta Feiweier 1, MHD 1. This spread (one dominant user, small total) reads as a small-scene tool that saw limited adoption beyond its immediate circle, not a widely-published tracker.",
    "DeepSID's own curated players.json description hedges the tool's origin: \"Rumor has it this editor may be related to SoundMaker 3. See SoundMaker IV for a conspicuously familiar interface.\" A CSDb release-page comment by iAN CooG (6 Oct 2013) goes further, claiming \"5dim seems related to Soundmaker3/United Artists due to common code\" and citing that A-Man used both editors (e.g. Acid_Feelin.sid tagged A-Man/5_Dimension vs Acieed_Beat.sid tagged SoundMaker_V3/UA). SIDId's own database independently credits the SAME author, 'Pleite Geier', for both the '5_Dimension' tag and the whole 'SoundMaker'/'(SoundMaker_V3)'/'(SoundMaker_V4)' tag family (released via 'United Artists') — a real corroborating data point. Despite this, no `edges` entry is asserted here: the CSDb claim is explicitly hedged ('rumor', 'seems related'), and neither claim has been checked against an actual disassembly/binary diff. A `soundmaker` card ([[soundmaker]]) now exists in this knowledge base (added after this card) and independently reaches the same conclusion — same-author corroboration only, rumor not resolved to a stated derivation, no edge asserted there either. Revisit both cards together once a disassembly/binary diff of a 5_Dimension file vs. a SoundMaker_V3/V4 file (ideally both by A-Man, who used both) is done.",
    "A second CSDb comment (by 'Fred', same thread, 6 Oct 2013) notes A-Man was already using this player/editor in 1989 — a year before the 1990 CSDb release date credited to Pleite Geier — and asks whether A-Man (rather than Pleite Geier) might actually be the editor's author. A full census (below) of every 5_Dimension-tagged file's own CSDb per-tune Released field turns up direct corroboration: 'Intro-zax' (Sid_United_Artists, csdb id 53802) is dated '1989 United Artists'. Note this is a different file from the one iAN CooG's rebuttal addresses in the same thread ('this couldn't be less than 1990 if Sextone was involved' — that comment concerns 'Pleite Geier Intro'/csdb id 841, which credits Sextone's graphics and is dated 1990; Intro-zax carries no such credit). So Fred's suspicion is not resolved but is now backed by one real dated file, not just a recollection — still left as an open provenance question, not a settled fact.",
    "Full census of every 5_Dimension-tagged file's own CSDb 'Released' field (all 40, via csdb.dk's webservice, type=sid): 34 of 40 read 1990 or 1991, matching the editor's credited 1990 release within a year either way (expected — composers kept using the editor after release); one (Intro-zax, 1989, above) predates it; the remaining outliers are later files clearly composed well after the editor's release rather than early attestations — Spy (1994), Summix (1993), Lost Future (1995), and three Surtax 'Beat Session' tunes dated '19?? Survivor' (CSDb's own placeholder for an unknown exact year, not a data gap introduced here). All 40 files also share the same InitAddr/PlayAddr pattern for the ones using the plain player (load $1000/init $1000/play $1006) with a handful of exceptions where the tune was relocated by its release (e.g. Beat Ball load $6F00/init $7F80/play $7F83) — recorded here as PSID-header metadata only, per the extraction template's rule that header addresses are not a disassembly fact and must not be written into the Tier 3 `entry`/`memory` fields.",
    "Distributed as a single scene release (a .t64 tape image on CSDb, 348 downloads at last check) rather than through any documented publishing channel; no manual, format spec, or Codebase64 article was located. Treat as effectively freeware/scene-ware — no explicit licence statement found anywhere searched."
  ],
  "sources": [
    "sidid:5_Dimension (name '5 Dimension Composer', author Pleite Geier, released '1990 Pleite Geier', reference https://csdb.dk/release/?id=122330) — data/sidid.json",
    "sidid:SoundMaker / (SoundMaker_V3) / (SoundMaker_V4) (author Pleite Geier, released 'United Artists') — data/sidid.json, cited only for the same-author corroboration noted in quirks, not as an asserted edge",
    "DeepSID players.json curated entry '5 Dimension Composer' (developer Pleite Geier, start_year 1990, csdb_id 122330, platform 'Native / C64 emulator', zero_pages '4 bytes ($F7-$FA)', cpu_time 'Approx 46-52 rasterlines [SD]', description quoting the SoundMaker-relation rumor) — data/players.json",
    "Local dataset: 40 files tagged '5_Dimension' across 6 composers (verified by aggregation of data/composers/*.json)",
    "CSDb release '5 Dimension Composer' (Pleite Geier, 1990), including credits (code: Pleite Geier; music: Misfit; graphics: Sextone) and user comments discussing the SoundMaker relation and A-Man's early (1989) use of the player: https://csdb.dk/release/?id=122330",
    "Full census, 2026-08 pass: all 40 5_Dimension-tagged files' CSDb sid entries fetched via scripts/lib/csdb-client.js (type=sid, one request per csdb_id gathered from data/composers/*.json), each file's own 'Released' field read directly — not sampled. Earliest: 'Intro-zax', https://csdb.dk/sid/?id=53802 ('Released: 1989 United Artists', HVSCPath /MUSICIANS/S/Sid_United_Artists/Intro-zax.sid).",
    "Codebase64/Lemon64/Forum64 checked this pass and found nothing: codebase64.org now 301-redirects to huefestival.com (unrelated site — the wiki is gone); Lemon64 and Forum64 forum search both refused the query without login/JS (recorded as attempted, not skipped)."
  ]
}
```

## Overview

5 Dimension Composer is a native C64 music editor credited to Pleite Geier and
released, per CSDb, in 1990, distributed as a single scene release (a .t64
tape image) rather than through any documented commercial or
tracker-community channel. A full per-file census of every 5_Dimension-tagged
file's own CSDb "Released" field (not just the editor's own release date)
found one file, "Intro-zax" (Sid_United_Artists, csdb id 53802), dated 1989 —
a year earlier than the editor's own credited release; see quirks for how
that squares with an existing CSDb-comment thread that raised the same
question. In this
project's local HVSC-derived dataset it covers only 40 files across 6
composers, and usage is heavily
concentrated in one composer, A-Man (25 of 40 files, 62.5%) — a pattern
consistent with a small-scene tool that circulated mainly within its author's
immediate circle rather than a widely-adopted published tracker. DeepSID's own
description flags an unresolved provenance question: the tool may share code
with Pleite Geier's other editor, SoundMaker (versions 3/4, released via
United Artists) — SIDId's database independently credits the same author to
both tag families, and a CSDb commenter points to specific files by the same
composer (A-Man) tagged under each player as circumstantial support — but this
remains a hedged claim, not confirmed lineage.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **small, single-
composer-dominated tool** (A-Man alone accounts for nearly two-thirds of its
usage in this dataset); its relationship to Pleite Geier's own SoundMaker
editor family is a **repeatedly-hedged rumor** (DeepSID's description, a CSDb
comment) backed by one real corroborating fact (same author credited by
SIDId for both) but not by any disassembly comparison, so no `edges` entry
was asserted; and there's an open, unresolved question on CSDb about whether
A-Man (who was using the player as early as 1989, a year before the credited
1990 release) might be the real author rather than Pleite Geier.

## Disassembly notes

None. No public source or disassembly of the 5 Dimension Composer player/
editor was located. A future pass would need to disassemble a representative
`5_Dimension`-tagged `.sid` (e.g. one of A-Man's, from its PSID header) and
trace it through `sidm2-siddump` — the only route to real memory-map/format
facts, and also the only way to actually test the SoundMaker-relation claim
(a register-write diff between a 5_Dimension file and a SoundMaker_V3/V4 file
by the same composer would be direct evidence either way).

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release, local usage stats, the hedged SoundMaker-relation
claim) are confirmed, from SIDId, DeepSID's curated `players.json`, CSDb, and
this project's own composer data. Every Tier 3 runtime field is `TODO` except
two DeepSID-sourced approximate figures (zero-page footprint, play-routine
raster cost), which are cited but not independently verified — an honest gap
rather than a guessed memory map.

A follow-up research pass re-verified every fact and found nothing new: the
40-file/6-composer breakdown was re-aggregated directly from
`data/composers/*.json` and matches exactly (A-Man 25, Surtax 9,
Sid_United_Artists 3, Compod 1, Goesta Feiweier 1, MHD 1; none of the 40
files carry a STIL.txt song-info comment); the CSDb release page
(csdb.dk/release/?id=122330) was re-fetched and its credits/comments are
unchanged from what's cited below; web searches for a public source,
disassembly, or format spec ("5 Dimension Composer" / "5_Dimension" +
disassembly/source/format) turned up nothing beyond CSDb/DeepSID/SIDId
already cited here. The one change since this card was first written: a
`soundmaker.md` card now exists — see the updated `quirks` entry — but it
independently reaches the same "hedged rumor, no edge asserted" conclusion,
so no `edges` entry is added here either. Remains a `stub`: no public source
or disassembly plainly documents a Tier 3 runtime fact.

A second follow-up pass (2026-08) closed out this card's two recorded gaps
(`released`, `platform`) by censusing every one of the 40 tagged files'
own CSDb-attested `Released` date via `scripts/lib/csdb-client.js`
(`type=sid`, per the extraction template's "census every tagged file, never
spot-check" rule) rather than trusting the editor's own 1990 release date as
a proxy for first use: one file, "Intro-zax" (csdb id 53802), is dated 1989,
directly corroborating a previously-unresolved CSDb comment (`Fred`, same
release thread) that A-Man was already using the player in 1989. This is
recorded as two separate, cited dates (editor release vs. earliest file
attestation) rather than collapsed into one, per the template's "say which
kind of date you have" rule. On `platform`: Codebase64, Lemon64, and Forum64
were each specifically checked this pass (per the tier-2 instruction to name
them explicitly) and turned up nothing — Codebase64's domain no longer hosts
the wiki, and both forums' search requires login/JS that `WebFetch` couldn't
get past. Remains a `stub`.

## Sources

See the `sources` array — SIDId's `sidid.nfo` (both the `5_Dimension` and
`SoundMaker` tag entries), DeepSID's curated `players.json` entry, this
project's local composer-file aggregate (`data/composers/*.json`,
`knowledge/COVERAGE.md`), and the CSDb release page for "5 Dimension
Composer" (id 122330), including its credits and user comments.
