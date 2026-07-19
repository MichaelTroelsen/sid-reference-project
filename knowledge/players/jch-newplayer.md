# JCH NewPlayer

```json
{
  "id": "jch-newplayer",
  "name": "JCH NewPlayer",
  "aliases": ["JCH_NewPlayer", "NewPlayer", "NP", "JCH_NewPlayer_V0x", "JCH_NewPlayer_V1", "JCH_NewPlayer_V2", "JCH_NewPlayer_V3", "JCH_NewPlayer_V4", "JCH_NewPlayer_V5", "JCH_NewPlayer_V6", "JCH_NewPlayer_V7", "JCH_NewPlayer_V8", "JCH_NewPlayer_V9", "JCH_NewPlayer_V10", "JCH_NewPlayer_V11", "JCH_NewPlayer_V12", "JCH_NewPlayer_V13", "JCH_NewPlayer_V14", "JCH_NewPlayer_V15", "JCH_NewPlayer_V17", "JCH_NewPlayer_V18", "JCH_NewPlayer_V19"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "1988 (17-23 July 1988: the v00.xx series, the TRUE start of the line — see the v00 quirk; then the pre-editor V1-V4 phase; November 1988: editor v1 series; December 1988: editor v2 series, with sequences; January 1989: v05.02, the first editor-paired version)",
  "status": "verified",
  "platform": "Native C64 (runtime player; authored with the JCH Editor)",
  "csdb_release": 14037,

  "memory": {
    "load_address": "$1000 (V13, DISASSEMBLY-CONFIRMED 2026-07-18 via SIDdecompiler.exe on Abaddon/Apina.sid — see Disassembly notes). Per-file for relocated/per-game builds; likely $1000 for the packed convention generally but not yet checked on other versions.",
    "zero_page": "$FB/$FC only (V13, DISASSEMBLY-CONFIRMED) — a single indirect pointer pair reused across all 3 voices in turn (saved/restored via push/pull around each voice's play-routine slice), not three separate per-voice pointers. Not yet confirmed on other versions.",
    "layout": "V13: $1000 init vector, $1003 play vector, $1006-$101f small per-voice working-value block (RESOLVED 2026-07-19 — self-modified/working-storage bytes, see Verification), $1020 a flag byte + embedded ASCII credit text (same $1020 credit-block convention as the v00 series' quirk above), code from ~$1040, data tables (order-list, pattern/instrument) from ~$1700 onward, a per-voice pointer/counter working block at $172c-$17c0 (also self-modified — see Verification). TODO for other versions."
  },
  "entry": {
    "init": "$1000 in the standard packed convention (load $1000, init at the load address) — TRACE-CONFIRMED 2026-07-18 on two real HVSC files (JCH/42nd_Street.sid V-tag, Abaddon/Apina.sid V13), both init $1000; DISASSEMBLY-CONFIRMED on Apina.sid the same day (SIDdecompiler shows `$1000: jmp init` landing on the real init routine at $1040). Relocated/per-game builds place it elsewhere; read the PSID header per file.",
    "play": "$1003 in the standard packed convention (init+3) — TRACE- and DISASSEMBLY-CONFIRMED on the same file (`$1003: jmp play` landing on $10da). Single frame call; multispeed variants exist. Per-file for relocated builds."
  },
  "speed": "TODO: 1x + multispeed",

  "data_format": {
    "order_list": "V13 (DISASSEMBLY-CONFIRMED, not yet trace-verified): a per-voice 2-byte (lo/hi) pointer table at $17d3, copied by init into a working 'current position' pointer (at $172c/$172f per voice) and a separate 'restart on loop' pointer (at $1732/$1735 per voice) — so looping resets to a stored restart point rather than re-deriving it. TODO for other versions.",
    "patterns": "Contiguous sequence stacking; JCH Editor v3 exposes 114 patterns up to 96 rows. V13 (DISASSEMBLY-CONFIRMED, partial): sequence bytes are read indirectly via (zfb),Y; top-bit-set bytes are note/duration data, with $7E/$7F reserved as special markers (loop/end) distinct from note data — not yet fully mapped byte-by-byte.",
    "instruments": "32 instruments. V13 (DISASSEMBLY-CONFIRMED, partial): one command class ($A0-$BF range, masked #$3f) indexes a 64-entry table at $1930/$192f — plausibly an instrument or arpeggio table; not yet confirmed which.",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: per version command encoding",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": ["jch-oldplayer"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "PRE-EDITOR V1-V4 PHASE, CONFIRMED via JCH's own blog (a first-party source, 'Chordian' being his later handle): per his own computer-timeline post, he 'started coding the first versions of NewPlayer (no editor yet)' in JULY 1988 — genuinely hand-authored, with no tracker/editor tool existing yet. The editor v1 series (test tunes only, no sequences) followed in November 1988, and the FIRST editor-paired, effectively 'released' version was NewPlayer v05.02 in January 1989. So V1-V4 (7 files under the tag 'JCH_NewPlayer_V1', all composed by JCH himself) are genuinely earlier, pre-tooling development versions — not merely an earlier release date guess, a precisely dated (~Jul-Dec 1988) predecessor phase to the V5+ line this card already documents. 'Beatbassie' (one of the traced V1 files, released 8 Aug 1988 per CSDb/Demozoo) falls squarely inside this window, consistent with being genuine V1-generation material. No CSDb release exists for V1-V4 as a standalone product (unlike the V18-V20/editor-era releases) — consistent with these being informal, pre-editor, hand-typed versions never packaged as a tool.",
    "This is the RUNTIME PLAYER; the authoring front-end is the JCH Editor (curated 'JCH Editor v2.x' 1988-90 and 'v3.x' 1990-91). Editor v2 shipped NewPlayer V5-V17; editor v3 shipped V18-V20 (+ Laxity NP V21).",
    "Versioned family: each 'JCH_NewPlayer_Vn' is a distinct tag. CORRECTED COVERAGE — the data actually holds v00 (as JCH_NewPlayer_V0x), V1-V15 and V17-V20. NOT 'V9..V20' as this quirk previously said, and note JCH_NewPlayer_V16 DOES NOT EXIST (no signature in sidid.cfg, no row in DeepSID's lookup — don't expect the tag). The bare 'JCH_NewPlayer' tag is the CATCH-ALL (92 files: group signature matched, no sub-signature matched), not a version.",
    "ALIAS BOOKKEEPING FIXED (2026-07-16) — this card previously listed the HUMAN-READABLE STRING 'JCH NewPlayer V5-V20' in its aliases array where MACHINE-READABLE TAGS belong. Nothing matched it, so V5-V19 all read as UNCARDED against the very card that covers them: 1,769 files (JCH_NewPlayer_V14 alone is 683 files / 70 composers; V15 308; V17 228; V9 125; V18 105; V10 79; V13 56; V19 52; V5 39; V12 33; V6 29; V8 17; V11 14; V7 1). They are now claimed individually. V20 is deliberately NOT here — it has its own card, [[jch-newplayer-v20]]. V16 is absent because IT DOES NOT EXIST (no sidid.cfg signature, no DeepSID lookup row). LESSON: an aliases array is machine-readable data, not prose — a range string in it silently under-reports coverage, and did so here by ~3% of the entire collection.",
    "FOLLOW-UP WORTH DOING: several of these versions are now large enough to arguably deserve their own sub-cards on the V20 precedent — V14 (683 files, 70 composers) especially, then V15 (308) and V17 (228). They are aliased here for now because NO version-specific format or memory-map knowledge exists for them yet (see the threshold quirk below). If someone disassembles V14, split it out.",
    "WHEN A VERSION EARNS ITS OWN SUB-CARD — a threshold worth writing down, derived from the V0x decision: split a version out only when there is version-specific FORMAT or MEMORY-MAP knowledge needing a home. [[jch-newplayer-v20]] qualified (1,616 files, a dedicated SF2 driver 'np20', an external Codebase64 memory-map spec, SIDM2 accuracy research). V0x did NOT (4 files, no editor, no CSDb release, no external spec, no data-format documentation) — its card would have been 'released' plus quirks and nothing else, and splitting it would fragment the single most important origin story in this KB across two files. So V0x is an ALIAS here, and its findings are the quirk below.",
    "THE v00.xx SERIES IS THE TRUE START OF THE NEWPLAYER LINE — 17-23 July 1988, and the evidence is INSIDE THE SID FILES. Each of JCH's three v00 tunes embeds a 64-byte ASCII block at $1020 (two 32-char lines) carrying its own title, date and player version: Simple_Tune = 'LITTLE INTROTUNE BY JCH 17/07-88' + 'JCH NEWPLAYER 00.11 BY JCH/WIZAX'; Imagination = 'IMAGINATION MADE BY JCH 22/07-88' + 'JCH NEWPLAYER 00.17 BY JCH/WIZAX'; Problems = 'PROBLEMS... MADE BY JCH 23/07-88' + 'JCH NEWPLAYER 00.19 BY JCH/WIZAX'. Three different minor versions across six days — JCH iterated ~8 minor versions in under a week. That is WHY the signature is wildcarded 'V0x': it covers the whole v00.xx series, not one build. The x is empirically a wildcard, not merely a naming convention.",
    "V0x IS NOT A FUZZY CATCH-ALL DESPITE THE WILDCARD — it is a precise byte signature. A reimplementation of SIDId's matcher scanned all 61,157 HVSC 85 files: exactly 4 match, the same 4 DeepSID tags. (The same reimplementation reproduced DeepSID's tag on 190/190 early-JCH files, so the matcher is trustworthy.) Structurally, (JCH_NewPlayer_V0x) is a parenthesized SUB-signature inside the JCH_NewPlayer group in sidid.cfg — same mechanism as V1..V20 — but it sits AFTER V20, out of numeric order, immediately before (Dane_NewPlayer): appended later, not part of the ordered version run.",
    "'NO EFFECTS IN THE PLAYER' IS v00'S DEFINING TECHNICAL PROPERTY — first-party, from JCH's own STIL comments. Simple_Tune: 'This was the first tune I did in my own player after leaving Laxity's player. There are absolutely no effects other than pure notes in this song.' Imagination: 'The second tune made in the NewPlayer v00 series, no effects in the player.' Problems: 'Last experiment in the v00 series without effects.' Corroborated by size: v00 files are 905-1020 bytes TOTAL (player + data) vs 1699-3037 for V1 — roughly half the smallest V1 file. STIL also gives the series' complete internal ordering: Simple_Tune (first) -> Imagination (second) -> Problems (last).",
    "v00 ENTRY POINTS (verified by inspection): all 4 files load $1000, with $1000: JMP $1060 (init) and $1003: JMP <play>. INIT IS $1060 IN EVERY v00 BUILD. Play varies by minor version: v00.11 -> $10E8; v00.17 -> $1103; v00.19 -> $10FA (v00.19 is SMALLER than v00.17 — the code shrank). Layout: $1006-$101F small header/data block; $1020-$105F the 64-byte credit text; $1060 init; play at $10E8/$10FA/$1103.",
    "THE V0x SIGNATURE IS STRUCTURALLY UNLIKE EVERY OTHER JCH_NewPlayer_Vn SIGNATURE: the others all match playback-core code (table indexing, sequence stepping, DE/FE counters), but V0x matches the INIT/hard-restart routine, at $1093-$10AE in v00.11 — clear SID $D400-$D418 (TYA / STA $D400,Y / INY / CPY #$19 / BNE), then LDA #$88 (noise+test) -> $D404/$D40B/$D412, then a per-tune AD value -> $D405/$D40C/$D413. The signature's 'A9 ??' wildcard is that AD immediate (LDA #$20 in v00.11) — which is exactly why it is wildcarded.",
    "SIDId's .nfo HAS NO VERSIONED JCH TAGS AT ALL — only JCH_NewPlayer, JCH_OldPlayer, JCH_Protracker. Every _Vn tag comes from sidid.cfg's sub-signatures, NOT the .nfo. That is why V0x has no author/year/reference to enrich with, and it is a distinction that matters for other cards too: '.nfo has no entry' does NOT mean 'SIDId doesn't know this player'.",
    "SCORPIO WAS NOT AN OUTSIDE COMPOSER — the obvious question ('why would an outsider have a version-0 JCH player?') dissolves. Scorpio = Thomas Villadsen, Denmark, b. 1972-04-03, CSDb scener 6154. He was JCH's GROUPMATE IN WIZAX during exactly the window the v00 series existed: both JCH (CSDb 626) and Scorpio were in Wizax 6-1988 -> 8-1988 — a byte-for-byte identical membership window — and the v00 tunes are dated 17-23 July 1988, dead centre of it, bylined 'BY JCH/WIZAX'. They shared four groups total (Galaxy, 2000 A.D., Wizax, Channel 42). All 6 of Scorpio's HVSC files use JCH players exclusively (V0x x1, V5 x2, V6 x2, V15 x1) — he followed JCH's player line for years.",
    "SCORPIO'S COPY HAS JCH'S CREDIT TEXT ZEROED OUT: Flexible.sid's $1020-$105F is all $00, while keeping the 64-byte region reserved. Its exact minor version is therefore unrecoverable from the text — but the CODE pins it: $1060-$129F is 99.0% byte-identical to Simple_Tune (570/576 bytes), identical init ($1060) and play ($10E8), so it is a v00.11-generation build. The 6 differing bytes are per-tune parameters ($10AA is the AD immediate the signature wildcards). WHO zeroed it and WHY is unknown (Scorpio, JCH, or a later packer) — no source. That it was transferred during Wizax is INFERRED (strongly supported by the exact group overlap and the player existing only in that window), not stated by any source.",
    "DATA-QUALITY NOTE relevant to lib/hvsc.js's group-suggestion confidence: HVSC's Musicians.txt lists Scorpio's groups as '2000 A.D. / Channel 42 / Starion' — OMITTING Galaxy and Wizax, i.e. the one group that explains this entire story. Also DeepSID's profile for Scorpio says active: 1990; CSDb says 1987-1989 and his files are 1988-89.",
    "ORIGIN of the 'contiguous sequence stacking' track system later adopted by X-SID, SID Factory (I/II) and the NewPlayer forks.",
    "Widely forked: Laxity NewPlayer V21 (2006), Glover NewPlayer V21 (2000), Dane NewPlayer V22-25 (2011) — those cards should point back here via derives_from.",
    "Exclusive to the Vibrants group; the JCH Editor leaked ~1990-91 and was later released as freeware."
  ],
  "sources": [
    "deepsid:players.json — 'JCH Editor v2.x' (used for NewPlayer V5-V17) and 'JCH Editor v3.x' (used for NP V18-V20 + Laxity NP V21)",
    "sidid:JCH_NewPlayer (author JCH, csdb release 14037); JCH_OldPlayer, JCH_Protracker also by JCH",
    "csdb:release/14037 — 'JCH Editor V3.04 20G4', 1991, released by Vibrants, Code by JCH",
    "JCH's own blog / computer timeline (first-party source for the pre-editor V1-V4 phase, Jul 1988-Jan 1989): https://blog.chordian.net/computer-timeline/",
    "CSDb/Demozoo — Beatbassie (8 Aug 1988, solo JCH credit, a traced V1-era file): https://demozoo.org/productions/tagged/jch-player/",
    "Local dataset: 7 files tagged JCH_NewPlayer_V1, 1 composer (JCH himself)"
  ]
}
```

