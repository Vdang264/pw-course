import { test } from '@playwright/test';
import { MaterialBasePage } from './01-pom';

test('Fill register form', async ({ page }) => {
  const basePage = new MaterialBasePage(page);

  await basePage.gotoPage('register');
  await basePage.fillUsername("Van Dang");
  await basePage.fillEmail("vdang264@gmail.com");
  await basePage.fillDob("1995-12-25");
  await basePage.fillProfilePicture("tests/lesson-4/Lorem-ipsum.txt");
  await basePage.fillBio("Lorem ipsum dolor sit amet");
  await basePage.rateUs();
  await basePage.pickFavColor("#ff5733");

  await page.click("//button[@type='submit']");
});