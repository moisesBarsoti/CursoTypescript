type FilterCallback<U> = (values: U, index?: U, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const newArray = [];
    for (let i = 0; i < newArray.length; i++) {
        if(callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

const array1 = [1,2,3,4,5,6,7,8,9,10];

const array1FilterOrigin = array1.filter((values) => values < 5);
console.log(array1FilterOrigin);

const arryaFilter = meuFilter(array1, (value) => value < 5);
console.log(arryaFilter);