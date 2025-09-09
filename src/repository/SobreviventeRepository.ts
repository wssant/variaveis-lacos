    import { Sobrevivente } from "../model/Sobrevivente" 

    export interface SobreviventeRepository {
        procurarPorNome(nome: string): void;
        listarTodas(): void;
        cadastrar(sobreviventes: Sobrevivente): void;
        atualizar(nome: string): void;
        apagar(nome: string): void;

    }