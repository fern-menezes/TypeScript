import readlinesync = require('readline-sync');

const cores: Array<string> = new Array<string>(1);

cores[0] = readlinesync.question('Digite uma cor: ');
cores[1] = readlinesync.question('Digite uma cor: ');
cores[2] = readlinesync.question('Digite uma cor: ');
cores[3] = readlinesync.question('Digite uma cor: ');
cores[4] = readlinesync.question('Digite uma cor: ');



//for(let cor of cores){
    //console.log("Listar todas as cores: ", cores[i]);
//}