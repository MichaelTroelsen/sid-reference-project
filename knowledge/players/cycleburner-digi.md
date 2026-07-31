# Cycleburner_Digi

```json
{
  "id": "cycleburner-digi",
  "name": "Cycleburner_Digi",
  "aliases": ["Cycleburner_Digi"],
  "authors": ["Even Scharning (Cycleburner)"],
  "released": "No versioned product release exists (personal embedded routine, not a distributed tool) — earliest tune attested among the 30 tagged files is 'Sign O' Times' by Cycleburner (as 'NOP'), 1989-02-26, at the Rawhead/Bros/Suppliers Party (Spydeberg, Norway), released under the group 'Weird Science' per its CSDb SID entry — earlier than the previously-noted Anal Probe pt.3 (1989-12-30) and Youthquake (1989-06-29). This is an earliest-attestation date, not a release date for the player itself.",
  "status": "stub",
  "platform": "Native C64. Not a distributed editor/tool — a composer's own embedded playback routine, hand-included in each of his music's binaries.",
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
    "The 'Digi' in the tag is NOT confirmed technical evidence of sample/digi playback in the strict per-frame register-trace sense — no disassembly has been done here. However, unlike most _Digi-tagged personal routines in this batch, there IS independent biographical corroboration for the name: Cycleburner's demoscene credits (Demozoo) explicitly list 'Sampling' as a role on '2 MHz Hell' (Oct 1988) and 'Music (sampling)' on 'Youthquake' (Jun 1989), and he is described as having created the 'digimix' for Contex's Batman Digi-Demo. This is corroborating biography, not a confirmed disassembly of the routine in these particular 30 files — still TODO.",
    "SIDId (data/sidid.json byTag) records only 'AUTHOR: Even Scharning (Cycleburner)' for this tag — no released year, no CSDb reference, no comment. That absence itself is a signal: unlike published tools (Digitalizer, SidWizard, etc.) which SIDId links to a CSDb release id, this tag has none — consistent with a personal routine that was never packaged or released as a standalone product.",
    "Local usage is 30 files across 3 composers: Cycleburner himself (Even Scharning, 18 files — his own demos for Contex 1989-90 and Megastyle into 1994), Feekzoid (Paul Hannay, 6 files, Scotland, active 1992-93, group 'Warriors of the Wasteland' per CSDb — no documented group overlap with Cycleburner/Contex/Megastyle), and Thomas Saltkjelvik (6 files, Norway, group 'Creators' per HVSC Musicians.txt — again no documented overlap). Source: data/composers/cycleburner.json, feekzoid.json, thomas-saltkjelvik.json aggregation.",
    "Because this project's 'player' tag is a SIDId byte-signature match against the actual replay code embedded in the .sid binary (not a self-reported credit), Feekzoid's and Saltkjelvik's files matching the same signature as Cycleburner's own tunes is real evidence the routine's code was reused/borrowed across composers who otherwise have no documented scene connection to Cycleburner — not just a coincidental naming. The mechanism of that reuse (shared source, copied binary routine, or a common ancestor routine) is unconfirmed — TODO.",
    "No CSDb release exists for a standalone 'Cycleburner_Digi' tool/player — searches for a Cycleburner-authored 'Digi Player'/'DigiPlayer' release on CSDb turned up nothing. This supports treating it as an embedded personal routine, not a published editor.",
    "A dedicated interview (c64-hof.com, 'The Cycleburner Interview') independently corroborates the biography: he used the handle 'NOP' before Cycleburner (matches this project's own local data — data/composers/cycleburner.json's 'handles' field literally shows '<del>NOP</del>, Cycleburner'), and his group chain runs The Black Knights -> Weird Science 2662 -> Contex -> Megastyle Inc. On sampling specifically he says: 'At first I used a sampler that a friend of mine had made, and it was actually his interest for electronics that first made me get a computer and later get into sampling' — i.e. his early digi/sampling work traces to a friend's home-built hardware sampler, not a released C64 tool. Still no technical detail on the playback routine itself (no disassembly, no source claim) — the interview is biographical corroboration only, not new provenance for a memory map or format.",
    "Lemon64 and Forum64 were checked explicitly per research protocol. Lemon64's 'Looking for a loada Cycleburner stuff' thread (t=4334) only catalogues his demo credits (Anal-Probe, Batman digi-demo, Youthquake, etc.), no player/tool technical detail. Forum64's Vandalism News #75 release thread confirms a Dec 2024 interview with Cycleburner exists in that diskmag, but the diskmag content itself is not web-readable (WebFetch returned 403 on forum64.de directly; no claude-in-chrome browser tool was available in this environment to view it via JS-rendered/authenticated access) — a genuine information gap, not a refused-to-look gap.",
    "Re-research pass, 2026-07-31: swept all 30 tagged files' CSDb SID entries (type=sid webservice, not the flaky HTML site) for release/date data, not a sample. Cycleburner's own 18 tunes span 1989-02-26 ('Sign O' Times', as NOP, group 'Weird Science', at the Rawhead/Bros/Suppliers Party a.k.a. Spydeberg Party, Norway) through 1994 ('Tribute 1994 invitation', Censor/Genesis Project) — the Feb 1989 'Weird Science' date independently corroborates the c64-hof.com interview's stated group chain (Weird Science -> Contex -> Megastyle) and predates the card's previous earliest note (Youthquake, Jun 1989). Feekzoid's 6 tagged tunes are all dated '1992 Feekzoid' (self-released, no group) per their SID entries. Saltkjelvik's 6 tagged tunes range 1991 ('Razorheads', group 'Direct Design' — the one outlier not matching his usual 'Creators' group) through 2002 ('Voodoo People', 'Creators'). Checked CSDb webservice type=scener depth=3 for Cycleburner's full production list (data/composers aggregation cross-referenced against the raw CSDbData dump) for any standalone tool/utility release named 'Cycleburner Digi'/'Digi Player'/similar — none found; only demo/one-file-demo/music releases appear. This reconfirms (does not newly discover) the prior negative finding that no CSDb release exists for this as a packaged tool, and sets `csdb_release` to `null` on that basis rather than leaving it unaddressed. `released` is now filled with the earliest-attested tune date (with explicit earliest-attestation vs release-date framing) instead of TODO."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no release/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo (local copy: deepsid_dl/sidid.nfo)",
    "Local dataset: data/sidid.json byTag.Cycleburner_Digi; data/composers/cycleburner.json, feekzoid.json, thomas-saltkjelvik.json (30 files: 18 Cycleburner, 6 Feekzoid, 6 Saltkjelvik) — re-verified by direct grep on 2026-07-24",
    "CSDb scener profile, Cycleburner/Megastyle/Offence/ex-Contex (groups, activity, country Norway): https://csdb.dk/scener/?id=8090",
    "CSDb scener profile, FeekZoid (Scotland, ex-Warriors of the Wasteland, active 1992-93): https://csdb.dk/scener/?id=12426",
    "Demozoo, Cycleburner productions with dates incl. 'Sampling'/'Music (sampling)' credits on 2 MHz Hell (1988) and Youthquake (1989): https://demozoo.org/sceners/15762/",
    "HVSC Musicians.txt entry for Thomas Saltkjelvik (group Creators): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "The Cycleburner Interview (c64-hof.com; NOP alias, group chain, sampler-from-a-friend quote): https://www.c64-hof.com/groups/m/msp/fltcycle.htm",
    "Lemon64 forum, 'Looking for a loada Cycleburner stuff' (demo credit catalogue, no player tech detail): https://www.lemon64.com/forum/viewtopic.php?t=4334",
    "Forum64, Vandalism News #75 release thread (confirms a Dec 2024 Cycleburner interview exists in the diskmag; content not web-accessible from this environment): https://forum64.de/index.php?thread%2F152997-new-release-vandalism-news-75=",
    "CSDb webservice (scripts/lib/csdb-client.js), type=sid, full sweep of all 30 tagged files' entries, 2026-07-31 (earliest-attested date, group names, party/event data): https://csdb.dk/webservice/?type=sid&id=<id> for ids 6642,6644,6647,6649,6651,6652,6655,6656,6658,6660,6662,6663,6665,6667,6669,6671,6672,6674 (Cycleburner), 12411,12413,12422,12424,12468,12503 (Feekzoid), 41011,41012,40119,40120,40121,57015 (Saltkjelvik); Sign O' Times entry specifically at https://csdb.dk/sid/?id=6662",
    "CSDb webservice, type=scener, id=8090, depth=3 (Cycleburner's full production list, checked for any standalone tool release — none found): https://csdb.dk/webservice/?type=scener&id=8090&depth=3"
  ]
}
```

