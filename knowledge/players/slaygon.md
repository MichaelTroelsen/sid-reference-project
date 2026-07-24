# Slaygon

```json
{
  "id": "slaygon",
  "name": "Slaygon",
  "aliases": ["Slaygon", "Censor Editor v1.6", "CensorEd"],
  "authors": ["Kenneth Mutka (Slaygon)"],
  "released": "TODO: no release year for this tag in SIDId. DeepSID's curated player entry that matches this tag ('Censor Editor v1.6') carries start_year 1990 and 'released in 2001' — https://deepsid.chordian.net/api/v1.php?players — but the tunes tagged 'Slaygon' in HVSC date 1989-1994, so 1990 cannot be taken as this routine's own first-release year. The author's own self-coded C64 tools span 1989 (Notemaker) to 2001 (Censored Editor V1.6); no byte-level source ties this Player-ID tag to one specific CSDb release (see quirks).",
  "status": "in-progress",
  "platform": "Native C64 — a personal, self-coded music editor/player routine written by the composer himself (not a distributed multi-user tracker). Confirmed by the author's own words: \"You learn a lot of the sid by doing your own music routine.\" (Remix64 interview, see sources). DeepSID's curated entry for this tag lists platform 'Native / C64 emulator', distribution 'Exclusive; released in 2001' (https://deepsid.chordian.net/api/v1.php?players).",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — read off the PSID header shown on CSDb's SID-entry pages, identical across every file checked (2001.sid id=27445, Basoni.sid id=27449, Sadis.sid id=27478). Not from disassembly.",
    "zero_page": "$40, sometimes also $41 — per DeepSID's curated player record whose match term is literally the player tag 'slaygon' (field zero_pages, https://deepsid.chordian.net/api/v1.php?players). NOT verified here by disassembly, and the tag-to-tool mapping behind it is DeepSID's curatorial claim, not a byte-level identity (SIDId tracks 'Slaygon' and 'Censored_Editor' as two entirely different signatures — see quirks). Treat as a lead to check first, not as an established fact.",
    "layout": "Partial, decoded from the published SIDId signature bytes for this tag (cadaver/sidid sidid.cfg, BSD-3, https://github.com/cadaver/sidid/blob/master/sidid.cfg): the matched block reads its voice-3 control/attack-decay/sustain-release values from FIXED ABSOLUTE addresses in page 3 — $033F, $0342, $0345 (stride 3) — rather than from zero page or from self-modified operands inside the $1000 image. So at least some of the driver's per-voice working state lives at hard-coded page-3 addresses ($0300 area, the tape/RS232 buffer), which the init must populate since a $1000-loading PSID cannot cover them. TODO: everything else — where order lists / patterns / instrument tables live is unknown; no disassembly performed."
  },
  "entry": {
    "init": "$1000 — same 3 files checked via CSDb SID-entry pages (see memory.load_address); A/X/Y convention TODO",
    "play": "$1003 — same 3 files checked via CSDb SID-entry pages; call rate/convention TODO"
  },
  "speed": "TODO: PSID header alone does not establish CIA-vs-raster timing or multispeed signalling; no disassembly performed. DeepSID's curated record leaves its 'speeds' field empty, so no public source states it either.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer routine: every one of the 20 files tagged 'Slaygon' in this project's dataset is by Kenneth Mutka (Slaygon) himself (data/composers/slaygon.json — 20 of his 43 catalogued files use this tag; no other composer's file in the dataset does, verified by scanning all of data/composers/*.json). This is the exact 'composer's own hand-coded routine' pattern called out in CLAUDE.md (cf. the Rob_Hubbard inferred-player case) rather than a genuinely shared, published tool.",
    "Confirmed in his own words: asked about the pros/cons of using his own editor, Slaygon told Remix64: \"The positive side is that when ever you needed a feature, you'd just code it in\" and \"You learn a lot of the sid by doing your own music routine\" — direct first-person confirmation this is a self-written routine, not a general-purpose tracker (https://remix64.com/interviews/interview-slaygon.html). The interview never names the editor, gives no date for it, and gives no technical detail.",
    "SIGNATURE (the one genuinely public byte-level artifact for this player). SIDId's signature for the tag 'Slaygon' is a single pattern with NO wildcards at all: `8D 0F D4 AD 3F 03 8D 12 D4 AD 42 03 8D 13 D4 AD 45 03 8D 14 D4` — i.e. STA $D40F / LDA $033F / STA $D412 / LDA $0342 / STA $D413 / LDA $0345 / STA $D414. Identical in cadaver/sidid (https://github.com/cadaver/sidid/blob/master/sidid.cfg) and in the maintained fork WilfredC64/player-id (https://github.com/WilfredC64/player-id). A wildcard-free signature is itself informative: the addresses this routine reads its voice-3 registers from are fixed, not relocated per-tune, which is consistent with the identical $1000/$1000/$1003 headers across every file.",
    "TAG vs TOOL, unresolved and genuinely contradictory between the two authoritative indexes. DeepSID's curated player database contains exactly one entry whose match term is 'slaygon': title 'Censor Editor v1.6', developer Slaygon, start_year 1990, csdb_id 67187 (= CSDb 'Censored Editor V1.6', 2001), zero_pages '$40, sometimes also $41' (https://deepsid.chordian.net/api/v1.php?players — verified live, not just from the local cache). SIDId, however, carries 'Slaygon' and 'Censored_Editor' as two SEPARATE tags with completely non-overlapping signatures (Censored_Editor's is `18 6D ?? ?? 69 ?? 9D ?? ?? 68 E8 E0 ?? D0 ?? AD ?? ?? 8D 18 D4 ...`, referencing CSDb release 91724 = Censored Editor V1.1, 1990). Both cannot be simply true. `csdb_release` is therefore left null: pointing it at 67187 (a 2001 release) would also mis-date tunes CSDb dates 1989-1991.",
    "CSDb credits Kenneth Mutka (Slaygon) with several of his own C64 tools: Notemaker (1989, id=5133 — code credited to Matcham, Slaygon AND Unifier, so not solo), Notemaker V2 (1990, id=142470 — code Slaygon + Unifier), Slaygon Coder V1.0 (1990, id=20865, code Slaygon alone), Censored Editor V1.1 (1990, id=91724, code Slaygon alone) / V1.6 (2001, id=67187, code Slaygon alone), Contactdealer V3.0 (1990, id=45668), Censor Writer (id=187342) — https://csdb.dk/scener/?id=934. CSDb classifies every one of them only as the generic type 'C64 Tool' with no music-editor subtype shown, so CSDb alone cannot tell you which of these is even a music editor.",
    "No public source code, manual, or format documentation for this routine was found. Searched CSDb (scener + each tool release), Lemon64 forum, Forum64, Demozoo (https://demozoo.org/sceners/14680/ — lists Slaygon as 'Code (music routine)' on Unipacker 1992, no editor entry), Remix64, and general web. Demozoo/CSDb have no download of a documented editor; DeepSID's curated record leaves source_code and docs empty.",
    "The load/init/play addresses ($1000/$1000/$1003) are identical across every file spot-checked on CSDb, consistent with a real, reused fixed-address routine rather than bespoke per-tune assembly — but this was read from each file's PSID header via CSDb's web pages, not verified by disassembly."
  ],
  "sources": [
    "data/sidid.json byTag.Slaygon (author: Kenneth Mutka (Slaygon); no released/reference/comment supplied) — and byTag.Censored_Editor, a separate tag, author Kenneth Mutka (Slaygon), released '1990 Censor Design', reference https://csdb.dk/release/?id=91724",
    "SIDId signature source, BSD-3-licensed: https://github.com/cadaver/sidid/blob/master/sidid.cfg (entry 'Slaygon', line 1775-1776) — repo README/licence at https://github.com/cadaver/sidid",
    "Maintained fork carrying an identical Slaygon signature: https://github.com/WilfredC64/player-id",
    "DeepSID curated player database, live: https://deepsid.chordian.net/api/v1.php?players — record {title: 'Censor Editor v1.6', search: 'slaygon', developer: Slaygon, start_year: 1990, csdb_id: 67187, platform: 'Native / C64 emulator', distribution: 'Exclusive; released in 2001', zero_pages: '$40, sometimes also $41'}; cached locally as data/players.json",
    "data/composers/slaygon.json — 20 of 43 records tagged 'Slaygon' (verified across all of data/composers/*.json as the only composer using this tag)",
    "HVSC Musicians.txt: 'Slaygon (Mutka, Kenneth) / Censor - SWEDEN' (data/hvsc/Musicians.txt line 1517). HVSC STIL.txt has no entry for any Slaygon file (data/hvsc/stil.json, zero matches) — so no STIL note names the editor either.",
    "CSDb scener profile: https://csdb.dk/scener/?id=934",
    "CSDb release 'Censored Editor V1.6' (2001, Censor Design, code Slaygon): https://csdb.dk/release/?id=67187",
    "CSDb release 'Censored Editor V1.1' (1990, Censor Design, code Slaygon): https://csdb.dk/release/?id=91724",
    "CSDb release 'Slaygon Coder V1.0' (1990, Censor Design, code Slaygon): https://csdb.dk/release/?id=20865",
    "CSDb release 'Notemaker' (1989, Censor Design, code Matcham/Slaygon/Unifier): https://csdb.dk/release/?id=5133",
    "CSDb release 'Notemaker V2' (1990, Censor Design, code Slaygon/Unifier): https://csdb.dk/release/?id=142470",
    "CSDb SID entries (PSID header load/init/play, 6581/PAL): https://csdb.dk/sid/?id=27445 , https://csdb.dk/sid/?id=27449 , https://csdb.dk/sid/?id=27478",
    "Demozoo scener page: https://demozoo.org/sceners/14680/",
    "Remix64 interview with Slaygon: https://remix64.com/interviews/interview-slaygon.html"
  ]
}
```

