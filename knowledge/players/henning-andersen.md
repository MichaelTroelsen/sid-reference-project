# Henning Andersen (player routine)

```json
{
  "id": "henning-andersen",
  "name": "Henning Andersen (player routine)",
  "aliases": ["Henning_Andersen"],
  "authors": ["Henning Andersen"],
  "released": "1987-1988 (Megamusic Denmark)",
  "status": "verified",
  "platform": "A playroutine authored by Danish coder Henning Andersen (handles 'Einstein'/'Dosman') of the group Megamusic Denmark, used almost entirely by his groupmate, musician Henrik B. Jensen — a coder-writes-routine / musician-friend-uses-it pattern, the same shape as this KB's existing [[olav-morkrid]] card. Player-ID-fingerprinted across 16 files: 15 Jensen, 1 Michael Winterberg (a separate composer already carded in this KB as [[michael-winterberg]] — no further connection investigated).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file, not fixed across the player's output — each song carries its own full copy of the player at its own load address (e.g. Did_My_Voice_Crack.sid load $1000, Sandy_Beach.sid load $5000, Alar_Alas.sid load $4100). No single canonical player base address.",
    "zero_page": "TODO (not examined this pass; the verification below only needed the loaded-block byte content, not a ZP audit).",
    "layout": "Two file-layout sub-conventions observed, distinguished by SIDdecompiler's own -v2 memory-touch map 'Start:' address: (1) 'clean' convention (Did_My_Voice_Crack.sid, Sandy_Beach.sid) — a small (15-17 byte) leading block below the PSID load address is never touched by the emulated trace (Start: == the PSID init address, one byte-range higher than the header's own load address) — an unused header/vector table the init/play vectors bypass entirely, same class as this KB's gotcha-40 precedent on other players; relocating SIDdecompiler's -a to the init address (not the load address) is required for a non-wrapping reassembly. (2) 'packed' convention (Alar_Alas.sid) — Start: == the load address itself (the whole block, data and code together, is touched), and init sits far into the block (offset +0x7b6 from load, near the file's end) rather than near the front.",
    "self_modified_workspace": "A small set of 1-3-byte, X-indexed (3-entry, one per voice) working-storage tables sit shortly after the player code's own entry point in every file tested (Did_My_Voice_Crack.sid: $174d-$17bf; Sandy_Beach.sid: $572a-$579e; Alar_Alas.sid: $490f-$4913). SIDdecompiler's default trace captures these post-execution (drifted) rather than their pristine cold-start values -- the standard 'drifted self-modified workspace' pattern seen across many other players in this KB. Confirmed dead/reconstructible: patching each table back to the real file's own pristine bytes (verified against the PSID payload directly, not guessed) closed the byte-diff to 100.0000% exact on all 3 files with no residual trace divergence."
  },
  "entry": {
    "init": "Per-file (see memory.load_address) -- e.g. Did_My_Voice_Crack.sid $1011, Sandy_Beach.sid $500f, Alar_Alas.sid $48b6.",
    "play": "Per-file -- e.g. Did_My_Voice_Crack.sid $1017, Sandy_Beach.sid $5015, Alar_Alas.sid $441c (called in IRQ)."
  },
  "speed": "TODO (not required for the register-write verification below; a full speed/timer analysis is a separate future task).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 2 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "STRUCTURAL EVIDENCE FOR THE 'CODER WROTE IT, MUSICIAN USED IT' READING (CONFIRMED via CSDb group roster, though no source explicitly states the authorship claim in words): both men were in the same 3-person Danish group, Megamusic Denmark (active 1987-1988, alongside graphician Claus B. Jensen — Henrik's older brother). Henning Andersen's CSDb function is Coder — and he has ZERO music-credit output of his own anywhere in this dataset or on CSDb; every trace of him is exclusively as this player tag on other composers' files. Henrik B. Jensen's function is Musician, with 200+ credited works 1987-2020 across many groups (Plan C, Laxity, Remember, Zenith, Accept). This is a CLEANER coder/musician split than the olav-morkrid case (where Mørkrid did also release a few tunes himself) — Andersen has none.",
    "POSSIBLE ROUTINE NAME (UNCONFIRMED — flagged, not asserted): Megamusic Denmark's two Andersen-coded releases are titled 'Funitrax Demo' (1987) and 'Funitrax Banzai II' (1988) — 'Funitrax' is plausibly the routine's actual name, but no CSDb description or other source explicitly confirms this interpretation; treat as a lead, not a fact.",
    "The 'Bjerregaard' co-occurrence in Henrik Jensen's own HVSC folder (3 files tagged Bjerregaard alongside these 15) does NOT resolve to a confirmed connection with the well-known Johannes Bjerregård (Maniacs of Noise) — checked Jensen's full CSDb credit list directly, no mention of Bjerregård or Maniacs of Noise anywhere. Left unexplained rather than guessed at.",
    "A future card specifically about Henrik B. Jensen the musician (his broader 30+ year, 200+ work career, handles Nike→Eleanor) would be a natural next step, following the same pattern as this KB's existing [[henning-rokling]] person-card for a heavy routine-user — not written this session; scope here is Andersen's routine only.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Henning_Andersen entry). No known relationship found to any other composer/tool already in this KB besides the Michael_Winterberg co-occurrence on one file (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Verified this session (2026-07-24) via original SIDdecompiler.exe disassembly + 64tass.exe reassembly + register-write trace-diff against 3 real HVSC files, not from any published source -- see Verification section. Data format/effects/speed remain TODO (out of scope for a register-write verification; a full format decode is a separate future task).",
    "VERIFICATION GOTCHA (this session): two of the three tested files (Did_My_Voice_Crack.sid, Sandy_Beach.sid) needed SIDdecompiler's -a relocation target set to the PSID INIT address, not the header's own LOAD address -- the -v2 memory-touch map's own 'Start:' line was one byte-range above the load address in both cases (a 15-17 byte unused leading header/vector block the init/play vectors bypass entirely). The third file (Alar_Alas.sid) needed no such adjustment (Start: == load address). Relocating to the wrong base produces a 16-bit-wrap 'Data:' report split across two disjoint ranges from 64tass, not an outright error -- easy to miss."
  ],
  "sources": [
    "CSDb group — Megamusic Denmark (id=3067, roster: Claus B. Jensen/graphician, Henning Andersen/coder, Henrik B. Jensen/musician; releases Keyboarder 1987, Funitrax Demo 1987, Funitrax Banzai II 1988): https://csdb.dk/group/?id=3067",
    "CSDb scener — Henning Andersen (id=18064, handles Einstein/Dosman, function Coder, 2 credited releases both as coder): https://csdb.dk/scener/?id=18064",
    "CSDb scener — Henrik B. Jensen (id=11048, handles Nike/Eleanor, function Musician, 200+ credits 1987-2020, 'little brother of Claus B. Jensen'): https://csdb.dk/scener/?id=11048",
    "CSDb SID — Sandy Beach (1988, Megamusic Denmark, confirms HVSC folder identity): https://csdb.dk/sid/?id=15811",
    "HVSC Musicians.txt (no direct entry for either name under Musicians.txt's own indexing, cross-checked): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Johannes Bjerregård (id=8138, checked and ruled out as an unconnected figure): https://csdb.dk/scener/?id=8138",
    "Local dataset: 16 files tagged Henning_Andersen, 2 composers (see knowledge/COVERAGE.md)",
    "Original disassembly this session (2026-07-24): SIDdecompiler.exe + 64tass.exe reassembly + sidm2-sid-trace.exe register-write trace-diff against 3 real HVSC files (Did_My_Voice_Crack.sid, Sandy_Beach.sid, Alar_Alas.sid) from C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/ — see Verification section for exact numbers."
  ]
}
```

