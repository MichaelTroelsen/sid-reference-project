# A History of SID Players and Composers

The music of the Commodore 64 is inseparable from the software that produced it.
Behind almost every SID tune is a **player** — a machine-code replay routine,
sometimes hand-written for a single game, sometimes a reusable editor circulated
across a whole scene. This is a history not of the tunes but of *those tools and
the people who built and used them*: how a handful of 1980s game-composer
routines gave way to distributable editors, how one Danish player lineage ran
unbroken for three decades, how national scenes formed around their own tools
and occasionally borrowed each other's, and how the whole culture turned, in the
2000s, to open source and self-preservation.

It is drawn entirely from this project's knowledge base. **Every factual anchor
below is traceable to a specific player card, a card lineage `edges[]`
relationship, or a `scripts/dev/find-connections.js` connection finding** —
nothing is asserted from general recollection, and where a claim is an
organizing inference rather than a sourced fact, it says so. The `[[bracketed]]`
names link to the underlying cards under `knowledge/players/`.

### The eras at a glance

| Era | Period | The defining shift | Anchors |
|---|---|---|---|
| **I. Game-composer routines** | mid–late 1980s | private, per-game hand-coded drivers | Hubbard, Whittaker, Galway, Fred/Matt Gray, Kimmel |
| **II. The first editors** | late 1980s | the reusable, *distributable* editor is born | SoundMonitor, Future Composer, GMC→DMC, Music Assembler |
| **III. The tracker dynasty** | 1988 → today | one code lineage, 15 cards, JCH → Laxity → SID Factory II | JCH NewPlayer, Laxity NewPlayer, SID Factory II, CheeseCutter |
| **National scenes** | throughout | tools as community markers (and cross-border borrowings) | Danish, Hungarian, Polish, British, German, Dutch, Norwegian… |
| **Modern revival** | 2000s+ | tools leave the C64, go cross-platform and open-source | SID Factory II, GoatTracker, CheeseCutter, SID-Wizard |

The first three sections are broadly chronological; **National scenes** and
**The bridge composers** cut across all of them (the social layer beneath the
technical one), and **Modern revival** is where the technical and social threads
rejoin.

---

## Method: the two kinds of connection

The history has two distinct kinds of link between players, and the KB keeps
them rigorously separate — the distinction is the analytical backbone of any
honest SID history:

1. **Code lineage** — one routine derives from, succeeds, or shares a replay
   routine with another. Recorded as a machine `edges[]` relationship
   (`derives_from` / `successor_of` / `shares_routine_with`), and only when
   there is disassembly, source, or author-statement evidence. There are
   currently **51 such edges across 19 connected clusters** (`build-graph.js`).
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

## Era I — the game-composer routines (mid–late 1980s)

The oldest layer of SID music is not tools at all but **hand-coded, per-game
6502 music drivers**, each written by an individual game composer. There was no
reusable editor and no shared file format — the "format" is whatever the
composer's own assembly source encoded, and the memory map varies from game to
game. In this collection these routines appear only because Player-ID
fingerprints their byte-signatures across the games that used them; a tag like
`Rob_Hubbard` marks a *routine*, not a product. This era is also the knowledge
base's most solid ground: **six of the whole knowledge base's 26 `verified` cards belong to it**,
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
a routine *family*, not one man's output. Two of those named reusers are now
carded in their own right: [[bjerregaard]] (Johannes Bjerregaard), whose
*second* music driver VGMPF documents as adapted directly from Hubbard's own
code (1987–88, before he joined Maniacs of Noise), and [[neil-baldwin]], a
self-taught composer-coder who wrote his own in-game routine and, by his own
account, was "greatly inspired by Hubbard and Galway" — a stylistic debt his
card is deliberate to keep as *influence*, explicitly not a code edge. The
`edges[]` capture the core of it —
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