## Overview

"Slaygon" is the Player-ID tag for a personal music routine coded by Kenneth
Mutka (handle Slaygon), a Swedish scener with Censor Design, best known today
as the founder of SLAY Radio. In this project's dataset it is used by exactly
one composer — Mutka himself, 20 of his 43 catalogued files — matching the
"composer's own hand-coded routine" pattern (see CLAUDE.md's `Rob_Hubbard`
precedent) rather than a widely distributed tracker. Mutka confirms this
directly in a Remix64 interview: he wrote his own editor because "when ever you
needed a feature, you'd just code it in," and said doing so taught him "a lot of
the sid." CSDb credits him with several named C64 tools across 1989–2001
(Notemaker, Notemaker V2, Slaygon Coder V1.0, Censored Editor V1.1/V1.6,
Contactdealer V3.0, Censor Writer), all filed under the generic type "C64 Tool"
with no music-editor subtype, so CSDb by itself does not identify which is the
editor behind this tag.

## Quirks & gotchas

See the `quirks` array. The load-bearing points:

1. **Single-composer, self-coded routine**, confirmed by the author's own
   interview — not a published tool with a user base.
2. **The two authoritative indexes disagree about which tool this tag is.**
   DeepSID's curated player DB matches the tag `slaygon` to "Censor Editor
   v1.6" (CSDb 67187, a *2001* release), while SIDId keeps `Slaygon` and
   `Censored_Editor` as two separate tags with non-overlapping signatures
   (the latter pointing at CSDb 91724, 1990). Since the tunes carrying this
   tag are dated 1989–1991 by CSDb, `csdb_release` stays `null` rather than
   asserting either.
