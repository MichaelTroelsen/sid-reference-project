# Oliver Kirwa (Dr. Knox)

```json
{
  "id": "oliver-kirwa",
  "name": "Oliver Kirwa (Dr. Knox)",
  "aliases": ["Oliver_Kirwa"],
  "authors": ["Oliver Kirwa (Dr. Knox) — CONFIRMED self-coded, by two independent methods; see quirks"],
  "released": "1989-1991",
  "status": "in-progress",
  "platform": "Native C64. A personal hand-coded driver, no known editor. Soundtracks to his OWN games (he programmed, composed and drew them).",
  "csdb_release": null,

  "memory": {
    "load_address": "All files have hdr.load=$0000 with the real address in the first 2 data bytes. Slash $1070; Sensitive $3E80; Stagger $2090; Build_It $3681; Ultrazoyd RSID $0801.",
    "zero_page": "$FB/$FC — a 16-bit pointer in the 1990-91 revision, PRESERVED via PHA/PLA around its indirection (so it is safe to call from a game IRQ). The 1989 revision (Slash) does not use it. Full data-format ZP map is TODO — not guessed.",
    "layout": "SID is addressed through the $D480 MIRROR, not $D400 — his personal idiom and the card's key fingerprint (see quirks). Full 3-voice + filter coverage ($D400-$D418 equivalents). Sensitive fronts the driver with a 2-entry JMP table."
  },
  "entry": {
    "init": "Slash $1070; Sensitive $3EC3; Stagger $20CD; Build_It $36BC; Ultrazoyd $0C22.",
    "play": "Slash $10A1; Sensitive $3F4F; Stagger $2165; Build_It $3778; Ultrazoyd $0000 (RSID, self-installing)."
  },
  "speed": "Tempo divider = 6 — note advance every 6th frame; the other frames JMP to a per-frame effect path.",

  "data_format": {
    "order_list": "TODO — no disassembly published, none reconstructed. Not guessed.",
    "patterns": "TODO. $FF is the end-of-sequence marker (Slash walks tables directly; index stored at table base).",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE $D480 SID MIRROR IS HIS SIGNATURE IDIOM — and it is the whole key to this card. The C64 only partially decodes the SID, so its registers repeat every $20 across $D400-$D7FF; $D480 = $D400 + 4x$20. Kirwa addresses the chip through that mirror rather than the canonical base. Scanned across all 61,157 HVSC files, mirror-addressing hits only 7 files — and 5 are Kirwa's (every one of his own-code files). The other two are ruled out: LMan's is a 2SID/stereo tune (2019), Dane's is 2002 Crest; neither carries his prologue. WHY he did it is unknown — deliberate obfuscation vs. an assembler-symbol habit is speculation, and no source addresses it.",
    "SELF-CODED, CONFIRMED BY TWO INDEPENDENT METHODS THAT AGREE EXACTLY. (1) Binary: the driver prologue NOP / INC ctr / LDA ctr / CMP #$06 / BEQ / JMP hits 4 files across all 61,157 HVSC files, ALL Kirwa (two loose hits, Danko_Tomas and Dr_Zoom, ruled out on structure — one compares #$01). (2) Documentation: VGMPF, verbatim, 'Except on Title - Blast'em (C64), Kirwa programmed his own drivers.' THE TWO MATCH PERFECTLY — Blast_em is the one file using $D400 directly with ZERO mirror stores, and the one file DeepSID tags as Future Composer. His own code = $D480 mirror; the borrowed tool = $D400. A clean internal control.",
    "THE TAG UNDERCOUNTS ITS OWN FAMILY: DeepSID tags 3 files, but the driver family is 4 and his own code covers 5 of 6. SLASH.SID (1989 64'er/Markt & Technik) IS UNTAGGED YET RUNS THE SAME DRIVER — an earlier revision. A real gap. Ultrazoyd (1989) is also his code (68 mirror stores) but lacks the CMP #$06 prologue and is RSID/whole-program — predecessor or separate routine is UNDETERMINED. Blast_em (1989, Game On/CP Verlag) is the sole third-party exception, tagged FutureComposer_V4_Packed — see [[future-composer]].",
    "TWO REVISIONS: Slash (1989) is simpler — direct indexed sequences, no $FB/$FC. Sensitive/Stagger/Build_It (1990-91) are mature — a 16-bit $FB/$FC pointer, PHA/PLA-preserved. Build_It $3778 and Stagger $2171 are INSTRUCTION-FOR-INSTRUCTION IDENTICAL with only absolute addresses relocated: one driver, reassembled per game.",
    "A KB-WIDE TOOLING LIMITATION FOUND HERE — sidm2-siddump SILENTLY MISSES SID-MIRROR DRIVERS. All four mirror-dominant Kirwa files trace 0 register writes / 0 frames under it, while Blast_em (canonical $D400) traces 2,842 lines. Perfect correlation: that tracer does not decode SID mirrors. A mirror-addressed driver reads as 'SILENT' rather than erroring — so it could be, and nearly was, misjudged as a dead tune. Anything relying on sidm2-siddump alone inherits this blind spot; relevant to [[oliver-klaewer]], whose verification rests on it.",
    "RESOLVED — scripts/dev/vsid-trace.js HANDLES THE MIRROR CORRECTLY, so the blocker above is lifted. VICE emulates the real machine's partial address decode, so $D480 writes genuinely reach the SID and are reported at canonical register offsets. Measured with the wrapper at 50 frames: Slash 196 writes (33/50 active), Sensitive 203 (50/50), Build_It 460 (50/50), Stagger 448 (50/50, 'per-frame ~50Hz conventional player'), Ultrazoyd 66 (6/50), Blast_em 904 (50/50). ALL SIX FILES DRIVE. The 0-write readings were purely a tracer artefact. THE LESSON GENERALISES: a 0-write trace is evidence about the TOOL until you have ruled the tool out — reach for the VICE wrapper as a second opinion before concluding a tune is silent.",
    "SPELLING-VARIANT HYPOTHESIS DISCONFIRMED: 'Kirwa' is correct. HVSC Musicians.txt was checked for Kirwa/Kirwan/Kirva/Kiwra/Kirwe/Kierwa/Kirwo/Krwa — only 'Kirwa' exists (1 hit; all others 0). Four independent sources agree. Not a transliteration.",
    "THE COLLISION THAT MATTERS IS OLIVER KLAEWER — adjacent in Musicians.txt, both German Olivers, both self-coded drivers, both no editor. DIFFERENT PERSON: Klaewer b. 1969 Hanover, Kingsoft/reLine; Kirwa b. 1971-06-08 Bremen. Already carded as [[oliver-klaewer]]. Kingsoft appears in both gameographies (Emerald Mine; Gotcha!) — do not let that merge them. Also ruled out: 'Dr. Knox' vs Baron Knoxburry (Jason Langel, USA); six other German Olivers in Musicians.txt (Benedens, Mohr, Klee, Bartelt, Hoeller, Malms).",
    "CSDb URL TRAP (same family as the csdb_id landmine in CLAUDE.md): the XML nests Scener ID 22461, but /scener/?id=22461 returns 'The Fighter' (Denmark) — an unrelated person. The correct URL uses the HANDLE id: /scener/?id=25087.",
    "NOT A SCENER — a commercial/magazine game developer. CSDb's own trivia says so bluntly: 'Added for music credits only. Don't add his games to CSDb.' Handles: Dr. Knox (CSDb), plus 'Doctor' and 'Dr.Codo' (VGMPF-only). Born 1971-06-08 (VGMPF and DeepSID's date_birth agree INDEPENDENTLY). Bremen; attended Gymnasium there. C64 era 1988-1993 (~20-23 titles), Amiga to 1999 (Apydia). Publishers: Markt & Technik / 64'er, CP-Verlag, Software 2000, Happy Software. Best known for CRILLION (1988, Happy Software/Markt & Technik — Happy Computer 7/88 'Listing des Monats').",
    "STAGGER'S PLAY WRAPPER CONFIRMS THESE ARE GAME RIPS: it writes $D3D2/$D3D9 = $D012 (raster) / $D019 (IRQ ack) via the VIC-II mirror ($D040-$D3FF repeats every $40) — leftover game raster-IRQ setup.",
    "VGMPF QUIRKS, both consistent with the data: 'Kirwa almost always used the SID chip's inconsistent filters' ($D415-$D418 writes throughout), and 'On Slash (C64) and Sensitive (C64), quaver melodies play one sixteenth early.'",
    "A GOOD FUTURE CARD, surfaced here: STEFAN SIEGERT. VGMPF says 'Kirwa attended Gymnasium with Stefan Siegert', and the DATA corroborates a working relationship independently — Siegert's HVSC folder holds Sirius.sid (1989 Markt & Technik) and Gotcha.sid (1990 Kingsoft), BOTH in Kirwa's C64-Wiki gameography. So Siegert scored two of Kirwa's games. Siegert's tunes use $D400, mirror=0, no Kirwa prologue — he did NOT use Kirwa's driver. HVSC: 'Siegert, Stefan (Zieg) / Amok - GERMANY'. (An early search summary claimed the two 'collaborated on audio'; that phrasing did NOT survive verbatim re-checking, so only the Sirius/Gotcha data intersection is reported.)",
    "UNRESOLVED: Sensitive's year — the SID header says 1990, Lemon64 and C64-Wiki say 1991. Plausibly compose-vs-release, not resolved. No SIDId entry (confirmed, not an oversight — sidid.nfo present, 373 tags, zero match)."
  ],
  "sources": [
    "VGMPF — Oliver Kirwa (the 'programmed his own drivers' quote; birth date; filter/quaver quirks; the Siegert Gymnasium detail): https://www.vgmpf.com/Wiki/index.php?title=Oliver_Kirwa",
    "VGMPF — Stefan Siegert: https://vgmpf.com/Wiki/index.php?title=Stefan_Siegert",
    "CSDb scener (Oliver Kirwa / Dr. Knox — note this is the HANDLE id, see the URL-trap quirk): https://csdb.dk/scener/?id=25087",
    "C64-Wiki (DE) — Oliver Kirwa: https://www.c64-wiki.de/wiki/Oliver_Kirwa · Build-It: Das Bauhaus: https://www.c64-wiki.de/wiki/Build-It:_Das_Bauhaus · Crillion: https://www.c64-wiki.de/wiki/Crillion",
    "Lemon64 — Sensitive ('all the coding done by Oliver Kirwa including the excellent soundtrack'): https://www.lemon64.com/game/sensitive",
    "C64 memory map — SID and VIC-II mirror intervals ('$D420-$D7FF ... SID register images (repeated every $20, 32 bytes)'): https://sta.c64.org/cbm64mem.html",
    "HVSC Musicians.txt (the Kirwa entry; and line 891 'Klaewer, Oliver - GERMANY' with an ISO-8859-1 a-umlaut): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local: data/composers/oliver-kirwa.json, data/csdb/oliver-kirwa.json, data/sidid.json (no entry); HVSC 85 MUSICIANS/K/Kirwa_Oliver/; HVSC-wide fingerprint scans (prologue and $D480 mirror)"
  ]
}
```

