/**
 * Helpers for cross-referencing composers against HVSC's own
 * Musicians.txt (fetched by fetch-hvsc-docs.js into data/hvsc/musicians.json).
 * Shared between build-html.js (to render a verification badge) and
 * find-gaps.js (to report mismatches as a gap worth flagging upstream).
 */

const path = require('path');
const { readJSON } = require('./cache');

const HVSC_MUSICIANS_PATH = path.join(__dirname, '..', '..', 'data', 'hvsc', 'musicians.json');

function loadHvscMusicians() {
  return readJSON(HVSC_MUSICIANS_PATH)?.musicians ?? [];
}

function findHvscMatch(name, musicians) {
  const norm = name.trim().toLowerCase();
  return musicians.find((m) => m.handle && m.handle.trim().toLowerCase() === norm) || null;
}

/**
 * Fallback for composers whose DeepSID name doesn't exact-match an HVSC
 * handle (e.g. HVSC files someone under their real name, "Gallefoss, Glenn
 * Rune", rather than their scene handle). Matches only when every word of
 * `name` appears somewhere in an entry's handle+realName AND exactly one
 * entry qualifies — multiple candidates (e.g. "Randall" matching both a
 * Polish demo composer and an unrelated "Masteller, Randall Don") return
 * null rather than guessing. Used for gap *suggestions* only, never for
 * the "HVSC verified" badge — that stays exact-match to avoid false claims.
 */
function findHvscLooseMatch(name, musicians) {
  const words = name.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return null;
  const candidates = musicians.filter((m) => {
    const haystack = `${m.handle} ${m.realName || ''}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
  return candidates.length === 1 ? candidates[0] : null;
}

// Constituent-country / common-alias table — found while cross-checking
// CSDb country data against DeepSID's: 14 of the 24 COMPOSER_COUNTRY_MISMATCH
// gaps reported at the time were just "England" vs "UNITED KINGDOM" (same
// country, different naming convention), not genuine disagreements. These
// are real, common naming choices across DeepSID/HVSC/CSDb — not a full
// ISO country-code table, just the pairs actually observed causing false
// mismatches in this dataset.
const COUNTRY_ALIASES = {
  ENGLAND: 'UNITED KINGDOM',
  SCOTLAND: 'UNITED KINGDOM',
  WALES: 'UNITED KINGDOM',
  'NORTHERN IRELAND': 'UNITED KINGDOM',
  'GREAT BRITAIN': 'UNITED KINGDOM',
  UK: 'UNITED KINGDOM',
  USA: 'UNITED STATES',
  US: 'UNITED STATES',
  AMERICA: 'UNITED STATES',
  HOLLAND: 'NETHERLANDS',
};
function canonicalCountry(s) {
  const upper = s.trim().toUpperCase();
  return COUNTRY_ALIASES[upper] || upper;
}

/** Loose comparison — DeepSID says "United Kingdom", HVSC says "UNITED KINGDOM (ENGLAND)". */
function countriesRoughlyMatch(a, b) {
  if (!a || !b) return true; // nothing to compare, don't flag a false mismatch
  const na = canonicalCountry(a);
  const nb = canonicalCountry(b);
  if (na === nb) return true;
  return na.includes(nb) || nb.includes(na) || na.startsWith(nb.split(' ')[0]) || nb.startsWith(na.split(' ')[0]);
}

module.exports = { HVSC_MUSICIANS_PATH, loadHvscMusicians, findHvscMatch, findHvscLooseMatch, countriesRoughlyMatch };
