# Censor 8-bit Digi (Swallow / Censor Design)

```json
{
  "id": "censor-8bit-digi",
  "name": "Censor 8-bit Digi (Swallow / Censor Design)",
  "aliases": ["Censor_8bit_Digi_1", "Censor_8bit_Digi_2"],
  "authors": ["Fredrik Ternell (Swallow)"],
  "released": "TODO: no explicit release date for the routine itself — in-house code, not a distributed tool. Full census (2026-07-31, all 3 tagged files, via scripts/lib/csdb-client.js type=sid) of each file's own CSDb `Released` field: Comaland (tune 3), csdb sid 50483, tag _1, 'Released: 2014 Censor Design/Oxyron' (used in Comaland, release 133940, 2014-10-25 at X'2014); Fantasmolytic (tune 2), csdb sid 51659, tag _1, 'Released: 2015 Oxyron/Censor Design' (used in Fantasmolytic, release 139263, 2015-06-20 at Nordlicht 2015); Wonderland XIII (tune 1), csdb sid 53739, tag _2, 'Released: 2016 Censor Design' (used in Wonderland XIII, release 151275, 2016-10-30 at X'2016). Earliest attested is 2014-10-25 (Comaland, _1); latest is 2016-10-30 (Wonderland XIII, _2) — confirms, and slightly sharpens (adds exact dates), the card's prior figure.",
  "status": "stub",
  "platform": "Native C64 — coded directly into Censor Design demo parts, not a standalone distributed editor/tool. Confirmed 2026-07-31 via CSDb webservice: the Censor Design group record (id 2310) lists Grouptypes 'Cracker Group, Demo Group, Fixing Group, Import Group, Magazine Staff' with BaseCountry Sweden and no Amiga/PC crossover; a full census of all 518 releases credited to the group (fetched at depth=3) contains zero releases of Type Tool/Editor and zero releases with 'digi' in the Name — i.e. no dedicated 'Censor 8-bit Digi' (or any digi) tool/editor release exists anywhere in the group's own CSDb catalogue, matching the sibling Censor_Digi/Censor_Digi_16khz families' findings for the same group.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO (varies per file: $2000 for Comaland tune 3 and Fantasmolytic tune 2; $0A00 for Wonderland XIII tune 1, per CSDb's parsed PSID header — not independently re-verified by trace)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO (CSDb's parsed PSID header shows init = load address on all 3 known files, but this is unverified metadata, not a confirmed entry convention)",
    "play": "TODO (CSDb's parsed PSID header shows play = $0000 on all 3 known files — unusual; possibly an embedded/demo-driven routine rather than a periodic IRQ play call, but NOT independently confirmed by trace/disassembly)"
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
    "SIDId gives this tag a comment the sibling 'Censor_Digi' family entirely lacks: Censor_8bit_Digi_1's entry reads 'Uses the same technique to play 8-bit samples as in OxyMod/THCM.' Censor_8bit_Digi_2 has an author but no comment. This is real, specific, sourced evidence for the '8bit' claim in the tag name (contrast with this batch's general rule that 'Digi' in a name is not evidence) — SIDId is explicitly describing an 8-bit sample-playback technique here, not just a naming coincidence.",
    "'OxyMod/THCM' (see sibling card knowledge/players/oxymod4bit-thcm.md) is a DIFFERENT tool by a DIFFERENT author — Uwe Anfang (THCM) of Oxyron, a personal, never-publicly-released Amiga-MOD-to-C64 converter using a 2006 SounDemoN-discovered technique (waveform $00 + test bit + frequency register to write 8-bit sample data). SIDId's comment says Censor_8bit_Digi uses 'the same technique' — i.e. a technique-level similarity, not a code-sharing or authorship claim. No source found ties Fredrik Ternell (Swallow) and Uwe Anfang (THCM) to shared code, a common release, or a documented borrowing beyond this one comment. No `edges` asserted here for that reason — this is exactly the kind of same-sounding-but-unproven link this batch is designed to catch.",
    "SIDId lists NO entry at all for the sibling tags Censor_Digi_1/_2 or Censor_Digi/16khz, but DOES list both Censor_8bit_Digi_1 and _2 with an author (Fredrik Ternell) and, for _1, the technique comment above. This asymmetry is itself evidence: SIDId's byte-signature scanner (which produced sidid.nfo) treats Censor_8bit_Digi as a distinguishable signature worth cataloguing, while treating plain Censor_Digi as unremarkable/unmatched. That supports keeping this family as its OWN card rather than folding it into Censor_Digi, though it does not prove the reverse (that Censor_8bit_Digi and Censor_Digi share no code) — no sidid.cfg byte data was available locally to check that directly.",
    "Extremely small footprint: 3 files, 2 composers total (data/composers/magnar.json + data/composers/swallow.json). 'Comaland (tune 3)' is credited to 'Magnar Harestad & Fredrik Ternell' (tag _1) from the demo Comaland (Censor Design + Oxyron, released 2014-10-25). 'Fantasmolytic (tune 2)' is Fredrik Ternell (Swallow) solo (tag _1), from Fantasmolytic (Censor Design + Oxyron, 2015). 'Wonderland XIII (tune 1)' is Magnar Harestad SOLO (tag _2), from Wonderland XIII (Censor Design, 2016) — notably with no Swallow co-credit, even though SIDId lists only Swallow as the tag's author. This means Magnar independently produced a tune using this tag without Swallow's direct involvement, consistent with it being shared in-house Censor Design code rather than a routine Swallow personally hand-applies to every use — but no source states who actually coded the routine beyond SIDId's single-author attribution.",
    "Both composers are confirmed Censor Design members with overlapping tenure: Fredrik Ternell (Swallow), Sweden, founded/has led Censor Design since September 1989 (coder + musician). Magnar Harestad, Sweden, has been a Censor Design member since October 2012 (coder/graphician/musician/organizer) — his membership window covers all three known files here (2014-2016), consistent with him having in-group access to a shared routine rather than reverse-engineering or independently reinventing it.",
    "No CSDb tool/editor release exists for a 'Censor 8-bit Digi' product, matching the sibling Censor_Digi family's finding — this looks like in-house Censor Design demo code, not a distributed editor.",
    "CSDb's own parsed PSID header for all 3 known files shows play address $0000 (load $2000 or $0A00, init = load address) — flagged as a quirk, NOT confirmed as a real entry-point fact, since this project's role does not include re-disassembling or re-tracing the file to confirm CSDb's header parsing. A play address of zero is unusual for a standalone player and would be consistent with an embedded/demo-driven digi routine (no independent periodic play call), but that reading is speculative.",
    "Even smaller and more concentrated than the sibling Censor_Digi family (3 files/2 composers vs 14 files/2 composers) — squarely a personal/in-house routine used by a handful of Censor Design members, not a published tool, consistent with this batch's general expectation.",
    "Re-research pass, 2026-07-31: gap-fill for `released`/`platform`/`csdb_release`. All 3 tagged files re-verified directly against CSDb's webservice `type=sid` records (not just the SID-entry page URLs already cited) — each file's own `Released` field text is now recorded verbatim (see `released` above), confirming rather than changing the card's prior earliest/latest-use figures. `platform` upgraded from 'presumed' to confirmed: fetched the Censor Design group record at depth=3 and censused all 518 credited releases directly (not a targeted web search, which was unavailable this pass — see below) — zero are Type Tool/Editor and zero have 'digi' in the Name, a stronger negative than a keyword web search since it covers the group's entire own catalogue. `csdb_release` confirmed to stay `null` on the same evidence. WebSearch was unavailable this session (budget exhausted before any query returned) and the CSDb HTML site 503'd on a direct search-page fetch, so the group-catalogue census via the XML webservice was used as the substitute — a broader, more exhaustive check than the sibling cards' web searches, not a weaker one, though it cannot surface a tool release NOT credited to Censor Design as a group (e.g. a personal page). No Tier 3 field was touched; `status` stays `stub`."
  ],
  "sources": [
    "deepsid_dl/sidid.nfo / data/sidid.json byTag: Censor_8bit_Digi_1 (author Fredrik Ternell (Swallow); comment: 'Uses the same technique to play 8-bit samples as in OxyMod/THCM.'), Censor_8bit_Digi_2 (author Fredrik Ternell (Swallow), no comment) — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: data/composers/magnar.json and data/composers/swallow.json, per-file `player` tag aggregation (2 files by Magnar Harestad, 1 by Fredrik Ternell/Swallow — 3 files, 2 composers total)",
    "CSDb SID entry, Comaland (tune 3): composer Magnar Harestad & Fredrik Ternell, from Comaland/Comaland 100% (Censor Design/Oxyron) — https://csdb.dk/sid/?id=50483",
    "CSDb SID entry, Wonderland XIII (tune 1): composer Magnar Harestad, from Wonderland XIII (2016, Censor Design) — https://csdb.dk/sid/?id=53739",
    "CSDb SID entry, Fantasmolytic (tune 2): composer Fredrik Ternell (Swallow), from Fantasmolytic (2015, Censor Design and Oxyron) — https://csdb.dk/sid/?id=51659",
    "CSDb scener Swallow (Fredrik Ternell, Sweden, Censor Design founder/coder+musician since 9-1989): https://csdb.dk/scener/?id=2547",
    "CSDb scener Magnar Harestad (Sweden; Censor Design member since October 2012; coder/graphician/musician/organizer): https://csdb.dk/scener/?id=16913",
    "knowledge/players/oxymod4bit-thcm.md (sibling card in this knowledge base) — establishes OxyMod/THCM as a distinct tool by a different author (Uwe Anfang / THCM, Oxyron), used here only to confirm the technique-vs-authorship distinction, not to assert any edge",
    "knowledge/players/censor-digi.md (sibling card) — confirms SIDId has no entry at all for Censor_Digi_1/_2, contrasted here with this family's two documented entries",
    "Demozoo, Comaland credits (Censor Design + Oxyron, 25 October 2014): https://demozoo.org/productions/124841/",
    "2026-07-31 gap-fill pass: CSDb webservice type=sid records for all 3 tagged files, fetched via scripts/lib/csdb-client.js getSidRelease() — own `Released` field, LoadAddr/InitAddr confirmed: sid 50483 (Comaland tune 3, 'Released: 2014 Censor Design/Oxyron', Load=Init=8192/$2000), sid 51659 (Fantasmolytic tune 2, 'Released: 2015 Oxyron/Censor Design', Load=Init=8192/$2000), sid 53739 (Wonderland XIII tune 1, 'Released: 2016 Censor Design', Load=Init=2560/$0A00)",
    "2026-07-31 gap-fill pass: CSDb webservice type=group id=2310 record, fetched via scripts/lib/csdb-client.js csdbGet() at depth=3 — Grouptypes ('Cracker Group, Demo Group, Fixing Group, Import Group, Magazine Staff'), BaseCountry Sweden, and a full census of all 518 credited Release entries (zero Type=Tool/Editor, zero Name containing 'digi') used to confirm native-C64 platform and the absence of any dedicated tool/editor release: https://csdb.dk/group/?id=2310",
    "DRIFT-RECHECK 2026-08-07: re-fetched all previously-cited CSDb webservice records (sid 50483, 51659, 53739; group 2310; sceners 2547 and 16913) via scripts/lib/csdb-client.js. All SID-entry fields (Name/Author/Released/LoadAddr/InitAddr/UsedIn) and both sceners' Censor Design membership records (Swallow joined 9/1989, Magnar joined 10/2012, same Professions/Functions) are byte-for-byte unchanged from the 2026-07-31 pass. One minor drift: the Censor Design group's total credited-release count grew from 518 to 520 (2 new releases added to CSDb since the last pass) — re-censused, and the conclusion is unchanged: still zero Type=Tool/Editor and zero Name-containing-'digi' releases in the group's full catalogue. sidid.json's byTag entries for Censor_8bit_Digi_1/_2 (author, technique comment) are identical. data/composers/magnar.json and data/composers/swallow.json still show exactly 3 tagged file records across 2 composers — no new files. No Tier 1/2 field required correction; no Tier 3 field touched; `status` stays `stub`.",
    "data/composers/magnar.json and data/composers/swallow.json re-confirmed per-file tag assignment this pass: Comaland tune 3 = Censor_8bit_Digi_1 (csdb_id 50483), Fantasmolytic tune 2 = Censor_8bit_Digi_1 (csdb_id 51659), Wonderland XIII tune 1 = Censor_8bit_Digi_2 (csdb_id 53739) — census matches the 3-file/2-composer count already on this card, no new files found"
  ]
}
```

