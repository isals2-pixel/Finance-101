---
lesson: 35
slug: passive-active-and-replication
title: Passive vs active, and replication
oneSentence: >
  Active funds pay managers to try to beat the index and mostly fail after
  costs; passive funds replicate it - physically by holding the securities,
  or synthetically via a collateralized swap.
level: 8
prerequisites: [etf, index, fees]
concepts: [replication]
visual:
  id: replication-paths
  kind: flow
  requirement: required
  caption: >
    Two roads to the index return: physical replication holds the basket;
    synthetic replication holds collateral plus a swap that delivers the
    index performance.
prediction:
  prompt: >
    Professional fund managers are smart, informed and hard-working. Why do
    most of their funds still return less than the plain index over 10-plus
    years? Two reasons.
  modelAnswer: >
    First, arithmetic: all investors together hold the market, so before
    costs the average euro earns the market return - active management is a
    zero-sum game around the index. Second, costs: active fees of 1-2
    percent compound against that average (lesson 18), pushing the majority
    below the index after costs, and the few winners are hard to identify
    in advance.
retrieval:
  - id: q1
    conceptId: replication
    type: freeRecall
    prompt: >
      Explain the arithmetic argument for passive investing, and the two
      replication methods a passive ETF can use.
    modelAnswer: >
      All investors collectively ARE the market, so their asset-weighted
      average return equals the index before costs; after costs, the
      average active fund must lag it - beating the index is a minority
      outcome by construction. A passive ETF avoids the game: physical
      replication buys the index's securities (fully, or by sampling for
      huge indexes); synthetic replication holds a collateral basket and a
      swap contract with a bank that pays the exact index return.
    rubricNote: >
      A 5 has the zero-sum-minus-costs argument and both methods with
      their mechanics. A 3 has one of the two halves.
    askConfidence: false
  - id: q2
    conceptId: replication
    type: classification
    prompt: Physical or synthetic replication?
    items:
      - text: The fund owns all 40 CAC constituents in index weights.
        options: [physical, synthetic]
        answer: physical
        errorMap:
          synthetic: terminology-confusion
      - text: The fund holds European blue chips as collateral and a swap paying a US index's return.
        options: [physical, synthetic]
        answer: synthetic
        errorMap:
          physical: terminology-confusion
      - text: The fund holds 1,200 of an index's 1,500 stocks, chosen to match its behaviour.
        options: [physical (sampling), synthetic]
        answer: physical (sampling)
        errorMap:
          synthetic: terminology-confusion
  - id: q3
    conceptId: replication
    type: shortAnswer
    prompt: >
      What extra risk does a synthetic ETF carry that a physical one does
      not, and what caps that risk under UCITS rules?
    modelAnswer: >
      Counterparty risk: the swap provider - a bank - could fail while
      owing the fund performance. UCITS rules cap net counterparty
      exposure at 10 percent of fund assets and require the collateral
      basket, so a counterparty failure risks the (small, collateralized)
      swap value, not the fund. A real difference, a bounded one - not
      "owning nothing".
    rubricNote: >
      A 5 names counterparty risk, the 10 percent UCITS cap and the
      collateral. A 3 says "the bank might fail" without the bounds.
    askConfidence: true
exercise:
  id: ex1
  conceptId: replication
  type: calculation
  prompt: >
    An index returns 6.0 percent this year. A passive fund tracking it has
    a TER of 0.2 percent and no other frictions. What fund return do you
    expect, in percent?
  answer: 5.8
  tolerance: 0
  explanation: >
    6.0 - 0.2 = 5.8 percent. The expected gap between fund and index is
    roughly the TER - the next lesson measures the realized gap, which
    includes everything else too.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  The arithmetic argument plus both methods (self-score 4+ on q1), all
  classifications correct, the counterparty-risk bounds (self-score 4+ on
  q3), and the expected-return calculation correct.
---

# Lesson 35 - Passive vs active, and replication

One sentence to hold on to: active funds pay managers to try to beat the index and mostly fail after costs; passive funds replicate it - physically by holding the securities, or synthetically via a collateralized swap.

## The problem

Thousands of brilliant, fully-resourced professionals manage active funds. Decade after decade, most of those funds deliver less than the mindless index they try to beat. The explanation is not stupidity - it is arithmetic, and the arithmetic is the deepest reason this course's vehicle is the index tracker.

## The idea

Start with an identity. Every share is always held by someone, so all investors together hold exactly the market - and their asset-weighted average return is the market return, by definition, before costs. Active management is therefore a zero-sum contest around the index: every euro of outperformance is another investor's underperformance. Add costs - lesson 18's active fees of 1-2 percent, plus trading - and the after-cost average must sit below the index. Most funds lagging is not a market failure; it is subtraction. A minority does win, but identifying it in advance has proven close to impossible, and past winners regress (lesson 20's warning about past performance, at industrial scale).

The passive fund opts out of the contest: replicate lesson 15's index, collect the market return, charge lesson 14's minimal TER. Replication takes two forms. Physical replication holds the securities themselves - all of them in index weights (full replication), or, for indexes with thousands of thin names, a statistically matched subset (sampling). Synthetic replication takes a detour: the fund holds a collateral basket of quality securities and signs a swap with a bank that pays the fund the exact index return in exchange for the basket's return - useful for hard-to-hold markets and often tighter-tracking.

Synthetic's honest cost is counterparty risk: the swap bank could fail owing performance. Under the UCITS rules all funds in this course live by, that exposure is capped at 10 percent of assets and collateralized - a real, bounded difference, not the "empty box" of internet folklore. Physical funds carry their own footnote, securities lending, later in this level.

For selection, the ranking is simple: broad index first, then costs and tracking quality; replication method is a secondary preference, not a disqualifier either way.

## The terms

Active management selects securities to beat a benchmark; passive management replicates it. Physical replication holds the index's securities, fully or by sampling. Synthetic replication delivers the index return via a collateralized swap. Counterparty risk is the risk the swap provider fails. UCITS is the EU fund framework capping such exposures.

## Worked example

The zero-sum arithmetic with numbers. A market returns 6.0 percent. Its holders: passive funds (return 6.0 minus 0.2 TER = 5.8) and active funds, which collectively also hold the market: gross 6.0, minus 1.5 of fees and trading = 4.5 average. For the average active fund to have matched passive's 5.8, it needed 1.3 points of outperformance - taken from other active funds, since passives don't play. Half must lose what the other half wins: the majority lands below 5.8, many below 4.5.

Compound lesson 18 onto it: 10,000 euros, 30 years. At 5.8 percent: 10,000 x 1.058^30 = 54,300. At 4.5: 10,000 x 1.045^30 = 37,450. The "average professional" outcome costs 16,850 euros - for trying.

## Connections

This lesson is why lessons 14-16 chose the tracker: the index return is the benchmark few beat after lesson 18's costs. Replication mechanics set up the next lesson - measuring how faithfully a real fund delivers its index - and securities lending and fund structure complete Level 8 after that.

## Common misconceptions

"Smart managers should beat a mindless index." Collectively they ARE the index, minus fees; the contest is against each other, not against the market. "Synthetic ETFs own nothing." They own collateral plus a capped, collateralized claim - different plumbing, bounded risk, same exposure. "Some funds beat the index, so pick those." Identifying them in advance is the unsolved problem; past winners are next decade's average - which is lesson 20's rule wearing fund clothes."
