import { Sobrevivente } from "../model/Sobrevivente"; 
import { SobreviventeRepository } from "../repository/SobreviventeRepository"
export class SobreviventeController implements SobreviventeRepository {

    private listaSobreviventes: Array<Sobrevivente> = new Array<Sobrevivente>();
    numero: number = 0

    procurarPorNome(nome: string): void {
        for (let sobrevivente of this.listaSobreviventes){
            sobrevivente.visualizar();
        }
    }
    listarTodas(): void {
        throw new Error("Method not implemented.");
    }
    cadastrar(nome: string): void {
        throw new Error("Method not implemented.");
    }
    atualizar(nome: string): void {
        throw new Error("Method not implemented.");
    }
    apagar(nome: string): void {
        throw new Error("Method not implemented.");
    }
    
}