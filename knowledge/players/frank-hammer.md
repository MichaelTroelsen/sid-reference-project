# "Frank Hammer" (Sharon Soundworks)

```json
{
  "id": "frank-hammer",
  "name": "\"Frank Hammer\" (Sharon Soundworks)",
  "aliases": ["Frank_Hammer/Sharon"],
  "authors": ["Frank Hammer (unverified/possibly not a real distinct person)"],
  "released": "1988 (Sharon Soundworks)",
  "status": "verified",
  "platform": "A playroutine attributed by this project's tag to 'Frank Hammer', supposedly for the German group Sharon Soundworks (the SAME group already referenced in this KB via [[harald-rosenfeldt]]'s research, confirmed via a shared HVSC/CSDb group entry). CRITICALLY: 'Frank Hammer' has NO documented scene footprint anywhere — no HVSC entry, no CSDb scener profile, no group-credit mention across Sharon Soundworks' full release catalog. The tag's sole real, evidenced user is a confirmed scener, Michael Simon (CSDb, Sharon Soundworks member from 1988). Player-ID-fingerprinted across 27 files, all by Simon.",
  "csdb_release": null,

  "memory": { "load_address": "$3000 (confirmed on Beat_Me.sid and Crazy_Balls.sid — both load=$3000, init=$3000, play=$3006). Player code covers $3000-$35B4 (code/data) + working storage at $35B5-$3612 (self-modified at runtime). Song-specific read-only data extends to end of file (varies per file: $3F9F for Beat_Me, $3B43 for Crazy_Balls).", "zero_page": "TODO (no zero-page access observed in disassembly — the player stays fully in $3xxx range)", "layout": "Code/player data at $3000-$35B4. Working storage (channel state, counters, filter state) at $35B5-$3612 — read+write at runtime, self-modified. Song data (note tables, pattern data, instrument tables) at $3613 to end of file. No zero-page usage observed." },
  "entry": { "init": "$3000 (cold start — installs player IRQ, initializes SID registers and working storage).", "play": "$3006 (called in IRQ — the IRQ handler at $3087 chains to play at $3006)." },
  "speed": "IRQ-driven (player play=$3006 called each frame from IRQ handler at $3087). 50Hz standard.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — Beat_Me: 45 filter writes in 50 frames; Crazy_Balls: filter writes confirmed in trace)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'FRANK HAMMER' MAY NOT BE A REAL, DISTINCT PERSON — flagged prominently rather than treated as a routine biography. Confirmed by direct grep of the full downloaded HVSC Musicians.txt: no 'Hammer, Frank' entry exists anywhere. No CSDb scener profile exists for him. Checked Sharon Soundworks' full CSDb group credit list (39 releases) — no 'Frank Hammer' credit line anywhere. He is even more undocumented than this KB's previous 'thinnest footprint' case ([[harald-rosenfeldt]], who at least has a bare HVSC entry). Whether 'Frank Hammer' is a pseudonym for one of Sharon Soundworks' three actual confirmed members (Jörg Rosenstiel/'Han Solo', Michael Simon, or Sven Schlünzen), an invented/joke credit, or a genuine but completely undocumented fourth person is UNRESOLVED — do not assert any of these as fact.",
    "'SHARON' CONFIRMED AS THE SAME GROUP referenced elsewhere in this KB: CSDb group id=1748 (Sharon Soundworks, Germany) lists ex-members Jörg Rosenstiel (Han Solo, 1987-), Michael Simon (1988-), and Sven Schlünzen (1987-) — matching both this tag's suffix convention (this project's usual handle/groupname pattern, e.g. Mike/LSD) and the same group named in passing in the harald-rosenfeldt card's own research (an unrelated HVSC entry, 'Rosenstiel, Jörg (Han Solo) / Sharon Soundworks - GERMANY'). Not a coincidental word reuse — genuinely the same group.",
    "MICHAEL SIMON, the tag's actual sole evidenced user (27/27 files, an exact match to CSDb's own 27-track search count for him), IS a confirmed real scener: CSDb id=21477, active from 1988, 40+ credited productions 1988-1996, groups Sharon Soundworks plus later Alter/Triad/Creators/Abnormal.",
    "The traced tunes (Beat_Me, Crazy_Balls) are NOT commercial games — both are tracks on Sharon Soundworks' own 1988 music-collection release 'CD 11/12 \"Wet\"', i.e. compilation/demo tunes. NAME-COLLISION WARNING: there is an unrelated commercial C64 GAME literally titled 'Crazy Balls' (Markt & Technik, 1989) that surfaces in general web search — do not conflate it with Simon's same-titled tune.",
    "SPECULATIVE, EXPLICITLY UNSUPPORTED LEAD (flagged as color only, not evidence): Sharon Soundworks' catalog includes tracks titled 'Crocketts Theme' and 'Miami Vice II' — the real-world Miami Vice theme was famously composed by Jan Hammer. 'Frank Hammer' COULD be a coincidental or deliberate echo of that name given the thematic overlap, but no source supports this and it should not be treated as a real lead.",
    "No known relationship to any other composer/tool already in this KB beyond the Sharon Soundworks/Harald Rosenfeldt group overlap noted above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (confirmed absent 'Hammer, Frank' entry; bare 'Simon, Michael' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Michael Simon (id=21477, Sharon Soundworks 1988-): https://csdb.dk/scener/?id=21477",
    "CSDb group — Sharon Soundworks (id=1748, full member roster): https://csdb.dk/group/?id=1748",
    "CSDb SID — Beat Me (Sharon Soundworks 'CD 11/12 Wet' compilation, 1988): https://csdb.dk/sid/?id=43330",
    "CSDb SID — Crazy Balls (same compilation): https://csdb.dk/sid/?id=43340",
    "Existing KB card: knowledge/players/harald-rosenfeldt.md (independently references the same Sharon Soundworks group)",
    "Local dataset: 27 files tagged Frank_Hammer/Sharon, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Frank_Hammer/Sharon` tag nominally credits a "Frank Hammer" of the
