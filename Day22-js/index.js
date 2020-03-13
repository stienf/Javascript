// UL list element - for DOM access
var myUl = document.getElementById('mylist');
var myButton = document.getElementById('add');
var task = document.getElementById('task'); // to print input to


myEventListener(); // calls the two functions

function myEventListener() {
    myButton.addEventListener('click', toDoFunction);
}

function toDoFunction(event) { // event object from addeventlistener
    event.preventDefault(); // prevents page from reloading
    var input = document.createElement('input');
    var li = document.createElement('li');
    var btn = document.createElement('button');
    var addToDoButton = document.createElement('button') // to add the to do input


    var addToDoButtonName = document.createTextNode('Add task to my list')
    addToDoButton.appendChild(addToDoButtonName); // put text inside the button





    btn.appendChild(document.createTextNode('X'))
    input.type = 'text';
    li.append(input);
    li.appendChild(btn);

    li.appendChild(addToDoButton);



    myUl.appendChild(li);

    addToDoButton.addEventListener('click', function todo(event){
        task.innerHTML+=`<li>${input.value}</li>`
        event.preventDefault();
       
    })


    btn.addEventListener('click', function x(event) {
        event.preventDefault();
        myUl.removeChild(li);
    })
}