**The Gremlin / We M.U.S.I.C. circle.** A second cluster of British game
composers shows the same private-routine layer with a twist — they shared a
*compiler*. [[ben-daglish]], Gremlin Graphics' other great name (The Last
Ninja, Gauntlet, 720 Degrees) and a Hubbard collaborator (they co-composed
*Auf Wiedersehen Monty*), did not write his tooling from scratch: through his
pre-Gremlin years his music ran on a compiler built by fellow game-coder
Antony Crowther, with whom he formed the outfit "We M.U.S.I.C." in 1986. And
Crowther's compiler, [[antony-crowther]]'s *Music Master*, was itself published
on 7 March 1986 as a type-in listing in *Your Commodore* magazine — a
composer's private tool turned into a magazine you typed in, exactly the
distribution-as-publication idea that [[soundmonitor]] carries into Era II.

**The pivot to editors.** The bridge out of this era runs through Chris
Hülsbeck. His personal game player routine ([[chris-huelsbeck]], Musicmaster
driver from 1985, Final Musicplayer 1987) `shares_routine_with` [[soundmonitor]]
— the editor he published in 1986, which itself famously shipped as a magazine
type-in listing — and [[rockmonitor]] then `derives_from` SoundMonitor. That
step, from a composer's private in-game driver to a *published, reusable editor*
anyone could type in and use, is exactly the transition that defines Era II.

---

## Era II — the first editors and trackers (late 1980s)

If Era I was composers writing private drivers for their own games, Era II is
the birth of the **reusable, distributable editor**: a tool other people could
load, compose in, and circulate — the model that made the demoscene's music
culture possible. Four lineages in the KB mark the transition, and unlike the
game routines these are mostly *scene products*, released and versioned in the
open.

**The published-editor beginning: SoundMonitor → Rock Monitor.** The hinge, set
up at the close of Era I, is [[soundmonitor]] (Chris Hülsbeck, 1986; its
runtime now `verified`) — an editor that famously shipped as a *magazine
type-in listing*, i.e. distribution as publication. [[rockmonitor]] (Oscar Giesen "OPM" — code; Marco Swagerman "MC" —
music, 1987–88; runtime now `verified`, scoped to the one real file that
survived a headless RSID/IRQ-driven-file survey) `derives_from` it. This is the first appearance of the idea that
an editor is itself a scene artifact to be reworked and re-released, not a
one-composer secret.

**The MoN / Future Composer axis (1988) — the editor/driver split.** [[future-composer]]
(runtime now `verified`, register-write-exact against two independent real files)
is the era's most instructive object: a **Finnish Gold** editor wrapped around a
**Maniacs of Noise** replay driver (Charles Deenen / Jeroen Tel). The engine and
the interface came from *different hands* — the `edges[]` show [[mon-deenen]]
(Deenen's own MoN house driver, in use from the group's 1987 founding) and
[[mon-futurecomposer]] both `share_routine_with` [[future-composer]], and
mon-futurecomposer shares with mon-deenen too. So Future Composer is best read
not as one program but as *Deenen's driver + Granberg's editor*, a Dutch-engine /
Finnish-interface collaboration — and it was hugely adopted (3,398 files / 366
composers). This driver/editor separation is the same architectural idea that,
decades later, SID Factory II would formalise (Era III). It also wasn't the only
Dutch tool built that way: the twin brothers Jeroen and Michiel Soede
(SoedeSoft) shipped [[soundmaster]] (runtime now `verified`, register-write-exact
against two independent real files) in 1988 with the same split made explicit —
Jeroen wrote the replay driver, Michiel the editor — and Jeroen states he built
the driver from scratch specifically "to be able to arrange with drums like Rob
Hubbard's," a direct line back to Era I's defining routine. It became one of the
era's genuinely widely-adopted editors (some 900 files across 63 composers here).

