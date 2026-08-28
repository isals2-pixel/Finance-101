---
lesson: 37
slug: fund-structure
title: Fund structure - UCITS, domicile, accumulating vs distributing
oneSentence: >
  A fund's legal wrapper decides your protections (UCITS), its tax
  efficiency (domicile), and what happens to dividends (accumulating vs
  distributing) - three labels on the factsheet that matter more than its
  marketing name.
level: 8
prerequisites: [etf, tracking]
concepts: [fund-structure]
visual:
  id: fund-labels
  kind: diagram
  requirement: required
  caption: >
    The three factsheet labels decoded: UCITS for protection, domicile for
    dividend taxation, Acc/Dist for what happens to payouts.
prediction:
  prompt: >
    Two share classes of the SAME fund: one "Acc", one "Dist". After five
    years, the Acc line shows a much higher price. Did Acc investors earn
    more? One sentence.
  modelAnswer: >
    No - the portfolios are identical. Acc reinvests dividends inside the
    fund, so its price carries them; Dist paid the same dividends out in
    cash. Total returns match (before personal taxes); only the location
    of the dividends differs.
retrieval:
  - id: q1
    conceptId: fund-structure
    type: freeRecall
    prompt: >
      Explain what UCITS status, fund domicile, and the Acc/Dist label each
      tell you about a fund.
    modelAnswer: >
      UCITS marks compliance with the EU fund framework: diversification
      minimums, segregated custody of assets, counterparty caps, investor
      disclosure - the baseline protection layer for European savers.
      Domicile is where the fund legally lives (Ireland and Luxembourg
      dominate), which sets the withholding-tax treaty treatment of its
      foreign dividends - a real, permanent tracking-difference driver.
      Acc(umulating) reinvests dividends inside the fund automatically;
      Dist(ributing) pays them out in cash - same portfolio, different
      dividend plumbing.
    rubricNote: >
      A 5 covers all three with their practical consequence. A 3 covers
      two.
    askConfidence: false
  - id: q2
    conceptId: fund-structure
    type: classification
    prompt: Which share class fits each saver?
    items:
      - text: Accumulation-phase saver, invests monthly, needs no cash from the portfolio.
        options: [accumulating, distributing]
        answer: accumulating
        errorMap:
          distributing: causal-reasoning-error
      - text: A retiree who wants quarterly cash without selling shares.
        options: [accumulating, distributing]
        answer: distributing
        errorMap:
          accumulating: causal-reasoning-error
      - text: Someone who would otherwise manually reinvest each payout, paying spreads each time.
        options: [accumulating, distributing]
        answer: accumulating
        errorMap:
          distributing: causal-reasoning-error
  - id: q3
    conceptId: fund-structure
    type: shortAnswer
    prompt: >
      Why does an accumulating fund NOT mean "no tax ever" for a French
      saver, and which later lesson resolves how it is actually taxed?
    modelAnswer: >
      Accumulation defers the personal taxation of payouts, but gains are
      taxed when shares are sold, and the account wrapper decides the
      regime: a CTO taxes realized gains, a PEA shelters them under its own
      rules. "Accumulating = tax-free" is a listed misconception in this
      course; the Level 12 tax lessons (PEA, CTO, ETF taxation) settle the
      actual treatment.
    rubricNote: >
      A 5 names deferral-not-exemption and points to the wrapper
      dependence. A 3 says "you pay when you sell" without the wrapper.
    askConfidence: true
exercise:
  id: ex1
  conceptId: fund-structure
  type: calculation
  prompt: >
    You hold 10,000 euros of a fund whose holdings pay 2 percent in
    dividends this year. In the distributing class, how many euros of cash
    are paid out to you (and, in the accumulating class, reinvested inside
    the fund instead)?
  answer: 200
  tolerance: 0
  explanation: >
    10,000 x 0.02 = 200 euros: cash in your account (Dist) or additional
    value inside the fund (Acc). Same 200, different location - the
    performance is identical before personal taxes.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  All three labels decoded (self-score 4+ on q1), all matches correct, the
  deferral-not-exemption point (self-score 4+ on q3), and the dividend
  calculation correct.
