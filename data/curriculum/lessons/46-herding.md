---
lesson: 46
slug: herding
title: Herding, FOMO and performance chasing
oneSentence: >
  Following the crowd, fearing missed gains, and buying whatever rose
  recently all funnel money in after prices rise and out after they fall -
  the buy-high-sell-low pattern that makes investor returns lag the very
  funds they hold.
level: 11
prerequisites: [loss-aversion, overconfidence]
concepts: [herding]
visual:
  id: chase-cycle
  kind: diagram
  requirement: required
  caption: >
    The chase cycle: rising prices draw inflows near the top, the fall
    triggers outflows near the bottom - investor returns lag fund returns
    by the timing gap.
prediction:
  prompt: >
    A fund averages 8 percent a year over a decade. Studies keep finding
    that the average euro invested in such funds earned noticeably less
    than 8. How can the investors in a fund earn less than the fund
    itself?
  modelAnswer: >
    Because money arrives and leaves at the wrong times. Inflows surge
    after good years (buying high) and outflows after bad ones (selling
    low), so the average euro is present for less of the rise and more
    of the fall than a constant holding. The fund's return is
    time-weighted; the investors' is money-weighted - the gap is the
    price of chasing.
retrieval:
  - id: q1
    conceptId: herding
    type: freeRecall
    prompt: >
      Define herding, FOMO, recency bias and performance chasing, and
      state the trading pattern they jointly produce.
    modelAnswer: >
      Herding is buying or selling because others are; FOMO is acting on
      the fear of missing gains others are getting; recency bias is
      projecting the recent past forward as if it were the trend; and
      performance chasing is buying whatever ranked best recently. All
      four point the same way: money flows in after rises and out after
      falls - buy high, sell low, systematically - which is why measured
      investor returns lag the returns of the funds they invest in.
    rubricNote: >
      A 5 has all four with the common buy-high-sell-low output. A 3
      defines two or three.
    askConfidence: false
  - id: q2
    conceptId: herding
    type: classification
    prompt: Name the bias.
    items:
      - text: Opening a position in a theme fund because three colleagues and every feed are talking about it.
        options: [herding/FOMO, recency bias]
        answer: herding/FOMO
        errorMap:
          recency bias: factual-misunderstanding
      - text: Expecting 20 percent yearly from equities because the last three years delivered it.
        options: [recency bias, performance chasing]
        answer: recency bias
        errorMap:
          performance chasing: factual-misunderstanding
      - text: Switching each January into last year's best-ranked fund.
        options: [performance chasing, herding/FOMO]
        answer: performance chasing
        errorMap:
          herding/FOMO: factual-misunderstanding
  - id: q3
    conceptId: herding
    type: shortAnswer
    prompt: >
      "If everyone is buying, they must know something I don't." Use
      lessons 28-29 to explain the grain of truth in this - and where it
      breaks.
    modelAnswer: >
      The grain: lesson 29 says prices already contain available
      information, so the crowd's buying is partly informed and beating
      it is hard - which argues for holding the market, not for joining
      surges. The break: herds follow prices, not information; late in a
      boom the marginal buyer is buying because prices rose, a
      self-feeding loop lesson 28's bubbles run on. The crowd's wisdom
      is in the price you can always have; its madness is in the moments
      it most wants company.
    rubricNote: >
      A 5 has both the efficient-price grain and the price-following
      break. A 3 gives only one side.
    askConfidence: true
exercise:
  id: ex1
  conceptId: herding
  type: calculation
  prompt: >
    A chaser buys a hot fund at 15,000 euros after its big run. It then
    falls 20 percent; frightened, they hold on until it recovers 10
    percent from the bottom, then sell. How many euros do they walk away
    with?
  answer: 13200
  tolerance: 0
  explanation: >
    15,000 x 0.80 = 12,000; 12,000 x 1.10 = 13,200 - a 12 percent loss
    inside a fund whose long-run story may still be fine. Entry and exit
    timing, not the fund, produced the result; the fund's own investors
    on average share it.
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
  All four biases with the common pattern (self-score 4+ on q1), all
  classifications correct, the grain-and-break argument (self-score 4+ on
  q3), and the chase calculation correct.
