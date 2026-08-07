# Silas Warner (Muse Software driver)

```json
{
  "id": "silas-warner",
  "name": "Silas Warner (Muse Software driver)",
  "aliases": ["Silas_Warner"],
  "authors": ["Silas S. Warner"],
  "released": "1983-1984 (Muse Software)",
  "status": "verified",
  "platform": "CONFIRMED to be Silas S. Warner (1949-2004) — the creator of Castle Wolfenstein (1981) and Beyond Castle Wolfenstein, the foundational stealth game whose title/concept later inspired id Software's entire Wolfenstein franchise. A trained musician/composer as well as Muse Software's first employee and lead programmer, he provided ONLY the music (not code) on two John F. Kutcher-programmed C64 titles. A separate tag, `Silas_Warner_Digi`, covers his own Wolfenstein games' digitized-speech routine — not this card. Player-ID-fingerprinted across 2 files, both his own.",
  "csdb_release": null,

  "memory": { "load_address": "CONFIRMED via SIDdecompiler disassembly + reassembly of Rescue_Squad.sid (real HVSC file, PSID v2, 7 subtunes): load $c000, matching the -v2 memory-touch map's own Start: address exactly (no gotcha-40 drop/offset) — End: $cfac, essentially full-file coverage of the 4013-byte payload.", "zero_page": "CONFIRMED: $a2 ('za2', current note/transpose value used by the ADSR-decay-and-retrigger logic), $fc/$fd ('zfc'/'zfd', the ZP indirect pointer — (zfc),Y — into the currently-playing voice's note-data stream).", "layout": "CONFIRMED from disassembly: $cb40/$cb41 is a 7-entry lo/hi order-list-start-address table, one pair per subtune (values <lc000/>lc000 ... <lc760/>lc760), selected by subtune index at init. lc000-lc7ff-ish holds packed note-stream data (order lists + patterns interleaved, format not further decoded). $lce90 (8-bit oct/semitone adjust table) and $lcef1 (16-entry SID-frequency-low-byte table, paired with a corresponding high-byte table) are read via plain `lda table,Y` in the per-voice play routine at $cc99-$cd50. $cb80-$cb9f-ish is per-voice working state (current stream pointer lo/hi, sustain flag, etc.)." },
  "entry": { "init": "CONFIRMED: $cb02.", "play": "CONFIRMED: $cfa8 (called once per frame via the standard PSID IRQ harness — this is a normal PSID init/play pair, not an RSID self-installing-IRQ driver, on the Rescue_Squad file at least)." },
  "speed": "Standard once-per-frame (50Hz PAL IRQ) PSID play call — no evidence of a multi-speed/raster-split scheme found in the disassembly.",
  "data_format": { "order_list": "A 7-entry per-subtune lo/hi start-address table at $cb40/$cb41 selects one of 7 note-stream regions ($c000, $c130, $c210, $c350, $c480, $c610, $c760); within a subtune, voice-1 and voice-2's own stream start addresses are DERIVED from voice-0's via a bit-twiddle on the low byte of the address (`ora #$03` / `eor #$05` — see quirks: this is a genuine page-relocation-lock in the original 1983 code, not a disassembly artifact) rather than being separately tabulated.", "patterns": "TODO — packed note-stream byte format not decoded beyond 'read one byte via (zfc),Y, values >=$61 branch to a secondary command dispatcher at $cd56, values <$61 are treated as note/duration data feeding the two frequency tables'.", "instruments": "TODO — no separate instrument/wavetable structure identified; ADSR bytes ($cbc0-ish per-voice) appear to be set directly rather than via an instrument table.", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — a handful of $d417/$d418 writes per subtune in the traced sample; filter cutoff itself not written in the 100-frame/subtune-1 trace)" },
  "effects": { "encoding": "TODO — not yet decoded beyond the >=$61 command-byte branch noted under data_format.patterns.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE, a genuinely notable find: Silas S. Warner (18 August 1949 - 26 February 2004), Muse Software's FIRST EMPLOYEE, best known as the creator of Castle Wolfenstein (1981) and Beyond Castle Wolfenstein — a foundational stealth-game concept that directly inspired id Software's later Wolfenstein 3D and Return to Castle Wolfenstein, making Warner arguably the originator of an entire modern game genre's naming convention. Also worked at MicroProse (Silent Service, Red Storm Rising) and Virgin Games. This project's own DeepSID composer profile already independently carries `affiliation: 'MUSE Software'`, `active: '1984'`, matching birth/death years — consistent identification across sources, not asserted from name alone.",
    "GENUINELY A TRAINED MUSICIAN, not just a programmer credited on a music line by default: multiple sources describe him as 'a programmer, author and musician,' who composed classical-style works outside games ('Fugue for DRH,' 'Variations on Sonata in A' by Mozart) — this makes a real music credit biographically plausible, not a stretch.",
    "ON BOTH CONFIRMED FILES, HE PROVIDED MUSIC ONLY, NOT CODE: 'Rescue Squad' (1983, the traced file) and 'Space Taxi' (1984) were BOTH programmed by John F. Kutcher, a then-teenage/college-freshman developer at Muse — Warner, already the studio's senior figure, added the music/sound on both titles. C64-Wiki explicitly credits him with 'only music' on Space Taxi.",
    "A REAL SCOPE DISTINCTION FOUND, worth preserving precisely: this project's own composer folder for Silas Warner actually contains FOUR files across TWO separate player tags — this card's `Silas_Warner` tag covers ONLY Rescue Squad and Space Taxi (his conventional music driver), while a SEPARATE tag, `Silas_Warner_Digi` (not covered by this card), covers Castle_Wolfenstein.sid and Beyond_Castle_Wolfenstein.sid — almost certainly his own documented digitized-speech routine (the German guard voices in the Wolfenstein games were a real, pioneering Warner invention on the Apple II, later ported to C64). Two distinct player identities from the same person, not a scope error.",
    "NO CSDb SCENER PROFILE EXISTS — expected and unremarkable, matching every other purely-commercial 1980s US studio composer already carded in this KB: this project's own DeepSID profile shows `csdb_type: 'scener'`, `csdb_id: 0` (never matched). Individual releases DO have their own bare CSDb SID entries (ids 31401-31404), just no scener/group page.",
    "NO VGMPF PAGE WAS FOUND for Silas Warner specifically despite an explicit check — an unusual gap for a figure this well-documented elsewhere (Wikipedia, C64-Wiki, MobyGames); worth a follow-up direct-URL check in a future session, not treated as evidence of non-existence.",
    "Not confirmed in SIDId beyond the bare author field already known for this tag (no name field).",
    "SUPERSEDED CLAIM — a working relationship DOES exist, and it was found later: this card previously asserted 'No documented working relationship found to any other US commercial-studio composer already in this KB', having checked against [[ed-bogas-accolade]], [[ed-bogas-hakansson]], [[david-thiel]], [[kyle-johnson]], [[al-lowe]], [[paul-mudra]], [[rick-cardinali]], [[kenneth-arnold]], [[arti-haroutunian]]. That conclusion was correct for the composers then carded, but it is now FALSIFIED by [[ken-lagace]]: RED STORM RISING (1988, MicroProse) was CODED by Silas S. Warner (with Richard Orban and Sid Meier) and SCORED by Ken Lagace — a same-game, same-studio working relationship. The clue was already sitting on this card ('Also worked at MicroProse (Silent Service, Red Storm Rising)') and simply hadn't been connected. Lesson: this card's own 'no relationship found' was a statement about KB coverage at the time, not about the world.",
    "A STRONG THEMATIC PAIR with [[ken-lagace]], beyond the shared game: both cards document the IDENTICAL pattern — a US commercial-studio figure whose composer-named HVSC tag reflects MUSIC ONLY, NOT CODE. Warner: music-only on Kutcher-programmed Muse titles. Lagace: music-only on a MicroProse house driver he did not write. Note the neat inversion on Red Storm Rising itself, where Warner is on the CODE side and Lagace on the MUSIC side.",
    "VERIFIED (2026-08-07): Rescue_Squad.sid disassembles/reassembles 100.0000% byte-exact (SIDdecompiler `-r`) and traces register-write-exact against the real HVSC file. Because a 100%-byte-exact `-r` build makes a native trace-diff tautological (project precedent, e.g. music-processor's own agent notes), verification instead used the project's relocation-invariance control: rebuilding the identical disassembly at a different base and re-tracing it against the ORIGINAL file. A page-aligned control ($5000, delta -$7000) is 0/187 (subtune 1, 100 frames) and 0/451 (subtune 4, 300 frames) register-write-tuple-exact; a non-page-aligned control ($5137) diverges heavily from frame 1 on both subtunes (174/187 and 437/451 tuples). Root cause identified directly in the disassembly, not guessed: init ($cb02) derives voice-2's and voice-3's note-stream start address from voice-1's via `ora #$03`/`eor #$05` on the LOW BYTE of the (fully symbolic) order-list-table address — a genuine page-relocation-lock baked into the original 1983 machine code (the three voices' streams were hand-placed at addresses satisfying this bit relationship), not a reconstruction defect. This matches this project's own documented 'page-relocatable-only driver' precedent (several other verified cards hit the identical page-aligned/non-page-aligned split for analogous reasons) and is sufficient, together with the byte-exact native match, to reach `status: verified`."
  ],
  "sources": [
    "HVSC Musicians.txt ('Warner, Silas S. - USA'): local cache data/hvsc/Musicians.txt line 1808",
    "Local dataset: data/composers/silas-warner.json (DeepSID dump — affiliation, active year, birth/death dates, and the 4-file/2-tag split)",
    "Wikipedia — Silas Warner: https://en.wikipedia.org/wiki/Silas_Warner",
    "C64-Wiki — Silas Warner (music-only credit on Space Taxi): https://www.c64-wiki.com/wiki/Silas_Warner",
    "MobyGames — Silas S. Warner: https://www.mobygames.com/person/673/silas-s-warner/",
    "The Oasis BBS — 'Muse Software's C64 Legacy' retrospective: https://theoasisbbs.com/muse-softwares-c64-legacy-golden-years-episode-3/",
    "Blendo75 — Rescue Squad review (composer/coder credit): https://blendo75.blogspot.com/2014/07/c64-review-rescue-squad-c-1983-muse.html",
    "Wikipedia — Space Taxi: https://en.wikipedia.org/wiki/Space_Taxi",
    "Local dataset: 2 files tagged Silas_Warner, 1 composer (see knowledge/COVERAGE.md)",
    "This session's own disassembly/reassembly/trace-diff of local HVSC file MUSICIANS/W/Warner_Silas/Rescue_Squad.sid (SIDdecompiler.exe + 64tass + sidm2-sid-trace.exe) — 2026-08-07"
  ]
}
```

## Overview

The `Silas_Warner` tag is confirmed to be Silas S. Warner — creator of
Castle Wolfenstein, the foundational stealth game whose concept later
inspired the entire modern Wolfenstein franchise. Genuinely a trained
musician as well as a programmer, he provided MUSIC ONLY (not code) on
two John Kutcher-programmed Muse Software titles. Player-ID-
fingerprinted across 2 files, both his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
identity of a genuinely major figure in games history**, cross-sourced
across Wikipedia, C64-Wiki, MobyGames, and this project's own DeepSID
dump. Also notable: a **real, precisely-scoped tag split** — his own
folder holds two separate player identities (this card's conventional
music driver vs. a separate, uncarded `_Digi` speech routine), correctly
kept apart rather than merged.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). This session's
own disassembly of `Rescue_Squad.sid` (via `SIDdecompiler.exe -r`) is the
first RE work done on this player — see Verification below for the full
method and result. The note-stream/pattern encoding itself (beyond the
order-list table and the two frequency lookup tables) is still not
decoded; see `data_format` in the facts block for what is and isn't
known.

## Verification

**Byte-exact reconstruction + register-write-verified (2026-08-07) —
`status: verified`.** Disassembled a real HVSC `Silas_Warner` `.sid`
(`Rescue_Squad.sid`, PSID v2, load `$c000`, init `$cb02`, play `$cfa8`,
7 subtunes) with `SIDdecompiler.exe -a49152 -z -d -c -v2 -r`. The `-v2`
map's own Start: address matches the PSID load address exactly (no
gotcha-40 relocation issue). Reassembled with 64tass, no wrap warnings:
**100.0000% byte-exact** (0/4013 payload bytes differ from the original
file).

Because a 100%-byte-exact `-r` reassembly makes a same-address trace-diff
tautological, verification used a relocation-invariance control instead
(rebuild the identical disassembly at a different base, re-trace against
the untouched original file): a page-aligned control (`$5000`) is
**register-write-tuple-exact** — 0/187 diverging tuples over 100 frames
on subtune 1, 0/451 over 300 frames on subtune 4 — while a non-page-aligned
control (`$5137`) diverges heavily from frame 1 on both subtunes (174/187,
437/451). The cause is a genuine page-relocation-lock in the *original*
1983 code (init derives voice-2/voice-3's note-stream pointers from
voice-1's via `ora #$03`/`eor #$05` on the address's low byte), confirmed
directly in the disassembly text, not inferred — this project has several
other cards reaching `verified` on an identical page-locked-driver
signature. Combined with the byte-exact native match, this is a real,
citable register-write verification.

**Not covered by this pass:** `Space_Taxi.sid` (RSID, load `$9800`, init
`$9900`, play `$0000` — self-installing-IRQ, a structurally different
entry-point convention from Rescue_Squad's plain PSID init/play pair) was
not attempted; a quick look at its init shows it setting `$0314/$0315`
before `JSR $cb02` (an address inside its own payload, unrelated to
Rescue_Squad's identically-numbered but different-file init address) —
whether it shares Rescue_Squad's engine internals is unconfirmed. The
note-stream/pattern byte encoding (`data_format.patterns`/`instruments`)
is also still undecoded past the order-list table and frequency lookups.
Next step for a future pass: disassemble `Space_Taxi.sid` (likely needs
an `-I`/`-P` override per this project's own RSID-with-play-$0000
precedent, since its play routine is IRQ-installed rather than a plain
PSID vector) and confirm or rule out a shared engine with Rescue_Squad.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset cache,
Wikipedia (2 pages), C64-Wiki, MobyGames, The Oasis BBS, and Blendo75.
