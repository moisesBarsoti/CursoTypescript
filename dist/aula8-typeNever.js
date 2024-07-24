"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = createError;
// Never - significa que ele nunca vai retornar nada ou seja ela vai lançar um erro
function createError() {
    throw new Error('Erro qualque');
}
createError();
