# A History of SID Players and Composers — narrative scaffold

**Status: SCAFFOLD, not a finished history.** This is the organizing structure
for the SID-player/composer history the knowledge base was built to support (see
the `project-tdz-endgame` context). Every factual anchor here is traceable to a
specific knowledge card, a card `edges[]` relationship, or a
`scripts/dev/find-connections.js` finding — nothing is asserted from general
recollection. Where a section rests on an *organizing hypothesis* rather than a
card-sourced fact, it says so. Sections marked **[needs writing]** are structure
only; **[established]** points are safe to expand into prose as-is; **[written]**
sections have already been expanded into full cited prose.

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

## Era III — the tracker dynasty (the code spine) **[written]**

The single largest code lineage in the knowledge base — **15 cards in one
connected `edges[]` cluster** — is also the backbone of any technical SID
history. It is a single continuous thread that runs from **1988 to 2019 and
beyond**, and the through-line is one specific design idea: JCH's "contiguous
sequence stacking" track system, which every player below either introduced,
inherited, or deliberately rebuilt. This is the best-evidenced narrative in the
whole corpus; every claim in this section is a card `edges[]` relationship, not
an inference.

**The root: JCH, 1988.** The line begins with [[jch-oldplayer]] (pre-1988) and
its `successor_of` [[jch-newplayer]] (Jens-Christian Huus), whose true start is
the `v00.xx` series of 17–23 July 1988. JCH NewPlayer became the single most
influential *editor-paired* player routine of the Danish scene, and the hub from
which most of this cluster radiates.

**The JCH radiation (1988–2011).** JCH extended his own line —
[[jch-newplayer-v20]] `derives_from` [[jch-newplayer]] (the JCH-Editor v3.x era,
~1990–91) — and then others forked or re-fronted it, each spreading it into a
new scene and decade:

- [[jch-protracker]] (Jakub Kosinski / "Kosa", 1995) is `derives_from`
  [[jch-newplayer]] — Kosa's own GUI wrapped around JCH's engine — and
  [[kosa-protracker]] `shares_routine_with` it (the same engine under a second
  tag).
- [[glover-newplayer]] V21 (Lukasz Baran / "Glover", Samar Productions, 2000)
  `derives_from` [[jch-newplayer]] — the line reaching the Polish scene.
- [[dane-newplayer]] (Stellan Andersson / "Dane", Booze Design, 2011)
  `derives_from` [[jch-newplayer]] — JCH's 1988 engine still being carried
  forward more than two decades later.

**The Laxity convergence (2005) — the verified keystone.** In 2005 Thomas
Egeskov Petersen ("Laxity", of Vibrants) coded [[laxity-newplayer]] v21 *from
scratch* as a rewrite of JCH's NewPlayer system, keeping the table layout of
JCH's v20.g4. So it `shares_routine_with` [[jch-newplayer]] at the level of the
"contiguous sequence stacking" *lineage and table layout* — but, importantly,
with an **incompatible sequence architecture**: a shared design ancestry, not
copied code. This card is the one `verified` node in the cluster (validated
~99.93% frame-accurate against SIDM2's disassembly), which makes it the
technical keystone — the point where the two great Danish player families are
provably linked.

**The Laxity NP21 forks.** Laxity's rewrite then became a root in its own right:
[[beast-angular-newplayer]], [[stinsen-newplayer]], and [[drax-newplayer]]
(Thomas Mogensen / "DRAX", 2008–2022) each `derives_from` [[laxity-newplayer]].
And [[cheesecutter]] (Timo Taipalus / "abaddon", Triad, 2011) is the cluster's
true crossroads: it `derives_from` [[laxity-newplayer]] **and**
`shares_routine_with` [[jch-newplayer]] — a modern, cross-national inheritor
(Finnish scene) pulling directly from *both* roots.

**SID Factory → SID Factory II — the dynasty comes full circle.** In parallel,
Laxity built the modern editors. The original [[sid-factory]] (~2005)
`shares_routine_with` both [[jch-newplayer]] and [[laxity-newplayer]]. Its
`successor_of` [[sid-factory-ii]] (2019, GPL, cross-platform) again uses JCH's
contiguous-sequence-stacking track system, with [[sid-factory-ii-driver-11]] as
its current swappable driver (`derives_from` SF2). The historical payoff is in
SF2's own credits: it was built **with the assistance of JCH himself** (and
Michel de Bree). The man whose 1988 player started this entire line is a
credited collaborator on the 2019 editor that continues it — the dynasty's two
founders, JCH and Laxity, reunited across 31 years.

**Adjacent smaller code lineages** (2-card `edges` clusters) sit near this spine:
[[1-raster-tracker]] → SID-Wizard (Hermit); Music Studio 2 → Music Studio Plus;
NinjaTracker V1→V2 (Cadaver); [[wizax-a]] → [[zetrex-yp]] (a shared `$E000`
player, a pre-NP21 Vibrants-era thread); Padua's Music Mixer → [[music-assembler]].

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
