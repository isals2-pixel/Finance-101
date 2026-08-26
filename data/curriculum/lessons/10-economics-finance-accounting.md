---
lesson: 10
slug: economics-finance-accounting
title: Economics vs finance vs accounting
oneSentence: >
  Economics studies how scarce resources get allocated, accounting records
  what happened in money, and finance turns both into decisions about money
  over time and under risk.
level: 2
prerequisites: [money, opportunity-cost]
concepts: [economics-finance-accounting]
visual:
  id: three-lenses
  kind: diagram
  requirement: reinforcement
  caption: >
    One bakery, three lenses: the environment (economics), the record
    (accounting), the decision (finance).
prediction:
  prompt: >
    An economist, an accountant and a financier each examine the same bakery.
    Each asks one question the others would not. What are the three
    questions? Guess before reading on.
  modelAnswer: >
    Economist: how do demand, competition and input prices shape this market?
    Accountant: what exactly did the bakery earn, own and owe last year?
    Financier: what is the business worth, and is putting money into it
    better than the alternatives? Environment, record, decision.
retrieval:
  - id: q1
    conceptId: economics-finance-accounting
    type: freeRecall
    prompt: >
      Define the three disciplines and state, in one line each, what an
      investor takes from each one.
    modelAnswer: >
      Economics studies how societies allocate scarce resources - macro for
      the whole economy, micro for markets and firms; it gives the investor
      the environment. Accounting records and reports financial events in
      standardized statements; it gives the data. Finance studies decisions
      about money over time under risk - valuing, investing, funding; it
      turns environment plus data into the decision.
    rubricNote: >
      A 5 defines all three and names each one's contribution to an investor.
      A 3 defines them without the contributions.
    askConfidence: false
  - id: q2
    conceptId: economics-finance-accounting
    type: classification
    prompt: Which discipline owns each question?
    items:
      - text: Will euro-area rate cuts revive construction demand?
        options: [economics, finance, accounting]
        answer: economics
        errorMap:
          finance: terminology-confusion
          accounting: terminology-confusion
      - text: What profit did the company report last quarter?
        options: [economics, finance, accounting]
        answer: accounting
        errorMap:
          economics: terminology-confusion
          finance: terminology-confusion
      - text: Is this company's share worth its current price?
        options: [economics, finance, accounting]
        answer: finance
        errorMap:
          economics: terminology-confusion
          accounting: terminology-confusion
  - id: q3
    conceptId: economics-finance-accounting
    type: shortAnswer
    prompt: >
      Why does an investor need all three disciplines rather than finance
      alone? Use the bakery to answer.
    modelAnswer: >
      Finance's valuation is only as good as its inputs. Accounting supplies
      the verified numbers (the bakery's real profit), and economics supplies
      the forces that will change them (flour prices, competition, demand).
      Value the bakery on price alone, or on stale profits, and the decision
      inherits the blind spot - the three lenses check each other.
    rubricNote: >
      A 5 shows finance consuming the other two as inputs, with the example.
      A 3 says "they complement each other" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: economics-finance-accounting
  type: calculation
  prompt: >
    The bakery earns 500,000 euros of revenue with 450,000 of costs, of which
    40,000 is flour. Flour prices rise 20 percent, nothing else changes.
    What is the new annual profit, in euros?
  answer: 42000
  tolerance: 0
  explanation: >
    Old profit: 500,000 - 450,000 = 50,000. Flour cost rises 40,000 x 0.20 =
    8,000, so costs become 458,000. New profit: 500,000 - 458,000 = 42,000
    euros - an economic shock, read through accounting numbers.
sources:
  - title: "ABC de l'économie - ressources pédagogiques"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Three definitions with contributions (self-score 4+ on q1), all three
  questions classified correctly, the inputs reasoning (self-score 4+ on
  q3), and the flour-shock calculation correct.
---

# Lesson 10 - Economics vs finance vs accounting

One sentence to hold on to: economics studies how scarce resources get allocated, accounting records what happened in money, and finance turns both into decisions about money over time and under risk.

## The problem

Three specialists inspect the same neighbourhood bakery. The first talks about wheat prices, competition from supermarkets and whether households are spending. The second produces a precise table of last year's takings, costs and debts. The third names a price for the whole business and says whether buying it beats the alternatives. Same bakery, three different subjects - and this course uses all three.

## The idea

Economics is the study of how societies allocate scarce resources - who produces what, for whom, at what price. It splits into macroeconomics, the economy as a whole (growth, inflation, interest rates, employment), and microeconomics, the behaviour of households, firms and individual markets. Economics explains the environment every business and investor operates in; it deals in forces and tendencies, not bookkeeping.

Accounting is the discipline of recording: it captures financial events - sales, purchases, debts, wages - and reports them in standardized statements. Its virtues are precision and comparability; its limit is direction. Accounting tells you exactly what happened, in euros, and deliberately nothing about what should happen next.

Finance sits between them: the study of decisions about money across time and under uncertainty. Valuing an asset, choosing an investment, deciding between debt and saving - every finance question weighs money now against uncertain money later, which is why lessons 5 through 9 (interest, compounding, inflation, real returns, opportunity cost) were all finance from the start.

For an investor the three interlock in one direction. Economics supplies the context: what forces will push this business's numbers around? Accounting supplies the evidence: what are the numbers, actually? Finance consumes both and outputs the only question you ultimately act on: at this price, is it better than the best alternative?

This course's map follows the same division: economics levels for the environment, market and instrument levels for the finance, and accounting as an optional deep-dive - useful, but the recording layer, not the decision layer.

## The terms

Economics is the study of allocating scarce resources; macroeconomics covers the whole economy, microeconomics covers agents and markets. Accounting is the systematic recording and reporting of financial transactions. Finance is the study of money decisions across time and under risk.

## Worked example

The bakery, in euros, through all three lenses. Accounting first: revenue 500,000, total costs 450,000. Profit: 500,000 - 450,000 = 50,000 a year.

Finance next: suppose a buyer values small bakeries at 10 times annual profit. Value: 10 x 50,000 = 500,000 euros.

Now economics moves: a poor harvest lifts flour prices 20 percent. Flour is 40,000 of the costs, so the increase is 40,000 x 0.20 = 8,000. Costs become 458,000; profit falls to 500,000 - 458,000 = 42,000. Finance re-runs: 10 x 42,000 = 420,000. One economic shock, passed through the accounts, moved the valuation by 80,000 euros - the three lenses in one chain.

## Connections

Lessons 1 through 9 already used all three: money and inflation are economics, tracking cash flow and net worth is accounting for one household, and every rate-and-time calculation is finance. Ahead, Level 2 covers the economic forces (GDP, policy, rates), the market levels cover finance proper, and full accounting waits in the optional tier.

## Common misconceptions

"Finance is accounting with more mathematics." Accounting looks backward at records; finance looks forward at decisions - different questions, overlapping numbers. "Economics predicts markets." It supplies frameworks and forces, not forecasts; the flour shock was explainable, not schedulable. "Profit is cash in the till." Accounting profit and cash can differ substantially - a distinction the optional accounting level treats properly.
