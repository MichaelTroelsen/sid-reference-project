# Sample Mon (Ghost/SampleMon)

```json
{
  "id": "ghost-samplemon",
  "name": "Sample Mon",
  "aliases": ["Ghost/SampleMon"],
  "authors": ["Slawomir Skrzynski (Ghost)"],
  "released": "1994 (V1.1, CSDb 9876); 1994 (V1.2, CSDb 121423); DeepSID start_year 1993",
  "status": "stub",
  "platform": "Native C64 tool (DeepSID: 'Native / C64 emulator'). CSDb categorizes both versions under release-type 'C64 Tool' (not Music), published by Biuro Informatyczno-Wydawnicze (BIW), Poland.",
  "csdb_release": 9876,

  "memory": {
    "load_address": "TODO",
    "zero_page": "4 bytes ($FA-$FD) + flipping $01 (DeepSID players.json, 'Sample Mon v1.x' entry)",
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
    "Name reading confirmed by SIDId ('Sample Mon' — i.e. Sample Monitor) and by CSDb's own categorization: both V1.1 (id 9876) and V1.2 (id 121423) are filed under release-type 'C64 Tool', not Music. A user comment on the V1.2 CSDb page from Puma (2013-09-01) reads 'I make my samples with this software' — direct evidence the tool is used to author/monitor digitized samples. The same user commented on the companion Digi Ripper V1.1 page: 'On this software i create 2 my samples :)'.",
    "4-bit digi playback capability (DeepSID players.json: 'digi: Yes; 4-bit'). The player routine likely writes samples to the SID volume register ($D418) — the standard 4-bit digi technique on the C64 — but this is inferred from the '4-bit digi' label, not from a disassembly.",
    "Same author (Ghost / Slawomir Skrzynski) also released 'Digi Ripper V1.1' in 1994 (CSDb 9875, download titled 'Super sampler.zip') — a sample-extraction/ripping tool. Verbatim quote from iAN CooG's comment on that release (CSDb, dated 05.08.2012, fetched live via the CSDb webservice 2026-08-01): 'hmm at least the player seems not the same routine, this digi player is found in /DEMOS/S-Z/School.sid /MUSICIANS/H/Helios_Rule3/Enforcer.sid /MUSICIANS/H/Helios_Rule3/Ha_Ha.sid /MUSICIANS/H/Helios_Rule3/Patatay.sid /MUSICIANS/H/Helios_Rule3/Samplemix.sid /MUSICIANS/K/Killer/God_Save_the_Screen.sid /MUSICIANS/M/Miss_Secret/Marky_Mark.sid /MUSICIANS/W/Warlock/Their_Law.sid the digiroutine in your 2 tunes is more similar to the one found in [Cannon_Fodder.sid, Pojedynek_z_Blizniakami.sid, and 5 JFK tunes]'. Read literally, iAN CooG is saying the routine in that Helios_Rule3/Killer/Miss_Secret/Warlock cluster is *not* the same as Digi Ripper's own, and is distinct again from the JFK/Cannon Fodder cluster — i.e. three routines are being told apart, not one being traced. What matters for this card: that first file list is an exact match (Enforcer, Ha!Ha!, Patatay, Samplemix, God Save the Screen, Marky Mark, Their Law) to 7 of this dataset's 18 local 'Ghost/SampleMon'-tagged files (confirmed by direct census, including Warlock's Their_Law.sid, csdb_id 42252) — strong independent corroboration that the SIDId tag correctly clusters a single real playback routine, even though whose routine it is (Sample Mon's vs Digi Ripper's vs something else BIW-internal) is not established. The JFK/Cannon Fodder cluster iAN CooG calls 'more similar' but distinct is tagged 'Assassin_Sample_Mixer' in this dataset (own sibling card: `assassin-sample-mixer.md`) — no `shares_routine_with` edge is asserted either way, since the only direct testimony available says these are NOT the same routine.",
    "BIW (Biuro Informatyczno-Wydawnicze) is a Polish publisher/developer, not a classic demoscene group. CSDb user Cresh (2009-11-23) noted it 'does not actually look like a scene group... More like a developer/publisher' and that it 'also sold games/tools on Amiga.' The group's 9 releases (1994-1995) are 7 tools (Professional Sound-Studio Player V2.0, Digi Ripper V1.1, Metamorph V1.01, Programator C-64, Sample Mon V1.1, Sample Mon V1.2, Sprite Master V1.05) and 2 games (Familiada, Core Wars Pro) — corrected from an earlier '6 tools' miscount by re-fetching the group page live; member Boguslaw Radziszewski (marked ex-member) is listed as coder/organizer. A third audio tool, Professional Sound-Studio Player V2.0 (CSDb, 1995), was also published under BIW, further suggesting a small commercial audio-toolkit focus rather than a traditional scene release.",
    "Moderate concentration: 18 files across 6 composers in this dataset (Yattaman 6, Swayze 5, Rule3 Helios 4, Killer 1, Secret Miss 1, Warlock 1). All 6 composers' HVSC profiles list Poland as country, consistent with a nationally-scoped tool tied to BIW rather than one person's private routine.",
    "DeepSID's curated players.json gives a start_year of 1993 for 'Sample Mon v1.x', while all CSDb releases are dated 1994 — suggesting development or an earlier version began in 1993.",
    "SIDId collapses both V1.1 and V1.2 to the single tag 'Ghost/SampleMon' with no version suffix and only references CSDb 9876 (V1.1). DeepSID's players.json instead references CSDb 121423 (V1.2). No per-version split is visible in local usage data."
  ],
  "sources": [
    "SIDId sidid.nfo entry 'Ghost/SampleMon' (name, author, release year/publisher, reference to CSDb 9876): https://github.com/cadaver/sidid/blob/master/sidid.nfo ; local copy deepsid_dl/sidid.nfo lines 520-524",
    "DeepSID curated players.json entry 'Sample Mon v1.x' (developer Ghost, start_year 1993, end_year 1994, csdb_id 121423, digi: 4-bit, zero_pages: $FA-$FD + $01, platform: Native / C64 emulator): data/players.json lines 4538-4570",
    "CSDb release Sample Mon V1.1 (id 9876, 'C64 Tool', author Ghost/code, 262 downloads): https://csdb.dk/release/?id=9876",
    "CSDb release Sample Mon V1.2 (id 121423, 'C64 Tool', user comment by Puma 'I make my samples with this software', 195 downloads): https://csdb.dk/release/?id=121423",
    "CSDb release Digi Ripper V1.1 (id 9875, companion tool by same author, iAN CooG comment noting digi player routine reuse): https://csdb.dk/release/?id=9875",
    "CSDb scener 'Ghost' (id 7073, Poland, coder; releases: Kangoroo 1992, Digi Ripper V1.1 1994, Sample Mon V1.1/V1.2 1994, Fifteen 1994, Minefield 1994, Programator C-64 1994): https://csdb.dk/scener/?id=7073 — verified live via CSDb webservice (`type=scener&id=7073`, depth 2 and 4) 2026-08-01. Note: the scener page/API does NOT itself display a real name (confirmed by direct fetch); the 'Slawomir Skrzynski' real-name attribution is SIDId's alone (see sidid.nfo citation above), not independently corroborated by CSDb.",
    "CSDb group 'Biuro Informatyczno-Wydawnicze' (id 6079, Poland, 9 releases 1994-1995 = 7 tools + 2 games, member Boguslaw Radziszewski (ex); user Cresh comment 23 Nov 2009 noting publisher-not-scene-group nature): https://csdb.dk/group/?id=6079 — verified live via CSDb webservice + page fetch 2026-08-01.",
    "CSDb release Sample Mon V1.1 id 9876, V1.2 id 121423, Digi Ripper V1.1 id 9875 — all three re-verified live via `scripts/lib/csdb-client.js` (`type=release`) 2026-08-01; fields (name, year, publisher group, coder credit, download counts, user comments) match exactly what was previously recorded.",
    "Local dataset: data/composers/*.json aggregation — re-censused by direct Python scan of every folder[].player field across all 1902 cached composer files 2026-08-01 (not a directory-wide grep, which silently skips this gitignored path) — 18 files tagged Ghost/SampleMon across exactly 6 composers (Killer 1, Rule3 Helios 4, Secret Miss 1, Swayze 5, Warlock 1, Yattaman 6), all 6 composer profiles confirmed country=Poland. Re-census reproduced the prior count exactly; no discrepancy found."
  ]
}
```