## Overview

The `Henning_Andersen` tag is Danish coder Henning Andersen's playroutine,
written for his group Megamusic Denmark (1987-1988) — but used almost
entirely (15 of 16 files) by his groupmate, musician Henrik B. Jensen, not
by Andersen himself, who has no music credits of his own anywhere. This is
the same coder-writes/musician-uses pattern already documented in this KB's
[[olav-morkrid]] card, here even cleaner (Andersen released zero tunes of
his own).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed Megamusic
Denmark group roster** (coder Andersen, musician Jensen, graphician Claus
B. Jensen); the **plausible-but-unconfirmed 'Funitrax' routine name**; and
the note that a **future Henrik Jensen person-card** would be a natural
follow-up, mirroring [[henning-rokling]].

## Disassembly notes

Originally disassembled this session (2026-07-24) — no published source
existed (not in the realdmx RE repo, not in SIDId). SIDdecompiler.exe
disassembly of 3 real HVSC files, relocated per-file to the correct base
(see `memory.layout`'s two-convention note), reassembled cleanly with
64tass.exe (single contiguous `Data:` range each, no wrap warnings once
the correct relocation base was used). All three reassemblies needed the
same class of fix: a handful of `+`/`w`-marked (self-modified,
per-voice/X-indexed) working-storage bytes right after the code entry
point, captured post-execution by SIDdecompiler's default trace rather
than at their pristine cold-start value — patched back to the real file's
own bytes (read directly from the PSID payload, not guessed) in the
`.asm` before reassembly. See Verification below for exact numbers.

## Verification

**Register-write-exact on all 3 tested files (2026-07-24) — `status: verified`.**

Three real HVSC `Henning_Andersen`-tagged files, two different composers
(Henrik Jensen x2, Demosic x1), disassembled with SIDdecompiler.exe,
reassembled with 64tass.exe, byte-diffed and trace-diffed against the
original PSID payload (`sidm2-sid-trace.exe`, 50 frames, shelled out
directly — the `mcp__sidm2-siddump__*` MCP tools were not registered in
this session):

- **Did_My_Voice_Crack.sid** (Demosic): load `$1000`, init `$1011`, play
  `$1017`, 284 register writes / 50 frames. Raw reassembly: 98.68% byte
  match (35/2644 bytes differing, all clustered in `$174d-$17bf`, all
  `-v2`-map `+`-marked self-modified workspace). Raw trace: all register
  **values** matched, but 7 of 284 writes in frame 0 showed a transient
  ±1-cycle timing offset (fully resynced by cycle 1198 onward — the rest
  of the 50-frame trace was cycle-exact). After patching the 35 bytes back
  to their real pristine values (read directly from the original PSID
  payload): **100.0000% byte-exact, and the trace became fully
  cycle-exact** (diff against the original trace showed zero differing
  lines besides the echoed filename).
- **Sandy_Beach.sid** (Henrik Jensen): load `$5000`, init `$500f`, play
  `$5015`, 340 register writes / 50 frames. Raw reassembly: 97.79% byte
  match over the emulated range (52/2350 bytes differing, all in
  `$572a-$579e`, all `-v2`-map `+`/`w`-marked; plus one genuinely dead
  trailing `$00` byte at `$593d`, one address past the `-v2` map's own
  `End:`, correctly dropped by the decompiler). Raw trace was **already
  fully register-write-exact** even before patching (all 52 differing
  bytes were dead). After patching: **100.0000% byte-exact** (over the
  emulated range) and still fully trace-exact.
- **Alar_Alas.sid** (Henrik Jensen, the file originally sample-traced on
  2026-07-13): load `$4100`, init `$48b6`, play `$441c`, 236 register
  writes / 50 frames (matches the earlier session's count exactly). Raw
  reassembly: 99.82% byte match (4/2213 bytes differing, all in
  `$490f-$4913`). Raw trace was **already fully register-write-exact**
  before patching. After patching: **100.0000% byte-exact**, still fully
  trace-exact.

All three files independently converged on the same defect class (a small
self-modified per-voice workspace table right after the code entry,
captured post-execution by the decompiler rather than pristine) — patching
resolved it completely and identically each time, with no residual
divergence anywhere else in any file. This is a stronger result than the
project's own `laxity-newplayer` ~99.9% precedent (100.0000% byte-exact
here, on all 3 files, after a well-understood and narrowly localized
patch). Data format, effects encoding, and speed/timer details remain
`TODO` — this verification covers the player's code correctness
(byte-for-byte reconstruction + register-write-exact playback), not a
full format decode, which is a separate future task.

## Sources

See the `sources` array — CSDb (group + both scener profiles), a
corroborating SID release, HVSC Musicians.txt, and (new this session) an
original SIDdecompiler.exe/64tass.exe disassembly + trace-diff against 3
real HVSC files.
