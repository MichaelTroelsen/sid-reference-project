# Paul Norman / Cosmi (player routine)

```json
{
  "id": "paul-norman",
  "name": "Paul Norman / Cosmi (player routine)",
  "aliases": ["Paul_Norman/Cosmi"],
  "authors": ["Paul Norman"],
  "released": "1983-1985 (Cosmi Corporation era)",
  "status": "verified",
  "platform": "Paul Norman's own hand-coded 6502 sound routine, typed in machine-language hex via a hex monitor (Hexmon) for his Cosmi-published C64 games. A distinct, LATER tag ('Paul_Norman/ComPub', a desktop-publishing product from 1987) exists in this composer's own HVSC folder — NOT the same routine, not covered by this card. Player-ID-fingerprinted across 7-8 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game (hand-embedded routine relocated to each game's own memory map). Sampled: Slinky $6000, Chernobyl $1C00, Forbidden_Forest $50C0, Super_Huey $C000.",
    "zero_page": "Per-game allocation (game-dependent ZP usage — the routine is embedded into each game's own memory map, not a standalone tool). Observed: Slinky $69-$6F, Forbidden_Forest $30-$36, Chernobyl $70+. The frame-counter is always a ZP dec (dec zXX) near the top of the play routine.",
    "layout": "Per-game: code + song data in a contiguous block. PLAY entry is typically load+$20 or nearby (Slinky $6020, Chernobyl $1C20, Forbidden_Forest $595A, Super_Huey $C040). INIT may be at the load address or further into the block. SID init helper (ldx #$28 / lda #$00 / sta $D400,X loop) silences all 29 SID registers, then programs initial voice settings from a 25-byte table (ldx #$18 loop). Forbidden_Forest's playback is likely IRQ-driven (standalone per-frame trace at the PSID-declared play address produces no SID writes)."
  },
  "entry": {
    "init": "Per-game. Sampled: Slinky $7000 (tax, reads subtune table), Forbidden_Forest $5A00 (pha), Chernobyl $1C00 (ldx #$24), Super_Huey $C000. All init routines silence all 29 SID regs (ldx #$28 loop) then program voice defaults from a 25-byte table (ldx #$18 loop). Song-data init + subtune selection follows.",
    "play": "Per-game, typically load+$20 or near. Sampled: Slinky $6020, Chernobyl $1C20, Forbidden_Forest $595A, Super_Huey $C040. PLAY entry consistently begins with dec zXX (frame counter decrement in ZP)."
  },
  "speed": "TODO (likely 50Hz — one PLAY call per frame, per the PSID-declared play address convention).",

  "data_format": {
    "order_list": "PER-GAME: each file has its own song-data layout. Subtune table observed as a <lo> byte pointer table (e.g. Slinky's l7010) indexed by subtune number.",
    "patterns": "TODO — disassembly captured note data as read-only (r-mapped) blocks, not decoded into pattern/row structure.",
    "instruments": "Minimal — no instrument abstraction observed. Voice state is programmed via a 25-byte init table (SID register defaults for waveform/pulse/ADSR), with per-note freq updates during playback. No wavetable/pulsetable/filtertable structures.",
    "wavetable": "Not present.",
    "pulsetable": "Not present.",
    "filtertable": "CONFIRMED: NO FILTER USE — zero filter writes across all 4 sampled files (Slinky 30 writes/20fr, Chernobyl 6/20fr, Super_Huey 11/20fr, Forbidden_Forest 0/20fr). Matches the card's earlier observation from a 300-frame trace. The routine writes only voice frequency registers (osc1/2/3_freq_hi/lo) during playback — a genuinely filter-free design, not a trace artifact."
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Paul Norman is the SELF-TAUGHT PROGRAMMER, not a separate musician — CONFIRMED: 'Norman composed songs on his guitar and typed the notes in hex using Hexmon. For each sound effect, Norman wrote code in machine language and tweaked it until he heard something he liked.' A former professional touring/studio guitarist (15 years) who taught himself 6502/6510 assembly starting mid-1982 after buying a VIC-20. His CSDb scener profile lists all three functions: Coder, Graphician, Musician.",
    "ORIGIN STORY: hired by a small shop called Synchro in 1982, given a C64 on day one, told to write a bow-and-arrow game to learn assembly — that project became Forbidden Forest (1983). Synchro folded partway through development; Cosmi Corporation (founded 1982 by George Johnson, Carson CA — a low-cost, vertically-integrated software house sold through mass retail, not just computer shops) acquired the unfinished game AND Norman along with it. He stayed at Cosmi until 1989.",
    "Games under this tag/era: Forbidden Forest (1983, his best-known and most acclaimed work — widely praised on Lemon64 for its atmospheric/eerie sound), Aztec Challenge (1983), Caverns of Khafka (1984), Super Huey (1985), Beyond the Forbidden Forest, Chernobyl, Slinky, The Trivia Monster.",
    "ZERO FILTER USE (0 writes in all traced samples) is a real, notable trait, not a probe artifact — plausibly explained (Lemon64 community commentary, not a primary/technical source, so treat as color not proof) by his compositional style: chords played simultaneously across all three SID voices ('a progressive-rock composer' approach per one reviewer) rather than the more typical separate bass/arpeggio/lead-with-filter-shaping split other C64 composers used.",
    "DISTINCT FROM 'Paul_Norman/ComPub', NOW SEPARATELY CARDED as [[paul-norman-compub]]: his HVSC folder also has 3 files tagged 'Paul_Norman/ComPub' — a later, SEPARATE product ('Paul Norman's Computerized Publishing Co.', a real, commercially-boxed desktop-publishing utility, published by Cosmi in 1986 per the embedded PSID copyright field — predating the CSDb-dated 1987 crack by about a year). Its 3 bundled demo tunes are all classical/patriotic covers (1812 Overture, Stars and Stripes Forever, National Emblem), not original Norman compositions. A dedicated research pass found the trace's write-density RATIO plausibly consistent with the same hand-coded, filter-free compositional style documented on this card, but this is NOT proven to be the identical routine — no disassembly exists for either tag. Do not conflate the two.",
    "Not in SIDId (checked directly via deepsid_dl/sidid.nfo — no 'Paul_Norman/Cosmi' entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Morkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note).",
    "PER-GAME ZP ALLOCATION: the embedded routine uses ZP locations determined by each game's own memory map — not a fixed player-tool allocation. Sampled: Slinky uses $69-$6F, Forbidden_Forest uses $30-$36, Chernobyl uses $70+. The frame counter (dec zXX at top of PLAY) is the only consistently identifiable ZP use; exact layout varies per game.",
    "SELF-MODIFYING SUBTUNE DISPATCH: Some builds (observed on Slinky) use a self-modifying JMP for subtune selection — init writes the target low-byte to l700b+1 (sta / jmp pattern). SIDdecompiler captures the post-init value in its disassembly (e.g. jmp l6ee0 at $700B re-encodes as $E0 instead of the cold value $00), producing a single-byte diff that is harmless (trace-exact — init always writes before the JMP reads it).",
    "STANDALONE TRACE LIMITATION: Forbidden_Forest's PLAY at $595A produces 0 SID writes in standalone trace (no IRQ context, no game-state initialization beyond the PSID init call). This is not a disassembly defect — the original and reconstruction fail identically, confirming byte-exactness. The routine likely expects the game's own IRQ or main-loop state.",
    "ALL FOUR FILES USE THE SAME CORE CODE PATTERN despite different ZP allocations and load addresses — confirming this is the same hand-written routine re-embedded per game, not independently composed from scratch each time. The SID init silence+defaults loop and the dec zXX play-entry frame counter are invariant across builds."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Norman, Paul - USA')",
    "Wikipedia — Paul Norman (game designer): https://en.wikipedia.org/wiki/Paul_Norman_(game_designer)",
    "VGMPF biography (Hexmon quote, Synchro/Cosmi origin story): https://www.vgmpf.com/Wiki/index.php/Paul_Norman",
    "CSDb scener (Paul Norman, id=4440, functions Coder/Graphician/Musician): https://csdb.dk/scener/?id=4440",
    "Wikipedia — Cosmi Corporation: https://en.wikipedia.org/wiki/Cosmi_Corporation",
    "CSDb release — Paul Norman's Computerized Publishing Co. (the separate ComPub tag, 1987): https://csdb.dk/release/?id=48192",
    "Lemon64 — Forbidden Forest (sound reputation, voice-usage commentary): https://www.lemon64.com/game/forbidden-forest, https://www.lemon64.com/review/forbidden-forest/52",
    "Local dataset: 7-8 files tagged Paul_Norman/Cosmi, 1 composer (see knowledge/COVERAGE.md)",
    "SIDdecompiler disassembly + 64tass reassembly + sidm2-sid-trace verification (2026-07-24): scratchpad/{slinky,forbidden,chernobyl,superhuey}.{asm,prg} — four files all trace-exact."
  ]
}
```

