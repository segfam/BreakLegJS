// @ts-check
import { test, expect } from '@playwright/test';

test('verify demoQA site', async ({page}) => {
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveTitle(/DEMOQA/);
  const currentURL = page.url();
  expect(currentURL).toBe('https://demoqa.com/');
  const image = page.locator('img[src="/images/Toolsqa.jpg"]');
  await expect(image).toBeVisible();
});
