    import { Sobrevivente } from "../model/Sobrevivente" 

    export interface SobreviventeRepository {
        procurarPorNome(nome: string): void;
        listarTodas(): void;
        cadastrar(nome: string): void;
        atualizar(nome: string): void;
        apagar(nome: string): void;

    }