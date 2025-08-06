import '../loadEnv.js';
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('verify demoQA site', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.verifyTitle();
  await homePage.verifyURL();
  await homePage.verifyImageVisible();
});