## Overview

Sample Mon is a native C64 sample-authoring utility by **Slawomir Skrzynski ("Ghost")**, released in
1994 (V1.1 and V1.2) by the Polish publisher **Biuro Informatyczno-Wydawnicze
(BIW)** — a small commercial developer, not a demoscene group. Its name and
CSDb categorization confirm it is a **sample monitor/editor**, not a music
tracker: both versions are filed under the **"C64 Tool"** release type
(not Music), and a user comment on V1.2 states plainly **"I make my samples
with this software."** DeepSID's curated player database lists it as a 4-bit
digi tool using ZP $FA-$FD plus flipping $01 — consistent with the classic
C64 technique of writing 4-bit samples to the SID volume register ($D418).

The same author released a companion tool, **Digi Ripper V1.1**, the same
year — a sample-extraction utility whose internal digi player routine has been
spotted (by CSDb user iAN CooG) in multiple SID files by different composers,
suggesting Ghost's digi code saw some reuse beyond BIW. A third BIW audio tool,
**Professional Sound-Studio Player V2.0** (1995), rounds out the picture of a
small commercial audio-toolkit operation. Local usage is modest and
geographically tight: 18 files across 6 composers, all Poland.

No public source code or documentation has been found for Sample Mon. The
only runtime fact available — the ZP footprint — comes from DeepSID's own
curated player database, not a disassembly. Every other Tier 3 field remains
`TODO`.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the CSDb release-type + user-comment
evidence for the "sample authoring/monitor" reading (stronger than a bare name
guess); the 4-bit digi capability and $FA-$FD ZP from DeepSID's curated data;
the sibling "Digi Ripper" tool by the same author, with iAN CooG's exact quoted
comment distinguishing three different digi routines (Digi Ripper's own,
the Helios_Rule3/Killer/Miss_Secret/Warlock cluster, and the JFK/Cannon Fodder
cluster) — a corroborating file-list match for this card's local census, but
explicit evidence *against* a shared-routine edge, not for one; the moderate,
Poland-wide (not single-composer) concentration, re-censused directly against
every cached composer file; and the BIW publisher-vs-scene-group distinction
(corrected release-type breakdown: 7 tools + 2 games, not 6+2).

## Disassembly notes

None done here. No public source or disassembly was found for Sample Mon; the
CSDb release pages carry only the .d64/.t64 binaries. DeepSID's curated
players.json entry provides the only known runtime fact (ZP: $FA-$FD + $01),
but its origin methodology is not documented — it appears to be
maintainer-researched metadata, not a published disassembly.

## Verification

Not verified. Identity (author, release dates, publisher) and the
tool/authoring-vs-player reading are CSDb/SIDId/DeepSID-sourced as cited above;
the ZP footprint is from DeepSID's curated players.json; every other runtime
field (memory map, entry points, data format) is `TODO` — `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, DeepSID players.json, CSDb releases
(V1.1 id 9876, V1.2 id 121423, Digi Ripper V1.1 id 9875), CSDb scener page
for Ghost, CSDb group page for BIW, and the local composer-data aggregation
for usage counts.
