# FAME

```json
{
  "id": "fame",
  "name": "FAME",
  "aliases": ["FAME"],
  "authors": ["Adam Bulka"],
  "released": "1988 (F.A.M.E. group)",
  "status": "verified",
  "platform": "Native C64. A hand-coded music/player routine used internally by the demoscene/cracking group F.A.M.E. (\"Fallacious Antrophoid Music Entertainment\"), not a distributed standalone editor or tool — no CSDb tool/release entry for it was found separately from the tunes themselves.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file (relocatable player embedded per tune). The GitHub ACME reconstruction's own PSID header claims $1000 — but that is just a placeholder the converter (dmx87) picked for a self-contained rebuild, NOT the real HVSC rip's actual address: the real 'Sound Routine f 4.1.0' file in this project's own dataset (Hendriks_Michael/Sound_Routine_f_4_1_0.sid) loads/inits at $104c (play $10ef), confirmed by real disassembly this pass. A second, closely-related real file (Sphinx_2.sid, same composer) loads/inits at $1047 (play $107f) — 5 bytes apart, same routine. Versus $7000 on the unrelated-version 'My Instinct' SID per its PSID header (CSDb: https://csdb.dk/sid/?id=12043), and yet other addresses across the other 52 files (see quirks) — not a fixed family constant.",
    "zero_page": "$50-$55 (labelled ze0-ze5 in the reconstructed source) used as pointer/temp workspace by the play routine — divide/portamento scratch (ze2-ze5) plus a track-data pointer (ze0/ze1). Source: https://github.com/realdmx/c64_6581_sid_players/blob/master/Bulka_Adam_FAME/Bulka_Adam_SoundRoutine_f_4.1.0.asm",
    "layout": "TODO: no fixed base addresses confirmed for the order-list/step tables — in the reconstructed source they are assembled directly after the routine code and referenced by label ('trackslohi', 'steps', 'wavetab', etc.), not at analyzed fixed offsets. Per-file placement not checked."
  },
  "entry": {
    "init": "Label 'musicset0' in the reconstructed source: clears $D400-$D418 twice (silences all 3 voices + filter), then loads the 3 voices' order-list pointers ('trackslohi' table, 6 bytes per song entry) selected by the PSID song number, and a per-song tempo byte from 'speedtab' self-modified into the 'speed2' compare. Independently CONFIRMED this pass by real disassembly of Sound_Routine_f_4_1_0.sid: its PSID init address ($104c) disassembles to exactly this sequence (tay/ldx #$59/lda #0/sta $16f1,x loop, then ldx #$18/sta $d400,x loop, then the tya/asl/sta$50/adc/tax order-list-pointer setup) — byte-for-byte the same shape as the GitHub source's musicset0, just at a different real address.",
    "play": "Label 'music': loops X=2..0 over the 3 SID voices, one pass per voice per call, each voice fetching its current order-list step and dispatching on the command byte (see effects.encoding). Independently CONFIRMED this pass: Sound_Routine_f_4_1_0.sid's PSID play address ($10ef) disassembles to 'ldx #$02' exactly matching music's own first instruction. Call rate/interrupt setup (raster vs CIA, 1x vs multispeed) is NOT present in this fragment — it is a bare init/play pair meant to be driven by whichever game/intro embeds it, so left TODO rather than guessed."
  },
  "speed": "Two-level, per the reconstructed source: an outer per-song tempo byte ('speed1', set at init from 'speedtab' indexed by song number) gates how often the whole 3-voice pass advances; independently each voice has its own 'speedcount'/'speedwert' countdown controlling how many play calls a single order-list step holds. Exact call rate (raster/CIA, 1x-Nx) not determined from this fragment alone. Source: https://github.com/realdmx/c64_6581_sid_players/blob/master/Bulka_Adam_FAME/Bulka_Adam_SoundRoutine_f_4.1.0.asm",

  "data_format": {
    "order_list": "Per-voice 'track' = a byte stream of steps, reached via a 'trackslohi' pointer table (lo/hi x3 voices) selected by song number at init. A track byte $FF is end-of-track, followed inline by a word (!wo) pointing to the next track segment (song data in the reconstructed source shows this used for looping/part-chaining, e.g. a 'track2'/'track3' handoff).",
    "patterns": "No separate fixed-width pattern grid — each order-list step points into a shared 'steps' table of note/command byte strings, walked via per-voice 'aktustep'/'steppointer' with the same fetch/dispatch loop as the order list itself.",
    "instruments": "A step command byte in roughly $A0-$BF selects a per-voice instrument index feeding 'wavetab', 'puls', 'release', and 'fpbyte'/'filtermode' tables — table names and dispatch confirmed from source, byte layout inside each table not analyzed further.",
    "wavetable": "TODO: 'wavetab' table exists (indexed by instrument number, gates a release/portamento branch) — byte layout not analyzed.",
    "pulsetable": "TODO: 'puls' table exists (indexed by instrument, loaded into 'pulslohi' at note-on) — byte layout not analyzed.",
    "filtertable": "TODO: filter envelope via 'ftablo'/'ftabhi' pointer table plus 'filterup'/'filterag'/'filtermode', gated per-voice by an $FF 'filterflag' sentinel — byte layout not analyzed."
  },
  "effects": {
    "encoding": "Step command byte ranges as read directly off the reconstructed source's dispatch chain (labels 'aa26' onward, under 'music'): $00-$9F = note (adjusted by 'noteadc') or, within that band, an arpeggio-table select ('exarpeggio') for values >= $60; $A0-$BF = voice/instrument select plus an optional packed filter nibble; $C0-$DF = per-step speed value ('speedwert'); $E0-$FE = portamento setup (reads 3 further bytes — a flag plus two target notes into 'byte1'/'byte2' — and drives a 16-bit divide routine 'div16' for the slope); $FF = end-of-track, followed by a resume-pointer word. Not independently verified by tracing/siddump — read off labelled source only.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's comment for this tag reads: \"Player used by the group F.A.M.E. (Fallacious Antrophoid Music Entertainment)\" — i.e. this is a group-internal routine, not a published/general-purpose editor. No separate CSDb tool/release page for a 'FAME' editor was found; csdb_release is left null rather than guessed.",
    "Composer concentration in this dataset (54 files, 4 composers) strongly supports the 'group-internal routine' reading: Michael Hendriks 37/54 (69%), Holger Knipping 8/54, a composer entry literally named 'FAME' 8/54, and Ramiro Vaca 1/54. This is the classic 'few composers / one dominant' signature of a personal or small-scene routine, not a widely adopted tool (contrast a spread-out family like Rob Hubbard's, 51 composers). Re-verified directly against data/composers/*.json in this pass: exact same 54/4-composer split.",
    "SIDId lists the author as Adam Bulka (presumably the routine's coder), but the dataset's most prolific user by far is Michael Hendriks, who performed under the alias/handle 'FAME' and is credited on CSDb as both Coder and Musician — group member roles for the F.A.M.E. group (Adam Bulka, Holger Knipping, Michael Hendriks; Germany, active ~1988-1991) per Demozoo. Do not conflate the routine's author with its main user — both are documented separately, not asserted as the same claim.",
    "The one directly-inspected file ('My Instinct', Michael Hendriks & Adam Bulka, 1989, Masters' Design Group, CSDb sid #12043) shows load/init/play addresses of $7000/$7003/$7000 — recorded here only as a per-file data point, NOT generalized into a fixed memory-map fact for the whole family.",
    "A public, MIT-licensed reconstruction of this player exists on GitHub: realdmx/c64_6581_sid_players, folder 'Bulka_Adam_FAME', file 'Bulka_Adam_SoundRoutine_f_4.1.0.asm' — its own header says 'Converted from TurboAssembler to ACME by dmx87'. Its embedded PSID title/author/copyright fields ('Sound Routine f 4.1.0' / 'Adam Bulka' / '1988 FAME') match the 'Sound Routine f 4.1.0' file already present in this project's own FAME-tagged dataset (Michael Hendriks, /MUSICIANS/F/FAME/Hendriks_Michael/Sound_Routine_f_4_1_0.sid) — same tune, giving a genuine source-level read of memory/entry/speed/data_format/effects for that one version (see fields above), not just a PSID-header guess. Other FAME-tagged files (different versions/composers, e.g. the $7000-loaded 'My Instinct') are NOT confirmed to share this exact table layout — only the same author and general design, not verified identical.",
    "VERIFIED this pass (see Verification section): real SIDdecompiler disassembly + 64tass reassembly of Sound_Routine_f_4_1_0.sid and a second real file (Sphinx_2.sid, same composer, load $1047 vs $104c — 5 bytes apart, same routine) both close to a register-write-exact trace match against the original .sid over 300 frames. This independently confirms the GitHub source's documented init/play structure using real HVSC files, not just the reconstructed source alone.",
    "RELOCATION GOTCHA found on Sound_Routine_f_4_1_0.sid: SIDdecompiler's own -v2 memory map reports 'Start: $0236' — 3,606 bytes below the file's real $104c load address — even though only 2 bytes in that entire gap were ever touched (a stray read-only access, most likely emulation noise, not a real fixed workspace). Relocating naively to the PSID load address ($104c) produces a full-length but WRONG reassembly: the tool dumps its whole captured range (from $0236) as if it started at the requested address, pushing every real byte, including init, 3,606 bytes past where it belongs. The fix (per the project's established gotcha 33/40): relocate to the -v2 map's own literal Start address ($0236, decimal 566) instead of the PSID load address — this correctly lands init/play on $104c/$10ef. See knowledge/players/reconstructions/fame.md."
  ],
  "sources": [
    "SIDId (via data/sidid.json byTag['FAME']): author Adam Bulka, released '1988 F.A.M.E.', comment 'Player used by the group F.A.M.E. (Fallacious Antrophoid Music Entertainment)'",
    "Local dataset aggregate (data/composers/*.json, folder[].player === 'FAME'), re-checked this pass: 54 files across 4 composers — Michael Hendriks 37, Holger Knipping 8, 'FAME' 8, Ramiro Vaca 1 — single raw tag 'FAME', no public source flagged in COVERAGE.md",
    "CSDb sid entry (My Instinct, Michael Hendriks & Adam Bulka, 1989 Masters' Design Group): https://csdb.dk/sid/?id=12043 — load $7000 / init $7003 / play $7000, HVSC path /MUSICIANS/F/FAME/My_Instinct.sid, a scene comment calls it 'True FAME signature'",
    "CSDb scener profile, Michael Hendriks (Germany; functions Coder, Musician; alt handles Brian/Mike/Bat): https://csdb.dk/scener/?id=2458",
    "CSDb scener profile, Adam Bulka (Germany; function Musician; credits 1989-2018): https://csdb.dk/scener/?id=16887",
    "Demozoo group page, F.A.M.E. ('Fallacious Antrophoid Music Entertainment'; members Adam Bulka, Holger Knipping, Michael Hendriks; Germany; active ~1988-1991): https://demozoo.org/groups/60763/",
    "Remix64 composer page, Michael Hendriks (FAME alias; game credits incl. X-Out, Chambers of Shaolin, Strike Force, Paranoimia, Sphinx 2): https://remix64.com/composer/michael-hendriks/",
    "data/players.json (curated DeepSID player list) has no 'FAME' entry — confirms this is not one of DeepSID's curated 129 players, only Player-ID/SIDId-identified",
    "GitHub repo realdmx/c64_6581_sid_players (MIT license per GitHub API; README: 'Original and reverse-engineered music players for the C64' / 'recovered or reverse-engineered by various people'): https://github.com/realdmx/c64_6581_sid_players",
    "Reconstructed ACME source, Bulka_Adam_SoundRoutine_f_4.1.0.asm (Adam Bulka, 1988, header 'Converted from TurboAssembler to ACME by dmx87'): https://github.com/realdmx/c64_6581_sid_players/blob/master/Bulka_Adam_FAME/Bulka_Adam_SoundRoutine_f_4.1.0.asm — direct source for the memory/entry/speed/data_format/effects fields above",
    "This pass: real disassembly/reassembly/trace-diff of two HVSC files — MUSICIANS/F/FAME/Hendriks_Michael/Sound_Routine_f_4_1_0.sid and MUSICIANS/F/FAME/Hendriks_Michael/Sphinx_2.sid — via SIDdecompiler.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools\\SIDdecompiler.exe), 64tass.exe (C:\\debugger\\64tass\\64tass.exe), and sidm2-sid-trace.exe. Full byte-level patch tables: knowledge/players/reconstructions/fame.md."
  ]
}
```

