# 256bytes/Agemixer

```json
{
  "id": "agemixer-256bytes",
  "name": "256bytes/Agemixer",
  "aliases": ["256bytes/Agemixer"],
  "authors": ["Ari Yliaho (Agemixer)"],
  "released": "2005-02-07 — CSDb release id 16820, 'My Block ... One Block' (group Skalaria), 1st place in the 'C64 Music' compo at the 'Tiny Sid C64 Music Competition' (CSDb event id 850, organized by Stefano Tognon/Ice00 of Ice Team, Italy, running 2005-01-15 to 2005-05-08). CSDb's own SID-entry 'Released' field independently states '2005 Skalaria', consistent. Source: https://csdb.dk/release/?id=16820 and https://csdb.dk/webservice/?type=sid&id=6984 (queried via scripts/lib/csdb-client.js).",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Finnish composer Ari Yliaho, originally released as a competition entry (not an 'intro') in the 'C64 Music' category of Ice00's 'Tiny Sid C64 Music Competition' (2005, CSDb event id 850) — CSDb's structured event data lists only two compo types for that event, 'C64 512B Game' and 'C64 Music', with no separate byte-size subcategory recorded, so this pass could not confirm whether '256 bytes' was an official rules-page category name or is purely the measured/descriptive tag applied later; the competition's own rules page (http://digilander.iol.it/ice00/tsid/tinysid) is dead and unreachable via WebFetch or the Wayback Machine in this pass. The routine was subsequently reused (per CSDb 'UsedIn') across several unrelated later productions in genuine byte-size-capped Intro categories ('C64 1K Intro', 'C64 4K Intro', 'C64 Crack Intro' with '2kb'/'4k' names), 2007-2020. Not a conventional tracker; Agemixer's other ~100 files in this dataset mostly use DMC, SynC, Music Assembler, Yip_MegaSound, Hermit/SidWizard, or JCH NewPlayer — this tag covers only his own ultra-compact one-off routine.",
  "csdb_release": 16820,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256bytes' IN THE TAG NAME IS REAL, MEASURED DATA, NOT A CATEGORY LABEL: the one locally-tagged file, 'Myblock... One Block' (data/composers/agemixer.json, CSDb sid id 6984), has a CSDb-listed SID data size of exactly 252 bytes ($00FC) — i.e. genuinely sub-256-byte music data, confirmed via the CSDb SID entry itself, not inferred from the tag name. This is the strongest possible case in this batch for the tag name being literally, numerically true rather than descriptive/suggestive.",
    "GENUINE REUSE ACROSS MULTIPLE SIZE-LIMITED PRODUCTIONS, not a single one-off: CSDb's release listing for this SID shows it was used across several different size-capped demoscene productions — categorized variously as '4K Intro,' '2kb,' and '1K Intro' releases — meaning Agemixer's tiny player+data combination was reused as a soundtrack across multiple of his own size-coding entries, not embedded in just one intro. This is why the card was kept as a NEW STUB rather than SKIPped as a pure one-off gimmick.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Agemixer' — fingerprinted by this project's own Player-ID tooling only.",
    "csdb_release RESOLVED to 16820 (unlike the sibling knowledge/players/ice00-256bytes.md, which correctly left csdb_release null because it has TWO locally-tagged files each with its own unrelated original release): this tag has exactly one locally-tagged file, so its own original CSDb release ('My Block ... One Block', id 16820, 2005-02-07, 1st place 'C64 Music' compo at the 'Tiny Sid C64 Music Competition') unambiguously is 'the' release for this tag. Source: https://csdb.dk/release/?id=16820.",
    "PSID HEADER VALUES (metadata only, not disassembly facts — per knowledge/EXTRACTION-TEMPLATE.md, kept out of Tier 3 memory/entry fields): CSDb lists LoadAddr $0801 (2049), InitAddr $080B (2059), SID model 6581, PAL. Source: https://csdb.dk/webservice/?type=sid&id=6984.",
    "COMPETITION CONTEXT REFINED: the ORIGINAL 2005 release was a 'C64 Music' compo entry at Ice00's 'Tiny Sid C64 Music Competition' (event id 850) — not literally an 'intro' compo as an earlier pass on this card characterized it. CSDb's structured event data records only two compo types for that event ('C64 512B Game' and 'C64 Music'), with no distinct byte-size subcategory field, so this pass could NOT confirm whether '256 bytes' was an official rules-page category name; the event's own rules page (digilander.iol.it, defunct) was unreachable via WebFetch and the Wayback Machine in this pass. Recorded as an open question rather than asserted either way.",
    "COMPOSER CONTEXT: Ari Yliaho (Agemixer) is a prolific Finnish scener (data/composers/agemixer.json, ~100+ locally-tagged files, active since the 1990s per DMC/Music_Assembler-era tunes through GoatTracker-era tunes in the 2020s) whose catalog is otherwise dominated by conventional trackers — this ultra-compact routine is a small, deliberate outlier consistent with size-coding competition entries (256-byte/1K/2K/4K intros are a distinct demoscene discipline from full trackable music), not a general-purpose music tool ever offered to other composers.",
    "NOT the same thing as a '_Digi' sample-playback tag despite superficially belonging to the same 'tiny/utility routine' category covered in this batch — no source describes this specifically as sample/digi playback; it reads as an extremely space-optimized conventional player+data pairing for a byte-limited coding challenge, not confirmed sample technique. Treated cautiously per this KB's 'digi by name is not evidence' rule (which applies equally to unverified technique claims of any kind, not just literal '_Digi' tags)."
  ],
  "sources": [
    "Local dataset: data/composers/agemixer.json — 1 file tagged 256bytes/Agemixer ('Myblock... One Block', csdb sid id 6984) out of Ari Yliaho's ~100+ total tagged files; see knowledge/COVERAGE.md row #134 (1 file)",
    "data/sidid.json: no entry for '256bytes/Agemixer' (checked, absent)",
    "CSDb SID entry https://csdb.dk/sid/?id=6984 (queried via scripts/lib/csdb-client.js, type=sid) — 'Myblock... One Block', author Ari Yliaho (Agemixer), released 2005 for the group Skalaria, LoadAddr $0801/InitAddr $080B, SID model 6581 PAL, data size 252 ($00FC) bytes, reused across '4K Intro', '2kb', and '1K Intro' category releases (UsedIn: release ids 47861, 165641, 184696, 186077, 189635, 238653)",
    "CSDb release entry https://csdb.dk/release/?id=16820 — 'My Block ... One Block', released 2005-02-07 by group Skalaria, 1st place in the 'C64 Music' compo",
    "CSDb event entry https://csdb.dk/webservice/?type=event&id=850 — 'Tiny Sid C64 Music Competition', organized by Stefano Tognon (Ice00) of Ice Team, Italy, 2005-01-15 to 2005-05-08; compo types recorded: 'C64 512B Game', 'C64 Music' (no distinct byte-size subcategory field)",
    "digilander.iol.it/ice00/tsid/tinysid (the competition's own rules page) — checked, found dead/unreachable via WebFetch and the Wayback Machine in this pass; not used as a source",
    "data/composers/agemixer.json profile: full_name Ari Yliaho, handle Agemixer, country Finland, csdb_id 301"
  ]
}
```

