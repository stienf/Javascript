var books = ['book1' , 'book2' , 'book3' , 'book4', 'book5'];
var MyArray = document.getElementById('MyArray').innerText=books;




function myFunction (){
var showInConsole = books.shift();
MyArray = document.getElementById('MyArray').innerText=books;

}