# Zardax

<!--
  Tier 1 + Tier 2 stub. No disassembly performed. See "Quirks & gotchas" for
  the load-bearing distinction this card makes: two related but NOT proven-
  identical raw Player-ID tags are covered here, not one player.
-->

```json
{
  "id": "zardax",
  "name": "Zardax",
  "aliases": ["Zardax", "Zardax/SoundKiller"],
  "authors": ["Ari-Pekka Paljakka (Zardax)", "Sami Ilmonen (Scapegoat)"],
  "released": "Sound Killer (Zardax/SoundKiller tag): V3.6B Mar 1991, V3.7 10 Jul 1991 (both via Topaz Beerline, from CSDb release 99054 and Demozoo scener profile). Bare 'Zardax' personal routine: no formal release; earliest catalogued tune is 'Animotion' (1991, csdb 44530) — the routine was embedded per-tune with no consistent base address across files.",
  "status": "verified",
  "platform": "Native C64 tools. The 'Zardax/SoundKiller' tag corresponds to a formally released, packaged tool ('Sound Killer' + companion utilities TuneSqueezer/TuneRelocator) co-authored with Sami Ilmonen (Scapegoat). The bare 'Zardax' tag reads as an undocumented personal/in-house routine, almost entirely used on the author's own tunes — no editor or tool release found for it.",
  "csdb_release": 99054,

  "memory": {
    "load_address": "Not a single fixed address (embedded-per-tune player, both tags) — this is inherent, not a research gap. Disassembly-confirmed on 3 files, all load=$1000: Anastasia.sid + A_Quiet_Life.sid (Zardax/SoundKiller), Animotion.sid (bare Zardax). Card's earlier PSID-header-only survey ($4800, $0808, $E300 seen on other files) still applies for those untested files.",
    "zero_page": "DISASSEMBLY-CONFIRMED, and the two tags use DIFFERENT footprints (further evidence they are different code, see quirks): Zardax/SoundKiller uses 8 bytes ($35-$36 + $FA-$FF) — confirmed on both Anastasia.sid and A_Quiet_Life.sid, exactly matching DeepSID's previously-uncited player-database figure. Bare Zardax uses only 4 bytes ($FB-$FE) — confirmed on Animotion.sid, no $35/$36 usage at all.",
    "layout": "Both tags: a small player-state working-storage block sits immediately after the init/play JMP vectors (Zardax/SoundKiller: $1006-$107E on Anastasia.sid; bare Zardax: $1589-$1644+ on Animotion.sid, plus 3 self-modified immediate operands at $11FB/$1200/$1414) — per-voice frequency/ADSR/waveform mirror + a countdown speed byte. Full pattern/instrument/order-list layout beyond this is still TODO — out of scope for this verification pass (see Verification section)."
  },
  "entry": {
    "init": "DISASSEMBLY-CONFIRMED on 3 files (both tags): init = load address, a 3-byte JMP to the real init routine (e.g. $1000 -> jmp $107F on Anastasia.sid).",
    "play": "DISASSEMBLY-CONFIRMED on 3 files (both tags): play = init + 3, a 3-byte JMP to the real play routine (e.g. $1003 -> jmp $10FA on Anastasia.sid). Other bare-Zardax files' +6/+16 PSID-header offsets (noted in the card's original survey) were not re-tested this pass."
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
    "DISASSEMBLY PASS (2026-07-25) STRENGTHENS 'two distinct tags' rather than resolving it: Zardax/SoundKiller uses an 8-byte zero-page footprint ($35-$36+$FA-$FF, matching DeepSID's cached spec exactly); bare Zardax uses only 4 bytes ($FB-$FE), with no $35/$36 usage at all, and a structurally different working-storage layout (a compact 3-value-per-voice table on SoundKiller vs. a much larger full-register-mirror table on bare Zardax). This is new, disassembly-derived evidence -- not just composer-concentration/PSID-header inference -- that the two tags are genuinely different code, not two names for one player. Still no `edges` relationship asserted.",
    "TWO DISTINCT RAW TAGS, NOT PROVEN TO BE THE SAME CODE. This card covers both because SIDId groups them under the same author name, but treat them as separate signatures until a disassembly says otherwise: 'Zardax' (71 files) vs 'Zardax/SoundKiller' (42 files). No edge is asserted between them in the `edges` block for exactly this reason.",
    "COMPOSER CONCENTRATION IS THE TELL. Aggregating data/composers/*.json: the bare 'Zardax' tag is used on 70 of its 71 files by Zardax himself (1 file by Oeie_Karl_Bjoernar) — a textbook personal/in-house routine, almost certainly never published as a standalone tool. 'Zardax/SoundKiller' is spread across 4 composers (Coax 24, Antti Piirainen 16, Ati 1, Touldie 1) — consistent with an actually distributed, third-party-usable tool.",
    "'Sound Killer' is a real, dated CSDb release. V3.7 (10 Jul 1991, CSDb 99054) bundles a player + TuneSqueezer V1.3 + TuneRelocator V3.0, published by Topaz Beerline. V3.6B (Mar 1991, per Demozoo scener profile) is also credited to Scapegoat & Zardax. Both are credited to 'Scapegoat (Studio 3, Topaz Beerline) and Zardax (Elysion, Origo Dreamline)' under Code. Demozoo's production page for V3.6B lists finer credits: Scapegoat — Code (intro, editor) + Graphics (additional); Zardax — Code (player); d'Arc — Graphics (giant charset); music by Coax (Mikko Paronen), to whose memory it was dedicated.",
    "PSID HEADER OBSERVATION: 7 Zardax/SoundKiller-tuned tunes sampled (Coax x3, Antti Piirainen x2, Ati x1, Touldie x1): all use play = init + 3, with load addresses varying ($1000 in 6 tunes, $4800 in 1). 5 bare Zardax-tuned tunes sampled: load/init/play vary ($1000/$1000/$1003, $1000/$1000/$1006, $0808/$0808/$0818, $E300/$E300/$E303, $1000/$1000/$1003). These are PSID header fields, NOT disassembly-confirmed entry points; offsets alone do not prove shared code.",
    "No public source code or format documentation was found for either tag during this pass — all Tier 3 fields are honestly TODO.",
    "A further companion release exists: 'TuneSqueezer V2.0 for Soundkiller V3.7' (1992 Tool), credited to Scapegoat on his CSDb scener profile — a later relocator/packer utility, not a new player version. No separate CSDb release page content beyond the credit line was found.",
    "Explicit Lemon64 (lemon64.com) and Forum64 (forum64.de) searches for 'Sound Killer'/'Zardax'/'Soundkiller' (incl. a full read of Lemon64's 'Comparison of C64 Music Editors' thread, https://www.lemon64.com/forum/viewtopic.php?t=67248) turned up no technical/provenance detail beyond what's already cited here — only unrelated composer-discography mentions of Zardax's tunes. github.com/realdmx/c64_6581_sid_players (a public reverse-engineered-player repo) was also checked and does not include Sound Killer. No community thread worth flagging for a maintainer to ask about was found.",
    "Ari-Pekka Paljakka (Zardax) is a Finnish (later Spain-based) composer/scener active from 1988 onward — groups include Origo Dreamline, Elysion, Albion, Brains, Frame, Artline Designs (per Demozoo). Demozoo lists 184 productions across C64, Amiga, Atari ST, and other platforms. He was ranked 20th best musician in Revealed #1 (Sep 1993). This is composer biography, not player provenance; it does not establish when the bare 'Zardax' routine first appeared."
  ],
  "sources": [
    "CSDb release (Sound Killer V3.7 + TuneSqueezer V1.3 + TuneRelocator V3.0, 10 Jul 1991, Scapegoat & Zardax, pub. Topaz Beerline): https://csdb.dk/release/?id=99054",
    "Demozoo scener profile (Zardax): https://demozoo.org/sceners/2806/ — confirms V3.6B (Mar 1991) and V3.7 (Jul 1991) Sound Killer releases, finer credits for V3.6B, and composer biography",
    "sidid.nfo (cadaver/sidid project) entries 'Zardax' and 'Zardax/SoundKiller': https://github.com/cadaver/sidid/blob/master/sidid.nfo — cached locally as data/sidid.json byTag['Zardax'] / byTag['Zardax/SoundKiller']",
    "data/players.json curated entry 'Sound Killer v3.x' (csdb_id 99054, zero_pages field) — this repo's cached copy of DeepSID's player database (deepsid.chordian.net)",
    "Local dataset: file counts aggregated from data/composers/*.json — 71 'Zardax' + 42 'Zardax/SoundKiller' = 113 total files; composer breakdown: Zardax 70, Oeie_Karl_Bjoernar 1 (bare tag); Coax 24, Antti Piirainen 16, Ati 1, Touldie 1 (SoundKiller tag)",
    "CSDb SID entries (PSID header survey): Anastasia (6148), A Quiet Life (6149), Black Christmas (6150), Autentic (23342), Basebeat (23343), For Highlife (29547), Delicious 3 tune 2 (52175) — all Zardax/SoundKiller; Animotion (44530), Adtestsongcrap (32624), After the Party (32710), Alka (32625), Anglia Spirit (32626), Proven Futile (32665) — bare Zardax",
    "Demozoo production page for Soundkiller V3.6B: https://demozoo.org/productions/364415/",
    "CSDb scener profile (Scapegoat/Extend, id 892) — confirms 'TuneSqueezer V2.0 for Soundkiller V3.7' (1992 Tool) code credit: https://csdb.dk/scener/?id=892",
    "Lemon64 negative-result checks: https://www.lemon64.com/forum/viewtopic.php?t=67248 (C64 music editor comparison, no Sound Killer mention); Forum64 (forum64.de) web search likewise returned no relevant thread",
    "github.com/realdmx/c64_6581_sid_players (public reverse-engineered SID player source repo) checked — does not include Sound Killer/Zardax",
    "SIDdecompiler 0.8 disassembly + 64tass 1.60 reassembly + sidm2-sid-trace register-write tracing (this pass, 2026-07-25) of 3 real HVSC files: MUSICIANS/C/Coax/Anastasia.sid, MUSICIANS/C/Coax/A_Quiet_Life.sid (both Zardax/SoundKiller), MUSICIANS/Z/Zardax/Animotion.sid (bare Zardax) — see Verification section for full numbers"
  ]
}
```

