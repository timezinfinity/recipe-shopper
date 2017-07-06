import { RecipeShopperPage } from './app.po';

describe('recipe-shopper App', () => {
  let page: RecipeShopperPage;

  beforeEach(() => {
    page = new RecipeShopperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
