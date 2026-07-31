# Kmuse (Gilles Soulet)

```json
{
  "id": "gilles-soulet",
  "name": "Kmuse (Gilles Soulet)",
  "aliases": ["Gilles_Soulet", "Kmuse"],
  "authors": ["Gilles Soulet (INFERRED — see quirks; GTW64 names the tool but not its author)"],
  "released": "1986-1988",
  "status": "verified",
  "platform": "Native C64 editor/compiler. Used as a COMPOSITION WORKSTATION for non-C64 targets (Thomson/CPC/ST), not only for C64 games — see quirks.",
  "csdb_release": null,

  "memory": {
    "load_address": "1987-88 build: driver core $9010-$99B6 (2470 bytes, byte-identical across Demo_Tune/Sapiens/Albedo, all ending at exactly $99B6). 1986 build (Fifth_Axis): load $0800; $1A00 copies $1A00-$1CFF to $B300-$B5FF — RAM UNDER THE BASIC ROM. VERIFIED (see Verification): SIDdecompiler's own -v2 emulated-memory-touch map reports 'Start: $0800' for all three 1987-88 files regardless of each file's own PSID load address ($83a0/$8580/$6b50) — this is a FIXED low-RAM workspace ($0800-$0BFF, write-only, never below the file's own load address in content terms, just below it in address terms) that init copies per-tune header/pointer data into, plus a second fixed write-only workspace at $C000-$C7E3(ish) that a separate indirect copy (source data from the per-tune init area, e.g. $8EA0 in Demo_Tune) fills. Both are outside the PSID payload and correctly excluded from the byte-diff per this project's own gotcha-40/lesson-60 convention (compare only the code region at/above the PSID load address).",
    "zero_page": "$FA-$FD and $CB (measured). $FB/$FC serve as the per-voice pointer pair. $CB is KERNAL's last-key-pressed byte — see the editor-leftover quirk.",
    "layout": "1987-88 build: jump table $9000: JMP $9010 / $9003: JMP $987A. Play stub at $8FF0 is byte-identical across all three (A2 36 86 01 20 EA 91 20 45 99 A2 37 86 01 60): banks $01=$36 (BASIC out), JSR $91EA (main play), JSR $9945, restores $01=$37. Init differs per tune ($8F50/$8F90/$8FA0) because it carries the per-tune relocation addresses. Main play $91EA uses a 3-way round-robin (AND #$03 / CMP #$03) over per-voice pointer tables at $9096/$9099."
  },
  "entry": {
    "init": "Per-tune: $8F50 / $8F90 / $8FA0 (1987-88 build); $1A40 (Fifth_Axis, 1986).",
    "play": "$8FF0 via the $9000/$9003 jump table (1987-88 build). Fifth_Axis: play=$0000 — SELF-INSTALLING (CSDb also records no PlayAddr)."
  },
  "speed": "Headers say speed=0 (50Hz CIA nominal) — NOT verified by trace.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE TOOL HAS A REAL NAME: Kmuse. GTW64 got this from Soulet DIRECTLY (June 2023): 'The music was made on the C64, as the editor/compiler (called Kmuse) that Gilles used was developed on C64 for a previously released game called The Fifth Axis.' The DeepSID tag is just his name; the tool is Kmuse.",
    "THE KEY INSIGHT — THE C64 WAS HIS COMPOSITION WORKSTATION, NOT HIS TARGET. Only ONE of the four files is from a game that ever shipped on C64. Per the SID headers' own `released` strings: Fifth_Axis = 1986 Activision (a real C64 game, his only one on Lemon64); Sapiens = 1987 Loriciels (shipped Thomson MO5/CPC/ST — NEVER C64); Albedo = 1988 Myriad (shipped ST/Amiga — NEVER C64); Demo_Tune = 1987 Gilles Soulet (no publisher, his own tune). He composed on the C64 with Kmuse, then adapted to the CPC's Z80/AY and the ST. MobyGames: his Sapiens/Albedo themes 'were the first digitalized in-games themes playing in real time on the ST platforms.'",
    "THIS SUPERSEDES THE STANDING PUBLIC GUESS. A Lemon64 forum thread (iAN CooG, 2012) explains the non-C64 tunes as 'games were cancelled'. They were NOT cancelled — they shipped, just never on C64. GTW64 has it from Soulet himself: 'he confirmed there was never any intention of releasing the game on the C64 and nothing was started', because 'C64 had lackluster sales in France'. Same thread records the SIDs being added to HVSC in 1997 by Adam Lorentzon.",
    "INDEPENDENT CONFIRMATION VIA A COMPLETELY SEPARATE SIGNAL — CSDb's UsedIn counts. Fifth_Axis is used in 51 releases (1987-1993: Aural Mystery 1, TST Ripp #4, Quari Demo 14...). Albedo, Sapiens and Demo_Tune: ZERO each. The one tune that actually shipped on C64 got ripped everywhere; the three that never shipped were invisible to the scene until they arrived at HVSC direct from the composer. The rip counts corroborate the shipping story without depending on it.",
    "TWO DISTINCT BUILDS UNDER ONE TAG, sharing only a tuning table. The 1986 build (Fifth_Axis) and the 1987-88 build (the other three) share just 192 meaningful bytes (runs >=16 total 293, but 47+38 of those are zero padding). That single real shared block is a 96-entry 16-bit frequency table — 96 low bytes $912A-$9189 + 96 high bytes $918A-$91E9, at delta $877A from Fifth_Axis's $09B0. Equal-tempered (consecutive ratio ~1.0595 = 2^(1/12); t[12]/t[0]=2.03), lowest entry $010C = 268 = standard C64 C-0, 8 octaves. Play code starts at $91EA, immediately after. SO: the driver code was REWRITTEN between 1986 and 1987; only the tuning table survived. Common ancestry, same tool evolving.",
    "EDITOR CODE IS LEFT IN THE REPLAYER — corroborating GTW64's 'editor/compiler' description from the binary side. $9945 reads $CB (KERNAL last-key-pressed; init sets it to $40 = 'no key') and $028D (KERNAL shift/ctrl/CBM flag), and writes $0F to $D404/$D40B/$D412 (all three voice control registers). A pure replayer has no reason to poll the keyboard. Inference (labelled): leftover, not deliberate interaction.",
    "PER-TUNE RELOCATION DETAIL: Albedo's init uses subtune index ASL A x3 (x8 stride) to copy an 8-byte song descriptor to $900A. Sapiens' init relocates 3 pages of music data to $0800-$0AFF and 7 pages $8880-$8F7F to $C000-$C6FF, sets $CB=$40, and SELF-MODIFIES $901C with $60 (RTS) to disable a routine.",
    "THE BANKING EXISTS BECAUSE OF THE 1986 BUILD: Fifth_Axis copies $1A00-$1CFF to $B300-$B5FF, i.e. RAM under the BASIC ROM — which is exactly what the $01=$36/$37 banking around every call is for.",
    "AUTHORSHIP OF KMUSE IS INFERRED, NOT CONFIRMED — do not state it as fact. GTW64's wording is passive: 'the editor/compiler (called Kmuse) THAT GILLES USED was developed on C64', and it never names the author. Soulet's documented assembly-language specialization plus the tag naming make him the likely author, but the Guillion brothers coded the game it was built for (The Fifth Axis). No source states who wrote Kmuse.",
    "PUBLISHER NUANCE, both true: The Fifth Axis's SID header and Lemon64 say Activision; uvlist says Loriciels. Loriciels originated/commercialised it in France (the Guillion interview: Loriciels handled 'l'edition et la commercialisation'), Activision published the C64 release. Lemon64 credits it coded by Didier & Olivier Guillion, music Gilles Soulet — the same pair he would co-found Myriad with two years later.",
    "TWO CSDb ID-NAMESPACE TRAPS HIT AND CORRECTED DURING THIS RESEARCH (both worth knowing project-wide): (1) CSDb's type=scener&id=N takes a HANDLE id, not a scener id — id=14354 returns 'Craft', Germany, an unrelated person; Soulet is handle 16063 -> scener 14354. (2) The DeepSID dump's per-file csdb_id is a CSDb SID id (csdb.dk/sid/?id=), NOT a release id — querying type=release with them returns unrelated Strike Force cracks (26299 -> 'N.E.I.L. Android', 26301 -> 'Shanghai Karate', 26302 -> 'Marauder'). Pure cross-namespace coincidence that nearly got reported as 'the scene ripped his music into cracks'. This second trap was a REAL BUG in this project's Files tab (fixed) — see CLAUDE.md.",
    "IDENTITY COLLISIONS RULED OUT: a Gilles Soulet trail runner (UTMB) plus Facebook/Instagram profiles — unrelated. Discogs/Last.fm/WhoSampled/sonichits 'Gilles Soulet' artist pages are AUTO-GENERATED AGGREGATIONS OF THE HVSC SID RIPS, not a separate music career — do not cite them as discography. MUSICIANS/J/JAP/Homo_Sapiens.sid is a different composer's tune, unrelated to Sapiens.",
    "He appears in a rip compilation alongside another card's subject: 'The Final Apocalypse' (1988, Abyss) credits Music to Chris Huelsbeck, David Whittaker, Gilles Soulet AND Ken Lagace — see [[ken-lagace]]. This is SID REUSE in a scene release, NOT a collaboration; four unconnected commercial game composers listed under 'SIDs used in this release'. Recorded so it isn't mistaken for a working relationship.",
    "DATA-QUALITY: 4 files, not 3 (Albedo, Demo_Tune, Fifth_Axis, Sapiens). Not in DeepSID's curated 129; no SIDId entry (zero hits in sidid.nfo and data/sidid.json) — inferred-only. The project's own inferred-player heuristic (<=3 composers -> 'likely a personal routine') fires correctly here: 4 files / 1 composer.",
    "DISASSEMBLY GOTCHA (found during reconstruction, real and reproducible, not a bug in this project's tooling): Demo_Tune's per-tune init builds an indirect-copy DESTINATION pointer from two separate immediate loads (`lda #$00 / sta zfa` then `lda #$c7 / sta zfb`, giving a hardcoded $C700) rather than via a symbol. SIDdecompiler's disassembler has no way to recognise that this pair of immediates forms an address — it only symbolises operands it sees used directly as jump/data-table targets — so this specific destination stays a literal constant in the output even though nearby destinations to the SAME $C000-$C7FF workspace block (reached via genuine lo/hi pointer tables elsewhere) ARE correctly symbolised. Practical effect: the reconstruction is 100.0000% byte-exact and trace-exact at native (zero-shift) relocation — confirmed by real execution, not just a byte compare — but a relocation-invariance control build (SIDdecompiler's own disassembly re-emitted at a different base, the project's standard non-tautological check for a byte-identical `-r` build) hangs during INIT, because the un-relocated $C700 literal now points at code, not workspace, in the shifted build. This is a structural SIDdecompiler limitation (immediate-pair-constructed pointers are invisible to its symbolisation pass), not evidence against the verified native reconstruction."
  ],
  "sources": [
    "HVSC Musicians.txt:1543 ('Soulet, Gilles - FRANCE'; no handle, no group) + local files at MUSICIANS/S/Soulet_Gilles/ (no STIL entry)",
    "GamesThatWerent GTW64 — Sapiens (names Kmuse; June 2023 direct contact with Soulet): https://www.gamesthatwerent.com/gtw64/sapiens/",
    "GamesThatWerent GTW64 — Albedo: https://www.gamesthatwerent.com/gtw64/albedo/",
    "MobyGames person page (biography; Loriciels 1986 start; Myriad co-founding; French Space Agency), via Wayback since the live URL Cloudflare-403s: http://web.archive.org/web/20230406035657/https://www.mobygames.com/person/162058/gilles-soulet/",
    "Lemon64 — The Fifth Axis: https://www.lemon64.com/games/details.php?ID=3994 · his game list: https://www.lemon64.com/games/list.php?list_individual=gilles-soulet · the 2012 'cancelled' thread now superseded: https://www.lemon64.com/forum/viewtopic.php?t=43645",
    "CSDb scener 14354 (via handle 16063): https://csdb.dk/scener/?id=14354",
    "Wikipedia — Sapiens (video game): https://en.wikipedia.org/wiki/Sapiens_(video_game)",
    "Guillion brothers interview (French; Loriciels' role in Sapiens / 5eme Axe): https://amstrad.eu/didier-et-olivier-guillion-sapiens-5eme-axe/",
    "Myriad Software team page (he is NOT listed — involvement was at founding only): https://www.myriad-online.com/en/site/team.htm",
    "Remix64 (10 remixes; no biography): https://remix64.com/composer/gilles-soulet/",
    "Confirmed absent: realdmx/c64_6581_sid_players has no Soulet/Kmuse entry; SIDId has no entry."
  ]
}
```

## Overview

`Gilles_Soulet` is the tag for **Kmuse** — a C64 editor/compiler used by **Gilles
Soulet**, a French assembly programmer and composer. He started at **Loriciels**
in 1986, co-founded **Myriad** (1988, Toulouse) with Didier and Olivier Guillion,
wrote on assembly optimization and game music for *Amiga News* from 1989, and —
per his own MobyGames bio — went on to be a project manager at the **French Space
Agency**.

The card's central finding is that **only one of his four HVSC files comes from a
game that ever shipped on the C64**. Kmuse ran on the C64 because that's where
the tool lived; the music it produced was then adapted to Thomson, CPC and ST
targets. The C64 was the instrument, not the audience — a genuinely unusual shape
for an HVSC composer folder, and one confirmed by Soulet himself via GTW64 in
2023.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The C64-as-workstation story** — and the fact that it *supersedes* the
  public "the games were cancelled" explanation still sitting on Lemon64.
- **CSDb's `UsedIn` counts corroborate it independently**: 51 rips of the one
  tune that shipped, zero of the three that didn't.
- **Two builds, sharing only a tuning table** — the code was rewritten in 1987,
  the frequency table survived.
- **Kmuse's authorship is inferred, not confirmed.** GTW64 names the tool but
  never its author.

## Disassembly notes

Real disassembly was done here (scratchpad disassembler, disposable) and,
this pass, a second real disassembly (`SIDdecompiler.exe`) that was actually
reassembled and byte/trace-diffed — see Verification below for the numbers.

The 1987-88 build's driver core is **byte-identical across three files**
(`$9010-$99B6`, all ending at exactly `$99B6`), with only the per-tune init
differing — because init is where the relocation addresses live. This pass's
byte-diff independently confirms it: the SAME `SIDdecompiler` disassembly
(same driver source, only the per-tune init/data varying) reassembled
100.0000% byte-exact for all three 1987-88 files.

The clearest single find is `$9945` reading `$CB` (KERNAL's last-key-pressed
byte) and `$028D` (the shift/ctrl/CBM flag). **A replayer has no reason to poll
the keyboard.** That's editor code left in the shipped routine, and it's the
binary-side corroboration of GTW64 calling Kmuse an "editor/compiler."

Also confirmed this pass: `$901C` (a `SEI` opening a raster-IRQ-install
sequence — sets `$D012`/`$D011`, disables/acks CIA and VIC IRQs, installs a
custom handler at `$0314/$0315`, `CLI`, `RTS`) is **self-modified to `$60`
(RTS) by every init call before it's ever reached** (`ldx #$60 / stx l901c`
runs just before `jsr l9000` in every one of the three files' init routines).
So this whole raster-IRQ-install block is dead code under the normal
externally-polled PSID `play` convention these three files use — it's
presumably vestigial from a self-installing-IRQ mode shared with the 1986
build's approach (Fifth_Axis, `play=$0000`), not something these three files
ever execute.

