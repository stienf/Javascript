// Date object

new Date(); // will display full date

var Belgium = new Date();

console.log(Belgium);

console.log(Belgium.getFullYear()); // show 2020

console.log(Belgium.getMonth()); // shows 2 in march, because starts at 0


Belgium.toLocaleString('en-US'); // will show in English

Belgium.toLocaleString('nl-BE');

var getHour = Belgium.getHours();
var getMin = Belgium.getMinutes();
var getSec = Belgium.getSeconds();

var Time = getHour + ":" + getMin + ":" + getSec
var myDays = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]; // start with zondag, because otherwise it will show 'woensdag'

console.log(myDays[Belgium.getDay()]); // laat dag zien (dinsdag)
console.log(Time);


console.log(Belgium.setFullYear(2015, 01, 01)); // shows Unix timestamp (1422780191503)
var UnixTimeStampFormat = 1422780191503;
// var time = new Date(UnixTimeStampFormat * 1000);
console.log(new Date(UnixTimeStampFormat).toLocaleString('nl-be')); // not yet what it should show




var myDays = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]; // start with zondag, because otherwise it will show 'woensdag'
myDays[Belgium.getDay()]
"My time is"
'2010' / '10:12:30'


// now show in HTML file


window.setInterval(getTime, 1000); // 1000 updates every second, 10000 will update every 10 seconds, expressed in milliseconds
// this one will automatically update the date and time



function getTime() {
    var date = new Date();
    document.getElementById('time').innerHTML = date.toLocaleString(); // if you leave tolocalestring out, you will only get date

}


// this part prints day
var myButton = document.getElementById("showTime");

myButton.addEventListener('click', showDay);

var showDateTime = new Date();

function showDay() {
    var days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    document.getElementById('showDateTime').innerHTML = days[showDateTime.getDay()] + " / " + showDateTime.toLocaleString();

}



// document.getElementById('showDateTime').innerHTML = days[2] -> also shows 'dinsdag'

//chech dateobjEx for button

console.log()
