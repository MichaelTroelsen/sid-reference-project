# 256bytes/Frantic (player routine)

```json
{
  "id": "frantic-256bytes",
  "name": "256bytes/Frantic (player routine)",
  "aliases": ["256bytes/Frantic"],
  "authors": ["Mats (Frantic of Hack'n'Trade)"],
  "released": "2005-04-13 — CSDb release id 18068, 'New Kid on the Block [254 bytes]' (group Hack n' Trade), 1st place in the 'C64 Music' compo at the 'Tiny Sid C64 Music Competition' (CSDb event id 850, organized by Stefano Tognon/Ice00, Italy, running 2005-01-15 to 2005-05-08 — the same event as the sibling knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md cards). CSDb's own SID-entry 'Released' field independently states '2005 Hack n' Trade', consistent. Its untagged sibling 'Block Acid Dub (256 bytes)' (CSDb sid id 42657) is separately dated 2006. Source: https://csdb.dk/release/?id=18068 and https://csdb.dk/webservice/?type=sid&id=499 (queried via scripts/lib/csdb-client.js).",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 hand-coded routine + data written by Swedish scener Mats (Frantic) as a competition entry in the 'C64 Music' category of Ice00's 'Tiny Sid C64 Music Competition' (2005, CSDb event id 850), following the same '256bytes/*' pattern already carded at knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md. The release archive's own readme ('ftc-smallplayer-readme.txt', in the CSDb release-18068 download zip) states the author's source was assembled with 'Ninjas Dreamass' and that the 254-byte limit was chosen because it 'is the limit for fitting on a single disk block' — a personal target, not necessarily an official competition rule (the competition's own rules page, http://digilander.iol.it/ice00/tsid/tinysid, is dead). Frantic is otherwise best known as the author of the full native tracker defMON (see knowledge/players/defmon.md) — this tag covers a separate, much smaller one-off routine, not defMON.",
  "csdb_release": 18068,

  "memory": {
    "load_address": "$C32A for the one locally-tagged file, 'New Kid on the Block' (CSDb sid id 499) — read from that file's own CSDb/PSID header, not from a disassembly. Its untagged sibling 'Block Acid Dub (256 bytes)' (CSDb sid id 42657, same composer, not tagged '256bytes/Frantic' in this dataset) loads at $1000 instead — i.e. NOT a fixed load address across the two known files.",
    "zero_page": "TODO: no disassembly performed for this card.",
    "layout": "TODO: no order-list/pattern/table layout documented; likely no shared layout at all given the two known files use different load addresses (see quirks)."
  },
  "entry": {
    "init": "$C32A (New Kid on the Block, CSDb sid id 499, same as its load address). Sibling file 'Block Acid Dub' (id 42657) inits at $1000 (also same as its load address).",
    "play": "$C340 (New Kid on the Block, id 499). Sibling file 'Block Acid Dub' (id 42657) plays at $1011."
  },
  "speed": "TODO: no CIA-vs-raster confirmation found; only load/init/play addresses were available from CSDb SID-entry pages, not a speed model.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no command-byte encoding documented; no public source or disassembly located.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["alih"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SHARED STARTUP CODE WITH ALiH, PER THE AUTHOR'S OWN README — direct author-statement evidence, not a similar-name guess: the CSDb release-18068 download zip (https://csdb.dk/getinternalfile.php/6343/ht-newkidontheblock.zip) contains 'ftc-smallplayer-readme.txt', in which Frantic writes 'I use the same startup code (the trick with $0326) as Alih used in his entry so all credits should go to him for digging that up. As Alih says, that code was originally used by Steven Judd (and perhaps by someone else before that).' 'His entry' is CSDb sid id 16182, 'Crue Gurl (Freestyle Remix)' by Jaymz Julian (A Life in Hell) — tagged '256bytes/ALiH' and already carded at knowledge/players/alih.md — confirmed via CSDb to be a competitor in the SAME event (id 850, 'Tiny Sid C64 Music Competition', released 2005-04-06, 7 days before Frantic's 2005-04-13 entry). This is a shared ~few-byte zero-page startup trick (the $0326 IRQ-vector-restore idiom), not evidence the two competitors' full player+data routines are the same engine — recorded as `shares_routine_with` on that narrow basis, with 'Steven Judd' noted as the claimed ultimate originator but NOT added as an edge (no separate Steven Judd player card exists in this KB and no source was checked to confirm his authorship independently).",
    "THE '256 BYTES' LABEL IS ONLY EXACTLY TRUE FOR ONE OF THE TWO KNOWN FILES, same pattern already documented for the Ice00 sibling tag: 'New Kid on the Block' (CSDb sid id 499, the one file actually tagged '256bytes/Frantic' in this dataset) has a CSDb-listed data size of exactly 256 ($0100) bytes. Its apparent sibling, 'Block Acid Dub (256 bytes)' (CSDb sid id 42657, same composer, same era, title literally claims '256 bytes'), actually measures 264 ($0108) bytes per CSDb — 8 bytes OVER the claimed threshold — and is NOT tagged '256bytes/Frantic' by this project's Player-ID tooling (its `player` field is blank in data/composers/frantic.json). Recorded exactly as measured via CSDb, not assumed from either the tag or the release title.",
    "GENUINE REUSE ACROSS MULTIPLE PRODUCTIONS, not a one-off: CSDb shows 'New Kid on the Block' reused in 'Differential Scrolling' (2016 One-File Demo, by Sokrates) and 'PETSCII Ate My TinySID' (2005 Music Collection, Chrome and Ice Team), over a decade after its original 2005 release; 'Block Acid Dub' was separately reused in 'TRIAD Front Intro' (2017 Crack Intro, group Triad). This is the same 'real reused routine, not a throwaway gimmick' bar that earned the Agemixer and Ice00 sibling tags stub cards rather than a skip.",
    "The two files use DIFFERENT load/init/play addresses ($C32A/$C32A/$C340 for New Kid on the Block vs $1000/$1000/$1011 for Block Acid Dub) — consistent with each being its own hand-assembled, per-tune routine rather than one shared fixed-address engine, the same conclusion already reached for the unrelated 'LFT' tag (knowledge/players/lft.md).",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Frantic' — fingerprinted by this project's own Player-ID tooling only, same as the Agemixer and Ice00 sibling tags. (SIDId DOES have a separate entry for the unrelated 'DefMon' tag, Frantic's actual named tracker — see knowledge/players/defmon.md.)",
    "Do not conflate this tag with defMON: same author (Mats, handle Frantic, of Hack'n'Trade), but defMON is a versioned, publicly (if leak-first) released native tracker with its own CSDb tool-release pages and a SIDId entry, while '256bytes/Frantic' fingerprints a tiny, size-capped, hand-coded one-off predating/parallel to that (2005-2006 vs defMON's 2008 creation date per SIDId's 'Made in 2008' comment).",
    "Composer context: in this dataset Frantic (data/composers/frantic.json) has 5 total locally-tagged files; only 1 carries the '256bytes/Frantic' tag ('New Kid on the Block'), 1 carries 'DefMon' ('Higher Scores'), and 3 (including the untagged 'Block Acid Dub') carry no player tag at all."
  ],
  "sources": [
    "Local dataset: data/composers/frantic.json — 1 file tagged '256bytes/Frantic' ('New Kid on the Block', CSDb sid id 499) out of Frantic's 5 total locally-tagged files; see knowledge/COVERAGE.md row #18 (1 file)",
    "data/sidid.json: no entry for '256bytes/Frantic' (checked, absent); DefMon entry present separately (author 'Mats (Frantic of Hack'n'Trade)', released 2013, comment 'Made in 2008, released in 2013')",
    "CSDb SID entry 499, 'New Kid on the Block': author Mats (Frantic), group Hack'n'Trade, released 2005, load/init $C32A, play $C340, data size 256 ($0100) bytes; reused in 'Differential Scrolling' (2016) and 'PETSCII Ate My TinySID' (2005): https://csdb.dk/sid/?id=499",
    "CSDb SID entry 42657, 'Block Acid Dub (256 bytes)': author Mats from the group Frantic/Hack'n'Trade, released 2006, load/init $1000, play $1011, data size 264 ($0108) bytes despite the '(256 bytes)' title; reused in 'TRIAD Front Intro' (2017); present in the local dataset (data/composers/frantic.json) but with a blank `player` field, i.e. NOT tagged '256bytes/Frantic': https://csdb.dk/sid/?id=42657",
    "data/composers/frantic.json profile: full_name Mats, handle Frantic (former handles 'Mad Mats'/'Autoboy'/'Ziriax', struck through), country Sweden, csdb_id 8093, notable for creating defMON",
    "knowledge/players/defmon.md — sibling card for the composer's actual named/versioned tracker, cited to establish this tag is a distinct, smaller thing, not edited",
    "knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md — sibling cards establishing the same '256bytes/*' evaluation methodology (real measured size + confirmed reuse test); cited for methodology, not edited",
    "CSDb release entry 18068, 'New Kid on the Block [254 bytes]': released 2005-04-13 by group Hack n' Trade, 1st place 'C64 Music' compo at event id 850: https://csdb.dk/release/?id=18068 (queried via scripts/lib/csdb-client.js, type=release)",
    "CSDb event entry 850, 'Tiny Sid C64 Music Competition': organized by Stefano Tognon (Ice00), Italy, 2005-01-15 to 2005-05-08 — the same event as the Agemixer sibling card: https://csdb.dk/webservice/?type=event&id=850",
    "CSDb release-18068 download zip, 'ht-newkidontheblock.zip' (https://csdb.dk/getinternalfile.php/6343/ht-newkidontheblock.zip): contains newkidontheblock.prg, New_Kid_on_the_Block.sid, and the author's own readme 'ftc-smallplayer-readme.txt' — source of the 'Ninjas Dreamass' assembler note and the $0326-startup-code / Alih / Steven Judd lineage statement quoted in quirks",
    "CSDb SID entry 16182, 'Crue Gurl (Freestyle Remix)' by Jaymz Julian (A Life in Hell): released 2005-04-06, used in release id 18062 at the same event (id 850); confirms the 'Alih' referenced in Frantic's readme is the composer carded at knowledge/players/alih.md: https://csdb.dk/webservice/?type=sid&id=16182",
    "knowledge/players/alih.md — sibling card for Jaymz Julian (A Life in Hell), cited as the target of the shares_routine_with edge; not edited"
  ]
}
```

