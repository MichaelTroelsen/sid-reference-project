# Robert Westgate (early driver, 1984-1986)

```json
{
  "id": "robert-westgate-v1",
  "name": "Robert Westgate (early driver, 1984-1986)",
  "aliases": ["Robert_Westgate_v1"],
  "authors": ["Robert Westgate"],
  "released": "1984-1986",
  "status": "in-progress",
  "platform": "English composer Robert Westgate's EARLIER playroutine — the first of two structurally distinct driver versions (a second, uncarded-until-this-batch [[robert-westgate-v2]] covers his 1987-1990 output). Consistently worked alongside the SAME coder, Jason Benham, across nearly his entire discography. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, not fixed: Bigtop_Barney.sid load $7100 (loadAddr=0, embedded); Guzzler.sid load $1000; Legend_of_Sinbad.sid load $9300, but init/play sit far above at $cbac/$ca94 (unexplored). Bigtop_Barney's own load address is NOT where SIDdecompiler's -v2 map's traced Start: address sits (Start: $2b00, ~17.9KB below load) — confirmed via disassembly this is a fixed low-RAM workspace ($2b00-$2dff, 3x256-byte per-voice block) plus a runtime copy-loop destination ($4000-$4200, $6900) that INIT populates by copying data OUT OF the loaded payload ($7200/$7300/$7400/$7500/$7600/$7700) into those fixed low addresses — gotcha-40/lesson-60/108 pattern, not a dropped byte.", "zero_page": "TODO (no disassembly of Guzzler/Legend_of_Sinbad completed; Bigtop_Barney uses none observed in the covered code region).", "layout": "Bigtop_Barney: fixed low-RAM workspace+copy-destinations at $2b00-$2dff/$4000-$4200/$6900 (see load_address); actual driver code at native $7100-$71bf (init+play); data tables (frequency/duration, read-only) at $9440-$9c00ish; per-song note/pattern data through $9f36. Guzzler/Legend_of_Sinbad: not documented." },
  "entry": { "init": "Bigtop_Barney: $7100 (IS the load address — code starts immediately, no jump-table stub). Guzzler: $1000 (also = load address). Legend_of_Sinbad: $cbac, far above its own load address $9300 — mechanism unexplored (possibly another self-relocating copy, per Bigtop_Barney's pattern, or a JMP-chain per lesson 47/55).", "play": "Bigtop_Barney: $7180 (load+$80). Guzzler: $1003 (load+3, classic JMP-table convention — disassembly hit a distinct, unresolved SIDdecompiler labeling defect, see Verification). Legend_of_Sinbad: $ca94, unexplored." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC LISTS A BARE 'Westgate, Robert' ENTRY — country/group could not be confirmed via direct fetch of Musicians.txt (came back unattributed); nationality (English) is inferred circumstantially from his UK publishers (Interceptor Software, Superior Software), not an HVSC-sourced fact.",
    "THREE CONFIRMED TITLES, a consistent Jason Benham coding partnership: Bigtop Barney (1984, Interceptor Software — coder/graphics Jason Benham; music credited to BOTH Graham Hansford AND Robert Westgate jointly, an unusual two-composer credit; soundtrack includes 'The Liberty Bell March' and 'Peacherine Rag'), Guzzler (1984, Interceptor Software — coder Jason Benham, title screen Claire Challis; music attribution is INCONSISTENT ACROSS SOURCES — one credits Westgate, another lists Graham Hansford as composer with Westgate only as 'Info' — explicitly flagged as unresolved, not picked arbitrarily), and Legend of Sinbad (1986, Superior Software — coder Jason Benham, producer Richard Hanson, composer SOLELY Robert Westgate, themed on Rimsky-Korsakov's 'Scheherazade').",
    "A CLEAN CHRONOLOGICAL SPLIT explains the version tags: this card's 3 titles run 1984-1986; the sibling [[robert-westgate-v2]] tag's 3 titles run 1987-1990 — no overlap or reversal, the same clean pattern already established in this KB for [[ozzy-oldskool]]/[[ozzy-oldskool-v2]] and the Cadaver driver pair.",
    "A PUBLISHER NAME-COLLISION RISK WAS EXPLICITLY CHECKED: a CSDb group (id=3218, member 'Lee') sharing the surname 'Westgate' is a completely UNRELATED cracker group with only 2 crack releases — confirmed NOT connected to the composer.",
    "JASON BENHAM CODED EVERY SINGLE ONE OF WESTGATE'S SIX KNOWN TITLES ACROSS BOTH TAGS (this card's 3 plus the sibling card's 3) — a consistent, unbroken two-person team spanning Interceptor Software → Superior Software → Elite Systems → Codemasters. No evidence Westgate coded himself; every credit list separates programmer (Benham) from musician (Westgate).",
    "THREE ADDITIONAL, EARLIER, UNCARDED WESTGATE TITLES WERE FOUND during research but fall outside this tag's 3-file scope: Megawarz, Outback, and Roomlord (all 1983-1984, Paramount Software) — flagged as a note for a possible future pre-v1 tag, not investigated further here.",
    "NO CSDb SCENER PROFILE EXISTS for Westgate — CSDb's own SID-composition search lists 9 total credited compositions but no personal scener page, consistent with a purely commercial 1980s UK games composer with no demoscene footprint.",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[robert-westgate-v2]] (same composer, later driver version — companion card in this same batch). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Westgate, Robert' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Bigtop Barney (full credits, traced file): https://www.lemon64.com/game/bigtop-barney",
    "Lemon64 — Guzzler (attribution discrepancy noted): https://www.lemon64.com/game/guzzler",
    "Lemon64 — Legend of Sinbad: https://www.lemon64.com/game/legend-of-sinbad",
    "CSDb search — Westgate (9 SID compositions, no scener page): https://csdb.dk/search/?seinsel=all&search=Westgate",
    "CSDb group id=3218 (unrelated cracker group, explicitly ruled out): https://csdb.dk/group/?id=3218",
    "Existing KB card: knowledge/players/robert-westgate-v2.md (the later companion driver, this same batch)",
    "Local dataset: 3 files tagged Robert_Westgate_v1, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Robert_Westgate_v1` tag is English composer Robert Westgate's
