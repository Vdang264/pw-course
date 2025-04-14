import { test, expect } from "@playwright/test";

const usernameValid = "k11-trang";
const passwordValid = "TCKoQJ4S3hKFyEamNgM0OwMK";
const existsName = "lesson tag";
const validName1 = `tag van`;
const validName2 = `tag van 02`;
const validSlug2 = `tag-van-02`;
const tagName3 = `tag van Special!@#`;
const validSlug3 = `tag-van-special!@#`;
const expectedSlug3 = `tag-van-special`;
const categoryName3 = `category van 03`;
const categorySlug3 = `category-van-03`;
const expectedCategorySlug3 = `category-van-03`;
const categoryName4 = `category van 04`;
const categorySlug4 = `category-van-04`;
const expectedCategorySlug4 = `category-van-04`;
const errorMessageNameRequired = "A name is required for this term."
const errorMessageNameExisted = "A term with the name provided already exists in this taxonomy."
const messageTagAdded = "Tag added.";
const messageCategoryAdded = "Category added.";

const USERNAME_INPUT_LOCATOR = "//input[@id='user_login']";
const PASSWORD_INPUT_LOCATOR = "//input[@id='user_pass']";
const LOGIN_BUTTON_LOCATOR = "//input[@id='wp-submit']";
const POSTS_MENU_LOCATOR = "//div[contains(text(),'Posts')]";
const TAGS_SUBMENU_LOCATOR = "//a[contains(text(),'Tags')]";
const CATEGORIES_SUBMENU_LOCATOR = "//a[text()='Categories']";
const PAGE_HEADER_LOCATOR = "//h1[text()='Tags']";
const TAG_NAME_INPUT_LOCATOR = "//input[@id='tag-name']";
const TAG_SLUG_INPUT_LOCATOR = "//input[@id='tag-slug']";
const ADD_NEW_TAG_BUTTON_LOCATOR = "//input[@id='submit']";
const ERROR_MESSAGE_LOCATOR = "//div[contains(@class, 'notice notice-error')]";
const ERROR_NAME_REQUIRED_LOCATOR = `${ERROR_MESSAGE_LOCATOR}//p[text()='${errorMessageNameRequired}']`;
const ERROR_NAME_EXISTS_LOCATOR = `${ERROR_MESSAGE_LOCATOR}//p[text()='${errorMessageNameExisted}']`;
const SUCCESS_MESSAGE_LOCATOR = "//div[contains(@class, 'notice notice-success is-dismissible')]";
const TAG_ADDED_LOCATOR = `${SUCCESS_MESSAGE_LOCATOR}//p[text()='${messageTagAdded}']`;
const TAG_LINK_BY_NAME = (name: string) => `//a[text()='${name}']`;
const TAG_SLUG_CELL_BY_SLUG = (slug: string) => `//td[text()='${slug}']`;
const DELETE_BUTTON_BY_NAME = (name: string) => `//span[@class='delete']/a[@aria-label='Delete “${name}”']`;
const CATEGORY_PAGE_HEADER_LOCATOR = "//h1[text()='Categories']";
const CATEGORY_ADDED_MESSAGE_LOCATOR = `${SUCCESS_MESSAGE_LOCATOR}//p[text()='${messageCategoryAdded}']`;
const CATEGORY_PARENT_SELECT_LOCATOR = "//select[@id='parent']";
const SEARCH_CATEGORY_INPUT_LOCATOR = "//input[@id='tag-search-input']";
const SEARCH_SUBMIT_LOCATOR = "//input[@id='search-submit']";


