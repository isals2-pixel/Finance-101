---
lesson: 1
slug: what-is-money
title: What is money?
oneSentence: >
  Money is whatever a society broadly accepts as a medium of exchange, a unit
  of account and a store of value, and it keeps its value only as long as that
  acceptance and its scarcity are maintained.
level: 1
prerequisites: []
concepts: [money]
visual:
  id: money-functions
  kind: diagram
  requirement: reinforcement
  caption: >
    The three functions of money, and why one common measuring unit collapses
    the number of prices an economy needs.
prediction:
  prompt: >
    Suppose everyone in France woke up tomorrow doubting that shops would still
    accept euros next month. Nothing official has changed. What happens to how
    well the euro works as money, and why? One or two sentences.
  modelAnswer: >
    It immediately works worse, because acceptance is self-fulfilling: people
    take euros today only because they expect others to take them tomorrow.
    Doubt makes sellers demand something else or raise prices, which confirms
    the doubt. Money runs on shared expectations, not only on rules.
retrieval:
  - id: q1
    conceptId: money
    type: freeRecall
    prompt: >
      Name the three functions of money and explain each in your own words,
      with one everyday example per function.
    modelAnswer: >
      Medium of exchange: what you hand over in trades, so you never need to
      find someone who wants exactly what you have (paying the baker in euros,
      not in hours of work). Unit of account: the common measuring stick, so
      everything has one price (a laptop is 900 euros). Store of value: money
      carries purchasing power into the future (keeping 2,000 euros for next
      year), though inflation erodes it.
    rubricNote: >
      A 5 names all three, explains the problem each solves, and gives an
      example for each. A 3 defines them without examples or without the
      problem each solves.
    askConfidence: false
  - id: q2
    conceptId: money
    type: classification
    prompt: Which function of money does each situation illustrate?
    items:
      - text: You compare two job offers by their salary in euros.
        options: [medium of exchange, unit of account, store of value]
        answer: unit of account
        errorMap:
          medium of exchange: terminology-confusion
          store of value: terminology-confusion
      - text: You pay this month's rent by bank transfer.
        options: [medium of exchange, unit of account, store of value]
        answer: medium of exchange
        errorMap:
          unit of account: terminology-confusion
          store of value: terminology-confusion
      - text: You keep 3,000 euros aside to spend on a course next year.
        options: [medium of exchange, unit of account, store of value]
        answer: store of value
        errorMap:
          medium of exchange: terminology-confusion
          unit of account: terminology-confusion
  - id: q3
    conceptId: money
    type: shortAnswer
    prompt: >
      A 50 euro note costs a few cents to produce and is worthless as paper.
      Why does a baker hand over real bread for it?
    modelAnswer: >
      Because its value comes from shared acceptance and managed scarcity, not
      the paper. The baker takes it because everyone she deals with will take
      it too, at a stable value - backed by legal-tender status and by the
      central bank keeping euros scarce enough that prices stay roughly
      stable. That is what fiat money means.
    rubricNote: >
      A 5 explains acceptance as self-fulfilling AND names managed scarcity or
      the central bank. A 3 says "everyone accepts it" without what sustains
      the acceptance.
    askConfidence: true
exercise:
  id: ex1
  conceptId: money
  type: calculation
  prompt: >
    A barter economy trades 12 distinct goods with no money. Every pair of
    goods needs its own exchange rate. Using the pairs formula from the worked
    example - n times (n minus 1), divided by 2 - how many exchange rates does
    it need?
  answer: 66
  tolerance: 0
  explanation: >
    12 x 11 = 132. 132 / 2 = 66 exchange rates. With money as the unit of
    account the same economy needs just 12 prices, one per good.
sources:
  - title: "What is money?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/what_is_money.en.html
    publishedAt: "2015-11-24"
    verifiedAt: "2026-08-21"
  - title: "Monnaie : de quoi parle-t-on ? (ABC de l'économie)"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/monnaie-de-quoi-parle-t
    publishedAt: "2023-06-08"
    verifiedAt: "2026-08-21"
