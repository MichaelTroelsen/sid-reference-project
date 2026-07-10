/**
 * Minimal mysqldump INSERT-statement parser.
 *
 * DeepSID publishes a full database export (github.com/Chordian/deepsid's
 * README, "Setting up for offline use" section) specifically so people can
 * run their own local/offline copy — this project uses that same export as
 * a local data source (see scripts/import-deepsid-dump.js) instead of
 * standing up a real MySQL server just to read a few tables once.
 *
 * Handles exactly the subset of SQL mysqldump actually produces for this
 * export: `INSERT INTO `table` (`col1`, `col2`, ...) VALUES (...), (...);`
 * with string/number/NULL values, backslash-escaped quotes within strings
 * (mysqldump's default escaping), and multi-row batched INSERTs. Not a
 * general SQL parser — no subqueries, no other statement types, nothing
 * beyond what's needed to read this specific export.
 */

/**
 * Splits a VALUES clause's row list into individual row strings, respecting
 * quoted strings (so commas/parens inside a quoted value don't confuse the
 * split) and backslash escaping.
 */
function splitTopLevelRows(valuesBody) {
  const rows = [];
  let depth = 0;
  let inString = false;
  let start = -1;

  for (let i = 0; i < valuesBody.length; i++) {
    const ch = valuesBody[i];
    if (inString) {
      if (ch === '\\') { i++; continue; } // skip escaped char
      if (ch === "'") inString = false;
      continue;
    }
    if (ch === "'") { inString = true; continue; }
    if (ch === '(') {
      if (depth === 0) start = i + 1;
      depth++;
    } else if (ch === ')') {
      depth--;
      if (depth === 0) rows.push(valuesBody.slice(start, i));
    }
  }
  return rows;
}

/** Splits one row's comma-separated values, same quote/escape awareness as above. */
function splitRowValues(row) {
  const values = [];
  let depth = 0;
  let inString = false;
  let start = 0;

  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (inString) {
      if (ch === '\\') { i++; continue; }
      if (ch === "'") inString = false;
      continue;
    }
    if (ch === "'") { inString = true; continue; }
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      values.push(row.slice(start, i));
      start = i + 1;
    }
  }
  values.push(row.slice(start));
  return values.map(parseSqlValue);
}

function parseSqlValue(raw) {
  const v = raw.trim();
  if (v === 'NULL') return null;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if (v.startsWith("'") && v.endsWith("'")) {
    return v
      .slice(1, -1)
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\n/g, '\n')
      .replace(/\\r/g, '\r')
      .replace(/\\\\/g, '\\');
  }
  return v; // unquoted non-numeric (shouldn't normally happen in a dump)
}

/**
 * Parses every `INSERT INTO `table` (cols) VALUES (...);` statement in a
 * mysqldump file's text for the given table name into an array of row
 * objects keyed by column name (column order/names come from each
 * statement's own column list, so this doesn't need the CREATE TABLE).
 */
function parseInserts(text, tableName) {
  const rows = [];
  const stmtRe = new RegExp(
    '^INSERT INTO `' + tableName + '`\\s*\\(([^)]+)\\)\\s*VALUES\\s*\\r?\\n?([\\s\\S]*?);\\s*$',
    'gm'
  );
  let match;
  while ((match = stmtRe.exec(text))) {
    const columns = match[1].split(',').map((c) => c.trim().replace(/^`|`$/g, ''));
    const valuesBody = match[2];
    for (const rowStr of splitTopLevelRows(valuesBody)) {
      const values = splitRowValues(rowStr);
      const obj = {};
      columns.forEach((col, i) => { obj[col] = values[i]; });
      rows.push(obj);
    }
  }
  return rows;
}

module.exports = { parseInserts };
