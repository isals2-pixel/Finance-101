---
lesson: 44
slug: loss-aversion
title: Loss aversion, panic and the disposition effect
oneSentence: >
  Losses feel about twice as strong as equal gains, and that asymmetry
  drives the two costliest investor behaviours - panic selling after
  crashes and clinging to losers - both of which turn temporary declines
  into permanent ones.
level: 11
prerequisites: [risk, long-term-investing]
concepts: [loss-aversion]
visual:
  id: loss-asymmetry
  kind: chart
  requirement: required
  caption: >
    The felt value of gains and losses: the loss branch falls about twice
    as steeply - minus 1,000 hurts more than plus 1,000 pleases.
prediction:
  prompt: >
    Offer someone a coin flip: heads wins 1,100 euros, tails loses 1,000.
    The bet has positive expected value, yet most people refuse it. What
    does that reveal about how gains and losses are felt - and what might
    it make an investor do in a crash?
  modelAnswer: >
    Losses weigh roughly twice as much as equal gains, so a 50/50 bet
    needs to pay about double before it feels fair. In a crash the same
    asymmetry screams "make the pain stop": selling ends the felt loss -
    and locks in the real one, at the worst price.
retrieval:
  - id: q1
    conceptId: loss-aversion
    type: freeRecall
    prompt: >
      Define loss aversion, and explain how it produces both panic selling
      and the disposition effect.
    modelAnswer: >
      Loss aversion is the empirical asymmetry that losses are felt about
      twice as strongly as equal gains. In crashes, the mounting felt
      loss makes selling irresistible - panic selling - which converts a
      temporary decline into a permanent one at the bottom. With
      individual holdings it works in reverse: selling a loser makes the
      loss final in the mind, so investors hold losers and sell winners
      instead - the disposition effect - keeping money where pride, not
      prospects, put it.
    rubricNote: >
      A 5 has the definition with the rough 2x magnitude and both
      behaviours' mechanisms. A 3 defines it with one behaviour.
    askConfidence: false
  - id: q2
    conceptId: loss-aversion
    type: classification
    prompt: Which bias is at work?
    items:
      - text: Selling everything in March of a crash year, planning to "get back in when things calm down".
        options: [panic selling, disposition effect]
        answer: panic selling
        errorMap:
          disposition effect: factual-misunderstanding
      - text: Selling the fund that gained 30 percent while keeping the one down 40 "until it recovers".
        options: [panic selling, disposition effect]
        answer: disposition effect
        errorMap:
          panic selling: factual-misunderstanding
      - text: Checking the portfolio daily during a downturn and feeling each red day as a fresh blow.
        options: [loss aversion amplified by checking frequency, rational monitoring]
        answer: loss aversion amplified by checking frequency
        errorMap:
          rational monitoring: misconception
  - id: q3
    conceptId: loss-aversion
    type: shortAnswer
    prompt: >
      Lesson 42 called the rebalancing rule a defence against emotion.
      Explain precisely which emotional failure it defends against, using
      this lesson's terms.
    modelAnswer: >
      In a crash, loss aversion vetoes buying the fallen asset - every
      euro moved into equities feels like walking into the fire - and
      urges selling instead. A pre-written band rule decides the trade in
      calm, before the feeling exists; executing it is compliance, not
      courage. It converts "buy low" from an act of will into a
      procedure, which is the only form in which most people ever do it.
    rubricNote: >
      A 5 names the veto on buying fallen assets and the
      decide-in-calm mechanism. A 3 says "rules beat emotions" generally.
    askConfidence: true
exercise:
  id: ex1
  conceptId: loss-aversion
  type: calculation
  prompt: >
    A 40,000 euro portfolio falls 25 percent and its owner panic-sells at
    30,000. What percentage gain must the re-invested 30,000 earn just to
    return to 40,000? (One decimal.)
  answer: 33.3
  tolerance: 0.05
  explanation: >
    40,000 / 30,000 − 1 = 33.3 percent - lesson 17's asymmetry, now
    self-inflicted: the sale made a 25 percent decline into a hole
    needing a 33 percent climb, and the climber usually re-enters late.
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
  Definition with both behaviours (self-score 4+ on q1), all
  classifications correct, the rule-as-defence link (self-score 4+ on
  q3), and the recovery calculation correct.
