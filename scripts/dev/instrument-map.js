#!/usr/bin/env node
'use strict';
/*
 * instrument-map.js — an observed instrument map, read out of a register trace.
 *
 * Every other instrument-level fact in this project comes from the player's own
 * instrument table: bytes located by a disassembly, then argued about. This
 * reads the other end — what $D400-$D418 actually holds on the frame each note
 * begins — and groups those onsets by ADSR.
 *
 * The technique is borrowed from h2g's `instrmap.py` (Rob Hubbard -> GoatTracker)
 * and rests on one property: ADSR ($D405/$D406) is, in many players, a verbatim
 * per-instrument copy of the instrument record, so it identifies an instrument
 * where waveform cannot (several instruments share a waveform) and pulse cannot
 * (a swept width has no single value).
 *
 * That property is NOT universal, which is the whole reason for the reliability
 * gate below. h2g measured "0 of 1635 corpus records differ" on ONE player
 * family; a player that computes ADSR per note, or modulates it mid-note, has
 * no such key and gets no mapping table out of this tool — only the evidence
 * and a verdict saying so.
 *
 * Usage:
 *   node scripts/dev/instrument-map.js <file.sid> [options]
 *
 * Options:
 *   --frames <n>      Frames per subtune (default 500 = 10s). The tracer's own
 *                     default is 50, which is far too few: a real file needed
 *                     500 to reach 99 onsets.
 *   --song <n>        Trace only this subtune (1-based). Default: every subtune,
 *                     unioned — an instrument used only by subtune 3 otherwise
 *                     reads as "declared but never observed".
 *   --card <id>       Cross-check against knowledge/players/<id>.md's
 *                     `data_format.instrument_layout`, if it has one.
 *   --out <dir>       Write Markdown here (default knowledge/instrument-maps).
 *   --stdout          Write the Markdown to stdout instead of a file.
 *   --json            Emit the raw result object instead of Markdown.
 *   --min-onsets <n>  Below this, the verdict is `insufficient-data` rather
 *                     than a judgement (default 30).
 *   --vsid <path>     Passed through to vsid-trace.js.
 *   --index           Regenerate knowledge/instrument-maps/README.md and exit.
 *   --self-test       Check the offset math and onset detection, and exit.
 *   -h, --help        Show this help.
 *
 * See scripts/dev/README.md.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..', '..');
const TRACER = path.join(__dirname, 'vsid-trace.js');
const DEFAULT_OUT = path.join(REPO, 'knowledge', 'instrument-maps');

// Frames of each note to profile. Eight covers a two-stage attack and a short
// noise tick, which is what distinguishes instruments that share an onset.
const PROFILE_FRAMES = 8;

// A swept pulse would make one instrument look like dozens, so widths are
// bucketed. 12-bit register in sixteenths: coarse enough to be stable, fine
// enough to tell a narrow pulse from a square.
const PULSE_BUCKET = 0x100;

// Per-voice register offsets from $D400.
const VOICE = [
  { ctrl: 4,  ad: 5,  sr: 6,  fLo: 0,  fHi: 1,  pLo: 2,  pHi: 3  },
  { ctrl: 11, ad: 12, sr: 13, fLo: 7,  fHi: 8,  pLo: 9,  pHi: 10 },
  { ctrl: 18, ad: 19, sr: 20, fLo: 14, fHi: 15, pLo: 16, pHi: 17 },
];
const FILTER_REGS = [21, 22, 23, 24]; // $D415-$D418

const WAVE_NAMES = [[0x80, 'noise'], [0x40, 'pulse'], [0x20, 'saw'], [0x10, 'tri']];

function waveName(w) {
  if (w === 0) return 'none';
  const parts = WAVE_NAMES.filter(([bit]) => w & bit).map(([, n]) => n);
  return parts.length ? parts.join('+') : '$' + w.toString(16).padStart(2, '0');
}

const hex4 = (n) => '$' + n.toString(16).toUpperCase().padStart(4, '0');
const hex2 = (n) => '$' + n.toString(16).toUpperCase().padStart(2, '0');

/* ---------------------------------------------------------------------------
 * PSID header
 *
 * The off-by-two this function exists to get right: when the header's
 * loadAddress field is $0000 the real load address is the first TWO BYTES of
 * the data block, little-endian, and those two bytes are NOT part of the loaded
 * image. Failing to skip them shifts every computed offset by 2 — enough to
 * make a correct card's instrument layout look wrong by exactly one field.
 * Every report prints the branch taken, for that reason.
 * ------------------------------------------------------------------------- */
function readPsid(buf) {
  const magic = buf.toString('ascii', 0, 4);
  if (magic !== 'PSID' && magic !== 'RSID') {
    throw new Error('not a PSID/RSID file (magic ' + JSON.stringify(magic) + ')');
  }
  const dataOffset = buf.readUInt16BE(6);
  const headerLoad = buf.readUInt16BE(8);
  let load = headerLoad;
  let dataStart = dataOffset;
  let branch = 'header';
  if (headerLoad === 0) {
    load = buf.readUInt16LE(dataOffset);
    dataStart = dataOffset + 2;
    branch = 'embedded';
  }
  return {
    magic, dataOffset, headerLoad, load, dataStart, branch,
    fileLength: buf.length,
    initAddress: buf.readUInt16BE(10),
    playAddress: buf.readUInt16BE(12),
    songs: buf.readUInt16BE(14),
    startSong: buf.readUInt16BE(16),
    name: buf.toString('latin1', 22, 54).replace(/\0[\s\S]*$/, ''),
    author: buf.toString('latin1', 54, 86).replace(/\0[\s\S]*$/, ''),
    released: buf.toString('latin1', 86, 118).replace(/\0[\s\S]*$/, ''),
    top: load + (buf.length - dataStart) - 1,
  };
}

