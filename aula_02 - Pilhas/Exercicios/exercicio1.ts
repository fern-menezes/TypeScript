import readlinesync = require('readline-sync');
import { Queue } from '../fila/Queue';

const fila = new Queue <string>();



console.log("\n***************// Lista de Chegada //*****************");
console.log(" 1 - Adicionar Cliente na Fila");
console.log(" 2 - Listar Todos os Clientes");
console.log(" 3 - Retirar Cliente da Fila");
console.log(" 0 - Sair");
console.log("******************************************************");

while (true) {
let opcao = (readlinesync.questionInt("Entre com a opcao desejada: "));
let cliente: string;


switch(opcao){
    case 1:
        cliente = readlinesync.question("Digite o nome: ");
        fila.enqueue(cliente);
        console.log(`Fila: \n ${cliente} \nCliente Adicionado!`);
    break;

    case 2:
        console.log(`Lista de Clientes na Fila: \n `);
        fila.printQueue();
    break;

    case 3:
        if(fila.isEmpty()){
            console.log("A Fila está vazia!");
        }else{
            fila.dequeue()
            console.log(`Fila: \n `);
            fila.printQueue();
            console.log("O cliente foi chamado!");
        }
    break;
    case 0:
        console.log("Programa Finalizado!");
        process.exit(0);
    break;

    default:
        console.log("Opção Inválida!");
    }

    console.log("\n");
};

