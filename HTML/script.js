let cart = [
    {id: 1, item: "Shirt"},
    {id: 2, item: "Pants" }
];
let item = "";
console.log(cart);


function addItems(item){
 return cart.push(item);   
}
console.log("Current cart:", addItems());

function removeItems(cart, item){
   let index = cart.indexOf(item);
   let newCart = index !== -1?
   [...newCart.slice(0,index), ...newCart.slice(index +1 )]: item;
   return newCart;

}
console.log("Updated cart:", removeItems("shoes"));


function editItems(item){
    let updatedItem = cart.map(item => item )
    return updatedItem; 
}
console.log(editItems());

// console.log(cart);

