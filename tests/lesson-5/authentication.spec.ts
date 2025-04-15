import { test, expect } from '@playwright/test';

const loginUrl = "https://pw-practice-dev.playwrightvn.com/wp-admin";
const dashboardUrl = "https://pw-practice-dev.playwrightvn.com/wp-admin/";
const usernameLocator = "//input[@id='user_login']";
const passwordLocator = "//input[@id='user_pass']";
const loginButtonLocator = "//input[@id='wp-submit']";
const errorMessageLocator = "//div[@id='login_error']";
const h1Locator = "//h1";
const h2Locator = "//h2";

const invalidUsername = "invalidUser";
const invalidPassword = "invalidPass123";
const validUsername = "k11-duc";
const validPassword = "I#Ddnh4SQiXIC#uF7O5UQUjW";

test.describe('AUTH - Authentication', () => {
  test('AUTH_001: Login fail', async ({ page }) => {
    await test.step('Navigate to login page', async () => {
      await page.goto(loginUrl);
    });

    await test.step('Input invalid credentials and submit', async () => {
      await page.fill(usernameLocator, invalidUsername);
      await page.fill(passwordLocator, invalidPassword);
      await page.click(loginButtonLocator);
    });

    await test.step('Verify error message', async () => {
      const expectedError = `Error: The username ${invalidUsername} is not registered on this site. If you are unsure of your username, try your email address instead.`;
      const errorMessage = await page.locator(errorMessageLocator).textContent();
      expect(errorMessage).toContain(expectedError);
    });
  });

  test('AUTH_002: Login success', async ({ page }) => {
    await test.step('Navigate to login page', async () => {
      await page.goto(loginUrl);
    });

    await test.step('Input valid credentials and submit', async () => {
      await page.fill(usernameLocator, validUsername);
      await page.fill(passwordLocator, validPassword);
      await page.click(loginButtonLocator);
    });

    await test.step('Verify dashboard loaded', async () => {
      await page.waitForURL(dashboardUrl);
      const h1Text = await page.locator(h1Locator).textContent();
      expect(h1Text).toBe('Dashboard');
    });

    await test.step('Verify "At a Glance" section', async () => {
      const h2Text1 = await page.locator(h2Locator).first().textContent();
      expect(h2Text1).toBe('At a Glance');
    });

    await test.step('Verify "Activity" section', async () => {
      const h2Text2 = await page.locator(h2Locator).nth(1).textContent();
      expect(h2Text2).toBe('Activity');
    });
  });
});
