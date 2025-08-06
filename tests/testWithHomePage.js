import { test } from './testWithHomePage.js';
import base from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

export const test = base.test.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});
