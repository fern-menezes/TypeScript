import readlinesync = require('readline-sync');
import { Stack } from "../Pilha/Stack";

const pilha = new Stack<string>();
let continuar: boolean = true;


do{
console.log("\n***************// Lista de Chegada //*****************");
console.log(" 1 - Adicionar Livro na Pilha");
console.log(" 2 - Listar Todos os Livros");
console.log(" 3 - Retirar Livro da Pilha");
console.log(" 0 - Sair");
console.log("********************************************************");

let opcao = (readlinesync.questionInt("Digite a opcao desejada: "));
let livro: string;

    switch(opcao){
        case 1:
            livro = readlinesync.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log(`\nFila: \n ${livro} \nLivro Adicionado!`);
            pilha.printStack();
            console.log("\nHá um total de: " + pilha.count() + " livro(s) na pilha.")
        break;
    
        case 2:
            console.log(`Lista de livros na pilha: \n `);
            pilha.printStack();
        break;
    
        case 3:
            if(pilha.isEmpty()){
                console.log("A pilha está vazia!");
            }else{
                pilha.pop();
                console.log(`Pilha: \n `);
                pilha.printStack();
                console.log("Um livro foi retirado da pilha!");
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
    }while(continuar);



