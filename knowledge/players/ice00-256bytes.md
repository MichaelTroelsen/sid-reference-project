# 256bytes/Ice00 (player routine)

```json
{
  "id": "ice00-256bytes",
  "name": "256bytes/Ice00 (player routine)",
  "aliases": ["256bytes/Ice00"],
  "authors": ["Stefano Tognon (Ice00)"],
  "released": "2005-04-03 (Random Ninja, CSDb release id 17661) and 2006-02-25 (XL5, CSDb release id 28788, 2nd place at the 'Tiny Sid 2' C64 Music Competition, http://digilander.iol.it/ice00/tsid/tinysid2) — per CSDb SID/release entries for both locally-tagged files.",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Italian composer Stefano Tognon for size-limited demoscene competitions, following the same pattern as the already-carded knowledge/players/agemixer-256bytes.md.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256bytes' TAG NAME IS APPROXIMATE, NOT LITERALLY TRUE FOR BOTH FILES: 'Random Ninja' (data/composers/stefano-tognon.json, CSDb sid id 29481) has a CSDb-listed data size of 250 ($00FA) bytes — genuinely sub-256. 'XL5' (CSDb sid id 37940), despite CSDb's own release title being 'XL5 (256 bytes)', actually measures 263 ($0107) bytes — 7 bytes OVER the 256 threshold. Recorded exactly as found via direct CSDb lookup, not assumed from the tag or title string.",
    "csdb_release GAP RESEARCHED, LEFT null WITH REASON (not a research failure): this tag has no SIDId entry to supply a 'reference' release id, and — unlike a distributed tool — the two locally-tagged files are two unrelated one-off competition entries, each with its OWN original CSDb release, not one shared 'player' release: 'Random Ninja' -> release id 17661 (https://csdb.dk/release/?id=17661, 2005-04-03, C64 Music), 'XL5' -> release id 28788 (https://csdb.dk/release/?id=28788, 2006-02-25, C64 Music, 2nd place at the 'Tiny Sid 2' compo). Neither is 'the' release for the player family as a whole, so csdb_release correctly stays null rather than picking one arbitrarily.",
    "PUBLIC SOURCE ARCHIVES FOUND FOR BOTH FILES (not previously checked) — real .asm/DASM-syntax source, not just the compiled .sid: 'XL5' source zip (https://csdb.dk/getinternalfile.php/61876/xl5.zip, linked from release id 28788) contains 12 dated intermediate '.s' files plus the final 'xl5.s', with the author's own byte-count changelog in the header comment: 'step1: 309 bytes ... stepD: 256 bytes (move volume init, lost first note, but nop not needed)' followed by 'later fix: voice 3 was silent: fixed' — this is the author's own explanation for why the SHIPPED file measures 263 bytes rather than the 256 the source log reached: a post-256 bugfix for a silent voice pushed it back over. This resolves what the original pass on this card flagged as an unexplained discrepancy. 'Random Ninja' source zip (https://csdb.dk/getinternalfile.php/30730/RandomNinja.zip, linked from release id 17661) contains 'fn.s' plus a READ.ME in which the author explains the tune's SID chip (a 6581) physically died mid-testing ('the (new) 6581 SID chip I was using in the (new) C64 died after some seconds of use'), so it shipped without further hardware verification. No copyright/license statement was found in either archive (checked both 'xl5.s' and the READ.ME/comments) — treat as unlicensed/no explicit terms, not confirmed public domain.",
    "BOTH TUNES ARE COVERS/REMIXES, PER THE AUTHOR'S OWN SOURCE COMMENTS, NOT ORIGINAL COMPOSITIONS: 'Random Ninja' source header states 'This is a remix of the ending \"Last Ninja II - Central Park\" of Matt Grey in the remix version of Chris Holm'; 'XL5' source header states 'This is a cover of Jeff \"X-Large 5\"'. This concerns the MUSIC content, not the player routine's provenance — noted for completeness, not as a player-lineage edge.",
    "PSID HEADER VALUES (metadata only, not disassembly facts — per knowledge/EXTRACTION-TEMPLATE.md, kept out of the Tier 3 memory/entry fields): CSDb lists 'Random Ninja' as LoadAddr $0801 (2049), InitAddr $080D (2061), no distinct PlayAddr field returned, SID model 6581, PAL; 'XL5' as LoadAddr $4406 (17414) = InitAddr $4406 (17414), PlayAddr $4434 (17460), SID model 6581, PAL. Source: https://csdb.dk/webservice/?type=sid&id=29481 and https://csdb.dk/webservice/?type=sid&id=37940.",
    "GENUINE REUSE ACROSS MULTIPLE PRODUCTIONS: CSDb shows 'Random Ninja' reused in '512B4N2019' (2019, a 1K Intro by Excess) and 'PETSCII Ate My TinySID' (2005 Music Collection by Chrome and Ice Team); 'XL5' was reused in 'Raster Roller' (2021, The Solution) and 'You're Just My Type' (2011, Arise) — i.e. both of Ice00's own size-coded routines were picked up and reused by OTHER groups/composers in later size-capped productions, years after original release. This is why the tag earned a stub card rather than a SKIP, following the same 'real reused routine, not a one-off' bar set by the already-carded knowledge/players/agemixer-256bytes.md.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Ice00' — fingerprinted by this project's own Player-ID tooling only, same as the Agemixer sibling tag.",
    "Stefano Tognon (Ice00) is an Italian scener; no further biography beyond the CSDb credit lines was researched in this pass."
  ],
  "sources": [
    "Local dataset: data/composers/stefano-tognon.json — 2 files tagged '256bytes/Ice00' ('Random Ninja' csdb id 29481, 'XL5' csdb id 37940); see knowledge/COVERAGE.md row #90 (2 files)",
    "data/sidid.json: no entry for '256bytes/Ice00' (checked, absent)",
    "CSDb SID entry, 'Random Ninja': data size 250 ($00FA) bytes, LoadAddr $0801/InitAddr $080D, SID model 6581, original release id 17661 (2005-04-03), reused in '512B4N2019' (2019) and 'PETSCII Ate My TinySID' (2005): https://csdb.dk/sid/?id=29481 (queried via scripts/lib/csdb-client.js, type=sid)",
    "CSDb SID entry, 'XL5': data size 263 ($0107) bytes despite the '(256 bytes)' release title, LoadAddr/InitAddr $4406, PlayAddr $4434, SID model 6581, original release id 28788 (2006-02-25, 2nd place 'Tiny Sid 2' compo), reused in 'Raster Roller' (2021) and 'You're Just My Type' (2011): https://csdb.dk/sid/?id=37940 (queried via scripts/lib/csdb-client.js, type=sid)",
    "CSDb release entry 17661 ('Random Ninja', C64 Music, 2005-04-03) and 28788 ('XL5', C64 Music, 2006-02-25, event 'Tiny Sid 2 C64 Music Competition'): https://csdb.dk/release/?id=17661 and https://csdb.dk/release/?id=28788",
    "Public source archive, 'XL5' (linked from release id 28788): 17 files including 12 dated intermediate .s files and the final xl5.s with the author's own byte-count changelog and the 'voice 3 was silent: fixed' note explaining the 256->263 byte discrepancy: https://csdb.dk/getinternalfile.php/61876/xl5.zip",
    "Public source archive, 'Random Ninja' (linked from release id 17661): fn.s + READ.ME, in which the author states the 6581 SID chip used for testing physically died mid-development: https://csdb.dk/getinternalfile.php/30730/RandomNinja.zip",
    "knowledge/players/agemixer-256bytes.md (status: stub) — sibling card establishing the same 'real reused routine' evaluation criterion for '256bytes/*' tags; cited for methodology, not edited"
  ]
}
```