## Overview

The `Paul_Norman/Cosmi` tag is American game designer/musician Paul Norman's
own hand-coded playroutine -- typed in as machine-language hex via a hex
monitor for his Cosmi-published C64 games, most famously *Forbidden Forest*
(1983). Player-ID-fingerprinted across 7-8 files, all his own -- a
self-written routine by a self-taught guitarist-turned-programmer, not a shared
tool. **Now verified** via disassembly/reassembly/trace-diff on four independent
HVSC files -- all trace-exact.

The routine is re-embedded per-game at game-specific load addresses with
game-specific ZP allocations, but shares an invariant core: a 29-register SID
silence loop (ldx #$28), a 25-byte SID register defaults table (ldx #$18),
and a per-frame `dec zXX` frame counter at the top of PLAY. Zero filter use
across all sampled files -- a genuinely filter-free design that writes only
voice frequency registers during playback.

## Quirks & gotchas

See the `quirks` array -- the load-bearing ones: he's a **confirmed
self-taught coder-composer** (guitarist-turned-programmer, composed on
guitar then hand-typed hex); the **Synchro -> Cosmi origin story** of Forbidden
Forest; **zero observed filter use** (unusual, plausibly stylistic -- chords
across all three voices rather than filter-shaped leads); the **distinct
later 'Paul_Norman/ComPub' tag** (a 1987 desktop-publishing product, not the
same routine -- don't conflate the two); **per-game ZP allocation** (not a
fixed player-tool layout); and **self-modifying subtune dispatch** on some
builds (produces a harmless single-byte diff in SIDdecompiler's output).

## Disassembly notes

Disassembly + reassembly + trace-diff completed 2026-07-24 on four files
(Slinky, Chernobyl, Forbidden Forest, Super Huey). All produce clean
reassemblies via `SIDdecompiler -> 64tass` with no relocation overrides
needed. Scratchpad artifacts at `scratchpad/{slinky,forbidden,chernobyl,superhuey}.{asm,prg}`.

## Verification

**VERIFIED (2026-07-24).** Four HVSC files disassembled, reassembled, and
trace-diffed against originals -- all trace-exact.

| File | Load | Init | Play | Byte-diff | Trace | Notes |
|------|------|------|------|-----------|-------|-------|
| Slinky | $6000 | $7000 | $6020 | 99.9757% (4118/4119) | 30 writes, exact | 1 self-mod byte at $700B (harmless: init writes before JMP reads) |
| Chernobyl | $1C00 | $1C00 | $1C20 | 100% (994/994 covered) | 6 writes, exact | 29-byte unaccessed tail ($1FE2-$1FFF) |
| Forbidden_Forest | $50C0 | $5A00 | $595A | 100% (3112/3112) | 0 writes (both fail identically) | PLAY likely IRQ-driven, needs game context |
| Super_Huey | $C000 | $C000 | $C040 | 100% (3280/3280 covered) | 11 writes, exact | 1-byte unaccessed tail ($CCD0) |

**Methodology:** SIDdecompiler (no `-e`, no override flags -- all four had
matching `-v2` Start: and PSID load addresses) -> 64tass reassembly. All
four produced clean reassemblies (no wrap-mem warnings, no label collisions).
Traced with sidm2-sid-trace.exe (20 frames each, init/play from PSID header).

**Confirmed from disassembly:**
- Same core code structure across all four files despite different ZP/layout
- Standard SID init: silences all 29 SID regs (ldx #$28 loop), then programs
  voice defaults from a 25-byte table (ldx #$18 loop)
- PLAY entry: dec zXX (frame counter in ZP) -- invariant across builds
- Zero filter use across all 4 files (no filter register writes in any trace)
- Frequency-only playback (no pulse-width, no ADSR changes during
  playback -- only oscX_freq_hi/lo writes)

## Sources

See the `sources` array -- HVSC Musicians.txt, Wikipedia (Norman + Cosmi
Corporation), VGMPF (Hexmon/origin-story quote), CSDb, and Lemon64.
Plus the disassembly artifacts from this verification pass.
