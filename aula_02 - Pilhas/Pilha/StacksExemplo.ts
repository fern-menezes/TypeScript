import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Prato Azul");
pilha.push("Prato Verde");
pilha.push("Prato Vermelho");

//imprimir no console
pilha.printStack();

// checar se existe isso na lista
console.log(pilha.contains("Prato Branco"));

//remove o último item da lista
pilha.pop();


pilha.printStack();