## Overview

JCH NewPlayer is Jens-Christian Huus's C64 music player routine (from 1988),
the runtime paired with the **JCH Editor**. It is the origin of the
"contiguous sequence stacking" track system that propagated across a large part
of the Danish SID scene — [X-SID](../players/), [SID Factory](sid-factory.md)
and [SID Factory II](sid-factory-ii.md) all descend from its sequence model,
and it was forked directly as Laxity/Glover/Dane NewPlayers. It succeeded JCH's
earlier "OldPlayer".

## Quirks & gotchas

- **Player vs editor.** The `JCH_NewPlayer_Vn` tags on SID files name the
  *player*; the curated "JCH Editor v2.x/v3.x" entries are the *editor* that
  produced them. Editor v2 → NewPlayer V5–V17; editor v3 → V18–V20 (+ Laxity
  V21). Keep the two straight.
- **Versions are distinct players.** V9…V20 each appear as their own tag in the
  file data (and rank among the most-used tools overall). [`jch-newplayer-v20.md`](jch-newplayer-v20.md)
  is now that sub-card — still mostly `TODO`, since SIDM2 only has an
  external, never-disassembled spec for NP20, not its own RE work. V13 is the
  one version with a full disassembly + register-write-exact reconstruction
  (see Disassembly notes / Verification) — the rest of the family's
  memory-map/format claims are trace-confirmed only, not reconstruction-confirmed.
