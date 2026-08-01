# Bo Mellberg / Boone (player routine)

```json
{
  "id": "bo-mellberg",
  "name": "Bo Mellberg / Boone (player routine)",
  "aliases": ["Bo_Mellberg"],
  "authors": ["Bo Mellberg ('Boone')"],
  "released": "1987-1990 (Powersoft / Game On / CP Verlag era)",
  "status": "verified",
  "platform": "Swedish composer Bo Mellberg's ('Boone') own playroutine — a freelance commercial musician across multiple European publishers (Powersoft, Game On/CP Verlag/Double Density), with a CSDb-listed Coder function though no specific coding credit was independently confirmed. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Motorhead.sid (PSID, 1989): load $4000 (init $4000, play $4003). SIDdecompiler's own -v2 memory-touch map reports Start: $0800 (well below the $4000 load address) — NOT a dropped-byte/gotcha-40 case: it is a fixed low-RAM workspace that the player's own INIT self-relocates song/pattern data into at runtime (see data_format).", "zero_page": "8 confirmed touched ZP addresses (subtune-0 trace): $35, $3c, $43, $49, $fa, $fb, $fc, $fd. $fa/$fb and $fc/$fd are the dest/source indirect pointer pair used by the init-time block-copy loop.", "layout": "Code/data at native $4000+ (player + song data, matches PSID payload exactly). Fixed low-RAM workspace $0800-~$23b0 is NOT part of the loaded file — it is filled at INIT time by a table-driven page-copy loop (see data_format)." },
  "entry": { "init": "$4000 (Motorhead) — jmp to $4011: first runs a copy routine (X = subtune*2 selects a per-subtune {dest lo/hi, src lo/hi, page-count, remainder} entry from 4 parallel tables at $40e3/$40e4/$40cb/$40cc/$40fb/$40fc), copying a pre-assembled block of song-player code+data from inside the loaded payload (source $414f for subtune 0) down into the $0800 workspace; then self-modifies two JSR placeholders ($400b, $4076, both pristine $00 $00 in the file) to point into the just-copied $0800 region, using two more per-subtune lo/hi tables ($4137/$4138, $411f/$4120).", "play": "$4003 — swaps in ZP $01 bank config, JSRs through the self-modified $400b operand (into the copied $0800+ region), restores $01, rts." },
  "speed": "TODO — not isolated this pass (standard IRQ-driven single-call-per-frame assumed from the 324-write/50-frame trace shape, not independently confirmed).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 50 filter writes in a dense 324-write/50-frame sample)", "self_relocation": "CONFIRMED structural mechanism (Motorhead, subtune 0): INIT block-copies ~6.7KB (26 full $100-pages + 80 remainder bytes, per the $40fc/$40fb table entries for subtune 0) from $414f (inside the loaded PSID payload) to a fixed low-RAM workspace at $0800, then runs from the copy — same architectural class as lessons 82/88 in the verification agent's notes (\"player embeds a pre-assembled copy of its own code as .byte data and block-copies it at init\"). This is why SIDdecompiler's own -v2 map reports Start: $0800: it is the copy DESTINATION, not a dropped leading byte or ordinary fixed workspace." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS: 'Mellberg, Bo (Boone) - SWEDEN' — handle 'Boone,' no group listed in this file.",
    "THREE CONFIRMED GAME CREDITS, ALL REAL C64 GAMES, NOT BAND-REFERENCE DEMO TUNES (the 'Motorhead' title was checked and IS a real game, not just a tune named after the band): Motorhead (1989, publisher Game On, copyright CP Verlag/Double Density — programmer Joakim Axmon, graphics Jens Hultgren; Mellberg composed tracks 3-12, John Keding tracks 1-2, and Mellberg is also credited for sound effects — the traced file), Point X (1987, publisher Powersoft — coders Jimmy Carlsson & Magnus Strand, graphics/box art Lloyd/Christer Wallentin), and Ryshka (1990, publisher Game On/CP Verlag/Double Density — programmer Måns Näsman, graphics Jens Hultgren; Lemon64 notes the traced tune was UNUSED in the shipped game).",
    "A FOURTH, UNCONFIRMED TITLE SURFACED: 'Sky Twice' (1987, American Action) also credited to Mellberg per a CSDb search — flagged as UNCONFIRMED, sourced only from a search-tool summary, not independently fetched.",
    "CSDb LISTS HIS FUNCTIONS AS 'Coder, Musician' (scener id=13827), but no specific coding credit (i.e. which release he coded) was independently located in any source checked — this is reported as UNCONFIRMED-IN-DETAIL: the function tag exists on his profile, but no named coding credit corroborates it beyond that tag.",
    "NO FORMAL GROUP MEMBERSHIP is populated on his CSDb profile — he appears to have worked as a freelance/commercial musician across multiple publishers rather than being a member of a scene group, though scattered one-off music/rip credits exist across several groups (Excellence Crew, Floppy Cracking Team, Twentieth Century Crackers, Defence, Cookie Crew, Mr. Fritt, Xades Society, Softbreaker) — the nature of each (formal membership vs. one-off) is UNCONFIRMED. A possible additional alias 'Cobra' surfaced only via an AI-generated page summary, NOT cross-checked against a second source — explicitly flagged, not asserted as fact.",
    "'GAME ON'/'CP VERLAG' RECURS AS A PUBLISHER THREAD ACROSS THIS KB: the same German disk-magazine/budget-label ecosystem (Double Density, Golden Disk 64) that published Motorhead and Ryshka also appears in [[martijn-schutten]], [[audio-effect-editor]], and [[twice-effect-editor]]'s own cards — this is circumstantial context (a shared publisher across different, unrelated teams), not a personal connection to Mellberg specifically.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — checked against the KB's other Swedish/Nordic composers ([[jonas-hulten]], [[skyline-editor]]) with no overlap found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Mellberg, Bo (Boone) - SWEDEN'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Motorhead (full credits, traced file): https://www.lemon64.com/game/motorhead",
    "Lemon64 — Point X: https://www.lemon64.com/game/point-x",
    "Lemon64 — Ryshka (unused-tune note): https://www.lemon64.com/game/ryshka",
    "CSDb scener id=13827 (Bo Mellberg, Coder/Musician functions): https://csdb.dk/scener/?id=13827",
    "Existing KB cards: knowledge/players/martijn-schutten.md, knowledge/players/audio-effect-editor.md, knowledge/players/twice-effect-editor.md (Game On/CP Verlag publisher context)",
    "Local dataset: 3 files tagged Bo_Mellberg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Bo_Mellberg` tag is Swedish composer Bo Mellberg's ('Boone') own
