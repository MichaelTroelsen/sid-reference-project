# Burgstaller_B (Bernhard Burgstaller's own routine)

```json
{
  "id": "burgstaller-b",
  "name": "Burgstaller_B (Bernhard Burgstaller's 'Second Soundroutine')",
  "aliases": ["Burgstaller_B"],
  "authors": ["Bernhard Burgstaller"],
  "released": "1990-1991, confirmed by a full census of all 18 tagged files' own PSID-header 'Released' fields via csdb.dk/webservice (type=sid): 3 files dated 1990 (Cydonia_4 id 37496, Cydonia_5 id 37490, Iso id 37481), the remaining 15 dated 1991. Matches the author's own help.txt range ('1990-1991') and the CSDb release ('Second Soundroutine - Assembler composed', id 150333, ReleaseYear 1991).",
  "status": "stub",
  "platform": "Native C64, hand-coded 6502 sound routine (his own, no GUI editor) — composed directly in assembler (.a64 sources), used both standalone and embedded in his own game 'Cydonia'. Confirmed via csdb.dk/webservice (type=release, id=150333): both 'Code' and 'Music' credit types on the release are attributed solely to Burgstaller (Handle 25588) — a single-author code+music release, not an editor-plus-composer-content split.",
  "csdb_release": 150333,

  "memory": {
    "load_address": "Per-file (own routine, no fixed loader observed). PSID-header samples read from CSDb's SID pages: China.sid load $1000; Cydonia_1.sid load $6000. Not disassembled.",
    "zero_page": "TODO: no disassembly performed (source archives exist on CSDb but were not opened by this pass)",
    "layout": "TODO: source archives (second_soundroutine__assembler_composed__Sourcecode_1.zip / _2.zip) are on CSDb but unread"
  },
  "entry": {
    "init": "PSID-header samples: init = load+3 in both sampled files (China $1003; Cydonia_1 $6003) — consistent with a short vector at the start of the block, but only 2 files checked and not disassembled/confirmed.",
    "play": "PSID-header samples show play = load address in both sampled files (China $1000; Cydonia_1 $6000) — not disassembled; unclear whether this is a literal call target or an artifact of how the tune was PSID-wrapped."
  },
  "speed": "TODO: not documented, not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Fully personal, single-composer routine. All 18 files tagged 'Burgstaller_B' in this dataset are by Bernhard Burgstaller himself (data/composers/bernhard-burgstaller.json — 100% concentration, one composer) — the textbook 'small/personal routine, not a published tool' case per the extraction template's concentration heuristic.",
    "Author explicitly calls it his 'second soundroutine' — CSDb release 150333's own comment/help.txt frames it as an evolution of an earlier, unpublished routine of his, not something based on another author's player. No lineage edge is asserted here because no source states a derivation FROM another named player; 'second' just numbers his own iteration.",
    "The author's own help.txt (bundled in the CSDb release) states the routine 'uses no SID-filters' — a genuine playback-technique note, though not independently verified by disassembly here.",
    "SOURCE IS PUBLIC on CSDb: the 'Second Soundroutine - Assembler composed' release (id 150333) bundles two source-code zips (.a64 6502 assembler sources) plus a help.txt and an '_ass.bat' to reassemble everything, uploaded by the author. License is UNSTATED (CSDb page shows only its own generic site copyright, no explicit terms from Burgstaller) — confirm permission before treating it as reusable, same caveat as odintracker.md.",
    "help.txt gives concrete loading instructions: two-file load at $0F00 + $1000 then 'sys256*15' ($0F00), or a single file at $1000 then 'sys4096' — consistent with the PSID load addresses read off individual CSDb SID pages, but this is file-loading metadata, not a disassembled memory map.",
    "Burgstaller was also a coder (CSDb function: Coder + Musician), and reused this routine in his own unfinished 1989-1992 platform game 'Cydonia' (CSDb release 150328) — several of the 18 files (Cydonia_1..5, Cydonia_ingame, Land5) are that game's music; the rest (China, Disco, Hinu, Iso, Grus4, the *-Trance tunes, etc.) are the standalone 'Second Soundroutine' set. Not in SIDId (data/sidid.json has no 'Burgstaller_B' entry) and not in the older cadaver/sidid.nfo either — it IS present as a raw byte signature in the newer WilfredC64/player-id project's config/sidid.cfg (no accompanying name/author/comment there, just the signature bytes), which is presumably how this dataset's 'Burgstaller_B' tag was assigned.",
    "gamesthatwerent.com's Cydonia writeup credits 'Sound: Bernhard Burgstaller, Matt Grey, and Chris Huelsbeck' for the overall game project across its multi-year (1989-1992) development — this is a game-credits list spanning the whole unfinished project, not evidence that Burgstaller's own routine derives from Huelsbeck's or Gray's code. Do NOT assert a derivation edge from this alone.",
    "2026-07-24 re-research pass: no 'First Soundroutine' or any earlier soundroutine release by Burgstaller exists on CSDb (checked his full scener credit list at csdb.dk/scener/?id=25588, which lists only Second Soundroutine, Cydonia, and unrelated later tools — Disk/Diskimage tool 1998+2013, a 1998 MOS 6502 cross-assembler, 'Melini' 2016) — 'second' really does just number his own prior (unpublished/undocumented) iteration, reinforcing the existing no-derivation-edge call. The WilfredC64/player-id sidid.cfg entry for 'Burgstaller_B' still carries only raw signature bytes, no name/author/comment. Targeted Lemon64 and Forum64 searches for Burgstaller/Cydonia/soundroutine turned up no scene-forum threads about this routine specifically (only unrelated Matt Gray/Cydonia-the-1998-album/Cydonia-the-Mars-mission noise) — nothing to add or contradict.",
    "2026-08-01 pass: full census of all 18 tagged files' own PSID headers via csdb.dk/webservice (type=sid, not just the 2 previously spot-checked) confirms 'released' precisely — 3 files (Cydonia_4, Cydonia_5, Iso) carry a 1990 Released field, the other 15 carry 1991; no file predates 1990 or postdates 1991. The same census also confirms the load-address split noted from the 2-file sample generalizes across all 18, though not cleanly along the standalone-vs-Cydonia line assumed earlier: 5 files load at $1000 (China, Disco, Hinu, Hubbard, Iso) and the other 13 load at $6000 (all 7 Cydonia_1-5/ingame + Land5 tunes, plus Grus4 and the four *-Trance tunes — so Grus4 groups with the $6000 set despite not being Cydonia- or Trance-named). Every one of the 18 files' InitAddr = load+3 and PlayAddr = load, with no exceptions across the full set. This is still PSID header metadata, not a disassembly, and is not written into the Tier 3 memory/entry fields above."
  ],
  "sources": [
    "Local dataset: 18 files tagged Burgstaller_B, 1 composer (100% Bernhard Burgstaller) — knowledge/COVERAGE.md rank #8; data/composers/bernhard-burgstaller.json",
    "CSDb scener profile (Bernhard Burgstaller, id 25588, functions Coder+Musician): https://csdb.dk/scener/?id=25588",
    "CSDb release 'Second Soundroutine - Assembler composed' (1991, includes published .a64 source + help.txt): https://csdb.dk/release/?id=150333",
    "help.txt from that release (loading instructions, 'uses no SID-filters', versioning notes): http://csdb.dk/getinternalfile.php/151651/help.txt",
    "CSDb release 'Cydonia' game preview (1991-1992, code+music by Burgstaller): https://csdb.dk/release/?id=150328",
    "gamesthatwerent.com Cydonia writeup (1989-1992 dev history, sound credits): https://www.gamesthatwerent.com/gtw64/cydonia/",
    "CSDb SID-tune pages (PSID header samples): China https://csdb.dk/sid/?id=37492 ; Cydonia 1 https://csdb.dk/sid/?id=37494",
    "Player-ID byte signature for 'Burgstaller_B' (no name/author/comment attached): https://github.com/WilfredC64/player-id, config/sidid.cfg",
    "Checked and NOT found in either SIDId nfo: cadaver/sidid (github.com/cadaver/sidid) and this project's cached data/sidid.json — no author/year/comment entry exists there for this tag",
    "Re-fetched CSDb release 150333 (2026-07-24): author's own comment on the release page (submitted by Bernhard Burgstaller, Sep 10 2016) reads 'all my sound files using my second soundroutine and composed in assembler from 1990-1991' — confirms the 1990-1991 date range and sole authorship already in this card; no license terms stated anywhere on the page beyond CSDb's own generic site copyright.",
    "Re-checked WilfredC64/player-id (2026-07-24): raw_github.com/WilfredC64/player-id/master/config/sidid.cfg 'Burgstaller_B' entry is still signature bytes only, no name/author/comment fields.",
    "2026-08-01 census: queried csdb.dk/webservice?type=sid&id=<id> for all 18 CSDb sid ids tagged Burgstaller_B in data/composers/bernhard-burgstaller.json (37492, 37494, 37489, 37480, 37496, 37490, 53666, 37495, 37487, 37488, 37482, 37493, 37481, 37486, 37485, 37483, 37491, 37484) — confirms per-file 'Released' (1990 x3, 1991 x15) and LoadAddr/InitAddr/PlayAddr for every file, replacing the prior 2-file spot check.",
    "2026-08-01: queried csdb.dk/webservice?type=release&id=150333&depth=3 directly — confirms both Code and Music CreditType entries on the release point solely to Handle 25588 (Bernhard Burgstaller), and re-confirms the two source-code zip download links alongside the main archive."
  ]
}
```

