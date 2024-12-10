import readlineSync = require('readline-sync');
import { colors } from './colors';
import { deflate } from 'zlib';

let n1: number;
let n2: number;

let opcao: number;

do{
   
    menu();

    opcao = readlineSync.questionInt('Digite sua opcao: ');
    
    if(opcao === 0){
        about();
        process.exit(0)
    }

    switch(opcao){
        case 1:
            [n1, n2] = obterNumeros();
            console.log(`${n1} + ${n2} = ${somar(n1, n2)}`);
            break;

        case 2:
            [n1, n2] = obterNumeros();
            console.log(`${n1} - ${n2} = ${subtrair(n1, n2)}`);
            break;

        case 3:
            [n1, n2] = obterNumeros();
            console.log(`${n1} * ${n2} = ${multiplicar(n1, n2)}`);
            break;

        case 4:
            [n1, n2] = obterNumeros();

            let resultado = dividir(n1, n2);

            if(resultado !== null){
                console.log(`${n1} / ${n2} = ${resultado}`);
            }else{
                console.log(" Não existe divisão por zero!");
            }
            
            break;
        default:
            console.log('Opção Inválida!')
    }

    
}while(true)

    function menu(){
        console.log(colors.bg.yellow, colors.fg.blue,"\n//////////////////////////////////////////////////");
        console.log("                   Calculadora                    ");
        console.log("//////////////////////////////////////////////////");
        console.log("                                                  ");
        console.log(" 1 - Soma               |    2 -  Subtração       ");
        console.log(" 3 - Multiplicação      |    4 -  Divisão         ");
        console.log("**************************************************");
        console.log("Digite 0 para sair :)                             ", colors.reset);
        //console.log(colors.reset);
    
    }
    function about(){
        console.log("                Criado por Fern ✿                ");
    }
    function obterNumeros(): [number, number]{
        const n1 = readlineSync.questionFloat('Digite o primeiro numero: ');
        const n2 = readlineSync.questionFloat('Digite o segundo numero: ');
        return [n1, n2];
    }

    function somar(n1: number, n2: number): number{
        return n1 + n2;
    }
    function subtrair(n1: number, n2: number): number{
        return n1 - n2;
    }
    function multiplicar(n1: number, n2: number): number{
        return n1 * n2;
    }
    function dividir(n1: number, n2: number): number | null{
        let divisao = n1 / n2
        //if ternário para verificar se a divisão por zero não vai dar infinity e sim nulo
        return (divisao !== Infinity ? divisao : null )
    }
