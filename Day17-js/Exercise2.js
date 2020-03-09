// get html element
/* var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var MyResult = document.getElementById('result'); //update badge 
var count = 0; // make this increase by ++



increment.addEventListener('click', Increment);
decrement.addEventListener('click', Decrement)

function Increment(){
    count++;
    console.log(count)
    MyResult.innerText=count; // Badge html element updating here
    console.log('this is an increment')
}

function Decrement(){
    count--;
    console.log(count)
    MyResult.innerText=count; // Badge html element updating here
    console.log('this is an decrement')
} */


// if you don't want the minus digits: 

var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var MyResult = document.getElementById('result'); //update badge 
var count = 0; // make this increase by ++



increment.addEventListener('click', Increment);
decrement.addEventListener('click', Decrement)

function Increment(){
    count = count+2; // add only one by count++ (no =)
    console.log(count)
    MyResult.innerText=count; // Badge html element updating here
    console.log('this is an increment')
}

function Decrement(){
    
    if(count<=0){ // use <= because with only < it shows -1
        //alert('negative nrs not allowed') // 
        MyResult.innerText="0"; // or this option
    }else{
    count--;
    console.log(count)
    MyResult.innerText=count; // Badge html element updating here
    console.log('this is an decrement')
}
}