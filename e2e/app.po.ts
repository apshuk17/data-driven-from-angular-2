import { browser, element, by } from 'protractor';

export class DataTemplateDrivenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dt-root h1')).getText();
  }
}
