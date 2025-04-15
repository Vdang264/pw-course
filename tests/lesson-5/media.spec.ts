import { test, expect } from "@playwright/test";

const validUsername = "k11-duc";
const validPassword = "I#Ddnh4SQiXIC#uF7O5UQUjW";
const mediaFileName = "data-media.txt";
const mediaFilePath = `tests/lesson-5/${mediaFileName}`;

const locatorUploadedFile = `//div[text()='${mediaFileName}']`;
const locatorCheckboxUploadedFile = `//div[@class='filename']/div[text()='${mediaFileName}']`;
const xpathUsername = "//input[@id='user_login']";
const xpathPassword = "//input[@id='user_pass']";
const xpathLoginButton = "//input[@id='wp-submit']";
const xpathMenuMedia = "//div[contains(text(),'Media')]";
const xpathSubmenuLibrary = "//a[contains(text(),'Library')]";
const xpathHeaderMediaLibrary = "//h1[text()='Media Library']";
const xpathButtonAddNew = "//a[@role='button' and text()='Add New Media File']";
const xpathInputFile = "//input[@type='file']";
const xpathButtonBulkSelect = "//button[text()='Bulk select']";
const xpathButtonDelete = "//button[@class='button media-button button-primary button-large delete-selected-button']";

test.describe("MEDIA - Media", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    await page.locator(xpathUsername).fill(validUsername);
    await page.locator(xpathPassword).fill(validPassword);
    await page.click(xpathLoginButton);
    await expect(page).toHaveURL(/wp-admin/);

    await page.hover(xpathMenuMedia);
    await page.click(xpathSubmenuLibrary);
    await expect(page.locator(xpathHeaderMediaLibrary)).toBeVisible();
  });

  test("@MEDIA_FILES_001: Media - upload file success", async ({ page }) => {
    await test.step("Upload file", async () => {
      await page.click(xpathButtonAddNew);
      await page.locator(xpathInputFile).setInputFiles(mediaFilePath);
      await expect(page.locator(locatorUploadedFile)).toBeVisible();
    });

    await test.step("Reload page and verify uploaded file", async () => {
      await page.reload();
      await expect(page.locator(locatorUploadedFile)).toBeVisible();
    });

    await test.step("Teardown: Delete uploaded file", async () => {
      await page.click(xpathButtonBulkSelect);
      await page.locator(locatorCheckboxUploadedFile).check({ force: true });
      await expect(page.locator(xpathButtonDelete)).toBeEnabled();
      page.once("dialog", async dialog => await dialog.accept());
      await page.click(xpathButtonDelete);
      await expect(page.locator(locatorUploadedFile)).toHaveCount(0);
    });      
  });
});