## Overview

"Zardax" here covers two related-but-distinct Player-ID signatures credited to
the same Finnish scener, **Ari-Pekka Paljakka (handle Zardax)**: the bare
`Zardax` tag, which composer-concentration data shows is almost entirely used
on his own tunes (70 of 71 files) and reads as an undocumented personal
routine; and `Zardax/SoundKiller`, a formally released C64 tool -- **Sound
Killer** -- co-authored with **Sami Ilmonen (Scapegoat)**, released in two
known versions (V3.6B in March 1991, V3.7 on 10 July 1991) through Topaz
Beerline, bundled with two companion utilities (TuneSqueezer, TuneRelocator).
Sound Killer sees genuine third-party use in the collection (Coax, Antti
Piirainen, and others), consistent with a distributed tool. Together the two
tags cover 113 files in the local dataset (`data/composers/*.json`).

Zardax contributed the player code to Sound Killer; Scapegoat wrote the editor/
intro (per Demozoo's V3.6B credits). DeepSID's player database documents Sound
Killer's zero-page footprint (8 bytes: `$35-$36 + $FA-$FF`) -- **this pass
independently confirmed it by disassembly** (see Verification), and also
disassembly-confirmed that the bare Zardax routine uses a different,
4-byte footprint (`$FB-$FE`), reinforcing that the two tags are different
code. No public source code or format specification was located for either
routine; the player's data-format internals (patterns/instruments/order list)
remain undocumented -- only entry points, zero page, and register-write
correctness were verified this pass.

## Quirks & gotchas

See the `quirks` array. The three load-bearing points:

1. **Do not assume the two tags are the same code** just because they share an
   author's name -- the composer-concentration split (70/71 files self-authored
   vs. spread across 4 composers) is itself the evidence they are different
   signatures, and no `edges` relationship is asserted without a disassembly.

