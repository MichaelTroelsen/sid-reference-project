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

/** Loose comparison — DeepSID says "United Kingdom", HVSC says "UNITED KINGDOM (ENGLAND)". */
function countriesRoughlyMatch(a, b) {
  if (!a || !b) return true; // nothing to compare, don't flag a false mismatch
  const na = a.trim().toUpperCase();
  const nb = b.trim().toUpperCase();
  return na.includes(nb) || nb.includes(na) || na.startsWith(nb.split(' ')[0]) || nb.startsWith(na.split(' ')[0]);
}

module.exports = { HVSC_MUSICIANS_PATH, loadHvscMusicians, findHvscMatch, countriesRoughlyMatch };
