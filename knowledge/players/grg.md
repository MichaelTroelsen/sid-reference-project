# GRG (bare tag)

```json
{
  "id": "grg",
  "name": "GRG",
  "aliases": ["GRG"],
  "authors": ["Glenn Rune Gallefoss (GRG / 6R6)"],
  "released": "TODO: no fixed release date; local dataset's 11 GRG-tagged files span at least 1999 ('Commando', CSDb sid id 2688) through 2022 ('Enjoy the Silence', CSDb sid id 60964) per CSDb release dates.",
  "status": "stub",
  "platform": "Native C64 personal/in-house replay routine. No CSDb tool release, manual, or public source found for 'GRG' as a named program, same as its sibling family GRG Tiny.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not published as a fixed engine address; per-file PSID addresses vary by rip (e.g. 'Delta', CSDb sid id 2703: load/init $1000, play $1003; 'Enjoy the Silence', CSDb sid id 60964: load/init $9000, play $9003) — these are per-rip relocations, not a documented fixed base",
    "zero_page": "TODO: no disassembly done here",
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
    "100% personal: all 11 'GRG'-tagged files belong to a single composer, Glenn Gallefoss himself (data/composers/glenn-gallefoss.json) — same one-composer concentration signal as the separate GRG Tiny family (knowledge/players/grg-tiny.md).",
    "RESOLVES the open question left by grg-tiny.md: that card deliberately left the bare 'GRG' tag out because no source confirmed whether it shares code with 'GRG Tiny4' or is genuinely distinct. Checked directly this pass against SIDId's actual signature-matching config (not just its author-only .nfo index): cadaver/sidid's sidid.cfg lists three separate byte-pattern signatures under the 'GRG' heading (e.g. '48 29 F0 95 5C 68 29 0F 95...') that share NO bytes with any of the four 'GRG_tiny_1'..'GRG_tiny_4' signatures (e.g. GRG_tiny_1's '85 ?? 68 4A 4A 4A 4A A8 F0 07...', GRG_tiny_4's 'A5 ?? 30 ?? F0 ?? C9 01 F0 ?? 4C...'). Distinct instruction sequences at the signature level mean SIDId is matching genuinely different code, not a relocated copy of the same routine — so 'GRG' is written here as its OWN card rather than folded into grg-tiny.md as a fifth alias.",
    "No CSDb release, manual, or public source was found for 'GRG' as a named tool, searched directly — same absence as GRG Tiny. Contrast with the same author's actually-published, credited tool SID Duzz' It (knowledge/players/sidduzzit.md, CSDb release 7175).",
    "The two families are contemporaries, not a before/after split: bare-GRG usage (CSDb dates 1999-2022 across the 11 files) overlaps almost the entire span of GRG Tiny usage (2006-2025, per grg-tiny.md) rather than preceding it. Several file pairs even share adjacent CSDb SID-entry ids and near-identical titles across the two tags in the same era — 'Delta' (bare GRG, id 2703, 2001) next to 'Delta_Ingame' (GRG_tiny_1, id 2704); 'Delta_Slow' (bare GRG, id 2644) next to 'Plaster' (GRG_tiny_1, id 2645); 'Lightforce' (bare GRG, id 2796, 2000) versus the later remake 'Lightforce_2006' (GRG_tiny_1, id 42014, 2006) — consistent with Gallefoss using two related-but-code-distinct personal routines side by side across his output, not one superseding the other.",
    "Earliest and latest dated files bound the usage window found this pass: 'Commando' (CSDb sid id 2688, 1999, group Nostalgia) and 'Enjoy the Silence' (CSDb sid id 60964, 2022, group Nostalgia) — both confirmed via CSDb.",
    "Gallefoss has two other, real connections to published C64 music tools worth knowing but NOT asserted as edges here (no source/header ties GRG's code to either): SID Duzz' It (co-author, knowledge/players/sidduzzit.md) and Digitalizer (credited co-developer as '6R6', knowledge/players/digitalizer.md, data/players.json). Do not infer a derives_from link from name/author overlap alone."
  ],
  "sources": [
    "SIDId sidid.nfo entry for GRG (author field only, no dates/reference/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId sidid.cfg (the tool's actual byte-pattern signature config, checked directly this pass): GRG's three signatures share no bytes with GRG_tiny_1..4's four signatures, confirming distinct code: https://github.com/cadaver/sidid/blob/master/sidid.cfg (see 'GRG' / 'GRG_tiny_1' / 'GRG_tiny_2' / 'GRG_tiny_3' / 'GRG_tiny_4' headings)",
    "Local dataset: knowledge/COVERAGE.md (rank 17, 11 files, raw tag GRG) and data/composers/glenn-gallefoss.json (per-file player tags)",
    "CSDb SID entries used to bound the usage timeline: 'Commando' https://csdb.dk/sid/?id=2688 (1999, Nostalgia); 'Delta' https://csdb.dk/sid/?id=2703 (2001, SHAPE/Blues Muz', load/init $1000 play $1003); 'Lightforce' https://csdb.dk/sid/?id=2796 (2000, SHAPE/Blues Muz'); 'Enjoy the Silence' https://csdb.dk/sid/?id=60964 (2022, Nostalgia, load/init $9000 play $9003)",
    "Scener identity (Glenn Rune Gallefoss aka GRG / 6R6, groups incl. Nostalgia, SHAPE, Blues Muz'): https://csdb.dk/scener/?id=8098",
    "Sibling card, cross-referenced for the composer-concentration comparison and the open question this card resolves: knowledge/players/grg-tiny.md",
    "Cross-reference only (not an asserted edge): knowledge/players/sidduzzit.md (SID Duzz' It, Gallefoss co-author), knowledge/players/digitalizer.md and data/players.json (Digitalizer, Gallefoss/'6R6' credited as co-developer)"
  ]
}
```

