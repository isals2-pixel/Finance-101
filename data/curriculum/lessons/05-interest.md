---
lesson: 5
slug: interest
title: Interest
oneSentence: >
  Interest is the price of money over time - paid for waiting, for risk and
  for expected inflation - which is why the same bank charges borrowers more
  than it pays savers.
level: 1
prerequisites: [money]
concepts: [interest]
visual:
  id: interest-timeline
  kind: timeline
  requirement: reinforcement
  caption: >
    A 1,000 euro loan at 3 percent simple interest: the principal stays
    constant while each year adds the same 30 euro charge.
prediction:
  prompt: >
    Your bank pays 2 percent on savings and charges 6 percent on a car loan.
    Same bank, same euros. Why two different prices? One or two sentences.
  modelAnswer: >
    The bank is a middleman in money: it pays savers 2 percent to attract
    funds and charges borrowers 6 percent for the risk, cost and profit of
    lending them out. The 4-point spread covers defaults, operating costs and
    the bank's margin - the two rates price two different services.
retrieval:
  - id: q1
    conceptId: interest
    type: freeRecall
    prompt: >
      Define interest and name the three components that a lender's rate
      compensates.
    modelAnswer: >
      Interest is the price of using money over time, paid by the borrower to
      the lender. The rate compensates three things: waiting (the lender
      gives up using the money now), risk (the borrower might not repay), and
      expected inflation (the euros repaid will buy less than the euros
      lent).
    rubricNote: >
      A 5 gives the price-of-money definition and all three components. A 3
      defines it without the components.
    askConfidence: false
  - id: q2
    conceptId: interest
    type: classification
    prompt: In each situation, are you earning or paying interest?
    items:
      - text: You hold a savings account at 2 percent.
        options: [earning, paying]
        answer: earning
        errorMap:
          paying: terminology-confusion
      - text: You carry a credit card balance at 18 percent.
        options: [earning, paying]
        answer: paying
        errorMap:
          earning: terminology-confusion
      - text: You lend a friend 500 euros, repaid as 520 euros next year.
        options: [earning, paying]
        answer: earning
        errorMap:
          paying: terminology-confusion
  - id: q3
    conceptId: interest
    type: shortAnswer
    prompt: >
      Why does a riskier borrower pay a higher interest rate? Explain the
      lender's reasoning.
    modelAnswer: >
      Because some borrowers of that type will not repay. The lender prices
      expected losses into the rate: the extra points collected from the
      borrowers who do repay cover the losses from those who default. Higher
      default probability means a larger required premium - the rate is
      compensation for risk, not a judgment of one person.
    rubricNote: >
      A 5 explains pricing expected losses across many loans. A 3 says
      "riskier so more expensive" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: interest
  type: calculation
  prompt: >
    You place 2,500 euros at 4 percent simple annual interest. How much
    interest, in euros, does it earn in one year?
  answer: 100
  tolerance: 0
  explanation: >
    2,500 x 0.04 = 100 euros of interest for the year. Simple interest is
    always charged on the original principal.
sources:
  - title: "What are interest rates and what is the difference between nominal and real interest rates?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/interest_rates.en.html
    publishedAt: "2016"
    verifiedAt: "2026-08-26"
  - title: "Taux d'intérêt nominal et réel (ABC de l'économie)"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/taux-dinteret-nominal-et-reel
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with the three components (self-score 4+ on q1), all
  classifications correct, the risk-pricing explanation (self-score 4+ on
  q3), and the calculation correct.
---

# Lesson 5 - Interest

One sentence to hold on to: interest is the price of money over time - paid for waiting, for risk and for expected inflation - which is why the same bank charges borrowers more than it pays savers.

## The problem

Your bank pays you 2 percent on savings and, at the next desk, charges 6 percent on a car loan. Same institution, same euros, two prices. Neither number is arbitrary, and understanding what each one is made of unlocks most of finance.

## The idea

Money now is worth more than the same money later: whoever holds it can use it. So lending has a price. Interest is that price - what a borrower pays a lender for the use of money over time, quoted as a percentage per year of the amount lent, the principal.

The rate a lender demands compensates three things. Waiting: for the loan's duration, the lender gives up using the money. Risk: the borrower might not repay, so the rate must cover expected losses across many loans - which is why riskier borrowers pay more, and why the premium is arithmetic rather than moral judgment. Expected inflation: the euros repaid later will likely buy less than the euros lent, and the lender wants that erosion priced in. The ECB's explainer decomposes rates the same way, and its policy rates - the subject of a later lesson - set the base everything else builds on.

Everyone is on both sides of this at some point. Hold a savings account and you are the lender: the bank pays you. Take a loan and you are the borrower: you pay. The bank in the middle earns the spread - the gap between the 6 percent it collects and the 2 percent it pays - out of which come defaults, running costs and profit. Two rates, two services, one machine.

The simplest arithmetic is simple interest: the charge is the same every year, computed on the original principal only. Interest on 1,000 euros at 3 percent is 30 euros each year, every year. What happens when interest itself starts earning interest is the next lesson - and it changes everything.

## The terms

Interest is the price paid for the use of money over time. The interest rate is that price per year, as a percentage of the principal. The principal is the amount lent or borrowed. The lender (creditor) receives interest; the borrower (debtor) pays it. Simple interest is computed each period on the original principal only.

## Worked example

Lend 1,000 euros at 3 percent simple annual interest. Each year's interest: 1,000 x 0.03 = 30 euros. Over 5 years: 30 x 5 = 150 euros, so you are repaid 1,000 + 150 = 1,150.

Now borrow 10,000 euros at 6 percent for one year: interest is 10,000 x 0.06 = 600 euros. Notice the two levers: double the principal and the charge doubles; double the time and, under simple interest, the total charge doubles too. Rate, principal, time - every interest number is those three multiplied.

## Connections

Interest is the first "price of time" in this course - the mechanism that makes lesson 3's liabilities grow on their own. Its inflation component links back to money's imperfect store-of-value job from lesson 1, and the split between nominal and real rates is quantified two lessons ahead. Next lesson: what happens when each year's interest joins the principal.

## Common misconceptions

"Interest is just a bank fee." A fee is arbitrary; interest is a price with identifiable parts - time, risk, inflation - that move with market conditions. "A low rate means a cheap loan." Cost = rate x principal x time; a low rate on a large, long loan can cost far more than a high rate on a small, short one. "Savings rates and loan rates should be equal." The gap is the bank's compensation for risk and operation - remove it and there is no lender.
