let cart = [];
let item = "";
// console.log(cart);
// 

const addItemInput = document.getElementById("add-item");
const addItemButton = document.getElementById("add");
const removeItemButton = document.getElementById("remove");
const editItemButton = document.getElementById("edit");
const shoppingCart = document.getElementById("cart").innerHTML;



function addItems(item){
    
    document.getElementById("cart").innerHTML = shoppingCart;
        docoument.getElementById("add-item") = cart.push(item);
            return cart;
}
console.log(addItems("juice"));

function removeItems(cart, item){
   let index = cart.indexOf(item);
   let newCart = index !== -1?
   [...cart.slice(0,index), ...cart.slice(index +1 )]: item;
   return newCart;

}
// console.log("Updated cart:", removeItems());


// function editItems(item){
//     let updatedItem = cart.map(item => item === item)
//     return updatedItem; 
// }
// console.log(editItems())
// console.log(cart);

addItemButton.addEventListener("click", addItems);
addItemInput.addEventListener("load", addItems);
// removeItemButton.addEventListener("click", removeItems);
// editItemButton.addEventListener("click", editItems);