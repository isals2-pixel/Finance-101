---
lesson: 26
slug: exchange-rates
title: Exchange rates
oneSentence: >
  An exchange rate is the price of one currency in another, set by supply
  and demand for the currencies themselves - and it silently changes the
  euro value of everything foreign you own.
level: 2
prerequisites: [money, supply-demand]
concepts: [exchange-rates]
visual:
  id: fx-seesaw
  kind: diagram
  requirement: required
  caption: >
    One rate, two sides: a weaker euro helps exporters and foreign-asset
    holders, burdens importers and travellers - symmetric and simultaneous.
prediction:
  prompt: >
    You hold US shares worth 10,000 dollars. Overnight, the shares are
    unchanged but the euro strengthens 5 percent against the dollar. What
    happened to your investment in euros?
  modelAnswer: >
    It fell about 5 percent in euro terms, with the shares themselves
    unchanged: the same dollars now convert into fewer, stronger euros.
    Foreign assets always carry this second exposure - the currency - on
    top of the asset itself.
retrieval:
  - id: q1
    conceptId: exchange-rates
    type: freeRecall
    prompt: >
      Define an exchange rate, and explain with lesson 21's tools what
      makes it move.
    modelAnswer: >
      An exchange rate is the price of one currency expressed in another -
      euros per dollar. It sits where supply meets demand for the
      currencies: demand for euros comes from buyers of European exports
      and assets; supply comes from Europeans buying foreign goods and
      assets. Shifts move it - notably interest-rate gaps (lesson 23),
      trade flows, and expectations - like any other market price.
    rubricNote: >
      A 5 defines the rate and names concrete demand/supply sources with at
      least one shifter. A 3 defines it without the mechanism.
    askConfidence: false
  - id: q2
    conceptId: exchange-rates
    type: classification
    prompt: The euro weakens sharply against other currencies. Who benefits?
    items:
      - text: A French exporter selling machines priced in euros.
        options: [helped, hurt]
        answer: helped
        errorMap:
          hurt: causal-reasoning-error
      - text: A French household buying imported electronics.
        options: [helped, hurt]
        answer: hurt
        errorMap:
          helped: causal-reasoning-error
      - text: A French investor holding US-dollar assets.
        options: [helped, hurt]
        answer: helped
        errorMap:
          hurt: causal-reasoning-error
  - id: q3
    conceptId: exchange-rates
    type: shortAnswer
    prompt: >
      A world ETF held from France contains mostly non-euro assets. What
      does currency risk add to it, and why do long-term investors usually
      accept rather than hedge it?
    modelAnswer: >
      Returns arrive in foreign currencies and are converted, so exchange
      moves add a second layer of fluctuation on top of the markets
      themselves - sometimes helping, sometimes hurting. Long-term holders
      usually accept it: currency swings have historically tended to wash
      out over long horizons rather than trend one way, hedging costs fees
      forever, and the diversification across many currencies already
      dilutes any single one.
    rubricNote: >
      A 5 names the added fluctuation and two acceptance reasons (wash-out,
      cost, or multi-currency dilution). A 3 says "currencies move too"
      without the trade-off.
    askConfidence: true
exercise:
  id: ex1
  conceptId: exchange-rates
  type: calculation
  prompt: >
    The exchange rate is 1.10 dollars per euro. A US item costs 220
    dollars. What does it cost in euros?
  answer: 200
  tolerance: 0
  explanation: >
    220 / 1.10 = 200 euros. If the euro weakened to 1.00 dollar, the same
    item would cost 220 euros - a 10 percent import price rise with nothing
    changed but the currency.
sources:
  - title: "ABC de l'économie - ressources pédagogiques"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definition with the supply-demand mechanism (self-score 4+ on q1), all
  three classifications correct, the currency-risk trade-off (self-score 4+
  on q3), and the conversion correct.
---

# Lesson 26 - Exchange rates

One sentence to hold on to: an exchange rate is the price of one currency in another, set by supply and demand for the currencies themselves - and it silently changes the euro value of everything foreign you own.

## The problem

Your US shares had a flat night: not a cent of movement in New York. Yet this morning your portfolio, in euros, is down 2 percent. Nothing happened to the companies - something happened to the euro. Every investor who owns anything beyond their own currency runs this second, quieter market, usually without watching it.

## The idea

An exchange rate is a price: how many units of one currency buy one unit of another - say, 1.10 dollars per euro. Since it is a price, lesson 21 applies whole. Demand for euros comes from everyone who needs them: foreigners buying European goods, services, bonds and shares. Supply of euros comes from Europeans buying abroad. The rate floats to where the flows balance, continuously, in the largest market on earth.

The curves shift for recognizable reasons. Interest-rate gaps: when lesson 23's ECB pays more than other central banks, holding euros earns more, demand rises, the euro strengthens - and vice versa. Trade and growth shift the transactional flows; expectations move capital ahead of events. Central banks watch closely - a weaker euro makes imports dearer, feeding lesson 7's inflation - but the euro's rate is set by the market, not decreed.

Every move cuts both ways at once. A weaker euro helps exporters - their euro-priced machines got cheaper for foreign buyers - and helps holders of foreign assets, whose dollars now convert into more euros. The same move hurts importers, travellers, and anyone buying dollar-priced goods like oil. "Strong currency good" is half the picture, always.

For your portfolio the practical face is currency risk: a world ETF held from France earns mostly in dollars, yen and pounds, and conversion adds a second layer of fluctuation on top of the markets. Long-horizon investors usually accept it: over decades currency swings have tended to wash out rather than trend, hedging costs fees forever (lesson 18's arithmetic), and holding many currencies already dilutes each one - lesson 16 again, applied to money itself.

## The terms

An exchange rate is the price of one currency in units of another. Appreciation is a currency strengthening; depreciation is it weakening. A floating rate is set by the market. Currency (exchange-rate) risk is the fluctuation foreign-currency holdings add in home-currency terms. Hedging is offsetting that exposure, at a cost.

## Worked example

The rate is 1.10 dollars per euro. A 220-dollar US gadget costs 220 / 1.10 = 200 euros. The euro then weakens to parity - 1.00 dollar per euro: the same gadget now costs 220 euros, 10 percent more, with no change in America.

Now your 10,000 dollars of US shares. At 1.10: 10,000 / 1.10 = 9,091 euros. Euro weakens to 1.00: 10,000 / 1.00 = 10,000 euros - a 10 percent euro gain from currency alone. Euro strengthens to 1.20: 10,000 / 1.20 = 8,333 euros - a loss the shares never saw. Same asset, three euro values; the difference is entirely the second market.

## Connections

Exchange rates are lesson 21's mechanism applied to lesson 1's money itself, steered at the margin by lesson 23's rate gaps, and feeding lesson 7's inflation through import prices. For the portfolio they are the currency layer of lesson 14's world ETF - a risk lesson 16's diversification already spreads across many currencies. This closes Level 2: the macro machine, end to end.

## Common misconceptions

"A strong currency is always good for the country." It cheapens imports and holidays while squeezing exporters; every move helps one side and hurts the other, simultaneously. "Exchange rates are set by governments." Major rates float; policy influences them through interest rates and credibility, not decree. "Currency risk means avoiding foreign assets." Avoiding it concentrates everything on one currency - your own - which is its own bet; broad multi-currency exposure is the diversified position."
