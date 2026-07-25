# Sosperec

```json
{
  "id": "sosperec",
  "name": "Sosperec",
  "aliases": ["Sosperec", "Graffity/Grabowsky"],
  "authors": ["Gabor Torday (Grabowsky) / Trays, Graffity"],
  "released": "1991",
  "status": "verified",
  "platform": "Native C64 tool (\"Sosperec Editor V1.0\") — no evidence of a cross-platform editor; all known artifacts (editor, relocator, depacker) are C64 disk images",
  "csdb_release": 18233,

  "memory": {
    "load_address": "NOT FIXED — the compiled tune binary is relocated per release/disk rather than always loading at one address. PSID-header load addresses read directly from CSDb's per-file SID pages vary widely across the sample checked: $0FFC (Cane \"Accord\"/\"Bahamas\"/\"Bassliner\", all same ADSR 1993 compilation, csdb.dk/sid/?id=5819/5824/5825), $0FFA (Eclipse \"Farewell\", id=11661), $1000 (Peet \"Harvy\", id=23233; also the standalone \"Sosperec Test\" SID, id=13639), $2500 (Trays \"Amöba\", id=29600), $BD00 (DOS \"Blue-eyes\", id=9221, same 1993 ADSR compilation as the Cane files above yet a completely different address). This is consistent with the separately-catalogued \"Sosperec Relocator\" tooling noted elsewhere in this card. No single canonical load address exists to document; no disassembly of the relocated binary itself was performed.",
    "zero_page": "CONFIRMED 2026-07-25 by disassembly: exactly 6 bytes, $FA-$FF, used throughout Accord.sid's/Bahamas.sid's play routine (labels zfa..zff in the SIDdecompiler output) — matches DeepSID players.json's cached figure exactly.",
    "layout": "Relative to the file's own load address (verified on the Cane/ADSR-1993 build, load=$0FFC): load+$004-load+$067 is an unreferenced-looking data table (envelope/volume-ramp constants, e.g. $16,$27,$39,$4B,$5F,$74,$8A,$A1 ascending); load+$225-load+$256 is a small self-modified-immediate-operand arithmetic block (filter-cutoff-style accumulation, `lda #$00 / clc / adc lXXXX,X / sta <that same operand>+1`, repeated for 3 counters) whose SIDdecompiler-captured post-execution snapshot must be patched back to the file's own pristine byte values before it reassembles trace-exact (see Verification); load+$79E-load+$82F is a larger (~0x92-byte) self-modified working-storage/lookup table, same drift-then-patch pattern. Order-list/pattern/instrument table addresses beyond this were not further mapped — out of scope for a byte/trace verification pass."
  },
  "entry": {
    "init": "NOT FIXED — varies with the load-address relocation above (PSID header init addresses read from CSDb): $0FFC (Cane, ids 5819/5824/5825 — CONFIRMED by disassembly: `tax / jmp <dispatch>`, own convention, not a bare RTS), $0FFA (Eclipse \"Farewell\", id=11661), $1103 (Peet \"Harvy\", id=23233), $2500 (Trays \"Amöba\", id=29600), $BE03 (DOS \"Blue-eyes\", id=9221). Only the Cane/$0FFC build's init was disassembled/verified this pass; the others are presumed the same code under the \"Sosperec Relocator\" tooling, not independently confirmed.",
    "play": "NOT FIXED — same relocation pattern (PSID header play addresses read from CSDb): $1100 (Cane's 3 ADSR-compilation files above and Peet \"Harvy\", id=23233 — CONFIRMED by disassembly on 2 independent Cane files, see Verification), $0FFD (Eclipse \"Farewell\", id=11661), $BE00 (DOS \"Blue-eyes\", id=9221), $0000 (Trays \"Amöba\", id=29600 — per PSID convention a play address of 0 means play is IRQ-driven rather than directly callable, not that the field is unset). Only the Cane/$1100 build's play routine was disassembled/verified this pass; the others are presumed the same relocated code, not independently confirmed."
  },
  "speed": "TODO: not documented publicly; a Lemon64 forum post (2007) calls its 1991 playroutine \"quite advanced for its time\" with rastertime comparable to GoatTracker 2 with optimizations disabled, but gives no numeric speed/timing model",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no source or format spec found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "VERIFIED 2026-07-25: disassembled and byte/trace-verified the Cane/\"1993 ADSR\"-compilation build (load=init=$0FFC, play=$1100) on two independent real files (Accord.sid, Bahamas.sid) — see Verification section for the full method. Both reassemble byte-exact and register-write-identical (300 PAL frames) once ~56-80 self-modified working-storage/table bytes are patched back to their pristine cold-start values, a known SIDdecompiler post-execution-snapshot artifact (project lessons 16/17/29/43), not a real code difference. This confirms DeepSID players.json's cached zero-page figure (\"6 bytes, $FA-$FF\") exactly, from an actual disassembly rather than trusting the cached database entry. Does NOT extend to the other relocated builds this card documents (Eclipse/Peet/Trays/DOS) — those are presumed the same code moved by the separately-catalogued \"Sosperec Relocator\" tooling, but were not independently disassembled this pass.",
    "Composer concentration: of 91 files in this dataset tagged \"Sosperec\", 48% (44/91) are by a single composer (Cane), a further 21% (19/91) by DOS, and the remaining ~31% is spread across 11 other composers (Cherubs Sentinel, Chubrock, Eclipse, Fire, JVD, Marcy, Mercury, NecroPolo, Peet, Trays, Vincenzo). This is a moderately concentrated tool — heavily used by its core circle (Grabowsky's own groups Trays/Graffity, and affiliated Samar Productions members) but not a single-composer personal routine.",
    "Follow-on tooling by other groups exists (a \"Sosperec Relocator\" by Trays 1991 and by Chimera 1994, and a \"Sosperec V1.4 Depacker\" by Samar Productions 1998), evidence the format/binary needed relocating or depacking for reuse outside its original disk — but no derivation/lineage claim is made here since none of these state they modify or extend the play routine itself, only that they relocate or unpack existing Sosperec-format tunes.",
    "A dedicated SID entry 'Sosperec Test' (composer Lukasz Baran/Glover, Samar Productions; CSDb lists its release year as unknown, '199?', not a confirmed date) exists on CSDb — evidence of ongoing scene interest/use beyond the original 1991 authors, but not evidence of a format or lineage relationship to another player.",
    "'Graffity/Grabowsky' is a SECOND raw DeepSID tag (8 files) for what is the SAME tool as this card, not a different player. Evidence: all 8 files are by composer Trays (László Imre Földes / handles Trays, Hetye), who ALSO has 5 files tagged plain 'Sosperec' — and the two tags are INTERLEAVED within the same multi-part tune sets in data/composers/trays.json (e.g. 'Justintime part 3/6/8' = Sosperec, 'Justincase note/part 4/part 7' = Graffity/Grabowsky; 'Promethida note' = Sosperec, 'Promethida part 2/5/6/7/9' = Graffity/Grabowsky, all by the same composer in the same series). No separate 'Graffity/Grabowsky' entry exists in data/sidid.json — only 'Sosperec' does — consistent with 'Graffity/Grabowsky' being an unmatched-signature fallback (likely echoing the PSID header's own credit string) on files SidId's Sosperec rule didn't recognize, rather than a distinct tool. Folded into this card's aliases/totals rather than given a separate card.",
    "SPECIAL NOTE ON GROUP OVERLAP: 'Graffity' is also the group behind GMC and DMC (see gmc.md / dmc.md), authored by a DIFFERENT member, Brian (Balázs Farkas). Grabowsky (Gabor Torday) joined Graffity in May 1991 alongside Hetye/Trays, arriving FROM the group Trays (per Grabowsky's CSDb scener page); Sosperec Editor's own CSDb credit line reads 'Grabowsky of Graffity and Trays groups'. This explains the shared 'Graffity' label on two unrelated tools by two different coders — no source, credit, or lineage evidence ties Sosperec's code to GMC/DMC's, so no edge is asserted between them.",
    "SHARED HUNGARIAN-SCENE COMPOSER CIRCLE with [[chubrocker]] — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Chubrock, DOS, Mercury and Peet each used both Sosperec and Chubrocker (László Benke/Dec's mid-1990s Hungarian tracker); all four are Hungarian and neither tool's author. Same-scene composer circle picking up two native-Hungarian trackers — a shared-USERS relationship, NOT shared code (different coders, Gabor Torday/Grabowsky vs László Benke/Dec; neither disassembled). No `shares_routine_with` edge asserted; navigational link only.",
    "RELOCATABLE BINARY, NOT A FIXED LOAD/ENTRY ADDRESS — verified 2026-07-23 by pulling the PSID-header load/init/play addresses (as shown on CSDb's per-file SID pages) for six Sosperec-tagged files spanning five different composers: Cane's \"Accord\"/\"Bahamas\"/\"Bassliner\" (all from the same 1993 ADSR compilation) load at $0FFC with play at $1100; Eclipse's \"Farewell\" loads at $0FFA with play at $0FFD; Peet's \"Harvy\" loads at $1000 with play at $1100; Trays' \"Amöba\" loads at $2500 with play $0000 (IRQ-driven per PSID convention); DOS's \"Blue-eyes\" — from the SAME 1993 ADSR compilation as the Cane files, yet a different composer's tune — loads at $BD00 with play at $BE00. Even within one compilation the address differs by composer, ruling out a single fixed engine address. This matches the standalone \"Sosperec Relocator\" tooling already noted in this card and explains why no fixed memory map can be published for this tool: each release is individually relocated. Source: csdb.dk/sid/?id=5819,5824,5825,11661,23233,29600,9221 (fetched directly, not from any local cache)."
  ],
  "sources": [
    "sidid:Sosperec (author Gabor Torday (Grabowsky); released 1991; reference CSDb release 18233) — data/sidid.json byTag.Sosperec",
    "CSDb release \"Sosperec Editor V1.0\" by Grabowsky (Trays/Graffity), 1991: https://csdb.dk/release/?id=18233",
    "CSDb scener profile \"Grabowsky\" (handle GRB, Hungary, coder, groups 1111 Team → Smartworks → Trays 1989-1991 → Graffity from 1991): https://csdb.dk/scener/?id=9937",
    "Lemon64 forum, \"Hein Holt is a genius\" thread — user nata: \"IMO rastertime from sosperec editor is quite OK. It had quite a really advanced playroutine for it's time (1991)\": https://www.lemon64.com/forum/viewtopic.php?p=949535",
    "CSDb search for related Sosperec tooling: \"Sosperec V1.4 Depacker\" (Samar Productions, 1998, id 34081), \"Sosperec Relocator V1.2\" (Chimera, 1994, id 101770), \"Sosperec Relocator\" (Trays, 1991, id 256703), and \"Sosperec Test\" SID (Lukasz Baran/Glover, Samar Productions, release year unknown per CSDb ('199?'), id 13639)",
    "data/players.json (cached DeepSID player entry: developer \"Grabowsky\", start_year 1991, csdb_id 18233, platform \"Native / C64 emulator\", zero_pages \"6 bytes ($FA-$FF)\"; most other fields blank in the source dump)",
    "Local dataset: 91 files tagged Sosperec + 8 files tagged Graffity/Grabowsky (all composer Trays, folded in here as the same tool) = 99 files across the same 13 composers (aggregated from data/composers/*.json, cross-checked directly against data/composers/trays.json)",
    "No public source code, format spec, or Codebase64/HVSC documentation was found for Sosperec — searches of Codebase64 and general web returned nothing beyond the CSDb release/scener pages and the Lemon64 forum mention above",
    "2026-07-23 research pass: re-verified the 91+8=99 file / 13-composer split directly against data/composers/*.json (script count matches the card's existing figures exactly); fetched CSDb's scener page for Grabowsky (https://csdb.dk/scener/?id=9937, confirms group timeline 1111 Team -> Smartworks -> Trays 1989-1991 -> Graffity from 1991, and a separate, non-SID collaboration 'The Old Typer' with Hetye — not a music tool, not added as an edge); fetched CSDb's per-file SID pages for six Sosperec-tagged files across five composers (ids 5819, 5824, 5825, 11661, 23233, 29600, 9221) to check PSID load/init/play addresses, finding the binary is relocated per release rather than fixed (see quirks) — no new source code, format spec, or disassembly was found, so status remains stub",
    "2026-07-25 verification pass: disassembled MUSICIANS/C/Cane/Accord.sid and MUSICIANS/C/Cane/Bahamas.sid (real HVSC files, csdb.dk/sid/?id=5819 and ?id=5824) directly from their PSID-embedded binaries with SIDdecompiler.exe (-a4092 -z -d -c -v2) and reassembled with 64tass.exe; both byte-diffed 98.0-98.4% at native alignment, with every divergent byte falling on a self-modified/write-touched -v2-map address; patching those bytes back to the original file's own pristine values (a pure binary data patch, no re-disassembly) produced a 100.0000% byte-exact reassembly on both files and a register-write-identical trace (sidm2-sid-trace.exe, 300 PAL frames, init=$0FFC play=$1100) against each original file's own raw bytes — promoted status from stub to verified on this basis (see Verification section for full method and scope)"
  ]
}
```

## Overview

Sosperec is a native Commodore 64 music editor/player written by Gabor Torday,
known on the scene as Grabowsky, released in 1991 as "Sosperec Editor V1.0"
while he was a coder for the Hungarian groups Trays (until May 1991) and then
Graffity. The raw dataset splits its usage across TWO tags — "Sosperec" (91
files) and "Graffity/Grabowsky" (8 files, all by composer Trays, interleaved
with plain-Sosperec-tagged files within the same tune series) — folded
together here as one tool (see quirks). Combined it covers **99 files across
13 composers**, dominated by Cane (48% of the 91 Sosperec-tagged files) and
DOS (21%), with a long tail of smaller users tied to Trays/Graffity/Samar
Productions — consistent with a small-scene tool that was adopted by a real
circle of composers rather than staying a single author's private routine.
Despite the shared "Graffity" group label, this is NOT the same code as
[GMC](gmc.md)/[DMC](dmc.md) — those are by a different Graffity coder, Brian
(Balázs Farkas); no source or credit evidence links Sosperec to their code. A
2007 Lemon64 forum post recalls its playroutine as unusually advanced for
1991, with rastertime comparable to GoatTracker 2 running with several
optimizations disabled — the only qualitative technical claim found for this
card. No public source code, format spec, or prior disassembly exists. A
2026-07-23 check of PSID-header addresses across six files from five
composers confirms the compiled player binary is relocated per release (load
addresses seen: $0FFC, $0FFA, $1000, $2500, $BD00) rather than always loaded
at one fixed location — explaining why no single memory map can be published
for this tool, and matching the separately-catalogued "Sosperec Relocator"
tooling already noted below. A 2026-07-25 pass disassembled the compiled
binary directly (from the PSID payload, since no separate source exists) for
the Cane/"1993 ADSR" build (load=init=$0FFC, play=$1100) and confirmed it
byte-exact and register-write-exact against two independent real files —
**`status: verified`** for that build; the other relocated builds are
presumed the same code, moved, but weren't independently disassembled.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: DeepSID's cached
"6 bytes ($FA-$FF)" zero-page note in `data/players.json` is now
**independently confirmed by an actual 2026-07-25 disassembly** of the
Cane/$0FFC build (see Verification) — no longer just a carried-forward
database figure. Also load-bearing: **"Graffity/Grabowsky" is this same tool under a
second raw tag**, not a distinct player — merged in via interleaved
composer/tune-series evidence (see quirks) — and it is **unrelated to
GMC/DMC** despite the shared "Graffity" group name (different coder, no
code-sharing evidence).

## Disassembly notes

**2026-07-25: real disassembly performed and verified** (see Verification).
No public Sosperec source exists (searches covered CSDb, Codebase64, and
general web came up empty), so both real HVSC files
(`Cane/Accord.sid`, `Cane/Bahamas.sid`) were disassembled directly from
their PSID-embedded binaries with `SIDdecompiler.exe`, at their own
confirmed load address ($0FFC), then reassembled with `64tass`. Init is a
short `tax / jmp <dispatch>` stub, not a bare RTS; play is entered directly
at $1100. Zero-page usage is exactly $FA-$FF (6 bytes), matching DeepSID's
cached figure exactly. Two self-modified regions needed patching back to
pristine byte values to reach an exact reassembly (see `memory.layout` and
Verification) — otherwise the disassembly's control flow and structure are
correct as generated, no hand-fixes to the `.asm` itself were required.

A 2026-07-23 pass (retained below for its own citations) had already pulled
PSID-header load/init/play addresses (public metadata on CSDb's per-file SID
pages, no disassembly required) for six files across five composers, and
found the compiled binary is **relocated per release** rather than loaded at
one fixed address — even two tunes from the same 1993 ADSR compilation (Cane
vs DOS) load at completely different addresses. See `memory`/`entry` fields
and the matching quirk for the full address table and citations. This pass's
disassembly confirms the Cane/$0FFC build specifically; the other relocated
builds are presumed the same underlying code (same "Sosperec Relocator"
tooling) but were not independently disassembled.

## Verification

**Verified 2026-07-25 — `status: verified`.** Method: pulled two real HVSC
files sharing the same Cane/"1993 ADSR" compilation build (load=init=$0FFC,
play=$1100) — `MUSICIANS/C/Cane/Accord.sid` (3396-byte payload) and
`MUSICIANS/C/Cane/Bahamas.sid` (4008-byte payload) — read their PSID headers
directly (both confirmed load=init=$0FFC, play=$1100, matching the card's
existing prose exactly), disassembled each with `SIDdecompiler.exe -a4092 -z
-d -c -v2` (4092 decimal = $0FFC; `-v2`'s own "Start:" line matched the PSID
load address exactly, so no relocation-mismatch trap per gotcha 40), and
reassembled with `64tass.exe -a --cbm-prg`. Both reassembled clean (no
warnings, exact payload length match).

**Byte-diff**: Accord.sid — 3340/3396 bytes exact (98.35%), 56 divergent
bytes. Bahamas.sid — 3928/4008 bytes exact (98.00%), 80 divergent bytes. In
both files every divergent byte fell inside a `-v2`-map `_`/`+`/`w`
(self-modified/read-write) region — two clusters, both files: a small
immediate-operand arithmetic block at load+$225-$256, and a larger
working-storage table at load+$79E-$82F (see `memory.layout`) — the classic
SIDdecompiler post-execution-snapshot drift pattern (project lessons
16/17/29/43), not a genuinely different reconstruction.

**Patch + re-trace**: overwrote each reassembled `.prg`'s divergent bytes
with the corresponding pristine bytes read directly from the original SID
file's own payload (no re-disassembly, no `.asm` text edits — a pure binary
data patch, safe here since every divergent byte is either a 1-byte `.byte`
table entry or a fixed-length immediate-mode operand, never an
instruction-length change per gotcha 19). Result: **both patched files
reassembled 100.0000% byte-exact**, and traced (via
`sidm2-sid-trace.exe`, `init=$0FFC play=$1100`, 300 PAL frames each) to
**register-write-identical** against a trace of the original file's own raw
bytes — the only difference in either diff output was the echoed input
filename on line 1. Confirmed twice independently (Accord.sid and
Bahamas.sid, same build, different tune data) per project lesson 42's rule
against generalizing from a single file.

**Scope of this verification**: this confirms the Cane/"1993 ADSR"-compilation
build's actual play routine, entry points, and zero-page usage
byte-for-byte and register-write-exact — a real, load-bearing reconstruction,
not just "plays and sounds right." It does **not** extend to the other
relocated builds this card documents (Eclipse $0FFA, Peet $1000, Trays
$2500/IRQ-driven, DOS $BD00) — those are presumed the same underlying code
under the separately-catalogued "Sosperec Relocator" tooling (same author,
same era, same convention), but none of them were independently
disassembled/traced this pass. A future pass could confirm this by
disassembling one of those builds at its own `-v2` Start address and
byte-diffing its play routine against Accord.sid's at the same relative
offset from its own entry point.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release
(`?id=18233`) and scener (`?id=9937`) pages, a Lemon64 forum mention of its
playroutine quality, related CSDb tooling entries (relocators/depacker),
`data/players.json`'s cached DeepSID entry, this project's local
composer-tag aggregation (91 "Sosperec" + 8 "Graffity/Grabowsky" = 99 files,
13 composers, re-verified 2026-07-23), CSDb's per-file SID pages for six files
across five composers used to check PSID load/init/play addresses
(`?id=5819,5824,5825,11661,23233,29600,9221`), and (new this pass, 2026-07-25)
a real disassembly of `MUSICIANS/C/Cane/Accord.sid` and
`MUSICIANS/C/Cane/Bahamas.sid` from the local HVSC collection, via
`SIDdecompiler.exe`/`64tass.exe`/`sidm2-sid-trace.exe` — see the Verification
section for the full method, exact byte-diff percentages, and address
ranges.
