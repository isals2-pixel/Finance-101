---
lesson: 50
slug: french-wrappers
title: "PEA, CTO, assurance-vie: choosing the wrapper"
oneSentence: >
  French wrappers are tax containers around the same investments - the
  PEA exempts income tax after five years, assurance-vie grants
  allowances after eight, the CTO trades tax for total freedom - and the
  right home for a long-term ETF portfolio usually starts with the PEA.
level: 12
prerequisites: [investment-taxation, portfolio-construction]
concepts: [french-wrappers]
taxRulesVerifiedAt: "2026-08-26"
visual:
  id: wrapper-map
  kind: diagram
  requirement: required
  caption: >
    The three wrappers compared on tax after their clocks run: PEA
    (social contributions only after 5 years), assurance-vie (allowance
    plus reduced rate after 8), CTO (full flat tax, full freedom).
prediction:
  prompt: >
    Two savers buy the same world-equity ETF strategy. One holds it in a
    CTO, the other in a PEA opened five years ago. Both withdraw a 10,000
    euro gain. Who keeps more, and roughly how much more?
  modelAnswer: >
    The PEA holder. Past five years, PEA withdrawals owe social
    contributions only - 18.6 percent, 1,860 euros - while the CTO pays
    the full 31.4 percent flat tax, 3,140. Same strategy, same gain:
    the wrapper choice kept 1,280 euros. Containers matter as much as
    contents.
retrieval:
  - id: q1
    conceptId: french-wrappers
    type: freeRecall
    prompt: >
      For PEA, CTO and assurance-vie: state each wrapper's tax rule, its
      main constraint, and its natural role.
    modelAnswer: >
      PEA: after five years, withdrawals are exempt from income tax -
      only social contributions (18.6 percent) are due on gains; deposits
      capped at 150,000 euros; holdings restricted to European equities
      and eligible ETFs (synthetic replication reaches world indexes).
      Natural core for long-term equity investing. CTO: no tax
      advantage - full flat tax - but no ceiling, no holding
      restrictions, full liquidity; the overflow and
      anything-not-PEA-eligible account. Assurance-vie: its clock starts
      at opening; after eight years, withdrawn gains get a yearly
      allowance (4,600 euros single / 9,200 couple) and a reduced rate
      (7.5 percent plus social contributions for most savers); funds in
      euro guarantee capital; strong succession treatment. Flexible
      medium-to-long-term saving and estate planning.
    rubricNote: >
      A 5 has rule, constraint and role for all three. A 3 covers two
      wrappers or omits constraints.
    askConfidence: false
  - id: q2
    conceptId: french-wrappers
    type: classification
    prompt: Which wrapper fits first?
    items:
      - text: Monthly long-term investing in a world-equity ETF, starting from zero.
        options: [PEA, CTO]
        answer: PEA
        errorMap:
          CTO: misconception
      - text: The PEA is at its 150,000 deposit ceiling and monthly investing continues.
        options: [CTO or assurance-vie for the overflow, stop investing]
        answer: CTO or assurance-vie for the overflow
        errorMap:
          stop investing: factual-misunderstanding
      - text: Money wanted with a capital guarantee and useful succession treatment.
        options: [assurance-vie fonds euros, PEA]
        answer: assurance-vie fonds euros
        errorMap:
          PEA: factual-misunderstanding
  - id: q3
    conceptId: french-wrappers
    type: shortAnswer
    prompt: >
      "Open the PEA and the assurance-vie early, even with small
      amounts." Justify this standard advice from the mechanics of the
      two wrappers.
    modelAnswer: >
      Both advantages are clocks, and both clocks start at opening, not
      at funding. A PEA opened today with 100 euros is five years from
      income-tax-free withdrawals even if serious money arrives in year
      four; an assurance-vie opened today is eight years from its
      allowance. Opening early costs nearly nothing and converts future
      deposits into already-matured ones - the cheapest option value in
      French personal finance.
    rubricNote: >
      A 5 has the clock-starts-at-opening mechanism for both. A 3
      repeats the advice without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: french-wrappers
  type: calculation
  prompt: >
    A 10,000 euro gain is withdrawn. In a five-year-old PEA it owes
    social contributions (18.6 percent); in a CTO it owes the full flat
    tax (31.4 percent). How many euros does the PEA save?
  answer: 1280
  tolerance: 0.01
  explanation: >
    CTO: 3,140. PEA: 1,860. Difference: 10,000 x (0.314 − 0.186) =
    1,280 euros on this single withdrawal - the 12.8 percent income-tax
    layer the PEA's five-year clock erased.
