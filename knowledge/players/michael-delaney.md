# C64 Music Editor V1.0 (Michael Delaney)

```json
{
  "id": "michael-delaney",
  "name": "C64 Music Editor V1.0 (Michael Delaney)",
  "aliases": ["Michael_Delaney"],
  "authors": ["Michael Delaney"],
  "released": "1990 (music driver); 1992 (editor)",
  "status": "verified",
  "platform": "Native C64 music driver, written by English programmer Michael Delaney (alias 'AudioArts', runs 'Notable Developments') in Turbo Assembler, specifically FOR two named composers — Allister Brimble and Matthew Simmonds ('4-Mat') — around 1990; the editor front-end followed in 1992. A faster second-generation driver (1991) shipped in only one game. Delaney later ported the driver lineage to Game Boy Color (1999) and Game Boy Advance (2001), used by Brimble and other composers there too. Player-ID-fingerprinted across 14 files: 11 by Brimble, 3 by '4-Mat'.",
  "csdb_release": 138249,

  "memory": { "load_address": "Per-file/per-game, NOT fixed: Captain Dynamo (Brimble) loads+runs fully self-contained at $0c00 (SIDdecompiler's own -v2 memory-touch map Start:$0c00 matches the PSID header load address exactly, End:$174c, entirely within the loaded payload). Rampart (Brimble) loads at $3000 but the driver also touches a large fixed low-memory workspace below it (-v2 map Start:$0800 — 10240 bytes below the PSID load address; relocating to the map's own Start, not the header load address, was required, per this KB's disassembly playbook). Hawk (4-Mat) loads at $45c0 but the driver's own captured range runs $22c4-$fdff (both well below AND far above the loaded song data) — this SID rip's driver code plainly lives largely outside the ripped file's own payload, consistent with the driver being embedded in the game rather than self-contained in the rip.", "zero_page": "TODO (no full ZP map produced — this pass only established register-write fidelity, not a documented zero-page layout).", "layout": "Structurally inconsistent across files/games: Captain Dynamo is fully self-contained at its load address; Rampart and Hawk both depend on driver code/workspace resident outside the ripped payload's own address range. Not a single fixed memory map — treat any single file's layout as file-specific, not the player's in general." },
  "entry": { "init": "Read directly from each file's own PSID header init vector — confirmed correct by trace on all 3 files tested (Captain Dynamo $0c00, Rampart $3f75, Hawk $7154).", "play": "Read directly from each file's own PSID header play vector — confirmed correct by trace on all 3 files tested (Captain Dynamo $0c03, Rampart $3f72, Hawk $f600). Rampart's PLAY vector's own JMP operand is itself self-modified by INIT (pristine on-disk bytes are a stale/leftover $FCE2 KERNAL address; INIT overwrites it to the real player entry before PLAY is ever called) — a self-modifying entry point, harmless once INIT has run once, per this project's own precedent for this pattern." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 45 filter writes in an unusually dense 436-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CORRECTION TO AN INITIAL RESEARCH ASSUMPTION: '4-Mat' is Matthew Simmonds (English electronic musician/sound designer/game composer, active in the demoscene since ~1989-early '90s, groups Ate Bit/Orb, former Cosine — CSDb scener id=3913, rated 9.3/10 as musician, 9.6/10 as coder). He is NOT the unrelated CSDb scener 'Jason Brooke' (id=8136, a different, prolific UK C64 musician with 600+ credits) — the two share no overlap in groups or CSDb IDs. Wikipedia, CSDb, and VGMPF all independently agree on the Matthew Simmonds identity.",
    "SIDId's own comment field is directly corroborated by an independent biography (VGMPF): 'Around 1990, [Delaney] wrote the first music driver on the Commodore 64 for Allister Brimble and Matthew Simmonds (4-Mat) using Turbo Assembler' — this exactly matches the 11-Brimble/3-4-Mat split seen in this project's own tag data. A faster, more capable SECOND driver followed in 1991 but shipped in only one game ('Grell and Fella').",
    "THE DRIVER LINEAGE OUTLIVED THE C64: Delaney later ported it to Game Boy Color (1999, Z80) and Game Boy Advance (2001, ARM), both used by Brimble and other composers, noted for emulating C64 pulse waves on those later platforms — an unusually long-lived driver family for a C64-era tool.",
    "ALLISTER BRIMBLE: British game composer, joined Codemasters in 1988, confirmed credits including Captain Dynamo (1992, the traced file) and the Dizzy series (Treasure Island Dizzy, Fantasy World Dizzy, Spellbound Dizzy, Dizzy Prince of the Yolkfolk, 1989-91) — all matching this project's local HVSC folder. Went on to a long career into Amiga/console/PC (X-COM, Mortal Kombat, RollerCoaster Tycoon, Driver, Need for Speed: Underground).",
    "Michael Delaney has NO CSDb scener profile — he only appears as a release credit, consistent with being a professional games-industry programmer (b. 1 Jan 1974, Crowborough, East Sussex per VGMPF) rather than a demoscene participant.",
    "The traced sample's UNUSUALLY DENSE 436 writes / 50 frames has no external technical documentation explaining it — plausibly reflects the second, 'faster, more complex sounds' driver generation, or heavy filter-sweep design, but this is speculative and not confirmed by any source.",
    "Not confirmed in SIDId beyond the bare NAME/AUTHOR/RELEASED/comment fields already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "VERIFIED 2026-07-24: SIDdecompiler+64tass reconstruction of 3 real HVSC files (Captain Dynamo and Rampart by Brimble, Hawk by 4-Mat) is register-write-exact against the real files on every subtune tested (5 subtunes total across the 3 files). Byte-diff was 99.03% (Captain Dynamo), 98.08% (Rampart), 100.00% (Hawk) — every diverging byte in the two imperfect files was individually isolated and confirmed DEAD (a self-modified operand/workspace byte whose pristine on-disk value is provably never read before being overwritten at runtime) via the trace-diff itself, not assumed from the `-v2` map's markers alone.",
    "SELF-MODIFIED-LABEL SYNTAX TRAP (both Rampart and Hawk hit this, same fix both times): SIDdecompiler emits an invalid 64tass label like `l0834+1  lda l0b26,X` (a `+1`-suffixed self-modified-operand address reused as the line's own definition point) — 64tass rejects it with \"general syntax\". Fixed per this KB's playbook's gotcha 19: give the instruction a plain anchor label (e.g. `l0834_anc`) and add a separate `l0834 = l0834_anc` assignment so every other `l0834+1`/`l0834+2` expression elsewhere in the file still resolves correctly. Confirmed via 64tass's own `--labels=` dump that this produces the numerically correct address both times (empirically, via 0% byte-diff at the self-modifying STA instructions' own encoded operand bytes) — do not assume the anchor's real computed address matches its printed hex text; verify via `--labels=`.",
    "Rampart's byte-diff cluster at $306a and Hawk's need for the same label fix are both self-modified IMMEDIATE-operand bytes (the `lda #$04`-immediate/`sta label+1` pattern from this KB's playbook's entry 43), not data tables — SIDdecompiler bakes in the post-execution value ($04) instead of the pristine on-disk value ($05 for Rampart), confirmed dead by the trace-diff still matching exactly without patching it.",
    "Hawk's PLAY vector address ($f600 per its own PSID header) sits far outside its own loaded payload's address range ($45c0-$74bf) — the tracer's pre-INIT raw memory dump legitimately differs there (original shows literal zeros since the raw sidm2-sid-trace.exe RAM model is sized to the loaded file's own bytes and $f600 is unpopulated by the file; the reconstruction shows real code because SIDdecompiler's own capture spans a much wider emulated range, $22c4-$fdff) — this is NOT a functional divergence: every actual register-write line in the trace (everything after the header dump) is byte-for-byte identical."
  ],
  "sources": [
    "CSDb release 138249 (C64 Music Editor V1.0, credits, download links): https://csdb.dk/release/?id=138249",
    "VGMPF — Michael Delaney (biography, driver history, 1990/1991/1992 timeline, GBC/GBA ports): https://www.vgmpf.com/Wiki/index.php?title=Michael_Delaney",
    "Wikipedia — Allister Brimble (career, Codemasters, later console/PC work): https://en.wikipedia.org/wiki/Allister_Brimble",
    "Wikipedia — 4mat / Matthew Simmonds (identity, demoscene career): https://en.wikipedia.org/wiki/4mat",
    "CSDb scener — 4-Mat / Matthew Simmonds (id=3913, groups Ate Bit/Orb): https://csdb.dk/scener/?id=3913",
    "CSDb scener — Jason Brooke (id=8136, checked and confirmed UNRELATED to 4-Mat): https://csdb.dk/scener/?id=8136",
    "Local dataset: 14 files tagged Michael_Delaney, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Michael_Delaney` tag is a C64 music driver written by English
programmer Michael Delaney in 1990 specifically for two named composers,
Allister Brimble and Matthew Simmonds ('4-Mat') — an unusually well-
documented commission story, confirmed independently by a biography that
matches this project's own tag split exactly. The driver family later
lived on into Game Boy Color and Game Boy Advance ports.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **corrected identity**
for '4-Mat' (Matthew Simmonds, not an initially-assumed Jason Brooke); the
**confirmed 1990-for-two-composers commission story**, independently
matching the local tag split exactly; and the driver's **surprisingly
long life** beyond the C64, into GBC/GBA.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this KB's own
original disassembly (2026-07-24, via `SIDdecompiler`+`64tass`) is the only
one that exists. See `Verification` below for the full methodology and
results; see `quirks` for two reusable gotchas hit along the way (a
self-modified-label 64tass syntax trap, and a self-modified-immediate-operand
byte-diff pattern).

## Verification

**`status: verified` (2026-07-24).** Disassembled and reassembled 3 real
HVSC `Michael_Delaney`-tagged files (both credited composers: Captain Dynamo
and Rampart by Allister Brimble, Hawk by Matthew Simmonds/'4-Mat'), using
`SIDdecompiler.exe` (`-z -d -c -v2`, relocated to each file's own `-v2`
memory-map "Start:" address, not always the same as the PSID header's own
load address — see `memory.load_address`) and `64tass.exe`, then
trace-diffed original vs. reassembly with `sidm2-sid-trace.exe`
(`sidm2-siddump` MCP tools were not registered in this session; used the
documented fallback of shelling out directly, redirecting `2>&1` since the
tool writes its CSV to stderr).

- **Captain Dynamo** (load/init `$0c00`, play `$0c03`, 2 subtunes): byte-diff
  99.0321% (28 diffing bytes, all in one contiguous cluster `$11f4-$1260`
  that the `-v2` map marks self-modified `+`/`w`) + a 179-byte all-zero
  padding tail beyond the disassembler's own captured end (`$174d-$17ff`,
  never touched by the emulation, plausibly real unused padding, not
  omitted code). **Trace-diff: exact, both subtunes, 50 frames each** — the
  28-byte cluster is confirmed dead.
