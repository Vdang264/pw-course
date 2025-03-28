// Reverse the "Playwright" string 
let str = "Playwright";
let result = [];

for (let char of str) {
    result.push(char);  
}

result.reverse(); 
console.log(result);

//Get unique value
let arr = [6, 7, 8, 6, 9, 10, 9, 11, 12, 11];
let results = [];

for (let num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
        results.push(num);
    }
}

console.log(results);
