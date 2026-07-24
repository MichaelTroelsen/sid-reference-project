# Slaygon

```json
{
  "id": "slaygon",
  "name": "Slaygon",
  "aliases": ["Slaygon", "Censor Editor v1.6", "CensorEd"],
  "authors": ["Kenneth Mutka (Slaygon)"],
  "released": "TODO: no release year for this tag in SIDId. DeepSID's curated player entry that matches this tag ('Censor Editor v1.6') carries start_year 1990 and 'released in 2001' — https://deepsid.chordian.net/api/v1.php?players — but the tunes tagged 'Slaygon' in HVSC date 1989-1994, so 1990 cannot be taken as this routine's own first-release year. The author's own self-coded C64 tools span 1989 (Notemaker) to 2001 (Censored Editor V1.6); no byte-level source ties this Player-ID tag to one specific CSDb release (see quirks). Disassembly (this pass) does not resolve this either — the code carries no version marker, and the PSID header's own free-text 'released' field reads '1989-91 Censor Design' on all 3 files disassembled, matching the tunes' HVSC dates but saying nothing about which named CSDb tool release the driver code corresponds to.",
  "status": "verified",
  "platform": "Native C64 — a personal, self-coded music editor/player routine written by the composer himself (not a distributed multi-user tracker). Confirmed by the author's own words: \"You learn a lot of the sid by doing your own music routine.\" (Remix64 interview, see sources). DeepSID's curated entry for this tag lists platform 'Native / C64 emulator', distribution 'Exclusive; released in 2001' (https://deepsid.chordian.net/api/v1.php?players).",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — confirmed by disassembly (PSID header field, load address embedded as the payload's own first 2 LE bytes since the header's own load-address field is 0) on 3 independent files: 2001.sid, Basoni.sid, Sadis.sid (data/composers/slaygon.json). BUT: SIDdecompiler's own -v2 memory-touch map reports the TRUE lowest-touched address as $0334 on all 3 files, not $1000 — the driver keeps a small, real, load-bearing workspace/state block at $0334-$0356 (the C64's RS-232/tape-buffer page) below its own load address. Relocating with -a<decimal for $1000> (the naive choice) produces a plausible-looking but subtly wrong reassembly; relocating to -a820 (decimal for $0334, the map's own Start: address) is required for a byte-exact reassembly. See knowledge/players/reconstructions/slaygon.md.",
    "zero_page": "$40, sometimes also $41 — CONFIRMED BY DISASSEMBLY (was previously an unverified DeepSID lead). z40/z41 (a 2-byte pointer, z41=z40+1) is used throughout the play routine for indirect (z40),Y addressing — this is the driver's main data-table read pointer. DeepSID's curated record's ZP claim for this tag is correct.",
    "layout": "CONFIRMED BY DISASSEMBLY: fixed page-3 workspace at $0334-$0356 holds real, load-bearing per-voice ADSR/waveform/control staging bytes (populated from the PSID payload's own leading bytes, not zero-initialized) — the SIDId-signature code (see quirks) reads $033F/$0342/$0345 directly into $D412/$D413/$D414, exactly as published. A second working-storage block at $16C9-$1727 (inside the $1000 image) holds per-voice pitch/pulse-width/ADSR staging values that `init` (native $1046) explicitly zeroes IN PART ($16D5-$16D7, $1712-$1721 triples, $1727 triple, $034C-$0356) but not entirely — some of that range holds genuine cold-start note constants, not workspace. See knowledge/players/reconstructions/slaygon.md for the exact byte-level patch tables recovered on 3 files. TODO: where order lists / patterns / instrument tables live is still unknown — this pass verified register-write correctness, not the musical data format."
  },
  "entry": {
    "init": "$1000 — CONFIRMED BY DISASSEMBLY on 3 independent files (2001.sid, Basoni.sid, Sadis.sid): jmp l100e at native $1000, standard direct-jump convention. A/X/Y convention on entry: TODO (not characterized this pass).",
    "play": "$1003 — CONFIRMED BY DISASSEMBLY on the same 3 files: jmp l114a at native $1003. Call rate/convention: TODO (this pass verified register-write correctness across a fixed sidm2-sid-trace.exe per-frame model, not the driver's own real hardware IRQ/raster cadence)."
  },
  "speed": "TODO: disassembly did not establish CIA-vs-raster timing or multispeed signalling — the trace-diff verification in this pass calls play once per tracer-modeled frame, which confirms register-write correctness under that model but does not itself establish the driver's real timing convention. DeepSID's curated record leaves its 'speeds' field empty, so no public source states it either.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: a 2026 pass disassembled/reassembled/trace-diffed this player to a 100% register-write-exact match on 3 files (see Disassembly notes/Verification) but did not decode the musical data format or effect-command encoding — that remains a genuine, separate gap.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer routine: every one of the 20 files tagged 'Slaygon' in this project's dataset is by Kenneth Mutka (Slaygon) himself (data/composers/slaygon.json — 20 of his 43 catalogued files use this tag; no other composer's file in the dataset does, verified by scanning all of data/composers/*.json). This is the exact 'composer's own hand-coded routine' pattern called out in CLAUDE.md (cf. the Rob_Hubbard inferred-player case) rather than a genuinely shared, published tool.",
    "Confirmed in his own words: asked about the pros/cons of using his own editor, Slaygon told Remix64: \"The positive side is that when ever you needed a feature, you'd just code it in\" and \"You learn a lot of the sid by doing your own music routine\" — direct first-person confirmation this is a self-written routine, not a general-purpose tracker (https://remix64.com/interviews/interview-slaygon.html). The interview never names the editor, gives no date for it, and gives no technical detail.",
    "SIGNATURE (the one genuinely public byte-level artifact for this player) — CONFIRMED BYTE-FOR-BYTE BY DISASSEMBLY, not just decoded from the published bytes. SIDId's signature for the tag 'Slaygon' is a single pattern with NO wildcards at all: `8D 0F D4 AD 3F 03 8D 12 D4 AD 42 03 8D 13 D4 AD 45 03 8D 14 D4` — i.e. STA $D40F / LDA $033F / STA $D412 / LDA $0342 / STA $D413 / LDA $0345 / STA $D414. Identical in cadaver/sidid (https://github.com/cadaver/sidid/blob/master/sidid.cfg) and in the maintained fork WilfredC64/player-id (https://github.com/WilfredC64/player-id). This exact sequence appears verbatim in the disassembly of 2001.sid, inside the per-note voice-register-write subroutine reached from `play`. A wildcard-free signature is itself informative: the addresses this routine reads its voice-3 registers from are fixed, not relocated per-tune, which is consistent with the identical $1000/$1000/$1003 headers across every file.",
    "DISASSEMBLY VERIFIED (2026 pass): disassembled/reassembled/traced 3 independent HVSC files (2001.sid, Basoni.sid, Sadis.sid) via SIDdecompiler + 64tass + sidm2-sid-trace.exe. All 3 reach 100.0000% byte-exact reassembly and register-write-exact traces (100 frames, 0 diffs) after a small, precisely localized patch — see 'Disassembly notes' and knowledge/players/reconstructions/slaygon.md for the full byte tables. Key finding: SIDdecompiler's default relocation to the PSID header's own load address ($1000) is WRONG for this player — the -v2 memory map's own reported 'Start:' address ($0334, decimal 820) must be used instead, because the driver keeps real, load-bearing state in the C64's RS-232/tape-buffer page ($0334-$0356) below its own load address. This is the same relocation trap documented on soundmonitor/soundmaster (this project's hard_won_gotchas #40), a new confirmed instance for this player.",
    "TAG vs TOOL, unresolved and genuinely contradictory between the two authoritative indexes. DeepSID's curated player database contains exactly one entry whose match term is 'slaygon': title 'Censor Editor v1.6', developer Slaygon, start_year 1990, csdb_id 67187 (= CSDb 'Censored Editor V1.6', 2001), zero_pages '$40, sometimes also $41' (https://deepsid.chordian.net/api/v1.php?players — verified live, not just from the local cache). SIDId, however, carries 'Slaygon' and 'Censored_Editor' as two SEPARATE tags with completely non-overlapping signatures (Censored_Editor's is `18 6D ?? ?? 69 ?? 9D ?? ?? 68 E8 E0 ?? D0 ?? AD ?? ?? 8D 18 D4 ...`, referencing CSDb release 91724 = Censored Editor V1.1, 1990). Both cannot be simply true. `csdb_release` is therefore left null: pointing it at 67187 (a 2001 release) would also mis-date tunes CSDb dates 1989-1991.",
    "CSDb credits Kenneth Mutka (Slaygon) with several of his own C64 tools: Notemaker (1989, id=5133 — code credited to Matcham, Slaygon AND Unifier, so not solo), Notemaker V2 (1990, id=142470 — code Slaygon + Unifier), Slaygon Coder V1.0 (1990, id=20865, code Slaygon alone), Censored Editor V1.1 (1990, id=91724, code Slaygon alone) / V1.6 (2001, id=67187, code Slaygon alone), Contactdealer V3.0 (1990, id=45668), Censor Writer (id=187342) — https://csdb.dk/scener/?id=934. CSDb classifies every one of them only as the generic type 'C64 Tool' with no music-editor subtype shown, so CSDb alone cannot tell you which of these is even a music editor.",
    "No public source code, manual, or format documentation for this routine was found. Searched CSDb (scener + each tool release), Lemon64 forum, Forum64, Demozoo (https://demozoo.org/sceners/14680/ — lists Slaygon as 'Code (music routine)' on Unipacker 1992, no editor entry), Remix64, and general web. Demozoo/CSDb have no download of a documented editor; DeepSID's curated record leaves source_code and docs empty.",
    "The load/init/play addresses ($1000/$1000/$1003) are identical across every file spot-checked, consistent with a real, reused fixed-address routine rather than bespoke per-tune assembly — CONFIRMED BY DISASSEMBLY on 3 files (2001.sid, Basoni.sid, Sadis.sid), not just read from PSID headers."
  ],
  "sources": [
    "data/sidid.json byTag.Slaygon (author: Kenneth Mutka (Slaygon); no released/reference/comment supplied) — and byTag.Censored_Editor, a separate tag, author Kenneth Mutka (Slaygon), released '1990 Censor Design', reference https://csdb.dk/release/?id=91724",
    "SIDId signature source, BSD-3-licensed: https://github.com/cadaver/sidid/blob/master/sidid.cfg (entry 'Slaygon', line 1775-1776) — repo README/licence at https://github.com/cadaver/sidid",
    "Maintained fork carrying an identical Slaygon signature: https://github.com/WilfredC64/player-id",
    "DeepSID curated player database, live: https://deepsid.chordian.net/api/v1.php?players — record {title: 'Censor Editor v1.6', search: 'slaygon', developer: Slaygon, start_year: 1990, csdb_id: 67187, platform: 'Native / C64 emulator', distribution: 'Exclusive; released in 2001', zero_pages: '$40, sometimes also $41'}; cached locally as data/players.json",
    "data/composers/slaygon.json — 20 of 43 records tagged 'Slaygon' (verified across all of data/composers/*.json as the only composer using this tag)",
    "HVSC Musicians.txt: 'Slaygon (Mutka, Kenneth) / Censor - SWEDEN' (data/hvsc/Musicians.txt line 1517). HVSC STIL.txt has no entry for any Slaygon file (data/hvsc/stil.json, zero matches) — so no STIL note names the editor either.",
    "CSDb scener profile: https://csdb.dk/scener/?id=934",
    "CSDb release 'Censored Editor V1.6' (2001, Censor Design, code Slaygon): https://csdb.dk/release/?id=67187",
    "CSDb release 'Censored Editor V1.1' (1990, Censor Design, code Slaygon): https://csdb.dk/release/?id=91724",
    "CSDb release 'Slaygon Coder V1.0' (1990, Censor Design, code Slaygon): https://csdb.dk/release/?id=20865",
    "CSDb release 'Notemaker' (1989, Censor Design, code Matcham/Slaygon/Unifier): https://csdb.dk/release/?id=5133",
    "CSDb release 'Notemaker V2' (1990, Censor Design, code Slaygon/Unifier): https://csdb.dk/release/?id=142470",
    "CSDb SID entries (PSID header load/init/play, 6581/PAL): https://csdb.dk/sid/?id=27445 , https://csdb.dk/sid/?id=27449 , https://csdb.dk/sid/?id=27478",
    "Demozoo scener page: https://demozoo.org/sceners/14680/",
    "Remix64 interview with Slaygon: https://remix64.com/interviews/interview-slaygon.html",
    "This project's own disassembly/reassembly/trace-diff pass (2026): SIDdecompiler.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools\\SIDdecompiler.exe) + 64tass.exe + sidm2-sid-trace.exe, on HVSC MUSICIANS/S/Slaygon/2001.sid, Basoni.sid, Sadis.sid — see knowledge/players/reconstructions/slaygon.md for the full byte-level patch tables"
  ]
}
```

