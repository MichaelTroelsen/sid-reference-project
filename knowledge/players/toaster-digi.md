# Toaster_Digi

```json
{
  "id": "toaster-digi",
  "name": "Toaster_Digi",
  "aliases": ["Toaster_Digi"],
  "authors": ["Tomasz Przybylski (Toaster)"],
  "released": "No tool release exists — this is an in-house/personal routine embedded per-track, not a distributed player with a version history. A full census (2026-07-31) of all 17 tagged files' own CSDb SID-entry `Released` fields (csdb.dk webservice, type=sid) shows the earliest attested date is 1994, a four-way tie: \"Do What I Like\" (sid id 41787), \"Fire (remix)\" (41785), \"Inside Your Dreams\" (41790), and \"Make Your Mind Up\" (41783) — all recorded as \"Released: 1994 Atlantic\". This is an earliest-attestation date, not a player/tool release date.",
  "status": "stub",
  "platform": "Native C64. Not a distributed editor/tool — a sample/digi-playback routine hand-embedded per track, not a packaged product. Confirmed by a full census (2026-07-31) of Toaster's own CSDb Credits (scener id 8555, 38 credit entries): the only releases credited to him with type 'C64 Tool' are Contax Base (1994), Atlantic Turbo-L (a turbo loader, 1994), and Start Linker V3.0 (2011) — none is a sample/digi editor, and no CSDb release matching a 'Toaster Digi(Player)'-type name was found anywhere in his credit list.",
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
    "The '_Digi' in the tag name is NOT confirmed by this project's own tooling — the '[RSID?]' hint in scripts/dev/coverage.js is a bare filename regex (/digi|sample|mixer/i), not an RSID-flag read. However, UNLIKE most tags in this batch, there IS independent corroborating evidence here: CSDb explicitly credits Toaster with a 'Sampling' role (not just 'Music') on multiple releases whose titles match locally-tagged files, e.g. 'Make Your Mind Up' (CSDb release 86956, 1994, role 'Sampling', event Visual Party 4.0, entered as 'Compo Sample') and 'Poison' (CSDb release 98657, role 'Sampling'). So the sample/digi association here is scene-attested, even though the routine's actual mechanism (voltage-clocked D/A, sample-and-hold, ring-mod trick, etc.) is unknown (TODO).",
    "Extremely concentrated usage: 17 files across only 3 composers in this dataset — Toaster himself (10 files), Stice (4), Snowball (3) (data/composers/*.json aggregation). SIDId's entry for this tag has only an AUTHOR line, no NAME/reference/comment fields (deepsid_dl/sidid.nfo) — the absence of a NAME field is itself a signal this was never packaged as a titled, released tool, consistent with a personal/in-house routine rather than a published editor.",
    "The 3 composers are NOT in the same CSDb group: Toaster is credited to Atlantic/Legion/Reliance (CSDb scener 8555), Stice to Estate/Respect/Street Children (CSDb scener 13798), Snowball to Therapy (CSDb scener 2448) — all three are Polish sceners (data/composers/toaster.json, stice.json, snowball.json all list country 'Poland'), but not the same crew. Each is independently credited 'Sampling' only on their OWN tracks (e.g. Stice solely credited on 'Vodoo People', CSDb release 217957; Snowball solely credited on 'Dune') — Toaster is not cross-credited on their tunes. Why the SIDId byte signature matches across three unrelated groups is unresolved: plausibly Toaster's digi-playback code circulated informally among Polish sceners of the same era, but that is inference, not a sourced claim (TODO: confirm via disassembly/byte-signature comparison).",
    "Re-research pass, 2026-07-31: censused all 17 tagged files' own CSDb SID-entry `Released` field directly (type=sid webservice, not sampled) — Toaster's 10: B.G. (Centory remix) 41788 '1995 Atlantic'; Cologne 41791 '1995 Atlantic'; Do What I Like 41787 '1994 Atlantic'; Fire (remix) 41785 '1994 Atlantic'; Inside Your Dreams 41790 '1994 Atlantic'; Journey 41789 '1995 Atlantic'; Make Your Mind Up 41783 '1994 Atlantic'; Next Tekkno 1 41786 '1995 Atlantic'; No Name (tune 3) 44978 '1995 Legion'; Poison 41784 '1995 Atlantic'. Stice's 4 (all 'Street Children'): Block Rockin' Beats 50059, Dig Your Own Hole 50057, Ghetto People 50058, Where Can I Get My F. Balloon? 50060 — all '1997 Street Children'. Snowball's 3: Captain Jack 43354 '199? Snowball' (year itself uncertain per CSDb's own field), Dune 49967 '1995 Snowball', Street Fighter 43355 '1995 Therapy'. Earliest attested across the full set is 1994 (four-way tie, all Toaster/Atlantic), confirming — not correcting — the prior sampled claim, but the prior claim cited only one of the four tied files. `released` is now filled with this census-based earliest-attestation date instead of a bare TODO string.",
    "Re-research pass, 2026-07-31: HVSC STIL.txt (data/hvsc/STIL.txt) was checked for all 17 tagged files under /MUSICIANS/T/Toaster/, /MUSICIANS/S/Stice/, /MUSICIANS/S/Snowball/ — none carries a COMMENT field describing the digi/sampling mechanism (only TITLE/ARTIST, since these are all cover versions of commercial dance/techno tracks — 2 Unlimited, The Prodigy, Chemical Brothers, Masterboy, etc. — consistent with the 'Compo Sample' competition category already noted for 'Make Your Mind Up'). This is a genuine negative result, not an omission.",
    "Re-research pass, 2026-07-31: queried the CSDb webservice for Toaster's full Credits list (type=scener, id=8555, depth=2) to check for a dedicated digi/sample-player tool release under his name — 38 credit entries total, only 3 of type 'C64 Tool' (Contax Base 1994, Atlantic Turbo-L 1994, Start Linker V3.0 2011), none a sample/digi editor. This directly supports (rather than merely asserts) the 'no dedicated CSDb tool/release entry found' claim now recorded in `platform`.",
    "Re-research pass, 2026-07-31: Lemon64 (lemon64.com) and Forum64 (forum64.de) were searched explicitly per research protocol for 'Toaster'/'Atlantic' + C64 sampler/digi terms — no thread on either forum mentions Toaster's routine specifically; both forums' relevant hits are generic C64-digi-technique discussions unrelated to this composer. Recorded as a checked negative, not a skipped step."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Tomasz Przybylski / Toaster (groups Atlantic/Legion/Reliance, country Poland, releases incl. 'Make Your Mind Up' 1994 role Sampling): https://csdb.dk/scener/?id=8555",
    "CSDb release 'Make Your Mind Up' (Toaster, 1994, role 'Sampling', event Visual Party 4.0): https://csdb.dk/release/?id=86956",
    "CSDb scener Stice / Szymon Kedzia (groups Estate/Respect/Street Children, Poland; sole 'Sampling' credit on 'Vodoo People' CSDb release 217957): https://csdb.dk/scener/?id=13798",
    "CSDb scener Snowball / Sebastian Sobczyk (ex-member Therapy, Poland; sole 'Sampling' credit on 'Dune'): https://csdb.dk/scener/?id=2448",
    "Local dataset: 17 files tagged Toaster_Digi across 3 composers — Toaster (10), Stice (4), Snowball (3) — see data/composers/*.json aggregation",
    "data/composers/toaster.json, stice.json, snowball.json (HVSC MUSICIANS profile: full names, country Poland, CSDb scener ids)",
    "CSDb webservice (scripts/lib/csdb-client.js), type=sid, full census of all 17 tagged files, 2026-07-31: https://csdb.dk/webservice/?type=sid&id=<id> for ids 41788, 41791, 41787, 41785, 41790, 41789, 41783, 41786, 44978, 41784 (Toaster), 50059, 50057, 50058, 50060 (Stice), 43354, 49967, 43355 (Snowball)",
    "CSDb webservice, type=scener, id=8555, depth=2 (Toaster's full Credits list, checked for a dedicated digi/sample-player tool release — none found; only 3 'C64 Tool' credits, none a digi editor), 2026-07-31: https://csdb.dk/webservice/?type=scener&id=8555&depth=2",
    "HVSC STIL.txt (data/hvsc/STIL.txt), checked 2026-07-31 for all 17 files under /MUSICIANS/T/Toaster/, /MUSICIANS/S/Stice/, /MUSICIANS/S/Snowball/ — no COMMENT field on any entry describing the digi mechanism (negative result)",
    "Lemon64 forum search (lemon64.com), 2026-07-31, 'Toaster'/'Atlantic' + C64 sampler/digi terms — no thread found specific to this composer's routine (negative result)",
    "Forum64 forum search (forum64.de), 2026-07-31, 'Toaster'/'Atlantic' + C64 Sampler/Digi terms — no thread found specific to this composer's routine (negative result)"
  ]
}
```

