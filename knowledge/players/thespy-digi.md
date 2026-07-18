# TheSpy_Digi ("The Spy's digi player" — low-confidence Player-ID tag)

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "thespy-digi",
  "name": "TheSpy_Digi",
  "aliases": ["?TheSpy_Digi"],
  "authors": ["TODO: unconfirmed. DeepSID's own display-name mapping hedges with a trailing '/?' (\"The Spy's digi player/?\"); CSDb lists 8 distinct sceners and 4 groups sharing the 'The Spy' handle, none with a documented coder/tool credit matching the release groups/years these 6 files actually belong to"],
  "released": "TODO: no single dated tool release found — the 6 locally-tagged files span 1986-1989 across 5 different, unrelated release groups",
  "status": "stub",
  "platform": "Native C64. Appears to be a per-file/in-track digi-playback routine (not a standalone distributed tracker) embedded independently across at least 4 unrelated composers and 5 unrelated release groups — no shared fixed code address was found across the tagged files (see quirks).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file — not a fixed/relocatable player. Per CSDb PSID headers: Sound of C load $0900, It's Cool It's Hot load $3000, C in China load $0900, Ice in the Sunshine load $1800, Zapp 5 Digi Mix load $0E00, Dance into the Groove load $0801",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: per-file — Sound of C $3000, It's Cool It's Hot $7400, C in China $5A00, Zapp 5 Digi Mix $C800, Dance into the Groove $0000 (BASIC-loader shape), Ice in the Sunshine unlisted on the fetched CSDb page",
    "play": "TODO: all 6 tagged files show PSID 'Play address: $0000' per CSDb — consistent with an IRQ/CIA-installed-at-init routine rather than a periodically-called play vector, but not disassembly-confirmed"
  },
  "speed": "TODO: not disassembled. The Player-ID detection signature itself (see effects.encoding) includes a 'BIT $DD0D' CIA-2-ICR poll immediately before the SID write, consistent with a CIA-timer-driven digi loop, but the actual rate/multiplier is unconfirmed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled as a music-command format. Only the Player-ID detection signature is known: `B1 ?? 29 0F AA A9 01 2C 0D DD F0 FB 8E 18 D4` (15 bytes, 1 wildcard) from cadaver/sidid's sidid.cfg. Decoded: LDA (zp),Y / AND #$0F / TAX / LDA #$01 / BIT $DD0D / BEQ -5 / STX $D418 — a CIA-2-ICR-polled loop that nibble-masks a byte and writes it to the SID volume register ($D418). This is the shape of a 4-bit-nibble-via-volume-register digi playback loop (the same broad technique family as Impossible Mission's digi), not a claim of shared code with any other tagged player.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The leading '?' is DeepSID/SIDId's own low-confidence tag-match marker, the same convention documented on other cards in this KB (e.g. knowledge/players/paul-hodgson.md, knowledge/players/msb.md, knowledge/players/hoernell-players.md). Here it is doubly hedged: DeepSID's own php/pretty_player_names.php maps '?TheSpy_Digi' => \"The Spy's digi player/?\" — note the trailing '/?', DeepSID's own uncertainty about the attribution, independent of the tag-prefix convention. Source: https://github.com/Chordian/deepsid/blob/master/php/pretty_player_names.php (search '?TheSpy_Digi').",
    "cadaver/sidid's sidid.cfg has ONLY a detection signature for this tag (`B1 ?? 29 0F AA A9 01 2C 0D DD F0 FB 8E 18 D4`, https://github.com/cadaver/sidid/blob/master/sidid.cfg) — there is NO corresponding entry in sidid.nfo (checked directly, https://github.com/cadaver/sidid/blob/master/sidid.nfo, no 'Spy' match), so no author/released/reference/comment metadata exists upstream. This mirrors the exact 'signature but no metadata card' gap already documented on ?Paul_Hodgson.",
    "Locally, 6 files span 4 UNRELATED composer folders and 5 different release groups across 1986-1989, with no shared scene-group provenance: Ice in the Sunshine (Dirk/J-Up, Software Team, 1987, CSDb sid id 60355), Sound of C (Daniel Mordant/The Big Dada, Oneway, 1989, id 51993), It's Cool It's Hot (The Big Dada, New Formula Crew, 1989, id 51994), C in China (The Big Dada, Oneway, 1989, id 51995), Zapp 5 Digi Mix (The Dream Maker & Herkules, Higher Computer Science, 1986, id 29193), Dance into the Groove (Tomas Danko/Gaunt, Shadi Software, 1987, id 65600).",
    "Direct CSDb release-credit checks on 2 of the 6 releases show the COMPOSER THEMSELVES credited with the 'Sampling' role, not anyone named 'The Spy': 'Confetti's' (Oneway, 1989, https://csdb.dk/release/?id=121963) credits The Big Dada for Code/Text/Charset/Sampling; 'Ice in the Sunshine' (Software Team, 1987, https://csdb.dk/release/?id=212652) credits J-Up alone for Code/Text/Sampling. Neither credits page mentions 'The Spy' in any role, so the tag's namesake is not corroborated by scene credit on the very files it is attached to.",
    "A CSDb sitewide search for 'The Spy' (https://csdb.dk/search/?seinsel=all&search=The+Spy) surfaces 8 distinct sceners using that exact handle plus 4 groups (e.g. group id 6298 'The Spy', a 1985-1986 Swedish cracker/demo group whose sole documented member is 'Max'; scener id 1026 'The Spy', a Swedish coder/swapper active 1986-2018 across many groups, none of which match these 5 release groups). No single candidate has a documented coder/tool credit tying them to any of the 6 tagged releases — the attribution behind DeepSID's display name remains unconfirmed (TODO).",
    "Per-file PSID headers (fetched directly from CSDb for all 6 tagged files) show 'Play address: $0000' on every file — the shape of an IRQ/CIA routine installed once at init rather than a periodically-called play vector — but load/init addresses vary widely per file with no fixed shared code location, consistent with either independent per-release relocation of a shared routine or independently-written per-composer digi code that merely triggered the same heuristic byte signature. One file, 'Dance into the Groove' (Tomas Danko/Gaunt), is itself HVSC '_BASIC'-suffixed (Dance_into_the_Groove_BASIC.sid, load $0801/init $0000/play $0000) — a BASIC-loader shape, underlining the heterogeneity rather than one shared machine-code routine."
  ],
  "sources": [
    "Local dataset aggregation: data/composers/j-up.json, data/composers/the-big-dada.json (3 files), data/composers/the-dream-maker.json, data/composers/tomas-danko.json — 6 files tagged '?TheSpy_Digi' total; knowledge/COVERAGE.md row #1 (6 files, uncarded)",
    "data/sidid.json — no byTag entry for '?TheSpy_Digi' (checked, absent)",
    "Player-ID detection signature: https://github.com/cadaver/sidid/blob/master/sidid.cfg (search '?TheSpy_Digi')",
    "No sidid.nfo metadata entry (checked, absent): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "DeepSID display-name mapping (\"The Spy's digi player/?\"): https://github.com/Chordian/deepsid/blob/master/php/pretty_player_names.php",
    "CSDb SID entries (PSID header data): Sound of C https://csdb.dk/sid/?id=51993, It's Cool It's Hot https://csdb.dk/sid/?id=51994, C in China https://csdb.dk/sid/?id=51995, Ice in the Sunshine https://csdb.dk/sid/?id=60355, Zapp 5 Digi Mix https://csdb.dk/sid/?id=29193, Dance into the Groove https://csdb.dk/sid/?id=65600",
    "CSDb release credits: Confetti's (Oneway, 1989) https://csdb.dk/release/?id=121963; Ice in the Sunshine demo (Software Team, 1987) https://csdb.dk/release/?id=212652",
    "CSDb sitewide search for 'The Spy' (sceners and groups): https://csdb.dk/search/?seinsel=all&search=The+Spy; group profile https://csdb.dk/group/?id=6298; scener profile https://csdb.dk/scener/?id=1026"
  ]
}
```

## Overview

`?TheSpy_Digi` is a low-confidence Player-ID/SIDId detection signature —
DeepSID's own display name for it, "The Spy's digi player/?", carries a
trailing "/?" that is DeepSID's own hedge on the attribution. Only 6 files in
this project's local dataset carry the tag, spread across 4 unrelated
composers (Dirk/J-Up, Daniel Mordant/The Big Dada, The Dream Maker & Herkules,
Tomas Danko/Gaunt) and 5 unrelated release groups spanning 1986-1989, with no
shared scene-group provenance. The underlying byte signature
(`B1 ?? 29 0F AA A9 01 2C 0D DD F0 FB 8E 18 D4`) decodes to a CIA-timer-polled
loop that writes a nibble-masked byte to the SID volume register ($D418) — the
general shape of a 4-bit digi playback loop — but nothing beyond that
signature has been disassembled or confirmed. Direct CSDb credit checks on two
of the six releases show the composers themselves credited for "Sampling,"
not anyone named "The Spy," so this card cannot confidently name an author;
that is left an honest `TODO`.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the tag is DeepSID/SIDId's own
low-confidence match (doubly hedged, via both the tag's leading `?` and
DeepSID's own trailing `/?` in its display name); the upstream project has a
detection signature but no metadata card for this tag; the 6 tagged files
share no composer, group, or fixed code address; and CSDb's own release
credits contradict a literal "The Spy" attribution on the two releases
actually checked.

## Disassembly notes

None performed. No public source, CSDb tool/release entry, or format
documentation was located beyond the Player-ID detection signature quoted
above. All Tier 3 data-format/effects fields are `TODO`; the one exception is
the detection signature itself, which is a directly-cited public source, not
a guess.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts and the public
detection signature are established, all from cached local data
(`data/composers/*.json`, `data/sidid.json`) and public CSDb/GitHub sources.
No memory map, entry point, or data format has been confirmed by disassembly.

## Sources

See the `sources` array — local dataset aggregation, the absence of a SIDId
`byTag`/`sidid.nfo` entry (checked directly both places), the cadaver/sidid
detection signature, DeepSID's own display-name mapping, CSDb PSID header data
for all 6 tagged files, CSDb release-credit pages for 2 of the 6 releases, and
a CSDb sitewide search for "The Spy" sceners/groups.
