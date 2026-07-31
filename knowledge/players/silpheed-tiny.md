# Silpheed_tiny

```json
{
  "id": "silpheed-tiny",
  "name": "Silpheed_tiny",
  "aliases": ["Silpheed_tiny"],
  "authors": ["Silpheed"],
  "released": "TODO: no dedicated tool-release date found — this reads as an in-house routine, not a dated publication. What IS confirmed via CSDb's per-file webservice lookup (each tune's own `Released` field, not a `UsedIn` release year): 'Rain' (sid id 60206) and 'Until Late' (sid id 60146) both carry `Released: '2022 The Solution'`; 'Blue Sunday' (sid id 62350) carries `Released: '2023 Arsenic'`. So the earliest attested use of this signature is 2022, all three files by group The Solution/Arsenic — but that is a first-use date for the tunes, not a release date for the routine itself.",
  "status": "stub",
  "platform": "Native C64 personal/in-house replay routine (not a distributed editor). CSDb's own scener record for Silpheed lists his freelance functions as 'Coder' AND 'Musician' (https://csdb.dk/webservice/?type=scener&id=11713&depth=2), consistent with him having written his own small playback routine rather than using a third-party tool. Confirmed: CSDb's scener page lists exactly one 'C64 Tool' release credited to him ('Borderpolizei'/'Grenzkontrolle', 2021, id 201894) but that is an unrelated demo-compo entry (a joke/'border control' themed piece for a 2021 party compo), not a music player — checked its own release record directly, no music/SID connection. No CSDb tool/release entry, manual, or public source was found under the name 'Silpheed_tiny' or 'Silpheed' as a program.",
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
    "SIDId's sidid.nfo has NO entry for 'Silpheed_tiny' (checked) — no author/released/comment metadata. BUT sidid's actual signature-matching config (sidid.cfg, the byte-pattern file, not just the author-only .nfo index) DOES contain a 'Silpheed_tiny' entry with a real byte signature (`68 9D 05 D4 68 9D 06 D4 B4 END`), confirming this is a genuinely distinct, deliberately identified player signature, not a same-code alias of another tag left undocumented in the .nfo. Checked https://github.com/cadaver/sidid/blob/master/sidid.cfg directly.",
    "100% single-composer concentration: all 3 locally tagged files ('Rain', 'Until Late', 'Blue Sunday') belong to composer Silpheed himself (data/composers/silpheed.json); a 4th file by the same composer ('Morning Star') carries no player tag. Census of all 3 tagged files complete (per knowledge/EXTRACTION-TEMPLATE.md's 'never spot-check' rule) via CSDb's `type=sid` webservice lookups.",
    "Composer profile: handle 'Silpheed', country Australia, CSDb scener id 11713 (data/composers/silpheed.json) — real name not recorded. CSDb's scener record (depth=2) additionally shows: freelance functions Coder + Musician; member of The Solution (joined 2018-05-16, ex-Hitmen 1996-2016) — https://csdb.dk/webservice/?type=scener&id=11713&depth=2",
    "All 3 tagged tunes are small 4K-intro/512-byte-compo pieces (per-tune CSDb data: 'Rain' placed 2nd in the 'Unofficial Tiny SID Compo 2022' 512B-game category; 'Until Late' used in a 4K intro 'Rasterfall'; 'Blue Sunday' used in a Fast Intro), all DataSize 503-587 bytes — small enough that a compact hand-rolled '_tiny' routine (vs. a general tracker) is plausible, though this is inference from context, not a documented design statement.",
    "No CSDb tool/release entry named 'Silpheed_tiny' or 'Silpheed' found — the only 'C64 Tool'-typed release credited to this scener ('Borderpolizei', 2021, csdb.dk/release/?id=201894) is an unrelated party-compo entry, not a music player (checked its own release record: released for 'Borderline 2021 Compo', a non-music demo/joke-tool event).",
    "Lemon64 (lemon64.com) and Forum64 (forum64.de) could not be searched directly this pass: Lemon64's own search endpoint 301-redirected without returning results, and Forum64 is behind a Cloudflare challenge page that neither curl nor WebFetch can pass (no claude-in-chrome browser tool was available in this environment to load it live). A Bing web search for the exact tag also surfaced nothing. This is a genuine capability gap, not a confirmed absence — flagging for a future pass with browser-tool access.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Silpheed_tiny' (no author/released/comment fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId sidid.cfg checked, confirms a real byte-pattern signature entry named 'Silpheed_tiny' exists (distinct from the .nfo's silence): https://github.com/cadaver/sidid/blob/master/sidid.cfg",
    "data/composers/silpheed.json (profile: handle Silpheed, country Australia, csdb_id 11713, csdb_type scener; folder[] entries for all 4 of his files, 3 tagged Silpheed_tiny + 1 untagged 'Morning Star')",
    "CSDb webservice, per-tune sid entries (own `Released` field read, not `UsedIn`): https://csdb.dk/webservice/?type=sid&id=60206&depth=2 (Rain, 'Released: 2022 The Solution'), https://csdb.dk/webservice/?type=sid&id=60146&depth=2 (Until Late, 'Released: 2022 The Solution'), https://csdb.dk/webservice/?type=sid&id=62350&depth=2 (Blue Sunday, 'Released: 2023 Arsenic')",
    "CSDb webservice, scener record: https://csdb.dk/webservice/?type=scener&id=11713&depth=2 (Coder+Musician functions, group memberships The Solution/Hitmen)",
    "CSDb webservice, the one 'C64 Tool' release credited to this scener, checked and ruled unrelated: https://csdb.dk/webservice/?type=release&id=201894&depth=1 (Borderpolizei/Grenzkontrolle, 2021 Borderline compo entry, no music/SID connection)",
    "Local dataset: 3 files tagged Silpheed_tiny, single composer, full census (see knowledge/COVERAGE.md)",
    "Lemon64 (lemon64.com search) and Forum64 (forum64.de, Cloudflare-gated) checked this pass, both inconclusive/blocked — see quirks for the exact limitation"
  ]
}
```