- **Rampart** (load `$3000`; driver workspace forces relocation to `-v2`
  Start `$0800`; init `$3f75`, play `$3f72`, 20 subtunes): byte-diff
  98.0750% (78 diffing bytes across 3 clusters — a self-modified immediate
  operand at `$306a`, a ~76-byte self-modified per-voice working-storage
  table at `$35ea-$3665`, and the PLAY vector's own self-modified JMP
  operand at `$3f73-$3f74`). Hit and fixed the self-modified-label 64tass
  syntax trap (see `quirks`). **Trace-diff: exact on all 4 subtunes tested
  (1, 5, 10, 20)** — every byte-diff cluster confirmed dead.
- **Hawk** (load `$45c0`; driver code/workspace span `$22c4-$fdff` per
  `-v2` map, well outside the ripped payload's own range; init `$7154`,
  play `$f600`, 1 subtune): byte-diff **100.0000%** over the full
  overlapping payload range (0 diffing bytes). **Trace-diff: exact**, 50
  frames — the only line that differs at all is the tracer's cosmetic
  pre-INIT raw-memory dump of the PLAY vector (see `quirks` for why this is
  not a functional divergence).

All three files, spanning both credited composers, are register-write-exact
once each file's own confirmed-dead self-modified bytes are accounted for —
matching this project's own precedent for `verified` (cf.
`laxity-newplayer`'s ~99.9%). Genuinely open for a future pass: no full
zero-page map or data-format/effects documentation was produced (this pass
verified playback fidelity, not the tracker data format) — `memory.zero_page`,
`data_format`, and `effects` remain `TODO`.

## Sources

See the `sources` array — CSDb (release + 2 scener profiles), VGMPF, and
Wikipedia (2 pages).
