# Equalizer

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "equalizer",
  "name": "Equalizer",
  "aliases": ["Equalizer"],
  "authors": ["TODO: unconfirmed. No credited author found for this Player-ID tag. CSDb lists a same-named C64 'Tool' — Equalizer V1.5 (Omega Supreme) and Equalizer V2.0 (Olav Mørkrid / Panoramic Designs, Feb 1992) — but nothing on either release page ties it to this tag or to composer Ronny Nilsen; treat as an unconfirmed lead only, see Quirks."],
  "released": "TODO: no distinct release date for the player/routine itself found — only per-tune composition dates exist. A full sweep of all 39 of 39 Equalizer-tagged files' CSDb sid entries (via scripts/lib/csdb-client.js, type=sid, 2026-07-31), reading the 'Released' field, spans 1993-1996, every file attributed to 'Atlantis' (one, Vandalism News #18 csdb id=21430, to 'Atlantis/Sound Etity'). Earliest-attested: 'Familiar' (csdb id=21480) and 'Terminator I+II Remix' (csdb id=21611), both 'Released': '1993 Atlantis'. Latest-attested: 'Goodbye' (csdb id=47777) and 'Unicrom' (csdb id=47776), both 'Released': '1996 Atlantis'. This is earliest/latest TUNE attested, not a release date for the routine — see quirks.",
  "status": "stub",
  "platform": "Native C64 hand-coded 6502 play routine (not a cross-platform tracker export) — inferred from real, consistent 6502 load/init/play addresses read directly from CSDb's PSID technical-info table across 5 sampled files (see memory/entry below). No disassembly performed.",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — identical across all 5 sampled Equalizer-tagged files checked on CSDb (Agenda id=21486, 1994 Atlantis. The Last Song id=21431, Ambient Try id=21434, Vandalism News #18 id=21430, Welcome Home id=21628). Not confirmed for the remaining ~34 of 39 files, and not from a disassembly — just the PSID header field as shown on each CSDb sid page.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "$1000 — same 5-file sample as load_address above (CSDb technical-info table).",
    "play": "$1003 — same 5-file sample. Note: play = init + 3 in every sample, consistent with a 3-byte 'JMP init / JMP play' trampoline at the load address. This exact init+3=play offset appears on knowledge/players/olav-morkrid.md's own traced sample too (load $1000, init $1003, play $1006 — play=init+3, but load != init there, unlike this tag's load==init pattern), and a closer load==init==$0b5a/play=$0b5d match appears on the separate knowledge/players/henning-rokling.md card — a suggestive structural parallel across two different cards, NOT asserted as a shared-routine edge here (no author statement or source header found linking any of these tags). Flagged as a disassembly lead, see Quirks."
  },
  "speed": "TODO: no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "EXTREME composer concentration: all 39 of 39 files tagged 'Equalizer' in this dataset (grep across data/composers/*.json) belong to a single composer, Ronny Nilsen (handle 'Snap'), Norway — data/composers/ronny-nilsen.json. Per this project's own heuristic (CLAUDE.md / knowledge/EXTRACTION-TEMPLATE.md), a single-composer tag is a strong signal of a small-scene or personal player routine rather than a widely-published tool — even stronger than the Rob Hubbard case (51 composers) already flagged elsewhere in this KB.",
    "NOT in SIDId's index (data/sidid.json byTag has no 'Equalizer' key/variant) — so unlike ~247 of the other 496 uncurated tags, this one gets no independent SIDId-sourced author/year/comment. The 'Equalizer' tag comes solely from DeepSID's own per-file database dump (the composer JSON's raw `player` field), not from a SIDId byte-signature match. Also absent from data/players.json (not a DeepSID-curated player) and from knowledge/COVERAGE.md's 'source' column (blank — no known public source flagged there either).",
    "UNCONFIRMED CANDIDATE LEAD: CSDb catalogues a same-named C64 'Tool' release, 'Equalizer' — V1.5 by Omega Supreme (https://csdb.dk/release/?id=132759) and V2.0 credited 'Code .... Olav Mørkrid of Panoramic Designs', Feb 1992 (https://csdb.dk/release/?id=132732). Olav Mørkrid (aka Omega Supreme) is the SAME coder already carded in this KB as knowledge/players/olav-morkrid.md, a distinct personal playroutine used by his Panoramic Designs bandmates. Neither CSDb release page states what the tool does (no 'music editor' description, no linked SID files, no file listing of the disk image), and no source was found connecting Ronny Nilsen (Xentrix/Eternity/Atlantis groups, not Panoramic Designs) to Mørkrid or to this specific release. This is a plausible but NOT confirmed identification — do not treat 'Equalizer' the CSDb tool and 'Equalizer' the Player-ID tag as proven to be the same thing.",
    "Distinguish from the many unrelated CSDb entries also named 'Equalizer' or 'The Equalizer' found while researching this tag: several 1986-1989 demos (Plasma Grafix, Triad, The Equalizer Team) and unrelated SID tunes literally titled 'The Equalizer' (Sam Roads 1986, Jay Derrett 1986, Matt Gray 1987) — none of these are music editors/players and were ruled out.",
    "RE-CHECKED (2026-07): Ronny Nilsen's own CSDb scener profile (id 945) lists his credited tools as 'ESC V1.6', 'S.A.C. Converter', and 'Note Creator Deluxe' — no tool named 'Equalizer' appears anywhere in his credit list. This does not rule out him having used someone else's 'Equalizer' tool, but it weakens (does not strengthen) the unconfirmed Olav Mørkrid/Panoramic Designs lead: there is still no positive evidence connecting Nilsen to that specific release, only the coincidental tool name and Nilsen's roles are graphician/musician/swapper, not coder, per his own profile. Group affiliations confirmed as Xentrix (from March 1991) → Eternity (co-founder) → Atlantis; a CSDb group search for a Norwegian 'Atlantis' scene group did not surface distinctly from a same-named Swiss group in this pass, so the exact Atlantis group id was not pinned down.",
    "Re-research pass, 2026-07-31 (identity/provenance gap-fill, scope: released + csdb_release only): swept ALL 39 of 39 Equalizer-tagged files' CSDb sid entries via scripts/lib/csdb-client.js (type=sid, not the HTML site, which was not needed this pass) and read each entry's 'Released' field directly (not just the 5 previously sampled). Result: every one of the 39 files' 'Released' field names 'Atlantis' (38 files) or 'Atlantis/Sound Etity' (1 file, id 21430), spanning 1993 ('Familiar' id=21480, 'Terminator I+II Remix' id=21611) to 1996 ('Goodbye' id=47777, 'Unicrom' id=47776) — this is a per-tune composition-date range, not a discrete release date for the player routine, so `released` stays TODO per the hard rule distinguishing the two. No CSDb 'release' (party/mag/collection) entry was found that documents the Equalizer routine itself as a distinct tool release, so `csdb_release` stays null — the only same-named CSDb 'Equalizer' Tool releases (ids 132759, 132732, Olav Mørkrid/Omega Supreme) remain the unconfirmed lead already recorded above, not usable as a cited `csdb_release` value without positive evidence tying them to this tag. Additionally ran WebSearch queries 'Ronny Nilsen \"Equalizer\" C64 site:lemon64.com' and '\"Equalizer\" playroutine C64 site:forum64.de' as instructed — both returned only unrelated noise (a 1986 platformer also called 'The Equalizer', and CheeseCutter's real-time audio-equalizer feature for multi-SID setups), no lead on this Player-ID tag's author or a formal release. status remains stub; no Tier 3 field touched."
  ],
  "sources": [
    "Local dataset: 39 files tagged 'Equalizer', 1 composer (Ronny Nilsen/Snap) — data/composers/ronny-nilsen.json",
    "data/sidid.json — checked, no 'Equalizer' entry in byTag",
    "data/players.json — checked, no 'Equalizer' entry",
    "CSDb composer profile, Ronny Nilsen (Snap), csdb_id 945: https://csdb.dk/scener/?id=945",
    "CSDb sid entries sampled for load/init/play (all show $1000/$1000/$1003): Agenda https://csdb.dk/sid/?id=21486, 1995. The Last Song https://csdb.dk/sid/?id=21431, Ambient Try https://csdb.dk/sid/?id=21434, Vandalism News (issue #18) https://csdb.dk/sid/?id=21430, Welcome Home https://csdb.dk/sid/?id=21628",
    "Control sample (same composer, different tag Music_Assembler, to confirm the address pattern is tag-specific not composer-wide): Alphaflight Mix, load $1000 / init $1048 / play $1021 — https://csdb.dk/sid/?id=21433",
    "Unconfirmed candidate-lead sources: CSDb 'Equalizer V2.0' https://csdb.dk/release/?id=132732, 'Equalizer V1.5' https://csdb.dk/release/?id=132759, Panoramic Designs group https://csdb.dk/group/?id=312, Olav Mørkrid scener profile https://csdb.dk/scener/?id=8158",
    "Existing KB card consulted for the init+3=play structural parallel: knowledge/players/olav-morkrid.md (and knowledge/players/henning-rokling.md)",
    "Re-verification pass (2026-07-24): re-grepped data/composers/*.json (39 occurrences of \"player\": \"Equalizer\", all in ronny-nilsen.json, no other composer file), re-checked data/sidid.json and data/players.json (still no entry), re-fetched CSDb scener profile https://csdb.dk/scener/?id=945 (credited tools: ESC V1.6, S.A.C. Converter, Note Creator Deluxe — no 'Equalizer'), re-fetched https://csdb.dk/release/?id=132732 and https://csdb.dk/sid/?id=21486 (both consistent with prior findings, no new detail). WebSearch queries for 'Ronny Nilsen Equalizer player routine' and 'csdb.dk Equalizer music editor Nilsen' returned no relevant results beyond what was already sourced.",
    "Full-sweep CSDb 'Released' field, all 39 files, csdb.dk/webservice/ type=sid (2026-07-31): csdb ids 21430-21631, 21633, 47776-47777 — every entry's Released field is 'Atlantis' or 'Atlantis/Sound Etity', years 1993-1996. Raw sweep output: https://csdb.dk/sid/?id=21480 (Familiar, 1993 Atlantis, earliest), https://csdb.dk/sid/?id=21611 (Terminator I+II Remix, 1993 Atlantis, earliest), https://csdb.dk/sid/?id=47777 (Goodbye, 1996 Atlantis, latest), https://csdb.dk/sid/?id=47776 (Unicrom, 1996 Atlantis, latest)."
  ]
}
```

## Overview

`Equalizer` is a Player-ID tag covering 39 SID files in this dataset,
**all 39 by a single composer**: Ronny Nilsen ("Snap"), a Norwegian musician
active in the Xentrix/Eternity/Atlantis scene groups. That total concentration
— unlike a genuinely published, widely-adopted tool — is this project's own
signal for a small-scene or personal player routine (see
`knowledge/EXTRACTION-TEMPLATE.md`'s composer-concentration guidance). The tag
is not in SIDId's index and has no DeepSID-curated player entry, so nothing
about its authorship is independently corroborated; everything below is
either a directly-cited CSDb observation or an explicitly-flagged unconfirmed
lead.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: **100% single-composer
concentration** (Ronny Nilsen/Snap, all 39 files), and an **unconfirmed
candidate identification** with a CSDb C64 "Tool" also named "Equalizer"
(V1.5/V2.0, 1992) credited to Olav Mørkrid (Omega Supreme) of Panoramic
Designs — the same coder already carded as
[knowledge/players/olav-morkrid.md](olav-morkrid.md). No source ties that
release to this Player-ID tag or to Ronny Nilsen, so this is recorded as a
lead for a future disassembly pass, not a fact. A second, more technical
observation worth flagging alongside it: this tag's sampled `play = init + 3`
address offset matches the exact same offset pattern already observed on the
`olav-morkrid.md` card's own traced samples — circumstantial, not proof.

## Disassembly notes

None performed (out of scope for this pass — Tier 1/2 identity + provenance
only). If a future pass disassembles a representative `Equalizer`-tagged
`.sid` (e.g. Agenda, csdb id 21486, load/init/play `$1000`/`$1000`/`$1003`),
the first thing to check is whether its code is byte-identical or a close
variant of the `olav-morkrid.md` routine — that would resolve the "same tool,
different tag" question raised in Quirks.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (composer
concentration, file count) and directly-read CSDb PSID-header addresses
(load/init/play, consistent across 5 independently sampled files) are
confirmed. No source code, disassembly, or author statement was found for
this player; the CSDb "Equalizer" tool candidate is an explicitly unconfirmed
lead. Every Tier 3 format/effect/zero-page fact is honestly `TODO`.

A 2026-07-24 re-verification pass re-ran the Tier 1 local-data checks (still
39/39 files, single composer, no SIDId/`data/players.json` entry) and
re-fetched the CSDb pages already cited, plus Ronny Nilsen's own CSDb credit
list — his credited tools are "ESC V1.6", "S.A.C. Converter", and "Note
Creator Deluxe", not "Equalizer", which if anything weakens rather than
strengthens the unconfirmed Olav Mørkrid tool-identity lead. No new public
source, author statement, or disassembly surfaced, so `status` stays `stub`
and no runtime field was promoted out of `TODO`.

A 2026-07-31 pass (identity/provenance gap-fill only, scoped to `released`/
`csdb_release`) swept all 39 of 39 tagged files' CSDb sid entries via
`scripts/lib/csdb-client.js`'s `type=sid` webservice call (worked around the
HTML site rather than needing it) and read each entry's `Released` field
directly, rather than trusting the earlier 5-file sample. Result: a
per-tune composition-date range of 1993-1996, every file attributed to
"Atlantis". That is evidence of *when the tunes were made*, not a release
date for the routine itself, so `released` stays an honest `TODO` rather
than being collapsed to a single guessed year — per this pass's hard rule
against conflating the two. No CSDb "release" entry documenting the
Equalizer routine as a distinct tool was found, so `csdb_release` stays
`null`. WebSearch of Lemon64 and Forum64 by name (as instructed) surfaced
no new lead. `status` stays `stub`; no Tier 3 field was touched.

## Sources

See the `sources` array — the local dataset (`data/composers/ronny-nilsen.json`,
`knowledge/COVERAGE.md`), `data/sidid.json`/`data/players.json` (checked,
no entry), the CSDb composer profile and sampled sid-entry technical-info
pages, and the unconfirmed CSDb "Equalizer" tool release pages plus the
related `olav-morkrid.md`/`henning-rokling.md` cards consulted for the
structural-offset comparison.
