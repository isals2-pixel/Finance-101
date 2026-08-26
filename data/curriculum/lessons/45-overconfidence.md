---
lesson: 45
slug: overconfidence
title: Overconfidence, confirmation and stories
oneSentence: >
  Investors systematically overrate their knowledge and timing, feed the
  error by collecting only confirming evidence and compelling narratives,
  and pay for it in trading costs - which is why calibration, not
  confidence, is what this course trains.
level: 11
prerequisites: [investment-decision, fees]
concepts: [overconfidence]
visual:
  id: overconfidence-cost
  kind: chart
  requirement: required
  caption: >
    Trading activity against realized returns: the most active,
    most confident traders earn the least after costs - the quiet
    portfolio wins.
prediction:
  prompt: >
    In studies of brokerage accounts, which group earned lower net
    returns: the investors who traded most, or those who traded least -
    and by roughly what mechanism?
  modelAnswer: >
    The most active traders earned less - in the classic studies by
    several points a year. Each confident switch paid spreads, fees and
    taxes and was, on average, no better informed than the market price
    it traded against. Confidence generated activity; activity generated
    cost; the information advantage never existed.
retrieval:
  - id: q1
    conceptId: overconfidence
    type: freeRecall
    prompt: >
      Define overconfidence and confirmation bias, and trace the chain
      from confidence to lower net returns.
    modelAnswer: >
      Overconfidence is systematically rating one's knowledge, forecasts
      and timing above their measured accuracy. Confirmation bias is
      seeking and weighting evidence that supports an existing view while
      discounting the contrary - which is how overconfidence survives
      contact with reality. The chain: confidence produces conviction
      trades; each trade pays lesson 27's spread plus fees and taxes and
      competes against lesson 29's market price; with no real information
      edge the costs are pure subtraction, so the most active accounts
      earn the least.
    rubricNote: >
      A 5 has both definitions and the full confidence-activity-cost
      chain. A 3 defines them without the chain.
    askConfidence: false
  - id: q2
    conceptId: overconfidence
    type: classification
    prompt: Name the bias.
    items:
      - text: After buying a stock, reading only analyses that agree it will rise.
        options: [confirmation bias, anchoring]
        answer: confirmation bias
        errorMap:
          anchoring: factual-misunderstanding
      - text: Refusing to sell below 50 euros because "that's what I paid", though nothing about the business supports that price.
        options: [anchoring, narrative fallacy]
        answer: anchoring
        errorMap:
          narrative fallacy: factual-misunderstanding
      - text: Buying because the company's founder story is irresistible, without touching the price or the numbers.
        options: [narrative fallacy, confirmation bias]
        answer: narrative fallacy
        errorMap:
          confirmation bias: factual-misunderstanding
  - id: q3
    conceptId: overconfidence
    type: shortAnswer
    prompt: >
      This course asks for a confidence rating before revealing each
      answer. Connect that design to this lesson: what is it measuring,
      and what should a persistent gap between confidence and accuracy
      change?
    modelAnswer: >
      It measures calibration - whether felt certainty tracks actual
      accuracy. A persistent gap (high confidence, mediocre accuracy) is
      overconfidence made visible in your own data, and it should shrink
      both the trust you place in your market judgments and the actions
      built on them: fewer conviction moves, more rule-following. The
      dashboard's calibration number is this lesson, measured on you.
    rubricNote: >
      A 5 names calibration and draws the behavioural consequence. A 3
      explains the rating without consequence.
    askConfidence: true
