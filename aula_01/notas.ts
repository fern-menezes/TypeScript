const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);


/**usa-se o laço for of para acessar uma nota dentro da array notas
 * é uma simplificação do laço for, criado para percorrer arrays e coleções
 * */
for(let nota of notas){
    console.log(nota.toFixed(1));
}

// adiciona uma nova nota com o push, no fim
notas.push(4.0);

// para adicionar mais de uma nota usa-se o unshift, adiciona no começo
notas.unshift(2.5, 9.0);

console.log("Novas notas cadastradas: ");

for(let nota of notas){
    console.log(nota.toFixed(1));
}

//para checar o indice de uma nota no array, usa o indexOf
console.log("O Indice da nota 9.0 é: " + notas.indexOf(9));

//para saber se está cadastrada no array usase includes
console.log("A nota 9.0 esta cadastrada no array? " + notas.includes(9));

//para alterar um valor de um index específico
notas[notas.indexOf(9)] = 3.0;

console.log("Nota 9.0 alterada para 3.0: ");
for(let nota of notas){
    console.log(nota.toFixed(1));
}

//apagar a ultima nota e depois da virgula a quantidade de itens a ser removido
notas.splice(notas.indexOf(10.0), 1);

console.log("Dois itens apagados depois do 10: ");
for(let nota of notas){
    console.log(nota.toFixed(1));
}