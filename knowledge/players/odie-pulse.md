# Odie/Pulse

```json
{
  "id": "odie-pulse",
  "name": "Odie/Pulse",
  "aliases": ["Odie/Pulse"],
  "authors": ["Sean Robert Connolly (Odie)"],
  "released": "1987-1988 (earliest/latest dated files observed on CSDb, full 2-file census: 'Merry Christmas'87' released Dec 1987 as part of Pulse Productions' 'Merrypulsemas' demo, csdb.dk/release/?id=17849; 'Crazy Mirrors' released 1988-04-20 as part of Pulse Productions' 'Crazy Mirrors' demo, csdb.dk/release/?id=17855 — no formal CSDb tool/editor release exists for this tag itself)",
  "status": "stub",
  "platform": "Native C64, hand-coded in source rather than a distributed editor. A Lemon64 forum post by TMR (same source cited on the sibling odie-cosine.md card) names 'Pulse Player' directly as 'the Pulse Productions music driver' and gives Odie's tool progression as Rockmonitor -> Pulse Player -> EMS, with EMS not gaining an editor until V4.3 (https://www.lemon64.com/forum/viewtopic.php?t=5725, independently re-fetched this pass). This matches both of this tag's own tagged files: both are group-released by the demo group Pulse Productions (CSDb group id 2895, AKA 'Pulse') with Sean Connolly credited Code+Music on both (csdb.dk/release/?id=17849, id=17855), and CSDb's own group page for Pulse Productions lists him ('Sean'/SC21) as an ex-member with Coder/Musician roles (https://csdb.dk/group/?id=2895) — even though his own scener MemberOf list only surfaces Cosine and Sonix Systems (https://csdb.dk/scener/?id=1181). This resolves the tag's 'Pulse' as the group Pulse Productions / its 'Pulse Player' driver, not an independent tool name. Not independently confirmed by disassembly.",
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
    "SIDId gives only an AUTHOR line for this tag: 'Sean Connolly (Odie)' (data/sidid.json byTag['Odie/Pulse']) — no NAME/reference/comment. Contrast with the SAME author's EMS/Odie tag family (already carded, knowledge/players/ems-odie.md), which resolves to a full CSDb release (V7.03, 1997, Cosine) — the sparseness here suggests an earlier or never-packaged personal routine, predating his documented Cosine/Sonix Systems/EMS work.",
    "RESOLVED this pass (was 'UNRESOLVED' in the prior draft): 'Pulse' is the UK demo group Pulse Productions (CSDb group id 2895, AKA 'Pulse'), and a Lemon64 post by TMR names 'Pulse Player' directly as 'the Pulse Productions music driver' in Odie's tool progression Rockmonitor -> Pulse Player -> EMS (https://www.lemon64.com/forum/viewtopic.php?t=5725). Both of this tag's own files were released by Pulse Productions with Sean Connolly credited Code+Music, and CSDb's own group page for Pulse Productions (https://csdb.dk/group/?id=2895) lists him ('Sean'/SC21) as an ex-member, Coder/Musician — though this membership does NOT surface on his own scener MemberOf list (https://csdb.dk/scener/?id=1181), which shows only Cosine and Sonix Systems. A minor CSDb data-linking inconsistency, not a contradiction of the group-credit evidence.",
    "Full 2-file census (was previously an inference from one filename's '87 suffix, now sourced): 'Merry Christmas'87' (csdb.dk/sid/?id=5709) has CSDb Released field '1987 Pulse Productions', used in the demo 'Merrypulsemas' (Dec 1987, csdb.dk/release/?id=17849). 'Crazy Mirrors' (csdb.dk/sid/?id=5682) has Released field '1988 Pulse Productions', used in the demo 'Crazy Mirrors' (1988-04-20, csdb.dk/release/?id=17855). Both predate the 1997 EMS V7.03 release by 9-10 years, consistent with the TMR-sourced tool-progression claim that Pulse Player came before EMS.",
    "PSID header fields (metadata only, not disassembly, per this project's rule that these are Tier 2 leads not Tier 3 facts): 'Merry Christmas'87' load $5000/init $5B40/play $C046; 'Crazy Mirrors' load $8FA2/init $8FA2/play $8FAE (3 subtunes). Not constant across the two files, echoing the same per-file-address pattern already documented on the sibling odie-cosine.md card — consistent with hand-assembled-per-tune code rather than one fixed shared engine, but unconfirmed without real disassembly.",
    "No evidence connects this tag's routine to EMS, Odie/Cosine, or Odie_tiny at the code level — no `edges` entry asserted absent a real disassembly comparison, per this project's standing discipline (already applied consistently across all three sibling Odie cards). Composer profile: Sean Robert Connolly, handles 'Odie', born 1970-03-12, country Scotland/England, affiliation Cosine Systems (data/composers/sean-connolly.json) — that affiliation is from his LATER career; not evidence this earlier Pulse Productions-era tag is Cosine-related.",
    "No public disassembly or source found for this specific tag. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Odie/Pulse'] = {\"author\": \"Sean Connolly (Odie)\"}",
    "data/composers/sean-connolly.json (profile: full_name Sean Robert Connolly, handles Odie, country Scotland/England, born 1970-03-12, affiliation Cosine Systems, csdb_id 1181; folder[] records for both tagged files, full census)",
    "CSDb XML webservice, both tagged files' own SID entries (Released field, LoadAddr/InitAddr/PlayAddr as PSID-header metadata only): https://csdb.dk/sid/?id=5709 (Merry Christmas'87, 1987 Pulse Productions), https://csdb.dk/sid/?id=5682 (Crazy Mirrors, 1988 Pulse Productions) — fetched via scripts/lib/csdb-client.js csdbGet('sid', id)",
    "CSDb release pages for both demos carrying these files (ReleasedBy, Credits): https://csdb.dk/release/?id=17849 (Merrypulsemas, Dec 1987), https://csdb.dk/release/?id=17855 (Crazy Mirrors, 1988-04-20) — fetched via csdbGet('release', id)",
    "CSDb group page, Pulse Productions (id 2895, AKA 'Pulse', UK Demo Group; lists Sean/'SC21' as ex-member, Coder/Musician): https://csdb.dk/group/?id=2895 — fetched via getGroup(2895)",
    "CSDb scener profile, Odie/Sean Connolly (MemberOf shows only Cosine and Sonix Systems, NOT Pulse Productions — a data-linking gap noted in quirks): https://csdb.dk/scener/?id=1181",
    "Lemon64 forum, 'I want to make music. What's a good program?' — post by TMR naming 'Pulse Player' as 'the Pulse Productions music driver' and giving Odie's tool progression Rockmonitor -> Pulse Player -> EMS: https://www.lemon64.com/forum/viewtopic.php?t=5725 (re-fetched and independently confirmed this pass; same source already cited on knowledge/players/odie-cosine.md)",
    "CSDb search for a standalone 'Pulse Player' tool/release page returned no results (https://csdb.dk/search/?search=Pulse+Player) — csdb_release stays null",
    "Sibling KB cards, cross-checked for same-author overlap (no code-sharing evidence found, no edges asserted): knowledge/players/ems-odie.md, knowledge/players/odie-cosine.md, knowledge/players/odie-tiny.md"
  ]
}
```

