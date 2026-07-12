# Playbook: disassemble an unknown SID player

A repeatable method for reversing a C64 SID player routine into a knowledge
card. The goal isn't a perfect listing — it's the handful of facts the card
schema asks for (entry points, ZP, data-format walk, effect encoding),
**each verified by running the thing**.

> First, cheap wins before disassembly:
> - Is the source public? (SF2, GoatTracker, many trackers are open.) Read it.
> - Does SIDId (`data/sidid.json`) or DeepSID (`data/players.json`) already
>   name the author / technique? Seed the card from that.
> - Is it a known family (JCH NewPlayer Vn, DMC Vn)? Start from a sibling card.

## 1. Frame the file

- A `.sid` file is a PSID/RSID header + C64 binary. Read the header:
  **load address, init address, play address**, number of songs, speed flags.
  Those three addresses are your card's `memory.load_address` and
  `entry.init` / `entry.play` starting points — but treat the header as a
  *claim* to verify, not gospel.

## 2. Watch it run before reading a byte

- Load it in `mcp-c64` (assemble/run) or an emulator with a monitor. Let
  `init` run once, then call `play` per frame.
- **Log the writes.** The SID registers are `$D400-$D418`. Watching which
  registers change per frame — and in what order — tells you the voice model
  (order of freq/pulse/waveform/ADSR writes) faster than static reading.

## 3. Find the play routine's shape

- `play` almost always: advances a per-voice tick/tempo counter, and on tick
  boundaries pulls the next row from a sequence/pattern, then per frame runs
  the "effects" (vibrato/arp/pulse/filter) by walking tables.
- Identify the **zero-page** the routine clobbers (indexing pointers into
  order lists/patterns/tables usually live in ZP). Record the exact range in
  `memory.zero_page`. This is the field most often gotten wrong — confirm it
  by breakpointing writes to ZP during `play`.

## 4. Walk the data tables

For each of order list → patterns → instruments → wave/pulse/filter tables:
- Find the base pointer (often set up in `init`, or a constant the play
  routine indexes).
- Determine the **stride and terminator** (how a row/entry is sized, how a
  sequence ends / loops). Note it in `data_format`.
- Cross-check against a *sibling* player — families reuse formats, so
  `edges.same_effect_encoding_as` / `shares_routine_with` is often a real
  shortcut, not a guess.

## 5. Decode the effect commands

- Effects are a command byte (sometimes byte + parameter). Work out the
  **bit layout** (top nibble = command, bottom = param, or a jump table).
  Fill `effects.encoding` and the `effects.commands` map.
- Verify each by authoring a tiny tune that uses exactly one command and
  watching the SID writes change as expected.

## 6. Verify, then write the card

- Reconstruct `init`/`play` (or a minimal driver) from your understanding,
  **assemble and run it through `mcp-c64`**, and compare the SID-write trace
  to the original. Matching trace ⇒ the facts are right.
- Only then set the card `status: verified`. Record how you verified it in the
  card's **Verification** section (this is the difference between a fact and a
  guess).

## 7. Wire it into the graph

- Add typed `edges` to the players it derives from / shares routines with.
- `node knowledge/build-graph.js` and check the summary for dangling edges
  (targets with no card yet = your next candidates) and cycles.

---

**Anti-goals:** don't chase a byte-perfect full disassembly, and don't record
a fact you haven't run. A blank `TODO` is more useful than a wrong memory map —
the next session trusts this card.
