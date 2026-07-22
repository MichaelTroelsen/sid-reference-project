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
  in the same day too, same style of evidence again.

  2026-07-17: "MoN/FutureComposer/Bantam" (14 files) folded in as a fourth
  merged alias, same style of evidence again (no independent SIDId/upstream
  sidid.nfo signature; both MoN founders — Jeroen Tel and Charles Deenen —
  present among its 4 composers; the tag itself named after Jeroen Tel's own
  "Bantam.sid" reference tune, continuing the RWE_Intro/Cybernoid_II/TTWII
  fingerprint-tune naming pattern). One other "/Deenen_Digi" sibling tag
  remains a separate, unmerged uncarded family ([RSID?]-flagged digi/sample
  tag, explicitly out of scope) — do not assume it belongs here too without
  the same per-tag verification.

  2026-07-17 (later same day): "MoN/FutureComposer/JTS" (11 files) folded in
  as a fifth merged alias — the LAST remaining "/MoN/FutureComposer/*"
  sibling tag, same style of evidence again (no independent SIDId/upstream
  sidid.nfo signature; Jeroen Tel himself is the composer of the file the
  tag appears to be fingerprinted from, "JT in Space", CSDb id 28170, 1988
  Maniacs of Noise; merging in adds NO new composer to the family — all 4
  of JTS's composers, including its 64%-share top user TC, already appear
  elsewhere in the combined family).
-->

