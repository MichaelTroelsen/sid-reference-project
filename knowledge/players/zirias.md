# Zirias (BASIC SID Player)

```json
{
  "id": "zirias",
  "name": "Zirias (BASIC SID Player)",
  "aliases": ["Zirias"],
  "authors": ["Felix Palmen (Zirias)"],
  "released": "2018-01-11 earliest attested use (8192.sid, CSDb SID id 55387, used in the C64 game preview '8192 V0.3 alpha', csdb.dk/release/?id=161435 — release date corroborated by user comments dated 13-14 Jan 2018 on that page). All 3 tagged files censused: 8192.sid (2018-01-11, release 161435), Invitro.sid (2019-09-01, csdb id 57197, release 181278), EX_Beach.sid (2020-01-25, csdb id 57605, release 187145, EXAC 2020 party). NOTE: this predates the GitHub source repo (github.com/Zirias/c64_basicmusic) by ~10 months — the repo's earliest commit is 2018-11-15 ('initial commit'), confirmed via the GitHub commits API; the repo's 'created_at' of 2024-09-28 (previously read as the project's origin in this card) is actually just when the author pushed a README/example commit, NOT when the code was written. The 2018-01-11 8192.sid release therefore predates even the earliest commit in the current repo — either an earlier, uncommitted iteration of the player existed by Jan 2018, or the 8192.sid driver is a related-but-not-identical precursor to the committed c64_basicmusic code.",
  "status": "stub",
  "platform": "Native C64 — a BASIC language extension ('BASIC SID Player v1.0') adding music commands to C64 BASIC, rather than a standalone tracker/editor. Source is public on GitHub (github.com/Zirias/c64_basicmusic); the repo's own language breakdown is roughly 46% 6502 assembly, 44% BASIC, 7% C (plus a small Makefile/BitBake component and a conversion utility, mprg2bas.c). NO LICENSE FILE was found in the repo (checked via GitHub API: license field is null) — do not assume permissive/open licensing without re-checking.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not documented in the repo's top-level description (not disassembled/read in full for this card)",
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
    "patterns": "TODO (a custom BASIC-command notation is used instead of a binary pattern format — see quirks)",
    "instruments": "TODO (an '@i' BASIC command defines instruments with ADSR + waveform parameters, per the repo's own README — not yet mapped to a byte-level structure for this card)",
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
    "UNUSUAL AMONG THIS BATCH: this is a genuinely public, source-available tool — github.com/Zirias/c64_basicmusic, a 'BASIC SID Player v1.0' that adds four '@'-prefixed BASIC commands: '@i' (define an instrument: ADSR envelope + waveform + pulse width), '@t' (create note patterns via a custom notation), '@q' (sequence patterns across the three SID voices), '@p' (start playback at a given tempo). It ships example files and a conversion utility (mprg2bas.c) suggesting music data can be imported/converted rather than only hand-typed in BASIC.",
    "SIDId's entry for the bare 'Zirias' tag has ONLY an AUTHOR field ('Felix Palmen (Zirias)') — no name, released, or reference — so the SIDId fingerprint does not itself confirm this is specifically the c64_basicmusic project; the identification is made here by matching the composer handle 'Zirias' to the GitHub author's own handle, which is a strong but not certain match (same real name, same handle, both C64-SID-related) rather than a byte-for-byte confirmation.",
    "NO LICENSE FILE in the repo (GitHub API license field: null) — 'source is public' is NOT the same as 'open-source under a stated licence'; per this project's own rule, do not describe this as open-source without a licence citation, which does not exist here.",
    "CORRECTION (2026-07-31 census pass): a prior pass on this card read GitHub's repo 'created_at' (2024-09-28) as the project's origin and called it a '2024-2025 hobby project'. That was wrong — the GitHub commits API shows the repo's earliest commit is 2018-11-15 ('initial commit'), and CSDb shows the earliest tagged file (8192.sid) was released 2018-01-11, ~10 months BEFORE even that commit. 2024-09-28 is only when the author pushed a README/example (i.e. made the already-years-old code public), not when it was written. See `released` for full per-file census and dates.",
    "Repo stats at time of check: 3 stars, 14 commits total (12 from Nov 2018, 2 from Sep 2024), no formal GitHub releases published — https://github.com/Zirias/c64_basicmusic/commits/master",
    "Single-composer concentration: all 3 locally-tagged files are by Zirias himself (Felix Palmen, Germany, CSDb scener 25812) — expected for a personal tool with no other known users, but NOT a brand-new one: in active use across at least 2018-2020 per CSDb release dates on the tagged files.",
    "PSID header addresses differ per tagged file (header metadata only, not a disassembly fact — see EXTRACTION-TEMPLATE.md guidance): 8192.sid load=$13DC/init=$1E00/play=$1E0C; Invitro.sid load=init=$8A80/play=$8A83; EX_Beach.sid load=$8B57/init=$8F00/play=$8F03 (source: csdb.dk webservice, type=sid, ids 55387/57197/57605). Varying addresses across files is consistent with a driver assembled/embedded directly into each BASIC-generated program rather than loaded at one fixed shared address, but this is an observation from header data, not a confirmed Tier 3 fact.",
    "Not one of DeepSID's curated 129 `players.json` entries."
  ],
  "sources": [
    "sidid:Zirias (author 'Felix Palmen (Zirias)', no name/released/reference/comment) — data/sidid.json",
    "GitHub repo (source, README feature description, language breakdown): https://github.com/Zirias/c64_basicmusic",
    "GitHub API metadata (created_at 2024-09-28, license: null, no formal release): https://api.github.com/repos/Zirias/c64_basicmusic",
    "GitHub commits API (14 commits; earliest 2018-11-15 'initial commit'; latest two 2024-09-28): https://api.github.com/repos/Zirias/c64_basicmusic/commits",
    "Author's Mastodon post referencing a 'new tool' (title/existence only, not read in full): https://mastodon.bsd.cafe/@zirias/114262473887249595",
    "CSDb webservice, type=sid, id=55387 (8192.sid — Released '2018 Zirias', load/init/play addresses): https://csdb.dk/sid/?id=55387",
    "CSDb webservice, type=sid, id=57197 (Invitro.sid — Released '2019 Excess/Abyss Connection'): https://csdb.dk/sid/?id=57197",
    "CSDb webservice, type=sid, id=57605 (EX_Beach.sid — Released '2020 Excess'): https://csdb.dk/sid/?id=57605",
    "CSDb release id 161435 ('8192 V0.3 alpha', C64 Game Preview, released 2018-01-11; user comments dated 13-14 Jan 2018 corroborate the date): https://csdb.dk/release/?id=161435",
    "CSDb release id 181278 ('The Invitro by ExCeSs & Abyss Connection', released 2019-09-01): https://csdb.dk/release/?id=181278",
    "CSDb release id 187145 ('EX Beach', released 2020-01-25 at EXAC 2020 party): https://csdb.dk/release/?id=187145",
    "Local dataset: 3 files tagged 'Zirias' (8192.sid, Invitro.sid, EX_Beach.sid), all by composer Zirias, censused in full — data/composers/zirias.json",
    "data/composers/zirias.json (HVSC profile: real name Felix Palmen, Germany, b. 1978-10-13, active 2020, CSDb scener 25812)"
  ]
}
```

