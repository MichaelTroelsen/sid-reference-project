# SkyLine Editor (Daniel Stenberg / SkyLine Technics)

```json
{
  "id": "skyline-editor",
  "name": "SkyLine Editor (Daniel Stenberg / SkyLine Technics)",
  "aliases": ["SkyLine_Editor", "SkyLine_Editor_V3.0"],
  "authors": ["Daniel Stenberg (Danne/Bagder)"],
  "released": "28 October 1990 (V3.0, SkyLine Technics)",
  "status": "verified",
  "platform": "A C64 music editor coded by Daniel Stenberg — CONFIRMED, via his own personal website plus independent CSDb cross-references, to be the SAME Daniel Stenberg who went on to create cURL and libcurl, among the most widely-used pieces of software infrastructure in computing history. Coded for the Swedish demo group SkyLine Technics (founded 1989), which he co-founded alongside his real brother Björn ('Zagor') and friend Linus Nielsen ('Boogaloo'). The `SkyLine_Editor`/`SkyLine_Editor_V3.0` tags together cover 55 real HVSC files across 9 composers (Bluez, Boogaloo, Dream Elastic, Man Magic, Scortia, Shark, Touldie, Zagor, Zyron) — not just Boogaloo, correcting this card's earlier '5 files, all by Boogaloo' scope claim (that count only covered the `_V3.0`-suffixed subset).",
  "csdb_release": 167080,

  "memory": { "load_address": "Not fixed — each exported song is compiled/relocated to its OWN load address (confirmed on 3 disassembled+traced files: $1000, $4000, $0a80). Convention is consistent across all 3: play = load address (a JMP stub to the real play routine elsewhere in the file), init = load+3 (a zero-fill-and-SID-init routine that RTS's back — see entry.init). One of the 3 files (Conclusion.sid, load $0a80) needed relocating to SIDdecompiler's own `-v2` memory-map 'Start:' address ($0200, NOT the PSID load address) to reassemble byte-correctly — its player instance keeps ~0x880 bytes of fixed low-RAM workspace well below its own load address (gotcha 40/31/38's class of trap); the other two (load $1000/$4000) had Start == load address, no shift needed. This is file-dependent within the SAME player, not a fixed player-wide trait — always check `-v2`'s Start: line per file.", "zero_page": "Used, file-dependent (confirmed on Conclusion.sid): $02-$04, $90, $a3-$ab, $b2-$f8, $f9 hold player-instance pointers/counters. Lingonben_intro.sid (load $1000) only used $fa/$fb (a 2-byte pointer pair). Not a single fixed ZP map across all files — each song's own compiled instance claims what it needs, sometimes overlapping ZP, sometimes not.", "layout": "Immediately after `init` (load+3..~load+0x57 or +0x98) sits a small self-modified working-storage block (voice tick/tempo counters) that `init` unconditionally zero-fills via an indexed `STA` loop before use — confirmed dead at reassembly time (see Verification). Song/pattern/instrument data follows; exact layout beyond that is TODO (data-format walk not attempted this pass — this verification pass focused on reconstructing+trace-matching real code, not documenting the format)." },
  "entry": { "init": "load+3 in all 3 tested files ($1003/$4003/$0a83) — zero-fills ~0x57-0x98 bytes of per-voice workspace (code AND the $D400-range SID registers) via an indexed STA loop, sets ADSR/filter defaults, RTS.", "play": "== load address in all 3 tested files ($1000/$4000/$0a80) — a single `JMP` stub to the real play routine elsewhere in the file (not called via IRQ directly at the header address; the header address is just the jump-in point)." },
  "speed": "TODO — not characterized this pass (frame-exact trace confirms per-frame timing is correct, but the source of the tick divisor wasn't traced back to a specific counter).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 39 filter writes in the original 50-frame sample of Lingonben_intro.sid)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HIGH-CONFIDENCE IDENTITY CONFIRMATION — a genuinely remarkable, rigorously verified find: Daniel Stenberg (handle 'Bagder', b. 1970, Sweden), the real-world creator of cURL/libcurl, is CONFIRMED to be the same person as this tool's coder. His own personal website (daniel.haxx.se, the highest-trust primary source possible — his own words) states he got a C64 in 1985 with his brother Björn, wrote his first assembly demos in late 1987, joined the Swedish group Super Swap Sweden using handle 'D$85' then 'bagder', and explicitly: 'Under Skyline Techniques, his brother Björn and friend Linus created SID music compositions for demos.' CSDb independently corroborates every specific detail: scener id=8084 (real handles Bagder/D$85/Danne, groups Horizon/SkyLine Technics/SSS, Sweden) and a duplicate/unmerged entry id=20079 ('Danne', trivia 'Brother of Zagor', credited Code on SkyLine Editor V1.5-V3.0) both resolve to the same person; his brother 'Zagor' (CSDb id=207, trivia 'Brother of Bagder', founder of Confusing Solution, also in SkyLine Technics) matches Björn exactly; 'Boogaloo' (this tag's second-most prolific user, 15/55 files) is confirmed as Linus Nielsen (CSDb id=362) — matching Stenberg's own 'friend Linus' reference precisely.",
    "IMPORTANT NUANCE: Stenberg's own website credits the MUSIC under Skyline Techniques to his brother Björn and friend Linus — never mentioning himself as a composer. The CODE credit for the editor itself comes from CSDb (release 167080, 'Code: Danne'), not from any first-person Stenberg quote explicitly saying 'I wrote the SkyLine Editor.' The identity link is airtight (three independent, mutually corroborating sources), but the specific claim 'Stenberg personally coded this editor' rests on CSDb's credit field, not his own words — a small but real distinction worth preserving.",
    "SKYLINE TECHNICS, CONFIRMED: founded 1989, Sweden, motto 'Without SkyLine Life Loses Shine' — members Bagder/Danne (coder, =Daniel Stenberg), Zagor (musician, =Björn Stenberg), Boogaloo (musician, =Linus Nielsen), SMC (musician).",
    "BOOGALOO/LINUS NIELSEN, the tag's second-most prolific user (15 of 55 files, after Dream Elastic's 16 — not its sole user; 8 other composers used the same tool, see the corrected file count above), was NOT a random adopter of a public tool — he was a FOUNDING-ERA BANDMATE of SkyLine Technics itself, active as coder/musician from 1985 into the 2020s, later also in the group Horizon alongside Stenberg.",
    "A minor CSDb data quirk noted for future cross-referencing: two unmerged scener entries exist for the same person (id=8084 'Bagder/Horizon' and id=20079 'Danne') — be aware of this if pulling further CSDb data on him.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found; his Swedish demoscene circle is entirely separate from this KB's mostly UK/US/other-Nordic composer roster).",
    "DISASSEMBLY-CONFIRMED, extra corroboration of authorship: Lingonben_intro.sid's `init` routine is immediately followed, in the raw code bytes, by the ASCII string 'SKYLINE TECHNICS !!!' embedded directly in the player binary (not just tune metadata) — SIDdecompiler flags it 'Unreferenced data' since nothing jumps to it, but it's there in the shipped code every time this player exports a tune.",
    "Player code is per-song-compiled/relocated, not a fixed shared driver at one absolute address — 3 disassembled files loaded at 3 different addresses ($1000, $4000, $0a80), yet all 3 share the exact same init=load+3 / play=load JMP-stub entry convention. One of the 3 (Conclusion.sid) additionally needed relocating to SIDdecompiler's `-v2`-reported Start: address rather than the PSID load address (a fixed low-RAM workspace below its own load address) — this is FILE-dependent, not a player-wide constant; the other two files needed no such shift. Always check `-v2`'s Start: line per individual file, even within one already-verified player family."
  ],
  "sources": [
    "Wikipedia — Daniel Stenberg (cURL creator, confirms handle 'Bagder', Swedish, b. 1970): https://en.wikipedia.org/wiki/Daniel_Stenberg",
    "Daniel Stenberg's own website — About (C64 origin story, brother Björn, SkyLine Technics music credit): https://daniel.haxx.se/about.html",
    "Daniel Stenberg's own website — My Computers: https://daniel.haxx.se/computers.html",
    "Daniel Stenberg's own blog — 'Unexpected C64 reference' (2010): https://daniel.haxx.se/blog/2010/06/01/unexpected-c64-reference/",
    "CSDb scener — Bagder/Horizon (id=8084): https://csdb.dk/scener/?id=8084",
    "CSDb scener — Danne (id=20079, credited coder on SkyLine Editor, trivia 'Brother of Zagor'): https://csdb.dk/scener/?id=20079",
    "CSDb scener — Zagor (id=207, trivia 'Brother of Bagder', =Björn Stenberg): https://csdb.dk/scener/?id=207",
    "CSDb scener — Boogaloo (id=362, =Linus Nielsen, SkyLine Technics/Horizon): https://csdb.dk/scener/?id=362",
    "CSDb group — SkyLine Technics (id=1496, founded 1989, full member roster): https://csdb.dk/group/?id=1496",
    "CSDb release 167080 — SkyLine Editor V3.0 (28 Oct 1990, Code: Danne, Music: Freeze): https://csdb.dk/release/?id=167080",
    "Local dataset: 55 files tagged SkyLine_Editor/SkyLine_Editor_V3.0 across 9 composers (see knowledge/COVERAGE.md)",
    "Original disassembly + trace-diff verification (this pass, 2026-07-23): SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe against 3 real HVSC files (Boogaloo/Lingonben_intro.sid, Boogaloo/Bumblebee.sid, Zyron/Conclusion.sid) — see Verification section for the numbers."
  ]
}
```

