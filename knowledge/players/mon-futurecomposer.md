# MoN/FutureComposer

<!--
  Player-ID / SIDId tag: "MoN/FutureComposer" — a distinct raw tag from the
  already-carded "FutureComposer_V1.0"/"V3.x"/"V4_Packed"/"FC" family (see
  future-composer.md). Same underlying tool lineage (same CSDb release, same
  author credits), different signature match. Kept as its own card because
  knowledge/COVERAGE.md tracks it as a separate uncarded family (rank 15 as
  of original write-up; the bare tag no longer appears in COVERAGE.md at all
  now that this card covers it).

  2026-07-16: "MoN/FutureComposer/RWE" (45 files) folded in as an alias —
  same tool, no independent SIDId signature, verified by evidence (see
  quirks). "MoN/FutureComposer/Cyb2" (38 files) folded in the same day on
  the same style of evidence. "MoN/FutureComposer/TTWII" (18 files) folded
  in the same day too, same style of evidence again. Three other "/Bantam",
  "/Deenen_Digi", "/JTS" sibling tags remain separate, unmerged uncarded
  families — do not assume they belong here too without the same per-tag
  verification.
-->

```json
{
  "id": "mon-futurecomposer",
  "name": "MoN/FutureComposer",
  "aliases": ["MoN/FutureComposer", "MoN/FutureComposer/RWE", "MoN/FutureComposer/Cyb2", "MoN/FutureComposer/TTWII"],
  "authors": ["Charles Deenen (Maniacs of Noise) — player/driver", "Juha Granberg (FCS, Finnish Gold) — editor"],
  "released": "1988 (same CSDb release as future-composer.md: V1.0, id 10604, completed 13 Jun 1988, released 20 Jun 1988 by Finnish Gold)",
  "status": "stub",
  "platform": "Native C64 editor (Finnish Gold's FCS) wrapping a Maniacs of Noise replay driver — same tool family as future-composer.md. NOT the unrelated Amiga program of the same name.",
  "csdb_release": 10604,

  "memory": {
    "load_address": "TODO: not verified for files carrying this specific raw tag (see Disassembly notes — a related tag family was traced in future-composer.md, but not confirmed to be byte-identical to this signature)",
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
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["future-composer", "mon-deenen"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a SEPARATE raw Player-ID/SIDId tag from 'FutureComposer_V1.0'/'V3.x'/'V4_Packed'/'FC' (see future-composer.md, already carded, 3,398 files). Both trace to the SAME CSDb release (id 10604, 'Future Composer V1.0') and the same author credits, but they are distinct signature matches over the dataset — do not assume they are byte-identical or merge their aliases without independent verification. knowledge/COVERAGE.md's grouping script treats them as unrelated families because it only merges tags on version-suffix stripping, not on semantic/tool identity.",
    "SIDId's own author line for this tag: 'Charles Deenen made the player & Juha Granberg (FCS) made the editor' (data/sidid.json byTag['MoN/FutureComposer']) — matches future-composer.md's authorship account (Maniacs of Noise driver + Finnish Gold/FCS editor) almost verbatim.",
    "SIDId's comment: 'Editor made for the player of /MUSICIANS/T/Tel_Jeroen/Noisy_Pillars_tune_1.sid'. In THIS project's own dataset that exact file is itself tagged 'MoN/FutureComposer' (self-referential — checked directly in data/composers/jeroen-tel.json), not 'MoN/Deenen' as the mon-deenen.md card's narrative might suggest. This is flagged, not resolved: SIDId's fingerprint scanner may simply be unable to distinguish the pre-editor Noisy Pillars player from the later FCS-editor-generated code at the byte level. Kept as a conservative `shares_routine_with` edge to mon-deenen rather than `derives_from`, mirroring mon-deenen.md's own conservative choice.",
    "MERGED (2026-07-16): 'MoN/FutureComposer/RWE' (45 files) is now folded into this card's aliases. Evidence: (1) SIDId's own database (deepsid_dl/sidid.nfo, data/sidid.json byTag) has NO separate entry for 'MoN/FutureComposer/RWE' — only the bare 'MoN/FutureComposer' tag exists, same as the bare/RockMon3h precedent in rockmonitor.md; (2) one of the 45 RWE-tagged files is 'RWE_Intro.sid', authored by Charles Deenen himself (data/composers/charles-deenen.json) — Deenen is the player's own co-author, and CSDb dates the piece '1988 Maniacs of Noise/RWE' (https://csdb.dk/sid/?id=10647), same year as the V1.0 release this card documents. What 'RWE' itself denotes (a person, sub-group, or one-off release credit) is NOT resolved — websearches turned up only an unrelated 1986 German group 'Radwar' also abbreviated RWE on CSDb, which does not appear connected to Deenen/Maniacs of Noise; treated as an unconfirmed acronym, same posture as RockMon3h's unconfirmed 'h' suffix.",
    "MERGED (2026-07-16): 'MoN/FutureComposer/Cyb2' (38 files) is now folded into this card's aliases too. Evidence: (1) the current upstream cadaver/sidid `sidid.nfo` (https://github.com/cadaver/sidid/blob/master/sidid.nfo, fetched 2026-07-16) has NO separate entry for 'Cyb2' — only the bare 'MoN/FutureComposer' tag exists, same absence-of-signature pattern as the RWE merge above; (2) of Cyb2's 38 files, 6 are by Charles Deenen (the player's own co-author) and 7 by Jeroen Tel (MoN's other founder, and the tag's own reference-tune composer — see next point) — both MoN principals are present, same authorship overlap that justified the RWE merge; (3) composer spread is wide (9 composers, top user Markus Siebold at 10/38 = 26%), not a single-composer personal build, consistent with 'genuinely the same adopted tool' rather than a one-off variant.",
    "'Cyb2' is almost certainly short for 'Cybernoid II' — one of the 38 tagged files is Jeroen Tel's own 'Cybernoid II' (the 1988 Hewson game tune, CSDb SID entry id 28140: https://csdb.dk/sid/?id=28140), and a second is SounDemon's 'Vicious SID 2 - Cybernoid 2', a remix of the same piece. This mirrors the bare tag's own SIDId comment naming 'Noisy_Pillars_tune_1.sid' as ITS reference/fingerprint tune, and the RWE quirk's 'RWE_Intro.sid' — i.e. DeepSID's Player-ID scanner (finer-grained than SIDId's own tag list) appears to name each byte-level signature variant after the tune it was fingerprinted from, not after a sub-group or cracker credit. Not independently confirmed beyond this pattern-matching; flagged as the working theory, not a sourced fact.",
    "MERGED (2026-07-16): 'MoN/FutureComposer/TTWII' (18 files) is now folded into this card's aliases too. Evidence: (1) the upstream cadaver/sidid sidid.nfo (fetched 2026-07-16, https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo) has NO entry containing the string 'TTWII' — same absence-of-signature pattern as the RWE and Cyb2 merges; (2) one of the 18 TTWII-tagged files is Charles Deenen's OWN 'That's the Way It Is (intro)' (CSDb SID entry id 10653: https://csdb.dk/sid/?id=10653 — composer Charles Deenen, 1988, Scoop Designs) — Deenen is again the player's own co-author, and 'TTWII' is plainly an acronym of that file's own title, continuing the exact same 'tag names the fingerprint/reference tune' pattern already seen for RWE_Intro and Cybernoid II; (3) within the sub-tag alone, composer spread is narrow (5 composers, Defbeat leads at 11/18 = 61%) — considered against the SAME test applied to RWE (TC alone was 42/45 = 93% of that sub-tag, an even sharper concentration, yet still merged) because what matters is whether the sub-tag's concentration changes the COMBINED family's read, not the sub-tag in isolation. It does not: merged into the other three tags, TC (23.2%) remains the single biggest user and Defbeat only reaches 5.6% of the 198-file combined total — the family as a whole still reads as a broadly-adopted public tool (32 composers), not a personal routine.",
    "Three OTHER sibling raw tags still share the 'MoN/FutureComposer/' prefix with a suffix and remain UNMERGED, NOT claimed as aliases of this card — Bantam (14 files), Deenen_Digi (11), JTS (11), per knowledge/COVERAGE.md. Each is tracked as its own separate uncarded family; do not assume the RWE/Cyb2/TTWII merges above extend to these without independently checking each one's own composer/file evidence and SIDId-signature-absence first.",
    "Composer concentration (bare tag only, 97 files/24 composers): Jeroen Tel 19 (20%), Markus Schneider 15 (15%), SMC 13 (13%), Barry Leitch 6, Charles Deenen 6, TC 4 — no single composer dominated, consistent with a genuinely-adopted public tool rather than a personal routine (contrast MoN/Deenen's driver, 51% Jeroen Tel).",
    "Composer concentration CHANGES once RWE is merged in: combined 142 files across 25 composers, and TC jumps to top user at 46 files (32%) — 42 of RWE's 45 files are TC's, vs only 4 under the bare tag. This is a real shift from 'no composer dominates' toward 'one composer plus a wide long tail', but 32% is still well short of MoN/Deenen's 51%-personal-routine threshold, so the 'genuinely adopted tool' read still holds, just less cleanly than before the merge. TC's 46, Jeroen Tel's 19, Markus Schneider's 15 and SMC's 13 together are 66% of the combined total; the remaining 21 composers split the other third.",
    "Composer concentration with Cyb2 also merged in: combined 180 files across 30 composers. TC still leads at 46 (26%, entirely from RWE — Cyb2 contributes no TC files), Jeroen Tel rises to 26 (14%, 19 bare + 7 Cyb2), Markus Schneider 15 (8%), Charles Deenen 13 (7%, 6 bare + 6 Cyb2 + 1 RWE), SMC 13 (7%), Markus Siebold 11 (6%, 1 bare + 10 Cyb2 — no RWE files). The top 5 composers are 62% of the combined total; the remaining 25 composers split the rest. Overall read is unchanged: TC's RWE-driven concentration is the single biggest skew in the family, but the tool as a whole (180 files, 30 composers, several with just 1-2 files) still reads as a broadly-adopted public editor, not a personal routine.",
    "Composer concentration with TTWII also merged in (final, all four aliases combined): 198 files across 32 composers. TC:46 (23.2%), Jeroen Tel:26 (13.1%), Markus Schneider:15 (7.6%), Charles Deenen:14 (7.1%, gains 1 from TTWII), SMC:13 (6.6%), Markus Siebold:11 (5.6%), Defbeat:11 (5.6%, entirely from TTWII, a new composer to this family), Barry Leitch:6, Mad_Donne_Marcel:6, Joe:5, Francois Prijt:5 (2 RWE + 3 TTWII), Reyn Ouwehand:5, and 20 more composers with 1-4 files each. TC's share actually DROPS from 26% to 23.2% purely because the denominator grew (TTWII adds no TC files) — TTWII's own internal concentration (Defbeat 61% of that 18-file sub-tag alone) does not change the family-level read: still 32 composers, no single one over a quarter of the total, consistent with a genuinely-adopted public tool.",
    "No SIDId 'released' field is given for this tag (only author/reference/comment) — the 1988 date above is carried over from the shared CSDb release, not from a SIDId-native field."
  ],
  "sources": [
    "data/sidid.json byTag['MoN/FutureComposer'] — author line, csdb reference (id 10604), comment naming the reference tune; confirmed (2026-07-16) via deepsid_dl/sidid.nfo that NO separate 'MoN/FutureComposer/RWE' entry exists in SIDId's own database",
    "cadaver/sidid upstream sidid.nfo (fetched 2026-07-16, https://github.com/cadaver/sidid/blob/master/sidid.nfo) — confirmed no separate 'Cyb2' entry either, only the bare 'MoN/FutureComposer' tag",
    "knowledge/COVERAGE.md — the three other sibling '/Bantam', '/Deenen_Digi', '/JTS' tags remain uncarded and unmerged; the bare 'MoN/FutureComposer' tag and the RWE/Cyb2/TTWII sub-tags no longer appear in COVERAGE.md's uncarded list once it is regenerated after this card's alias merges",
    "Local aggregate over data/composers/*.json: bare tag 97 files/24 composers; '/RWE' tag 45 files/3 composers (TC 42, Francois Prijt 2, Charles Deenen 1); '/Cyb2' tag 38 files/9 composers (Markus Siebold 10, Jeroen Tel 7, Charles Deenen 6, Reyn Ouwehand 5, Mad_Donne_Marcel 4, Ace64 2, Drumbeat 2, No-XS 1, SounDemon 1); '/TTWII' tag 18 files/5 composers (Defbeat 11, Francois Prijt 3, Rock Captain 2, Charles Deenen 1, Commander 1); combined (all four) 198 files/32 composers (TC 46, Jeroen Tel 26, Markus Schneider 15, Charles Deenen 14, SMC 13, Markus Siebold 11, Defbeat 11, Barry Leitch 6, Mad_Donne_Marcel 6, Joe 5, Francois Prijt 5, Reyn Ouwehand 5, and 20 more with 1-4 each)",
    "data/composers/jeroen-tel.json — confirms Noisy_Pillars_tune_1.sid's own player tag in this dataset is 'MoN/FutureComposer'; also confirms Jeroen Tel's own 'Cybernoid II' file carries the 'MoN/FutureComposer/Cyb2' tag",
    "data/composers/charles-deenen.json — confirms 'RWE_Intro.sid' (Charles Deenen's own file) carries the 'MoN/FutureComposer/RWE' tag, csdb_id 10647; confirms Deenen's own \"That's the Way It Is (intro)\" carries the 'MoN/FutureComposer/TTWII' tag, csdb_id 10653",
    "CSDb SID entry for 'RWE Intro' (id 10647, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=10647 — by Charles Deenen, dated '1988 Maniacs of Noise/RWE', load $1000, PAL/6581, reused across many later scene releases (Onslaught, SHAPE, Escape, etc. per HVSC usage)",
    "CSDb SID entry for 'Cybernoid II' (id 28140, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=28140 — Jeroen Tel / 1988 Hewson; PSID header reports load $A600, init $A600, play $A603 for this specific file only — NOT cross-checked against other 'Cyb2'-tagged files or the bare tag, so not recorded in this card's memory/entry fields",
    "SounDemon's 'Vicious SID 2 - Cybernoid 2' (data/composers/soundemon.json) — a remix carrying the same 'MoN/FutureComposer/Cyb2' tag, supporting the 'Cyb2 = Cybernoid II reference tune' theory",
    "CSDb SID entry for \"That's the Way It Is (intro)\" (id 10653, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=10653 — Charles Deenen, 1988, Scoop Designs; PSID header reports load $1500, init $1500, play $1503 for this specific file only — NOT cross-checked against other 'TTWII'-tagged files or the bare tag, so not recorded in this card's memory/entry fields; the tag name is plainly an acronym of this file's own title, matching the RWE_Intro/Cybernoid II 'fingerprint tune' naming pattern",
    "cadaver/sidid upstream sidid.nfo, fetched again 2026-07-16 via https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo — confirmed no entry containing the string 'TTWII' either",
    "CSDb release 'Future Composer V1.0' (id 10604): https://csdb.dk/release/?id=10604 — 20 Jun 1988, Finnish Gold; code: Charles Deenen (Maniacs of Noise/Scoop) + Finland Cracking Service; music: Jeroen Tel + Rock",
    "VGMPF wiki 'Future Composer' article (https://www.vgmpf.com/Wiki/index.php?title=Future_Composer, checked 2026-07-16) — corroborates the FCS/MoN origin story and the 1988 threatened-lawsuit history already in future-composer.md; no Cyb2/TTWII-specific detail",
    "knowledge/players/future-composer.md — sibling card for the 'FutureComposer_V1.0/V3.x/V4_Packed/FC' raw-tag family; same CSDb release, distinct signature match",
    "knowledge/players/mon-deenen.md — sibling card for Charles Deenen's original 'MoN/Deenen' driver; documents the pre-editor MoN lineage this tag's SIDId comment points at",
    "knowledge/players/rockmonitor.md — precedent for merging a SIDId-entry-less sub-tag (RockMon3h) into a parent card by composer-concentration + no-independent-signature evidence, same reasoning applied here for RWE, Cyb2, and TTWII",
    "cadaver/sidid project (source of sidid.nfo / SIDId data): https://github.com/cadaver/sidid"
  ]
}
```

