# Roger Svensson (Computer Boss International driver)

```json
{
  "id": "roger-svensson",
  "name": "Roger Svensson (Computer Boss International driver)",
  "aliases": ["Roger_Svensson"],
  "authors": ["Roger Svensson"],
  "released": "1986-1988 (Computer Boss International)",
  "status": "verified",
  "platform": "Swedish solo game developer Roger Svensson's own playroutine — CONFIRMED both coder and musician (a genuine one-man-band credit), described as Computer Boss International's (CBI) 'most prolific game designer.' Player-ID-fingerprinted across 3 files, all his own. Disassembly confirms this is genuinely a hand-written PER-GAME routine, not one shared driver reused byte-for-byte: Astrobot.sid and Walliball.sid have different memory layouts, different workspace sizes, and different per-voice write balance, even though both share the same overall design idiom (per-voice pattern stream read via a zero-page indirect pointer, plus a small self-modified arpeggio-offset mechanism).",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file/game: Astrobot.sid load/init $c0e3, play $c0ef (init/play ARE the routine entry, no stub). Walliball.sid load $1000, init $1000 (jmp $19cf), play $1003 (jmp $17f8) — a 2-entry JMP stub. Astrobot_II.sid load $4000, init $5393, play $54d1 (not disassembled this pass). Jump.sid load $6800, init $6828, play $683d (not disassembled this pass, and not confirmed tagged to this composer in this project's own dataset — 4th file present in HVSC's Svensson_Roger folder alongside the 3 tagged files).",
    "zero_page": "Astrobot.sid: z42-z4b (10 bytes, 5 x lo/hi pattern-stream pointer pairs — 4 real pointer pairs for voice1-3 plus a 4th unclear pair, +1 spare). Walliball.sid: z42-z49 (8 bytes, 4 lo/hi pattern pointer pairs) plus a separate, non-contiguous z61-z66 block ($18 bytes above z49) — not decoded further this pass.",
    "layout": "Both files keep a FIXED LOW-RAM WORKSPACE well below their own PSID load address, entirely zero-initialized at cold start and genuinely part of neither file's own on-disk payload (confirmed via SIDdecompiler's -v2 memory map: 'Start:' sits below the header's own load address in both cases, gotcha-40/lesson-60 territory). Astrobot.sid: workspace $5ac0-~$5aff (~64 bytes) vs. code at $c0e3-$ce07 — a ~24KB gap between the two, entirely '?' (never accessed) in the emulated trace. Walliball.sid: workspace $02c0-~$0fff (~3.4KB) immediately adjacent to load $1000 — much larger, likely general low-RAM scratch shared with the rest of the game rather than a small player-only buffer."
  },
  "entry": {
    "init": "Astrobot.sid: $c0e3 direct. Walliball.sid: $1000 -> jmp $19cf.",
    "play": "Astrobot.sid: $c0ef direct (called in IRQ). Walliball.sid: $1003 -> jmp $17f8 (called in IRQ)."
  },
  "speed": "TODO (not decoded this pass — IRQ-driven per-frame play call confirmed, but the tempo/speed-counter mechanism itself was not traced).",
  "data_format": { "order_list": "TODO", "patterns": "Each voice reads a sequential byte stream via a zero-page indirect pointer ((zXX),Y) advanced by an explicit Y-index counter stored in low-RAM workspace; on Astrobot.sid the pointer for voice 3 (z48/z49) is reloaded from a per-voice restart table (lc66a/lc6aa, indexed via lc76a) when the Y-index wraps past $FF — a loop-point/pattern-restart mechanism, confirmed reachable via cross-reference even though SIDdecompiler's own emulation-based disassembly never traced it as code by default (see Verification).", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "Astrobot.sid: pulse width can be conditionally overridden per-voice from workspace bytes (bit 6 of a per-voice flag byte gates an extra pulse-lo/pulse-hi write) — confirmed present in the disassembly but not observed firing in the traced window.", "filtertable": "TODO (no filter writes observed in the 50-frame Astrobot sample; not checked on Walliball)" },
  "effects": { "encoding": "Astrobot.sid keeps a small self-modified 'arpeggio offset' selector: a per-voice index (constant 2 in the traced file) picks one of several same-page low-byte table entries (native $c588, only 1 of 5 entries symbolic in SIDdecompiler's own output — see Verification) combined with a fixed page/high byte, used to fetch a semitone-style offset added into the voice's table-driven frequency index.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS 'Svensson, Roger - SWEDEN' (extracted via summarized fetch, not raw grep — exact literal formatting UNCONFIRMED though the country itself is well-corroborated by independent sources below).",
    "IDENTIFIED AS COMPUTER BOSS INTERNATIONAL'S (CBI) MOST PROLIFIC DESIGNER, per a dedicated Scandinavian-games-history retrospective: CBI was a Swedish mail-order/publisher based in Eskilstuna. Per that source, Svensson made 5 games for CBI 1984-1988: Jump (a Jumping Jack clone), Astrobot, Astrobot II, Othello, and Walliball — this project's own 3-file tag covers Astrobot, Astrobot II, and Walliball specifically.",
    "CONFIRMED BOTH CODER AND MUSICIAN, a genuine solo one-man-band credit: Lemon64's own credits for Astrobot (1986) list programmer, musician/composer, AND graphics ALL as Roger Svensson himself, published by CBI — unusual among small budget-label titles but not unprecedented, matching the pattern already seen on several other solo-developer cards in this KB.",
    "'ASTROBOT II' (1988) LACKS A FULLY POPULATED CREDITS PAGE — its listing pages exist (c64online.com, commodoregames.net, WoWroms) confirming the 1988/CBI sequel relationship, but no individual credits breakdown was independently verified for it beyond the general CBI/Svensson pattern already established. Left explicitly UNCONFIRMED whether he's separately credited as coder+musician on this specific sequel, though consistent with the pattern.",
    "'WALLIBALL' (1987 per most listings) IS CLASSIFIED AS AN ARCADE/BREAKOUT-PONG-STYLE TITLE per WoWroms — confirmed to exist under this composer's tag via a DeepSID file page reference, matching this project's own dataset.",
    "NO CSDb SCENER PROFILE EXISTS — a direct web search found no matching scener page, consistent with a mid-1980s Swedish commercial/budget-label developer rather than a demoscene participant. No Swedish scene-group membership found, though this absence was checked only via general web search, not a direct CSDb site search — flagged as a minor sourcing gap.",
    "THE TRACED FILE'S HEAVILY ASYMMETRIC PER-VOICE ACTIVITY (osc3=103 writes vs. osc1/osc2=8 each, filter=0) IS TYPICAL OF A SMALL, HAND-ROLLED EFFECTS/ARPEGGIO ROUTINE ON ONE CHANNEL, consistent with an isolated one-man-band developer's own custom in-game routine rather than a shared, general-purpose tracker driver — this is inference from the trace data itself, not sourced elsewhere.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — checked against the KB's other Scandinavian composers ([[jonas-hulten]], [[bo-mellberg]]) with no overlap found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found).",
    "WALLIBALL.SID CARRIES AN EMBEDDED HVSC RIPPER CREDIT STRING ('...rip&rebuilt iC/HVSC 2019') right after its init/play JMP stub, in plain ASCII within the payload SIDdecompiler otherwise marks 'Unreferenced data' — ripper/archival metadata, not part of the original 1987 game code; noted per this project's discipline of hex-dumping unclear regions before writing memory-map claims about them (see Verification).",
    "ASTROBOT.SID AND WALLIBALL.SID ARE CONFIRMED, BY DISASSEMBLY, TO BE GENUINELY DIFFERENT HAND-WRITTEN CODE, not one shared driver: different workspace size/location relative to load address (Astrobot: ~64 zero-initialized bytes at $5ac0, ~24KB below its $c0e3 load; Walliball: ~3.4KB at $02c0, immediately below its $1000 load), different zero-page footprint (Astrobot z42-z4b, 10 bytes; Walliball z42-z49 + a separate z61-z66 block), and a very different per-voice SID-write balance (Astrobot: osc1/osc2/osc3 = 8/8/103 over 50 frames — heavily arpeggio-driven on one channel; Walliball: 67/104/104 — much more balanced). Consistent with the existing 'own custom in-game routine' inference, now confirmed rather than merely inferred from write counts alone.",
    "SIDdecompiler's -r ('reload tune before disassembling') build of Astrobot.sid is 100.0000% byte-exact and 119/119-register-write-exact against the real file at native (zero-shift) relocation — but this specific trace-diff is TAUTOLOGICAL (per this agent's own lesson 63/69: an -r build that reproduces pristine bytes will trivially reproduce the same trace). A genuine, non-tautological relocation-invariance control (rebuilding the SAME disassembly at two different bases, one page-aligned and one not) FAILS on Astrobot.sid: both controls diverge identically from frame 0/1 onward (119 orig vs. 139 write events over 50 frames; 735 vs. 753 over 200 frames), localized to voice 3's arpeggio/pattern-table subsystem. Root cause not found: 9 separate instances of a real, confirmed defect (reachable fallthrough-of-conditional-branch code SIDdecompiler mislabels 'Unreferenced data' rather than disassembling — 4 identical per-voice pattern-restart JSR/JMP pairs plus 5 straight-line pulse-width/increment blocks, all confirmed reachable via cross-reference and re-derived byte-for-byte from the raw original payload) were found and patched but did NOT close the divergence. A second, latent partially-symbolized low-byte table (native $c588, an arpeggio-offset page-selector) was also found but is provably inactive in this trace window (its only selector index is set once at init to a constant and never changes). See Verification for the full residual writeup — this is Astrobot.sid-specific and does not affect the Walliball.sid verification below."
  ],
  "sources": [
    "HVSC Musicians.txt ('Svensson, Roger - SWEDEN'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "FRGCB — 'A Brief History of Scandinavian Games' (CBI context, 5-game credit list): http://frgcb.blogspot.com/2017/07/special-brief-history-of-scandinavian.html",
    "Lemon64 — Astrobot (full credits, traced file): https://www.lemon64.com/game/astrobot",
    "c64online.com — Astrobot II: https://c64online.com/c64-games/astrobot-ii/",
    "commodoregames.net — Astrobot II: https://www.commodoregames.net/Commodore64/Astrobot-II-22294.html",
    "WoWroms — Astrobot II; Walliball: https://wowroms.com/11/roms/commodore-64/download-astrobot-ii/121893.html",
    "DeepSID file page — Walliball.sid: https://deepsid.chordian.net/?file=MUSICIANS%2FS%2FSvensson_Roger%2FWalliball.sid",
    "Local dataset: 3 files tagged Roger_Svensson, 1 composer (see knowledge/COVERAGE.md)",
    "This pass's own disassembly: SIDdecompiler.exe (SIDM2 tools) + 64tass.exe + sidm2-sid-trace.exe, run against local HVSC copies of Astrobot.sid and Walliball.sid (MUSICIANS/S/Svensson_Roger/) — see Verification for the exact invocations and results."
  ]
}
```

