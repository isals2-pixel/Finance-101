---
lesson: 22
slug: gdp
title: GDP
oneSentence: >
  GDP is the market value of everything an economy newly produces in a year -
  its growth in volume, after removing inflation, is what "economic growth"
  means.
level: 2
prerequisites: [money, real-vs-nominal]
concepts: [gdp]
visual:
  id: gdp-components
  kind: chart
  requirement: required
  caption: >
    GDP by spending: household consumption, investment, government spending,
    plus exports minus imports.
prediction:
  prompt: >
    France's GDP rises 3.1 percent in euros while prices rise 2 percent. Did
    the economy actually produce more, and roughly how much more?
  modelAnswer: >
    Yes, but only about 1.1 percent more. Part of the euro increase is just
    higher prices for the same output; removing inflation (the same
    correction as lesson 8) leaves the real - volume - growth, which is the
    number that means "more was produced".
retrieval:
  - id: q1
    conceptId: gdp
    type: freeRecall
    prompt: >
      Define GDP, name the four spending components, and explain why real
      GDP growth is the number that matters.
    modelAnswer: >
      GDP is the market value of all goods and services newly produced
      within an economy over a period. By spending it decomposes into
      household consumption, investment, government spending, and net
      exports (exports minus imports). Nominal GDP grows with both output
      and prices, so growth is measured in real terms - volume, inflation
      removed - because only producing more, not repricing the same, is
      economic growth.
    rubricNote: >
      A 5 has the definition, all four components, and the nominal/real
      distinction with its rationale. A 3 defines GDP with some components.
    askConfidence: false
  - id: q2
    conceptId: gdp
    type: classification
    prompt: Does each item enter this year's French GDP?
    items:
      - text: A new car produced and sold in France this year.
        options: [counts, does not count]
        answer: counts
        errorMap:
          does not count: factual-misunderstanding
      - text: The resale of a ten-year-old flat between two households.
        options: [counts, does not count]
        answer: does not count
        errorMap:
          counts: misconception
      - text: A haircut performed by a French salon.
        options: [counts, does not count]
        answer: counts
        errorMap:
          does not count: factual-misunderstanding
  - id: q3
    conceptId: gdp
    type: shortAnswer
    prompt: >
      Why does an investor care about GDP growth at all, given that lesson 20
      told them not to trade on forecasts?
    modelAnswer: >
      GDP growth is the tide corporate earnings float on: over long periods,
      aggregate profits and the market's return track the economy's real
      expansion plus inflation. Understanding it explains why broad
      long-term investing works at all - claims on a growing economy grow.
      That is context for holding, not a signal for timing; quarterly GDP
      surprises are already in prices before any saver reads them.
    rubricNote: >
      A 5 links long-run earnings to growth and rejects the timing use. A 3
      says "growth is good for stocks" without the two-sided point.
    askConfidence: true
exercise:
  id: ex1
  conceptId: gdp
  type: calculation
  prompt: >
    An economy's spending, in billions of euros: household consumption
    1,250, investment 480, government spending 570, exports 620, imports
    660. What is GDP, in billions?
  answer: 2260
  tolerance: 0
  explanation: >
    GDP = C + I + G + (X - M) = 1,250 + 480 + 570 + (620 - 660) = 2,300 - 40
    = 2,260 billion euros. Imports are subtracted because they were produced
    elsewhere.
sources:
  - title: "Produit Intérieur Brut (PIB) et ses composants"
    publisher: INSEE
    url: https://www.insee.fr/fr/statistiques/2415846
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with components and the real/nominal rationale (self-score 4+
  on q1), all three classifications correct, the investor-relevance transfer
  (self-score 4+ on q3), and the GDP sum correct.
---

# Lesson 22 - GDP

One sentence to hold on to: GDP is the market value of everything an economy newly produces in a year - its growth in volume, after removing inflation, is what "economic growth" means.

## The problem

"The French economy grew 3.1 percent." Impressive - until you recall lesson 7: prices rose 2 percent that year. Did the country produce 3.1 percent more, or produce the same and charge more? The answer needs one definition and one correction you already know.

## The idea

GDP - gross domestic product - is the market value of all goods and services newly produced within an economy over a period, valued at market prices. INSEE computes France's; every economy has one. Three words carry the definition. Newly: only this year's production counts - reselling an old flat merely changes an owner (though the notary's fee, a new service, counts). Within: production on French territory, whoever owns the producer. Market value: everything is added up in money, lesson 1's unit-of-account job at national scale.

One convenient way to count it is by spending, since everything produced is bought by someone: household consumption (the largest share), investment (machines, buildings, software), government spending (schools, hospitals, defence), and net exports - exports minus imports, subtracting what was bought here but produced abroad. C + I + G + (X - M).

The opening trap is lesson 8 at national scale. Nominal GDP is measured in current euros, so it rises when prices rise, output unchanged. Real GDP strips out inflation to measure volume - and its growth rate is the phrase "economic growth" properly used. A 3.1 percent nominal rise under 2 percent inflation is roughly 1.1 percent of actual additional production.

Why care, as a saver? Because GDP is the tide under the market. Corporate revenues and profits are earned inside this total; over decades, broad equity returns track the economy's real growth plus inflation plus dividends. GDP explains why lesson 19's patience is rewarded at all. What it does not offer is a timing signal - quarterly figures are public within weeks and priced in before any private saver can act on them.

## The terms

GDP is the market value of an economy's new production over a period. Nominal GDP is measured at current prices; real GDP at constant prices, measuring volume. Economic growth is the change in real GDP. Net exports are exports minus imports.

## Worked example

An economy, in billions of euros: consumption 1,250, investment 480, government spending 570, exports 620, imports 660. GDP: 1,250 + 480 = 1,730; plus 570 = 2,300; net exports 620 - 660 = -40; total 2,300 - 40 = 2,260 billion.

Next year nominal GDP reaches 2,330 billion: growth of 2,330 / 2,260 - 1 = 3.1 percent in euros. Inflation was 2 percent. Real growth, by lesson 8's division: 1.031 / 1.02 - 1 = 1.08 percent, call it 1.1. Of the 70 billion of headline "growth", roughly 45 billion is repricing and 25 billion is actual additional output.

## Connections

GDP is measured with lesson 1's money, corrected with lesson 8's real-versus-nominal division, and it feeds everything ahead in Level 2: business cycles are its rhythm (lesson 25), fiscal policy taxes and spends inside it (lesson 24), and monetary policy tries to steer it (lesson 23). For the portfolio, it is the long-run engine behind lesson 19.

## Common misconceptions

"GDP growth means everyone is better off." It is a total: distribution, unpaid work, leisure and environment are all outside it - a measure of production, not of wellbeing. "Second-hand sales and shares add to GDP." Transfers of existing things count nothing; only new production (and the new services around the transfer) does. "The nominal figure is the real story." Without the inflation correction, a headline can show growth while volumes stagnate - the drawer problem of lesson 7, worn by a whole country.
