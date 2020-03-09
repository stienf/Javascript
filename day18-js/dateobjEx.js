var myTime = document.getElementById("showDateTime"); // printing result
var myBtn = document.getElementById("showTime");


myBtn.addEventListener('click',getTime)

function getTime (){
    var days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    var date = new Date();

setInterval(getTime,1000); // 3000 is per 3 seconds, per one second = 1000 or leave out
myTime.innerHTML = days[date.getDay()] + " / " + date.toLocaleString();
}
