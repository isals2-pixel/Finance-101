---
lesson: 24
slug: fiscal-policy
title: Fiscal policy
oneSentence: >
  Fiscal policy is the state steering the economy through taxes and
  spending; the gap between them is the deficit, financed by issuing bonds
  that markets price like any other debt.
level: 2
prerequisites: [gdp, bonds]
concepts: [fiscal-policy]
visual:
  id: fiscal-flows
  kind: flow
  requirement: required
  caption: >
    Taxes in, spending out; the deficit is the gap, and government bonds
    bridge it - adding to the debt stock that markets price.
prediction:
  prompt: >
    A recession hits: incomes fall and unemployment rises. Without any new
    law, what happens automatically to the state's deficit, and why?
  modelAnswer: >
    It widens by itself. Tax receipts fall with incomes and profits while
    spending on unemployment support rises - both automatic. This built-in
    cushioning of demand is why deficits swell in recessions even before
    governments decide anything.
retrieval:
  - id: q1
    conceptId: fiscal-policy
    type: freeRecall
    prompt: >
      Define fiscal policy, deficit and public debt, and explain how the
      three are related.
    modelAnswer: >
      Fiscal policy is the government's use of taxation and spending to
      provide services and steer demand. The deficit is one year's gap:
      spending minus revenue. Public debt is the stock of all past deficits
      still outstanding, financed by issuing government bonds (lesson 13).
      Each year's deficit adds to the debt; the debt costs interest, which
      itself becomes spending.
    rubricNote: >
      A 5 has all three definitions plus the flow-to-stock link and the
      interest feedback. A 3 defines them without the links.
    askConfidence: false
  - id: q2
    conceptId: fiscal-policy
    type: classification
    prompt: Fiscal policy or monetary policy?
    items:
      - text: Parliament cuts income tax to support demand.
        options: [fiscal, monetary]
        answer: fiscal
        errorMap:
          monetary: terminology-confusion
      - text: The ECB raises its deposit rate.
        options: [fiscal, monetary]
        answer: monetary
        errorMap:
          fiscal: terminology-confusion
      - text: The state launches a public investment programme.
        options: [fiscal, monetary]
        answer: fiscal
        errorMap:
          monetary: terminology-confusion
  - id: q3
    conceptId: fiscal-policy
    type: shortAnswer
    prompt: >
      Why is "a state must balance its budget like a household" a misleading
      comparison? Give two structural differences.
    modelAnswer: >
      A state borrows across generations without a retirement date, rolling
      debt over indefinitely as long as markets lend - households cannot.
      And its spending feeds back into its own revenue: public outlays
      become private incomes that are taxed, so cutting spending also cuts
      receipts. What disciplines states instead is the market price of
      their bonds and the debt's interest burden relative to GDP growth.
    rubricNote: >
      A 5 gives two structural differences and names the real constraint. A
      3 says "states can borrow more" without mechanisms.
    askConfidence: true
exercise:
  id: ex1
  conceptId: fiscal-policy
  type: calculation
  prompt: >
    A state collects 1,180 billion euros of revenue and spends 1,310
    billion in a year. What is the deficit, in billions?
  answer: 130
  tolerance: 0
  explanation: >
    Deficit = spending - revenue = 1,310 - 1,180 = 130 billion euros,
    financed by issuing government bonds and added to the public debt
    stock.
sources:
  - title: "ABC de l'économie - ressources pédagogiques"
    publisher: Banque de France
    url: https://abc-economie.banque-france.fr/
    publishedAt: "n.d."
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Definitions with the flow-stock-interest links (self-score 4+ on q1), all
  classifications correct, the household-analogy critique (self-score 4+ on
  q3), and the deficit calculation correct.
---

# Lesson 24 - Fiscal policy

One sentence to hold on to: fiscal policy is the state steering the economy through taxes and spending; the gap between them is the deficit, financed by issuing bonds that markets price like any other debt.

## The problem

France runs a deficit almost every year, and has for decades - behaviour that would bankrupt any household. Yet lenders worldwide queue up to buy its bonds at modest rates. Either the markets are fools, or a state's budget is a different animal from a household's. It is the second - and understanding why matters for the bonds in your future portfolio.

## The idea

Fiscal policy is the government's side of macroeconomic steering: what it taxes and what it spends. Taxes withdraw purchasing power from households and firms; spending on services, transfers and investment injects it back. Both flows are huge relative to lesson 22's GDP - in France, roughly half of it - so their balance moves total demand the way lesson 23's rates do, from the budget side.

One year's gap between spending and revenue is the deficit (or, rarely, surplus). It is financed the lesson 13 way: the Treasury issues government bonds, and investors - funds, banks, savers - lend against future tax revenue. The accumulated stock of past deficits still outstanding is the public debt, whose interest is itself a spending line, feeding back into next year's budget.

Part of fiscal policy runs on autopilot. In a recession, tax receipts fall with incomes while unemployment support rises - the deficit widens automatically, cushioning demand exactly when it weakens. Economists call these automatic stabilizers; they act faster than any law. Deliberate packages - stimulus, austerity - are the discretionary layer on top.

Why is the household comparison misleading? A household must repay before it dies; a state rolls debt over indefinitely, borrowing across generations, as long as markets keep lending. And a state's spending returns partly as its own revenue - public wages and contracts become taxed private incomes. The real constraints are different ones: the price markets charge for its bonds, and whether debt grows faster than the GDP that services it. When markets doubt a state, they do not send a bailiff - they raise its bond yields.

## The terms

Fiscal policy is the use of government taxation and spending to steer the economy. The budget deficit is one year's spending minus revenue; the public debt is the outstanding stock of past borrowing. Automatic stabilizers are the tax and transfer flows that cushion the cycle without new decisions. Sovereign (government) bonds finance the deficit.

## Worked example

A state's year, in billions of euros: revenue 1,180, spending 1,310. Deficit: 1,310 - 1,180 = 130 billion, financed by bond issuance. Debt before: 3,100 billion; after: 3,230.

Now the interest feedback. At an average 2 percent rate, the debt costs 3,230 x 0.02 = 64.6 billion a year - already half the deficit. If bond markets lose confidence and new borrowing costs 3 percent, the interest line grows toward 3,230 x 0.03 = 96.9 billion as debt rolls over: 32 billion of extra annual spending, no new services bought. That squeeze - not a bailiff - is how markets discipline states.

## Connections

Fiscal policy is the second macro lever beside lesson 23's monetary policy - government versus central bank, budget versus interest rate, both working through lesson 21's demand. It issues the government bonds of lesson 13, whose safety depends on exactly the debt dynamics above. The cycle both levers respond to is next.

## Common misconceptions

"A state budget works like a household budget." States roll debt indefinitely and their spending feeds their own tax base; the binding limits are bond yields and debt-to-GDP dynamics, not a payoff date. "Deficits are always irresponsible." In recessions they are partly automatic and partly the cushion that stops the fall; the judgment is about levels and trends, not existence. "Government bonds are risk-free because states can't fail." States have defaulted and can; 'safe' is a spectrum priced by markets - which is why French and German yields differ."
