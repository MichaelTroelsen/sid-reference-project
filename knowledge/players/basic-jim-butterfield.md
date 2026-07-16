# Basic/Jim Butterfield

```json
{
  "id": "basic-jim-butterfield",
  "name": "Basic/Jim Butterfield",
  "aliases": ["Basic/Jim_Butterfield"],
  "authors": ["Jim Butterfield"],
  "released": "TODO: exact year of first publication not confirmed (Jim Butterfield's Canada/Commodore work runs 1977-2007); the routine circulated on Commodore 1541 test/demo disks in the early-1980s C64 era",
  "status": "stub",
  "platform": "NOT a software tool/editor at all — a hand-typed BASIC V2 program pattern (three-voice tune playback via direct POKEs to the SID's three voice base addresses, 54272/54279/54286 = $D400/$D407/$D40E) that Player-ID fingerprints by matching literal tokenized-BASIC bytes in the file, not a machine-code replay routine. Distinct from the much larger generic 'Basic_Program' catch-all tag in this dataset (234 files) — that tag matches OTHER/unidentified BASIC music code; this one specifically matches Butterfield's own statement structure.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no fixed load address — each file is its own standalone BASIC program (typically loads at BASIC start $0801, but not independently confirmed here)",
    "zero_page": "N/A — this is BASIC-interpreter-driven, not a machine-code play routine; no ZP usage to document",
    "layout": "Player-ID's own signature confirms the recognizable structure: three variables (L1/L2/L3) are assigned the three SID voice base addresses 54272/54279/54286, then note data drives POKEs offset from those bases (see quirks — signature bytes quoted from the player-id source)."
  },
  "entry": {
    "init": "N/A in the traditional sense — a BASIC program is RUN, not called via a machine-code init vector. TODO: how HVSC/PSID-wrapped copies of these files invoke the BASIC interpreter (small machine-code stub vs. keyboard-buffer RUN injection) is not confirmed here.",
    "play": "TODO — BASIC interpreter loop timing, not a fixed play address."
  },
  "speed": "TODO: BASIC-interpreter-paced (no CIA/raster IRQ player); exact tempo encoding not confirmed. Per description of the routine (see sources), the first value in each DATA line sets tempo.",

  "data_format": {
    "order_list": "N/A — no order list in the tracker sense; a single BASIC program with inline DATA statements.",
    "patterns": "TODO: DATA lines reportedly hold 7 values per line — a tempo value plus note-frequency values for 3 voices (unverified beyond the secondary source cited).",
    "instruments": "N/A observed — no separate instrument table; per-voice waveform/ADSR are presumably fixed POKEs in the listing (not confirmed here).",
    "wavetable": "N/A",
    "pulsetable": "N/A",
    "filtertable": "TODO: not confirmed whether the routine touches the filter at all."
  },
  "effects": {
    "encoding": "N/A — plain BASIC POKE sequence, no command/effect byte encoding.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SPECIFICALLY NOT the 'Basic_Program' tag (234 uncarded files, rank #1 in knowledge/COVERAGE.md) — that is a separate, generic catch-all raw tag for unidentified BASIC music code. 'Basic/Jim_Butterfield' (30 files, rank #14) is Player-ID's fingerprint for one particular, recognizable BASIC statement pattern credited to Jim Butterfield specifically. Do not conflate the two families or assume this card resolves the larger one.",
    "The Player-ID signature is literal tokenized-BASIC bytes, not machine code — confirmed by downloading WilfredC64/player-id's own config (`config/sidid.cfg`, GitHub, fetched via `gh api repos/WilfredC64/player-id/contents/config/sidid.cfg`): the 'Basic/Jim_Butterfield' entry is `4C 31 B2 35 34 32 37 32 3A 4C 32 B2 35 34 32 37 39 3A 4C 33 B2 35 34 32 38 36 00 && 31 B2 4C 31 AA 34 3A ?? 32 B2 4C 32 AA 34 3A ?? 33 B2 4C 33 AA 34 00` — tokenized ASCII for `L1=54272:L2=54279:L3=54286:` followed by `1=L1+4:...2=L2+4:...3=L3+4...`. 54272/54279/54286 ($D400/$D407/$D40E) are exactly the three SID voice base addresses, one variable per voice — matching the technique described for Butterfield's routine (see sources): base-address-per-voice instead of a single SID base + per-voice offset, unusual among BASIC music listings of the era.",
    "COMPOSER CONCENTRATION IS THE OPPOSITE OF WHAT THE NAME SUGGESTS: only 4 of 30 files (13%) in this dataset are actually authored by Jim Butterfield himself (data/composers/jim-butterfield.json: Happy Birthday, Lincolnshire, M3 Dixie, M4 Yankee). Wayne Pace alone accounts for 16/30 (53%) — he reused Butterfield's published listing pattern to arrange his own classical/pop tunes, not files Butterfield wrote. The remaining files are spread across Harry Metz (2), R. Keays (3), Markus Müller/Superbrain (2), Sonki (2), and Dente Arturo (1). This is the signature of a widely-copied PUBLISHED BASIC LISTING, not a personal routine or an authored tool — closer in kind to a magazine type-in pattern than to a tracker.",
    "The reuse spans four decades: Jim Butterfield's own files date to the early C64 era (HVSC composer profile 'active: 1984'; he died in 2007), yet Dente Arturo's 'Arkadenoid_BASIC.sid' (data/composers/dente-arturo.json, composer profile 'active: 2024') and Sonki's two BASIC files (composer profile 'active: 2024') carry the identical Player-ID signature — someone was still typing in or copy-pasting this exact 1980s BASIC pattern in 2024.",
    "'M4 Yankee' (in Jim Butterfield's own file set here) plays 'Yankee Doodle' and is independently corroborated on YouTube as 'M4 Yankee - Jim Butterfield - (1982)' — consistent with this routine's origin as a Commodore-distributed demo/type-in from the early 1980s (see sources). A secondary source (retro64.altervista.org, via search-engine summary — direct fetch failed, DNS unreachable at research time) describes the technique as one of the shortest/most elegant 3-voice BASIC C64 music routines, using three SID base-address variables (matching the Player-ID signature above) and DATA lines of 7 values (tempo + 3 voices' note data) read while the tune plays.",
    "No entry exists for this tag in the SIDId database (checked github.com/cadaver/sidid's sidid.nfo directly for 'Jim_Butterfield'/'Butterfield'/'Basic' — none found), unlike most families already carded here — so no `sidid` author/comment/reference citation was available; author/dates instead come from HVSC's cached composer profile and general web biography."
  ],
  "sources": [
    "Local dataset: 30 files across 7 composers (Jim Butterfield, Wayne Pace, Harry Metz, R. Keays, Markus Müller, Sonki, Dente Arturo) — see knowledge/COVERAGE.md rank #14 and data/composers/*.json",
    "Player-ID signature bytes (definitive for WHAT is matched, not WHO wrote it): https://github.com/WilfredC64/player-id, config/sidid.cfg, entry 'Basic/Jim_Butterfield'",
    "Jim Butterfield composer profile/dates (1936-02-14 to 2007-06-29, Canada, Commodore affiliation): data/composers/jim-butterfield.json (deepsid-dump/HVSC snapshot)",
    "C64-Wiki, Jim Butterfield page (mentions 'Commodore 64 Music: Happy Birthday by Jim B.', matching the 'Happy_Birthday_BASIC.sid' file in this dataset): https://www.c64-wiki.com/wiki/Jim_Butterfield",
    "YouTube upload corroborating 'M4 Yankee' as a Jim Butterfield C64 chiptune, dated 1982: https://www.youtube.com/watch?v=1To9WnBOMdQ",
    "Secondary technical description of the routine (three SID base-address variables, DATA-line format) — retro64.altervista.org 'Commodore 64 SID music programming with BASIC – playing a simple three voices tune' (URL cited, but direct fetch failed at research time — DNS unreachable; description taken from a search-engine content summary, treat as lower-confidence than the primary Player-ID/HVSC sources above): https://retro64.altervista.org/blog/commodore-64-sid-music-programming-with-basic-playing-a-simple-three-voices-tune/",
    "Checked and NOT found: no entry for this tag in github.com/cadaver/sidid's sidid.nfo (SIDId database)"
  ]
}
```

