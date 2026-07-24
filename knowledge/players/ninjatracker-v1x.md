# NinjaTracker V1.x

```json
{
  "id": "ninjatracker-v1x",
  "name": "NinjaTracker V1.x",
  "aliases": ["NinjaTracker_V1.x"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2002 (v1.0, CSDb release 7206, 31 Oct 2002); iterated to v1.1 by 2004 (CSDb release 39501, 25 Jan 2004)",
  "status": "verified",
  "platform": "Native C64 editor, 6502/DASM assembly. Public source archive located and read directly this pass: ninjatr11.zip (CSDb release 39501, v1.1, downloaded from https://csdb.dk/getinternalfile.php/29754/ninjatr11.zip) contains src/ninjatrk.s (editor + standalone player, 155998 bytes), src/ninjagam.s and ntplay.s (gamemusic playroutine variant source, DASM format), readme.txt (full format/usage manual), readgam.txt (gamemusic variant manual), plus ins2nt.c (GoatTracker-instrument-to-NinjaTracker converter source) and test data. Demozoo tags this release 'source-available' (https://demozoo.org/productions/172658/), corroborating. No stated licence beyond readme.txt's 'It's also freeware; customization is allowed and recommended!'",
  "csdb_release": 7206,

  "memory": {
    "load_address": "No single fixed address — both code paths are relocatable, matching V2.x's pattern. Standalone/packed export: user chooses a 'baseaddress' at pack time via the editor's own disk-menu packer (readme.txt section 4, 'The filemenu'). Gamemusic variant (ntplay.s): loaded via `relocatemusic` (A/X = musicdata address lo/hi) at any address, and readgam.txt states it 'can actually move in memory if you wish so'. DISASSEMBLY-CONFIRMED this pass on two real HVSC files, each at its own PSID-header-declared load address: Consultant.sid (Cadaver) loads at $1000, Flower_6.sid (Jaymz Julian) at $28fa — both consistent with a user-chosen pack-time base, not a fixed convention address. SIDdecompiler's own `-v2` memory-map \"Start:\" address matched the PSID load address exactly on both files (no gotcha-40-style relocation trap).",
    "zero_page": "CONFIRMED from source (ntplay.s line 1): `musiczpbase = $fb ;5 zeropage addresses required` — default $fb-$ff, 5 consecutive bytes, but relocatable to a user-chosen base at pack time (see `relocatemusic`, which patches all zeropage-relative pointers). readme.txt independently confirms the standalone/packed export too: 'you have to choose baseaddress and zeropage baseaddress; 5 zeropage bytes are used'. This differs from V2.x's disassembly-confirmed 2-byte pair ($fe-$ff) — V1.x's player uses a larger, 5-byte, user-relocatable ZP window, not V2's fixed 2-byte pair. Supersedes this card's earlier caution about the cached DeepSID spec's '3-5 bytes' figure — now source-confirmed at the top of that range (5).",
    "layout": "CONFIRMED from source (ntplay.s): per-channel state is held in parallel tables indexed by X=0/7/14 (one index per SID voice, 7-byte stride) — e.g. `vchnsongpos`, `vchnwavedelay`, `vchnwavestored`, `vchnwavepos`, `vchnfreqlo/hi`, `vchnfreqmodlo/hi`, `vchnsfx`, `vchnsfxptrlo/hi` — same X=0/7/14 convention V2.x's standalone export was disassembly-confirmed to use, now shown to already exist in V1.x. Musicdata header (relocatemusic's comments): byte 0 = songtable length, 1 = pattern-table length, 2 = wavetable length, 3 = pulsetable length, 4 = filtertable length, followed by a per-table relocation-fixup pass over embedded pointers."
  },
  "entry": {
    "init": "Standalone/packed export (readme.txt section 4, verbatim, also embedded as the editor's own on-screen help text in src/ninjatrk.s ~line 5067): 'Init: LDA #song; JSR <baseadr>' — A register = song/subtune number, JSR to the load address itself. Same init=load convention as V2.x. DISASSEMBLY-CONFIRMED on both tested files: Consultant.sid init=$1000=load; Flower_6.sid init=$28fa=load. Gamemusic variant (readgam.txt + ntplay.s): two-step — `relocatemusic` (A/X = musicdata address lo/hi) once after loading/moving the music, then `playtune` (A = song number, 0-based) to select/start a subtune.",
    "play": "Standalone/packed export (readme.txt section 4 / src/ninjatrk.s help text): 'Play: JSR <baseadr+3>' — stated as load+3 in the manual, and DISASSEMBLY-CONFIRMED exactly at load+3 on Consultant.sid (init=$1000, play=$1003). However Flower_6.sid's real PSID play address is load+6 ($28fa init, $2900 play), not +3 — its disassembly shows why: this file's `init` routine is a full 6-byte stub (`lda #$01` / `sta play+1` / `rts`) rather than the minimal 3-byte version the +3 convention implies, so `play` lands 6 bytes past load, not 3. Corrected understanding: the load+3 figure is the manual's/packer's *typical* case, not a fixed byte offset — always read a given file's own PSID play address directly rather than assuming init+3. Gamemusic variant: `jsr music` once per frame ('Plays one frame of music/effects - call from interrupt', readgam.txt; `music:` label confirmed in ntplay.s). A separate `playsfx` entry (A/X = effect address lo/hi, Y = channel register offset 0/7/14) starts a sound effect on a given voice, mixed in by the same per-frame `music` call."
  },
  "speed": "1x, source-documented: readgam.txt states the play entry point 'music' 'Plays one frame of music/effects - call from interrupt' — one call per frame. No multispeed/CIA setup is described in either readme.txt or readgam.txt. TRACE-CONFIRMED this pass on both tested files (500 frames on Consultant.sid, 300 on Flower_6.sid): register writes occur in one batch per emulated PLAY-call frame with no sub-frame/multi-call pattern, consistent with a flat 1x call rate — no direct evidence of a CIA/raster multispeed setup was seen in either trace.",

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
    "The gamemusic variant's `music`/`playtune`/`playsfx`/`relocatemusic` entry-point names and the X=0/7/14 per-channel-table indexing convention are shared verbatim with V2.x's `nt2play.s` (see ninjatracker-v2x.md) — real evidence the two playroutines are the same lineage at the API-convention level, even though V2.x's card disassembly-confirmed a different ZP pair ($fe-$ff vs V1.x's $fb-$ff) for the *standalone* export specifically. This is corroborating detail for the existing `successor_of` edge on the V2.x card, not a new edge asserted here (this card still carries no edges of its own, per the one-directional convention already used).",
    "DISASSEMBLY VERIFICATION (this pass): two real HVSC files (Consultant.sid/Cadaver, Flower_6.sid/Jaymz Julian) were disassembled with SIDdecompiler, reassembled with 64tass, and byte/trace-diffed against the originals. The RAW reassembly (no patching) is 96.4867% byte-exact on Consultant.sid (54/1537 diff bytes) and 97.0657% on Flower_6.sid (50/1704 diff bytes) — in both files, EVERY diverging byte lands exactly on a `-v2` memory-map self-modified (`_`) or write-touched (`+`/`w`) address, the standard SIDdecompiler drifted-workspace-snapshot signature. Patch-isolation testing (reverting each diverging byte to the real file's pristine value, then re-tracing) proved these ARE load-bearing on Consultant.sid, not dead: the raw unpatched reassembly's trace diverges from frame 1 onward (extra osc1/osc2/osc3 frequency writes absent from the real file), and patching all 54 bytes is both necessary and sufficient to reach a register-write-exact trace over 500 frames. A finer isolation test on Consultant.sid found the single byte at $1006 (a self-modified operand, adjacent to the init stub's `sta play+1`-style pattern) is individually inert — patching it alone does not fix the trace, and patching everything EXCEPT it already suffices — while the other 53 bytes collectively matter. Both files reached 100.0000% byte-exact and register-write-exact (500 frames / 300 frames respectively) once every diverging byte was patched back to the original file's value. This is the standard verification methodology this project's other in-progress-to-verified cards used (odintracker, cheesecutter, sidwizard, roland-hermans, dmc, etc.) — SIDdecompiler's default emulation window captures a post-execution/runtime-drifted snapshot of self-modified working storage rather than the pristine cold-start byte, and the real player code always overwrites/reads it correctly at runtime regardless of what SIDdecompiler happened to snapshot."
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
    "No forum64.de discussion of NinjaTracker V1.x was found in this pass (searched explicitly, per project research methodology); Lemon64 thread t=67012 ('New minimal music player (Ninjatracker 1 style)') discusses a different, later miniplayer inspired by V1.x's minimalism, not V1.x itself — not used as a source for any fact above",
    "Real HVSC files disassembled/reassembled/traced this pass (verification pass): Consultant.sid (Cadaver, MUSICIANS/C/Cadaver/, load=$1000/init=$1000/play=$1003) and Flower_6.sid (Jaymz Julian, MUSICIANS/J/Julian_Jaymz/, load=$28fa/init=$28fa/play=$2900), both from C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/. Tooling: SIDdecompiler.exe (C:/Users/mit/claude/c64server/SIDM2/tools/), 64tass.exe (C:/debugger/64tass/), sidm2-sid-trace.exe (same tools dir, invoked directly — stderr-redirected, per this project's standard fallback when the sidm2-siddump MCP tools aren't registered in-session)"
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

