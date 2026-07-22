# Cody Player (Ronny Pasch)

```json
{
  "id": "audial-arts-cody",
  "name": "Cody Player (Ronny Pasch)",
  "aliases": ["Audial_Arts/Cody", "Audial_Arts/Cody_Digi"],
  "authors": ["Ronny Pasch (Cody) — signature-attributed only; no source states he coded it (see quirks)"],
  "released": "1989 (Capitol era — SID headers read '1989 Capitol')",
  "status": "verified",
  "platform": "Native C64 replay routine. Player-ID-fingerprinted; NOT the Audial Arts 'Zong Player' despite the tag prefix (see quirks).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file. Traced sample (Axel-F.sid): load/init $4000, play $4003. The $4000/$4003 pair is consistent across the Cody-signature files checked.",
    "zero_page": "TODO — no reverse-engineered source exists (realdmx carries only Prijt's Zong v1/v2, neither of which matches this signature)",
    "layout": "TODO"
  },
  "entry": {
    "init": "$4000 (sample trace: Axel-F.sid)",
    "play": "$4003 (sample trace: Axel-F.sid). NOTE: the Cody_Digi files instead carry play=$0 — a self-installing-IRQ digi model, i.e. a different driving convention."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE TAG IS MISLEADING: 'Audial_Arts/Cody' is NOT an Audial Arts player. It is Ronny Pasch's CAPITOL-era (1989) routine, and it predates Audial Arts (founded 1990) entirely. The 'Audial_Arts/' prefix is an HVSC FOLDERING artifact — Pasch's files live under MUSICIANS/A/Audial_Arts/Pasch_Ronny/ — not a statement of lineage. (The foldering explanation is inferred, but strongly: the chain Cody founded Capitol 1989 -> Capitol dissolved May 1990 -> Pasch founded Audial Arts 1990 is documented on CSDb.)",
    "Cody IS Ronny Pasch — the same person, not a separate member. CSDb models each handle as its own cross-linked entry: scener #11357 'Cody' (real name Ronny Pasch, NL, founder of Capitol, also Ruthless) and scener #2076 'Ronny Pasch' (other handles: Cody, Ron). All 5 DeepSID-tagged files carry the SID header author 'Ronny Pasch (Cody)' released '1989 Capitol' — direct in-file confirmation, independent of CSDb.",
    "A GENUINELY DIFFERENT ROUTINE from the Zong Player of [[audial-arts]], not a variant of it. Distinct sidid.cfg signatures: Audial_Arts (Zong) is $D416-led ('BD ?? ?? 38 E5 ?? 9D ?? ?? 8D 16 D4'), Audial_Arts/Cody is $D418-led ('8D 18 D4 A2 ?? 8E ?? ?? 20 ?? ??'). A byte-scan of all four AA-family signatures across 154 HVSC #85 files found 8 Cody-signature matches, ALL authored 'Ronny Pasch (Cody)', with ZERO overlap against the Zong signature on any file. Different addresses too (Cody $4000/$4003; Zong $0fff/$1003 and $3fff/$4003). Hence no shares_routine_with edge: the code relationship is not merely undocumented, it is positively absent.",
    "NO sidid.nfo ENTRY — only a sidid.cfg signature. This is why the project's data/sidid.json has nothing for this tag (no name, author, or year to enrich with). The name on this card is descriptive; the tool has no known official name.",
    "Cody_Digi ATTRIBUTION IS WEAK — folded into this card as a sibling, but flagged rather than asserted. Its 3 files are by Harlequin (x2) and Rodney Balai — NONE by Pasch. All carry play=$0 (own IRQ, digi). One ('Splash', '1990 Harlequin & CBA') predates Harlequin's Audial Arts membership. The tag bears Cody's handle, but nothing confirms he wrote the digi routine.",
    "WHETHER CODY CODED IT IS UNCONFIRMED. The signature bears his handle and only his files match it — but no source states authorship. Treat the authors field as signature-attribution, not established fact.",
    "COUNT DRIFT (expected, not a bug): DeepSID tags 5 files, but HVSC #85 has 8 signature matches. The project's DeepSID dump is an HVSC 84 snapshot (see data/deepsid-dump/meta.json), so Fantasy/Sad_Tune/Humanoid_v1 aren't in it. Expect 8 after a newer import.",
    "LOOSE END: 'Funky_Man' and 'X-mas_Music' are authored 'Ronny Pasch (Cody)' at the same $4000/$4003 addresses but match NO signature at all — possibly SIDId under-coverage of a Cody revision. Worth a look if this card is ever deepened.",
    "COLLISION RULED OUT: CSDb scener #400 'Cody' = Bekir Ogurlu (Turkey, aka Slowhand, active 2010) also carries 'Cody' as a struck-through handle. Ruled out on country, era, and output — his files are all DMC/JCH/Music Assembler/GoatTracker, zero Audial_Arts. Codys #10904, #14038, #40515 and Commander Cody #11710 are excluded by the direct SID-header evidence rather than individually.",
    "NAME-COLLISION TRAP (inherited from [[audial-arts]]): 'Audial Arts' is distinct from 'Audial Revolution' — see [[audial-revolution]]. Not triggered here, but adjacent."
  ],
  "sources": [
    "CSDb scener 11357 (Cody = Ronny Pasch, Capitol founder): https://csdb.dk/scener/?id=11357",
    "CSDb scener 2076 (Ronny Pasch, handles Cody/Ron): https://csdb.dk/scener/?id=2076",
    "CSDb group 1007 (Capitol, NL, 1989-May 1990, 'Founded by Cody in 1989'): https://csdb.dk/group/?id=1007",
    "CSDb group 752 (Audial Arts, NL, founded 1990): https://csdb.dk/group/?id=752",
    "SIDId sidid.cfg (the $D418-led Cody signature; no .nfo entry): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.cfg",
    "realdmx c64_6581_sid_players (checked and found NOT to contain this routine — only Prijt's Zong v1/v2): https://github.com/realdmx/c64_6581_sid_players",
    "Local HVSC #85 SID headers (author/release strings, address pairs, signature byte-scan across 154 files) + data/composers/{ronny-pasch,harlequin,rodney-balai,bekir-ogurlu}.json"
  ]
}
```

