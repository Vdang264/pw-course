import { test, expect } from '@playwright/test';

test("Add product to cart", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Navigate to Product page", async() => {
        await page.click("//a[@href='02-xpath-product-page.html']");
    });

    await test.step("Add 2 Product 1 to cart", async() => {
        const button = page.locator("(//button[contains(@class, 'add-to-cart')])[1]");
        await button.dblclick();

    });

    await test.step("Add 3 Product 2 to cart", async() => {
        const button = page.locator("(//button[contains(@class, 'add-to-cart')])[2]");
        await button.click({ clickCount: 3 });
    });

    await test.step("Add 1 Product 3 to cart", async() => {
        const button = page.locator("(//button[contains(@class, 'add-to-cart')])[3]");
        await button.click();
    });

});