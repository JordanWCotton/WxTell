import { WxTellPage } from './app.po';

describe('wx-tell App', () => {
  let page: WxTellPage;

  beforeEach(() => {
    page = new WxTellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