/* Address -> byte index in the file, or -1 when the address is outside the image. */
function fileOffset(psid, addr, len) {
  const o = psid.dataStart + (addr - psid.load);
  if (o < psid.dataStart || o + (len || 1) > psid.fileLength) return -1;
  return o;
}

/* --------------------------------------------------------------------------- */

function trace(file, opts) {
  const args = [TRACER, file, '--json', '--frames', String(opts.frames)];
  if (opts.song != null) args.push('--song', String(opts.song));
  if (opts.vsid) args.push('--vsid', opts.vsid);
  const r = spawnSync(process.execPath, args, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  if (r.status !== 0) {
    throw new Error('vsid-trace failed (exit ' + r.status + '): ' + (r.stderr || '').trim().slice(0, 400));
  }
  return JSON.parse(r.stdout);
}

/*
 * Fold writes into a per-register value per frame, carrying the last value
 * forward across frames. Comparing FOLDED values rather than write events is
 * deliberate: a player that re-writes its whole shadow block every frame (very
 * common) emits an ADSR write on every note, and a naive write-event check
 * would report every such player as `suspect`.
 */
function foldTimelines(report, frames) {
  const t = Array.from({ length: 25 }, () => new Array(frames).fill(0));
  const state = new Array(25).fill(0);
  const byFrame = new Map(report.frames.map((f) => [f.frame, f.writes]));
  for (let f = 0; f < frames; f++) {
    const ws = byFrame.get(f);
    if (ws) for (const w of ws) state[w.reg] = w.value;
    for (let r = 0; r < 25; r++) t[r][f] = state[r];
  }
  return t;
}

/*
 * Onsets: the gate bit of a voice's control register going 0 -> 1.
 *
 * WHICH FRAME TO SAMPLE. h2g samples onset+1, because the onset frame itself can
 * still hold the player's transition. That is tuned to one player. Laxity/JCH
 * NewPlayer runs a multi-frame HARD RESTART — frequency driven to $FFFF, waveform
 * cleared, a restart envelope written — and on Stinsen's `Last_Night.sid` a fixed
 * onset+1 sampled the restart on 96 of 96 notes: four tidy "instruments" whose
 * ADSR values appear NOWHERE in the payload, because the player synthesised them.
 * The gate called that `reliable`, which it was; it was also meaningless.
 *
 * So the sample frame is the first SETTLED frame instead: gate still on, a real
 * waveform selected, and a frequency that is not one of the restart sentinels.
 * On a player with no hard restart this is onset+1 and nothing changes; the delay
 * is recorded either way, because "this player restarts for 3 frames" is itself a
 * fact worth having.
 */
const SETTLE_MAX = 4;
const FREQ_SENTINEL = new Set([0x0000, 0xffff]);

function findOnsets(t, frames) {
  const out = [];
  for (let v = 0; v < 3; v++) {
    const V = VOICE[v];
    for (let f = 1; f < frames; f++) {
      if ((t[V.ctrl][f - 1] & 1) !== 0 || (t[V.ctrl][f] & 1) !== 1) continue;
      let at = Math.min(f + 1, frames - 1);
      let settled = false;
      for (let k = 1; k <= SETTLE_MAX; k++) {
        const fr = f + k;
        if (fr >= frames) break;
        const ctrl = t[V.ctrl][fr];
        const freq = (t[V.fHi][fr] << 8) | t[V.fLo][fr];
        if ((ctrl & 1) === 0) break;                 // gate released: note is over
        if ((ctrl & 0xf0) === 0) continue;           // no waveform yet
        if (FREQ_SENTINEL.has(freq)) continue;       // still in the restart
        at = fr; settled = true; break;
      }
      const sample = (fr) => ({
        wave: t[V.ctrl][fr] & 0xf0,
        adsr: (t[V.ad][fr] << 8) | t[V.sr][fr],
        pulse: ((t[V.pHi][fr] & 0x0f) << 8) | t[V.pLo][fr],
        freq: (t[V.fHi][fr] << 8) | t[V.fLo][fr],
      });
      const s0 = sample(f);
      const s1 = sample(at);
      out.push({
        voice: v, frame: f, wave: s1.wave, adsr: s1.adsr, pulse: s1.pulse, freq: s1.freq,
        pulseBucket: Math.floor(s1.pulse / PULSE_BUCKET),
        onsetFrameAdsr: s0.adsr,
        onsetFrameWave: s0.wave,
        settleDelay: at - f,
        settled,
        filterRouted: (t[23][at] & (1 << v)) !== 0,
      });
    }
  }
  return out.sort((a, b) => a.frame - b.frame || a.voice - b.voice);
}

/*
 * Does ADSR identify an instrument in this file at all?
 *
 * Two ways it fails, each with its own number:
 *   - a distinct value per note: the player computes the envelope, it is not a
 *     per-instrument constant.
 *   - the folded value changes DURING a note: the player modulates it, so the
 *     value at onset does not name a stable record either.
 */
function reliability(onsets, t, frames, minOnsets) {
  const distinct = new Set(onsets.map((o) => o.adsr));
  const n = onsets.length;
  let modulated = 0;
  for (const o of onsets) {
    const V = VOICE[o.voice];
    const start = Math.min(o.frame + 1, frames - 1);
    for (let f = start + 1; f < frames; f++) {
      if ((t[V.ctrl][f] & 1) === 0) break; // gate released: note over
      if (((t[V.ad][f] << 8) | t[V.sr][f]) !== o.adsr) { modulated++; break; }
    }
  }
  const ratio = n ? distinct.size / n : 0;
  const modRatio = n ? modulated / n : 0;
  const unsettled = onsets.filter((o) => !o.settled).length;
  const unsettledRatio = n ? unsettled / n : 0;
  const pct = (x) => (x * 100).toFixed(0) + '%';
  let verdict, why;
  if (n >= minOnsets && unsettledRatio > 0.5) {
    // Checked BEFORE the distinct-value tests, because a hard restart produces a
    // small, tidy, perfectly stable set of values that sails through them. This
    // is what Stinsen's Last_Night.sid did: 4 values over 96 onsets, 0 modulated,
    // graded `reliable` — and not one of the four exists anywhere in the payload,
    // because the player synthesised them during the restart.
    verdict = 'unusable';
    why = unsettled + ' of ' + n + ' notes (' + pct(unsettledRatio) + ') never reach a settled frame ' +
          'within ' + SETTLE_MAX + ' frames of the onset — the sample is stuck in the player\'s hard ' +
          'restart, so these are the restart\'s registers, not any instrument\'s.';
  } else if (n < minOnsets) {
    verdict = 'insufficient-data';
    why = n + ' onsets is below the ' + minOnsets + '-onset floor — too few to tell a ' +
          'per-instrument constant from a coincidence.';
  } else if (ratio > 0.75) {
    verdict = 'unusable';
    why = distinct.size + ' distinct ADSR values over ' + n + ' onsets (' + pct(ratio) +
          ') — near one per note, so ADSR is computed per note here, not copied per instrument.';
  } else if (modRatio > 0.25) {
    verdict = 'unusable';
    why = modulated + ' of ' + n + ' notes (' + pct(modRatio) + ') change ADSR while the gate is ' +
          'still on — the player modulates the envelope, so the onset value names no stable record.';
  } else if (distinct.size === 1) {
    // Not unreliable — uninformative. One ADSR covering every note is a
    // perfectly stable key that separates nothing, and a one-row map would
    // otherwise read as "this player has one instrument". Martin Galway's
    // Wizball does this: 1 value over 32 onsets.
    verdict = 'degenerate';
    why = 'a single ADSR value (' + hex4([...distinct][0]) + ') covers all ' + n + ' onsets — the key is ' +
          'stable but carries no information, so the table below separates nothing. The instruments of ' +
          'this file, if it has several, differ somewhere ADSR does not reach.';
  } else if (ratio > 0.4 || modRatio > 0.05) {
    verdict = 'suspect';
    why = distinct.size + ' distinct over ' + n + ' onsets (' + pct(ratio) + '), ' + modulated +
          ' modulated mid-note (' + pct(modRatio) + ') — usable, but treat any instrument seen ' +
          'once or twice as unconfirmed.';
  } else {
    verdict = 'reliable';
    why = distinct.size + ' distinct ADSR values over ' + n + ' onsets (' + pct(ratio) + '), ' +
          modulated + ' modulated mid-note — stable enough to key on.';
  }
  return { verdict, why, onsets: n, distinct: distinct.size, modulated, unsettled, ratio, modRatio };
}

/* Modal register behaviour over the first PROFILE_FRAMES of each note. */
function profile(onsets, t, frames) {
  const by = new Map();
  for (const o of onsets) {
    if (!by.has(o.adsr)) {
      by.set(o.adsr, {
        adsr: o.adsr, notes: 0, voices: new Set(), waves: new Map(), pulses: new Set(),
        freqs: [], seqs: new Map(), gateOff: [], filterRouted: 0, onsetDisagree: 0,
        travelSum: 0, firstFrame: o.frame, settle: [], unsettled: 0,
      });
    }
    const p = by.get(o.adsr);
    p.notes++;
    p.voices.add(o.voice + 1);
    p.waves.set(o.wave, (p.waves.get(o.wave) || 0) + 1);
    p.pulses.add(o.pulseBucket);
    p.freqs.push(o.freq);
    if (o.filterRouted) p.filterRouted++;
    if (o.onsetFrameAdsr !== o.adsr || o.onsetFrameWave !== o.wave) p.onsetDisagree++;
    p.settle.push(o.settleDelay);
    if (!o.settled) p.unsettled++;
    p.firstFrame = Math.min(p.firstFrame, o.frame);

    const V = VOICE[o.voice];
    const seq = [];
    let travel = 0, gateOff = null, prevPulse = null;
    for (let k = 0; k < PROFILE_FRAMES; k++) {
      const f = o.frame + k;
      if (f >= frames) break;
      const ctrl = t[V.ctrl][f];
      seq.push(waveName(ctrl & 0xf0));
      if ((ctrl & 1) === 0 && gateOff === null) gateOff = k;
      const pw = ((t[V.pHi][f] & 0x0f) << 8) | t[V.pLo][f];
      if (prevPulse !== null) travel += Math.abs(pw - prevPulse);
      prevPulse = pw;
    }
    // Collapse runs so a held waveform reads as one step, not eight.
    const collapsed = seq.filter((w, i) => i === 0 || w !== seq[i - 1]).join(' -> ');
    p.seqs.set(collapsed, (p.seqs.get(collapsed) || 0) + 1);
    p.gateOff.push(gateOff === null ? PROFILE_FRAMES : gateOff);
    p.travelSum += travel;
  }
  return [...by.values()].sort((a, b) => b.notes - a.notes);
}

function mergeProfiles(list) {
  const merged = new Map();
  for (const set of list) {
    for (const e of set) {
      const cur = merged.get(e.adsr);
      if (!cur) { merged.set(e.adsr, e); continue; }
      cur.notes += e.notes;
      e.voices.forEach((v) => cur.voices.add(v));
      for (const [k, v] of e.waves) cur.waves.set(k, (cur.waves.get(k) || 0) + v);
      e.pulses.forEach((v) => cur.pulses.add(v));
      cur.freqs = cur.freqs.concat(e.freqs);
      for (const [k, v] of e.seqs) cur.seqs.set(k, (cur.seqs.get(k) || 0) + v);
      cur.gateOff = cur.gateOff.concat(e.gateOff);
      cur.filterRouted += e.filterRouted;
      cur.onsetDisagree += e.onsetDisagree;
      cur.settle = cur.settle.concat(e.settle);
      cur.unsettled += e.unsettled;
      cur.travelSum += e.travelSum;
      cur.firstFrame = Math.min(cur.firstFrame, e.firstFrame);
    }
  }
  return [...merged.values()].sort((a, b) => b.notes - a.notes);
}

const modal = (m) => [...m.entries()].sort((a, b) => b[1] - a[1])[0][0];
const median = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };

