# Andrew Colin (player routine)

```json
{
  "id": "andrew-colin",
  "name": "Andrew Colin (player routine)",
  "aliases": ["Andrew_Colin", "?Andrew_Colin/Talent"],
  "authors": ["Andrew Colin"],
  "released": "1982-1986 (Talent Computer Systems era)",
  "status": "verified",
  "platform": "A playroutine credited to Andrew John Theodore Colin (1936-2018) — CONFIRMED to be a notable British computer science professor (Strathclyde University), NOT the founder of Flair Software as an initial research hypothesis wondered. Author of 12 CS textbooks including the widely-used 'Introduction to BASIC' series, he founded educational-software house Talent Computer Systems around 1984. His own CSDb profile is flagged 'Obviously not a scener' — an outside historical figure catalogued for his SID output, not a demoscene participant. Player-ID-fingerprinted across 3 files: 2 by Colin, 1 by Stefano Tognon (an unrelated Italian demoscener, whose tune's title echoes Colin's own — see quirks).",
  "csdb_release": null,

  "memory": { "load_address": "Arrival_of_the_Queen_of_Sheba.sid: PSID load $801, init $8ab, play $827. The PSID-declared load address is NOT the player's own code start — $801-$80c is a standard C64 BASIC one-liner stub ('10 SYS2061'). Real 6502 code begins at $80d: JSR $8ab (init), SEI, sets IRQ vector ($0314/$0315) to $81f, CLI, JMP $81c (self-jump/idle loop). The IRQ handler at $81f reads a flag byte at $8ea (0=not yet primed -> JMP $ea31, the stock KERNAL IRQ; nonzero -> falls into play at $827 directly). SIDdecompiler's -v2 memory-touch map confirms this: 'Start: $0827' (NOT $0801) since the file's own PSID init/play vectors are called directly by any host, bypassing the $801-$826 BASIC/dispatcher stub entirely -- textbook case of hard_won_gotcha 40/lesson 34 (leading vector/stub bypassed, not a truncation). Correct SIDdecompiler relocation is therefore -a2087 (decimal for $0827, the -v2 Start: address), NOT -a2049 (decimal for the PSID header's own $801 load address) -- the latter produces a misaligned reassembly.", "zero_page": "$fe/$ff used as an indirect pointer (zfe/zff) into pattern data, set from the per-voice table below before an (zp),Y read.", "layout": "Play routine $827-$8a7 (loops per voice, X = 0/7/14, stride 7 covering 3 voices). Init $8ab-$8fe (clears $d400-$d418, sets 3 workspace vars). $8ff-$96b: SID-frequency lookup table (48 note values, referenced via l08ec index) plus a duration-table lookup pointer chain. $96c-$980 (21 bytes): the LOAD-BEARING per-voice initial-state working-storage table -- 7 bytes/voice x 3 voices: [0] note-duration countdown, [1]/[2] pattern-data pointer lo/hi, [3]/[4] a second pointer lo/hi (tempo table?), [5]/[6] a 16-bit counter. Read by play's very first instruction (`lda l096c,X`) before any write -- see Verification for why this defeated a naive reassembly." },
  "entry": { "init": "$8ab (also called directly by the loader stub at $80d via JSR).", "play": "$827 (called from the custom IRQ handler at $81f once primed)." },
  "speed": "IRQ-driven, custom vector installed at $0314/$0315 -> $081f (see memory.load_address); one play call per IRQ, no observed frame-skip/multi-speed logic in the 50-frame sample.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED: Andrew John Theodore Colin (1936-2018), a genuinely notable British academic — lecturer at Birkbeck College (1957-60), Director of the Computer Science Laboratory at Lancaster University (1965-70), then Professor of Computer Science at the University of Strathclyde, Glasgow, from 1970. Co-author (with A.D. Booth) of a 1960 dictionary-construction/binary-tree paper, and author of 12 computer-science textbooks, most notably the 'Introduction to BASIC' series (1981/82) widely used with 1980s home micros.",
    "FLAIR SOFTWARE CONNECTION EXPLICITLY RULED OUT: Flair Software was actually founded by Colin Courtney in 1990 (after Tynesoft), a different, unrelated person — confirmed via Wikipedia. No credible link between Professor Andrew Colin and Flair Software was found anywhere; this was an initial research hypothesis that did NOT pan out and is recorded here as a ruled-out dead end, not a finding.",
    "FOUNDED HIS OWN EDUCATIONAL SOFTWARE COMPANY: around 1984, he founded Talent Computer Systems (math/chemistry simulation software) with his wife Veronica and colleague Jon Malone — 'Kalah' (1984), one of his known programs, ties directly to this company.",
    "CSDb ITSELF FLAGS HIM AS AN OUTSIDE HISTORICAL FIGURE, not a scener: his profile (id=14419) carries the explicit note 'Obviously not a scener' — a rare, notable case in this KB of CSDb's own curators distinguishing an academic/commercial figure's catalogued SID output from genuine demoscene participation. Credits there: Andrew Colin Sound Demo (1982, code+music), Queen of Sheba (1983, code+music), Uncle Ben's Magic 2 (1986, music), plus a 1985 Vienna-Soft re-release of the Sheba tune. Four total SID compositions match this project's own broader catalog for him (Arrival of the Queen of Sheba, Bugle Call, Kalah, Testcard).",
    "CONFIRMED BOTH CODER AND MUSICIAN: C64-Wiki credits him with programs Reaction Time (1981), Hangman 64 (1982), Kalah (1984), Trasmat (1984), plus 'numerous music demos' through the 1980s — consistent with a self-taught, all-round programmer-academic rather than a specialist composer.",
    "THE 'RETURN OF SHEBA' TRIBUTE CONNECTION IS LEFT EXPLICITLY UNCONFIRMED: the 4th file under this tag, 'Return of Sheba' (composed by Stefano Tognon, an Italian scener — CSDb handle 'Ice00', founder of Ice Team, member of Hokuto Force, active from the early 2000s through at least 2026), has a title that clearly echoes Colin's own 'Arrival of the Queen of Sheba' (itself an arrangement of Handel's piece from the oratorio Solomon). No source found ties the two directly as a documented tribute or remix — it does not appear in CSDb's list of Tognon's notable productions, and this project's own STIL.txt only attributes the underlying tune to Handel, not to either composer specifically. The title-echo is real but reported as circumstantial, not proven.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB for either Andrew Colin or Stefano Tognon (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe — none found).",
    "DISASSEMBLY/REASSEMBLY VERIFIED (2026-07-25): SIDdecompiler.exe -a2087 -z -d -c -v1 on Arrival_of_the_Queen_of_Sheba.sid (relocated to the -v2 map's own 'Start: $0827' address, NOT the PSID header's $801 load address -- gotcha 40/lesson 34: $801-$826 is a BASIC loader stub + custom-IRQ-install dispatcher the PSID init/play vectors bypass entirely) reassembles via 64tass to a 5690-byte block ($0827-$1e60) that is 99.6309% byte-exact against the original payload out of the box (21/5690 bytes differ, one contiguous cluster $096c-$0980). A first raw trace of the unpatched reassembly was NOT a near-miss: it produced 0 SID register writes over 50 frames (total silence) vs the original's 48 -- the $096c-$0980 cluster is the load-bearing per-voice initial-state table described in `memory.layout` above, read by play's first instruction before ever being written, so SIDdecompiler's default trace-derived snapshot (a mid-playback drifted value) left the reconstruction reading a wrong cold-start note-duration counter and branching away forever. Patching those exact 21 bytes back to the pristine original file's bytes (verified via direct hex read at the true addresses, not guessed) closed the byte-diff to 100.0000% exact and made the trace register-write-identical: 48/48 writes matching frame-for-frame, cycle-for-cycle, old/new-value-for-value against the original .sid (diff_traces-style programmatic compare, 0 mismatches) -- also matching this card's own prior standalone trace-only pass (48 writes/50 frames). This is the drifted-working-storage-table pattern documented extensively elsewhere in this agent's lessons_learned (10/16/17/29/42/51) applied to a new player family, and it was genuinely load-bearing here (silence, not cosmetic) rather than dead, unlike several of those precedents.",
    "ALIAS MERGE (2026-07-18): the raw Player-ID tag `?Andrew_Colin/Talent` (1 file per knowledge/COVERAGE.md's uncarded-family sweep) is the SAME player/composer, not a distinct tool — confirmed directly from `data/composers/andrew-colin.json`, where the file `Kalah.sid` (composed by Andrew Colin, 17 subtunes, CSDb id=47810) carries this exact tag, while his other two files (Arrival of the Queen of Sheba, Testcard) carry the plain `Andrew_Colin` tag already covered above. The leading `?` marks it as an uncertain Player-ID match and the `/Talent` suffix ties it to Talent Computer Systems, the educational-software company Colin himself founded (~1984) — Kalah (1984) is one of his known Talent-era programs, already noted in this card. No separate research was warranted since the file, author, and company are all already documented facts in this card; merged by adding the tag to `aliases` rather than creating a near-duplicate card."
  ],
  "sources": [
    "HVSC Musicians.txt ('Colin, Andrew', bare entry; 'Tognon, Stefano - ITALY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "C64-Wiki — Andrew Colin (programs, biography): https://www.c64-wiki.com/wiki/Andrew_Colin",
    "Wikipedia — Andrew Colin: https://en.wikipedia.org/wiki/Andrew_Colin",
    "Oldcomputr.com — Andrew Colin (1936-2018): https://www.oldcomputr.com/andrew-colin-1936-2018/",
    "CSDb scener id=14419 (Andrew Colin, 'Obviously not a scener' note, full release list): https://csdb.dk/scener/?id=14419",
    "CSDb scener id=8082 (Stefano Tognon / Ice00, Ice Team/Hokuto Force): https://csdb.dk/scener/?id=8082",
    "Demozoo — Stefano Tognon: https://demozoo.org/sceners/29459/",
    "Wikipedia — Flair Software (confirms Colin Courtney as founder, ruling out the Andrew Colin connection): https://en.wikipedia.org/wiki/Flair_Software",
    "Local dataset: 3 files tagged Andrew_Colin, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Andrew_Colin` tag is Professor Andrew Colin's own playroutine — a
