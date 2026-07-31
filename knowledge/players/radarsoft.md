# Radarsoft

```json
{
  "id": "radarsoft",
  "name": "Radarsoft",
  "aliases": ["Radarsoft"],
  "authors": ["John Vanderaart", "Cees Kramer"],
  "released": "1984-1985 (Vanderaart left Radarsoft in 1986; the one 1994-tagged file is a scene rework of an old tune, not a new-era Radarsoft product)",
  "status": "stub",
  "platform": "Native C64 in-house music routine, embedded per-title in Radarsoft's own educational/game software. Not a standalone editor/tracker released to the scene.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per title — $2800 (Kruiswoord, CSDb 46509), $C000 (In den Beginne 29907 / Topografie Wereld 29904), $7006 (Anonimus 46576), $C590 (The Magic Stone 29908), $A800 (Kapriolen new edit 10990). No fixed player memory map; no disassembly done.",
    "zero_page": "TODO: no disassembly done",
    "layout": "TODO: no disassembly done"
  },
  "entry": {
    "init": "TODO: per-file PSID header only — $C0C0 (In den Beginne), $C000 (Topografie Wereld), $2803 (Kruiswoord), $7006 (Anonimus), $CCB6 (The Magic Stone), $AA85 (Kapriolen new edit). All per CSDb SID entry pages, not confirmed by disassembly.",
    "play": "TODO: per-file PSID header only — $C000 (In den Beginne), $C13A (Topografie Wereld), $2800 (Kruiswoord), $7128 (Anonimus), $CC00 (The Magic Stone), $AA9E (Kapriolen new edit). All per CSDb, same caveat."
  },
  "speed": "TODO: no disassembly done",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly done",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is NOT a released editor/tracker — no SIDId entry exists for the tag (checked data/sidid.json byTag, no match) and no CSDb group/release page for 'Radarsoft' as a music tool was found. It is a company house-style routine, used only in Radarsoft's own commercial titles by the company's co-founders.",
    "Radarsoft BV was a real Dutch software house (Alphen aan den Rijn, NL) founded 1984 by programmers John Vanderaart, Cees Kramer, Edwin Neuteboom and law student Leonardo Jacobs; it made C64/Amiga/Atari 8-bit/MSX/PC-DOS games and educational titles (topography quizzes, typing tutors) 1984-1987 before pivoting fully to educational software. Vanderaart left the company in 1986, concerned it had become too commercially driven (Wikipedia: en.wikipedia.org/wiki/Radarsoft and en.everybodywiki.com/John_Vanderaart).",
    "Composer concentration confirms the 'house routine' read: all 18 Radarsoft-tagged files in this dataset split between just 3 composers — John Vanderaart (12 files, 67%), Cees Kramer (5 files), and 'Deadman' (1 file, a 1994 '(new edit)' of 'Kapriolen' by Dennis Lindroos). Vanderaart and Kramer are two of Radarsoft's co-founders; the player was authored/used by the company's own programmers on their own games, not distributed as a public tool. Deadman's 1994 file has a completely different load address ($A800) from the Radarsoft-era files and the CSDb page (id 10990) makes no mention of Radarsoft — it was tagged 'Radarsoft' in the dataset purely by Player-ID fingerprinting of the embedded routine, suggesting Deadman reused the old in-game player code for a standalone music release.",
    "File titles match Radarsoft's known catalogue exactly (Topografie Nederland/Europa/Wereld, Verkeersrally, Kruiswoord, Maps 64 U.S.A.) — cross-checked against Wikipedia/c64-wiki/Lemon64 game listings, confirming these SIDs are the in-game music of Radarsoft's own educational titles.",
    "CSDb per-file SID-entry pages show wildly different load/init/play addresses across titles (load ranges from $2800 to $C590; init/play offsets relative to load are also inconsistent between files) — this is expected for code embedded per-game rather than a shared relocatable player, but it also means these per-file PSID header values must NOT be treated as one fixed player memory map without an actual disassembly.",
    "DISTINCT from the Jeroen Kimmel driver: Jeroen Kimmel ('Red', co-founder of The Judges) composed for Cees Kramer of Radarsoft on later titles (from ~1987), but his custom music driver evolved from Rob Hubbard's player (see knowledge/players/jeroen-kimmel.md, which has a confirmed derives_from rob-hubbard edge) — a completely separate player family tagged 'Jeroen_Kimmel' in the dataset (42 files), NOT part of the 'Radarsoft' family discussed here. The 'Radarsoft' tag covers the earlier (1984-1985) in-house routine by Vanderaart and Kramer themselves, predating Kimmel's involvement with the company.",
    "Re-research pass, 2026-07-31 (csdb_release gap): censused all 18 Radarsoft-tagged files' CSDb SID entries via the CSDb webservice (type=sid, ids 46576, 29903, 46575, 29905, 1434, 29906, 29907, 46574, 29908, 29910, 29904, 29911, 46509, 46506, 46508, 46507, 16658, 10990), reading each entry's `Released` field and full `UsedIn.Release` list to check for any CSDb release page representing the Radarsoft player/tool itself (as opposed to a game release id, the exact miscategorization to avoid). Every file's `Released` field reads '<year> Radarsoft' (the company name, not a tool release) except 'The Magic Stone' (id 29908: '1984 Radarsoft/Audiogenic' — Audiogenic Software was this game's UK publisher, csdb.dk/sid/?id=29908) and Deadman's 1994 rework (id 10990: 'Deadman', no Radarsoft mention, as already noted). Every `UsedIn` entry across all 18 files — 15 total across 8 files — is a scene-compiled music collection or one-file demo reusing the tune, e.g. 'Radarsoft Muziek' (csdb.dk/release/?id=200031, C64 Music, 1985), 'Theme Radar-Soft' (id=229398), 'Zone 7' (id=200028), 'Siddriver I' (id=42363), 'Synth Sample III'/'Synth Sample IV' compilations (ids 14755/124142/228268, 125549) — none of these is a release page for a music tool/player, so none can legitimately be mapped into `csdb_release`. This confirms `csdb_release: null` is correct: no CSDb tool/release entry exists for the Radarsoft player itself, and no game release id was substituted in its place. No SIDId `byTag` entry and no CSDb group page search were re-run in this pass (out of scope — the 2026-07-31 gap was specifically `csdb_release`, a release-namespace field)."
  ],
  "sources": [
    "Local dataset: 18 files tagged 'Radarsoft' across 3 composers (Cees Kramer 5, Deadman 1, John Vanderaart 12) — aggregated directly from data/composers/*.json",
    "Checked data/sidid.json byTag for a 'Radarsoft' entry — none found (no SIDId author/release/comment data for this tag)",
    "Checked data/players.json — no 'Radarsoft' entry (not one of DeepSID's curated 129 players)",
    "Radarsoft company history: https://en.wikipedia.org/wiki/Radarsoft",
    "Radarsoft company history: https://www.c64-wiki.com/wiki/Radarsoft",
    "John Vanderaart biography (Radarsoft co-founder, left 1986): https://en.everybodywiki.com/John_Vanderaart",
    "CSDb SID entry, 'In den Beginne' / John Vanderaart / 1984: https://csdb.dk/sid/?id=29907 ($C000/$C0C0/$C000)",
    "CSDb SID entry, 'Topografie Wereld' / John Vanderaart / 1984: https://csdb.dk/sid/?id=29904 ($C000/$C000/$C13A)",
    "CSDb SID entry, 'Kruiswoord' / Cees Kramer / 1985: https://csdb.dk/sid/?id=46509 ($2800/$2803/$2800)",
    "CSDb SID entry, 'Anonimus' / John Vanderaart / 1984: https://csdb.dk/sid/?id=46576 ($7006/$7006/$7128)",
    "CSDb SID entry, 'The Magic Stone' / John Vanderaart / 1984: https://csdb.dk/sid/?id=29908 ($C590/$CCB6/$CC00)",
    "CSDb SID entry, 'Kapriolen (new edit)' / Deadman / 1994: https://csdb.dk/sid/?id=10990 ($A800/$AA85/$AA9E — no Radarsoft mentioned on page; tag from Player-ID fingerprinting only)",
    "Topografie Wereld game background (Cees Kramer & John Vanderaart, Radarsoft, 1984): https://nl.wikipedia.org/wiki/Topografie_Wereld",
    "Jeroen Kimmel driver (separate family, distinct from Radarsoft tag): knowledge/players/jeroen-kimmel.md; VGMPF: https://www.vgmpf.com/Wiki/index.php?title=Jeroen_Kimmel",
    "CSDb webservice census (type=sid), 2026-07-31, all 18 Radarsoft-tagged files, for csdb_release verification: https://csdb.dk/webservice/?type=sid&id=<id> for ids 46576, 29903, 46575, 29905, 1434, 29906, 29907, 46574, 29908, 29910, 29904, 29911, 46509, 46506, 46508, 46507, 16658, 10990 — every file's UsedIn list is a scene music-collection/demo reuse (e.g. https://csdb.dk/release/?id=200031 'Radarsoft Muziek', https://csdb.dk/release/?id=229398 'Theme Radar-Soft'), never a tool/player release page, confirming csdb_release: null",
    "CSDb SID entry, 'The Magic Stone', id 29908 — Released field reads '1984 Radarsoft/Audiogenic': https://csdb.dk/sid/?id=29908"
  ]
}
```

