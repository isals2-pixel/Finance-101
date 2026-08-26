---
lesson: 48
slug: pensions
title: Pensions and the retirement gap
oneSentence: >
  The French pay-as-you-go pension replaces only part of net income, the
  shortfall is the retirement gap, and personal long-horizon saving -
  started early for compounding's sake - is what fills it.
level: 12
prerequisites: [compounding, long-term-investing]
concepts: [pensions]
visual:
  id: pension-pillars
  kind: diagram
  requirement: required
  caption: >
    The three pillars: State pay-as-you-go pension, mandatory
    complementary schemes, and personal saving - the third fills the gap
    the first two leave.
prediction:
  prompt: >
    A French employee nets 2,500 euros a month. At retirement the public
    and complementary schemes together might replace around 70 percent of
    it. What monthly problem does that create, and which lesson-5 fact
    decides how cheap or expensive solving it will be?
  modelAnswer: >
    A gap of about 750 euros a month for two or three decades of
    retirement. Compounding decides the price of filling it: euros saved
    at 25 have twice the runway of euros saved at 45, so the same gap
    costs a small monthly effort early or a heavy one late.
retrieval:
  - id: q1
    conceptId: pensions
    type: freeRecall
    prompt: >
      Describe the French pension architecture (how it is financed and
      its pillars), define the replacement rate, and state why a gap is
      the normal case.
    modelAnswer: >
      The public system is pay-as-you-go: today's workers' contributions
      pay today's pensions - no personal pot exists. On top sit
      mandatory complementary schemes (such as Agirc-Arrco for private
      employees), also contribution-based. Together they replace a
      percentage of pre-retirement income - the replacement rate -
      typically well below 100 and lower for higher earners and
      interrupted careers. The third pillar, personal saving, is
      voluntary; the gap between the replacement rate and the income one
      wants is what it must fund.
    rubricNote: >
      A 5 has pay-as-you-go, the pillars, the definition and the
      who-gets-less pattern. A 3 has the pillars without the financing
      logic.
    askConfidence: false
  - id: q2
    conceptId: pensions
    type: classification
    prompt: True to the system's logic, or a misconception?
    items:
      - text: "\"My pension contributions accumulate in an account with my name on it.\""
        options: [misconception - they pay current pensioners, accurate]
        answer: misconception - they pay current pensioners
        errorMap:
          accurate: factual-misunderstanding
      - text: "\"Higher earners tend to see a lower share of their income replaced.\""
        options: [accurate, misconception]
        answer: accurate
        errorMap:
          misconception: factual-misunderstanding
      - text: "\"Starting retirement saving at 25 rather than 45 roughly halves the monthly effort - or better.\""
        options: [accurate - compounding runway, exaggeration]
        answer: accurate - compounding runway
        errorMap:
          exaggeration: calculation-error
  - id: q3
    conceptId: pensions
    type: shortAnswer
    prompt: >
      The PER offers a tax deduction on contributions. Explain the
      trade-offs that keep it from being automatically the right vehicle.
    modelAnswer: >
      The deduction is deferral: contributions reduce taxable income
      now, but exits are taxed later - the benefit is the rate
      difference between working-life and retirement tax brackets, plus
      tax-free compounding meanwhile. Against it: money is locked until
      retirement outside hardship cases (a real cost lesson 43's
      liquidity logic prices), exit taxation is more complex, and for
      low current tax brackets the deduction is worth little. Strong for
      high-bracket savers who won't need the money; weak for the rest -
      a comparison, not a reflex.
    rubricNote: >
      A 5 has deferral-not-exemption, the bracket comparison and the
      liquidity cost. A 3 mentions the deduction and the lock only.
    askConfidence: true
exercise:
  id: ex1
  conceptId: pensions
  type: calculation
  prompt: >
    Net income 2,500 euros a month; the combined schemes replace 70
    percent. How many euros a month must personal saving provide to
    maintain income?
  answer: 750
  tolerance: 0
  explanation: >
    2,500 x 0.70 = 1,750 replaced; the gap is 2,500 − 1,750 = 750 euros
    a month - the number the third pillar must produce, and the earlier
    the saving starts, the cheaper each euro of it is.
