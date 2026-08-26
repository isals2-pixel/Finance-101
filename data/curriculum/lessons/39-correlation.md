---
lesson: 39
slug: correlation
title: Correlation and portfolio risk
oneSentence: >
  Correlation measures how much two assets move together, and any
  correlation below one makes a mix less volatile than the average of its
  parts - the mathematical engine inside diversification.
level: 9
prerequisites: [volatility, diversification]
concepts: [correlation]
visual:
  id: correlation-mix
  kind: chart
  requirement: required
  caption: >
    Portfolio volatility for a 60/40 stock-bond mix as correlation falls
    from +1 to 0: the same assets, less total swing.
prediction:
  prompt: >
    Stocks swing 16 percent a year, bonds 5. You hold 60/40. Is the
    portfolio's volatility equal to the weighted average, 0.6 x 16 + 0.4 x
    5 = 11.6 percent - or something else? Why?
  modelAnswer: >
    Less than 11.6, because stocks and bonds do not move in lockstep. When
    one zigs while the other zags, part of the swings cancel inside the
    portfolio; only if correlation were exactly +1 would the weighted
    average hold. Imperfect correlation is where diversification's
    arithmetic lives.
retrieval:
  - id: q1
    conceptId: correlation
    type: freeRecall
    prompt: >
      Define correlation and its range, and explain why a correlation below
      +1 reduces portfolio volatility below the weighted average of the
      parts.
    modelAnswer: >
      Correlation measures the degree to which two return series move
      together, from +1 (lockstep) through 0 (unrelated) to -1 (opposite).
      At +1, swings add exactly and portfolio volatility is the weighted
      average. Below +1, some of one asset's bad days land on the other's
      good days: inside the portfolio those moves partially offset, so the
      total swing is smaller than the parts' average - and the lower the
      correlation, the larger the cancellation.
    rubricNote: >
      A 5 has the definition, range, and the offsetting mechanism. A 3
      defines it without the mechanism.
    askConfidence: false
  - id: q2
    conceptId: correlation
    type: classification
    prompt: Roughly what correlation would you expect?
    items:
      - text: Two broad European stock ETFs on overlapping indexes.
        options: [close to +1, close to 0, negative]
        answer: close to +1
        errorMap:
          close to 0: factual-misunderstanding
          negative: factual-misunderstanding
      - text: A broad stock index and short-term government bonds, over long periods.
        options: [close to +1, low (around 0)]
        answer: low (around 0)
        errorMap:
          close to +1: misconception
      - text: Diversifying between the two overlapping stock ETFs from the first item.
        options: [meaningfully reduces risk, barely reduces risk]
        answer: barely reduces risk
        errorMap:
          meaningfully reduces risk: misconception
  - id: q3
    conceptId: correlation
    type: shortAnswer
    prompt: >
      Correlations are not constant - in crashes, stock-stock correlations
      rise toward 1. What does that imply about diversification within
      stocks versus diversification across asset classes?
    modelAnswer: >
      Within stocks, diversification removes single-company risk but
      weakens exactly when markets panic, as everything equity falls
      together. Protection in those moments must come from assets on
      different drivers - bonds, cash - whose correlation to stocks stays
      low or drops in crises. Hence the two layers: many stocks against
      specific risk, multiple asset classes against market panic.
    rubricNote: >
      A 5 separates the two layers and names crisis correlation rising. A 3
      says "diversify more" without the layers.
    askConfidence: true
exercise:
  id: ex1
  conceptId: correlation
  type: calculation
  prompt: >
    Two assets, each with 16 percent volatility, held 50/50, correlation 0.
    Portfolio volatility is sqrt(0.5² x 16² + 0.5² x 16²). Compute it in
    percent (one decimal).
  answer: 11.3
  tolerance: 0.05
  explanation: >
    0.25 x 256 + 0.25 x 256 = 128; sqrt(128) = 11.3 percent - down from 16
    with no return given up. At correlation +1 the same mix would swing the
    full 16; the reduction is pure correlation.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with the offsetting mechanism (self-score 4+ on q1), all
  classifications correct, the two-layer implication (self-score 4+ on q3),
  and the portfolio-volatility calculation correct.
