# Bubble Bus house driver (R. Love label)

```json
{
  "id": "bubble-bus-love-r",
  "name": "Bubble Bus house driver (R. Love label)",
  "aliases": ["Bubble_Bus/Love_R"],
  "authors": ["UNKNOWN — Nick Strange is the best candidate (INFERRED, not confirmed); Richard Clark secondary. R. Love composed only."],
  "released": "1983-1985",
  "status": "verified",
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

`status: verified`. All three of R. Love's own HVSC files
(`MUSICIANS/L/Love_R/`) were independently disassembled with
`SIDdecompiler.exe -r` (relocated to each file's own PSID load address,
which matches the `-v2` map's own "Start:" address in every case — no
gotcha-40 offset needed), reassembled with `64tass`, and byte-/trace-diffed
against the pristine originals:

| File | load/init/play | byte-diff (own file range) | native trace | relocation-control trace |
|---|---|---|---|---|
| Bumping_Buggies.sid | $19C8/$19C8/$1A0D | 1885/1885 = **100.0000%** (3 trailing zero-padding bytes past the traced end, at $2125-$2127, are unreferenced — see gotcha 9) | 41/41 writes, **cycle-exact** | rebuilt at $3050 (68/1885 bytes differ at matching offsets): 41/41 writes, **0 divergences** |
| Flying_Feathers.sid | $2E96/$2E96/$2ED0 | 1386/1386 = **100.0000%** | 30/30 writes, **cycle-exact** | rebuilt at $5237 (56/2896 bytes differ): 30/30 writes, **0 divergences** |
| Kick_Off.sid | $1200/$1200(JMP $120F)/$1203(JMP $1245) | 1307/1307 = **100.0000%** (full file length, no trailing gap) | 21/21 writes, **cycle-exact** | rebuilt at $4237 (82/1307 bytes differ): 21/21 writes, **0 divergences** |

The native builds are `-r`-produced and therefore byte-identical to the
originals — a tautological trace by construction (lesson 63/65/69/70). To
make the trace evidence real, each file was **also** reassembled at a
second, non-page-aligned base (a genuinely different binary — 56-82 bytes
differ at matching offsets per file, not a cosmetic rebuild) and traced
against the *original* file's own register-write stream with cycle column
stripped (lessons 69/70/72). All three passed with **zero register-write
divergences**, which is real evidence the disassembly's instruction
boundaries, operand relocation and self-modified-code handling are
structurally correct, not just that the bytes happen to match.

Kick_Off's `init jmp l120f` / `play jmp l1245` and 16-bit ZP song pointer
`z4b`/`z4c` = $4B/$4C were confirmed by direct inspection of the generated
`.asm`, matching the card's `memory.layout`/`zero_page` claims exactly.

**Scope of this result**: only the three **Love_R-tagged** files (Variant A
of the driver, per the card's own quirks) were tested — Hustler, Cave
Fighter, Aqua Racer and Wizard's Lair (the other four fingerprint hits,
under different composer tags, including the 1985 Variant B files) were
**not** disassembled/traced in this pass; a byte/trace-exact result on
Love_R's files does not by itself confirm Variant B or the other three
composers' code. This is worth noting for whichever card owns those files
next.

**Still not reconstructed**: data format (order list, pattern encoding,
instrument/wavetable/pulsetable/filtertable layout) and the effect encoding
are all still `TODO` — this pass verified the *engine byte-for-byte*, not
its data tables' semantics; a follow-up pass reading the disassembly's
table-access code (`LDA (zp),Y` loops) could fill those in without any
further tracing.

**Not determined** (unchanged, not in scope of this pass): R. Love's real
first name, nationality, birth/death, or any credits beyond his three games;
who actually wrote the driver (Strange only *inferred*); who "T. Owen" is;
Wizard's Lair's true composer (Lemon64/HVSC conflict); Aqua Racer's
composer; Bubble Bus's exact founding/closing years.

## Sources

See the `sources` array above.
