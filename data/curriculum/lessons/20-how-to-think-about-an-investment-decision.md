---
lesson: 20
slug: how-to-think-about-an-investment-decision
title: How to think about an investment decision
oneSentence: >
  A sound investment decision answers five questions - goal, horizon, risk,
  cost, and the best alternative - and any pitch that skips them is asking
  you to decide on story instead of structure.
level: 10
prerequisites: [opportunity-cost, risk, fees]
concepts: [investment-decision]
visual:
  id: decision-checklist
  kind: flow
  requirement: required
  caption: >
    The five-question sequence every investment decision passes through -
    and the order matters: the goal comes before the product.
prediction:
  prompt: >
    A friend is excited: "this fund returned 40 percent last year - I'm
    buying". Which of the questions that actually decide an investment has
    the friend answered? Which has he skipped?
  modelAnswer: >
    He has answered none of them. Last year's return answers no question
    about his goal, horizon, the risk that produced the 40 percent, the
    fees, or the alternatives. Past performance is the one prominent number
    that carries almost no decision information - the pitch replaced the
    framework with a story.
retrieval:
  - id: q1
    conceptId: investment-decision
    type: freeRecall
    prompt: >
      List the five questions of the decision framework, in order, and state
      why the goal comes first.
    modelAnswer: >
      One: what is the goal - what future purchase or need is this money
      for? Two: what is the horizon - when is it needed? Three: what risk
      fits - what fluctuation and worst case can the goal and I tolerate?
      Four: what does it cost - fees, taxes, spreads? Five: what is the best
      alternative - does anything deliver the same for less risk or cost?
      The goal comes first because every later answer is measured against
      it: without a goal, no risk level, horizon, or product can be right or
      wrong.
    rubricNote: >
      A 5 lists all five in a sensible order with the goal-first rationale.
      A 3 lists most questions without the rationale.
    askConfidence: false
  - id: q2
    conceptId: investment-decision
    type: classification
    prompt: Which framework question does each concern belong to?
    items:
      - text: '"I need this money in three years for a flat deposit."'
        options: [goal and horizon, risk, cost, alternative]
        answer: goal and horizon
        errorMap:
          risk: terminology-confusion
          cost: terminology-confusion
          alternative: terminology-confusion
      - text: '"This fund charges 1.9 percent while an identical index fund charges 0.2."'
        options: [goal and horizon, risk, cost, alternative]
        answer: cost
        errorMap:
          goal and horizon: terminology-confusion
          risk: terminology-confusion
          alternative: terminology-confusion
      - text: '"Could I lose 40 percent of this at the worst moment, and could I bear it?"'
        options: [goal and horizon, risk, cost, alternative]
        answer: risk
        errorMap:
          goal and horizon: terminology-confusion
          cost: terminology-confusion
          alternative: terminology-confusion
  - id: q3
    conceptId: investment-decision
    type: shortAnswer
    prompt: >
      Why is "it returned 40 percent last year" almost no evidence for the
      decision, and what number-shaped questions should replace it?
    modelAnswer: >
      One year of return is mostly noise: it does not distinguish skill from
      luck, says nothing about the risk taken to get it, and does not
      predict the next year. The decision-relevant replacements: what does
      it hold and how diversified is that, what does it cost annually, what
      is its worst historical drawdown, and does a cheaper vehicle deliver
      the same exposure - questions about structure, which persists, rather
      than performance, which may not.
    rubricNote: >
      A 5 explains noise/no-prediction and lists structural replacement
      questions. A 3 says "past performance doesn't predict" without
      replacements.
    askConfidence: true
exercise:
  id: ex1
  conceptId: investment-decision
  type: calculation
  prompt: >
    Two funds track the same index. Fund A: TER 0.20 percent. Fund B: TER
    1.40 percent. On a 50,000 euro investment, how many euros of fees does
    choosing A save in the first year alone?
  answer: 600
  tolerance: 0
  explanation: >
    Fee gap: 1.40 - 0.20 = 1.20 points, so 50,000 x 0.012 = 600 euros in
    year one - before compounding multiplies the gap in every later year
    (lesson 18).
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  All five questions with the goal-first rationale (self-score 4+ on q1),
  all classifications correct, the past-performance critique with
  replacements (self-score 4+ on q3), and the fee-gap calculation correct.
