/*

    <div class="row">
    <div class="col-md-2 bg-secondary p-2 text-center">
        <img src="img/dropbox.png" id="productImg" class="img-responsive" alt="" srcset="">
    </div>
    <div class="col-md-6 bg-dark p-2 text-center">

    <span id="text-center">DJI Mavic 2 Zoom Drone with Smart Controller Kenko Filter Kit AU 1 Year Warranty
     </span>
    </div>

    <div class="col-md-4 bg-secondary p-2 price text-center">

    <span id="text-center align-middle">$189.00</span>
    <i class="fa fa-cart-plus" aria-hidden="true"></i>

    </div>
                        */



var productList = document.getElementById('productList');

var products = [
    {
        productImg:"img/dropbox.png",
        productTitle: "DJI Mavic 2 Zoom Drone with Smart Controller Kenko Filter Kit AU 1 Year Warranty",
        productPrice: "$189"
    }, 
    {
        productImg:"HN0M2_AV1.jpg",
        productTitle: "Headphones",
        productPrice:"$50"
    }
]




// += to add a new product
var mybtn = document.getElementById('btn')

mybtn.addEventListener('click',ShowProductButton);
var isShown = false;

function ShowProductButton(){
    if(isShown === true){

    products.forEach(function getProduct(item, index){ // you can also use the for loop, forEach needs 2 parameters
        productList.innerHTML +=` 
        
        <div class="row">
        <div class="col-md-2 bg-secondary p-2 text-center">
            <img src="${item.productImg} " id="productImg" class="img-responsive" alt="" srcset="">
        </div>
        <div class="col-md-6 bg-dark p-2 text-center">
        
        <span id="text-center">${item.productTitle}</span>
        </div>
        
        <div class="col-md-4 bg-secondary p-2 price text-center">
        
        <span id="text-center align-middle">${item.productPrice}</span>
        <i class="fa fa-cart-plus" aria-hidden="true"></i>
        
        </div>
        `; isShown= false
        })

} else{
    productList.innerHTML="";
    isShown=true;
}
}
// function getProduct(item, index){} 