## Overview

Radarsoft is not a published editor or tracker — it is the in-house music
routine used by the Dutch software house **Radarsoft BV** (Alphen aan den
Rijn, Netherlands, founded 1984) in its own C64 games and educational
software. In this dataset the tag covers 18 files split between just three
composers, two of whom (**John Vanderaart** and **Cees Kramer**) were
Radarsoft's own co-founders/programmers; the third ("Deadman") is a single
1994 "(new edit)" track by Dennis Lindroos, a scene-community rework that
happened to reuse the old in-game player code (confirmed: the CSDb page
makes no mention of Radarsoft — the tag was assigned purely by Player-ID
fingerprinting). The file titles line up exactly with Radarsoft's known
catalogue of geography/topography quiz games and other educational titles
(Topografie Nederland/Europa/Wereld, Verkeersrally, Kruiswoord). This is a
textbook small-composer-concentration case per the extraction template's
signal: a personal/company routine, not a widely distributed tool, and there
is no SIDId entry, no CSDb group page, and no public source for it.

John Vanderaart left Radarsoft in 1986, and most of the tagged files date
from 1984-1985. This player family is **completely distinct** from the
**Jeroen Kimmel** driver (42 files, tagged "Jeroen_Kimmel"), which was
used for later Radarsoft/Cees Kramer games from ~1987 onwards — Kimmel's
driver originated from Rob Hubbard's player and has its own knowledge card
(`knowledge/players/jeroen-kimmel.md`) with a confirmed `derives_from`
edge to Rob Hubbard.

