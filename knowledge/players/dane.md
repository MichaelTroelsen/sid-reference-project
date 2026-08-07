# Dane (early/personal player routine, pre-2011)

```json
{
  "id": "dane",
  "name": "Dane (early/personal player routine, pre-2011)",
  "aliases": ["Dane"],
  "authors": ["Stellan Andersson (Dane) / Booze Design"],
  "released": "2004–2008 (earliest sampled files dated 29 Feb 2004; latest 25 Oct 2008 — all predate the 2011 \"JCH-Editor 3.1 + NP22-25\" release covered by dane-newplayer.md by 3–7 years)",
  "status": "stub",
  "platform": "Native C64, hand-coded player routine — NOT an editor/tracker, NOT a distributed tool. PRIMARY-SOURCE CONFIRMATION from the author: on Lemon64 thread 'SIDplayer routines' (viewtopic.php?t=26021), user 'Dane' posted 14 Feb 2008 15:01 UTC: 'Why do you ask? The best player is always custom made for your needs.' followed by a spec for his 'Cycle music player' (voice1: vibrato, slide, 4x pulse; voice2: filter, vibrato, slide, 4x wave+freq; voice3: vibrato, slide, 4x wave+freq; size: min $1000 bytes; <$18 [24 dec] rasterlines) — the name matches the 2004 'Cycle' demo (csdb.dk/release/?id=11959) that contains 4 of this card's 8 files (Break_the_Cycle, Live_Forever, Naiv_Loop, Round_and_Round). Given Dane's own 'custom made for your needs' framing plus the wide per-file load-address spread already logged in quirks, this was most likely a bespoke routine per production, not one player reused unchanged across all 8 files — the 2005 (Gaijin) and 2008 (Disgrace/Edge_of_Disgrace/Pseudocode) files are not confirmed to share the exact 2004 'Cycle' routine's code, only the same author's hand-coding practice. CSDb release credits corroborate hand-coded-per-demo, not a packaged tool: Dane holds a Code credit (alongside HCL) on both Cycle (2004, release 11959) and Tsunami (2005, release 17913, which carries Gaijin.sid) — the player travels embedded in the composer's own SID data rather than existing as a separate distributable tool.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed. Per-file load addresses vary widely across the 8 sampled files ($1100, $1000, $2080, $083E, $E000 — see quirks) — not evidence of a fixed player load address; consistent with a routine relocated per host demo, same pattern noted for the pre-2011 Chronicles.sid in dane-newplayer.md.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: not established",

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
    "NOT THE SAME CARD AS dane-newplayer.md, ON EVIDENCE, NOT JUST CAUTION: this card covers the bare raw tag `Dane` (8 files, data/composers/dane.json), which SIDId lists as its own signature with ONLY an `AUTHOR: Stellan Andersson (Dane)` line — no `NAME`, no `RELEASED`, no `REFERENCE`, no `COMMENT` (deepsid_dl/sidid.nfo line 270-271). Compare `(Dane_NewPlayer)` (sidid.nfo line 706-708), which has all four: NAME 'JCH-editor 3.1 + NP22-25', AUTHOR, and a CSDb REFERENCE (release 100406, 2011). SIDId's own scanner treats these as two distinct byte signatures, not two spellings of one tag.",
    "ALL 8 SAMPLED FILES PREDATE THE 2011 JCH-FORK RELEASE, AND BY A WIDE, CONSISTENT MARGIN: CSDb webservice lookups on all 8 csdb_ids in data/composers/dane.json give release dates of 29 Feb 2004 (Break_the_Cycle id 18459, Live_Forever id 18496, Naiv_Loop id 18508, Round_and_Round id 18522), 2005 (Gaijin id 18480, exact day unverified), 3 Aug 2008 (Pseudocode id 38904), and 25 Oct 2008 (Disgrace id 38901, Edge_of_Disgrace id 38902) — every file is 2004–2008, none post-2011. This is the opposite pattern from dane-newplayer.md's own tags, which straddle 2011 on both sides. Read together, the cleanest interpretation is that `Dane` is an EARLIER, pre-2011 player/coding routine Stellan Andersson used before he later built and packaged the JCH-based NewPlayer fork — not a mis-split of the same signature.",
    "CSDb's own scener profile for Dane (csdb.dk/scener/?id=435) lists his code/idea/docs credit on exactly ONE packaged tool release across his whole scene history: 'JCH-Editor 3.1 + NP22-25' (2011). His CSDb credits do also include one OTHER editor, 'JCH Editor V3.04', but in a Music (not Code) role — i.e. he's credited as a user of that earlier JCH editor, not its author. Narrowly: no OTHER tool/routine is credited to Dane as CODE author anywhere on CSDb found during this pass — the pre-2011 files were composed/played back some other way that never got named or packaged as a distributable tool by him, consistent with SIDId's sparse author-only signature entry.",
    "LOAD ADDRESSES ARE ALL OVER THE MAP, MUCH MORE SO THAN THE 2011 FORK: $1100 (Break_the_Cycle/Live_Forever, 2004 files, load 4352), $1000 (Naiv_Loop and Disgrace, load 4096), $2080 (Gaijin, load 8320), $083E (Edge_of_Disgrace, load 2110), $E000 (Pseudocode, load 57344). This spread across only 8 files strongly suggests the routine (whatever it is) gets relocated/reassembled per host demo rather than shipping as one fixed-address binary — a hand-integrated routine, not a standalone player loaded at a conventional address. Not a disassembly-confirmed conclusion, just what the header data shows.",
    "Composer concentration: 8/8 files (100%) by Stellan Andersson (Dane) alone — same 'personal routine, not a published tool' signal as the later JCH-fork tags in dane-newplayer.md, but here there is no CSDb release, no bundled docs, and no name at all, i.e. an even more purely personal/undocumented case than the packaged 2011 fork.",
    "UNCONFIRMED HYPOTHESIS, DELIBERATELY NOT ASSERTED AS AN EDGE: it is plausible this early routine is an ancestor/precursor of Dane's later JCH-based fork (same author, chronologically prior, no other tool credited to him) — but no source, manual, or disassembly states a derivation between the two, so no `edges` entry is asserted here per this project's evidence rule. Treat any lineage between `dane` and `dane-newplayer` as an open question for a future disassembly pass, not a fact.",
    "RESOLVES `platform`: Dane himself confirms 'custom made' hand-coded routines on Lemon64 (thread 'SIDplayer routines', https://www.lemon64.com/forum/viewtopic.php?t=26021, post by user 'Dane' 2008-02-14T15:01:56Z), naming his 'Cycle music player' with a per-voice feature spec (vibrato/slide/pulse/wave/filter) and giving size (min $1000 bytes) and rastertime (<$18 rasterlines) — direct author testimony, not inference. 'Cycle' matches the 2004 demo containing 4/8 of this card's files. CSDb release credits independently corroborate: Dane has a Code credit (with HCL) on both Cycle (release 11959, 2004) and Tsunami (release 17913, 2005, which used Gaijin.sid) — the player is embedded per-tune/per-demo code, never listed on CSDb as a standalone tool release, consistent with the earlier finding that his only tool/code CSDb release ever is the unrelated 2011 JCH-Editor fork.",
    "CSDb `type=release` webservice lookups (2026-07-31 pass) on the releases containing these 8 files show a mixed pattern, not one uniform player: Cycle (11959, 2004) and Tsunami (17913, 2005) are C64 Demos with Dane credited as Code; Disgrace's own release (72646, 'C64 Music' type, 25 Oct 2008) carries only a Music credit for Dane (no separate Code credit, since it's not a demo); Pseudocode.sid was used in a demo ('PseudoCode', release 69185, St LCP 2008) coded by 'Shadow', not Dane — showing the player travels with the .sid file itself regardless of which demo group's coder is credited for the wrapper demo. `csdb_release` re-confirmed still absent: no CSDb release of any kind documents a distributable 'Dane player' tool; SIDId's `Dane` tag entry (data/sidid.json) still carries no `reference` field."
  ],
  "sources": [
    "sidid:Dane — author Stellan Andersson (Dane), no name/released/reference/comment fields — data/sidid.json / deepsid_dl/sidid.nfo lines 270-271",
    "sidid:(Dane_NewPlayer) for comparison — name 'JCH-editor 3.1 + NP22-25', author, released 2011, CSDb reference 100406 — deepsid_dl/sidid.nfo lines 706-710 (see knowledge/players/dane-newplayer.md)",
    "Local dataset: data/composers/dane.json — 8 of 8 files tagged raw player `Dane`, all by Stellan Andersson (Dane), cross-checked by csdb_id",
    "CSDb webservice type=sid id=18459 'Break the Cycle' (29 Feb 2004, Booze Design, load $1100): https://csdb.dk/webservice/?type=sid&id=18459",
    "CSDb webservice type=sid id=18496 'Live Forever' (2004, Booze Design, load $1100): https://csdb.dk/webservice/?type=sid&id=18496",
    "CSDb webservice type=sid id=18508 'Naiv Loop' (29 Feb 2004, Booze Design, load $1000): https://csdb.dk/webservice/?type=sid&id=18508",
    "CSDb webservice type=sid id=18480 'Gaijin' (2005, load $2080 — exact release day not independently verified): https://csdb.dk/webservice/?type=sid&id=18480",
    "CSDb webservice type=sid id=18522 'Round and Round' (29 Feb 2004, load $1100): https://csdb.dk/webservice/?type=sid&id=18522",
    "CSDb webservice type=sid id=38901 'Disgrace' (25 Oct 2008, X'2008, load $1000): https://csdb.dk/webservice/?type=sid&id=38901",
    "CSDb webservice type=sid id=38902 'Edge of Disgrace' (25 Oct 2008, X'2008, load $083E): https://csdb.dk/webservice/?type=sid&id=38902",
    "CSDb webservice type=sid id=38904 'Pseudocode' (3 Aug 2008, St LCP 2008, load $E000): https://csdb.dk/webservice/?type=sid&id=38904",
    "CSDb scener profile, Dane/Booze Design (id 435) — only tool/code credit found is the 2011 JCH-Editor 3.1 + NP22-25 release: https://csdb.dk/scener/?id=435",
    "knowledge/COVERAGE.md (before this card existed) — family 'Dane', 8 files, rank 24, uncarded",
    "knowledge/players/dane-newplayer.md — sibling card for the 2011 JCH-based fork, used here only for date/tag contrast, not as an edge",
    "Lemon64 forum, thread 'SIDplayer routines': https://www.lemon64.com/forum/viewtopic.php?t=26021 — post by user 'Dane' (post id 310865, memberlist u=1059), 2008-02-14T15:01:56Z: 'Why do you ask? The best player is always custom made for your needs. Cycle music player: voice1: vibrato, slide, 4x pulse / voice2: filter, vibrato, slide, 4x wave+freq / voice3: vibrato, slide, 4x wave+freq / size: min $1000 bytes / <$18 rasterlines' — author's own description of the routine, resolving `platform`",
    "Same Lemon64 thread, second post by user 'Dane' (post id 313213), 2008-03-02T16:58:00Z: 'I fiddled around a bit with vibrato routines. The solution that works best for me is to have a frequency modulation table that adds $XX XX to the played note in Y frames before it jumps to position Z in the same table' — found on the 2026-08-07 drift-recheck pass, adds vibrato/slide implementation detail to the same author's platform testimony",
    "CSDb scener profile re-check (2026-08-07): https://csdb.dk/scener/?id=435 and https://csdb.dk/release/?id=100406 — confirms 2011 release credits (Code/Music/Idea/Docs, all Dane) unchanged; notes one additional Music-role (not Code) credit for Dane on 'DS/DJ-2000 mk1 Alpha' (2021, primary credit to deetsay), which does not alter the 'only one Code/tool credit' finding",
    "CSDb webservice type=release id=11959 'Cycle' (2004, Booze Design) — Code credits: HCL and Dane: https://csdb.dk/webservice/?type=release&id=11959 (HTML: https://csdb.dk/release/?id=11959)",
    "CSDb webservice type=release id=17913 'Tsunami' (2005, Booze Design, carries Gaijin.sid) — Code credits: HCL and Dane: https://csdb.dk/webservice/?type=release&id=17913",
    "CSDb webservice type=release id=72646 'Disgrace' (C64 Music release, 25 Oct 2008) — Music credit only (Dane), no Code credit: https://csdb.dk/webservice/?type=release&id=72646",
    "CSDb webservice type=release id=69185 'PseudoCode' (St LCP 2008 demo) — Code credit: Shadow (not Dane): https://csdb.dk/webservice/?type=release&id=69185",
    "Forum64 (forum64.de) searched for 'Dane'/'Stellan Andersson'/'Booze Design' player routine (2026-07-31): found one relevant thread, 'Edge of Disgrace - Booze Design' (forum64.de/wbb3/board106-szene/board216-demos-intros-gfx/26025-edge-of-disgrace-booze-design/, covers Edge_of_Disgrace.sid, one of this card's 8 files) — could not be read (HTTP 403 via WebFetch, no claude-in-chrome tools available this session), so no content from it is asserted here; a future pass with browser access should check it for player/routine detail. No other Forum64 thread naming a Dane player routine was found.",
    "UPDATE 2026-08-07 (drift recheck, no material change to any existing card field, one added technical citation from an already-cited source): re-read the same Lemon64 thread ('SIDplayer routines', https://www.lemon64.com/forum/viewtopic.php?t=26021) in full and found a SECOND relevant post by user 'Dane', post id 313213, dated Sun Mar 02 2008 16:58 UTC, not previously quoted on this card: 'I fiddled around a bit with vibrato routines. The solution that works best for me is to have a frequency modulation table that adds $XX XX to the played note in Y frames before it jumps to position Z in the same table' -- recycling the same table/code for both vibrato and slide (at the cost of table size for multiple vibrato widths), for 'precise control of frequency' at low rastertime cost. Adds mechanism-level detail to the vibrato/slide features already in the Feb 2008 'Cycle music player' spec quoted elsewhere on this card -- still author testimony about technique, not a disassembly-confirmed data format, so no Tier 3 field was touched. No replies to Dane in this thread postdate March 2008.",
    "UPDATE 2026-08-07 (drift recheck): re-checked CSDb scener profile id 435 and the 2011 release page (csdb.dk/release/?id=100406) directly -- no new tool/code release has been added for Dane since the 2026-07-31 pass, and the 2011 release's own credit list (Code, Music, Idea, Docs, all Dane) is unchanged. One additional CSDb credit exists that was not previously enumerated on this card, 'DS/DJ-2000 mk1 Alpha' (2021), but it is a Music-role credit to Dane on a tool primarily credited to 'deetsay', not a Code credit -- it does not change the card's central claim that Dane's only ever CODE/tool credit is the 2011 JCH-Editor fork. csdb_release stays null on this card (no tool release documents the pre-2011 routine); csdb_id/csdb_release namespaces re-verified unchanged. Local dataset (data/composers/dane.json, re-grepped with explicit glob \"*.json\") still shows exactly 8 entries with player value exactly \"Dane\", distinct from the many JCH_NewPlayer/JCH/Dane_NewPlayer entries logged against the same composer's other songs. No count drift; SIDId's data/sidid.json `Dane` entry is unchanged (author line only, no name/released/reference/comment)."
  ]
}
```

