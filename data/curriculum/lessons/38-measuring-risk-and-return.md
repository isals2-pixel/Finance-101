---
lesson: 38
slug: measuring-risk-and-return
title: Measuring risk and return
oneSentence: >
  Volatility - the standard deviation of returns - measures how widely
  outcomes swing, and because swings drag compound growth below the simple
  average, the money always follows the compound path, not the average.
level: 9
prerequisites: [risk, compounding]
concepts: [volatility]
visual:
  id: volatility-drag
  kind: chart
  requirement: required
  caption: >
    Two paths with the same +5 percent average: the steady one compounds to
    more than the swinging one - the gap is volatility drag.
prediction:
  prompt: >
    A portfolio returns +20 percent one year and -10 percent the next. Its
    average return is +5 percent per year. Did 10,000 euros grow by about 5
    percent a year? Compute before answering.
  modelAnswer: >
    No: 10,000 x 1.20 = 12,000, then x 0.90 = 10,800 - a compound growth of
    about 3.9 percent a year, not 5. Losses need bigger gains to undo
    (lesson 17), so swings pull realized growth below the arithmetic
    average. The gap grows with volatility.
retrieval:
  - id: q1
    conceptId: volatility
    type: freeRecall
    prompt: >
      Define volatility, and explain why two investments with the same
      average return can leave you with different amounts of money.
    modelAnswer: >
      Volatility is the typical size of an investment's fluctuations around
      its average return - statistically, the standard deviation of its
      returns, quoted per year. Compounding is multiplicative, and a loss
      needs a larger gain to recover, so swings subtract from realized
      compound growth: at equal averages, the steadier series ends higher.
      This volatility drag grows roughly with the square of volatility.
    rubricNote: >
      A 5 defines it as standard deviation and explains the drag through
      the loss-recovery asymmetry. A 3 defines it without the drag.
    askConfidence: false
  - id: q2
    conceptId: volatility
    type: classification
    prompt: Which series is more volatile?
    items:
      - text: Yearly returns of +4, +6, +5, +5 percent vs +30, -18, +25, -12 percent.
        options: [the first, the second]
        answer: the second
        errorMap:
          the first: factual-misunderstanding
      - text: A broad stock index (historically ~15-20% yearly swings) vs short-term government bonds (~1-3%).
        options: [the stock index, the bonds]
        answer: the stock index
        errorMap:
          the bonds: factual-misunderstanding
      - text: Which of the two +5-percent-average series from the first item ends with MORE money?
        options: [the steady one, the swinging one]
        answer: the steady one
        errorMap:
          the swinging one: misconception
  - id: q3
    conceptId: volatility
    type: shortAnswer
    prompt: >
      Lesson 17 said risk is paid. This lesson says volatility costs
      compound growth. How do both fit together for a long-term stock
      investor?
    modelAnswer: >
      Stocks' higher expected return is compensation for their volatility -
      the premium exists because the swings must be borne. The drag is
      already part of the realized long-run return history reports; even
      after paying it, broad equities have compounded well above steady
      cash. So volatility is a real cost, priced into a larger reward -
      worth bearing when the horizon is long, worth reducing (next lesson)
      whenever reduction is free.
    rubricNote: >
      A 5 reconciles premium and drag and lands on diversification as the
      free reduction. A 3 restates one side only.
    askConfidence: true
exercise:
  id: ex1
  conceptId: volatility
  type: calculation
  prompt: >
    10,000 euros returns +20 percent in year one and -10 percent in year
    two. What is it worth at the end, in euros?
  answer: 10800
  tolerance: 0
  explanation: >
    10,000 x 1.20 = 12,000; then 12,000 x 0.90 = 10,800 euros - a 3.9
    percent compound annual growth, despite the +5 percent arithmetic
    average. The average describes the years; the compound path describes
    the money.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with the drag mechanism (self-score 4+ on q1), all
  classifications correct, the premium/drag reconciliation (self-score 4+
  on q3), and the two-year calculation correct.
---

# Lesson 38 - Measuring risk and return

One sentence to hold on to: volatility - the standard deviation of returns - measures how widely outcomes swing, and because swings drag compound growth below the simple average, the money always follows the compound path, not the average.

## The problem

Two funds both report "+5 percent average annual return over 10 years". One compounded your money at nearly 5 percent; the other at barely 3. Both statements are true and audited. The number that separates them is the one this lesson defines - and it is the number lesson 17's "spread of outcomes" wears in every fund document.

## The idea

Lesson 17 defined risk as the spread of outcomes; volatility is the spread, measured. Take an investment's yearly returns, compute how far they typically deviate from their own average - the standard deviation - and quote it per year. A short-term government bond fund might show 2 percent volatility: most years land within a couple of points of its average. A broad stock index shows 15-20: swings of that size are ordinary, larger ones unremarkable. One number, and lesson 33's duration-2 versus duration-15 contrast, lesson 28's calm versus panicked books, and lesson 17's ranges all become comparable on a single scale.

Volatility is not only discomfort - it is arithmetic cost. Compounding is multiplicative, and lesson 17 showed the asymmetry: -10 percent needs +11.1 to undo, -30 needs +42.9. So a swinging series compounds to less than its arithmetic average suggests, while a steady series keeps nearly all of it. The gap - volatility drag - grows roughly with the square of the volatility: doubling the swings quadruples the drag. Hence the two truthful funds: same average, different volatility, different money.

Two consequences frame the rest of Level 9. First, always read pairs: a return without its volatility is half a number - fund documents print both for exactly this reason. Second, anything that lowers volatility without lowering expected return raises compound growth for free. Lesson 16 promised such a thing exists; the next lesson shows the mechanism - correlation - and the portfolio laboratory computes it live.

## The terms

Volatility is the standard deviation of an investment's returns, usually annualized. The arithmetic average return is the simple mean of yearly returns; the compound (geometric) growth rate is the constant rate that produces the same end value. Volatility drag is the gap between them, growing with the square of volatility.

## Worked example

10,000 euros, two years: +20 percent, then -10. Year one: 10,000 x 1.20 = 12,000. Year two: 12,000 x 0.90 = 10,800. Arithmetic average: (20 - 10) / 2 = +5 percent. Compound rate: the constant rate reaching 10,800 in two years - about 3.92 percent, since 1.0392 x 1.0392 ≈ 1.08.

The steady comparison: +5 percent twice: 10,000 x 1.05 x 1.05 = 11,025. Same average, 225 euros more - the drag, in cash, after just two mild years. Stretch to lesson 19's thirty years and the same-average gap compounds into thousands: steadiness is not a comfort feature, it is yield.

## Connections

Volatility quantifies lesson 17's spread, explains why lesson 16's smoothing is worth money and not just sleep, and gives lesson 30's portfolio lab its risk column. The premium logic still stands: equity volatility is what the equity premium pays for. Next lesson: correlation, the lever that removes volatility without removing return.

## Common misconceptions

"Average return tells you how an investment did." Only with its volatility beside it; the compound path is what your account follows. "Volatility is just a feeling of discomfort." It is a computable drag on growth - the square law makes big swings expensive in euros, not only in sleep. "Low volatility means low returns, always." Across single assets the premium link mostly holds; across portfolios, the next lesson's free lunch breaks it - same return, less swing."
