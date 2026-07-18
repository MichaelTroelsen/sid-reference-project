# Zirias (BASIC SID Player)

```json
{
  "id": "zirias",
  "name": "Zirias (BASIC SID Player)",
  "aliases": ["Zirias"],
  "authors": ["Felix Palmen (Zirias)"],
  "released": "TODO: exact version-release date not confirmed — GitHub repo created 2024-09-28, last pushed 2025-11-06; a Mastodon post by the author ('I just decided my new tool ...') suggests active/recent development, but the post itself was not read in full during this pass",
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
    "Repo stats at time of check: 3 stars, 14 commits, no formal GitHub releases published, created 2024-09-28 — i.e. a genuinely recent (2024-2025) hobby project, consistent with the composer's own HVSC profile listing 'active: 2020' onward and a 1978 birth year (data/composers/zirias.json) rather than a classic-scene-era tool.",
    "Single-composer concentration: all 3 locally-tagged files are by Zirias himself (Felix Palmen, Germany, CSDb scener 25812) — entirely expected for a personal, very-recent hobby tool with no other known users.",
    "Not one of DeepSID's curated 129 `players.json` entries."
  ],
  "sources": [
    "sidid:Zirias (author 'Felix Palmen (Zirias)', no name/released/reference/comment) — data/sidid.json",
    "GitHub repo (source, README feature description, language breakdown): https://github.com/Zirias/c64_basicmusic",
    "GitHub API metadata (created_at 2024-09-28, license: null, no formal release): https://api.github.com/repos/Zirias/c64_basicmusic",
    "Author's Mastodon post referencing a 'new tool' (title/existence only, not read in full): https://mastodon.bsd.cafe/@zirias/114262473887249595",
    "Local dataset: 3 files tagged 'Zirias', all by composer Zirias — data/composers/zirias.json",
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
locally-tagged files are by Zirias himself, consistent with a recent (2024-
2025), personal hobby project rather than a classic-scene tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) source IS public, but there is NO
licence file — do not call this "open-source" without that caveat; (2) the
identification of the tag with the specific GitHub repo is a handle/name
match, not a confirmed signature match; (3) this is a notably recent project
(2024-2025) compared to most tags in this project's corpus.

## Disassembly notes

None performed. The repo's own README describes the BASIC-command surface
but this card does not map that to a byte-level data format, memory map, or
entry points — all Tier 3 fields remain TODO pending an actual read of the
assembly source in the repo (roughly 46% of it, per GitHub's language stats).

## Verification

**Not verified — `status: stub`.** Identity/provenance facts (author, handle
match, repo existence, absence of a licence file, composer concentration) are
confirmed from SIDId, GitHub, and the local dataset. No runtime fact
(memory map, entry points, speed model, data format, effect encoding) is
claimed — those would require actually reading the assembly source in the
linked repo, which this pass did not do.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the GitHub repo and its
API metadata, the author's Mastodon post (unread), and the local composer
profile.
