# Dutch-USA_Team/86

```json
{
  "id": "dutch-usa-team-86",
  "name": "Dutch-USA_Team/86",
  "aliases": ["Dutch-USA_Team/86"],
  "authors": ["Marco Swagerman (MC), The Dutch USA-Team"],
  "released": "1986 (both of the tag's 2 known files carry their own CSDb-attested 'Released: 1986' date on their individual SID pages — csdb.dk/sid/?id=37977 'Convincing' and csdb.dk/sid/?id=37975 'Galdrumway'; the Dutch USA-Team's own CSDb group page also lists FoundYear 1986, csdb.dk/group/?id=1392 — so the '86' in the tag name is now corroborated, not just guessed, though no source states 1986 as this specific driver's own release/write date as opposed to the tunes' dates)",
  "status": "stub",
  "platform": "Native C64 in-file routine — both known files are tagged 'player_type: Normal built-in' in data/composers/mc.json (i.e. the player is compiled into the .sid, not a separate loadable format). Presumably an earlier or otherwise different Dutch USA-Team (DUSAT) routine than the same team's later, better-documented 'Pro-Drum' (see [[dutch-usa-team-prodrum]], SIDId tag Dutch-USA_Team/ProDrum). No source states these two tags are the same code, and DUSAT's other carded tools (Rock Monitor, Music Assembler) already establish this team built multiple, distinct tools with different credited coders. Not merged. No CSDb tool/release page dedicated to a driver named 'Dutch-USA_Team/86' was found (searched CSDb, Lemon64, Forum64) — only the two tunes' own SID release pages exist.",
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
    "2 files, 1 composer, both by MC (Marco Swagerman) himself: 'Convincing' and 'Galdrumway'.",
    "Sibling DUSAT tools already carded in this KB: [[dutch-usa-team-prodrum]] (Pro-Drum, coded by MC, tag 'Dutch-USA_Team/ProDrum'), knowledge/players/rockmonitor.md (Rock Monitor, coded by OPM/Oscar Giesen), knowledge/players/music-assembler.md (Music Assembler, coded by MC+OPM jointly) — same team-link caveat as those cards apply here: no source confirms shared code between any of these DUSAT tools.",
    "SIDId has an entry for 'Dutch-USA_Team/ProDrum' but NONE for 'Dutch-USA_Team/86' (checked data/sidid.json directly) — this tag is a distinct, less-documented signature from the same team.",
    "CENSUS (both of the 2 tagged files checked, not sampled): 'Convincing' (csdb.dk/sid/?id=37977, load $4000/init $5E00/play $C189, 4 subtunes, 6581/PAL, Released 1986) and 'Galdrumway' (csdb.dk/sid/?id=37975, load $5400/init $6100/play $0000, 1 subtune, 6581/PAL, Released 1986). The two files' init/play addresses differ from each other, consistent with either a relocatable in-file routine or genuinely different code per tune — PSID header metadata only, not a disassembly fact, and not written into the Tier 3 `entry` field.",
    "Distinct sibling tag, not this one: SIDId-absent 'Dutch-USA_Team/MC' (also 2 files, also solely by MC) is a THIRD, separately-carded DUSAT signature — see knowledge/players/dutch-usa-team-mc.md. Three uncarded/lightly-carded DUSAT tags exist for MC alone (/86, /MC, /ProDrum) plus the widely-used Music_Assembler tag; none has been shown to share code with any other.",
    "CSDb's own group page for Dutch USA-Team (csdb.dk/group/?id=1392, Short 'DUSAT', FoundYear 1986) lists the team's 'MAIN RELEASES' as Music-Assembler and the Rockmonitor series only — it does not name a tool called '86', supporting the reading that this SIDId tag denotes an early/undocumented routine rather than a titled, separately-released product."
  ],
  "sources": [
    "Local dataset: data/composers/mc.json — 2 files (Convincing csdb_id 37977, Galdrumway csdb_id 37975); knowledge/COVERAGE.md rank #80",
    "Existing KB card: knowledge/players/dutch-usa-team-prodrum.md (team context, sibling tools, deliberately not merged)",
    "Sibling KB card: knowledge/players/dutch-usa-team-mc.md (a third, distinct DUSAT/MC-only tag, also stub)",
    "data/sidid.json byTag — checked, entry exists for 'Dutch-USA_Team/ProDrum' but NOT 'Dutch-USA_Team/86'",
    "CSDb SID page, Convincing: https://csdb.dk/sid/?id=37977 (Released 1986; load $4000/init $5E00/play $C189, 4 subtunes)",
    "CSDb SID page, Galdrumway: https://csdb.dk/sid/?id=37975 (Released 1986; load $5400/init $6100/play $0000, 1 subtune)",
    "CSDb webservice, scener 4074 (Marco Swagerman/MC): MemberOf Dutch USA-Team, Group ID 1392, since 1/1-1986 — fetched via scripts/lib/csdb-client.js getScener(4074)",
    "CSDb webservice, group 1392 (Dutch USA-Team, AKA USA-Team/DUSAT): FoundYear 1986, MAIN RELEASES text names Music-Assembler and Rockmonitor only, no '86' tool — fetched via scripts/lib/csdb-client.js getGroup(1392), https://csdb.dk/group/?id=1392",
    "Searched CSDb, Lemon64 (lemon64.com), and Forum64 (forum64.de) for a dedicated 'Dutch-USA_Team/86' tool/driver page or thread — none found; csdb_release left null with this negative result recorded rather than guessed"
  ]
}
```

