# OxyMod / OxyMod4Bit (THCM)

```json
{
  "id": "oxymod4bit-thcm",
  "name": "OxyMod / OxyMod4Bit (THCM)",
  "aliases": ["OxyMod4Bit/THCM", "OxyMod/THCM"],
  "authors": ["Uwe Anfang (The Human Code Machine / THCM)"],
  "released": "TODO: no explicit year in SIDId; observed files span 2008 (Vicious Sid demo era, e.g. Tristar Boulder) - 2014",
  "status": "stub",
  "platform": "Not a distributed tracker/editor. THCM's own personal, never-publicly-released Amiga MOD (Protracker) -> C64 executable converter — he combines a composer's separately-authored SID tune (frequently CheeseCutter) with converted MOD samples into a single C64 executable/PRG himself; the finished .sid embeds only the resulting replay routine. SIDId fingerprints the output under two raw tags treated HERE AS ONE TOOL, TWO OUTPUT MODES (merged onto this one card — see quirks for the evidence and its limits): plain 'OxyMod' for its 8-bit sample technique (SounDemoN's 2006 discovery, waveform $00 + test bit + frequency register), and 'OxyMod4Bit' for a presumed lower-fidelity/compatibility mode whose exact mechanism is not independently confirmed. Never publicly released as standalone software (see quirks).",
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
    "MERGE DECISION (this session): 'OxyMod/THCM' (10 files) and 'OxyMod4Bit/THCM' (14 files) are now read as ONE tool with two output modes, merged onto this single card, based on evidence gathered while carding the plain 'OxyMod/THCM' tag. Previously (prior session) this was left an open, uncited hypothesis. New evidence for the merge: (1) SIDId itself lists both tags with the SAME single author, Uwe Anfang, and no other candidate author was found anywhere; (2) COMPOSER OVERLAP — THCM himself (4 files under each tag), Mahoney (2 files under each tag), and Adam Morton (1 file under each tag) each have files tagged BOTH ways, i.e. the same real people used both variants, which is hard to explain if these were two unrelated closed tools by coincidentally the same author; (3) an independent third-party technical source (Chris Wothke/Tiny'R'Sid's digi-samples writeup, not affiliated with SIDId) names 'THCM - Tristar Boulder' — one of THIS dataset's OxyMod/THCM (plain) files — as an example of the 'frequency-modulation' 8-bit sample technique, and separately describes 'a tool created by THCM... a converter for existing MOD files... hasn't been publicly released' as a SINGULAR tool — https://www.wothke.ch/tinyrsid/index.php/digi-samples ; https://www.wothke.ch/tinyrsid/index.php/modconverter . (4) No CSDb release exists under either name (confirmed again this session: direct CSDb site search for 'OxyMod' returns zero results). REMAINING UNCERTAINTY, stated honestly: no source explicitly states OxyMod4Bit's playback mechanism — the '4-bit' reading is inferred from the name plus the well-documented general existence of a 4-bit $D418-volume-register digi class (distinct from the 8-bit frequency-modulation class OxyMod plain uses per SIDId's own comment) on the same Wothke page. Do not treat OxyMod4Bit's exact technique as confirmed, only the one-tool/two-tags identity.",
    "SIDId's own tag comment (present only on the plain 'OxyMod/THCM' tag, not on 'OxyMod4Bit/THCM') says the 8-bit sample technique 'was discovered by Otto Järvinen (SounDemoN) in 2006. It makes use of waveform $00 in combination with the test bit and uses the frequency register to write the 8-bit sample data to the SID chip' (also independently found in 1993 by Chris Brenner's DigiMaster) — https://codebase64.net/doku.php?id=base:vicious_sid_demo_routine_explained. SounDemoN's own writeup of that routine says only that regular $D418-volume-register digi playback is 'limited to 4 bits' as the comparison point it improves on — it does not itself name OxyMod or OxyMod4Bit.",
    "THCM's tool is documented under at least four names across sources found here: 'OxyMod' (SIDId comment; LMan's own site), 'OxyMod4Bit' (SIDId, comment-less), 'THCMod' (Remix64's LMan interview: 'THCM's MOD converter (today named THCMod) which could play back Protracker files on the C64'; CSDb commenter dihhmosic on Magnar's 'File Deleted' release, id=158635: 'used thcmod or oxymod'), and 'MDG Mod-Converter' (THCM's own November 2008 CSDb forum announcement seeking closed-beta testers — the earliest documented name — https://csdb.dk/forums/?roomid=14&topicid=61371). Now read as one tool (see merge decision above), not four.",
    "THCM built the demo-scene groundwork this rides on: he wrote the 'MOD player' half of the 2008 X'2008 demo Vicious SID (with SounDemoN's sample technique and Mixer), also coded on the 2012 sequel Vicious Sid 2 (The Noisy Bunch) alongside Mahoney and Mankeli — this dataset's 'HJE - Vicious SID 2 - Turn Disk' (tagged plain OxyMod/THCM) corroborates that credit list directly — coded the digi sound routine in Coma Light 13, and coded on Comaland (Censor Design + Oxyron, released 25 October 2014) — the demo two of this family's own files (Magnar's 'Comaland (end)' and 'Comaland 100% (end)') come from; 'Comaland 100%' is a separate, later 2015 production (demozoo.org/productions/140070) not the one cited here. Sources: https://csdb.dk/release/?id=72678 (Vicious Sid credits), https://csdb.dk/release/?id=112365 (Vicious Sid 2 credits) and https://demozoo.org/productions/124841/ (Comaland credits, code list includes THCM).",
    "The tool was never publicly released. A dedicated CSDb release, 'THCM: Please Release Your Music Tool' by PVM (2019), is literally a tribute/plea music release asking THCM to release it, and its comments thread discusses openness-vs-gatekeeping in the scene — THCM himself replied that Naku 'was' on the beta list but his group members should 'mind their manners,' confirming the tool was distributed only via a private beta list, not publicly — https://csdb.dk/release/?id=177049. Consistent with there being no CSDb entry at all for either 'OxyMod' or 'OxyMod4Bit' as a named tool/release and no source archive found anywhere. Treat as closed/unreleased, not merely 'undocumented'.",
    "The closed-beta history is documented on the CSDb forums (thread 61371, 2008-2010): announced 2008-11-15 seeking 'talented musicians' familiar with Goattracker and Protracker-compatible editors; Jammer and HJE provided early feedback; THCM reported slow progress in January 2009 and planned a public release for Easter/Breakpoint 2009 (which never materialized); a new beta was sent to testers on 2010-03-15. Adam (Adam Morton) volunteered as a tester in September 2009. At one point THCM noted he 'perhaps' would release source with the converter, but this never happened. The converter was written in PureBasic and used r8brain.dll for high-quality sample-rate conversion — https://csdb.dk/forums/?roomid=14&topicid=61371.",
    "A CSDb music release, Magnar's 'File Deleted' by Censor Design (2017, placed #2 at Datastorm), explicitly credits THCM for 'Code' and, per commenter dihhmosic, 'used thcmod or oxymod' to combine a Goattracker synth part with a MOD digi part — the most concrete public evidence of the tool in active use under both names. JCH's comment on the same release asks 'what player is assisting the 8-bit THCM digi?', confirming the 8-bit technique was commonly known as 'THCM digi' in the scene — https://csdb.dk/release/?id=158635.",
    "Because it's not a distributed editor, files tagged with this player are typically produced collaboratively: the composer writes the base tune (commonly in CheeseCutter — LMan's own site describes his 'Hi Fi Sky' using 'THCM's Oxymod tool to combine [SID + MOD] into a c64 executable', voice 3 reserved for sample output — https://valerie-klein.de/music/hi-fi-sky.html; note that in THIS dataset 'Hi Fi Sky' is itself SIDId-tagged 'CheeseCutter_2.x', not OxyMod — LMan's OTHER file, 'Make Noise', carries the OxyMod4Bit tag instead, so treat the Hi-Fi-Sky prose description as evidence of the workflow, not proof of which SIDId tag any specific file gets) and THCM personally runs it through his converter to produce the final executable/SID.",
    "Combined composer spread across both tags (24 files, 11 unique composers: THCM 8 [33%], Mahoney 4, Magnar 3, Adam Morton 2, Acrouzet/HJE/Jan Albartus/LMan/Slaxx/Vincenzo/Wacek 1 each) is wide relative to file count and includes prominent scene composers (Mahoney, Magnar, LMan, HJE) outside THCM's own output — consistent with a hand-applied service THCM performed for demo/scene friends rather than a personal-only routine, but also consistent with its never having been mass-distributed (no long tail of unknown/casual users). Per-tag breakdown: OxyMod4Bit/THCM 14 files/8 composers (THCM 4, Magnar 3, Mahoney 2, Acrouzet/Adam Morton/LMan/Slaxx/Vincenzo 1 each); OxyMod/THCM 10 files/6 composers (THCM 4, Mahoney 2, Adam Morton/HJE/Jan Albartus/Wacek 1 each)."
  ],
  "sources": [
    "sidid:OxyMod4Bit/THCM (author Uwe Anfang (The Human Code Machine)) — https://github.com/cadaver/sidid/blob/master/sidid.nfo ; local copy data/sidid.json",
    "sidid:OxyMod/THCM comment (technique description + codebase64 link + DigiMaster 1993 prior art) — same source",
    "SounDemoN, 'Vicious SID demo routine explained' (Vandalism News #50, mirrored on Codebase64) — https://codebase64.net/doku.php?id=base:vicious_sid_demo_routine_explained",
    "Chris Wothke (Tiny'R'Sid/WebSid), 'MOD converter' page: \"The converter created by 'The Human Code Machine' allows to automatically create a C64 program file from some input MOD file\" — https://www.wothke.ch/tinyrsid/index.php/modconverter",
    "Chris Wothke (Tiny'R'Sid/WebSid), 'digi-samples' page: names 'Tristar Boulder' (this dataset's THCM/OxyMod file) as a frequency-modulation 8-bit sample example, and describes THCM's converter as unreleased ('you can always ask him') — https://www.wothke.ch/tinyrsid/index.php/digi-samples",
    "CSDb: Vicious Sid release credits (THCM = MOD player, SounDemoN = 8-bit sample player, Mixer) — https://csdb.dk/release/?id=72678",
    "CSDb: Vicious Sid 2 release credits (code: Mahoney, Mankeli, Mixer, SounDemoN, THCM, YPS; music: HJE among others) — https://csdb.dk/release/?id=112365",
    "Demozoo: Comaland (Censor Design + Oxyron, 25 October 2014) credits, THCM listed under Code — https://demozoo.org/productions/124841/",
    "LMan (Markus Klein), own site, 'Hi Fi Sky' track notes: \"THCM's Oxymod tool to combine [SID + MOD] into a c64 executable\", voice allocation — https://valerie-klein.de/music/hi-fi-sky.html (redirected from markus-klein-artwork.de as of this session)",
    "Remix64 interview with LMan, 'SID Chip Club': \"THCM's MOD converter (today named THCMod) which could play back Protracker files on the C64\" — https://remix64.com/interviews/interview-with-lman-sid-chip-club.html",
    "CSDb forum thread 61371 (2008-2010): THCM's original 'MDG Mod-Converter' closed-beta announcement, technical discussion (PureBasic + r8brain.dll, raster time, ADPCM plans), Jammer/HJE/Adam beta testing, planned Breakpoint 2009 release — https://csdb.dk/forums/?roomid=14&topicid=61371",
    "CSDb release 'File Deleted' by Magnar / Censor Design (2017, id=158635): THCM credited for 'Code', commenter dihhmosic confirms 'used thcmod or oxymod' to combine Goattracker + MOD, JCH references 'the 8-bit THCM digi' — https://csdb.dk/release/?id=158635",
    "CSDb release 'THCM: Please Release Your Music Tool' by PVM (2019, id=177049): THCM himself confirms closed beta via private list in the comments — https://csdb.dk/release/?id=177049",
    "CSDb scener THCM (real name Uwe Anfang, group Oxyron, Germany) — https://csdb.dk/scener/?id=9589",
    "CSDb search for 'OxyMod' returns zero release results (checked this session) — https://csdb.dk/search/?search=OxyMod",
    "Local dataset: 24 files across both tags, 11 unique composers (14 OxyMod4Bit/THCM + 10 OxyMod/THCM; aggregated from data/composers/*.json — note the merged 24-file total is not reflected in knowledge/COVERAGE.md, which as an uncarded-only listing still shows the plain 'OxyMod/THCM' tag on its own; that will resolve once COVERAGE.md is regenerated after this merge)"
  ]
}
```

