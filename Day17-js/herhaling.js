  
// 02/03/2020
// HTML Elements
var myButton = document.getElementById("myBtn"); // Button to add element into productList
var ProductList = [] // local database

function addProduct() {
	var inputProduct = document.getElementById("inputProduct").value; // Input value
	
    ProductList.push(inputProduct) // sending productname to database, sends to productlist empty database
    ProductList.forEach((productName)=>{
        console.log(productName) 
    }) // new js syntax 
}

// typ things in button, will add to productlist
// call productlist: see things you typed


myButton.addEventListener("click", addProduct); // click



// addProduct('Apple');
// console.log(ProductList)


/*
onclick
onchange
<a href="adadsad" id="myButton" onclick="myFunction()">
var  a = document.getElementId("myButton");
a.addEventListener("click",myFunction())
*/