# 8bitDigi/Mahoney

```json
{
  "id": "8bitdigi-mahoney",
  "name": "8bitDigi/Mahoney",
  "aliases": ["8bitDigi/Mahoney"],
  "authors": ["Pex Tufvesson (Mahoney)"],
  "released": "2014 (Musik Run/Stop); reused 2015 (Stereophonik)",
  "status": "stub",
  "platform": "Not a released editor/tracker — a hand-coded playback routine embedded directly in specific Mahoney demo productions.",
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
    "SIDId byTag comment (verbatim, cited to Mahoney's own PDF): \"The player uses a technique to play 8-bit samples at 44.1kHz via the volume register of the SID. More info about this technique: https://www.livet.se/mahoney/c64-files/Musik_RunStop_Technical_Details_by_Pex_Mahoney_Tufvesson_v2.pdf\" — data/sidid.json byTag['8bitDigi/Mahoney'].",
    "Extremely concentrated usage: exactly 3 files in this dataset, all authored by Pex Tufvesson (Mahoney) himself — Musik Run/Stop (2014, CSDb sid id 50160), Stereophonik (6581) and Stereophonik (8580) (both 2015, CSDb sid ids 51622/51620). This is the inventor's own routine, never released as a general-purpose tool for other composers (data/composers/mahoney.json folder[] records).",
    "Public secondary confirmation of the technique (a web search independent of SIDId) describes: an 8-bit unsigned sample byte looked up in a per-chip-variant (6581 vs 8580) volume/amplitude table, then written to the SID volume register $D418 as a single 'jittered' write, timed against raster/CIA interrupts — consistent with the SIDId comment's description of volume-register playback. Source: Lemon64 forum thread 'Mahoney's technique is noisy', https://www.lemon64.com/forum/viewtopic.php?t=75673 (community discussion, not Mahoney's own words — treat as corroboration, not primary source).",
    "Mahoney publishes a technical writeup PDF and says he also released measurement files, a C64 measurement program with source, a Matlab volume-table-building script, and pre-made volume tables on his own site (per public search results summarizing https://www.livet.se/mahoney/timeline.php and the PDF itself) — but this card does NOT confirm the actual SID-playback replay routine's machine code was published as reusable source; only the measurement/table-building tooling is confirmed described. Left as an open question rather than asserted either way.",
    "Do NOT conflate with the sibling tags in the same dataset that also involve Mahoney or an adjacent digi technique: 'DigiMonitor' (a hacked Chris Hülsbeck SoundMonitor with 4-bit digi, used by Mahoney/Banana/MC — a different, earlier 1987 tool, data/players.json) and 'OxyMod4Bit/THCM' / 'OxyMod/THCM' (Uwe Anfang's SounDemoN-discovered-2006 technique, also used on some Mahoney tunes in this dataset, e.g. Eat_It.sid, Storebror.sid) are NAME-adjacent but evidence-distinct: different authors, different SIDId comments, different CSDb release years. No merge asserted.",
    "CSDb sid-entry pages for the three files (id=50160, 51622, 51620) confirm title/composer/year/group but carry no in-page technical notes beyond SID model and PAL clock — the technique detail comes from SIDId's comment and Mahoney's own PDF/site, not from CSDb."
  ],
  "sources": [
    "SIDId sidid.nfo byTag['8bitDigi/Mahoney'] (author, comment + technique URL): https://github.com/cadaver/sidid/blob/master/sidid.nfo ; local snapshot data/sidid.json",
    "Mahoney's own technical writeup PDF (cited by SIDId, fetch of the PDF itself hit a size limit in this session — content described only via the SIDId comment and secondary web summaries, not read in full): https://www.livet.se/mahoney/c64-files/Musik_RunStop_Technical_Details_by_Pex_Mahoney_Tufvesson_v2.pdf",
    "Local dataset: data/composers/mahoney.json folder[] — 3 files tagged 8bitDigi/Mahoney, sole composer Mahoney (Pex Tufvesson)",
    "CSDb sid entries: Musik Run/Stop https://csdb.dk/sid/?id=50160 (2014, group Mahoney) ; Stereophonik (6581) https://csdb.dk/sid/?id=51622 (2015, group Mahoney) ; Stereophonik (8580) csdb.dk/sid/?id=51620",
    "CSDb scener profile for Mahoney (country Sweden, groups Defiers/Performers/Visa Röster; page itself does not name this specific technique): https://csdb.dk/scener/?id=3701",
    "Lemon64 forum thread discussing the technique's public reception/technical follow-up: https://www.lemon64.com/forum/viewtopic.php?t=75673",
    "data/players.json — checked for a curated '8bitDigi/Mahoney' entry; none exists (only 'DigiMonitor' and 'CCC Music Editor' are curated for this composer) — confirms this is an inferred/SIDId-only tag, not a DeepSID-curated player"
  ]
}
```

## Overview

`8bitDigi/Mahoney` is not a released editor or tracker but a **SIDId signature
for a specific hand-coded playback routine** written by **Pex Tufvesson
(Mahoney)** himself, used in exactly 3 files in this dataset — all his own
productions: *Musik Run/Stop* (2014) and the two-SID *Stereophonik* demo
(2015, 6581 and 8580 variants). SIDId's comment for this tag (see `quirks`)
describes the routine as playing 8-bit samples via the SID **volume
register** ($D418), citing Mahoney's own technical PDF. This is genuinely the
famous "Mahoney trick" — but the fame belongs to the *technique writeup*, not
to a general-purpose tool: sole-composer concentration here (3/3 files, 1
composer) confirms it is a personal routine, not something other scene
musicians adopted under this tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing facts: the verbatim SIDId comment (only
sourced technique claim, not independently re-derived here); the **3-file /
1-composer concentration** (personal routine, not a tool); and the explicit
non-conflation with `DigiMonitor` and `OxyMod4Bit/THCM`/`OxyMod/THCM`, two
name-adjacent but evidence-distinct sibling tags also touching Mahoney's
discography in this same dataset.

## Disassembly notes

None done here. No public source for this specific replay routine's machine
code was confirmed — only measurement/table-building tooling on Mahoney's own
site is described in secondary sources. All Tier 3 fields are `TODO`.

## Verification

Not verified. Identity (author, file usage, CSDb release years for the 3
tunes) is Tier 1/2 sourced from SIDId and CSDb as cited; the playback
technique description is quoted from SIDId's comment and corroborated (not
independently confirmed) by an unrelated forum discussion. No disassembly,
no `mcp-c64` trace. `status: stub`.

## Sources

See the `sources` array — SIDId, Mahoney's own PDF (cited but not fully
fetched — see the note in `quirks`), CSDb sid entries, CSDb scener profile,
and a Lemon64 forum thread.