## Overview

The `SkyLine_Editor`/`SkyLine_Editor_V3.0` tags are a C64 music editor
coded by Daniel Stenberg for the Swedish demo group SkyLine Technics in
1990 — CONFIRMED, via his own website and independent CSDb
cross-references, to be the same Daniel Stenberg who later created cURL
and libcurl. Player-ID-fingerprinted across 55 files and 9 composers
(Bluez, Boogaloo, Dream Elastic, Man Magic, Scortia, Shark, Touldie,
Zagor, Zyron); Boogaloo (Linus Nielsen), a founding bandmate of the
tool's author, is the second-most prolific user (15 files, after Dream
Elastic's 16) — the tool clearly circulated beyond its author's own
inner circle.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **rigorously
confirmed cURL-creator identity**, triangulated across three independent,
mutually corroborating sources (his own personal website, and two CSDb
scener entries confirming the exact family/friend relationships he
describes in his own words). A small but real nuance is preserved: he
credits the MUSIC to his brother and friend, never claiming authorship of
the editor himself in his own writing — the coding credit comes from
CSDb's release data, not a first-person quote.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly done this pass via `SIDdecompiler.exe` on 3 real HVSC files
(see Verification) — reassembled+trace-diffed to a register-write-exact
match on all 3. Data-format walk (order list/patterns/instruments/effect
encoding) was NOT attempted this pass — those fields remain `TODO`; this
pass's scope was closing the byte-diff/trace-diff verification loop, per
the `sid-player-verify` agent's mandate.

