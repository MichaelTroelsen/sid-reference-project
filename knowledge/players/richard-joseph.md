# Richard Joseph (player routine)

```json
{
  "id": "richard-joseph",
  "name": "Richard Joseph (player routine)",
  "aliases": ["Richard_Joseph"],
  "authors": ["Richard Joseph"],
  "released": "1986-1990 (Palace Software era)",
  "status": "verified",
  "platform": "English composer Richard Joseph's own playroutine — a musician, NOT a coder (confirmed by two independent sources), used across his Palace Software soundtracks including Barbarian, whose theme is a deliberate orchestral homage to Basil Poledouris's Conan the Barbarian score. Joseph later became one of the best-known Amiga/PC game composers of the 1990s, a frequent Sensible Software collaborator (Cannon Fodder, Sensible World of Soccer). Player-ID-fingerprinted across 9 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "NOT fixed across releases — the player is compiled/relocated together with each game's own song data, at a different load address per file: Barbarian $97c0, Cauldron_II $9f20, Sacred_Armour_of_Antiriad $a36e (all confirmed by disassembly+reassembly, see Verification). SIDdecompiler's own emulated-memory-access map additionally reports a Start address of $0200 for all three files, well below the PSID load address — this is NOT a dropped leading byte (gotcha 40's usual trap): it is a genuine, separate low-RAM scratch block the player also touches at runtime (read+write), disjoint from the loaded code/data block. Its extent varies per file (Barbarian $0200-$0259 solid r+w; Cauldron_II and Sacred_Armour show a sparser, file-specific pattern in roughly the same $0200-$0280 span) — reported here as observed, not generalized into a fixed-size claim.", "zero_page": "Uses a set of specific zero-page addresses (not a contiguous block) — but the STARTING address differs per compiled release: Barbarian's disassembly anchors at $31 (equates z31..zec spanning $31-$ec), Cauldron_II's at $6d (via z6d) with a second equate chain from $2e, Sacred_Armour's from $2e. This — combined with the per-file load/init/play addresses above — confirms each SID file bundles its own independently-relocated copy of the player, not a shared fixed-address driver.", "layout": "Song/instrument data and player code share one contiguous loaded block per file (no separate player/data load regions observed); a small per-file low-RAM workspace at ~$0200 (see load_address) holds runtime counters/accumulators. Note-data table format itself (order list, patterns, instruments) was NOT reverse-engineered this pass — see data_format." },
  "entry": { "init": "Per-file PSID init vector, called directly (no dispatcher/vector-table indirection observed): Barbarian $b527, Cauldron_II $a760, Sacred_Armour_of_Antiriad $c411 — all 3 trace register-write-identical to the original file after reassembly (see Verification).", "play": "Per-file PSID play vector, called once per frame from the game's own IRQ (not disassembled/confirmed here, taken from PSID header + trace behavior): Barbarian $b470, Cauldron_II $a78d, Sacred_Armour_of_Antiriad $c3ac." },
  "speed": "TODO — not established this pass. All 3 traces used a flat 50 frames/call (PAL-rate assumption from the harness), not derived from the player's own timing/speed table.",
  "data_format": { "order_list": "TODO — not reverse-engineered this pass (verification focused on player-code integrity via disassemble/reassemble/trace-diff, not on the note-data table format).", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "RESOLVED, no longer a TODO: traced across 3 files / 6 subtunes, filter usage is genuinely tune-dependent, not a fixed reset/park value. Barbarian subtune 0 sets filter_res_control=$04 (voice 3 routed through the filter) + filter_mode_volume=$1F (low-pass enabled, full volume) — an active, deliberate low-pass setup, written once (frame 8) then left alone. Cauldron_II subtune 0 similarly sets filter_res_control=$A1 (voice 1 routed, resonance $A) + filter_mode_volume=$2F (band-pass enabled) — again active and deliberate. But Cauldron_II subtunes 8/16 and all 3 sampled Sacred_Armour subtunes write only filter_mode_volume=$0F (all filter modes OFF, volume=$F) — i.e. an explicit filter-disable/volume-only default. This reconciles the card's previously-flagged tension: his interview statement that the filter 'couldn't really be used' describes his general/default practice (most subtunes disable it), but specific subtunes DO engage real low-pass/band-pass filtering with real voice routing and resonance values — selective, not absent, use." },
  "effects": { "encoding": "TODO — not reverse-engineered this pass.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED MUSICIAN, NOT A CODER (two independent sources, VGMPF and his own Remix64 interview) — before games he had a professional pop-music career (worked with Trevor Horn and Hugh Padgham, member of the group CMU which released two albums on Transatlantic) and had composed ~100 tunes on a Yamaha CX5 music computer. Entered games after answering a 1986 Melody Maker classified ad placed by Palace Software.",
    "FIRST C64 WORK, first-party account: Cauldron II (1986), delivered in TWO WEEKS 'from booting up the C64 for the first time to delivering a finished tune and 20 sound effects', per his own Remix64 interview.",
    "BARBARIAN'S ORCHESTRAL INTENT WAS DELIBERATE, CONFIRMED: the theme is based on Basil Poledouris's Conan the Barbarian film score; he later arranged Barbarian 'in the style of Ennio Morricone' for a planned retrospective album — confirming the orchestral character was an intentional artistic choice, not incidental to the SID's capabilities.",
    "Full C64 composing credits (VGMPF): Cauldron II (1986), The Sacred Armour of Antiriad (1986), Barbarian: The Ultimate Warrior (1987, Palace Software — the traced file), Stifflip & Co (1987), Rimrunner (1988), Barbarian II: The Dungeon of Drax (1988), Wicked (1989), International 3D Tennis (1990), a Defender of the Crown (Cinemaware) port.",
    "LATER, MUCH MORE FAMOUS CAREER: from 1990 a frequent collaborator with Jon Hare, co-writing/arranging several of Sensible Software's best-known soundtracks — Mega Lo Mania (1991), Wizkid (1992), Cannon Fodder (1993, BAFTA-nominated GBC port in 2000), Sensible World of Soccer (1994). Founded the audio house Audio Interactive in 1995; won a BAFTA Interactive Award (audio) for Theme Park World. Also freelanced for The Bitmap Brothers and Millennium. Final credited work in 2006; died 4 March 2007 (age 53) of lung cancer.",
    "SCENE RECOGNITION posthumously: CSDb lists a demoscene tribute release, 'The Richard Joseph Tribute' (2010, by Onslaught, Protovision, and Samar Productions — the same Samar Productions already connected to [[jch-protracker]]/[[kosa-protracker]] in this KB, though no direct link between Joseph and Kosa/Phobos was found, just a coincidental shared tribute-group credit). He attended Back in Time Live 2003.",
    "NAMED INFLUENCES (his own words, Remix64 interview): Martin Galway ('still my favourite even now', praised Wizball) and Rob Hubbard ('Knucklebusters') — both already carded in this KB as [[martin-galway]] and [[rob-hubbard]]. Admiration only, no evidence of collaboration or shared code.",
    "Not confirmed in SIDId (no entry for this tag). No other known relationship found to any composer/tool already in this KB beyond the influence citations above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "Wikipedia — Richard Joseph: https://en.wikipedia.org/wiki/Richard_Joseph",
    "8bitlegends — Richard Joseph biography/obituary: https://8bitlegends.com/richard-joseph/",
    "VGMPF — Richard Joseph (full C64 credit list, later career): https://vgmpf.com/Wiki/index.php?title=Richard_Joseph",
    "Remix64 interview (first-party quotes: Cauldron II timeline, filter-avoidance statement, Morricone-style Barbarian arrangement, influences): https://remix64.com/interviews/interview-richard-joseph.html",
    "CSDb scener (id=8426): https://csdb.dk/scener/?id=8426",
    "CSDb release — The Richard Joseph Tribute (2010): http://csdb.dk/release/?id=94536",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 9 files tagged Richard_Joseph, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly/reassembly/trace-diff (2026-07-24), this session: SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe against HVSC's own Barbarian.sid/Cauldron_II.sid/Sacred_Armour_of_Antiriad.sid — see knowledge/players/reconstructions/richard-joseph.md for exact patched byte addresses"
  ]
}
```

