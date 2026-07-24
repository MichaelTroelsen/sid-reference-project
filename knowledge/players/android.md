# Android (Andrew Craigie player routine)

```json
{
  "id": "android",
  "name": "Android (Andrew Craigie player routine)",
  "aliases": ["Android"],
  "authors": ["Andrew Craigie (Android)"],
  "released": "1986-1987 per CSDb release dates (Scream and March of the Robots 1986; Synco Sid, Android's Return, Blown Fuse, Boppy Tune, Cherry Pink, Doctor Who, The 64's 2nd Choice, All the Young Dudes 1987); Band Aid and The Android Collection Volume 1 undated on CSDb",
  "status": "verified",
  "platform": "Appears to be a composer's own hand-coded 6502 tune-playing routine, not a distributed editor/tool — Player-ID fingerprints his personal routine byte-pattern rather than a released product. No CSDb tool/editor release or public source found for it.",
  "csdb_release": null,

  "memory": {
    "load_address": "$0801 in every sampled PSID header (BASIC-loadable: a minimal '10 SYS2076' loader stub occupies $0801-$081B, never itself executed as code — SYS jumps straight past it to init at $081C). Confirmed by disassembly+reassembly on 3 real files (Blown_Fuse, Cherry_Pink, Mystery_of_Arkham_Manor).",
    "zero_page": "zfb/zfc ($FB/$FC) — an indirect pointer pair used throughout (both init and play) to fetch per-voice note/pattern data via `lda (zfb),Y`. Confirmed identical on all 3 disassembled files.",
    "layout": "Confirmed via disassembly (3 files): init ($081C) zeroes two per-voice workspace blocks — a ~0x19-byte block just below the loaded code (Blown_Fuse: $1015-$102D; Cherry_Pink: $0DEA-$0E02ish; Mystery: $1077-$108F) and a larger ~0x70-byte block (Blown_Fuse: $1130-$119F; similar per-file) — then seeds each voice's initial pattern-pointer via 3x `jsr <seed-sub>` (X=$00/$07/$0E, one call per voice). These blocks are read-modify-write scratch space: their PRISTINE file bytes never survive to be read (self-modified at cold start), which is why a naive disassembly/reassembly byte-diffs 'wrong' there despite being trace-identical — see Verification section. IMPORTANT relocation gotcha (see quirks): for the 4 tunes that self-install their own IRQ (see entry.play), SIDdecompiler's own '-v2' memory map reports its lowest-touched ('Start:') address as $0314 — BELOW the file's $0801 load address — because init's `sta $0314`/`sta $0315` IRQ-vector install is the lowest address touched during emulation. Relocating with `-a` to anything other than that exact Start address (not the PSID load address) desyncs every subsequent label by the difference and produces a near-0% byte-diff that looks like a wrong build. For Mystery_of_Arkham_Manor (no self-install — see entry.play), Start is instead $081C (ABOVE load address, since the $0801-$081B BASIC stub bytes are never touched at all) — same rule, opposite direction."
  },
  "entry": {
    "init": "$081C in every PSID header sampled and confirmed by disassembly on 3 files (csdb.dk/sid/?id=7179, 7181, 7186, 7184, 43072) — same address across independently-released tunes spanning 1986-1987, one reused init entry point rather than per-tune hand assembly from scratch.",
    "play": "Confirmed by disassembly to be TWO different real mechanisms depending on the file, matching the PSID header's own play=$0000-vs-nonzero split noted previously: (1) SELF-INSTALLED IRQ (4 of 5 header-sampled tunes, PSID play=$0000): init does `sei / lda #<target / sta $0314 / lda #>target / sta $0315 / ... / cli / rts`, installing a custom IRQ handler at a PER-FILE address — confirmed $08F4 on Blown_Fuse.sid and $0892 on Cherry_Pink.sid (two different real addresses on two real files, i.e. genuinely not a fixed constant, only the mechanism is fixed). (2) DIRECT PSID PLAY VECTOR (Mystery_of_Arkham_Manor, PSID play=$08F6): init has no $0314 write at all; $08F6 is a real, independently-disassemblable play routine called directly by the PSID player each frame, structurally the same voice-update code as the self-install case, just reached differently."
  },
  "speed": "CIA #1 Timer A high byte ($DC05) is written once during init to a per-tune constant that sets the IRQ/playback rate: confirmed #$37 on Blown_Fuse.sid, #$20 on Cherry_Pink.sid, #$28 on Mystery_of_Arkham_Manor.sid — three different real values on three real files, i.e. tempo is a per-tune constant baked into each build, not a single fixed rate for the whole player family.",

  "data_format": {
    "order_list": "TODO: per-voice pattern-pointer table exists (workspace region seeded from a fixed table read via (zfb),Y at init — see memory.layout) but its on-disk encoding/structure was not reverse engineered this pass, only that it's read-write scratch, not literal song data",
    "patterns": "TODO: not reverse engineered — verification pass confirmed control flow and workspace regions, not the pattern/data byte format itself",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not reverse engineered this pass",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration is total: all 14 files tagged 'Android' in this dataset are by a single composer, Andrew Craigie, who used the handle 'Android' — no other composer in the dataset carries this tag (data/composers/android.json holds 15 records total: 14 tagged 'Android' plus 1, 'Band_Aid.sid', tagged 'Electrosound' instead; knowledge/COVERAGE.md ranks the family #21 uncarded, 14 files, single grouped raw tag 'Android'). This is the textbook 'personal routine, not a published tool' case flagged in the extraction template.",
    "SIDId's sidid.nfo entry for this tag has only an AUTHOR line ('Andrew Craigie (Android)') — no released/reference/comment fields (github.com/cadaver/sidid/blob/master/sidid.nfo, fetched 2026-07-17), consistent with no distributed release to cite.",
    "HVSC's Musicians.txt confirms identity and location: 'Android (Craigie, Andrew) - UNITED KINGDOM (SCOTLAND)' (data/hvsc/Musicians.txt line 121).",
    "HVSC's STIL.txt has biographical/production comments on two of his tunes but nothing about the player routine itself: Blown_Fuse.sid was used in the 'Willy the Worm 2' loader of Hades Nebula, and Mystery_of_Arkham_Manor.sid was written for an unreleased Melbourne House game ('Andrew was paid but then nothing of the game ever surfaced' - Frank Gasking) (data/hvsc/STIL.txt, MUSICIANS/A/Android section).",
    "No CSDb scener profile, tool/editor release, or public source repository was located for 'Android' as a player/routine during this research pass (web search + CSDb search, 2026-07-17) — could not confirm a release year, load address, or any runtime fact. Left as TODO rather than guessed.",
    "CSDb's own scener profile for Android (csdb.dk/scener/?id=12722, fetched 2026-07-23) confirms 13 credited releases 1986-1991 (music, one-file demos, one graphics credit 'Smurf', and a compilation 'The Android Collection Volume 1'), a Compunet ID ('DC4'), and production credits with groups The Level 99 Industries, Genesis, and The Digital Projects — still no tool/editor release or player-routine writeup among them, only tune releases.",
    "CSDb's per-tune SID technical-spec pages (csdb.dk/sid/?id=<n>) show a consistent PSID load address $0801 and init address $081C across every one of 5 independently-released tunes sampled (Blown_Fuse 1987, Cherry_Pink 1987, Scream 1986, Golden_Brown 1987, Mystery_of_Arkham_Manor undated) — spanning at least two release years, which is real (if indirect) evidence that Craigie reused one fixed player-routine build rather than hand-assembling a fresh routine per tune. PSID play address is $0000 (self-installed IRQ, no separate play vector) in 4 of the 5, but $08F6 in Mystery_of_Arkham_Manor, so play entry is not a single constant. This was the basis for raising the card from `stub` to `in-progress`.",
    "VERIFICATION PASS (2026-07-24): disassembled+reassembled+trace-diffed 3 real HVSC files (Blown_Fuse.sid, Cherry_Pink.sid, Mystery_of_Arkham_Manor.sid — chosen to cover both play-address conventions in the header data) with SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe. Hit gotcha 40/33 (project's own accumulated lesson list) immediately: for the 2 self-install-IRQ files, SIDdecompiler's own '-v2' memory map reports its lowest-touched address ('Start:') as $0314, not the PSID header's $0801 load address, because init's own `sta $0314/$0315` IRQ-vector write is the lowest address touched during emulation — relocating to $0801 (the file's own load address) instead of $0314 (the map's actual Start) produced a near-random ~1.6% byte-diff that looked like a completely different build. Relocating to the exact -v2 Start address instead fixed this: Blown_Fuse.sid reached 97.48% raw byte-diff, isolated entirely to two known workspace-zeroing regions (matching the disassembled init routine's own `sta l1015,X`/`sta l1130,X` zero-fill loops); patching those 85 bytes back to pristine file values (safe: the -v2 map marks every one of them write-touched, i.e. dead at cold start) reached 100.0000% byte-exact and traced identically to the original over 50 frames/456 register writes. Cherry_Pink.sid needed the same relocation fix and only 5 dead-workspace bytes patched, reaching 100.0000% byte-exact and trace-exact (409 writes/50 frames). Mystery_of_Arkham_Manor.sid does NOT self-install an IRQ (its init has no $0314 write at all — direct PSID play=$08F6 instead), so its Start address is $081C, ABOVE the $0801 load address this time (the $0801-$081B BASIC loader stub bytes are never touched by execution) — same underlying rule, opposite direction. After relocating to $081C, byte-diff was 98.05% over the 3433-byte overlap, again isolated to write-touched workspace; patching 67 bytes reached 100% over that overlap (2 trailing bytes at $1585-$1586 remain genuinely untouched by any traced execution, but they're literally $00 in the real file, i.e. harmless), and traced identically over 50 frames/269 register writes. All three files: register-write-exact. Status raised to `verified` on this basis — see Verification section below for the full breakdown."
  ],
  "sources": [
    "Local dataset: sidid.json byTag.Android (author only, no reference/comment) — data/sidid.json",
    "knowledge/COVERAGE.md — family rank #21, 14 files, single raw tag 'Android'",
    "data/composers/android.json — all 14 'player':'Android' file records, one composer",
    "SIDId source (matches local import): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "HVSC Musicians.txt (identity/country): data/hvsc/Musicians.txt, line 121 ('Android (Craigie, Andrew) - UNITED KINGDOM (SCOTLAND)')",
    "HVSC STIL.txt (production notes on two tunes, no player detail): data/hvsc/STIL.txt, MUSICIANS/A/Android section",
    "Web search confirming identity/era (no primary CSDb tool release found): https://www.youtube.com/watch?v=cRRJQSefZ_I (Cherry Pink, 1987), https://www.youtube.com/watch?v=9zjdmnkKVHs (March of Robots, 1987)",
    "CSDb scener profile (release list, groups, Compunet ID): https://csdb.dk/scener/?id=12722",
    "CSDb per-tune technical-spec pages (PSID load/init/play addresses): https://csdb.dk/sid/?id=7179 (Blown Fuse), https://csdb.dk/sid/?id=7181 (Cherry Pink), https://csdb.dk/sid/?id=7186 (Scream), https://csdb.dk/sid/?id=7184 (Golden Brown), https://csdb.dk/sid/?id=43072 (Mystery of Arkham Manor)",
    "This verification pass (2026-07-24): SIDdecompiler.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools\\SIDdecompiler.exe) disassembly + 64tass.exe reassembly + sidm2-sid-trace.exe (same SIDM2 tools dir) register-write trace-diff, on 3 real HVSC files: MUSICIANS/A/Android/Blown_Fuse.sid, Cherry_Pink.sid, Mystery_of_Arkham_Manor.sid"
  ]
}
```

## Overview

"Android" is the Player-ID tag for tunes by Andrew Craigie (handle "Android"),
a Scottish C64 musician active c.1986-1991 per his CSDb scener profile
(csdb.dk/scener/?id=12722), with all 14 dataset-tagged tunes dated 1986-1987.
Unlike most carded families, this one shows **zero composer spread**: all 14
files tagged `Android` in this dataset (`data/composers/android.json`) are by
Craigie himself — the textbook signal (per the extraction template's
composer-concentration rule) that this is a personal, hand-coded tune-playing
routine rather than a published editor or tool other composers picked up. No
CSDb tool/editor release and no source repository were found; SIDId's own
entry for this tag carries only an author name, no reference or comment.
CSDb's per-tune technical-spec pages gave real (if partial) Tier 3 signal
before any disassembly was attempted: 5 independently-sampled tunes spanning
1986-1987 all share PSID load address $0801 and init address $081C,
indicating Craigie reused one fixed player-routine build across tunes rather
than reassembling a fresh one each time. A follow-up verification pass
(2026-07-24) then disassembled, reassembled, and trace-diffed 3 real files
against SIDdecompiler + 64tass + a register-write tracer, reaching a
register-write-exact match on all 3 — see Verification below. Status is now
`verified`.

## Quirks & gotchas

See the `quirks` array. Two load-bearing identity facts carried over from the
earlier research pass: the **total single-composer concentration** (14/14
files, strong "personal routine" signal) and the **absence of any findable
CSDb tool/editor release, source, or technical writeup** for the routine
itself. The verification pass added real disassembly-confirmed facts: the
**$081C init address is a genuine shared entry point**, but **play is reached
two different ways** depending on the file — either a self-installed IRQ
vector (`sta $0314/$0315` in init, pointing at a per-file address — $08F4 on
Blown_Fuse.sid, $0892 on Cherry_Pink.sid) or, on Mystery_of_Arkham_Manor.sid,
a direct PSID play vector ($08F6) with no $0314 write in init at all. The
single most useful relocation gotcha for anyone re-disassembling one of the
remaining 11 files in this family: **always check SIDdecompiler's own `-v2`
"Start:" address before choosing `-a`** — for the self-install-IRQ files it's
$0314 (below the $0801 load address, because init's own IRQ-vector write is
the lowest address touched at runtime); for the direct-play file it's $081C
(above the load address, because the $0801-$081B BASIC stub is never
executed). Relocating to the PSID header's load address instead of the
disassembler's own reported Start produces a near-random ~1.6% byte-diff that
looks like a completely different, wrong build — this is gotcha 40/33 in the
`sid-player-verify` agent's accumulated lessons, confirmed here as a fourth
independent instance of that pattern.

## Disassembly notes

Disassembled, reassembled, and trace-diffed 3 real HVSC files this pass —
Blown_Fuse.sid, Cherry_Pink.sid, Mystery_of_Arkham_Manor.sid — with
`SIDdecompiler.exe` (`-z -d -c -v2`, `-I2076` for init, `-P<decimal>` for the
per-file real play address, `-a<decimal>` set to match SIDdecompiler's own
`-v2` "Start:" address, not the PSID header's load address — see quirks) and
`64tass.exe` for reassembly. Byte-diff against the real PSID payload, after
relocating correctly:

- **Blown_Fuse.sid**: 97.48% raw, isolated entirely to two workspace-zeroing
  regions ($1015-$102D, $1130-$119F-ish) that init's own
  `lda #$00 / sta lXXXX,X` loops zero-fill at cold start — i.e. the
  disassembler captured post-execution (zeroed) values instead of the file's
  pristine ones there. Patching those 85 bytes back to the real file's values
  (safe: SIDdecompiler's own `-v2` map marks every one write-touched) reached
  **100.0000% byte-exact**.
- **Cherry_Pink.sid**: 99.86% raw, same pattern, only 5 dead-workspace bytes
  to patch, reaching **100.0000% byte-exact**.
- **Mystery_of_Arkham_Manor.sid**: 98.05% raw over the 3433-byte overlap
  (relocated to $081C, its own Start address), same self-modified-workspace
  pattern; patching 67 bytes reached 100% over that overlap. Two trailing
  bytes at $1585-$1586 are never touched by any traced execution at all (a
  narrower gap than the self-modified-workspace case — see gotcha 9's
  "genuinely untouched tail" class), but they are literally `$00` in the real
  file, so this is a harmless, fully-explained 2-byte residual, not an
  unresolved defect.

Zero-page usage (`zfb`/`zfc` = `$FB`/`$FC`), the CIA1 timer speed constant
(`$DC05`, per-tune value), and the init/play control-flow structure are now
confirmed facts (see `memory`/`entry`/`speed` fields above). Data format
(pattern/instrument/table encoding) was NOT reverse engineered this pass —
still `TODO`, out of scope for a verify-only pass.

## Verification

**`status: verified`** (raised from `in-progress` this pass, 2026-07-24).
Disassembled with `SIDdecompiler.exe`, reassembled with `64tass.exe`, and
register-write trace-diffed with `sidm2-sid-trace.exe` (shelled out directly;
MCP `sidm2-siddump` tools were not registered in this session) against 3 real
HVSC files, chosen to cover both play-address conventions the PSID headers
show across the family:

| File | Byte-diff (raw) | Byte-diff (after patching dead workspace) | Trace-diff (50 frames) |
|---|---|---|---|
| Blown_Fuse.sid | 97.48% | 100.0000% (85 bytes patched) | exact, 456/456 writes |
| Cherry_Pink.sid | 99.86% | 100.0000% (5 bytes patched) | exact, 409/409 writes |
| Mystery_of_Arkham_Manor.sid | 98.05% | 100% over overlap (67 bytes patched; 2 trailing `$00` bytes untouched by execution, harmless) | exact, 269/269 writes |

Every patched byte sits inside an address range SIDdecompiler's own `-v2`
memory-touch map marks write-touched (self-modified workspace, zeroed/reseeded
by init on every run) — the standard "drifted working-storage table" pattern
documented extensively in the `sid-player-verify` agent's lessons (entries
10/16/17/20/25/29/etc.), reconfirmed here rather than assumed. All three
files are register-write-exact after patching, which meets this project's
verification bar (matching `laxity-newplayer`'s ~99.9% precedent — here, byte-
exact or byte-exact-over-overlap on all 3, with every residual explicitly
localized and explained, none hand-waved).

The remaining 11 files in this family (14 total tagged `Android` in the local
dataset, minus the 3 verified here) were not individually disassembled — no
reason to expect them to differ, since Craigie's own build is confirmed
reused across at least 3 independently-released tunes spanning both known
play-address conventions, but this has not been checked file-by-file.

## Sources

See the `sources` array — the local SIDId cache, `knowledge/COVERAGE.md`,
`data/composers/android.json`, the upstream SIDId GitHub source, HVSC's
Musicians.txt and STIL.txt, CSDb's scener profile for Android
(csdb.dk/scener/?id=12722), CSDb's per-tune technical-spec pages for 5 sampled
files, web search results used to confirm composer identity/era, and this
verification pass's own disassembly/reassembly/trace-diff of 3 real HVSC
files (`SIDdecompiler.exe`, `64tass.exe`, `sidm2-sid-trace.exe`).
