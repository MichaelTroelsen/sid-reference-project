# MRG (player routine)

```json
{
  "id": "mrg",
  "name": "MRG (player routine)",
  "aliases": ["MRG"],
  "authors": ["Mark R. (MRG)"],
  "released": "No release year for a distributed player/tool (none exists — see platform). Full census of all 4 'MRG'-tagged files' own CSDb Released fields (type=sid webservice, 2026-07-31): csdb id 40735 '187.5' = '1987 MRG', csdb id 40736 'The Zoo' = '1987 MRG', csdb id 40737 'Make It Real' = '1987 MRG', csdb id 44152 '<?>' = '1988 Powerstack'. Earliest attested 1987, latest 1988.",
  "status": "stub",
  "platform": "Native C64, in-tune routine — all 4 'MRG'-tagged files carry player_type 'Normal built-in' in data/composers/mrg.json (i.e. hand-coded into the tune itself, not a separately loaded/distributed player module). Corroborated by the composer's CSDb scener profile (csdb.dk/scener/?id=19991, handle 'Guinea Pig', AKA 'MR Guinea Pig'): all 4 CSDb credits are typed Music (releases 79564, 79565, 44007) or Help (43209 'Deflektor' crack) — no Routine/Tool/Player-type release anywhere in his history. No standalone editor, tool, or cross-platform component found.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 4 locally-tagged files ('187.5', 'Make It Real', 'The Zoo', and one untitled '<?>' file, csdb ids 40735/40736/40737/44152) are credited to composer 'MRG', author string 'Mark R. (MRG)' (data/composers/mrg.json) — the tag name is simply the composer's own handle, the classic self-titled personal-routine signature. All 4 files also carry player_type 'Normal built-in'.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent; also checked the upstream sidid.nfo raw source directly via github.com/cadaver/sidid — no 'MRG' entry found there either). CORRECTION (2026-07-31 re-research): a prior version of this card claimed 'no biographical or CSDb identity beyond the bare handle' was found — this was wrong; the composer's own DeepSID profile carries csdb_id 19991, which resolves on CSDb's webservice (type=scener) to Handle 'Guinea Pig' (AKA 'MR Guinea Pig'), HandleStory 'MR are the initials of his real name' (consistent with 'Mark R.'), country Germany, ex-member of the cracker group 'Flash Light Crackers' (FLC, csdb.dk/group/?id=4476) as Musician. Credits: Music on releases 79564 ('187.5', 1987), 79565 ('Two Scorpions Tunes', 1987), 44007 ('Collection 01', 1988-10-15); Help on 43209 ('Deflektor' crack, 1988-02-17). No Routine/Tool/Player-type credit exists — supports the personal-routine reading rather than contradicting it.",
    "Full census (not sample) of all 4 tagged files' own CSDb Released fields performed 2026-01-01-equivalent pass (2026-07-31): three read '1987 MRG' (self-released), one reads '1988 Powerstack' (used in the Powerstack-group release 'Collection 01'). See `released`."
  ],
  "sources": [
    "data/sidid.json: no entry for 'MRG' (checked, absent)",
    "Upstream raw source checked directly: sidid.nfo via https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo — no 'MRG' entry found",
    "Local dataset: data/composers/mrg.json — 4 files tagged 'MRG', all authored 'Mark R. (MRG)', player_type 'Normal built-in', composer profile csdb_id 19991, country Germany, active '1988'",
    "CSDb webservice, type=scener, id=19991, depth=2 (2026-07-31): https://csdb.dk/scener/?id=19991 — Handle 'Guinea Pig' / AKA 'MR Guinea Pig', HandleStory 'MR are the initials of his real name', MemberOf 'Flash Light Crackers' (FLC), Credits list (Music x3, Help x1), no Tool/Routine/Player credit",
    "CSDb webservice, type=sid census of all 4 tagged files (2026-07-31): id 40735 https://csdb.dk/sid/?id=40735 ('Released: 1987 MRG'), id 40736 https://csdb.dk/sid/?id=40736 ('1987 MRG'), id 40737 https://csdb.dk/sid/?id=40737 ('1987 MRG'), id 44152 https://csdb.dk/sid/?id=44152 ('1988 Powerstack', used in release 44007 'Collection 01')"
  ]
}
```

## Overview

`MRG` is a bare-handle Player-ID signature tag matching all 4 locally-tagged
files by composer **Mark R. ("MRG"**, CSDb handle "Guinea Pig", Germany) — a
self-titled, hand-coded in-tune routine (`player_type: "Normal built-in"` on
every file) with no SIDId fingerprint entry and no separately released editor
or tool anywhere in the composer's CSDb credit history. The 4 files' own
CSDb `Released` fields span 1987 (three self-released tunes) to 1988 (one
tune used in the Powerstack-group release "Collection 01").

## Quirks & gotchas

See the `quirks` array. Load-bearing: total single-composer concentration
(4/4 files), confirmed native in-tune routine (no distributed tool found on
CSDb), and a correction to a prior claim that no CSDb identity existed —
the composer's real CSDb scener profile (id 19991) was found and checked.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Identity rests entirely on local composer
data; nothing else confirmed.

## Sources

See the `sources` array — local composer-file aggregation, the upstream
SIDId `sidid.nfo` (checked, no entry), and a full CSDb webservice census of
the composer's scener profile and all 4 tagged SID entries.