test.describe("POST_TAG - Post", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    await page.locator(USERNAME_INPUT_LOCATOR).fill(usernameValid);
    await page.locator(PASSWORD_INPUT_LOCATOR).fill(passwordValid);
    await page.click(LOGIN_BUTTON_LOCATOR);
    await expect(page).toHaveURL(/wp-admin/);

    await page.hover(POSTS_MENU_LOCATOR);
    await page.click(TAGS_SUBMENU_LOCATOR);
    await expect(page.locator(PAGE_HEADER_LOCATOR)).toBeVisible();
  });

  test("POST_TAG_001: Tag - add tag failed", async ({ page }) => {
    await test.step("Click button [Add New Tag]", async () => {
      await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);
      await expect(page.locator(ERROR_NAME_REQUIRED_LOCATOR)).toBeVisible();
    });

    await test.step("Submit the already exists name", async () => {
      await page.locator(TAG_NAME_INPUT_LOCATOR).fill(existsName);
      await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);
      await expect(page.locator(ERROR_NAME_EXISTS_LOCATOR)).toBeVisible();
    });
  });

  test("POST_TAG_002: Tag - add tag success", async ({ page }) => {
    await test.step("Submit valid name", async () => {
      await page.locator(TAG_NAME_INPUT_LOCATOR).fill(validName1);
      await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);
      await expect(page.locator(TAG_ADDED_LOCATOR)).toBeVisible();
      await expect(page.locator(TAG_LINK_BY_NAME(validName1))).toBeVisible();
    });

    await test.step("Submit valid name & slug", async () => {
      await page.locator(TAG_NAME_INPUT_LOCATOR).fill(validName2);
      await page.locator(TAG_SLUG_INPUT_LOCATOR).fill(validSlug2);
      await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);
      await expect(page.locator(SUCCESS_MESSAGE_LOCATOR)).toBeVisible();
      await expect(page.locator(TAG_LINK_BY_NAME(validName2))).toBeVisible();
      await expect(page.locator(TAG_SLUG_CELL_BY_SLUG(validSlug2))).toBeVisible();
    });

    await test.step("Remove tag", async () => {
      await page.hover(TAG_LINK_BY_NAME(validName1));
      page.on("dialog", async dialog => dialog.accept());
      await page.click(DELETE_BUTTON_BY_NAME(validName1));
      await expect(page.locator(TAG_LINK_BY_NAME(validName1))).toBeHidden();
      await page.hover(TAG_LINK_BY_NAME(validName2));
      await page.click(DELETE_BUTTON_BY_NAME(validName2));
      await expect(page.locator(TAG_LINK_BY_NAME(validName2))).toBeHidden();
    });
  });

  test("POST_TAG_003: Tag - slug auto remove special character", async ({ page }) => {
    await test.step("Submit slug with special character", async () => {
      await page.locator(TAG_NAME_INPUT_LOCATOR).fill(tagName3);
      await page.locator(TAG_SLUG_INPUT_LOCATOR).fill(validSlug3);
      await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);

      await expect(page.locator(SUCCESS_MESSAGE_LOCATOR)).toBeVisible();
      await expect(page.locator(TAG_LINK_BY_NAME(tagName3))).toBeVisible();
      await expect(page.locator(TAG_SLUG_CELL_BY_SLUG(expectedSlug3))).toBeVisible();
    });

    await test.step("Remove tag", async () => {
      await page.hover(TAG_LINK_BY_NAME(tagName3));
      page.on("dialog", async dialog => dialog.accept());
      await page.click(DELETE_BUTTON_BY_NAME(tagName3));
      await expect(page.locator(TAG_LINK_BY_NAME(tagName3))).toBeHidden();
    });
  });

});

test.describe("POST_CATEGORY - Category", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator(USERNAME_INPUT_LOCATOR).fill(usernameValid);
      await page.locator(PASSWORD_INPUT_LOCATOR).fill(passwordValid);
      await page.click(LOGIN_BUTTON_LOCATOR);
      await expect(page).toHaveURL(/wp-admin/);
  
      await page.hover(POSTS_MENU_LOCATOR);
      await page.click(TAGS_SUBMENU_LOCATOR);
      await expect(page.locator(PAGE_HEADER_LOCATOR)).toBeVisible();
    });
  
    test("POST_CATEGORY_001: Category - create category success", async ({ page }) => {
        await test.step("Navigate to Categories", async () => {
          await page.click(CATEGORIES_SUBMENU_LOCATOR);
          await expect(page.locator(CATEGORY_PAGE_HEADER_LOCATOR)).toBeVisible();
        });
      
        await test.step("Submit valid category with slug", async () => {
          await page.locator(TAG_NAME_INPUT_LOCATOR).fill(categoryName3);
          await page.locator(TAG_SLUG_INPUT_LOCATOR).fill(categorySlug3);
          await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);
          await expect(page.locator(CATEGORY_ADDED_MESSAGE_LOCATOR)).toBeVisible();
          await expect(page.locator(TAG_SLUG_CELL_BY_SLUG(expectedCategorySlug3))).toBeVisible();
        });
        
        await test.step("Remove categories", async () => {
            await page.click(CATEGORIES_SUBMENU_LOCATOR);
            await page.hover(TAG_LINK_BY_NAME(categoryName3));
            page.on("dialog", async dialog => dialog.accept());
            await page.click(DELETE_BUTTON_BY_NAME(categoryName3));
            await expect(page.locator(TAG_LINK_BY_NAME(categoryName3))).toBeHidden();
          });
      
        await test.step("Submit valid category with parent", async () => {
          await page.locator(TAG_NAME_INPUT_LOCATOR).fill(categoryName4);
          await expect(page.locator(CATEGORY_PARENT_SELECT_LOCATOR)).toBeVisible();
          await page.locator(CATEGORY_PARENT_SELECT_LOCATOR).selectOption({ label: "k11 class" });
          await page.locator(TAG_SLUG_INPUT_LOCATOR).fill(categorySlug4);
          await page.click(ADD_NEW_TAG_BUTTON_LOCATOR);
          await expect(page.locator(CATEGORY_ADDED_MESSAGE_LOCATOR)).toBeVisible();
          await expect(page.locator(TAG_SLUG_CELL_BY_SLUG(expectedCategorySlug4))).toBeVisible();
        });
      
        await test.step("Remove categories", async () => {
          await page.click(CATEGORIES_SUBMENU_LOCATOR);
          await page.locator(SEARCH_CATEGORY_INPUT_LOCATOR).fill(categoryName4);
          await page.click(SEARCH_SUBMIT_LOCATOR);
          await page.hover(TAG_LINK_BY_NAME(categoryName4));
          await page.click(DELETE_BUTTON_BY_NAME(categoryName4));
          await expect(page.locator(TAG_LINK_BY_NAME(categoryName4))).toBeHidden();
        });
      });
         
});