**The Graffity flagship: GMC → DMC (1990–91).** The Hungarian group **Graffity**
(Brian / Balázs Farkas) produced the era's — and the whole collection's —
heaviest-used family. [[gmc]] (Game Music Creator, Dec 1990) came first; its
`successor_of` and `derives_from` [[dmc]] (Demo Music Creator, 1991) became the
single most-used player in the entire corpus — **10,491 files across 365
composers**, often called "ProTracker for the C64," with V5.0 eventually placed
in the public domain. Its runtime is now `verified` (register-write-exact
against two independent real files, closing the largest unverified family in
the whole knowledge base). ([[gmc-v2]], the Superiors build, also `derives_from`
[[gmc]].) DMC's sheer ubiquity is exactly why DMC↔other-big-tool composer
overlaps are *popular-tool artifacts* rather than real connections (see Method).
Note the group-name trap: this Graffity is also the label on [[sosperec]]'s tag,
but that is a *different* Graffity coder (Grabowsky) — no code link (see the
Hungarian scene, below).

**Music Assembler → Padua (1989–91).** [[music-assembler]] (Marco Swagerman
"MC" & Oscar Giesen "OPM", released 1989, developed from Nov 1987 — its own
runtime now `verified` against two independent real files) is a major
early editor, and [[padua-music-mixer]] (Paweł Sołtysiński "Polonus", 1991)
`derives_from` it — the line reaching the Polish scene. Worth flagging: MC and
OPM are the *same duo* behind Rock Monitor above, so this pair personally bridges
the SoundMonitor-derived lineage and the Music-Assembler lineage — an authorship
link, not a code edge. That same Dutch USA-Team turned out more than song
editors: [[dutch-usa-team-prodrum]] (Pro-Drum, MC, 1988) was a dedicated
two-track digi-*drum* sequencer rather than a tracker — a reminder that the
late-80s scene was already building specialised rhythm tools alongside its
general-purpose ones.

Threads out of this era: the Hungarian editor scene (Graffity) and the Polish
scene (Padua) both begin here and continue in **National scenes**; the
editor/driver split matures into **Era III**.

---

## Era III — the tracker dynasty (the code spine)

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
which most of this cluster radiates — its V13 revision is now `verified`
(register-write-exact against two real files), the highest-priority closure
of this whole spine's disassembly work so far.

**The JCH radiation (1988–2011).** JCH extended his own line —
[[jch-newplayer-v20]] `derives_from` [[jch-newplayer]] (the JCH-Editor v3.x era,
~1990–91; its own runtime now `verified` too) — and then others forked or
re-fronted it, each spreading it into a new scene and decade:

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
copied code. This was the FIRST `verified` node in the cluster (validated
~99.93% frame-accurate against SIDM2's disassembly), which made it the
technical keystone — the point where the two great Danish player families are
provably linked.

**The Laxity NP21 forks.** Laxity's rewrite then became a root in its own right:
[[beast-angular-newplayer]], [[stinsen-newplayer]], and [[drax-newplayer]]
(Thomas Mogensen / "DRAX", 2008–2022) each `derives_from` [[laxity-newplayer]].
And [[cheesecutter]] (Timo Taipalus / "abaddon", Triad, 2011) is the cluster's
true crossroads: it `derives_from` [[laxity-newplayer]] **and**
`shares_routine_with` [[jch-newplayer]] — a modern, cross-national inheritor
(Finnish scene) pulling directly from *both* roots. Its own runtime
reconstruction is now `verified` too (register-write-exact against two real
files) — the cluster now has three verified nodes, not one.

**SID Factory → SID Factory II — the dynasty comes full circle.** In parallel,
Laxity built the modern editors. The original [[sid-factory]] (~2005)
`shares_routine_with` both [[jch-newplayer]] and [[laxity-newplayer]]. Its
`successor_of` [[sid-factory-ii]] (2019, GPL, cross-platform — its own
`.sf2` container format and Driver 11's zero-page usage now `verified`
too, against the public editor/packer source and real `.sf2` files) again
uses JCH's contiguous-sequence-stacking track system, with
[[sid-factory-ii-driver-11]] (also now `verified` — its IRQ-driven
dispatcher structure register-write-matches a real exported tune) as
its current swappable driver (`derives_from` SF2). The historical payoff is in
SF2's own credits: it was built **with the assistance of JCH himself** (and
Michel de Bree). The man whose 1988 player started this entire line is a
credited collaborator on the 2019 editor that continues it — the dynasty's two
founders, JCH and Laxity, reunited across 31 years.