## Overview

Silpheed_tiny is the Player-ID tag for a small C64 replay routine used
exclusively by its namesake composer, handle **Silpheed** (Australia, real
name unrecorded; CSDb lists him as both Coder and Musician, member of
The Solution since 2018, ex-Hitmen). All 3 locally tagged files are his
own — census complete. CSDb's own per-tune data dates the earliest attested
use to 2022 ('Rain' and 'Until Late', both `Released: 2022 The Solution'),
with 'Blue Sunday' following in 2023 (Arsenic); all three are small
intro/compo pieces (503-587 bytes). SIDId's author-only `.nfo` index has no
entry for this tag, but its underlying `sidid.cfg` signature file does
carry a real byte-pattern match for 'Silpheed_tiny', confirming this is a
genuinely distinct, deliberately identified signature rather than an
undocumented alias. No CSDb tool/release, manual, or public source names
"Silpheed_tiny" as a program — consistent with a personal, never-packaged
routine, likely his own (he is credited as a coder).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage,
full census of all 3 files; (2) SIDId's `.nfo` has no entry but `sidid.cfg`
does — a real signature, just undocumented; (3) earliest attested use is
2022 per CSDb's own per-tune `Released` field, not a tool-release date;
(4) Lemon64/Forum64 could not be searched directly this pass (Cloudflare/
redirect issues, no browser-tool access) — a genuine gap, not a confirmed
absence.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. Tier 1 (local data) plus a Tier 2 provenance pass this run:
SIDId's `.nfo` and `.cfg` both checked directly, CSDb's XML webservice
queried per-tune (own `Released` field, not `UsedIn`) and for the
composer's full scener record and his one 'Tool' release (ruled
unrelated). Lemon64/Forum64 attempted but blocked (see quirks). No public
source or disassembly exists, so all Tier 3 fields remain `TODO`.
`status: stub`.

## Sources

See the `sources` array — SIDId `.nfo` (absence) and `.cfg` (signature
present), CSDb webservice per-tune/scener/release lookups, and the local
composer profile.