exercise:
  id: ex1
  conceptId: overconfidence
  type: calculation
  prompt: >
    A confident trader's activity costs 1.5 percent of a 50,000 euro
    portfolio yearly (spreads, fees, taxes); a rule-based holder of the
    same portfolio pays 0.2 percent. How many euros does confidence cost
    in one year?
  answer: 650
  tolerance: 0
  explanation: >
    50,000 x (0.015 − 0.002) = 50,000 x 0.013 = 650 euros a year - before
    any timing mistakes, and compounding against the trader every year
    the confidence persists (lesson 18's arithmetic).
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
  Both definitions with the cost chain (self-score 4+ on q1), all
  classifications correct, the calibration link (self-score 4+ on q3),
  and the cost calculation correct.
---

# Lesson 45 - Overconfidence, confirmation and stories

One sentence to hold on to: investors systematically overrate their knowledge and timing, feed the error by collecting only confirming evidence and compelling narratives, and pay for it in trading costs - which is why calibration, not confidence, is what this course trains.

## The problem

Lesson 44's biases attack in crashes; this lesson's attack in calm - they feel like diligence, research and insight. Most drivers rate themselves above average; most investors rate their judgment the same way, and unlike driving, markets bill for the error annually, in cash.

## The idea

Overconfidence is the measured gap between how sure people feel and how right they are. Ask for 90-percent-confident estimate ranges and the truth lands inside them barely half the time. In markets the bias has a price tag: the classic brokerage-account studies found the most active traders trailed the least active by several points a year. The mechanism is lessons 27-29 in miniature - every confident switch pays a spread, fees and possibly tax, and trades against a price that already contains the news; without a genuine edge, activity is pure cost. Confidence doesn't just fail to add return; it generates the transactions that subtract it.

Three companions keep the confidence alive. Confirmation bias: once a view exists, evidence is gathered to fit it - the search is "why this fund is great", never "what would prove me wrong", so research effort increases conviction rather than accuracy. Anchoring: the first number seen - purchase price, an old high, a price target - becomes a reference the mind adjusts from insufficiently; "it was at 80, at 50 it's cheap" is an anchor talking, not a valuation (the market price never met your anchor). The narrative fallacy: a coherent story - visionary founder, inevitable technology - feels like evidence and compresses uncertainty into false clarity. Stories are exactly what spreads fastest and is priced in first (lesson 29); returns come from surprises relative to the story, which the story cannot contain.

The counter-programme is structural, not willpower. Calibration: record confidence before outcomes and confront the gap - this course's confidence ratings and dashboard do it automatically. Pre-commitment: lesson 20's checklist and lesson 43's written rules decide before conviction can. Falsification: one deliberate question - "what would change my mind?" - asked before acting. And the null hypothesis of the whole course: the broad market portfolio is what confidence has to beat, after costs, to justify any active move; lesson 29 says it rarely does.

## The terms

Overconfidence is the systematic excess of felt certainty over measured accuracy. Calibration is the agreement between stated confidence and hit rate. Confirmation bias is selective collection of supporting evidence. Anchoring is over-reliance on an initial reference number. The narrative fallacy is mistaking a coherent story for evidence.

## Worked example

Two owners of the same 50,000 euro portfolio. The confident one acts on views eight times a year; spreads, fees and taxes total 1.5 percent annually. The rule-based one trades on lesson 42's band, costing 0.2 percent. Difference: 50,000 x 0.013 = 650 euros a year - before assuming a single mistimed trade, and lesson 18 showed what a recurring 1.3 percent does over decades. The confident trader also holds a stock bought at 50, now 35, "cheap versus what I paid" (anchor), supported by three bullish articles (confirmation) about its visionary CEO (narrative). Three biases, one position, and the test from lesson 44 - "would I buy it today?" - goes unasked.

## Connections

Overconfidence is why lesson 25's timing evidence and lesson 29's index findings fail to change behaviour on their own - everyone files themselves under "exception". The course's confidence ratings, calibration metric and self-scored answers exist to make your own gap visible (SPEC §27, §42). Next lesson: the biases that arrive from other people - herds, fear of missing out, and the chase after past performance.

## Common misconceptions

"Confidence signals skill." Only calibration does; confidence without it is a cost generator. "More research means more objectivity." Unstructured research is confirmation bias with a bibliography; objectivity starts at "what would prove me wrong?". "A great story is great evidence." The story is public, priced, and free; the surprise that moves the price is by definition outside it."
