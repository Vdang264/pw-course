// Sum from 1 to 100
function sumExecute(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    console.log(sum);
};

sumExecute(1, 100);

// Bang cuu chuong
function bangCuuChuong() {
    for (let n = 2; n <= 9; n++) {
        for (let m = 1; m <= 10; m++) {
            console.log(`${n} x ${m} = ${n * m}`);
        }
    }
}

bangCuuChuong();

// Print the array 
const oddNumbers = [];
for (let i = 1; i < 100; i++) {
    if (i % 2) {
    oddNumbers.push(i)};
}

console.log(oddNumbers);

// Revenue 
const revenue = [
    { month: 1, total: 34 },
    { month: 2, total: 80 }
];

function totalRevenue() {
    let sum = 0;
    for (let i = 0; i < revenue.length; i++) {
        sum += revenue[i].total;
    }
    console.log(sum);
}

totalRevenue(); 