## Overview

MoN/FutureComposer is a Player-ID/SIDId raw tag covering (as of the RWE,
Cyb2, and TTWII merges) 198 files across 32 composers in this collection —
97 files/24 composers under the bare `MoN/FutureComposer` tag, plus 45
files/3 composers under `MoN/FutureComposer/RWE`, 38 files/9 composers under
`MoN/FutureComposer/Cyb2`, and 18 files/5 composers under
`MoN/FutureComposer/TTWII`, all three folded in as aliases (see the JSON
header comment and quirks for the evidence). Per SIDId's own entry it
identifies the same tool already covered by
[`future-composer.md`](future-composer.md) — the **FCS/Finnish Gold** editor
(credited to Juha Granberg) wrapping a **Maniacs of Noise** replay driver
(Charles Deenen), first released as "Future Composer V1.0" on 20 Jun 1988
(CSDb release id 10604) — but detected here under *different* raw signatures
than the `FutureComposer_V1.0`/`V3.x`/`V4_Packed`/`FC` tags that card's
aliases already claim. The two families are kept as separate cards because
they are separate, independently-tracked tag strings in this project's
coverage accounting, and no byte-level comparison has been done to confirm
they are identical binaries. Composer usage is broadly spread across the
combined 32 composers (TC's 23.2% — entirely from RWE — is the single
biggest skew, and it actually shrank once TTWII was folded in, since TTWII
adds no TC files), consistent with FutureComposer's status as a genuinely
adopted public tool rather than a personal routine — matching the same
conclusion `future-composer.md` reaches from its own, larger tag set. The
working theory for why DeepSID's Player-ID scanner produced distinct `/RWE`,
`/Cyb2`, and `/TTWII` (and other) suffix tags at all is that each names a
byte-level signature variant after its own fingerprint/reference tune
(`RWE_Intro.sid`, Jeroen Tel's `Cybernoid II`, Charles Deenen's own "That's
the Way It Is (intro)") rather than after a sub-group or cracker credit —
see the quirks for the evidence trail.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) **this is not the same
raw tag as `future-composer.md`'s aliases**, even though all evidence points
to the same underlying tool and the same CSDb release — treat them as
related-but-unmerged until verified; (2) SIDId's own reference file for this
tag's origin story (`Noisy_Pillars_tune_1.sid`) is, in this project's
dataset, tagged with *this same* `MoN/FutureComposer` label rather than the
`MoN/Deenen` label the origin narrative would suggest — flagged, not
resolved; and (3) **`MoN/FutureComposer/RWE`, `MoN/FutureComposer/Cyb2`, and
`MoN/FutureComposer/TTWII` were all merged into this card's aliases
(2026-07-16)** on the same style of evidence — no independent SIDId/upstream
`sidid.nfo` signature, plus authorship overlap with MoN's own founders
(Deenen/Tel) — but what "RWE" denotes remains unresolved, while "Cyb2" and
"TTWII" are both reasonably explained (not proven beyond the naming pattern)
as short for their own reference tunes ("Cybernoid II", "That's the Way It
Is"). TTWII's own internal composer concentration (Defbeat 61% of that
18-file sub-tag alone) is sharper than the bare tag's, but no sharper than
RWE's (TC 93% of that sub-tag alone) was when it was merged — what matters
is that neither shifts the COMBINED family's read away from "broadly
adopted tool". See the dedicated quirk entries for all three merges. Three
sibling `/Bantam`, `/Deenen_Digi`, `/JTS` tags remain separate and unmerged.

