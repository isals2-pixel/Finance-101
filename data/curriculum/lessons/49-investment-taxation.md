---
lesson: 49
slug: investment-taxation
title: How France taxes investments
oneSentence: >
  In a standard account, realized capital gains and dividends are taxed
  at the 31.4 percent flat tax (since January 2026), unrealized gains
  compound untaxed - so holding long and choosing accumulating funds are
  tax strategies in themselves.
level: 12
prerequisites: [etf, long-term-investing]
concepts: [investment-taxation]
taxRulesVerifiedAt: "2026-08-26"
visual:
  id: tax-bite
  kind: chart
  requirement: required
  caption: >
    A 3,000 euro realized gain in a CTO: 31.4 percent flat tax takes 942
    euros; the same gain left unrealized keeps compounding in full.
prediction:
  prompt: >
    Two CTO investors each hold a fund that gained 3,000 euros. One sells
    and rebuys yearly "to lock in profits"; the other simply holds. Who
    ends richer, and through what mechanism?
  modelAnswer: >
    The holder. The seller realizes the gain, pays 31.4 percent (942
    euros) and reinvests only the remainder, so future compounding works
    on a smaller base every year. The holder's untaxed paper gain keeps
    compounding in full; tax falls once, at the end. Deferral is a real
    return advantage - lesson 18's fee arithmetic, played with the
    taxman.
retrieval:
  - id: q1
    conceptId: investment-taxation
    type: freeRecall
    prompt: >
      Describe how gains and dividends are taxed in a standard French
      account (rate, components, when tax falls due), and the progressive
      scale alternative.
    modelAnswer: >
      In a CTO, the default is the flat tax (PFU): 31.4 percent since
      January 2026 - 12.8 percent income tax plus 18.6 percent social
      contributions (the CSG rose in 2026). It falls on realized capital
      gains (sale price minus purchase price, at sale) and on dividends
      when paid; unrealized appreciation is not taxed. Instead of the
      PFU one can opt for the progressive income-tax scale on all such
      income for the year - worth checking for low marginal brackets;
      social contributions apply either way.
    rubricNote: >
      A 5 has the rate with both components, realized-vs-unrealized
      timing, and the scale option. A 3 has the rate without timing.
    askConfidence: false
  - id: q2
    conceptId: investment-taxation
    type: classification
    prompt: Taxable this year, or not?
    items:
      - text: An ETF in a CTO rose 4,000 euros; nothing was sold.
        options: [not taxed this year, taxed at 31.4 percent]
        answer: not taxed this year
        errorMap:
          taxed at 31.4 percent: factual-misunderstanding
      - text: A distributing fund in a CTO paid 300 euros in dividends.
        options: [taxed when paid, taxed only at final sale]
        answer: taxed when paid
        errorMap:
          taxed only at final sale: factual-misunderstanding
      - text: An accumulating ETF reinvested its underlying dividends internally.
        options: [no French tax event until sale, taxed as if distributed]
        answer: no French tax event until sale
        errorMap:
          taxed as if distributed: factual-misunderstanding
  - id: q3
    conceptId: investment-taxation
    type: shortAnswer
    prompt: >
      Explain why an accumulating world ETF held for decades in a CTO is
      more tax-efficient than the same index held via a distributing
      share class - and connect it to the cost logic of lesson 18.
    modelAnswer: >
      The distributing class triggers the flat tax on every dividend
      payment; the taxed remainder must be manually reinvested, so a
      slice of each year's return is lost to tax before compounding. The
      accumulating class reinvests internally with no French tax event
      until sale: the gross dividend compounds for decades and tax falls
      once, at the end. The annual tax slice behaves exactly like lesson
      18's recurring fee - small percentage, huge compounded difference -
      except this fee is optional.
    rubricNote: >
      A 5 has the per-dividend tax drag, the single-tax-at-sale
      contrast and the fee analogy. A 3 states acc is better without the
      mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: investment-taxation
  type: calculation
  prompt: >
    You realize a 3,000 euro gain in a CTO and take the default flat tax
    (31.4 percent). How many euros of tax are due?
  answer: 942
  tolerance: 0.01
  explanation: >
    3,000 x 0.314 = 942 euros (12.8 percent income tax + 18.6 percent
    social contributions), leaving 2,058. The same gain left unrealized
    owes nothing yet - timing is the one tax lever every investor holds.
