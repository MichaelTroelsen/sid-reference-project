#!/usr/bin/env node
'use strict';
/*
 * vsid-trace.js — VICE-based SID register-write tracer.
 *
 * Wraps VICE's `vsid` in `-sounddev dump` mode to produce a clean, per-frame
 * register-write trace ($D400-$D418) from a .sid file.
 *
 * Why this exists: the project's own tracer (sidm2-sid-trace.exe) drives a SID
 * by calling the PSID-declared play address once per frame. RSID files that
 * install their own IRQ have playAddress = $0000 — there is nothing to call, so
 * that tracer honestly reports zero writes. SIDwinder refuses RSID outright.
 * vsid runs a full emulated C64 (VIC/CIA interrupts included), so a
 * self-installing-IRQ player is driven by the machine itself.
 *
 * Usage:
 *   node scripts/dev/vsid-trace.js <file.sid> [options]
 *
 * Options:
 *   --frames <n>            Frames to trace (default 50 = ~1 second).
 *   --song <n>              Subtune / PSID tune number (1-based, vsid -tune).
 *   --json                  Emit JSON instead of a human-readable summary.
 *   --out <path>            Write output to <path> instead of stdout.
 *   --changed-only          Drop writes that don't change the register's value,
 *                           matching sidm2-sid-trace.exe semantics (SID reset
 *                           state is modelled as $00 on every register).
 *   --keep-preamble         Keep VICE's own pre-init SID writes (see below).
 *   --keep-dump <path>      Keep the raw vsid dump instead of deleting it.
 *   --cycles-per-frame <n>  Override the frame length (default: from the SID
 *                           header's clock flag — PAL 19656 / NTSC 17095).
 *   --vsid <path>           Path to vsid.exe (else $VSID, else the default).
 *   -h, --help              Show this help.
 *
 * See scripts/dev/README.md for the reverse-engineered dump format.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const DEFAULT_VSID = 'C:\\winvice\\bin\\vsid.exe';
const CYCLES_PER_FRAME_PAL = 19656; // 63 cycles * 312 rasterlines
const CYCLES_PER_FRAME_NTSC = 17095; // 65 cycles * 263 rasterlines

/**
 * $D400-$D418 register names, indexed by offset from $D400. These deliberately
 * match sidm2-sid-trace.exe's vocabulary exactly so traces from the two tools
 * can be diffed without a translation table.
 */
const REG_NAMES = [
  'osc1_freq_lo', 'osc1_freq_hi', 'osc1_pw_lo', 'osc1_pw_hi', 'osc1_control',
  'osc1_attack_decay', 'osc1_sustain_release',
  'osc2_freq_lo', 'osc2_freq_hi', 'osc2_pw_lo', 'osc2_pw_hi', 'osc2_control',
  'osc2_attack_decay', 'osc2_sustain_release',
  'osc3_freq_lo', 'osc3_freq_hi', 'osc3_pw_lo', 'osc3_pw_hi', 'osc3_control',
  'osc3_attack_decay', 'osc3_sustain_release',
  'filter_freq_lo', 'filter_freq_hi', 'filter_res_control', 'filter_mode_volume',
];

// ---------------------------------------------------------------- CLI

function parseArgs(argv) {
  const opts = {
    file: null, frames: 50, song: null, json: false, out: null,
    changedOnly: false, keepPreamble: false, keepDump: null,
    cyclesPerFrame: null, vsid: null,
  };
  const needsValue = new Set(['--frames', '--song', '--out', '--keep-dump', '--cycles-per-frame', '--vsid']);
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') return { help: true };
    if (needsValue.has(a) && i + 1 >= argv.length) die(`${a} requires a value`);
    switch (a) {
      case '--frames': opts.frames = int(argv[++i], '--frames'); break;
      case '--song': opts.song = int(argv[++i], '--song'); break;
      case '--json': opts.json = true; break;
      case '--out': opts.out = argv[++i]; break;
      case '--changed-only': opts.changedOnly = true; break;
      case '--keep-preamble': opts.keepPreamble = true; break;
      case '--keep-dump': opts.keepDump = argv[++i]; break;
      case '--cycles-per-frame': opts.cyclesPerFrame = int(argv[++i], '--cycles-per-frame'); break;
      case '--vsid': opts.vsid = argv[++i]; break;
      default:
        if (a.startsWith('-')) die(`unknown option: ${a}`);
        if (opts.file) die(`unexpected extra argument: ${a}`);
        opts.file = a;
    }
  }
  return opts;
}

