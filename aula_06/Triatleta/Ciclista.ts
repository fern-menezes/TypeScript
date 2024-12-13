/**
 *  cria a próxima interface, importa o atleta porque está herdando o método usa extends
*/
import { Atleta } from "./Atleta";

export interface Cliclista extends Atleta{

    pedalar(): void;
}