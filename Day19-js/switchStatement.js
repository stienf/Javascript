// switch statement

// executes a block of code, 

/* switch(value)
case value1:
    // execute code here
    case value2:
        // execute code here
        default:
            // print or execute something here
            break;

// one must return true, or you will see default */




var number = 5; 
switch (number){
    case 0: 
    console.log('0');
    case 3:
    console.log('3');
    case 5: 
    console.log('5 is correct')
    break; // without this, it will print '5 is correct' + 'default'
    default: 
    console.log('default')
}

// if 5 isn't found, it will show 'default'

var myDay = new Date();
switch(myDay.getDay()){
    case 0:
    console.log('Sunday');
    case 1:
    console.log('Monday');
    case 2:
    console.log('Tuesday');
    case 3:
    console.log('Wednesday');
    case 4:
    console.log('Thursday');
    case 5:
    console.log('Friday');
    case 6:
    console.log('Saturday');
  
} // If today is thursday, it will print thursday, friday and saturday, so you have to add break

var myDay = new Date();
switch(myDay.getDay()){
    case 0:
    console.log('Sunday');
    break;
    case 1:
    console.log('Monday');
    break;
    case 2:
    console.log('Tuesday');
    break;
    case 3:
    console.log('Wednesday');
    break;
    case 4:
    console.log('Thursday');
    break;
    case 5:
    console.log('Friday');
    break;
    case 6:
    console.log('Saturday');
    break;
} // will only print out 'thursday'

// same as if/else

var winner = "Jack";
switch(winner){
    case "Michael":
        console.log('Winner: Michael');
        break;
    case "Jackie":
        console.log('Winner: Jackie');
        break;
    case "Jack":
        console.log('Winner: Jack');
        break;
    default:
        console.log('Default');
}


var checkBoolean = false;

var ThisisBoolean = 'true';

switch(Boolean(ThisisBoolean)){ // because var is in string type, can be put inside console.log as well

case true:
    console.log('returned true');
break;
case false:
    console.log('returned false');
break;
}


//

console.log(1<5)
console.log(1<5? 'This is true':'this is false') // use this if you want to print out a string, a function, ..., works like if/else

//

var myBoolean1 = true;
function profile(){
    console.log('Show profile // function callback')
}

switch (myBoolean1){
    case false:
        console.log('non')
    case true:
        profile();
    break;
} // shows what's in console.log in function