/**
 * CSDb webservice client
 *
 * Wraps csdb.dk's public webservice (csdb.dk/webservice/), documented at
 * that URL: "for private use, or to make some of the information in
 * CSDb available on other websites." No auth, no documented rate limit —
 * this client self-throttles anyway, same courtesy as deepsid-client.js.
 *
 * Endpoints (all via ?type=<type>&id=<id>&depth=<n>):
 *   type=scener   -> a demoscene person ("scener"), keyed by CSDb Handle ID
 *                     (this is exactly the `csdb_id` field already present
 *                     on DeepSID composer profiles — no separate lookup
 *                     needed to join the two sources)
 *   type=group    -> a demoscene group
 *   type=release  -> a release (demo, game, etc)
 *   type=sid      -> a single SID music file entry
 *   type=event    -> a scene event/party
 *   type=bbs      -> a bulletin board system
 *
 * depth controls how deep nested entries (e.g. a scener's group
 * memberships) get expanded; CSDb caps this at 4. Default 2 here mirrors
 * the webservice's own default.
 *
 * Response format is XML only (no JSON mode) — parsed with
 * fast-xml-parser into a plain object. Malformed/unrecognized IDs return
 * a bare "huh" (not XML), which this client treats as an error rather
 * than trying to parse it.
 */

const { XMLParser } = require('fast-xml-parser');

const BASE_URL = 'https://csdb.dk/webservice/';
const RATE_LIMIT_MS = 400; // same self-imposed courtesy as deepsid-client.js
const USER_AGENT = 'sid-reference-project/1.0 (personal HVSC research tool)';

const parser = new XMLParser({ ignoreAttributes: true, trimValues: true });

let lastRequestTime = 0;

async function throttle() {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < RATE_LIMIT_MS) {
    await new Promise((r) => setTimeout(r, RATE_LIMIT_MS - elapsed));
  }
  lastRequestTime = Date.now();
}

async function csdbGet(type, id, { depth = 2, retries = 2 } = {}) {
  await throttle();
  const url = `${BASE_URL}?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}&depth=${depth}`;
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} for ${url}`);
      }
      const text = await res.text();
      if (!text.trim().startsWith('<?xml')) {
        throw new Error(`CSDb API error for ${url}: unrecognized response "${text.trim().slice(0, 100)}"`);
      }
      const parsed = parser.parse(text);
      if (!parsed.CSDbData) {
        throw new Error(`CSDb API error for ${url}: no CSDbData root in response`);
      }
      return parsed.CSDbData;
    } catch (err) {
      lastErr = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 800 * (attempt + 1)));
        continue;
      }
    }
  }
  throw lastErr;
}

/** Fetch a scener (person) by CSDb Handle ID — this is DeepSID profiles' csdb_id field. */
async function getScener(id, opts) {
  return csdbGet('scener', id, opts);
}

/** Fetch a demoscene group by CSDb group ID. */
async function getGroup(id, opts) {
  return csdbGet('group', id, opts);
}

/** Fetch a release (demo, game, etc) by CSDb release ID. */
async function getRelease(id, opts) {
  return csdbGet('release', id, opts);
}

/** Fetch a single SID music file entry by CSDb sid ID. */
async function getSidRelease(id, opts) {
  return csdbGet('sid', id, opts);
}

module.exports = {
  csdbGet,
  getScener,
  getGroup,
  getRelease,
  getSidRelease,
  BASE_URL,
  RATE_LIMIT_MS,
};
