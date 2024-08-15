import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWishList = [];


console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Rtx 4070", 4000.99, 1);
const item2 = await createItem("SSD 1tb", 599.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item2.nameItem)
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);



console.log("Shopee Cart Total is:");
await cartService.calculateTotal(myCart);