## Overview

GRG is a second, code-distinct personal C64 replay routine used exclusively
by Norwegian musician/coder **Glenn Rune Gallefoss** (handle GRG, also seen
as 6R6) — separate from his other in-house routine family, **GRG Tiny**
(`knowledge/players/grg-tiny.md`, four SIDId-distinguished variants
`GRG_tiny_1`..`GRG_tiny_4`). All 11 files tagged with the plain `GRG`
signature belong to this one composer; nobody else in the collection uses
it, the same "personal routine" concentration signal as GRG Tiny. Like GRG
Tiny, no CSDb release, manual, or public source was found for "GRG" as a
named program. CSDb dates for the 11 files span 1999 to 2022, overlapping
almost the entirety of GRG Tiny's own 2006-2025 span rather than preceding
or following it — the two families read as related-but-distinct routines
Gallefoss used side by side across his career, not one superseding the
other.

## Quirks & gotchas

See the `quirks` array. The load-bearing finding of this pass: **`grg-tiny.md`
left the bare `GRG` tag as an unconfirmed lead** because its own research
(HVSC's Prg2Sid changelog) never mentioned a separate `GRG` entry. This card
resolves that by going one level deeper than the `.nfo` author index into
SIDId's actual signature-matching config (`sidid.cfg`) — `GRG`'s three
byte-pattern signatures share **no bytes** with any of `GRG_tiny_1`
through `GRG_tiny_4`'s four signatures, which is direct evidence of
genuinely different code, not a relocated copy of the same routine. That is
why this is written as its own card rather than folded into `grg-tiny.md`
as a fifth alias. A second finding worth flagging: several same-era file
pairs (adjacent CSDb ids, near-identical titles) appear under the two
different tags, suggesting Gallefoss used both routines concurrently rather
than one replacing the other over time.

## Disassembly notes

None done here. No public source or manual was located, so any memory
map/entry-point/format facts would have to come from disassembling a
representative `.sid` (e.g. the file behind CSDb sid id 2703 or 60964) and
tracing it via `sidm2-siddump` — not attempted in this pass.

## Verification

**Not verified — `status: stub`, identity/provenance only.** Confirmed:
single-author/single-composer usage (local dataset), the absence of a
public tool release (CSDb/web search), and — via SIDId's `sidid.cfg` raw
signatures — that `GRG` is byte-level distinct from `GRG_tiny_1..4`, i.e.
genuinely separate code rather than an unconfirmed variant of the same
routine. Every runtime field (memory map, entry points, speed model,
data/effect format) is `TODO` because no source or disassembly was
consulted for the actual code; the two per-file load/play addresses quoted
in `quirks`/`sources` are single-rip PSID header values, not a documented
fixed engine address.

## Sources

See the `sources` array — SIDId's `.nfo` author-only entry, SIDId's
`sidid.cfg` raw signature bytes (the decisive evidence for keeping this
family separate from GRG Tiny), this project's own `COVERAGE.md` grouping
and per-composer dataset, four CSDb SID entries used to bound the usage
timeline, Gallefoss's scener identity, and the sibling `grg-tiny.md` card.
The related `sidduzzit.md`/`digitalizer.md` cards are cited only as
cross-reference context, not as an asserted lineage edge.
