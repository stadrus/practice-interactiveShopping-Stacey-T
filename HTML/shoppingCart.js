let cart = [];

function addItems(item, cart){
 return item.push(cart);   
}
console.log("Current cart:", addItems("shoes"));

// function removeItems(cart, item){
//    let index = cart.indexOf(item);
//    let newCart = index !== -1?
//    [...cart.slice(0,index), ...cart.slice(index +1 )]: item;
//    return newCart;
// }
// console.log("Updated cart:", removeItems());


// function editItems(item){
    
// }