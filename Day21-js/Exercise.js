// myFigure (playe)
var player = document.getElementById('player');

var i = 0;

function moveForward() {
    i += 5; // how many pixels it moves at once
    if (i < 300) { //300 is when it stops in screen and repeats fom start
player.style.left=`${i}px`;
    } else{
        i=0;
        i+=5;
        player.style.left=`${i}px`; // `${i}px` = same as i+'px'
    }
setTimeout(moveForward,40) // 40 makes it move forward faster, 30 is even faster, 50 would be slower
}

moveForward(); // call function to make him move