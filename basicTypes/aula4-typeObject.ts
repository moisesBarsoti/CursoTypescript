const obejectA: {
    // Reandoly siginifca que a chave não pode mais ser alterada
    // readonly chaveA: string;
    keyA: string;
    keyB: string;
    // O ponto de interrogação faz com que ele seja opcional
    keyC?: string;
    //  index signature - Com ele você consegue colocar mais valores
    [key: string]: unknown;
} = {
    keyA: "Valor A",
    keyB: "Valor B",
};

obejectA.keyA = "Outro valor";
obejectA.keyC = "Chave C";
obejectA.keyD = "Chave D";

console.log(obejectA);