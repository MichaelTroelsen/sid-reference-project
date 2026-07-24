# Mike/LSD

```json
{
  "id": "mike-lsd",
  "name": "Mike/LSD",
  "aliases": ["Mike/LSD"],
  "authors": ["Michael Vandenberg (Mike)"],
  "released": "1990 Lightning Soundtrack Development (LSD)",
  "status": "in-progress",
  "platform": "Native C64 in-house routine (Player-ID/SIDId classifies this as a distinct signature; DeepSID dump marks every file using it 'Normal built-in', i.e. embedded in the PRG rather than a separate replay). A 7-file PSID-header sample (see `entry` below) shows the load address itself varies per release ($7000/$8000/$9000/$C000 all observed) while init/play sit at fixed offsets from wherever it was loaded — consistent with a routine that was reassembled/relocated per tune from source rather than shipped as one fixed-address tool binary. No editor/tool binary or source repo was found to confirm a standalone program ever existed.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly; PSID load address varies per release (observed $7000, $8000, $9000, $C000×3 across a 7-file sample — see entry.init/entry.play sources) rather than one fixed player address, so there is no single load address to record",
    "zero_page": "TODO: no disassembly available",
    "layout": "TODO: no disassembly available"
  },
  "entry": {
    "init": "PSID header only, not disassembled — but confirmed consistent across a 7-file sample: init = load+$0006 in every case checked (Antifriction pt.2 $C000/init $C006, Schizofrenia $C000/init $C006, Zoolookologie_5 $C000/init $C006, Broken_Dreamz_1 $C000/init $C006, Animantix $9000/init $9006, Enigma $8000/init $8006, Taulabda_Delta $7000/init $7006). Absolute address is per-release, not fixed; the +$0006 offset is uniform. A/X/Y calling convention unknown (would need disassembly).",
    "play": "PSID header only, not disassembled — same 7-file sample shows play = load+$0003 in every case (e.g. $C000→play $C003, $9000→play $9003, $8000→play $8003, $7000→play $7003). Call rate/speed model unknown (would need disassembly)."
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly available",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Near-total single-composer concentration: of the 27 files in this dataset tagged 'Mike/LSD', all 27 are by the same HVSC composer, 'Mike' (data/composers/mike.json) — 27 of his 36 total files in the collection use this player, the rest presumably his own earlier/other routines. This is the textbook signal for a personal, in-house player routine rather than a published tool (cf. CLAUDE.md's Rob_Hubbard concentration note) — no other composer in the local dataset uses this tag.",
    "'LSD' here is 'Lightning Soundtrack Development', a music/scene group Mike (real name Michiel van den Berg, handles Mike / Michael Vandenberg / MB7447/TLD) was part of from 1990 onward (CSDb scener profile https://csdb.dk/scener/?id=26315) — it is not a separate development team credited with writing a generic tool; the 'LSD' in the tag most likely just names the group he released the tunes under, not a shared multi-author player.",
    "CSDb's own profile notes 'There are proofs that MB7447/TLD and Mike/LSD are the same person' — i.e. even CSDb treats 'Mike/LSD' primarily as an alias/credit for this one musician, reinforcing the personal-routine reading above.",
    "No CSDb release entry, no Codebase64 article, and no public source repo were found for this player under any spelling ('Mike/LSD', 'Lightning Soundtrack Development player') — treat as an undocumented/unreleased-as-a-tool in-house routine unless new evidence surfaces.",
    "PSID header cross-check across 7 of the 27 files (Antifriction pt.2, Broken_Dreamz_1, Schizofrenia, Zoolookologie_5, Animantix, Enigma, Taulabda_Delta) shows the load address itself is NOT fixed (seen at $7000, $8000, $9000, and $C000) but init is always exactly load+$0006 and play always exactly load+$0003 — a stable relative jump-table layout reused across releases spanning different load addresses. This is consistent with (and likely the underlying reason for) SIDId being able to fingerprint 'Mike/LSD' as one signature at all, and further supports the personal/hand-assembled-per-tune reading over a fixed-address shared tool.",
    "The same composer's other files use several unrelated players in the same period (SoundMonitor/MusicMaster_1, SoundMonitor/Digitronix, RoMuzak_V6.x, DUSAT/RockMon4 — see data/composers/mike.json), i.e. Mike also used off-the-shelf editors alongside his own 'Mike/LSD' routine rather than exclusively self-composing in it."
  ],
  "sources": [
    "Local dataset: sidid:Mike/LSD — data/sidid.json byTag['Mike/LSD'] = {author: 'Michael Vandenberg (Mike)', released: '1990 Lightning Soundtrack Development (LSD)'}, no reference/comment fields",
    "Upstream SIDId source, same entry verified verbatim: https://github.com/cadaver/sidid/blob/master/sidid.nfo ('Mike/LSD — AUTHOR: Michael Vandenberg (Mike) — RELEASED: 1990 Lightning Soundtrack Development (LSD)')",
    "knowledge/COVERAGE.md: 'Mike/LSD' ranked #18 uncarded family, 27 files, single raw tag 'Mike/LSD', no public-source flag",
    "data/composers/mike.json: composer 'Mike' (full_name Michiel van den Berg, CSDb scener id 26315, country Netherlands, active 1990) — 27 of 36 folder[] entries carry player: 'Mike/LSD'; re-counted directly against the file's own `folder[]` array, confirmed exactly 27",
    "CSDb scener profile: https://csdb.dk/scener/?id=26315 — handles Mike / Michael Vandenberg / MB7447/TLD; groups Magnetix (1989-), Future Technologics 2009 (1990-1991), Lightning Soundtrack Development (1990-); 'proofs that MB7447/TLD and Mike/LSD are the same person'",
    "CSDb SID entry PSID-header sample (load/init/play addresses only, no disassembly): https://csdb.dk/sid/?id=38927 (Animantix, $9000/$9006/$9003), https://csdb.dk/sid/?id=38924 (Enigma, $8000/$8006/$8003), https://csdb.dk/sid/?id=38925 (Taulabda Delta, $7000/$7006/$7003), https://csdb.dk/sid/?id=20697 (Antifriction pt.2, $C000/$C006/$C003), https://csdb.dk/sid/?id=20702 (Broken Dreamz 1, $C000/$C006/$C003), https://csdb.dk/sid/?id=20713 (Schizofrenia, $C000/$C006/$C003), https://csdb.dk/sid/?id=20719 (Zoolookologie 5, $C000/$C006/$C003) — all 6581/PAL"
  ]
}
```

