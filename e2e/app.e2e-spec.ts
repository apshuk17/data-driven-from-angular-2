import { DataTemplateDrivenPage } from './app.po';

describe('data-template-driven App', function() {
  let page: DataTemplateDrivenPage;

  beforeEach(() => {
    page = new DataTemplateDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dt works!');
  });
});
