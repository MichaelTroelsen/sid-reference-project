# Øyvind Jergan (player routine)

```json
{
  "id": "oeyvind-jergan",
  "name": "Øyvind Jergan (player routine)",
  "aliases": ["Oeyvind_Jergan"],
  "authors": ["Øyvind Jergan"],
  "released": "~1992 (War Deal Lamers)",
  "status": "verified",
  "platform": "Norwegian coder-musician Øyvind Jergan's ('Outlaw', group War Deal Lamers) own playroutine. He is a CONFIRMED coder (not musician-only), and released two named, self-coded C64 tools the same year as his active SID output ('MP Player V2.0' and 'Decibel Blaster V2.0', both 1992) — plausibly the origin of this tag, though this specific link is this card's own inference from the CSDb data, not a stated fact anywhere. Player-ID-fingerprinted across 10 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file; player relocatable. HVSC set observed at $1000 (6 files: 6/8th Beat, Fantasi, Feed_Back, First-One, Ragnvald, Relaxed), $4000 (2 Fat 2 Fuck pt4), $5000 (2 Fat 2 Fuck pt3), $7000 (Short_Fantasi). ALL 10 files also use a fixed low-page runtime workspace at $0300-$03ac (a per-voice state block, cleared/re-filled at init, NOT part of the on-disk payload) — this is why SIDdecompiler's -v2 map reports Start:$0334 for the $1000-loading files, below their own load address; relocate to -a820 ($0334), not the load address, for those (gotcha 40).", "zero_page": "$02-$05 (4 bytes: temp/index scratch, labelled z02-z05 by SIDdecompiler).", "layout": "Two-entry JMP dispatch table at the player base (see entry); ASCII signature string ' PLAYER: OYVIND JERGAN/WDL...' embedded at base+$7 in every $1000-family file (a reliable fingerprint). Per-voice runtime state at $0300-$03ac. Song/instrument data begins ~base+$21." },
  "entry": { "init": "Two-entry JMP table at the player base; slot order varies per build. $1000-family: init=base+0 (jmp), play=base+3. 2 Fat 2 Fuck pt3 ($5000 load): play=$6000, init=$6003. 2 Fat 2 Fuck pt4: init=$4e00, play=$4e03. Short_Fantasi ($7000): init=$7000, play=$7003. Always read init/play from the PSID header, not assumed slot order.", "play": "See init — second/other JMP slot. Called once per frame (single-speed IRQ)." },
  "speed": "Single-speed (1x). PSID speed flag 0, header flags 0 on all 10 files; play called once per frame. Verified trace-exact over 500 frames.",
  "data_format": { "order_list": "TODO (not reverse-engineered — reconstruction is byte-exact but internal table semantics not decoded)", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use confirmed — writes to $d417 res/$d418 mode-vol are driven by self-modified operand bytes at base+$384/base+$386/base+$470 in the $1000-family layout, cold value $00)" },
  "effects": { "encoding": "TODO (not decoded)", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED via HVSC Musicians.txt: 'Jergan, Oeyvind (Outlaw) / War Deal Lamers - NORWAY' — real name Øyvind Jergan, handle 'Outlaw', group War Deal Lamers (a Norwegian demo group founded 1989, active through 1994, 22 releases: demos, cracks, music, games, tools).",
    "CONFIRMED CODER AND MUSICIAN (CSDb functions list both, plus some Graphician/Logo Graphician credits — a genuinely multi-role scener, not just a music-only tag). Named, self-coded tools released 1992, the same year as active War Deal Lamers SID output: 'Decibel Blaster V2.0' (Text/Music/Code credit) and 'MP Player V2.0' (Code credit, 16 June 1992) — the latter's name literally suggests 'Music Player'. This is a REASONABLE, but explicitly UNCONFIRMED, hypothesis for what this tag actually is — no source directly states 'MP Player' is the same routine as the 'Oeyvind_Jergan' tag; flagged as inference, not fact.",
    "ONE CLAIM EXPLICITLY RULED OUT: an earlier AI-search snippet suggested a 'SHAPE/Blues Muz'' group affiliation for Jergan — this did NOT check out against CSDb's own authoritative webservice data (which lists War Deal Lamers only) and is noted here only as a ruled-out lead, not included as fact.",
    "A same-name real-world professional (an IT consultant named 'Øyvind Jergan' in Oslo) surfaced in general web search — explicitly NOT treated as a confirmed identity match; a common enough Norwegian name with zero scene corroboration linking the two, excluded from this card.",
    "NO CONNECTION FOUND to this KB's other two carded Norwegian composers, Olav Mørkrid and Henning Rokling (who ARE linked to each other via Funcom) — checked explicitly, none found. War Deal Lamers appears to be a separate Norwegian scene circle.",
    "War Deal Lamers group notable release: 'Lame Over' (1994) placed 3rd-best demo at the Tribute 1994 party.",
    "The '2_Fat_2_Fuck' multi-part filenames in his own HVSC folder line up chronologically with his 1992 tool releases — noted neutrally, no further meaning attached.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Jergan, Oeyvind (Outlaw) / War Deal Lamers - NORWAY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=36437, functions Coder+Musician, 'Decibel Blaster V2.0'/'MP Player V2.0'/'The Lame Game' credits): https://csdb.dk/scener/?id=36437",
    "CSDb webservice (authoritative group/function data cross-check): https://csdb.dk/webservice/?type=scener&id=36437&depth=3",
    "CSDb group — War Deal Lamers (id=615, Norwegian demo group, 1989-1994, 22 releases): https://csdb.dk/group/?id=615",
    "Local dataset: 10 files tagged Oeyvind_Jergan, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Oeyvind_Jergan` tag is Norwegian coder-musician Øyvind Jergan's
