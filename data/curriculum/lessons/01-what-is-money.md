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
audio:
  file: ""
  durationSec: 0
  generatedAt: ""
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
    accept euros next month. Nothing official has changed - no law, no
    announcement. What happens to how well the euro works as money, and why?
    Answer in one or two sentences before reading on.
  modelAnswer: >
    The euro would immediately work worse as money, even though nothing
    official changed. Acceptance is self-fulfilling: people take euros today
    because they expect others to take them tomorrow. If that expectation
    weakens, sellers start demanding something else or raising prices, which
    confirms the doubt and weakens acceptance further. Money's usefulness
    rests on shared expectations, not only on rules.
retrieval:
  - id: q1
    conceptId: money
    type: freeRecall
    prompt: >
      Name the three functions of money and explain each one in your own
      words, with one everyday example per function.
    modelAnswer: >
      Medium of exchange: money is what you hand over to get goods and
      services, so you never need to find someone who wants exactly what you
      have - paying for bread with euros instead of offering hours of your
      work to the baker. Unit of account: money is the common measuring stick
      for value, so everything has one price - a laptop is 900 euros, not
      "three months of groceries". Store of value: money lets you move
      purchasing power into the future - keeping 2,000 euros for next year
      instead of spending them now, accepting that inflation can erode what
      they will buy.
    rubricNote: >
      A 5 names all three functions correctly, explains each causally (what
      problem it solves), and gives a concrete example for each. A 3 names
      and defines them without examples or without the problem each solves.
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
      A 50 euro note costs only a few cents to produce and has almost no use
      as paper. Why does a baker hand over real bread for it?
    modelAnswer: >
      Because the note's value does not come from the paper but from shared
      acceptance and managed scarcity. The baker takes it because she is
      confident everyone she deals with - suppliers, the landlord, the tax
      office - will take it too, at a stable value. That confidence rests on
      the euro being legal tender and on the central bank keeping its supply
      scarce enough that prices stay roughly stable. Fiat money is a claim on
      the economy's goods that works as long as that trust holds.
    rubricNote: >
      A 5 explains acceptance as self-fulfilling AND names managed scarcity or
      the central bank's role, with the fiat idea stated. A 3 says "because
      everyone accepts it" without explaining what sustains the acceptance.
    askConfidence: true
exercise:
  id: ex1
  conceptId: money
  type: calculation
  prompt: >
    A barter economy trades 12 distinct goods with no money. Every pair of
    goods needs its own exchange rate (bread for fish, bread for cloth, and
    so on). How many distinct exchange rates does this economy need? Use the
    pairs formula from the worked example: n times (n minus 1), divided by 2.
  answer: 66
  tolerance: 0
  explanation: >
    With n = 12 goods, the number of pairs is 12 x 11 / 2. 12 x 11 = 132.
    132 / 2 = 66 exchange rates. With money as the unit of account the same
    economy needs just 12 prices, one per good. That collapse - 66 to 12 -
    is the practical reason a common measuring unit emerges.
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

A 50 euro note costs the central bank a few cents to print. As paper, it is nearly worthless: you cannot eat it, wear it, or build with it. Yet hand it to a baker in Lyon and she gives you real bread without hesitation. Hand her a different piece of paper, the same size, beautifully printed, and she gives you nothing. Both papers are almost identical objects. One commands real goods, the other does not. Whatever makes the first one "money" clearly is not in the paper itself. So where is it? Answering that question precisely is the foundation for everything else in this course, because saving, investing, inflation and returns are all statements about money.

## The idea

Start by imagining the world without money. You are a baker and you need shoes. Under barter, you must find a shoemaker who, at this exact moment, wants bread. Economists call this the double coincidence of wants: both sides must want precisely what the other offers, at the same time, in matching amounts. Most of the time that coincidence does not exist. You would spend your days searching for trading partners instead of baking.

Now notice what happens if everyone in town agrees to accept one particular thing - silver pieces, sea shells, printed notes - in every trade. You sell bread to anyone who is hungry and receive that thing. You take it to any shoemaker, whether or not he cares about bread. The search problem disappears. That agreed-upon thing is a medium of exchange, and this is money's first and defining job: it is the thing you trade so that you never need the double coincidence of wants.

A second job follows almost automatically. Once one thing is used in every trade, it becomes natural to quote all values in it. Instead of remembering how much bread a pair of shoes costs, and how much fish a shirt costs, and so on for every pair of goods, every good gets one price in the common unit. Money becomes the measuring stick of value - the unit of account. This is why you can compare a job offer, a rent, and a laptop at a glance: they are all expressed in the same unit.

