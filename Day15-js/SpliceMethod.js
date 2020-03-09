var myNumber = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
var secondArray = [11,12,13,14]
myNumber.splice(1,5); // starts with 2nd character, and deletes 5 numbers after this one. 
console.log(myNumber)

var result = myNumber.concat(secondArray);

var data = "       blabla           "
var data1= "blabla"
var result = data.concat(data1);
console.log(result)


// Sort method

var myNewArray = ['Jack', 'Merlin', 'Anna', 'Stien', 'Tim', 'Paul'];

myNewArray.sort(); // sorts alphabetically, doesn't work for numbers

myNewArray.reverse(); // reverse alphabet

console.log(myNewArray)

/* 

function(a,b){
    return a-b
}
*/


var myNewNumbers = [3, 6, 8, 10, 67, 2];

myNewNumbers.sort(function(a,b){return a-b}); // only this works to sort numbers, change to b-a for reverse

console.log(myNewNumbers);

//Array Iteration Method
// for each method

myNewNumbers.forEach(myFunc);

function myFunc(value, index, array){
    console.log("Index => ",index)
    console.log("Value=>", value)
}