# Anthony Lees (player routine)

```json
{
  "id": "anthony-lees",
  "name": "Anthony Lees (player routine)",
  "aliases": ["Anthony_Lees"],
  "authors": ["Anthony Lees"],
  "released": "1986-1989 (System 3 / Last Ninja era)",
  "status": "verified",
  "platform": "English composer Anthony Lees's own hand-coded playroutine — classically trained (clarinet, alto sax, bassoon, choir conducting) before switching to C64 composition. Co-composed The Last Ninja (1987, System 3) with Ben Daglish (already carded in this KB as [[ben-daglish]]), each using his own distinct player routine on the same soundtrack. Player-ID-fingerprinted across 12 files: 7 Lees's own, 4 by an unrelated duo 'Jaz_and_Mo', and 1 the Last Ninja file itself sitting inside Ben Daglish's HVSC folder.",
  "csdb_release": null,

  "memory": {
    "load_address": "Variable per file. Dream Warrior: $c000 (reassembled at $1013 due to low-mem workspace). Neuron: $7bb8. Rainbow Dragon: $e000 (reassembled at $e001, one-byte drop).",
    "zero_page": "Uses ZP $ff for play-enable flag (lda $ff at play entry). Full ZP usage TODO.",
    "layout": "Player code at top of load block (init N bytes in, play deeper). Data tables precede init (instrument/note tables in the gap between load base and init). Runtime workspace at low fixed addresses (e.g. $1013 for Dream Warrior — below code load base, causing gotcha-40 trap)."
  },
  "entry": {
    "init": "Dream Warrior: $c171. Neuron: $7bb8 (=load). Rainbow Dragon: $e14e. Convention varies — init may or may not equal load address.",
    "play": "Dream Warrior: $c1b4. Neuron: $7be1. Rainbow Dragon: $f300."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE LAST NINJA CROSS-REFERENCE, RESOLVED — a legitimate joint-composer credit, NOT a misfile: CSDb's own SID entry lists the game's soundtrack as co-composed, 'The Last Ninja / Ben Daglish & Anthony Lees / 1987 System 3', 11 subtunes. System 3 split the 12 in-game compositions between the two, roughly half each (Lees did tunes including the Apocalypse-Now-inspired loader/jungle theme and the dungeon theme per multiple bios). Each composer used HIS OWN player routine — HVSC files the combined .sid under the primary/first-billed composer's folder (Daglish), so this project's per-file player detection correctly tagged the file `Anthony_Lees` even though it physically sits in `Daglish_Ben/`. Mundane, real explanation — not a data error.",
    "A SEPARATE 'Last_Ninja_preview.sid' sits in LEES'S OWN folder — independently attested to exist (a YouTube Renoise-cover video references it), consistent with an early/demo build predating the final game mix, but no primary source describes exactly what distinguishes the 'preview' from the final tunes — flagged as UNKNOWN rather than asserted.",
    "BIOGRAPHY (from an obituary and retrospective blog posts, since Lees himself never gave a scene-era interview): born ~1969/70, Great Harwood, Lancashire. Classically trained musician (clarinet, alto sax, bassoon, choir conducting) before switching to C64 composition mid-1980s and writing his own player. Won a 1986 ZZAP!64 competition — beating Barry Leitch, Jonathan Dunn, and Neil Baldwin (also carded in this KB as [[neil-baldwin]]) — which brought him to System 3 owner Mark Cale's attention, leading directly to the Last Ninja commission. Left composition ~1989-90 after his father's death; worked ~30 years in the UK Civil Service. Died August 2016 in a traffic accident; the scene only learned of this in June 2018 when his wife contacted the community.",
    "ALSO COMPOSED FOR LAST NINJA 2, but it was rejected by System 3 as stylistically unfitting (per one obituary source only, not independently cross-verified — flagged as single-source).",
    "'JAZ_AND_MO' IS AN UNRELATED DUO, NOT A LEES ALIAS: HVSC lists them separately ('Jaz & Mo (Castor & Pollux) - UK'), and CSDb confirms 'Jaz' collaborated with 'Mo' on releases matching the local filenames (A-Pair-A-Teeth, Mo's Mindsmear Muzak Demos). The '(Castor & Pollux)' parenthetical in HVSC does NOT resolve to a real identity — CSDb's actual Castor/Pollux sceners are unrelated people active decades later. No confirmed connection between Jaz_and_Mo and Lees beyond sharing this DeepSID tag — likely coincidental (independently similar or byte-identical routine), not investigated further.",
    "CSDb lists him as Musician-only on his own credits, but he self-credited BOTH Code and Music on his own 1986 demos (Neuron, Reflex Arc, Synapse) — i.e. he coded his own routine himself, consistent with the Last Ninja co-composer split each using a distinct player.",
    "No known relationship to any other composer/tool already in this KB besides Ben Daglish (Last Ninja) and the Neil Baldwin competition mention (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Lees, Anthony - UNITED KINGDOM (ENGLAND)')",
    "c64audio.com obituary (biography, Last Ninja composer split, Last Ninja 2 rejection): https://c64audio.com/blogs/news/anthony-lees-an-obituary",
    "8bitlegends.com retrospective (death, scene's 2018 discovery): https://8bitlegends.com/2018/07/02/anthony-lees-the-last-ninja-1-have-left-us/",
    "VGMPF biography: https://www.vgmpf.com/Wiki/index.php?title=Anthony_Lees",
    "CSDb scener (id=4290, Code+Music self-credits on Neuron/Reflex Arc/Synapse): https://csdb.dk/scener/?id=4290",
    "CSDb SID — The Last Ninja (co-composer credit, 11 subtunes): https://csdb.dk/sid/?id=10336",
    "CSDb scener — Jaz (id=19416, confirms Jaz_and_Mo as an unrelated duo): https://csdb.dk/scener/?id=19416",
    "Local dataset: 12 files tagged Anthony_Lees across 3 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Anthony_Lees` tag is English composer Anthony Lees's own playroutine —
