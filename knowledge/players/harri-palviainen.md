# Harri Palviainen (player routine)

```json
{
  "id": "harri-palviainen",
  "name": "Harri Palviainen (player routine)",
  "aliases": ["Harri_Palviainen"],
  "authors": ["Harri Palviainen"],
  "released": "1986 (Finnish 'Floppy Magazine 64' era)",
  "status": "verified",
  "platform": "A playroutine authored by Finnish hobbyist Harri Palviainen — sole credited programmer/graphics/music author of an unreleased 1986 C64 platformer, Race with the Devil — used entirely (all 14 files) by a different musician, Ere Lievonen, for a complete set of Finnish Christmas carol arrangements published the same year via the diskmag 'Floppy Magazine 64'. Same coder-writes/musician-uses shape as this KB's [[olav-morkrid]] and [[henning-andersen]] cards, though the code-identity link here is a working hypothesis (same publication venue, same year), NOT confirmed by disassembly.",
  "csdb_release": null,

  "memory": {
    "load_address": "Fixed across all 14 files: load $7d70, init $8013, play $80ff (confirmed by SIDdecompiler.exe -v2 memory-map 'Start:' matching the PSID header load address exactly on every file — no relocation-base ambiguity). File length varies with song length (1565-4247 bytes) since song data is appended after the fixed player code.",
    "zero_page": "$fb-$fe (4 bytes, zfb/zfc/zfd/zfe in the disassembly).",
    "layout": "A small note/frame working-storage table at $7ff0-$7ff4 (5 bytes, init'd from constants baked into the code just before it, incremented/read every play call) sits between the song-data prelude ($7d70-~$8012) and the player code (init $8013, play $80ff onward). Full data-format layout otherwise undocumented (TODO)."
  },
  "entry": {
    "init": "$8013 (fixed, all 14 files).",
    "play": "$80ff (fixed, all 14 files; called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 3 filter writes in a comparatively quiet 27-write/50-frame sample, consistent with a slow carol tune)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HARRI PALVIAINEN HAS NO CSDb OR HVSC PROFILE AT ALL — confirmed by direct grep of the raw Musicians.txt (no 'Palviainen' or 'Harri' match; an earlier AI-search summary incorrectly conflated him with an unrelated 'Parviainen, Jani' entry — discarded as a hallucination, not included here) and a zero-result CSDb scener search. He IS independently documented as the sole credited Programmer, Graphics, AND Music/Sound author of Race with the Devil (1986, Protocol Productions Oy), an unreleased C64 platformer preview — a hobbyist one-off, not a demoscene fixture, which explains the absent CSDb/HVSC record.",
    "ERE LIEVONEN'S ENTIRE DOCUMENTED C64 OUTPUT IS 14 FINNISH CHRISTMAS CAROLS, all dated 1986, all published through the same outlet: 'Floppy Magazine 64' (a Finnish-language diskmag active 1985-1988). Titles are all recognizable Finnish Christmas standards (Enkeli taivaan, Joulun kellot/'Christmas bells', Kulkuset/'Jingle Bells', Sylvian joululaulu/'Sylvia's Christmas Carol', Varpunen jouluaamuna/'The Sparrow on Christmas Morning', Valkea joulu/'White Christmas', and 8 more) — a deliberate, complete carol-arrangement set for the magazine's December 1986 issue, not a random sampling.",
    "THE CONNECTION IS A WORKING HYPOTHESIS, NOT CONFIRMED: both Palviainen's game and Lievonen's carols surfaced via the same publication, same year (Floppy Magazine 64, 1986) — real and sourced, but no interview, shared-credit line, or CSDb co-membership was found actually linking the two people, and whether Race with the Devil's music routine is literally the same code as the 'Harri_Palviainen' tag on Lievonen's files (vs. independently similar) can only be settled by a disassembly/trace comparison, not by this research. Treat the coder/musician-pair analogy to [[olav-morkrid]]/[[henning-andersen]] as plausible, not established.",
    "A living Finnish harpsichordist named 'Ere Lievonen' (b. 1972, Oulu) surfaced in unrelated search results — his official biography never mentions computers or C64 work. Almost certainly a namesake, NOT the same person as this C64-era composer; explicitly not conflated here.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Harri_Palviainen entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note) — this card's disassembly (2026-07-24) is original work, not sourced from any prior RE.",
    "VERIFIED BY DISASSEMBLY+REASSEMBLY+TRACE (2026-07-24): all 14 local files share IDENTICAL fixed load/init/play addresses ($7d70/$8013/$80ff) — the player code itself is constant across the whole 14-file set, only the appended song data varies in length. 10 of 14 files reassembled 100.0000% byte-exact from a single SIDdecompiler.exe -a32112 -z -d -c disassembly. The other 4 (Valkea_joulu, No_onkos_tullut_kesa — 1 byte each; Jouluyo_juhlayo, Sylvian_joululaulu — 4 bytes each) diverge by only 1-4 bytes, ALL localized to the exact same $7ff0-$7ff4 working-storage table (a 5-byte play-routine frame/note counter, both read and written every play call) — SIDdecompiler's default 30000-call trace window bakes in a drifted post-execution snapshot there instead of the pristine cold-start constant, the same class of finding as this KB's laxity-newplayer/cheesecutter/dmc cards. Confirmed genuinely dead (not load-bearing) by register-write trace-diff, not just by the -v2 map's '+' marker: 5 of the 14 files were traced (Enkeli_taivaan, Kulkuset, Valkea_joulu, Jouluyo_juhlayo, Sylvian_joululaulu — spanning both the byte-exact and the near-exact groups) via sidm2-sid-trace.exe, 50 frames each, and every one was register-write-identical between the real file and the reassembly, byte-for-byte in the trace log (only the echoed input filename differed)."
  ],
  "sources": [
    "HVSC Musicians.txt (Lievonen entry confirmed at line 959, 'Lievonen, Ere - FINLAND'; Palviainen confirmed ABSENT via direct grep): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb search — Ere Lievonen (14 SID files, all 1986, all via Floppy Magazine): https://csdb.dk/search/?search=Lievonen",
    "CSDb SID — Enkeli taivaan (confirms local trace's load/init/play addresses and file path): https://csdb.dk/sid/?id=59282",
    "Lemon64 — Race with the Devil (Palviainen: Programmer, Graphics, Music/Sound): https://www.lemon64.com/games/details.php?ID=2063, https://www.lemon64.com/game/race-with-the-devil",
    "gamesthatwerent.com — Race with the Devil (unreleased preview, 'didn't seem to do any other games after that point'): https://www.gamesthatwerent.com/gtw64/race-with-the-devil/",
    "Floppy Magazine 64 archive (the shared publication venue): https://www.zimmers.net/anonftp/pub/cbm/c64/magazines/Floppy%20Magazine/index.html",
    "Local dataset: 14 files tagged Harri_Palviainen, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Harri_Palviainen` tag is a playroutine authored by Finnish hobbyist