## Overview

`Zirias` is the SIDId tag for a replay routine attributed to **Felix Palmen**
(handle **Zirias**), a German scener. Unlike most of this batch, there is a
genuine, matching public source repository: **c64_basicmusic**
(github.com/Zirias/c64_basicmusic), a "BASIC SID Player v1.0" that extends
C64 BASIC with four music commands (`@i`/`@t`/`@q`/`@p` for instruments,
patterns, sequencing, and playback). The identification rests on the matching
handle/name rather than a byte-signature confirmation, since SIDId's own
entry carries no name or reference. The repo has no license file. All 3
locally-tagged files are by Zirias himself: 8192.sid (2018-01-11), Invitro.sid
(2019-09-01), and EX_Beach.sid (2020-01-25), per CSDb — a full census, not a
sample. **A prior pass on this card mis-dated the player as "recent
(2024-2025)"** by reading the GitHub repo's `created_at` as its origin; the
repo's own commit history (earliest commit 2018-11-15) and the 8192.sid
release date (2018-01-11, predating even that commit) both show this is a
2018-vintage personal routine that the author simply didn't publish on GitHub
until 2024.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) source IS public, but there is NO
licence file — do not call this "open-source" without that caveat; (2) the
identification of the tag with the specific GitHub repo is a handle/name
match, not a confirmed signature match; (3) the player is 2018-vintage, not
2024 — GitHub's `created_at`/push date is not a reliable proxy for a project's
actual origin, and the earliest tagged file (8192.sid, 2018-01-11) predates
even the repo's earliest commit (2018-11-15), meaning either an earlier
uncommitted iteration existed or 8192.sid used a related-but-not-identical
precursor driver.

## Disassembly notes

None performed. The repo's own README describes the BASIC-command surface
but this card does not map that to a byte-level data format, memory map, or
entry points — all Tier 3 fields remain TODO pending an actual read of the
assembly source in the repo (roughly 46% of it, per GitHub's language stats).

## Verification

**Not verified — `status: stub`.** Identity/provenance facts (author, handle
match, repo existence, absence of a licence file, composer concentration,
full census of all 3 tagged files' release dates) are confirmed from SIDId,
GitHub, CSDb's webservice, and the local dataset. No runtime fact
(memory map, entry points, speed model, data format, effect encoding) is
claimed — those would require actually reading the assembly source in the
linked repo, which this pass did not do. Raw PSID header addresses were read
per file (see quirks) but deliberately kept out of the Tier 3 `memory`/`entry`
fields, per this project's header-metadata-vs-disassembly-fact rule.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the GitHub repo, its API
metadata and full commit history, CSDb's webservice (per-file `sid` records
and their `release` entries, all 3 tagged files), the author's Mastodon post
(unread), and the local composer profile.
