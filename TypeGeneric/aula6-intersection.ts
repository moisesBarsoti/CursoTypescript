export function unirObjetos<T1,T2>(obj1: T1, obj2: T2): T1 & T2 {
    return {...obj1, ...obj2};
}

const obj1 = {ke1: 'Valor1'};
const obj2 = {ke2: 'Valor2'};
const uniao = unirObjetos(obj1,obj2)
console.log(uniao);