---

# Lesson 44 - Loss aversion, panic and the disposition effect

One sentence to hold on to: losses feel about twice as strong as equal gains, and that asymmetry drives the two costliest investor behaviours - panic selling after crashes and clinging to losers - both of which turn temporary declines into permanent ones.

## The problem

Levels 5-10 built a portfolio that needs exactly one thing from its owner: to be left alone. Level 11 is about why that is hard. The single largest gap between market returns and investor returns comes not from picking wrong funds but from selling right ones at wrong times - and the engine of that behaviour has been measured in the laboratory.

## The idea

Loss aversion is the founding result of behavioural economics: a loss is felt roughly twice as strongly as an equal gain. A fair coin flip for ±1,000 euros is refused by most people; it takes about +2,000 against −1,000 to feel acceptable. The asymmetry is universal, stable - and useful everywhere except markets, where volatility guarantees a steady supply of felt losses to overreact to.

In a crash it produces panic selling. Each red day lands with doubled force; the felt loss compounds faster than the real one; and selling offers the one thing the moment craves - the pain stops. But the sale converts lesson 17's temporary decline into a permanent loss at the worst available price, and it creates a second problem: re-entry. The panic seller must now buy back into the asset that just hurt them, which feels safe only after prices have recovered - the round trip sells low and buys high by construction.

With individual holdings the same asymmetry inverts into the disposition effect: investors sell winners quickly (banking the pleasant, final gain) and hold losers indefinitely (as long as it isn't sold, the loss doesn't feel real). The market disagrees: the loss exists at today's price whether acknowledged or not, and the holding's future depends on its prospects, not on its purchase price - a number the market has never seen. A useful test: "would I buy this today at this price?" If not, its remaining role is psychological, not financial.

Frequency of looking multiplies exposure. Because markets zig-zag daily, checking daily serves a stream of felt losses even in rising years; checking yearly serves mostly gains. The same portfolio, sampled less often, is emotionally cheaper to hold - one reason lesson 43's "check the bands once a year" is behavioural design, not laziness.

## The terms

Loss aversion is the roughly 2:1 felt asymmetry between losses and gains. Panic selling is liquidating after a sharp decline to end the felt loss. The disposition effect is the tendency to sell winners and hold losers. Anchoring on the purchase price - treating it as the holding's "true" value - is the disposition effect's fuel.

## Worked example

A 40,000 portfolio falls 25 percent to 30,000. Held, it needs the market's own recovery. Sold, the loss is fixed: returning to 40,000 requires +33.3 percent (40,000/30,000 − 1) from whenever and wherever the money re-enters - and panic sellers re-enter late, after the easiest part of recoveries. Now the disposition side: the same investor holds fund L, down 40 since purchase, and fund W, up 30. Needing cash, they sell W - the pleasant trade - though L is the fund they would never buy today. Purchase prices made both decisions; prospects made neither.

## Connections

Loss aversion is why lesson 17's "temporary versus permanent" distinction fails in practice without help, why lesson 41 caps the allocation at honest tolerance, and why lesson 42's band rule exists. Lesson 19's long horizon works only if the owner survives the drawdowns emotionally; this lesson is the survival manual's first page. Next: the biases that attack beliefs rather than nerves.

## Common misconceptions

"Strong loss feelings are a protective instinct." In markets they trigger the two moves that destroy value - selling bottoms, keeping losers. "Panic selling stops the bleeding." It makes the wound permanent and adds a badly-timed re-entry decision. "Not selling a loser avoids the loss." The loss is already in the price; refusing to see it just lets pride manage the money."
