// Conditions statements

function GetRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}
 
if (GetRandomNumber(3,6)==5){
    console.log('Found it')
}else {
    console.log('Not right')
}

if (GetRandomNumber(3,6)==5){
    console.log('Found it')
}else if (GetRandomNumber(3,6)==3){
    console.log('Found second number')
}

if (GetRandomNumber(3,6)==5){
    console.log('Found it')
}else if (GetRandomNumber(3,6)==3){
    console.log('Found second number')
} else {
    console.log('nothing, try again!')
}