## Overview

"Slaygon" is the Player-ID tag for a personal music routine coded by Kenneth
Mutka (handle Slaygon), a Swedish scener with Censor Design, best known today
as the founder of SLAY Radio. In this project's dataset it is used by exactly
one composer — Mutka himself, 20 of his 43 catalogued files — matching the
"composer's own hand-coded routine" pattern (see CLAUDE.md's `Rob_Hubbard`
precedent) rather than a widely distributed tracker. Mutka confirms this
directly in a Remix64 interview: he wrote his own editor because "when ever you
needed a feature, you'd just code it in," and said doing so taught him "a lot of
the sid." CSDb credits him with several named C64 tools across 1989–2001
(Notemaker, Notemaker V2, Slaygon Coder V1.0, Censored Editor V1.1/V1.6,
Contactdealer V3.0, Censor Writer), all filed under the generic type "C64 Tool"
with no music-editor subtype, so CSDb by itself does not identify which is the
editor behind this tag. A 2026 disassembly pass (see below) confirmed the
routine's entry points, zero-page usage, and SIDId signature byte-for-byte,
and reached a 100% byte-exact / register-write-exact reconstruction on 3
independent files — but did not, and could not, resolve which named CSDb
release the code corresponds to.

## Quirks & gotchas

See the `quirks` array. The load-bearing points:

