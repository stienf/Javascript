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

        
    
    var studentsThatPassed = students.filter(function(students){
        return students.score >= 50 });

        console.log(studentsThatPassed);