import { AngularMiscPage } from './app.po';

describe('angular-misc App', () => {
  let page: AngularMiscPage;

  beforeEach(() => {
    page = new AngularMiscPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