sources:
  - title: "Plan d'épargne retraite (PER)"
    publisher: Service-Public.fr
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F34982
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Mes questions d'argent - public financial education portal"
    publisher: Banque de France
    url: https://www.mesquestionsdargent.fr
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Architecture with replacement rate (self-score 4+ on q1), all
  classifications correct, the PER trade-off analysis (self-score 4+ on
  q3), and the gap calculation correct.
---

# Lesson 48 - Pensions and the retirement gap

One sentence to hold on to: the French pay-as-you-go pension replaces only part of net income, the shortfall is the retirement gap, and personal long-horizon saving - started early for compounding's sake - is what fills it.

## The problem

Most French workers assume "the system" will handle retirement, without a number attached. The system will handle part of it - a knowable, estimable part - and the remainder is the single largest financial liability most households carry without ever writing it down. This lesson writes it down.

## The idea

The French public pension is pay-as-you-go (répartition): contributions taken from today's paycheques are paid out to today's pensioners the same year. There is no pot with your name on it; what you accrue is rights against tomorrow's contributors, governed by rules that demography keeps under pressure - hence the recurring reforms. On top sits a second mandatory layer of complementary schemes - Agirc-Arrco points for private-sector employees - built on the same logic.

What the two layers deliver is summarized by the replacement rate: pension as a percentage of pre-retirement income. It is typically well below 100 percent, and systematically lower for higher earners (contribution ceilings), interrupted careers, and the self-employed. Your personalized estimate - not a rumour - is available at info-retraite.fr, the official aggregator of every scheme's records; consulting it turns this lesson's abstraction into your number.

The difference between that number and the income you want is the retirement gap, and the third pillar - personal saving - exists to fill it. Lesson 5's arithmetic sets the price: at 5 percent, a euro invested at 25 becomes roughly 7 by 65; invested at 45, barely 2.7. The same gap therefore costs a modest monthly effort begun early or a punishing one begun late - time in the system's third pillar is bought with youth or with cash.

France adds a dedicated vehicle: the PER (plan d'épargne retraite). Contributions are deductible from taxable income - valuable in high brackets - but the money is locked until retirement (with hardship and first-home exceptions) and taxed on exit: the deduction is deferral, not exemption. It suits high-bracket savers funding a gap they won't touch early; for others, the flexible wrappers of the next lessons often serve better. The gap, not the tax sticker, chooses the tool.

## The terms

Pay-as-you-go (répartition) finances current pensions from current contributions. The replacement rate is pension income as a share of pre-retirement income. The retirement gap is desired income minus projected pensions. The PER is France's tax-deferred, retirement-locked savings plan.

## Worked example

Net income 2,500 euros; the official simulation projects 70 percent replacement: 1,750 euros of pension, a 750 euro monthly gap. Funding 750 a month for 25 years of retirement needs a capital in the low hundreds of thousands (the portfolio laboratory computes it precisely under stated assumptions). At 5 percent real, reaching such a sum by 65 takes roughly a few hundred euros monthly from age 30 - or several times that from 50. The gap was never optional; only its monthly price was, and the calendar sets it.

## Connections

Pensions are lesson 19's horizon logic applied to its longest and most certain use; the gap is the concrete objective lesson 41's allocation serves for most savers. Lesson 42's sequence-of-returns defence governs the gap-filling pot's final decade. Next lessons: the tax rules and wrappers - PEA, CTO, assurance-vie - that decide where this saving lives.

## Common misconceptions

"My contributions accumulate for me." They pay current pensioners; you accrue rules-based rights, which reforms can and do adjust. "Retirement planning starts in my fifties." By then each euro of gap costs several times more monthly effort than at 25 - compounding is the cheapest worker you will ever hire, and it works for whoever starts it. "The PER deduction makes it best." Deferral plus a lock; the bracket arithmetic and liquidity needs decide, not the sticker."
