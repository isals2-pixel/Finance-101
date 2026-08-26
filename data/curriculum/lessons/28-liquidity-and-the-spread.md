---
lesson: 28
slug: liquidity-and-the-spread
title: Liquidity and the bid-ask spread
oneSentence: >
  Every security quotes two prices - the bid you sell at and the ask you buy
  at - and the gap between them is the price of liquidity, charged on every
  trade and widest exactly when markets panic.
level: 5
prerequisites: [exchanges-brokers, supply-demand]
concepts: [liquidity, bid-ask-spread]
visual:
  id: order-book-spread
  kind: diagram
  requirement: required
  caption: >
    The order book: resting buy orders below, resting sell orders above, and
    the spread between the best of each - crossed on every immediate trade.
prediction:
  prompt: >
    You buy a share at the quoted price and sell it back one second later,
    nothing having happened in the world. Do you get your money back? Why
    or why not?
  modelAnswer: >
    No - you lose the spread. You bought at the ask (the sellers' best
    price) and sold at the bid (the buyers' best price), which sits lower.
    The gap is the cost of trading immediately, and it exists even in a
    perfectly calm market.
retrieval:
  - id: q1
    conceptId: bid-ask-spread
    type: freeRecall
    prompt: >
      Define bid, ask and spread, and explain why the spread is a real
      trading cost even though no line on your statement names it.
    modelAnswer: >
      The bid is the highest price resting buyers currently offer; the ask
      is the lowest price resting sellers demand; the spread is the gap
      between them. Anyone trading immediately buys at the ask and sells at
      the bid, so a round trip loses the spread by construction. It never
      appears as a fee line - it is embedded in the execution prices - which
      is exactly why it goes unnoticed.
    rubricNote: >
      A 5 has all three definitions and the embedded round-trip cost. A 3
      defines the terms without the cost mechanism.
    askConfidence: false
  - id: q2
    conceptId: liquidity
    type: classification
    prompt: More liquid or less liquid?
    items:
      - text: An ETF on a broad world index with huge daily volume.
        options: [more liquid, less liquid]
        answer: more liquid
        errorMap:
          less liquid: factual-misunderstanding
      - text: Shares of a tiny company trading a few thousand euros a day.
        options: [more liquid, less liquid]
        answer: less liquid
        errorMap:
          more liquid: factual-misunderstanding
      - text: An apartment in Lyon.
        options: [more liquid, less liquid]
        answer: less liquid
        errorMap:
          more liquid: misconception
  - id: q3
    conceptId: liquidity
    type: shortAnswer
    prompt: >
      Why do spreads widen in a panic - the moment everyone most wants to
      trade? Use lesson 21's tools.
    modelAnswer: >
      Liquidity is supplied by those willing to rest orders and absorb
      trades. In a panic, sellers flood one side while resting buyers pull
      back - taking the other side means catching a falling knife, so those
      still willing demand a bigger price concession. Supply of immediacy
      shrinks as demand for it spikes, and its price - the spread - widens
      accordingly. Selling in a crash therefore pays the worst
      transaction costs on top of the worst prices.
    rubricNote: >
      A 5 frames the spread as the price of immediacy with both curves
      moving. A 3 says "everyone sells at once" without the pricing logic.
    askConfidence: true
exercise:
  id: ex1
  conceptId: bid-ask-spread
  type: calculation
  prompt: >
    A share quotes bid 99.95 / ask 100.05. You buy 200 shares at the ask and
    immediately sell them at the bid. How many euros does the round trip
    cost you (ignoring commissions)?
  answer: 20
  tolerance: 0
  explanation: >
    Spread per share: 100.05 - 99.95 = 0.10 euros. On 200 shares: 200 x
    0.10 = 20 euros - paid to the market's liquidity providers, invisible on
    any statement.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definitions with the round-trip cost (self-score 4+ on q1), all
  classifications correct, the panic-widening mechanism (self-score 4+ on
  q3), and the spread calculation correct.
---

# Lesson 28 - Liquidity and the bid-ask spread

One sentence to hold on to: every security quotes two prices - the bid you sell at and the ask you buy at - and the gap between them is the price of liquidity, charged on every trade and widest exactly when markets panic.

## The problem

Buy a share "at the market price" and sell it back one second later. Nothing has happened anywhere - yet you have lost money, reliably, every time. No fee line explains it. The loss lives inside the two prices you never looked at closely.

## The idea

Lesson 11 called liquidity the ease of converting a security to cash at a predictable price. The place it lives is the exchange's order book: the standing list of resting orders. Below the current price sit buy orders - the highest of them is the bid, the best price at which someone will buy from you right now. Above sit sell orders - the lowest is the ask, the best price at which someone will sell to you. There is no single price; there are always these two, with the last trade flickering between them.

The spread - ask minus bid - is the fee the market charges for immediacy. Trade instantly and you cross it: buy at the ask, sell at the bid, lose the gap on any round trip by pure arithmetic. Whoever rested the orders you hit - often professional market makers - earns it in exchange for standing ready to trade at all times, bearing the risk of being run over by news.

Liquidity is how thin that toll is. A broad-index ETF trading hundreds of millions daily quotes spreads of hundredths of a percent - deep books on both sides, fierce competition among liquidity providers. A micro-cap trading a few thousand euros a day can quote several percent, and your own modest order can move its price. Assets without order books at all - property, above all - take months and heavy costs to convert: liquidity is a spectrum, and lesson 11's claim that it "makes long-term funding possible" is priced here, centime by centime.

The spread's nastiest property is lesson 21 in fast motion: it is a price, so it moves with supply and demand for immediacy. In a panic, everyone demands to sell now while resting buyers withdraw - so the price of "now" explodes precisely when the most people are paying it. One more arithmetic reason lesson 19's holding beats lesson 25's dodging.

## The terms

The order book is the standing list of resting buy and sell orders. The bid is the best resting buy price; the ask the best resting sell price; the spread is their gap. Liquidity is the ease of trading size quickly without moving the price. A market maker earns the spread by resting orders on both sides.

## Worked example

A share quotes bid 99.95 / ask 100.05 - a 0.10 spread, one tenth of a percent of the price. You buy 200 shares at the ask: 200 x 100.05 = 20,010 euros. You sell immediately at the bid: 200 x 99.95 = 19,990. Cost of the round trip: 20 euros, no fees involved.

Same trade in an illiquid small-cap quoting 9.70 / 10.30 - a 0.60 spread on a 10 euro share, six percent. Round trip on 2,000 shares (20,600 to buy, 19,400 back): 1,200 euros gone. The instrument choice, not the trading skill, set the toll. This is one quiet reason this course's vehicle is broad, heavily traded ETFs: lesson 18's TER is the visible cost, the hair-thin spread the invisible one, and both are minimized by the same choice.

## Connections

The spread is lesson 21's pricing applied to immediacy itself, hosted on lesson 27's exchange, and it completes the cost picture lesson 18 began: TER plus commissions plus spread is the all-in toll. Its panic behaviour reinforces lessons 17 and 19: forced selling pays worst exactly when it feels most urgent. Order types, next, are how you choose which side of the book you touch.

## Common misconceptions

"There is one price for a share." There are always two; the one on the news is just the last trade between them. "Liquidity is a concern for professionals only." Every trade you place crosses the spread, and every euro of it comes from you. "Liquid today means liquid in a crisis." Spreads are a price and reprice instantly; depth measured in calm weather is an upper bound, not a guarantee.
