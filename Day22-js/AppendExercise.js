/* Create the following html in JS:
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/ 


// Make first div container
var container = document.createElement('div');
container.className="card";
container.style.width="18rem";

// make img element
var img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1582896498393-ba1d3cabde41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60";
img.className="card-img-top";
img.alt="architecture";

// make other div
var containerTwo = document.createElement('div');
containerTwo.className="card-body";

// make h5
var h5 = document.createElement('h5');
h5.className = "card-title";

// make p 
var p = document.createElement('p');
p.className = "card-text";

// make anchor
var anchor = document.createElement('a');
anchor.href="#";
anchor.className="btn btn-primary";

// put everything in first container
container.appendChild(img);
container.appendChild(containerTwo);
container.appendChild(h5);
container.appendChild(p);
container.appendChild(anchor);

// put h5, p and anchor into containerTwo
containerTwo.appendChild(h5);
containerTwo.appendChild(p);
containerTwo.appendChild(anchor);

// insert text in different elements

var textH5 = document.createTextNode('Card Title');
h5.appendChild(textH5);
var textP = document.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");
p.appendChild(textP);
var textAnchor = document.createTextNode('Go somewhere');
anchor.appendChild(textAnchor);

// Make html visible
document.body.appendChild(container);



console.log(container);
console.log(img);
console.log(containerTwo);
console.log(h5);
console.log(p);
console.log(anchor);