masteryCriteria: >
  Unprompted recall of all three functions with correct causal explanations
  (self-score 4 or higher on q1), all three classifications correct, the fiat
  value question explained through acceptance plus scarcity (self-score 4 or
  higher on q3), and the pairs calculation correct.
---

# Lesson 1 - What is money?

One sentence to hold on to: money is whatever a society broadly accepts as a medium of exchange, a unit of account and a store of value, and it keeps its value only as long as that acceptance and its scarcity are maintained.

## The problem

A 50 euro note costs a few cents to print and is useless as paper. Yet a baker hands you real bread for it, while an equally well-printed piece of paper gets you nothing. Whatever makes the first one money is not in the paper. So where is it?

## The idea

Without money, trade is barter, and barter has a built-in blocker: the double coincidence of wants. You, the baker, need shoes - but the deal only happens if the shoemaker wants bread, right now, in the right amount. Usually he does not, so you spend your day hunting for trading partners instead of baking.

Now let everyone agree to accept one thing - silver, shells, printed notes - in every trade. You sell bread to anyone and take that thing; you hand it to any shoemaker, whether or not he cares about bread. The search problem disappears. That thing is a medium of exchange: money's first and defining job.

Two more jobs follow. Once one thing is used in every trade, all prices get quoted in it, so every good has one price instead of a tangle of barter ratios. Money becomes the measuring stick of value: the unit of account. And because others will still accept it next month, you can earn now and spend later. Money carries purchasing power through time: a store of value. Not a perfect one - when prices rise, the same notes buy less.

That leaves the baker's puzzle. The euro is fiat money: not backed by gold, not redeemable for anything but other euros. Its value stands on two supports. First, shared acceptance, which is self-fulfilling: the baker takes euros because everyone she deals with - suppliers, landlord, the tax office - takes them too, and the law reinforces this by making the euro legal tender. Second, managed scarcity: the European Central Bank controls how many euros exist so they stay scarce relative to the goods they buy. Remove either support and the paper loses its grip. Hyperinflation is scarcity failing; a population abandoning its currency is acceptance failing.

## The terms

Money is any asset generally accepted as payment for goods, services and debts. A medium of exchange is the thing handed over in trades. A unit of account is the common unit in which prices are quoted. A store of value carries purchasing power into the future. Fiat money gets its value from acceptance and legal status, not from the material it is made of. Legal tender is money that law recognises as valid payment.

## Worked example

How much does the unit-of-account job save? Take a barter market with four goods: bread, fish, cloth, firewood. Every pair needs its own exchange rate. Count them: bread pairs with fish, cloth and firewood - three. Fish still needs cloth and firewood - two more. Cloth still needs firewood - one more. Six rates.

The general formula: with n goods there are n times (n minus 1), divided by 2, pairs. Check it: 4 x 3 = 12, and 12 / 2 = 6. Now scale to 100 goods: 100 x 99 = 9,900, and 9,900 / 2 = 4,950 exchange rates to keep track of. Price everything in euros instead, and 100 goods need exactly 100 prices. From 4,950 numbers to 100: a 98 percent collapse in what the market must know. That is why a common unit keeps emerging - even in prisons, where cigarettes have taken over all three jobs.

## Connections

This is the first lesson, so the connections point forward. Income and expenses, next lesson, are money flows measured with the unit-of-account job. Net worth needs everything valued in one unit. And because the store-of-value job is imperfect, the inflation lesson measures exactly how imperfect - which is the reason investing exists: choosing better stores of value than the notes themselves.

## Common misconceptions

"The euro is backed by gold." It is not, and never was; no major currency today is redeemable in gold. Its value rests on acceptance, legal-tender status and managed scarcity. "Money and wealth are the same." Wealth is everything you own with value; money is one form of it, and the form inflation erodes. "Holding cash is risk-free." Cash is certain only in its number, not in what that number will buy.
