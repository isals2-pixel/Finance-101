---
lesson: 8
slug: nominal-vs-real-returns
title: Nominal vs real returns
oneSentence: >
  A nominal return counts euros; a real return counts purchasing power - and
  since real is roughly nominal minus inflation, it is the only return that
  measures actual progress.
level: 1
prerequisites: [interest, inflation]
concepts: [real-vs-nominal]
visual:
  id: nominal-real-split
  kind: chart
  requirement: required
  caption: >
    A 5 percent nominal return decomposed: 2 points feed inflation, roughly 3
    points are real gain in purchasing power.
prediction:
  prompt: >
    Your savings account pays 1 percent while inflation runs at 2 percent.
    Are you getting richer or poorer by holding it, and by roughly how much
    per year?
  modelAnswer: >
    Poorer, by about 1 percent of purchasing power per year: the real return
    is roughly 1 - 2 = -1 percent. The account balance rises in euros while
    what those euros buy shrinks faster - a nominal gain hiding a real loss.
retrieval:
  - id: q1
    conceptId: real-vs-nominal
    type: freeRecall
    prompt: >
      Define nominal return and real return, and give the approximation that
      links them.
    modelAnswer: >
      The nominal return is the percentage change in the amount of money -
      euros at the end versus euros at the start. The real return is the
      percentage change in purchasing power - what the money buys.
      Approximation: real return ≈ nominal return minus inflation. (Exactly:
      1 + real = (1 + nominal) / (1 + inflation).)
    rubricNote: >
      A 5 gives both definitions and the subtraction rule (exact form is a
      bonus). A 3 defines the two without linking them.
    askConfidence: false
  - id: q2
    conceptId: real-vs-nominal
    type: classification
    prompt: >
      Inflation is 2 percent. Classify each investment's real return.
    items:
      - text: A savings account paying 3 percent.
        options: [positive real return, negative real return, roughly zero]
        answer: positive real return
        errorMap:
          negative real return: calculation-error
          roughly zero: calculation-error
      - text: Cash earning 0 percent.
        options: [positive real return, negative real return, roughly zero]
        answer: negative real return
        errorMap:
          positive real return: misconception
          roughly zero: factual-misunderstanding
      - text: An account paying 2 percent.
        options: [positive real return, negative real return, roughly zero]
        answer: roughly zero
        errorMap:
          positive real return: misconception
          negative real return: calculation-error
  - id: q3
    conceptId: real-vs-nominal
    type: shortAnswer
    prompt: >
      Over 20 years an account exactly matches inflation every year. The
      balance grew 49 percent. What happened to the saver's wealth, and what
      does this say about which return to plan with?
    modelAnswer: >
      Nothing happened in real terms: the 49 percent nominal growth exactly
      offset the price level's 49 percent rise, so the balance buys the same
      basket as on day one. Plans and goals are in future purchases, so only
      the real return measures progress toward them; the nominal figure alone
      is an illusion of growth.
    rubricNote: >
      A 5 states zero real change and concludes that goals must be planned in
      real terms. A 3 notes "inflation ate it" without the planning
      consequence.
    askConfidence: true
exercise:
  id: ex1
  conceptId: real-vs-nominal
  type: calculation
  prompt: >
    Nominal return 5 percent, inflation 2 percent. Using the approximation
    (real ≈ nominal minus inflation), what is the real return in percent?
  answer: 3
  tolerance: 0
  explanation: >
    5 - 2 = 3 percent real. The exact value is 1.05 / 1.02 - 1 = 2.94
    percent; the subtraction is a close shortcut at low rates.
sources:
  - title: "Taux d'intérêt nominal et réel (ABC de l'économie)"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/taux-dinteret-nominal-et-reel
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "What are interest rates and what is the difference between nominal and real interest rates?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/interest_rates.en.html
    publishedAt: "2016"
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both definitions with the linking rule (self-score 4+ on q1), all three
  classifications correct, the zero-real-growth reasoning (self-score 4+ on
  q3), and the subtraction correct.
---

# Lesson 8 - Nominal vs real returns

One sentence to hold on to: a nominal return counts euros; a real return counts purchasing power - and since real is roughly nominal minus inflation, it is the only return that measures actual progress.

## The problem

Your savings account paid 3 percent this year. The balance is visibly higher; the bank confirms it. Inflation was 2 percent. Did your wealth grow by 3 percent? No - and the gap between the number you see and the growth you got has a name.

## The idea

Every return can be read in two currencies. The nominal return is the one on your statement: the percentage change in the number of euros. The real return is the change in what those euros buy - the return measured in purchasing power. Lesson 7 showed the price level moving under your feet; the real return is simply the nominal return corrected for that movement.

The correction is division: end-of-year money divided by the new price level. As a rule of thumb it collapses to subtraction - real ≈ nominal minus inflation - which works well while both numbers are small. The Banque de France and the ECB present rates exactly this way: the nominal rate is what is contracted, the real rate is what it is worth.

Why insist on the distinction? Because every financial goal is a future purchase - a flat, an education, retirement spending - and purchases are made in purchasing power, not in statement numbers. An account matching inflation for 20 years shows impressive nominal growth and delivers precisely nothing: the same basket on the last day as on the first. Worse, a 1 percent account under 2 percent inflation grows nominally while shrinking in real terms - a loss dressed as a gain, and the normal condition of cash savings in many years.

The discipline this lesson installs: whenever you see a return, an interest rate, or a projection, subtract inflation before reacting. Every serious number later in this course - bond yields, equity returns, portfolio projections - will be read through this lens.

## The terms

The nominal return is the percentage change in the monetary amount. The real return is the percentage change in purchasing power. The Fisher relation links them exactly: 1 + real = (1 + nominal) / (1 + inflation); the approximation real ≈ nominal - inflation serves for small rates.

## Worked example

You invest 10,000 euros at a 3 percent nominal return; inflation is 2 percent. End of year, in euros: 10,000 x 1.03 = 10,300. But the basket that cost 1 now costs 1.02, so the real value is 10,300 / 1.02 = 10,098. Real return: 10,098 / 10,000 - 1 = 0.98 percent. The shortcut said 3 - 2 = 1 percent - off by two hundredths.

Now the 20-year version. Nominal 2 percent, inflation 2 percent, both compounding: euros grow by 1.02^20 = 1.486, prices grow by the same 1.486. Real value: 14,860 / 1.486 = 10,000. Twenty years, 4,860 euros of visible "growth", zero real progress.

## Connections

This lesson merges lesson 5's interest with lesson 7's inflation: the inflation component lenders price in is exactly what you must subtract back out. It sharpens lesson 4's caveat - net worth is measured with a shrinking ruler - into a number. And it sets the bar for investing: an asset must beat inflation after costs to store value at all, which is the standard every later lesson applies.

## Common misconceptions

"A positive rate means I'm gaining." Only if it exceeds inflation; below it, the gain is nominal and the loss is real. "Real returns are a technicality for economists." They are the only returns your future purchases care about; the nominal figure is the technicality. "Adjusting for inflation is pessimism." It is measurement: the same correction can reveal a good year as easily as expose a bad one.
