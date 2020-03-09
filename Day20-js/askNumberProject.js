var answer;
var result = 0;

while(answer%2!=0){
    answer = prompt("Enter the number: ");
    result += answer;
}

result -= answer;
document.write(result);

// keeps going untill you give an even number

// do while

do {  
    myFunction();
} while(condition)
