# Rob Hubbard Digi (sample sub-routine)

```json
{
  "id": "rob-hubbard-digi",
  "name": "Rob Hubbard Digi (sample sub-routine)",
  "aliases": ["Rob_Hubbard_Digi", "(Rob_Hubbard_Digi)"],
  "authors": ["Rob Hubbard"],
  "released": "TODO: no explicit year in SIDId; earliest local file (Digidag) is dated 1987",
  "status": "stub",
  "platform": "Not a distributed tool — a hand-coded 6502 in-game routine embedded per game/tune, same non-tool nature as the main Rob Hubbard driver. SIDId fingerprints it as a SEPARATE byte signature from plain 'Rob_Hubbard' (own sidid.nfo entry, listed in parenthesized form '(Rob_Hubbard_Digi)' immediately after it), implying a distinct code variant rather than an identical match.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file/game, not researched here",
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
    "shares_routine_with": ["rob-hubbard"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "IS THIS ACTUALLY DIGI/SAMPLE PLAYBACK? Unlike most tags in this batch, YES — this one has direct primary-source confirmation, not just a suggestive name. HVSC STIL.txt on /MUSICIANS/L/Laxity/Digidag.sid: 'Laxity's first digi-tune, done in Rob Hubbard's player.' And on /MUSICIANS/K/KB/BING_Dance_Version.sid: \"'Go' sample extracted from /MUSICIANS/H/Hubbard_Rob/BMX_Kidz.sid\" — confirms BMX_Kidz.sid literally carries a digitized speech sample. This matches the main rob-hubbard.md card's own quirk that Hubbard's driver later gained '4-bit PCM sample playback via the SID volume-register trick' — this tag is plausibly SIDId's signature for that digi-capable variant/component.",
    "COMPOSER CONCENTRATION IS THE OPPOSITE OF THE PLAIN 'Rob_Hubbard' TAG: 12 of 17 files (~71%) are by Rob Hubbard himself (data/composers/*.json aggregation, files with player field 'Rob_Hubbard_Digi' exactly — an 18th file at Chris Walsh's Digi_Demo.sid carries the parenthesized ambiguous variant '(Rob_Hubbard_Digi)'). The plain 'Rob_Hubbard' tag, by contrast, is only ~28% Hubbard across 51 composers (see rob-hubbard.md) — so this digi variant is much MORE concentrated on Hubbard's own output, not less.",
    "The 5 non-Hubbard files are NOT independent reinventions — every one traced so far is an explicit derivative of a Hubbard original, confirmed by HVSC STIL: Peter Sanden's 'BMX Kidz Remix' is captioned 'Remix of /MUSICIANS/H/Hubbard_Rob/BMX_Kidz.sid — \"I simply changed some of the samples.\" (PS)'; Waz's 'Skate_or_Die-Lester_Forever_12' is a remix of Hubbard's own Skate or Die intro ('I fell in love with the game and the Hubbard music and just had to try and remix it' (WP)); Laxity's Digidag is stated to be 'done in Rob Hubbard's player'. Chris Walsh's two files (Bobby Bounceback, a 4-subtune game score, and Digi Demo) have no STIL comment tying them to Hubbard directly — unverified whether Walsh independently used/adapted the same routine or coincidentally matched its signature.",
    "SIDId lists NO 'released'/'reference' field for this tag (data/sidid.json byTag['(Rob_Hubbard_Digi)'] has only 'author': 'Rob Hubbard' — contrast Digitalizer_V2.x's entry, which has both). Do not infer a release date from SIDId; the earliest locally-dated file is Laxity's Digidag (CSDb sid id 17751, credited '1987 Zetrex' per its CSDb page).",
    "NOT confirmed to be byte-identical to the main Rob_Hubbard driver — SIDId treats them as two distinct signatures (own sidid.nfo entries), which by this project's own precedent (byte-signature divergence as evidence, e.g. GRG vs GRG_tiny) argues for a DISTINCT card rather than folding this into the verified rob-hubbard.md card. The relationship recorded here (edges.shares_routine_with) is deliberately one-directional evidence of common authorship/lineage, not a claim of code identity — and rob-hubbard.md (status: verified) must not be edited to add this as an alias without an actual disassembly proving byte-for-byte sameness.",
    "BMX Kidz (Rob Hubbard & Jori Olkkonen, Firebird 1988) is a real commercial game score, not a demo — confirmed via its CSDb SID entry (id 14286). Several of the other Hubbard-credited files here (After 8, Mr Meaner, Off the Cuff, Rikky, The Rock Tells the Tale — adjacent CSDb sid ids 61010-61022) look like a batch import of related game/compilation rips; not individually researched further here.",
    "RESOLVED (batch-25 tail pass): '(Rob_Hubbard_Digi)' (parens) is now formally added to `aliases` as the same signature as the unparenthesized tag — this card's own earlier quirks already described the parenthesized form as covering exactly the 1 file at Chris Walsh's 'Digi Demo' (data/composers/chris-walsh.json, player field literally '(Rob_Hubbard_Digi)'), and SIDId's own sidid.nfo lists it under the parenthesized key with the identical author line 'Rob Hubbard' and no other differing fields — the parens appear to be SIDId's own disambiguation notation for an author-only entry, not evidence of a second, distinct byte signature. Treated as one alias set, not a byte-identity claim beyond what SIDId itself records."
  ],
  "sources": [
    "Local dataset: data/composers/*.json aggregation — 17 files tagged exactly 'Rob_Hubbard_Digi' (+1 more tagged the ambiguous '(Rob_Hubbard_Digi)') across 5 composers: Rob Hubbard (12), Chris Walsh (2), Laxity (1), Peter Sanden (1), Waz (1)",
    "SIDId sidid.nfo (author only, no release/reference fields): deepsid_dl/sidid.nfo, entry '(Rob_Hubbard_Digi)' — see also https://github.com/cadaver/sidid/blob/master/sidid.nfo ; local mirror data/sidid.json byTag['(Rob_Hubbard_Digi)']",
    "HVSC STIL.txt (data/hvsc/STIL.txt) — direct composer/curator quotes confirming digi content and derivation: /MUSICIANS/L/Laxity/Digidag.sid ('done in Rob Hubbard's player'), /MUSICIANS/K/KB/BING_Dance_Version.sid ('Go' sample extracted from BMX_Kidz.sid), /MUSICIANS/S/Sanden_Peter/BMX_Kidz_Remix.sid ('Remix of BMX_Kidz.sid... changed some of the samples'), /MUSICIANS/W/Waz/Skate_or_Die-Lester_Forever_12.sid (remix credit)",
    "CSDb SID entries (csdb.dk/sid/?id=): Digidag id 17751 (Laxity, credited 1987 Zetrex), BMX Kidz id 14286 (Rob Hubbard & Jori Olkkonen, Firebird 1988)",
    "knowledge/players/rob-hubbard.md (verified card) — cited here only for the shared-lineage claim and the '4-bit PCM sample playback via the volume-register trick' quirk; NOT edited by this card"
  ]
}
```

