/**
 *  Triatleta vai ser uma classe concreta, por será uma subclasse de pessoa
*/
import { Pessoa } from "./Pessoa";
import { Corredor } from "./Corredor";

// usa o Quiq fix, para importar diretamente todos os métodos das outras interfaces
export class Jogador extends Pessoa implements Corredor {

    //jogar(): void;

    constructor(nome: string) {
        super(nome);
    }

    aquecer(): void {
        console.log("Aquecendo...");
    }
    
    correr(): void {
        console.log("Correndo...");
    }
    jogar(): void { 
        console.log("Jogando..."); 
    }

    cansou(): void {
        console.log("Cansou...");
    }


}