## Overview

Cycleburner_Digi is the SIDId-detected playback routine embedded in music by
**Even Scharning ("Cycleburner")**, a Norwegian coder/musician active from
1988 on (groups Contex, then Megastyle from 1990, later Offence). It is not
a published editor or tool — no CSDb release exists for it, and SIDId's own
index (`data/sidid.json`) records only an author, no release date or
reference, unlike this batch's genuinely distributed tools. Locally it
appears on 30 files across 3 composers: 18 by Cycleburner himself, and 6
each by two composers with no documented scene connection to him
(Feekzoid/Paul Hannay, Scotland; Thomas Saltkjelvik, Norway/Creators) —
see the Quirks section for why that spread is itself evidence, not noise.
The earliest-attested tune among these 30 files is Cycleburner's own
"Sign O' Times" (1989-02-26, as "NOP", group "Weird Science"), per a full
CSDb sweep of all 30 files' SID entries — an earliest-attestation date,
not a product release date, since no CSDb release exists for this as a
packaged tool (`csdb_release` stays `null`).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tag's "Digi" has real
biographical corroboration (Cycleburner is independently documented as a
"sampling"-credited coder on 1988-89 productions, and a dedicated c64-hof.com
interview traces his sampling interest to a friend's home-built hardware
sampler) but that is NOT the same as a confirmed disassembly of these 30
files' actual playback code — still `TODO`; (2) the three-composer spread is
meaningful because this project's player tag comes from a byte-signature
match on the embedded routine, not a self-reported credit — so its reuse by
Feekzoid and Saltkjelvik is real evidence of routine-sharing across
otherwise-unconnected composers, not a naming coincidence; (3) no CSDb
release for a tool by this name exists, consistent with it being a
personal/embedded routine rather than a published product; (4) Lemon64 and
Forum64 were both checked explicitly — neither yielded technical detail on
the routine itself (a Dec 2024 Cycleburner interview exists in Vandalism
News #75 per Forum64 but was not web-readable in this environment).

## Disassembly notes

None done here. No public source or CSDb release has been found to seed
runtime facts from — all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity (author, composer
concentration, absence of a published-tool CSDb release) is
SIDId/CSDb/Demozoo-sourced per the citations above; no runtime fact has been
disassembled or traced.

## Sources

See the `sources` array — SIDId, local composer-data aggregation, CSDb
scener profiles for Cycleburner and Feekzoid, Demozoo's Cycleburner
production list, HVSC's Musicians.txt for Thomas Saltkjelvik, the
c64-hof.com Cycleburner interview, and the Lemon64/Forum64 threads checked
for (and lacking) further technical detail.