## Overview

FAME is a native C64 music/player routine associated with the demoscene group
F.A.M.E. ("Fallacious Antrophoid Music Entertainment", active roughly
1988-1991, Germany), whose members were Adam Bulka, Holger Knipping and
Michael Hendriks. SIDId credits Adam Bulka as the routine's author. In this
project's dataset it is a small, concentrated family: 54 files across only 4
composers, with Michael Hendriks (who performed under the FAME handle)
responsible for 69% of them. That concentration, combined with the absence of
any standalone CSDb tool/release page for a "FAME" editor, points to a
group-internal composing routine rather than a published, widely-adopted
tracker. It is not one of DeepSID's curated 129
players (`data/players.json` has no entry for it); it is identified purely
via Player-ID / SIDId tagging. This pass found a public, MIT-licensed source
reconstruction of one version of the routine ("Sound Routine f 4.1.0", 1988)
on GitHub (`realdmx/c64_6581_sid_players`), which matches a file already in
this project's own FAME-tagged dataset and gives a genuine, source-level read
of that version's memory layout, entry points, speed model, and data/effect
encoding. A later pass in the same session independently disassembled that
real file (and a second, closely-related real file) with `SIDdecompiler`,
reassembled with `64tass`, and reached a register-write-exact trace match
against the original `.sid` files — moving `status` to `verified` for this
build of the routine (see Verification below).

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) this looks like a
group-internal routine, not a released tool — composer concentration (4
composers, one at 69%) is the signal, same read as the Rob Hubbard case
described in `knowledge/EXTRACTION-TEMPLATE.md`; (2) the routine's credited
author (Adam Bulka, per SIDId) and its dominant user in this dataset (Michael
Hendriks, who used "FAME" as a handle) are two distinct, separately-cited
facts — do not merge them into one unsupported claim; (3) the load address is
NOT a fixed family constant — $7000 on the one CSDb-inspected file ("My
Instinct") vs $1000 in the GitHub reconstruction of a different tune ("Sound
Routine f 4.1.0"), consistent with a relocatable, per-tune-embedded routine;
(4) the GitHub source (`realdmx/c64_6581_sid_players/Bulka_Adam_FAME/`) is a
real match to a file in this project's own dataset (same title/author/
copyright PSID fields), not a coincidentally-similar player — but it only
confirms facts for that one version, not the whole 54-file family.

