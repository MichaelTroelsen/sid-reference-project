# Ken Lagace (MicroProse in-house driver)

```json
{
  "id": "ken-lagace",
  "name": "Ken Lagace (MicroProse in-house driver)",
  "aliases": ["Ken_Lagace"],
  "authors": ["UNKNOWN — the driver author is not determined. Ken Lagace is the COMPOSER, not the coder (see quirks)."],
  "released": "1987-1988",
  "status": "in-progress",
  "platform": "Native C64. An unnamed MicroProse in-house sound library — NOT a tool Lagace built. The tag is an HVSC composer label, not a driver name.",
  "csdb_release": null,

  "memory": {
    "load_address": "Airborne_Ranger $0C40 (3272 b, to $1907); Project_Stealth_Fighter $0800 (1632 b, to $0E5F); Red_Storm_Rising $63F5 (3225 b, to $708D).",
    "zero_page": "MEASURED, not guessed. AR and PSF share an identical allocation: $48/$49 structure pointer, plus $4A, $4C/$4D, $4E. RSR moved the base: $16/$17 pointer, plus $18, $1A, $1B.",
    "layout": "PSF exposes a 5-entry jump table at $0800: JMP $080F / JMP $0837 (play) / JMP $0B41 (init) / JMP $0B7D / JMP $08CA — a reusable-library entry vector, not a one-off tune. RSR has a 2-byte subtune table at $63F5 = $0A,$08, indexed by the init A-register ($63F7: PHA / JSR $6498 / PLA / TAY / LDX $63F5,Y / CPX #$80 / BCC...), matching songs=2."
  },
  "entry": {
    "init": "Airborne_Ranger $0C40; Project_Stealth_Fighter $0806; Red_Storm_Rising $63F7 (A-register selects subtune).",
    "play": "Airborne_Ranger $0C5D; Project_Stealth_Fighter $0803; Red_Storm_Rising $64EF."
  },
  "speed": "TODO — not determined (no disassembly).",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE TAG IS A COMPOSER LABEL, NOT A TOOL: 'Ken_Lagace' names an unnamed MicroProse IN-HOUSE C64 sound driver (1987-88). Lagace composed with it; nothing credits him with any driver code. This card exists to record that distinction — the same pattern [[silas-warner]] documents (a US commercial-studio figure whose composer-named tag reflects music only, not code).",
    "THE BINARY EVIDENCE THAT IT IS SHARED INFRASTRUCTURE, not a personal routine: Airborne Ranger (coded by Scott Spanburg) and Project Stealth Fighter (coded by Dan Chang, Edward N. Hill Jr., Gregg A. Tavares, Jim Synoski) have COMPLETELY DISJOINT programming teams, yet share a 235-instruction identical opcode run (AR $0D2D / PSF $08FC), 41.8% of all 10-opcode windows, and a 67-byte byte-identical routine at AR $0F3C / PSF $0AFF: PHA / AND #$0F / STA $4E / PLA / AND #$F0 / SEC / SBC #$10 / PHP / BNE +6 / LDA $4E / ASL A x4 / ORA $4E / STA ($48),Y / INY / PLP / RTS — nibble-packing through the ($48),Y per-voice structure pointer. A driver crossing two unrelated code teams is shared infrastructure. The driver tracks the ENGINEERING org, not the composer.",
    "RED STORM RISING IS A REWORKED BUILD of the same lineage, not the same binary: ZP base moved $48 -> $16, but it still shares real routines with BOTH AR and PSF at identical RSR addresses — 43 instructions (RSR $6609), 27 ($6782), 21 ($65D7), 20 ($6922). 4-6% window overlap against a MEASURED 0% noise floor (see the control below). Its coding team is different again (Richard Orban, Sid Meier, Silas S. Warner).",
    "THE CONTROL IS WHAT MAKES THE ABOVE MEANINGFUL, and it produced a real finding: GAMES/M-R/Pirates.sid (1987 MicroProse) and GAMES/G-L/Gunship.sid (1986 MicroProse) share 0 opcode windows and 0-1 byte windows with all three Lagace files — while sharing 33 byte-windows WITH EACH OTHER. So MicroProse ran AT LEAST TWO DISTINCT C64 driver lineages: a Sid Meier / Pirates! / Gunship one, and this Lagace-tagged one. This is NOT a company-wide standard.",
    "SCOTT PATTERSON IS RULED OUT AS THE DRIVER AUTHOR — and this matters because the FALSE version is what a naive web search returns. A search summary asserts 'Ken Lagace used a sound driver by Scott Patterson for his work on C64 games'. That is a search-engine conflation. VGMPF's actual wikitext links [[Scott Patterson (NES Driver)|sound driver]] — explicitly the NES driver. Patterson JOINED MICROPROSE IN JANUARY 1990, two to three years AFTER all three files (1987/87/88), and his NES driver was used in exactly two games (F-15 Strike Eagle, F-117A Stealth Fighter). Do not repeat the C64 claim.",
    "WHO ACTUALLY WROTE IT: NOT DETERMINED. No source names a MicroProse C64 sound programmer for 1986-88. Checked game credits and Gregg Tavares' documented MicroProse work (he is on record for the C64 WINDOWING engine, not audio). No author signature exists: there are no ASCII/PETSCII strings in any of the three driver bodies. Untried leads for a future session: disassembling the game disks on archive.org for an in-code credit; full-text searching Compute!'s Gazette / RUN / Ahoy!; contacting Spanburg/Tavares/Synoski.",
    "LAGACE HIMSELF IS UNLIKELY BUT NOT IMPOSSIBLE — stated carefully rather than flattened: VGMPF says he did not program the driver he used (on NES), and he is a classically trained performer, and the disjoint-teams evidence points to shared infrastructure. BUT VGMPF's bio also says he 'wound up becoming a computer programmer... for 20 years'. So the honest position is: no source credits him with any driver code, and the binary evidence points away from a personal routine — not that he was incapable.",
    "NTSC IS A GENUINE US-AUTHORSHIP FINGERPRINT here: all three files are PSID v2 with flags=0x8 = NTSC clock, against an overwhelmingly PAL European scene. Consistent with confirmed US authorship.",
    "CORRECTION — THE ACCENT HYPOTHESIS IS UNFOUNDED: no source anywhere spells it 'Lagace' with an accent. HVSC, VGMPF, CSDb, MobyGames, DeepSID and Lemon64 all use unaccented 'Lagace'. The project's usual ISO-8859-1 trap does not apply — there is no accented character to corrupt. Do NOT add 'Lagace' + acute as an alias.",
    "ANCESTRY IS UNTESTABLE — DO NOT ASSERT IT. The surname is French-Canadian in origin and his life is centred on Connecticut (heavily Franco-American; the Coast Guard Band is New London CT), so 'Franco-American/Quebecois' is CONSISTENT — but no source states his ethnicity or ancestry. Nationality is American (confirmed four ways: HVSC Musicians.txt:934 'Lagace, Ken - USA'; CSDb scener 16930 'United States'; VGMPF 'American'; DeepSID country USA).",
    "HIS CSDb CREDITS ARE ALL RIPS — do not read them as scene work. CSDb scener 16930 has 7 credits but no group memberships. 'The Final Apocalypse' (1988, Abyss) credits Music to Chris Huelsbeck, David Whittaker, Gilles Soulet AND Ken Lagace — four unconnected commercial game composers, listed under 'SIDs used in this release', with PSF named as the source SID. 'Airborne Ranger' (CSDb 223388) is explicitly Ripping: PDB, 1991 — a rip of a 1987 game tune.",
    "CSDb URL-SCHEME TRAP, worth knowing for the project's CSDb client generally: csdb.dk/scener/?id=15096 (the XML API's inner Scener.ID) resolves to 'The Disk Doc', an unrelated Finnish cracker. The correct page is csdb.dk/scener/?id=16930 (the HANDLE id). Not a collision — a URL-scheme mismatch.",
    "THE HARTFORD SYMPHONY CLARINETIST IS THE SAME PERSON — INFERRED, high confidence, NOT stated by any source. Matches VGMPF's bio on three independent points: clarinet/orchestra; university teaching (University of Hartford archives list a 'Kenneth Lagace' in a Clarinet Consort); and 'Ken Lagace now is a photographer' matching an active 'Ken Lagace - Art Photos' Flickr (441 photos). Geographically coherent (Coast Guard Band = New London CT). Record as inference.",
    "A CONFABULATED QUOTE TO NOT REPEAT: a search summary produced 'a silver-haired gent who gave up teaching and performing professional classical music...'. Chased to both candidate sources (FRGCB, Digital Antiquarian) — NEITHER contains it, and Digital Antiquarian does not mention Lagace at all. Search-engine confabulation.",
    "UNRESOLVED DISCREPANCY — Pirates! (C64) authorship. VGMPF and Vandal credit Lagace with Pirates! C64 (1987); HVSC credits GAMES/M-R/Pirates.sid to 'Sid Meier <?>' (the <?> marks uncertainty) and did NOT file it under Lagace_Ken. The binary comparison SUPPORTS HVSC: Pirates.sid shares nothing with the Lagace driver lineage. Separately, VGMPF's own table lists Gunship as Amiga/DOS only (not C64), contradicting Vandal's claim that he scored Gunship for C64. Leave unresolved; do not assert Pirates!/Gunship C64 for Lagace.",
    "STIL: Red_Storm_Rising.sid (#2) is a COVER — 'Popeye Theme Song' by Sammy Lerner (from the TV series)."
  ],
  "sources": [
    "HVSC Musicians.txt:934 ('Lagace, Ken - USA'); STIL.txt section /MUSICIANS/L/Lagace_Ken; local HVSC 85 binaries at MUSICIANS/L/Lagace_Ken/",
    "VGMPF — Ken Lagace (biography; MicroProse first in-house composer; 'did not program the driver'): https://www.vgmpf.com/Wiki/index.php/Ken_Lagace",
    "VGMPF — Scott Patterson (the NES-driver disambiguation; Jan 1990 start date): https://www.vgmpf.com/Wiki/index.php?title=Scott_Patterson",
    "CSDb scener 16930 (correct handle-id page): https://csdb.dk/scener/?id=16930",
    "CSDb release 223388 (Airborne Ranger rip, 'Ripping: PDB', 1991): https://csdb.dk/release/?id=223388",
    "CSDb release 195897: https://csdb.dk/release/?id=195897",
    "Lemon64 credits (coder teams): https://www.lemon64.com/game/airborne-ranger · https://www.lemon64.com/game/project-stealth-fighter · https://www.lemon64.com/game/red-storm-rising",
    "Vandal Game Music, 'El pasado musical de MicroProse': https://vandal.elespanol.com/vandalgamemusic/el-pasado-musical-de-microprose",
    "FRGCB — Pirates!: http://frgcb.blogspot.com/2015/06/pirates-microprose-1987.html",
    "University of Hartford archives (Kenneth Lagace, Clarinet Consort): https://archives.hartford.edu/repositories/2/archival_objects/7766",
    "Local: data/composers/ken-lagace.json, data/csdb/ken-lagace.json. CONFIRMED ABSENT: no SIDId entry (data/sidid.json has no Lagace or Patterson match)."
  ]
}
```

