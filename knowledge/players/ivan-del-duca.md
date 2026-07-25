# Ivan Del Duca (Digital Minds Team)

```json
{
  "id": "ivan-del-duca",
  "name": "Ivan Del Duca (Digital Minds Team)",
  "aliases": ["Ivan_Del_Duca"],
  "authors": ["Ivan Del Duca"],
  "released": "1989-1992 (Digital Minds Team, Italy)",
  "status": "verified",
  "platform": "Italian coder-musician Ivan Del Duca's own playroutine — confirmed both PROGRAMMER and sound (Zzap! magazine, April 1991) on his and Antonio Miscellaneo's 'Digital Minds Team' games. Independently identified as a distinct, named routine by a THIRD-PARTY disassembly tool (JC64dis), not just this project's own tag data. Player-ID-fingerprinted across 7 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Compiled per-tune at a different address each release, not a fixed shared base: Dribbling loads $a000, Modulus loads $c000, Space_Gold $bf00, Warm_Up $7900, Parsley $b9fc, European_Championship $0efc. Confirmed by disassembly (SIDdecompiler -v2 memory map's own 'Start:' address matches the PSID header load address exactly on both files tested, no relocation-base surprises).", "zero_page": "$10-$FB (SIDdecompiler-labelled zero-page workspace spans this full range on Dribbling.sid; largely per-voice counters/pointers, not individually named).", "layout": "Verified via disassembly+reassembly on 2 files (Dribbling.sid, Modulus.sid) — see Verification section for the exact byte-diff/trace-diff results and the one recurring gotcha (a self-modified/drifted voice-init data table that SIDdecompiler's default trace window snapshots post-execution rather than pristine, load-bearing on at least one file)." },
  "entry": { "init": "Dribbling.sid: $b038. Modulus.sid: $c57b. Confirmed by trace-exact register-write match after reassembly.", "play": "Dribbling.sid: $b020 (called in IRQ). Modulus.sid: $cfe8." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 35 filter writes in a dense 422-write/50-frame sample; plausibly related to the 4th-voice drum-synthesis trick noted below, a hypothesis to test via future disassembly)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER AND MUSICIAN, first-party-adjacent sourced: Italian Wikipedia's World Cup 90 article, citing Zzap! magazine (April 1991, issue 55, pp.10-11), states Del Duca (then ~19) and Antonio Miscellaneo, both from the Belluno area, formed 'Digital Minds Team' and handled 'programmazione e sonoro' (programming AND sound) for the C64 conversion of World Cup 90 (Genias, 1990) — their first commercial software and first game.",
    "A NOTABLE TECHNICAL TRICK, same Zzap! source: Digital Minds' C64 World Cup 90 played a 'fourth voice' on the 3-voice SID by synthesizing a drum/percussion sound WITHOUT using the three standard channels. This is a strong candidate explanation for the traced sample's dense (422 writes/50 frames) and filter-heavy (35 filter writes) character — flagged as a hypothesis to verify via future disassembly, not yet confirmed as the actual mechanism.",
    "INDEPENDENTLY CONFIRMED AS A DISTINCT NAMED ROUTINE by a tool built with NO access to this project's own data: JC64dis, a third-party C64 disassembler, explicitly lists 'Ivan Del Duca's player' among the SID-player routines it can auto-identify, citing the tune 'Modulus' (1988, Systems Editoriale). This is real corroboration from an independent source that the routine is genuinely his own identifiable code, not just a single-composer tag artifact.",
    "GAME LIST CONFIRMED (Lemon64): Dribbling (the traced file, 1991/92, Idea — an Italy-focused football title), Championship of Europe / 'European Champions' (1992, Idea — a Euro '92 pick-your-nation football game, developed by Digital Minds Team, music/SFX credited to Del Duca, additional graphics by 'A. Miscellaneo' confirming the same Digital Minds pairing), Modulus (1989), Space Gold (1989, Systems Editoriale), Warm Up (1991, Genias), World Cup 90: Arcade Soccer (1990, Genias).",
    "A MODERN GAMES-INDUSTRY FIGURE OF THE SAME NAME (an 'Ivan Del Duca', Global Director of Technology at 505 Games, credits on Screamer/Screamer 2/Ruff Trigger, Trecision/Milestone — a coherent all-Italian career arc) surfaced in research and is PLAUSIBLE as the same person, but explicitly NOT VERIFIED (source pages were inaccessible) — flagged as speculative, not asserted as fact.",
    "No CSDb scener page found for him — consistent with a commercial-only (non-demoscene) Italian games figure. A minor, unresolved publisher discrepancy exists for 'Modulus' (Lemon64 says 'Commodore 64 Club', JC64dis says Systems Editoriale 1988).",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Del Duca, Ivan - ITALY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Italian Wikipedia — World Cup 90 (Digital Minds Team formation, programming+sound credit, Zzap! citation): https://it.wikipedia.org/wiki/World_Cup_90",
    "Lemon64 — Ivan Del Duca game list (6 titles): https://www.lemon64.com/games/list.php?list_individual=ivan-del-duca",
    "gamesthatwerent.com — Dribbling (Sound credit): https://www.gamesthatwerent.com/gtw64/dribbling/",
    "pirates.emucamp.com — Championship of Europe (full Digital Minds Team credits): http://pirates.emucamp.com/a/c/champeurope/c64/main_.html",
    "JC64dis — third-party disassembler independently naming 'Ivan Del Duca's player': https://iceteam.itch.io/jc64dis",
    "DeepSID composer folder: https://deepsid.chordian.net/?file=%2FMUSICIANS%2FD%2FDel_Duca_Ivan%2FParsley.sid",
    "Local dataset: 7 files tagged Ivan_Del_Duca, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ivan_Del_Duca` tag is Italian coder-musician Ivan Del Duca's own