## Overview

The routine behind DeepSID's `Audial_Arts/Cody` tag is **Ronny Pasch's own 1989
replay code from his Capitol days** — not, despite the tag, the in-house
"Zong Player" of the Dutch group Audial Arts documented in [[audial-arts]].
Pasch (handle **Cody**) founded Capitol in 1989; when it dissolved in May 1990
he went on to found Audial Arts, and HVSC files his whole output under the
later group's folder. The tag prefix records where the files *sit*, not what
code they *run*.

The two routines are demonstrably distinct: different SIDId signatures
($D418-led vs. the Zong Player's $D416-led), different entry addresses, and
zero file overlap across a byte-scan of the full AA family in HVSC #85. This
card therefore carries no `shares_routine_with` edge to [[audial-arts]] — the
relationship is one of *person and foldering*, not of code.

## Quirks & gotchas

See the `quirks` array above. The load-bearing one: **do not fold these files
into [[audial-arts]]**. That card's headline claim is "a group routine, coded
by François Prijt" — which is simply wrong for these 8 files, and merging them
would corrupt its clearest fact.

## Disassembly notes

None yet. No reverse-engineered source exists for this routine — realdmx's
`aaplayer1.asm`/`aaplayer2.asm` are both Prijt's Zong v1/v2 and match a
different signature. A trace of `Axel-F.sid` (init `$4000`, play `$4003`)
produced **299 register writes over 50 frames**, so the routine drives cleanly
and is a viable disassembly target whenever someone picks it up.

## Verification

**Verified — `status: verified` (2026-07-22).** Two real HVSC `Audial_Arts/Cody`-tagged `.sid` files were disassembled with `SIDdecompiler`, reassembled with 64tass, and trace-diffed.

| File | PSID header | Byte-diff | Trace result |
|---|---|---|---|
| `Pasch_Ronny/Axel-F.sid` (1 subtune) | load=$4000, init=$4000, play=$4003 | 98.08% (41/2134) | **Exact** (103/103 writes, cycle-for-cycle, 15 frames) |
| `Pasch_Ronny/Axel-F_V2.sid` (1 subtune) | load=$4000, init=$4000, play=$4003 | 98.11% (38/2006) | 1 byte differs (filter_freq_hi init $88 vs $58), self-corrects by frame 3; all subsequent writes exact (54/54) |

The V2 divergence is a single self-modified workspace byte (filter_freq_hi) that init fills differently per song — same self-correcting-workspace pattern as `sidbang64.md` (lesson 25/41).

## Sources

See the `sources` array above.