earlier playroutine (1984-1986), the first of two versions in his
output. He worked with the same coder, Jason Benham, across nearly his
entire discography. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **clean chronological
version split** matching an established pattern already seen elsewhere
in this KB; and a **consistent, unbroken coding partnership** with Jason
Benham spanning both this driver and its later sibling version, across
four different publishers.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). An original
disassembly (`SIDdecompiler.exe -r`) was attempted 2026-08-07 — see
Verification below for the real results (a strong partial on
Bigtop_Barney, a newly-diagnosed SIDdecompiler labeling defect blocking
Guzzler, Legend_of_Sinbad untouched). A future `verified` needs: (1) a
non-tautological confirmation for Bigtop_Barney (either resolve why its
relocation-invariance control fails — plausibly just the fixed-workspace
copy-loop being outside the relocatable model, not a real defect — or get
a live-debugger cross-check per lesson 110's precedent), and (2) fixing
the Guzzler label-anchor defect (or finding a workaround) before it can
be byte-diffed meaningfully at all.

## Verification

**Disassembly/byte-diff/trace-diff attempted (2026-08-07) — `status: in-progress` (unchanged, not verified).**

Disassembled all 3 tagged files with `SIDdecompiler.exe -r` (pristine-image
reload, per this project's own gotcha 63). Results differ sharply by file:

**Bigtop_Barney.sid (load $7100, init $7100, play $7180, 8 subtunes) — strong
partial result.** `SIDdecompiler`'s `-v2` map reported `Start: $2b00`, ~17.9KB
below the load address — NOT a dropped-byte case (gotcha 40's usual small
gap): a full read of the disassembly shows INIT contains an explicit
page-copy loop (`lda l7200,X / sta l4001,X`, `lda l7300,X / sta l4100+1,X`,
`lda l7400,X / sta l6900,X`, `lda l7500,X / sta l2b00,X`, `lda l7600,X / sta
l2c00,X`, `lda l7700,X / sta l2d00,X`) moving compiled note-tables and
per-voice workspace OUT of the loaded payload into fixed low-RAM addresses
outside the file's own address range. Relocating onto `-a` = decimal
`$2b00` (11008, zero net shift matching gotcha-40/lesson-33's mechanism)
and reassembling: **the covered portion of the true payload
($7100-$9f36, 11831 of 12032 bytes = 98.33% of the file) is
100.000000% byte-exact**; the remaining 201 bytes ($9f37-$9fff) sit past
SIDdecompiler's own traced `End:` address and were never dereferenced by
any of the 8 subtunes' emulation (plausible unreached per-song data,
per lesson 9 — not independently confirmed further). All 8 subtunes
traced identically to the original across 100 frames each via
`sidm2-sid-trace.exe` — but this is **tautological** (lesson 63/69: a
byte-exact `-r` build cannot help but reproduce the original's writes).
Ran the mandatory non-tautological relocation-invariance control
(lessons 69/70/72) at both a page-aligned (+$1000) and non-page-aligned
(+$1037) delta: **both failed** (66-146 diverging trace lines per
subtune depending on delta). This is NOT evidence the disassembly is
wrong — `diff <(tail -n+11 bigtop2.asm) <(tail -n+11 bigtop_aligned.asm)`
is **byte-for-byte identical text** (only the `* =` origin line differs),
so the control failure is 100% attributable to SIDdecompiler's blanket
symbolic relocation incorrectly shifting the driver's *fixed* low-RAM
copy-destination addresses (which the original 1984 game intentionally
keeps fixed regardless of where the SID rip's own code/data landed) —
exactly the pattern this project's own `sid-player-verify` lessons
already document (fixed-low-RAM-workspace-plus-copy-loop, matching
"lesson 108"'s precedent almost exactly). Given the tautological trace
and the untraced 201-byte tail, this stops short of `verified` by this
project's own bar, but it is a strong, precisely-quantified result.

**Guzzler.sid (load $1000, init $1000, play $1003, 11 subtunes) — blocked
by a newly-identified SIDdecompiler defect.** `-v2` Start: matches load
address exactly (no workspace-gap issue). Native (`-a4096`, zero shift)
byte-diff came back only **29.71% (7193/10233 diffs)** despite 99.99%
`-v2` coverage — a genuinely bad, non-noise-floor result. Root-caused via
`64tass --labels`: of 78 self-modified-operand anchor labels sampled, 67
(86%) resolve to an address that differs from their own printed hex name
(deltas of +1 x57, +2 x9, +3 x1) — e.g. `l125a` (used BARE in `jmp l125a`)
actually assembles to `$1259`, one byte early; `l13e7` (used bare in `lda
l13e7`) assembles to `$13e6`. Most of these deltas are legitimate and
correct — SIDdecompiler's own anchor-labeling convention (gotcha 19/lesson
120: a label like `l1204` is defined 2 bytes early because it's only ever
referenced as `l1204+2`, an operand byte of a DIFFERENT self-modified
instruction) — but at least 2 confirmed instances (`l125a`, `l13e7`) are
used BARE elsewhere (not with a `+N` suffix) while still resolving off
their own printed name, which is a genuine defect in SIDdecompiler's own
default `-r` output (no hand-editing was involved — this is what the tool
itself emits): the same symbol text is apparently being reused both as a
"+1"-style anchor AND as a plain jump target, and 64tass naturally
resolves it only to the anchor's own (offset) address. This is a **new**
finding, distinct from and more severe than gotcha 19 (which describes
a bug introduced by manually renaming a syntactically-illegal
`<label>+1`): here it recurs in SIDdecompiler's own fresh, unedited
output, at a scale (67/78 sampled labels affected, though most are
legitimate `+N` anchors) that makes a full per-symbol audit
labor-intensive. **TODO, not resolved this pass**: distinguish the
genuinely-buggy bare-use symbols from the correctly-offset anchor-only
symbols across the whole file (not just the 2 confirmed), fix each via
lesson 39/62's algorithmic value-recovery technique, then re-diff.

**Legend_of_Sinbad.sid — not attempted this pass** (time budget). Its
init ($cbac) sits far from its own load address ($9300), a bigger gap
than Bigtop_Barney's workspace pattern — worth checking for the same
self-relocating-copy mechanism, or a different one (lesson 47/55's
JMP-chain/loader-stub pattern), before disassembling.

**No RetroDebugger pass was possible or attempted** — the MCP server was
disconnected for this whole session. If/when reconnected, the concrete
thing worth checking on Bigtop_Barney is whether the relocation-control
divergence really is fully explained by the fixed-copy-destination theory
(watch the $2b00-$2dff/$4000-$4200/$6900 region across two live relocation
runs during a single frame) rather than static inference alone — this
project's own lesson 110 treats a matching static signature as sufficient
to reach `verified` without a live debugger, but that call is for the
orchestrating session to make, not this pass.

Net: `status` stays `in-progress`. Bigtop_Barney is close (100% byte-exact
on 98.33% coverage, structurally-explained non-tautological control
failure) but not `verified` by this project's own no-rounding-up rule;
Guzzler surfaced a genuine, reusable, previously-undocumented finding
about SIDdecompiler's own label-anchor defect rather than reaching any
match at all.

**Bigtop_Barney scope-expansion pass (2026-08-08) — structural theory
strengthened, `status` unchanged, RetroDebugger available but not used
this pass.** Re-disassembled from scratch (`SIDdecompiler.exe -a11008
-z -d -c -v2 -r` for native/zero-shift, `-a15104` for the +$1000
page-aligned relocation control — the prior pass's own "+$1000" note was
re-derived correctly this time: 11008+4096=15104/$3b00, not the
$2f00/+$400 an early arithmetic slip in this pass first produced and
caught before it went anywhere). Confirmed the prior pass's own
byte-for-byte `diff` finding still holds. Tried `SIDdecompiler`'s `-A`
flag (its own dedicated "force page alignment" workaround, the same one
lesson 110 cites) at both the native and relocated `-a` values — **no
effect**, output identical to without `-A` (only a trailing-newline
diff) — this flag does not fix this file's case.

Went looking for the exact set of *external* references into the
fixed-destination workspace, since the prior pass's write-up named only
the 6 copy-loop `STA` destinations. Found the scope is measurably
bigger: (1) `jsr l4001` (play routine, calling into the just-copied
$4001 block) and `jsr l40ac` (init routine, calling a different entry
point inside the same copied block) are both external calls whose
target label would shift with any chosen relocation origin even though
the copy loop deposits the actual code at a fixed address — a second,
independent defect class from the 6 known `STA`s, not previously
recorded on this card; (2) a 25-entry self-modifying-operand table
encoding `$6900` through `$6918` sequentially (`bd <l6900 / >l6900 / 8d
...` repeated) — consistent with a per-instrument LDA-operand patch
loop reading from the fixed $6900 workspace, i.e. more external
references into the same destination range than the single `STA
l6900,X` the prior pass counted; (3) 6 further `>l2b00` byte
occurrences embedded in what reads as an instrument/note-parameter data
table (mixed with plain small integers like `$0b`/`$2d`/`$0a`) —
plausibly either more real address-patch references into the fixed
$2b00 workspace, or SIDdecompiler false-positively matching the literal
byte value `$2b` against a valid address's high byte (this project has
hit that false-positive class before); either reading converts to the
same literal-byte fix, so it doesn't change the conclusion either way,
just wasn't chased to a definitive answer.

**This means a full static fix needs pinning every external touch-point
into $2b00-$2eff/$4001-$4171/$6900-$6918 to a fixed native address (not
just the 6 `STA`s), most cleanly via per-block `* = <fixed addr>` origin
pins around each workspace region rather than patching each usage site
individually** — attempted analysis only, no `.asm` edit was actually
applied and reassembled this pass (time budget within a 9-card batch).
RetroDebugger was confirmed available and idle this session but was not
invoked for Bigtop_Barney — the static scope-mapping above consumed the
available time and surfaced more structure than a live single-frame
memory watch would have shown on its own. **Status stays `in-progress`.**
Guzzler's SIDdecompiler label-anchor defect and Legend_of_Sinbad were not
revisited this pass.

Next step, concretely scoped: either (a) apply the multi-block `* =` pin
fix above, reassemble, and re-run the relocation-invariance control
(`scripts/dev/rewrap_reloc.js` + `scripts/dev/vsid-trace.js`, the
non-RetroDebugger path this session used successfully on
[[ozzy-oldskool-v2]]) to see if it closes fully, or (b) use RetroDebugger
to watch the $2b00-$2dff/$4001-$4171/$6900-$6918 regions across two live
relocation runs during one frame, per the prior pass's original
suggestion — (a) is now the better-informed option given how much more
of the reference set is mapped.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb (2
entries), and the related robert-westgate-v2 card.
