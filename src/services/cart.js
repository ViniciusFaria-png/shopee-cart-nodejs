
async function addItem(userCart, item){
    userCart.push(item);
}

async function deleteItem(userCart, nameItem){
    const index = userCart.findIndex((item)=>item.nameItem === nameItem);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p)=>p.nameItem === item.nameItem)
    
    
    if(indexFound == -1){
        console.log("Item nao encontrado")
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
    }
}

async function displayCart(userCart){
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) =>{
        console.log(`${index+1}.${item.nameItem} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    })
}

async function calculateTotal(userCart){
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

export { 
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}