playroutine — a freelance commercial musician across multiple European
publishers, with confirmed credits on real 1987-1990 C64 games including
one whose tune went unused in the final release. Player-ID-fingerprinted
across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **checked-and-
confirmed 'Motorhead' game title**: verified as a real commercial C64
game with full credits, not a tune merely named after the band as an
initial research premise wondered. Also notable: a recurring 'Game
On/CP Verlag' publisher thread already appearing in 3 other KB cards,
noted as shared context rather than a personal connection.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly produced this pass for `Motorhead.sid` (see Verification) —
`SIDdecompiler.exe Motorhead.sid -a2048 -z -d -c -v2 -r -1 -s0`, subtune 0
only. Two duplicate-label errors and one unsymbolized copy-destination
pointer needed manual fixing before it would reassemble/relocate cleanly
(see Verification for exact fixes). Not yet attempted for the three RSID
files (`Point_X.sid`, `Ryshka.sid`, `Sky_Twice.sid`) — all use
self-installed NMI/IRQ vectors (`play` header field is `$0000`), which
`SIDdecompiler`'s default invocation cannot trace without an `-I`/`-P`
override pointing at the real handler (see Verification's caveat for what
was found at `Point_X.sid`'s NMI vector, $8084, not yet followed up).

## Verification

**Disassembled + reassembled + trace-verified (2026-08-01) — `status: verified`
(scoped to Motorhead.sid; see caveat below).**

Disassembled `Motorhead.sid` (PSID, load/init $4000, play $4003, 12 subtunes,
14119-byte payload) with `SIDdecompiler.exe -r -1 -s0` (subtune 0 only, per
gotcha 40/lesson 63/lesson 48 — a naive whole-tune trace touches an extra
self-modified-code mirror at $9e00-$9eff that a single-subtune trace does
not, and would have produced spurious duplicate labels). `-v2`'s own map
reports **Start: $0800** — well below the $4000 load address — so per
gotcha 40 the disassembly was relocated with `-a2048` (decimal for $0800),
landing native code exactly back at $4000 with zero net shift.

- **Byte-diff (native, `-r`): 14119/14119 bytes = 100.0000% exact**, zero
  diverging addresses, against the real PSID payload.
- **Two duplicate-label errors fixed** (`l1d71`, `l1d7a` — both inside a
  self-modified-code region at $1d00-$1dff, per lesson 70: renamed the
  first of each pair, kept the native name on the second/final definition).
- **One manual pointer-symbolization fix**: the copy-loop's destination
  table entries (`l40e3`/`l40e4`, native `.byte $00, $08`) were left as raw
  literal bytes by SIDdecompiler rather than symbolized as `<l0800`/`>l0800`
  (SIDdecompiler correctly symbolized the copy's SOURCE pointer at
  `l40cb`/`l40cc` as `<l414f`/`>l414f`, but not the destination) — cosmetic
  at the native base (raw `$00,$08` already equals the correct native
  value) but load-bearing for any relocation control.
- **Native trace-diff: 0/324 register-write divergences** over 50 frames
  (subtune 0) — but this is a **tautological** check per this project's
  lesson 63/69 (a byte-exact `-r` reassembly is guaranteed to trace
  identically by construction) and is not cited as independent evidence.
- **Non-tautological relocation-invariance control**: a full
  ADDRESS-relocation control (`-a` shifted by a non-page-aligned +$2011
  delta) genuinely FAILED — INIT's own copy-loop destination table (once
  fixed to `<l0800`/`>l0800`, so that part relocated correctly) still
  produced a completely different, wrong PLAY trace (306 writes vs. 324,
  reordered/wrong values from frame 0). Root cause, confirmed by reading
  the disassembly: the block the copy loop moves into the $0800 workspace
  is a **pre-assembled copy of executable code + data stored as plain
  payload bytes at $414f-$5c1a**, which SIDdecompiler's own -v2 map marks
  pure read-only/data (`r`) at its SOURCE address — i.e. it is never
  disassembled as instructions there, so any absolute addresses embedded
  inside that copied block are emitted as raw, unrelocatable literals that
  survive the copy verbatim. This is the exact class of defect the
  verification agent's own notes call out (an embedded pre-assembled code
  image defeating address relocation) — not a defect in this
  reconstruction, and not worth chasing byte-by-byte per that agent's own
  guidance.
