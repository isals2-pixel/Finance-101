---
lesson: 42
slug: rebalancing
title: Rebalancing and sequence of returns
oneSentence: >
  Markets drift a portfolio away from its chosen allocation, rebalancing
  restores the intended risk level on a rule rather than a feeling - and
  once withdrawals begin, the order of returns matters as much as their
  average.
level: 10
prerequisites: [asset-allocation, volatility]
concepts: [rebalancing]
visual:
  id: rebalancing-cycle
  kind: diagram
  requirement: required
  caption: >
    A 60/40 target drifting to 69/31 after an equity rally, then restored
    by selling stocks and buying bonds - risk pulled back to the chosen
    level.
prediction:
  prompt: >
    You set a 60/40 portfolio and never touch it. Stocks triple over
    fifteen years while bonds inch along. What has happened to the risk
    level you originally chose - without you deciding anything?
  modelAnswer: >
    The portfolio drifted equity-heavy - perhaps to 80/20 or beyond - so
    it now swings like an aggressive portfolio although a calmer one was
    chosen. Doing nothing was itself a decision: drift raises risk
    precisely after rallies, when the next crash hurts most. Restoring
    the split is what rebalancing does.
retrieval:
  - id: q1
    conceptId: rebalancing
    type: freeRecall
    prompt: >
      Define rebalancing, state what it controls (and what it does not),
      and give a sensible rule for when to do it.
    modelAnswer: >
      Rebalancing is trading back to the target allocation after market
      moves have shifted the weights - selling what grew overweight,
      buying what fell behind. It controls risk: it keeps the portfolio's
      volatility at the chosen level rather than the level drift produced.
      It is not primarily a return enhancer. A sensible rule: once a
      year, or when a weight strays more than about five points from
      target - rules that capture the benefit while keeping trades, costs
      and taxes few.
    rubricNote: >
      A 5 has the definition, risk-not-return, and a concrete rule. A 3
      defines it but calls it a return booster.
    askConfidence: false
  - id: q2
    conceptId: rebalancing
    type: classification
    prompt: Rebalance or not - what does the rule say?
    items:
      - text: Annual check; the 60/40 target now reads 63/37.
        options: [rebalance now, within the band - leave it]
        answer: within the band - leave it
        errorMap:
          rebalance now: overgeneralisation
      - text: After a crash, the 60/40 target reads 51/49 and buying stocks feels terrifying.
        options: [rebalance - buy equities, wait for calm]
        answer: rebalance - buy equities
        errorMap:
          wait for calm: misconception
      - text: New savings arrive monthly into a slightly bond-heavy portfolio.
        options: [direct them to equities to rebalance without selling, always sell and re-buy]
        answer: direct them to equities to rebalance without selling
        errorMap:
          always sell and re-buy: factual-misunderstanding
  - id: q3
    conceptId: rebalancing
    type: shortAnswer
    prompt: >
      Two retirees withdraw the same amount yearly from identical
      portfolios earning the same 15-year average return. One hits a crash
      in years 1-2, the other in years 14-15. Why do they end up in very
      different positions?
    modelAnswer: >
      Withdrawals lock losses in. The early-crash retiree sells shares
      cheap in years 1-2 to fund spending; those shares are gone when the
      recovery comes, so the portfolio compounds from a permanently
      smaller base. The late-crash retiree spent years compounding intact.
      Same average, different order - sequence-of-returns risk. It is why
      money needed soon sits in cash and bonds, and why the equity share
      moderates as withdrawals approach.
    rubricNote: >
      A 5 has the sell-cheap-permanently mechanism and a defence. A 3
      says "early losses are worse" without the withdrawal mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: rebalancing
  type: calculation
  prompt: >
    A portfolio started at 60,000 euros in stocks and 40,000 in bonds.
    Stocks gained 50 percent; bonds are flat. How many euros of stocks
    must be sold (and moved to bonds) to restore 60/40?
  answer: 12000
  tolerance: 0
  explanation: >
    Stocks: 90,000; bonds: 40,000; total 130,000. Target stocks: 0.6 x
    130,000 = 78,000. Sell 90,000 − 78,000 = 12,000 euros of stocks. The
    drifted 69/31 mix carried more risk than was ever chosen; the trade
    returns it.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Mes questions d'argent - public financial education portal"
    publisher: Banque de France
    url: https://www.mesquestionsdargent.fr
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with risk-not-return and a rule (self-score 4+ on q1), all
  classifications correct, the sequence mechanism (self-score 4+ on q3),
  and the rebalancing calculation correct.