## Overview

`Burgstaller_B` is Bernhard Burgstaller's own hand-coded C64 sound routine —
what he himself called his "second soundroutine" in a 1991 CSDb release,
composed directly in 6502 assembler with no separate GUI editor. Every one of
the 18 files tagged with it in this dataset is by Burgstaller himself (see
`data/composers/bernhard-burgstaller.json`), split between a standalone tune
set and music for his own unfinished 1989-1992 platform game "Cydonia" — the
textbook single-composer personal routine, not a widely published tool. It
earns a card mainly because its **source is unusually public**: Burgstaller
uploaded two `.a64` source-code archives alongside the tunes on CSDb.

## Quirks & gotchas

See the `quirks` array — load-bearing ones: **100% one-composer concentration**
(a personal routine, not a scene-wide tool); the **source is public but its
license is unstated** (same caveat as `odintracker.md`); the author's own
help.txt says the routine **"uses no SID-filters"**; and the game-credits list
for Cydonia (Burgstaller + Matt Gray + Chris Huelsbeck) is **not** evidence of
code lineage — it is a project credits list spanning years, not a derivation
statement, so no `edges.derives_from` is asserted.

## Disassembly notes

None performed (out of scope for this pass — Tier 1+2 only). The concrete next
step for a future pass: fetch and unzip
`second_soundroutine__assembler_composed__Sourcecode_1.zip` / `_2.zip` from
CSDb release 150333, read the `.a64` 6502 source directly, then assemble +
trace a rebuilt tune through `sidm2-siddump` to fill `memory`/`entry`/
`data_format`/`effects` and move past `stub`.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed (composer, CSDb release, published source existence, PSID
load/init/play values for all 18 tagged files' CSDb SID pages — a full
census, not a spot check). No disassembly was done in this pass; all
data-format/effect/zero-page fields are honestly `TODO` rather than guessed
from the PSID header data.

