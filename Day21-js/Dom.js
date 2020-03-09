// Dom object -> Root element is html, JS can access and change all html elements 

var message = "Hello Dom!";
var myApp = document.getElementById('app');

// myApp.firstElementChild.innerText ="test" // changes the first <p> in div element to 'test', changes content of text element

// myApp.innerHTML=message; // changes everything in div, because in myApp var -> id of div

// myApp.firstChild.textContent = "test2" // does same as innertext, doesn't copy css 

// myApp.append // When you create html el in JS, you can change

var ul = document.createElement('ul');
var li = document.createElement('li');
var myText = document.createTextNode('Javascript');
ul.append(li);
li.append(myText);
myApp.append(ul); // creates the ul element in div container

// don't use let or const for hoisting



var button = document.getElementById('button');
var h2 = document.getElementById('test');

h2.setAttribute('class', 'btn btn-primary') // changes h2 element to a button

var link = document.getElementById('link');
link.setAttribute('href', 'https://www.google.com') // first element in () is what you want to change, second argument is value of first

h2.style.marginLeft="20px" // moves the now test button a bit to the right
h2.style.fontSize = "50px" // changes font-size, not same way to write as in css -> css= font-size, js = fontSize



console.log(myApp.classList) // get all class names

for(var i=0; i<myApp.classList.length; i++){
    console.log(myApp.classList[i])
} // shows all class names 


// find type of html element
console.log(h2.nodeName); // result: h1
console.log(myApp.nodeName); // result: DIV

// Finding HTML Elements
// document.getElementByTagName(TagName) -> Tagname is h1, p, div, ...

var findElement = document.getElementsByTagName('h1');
console.log(findElement); // -> in console findElement[0], will show the <h1>xxx</h1>


//outerHTML property
// findElement[0].outerHTML="<p>Hello</p>" // changes h1 element to <p>, outer can change everything
// findElement[0].innerHTML="<p>Hello</p>" // changes only what's within the html element
// findElement[0].innerText="<p>Hello</p>" // Will show <p>Hello</p>
//https://www.knowledgewalls.com/johnpeter/books/good-javascript-examples/difference-between-innerhtml-and-outerhtml-in-javascript-element-object-with-example

// find element by class name

var className = document.getElementsByClassName('test1');
console.log(className) // in console -> className[0] -> will show the div element

// By classname by tagname by id name

//create element;
var newParagraph = document.createElement('p');
newParagraph.textContent ="Lorem ipsum";
myApp.append(newParagraph); // adds a paragraph to div element

// remove child element
var myList = document.getElementById('myList');
var myButton = document.getElementById('btn');

myButton.addEventListener('click', removeFunction);

/* function removeFunction (){
    myList.removeChild(myList.childNodes[0]);
} */

// myList.removeChild(myList.childNodes[myList.childNodes-1]); -> this will remove the last element

function removeFunction (){
    myList.removeChild(myList.firstElementChild);
    myList.removeChild(myList.lastElementChild);
    var test = document.querySelector('#myList li:nth-child(2)')
    test.remove();
} // removes first and last element in one click  

// Remove second child 

function removeFunction (){
    var test = document.querySelector('#myList li:nth-child(2)')
    test.remove();
} // removes second child 
