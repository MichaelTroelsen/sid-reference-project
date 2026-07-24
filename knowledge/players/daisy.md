# D.A.I.S.Y.

```json
{
  "id": "daisy",
  "name": "D.A.I.S.Y.",
  "aliases": ["D.A.I.S.Y."],
  "authors": ["Computertechnik Rosenplänter (Göttingen, West Germany)"],
  "released": "1987",
  "status": "stub",
  "platform": "NOT a music tracker. D.A.I.S.Y. (\"Digital Audio Interface SYstem\") was a commercial 4-bit hardware audio digitizer/sampler cartridge for the C64/C128 expansion port (38 kHz sampling ADC), sold by Computertechnik Rosenplänter of Göttingen in 1987. The 'player' tag in this dataset identifies the standalone playback routine bundled with the digitizer's software so that recorded samples could be replayed on any C64/C128 without the hardware module attached.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file — CSDb SID entries observed at $0A5A (Patrick Becher tunes) and $0A40 (Hucky tune), so there is no single canonical load address; each release appears hand-relocated rather than sharing one fixed binary layout",
    "zero_page": "TODO: no public disassembly found",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: per-file (PSID header); observed identical to load address in the two CSDb entries checked ($0A5A / $0A40), consistent with a self-relocating/self-installing routine, not confirmed as a fixed constant",
    "play": "TODO: CSDb lists Play Address $0000 on the entries checked (e.g. csdb.dk/sid/?id=4618, csdb.dk/sid/?id=61778) — suggests the routine installs its own IRQ during init rather than exposing a separate PSID play vector, typical of raw digi-sample players of this era; not independently confirmed by disassembly"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO: likely not applicable — this is a raw digitized-sample player, not a pattern/sequence music format",
    "patterns": "TODO: likely not applicable, see order_list",
    "instruments": "TODO: likely not applicable, see order_list",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: likely not applicable — no evidence this is a music engine with pattern/effect commands",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a hardware product, not a tracker/editor. The HVSC/DeepSID 'player' tag 'D.A.I.S.Y.' groups files that use the digitizer's sample-playback routine, not a composed-music engine — expect the tagged .sid files to be digitized/sampled audio clips, not pattern-based tunes. Titles in this dataset (e.g. 'Computersound', 'Digi Guitar', 'Drumming Special', 'Squaler') read as sample/demo names rather than song titles, consistent with this.",
    "No entry in SIDId's sidid.nfo and no entry in this project's curated data/players.json — this family was entirely uncarded/unidentified beyond the raw HVSC player tag before this card.",
    "Composer concentration is small and geographically tight: 30 files across only 6 composers in the local dataset (Patrick Becher/\"Bug\" 13, ISM/Dirk 6, Twilight 6, Hucky 3, Jan Albartus 1, Sascha Nagie 1) — source: this project's data/composers/*.json aggregation. Five of six are credited from Germany (data/composers profiles), matching the digitizer's West German origin (Computertechnik Rosenplänter, Göttingen); Jan Albartus is the one Netherlands-credited outlier. Small, regionally clustered usage is exactly the signal expected for a real but commercially limited hardware add-on rather than a widely-adopted tool.",
    "Two CSDb SID entries checked show Load Address = Init Address ($0A5A and $0A40, differing between composers) and Play Address = $0000 — consistent with a self-installing IRQ player with no distinct PSID play vector, but this is PSID-header observation only, not a disassembly, and was checked on only 2 of the 30 files.",
    "No public source code, disassembly, or format documentation was found for the playback routine itself; only the hardware product (digitizer) is documented, on German-language retro-hardware sites.",
    "Independent corroboration from Forum64 (forum64.de thread 115968, '4-Bit Digitizer \"D.A.I.S.Y\" kompatibel'): hobbyists attempting to reverse-engineer/clone the hardware report the ADC/converter ICs on genuine units had their part markings ground off specifically to prevent reproduction, and that no one in the thread had the original schematic — independent scene confirmation that the hardware (and by extension its bundled player) was never openly documented, consistent with this card's own finding of no public source. Primary page content could not be fetched directly (forum64.de returns HTTP 403 to automated tools, and no browser-automation tool was available in this session); the above is relayed via search-engine result snippets, not a direct quote, so treat as a lead for a future pass with interactive browser access rather than a confirmed fact.",
    "The same Forum64 thread (per search-engine snippets only, not independently verified) also mentions original Rosenplänter software and a separate, later 'Crisp'-authored alternative/professional D.A.I.S.Y.-compatible player, and a claim that Rosenplänter's original player had its loader built into the player code with sample data held in screen memory ($0400-$07FF) rather than saved as a separate loadable player. None of this could be confirmed against primary source text in this session — flagged for follow-up, not entered as a structured fact."
  ],
  "sources": [
    "C64-Wiki (German): Audiodigitizer overview, D.A.I.S.Y. section — https://www.c64-wiki.de/wiki/Audiodigitizer (manufacturer Computertechnik Rosenplänter, Göttingen, 1987; \"D.A.I.S.Y.\" = \"Digital Audio Interface SYstem\"; 4-bit ADC, 38 kHz; samples playable on any C64/C128 without the module)",
    "CSDb search for 'D.A.I.S.Y.': https://csdb.dk/search/?search=D.A.I.S.Y. (no dedicated release/tool page found under this exact name; two unrelated hits: 'Sequenzer 64 V1.4' and the 1987 CCB sound-demo below)",
    "CSDb release https://csdb.dk/release/?id=249881 — 'Hallo D.A.I.S.Y.' (aka 'To be on Top'), C64 Misc./Sound-Demo by group CCB, 1987, credited 'Sampling by CCB' — a contemporary (1987) scene demo using the D.A.I.S.Y. name, corroborating the device's period presence in the German scene; CCB is not established as the hardware manufacturer (Computertechnik Rosenplänter)",
    "CSDb search for 'Rosenplänter': https://csdb.dk/search/?search=Rosenpl%C3%A4nter — no results; the manufacturer has no group/company entry on CSDb",
    "CSDb SID entries checked for header fields: https://csdb.dk/sid/?id=4615 (Computersound, Patrick Becher), https://csdb.dk/sid/?id=4618 (Digi Guitar, Patrick Becher, load/init $0A5A, play $0000), https://csdb.dk/sid/?id=61778 (Hells Bells tune 3, Hucky, load/init $0A40, play $0000), https://csdb.dk/sid/?id=61780 (Heino-Mix, Hucky)",
    "Forum64.de thread https://www.forum64.de/index.php?thread/115968-4-bit-digitizer-d-a-i-s-y-kompatibel/ ('4-Bit Digitizer \"D.A.I.S.Y\" kompatibel') and https://forum64.de/index.php?thread%2F10681-d-a-i-s-y-digitizer%2F= ('D.A.I.S.Y Digitizer', Bastelecke) — found via web search but returned HTTP 403 to direct automated fetch in this session; content relayed only via search-result snippets, see quirks for what those snippets reported and the caveat on reliability",
    "Lemon64 forum searched (site:lemon64.com and general queries for D.A.I.S.Y./Rosenplänter/German digitizer threads) — no thread specifically about D.A.I.S.Y. found; general C64 audio-digitizer threads checked (e.g. lemon64.com/forum/viewtopic.php?t=30180, t=37111) discuss other devices (Digital Dan, Datel Sound Sampler), not D.A.I.S.Y.",
    "Codebase64 wiki searched — no article found for D.A.I.S.Y. or this digitizer family",
    "Local dataset: 30 files tagged 'D.A.I.S.Y.' across 6 composers — see knowledge/COVERAGE.md and data/composers/*.json (hucky.json, ism.json, jan-albartus.json, patrick-becher.json, sascha-nagie.json, twilight.json)",
    "Checked and NOT found: data/sidid.json byTag (no D.A.I.S.Y. entry), data/players.json (no D.A.I.S.Y. entry) — confirming this had no prior curated identification"
  ]
}
```