German group Sharon Soundworks — but Frank Hammer has NO documented scene
footprint anywhere, while the tag's actual sole user, Michael Simon, is a
well-confirmed Sharon Soundworks member. Whether "Frank Hammer" is a
pseudonym, a joke credit, or an undocumented real person is left
explicitly unresolved. Player-ID-fingerprinted across 27 files, all by
Simon.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **near-total absence
of any "Frank Hammer" record**, flagged prominently rather than papered
over with a routine biography. Also note the **confirmed Sharon Soundworks
group identity** (matching a group already referenced elsewhere in this
KB) and an explicitly-labeled **speculative Jan Hammer name-echo** that
should not be mistaken for a real lead.

## Disassembly notes

First disassembly and trace-diff performed 2026-07-23 on two files
(Beat_Me.sid, Crazy_Balls.sid). SIDdecompiler + 64tass produce a
byte-exact reconstruction of the code and song-data regions ($3000-$35B4,
$3613-EOF); the working-storage region $35B5-$3612 captures post-execution
values (a known SIDdecompiler artifact — see Verification). The assembled
`.asm` is in `scratchpad/frank-hammer/beat_me.asm` and
`scratchpad/frank-hammer/crazy_balls.asm`. Both files share the identical
player code; only song data differs.

## Verification

**`status: verified` (2026-07-23).** Full disassembly + reassembly +
trace-diff on two independent files.

### Method

- **Files tested**: `Beat_Me.sid` (4000 bytes, 1 subtune) and
  `Crazy_Balls.sid` (2890 bytes, 1 subtune), both Michael Simon /
  Sharon Soundworks.
- **Disassembly**: `SIDdecompiler.exe -a12288 -z -d -c` (relocate to PSID
  load address `$3000`).
- **Reassembly**: `64tass.exe -a --cbm-prg`. Both files assembled cleanly
  (no warnings, no errors).
- **Tracing**: `sidm2-sid-trace.exe`, 50 frames, init=$3000, play=$3006.

### Results

| File             | Payload | Byte diff | Diffs | Diff range   | Trace (patched) |
|------------------|---------|-----------|-------|--------------|-----------------|
| Beat_Me.sid      | 4000    | 99.0750%  | 37    | $35B5-$3612  | Exact (291 writes) |
| Crazy_Balls.sid  | 2890    | 98.4429%  | 39    | $35B5-$3612  | Exact (351 writes) |

Both files differ ONLY in the working-storage region $35B5-$3612, which
SIDdecompiler's own `-v2` memory-touch map marks as `+`/`w` (runtime
read+write). This is a known SIDdecompiler artifact: the `.asm` output
captures post-execution snapshot values rather than the file's pristine
cold-initial bytes. Some of these bytes are load-bearing (read before first
write at cold start, e.g. voice 3 initial frequency/pulse-width state).

After manually patching all workspace bytes back to the original file's cold
values, both traces are register-write-identical to the original (zero
differences across all 50 frames).

### Honest scope / known gap

- **Byte level**: Not 100% without manual workspace patching — 37-39 bytes of
  runtime-variable workspace at $35B5-$3612 diverge depending on which tune
  the disassembler traced. The code and song-data regions are 100% exact.
- **Zero page**: Not yet characterized (disassembly shows the player stays
  entirely in the $3000-$3FFF range; no ZP access observed but not
  exhaustively confirmed).
- **Song data format**: Not reverse-engineered (order list, patterns,
  instruments, filter table encoding remain `TODO`).

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (scener, group, and 2
SID entries), and the existing harald-rosenfeldt card.
