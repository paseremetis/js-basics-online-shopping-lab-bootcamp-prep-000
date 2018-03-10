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
  var obj = {}
  return (`obj.push(`${item}`)`)
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