function int(s, what) {
  const n = Number(s);
  if (!Number.isInteger(n) || n <= 0) die(`${what} must be a positive integer (got "${s}")`);
  return n;
}

function die(msg) {
  process.stderr.write(`vsid-trace: ${msg}\n`);
  process.exit(2);
}

function usage() {
  const src = fs.readFileSync(__filename, 'utf8');
  const block = src.slice(src.indexOf('/*'), src.indexOf('*/'));
  process.stdout.write(block.replace(/^\/\*\n?/, '').replace(/^ \* ?/gm, '') + '\n');
}

// ---------------------------------------------------------------- SID header

/**
 * Parse the bits of the PSID/RSID header we care about. Big-endian throughout;
 * see the PSID v2NG spec. Returns null if this isn't a SID file at all.
 */
function readSidHeader(file) {
  const fd = fs.openSync(file, 'r');
  const buf = Buffer.alloc(0x7c);
  const got = fs.readSync(fd, buf, 0, 0x7c, 0);
  fs.closeSync(fd);
  if (got < 0x16) return null;
  const magic = buf.toString('ascii', 0, 4);
  if (magic !== 'PSID' && magic !== 'RSID') return null;
  const version = buf.readUInt16BE(0x04);
  const h = {
    magic,
    version,
    dataOffset: buf.readUInt16BE(0x06),
    loadAddress: buf.readUInt16BE(0x08),
    initAddress: buf.readUInt16BE(0x0a),
    playAddress: buf.readUInt16BE(0x0c),
    songs: buf.readUInt16BE(0x0e),
    startSong: buf.readUInt16BE(0x10),
    name: cstr(buf, 0x16, 32),
    author: cstr(buf, 0x36, 32),
    released: cstr(buf, 0x56, 32),
    clock: 'unknown',
  };
  if (version >= 2 && got >= 0x78) {
    // flags bits 2-3: 00 unknown, 01 PAL, 10 NTSC, 11 both
    const clockBits = (buf.readUInt16BE(0x76) >> 2) & 0x3;
    h.clock = ['unknown', 'PAL', 'NTSC', 'PAL/NTSC'][clockBits];
  }
  return h;
}

function cstr(buf, off, len) {
  const s = buf.toString('latin1', off, off + len);
  const z = s.indexOf('\0');
  return (z === -1 ? s : s.slice(0, z)).trim();
}

// ---------------------------------------------------------------- vsid

function locateVsid(override) {
  const cand = override || process.env.VSID || DEFAULT_VSID;
  if (!fs.existsSync(cand)) {
    die(
      `vsid.exe not found at ${cand}\n` +
      `  VICE's vsid is required. Install VICE and either put vsid.exe at\n` +
      `  ${DEFAULT_VSID}, set the VSID environment variable, or pass --vsid <path>.`
    );
  }
  return cand;
}

/**
 * Run vsid to completion and return the path of the raw dump it produced.
 *
 * Note: vsid exits with status 1 on a normal -limitcycles termination, so the
 * exit code says nothing about success — the dump file's existence does.
 */
