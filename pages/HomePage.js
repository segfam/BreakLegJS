const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page); // Call BasePage constructor
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
    const image = this.page.locator('img[src="/images/Toolsqa.jpg"]');
    await expect(image).toBeVisible();
  }
}

module.exports = { HomePage };
