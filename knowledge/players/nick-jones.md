# Nick Jones (Captain of Coding)

```json
{
  "id": "nick-jones",
  "name": "Nick Jones (Captain of Coding)",
  "aliases": ["Nick_Jones"],
  "authors": ["Nick Jones (Captain of Coding) — his own hand-coded in-game routine (INFERRED, strongly supported; see quirks)"],
  "released": "1985-1987",
  "status": "stub",
  "platform": "Native C64. A personal hand-coded in-game routine — no editor involved (his devkit was an Avocet 6502 cross-assembler on a Philips 2000 CP/M machine).",
  "csdb_release": null,

  "memory": {
    "load_address": "Equinox $0C71 (5376 B); Exolon $6ABA (5192 B); Frostbyte $6658 (3763 B); Herbert's Dummy Run $0B66 (1203 B, untagged).",
    "zero_page": "TODO — not disassembled. Not guessed.",
    "layout": "TODO — not disassembled. Structural constant across all four: play at/near the block start, init far above it."
  },
  "entry": {
    "init": "Equinox $14AD; Exolon $7ED8; Frostbyte $6E9A; Herbert's $0FF7.",
    "play": "Equinox $0C71 (= load+0); Exolon $6ADA; Frostbyte $665E (= load+6); Herbert's $0C13."
  },
  "speed": "1x, VBI/50Hz — all four have PSID speed field 0x00000000.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HE IS PRIMARILY A CODER, NOT A COMPOSER — the correction that reframes this tag. Nick Jones (handle 'Captain of Coding') is one of the notable C64 conversion programmers of the late 80s: Cybernoid, Stormlord, Smash T.V., Supremacy, Time Machine, Exolon. He composed only early on, and in HIS OWN WORDS did his own music 'because there was noone else to do them'. So this is a composer-named tag for someone whose actual fame is code — and unusually for this KB, he really DID write his own driver.",
    "THIS IS WHY THE TAG IS SO SMALL — the whole story of the 3 files. From CYBERNOID (1988) ONWARD HE STOPPED COMPOSING and hired specialists: Cybernoid -> Jeroen Tel; Stormlord -> Jeroen Tel + Johannes Bjerregaard; Deliverance: Stormlord II -> Matt Gray. His own account: he gave Maniacs of Noise ~12kB and sample freedom for Cybernoid, got back music consuming ~95% CPU, and had it remade sample-free. The composer career is 1985-1987 only; the coding career runs ~1984 (Oric-1) to 1996+ (Shiny).",
    "A TRAP THE RESEARCH WALKED INTO AND CAUGHT — worth carding because it would fool anyone. The 80-byte run shared by all the tagged files LOOKS like a signature (exponential, ratio 1.0595 = 2^(1/12)) but it is the GENERIC C64 NOTE-FREQUENCY TABLE (high-byte half): it appears in 17,794 of 61,157 HVSC files (29%). The 46-byte run shared by all four appears in 17,210 files (28%). BOTH ARE WORTHLESS AS IDENTITY EVIDENCE. Compare [[jim-cuomo]], where the same trap appears at 2.3%.",
    "THE REAL SIGNATURE is a 232-byte TABLE at Equinox $0ECF / Frostbyte $68BC — 2 hits in all 61,157 HVSC files. Content is DATA, not code: a small-value table (01-03), a linear descending ramp $30->$00 with each value doubled, then a long alternating $80/$00 table (envelope/ramp + vibrato/LFO shaped — NOT disassembled, semantics unclaimed). Equinox and Frostbyte align at a constant +6 shift (41.5% raw byte match, 13 runs >=8 bytes covering 584 B), i.e. the same driver build with Frostbyte's block offset by 6 — which matches play=load+6 vs load+0.",
    "EXOLON'S DRIVER IS UNCONFIRMED, AND THE LIMIT IS THE METHOD, NOT THE EVIDENCE. Exolon shares ONLY the generic note table with the other two (5.8-7.7%, ~105-134 B). But raw-byte comparison CANNOT see through relocation (absolute addressing, three different load addresses), whereas DeepSID/SIDId signatures use wildcards and can. So this is NOT evidence that Exolon uses a different driver — it is a limit of raw-byte matching. Needs disassembly to settle.",
    "HERBERT'S DUMMY RUN (1985) IS UNTAGGED AND THAT LOOKS CORRECT: it shares nothing beyond the generic table (0 runs >=8 bytes). It is his FIRST C64 music — an earlier/different routine, most likely living inside someone else's engine. He self-reports David Perry as its coder; Lemon64 lists no coder, so that is self-report only.",
    "DRIVER AUTHORSHIP IS INFERRED, THOUGH STRONGLY: no SIDId entry; the tag is exclusive to him (3 files / 1 composer / zero reuse across the whole dump); he self-reports doing his own sound; and his devkit was an AVOCET 6502 CROSS-ASSEMBLER ON A PHILIPS 2000 CP/M MACHINE — hand-written assembler, not a C64 music editor. No known tool involved. Not disassembled, so not asserted as fact.",
    "A CLEAN CONTRAST PAIR WITH [[rob-hubbard]]: that card's core insight is that Rob_Hubbard spans 51 composers with only ~28% by Hubbard himself — a routine FAMILY that escaped its author. Nick_Jones is the opposite pole: 1 composer, 3 files, zero reuse — a genuine personal routine that never left him. The two cards together bracket what a composer-named tag can mean.",
    "NO COLLISION MATERIALIZED despite the common name — anchoring on the FILES rather than the name resolved it immediately, since the four tunes are Mikro-Gen/Hewson titles that uniquely pin the person. Ruled out: the Soho House founder (hospitality, zero C64 presence in any source); HVSC's MUSICIANS/J/Jones = 'Jones (Jonczy, Lukasz) / Faith - POLAND', a distinct Polish scener with his own folder; BlackBeltJones (Australia); Nick_Vivid / Scarim_Nick / Sherman_Nick / Williams_Nick. Only one 'Jones, Nick' exists in Musicians.txt.",
    "NOT A SCENER: no CSDb entry at all (DeepSID csdb_id: 0; CSDb webservice search returns 'No result'), consistent with DeepSID focus1: PRO. Employers: Mikro-Gen in-house from age 19, then freelance for Hewson, Elite, Martech, Probe, Vivid Image. Self-reported 'from the North of England to Bracknell, Berkshire'. HVSC: 'Jones, Nick (Captain of Coding) - UNITED KINGDOM'.",
    "TWO OF FOUR TUNES ARE COVERS (STIL): Equinox = Jean-Michel Jarre's 'Magnetic Fields, Part 4'; Herbert's Dummy Run = 'Baby Face' (Akst & Davis). Jarre is a recurring influence — FRGCB notes Exolon's melody riffs on Jarre too. The scene ripped his tunes: Equinox -> CSDb 100787, 100965, 41816, 125922; Exolon -> 37850, 223400.",
    "Confirmed absent from SIDId: zero matches for jones/exolon/frostbyte/equinox/mikro in sidid.nfo."
  ],
  "sources": [
    "c64.com interview #30 — Nick Jones (PRIMARY, first-person; cert invalid, needs curl -k): https://www.c64.com/gt_display_interview.php?interview=30",
    "T.A.C.G.R. interview — Nick Jones (PRIMARY, his own per-title credit list; HTTP-only, WebFetch's HTTPS upgrade fails it): http://tacgr.emuunlim.com/interviews/nickjones.html",
    "Lemon64: https://www.lemon64.com/game/exolon · https://www.lemon64.com/games/details.php?ID=993 · https://www.lemon64.com/game/equinox · https://www.lemon64.com/game/herberts-dummy-run · https://www.lemon64.com/game/cybernoid · https://www.lemon64.com/game/stormlord · https://www.lemon64.com/forum/viewtopic.php?t=81748",
    "C64-Wiki — Exolon: https://www.c64-wiki.com/wiki/Exolon · FRGCB — Exolon (Hewson, 1987): http://frgcb.blogspot.com/2020/08/exolon-hewson-consultants-1987.html",
    "CSDb webservice type=sid ids 15911/15912/15913: https://csdb.dk/webservice/?type=sid&id=15911",
    "Local: data/composers/nick-jones.json; HVSC 85 Musicians.txt:849, STIL.txt:54933-54941, MUSICIANS/J/Jones_Nick/*.sid; deepsid_dl/sidid.nfo (negative)"
  ]
}
```