## Overview

`Oliver_Kirwa` is the personal driver of **Oliver Kirwa** (handle *Dr. Knox*), a
German one-man game developer from Bremen (b. 1971-06-08) who programmed,
composed and drew his own games for *64'er*/Markt & Technik, CP-Verlag, Software
2000 and Happy Software between 1988 and 1993 — best known for **Crillion**
(1988). Not a scener: CSDb's own trivia on him reads *"Added for music credits
only. Don't add his games to CSDb."*

His driver's defining trait is that it **talks to the SID through the `$D480`
mirror** instead of `$D400`. That single idiom identifies his code across the
whole of HVSC — and it's also what makes his tunes invisible to this project's
tracer.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The `$D480` mirror** — 7 hits in 61,157 files, 5 of them his.
- **Self-coding is confirmed twice over**, and the two methods provide each
  other's control: VGMPF names *Blast'em* as the sole exception, and *Blast'em*
  is exactly the one file with zero mirror stores.
- **`sidm2-siddump` can't see mirror drivers** — four files reading "0 writes"
  were never silent. **Resolved**: `scripts/dev/vsid-trace.js` drives all six
  (VICE emulates the real address decode). Generalised lesson: *a 0-write trace
  is evidence about the tool until the tool is ruled out.*
- **`Slash.sid` is untagged but runs the same driver** — a real gap in DeepSID's
  tagging.

