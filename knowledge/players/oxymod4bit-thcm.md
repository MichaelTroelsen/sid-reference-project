# OxyMod4Bit/THCM

```json
{
  "id": "oxymod4bit-thcm",
  "name": "OxyMod4Bit/THCM",
  "aliases": ["OxyMod4Bit/THCM"],
  "authors": ["Uwe Anfang (The Human Code Machine / THCM)"],
  "released": "TODO: no explicit year in SIDId; observed files span 2012-2014",
  "status": "stub",
  "platform": "Not a distributed tracker/editor. THCM's own personal C64 sample/digi conversion tool — he combines a composer's CheeseCutter SID with Amiga MOD (Protracker) samples into a single C64 executable/PRG himself; the finished .sid embeds only the resulting replay routine. Never publicly released as standalone software (see quirks).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx",
    "zero_page": "TODO: which ZP addresses the play routine clobbers",
    "layout": "TODO: notes on where order lists / tables / patterns live"
  },
  "entry": {
    "init": "TODO: $xxxx (A/X/Y convention if any)",
    "play": "TODO: $xxxx (call rate / speed model)"
  },
  "speed": "TODO: 1x-Nx, CIA vs raster/VBI, how multispeed is signalled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: how a command byte is laid out",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's own tag comment for the sibling tag OxyMod/THCM (10 files, uncarded, out of scope this batch) says the underlying 8-bit sample technique 'was discovered by Otto Järvinen (SounDemoN) in 2006. It makes use of waveform $00 in combination with the test bit and uses the frequency register to write the 8-bit sample data to the SID chip' (also independently found in 1993 by Chris Brenner's DigiMaster) — https://codebase64.net/doku.php?id=base:vicious_sid_demo_routine_explained. SounDemoN's own writeup of that routine (fetched directly) says only that regular $D418-volume-register digi playback is 'limited to 4 bits' as the comparison point it improves on — it does NOT itself describe a '4-bit' THCM variant or name OxyMod. So the working hypothesis is that 'OxyMod4Bit' is a reduced/legacy-compatible (volume-register, 4-bit) playback mode of THCM's same tool, sitting alongside the full 8-bit 'OxyMod' mode — but this is inference from naming + author match, not a citation that states it outright. Do not treat it as confirmed.",
    "THCM's tool is documented under (at least) three names across sources found here: 'OxyMod' (SIDId comment on the sibling tag; also LMan's own site), 'OxyMod4Bit' (this tag, SIDId — comment-less), and 'THCMod' (remix64's LMan interview: 'THCM's MOD converter (today named THCMod) which could play back Protracker files on the C64'). Whether OxyMod and OxyMod4Bit are the same underlying engine in two output modes, or genuinely distinct tools that happen to share an author and a naming pattern, is unresolved — flagged as a lead for whoever cards the sibling OxyMod/THCM tag.",
    "THCM built the demo-scene groundwork this rides on: he wrote the 'MOD player' half of the 2008 X'2008 demo Vicious SID (with SounDemoN's sample technique and Mixer), coded the digi sound routine in Coma Light 13, and coded on Comaland (Censor Design + Oxyron, released 25 October 2014) — the demo two of this family's own files (Magnar's 'Comaland (end)' and 'Comaland 100% (end)') come from; 'Comaland 100%' is a separate, later 2015 production (demozoo.org/productions/140070) not the one cited here. Sources: https://csdb.dk/release/?id=72678 (Vicious Sid credits) and https://demozoo.org/productions/124841/ (Comaland credits, code list includes THCM).",
    "The tool was never publicly released. A dedicated CSDb release, 'THCM: Please Release Your Music Tool' by PVM (2019), is literally a tribute/plea music release asking THCM to release it, and its comments thread discusses openness-vs-gatekeeping in the scene — https://csdb.dk/release/?id=177049. Consistent with there being no CSDb entry at all for 'OxyMod' as a named tool/release (a direct CSDb site search for 'OxyMod' returns zero results) and no source archive found anywhere. Treat as closed/unreleased, not merely 'undocumented'.",
    "Because it's not a distributed editor, files tagged with this player are typically produced collaboratively: the composer writes the base tune (commonly in CheeseCutter — confirmed for LMan's 'Hi Fi Sky', which used plain OxyMod: 'the CheeseCutter SID plays on voice 1 and 2, while voice 3 is reserved for the sample output' — https://markus-klein-artwork.de/music/hi-fi-sky.html) and THCM personally runs it through his converter to produce the final executable/SID.",
    "Composer spread in this dataset (14 files, 8 composers: THCM 4, Magnar 3, Mahoney 2, Acrouzet/Adam Morton/LMan/Slaxx/Vincenzo 1 each) is wide relative to file count and includes prominent scene composers (Mahoney, Magnar, LMan) outside THCM's own output (28% of files) — consistent with a hand-applied service THCM performed for demo/scene friends rather than a personal-only routine, but also consistent with its never having been mass-distributed (no long tail of unknown/casual users)."
  ],
  "sources": [
    "sidid:OxyMod4Bit/THCM (author Uwe Anfang (The Human Code Machine)) — https://github.com/cadaver/sidid/blob/master/sidid.nfo ; local copy data/sidid.json",
    "sidid:OxyMod/THCM comment (sibling tag, technique description + codebase64 link + DigiMaster 1993 prior art) — same source",
    "SounDemoN, 'Vicious SID demo routine explained' (Vandalism News #50, mirrored on Codebase64) — https://codebase64.net/doku.php?id=base:vicious_sid_demo_routine_explained",
    "CSDb: Vicious Sid release credits (THCM = MOD player, SounDemoN = 8-bit sample player, Mixer) — https://csdb.dk/release/?id=72678",
    "CSDb: 'THCM: Please Release Your Music Tool' by PVM, 2019 (tool never publicly released) — https://csdb.dk/release/?id=177049",
    "Demozoo: Comaland (Censor Design + Oxyron, 25 October 2014) credits, THCM listed under Code — https://demozoo.org/productions/124841/",
    "LMan (Markus Klein), own site, 'Hi Fi Sky' track notes: \"THCM's Oxymod tool to combine [SID + MOD] into a c64 executable\", voice allocation — https://markus-klein-artwork.de/music/hi-fi-sky.html",
    "Remix64 interview with LMan, 'SID Chip Club': \"THCM's MOD converter (today named THCMod) which could play back Protracker files on the C64\" — https://remix64.com/interviews/interview-with-lman-sid-chip-club.html",
    "CSDb scener THCM (real name Uwe Anfang, group Oxyron, Germany) — https://csdb.dk/scener/?id=9589",
    "Local dataset: 14 files tagged OxyMod4Bit/THCM across 8 composers (see knowledge/COVERAGE.md, data/composers/*.json)"
  ]
}
```