function runVsid(vsidPath, sidFile, cycles, opts, dumpPath, clock) {
  const args = ['-console', '-sounddev', 'dump', '-soundarg', dumpPath, '-limitcycles', String(cycles)];
  // Pin the sync factor so our cycles-per-frame maths matches what vsid ran.
  if (clock === 'NTSC') args.push('-ntsc'); else args.push('-pal');
  if (opts.song != null) args.push('-tune', String(opts.song));
  args.push(sidFile);

  const res = spawnSync(vsidPath, args, { encoding: 'utf8', windowsHide: true });
  if (res.error) die(`failed to run vsid: ${res.error.message}`);
  if (!fs.existsSync(dumpPath)) {
    const tail = (res.stderr || res.stdout || '').trim().split('\n').slice(-8).join('\n');
    die(`vsid produced no dump file (exit ${res.status}).\n${tail}`);
  }
  return { args };
}

// ---------------------------------------------------------------- parser

/**
 * Parse a vsid `-sounddev dump` file.
 *
 * The dump interleaves two kinds of line:
 *   1. Register writes, as `<delta_cycles> <reg> <value>` — all DECIMAL.
 *      delta_cycles is the CPU cycles elapsed SINCE THE PREVIOUS WRITE (not an
 *      absolute timestamp); reg is the offset from $D400 (0-24); value is 0-255.
 *   2. Periodic full-SID-state snapshots, emitted as repeating 7-line blocks
 *      (FREQ:/PULSE:/CTRL:/ADSR:/FILTER:/ADC:/OSC3:). These are a rendering of
 *      current chip state, NOT writes, and carry no timing we need — the deltas
 *      already fully determine time. They are discarded.
 *
 * There is no header and no trailer.
 */
const TRIPLE_RE = /^(\d+)\s+(\d+)\s+(\d+)$/;
const SNAPSHOT_RE = /^(FREQ:|PULSE:|CTRL:|ADSR:|FILTER:|ADC:|OSC3:)/;

function parseDump(text) {
  const writes = [];
  const unparsed = [];
  let clk = 0;
  let snapshots = 0;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    if (SNAPSHOT_RE.test(line)) { snapshots++; continue; }
    const m = TRIPLE_RE.exec(line);
    if (!m) { if (unparsed.length < 5) unparsed.push(line); continue; }
    const reg = Number(m[2]);
    clk += Number(m[1]); // field 1 is a DELTA, so accumulate
    if (reg > 24) continue; // beyond $D418 — 2nd/3rd SID or non-SID; ignore
    writes.push({ cycle: clk, reg, value: Number(m[3]) });
  }
  return { writes, snapshots, unparsed, totalCycles: clk };
}

/**
 * Drop writes that don't change the register's value. The SID's reset state is
 * $00 on every register, which is the model sidm2-sid-trace.exe uses; matching
 * it here is what makes the two tracers agree write-for-write.
 */
function filterChanged(writes) {
  const state = new Array(25).fill(0);
  const out = [];
  for (const w of writes) {
    if (state[w.reg] === w.value) continue;
    state[w.reg] = w.value;
    out.push(w);
  }
  return out;
}

/**
 * VICE sets the SID's volume itself before handing control to the tune's init:
 * every dump observed begins with `$D418 = $0F` at cycle 342 — identical cycle
 * across PSID and RSID and across unrelated players (Hubbard, Galway, Daglish,
 * Music_Processor), which is what identifies it as the emulator's write rather
 * than any tune's. Left in, it would read as "this player sets volume to $0F",
 * which is wrong.
 *
 * So we strip exactly that one write and nothing else. Everything after it —
 * including register-clearing prologues that look boilerplate — is the tune's
 * own init and differs per player, so it is kept. (Deliberately narrow: an
 * earlier "strip everything before the first big inter-write gap" rule ate the
 * whole 20-write init of Music_Processor RSIDs.)
 */
const VICE_PREAMBLE_CYCLE_MAX = 1000;
function stripPreamble(writes, cyclesPerFrame) {
  const w = writes[0];
  if (w && w.reg === 24 && w.value === 0x0f && w.cycle <= VICE_PREAMBLE_CYCLE_MAX) {
    return { writes: writes.slice(1), stripped: [w] };
  }
  return { writes, stripped: [] };
}

