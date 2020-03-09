

function driver(a) {
    return a > 0.22 ? 'You are not allowed to drive' : "All good";
}

console.log(driver(.8));
console.log(driver(.08));


var numKids = 5;
var partner = 'David Beckham';
var geoLocation = 'Costa Rica';
var jobTitle = 'web developer';

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
    partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);




var birthYear = 1984;
var futureYear = 2012;
var age = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));


var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);


function tellFortune(x, y, w, z) {
    var future = "You will be a " + z + " in " + w + ", and married to " + y + " with " + x + " kids.";
    console.log(future);
}
tellFortune("3", "Johnny Depp", "Britain", "web developer");


// Local Variables

function showMeMyPassword() {
    var myPassword = '123456' // Local Variables
    console.log(myPassword);
}

showMeMyPassword()




function test() {
    // console.log(myPassword);
}
test();

/*       */

// Global Variable

var publicVariable = 'Foo' // Global Variable

function showData() {
    console.log(publicVariable);
}

showData();

function showData1() {
    console.log(publicVariable);
}

showData1();



/*function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);*/



function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(28, 2.5);


function calcGeometry(radius) {
    var circumference = Math.PI * 2 * radius;
    console.log("The circumference is " + circumference);
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

calcGeometry(50);


function celsiusToFahrenheit(celsiusTemp) {
    var Result = (celsiusTemp * 9)/5 +32;
        console.log(celsiusTemp + "°C is " + Result +"°F");
}
celsiusToFahrenheit(25);