## Disassembly notes

No published disassembly and none reconstructed. The above is fingerprint
scanning plus targeted reading: the `CMP #$06` tempo-divider prologue, the
`$FB/$FC` pointer with PHA/PLA preservation, the `$FF` end-of-sequence marker,
and Stagger's `$D3D2`/`$D3D9` writes (VIC mirror → raster/IRQ-ack, i.e. leftover
game IRQ setup, confirming these are rips).

Build_It `$3778` and Stagger `$2171` are instruction-for-instruction identical
modulo relocation — one driver reassembled per game.

## Verification

`status: in-progress`. Identity, provenance, self-coding and the driver family
are solid and multiply-sourced. Entry points and the two revisions are measured.

**Playback confirmed via `scripts/dev/vsid-trace.js`** — all six files drive
(Stagger 448 writes over 50/50 frames; figures per file in the quirks). An
earlier reading of "0 writes" on the four mirror-addressed files was a
**`sidm2-siddump` artefact**, not silence: that tracer doesn't decode SID
mirrors, VICE does. The tooling blocker is lifted.

Still **not** `verified`, for the ordinary reason: nothing has been
reconstructed and re-run. Driving cleanly is necessary, not sufficient.

Not determined: the driver's internal data format (order list, pattern/instrument
encoding, tables, effect commands) — all `TODO`, no memory map guessed; whether
the driver has a name or editor (note data was likely hand-assembled, but this is
**unverified** for Kirwa — no interview found); why `$D480`; Ultrazoyd's exact
relationship to the family; Sensitive's year conflict. MobyGames 403'd.

## Sources

See the `sources` array above.
