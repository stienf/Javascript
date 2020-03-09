// html elements


var placeholder1 = document.getElementById('placeholder1');
var placeholder2 = document.getElementById('placeholder2');
var diceButton = document.getElementById('dicebutton');


// EventListener
diceButton.addEventListener('click', diceRollerFunction);

// Function

function diceRollerFunction(){
    var diceRollSide = 6;
    var diceRollMatch = [] // can be deleted
    var randomNumber1 = Math.floor(Math.random()*diceRollSide)  +1 ; // default math.random is betwen 0 and 1
    var randomNumber2 = Math.floor(Math.random()*diceRollSide)  +1 ; // floor rounds number, +1 because otherwise it shows 0
    // math.random will generate random nr between 0 and 1, you then do this times 6, +1 because no 0, math.floor will make it a round nr
    if (randomNumber1 == randomNumber2){
        document.getElementById('placeholder1').style.backgroundColor="green"
        document.getElementById('placeholder2').style.backgroundColor="green"
        console.log("number matches")
        diceRollMatch.push(randomNumber1); // can be deleted
        diceRollMatch.push(randomNumber2); // can be deleted
        
    }else{
        document.getElementById('placeholder1').style.backgroundColor=""
        document.getElementById('placeholder2').style.backgroundColor=""
    }
    placeholder1.innerText = randomNumber1;
    placeholder2.innerText = randomNumber2;
    console.log(randomNumber1, "", randomNumber2)
    console.log(diceRollMatch) // can be deleted 
    console.log('testing');
}