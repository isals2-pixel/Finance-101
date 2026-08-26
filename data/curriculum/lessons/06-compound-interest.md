---
lesson: 6
slug: compound-interest
title: Compound interest
oneSentence: >
  Compounding means interest earns interest, so money grows exponentially
  with time - which makes time invested the most powerful variable you
  control.
level: 1
prerequisites: [interest]
concepts: [compounding]
visual:
  id: compound-curve
  kind: chart
  requirement: required
  caption: >
    10,000 euros at 5 percent over 30 years: simple interest grows in a
    straight line to 25,000; compounding curves away to 43,219.
prediction:
  prompt: >
    Twin A invests 200 euros a month from age 25 to 35, then stops and lets it
    sit. Twin B invests 200 euros a month from 35 to 65. Same return for
    both. Who has more at 65? One sentence with your reasoning.
  modelAnswer: >
    Twin A typically ends ahead or very close, despite contributing for 10
    years against B's 30, because A's contributions compound for up to 40
    years. Early money has the most time to double, and time is the dominant
    variable in compounding.
retrieval:
  - id: q1
    conceptId: compounding
    type: freeRecall
    prompt: >
      Explain the difference between simple and compound interest, and why
      compound growth accelerates over time.
    modelAnswer: >
      Simple interest is computed every year on the original principal only,
      so the annual charge never changes. Compound interest adds each year's
      interest to the principal, so the next year's interest is computed on a
      larger base. Because the base grows every period, the annual gain
      itself grows - the curve accelerates instead of rising in a straight
      line.
    rubricNote: >
      A 5 states both definitions and the growing-base mechanism. A 3 says
      "interest on interest" without explaining the acceleration.
    askConfidence: false
  - id: q2
    conceptId: compounding
    type: classification
    prompt: For each factor, which change helps compound growth more over a lifetime?
    items:
      - text: Starting 10 years earlier vs adding 1 percent to the return.
        options: [starting earlier, the extra 1 percent, identical effect]
        answer: starting earlier
        errorMap:
          the extra 1 percent: misconception
          identical effect: causal-reasoning-error
      - text: Reinvesting the interest vs withdrawing it each year.
        options: [reinvesting, withdrawing, identical effect]
        answer: reinvesting
        errorMap:
          withdrawing: factual-misunderstanding
          identical effect: causal-reasoning-error
  - id: q3
    conceptId: compounding
    type: shortAnswer
    prompt: >
      Compounding also works against you. Where, in ordinary financial life,
      and through what mechanism?
    modelAnswer: >
      In debt that is not paid off - revolving credit and credit card
      balances. Unpaid interest is added to what you owe, so the next month's
      interest is charged on a larger balance: the same growing-base
      mechanism, running against you, and at card rates it runs fast.
    rubricNote: >
      A 5 names revolving/card debt and states the growing-base mechanism in
      reverse. A 3 names debt without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: compounding
  type: calculation
  prompt: >
    1,000 euros at 10 percent annual compound interest. What is the balance,
    in euros, after 2 years? (Year 1: balance times 1.10; year 2: that result
    times 1.10.)
  answer: 1210
  tolerance: 0
  explanation: >
    Year 1: 1,000 x 1.10 = 1,100. Year 2: 1,100 x 1.10 = 1,210 euros. Simple
    interest would give 1,200; the extra 10 euros is year 1's interest
    earning interest.
sources:
  - title: "What are interest rates and what is the difference between nominal and real interest rates?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/interest_rates.en.html
    publishedAt: "2016"
    verifiedAt: "2026-08-26"
  - title: "Mes questions d'argent - portail national d'éducation budgétaire et financière"
    publisher: Banque de France
    url: https://www.mesquestionsdargent.fr/educfi
    publishedAt: "2017"
    verifiedAt: "2026-08-26"
masteryCriteria: >
  The growing-base mechanism explained (self-score 4+ on q1), both factor
  comparisons correct, the debt-side answer (self-score 4+ on q3), and the
  two-year calculation correct.
---

# Lesson 6 - Compound interest

One sentence to hold on to: compounding means interest earns interest, so money grows exponentially with time - which makes time invested the most powerful variable you control.

## The problem

Place 10,000 euros at 5 percent for 30 years. With last lesson's simple interest you can compute it: 500 a year, 15,000 of interest, 25,000 total. The actual answer, if interest is reinvested, is 43,219 euros. Where do the extra 18,219 come from?

## The idea

Under simple interest, each year's charge is computed on the original principal, so the gain is identical every year and the total grows in a straight line. Compounding changes one rule: each year's interest is added to the principal, and next year's interest is computed on the new, larger base.

That one rule changes the shape of growth. The annual gain is no longer constant - it grows every year, because the base grows every year. Year one on 1,000 euros at 5 percent earns 50; year ten earns interest on everything the first nine years built. Growth that feeds on its own results is exponential, and exponential curves start deceptively flat before bending steeply upward.

The bend is why time dominates. In the early years, compound and simple interest are barely distinguishable - after 3 years the difference on 1,000 euros is under 8 euros - and many people conclude compounding is overrated. The gap explodes late: most of the 43,219 above arrives in the final decade. Start ten years earlier and you do not add a decade of average growth; you add the steepest decade of the curve.

A useful shortcut: the rule of 72. Divide 72 by the annual rate to estimate the years needed to double. At 5 percent: 72 / 5 ≈ 14 years. Thirty years is about two doublings: 10,000 to 20,000 to 40,000 - close to the true 43,219.

The rule has no loyalty. A credit card balance compounds by the same mechanism: unpaid interest joins the debt and starts charging interest itself, at rates several times anything savings pay.

## The terms

Compound interest is interest computed on the principal plus all previously accumulated interest. Compounding is that reinvestment process. Exponential growth is growth proportional to current size. The rule of 72 estimates doubling time as 72 divided by the annual percentage rate.

## Worked example

1,000 euros at 5 percent, compounded annually. Year 1: interest 1,000 x 0.05 = 50; balance 1,050. Year 2: interest 1,050 x 0.05 = 52.50; balance 1,102.50. Year 3: interest 1,102.50 x 0.05 = 55.13; balance 1,157.63. Simple interest after 3 years: 1,000 + 3 x 50 = 1,150. Difference so far: 7.63 euros - trivial.

Now stretch the time. 10,000 at 5 percent for 30 years: multiply by 1.05 thirty times, which is 10,000 x 1.05^30 = 10,000 x 4.3219 = 43,219 euros. Simple interest: 10,000 + 30 x 500 = 25,000. The 18,219 euro gap is entirely interest earned by interest - and it took decades to appear.

## Connections

Compounding is lesson 5's interest applied to a growing base. It is the engine of long-term investing: the reason this course keeps repeating "start early, stay invested". It also powers the enemy: inflation, next lesson, compounds against your cash by exactly the same arithmetic.

## Common misconceptions

"Compounding makes money fast." The opposite: it is weak early and overwhelming late; impatience is how people miss it. "The return matters more than the time." Both matter, but you control time directly, and the steepest gains come from the years you add at the start. "Compounding only concerns savings." Any growing base compounds: debts, prices, and portfolios alike.
