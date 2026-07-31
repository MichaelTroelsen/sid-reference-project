# Comer/Digi

```json
{
  "id": "comer-digi",
  "name": "Comer/Digi",
  "aliases": ["Comer/Digi"],
  "authors": ["Pawel Kulikowski (Comer)"],
  "released": "TODO: no tool/routine release date found (still none — see below). Per-tune 'Released' field on each of the 4 tagged SIDs, read directly from CSDb's webservice (type=sid), is a composition/tune date, not a routine release date: Compo Zak #10 and SLT's Zak 2 both '1993 Comer' (self-released, no group), Reklam Mix (end part) '1994 Sun Designs', Dune Cover '2002 Elysium'. Earliest tune attested: 1993. Not promoted into this field per the project's own rule that a first-use year is not a release date.",
  "status": "stub",
  "platform": "TODO: native C64 routine assumed (author is a native C64 scener) but unconfirmed — no standalone tool release found, unlike this author's other three tagged tools. A second, independent web sweep this round (CSDb webservice full credit list, WebSearch of csdb.dk/lemon64.com/forum64.de) also found nothing; still TODO.",
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
    "The tag name ends in '_Digi' — per this batch's global rule, that is NOT evidence of digi/sample playback. No manual, format spec, or disassembly was found to confirm or deny what the routine does. TODO, left unverified.",
    "UNLIKE this author's three other tagged routines (Comer/NMI_Sample_5 -> CSDb release 101599, Comer/Sample_Studio -> CSDb release 101704, and a fourth Comer tool 'Stereo Sample Studio V1' -> CSDb release 121424, found while researching this card but NOT used by any file in this dataset and NOT itself SIDId-tagged), SIDId's own sidid.nfo entry for 'Comer/Digi' carries NO reference field at all — author only. A live re-check of the raw sidid.nfo confirms this (fetched from github.com/cadaver/sidid, 2026-07-17): only 'AUTHOR: Pawel Kulikowski (Comer)', no REFERENCE/RELEASED/COMMENT lines, unlike the other two Comer entries which do have a REFERENCE line.",
    "Searched Comer's full CSDb scener credit list (https://csdb.dk/scener/?id=7572) for any release with 'Digi' in the title credited to him as coder: none found. The only CSDb hit for the literal string 'Digi' near Comer is a music release named 'Digi' by Skylight Designs where Comer is credited for Music only, not code — almost certainly unrelated to this player-routine tag, and not treated as evidence either way.",
    "Extremely small usage: 4 files across 2 composers in this dataset (Comer himself: 'Compo Zak #10', 'Reklam Mix (end part)', 'SLT's Zak 2'; Shogoon: 'Dune Cover'). Read plainly as a personal/small-clique routine, not a published tool — there is no tool release to point to, unlike Sample Studio/NMI Sample 5/Stereo Sample Studio.",
    "Composer 2, Shogoon (Wojciech Radziejewski), is HVSC-credited to groups Agony/Taboo — POLAND (data/hvsc/Musicians.txt), and Comer himself joined Taboo in 1994 per his CSDb scener bio. Both composers being in Taboo is a plausible route for a private routine to pass hands, but this is composer-overlap circumstance, not a cited lineage fact — no edge asserted.",
    "CLUSTER CHECK (per this batch's task): tested against sibling tags Comer/NMI_Sample_5 and Comer/Sample_Studio. All three tags share only the author (Comer). Usage does not overlap in composers — Comer/Digi's second user (Shogoon) does not appear in either sibling's composer list, and Comer/Digi has no CSDb release to byte-diff against the siblings' release binaries (unlike the NMI_Sample_5-vs-Sample_Studio comparison the sibling card performed, which found no shared code between those two). No evidence found connecting Comer/Digi to either sibling as the same routine, a predecessor, or a successor. Reported as a third, apparently distinct and unpublished routine by the same author — no edge asserted, no sibling card touched.",
    "GAP-FILL ROUND (2026-07-31): re-censused all 4 tagged files independently via CSDb's webservice (type=sid, one query per csdb_id: 45628, 39359, 45627, 26887) rather than trusting the earlier pass's summary. Confirms the earlier file/composer census exactly, and adds each tune's own 'Released' field (a composition date, not a routine release — see the `released` field above for why it isn't promoted there).",
    "PSID header metadata read during the same census (header metadata only, per this project's rule — NOT written into the Tier 3 `memory`/`entry` fields, which remain TODO): Compo Zak #10 load $0850/init $1380; SLT's Zak 2 load $0850/init $1480 (same load address as Compo Zak #10 — both 1993, both self-released by Comer, consistent with the same routine build); Reklam Mix (end part) load $6C00/init $7F50 (1994, different build/location); Dune Cover load $0900/init $4000 (2002, Shogoon, most different of all four). The two same-year Comer-authored tunes sharing a load address is the only internal-consistency signal found; not strong enough to assert anything about versioning.",
    "SECOND independent check for a 'Digi'-named or 'Digi'-credited CSDb release tied to Comer, this round scanning his FULL CSDb credit list (106 entries, not just his own release list) for the substring 'digi': found exactly one additional false positive beyond the Skylight Designs music release noted above — a 'Code' credit on 'Moog Digi Collection 3' (CSDb release 10794, 17 Apr 1994, Keen Acid group), a music collection by a different musician (Sebastian Bachlinski / Moog) using 4 different SID files (CSDb ids 20851, 36904, 36902, 54277), none of which match this tag's 4 files. Confirms the earlier round's negative result rather than overturning it — still no evidence of a Comer/Digi tool release under any name variant checked."
  ],
  "sources": [
    "data/sidid.json byTag['Comer/Digi']: author Pawel Kulikowski (Comer), no reference/released/comment fields",
    "sidid.nfo upstream (confirms the same — author only, no reference line for this tag, unlike Comer/NMI_Sample_5 and Comer/Sample_Studio which do have one): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener profile for Comer / Pawel Kulikowski (id 7572) — full release/credit list checked for any 'Digi'-named tool release credited to him as coder; none found; three OTHER tool releases found instead (Sample Studio #101704, NMI Sample 5.v1 #101599, Stereo Sample Studio V1 #121424): https://csdb.dk/scener/?id=7572",
    "HVSC data/hvsc/Musicians.txt: 'Comer (Kulikowski, Pawel) / Sun Designs - POLAND' and 'Shogoon (Radziejewski, Wojciech) / Agony / Taboo - POLAND'",
    "Local dataset: data/composers/*.json aggregation — 4 files tagged Comer/Digi (3 by Comer: Compo_Zak_10.sid, Reklam_Mix_end_part.sid, SLTs_Zak_2.sid; 1 by Shogoon: Dune_Cover.sid), across 2 composers",
    "CSDb webservice, type=sid, independently re-fetched 2026-07-31 for all 4 tagged files' own csdb_id (45628, 39359, 45627, 26887) — per-tune Released fields and PSID LoadAddr/InitAddr header values: https://csdb.dk/webservice/?type=sid&id=45628 (and 39359, 45627, 26887)",
    "CSDb webservice, type=scener, id=7572, depth=2, re-fetched 2026-07-31 — independently reconfirms Comer's own 'Released' (tool release) list contains exactly the same 3 tool releases already on file (101599, 101704, 121424), and his full 106-entry Credits list contains no coder credit on any 'Digi'-named or Digi-adjacent release matching this tag's files: https://csdb.dk/webservice/?type=scener&id=7572&depth=2",
    "CSDb release id 10794 ('Moog Digi Collection 3', Keen Acid, 1994) — checked and ruled out as a false-positive 'Digi' credit hit, different author/files: https://csdb.dk/webservice/?type=release&id=10794&depth=2",
    "WebSearch, 2026-07-31: 'Comer Kulikowski Digi player C64 site:csdb.dk' and 'Comer Digi player routine C64 Poland lemon64 OR forum64' — no results tying Comer to a 'Digi' tool/routine release on CSDb, Lemon64, or Forum64"
  ]
}
```