---

# Lesson 42 - Rebalancing and sequence of returns

One sentence to hold on to: markets drift a portfolio away from its chosen allocation, rebalancing restores the intended risk level on a rule rather than a feeling - and once withdrawals begin, the order of returns matters as much as their average.

## The problem

Lesson 41 chose a split. Markets immediately start unchoosing it: every equity rally pushes the stock weight up, every crash pulls it down. A 60/40 left alone through a long bull market quietly becomes 80/20 - an aggressive portfolio owned by someone who decided against one. The fix is a rule so simple it feels like it can't matter. It matters twice.

## The idea

Rebalancing is trading back to target: sell what grew overweight, buy what fell behind, until the chosen weights hold again. Its job is risk control, not return. Drift is not neutral - it systematically raises the equity share after rallies (when valuations are rich and the chosen risk already exceeded) and lowers it after crashes (when expected returns are best). Left alone, the portfolio always leans the wrong way relative to the choice you made in calm.

The discipline is the second benefit. A rebalancing rule - once a year, or when any weight drifts past a band of about five points - forces the two trades emotion forbids: selling winners after euphoria, buying equities after a crash. It converts lesson 41's "hold through the dip" from a resolution into a procedure. Execution notes: with ongoing savings, rebalance free of charge by directing new contributions to the underweight side; inside French tax wrappers (Level 12) rebalancing trades are untaxed, in a bare account each sale can trigger capital gains tax - one more reason bands beat constant tinkering.

The second half of the lesson is a risk the accumulation years never show. While saving, the order of returns is irrelevant - the same set of yearly returns compounds to the same sum in any order. Once withdrawals begin, order becomes destiny: a crash in the first years of retirement forces selling shares cheap to fund spending, and those shares are permanently gone when recovery arrives. Two retirees with identical average returns can end far apart - sequence-of-returns risk. The defences follow from the mechanism: hold the next several years of spending in cash and high-grade bonds, moderate the equity share as withdrawals approach, and let rebalancing top the cash sleeve up in good years.

## The terms

Rebalancing is restoring the target allocation after drift. A rebalancing band is the tolerated deviation (for example ±5 points) before trading. Sequence-of-returns risk is the sensitivity of a portfolio under withdrawals to the order, not just the average, of returns.

## Worked example

Start: 60,000 stocks / 40,000 bonds. Stocks gain 50 percent, bonds flat: 90,000 / 40,000, total 130,000 - the mix is now 69/31. Target stocks: 0.6 x 130,000 = 78,000. Sell 12,000 of stocks, buy 12,000 of bonds: 78,000 / 52,000 - 60/40 again. By lesson 39's arithmetic the drifted mix swung about two points harder than chosen; one pair of trades undid it.

Sequence: two retirees, 300,000 each, withdrawing 15,000 yearly. Retiree A meets −30 percent in year one: the portfolio drops to 210,000 and the withdrawal takes 15,000 from the bottom - shares sold cheapest, forever. Retiree B meets the same −30 percent in year fifteen, after years of intact compounding on the full base. Same average return, thousands apart - the order did it.

## Connections

Rebalancing enforces lesson 41's allocation with lesson 20's rule-over-feeling discipline; the band rule respects lesson 18's cost lesson and Level 12's tax reality. Sequence risk sharpens lesson 19: horizon is not only how long money grows but when it starts leaving. Next lesson assembles the whole level into an actual portfolio.

## Common misconceptions

"Rebalancing sells winners and hurts returns." It maintains the risk you chose; over full cycles the discipline effect - buying crashes on schedule - has often paid, but risk control is the point. "Rebalance constantly." Bands and annual checks capture the benefit; more trading adds cost and tax. "A good average return makes the order irrelevant." Only without withdrawals; with them, early losses are locked in permanently - the average never sees it."