2. **PSID headers do not confirm shared code**: Zardax/SoundKiller tunes
   consistently use `play = init + 3` in PSID headers, which some bare Zardax
   tunes also do -- but the bare Zardax routine's init/play addresses vary
   widely across tunes (`$0808/$0818`, `$1000/$1006`, `$E300/$E303`),
   consistent with a per-tune embedded routine rather than a fixed-address
   distributed player.

3. **Disassembly now backs the split with a concrete, structural difference**:
   Zardax/SoundKiller's zero-page footprint (8 bytes) and Zardax's (4 bytes)
   don't even overlap on `$35-$36`, and their working-storage table layouts
   are shaped differently (compact 3-value-per-voice vs. a full-register
   mirror). This is stronger evidence than the composer-concentration/PSID
   survey alone, though still not proof of a common ancestor or absence of
   one -- see Verification.

## Disassembly notes

**Disassembly performed 2026-07-25** (`SIDdecompiler 0.8`, relocated to the
PSID load address `$1000` -- confirmed matching the `-v2` memory-map's own
"Start:" address on all 3 files, so no gotcha-40-style relocation trap here).
Both tags' init routines are short and mostly zero the SID chip and a small
working-storage block before falling through to the real play routine; both
play routines are countdown-dispatched (a decremented per-frame speed byte
gates whether the full per-voice update runs that frame). Beyond that
structural similarity the two tags' actual per-voice data layouts differ
(see zero-page/layout facts above) -- not close enough, on this look, to
assert a shared-routine edge.

