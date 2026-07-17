# Comer/Digi

```json
{
  "id": "comer-digi",
  "name": "Comer/Digi",
  "aliases": ["Comer/Digi"],
  "authors": ["Pawel Kulikowski (Comer)"],
  "released": "TODO: no date found; no CSDb release identified for this tag at all (see Overview)",
  "status": "stub",
  "platform": "TODO: native C64 routine assumed (author is a native C64 scener) but unconfirmed — no standalone tool release found, unlike this author's other three tagged tools",
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
    "CLUSTER CHECK (per this batch's task): tested against sibling tags Comer/NMI_Sample_5 and Comer/Sample_Studio. All three tags share only the author (Comer). Usage does not overlap in composers — Comer/Digi's second user (Shogoon) does not appear in either sibling's composer list, and Comer/Digi has no CSDb release to byte-diff against the siblings' release binaries (unlike the NMI_Sample_5-vs-Sample_Studio comparison the sibling card performed, which found no shared code between those two). No evidence found connecting Comer/Digi to either sibling as the same routine, a predecessor, or a successor. Reported as a third, apparently distinct and unpublished routine by the same author — no edge asserted, no sibling card touched."
  ],
  "sources": [
    "data/sidid.json byTag['Comer/Digi']: author Pawel Kulikowski (Comer), no reference/released/comment fields",
    "sidid.nfo upstream (confirms the same — author only, no reference line for this tag, unlike Comer/NMI_Sample_5 and Comer/Sample_Studio which do have one): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener profile for Comer / Pawel Kulikowski (id 7572) — full release/credit list checked for any 'Digi'-named tool release credited to him as coder; none found; three OTHER tool releases found instead (Sample Studio #101704, NMI Sample 5.v1 #101599, Stereo Sample Studio V1 #121424): https://csdb.dk/scener/?id=7572",
    "HVSC data/hvsc/Musicians.txt: 'Comer (Kulikowski, Pawel) / Sun Designs - POLAND' and 'Shogoon (Radziejewski, Wojciech) / Agony / Taboo - POLAND'",
    "Local dataset: data/composers/*.json aggregation — 4 files tagged Comer/Digi (3 by Comer: Compo_Zak_10.sid, Reklam_Mix_end_part.sid, SLTs_Zak_2.sid; 1 by Shogoon: Dune_Cover.sid), across 2 composers"
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
any release for this tag.

## Sources

See the `sources` array — SIDId sidid.nfo (local cache and live upstream
re-check), the CSDb scener profile for Comer, HVSC Musicians.txt, and this
project's local `data/composers/*.json` aggregation.
