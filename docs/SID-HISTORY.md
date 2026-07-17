# A History of SID Players and Composers — narrative scaffold

**Status: SCAFFOLD, not a finished history.** This is the organizing structure
for the SID-player/composer history the knowledge base was built to support (see
the `project-tdz-endgame` context). Every factual anchor here is traceable to a
specific knowledge card, a card `edges[]` relationship, or a
`scripts/dev/find-connections.js` finding — nothing is asserted from general
recollection. Where a section rests on an *organizing hypothesis* rather than a
card-sourced fact, it says so. Sections marked **[needs writing]** are structure
only; **[established]** points are safe to expand into prose as-is.

This document is curated, not generated — but it is meant to be *re-derived and
extended* as the corpus grows. When a new connection is confirmed (a prose
`[[link]]` added to a pair of cards), fold it into the relevant section here.

---

## Method: the two kinds of connection

The history has two distinct kinds of link between players, and the KB keeps
them rigorously separate — the distinction is the analytical backbone of any
honest SID history:

1. **Code lineage** — one routine derives from, succeeds, or shares a replay
   routine with another. Recorded as a machine `edges[]` relationship
   (`derives_from` / `successor_of` / `shares_routine_with`), and only when
   there is disassembly, source, or author-statement evidence. There are
   currently **49 such edges across 17 connected clusters** (`build-graph.js`).
   These are the *technical* family tree.

2. **Scene / person relationships** — the same composers, group, or scene
   circle used two otherwise-unrelated tools. This is a *social* fact, never
   code evidence, so it is recorded as prose `[[links]]` in both cards and
   **never** as an edge. Surfaced by `find-connections.js` (composer-overlap
   over `data/composers/*.json`), then confirmed by checking the shared cohort
   is coherent (e.g. one nationality) rather than a popular-tool or
   bridge-composer artifact.

A real history needs both: the code tree shows how the *technology* propagated;
the scene links show how *people and communities* actually moved between tools.

---

## Era I — the game-composer routines (early–mid 1980s) **[established]**

The oldest layer is hand-coded, per-game 6502 music drivers written by
individual game composers — no reusable editor, the "format" is whatever the
composer's own assembly source encoded. These are also the KB's most solid
ground: **6 of the 7 `verified` cards are from this era**, grounded in
disassembly or the composer's own published source:

| Year | Routine | Composer |
|---|---|---|
| ~1980 | [[david-whittaker]] | David Whittaker |
| ~1980 | [[matt-gray]] | Matt Gray |
| 1984 | [[fred-gray]] | Fred Gray |
| 1985 | [[martin-galway]] | Martin Galway |
| 1985 | [[rob-hubbard]] | Rob Hubbard |
| 1986 | [[jeroen-kimmel]] | Jeroen Kimmel (Red) |

Two code lineages already sit inside this era:

- **The Hubbard cluster** (`edges`, 4 cards): [[jeroen-kimmel]] —
  [[rob-hubbard]] — [[robtracker]] (Jason Page & Rob Hubbard) —
  [[rob-hubbard-digi]]. Hubbard's routine was reused/adapted widely (the repo's
  own finding: the plain `Rob_Hubbard` tag is only ~28% Hubbard's own files,
  spread across 51 composers), so this is a genuine hub, not a personal dead-end.
- **The Whittaker cluster** (`edges`, 3 cards): [[david-dunn]] —
  [[jason-brooke]] — [[david-whittaker]].

