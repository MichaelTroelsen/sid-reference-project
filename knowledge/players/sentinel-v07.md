# Sentinel Music Player and Editor V07.G0

```json
{
  "id": "sentinel-v07",
  "name": "Sentinel Music Player and Editor V07.G0",
  "aliases": ["Sentinel_V0.7"],
  "authors": ["Sentinel"],
  "released": "1 March 2020, self-released",
  "status": "stub",
  "platform": "Native C64 music composition/playback tool, distributed as a disk image. Also known as 'Kemeny-Dio Editor V02.00' per CSDb.",
  "csdb_release": 202684,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId and CSDb agree cleanly: SIDId gives name 'Sentinel Music Player V07.G0', author 'Sentinel', released 2020, reference CSDb release 202684. CSDb's own page names it fully 'Sentinel Music Player and Editor V07.G0', released 1 March 2020, code+music both by 'Sentinel' (an individual scener, CSDb scener id 22185/Scener id 19828, Hungary) — a modern (2020), independently-released tool.",
    "CSDb also records the alternate title 'Kemeny-Dio Editor V02.00' for the same release. Direct census (below) confirms this is the 5th tool in a self-authored lineage of editors: the same scener's own CSDb 'Released' list additionally shows 'Kemeny Dio Editor V1.0' (release 156925, AKA 'KMD Editor V1.0', no date recorded) and 'Poen Editor V01.G0' (release 156949, 1994); his 'Credits' list additionally shows 'Sentinel Composer V1.0' AKA 'Poen Editor' (release 156924, 1994, Code credit) and 'Sentinel Music Editors V4.Gx' (release 206967, 1995 — the sibling card `sentinel-v04.md`, Code credit). The V02.00 vs V1.0 naming under the same 'Kemeny(-)Dio Editor' title is suggestive of a version lineage, but no release page or scrolltext states a derivation in words, so no `edges` entry is asserted here — naming/authorship resemblance alone is not evidence per this project's rules. Source: CSDb webservice release 202684 depth=3, `ReleasedBy.Handle.Released`/`Credits` sub-trees.",
    "Census of all 5 locally-tagged files (data/composers/cherubs-sentinel.json: 8x_Compo_Music/58895, Poison/58892, Soundkit_01/58894, Test_01/58891, Test_Music/58893) queried directly against CSDb's XML webservice: all 5 carry `UsedIn` -> release 202684, and are exactly the 5 SIDs listed in that release's own `UsedSIDs` block — a complete, non-inferred match between the local tag census and the CSDb tool release. Each file's own `Released` field independently reads '2020 Sentinel'.",
    "PSID header fields read directly from the CSDb sid records (header metadata only, not a disassembly result): 4 of the 5 files share LoadAddr $3000/12288, InitAddr $3000/12288, PlayAddr $3003/12291; the 5th ('8x_Compo_Music', csdb id 58895) differs — LoadAddr $2FDB/12251, InitAddr $2FDB/12251, PlayAddr $2FEE/12270 — suggesting either a differently-assembled bundle track or an example built at a different point than the other four. All 5 report SIDModel 8580, PAL.",
    "The release's download link file is 'STL'S V07.g0.disk1.zip', 130 downloads as of this research (was captured as 128 in an earlier pass — count increases over time, not a discrepancy).",
    "The releasing scener (CSDb id 22185) is recorded as an ex-member of two Hungarian groups: Lethargy (LTH) and Cherubs (CHB, dissolved 1995) — consistent with the local composer folder name 'Cherubs_Sentinel' (composer's own DeepSID profile lists no `affiliation` field). No group is credited as the *releaser* of 202684 itself; SIDId/CSDb both attribute the tool to the individual scener, not a group release.",
    "All 5 locally-tagged files are by the same composer, 'Cherubs Sentinel' — i.e. the author using his own tool, consistent with a young/personal but genuinely released and named tool (has a proper versioned title and CSDb tool page, unlike most other tags in this batch)."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Sentinel_V0.7'])",
    "CSDb release 'Sentinel Music Player and Editor V07.G0' (1 Mar 2020, scener Sentinel, alt title 'Kemeny-Dio Editor V02.00'), fetched via XML webservice depth=3: https://csdb.dk/webservice/?type=release&id=202684&depth=3 (HTML: https://csdb.dk/release/?id=202684)",
    "CSDb release 156925 'Kemeny Dio Editor V1.0' (earlier same-author tool, naming-lineage note only, no edge asserted): https://csdb.dk/webservice/?type=release&id=156925&depth=2",
    "CSDb scener profile, Sentinel (Hungary), CSDb id 22185: https://csdb.dk/scener/?id=22185",
    "Local dataset: 5 files tagged Sentinel_V0.7, 1 composer (Cherubs Sentinel), all 5 cross-checked individually against CSDb's UsedSIDs for release 202684 — data/composers/cherubs-sentinel.json"
  ]
}
```

## Overview

`Sentinel_V0.7` is SIDId's tag for the **Sentinel Music Player and Editor
V07.G0**, a native C64 composition/playback tool self-released 1 March 2020
by scener "Sentinel" (CSDb scener id 22185, Hungary), also carrying the
alternate title "Kemeny-Dio Editor V02.00". A full census of all 5
locally-tagged files (data/composers/cherubs-sentinel.json) against CSDb's
XML webservice confirms an exact, non-inferred match with the release's own
bundled-SIDs list (release 202684) — this is not an inference from a
webpage description. The releasing scener's own CSDb catalog shows this is
the latest of a family of self-authored editors going back to "Kemeny Dio
Editor V1.0" (1994-ish, release 156925) and including the sibling-carded
"Sentinel Music Editors V4.Gx" (`sentinel-v04.md`, release 206967, 1995) —
a naming/authorship lineage worth noting, but with no stated derivation in
any release text, so no `edges` entry is asserted. All 5 locally-tagged
files are by the author himself ("Cherubs Sentinel", also an ex-member of
Hungarian groups Lethargy and Cherubs).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) unusually well-documented for its
size — a genuine, versioned, dated (2020) tool release, not just a bare
Player-ID signature, now with a complete file-level census confirming the
CSDb release match; (2) an alternate internal name, "Kemeny-Dio Editor
V02.00", that fits a naming pattern with the author's own earlier tools but
is not directly documented as a derivation; (3) still single-composer
concentration (5/5 files, the author himself) despite being a real released
tool; (4) one of the 5 bundled files has different PSID header addresses
than the other four (header metadata only, see quirks array).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found (a disk-image download
exists on CSDb — `STL'S V07.g0.disk1.zip` — but was not inspected here). The
PSID header addresses recorded in `quirks` are metadata read from CSDb's sid
records, not a disassembly result, and must not be promoted into `entry`/
`memory` without an actual reassembly.

## Verification

Not verified. Seeded from `data/sidid.json`, a full census of all 5
`Sentinel_V0.7`-tagged files in `data/composers/*.json` cross-checked
individually against CSDb's XML webservice, and the CSDb release page
(202684, depth=3). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 202684 (XML
webservice, depth=3), CSDb release 156925 (naming-lineage note only), the
CSDb scener profile, and the local composer aggregation with a full
per-file cross-check.
