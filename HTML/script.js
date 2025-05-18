// const cart = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Headphones", price: 200 }
// ];

// const form = document.querySelector('form');

const addItemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add");
const removeItemButton = document.getElementById("remove");
const editItemButton = document.getElementById("edit");
const shoppingList = document.getElementById("list")





window.onload = () => {  
        document.addEventListener("click", (addItem));
        
        function addItem () {
            document.getElementById("add").innerHTML;
            document.getElementById("item-input") = cart.push(item);
        };
        console.log(addItem("juice"));

        


function removeItems(cart, item){
           let index = cart.indexOf(item);
                   let newCart = index !== -1?
                   [...cart.slice(0,index), ...cart.slice(index +1 )]: item;
                   return newCart;
                
                }
                console.log("Updated cart:", removeItems());
                
                
                function editItems(item){
                            let updatedItem = cart.map(item => item === item)
                            return updatedItem; 
                        }
                        
                        
                        
                }
                        console.log(editItems())
                        console.log(cart);
                        
                        removeItemButton.addEventListener("click", removeItems);
                        editItemButton.addEventListener("click", editItems);