**The Ocean Software axis (scene relationship, #73):** [[martin-galway]] and
[[music-driver-paul-hughes]] are linked by an organizational succession — Paul
Hughes wrote his in-house Ocean driver *after Galway left the company*,
expressly "for the new guys to use," and the same Ocean composers (Jonathan
Dunn, Matthew Cannon, Peter Clarke) span both. This is the clearest example of a
*studio* (not just an author) as a unit of SID history. **[needs writing]** —
worth developing into a full "the Ocean sound" section; candidate additional
anchors: Jonathan Dunn's and Matthew Cannon's own routines if/when carded.

Also rooted here: [[soundmonitor]], whose cluster reaches back to a Chris
Hülsbeck game routine and forward to [[rockmonitor]] — the bridge from
personal game-driver to *published editor* (see Era II).

---

## Era II — the first editors and trackers (late 1980s) **[needs writing]**

The shift from personal routines to reusable, distributable editors. Anchors
present in the KB:

- **[[dmc]] / [[gmc]] cluster** (`edges`, 3 cards) — Demo Music Creator / Game
  Music Creator, by Brian (Graffity). DMC is the single largest player family in
  the collection (~10,000+ files); its ubiquity is why DMC↔other-big-tool
  composer overlaps are *popular-tool artifacts*, not connections (see Method).
- **[[future-composer]] cluster** (`edges`, 3 cards) — Future Composer /
  MoN/FutureComposer / [[mon-deenen]] (Maniacs of Noise replay, Charles Deenen).
  The Dutch MoN axis (Deenen, Jeroen Tel) is a candidate scene section.
- **[[soundmonitor]] → [[rockmonitor]]** — the type-in-listing origin
  (SoundMonitor shipped as a 1986 magazine listing) is a distinct distribution
  story worth its own paragraph.
- **[[music-assembler]]** — MC/Marco Swagerman; a major early editor.

Open question threading into this era: the **Hungarian editor scene** begins
here (see National Scenes).

---

## Era III — the tracker dynasty (the code spine) **[established]**

The single largest code lineage in the KB — **15 cards in one connected
cluster** — and the backbone of any technical SID history. From `edges[]`:

> [[laxity-newplayer]] · [[jch-newplayer]] · [[jch-oldplayer]] ·
> [[jch-newplayer-v20]] · JCH Protracker · Kosa Protracker · Glover NewPlayer
> V21 · Dane NewPlayer · the Laxity NP21 forks (Beast/Angular, Stinsen, DRAX) ·
> [[sid-factory]] · [[sid-factory-ii]] · SID Factory II Driver 11 ·
> [[cheesecutter]]

This is the **Danish / Vibrants axis** (Laxity = Thomas Egeskov Petersen of
Vibrants; JCH = Jens-Christian Huus) propagating forward through decades into
the modern [[sid-factory-ii]]. [[laxity-newplayer]] is the *one verified card in
this cluster* (~99.93% frame-accurate against SIDM2's disassembly), making it
the technical keystone. **[established]** — this section can be written from the
edges alone; it is the best-evidenced narrative in the whole corpus.

Smaller adjacent code lineages (2-card `edges` clusters) that belong near here:
[[1-raster-tracker]] → SID-Wizard (Hermit); Music Studio 2 → Music Studio Plus;
NinjaTracker V1→V2 (Cadaver); Wizax-A → Zetrex/YP (shared $E000 player);
Padua's Music Mixer → Music Assembler.

---

## National scenes (person/scene relationships) **[partly established]**

Where the *social* history lives. Each of these is a scene circle using a
coherent set of tools — grounded in `find-connections.js` cohorts confirmed by
composer nationality in `data/composers/*.json`.

- **Danish** — the Vibrants/Laxity/JCH tracker dynasty (Era III). **[established]**
- **Hungarian** — [[chubrocker]] ↔ [[sosperec]] share a mid-1990s Hungarian
  composer circle (Chubrock, DOS, Mercury, Peet — all Hungarian; #73). Also
  Hungarian: [[odintracker]] (Zed / Zoltán Konyha). And the *modern revival*
  wing — Hermit's [[1-raster-tracker]]/SID-Wizard/[[flexsid]], heavily used by
  NecroPolo and the modern Hungarian scene. **[established for the two links;
  the wider scene needs writing]**
- **Polish** — [[hardtrack-composer]] (Longhair/Brush, Elysium) and a large
  Polish composer cohort (Bax, Data, JFK, Leming, Praiser, Randy, V-12, Warlock)
  that *also adopted the German* [[reflextracker]], of which they are the top
  users — a cross-scene adoption (#73). **[established]**
- **UK game industry** — the Ocean axis (Era I); Whittaker/Dunn/Brooke.
  **[partly established]**
- **German** — Hülsbeck ([[soundmonitor]] cluster); the Reflex group
  ([[reflextracker]]); Markus Schneider's LordsOfSonics → [[x-ample]] driver.
  **[needs writing]**
- **Dutch** — Maniacs of Noise (Deenen, Jeroen Tel; [[mon-deenen]] /
  [[future-composer]]); Reyn Ouwehand. **[needs writing]**
- **Norwegian** — Olav Mørkrid's same-author cluster ([[digitalizer]] /
  [[olav-morkrid]] / [[omegasupreme-digi]]) and the Panoramic circle (#72).
  **[established as a same-author cluster; scene context needs writing]**

**Cross-scene adoptions** — the most interesting social findings, where a tool
crossed a national boundary:
- UK Sonic Graffiti ↔ Swedish [[system6581]] (#72): the four
  [[sonic-graffiti]] musicians were System 6581's second-largest user cohort.
- Polish scene ↔ German [[reflextracker]] (#73, above).

---

## The bridge composers (the omnivores) **[established]**

A handful of composers used tools from a very large number of *distinct
developers*, tying otherwise-separate scenes together (from
`find-connections.js` analysis 1):

> NecroPolo (15 devs) · Vincenzo (14) · Richard Bayliss (13) · SMC (13) ·
> Tomas Danko (11) · Deadman, Demosic (10 each) · DRAX, Fanta, Glenn Gallefoss
> (9 each)

These are mostly *modern-era* composers (the C64 revival scene) who treat every
tracker as fair game. **Analytically important as a caution as much as a
finding**: their overlap inflates apparent "connections" between niche modern
trackers that are really just "NecroPolo tried both" — which is why
`find-connections.js` prints this list first, to discount those pairs. In the
narrative they are the connective tissue of the *modern* scene, not evidence of
tool lineage. **[established]**

---

## The modern revival (2000s+) **[needs writing]**

[[sid-factory-ii]], [[cheesecutter]], SID-Wizard, GoatTracker-era tools, and the
active national revival scenes (esp. Hungarian). The tracker dynasty (Era III)
extends directly into this period, so it is less a break than a continuation.
Anchors are present; the section is unwritten.

---

## What's still missing / next passes

- **~9 lower-value overlap pairs** from the first `find-connections.js` scan
  remain unexamined (mostly popular-tool or bridge-composer artifacts — see the
  script header). A second scan angle not yet tried: **CSDb scene-group
  membership** cross-referenced against tool usage (which *groups* drove which
  tools), which the main reference's Scene Groups tab already computes.
- **Two dangling edges** point at uncarded targets that would complete a
  lineage: `audiomaster-v1` (from [[mon-bjerregaard]]) and `prophet64` (from
  [[mssiah]], its 8bit-Ventures predecessor).
- The `Basic_Program` (234 files) and RSID-tail families are still uncarded;
  they are unlikely to add lineage but would close coverage.
- **Temporal flows** — the KB has per-card release years but no analysis of
  *composers migrating from tool to tool over time*; that's the missing
  dimension for a genuinely chronological narrative.
- Most Era II / national-scene sections above are **[needs writing]**: the
  structure and anchors are here, the prose is not.

---

## Sources

Every anchor above is a knowledge card under `knowledge/players/` (follow the
`[[id]]` links), a card `edges[]` relationship (see `knowledge/graph.json`, via
`node knowledge/build-graph.js`), or a `scripts/dev/find-connections.js`
finding. The cross-scene findings tagged (#72)/(#73) are recorded in the
respective cards' `quirks[]` with their shared-composer evidence. No claim in
this scaffold originates outside that corpus.
