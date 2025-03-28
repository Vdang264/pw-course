const student = { 
    name: "Alex", //property: value
    age: 10,
    salary: 20
 };    //property: value

// Print the properties & its value 
for (let property in student) {
    console.log(`${property} = ${student[property]}`);
}

// Sum all numeric data 
let sum = 0;
for (let property in student) {
    if (typeof student[property] === "number") {
        sum += student[property];
    }
};
console.log(sum);

// Create new array contain property 
let newArr = []
for (let property in student) {
    newArr.push(property);
};

console.log(newArr);