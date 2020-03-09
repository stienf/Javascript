console.log('test')
console.log("test")



var r = 20;
var n = 17;
console.log(r >= 18); //true
console.log(n >= 18); //false

function brother(r, n) {
    if (r >= 18) {
        return "You can drink";
    }
    if (n >= 18) {
        return "You can drink";
    }
    return "You can\'t drink"
}

console.log(brother(r));









var firstname = 'Anna'
var firstName = 'Nikolaievna'
console.log(firstname, firstName)

var x;
x = 1
console.log(x)

const y = 'this is const'
//y='hello'
console.log(y)

let z;
console.log(z)

var myMessage = 'hi, this is default value';
var howmany = 4;
if (howmany > 3) {
    myMessage = "myMesage variable has been updated";
}
console.log(myMessage)

//math

var firstnumber;
var secondnumber;
firstnumber = 10;
secondnumber = 20;
var total = firstnumber + secondnumber;
console.log("Total=>", total, firstnumber, secondnumber)

var a, b, c;
a = 1;
b = 2;
c = a + b;
console.log(c)


var myNumber = 1;
var myString = 'This is a String';
var myBoolean = true;
var myBoolean = false;


var myVaruable = 100;
myVaruable += 40;
console.log(myVaruable);


a = 5
a += 10 // a = a+5 // 15

console.log(a);

var asd = 6 + 6;
var test = Number('3') + 1;
var test1 = "3" + 1;
console.log(test1, "", asd, "", test);

console.log(10 - 5);
console.log("Subtraction=>", 10 - 5);
console.log("Modulus=>", 100 % 10);

//decriment x--, Increment ++
let myInc = 10;
let myDec = 10;
myInc++;
++myInc;
myDec--;
--myDec;
console.log(myInc, " ", myDec);

//comparation operators

var intec1 = 5;
var intec2 = 10;
var intec3 = "5";
var intec4 = intec1
console.log(intec1 == intec4) //true
console.log(intec1 === intec4) //false
console.log(intec1 != intec2) //true
console.log(intec1 > intec2) //true

//logical operators
var showMe = (intec1 != intec2) && (intec1 < intec2);
console.log(showMe);

showMe = (intec1 > intec2) || (intec1 == intec2);
console.log(showMe);

showMe = !(intec1 < intec2);
console.log(showMe);

showMe = !(false)
console.log(showMe);

//condition ? firstValue : secondVale;
showMe = intec1 > intec2
console.log(showMe);

showMe = "String" === "String"
console.log(showMe);









//Data type {Array}
var students = [
    "Viktoria",
    "Anna",
    "Merlin",
    "Christoph",
    "GuYing"
];


console.log(students[1]); //4 items
console.log(students.length[3]);


function myFunc (){
    return 'This is a function'
}


console.log (myFunc());

function doSomeCalc (a, b) {
    var total = a+b;
    //return total;
    console.log(total)
}
//console.log(doSomeCalc(10,15))
doSomeCalc(10, 15);



function findBiggestNumber (x,y){
return x >= y ? 'x is greater than Y' : 'x is less than y';

}
console.log(findBiggestNumber (5,20));


var data ={
    name: "Anna",
    job: "developer",
    age: "29",
    showData: function() {
        return `
        \nName:${this.name}\nJob:${this.job}\nAge:${this.age}
        `
    }
}
console.log(data.showData());




