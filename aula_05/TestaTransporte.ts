import { Terrestre } from "./terrestre"
import { Transporte } from "./transporte"
import { Automovel } from "./automovel"


export function main(){

    const t1 = new Transporte(5);
    t1.visualizar();

    const tr1 = new Terrestre(5, 4, 100);
    tr1.visualizar();

    const a1 = new Automovel (5, 4, 250, "Verde", 5, "FLV-4566", 5);
    a1.visualizar();
}

main();