('Outlaw') own playroutine, for the group War Deal Lamers. He is a
confirmed coder who released two named, self-coded tools the same year as
his active SID output — a plausible but explicitly unconfirmed origin for
this tag. Player-ID-fingerprinted across 10 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed dual
coder+musician role**, with two named 1992 tools ('MP Player V2.0',
'Decibel Blaster V2.0') offered as a reasonable but explicitly unproven
hypothesis for this tag's origin. Also note **one ruled-out lead**
(a false group-affiliation claim) and the **absence of any connection**
to this KB's other Norwegian composers.

## Disassembly notes

Not published anywhere (not in the realdmx RE repo, no STIL note), but now
fully reconstructed by disassembly. The player is small (~$1000-$2000 of
code+data per file), relocatable, single-speed, 3-voice with light filter
use. Base layout: a two-entry `JMP` dispatch table at the load base (slot
order varies per build — read init/play from the PSID header), an ASCII
signature `PLAYER: OYVIND JERGAN/WDL...` at base+$7 (a dependable
fingerprint present in every `$1000`-family file), a fixed low-page
per-voice runtime workspace at `$0300-$03ac`, and song/instrument data from
~base+$21. Internal data-table semantics (order list / pattern / instrument
encoding) were NOT decoded — the reconstruction is byte- and
register-exact, but those fields remain `TODO`, not guessed.

## Verification

**Register-write-EXACT reconstruction on all 10 HVSC files
(2026-07-24) — `status: verified`.**

Disassembled each file with `SIDdecompiler.exe`, reassembled with `64tass`,
byte-diffed the payload, and trace-diffed 500 frames
(`sidm2-sid-trace.exe`) against the original. Every file is
register-write-identical after patching a small set of self-modified
working-storage bytes back to their pristine cold values (SIDdecompiler
captures the *post-execution* snapshot of self-modified code/data, gotcha
41). **Every single diverging byte on every file falls in a `-v2`-map
write-touched (`+`/`w`/`_`/`#`) region** — confirmed dead workspace, not a
disassembly defect.

Commands (per file): `SIDdecompiler.exe <sid> -o<f>.asm -a<DECIMAL Start:
addr> -z -d -c` → `64tass.exe -a --cbm-prg -o <f>.prg <f>.asm`. Relocation
base = the `-v2` map's `Start:` address (`$0334`/decimal 820 for the
`$1000`-loading files, since the player's fixed low-page workspace sits
below the load address; the load address itself for the higher-loading
files).

| File | load | init/play | byte-diff (overlap) | diff bytes | 500-frame trace (patched) |
|---|---|---|---|---|---|
| 6_8th_Beat | $1000 | $1000/$1003 | 99.938% | 3 | EXACT (2149 writes) |
| Fantasi | $1000 | $1000/$1003 | 99.949% | 3 | EXACT (1958) |
| Feed_Back | $1000 | $1000/$1003 | 99.959% | 2 | EXACT (2220) |
| First-One | $1000 | $1000/$1003 | 99.907% | 4 | EXACT (2597) |
| Ragnvald | $1000 | $1000/$1003 | 99.938% | 3 | EXACT (1055) |
| Relaxed | $1000 | $1000/$1003 | 99.935% | 3 | EXACT (2156) |
| Turbo-Rock | $1000 | $1000/$1003 | **100.000%** | 0 | EXACT (1955) |
| Short_Fantasi | $7000 | $7000/$7003 | 99.979% | 1 | EXACT (274) |
| 2_Fat_2_Fuck_part_3 | $5000 | $6003/$6000 | 99.083% | 48 | EXACT (1556) |
| 2_Fat_2_Fuck_part_4 | $4000 | $4e00/$4e03 | 98.625% | 66 | EXACT (3037) |

The `$1000`-family diffs cluster at the SID volume/filter self-modified
operand bytes (base+$384/+$386/+$470, cold value `$00`). Short_Fantasi's
single diff is a self-modified `JMP` operand (`$71b0`) — dead even
un-patched (traced exact without the patch). The two `2_Fat_2_Fuck` parts'
larger clusters are per-song data/working tables in the `$62f7-$6454` /
`$4100-$52bc` regions respectively — all write-touched, all closed by the
patch. Per-byte patch tables preserved in
`knowledge/players/reconstructions/oeyvind-jergan.md`.

This confirms the `Oeyvind_Jergan` tag is a single, self-consistent
relocatable playroutine across all 10 of Jergan's HVSC files (the MP Player
V2.0 origin hypothesis remains plausible but is still not independently
confirmed by any external source).

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (scener + webservice +
group).
