# David Green (player routine)

```json
{
  "id": "david-green",
  "name": "David Green (player routine)",
  "aliases": ["David_Green"],
  "authors": ["David Green"],
  "released": "~1989 (Breakpoint Designs)",
  "status": "verified",
  "platform": "English composer David Green's ('Greeny', group Breakpoint Designs) playroutine — a genuinely thin biography beyond one HVSC line, with no CSDb scener presence at all. Player-ID-fingerprinted across 8 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per file, no fixed convention: Advert $a400, Reckless_Rufus $e000, Boing $a000 — all disassembled+reassembled to 100.0000% byte-exact, register-write-exact (see Verification).", "zero_page": "TODO (not needed for byte-exact reconstruction; not separately mapped)", "layout": "Working-storage table of self-modified pitch/pulse-width/filter-setup bytes sits immediately after each file's init routine (e.g. Advert $ab00-$acb7-ish, Reckless_Rufus/Boing $e700/$a700-$e8e2/$a8ba-ish) — read once at cold boot then continuously rewritten; SIDdecompiler's default trace captures a post-execution snapshot here, not the cold value (see reconstructions/david-green.md for exact addresses per file)." },
  "entry": { "init": "File-dependent: init = load address on Advert/Reckless_Rufus; init = load+$fb0 on Boing (NOT load or load+fixed-offset — no single convention across the family).", "play": "play = load+$41 on every one of the 3 traced files (Advert $a441, Reckless_Rufus $e041, Boing $a041) — this offset IS consistent even where init isn't." },
  "speed": "TODO — not required for the trace-diff verification (traced by explicit frame count, not derived from a speed table), so still unknown here.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — a handful of filter writes per file in the traced samples)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "GENUINELY THIN BIOGRAPHY, explicitly flagged rather than papered over: HVSC Musicians.txt confirms only 'Green, David (Greeny) / Breakpoint Designs - UNITED KINGDOM (ENGLAND)' — handle 'Greeny', group 'Breakpoint Designs' (likely a small commercial dev studio/label, not a demogroup — could not confirm what kind of entity it was). NO CSDb scener page exists for him under any of 'David Green'/'Green, David'/'Greeny' (direct search returned zero results) — this absence, combined with the strong 8/8 single-composer signal, is CIRCUMSTANTIAL (not confirmed) support for a personal, hand-coded routine used only in his own commercial game work, not a shared demoscene tool. Flagged as inference from absence of data, not a sourced statement.",
    "'BARMY BILL'S FLIGHT OF FUN' (a file in his folder) is confirmed as a REAL commercial C64 game — a horizontal-scrolling shoot-em-up, released 1989 — but its Lemon64 page 404s and its MobyGames page is bot-blocked, so no primary source could be checked for its full credits. A WebSearch AI-summary claim that it was 'created by Lee Hudson & David Green in 1989' could NOT be traced to any primary source and is EXPLICITLY NOT included as fact — flagged as unverified, discarded rather than reported.",
    "NO CSDb RELEASE EXISTS for 'Barmy Bill's Flight of Fun' either — consistent with commercial/budget game distribution rather than demoscene circulation, but again inference, not direct confirmation.",
    "'ADVERT' (the traced file) has no corroborating source explaining what it advertises — plausibly a TV/product jingle or an in-game/menu tune, genuinely unknown.",
    "Extensive generic web noise for the common name 'David Green' (LA musicians, IMDb sound-department entries, etc.) was checked and correctly excluded as unrelated — none plausibly connect to this C64 composer.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "SIDdecompiler auto-detects 'Reckless_Rufus.sid' as containing a Rob Hubbard driver instance ('1 Rob Hubbard driver instance(s) found.', its own heuristic, printed even without the -M flag) and REQUIRES -M to trace it correctly — without it, the tool silently ignores -s/-S entirely (always 'Emulating subtune 0 play' regardless of what subtune is requested) and under-captures the tail ~1,348 bytes of the real payload. This is almost certainly a heuristic false-positive-by-structural-similarity (this project's own player tag for the file is David_Green, not Rob_Hubbard, and DeepSID/HVSC never associate the two composers beyond one collaboration credit on a different file, Dark_Shades) rather than evidence the two share code — flagged as a tooling quirk, not a real player-family connection, and NOT added to `edges.shares_routine_with` on that basis alone.",
    "No single memory-map convention across the 3 traced files: play is always load+$41, but init is load itself on 2 of 3 files and load+$fb0 on the third (Boing) — genuinely file-dependent, not a disassembly artifact (confirmed identical after full byte-exact reconstruction of all 3)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Green, David (Greeny) / Breakpoint Designs - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "WoWRoms — Barmy Bill's Flight of Fun (1989, C64, genre/size metadata only, no credits): https://wowroms.com/en/roms/commodore-64/barmy-bills-flight-of-fun/122731.html",
    "CSDb search (confirms zero scener/release results for this composer or game): https://csdb.dk/search/?seinsel=all&search=Green%2C+David",
    "Local dataset: 8 files tagged David_Green, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `David_Green` tag is English composer David Green's ('Greeny', group
Breakpoint Designs) own playroutine — one of this KB's thinner-documented
composers, with no CSDb presence at all and only a single HVSC line as
confirmed biography. Player-ID-fingerprinted across 8 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **honestly flagged
thin biography**: every claim beyond the bare HVSC line is either
circumstantial inference or an explicitly discarded unverified web-search
claim (a Lee Hudson co-credit that could not be traced to any primary
source).

## Disassembly notes

No published source exists (not in the realdmx RE repo, no STIL note) —
this card's disassembly is original work, done via `SIDdecompiler` +
`64tass` (see Verification and `knowledge/players/reconstructions/david-green.md`
for the full per-file patch tables). Data-format facts beyond raw
byte-exactness (order list, pattern/instrument encoding, effect commands)
were NOT reverse-engineered this pass — the verification bar was met via
disassemble→reassemble→byte-patch→trace-diff without needing to name what
the surviving working-storage bytes semantically represent beyond "pitch/
pulse-width/filter setup table, read once at cold boot." Those `TODO`s are
a real, honestly-flagged gap, not an oversight.

## Verification

**`status: verified` (2026-07-24).** Disassembled, reassembled, and
byte-patched 3 independent real HVSC `David_Green` files to **100.0000%
byte-exact** payloads, then **register-write-exact** trace-diffs (via
`sidm2-sid-trace.exe`, 50 frames per subtune) against the originals:

- **Advert.sid** (load/init `$a400`, play `$a441`, 1 subtune, 3,830-byte
  payload): 33 bytes patched (all plain working-storage `.byte` literals
  in a read-once-at-init pitch/pulse-width/filter table). Unpatched
  reassembly was 99.1384% byte-exact but traced with a REAL divergence at
  frame 0 (15 SID writes in the original vs. 13, wrong oscillator
  frequency/pulse-width values) — i.e. these bytes are load-bearing, not
  dead workspace, despite being read+write (`+`)-marked in SIDdecompiler's
  own memory map. Patched: 100.0000% byte-exact, trace register-write-exact.
- **Reckless_Rufus.sid** (load/init `$e000`, play `$e041`, 4 subtunes,
  5,426-byte payload): required `-M` (SIDdecompiler auto-detects a "Rob
  Hubbard driver instance" in this file and silently mistraces without it
  — see quirks). 74 raw byte-diffs patched across four distinct
  mechanisms: 65 plain working-storage `.byte` literals, 3 self-modified immediate-operand
  bytes (`lda #$xx`/`cmp #$xx`/`sbc #$xx` whose operand is itself the
  target of a `sta label+1`), 1 self-modified absolute-address operand
  (`sta le789` → really `sta le700`, low byte only), and 5 bytes of one
  self-modified pointer-table ALIAS (a `<label`/`>label` reference that
  reassembles cleanly to the WRONG existing label — see
  `reconstructions/david-green.md` finding 3). Unpatched (post `-M`):
  98.6362% byte-exact. Patched: 100.0000% byte-exact, register-write-exact
  on all 4 subtunes.
- **Boing.sid** (load `$a000`, init `$afb0` — the one file where init
  isn't the load address — play `$a041`, 7 subtunes, 4,031-byte payload):
  54 bytes patched (51 plain working-storage `.byte` literals + 3
  self-modified operands, same class as Reckless_Rufus). Unpatched:
  98.6604% byte-exact. Patched: 100.0000% byte-exact, register-write-exact
  on all 7 subtunes.

Full exact patch addresses and before/after values for all 3 files are in
`knowledge/players/reconstructions/david-green.md`, not duplicated here.

**What's still genuinely unverified**: the data format (order list,
pattern encoding, instrument/wavetable/pulsetable layout, effect command
set) was not reverse-engineered — the verification bar here was met via
byte/trace exactness, not full semantic understanding of the player's
internals, and those `data_format`/`effects` fields remain honest `TODO`s.
A future pass wanting the data format would need to read the disassembled
`.asm` files in `scratchpad/` (not currently retained in the repo — the
reassembly artifacts were scratch work, gitignored) and name the pattern/
instrument structures directly, which this pass didn't attempt.

## Sources

See the `sources` array — HVSC Musicians.txt, WoWRoms, and CSDb (a
confirmed-negative search).