---

# Lesson 37 - Fund structure: UCITS, domicile, accumulating vs distributing

One sentence to hold on to: a fund's legal wrapper decides your protections (UCITS), its tax efficiency (domicile), and what happens to dividends (accumulating vs distributing) - three labels on the factsheet that matter more than its marketing name.

## The problem

An ETF factsheet reads: "XYZ World UCITS ETF (Acc), domiciled in Ireland." Three of those words are legal machinery, and each answers a question you should be asking: how protected am I, how are my dividends taxed at source, and where does the dividend cash go? Decode them once and every factsheet in Europe reads the same way.

## The idea

UCITS names the EU's investor-protection framework for funds - the regime nearly every ETF sold to European savers operates under. It mandates diversification floors (no position domination), segregation of fund assets at an independent custodian (the fund's holdings are not the manager's property, and survive its bankruptcy), the counterparty caps lesson 35 met, liquidity requirements, and standardized disclosure. UCITS is the reason this course can treat fund failure as plumbing risk rather than ruin risk; a fund without it plays by other rules.

Domicile is the fund's legal home - overwhelmingly Ireland or Luxembourg for European ETFs, and not by accident: tax treaties. When the fund's US holdings pay dividends, the US withholds tax at source; Ireland's treaty rate is 15 percent where others pay 30. That difference flows straight into lesson 36's tracking difference, permanently - domicile is a structural cost setting wearing a country name.

Acc versus Dist answers the dividend question. The portfolio's holdings pay dividends into the fund either way; a distributing class pays them out to you in cash on schedule, an accumulating class reinvests them inside the fund automatically - lesson 6's compounding with zero friction, no spreads crossed, nothing forgotten. The portfolios and total returns are identical before personal taxes; the choice is logistical and fiscal. Accumulation-phase savers - this course's owner included - default to Acc: automatic reinvestment and, in a taxable account, deferral of payout taxation. Spenders of portfolio income prefer Dist. One warning flag now, formally: "an accumulating ETF never has tax implications" is on this course's misconception list - accumulation defers, the sale still settles up, and the account wrapper (PEA, CTO - Level 12) decides the bill.

## The terms

UCITS is the EU regulatory framework for retail funds: diversification, asset segregation, counterparty caps, disclosure. Domicile is the fund's country of legal residence, driving treaty withholding rates. An accumulating (Acc) class reinvests dividends internally; a distributing (Dist) class pays them out. A share class is one variant of the same underlying fund.

## Worked example

10,000 euros in a world fund whose holdings pay 2 percent of dividends: 10,000 x 0.02 = 200 euros into the fund. Dist class: 200 arrives in your account; reinvesting it yourself costs an order and a spread, or it idles as lesson 9's cash. Acc class: the 200 compounds inside from day one.

Twenty years at 6 percent with 2-percent dividends internally reinvested versus manually reinvested with, say, 0.1 percent annual friction and delay: 10,000 x 1.06^20 = 32,071 versus 10,000 x 1.059^20 = 31,468 - about 600 euros for the convenience alone, before the tax deferral that is usually the larger effect. Domicile arithmetic: on a 2 percent dividend stream, withholding at 15 versus 30 percent is 0.02 x 0.15 = 0.30 points of yearly drag saved - visible in lesson 36's measured differences.

## Connections

These labels finish Level 8: lesson 14's wrapper, 15's index, 18's fee, 35's replication, 36's measured cost, and now the legal shell. Together they define this course's default instrument: a broad-index, low-tracking-difference, Ireland-domiciled UCITS ETF, accumulating class. What remains before the tax lessons is Level 9-10: how much of it to hold against what else.

## Common misconceptions

"Acc and Dist classes perform differently." Identical portfolios; the dividend location differs, not the return. "Domicile is legal trivia." It sets treaty withholding permanently - one of the few costs decided once and paid forever. "Accumulating means never taxed." Deferred, not exempt: the sale settles up under the account wrapper's rules - Level 12's subject, and a listed misconception until then."
