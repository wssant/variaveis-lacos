import { Sobrevivente } from './Sobrevivente';

export class KitLenhador extends Sobrevivente {

   private _cortar: string

   constructor(nome: string, sexo:string, alimentos: number, armas: number, tipo:number, cortar:string){
    super(nome, sexo, alimentos, armas, tipo)
    this._cortar = cortar
}

    public get cortar() {
        return this._cortar;
    }

    public set cortar(cortar:string) {
        this._cortar = cortar;
    }

    public visualizar(): void {
      super.visualizar(); 
      console.log("Ferramenta de corte: " + this._cortar);
   }

}