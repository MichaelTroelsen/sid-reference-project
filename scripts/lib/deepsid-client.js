/**
 * DeepSID API client
 *
 * Wraps the undocumented but fully functional DeepSID REST API
 * (source: https://github.com/Chordian/deepsid/blob/master/api/v1.php)
 *
 * Endpoints:
 *   ?file=<path ending in .sid>   -> single SID file metadata
 *   ?file=<path ending in />      -> folder metadata + array of files
 *   ?folder=<path ending in />    -> folder metadata + array of subfolders only
 *   ?profile=<path ending in />   -> composer profile (bio, photo, country, dates...)
 *   ?players                      -> full players/editors database
 *
 * No auth required. Be a good citizen: this client rate-limits itself
 * by default (RATE_LIMIT_MS between requests) since DeepSID is a free
 * community service run by one person (JCH), not an enterprise API.
 */

const BASE_URL = 'https://deepsid.chordian.net/api/v1.php';
const RATE_LIMIT_MS = 400; // minimum delay between requests
const USER_AGENT = 'sid-reference-project/1.0 (personal HVSC research tool)';

let lastRequestTime = 0;

async function throttle() {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < RATE_LIMIT_MS) {
    await new Promise((r) => setTimeout(r, RATE_LIMIT_MS - elapsed));
  }
  lastRequestTime = Date.now();
}

/**
 * Low-level fetch wrapper with throttling, retry, and clear errors.
 */
async function apiGet(params, { retries = 2 } = {}) {
  await throttle();
  const url = `${BASE_URL}?${params}`;
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} for ${url}`);
      }
      const text = await res.text();
      // DeepSID returns {"error":"..."} for unsupported paths (CGSC, SID Happens, etc.)
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseErr) {
        throw new Error(`Non-JSON response for ${url}: ${text.slice(0, 200)}`);
      }
      if (json && json.error) {
        throw new Error(`DeepSID API error for ${url}: ${json.error}`);
      }
      return json;
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

/** Fetch a single SID file's metadata. Path must end in .sid */
async function getFile(path) {
  const clean = path.replace(/^\/+/, '');
  return apiGet(`file=${encodeURIComponent(clean)}`);
}

/** Fetch a folder + all SID files inside it. Path must end in / */
async function getFolder(path) {
  const clean = path.replace(/^\/+/, '').replace(/\/?$/, '/');
  return apiGet(`file=${encodeURIComponent(clean)}`);
}

/** Fetch a folder + only its subfolders (no files listed). Path must end in / */
async function getSubfolders(path) {
  const clean = path.replace(/^\/+/, '').replace(/\/?$/, '/');
  return apiGet(`folder=${encodeURIComponent(clean)}`);
}

/** Fetch a composer's profile (bio, country, dates, thumbnail, etc). Path must end in / */
async function getProfile(path) {
  const clean = path.replace(/^\/+/, '').replace(/\/?$/, '/');
  return apiGet(`profile=${encodeURIComponent(clean)}`);
}

/** Fetch the entire players/editors database. */
async function getAllPlayers() {
  return apiGet('players');
}

module.exports = {
  getFile,
  getFolder,
  getSubfolders,
  getProfile,
  getAllPlayers,
  BASE_URL,
  RATE_LIMIT_MS,
};
