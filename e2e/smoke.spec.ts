// Smoke tests over the built static site (SPEC_V2 §82): the app loads, the
// lesson flow enforces its stage order, and every top-level page renders.
import { expect, test } from '@playwright/test';

test('home shows the Today card and session modes', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Finance Academy' })).toBeVisible();
  await expect(page.getByText('Time today:')).toBeVisible();
  await expect(page.getByText('Lesson 1:')).toBeVisible();
  await expect(page.getByText('Take the baseline')).toBeVisible();
});

test('quick mode shows exactly one action', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'a few minutes' }).click();
  await expect(page.getByText('The minimum viable day')).toBeVisible();
  await expect(page.getByRole('link', { name: 'One transfer question' })).toBeVisible();
});

test('lesson flow: reading first, prediction locks before the model answer', async ({ page }) => {
  await page.goto('/learn/what-is-money/');
  // Stage 1: the reading, with its completion gate.
  const done = page.getByRole('button', { name: /Done reading/ });
  await expect(done).toBeVisible();
  await done.click();
  // Stage 2: prediction. The model answer must not be visible pre-lock.
  const textbox = page.getByRole('textbox');
  await expect(textbox).toBeVisible();
  await expect(page.getByText(/model answer/i)).toHaveCount(0);
  await textbox.fill('My prediction: money must be widely accepted, hold value, and price goods.');
  await page.getByRole('button', { name: /Lock/ }).click();
  await expect(page.getByText(/model/i).first()).toBeVisible();
});

test('review, practice, labs, glossary, progress, exam and IPS pages render', async ({ page }) => {
  for (const [path, marker] of [
    ['/review/', /review/i],
    ['/practice/', /Transfer practice/],
    ['/labs/', /Labs/],
    ['/labs/portfolio/', /portfolio/i],
    ['/labs/behaviour/', /Behavioural simulator/],
    ['/labs/decisions/', /decision lab/i],
    ['/labs/arguments/', /Argument analysis/],
    ['/labs/personal/', /Personal finance lab/],
    ['/ips/', /Investment Policy Statement/],
    ['/glossary/', /Glossary/],
    ['/progress/', /progress|competency|baseline/i],
    ['/exam/', /Final exam/],
    ['/teachback/', /Teach-back/],
    ['/settings/', /settings|backup/i],
  ] as const) {
    await page.goto(path);
    await expect(page.getByText(marker).first()).toBeVisible();
  }
});

test('tax lesson shows the dated education-not-advice notice', async ({ page }) => {
  await page.goto('/learn/investment-taxation/');
  await expect(page.getByText('Education, not advice.').first()).toBeVisible();
  await expect(page.getByText(/last verified on 2026/).first()).toBeVisible();
});
