---
lesson: 40
slug: risk-adjusted-return
title: Risk-adjusted return
oneSentence: >
  Portfolios are compared by return per unit of risk - the Sharpe ratio -
  and the best mixes for each risk level form the efficient frontier, which
  broad diversification approximates at near-zero cost.
level: 9
prerequisites: [volatility, correlation]
concepts: [risk-adjusted-return]
visual:
  id: efficient-frontier
  kind: chart
  requirement: required
  caption: >
    Portfolios plotted by volatility and expected return: the upper-left
    edge - most return per swing - is the efficient frontier; broad
    diversified mixes sit near it.
prediction:
  prompt: >
    Fund A returned 8 percent with 20 percent volatility; fund B returned 6
    percent with 8 percent volatility; safe deposits paid 2. Which fund
    delivered more return per unit of risk taken?
  modelAnswer: >
    B. Above the 2 percent safe rate, A earned 6 extra points for 20 of
    volatility - 0.30 per unit; B earned 4 extra for 8 - 0.50 per unit. B
    was paid better for each unit of swing, and a leveraged or scaled-up B
    could beat A at equal risk. Return alone ranked them wrongly.
retrieval:
  - id: q1
    conceptId: risk-adjusted-return
    type: freeRecall
    prompt: >
      Define the Sharpe ratio and the efficient frontier, and state what
      each is used for.
    modelAnswer: >
      The Sharpe ratio is excess return over the safe rate divided by
      volatility - return earned per unit of risk taken; it compares
      portfolios whose raw returns and risks both differ. The efficient
      frontier is the set of portfolios offering the highest expected
      return at each level of volatility (equivalently, least risk per
      return); mixes below it waste risk, and diversification across
      imperfectly correlated assets is what pushes a portfolio toward it.
    rubricNote: >
      A 5 has both definitions with their uses. A 3 defines the Sharpe
      ratio only.
    askConfidence: false
  - id: q2
    conceptId: risk-adjusted-return
    type: classification
    prompt: Safe rate 2 percent. Which portfolio has the better Sharpe ratio?
    items:
      - text: 8 percent return at 20 volatility vs 6 percent at 8 volatility.
        options: [the 8 percent portfolio, the 6 percent portfolio]
        answer: the 6 percent portfolio
        errorMap:
          the 8 percent portfolio: calculation-error
      - text: Two portfolios with equal Sharpe ratios but different volatility - for a long-horizon saver comfortable with swings, which serves better?
        options: [either can, only the low-volatility one]
        answer: either can
        errorMap:
          only the low-volatility one: overgeneralisation
      - text: A concentrated single-stock bet vs a broad index at the same expected return.
        options: [the single stock is nearer the frontier, the index is nearer the frontier]
        answer: the index is nearer the frontier
        errorMap:
          the single stock is nearer the frontier: misconception
  - id: q3
    conceptId: risk-adjusted-return
    type: shortAnswer
    prompt: >
      Beta measures how much a stock moves with the market. Why does the
      market pay a premium for market (beta) risk but none for a single
      company's specific risk?
    modelAnswer: >
      Specific risk is removable free of charge - lesson 16's
      diversification deletes it - so no rational buyer pays extra to hold
      what anyone can eliminate; competition prices it at zero. Market
      risk survives every diversification, someone must always bear it,
      and only unavoidable risk commands compensation. Hence the CAPM
      logic: expected premium scales with beta, not with total volatility.
    rubricNote: >
      A 5 has the removable-vs-unavoidable pricing argument. A 3 says
      "diversifiable risk isn't paid" without why.
    askConfidence: true
exercise:
  id: ex1
  conceptId: risk-adjusted-return
  type: calculation
  prompt: >
    A portfolio returns 6 percent with 16 percent volatility while the safe
    rate is 2 percent. What is its Sharpe ratio? (Excess return divided by
    volatility, two decimals.)
  answer: 0.25
  tolerance: 0.001
  explanation: >
    (6 - 2) / 16 = 4 / 16 = 0.25 of return per unit of volatility - the
    number to compare against other portfolios, not the 6 percent alone.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both definitions with uses (self-score 4+ on q1), all classifications
  correct, the beta-pricing argument (self-score 4+ on q3), and the Sharpe
  calculation correct.
