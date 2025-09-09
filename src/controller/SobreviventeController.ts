import { Sobrevivente } from "../model/Sobrevivente"; 
import { SobreviventeRepository } from "../repository/SobreviventeRepository"
export class SobreviventeController implements SobreviventeRepository {

    private listaSobreviventes: Array<Sobrevivente> = new Array<Sobrevivente>();
    numero: number = 0

    procurarPorNome(nome: string): void {
        for (let sobreviventes of this.listaSobreviventes){
            sobreviventes.visualizar();
        }
    }
    
    listarTodas(): void {
        for (let sobreviventes of this.listaSobreviventes) {
            sobreviventes.visualizar();
        }
        
        
    }
    cadastrar(sobreviventes: Sobrevivente): void {
        this.listaSobreviventes.push(sobreviventes);
        console.log(` Sobrevivente ${sobreviventes.nome} cadastrado com sucesso!`);
        
    }
    atualizar(nome: string): void {
        
    }
    apagar(nome: string): void {
        
    }

    public gerarNumero(): number{
        return ++ this.numero;
    }
    
}