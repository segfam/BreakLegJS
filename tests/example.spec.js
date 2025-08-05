// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('verify demoQA site', async ({page}) => {
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveTitle(/DEMOQA/);
  const currentURL = page.url();
  expect(currentURL).toBe('https://demoqa.com/');
  const image = page.locator('img[src="/images/Toolsqa.jpg"]');
  await expect(image).toBeVisible();
});
