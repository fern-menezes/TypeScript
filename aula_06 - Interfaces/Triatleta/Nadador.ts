/**
 *  cria a próxima interface,importa a interface atleta pq ele é um atleta e depois só muda o método
 * tipo, a acção que ele realiza
*/
import { Atleta } from "./Atleta";

export interface Nadador extends Atleta{

    nadar(): void;
}