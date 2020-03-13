// div container - parent
var container = document.createElement('div'); // creates a div element in html file
container.className="container"; // gives div element a classname

//row - parent of col and child of container
var row = document.createElement('div'); // to create a row, first create a div
row.className="row"; // put row as a classname

//col - child
var col = document.createElement('div');
col.className="col-sm-12";

// put col in row
row.appendChild(col); // now the col is nested within the row div

// put row in container 
container.appendChild(row); // put the row in the container

// textContent -> will replace everything inside the div, so it's not good to use for inserting text

/* add text in row, but keep the col in the row

row.textContent = "Hello" -> this will add the text, but the col dissapeared

*/

// insert text in row

var myMessage = document.createTextNode('Hello there');
//row.appendChild(myMessage); // adds the Hello there text in row, under the col element
row.append(myMessage); // does the same as the previous line

// make html visible
document.body.appendChild(container) // this shows the message "hello there" in the html file


//console.log(col);
//console.log(row);
console.log(container);