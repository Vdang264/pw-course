let Height = 166;
let Last2Digit;

if (Height <= 100 || Height >= 200) {
    console.log(`Cong thuc chi phu hop voi chieu cao trong khoang 100 den 200`);
} else {
    Last2Digit = parseInt(Height.toString().slice(-2));
    //I use slice to get the last 2 digits but it is only available for type = string so I parse it to string then back to int

    let IdealWeight = Last2Digit * 9 / 10;
    let MaxWeight = Last2Digit;
    let MinWeight = Last2Digit * 8 / 10;

    console.log(
        `IdealWeight = ${IdealWeight}
        , MaxWeight = ${MaxWeight}
        , MinWeight = ${MinWeight}`
    )
}