Tier 3 facts about the data format, entry-point convention, and zero-page
footprint originally came from **reading the official source archive
directly** (`ninjatr11.zip`'s `readme.txt`, `readgam.txt`, and `src/ntplay.s`).
This pass added actual disassembly/reassembly/trace verification against two
real HVSC files:

- **Consultant.sid** (Cadaver, the tool's own author) — load=$1000,
  init=$1000, play=$1003 (matches the manual's documented load/load+3
  convention exactly). SIDdecompiler → 64tass reassembly is 96.4867%
  byte-exact raw (54/1537 diff bytes); every diverging byte lands on a
  self-modified/write-touched `-v2` map address. Patch-isolation testing
  showed these bytes ARE load-bearing (not dead workspace) — the raw
  unpatched reassembly's trace diverges from frame 1 (extra oscillator
  frequency writes not present in the real file); patching all 54 bytes back
  to the original file's pristine values is necessary and sufficient to
  reach **100.0000% byte-exact and register-write-exact over 500 traced
  frames**. One byte ($1006) was individually inert under isolation testing
  (patching it alone did not fix the trace; patching everything except it
  did) — the other 53 collectively matter.
- **Flower_6.sid** (Jaymz Julian) — load=$28fa, init=$28fa, play=$2900
  (load+6, not load+3 — this file's init stub is a fuller 6-byte
  `lda #$01 / sta play+1 / rts` sequence, so play lands 6 bytes past load
  rather than 3; the "+3" figure in the manual/entry-point note is the
  packer's typical case, not a fixed universal offset — always read a given
  file's actual PSID play address). Raw reassembly is 97.0657% byte-exact
  (50/1704 diff bytes), same self-modified/write-touched signature as
  Consultant.sid; patching those 50 bytes back reaches **100.0000%
  byte-exact and register-write-exact over 300 traced frames**.

Confirmed by disassembly (not just source-reading) on both files: the
`init=load` convention, the standalone/packed player's actual entry-point
addresses, and — via the `-v2` memory map's "Start:" address matching each
file's own PSID load address exactly — no relocation-base ambiguity (the
common failure class documented as gotcha 40 in `sid-player-verify`'s own
notes did not occur here). Not yet checked by disassembly: the gamemusic
variant's code path (`ntplay.s`'s `relocatemusic`/`playtune`/`playsfx`), since
none of the 16 locally-tagged files use it — both tested files are
standalone/packed exports.

