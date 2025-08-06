const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
  }

  async getURL() {
    return this.page.url();
  }

  async expectTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async expectURL(expectedURL) {
    const currentURL = this.page.url();
    expect(currentURL).toBe(expectedURL);
  }
}

module.exports = { BasePage };