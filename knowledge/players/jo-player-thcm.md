# JO's player + THCM

```json
{
  "id": "jo-player-thcm",
  "name": "JO's player + THCM",
  "aliases": ["JO's player + THCM"],
  "authors": ["Uwe Anfang (The Human Code Machine / THCM) — confirmed as a code credit on the release this tag's sole file comes from", "Poul-Jesper Olsen (JO, aka Technic, Rock) — 'JO' most plausibly refers to him: the same composer (HJE) who produced this tag's sole file has 25 other locally-tagged files under the distinct tag 'Vibrants/JO', which SIDId's byTag resolves to author 'Poul-Jesper Olsen (JO)' (see sibling card vibrants-jo.md). This is strong circumstantial identification, not a source stating the two tags share code — kept out of `edges` accordingly (see quirks)."],
  "released": "First attested February 1997 — the tag's sole file, HJE's 'Megademo (part 2)', carries CSDb's own per-tune `Released` field '1997 Masters' Design Group', matching CSDb release 5937 ('Megademo 1', ReleaseMonth=2/ReleaseYear=1997). No separate release date for the player/routine itself is known — likely never released as a standalone product (see platform).",
  "status": "stub",
  "platform": "Not a standalone released tool — no SIDId entry, no CSDb release, no source repo found for this exact tag. Most plausibly a native C64 in-house/personal routine: composer HJE used the closely-related tag 'Vibrants/JO' (Poul-Jesper Olsen's hand-coded personal player, per sibling card vibrants-jo.md and CSDb's Vibrants group profile: \"JCH, JO and Laxity coded their own players and editors on the C64\") on 25 other files, and this one file's compound tag name suggests Player-ID detected JO's player routine combined with THCM's digi/sample-playback technique (the test-bit + waveform-$00 method documented in sidid.json's 'OxyMod/THCM' comment) inside the same binary. No source confirms this composition mechanism directly — recorded as a plausible hypothesis, not an edge.",
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
    "1 file, 1 composer: Hans Jürgen Ehrentraut (HJE), 'Megademo (part 2)' in Masters' Design Group's 'Megademo 1' (CSDb release 5937, February 1997). CSDb's release credit list for that production includes AMJ, Celticdesign, Charles Deenen, Frank Endler, HJE, Jeroen Tel, Odi, Oliver Stiller, Rage, Sky, The Human Code Machine, and Thomas Heinrich — 'The Human Code Machine' (THCM) IS directly confirmed as a coder on this release, corroborating the 'THCM' half of the tag name.",
    "'JO' is NOT an obvious match in Masters' Design Group's release-level credit list for 'Megademo 1' — not Jeroen Tel (already separately credited by his own full handle), not Odi, not any other listed scener. However, `data/composers/hje.json` shows the SAME composer (HJE) has 25 OTHER locally-tagged files carrying the distinct tag 'Vibrants/JO', which SIDId resolves to author 'Poul-Jesper Olsen (JO)' — see [[vibrants-jo]]. That card documents JO's routine as a hand-coded personal player used almost exclusively by JO himself plus a handful of Vibrants-affiliated composers including HJE (25 of vibrants-jo's 131 tagged files are HJE's). This makes Poul-Jesper Olsen by far the most plausible referent for 'JO' in this tag, even though no single source states the two tags ('Vibrants/JO' and 'JO's player + THCM') share code — recorded as strong circumstantial identification, not as a confirmed `edges` fact.",
    "Parallel case to [[mahoneydigi-thcm]]: no SIDId entry, single composer, THCM confirmed via release-level CSDb credits rather than the tag itself. Per this repo's rule that implied/inferred lineage must not become a machine-readable edge, no `edges` entry is asserted for the JO-Olsen/Vibrants-JO connection or for the THCM-digi-tool hypothesis, despite both being individually plausible.",
    "No SIDId entry exists for 'JO's player + THCM' (checked data/sidid.json directly).",
    "PSID header metadata for the sole file (CSDb sid entry 39979, via csdb.dk webservice — header fields, not a disassembly fact): LoadAddr 4096 ($1000), InitAddr 15872 ($3E00), 1 subtune, SID model 6581, PAL, DataSize 11847 bytes."
  ],
  "sources": [
    "CSDb release 5937 ('Megademo 1' by Masters' Design Group, ReleaseMonth=2/ReleaseYear=1997, full credit list incl. The Human Code Machine and HJE), fetched via csdb.dk webservice (type=release&id=5937): https://csdb.dk/release/?id=5937",
    "CSDb sid entry 39979 ('Megademo (part 2)', composer HJE, Released='1997 Masters' Design Group', LoadAddr 4096, InitAddr 15872), fetched via csdb.dk webservice (type=sid&id=39979): https://csdb.dk/sid/?id=39979",
    "Local dataset: data/composers/hje.json — full folder[] census (30 files), showing 25 of HJE's other files tagged 'Vibrants/JO' vs. this 1 file tagged 'JO's player + THCM'; knowledge/COVERAGE.md rank #111 for this tag",
    "data/sidid.json byTag['Vibrants/JO'] = {\"author\": \"Poul-Jesper Olsen (JO)\"} — used to identify 'JO'",
    "Sibling KB card knowledge/players/vibrants-jo.md (status: verified) — Poul-Jesper Olsen's hand-coded personal player, CSDb Vibrants group quote 'JCH, JO and Laxity coded their own players and editors on the C64', and its own census of HJE's 25 'Vibrants/JO'-tagged files",
    "Sibling KB cards: knowledge/players/oxymod4bit-thcm.md, knowledge/players/mahoneydigi-thcm.md (THCM context; cited for the hypothesis only, not as confirmed fact about this specific tag)",
    "data/sidid.json byTag — checked, no entry for \"JO's player + THCM\""
  ]
}
```

