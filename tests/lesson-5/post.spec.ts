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
const errorMessageNameRequired = "A name is required for this term.";
const errorMessageNameExisted = "A term with the name provided already exists in this taxonomy.";
const messageTagAdded = "Tag added.";
const messageCategoryAdded = "Category added.";

const usernameInputLocator = "//input[@id='user_login']";
const passwordInputLocator = "//input[@id='user_pass']";
const loginButtonLocator = "//input[@id='wp-submit']";
const postsMenuLocator = "//div[contains(text(),'Posts')]";
const tagsSubmenuLocator = "//a[contains(text(),'Tags')]";
const categoriesSubmenuLocator = "//a[text()='Categories']";
const pageHeaderLocator = "//h1[text()='Tags']";
const tagNameInputLocator = "//input[@id='tag-name']";
const tagSlugInputLocator = "//input[@id='tag-slug']";
const addNewTagButtonLocator = "//input[@id='submit']";
const errorMessageLocator = "//div[contains(@class, 'notice notice-error')]";
const errorNameRequiredLocator = `${errorMessageLocator}//p[text()='${errorMessageNameRequired}']`;
const errorNameExistsLocator = `${errorMessageLocator}//p[text()='${errorMessageNameExisted}']`;
const successMessageLocator = "//div[contains(@class, 'notice notice-success is-dismissible')]";
const tagAddedLocator = `${successMessageLocator}//p[text()='${messageTagAdded}']`;
const tagLinkByName = (name: string) => `//a[text()='${name}']`;
const tagSlugCellBySlug = (slug: string) => `//td[text()='${slug}']`;
const deleteButtonByName = (name: string) => `//span[@class='delete']/a[@aria-label='Delete “${name}”']`;
const categoryPageHeaderLocator = "//h1[text()='Categories']";
const categoryAddedMessageLocator = `${successMessageLocator}//p[text()='${messageCategoryAdded}']`;
const categoryParentSelectLocator = "//select[@id='parent']";
const searchCategoryInputLocator = "//input[@id='tag-search-input']";
const searchSubmitLocator = "//input[@id='search-submit']";

test.describe("POST_TAG - Post", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    await page.locator(usernameInputLocator).fill(usernameValid);
    await page.locator(passwordInputLocator).fill(passwordValid);
    await page.click(loginButtonLocator);
    await expect(page).toHaveURL(/wp-admin/);

    await page.hover(postsMenuLocator);
    await page.click(tagsSubmenuLocator);
    await expect(page.locator(pageHeaderLocator)).toBeVisible();
  });

  test("POST_TAG_001: Tag - add tag failed", async ({ page }) => {
    await test.step("Click button [Add New Tag]", async () => {
      await page.click(addNewTagButtonLocator);
      await expect(page.locator(errorNameRequiredLocator)).toBeVisible();
    });

    await test.step("Submit the already exists name", async () => {
      await page.locator(tagNameInputLocator).fill(existsName);
      await page.click(addNewTagButtonLocator);
      await expect(page.locator(errorNameExistsLocator)).toBeVisible();
    });
  });

  test("POST_TAG_002: Tag - add tag success", async ({ page }) => {
    await test.step("Submit valid name", async () => {
      await page.locator(tagNameInputLocator).fill(validName1);
      await page.click(addNewTagButtonLocator);
      await expect(page.locator(tagAddedLocator)).toBeVisible();
      await expect(page.locator(tagLinkByName(validName1))).toBeVisible();
    });

    await test.step("Submit valid name & slug", async () => {
      await page.locator(tagNameInputLocator).fill(validName2);
      await page.locator(tagSlugInputLocator).fill(validSlug2);
      await page.click(addNewTagButtonLocator);
      await expect(page.locator(successMessageLocator)).toBeVisible();
      await expect(page.locator(tagLinkByName(validName2))).toBeVisible();
      await expect(page.locator(tagSlugCellBySlug(validSlug2))).toBeVisible();
    });

    await test.step("Remove tag", async () => {
      await page.hover(tagLinkByName(validName1));
      page.on("dialog", async dialog => dialog.accept());
      await page.click(deleteButtonByName(validName1));
      await expect(page.locator(tagLinkByName(validName1))).toBeHidden();
      await page.hover(tagLinkByName(validName2));
      await page.click(deleteButtonByName(validName2));
      await expect(page.locator(tagLinkByName(validName2))).toBeHidden();
    });
  });

  test("POST_TAG_003: Tag - slug auto remove special character", async ({ page }) => {
    await test.step("Submit slug with special character", async () => {
      await page.locator(tagNameInputLocator).fill(tagName3);
      await page.locator(tagSlugInputLocator).fill(validSlug3);
      await page.click(addNewTagButtonLocator);

      await expect(page.locator(successMessageLocator)).toBeVisible();
      await expect(page.locator(tagLinkByName(tagName3))).toBeVisible();
      await expect(page.locator(tagSlugCellBySlug(expectedSlug3))).toBeVisible();
    });

    await test.step("Remove tag", async () => {
      await page.hover(tagLinkByName(tagName3));
      page.on("dialog", async dialog => dialog.accept());
      await page.click(deleteButtonByName(tagName3));
      await expect(page.locator(tagLinkByName(tagName3))).toBeHidden();
    });
  });
});