## Overview

Odie/Pulse is a Player-ID tag naming 2 files in this dataset (full census),
both composed by **Sean Robert Connolly**, handle **Odie**, of the UK demo
group **Pulse Productions** — the same composer who later authored the
fully documented [EMS/Electronic Music System](ems-odie.md) (V7.03, 1997,
Cosine) and, in between, the personal [Odie/Cosine](odie-cosine.md) routine
and the 4k-compo-specific [Odie_tiny](odie-tiny.md) routine. This tag is a
distinct, much sparser SIDId signature (author name only, no product name).
Both tagged files ("Merry Christmas'87", Dec 1987, and "Crazy Mirrors",
Apr 1988) are dated 9-10 years before EMS's earliest documented release,
and both were released by the group Pulse Productions with Connolly
credited Code+Music. A Lemon64 post by TMR (re-confirmed this pass, same
source already cited on `odie-cosine.md`) names "Pulse Player" directly as
"the Pulse Productions music driver" and places it in Odie's tool
progression before EMS — this resolves what "Pulse" refers to, previously
flagged unresolved in an earlier draft of this card. No formal CSDb tool
page exists for "Pulse Player" itself; `csdb_release` stays `null`.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) "Pulse" is now resolved as the
demo group Pulse Productions / its "Pulse Player" driver, sourced to a
Lemon64/TMR post and matching both files' own release credits; (2) same
real person as EMS/Odie's, Odie/Cosine's, and Odie_tiny's author, but a
separate tag with no code-sharing edge asserted to any of them, per this
project's standing discipline; (3) both files' dates are now sourced from
CSDb's own `Released` fields (1987, 1988), not inferred from a filename;
(4) Connolly's Pulse Productions membership is confirmed on the group's
own CSDb page but is oddly absent from his own scener `MemberOf` list — a
data-linking gap, not a contradiction.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. PSID header load/init/play addresses for both files
are recorded in `quirks` as metadata only, not disassembly facts.

## Verification

Not verified. This card was built from Tier 1 local data
(`data/sidid.json`, `data/composers/sean-connolly.json`, full 2-file
census) plus Tier 2 web/CSDb provenance research this pass: both files'
own CSDb SID and release entries, the CSDb group page for Pulse
Productions, the CSDb scener profile for Odie, and a re-fetched Lemon64
forum post (TMR) for platform/lineage of the term "Pulse". No runtime
fact was disassembled or traced. `status` correctly stays `stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer profile
(full census), CSDb SID/release entries for both tagged files, the CSDb
group page for Pulse Productions, the CSDb scener profile for Odie, the
Lemon64/TMR forum post, and the three sibling Odie cards.
