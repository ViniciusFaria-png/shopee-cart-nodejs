

async function createItem(nameItem, price, quantity){
    return{
        nameItem,
        price,
        quantity,
        subtotal: () => price*quantity,
    }
}

export default createItem;