notable British computer scientist (Strathclyde University), author of
widely-used BASIC textbooks, and founder of Talent Computer Systems. An
initial hypothesis that he was the Flair Software founder was
investigated and explicitly ruled out. Player-ID-fingerprinted across 3
files under the plain `Andrew_Colin` tag: 2 by Colin, 1 by an unrelated
Italian scener whose tune title echoes his own — plus a 4th file
(`Kalah.sid`, also by Colin) under the related `?Andrew_Colin/Talent`
tag, merged into this card's `aliases` (same person, same Talent
Computer Systems era, uncertain-match-flagged variant tag).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **ruled-out identity
hypothesis** (Flair Software), reported honestly as a dead end rather
than omitted; and CSDb's own **explicit 'not a scener' flag** on his
profile — a rare, direct curatorial acknowledgment that this composer
sits outside the demoscene his SID output is nonetheless catalogued
within.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this card's own
original disassembly (2026-07-25, `SIDdecompiler.exe` + `64tass`, see
Verification) is the only one that exists. Load address `$801` is a plain
BASIC `SYS` loader stub, not the player's own code — see `memory.load_address`
for the full entry-point chain (loader stub -> init -> custom IRQ install ->
play).

## Verification

**Disassembled, reassembled, byte-diffed, and trace-diffed (2026-07-25) —
`status: verified`.** Real HVSC file: `Arrival_of_the_Queen_of_Sheba.sid`
(PSID load `$801`, init `$8ab`, play `$827`, 1 subtune).
`SIDdecompiler.exe -a2087 -z -d -c -v1` (relocated to the `-v2` map's own
`Start: $0827`, not the PSID header's `$801` — see `quirks`) + `64tass`
reassembly: **99.6309% byte-exact out of the box** (5669/5690 bytes; one
21-byte contiguous cluster at `$096c-$0980`). That cluster is a load-bearing
per-voice initial-state table (see `memory.layout`) SIDdecompiler's default
trace snapshot captured post-drift rather than pristine — confirmed
load-bearing, not dead: the unpatched reassembly traced to **0 SID register
writes over 50 frames** (total silence) against the original's 48. Patching
those 21 bytes to the pristine file's own values (verified by direct hex
read, not guessed) produced a **100.0000% byte-exact** reassembly whose
trace is **register-write-identical to the original: 48/48 writes, exact
frame/cycle/register/old-value/new-value match, 0 mismatches** — matching
this card's own prior (2026-07-14) trace-only pass. Verified against one
representative file; the other 3 files under this tag/alias
(`Bugle_Call_BASIC.sid`, `Kalah.sid`, `Testcard.sid`) were not
independently re-verified this pass (per this agent's own lesson 42/51
precedent, a second file could in principle show a different degree of
table drift — a reasonable follow-up, not required for this card's own
`verified` status since the representative file's reconstruction is a real,
cited, exact register-write match).

## Sources

See the `sources` array — HVSC Musicians.txt, C64-Wiki, Wikipedia (2
pages), Oldcomputr.com, CSDb (2 entries), and Demozoo.