function groupByFrame(writes, cyclesPerFrame, originCycle) {
  const frames = new Map();
  for (const w of writes) {
    const rel = w.cycle - originCycle;
    const f = Math.floor(rel / cyclesPerFrame);
    if (!frames.has(f)) frames.set(f, []);
    frames.get(f).push({
      cycle: rel - f * cyclesPerFrame, // cycle within the frame
      reg: w.reg,
      register: REG_NAMES[w.reg],
      addr: '$' + (0xd400 + w.reg).toString(16).toUpperCase(),
      value: w.value,
      hex: '$' + w.value.toString(16).toUpperCase().padStart(2, '0'),
    });
  }
  return [...frames.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([frame, ws]) => ({ frame, writes: ws }));
}

// ---------------------------------------------------------------- reporting

function buildReport(header, frameGroups, meta) {
  const totalWrites = frameGroups.reduce((n, f) => n + f.writes.length, 0);
  const regsTouched = new Set();
  for (const f of frameGroups) for (const w of f.writes) regsTouched.add(w.reg);
  const activeFrames = frameGroups.filter((f) => f.writes.length > 0).length;
  const lastFrame = frameGroups.length ? frameGroups[frameGroups.length - 1].frame : -1;

  // A conventional 50Hz player writes in (nearly) every frame. A player that
  // only touches the SID on note changes will show far fewer active frames.
  const coverage = meta.frames > 0 ? activeFrames / meta.frames : 0;
  let cadence;
  if (totalWrites === 0) cadence = 'no-writes';
  else if (coverage >= 0.9) cadence = 'per-frame (~50Hz, conventional player)';
  else if (coverage >= 0.4) cadence = 'intermittent';
  else cadence = 'sparse (writes only on note/state changes)';

  return {
    file: meta.file,
    sid: header && {
      format: header.magic,
      version: header.version,
      name: header.name,
      author: header.author,
      released: header.released,
      initAddress: '$' + header.initAddress.toString(16).padStart(4, '0'),
      playAddress: '$' + header.playAddress.toString(16).padStart(4, '0'),
      songs: header.songs,
      startSong: header.startSong,
      clock: header.clock,
    },
    trace: {
      framesRequested: meta.frames,
      cyclesPerFrame: meta.cyclesPerFrame,
      limitCycles: meta.cycles,
      changedOnly: meta.changedOnly,
      preambleStripped: meta.preambleStripped,
      rawWriteCount: meta.rawWriteCount,
      writeCount: totalWrites,
      framesWithWrites: activeFrames,
      lastFrameWithWrites: lastFrame,
      writesPerActiveFrame: activeFrames ? +(totalWrites / activeFrames).toFixed(2) : 0,
      cadence,
      registersTouched: [...regsTouched].sort((a, b) => a - b).map((r) => ({
        reg: r, addr: '$' + (0xd400 + r).toString(16).toUpperCase(), register: REG_NAMES[r],
      })),
    },
    frames: frameGroups,
  };
}

function renderText(rep) {
  const L = [];
  const t = rep.trace;
  L.push(`file      : ${rep.file}`);
  if (rep.sid) {
    L.push(`sid       : ${rep.sid.format} v${rep.sid.version}  "${rep.sid.name}" by ${rep.sid.author}`);
    L.push(`            init=${rep.sid.initAddress} play=${rep.sid.playAddress} songs=${rep.sid.songs} clock=${rep.sid.clock}`);
    if (rep.sid.playAddress === '$0000') {
      L.push(`            play=$0000 -> self-installing IRQ; only an emulated machine can drive this.`);
    }
  }
  L.push('');
  L.push(`frames    : ${t.framesRequested} requested @ ${t.cyclesPerFrame} cycles/frame (${t.limitCycles} cycles)`);
  L.push(`writes    : ${t.writeCount}${t.changedOnly ? ` (changed-only; ${t.rawWriteCount} raw)` : ` raw`}`);
  L.push(`active    : ${t.framesWithWrites}/${t.framesRequested} frames had writes; last activity frame ${t.lastFrameWithWrites}`);
  L.push(`rate      : ${t.writesPerActiveFrame} writes per active frame`);
  L.push(`cadence   : ${t.cadence}`);
  if (t.preambleStripped) L.push(`preamble  : ${t.preambleStripped} pre-init VICE write(s) stripped (use --keep-preamble to retain)`);
  L.push('');
  L.push(`registers touched (${t.registersTouched.length}):`);
  for (const r of t.registersTouched) L.push(`  ${r.addr}  ${r.register}`);
  L.push('');
  L.push('per-frame writes:');
  if (!rep.frames.length) {
    L.push('  (none)');
  } else {
    for (const f of rep.frames) {
      const ws = f.writes.map((w) => `${w.register}=${w.hex}`).join(' ');
      L.push(`  f${String(f.frame).padStart(4)}  [${String(f.writes.length).padStart(2)}]  ${ws}`);
    }
  }
  return L.join('\n') + '\n';
}

