---
lesson: 43
slug: portfolio-construction
title: Building the portfolio
oneSentence: >
  Portfolio construction runs in order - liquidity first, allocation
  second, funds last - and for most private investors two broad, cheap
  funds plus a rebalancing rule implement the whole of portfolio theory.
level: 10
prerequisites: [asset-allocation, rebalancing]
concepts: [portfolio-construction]
visual:
  id: portfolio-blueprint
  kind: diagram
  requirement: required
  caption: >
    The construction stack: emergency cash carved out first, then the
    stock/bond split, then one world-equity ETF and one bond fund, held by
    a written rule.
prediction:
  prompt: >
    A saver has 20,000 euros: 5,000 might be needed within two years, the
    rest is for the long term. They plan to invest all 20,000 in equity
    funds "to make it work harder". What is the flaw, and what should the
    5,000 do instead?
  modelAnswer: >
    The 5,000 has a two-year horizon: in equities it risks being sold in
    a dip - the forced sale that makes losses permanent. Near-term money
    is carved out first into cash or equivalents; only the 15,000 with a
    long horizon takes the allocation. Construction starts with
    liquidity, not with funds.
retrieval:
  - id: q1
    conceptId: portfolio-construction
    type: freeRecall
    prompt: >
      List the construction order this course teaches, and state why fund
      selection comes last.
    modelAnswer: >
      First carve out liquidity: an emergency reserve and any money
      needed within a few years stays in cash. Second, set the strategic
      allocation for the long-term remainder from horizon, capacity and
      tolerance. Third, implement each asset class with a broad, cheap
      fund - a world-equity ETF, a high-grade bond fund - compared on
      TER and tracking difference. Fourth, write the rebalancing rule.
      Selection is last because among broad index products the choices
      are near-identical: the split does the work, the fund choice moves
      decimals.
    rubricNote: >
      A 5 has all four steps in order with the why-last argument. A 3
      lists steps but starts with funds.
    askConfidence: false
  - id: q2
    conceptId: portfolio-construction
    type: classification
    prompt: Improvement or downgrade to a two-fund portfolio?
    items:
      - text: Adding a third fund that holds the same world index with a different brand.
        options: [improvement, downgrade or neutral at best]
        answer: downgrade or neutral at best
        errorMap:
          improvement: misconception
      - text: Replacing the world ETF with five single stocks the owner researched.
        options: [improvement, downgrade]
        answer: downgrade
        errorMap:
          improvement: misconception
      - text: Writing down the allocation, the band rule, and the conditions for changing them.
        options: [unnecessary paperwork, a core part of the construction]
        answer: a core part of the construction
        errorMap:
          unnecessary paperwork: misconception
  - id: q3
    conceptId: portfolio-construction
    type: shortAnswer
    prompt: >
      Defend the two-fund portfolio against the objection "it's too simple
      to be right" - using what Levels 8 and 9 established.
    modelAnswer: >
      The world-equity ETF holds thousands of companies across regions -
      lesson 16's specific-risk deletion at Level 8's near-zero cost; the
      high-grade bond fund adds the low-correlation ballast lesson 39
      showed deletes portfolio volatility. Together they sit near lesson
      40's efficient frontier, and the allocation dial between them spans
      the whole risk range. Complexity adds overlap, cost and maintenance
      - not diversification. Simple is the theory, implemented.
    rubricNote: >
      A 5 grounds simplicity in diversification, correlation and the
      frontier. A 3 asserts "simple works" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: portfolio-construction
  type: calculation
  prompt: >
    An 80/20 portfolio has an expected return of 5.4 percent and
    volatility of 13. Estimate a two-standard-deviation bad year, in
    percent. (Illustrative assumptions, not forecasts.)
  answer: -20.6
  tolerance: 0.001
  explanation: >
    5.4 − 2 x 13 = 5.4 − 26 = −20.6 percent. Roughly one year in forty
    lands beyond two standard deviations, so this is a "plausible bad
    year", not a floor. If holding through −21 percent feels impossible,
    the allocation - not the funds - needs changing before the crash, not
    during it.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Mes questions d'argent - public financial education portal"
    publisher: Banque de France
    url: https://www.mesquestionsdargent.fr
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Four construction steps in order (self-score 4+ on q1), all
  classifications correct, the grounded simplicity defence (self-score 4+
  on q3), and the bad-year calculation correct.
