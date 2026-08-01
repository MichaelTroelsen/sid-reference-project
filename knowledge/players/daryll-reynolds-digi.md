# Daryll Reynolds Digi (Ninja routine)

```json
{
  "id": "daryll-reynolds-digi",
  "name": "Daryll Reynolds Digi (Ninja routine)",
  "aliases": ["Daryll_Reynolds_Digi"],
  "authors": ["Daryll Reynolds"],
  "released": "1984 (Softgold) — confirmed directly on the SID entry's own `Released` field via CSDb's webservice (type=sid, id=53604: \"1984 Softgold\"), not just inferred from the game's release date. SIDId itself has no entry for this tag.",
  "status": "stub",
  "platform": "Native C64 — a component embedded directly in Daryll Reynolds's own 1984 Softgold C64 adventure game binary 'Ninja' (not a distributed/released tracker, editor, or standalone tool). Sibling tag to the already-carded knowledge/players/daryll-reynolds.md (status: in-progress, verified trace on 'Nuclear War Games'), which explicitly covers only the plain 'Daryll_Reynolds' tag and does not include this one.",
  "csdb_release": null,

  "memory": { "load_address": "TODO: no disassembly performed", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIBLING TAG, SAME PATTERN AS silas-warner-digi.md: Daryll Reynolds's own HVSC folder (data/composers/daryll-reynolds.json) has 7 files across 3 different player tags — 4 use the plain 'Daryll_Reynolds' tag (Alien, Nuclear War Games, Search for King Solomon's Mines, Skull Island — covered by knowledge/players/daryll-reynolds.md), 2 use 'Basic_Program' (text-adventure titles with no distinct music routine), and exactly 1 — 'Ninja' (CSDb sid id 53604, 16 subtunes) — uses this separate 'Daryll_Reynolds_Digi' tag.",
    "'NINJA' IS A CONFIRMED REAL SOFTGOLD TITLE, not a mislabeled or ambiguous file: web research (Lemon64's game/review pages for 'Ninja - Softgold') confirms 'Ninja' (1984) was a genuine graphics/text-adventure by Softgold — Daryll Reynolds's own cottage-industry label, matching the biography already established in the sibling card (Melbourne, Australia; DotSoft local distribution). It received mixed-to-negative reviews compared to Reynolds's other titles like The Secret of Bastow Manor.",
    "16 SUBTUNES is a notably large subtune count for a single SID file — consistent with a full in-game score across many rooms/screens for an adventure game, similar in scale to Alien's 17 subtunes and Skull Island's 19 (both under the plain 'Daryll_Reynolds' tag). Whatever distinguishes the '_Digi' variant from the plain tag is NOT file scale or game genre — both cover similarly large multi-room adventure scores.",
    "NO SIDId ENTRY EXISTS for 'Daryll_Reynolds_Digi' (checked data/sidid.json — absent), matching the sibling 'Daryll_Reynolds' tag's own absence from SIDId (noted in daryll-reynolds.md's quirks). Neither Reynolds tag was sourced from SIDId's byte-signature database; both are this project's own Player-ID fingerprints.",
    "PER THIS KB'S CORE RULE ('digi by name is not evidence'): no source found confirms actual sample/digitized-voice content for this specific tag (unlike, say, silas-warner-digi.md's well-documented speech-synthesis history). The '_Digi' suffix here is treated as a distinct Player-ID/byte-signature label only — its underlying playback mechanism, and why it differs from the plain 'Daryll_Reynolds' signature, is unconfirmed (TODO).",
    "NO CSDB RELEASE ENTRY EXISTS for 'Ninja' (Softgold, 1984): queried CSDb's webservice directly (type=sid, id=53604, depth=4) — the SID entry carries only its own metadata, no linked 'UsedIn' release record, confirming `csdb_release: null` is a genuine absence rather than an unresearched gap.",
    "PSID HEADER METADATA (from CSDb webservice, type=sid id=53604 — header facts only, NOT a disassembly, so NOT written into Tier 3 memory/entry fields): LoadAddr 37376 ($9200), InitAddr 49456 ($C130), NOSongs 16 (confirms the composer-cache subtune count), DefaultSong 1, SIDModel 6581, ClockSpeed PAL, DataSize 12090 bytes."
  ],
  "sources": [
    "Local dataset: data/composers/daryll-reynolds.json — 1 file tagged Daryll_Reynolds_Digi ('Ninja', csdb sid id 53604, 16 subtunes) out of Reynolds's 7 total tagged files",
    "data/sidid.json: no entry for 'Daryll_Reynolds_Digi' (checked, absent)",
    "CSDb webservice, type=sid id=53604 depth=4 (https://csdb.dk/webservice/?type=sid&id=53604&depth=4) — confirms Released \"1984 Softgold\" on the SID entry itself, PSID header fields, and the absence of any linked release ('UsedIn') record",
    "Lemon64 — Ninja (Softgold): https://www.lemon64.com/game/ninja-softgold and review https://www.lemon64.com/review/ninja-softgold/216",
    "knowledge/players/daryll-reynolds.md (status: in-progress) — cited for the composer's established biography (Softgold/Gameworx, Melbourne, Australia) and the plain 'Daryll_Reynolds' tag's own scope; not edited by this card"
  ]
}
```

## Overview

`Daryll_Reynolds_Digi` is a Player-ID tag covering exactly **1 file** in
Australian solo developer Daryll Reynolds's catalog: **"Ninja"** (1984,
Softgold — his own cottage-industry games label), a graphics/text adventure
confirmed via Lemon64 and, independently, via CSDb's own SID-entry metadata
(`Released: "1984 Softgold"`, queried directly from the webservice, not
inferred from the game's release date). This is a **separate signature**
from the already-carded `Daryll_Reynolds` tag (see
`knowledge/players/daryll-reynolds.md`, `status: in-progress`, which covers
his other 4 tagged titles and has a verified playback trace on "Nuclear War
Games"). Both tags are absent from SIDId's byte-signature database; neither
was sourced from SIDId. It is a native C64 in-game player embedded in the
"Ninja" binary, not a distributed tool — no CSDb release page links to it,
confirmed by a direct webservice query (no `UsedIn` record).

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a genuine sibling-tag situation
(same author, same folder, distinct signature) rather than a scope error —
matching the pattern already established for `silas-warner-digi.md`. No
independent evidence of an actual digi/sample-playback technique was found
for this specific tag, so — per this KB's core rule — that is left
unconfirmed rather than inferred from the name.

## Disassembly notes

None performed. No public source or prior disassembly located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 1-file usage, the "Ninja" game's real-world confirmation
via Lemon64). No SIDId entry exists for this tag. No runtime behaviour has
been confirmed or reconstructed.

## Sources

See the `sources` array — local dataset aggregation, Lemon64 (2 pages), and
the sibling `daryll-reynolds.md` card (cited, not edited).
