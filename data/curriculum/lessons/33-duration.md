---
lesson: 33
slug: duration
title: Duration
oneSentence: >
  Duration measures how hard a bond's price swings when yields move - longer
  maturities and lower coupons mean higher duration, and the rule of thumb
  is price change ≈ minus duration times the yield change.
level: 7
prerequisites: [bond-yield]
concepts: [duration]
visual:
  id: duration-lever
  kind: diagram
  requirement: required
  caption: >
    Duration as a lever arm: the same one-point yield move barely tilts a
    2-year bond and swings a 15-year bond hard.
prediction:
  prompt: >
    Yields rise by one percentage point. Bond A matures in 2 years, bond B
    in 15, same coupons. Which price falls more, and roughly why?
  modelAnswer: >
    B falls far more. A locks you into the now-below-market coupon for only
    2 years - a small total disadvantage - while B locks it in for 15, and
    the price must discount all those years at once. Sensitivity scales
    with how long the fixed cash flows are outstanding: that scale is
    duration.
retrieval:
  - id: q1
    conceptId: duration
    type: freeRecall
    prompt: >
      Explain what duration measures, which bond features raise it, and the
      rule of thumb linking it to price changes.
    modelAnswer: >
      Duration measures a bond's price sensitivity to yield changes -
      effectively the weighted average time until its cash flows arrive.
      It rises with maturity (more years locked in) and falls with coupon
      size (big coupons return money sooner). Rule of thumb: price change
      in percent ≈ minus duration times the yield change in points - a
      duration-7 bond loses about 7 percent when yields rise one point.
    rubricNote: >
      A 5 has the sensitivity meaning, both drivers, and the formula. A 3
      defines it without drivers or formula.
    askConfidence: false
  - id: q2
    conceptId: duration
    type: classification
    prompt: Which bond has the higher duration in each pair?
    items:
      - text: A 2-year bond vs a 15-year bond, same coupon.
        options: [the 2-year, the 15-year]
        answer: the 15-year
        errorMap:
          the 2-year: factual-misunderstanding
      - text: A 10-year bond with a 6% coupon vs a 10-year with a 1% coupon.
        options: [the 6% coupon, the 1% coupon]
        answer: the 1% coupon
        errorMap:
          the 6% coupon: causal-reasoning-error
      - text: A bond fund holding 1-3 year bonds vs one holding 15-30 year bonds.
        options: [the 1-3 year fund, the 15-30 year fund]
        answer: the 15-30 year fund
        errorMap:
          the 1-3 year fund: factual-misunderstanding
  - id: q3
    conceptId: duration
    type: shortAnswer
    prompt: >
      Why does matching a bond's duration to your horizon largely neutralize
      interest-rate risk for you?
    modelAnswer: >
      Rate moves cut both ways: higher yields drop today's price but raise
      the rate at which coupons reinvest. Near the duration point the two
      effects roughly cancel - the price loss is recovered by better
      reinvestment by the time you need the money. Holding a duration far
      longer than the horizon means the price risk dominates; far shorter,
      the reinvestment risk does.
    rubricNote: >
      A 5 names both offsetting effects and the cancellation at the
      horizon. A 3 says "hold to maturity" without the two effects.
    askConfidence: true
exercise:
  id: ex1
  conceptId: duration
  type: calculation
  prompt: >
    A bond fund has a duration of 7. Yields rise by 1 percentage point. On
    a 10,000 euro position, what is the approximate loss in euros?
  answer: 700
  tolerance: 0
  explanation: >
    Price change ≈ -7 x 1 = -7 percent. On 10,000: 10,000 x 0.07 = 700
    euros. Had yields fallen one point, the same lever gives a ~700 euro
    gain - duration works both ways.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Sensitivity meaning with drivers and formula (self-score 4+ on q1), all
  pairs ordered correctly, the horizon-matching reasoning (self-score 4+
  on q3), and the loss approximation correct.
---

# Lesson 33 - Duration

One sentence to hold on to: duration measures how hard a bond's price swings when yields move - longer maturities and lower coupons mean higher duration, and the rule of thumb is price change ≈ minus duration times the yield change.

## The problem

The same one-point rate rise hits two bond funds. One dips 2 percent; the other crashes 15 - both "safe" government bond funds, both hit by the identical event. Whoever bought the second fund thinking "bonds are bonds" met the number this lesson is about.

## The idea

Lesson 32 established that prices move opposite to yields. The next question is how much - and the answer differs enormously across bonds. The measure is duration: in essence, the weighted average time until a bond's cash flows arrive, and in practice, the lever arm that converts a yield change into a price change.

Why time drives sensitivity: when yields rise one point, an existing bond's disadvantage is its below-market coupons - and the size of that disadvantage is how long you are stuck with them. Two remaining years of slightly-worse coupons cost little; fifteen years cost a lot, and the price must discount the whole stretch immediately. So duration rises with maturity. It falls with coupon size: fat coupons hand money back early (reinvestable at the new rates), pulling the average arrival time - and the sensitivity - down. A zero-coupon bond, paying everything at the end, has duration equal to its full maturity: the extreme case.

The working formula is compact: price change in percent ≈ minus duration times the yield change in percentage points. Duration 7, yields up 1 point: about minus 7 percent. Yields down 1: plus 7. Every bond fund publishes this one number, and it tells you more about the fund's risk than its name does - "government bonds" spans duration 1 funds that barely notice rate shocks and duration 20 funds that swing like equities.

The strategic use is matching. Rate moves hurt prices but help reinvestment; near the point where your horizon equals the duration, the two effects roughly cancel. Money needed in 3 years belongs in low-duration bonds whatever yields do next; a 20-year saver can hold long durations and let reinvestment do the repairing.

## The terms

Duration is a bond's price sensitivity to yield changes, approximately the weighted average time to its cash flows, in years. Interest-rate risk is the price fluctuation duration measures. A zero-coupon bond pays only at maturity and has duration equal to maturity. Duration matching aligns bond duration with the investment horizon.

## Worked example

A bond fund, duration 7, position 10,000 euros. Yields rise 1 point: price change ≈ -7 x 1 = -7 percent, so 10,000 x 0.07 = 700 euros of loss. A short-duration fund (duration 2) on the same day: -2 percent, 200 euros. The 15-year fund from the opening (duration ≈ 15): -15 percent, 1,500 euros - same news, seven times the first fund's damage.

Now the other direction: yields fall 1 point. The duration-7 fund gains about 700 euros. Duration is symmetric leverage on rate moves - which is why long bonds are not "safer bonds" but a different instrument: powerful diversifiers when rates fall in a crisis, painful holdings when inflation forces rates up, as lesson 7's and 23's chains predict.

## Connections

Duration quantifies lesson 13's "the longer the remaining maturity, the harder the move" and gives lesson 23's rate decisions their exact price impact on bond holdings. It is the bond-side face of lesson 17's risk-as-spread, and the number to check on any bond ETF before assuming "bonds" means "stable" - the portfolio lessons of Level 10 use it directly. Credit risk, the other axis of bond risk, is next.

## Common misconceptions

"All bonds react the same to rate moves." Sensitivity spans an order of magnitude; duration, not the word "bond", sets it. "Long bonds are safer because governments repay them." Repayment risk and price risk are different axes - a 30-year government bond is credit-safe and rate-wild. "Duration only matters to traders." It decides which bond fund fits which horizon - the most practical single number in fixed income for a long-term saver."
