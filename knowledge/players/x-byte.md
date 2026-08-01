# X-Byte

```json
{
  "id": "x-byte",
  "name": "X-Byte",
  "aliases": ["X-Byte"],
  "authors": ["Patrick Schildkamp (X-Byte)"],
  "released": "TODO: no dedicated tool/release date exists — earliest (and only) attested date is 1993 for both census files ('Doolittle (part 5)' CSDb sid id 37825, 'No.13 Baby (part 3)' CSDb sid id 40004; each SID entry's own Released field reads '1993 Focus')",
  "status": "stub",
  "platform": "Native C64, embedded/personal player routine — not a distributable editor/tool. Confirmed via full census (2/2 tagged files) plus a CSDb scener search (csdb.dk/scener/?id=1191, depth=2): the two files' PSID load addresses differ ($C000 for Doolittle part 5, $4800 for No.13 Baby part 3), consistent with hand-linking per demo rather than a fixed-address distributable tool; and none of the 24 releases in X-Byte's CSDb Credits/Released lists is a player/editor tool named 'X-Byte'.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's sidid.nfo has NO entry for 'X-Byte' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: both locally tagged files ('Doolittle (part 5)', 'No.13 Baby (part 3)') belong to X-Byte himself (data/composers/x-byte.json); a third file by the same composer ('No.13 Baby (intro)') carries no player tag.",
    "Composer profile: Patrick Schildkamp, handle X-Byte, Netherlands, died 2020-10-07, CSDb scener id 1191 (data/composers/x-byte.json).",
    "Census (2/2 tagged files, via CSDb webservice type=sid): 'Doolittle (part 5)' (id 37825) is Load/Init $C000, Play $C003, DataSize 1614, PAL, part of the demo 'Doolittle!' (release id 77, 1993-06-27, Entropy Party, 1st place C64 Demo compo) where X-Byte is credited Code+Music+Graphics. 'No.13 Baby (part 3)' (id 40004) is Load/Init $4800, Play $4815, DataSize 1024, PAL, part of the one-file demo 'No.13 Baby' (release id 54, 1993) where X-Byte is credited only Music (no Code credit) — so authorship of that demo's copy of the routine is not confirmed to be X-Byte's own.",
    "Differing load addresses between the two census files ($C000 vs $4800) indicate the routine is hand-linked per demo rather than distributed as a fixed-address tool.",
    "No CSDb release entry named 'X-Byte' exists as a player/editor tool: checked the full CSDb scener record (csdb.dk/scener/?id=1191, depth=2) — all 24 listed Credits/Released releases are demos/intros/diskmags, none is a tool release.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'X-Byte': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/x-byte.json (profile: full_name Patrick Schildkamp, handles X-Byte, country Netherlands, date_death 2020-10-07, csdb_id 1191, csdb_type scener)",
    "Local dataset: 2 files tagged X-Byte, single composer (see knowledge/COVERAGE.md)",
    "CSDb webservice, type=sid, id=37825 (Doolittle (part 5)): https://csdb.dk/sid/?id=37825 — Released '1993 Focus', LoadAddr 49152, InitAddr 49152, PlayAddr 49155, UsedIn release https://csdb.dk/release/?id=77",
    "CSDb webservice, type=sid, id=40004 (No.13 Baby (part 3)): https://csdb.dk/sid/?id=40004 — Released '1993 Focus', LoadAddr 18432, InitAddr 18432, PlayAddr 18453",
    "CSDb webservice, type=scener, id=1191, depth=2: https://csdb.dk/scener/?id=1191 — full Credits/Released list checked (24 releases), none is a player/editor tool named 'X-Byte'; freelance functions list 'Coder' among X-Byte's roles; Focus group membership 1991-05 to 2020-10-09"
  ]
}
```

## Overview

X-Byte is the Player-ID tag for a small, native-C64, embedded (not
distributed) replay routine used exclusively by its namesake composer,
**Patrick Schildkamp**, handle **X-Byte** (Netherlands, d. 2020), a member of
the demo group Focus (1991-2020). Both locally tagged files are his own and
both are attested to 1993 by their own CSDb SID entries; there is no separate
tool-release date, since no CSDb release page for a player/editor named
"X-Byte" exists among his 24 credited releases. SIDId has no entry for this
tag, consistent with a personal, never-packaged routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this tag; (3) no dedicated CSDb tool/release page
was found among the full 24-release Credits/Released list on X-Byte's CSDb
scener record; (4) the two census files have different PSID load addresses
($C000, $4800), consistent with a hand-linked personal routine rather than a
fixed-address distributable tool; (5) X-Byte is Code-credited on the demo
containing one census file (Doolittle!) but only Music-credited on the demo
containing the other (No.13 Baby), so routine authorship is confirmed for
neither file by credits alone.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/x-byte.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer profile.