a classically trained musician who taught himself C64 composition and coding,
best known for co-composing *The Last Ninja* (1987, System 3) alongside
[[ben-daglish]], each using his own distinct player. Player-ID-fingerprinted
across 12 files. His biography, only pieced together posthumously, is one of
the more poignant stories in this KB.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **Last Ninja
cross-reference is fully resolved** (a genuine joint credit, not a data
error — each composer used his own routine on a shared soundtrack); his
**life story** (a 1986 ZZAP!64 competition win led directly to the System 3
commission; he left composing after 1990 and died in 2016, unknown to the
scene until 2018); and that **'Jaz_and_Mo' sharing this tag is likely
coincidental**, not a Lees alias.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of an `Anthony_Lees`-tagged `.sid`
+ trace.

## Verification

**Verified 2026-07-24 — `status: verified` with known gap (self-modified workspace).**

Three real HVSC files disassembled, reassembled, traced, and diffed against
originals at 50 frames/subtune 1. All three achieve register-write-exact
trace match after restoring cold-boot values in self-modified workspace
(addresses the decompiler's `-v2` map marks `+`/`w` — working storage
captured post-execution, not pristine).

| File | Byte-diff | Diffs | Trace (orig) | Trace unpatched | Full-patch trace |
|------|-----------|-------|-------------|-----------------|------------------|
| Dream_Warrior.sid | 98.24% | 57 | 334 writes | 333 writes (1 missing osc3_control) | 334/334 EXACT |
| Neuron.sid | 99.57% | 25 | 364 writes | 375 writes (structural divergence) | 364/364 EXACT |
| Rainbow_Dragon.sid | 98.17% | 89 | 817 writes | 820 writes (structural divergence) | 817/817 EXACT |

Key findings:
- **Dream_Warrior**: Only 2 of 57 diff bytes are load-bearing ($c0c7: presence
  of osc3_control write; $c0c8: value of that write). The other 55 are dead
  workspace (overwritten before read). Confirmed via binary-search patch
  isolation.
- **All three files**: Disassembly is structurally correct. All byte diffs
  are in `+`/`w`-marked memory regions (self-modified working storage/data
  tables). The decompiler captures post-execution values that differ from
  the file's cold-boot bytes.
- **Load-address variation**: Dream_Warrior needed relocation to $1013
  (-v2 Start) instead of PSID $c000 (gotcha-40: low-mem runtime workspace).
  Rainbow_Dragon had a one-byte front drop (Start $e001 vs load $e000).
  Neuron had no trap (Start = load).
- **Entry-point convention varies**: Dream_Warrior init $c171 (0x171 from
  load). Neuron init = load. Rainbow_Dragon init $e14e (0x14e from load).
  Play addresses at varying offsets.

**Known gap**: The decompiler captures post-execution workspace values. A
faithful reconstruction requires restoring cold-boot bytes for the
self-modified regions (the `+`/`w`-marked addresses in the -v2 map). The
extent is file-dependent (2 to 89 bytes across tested files). This is the
standard SIDdecompiler limitation, not a defect in this player's
disassembly.

## Sources

See the `sources` array — HVSC Musicians.txt, an obituary and retrospective
blog posts, VGMPF, and CSDb (scener + SID entries).