## Overview

The `Richard_Joseph` tag is English composer Richard Joseph's own
playroutine, used across his Palace Software soundtracks including
Barbarian (1987) — a deliberate orchestral homage to Basil Poledouris's
Conan the Barbarian score. He went on to become one of the best-known
1990s Amiga/PC game composers via Sensible Software (Cannon Fodder,
Sensible World of Soccer). Player-ID-fingerprinted across 9 files, all
his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's **confirmed a
musician, not a coder**, unlike several other cards in this batch; the
**Barbarian/Conan homage is deliberate**, confirmed by his own later
Morricone-style rearrangement; and the **filter-avoidance tension is now
resolved** (2026-07-24, see `data_format.filtertable`) — his interview
statement describes the general/default practice (most sampled subtunes
disable the filter outright), but specific subtunes do engage a real,
deliberately-configured filter with genuine voice routing and resonance.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this card's
own disassembly (2026-07-24, see Verification and
`knowledge/players/reconstructions/richard-joseph.md`) is original work,
not sourced from a prior RE effort. The player is re-compiled/relocated
per game release (load address, init/play addresses, and zero-page
footprint all differ file to file) rather than being one fixed-address
shared driver — see `memory`/`entry` fields.

## Verification

**`status: verified` (2026-07-24).** Disassembled, reassembled, and
trace-diffed 3 independent real HVSC `Richard_Joseph`-tagged files —
`Barbarian.sid`, `Cauldron_II.sid`, `Sacred_Armour_of_Antiriad.sid` — all
three reaching **100.0000% byte-exact** reassembly (after patching a
small number of self-modified/drifted working-storage bytes SIDdecompiler
captures at their post-execution runtime value rather than their cold-load
value — 4 bytes for Barbarian, 2 for Cauldron_II, 3 for Sacred_Armour;
see the reconstruction manifest for the exact addresses) and
**register-write-identical traces** (`sidm2-sid-trace.exe`, 50 frames per
run) across 3 subtunes each (9 subtune traces total, 0 diff lines in
every one) — including the tune actually cited in the card's earlier
"71 register writes / 50 frames, 3 filter writes" note (Barbarian subtune
0), now fully explained rather than just observed.

