---
lesson: 25
slug: business-cycles
title: Business cycles
oneSentence: >
  Economies expand and contract in irregular cycles around their long-run
  growth trend - real while they last, impossible to time, and survivable by
  design rather than by forecast.
level: 2
prerequisites: [gdp, long-term-investing]
concepts: [business-cycles]
visual:
  id: cycle-wave
  kind: chart
  requirement: required
  caption: >
    Real GDP oscillating around its long-run trend: expansion, peak,
    recession, trough, recovery - irregular in length and depth.
prediction:
  prompt: >
    Recessions are declared by committees months after they begin, from
    revised data. What does that imply about strategies that promise to
    "exit before the recession"?
  modelAnswer: >
    They promise knowledge nobody has: the turning point is only certain in
    hindsight, so the exit signal arrives after the damage - and lesson 19
    showed the rebound clusters near the bottom. Such strategies reliably
    sell after falls and re-enter after recoveries, the exact opposite of
    their brochure.
retrieval:
  - id: q1
    conceptId: business-cycles
    type: freeRecall
    prompt: >
      Describe the phases of a business cycle and what typically happens to
      employment and corporate profits in each.
    modelAnswer: >
      Expansion: output grows above trend, hiring rises, profits grow. Peak:
      activity tops out, often with capacity strains and inflation pressure.
      Recession: output contracts - conventionally two negative quarters -
      unemployment rises, profits fall. Trough: the low point. Recovery:
      growth resumes and re-absorbs the slack. Lengths and depths are
      irregular; the cycle oscillates around the long-run growth trend of
      lesson 22.
    rubricNote: >
      A 5 names the phases with employment/profit behaviour and the
      irregularity. A 3 lists phases without the economics.
    askConfidence: false
  - id: q2
    conceptId: business-cycles
    type: classification
    prompt: Which phase does each snapshot suggest?
    items:
      - text: Two consecutive quarters of falling real GDP, unemployment climbing.
        options: [expansion, recession, recovery]
        answer: recession
        errorMap:
          expansion: factual-misunderstanding
          recovery: terminology-confusion
      - text: Output regaining lost ground, hiring resuming from a low point.
        options: [expansion, recession, recovery]
        answer: recovery
        errorMap:
          expansion: terminology-confusion
          recession: factual-misunderstanding
      - text: Years of steady above-trend growth and tight labour markets.
        options: [expansion, recession, recovery]
        answer: expansion
        errorMap:
          recession: factual-misunderstanding
          recovery: terminology-confusion
  - id: q3
    conceptId: business-cycles
    type: shortAnswer
    prompt: >
      How do lessons 23 and 24's two policy levers typically respond to a
      recession, and why do both act before the recession is officially
      declared?
    modelAnswer: >
      Monetary policy cuts rates to revive credit-financed demand; fiscal
      policy lets automatic stabilizers widen the deficit and may add
      discretionary stimulus. Both act on indicators and forecasts because
      official dating lags by months and their own transmission lags by
      more - waiting for the declaration would time the medicine for after
      the illness.
    rubricNote: >
      A 5 names both responses and the double lag argument. A 3 names the
      responses without the timing logic.
    askConfidence: true
exercise:
  id: ex1
  conceptId: business-cycles
  type: calculation
  prompt: >
    Real GDP stands at 2,400 billion euros at the peak. The recession that
    follows reduces it by 2.5 percent to the trough. What is real GDP at
    the trough, in billions?
  answer: 2340
  tolerance: 0
  explanation: >
    Fall: 2,400 x 0.025 = 60 billion. Trough: 2,400 - 60 = 2,340 billion.
    Typical postwar recessions cost single-digit percentages of GDP -
    severe for those hit, small against decades of trend growth.
sources:
  - title: "ABC de l'économie - ressources pédagogiques"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Phases with their economics (self-score 4+ on q1), all classifications
  correct, the policy-response timing logic (self-score 4+ on q3), and the
  trough calculation correct.
---

# Lesson 25 - Business cycles

One sentence to hold on to: economies expand and contract in irregular cycles around their long-run growth trend - real while they last, impossible to time, and survivable by design rather than by forecast.

## The problem

France's economy is many times larger than fifty years ago - yet the road there passed through the mid-70s oil shock, the early-90s slump, 2008-09, 2020. Growth is the trend; the trend arrives in waves. Whether those waves are something to dodge or something to build for is one of the most expensive questions in investing - and it has a clear answer.

## The idea

Lesson 22's real GDP does not rise smoothly. It oscillates around its long-run trend in a repeating but irregular pattern - the business cycle. Expansion: output above trend, hiring strong, profits rising, optimism compounding on itself. Peak: capacity tightens, inflation pressure builds (lesson 7). Recession: output contracts - the working convention is two consecutive quarters of falling real GDP - unemployment rises, profits fall, pessimism compounds. Trough, then recovery, and the cycle renews. Postwar cycles have run anywhere from two to ten-plus years; no two match.

Both policy levers exist largely for this. Recessions bring lesson 23's rate cuts to revive credit and demand, and lesson 24's stabilizers widen deficits automatically as taxes fall and support spending rises. Overheated expansions bring the reverse. Both act on forecasts - the double lag of identification and transmission leaves no choice.

That identification lag is the investor's central fact. Recessions are dated by committees, from revised data, months after the fact; even in real time, false alarms abound. The cycle is obvious on every historical chart and invisible at every present moment. Strategies promising to "step aside before the storm" therefore sell after prices have fallen and - because lesson 19's best days cluster near troughs - buy back after the rebound. The cycle is real; trading it is the mirage.

What works instead is what the course has been building: a portfolio sized so its lesson 17 bad year is survivable, held on lesson 19's discipline, with contributions that quietly buy more during the trough. The cycle then becomes weather - endured, not predicted.

## The terms

The business cycle is the fluctuation of real GDP around its long-run trend. Expansion, peak, recession, trough and recovery name its phases. A recession is conventionally two consecutive quarters of falling real GDP. The trend is the economy's long-run growth path.

## Worked example

A cycle in numbers. Peak real GDP: 2,400 billion euros. The recession cuts 2.5 percent: 2,400 x 0.025 = 60 billion lost; trough at 2,340 billion. Recovery takes two years back to 2,400, then trend growth of 1.5 percent resumes: ten years later, 2,400 x 1.015^10 = 2,400 x 1.161 = 2,786 billion.

Read the whole episode from a distance: the recession's 60 billion dent against nearly 400 billion of subsequent trend growth. Painful in the living - the unemployment behind that 2.5 percent is real - yet small against the trend it interrupted. Every equity crash chart in lesson 19 is this same picture, drawn in prices.

## Connections

The cycle is lesson 22's GDP in motion, moderated by lessons 23 and 24's levers, and it drives the profit swings behind lesson 17's equity volatility. Its unpredictability is the final argument for lesson 19's staying invested and lesson 16's breadth. Level 11's behavioural lessons will show why cycle-timing feels so compelling precisely when it is most costly.

## Common misconceptions

"Recessions can be predicted and traded around." Turning points are certain only in hindsight; acted-on predictions reliably sell low and rebuy high. "Recessions mean the economy is broken." Contraction is a recurring phase of a growing system - every previous one ended, into a larger economy. "A recession's market fall is a reason to exit." It is the phase lesson 19 planned for: fluctuation to hold through, and cheaper prices for ongoing contributions."
