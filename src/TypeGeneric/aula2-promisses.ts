const array: Array<number> = [1,2,3,4,5];
console.log(array);

async function promiseAsync() {
    return 1;
}

function myPromise(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}

promiseAsync().then((resultado) => console.log(resultado + 1));
myPromise().then((resultado) => console.log(resultado + 1));