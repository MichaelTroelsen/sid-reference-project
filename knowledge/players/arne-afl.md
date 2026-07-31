# Arne/AFL

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "arne-afl",
  "name": "Arne/AFL",
  "aliases": ["Arne/AFL"],
  "authors": ["Arne Puszelski (Arne)"],
  "released": "No dedicated tool/editor release exists on CSDb to date — the tag marks composer+group activity, not a product. Dated 'Arne/AFL'-credited output spans 1991 (earliest, 'Burning Stone', https://csdb.dk/sid/?id=37034) to 1996 (latest identified, diskmag 'The Best #5', per Arne's full CSDb credit list https://csdb.dk/scener/?id=6512)",
  "status": "stub",
  "platform": "Native C64 — confirmed NOT a published/distributed editor: a 2026-07-31 pull of Arne's full CSDb credit list (https://csdb.dk/webservice/?type=scener&id=6512&depth=3, 200+ entries) shows zero 'Code' credits on any music tool — only 'Music' credits throughout, plus one unrelated 'Code' credit on the non-music utility 'Disk Monitor V13'. Best-supported reading: a personal/hand-coded composing routine used only by its author, or a routine coded by someone else specifically for him, not identified",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public disassembly found",
    "zero_page": "TODO: no public disassembly found",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: no public disassembly found",
    "play": "TODO: no public disassembly found"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The tag name is composer-handle + group, not a tool name: 'Arne' is composer Arne Puszelski, and 'AFL' is Alpha Flight (aka 'Alpha Flight 1970'), the German C64 group he was a member of — https://csdb.dk/group/?id=215 confirms the group's own abbreviation is 'AFL'. This matches the pattern seen elsewhere in the dataset (e.g. 'MoN/FutureComposer/RWE') where a Player-ID signature encodes composer+group rather than a published editor's product name.",
    "100% single-composer concentration: all 48 files in this project's dataset tagged 'Arne/AFL' belong to composer Arne (data/composers/Arne.json), none to anyone else. Per the extraction rubric this is the strongest possible signal of a personal/small-scene routine rather than a genuinely published, shared tool — no other composer is known to have used it.",
    "No dedicated 'Arne' or 'AFL' music editor/player is documented anywhere found in this research (not in DeepSID's players.json, not on SID Preservation's editors list, not on Codebase64, not on CSDb as a standalone tool release). SIDId's own nfo entry for this tag (github.com/cadaver/sidid) contains only the AUTHOR line, no name/released/reference/comment fields — the shortest possible entry, itself a signal that even the SIDId maintainers had nothing more to record.",
    "Do not confuse this with 'Voicetracker' — a YouTube-documented example tune credited to Arne Puszelski is titled 'Voicetracker 4 Example 4', implying at least some of his output was made with a genuinely separate, unrelated editor (Voicetracker), not this 'Arne/AFL' signature. The two should not be merged.",
    "Arne's CSDb scener page also credits him as co-creator (with 'Bernd') of a tool called 'Disk Monitor V13' — https://csdb.dk/scener/?id=6512. This is a disk-monitor utility, not a music editor/player, and has no evident relationship to the 'Arne/AFL' SID signature; noted here only so a future researcher doesn't conflate the two.",
    "A dedicated public survey of C64 music editors (chordian.net's 'Comparison of C64 Music Editors', https://blog.chordian.net/2018/02/24/comparison-of-c64-music-editors/) lists Blackbird, DefleMask, SidTracker64, DMC, SID Duzz It, GoatTracker, Compotech Editor and SID-Wizard, and does not mention any 'Arne' or 'AFL' editor — corroborating that no published tool by this name exists.",
    "Cross-card note re: the [[soundmaker]] card's open Arne-vs-Pleite-Geier authorship discrepancy for 'SoundMaker IV' (DeepSID's players.json credits developer 'Arne' with no source given, vs SIDId's 'Pleite Geier'): this pass's full pull of Arne's CSDb credit list (see `platform` field) found zero 'Code' credits on ANY music editor/tool across his entire 200+-entry history — only 'Music' credits. The three C64 Tool releases where his name does appear all credit him as Music only, with someone else as Code: 'AFL - Noter V1.0' (1994, https://csdb.dk/release/?id=33990, Code: 'Scorpio'), 'Soundeditor V1.0' (1994, https://csdb.dk/release/?id=76416, Code: 'Dariusz'/'Rantanplan'), and 'Arne Musix Relocator V1.0' (undated, https://csdb.dk/release/?id=46643, a packer/relocator for Arne's own music files, Code: 'Xenox'). This weakens, without ruling out, DeepSID's 'developer: Arne' attribution for SoundMaker IV — nothing in his own CSDb credit record shows him coding any editor. Recorded here per the soundmaker.md owner's instruction not to edit that card directly.",
    "Re-research pass, 2026-07-31: filled `released`/`platform`/`csdb_release` gaps flagged by the parent task. Queried CSDb's webservice API directly (scripts/lib/csdb-client.js) for Arne's full scener record at depth=3 (https://csdb.dk/webservice/?type=scener&id=6512&depth=3) and individually fetched every release where he holds a 'Code' or 'Charset' credit (IDs 56094 'Fuck Racism', a demo; 241686 'Disk Monitor V13', a disk utility) plus every C64 Tool release naming him ('AFL - Noter V1.0' id 33990, 'Soundeditor V1.0' id 76416, 'Arne Musix Relocator V1.0' id 46643) to check for a hidden coding credit on a music editor — found none. Also checked local `data/composers/Arne.json`'s `folder` array (123 files) for a per-file release-year field to sharpen the 1991-1996 activity range — none exists there (no `released` key on file entries), so the range still rests on the scener page's dated release credits, not per-file dates. WebSearch of Lemon64 (site:lemon64.com \"Arne\" \"AFL\") and Forum64 (\"Arne\" \"Alpha Flight\" Sound Editor forum64.de) returned no thread naming an 'Arne' or 'AFL' C64 music editor/player — only unrelated general SID-tool threads and one unrelated Alpha Flight tool ('FBM Editor', csdb.dk/release/?id=79391, credited to cracker 'Ream' only, no music/code tie to Arne). Conclusion: `csdb_release` stays `null` — no CSDb release for a distinct 'Arne/AFL' tool exists, now confirmed by an exhaustive per-credit check rather than just an absence-of-listing check; `platform` and `released` were upgraded from bare TODO strings to cited, non-TODO findings reflecting that absence and the dated-usage range."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Arne/AFL'] = { author: 'Arne Puszelski (Arne)' } — no name/released/reference/comment fields present.",
    "Local dataset: knowledge/COVERAGE.md — as of this pass the family already has this card (520/520 families carded, 100% coverage); at the time of original research it ranked #7 among uncarded families, 48 files, single grouped raw tag 'Arne/AFL', no 'source' flag (blank = classic/undocumented, no local RE path).",
    "Local dataset: data/composers/Arne.json — composer profile (Arne Puszelski, b. 1971-08-17, Germany, CSDb scener id 6512, focus2 'SCENER', handles include 'Atman'); re-confirmed by direct query of data/composers/*.json that all 48 'Arne/AFL'-tagged files belong to this one composer, no others.",
    "SIDId upstream source (same content as local sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo (entry 'Arne/AFL', AUTHOR: Arne Puszelski (Arne)).",
    "CSDb group page confirming 'AFL' = Alpha Flight (Germany), founded April 1985, aka 'Alpha Flight 1970': https://csdb.dk/group/?id=215",
    "CSDb SID entries crediting Arne Puszelski (Arne) under Alpha Flight, e.g. 'Burning Stone' (1991): https://csdb.dk/sid/?id=37034",
    "CSDb scener page (https://csdb.dk/scener/?id=6512): group membership 'Alpha Flight (1991 -> present)', former membership 'Spirit (1991-1993)'; release credits include 'Burning Stone'/'German Chrome'/'Flying Destiny'/'Total Remix'/'Somalia' (1991), 'Best of Arne 1'/'Best of Arne 2' music collections (1994-1995), 'The Best #0-#5' diskmag series (1995-1996); also credits Arne as co-creator of an unrelated tool 'Disk Monitor V13'.",
    "Remix64 member profile (biographical only, no C64-era tool info): https://remix64.com/member/arne/ — lists C64 group memberships 'Alpha Flight 1970, Spirit, Ability, Quintex, Savage, UA', notes he later tracked music on PC 'for fun' using unnamed trackers, and lists remixes released 2008-2011 under aliases 'Arne'/'Sugus'.",
    "Firefox (C64, 1994, Game On) end credits page: 'Title Music by Arne \"Arne\" Puszelski of Alpha Flight 1970' — http://pirates.emucamp.com/a/f/firefox/c64/main_.html — confirms Arne's C64 composing extended to at least one commercially distributed game, not only scene releases.",
    "chordian.net 'Comparison of C64 Music Editors' (https://blog.chordian.net/2018/02/24/comparison-of-c64-music-editors/): no 'Arne'/'AFL' editor listed among the surveyed tools, corroborating no published editor by this name.",
    "Checked and found NO mention of an 'Arne' or 'AFL' editor/player: SID Preservation editors list https://sidpreservation.6581.org/sid-editors/ ; DeepSID data/players.json (no entry); Codebase64 SID programming page.",
    "CSDb webservice API (2026-07-31 pass, via scripts/lib/csdb-client.js): https://csdb.dk/webservice/?type=scener&id=6512&depth=3 (Arne's full Released+Credits lists, 200+ entries — every music-related credit is 'Music', not 'Code'); https://csdb.dk/release/?id=33990 ('AFL - Noter V1.0', 1994, Code: Scorpio, Music: Arne); https://csdb.dk/release/?id=76416 ('Soundeditor V1.0', 1994, Code: Dariusz/Rantanplan, Music: Arne); https://csdb.dk/release/?id=46643 ('Arne Musix Relocator V1.0', undated, Code: Xenox, Music: Arne); https://csdb.dk/release/?id=241686 ('Disk Monitor V13', Arne's only 'Code' credit anywhere, a disk utility unrelated to music); https://csdb.dk/release/?id=79391 ('FBM Editor' by Alpha Flight, checked and ruled out — credited only to cracker 'Ream', no tie to Arne or music).",
    "WebSearch (2026-07-31), explicitly targeting Lemon64 and Forum64 per this pass's research scope: site:lemon64.com \"Arne\" \"AFL\" (no matching thread, only unrelated general SID-tool discussions); \"Arne\" \"Alpha Flight\" Sound Editor forum64.de (no matching thread; surfaced only the unrelated 'FBM Editor' and general German C64-music-software threads)."
  ]
}
```

## Overview

"Arne/AFL" is a Player-ID signature tag in this project's dataset (48 files,
rank #7 among uncarded families in `knowledge/COVERAGE.md`), naming German
C64 scener **Arne Puszelski** ("Arne") and his group **Alpha Flight** ("AFL",
csdb.dk/group/?id=215). Unlike most carded player families, no distinct,
publicly documented editor or tool by this name could be found anywhere —
not in DeepSID's `players.json`, not on SID Preservation's editors list, not
on Codebase64, not as a standalone CSDb tool release. Combined with the fact
that all 48 tagged files in the local dataset belong to Arne himself (100%
composer concentration, re-confirmed by direct query of `data/composers/*.json`),
the evidence points to this being Arne's own hand-coded/personal music routine
used to write his own tunes for Alpha Flight, whose CSDb scener page
(csdb.dk/scener/?id=6512) records his membership there as "1991 -> present"
with credited music from 1991 ("Burning Stone", "German Chrome") through the
"Best of Arne 1"/"Best of Arne 2" collections (1994-1995) and the "The Best"
diskmag series (1995-1996). His C64 composing wasn't limited to scene
releases either — a Firefox (1994, Game On) end-credits page attributes its
title music to "Arne 'Arne' Puszelski of Alpha Flight 1970"
(pirates.emucamp.com/a/f/firefox/c64/main_.html), so at least some
"Arne/AFL"-signature output reached a commercial release. A dedicated public
survey of C64 music editors (chordian.net, 2018) lists no "Arne"/"AFL" tool
among the editors it tracks, further corroborating that this is a personal
routine rather than a published tool. A 2026-07-31 pass strengthened this
conclusion further: pulling Arne's full CSDb credit list (200+ entries)
found every one of his music-related credits typed as "Music," never
"Code" — including on the three C64 Tool releases where his name does
appear ("AFL - Noter V1.0," "Soundeditor V1.0," "Arne Musix Relocator
V1.0"), each of which credits someone else as coder. `platform` and
`released` were accordingly upgraded from bare TODO placeholders to cited
findings; `csdb_release` stays `null` because no CSDb release for a
distinct "Arne/AFL" tool exists anywhere in that record.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: the tag encodes
composer+group, not a product name; concentration is 100% single-composer,
the strongest possible "personal routine" signal in this project's rubric;
and no tool documentation exists to research further. Also note the
`Voicetracker`-titled example among Arne's own output — a reminder not to
conflate an unrelated editor he also used with this signature. A
2026-07-31 pass also recorded a cross-card note for [[soundmaker]]'s open
Arne-vs-Pleite-Geier authorship discrepancy: nothing in Arne's own CSDb
credit record shows him coding any music editor, which weakens (without
disproving) DeepSID's "developer: Arne" attribution for SoundMaker IV.

## Disassembly notes

None performed. No public source or prior disassembly was found to work
from; a future pass could pick a representative `Arne/AFL`-tagged `.sid`
(e.g. https://csdb.dk/sid/?id=37034, "Burning Stone") and disassemble its
init/play from the PSID header, tracing through `sidm2-siddump` — that is
the only route to real memory/format facts here, since no source exists.

## Verification

**Not verified — `status: stub`.** Identity facts (author, group
affiliation, dataset usage/concentration) are confirmed, from local dataset
files and CSDb/SIDId cross-references. A 2026-07-31 pass added provenance
depth to `platform`/`released`/`csdb_release` (previously bare TODO/null
placeholders): queried CSDb's webservice API directly for Arne's full
credit list and every C64 Tool release naming him, and searched Lemon64
and Forum64 by name — no distinct "Arne"/"AFL" editor or coding credit was
found anywhere, so `csdb_release` remains `null` on stronger evidence than
before, and `platform`/`released` now hold cited, non-TODO conclusions
rather than TODO strings. Every runtime field (memory map, entry points,
data format, effects) is honestly `TODO`: no tool documentation or source
was found for this signature, and none is expected to exist.

## Sources

See the `sources` array — local `data/sidid.json`/`data/composers/Arne.json`,
the upstream SIDId nfo, CSDb's Alpha Flight group page and a representative
SID entry, Remix64's biographical profile, and (2026-07-31) CSDb's
webservice API pulled directly for Arne's full credit list and every C64
Tool release naming him, plus Lemon64/Forum64 WebSearch queries. Explicitly
checked and found no entry: DeepSID `players.json`, SID Preservation's
editors list, Codebase64, Lemon64, Forum64.