## Overview

`256bytes/Agemixer` is Finnish composer **Ari Yliaho**'s own ultra-compact
player+data routine. The one locally-tagged file, "Myblock... One Block",
was released 2005-02-07 (CSDb release id 16820, group Skalaria) as a 1st-place
"C64 Music" compo entry at Ice00's "Tiny Sid C64 Music Competition" — a music
competition, not an "intro" compo as an earlier pass on this card
characterized it; the file genuinely measures 252 bytes of SID data per its
CSDb entry, so the tag name is literal, measured fact, not a suggestive
label, though whether "256 bytes" was an official rules-page category name
at that competition could not be confirmed (the rules page is dead and
unreachable). CSDb shows the same SID subsequently reused, years later,
across several *other* productions' genuine byte-size-capped Intro categories
(4K/2K/1K Intro), so this is a real, reused routine rather than a single
throwaway gimmick — the reason this became a stub card instead of a SKIP.
Agemixer's much larger catalog otherwise runs on conventional trackers (DMC,
SynC, Music Assembler, Yip_MegaSound, Hermit/SidWizard, JCH NewPlayer,
GoatTracker); this tag is a small, deliberate outlier tied to size-coding, not
a general-purpose tool ever used by anyone else.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "256 bytes" claim is independently
confirmed by CSDb's own reported data size (252 bytes), not just parsed from
the tag string; the routine was reused across multiple size-capped releases,
which is why this earned a stub card rather than being dismissed as a one-off;
`csdb_release` is now resolved to 16820 (the file's own original release,
unambiguous since exactly one file carries this tag — unlike the sibling
`ice00-256bytes.md`, which has two files and correctly leaves it `null`); and
whether "256 bytes" was ever an official competition category name (vs. a
purely descriptive/measured tag) could not be confirmed, because the
competition's own rules page is dead.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`, not guessed — no public source
or disassembly of this routine was located. A 252-byte SID would be an
unusually small and tractable disassembly target for a future pass.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 1-file/1-composer local tagging, CSDb-sourced size and
reuse evidence). No SIDId entry exists for this tag. No runtime behaviour has
been confirmed.

## Sources

See the `sources` array — local dataset aggregation, one CSDb SID-entry
lookup, one CSDb release-entry lookup, and one CSDb event-entry lookup (all
via `scripts/lib/csdb-client.js`); one dead-link check (the competition's own
rules page).
