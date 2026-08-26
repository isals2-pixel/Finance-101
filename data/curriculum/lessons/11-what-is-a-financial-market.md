---
lesson: 11
slug: what-is-a-financial-market
title: What is a financial market?
oneSentence: >
  A financial market connects people with spare money to people who need it
  by trading claims - new claims raise money on the primary market, existing
  claims change hands on the secondary market.
level: 5
prerequisites: [money, opportunity-cost]
concepts: [financial-markets]
visual:
  id: market-flows
  kind: flow
  requirement: required
  caption: >
    Savers' money flows to companies through the primary market; the
    secondary market lets the resulting claims change hands, which is what
    makes anyone willing to buy them in the first place.
prediction:
  prompt: >
    You buy 100 shares of a listed company through your broker today. How
    much of your money does the company receive? Answer, then say why.
  modelAnswer: >
    Nothing. On the secondary market you buy existing shares from another
    investor; the company received money only once, when it first issued the
    shares on the primary market. Day-to-day trading moves claims between
    investors, not money into companies.
retrieval:
  - id: q1
    conceptId: financial-markets
    type: freeRecall
    prompt: >
      Explain what a financial market does, and the difference between the
      primary and the secondary market.
    modelAnswer: >
      A financial market channels money from people who have more than they
      currently need (savers) to those who need more than they have
      (companies, governments), by creating and trading claims such as shares
      and bonds. On the primary market, new claims are sold and the issuer
      receives the money. On the secondary market, existing claims trade
      between investors; the issuer receives nothing, but the ability to
      resell is what makes buying on the primary market acceptable.
    rubricNote: >
      A 5 has the channeling function, both market types, and why the
      secondary market enables the primary. A 3 defines the two markets
      without the enabling link.
    askConfidence: false
  - id: q2
    conceptId: financial-markets
    type: classification
    prompt: Primary or secondary market?
    items:
      - text: A company sells newly created shares to investors to fund a factory.
        options: [primary, secondary]
        answer: primary
        errorMap:
          secondary: terminology-confusion
      - text: You buy existing shares from another investor on the exchange.
        options: [primary, secondary]
        answer: secondary
        errorMap:
          primary: terminology-confusion
      - text: The French state issues a new government bond.
        options: [primary, secondary]
        answer: primary
        errorMap:
          secondary: terminology-confusion
  - id: q3
    conceptId: financial-markets
    type: shortAnswer
    prompt: >
      Why would nobody lend a company money for 10 years without a secondary
      market? What does the ability to resell change?
    modelAnswer: >
      Without resale, the lender's money is locked for the full 10 years
      whatever happens in their life. A secondary market lets them convert
      the claim back to money at any time by selling to someone else - it
      adds liquidity. Because buyers know they can exit, they accept
      long-term claims at all, and at better prices for the issuer.
    rubricNote: >
      A 5 names liquidity and the consequence (long-term funding becomes
      possible and cheaper). A 3 says "you can sell it" without the
      consequence for issuers.
    askConfidence: true
exercise:
  id: ex1
  conceptId: financial-markets
  type: calculation
  prompt: >
    A company issues 2,000,000 new shares at 8 euros each on the primary
    market. How much money does it raise, in euros?
  answer: 16000000
  tolerance: 0
  explanation: >
    2,000,000 x 8 = 16,000,000 euros - received once, by the company. Every
    later trade of those shares moves money between investors only.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  The channeling function with both market types (self-score 4+ on q1), all
  three classifications correct, the liquidity reasoning (self-score 4+ on
  q3), and the issuance calculation correct.
---

# Lesson 11 - What is a financial market?

One sentence to hold on to: a financial market connects people with spare money to people who need it by trading claims - new claims raise money on the primary market, existing claims change hands on the secondary market.

## The problem

You have savings you will not touch for years. A company 500 kilometres away needs millions to build a factory it will repay from a decade of production. You have never heard of each other, your amounts do not match, and you may want your money back before the decade ends. Yet your savings can fund that factory by Friday. The machine that makes this routine is the subject of this lesson.

## The idea

A financial market is the meeting place between two permanent groups: those holding more money than they currently need - households saving - and those needing more than they hold - companies investing, states financing deficits. Instead of matching individuals directly, the market has issuers sell claims: standardized promises such as shares (a slice of ownership) and bonds (a loan to be repaid with interest). Your savings buy claims; their money funds projects.

The market has two floors. On the primary market, a claim is born: the company sells newly created shares or bonds, and the money raised goes to the company. This is the moment finance actually funds the factory. On the secondary market - the stock exchange of the evening news - existing claims trade between investors. The company receives nothing from these trades; your purchase pays another investor who is exiting.

That makes the secondary market sound decorative. It is the opposite: it is what makes the primary market possible. Nobody sensible locks savings into a 10-year claim they can never exit - life intervenes. Because the secondary market lets any holder resell at any time, claims are liquid, so savers accept them in the first place, and issuers borrow longer and cheaper than any individual matching could achieve.

Prices on the secondary floor move continuously with supply and demand, aggregating what thousands of buyers and sellers believe claims are worth. In France the whole machine operates under the supervision of the AMF, the financial markets regulator, whose mandate is investor protection and orderly functioning.

## The terms

A financial market is an organized system for issuing and trading financial claims. A security is a tradable claim, such as a share or a bond. The primary market is where new securities are sold and the issuer receives the proceeds. The secondary market is where existing securities trade between investors. Liquidity is the ease of converting a security into money at a predictable price.

## Worked example

A company needs 16 million euros for its factory. It issues 2,000,000 new shares at 8 euros each on the primary market: 2,000,000 x 8 = 16,000,000 euros arrive at the company; investors collectively hold claims to 100 percent of it.

Two years later you buy 100 of those shares on the secondary market at 12 euros: you pay 100 x 12 = 1,200 euros - to the selling investor, not the company. The price rose from 8 to 12 because at 8 more people wanted to buy than sell. Your stake: 100 / 2,000,000 = 0.005 percent of the business, resellable any trading day - which is precisely why you were willing to buy it.

## Connections

The market is where lesson 9's opportunity cost gets its menu of alternatives, and where the claims of the coming lessons live: shares (lesson 12), bonds (lesson 13), and the funds that bundle them (lesson 14). Money's medium-of-exchange role from lesson 1 is what lets total strangers transact claims at scale.

## Common misconceptions

"The stock market is a casino." Casinos create no claims on anything; markets trade ownership of real businesses and real debts, and long-run returns come from those businesses' earnings, not from the table. "Companies get money every time their shares trade." Only primary issuance funds the company; daily volume is investors trading with each other. "A high share price means the company is expensive." Price per share means nothing without the number of shares and the business behind them - valuation is a later lesson's job.
