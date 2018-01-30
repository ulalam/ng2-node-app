import { Ng2NodeAppPage } from './app.po';

describe('ng2-node-app App', () => {
  let page: Ng2NodeAppPage;

  beforeEach(() => {
    page = new Ng2NodeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
