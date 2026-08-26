---
lesson: 27
slug: exchanges-and-brokers
title: Exchanges and brokers
oneSentence: >
  The exchange is the regulated marketplace where orders meet; the broker is
  your paid access ramp to it - and knowing which role charges what protects
  you from products where the roles blur.
level: 5
prerequisites: [financial-markets]
concepts: [exchanges-brokers]
visual:
  id: exchange-broker-chain
  kind: flow
  requirement: reinforcement
  caption: >
    Your order travels broker to exchange to counterparty; the broker charges
    for access, the exchange matches orders under regulation.
prediction:
  prompt: >
    You tap "buy" on your broker's app. Who actually sells you the shares -
    the broker, the exchange, or someone else? One sentence.
  modelAnswer: >
    Someone else: another investor whose sell order the exchange matched with
    your buy order. The broker only transmitted your order for a fee, and
    the exchange only ran the matching - neither owned the shares you
    bought.
retrieval:
  - id: q1
    conceptId: exchanges-brokers
    type: freeRecall
    prompt: >
      Explain the distinct roles of the exchange and the broker in one of
      your trades, and where each earns its money.
    modelAnswer: >
      The exchange is the organized, regulated marketplace: it collects
      everyone's buy and sell orders, matches them by price and time, and
      publishes prices; it earns listing and transaction fees. The broker is
      your intermediary: it holds your account, transmits your orders to the
      exchange, and settles the trades; it earns commissions and account
      fees. Your counterparty is another investor - never, in plain broking,
      the broker itself.
    rubricNote: >
      A 5 has both roles, both revenue sources, and the counterparty point.
      A 3 describes the two without who-earns-what.
    askConfidence: false
  - id: q2
    conceptId: exchanges-brokers
    type: classification
    prompt: Exchange or broker?
    items:
      - text: Matches all buy and sell orders by price and publishes the quotes.
        options: [exchange, broker]
        answer: exchange
        errorMap:
          broker: terminology-confusion
      - text: Holds your securities account and sends your order to the market.
        options: [exchange, broker]
        answer: broker
        errorMap:
          exchange: terminology-confusion
      - text: Euronext Paris.
        options: [exchange, broker]
        answer: exchange
        errorMap:
          broker: terminology-confusion
  - id: q3
    conceptId: exchanges-brokers
    type: shortAnswer
    prompt: >
      "Zero-commission" brokers exist. Why should lesson 18's fee instinct
      make you ask how they are paid, and what are the usual answers?
    modelAnswer: >
      A broker has costs, so free commissions mean revenue elsewhere:
      wider spreads or payment for routing your orders, currency-conversion
      margins, fees on cash, or pushing products where the broker is your
      counterparty. The cost moves from a visible line to an invisible one -
      exactly the kind of certain, recurring charge lesson 18 says to hunt
      down before choosing.
    rubricNote: >
      A 5 names two or more real revenue substitutes and frames it as
      hidden cost. A 3 says "they earn differently" without mechanisms.
    askConfidence: true
exercise:
  id: ex1
  conceptId: exchanges-brokers
  type: calculation
  prompt: >
    Your broker charges 0.1 percent per order with a 2 euro minimum. What is
    the commission, in euros, on a 5,000 euro purchase?
  answer: 5
  tolerance: 0
  explanation: >
    5,000 x 0.001 = 5 euros - above the 2 euro minimum, so the percentage
    applies. On a 1,000 euro order the same formula gives 1 euro, so the 2
    euro minimum would apply instead.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both roles with revenue sources (self-score 4+ on q1), all
  classifications correct, the zero-commission analysis (self-score 4+ on
  q3), and the commission calculation correct.
---

# Lesson 27 - Exchanges and brokers

One sentence to hold on to: the exchange is the regulated marketplace where orders meet; the broker is your paid access ramp to it - and knowing which role charges what protects you from products where the roles blur.

## The problem

You tap "buy" and own shares three seconds later. Between the tap and the ownership, your order crossed at least two businesses with different jobs, different fees and different incentives. Most investors never learn which is which - and the confusion is precisely what some products are built to exploit.

## The idea

Lesson 11 introduced the market as a mechanism; here is its machinery. The exchange - Euronext Paris for most French listings - is the organized marketplace itself: a regulated venue that collects every participant's buy and sell orders, matches them by price and time priority, publishes the resulting quotes, and guarantees the plumbing of settlement. It is lesson 21's supply-and-demand cross, industrialized. Its customers are listed companies and trading members; it earns listing and transaction fees, and operates under the supervision of regulators - in France, the AMF.

You cannot walk onto an exchange. Access runs through a broker: the firm holding your cash and securities account, transmitting your orders to the exchange, and booking the results. For this it charges commissions per order and, sometimes, account or custody fees. Crucially, in plain broking the broker is an agent, not your counterparty: when you buy, the seller is another investor matched by the exchange, and the broker touched only the message and the money.

The distinction earns its keep at the edges. Some products - CFDs prominent among them - are not exchange-traded at all: there, the "broker" is the house you trade against, with incentives to match. And "zero-commission" offers relocate rather than abolish the cost: wider spreads, payment for order flow, conversion margins. Lesson 18's rule - certain, recurring costs deserve the most scrutiny - applies to the whole chain, visible lines and invisible ones.

For this course's strategy the practical checklist is short: a broker with low, transparent fees, holding UCITS ETFs on regulated exchanges, is the entire requirement.

## The terms

An exchange is a regulated marketplace matching buy and sell orders and publishing prices. A broker is the intermediary giving investors access to exchanges, holding their accounts. A commission is the broker's per-order fee; custody fees charge for holding the account. A counterparty is the party on the other side of a trade.

## Worked example

A 5,000 euro ETF purchase, end to end. You place the order; your broker charges 0.1 percent with a 2 euro minimum: 5,000 x 0.001 = 5 euros. The order reaches Euronext, matches a resting sell order from another investor, executes. Settlement moves 5,005 euros from your account (5,000 to the seller, 5 to the broker) and the ETF shares to yours.

Now the fee instinct at annual scale: investing 1,000 euros monthly at 5 euros minimum-commission each time costs 60 euros a year - 0.5 percent of the year's contributions. The same amount invested quarterly in 3,000 euro orders costs 4 x 3 = 12 euros - 0.1 percent. Same broker, same product; order sizing alone cut the access cost fourfold.

## Connections

This lesson gives lesson 11's market its named parts and prepares the next two: liquidity and the spread (the cost living inside the exchange's order book) and order types (the instructions your broker will accept). The fee logic is lesson 18 extended from the fund to the pipe. The French account wrappers - PEA, CTO - through which a broker holds all this arrive with Level 12.

## Common misconceptions

"My broker sells me the shares." In plain broking your counterparty is another investor; the broker is a paid messenger - where it IS the counterparty (CFDs), you have left the exchange and entered the house's game. "Zero commission means free trading." The revenue moved into spreads, routing payments or conversion margins; the cost became invisible, not absent. "Exchanges set share prices." They host the matching; lesson 21's buyers and sellers set the prices.
