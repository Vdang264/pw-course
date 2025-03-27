# Git 

## Git help 
``` git --help ```

## Update commit message 
``` git commit --amend ```
1. Type `i` -> To insert mode 
2. Type `esc` -> Exit insert mode 
3. Type Gõ `:wq` -> Write and quit

``` git commit --amend -m”message” ```

## Bring the commit back from Stag 
``` git restore --staged <file> ```

## Bring the commit back from Repo (uncommit)
``` git reset HEAD~1 (undo 1 commit) ```

## Branching 
``` git branch <ten_branch> ``` -> Create new branch 

```git checkout <ten_branch> ``` -> Checkout branch 

```git checkout -b <ten_branch> ``` -> Create + checkout new branch 

## GitIgnore
File to store the data that should be ignored when pushing to repo 

## Source Control 
> Ctr + Shift + G 

To manage code. Such as: Clone repo, init repo, make commit, view timeline, etc. 

# Javascript 

## Convention 
- snake_case: Not been used in this course yet 
- kebab-case: File name 
- camelCase: Variable name 
- PascalCase: Class name 

## Console log format
```console.log(‘Lorem Ipsum’);
console.log("Lorem Ipsum");
console.log(`Lorem Ipsum`);
console.log(`${variable_name}`);
console.log(`Lorem Ipsum ${variable_name}`);
console.log("Lorem Ipsum" + variable_name + "");
```

## Object 
To store set of value in the same **Variable** or **Constant**

``` 
let/const <object_name> = { <type> : <value> }
```

Example: 

```
const person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    address: {
      city: "New York",
      country: "USA"
    }
  };

person.name = "Mr Smith";
person["address"]["country"] = "UAE";
  
console.log(person.name); // Mr Smith
console.log(person["address"]["country"]); // UAE
```

## Logical operator
- `&&`: and 
- `||`: or 
- `!`: reverse 

## Array 
### Using square brackets [ ]
```let fruits = ["Apple", "Banana", "Cherry"];```

### Using the Array constructor
```let numbers = new Array(1, 2, 3, 4, 5);```

### Accessing the Array using index 
```console.log(fruits[0]); //get the first one```

### Modify the value 
```fruits[1] = "Mango"; //modify the second value in the array```
- push: add value to the end 
- pop: remove the last one 
- unshift: add to the beginning
- shift: remove the first 

### Find element 
- Find one object in an array:`.find()`
- Find multiple matches: `.filter()`
- Check if a value exists in nested arrays: `.some()`
- Flatten and search: `.flat()`

## Function
``` function functionName() { function logic} ```

### Assign to a variable 
```const greet = function() {console.log("Hello!"); };``` 

### Arrow Function
```const greet = () => console.log("Hello!");```

### Parameters & Arguments
```
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
``` 

- Default param: 
```
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();       // Output: Hello, Guest
greet("Alice"); // Output: Hello, Alice
``` 

- Rest param: 
```
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
``` 
> The ...numbers gathers all arguments into an array.
Works well for functions with unknown number of arguments.

## Declare variables
- `var`: Function Scope
```
console.log(a); // undefined (biến được hoisted nhưng chưa có giá trị)
var a = 5;
console.log(a); // 5
```

- `let`: Block Scope
```
console.log(b); // Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10
```

- `const`: 

Block scope but cannot update value 
``` 
const PI = 3.14;
PI = 3.1415; // Assignment to constant variable.
```
Const protect variable but not protect value inside object/array
```
const person = { name: "Alice" };
person.name = "Bob"; // Valid 
console.log(person.name); // "Bob"
```
**Summary**
|Feature|var|let|const|
|-------|---|---|-----|
|Scope|Function Scope|Block Scope `{}`|Block Scope `{}`|
|Can be redeclared?|Yes|No|No|
|Can be reassigned?|Yes|Yes|No|
|Hoisting?|Yes (initialized as `undefined`)|Yes (but cannot be accessed before declaration)|Yes (but cannot be accessed before declaration)|
|Affected by block `{}`?|No|Yes|Yes|

## Control Flow
- `if... else`: Executes a block of code if a condition is true, otherwise runs another block
- `if ... else if ... if`: Checks multiple conditions
- `switch ... case`: An alternative to multiple if...else if statements, useful for checking one value against multiple cases
``` 
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no case matches
}
``` 

## Equality/ Inequality
- `==`: Loose Equality, check value only 
- `===`: Strict Equality, check type + value 
- `!=`: Loose Inequality, check value only 
- `!==`: Strict Inequality, check type + value 

## Loop 
### For 
Used when we know how many times the loop should run
``` 
for (initialization; condition; update) {
  // Code to execute
}
``` 

### While 
Used when the end condition is unknown
```
while (condition) {
  // Code to execute
}
```

### Do... while 
Similar to `while`, but executes once before checking the condition.
```
do {
  // Code to execute
} while (condition);
```

### For...in 
Used to iterate over the keys (properties) of an object.
Use `for...in` for objects, **NOT** for arrays (use `for...of` instead).
```
const person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: New York
```

### For...of 
Used to iterate over arrays, strings, or other iterables.
Use `for...of` for arrays, strings, Maps, Sets, etc
Example: Through an array 
``` 
const fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
```

Example: Through a string 
```
const text = "Hello";

for (let char of text) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

### Break and Continue
- `break` → Exits the loop immediately.
Example: 
```
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;  // Stop when i = 3
  console.log(i);
}
// Output: 1 2
```

- `continue` → Skips the current iteration and moves to the next.
Example: 
```
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;  // Skip when i = 3
  console.log(i);
}
// Output: 1 2 4 5
```
### forEach 
`forEach()` method is used to iterate over arrays and execute a function for each element
It **does not break** or use **return** (use for or for...of if you need to break)

```
array.forEach(function(element, index, array) {
  // Code to execute for each element
});
```
- Example: Find data 
```
const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [88, 76, 95] },
  { name: "Charlie", scores: [92, 89, 84] }
];

students.forEach((student, index) => {
  console.log(`Student ${index + 1}: ${student.name}`);
  student.scores.forEach((score, scoreIndex) => {
    console.log(`  Score ${scoreIndex + 1}: ${score}`);
  });
});
```

- Example: Modify data 
```
const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [88, 76, 95] },
  { name: "Charlie", scores: [92, 89, 84] }
];

// Increase each score by 5 points
students.forEach(student => {
  student.scores.forEach((score, index, scoresArray) => {
    scoresArray[index] = score + 5; // Modify score
  });
});

console.log(students);
```
