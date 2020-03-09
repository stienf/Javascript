// do while 

var i = 10;

/*
do {

} while (condition) */

do {
    console.log(i);
    i--;
} while(i>=1)


var x = 0;

do{
    var test = Math.floor(Math.random() * Math.floor(100));
    x++;
}while(test!=50);

console.log(x);


// in html

var number;
var sum = 0;

do{
number = prompt('Enter a number') //number = parseInt(promt('Enter a number)) -> will calculate the previous entered numbers
sum += number;
}while(number!=0);

document.write(sum)