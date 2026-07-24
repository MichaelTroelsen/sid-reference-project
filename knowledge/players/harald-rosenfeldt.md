# Harald Rosenfeldt's player ("Music Assembler V3.1")

```json
{
  "id": "harald-rosenfeldt",
  "name": "Harald Rosenfeldt's player (\"Music Assembler V3.1\")",
  "aliases": ["Harald_Rosenfeldt"],
  "authors": ["Harald Rosenfeldt"],
  "released": "1988-89 (64'er / Markt & Technik)",
  "status": "verified",
  "platform": "A German magazine type-in music tool, published 1988-89 in 64'er (Markt & Technik; SIDdecompiler's own header parse reads 'Released: 1988 64'er/Markt & Technik', one year earlier than SIDId's '1989' — not resolved further, both plausibly correct for a magazine-series product spanning a year boundary). SIDId's own metadata NAME field calls this 'Music Assembler V3.1' — a coincidental, generic-era naming collision with the DIFFERENT, unrelated tool already carded in this KB as [[music-assembler]] (Marco Swagerman & Oscar Giesen's Dutch USA-Team product, 1988-89). CONFIRMED genuinely distinct code, not a data error — see quirks. Player-ID-fingerprinted across 18 files: 17 by Rosenfeldt himself, 1 by Michael Winterberg (already carded in this KB as [[michael-winterberg]] — no confirmed connection beyond both being German).",
  "csdb_release": null,

  "memory": {
    "load_address": "Confirmed identical on 2 independently disassembled real files (Cleopha.sid, Maple_Leaf_Rag.sid): load $9344, init $9f99, play $9fed, subtunes=1. The player binary is a fixed-address block; only the variable-length song-data tail appended after it differs per file (payload lengths 5228 vs 5189 bytes respectively) — matches this card's own prior note that all 18 files share one player+per-song-data layout.",
    "zero_page": "$fb/$fc (zfb/zfc) and $fd/$fe (zfd/zfe) — two independent pointer pairs used with indirect-indexed addressing ((zfb),Y and (zfd),Y) to read sequentially through the per-subtune song-data stream via helper routines at $9b56/$9b75 (confirmed by disassembly, not guessed).",
    "layout": "SIDdecompiler's own '-v2' memory-touch map reports the emulated trace's lowest touched address as $02ff, well below the PSID header's declared load address $9344 — NOT a dropped-leading-byte bug (gotcha 18/27) but a single, genuinely-used low-page workspace byte: init explicitly zeroes it (`lda #$00 / sta $02ff`) as a one-time flag. Per gotcha 40/33, SIDdecompiler must be relocated to this Start address ($02ff, decimal -a767), not the PSID load address ($9344, decimal -a37700) — using the header's own load address is mechanically inert (produces a plausible-looking but silently address-wrapped reassembly, confirmed here: 64tass emitted -Wwrap-pc/-Wwrap-mem and a two-disjoint-Data-range report)."
  },
  "entry": {
    "init": "$9f99. Bank-switches $A000-$BFFF to RAM (`dec $01`) to copy per-song setup tables, restores $01 afterward. CONFIRMED QUIRK: takes the subtune number in the accumulator on entry (standard PSID convention) but expects a 0-BASED index, not the 1-based value the PSID header's own startSong field literally holds — see quirks.",
    "play": "$9fed. A tiny bank-preserving stub (`lda $01 / ora #$f8 / cmp #$ff / bcc.. / dec $01 / jsr $9443 / inc $01 / rts`) wrapping the real per-frame routine at $9443, which internally loops a channel index from 1 through 6 (6 logical channels serving 3 physical SID voices — plausibly 2 sub-tracks per voice, e.g. pitch + independent pulse-width sweep, given the traced writes show osc*_freq_lo and osc*_pw_lo updating on independent per-frame deltas; not fully confirmed, left as an open lead)."
  },
  "speed": "One play call per screen frame (standard 50Hz PSID convention) — confirmed by a genuinely-differentiated, dense per-frame write pattern (~4-5 SID register writes/frame sustained) once the correct subtune index was used; see quirks for the subtune-index pitfall that initially masked this.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "Per-frame pulse-width sweep confirmed (osc*_pw_lo changes almost every frame in the trace) — encoding/table not reverse-engineered.", "filtertable": "Per-frame filter_freq_hi sweep confirmed active in the trace — encoding/table not reverse-engineered. Per-subtune song-pointer table confirmed at $9f2d (lo bytes) / $9f37 (hi bytes), indexed by the subtune number in X during init." },
  "effects": { "encoding": "TODO — not reverse-engineered this pass (out of scope; verification focused on byte/trace parity, not the composing format).", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CRITICAL SUBTUNE-INDEX PITFALL (found during verification): init takes the subtune number in the accumulator, per standard PSID convention — but this player expects it 0-BASED, not the 1-based value the PSID header's own startSong field literally holds. Passing the header's literal startSong=1 does NOT crash or error — it silently falls into a content-INDEPENDENT idle state: exactly 2 SID register writes (a control-register gate retrigger), repeating every 256 frames on the dot, BYTE-IDENTICAL regardless of which real song is loaded (confirmed on 2 unrelated real files — Cleopha.sid and Maple_Leaf_Rag.sid — out to 6000 simulated frames / ~2 real-time minutes with zero divergence between the two songs' trace output). This looks superficially like 'a working but extremely sparse/slow player', not an obvious failure — the tell was diffing two different real files' traces AGAINST EACH OTHER (not just original-vs-reconstruction) and finding them identical. Passing subtune=0 instead immediately produced rich, correctly-differentiated multi-voice/filter/pulse-width-sweep playback (~4-5 SID writes/frame, genuinely different between the two files). Any future trace of a Harald_Rosenfeldt file MUST pass (startSong - 1), not startSong.",
    "Bank-switch self-neutering: init explicitly patches out ($85,$01 STA-$01 opcode → $EA NOP or $A5 LDA-absolute) the bank-switch subroutines at $9b46/$9b4a/$9b51/$9b53/$9ba4/$9bc4/$9bdd once its own one-time RAM-exposure copy work is done, so the regular per-frame play call no longer re-toggles $01 — SIDdecompiler's own disassembly (built from a post-execution memory snapshot) shows the ALREADY-NEUTERED bytes at these addresses, not the real pristine 'STA $01' bytes; this is exactly the self-modified-code snapshot pattern documented in this project's gotcha 41 and hard-won-gotchas entries 10/16/17 elsewhere, confirmed here too via byte-diff + patch + re-trace (see Verification).",
    "Self-modified play-vector entry byte: the pristine byte at $9fed (the PSID header's own declared play address) is $60 (RTS — a safe no-op before init has run), and init's own setup code overwrites it to the real opcode once ready. Matches this project's gotcha 45 precedent exactly.",
    "NAMING-COLLISION RESOLVED — genuinely different, unrelated tools, NOT a SIDId data error: this project's own SIDId import gives this tag's NAME field as 'Music Assembler V3.1' (AUTHOR: Harald Rosenfeldt, RELEASED: 1989 64'er/Markt & Technik — the sole source, no CSDb reference exists for it), which superficially collides with the already-carded [[music-assembler]] (a completely different tool by Marco Swagerman & Oscar Giesen, Dutch USA-Team, released Feb 1989 as CSDb release 94388, which has ZERO mention of Rosenfeldt/64'er/Markt & Technik anywhere on its own page). INDEPENDENT confirmation of the split: an unrelated third-party disassembly catalog, JC64dis (a binary-disassembly-based player-ID tool built with no access to SIDId's naming), separately lists 'Harald Rosenfeldt's player' and the 'Music Assembler player' (Swagerman/Ouwehand tunes) as two DISTINCT routines under different labels — strong evidence the code itself is unrelated, not just a naming coincidence in one dataset. A 1984 64'er magazine article independently shows 'Music Assembler'-style generic names (MUSICALC, SYNTHIMAT, SEQUENZER 64, etc.) were a common, non-proprietary naming pattern for German composing tools of this era — the name itself is a red herring for lineage, deliberately NOT wired as an edge to [[music-assembler]].",
    "UNUSUALLY BARE IDENTITY RECORD: HVSC Musicians.txt lists ONLY 'Rosenfeldt, Harald' — no handle, no group, no country — notably sparser than neighboring alphabetical entries which do have country/group fields. No CSDb scener page exists for him at all. Consistent with a one-off magazine type-in program author rather than a demoscene participant — he appears NOT scene-connected in any way found.",
    "Whether Rosenfeldt personally coded the routine (vs. someone else at the magazine) is inferred only from SIDId's bare AUTHOR field — the actual 1989 64'er magazine article/byline itself could not be located via archive.org in the time available. Flagged as UNCONFIRMED at that level of detail, though the SIDId attribution itself is treated as reliable.",
    "NO CONFIRMED CONNECTION to Michael Winterberg (the other composer using this tag, 1 file) despite both being German — Winterberg (CSDb scener 731, group 'Speedi Systems', ~1984-92, ~15 game credits) has no shared group, no shared release, and Rosenfeldt has no HVSC group listed at all. Left as coincidental co-occurrence, not asserted as a real link.",
    "No known relationship to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Chris Huelsbeck — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare entry, no group/country): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "This project's SIDId import (deepsid_dl/sidid.nfo line 599 / data/sidid.json — sole source for the tool's NAME/AUTHOR/RELEASED fields)",
    "JC64dis — independent disassembly-based player catalog, lists 'Harald Rosenfeldt's player' and 'Music Assembler player' as distinct routines: https://iceteam.itch.io/jc64dis",
    "CSDb release 94388 — the OTHER, unrelated Music Assembler (Swagerman/Giesen, checked directly, no Rosenfeldt connection): https://csdb.dk/release/?id=94388",
    "64er-magazin.de archive — 1984 article cataloging similarly generic-named German C64 music programs (naming-pattern context): https://www.64er-magazin.de/8409/musikprogramme.html",
    "Existing KB card: knowledge/players/music-assembler.md (the different, unrelated tool with a coincidentally similar SIDId name)",
    "Existing KB card: knowledge/players/michael-winterberg.md (the other composer sharing this tag, no confirmed link)",
    "Local dataset: 18 files tagged Harald_Rosenfeldt, 2 composers (see knowledge/COVERAGE.md)",
    "This session's own disassembly/reassembly/trace verification (2026-07-24): SIDdecompiler.exe + 64tass.exe against 2 real HVSC files, MUSICIANS/R/Rosenfeldt_Harald/Cleopha.sid and Maple_Leaf_Rag.sid; trace via sidm2-sid-trace.exe (raw executable fallback). See the Verification section for full numbers."
  ]
}
```

## Overview

The `Harald_Rosenfeldt` tag is a 1988-89 German magazine type-in music tool
(64'er/Markt & Technik), which SIDId's own metadata happens to label
"Music Assembler V3.1" — a coincidental naming collision with a completely
different, unrelated tool already carded in this KB as [[music-assembler]].
Independent disassembly evidence confirms the two are genuinely distinct
code, not a data error. Player-ID-fingerprinted across 18 files. As of
2026-07-24 this card is `verified`: a real disassembly (SIDdecompiler +
64tass) of two independent real files reassembles byte-exact and traces
register-write-exact against the originals.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **fully resolved
naming collision**: two unrelated tools happen to share a generic
era-typical name in SIDId's data, confirmed distinct via an independent
disassembly catalog (JC64dis) that names them differently with no access
to SIDId's own naming. Also note the composer's **unusually bare identity
record** — no CSDb scener page exists for him at all.

## Disassembly notes

Disassembled with `SIDdecompiler.exe` (relocated to `-a767`, decimal for
`$02ff` — the tool's own `-v2` map "Start:" address, NOT the PSID header's
load address `$9344`; see gotchas 40/33 and the `memory.layout` field
above), reassembled with `64tass.exe`. Two independent real HVSC files
were used: `Cleopha.sid` and `Maple_Leaf_Rag.sid`
(`MUSICIANS/R/Rosenfeldt_Harald/`). Both share the exact same player
code (load `$9344`/init `$9f99`/play `$9fed`) with only the appended
song-data tail differing.

## Verification

**Byte-exact + register-write-exact trace match confirmed (2026-07-24) —
`status: verified`.**

- **Byte-diff (raw static, before patching):** Cleopha.sid 97.3412%
  (139/5228 diverging bytes, addresses `$9344-$a7af`); Maple_Leaf_Rag.sid
  97.6865% (120/5187 diverging bytes within the compared range, addresses
  `$9344-$9fed`). Every diverging address falls inside SIDdecompiler's own
  `-v2` map as write-touched (`#`/`w`/`+`/`_`) — never a pure
  execute-only (`x`/`o`) address — the classic drifted self-modified/
  working-storage-table signature (gotcha 41): SIDdecompiler's static
  `.asm` output captures a post-execution memory snapshot rather than the
  file's pristine cold-start bytes at these specific addresses (bank-switch
  routines neutered by init, per-voice working-storage tables, and the
  self-modified play-vector opcode — see quirks). Two bytes at the very
  tail of each file (`$a7ae-$a7af` for Cleopha, the equivalent offset for
  Maple) fall 2 bytes past SIDdecompiler's own traced `End:` address and
  were excluded from the comparison — same harmless trailing-gap pattern
  as hard-won-gotchas entry 9, not investigated further.
