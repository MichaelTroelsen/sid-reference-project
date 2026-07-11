/**
 * sidid.js — parser for SIDId's sidid.nfo player database.
 *
 * sidid.nfo ships inside DeepSID's offline bundle (deepsid_dl/sidid.nfo) and
 * is the SIDId project's human-readable player index: for each raw player
 * tag (the same free-text tags DeepSID stamps on files, e.g. "AMP",
 * "OxyMod/THCM", "DMC") it may list a proper NAME, AUTHOR, RELEASED
 * year/publisher, a CSDb REFERENCE, and a free-text COMMENT — the comment
 * often describes the actual playback technique (the genuinely rare, useful
 * part). This fills in exactly the spec data DeepSID's own curated database
 * lacks for the hundreds of player tags it never wrote up (see
 * deriveSyntheticPlayers() in the template — the "inferred" players).
 *
 * Encoding landmine: the file is ISO-8859-1, not UTF-8 (accented author
 * names like "Otto Järvinen") — callers MUST decode it as latin1 before
 * handing the text here, the same trap as the HVSC docs (see
 * fetch-hvsc-docs.js's downloadText).
 *
 * Format — a tag header at column 0, then column-aligned, right-justified
 * field lines, then a blank line before the next entry:
 *
 *   AMP
 *        NAME: Advanced Music Programmer
 *      AUTHOR: Andrew Miller (Burton)
 *    RELEASED: 1989 Hitech Studio Designs
 *   REFERENCE: https://csdb.dk/release/?id=35519
 *     COMMENT: free text that may wrap onto
 *              further indented continuation lines
 *
 * All five fields are optional and vary entry to entry (some have only a
 * COMMENT, some only an AUTHOR).
 */

// Field keys are right-justified to a 9-char column, so up to 6 leading
// spaces precede the shortest key ("NAME"). Anything at column 0 that
// isn't one of these keys is treated as a tag header instead.
const FIELD_RE = /^\s{0,6}(NAME|AUTHOR|RELEASED|REFERENCE|COMMENT):\s?(.*)$/;

function parseSididNfo(text) {
  const byTag = {};
  let cur = null;
  let curField = null;
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) {
      curField = null; // blank line ends the current entry's open field
      continue;
    }
    const m = line.match(FIELD_RE);
    if (m && cur) {
      const key = m[1].toLowerCase();
      const val = m[2].trim();
      byTag[cur][key] = byTag[cur][key] ? `${byTag[cur][key]} ${val}` : val;
      curField = key;
    } else if (/^\S/.test(line) && !m) {
      // Column-0 line that isn't a field → a new tag header.
      cur = line.trim();
      byTag[cur] = {};
      curField = null;
    } else if (curField && cur) {
      // Indented continuation of the current field (COMMENT usually wraps).
      byTag[cur][curField] += ` ${line.trim()}`;
    }
  }
  return byTag;
}

module.exports = { parseSididNfo };
