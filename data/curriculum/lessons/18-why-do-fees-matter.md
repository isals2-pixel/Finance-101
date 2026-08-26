---
lesson: 18
slug: why-do-fees-matter
title: Why do fees matter?
oneSentence: >
  Annual fees are subtracted from your return every single year, so they
  compound against you - over decades, one extra percentage point consumes a
  fifth or more of the final wealth.
level: 8
prerequisites: [compounding, etf]
concepts: [fees]
visual:
  id: fee-drag
  kind: chart
  requirement: required
  caption: >
    100,000 euros for 30 years at 6 percent: with a 0.2 percent fee versus a
    1.8 percent fee, the gap at the end is over 180,000 euros.
prediction:
  prompt: >
    Fund A charges 0.2 percent a year, fund B charges 1.8 percent, both
    earning the same 6 percent before fees. Over 30 years on 100,000 euros,
    guess the size of the final difference: closer to 15,000, 60,000, or
    180,000 euros?
  modelAnswer: >
    Around 180,000 euros. The 1.6-point gap is not paid once - it is
    subtracted from the growth rate every year, so it compounds: 100,000
    grows at 5.8 percent to about 542,000 versus at 4.2 percent to about
    343,000. Small percentages, applied annually to a growing base, become
    enormous.
retrieval:
  - id: q1
    conceptId: fees
    type: freeRecall
    prompt: >
      Explain how an annual percentage fee actually reduces wealth over time,
      and why its long-run cost is far larger than the percentage suggests.
    modelAnswer: >
      The fee is deducted from the portfolio every year, which lowers the
      growth rate itself: a 6 percent return with a 1 percent fee compounds
      at 5 percent. Because compounding is exponential, a small cut to the
      rate bends the whole curve: each year's fee also removes all the
      future growth that money would have produced. The damage therefore
      grows with time and ends far larger than "1 percent" sounds.
    rubricNote: >
      A 5 explains fee-as-rate-reduction and the lost-future-growth
      mechanism. A 3 says "fees add up" without the compounding mechanism.
    askConfidence: false
  - id: q2
    conceptId: fees
    type: classification
    prompt: Which fund grows your money faster, all else equal?
    items:
      - text: Fund with TER 0.15 percent vs the same exposure at TER 1.5 percent.
        options: [the 0.15 percent fund, the 1.5 percent fund, no difference]
        answer: the 0.15 percent fund
        errorMap:
          the 1.5 percent fund: factual-misunderstanding
          no difference: misconception
      - text: A fund whose fee is "only" deducted inside the fund, never billed to you.
        options: [the fee still costs you, the fee is free]
        answer: the fee still costs you
        errorMap:
          the fee is free: misconception
  - id: q3
    conceptId: fees
    type: shortAnswer
    prompt: >
      Why are fees the most reliable number in investing - more reliable than
      any return figure - and what follows from that for choosing funds?
    modelAnswer: >
      Returns are uncertain: nobody knows next year's market. The fee is
      contractual: it will be charged in every scenario, good or bad, with
      certainty. A cost that is certain and compounds should be minimised
      wherever the exposure is otherwise identical - which is why comparing
      TERs on same-index funds is one of the few free improvements
      available.
    rubricNote: >
      A 5 contrasts certain cost with uncertain return and draws the
      minimise-when-identical rule. A 3 says "fees are guaranteed" without
      the decision rule.
    askConfidence: true
exercise:
  id: ex1
  conceptId: fees
  type: calculation
  prompt: >
    10,000 euros grows at 6 percent a year before fees. Fund A charges 1
    percent (net 5 percent), fund B charges 0.2 percent (net 5.8 percent).
    Using factors 1.05^20 = 2.653 and 1.058^20 = 3.088, what is the
    difference in final value after 20 years, in euros?
  answer: 4350
  tolerance: 5
  explanation: >
    Fund B: 10,000 x 3.088 = 30,880. Fund A: 10,000 x 2.653 = 26,530.
    Difference: 30,880 - 26,530 = 4,350 euros - from a 0.8-point annual fee
    gap on a five-figure sum.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  The rate-reduction mechanism explained (self-score 4+ on q1), both
  classifications correct, the certain-cost reasoning (self-score 4+ on q3),
  and the 20-year difference computed correctly.
---

# Lesson 18 - Why do fees matter?

One sentence to hold on to: annual fees are subtracted from your return every single year, so they compound against you - over decades, one extra percentage point consumes a fifth or more of the final wealth.

## The problem

Two funds hold essentially the same world portfolio. One charges 0.2 percent a year, the other 1.8 percent - a difference that sounds like pocket change. Invest 100,000 euros for 30 years and the pocket change becomes more than 180,000 euros of missing wealth. No market crash costs the patient investor as much as this arithmetic, and none is as avoidable.

## The idea

An investment fund's running cost - lesson 14's TER - is deducted from the fund's assets automatically, every year, before you see any performance. You never receive a bill; the fee simply makes each year's return smaller. A 6 percent gross return under a 1.8 percent fee is a 4.2 percent net return. The fee is not a charge on your money once; it is a permanent reduction of your growth rate.

That framing plugs directly into lesson 6. Compounding is exponential in the rate, so small rate changes bend the entire curve - and the bend widens with every year. There is a second, less visible layer: every euro taken in fees this year also takes with it all the compound growth that euro would have earned for the remaining decades. Early fees are the most expensive ones you ever pay.

Now the property that makes fees unique: certainty. Every return figure in investing is a hope; the fee is a contract. Markets up, markets down - the percentage is charged. A certain, compounding cost sitting on top of an uncertain return deserves more attention than any other number on a fund document, and it reliably gets less.

The decision rule follows. When two funds deliver the same exposure - the same index, competently replicated - the cheaper one is simply better: same engine, less friction. This is why lesson 14's passive trackers at 0.1-0.3 percent are this course's default vehicle, and why any fund charging 1.5-2 percent must promise something extraordinary to justify itself - a promise lesson 17 taught you to price sceptically.

## The terms

The TER (total expense ratio) is a fund's annual running cost as a percentage of assets, deducted internally. The gross return is performance before costs; the net return is after them. Fee drag is the cumulative wealth lost to fees and their forgone compounding.

## Worked example

100,000 euros, 6 percent gross, 30 years, two fee levels. Fund A, TER 0.2: net rate 5.8 percent; final value 100,000 x 1.058^30 = 100,000 x 5.42 = 542,000 euros. Fund B, TER 1.8: net rate 4.2 percent; final value 100,000 x 1.042^30 = 100,000 x 3.43 = 343,000 euros.

Difference: 542,000 - 343,000 = 199,000 euros - about 37 percent of the cheap fund's final wealth, destroyed by a 1.6-point annual fee gap. For scale: total fees "paid" as percentages were never more than 1.8 in any single year. The monster is not the annual charge; it is the compounding of the charge.

## Connections

Fees are lesson 6's compounding running in reverse and lesson 9's opportunity cost written into a contract: each fee euro forgoes its own future growth. They are the reason lesson 14's TER sits on every fund document, and they join lesson 8's inflation as the two subtractions that turn advertised returns into real ones. The ETF-comparison lab later makes the fund-versus-fund arithmetic routine.

## Common misconceptions

"One or two percent is negligible." Applied annually to a compounding base, it consumes a fifth to a third of decades-long outcomes - the worked example is the proof. "You don't pay if you never see a bill." Internal deduction is still your money; invisibility is the design, not the absence. "Higher fees signal higher quality." For identical index exposure the product is the same; the fee difference is pure friction, and paying more buys nothing.