- **Byte-diff (after patching the 139/120 identified self-modified/
  working-storage bytes back to their pristine values):** **100.0000%
  exact on both files** (0/5226 and 0/5187 remaining diffs).
- **Trace-diff:** `sidm2-sid-trace.exe` (raw executable — the
  `mcp__sidm2-siddump__*` MCP tools were not registered in this session;
  see hard-won-gotchas entry 8), init `$9f99`, play `$9fed`, run for 1500
  frames (30 real-time seconds) on both files. **CRITICAL PITFALL, see
  quirks:** the PSID header's own `startSong=1` field, passed literally as
  the subtune number, produces a content-independent, byte-identical
  2-write/256-frame idle loop on BOTH files — confirmed a harness/
  calling-convention bug, not a disassembly defect, only after diffing the
  two different real songs' traces against EACH OTHER and finding them
  identical out to 6000 frames. Passing `subtune=0` (i.e. `startSong - 1`)
  instead produced correct, richly-differentiated multi-voice/filter/
  pulse-width-sweep playback. With the corrected subtune index: **original
  vs. reconstruction trace output is byte-for-byte identical on both files**
  (Cleopha: 6433 register writes/1500 frames, Maple_Leaf_Rag: 6187 register
  writes/1500 frames — zero diffs beyond the echoed input filename).
- **Prior verification pass note:** this card's earlier (2026-07-14)
  "233 register writes / 50 frames" figure for Cleopha almost certainly
  came from tracing the raw `.sid` path directly (rather than a properly
  built `.prg` with the header's real load address) or from the
  uncorrected subtune index — neither reproduced by this pass; that figure
  should not be trusted going forward, this Verification section
  supersedes it.
- **Not reverse-engineered this pass (left `TODO`):** the actual note/
  pattern/instrument data-stream encoding (`data_format.order_list` /
  `patterns` / `instruments` / `wavetable`, and `effects.encoding`) — the
  verification scope here was byte/trace parity of the disassembled
  player CODE, not decoding its composing format.

## Sources

See the `sources` array — HVSC Musicians.txt, this project's SIDId import,
JC64dis, CSDb, and the 64er-magazin.de archive.
