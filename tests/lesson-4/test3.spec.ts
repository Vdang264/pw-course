import { test, expect } from '@playwright/test';

test("Add 100 item to Todo list & remove #Odd item", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Navigate to Todo page", async() => {
        await page.click("//a[@href='03-xpath-todo-list.html']");
    });

    await test.step("Add 100 item to Todo list", async() => {
        const inputField = page.locator("//input[@id='new-task']");
        const button = page.locator("//button[@id='add-task']");
        for (let i = 1; i <=100; i++) {
            await inputField.fill(`Item ${i}`);
            await button.click();
        };
    });

    page.on("dialog", async dialog => dialog.accept());

    await test.step("Remove Todo items with Odd#", async () => {
        for (let i = 1; i <= 100; i += 2) {
            const xpathOfButton = `//button[@id="item-${i}-delete"]`;
            const button = page.locator(xpathOfButton);
            await button.click();
        }
    });
});