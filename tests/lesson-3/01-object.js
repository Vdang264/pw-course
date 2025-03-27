const student = {
    name: "John Doe",
    grade: {
        math: 8,
        english: 5
    }
};

const product = {
    pen: 18,
    pencil: 20,
    rule: 5
};

for (let property in product) {
    console.log(` ${property} : ${product[property]}`);
};


const bike = [];  
bike.push({ color: "blue" }); 
console.log(bike);

const employee = {
    name: "Smith",
    age: "23"
};
delete employee.age;
console.log (employee);

const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
};
console.log (school);