## Overview

`256bytes/Ice00` is Italian composer **Stefano Tognon**'s ("Ice00") own
size-constrained player+data routine, in the same "256bytes/*" tag family as
the already-carded `256bytes/Agemixer` (`knowledge/players/agemixer-256bytes.md`).
Unlike that sibling, the "256 bytes" claim is only exactly true for one of the
two locally-tagged files — "Random Ninja" measures 250 bytes, but "XL5"
measures 263 bytes despite CSDb's own release title calling it "XL5 (256
bytes)". Both routines were genuinely reused by other groups in later
size-capped demoscene productions years after their original release, which
is why this earned a stub card rather than a SKIP. Public source archives
exist for both files (linked from their own CSDb release pages, not a SIDId
reference) — the "XL5" archive's own changelog comments explain the
previously-unexplained 256-vs-263-byte discrepancy: the author reached 256
bytes, then fixed a silent-voice bug afterward, pushing the shipped file to
263. Both tunes are also covers/remixes of other artists' work per the
author's own source comments, not original compositions — a fact about the
music, not the player routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "256 bytes" label is not uniformly
accurate (XL5 is 263 bytes, now explained by a post-256-byte bugfix found in
the author's own source archive) — recorded exactly as measured via CSDb, not
smoothed over; both files show confirmed reuse by unrelated later
productions, meeting this project's bar for a real (if tiny) routine; and the
recorded `csdb_release` gap is resolved as an intentional `null` (two
unrelated per-tune releases exist, no single "player" release to point at),
not an unresearched blank.

## Disassembly notes

None performed by this pass. **Updated:** public DASM-syntax `.s` source WAS
located this pass for both files (see `quirks`/`sources` — the CSDb release
download zips, not a dedicated GitHub/source-hosting repo), so a future pass
could read/assemble it directly rather than disassembling the `.sid`. All
Tier 3 fields remain `TODO` deliberately — reading source and confirming it
via reassembly/trace is Tier 3 work, out of scope for this Tier 1/2 pass. A
~250-263 byte SID would be an unusually small and tractable future target,
as already noted for the Agemixer sibling.

## Verification

**Not verified — `status: stub`.** Only identity/usage and provenance facts
are established: local composer data, two CSDb SID-entry lookups, two CSDb
release-entry lookups, and two public source-archive downloads (read for
header comments/README only, not disassembled or reassembled). No SIDId
entry exists for this tag.

## Sources

See the `sources` array — local composer-file aggregation, two CSDb SID
entries, two CSDb release entries, two public source-archive downloads
(linked from those release pages), and the sibling `agemixer-256bytes.md`
card (cited, not edited).
