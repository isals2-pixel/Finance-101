---
lesson: 13
slug: what-is-a-bond
title: What is a bond?
oneSentence: >
  A bond is a tradable loan - fixed coupons and repayment at maturity - whose
  price moves opposite to market interest rates and whose safety is only as
  good as the borrower.
level: 7
prerequisites: [financial-markets, interest]
concepts: [bonds]
visual:
  id: bond-flows
  kind: timeline
  requirement: required
  caption: >
    A 1,000 euro bond at 3 percent over 5 years: four fixed coupons, then the
    final coupon plus the principal back.
prediction:
  prompt: >
    You hold a bond paying a fixed 3 percent. New bonds of the same kind now
    pay 5 percent. If you had to sell yours today, would you get more or less
    than you paid - and why?
  modelAnswer: >
    Less. Nobody pays full price for 3 percent when 5 percent is available,
    so your bond's price must fall until its fixed coupons match the new 5
    percent for the buyer. Bond prices and market rates move in opposite
    directions.
retrieval:
  - id: q1
    conceptId: bonds
    type: freeRecall
    prompt: >
      Define a bond, name its three contractual elements, and state how it
      differs from a share.
    modelAnswer: >
      A bond is a tradable loan: the buyer lends the issuer money in exchange
      for fixed interest payments (coupons), repayment of the face value at a
      set date (maturity), from a defined borrower (state or company). Unlike
      a share it is a fixed claim, not ownership: the bondholder gets the
      agreed payments and no more, is paid before shareholders, and holds no
      part of the business.
    rubricNote: >
      A 5 has the loan definition, coupon/maturity/issuer, and the
      fixed-vs-residual contrast with shares. A 3 defines the loan without
      the contrast.
    askConfidence: false
  - id: q2
    conceptId: bonds
    type: classification
    prompt: Market interest rates rise sharply. What happens to each?
    items:
      - text: The price of an existing fixed-coupon bond.
        options: [rises, falls, unchanged]
        answer: falls
        errorMap:
          rises: misconception
          unchanged: factual-misunderstanding
      - text: The coupons the existing bond pays.
        options: [rise, fall, unchanged]
        answer: unchanged
        errorMap:
          rise: terminology-confusion
          fall: terminology-confusion
      - text: The rate offered by newly issued bonds.
        options: [rises, falls, unchanged]
        answer: rises
        errorMap:
          falls: factual-misunderstanding
          unchanged: factual-misunderstanding
  - id: q3
    conceptId: bonds
    type: shortAnswer
    prompt: >
      A friend says "bonds are the safe investment". Name two distinct risks
      that statement ignores.
    modelAnswer: >
      Credit risk: the issuer can fail to pay - corporate and even state
      borrowers default, which is why weaker issuers pay higher coupons. And
      interest-rate risk: if rates rise, an existing bond's price falls, so
      selling before maturity can lock in a loss. (Inflation eroding the
      fixed payments is a third.) Bonds are on average steadier than shares;
      that is not the same as safe.
    rubricNote: >
      A 5 names and explains two mechanisms (credit, rate, or inflation
      risk). A 3 names risks without mechanisms.
    askConfidence: true
exercise:
  id: ex1
  conceptId: bonds
  type: calculation
  prompt: >
    You buy a 1,000 euro bond with a 3 percent annual coupon and a 5-year
    maturity, and hold it to the end. How much do you receive in total over
    the 5 years, coupons plus repayment, in euros?
  answer: 1150
  tolerance: 0
  explanation: >
    Coupon: 1,000 x 0.03 = 30 euros a year, times 5 years = 150. At maturity
    the 1,000 face value is repaid. Total: 150 + 1,000 = 1,150 euros.
