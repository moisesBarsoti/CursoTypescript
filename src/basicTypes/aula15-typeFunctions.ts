// TypeFunctions - Funções em tipo

function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
    const newArray:string[] = [];

    for(let i = 0; i < newArray.length; i++) {
        newArray.push(callbackfn(array[i]));
    }

    return newArray;
}

const abc = ['a','b','c'];
const abcMapped = mapStrings(abc, function(item: any) {
    return item.toUpperCase();
});

console.log(abcMapped);
console.log(abc);