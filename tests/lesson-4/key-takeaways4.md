# DOM 
Document Object Model (DOM), elements are structured in a hierarchical tree
- Self: Current node. 
- Parent: The element that contains another element. 
- Child: The elements inside a parent. 
---

- Ancestor: Any element that is a parent, grandparent, great-grandparent, etc. 
- Descendant: Any element that is a child, grandchild, great-grandchild, etc. 
---

- Sibling: Element that shares the **same parent** with another element. 
---

- Following: Appears **after** a given element in the document tree, **regardless** of its **parent**.
- Following-sibling: An element that comes **after** a given element and shares the **same parent**.
---

- Preceding: Appears **before** a given element in the document tree, **regardless** of its **parent**.
- Preceding-sibling: An element that comes **before** a given element and shares the same parent.
---

# Selector 
## Xpath selector 
2 types: 
- Absolute
- Relative 

## Xpath advance methods 
### Wildcard 
The * wildcard selects any element regardless of its tag name
```
//div/*  
```

### Select Elements Containing an Attribute
To select elements that contain a specific attribute
```
//input[@type='text'] 
```

### And & Or Operators
Used to combine multiple conditions.
```
//input[@type='text' and @name='username']  
//button[@id='submit' or @class='btn']  
```

### innerText: text()
Text() retrieves only the text inside an element
```
//p[text()='Welcome']  
```

### normalize-space()
Removes extra spaces before, after, and between words
```
//p[normalize-space()='Hello World']  
```

### contains()
Checks if a string contains a substring
```
//a[contains(@href, 'login')]  
//p[contains(text(), 'error')]  
```

### starts-with()
Checks if a string starts with a specific substring
```
//input[starts-with(@id, 'user_')]  
```

### not()
Negates a condition
```
//div[not(@class='hidden')]  
```

# Playwright basic syntax 
## Basic actions 
## Navigate: 
```
await page.goto('https://example.com');  // Navigate to a URL
```

## Click 
```
await page.click('button#submit');  // Click a button with ID 'submit'
await page.click('text="Login"');   // Click a link or text element with the label 'Login'
```

### Input 
``` 
await page.fill('input[name="username"]', 'myUsername');  // Type 'myUsername' into the input field with name 'username'
await page.fill('input[name="password"]', 'myPassword');  // Type 'myPassword' into the input field with name 'password'
``` 

### Radio/Checkbox 
```
// Select a radio button
await page.check('input[type="radio"][value="male"]');  // Check the radio button with value 'male'

// Select a checkbox
await page.check('input[type="checkbox"][name="accept_terms"]');  // Check the checkbox with name 'accept_terms'

// Uncheck a checkbox
await page.uncheck('input[type="checkbox"][name="accept_terms"]');  // Uncheck the checkbox
```

### Select option 
```
// Select an option by value
await page.selectOption('select#country', { value: 'US' });  // Select option with value 'US'

// Select an option by label
await page.selectOption('select#country', { label: 'United States' });  // Select option with label 'United States'
```

### Set input file 
Remember to add the file to repo code 
```
await page.setInputFiles('input[type="file"]', 'path/to/file.txt');  // Set a file to the input field
```