---

# Lesson 39 - Correlation and portfolio risk

One sentence to hold on to: correlation measures how much two assets move together, and any correlation below one makes a mix less volatile than the average of its parts - the mathematical engine inside diversification.

## The problem

Mix a 16-percent-volatility asset with a 5-percent one, 60/40, and measure the result: the portfolio swings less than the 11.6 percent a weighted average predicts. Something inside the mix is absorbing swings that both parts genuinely have. That something has a name, a number, and a slider in your portfolio laboratory.

## The idea

Correlation measures co-movement between two return series on a scale from +1 to -1. At +1, they move in lockstep - same direction, proportional size. At 0, no relationship: one's bad day says nothing about the other's. At -1, mirror images. Real pairs live between: two broad stock indexes correlate near +0.9; stocks and high-grade bonds hover near 0 over long stretches; almost nothing sustains -1.

Why it moves portfolio volatility: inside a portfolio, only the net move matters. If both assets drop together, the swings add. If one drops while the other rises or holds - which happens constantly below correlation +1 - the moves partially cancel before reaching the total. The weighted-average volatility is therefore the worst case, reached only at +1; every step of correlation below it deletes swing from the portfolio without touching either asset's return. This is lesson 16's free lunch, now with its mechanism: diversification works exactly to the extent correlations are imperfect - and lesson 38 showed deleted swing is not comfort but compound growth.

The fine print matters. Correlations are measured, not fixed, and they misbehave at the worst times: in panics, stock-stock correlations surge toward 1 as everything equity is sold together. Diversification within stocks - lesson 16's thousand companies - still kills single-name risk, but its volatility reduction thins in crashes. The second layer, across asset classes on different economic drivers - equities on earnings, high-grade bonds on rates and safety flows - is what still cushions then. That two-layer structure is the entire blueprint of Level 10's allocation, and the portfolio laboratory's correlation matrix is this lesson running live.

## The terms

Correlation is the degree of co-movement between two return series, from -1 to +1. Portfolio volatility is the standard deviation of the mixed portfolio's returns, computed from weights, volatilities and correlations. Asset classes are broad groups (equities, bonds, cash) with distinct economic drivers.

## Worked example

Two assets, 16 percent volatility each, 50/50. Correlation +1: portfolio volatility is the weighted average, 16 percent - mixing identical twins changes nothing. Correlation 0: the formula keeps only the squared terms - 0.5² x 16² + 0.5² x 16² = 64 + 64 = 128; square root: 11.3 percent. Nearly a third of the swing deleted, expected return untouched.

Now the 60/40 stock-bond case: vols 16 and 5, correlation 0.1. Weighted average says 0.6 x 16 + 0.4 x 5 = 11.6. Full formula: 0.36 x 256 + 0.16 x 25 + 2 x 0.6 x 0.4 x 0.1 x 16 x 5 = 92.2 + 4.0 + 3.8 = 100; sqrt = 10.0 percent. The lab's numbers, by hand - and lesson 38's drag shrinks with every deleted point.

## Connections

Correlation supplies the machinery beneath lesson 16, the mathematics inside lesson 30's portfolio laboratory, and the crisis caveat that shapes Level 10: many stocks against specific risk, several asset classes against panic. Bonds' role from lessons 13 and 33 now reads precisely: a low-correlation, lower-volatility ballast whose price is a lower expected return.

## Common misconceptions

"Adding a risky asset makes the portfolio riskier." Below correlation +1 it can lower total volatility - the mix's swing, not the newcomer's, is what you hold. "My three funds diversify me." Overlapping stock funds correlate near +1; look through to drivers, not line counts. "Correlations are stable properties." They are historical measurements that converge toward 1 in equity panics - which is why cross-asset diversification, not more stocks, is the crash cushion."