## Overview

The raw player tag `Dane` (8 files, all composed 2004–2008 by Stellan Andersson
"Dane" of Booze Design, HVSC path `MUSICIANS/M/Mitch_and_Dane/Dane/`) is a
**separate SIDId signature from `(Dane_NewPlayer)`/`JCH/Dane_NewPlayer`**
(covered by [`dane-newplayer.md`](dane-newplayer.md)), not another spelling of
the same tag. SIDId's entry for `Dane` carries only an author line — no
name, no CSDb reference, no release year, no technique comment — the
sparsest possible signature, and every one of the 8 sampled files predates by
years the 2011 CSDb release ("JCH-Editor 3.1 + NP22-25") that the other card
documents. Dane's own CSDb scener profile credits him with exactly one
tool/code release in his whole history, that same 2011 package — nothing
named or packaged corresponds to these earlier files. The evidence points to
this being an earlier, undocumented personal player/coding routine Dane used
before later building his JCH-based fork, rather than the same tool
mis-tagged, but no source states a derivation between the two, so no lineage
edge is asserted.

`platform` is now resolved with direct author testimony: on Lemon64 (thread
"SIDplayer routines"), Dane himself posted in 2008 that "the best player is
always custom made for your needs" and gave a spec for his "Cycle music
player" — matching the 2004 "Cycle" demo that contains 4 of these 8 files.
This is a native, hand-coded C64 routine, not an editor/tracker, and CSDb
release credits (Code credit for Dane on both the 2004 Cycle and 2005 Tsunami
demos) corroborate that it travels embedded per-tune rather than existing as
a distributable tool — consistent with `csdb_release` remaining null (no
CSDb tool/source release for this routine was found, re-checked this pass).