```json
{
  "id": "mon-futurecomposer",
  "name": "MoN/FutureComposer",
  "aliases": ["MoN/FutureComposer", "MoN/FutureComposer/RWE", "MoN/FutureComposer/Cyb2", "MoN/FutureComposer/TTWII", "MoN/FutureComposer/Bantam", "MoN/FutureComposer/JTS"],
  "authors": ["Charles Deenen (Maniacs of Noise) — player/driver", "Juha Granberg (FCS, Finnish Gold) — editor"],
  "released": "1988 (same CSDb release as future-composer.md: V1.0, id 10604, completed 13 Jun 1988, released 20 Jun 1988 by Finnish Gold)",
  "status": "in-progress",
  "platform": "Native C64 editor (Finnish Gold's FCS) wrapping a Maniacs of Noise replay driver — same tool family as future-composer.md. NOT the unrelated Amiga program of the same name.",
  "csdb_release": 10604,

  "memory": {
    "load_address": "TODO: not verified for files carrying this specific raw tag (see Disassembly notes — a related tag family was traced in future-composer.md, but not confirmed to be byte-identical to this signature)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "Per-file, from PSID header. Sample traces: $1000 (RWE_Intro.sid, confirmed 2026-07-22); $A600, $1500, $C000 (other sub-tags — see Disassembly notes).",
    "play": "Per-file: $1006 (RWE_Intro), $1003 (standard convention), per-file PSID convention."
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
    "MERGED (2026-07-17): 'MoN/FutureComposer/Bantam' (14 files) is now folded into this card's aliases too. Evidence: (1) data/sidid.json byTag has NO 'MoN/FutureComposer/Bantam' entry, and the upstream cadaver/sidid sidid.nfo (fetched 2026-07-17, https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo) confirms no entry containing the string 'Bantam' either — same absence-of-signature pattern as the RWE/Cyb2/TTWII merges; (2) of Bantam's 14 files, 6 are by Jeroen Tel (including 'Bantam.sid' itself — see next point) and 1 by Charles Deenen ('Ninja_Remix.sid') — both MoN founders present, 50% of the sub-tag between them, the same authorship-overlap test the other three merges passed; (3) composer spread within the sub-tag is 4 composers with no single one exceeding 43% (Jeroen Tel 6, Mozes Emotional 6, Charles Deenen 1, Red_Duijckaerts_Roger 1) — narrower than the bare tag's 24 composers but markedly less concentrated than RWE was standalone (TC 93%) when that was merged, so it clears the same bar.",
    "'Bantam' is the tag's own reference/fingerprint tune, same pattern as RWE_Intro, Cybernoid II, and 'That's the Way It Is': one of the 14 Bantam-tagged files is Jeroen Tel's own 'Bantam.sid' (CSDb SID entry id 28085: https://csdb.dk/sid/?id=28085 — Jeroen Tel, 1988, Maniacs of Noise). A second is Charles Deenen's own 'Ninja Remix' (CSDb SID entry id 990: https://csdb.dk/sid/?id=990 — Charles Deenen, 1988, Maniacs of Noise). Both MoN founders, both 1988, both crediting Maniacs of Noise directly — consistent with the working theory (not independently confirmed beyond the naming pattern) that DeepSID's Player-ID scanner names each byte-level signature variant after the tune it was fingerprinted from.",
    "Bantam's merge introduces 2 composers new to the combined family — Mozes Emotional (6 files, all under Bantam) and Red_Duijckaerts_Roger (1 file) — neither appears under the bare tag or the RWE/Cyb2/TTWII aliases. This mirrors the TTWII merge, which likewise introduced a composer (Defbeat) entirely new to the family; new composers appearing via a sub-tag merge is expected, not a red flag, provided the authorship-overlap and signature-absence tests both still pass (they do here).",
    "Composer concentration with Bantam also merged in (superseded by the JTS-included final aggregate below): 212 files across 34 composers. TC:46 (21.7%, down from 23.2% — Bantam adds no TC files, so the share shrinks as the denominator grows, the same effect TTWII had), Jeroen Tel:32 (15.1%, up from 26 — Bantam is Tel's biggest single contribution of any sub-tag), Charles Deenen:15 (7.1%), Markus Schneider:15 (7.1%), SMC:13 (6.1%), Defbeat:11 (5.2%), Markus Siebold:11 (5.2%), Mozes Emotional:6 (2.8%, entirely from Bantam, new to the family), and 26 more composers with 1-6 files each. Overall read is unchanged and, if anything, strengthened: 34 composers, no single one over a quarter of the total, still consistent with a genuinely-adopted public tool rather than a personal routine.",
    "Composer concentration with JTS also merged in (FINAL, all six aliases combined — bare tag plus RWE/Cyb2/TTWII/Bantam/JTS): 223 files across 34 composers (no change in composer count — every JTS composer already appeared in the family via another alias). TC:53 (23.8%), Jeroen Tel:33 (14.8%), Charles Deenen:15 (6.7%), Markus Schneider:15 (6.7%), SMC:13 (5.8%), Defbeat:11 (4.9%), Markus Siebold:11 (4.9%), Barry Leitch:6 (2.7%), Mad_Donne_Marcel:6 (2.7%), Mozes Emotional:6 (2.7%), Rock Captain:6 (2.7%), Francois Prijt:5, Joe:5, Reyn Ouwehand:5, and 20 more composers with 1-4 files each. Recomputed directly by aggregating all six tag strings across data/composers/*.json (not by hand-summing the individual merge deltas). Read is unchanged from every prior merge: TC remains the single biggest skew at under a quarter of the total, 34 composers overall, consistent with a genuinely-adopted public tool.",
    "MERGED (2026-07-17, later same day as Bantam): 'MoN/FutureComposer/JTS' (11 files) is now folded into this card's aliases too — the LAST remaining '/MoN/FutureComposer/*' sibling tag. Evidence, same three-part test as the prior four merges: (1) data/sidid.json byTag has NO 'MoN/FutureComposer/JTS' entry, and the upstream cadaver/sidid sidid.nfo (re-fetched 2026-07-17, https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo) confirms no entry containing the string 'JTS' either — same absence-of-signature pattern as all four prior merges; (2) one of the 11 JTS-tagged files is Jeroen Tel's own 'JT in Space' (CSDb SID entry id 28170: https://csdb.dk/sid/?id=28170 — Jeroen Tel, 1988, Maniacs of Noise, load $C000/init $C000/play $C003) — Jeroen Tel is one of MoN's two founders, and 'JTS' plainly reads as an acronym/contraction of that file's own title, continuing the exact 'tag names the fingerprint/reference tune' pattern already established for RWE_Intro, Cybernoid II, TTWII, and Bantam.sid; Charles Deenen himself does not appear among JTS's 4 composers, but the reference-tune match to a MoN founder is the same class of evidence the naming-pattern quirk already documents as this scanner's convention; (3) composer spread within JTS alone is narrow (4 composers: TC 7/11=64%, Rock Captain 2/11, Jeroen Tel 1/11, Patrick Peters 1/11) but — critically — merging it in adds ZERO new composers to the combined family: TC, Rock Captain, Jeroen Tel, and Patrick Peters all already appear elsewhere in the other four aliases. This is the cleanest merge of the five: no new composer identity to evaluate, just reinforcement of the existing family.",
    "TC's dominance of JTS (7 of that 11-file sub-tag, 64%) pushes TC's family-wide share up slightly, from 21.7% to 23.8% (46->53 files) of the now-223-file combined total — the same 'single biggest skew, but not sharp enough to flip the read' pattern already seen after the RWE merge, which is where TC's concentration in this family originated and JTS now reinforces with 7 more files.",
    "One OTHER sibling raw tag still shares the 'MoN/FutureComposer/' prefix with a suffix and remains UNMERGED, NOT claimed as an alias of this card — Deenen_Digi (11 files), per knowledge/COVERAGE.md. It is explicitly out of scope: an [RSID?]-flagged digi/sample tag, a different technique (sample playback, not a tracker-format player) from the RWE/Cyb2/TTWII/Bantam/JTS merges, which are all melodic-player signature variants of the same FCS/MoN tool.",
    "Composer concentration (bare tag only, 97 files/24 composers): Jeroen Tel 19 (20%), Markus Schneider 15 (15%), SMC 13 (13%), Barry Leitch 6, Charles Deenen 6, TC 4 — no single composer dominated, consistent with a genuinely-adopted public tool rather than a personal routine (contrast MoN/Deenen's driver, 51% Jeroen Tel).",
    "Composer concentration CHANGES once RWE is merged in: combined 142 files across 25 composers, and TC jumps to top user at 46 files (32%) — 42 of RWE's 45 files are TC's, vs only 4 under the bare tag. This is a real shift from 'no composer dominates' toward 'one composer plus a wide long tail', but 32% is still well short of MoN/Deenen's 51%-personal-routine threshold, so the 'genuinely adopted tool' read still holds, just less cleanly than before the merge. TC's 46, Jeroen Tel's 19, Markus Schneider's 15 and SMC's 13 together are 66% of the combined total; the remaining 21 composers split the other third.",
    "Composer concentration with Cyb2 also merged in: combined 180 files across 30 composers. TC still leads at 46 (26%, entirely from RWE — Cyb2 contributes no TC files), Jeroen Tel rises to 26 (14%, 19 bare + 7 Cyb2), Markus Schneider 15 (8%), Charles Deenen 13 (7%, 6 bare + 6 Cyb2 + 1 RWE), SMC 13 (7%), Markus Siebold 11 (6%, 1 bare + 10 Cyb2 — no RWE files). The top 5 composers are 62% of the combined total; the remaining 25 composers split the rest. Overall read is unchanged: TC's RWE-driven concentration is the single biggest skew in the family, but the tool as a whole (180 files, 30 composers, several with just 1-2 files) still reads as a broadly-adopted public editor, not a personal routine.",
    "Composer concentration with TTWII also merged in (all four aliases combined at that point — superseded by the Bantam concentration entry below): 198 files across 32 composers. TC:46 (23.2%), Jeroen Tel:26 (13.1%), Markus Schneider:15 (7.6%), Charles Deenen:14 (7.1%, gains 1 from TTWII), SMC:13 (6.6%), Markus Siebold:11 (5.6%), Defbeat:11 (5.6%, entirely from TTWII, a new composer to this family), Barry Leitch:6, Mad_Donne_Marcel:6, Joe:5, Francois Prijt:5 (2 RWE + 3 TTWII), Reyn Ouwehand:5, and 20 more composers with 1-4 files each. TC's share actually DROPS from 26% to 23.2% purely because the denominator grew (TTWII adds no TC files) — TTWII's own internal concentration (Defbeat 61% of that 18-file sub-tag alone) does not change the family-level read: still 32 composers, no single one over a quarter of the total, consistent with a genuinely-adopted public tool.",
    "No SIDId 'released' field is given for this tag (only author/reference/comment) — the 1988 date above is carried over from the shared CSDb release, not from a SIDId-native field."
  ],
  "sources": [
    "data/sidid.json byTag['MoN/FutureComposer'] — author line, csdb reference (id 10604), comment naming the reference tune; confirmed (2026-07-16) via deepsid_dl/sidid.nfo that NO separate 'MoN/FutureComposer/RWE' entry exists in SIDId's own database",
    "cadaver/sidid upstream sidid.nfo (fetched 2026-07-16, https://github.com/cadaver/sidid/blob/master/sidid.nfo) — confirmed no separate 'Cyb2' entry either, only the bare 'MoN/FutureComposer' tag",
    "cadaver/sidid upstream sidid.nfo (re-fetched 2026-07-17, https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo) — confirmed no entry containing the string 'Bantam' either; data/sidid.json byTag also has no separate 'MoN/FutureComposer/Bantam' entry",
    "cadaver/sidid upstream sidid.nfo (re-fetched again 2026-07-17, https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo) — confirmed no entry containing the string 'JTS' either; data/sidid.json byTag also has no separate 'MoN/FutureComposer/JTS' entry",
    "knowledge/COVERAGE.md — the remaining sibling '/Deenen_Digi' tag stays uncarded and unmerged (explicitly out of scope, an [RSID?]-flagged digi/sample tag); the bare 'MoN/FutureComposer' tag and the RWE/Cyb2/TTWII/Bantam/JTS sub-tags no longer appear in COVERAGE.md's uncarded list once it is regenerated after this card's alias merges",
    "Local aggregate over data/composers/*.json: bare tag 97 files/24 composers; '/RWE' tag 45 files/3 composers (TC 42, Francois Prijt 2, Charles Deenen 1); '/Cyb2' tag 38 files/9 composers (Markus Siebold 10, Jeroen Tel 7, Charles Deenen 6, Reyn Ouwehand 5, Mad_Donne_Marcel 4, Ace64 2, Drumbeat 2, No-XS 1, SounDemon 1); '/TTWII' tag 18 files/5 composers (Defbeat 11, Francois Prijt 3, Rock Captain 2, Charles Deenen 1, Commander 1); '/Bantam' tag 14 files/4 composers (Jeroen Tel 6, Mozes Emotional 6, Charles Deenen 1, Red_Duijckaerts_Roger 1); '/JTS' tag 11 files/4 composers (TC 7, Rock Captain 2, Jeroen Tel 1, Patrick Peters 1); combined (all six, recomputed directly by aggregating every tag string across data/composers/*.json) 223 files/34 composers (TC 53, Jeroen Tel 33, Charles Deenen 15, Markus Schneider 15, SMC 13, Defbeat 11, Markus Siebold 11, Barry Leitch 6, Mad_Donne_Marcel 6, Mozes Emotional 6, Rock Captain 6, and 23 more with 1-5 each)",
    "data/composers/jeroen-tel.json — confirms Noisy_Pillars_tune_1.sid's own player tag in this dataset is 'MoN/FutureComposer'; also confirms Jeroen Tel's own 'Cybernoid II' file carries the 'MoN/FutureComposer/Cyb2' tag; also confirms Jeroen Tel's own 'Bantam.sid' carries the 'MoN/FutureComposer/Bantam' tag, csdb_id 28085; also confirms Jeroen Tel's own 'JT in Space' carries the 'MoN/FutureComposer/JTS' tag, csdb_id 28170",
    "CSDb SID entry for 'JT in Space' (id 28170, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=28170 — Jeroen Tel, 1988, Maniacs of Noise; load $C000, init $C000, play $C003. The tag name plainly reads as a contraction/acronym of this file's own title, matching the RWE_Intro/Cybernoid II/TTWII/Bantam 'fingerprint tune' naming pattern; not cross-checked against other JTS-tagged files or the bare tag, so not recorded in this card's memory/entry fields",
    "data/composers/tc.json (TC's own file), data/composers/rock-captain.json, data/composers/patrick-peters.json — confirm the 4-composer breakdown of the '/JTS' tag (TC 7, Rock Captain 2, Jeroen Tel 1, Patrick Peters 1); CSDb corroborates 'Blue Monday' (id 28051, TC/Timur Baysal, 1989 Paramount), 'Class Intro 1' (id 42750, Jeffrey Seelt/Sonic, 1988 Class), and 'Poison' (id 7259, Patrick Peters, 1990 Audial Arts) as unrelated demoscene composers using the same widely-adopted editor, same pattern as the other sub-tag merges",
    "data/composers/charles-deenen.json — confirms 'RWE_Intro.sid' (Charles Deenen's own file) carries the 'MoN/FutureComposer/RWE' tag, csdb_id 10647; confirms Deenen's own \"That's the Way It Is (intro)\" carries the 'MoN/FutureComposer/TTWII' tag, csdb_id 10653; confirms Deenen's own 'Ninja_Remix.sid' carries the 'MoN/FutureComposer/Bantam' tag, csdb_id 990",
    "CSDb SID entry for 'Bantam' (id 28085, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=28085 — Jeroen Tel, 1988, Maniacs of Noise; load $8035, init $8035, play $803B",
    "CSDb SID entry for 'Ninja Remix' (id 990, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=990 — Charles Deenen, 1988, Maniacs of Noise; load $103E, init $1A9A, play $1A4F",
    "CSDb SID entry for 'RWE Intro' (id 10647, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=10647 — by Charles Deenen, dated '1988 Maniacs of Noise/RWE', load $1000, PAL/6581, reused across many later scene releases (Onslaught, SHAPE, Escape, etc. per HVSC usage)",
    "CSDb SID entry for 'Cybernoid II' (id 28140, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=28140 — Jeroen Tel / 1988 Hewson; PSID header reports load $A600, init $A600, play $A603 for this specific file only — NOT cross-checked against other 'Cyb2'-tagged files or the bare tag, so not recorded in this card's memory/entry fields",
    "SounDemon's 'Vicious SID 2 - Cybernoid 2' (data/composers/soundemon.json) — a remix carrying the same 'MoN/FutureComposer/Cyb2' tag, supporting the 'Cyb2 = Cybernoid II reference tune' theory",
    "CSDb SID entry for \"That's the Way It Is (intro)\" (id 10653, note: SID-entry namespace, not release): https://csdb.dk/sid/?id=10653 — Charles Deenen, 1988, Scoop Designs; PSID header reports load $1500, init $1500, play $1503 for this specific file only — NOT cross-checked against other 'TTWII'-tagged files or the bare tag, so not recorded in this card's memory/entry fields; the tag name is plainly an acronym of this file's own title, matching the RWE_Intro/Cybernoid II 'fingerprint tune' naming pattern",
    "cadaver/sidid upstream sidid.nfo, fetched again 2026-07-16 via https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo — confirmed no entry containing the string 'TTWII' either",
    "CSDb release 'Future Composer V1.0' (id 10604): https://csdb.dk/release/?id=10604 — 20 Jun 1988, Finnish Gold; code: Charles Deenen (Maniacs of Noise/Scoop) + Finland Cracking Service; music: Jeroen Tel + Rock",
    "VGMPF wiki 'Future Composer' article (https://www.vgmpf.com/Wiki/index.php?title=Future_Composer, checked 2026-07-16) — corroborates the FCS/MoN origin story and the 1988 threatened-lawsuit history already in future-composer.md; no Cyb2/TTWII-specific detail",
    "knowledge/players/future-composer.md — sibling card for the 'FutureComposer_V1.0/V3.x/V4_Packed/FC' raw-tag family; same CSDb release, distinct signature match",
    "knowledge/players/mon-deenen.md — sibling card for Charles Deenen's original 'MoN/Deenen' driver; documents the pre-editor MoN lineage this tag's SIDId comment points at",
    "knowledge/players/rockmonitor.md — precedent for merging a SIDId-entry-less sub-tag (RockMon3h) into a parent card by composer-concentration + no-independent-signature evidence, same reasoning applied here for RWE, Cyb2, TTWII, Bantam, and JTS",
    "cadaver/sidid project (source of sidid.nfo / SIDId data): https://github.com/cadaver/sidid"
  ]
}
```

