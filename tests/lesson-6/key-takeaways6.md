# Class 

## What is a Class?
- A class is used to declare a data type.
- It allows for defining objects and their properties, methods, and behaviors.

## Declaring & Inheritance
- **Declare**: A class is defined using the `class` keyword.
- **Inheritance**: A class can inherit properties and methods from another class using the `extends` keyword.

### Example:
```javascript
class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

const myDog = new Dog();
myDog.speak(); // Output: Dog barks
```

## Key Concepts

### 1. `extends`
- The `extends` keyword is used to create a subclass that inherits properties and methods from a parent class.
- It allows code reuse by building on existing functionality.

### 2. `super`
- The `super` keyword refers to the parent class and is used to call its methods or access its properties.

### Example:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name); // call parent constructor
    this.grade = grade;
  }
}

const student = new Student('Alice', 'A');
console.log(student.name); // Output: Alice
```

## Why do we need Classes?
- **Code Reusability**: Classes allow for code reuse, making it easier to maintain and extend applications.
- **Flexibility**: Classes provide a flexible structure, enabling modification of behavior without changing the entire codebase.


# POM (Page Object Model) in Automation Testing

## What is POM?
- POM (Page Object Model) is a design pattern used in automation testing.
- Each **page** in the application is represented by a **class**.
- The **properties** (attributes) of the class correspond to the **elements** (UI components) on the page.
- The **methods** (functions) of the class represent the **actions** (user interactions) that can be performed on those elements.

### Example:
```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

## Why Use POM?

### Benefits of POM:
- **Code Reusability**: Allows for reusing the same page objects across different tests, reducing redundancy.
- **Organizes Code**: Keeps test scripts clean and well-organized by separating the logic of interactions with the UI from the test scripts.
- **Easy Maintenance**: When UI changes, you only need to update the page object rather than every individual test, ensuring a low-maintenance test suite.

By using POM, you can improve the scalability, maintainability, and readability of your test automation framework.

## Multiple POM with Inheritance

### Core Concept:
- Each page is still a **class**, with its own **properties** and **methods**.
- You can use **`extends`** to create a base class that holds common properties and methods shared across multiple pages.

### Example:
```javascript
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }
}

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.profileButton = page.locator('#profileBtn');
  }

  async openProfile() {
    await this.profileButton.click();
  }
}
```

### Note: Override Property
- Subclasses can **override properties or methods** from the parent class if the page has different behaviors or elements.
- This allows flexibility while keeping code DRY (Don't Repeat Yourself).

## Note: POM Standards
- There is **no universal standard** for POM.
- The structure and approach can vary based on:
  - **Framework**
  - **Programming language**
  - **Author** (the developer's personal style)
  - **Preferences** (based on project requirements and team agreements)