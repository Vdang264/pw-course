let Height = 166;
//I use slice to get the last 2 digits but it is only available for type = string so I parse it to string then back to int
let IdealWeight = (parseInt(Height.toString().slice(-2)) * 9 / 10);
let MaxWeight = parseInt(Height.toString().slice(-2));
let MinWeight = (parseInt(Height.toString().slice(-2)) * 8 / 10);

console.log("Height = " + Height + 
    ", IdealWeight = " + IdealWeight + 
    ", MaxWeight = " + MaxWeight + 
    ", MinWeight = " + MinWeight);