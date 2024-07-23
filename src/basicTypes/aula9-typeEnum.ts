// Enum - É uma estrutura de dados não ordenada utilizada quando temos mais de uma opção
enum Color {
    red,
    blue,
    yellow,
    // Você pode alterar o valor do índice
    green = 23,
    // Você consegue alterar o valor do índice para string
    purple = "Purple",
}

// O Enum ele também unifica com outro Enum

enum Color {
    pink = "Pink",
}

console.log(Color);

// function chooseColor(cor: Color): void {
//     console.log(Color[cor]);
// }

// chooseColor(Color.pink);