## Quirks & gotchas

See the `quirks` array. Load-bearing points: SIDId treats `Dane` and
`(Dane_NewPlayer)` as **distinct signatures**, not a version split (contrast
with the sibling card's `JCH/Dane_NewPlayer` vs `(Dane_NewPlayer)` split, which
*is* the same underlying tool per its own quirks); every sampled file here
predates the 2011 release cleanly (2004–2008, no overlap), unlike the
sibling card's tags which straddle 2011 on both sides; and load addresses vary
per file in a way consistent with an integrated/relocated routine rather than
a standalone distributed tool.

## Disassembly notes

None performed. No source, disk image, or documentation for a standalone
"Dane" player/tool was found on CSDb — only the individual .sid files
themselves and their CSDb metadata (load/init/play addresses, release dates).
A real disassembly would need to start from one of the 8 .sid files' player
code directly, since no distributable binary release exists to examine.

## Verification

**Not verified — `status: stub`.** Identity (author), usage (8/8 files one
composer), and chronology (all pre-2011) are confirmed from SIDId, this
project's own composer dataset, and CSDb webservice lookups on all 8 files.
`platform` is now confirmed from a direct author statement (Dane's own 2008
Lemon64 post describing his "Cycle music player" as custom-made, hand-coded)
plus corroborating CSDb Code credits — a Tier 2 provenance fact, not a
runtime fact. `csdb_release` was re-checked this pass (SIDId's `Dane` tag
entry, CSDb release credits for all 8 files' host releases) and remains
genuinely absent — no CSDb release documents this routine as a distributable
tool. No Tier 3 runtime fact (memory map, entry points, data format, effect
encoding) has been established or touched in this pass. The relationship (if
any) between this routine and the later `dane-newplayer` fork is explicitly
left as an open, unconfirmed question — not asserted as an `edges` entry —
since no source states a derivation.

## Sources

See the `sources` array — SIDId's `Dane` and `(Dane_NewPlayer)` entries
(for contrast), this project's `data/composers/dane.json`, eight individual
CSDb `type=sid` webservice lookups (one per file) for release dates and load
addresses, Dane's CSDb scener profile for his tool/code credit history, four
CSDb `type=release` webservice lookups for Code-credit corroboration
(Cycle/Tsunami/Disgrace/PseudoCode), and Dane's own 2008 Lemon64 forum posts
describing his "Cycle music player" as custom-made hand-coding (Feb 2008,
resolving `platform`) plus vibrato-routine implementation detail (Mar 2008,
found on the 2026-08-07 drift recheck of the same thread). A Forum64 thread
covering Edge_of_Disgrace remains unreadable (403, no browser tool available
this session either) and is not used as a source.

**DRIFT RECHECK 2026-08-07:** re-verified all previously-cited CSDb pages
(scener profile 435, release 100406) and the Lemon64 thread; no fact on this
card changed. One new technical detail surfaced (Dane's own March 2008 post
on vibrato-table implementation, same thread) and one non-material CSDb
credit was newly enumerated (a 2021 Music-role credit, not Code) — both
recorded above without altering `status`, `csdb_release`, or any Tier 3
field. Local file count (8/8 tagged `Dane`) and SIDId's sparse `Dane` entry
are unchanged.