## Overview

MoN/FutureComposer is a Player-ID/SIDId raw tag covering (as of the RWE,
Cyb2, TTWII, Bantam, and JTS merges) 223 files across 34 composers in this
collection — 97 files/24 composers under the bare `MoN/FutureComposer` tag,
plus 45 files/3 composers under `MoN/FutureComposer/RWE`, 38 files/9
composers under `MoN/FutureComposer/Cyb2`, 18 files/5 composers under
`MoN/FutureComposer/TTWII`, 14 files/4 composers under
`MoN/FutureComposer/Bantam`, and 11 files/4 composers under
`MoN/FutureComposer/JTS`, all five folded in as aliases (see the JSON
header comment and quirks for the evidence) — JTS being the LAST remaining
"/MoN/FutureComposer/*" sibling tag (the other, "/Deenen_Digi", is an
[RSID?]-flagged digi/sample tag, a different technique, out of scope). Per
SIDId's own entry it identifies the same tool already covered by
[`future-composer.md`](future-composer.md) — the **FCS/Finnish Gold** editor
(credited to Juha Granberg) wrapping a **Maniacs of Noise** replay driver
(Charles Deenen), first released as "Future Composer V1.0" on 20 Jun 1988
(CSDb release id 10604) — but detected here under *different* raw signatures
than the `FutureComposer_V1.0`/`V3.x`/`V4_Packed`/`FC` tags that card's
aliases already claim. The two families are kept as separate cards because
they are separate, independently-tracked tag strings in this project's
coverage accounting, and no byte-level comparison has been done to confirm
they are identical binaries. Composer usage is broadly spread across the
combined 34 composers (TC's 23.8% — driven by RWE and reinforced, not
newly introduced, by JTS — is the single biggest skew), consistent with
FutureComposer's status as a genuinely adopted public tool rather than a
personal routine — matching the same conclusion `future-composer.md`
reaches from its own, larger tag set. The working theory for why DeepSID's
Player-ID scanner produced distinct `/RWE`, `/Cyb2`, `/TTWII`, `/Bantam`,
and `/JTS` (and other) suffix tags at all is that each names a byte-level
signature variant after its own fingerprint/reference tune (`RWE_Intro.sid`,
Jeroen Tel's `Cybernoid II`, Charles Deenen's own "That's the Way It Is
(intro)", Jeroen Tel's own `Bantam.sid`, and Jeroen Tel's own `JT in Space`)
rather than after a sub-group or cracker credit — see the quirks for the
evidence trail.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) **this is not the same
raw tag as `future-composer.md`'s aliases**, even though all evidence points
to the same underlying tool and the same CSDb release — treat them as
related-but-unmerged until verified; (2) SIDId's own reference file for this
tag's origin story (`Noisy_Pillars_tune_1.sid`) is, in this project's
dataset, tagged with *this same* `MoN/FutureComposer` label rather than the
`MoN/Deenen` label the origin narrative would suggest — flagged, not
resolved; and (3) **`MoN/FutureComposer/RWE`, `MoN/FutureComposer/Cyb2`,
`MoN/FutureComposer/TTWII`, `MoN/FutureComposer/Bantam`, and
`MoN/FutureComposer/JTS` were all merged into this card's aliases
(RWE/Cyb2/TTWII on 2026-07-16, Bantam and JTS on 2026-07-17)** on the same
style of evidence — no independent SIDId/upstream `sidid.nfo` signature,
plus authorship overlap with MoN's own founders (Deenen/Tel) — but what
"RWE" denotes remains unresolved, while "Cyb2", "TTWII", "Bantam", and "JTS"
are all reasonably explained (not proven beyond the naming pattern) as
short for, or identical to, their own reference tunes ("Cybernoid II",
"That's the Way It Is", "Bantam.sid" itself, "JT in Space"). TTWII's own
internal composer concentration (Defbeat 61% of that 18-file sub-tag alone)
is sharper than the bare tag's, but no sharper than RWE's (TC 93% of that
sub-tag alone) was when it was merged; Bantam's own internal concentration
(43%/43% split between Jeroen Tel and Mozes Emotional) is milder still;
JTS's own internal concentration (TC 64% of that 11-file sub-tag alone) is
notable but, uniquely among the five, introduces NO composer new to the
family — every one of JTS's 4 composers already appears elsewhere. What
matters throughout is that none shifts the COMBINED family's read away from
"broadly adopted tool". See the dedicated quirk entries for all five
merges. One sibling `/Deenen_Digi` tag remains separate and unmerged
(explicitly out of scope — an [RSID?]-flagged digi/sample tag, a different
technique from the melodic-player variants merged here).

