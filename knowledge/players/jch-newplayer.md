# JCH NewPlayer

```json
{
  "id": "jch-newplayer",
  "name": "JCH NewPlayer",
  "aliases": ["JCH_NewPlayer", "NewPlayer", "NP", "JCH_NewPlayer_V0x", "JCH_NewPlayer_V1", "JCH_NewPlayer_V2", "JCH_NewPlayer_V3", "JCH_NewPlayer_V4", "JCH_NewPlayer_V5", "JCH_NewPlayer_V6", "JCH_NewPlayer_V7", "JCH_NewPlayer_V8", "JCH_NewPlayer_V9", "JCH_NewPlayer_V10", "JCH_NewPlayer_V11", "JCH_NewPlayer_V12", "JCH_NewPlayer_V13", "JCH_NewPlayer_V14", "JCH_NewPlayer_V15", "JCH_NewPlayer_V17", "JCH_NewPlayer_V18", "JCH_NewPlayer_V19"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "1988 (17-23 July 1988: the v00.xx series, the TRUE start of the line — see the v00 quirk; then the pre-editor V1-V4 phase; November 1988: editor v1 series; December 1988: editor v2 series, with sequences; January 1989: v05.02, the first editor-paired version)",
  "status": "in-progress",
  "platform": "Native C64 (runtime player; authored with the JCH Editor)",
  "csdb_release": 14037,

  "memory": {
    "load_address": "$1000 (V13, DISASSEMBLY-CONFIRMED 2026-07-18 via SIDdecompiler.exe on Abaddon/Apina.sid — see Disassembly notes). Per-file for relocated/per-game builds; likely $1000 for the packed convention generally but not yet checked on other versions.",
    "zero_page": "$FB/$FC only (V13, DISASSEMBLY-CONFIRMED) — a single indirect pointer pair reused across all 3 voices in turn (saved/restored via push/pull around each voice's play-routine slice), not three separate per-voice pointers. Not yet confirmed on other versions.",
    "layout": "V13: $1000 init vector, $1003 play vector, $1006-$101f small per-voice working-value block (partially unresolved — see Disassembly notes), $1020 a flag byte + embedded ASCII credit text (same $1020 credit-block convention as the v00 series' quirk above), code from ~$1040, data tables (order-list, pattern/instrument) from ~$1700 onward. TODO for other versions."
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
  external, never-disassembled spec for NP20, not its own RE work.
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

**NOT yet verified — an honest gap, not a guess.** Reassembling the
disassembly (64tass) and byte-comparing the result against the original SID's
own data payload found the two match for the first ~10 bytes and diverge
across roughly 73 of 3,921 bytes total, concentrated in two regions: $100b-
$101f (immediately after the `init`/`play` vectors — likely a small working-
table SIDdecompiler's default 30,000-frame trace didn't fully resolve, since
several of those addresses show up elsewhere as per-voice constants) and a
handful of bytes around $172c/$1744 (the per-voice pointer/counter tables
`init` writes into — plausibly a runtime snapshot difference rather than a
disassembly error, since these are working RAM, not static code). This means
the reconstruction is **not yet register-write-identical to a real trace** —
diffing it against a fresh `trace_sid` of the same file showed real
divergence starting at frame 0, not just cosmetic timing noise. Closing this
gap means resolving those ~73 bytes specifically (compare against a second
JCH_NewPlayer_V13 file if one exists, or single-step the SIDdecompiler
"Unreferenced data" regions in `mcp-c64`/vice's monitor to see if they're
reached via a code path the default trace missed), not restarting from
scratch — the entry points, ZP, and order-list table above are solid.

Next step for whoever picks this up: pick one high-usage version (V20 is a
good target — 1,616 files, and SIDM2 already has a partial "NP20 Driver" at
70-90% frame accuracy per its own `CONTEXT.md` — worth checking whether that
existing driver's gap analysis explains the same class of byte discrepancy
found here) and follow the [playbook](../playbooks/disassemble-a-player.md).
The `successor_of: jch-oldplayer` edge is a lead: diffing OldPlayer vs
NewPlayer routines is often the fastest way to understand what "New" changed.

## Verification

**Playback + entry points LOCALLY CONFIRMED via trace (2026-07-18) — `status:
in-progress`.** Two real HVSC `JCH_NewPlayer`-tagged files were run through
`sidm2-siddump`'s `trace_sid` (the cycle-accurate zig64 tracer): `JCH/42nd_Street.sid`
(init `$1000`, play `$1003`, **223 register writes / 50 frames**) and
`Abaddon/Apina.sid` (JCH_NewPlayer_V13; init `$1000`, play `$1003`, plays
cleanly). Both confirm the documented standard packed convention (load `$1000`,
init at the load address, play at init+3) and produce coherent per-frame
three-voice output — steady pulse-width ramps on voice 1, oscillating
(vibrato-style) frequency on voice 2, and filter-cutoff sweeps — i.e. the player
demonstrably runs and behaves as a real music driver, consistent across two
versions and two composers.

**Why this is NOT `verified`.** This project's `verified` bar is stricter than
"it plays": it requires a *reconstruction* of the player (from disassembly or
published source) that assembles, runs, and produces a **register-write-identical
trace** to a real file (the bar the 7 verified cards met, e.g. [[laxity-newplayer]]
at ~99.9% frame accuracy). JCH NewPlayer has **no public source**, so closing the
loop means disassembling the routine from the binary and reconstructing it — which
is exactly the **SIDM2** task this family sits at the top of the priority list for
(see `docs/SIDM2-INTEGRATION.md`; [[cheesecutter]]'s GPL source, which declares
"Based on JCH NP 21.G4 by Laxity/VIB", is a documented lever into it). The trace
above gives SIDM2 the reference target to diff a future reconstruction against.

Seeded facts (identity, version history, spec table) remain from cached DeepSID
`players.json` (the JCH Editor entries), SIDId, and CSDb release 14037.

## Sources

- DeepSID `data/players.json` → "JCH Editor v2.x" / "v3.x" (JCH, Vibrants;
  version mapping in their `noteworthy` fields).
- SIDId `sidid.nfo` → `JCH_NewPlayer` (author JCH, CSDb 14037); also
  `JCH_OldPlayer`, `JCH_Protracker`, and the forks `Laxity_NewPlayer_V21`,
  `Glover_NewPlayer_V21`, `(Dane_NewPlayer)` "JCH-editor 3.1 + NP22-25".
- CSDb release 14037 → "JCH Editor V3.04 20G4", 1991, Vibrants, Code by JCH.