sources:
  - title: "What are interest rates and what is the difference between nominal and real interest rates?"
    publisher: European Central Bank
    url: https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/interest_rates.en.html
    publishedAt: "2016"
    verifiedAt: "2026-08-26"
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Loan definition with the share contrast (self-score 4+ on q1), all three
  rate-rise classifications correct, two risks with mechanisms (self-score
  4+ on q3), and the total-payment calculation correct.
---

# Lesson 13 - What is a bond?

One sentence to hold on to: a bond is a tradable loan - fixed coupons and repayment at maturity - whose price moves opposite to market interest rates and whose safety is only as good as the borrower.

## The problem

You hold a bond that pays a fixed 3 percent, bought a year ago. Today, identical new bonds pay 5 percent. Your bond still pays every euro it promised - nothing about it changed. Yet if you sell it today, you will take a loss. How can a promise kept lose money?

## The idea

A bond is a loan cut into tradable pieces. The issuer - a state financing its deficit, a company funding investment - borrows from many investors at once. Each bond states three things: the face value to be repaid (say 1,000 euros), the coupon, a fixed interest payment per year, and the maturity, the date the face value comes back. Buy it and you are the lender from lesson 5, with a claim you can resell on lesson 11's secondary market any day.

Against lesson 12's share, the bond is its mirror. The shareholder owns the residual - paid last, uncapped. The bondholder holds a fixed claim - paid before shareholders, capped forever at the agreed coupons. Nothing the company achieves raises a bondholder's payments; only failure to pay changes them.

That word - failure - is the first risk. Credit risk is the chance the issuer cannot pay. It varies enormously by borrower, which the market prices: solid states borrow cheaply, shaky companies must offer high coupons to find lenders. The coupon is lesson 5's risk premium made visible.

The second risk is the opening puzzle. Your bond's coupons are fixed, but the market's rates move. When new bonds pay 5 percent, nobody pays 1,000 for your 3 percent stream - your bond only sells at a discount deep enough that its fixed payments equal 5 percent on the buyer's price. Bond prices move opposite to interest rates, mechanically. Hold to maturity and the fluctuation never binds; sell early and it does. Add inflation quietly eroding fixed payments (lesson 7), and "bonds are safe" turns out to mean "steadier than shares" - a much weaker claim.

## The terms

A bond is a tradable debt security. The face value (principal) is the amount repaid at maturity. The coupon is the fixed annual interest payment. Maturity is the repayment date. The issuer is the borrower. Credit risk is the risk of issuer non-payment; interest-rate risk is the price sensitivity of existing bonds to market rate changes.

## Worked example

A 1,000 euro bond, 3 percent coupon, 5-year maturity, held to the end. Each year: 1,000 x 0.03 = 30 euros. Five coupons: 5 x 30 = 150. At maturity, 1,000 returns. Total received: 1,150 euros - exactly lesson 5's simple-interest arithmetic, because coupons do not compound unless you reinvest them.

Now the rate shock, one year in: market rates jump to 5 percent. A buyer of your bond gets 30 euros a year on whatever they pay. To earn roughly 5 percent, they will pay only about 30 / 0.05 = 600 euros for the coupon stream's running yield - in practice the repayment at maturity keeps the price higher, near 930 for four remaining years. The exact number is a later lesson's mathematics; the direction is today's point: rates up, existing bond prices down, and the longer the remaining maturity, the harder the move.

## Connections

The bond completes the pair started in lesson 12: fixed claim versus residual claim, the two building blocks every portfolio mixes. Its pricing runs on lesson 5's interest and lesson 8's real-versus-nominal logic - a fixed coupon is exactly what inflation erodes. Level 7 later adds yield, duration and credit ratings; today's inverse rule is the foundation for all of it.

## Common misconceptions

"Bonds are safe." Credit risk, interest-rate risk and inflation all bite; steadier than shares on average is not safe. "Rising rates are good for bondholders." Good for new purchases, bad for bonds already held - the price falls first. "The coupon is the return." Only if bought at face value and held to maturity; bought above or below par, the true return differs from the coupon - the subject of the yield lesson.
