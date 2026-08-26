---
lesson: 2
slug: income-expenses-cash-flow
title: Income, expenses and cash flow
oneSentence: >
  Cash flow is income minus expenses over a period, and keeping it reliably
  positive is the only internal source of money to save and invest.
level: 1
prerequisites: [money]
concepts: [income, expenses, cash-flow]
visual:
  id: cash-flow
  kind: flow
  requirement: reinforcement
  caption: >
    Income flows in, expenses flow out; what remains each month is cash flow,
    and only that remainder can become savings.
prediction:
  prompt: >
    Your income rises by 10 percent. Without any deliberate decision, what
    typically happens to your cash flow, and why? One or two sentences.
  modelAnswer: >
    Often nothing: expenses tend to drift up with income (lifestyle inflation),
    so the gap stays the same. Cash flow only improves if the raise is
    deliberately routed to savings before spending adjusts to it.
retrieval:
  - id: q1
    conceptId: cash-flow
    type: freeRecall
    prompt: >
      Define income, expenses and cash flow, and state how the three are
      related in one formula.
    modelAnswer: >
      Income is money flowing in over a period (salary, benefits, side income,
      later investment income). Expenses are money flowing out (fixed
      commitments plus variable spending). Cash flow = income minus expenses
      for the period; positive means money is left over, negative means you
      are drawing down savings or borrowing.
    rubricNote: >
      A 5 gives all three definitions, the formula, and what positive versus
      negative cash flow means. A 3 gives definitions without the formula or
      its interpretation.
    askConfidence: false
  - id: q2
    conceptId: expenses
    type: classification
    prompt: Classify each item.
    items:
      - text: Your monthly salary.
        options: [income, fixed expense, variable expense]
        answer: income
        errorMap:
          fixed expense: terminology-confusion
          variable expense: terminology-confusion
      - text: Rent, due every month at the same amount.
        options: [income, fixed expense, variable expense]
        answer: fixed expense
        errorMap:
          income: terminology-confusion
          variable expense: terminology-confusion
      - text: Restaurants and takeaway this month.
        options: [income, fixed expense, variable expense]
        answer: variable expense
        errorMap:
          income: terminology-confusion
          fixed expense: terminology-confusion
  - id: q3
    conceptId: cash-flow
    type: shortAnswer
    prompt: >
      Why does the savings rate say more about wealth-building than the income
      level does?
    modelAnswer: >
      Because only the gap between income and expenses becomes savings. A high
      income fully consumed builds nothing; a modest income with a steady 15
      percent savings rate builds capital every month. The savings rate
      measures the gap directly; income alone says nothing about it.
    rubricNote: >
      A 5 explains that savings come only from the gap and gives a contrast
      example. A 3 states "you can spend it all" without the mechanism.
    askConfidence: true
exercise:
  id: ex1
  conceptId: cash-flow
  type: calculation
  prompt: >
    Monthly income 2,600 euros, total monthly expenses 2,210 euros. Compute
    the cash flow, then the savings rate as a percentage of income (cash flow
    divided by income, times 100). Give the savings rate in percent.
  answer: 15
  tolerance: 0
  explanation: >
    Cash flow: 2,600 - 2,210 = 390 euros. Savings rate: 390 / 2,600 = 0.15,
    times 100 = 15 percent.
sources:
  - title: "Mes questions d'argent - portail national d'éducation budgétaire et financière"
    publisher: Banque de France
    url: https://www.mesquestionsdargent.fr/educfi
    publishedAt: "2017"
    verifiedAt: "2026-08-26"
masteryCriteria: >
  Recall of the three definitions and the formula (self-score 4+ on q1), all
  classifications correct, savings-rate reasoning (self-score 4+ on q3), and
  the calculation correct.
---

# Lesson 2 - Income, expenses and cash flow

One sentence to hold on to: cash flow is income minus expenses over a period, and keeping it reliably positive is the only internal source of money to save and invest.

## The problem

Two colleagues earn the same 2,400 euros a month. Five years later one has 14,000 euros set aside; the other has nothing and a small overdraft. Same job, same salary, same city. Whatever separates them is not income. It is the number this lesson defines.

## The idea

Your financial life is a set of flows, measured in money's unit-of-account role from lesson 1. Income is everything flowing in over a period: salary, benefits, side work, and later the income your investments pay. Expenses are everything flowing out.

Expenses split into two kinds. Fixed expenses are committed in advance and arrive at the same amount every period: rent, insurance, subscriptions, loan payments. Variable expenses change with your decisions each month: food, transport choices, clothes, going out. The split matters because they respond differently: fixed expenses change only by renegotiating or cancelling a commitment; variable expenses respond immediately to a decision.

Cash flow is the difference: income minus expenses for the period. Positive cash flow means money is left over; that remainder is the only internal source of savings and, later, of investing. Negative cash flow means you are draining past savings or borrowing, which adds interest to future expenses.

Two levers move cash flow: raise income or lower expenses. Both work, but they behave differently. Expenses respond this month; income usually moves slowly. And income has a trap: when it rises, spending tends to rise with it, a pattern called lifestyle inflation. The reliable countermeasure is to decide the savings amount first and transfer it the day income arrives - pay yourself first - so the gap is protected before spending can absorb it.

None of this works blind. A month of tracked spending turns invisible flows into numbers you can act on; most people find at least one fixed commitment they had stopped noticing.

## The terms

Income is money received over a period. An expense is money spent over a period. A fixed expense is committed in advance at a set amount; a variable expense follows current decisions. Cash flow is income minus expenses for a period. The savings rate is cash flow divided by income, expressed in percent.

## Worked example

A month in euros. Income: 2,400. Fixed expenses: rent 900, insurance 120, phone and internet 60, transport pass 90, electricity 80, subscriptions 40. Add them: 900 + 120 = 1,020; plus 60 = 1,080; plus 90 = 1,170; plus 80 = 1,250; plus 40 = 1,290. Variable expenses: groceries 400, restaurants 180, other 290, together 870. Total expenses: 1,290 + 870 = 2,160.

Cash flow: 2,400 - 2,160 = 240 euros. Savings rate: 240 / 2,400 = 0.10, so 10 percent. Now cut variable spending by 120 euros: cash flow 360, savings rate 360 / 2,400 = 15 percent. One decision moved the rate by half its size; no raise required.

## Connections

Cash flow uses money's measuring-stick job from lesson 1. It is a flow over time; the next two lessons build the matching snapshot: assets, liabilities, and net worth, which positive cash flow feeds month after month. The savings rate defined here becomes the engine of every investing lesson later.

## Common misconceptions

"A higher income automatically means savings." It does not: expenses drift up with income, and the gap - not the income - is what accumulates. "Budgeting means deprivation." Budgeting is information first: knowing the flows precedes changing any of them. "Small expenses don't matter." A 6-euro daily habit is roughly 6 x 30 = 180 euros a month, 2,160 a year - compare it to the cash flow above, not to the price tag.
