//declare variables
const Number = 12;
let Name = "My number";
let isEven = false;

//function to check if it is odd or even number
if (Number % 2 == 0) { isEven = true; }
else { isEven = false; }

//print the result using template literals
console.log(`${Name} is even number which is ${isEven}`);

