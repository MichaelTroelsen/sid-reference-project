# Rene Romijn (music routine, 1988-89)

```json
{
  "id": "rene-romijn",
  "name": "Rene Romijn (music routine, 1988-89)",
  "aliases": ["Rene_Romijn", "R.Romijn", "Romijn music routine"],
  "authors": ["R. Romijn (routine author, confirmed by an in-binary credit string)", "M. de Rooij / 'Emotional Mozes' (composer + editor on every tagged file)"],
  "released": "1988-89 (older credit variant undated; newer variant carries '(C) 1989 MUSICIANS ON DUTY')",
  "status": "verified",
  "platform": "A small 3-voice C64 music routine, ~1.0-1.2KB of engine code plus per-song data, tagged 'Rene_Romijn' in HVSC. All 6 tagged files were COMPOSED by Dutch demoscener Michel de Rooij ('Emotional Mozes'), and the tag names the ROUTINE's author, not the composer — now proven, not inferred: every tagged file carries a plain-ASCII credit string in its own payload naming R. Romijn as routine author and M. de Rooy as the musician.",
  "csdb_release": null,

  "memory": { "load_address": "$0900 on 5 of 6 tagged files (Bangers_89, Erik_B_and_Rakim_Inspiration, Five_Weeks, N_M_I_at_Six, Old_Chaps); $3000 on Orion_Intro. Read per file from the PSID header — the header load-address field is 0 on all six, so the real address is the payload's own first 2 LE bytes. Payload 2507-3403 bytes. SIDdecompiler's -v2 map Start: equals the load address on all six (no gotcha-40 relocation trap).", "zero_page": "$0a (voice index 0-2), $0b (voice*7 = SID register offset), $10 (current note code), $30/$31 (sequence/track pointer), $32/$33 and $34/$35 (the two instrument-stream pointers), $fa/$fb (pattern pointer). NOTE: the routine also uses the STACK PAGE as fixed working storage — $0100+voice*7 / $0101+voice*7 hold the running 16-bit frequency per voice (read back each frame for slides). That workspace lies below the load address and is not part of the file.", "layout": "load+$00 jmp init / load+$03 jmp play; load+$06.. small per-voice runtime arrays (SID offsets $00/$07/$0e, positions, counters); load+$27 volume+filter-mode byte written to $d418 every frame; load+$28 3-entry track-pointer table (split lo table then hi table); load+$2e 88-entry note-code table (8 octaves x 11 notes); +$86 16-entry octave-start table (stride $0b); +$96 88-entry frequency-hi table; +$f5 88-entry frequency-lo table; then engine code, credit string, per-voice effect state, 16-byte instrument streams with interleaved lo/hi pointer tables, the pattern-pointer table and the pattern/sequence data. Offsets quoted from Old_Chaps ($0900); the same blocks appear at slightly different offsets per file." },
  "entry": { "init": "load+$00 (JMP to the real init).", "play": "load+$03 (JMP to the real play). Single-speed; called once per frame." },
  "speed": "1x (single-speed). The play routine runs a 3-voice loop (X=2 down to 0), decrements a 1-byte tempo counter and only advances the sequencer when it underflows, reloading it from a 1-byte tempo-reload constant (value $02 on Old_Chaps, i.e. the sequencer steps every 2nd frame).",
  "data_format": {
    "order_list": "3 track/sequence lists, one per voice, addressed through a 3-entry lo table + 3-entry hi table at load+$28/load+$2b. A sequence byte with bit 7 set is a TRANSPOSE (value-$80, added to the note index); otherwise it is a pattern number, converted to a table index as (n-1)*2.",
    "patterns": "Pattern addresses come from an interleaved lo/hi pointer table (entry i at table+2i). Pattern bytes are note codes; $00 ends the pattern; bits $90/$80 in the byte select the tie/rest and duration-follows paths.",
    "instruments": "The instrument index is the HIGH NIBBLE of the per-voice state byte (`lda l0f55,X / lsr x4 / asl / tax`), i.e. (state>>4)*2, indexing two interleaved lo/hi pointer tables that yield a pair of 16-byte streams — one waveform/control stream written straight to $d404+voice*7, one note-offset (arpeggio) stream added to the voice transpose to re-index the frequency tables. Both streams are stepped by a per-voice position counter (`l0f22,X`). CAVEAT: that same byte is also bit-tested for effect flags $01-$40 at other sites, so it is either double-purposed across the frame or holds different content at the two points — not fully separated this pass.",
    "wavetable": "The first instrument stream is effectively the wavetable: raw $d404 control-register values (e.g. $20,$00,$ff,$20,... = sawtooth gate-on / gate-off / hard-restart pattern), 16 bytes per instrument.",
    "pulsetable": "No separate pulse table found; pulse width is written from per-voice state in the effect block, not from a dedicated indexed table.",
    "filtertable": "No indexed filter table. Filter cutoff/resonance ($d415-$d417) are written from per-voice effect state; the volume+filter-mode byte at load+$27 is written to $d418 unconditionally at the end of every play call."
  },
  "effects": { "encoding": "One per-voice state byte (`l0f55,X` on Old_Chaps) is bit-tested each frame; the confirmed dispatch bits are $01, $02, $04, $08 (four separate sites), $10, $20 (two sites) and $40. The same byte's high nibble is elsewhere used as the instrument index — see the caveat under data_format.instruments.", "commands": { "$02": "Frequency slide UP: 16-bit add of a per-voice step to the running frequency held at $0100/$0101+voice*7, then written to $d400/$d401+voice*7.", "$04": "Frequency slide DOWN: the same 16-bit subtract path.", "$08": "Vibrato/table-driven pitch modulation (indexes a per-voice modulation table).", "$01/$10/$20/$40": "Further per-voice modulation/filter/pulse paths — dispatch sites confirmed in the disassembly, individual semantics not fully separated." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE CARD'S CENTRAL OPEN QUESTION IS NOW CLOSED BY THE BINARY ITSELF. Every one of the 6 tagged files contains a plain-ASCII credit block in its own PSID payload. Two variants exist verbatim: (a) ' THIS MUSIC-ROUTINE IS MADE BY R.ROMIJN (3404-61181/NL)-EDIT:M.DE ROOY' (Old_Chaps @ $0ab3, Orion_Intro @ $3199); (b) ' ROUTINE BY: R.ROMIJN MUSIC BY: M.DE ROOY/ (C) 1989 MUSICIANS ON DUTY (MOD)' (Bangers_89 @ $0b38, Erik_B_and_Rakim_Inspiration @ $0b9c, Five_Weeks @ $0bcc, N_M_I_at_Six @ $0b9c). So 'Rene_Romijn' does name the ROUTINE's author, exactly as the previous pass's structural argument predicted, and de Rooij is credited as composer/editor. Found by scanning the raw payload for printable runs (>=8 chars, byte&0x7f) — see lesson 74.",
    "THE SAME STRINGS INDEPENDENTLY CORROBORATE 'MUSICIANS ON DUTY', which this card previously flagged as unconfirmed/single-sourced from one release credit: variant (b) spells it out as '(C) 1989 MUSICIANS ON DUTY (MOD)' inside four separate files, and SIDdecompiler reads the same text out of the PSID 'released' field ('1989 Musicians On Duty'). Variant (a) additionally carries what reads as a contact phone number, '(3404-61181/NL)' — reported verbatim as it appears in the binary; no attempt was made to resolve it to a person, and R. Romijn still has no CSDb/Demozoo/SIDId footprint under that name.",
    "TWO ENGINE BUILDS, AND THE CODE SPLIT DOES NOT MATCH THE CREDIT-STRING SPLIT. Using relocation-immune masked opcode patterns (lesson 68), the offset from the transpose decode (`sec / sbc #$80`) to the filter-cutoff store (`sta $d416`) is -$12 on {Bangers_89, Old_Chaps, Orion_Intro} and -$15 on {Erik_B_and_Rakim_Inspiration, Five_Weeks, N_M_I_at_Six}. The credit strings split the files 2/4 instead (Old_Chaps + Orion_Intro carry the older text). Bangers_89 therefore pairs the OLDER engine code with the NEWER 1989 credit block.",
    "THE NOTE TABLE IS 8 OCTAVES x 11 NOTES (88 entries), NOT 12 — the octave-start table steps by $0b and the search loop bounds itself with `cpx #$58` (88). A note is encoded as one byte whose LOW nibble selects the octave (used to index the octave-start table) and which is then found by LINEAR SEARCH through the 88-entry note-code table; the found index, plus the voice transpose, indexes parallel 88-entry frequency hi/lo tables. A linear per-note search is unusual for a routine this small.",
    "IT USES THE STACK PAGE ($0100-$0106) AS WORKING STORAGE — the running 16-bit frequency for each voice lives at $0100+voice*7 / $0101+voice*7 and is read back every frame by the slide code. That is outside the file's own payload, so it is emulator/runtime state, not something a byte-diff can check.",
    "SIDdecompiler LEAVES THE FIRST ENTRY OF EACH INSTRUMENT-POINTER TABLE UNSYMBOLISED on 5 of the 6 files (lesson 72b) — e.g. Old_Chaps emits `l0eb0 .byte $bc` / `l0eb1 .byte $0e` for the pointer $0ebc while symbolising the next two entries as `<l0eec, >l0eec, ...`. Invisible at the native base (byte-diff is a clean 100%), and it must be repaired before any relocated control build is meaningful.",
    "Not confirmed in SIDId (no entry for this tag). The Beyond Reality shared-release credit touches [[rob-hubbard]], [[fred-gray]], and Adam Gilmore (not a card in this KB by that exact id at time of writing) — not encoded as technical edges since it's a same-release, different-tune credit, not shared code. No other known relationship found (checked against David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Martin Galway, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos).",
    "THE ACTUAL COMPOSER (Michel de Rooij / 'Emotional Mozes', also called 'Red Mozes') IS WELL DOCUMENTED, per his own CSDb scener profile (id=13281): Netherlands, roles Coder/Graphician/Musician, member of Clash (left 03/1988), Tetragon (03/1988-09/1988), and Orion (~09/1988-01/1989). A GENUINE, SOURCED CONNECTION TO THREE EXISTING KB COMPOSERS: the Tetragon demo 'Beyond Reality' (1 May 1988) is a multi-composer music-showcase whose credits include Emotional Mozes alongside Adam Gilmore, Fred Gray, and Rob Hubbard — a shared-release credit line, not a collaboration or shared driver."
  ],
  "sources": [
    "PRIMARY (this pass): in-payload credit strings in all 6 HVSC files under MUSICIANS/E/Emotional_Mozes/ — Bangers_89.sid, Erik_B_and_Rakim_Inspiration.sid, Five_Weeks.sid, N_M_I_at_Six.sid, Old_Chaps.sid, Orion_Intro.sid",
    "PRIMARY (this pass): own disassembly via SIDdecompiler 0.8 + 64tass reassembly + sidm2-sid-trace register-write traces of all 6 files",
    "HVSC Musicians.txt ('Emotional Mozes (de Rooij, Michel) / Tetragon - NETHERLANDS'; 'Romijn' confirmed absent): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/composers/mozes-emotional.json (composer='M. de Rooij (Emotional Mozes)' on every file; 6 files tagged Rene_Romijn)",
    "sidid.nfo (project's local SIDId import — no match for 'Rene Romijn')",
    "CSDb scener id=13281 (Emotional Mozes / Michel de Rooij, full role/group history): local cache data/csdb/mozes-emotional.json",
    "Demozoo — Emotional Mozes (id=121582, production credit list): https://demozoo.org/sceners/121582/",
    "Demozoo — Beyond Reality (Tetragon, 1988, the shared-release credit with Gilmore/F.Gray/Hubbard): https://demozoo.org/productions/291790/",
    "CSDb release — Beyond Reality: https://csdb.dk/release/index.php?id=89389"
  ]
}
```

## Overview

A compact 3-voice C64 music routine written by **R. Romijn** and used
exclusively — in HVSC, at least — by Dutch demoscener **Michel de Rooij
('Emotional Mozes')**, who is credited in the same in-binary string as the
musician/editor. Six files carry the tag. Two engine builds exist, both
1988-89, the later one stamped `(C) 1989 MUSICIANS ON DUTY (MOD)`.

The engine is unusually simple for its era: a per-voice tempo-gated
sequencer over 3 track lists, a pattern-pointer table, and instruments made
of two 16-byte streams (a raw `$d404` waveform stream and an arpeggio/
note-offset stream). Notes are looked up by **linear search** through an
88-entry (8 x 11) note-code table. Running frequencies are kept in the
**stack page**, `$0100+voice*7`.

## Quirks & gotchas

See the `quirks` array. The load-bearing one is that this card's former
central open question — *who is Rene Romijn?* — is answered by the files
themselves: a plain-ASCII credit block sits in every tagged payload naming
him as the routine's author. It also independently corroborates the
'Musicians on Duty' group affiliation that was previously single-sourced.

## Disassembly notes

No published source. Disassembled this pass with
`SIDdecompiler.exe <file> -a<decimal of the -v2 Start address> -z -d -c -r`
and reassembled with `64tass.exe -a --cbm-prg`. The `-v2` map's `Start:`
equals the PSID load address on all six files, so no relocation-base
correction was needed. Real disassembled instruction bytes are 30-41% of
each payload (the rest is song data, the credit string, and unreached
filter/effect code), i.e. these are genuine reconstructions, not
pass-through byte dumps (lesson 65 check).

## Verification

**Reconstructed and verified (2026-07-30) — `status: verified`, with the
scope stated precisely below.**

**Byte-diff: 100.0000% on all 6 tagged files, first pass, no hand-patching**
(the `-r` recipe). Payload/compared lengths: Bangers_89 2700/2700,
Erik_B_and_Rakim_Inspiration 3131/3131, Five_Weeks 3227/3227,
N_M_I_at_Six 3403/3403, Old_Chaps 2507/2507, Orion_Intro 3040 of 3045
(its trailing 5 bytes `$3be0-$3be4` fall outside the traced End: `$3bdf`
and are not emitted; every emitted byte matches).

**Non-tautological relocation control** (required because `-r` makes the
native build byte-identical). Each disassembly was rebuilt at a different
base and traced against the original with the cycle column stripped:

| file | control base | bytes differing | frames | writes | divergences |
|---|---|---|---|---|---|
| Bangers_89 | `$5c37` and `$2400` | 384/2700 | 300 | 407 | **0** |
| Five_Weeks | `$5c37` and `$7000` | 450/3227 | 300 | 2252 | **0** |
| N_M_I_at_Six | `$5c37` and `$2400` | 430/3403 | 300 | 1237 | **0** |
| Old_Chaps | `$5c00`, `$2400` | 193/2507 | 300 | 1110 | **0** |
| Erik_B_and_Rakim_Inspiration | `$5c00`, `$7000` | 184/3131 | 300 | 1178 | **0** |
| Orion_Intro | `$2400`/`$4000`/`$7000`/`$5c37` | 432-568/3040 | 300 | 1388 | 52 (voice 3 only) |

Bangers_89's page-aligned control at `$5c00` additionally matched
**cycle-for-cycle** (0 diffs including the cycle column); the `$5c37`
control's cycle drift (-172..0) is page-crossing penalty from the changed
intra-page offset, per lesson 70(a). Total clean relocated evidence:
**6,184 register writes across 5 files, 0 divergences.**

**Known gap (honest scope).** Three files' relocated controls are not fully
clean:
* `Old_Chaps` and `Erik_B_and_Rakim_Inspiration` pass at two page-aligned
  bases each but diverge at a NON-page-aligned base (`$5c37`): 28/297 and
  4/293 writes over 100 frames, confined to one voice. The divergence
  tracks the base's LOW byte — a control build at `$5c01`/`$5c10`/`$5c37`
  shifts the selected note-table index by an amount that follows the low
  byte — so some low byte is being relocated that should not be, or vice
  versa.
* `Orion_Intro` diverges at every base tried (52/1388 writes over 300
  frames, all voice 3), i.e. a page-level rather than low-byte issue.

Ruled out this pass: (a) the lesson-72(b) unsymbolised instrument-pointer
entries — repaired by re-emitting every pointer-table entry base-relative
(`RB = *`), which keeps the native build at 100.0000% but did **not** move
any of the three divergences; (b) stray data divergence — the only
data-region bytes differing between native and relocated builds are the
three pointer tables, all correctly relocated; (c) a false-positive
symbolised code operand — reverting each of 8 address-ordered groups of the
502 differing code operands (lesson 64 group-complement) broke playback in
every group rather than fixing it; (d) under-tracing — `-C1` raised the
relocated bytes from 390 to 534 with identical divergence counts.

**Next lead for whoever continues:** the residual is code-side and
voice-specific. In `Old_Chaps` the wrong value is the frequency-table index
(native idx 53 -> `$17/$3c`; control idx ~74 -> `$4e/$00`), reached through
`l1074: lda l092e,X / cmp z10 / inx / cpx #$58` and then
`l1086: txa / adc l0fd8,X`. Instrument the byte that feeds `z10` (set by
`lda (zfa),Y / sta z10` around `$1043`) and the transpose at `l0fd8,X`, and
find which of them differs between the `$5c00` (clean) and `$5c01` (dirty)
builds. Note the `adc` at `l1086` has **no preceding `clc`**, so the search
loop's carry is part of the index — a carry difference alone could produce
the observed off-by-N.

## Sources

See the `sources` array — the primary sources for this pass are the six
HVSC files' own payloads (credit strings + disassembly + traces); the
biographical/provenance entries are unchanged from the prior pass.