1. **Single-composer, self-coded routine**, confirmed by the author's own
   interview — not a published tool with a user base.
2. **The two authoritative indexes disagree about which tool this tag is.**
   DeepSID's curated player DB matches the tag `slaygon` to "Censor Editor
   v1.6" (CSDb 67187, a *2001* release), while SIDId keeps `Slaygon` and
   `Censored_Editor` as two separate tags with non-overlapping signatures
   (the latter pointing at CSDb 91724, 1990). Since the tunes carrying this
   tag are dated 1989–1991 by CSDb, `csdb_release` stays `null` rather than
   asserting either — disassembly did not settle this (no version marker in
   the code).
3. **The SIDId signature has no wildcards**, and decodes to voice-3 SID
   register writes fed from fixed page-3 addresses $033F/$0342/$0345 — now
   confirmed byte-for-byte present in the real disassembly, not just decoded
   from the published pattern in isolation.
4. **No source, manual, or format spec exists publicly** — checked CSDb,
   Lemon64, Forum64, Demozoo, Remix64 and the SIDId repos.
5. **The driver's true relocation base is $0334, not its own $1000 load
   address** — a real, load-bearing workspace block sits in the C64's
   RS-232/tape-buffer page below the loaded code. See `memory.load_address`
   and the Disassembly notes below.

