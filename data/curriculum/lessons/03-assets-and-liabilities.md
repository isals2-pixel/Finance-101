---
lesson: 3
slug: assets-and-liabilities
title: Assets and liabilities
oneSentence: >
  An asset is something you own that has value; a liability is money you owe;
  what an object does to your wealth depends on which sides of it dominate
  over time.
level: 1
prerequisites: [money]
concepts: [assets, liabilities]
visual:
  id: assets-liabilities
  kind: diagram
  requirement: reinforcement
  caption: >
    The two columns of a personal balance sheet, and the direction each side
    tends to move on its own.
prediction:
  prompt: >
    You buy an 18,000 euro car with a 15,000 euro loan. Is the car an asset,
    a liability, or something else? One sentence.
  modelAnswer: >
    Both sides appear at once: the car is an 18,000 euro asset, and the loan
    is a separate 15,000 euro liability. The car will lose value while the
    loan charges interest, so the combined position erodes unless the loan is
    paid down faster than the car depreciates.
retrieval:
  - id: q1
    conceptId: assets
    type: freeRecall
    prompt: >
      Define asset and liability, give two examples of each, and explain why
      the same purchase can create both at once.
    modelAnswer: >
      An asset is something you own with value: savings, a flat, investments,
      a car. A liability is money you owe: a mortgage, a consumer loan, a
      credit card balance. A financed purchase creates both, because you gain
      the object (asset) and the debt used to pay for it (liability); the two
      then move independently.
    rubricNote: >
      A 5 has both definitions, examples, and the financed-purchase mechanism.
      A 3 defines both without the mechanism.
    askConfidence: false
  - id: q2
    conceptId: liabilities
    type: classification
    prompt: Asset or liability?
    items:
      - text: The remaining balance on your mortgage.
        options: [asset, liability]
        answer: liability
        errorMap:
          asset: terminology-confusion
      - text: 6,000 euros in a savings account.
        options: [asset, liability]
        answer: asset
        errorMap:
          liability: terminology-confusion
      - text: A flat you own and live in.
        options: [asset, liability]
        answer: asset
        errorMap:
          liability: misconception
  - id: q3
    conceptId: assets
    type: shortAnswer
    prompt: >
      Why can borrowing to buy one thing build wealth while borrowing to buy
      another destroys it? Name the two forces at work.
    modelAnswer: >
      Every financed purchase pits the asset's value change against the
      loan's interest cost. Borrowing for something that holds or grows its
      value (a flat, an education that raises income) can come out ahead;
      borrowing for something that depreciates fast (a new car, consumption)
      loses on both sides: the asset shrinks while interest accrues.
    rubricNote: >
      A 5 names both forces (value change vs interest cost) and gives a
      contrasting pair. A 3 says "good debt vs bad debt" without the forces.
    askConfidence: true
exercise:
  id: ex1
  conceptId: liabilities
  type: calculation
  prompt: >
    You own: 12,000 euros in savings and a car worth 9,000 euros. You owe: a
    4,500 euro student loan balance and a 1,200 euro credit card balance.
    What is the total of your liabilities in euros?
  answer: 5700
  tolerance: 0
  explanation: >
    Liabilities are what you owe: 4,500 + 1,200 = 5,700 euros. The savings
    and the car are assets and do not enter the liability total.
sources:
  - title: "Actifs (patrimoine) - définition"
    publisher: INSEE
    url: https://www.insee.fr/fr/metadonnees/definition/c2243
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Patrimoine net - définition"
    publisher: INSEE
    url: https://www.insee.fr/fr/metadonnees/definition/c2248
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definitions with the financed-purchase mechanism (self-score 4+ on q1), all
  classifications correct, the two-forces explanation (self-score 4+ on q3),
  and the liability total correct.
---

# Lesson 3 - Assets and liabilities

One sentence to hold on to: an asset is something you own that has value; a liability is money you owe; what an object does to your wealth depends on which sides of it dominate over time.

## The problem

You buy an 18,000 euro car, paying 3,000 in cash and borrowing 15,000. Ask a friend whether the car is an asset or a liability and you will get both answers with confidence. Both are half right, and the half they miss is where money is lost.

## The idea

An asset is anything you own that has value: money in accounts, a flat, investments, a vehicle, anything that could be sold for euros. A liability is money you owe: a mortgage balance, a consumer loan, a credit card balance. This is the vocabulary INSEE uses for household wealth, and it is the vocabulary of every balance sheet you will meet later in this course.

A financed purchase creates one of each, simultaneously and separately. The car is an 18,000 euro asset. The loan is a 15,000 euro liability. They are not one thing: from the day of purchase they move independently, and in opposite directions.

Assets have a direction of their own. Some tend to appreciate - gain value - like a well-located flat or a diversified investment. Some depreciate - lose value - like cars and most consumer goods. Some just sit, like cash, which holds its number while inflation quietly works on it (lesson 7).

Liabilities also have a direction: they cost interest. Every month a loan exists, it adds a charge on top of the amount borrowed. So a financed purchase is a race between two forces: how fast the asset's value moves versus how much the debt costs. Borrowing 180,000 for a flat that holds its value can leave you ahead; borrowing 15,000 for a car that loses 40 percent in three years loses on both sides at once.

That is the honest version of "good debt versus bad debt": the labels belong to the arithmetic, not to the object.

## The terms

An asset is something owned that has monetary value. A liability is an amount owed to someone else. Appreciation is an increase in an asset's value; depreciation is a decrease. The principal is the amount of a loan still owed, excluding future interest.

## Worked example

The car, in euros, over three years. Day one: asset 18,000, liability 15,000. Your stake in the position: 18,000 - 15,000 = 3,000.

Three years later the car has lost 40 percent: 18,000 x 0.40 = 7,200 of value gone, so it is worth 18,000 - 7,200 = 10,800. You have paid the loan down to 6,000. Your stake now: 10,800 - 6,000 = 4,800. It grew by 1,800 - but you paid roughly 9,000 of principal plus around 1,400 of interest to get there. Money in: about 10,400. Stake gained: 1,800. The rest - roughly 8,600 - is depreciation and interest, the two forces working against you.

Compare a 250,000 flat with a 180,000 mortgage: stake 70,000, and if the flat merely holds its value, every repayment converts into stake instead of evaporating.

## Connections

Assets and liabilities are the stock counterpart of lesson 2's flows: cash flow is the film, this is the photograph. The next lesson subtracts one column from the other to get the single number that tracks wealth: net worth. Later in the course, stocks and bonds join the asset column, and the same value-versus-interest race explains most financing decisions.

## Common misconceptions

"Everything you buy is an asset." Consumption is not: what cannot be resold for meaningful value never enters the column. "All debt is bad." Debt is a cost; whether the position wins depends on what the borrowed money bought and how its value moves against the interest. "Your home doesn't count because it pays no income." It counts fully as an asset; paying no income is a different property than having no value.