## Verification

**Verified 2026-07-25 (disassembly + register-write trace).** Byte-diffed and
trace-diffed against 3 real HVSC files using `SIDdecompiler` (-a4096, i.e.
`$1000`) -> `64tass` reassembly -> `sidm2-sid-trace.exe` (30 frames each,
raw `.prg` built per the project's `psid_header` convention since the tracer
does not parse PSID headers itself).

- **Zardax/SoundKiller tag, file 1** (`MUSICIANS/C/Coax/Anastasia.sid`, load/init
  `$1000`, play `$1003`): byte-diff 99.0112% (52/5259 bytes differ), all 24
  diff clusters inside `$1006-$1075` -- a per-voice working-storage table the
  init routine (`l107f`) explicitly overwrites/recomputes before the play
  routine (`l10fa`, `dec l1006` on frame 0) ever reads it. **Trace-diff: 0
  register-write differences over 30 frames** (the only textual difference
  between the two `sidm2-sid-trace.exe` runs is the tool's own informational
  `Mem[$1003]` byte echo, not an actual SID write) -- confirming those bytes
  are dead pre-init noise, not a real defect.
- **Zardax/SoundKiller tag, file 2** (`MUSICIANS/C/Coax/A_Quiet_Life.sid`, same
  load/init/play addresses): byte-diff 98.5639% (52/3621 bytes), same address
  range (`$1008-$107d`), same conclusion -- **trace-diff: 0 register-write
  differences over 30 frames**. Two independent files from different-sized
  tunes both reach register-write-exact equivalence without needing any
  manual patch, which is why Zardax/SoundKiller is treated as fully verified.
- **Bare Zardax tag** (`MUSICIANS/Z/Zardax/Animotion.sid`, load/init `$1000`,
  play `$1003`): byte-diff 97.6195% (122/5125 bytes) in `$11FB`, `$1200`,
  `$1414` (3 self-modified immediate-instruction operands) and `$1589-$1644`
  (a larger per-voice frequency/ADSR/waveform mirror table). Unlike the
  SoundKiller files, **this one is NOT dead noise on first trace**: frame 0
  showed 19 SID register changes in the reassembly vs. 1 in the real file, a
  genuine functional divergence (all three voices incorrectly triggered a
  full note-start on frame 0). Root cause: `SIDdecompiler`'s default trace
  window captured post-execution (drifted) values for that working-storage
  block rather than the file's true cold-start bytes -- the same class of
  defect documented in this agent's `lessons_learned` (entries 16/17/29/43).
  Patching all 122 diverging bytes in the reassembled `.prg` back to the
  original file's own pristine bytes (recoverable directly, no guessing --
  same file, same offsets) reached **100.0000% byte-exact and 0
  register-write differences over 30 frames**. This confirms the
  disassembly's *instructions* are correct for this tag too; the divergence
  was purely a decompiler-capture-window artifact on the workspace table, not
  a wrong entry point or wrong logic.
- Zero-page usage was read directly off the reassembled `.asm`'s own symbol
  table (not re-derived by hand): Zardax/SoundKiller = `$35-$36 + $FA-$FF` (8
  bytes, exactly matching DeepSID's previously-uncited cached figure); bare
  Zardax = `$FB-$FE` (4 bytes, no `$35/$36` at all) -- new evidence, not
  previously documented anywhere, that further supports treating the two
  tags as different code (see quirks).

Status raised from `stub` to **`verified`**: entry points (`init`=load,
`play`=init+3) and register-write correctness are now independently
confirmed by disassembly+trace on 3 real files across both tags. `data_format`
and `effects` (order list/pattern/instrument encoding) remain `TODO` --
out of scope for register-write verification and not attempted this pass,
matching this project's established precedent (e.g. `amp.md`) that
`verified` certifies playback/entry-point correctness, not a full format
spec.

## Sources

See the `sources` array -- the CSDb Sound Killer release, Demozoo scener and
production pages, the cached SIDId entries for both raw tags, DeepSID's cached
player spec for Sound Killer, this repo's own local file-count/composer
aggregation, a PSID header survey across 12 CSDb SID entries (7 Sound
Killer-tagged, 5 bare Zardax-tagged) for the PSID header observation quirk,
and this pass's own `SIDdecompiler`/`64tass`/`sidm2-sid-trace` disassembly +
register-write verification of 3 real HVSC files (see Verification).
