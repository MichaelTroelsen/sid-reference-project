/**
 * Simple JSON-file cache.
 *
 * Every fetched object gets written to disk immediately, so the whole
 * pipeline is safely interruptible and resumable — re-running fetch
 * scripts will skip anything already cached unless --refresh is passed.
 */

const fs = require('fs');
const path = require('path');

function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJSON(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.warn(`  ! Corrupt cache file, ignoring: ${filePath}`);
    return null;
  }
}

function writeJSON(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { slugify, ensureDir, readJSON, writeJSON };
