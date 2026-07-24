# NinjaTracker V1.x

```json
{
  "id": "ninjatracker-v1x",
  "name": "NinjaTracker V1.x",
  "aliases": ["NinjaTracker_V1.x"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2002 (v1.0, CSDb release 7206, 31 Oct 2002); iterated to v1.1 by 2004 (CSDb release 39501, 25 Jan 2004)",
  "status": "in-progress",
  "platform": "Native C64 editor, 6502/DASM assembly. Public source archive located and read directly this pass: ninjatr11.zip (CSDb release 39501, v1.1, downloaded from https://csdb.dk/getinternalfile.php/29754/ninjatr11.zip) contains src/ninjatrk.s (editor + standalone player, 155998 bytes), src/ninjagam.s and ntplay.s (gamemusic playroutine variant source, DASM format), readme.txt (full format/usage manual), readgam.txt (gamemusic variant manual), plus ins2nt.c (GoatTracker-instrument-to-NinjaTracker converter source) and test data. Demozoo tags this release 'source-available' (https://demozoo.org/productions/172658/), corroborating. No stated licence beyond readme.txt's 'It's also freeware; customization is allowed and recommended!'",
  "csdb_release": 7206,

  "memory": {
    "load_address": "No single fixed address — both code paths are relocatable, matching V2.x's pattern. Standalone/packed export: user chooses a 'baseaddress' at pack time via the editor's own disk-menu packer (readme.txt section 4, 'The filemenu'). Gamemusic variant (ntplay.s): loaded via `relocatemusic` (A/X = musicdata address lo/hi) at any address, and readgam.txt states it 'can actually move in memory if you wish so'. Not cross-checked against a real HVSC .sid file's PSID header in this pass (source-read only, no disassembly).",
    "zero_page": "CONFIRMED from source (ntplay.s line 1): `musiczpbase = $fb ;5 zeropage addresses required` — default $fb-$ff, 5 consecutive bytes, but relocatable to a user-chosen base at pack time (see `relocatemusic`, which patches all zeropage-relative pointers). readme.txt independently confirms the standalone/packed export too: 'you have to choose baseaddress and zeropage baseaddress; 5 zeropage bytes are used'. This differs from V2.x's disassembly-confirmed 2-byte pair ($fe-$ff) — V1.x's player uses a larger, 5-byte, user-relocatable ZP window, not V2's fixed 2-byte pair. Supersedes this card's earlier caution about the cached DeepSID spec's '3-5 bytes' figure — now source-confirmed at the top of that range (5).",
    "layout": "CONFIRMED from source (ntplay.s): per-channel state is held in parallel tables indexed by X=0/7/14 (one index per SID voice, 7-byte stride) — e.g. `vchnsongpos`, `vchnwavedelay`, `vchnwavestored`, `vchnwavepos`, `vchnfreqlo/hi`, `vchnfreqmodlo/hi`, `vchnsfx`, `vchnsfxptrlo/hi` — same X=0/7/14 convention V2.x's standalone export was disassembly-confirmed to use, now shown to already exist in V1.x. Musicdata header (relocatemusic's comments): byte 0 = songtable length, 1 = pattern-table length, 2 = wavetable length, 3 = pulsetable length, 4 = filtertable length, followed by a per-table relocation-fixup pass over embedded pointers."
  },
  "entry": {
    "init": "Standalone/packed export (readme.txt section 4, verbatim, also embedded as the editor's own on-screen help text in src/ninjatrk.s ~line 5067): 'Init: LDA #song; JSR <baseadr>' — A register = song/subtune number, JSR to the load address itself. Same init=load convention as V2.x. Gamemusic variant (readgam.txt + ntplay.s): two-step — `relocatemusic` (A/X = musicdata address lo/hi) once after loading/moving the music, then `playtune` (A = song number, 0-based) to select/start a subtune.",
    "play": "Standalone/packed export (readme.txt section 4 / src/ninjatrk.s help text): 'Play: JSR <baseadr+3>' — same load+3 convention as V2.x. Gamemusic variant: `jsr music` once per frame ('Plays one frame of music/effects - call from interrupt', readgam.txt; `music:` label confirmed in ntplay.s). A separate `playsfx` entry (A/X = effect address lo/hi, Y = channel register offset 0/7/14) starts a sound effect on a given voice, mixed in by the same per-frame `music` call."
  },
  "speed": "1x, source-documented: readgam.txt states the play entry point 'music' 'Plays one frame of music/effects - call from interrupt' — one call per frame. No multispeed/CIA setup is described in either readme.txt or readgam.txt. Not disassembly-confirmed (no trace performed), but stated outright by the author's own manual, hence promoted from TODO rather than left blank.",

  "data_format": {
    "order_list": "Source-documented (readme.txt section 3.1, 'Track data'): up to 16 songs/subtunes, each with 3 tracks (one per SID voice), all sharing the same tables and 127 sectors (patterns). Byte encoding: $00 = loop (followed by a loop-position byte), $01-$7F = sector number to play, $80-$BF = transpose upwards (next byte is the sector number), $C0-$FF = transpose downwards (next byte is the sector number). Sector $00 is reserved for song initialization and cannot appear in track data.",
    "patterns": "Called 'sectors' (readme.txt section 3.2): 3 columns — Note/Command, Wavetable-pointer/Command-parameter, Duration (decimal, range 2-65; use the rest command for longer notes). Commands: `===` (rest, still updates wavetable pointer if given), `Wav` (change channel waveform), `AD` (change Attack/Decay), `SR` (change Sustain/Release), `Flt` (change filtertable pointer) — Wav/AD/SR/Flt each imply a rest in addition to their action.",
    "instruments": "No separate instrument table — source-documented (readme.txt section 3.3): 'The wavetable controls note/instrument initialization fully (no separate instr. data.)' The wavetable IS the instrument data.",
    "wavetable": "3 columns (readme.txt section 3.3): waveform/command, note/slidespeed, pointer-to-next-step. Waveform column values: $00 = hardrestart note init, $01 = legato note init, $02 = set ADSR (2nd frame of note-init), $03-$8F = waveform+note change, $90 = note without waveform change, $91-$FF = pitch slide (duration encoded as a negative value). A complete note-init sequence is documented as exactly 3 steps ($00 or $01, then $02, then a normal waveform/note step executed the same frame).",
    "pulsetable": "3 columns (readme.txt section 3.4): duration, speed, pointer-to-next-step. Duration >=$80 sets pulse directly to the speed-column value; otherwise adds the speed value to pulse for the given number of frames. Nybble-reversed pulse arithmetic is called out explicitly (negative speeds need -1 adjustment; speed $FF behaves like $00).",
    "filtertable": "3 columns, same shape as pulsetable (readme.txt section 3.5). Duration >=$80: high nybble (bit 7 ignored) = passband, low nybble = bitmask of channels filtered; resonance is hard-coded to $F. The first filtertable step is applied when the song starts."
  },
  "effects": {
    "encoding": "Not a single unified opcode space — commands are typed by column position (readme.txt sections 3.2-3.5, fully detailed in `data_format` above): pattern/sector-column commands (Wav/AD/SR/Flt) are one small fixed set; the wavetable/pulsetable/filtertable each carry their own local step-program encoding. Byte-level operand semantics for Wav/AD/SR/Flt themselves (beyond 'set waveform'/'set AD'/'set SR'/'set filter pointer') are not spelled out further in the manual.",
    "commands": {
      "Wav": "Sector-column command: change the channel's waveform (readme.txt 3.2); also implies a rest.",
      "AD": "Sector-column command: change the channel's Attack/Decay register (readme.txt 3.2); also implies a rest.",
      "SR": "Sector-column command: change the channel's Sustain/Release register (readme.txt 3.2); also implies a rest.",
      "Flt": "Sector-column command: change the channel's filtertable pointer (readme.txt 3.2); also implies a rest."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is the FIRST generation of Cadaver's NinjaTracker line, predating NinjaTracker V2.x (ninjatracker-v2x.md, 2006-2013). That card's own quirks note the V2 archive's readme.txt states 'Main differences to previous versions are general purpose commands (or instruments), two-column tables and a slide function that knows to stop at the target pitch' — direct evidence V2 is a revision of this tool, which is why ninjatracker-v2x.md carries `successor_of: [\"ninjatracker-v1x\"]`. This V1.x card does not re-assert that edge (edges are one-directional in this graph; the successor's card is the citable source for it) — writing this card exists specifically to resolve that edge from dangling to a real node.",
    "Two distinct CSDb releases exist under the V1.x umbrella: v1.0 (id 7206, 31 Oct 2002, filename ninjatrk.zip per csdb.dk's download link) and v1.1 (id 39501, 25 Jan 2004). SIDId's `NinjaTracker_V1.x` tag references the earlier release (7206); the cached DeepSID player spec (data/players.json) uses the later one (39501, start_year 2002/end_year 2004) — same asymmetric earliest-vs-latest-release citation pattern already flagged in ninjatracker-v2x.md's sources, not a new bug.",
    "Composer concentration in this dataset is very narrow: only 7 composers, 16 files total (Jaymz Julian and Maktone lead with 4 each, Cadaver himself used his own tool on 3 files) — a small-scene/early-adopter tool, not a widely-spread tracker. This matches the family's overall shape: V1.x + V2.x combined rank at 106 files per knowledge/COVERAGE.md, and V1.x is the smaller share (16 of that 106).",
    "V1.x and V2.x are tracked as separate SIDId/DeepSID tags/entries/CSDb release chains despite being the same author's evolving tool — do not merge their file counts or CSDb release IDs. (Same caution already recorded in ninjatracker-v2x.md, restated here for symmetry.)",
    "The cached DeepSID spec (data/players.json) for this entry is unusually sparse compared to the V2.x entry — only distribution/platform/csdb_id/start_year/end_year/zero_pages are filled; description, speeds, data_format-adjacent fields (instruments, patterns, track_system, etc.) are all blank strings. The DeepSID spec's own 'Approx 3-5 bytes ($FB-$FF)' zero-page note turned out to be directionally correct (real source confirms exactly 5 bytes, $fb-$ff default) once the actual archive was located and read.",
    "A public V1.x source archive DOES exist and was located this pass (superseding this card's prior note that none had been found): ninjatr11.zip, CSDb release 39501 (v1.1), downloaded directly from https://csdb.dk/getinternalfile.php/29754/ninjatr11.zip and inspected. It ships full editor source (src/ninjatrk.s), a separate relocatable 'gamemusic' playroutine source (src/ninjagam.s, ntplay.s) with its own manual (readgam.txt), and a thorough format/usage manual (readme.txt) — actually more complete on data-format byte semantics than the V2.x card currently documents (V2.x's card leaves `data_format`/`effects.commands` mostly TODO; V1.x's readme spells out every table's column layout and byte ranges). The CSDb release page itself gives no hint of this — the 'source-available' fact only surfaces by actually downloading and unzipping the release file, or via Demozoo's tag (https://demozoo.org/productions/172658/).",
    "readme.txt's version-history section documents an intermediate 'V1.05' release ('Slide duration calculator added', 'Allow editing of sector 0 (init-sector)') that has no separate CSDb release id of its own — only V1.0 (7206) and V1.1 (39501) are tracked on CSDb. The true release chain is finer-grained than CSDb's two entries suggest.",
    "The gamemusic variant's `music`/`playtune`/`playsfx`/`relocatemusic` entry-point names and the X=0/7/14 per-channel-table indexing convention are shared verbatim with V2.x's `nt2play.s` (see ninjatracker-v2x.md) — real evidence the two playroutines are the same lineage at the API-convention level, even though V2.x's card disassembly-confirmed a different ZP pair ($fe-$ff vs V1.x's $fb-$ff) for the *standalone* export specifically. This is corroborating detail for the existing `successor_of` edge on the V2.x card, not a new edge asserted here (this card still carries no edges of its own, per the one-directional convention already used)."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag.NinjaTracker_V1.x): author 'Lasse Öörni (Cadaver)', released '2002 Covert Bitops', reference https://csdb.dk/release/?id=7206",
    "data/players.json (cached DeepSID player spec, title 'NinjaTracker v1.x'): developer Cadaver, start_year 2002, end_year 2004, csdb_id 39501, site https://cadaver.github.io/, platform 'Native / C64 emulator', distribution 'Freeware', zero_pages 'Approx 3-5 bytes ($FB-$FF)' (all other spec fields blank in the cached record)",
    "CSDb release (v1.0, 31 Oct 2002): https://csdb.dk/release/?id=7206 — title 'NinjaTracker V1.0', code by Cadaver of Covert Bitops",
    "CSDb release (v1.1, 25 Jan 2004): https://csdb.dk/release/?id=39501 — title 'NinjaTracker V1.1', code by Cadaver of Covert Bitops",
    "Author's own tool page (lists both older zips without further detail): https://cadaver.github.io/tools.html — 'NinjaTracker V1.1 - tools/ninjatrk.zip', 'NinjaTracker V1.02 - tools/ninja102.zip'",
    "sibling card knowledge/players/ninjatracker-v2x.md — quotes the V2 archive readme.txt's version-history line establishing this tool as V2's predecessor, and its own `successor_of` edge is the citable source for the derivation direction",
    "Local dataset: 16 files tagged NinjaTracker_V1.x across 7 composers (see knowledge/COVERAGE.md 'Partially carded families' table, which flagged this exact tag as the unclaimed alias gap this card resolves)",
    "Public source archive ninjatr11.zip (CSDb release 39501, v1.1), downloaded from https://csdb.dk/getinternalfile.php/29754/ninjatr11.zip and inspected directly this pass: readme.txt (full format/usage manual, quoted extensively above), readgam.txt (gamemusic variant manual), src/ntplay.s (gamemusic playroutine DASM source, entry points and zero-page base read directly), src/ninjatrk.s (editor + standalone-export player source, help-text strings confirming the init/play convention)",
    "Demozoo production entry (tags this release 'source-available'): https://demozoo.org/productions/172658/",
    "Lemon64 thread, NinjaTracker V2.0 announcement (30 Aug 2006) — Cadaver's own post references V1.x's hardrestart behaviour in passing ('NT1.x and all my editors before that'): https://www.lemon64.com/forum/viewtopic.php?t=20873",
    "No forum64.de discussion of NinjaTracker V1.x was found in this pass (searched explicitly, per project research methodology); Lemon64 thread t=67012 ('New minimal music player (Ninjatracker 1 style)') discusses a different, later miniplayer inspired by V1.x's minimalism, not V1.x itself — not used as a source for any fact above"
  ]
}
```

## Overview

NinjaTracker V1.x is the original native C64 music editor by Lasse Öörni
(Cadaver) of Covert Bitops, released as v1.0 on 31 October 2002 and revised
through an undocumented-on-CSDb v1.05 to v1.1 by 25 January 2004. It predates
and was superseded by NinjaTracker V2.x (2006-2013,
`knowledge/players/ninjatracker-v2x.md`), whose own archive documentation
cites "previous versions" as the baseline for its headline changes
(general-purpose commands/instruments, two-column tables, a target-stopping
slide effect) — direct evidence this is V2's predecessor, which is why the V2
card already carries a `successor_of` edge pointing here. A public source
archive for V1.1 (`ninjatr11.zip`, CSDb release 39501) was located and read
directly in this pass — it was not found in an earlier pass of this card, but
downloading and unzipping CSDb's own release file (rather than just reading
the release page) turned up full editor + gamemusic-playroutine source plus a
manual thorough enough to document every data-table's byte layout. The author
describes it in that manual as "a 11-rasterline max. music editor, with
simple but flexible musicdata and small playroutine... only recommended if you
have strict rastertime/memory requirements". In this collection it is a
lightly-used, early tool: 16 files across just 7 composers (Jaymz Julian and
Maktone with 4 each; Cadaver himself used it on 3 of his own files) —
small-scene/personal-circle usage consistent with an early, soon-superseded
version rather than a tool that spread widely on its own. This card exists
specifically to resolve the dangling `successor_of` edge target flagged in
`knowledge/COVERAGE.md`'s "Partially carded families" table and in prior
sessions' handoffs.

## Quirks & gotchas

See the `quirks` array in the JSON block. The load-bearing ones: (1) a public
V1.x source archive DOES exist (superseding this card's own earlier note that
none had been found) — `ninjatr11.zip` from CSDb release 39501, only
discoverable by downloading and unzipping the release file itself, not by
reading the CSDb page or Demozoo entry text (Demozoo's "source-available" tag
was the one hint that sent this pass looking); (2) its manual is, perversely,
*more* complete on data-format byte semantics than the currently-verified
V2.x card, whose `data_format`/`effects.commands` are still mostly `TODO`
pending a byte-level disassembly pass; (3) SIDId's tag reference points at the
earliest release (v1.0, CSDb 7206) while the cached DeepSID spec points at the
latest known one (v1.1, CSDb 39501) — the same earliest-vs-latest citation
split already seen and documented in the sibling V2.x card; (4) the manual
documents an intermediate v1.05 with no CSDb release id of its own — the real
version chain is finer-grained than CSDb's two tracked releases.

## Disassembly notes

No disassembly was performed — every Tier 3 fact in this card comes from
**reading the official source archive directly** (`ninjatr11.zip`'s
`readme.txt`, `readgam.txt`, and `src/ntplay.s`), the same tier of evidence
`ninjatracker-v2x.md` used for its `nt2play.s`-derived facts before its own
later disassembly pass. Confirmed this way: the 5-byte, `$fb`-based
(relocatable) zero-page footprint, the `init=load`/`play=load+3` standalone
entry convention (matching V2.x's disassembly-confirmed convention exactly),
the gamemusic variant's `relocatemusic`/`playtune`/`playsfx`/`music` entry
points, the X=0/7/14 per-channel table indexing (same convention V2.x's
standalone export was later shown to use by disassembly), and the full
column-level byte encoding of the track/sector/wavetable/pulsetable/
filtertable data. Not yet done: no `.sid` file was disassembled, reassembled,
or traced — so the standalone/packed exported player (the code path that
actually matters for the 16 files this tag covers) has not been checked
against a real file's PSID header, and nothing here has been confirmed
byte-for-byte true of an actual released tune rather than the general-purpose
source/manual.

## Verification

Not disassembly-verified — `status: in-progress` (raised from `stub`). Several
Tier 3 runtime facts (zero-page usage, entry-point convention, speed model,
full data-format byte encoding) are now sourced directly from the official,
publicly downloadable source archive and its manual, which plainly document
them — meeting this project's bar for `in-progress` promotion. It is not
`verified`: no `.sid` file was reconstructed, reassembled, or traced through
`mcp-c64`/`sidm2-siddump` against a real HVSC file. A future verification pass
would disassemble one of the 16 real `NinjaTracker_V1.x`-tagged files (e.g.
one of Jaymz Julian's or Maktone's), confirm its actual load address/ZP base
against the documented-but-user-configurable pack-time choices, and trace-diff
it the same way `ninjatracker-v2x.md` did for V2.x.

## Sources

See the `sources` array in the JSON block — SIDId, the cached DeepSID player
spec (`data/players.json`), two CSDb release pages (v1.0 and v1.1), the
author's own tools page, the sibling `ninjatracker-v2x.md` card, this
project's local composer-file aggregate for usage stats, and — new in this
pass — the public source archive `ninjatr11.zip` (downloaded from CSDb release
39501 and read directly: `readme.txt`, `readgam.txt`, `src/ntplay.s`), the
Demozoo entry that flagged its existence, and a Lemon64 thread where Cadaver
references V1.x's hardrestart behaviour in passing.
