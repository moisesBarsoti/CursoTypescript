// Types Literal - É basicamente você utilizar valores como tipos
let a: 100 = 100;

// Não vai ser permito porque foi adicionado um valor como tipo
// a = 30

// Inserção
let b = 30 as const;

const person = {
    name: "Moisés" as const,
    lastName: "Barsoti",
}

function chooseColor(color: "Blue" | "Pink" | "Purple"): string {
    return color
}

console.log(`${person.name} a sua cor é: ${chooseColor("Blue")}`);