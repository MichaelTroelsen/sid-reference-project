# NinjaTracker V2.x

```json
{
  "id": "ninjatracker-v2x",
  "name": "NinjaTracker V2.x",
  "aliases": ["NinjaTracker_V2.x"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2006 (v2.0, CSDb release 39374); iterated to v2.04 by 2013 (CSDb release 119721)",
  "status": "in-progress",
  "platform": "Native C64 editor, 6502/DASM assembly. Official archive ships editor + a separate relocatable \"gamemusic\" playroutine (nt2play.s) with full source; rebuildable with DASM, Pucrunch and the c64tools package.",
  "csdb_release": 39374,

  "memory": {
    "load_address": "TODO: no fixed base address confirmed for the standalone tracker-exported .sid player. The gamemusic variant (nt2play.s) is deliberately relocatable via a 21-entry fixup table (NT_NUMFIXUPS=21) patched by nt_newmusic — not assembled at one fixed address.",
    "zero_page": "$fc-$fd (2 consecutive bytes: nt_zpbase=$fc, nt_temp1/nt_temp2), per nt2play.s source. Matches DeepSID spec's '2; can be user defined (?)' note.",
    "layout": "Per nt2play.s: song table + per-channel pattern/command/legato-command/wave/pulse/filter streams, addressed via 6-byte-header offsets (NT_ADDWAVE=$00, NT_ADDPULSE=$04, NT_ADDFILT=$08, NT_ADDCMD=$0c, NT_ADDLEGATOCMD=$10, NT_ADDPATT=$14) relative to a per-song base. TODO: exact absolute layout of the standalone (non-gamemusic) tracker export — not confirmed from source."
  },
  "entry": {
    "init": "Gamemusic variant only (nt2play.s): nt_newmusic (A/X = musicdata address lo/hi, patches the fixup table) then nt_playsong (A = tune number 0-15, 16 subtunes). TODO: init entry/convention for the plain standalone .sid export — not the same code path as nt2play.s, unconfirmed.",
    "play": "nt_music — 'Call each frame to play music and sound effects' (source comment, nt2play.s). Also drives nt_playsfx (channel-priority sound effects on channel 0/7/14)."
  },
  "speed": "1x, called once per frame per the play routine's own doc comment ('Call each frame...'); no CIA/multispeed code found in nt2play.s. TODO: confirm same for the standalone tracker-exported player (not just the gamemusic variant).",

  "data_format": {
    "order_list": "Per-channel song/track position list (nt_chnsongpos), one per channel plus pattern number (nt_chnpattnum). TODO: exact byte encoding.",
    "patterns": "Referenced via NT_ADDPATT-offset streams (nt_chnpattpos walks them); DeepSID spec describes up to 127 patterns of up to 180 rows, 'order list with one pattern shown' in the editor. TODO: byte-level pattern command format.",
    "instruments": "DeepSID spec: '127 commands' (commands double as instruments, per the archive's readme.txt: 'general purpose commands (or instruments)', paraphrased on cadaver.github.io/tools.html as 'commands (also used as instruments)'). TODO: exact table layout.",
    "wavetable": "NT_ADDWAVE-offset stream, addressed via nt_chnwavepos/nt_chnwave; DeepSID spec: arpeggio done via the wave table (design also described by the author as 'a minimalistic and fast playroutine centered on the wavetable - it does note init, arpeggio and vibrato/slides all in one').",
    "pulsetable": "NT_ADDPULSE-offset stream (nt_chnpulsepos/nt_chnpulse); DeepSID spec: pulse is 'Programmable'.",
    "filtertable": "NT_ADDFILT-offset stream (nt_filtpos/nt_filttime); DeepSID spec: filter is 'Programmable' (a separate DeepSID field, hard_restart, is 'Set globally' — not the same as filtering; do not conflate the two)."
  },
  "effects": {
    "encoding": "TODO: exact command-byte layout not transcribed from source (nt_cmdwave/nt_cmdpulse/nt_cmdsr/nt_cmdad/nt_cmdfilt pointer fixups exist but the per-byte opcode meanings weren't read in this pass).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": ["ninjatracker-v1x"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "V2.x is an iteration of Cadaver's earlier NinjaTracker (V1.02/V1.1, 2002, CSDb release 7206 per SIDId's separate NinjaTracker_V1.x tag) — the archive's own readme.txt states 'Main differences to previous versions are general purpose commands (or instruments), two-column tables and a slide function that knows to stop at the target pitch'; the author's own site (cadaver.github.io/tools.html) paraphrases the same point ('Changes to previous versions include commands (also used as instruments), 2-column tables and a slide function that stops at target pitch') but carries no release dates. No card exists yet for the V1.x family; the successor_of edge above (id 'ninjatracker-v1x', matching this project's version-suffix naming convention) is dangling until one is written.",
    "The official archive ships TWO distinct player code paths: the tracker's own standalone .sid-export player, and a separate 'gamemusic' playroutine (nt2play.s, source read directly for this card) meant for embedding multiple tunes/SFX in a game with a shared, relocatable player. Facts under memory/entry/speed above come from nt2play.s specifically — do not assume they hold unmodified for a plain HVSC-collection .sid exported by the editor without verifying against an actual disassembly of one.",
    "A GoatTracker-to-NinjaTracker2 converter tool exists (gt2nt2.zip, 'converts GoatTracker2 songs to NinjaTracker V2.03+ format with some limitations') and instrument import from GoatTracker is listed in the DeepSID spec (`import_from: GoatTracker instruments`) — this is a data importer, not a shared player/routine, so no `derives_from`/`shares_routine_with` edge to GoatTracker is asserted.",
    "Composer concentration in this dataset is narrow: 18 composers, 90 files, with 'Jerusalem Spider' alone accounting for 29 of the 90 (~32%) and the top 3 composers for 52 (~58%) — consistent with a real but lightly-adopted tool rather than a widely-spread mainstream tracker (data/composers/*.json aggregate).",
    "V1.x and V2.x are tracked as separate SIDId/DeepSID tags/entries despite being the same author's evolving tool — do not merge their file counts or CSDb release IDs."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag.NinjaTracker_V2.x): author 'Lasse Öörni (Cadaver)', released '2006 Covert Bitops', reference https://csdb.dk/release/?id=39374",
    "data/players.json (cached DeepSID player spec, title 'NinjaTracker v2.x'): developer Cadaver, start_year 2006, end_year 2013, csdb_id 119721, site https://cadaver.github.io/, distribution Freeware, player_size 'Approx 1000 bytes', zero_pages '2; can be user defined (?)', cpu_time 'Approx 12-13 rasterlines [SD]'",
    "CSDb release (v2.0, 30 Aug 2006): https://csdb.dk/release/?id=39374",
    "CSDb release (v2.04, 19 Jun 2013): https://csdb.dk/release/?id=119721",
    "Author's own tool page (paraphrased version history, download links): https://cadaver.github.io/tools.html — NOTE: the verbatim version-history quote and the source-rebuild requirements (DASM/Pucrunch/c64tools) cited above are from the archive's readme.txt, not this page; tools.html only paraphrases the former and does not state the latter.",
    "Author's design-philosophy page (wavetable-centric playroutine description, quoted verbatim in Overview): https://cadaver.github.io/rants/music.html",
    "nt2play.s (NinjaTracker V2.04 gamemusic playroutine source, Cadaver 6/2013) read directly for memory/entry/speed facts above, mirrored at https://raw.githubusercontent.com/localhost/NinjaTracker/master/nt2play.s (third-party mirror of Cadaver's official archive contents — readme.txt on that mirror is the primary source for the version-history quote and rebuild requirements cited above; cadaver.github.io/tools.html independently paraphrases the same version history but carries no release dates, so it is not a verbatim match)",
    "Local dataset: 90 files tagged NinjaTracker_V2.x across 18 composers (see knowledge/COVERAGE.md, rank 11 combined with V1.x at 106 files)"
  ]
}
```

