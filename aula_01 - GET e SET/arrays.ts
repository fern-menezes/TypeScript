import readlinesync = require('readline-sync');

//métodos para atribuir valor, garante que inguém vai mexer na estrutura dela, e só consegue manipular os dados por meio dos métodos.
const numeros: Array<number> = new Array<number>(1);

//valores adicionados na coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7);
numeros.pop()

//listar dados adicionados
for(let numero of numeros){
    console.log("o numero é: ", numero)
}
//  Adicionamos um numero utilizando a entrada de dados no teclado
numeros.push(readlinesync.questionFloat('Digite um numero: '))
//  Adicionamos um ou mais elementos no inicio da fila
numeros.unshift(2, 4.5, 8, 9);
console.table(numeros)

//  Verificamos se um numero existe na coleção
console.log("Existe o número 1 no array? ", numeros.includes(1));

//  verificamos qual o indice de um elemento
console.log("Qual o índice do numero 4 no array? ", numeros.indexOf(4));

//  Removemos um numero da coleção
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)