## Disassembly notes

Performed this pass on 3 independent HVSC files: `2001.sid`, `Basoni.sid`,
`Sadis.sid` (all `MUSICIANS/S/Slaygon/`). Tooling: `SIDdecompiler.exe`
(disassemble), `64tass.exe` (reassemble), `sidm2-sid-trace.exe` (register-write
trace, 100 frames per file). Full byte-level patch tables are in
`knowledge/players/reconstructions/slaygon.md`.

- **Entry points** ($1000 load / $1000 init / $1003 play) — CONFIRMED BY
  DISASSEMBLY, identical on all 3 files: `init jmp l100e` at native $1000,
  `play jmp l114a` at native $1003, standard direct-jump convention (no
  IRQ/raster dispatcher, no `-P`/`-I` override needed).
- **Relocation trap (the key finding this pass)**: `SIDdecompiler`'s `-v2`
  memory map reports the true lowest-touched address as `$0334` on all 3
  files, not the PSID header's own `$1000` load address. Relocating with
  `-a4096` (the load address — the by-the-book choice) produces a
  plausible-but-wrong reassembly; relocating with `-a820` (decimal for
  `$0334`, the map's own `Start:`) is required. This confirms the driver
  keeps real state in the C64's RS-232/tape-buffer page ($0334-$0356) below
  its own code, populated from the loaded song's own leading bytes — not
  zero-initialized scratch space.
- **Zero page $40/$41** — CONFIRMED BY DISASSEMBLY: `z40`/`z41` (`z41 = z40 +
  1`) is used as the driver's main indirect data-table read pointer
  (`lda (z40),Y`) throughout the play routine. DeepSID's curated ZP claim for
  this tag, previously an unverified lead, is correct.
- **SIDId signature bytes** — CONFIRMED BYTE-FOR-BYTE in the disassembly of
  `2001.sid`: the exact `STA $D40F / LDA $033F / STA $D412 / LDA $0342 / STA
  $D413 / LDA $0345 / STA $D414` sequence appears verbatim inside the
  per-note voice-register-write subroutine reached from `play`.
- **The one recurring byte-diff cluster**: after correct relocation, all 3
  files reassemble to 98.6%-99.0% byte-exact, with 100% of the divergence
  clustered in one `$16C9-$1727`-ish range (exact extent is file-length
  dependent — 42/32/38 bytes on the 3 files respectively). `init` explicitly
  zeroes *part* of this range but not all of it — it is a mix of genuinely
  dead post-init workspace and load-bearing cold-start per-voice pitch/
  pulse-width/ADSR constants, both mis-captured by `SIDdecompiler`'s default
  `-t 30000` post-execution snapshot. Patching every diverging byte back to
  the pristine original-file value (a mechanical substitution — no guessing,
  the correct value is simply the real file's own byte) reaches
  **100.0000% byte-exact and register-write-exact (100 traced frames, 0
  diffs) on all 3 files.**
- **Data format** (order lists / patterns / instruments / wavetable /
  pulsetable / filtertable): still TODO. This pass verified register-write
  correctness, not the musical data layout — a genuine remaining gap, not
  addressed here.
- **Tag-vs-tool dating dispute**: disassembly does NOT resolve this. The code
  carries no embedded version marker; the PSID header's own free-text
  'released' field reads '1989-91 Censor Design' on all 3 files (matches
  HVSC dates, says nothing about which CSDb tool release the code
  corresponds to). `csdb_release` stays `null`.

## Verification

**Verified — `status: verified`.** Disassembled, reassembled, and
register-write trace-diffed 3 independent HVSC files (`2001.sid`,
`Basoni.sid`, `Sadis.sid`) via `SIDdecompiler.exe` → `64tass.exe` →
`sidm2-sid-trace.exe`. All 3 reach **100.0000% byte-exact** reassembly (after
patching the one recurring drifted-working-storage cluster — see
`knowledge/players/reconstructions/slaygon.md` for the exact byte tables) and
**register-write-exact** traces (100 frames each, 0 register-write diffs
against the real file). This also resolved two previously-unverified leads:
DeepSID's `$40`/`$41` zero-page claim is now disassembly-confirmed, and the
SIDId wildcard-free signature is now confirmed byte-for-byte in real code
(not just decoded from the published pattern in isolation).

Two things this pass deliberately does NOT close, and should not be read as
resolved: (1) the data format (order lists/patterns/instruments/tables) is
still entirely unknown — this pass verified register-write correctness, not
the musical encoding; (2) the tag-vs-tool dating contradiction between
DeepSID ('Censor Editor v1.6', 2001) and SIDId (`Censored_Editor`, a
separate 1990-dated signature) remains genuinely open — the disassembled
code carries no version marker that could settle it either way.

## Sources

See the `sources` array — SIDId's `byTag.Slaygon` plus the upstream
`sidid.cfg`/`player-id` signature files, DeepSID's live curated player record,
this project's `data/composers/slaygon.json`, HVSC `Musicians.txt` (and the
confirmed *absence* of any STIL entry), Kenneth Mutka's CSDb scener profile and
six of his tool releases, three of his SID files' CSDb entries, his Demozoo
page, his Remix64 interview, and this project's own 2026 disassemble/
reassemble/trace-diff pass on 3 real HVSC files (full byte-level patch tables
in `knowledge/players/reconstructions/slaygon.md`).