// ---------------------------------------------------------------- main

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) { usage(); return; }
  if (!opts.file) { usage(); process.exit(2); }
  if (!fs.existsSync(opts.file)) die(`no such file: ${opts.file}`);

  const sidFile = path.resolve(opts.file);
  const header = readSidHeader(sidFile);
  if (!header) die(`not a PSID/RSID file (bad magic): ${sidFile}`);

  const vsidPath = locateVsid(opts.vsid);
  const clock = header.clock === 'NTSC' ? 'NTSC' : 'PAL';
  const cyclesPerFrame = opts.cyclesPerFrame
    || (clock === 'NTSC' ? CYCLES_PER_FRAME_NTSC : CYCLES_PER_FRAME_PAL);
  // +1 frame of headroom: the machine spends ~1 frame booting before init runs,
  // so asking for exactly N frames of cycles yields N-1 frames of music.
  const cycles = (opts.frames + 1) * cyclesPerFrame;

  // Scratch dir for the raw dump. When --keep-dump sends the dump elsewhere the
  // dir stays empty, but it is still created and so must still be cleaned up.
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vsid-trace-'));
  const dumpPath = opts.keepDump ? path.resolve(opts.keepDump) : path.join(tmpDir, 'dump.txt');

  let rep;
  try {
    runVsid(vsidPath, sidFile, cycles, opts, dumpPath, clock);
    const text = fs.readFileSync(dumpPath, 'utf8');
    const parsed = parseDump(text);
    if (parsed.unparsed.length) {
      process.stderr.write(
        `vsid-trace: warning: ${parsed.unparsed.length}+ unrecognised dump line(s), e.g. ` +
        `${JSON.stringify(parsed.unparsed[0])}\n`
      );
    }

    const rawWriteCount = parsed.writes.length;
    let writes = parsed.writes;
    let stripped = [];
    if (!opts.keepPreamble) ({ writes, stripped } = stripPreamble(writes, cyclesPerFrame));
    // Origin = the player's first write, so frame 0 is the start of the music
    // rather than the start of the emulated machine's boot.
    const origin = writes.length ? writes[0].cycle : 0;
    if (opts.changedOnly) writes = filterChanged(writes);

    const frameGroups = groupByFrame(writes, cyclesPerFrame, origin)
      .filter((f) => f.frame < opts.frames);

    rep = buildReport(header, frameGroups, {
      file: sidFile, frames: opts.frames, cyclesPerFrame, cycles,
      changedOnly: opts.changedOnly, rawWriteCount, preambleStripped: stripped.length,
    });
  } finally {
    // Always remove the scratch dir; --keep-dump only relocates the dump file
    // out of it, it doesn't mean "keep the directory too".
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch { /* best effort */ }
  }

  const out = opts.json ? JSON.stringify(rep, null, 2) + '\n' : renderText(rep);
  if (opts.out) fs.writeFileSync(opts.out, out);
  else process.stdout.write(out);
}

if (require.main === module) main();

module.exports = { parseDump, filterChanged, stripPreamble, groupByFrame, readSidHeader, REG_NAMES };
