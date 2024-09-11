
export let cart= JSON.parse(localStorage.getItem('cart')) ;

if(!cart){
    cart=[{
        productId:"A001",
        quantity:2
    },{
        productId:"A002",
        quantity:1
    }];
}


 function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
 }


export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId=== cartItem.productId){
        matchingItem=cartItem;
      }
  
    });
  
    if(matchingItem){
      matchingItem.quantity+=1;
    }
    else{
      cart.push({
        productId:productId,
        quantity:1
       });
    }
    saveToStorage();
  }
  
  
  export function updateCartQuantity(){
    let cartQuantity=0;
   cart.forEach((cartItem)=>{
  cartQuantity+=cartItem.quantity;
    
   });
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
   
  }
  

  export function removeFromCart(productId){
    const newCart=[];

    cart.forEach((cartItem)=>{
     if(cartItem.productId!==productId){
        newCart.push(cartItem);
     }
    });
   cart=newCart;
   
   saveToStorage();
  }

  export function added(productId){
    const elements= document.querySelectorAll(".js-added-to-cart");
  elements.forEach(element=>{
    if(element.dataset.productId===productId){
      element.style.opacity="1";
    }
  });
 
  }
  