---
lesson: 4
slug: net-worth
title: Net worth
oneSentence: >
  Net worth is total assets minus total liabilities - a snapshot of
  accumulated wealth that positive cash flow, debt repayment and asset
  growth all feed.
level: 1
prerequisites: [assets, liabilities]
concepts: [net-worth]
visual:
  id: net-worth-bar
  kind: chart
  requirement: reinforcement
  caption: >
    Assets stacked against liabilities; the difference is net worth, and its
    change over time is the honest scoreboard.
prediction:
  prompt: >
    You repay 500 euros of your mortgage this month, buying nothing and
    selling nothing. What happens to your net worth? One sentence.
  modelAnswer: >
    It rises by 500 euros (ignoring interest and value changes): liabilities
    fall by 500 while assets are unchanged, so assets minus liabilities
    increases by exactly the repaid principal.
retrieval:
  - id: q1
    conceptId: net-worth
    type: freeRecall
    prompt: >
      Define net worth, give the formula, and name the three mechanisms that
      make it grow.
    modelAnswer: >
      Net worth is total assets minus total liabilities at a moment in time -
      what would remain if everything were sold and all debts repaid. It
      grows through three mechanisms: saving positive cash flow (new assets),
      repaying debt principal (smaller liabilities), and appreciation of the
      assets you already hold.
    rubricNote: >
      A 5 gives the formula, the snapshot interpretation, and all three
      growth mechanisms. A 3 gives the formula alone.
    askConfidence: false
  - id: q2
    conceptId: net-worth
    type: classification
    prompt: Does each event raise, lower, or leave net worth unchanged (at the moment it happens)?
    items:
      - text: You move 1,000 euros from your current account to a savings account.
        options: [raises it, lowers it, unchanged]
        answer: unchanged
        errorMap:
          raises it: causal-reasoning-error
          lowers it: causal-reasoning-error
      - text: Your investments gain 800 euros in value.
        options: [raises it, lowers it, unchanged]
        answer: raises it
        errorMap:
          lowers it: factual-misunderstanding
          unchanged: causal-reasoning-error
      - text: You pay for a 1,200 euro holiday from savings.
        options: [raises it, lowers it, unchanged]
        answer: lowers it
        errorMap:
          raises it: factual-misunderstanding
          unchanged: misconception
  - id: q3
    conceptId: net-worth
    type: shortAnswer
    prompt: >
      A 28-year-old has a net worth of minus 18,000 euros because of a student
      loan. Is this a financial failure? Why or why not?
    modelAnswer: >
      Not by itself. Net worth is a snapshot; early in life it is often
      negative when a loan financed an asset the balance sheet cannot show -
      earning capacity. What matters is the trajectory: with positive cash
      flow and repayments, the number rises mechanically. Failure would be a
      flat or falling trajectory, not a negative starting point.
    rubricNote: >
      A 5 distinguishes snapshot from trajectory and names the unlisted asset
      (earning capacity). A 3 says "it's normal" without the reasoning.
    askConfidence: true
exercise:
  id: ex1
  conceptId: net-worth
  type: calculation
  prompt: >
    Assets: 8,000 euros savings, 220,000 euro flat, 15,000 euros invested.
    Liabilities: 168,000 euro mortgage balance, 2,500 euro consumer loan.
    Net worth in euros?
  answer: 72500
  tolerance: 0
  explanation: >
    Assets: 8,000 + 220,000 + 15,000 = 243,000. Liabilities: 168,000 + 2,500
    = 170,500. Net worth: 243,000 - 170,500 = 72,500 euros.
sources:
  - title: "Patrimoine net - définition"
    publisher: INSEE
    url: https://www.insee.fr/fr/metadonnees/definition/c2248
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Formula plus the three growth mechanisms (self-score 4+ on q1), all three
  event classifications correct, the trajectory reasoning (self-score 4+ on
  q3), and the calculation correct.
---

# Lesson 4 - Net worth

One sentence to hold on to: net worth is total assets minus total liabilities - a snapshot of accumulated wealth that positive cash flow, debt repayment and asset growth all feed.

## The problem

A consultant earning 100,000 euros a year feels permanently broke. A technician on 2,000 a month has quietly built 60,000 euros. Income says the consultant is richer. One number says otherwise, and it is the number this course will track from here on.

## The idea

Net worth is what would remain if you sold every asset and repaid every liability today: total assets minus total liabilities. INSEE calls it patrimoine net. It is a snapshot at a moment in time - a photograph, where lesson 2's cash flow was the film.

Because it nets the two columns from lesson 3, it moves for exactly three reasons. First, saving: positive cash flow adds new assets. Second, repayment: paying down principal shrinks the liability column - which is why a mortgage payment is partly an expense (the interest) and partly a transfer into your own net worth (the principal). Third, value changes: assets appreciating raise it, depreciating assets and market falls lower it.

The formula also exposes an illusion. Spending savings on consumption lowers net worth euro for euro; moving money between accounts changes nothing; buying an investment converts one asset into another. Only the difference between the columns matters, never the size of one column alone - someone with a 400,000 euro flat and a 390,000 euro mortgage is worth 10,000, not 400,000.

Track it on a fixed rhythm - say, the first day of each quarter - with the same rules each time. The level on any given day matters less than the trajectory across quarters: a rising line means the three mechanisms are working; a flat line under a high income means cash flow is being consumed.

## The terms

Net worth is total assets minus total liabilities at a point in time. Gross wealth is the asset total before subtracting debts. A snapshot measure describes a moment; a flow measure, like cash flow, describes a period.

## Worked example

In euros. Today - assets: savings 8,000, flat 220,000, investments 15,000. Sum: 8,000 + 220,000 = 228,000; plus 15,000 = 243,000. Liabilities: mortgage 168,000, consumer loan 2,500; sum 170,500. Net worth: 243,000 - 170,500 = 72,500.

One year later: savings 10,000, flat still 220,000, investments 18,500 - assets 248,500. Mortgage paid down to 161,000, loan cleared - liabilities 161,000. Net worth: 248,500 - 161,000 = 87,500. Change: 87,500 - 72,500 = 15,000 in a year, built from three sources: 2,000 saved, 7,000 + 2,500 = 9,500 of debt repaid, wait - 168,000 - 161,000 = 7,000 of mortgage principal plus the 2,500 loan, and 3,500 of investment growth. Check: 2,000 + 9,500 + 3,500 = 15,000.

## Connections

Net worth nets lesson 3's columns and is fed by lesson 2's cash flow. Lesson 1's caveat still applies: the euros it is measured in are a shrinking ruler, which the inflation lesson quantifies. Later, the portfolio you build lives inside the asset column, and the whole investing project is one sentence: move net worth into assets that grow faster than inflation erodes them.

## Common misconceptions

"High income means high net worth." Income is a flow; only the unconsumed part accumulates. The consultant spending 100,000 builds nothing. "Negative net worth means failure." Early on it usually means a loan financed something the balance sheet cannot list, like earning capacity; the trajectory is the verdict, not the sign. "Count the assets, the debts are separate." They are not: the mortgage belongs in the same photograph as the flat it financed.
