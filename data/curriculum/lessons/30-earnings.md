---
lesson: 30
slug: earnings
title: Earnings
oneSentence: >
  Earnings - what remains of revenue after all costs - are the engine behind
  every share's long-run value, split each year between dividends paid out
  and profit reinvested.
level: 6
prerequisites: [stocks, gdp]
concepts: [earnings]
visual:
  id: earnings-waterfall
  kind: chart
  requirement: required
  caption: >
    From revenue to earnings to the dividend/retention split - the annual
    engine behind lesson 12's two return channels.
prediction:
  prompt: >
    Over 30 years, a broad stock market rises many times over. What must
    have happened to the companies' combined earnings over the same period,
    and why can't price alone have done it?
  modelAnswer: >
    Earnings must have grown massively too. Price is a multiple of expected
    earnings; a multiple can stretch or shrink for a while, but over
    decades it mean-reverts, so sustained price growth requires the
    underlying profit engine to grow. Long-run returns are earnings growth
    plus dividends, not multiple expansion.
retrieval:
  - id: q1
    conceptId: earnings
    type: freeRecall
    prompt: >
      Define revenue, earnings, and earnings per share, and explain the two
      uses a company has for its earnings.
    modelAnswer: >
      Revenue is everything customers paid over the period. Earnings (net
      profit) are what remains after all costs - wages, inputs, interest,
      taxes. Earnings per share divide that profit by the number of shares,
      giving each owner's slice. Earnings are either distributed as
      dividends or retained and reinvested in the business - the retained
      part funds the growth behind lesson 12's appreciation channel.
    rubricNote: >
      A 5 has the three definitions plus the payout/retention split with
      its link to returns. A 3 defines the terms without the split.
    askConfidence: false
  - id: q2
    conceptId: earnings
    type: classification
    prompt: Revenue, earnings, or neither?
    items:
      - text: The 500,000 euros of bread a bakery sold this year.
        options: [revenue, earnings, neither]
        answer: revenue
        errorMap:
          earnings: terminology-confusion
          neither: factual-misunderstanding
      - text: The 50,000 euros left after flour, wages, rent, interest and tax.
        options: [revenue, earnings, neither]
        answer: earnings
        errorMap:
          revenue: terminology-confusion
          neither: factual-misunderstanding
      - text: A 200,000 euro bank loan the bakery took out in March.
        options: [revenue, earnings, neither]
        answer: neither
        errorMap:
          revenue: misconception
          earnings: misconception
  - id: q3
    conceptId: earnings
    type: shortAnswer
    prompt: >
      A company doubles its revenue while its earnings fall. What kinds of
      story could explain that, and what does it teach about which line to
      read?
    modelAnswer: >
      Costs grew faster than sales: expansion bought with thin or negative
      margins, price cuts to win volume, rising input costs, or heavy
      spending on growth. Sometimes deliberate investment, sometimes
      distress - the revenue line alone cannot say. Owners live off what
      remains, not what passes through, so earnings and their trend carry
      the verdict revenue cannot.
    rubricNote: >
      A 5 gives plausible mechanisms on both sides and the owners-get-the-
      remainder conclusion. A 3 says "costs rose" without implications.
    askConfidence: true
exercise:
  id: ex1
  conceptId: earnings
  type: calculation
  prompt: >
    A company earns 8,000,000 euros of net profit and has 4,000,000 shares
    outstanding. What are its earnings per share, in euros?
  answer: 2
  tolerance: 0
  explanation: >
    8,000,000 / 4,000,000 = 2 euros per share. If it pays half out, each
    share receives a 1 euro dividend and 1 euro is reinvested in the
    business on the owner's behalf.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Three definitions with the payout/retention split (self-score 4+ on q1),
  all classifications correct, the revenue-vs-earnings reasoning
  (self-score 4+ on q3), and the EPS calculation correct.
---

# Lesson 30 - Earnings

One sentence to hold on to: earnings - what remains of revenue after all costs - are the engine behind every share's long-run value, split each year between dividends paid out and profit reinvested.

## The problem

A company sells half a billion euros of products and its share falls; another sells a tenth of that and its share soars. The market is not reacting to how much money passes through a business - it is reacting to how much stays. The line that stays has a name, and it is the single most-watched number in equity markets.

## The idea

Revenue is the top of a company's arithmetic: everything customers paid over the year. From it, everything the business consumed is subtracted - materials, wages, rent, energy, interest on debt (lesson 13's coupons, seen from the payer's side), and taxes. What survives the whole gauntlet is earnings, or net profit: the year's result that belongs to lesson 12's residual claimants, the shareholders.

Divide by the number of shares and you get earnings per share (EPS) - your slice, as an owner, of this year's engine output. The bakery of lesson 10 made this concrete: 500,000 of revenue, 450,000 of costs, 50,000 of earnings; the flour shock moved earnings 16 percent while revenue moved not at all. Owners live off the remainder, so the remainder is what analysis watches.

Each year's earnings then face lesson 12's fork: pay out or retain. Dividends deliver cash per share now; retained earnings stay invested in the business - new capacity, products, debt paydown - compounding inside the company on the owners' behalf. That retention is the fuel of the appreciation channel: lesson 6's compounding, running inside the firm.

Scale it up and you have the market's foundation. A share's price is, in essence, a multiple of its expected future earnings - the market's bid for all the remainders to come. Multiples stretch and shrink with sentiment and rates for years at a time, but over decades they cycle while earnings accumulate; that is why lesson 19's long-run market return tracks earnings growth plus dividends, riding lesson 22's GDP. Prices dance around the engine; the engine pulls the train.

## The terms

Revenue (turnover) is total sales over a period. Earnings (net profit) are revenue minus all costs, interest and taxes. Earnings per share (EPS) are earnings divided by shares outstanding. The payout is the fraction of earnings distributed as dividends; retained earnings are the reinvested remainder.

## Worked example

A company's year, in euros: revenue 120,000,000; operating costs 104,000,000; interest 2,000,000; taxes 6,000,000. Earnings: 120,000,000 - 104,000,000 = 16,000,000; minus 2,000,000 = 14,000,000; minus 6,000,000 = 8,000,000.

Shares outstanding: 4,000,000. EPS: 8,000,000 / 4,000,000 = 2 euros. The board pays out half: dividend 1 euro per share - your 200 shares from lesson 12 collect 200 euros - and retains 4,000,000 to expand. Next year, if the reinvestment earns its keep, EPS grows; a decade of such years, compounding, is what a rising share price is ultimately made of.

## Connections

Earnings put the numbers behind lesson 12's two channels and give lesson 22's GDP its corporate face - aggregate earnings ride national production. They are the denominator of the valuation ratios waiting in the optional tier, and the fault line of the next lesson: growth versus value is, at bottom, a disagreement about earnings' future. The full accounting statements behind these lines are Tier 2's subject.

## Common misconceptions

"Big revenue means a valuable company." Value flows from what remains; revenue with no remainder feeds everyone but the owner. "A share's price should track this year's earnings." Price is a bid for all future years; multiples on current earnings swing with expectations - which is next lesson's story. "Earnings equal cash in the bank." Accounting profit and cash flow can diverge substantially - the honest caveat carried since lesson 10, resolved properly in the accounting tier."