sources:
  - title: "Plan d'épargne en actions (PEA)"
    publisher: Service-Public.fr
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F2385
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Quelle est la fiscalité de l'assurance-vie ?"
    publisher: Ministère de l'Économie
    url: https://www.economie.gouv.fr/particuliers/gerer-mon-argent/gerer-mon-budget-et-mon-epargne/quelle-est-la-fiscalite-de-lassurance-vie
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Évolution du taux du Prélèvement Forfaitaire Unique (PFU)"
    publisher: Service-Public.fr (Entreprendre)
    url: https://entreprendre.service-public.gouv.fr/actualites/A18796
    publishedAt: "2026-02-10"
    verifiedAt: "2026-08-26"
masteryCriteria: >
  All three wrappers with rules, constraints and roles (self-score 4+ on
  q1), all classifications correct, the clock mechanism (self-score 4+
  on q3), and the wrapper-saving calculation correct.
---

# Lesson 50 - PEA, CTO, assurance-vie: choosing the wrapper

One sentence to hold on to: French wrappers are tax containers around the same investments - the PEA exempts income tax after five years, assurance-vie grants allowances after eight, the CTO trades tax for total freedom - and the right home for a long-term ETF portfolio usually starts with the PEA.

Education, not advice - rules below were verified against the linked official sources on 2026-08-26 and do change; check before acting.

## The problem

Lesson 43 built a two-fund portfolio; lesson 49 showed the taxman's default cut. What remains is real estate: where the portfolio lives. France offers three main containers for the same holdings, with tax treatments so different that the wrapper decision can be worth more than every fund-selection decision combined.

## The idea

The PEA (plan d'épargne en actions) is the equity investor's wrapper. Deposits are capped at 150,000 euros (the portfolio may grow past it without limit); holdings are restricted to European equities and eligible funds - in practice, synthetic-replication ETFs (lesson 35) make world indexes PEA-eligible. Its clock: before five years, a withdrawal closes the plan and gains face the flat tax; after five years, withdrawals are free of income tax - only the 18.6 percent social contributions fall on gains - and partial withdrawals no longer close the plan. Inside, dividends and sales compound entirely untaxed.

The CTO (compte-titres ordinaire) is the no-rules account: any instrument, any amount, any time - at lesson 49's full flat tax. Its roles: overflow past the PEA ceiling, and holdings the PEA cannot take (physical world ETFs, bonds, non-European assets).

Assurance-vie is a savings wrapper wearing insurance clothes. Money grows untaxed inside; its clock starts at opening, and from year eight, withdrawn gains enjoy a yearly allowance - 4,600 euros (9,200 for a couple) - with a reduced 7.5 percent rate (plus social contributions) on most gains beyond it. It carries the fonds en euros - capital-guaranteed, modest-yielding - alongside ETF units (unités de compte), and distinctive succession advantages: sums pass outside the standard estate rules within generous limits. Watch its fees (lesson 18): contract fees stack on fund fees, and low-cost online contracts differ from bank-branch ones by a full recurring percent.

Practical order for the course's strategy: regulated livrets for the reserve (lesson 47); the PEA first for the world-ETF core - opened early, because the clock runs from opening; assurance-vie for flexibility, bonds via fonds euros, and succession; CTO for overflow. The PER (lesson 48) joins only when its bracket arithmetic says so.

## The terms

A wrapper is a tax regime around investments, not an investment. PEA: capped, European-equity-restricted, income-tax-free after five years. CTO: unrestricted, fully taxed. Assurance-vie: allowanced and rate-reduced after eight years, with fonds euros and succession treatment. The clock is the holding period each advantage requires, running from opening.

## Worked example

A 10,000 euro gain withdrawn from each wrapper. CTO: 31.4 percent, 3,140 euros gone. PEA past five years: 18.6 percent, 1,860 - saving 1,280. Assurance-vie past eight years, single holder: the first 4,600 of gain is allowance-free of income tax (social contributions still due), the remainder at 7.5 plus 18.6 - on this gain roughly 2,270 in total, between the two. Same fund, same gain, three tax bills - and the cheapest required only patience and an early opening.

## Connections

Wrappers complete lesson 43's construction: the two-fund portfolio now has addresses - ETF core in the PEA, ballast and flexibility in assurance-vie, overflow in the CTO - with lesson 49's Acc-and-hold logic inside each. Lesson 47's livrets guard the base, lesson 48's gap gives the target. The curriculum's twelve levels close here: what remains in the course is practice - labs, reviews, and the final exam.

## Common misconceptions

"Choosing a wrapper is choosing an investment." The same ETF strategy fits all three; the wrapper sets tax and constraints only. "PEA gains become fully tax-free." Income-tax-free after five years; the 18.6 percent social contributions always remain. "Assurance-vie is about the insurance." It is a tax-and-succession wrapper; the insurance layer is nominal - but the fee layer is real, so pick contracts like you pick funds: by cost."
