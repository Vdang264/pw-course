import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

test("Personal note", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Navigate to Personal note page", async() => {
        await page.click("//a[@href='04-xpath-personal-notes.html']");
    });

    await test.step("Input note", async() => {
        const noteTitleLocator = page.locator("//input[@id='note-title']");
        const noteContentLocator = page.locator("//textarea[@id='note-content']");

        const filePath = "tests/lesson-4/data-note.json";
        const jsonData = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData); 

        for (let i = 0; i < data.length; i++) {
            const noteTitle = data[i]?.noteTitle;
            const noteContent = data[i]?.noteContent;
            await noteTitleLocator.fill(noteTitle);
            await noteContentLocator.fill(noteContent);
            await page.click("//button[@id='add-note']");
        }
    });

    await test.step("Search input", async() => {
        await page.fill("//input[@id='search']", "Nhiều nghiên cứu thắng giải Kovalevskaia được kết nối chuyển giao");
        const noteCountLocator = page.locator("//div[@id='note-count']");
        await expect(noteCountLocator).toContainText("Total Notes: 1")
    });
});