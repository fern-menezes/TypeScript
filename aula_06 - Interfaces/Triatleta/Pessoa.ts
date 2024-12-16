//PESSOA É UMA CLASSE abstrata

export abstract class Pessoa{
    private _nome: string;


	constructor(nome: string) {
		this._nome = nome;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    // só a assinatura, sem a implementação do método
    // abstract = descrição(indica que o método não tem corpo), só a assinatura
    //cansou() é o nome do método, mas não a parâmetros
    // void: tipo de retorno do método, como ele é void, não precisa colocar, mas é bom para indicar que ela não retorna nenhum valor.
    abstract cansou(): void;

    public visualizar(){
        console.log("-------------------------------")
        console.log("-------------------------------")
        console.log("-------------------------------")
        console.log(`Nome do Atleta: ${this. _nome}`)

}
}