---

# Lesson 20 - How to think about an investment decision

One sentence to hold on to: a sound investment decision answers five questions - goal, horizon, risk, cost, and the best alternative - and any pitch that skips them is asking you to decide on story instead of structure.

## The problem

A friend, glowing: "This fund made 40 percent last year. I'm putting my savings in on Monday." One number, one story, one decision. Nineteen lessons in, you now own every tool needed to see what is wrong here - not with the fund, which may be fine, but with the way the decision is being made.

## The idea

Sound investment decisions run through five questions, in order.

What is the goal? Money is for future purchases (lesson 8): a flat deposit, retirement income, a buffer. The goal defines everything downstream - which is why it must come before any product does. A decision without a goal cannot be evaluated, only rationalised.

What is the horizon? When is the money needed? Lesson 19 showed horizon transforming risk: decades absorb fluctuation, three years do not. Short-horizon money belongs in stable instruments regardless of how attractive anything else looks; long-horizon money can carry the market's spread and collect its premium.

What risk fits? Two sub-questions from lesson 17: what fluctuation can the goal survive (capacity), and what can you hold through without panic-selling (tolerance)? The binding constraint is the lower one - a portfolio you abandon in the first crash has the risk profile of the abandonment, not of the plan.

What does it cost? Fees, taxes, trading spreads - the certain subtractions of lesson 18, compounding against you in every scenario. Cost is the most knowable input in the whole decision; treat it accordingly.

What is the best alternative? Lesson 9's question, last because it needs the others' answers: given this goal, horizon, risk and cost - does anything deliver the same or better for less? Same index at a lower TER; repaying 6 percent debt versus hoping for 5; the comparison, not the option in isolation, is what gets decided.

Now the friend's pitch: last year's 40 percent answers none of the five. It carries no goal, no horizon fit, conceals the risk that produced it, ignores cost, and precludes comparison. Past performance is the most prominent number in every fund advertisement and the least decision-relevant - which is precisely why regulation forces the warning that it does not predict future results.

## The terms

Risk capacity is the loss a goal can objectively absorb; risk tolerance is the fluctuation the investor can behaviourally sustain. A decision framework is a fixed question sequence applied before any commitment. Past performance is realised return - evidence about history, not about the future.

## Worked example

Apply the framework in numbers. Goal: retirement supplement, 30 years away - long horizon, high capacity. Tolerance: assumed able to hold through a 30 percent drawdown (lesson 17's test). Candidate: a world-index ETF. Cost check, two funds on the same index: TER 0.20 versus 1.40 percent. On 50,000 euros, year one: 50,000 x 0.012 = 600 euros saved by the cheap one - and lesson 18's compounding multiplies that annually for 30 years. Alternative check: a 5.5 percent consumer loan outstanding would beat investing (a guaranteed 5.5 exceeds an expected 5); with no debt, the cheap broad ETF stands. Decision: reached from structure - and the 40 percent fund never needed to be discussed.

## Connections

This lesson assembles the course so far into a procedure: goals in real terms (lesson 8), horizon and time (lesson 19), risk in both senses (lesson 17), certain costs (lesson 18), and the alternative test (lesson 9). It previews the final project: the Investment Policy Statement is this framework written down, signed in calm weather, and consulted in storms.

## Common misconceptions

"A good recent return is evidence of a good investment." One year is noise; risk-blind, cost-blind and non-predictive - structure decides, not stories. "The five questions are for large sums only." Small regular amounts compound into large sums; the framework costs minutes and scales for free. "Deciding well means predicting well." No question in the framework requires a forecast - that is what makes it usable by someone who admits, correctly, that they cannot predict markets."
