type CartItem = {name: string, price: number};
type OrderStatus = 'Open' | 'Closed';

export class ShoppingCart {
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = 'Open';

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    total(): number {
        return + this._items.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }

        this._orderStatus = 'Closed';
        this.sendMensage(`Seu pedido com total de ${this.total()} foi recebido`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0
    }

    sendMensage(msg: string): void {
        console.log('Mensgem enviada: ', msg);
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso...');
    }

    clear(): void {
        console.log("Carrinho de compras foi limpo");
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({name: 'Camiseta', price: 40});
shoppingCart.addItem({name: 'Short', price: 30.90});
shoppingCart.addItem({name: 'Boné', price: 70});

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout()
console.log(shoppingCart.orderStatus)