/* ---------------------------------------------------------------------------
 * Card cross-check
 * ------------------------------------------------------------------------- */

function readCard(id) {
  const p = path.join(REPO, 'knowledge', 'players', id + '.md');
  if (!fs.existsSync(p)) throw new Error('no such card: ' + p);
  const text = fs.readFileSync(p, 'utf8');
  // \r? throughout: the cards are CRLF on this checkout.
  const m = text.match(/```json\r?\n([\s\S]*?)\r?\n```/);
  if (!m) throw new Error('card ' + id + ' has no JSON block');
  return { path: p, json: JSON.parse(m[1]) };
}

const parseAddr = (s) => (typeof s === 'number' ? s : parseInt(String(s).replace(/^\$/, ''), 16));

/*
 * A declared layout is best stored as a PAYLOAD OFFSET rather than an absolute
 * address: colin-davies documents four files loading at $7000, $7900 and $7400,
 * so an absolute base is true for at most one of them. `derived_from` names the
 * file the layout was read off. base_address is accepted for the case where the
 * engine sits at fixed absolute addresses across a family.
 */
function checkLayout(psid, buf, layout, observed) {
  const stride = layout.stride;
  const count = layout.count;
  const aHi = layout.adsr_offsets[0];
  const aLo = layout.adsr_offsets[1];
  let base;
  if (layout.payload_offset != null) base = psid.dataStart + parseAddr(layout.payload_offset);
  else if (layout.base_address != null) base = fileOffset(psid, parseAddr(layout.base_address), stride);
  else return { verdict: 'unverifiable', why: 'the declared layout gives neither `payload_offset` nor `base_address`' };
  if (base < 0 || base >= buf.length) {
    return { verdict: 'out-of-range', why: "the declared table lies outside this file's loaded image" };
  }

  const records = [];
  for (let n = 0; n < count; n++) {
    const o = base + n * stride;
    if (o + Math.max(aHi, aLo) >= buf.length) break;
    records.push({
      n, offset: o, addr: psid.load + (o - psid.dataStart),
      adsr: (buf[o + aHi] << 8) | buf[o + aLo],
      bytes: [...buf.slice(o, o + Math.min(stride, 8))],
    });
  }
  const declared = new Map();
  for (const r of records) {
    if (!declared.has(r.adsr)) declared.set(r.adsr, []);
    declared.get(r.adsr).push(r.n);
  }
  const rows = observed.map((o) => ({ adsr: o.adsr, notes: o.notes, records: declared.get(o.adsr) || [] }));
  const missing = rows.filter((r) => !r.records.length);
  const ambiguous = rows.filter((r) => r.records.length > 1);
  return {
    verdict: missing.length ? 'layout-wrong' : 'confirmed',
    base, records, rows, missing, ambiguous,
    why: missing.length
      ? missing.length + ' of ' + rows.length + ' observed ADSR values appear nowhere in the declared table'
      : 'all ' + rows.length + ' observed ADSR values appear in the declared table',
  };
}

