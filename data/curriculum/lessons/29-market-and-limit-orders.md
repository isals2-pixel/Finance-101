---
lesson: 29
slug: market-and-limit-orders
title: Market and limit orders
oneSentence: >
  A market order buys certainty of execution at an uncertain price; a limit
  order buys certainty of price at an uncertain execution - and for a
  long-term investor the limit order is the safer default.
level: 5
prerequisites: [exchanges-brokers, bid-ask-spread]
concepts: [order-types]
visual:
  id: order-fill
  kind: diagram
  requirement: required
  caption: >
    The two order types against the order book: the market order crosses the
    spread and takes what it finds; the limit order rests at its price and
    waits.
prediction:
  prompt: >
    You place a market order to buy a thinly traded ETF at the quoted 50.00.
    It executes at 50.60. What happened - and which single word in "market
    order" explains it?
  modelAnswer: >
    "Market": the order accepts whatever the best available sell prices are
    when it arrives. The quote's depth at 50.00 was thin, your order ate
    through it, and the rest filled at worse resting asks up the book. A
    limit at 50.05 would have capped the price - at the risk of only
    partial execution.
retrieval:
  - id: q1
    conceptId: order-types
    type: freeRecall
    prompt: >
      Define market and limit orders, and state precisely what each one
      guarantees and what each one leaves uncertain.
    modelAnswer: >
      A market order executes immediately against the best available
      opposing orders: execution is guaranteed, the price is whatever the
      book holds when it lands. A limit order states a worst acceptable
      price - a maximum to buy, a minimum to sell - and rests in the book
      until matched: the price is guaranteed at-or-better, execution is
      not, and the order may fill partially or never.
    rubricNote: >
      A 5 has both definitions with the exact guarantee/uncertainty split.
      A 3 defines both without the split.
    askConfidence: false
  - id: q2
    conceptId: order-types
    type: classification
    prompt: Which order type fits each intention?
    items:
      - text: '"I must be out of this position today, whatever the price."'
        options: [market order, limit order]
        answer: market order
        errorMap:
          limit order: causal-reasoning-error
      - text: '"I will buy this ETF, but not above 82.50."'
        options: [market order, limit order]
        answer: limit order
        errorMap:
          market order: causal-reasoning-error
      - text: '"I refuse to sell below 40, even if it takes days."'
        options: [market order, limit order]
        answer: limit order
        errorMap:
          market order: causal-reasoning-error
  - id: q3
    conceptId: order-types
    type: shortAnswer
    prompt: >
      Why is a limit order slightly above the ask a sensible default for a
      monthly ETF purchase, even though a market order would almost always
      fill at nearly the same price?
    modelAnswer: >
      The limit costs nothing in the normal case - it fills immediately at
      the ask like a market order - but caps the damage in the abnormal
      one: a flash move, a fat-fingered quote, or thin depth cannot fill
      you far above your price. For a repeated, unhurried purchase, giving
      up nothing in exchange for a hard ceiling is a free insurance - the
      asymmetry lesson 20's framework favours.
    rubricNote: >
      A 5 names the no-cost-in-normal-case plus tail-protection asymmetry.
      A 3 says "limit is safer" without the asymmetry.
    askConfidence: true
exercise:
  id: ex1
  conceptId: order-types
  type: calculation
  prompt: >
    You place a limit buy at 48.00 euros with 4,800 euros. The price dips
    to 47.80 and your order fills fully at your limit price. How many
    shares did you buy?
  answer: 100
  tolerance: 0
  explanation: >
    4,800 / 48.00 = 100 shares. The fill can be at your limit or better,
    never worse - that ceiling is the limit order's entire promise.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both guarantee/uncertainty splits stated (self-score 4+ on q1), all
  intentions classified correctly, the free-insurance asymmetry (self-score
  4+ on q3), and the fill calculation correct.
---

# Lesson 29 - Market and limit orders

One sentence to hold on to: a market order buys certainty of execution at an uncertain price; a limit order buys certainty of price at an uncertain execution - and for a long-term investor the limit order is the safer default.

## The problem

Same ETF, same minute, two investors. One taps "buy at market" and fills at 50.60 - 1.2 percent above the 50.00 on her screen. The other set "buy, limit 50.05" and filled at 50.02. The difference was not luck or speed; it was one field on the order form that most beginners leave at its default.

## The idea

An order is an instruction to lesson 27's broker, executed against lesson 28's order book, and it comes in two fundamental flavours distinguished by what they hold fixed.

A market order says: execute now, at the best available price. It crosses the spread and consumes resting orders from the best price outward. Its guarantee is execution - you will trade. Its risk is price: "best available" means whatever the book holds when the order lands. In a deep, calm book that is a whisker from the quote; in a thin book, or a fast market, the order can eat through the top level and fill progressively worse - the 50.60 surprise above, called slippage.

A limit order says: execute only at my price or better. A limit buy at 50.05 rests in the book and can fill at 50.05 or below, never above; a limit sell at 40 fills at 40 or above, never below. Its guarantee is price. Its risk is execution: if the market never comes to you, the order fills partially or not at all.

Neither is "the good one" - they price different certainties, and the choice follows lesson 20's logic: what does this trade need? Forced exits need execution; almost everything else a patient investor does needs price. Hence the practical default for the monthly ETF purchase: a limit a touch above the current ask. In the normal case it behaves exactly like a market order and fills instantly; in the abnormal case - flash spike, thin book, broken quote - it is a hard ceiling. Insurance that costs nothing in the expected case is the rare free lunch, so take it.

One habit completes the lesson: check the quote before sending, size orders against lesson 28's visible depth for anything illiquid, and never leave a market order working overnight into an opening auction.

## The terms

A market order executes immediately at the best available opposing prices. A limit order executes only at a stated price or better, resting in the book otherwise. Slippage is the gap between the expected and executed price. A partial fill is a limit order matched for only part of its size.

## Worked example

The book for an ETF: asks resting at 50.00 for 60 shares, 50.30 for 80, 50.60 for 200. A market buy of 200 shares takes 60 x 50.00 = 3,000, then 80 x 50.30 = 4,024, then 60 x 50.60 = 3,036 - total 10,060 euros, average 50.30, versus the 50.00 on screen: 0.6 percent of slippage, silently.

The limit version: buy 200, limit 50.05. It takes the 60 at 50.00 (at-or-better) and rests for the remaining 140 at 50.05. Perhaps the market comes down and fills it; perhaps not, and you adjust tomorrow. Cost of the caution: possibly waiting. Cost avoided: ever paying more than 50.05. For a purchase that repeats monthly for decades, that trade is not close.

## Connections

Order types are the levers you personally hold over lesson 28's spread and depth, executed through lesson 27's chain. They complete Level 5: market, exchange, broker, liquidity, order - the full mechanics between your tap and your ownership. From here the course returns to what you are buying: earnings, the engine behind every share, next.

## Common misconceptions

"A market order executes at the price on my screen." It executes at the book's best available when it arrives - the screen shows the past, the book decides the present. "Limit orders are for traders." The opposite: traders often need immediacy; the patient buyer is precisely who can set a price and wait. "A limit order might make me miss the market." For a monthly plan, a miss costs one day's adjustment; a bad market fill in a thin moment is paid forever."
