// Print the array 
function print(arr) {
    arr.forEach((value, index) => 
        console.log(arr[index]));
}

print([9, -1, 13]);

// Sum & find min max value 
function calculate(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i]
        };
        if (arr[i] > max) {
            max = arr[i]
        };
    }

    console.log(
        `Sum: ${sum}, 
        Min: ${min}, 
        Max: ${max}`);
}

const numbers = [7, 18, 16];
calculate(numbers);

// Double value 
function doubleArray(arr) {
    let newArr = [];
    arr.forEach(n => {
        newArr.push(n * 2);
        console.log(newArr);
    });
}

doubleArray([8, 0]); 