## Overview

`Ken_Lagace` is **not a tool**. It is HVSC's composer label for an **unnamed
MicroProse in-house C64 sound driver** used across three 1987-88 titles —
Airborne Ranger, Project Stealth Fighter, and Red Storm Rising. **Ken Lagace
composed the music; no source credits him with any of the code.**

The person is well documented: **Kenneth "Ken" Lagace**, American, MicroProse's
**first in-house composer** (joined 1986, ~10 years to ~1996). Music performance
degree 1960 → US Coast Guard Band (which he joined because of the Cuban Missile
Crisis) → university music teacher → 23 years in an orchestra → 20 years as a
computer programmer → now a photographer. Born ~1938, inferred from the 1960
degree; **no birth date is published**.

The interesting finding here is structural: the driver **tracks MicroProse's
engineering org, not its composer** — and MicroProse ran at least two separate
C64 driver lineages at the same time.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **This is a house library, not a personal routine** — proven by two games with
  *completely disjoint* programming teams sharing a 235-instruction driver core.
- **A control comparison makes that claim meaningful**: Pirates! and Gunship
  (both MicroProse) share ~nothing with these three files while sharing plenty
  with *each other*. Two lineages, not one house standard.
- **Scott Patterson is ruled out** — the widely-searchable "Patterson wrote
  Lagace's C64 driver" claim is a conflation of VGMPF's *NES* driver link, and
  he didn't join MicroProse until 1990 anyway.
- **Don't accent the surname**, and **don't assert his ancestry**.

## Disassembly notes

No full disassembly. The memory map, ZP allocation, jump tables and subtune
table above are **measured from the HVSC binaries**; the routine-sharing figures
come from opcode/byte-window comparison against a measured 0% noise floor.

PSF's 5-entry jump table at `$0800` is the clearest single tell that this is a
reusable library rather than per-game tune code.

## Verification

`status: in-progress`. The **person** is confirmed and richly sourced. The
**driver's** memory map and entry points are measured. The **driver author is
unknown** and left as an honest `TODO` — one candidate (Patterson) is positively
ruled out rather than merely unverified.

Not populated, because no disassembly was performed: data format, effect
encoding, speed.

Also undetermined: Lagace's birth date; whether he scored Pirates!/Gunship on
C64 (evidence conflicts — see quirks); his ancestry; IMDb `nm0481093` and
Discogs artist 3327758 (both returned 403, likely the same person,
**unconfirmed**).

## Sources

See the `sources` array above.