/*
 * When observed values do not land where a card says they should — or when the
 * card says nothing at all — look for where they DO land. For each candidate
 * stride, positions of the observed byte pairs are grouped by (offset mod
 * stride); a residue covering every observed value is a candidate record layout.
 *
 * This step has to be read with the offset math beside it. A probe that was two
 * bytes out "found" a coherent layout at +2 of every record and read as a
 * confident falsification of a card that was right all along.
 */
function searchLayout(psid, buf, observed, declaredStride) {
  const strides = [...new Set([declaredStride, 4, 6, 7, 8, 12, 16, 20, 24, 32].filter(Boolean))];
  const wanted = observed.map((o) => o.adsr);
  const positions = new Map();
  for (const a of wanted) {
    const hi = (a >> 8) & 0xff, lo = a & 0xff;
    const hits = [];
    for (let i = psid.dataStart; i < buf.length - 1; i++) if (buf[i] === hi && buf[i + 1] === lo) hits.push(i);
    positions.set(a, hits);
  }
  const candidates = [];
  for (const s of strides) {
    const byResidue = new Map();
    for (const [a, hits] of positions) {
      for (const h of hits) {
        const r = (h - psid.dataStart) % s;
        if (!byResidue.has(r)) byResidue.set(r, new Map());
        const m = byResidue.get(r);
        if (!m.has(a)) m.set(a, h);
      }
    }
    for (const [r, m] of byResidue) {
      if (m.size < Math.max(2, Math.ceil(wanted.length * 0.75))) continue;
      const offs = [...m.values()].sort((x, y) => x - y);
      candidates.push({
        stride: s, covered: m.size, of: wanted.length, residue: r,
        firstOffset: offs[0], firstAddr: psid.load + (offs[0] - psid.dataStart),
      });
    }
  }
  candidates.sort((a, b) => b.covered - a.covered || a.stride - b.stride || a.firstOffset - b.firstOffset);
  return candidates.slice(0, 6);
}

/*
 * The other table shape: COLUMN-MAJOR, where AD and SR live in separate
 * parallel arrays instead of adjacent bytes of one record. Three cards in this
 * repo already document exactly this (stinsen-newplayer's $1808/$181C,
 * sid-factory-ii-driver-11's 6 columns of 32, cadaver-musicdriver's 6 parallel
 * arrays), and searchLayout above is blind to all of them: it only ever looks
 * for a hi byte with its lo byte immediately after it.
 *
 * Found empirically — the row-major search returned nothing at all for Stinsen's
 * `Last_Night.sid` while a split search located a coherent column pair on the
 * first try.
 *
 * A constant delta between the two columns is the signature. The catch is that
 * $00 and $0F are extremely common bytes, so a delta that "covers" every value
 * can easily be coincidence; the AD positions are therefore required to sit
 * close together, as a real column's entries do, and the span is reported so a
 * loose cluster can be disbelieved.
 */
