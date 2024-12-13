/**
 *  Triatleta vai ser uma classe concreta, por será uma subclasse de pessoa
*/
import { Pessoa } from "./Pessoa";
import { Cliclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";

// usa o Quiq fix, para importar diretamente todos os métodos das outras interfaces
export class Triatleta extends Pessoa implements Cliclista, Nadador, Corredor {
    
	constructor(nome: string) {
        super(nome);
	}

    pedalar(): void {
        console.log("Pedalando...")
    }
    aquecer(): void {
        console.log("Aquecendo...");
    }
    nadar(): void {
        console.log("Nadando...");
    }
    correr(): void {
        console.log("Correndo...");
    }
    cansou(): void {
        console.log("Cansou...");
    }


}