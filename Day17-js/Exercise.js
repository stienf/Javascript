var myButton = document.getElementById("myBtn")
var Email = document.getElementById("mail");
var Password = document.getElementById("password");
var myRecords = [];


function allData(inputmail, inputpassword){
    inputmail = Email.value;
    inputpassword = Password.value;
//    console.log(inputmail)
  //  console.log(inputpassword)
   /* myRecords.push(inputmail)
    myRecords.push(inputpassword)*/
    let temp = []; // temp array for retrive username and password to generate an unique array object 
    temp.push({
        "email": inputmail,
        "password": inputpassword
    })
   
    myRecords.push(temp) // insert the temp object into our real array object 

    console.log(myRecords)
  
}

myButton.addEventListener("click", allData);









