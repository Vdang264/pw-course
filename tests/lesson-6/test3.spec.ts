import { test } from '@playwright/test';
import { MaterialBasePage } from './01-pom';

test('Create and delete tasks', async ({ page }) => {
  const basePage = new MaterialBasePage(page);

  await basePage.gotoPage('todo');
  await basePage.addTodoItems(5);
  await basePage.deleteOddTodoItems(5);
});
