console.log('test')
console.log("test")

var firstname = 'Stien'
var firstName = 'Stien1'

console.log(firstname, firstName)

/* var, const, let*/ 

var x; 
x = 1
console.log(x)

const y='this is const'
// y='hello'
console.log (y)

let z;
console.log(z)

/* let = can be updated, but not re declared 
const = cant be updated or re-declared
var = can be re-declared and updated */

var MyMessage = 'Hi, this is default value';
var howmany = 4;

if(howmany>3) {
    myMessage = 'myMessage variable has been updated';
}

console.log(myMessage)

// math

var firstnumber;
var secondnumber;

firstnumber= 10;
secondnumber= 20; 
var total = firstnumber + secondnumber;
console.log ("TOTAL =>",total);

var a,b,c;
a=1;
b=2;
c=a+b;
console.log(c)

// https://www.techonthenet.com/js/reserved_words.php

/* Comments
in multiple lines*/

// single line comment

var myNumber = 1;
var pi = 3.14;
var LNumber = 1.000;
var myString ='This is String';
var myBoolean = true;
var myBoolean1 = false;

/* var a=5;

var b=6;

var app= document.getElementById('demo')

var c = a+b;

app.innerHTML=c;
11 */

var myVariable = 100;
myVariable += 40; // myVariable = myVariable + 40
console.log(myVariable);

var fullname= 'Stien'
fullname += ' Franssens'
console.log(fullname)

var asd = 6+6;
var test ="3" + 1;
var test2 = Number('3') + 1;
console.log(asd, test2, test)

console.log("Subtraction =>", 10-5);
console.log("Division =>", 10/2);
console.log("Modulus =>", 100%10);


/* 
Increment - X++ or ++X
decrment - x-- pr --x
*/

let myInc = 10;
let myDec = 10;
++myInc; // ++ equals +2
myInc++;
myDec--; // -- equals minus 2
--myDec;

console.log(myInc, myDec)

// javascript Comparison operators

/*
== > equal to
== > equal value and equal type
!= > not equal
> greater than
< less than
>= greater than or equal to
<= less than or equal to
? > trenary operator 

*/

var intec1 = 5;
var intec2 = 10;
var intec3 = "5";
var intec4 = intec1;

console.log(intec1 == intec3); // true or false? =true, checks only value
console.log(intec1 === intec3); // will be false, because checks value and type
console.log(intec1 == intec4); //true or false? true, with === is true as well, same type and same value
console.log(intec1 != intec2); // true
console.log(intec1 > intec2); // false
console.log(intec1<intec2); // true
console.log(intec1 >= intec2); // false
console.log(intec1 <= intec2); // true
console.log(intec1 >= intec3); // true



// logical operators
var showMe = (intec1!=intec2) && (intec1 < intec2);
showMe = (intec1 > intec2) || (intec1 == intec2);
showMe = !(intec1<intec2);
showMe = !(true); // ! means not -> so false
// condition ? firstValue : secondValue = syntax 
showMe = intec1 > intec2 ? "true":"false";
showMe ="String" === "String" ? "true":"false";
console.log(showMe); 

console.log(typeof(1))
console.log(typeof("1"))
console.log(typeof(true))
console.log(typeof([1,2,3,4]))
console.log(typeof(function(){}))
console.log(typeof(NaN))
console.log(typeof(new Date()))



