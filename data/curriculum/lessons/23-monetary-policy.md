---
lesson: 23
slug: monetary-policy
title: Monetary policy
oneSentence: >
  The central bank steers inflation by setting the interest rate banks pay,
  which propagates into every loan and savings rate and, with long lags,
  into spending and prices.
level: 2
prerequisites: [interest, inflation]
concepts: [monetary-policy]
visual:
  id: policy-transmission
  kind: flow
  requirement: required
  caption: >
    The transmission chain: policy rate to bank rates to borrowing and
    spending to demand to inflation - each arrow with a lag.
prediction:
  prompt: >
    Inflation runs well above 2 percent. Predict what the ECB does to its
    policy rate, and trace one path by which that decision eventually slows
    price rises.
  modelAnswer: >
    It raises the rate. Banks' funding costs rise, so loan rates rise;
    credit-financed spending - housing, investment - falls; weaker demand
    meets the same supply, and price rises slow. The chain works through
    demand, and each link takes months.
retrieval:
  - id: q1
    conceptId: monetary-policy
    type: freeRecall
    prompt: >
      Explain what monetary policy is, who conducts it in the euro area,
      and the transmission chain from the policy rate to inflation.
    modelAnswer: >
      Monetary policy is the management of interest rates (and money
      conditions) to keep prices stable - in the euro area, the ECB with the
      national central banks, targeting 2 percent inflation. Its policy
      rates set what banks pay to borrow or earn to deposit at the central
      bank; banks pass this into loan and savings rates; costlier credit
      cools borrowing, investment and consumption; softer demand slows price
      rises. Cuts run the same chain toward stimulation. Every link lags.
    rubricNote: >
      A 5 names the actor, the target, and the full chain with lags. A 3
      says "the ECB sets rates against inflation" without the chain.
    askConfidence: false
  - id: q2
    conceptId: monetary-policy
    type: classification
    prompt: The ECB raises its policy rate sharply. What happens, with a lag, to each?
    items:
      - text: The rate on new mortgages.
        options: [rises, falls, unaffected]
        answer: rises
        errorMap:
          falls: causal-reasoning-error
          unaffected: factual-misunderstanding
      - text: The price of existing fixed-coupon bonds (lesson 13).
        options: [rises, falls, unaffected]
        answer: falls
        errorMap:
          rises: misconception
          unaffected: factual-misunderstanding
      - text: Credit-financed demand in the economy.
        options: [rises, falls, unaffected]
        answer: falls
        errorMap:
          rises: causal-reasoning-error
          unaffected: factual-misunderstanding
  - id: q3
    conceptId: monetary-policy
    type: shortAnswer
    prompt: >
      Why do central banks act on forecasts rather than waiting until
      inflation is visibly back at target?
    modelAnswer: >
      Because transmission lags by quarters to years: a rate set today
      reaches prices long after. Waiting for confirmation means steering by
      where the economy was, guaranteeing overshoot in both directions -
      like braking only after the bend. Acting early on expected inflation
      is the only way a lagged instrument can hit a moving target.
    rubricNote: >
      A 5 explains the lag and the overshoot consequence of waiting. A 3
      says "policy is slow" without the steering implication.
    askConfidence: true
exercise:
  id: ex1
  conceptId: monetary-policy
  type: calculation
  prompt: >
    A bank funds itself at the policy rate of 2 percent and adds a margin of
    1.5 points for risk and costs on mortgages. The ECB raises the policy
    rate by 1 point and the margin is unchanged. What is the new mortgage
    rate, in percent?
  answer: 4.5
  tolerance: 0
  explanation: >
    New funding cost: 2 + 1 = 3 percent. Mortgage rate: 3 + 1.5 = 4.5
    percent - the policy move passed through, margin intact. This
    pass-through is the first link of transmission.
sources:
  - title: "Les taux directeurs"
    publisher: Banque de France
    url: https://www.banque-france.fr/fr/publications-et-statistiques/publications/les-taux-directeurs
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "What is inflation?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/what_is_inflation.en.html
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Actor, target and chain with lags (self-score 4+ on q1), all three
  transmission classifications correct, the forecast-steering reasoning
  (self-score 4+ on q3), and the pass-through calculation correct.
---

# Lesson 23 - Monetary policy

One sentence to hold on to: the central bank steers inflation by setting the interest rate banks pay, which propagates into every loan and savings rate and, with long lags, into spending and prices.

## The problem

Eight times a year, a committee in Frankfurt adjusts one number by a quarter of a point - and mortgage offers in Lyon, corporate loans in Milan and savings rates in Madrid all move within weeks. No law forces them to. How does one administered rate steer a continent's prices?

## The idea

Monetary policy is the deliberate management of interest rates to keep prices stable. In the euro area it belongs to the European Central Bank with the national central banks - the Banque de France among them - and the mandate is lesson 7's number: inflation at 2 percent over the medium term.

The lever is the set of policy rates - taux directeurs: the rates at which commercial banks borrow from and deposit at the central bank. They matter because the central bank is the banks' bank: its rate is the marginal cost and floor of every bank's funding. Change it, and lesson 5's whole rate structure shifts - each market rate is roughly the policy rate plus premiums for risk and duration.

From there, transmission runs in a chain. Bank rates move: mortgages, corporate credit, savings accounts reprice. Behaviour moves: costlier credit postpones house purchases and investment projects; better-paid savings favour saving over spending. Demand moves: total spending cools. Prices move: lesson 21's mechanism - softer demand against the same supply slows price rises. Raising rates runs the chain toward restraint; cutting runs it toward stimulus. The same shift also reprices lesson 13's bonds instantly - the one fast link in a slow chain.

Slow is the operative word: each link takes months, the full chain quarters to years. Hence the discipline that surprises outsiders - central banks act on forecasts, not on confirmed outcomes. A driver who brakes only inside the bend leaves the road; a lagged instrument aimed at a moving target must be used early.

## The terms

Monetary policy is the management of interest rates and money conditions to achieve price stability. The policy rates (taux directeurs) are the central bank's lending and deposit rates for banks. Transmission is the propagation from policy rate to market rates to demand to inflation. A tightening raises rates; an easing lowers them.

## Worked example

Follow one euro of policy through a mortgage. The policy rate is 2 percent; a bank adds 1.5 points of margin for risk and costs: mortgages at 3.5 percent. Inflation runs hot, the ECB tightens by 1 point. New funding cost: 2 + 1 = 3 percent; new mortgage rate: 3 + 1.5 = 4.5 percent.

Now the borrower. A 200,000 euro loan's first-year interest: at 3.5 percent, 200,000 x 0.035 = 7,000 euros; at 4.5 percent, 200,000 x 0.045 = 9,000. The 2,000 euro difference postpones some purchases entirely - and that postponement, multiplied across millions of decisions, is precisely the demand cooling the committee intended.

## Connections

Monetary policy is lesson 5's interest rate wielded as an instrument, aimed at lesson 7's inflation, working through lesson 21's supply and demand. It moves lesson 13's bond prices mechanically and sets the "safe rate" every risk premium in lesson 17 builds on. Fiscal policy, next lesson, is the other macro lever - wielded by governments, not central banks.

## Common misconceptions

"Rate changes act immediately." Bond prices react in minutes; spending and inflation follow over quarters to years - policy today is aimed at next year's prices. "The central bank sets the rates I pay." It sets the base; banks add margins for risk, duration and cost, which is why your rates move with policy but never equal it. "Higher rates are simply bad." They are the brake against inflation - the alternative being lesson 7's erosion; savers, meanwhile, finally get paid.