**Adjacent smaller code lineages** (2-card `edges` clusters) sit near this spine:
[[1-raster-tracker]] → SID-Wizard (Hermit); Music Studio 2 → Music Studio Plus;
NinjaTracker V1→V2 (Cadaver); [[wizax-a]] → [[zetrex-yp]] (a shared `$E000`
player, a pre-NP21 Vibrants-era thread); Padua's Music Mixer → [[music-assembler]];
[[companion-jay-derrett]] `derives_from` [[companion]] (Jay Derrett's rewrite,
for CRL games, of Keith Bowden's 1984 *Companion to the Commodore 64* type-in
driver); and Geir Tjelta's own editor line — [[sidsys]] (SID Systems, 1990) →
[[sidduzzit]] (SID Duzz'It, 1992) → the much later [[comptech-x]] (~2019) — a
three-tool `shares_routine_with` cluster where the edges record shared
*authorship* (all three are Tjelta's), the question of literal shared replay
code being left open in the cards.

---

## National scenes (person/scene relationships)

Where the *social* history lives. The technical eras above trace how code
propagated; this section traces how *communities* did. Each scene below is a
circle of composers using a coherent set of tools, and every nationality here is
confirmed from `data/composers/*.json` country fields or a card's own platform
note — not asserted from recollection. Crucially, these are person/scene
relationships, **never** code evidence (the discipline from Method): they are the
prose-link layer, not the `edges[]` layer.

**Danish** — the scene with the deepest technical spine: the Vibrants/Laxity/JCH
tracker dynasty (Era III), JCH and Laxity both confirmed Danish, running from
1988's JCH NewPlayer to 2019's SID Factory II. DRAX (Thomas Mogensen, Denmark) —
of Maniacs of Noise and the Laxity NP21 forks — sits here too. Beyond the
dynasty, the Danish scene produced standalone editors of its own, like
[[sound-tracker-64]] (the Mechanix trio Groo, Dean and Spe), premiered at the
Dexion Meeting demoparty on 3 July 1988.

**Hungarian** — the broadest editor-*and*-composer scene in the data. It opens
with the Graffity flagship GMC/DMC (Era II; Brian / Balázs Farkas), and runs
through a circle of native trackers whose users are confirmed Hungarian: the
[[chubrocker]] ↔ [[sosperec]] circle (Chubrock, DOS, Mercury, Peet; #73) and
[[odintracker]] (Zed / Zoltán Konyha; runtime now `verified` against four
independent real files, register-write-exact on all four), plus [[minimusic]] (Brian's own smaller
1990 editor — the same Graffity coder behind GMC/DMC) and [[sidwinder]] (Balázs
"Taki" Takács of Natural Beat, 1999). Its *modern-revival* wing is the most
active in the whole collection: Hermit (Hungary) with
[[1-raster-tracker]]/SID-Wizard/[[flexsid]], alongside the two most prolific
"bridge" composers of the entire dataset — NecroPolo and Vincenzo, both Hungary
(see next section). The Hungarian scene is thus both a 1990s editor culture and
the engine of the C64 music revival.

**Polish** — a tightly-knit cohort visible through two tools: their own native
[[hardtrack-composer]] (Longhair/Brush, Elysium; runtime now `verified`, register-write-exact against two independent real files) and [[padua-music-mixer]]
(Polonus; Era II) — whose author Polonus also built [[digi-organizer]] (Padua,
1991), an add-on that bolts a fourth sampled "digi" channel onto an
independently-composed three-voice SID tune — plus a striking *cross-border
adoption*: the same Polish
composers (Bax, Data, JFK, Leming, Praiser, Randy, V-12, Warlock; all confirmed
Polish) were also the heaviest users of the German [[reflextracker]] (#73).

**British (UK game industry)** — less a demoscene than a professional games
industry, centred on Ocean Software: [[martin-galway]] → [[music-driver-paul-hughes]]
(the studio succession, Era I / #73), and the [[david-whittaker]] →
[[jason-brooke]] → [[david-dunn]] commercial-driver line. The scene's modern
inheritor is Richard Bayliss (England), the single most prolific composer in the
dataset (1,282 files) and a top-3 bridge user.

**German** — Chris Hülsbeck (SoundMonitor, Era II; and TFMX) is the seed; the
Reflex group (kb / Quiss / Zorc — [[reflextracker]] states "the German group
Reflex") and the X-Ample Architectures circle (Markus Schneider, Germany;
[[x-ample]], Thomas Detert) carry it into the 1990s. Fanta (Germany), a top
bridge composer, is a modern node.

**Dutch** — anchored on Maniacs of Noise: Charles Deenen (Netherlands, pre-1990)
and Jeroen Tel (Netherlands), whose house driver became the engine inside
[[future-composer]] (Era II; [[mon-deenen]]). Reyn Ouwehand (Netherlands), a top
bridge composer, and the Music Assembler duo MC/OPM (Era II) round out a scene
defined as much by *drivers other tools wrapped* as by editors of its own. Two
more Dutch tools fill it in: the Soede twins' [[soundmaster]] (Era II) and Rene
Lergner's [[heathcliff-digitalarts]] (Audio Assembler, the in-house tool of the
group Focus, 1989–90) — the latter unusual for being distributed as raw 6502
assembler source a composer edits and reassembles, not a GUI tracker.

**Norwegian** — the Olav Mørkrid same-author cluster ([[digitalizer]] /
[[olav-morkrid]] / [[omegasupreme-digi]]; #72 — [[digitalizer]]'s runtime is now `verified`, register-write-exact against two independent real files), which the [[olav-morkrid]] card
places explicitly in "the Norwegian Panoramic Designs scene." A second Norwegian
pillar is Geir Tjelta's editor line — [[sidsys]] (1990) and [[sidduzzit]] (SID
Duzz'It, 1992, co-coded with Glenn Rune Gallefoss under his group SHAPE) — the
latter a Norwegian-scene mainstay maintained clear into the 2010s (979 files here).

**Finnish & Swedish** — smaller but real: Finland gives us Cadaver (Lasse Öörni;
NinjaTracker, [[sadotracker]]) and abaddon (Timo Taipalus; [[cheesecutter]], the
Era III crossroads), and Aleksi Eeben (Heatbeat / CNCD), who — finding the
existing tools "unintuitive" — coded his own native tracker [[john-player]]
(2001–02). Sweden gives Tomas Danko, and the Oneway group (Moppe,
Zizyphus) behind [[system6581]].

**Cross-scene adoptions — where a tool crossed a national boundary.** The most
telling social findings, because they show the scenes were *not* sealed:
- UK Sonic Graffiti ↔ Swedish [[system6581]] (#72): the four [[sonic-graffiti]]
  musicians were the Swedish editor's second-largest user cohort.
- Polish scene ↔ German [[reflextracker]] (#73): a whole national cohort adopting
  a foreign tool as heavily as its native one.

These two are the template for what the connection scan is *for*: finding the
threads that cross the obvious group and national boundaries.

---

## The bridge composers (the omnivores)

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
tool lineage. A telling wrinkle is that some of these omnivores were also
*tool-builders*: Glenn Rune Gallefoss (9 devs) not only played every scene's
trackers but wrote his own personal routines ([[grg]], [[grg-tiny]]) and
co-authored [[sidduzzit]] with Geir Tjelta; DRAX (9 devs) has his own
[[drax-newplayer]] in the Era III spine. For these composers, using everyone's
tools and shipping your own were the same habit. **[established]**

---

## The modern revival (2000s+)

The tracker dynasty (Era III) runs straight into the present, so the modern era
is less a break than a continuation — but three *structural* shifts make it its
own chapter, and none of them is about the music.

**The tools left the C64.** The classic editors of Era II ran *on* a Commodore
64 — that was the only place to compose SID music. The modern tools are
cross-platform host applications that assemble and preview a C64 replay from a
PC: [[goattracker]] (Lasse Öörni / Cadaver, Covert Bitops, 2001/2005 —
Win/Linux/Mac; runtime now `verified`), [[cheesecutter]] (2011 — cross-platform D), and
[[sid-factory-ii]] (2019 — Windows/Mac/Linux with a reSID preview;
container format and Driver 11 ZP usage now `verified`). You no
longer need the hardware to write for it. The exception proves the rule:
[[sidwizard]] (Mihály Horváth / Hermit, 2012; runtime now `verified`) is still
a *native* C64 tracker — but, tellingly, an open-source one (next point). The trajectory even leaves the
*desktop*: [[sidtracker64]] (Daniel Larsson / "Pernod", 2015) is an iPad app with
its own SID emulation that only touches real hardware when it exports a native
C64 replay — and it found genuine adoption among original-era veterans, notably
1980s game composer Jason Page.

**Source became open.** The classic players were closed binaries — which is why
this whole knowledge base leans on disassembly to document them. The modern
tools ship their source: [[sid-factory-ii]] and [[cheesecutter]] are both GPL
with public GitHub repos, [[goattracker]] and [[sidwizard]] likewise open. The
sharpest illustration is [[cheesecutter]]'s replay source header, which literally
declares its own lineage — *"Based on JCH NP 21.G4 by Laxity/VIB"* — a modern
open-source tool stating in a code comment the exact classic-player descent that,
for its ancestors, took a disassembly to establish. Openness in this era isn't
uniform, though. [[flexsid]] (Hermit, 2022) is open almost by accident of
dependency: its author says he "didn't want to go open-source" but SDL 1.2's
LGPL forced him to publish the source, so he attached his own informal "do what
you want but mention the source" clause instead of a standard licence. And
plenty of modern tools stayed *closed* — [[defmon]] (Frantic of Hack'n'Trade,
built ~2008, first surfacing via a 2013 leak) is closed-source freeware, public
but unopened, the same public-but-closed shape as DefleMask.

**Preservation became a scene of its own.** The modern era is also when the
*classic* players started being systematically reverse-engineered and
reconstructed rather than merely used — the SIDM2 project turning
[[laxity-newplayer]] into SID Factory II driver format at ~99.93% frame accuracy,
and this knowledge base itself. The dynasty's history became an object of
study, by many of the same people who made it. This project's own
`/sid-verify` pipeline (disassemble a real HVSC file, reassemble, byte-diff
and trace-diff against the original) is the same idea applied more broadly:
as of this writing it has closed 17 more cards to `verified` beyond the
original composer-driver core — DMC, Music Assembler, GoatTracker,
CheeseCutter, SID-Wizard, SID Factory II Driver 11, JCH NewPlayer (V13 and
V20), SoundMonitor, Future Composer, SID Factory II (the parent card's own
container format), OdinTracker, RockMonitor (via its `derives_from`
SoundMonitor lineage), Soundmaster, and RoMuzak among them (see each card's
own Verification section, and `knowledge/players/reconstructions/` for the
exact byte-level patch data behind each).

The result is a story that closes a loop: the modern flagship editor
([[sid-factory-ii]]) is built by the classic dynasty's own founders (Laxity, with
JCH assisting — Era III), it is open source, and the classic players it descends
from are being disassembled back *into* it. And the composers driving this
revival are precisely the omnivore "bridge" users of the previous section —
NecroPolo, Vincenzo (Hungary), Richard Bayliss (England) — a behaviour that
freely-downloadable, cross-platform, open tools are exactly what enable.

---

## The shape over time

The eras above are a qualitative arc; the collection can also be dated
quantitatively. Every `.sid` file's PSID/RSID header carries a `released` year,
and it is parseable for **~97% of 55,223 files** (53,534 dated via
`scripts/dev/find-eras.js`) — so the whole corpus can be placed on a real
timeline, not a proxy one.

Two things fall out of it. First, the **production curve**: the C64 music
collection peaks hard in the **1990s** (24,225 dated files), roughly a decade
after the machine's commercial prime — the demoscene, not the games industry,
made the most SID music, and made it *later* than one might guess. Output then
falls to a **steady revival plateau**: the 2000s, 2010s and 2020s each hold
~5,500–6,900 files, a scene that never stopped.

| Decade | Dated files |
|---|---|
| 1980s | 10,273 |
| 1990s | **24,225** |
| 2000s | 6,639 |
| 2010s | 6,880 |
| 2020s | 5,517 |

Second, the per-file years **cross-validate the whole knowledge base**. For a
tool used honestly from its release onward, the *median* year of its dated files
should sit at or just after its documented release year — and across the carded
tools it does, tightly: SoundMonitor's files run a median 1988 against a 1986
card date, Rob Hubbard's 1987 against ~1985, SID Factory II's 2022 against 2019,
CheeseCutter's 2016 against 2011. Two independently-sourced dates (the card's
research and the file's own header) agreeing across hundreds of tools is strong
evidence both are right. The same data settles the veteran-vs-omnivore question
the tool-year proxy could not: by *median* file year, ~370 profiled composers are
1980s–90s veterans and ~120 are modern-era — [[jch-newplayer]]'s own files span
1988 to **2025**, confirming the dynasty is not history but a living line.

---

## Appendix: sources and method

Every anchor in this history is a knowledge card under `knowledge/players/`
(follow the `[[bracketed]]` links), a card `edges[]` lineage relationship (see
`knowledge/graph.json`, rebuilt via `node knowledge/build-graph.js`), or a
`scripts/dev/find-connections.js` / `find-group-tools.js` connection finding. The
cross-scene findings tagged `(#72)`/`(#73)` are recorded in the relevant cards'
`quirks[]` with their shared-composer evidence. No claim here originates outside
that corpus. As the knowledge base grows, this document is meant to be extended:
when a new connection is confirmed (a prose `[[link]]` added to a pair of cards),
fold it into the relevant section.

## Appendix: open threads

The narrative above is complete, but a few analytical threads remain open — none
are gaps in the story, only directions for a deeper cut:

- **The temporal dimension — now unblocked** (see "The shape over time" above).
  It had been recorded here as data-blocked, because the folder records carry no
  year. The fix turned out to be local, not a CSDb fetch: every `.sid` file's
  PSID/RSID header carries a `released` year, parseable for **~97%** of the
  collection (`scripts/dev/find-eras.js`). One caveat remains — the header year
  is the *work's* year, so covers/remakes carry the original's date; the analysis
  uses the median, not the extremes, to avoid mistaking a modern composer's
  remake of a 1989 tune for 1980s activity. What is *still* open is the
  finer-grained **migration** view (the ordered sequence in which an individual
  composer adopted tools over time), which the per-file years now make possible.
- **The connection scan is not exhausted.** The composer-overlap pass
  (`find-connections.js`) surfaced its high-confidence findings, but ~9 lower-
  confidence pairs were judged popular-tool or bridge-composer artifacts rather
  than examined exhaustively; a deeper pass, or the group-membership angle at a
  finer grain, could surface more genuine cross-scene links to fold in here.
- **Coverage is near-total but not complete.** A long tail of tiny, mostly
  single-composer digi/sample routines remains uncarded — real but low-lineage,
  so deliberately deferred. (`Basic_Program`, once the largest uncarded family,
  turned out to be HVSC's `_BASIC` meta-tag, not a player — see
  [[basic-program]].)
