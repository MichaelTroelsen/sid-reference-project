# Daniele Liverani / Genius (player routine)

```json
{
  "id": "daniele-liverani",
  "name": "Daniele Liverani / Genius (player routine)",
  "aliases": ["Dan_Liverani"],
  "authors": ["Daniele Liverani"],
  "released": "2014 (Genius: Into the Toy Warehouse, ported to C64)",
  "status": "verified",
  "platform": "CONFIRMED to be the SAME Daniele Liverani known internationally as an Italian progressive-rock/metal multi-instrumentalist (Twinspirits, Cosmics, Khymera) and mastermind behind the 'Genius Rock Opera' trilogy — a genuinely striking identity confirmation, since the C64 tune titled 'Genius' is a direct self-reference to that same rock-opera project, not a coincidence. He personally coded and ported an Apple II platform game, 'Genius: Into the Toy Warehouse' (2014, itself inspired by the rock opera), to Commodore 64, Plus/4, and Atari 8-bit himself. Player-ID-fingerprinted across 4 files, all his own (Genius, Genius 2, Genius Enhanced, Genius 3 — versions/variants of the same game's music).",
  "csdb_release": null,

  "memory": { "load_address": "Varies per file: Genius/Genius_2/Genius_Enhanced load $c000, init $ca20/$cc20/$cc20, play $c4fc/$c4f6/$c4f6; Genius_3 loads $bf00, init $bf20, play $c4f6. In all 4 files the PSID header's own loadAddr field is 0 (real load address is the payload's own first 2 LE bytes).", "zero_page": "z07-z0a, z0d/z0e (2-byte indirect pointer used for indexed pattern-data copies, base $07).", "layout": "The driver is NOT cleanly relocatable: SIDdecompiler's -v2 memory-touch map reports a Start: address different from the PSID load address on every file, for two distinct reasons confirmed by disassembly. (1) Genius/Genius_2/Genius_Enhanced: Start is exactly 2 bytes ABOVE load ($c002 vs $c000) — the file's own first 2 bytes are a literal $00,$00 'unreferenced data' marker, the same 2-byte separator convention used repeatedly throughout the file between data blocks; the true code/data starts at load+2 and reassembles clean once relocated onto that Start address (net-zero shift). (2) Genius_3: Start is $a000, 7936 bytes BELOW load ($bf00) — a genuine fixed low-RAM workspace region the driver touches at runtime, disjoint from the loaded payload; relocating onto Start ($a000, net-zero shift) lands init/play exactly on the PSID header's own $bf20/$c4f6. Separately, the play routine hardcodes a workspace pointer as two literal immediate loads (lda #$00 / sta z0d; lda #$ca / sta z0e, i.e. a raw $ca00 constant, not a relocatable <label/>label pair) — this makes the driver non-relocatable to any other base (confirmed via a relocation-invariance control on Genius.sid, see Verification), but is irrelevant to native-address playback." },
  "entry": { "init": "Native (post-relocation-fix) addresses, PSID-header-exact on all 4 files: Genius $ca20, Genius_2/Genius_Enhanced $cc20, Genius_3 $bf20.", "play": "Native addresses, PSID-header-exact: Genius $c4fc, Genius_2/Genius_3/Genius_Enhanced $c4f6 (called in IRQ)." },
  "speed": "TODO — not derived from disassembly this pass; IRQ-driven per-frame play call confirmed.",
  "data_format": { "order_list": "A per-subtune dispatch table at lc3a6 (Genius) indexed by subtune number x2 (16-bit pointers) selects each subtune's data block.", "patterns": "TODO — not decoded in detail.", "instruments": "TODO — not decoded in detail.", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a sparse 23-write/50-frame sample)" },
  "effects": { "encoding": "TODO — not decoded in detail; internal data format beyond the entry-point/relocation facts above remains unresearched.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE, a genuinely striking find: this is the internationally-known Italian progressive-rock/metal musician Daniele Liverani, described as 'a cornerstone in Italian metal' — guitarist/keyboardist/mastermind behind Twinspirits (formed 2002 'just after wrapping up... Genius: A Rock Opera'), Cosmics, and Khymera. The 'Genius Rock Opera' is a trilogy he wrote and performed (guitar, bass, keyboards), its third episode released 16 February 2007.",
    "THE C64 'GENIUS' TITLE IS A DIRECT SELF-REFERENCE, NOT A COINCIDENCE: in 2014 Liverani released an Apple II platform game, 'GENIUS — Into the Toy Warehouse,' explicitly stated to be 'inspired by the Genius Rock Opera he created in the early 2000s' — and he PERSONALLY PORTED IT to Commodore 64, Commodore Plus/4, and Atari 8-bit himself. This makes him BOTH composer and coder for these files — a rare case in this KB of a musician from an entirely different professional field (progressive rock) returning to childhood-hobby 6502 programming decades later to build and port his own game.",
    "A 2017 Italian interview (Ready64.org, 'Intervista a Daniele Liverani' — page itself 403'd on direct fetch, findings from indexed content) states he was '47 years old and divides his time between computer science and music, both professionally and as a hobby,' works professionally as a programmer for a company doing vision systems/numerical controls, began BASIC programming in the early 1980s, and later deepened his 6502 assembly knowledge — directly corroborating the self-coded-port claim from an independent angle (his day-job programming career, not just the music side).",
    "THE C64 RELEASE/DISTRIBUTION WAS HANDLED BY A SEPARATE ITALIAN GROUP, Hokuto Force (members Flavioweb, The Overkiller) — CSDb's release for 'Genius 2 +7D' (2017) explicitly credits the music as ''Genius 2' SID by Liverani_Daniele from the High Voltage SID Collection,' confirming Hokuto Force trained/repackaged/distributed his composition rather than composing it themselves. No CSDb scener profile exists directly under 'Liverani' — a candidate profile 'Dan' (id=14281) was checked and explicitly RULED OUT as a different, unrelated Canadian scener (b. 1982, founder of Eagle Soft Incorporated).",
    "NO DIRECT QUOTE WAS FOUND connecting his early-80s BASIC programming specifically to owning/using a Commodore 64 as a teenager — the Ready64 interview confirms early BASIC programming generally but the retrieved excerpt (not the full article, which 403'd) doesn't include an explicit C64-ownership statement. Flagged as a minor, plausible-but-unconfirmed gap rather than assumed.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — his career (Italian progressive-rock/metal, vision-systems programming) is entirely outside the games-industry/demoscene ecosystem most other composers in this KB come from (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Liverani, Daniele - ITALY'): https://hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "ProgArchives — Daniele Liverani artist profile: https://www.progarchives.com/artist.asp?id=4797",
    "Wikipedia — Twinspirits (formation context, Genius Rock Opera reference): https://en.wikipedia.org/wiki/Twinspirits",
    "danieleliverani.com — Genius Rock Opera page: https://danieleliverani.com/genius.htm",
    "vitno.org — 'Apple II/C64 Genius ported to Commodore Plus/4' (2017): https://vitno.org/2017/01/14/apple-iic64-genius-ported-to-commodore-plus4/",
    "callapple.org — Genius 2: Into the Toy Caves officially released: https://callapple.org/vintage-apple-computers/apple-ii/genius-2-into-the-toy-caves-officially-released/",
    "Ready64.org — 'Intervista a Daniele Liverani' (2017, fetch 403'd, indexed content only): https://www.ready64.org/articoli/leggi/idart/97/intervista-a-daniele-liverani",
    "CSDb release id=160776 ('Genius 2 +7D' by Hokuto Force, 2017, confirms HVSC composer identity): https://csdb.dk/release/?id=160776",
    "CSDb scener id=14281 ('Dan', explicitly RULED OUT as a different, unrelated Canadian scener): https://csdb.dk/scener/?id=14281",
    "Local dataset: 4 files tagged Dan_Liverani, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dan_Liverani` tag is confirmed to be Italian progressive-rock/metal