The third job comes from a simple observation: you do not have to spend money the moment you earn it. Because others will still accept it next month, money lets you carry purchasing power through time. It is a store of value. It is not a perfect store - if prices rise, the same notes buy less - but over short periods it works well enough that everyone uses it this way.

That leaves the baker's puzzle: why do people accept nearly worthless paper in the first place? Historically, money was often a commodity with value of its own, such as gold or silver coins. Modern money is different. The euro is fiat money: it is not backed by gold or by any physical commodity, and it cannot be redeemed at the central bank for anything but other euros. Its value rests on two supports. The first is shared acceptance, which is self-fulfilling: the baker takes euros because she is confident her suppliers, her landlord and the tax office will take them too. Law reinforces this by making the euro legal tender, and taxes must be paid in it. The second support is managed scarcity: the European Central Bank controls how many euros exist, precisely so that they remain scarce relative to the goods they buy and prices stay roughly stable. Take away either support - the expectation of acceptance, or the scarcity - and the paper's grip on real goods weakens. That is not a theoretical remark: episodes of very high inflation are exactly what it looks like when scarcity fails, and people abandoning a currency for another one is what it looks like when acceptance fails.

## The terms

Money is any asset that is generally accepted as payment for goods and services and for settling debts. A medium of exchange is the thing handed over in trades, eliminating the double coincidence of wants. A unit of account is the common unit in which prices and values are quoted. A store of value is an asset that carries purchasing power from the present into the future. Fiat money is money whose value comes from general acceptance and legal status rather than from the material it is made of or a promise of redemption in a commodity. Legal tender is money that law recognises as valid payment for debts.

## Worked example

Let us measure exactly what the unit-of-account job saves. Take a small barter economy that trades just four goods: bread, fish, cloth and firewood. With no common unit, every pair of goods needs its own exchange rate. Count the pairs. Bread pairs with fish, with cloth, and with firewood: three pairs. Fish, already paired with bread, still needs cloth and firewood: two more, five so far. Cloth, already paired with bread and fish, still needs firewood: one more. Six exchange rates in total for four goods.

There is a formula behind that count. With n goods, each of the n goods can pair with the n minus 1 others, giving n times n minus 1 ordered pairs; since bread-for-fish and fish-for-bread are the same rate, divide by two. For four goods: 4 times 3 is 12, divided by 2 is 6. It matches the count.

Now scale up to something closer to a real market: 100 distinct goods. Apply the formula: 100 times 99 is 9,900. Divide by 2: 4,950 exchange rates. A trader would need to know nearly five thousand rates to navigate the market, and every rate could drift on its own.

Introduce money as the unit of account and price every good in euros instead. One hundred goods now need exactly 100 prices - one each. The information the economy must carry falls from 4,950 numbers to 100, a reduction of 98 percent. That collapse in complexity is why a common unit emerges again and again in history, even in prisons and camps where official money is absent and something else - famously, cigarettes - takes over the three jobs.

## Connections

This is the first lesson, so the connections point forward. Income and expenses, the subject of the next lesson, are flows of money in and out of your life, measured with money's unit-of-account job. Net worth, two lessons ahead, is a snapshot of what you own minus what you owe, again only possible because everything can be valued in one unit. The store-of-value job is the door to the rest of the course: it is imperfect, because prices rise over time, and the lesson on inflation measures exactly how imperfect. Once you see money as a claim on real goods whose strength can erode, the reason for investing follows naturally: investing is choosing better stores of value than the notes themselves. Keep the baker's puzzle in mind throughout - the question "what is this claim actually worth, and what maintains that worth?" returns for every asset in this course, from bonds to ETF shares.

## Common misconceptions

First: "the euro is valuable because it is backed by gold." It is not, and it has never been. No major currency today is redeemable in gold. The euro's value rests on shared acceptance, legal-tender status, and the central bank keeping it scarce. Second: "money and wealth are the same thing." Wealth is everything you own that has value - money, but also a flat, a pension claim, shares. Money is just one form of wealth, and usually the form that grows least, because its purchasing power slowly erodes as prices rise. Third: "keeping cash means taking no risk." Holding cash is a decision like any other, and it carries a specific risk: the risk that prices rise while your notes stand still. What is certain about cash is its number, not what that number will buy.