## Overview

`Rob_Hubbard_Digi` is a SIDId byte signature distinct from the plain
`Rob_Hubbard` tag (see `knowledge/players/rob-hubbard.md`, `status: verified`,
which this card does not touch). Local usage is small — **17 files across 5
composers**, with **~71% (12/17) by Rob Hubbard himself**, the inverse of the
plain tag's ~28%-Hubbard/51-composer spread. Unlike most "_Digi"-named tags in
this batch, this one has direct primary-source confirmation of actual
digitized-sample content and of direct derivation from Hubbard's own work: HVSC
STIL.txt states Laxity's `Digidag` was "done in Rob Hubbard's player," and a
sample in another composer's tune is noted as literally extracted from
Hubbard's `BMX_Kidz.sid`. The remaining non-Hubbard files (Peter Sanden, Waz)
are explicit remixes of Hubbard's own tunes, not independent works. This reads
as a genuine sub-component of Hubbard's driver family — most plausibly the
4-bit PCM/volume-register sample-playback extension already noted in the main
card's quirks — occasionally carried into other composers' direct derivatives
of his game scores.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: real STIL-sourced confirmation
that this tag legitimately involves digi/sample content (not just a
suggestive name); the composer concentration runs the OPPOSITE direction from
the plain `Rob_Hubbard` tag (mostly Hubbard's own files here, vs. mostly
reused-by-others there); every non-Hubbard file traced is an explicit,
STIL-documented remix/derivative of a Hubbard original, not independent reuse;
and SIDId nonetheless keeps this as a SEPARATE signature from `Rob_Hubbard`,
which is why this got its own card instead of a proposed alias merge.

## Disassembly notes

None done. No memory map, entry points, or data format have been researched —
all Tier 3 fields are `TODO`. A disassembly of one of the Hubbard-authored
files (BMX Kidz, CSDb sid id 14286, is a good candidate given the confirmed
extracted sample) would be the natural next step, and could resolve whether
this signature is truly a distinct code variant of Hubbard's driver or shares
its core play routine byte-for-byte with the plain tag.

## Verification

Not verified. This card is Tier 1 (local dataset aggregation) + Tier 2
(SIDId, HVSC STIL, CSDb SID-entry lookups) only — no assembly, no trace. Kept
at `status: stub`.

## Sources

See the `sources` array — local dataset aggregation, SIDId's sidid.nfo, HVSC
STIL.txt (the load-bearing citations for the digi/derivation claims), and two
CSDb SID-entry lookups.
