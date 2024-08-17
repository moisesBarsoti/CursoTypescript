import { ShoppingCartLegacy } from "./aula1-S";
import { Mensage } from "./services/mensage";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCartLegacy();
const mensage = new Mensage();
const persistency = new Persistency();
const order = new Order(shoppingCart, mensage, persistency);

shoppingCart.addItem(new Product('Camiseta', 20));
shoppingCart.addItem(new Product('Short', 20));
shoppingCart.addItem(new Product('Boné', 20));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);