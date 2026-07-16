# Christian Hikl (per-tune frequency dump)

```json
{
  "id": "christian-hikl",
  "name": "Christian Hikl (per-tune frequency dump)",
  "aliases": ["Christian_Hikl"],
  "authors": ["Christian Hikl (UNCONFIRMED — no credits exist; see quirks)"],
  "released": "1985-1987",
  "status": "stub",
  "platform": "Native C64. NOT a reusable player — a per-tune hand-coded frequency-dump routine with no abstraction layer at all.",
  "csdb_release": null,

  "memory": {
    "load_address": "Jump_n_Jive.sid: load $9060, end $967b (1,564 B). Raddish_in_the_Jungle.sid: load $c738, end $cad8 (929 B).",
    "zero_page": "UNUSED — verified. Absolute addressing only. Counters live in $02xx free RAM ($02bd step counter, $02be tempo divider).",
    "layout": "Jump_n_Jive: init $9060-$906a, play $906b-$90f8, six page-aligned frequency tables at $9100/$9200/$9300/$9400/$9500/$9600 (124 entries each, CMP #$7c). Raddish_in_the_Jungle: tables FIRST at $c738/$c7b8/$c838/$c8b8/$c938/$c9b8 ($80 apart, 127 entries, CMP #$7f), then play $ca40, init $cac9. NOTE THE LAYOUT IS INVERTED between the two (code-then-tables vs tables-then-code) — same architecture, re-emitted per tune. A personal idiom, not a fixed driver."
  },
  "entry": {
    "init": "$9060 (Jump_n_Jive); $cac9 (Raddish_in_the_Jungle).",
    "play": "$906b (Jump_n_Jive); $ca40 (Raddish_in_the_Jungle)."
  },
  "speed": "1x, tempo by a software divider in $02be (reload constant $08 in the traced tune), not by IRQ rate.",

  "data_format": {
    "order_list": "NONE — there isn't one. See quirks.",
    "patterns": "NONE.",
    "instruments": "NONE — envelope/PW/volume are hardcoded constants rewritten every tick, identical on all three voices.",
    "wavetable": "NONE.",
    "pulsetable": "NONE.",
    "filtertable": "NONE."
  },
  "effects": { "encoding": "NONE — no effect layer exists.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE HEADLINE: THIS IS NOT A DRIVER. It is a per-tune hand-coded frequency dump — six raw $D400-ready 16-bit frequency tables (FREQ_HI/FREQ_LO x 3 voices), one value per voice PER TICK, walked by a single X index. NO note numbers, NO patterns, NO sequences, NO instruments, NO effects, NO order list. The whole play routine is: DEC $02be / BEQ / RTS (not this tick) / reload #$08 / INC $02bd / CMP #$7c (wrap) / LDX $02bd / LDA $9100,X -> $D401 / LDA $9200,X -> $D400 / ... six times / LDA #$40 -> all 3 CTRL (gate off) / LDA #$41 -> all 3 CTRL (gate on). It hard-restarts every voice EVERY TICK.",
    "USE THIS CARD AS THE DOCUMENTED FLOOR of what a composer-named tag can mean. Every real tracker driver in this KB ([[sid-factory-ii]], [[sid-factory]], [[jch-newplayer]], [[jch-oldplayer]], [[laxity-newplayer]]) has pattern/sequence/instrument layers. This is their degenerate opposite: zero abstraction. It is the worked example of two lessons this KB keeps relearning — A COMPOSER-NAMED TAG IS NOT NECESSARILY A DRIVER, and TAG COVERAGE IS NOT PLAYER USAGE.",
    "THE TAG UNDER-MATCHES BADLY — 2 tagged, 7 actual. The composer has 9 files in HVSC (/MUSICIANS/H/Hikl_Christian/), and SEVEN of the nine use the identical 6-X-indexed-freq-table architecture, but only TWO carry the tag. Horse_Games and Raddish_Goes_to_Formel_1 use the identical routine and are untagged. Flying_High uses a 3-Y-indexed-table variant. Ice-Racing_BASIC is BASIC (tagged Basic_Program). So Christian_Hikl is a signature cut from 2 specific tunes, not a player identification.",
    "STIL INDEPENDENTLY CORROBORATES THE FLAT-TABLE FORMAT, from a completely different angle: '/MUSICIANS/H/Hikl_Christian ... Ice-Racing_BASIC.sid is the same tune as Raddish-One.sid but uses a player written in BASIC.' One data set, two players — which is only possible because the data is flat frequency values, trivially POKE-able from BASIC. Strong external confirmation of the disassembly.",
    "CORRECTION: DeepSID's active: 1987 is WRONG — the SID released headers span 1985-1987.",
    "SPELLING-VARIANT CHECK: NEGATIVE. 'Hikl' is correct, not a misspelling. Zero hits for Hilkl/Hinkl/Hikel in Musicians.txt, HVSC dirs, the DeepSID dump, sidid.nfo or CSDb. The name is consistent across five independent sources including the SID files' own author headers. No rabbit hole exists here.",
    "GERMAN, NOT AUSTRIAN — confirmed (HVSC Musicians.txt:746 'Hikl, Christian - GERMANY'; DeepSID country: Germany, full_name: Christian Hikl, csdb_id: 0). He is a GERMAN MAGAZINE TYPE-IN / BUDGET GAME AUTHOR (1985-87), NOT a demoscener: CSDb has no scener record at all — a search returns exactly his 9 SIDs and nothing else, no groups, no releases, no credits.",
    "EVERY FILE NAMES A GERMAN MAGAZINE PUBLISHER in its released header: 5x '1985/1986 Raetz-Eberle Verlag' (Raetz-Eberle GdbR, Bretten DE -> published Computer Kontakt 1983-88, type-in listings + programming competitions); 3x '1986/1987 Compute mit/Tronic Verlag'; 1x '1986 Homecomputer/Tronic Verlag'. 'Raddish Soft' is a LABEL (Horse Games (1986)(Raddish Soft)), so Raddish is his brand, not just a character. Supporting tell: 'Raddish Goes to Formel 1' — German 'Formel 1' inside an English title.",
    "TAG PROVENANCE, and a distinction that matters project-wide: Christian_Hikl is absent from sidid.nfo (373 entries) AND from DeepSID's players_lookup/players_info. It originates in DeepSID's own sidid.cfg, which is NOT shipped in the offline bundle. So 'no .nfo entry' does NOT mean 'SIDId doesn't know this player' — .nfo is SIDId's DOCUMENTATION file, not its signature config. In this project's terms it is correctly a synthetic/inferred player with no spec data.",
    "COLLISION AND SOURCE-QUALITY WARNINGS: (1) A 'Thomas Marx' co-author surfaced ONLY in search-engine summaries synthesized over people-search spam (yasni.de, peoplecheck.de). No primary source. NOT confirmed — do not add. HVSC has no 'Marx' musician entry. (2) A StayFriends 'Christian Hikl' (Marl/Bochum, TFH Georg Agricola 1992-96) is age-plausible (~17 in 1985) but has ZERO evidence linking him to the C64 work — ruled out as unverifiable."
  ],
  "sources": [
    "HVSC Musicians.txt:746 ('Hikl, Christian - GERMANY'); STIL.txt /MUSICIANS/H/Hikl_Christian (the BASIC-player corroboration): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/STIL.txt",
    "C64-Wiki — Raetz-Eberle: https://www.c64-wiki.de/wiki/R%C3%A4tz-Eberle · Computer Kontakt: https://www.c64-wiki.de/wiki/Computer_Kontakt · Compute mit: https://www.c64-wiki.de/wiki/Compute_mit",
    "Wikipedia (DE) — Homecomputer (Zeitschrift): https://de.wikipedia.org/wiki/Homecomputer_(Zeitschrift)",
    "archive.org — Flying High (1986)(Computer Kontakt): https://archive.org/details/Flying_High_1986_Computer_Kontakt_cr_Rio_Baan_ASS · Horse Games (1986)(Raddish Soft): https://archive.org/details/Horse_Games_1986_Raddish_Soft · Raddish-One (1986): https://archive.org/details/d64_Raddish-One_1986_Madox · Raddish-Two (1986)(Markt & Technik): https://archive.org/details/d64_Raddish-Two_1986_Markt_Technik",
    "CSDb search (returns only his 9 SIDs — no scener, no groups): https://csdb.dk/search/?seinsel=all&search=Hikl",
    "Local: disassembly of both tagged files; data/composers/christian-hikl.json; deepsid_dl/sidid.nfo (absent — see the .nfo-vs-.cfg quirk)",
    "Negative check: archive.org ck198502 Computer Kontakt OCR text grepped — no Hikl/Raddish hits (only 2 issues are scanned)"
  ]
}
```

