---
lesson: 7
slug: inflation
title: Inflation
oneSentence: >
  Inflation is a broad rise in prices that shrinks what each euro buys, and
  because it compounds, even small annual rates erode cash heavily over
  decades.
level: 1
prerequisites: [money, compounding]
concepts: [inflation]
visual:
  id: purchasing-power
  kind: chart
  requirement: required
  caption: >
    1,000 euros left as cash while prices rise 2 percent a year: after 30
    years it buys what 552 euros buy today.
prediction:
  prompt: >
    Inflation runs at exactly 2 percent for 30 years. Roughly what fraction of
    its purchasing power does a banknote kept in a drawer lose? Guess before
    computing.
  modelAnswer: >
    Nearly half. Prices multiply by 1.02 thirty times, about 1.81, so the
    note buys only 1/1.81 - roughly 55 percent - of what it buys today. Small
    rates compound into large losses given enough time.
retrieval:
  - id: q1
    conceptId: inflation
    type: freeRecall
    prompt: >
      Define inflation, explain how it is measured in the euro area, and
      state what it does to money's store-of-value job.
    modelAnswer: >
      Inflation is a broad increase in the prices of goods and services - not
      one item, the general level. It is measured with a price index: the
      HICP tracks the cost of a weighted basket of what households actually
      buy, with bigger budget items weighing more. Rising prices mean each
      euro buys less, so inflation directly erodes money's store-of-value
      job.
    rubricNote: >
      A 5 has the broad-rise definition, the weighted-basket measurement, and
      the purchasing-power consequence. A 3 says "prices go up" without
      measurement or consequence.
    askConfidence: false
  - id: q2
    conceptId: inflation
    type: classification
    prompt: Inflation or not?
    items:
      - text: Train tickets double after a strike, everything else unchanged.
        options: [inflation, not inflation]
        answer: not inflation
        errorMap:
          inflation: overgeneralisation
      - text: The whole household basket costs 3 percent more than a year ago.
        options: [inflation, not inflation]
        answer: inflation
        errorMap:
          not inflation: factual-misunderstanding
      - text: The general price level falls for two years.
        options: [inflation, not inflation]
        answer: not inflation
        errorMap:
          inflation: terminology-confusion
  - id: q3
    conceptId: inflation
    type: shortAnswer
    prompt: >
      The ECB aims for 2 percent inflation, not 0. Why would a central bank
      prefer slightly rising prices over perfectly flat ones?
    modelAnswer: >
      A margin above zero keeps the economy away from deflation, where
      falling prices push consumers to postpone purchases and make debts
      heavier in real terms - a spiral that is hard to escape. Two percent
      also leaves room to measure imperfectly and to cut real rates when
      needed. The target is a buffer, not an endorsement of erosion.
    rubricNote: >
      A 5 names the deflation risk and its mechanism (postponed spending,
      heavier real debt). A 3 says "deflation is bad" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: inflation
  type: calculation
  prompt: >
    A basket costs 100 euros. Inflation is 2 percent per year for 2 years,
    compounding. What does the basket cost after the two years, in euros?
  answer: 104.04
  tolerance: 0.01
  explanation: >
    Year 1: 100 x 1.02 = 102. Year 2: 102 x 1.02 = 104.04 euros. Inflation
    compounds like interest - each year's rise applies to already-risen
    prices.
sources:
  - title: "What is inflation?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/what_is_inflation.en.html
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with measurement and consequence (self-score 4+ on q1), all
  classifications correct, the 2-percent-target reasoning (self-score 4+ on
  q3), and the compounding calculation correct.
---

# Lesson 7 - Inflation

One sentence to hold on to: inflation is a broad rise in prices that shrinks what each euro buys, and because it compounds, even small annual rates erode cash heavily over decades.

## The problem

Put 1,000 euros in a drawer and come back in 30 years. Every note is intact; the number has not moved. Yet the pile buys barely half the groceries, train tickets and rent it would buy today. Nothing was stolen. What happened is the quietest force in finance.

## The idea

Inflation is a broad increase in the prices of goods and services - not one product jumping, but the general level drifting up. Its mirror image is what matters to you: when prices rise, the purchasing power of each euro falls. Lesson 1 called money an imperfect store of value; inflation is the imperfection, measured.

Measurement works by basket. Statisticians track the prices of what households actually buy - food, rent, energy, transport, services - and weight each item by its share of spending: electricity counts for more than postage stamps. In the euro area this is the Harmonised Index of Consumer Prices, HICP, computed the same way in every EU country. The inflation rate is the basket's percentage change over a year. The ECB's mandate is to keep that rate at 2 percent over the medium term - low, stable and predictable, with a safety margin above zero to avoid deflation, a falling price level that pushes spending into the future and makes debts heavier in real terms.

The dangerous property is the one you already know from lesson 6: compounding. Two percent sounds negligible, and in any single year it is. But each year's rise applies to already-risen prices, so the price level grows exponentially - and cash, whose number never moves, loses purchasing power along exactly the same curve, in reverse. Inflation is compound interest working against every euro that sits still.

That is why inflation, not theft or crashes, is the default risk of doing nothing. It never appears on a bank statement, and it never takes a year off.

## The terms

Inflation is a sustained broad increase in the general price level. Purchasing power is the quantity of goods and services a unit of money buys. A price index (in the euro area, the HICP) measures the cost of a weighted consumption basket over time. The inflation rate is the index's annual percentage change. Deflation is a sustained fall in the general price level.

## Worked example

Prices rise 2 percent a year for 30 years. The price level multiplies by 1.02 each year: after 30 years it is 1.02 to the power 30. Compute it in steps: 1.02^10 is about 1.219; 1.219 x 1.219 = 1.486 (20 years); 1.486 x 1.219 = 1.811 (30 years). Prices are 81 percent higher.

Now the drawer: 1,000 euros of cash, unchanged in number. Its purchasing power is 1,000 divided by 1.811 = 552 euros in today's terms. Kept "safe" in a drawer, the money lost 448 euros of buying power - about 45 percent - without a single bad day on any market. At 3 percent inflation the same arithmetic gives 1.03^30 = 2.427, leaving just 412 euros: one extra point of inflation, one third more damage.

## Connections

Inflation is lesson 6's compounding pointed at lesson 1's store-of-value job. It explains why lesson 5's lenders demand an inflation component in interest rates. And it forces the next lesson's question: if your savings earn 3 percent while prices rise 2, what did you really gain? That gap - nominal versus real - is the only return that counts.

## Common misconceptions

"Inflation means everything gets more expensive equally." It is an average over a basket: your personal rate depends on what you buy, and single items routinely move against the trend. "Zero inflation would be ideal." Central banks keep a margin above zero because deflation - postponed spending, heavier real debts - is harder to escape than inflation is to contain. "Cash is safe because the number can't fall." The number is guaranteed; what it buys is not, and over decades the loss is large and certain in direction.