- **Hub of a lineage.** This is the graph's root for the track-system family —
  most edges point *toward* it, not away.

## Disassembly notes

**First real disassembly pass (2026-07-18), on `Abaddon/Apina.sid`
(JCH_NewPlayer_V13), via SIDM2's `tools/SIDdecompiler.exe`** (a genuine 6502
disassembler for SID players — this project's own filesystem can reach it
directly at `C:\Users\mit\claude\c64server\SIDM2\tools\SIDdecompiler.exe`, no
separate SIDM2 session needed). This is the first attempt at going beyond
trace-only confirmation toward an actual reconstruction.

**Confirmed via disassembly (not just trace) this pass**:
- Entry points **exactly match the PSID header and the earlier trace**: `init`
  is a `jmp` at $1000 landing on the real init routine at $1040; `play` is a
  `jmp` at $1003 landing on the real play routine at $10da.
- **Zero page**: only `$FB`/`$FC` (named `zfb`/`zfc` in the disassembly), used
  as an indirect pointer into per-voice sequence/pattern data (`lda (zfb),Y`);
  saved/restored around each voice's processing in `play` via push/pull, so
  the same two ZP bytes serve all three voices in turn rather than three
  separate pointer pairs.
- **Per-voice order-list table** at $17d3 (2 bytes low/high per voice), copied
  by `init` into working pointers at $172c/$172f (current) and $1732/$1735
  (restart-on-loop) for each of the 3 voices.