## Overview

Censor 8-bit Digi groups two SIDId Player-ID signatures, `Censor_8bit_Digi_1`
and `Censor_8bit_Digi_2`, found on only **3 files across 2 composers**
(`data/composers/magnar.json` + `data/composers/swallow.json`): **Fredrik
Ternell (Swallow)**, founder of the Swedish group **Censor Design**, and
fellow Censor Design member **Magnar Harestad**. Unlike its sibling family
`Censor_Digi` (which has no SIDId entry at all), SIDId documents both tags
here with an author (Swallow) and, for `_1`, an explicit technique comment:
*"Uses the same technique to play 8-bit samples as in OxyMod/THCM."* That is
real evidence for the "8-bit" claim in the name — but it names a
**technique-level similarity** to a different, unrelated tool (THCM/Uwe
Anfang's personal MOD-to-C64 converter, see `knowledge/players/oxymod4bit-thcm.md`),
not a code-sharing or authorship link, so no `edges` are asserted to it.
Platform is confirmed **native C64**, and `csdb_release` confirmed to stay
`null`: a 2026-07-31 census of all 518 releases credited to the Censor
Design CSDb group record (Sweden-based, no Amiga/PC crossover) found zero
Tool/Editor-type releases and zero "digi"-named releases anywhere in the
group's catalogue — like `Censor_Digi`, this reads as in-house Censor Design
demo code, here even more concentrated (3 files vs 14) and squarely a
personal/small-group routine. `released` stays `TODO` for the routine itself
(no dedicated release exists) but the full 3-file census is now pinned to
exact dates: 2014-10-25 (Comaland, tag `_1`) through 2016-10-30 (Wonderland
XIII, tag `_2`).

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **sourced 8-bit technique comment**
(real evidence, but for a technique similarity, not shared code with
OxyMod/THCM — no edge asserted); the **SIDId documentation asymmetry** with
the sibling `Censor_Digi` tags (this family has entries, that one doesn't —
support for keeping this as its own card); **Magnar's solo use of tag `_2`**
without a Swallow co-credit, suggesting shared in-group code rather than
Swallow personally producing every tagged file; and the **unusual
play-address-$0000 pattern** in CSDb's parsed header for all 3 files, flagged
but not independently confirmed.

## Disassembly notes

None done. No source, format spec, or disassembly was found publicly for
this routine. The most concrete future lead is the technique-similarity
comment to OxyMod/THCM — a byte-level comparison of a Censor_8bit_Digi file
against a known OxyMod/THCM file (see that card's `sources`) would be the
way to actually test whether "same technique" also means "shares code",
which no source currently confirms either way.

## Verification

Not verified — Tier 1/2 (identity, usage, provenance) only. `status: stub`.
No init/play/memory-map facts were asserted from disassembly or trace; the
CSDb-parsed header values are recorded as unverified metadata only, flagged
in `quirks`/`entry`, not treated as confirmed facts. All Tier 3 fields are
`TODO`.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), this project's own
`data/composers/*.json` aggregation, CSDb SID-entry and scener pages for
Comaland / Wonderland XIII / Fantasmolytic and for Swallow / Magnar Harestad,
Demozoo's Comaland credits, and the sibling `oxymod4bit-thcm.md` /
`censor-digi.md` cards used only for the technique-vs-authorship and
SIDId-documentation-asymmetry comparisons.
