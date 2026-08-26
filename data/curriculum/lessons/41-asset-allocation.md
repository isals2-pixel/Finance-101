---
lesson: 41
slug: asset-allocation
title: Asset allocation
oneSentence: >
  Asset allocation - the split between stocks, bonds and cash - is the
  decision that sets a portfolio's risk and drives most of its return, and
  the right split is bounded by risk capacity, risk tolerance and horizon.
level: 10
prerequisites: [risk-adjusted-return, long-term-investing]
concepts: [asset-allocation]
visual:
  id: allocation-dials
  kind: diagram
  requirement: required
  caption: >
    Three dials - horizon, capacity, tolerance - each capping the equity
    share; the allocation is set by the lowest of the three, not the
    average.
prediction:
  prompt: >
    Two savers hold the same excellent funds. One is 80 percent stocks / 20
    percent bonds, the other 30/70. Ten years on, whose result differed
    more from the other's - and did fund choice or the split cause it?
  modelAnswer: >
    The split. With broad funds, both got their markets' returns; the
    80/20 saver simply held far more equity risk and premium. Research and
    the arithmetic agree: the allocation explains the bulk of a
    diversified portfolio's risk and return; fund selection among broad
    products moves the decimals.
retrieval:
  - id: q1
    conceptId: asset-allocation
    type: freeRecall
    prompt: >
      Define strategic asset allocation, and explain the difference between
      risk tolerance and risk capacity - and which one should bind.
    modelAnswer: >
      Strategic allocation is the long-term target split across asset
      classes - equities, bonds, cash - chosen in advance and held through
      cycles. Risk tolerance is psychological: the drawdown you can watch
      without selling. Risk capacity is financial: the loss your situation
      can absorb, set by horizon, income stability and reserves. The
      allocation must respect the lower of the two - a mix you abandon in
      a crash returns less than a calmer mix you keep.
    rubricNote: >
      A 5 has the definition plus both concepts and the lower-binds rule.
      A 3 defines allocation but blurs tolerance and capacity.
    askConfidence: false
  - id: q2
    conceptId: asset-allocation
    type: classification
    prompt: Which factor is doing the work in each case?
    items:
      - text: A 30-year-old with stable income and a 30-year horizon can hold a high equity share.
        options: [risk capacity, risk tolerance]
        answer: risk capacity
        errorMap:
          risk tolerance: misconception
      - text: A saver with ample reserves who nonetheless sold everything in the last 20 percent dip should hold fewer stocks.
        options: [risk capacity, risk tolerance]
        answer: risk tolerance
        errorMap:
          risk capacity: misconception
      - text: Shifting the stock share up and down each quarter based on market outlook.
        options: [strategic allocation, tactical allocation]
        answer: tactical allocation
        errorMap:
          strategic allocation: factual-misunderstanding
  - id: q3
    conceptId: asset-allocation
    type: shortAnswer
    prompt: >
      Why does this course treat tactical allocation - shifting weights on
      market outlook - as a cost rather than an opportunity for a private
      investor?
    modelAnswer: >
      Tactical shifts are market timing under another name: to add value
      they must beat the market's pricing twice, on exit and re-entry.
      Lesson 25's evidence applies - missed best days are concentrated
      near worst days, and mistimed moves cost more than they gain. The
      strategic split captures the premiums; tampering with it mostly
      adds trades, taxes and regret.
    rubricNote: >
      A 5 names the timing-twice problem and the evidence. A 3 says
      "timing is hard" without why.
    askConfidence: true
exercise:
  id: ex1
  conceptId: asset-allocation
  type: calculation
  prompt: >
    A 60/40 portfolio: equities with 6 percent expected return, bonds with
    3. What is the portfolio's expected return, in percent? (Illustrative
    assumptions, not forecasts.)
  answer: 4.8
  tolerance: 0.001
  explanation: >
    0.6 x 6 + 0.4 x 3 = 3.6 + 1.2 = 4.8 percent. Expected return averages
    through the weights - unlike volatility, which lesson 39 showed
    averages down. The split, one line of arithmetic, sets the return
    engine.
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
  Definition with tolerance/capacity distinction and the lower-binds rule
  (self-score 4+ on q1), all classifications correct, the timing-twice
  argument (self-score 4+ on q3), and the expected-return calculation
  correct.