---

# Lesson 40 - Risk-adjusted return

One sentence to hold on to: portfolios are compared by return per unit of risk - the Sharpe ratio - and the best mixes for each risk level form the efficient frontier, which broad diversification approximates at near-zero cost.

## The problem

Fund A made 8 percent; fund B made 6. Every brochure, ranking and dinner-party story crowns A. Yet a saver who wanted A's risk level would have done better holding more of B. The tool that reveals this - one division - closes Level 9.

## The idea

Lesson 38 insisted returns be read in pairs with volatility. The Sharpe ratio merges the pair into one comparable number: excess return over the safe rate, divided by volatility - what the portfolio paid per unit of swing endured. A at (8-2)/20 = 0.30; B at (6-2)/8 = 0.50. B extracted more return from each point of risk; a saver can hold B and simply take more risk elsewhere (or more of B) to reach A's return with less total swing. Raw return ranks stories; the Sharpe ratio ranks portfolios.

Plot every possible mix of assets by volatility (x) and expected return (y), and the attainable combinations fill a region. Its upper-left edge - maximum return at each risk level - is the efficient frontier. Below the edge, a portfolio wastes risk: some other mix offers more return for the same swings. What lifts a mix toward the edge is exactly lesson 39: imperfect correlations deleting volatility while returns average through. Concentrated portfolios sit deep inside the region - full swing, no cancellation; broad multi-asset mixes hug the edge. The frontier is not exotic: a cheap world-equity ETF blended with high-grade bonds lands close to it, which is why Level 10 builds precisely that.

One refinement completes the theory. Lesson 16 split risk into removable (specific) and unavoidable (market); beta measures a holding's exposure to the market layer. The pricing logic: nobody is paid for risk anyone can remove free - competition sets its premium at zero - so expected premiums attach to beta, the risk that remains after full diversification. That is the core of the CAPM, and the final word on lesson 17's promise: the market pays for what must be borne, never for what could have been diversified away.

## The terms

The Sharpe ratio is (return minus safe rate) divided by volatility. The efficient frontier is the set of portfolios with maximal expected return per volatility level. Beta measures an asset's sensitivity to the whole market's moves. The CAPM links expected premium to beta: only undiversifiable risk is compensated.

## Worked example

Safe rate 2 percent. Portfolio A: 8 percent return, 20 volatility - Sharpe (8-2)/20 = 0.30. Portfolio B: 6 percent, 8 volatility - Sharpe (6-2)/8 = 0.50.

Match risks: hold B "one and a half times over" by allocating between B-style assets and accepting 12 volatility - expected return roughly 2 + 0.50 x 12 = 8 percent at 12 volatility, versus A's 8 percent at 20. Same return, eight points less swing - and lesson 38's drag arithmetic turns those points into extra compound growth. Then the frontier check from lesson 39's own numbers: the 60/40 mix delivered its return at 10.0 volatility where the naive average predicted 11.6 - correlation moved it up-left, toward the edge, for free.

## Connections

The Sharpe ratio operationalizes lessons 38-39 into one comparison; the frontier is lesson 39's mathematics drawn as a map; beta prices lesson 16's split. Together they justify the course's construction: broad, multi-asset, low-cost - near the frontier by design. Level 10 turns this map into your allocation; the portfolio laboratory already computes every number in it.

## Common misconceptions

"The highest return wins." Only at equal risk; per-unit-of-risk is the honest ranking, and it regularly reverses the headline order. "The efficient frontier is for professionals." A two-fund broad portfolio sits near it; the frontier condemns concentration, not simplicity. "High-volatility assets must offer the best deals." Total volatility includes unpaid specific risk; only the market component earns the premium - which is why diversified exposure, not boldness, is what gets compensated."