## Overview

`Christian_Hikl` is **not a player**. It's a per-tune hand-coded routine that
dumps precomputed frequency values straight at the SID — one value per voice per
tick, out of six flat tables, with every voice hard-restarted every tick. There
is no order list, no pattern, no instrument, no effect. Zero page is untouched.

Christian Hikl was a **German magazine type-in and budget-game author**, 1985-87,
publishing through *Computer Kontakt* (Rätz-Eberle Verlag) and Tronic-Verlag's
*Compute mit* and *Homecomputer*, under his own "Raddish Soft" label. He has no
demoscene footprint whatsoever.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **This card is the documented floor.** Every other driver card here has an
  abstraction layer; this one has none. Keep it as the contrast anchor for "a
  composer-named tag is not necessarily a driver."
- **The tag covers 2 of the 7 files that actually use this routine** — a clean
  worked example of tag coverage ≠ player usage.
- **`.nfo` absence ≠ SIDId ignorance.** The signature lives in `sidid.cfg`,
  which the offline bundle doesn't ship. That distinction matters on other cards.

## Disassembly notes

Both tagged files were disassembled in full — they're tiny (1,564 and 929 bytes)
and completely understood. The layout is *inverted* between them (code-then-tables
vs. tables-then-code) while the architecture is identical, which is itself the
evidence that this is re-emitted per tune rather than a fixed driver being reused.

The independent corroboration is the nicest part: STIL records that
`Ice-Racing_BASIC.sid` is *the same tune as Raddish-One.sid but with a player
written in BASIC*. One data set driving two players is only possible because the
data is flat frequency values — a completely separate source arriving at the same
conclusion as the disassembly.

## Verification

`status: stub`. The memory maps and architecture are **disassembly-derived and
solid**, but nothing has been re-run through `mcp-c64`. Both files are tiny and
fully understood, so they would be **unusually cheap reconstruction targets** if
a `verified` card is ever wanted — probably the cheapest in the KB.

Not determined: whether Hikl coded the games or only the music (no credits
anywhere; the archive.org items are auto-imported TOSEC dumps with no credit
metadata; GB64 is Cloudflare-blocked). Whether he wrote the routine or adapted a
magazine listing — the "one frequency per tick" idiom is a common German-magazine
beginner pattern, but no specific origin could be sourced, so **neither is
claimed**. Specific magazine issue numbers. Any biographical data.

## Sources

See the `sources` array above.
