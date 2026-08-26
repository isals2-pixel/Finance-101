---
lesson: 47
slug: financial-foundation
title: "The base: emergency fund, debt, insurance"
oneSentence: >
  Before any portfolio comes the base - an emergency reserve of several
  months' expenses, expensive debt repaid first as a guaranteed return,
  and insurance against the catastrophes no reserve could absorb.
level: 12
prerequisites: [net-worth, cash-flow]
concepts: [financial-foundation]
visual:
  id: foundation-pyramid
  kind: diagram
  requirement: required
  caption: >
    The order of operations: emergency reserve and insurance at the base,
    expensive debt cleared next, long-horizon investing only on top.
prediction:
  prompt: >
    A saver with no reserve puts every spare euro into their portfolio
    "to maximize returns". Eight months in, the car dies during a market
    dip. Trace what happens to their long-term plan.
  modelAnswer: >
    They must sell portfolio holdings at dip prices - the forced sale
    that converts a temporary decline into a permanent loss. The missing
    reserve silently changed the portfolio's horizon from decades to
    "whenever the next surprise lands", which is exactly the money
    lesson 43 said must never take equity risk.
retrieval:
  - id: q1
    conceptId: financial-foundation
    type: freeRecall
    prompt: >
      State the order of operations this lesson teaches and the reasoning
      for each step's position.
    modelAnswer: >
      First an emergency reserve of roughly three to six months of
      essential expenses in instantly available savings - it protects the
      portfolio from forced sales and life from small catastrophes.
      Alongside it, insurance for risks too large for any reserve -
      liability, health, disability. Second, repay expensive debt:
      clearing an 18 percent credit costs nothing and "returns" 18
      percent risk-free, beating any honest market expectation. Only
      then long-horizon investing - money that can stay put.
    rubricNote: >
      A 5 has all three steps with each rationale. A 3 lists steps
      without the forced-sale or guaranteed-return logic.
    askConfidence: false
  - id: q2
    conceptId: financial-foundation
    type: classification
    prompt: What should the money do first?
    items:
      - text: 3,000 euros spare; a revolving credit balance charges 18 percent; the market "should do 6".
        options: [repay the credit, invest]
        answer: repay the credit
        errorMap:
          invest: calculation-error
      - text: 3,000 euros spare; no reserve exists; a 1.2 percent mortgage runs its course.
        options: [build the reserve, repay the mortgage faster]
        answer: build the reserve
        errorMap:
          repay the mortgage faster: misconception
      - text: A freelancer with irregular income sizing their reserve, versus a tenured civil servant.
        options: [the freelancer needs a larger reserve, both need the same months]
        answer: the freelancer needs a larger reserve
        errorMap:
          both need the same months: overgeneralisation
  - id: q3
    conceptId: financial-foundation
    type: shortAnswer
    prompt: >
      Explain why repaying an 18 percent debt is described as "a
      guaranteed 18 percent return", and why insurance belongs at the
      base rather than being replaced by a bigger reserve.
    modelAnswer: >
      Every euro of 18 percent debt repaid stops 18 cents of yearly
      interest with certainty - an after-tax, risk-free 18 percent that
      no portfolio can honestly promise; carrying such debt while
      investing is borrowing at 18 to earn a hoped-for 6. Insurance
      covers the tail beyond any reserve: a liability claim or lost
      earning capacity can cost decades of expenses. Reserves absorb the
      absorbable; insurance transfers the unabsorbable; confusing the
      two leaves ruin exposed.
    rubricNote: >
      A 5 has the certainty argument and the tail-risk argument. A 3 has
      one of the two.
    askConfidence: true
exercise:
  id: ex1
  conceptId: financial-foundation
  type: calculation
  prompt: >
    Essential monthly expenses are 2,200 euros and the chosen reserve is
    four months. How many euros should the emergency fund hold?
  answer: 8800
  tolerance: 0
  explanation: >
    2,200 x 4 = 8,800 euros, kept in instantly available savings (in
    France typically Livret A / LDDS - tax-free, State-set rate). Its
    return is not the point; its availability is what keeps the
    portfolio's horizon honest.
