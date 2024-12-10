import readlineSync = require('readline-sync');

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Solicita ao usuário um número para adicionar ao array
const numeroDigitado = readlineSync.questionFloat('Digite o numero que deseja encontrar: ');

// Verifica se o número já existe no array
if (numeros.includes(numeroDigitado)) {
    console.log(`O número ${numeroDigitado} está localizado na posição: `+ numeros.indexOf(numeroDigitado));
}else{
    console.log(`O número ${numeroDigitado} não foi encontrado.`)
}

console.log("\nNúmeros no array: ", numeros.sort((a, b) => a - b));