## Overview

`Basic/Jim_Butterfield` is a Player-ID signature for a specific, recognizable
BASIC V2 program pattern — not a tracker, not a machine-code replay routine.
It matches the literal tokenized-BASIC bytes of a three-voice SID music
technique (one variable per SID voice base address: `L1=54272`, `L2=54279`,
`L3=54286`) associated with Jim Butterfield, the well-known Canadian
Commodore author/educator (1936-2007). Only 4 of the 30 files carrying this
tag in the local dataset are actually his own; the rest (led by Wayne Pace,
53%) are other hobbyists reusing the same published BASIC pattern to arrange
their own tunes, across a span from 1984 to as recently as 2024. It is
explicitly **not** the same as the much larger, generic `Basic_Program`
catch-all tag (234 uncarded files) — see the special note in `quirks`.

## Quirks & gotchas

See the `quirks` array — load-bearing points: (1) this is a BASIC-token
Player-ID signature, not a machine-code fingerprint, confirmed directly from
`WilfredC64/player-id`'s own config source; (2) composer concentration runs
opposite to what the tag name implies — most matching files are NOT by Jim
Butterfield; (3) the pattern was still being reused 40 years later (2024
files); (4) no SIDId database entry exists for this tag, unusual among
families already carded here.

## Disassembly notes

None, and largely inapplicable — there is no machine-code play routine to
disassemble. What "internals" exist are BASIC statements, partially visible
through the Player-ID match bytes themselves (quoted above) — those bytes are
the extent of the structural detail confirmed here. A future pass could load
one of the smaller files (e.g. Jim Butterfield's own `M4 Yankee`) into an
emulator/BASIC lister to transcribe the exact program text and DATA layout;
not done in this stub.

## Verification

**Not verified — `status: stub`, and intentionally so: no runtime facts to
verify.** This is Tier 1 (local dataset) + Tier 2 (provenance/web research)
only, as instructed. All memory/entry/speed/data-format/effects fields are
honestly `TODO` or `N/A` — there is no init/play address to reassemble or
trace, since the "player" is a BASIC program run by the interpreter, not a
machine-code routine with a PSID-style entry point.

## Sources

See the `sources` array — primary confirmation is the Player-ID project's own
signature-byte source (GitHub), cross-checked against the local dataset's
cached HVSC composer profile for Jim Butterfield and general web biography.
The one secondary source (retro64.altervista.org) could not be directly
re-fetched at research time (DNS failure) and is flagged lower-confidence.
