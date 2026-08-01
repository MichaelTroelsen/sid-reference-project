# 256bytes/Tape (player routine)

```json
{
  "id": "tape-256bytes",
  "name": "256bytes/Tape (player routine)",
  "aliases": ["256bytes/Tape"],
  "authors": ["Tapio Viitanen (Tape)"],
  "released": "2005-04-11 — CSDb release id 18065, 'Imperial March' (group Extend), 6th place in the 'C64 Music' compo at the 'Tiny Sid C64 Music Competition' (CSDb event id 850, organized by Stefano Tognon/Ice00, Italy, running 2005-01-15 to 2005-05-08 — the SAME event as the sibling knowledge/players/agemixer-256bytes.md, knowledge/players/ice00-256bytes.md, and knowledge/players/frantic-256bytes.md cards). CSDb's own SID-entry 'Released' field independently states '2005 Extend', consistent. Reused in 'PETSCII Ate My TinySID' (2005-06-11, C64 Music Collection, group Chrome and Ice Team). Source: https://csdb.dk/release/?id=18065 and https://csdb.dk/webservice/?type=sid&id=369 (queried via scripts/lib/csdb-client.js).",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 hand-coded routine + data written by Finnish scener Tapio Viitanen (Tape) as a competition entry ('Imperial March', 6th place in the 'C64 Music' compo) at Ice00's 'Tiny Sid C64 Music Competition' (2005, CSDb event id 850) — the SAME event as the already-carded knowledge/players/agemixer-256bytes.md, knowledge/players/ice00-256bytes.md, and knowledge/players/frantic-256bytes.md siblings. The release's own download archive (https://csdb.dk/getinternalfile.php/30927/Imperial_March.zip, checked directly: contains only 'imperial march.prg' and 'Imperial_March.sid') has NO readme or author note, unlike the Frantic sibling's entry at the same event — so no shared-startup-code or lineage statement was found for this file, and no `shares_routine_with`/`derives_from` edge is asserted.",
  "csdb_release": 18065,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256bytes' TAG NAME IS LITERALLY, MEASURABLY TRUE: the sole locally-tagged file, 'Imperial March' (data/composers/tape.json, CSDb sid id 369), has a CSDb-listed data size of exactly 246 ($00F6) bytes — confirmed via direct CSDb lookup, not inferred from the tag name.",
    "ONLY 1 LOCALLY-TAGGED FILE, BUT CONFIRMED REUSE ACROSS SEPARATE RELEASES: CSDb's listing shows this same SID used in at least two distinct productions — the standalone 'Imperial March' (CSDb release id 18065, 2005-04-11 C64 Music compo entry) and the compilation/collection 'PETSCII Ate My TinySID' (release id 18202, 2005-06-11, group Chrome and Ice Team) — meeting the same 'real reused routine, not a one-off' bar used for the sibling 256bytes/Agemixer and 256bytes/Ice00 cards, despite the single-file local tag count.",
    "SAME COMPETITION EVENT AS THREE OTHER '256bytes/*' SIBLING CARDS, BUT NO EVIDENCE OF A SHARED ROUTINE: CSDb confirms 'Imperial March' was entered into the SAME event (id 850, 'Tiny Sid C64 Music Competition', Ice00/Stefano Tognon, Italy) as the Agemixer, Ice00, and Frantic sibling tags, placing 6th in the 'C64 Music' compo. Unlike Frantic's entry at that same event — which had an author's readme in its release zip explicitly crediting a shared $0326 startup-code trick with fellow competitor Alih — this file's own release-18065 download archive (https://csdb.dk/getinternalfile.php/30927/Imperial_March.zip, fetched and unzipped directly) contains only the .prg and .sid, no readme or any text documenting shared code. Checked specifically for this pattern and found absent — no `shares_routine_with` edge is asserted for this card.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Tape' — fingerprinted by this project's own Player-ID tooling only.",
    "The composer's handle 'Tape' (Tapio Viitanen, Finnish) appears to be coincidental with the general concept of cassette tape storage — not a claim about the routine's storage medium; recorded exactly as the local composer folder names it."
  ],
  "sources": [
    "Local dataset: data/composers/tape.json — 1 file tagged '256bytes/Tape' ('Imperial March', csdb id 369); see knowledge/COVERAGE.md row #129 (1 file)",
    "data/sidid.json: no entry for '256bytes/Tape' (checked, absent)",
    "CSDb SID entry 369, 'Imperial March': author Tapio Viitanen (Tape), Released field '2005 Extend', load/init addr 2057 ($0809), data size 246 ($00F6) bytes, used in release id 18065 ('Imperial March', 2005-04-11, 6th place 'C64 Music' compo, event id 850) and release id 18202 ('PETSCII Ate My TinySID', 2005-06-11 Music Collection, group Chrome and Ice Team): https://csdb.dk/webservice/?type=sid&id=369 (queried via scripts/lib/csdb-client.js)",
    "CSDb release entry 18065, 'Imperial March': released 2005-04-11, type 'C64 Music', 6th place in the 'C64 Music' compo at event id 850: https://csdb.dk/webservice/?type=release&id=18065 (queried via scripts/lib/csdb-client.js)",
    "CSDb event entry 850, 'Tiny Sid C64 Music Competition': organized by Stefano Tognon (Ice00), Italy, 2005-01-15 to 2005-05-08 — the same event as the Agemixer, Ice00, and Frantic sibling cards: https://csdb.dk/webservice/?type=event&id=850",
    "CSDb release-18065 download zip 'Imperial_March.zip' (https://csdb.dk/getinternalfile.php/30927/Imperial_March.zip): fetched and unzipped directly — contains only 'imperial march.prg' (256 bytes) and 'Imperial_March.sid' (380 bytes), no readme or author note (checked specifically for a Frantic-style shared-code statement; none found)",
    "knowledge/players/agemixer-256bytes.md, knowledge/players/ice00-256bytes.md, and knowledge/players/frantic-256bytes.md (status: stub) — sibling cards establishing the same evaluation criteria for '256bytes/*' tags and the shared event id 850; cited for methodology, not edited"
  ]
}
```

