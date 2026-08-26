---
lesson: 14
slug: what-is-an-etf
title: What is an ETF?
oneSentence: >
  An ETF is a fund traded like a share that holds a whole basket of
  securities, giving broad exposure in one purchase at low cost - with
  diversification only as wide as the basket it tracks.
level: 8
prerequisites: [stocks, financial-markets]
concepts: [etf]
visual:
  id: etf-basket
  kind: diagram
  requirement: required
  caption: >
    One ETF share bought on the exchange equals a proportional slice of a
    basket holding hundreds or thousands of securities.
prediction:
  prompt: >
    Buying 1,500 shares of 1,500 different companies would take enormous time
    and cost. An ETF does it in one 300-euro purchase. What must the ETF be,
    structurally, for that to work?
  modelAnswer: >
    A fund: a pooled vehicle that collects money from many investors and
    holds the 1,500 companies once, centrally. Each ETF share is a
    proportional claim on that pool, and listing the shares on an exchange
    makes the whole basket tradable like a single stock.
retrieval:
  - id: q1
    conceptId: etf
    type: freeRecall
    prompt: >
      Define an ETF and explain the two things it combines. What determines
      what an ETF share is worth?
    modelAnswer: >
      An ETF (exchange-traded fund) combines a fund - pooled money holding a
      basket of securities - with exchange listing, so fund shares trade all
      day like stocks. Most ETFs passively track an index, holding whatever
      it contains. An ETF share is worth its proportional slice of the
      basket's current value; if the basket's holdings rise, the share
      rises with them.
    rubricNote: >
      A 5 has fund + listing, index tracking, and the basket-value link. A 3
      defines "fund that trades like a stock" without the value link.
    askConfidence: false
  - id: q2
    conceptId: etf
    type: classification
    prompt: True claim or misconception?
    items:
      - text: '"Any ETF is diversified, because ETFs hold many things."'
        options: [true claim, misconception]
        answer: misconception
        errorMap:
          true claim: misconception
      - text: '"One ETF purchase can hold shares of over a thousand companies."'
        options: [true claim, misconception]
        answer: true claim
        errorMap:
          misconception: factual-misunderstanding
      - text: '"ETF shares can be bought and sold on the exchange during trading hours."'
        options: [true claim, misconception]
        answer: true claim
        errorMap:
          misconception: factual-misunderstanding
  - id: q3
    conceptId: etf
    type: shortAnswer
    prompt: >
      Why can a passive index-tracking ETF charge far lower annual fees than
      a traditional actively managed fund?
    modelAnswer: >
      Because it buys no judgment. Tracking an index is mechanical - hold
      what the index holds, in its weights - so there are no analyst teams,
      research budgets or star managers to pay. Active funds charge for the
      attempt to beat the market; the tracker charges only for
      administration, often ten times less per year.
    rubricNote: >
      A 5 contrasts mechanical replication with paid judgment and notes the
      scale of the fee gap. A 3 says "less work" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: etf
  type: calculation
  prompt: >
    An ETF's basket of holdings is worth 500,000,000 euros in total and
    5,000,000 ETF shares exist. What is one ETF share's slice of the basket
    worth, in euros?
  answer: 100
  tolerance: 0
  explanation: >
    500,000,000 / 5,000,000 = 100 euros per share - the net asset value.
    Market prices on the exchange stay glued near this number by arbitrage.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Fund-plus-listing definition with the value link (self-score 4+ on q1),
  all classifications correct, the fee reasoning (self-score 4+ on q3), and
  the per-share calculation correct.
---

# Lesson 14 - What is an ETF?

One sentence to hold on to: an ETF is a fund traded like a share that holds a whole basket of securities, giving broad exposure in one purchase at low cost - with diversification only as wide as the basket it tracks.

## The problem

Owning a small piece of 1,500 companies across the world sounds like the safest form of stock ownership - and like a logistical nightmare: 1,500 orders, 1,500 positions, endless costs. Yet a single 300-euro purchase can do exactly this before your coffee cools. The instrument that makes it possible is the one this course will use most.

## The idea

Start with the fund. A fund pools money from many investors and invests it once, centrally: thousands of investors, one large basket of securities. Each fund share is a proportional claim on the basket - own 0.001 percent of the shares, own 0.001 percent of everything inside.

An ETF - exchange-traded fund - is a fund whose shares are listed on a stock exchange. That single feature changes the experience: instead of dealing with the fund company at end-of-day prices, you buy and sell ETF shares on lesson 11's secondary market, any moment of the trading day, exactly like a stock. One instrument, two layers: a share on the outside, a basket on the inside.

What fills the basket? Most ETFs are passive: they track an index - a defined list of securities with defined weights (next lesson) - by simply holding what the list says. No manager decides anything; replication is mechanical. That is why the annual fees can be a fraction of a traditional active fund's: you pay for administration, not for judgment. The fee number to watch is the TER, the total expense ratio, deducted from the fund's assets every year - lesson 18 shows what those small percentages do over decades.

An ETF share's value follows arithmetic, not opinion: the basket's total value divided by the number of ETF shares - the net asset value. Exchange prices hover tightly around it, kept in line by specialised traders who profit from any gap.

One warning, early: the wrapper guarantees nothing about the contents. An ETF tracking 1,500 global companies and an ETF tracking twelve mining firms are the same structure with opposite risk. "ETF" answers how you hold; the index answers what.

## The terms

A fund is a pooled investment vehicle owning a basket of securities. An ETF is a fund whose shares trade on an exchange. Passive management means replicating an index rather than selecting securities. The net asset value (NAV) is the basket's value divided by the number of fund shares. The TER (total expense ratio) is the fund's annual cost as a percentage of assets.

## Worked example

An ETF tracks a broad world index. Its basket of holdings is worth 500,000,000 euros, and 5,000,000 ETF shares exist. Value per share: 500,000,000 / 5,000,000 = 100 euros - the NAV.

You invest 300 euros: 3 shares, a 3 / 5,000,000 = 0.00006 percent claim on every one of the roughly 1,500 companies inside. The basket's businesses earn and grow; suppose its value rises 6 percent to 530,000,000. New NAV: 530,000,000 / 5,000,000 = 106. Your stake: 3 x 106 = 318 euros. The TER, at say 0.20 percent, quietly took about 0.60 euros of that year's value - small this year, cumulative forever.

## Connections

The ETF wraps lesson 12's shares (and lesson 13's bonds - bond ETFs work identically) into lesson 11's tradable form. The index that steers it is next; why holding 1,500 beats holding 3 is lesson 16's diversification; and what the TER costs over 30 years is lesson 18. This is the vehicle the whole course has been driving toward.

## Common misconceptions

"Any ETF is diversified by definition." The wrapper is neutral: diversification equals the tracked index's breadth, and narrow-sector ETFs are as concentrated as the sector. "ETFs are risky because they trade all day." Tradability adds convenience, not risk; the risk lives entirely in the basket. "Cheap fees mean an inferior product." For index replication, execution quality is measurable and high; the missing cost is the active judgment you chose not to buy.
