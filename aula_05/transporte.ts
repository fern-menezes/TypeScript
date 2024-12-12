export class Transporte{

    private _capacidade: number;
    
    //usar a extensão constructor
	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

    //extensão getter e setter
	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar(): void {
		
		console.log("\n\n************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
	}

}