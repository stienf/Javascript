// Math object

// PI number

console.log(Math.PI);

// Round method= round()

console.log(Math.round(9.6)); // returns 10

// Power method() returns he value of x to the power of y

console.log(Math.pow(8,2)); // returns 64

// square root of

console.log(Math.sqrt(64)); // 8

// absolute positive value

console.log(Math.abs(-9.6)); // makes -9 -> 9

// sin / cos 

console.log(Math.sin(90 * Math.PI/180)) // 1
console.log(Math.cos(0 * Math.PI/180)); // 1

// Find min and max number

console.log(Math.min(44,78,34,55,)); // 34
console.log(Math.max(1,2,3,4));

// Generate random numbers
console.log(Math.random()) // number between 0 and 1
console.log(Math.random()*10) // number between 0 and 9
console.log(Math.random()*11)  // between 0 and 10



// in function

function GetRandomNumber(min,max){
    return Math.random() * (max-min +1) + min;
}

console.log(GetRandomNumber(1,100));