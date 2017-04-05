import { CliApplicationPage } from './app.po';

describe('cli-application App', () => {
  let page: CliApplicationPage;

  beforeEach(() => {
    page = new CliApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