## Overview

**Comer/Digi** is a SIDId player tag attributed to **Pawel Kulikowski (Comer)**,
a Polish scener (groups Color 7, Skylight Designs, Sun Designs, and Taboo from
1994) already known in this dataset for three other, separately-tagged and
separately CSDb-released tools: Sample Studio (1993), NMI Sample 5.v1, and
Stereo Sample Studio V1. Comer/Digi is different from all three in one telling
way: **it has no CSDb release at all** — SIDId's own entry carries only the
author, no reference, and a direct check of Comer's full CSDb credit list
turns up no coder-credited release with "Digi" in its name. In this project's
dataset it is used by just **4 files across 2 composers** (Comer himself, and
Shogoon — both linked to the Taboo group per HVSC). This reads as a private,
unpublished playback routine, not a released tool — smaller and less visible
even than this author's other, already-small tools.

A gap-fill pass (2026-07-31) independently re-censused all 4 files via CSDb's
webservice and confirmed the earlier count exactly, adding each tune's own
`Released` date: Compo Zak #10 and SLT's Zak 2 are both "1993 Comer"
(self-released, no group), Reklam Mix (end part) is "1994 Sun Designs", and
Dune Cover is "2002 Elysium". The earliest attested use is therefore 1993 —
but per this project's own rule, a tune's composition date is not a routine
release date, and no routine/tool release was found for this tag in either
research round, so `released` stays `TODO` with that distinction spelled out
rather than promoting 1993 into it. `platform` and `csdb_release` were
re-checked the same way (a second, independent CSDb-credit-list scan and a
fresh WebSearch of csdb.dk/Lemon64/Forum64) and both remain negative results,
now attested twice.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **"_Digi" name is not evidence** of
sample/digi playback (per this batch's global rule) and nothing here confirms
it; the **absence of any CSDb release** for this specific tag, in contrast to
this same author's three other tool releases; and the **cluster check against
Comer/NMI_Sample_5 and Comer/Sample_Studio**, which found no composer overlap
and no evidence of shared code, reference, or lineage — reported as a third
apparently-distinct, unpublished routine, no edge asserted.

## Disassembly notes

None done. No CSDb release or standalone binary was found for this tag to even
inspect at the container level (unlike the sibling NMI_Sample_5/Sample_Studio
cards, which could byte-diff downloaded release disks). Memory map, entry
points, and data format are all unknown — correctly left `TODO`.

## Verification

Not verified. No register-write trace or reassembly attempted. `status: stub`
— Tier 1 (local composer-file aggregation) + Tier 2 (SIDId/HVSC/CSDb
provenance search, including a live re-check of upstream sidid.nfo and a full
scan of the author's CSDb credit list) only, with a negative result on finding
any release for this tag. A 2026-07-31 gap-fill pass independently re-ran the
Tier 1 census (all 4 files, matches exactly) and the Tier 2 provenance search
(CSDb webservice + WebSearch across csdb.dk/Lemon64/Forum64) for `released`,
`platform`, and `csdb_release` specifically; all three remain the same
honest negative result, now corroborated by a second independent pass rather
than resting on the first pass alone. `status` intentionally left `stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (local cache and live upstream
re-check), the CSDb scener profile for Comer, HVSC Musicians.txt, and this
project's local `data/composers/*.json` aggregation.
