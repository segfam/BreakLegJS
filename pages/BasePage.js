import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async expectTitle(title) {
    await this.page.waitForLoadState('load');
    await expect(this.page).toHaveTitle(title);
  }

  async expectURL(expectedUrl) {
    const currentUrl = this.page.url();
    if (currentUrl !== expectedUrl) {
      throw new Error(`URL mismatch: expected "${expectedUrl}", got "${currentUrl}"`);
    }
  }
}