function searchSplitLayout(psid, buf, observed, maxSpan) {
  const wanted = observed.map((o) => o.adsr);
  if (wanted.length < 2) return [];
  const span = maxSpan || 64;
  const positionsOf = (b) => {
    const a = [];
    for (let i = psid.dataStart; i < buf.length; i++) if (buf[i] === b) a.push(i);
    return a;
  };
  // A byte that occurs thousands of times carries no location information and
  // would make the delta cross-product quadratic on a large payload, so both
  // sides are capped. $00 in a 55KB file is the case this guards against.
  const CAP = 512;
  const byDelta = new Map();
  for (const v of wanted) {
    const ad = positionsOf((v >> 8) & 0xff);
    const sr = positionsOf(v & 0xff);
    if (!ad.length || !sr.length || ad.length > CAP || sr.length > CAP) continue;
    const seen = new Set();
    for (const a of ad) {
      for (const s of sr) {
        const delta = s - a;
        if (delta === 0 || seen.has(delta)) continue;
        seen.add(delta);
        if (!byDelta.has(delta)) byDelta.set(delta, new Map());
        byDelta.get(delta).set(v, a);
      }
    }
  }

  const out = [];
  for (const [delta, hits] of byDelta) {
    if (hits.size < wanted.length) continue;
    const offs = [...hits.values()].sort((a, b) => a - b);
    const width = offs[offs.length - 1] - offs[0];
    if (width > span) continue;
    out.push({
      delta, covered: hits.size, of: wanted.length, width,
      firstOffset: offs[0], firstAddr: psid.load + (offs[0] - psid.dataStart),
      srAddr: psid.load + (offs[0] + delta - psid.dataStart),
    });
  }
  out.sort((a, b) => a.width - b.width || Math.abs(a.delta) - Math.abs(b.delta));
  return out.slice(0, 4);
}

/* --------------------------------------------------------------------------- */

function analyse(file, opts) {
  const buf = fs.readFileSync(file);
  const psid = readPsid(buf);

  const songs = opts.song != null ? [opts.song] : Array.from({ length: psid.songs }, (_, i) => i + 1);
  const per = [];
  const filterStates = new Set();
  let allOnsets = [];

  for (const s of songs) {
    const rep = trace(file, { frames: opts.frames, song: s, vsid: opts.vsid });
    const t = foldTimelines(rep, opts.frames);
    const on = findOnsets(t, opts.frames);
    per.push({ song: s, t, on, rel: reliability(on, t, opts.frames, opts.minOnsets),
               prof: profile(on, t, opts.frames) });
    allOnsets = allOnsets.concat(on);
    for (let f = 0; f < opts.frames; f++) filterStates.add(FILTER_REGS.map((r) => t[r][f]).join(','));
  }

  // Reliability is judged per subtune and taken at its WORST — one subtune that
  // modulates ADSR invalidates the key for the file, it does not average out.
  const rank = { reliable: 0, degenerate: 1, suspect: 2, 'insufficient-data': 3, unusable: 4 };
  const worst = per.map((p) => p.rel).reduce((a, b) => (rank[b.verdict] > rank[a.verdict] ? b : a));
  const rel = {
    verdict: worst.verdict, why: worst.why,
    onsets: allOnsets.length,
    distinct: new Set(allOnsets.map((o) => o.adsr)).size,
    modulated: per.reduce((n, p) => n + p.rel.modulated, 0),
    perSong: per.map((p) => ({ song: p.song, ...p.rel })),
  };

  const observed = mergeProfiles(per.map((p) => p.prof));

  let card = null, layout = null, search = null, split = null;
  if (opts.card) {
    card = readCard(opts.card);
    const decl = card.json.data_format && card.json.data_format.instrument_layout;
    if (!decl) {
      layout = { verdict: 'unverifiable', why: 'card `' + opts.card + '` declares no `data_format.instrument_layout`' };
    } else {
      layout = checkLayout(psid, buf, decl, observed);
      layout.declared = decl;
    }
  }
  // The searches also run with no card at all: proposing a layout is the useful
  // half on the many cards whose `data_format.instruments` is still a TODO.
  if ((!layout || layout.verdict !== 'confirmed') && rel.verdict !== 'unusable' && observed.length) {
    search = searchLayout(psid, buf, observed, layout && layout.declared && layout.declared.stride);
    split = searchSplitLayout(psid, buf, observed);
  }

  return { file, psid, songs, rel, observed, filterStates: [...filterStates], card, layout, search, split, opts };
}

/* --------------------------------------------------------------------------- */

function table(head, rows) {
  if (!rows.length) return ['_(none)_', ''];
  return ['| ' + head.join(' | ') + ' |',
          '|' + head.map(() => '---').join('|') + '|',
          ...rows.map((r) => '| ' + r.join(' | ') + ' |'), ''];
}

