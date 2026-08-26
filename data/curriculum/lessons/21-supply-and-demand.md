---
lesson: 21
slug: supply-and-demand
title: Supply and demand
oneSentence: >
  A market price is where the quantity sellers offer meets the quantity
  buyers want - and it moves whenever either side's willingness shifts.
level: 2
prerequisites: [money, financial-markets]
concepts: [supply-demand]
visual:
  id: supply-demand-cross
  kind: chart
  requirement: required
  caption: >
    Demand falls as price rises, supply rises as price rises; the crossing
    point is the market price, and shifts of either curve move it.
prediction:
  prompt: >
    A late frost destroys a third of the apricot harvest. Predict what
    happens to the price of apricots and to the quantity actually sold, and
    name the mechanism.
  modelAnswer: >
    Price rises and quantity sold falls. Supply shifted down while buyers'
    willingness was unchanged, so at the old price more is demanded than
    exists; the shortage bids the price up until enough buyers drop out to
    match the smaller harvest.
retrieval:
  - id: q1
    conceptId: supply-demand
    type: freeRecall
    prompt: >
      Explain what demand and supply describe, why the curves slope in
      opposite directions, and what the equilibrium price is.
    modelAnswer: >
      Demand is the quantity buyers want at each possible price - falling as
      price rises, because fewer buyers find the purchase worth it. Supply is
      the quantity sellers offer at each price - rising with price, because
      higher prices make more production profitable. The equilibrium price is
      where the two quantities are equal: no shortage pushing price up, no
      surplus pushing it down.
    rubricNote: >
      A 5 explains both slopes causally and equilibrium as the no-pressure
      point. A 3 defines the curves without the reasoning.
    askConfidence: false
  - id: q2
    conceptId: supply-demand
    type: classification
    prompt: Which curve shifts first in each event?
    items:
      - text: A heatwave slashes the wheat harvest.
        options: [supply, demand]
        answer: supply
        errorMap:
          demand: causal-reasoning-error
      - text: A health trend makes oat milk fashionable.
        options: [supply, demand]
        answer: demand
        errorMap:
          supply: causal-reasoning-error
      - text: A new factory halves the cost of producing batteries.
        options: [supply, demand]
        answer: supply
        errorMap:
          demand: causal-reasoning-error
  - id: q3
    conceptId: supply-demand
    type: shortAnswer
    prompt: >
      Lesson 11 said market prices "aggregate information". Use supply and
      demand to explain what that means for a share's price.
    modelAnswer: >
      A share's price sits where willing buyers meet willing sellers. Every
      trader's information and expectations shape how much they will pay or
      accept, so news moves the curves: better prospects raise buyers'
      willingness, shifting demand up and the price with it. The price is a
      running summary of what all participants collectively believe the
      claim is worth.
    rubricNote: >
      A 5 maps information to willingness to pay/accept and to curve shifts.
      A 3 restates "prices reflect information" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: supply-demand
  type: calculation
  prompt: >
    In a simple market, quantity demanded is 120 - 2P and quantity supplied
    is 30 + P, with P the price in euros. At what price are they equal?
  answer: 30
  tolerance: 0
  explanation: >
    Set 120 - 2P = 30 + P. Add 2P to both sides: 120 = 30 + 3P. Subtract 30:
    90 = 3P, so P = 30 euros. At 30, demand = 120 - 60 = 60 and supply =
    30 + 30 = 60 - the market clears.
sources:
  - title: "ABC de l'économie - ressources pédagogiques"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Both slopes and equilibrium explained causally (self-score 4+ on q1), all
  three shifts classified correctly, the information-aggregation transfer
  (self-score 4+ on q3), and the equilibrium calculation correct.
---

# Lesson 21 - Supply and demand

One sentence to hold on to: a market price is where the quantity sellers offer meets the quantity buyers want - and it moves whenever either side's willingness shifts.

## The problem

A frost ruins a third of the apricot harvest, and within a week the price at every market stall has jumped - though no grower ever phoned another to agree on it. Who set the new price? Nobody, and everybody. The mechanism behind that answer runs every market you will ever use, from fruit to shares.

## The idea

Demand describes buyers: at each possible price, the total quantity people want to buy. It slopes downward - as price rises, purchase by purchase, more buyers judge the price not worth it and drop out. Supply describes sellers: at each price, the quantity offered for sale. It slopes upward - higher prices make more production worth doing, drawing more sellers and effort in.

Somewhere the two meet: a price at which the quantity buyers want equals the quantity sellers offer. That is the equilibrium price. Its defining property is the absence of pressure: above it, unsold surplus pushes sellers to cut prices; below it, shortage lets sellers raise them. The market price is not decreed - it is where the pushing stops.

Prices move when a curve shifts. The frost moved supply: at every price, less fruit exists. With demand unchanged, the old price now has more buyers than apricots; the shortage bids the price up until enough buyers step aside. A fashion for oat milk moves demand: at every price, more buyers - and the price climbs until supply catches up. One diagram, two moving parts, every price story.

Now connect it to lesson 11. A share's "supply and demand" are willingness to sell and to buy an existing claim, and both are driven by information and expectation. Good news raises what buyers will pay and what sellers demand to part with the claim - both curves shift, the price jumps, and the new price summarizes the market's updated collective belief. "Prices aggregate information" is supply and demand doing its ordinary work with beliefs as the input.

## The terms

Demand is the quantity buyers want at each price; supply is the quantity sellers offer at each price. The equilibrium (market) price equates the two. A shortage is demand exceeding supply at the current price; a surplus is the reverse. A curve shift is a change in willingness at every price, moving the equilibrium.

## Worked example

Give the curves numbers. Quantity demanded: 120 - 2P (each euro of price costs two buyers). Quantity supplied: 30 + P (each euro draws one more unit to market). Equal them: 120 - 2P = 30 + P. Add 2P to both sides: 120 = 30 + 3P. Subtract 30: 90 = 3P, so P = 30 euros. Check: demand 120 - 60 = 60 units, supply 30 + 30 = 60 units - the market clears at 60 units, price 30.

Now the frost: supply drops to 12 + P. New equation: 120 - 2P = 12 + P gives 108 = 3P, P = 36. Price up 20 percent, quantity down to 48 - no meeting, no decree, just the shortage doing the arithmetic.

## Connections

Supply and demand is the engine inside lesson 11's markets and the source of every price this course discusses - shares, bonds, currencies (lesson 26). It also explains lesson 5's interest rate as the price where the supply of savings meets the demand for loans, which is exactly how the central bank's lever works in lesson 23.

## Common misconceptions

"Sellers set prices." They post them, but a posted price that ignores demand meets empty tills or empty shelves; the market corrects both directions. "Rising prices are always profiteering." Often they are the shortage signal doing its job - rationing what exists and summoning more supply. "Equilibrium means prices are fair." It means quantities balance; fairness is a different question the mechanism does not answer.