## Overview

The `Roger_Svensson` tag is Swedish solo game developer Roger Svensson's
own playroutine — a confirmed coder+musician, described as Computer
Boss International's most prolific game designer. Player-ID-
fingerprinted across 3 files, all his own. Disassembly (2026-08-07)
confirms each game carries its own genuinely hand-written routine rather
than one shared driver reused across titles — see `quirks` and
Verification. `Walliball.sid` is fully, non-tautologically verified
(100% byte-exact, register-write-exact across all 6 subtunes, both at
native address and under a real relocation control).

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
one-man-band credit** on Astrobot (coder, musician, AND graphics all
himself), sourced via Lemon64's own structured credit page rather than
inferred. Also notable: a dedicated **Scandinavian-games-history source**
gives useful publisher/company context (CBI, Eskilstuna) rarely
available for such a small budget-label developer.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
`SIDdecompiler` disassembly + reassembly + trace-diff performed this pass
on 2 of the 3 tagged HVSC files (Astrobot.sid, Walliball.sid); see
Verification below.

## Verification

**Disassembled, reassembled, byte-diffed and trace-diffed (2026-08-07) —
`status: verified`**, on the strength of `Walliball.sid`; `Astrobot.sid`
reaches byte/trace-exactness only at native (unshifted) address, with an
unresolved, precisely-localized relocation-control residual (see below —
this does not block `verified` since it's a separate file with its own
independently hand-written code, per the newly-confirmed "different code
per game" finding in `quirks`).

**Method.** `SIDdecompiler.exe <file> -a<decimal Start> -z -d -c -v2 -r`,
relocating onto the `-v2` map's own reported `Start:` address (gotcha 40 —
both files' `Start:` sits well below their PSID header's own load address,
confirmed to be genuine zero-initialized fixed low-RAM workspace, not file
content). Reassembled with `64tass.exe -a --cbm-prg`. Byte-diffed the
reassembled `.prg` against the real PSID payload (Node, `psid_header`
convention, `loadAddr===0` branch honoured — both files embed their real
load address as the payload's own first 2 LE bytes). Trace-diffed with
`sidm2-sid-trace.exe` against the untouched original `.sid` (converted to
a `.prg` with its own true load address), comparing
`(frame,register,old,new)` tuples with the cycle column stripped where a
relocation shifted cycle timing. Additionally ran a genuine
relocation-invariance control per this agent's own lessons 69/70/72:
rebuilt the SAME disassembly at a different absolute base (one
page-aligned, one not) and traced THAT against the original, since an `-r`
build that already reproduces pristine bytes makes a same-address
trace-diff tautological.

**`Walliball.sid` — fully verified, exceeds this project's own
`laxity-newplayer` (~99.9%) precedent.** Load `$1000`, init `$1000` (jmp
`$19cf`), play `$1003` (jmp `$17f8`), 6 subtunes. `-v2` Start: `$02c0`
(workspace, zero-filled, excluded from the diff). Reassembled at `-a704`
(decimal `$02c0`, net-zero shift): **100.0000% byte-exact** over the FULL
6064-byte payload (no coverage gap). Traced all 6 subtunes (50 frames
each) natively: **275/250/113/292/36/259 writes, all exact** (subtunes
0-5) against the original. Built a SECOND, genuinely different
reassembly at `-a8913` (decimal `$22d1`, a `+$2011` non-page-aligned
shift — 837 of 9456 reassembled bytes differ from the native build,
confirming this is a real structural test, not a no-op): traced all 6
subtunes again, **every one exact** (275/250/113/292/36/259 writes,
identical content, at the shifted addresses). This is a real,
non-tautological, register-write-exact match across every subtune in the
file.

**`Astrobot.sid` — byte/trace-exact at native address; relocation control
reveals an unresolved, quantified residual.** Load/init `$c0e3`, play
`$c0ef` (direct, no stub), 1 subtune. `-v2` Start: `$5ac0` (workspace,
zero-filled, excluded from the diff). Reassembled at `-a23232` (decimal
`$5ac0`, net-zero shift): **100.0000% byte-exact**, but only over the
region SIDdecompiler's own emulation actually traced ($c0e3-$ce07, 3365
of the 3869-byte payload = **86.98% payload coverage**) — raising `-t` to
2,000,000 calls and `-C1` (speculative) did not extend coverage; the
trailing 504 bytes ($ce08-$cfff) are hex-dump-confirmed to look like 8
repeating 63-byte blocks (sprite-frame-shaped, not player data) and are
plausibly non-player game data incidentally captured by the SID rip, not
part of this player's own data format — left explicitly `TODO`/unresolved
rather than asserted. Native trace: **119/119 register writes exact**
(frame+cycle+register+value all identical to the original) — but this
match is TAUTOLOGICAL, since the native `-r` build is byte-identical to
the source file by construction (lesson 63/69). The genuine test — two
relocated rebuilds of the SAME disassembly, one page-aligned (`+$2000`)
and one not (`+$2011`) — **both FAIL identically**: 139 write events vs.
119 in the original over 50 frames (735 vs. 753 over 200 frames), first
diverging within frame 0/1 of playback in voice 3's arpeggio/pattern
subsystem (`osc3_freq_lo/hi` reads a wrong table value — e.g. `$010C`
instead of the correct `$EEF8` — and drops the paired
`osc3_control=$81` gate-on write). Investigated and ruled out as the
cause: (1) one confirmed, fixed unrelocated-literal defect
(`sta $5a00,X` in the init workspace-clear loop, patched to
`sta l5ac0-$c0,X`) — fix applied, divergence unchanged; (2) 9 separate,
confirmed-reachable instances of SIDdecompiler mislabeling genuine
fallthrough-of-conditional-branch code as `.byte "Unreferenced data"`
(4 identical per-voice pattern-restart `JSR`/`JMP` pairs — reached when a
voice's 8-bit pattern-stream index wraps past `$FF` — plus 5 straight-line
pulse-width-override/increment blocks), every one confirmed reachable via
cross-reference to a real conditional branch's fallthrough, and every
replacement byte-for-byte re-derived from the raw original payload before
patching — all 9 patched, reassembled, retraced: divergence unchanged;
(3) one latent partially-symbolized low-byte table (native `$c588`, an
arpeggio-offset page-selector where only 1 of 5 entries is a proper
`<label` reference and the other 4 are raw literals) — confirmed
NOT the active cause in this trace window, since its only selector index
(`l5aef`) is set once at init to a constant `2` and never rewritten
elsewhere in the file, and index `2` happens to be the one entry
SIDdecompiler DID symbolize correctly. **The actual cause was not found
within this pass's static-analysis budget.** RetroDebugger (unavailable
this session — see dispatch note) would be the natural next step: single-
step the relocated build's very first `PLAY` call and watch the actual
memory read that produces voice 3's wrong frequency value (around the
`l5af8`-indexed `lc200`/`lc280` table lookup, native $c4b9-$c503), which
would show directly whether the bug is a still-unfound unrelocated literal
or something with no static footprint at all (e.g. a runtime-computed
pointer built from two half-relocated pieces, lesson 80/112's pattern,
not yet located here).

## Sources

See the `sources` array — HVSC Musicians.txt, FRGCB, Lemon64, and 3
listing sites.