function render(a) {
  const psid = a.psid, rel = a.rel, observed = a.observed;
  const L = [];
  L.push('# ' + path.basename(a.file) + ' — instrument map', '');
  L.push('`' + psid.name.trim() + '` by `' + psid.author.trim() + '` (' + psid.released.trim() + ')', '');
  L.push('Generated by `scripts/dev/instrument-map.js` from a VICE register trace.',
         'The instruments below are **observed** — the registers on the frame after each',
         'note onset, grouped by ADSR. Nothing here is read from a disassembly.', '');

  L.push('## Provenance', '');
  L.push('The offset math is printed because getting it wrong is the failure mode this tool',
         'is most likely to hit: a two-byte error makes a correct instrument layout look',
         'wrong by exactly one field.', '');
  L.push(...table(['field', 'value'], [
    ['file', '`' + path.basename(a.file) + '`'],
    ['size', psid.fileLength + ' bytes'],
    ['PSID `loadAddress` field', hex4(psid.headerLoad)],
    ['effective load address', hex4(psid.load) + ' (**' + psid.branch + '**' +
      (psid.branch === 'embedded' ? ' — first two data bytes, skipped' : '') + ')'],
    ['data starts at byte', String(psid.dataStart)],
    ['image spans', hex4(psid.load) + '-' + hex4(psid.top)],
    ['init / play', hex4(psid.initAddress) + ' / ' + hex4(psid.playAddress)],
    ['subtunes traced', a.songs.join(', ') + ' (of ' + psid.songs + ')'],
    ['frames per subtune', String(a.opts.frames)],
    ['onsets found', String(rel.onsets)],
  ]));

  L.push('## Reliability of the ADSR key', '');
  L.push('**`' + rel.verdict + '`** — ' + rel.why, '');
  if (a.songs.length > 1) {
    L.push('Judged per subtune and taken at its worst; one subtune that modulates ADSR',
           'invalidates the key for the file rather than averaging out.', '');
    L.push(...table(['subtune', 'onsets', 'distinct', 'modulated', 'verdict'],
      rel.perSong.map((p) => [p.song, p.onsets, p.distinct, p.modulated, '`' + p.verdict + '`'])));
  }
  if (rel.verdict === 'unusable') {
    L.push('No mapping table follows. ADSR does not identify an instrument in this file, so',
           'any table keyed on it would be an invention.', '');
    return L.join('\n') + '\n';
  }

  L.push('## Observed instruments', '');
  L.push(...table(['ADSR', 'waveform', 'pulse', 'notes', 'voices', 'first frame', 'filtered'],
    observed.map((o) => [
      '`' + hex4(o.adsr) + '`',
      waveName(modal(o.waves)),
      o.pulses.size === 1 ? hex2([...o.pulses][0]) + 'xx' : o.pulses.size + ' buckets',
      o.notes,
      [...o.voices].sort().join(','),
      o.firstFrame,
      o.filterRouted ? o.filterRouted + '/' + o.notes : '—',
    ])));

  L.push('## Per-instrument profile', '');
  L.push('Modal behaviour over the first ' + PROFILE_FRAMES + ' frames of each note. The waveform',
         'sequence is what separates instruments a single onset sample cannot: a two-stage',
         "attack, or a drum's noise tick, shows up here and nowhere else.", '');
  L.push(...table(['ADSR', 'waveform sequence', 'pulse travel', 'gate off @', 'freq range', 'sampled at'],
    observed.map((o) => [
      '`' + hex4(o.adsr) + '`',
      modal(o.seqs),
      o.travelSum ? Math.round(o.travelSum / o.notes) + '/note' : 'fixed',
      median(o.gateOff) >= PROFILE_FRAMES ? '>' + (PROFILE_FRAMES - 1) : String(median(o.gateOff)),
      hex4(Math.min(...o.freqs)) + '-' + hex4(Math.max(...o.freqs)),
      '+' + median(o.settle) + (o.unsettled ? ' (' + o.unsettled + ' unsettled)' : ''),
    ])));
  L.push('`sampled at` is how many frames after the onset the registers first settled — gate',
         'still on, a real waveform selected, frequency off the restart sentinels. A player with',
         'no hard restart settles at +1; a larger number is that player\'s restart length, which',
         'is a fact worth having rather than noise to hide. `unsettled` notes never settled',
         'within ' + SETTLE_MAX + ' frames and fall back to +1, and enough of them make the whole',
         'file `unusable` — see the verdict above.', '');

  L.push('## Filter', '');
  L.push('`$D415-$D418` is global rather than per voice, so it is reported once for the file;',
         "the per-voice routing bit of `$D417` is the `filtered` column above.", '');
  if (a.filterStates.length === 1) {
    const s = a.filterStates[0].split(',').map(Number);
    L.push('Constant for the whole trace: cutoff `' + hex2(s[0]) + '`/`' + hex2(s[1]) +
           '`, res+routing `' + hex2(s[2]) + '`, mode+volume `' + hex2(s[3]) + '`.', '');
    if ((s[2] & 0x07) === 0) L.push('No voice is routed through the filter — the filter is not used.', '');
  } else {
    L.push(a.filterStates.length + ' distinct filter register states across the trace — the filter is driven.', '');
  }

  if (a.layout) {
    L.push('## Card cross-check', '');
    L.push('Against `knowledge/players/' + a.opts.card + '.md`.', '');
    L.push('**`' + a.layout.verdict + '`** — ' + a.layout.why, '');
    if (a.layout.records) {
      L.push(...table(['ADSR', 'notes observed', 'record(s) in declared table'],
        a.layout.rows.map((r) => ['`' + hex4(r.adsr) + '`', r.notes,
                                  r.records.length ? r.records.join(', ') : '**absent**'])));
      if (a.layout.ambiguous.length) {
        L.push(a.layout.ambiguous.length + ' observed value(s) match more than one record, so ADSR names',
               'a *set* of records here rather than exactly one. That is a property of the file, not',
               'an error — but it is the limit of what this join can resolve.', '');
      }
      const unused = a.layout.records.filter((r) => !observed.some((o) => o.adsr === r.adsr));
      if (unused.length) {
        L.push('### Declared but never sounded', '');
        L.push('Records in the table that no note in this trace used. A record of all-zero bytes is',
               'an unused slot; a populated one is either used by material this trace did not reach',
               'or evidence the declared `count` is too high.', '');
        L.push(...table(['record', 'address', 'ADSR', 'first bytes'],
          unused.map((r) => [r.n, hex4(r.addr), '`' + hex4(r.adsr) + '`',
                             '`' + r.bytes.map((b) => b.toString(16).padStart(2, '0')).join(' ') + '`'])));
      }
    }
  }

  if (a.search && a.search.length) {
    L.push('## Candidate layouts', '');
    L.push('Where the observed ADSR values actually land in the payload, by constant stride.',
           '**Read this with the offset math at the top of this file.** A search like this, run',
           'against a base two bytes out, finds a coherent layout at the wrong offset in every',
           'record and reads as a confident falsification of a card that is right.', '');
    L.push(...table(['stride', 'covers', 'first record at', 'file offset'],
      a.search.map((c) => [c.stride, c.covered + '/' + c.of, hex4(c.firstAddr), c.firstOffset])));
  }

  if (a.split && a.split.length) {
    L.push('### Column-major candidates', '');
    L.push('The other table shape: AD and SR in separate parallel arrays rather than adjacent',
           'bytes of one record. `width` is how far apart the matched AD bytes sit — a real',
           'column is tight, and a wide one is coincidence dressed up as a layout, because `$00`',
           'and `$0F` are common enough to line up by luck.', '');
    L.push(...table(['AD column at', 'SR column at', 'delta', 'covers', 'width'],
      a.split.map((c) => [hex4(c.firstAddr), hex4(c.srAddr),
                          c.delta + ' ($' + Math.abs(c.delta).toString(16) + ')',
                          c.covered + '/' + c.of, c.width])));
  }

  return L.join('\n') + '\n';
}

