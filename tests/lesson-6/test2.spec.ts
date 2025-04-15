import { test } from '@playwright/test';
import { MaterialBasePage } from './01-pom';

test('Add products to cart', async ({ page }) => {
  const basePage = new MaterialBasePage(page);

  await basePage.gotoPage('product');
  await basePage.addProduct1(2);
  await basePage.addProduct2(1);
  await basePage.addProduct3(3);
});
