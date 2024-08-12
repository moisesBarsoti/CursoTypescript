// Never - significa que ele nunca vai retornar nada ou seja ela vai lançar um erro
export function createError(): never {
    throw new Error('Erro qualque');
}

createError();