# PlayStar

```json
{
  "id": "playstar",
  "name": "PlayStar",
  "aliases": ["PlayStar", "(PlayStar_V2.0)"],
  "authors": ["Radoslaw Andrzejewicz (Rabbi)"],
  "released": "1995-1996 (DeepSID lists start_year 1995 / end_year 1996; the only known CSDb release, \"Playstar Editor V2.0\", is dated 1996)",
  "status": "stub",
  "platform": "Native C64 tool — a standalone music editor/tracker, not a cross-platform host tool. DeepSID's players.json records platform as \"Native / C64 emulator\".",
  "csdb_release": 122335,

  "memory": {
    "load_address": "TODO: no public source or disassembly found",
    "zero_page": "TODO: DeepSID's players.json lists zero_pages: \"None\" for this entry, but the field is otherwise undocumented on the site and it is unclear whether that means the editor genuinely reserves no fixed ZP for playback or the field was simply never filled in — do not treat as a confirmed fact",
    "layout": "TODO: no public source or disassembly found"
  },
  "entry": {
    "init": "TODO: no public source or disassembly found",
    "play": "TODO: no public source or disassembly found"
  },
  "speed": "TODO: no public source or disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source or disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Closed source, freeware. No public source repo, format spec, or disassembly was found (CSDb, Codebase64, and general web search) — every runtime field above is an honest TODO, not a guess.",
    "DeepSID's own player description (data/players.json) calls it 'An editor inspired by ProTracker on Amiga. However, it's mostly a preview as some of its buttons doesn't work.' — i.e. DeepSID itself flags the tool as unfinished/buggy. Note this is a UI/workflow comparison to Amiga ProTracker, NOT evidence of a code-level derivation, so no `edges.derives_from` is asserted from it.",
    "Two distinct Player-ID signature tags exist in SIDId (data/sidid.json byTag): the bare 'PlayStar' (no CSDb reference recorded) and '(PlayStar_V2.0)' (tied to CSDb release 122335, 1996). Every one of the 15 PlayStar-tagged files in this project's local dataset carries the bare 'PlayStar' tag, i.e. the pre-2.0 signature — none carry the versioned V2.0 tag, so the only files actually indexed here predate the one release CSDb documents.",
    "Extreme composer concentration: all 15 files tagged PlayStar in data/composers/*.json belong to a single composer, 'Rabbi' — the tool's own author (Radoslaw Andrzejewicz). Per the EXTRACTION-TEMPLATE's composer-concentration heuristic (single/near-single composer -> likely a personal or small-scene routine rather than a widely adopted tool), this looks like Rabbi's own editor used almost exclusively by himself, not a tool that spread through the scene.",
    "Author 'Rabbi' (Radoslaw/Radek Andrzejewicz) is a Polish C64 scener (Slupca, Poland per Demozoo) confirmed via CSDb's own scener page (csdb.dk/scener/?id=6802) as a member of Agnus, Medium, Cybertech Laboratories, and Proxyon (2/1993-1993), and also composed music under that handle (e.g. the CSDb release's own demo tune 'Erotic Malfunction'). Demozoo additionally credits him as 15th-best musician in the Polish diskmag Design #1 (Feb 1997), and lists a separate, apparently unrelated tool credit 'Logos Editor V2.0' by the same author — not investigated further here, out of scope for this card.",
    "No public source code, format documentation, manual, or third-party writeup for PlayStar was found in a second research pass (CSDb release/scener pages, Demozoo, Lemon64 and Forum64 forum search, Codebase64, general web search) beyond what the first pass already found — the CSDb release page (csdb.dk/release/?id=122335) itself carries no functional description, only credits and a download link (via csdb.dk/getinternalfile.php, 197 downloads, with an external mirror noted at pokefinder.org). This remains an identity/provenance-only card by necessity, not by omission."
  ],
  "sources": [
    "data/sidid.json byTag['PlayStar'] and byTag['(PlayStar_V2.0)'] — name/author/released/reference (SIDId project, ships in DeepSID's offline bundle)",
    "data/players.json — curated 'PlayStar Editor v2.0' entry (developer, platform, distribution, description, csdb_id 122335, zero_pages)",
    "knowledge/COVERAGE.md — rank 17, 15 files, single grouped raw tag 'PlayStar'",
    "Local aggregation of data/composers/*.json folder[] records: 15 files, all by composer 'Rabbi'",
    "CSDb release (Playstar Editor V2.0, 1996): https://csdb.dk/release/?id=122335 — code/design/idea/music: Rabbi; graphics: Condic; download via csdb.dk/getinternalfile.php (197 downloads), external mirror noted at pokefinder.org",
    "CSDb search confirms this is the only 'PlayStar' release on CSDb: https://csdb.dk/search/?seinsel=all&search=playstar",
    "CSDb scener profile for Rabbi: https://csdb.dk/scener/?id=6802 — groups Agnus, Medium, Cybertech Laboratories, Proxyon (2/1993-1993)",
    "Demozoo profile for Rabbi: https://demozoo.org/sceners/54893/ — Slupca, Poland; 15th best musician, Design #1 (Feb 1997) diskmag chart; separate 'Logos Editor V2.0' tool credit noted but not investigated (out of scope)",
    "sidid.nfo raw source (SIDId project): https://github.com/cadaver/sidid/blob/master/sidid.nfo"
  ]
}
```

## Overview

PlayStar is a native Commodore 64 music editor written by Radoslaw
"Rabbi" Andrzejewicz, first appearing around 1995 with a documented CSDb
release of "Playstar Editor V2.0" in 1996 (csdb.dk/release/?id=122335).
DeepSID's own catalogue entry describes it as an editor inspired by
Amiga ProTracker, but notes it is "mostly a preview" with some non-working
buttons — i.e. by the cataloguer's own account this looks like an
unfinished or lightly-used tool. That matches what this project's local
data shows: all 15 PlayStar-tagged files in the dataset (knowledge/COVERAGE.md
rank 17) belong to a single composer, Rabbi himself, strongly suggesting a
personal routine that was never picked up by other musicians rather than a
published, widely-adopted tracker. No source code, format documentation, or
disassembly was found anywhere searched (CSDb, Codebase64, Demozoo, Lemon64,
Forum64, general web) across two research passes, so this card remains
identity/provenance only. Rabbi's CSDb scener page (csdb.dk/scener/?id=6802)
independently confirms his scene affiliations as Agnus, Medium, Cybertech
Laboratories, and Proxyon.

## Quirks & gotchas

See the `quirks` array — the headline points: (1) DeepSID itself flags the
editor as an unfinished preview with broken buttons; (2) the dataset's 15
files all carry the pre-2.0 'PlayStar' Player-ID tag, not the versioned
'(PlayStar_V2.0)' tag tied to the one CSDb release that exists, so the
indexed files may predate that release; (3) all 15 files are by the tool's
own author, a strong personal-routine signal.

## Disassembly notes

None performed. No public source, format spec, or existing disassembly was
located for PlayStar, so nothing here can be filled without original
reverse-engineering — left as an explicit gap rather than guessed.

## Verification

Not verified — `status: stub`. Only identity/provenance facts are recorded,
sourced from the cached SIDId entry, DeepSID's curated player metadata
(`data/players.json`), this project's own composer aggregation, and the CSDb
release page. No init/play routine has been reconstructed or traced, and none
can be without a source or disassembly that does not currently exist publicly.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID's curated player
entry (`data/players.json`), `knowledge/COVERAGE.md`, local
`data/composers/*.json` aggregation, and the CSDb release page
(https://csdb.dk/release/?id=122335).
