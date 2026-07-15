# Robert Westgate (early driver, 1984-1986)

```json
{
  "id": "robert-westgate-v1",
  "name": "Robert Westgate (early driver, 1984-1986)",
  "aliases": ["Robert_Westgate_v1"],
  "authors": ["Robert Westgate"],
  "released": "1984-1986",
  "status": "in-progress",
  "platform": "English composer Robert Westgate's EARLIER playroutine — the first of two structurally distinct driver versions (a second, uncarded-until-this-batch [[robert-westgate-v2]] covers his 1987-1990 output). Consistently worked alongside the SAME coder, Jason Benham, across nearly his entire discography. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Bigtop Barney, 1984, Interceptor Software): load $7100 (init $7100, play $7180).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $7100.", "play": "Sample trace: $7180 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC LISTS A BARE 'Westgate, Robert' ENTRY — country/group could not be confirmed via direct fetch of Musicians.txt (came back unattributed); nationality (English) is inferred circumstantially from his UK publishers (Interceptor Software, Superior Software), not an HVSC-sourced fact.",
    "THREE CONFIRMED TITLES, a consistent Jason Benham coding partnership: Bigtop Barney (1984, Interceptor Software — coder/graphics Jason Benham; music credited to BOTH Graham Hansford AND Robert Westgate jointly, an unusual two-composer credit; soundtrack includes 'The Liberty Bell March' and 'Peacherine Rag'), Guzzler (1984, Interceptor Software — coder Jason Benham, title screen Claire Challis; music attribution is INCONSISTENT ACROSS SOURCES — one credits Westgate, another lists Graham Hansford as composer with Westgate only as 'Info' — explicitly flagged as unresolved, not picked arbitrarily), and Legend of Sinbad (1986, Superior Software — coder Jason Benham, producer Richard Hanson, composer SOLELY Robert Westgate, themed on Rimsky-Korsakov's 'Scheherazade').",
    "A CLEAN CHRONOLOGICAL SPLIT explains the version tags: this card's 3 titles run 1984-1986; the sibling [[robert-westgate-v2]] tag's 3 titles run 1987-1990 — no overlap or reversal, the same clean pattern already established in this KB for [[ozzy-oldskool]]/[[ozzy-oldskool-v2]] and the Cadaver driver pair.",
    "A PUBLISHER NAME-COLLISION RISK WAS EXPLICITLY CHECKED: a CSDb group (id=3218, member 'Lee') sharing the surname 'Westgate' is a completely UNRELATED cracker group with only 2 crack releases — confirmed NOT connected to the composer.",
    "JASON BENHAM CODED EVERY SINGLE ONE OF WESTGATE'S SIX KNOWN TITLES ACROSS BOTH TAGS (this card's 3 plus the sibling card's 3) — a consistent, unbroken two-person team spanning Interceptor Software → Superior Software → Elite Systems → Codemasters. No evidence Westgate coded himself; every credit list separates programmer (Benham) from musician (Westgate).",
    "THREE ADDITIONAL, EARLIER, UNCARDED WESTGATE TITLES WERE FOUND during research but fall outside this tag's 3-file scope: Megawarz, Outback, and Roomlord (all 1983-1984, Paramount Software) — flagged as a note for a possible future pre-v1 tag, not investigated further here.",
    "NO CSDb SCENER PROFILE EXISTS for Westgate — CSDb's own SID-composition search lists 9 total credited compositions but no personal scener page, consistent with a purely commercial 1980s UK games composer with no demoscene footprint.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[robert-westgate-v2]] (same composer, later driver version — companion card in this same batch). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Westgate, Robert' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Bigtop Barney (full credits, traced file): https://www.lemon64.com/game/bigtop-barney",
    "Lemon64 — Guzzler (attribution discrepancy noted): https://www.lemon64.com/game/guzzler",
    "Lemon64 — Legend of Sinbad: https://www.lemon64.com/game/legend-of-sinbad",
    "CSDb search — Westgate (9 SID compositions, no scener page): https://csdb.dk/search/?seinsel=all&search=Westgate",
    "CSDb group id=3218 (unrelated cracker group, explicitly ruled out): https://csdb.dk/group/?id=3218",
    "Existing KB card: knowledge/players/robert-westgate-v2.md (the later companion driver, this same batch)",
    "Local dataset: 3 files tagged Robert_Westgate_v1, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Robert_Westgate_v1` tag is English composer Robert Westgate's
earlier playroutine (1984-1986), the first of two versions in his
output. He worked with the same coder, Jason Benham, across nearly his
entire discography. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **clean chronological
version split** matching an established pattern already seen elsewhere
in this KB; and a **consistent, unbroken coding partnership** with Jason
Benham spanning both this driver and its later sibling version, across
four different publishers.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Robert_Westgate_v1`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Robert_Westgate_v1` `.sid` (Bigtop Barney): load
`$7100`, init `$7100`, play `$7180`, **27 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb (2
entries), and the related robert-westgate-v2 card.
