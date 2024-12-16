import readlineSync = require('readline-sync');
const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

const input = readlineSync.questionInt('Digite o numero que deseja encontrar: ');

let encontrado =  false;
for(let numero of numeros){
    if(numero === input){
        console.log(`O número ${input} foi encontrado!`);
        encontrado = true;
        break;
    } 
};
if(!encontrado){
    console.log(`O número ${input} não foi encontrado!`);
};