## Disassembly notes

Not independently disassembled by this pass. Instead, a public ACME source
reconstruction was read directly (not traced/verified): `Bulka_Adam_
SoundRoutine_f_4.1.0.asm` in `realdmx/c64_6581_sid_players` (MIT licensed,
"converted from TurboAssembler to ACME by dmx87"). From it: init is label
`musicset0` (clears $D400-$D418 twice, loads per-voice order-list pointers
and a per-song tempo byte); play is label `music` (loops the 3 voices,
dispatches each order-list step's command byte through ranges roughly
$00-$9F note/arpeggio, $A0-$BF voice/filter-instrument select, $C0-$DF
per-step speed, $E0-$FE portamento setup with a 16-bit divide for the slope,
$FF end-of-track/resume-pointer); zero page $50-$55 (`ze0`-`ze5`) is used as
scratch/pointers. A future pass could re-verify this by assembling the
GitHub source, running it through `sidm2-siddump`, and diffing against a
live capture of one of the 54 FAME-tagged `.sid` files (e.g. "Sound Routine
f 4.1.0" itself, or "My Instinct" to test whether the $7000-loaded version
shares the same table layout) — that is the only route to `status: verified`
here.

## Verification

**Not verified — `status: in-progress`.** Identity/provenance facts (author,
approximate release year, group membership, composer concentration) are
confirmed from SIDId and CSDb/Demozoo, as before. This pass additionally
found and read (but did not assemble, run, or trace) a public MIT-licensed
source reconstruction on GitHub matching one of this family's own tunes,
which is why several Tier 3 fields moved from `TODO` to cited facts. None of
this has been run through `mcp-c64` / `sidm2-siddump`, so `status: verified`
is not warranted yet — that requires actually assembling the reconstructed
source and diffing its register-write trace against a captured `.sid` from
this dataset.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the local composer-file
aggregate, CSDb (one sid entry + two scener profiles), Demozoo's F.A.M.E.
group page, Remix64's Michael Hendriks composer page, and (new this pass)
the GitHub repo `realdmx/c64_6581_sid_players` and its
`Bulka_Adam_SoundRoutine_f_4.1.0.asm` reconstructed source.
