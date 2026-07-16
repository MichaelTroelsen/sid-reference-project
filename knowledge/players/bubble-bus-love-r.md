# Bubble Bus house driver (R. Love label)

```json
{
  "id": "bubble-bus-love-r",
  "name": "Bubble Bus house driver (R. Love label)",
  "aliases": ["Bubble_Bus/Love_R"],
  "authors": ["UNKNOWN — Nick Strange is the best candidate (INFERRED, not confirmed); Richard Clark secondary. R. Love composed only."],
  "released": "1983-1985",
  "status": "in-progress",
  "platform": "Native C64. The in-house replay routine of Bubble Bus Software (UK) — used by FOUR different composers across SEVEN games, so the tag's composer name is not an authorship claim.",
  "csdb_release": null,

  "memory": {
    "load_address": "Bumping_Buggies load/init $19C8 (1888 b); Flying_Feathers load/init $2E96 (1386 b); Kick_Off load $1200 (1307 b). Hustler copies $2DA0 to $0AC0 at runtime.",
    "zero_page": "16-bit song pointer: $45/$46 (Bumping Buggies, Flying Feathers), $4B/$4C (Kick Off). Song data read via LDA (zp),Y.",
    "layout": "Kick Off puts the entries behind a JMP table (init $1200 -> JMP $120F, play $1203 -> JMP $1245); the others expose them directly."
  },
  "entry": {
    "init": "Per-game: $19C8 (BB), $2E96 (FF), $1200 (KO, via JMP table).",
    "play": "Per-game: $1A0D (BB), $2ED0 (FF), $1203 (KO, via JMP table). Cave_Fighter is play=$0 (self-installing)."
  },
  "speed": "Mixed and per-game: Bumping_Buggies VBI; Flying_Feathers and Kick_Off CIA. A frame-divider counter sets the musical tempo (see quirks).",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE TAG NAME IS NOT AN AUTHORSHIP CLAIM — it is DeepSID's composer-folder namespacing (Publisher/Person, the reverse of the Paul_Norman/ComPub precedent). The routine is a BUBBLE BUS HOUSE DRIVER used by FOUR different composers across SEVEN games, and R. Love has no involvement in four of them.",
    "THE DECISIVE EVIDENCE — a fingerprint scan of all 61,157 HVSC 85 files returns EXACTLY 7 HITS (0.0114% of HVSC), ALL SEVEN Bubble Bus, ZERO false positives. Signature = the 11-byte SID-clear preamble (LDY #$00 / TYA / STA $D400,Y / INY / CPY #$24 / BNE) PLUS the shared init block (STA $D405/$D40C/$D413 ADSR + STA $D418). The seven: Kick Off (1983, coder Nick Strange, music R. Love), Hustler (1983, Strange, music Damien Cavanagh), Bumping Buggies (1984, Richard Clark, R. Love), Flying Feathers (1984, T. Owen, R. Love), Cave Fighter (1984, Clark, Clark<?>), Aqua Racer (1985, Clark, <?>), Wizard's Lair (1985, Clark, Steve Crow or Clark — conflict, see below).",
    "AUTHORSHIP INFERENCE (not confirmed): the driver's two earliest appearances are BOTH 1983 Nick Strange games carrying TWO DIFFERENT musicians (Love, Cavanagh). So the routine travelled with BUBBLE BUS, not with Love. Best candidate for original author: NICK STRANGE. Richard Clark is secondary — he coded 4 of 7 and is the only Bubble Bus person credited for both code AND music. Neither is confirmed by any source.",
    "R. LOVE IS UNIDENTIFIED — an honest negative. Full real name could not be determined: not in CSDb (no scener profile), SIDId (no entry), VGMPF, Wikipedia or CRASH. MobyGames has a person record (3 games) but hard-403s. 'Love' IS a real surname, not a handle: HVSC Musicians.txt:981 lists a bare 'Love, R.' using its SURNAME-FIRST REAL-NAME convention — the same as its neighbours 'Lowe, Al - USA' and 'Lowe, Dave (Uncle Art) - UNITED KINGDOM (ENGLAND)'. Handles use the 'Handle (Real, Name) / Group - COUNTRY' form instead. No country is recorded, so NATIONALITY IS INFERRED (UK) FROM BUBBLE BUS ALONE, not confirmed.",
    "HE COMPOSED ONLY. Every source credits him as Musician, never coder — and his three games have THREE DIFFERENT CODERS (Nick Strange, Richard Clark, T. Owen). Same pattern as [[ken-lagace]] and [[jim-cuomo]].",
    "GREP FALSE POSITIVES, RECORDED SO THEY ARE NOT RE-OPENED: searching the card set for 'Bubble' hits [[andreas-bauernfeind]] (the 64'er game \"Block'n'Bubble\"), [[matthias-weber]] (\"Bubble It\", 1989 Magic Disk) and [[neil-baldwin]] (\"Mission Impossibubble\", 1989). ALL THREE ARE SUBSTRING COLLISIONS ON GAME TITLES. None mentions Bubble Bus. Do NOT cross-reference them.",
    "RULED OUT BY DISASSEMBLY, worth recording so nobody re-derives it: Killer Watt (Antony Crowther, Alligata 1984) and Music Dancer (MSB) also match the BARE SID-clear preamble but DIVERGE IMMEDIATELY — a convergent idiom, not shared code. This is why the fingerprint needs the init block too, not just the preamble. See [[antony-crowther]].",
    "TWO DRIVER VARIANTS, a real chronological evolution: Variant A (1983-84) play = STY/STX save -> INC ctr -> LDA ctr -> CMP #N -> BEQ -> JMP (a frame divider; N = 4/4/3/5 per tune). Variant B (1985, Aqua Racer + Wizard's Lair) = DEC ctr -> BMI -> LDA #$03 -> EOR #$01, a two-phase toggle. Shared init across both: clear $D400-$D423 -> LDA #$08 -> $D403/$D40A/$D411 (pulse hi) -> LDA #imm -> $D405/$D40C/$D413 (attack/decay; $2A/$4A/$4F/$09 per tune) -> LDA #$0F -> $D418 -> set the 16-bit ZP song pointer -> zero workspace -> RTS.",
    "A HOUSE DRIVER WITHOUT A HOUSE TEAM — the notable structural point. CRASH confirms Bubble Bus used FREELANCE programmers, not an in-house dev team. Yet a shared replay routine persisted across 1983-85 and four composers. UK publisher, founded by Mark Meakins, Tonbridge, Kent (CRASH says a 'converted granary in Tunbridge'). C64 output 1982 (Exterminator) - 1987, 22 C64 titles; best known for Starquake and Wizard's Lair (Stephen Crow).",
    "THE DRIVER WAS RETIRED AFTER 1985: later Bubble Bus titles do NOT use it — SkateRock (1986, Ben Daglish), Snap Dragon (1987, David Dunn), Starquake (Steve Crow), Boing (John Humphreys), Fifth Quadrant (Paul Midcalf), Tazz (E. Markham Lee), Star Trader. Bubble Bus switched to named freelance composers bringing their own routines. See [[ben-daglish]] and [[david-dunn]] — neither card currently mentions Bubble Bus.",
    "COLLISIONS RULED OUT: 'Dr. Love' (CSDb scener 31095, ex-American Organization of Krackers) is a cracker handle, unrelated. 'Lowe' (Al and Dave, both carded here) is a DIFFERENT SURNAME sitting adjacent in Musicians.txt — easy to conflate, don't. Christine Love — modern, irrelevant. Bubble Bus's 'Kick Off' (1983, table football, coder Nick Strange) is NOT Anco's 'Kick Off' (1989, Dino Dini). 'Bubble Bus' is not 'Bubble Bobble'.",
    "UNRESOLVED CREDIT CONFLICT: Wizard's Lair's composer — Lemon64 says Steve Crow, HVSC says Richard Clark. Not resolved. Aqua Racer's composer is unattributed entirely."
  ],
  "sources": [
    "HVSC Musicians.txt:981 (bare 'Love, R.' — surname-first real-name convention); local HVSC 85 files at MUSICIANS/L/Love_R/ (no STIL entries); fingerprint scan across all 61,157 HVSC files",
    "Lemon64 — Bumping Buggies: https://www.lemon64.com/game/bumping-buggies · Flying Feathers: https://www.lemon64.com/game/flying-feathers · Kick Off (Bubble Bus): https://www.lemon64.com/game/kick-off-bubble-bus · Hustler: https://www.lemon64.com/game/hustler · Cave Fighter: https://www.lemon64.com/game/cave-fighter · Wizard's Lair: https://www.lemon64.com/game/wizards-lair · Aqua Racer: https://www.lemon64.com/game/aqua-racer · company list: https://www.lemon64.com/games/list.php?list_company=bubble-bus",
    "Wikipedia — Bubble Bus Software: https://en.wikipedia.org/wiki/Bubble_Bus_Software",
    "CRASH issue 15, 'Move along the Bus' (freelance-programmers confirmation; Tonbridge/Tunbridge granary): https://www.crashonline.org.uk/15/bubblebus.htm",
    "CSDb SID 17914: https://csdb.dk/sid/?id=17914 · 'R. Love' search (no scener): https://csdb.dk/search/?seinsel=all&search=R.+Love · Dr. Love collision: https://csdb.dk/scener/?id=31095",
    "Local: data/composers/r-love.json; deepsid_dl/sidid.nfo (no entry — confirmed absent). MobyGames Bubble Bus 403s on fetch: https://www.mobygames.com/company/503/bubble-bus-software/"
  ]
}
```

