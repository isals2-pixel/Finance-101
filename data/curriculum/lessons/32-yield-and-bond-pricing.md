---
lesson: 32
slug: yield-and-bond-pricing
title: Yield and bond pricing
oneSentence: >
  A bond's yield is the return implied by its actual price, not its coupon -
  and because the coupons are fixed, price and yield are two readings of the
  same number, moving strictly in opposite directions.
level: 7
prerequisites: [bonds]
concepts: [bond-yield]
visual:
  id: price-yield-seesaw
  kind: diagram
  requirement: required
  caption: >
    The seesaw: fixed coupons in the middle; when the price paid falls, the
    yield earned rises - the same cash flows read from a different price.
prediction:
  prompt: >
    A bond pays a fixed 30 euros a year on a 1,000 euro face value. You can
    buy it today for 800 euros. Is your return 3 percent? Higher? Lower?
    Reason it out.
  modelAnswer: >
    Higher. The 30 euro coupon on YOUR 800 euro price is already 3.75
    percent - and at maturity you are repaid the full 1,000 for something
    you paid 800, adding a built-in 200 euro gain. The yield to maturity
    counts both effects; the 3 percent coupon rate describes the original
    face value, not your deal.
retrieval:
  - id: q1
    conceptId: bond-yield
    type: freeRecall
    prompt: >
      Distinguish the coupon rate, the current yield, and the yield to
      maturity of a bond bought below face value.
    modelAnswer: >
      The coupon rate is the fixed annual payment as a percent of face
      value - set at issue, never changing. The current yield is the same
      coupon divided by the actual market price - higher than the coupon
      rate when the bond trades below par. The yield to maturity is the
      full annualized return of buying at today's price and holding to
      repayment: coupons plus the pull back to face value, the only measure
      that captures the whole deal.
    rubricNote: >
      A 5 defines all three and orders them correctly for a discount bond.
      A 3 defines two of the three.
    askConfidence: false
  - id: q2
    conceptId: bond-yield
    type: classification
    prompt: A bond trades below its face value (at a discount). Order the measures.
    items:
      - text: Its current yield versus its coupon rate.
        options: [current yield is higher, current yield is lower, they are equal]
        answer: current yield is higher
        errorMap:
          current yield is lower: calculation-error
          they are equal: factual-misunderstanding
      - text: Its yield to maturity versus its current yield.
        options: [YTM is higher, YTM is lower, they are equal]
        answer: YTM is higher
        errorMap:
          YTM is lower: causal-reasoning-error
          they are equal: factual-misunderstanding
      - text: If the market price rises toward face value, its yield to maturity...
        options: [falls, rises, is unchanged]
        answer: falls
        errorMap:
          rises: misconception
          is unchanged: factual-misunderstanding
  - id: q3
    conceptId: bond-yield
    type: shortAnswer
    prompt: >
      "Bond yields rose today" - translate that headline into what actually
      happened to bond holders and to new buyers, and why it is the same
      event.
    modelAnswer: >
      Prices of existing bonds fell - holders marked losses - while new
      buyers now lock in higher returns at the lower prices. It is one
      event because the cash flows are fixed: any price fall mechanically
      raises the return implied for whoever buys at that price. Yield up
      and price down are the same fact stated from the two sides of the
      trade.
    rubricNote: >
      A 5 states both perspectives and the fixed-cash-flow mechanism. A 3
      says "prices fell" without the two-sided reading.
    askConfidence: true
exercise:
  id: ex1
  conceptId: bond-yield
  type: calculation
  prompt: >
    A bond pays a 40 euro annual coupon and trades at 800 euros. What is its
    current yield, in percent?
  answer: 5
  tolerance: 0
  explanation: >
    40 / 800 = 0.05, so 5 percent - versus a 4 percent coupon rate on the
    1,000 face value. The discount price raised the yield; the yield to
    maturity would be higher still, adding the pull from 800 back to 1,000.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
  - title: "Taux d'intérêt nominal et réel (ABC de l'économie)"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/taux-dinteret-nominal-et-reel
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Three yield measures distinguished (self-score 4+ on q1), all orderings
  correct, the two-sided headline translation (self-score 4+ on q3), and
  the current-yield calculation correct.