## Overview

Toaster_Digi is the SIDId tag for a digi/sample-playback routine attributed to
**Tomasz Przybylski**, handle **Toaster**, a Polish scener (member of Atlantic,
Legion, Reliance — CSDb scener 8555). Locally it appears in only **17 files
across 3 composers**: Toaster himself (10 files), plus **Stice** (4) and
**Snowball** (3) — all three Polish, but in different, unrelated CSDb groups
(data/composers/*.json aggregation). SIDId's entry for the tag carries only an
`AUTHOR` line — no `NAME`, `reference`, or `comment` — consistent with an
in-house routine that was never packaged and released as a titled, standalone
tool. Unlike several other `_Digi`-tagged families in this batch, there is
real corroborating evidence for the "digi" label: CSDb explicitly credits
Toaster with a **"Sampling"** role (distinct from "Music") on releases whose
titles match locally tagged files, e.g. "Make Your Mind Up" (CSDb 86956,
1994, entered into a "Compo Sample" category at Visual Party 4.0) and "Poison"
(CSDb 98657). Not a distributed tool: a 2026-07-31 census of all 38 of
Toaster's own CSDb credits found only three releases of type "C64 Tool"
(Contax Base, Atlantic Turbo-L, Start Linker V3.0), none a digi/sample
editor — so `csdb_release` stays `null` and `platform` records this as an
embedded, per-track routine, not a published product. A full per-file
census of all 17 tagged files' own CSDb `Released` fields puts the earliest
attested date at **1994** (a four-way tie, all Toaster/Atlantic tunes),
recorded as an earliest-attestation date rather than a tool-release date.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the sample/digi claim is unusually
well-attested here via CSDb's "Sampling" role credits, not just the filename
regex; (2) extreme concentration (17 files/3 composers) marks this as a
personal or very-small-circle routine, not a published tool — a full census
of Toaster's CSDb credit list confirms no dedicated digi/sample-player tool
release exists under his name; (3) the 3 composers belong to 3 different,
unrelated CSDb groups, so the reason the same SIDId signature spans all of
them is unresolved — plausible informal code sharing among Polish sceners,
but unconfirmed (TODO); (4) HVSC STIL.txt and both Lemon64 and Forum64 were
checked explicitly and yielded no additional technical detail on the
routine — genuine negative results, not skipped steps.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a full 2026-07-31 CSDb
census (all 17 tagged files' own SID-entry `Released` fields, and Toaster's
full 38-entry Credits list) researched for provenance. `status: stub` — no
runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener pages for Toaster/
Stice/Snowball, CSDb release pages for "Make Your Mind Up" and cross-checked
titles, the local composer aggregation, the 2026-07-31 CSDb SID-entry/Credits
census, HVSC STIL.txt, and the Lemon64/Forum64 searches.
