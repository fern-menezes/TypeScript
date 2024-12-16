try{
    const resultado = converte(123);

    console.log(resultado);
}catch(error: any){
    if(error instanceof TypeError){
        console.error("Você digitou um número ao invés de uma string!")
    }else{
    console.error("Erro Inesperado!", error.message);
    }
}
    export function converte(conteudo: any): string {
        return conteudo.toUpperCase();
    }

