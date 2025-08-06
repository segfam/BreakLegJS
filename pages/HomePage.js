import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.imageSelector = 'img[src="/images/Toolsqa.jpg"]';
  }

  async goto() {
    await super.goto('https://demoqa.com/');
  }

  async verifyTitle() {
    await this.expectTitle(/DEMOQA/);
  }

  async verifyURL() {
    await this.expectURL('https://demoqa.com/');
  }

  async verifyImageVisible() {
    const image = this.page.locator(this.imageSelector);
    await expect(image).toBeVisible();
  }
}