/* --------------------------------------------------------------------------- */

function parseArgs(argv) {
  const o = { frames: 500, song: null, card: null, out: DEFAULT_OUT, json: false,
              stdout: false, minOnsets: 30, vsid: null, file: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    switch (a) {
      case '--frames': o.frames = Number(argv[++i]); break;
      case '--song': o.song = Number(argv[++i]); break;
      case '--card': o.card = argv[++i]; break;
      case '--out': o.out = argv[++i]; break;
      case '--stdout': o.stdout = true; break;
      case '--json': o.json = true; break;
      case '--min-onsets': o.minOnsets = Number(argv[++i]); break;
      case '--vsid': o.vsid = argv[++i]; break;
      case '-h': case '--help': o.help = true; break;
      default:
        if (a.startsWith('-')) throw new Error('unknown option ' + a);
        o.file = a;
    }
  }
  return o;
}

/* ---------------------------------------------------------------------------
 * Self-test
 *
 * Covers the offset math specifically, because that is the bug that has already
 * bitten once: a probe that did not skip the two embedded load-address bytes
 * read every instrument record two bytes early, "found" a coherent layout at
 * the wrong field, and reported a correct card as falsified.
 * ------------------------------------------------------------------------- */
function selfTest() {
  const fails = [];
  const check = (name, got, want) => {
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      fails.push(name + ': got ' + JSON.stringify(got) + ', want ' + JSON.stringify(want));
    }
  };

  const psidHeader = (headerLoad, payload) => {
    const h = Buffer.alloc(0x7c);
    h.write('PSID', 0, 'ascii');
    h.writeUInt16BE(2, 4);        // version
    h.writeUInt16BE(0x7c, 6);     // dataOffset
    h.writeUInt16BE(headerLoad, 8);
    h.writeUInt16BE(0x1000, 10);  // init
    h.writeUInt16BE(0x1003, 12);  // play
    h.writeUInt16BE(1, 14);       // songs
    h.writeUInt16BE(1, 16);       // startSong
    return Buffer.concat([h, payload]);
  };

  // header branch: loadAddress in the header, payload starts at dataOffset.
  const a = readPsid(psidHeader(0x1000, Buffer.from([0xaa, 0xbb, 0xcc])));
  check('header branch', [a.branch, a.load, a.dataStart], ['header', 0x1000, 0x7c]);

  // embedded branch: the first two payload bytes ARE the load address and are
  // NOT part of the image, so dataStart advances by two and $1000 maps to the
  // byte after them.
  const b = readPsid(psidHeader(0, Buffer.from([0x00, 0x10, 0xaa, 0xbb, 0xcc])));
  check('embedded branch', [b.branch, b.load, b.dataStart], ['embedded', 0x1000, 0x7e]);
  check('embedded: $1000 is the first image byte', fileOffset(b, 0x1000, 1), 0x7e);
  check('embedded: address below the image is rejected', fileOffset(b, 0x0fff, 1), -1);
  check('embedded: address past the image is rejected', fileOffset(b, 0x1003, 1), -1);

  // A record layout declared at an absolute address resolves through the same
  // math, so a two-byte error here would surface as a layout-wrong verdict.
  const buf = psidHeader(0, Buffer.concat([Buffer.from([0x00, 0x10]),
    Buffer.from([0x0f, 0xf8, 0x41, 0x80, 0x0f, 0xea, 0x41, 0x40])]));
  const psid = readPsid(buf);
  const got = checkLayout(psid, buf, { base_address: '$1000', stride: 4, count: 2, adsr_offsets: [0, 1] },
    [{ adsr: 0x0ff8, notes: 5 }, { adsr: 0x0fea, notes: 3 }]);
  check('layout resolves at the declared address', [got.verdict, got.records.map((r) => r.adsr)],
    ['confirmed', [0x0ff8, 0x0fea]]);
  const shifted = checkLayout(psid, buf, { base_address: '$0FFE', stride: 4, count: 2, adsr_offsets: [0, 1] },
    [{ adsr: 0x0ff8, notes: 5 }]);
  check('a two-byte-early base does NOT silently confirm', shifted.verdict, 'out-of-range');

  // Onset detection: gate 0 -> 1 on voice 1, sampled at onset+1.
  const frames = 6;
  const t = Array.from({ length: 25 }, () => new Array(frames).fill(0));
  // A real frequency matters here: $0000 is a restart sentinel, so a fixture that
  // left it at zero would never settle — which is the rule working, not a bug.
  for (let f = 2; f < frames; f++) { t[4][f] = 0x41; t[5][f] = 0x0f; t[6][f] = 0xf8; t[0][f] = 0x8f; t[1][f] = 0x0c; }
  const on = findOnsets(t, frames);
  check('one onset, at the gate edge', on.map((o) => [o.frame, o.adsr, o.wave]), [[2, 0x0ff8, 0x40]]);
  check('no hard restart settles at +1', on.map((o) => [o.settleDelay, o.settled]), [[1, true]]);

  // Hard restart: gate on at frame 2, but frequency held at the $FFFF sentinel
  // with no waveform for two frames before the instrument's real registers land.
  const hr = Array.from({ length: 25 }, () => new Array(8).fill(0));
  for (let f = 2; f < 8; f++) { hr[4][f] = 0x01; hr[5][f] = 0x0f; hr[6][f] = 0x00; hr[0][f] = 0xff; hr[1][f] = 0xff; }
  for (let f = 4; f < 8; f++) { hr[4][f] = 0x41; hr[5][f] = 0x00; hr[6][f] = 0x72; hr[0][f] = 0x8f; hr[1][f] = 0x0c; }
  const hrOn = findOnsets(hr, 8);
  check('a restart is skipped, not sampled', hrOn.map((o) => [o.settleDelay, o.adsr, o.settled]),
    [[2, 0x0072, true]]);

  // And when it never settles, the gate must call the whole file unusable rather
  // than grading the restart's own registers as a tidy instrument set.
  const stuck = Array.from({ length: 25 }, () => new Array(8).fill(0));
  for (let f = 2; f < 8; f++) { stuck[4][f] = 0x01; stuck[5][f] = 0x0f; stuck[0][f] = 0xff; stuck[1][f] = 0xff; }
  const stuckOn = findOnsets(stuck, 8);
  check('stuck in the restart is unusable', reliability(stuckOn, stuck, 8, 1).verdict, 'unusable');

  if (fails.length) {
    process.stderr.write('self-test FAILED:\n' + fails.map((f) => '  - ' + f).join('\n') + '\n');
    process.exit(1);
  }
  process.stdout.write('self-test ok (11 checks)\n');
}

