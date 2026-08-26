---
lesson: 9
slug: opportunity-cost
title: Opportunity cost
oneSentence: >
  The true cost of any choice is the best alternative you gave up - a cost
  that never appears on a statement but decides whether money is well used.
level: 1
prerequisites: [money, compounding]
concepts: [opportunity-cost]
visual:
  id: opportunity-fork
  kind: flow
  requirement: reinforcement
  caption: >
    The same 10,000 euros down two paths for ten years; the gap between the
    paths is the invisible cost of the one you chose.
prediction:
  prompt: >
    10,000 euros sit in a current account earning 0 percent. Most people say
    this costs nothing. What would an economist say it costs, and compared to
    what?
  modelAnswer: >
    It costs whatever the best realistic alternative would have earned -
    forgone interest or investment returns, plus the purchasing power
    inflation removes. The cost is measured against the next-best use of the
    money, not against zero, even though no statement will ever show it.
retrieval:
  - id: q1
    conceptId: opportunity-cost
    type: freeRecall
    prompt: >
      Define opportunity cost and explain why it never appears in any account
      statement, with one financial example.
    modelAnswer: >
      Opportunity cost is the value of the best alternative forgone when you
      choose. Statements record only what happened - flows and balances of
      the chosen path - never the counterfactual path you rejected, so the
      cost stays invisible. Example: cash at 0 percent shows no loss on
      paper, while a 3 percent alternative silently compounds away from it.
    rubricNote: >
      A 5 defines it via the best forgone alternative, explains the
      invisibility, and gives an example. A 3 defines it without the
      invisibility point.
    askConfidence: false
  - id: q2
    conceptId: opportunity-cost
    type: classification
    prompt: Which statement uses opportunity-cost reasoning correctly?
    items:
      - text: '"Keeping the money in cash was free - I paid no fees."'
        options: [correct reasoning, ignores opportunity cost]
        answer: ignores opportunity cost
        errorMap:
          correct reasoning: misconception
      - text: '"Paying off my 6 percent loan beat investing at an expected 4 percent."'
        options: [correct reasoning, ignores opportunity cost]
        answer: correct reasoning
        errorMap:
          ignores opportunity cost: causal-reasoning-error
      - text: '"I already paid for the course, so I must finish it whatever it takes."'
        options: [correct reasoning, ignores opportunity cost]
        answer: ignores opportunity cost
        errorMap:
          correct reasoning: misconception
  - id: q3
    conceptId: opportunity-cost
    type: shortAnswer
    prompt: >
      Why does the opportunity cost of holding idle cash grow with your time
      horizon? Name the mechanism.
    modelAnswer: >
      Because the forgone alternative compounds. Each year of a missed 3
      percent return is small, but the alternative path grows exponentially
      while cash stands still, so the gap widens faster the longer the
      horizon - the steep late years of the compounding curve are exactly
      the ones idle cash gives up.
    rubricNote: >
      A 5 names compounding of the forgone return and the widening gap. A 3
      says "more years, more loss" without the exponential mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: opportunity-cost
  type: calculation
  prompt: >
    You leave 5,000 euros at 0 percent for one year instead of placing it at
    4 percent. What is the opportunity cost of that year, in euros?
  answer: 200
  tolerance: 0
  explanation: >
    The forgone alternative would have paid 5,000 x 0.04 = 200 euros. That
    200 is the year's opportunity cost - real, but visible only by
    comparison.
sources:
  - title: "ABC de l'économie - ressources pédagogiques"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with the invisibility point (self-score 4+ on q1), all three
  classifications correct, the compounding mechanism (self-score 4+ on q3),
  and the calculation correct.
---

# Lesson 9 - Opportunity cost

One sentence to hold on to: the true cost of any choice is the best alternative you gave up - a cost that never appears on a statement but decides whether money is well used.

## The problem

10,000 euros have sat in your current account for ten years. No fees, no losses, the balance untouched: by every document you own, holding it cost nothing. An economist looks at the same account and sees a four-figure loss. Who is right, and where is the loss hiding?

## The idea

Every choice with money is also a rejection: the euro you spend, hold or invest one way cannot simultaneously do anything else. Opportunity cost is the value of the best alternative you gave up. It is the economist's definition of cost, and it differs from the accountant's in one crucial way: it counts paths not taken.

That is why it is invisible. Statements, receipts and account histories record the chosen path only. The rejected path exists as arithmetic, never as a document - so the largest costs in personal finance routinely go unfelt. Idle cash is the canonical case: zero fees, zero visible loss, while a realistic alternative compounds away from it year after year, and inflation (lesson 7) quietly taxes the standstill.

The concept cuts in every direction, not just toward investing. Repaying a 6 percent loan "earns" a guaranteed 6 percent, so it can dominate an uncertain 4 percent investment: the loan's rate is the opportunity cost of investing instead. Time works the same way: an hour spent on one thing is an hour the best alternative did not get.

Two disciplines follow. First, compare against the best alternative, never against zero: "it cost nothing" is almost always "I did not look". Second, ignore what is already spent: money gone regardless of your next choice - a sunk cost - has no bearing on which alternative is best now, however painful it feels to walk away.

From here on, every decision in this course is framed this way: not "is this good?" but "is this better than the best alternative?"

## The terms

Opportunity cost is the value of the best forgone alternative of a choice. The forgone return is that cost expressed as the missed rate on money. A sunk cost is money already spent that no current choice can recover - and therefore irrelevant to the choice.

## Worked example

The 10,000 euros, over ten years, down two paths. Path A, current account at 0 percent: still 10,000. Path B, a placement at 3 percent, compounding: 10,000 x 1.03^10. Compute the factor: 1.03^10 = 1.3439. So path B ends at 13,439 euros.

Opportunity cost of path A: 13,439 - 10,000 = 3,439 euros - roughly a third of the original sum, and no bank document will ever mention it. Add lesson 7: at 2 percent inflation, path A's 10,000 buys only 10,000 / 1.219 = 8,203 in today's terms, so the standstill lost purchasing power outright while forgoing the gain.

## Connections

Opportunity cost turns lesson 6's compounding into a decision rule: the growth curve you refuse is the price of the option you take. It gives lesson 7's inflation its bite - cash's opportunity cost is never zero - and it is the logic behind lesson 20's investment-decision framework: every "yes" is priced by the best "no".

## Common misconceptions

"Keeping cash costs nothing." It costs the best alternative's return plus inflation; nothing about zero fees makes that zero. "Opportunity cost is theoretical." The 3,439 euros above are as spendable as any others - only the accounting convention that ignores counterfactuals makes them feel unreal. "I've paid, so I must continue." Sunk costs are gone on every path; only the alternatives still ahead can justify continuing.
