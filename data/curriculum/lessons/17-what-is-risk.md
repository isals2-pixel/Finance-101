---
lesson: 17
slug: what-is-risk
title: What is risk?
oneSentence: >
  Risk is the spread of possible outcomes around what you expect - and the
  crucial distinction is between temporary fluctuation, which time can
  absorb, and permanent loss, which it cannot.
level: 9
prerequisites: [money, inflation]
concepts: [risk]
visual:
  id: risk-range
  kind: chart
  requirement: required
  caption: >
    Three assets, three outcome ranges: cash is narrow but drifts down in
    real terms; bonds spread moderately; stocks spread widely around the
    highest expected path.
prediction:
  prompt: >
    Which is riskier over 30 years: a portfolio that swings 20 percent in bad
    years but grows 6 percent on average, or cash that never swings and
    loses 2 percent of purchasing power a year? Defend your answer.
  modelAnswer: >
    Depends on the risk that matters. For next year's money, the swinging
    portfolio is riskier. For 30-year money, cash is: its real loss is
    near-certain and compounds to roughly minus 45 percent, while the
    portfolio's swings are temporary against a rising expected path. Over
    long horizons the certain erosion outweighs the visible fluctuation.
retrieval:
  - id: q1
    conceptId: risk
    type: freeRecall
    prompt: >
      Define investment risk, and explain the difference between volatility
      and permanent loss with one example of each.
    modelAnswer: >
      Risk is the uncertainty of outcomes - the spread of what might happen
      around what you expect, including bad cases. Volatility is temporary
      fluctuation: a broad market falling 20 percent in a panic and
      recovering (an unrealised swing). Permanent loss is value that never
      comes back: a bankruptcy, or selling during the fall and locking the
      loss in. Volatility becomes permanent loss mainly through forced or
      panicked selling and concentration.
    rubricNote: >
      A 5 defines risk as outcome spread and cleanly separates the two kinds
      with examples and the conversion mechanism. A 3 defines risk without
      the two kinds.
    askConfidence: false
  - id: q2
    conceptId: risk
    type: classification
    prompt: Fluctuation or permanent loss?
    items:
      - text: A broad world portfolio falls 25 percent in a crash; you hold; it recovers over three years.
        options: [fluctuation, permanent loss]
        answer: fluctuation
        errorMap:
          permanent loss: terminology-confusion
      - text: A single company you hold goes bankrupt.
        options: [fluctuation, permanent loss]
        answer: permanent loss
        errorMap:
          fluctuation: misconception
      - text: You sell everything at the bottom of the crash.
        options: [fluctuation, permanent loss]
        answer: permanent loss
        errorMap:
          fluctuation: causal-reasoning-error
  - id: q3
    conceptId: risk
    type: shortAnswer
    prompt: >
      Why do stocks pay more than safer assets on average? What is the
      premium compensation for, and what would happen if the risk vanished?
    modelAnswer: >
      The extra average return - the risk premium - is payment for bearing
      the spread of outcomes: investors will not accept wide swings and deep
      bad cases for the safe asset's return, so risky claims must be priced
      to offer more. If the risk vanished, buyers would bid prices up until
      the extra return vanished with it: return above the safe rate exists
      only because someone must hold the uncertainty.
    rubricNote: >
      A 5 explains the premium as priced compensation and the no-risk
      no-premium logic. A 3 says "more risk, more return" without pricing.
    askConfidence: true
exercise:
  id: ex1
  conceptId: risk
  type: calculation
  prompt: >
    A portfolio worth 20,000 euros falls 30 percent in a crash. It then
    recovers, gaining 30 percent from the bottom. What is it worth after the
    recovery, in euros?
  answer: 18200
  tolerance: 0
  explanation: >
    Fall: 20,000 x 0.70 = 14,000. Recovery: 14,000 x 1.30 = 18,200 euros -
    still below the start. A loss needs a larger percentage gain to undo:
    -30 percent requires +42.9 percent, not +30.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Risk as outcome spread with the two kinds separated (self-score 4+ on q1),
  all classifications correct, the risk-premium pricing logic (self-score 4+
  on q3), and the asymmetry calculation correct.
