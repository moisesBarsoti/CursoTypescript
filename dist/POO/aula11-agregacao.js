"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoDeCompras = void 0;
var CarrinhoDeCompras = (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.inserirProduto = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            this.produtos.push(produto);
        }
    };
    CarrinhoDeCompras.prototype.quantidadeProdutos = function () {
        return this.produtos.length;
    };
    CarrinhoDeCompras.prototype.valorTotal = function () {
        return this.produtos.reduce(function (soma, produto) { return soma + produto.preco; }, 0);
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
var Produto = (function () {
    function Produto(name, preco) {
        this.name = name;
        this.preco = preco;
    }
    return Produto;
}());
exports.Produto = Produto;
var produto1 = new Produto('Camiseta', 49.9);
var produto2 = new Produto('Caneta', 9);
var produto3 = new Produto('Carrinho', 50.9);
var CarrinhoDeCompras1 = new CarrinhoDeCompras();
CarrinhoDeCompras1.inserirProduto(produto1, produto2, produto3);
console.log(CarrinhoDeCompras1.valorTotal());
console.log(CarrinhoDeCompras1.quantidadeProdutos());