## Overview

`OxyMod/THCM` and `OxyMod4Bit/THCM` are two SIDId Player-ID signatures now
carded together as **one** tool: a C64 digi/sample playback routine attached
to tunes personally converted by **Uwe Anfang (THCM / The Human Code
Machine)**, of the German group Oxyron. It is not a distributed tracker or
editor — THCM originally announced it as the "MDG Mod-Converter" on CSDb
forums in November 2008, seeking closed-beta testers; a planned Breakpoint
2009 public release never materialized. The tool survives under at least
four names across sources (MDG Mod-Converter, OxyMod, OxyMod4Bit, THCMod),
never publicly released, distributed only via THCM's private beta list. A
2019 CSDb music release by PVM is literally titled *"THCM: Please Release
Your Music Tool"*, a public plea for him to do so; THCM himself confirmed in
the comments thread that access was by private invitation only. The tool's
most concrete public footprint is Magnar's 2017 release "File Deleted"
(#2 at Datastorm), where THCM is credited for code and commenters reference
"thcmod or oxymod" as the combining tool. A prior pass on this card left the
two-tag relationship an open, uncited hypothesis; this session resolved it
(see the `quirks` array's "MERGE DECISION" entry) on three independent
pieces of evidence. What is *not* confirmed is OxyMod4Bit's exact playback
mechanism — only that it is the same tool's second, presumably lower-fidelity,
mode. Combined, 24 files in this dataset carry one of the two tags, spread
across 11 composers — a hand-applied conversion service among scene contacts
rather than a mass-distributed tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are: (1) the **merge
decision** itself — evidence-based, not assumed, but OxyMod4Bit's exact
technique remains unconfirmed even after the merge; (2) the tool circulates
under at least four names across sources (MDG Mod-Converter, OxyMod,
OxyMod4Bit, THCMod), unreconciled beyond "same tool"; (3) it was never
publicly released — treat as closed, not just undocumented; (4) the tool
underwent a closed beta from 2008-2010 (Jammer, HJE, Adam), written in
PureBasic using r8brain.dll; a planned Breakpoint 2009 release never
happened, and source code was never released despite THCM once saying he
"perhaps" would; (5) files using it were produced by THCM personally
converting a composer's separate SID tune (commonly CheeseCutter) + Amiga MOD
samples, so the "player" is really a bespoke build step, which likely means
format details vary less by "version" and more by "which tune"; (6) a file's
prose description of using "OxyMod" (e.g. LMan's own site on "Hi Fi Sky")
does not necessarily match which of the two SIDId tags that exact file
carries in this dataset — "Hi Fi Sky" itself is tagged `CheeseCutter_2.x`,
not either OxyMod tag; LMan's other file, "Make Noise", carries
`OxyMod4Bit/THCM`.

## Disassembly notes

None done here — no source was found to read, and no disassembly was
attempted (out of this agent's scope). The most promising real lead for a
future pass is not a source archive (none exists) but a raw `.sid` itself:
any of the 24 files across both tags listed in `sources`/local dataset would
be a starting point for a SIDwinder-style disassembly — "Tristar Boulder"
(plain `OxyMod/THCM`) and "Make Noise" (`OxyMod4Bit/THCM`) would be the
natural first pair to compare, since a byte-level diff of their playback
routines is the cleanest way to actually confirm or refute the "one engine,
two modes" merge decision made this session. Cross-check against the
codebase64 "Vicious SID demo routine explained" article for the underlying
oscillator trick.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
group, the technique's likely lineage via the Vicious SID demo, the
one-tool/two-tags merge, and the tool's unreleased status) are confirmed,
each cited above. No memory map, entry point, or data format was extracted or
guessed; every Tier 3 field is `TODO`. The merge decision itself is inference
from converging circumstantial evidence (shared author, composer overlap, an
independent technical source), not a document that states "OxyMod4Bit is a
mode of OxyMod" outright — flagged as such in the quirks, and the natural
next step (a disassembly diff of one file per tag) is noted above.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the codebase64 mirror of
SounDemoN's Vicious SID writeup, Chris Wothke's Tiny'R'Sid digi-samples/MOD-
converter pages, CSDb (Vicious Sid and Vicious Sid 2 credits, the "please
release your tool" release with THCM's own beta-list confirmation, THCM's
scener page, a zero-result search for "OxyMod", the MDG Mod-Converter forum
thread 61371 documenting the 2008-2010 closed beta, and Magnar's "File
Deleted" release confirming thcmod/oxymod in active use with JCH naming the
"8-bit THCM digi"), Demozoo (Comaland credits), LMan's own site (now at
valerie-klein.de), and the Remix64 LMan interview.