## Disassembly notes

None done here. `future-composer.md` records a locally-confirmed trace
(load $1800, init $1800, play $1806) for a file carrying the *other*
(`FutureComposer_V1.0`) raw tag — that trace has **not** been checked
against a file carrying this `MoN/FutureComposer` tag (or its
RWE/Cyb2/TTWII/Bantam/JTS aliases), so it is not copied into this card's
`memory`/`entry` fields. A future pass should pick a representative
`MoN/FutureComposer`-tagged `.sid` (e.g. a Jeroen Tel or Charles Deenen
file) and trace it via `sidm2-siddump` to confirm whether the tag families
really do share entry points/memory layout.

Note for that future pass: CSDb's page for the RWE-tagged `RWE_Intro.sid`
(https://csdb.dk/sid/?id=10647) states a load address of **$1000**, its page
for the Cyb2-tagged `Cybernoid II` (https://csdb.dk/sid/?id=28140) states
load **$A600** / init **$A600** / play **$A603**, its page for the
TTWII-tagged `"That's the Way It Is (intro)"` (https://csdb.dk/sid/?id=10653)
states load **$1500** / init **$1500** / play **$1503**, its page for
the Bantam-tagged `Bantam.sid` (https://csdb.dk/sid/?id=28085) states load
**$8035** / init **$8035** / play **$803B** (a second Bantam-tagged file,
`Ninja_Remix.sid`, https://csdb.dk/sid/?id=990, states load **$103E** / init
**$1A9A** / play **$1A4F**, different again), and its page for the
JTS-tagged `JT in Space` (https://csdb.dk/sid/?id=28170) states load
**$C000** / init **$C000** / play **$C003** — six different value sets
across six files of this same merged family (and different again from
future-composer.md's $1800 trace for the other raw-tag family). This is NOT
recorded in `memory.load_address`/`entry` above because these are per-file
PSID-header values (each `.sid` can load wherever its own build put it), not
disassembly-confirmed facts about a shared play routine, and none has been
cross-checked against a bare-`MoN/FutureComposer`-tagged file. Flagged here
as concrete starting points, not asserted as the family's memory map — if
anything, the spread across six different addresses (even two within the
same Bantam sub-tag) is a reminder that load address alone won't settle
whether these tags share one binary routine or several close variants.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
recorded, sourced from the cached SIDId entry, this project's local composer
data, and the CSDb release page for "Future Composer V1.0". No runtime fact
(memory map, entry points, speed model, data format) has been confirmed by
disassembly for files carrying this specific tag; all are honestly `TODO`.
The RWE, Cyb2, TTWII, Bantam, and JTS alias merges are all identity/
provenance-level research (tag signature absence + authorship/date
evidence), not a runtime verification — none changes the card's `status`.

## Sources

See the `sources` array — SIDId's `MoN/FutureComposer` entry, the upstream
cadaver/sidid `sidid.nfo`, this project's `data/composers/*.json`
aggregation, `knowledge/COVERAGE.md`, the CSDb "Future Composer V1.0"
release page, the CSDb SID entries for "RWE Intro" (id 10647), "Cybernoid
II" (id 28140), "That's the Way It Is (intro)" (id 10653), "Bantam" (id
28085), "Ninja Remix" (id 990), and "JT in Space" (id 28170), the VGMPF
Future Composer wiki article, the `rockmonitor.md` merge precedent, and
the sibling `future-composer.md`/`mon-deenen.md` cards this one
cross-references.