## Verification

**Register-write-exact trace match on 3 independent real HVSC files
(2026-07-23) — `status: verified`.** Method: `SIDdecompiler.exe -z -d -c
-v2` → `64tass.exe` reassembly → Node byte-diff → `sidm2-sid-trace.exe`
trace-diff (raw-binary fallback; MCP `sidm2-siddump` tools were not
registered this session). Full detail:

- **Lingonben_intro.sid** (Boogaloo, `SkyLine_Editor_V3.0`, load `$1000`,
  init `$1003`, play `$1000`): relocated at `-a4096` (Start: == load
  address, no shift needed). Byte-diff: **98.33%** (35/2099 compared
  bytes differ, all confined to `$1045-$109b` — a per-voice tick/tempo
  workspace table that `init`'s own `STA l1045,X` loop unconditionally
  zero-fills before use, so SIDdecompiler's captured post-execution
  snapshot there is provably dead, not a real divergence); plus 5 bytes
  at the very end of the file (`$1833-$1837`) the emulation never
  touched at all (genuinely unreferenced trailing data, not a bug).
  Trace-diff: **register-write-exact** at both 50 frames (294 writes) and
  200 frames (1225 writes) — zero divergence via `diff`.
- **Bumblebee.sid** (Boogaloo, `SkyLine_Editor`, load `$4000`, init
  `$4003`, play `$4000`): relocated at `-a16384` (Start: == load address).
  Byte-diff: **99.35%** (15/2306 bytes differ, all confined to
  `$4038-$4098` — the same class of init-zeroed workspace table as
  above, at the equivalent offset). Trace-diff: **register-write-exact**
  at both 50 frames (51 writes) and 200 frames (962 writes).
- **Conclusion.sid** (Zyron — a DIFFERENT composer from Boogaloo,
  `SkyLine_Editor`, load `$0a80`, init `$0a83`, play `$0a80`): PSID load
  address relocation alone was insufficient — `-v2`'s own memory map
  reported `Start: $0200`, ~0x880 bytes below the PSID load address (a
  fixed low-RAM workspace, gotcha 40/31/38's class of trap). Relocated at
  `-a512` instead. Byte-diff after correctly accounting for the shift:
  **100.0000% byte-exact** (0/5248 bytes differ). Trace-diff:
  **register-write-exact** at 50 frames (178 writes).

All 3 traces were diffed via `diff` on `sidm2-sid-trace.exe`'s raw CSV
output (frame/cycle/register/old/new columns) with the echoed-filename
header line stripped — zero differing lines in all 3 cases. This spans
both tag variants (`SkyLine_Editor` and `_V3.0`) and 2 of the tag's 9
composers (Boogaloo, Zyron), with the Zyron file additionally confirming
the player isn't Boogaloo-specific code and exercising a materially
different relocation case. Per project precedent (`laxity-newplayer`
~99.9%), a register-write-exact trace match with the residual byte-diff
fully explained and localized to code the player's own `init` provably
zeroes before use is sufficient grounds for `verified` — raised from
`in-progress`.

**Not yet done** (real gaps, left `TODO`, not invented): zero page is
only characterized for the 2 files it was checked on (not a fixed map);
data format (order list/pattern/instrument/wavetable/pulsetable/
filtertable layout) and effect-command encoding were not reverse
engineered this pass — trace-matching confirms the *player code* is
correctly reconstructed, not that its *data format* is documented. The
other 7 composers' files (Bluez, Dream Elastic, Man Magic, Scortia,
Shark, Touldie, Zagor — 50 of the 55 tagged files) were not individually
tested; given 3/3 tested files across 2 composers matched exactly, this
is treated as representative but not exhaustively confirmed.

## Sources

See the `sources` array — Wikipedia, Daniel Stenberg's own website (3
pages), CSDb (6 entries), and this pass's original disassembly/trace-diff
work (3 real HVSC files, see Verification).