## Overview

`JO's player + THCM` is a raw Player-ID tag covering 1 file by composer
**Hans Jürgen Ehrentraut (HJE)**, part of Masters' Design Group's
"Megademo 1" (CSDb release 5937, first attested February 1997 per both the
release's own `ReleaseMonth`/`ReleaseYear` and the tune's own `Released`
field). CSDb's release credit list for that production directly confirms
**Uwe Anfang (The Human Code Machine / THCM)** as a coder alongside HJE and
several others — real corroboration for the "THCM" half of the tag name.
"JO" is not in that same release's credit list, but a full census of HJE's
own file catalogue (`data/composers/hje.json`, 30 files) shows he used the
closely related tag **"Vibrants/JO"** on 25 other files — SIDId resolves
that tag to author **Poul-Jesper Olsen (JO)**, documented in the sibling
[[vibrants-jo]] card as a Danish Vibrants member who hand-coded his own
personal C64 player routine. This makes Olsen by far the most plausible
referent for "JO" here, and the tag's compound name plausibly reflects
Player-ID detecting his player routine combined with THCM's digi/
sample-playback technique in the same binary — though no source states the
two tags share code directly, so this stays a hypothesis, not an `edges`
fact. This tag has no SIDId entry of its own, and its evidentiary shape
otherwise parallels the KB's existing [[mahoneydigi-thcm]] card:
THCM-adjacent, single-composer, corroborated only at the release-credits
level.

## Quirks & gotchas

See the `quirks` array. Load-bearing: THCM's presence is genuinely
confirmed via CSDb release credits (not just the tag name); "JO" is now
plausibly identified as Poul-Jesper Olsen via HJE's own 25 "Vibrants/JO"-
tagged files and the sibling `vibrants-jo.md` card, though not via this
tag's own release credits; and no `edges` relationship to either THCM's or
JO's other carded routines is asserted, per this repo's inference-vs-edge
rule.

## Disassembly notes

None done here. No source or disassembly was found; every Tier 3 field is
honestly `TODO`. A byte-level comparison against an `OxyMod/THCM`-tagged
file (per the plan already noted on `oxymod4bit-thcm.md`) would be the
most promising next step if this family is picked up again.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts
(composer, release date, THCM's credit, and JO's plausible identification
via a sibling card's census) are confirmed via CSDb and local dataset. No
SIDId entry exists for this exact tag. No runtime fact was guessed.

## Sources

See the `sources` array — the CSDb release and sid webservice records, a
full census of `data/composers/hje.json`, the SIDId `Vibrants/JO` entry,
the verified `vibrants-jo.md` sibling card, and the two THCM sibling cards
(cited for context only).
