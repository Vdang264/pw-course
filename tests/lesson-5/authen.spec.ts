import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

const LOGIN_URL = "https://pw-practice-dev.playwrightvn.com/wp-admin";
const DASHBOARD_URL = "https://pw-practice-dev.playwrightvn.com/wp-admin/";
const CREDENTIALS_FILE_PATH = "./tests/lesson-5/credential-data.json"; 
const USERNAME_SELECTOR = "//input[@id='user_login']";
const PASSWORD_SELECTOR = "//input[@id='user_pass']";
const LOGIN_BUTTON_SELECTOR = "//input[@id='wp-submit']";
const ERROR_MESSAGE_LOCATOR = "//div[@id='login_error']";
const H1_SELECTOR = "//h1";
const H2_SELECTOR = "//h2";
const HOVER_MENU_SELECTOR = "//a[@class='ab-item' and @role='menuitem']"; 
const LOGOUT_BUTTON_SELECTOR = "//a[text()='Log Out']"; 

const getCredentials = async () => {
  const data = await fs.readFile(CREDENTIALS_FILE_PATH, 'utf8');
  return JSON.parse(data);
};

test.describe('AUTH - Authentication', () => {

  test('@AUTH_001 Login fail', async ({ page }) => {
    const credentials = await getCredentials();
    const invalidCredential = credentials[0]; 

    test.step('Navigate to login page', async () => {
      await page.goto(LOGIN_URL);
    });

    test.step('Input invalid username', async () => {
      await page.fill(USERNAME_SELECTOR, invalidCredential.username);
    });

    test.step('Input invalid password', async () => {
      await page.fill(PASSWORD_SELECTOR, invalidCredential.password);
    });

    test.step('Click login button', async () => {
      await page.click(LOGIN_BUTTON_SELECTOR);
    });

    test.step('Verify error message', async () => {
      const updatedErrorMessage = `Error: The username ${invalidCredential.username} is not registered on this site. If you are unsure of your username, try your email address instead.`;
      const errorMessageLocator = page.locator(ERROR_MESSAGE_LOCATOR);
      const errorMessage = await errorMessageLocator.textContent();
      expect(errorMessage).toContain(updatedErrorMessage);
    });
  });

  test('@AUTH_002 Login success', async ({ page }) => {
    const credentials = await getCredentials();

    for (let i = 1; i < credentials.length; i++) {
      const { username, password } = credentials[i];

      test.step('Navigate to login page', async () => {
        await page.goto(LOGIN_URL);
      });

      test.step('Input valid username', async () => {
        await page.fill(USERNAME_SELECTOR, username);
      });

      test.step('Input valid password', async () => {
        await page.fill(PASSWORD_SELECTOR, password);
      });

      test.step('Click login button', async () => {
        await page.click(LOGIN_BUTTON_SELECTOR);
      });

      test.step('Wait for dashboard page', async () => {
        await page.waitForURL(DASHBOARD_URL);
      });

      test.step('Verify dashboard header', async () => {
        const h1Text = await page.locator(H1_SELECTOR).textContent();
        expect(h1Text).toBe('Dashboard');
      });

      test.step('Verify "At a Glance" section', async () => {
        const h2Text1 = await page.locator(H2_SELECTOR).first().textContent();
        expect(h2Text1).toBe('At a Glance');
      });

      test.step('Verify "Activity" section', async () => {
        const h2Text2 = await page.locator(H2_SELECTOR).nth(1).textContent();
        expect(h2Text2).toBe('Activity');
      });

      test.step('Hover over user menu and log out', async () => {
        await page.hover(HOVER_MENU_SELECTOR);
        const logoutButton = page.locator(LOGOUT_BUTTON_SELECTOR);
        await expect(logoutButton).toBeVisible();
        await logoutButton.click();
        await page.waitForURL(LOGIN_URL);
      });
    }
  });
});