test.describe("POST_CATEGORY - Category", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    await page.locator(usernameInputLocator).fill(usernameValid);
    await page.locator(passwordInputLocator).fill(passwordValid);
    await page.click(loginButtonLocator);
    await expect(page).toHaveURL(/wp-admin/);

    await page.hover(postsMenuLocator);
    await page.click(tagsSubmenuLocator);
    await expect(page.locator(pageHeaderLocator)).toBeVisible();
  });

  test("POST_CATEGORY_001: Category - create category success", async ({ page }) => {
    await test.step("Navigate to Categories", async () => {
      await page.click(categoriesSubmenuLocator);
      await expect(page.locator(categoryPageHeaderLocator)).toBeVisible();
    });

    await test.step("Submit valid category with slug", async () => {
      await page.locator(tagNameInputLocator).fill(categoryName3);
      await page.locator(tagSlugInputLocator).fill(categorySlug3);
      await page.click(addNewTagButtonLocator);
      await expect(page.locator(categoryAddedMessageLocator)).toBeVisible();
      await expect(page.locator(tagSlugCellBySlug(expectedCategorySlug3))).toBeVisible();
    });

    await test.step("Remove categories", async () => {
      await page.click(categoriesSubmenuLocator);
      await page.hover(tagLinkByName(categoryName3));
      page.on("dialog", async dialog => dialog.accept());
      await page.click(deleteButtonByName(categoryName3));
      await expect(page.locator(tagLinkByName(categoryName3))).toBeHidden();
    });

    await test.step("Submit valid category with parent", async () => {
      await page.locator(tagNameInputLocator).fill(categoryName4);
      await expect(page.locator(categoryParentSelectLocator)).toBeVisible();
      await page.locator(categoryParentSelectLocator).selectOption({ label: "k11 class" });
      await page.locator(tagSlugInputLocator).fill(categorySlug4);
      await page.click(addNewTagButtonLocator);
      await expect(page.locator(categoryAddedMessageLocator)).toBeVisible();
      await expect(page.locator(tagSlugCellBySlug(expectedCategorySlug4))).toBeVisible();
    });

    await test.step("Remove categories", async () => {
      await page.click(categoriesSubmenuLocator);
      await page.locator(searchCategoryInputLocator).fill(categoryName4);
      await page.click(searchSubmitLocator);
      await page.hover(tagLinkByName(categoryName4));
      await page.click(deleteButtonByName(categoryName4));
      await expect(page.locator(tagLinkByName(categoryName4))).toBeHidden();
    });
  });
});