/*
 * The index is regenerated from the maps themselves rather than accumulated as
 * they are written, so deleting a map removes its row and a hand-edited verdict
 * cannot survive a rebuild.
 */
function writeIndex(dir) {
  const rows = [];
  for (const card of fs.readdirSync(dir).sort()) {
    const sub = path.join(dir, card);
    if (!fs.statSync(sub).isDirectory()) continue;
    for (const f of fs.readdirSync(sub).sort()) {
      if (!f.endsWith('.md')) continue;
      const text = fs.readFileSync(path.join(sub, f), 'utf8');
      const verdict = (text.match(/\*\*`([a-z-]+)`\*\* — /) || [])[1] || '?';
      const onsets = (text.match(/\| onsets found \| (\d+) \|/) || [])[1] || '?';
      const check = (text.match(/## Card cross-check[\s\S]*?\*\*`([a-z-]+)`\*\*/) || [])[1] || '—';
      const instruments = (text.match(/## Observed instruments\n\n([\s\S]*?)\n\n/) || [''])[0]
        .split('\n').filter((l) => l.startsWith('| `$')).length;
      rows.push([card, '[`' + f.replace(/\.md$/, '`](' + card + '/' + f + ')'),
                 '`' + verdict + '`', onsets, instruments || '—', '`' + check + '`']);
    }
  }
  const L = ['# Instrument maps', '',
    'Observed instrument maps, one per SID file, generated by',
    '`node scripts/dev/instrument-map.js <file.sid> --card <id>`. These are evidence',
    'for what a card claims about `data_format.instruments`, read from a register',
    'trace rather than a disassembly.', '',
    'Generated on demand, never by `npm run all` — each map costs one VICE run per',
    'subtune. Regenerate this index with `--index`.', '',
    'The `key` column is the reliability verdict for ADSR-as-instrument-identity in',
    'that file. `unusable` means no mapping table was emitted at all; `degenerate`',
    'means one ADSR value covers every note, so the map is honest but separates',
    'nothing. Neither is a defect in the file — the technique simply does not reach',
    'every player.', '',
    '| card | file | key | onsets | instruments | card check |',
    '|---|---|---|---|---|---|',
    ...rows.map((r) => '| ' + r.join(' | ') + ' |'), ''];
  fs.writeFileSync(path.join(dir, 'README.md'), L.join('\n'));
  process.stderr.write('wrote ' + path.relative(REPO, path.join(dir, 'README.md')).split(path.sep).join('/') +
    ' (' + rows.length + ' maps)\n');
}

function main() {
  if (process.argv.includes('--self-test')) return selfTest();
  if (process.argv.includes('--index')) {
    const i = process.argv.indexOf('--out');
    return writeIndex(i > 0 ? process.argv[i + 1] : DEFAULT_OUT);
  }
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || !opts.file) {
    const banner = fs.readFileSync(__filename, 'utf8').split('*/')[0].split('\n')
      .filter((l) => l.startsWith(' *')).map((l) => l.slice(3)).join('\n');
    process.stdout.write(banner + '\n');
    process.exit(opts.help ? 0 : 1);
  }
  const a = analyse(path.resolve(opts.file), opts);
  if (opts.json) {
    const replacer = (k, v) => (v instanceof Set ? [...v] : v instanceof Map ? [...v] : v);
    process.stdout.write(JSON.stringify({ ...a, card: a.card && a.card.path }, replacer, 2) + '\n');
    return;
  }
  const md = render(a);
  if (opts.stdout) { process.stdout.write(md); return; }
  const dir = path.join(opts.out, opts.card || 'uncarded');
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, path.basename(a.file).replace(/\.sid$/i, '') + '.md');
  fs.writeFileSync(dest, md);
  process.stderr.write(path.relative(REPO, dest).replace(/\\/g, '/') + '  [' + a.rel.verdict + '] ' +
    a.rel.onsets + ' onsets, ' + a.observed.length + ' instruments' +
    (a.layout ? ', card ' + a.layout.verdict : '') + '\n');
}

if (require.main === module) main();

module.exports = { readPsid, foldTimelines, findOnsets, reliability, profile, checkLayout, searchLayout, searchSplitLayout };
