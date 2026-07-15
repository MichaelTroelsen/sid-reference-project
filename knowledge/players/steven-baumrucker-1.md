# Steven Baumrucker (early driver, arcade/educational)

```json
{
  "id": "steven-baumrucker-1",
  "name": "Steven Baumrucker (early driver, arcade/educational)",
  "aliases": ["Steven_Baumrucker_1"],
  "authors": ["Steven Baumrucker"],
  "released": "1983-1984 (Screenplay era)",
  "status": "in-progress",
  "platform": "American musician Steven Baumrucker's own playroutine, the first of two driver versions in this KB — used for Screenplay's arcade-action and educational titles. A second, uncarded-until-this-batch [[steven-baumrucker-2]] covers his RPG-genre scoring for the same publisher. Now generally believed (per an external classic-game-programmers list) to be the same Steven Baumrucker who became a physician. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Pogo Joe, 1983, Screenplay): load $9200 (init $a050, play $a0c0).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a050.", "play": "Sample trace: $a0c0 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 3 filter writes in a sparse 21-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL for this composer — a bare 'Baumrucker, Steven' entry, no country, no group, the same sparse-entry pattern already seen for [[paul-mudra]].",
    "A LIKELY REAL-WORLD IDENTITY WAS FOUND, EXPLICITLY FLAGGED AS PLAUSIBLE-NOT-CONFIRMED: 'The Giant List of Classic Game Programmers' lists him explicitly as 'Baumrucker, Steven, MD' crediting all 7 of his known titles (across both this tag and [[steven-baumrucker-2]]) to Screenplay. Many independent medical-profile pages corroborate a real physician named Steven Baumrucker (hospice/palliative medicine). The game-credit-to-physician link rests on the Giant List alone — plausible, but NOT cross-confirmed by a second gaming-specific source, and explicitly reported as such rather than asserted as fact.",
    "THREE CONFIRMED TITLES: Pogo Joe (1983, Screenplay, the traced file — a real, fairly well-known Q*bert-style game, also released on Atari 8-bit; full Lemon64 credits: concept David Handel, programming Oliver Steele & William F. Denman Jr., graphics Michael Haire, MUSIC/SOUND Steven Baumrucker, 'level designer and sound/music director,' music built on J.S. Bach themes), Playful Professor - Math Tutor (1984, Screenplay, an educational math/logic title), and The Trivia Arcade (Screenplay, co-credited with Randall Masteller — DATES CONFLICT ACROSS SOURCES, 1984 per the Giant List vs. a 1987 Internet Archive label, likely a later re-release/repackage rather than the true original date — EXPLICITLY LEFT UNRESOLVED).",
    "THE HYPOTHESIZED PUBLISHER/EMPLOYER SPLIT BETWEEN THIS TAG AND [[steven-baumrucker-2]] IS NOT CONFIRMED, and likely disproven: ALL SEVEN titles across both tags are Screenplay releases — there is no distinct second publisher explaining two driver versions. The more plausible explanation (genuinely inference, NOT sourced by any interview or credits page) is a genre/era split within the same company — arcade-action music here vs. RPG dungeon-crawler music on the sibling tag — drawn only from the trace metrics themselves (this tag's sparser, differently-voiced 21-write/50-frame sample vs. the sibling's own denser trace), not stated by any external source.",
    "NO EVIDENCE HE WAS A CODER — every source (Lemon64, Wikipedia, the Giant List) credits him strictly as musician/sound designer; programming on all titles is credited to others (Oliver Steele, William F. Denman Jr., and on The Trivia Arcade, co-composer Randall Masteller may also have had a design role, not fully itemized).",
    "NO CSDb SCENER PROFILE EXISTS — consistent with a purely US commercial/educational-software composer with zero European demoscene footprint, the same absence pattern already established for [[al-lowe]] and [[paul-mudra]].",
    "Not confirmed in SIDId (no entry for this tag). Direct, confirmed relationship to [[steven-baumrucker-2]] (same composer, companion tag/possible driver split — this same batch). No sourced connection found to [[al-lowe]], [[paul-mudra]], [[ed-bogas-accolade]]/[[ed-bogas-hakansson]], or [[rick-cardinali]] despite categorical similarity (all US commercial/educational-software-era composers with no CSDb presence) — explicitly checked, different companies (Sierra, Westwood, Accolade/Håkansson, and Baumrucker's own Screenplay respectively), no shared driver/collaborator/company link found."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Baumrucker, Steven' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "The Giant List of Classic Game Programmers ('Baumrucker, Steven, MD'): http://ifarchive.ifreviews.org/if-archive/info/classic-game-programmers.list",
    "Wikipedia — Pogo Joe: https://en.wikipedia.org/wiki/Pogo_Joe",
    "Lemon64 — Pogo Joe (full credits, traced file): https://www.lemon64.com/game/pogo-joe",
    "Lemon64 — Playful Professor - Math Tutor: https://www.lemon64.com/game/playful-professor-math-tutor",
    "CSDb release id=77261 (Playful Professor - Math Tutor): https://csdb.dk/release/?id=77261",
    "Internet Archive — The Trivia Arcade (labeled 1987, likely a re-release): https://archive.org/details/Trivia_Arcade_The_1987_Screenplay",
    "Existing KB card: knowledge/players/steven-baumrucker-2.md (the companion driver, this same batch)",
    "Local dataset: 3 files tagged Steven_Baumrucker_1, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steven_Baumrucker_1` tag is American musician Steven Baumrucker's
own playroutine, used for Screenplay's arcade-action and educational
titles — the first of two driver versions in this composer's output.
Plausibly the same person who later became a physician, per an external
classic-game-programmers list. Player-ID-fingerprinted across 3 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **honestly-flagged
physician identity**: a plausible but single-sourced real-world identity
link, reported as unconfirmed rather than stated as fact. Also notable:
the **hypothesized driver-split-by-publisher theory was checked and
found unsupported** — all 7 titles across both tags share the same
publisher, so the split more likely reflects genre/era than employer.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Steven_Baumrucker_1`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Steven_Baumrucker_1` `.sid` (Pogo Joe): load `$9200`,
init `$a050`, play `$a0c0`, **21 register writes / 50 frames** (3 filter
writes — sparse). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, The Giant List, Wikipedia,
Lemon64 (2 pages), CSDb, Internet Archive, and the related steven-
baumrucker-2 card.
