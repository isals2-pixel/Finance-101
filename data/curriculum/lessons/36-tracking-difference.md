---
lesson: 36
slug: tracking-difference
title: Tracking difference
oneSentence: >
  The realized gap between a fund's return and its index - the tracking
  difference - is the tracker's true all-in cost, and it is measured, not
  promised, which makes it the best single quality number for choosing
  between funds on the same index.
level: 8
prerequisites: [replication, fees]
concepts: [tracking]
visual:
  id: tracking-gap
  kind: chart
  requirement: required
  caption: >
    Index and fund lines a year later: the small persistent gap between them
    is the tracking difference - everything the wrapper cost, netted.
prediction:
  prompt: >
    Two ETFs track the same index. A charges a 0.30 percent TER, B charges
    0.12. Over the last three years A returned index minus 0.15 per year, B
    returned index minus 0.25. Which is the cheaper fund in reality?
  modelAnswer: >
    A. The realized tracking difference is the all-in cost, and A loses
    only 0.15 to the index yearly despite the higher sticker TER - its
    trading efficiency and lending income more than pay back the fee gap.
    The TER is the price tag; the tracking difference is the till receipt.
retrieval:
  - id: q1
    conceptId: tracking
    type: freeRecall
    prompt: >
      Define tracking difference and tracking error, and list what feeds
      the tracking difference besides the TER.
    modelAnswer: >
      Tracking difference is the realized gap between fund return and index
      return over a period - the fund's true all-in cost (or occasionally
      gain). Tracking error is the volatility of that gap - how erratically
      the fund hugs the index day to day. Beyond the TER, the difference is
      fed by trading costs at rebalances, withholding-tax treatment of
      dividends, cash drag, sampling imperfections, and - on the plus side
      - securities-lending income, which can offset part or all of the fee.
    rubricNote: >
      A 5 distinguishes the two terms and names at least three non-TER
      drivers including one positive. A 3 defines tracking difference
      only.
    askConfidence: false
  - id: q2
    conceptId: tracking
    type: classification
    prompt: Which fund is doing the better replication job?
    items:
      - text: Fund X returns index -0.10 yearly; fund Y returns index -0.35, same index.
        options: [fund X, fund Y]
        answer: fund X
        errorMap:
          fund Y: calculation-error
      - text: A fund whose gap to the index is small but swings wildly month to month, vs one with the same average gap and a steady path.
        options: [the steady one, the swinging one]
        answer: the steady one
        errorMap:
          the swinging one: terminology-confusion
      - text: A fund that beat its index by 0.05 last year thanks to lending income.
        options: [plausible for a tracker, impossible for a tracker]
        answer: plausible for a tracker
        errorMap:
          impossible for a tracker: factual-misunderstanding
  - id: q3
    conceptId: tracking
    type: shortAnswer
    prompt: >
      Why is the realized tracking difference a more trustworthy selection
      number than either the TER or the fund's past absolute return?
    modelAnswer: >
      The TER is one input to cost, not the total - trading, taxes and
      lending move the true figure both ways. Past absolute return mostly
      reflects what the index did, which every tracker shares. The tracking
      difference isolates exactly the fund's own contribution - wrapper
      efficiency - and it persists structurally (same taxes, same
      processes), so unlike active outperformance it is reasonably
      predictive.
    rubricNote: >
      A 5 dispatches both alternatives and notes the persistence point. A 3
      says "it's the real cost" without why it predicts.
    askConfidence: true
exercise:
  id: ex1
  conceptId: tracking
  type: calculation
  prompt: >
    Over one year the index returned 6.00 percent and a fund tracking it
    returned 5.72 percent. What is the fund's tracking difference for the
    year, in percentage points?
  answer: 0.28
  tolerance: 0.001
  explanation: >
    6.00 - 5.72 = 0.28 points of realized cost - more than a 0.20 TER
    would suggest, so roughly 0.08 came from trading, taxes and other
    frictions. Compare this number, computed over several years, across
    funds on the same index.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both terms with non-TER drivers (self-score 4+ on q1), all
  classifications correct, the trustworthiness argument (self-score 4+ on
  q3), and the gap calculation correct.
---

# Lesson 36 - Tracking difference

One sentence to hold on to: the realized gap between a fund's return and its index - the tracking difference - is the tracker's true all-in cost, and it is measured, not promised, which makes it the best single quality number for choosing between funds on the same index.

## The problem

Two ETFs replicate the identical index. The one with the higher fee has delivered more, year after year. If the TER were the whole cost story, that would be impossible. It is not impossible - because the TER is a price tag, and price tags are not receipts.

## The idea

A tracker's job is to deliver its index's return. The honest report card is the tracking difference: fund return minus index return over a period - typically negative by a whisker, occasionally positive. Whatever the components, this number is the wrapper's total net cost to you, realized rather than advertised.

What feeds it? The TER, first - the metered fee of lessons 14 and 18. Then the frictions the TER excludes: trading costs when the index rebalances and lesson 28's spreads are crossed; dividend withholding taxes, where fund domicile decides how much of foreign dividends is recoverable; cash drag between dividend receipt and reinvestment; sampling error where lesson 35's physical funds hold a subset. And one income line: securities lending - the fund lending its shares to short sellers for a fee, collateralized - which flows back and can offset part, occasionally all, of the TER. Net all of it and you get the realized gap: the reason a 0.30-TER fund can beat a 0.12-TER fund on the same index.

Its sibling metric, tracking error, measures something else: the volatility of the gap - how erratically the fund hugs its index path. Low tracking difference says cheap; low tracking error says precise. For a long-term holder, the difference (compounding cost) matters most; wild error would additionally signal sloppy replication.

Why trust this number? Because unlike active outperformance, it persists: the same domicile taxes, the same rebalancing process and the same lending program operate next year too. Checking three-to-five-year tracking differences across candidate funds on your chosen index - published in fund documents and comparison sites - is the single highest-value minute in ETF selection, and it completes lesson 20's cost question with measured data.

## The terms

Tracking difference is realized fund return minus index return over a period. Tracking error is the standard deviation of that gap. Withholding tax is tax retained on cross-border dividends, partly recoverable depending on fund domicile. Securities lending is the fund lending holdings for collateralized fee income. Cash drag is uninvested cash diluting returns.

## Worked example

One year, one index at +6.00 percent, three funds tracking it. Fund A: TER 0.30, efficient Irish-domiciled operation, lending income 0.10 - returns 5.85: tracking difference 0.15. Fund B: TER 0.12 but clumsy rebalancing and unfavourable withholding - returns 5.75: difference 0.25. Fund C: TER 0.20, returns 5.72: difference 0.28, so 0.08 of non-TER friction.

Ranking by sticker: B, C, A. Ranking by receipt: A, B, C. On 10,000 euros over 20 years, A versus C is 10,000 x (1.0585^20 - 1.0572^20) ≈ 10,000 x (3.117 - 3.041) = 760 euros - from a fund choice within the same index, visible only in the measured number.

## Connections

Tracking difference nets out everything Level 8 has introduced - TER (18), replication mechanics (35), and the structure items of the next lesson (domicile drives the withholding line; lending appears here as income). It operationalizes lesson 20's cost question for the ETF aisle: same index, lowest realized difference, sustained over years.

## Common misconceptions

"The TER tells you a tracker's cost." It is one component; realized tracking difference is the total, and rankings regularly flip between the two. "A tracker can never beat its index." Lending income and tax efficiency occasionally push the difference positive - no magic, just netting. "Tracking error and tracking difference are the same." Cost versus wobble: a fund can be cheap and jittery, or precise and expensive - check the one that matches your concern, usually the difference."