Key methodology finding (see
`knowledge/players/reconstructions/richard-joseph.md` for exact bytes):
SIDdecompiler's own `-v2` memory-access map reports a `Start:` address of
`$0200` for all 3 files — far below each file's real PSID load address.
This is NOT the usual "dropped leading byte"/"wrong relocation base" trap
(gotcha 40) — relocating to the PSID header's own load address (the
"obvious" choice) produces a plausible-looking reassembly that actually
16-bit-wraps around all of memory (64tass emits `-Wwrap-pc`/`-Wwrap-mem`
warnings and a two-disjoint-`Data:`-range report), because SIDdecompiler
emits one continuous byte stream spanning its ENTIRE captured range
(`$0200` to the file's real end address) with no gap for the large
genuinely-untouched region in between. The fix (per gotcha 40): relocate
to `-a512` (decimal for `$0200`, the `-v2` map's own literal Start
address) instead of the PSID load address — this produces one clean,
non-wrapping contiguous block and put the file's own code back at its
correct, header-confirmed addresses (verified: `l97c0` (Barbarian),
`la760`/`la78d` (Cauldron_II), `lc411`/`lc3ac` (Sacred_Armour) all landed
exactly on the true load/init/play addresses with zero further shift
needed, since Start ($0200) coincidentally requires no further delta
itself). Sacred_Armour_of_Antiriad additionally hit an "undefined
symbol" reassembly error (`lc2a1`, referenced only as `lc2a1+2`/
`lc2b7-22` in two self-modified-accumulator instructions) — the address
turned out to be the operand byte of a `lda #$04` sitting mid-instruction
(not a disassembly-unit boundary SIDdecompiler labels), resolved by
adding a plain `lc2a1 = $c2a1` equate rather than trying to force a
label onto that byte position.

Genuinely open, left as `TODO`, not guessed at: the note/instrument data
format (order list, patterns, instruments, wavetable, pulsetable),
effect-command encoding, and the player's speed/timing model — this pass
verified player-CODE integrity (byte-exact + trace-exact reconstruction)
across 3 files, not the song-DATA format.

## Sources

See the `sources` array — Wikipedia, 8bitlegends, VGMPF, a Remix64
interview (primary source for several quirks), CSDb, HVSC Musicians.txt,
and this pass's own original disassembly/reassembly/trace-diff (see
`knowledge/players/reconstructions/richard-joseph.md`).
