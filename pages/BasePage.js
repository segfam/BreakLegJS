export class BasePage {
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

  async isElementVisible(locator) {
  try {
    return await locator.isVisible();
  } catch (error) {
    console.error('Visibility check failed:', error);
    return false;
  }
}

}
