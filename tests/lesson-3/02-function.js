// BMI Calculator 
function BMI(weight, height) {
    let bmi = weight / (height * height);
    let result;

    if (bmi < 18.5) {
        result = "Thieu can";
    } else if (bmi < 25) {
        result = "Binh thuong";
    } else if (bmi < 30) {
        result = "Thua can";
    } else {
        result = "Beo phi";
    }
    return result;
}

console.log(BMI(50, 1.70));

// Convert Temperature 
function convertTemp(value, type) {
    let convertedTemp;
    if (type === "C") {
        convertedTemp = (value * 9 / 5) + 32;
        return `${value}°C = ${convertedTemp}°F`;
    } else {
        convertedTemp = (value - 32) * 5 / 9;
        return `${value}°F = ${convertedTemp}°C`;
    }
}

console.log(convertTemp(0, "C"));

// Get Prime Numbers from Array 
function getPrime(numbers) {
    return numbers.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

const numbers = [7, 11, 5, 3, 4];
console.log(getPrime(numbers));

// Update Email 
const users = [
    { name: "John", email: "john@gg.com" },
    { name: "Smith", email: "smith@ggg.com" }
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            break;
        }
    }
}

console.log("Original Email: " + JSON.stringify(users));
updateEmail("John", "newjohn@gg.com");
console.log("New Email: " + JSON.stringify(users));

// Average Score 
function averageScore(students) {
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }
    return totalScore / students.length;
}

const students = [
    { name: "Alex", score: 85 },
    { name: "John", score: 70 },
    { name: "Sarah", score: 65 }
];
console.log(averageScore(students));

// Print Ticket Price Based on Age 
function ticketPriceByAge(age) {
    let price = 0;
    if (age <= 5) {
        price = 0;
    } else if (age >= 6 && age <= 17) {
        price = 50;
    } else {
        price = 100;
    }
    console.log(price);
}

ticketPriceByAge(10);

// Print Month's Name 
function getMonthName(month) {
    switch (month) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid month number";
    }
}

console.log(getMonthName(10));

// Check Temperature 
function checkTemp(temp) {
    if (temp >= 30) {
        return "Hot";
    } else if (temp >= 20) {
        return "Cool";
    } else {
        return "Cold";
    }
}

console.log(checkTemp(34));