playroutine, built for his and Antonio Miscellaneo's 'Digital Minds Team'
football/soccer titles. Confirmed both programmer and sound designer via
a Zzap! magazine citation, and independently identified as a genuine,
distinct routine by a third-party disassembly tool. Player-ID-
fingerprinted across 7 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed programmer +
sound designer** status, sourced via a specific magazine citation; a
**notable 4th-voice drum-synthesis trick**, plausibly explaining the dense
trace; and **independent third-party confirmation** (JC64dis) that this is
a genuinely distinct, identifiable routine, not just a single-composer
tag artifact.

## Disassembly notes

Disassembled with `SIDdecompiler.exe` (relocated to each file's own PSID
load address, `-v2` memory map confirmed no leading-byte-drop or
low-workspace surprises — gotcha 40 does not apply to either file
tested) and reassembled with `64tass`. Two files verified this way:
`Dribbling.sid` (load `$a000`) and `Modulus.sid` (load `$c000`) — see
Verification below for exact numbers.

One real quirk found: Dribbling.sid's code uses a self-modified indirect
jump table (`sta la4c1` / `jmp (la4c1)`, the low byte written per call to
select among code chunks living in the same page) — SIDdecompiler's own
`.asm` header flags this itself ("WARNING: May have alignment issues due
to partial address operand modification"), and the disassembler's
internal 30000-call default trace window at one point computes a low
byte that lands mid-instruction (inside the operand byte of an unrelated
`sta $2f` a few instructions earlier), triggering repeated "Unimplemented
opcode: 2f" warnings during emulation. This did not corrupt the final
`.asm`/reassembly — the actual reachable code paths on real playback
never take that particular low-byte value — but it is worth citing as a
non-fatal, high-volume warning any future re-disassembly of this file
will also hit.

The 4th-voice drum-synthesis hypothesis (from the Zzap! source) was
**not** confirmed or refuted this pass — that requires reading the
data-format/pattern-encoding layer, out of scope for the byte-diff/
trace-diff verification done here.

## Verification

**Byte-diff + trace-diff done, `status: verified` (2026-07-25).**

**File 1 — Dribbling.sid** (load `$a000`, init `$b038`, play `$b020`,
4 subtunes): `SIDdecompiler -a40960 -z -d -c -v2` → `64tass` reassembly,
4184/4184 bytes, exact length match. **Byte-diff: 99.3308% exact**
(4156/4184 bytes; 28 diverging bytes across 10 small clusters:
`$a00d`, `$a395`, `$a3ab`, `$a3c1`, `$a4c1`, `$a4d7-$a4e6`, `$a550`,
`$a569`, `$a56e-$a571`, `$a578` — every one of these addresses is marked
`+`/`_` (read+write / self-modified-operand) in SIDdecompiler's own `-v2`
memory-touch map, i.e. working storage, not pristine constants).
**Trace-diff: exact** — traced all 4 subtunes (indices 0, 1, 2, 3) at
100-300 frames each via `sidm2-sid-trace.exe`, diffed against the
original file's own trace built from its real PSID load address; every
trace matched register-write-for-register-write with zero divergence
(only the echoed input filename differed). No patch was needed for this
file — the byte-diff cluster is confirmed dead.

**File 2 — Modulus.sid** (load `$c000`, init `$c57b`, play `$cfe8`,
1 subtune): disassembly clean (no unimplemented-opcode warnings this
time). Reassembly came out 4079 of 4096 bytes (the missing 17 trailing
bytes at `$cfef-$cfff` are all-zero padding, confirmed genuinely
unreferenced — never touched in the `-v2` map — so harmless per this
project's own precedent for trailing pad bytes). **Byte-diff on the
4079-byte overlap: 98.5536% exact** (4020/4079; 59 diverging bytes in 20
clusters, `$c000` plus `$c5e5-$c7cb`) — **but unlike file 1, this
cluster was NOT dead**: the first trace-diff showed the reassembly
producing **zero SID register writes in the entire 300-frame trace**
(vs. 26 writes in frame 0 alone on the original) — INIT silently failed
to set up any voice. Root cause: `$c5e5-$c7cb` is a per-voice
attack/decay/pulse-width/frequency/filter seed-data table, read once by
INIT — SIDdecompiler's default 30000-call trace window had snapshotted
its own *post-execution* drifted values into the `.asm`'s `.byte`
literals instead of the pristine cold-start constants (the exact
`lessons_learned` 16/17/29 pattern, now reconfirmed a third time on this
player). **Fix applied and verified**: patched all 59 diverging bytes in
the assembled `.prg` back to the original file's own pristine byte
values (a pure data-value patch — no instruction changed length, so none
of gotcha 19/36's off-by-one relabeling risk applies) — this raised the
byte-diff to **100.0000% exact** (over the full disassembled/reachable
region) and the retraced result is **register-write-exact over 300
frames**, matching the original exactly (again, only the echoed filename
differs in the diff output).

**Net result**: two independent real HVSC files, both closed to an exact
register-write match — one with no patch needed, one needing a
precisely-localized, well-understood, and reproducible 59-byte
working-storage patch. This is the standard, project-precedented path to
`verified` (see `lessons_learned` 16/17/29/42 for the same pattern on
other players) — not a rounded-up "plays fine" result.

**Not yet done, left as the next step for anyone extending this**: the
data/pattern/effect-encoding layer (order list, instrument table, effect
commands) is still entirely undocumented — a full format reverse-engineer
would need to read the `.asm`'s data tables (e.g. `Dribbling.asm`'s
`la890`-based per-voice attack/decay lookup) against actual known
in-game note sequences, which this verification pass did not attempt.

## Sources

See the `sources` array — HVSC Musicians.txt, Italian Wikipedia, Lemon64,
gamesthatwerent.com, pirates.emucamp.com, JC64dis, and DeepSID.
