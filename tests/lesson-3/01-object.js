// Create `student` object and access Math score 
const student = {
    name: "John Doe",
    grade: {
        math: 8,
        english: 5
    }
};

console.log(`Math grade: ${student.grades["math"]}`);

// Create `product` object and use `for...in` to print `name` & `price`
const product = {
    pen: 18,
    pencil: 20,
    rule: 5
};

for (let property in product) {
    console.log(`${property} : ${product[property]}`);
}

// Create `bike` object and add `color` to it 
const bike = [];
bike.push({ color: "blue" });
console.log(bike);

// Create `employee` object with `name`, `age` then remove `age`
const employee = {
    name: "Smith",
    age: "23"
};
delete employee.age;
console.log(employee);

// Create school object 
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
};
console.log(school);
