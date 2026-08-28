---
lesson: 34
slug: credit-risk-and-ratings
title: Credit risk and ratings
oneSentence: >
  A bond's extra yield over the safest government debt is the market's price
  for the risk of not being paid - ratings grade that risk, and "high yield"
  is its compensation, never free income.
level: 7
prerequisites: [bonds, risk]
concepts: [credit-risk]
visual:
  id: credit-spectrum
  kind: diagram
  requirement: required
  caption: >
    The credit spectrum from safest sovereigns through investment grade to
    high yield: as rated quality falls, the yield spread over government
    debt widens.
prediction:
  prompt: >
    Two 5-year bonds in euros: the German government's yields 3.0 percent, a
    heavily indebted company's yields 7.5 percent. What is the 4.5-point gap
    made of, and is the corporate bond the better deal?
  modelAnswer: >
    The gap is the credit spread: compensation for the real probability the
    company defaults and pays less than promised (plus its bonds' poorer
    liquidity). Neither is "better" - across many such bonds, expected
    losses eat much of the extra yield; the corporate pays more because it
    might pay nothing.
retrieval:
  - id: q1
    conceptId: credit-risk
    type: freeRecall
    prompt: >
      Define credit risk, the credit spread, and the investment-grade /
      high-yield boundary.
    modelAnswer: >
      Credit risk is the risk that a bond's issuer fails to pay coupons or
      principal in full and on time. The credit spread is the extra yield a
      bond offers over comparable top-quality government debt - the market
      price of that risk. Rating agencies grade issuers on a scale;
      investment grade (BBB-/Baa3 and above) marks the sturdier issuers,
      high yield (below it) the riskier ones, whose bonds must pay wide
      spreads to find buyers.
    rubricNote: >
      A 5 has all three definitions with the boundary named. A 3 defines
      credit risk and spread without the grading.
    askConfidence: false
  - id: q2
    conceptId: credit-risk
    type: classification
    prompt: Higher or lower credit risk, typically?
    items:
      - text: A bond rated AA versus one rated BB.
        options: [the AA bond is riskier, the BB bond is riskier]
        answer: the BB bond is riskier
        errorMap:
          the AA bond is riskier: terminology-confusion
      - text: German government debt versus a small company's debt.
        options: [the government debt, the company debt]
        answer: the company debt
        errorMap:
          the government debt: factual-misunderstanding
      - text: In a recession, credit spreads typically...
        options: [widen, narrow, are unchanged]
        answer: widen
        errorMap:
          narrow: causal-reasoning-error
          are unchanged: factual-misunderstanding
  - id: q3
    conceptId: credit-risk
    type: shortAnswer
    prompt: >
      Why does a diversified bond ETF change what credit risk means for you
      compared to holding one corporate bond?
    modelAnswer: >
      One bond's default is lesson 17's permanent loss - a single story
      ending badly. Across hundreds of issuers, defaults become a
      statistical cost: a few positions lose while the spread income from
      all the others compensates, exactly lesson 16's mechanism. The ETF
      converts ruin risk into an expected-loss rate you can price - though
      spreads still widen together in recessions, which is the market risk
      that remains.
    rubricNote: >
      A 5 maps single-name ruin to portfolio expected loss and names the
      remaining systematic part. A 3 says "diversification helps" without
      the conversion.
    askConfidence: true
exercise:
  id: ex1
  conceptId: credit-risk
  type: calculation
  prompt: >
    A corporate bond yields 5.1 percent while a government bond of the same
    maturity yields 3.0 percent. What is the credit spread, in percentage
    points?
  answer: 2.1
  tolerance: 0
  explanation: >
    5.1 - 3.0 = 2.1 points. That spread is the market's annual price for
    the company's default probability (and its bonds' thinner liquidity) -
    the compensation, not a bonus.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Three definitions with the IG/HY boundary (self-score 4+ on q1), all
  classifications correct, the diversification conversion (self-score 4+
  on q3), and the spread calculation correct.