## Overview

`Nick_Jones` is the personal in-game routine of **Nick Jones**, handle *Captain
of Coding* — an English programmer far better known for **code** than music
(Exolon, Cybernoid, Stormlord, Smash T.V., Supremacy, Time Machine). He wrote
his own music for three games between 1985 and 1987, in his own words, *"because
there was noone else to do them"* — then stopped as soon as he could hire
specialists.

That makes this one of the rare composer-named tags in this KB where the person
really did write the driver, and it makes the tag's small size the interesting
part rather than a gap.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The obvious "signature" is worthless** — the 80-byte exponential run shared
  across his files is the generic C64 note table, present in **29% of all HVSC**.
  The real fingerprint is a 232-byte data table hitting 2 files in 61,157.
- **Exolon is unresolved by method, not by evidence** — raw bytes can't see
  through relocation. Don't read its non-match as a different driver.
- **Contrast with [[rob-hubbard]]**: 51 composers vs. 1. Opposite poles of what
  a composer-named tag means.

## Disassembly notes

None. Everything above is header facts plus byte-run comparison across all
61,157 HVSC files. The 232-byte table's contents are described but its
**semantics are deliberately unclaimed** — it looks envelope/LFO-shaped, and
that guess is not recorded as fact.

## Verification

`status: stub` — deliberately, despite a confident identification. The person,
era, employers and the composer→specialist transition are all well sourced
(two first-person interviews). But **no memory map, ZP usage or data format was
determined**, and the one structural question that matters (does Exolon share the
driver?) needs disassembly.

Also undetermined: DeepSID's actual signature basis for the tag; birth year;
whether the modern "Nick Jones, Lead Programmer at Visual Concepts" is the same
person (the Shiny 1994-96 link *is* corroborated by his own credit list).
Frostbyte's C64 year is 1987 (Spectrum was 1986) — a platform split, not a
contradiction.

## Sources

See the `sources` array above.