sources:
  - title: "Évolution du taux du Prélèvement Forfaitaire Unique (PFU)"
    publisher: Service-Public.fr (Entreprendre)
    url: https://entreprendre.service-public.gouv.fr/actualites/A18796
    publishedAt: "2026-02-10"
    verifiedAt: "2026-08-26"
  - title: "J'ai un Plan d'Épargne en Actions (PEA), les retraits sont-ils imposables ?"
    publisher: impots.gouv.fr
    url: https://www.impots.gouv.fr/particulier/questions/jai-un-plan-depargne-en-actions-pea-les-retraits-sont-ils-imposables
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Rate, components and timing (self-score 4+ on q1), all classifications
  correct, the accumulating-fund mechanism (self-score 4+ on q3), and
  the flat-tax calculation correct.
---

# Lesson 49 - How France taxes investments

One sentence to hold on to: in a standard account, realized capital gains and dividends are taxed at the 31.4 percent flat tax (since January 2026), unrealized gains compound untaxed - so holding long and choosing accumulating funds are tax strategies in themselves.

Education, not advice - rates below were verified against the linked official sources on 2026-08-26 and do change (the 2026 budget just changed them); check before acting.

## The problem

Lesson 18 hunted every recurring cost because compounding magnifies it. The largest recurring cost most French investors face is not the TER - it is tax, and unlike the TER it responds to how you invest. Same fund, same returns: a taxable event every year or one at the end, and decades later the difference is thousands.

## The idea

The default regime in an ordinary securities account (CTO - compte-titres ordinaire, next lesson) is the flat tax, the PFU (prélèvement forfaitaire unique). Since January 2026 it stands at 31.4 percent: 12.8 percent income tax plus 18.6 percent social contributions - the social part rose from 17.2 when the 2026 budget lifted the CSG. It applies to dividends when they are paid and to capital gains when they are realized - sale price minus purchase price, taxed in the year of sale. Two structural facts follow.

First, unrealized gains are not taxed. A fund that rises for twenty unsold years generates no tax bill along the way; the entire gross gain compounds. Realizing "to lock in profits" hands over 31.4 percent early and shrinks the compounding base every time - deferral is not evasion, it is the system's own arithmetic favouring patience.

Second, distributions are taxed on arrival. A distributing fund converts part of each year's return into an immediate taxable event; an accumulating (Acc) fund - lesson 37's plumbing - reinvests dividends inside the fund with no French tax event until you sell. Over decades the annual tax slice on distributions behaves exactly like a recurring fee, and lesson 18 priced what recurring fees do. For a long-horizon CTO investor, Acc share classes are the tax-efficient default.

One alternative exists: instead of the PFU you may elect the progressive income-tax scale for all such income in a year (social contributions remain). At low marginal brackets - low income, or the 11 percent band with the dividend allowance the scale carries - the option can beat 31.4 percent; the annual tax notice is the place to check. Everything else - loss offsetting against gains, the declaration mechanics - your broker's annual tax form (IFU) mostly automates.

## The terms

The PFU (flat tax) is the default 31.4 percent levy (12.8 income tax + 18.6 social) on dividends and realized gains. A realized gain exists only at sale. An accumulating fund creates no tax event on internal dividends. The progressive-scale option replaces the 12.8 percent part for a whole year's capital income.

## Worked example

3,000 euro gain in a CTO. Sold today: tax 3,000 x 0.314 = 942, net 2,058 reinvested. Held: the full 3,000 keeps compounding; at lesson 5's rates, ten more untaxed years roughly doubles it before the single final tax. Dividends: 10,000 euros in a distributing world ETF paying 2 percent hands 200 euros over yearly, taxed 62.80 on arrival; the Acc twin compounds the full 200. One choice on a factsheet - Dist or Acc - and the taxman's compounding position flips.

## Connections

Taxation is lesson 18's cost lesson with a public counterparty, and lesson 37's Acc/Dist plumbing now carries money, not preference. Buy-and-hold (lessons 19, 43) turns out to be the tax-optimal behaviour as well as the behavioural one. Next lesson: the wrappers - PEA and assurance-vie - that legally shrink the 31.4 percent itself.

## Common misconceptions

"Paper gains are taxed yearly." Only realized gains and paid dividends are; unrealized appreciation compounds untaxed. "The flat tax is 30 percent." It was; since January 2026 it is 31.4 (CSG rise) - dated facts, which is why this course dates its tax pages. "Tax planning is for the rich." Choosing Acc over Dist and holding instead of churning are tax planning, free, and available at any portfolio size."