---

# Lesson 41 - Asset allocation

One sentence to hold on to: asset allocation - the split between stocks, bonds and cash - is the decision that sets a portfolio's risk and drives most of its return, and the right split is bounded by risk capacity, risk tolerance and horizon.

## The problem

Savers agonize over which fund to buy and give the stock/bond split five minutes. The weights are backwards: among broad, cheap funds the differences are decimals, while the split between asset classes decides whether a portfolio swings 5 percent or 18, earns bond-like or equity-like returns, and survives its owner's nerves. Level 9 built the map; this level places you on it.

## The idea

Strategic asset allocation is the long-term target split across asset classes - say 60 percent equities, 40 percent high-grade bonds - chosen once, deliberately, and held through cycles. It is the main dial on both of lesson 40's axes: more equity moves the portfolio up and right along the frontier - more expected return, more volatility; more bonds and cash move it down and left. Because broad funds deliver their asset class's return almost mechanically (lesson 29), the split - not fund selection - explains the bulk of a diversified portfolio's outcome.

Three constraints bound the choice. Horizon: equities' spread of outcomes narrows with time (lesson 19), so money needed within a few years cannot ride equity swings, while decades-away money can. Risk capacity is financial - the loss your situation could absorb without derailing your plans, set by horizon, income stability, and reserves; it is a fact about your finances. Risk tolerance is psychological - the drawdown you can watch without selling; it is a fact about you, best estimated from behaviour in actual dips, not from questionnaires answered in calm markets. The allocation must fit the lower of capacity and tolerance: a theoretically optimal 90/10 abandoned in a crash - selling at the bottom, lesson 17's permanent loss - returns less than a 60/40 held throughout. The best allocation you can keep beats the better one you can't.

Tactical allocation - shifting the weights on market outlook - is the tempting counterfeit. It is market timing wearing a strategy's name, and it must be right twice per round trip. This course's position, from lesson 25's evidence: the strategic split does the work; leave the dial alone.

## The terms

Asset allocation is the division of a portfolio across asset classes. Strategic allocation is the long-term target mix; tactical allocation is short-term deviation from it on market views. Risk capacity is the loss one's finances can absorb; risk tolerance is the loss one's temperament can endure. Liquidity need is money required soon, held outside volatile assets.

## Worked example

Take lesson 30's illustrative assumptions: equities 6 percent expected return at 16 volatility, high-grade bonds 3 at 5, low correlation. A 60/40 mix: expected return 0.6 x 6 + 0.4 x 3 = 4.8 percent; volatility, by lesson 39's formula, about 10 - and a two-standard-deviation bad year near 4.8 − 20 = −15 percent. An 80/20 mix: 5.4 percent expected, volatility about 13, bad year near −21. The question the numbers pose is not "which return is higher" - the question is which bad year you would hold through. Answer that honestly, and the allocation chooses itself; the portfolio laboratory computes every step live.

## Connections

Allocation applies lesson 40's frontier to your own constraints; lesson 19's horizon logic and lesson 17's sell-at-the-bottom warning set the bounds. The two-layer diversification of lesson 39 dictates the ingredients. Next lesson: keeping the split on target - rebalancing, and why the order of returns matters once withdrawals begin.

## Common misconceptions

"The right allocation maximizes expected return." Only the riskiest mix you can actually hold does; an abandoned allocation underperforms a kept one. "Tolerance and capacity are the same." One is temperament, the other arithmetic - and the lower one binds. "Skilled amateurs add return tactically." Right-twice pricing, lesson 25's missed-best-days evidence, plus costs: the strategic dial, untouched, is the professional-grade choice."
