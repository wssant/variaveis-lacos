export class Kits {
    private _nome: string
    private _sexo: string
    private _tipo: number
    private _alimentos: number;
    private _armas: number;
    
    

    constructor(sobrevivente: string, sexo:string, alimentos: number, armas: number, tipo:number){
        this._nome = sobrevivente
        this._sexo = sexo
        this._alimentos = alimentos
        this._armas = armas
        this._tipo = tipo
        
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome:string) {
        this._nome = nome;
    }
    
    public get tipo() {
        return this._tipo;
    }

    public get sexo() {
        return this._sexo;
    }

    public set sexo(sexo: string) {
        this._sexo = sexo;
    }
    
    public set tipo(tipo:number) {
        this._tipo = tipo;
    }

    public get alimentos() {
        return this._alimentos;
    }

    public set alimentos(alimentos:number) {
        this._alimentos = alimentos;
    }


    public get armas() {
        return this._armas;
    }

    public set armas(armas:number) {
        this._armas = armas;
    }
    

    public visualizar(): void {

        let tipo: string = "";

        switch (this._sexo) {
            case "1":
                tipo = "Lenhador";
                break;

            case "2":
                tipo = "Médico"
                break;

            default:
                tipo = "Não especificado"
                break

        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Sobrevivente: ");
        console.log("*****************************************************");
        console.log("Nome do Sobrevivente: " + this._nome);
        console.log("Sexo : " + this._sexo);
        console.log("Tipo: " + tipo)
        console.log("Alimentação: " + this._alimentos);
        console.log("Armas disponíveis: " + this._armas);
        
}

}