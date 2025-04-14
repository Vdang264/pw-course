import { test, expect } from '@playwright/test';

const LOGIN_URL = "https://pw-practice-dev.playwrightvn.com/wp-admin";
const DASHBOARD_URL = "https://pw-practice-dev.playwrightvn.com/wp-admin/";
const USERNAME_LOCATOR = "//input[@id='user_login']";
const PASSWORD_LOCATOR = "//input[@id='user_pass']";
const LOGIN_BUTTON_LOCATOR = "//input[@id='wp-submit']";
const ERROR_MESSAGE_LOCATOR = "//div[@id='login_error']";
const H1_LOCATOR = "//h1";
const H2_LOCATOR = "//h2";

const INVALID_USERNAME = "invalidUser";
const INVALID_PASSWORD = "invalidPass123";
const VALID_USERNAME = "k11-duc";
const VALID_PASSWORD = "I#Ddnh4SQiXIC#uF7O5UQUjW";

test.describe('AUTH - Authentication', () => {
  test('AUTH_001: Login fail', async ({ page }) => {
    await test.step('Navigate to login page', async () => {
      await page.goto(LOGIN_URL);
    });

    await test.step('Input invalid credentials and submit', async () => {
      await page.fill(USERNAME_LOCATOR, INVALID_USERNAME);
      await page.fill(PASSWORD_LOCATOR, INVALID_PASSWORD);
      await page.click(LOGIN_BUTTON_LOCATOR);
    });

    await test.step('Verify error message', async () => {
      const expectedError = `Error: The username ${INVALID_USERNAME} is not registered on this site. If you are unsure of your username, try your email address instead.`;
      const errorMessage = await page.locator(ERROR_MESSAGE_LOCATOR).textContent();
      expect(errorMessage).toContain(expectedError);
    });
  });

  test('AUTH_002: Login success', async ({ page }) => {
    await test.step('Navigate to login page', async () => {
      await page.goto(LOGIN_URL);
    });

    await test.step('Input valid credentials and submit', async () => {
      await page.fill(USERNAME_LOCATOR, VALID_USERNAME);
      await page.fill(PASSWORD_LOCATOR, VALID_PASSWORD);
      await page.click(LOGIN_BUTTON_LOCATOR);
    });

    await test.step('Verify dashboard loaded', async () => {
      await page.waitForURL(DASHBOARD_URL);
      const h1Text = await page.locator(H1_LOCATOR).textContent();
      expect(h1Text).toBe('Dashboard');
    });

    await test.step('Verify "At a Glance" section', async () => {
      const h2Text1 = await page.locator(H2_LOCATOR).first().textContent();
      expect(h2Text1).toBe('At a Glance');
    });

    await test.step('Verify "Activity" section', async () => {
      const h2Text2 = await page.locator(H2_LOCATOR).nth(1).textContent();
      expect(h2Text2).toBe('Activity');
    });
  });
});
