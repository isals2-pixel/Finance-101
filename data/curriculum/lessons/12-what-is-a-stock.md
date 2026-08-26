---
lesson: 12
slug: what-is-a-stock
title: What is a stock?
oneSentence: >
  A stock is a slice of ownership in a company, paying its holder through
  dividends and through the rising value of the business - and its worth is
  the business, not the price tag per share.
level: 6
prerequisites: [financial-markets]
concepts: [stocks]
visual:
  id: stock-claim
  kind: diagram
  requirement: reinforcement
  caption: >
    One share is a claim on a fraction of everything the company owns and
    earns; it pays through dividends and through value growth.
prediction:
  prompt: >
    Company A's share costs 5 euros, company B's costs 500 euros. Which
    company is cheaper? One sentence with your reasoning.
  modelAnswer: >
    Unknowable from the prices alone. Price per share depends on how many
    shares exist: A with 10 billion shares is worth 50 billion, B with a
    million shares is worth 500 million. Cheapness is the whole company's
    value against its earnings, never the per-share number.
retrieval:
  - id: q1
    conceptId: stocks
    type: freeRecall
    prompt: >
      Define a stock and explain the two ways it pays its owner.
    modelAnswer: >
      A stock (share) is a unit of ownership in a company: holding it means
      owning a fraction of the business's assets and future profits. It pays
      two ways: dividends, the part of profit distributed in cash, and
      capital appreciation, the rise in the share's value as the business
      earns and grows. Neither is guaranteed - both depend on the business.
    rubricNote: >
      A 5 has the ownership definition and both return channels with the
      no-guarantee caveat. A 3 defines ownership without the channels.
    askConfidence: false
  - id: q2
    conceptId: stocks
    type: classification
    prompt: Which return channel does each event illustrate?
    items:
      - text: The company pays 2 euros per share out of its annual profit.
        options: [dividend, capital appreciation, neither]
        answer: dividend
        errorMap:
          capital appreciation: terminology-confusion
          neither: factual-misunderstanding
      - text: The share you bought at 40 euros now trades at 55.
        options: [dividend, capital appreciation, neither]
        answer: capital appreciation
        errorMap:
          dividend: terminology-confusion
          neither: factual-misunderstanding
      - text: The company issues new shares to other investors.
        options: [dividend, capital appreciation, neither]
        answer: neither
        errorMap:
          dividend: factual-misunderstanding
          capital appreciation: causal-reasoning-error
  - id: q3
    conceptId: stocks
    type: shortAnswer
    prompt: >
      Why is a shareholder paid last - after employees, suppliers, lenders
      and the tax office - and what does that position buy in exchange?
    modelAnswer: >
      Ownership is the residual claim: shareholders get what remains after
      every fixed obligation is met, which can be nothing. In exchange, the
      residual is unlimited on the upside - all growth in profits belongs to
      the owners, while lenders never get more than their agreed interest.
      Last in line is why stocks carry both the risk and the long-run return.
    rubricNote: >
      A 5 names the residual claim and the unlimited-upside trade-off. A 3
      says "shareholders take more risk" without the residual mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: stocks
  type: calculation
  prompt: >
    A company has 4,000,000 shares outstanding and its share trades at 25
    euros. What is the market value of the whole company, in euros?
  answer: 100000000
  tolerance: 0
  explanation: >
    4,000,000 x 25 = 100,000,000 euros. This total - the market
    capitalization - is what comparisons of size or cheapness must use, not
    the per-share price.
sources:
  - title: "AMF - Protection of savings, investors' information and proper functioning of financial markets"
    publisher: Autorité des marchés financiers
    url: https://www.amf-france.org/en
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Ownership definition with both return channels (self-score 4+ on q1), all
  classifications correct, the residual-claim reasoning (self-score 4+ on
  q3), and the market-value calculation correct.
---

# Lesson 12 - What is a stock?

One sentence to hold on to: a stock is a slice of ownership in a company, paying its holder through dividends and through the rising value of the business - and its worth is the business, not the price tag per share.

## The problem

Two listed companies. A's share costs 5 euros, B's costs 500. Ask around and most people call A the cheap one and B the expensive one. Both answers are meaningless - and seeing why is the fastest route to understanding what a share actually is.

## The idea

A stock - a share - is a unit of ownership in a company. The company's capital is divided into millions of identical slices; hold one and you own that fraction of everything the business has and everything it will earn. This is the claim from lesson 11 made concrete: not a promise of repayment, but a piece of the enterprise itself.

Ownership pays through two channels. Dividends are the portion of profit the company distributes in cash, per share, typically once or twice a year. Capital appreciation is the growth in the share's value as the business earns, reinvests and expands - collected only when you sell. Companies choose the mix: some pay out most profit, growth companies reinvest everything and pay nothing, letting the value channel do all the work.

The claim's legal position defines its character. A shareholder is paid last: wages, suppliers, interest to lenders and taxes all come first, and in a failure the shareholder typically gets nothing. That residual position is the price of its mirror image - the upside is uncapped. Lenders can never receive more than their agreed interest; owners keep every euro of profit growth forever. All of equity investing is this one trade: last in line, unlimited on top.

Which resolves the 5-versus-500 puzzle. A share is a fraction, so its price alone says nothing: what matters is the whole. Multiply price by the number of shares to get the company's total market value - its market capitalization - and compare that to the business's earnings. A 5-euro share of a weak business can be dear; a 500-euro share of a strong one can be a bargain.

## The terms

A stock or share is a unit of ownership in a company. A shareholder is the holder of such units. A dividend is profit distributed per share in cash. Capital appreciation is the increase in a share's value. The residual claim is the owner's right to what remains after all fixed obligations. Market capitalization is share price times shares outstanding - the value of the whole company.

## Worked example

A company has 4,000,000 shares outstanding, trading at 25 euros. The whole company's market value: 4,000,000 x 25 = 100,000,000 euros. You buy 200 shares: 200 x 25 = 5,000 euros, which is 200 / 4,000,000 = 0.005 percent of the business.

The company earns 8,000,000 euros of profit and distributes half. Dividend pool: 8,000,000 x 0.5 = 4,000,000; per share: 4,000,000 / 4,000,000 = 1 euro. Your 200 shares receive 200 euros in cash. The retained 4,000,000 stays in the business to fund growth - that is the money working behind the appreciation channel. If the share later trades at 30, your stake is worth 200 x 30 = 6,000 euros: 1,000 of appreciation on top of the 200 of dividends.

## Connections

Shares are the ownership claims traded on lesson 11's markets, and the residual position explains the risk-and-return character every later lesson builds on. Lesson 13 shows the opposite claim - the lender's fixed one. Lessons 14 and 15 bundle thousands of shares into indexes and ETFs, which is how this course ultimately holds them.

## Common misconceptions

"A low share price means a cheap company." Price per share is an arbitrary slice size; only market capitalization against earnings measures cheapness. "No dividend means the investment pays nothing." Reinvested profit compounds inside the business and arrives as appreciation - often the larger channel. "Buying shares gives money to the company." On the secondary market you pay a previous owner; the company was funded at issuance (lesson 11).
