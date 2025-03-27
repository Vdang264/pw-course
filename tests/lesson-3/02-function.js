function BMI(weight,height) {
    let bmi = weight / (height * height);
    let result;

    if ( bmi < 18.5 ) { result = "Thieu can" }
    else if ( bmi <25 ) { result = "Binh thuong" }
    else if ( bmi <30 ) { result = "Thua can" }
    else { result = "Beo phi" }
    
    return `${result}`;
};

console.log(BMI(50,1.70));

function convertTemp(value, type) {
    let convertedTemp;
    if (type === "C") {
        convertedTemp = (value * 9/5) + 32;
        return `${value}°C = ${convertedTemp}°F`;
    }
    else {
        convertedTemp = (value - 32) * 5/9;
        return `${value}°F = ${convertedTemp}°C`;
    }
};

console.log(convertTemp(0, "C"));

function getPrime(number) {
    return number.filter(
        num => {
            if (num < 2) {return false}; //lon hon 0 va 1 
            for (let i = 2; i < num; i++ ) { //i= number to calculate 
                if (num % i === 0) return false
            };
            return true;
        }
        
    )
};

const number = [7, 11, 5, 3, 4];
console.log (getPrime(number));


const user = [
    {name: "John", email: "john@gg.com"},
    {name:"Smith", email: "smith@ggg.com"}
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < user.length; i++ ) {   //i= index to access 
        if (user[i].name === name) {
            user[i].email = newEmail
            break
        }
    }
}

console.log("Original Email: " + JSON.stringify(user));
updateEmail("John", "newjohn@gg.com");
console.log("New Email: " + JSON.stringify(user));