programmer Harri Palviainen — otherwise known only as the sole
programmer/graphics/music credit on an unreleased 1986 platformer, Race
with the Devil — but used entirely (all 14 local files) by a different
musician, Ere Lievonen, for a complete set of Finnish Christmas carol
arrangements published the same year through the same diskmag. A working
hypothesis, not a confirmed collaboration.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Palviainen has **no
CSDb/HVSC profile at all**, documented only via an unreleased game credit;
Lievonen's entire output is a **deliberate 14-carol Christmas set**; and the
Palviainen/Lievonen connection is **explicitly a hypothesis** (same
publication venue and year), not a disassembly-confirmed code link.

## Disassembly notes

Original disassembly (2026-07-24, not published elsewhere): all 14 local
`Harri_Palviainen`-tagged files share the exact same load/init/play
addresses ($7d70/$8013/$80ff), i.e. one fixed player-code build with
per-song data appended. `SIDdecompiler.exe -o<out.asm> -a32112 -z -d -c`
(decimal 32112 = `$7d70`) plus `64tass.exe -a --cbm-prg` reassembles
10 of the 14 files 100.0000% byte-exact; the remaining 4 diverge only
in a 5-byte working-storage table at
`$7ff0-$7ff4`, confirmed dead (a play-routine frame/note counter,
SIDdecompiler's trace-window artifact, not a real difference) by
register-write trace-diff. Zero page usage is minimal: `$fb-$fe` (4
bytes). Data-format details (order list/patterns/instruments/effects)
were not reverse-engineered beyond what byte/trace verification needed —
still `TODO` for anyone wanting the full format, not required for the
`verified` status below.

## Verification

**Byte-exact + trace-exact reconstruction (2026-07-24) — `status: verified`.**
Disassembled `Enkeli_taivaan.sid` (representative file; load `$7d70`,
init `$8013`, play `$80ff`) with `SIDdecompiler.exe -a32112 -z -d -c`,
reassembled with `64tass.exe`, and byte-diffed against all 14 local
`Harri_Palviainen`-tagged HVSC files (same player code, per-song data of
varying length appended):

- **10/14 files: 100.0000% byte-exact** (Enkeli_taivaan 1616/1616,
  Joulun_kellot 1934/1934, Joulupukki_joulupukki 2333/2333,
  Joulupuu_on_rakennettu 1565/1565, Kilisee_kilisee_kulkunen 2327/2327,
  Kulkuset 3479/3479, Maa_on_niin_kaunis 1898/1898, Porsaita_aidin
  2039/2039, Tonttujen_jouluyo 1757/1757, Varpunen_jouluaamuna
  4205/4205).
- **4/14 files: 99.75-99.98% byte-exact**, ALL divergence confined to
  the same `$7ff0-$7ff4` working-storage table (Valkea_joulu 1 byte,
  No_onkos_tullut_kesa 1 byte, Jouluyo_juhlayo 4 bytes, Sylvian_joululaulu
  4 bytes).
- **Trace-diff (register-write-exact) on 5 of the 14 files** — spanning
  both groups above — via `sidm2-sid-trace.exe`, 50 frames, init
  `$8013`/play `$80ff`: Enkeli_taivaan, Kulkuset (both 100.0000%
  byte-exact group), Valkea_joulu, Jouluyo_juhlayo, Sylvian_joululaulu
  (all 3 from the near-exact group). All 5 were register-write-identical
  between the real HVSC file and the reassembly — confirming the
  `$7ff0-$7ff4` byte-diff cluster is genuinely dead (a post-execution
  snapshot of a runtime counter, not a reconstruction defect), per this
  KB's established precedent for this class of finding (laxity-newplayer,
  cheesecutter, dmc).
- This is a real register-write match this session produced and can
  cite, not a "plays and sounds right" impression — meets the project's
  bar for `verified`.
- Still open: the Palviainen/Lievonen code-identity hypothesis (see
  quirks) is NOT addressed by this verification — it confirms the player
  code reconstructs exactly, not who wrote it. Full data-format
  documentation (order list/instruments/effects encoding) remains `TODO`
  for a future pass; not required for byte/trace verification.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Lemon64,
gamesthatwerent.com, and the Floppy Magazine 64 archive.