## Overview

OxyMod4Bit/THCM is the SIDId Player-ID signature for a C64 digi/sample
playback routine attached to tunes personally converted by **Uwe Anfang
(THCM / The Human Code Machine)**, of the German group Oxyron. It is not a
distributed tracker or editor — no CSDb release, source archive, or download
for a tool by this name was found anywhere, and a 2019 CSDb music release by
PVM is literally titled *"THCM: Please Release Your Music Tool"*, a public
plea for him to do so. 14 files in this dataset carry this exact tag, spread
across 8 composers (THCM himself, Magnar, Mahoney, LMan, Acrouzet, Adam
Morton, Slaxx, Vincenzo) — a hand-applied conversion service among scene
contacts rather than a mass-distributed tool. It sits alongside a sibling
tag, `OxyMod/THCM` (10 files, same author, uncarded — out of scope for this
batch), which SIDId documents as using the SounDemoN-discovered 2006
technique (waveform $00 + test bit + frequency register) to play 8-bit
samples on a SID oscillator; whether "4Bit" names a distinct lower-fidelity
mode of the same engine or a separate tool is unresolved (see quirks) and is
flagged as a lead for whoever cards `OxyMod/THCM`.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are: (1) the "4Bit" naming
is *not* directly documented anywhere found, only inferable from the sibling
`OxyMod/THCM` tag's comment plus SounDemoN's own writeup, which mentions
4-bit-limited volume-register digi only as a comparison baseline, not as a
THCM mode; (2) the tool circulates under at least three names (OxyMod,
OxyMod4Bit, THCMod) across sources, unreconciled; (3) it was never publicly
released — treat as closed, not just undocumented; (4) files using it were
produced by THCM personally converting a composer's separate CheeseCutter SID
+ Amiga MOD samples, so the "player" is really a bespoke build step, which
likely means format details vary less by "version" and more by "which tune."

## Disassembly notes

None done here — no source was found to read, and no disassembly was
attempted (out of this agent's scope). The most promising real lead for a
future pass is not a source archive (none exists) but a raw `.sid` itself:
any of the 14 files listed in `sources`/local dataset would be a starting
point for a SIDwinder-style disassembly, cross-checked against the codebase64
"Vicious SID demo routine explained" article for the underlying oscillator
trick.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
group, the technique's likely lineage via the Vicious SID demo, and the
tool's unreleased status) are confirmed, each cited above. No memory map,
entry point, or data format was extracted or guessed; every Tier 3 field is
`TODO`.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the codebase64 mirror of
SounDemoN's Vicious SID writeup, CSDb (Vicious Sid credits, the "please
release your tool" release, THCM's scener page), Demozoo (Comaland credits),
LMan's own site, and the Remix64 LMan interview.
