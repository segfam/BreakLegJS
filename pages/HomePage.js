import { BasePage } from './BasePage.js';
import { BASE_URL } from '../config.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.imageSelector = 'img';
  }

  async goto() {
    await super.goto(BASE_URL);
  }

  async goto() {
    await super.goto('https://demoqa.com');
  }

  async verifyTitle() {
  const title = await this.getTitle();
  console.log('Page Title:', title); // Debug line
  if (!title.includes('DEMOQA')) {
    throw new Error('Title does not include DEMOQA');
  }
}

  async verifyURL() {
    const url = await this.getURL();
    if (!url.includes('demoqa')) {
      throw new Error('URL does not include demoqa');
    }
  }

  async verifyImageVisible() {
  // Targeting the image with src attribute '/images/Toolsqa.jpg'
  const image = this.page.locator('img[src="/images/Toolsqa.jpg"]');
  const visible = await this.isElementVisible(image);
  if (!visible) {
    throw new Error('Expected image is not visible on the homepage');
  }
}

}