**2026-07-24 re-research pass**: re-confirmed the existing CSDb citations
still resolve and carry the same facts (release 150333's author comment,
scener profile's release list), re-checked the WilfredC64/player-id
signature entry (still bytes-only), and searched Lemon64 and Forum64
specifically for Burgstaller/Cydonia/soundroutine — no scene-forum
discussion of this routine exists on either site, and no earlier
"first soundroutine" release or public source repo (GitHub/SourceForge)
turned up anywhere. No new Tier 3 fact was found, so `status` stays `stub`;
nothing here reaches the bar for `in-progress` (a public source that
plainly documents a runtime fact — the CSDb-hosted `.a64` zips qualify as
"public source exists" but have not been opened/read in any pass so far).

**2026-08-01 pass (gap-fill for `released`/`platform`)**: censused all 18
tagged files' own PSID `Released` fields via `csdb.dk/webservice`
(`type=sid`) instead of the prior 2-file sample — this confirms rather than
corrects the existing 1990-1991 range (3 files 1990, 15 files 1991) and
adds exact per-file attribution. Also queried the release itself
(`type=release&id=150333&depth=3`), confirming both Code and Music credits
belong solely to Burgstaller, which strengthens (does not change) the
`platform` field's "his own routine, no separate editor" claim. `status`
stays `stub` — this pass added Tier 1/2 confirmation only, no Tier 3 fact.

## Sources

See the `sources` array — the CSDb scener profile, the "Second Soundroutine"
release (with published source + help.txt), the "Cydonia" game release,
gamesthatwerent.com's Cydonia history, a full census of all 18 CSDb SID-tune
pages via the webservice for PSID header data, a direct release-record query
confirming sole authorship of both code and music, and the Player-ID
project's raw byte signature (confirmed absent from both SIDId `.nfo`
variants).
