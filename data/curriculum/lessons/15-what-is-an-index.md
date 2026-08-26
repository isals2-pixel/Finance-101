---
lesson: 15
slug: what-is-an-index
title: What is an index?
oneSentence: >
  An index is a calculated, rule-based average of many securities' prices -
  a measuring stick for a market that funds can replicate but nobody can buy
  directly.
level: 8
prerequisites: [stocks]
concepts: [index]
visual:
  id: index-composition
  kind: diagram
  requirement: required
  caption: >
    An index is a weighted average: the biggest companies move the number
    most under market-cap weighting.
prediction:
  prompt: >
    "The CAC 40 rose 1.2 percent today." Nobody traded anything called "CAC
    40" - it is not a security. What actually happened, mechanically, for
    that sentence to be true?
  modelAnswer: >
    The calculated weighted average of the 40 constituent companies' share
    prices ended 1.2 percent higher: the larger companies' moves, weighted by
    their size, summed to +1.2 percent. An index is arithmetic over real
    prices, not a thing that trades.
retrieval:
  - id: q1
    conceptId: index
    type: freeRecall
    prompt: >
      Define a market index, explain market-cap weighting, and state the
      relationship between an index and an index fund.
    modelAnswer: >
      An index is a rule-defined list of securities whose prices are combined
      into one number - a weighted average measuring a market segment. Under
      market-cap weighting, each company counts in proportion to its total
      market value, so big companies move the index more. The index itself is
      pure calculation; an index fund or ETF is a real portfolio built to
      hold the same list in the same weights, making the number investable.
    rubricNote: >
      A 5 has the calculation definition, cap weighting with its consequence,
      and the index/fund distinction. A 3 defines the average without
      weighting or the distinction.
    askConfidence: false
  - id: q2
    conceptId: index
    type: classification
    prompt: Index or fund?
    items:
      - text: A calculated number summarizing 1,500 companies' prices, published by a rules provider.
        options: [index, fund]
        answer: index
        errorMap:
          fund: terminology-confusion
      - text: A vehicle holding those 1,500 companies that you can buy shares of.
        options: [index, fund]
        answer: fund
        errorMap:
          index: terminology-confusion
      - text: The CAC 40.
        options: [index, fund]
        answer: index
        errorMap:
          fund: terminology-confusion
  - id: q3
    conceptId: index
    type: shortAnswer
    prompt: >
      Under market-cap weighting, what happens to a company's index weight as
      its price rises relative to others - and why does that make the index
      self-maintaining?
    modelAnswer: >
      Its market value grows, so its weight grows automatically; a fading
      company's weight shrinks and, at the rules' threshold, it drops out.
      No trading is needed to keep weights right - prices update them by
      themselves - which is why replicating funds barely need to trade and
      can charge so little.
    rubricNote: >
      A 5 explains automatic reweighting and connects it to low-cost
      replication. A 3 states weights follow size without the consequence.
    askConfidence: true
exercise:
  id: ex1
  conceptId: index
  type: calculation
  prompt: >
    A mini-index holds two companies under market-cap weighting: company A
    worth 300,000,000 euros and company B worth 100,000,000 euros. What is
    company A's weight in the index, in percent?
  answer: 75
  tolerance: 0
  explanation: >
    Total market value: 300,000,000 + 100,000,000 = 400,000,000. A's weight:
    300,000,000 / 400,000,000 = 0.75, so 75 percent. A 1 percent move in A
    moves this index three times as much as the same move in B.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Calculation definition with weighting and the index/fund distinction
  (self-score 4+ on q1), all classifications correct, the self-maintenance
  reasoning (self-score 4+ on q3), and the weight calculation correct.
---

# Lesson 15 - What is an index?

One sentence to hold on to: an index is a calculated, rule-based average of many securities' prices - a measuring stick for a market that funds can replicate but nobody can buy directly.

## The problem

The evening news says the CAC 40 rose 1.2 percent. Yet nobody anywhere bought or sold a thing called "CAC 40" - no such security exists. Forty real companies traded, and a number computed from them moved. What that number is, and how it is built, decides what every index fund in the world actually holds.

## The idea

A market index is a measuring stick: a defined list of securities whose prices are combined, by published rules, into a single number. The rules say what qualifies (the 40 largest French listings; roughly 1,500 large and mid-sized companies across developed markets), and how each one counts. Track the number over time and you see how that slice of the market - not any single company - is doing.

How each company counts is the weighting, and the dominant convention is market-cap weighting: each company's weight equals its share of the group's total market value (lesson 12's market capitalization). A company worth 300 billion counts three times as much as one worth 100 billion. The consequence: the index's daily move is mostly its giants' move, and tiny constituents barely register.

Cap weighting has an elegant property - it maintains itself. When a company's price rises, its market value and its weight rise in the same stroke; a declining company fades automatically and eventually falls out of the list at the rules' cutoff. No committee trades to keep the weights current, and a fund replicating the index barely needs to trade either: it can hold the same shares and let prices do the reweighting. That near-zero maintenance is precisely why lesson 14's trackers can run on fees near a twentieth of a percent.

Keep the roles straight. The index is arithmetic - published, transparent, uninvestable. The index fund or ETF is a real portfolio built to mirror it. The index measures; the fund holds. When this course says "buy the world market", the full sentence is: buy a fund replicating a broad world index.

## The terms

A market index is a rule-based weighted average of a defined list of securities' prices. A constituent is a security in the list. Market-cap weighting sets each constituent's weight proportional to its market capitalization. An index provider publishes the rules and the number. An index fund replicates the list to make it investable.

## Worked example

Build the smallest index: two companies under cap weighting. Company A is worth 300,000,000 euros, company B 100,000,000. Total: 400,000,000. Weights: A = 300 / 400 = 75 percent, B = 100 / 400 = 25 percent.

Now a trading day: A rises 2 percent, B falls 4 percent. Index move: 0.75 x (+2) + 0.25 x (-4) = 1.5 - 1.0 = +0.5 percent. The index rose even though half its constituents fell - the giant outweighed the drop. Scale the same arithmetic to 40 or 1,500 names and you have every headline index number you will ever read.

## Connections

The index turns lesson 12's market capitalization into weights and gives lesson 14's ETF its instructions - the fund is the index made buyable. Breadth is what makes the next lesson's diversification cheap: one broad index carries thousands of lesson 16's independent risks. Index construction details (rules, rebalancing, tracking) return in Level 8's later lessons.

## Common misconceptions

"You can buy the index." The index is a calculation; you buy a fund that replicates it - and funds differ in cost and fidelity even on the same index. "An index treats all its companies equally." Under cap weighting the largest few can dominate; always ask how concentrated the top of the list is. "Index up means most stocks rose." The weighted giants can outvote the majority, as the worked example shows in miniature.
