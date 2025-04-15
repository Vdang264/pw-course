import { test } from '@playwright/test';
import { MaterialBasePage } from './01-pom';

test('Create and search personal notes', async ({ page }) => {
  const basePage = new MaterialBasePage(page);
  
  await basePage.gotoPage('note');
  await basePage.addPersonalNote('Note 1', 'This is the first note');
  await basePage.addPersonalNote('Note 2', 'This is the second note');
  await basePage.searchPersonalNote('first');
});