## Overview

NinjaTracker V2.x is a native C64 music editor by Lasse Öörni (Cadaver) of
Covert Bitops, first released as v2.0 on 30 August 2006 and iterated through
v2.04 by June 2013. It's the second generation of Cadaver's own tracker line
(NinjaTracker V1.02/V1.1 dates to 2002) — the author describes it as "still a
somewhat minimal music editor," with V2's headline additions being
general-purpose commands doubling as instruments, two-column tables, and a
slide effect that stops cleanly at its target pitch. The author's own design
note calls the playroutine "minimalistic and fast... centered on the wavetable
- it does note init, arpeggio and vibrato/slides all in one," and DeepSID's
cached spec backs this up with a compact footprint (~1000 bytes, ~12-13
rasterlines). In this collection it's a modestly-used tool: 90 files across 18
composers, dominated by one composer (Jerusalem Spider, ~32% of files) — real
adoption beyond the author's own circle, but not a mainstream tracker. Source
code is included in the official archive and freely redistributable/
modifiable ("customization is allowed and encouraged" per the archive's own
readme), though no formal open-source licence is stated anywhere found.

## Quirks & gotchas

See the `quirks` array in the JSON block — the two load-bearing ones: (1) the
archive contains **two different player code paths** (the tracker's own
.sid-export player vs. the separate relocatable "gamemusic" playroutine,
`nt2play.s`) and this card's Tier-3 facts come only from having read the
latter's source directly, not from disassembling an actual HVSC `.sid`; (2)
V1.x and V2.x are separate SIDId tags/CSDb releases by the same author and
must not be conflated when counting files or citing release IDs.

## Disassembly notes

No disassembly was performed for this card — Tier 3 facts (zero page, entry
points, speed, table layout) come from **reading the public, commented
assembly source** `nt2play.s` (the gamemusic playroutine variant shipped in
the official archive), not from tracing a compiled `.sid`. That source gives
real, citable specifics: a 2-byte ZP work area at `$fc`, `nt_newmusic` /
`nt_playsong` / `nt_music` / `nt_playsfx` entry points, a 21-entry relocation
fixup table, and a per-frame call convention documented in the source's own
comments. It stops short of documenting the exact per-channel pattern/command
byte encodings (effects.commands is empty) and does not confirm whether the
plain tracker-exported `.sid` player (as opposed to the gamemusic variant)
shares this exact layout — that would need an actual disassembly of a
representative HVSC file plus a `sidm2-siddump` trace.

## Verification

Not verified. Facts are either (a) cached DeepSID/SIDId spec data
(`data/players.json`, `data/sidid.json`) taken at face value, or (b) read
directly from the public `nt2play.s` source without reassembling or tracing
it. No init/play was reconstructed and run through `mcp-c64`/`sidm2-siddump`,
so `status` stays `in-progress` (some Tier 3 confirmed from real public
source) rather than `verified`.

## Sources

See the `sources` array in the JSON block — SIDId, the cached DeepSID player
spec (`data/players.json`), two CSDb release pages (v2.0 and v2.04), the
author's own site (version history + design philosophy pages), the
`nt2play.s` gamemusic playroutine source (read directly), and this project's
local composer-file aggregate for usage stats.
