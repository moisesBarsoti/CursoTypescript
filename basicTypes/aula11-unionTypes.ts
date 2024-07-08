// Union Types - Significa que os paranetros ou variaveis podem ter mais de um tipo
function sumAndConcat(n1: number | string, n2: number | string ): number | string {
    if(typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    return `${n1}${n2}`;
}

console.log(sumAndConcat(20,50));
console.log(sumAndConcat("20","50"));