type Documento = {
    title: string;
    text: string;
    date?: Date;
}

const documento: Documento = {
    title: 'O titulo',
    text: 'O texto',
    date: new Date(),
}

console.log(documento.date?.toDateString() ?? 'Não existe');
console.log(undefined ?? 'Não existe');