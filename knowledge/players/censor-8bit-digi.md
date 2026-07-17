# Censor 8-bit Digi (Swallow / Censor Design)

```json
{
  "id": "censor-8bit-digi",
  "name": "Censor 8-bit Digi (Swallow / Censor Design)",
  "aliases": ["Censor_8bit_Digi_1", "Censor_8bit_Digi_2"],
  "authors": ["Fredrik Ternell (Swallow)"],
  "released": "TODO: no explicit release date for the routine itself; earliest attested local use is 2014-10-25 (Comaland, tag _1); latest is 2016 (Wonderland XIII, tag _2)",
  "status": "stub",
  "platform": "TODO: presumed a native-C64 in-house routine embedded in Censor Design demo code, not a standalone distributed editor/tool — no CSDb tool/editor release or source archive found under this name (same pattern as the sibling Censor_Digi family)",
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
    "Even smaller and more concentrated than the sibling Censor_Digi family (3 files/2 composers vs 14 files/2 composers) — squarely a personal/in-house routine used by a handful of Censor Design members, not a published tool, consistent with this batch's general expectation."
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
    "Demozoo, Comaland credits (Censor Design + Oxyron, 25 October 2014): https://demozoo.org/productions/124841/"
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
not a code-sharing or authorship link, so no `edges` are asserted to it. No
CSDb tool/editor release exists under this name — like `Censor_Digi`, this
reads as in-house Censor Design demo code, here even more concentrated (3
files vs 14) and squarely a personal/small-group routine.

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
