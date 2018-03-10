var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = [];
  var obj = {`${item}`: Math.random}
  var object = new Object ([value]);
  if (cart.length = 0){
    return (`Your shopping cart is empty.`)
  }else{
    let i = 0;
    while(i < cart.length){
    cart.push(`${obj}`);
    i++
  }
  return cart
 }
}

 //return [{ item, price }, { }, { }]
 //generate random math integer for price
//}

function viewCart() {
  if(cart.length === 0){
  return (`Your shopping cart is empty.`)
}else{
  return cart
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