---

# Lesson 32 - Yield and bond pricing

One sentence to hold on to: a bond's yield is the return implied by its actual price, not its coupon - and because the coupons are fixed, price and yield are two readings of the same number, moving strictly in opposite directions.

## The problem

Lesson 13 left a loose end: your 3 percent bond, in a 5 percent world, "sells at a discount deep enough that its fixed payments equal 5 percent on the buyer's price". Today that sentence becomes arithmetic - and with it, every bond headline you will ever read becomes translatable.

## The idea

A bond's cash flows are frozen at issue: the coupons and the face value repayment never change. What changes is the price a buyer pays for that frozen stream. Return, therefore, is a function of price - and yield is the name for return read off the actual price.

Three measures, in rising order of honesty. The coupon rate is the fixed coupon as a percent of face value: 30 on 1,000 is 3 percent, forever, whatever happens. The current yield divides the same coupon by the market price: pay 800 for that bond and 30 / 800 = 3.75 percent - your income return on your money. The yield to maturity (YTM) completes the picture: buying at 800 also means being repaid 1,000 at the end, and spreading that built-in 200 euro gain over the remaining years, on top of the coupons, gives the true annualized return of the whole deal. YTM is the number professionals mean by "the yield", and the one quoted on every bond screen.

Now the inverse law of lesson 13, made mechanical. The cash flows being fixed, price and yield are the same object viewed from opposite ends: pay less, earn more; pay more, earn less - by arithmetic, not by market mood. When market rates rise, buyers demand today's higher yield, which they can only get from existing bonds at lower prices; the price falls until the YTM matches the market. Every headline decodes accordingly: "yields rose" equals "prices fell" equals "holders lost, new buyers now lock in more".

One graceful consequence: a bond bought and held to maturity earns its purchase YTM regardless of every price swing in between - the fluctuations of lesson 17 are only real for the seller.

## The terms

The coupon rate is the fixed annual coupon as a percent of face value. The current yield is the coupon divided by the market price. The yield to maturity (YTM) is the annualized total return of buying at the current price and holding to repayment. Par means price equal to face value; a discount is a price below par, a premium above.

## Worked example

The lesson 13 bond, one year on: 1,000 face, 30 euro coupon, four years left, market rates at 5 percent. Try the price 930: current yield 30 / 930 = 3.23 percent - still short of 5. But the buyer at 930 also gains 1,000 - 930 = 70 euros at maturity, roughly 70 / 4 = 17.50 a year. Total yearly earnings ≈ 30 + 17.50 = 47.50 on 930 invested: 47.50 / 930 = 5.1 percent. So near 930, the bond competes with the 5 percent world - the discount did exactly the work lesson 13 promised. (The exact YTM computation compounds these flows; the approximation shows the machinery.)

Reverse check: at par (1,000), the YTM is simply the coupon rate, 3 percent - which is why newly issued bonds carry coupons at the market rate: they are born at par.

## Connections

Yield turns lesson 13's inverse rule into numbers and plugs bonds into lesson 23: the policy rate anchors the yields all bonds must match, which is why tightening reprices every bond simultaneously. Lesson 8 applies on top - subtract expected inflation from a yield before celebrating it. Next lesson measures how hard each bond swings when yields move.

## Common misconceptions

"The coupon is the return." Only at par; at any other price the yield differs, and the YTM is the deal's true rate. "Falling prices are bad news for all bond investors." Bad for sellers, good for buyers and reinvested coupons - a long-term accumulator of bonds benefits from higher yields. "Yield quotes are predictions." A YTM is a promise-conditional arithmetic - it assumes payment in full; whether the promise holds is credit risk, two lessons ahead."
