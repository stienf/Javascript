function doIt(){
    var myInputValue = document.getElementById('myInput').value
    var myResult = document.getElementById('result');
    return myResult.innerText=myInputValue;
}


function go(){
    var myFirstValue = document.getElementById('myFirst').value
    var mySecondValue = document.getElementById('mySecond').value
    var myCalc = document.getElementById('myCalc');
    return myCalc.innerText = Number (myFirstValue) + Number(mySecondValue);
}