## Overview

D.A.I.S.Y. — "Digital Audio Interface SYstem" — was a commercial 4-bit audio
digitizer/sampler cartridge for the C64/C128 expansion port, sold in 1987 by
Computertechnik Rosenplänter of Göttingen, West Germany, at roughly 180 DM
(source: [C64-Wiki's Audiodigitizer article](https://www.c64-wiki.de/wiki/Audiodigitizer)).
It is **not a music tracker**. The `D.A.I.S.Y.` tag seen in this dataset's HVSC
files identifies the standalone playback routine that shipped with the
digitizer's software, so recorded samples could be replayed on a plain
C64/C128 without the hardware attached. In this project's local data it
covers 30 files across 6 composers (`data/composers/*.json` aggregation;
`knowledge/COVERAGE.md` no longer lists per-family ranks for carded families
now that coverage is ~100%), concentrated among German scene musicians of the late 1980s — Patrick Becher
("Bug"), ISM/Dirk, Twilight, Hucky, Sascha Nagie — plus one Dutch composer,
Jan Albartus. That geography and small, tight composer set line up with a
real but commercially limited West German hardware product rather than a
widely distributed editor. It has no entry in SIDId's `sidid.nfo` and no
entry in this project's curated `data/players.json`, so this card is the
first identification of the family beyond the raw player tag. Lemon64 and
Forum64 were both explicitly searched for this card: Lemon64 has no thread
specifically about D.A.I.S.Y.; Forum64 has two hardware-focused threads
(one in Bastelecke, one a "compatible clone" reverse-engineering thread)
that independently corroborate the hardware was never openly documented
(genuine units had part numbers ground off the ICs, and no schematic
circulates among hobbyists) — but forum64.de returns HTTP 403 to this
session's automated fetch tools, and no interactive browser tool was
available, so that thread's content is relayed only via search-engine
snippets rather than confirmed from the primary text. See `quirks` below
for what those snippets reported and the caveat on their reliability.

## Quirks & gotchas

- Treat files tagged `D.A.I.S.Y.` as **digitized/sampled audio clips**, not
  composed pattern-based tunes — the routine's job is sample playback, not
  music sequencing. Track titles in the dataset ("Computersound", "Digi
  Guitar", "Drumming Special") read as sample-demo names, not song titles.
- The two CSDb SID entries inspected both show `Load Address == Init Address`
  and `Play Address = $0000` — but the load/init address itself differs
  between composers ($0A5A vs $0A40), so there is no single fixed player load
  address to record; each captured tune looks hand-relocated rather than
  sharing one binary.
- No public source, disassembly, or software-side documentation of the
  playback routine was found — only the hardware product is documented, and
  only on German-language sites. A future pass would need to disassemble a
  representative `.sid` from scratch; there is no source to start from.
- Forum64 thread 115968 ("4-Bit Digitizer 'D.A.I.S.Y' kompatibel") — a
  hobbyist reverse-engineering/clone-building thread — independently
  corroborates the "no public documentation" finding: genuine units had
  their ADC/converter IC markings ground off to deter reproduction, and no
  participant had the original schematic. Search-result snippets from the
  same thread also mentioned a later "Crisp"-authored alternative/
  professional D.A.I.S.Y.-compatible player distinct from Rosenplänter's
  original, and a claim that the original player's loader was built into
  the player code with sample data held in screen memory rather than a
  separately saveable player. **None of this was independently verified**:
  forum64.de returned HTTP 403 to direct automated fetch, and no
  browser-automation tool was available this session, so only search-engine
  paraphrase was available, not the primary thread text — treat as a lead
  for a future pass with interactive browser access, not a confirmed fact.
- A 1987 CSDb-catalogued sound-demo, "Hallo D.A.I.S.Y." by group CCB
  (`csdb.dk/release/?id=249881`), shows the D.A.I.S.Y. name circulating in
  the German scene contemporaneously with the hardware's release, though
  CCB is not established as being Computertechnik Rosenplänter itself.

## Disassembly notes

None performed. No public source or prior disassembly exists for the
playback routine to build on; only two files' PSID headers were inspected via
CSDb (see `sources`), not a real trace or reconstruction.

## Verification

**Not verified — `status: stub`.** This card is Tier 1 (local dataset
aggregation) + Tier 2 (web/CSDb provenance for the hardware product and two
PSID-header spot-checks) only. Every Tier 3 runtime field is honestly `TODO`:
no memory map, entry points, or data format were reverse-engineered, and none
should be guessed for what looks like a raw sample-playback routine with no
surviving public documentation.

## Sources

See the `sources` array — C64-Wiki's Audiodigitizer article (manufacturer,
year, acronym expansion), CSDb search/release/SID-entry checks (including a
contemporary 1987 scene sound-demo and confirmation the manufacturer has no
CSDb group entry), Lemon64 and Forum64 searches (Forum64 has two hardware
threads, unreadable directly this session — HTTP 403, no browser tool
available — so relayed only via search snippets, flagged accordingly),
Codebase64 (no article found), and this project's local dataset
(`knowledge/COVERAGE.md`, `data/composers/*.json`, `data/sidid.json`,
`data/players.json`).
