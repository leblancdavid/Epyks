import { EpyksPage } from './app.po';

describe('epyks App', () => {
  let page: EpyksPage;

  beforeEach(() => {
    page = new EpyksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