## Quirks & gotchas

See the `quirks` array. The load-bearing points:

- **(1)** No SIDId or CSDb tool/group record exists for this tag, so identity
  comes entirely from matching the composer roster against Radarsoft's
  real-world company history.
- **(2)** Composer concentration (2 of 3 composers are Radarsoft co-founders;
  the third is a 1994 scene rework) strongly supports "in-house routine" over
  "published tool."
- **(3)** Per-file CSDb PSID header data (load/init/play) is wildly
  inconsistent across titles — confirmed now across 6 individual SID
  entries spanning $2800 to $C590 — so it must not be mistaken for one fixed
  player memory map. That would need an actual disassembly to confirm or
  refute.
- **(4)** Do not conflate this with Jeroen Kimmel's driver. Kimmel worked
  with Cees Kramer on later Radarsoft titles, but his driver (tagged
  "Jeroen_Kimmel") is Hubbard-derived and a separate family. The "Radarsoft"
  tag covers only the early Vanderaart/Kramer in-house routine.
- **(5)** The one Deadman file (Kapriolen new edit, 1994) is a decade
  younger than the rest — its CSDb page (id 10990) has no Radarsoft mention;
  the tag comes purely from the Player-ID fingerprint matching the embedded
  routine code.

## Disassembly notes

None performed. No public source or disassembly of a Radarsoft-tagged `.sid`
was found; only PSID header metadata (load/init/play addresses, data size)
visible per-file on individual CSDb SID-entry pages was consulted, and those
values disagree between titles (see quirks), so they are recorded as
per-file observations only, not as a card-level memory map. A future pass
could disassemble one representative file (e.g. "Topografie Wereld", CSDb
id 29904) and trace it through `sidm2-siddump` to establish real facts.

## Verification

**Not verified — `status: stub`.** Identity (authors, company history,
composer roster) is confirmed from Wikipedia, c64-wiki.com, and CSDb SID
entries. Every runtime field is `TODO`: no disassembly exists, and the
inconsistent per-file load/init/play addresses seen on CSDb argue against
guessing a shared layout.

## Sources

See the `sources` array — Wikipedia and c64-wiki.com for Radarsoft company
history, John Vanderaart's biography for his 1986 departure, individual CSDb
SID entries for the composer/release attribution and PSID header data of
specific tracks, and this project's own dataset (`data/composers/*.json`)
for file counts and composer concentration. No SIDId (`data/sidid.json`) or
curated DeepSID (`data/players.json`) entry exists for this tag. The Jeroen
Kimmel driver (`knowledge/players/jeroen-kimmel.md`, VGMPF) is documented
as a separate family with Hubbard lineage — not related to this card's
player. A 2026-07-31 pass censused all 18 tagged files' CSDb SID entries
via the CSDb webservice specifically to resolve the `csdb_release` gap:
every file's `UsedIn` release list contains only scene music-collection
compilations and one-file demos reusing the tune, never a release page for
a Radarsoft tool/player, confirming `csdb_release: null` rather than
mis-mapping a game/compilation release id into that field.