## Disassembly notes

None done here. `future-composer.md` records a locally-confirmed trace
(load $1800, init $1800, play $1806) for a file carrying the *other*
(`FutureComposer_V1.0`) raw tag — that trace has **not** been checked
against a file carrying this `MoN/FutureComposer` tag (or its RWE/Cyb2/TTWII
aliases), so it is not copied into this card's `memory`/`entry` fields. A
future pass should pick a representative `MoN/FutureComposer`-tagged `.sid`
(e.g. a Jeroen Tel or Charles Deenen file) and trace it via `sidm2-siddump`
to confirm whether the tag families really do share entry points/memory
layout.

Note for that future pass: CSDb's page for the RWE-tagged `RWE_Intro.sid`
(https://csdb.dk/sid/?id=10647) states a load address of **$1000**, its page
for the Cyb2-tagged `Cybernoid II` (https://csdb.dk/sid/?id=28140) states
load **$A600** / init **$A600** / play **$A603**, and its page for the
TTWII-tagged `"That's the Way It Is (intro)"` (https://csdb.dk/sid/?id=10653)
states load **$1500** / init **$1500** / play **$1503** — three different
values across three files of this same merged family (and different again
from future-composer.md's $1800 trace for the other raw-tag family). This is
NOT recorded in `memory.load_address`/`entry` above because these are
per-file PSID-header values (each `.sid` can load wherever its own build put
it), not disassembly-confirmed facts about a shared play routine, and none
has been cross-checked against a bare-`MoN/FutureComposer`-tagged file.
Flagged here as concrete starting points, not asserted as the family's
memory map — if anything, the spread across three different addresses is a
reminder that load address alone won't settle whether these tags share one
binary routine or several close variants.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
recorded, sourced from the cached SIDId entry, this project's local composer
data, and the CSDb release page for "Future Composer V1.0". No runtime fact
(memory map, entry points, speed model, data format) has been confirmed by
disassembly for files carrying this specific tag; all are honestly `TODO`.
The RWE, Cyb2, and TTWII alias merges are all identity/provenance-level
research (tag signature absence + authorship/date evidence), not a runtime
verification — none changes the card's `status`.

## Sources

See the `sources` array — SIDId's `MoN/FutureComposer` entry, the upstream
cadaver/sidid `sidid.nfo`, this project's `data/composers/*.json`
aggregation, `knowledge/COVERAGE.md`, the CSDb "Future Composer V1.0"
release page, the CSDb SID entries for "RWE Intro" (id 10647), "Cybernoid
II" (id 28140), and "That's the Way It Is (intro)" (id 10653), the VGMPF
Future Composer wiki article, the `rockmonitor.md` merge precedent, and the
sibling `future-composer.md`/`mon-deenen.md` cards this one
cross-references.