3. **The SIDId signature has no wildcards**, and decodes to voice-3 SID
   register writes fed from fixed page-3 addresses $033F/$0342/$0345. That is
   the only byte-level public artifact this player has, and it is the natural
   starting point for a future disassembly.
4. **No source, manual, or format spec exists publicly** — checked CSDb,
   Lemon64, Forum64, Demozoo, Remix64 and the SIDId repos.

## Disassembly notes

None performed here. Two runtime-adjacent facts are recorded from public
sources rather than from tracing code:

- **Entry points** ($1000 load / $1000 init / $1003 play) come from CSDb's
  per-file SID-entry pages, which parse the PSID header — three files
  cross-checked, all identical.
- **Page-3 variable storage** ($033F, $0342, $0345 read into $D412/$D413/$D414)
  comes from decoding SIDId's published, wildcard-free signature bytes for this
  tag. That is a mechanical 6502 decode of bytes in a BSD-licensed public repo,
  not an inference — but it says nothing about where order lists, patterns or
  instrument tables live.

Suggested starting point when this is finally disassembled: search a `.sid` for
the 20-byte signature above, then walk backwards from `$1003` to find how the
page-3 block at ~$033D–$0345 is filled by `init`. Check DeepSID's `$40`/`$41`
zero-page claim while you are there — that claim is currently unverified and
inherited via a contested tag-to-tool mapping.

## Verification

**Not verified — `status: in-progress`.** Raised from `stub` because two public
sources now document things beyond bare identity: the BSD-licensed
`cadaver/sidid` signature database gives exact, wildcard-free player bytes, and
DeepSID's live curated player API gives a zero-page claim and platform/
distribution metadata for the record it matches to this tag. Neither is a
disassembly. No init/play code has been reassembled or traced through
`sidm2-siddump`, no data format is known, and the tag-to-tool mapping is
contested between DeepSID and SIDId — do not promote this card past
`in-progress` without closing all three.

## Sources

See the `sources` array — SIDId's `byTag.Slaygon` plus the upstream
`sidid.cfg`/`player-id` signature files, DeepSID's live curated player record,
this project's `data/composers/slaygon.json`, HVSC `Musicians.txt` (and the
confirmed *absence* of any STIL entry), Kenneth Mutka's CSDb scener profile and
six of his tool releases, three of his SID files' CSDb entries, his Demozoo
page, and his Remix64 interview.
