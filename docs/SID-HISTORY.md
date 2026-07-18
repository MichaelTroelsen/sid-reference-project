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

## Era I — the game-composer routines (mid–late 1980s) **[written]**

The oldest layer of SID music is not tools at all but **hand-coded, per-game
6502 music drivers**, each written by an individual game composer. There was no
reusable editor and no shared file format — the "format" is whatever the
composer's own assembly source encoded, and the memory map varies from game to
game. In this collection these routines appear only because Player-ID
fingerprints their byte-signatures across the games that used them; a tag like
`Rob_Hubbard` marks a *routine*, not a product. This era is also the knowledge
base's most solid ground: **six of the seven `verified` cards belong to it**,
grounded in disassembly or (for Galway) the composer's own published source:

| Routine | Composer | When |
|---|---|---|
| [[david-whittaker]] | David Whittaker | reusable driver from ~1985 |
| [[matt-gray]] | Matt Gray | ~mid–late 1980s |
| [[fred-gray]] | Fred Gray | 1984–1990 |
| [[martin-galway]] | Martin Galway | ~1985–1987 (Ocean) |
| [[rob-hubbard]] | Rob Hubbard | ~1985 (first use late 1984/85) |
| [[jeroen-kimmel]] | Jeroen Kimmel (Red) | 1986+ |

**The Hubbard hub.** The defining figure is Rob Hubbard, the pre-eminent C64
game composer of 1983–88, whose ~1KB 6502 driver was so effective that it was
reverse-engineered and reused by *dozens* of other composers — the
[[rob-hubbard]] card names Jeroen Tel, Johannes Bjerregaard, Jeroen Kimmel, Neil
Baldwin, and Laxity among them. That is why 256 files across **51 composers**
fingerprint to the tag while only ~28% are actually Hubbard's own work: it marks
a routine *family*, not one man's output. The `edges[]` capture the core of it —
[[jeroen-kimmel]] `derives_from` [[rob-hubbard]], and both [[robtracker]] (Jason
Page & Rob Hubbard) and [[rob-hubbard-digi]] `share_routine_with` it. This hub
also reaches *across eras*: because Laxity was among those who reused Hubbard's
routine, Era I's foundational driver feeds forward — via Laxity — into the Era
III tracker dynasty.

**The Whittaker line.** David Whittaker (~100+ titles) did something different
with his personal driver: he **commercially licensed and sold it**, so it seeded
*other developers'* games directly rather than only being reverse-engineered.
That commercial reuse shows up as a short code lineage — [[jason-brooke]] is
both `derives_from` and `successor_of` [[david-whittaker]], and [[david-dunn]]
`shares_routine_with` [[jason-brooke]].

**The Ocean Software axis.** The clearest case of a *studio*, not just an author,
as a unit of SID history. [[martin-galway]] was Ocean's star composer until he
left the company (c. 1986–87); Paul Hughes then wrote a fresh in-house driver
([[music-driver-paul-hughes]]) expressly "for the new guys to use," and the same
Ocean composers — Jonathan Dunn, Matthew Cannon, Peter Clarke — carried across
both (surfaced by the composer-overlap scan, #73). No code passed from Galway to
Hughes (Hughes wrote from scratch), so this is an organizational succession, not
a code edge — but it is a genuine institutional thread, and a candidate to grow
into a full "the Ocean sound" section if Dunn's and Cannon's own routines are
ever carded.

**The pivot to editors.** The bridge out of this era runs through Chris
Hülsbeck. His personal game player routine ([[chris-huelsbeck]], Musicmaster
driver from 1985, Final Musicplayer 1987) `shares_routine_with` [[soundmonitor]]
— the editor he published in 1986, which itself famously shipped as a magazine
type-in listing — and [[rockmonitor]] then `derives_from` SoundMonitor. That
step, from a composer's private in-game driver to a *published, reusable editor*
anyone could type in and use, is exactly the transition that defines Era II.

---

## Era II — the first editors and trackers (late 1980s) **[written]**

If Era I was composers writing private drivers for their own games, Era II is
the birth of the **reusable, distributable editor**: a tool other people could
load, compose in, and circulate — the model that made the demoscene's music
culture possible. Four lineages in the KB mark the transition, and unlike the
game routines these are mostly *scene products*, released and versioned in the
open.

**The published-editor beginning: SoundMonitor → Rock Monitor.** The hinge, set
up at the close of Era I, is [[soundmonitor]] (Chris Hülsbeck, 1986) — an editor
that famously shipped as a *magazine type-in listing*, i.e. distribution as
publication. [[rockmonitor]] (Oscar Giesen "OPM" — code; Marco Swagerman "MC" —
music, 1987–88) `derives_from` it. This is the first appearance of the idea that
an editor is itself a scene artifact to be reworked and re-released, not a
one-composer secret.

**The MoN / Future Composer axis (1988) — the editor/driver split.** [[future-composer]]
is the era's most instructive object: a **Finnish Gold** editor wrapped around a
**Maniacs of Noise** replay driver (Charles Deenen / Jeroen Tel). The engine and
the interface came from *different hands* — the `edges[]` show [[mon-deenen]]
(Deenen's own MoN house driver, in use from the group's 1987 founding) and
[[mon-futurecomposer]] both `share_routine_with` [[future-composer]], and
mon-futurecomposer shares with mon-deenen too. So Future Composer is best read
not as one program but as *Deenen's driver + Granberg's editor*, a Dutch-engine /
Finnish-interface collaboration — and it was hugely adopted (3,398 files / 366
composers). This driver/editor separation is the same architectural idea that,
decades later, SID Factory II would formalise (Era III).

**The Graffity flagship: GMC → DMC (1990–91).** The Hungarian group **Graffity**
(Brian / Balázs Farkas) produced the era's — and the whole collection's —
heaviest-used family. [[gmc]] (Game Music Creator, Dec 1990) came first; its
`successor_of` and `derives_from` [[dmc]] (Demo Music Creator, 1991) became the
single most-used player in the entire corpus — **10,491 files across 365
composers**, often called "ProTracker for the C64," with V5.0 eventually placed
in the public domain. ([[gmc-v2]], the Superiors build, also `derives_from`
[[gmc]].) DMC's sheer ubiquity is exactly why DMC↔other-big-tool composer
overlaps are *popular-tool artifacts* rather than real connections (see Method).
Note the group-name trap: this Graffity is also the label on [[sosperec]]'s tag,
but that is a *different* Graffity coder (Grabowsky) — no code link (see the
Hungarian scene, below).

**Music Assembler → Padua (1989–91).** [[music-assembler]] (Marco Swagerman
"MC" & Oscar Giesen "OPM", released 1989, developed from Nov 1987) is a major
early editor, and [[padua-music-mixer]] (Paweł Sołtysiński "Polonus", 1991)
`derives_from` it — the line reaching the Polish scene. Worth flagging: MC and
OPM are the *same duo* behind Rock Monitor above, so this pair personally bridges
the SoundMonitor-derived lineage and the Music-Assembler lineage — an authorship
link, not a code edge.

Threads out of this era: the Hungarian editor scene (Graffity) and the Polish
scene (Padua) both begin here and continue in **National scenes**; the
editor/driver split matures into **Era III**.

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