---

# Lesson 43 - Building the portfolio

One sentence to hold on to: portfolio construction runs in order - liquidity first, allocation second, funds last - and for most private investors two broad, cheap funds plus a rebalancing rule implement the whole of portfolio theory.

## The problem

Everything is now on the table: markets, funds, bonds, volatility, correlation, the frontier, allocation, rebalancing. What remains is assembly - and the assembly order most people follow is backwards. They start by shopping for funds; the theory says funds are the last and smallest decision. This lesson closes Level 10 by putting the steps in the order the arithmetic dictates.

## The idea

Step one: carve out liquidity. An emergency reserve (Level 12 sizes it - several months of expenses) and any money with a use within a few years stay in cash or equivalents. This money is not "lazy": it is what prevents the forced sale in a dip - the one mechanism that converts a temporary loss into a permanent one (lesson 17) and the first defence against lesson 42's sequence risk. Only money that can stay invested takes risk.

Step two: set the allocation for the remainder, exactly as lesson 41 - horizon, capacity, tolerance, the lowest binds. This single ratio fixes the portfolio's expected return, its volatility, and its plausible bad year; test that bad year against your honest nerve before committing.

Step three: implement with the fewest, broadest, cheapest instruments. One accumulating world-equity UCITS ETF spans thousands of companies across regions - lesson 16's diversification at lesson 18's near-zero cost, in lesson 37's protective wrapper. One high-grade (government or aggregate) bond fund supplies lesson 39's low-correlation ballast. Compare candidates on TER and measured tracking difference (lesson 36) - among broad funds on the same index the differences are decimals, which is precisely why this step is last. More funds add overlap and maintenance, not diversification; every addition must name the driver it adds.

Step four: write it down - target weights, the rebalancing band, the contribution schedule, and the conditions under which any of it may change (a changed life, not a changed market). That written rule is lesson 20's decision framework applied to the whole portfolio, and it is the seed of the Investment Policy Statement the course builds later. Automate the monthly contribution; direct it to the underweight side; check the bands once a year; otherwise, leave it alone.

## The terms

Portfolio construction is the ordered assembly: liquidity, allocation, implementation, rules. An emergency reserve is cash held against surprises, outside the portfolio. A two-fund portfolio implements equities and bonds with one broad fund each. An accumulating fund reinvests dividends internally (lesson 37), fitting long-term compounding.

## Worked example

20,000 euros; 5,000 possibly needed within two years; long horizon otherwise, solid capacity, tolerance honestly tested at "a fifth, not more" in the last real dip. Step one: 5,000 to cash. Step two: for the 15,000, an 80/20 mix implies (lesson 30's illustrative assumptions) 5.4 percent expected return, volatility near 13, bad year near 5.4 − 26 = −20.6 - just inside the stated tolerance; 80/20 stands. Step three: 12,000 into a world-equity accumulating UCITS ETF, 3,000 into a government-bond fund, picked on TER and tracking difference. Step four: written 80/20, ±5-point band, annual check, contributions to the underweight side. The entire apparatus of Levels 5-10, running on two lines of a brokerage statement.

## Connections

This lesson is the practical sum of lesson 16 (diversification), 18 (costs), 19 (horizon), 20 (rules), 37 (wrappers), 39-40 (correlation and the frontier), 41-42 (allocation and rebalancing). Level 11 studies the psychology that attacks the written rule; Level 12 adds the French tax wrappers that decide where these two funds should live.

## Common misconceptions

"A proper portfolio needs many funds." Breadth lives inside the funds, not in their count; overlapping funds correlate near +1 (lesson 39) and add nothing. "Construction starts with picking winners." It starts with liquidity and a ratio; selection among broad products is a cost comparison. "Investing spare cash means all of it." Money with a near date belongs in cash - its job is to never be sold at the bottom."