## Overview

`Bubble_Bus/Love_R` is the **in-house replay routine of Bubble Bus Software**, a
UK publisher based in Tonbridge, Kent (founded by Mark Meakins). The tag carries
R. Love's name because DeepSID namespaces by composer folder — but the driver
belongs to the *publisher*, not to him.

The structural finding worth the card: **Bubble Bus had a house driver without a
house team.** CRASH confirms they worked entirely through freelance programmers,
yet the same replay routine shows up across seven games, three coders and four
composers between 1983 and 1985 — then vanishes when the company switched to
name freelance composers who brought their own code.

**R. Love himself is unidentified.** That is the honest result: no full name, no
nationality on record, no scene presence.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The tag names the composer, not the coder** — and Love isn't even the
  constant (he's absent from four of the seven files).
- **All three "Bubble" grep hits on existing cards are false positives** —
  substring collisions on game titles (*Block'n'Bubble*, *Bubble It*, *Mission
  Impossibubble*). Recorded so nobody re-investigates.
- **The bare SID-clear preamble is not a sufficient fingerprint** — Killer Watt
  and Music Dancer match it and are unrelated. The init block is what makes the
  signature exact.

## Disassembly notes

Real disassembly was done on the HVSC files. The shared init sequence, the ZP
song pointer (`$45/$46` or `$4B/$4C`, read via `LDA (zp),Y`), and both play
variants above are all read from code, not inferred.

The **variant A → variant B** shift in 1985 (frame-divider counter → two-phase
`EOR #$01` toggle) is a genuine evolution of the same routine, not two drivers.

## Verification

`status: in-progress`. The house-driver conclusion is **strongly evidenced**: a
7/61,157 fingerprint with zero false positives, and the composer/coder tables
that follow from it. Entry points, ZP and init are measured.

**Not verified**: nothing reconstructed or re-run. Data format, instruments,
tables and effect encoding are all `TODO`.

**Not determined**: R. Love's real first name, nationality, birth/death, or any
credits beyond his three games; who actually wrote the driver (Strange only
*inferred*); who "T. Owen" is; Wizard's Lair's true composer (Lemon64/HVSC
conflict); Aqua Racer's composer; Bubble Bus's exact founding/closing years.

## Sources

See the `sources` array above.