musician Daniele Liverani (Twinspirits, Genius Rock Opera) — the C64
'Genius' tune directly references his own rock-opera trilogy. He
personally coded and ported the 2014 Apple II game it's drawn from to
C64 himself, decades after his early-80s BASIC programming days. Player-
ID-fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **high-confidence
identity confirmation with a self-referential title**: a rare case in
this KB of a musician whose entirely separate, internationally-known
professional music career (progressive rock, not games) directly explains
the C64 tune's own name, corroborated by his day-job programming career.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly produced this pass via `SIDdecompiler.exe -r` (see
Verification) — see the `memory.layout` field above for the two distinct
relocation-alignment defects found and fixed (a 2-byte leading marker on
3 of 4 files, a disjoint low-RAM workspace block on the 4th). Full
pattern/instrument/effect data-format decoding was not attempted this
pass — flagged `TODO` in `data_format`/`effects`.

## Verification

**Byte-exact + trace-exact on all 4 tagged files (2026-08-01) —
`status: verified`.** All 4 real HVSC `Dan_Liverani`-tagged `.sid` files
were disassembled with `SIDdecompiler.exe -r -z -d -c -v2`, relocated
onto the `-v2` map's own reported `Start:` address (not the PSID header's
load address — see `memory.layout` for why they differ per-file),
reassembled with 64tass, and byte-diffed + trace-diffed (50 frames,
`sidm2-sid-trace.exe`, both original and reassembly re-wrapped as proper
`.prg` files per the project's own `psid_header` convention) against the
untouched original:

| File | Byte-diff | Trace-diff (writes) |
|---|---|---|
| Genius.sid | 100.0000% (2599/2599) | 23/23 exact |
| Genius_2.sid | 100.0000% (3111/3111) | 12/12 exact |
| Genius_3.sid | 100.0000% (2191/2191, over the true payload window) | 9/9 exact |
| Genius_Enhanced.sid | 100.0000% (3111/3111) | 18/18 exact |

Every file's INIT/PLAY addresses in the reassembly land exactly on the
PSID header's own declared values once correctly relocated (see `entry`).

**Relocation-invariance control (non-tautological check, run on
Genius.sid only):** rebuilding the same disassembly at a different base
(delta +$1237, non-page-aligned) produced a genuinely different binary
(288/2599 bytes differ) but the resulting trace diverged sharply (7 vs 23
writes matched). Root-caused, not left as a mystery: the play routine
sets up an indirect-indexed workspace pointer via two literal immediate
loads — `lda #$00 / sta z0d` then `lda #$ca / sta z0e` — i.e. a raw
`$ca00` constant baked into the code rather than a relocatable
`<label`/`>label` pair (the label `lca00` is a zeroed 32-byte workspace
block sitting inside the file's own payload, right before `init`). This
is a real, structural non-relocatability in the original hand-written
driver (Liverani's own personal, non-professional single-use code, per
`quirks`) — not a SIDdecompiler defect — and does not affect native-address
playback, which is confirmed exact by the trace-diff table above. Not
chased further (no live-debugger escalation needed; the cause is fully
identified from static disassembly).

## Sources

See the `sources` array — HVSC Musicians.txt, ProgArchives, Wikipedia,
danieleliverani.com, vitno.org, callapple.org, Ready64.org, and CSDb (2
entries).
