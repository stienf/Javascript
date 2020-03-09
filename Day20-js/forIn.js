// for in

// loops through properties of array object

/* var people{

    name: 'Jack'
    age: 29
}

var myKey;
// for(myKey in people){
//    console.log(people[myKey])
} */

var myKey;
var students = [
    {

        name: 'Jack',
        age: 29
    },
    {

        name: 'Jackie',
        age: 30
    }
]

for(myKey in students){
    console.log(students[myKey].name)
    console.log(students[myKey].age)
}

// for of

for (myKey of students){
    console.log(myKey)
    console.log(myKey.name)
    console.log(myKey.age)
}

// while loop

console.log(students.length)
var i = 0; //NaN

while(i<students.length){
    // students.length = 2
console.log(students[i])
i++ // 0,1
}

//



while(i<100){
    i++;
    if (i%2==0){
        console.log(i)
    }
}