---

# Lesson 17 - What is risk?

One sentence to hold on to: risk is the spread of possible outcomes around what you expect - and the crucial distinction is between temporary fluctuation, which time can absorb, and permanent loss, which it cannot.

## The problem

Two savers, 30 years. One holds a portfolio that lurches - down 20 percent some years, up 30 in others - and ends with triple her money in real terms. The other holds cash that never moves a centime and ends able to buy barely half of what he started with. Everyday language calls the first saver the risk-taker. What exactly did the second one avoid?

## The idea

Risk is not a feeling; it is a shape. Every investment has a range of possible outcomes around its expected path - some tightly clustered, some spread wide with severe bad cases. Risk is that spread. Wider spread means less certainty about where you land, and worse worst-cases.

The distinction that organizes everything else: fluctuation versus permanent loss. Fluctuation is prices swinging around value - a broad market falling 25 percent in a panic and recovering as earnings persist. Unrealised, it is a number on a screen. Permanent loss is value that never returns: a company failing (lesson 16's specific risk), or - the commonest route - the holder selling during the fall and converting a swing into a fact. Fluctuation becomes permanent chiefly through concentration, forced selling, or panic.

Cash reveals why "no risk" is never on the menu. Its nominal value is fixed; lesson 7 showed its real value eroding with near-certainty. Cash trades a wide visible spread for a narrow one centred below zero in real terms. Every asset is some trade-off of this kind; the choice is which risks to hold, not whether.

Why hold spread at all? Because it is paid. Investors demand extra expected return to bear uncertainty - the risk premium. Stocks return more than safe assets on average precisely because their outcomes spread widely and someone must carry that; if the spread disappeared, so would the premium, competed away by eager buyers. Return above the safe rate is compensation, never a gift - a rule that will expose many a "high return, no risk" story later in this course.

One arithmetic trap completes the picture: losses weigh more than equal-sounding gains, because recovery percentages apply to a smaller base. Down 30 needs up 43 to break even.

## The terms

Risk is the dispersion of possible outcomes around the expected one. Volatility is the size of an asset's fluctuations. A permanent loss is a decline that is never recovered. The risk premium is the extra expected return demanded for bearing risk. A drawdown is a peak-to-trough decline.

## Worked example

A 20,000 euro portfolio in a crash. The fall: 30 percent, so 20,000 x 0.70 = 14,000. The rebound: 30 percent from the bottom, 14,000 x 1.30 = 18,200 - still 1,800 short. To recover fully, the gain needed is 20,000 / 14,000 - 1 = 42.9 percent.

Now the two savers over 30 years, in real terms. Cash at lesson 7's arithmetic: purchasing power 1 / 1.02^30 = 55 percent of the start - a near-certain 45 percent real loss, no bad luck required. The fluctuating portfolio at a 4 percent real expected return: 1.04^30 = 3.24 times the start - reached through every one of those lurches. The narrow path lost; the wide path, held to the end, was paid for its width.

## Connections

Risk gives lesson 16's diversification its target - the removable kind - and lesson 13's coupons their premium logic. It reframes lesson 7: inflation is cash's risk. And it sets up lesson 19: time is what turns fluctuation from threat into toll. Level 9 later measures spread precisely (volatility, drawdowns); today fixes what the measurements are about.

## Common misconceptions

"Cash is the no-risk option." Cash holds a near-certain real erosion; it minimises one risk by accepting another. "Volatility equals losing money." Unrealised swings reverse; loss becomes real through selling, concentration, or failure - largely controllable behaviours. "High return with no risk exists somewhere." The premium exists because risk is borne; any offer claiming otherwise is mispriced, misdescribed, or fraudulent.
