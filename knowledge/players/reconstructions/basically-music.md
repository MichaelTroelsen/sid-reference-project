# basically-music — reconstruction manifest

See `knowledge/players/basically-music.md` for the full Verification
narrative. This file records the exact byte-level patch table, recomputed
directly from each original HVSC payload and the surviving reassembled
`.prg`.

## Files (all 10 Chester Claff HVSC files, `MUSICIANS/C/Claff_Chester/`)

Every file: PSID, load `$7d2b`, init `$7d4a`, play `$7d5a`, 1 subtune.
Disassembled with
`SIDdecompiler.exe -a32043 -z -d -c -v1` (32043 decimal = `$7d2b`; the `-v2`
map's own "Start:" address is `$7d2b`, matching the PSID load address
exactly — no gotcha 18/27/31/40-style relocation shift needed). Reassembled
with `64tass -a --cbm-prg`.

| file | payload | raw reassembly vs pristine |
|---|---|---|
| Dill_Pickles | 3476 | 99.7986% (7 bytes) |
| Every_Tub | 1936 | 99.6901% (6 bytes) |
| Frisco_Rag | 3788 | 99.8416% (6 bytes) |
| Jelly_Roll_Blues | 5396 | 99.8517% (8 bytes) |
| Jumpin_at_the_Woodside | 2384 | 99.7483% (6 bytes) |
| Kitten_on_the_Keys | 4100 | 99.8049% (8 bytes) |
| Moonlight_Cocktail | 3588 | 99.8049% (7 bytes) |
| Nickel_in_the_Slot | 3848 | 99.7921% (8 bytes) |
| Theme_1_by_Chet_Claff | 1452 | 99.4490% (8 bytes) |
| Von_Meinem_Bergli | 1259 | 99.5234% (6 bytes) |

## The patch table (identical mechanism, same fixed addresses, all 10 files)

Every differing byte is self-modified working storage that sits in a small
fixed block immediately after the 25-byte SID-init table (`$7d2b-$7d43`,
copied verbatim to `$d400-$d418` by `init`). SIDdecompiler's default
`-t 30000` trace baked in the *post-execution* value of each; the pristine
cold-start value is the correct one. Every address below is marked
read+write in the `-v2` map (both a `lda l7dXX`/`sta $d4XX` read and a
`sta l7dXX` self-modifying write index it).

| addr | role | pristine (cold) | drifted (captured) |
|---|---|---|---|
| `$7d45` | tempo reload value for `$7d59` | `$03` | varies |
| `$7d47` | voice-1 waveform-control working byte (`→ $d404`) | `$20` (saw) | `$40` |
| `$7d48` | voice-2 waveform-control working byte (`→ $d40b`) | `$20` | `$40` |
| `$7d49` | voice-3 waveform-control working byte (`→ $d412`) | `$20` | `$40` |
| `$7d58` | outer tempo counter | `$04` | varies |
| `$7d59` | inner tempo counter (`dec l7d59` in `play`) | `$04` | varies |
| `$7e07` | note-freq-hi scratch (set by `l7e2d`) | `$00` | varies |
| `$7e08` | note-freq-lo scratch (set by `l7e2d`) | `$00` | varies |

Not every file drifts all 8 (a file only drifts the bytes its own trace
happened to leave in a non-cold state) — e.g. Dill_Pickles drifts 7
(`$7d59` was already `$04`), Every_Tub drifts 6. Patching each file's
drifted set back to its pristine value yields **100.0000% byte-exact**
reassembly on all 10.

Patch script: `scratchpad/bm/patch.js` rewrites each drifted `.byte`
directive to the pristine value read straight from the original SID payload,
anchored to SIDdecompiler's own `lXXXX` label (per lessons_learned entry 26).

## Trace verification (harness + natural PSID path)

Two independent trace paths, both via `sidm2-sid-trace.exe` (CSV on stderr,
captured with `2>&1`):

1. **Natural PSID path** (`init $7d4a`, `play $7d5a`, no pointer setup):
   sparse by design — see the card's "sparse trace" finding. Original vs
   patched reassembly: **register-write-identical** (Dill_Pickles: 3 writes
   over 600 frames, 0 diff lines). The *unpatched* reassembly diverges
   (1608 diff lines), confirming the 7-byte patch is load-bearing.
2. **Harness path** (a 11-byte stub sets the zero-page song pointer
   `$fb/$fc = $7f00` — the compiled-song base — then `jmp init`; full
   playback): original vs patched reassembly register-write-identical on
   every file tested — Dill_Pickles 493/493 writes, Kitten_on_the_Keys
   912/912, Jelly_Roll_Blues 528/528, Von_Meinem_Bergli 253/253, all
   **0 diff lines** over 900 frames. Harness: `scratchpad/bm/harness2.js`.

## Player structure recovered from the disassembly

- **Zero page**: `$fb/$fc` (little-endian) = 16-bit pointer walking the
  compiled song byte-stream. **`init` does NOT set it** — it only copies the
  25-byte SID-init table to `$d400`. The standalone player relies on its host
  BASIC environment (or a reached `$01` restart command) to point `$fb/$fc`
  at the song data. This is the true cause of the "sparse trace" — not blank
  note fields (see card).
- **`init` (`$7d4a`)**: `ldx #0 / lda $7d2b,X / sta $d400,X / inx / cpx #$19 /
  bne` — copies 25 bytes to the SID.
- **`play` (`$7d5a`)**: two-level tempo divider (`dec $7d59` inner,
  `dec $7d58` outer, reload from `$7d45`), then `jsr $7d75` on tick.
- **Song byte-stream** (compiled data, `$7f00` in Dill_Pickles): first byte's
  bit0 is the row-type flag. **bit0=0 → note row**: 4 bytes = voice1, voice2,
  voice3, duration; each voice byte's low nibble = index into freq tables
  (`$7e09` hi / `$7e1b` lo), high nibble = octave (that many `lsr $7e07 /
  ror $7e08` right-shifts); index `$00` = rest (no write), `$ff` = tie (gate
  held, no re-trigger); pointer += 4. **bit0=1 → command escape** (`$7e5b`),
  the byte value selects: `$01` = restart (pointer ← `$7f00`); `$03`
  (`$7e77`) = 12-byte block setting tempo (`$7d45/$7d46`), attack/decay
  (`$d405/$d40c/$d413`), sustain/release (`$d406/$d40d/$d414`) and per-voice
  waveform (`$7d47/48/49`), pointer += 12; `$05` (`$7ec7`) = 7-byte block
  setting pulse-width hi (`$d403/$d40a/$d411`) and lo (`$d402/$d409/$d410`),
  pointer += 7.
- **No filter writes** anywhere in the engine (no `$d415-$d418` stores past
  the init table) — confirms the card's "no filter control beyond ADSR"
  observation is a genuine engine limitation, not a per-song choice.
