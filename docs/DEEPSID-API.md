# DeepSID REST API v1

Undocumented publicly, but real and stable. This is reverse-engineered
from DeepSID's own source, `api/v1.php` in
[Chordian/deepsid](https://github.com/Chordian/deepsid/blob/master/api/v1.php)
on GitHub — not guessed from response shapes. Base URL:

```
https://deepsid.chordian.net/api/v1.php
```

No auth. One query parameter per request — `file`, `folder`, `profile`,
or `players` — the API picks a mode based on whichever is set. All
responses are JSON. On failure, the response is `{"error": "..."}`
(usually with an HTTP 200, except the "no recognized parameter" case,
which returns HTTP 400).

Every endpoint (except `players`) resolves your path against a private
collection prefix DeepSID prepends server-side — normally
`_High Voltage SID Collection/`. You never send that prefix yourself;
just use paths as they appear in DeepSID URLs, e.g. `/MUSICIANS/C/Cadaver/`.

Four collections are explicitly unsupported and always return an error
before any DB lookup happens, regardless of which parameter you use:
**Compute's Gazette SID Collection** (or any `.mus` file), **SID Happens**,
**Exotic SID Tunes Collection**, and **CSDb Music Competitions**.

## `?file=<path>`

Two different response shapes depending on whether the path ends in
`.sid` or `/`.

**Single file** (`?file=/MUSICIANS/C/Cadaver/Aliens_Ate_My_Buick.sid`):

```json
{
  "collection_path": "...",
  "player": "...",
  "lengths": "...",
  "type": "...",
  "version": "...",
  "player_type": "...",
  "player_compat": "...",
  "clock_speed": "...",
  "sid_model": "...",
  "data_offset": 0,
  "data_size": 0,
  "load_addr": 0,
  "init_addr": 0,
  "play_addr": 0,
  "subtunes": 0,
  "start_subtune": 0,
  "name": "...",
  "author": "...",
  "copyright": "...",
  "hash": "...",
  "stil": "...",
  "new": 0,
  "updated": "...",
  "csdb_type": "...",
  "csdb_id": 0
}
```

**Folder** (`?file=/MUSICIANS/C/Cadaver/`, path ends in `/`) — folder
metadata plus every `.sid` file directly inside it (one DB query per
file; a handful of known non-tune entries like `DOCUMENTS`, `UPDATE`,
and HVSC's bundled `.d64`/readme/util files are filtered out first):

```json
{
  "folder": "<collection_path>",
  "type": "...",
  "files": 12,
  "hash": "...",
  "incompatible": 0,
  "new": 0,
  "flags": "...",
  "0": { "collection_path": "...", "player": "...", "name": "...", "author": "...", "...": "..." },
  "1": { "...": "..." }
}
```

Files are keyed by numeric index (`0`, `1`, `2`, ...), same 24-field
shape as the single-file response above.

## `?folder=<path>`

Folder metadata plus **every subfolder at any depth**, not just direct
children — this is the important one to understand. The server matches
subfolders with:

```sql
SELECT * FROM folders WHERE collection_path LIKE '%<requested_path>/%'
```

A `LIKE '%...%'` with no depth bound matches any row whose
`collection_path` *contains* the requested path as a substring —
including grandchildren, great-grandchildren, etc. So a single
`?folder=/MUSICIANS/` call returns every letter directory (`A/`, `B/`,
... `0-9/`) *and* every composer directory beneath them *and* any
deeper subfolders, all flattened into one response. This project's
`scripts/build-seed-from-hvsc.js` relies on exactly this behavior to
build a full composer list in one request instead of walking the tree
letter-by-letter.

```json
{
  "folder": "<collection_path>",
  "type": "...",
  "files": 0,
  "hash": "...",
  "incompatible": 0,
  "new": 0,
  "flags": "...",
  "subfolders": 1850,
  "0": { "folder": "<collection_path>", "type": "...", "files": 12, "hash": "...", "incompatible": 0, "new": 0, "flags": "..." },
  "1": { "...": "..." }
}
```

Subfolder entries do **not** include a human-readable composer name —
only `folder` (the full collection path), `type`, `files` (count),
`hash`, `incompatible`, `new`, `flags`. Derive a display name from the
last path segment yourself; see `build-seed-from-hvsc.js` for the
`Lastname_Firstname` → `Firstname Lastname` heuristic HVSC folder names
usually follow.

Note this endpoint never lists individual `.sid` files, even for the
requested folder itself — only folder-level metadata (`files` is just a
count). Use `?file=<path>/` instead when you need the actual file list.

## `?profile=<path>`

Composer bio/metadata. Path should be a `MUSICIANS/` folder path (with
or without leading/trailing slashes — trimmed server-side).

```json
{
  "collection_path": "...",
  "focus1": "...",
  "focus2": "...",
  "full_name": "...",
  "short_name": "...",
  "handles": "...",
  "short_handle": "...",
  "active": "...",
  "date_birth": "YYYY-MM-DD",
  "date_death": "YYYY-MM-DD",
  "death_cause": "...",
  "notable": "...",
  "country": "...",
  "employment": "...",
  "affiliation": "...",
  "brand_light": "https://... or ''",
  "brand_dark": "https://... or ''",
  "csdb_type": "...",
  "csdb_id": 0,
  "thumbnail": "https://deepsid.chordian.net/images/composers/....jpg",
  "image_source": "..."
}
```

`thumbnail` always resolves to *something* — DeepSID falls back to a
generic `/images/composer.png` server-side if no dedicated image file
exists on disk, so you can't use its presence to infer "has a real
photo."

## `?players`

The entire players/editors database in one request — no filtering, no
pagination, no way to request a subset. Response is a flat array (keyed
`0`, `1`, `2`, ...) of ~40-field objects:

```json
[
  {
    "title": "...", "search": "...", "description": "...",
    "developer": "...", "start_year": "...", "end_year": "...",
    "site": "...", "csdb_id": 0, "platform": "...",
    "distribution": "...", "encoding": "...", "source_code": "...",
    "docs": "...", "example_tunes": "...", "sid_chip_count": "...",
    "channels_visible": "...", "speeds": "...", "digi": "...",
    "aux_support": "...", "import_from": "...", "save_to": "...",
    "packer": "...", "relocator": "...", "load_save_snd": "...",
    "instruments": "...", "subtunes": "...", "noteworthy": "...",
    "player_size": "...", "zero_pages": "...", "cpu_time": "...",
    "arpeggio": "...", "pulsating": "...", "filtering": "...",
    "vibrato": "...", "hard_restart": "...", "track_system": "...",
    "patterns": "...", "follow_play": "...", "copy_paste": "...",
    "undoing": "...", "track_cmds": "...", "note_input": "..."
  }
]
```

Many fields are legitimately sparse — see the "Why this exists" section
of the top-level README for how `find-gaps.js` uses that.

## Error responses

Every branch is wrapped in one outer `try`/`catch` around the DB
connection. If the DB is unreachable for *any* reason, every endpoint
(including `?players`, though in practice we've only observed `?file=`
and `?folder=` fail) returns:

```json
{"error": "Could not connect to the DeepSID database"}
```

with an HTTP 200 status — always check for the `error` key, don't rely
on the HTTP status code except for the "missing parameter" 400 case.
`scripts/lib/deepsid-client.js`'s `apiGet()` already does this check for
you and throws on `error`.

## Rate limiting

None enforced server-side, as far as this source shows — no throttling,
no API key, no request logging visible in this file. That's exactly why
`deepsid-client.js` self-imposes a 400ms delay between requests: this is
a free service run by one person, and nothing stops us from hammering it
except our own restraint.