## Overview

"Mike/LSD" is the Player-ID/SIDId signature name for a music player routine
credited to Michael Vandenberg ("Mike"), a Dutch musician active in the C64
scene from 1990, releasing under the group tag "LSD" (Lightning Soundtrack
Development). In this project's dataset it is an entirely single-composer
signature: all 27 files tagged "Mike/LSD" belong to the HVSC composer "Mike"
(`data/composers/mike.json`), out of his 36 total tunes — i.e. no other
composer in the collection uses this tag. Combined with finding no CSDb
release, Codebase64 article, or public source for it, the evidence points to
an in-house personal routine rather than a distributed editor/tool, similar in
kind (though far smaller in reach) to the "Rob_Hubbard" case noted in
`CLAUDE.md`. A 7-file PSID-header sample additionally shows a stable init =
load+$0006 / play = load+$0003 layout reused across releases loaded at four
different addresses ($7000/$8000/$9000/$C000), which is real (if shallow)
runtime evidence rather than pure identity/provenance — enough to move this
card from `stub` to `in-progress` — but no memory map, zero page, data format,
or effect encoding has been reverse-engineered.

## Quirks & gotchas

See the `quirks` array: the near-100% single-composer concentration, the
"LSD" group-vs-tool distinction, CSDb's own note equating "Mike/LSD" with the
same person under a different handle (MB7447/TLD), the absence of any public
source or documentation, the confirmed init/play relative-offset pattern
across differing load addresses, and the fact Mike also used unrelated
off-the-shelf editors (SoundMonitor variants, RoMuzak, DUSAT/RockMon4) for
other tunes in the same period.

## Disassembly notes

No disassembly performed. What is known is limited to PSID header metadata
(load/init/play addresses), read directly off 7 of the 27 "Mike/LSD"-tagged
CSDb SID entries, not from opening the binary: every sample has init at
load+$0006 and play at load+$0003, while the load address itself differs per
release. A future pass would need to pick a representative file, disassemble
the actual init/play code (not just the header), and trace it through
`sidm2-siddump` — the only route to a real memory map, zero-page usage, data
format, and effect encoding here, since there is no source to read.

## Verification

**Not verified — `status: in-progress`.** Identity/provenance facts (author,
release year/group, composer concentration) are confirmed from the local
SIDId cache (cross-checked against the upstream `sidid.nfo` on GitHub),
`data/composers/mike.json`, and Mike's CSDb scener profile. One genuine
runtime fact — the init/play offset pattern relative to a variable load
address — is confirmed across a 7-file CSDb PSID-header sample, which is why
this card was promoted above `stub`. No CSDb release entry, source repository,
or technical documentation for the routine's internals was found, so every
deeper Tier 3 field (memory map, zero page, speed, data format, effects)
stays `TODO` rather than guessed.

## Sources

See the `sources` array — the local SIDId cache and its verified upstream
GitHub source, `knowledge/COVERAGE.md`, `data/composers/mike.json` (re-counted
directly), Mike's CSDb scener profile, and 7 CSDb SID-entry PSID-header
checks (load/init/play addresses only — explicitly not a claim about
disassembled internals).
