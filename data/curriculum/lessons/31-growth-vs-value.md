---
lesson: 31
slug: growth-vs-value
title: Growth vs value
oneSentence: >
  Growth stocks carry rich prices on the promise of expanding earnings;
  value stocks carry low prices on today's earnings - two styles that trade
  leadership for years at a time, which is why broad indexes simply hold
  both.
level: 6
prerequisites: [earnings, index]
concepts: [growth-vs-value]
visual:
  id: growth-value-compare
  kind: diagram
  requirement: required
  caption: >
    Two companies, same current earnings, very different prices: the gap is
    the market's bet on their futures.
prediction:
  prompt: >
    Two companies each earn 2 euros per share this year. The market prices
    one at 20 euros and the other at 70. What is the market saying about
    each - and is the 20 euro one automatically the better buy?
  modelAnswer: >
    It expects the 70 euro company's earnings to grow strongly and the 20
    euro one's to stagnate or shrink. Neither is automatically better: the
    cheap one is only a bargain if its prospects are less bad than priced,
    and the expensive one only justifies its price if growth actually
    arrives. Each price embeds a forecast that can be wrong in either
    direction.
retrieval:
  - id: q1
    conceptId: growth-vs-value
    type: freeRecall
    prompt: >
      Describe the growth and value styles - what each buys, what each pays,
      and the characteristic risk of each.
    modelAnswer: >
      Growth investing buys companies whose earnings are expected to expand
      rapidly, paying high multiples of current earnings; its risk is
      disappointment - priced-in growth that fails to arrive collapses the
      multiple. Value investing buys companies priced low relative to
      current earnings or assets; its risk is the value trap - a cheap
      price that was right, on a business in genuine decline. Each style
      is a different bet about the future of earnings.
    rubricNote: >
      A 5 has both styles with their price logic and named risks. A 3
      describes the styles without the risks.
    askConfidence: false
  - id: q2
    conceptId: growth-vs-value
    type: classification
    prompt: Which style does each profile suggest?
    items:
      - text: A software firm, earnings doubling every three years, priced at a very high multiple.
        options: [growth, value]
        answer: growth
        errorMap:
          value: terminology-confusion
      - text: An established utility with flat earnings, a low multiple and a high dividend.
        options: [growth, value]
        answer: value
        errorMap:
          growth: terminology-confusion
      - text: A once-dominant retailer priced very cheaply while losing customers every year.
        options: [value - possibly a value trap, growth]
        answer: value - possibly a value trap
        errorMap:
          growth: factual-misunderstanding
  - id: q3
    conceptId: growth-vs-value
    type: shortAnswer
    prompt: >
      Given that each style has outperformed the other for stretches of a
      decade or more, what does lesson 16's logic conclude about choosing
      between them - and what does a broad market-cap index do about it?
    modelAnswer: >
      Picking one style is a concentrated bet on which regime the next
      decades bring - a forecast lesson 20 says you do not need to make. A
      broad cap-weighted index holds both styles automatically, in
      proportion to market value, and rebalances between them by
      construction as prices shift. Diversifying across the styles, like
      across companies, keeps the market return while dropping the
      which-style risk.
    rubricNote: >
      A 5 frames style-picking as concentration and names the index's
      automatic both-and. A 3 says "hold both" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: growth-vs-value
  type: calculation
  prompt: >
    A mature company's share trades at 60 euros and pays a 3 euro annual
    dividend. What is its dividend yield, in percent?
  answer: 5
  tolerance: 0
  explanation: >
    3 / 60 = 0.05, so 5 percent. High yields on low-multiple shares are
    typical of the value style - and lesson 20's framework still asks
    whether the earnings behind that dividend are sustainable.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both styles with price logic and risks (self-score 4+ on q1), all
  classifications correct, the diversification conclusion (self-score 4+ on
  q3), and the yield calculation correct.
---

# Lesson 31 - Growth vs value

One sentence to hold on to: growth stocks carry rich prices on the promise of expanding earnings; value stocks carry low prices on today's earnings - two styles that trade leadership for years at a time, which is why broad indexes simply hold both.

## The problem

Two companies each earned exactly 2 euros per share last year. The market prices one at 20 euros and the other at 70. Same engine output, prices three and a half times apart - and both prices are set by the same crowd of professional investors. Explaining that gap explains most of what stock-pickers argue about.

## The idea

Lesson 30 ended on the key sentence: a share's price is a bid for all future earnings, not this year's. The 70 euro price says the market expects that company's 2 euros to become 4, then 8 - a growth stock: typically young, expanding markets, heavy reinvestment, little or no dividend, priced at a high multiple of current earnings. The 20 euro price says the market expects stagnation or decline - a value stock: typically mature, low multiple, often a substantial dividend from earnings with nowhere internal to go.

Each style is a bet, and each fails in its own way. Growth's risk is disappointment: when priced-in expansion fails to arrive, the multiple - which was most of the price - collapses, and the fall can dwarf any change in actual earnings. Value's risk is the value trap: the price was low because the market was right, and cheap-looking earnings keep shrinking under the buyer. "Expensive" and "cheap" are forecasts wearing price tags; neither is automatically wrong.

History's verdict is the humbling part: the styles trade leadership in long regimes - value dominating for stretches, growth for others, each run lasting years and fully visible only afterwards, like lesson 25's cycles. Picking a style is therefore a concentrated, unfalsifiable-in-advance bet of exactly the kind lessons 16 and 20 counsel against.

Which hands the resolution to lesson 15: a broad market-cap index holds every company - both styles, weighted by market value, shifting between them automatically as prices move. The index investor does not referee the oldest argument in investing; she owns both sides of it and collects the market's return while the pickers trade places.

## The terms

A growth stock trades at a high multiple of current earnings on expectations of rapid expansion. A value stock trades at a low multiple of current earnings or assets. The dividend yield is the annual dividend divided by the share price. A value trap is a low price that correctly anticipated decline. Style refers to the growth/value axis of equity investing.

## Worked example

The two companies, five years on, in euros. The growth company delivers: EPS goes 2 to 4; the market keeps a rich multiple of 30: price 4 x 30 = 120 - up 71 percent from 70. But suppose growth merely halves expectations: EPS reaches 3 and the multiple derates to 18: price 54 - down 23 percent despite earnings rising 50 percent. The multiple was the risk.

The value company: EPS stays 2, price stays near 20, but it pays out 1.50 a year: five dividends collect 7.50 on a 20 euro purchase - a 37 percent cumulative return from standing still. Unless the trap springs: EPS slides to 1.20, price follows to 12 - the cheapness was a verdict, not an error. Four scenarios, no safe corner: which is why the index holds all of them.

## Connections

Growth versus value applies lesson 30's earnings logic to pricing and closes the reduced Level 6: what a stock is, what feeds it, and how the market argues about it. The style axis returns in Tier 2's valuation ratios and in Level 13's factor investing; for the Tier 1 path, lesson 15's index already holds the answer. Next stop on the curriculum: Level 7's fixed income, deepening lesson 13's bond into yield and duration.

## Common misconceptions

"Growth stocks are the better companies." Often true as businesses and irrelevant as investments: quality already carried a price; the return depends on results versus that price. "A low multiple means a bargain." Sometimes it means the market has correctly smelled decline - cheapness is a claim to investigate, not a conclusion. "You must choose a style." The broad index holds both and rebalances by construction; choosing is a risk, not a requirement."
