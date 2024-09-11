import { addToCart, cart, removeFromCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";

 const now= dayjs();
  const currentHour=now.hour();
 const  currentMinute=now.minute();
 let greeting;
 
 

 
 if(currentHour>7 && currentHour<20){     
greeting="Shop is open now";
 }
 else{
  greeting="Shop is Closed now ";
 }


 document.querySelector(".shop-info").innerHTML=greeting;

 

let cartSummaryHTML='';
cart.forEach((cartItem)=>{

    const productId=cartItem.productId;
   let matchingProduct;
   products.forEach((product)=>{
   if(product.id===productId){
      matchingProduct=product;
   }
   });
    
   cartSummaryHTML+=

    `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
         

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                  <span class="chekout-id">
        
                   id  ${matchingProduct.id} 
                   <span>
                </div>
               
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>


            </div>
          </div>


    `;

});

document.querySelector(".js-order-summary").innerHTML=cartSummaryHTML;

function checoutItem(){
  document.querySelector(".js-return-to-home-link").innerHTML=cart.length+" Shoes";
}

checoutItem();

document.querySelectorAll(".js-delete-link").forEach((link)=>{
    link.addEventListener('click',()=>{
   const productId= link.dataset.productId;
   removeFromCart(productId);
   const container= document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    checoutItem();
    });

});

