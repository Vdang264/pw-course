import { test, expect } from '@playwright/test';

test("Fill register form", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Navigate to Register form", async() => {
        await page.click("//a[@href='01-xpath-register-page.html']");
    });
    
    await test.step("Fill username", async() => {
        await page.fill("//input[@id='username']", "Van Dang");
    });

    await test.step("Fill email", async() => {
        await page.fill("//input[@id='email']", "vdang264@gmail.com");
    });

    await test.step("Choose gender", async() => {
        await page.check("//input[@id='female']");
    });

    await test.step("Choose hobbies", async() => {
        await page.check("//input[@id='traveling']");
    });

    await test.step("Choose interest", async() => {
        await page.selectOption("//select[@id='interests']", "Science");
    });

    await test.step("Choose country", async() => {
        await page.selectOption("//select[@id='country']", "Canada");
    });

    await test.step("Choose DOB", async() => {
        await page.fill("//input[@id='dob']", "1995-12-25");
    });

    await test.step("Add profile picture", async() => {
        await page.setInputFiles("//input[@id='profile']", "tests/lesson-4/Lorem-ipsum.txt");
    });

    await test.step("Add Bio", async() => {
        await page.fill("//textarea[@id='bio']", "Lorem ipsum dolor sit amet");
    });

    await test.step("Rate us", async() => {
        await page.click("//input[@id='rating']");
        await page.press("//input[@id='rating']", "ArrowRight");
    });

    await test.step("Pick favorite color", async() => {
        await page.fill("//input[@id='favcolor']", "#ff5733"); 
    });

    await test.step("Opt-in Newsletter", async() => {
        await page.check("//input[@id='newsletter']");
    });

    await test.step("Enable feature", async() => {
        await page.click("//label[contains(@class, 'switch')]");
    });

    await test.step("Submit data", async() => {
        await page.click("//button[@type='submit']");
    });



});