---

# Lesson 34 - Credit risk and ratings

One sentence to hold on to: a bond's extra yield over the safest government debt is the market's price for the risk of not being paid - ratings grade that risk, and "high yield" is its compensation, never free income.

## The problem

Two bonds, same currency, same five years: one yields 3.0 percent, the other 7.5. If both promises were equally good, nobody would hold the first - so the 4.5-point gap must be the price of something. Naming that something correctly is the difference between earning a risk premium and walking into lesson 17's oldest trap: "high return, low risk, somewhere".

## The idea

Lesson 13 introduced credit risk - the issuer might not pay - and lesson 5 said lenders price it. The bond market prices it in one visible number: the credit spread, a bond's yield minus the yield of top-quality government debt of the same maturity. The spread is the annual compensation for bearing the default probability; multiplied across thousands of bonds, it is the market's live estimate of who might fail.

The grading system makes the spectrum legible. Rating agencies assess issuers and publish grades - from AAA at the summit down through the alphabet. One boundary matters most: investment grade (BBB-/Baa3 and above) versus high yield below it. Investment grade marks issuers whose default is judged unlikely; high yield - also called speculative grade - marks real default probability, and its spreads are paid accordingly. Ratings are informed opinions, not guarantees: they lag events and have been famously wrong, so the spread itself, which updates by the minute, is the sharper signal.

The spectrum runs from sovereigns like Germany and France - the near-riskless anchor other yields build on - through solid corporates, to leveraged companies whose bonds behave, in stressed markets, much like their equity. And the whole spectrum breathes with lesson 25's cycle: spreads compress in calm expansions and blow wide in recessions, precisely when defaults cluster - credit risk is partly systematic, arriving with the bad times it was supposed to cushion.

What makes credit risk holdable is lesson 16. One corporate bond is a single story that can end at zero. A bond ETF across hundreds of issuers converts that ruin into a statistical expected-loss rate: some positions default, the spread income of the rest compensates, and the arithmetic is priced in advance. Diversified investment-grade credit is a modest, payable risk; concentrated high yield is equity risk wearing a bond's clothes.

## The terms

Credit risk is the risk of issuer non-payment. Default is failure to pay as promised. The credit spread is a bond's yield minus comparable top-grade government yield. A credit rating is an agency's grade of issuer quality; investment grade is BBB-/Baa3 or better, high yield anything below. Sovereign bonds are government-issued debt.

## Worked example

A 5-year corporate bond yields 5.1 percent; the government curve at 5 years pays 3.0. Spread: 5.1 - 3.0 = 2.1 points. Read it as pricing: if such issuers default with 2 percent probability a year, losing roughly half the money when they do, expected annual loss ≈ 0.02 x 50 = 1.0 point - the spread covers it with a margin for fear and illiquidity.

Portfolio version: 10,000 euros across an ETF of 400 such bonds. Two issuers (0.5 percent of positions) default in a bad year, each costing half its 25 euro position: about 25 euros of losses - while the spread earned roughly 210. The same year, one concentrated holder of a defaulted name lost 50 percent of everything. Identical risk, opposite experiences: lesson 16, in credit.

## Connections

Credit risk completes bond risk's second axis beside lesson 33's duration - every bond fund is located on that two-axis map, and Level 10 places both in the portfolio. Spreads widening in recessions ties to lessons 17 and 25: part of credit's yield is payment for arriving hurt in bad times. This closes Level 7; Level 8's remaining ETF machinery is next.

## Common misconceptions

"A higher-yielding bond is a better bond." The extra yield is priced default probability; across many bonds, expected losses consume much of it - compensation, not alpha. "Ratings guarantee safety." They are lagging opinions; the market spread reprices continuously and disagrees first. "Government bonds have no credit risk." Less, not none - sovereigns have defaulted, and the market prices the difference between Berlin's promise and others' every day."