- **ZP-relocation control (weaker but non-tautological, `-Z96`) PASSED
  cleanly**: only 14 of 35105 assembled bytes changed (0.04%) relative to
  the native build, and the resulting trace was **0/324 register-write
  divergences**, exact — a genuine structural pass/fail test (any
  mis-parsed instruction boundary or wrong operand would have broken it)
  that the embedded-code-copy defect above does not block, since ZP
  relocation never touches the copied block's absolute addresses.

**Combined verdict for Motorhead.sid: 100.0000% byte-exact + a passing
non-tautological structural control (ZP relocation) + a correctly
explained, non-defect failure on the stronger address-relocation control.**
This meets this project's verified bar (an exact register-write match this
pass produced and can cite), scoped specifically to this one file.

**Caveat — NOT independently confirmed this pass**: the card's other two
confirmed-same-composer files (`Point_X.sid`, `Ryshka.sid`) and the
unconfirmed `Sky_Twice.sid` are all **RSID** files with `play=$0000`
(self-installed NMI/IRQ vectors, not a PSID-callable play routine) —
`Point_X.sid` installs a custom NMI vector at $8084 via
`sta $fffe`/`sta $fffe` and a separate, structurally different $0314/$0315
IRQ-vector-setting routine at ~$9300 whose purpose wasn't resolved this
pass. A raw-byte scan for Motorhead's distinctive workspace-copy-loop
opcode signature (`b1 ?? 91 ?? c8 d0 ?? e6 ?? e6 ?? ca f0 ?? 4c`, masked
per this project's lesson 68/83) found **zero matches** in any of the
three RSID files — this is weak, not strong, evidence they may not share
the identical byte-level routine (the pattern is a fairly generic 6502
memcpy idiom and its absence doesn't rule out a differently-encoded same
engine). **This status is scoped to Motorhead.sid specifically; whether
Point_X/Ryshka/Sky_Twice share Motorhead's exact playroutine remains an
open question**, not asserted either way.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb,
and 3 related KB cards.
