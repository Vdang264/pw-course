import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
  page: Page;

  // Register Page 
  registerPage: Locator;
  usernameInput: Locator;
  emailInput: Locator;
  genderMale: Locator;
  genderFemale: Locator;
  hobbyTraveling: Locator;
  interestsSelect: Locator;
  countrySelect: Locator;
  dobInput: Locator;
  profileUpload: Locator;
  bioTextarea: Locator;
  ratingInput: Locator;
  favColorInput: Locator;
  newsletterCheckbox: Locator;
  enableFeatureSwitch: Locator;
  submitButton: Locator;

  // Product Page 
  productPage: Locator;
  addProduct1Btn: Locator;
  addProduct2Btn: Locator;
  addProduct3Btn: Locator;

  // Todo Page 
  todoPage: Locator;
  newTaskInput: Locator;
  addTaskButton: Locator;
  deleteTaskButton: Locator;

  // Personal Notes Page 
  personalNote: Locator;
  noteTitleInput: Locator;
  noteContentTextarea: Locator;
  addNoteButton: Locator;
  searchInput: Locator;
  noteCount: Locator;

  constructor(page: Page) {
    this.page = page;

    // Register Page
    this.registerPage = page.locator("//a[@href='01-xpath-register-page.html']");
    this.usernameInput = page.locator("//input[@id='username']");
    this.emailInput = page.locator("//input[@id='email']");
    this.genderMale = page.locator("//input[@id='male']");
    this.genderFemale = page.locator("//input[@id='female']");
    this.hobbyTraveling = page.locator("//input[@id='traveling']");
    this.interestsSelect = page.locator("//select[@id='interests']");
    this.countrySelect = page.locator("//select[@id='country']");
    this.dobInput = page.locator("//input[@id='dob']");
    this.profileUpload = page.locator("//input[@id='profile']");
    this.bioTextarea = page.locator("//textarea[@id='bio']");
    this.ratingInput = page.locator("//input[@id='rating']");
    this.favColorInput = page.locator("//input[@id='favcolor']");
    this.newsletterCheckbox = page.locator("//input[@id='newsletter']");
    this.enableFeatureSwitch = page.locator("//label[contains(@class, 'switch')]");
    this.submitButton = page.locator("//button[@type='submit']");

    // Product Page
    this.productPage = page.locator("//a[@href='02-xpath-product-page.html']");
    this.addProduct1Btn = page.locator("(//button[contains(@class, 'add-to-cart')])[1]");
    this.addProduct2Btn = page.locator("(//button[contains(@class, 'add-to-cart')])[2]");
    this.addProduct3Btn = page.locator("(//button[contains(@class, 'add-to-cart')])[3]");

    // Todo Page
    this.todoPage = page.locator("//a[@href='03-xpath-todo-list.html']");
    this.newTaskInput = page.locator("//input[@id='new-task']");
    this.addTaskButton = page.locator("//button[@id='add-task']");
    this.deleteTaskButton = page.locator("//button[@id='item-1-delete']");

    // Personal Notes Page
    this.personalNote = page.locator("//a[@href='04-xpath-personal-notes.html']");
    this.noteTitleInput = page.locator("//input[@id='note-title']");
    this.noteContentTextarea = page.locator("//textarea[@id='note-content']");
    this.addNoteButton = page.locator("//button[@id='add-note']");
    this.searchInput = page.locator("//input[@id='search']");
    this.noteCount = page.locator("//div[@id='note-count']");
  }

  async gotoPage(pageName: string) {
    await this.page.goto('https://material.playwrightvn.com/');
    if (pageName === 'register') {
      await this.registerPage.click();
    } else if (pageName === 'product') {
      await this.productPage.click();
    } else if (pageName === 'todo') {
      await this.todoPage.click();
    } else if (pageName === 'note') {
      await this.personalNote.click();
    }
  }

  // Register Page Methods
  async fillUsername(name: string) {
    await this.usernameInput.fill(name);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async chooseGenderFemale() {
    await this.genderFemale.check();
  }

  async chooseGenderMale() {
    await this.genderMale.check();
  }

  async chooseHobbyTraveling() {
    await this.hobbyTraveling.check();
  }

  async chooseInterest(interest: string) {
    await this.interestsSelect.selectOption(interest);
  }

  async chooseCountry(country: string) {
    await this.countrySelect.selectOption(country);
  }

  async fillDob(date: string) {
    await this.dobInput.fill(date);
  }

  async fillProfilePicture(filePath: string) {
    await this.profileUpload.setInputFiles(filePath);
  }

  async fillBio(bio: string) {
    await this.bioTextarea.fill(bio);
  }

  async rateUs() {
    await this.ratingInput.click();
    await this.ratingInput.press("ArrowRight");
  }

  async pickFavColor(color: string) {
    await this.favColorInput.fill(color);
  }

  async checkNewsletter() {
    await this.newsletterCheckbox.check();
  }

  async enableFeature() {
    await this.enableFeatureSwitch.click();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  // Product Page Methods
  async addProduct1(quantity = 2) {
    await this.addProduct1Btn.click({ clickCount: quantity });
  }

  async addProduct2(quantity = 3) {
    await this.addProduct2Btn.click({ clickCount: quantity });
  }

  async addProduct3(quantity = 1) {
    await this.addProduct3Btn.click({ clickCount: quantity });
  }

  // Todo Page Methods
  async addTodoItems(count: number) {
    for (let i = 1; i <= count; i++) {
      await this.newTaskInput.fill(`Item ${i}`);
      await this.addTaskButton.click();
    }
  }

  async deleteOddTodoItems(count: number) {
    for (let i = 1; i <= count; i += 2) {
      await this.deleteTaskButton.click();
    }
  }

  // Personal Notes Methods
  async addPersonalNote(title: string, content: string) {
    await this.noteTitleInput.fill(title);
    await this.noteContentTextarea.fill(content);
    await this.addNoteButton.click();
  }

  async searchPersonalNote(keyword: string) {
    await this.searchInput.fill(keyword);
  }
}