sources:
  - title: "Mes questions d'argent - public financial education portal"
    publisher: Banque de France
    url: https://www.mesquestionsdargent.fr
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Tout savoir sur les produits d'épargne"
    publisher: Ministère de l'Économie
    url: https://www.economie.gouv.fr/particuliers/gerer-mon-argent/gerer-mon-budget-et-mon-epargne/tout-savoir-sur-les-produits-depargne
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  The three-step order with rationales (self-score 4+ on q1), all
  classifications correct, both q3 arguments (self-score 4+), and the
  reserve calculation correct.
---

# Lesson 47 - The base: emergency fund, debt, insurance

One sentence to hold on to: before any portfolio comes the base - an emergency reserve of several months' expenses, expensive debt repaid first as a guaranteed return, and insurance against the catastrophes no reserve could absorb.

## The problem

Lesson 43 carved liquidity out before allocating a single euro, and promised Level 12 would size it. Here is why the carving is not optional: the most common way private portfolios fail is not bad funds but good funds sold at bad moments for non-market reasons - a car, a job, a roof. The base exists so that life's surprises never reach the portfolio.

## The idea

The emergency reserve is three to six months of essential expenses - rent, food, insurance, transport, not lifestyle - in savings available within a day. In France its natural home is the regulated livrets: Livret A (ceiling 22,950 euros) and LDDS (12,000), tax-free with a State-set rate - 1.7 percent since August 2026 - and the LEP at 2.5 percent for eligible incomes. The rate is beside the point: lesson 19 already conceded that short-horizon money accepts inflation's nibble as the price of certainty. Size it to your fragility - stable salaried income sits nearer three months, freelance or single-income households nearer six or more.

Debt is ranked by rate against an honest market expectation. Revolving credit at 15-20 percent: repaying it is a guaranteed, tax-free return no portfolio can match - clearing it is the best investment available, full stop. Consumer credit in the middle single digits: usually still first. A low-rate mortgage: arithmetic often favours investing alongside it, and either choice is defensible - the mistake is only ever the inversion, investing hopefully at 6 while paying certainly at 18.

Insurance completes the base by covering what no reserve can: civil liability, health, home, and - most underrated - disability and death cover for anyone with dependants, where the loss is decades of income. The dividing rule is lesson 17's spread: small, absorbable risks are self-insured by the reserve (skip the gadget warranty); unaffordable tail risks are transferred, whatever the premium's annoyance. Insurance is bought against ruin, not against inconvenience.

## The terms

An emergency reserve is instantly available savings covering months of essential expenses. Regulated livrets are French tax-free savings accounts with State-set rates and ceilings. Guaranteed return of debt repayment: the interest rate a repaid euro stops paying, with certainty. Insurable risk: a loss too large for any reasonable reserve, transferred by contract.

## Worked example

Essential expenses 2,200 euros a month, freelance income: reserve target 4-6 months; at four, 8,800 euros into Livret A. Spare cash beyond it: a 2,400 euro credit balance at 17 percent goes first - repaying it "earns" about 408 euros a year with certainty, against a hoped-for 144 (6 percent) in the market: the comparison is not close. Liability and health insurance verified, disability cover added - the premium is small against decades of protected income. Only what remains flows to lesson 43's portfolio, which can now genuinely promise its money a decade of patience.

## Connections

The base is what makes lesson 19's "long horizon" true rather than aspirational, and lesson 43's construction order lives on it. Lesson 42's sequence-risk defence is the same principle at the other end of life. Next: the retirement gap - what the French pension system will and won't replace, and the compounding start that closes it.

## Common misconceptions

"Invest every spare euro immediately." The first surprise then sells your portfolio for you, at the market's convenience. "All debt before any investing." Rate against expectation: 18 percent debt, always first; a 1.2 percent mortgage, arithmetic's choice either way. "A big reserve replaces insurance." No reserve absorbs a liability claim or twenty lost working years; the tail is transferred or it is carried."