---

# Lesson 46 - Herding, FOMO and performance chasing

One sentence to hold on to: following the crowd, fearing missed gains, and buying whatever rose recently all funnel money in after prices rise and out after they fall - the buy-high-sell-low pattern that makes investor returns lag the very funds they hold.

## The problem

A fund reports 8 percent a year for a decade; the people invested in it, on average, earned meaningfully less. No fraud, no fees unaccounted - just timing. The gap between fund returns and investor returns is behavioural finance's cleanest exhibit, and this lesson names the biases that dig it.

## The idea

Herding is acting because others act. It is rational in a forest fire and ruinous in markets, because by the time "everyone is buying" reaches you, the buying is in the price (lesson 29) - and late in booms the crowd is following prices, not information: people buy because prices rose, which raises prices, which recruits more buyers. That self-feeding loop is the engine of lesson 28's bubbles, and its emotional fuel is FOMO - the fear of missing out, which prices regret rather than risk. A missed rally leaves your plan intact; a late entry into one compounds losses against you. The asymmetry never feels that way in the moment.

Recency bias supplies the forecasts: the mind extrapolates the recent past - three great years become "the new normal", a crash becomes "the new reality" - though lesson 24's cycles and lesson 19's long-run data say the recent past is the least representative sample available. Performance chasing turns all of it into a strategy: buy whatever ranked top recently. Short-run fund performance barely persists (lesson 29's active-fund evidence), so the chaser systematically arrives after the rise and pays for someone else's returns.

Put the four together and money moves in a repeating cycle: inflows peak near tops (herd + FOMO + recency + rankings all say "in"), outflows peak near bottoms (lesson 44's panic joins the chorus). The result is measured as the gap between a fund's time-weighted return and its investors' money-weighted return. The defence is already built: lesson 43's automated monthly contribution invests on the calendar, not the feed; lesson 42's band rule trades against the cycle; and this level's self-knowledge is the reason to let them.

## The terms

Herding is trading because others trade. FOMO is acting on feared missed gains. Recency bias is over-weighting the recent past in forecasts. Performance chasing is buying recent top performers. The investor-return gap is the shortfall of money-weighted investor returns behind fund returns, produced by timed flows.

## Worked example

A theme fund triples, saturates every feed, and a chaser enters with 15,000 euros. The fund then falls 20 percent - 12,000 - and after months of dread recovers 10 percent from the bottom; relieved, the chaser exits at 12,000 x 1.10 = 13,200. A 12 percent personal loss inside a fund whose full-cycle investors did far better. Meanwhile the course's saver bought the same months' broad-market dips on autopilot at lesson 43's schedule - same market, opposite timing, no willpower involved. Multiply the chaser's round trip by a lifetime of themes and the investor-return gap stops being abstract.

## Connections

Herding closes the bias inventory begun in lesson 44: nerves (loss aversion, panic, disposition), beliefs (overconfidence, confirmation, anchoring, narrative), and now crowds (herding, FOMO, recency, chasing) - the eleven the specification names. Every defence is one already built: written allocation (41), band rebalancing (42), automated contributions (43), the decision checklist (20), calibration (45). Level 12 leaves psychology for the practical French frame: taxes, wrappers and the personal finance base.

## Common misconceptions

"The crowd must know something." The knowable part is in the price already; the rest of the surge is price-following, and it peaks at tops. "Last year's best fund is the safest choice." Short-run rankings barely persist; chasing them is buying after the rise, and the investor-return gap is its invoice. "Missing a boom is a disaster." The plan's expected return survives a missed theme; a late entry often doesn't - regret is not a risk measure."
