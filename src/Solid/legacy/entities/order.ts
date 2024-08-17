import { ShoppingCartLegacy } from "../aula1-S";
import { OrderStatus } from "./interfaces/orderStatus";
import { Mensage } from "../services/mensage";
import { Persistency } from "../services/persistency";

export class Order {
    private _orderStatus: OrderStatus = 'Open';

    constructor(
        private readonly cart: ShoppingCartLegacy, 
        private readonly mensaging: Mensage,
        private readonly persistency: Persistency
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }

        this._orderStatus = "Closed";
        this.mensaging.sendMensage(`Seu pedido com total de ${this.cart.total()} foi recebido`);
        this.persistency.saveOrder();
        this.cart.clear();
    }
}