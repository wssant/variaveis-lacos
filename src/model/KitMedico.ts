import { Sobrevivente } from './Sobrevivente';

export class KitMedico extends Sobrevivente {
    private _sutura: string

    constructor(nome: string, sexo:string, alimentos: number, armas: number, tipo:number, sutura:string){
    super(nome, sexo, alimentos, armas, tipo)
    this._sutura = sutura
}

  public get costurar() {
        return this._sutura;
    }

    public set costurar(costurar:string) {
        this._sutura = costurar;
    }

    public visualizar(): void {
      super.visualizar(); 
      console.log("Equipamento para sutura disponível: " + this._sutura);
   }
}