## Overview

`256bytes/Tape` is Finnish composer **Tapio Viitanen**'s ("Tape") own
size-constrained player+data routine, in the same "256bytes/*" tag family as
the already-carded `256bytes/Agemixer`, `256bytes/Ice00`, and
`256bytes/Frantic`. Its single tagged file, "Imperial March," was entered
2005-04-11 (CSDb release id 18065) into the "C64 Music" compo of Ice00's "Tiny
Sid C64 Music Competition" (CSDb event id 850) — the SAME event as all three
carded siblings — placing 6th. CSDb confirms the exact "256 bytes" claim (246
bytes measured) and shows the same SID reused in a separate, later compilation
("PETSCII Ate My TinySID," 2005-06-11) — meeting this project's bar for a
real, reused routine rather than a size-category label with no substance.
Unlike the Frantic sibling, whose release archive's own readme documented a
shared startup-code trick with a fellow competitor, this file's release
archive contains no readme at all — checked directly, so no lineage edge is
asserted.

## Quirks & gotchas

See the `quirks` array. Load-bearing: despite being a single-file local tag,
CSDb-confirmed reuse in a second, independent release justified a stub card
over a SKIP, per the precedent set by the sibling `256bytes/*` cards; and
`csdb_release` is now resolved to 18065 (the file's own unambiguous original
competition entry), sharing event id 850 with the Agemixer/Ice00/Frantic
siblings, but with no evidence of a shared routine (the release archive has
no readme, unlike Frantic's).

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located. A 246-byte SID would be an unusually small and
tractable future disassembly target.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data, one CSDb SID-entry lookup, one CSDb release-entry
lookup, one CSDb event-entry lookup, and a direct fetch of the release's own
download archive. No SIDId entry exists for this tag.

## Sources

See the `sources` array — local composer-file aggregation, one CSDb SID
entry, one CSDb release entry, one CSDb event entry, one directly-fetched
release download zip, and the sibling `256bytes/*` cards (cited, not edited).
