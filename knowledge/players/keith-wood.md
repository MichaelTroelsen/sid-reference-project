# Keith Wood / Rita Jay (Microdeal driver)

```json
{
  "id": "keith-wood",
  "name": "Keith Wood / Rita Jay (Microdeal driver)",
  "aliases": ["Keith_Wood"],
  "authors": ["Keith Wood ('Rita Jay')"],
  "released": "1984-1985 (Microdeal / Bad Taste Software era)",
  "status": "verified",
  "platform": "English coder-composer Keith Wood's (HVSC alias 'Rita Jay') own playroutine — a confirmed solo one-man-band on his Microdeal arcade-clone titles, and a genuine, sourced Microdeal in-house colleague of already-carded [[steve-bak]] (Wikipedia's Microdeal article names Wood/'Rita Jay', Steve Bak, and Ed Scio as the company's in-house programmers). He also co-founded a small novelty-game imprint, Bad Taste Software, deliberately kept separate from Microdeal's own name. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per compiled title, same driver each time (identical zp-chain shape and init-stub structure confirmed by disassembly): Dis_Baby.sid load $1000, Santas_Grotty_Christmas.sid load $1000, Pengon.sid load $1700, Mr_Dig.sid load $11c0.", "zero_page": "A single contiguous chain of sequentially-allocated zp workspace variables, base varies per file ($18 in Dis_Baby/Santa, $23 in Pengon) but the chain shape/length is the same driver across files (e.g. Dis_Baby: z18,z2e..z38,z3e,z3f,z4f,z50,z51,z55,z67,z86,z8a,zfc,zfd,zfe).", "layout": "Code is small (roughly load..load+$240 in Dis_Baby/Santa); the rest of the file up to its end is song/pattern data, read-only in SIDdecompiler's own -v2 memory-touch map." },
  "entry": { "init": "Dis_Baby/Santa: load address holds a 3-byte `jmp` stub to the real init routine (load+6); play likewise jumps via load+3. Pengon's own PSID init/play vectors point directly at the driver body with no stub (init=load, play=load+$33) — same underlying init routine (`tax / lda <subtune-select-table>,X / sta <zp>` then a second zp byte set to 0), just exported without the indirection.", "play": "See init — same driver, addressing convention (stub vs. direct) differs per compiled release." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a sparse 23-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS THE 'RITA JAY' ALIAS DIRECTLY: the exact entry reads 'Wood, Keith (Rita Jay) - UNITED KINGDOM' — no group field, but the parenthetical alias is unambiguous and independently corroborated by CSDb/gb64/LaunchBox game credits, all of which use 'Keith Wood (Rita Jay)' as his composer credit.",
    "A GENUINE, SOURCED MICRODEAL COLLEAGUE OF AN ALREADY-VERIFIED-ADJACENT KB COMPOSER: the English Wikipedia article on Microdeal names its in-house programmers as Steve Bak, Rita Jay, and Ed Scio — meaning Wood/'Rita Jay' worked at the SAME company, in the SAME era, as [[steve-bak]] (already carded in this KB). No evidence of direct collaboration on a specific title was found — just shared employer/period (Microdeal, St Austell, Cornwall, early-mid 1980s) — but this is a real, sourced professional connection, not a speculative one.",
    "CONFIRMED SOLO CODER-MUSICIAN, first-party sourced: on 'Mr. Dig' (Microdeal, 1984, a Mr. Do!-style clone), Lemon64 credits Wood for BOTH programming/coding AND music. A Lemon64 forum post from someone identifying as Keith Wood himself directly discusses his own development history (see below), reinforcing this as a solo, self-coded body of work across his catalog rather than a musician-only credit.",
    "FIRST-PERSON ACCOUNT FOUND (Lemon64 forum, unverified account identity but internally consistent with known game history): he had 'six weeks' to program 'Di's Baby' (this project's tag renders the title 'Dis Baby' — a five-minigame novelty title riffing on Princess Diana's 1982 pregnancy, deliberately delaying its announcement until the royal baby was confirmed healthy), made 'less than £1500 from both' Bad Taste Software games, attributes the label's closure to the 1984 home-computer market collapse, and says he then held one job for '26+ years' afterward. He also mentions still having the source code for 'Santa's Grotty Christmas' but having lost 'Di's Baby's' source in a house move — a small, human, verifiable-feeling detail.",
    "'BAD TASTE SOFTWARE' WAS DELIBERATELY KEPT SEPARATE FROM MICRODEAL'S OWN NAME: per uvlist.net, the label was created specifically so Microdeal's own brand wouldn't be attached to the novelty/topical-humor titles — 'Di's Baby' (1984) and 'Santa's Grotty Christmas' (1985) were its only two releases. Other confirmed Microdeal-proper titles under his name: 'Mr. Dig' (1984, Mr. Do! clone), 'Pengon' (1984, a Pengo clone), and 'Arena 3000' (1984, per LaunchBox, not in this project's own 4-file tag set but same-author).",
    "NO CSDb SCENER PROFILE EXISTS for either 'Keith Wood' or 'Rita Jay' — a CSDb search surfaced only an unrelated 'Keith Tinman' (scener #4116, confirmed a different person/game) — consistent with a purely commercial 1984-85 UK budget-software career with no demoscene footprint.",
    "Direct, sourced relationship to [[steve-bak]] noted above (shared Microdeal employer, not shared driver code — not encoded as a technical edge). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Wood, Keith (Rita Jay) - UNITED KINGDOM'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Wikipedia — Microdeal (names Wood/'Rita Jay', Steve Bak, Ed Scio as in-house programmers): https://en.wikipedia.org/wiki/Microdeal",
    "Lemon64 — Mr. Dig (full credits, coder+musician): https://www.lemon64.com/game/mr-dig",
    "LaunchBox Games DB — Keith Wood (Rita Jay) credited games: https://gamesdb.launchbox-app.com/developers/games/20995-keith-wood-rita-jay",
    "CSDb sid/?id=45230 (Pengon); CSDb sid/?id=1658 (Mr. Dig): https://csdb.dk/sid/?id=45230",
    "uvlist.net — Di's Baby (Bad Taste Software origin story): https://www.uvlist.net/game-33933-Dis+Baby",
    "Lemon64 forum — first-person account attributed to Keith Wood: https://www.lemon64.com/forum/viewtopic.php?t=41039",
    "Existing KB card: knowledge/players/steve-bak.md (the Microdeal colleague this research surfaced)",
    "Local dataset: 4 files tagged Keith_Wood, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Keith_Wood` tag is English coder-composer Keith Wood's ('Rita Jay')
