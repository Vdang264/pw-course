# Git 
## Git clone 
```
git clone <url>
git clone <url> <new-name>
```

## Git push 
```
git push <remote_name> <branch_name>
git push origin main
```

## Git pull 
```
git pull origin branchA
git pull <remote_name> <branch_name>
```

## Git MR 
- The developer creates an MR from feature-branch to main or develop (depending on the workflow).
- Adds a title, description, and optionally assigns reviewers.
- Reviewers check the code, suggest changes, and approve it if everything looks good.
- Once approved, the MR is merged into the target branch.
- Sometimes, rebasing or resolving merge conflicts is needed.
- After merging, the feature branch is usually deleted to keep the repo clean.

## Git convention 
Git conventions are best practices that help maintain a clean, structured, and understandable version control system. These conventions cover areas like commit messages, branching, tagging, and merging.

### Class convention: 
- feat: new feature
- fix: bug fix
- conf: configuration change
- chore: miscellaneous changes (e.g., deleting unused files, renaming files, etc.)

# Playwright 
## Test describe 
To describe a test suit grouping a series of test cases 
```
test.describe('<tên suite>', async () => { 
test('test1', async ({ page }) => {
// code ...
});

test('test 2', async ({ page }) => {
// code ...
});
})
```

## Test hook 
### Before Hooks
- `beforeAll()` → Runs once before all tests in the file/suite.
- `beforeEach()` → Runs before each test.

### After hook 
- `afterEach()` → Runs after each test.
- `afterAll()` → Runs once after all tests in the file/suite.

### Sample use-cases 
- Authentication → Log in before tests
- Database Setup → Reset or seed data
- Browser Context Management → Open a new page/session
- Logging & Debugging → Capture logs before/after tests

Example: 
**Step 1:** Authentication Setup
```
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('🔄 Logging in before each test');
  
  await page.goto('https://example.com/login');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');

  // Ensure login was successful
  await expect(page).toHaveURL('https://example.com/dashboard');
});

test('Test 1: Check user dashboard', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Welcome, testuser');
});

```

**Step 2:** Get stored auth session
```
test.use({ storageState: 'auth.json' });

test('Test 1: Check user dashboard', async ({ page }) => {
  await page.goto('https://example.com/dashboard');
  await expect(page.locator('h1')).toHaveText('Welcome, testuser');
});
```

## Assertions
### Web-first assertions 
Web-first assertions in Playwright automatically retry until the condition is met or the timeout expires. This makes tests more stable when dealing with asynchronous UI updates.
Example: 
```
await expect(page.locator('h1')).toHaveText('Welcome');
```
**Common use:**
- `toHaveText()`
- `toBeVisible()`
- `toHaveAttribute()`
- `toHaveClass()`
- `toHaveCount()`

### No web-first assertions 
Without web-first assertions, the script only checks once at the time of execution. If the condition isn't met immediately, the test may fail.

Example: 
```
const text = await page.locator('h1').textContent();
expect(text).toBe('Welcome');
```

### When to use each? 
- Use Web-First Assertions when dealing with dynamic elements (e.g., waiting for a button to be enabled, checking a loading state).
- Use Non-Web-First Assertions when working with static content (e.g., checking a preloaded configuration file).

## CSS selector 
[Cheat sheet](https://css-selectors-cheatsheet.fullstack.edu.vn/assets/answers/CSS-selectors-cheatsheet.pdf)

## Playwright selector 
[Locator](https://playwright.dev/docs/locators)
Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment.

- `page.getByRole()` to locate by explicit and implicit accessibility attributes.
- `page.getByText()` to locate by text content.
- `page.getByLabel()` to locate a form control by associated label's text.
- `page.getByPlaceholder()` to locate an input by placeholder.
- `page.getByAltText()` to locate an element, usually image, by its text alternative.
- `page.getByTitle()` to locate an element by its title attribute.
- `page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).

### Get by test id 
In Playwright, you can use a test ID to locate elements on the page, which is a great way to create more stable and less brittle selectors for testing. A test ID is an attribute added to an element in your HTML to uniquely identify it, making it easy to target in tests.

Example: 
```
const { test, expect } = require('@playwright/test');

test('add element with custom test ID', async ({ page }) => {
  // Navigate to the HTML page
  await page.goto('file://path/to/your/index.html'); // Change path to your HTML file

  // Add a new element to the container (e.g., a button with data-custom-id)
  await page.evaluate(() => {
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.textContent = 'Submit
```