- **Command-byte encoding partially decoded** from the play routine's
  branching on the byte read via `(zfb),Y`: top-bit-set values are note/
  duration data (branches differently for `$00`, `$7E`, `$7F` as special
  markers); `$80-$9F` and `$A0-$BF` ranges are separately masked and dispatched
  as distinct command classes (the routine at `l11c6` masks `#$3f` and indexes
  a 64-entry table at $1930/$192f for one class — likely an instrument or
  arpeggio table).

**GAP CLOSED (2026-07-19) — the ~73-byte divergence was the project's own
well-known "SIDdecompiler default-trace-window drifted working-storage
table" pattern (already closed on `dmc`, `cheesecutter`, `roland-hermans`,
`sidwizard` this same batch), not a disassembly error.** Re-disassembled
`Abaddon/Apina.sid` fresh with `-v2` (memory-touch map) and confirmed every
one of the 73 diverging byte addresses ($100b-$101f, $172c-$17b9 — a wider
span than the card's earlier "$172c-$1744" estimate, since the earlier pass
only inspected the first cluster) is marked `+` (read+write) or `w`
(write-only) in the emulator's own touch map — i.e. self-modified/working
RAM the decompiler's default 30,000-call trace snapshotted post-execution,
not the file's pristine cold-start bytes. Patched the reassembled `.asm`'s
`.byte` directives at exactly those addresses back to the pristine original
SID-payload bytes (script walks the `.asm`'s own `l<hex>` labels to compute
each `.byte` line's true address — see `patch_asm.js` in scratchpad),
reassembled, and the byte-diff dropped from 73/3,915 differing bytes to
**0/3,915 (100.0000% byte-exact)** over the region SIDdecompiler's model
actually covers ($1000-$1f4a). Six trailing bytes of the real 3,921-byte SID
payload ($1f4b-$1f50, all `$FF`) sit outside that touched range entirely (the
`-v2` map's own "End: $1f4a" is one byte before them) and are silently absent
from the reassembly — same "genuinely never touched, by anyone, ever"
tail-padding pattern as this project's `future-composer` card, not a real
data gap (all-`$FF` filler, not code or a table).

**Confirmed on a SECOND independent V13 file, `DRAX/Church.sid`** (different
composer, 4,062-byte payload) using the identical method (same two patch
ranges, `$1006-$1020;$172c-$17c0`): 68 diverging bytes before patching, all
in the same two address regions, all `-v2`-map `+`/`w`-marked; **0/4,062
(100.0000% byte-exact) after patching** — the full payload this time, no
trailing-tail caveat. Two files, two composers, same player version, same
patch ranges, same result: this is not a one-file coincidence.

**Trace-diff (register-write comparison), both files, 300 frames via
`sidm2-sid-trace.exe`** (init `$1000`, play `$1003` on both, per the PSID
header): Apina.sid — 2,603 register-write lines identical between original
and patched reconstruction (the only 2 differing lines across the whole
300-frame log are the tool's own echoed input filename, not a register
write). Church.sid — 2,829 register-write lines identical, same single
filename-line difference. **Both files: register-write-exact.**

This closes the V13 sub-case of this card's central open question — the
entry points, ZP, order-list table, and now the two working-storage regions
are all disassembly- and reconstruction-confirmed, not just traced. **This
verification covers V13 specifically** (56 HVSC files, 2 of them now
byte/trace-verified) — V0x and V1-V12/V14-V19 share the family's broad
structure (same entry-point convention, same trace behavior) but have NOT
been individually disassembled/reconstructed; treat their memory-map/format
claims as unverified-by-reconstruction until someone repeats this exact
process on a file from each.

Next step for whoever picks up another version: V20 has its own card
([[jch-newplayer-v20]]) and is the highest-value remaining target (1,616
files, SIDM2 already has a partial "NP20 Driver" at 70-90% frame accuracy per
its own `CONTEXT.md`) — worth checking whether that driver's existing gap
analysis is the same drifted-table class of issue closed here. The
`successor_of: jch-oldplayer` edge remains a good lead for a from-scratch
version: diffing OldPlayer vs NewPlayer routines is often the fastest way to
understand what "New" changed.

## Verification

**`status: verified` (2026-07-19) — a register-write-exact reconstruction of
JCH_NewPlayer_V13, confirmed on two independent real HVSC files.** Method
(per `knowledge/playbooks/disassemble-a-player.md` and the project's
`sid-player-verify` process):

1. Disassembled `Abaddon/Apina.sid` and `DRAX/Church.sid` (both
   JCH_NewPlayer_V13, load/init `$1000`, play `$1003` per PSID header) via
   `SIDdecompiler.exe -a4096 -z -d -c -v2` (decimal `4096` = `$1000`; `-v2`
   for the memory-touch map).
2. Reassembled with `64tass.exe -a --cbm-prg`. Byte-diffed the reassembled
   `.prg` payload against the pristine original SID payload (read via the
   `psid_header` method, never the decompiler's own post-execution
   snapshot): **Apina.sid — 73/3,915 bytes differed** (covering
   $100b-$101f and $172c-$17b9); **Church.sid — 68/4,062 bytes differed**
   (same two address ranges).
3. Cross-referenced every diverging address against the `-v2` memory-touch
   map: 100% of them are marked `+` (read+write) or `w` (write-only) — i.e.
   working-storage/self-modified bytes the decompiler's default 30,000-call
   trace snapshotted at a post-execution value, not the file's true
   cold-start bytes. This is the same class of gap this project closed on
   `dmc`, `cheesecutter`, `roland-hermans`, and `sidwizard`.
4. Patched the reassembled `.asm`'s `.byte` directives at those exact
   addresses back to the pristine original bytes, reassembled again:
   **both files reached 0 remaining byte differences** across the region
   SIDdecompiler's model covers (Apina: 0/3,915, the file's own last 6
   bytes — $1f4b-$1f50, all `$FF` — sit outside the decompiler's touched
   range entirely and are a separate, non-blocking tail-padding gap;
   Church: 0/4,062, the full payload, no such tail).
5. Traced both the original and the patched reconstruction with
   `sidm2-sid-trace.exe` (init `$1000`, play `$1003`, 300 PAL frames):
   **Apina.sid — 2,603 register-write lines identical**; **Church.sid —
   2,829 register-write lines identical.** The only difference in either
   diff was the tool's own echoed input filename (not a register write).

This is a genuine register-write-exact match, on two files by two different
composers, meeting the same bar as [[laxity-newplayer]] (~99.9% frame
accuracy) — here slightly better, at 100% over the covered region. **Scope
of this verification: JCH_NewPlayer_V13 specifically** (56 HVSC files total,
2 now individually confirmed). V0x and V1-V12/V14-V19 share this card's
broad structural claims (entry points, ZP convention) by trace only — they
have not been individually disassembled/reconstructed, and their
version-specific bytes (if any differ) remain unverified until someone
repeats this same process on a file from each. The earlier trace-only pass
(`JCH/42nd_Street.sid`, 223 writes/50 frames; kept below for its own record)
predates this disassembly work and is superseded by it for V13 but still
relevant evidence for the family's broader consistency.

**Prior trace-only pass (2026-07-18, superseded above for V13 specifically):**
Two real HVSC `JCH_NewPlayer`-tagged files were run through `sidm2-siddump`'s
`trace_sid`: `JCH/42nd_Street.sid` (init `$1000`, play `$1003`, 223 register
writes / 50 frames) and `Abaddon/Apina.sid` (JCH_NewPlayer_V13; plays
cleanly). Both confirmed the standard packed convention and produced coherent
per-frame three-voice output.

Seeded facts (identity, version history, spec table) remain from cached DeepSID
`players.json` (the JCH Editor entries), SIDId, and CSDb release 14037.

Exact byte-level patch table (durable, not scratchpad): `knowledge/players/reconstructions/jch-newplayer.md`.

## Sources

- DeepSID `data/players.json` → "JCH Editor v2.x" / "v3.x" (JCH, Vibrants;
  version mapping in their `noteworthy` fields).
- SIDId `sidid.nfo` → `JCH_NewPlayer` (author JCH, CSDb 14037); also
  `JCH_OldPlayer`, `JCH_Protracker`, and the forks `Laxity_NewPlayer_V21`,
  `Glover_NewPlayer_V21`, `(Dane_NewPlayer)` "JCH-editor 3.1 + NP22-25".
- CSDb release 14037 → "JCH Editor V3.04 20G4", 1991, Vibrants, Code by JCH.