## Overview

`256bytes/Frantic` is Swedish scener **Mats** (handle Frantic, of Hack'n'Trade)'s
own ultra-compact player+data routine, entered 2005-04-13 (CSDb release id
18068) as a 1st-place "C64 Music" compo entry at Ice00's "Tiny Sid C64 Music
Competition" (CSDb event id 850 — the same event as the sibling
`agemixer-256bytes.md` and `ice00-256bytes.md` cards) — a separate, much
smaller thing from his actual named tracker, **defMON** (already carded at
`knowledge/players/defmon.md`). The one locally tagged file, "New Kid on the
Block" (CSDb sid id 499), measures exactly 256 bytes of SID data per CSDb. A
closely related file by the same composer, "Block Acid Dub (256 bytes)" (CSDb
sid id 42657, 2006), is present in the local dataset but was NOT caught by
this Player-ID tag (its `player` field is blank) and, despite its own release
title's "256 bytes" claim, actually measures 264 bytes per CSDb — the same
"label isn't always literally exact" pattern already seen on the Ice00
sibling tag. Both files were genuinely reused in later, unrelated productions
years after their original release, which is why this earned a stub card
rather than being skipped as a one-off gimmick. The release archive's own
readme also states the author's own startup-code lineage: a shared $0326
zero-page trick credited to fellow competitor Alih (Jaymz Julian, already
carded at `knowledge/players/alih.md`), who in turn credited it to Steven
Judd — recorded as this card's one `shares_routine_with` edge.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the release archive's own readme
documents a direct, author-stated shared startup-code trick with fellow
competitor Alih's entry (same event, 7 days apart), now recorded as the
`shares_routine_with` edge; the "256 bytes" label is exactly true for the
tagged file but not for its untagged 264-byte sibling; the two known files use
entirely different load/init/play addresses, consistent with independent
hand-assembled routines rather than one shared engine; `csdb_release` is now
resolved to 18068 (the file's own unambiguous original release, since exactly
one file carries this tag, same resolution logic as the Agemixer sibling); and
this tag must not be confused with the composer's actual tracker, defMON
(distinct CSDb release chain, distinct SIDId entry, later creation date).

## Disassembly notes

None performed. The load/init/play addresses recorded above come directly from
each file's own CSDb SID-entry page (reflecting that file's PSID header), not
from reading the code. A ~256-264 byte routine would be an unusually small and
tractable future disassembly target, as already noted for the Agemixer and
Ice00 siblings.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 1-file local tagging, CSDb-sourced sizes/addresses/reuse
for both the tagged file and its untagged sibling). No SIDId entry exists for
this specific tag. No runtime behaviour has been confirmed.

## Sources

See the `sources` array — local composer-file aggregation, two CSDb SID-entry
lookups, one CSDb release-entry lookup, one CSDb event-entry lookup, one CSDb
release download-zip readme, and the sibling `defmon.md`,
`agemixer-256bytes.md`, `ice00-256bytes.md`, and `alih.md` cards (cited, not
edited).