## Verification

`status: verified`. Two real HVSC files (Consultant.sid, Flower_6.sid — one
each from a different composer, one of them the tool's own author) were
disassembled with SIDdecompiler, reassembled with 64tass, byte-diffed, and
trace-diffed against the originals via `sidm2-sid-trace.exe` (register writes
over 500 and 300 frames respectively). Both reconstructions reached
**100.0000% byte-exact and register-write-exact** after patching a small set
of self-modified/write-touched bytes (54 and 50 respectively, all confirmed
via SIDdecompiler's own `-v2` memory-access map and confirmed load-bearing —
not assumed dead — via patch-isolation testing against the real trace). The
raw, unpatched disassembler output alone is 96.4867% / 97.0657% byte-exact;
the gap is fully explained and localized to SIDdecompiler's known
drifted-workspace-snapshot behaviour (its default emulation window captures a
post-execution value for self-modified bytes rather than the pristine
cold-start one), the same class of gap this project's precedent verified
cards (odintracker, cheesecutter, sidwizard, roland-hermans, dmc) also closed
this way. Not yet checked: the gamemusic/relocatable variant's code path (no
locally-tagged file uses it), and the remaining 14 of 16 locally-tagged files
(Maktone's 4, the rest of Jaymz Julian's and Cadaver's) — a future pass could
spot-check one more file (e.g. one of Maktone's) for extra confidence, but
two independent files with two different composers already meets this
project's verification bar (see `laxity-newplayer.md`'s ~99.9% precedent;
this result is a clean 100% on both tested files).

## Sources

See the `sources` array in the JSON block — SIDId, the cached DeepSID player
spec (`data/players.json`), two CSDb release pages (v1.0 and v1.1), the
author's own tools page, the sibling `ninjatracker-v2x.md` card, this
project's local composer-file aggregate for usage stats, the public source
archive `ninjatr11.zip` (downloaded from CSDb release 39501 and read
directly: `readme.txt`, `readgam.txt`, `src/ntplay.s`), the Demozoo entry
that flagged its existence, a Lemon64 thread where Cadaver references V1.x's
hardrestart behaviour in passing, and — new in this pass — two real HVSC
files (`Consultant.sid`, `Flower_6.sid`) actually disassembled, reassembled,
and trace-diffed to reach `status: verified`.
