// Dataflow
/*
var dataflow = 5;

function keeper1(a){
    return a;
}

function keeper2(a){
    return a;
}

function keeper3(a){
    return a;
}

var result = keeper3(keeper2(keeper1(dataflow)));

console.log(result);
 */


// Exercise day 15 

var students = [
    {
        name:"Student1",
        score:22,
    },
    {
        name:"Student2",
        score:65,
    },
    {
        name:"Student3",
        score:23,
    },
    {
        name:"Student4",
        score:88,
    },
    {
        name:"Student5",
        score:37,
    }
    ]

    // students.map(function(value,index,array){
       // console.log(value);
   // })

    // var score = students.filter(function(a){
        //return a.score >= 50
           //})

           function showEverything (myList){
               return myList.sort(function(a,b){
                   return b.score - a.score
               }).filter(function (student){
                   return student.score >=50
               }).map(function (value){
                   return value.name + " " + value.score;
               })
           }

            

            console.log(showEverything(students));
   