## Overview

`Dutch-USA_Team/86` is a raw Player-ID tag covering 2 files, both by
**Marco Swagerman (MC)** of **The Dutch USA-Team (DUSAT)** — the same
Dutch scene team behind two other tools already carded in this KB,
[Pro-Drum](dutch-usa-team-prodrum.md) (also coded by MC, under the
separate tag `Dutch-USA_Team/ProDrum`) and [Rock
Monitor](rockmonitor.md)/[Music Assembler](music-assembler.md) (coded by
Oscar Giesen, alone or with MC), plus a third, separately-carded MC-only
tag [`Dutch-USA_Team/MC`](dutch-usa-team-mc.md). No source confirms this
tag is the same code as Pro-Drum or either sibling tool; it is kept as its
own card. SIDId carries an entry for `Dutch-USA_Team/ProDrum` but has none
at all for this `/86` tag. Both of the tag's 2 files (a full census, not a
sample) carry their own CSDb `Released: 1986` date, and CSDb's group page
for Dutch USA-Team lists `FoundYear: 1986` — corroborating the `86` in the
tag name as the team's founding year and the earliest attested use of this
routine, though no source states 1986 as the driver code's own write date
as distinct from these two tunes' dates. No dedicated CSDb tool/release
page for a driver named "Dutch-USA_Team/86" was found on CSDb, Lemon64, or
Forum64, so `csdb_release` stays `null`.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are the team link (same
composer, same scene circle as two other carded DUSAT tools) without any
confirmed code-sharing evidence, the same caution already documented on
`dutch-usa-team-prodrum.md` for its own sibling relationships; and the
PSID-header census of both files, which shows differing init/play
addresses between the two tunes (metadata only, not written into Tier 3).

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data, the
DUSAT team link, and CSDb-sourced release-year corroboration are
confirmed. No SIDId entry exists for this exact tag, and no dedicated CSDb
tool page names a driver called "Dutch-USA_Team/86". No runtime fact was
guessed.

## Sources

See the `sources` array — local composer data (a full census of both
tagged files), the sibling `dutch-usa-team-prodrum.md` and
`dutch-usa-team-mc.md` cards, SIDId (checked, no match for this tag), and
CSDb's XML webservice (both tunes' SID pages, the composer's scener
record, and the Dutch USA-Team group record).