own playroutine — a confirmed solo one-man-band on his Microdeal arcade-
clone titles, and a genuine Microdeal in-house colleague of already-
carded [[steve-bak]]. He also co-founded the novelty label Bad Taste
Software. Player-ID-fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **genuine, sourced
professional connection to [[steve-bak]]** via Wikipedia's own Microdeal
article naming both as the company's in-house programmers. Also notable:
a **first-person forum account**, plausibly from Wood himself, giving a
human, specific account of the Bad Taste Software label's brief life and
closure.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this
project's own original disassembly (see Verification below) is the only
one that exists. It did not investigate whether the routine shares any
code with [[steve-bak]]'s own Microdeal-era driver; that remains open.

## Verification

**Byte-exact + relocation-invariant trace-exact on 3 of 4 tagged HVSC
files (2026-08-07) — `status: verified`.** Disassembled each with
`SIDdecompiler -r` (reload pristine bytes after tracing) at its own PSID
load address, reassembled with `64tass`, byte-diffed against the
original payload, then trace-diffed both the native reassembly AND two
independent **relocation-invariance controls** (same disassembly
reassembled at a page-aligned base `$5c00` and a non-page-aligned base
`$5c37`, so the trace-diff is a real structural test rather than
tautological per this project's own `-r`-tautology lesson) against the
original via `sidm2-sid-trace.exe`, covering every subtune of every
file.

- **Dis_Baby.sid** (load `$1000`, 7 subtunes): native reassembly
  **100.0000% byte-exact** (2941/2941 bytes). Relocation controls: 44/2941
  bytes genuinely differ at the page-aligned base, 88/2941 at the
  non-page-aligned base (real evidence, not a tautology) — yet **all 7
  subtunes trace 0 register-write divergences at both bases** (35, 99,
  65, 77, 135, 77, 88 writes per subtune = 576 writes, matched exactly
  twice over = 1152 comparisons, 0 divergences).
- **Santas_Grotty_Christmas.sid** (load `$1000`, 8 subtunes): native
  reassembly **100.0000% byte-exact** over the full traced range (2134 of
  2135 payload bytes compared — the file's own last byte, `$1856`, sits
  one past `SIDdecompiler`'s own traced `End:` address and is never
  reproduced; it is a `$00` outside the emulation's own touched range,
  not a mismatch). Relocation controls: 68/2134 bytes differ at the
  non-page-aligned base, and 1729/2133 at the page-aligned base (Santa's
  payload is dominated by pattern/pointer data, so relocation touches far
  more of the file than in Dis_Baby — a strong, non-tautological test) —
  **all 8 subtunes trace 0 register-write divergences at both bases**
  (25, 19, 43, 22, 20, 34, 29, 21 writes = 213 writes x2 = 426
  comparisons, 0 divergences).
- **Pengon.sid** (load `$1700`, 3 subtunes, no init/play jmp-stub — see
  `entry`): native reassembly **100.0000% byte-exact** (746/746 bytes).
  Relocation controls: 18/746 bytes differ page-aligned, 36/746
  non-page-aligned — **all 3 subtunes trace 0 register-write divergences
  at both bases** (37, 25, 25 writes = 87 writes x2 = 174 comparisons, 0
  divergences).

Total: 3 files, 18 subtunes, 876 register writes reproduced exactly in
both the native reassembly and two independent non-tautological
relocation-control builds (1752 total write comparisons, 0
divergences) — this meets the project's register-write-match bar for
`verified`.

**Known gap: Mr_Dig.sid is NOT resolved and is excluded from the above.**
Same driver (identical zp-allocation-chain shape and `tax / lda
<table>,X / sta <zp>` init-stub pattern confirmed in the `.asm`; load
`$11c0`, init `$11c0`, play `$11e7`, 18 subtunes), but `SIDdecompiler`'s
own `-v2` memory-touch map reports a write-only (`+`) workspace region at
`$8040-$807b` — roughly 28KB above the load address, a different shape
from this project's usual low-RAM-workspace pattern. Reassembling the
disassembly required manually adding one missing zero-page equate
(`zfa`, referenced at two sites but never defined by the tool's own
output — the same class of gap this project's notes call out elsewhere
for a plain sequential zp symbol one past the last one the tool did
define) before it would even assemble; after that fix the reassembled
`.prg`'s own top address comes out 5 bytes short of the tool's own
traced `End:` ($8076 vs. $807b), and the byte-diff against the true
payload is only **28.2764% byte-exact (1007 of 1404 bytes differ)** —
diverging from
the 4th byte of the very first instruction onward, a systematic, not
random, drift (e.g. a `$807b` address literal in the original
reassembles as `$8076`). This is not "genuinely different code" (the
driver signature is unmistakable) but an unresolved defect in how this
specific file's oversized write-only workspace tail is being captured/
paginated by the tool. **Next lead, needs a RetroDebugger pass (not
available to this agent):** trace INIT+PLAY execution live and inspect
exactly what gets written into `$8040-$807b` and in what order, then
diff that against a manual hex-level walk of the driver's own code at
`$11c0-$1740` to find where the tool's internal byte-count between
labels goes out of step by 5 bytes — a live trace, not another static
disassembly attempt, is what's needed to localize this.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia, Lemon64,
LaunchBox, CSDb, uvlist.net, a Lemon64 forum post, and the related
steve-bak card.
