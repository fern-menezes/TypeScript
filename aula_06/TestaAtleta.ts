import { Jogador } from "./Triatleta/Jogador";
import { Triatleta } from "./Triatleta/Triatleta";


/*function main(){

    //criar um objeto da classe atleta
    const atleta = new Triatleta("Simone")

    atleta.visualizar();
    atleta.aquecer();
    atleta.nadar();
    atleta.pedalar();
    atleta.correr();
    atleta.cansou();
}
main();
*/

function main (){
    const atleta = new Jogador("Spartakus");

    atleta.visualizar();
    atleta.aquecer();
    atleta.correr();
    atleta.jogar();
    atleta.cansou();
}
main();