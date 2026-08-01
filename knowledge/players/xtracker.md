# XTracker

```json
{
  "id": "xtracker",
  "name": "XTracker",
  "aliases": ["XTracker_V4.2x", "(XTracker_V4.2x)", "(XTracker_V4.1x)"],
  "authors": ["Tufan Uysal (SoNiC) / Art Project Studios"],
  "released": "1996 (Art Project Studios) — multiple point releases confirmed on CSDb across 1996: V3.1 (id 17708), V4.00 Beta (id 94169), V4.11 (id 249986), V4.13 (id 82320), V4.13D (id 122429); the locally-tagged 'V4.2x' is not itself one of these confirmed release IDs, presumably a later point release in the same series",
  "status": "stub",
  "platform": "Native C64 tool — CSDb categorizes it as a 'C64 Tool' (music/audio production)",
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
    "The exact raw Player-ID tag in the local dataset is '(XTracker_V4.2x)' WITH surrounding parentheses (data/composers/sonic.json) — an earlier pass of this card recorded the alias as 'XTracker_V4.2x' without the parens, which is why COVERAGE.md's exact-string generator still listed it as uncarded. Both forms are now in `aliases`.",
    "data/sidid.json's byTag has a near-neighbor entry '(XTracker_V4.1x)' (also parenthesized) resolving to name 'The Ultimate X-Tracker', author 'Tufan Uysal (SoNiC)', released '1996 The Art Project Studios', reference https://csdb.dk/release/?id=82320 — no exact entry for '(XTracker_V4.2x)' itself, but this confirms the tool is real, versioned, and that the locally-tagged file's composer (Sonic/Tufan Uysal) IS the tool's own author, not a coincidence of a shared handle.",
    "CSDb (release id 82320) confirms 'The Ultimate X-Tracker V4.13' as a C64 Tool released 1996 by Art Project Studios, SoNiC credited for code/music/idea. SoNiC's CSDb scener page (id 1188) lists several other X-Tracker point releases across 1996 (V3.1 id 17708, V4.00 Beta id 94169, V4.11 id 249986, V4.13D id 122429) — no release exactly matching 'V4.2x' was found among these, so the locally-tagged version is presumably a further point release in the same 1996 series that either has no separate CSDb release page or wasn't surfaced by this search pass.",
    "Single locally tagged file for '(XTracker_V4.2x)': 'Falk-Ohr-Filter (Model 50)', by composer Sonic (Tufan Uysal, Germany, CSDb scener 1188) — now confirmed to be the tool's own author, per the SIDId '(XTracker_V4.1x)' entry above. Census complete: this is the only file in the local dataset carrying this tag (data/composers/sonic.json has exactly one match).",
    "The tagged file's own CSDb SID entry (id 65302, https://csdb.dk/webservice/?type=sid&id=65302) records its OWN 'Released' field as '2025 Slackers', and lists it as UsedIn two 2025 releases ('RecrackSep25' C64 Music Collection and 'Fal(k)scher Fuffziger' / 'DanDee 50th birthday demo'). This is the tune's own composition/release date, unrelated to and much later than the X-Tracker tool's 1996 origin — do not confuse a per-tune Released field with the player's own release chain. (PSID header fields LoadAddr/InitAddr/PlayAddr = $8000/$8000/$8003 also appear on this SID entry; these are header metadata only, not a disassembly-confirmed Tier 3 entry point.)",
    "csdb_release is left null, not guessed: a fresh full re-fetch of CSDb release 82320 (V4.13, depth=2, full UsedSIDs/Credits/Trivia) and a re-confirmed WebFetch of scener 1188's release list both turned up no release named 'V4.2' or 'V4.2x' — only the same five 1996 X-Tracker point releases already on file (V3.1/17708, V4.00 Beta/94169, V4.11/249986, V4.13/82320, V4.13D/122429). Picking one of those five as a stand-in for the specifically-tagged 'V4.2x' would misrepresent which exact version produced this file, so the field stays null rather than attaching an approximate id."
  ],
  "sources": [
    "SIDId sidid.nfo entry '(XTracker_V4.1x)' (data/sidid.json): name 'The Ultimate X-Tracker', author 'Tufan Uysal (SoNiC)', released 1996, reference https://csdb.dk/release/?id=82320",
    "CSDb release 82320, 'The Ultimate X-Tracker V4.13' (webservice XML, full re-fetch depth=2, confirms Type=C64 Tool, ReleaseYear=1996, ReleasedBy=Art Project Studios, no other X-Tracker version referenced): https://csdb.dk/release/?id=82320",
    "CSDb scener Sonic / Tufan Uysal (Germany): https://csdb.dk/scener/?id=1188 — lists X-Tracker V3.1 (17708), V4.00 Beta (94169), V4.11 (249986), V4.13 (82320), V4.13D (122429), all 1996, all Art Project Studios; re-confirmed via WebFetch same session, no V4.2x entry found",
    "CSDb SID entry 65302 (the tagged file itself), 'Falk-Ohr-Filter (Model 50)': https://csdb.dk/webservice/?type=sid&id=65302 — own Released field '2025 Slackers', UsedIn 'RecrackSep25' (id 256323) and 'Fal(k)scher Fuffziger' (id 255895)",
    "Local dataset: 1 file tagged '(XTracker_V4.2x)' (data/composers/sonic.json) — 'Falk-Ohr-Filter (Model 50)', csdb_id 65302, by Sonic; knowledge/COVERAGE.md row for '(XTracker_V4.2x)'. Census complete — every tagged file (1 of 1) checked."
  ]
}
```

## Overview

`(XTracker_V4.2x)` and `(XTracker_V4.1x)` are raw Player-ID tags for
**The Ultimate X-Tracker**, a native C64 music tool by **Tufan Uysal
(SoNiC)** of Art Project Studios, released across several 1996 point
versions (V3.1, V4.00 Beta, V4.11, V4.13, V4.13D — all confirmed on CSDb).
Locally there is a single tagged file, "Falk-Ohr-Filter (Model 50)", by
composer Sonic — now confirmed via SIDId's `(XTracker_V4.1x)` entry to be
the tool's own author, not a coincidence of a shared handle. No CSDb
release page matching exactly "V4.2x" was found (re-checked this session via
a full re-fetch of release 82320 and scener 1188's release list), so that
specific point version's release ID is unconfirmed and `csdb_release` stays
`null` rather than an approximate guess, but the tool's identity, author, and
1996 timeframe are solid. The single tagged file's own CSDb entry carries a
2025 `Released` date (a modern demo tribute release) — that is the tune's
own attribution, not the tool's release date.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the raw tag carries literal
parentheses `(...)` that an earlier pass of this card dropped, which is
why the coverage generator kept flagging it as uncarded — both forms are
now aliased. The SIDId near-neighbor entry `(XTracker_V4.1x)` (not an
exact tag match) is what unlocked the real name/author/CSDb release.
Also load-bearing: the tagged file's own CSDb "Released" field reads
"2025 Slackers" — a modern tribute/demo re-release of the tune, not the
tool's 1996 release date. Don't let a per-file `Released` field leak into
the player's own `released` value.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/sonic.json`, `data/sidid.json`) plus a CSDb web fetch
confirming the release and scener history. `status: stub` (Tier 1+2 only,
no Tier 3 runtime facts).

## Sources

See the `sources` array — SIDId sidid.nfo entry, two CSDb pages (release
82320, scener 1188), and the local file aggregation.
