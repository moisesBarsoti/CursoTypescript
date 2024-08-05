export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProduto(...produtos: Produto[]) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos() {
        return this.produtos.length;
    }

    valorTotal() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(
        public name: string,
        public preco: number,
    ) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneta', 9);
const produto3 = new Produto('Carrinho', 50.9);

const CarrinhoDeCompras1 = new CarrinhoDeCompras();
CarrinhoDeCompras1.inserirProduto(produto1,produto2,produto3);
console.log(CarrinhoDeCompras1.valorTotal());
console.log(CarrinhoDeCompras1.quantidadeProdutos());