## Verification

`status: verified` — **scoped to the 1987-88 build** (Demo_Tune.sid,
Sapiens.sid, Albedo.sid — 3 of the 4 files). Real disassembly, reassembly,
byte-diff and register-write trace-diff were run this pass (`SIDdecompiler.exe`
+ `64tass.exe` + `sidm2-sid-trace.exe`; see `tools_and_locations`).

**Relocation** (gotcha 40/lesson 60): `SIDdecompiler -v2`'s own emulated
memory-touch map reports `Start: $0800` for all three files, well below each
file's own PSID load address ($83a0/$8580/$6b50) — a fixed low-RAM workspace,
not a dropped leading byte. Relocating with `-a2048` (decimal for `$0800`,
i.e. a net-zero shift that keeps the code at its true native addresses) with
`-r` (lesson 63) produced a single contiguous, non-wrapping block with no
`64tass` `-Wwrap-pc`/`-Wwrap-mem` warnings; relocating instead to the file's
own load address (the naive by-the-book move) wraps the payload past $FFFF —
confirmed and rejected.

**Byte-diff, code region only** (from each file's own PSID load address to
load+payload-length — the fixed $0800/$C0xx workspace outside that range
isn't part of the file and is correctly excluded per gotcha 40/lesson 60):

- Demo_Tune.sid: 5654/5654 bytes, **100.0000%**
- Sapiens.sid: 5174/5174 bytes, **100.0000%**
- Albedo.sid: 11878/11878 bytes, **100.0000%**

**Trace-diff** (`sidm2-sid-trace.exe`, raw executable per lesson 8/46,
init/play called at the file's real PSID vectors): ran INIT + 60-100 frames of
PLAY on the original file's own bytes and on the reassembled build, for every
file and every subtune, and diffed the full `frame,cycle,register,old,new`
stream:

- Demo_Tune.sid: 100 frames, 0 divergences (359-line trace, exact incl. cycles)
- Sapiens.sid: 60 frames, 0 divergences
- Albedo.sid subtune 0: 60 frames, 0 divergences
- Albedo.sid subtune 1: 60 frames, 0 divergences

Because the byte-diff is already 100.0000%, this trace-diff is necessarily
tautological on its own (a byte-identical program cannot fail to reproduce
itself) — but it is still real, non-trivial evidence: it confirms the
reassembled program actually EXECUTES correctly through INIT and PLAY (no
crash, no hang, no illegal-opcode trap) on every subtune tested, not just that
the bytes match. A genuine non-tautological check was also attempted — see the
quirks entry "DISASSEMBLY GOTCHA" — and its (expected, explained) failure is
recorded there rather than treated as invalidating the native result.

**Not verified / explicit gap**: `Fifth_Axis.sid` (the 1986 build) was **not
attempted this pass**. It is a structurally different build per this card's
own "TWO DISTINCT BUILDS" quirk — different load address ($0800 vs $6b50-$83a0
for the other three), RAM-under-BASIC-ROM banking (`$1A00` copied to
`$B300-$B5FF`), and a self-installing IRQ player (`play=$0000`, no PSID play
vector, matching lesson 81's pattern — would need `-I`/`-P` overrides to
disassemble). That is the concrete next step for this card: disassemble
Fifth_Axis with entry-point overrides recovered from its IRQ-install code,
byte-diff and trace-diff it the same way.

Data format (order list, patterns, instruments, wave/pulse/filter tables) and
effect encoding remain `TODO` — they were not attempted this pass (out of
scope for a byte/trace verification pass; would need a deep read of the
now-confirmed-correct disassembly). Also still undetermined: who actually
wrote Kmuse; `$CB` command semantics beyond `$40` (idle) / `$03`; whether the
keyboard polling is deliberate or leftover (inferred: leftover); the IRQ rate
(headers say 50Hz CIA nominal — the trace above confirms register-write
*sequencing* is exact but did not independently re-derive the rate). **No
Kmuse editor binary was found anywhere** — only the runtime replayer embedded
in the four SIDs.

## Sources

See the `sources` array above.
