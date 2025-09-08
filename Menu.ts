import readlinesync = require("readline-sync")
import { colors } from './src/util/Colors';
import { Sobrevivente } from './src/model/Sobrevivente';
import { KitLenhador } from "./src/model/KitLenhador";
import { KitMedico } from "./src/model/KitMedico";

export function main() {
    let opcao: number;

    const kitlenhador: KitLenhador = new KitLenhador('João', 'Masculino', 1, 1, 1, 'Machado')
    kitlenhador.visualizar();

    const kitmedico: KitMedico = new KitMedico('Firmina', 'Feminino', 3, 1, 2, 'Bisturi')
    kitmedico.visualizar();
    

    while (true) {

        console.log(colors.bg.black, colors.fg.greenstrong,"***************************************************")

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                      BASE 42                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Sobrevivente                   ");
        console.log("            2 - Listar todos os Sobreviventes        ");
        console.log("            3 - Buscar Sobreviventes por Nome        ");
        console.log("            4 - Atualizar Inventário do Sobrevivente ");
        console.log("            5 - Apagar Sobrevivente                  ");
        console.log("            6 - Sair                                 ",colors.reset)               

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao === 6) {
            console.log("BASE 42 - PEGUE O NECESSÁRIO PARA SOBREVIVER!" );
            sobre();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Sobrevivente\n\n");

                break;
            case 2:
                console.log("\n\nListar todos os Sobreviventes\n\n");

                break;
            case 3:
                console.log("\n\nConsultar Sobreviventes por Nome\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Inventário do Sobrevivente\n\n");

                break;
            case 5:
                console.log("\n\nApagar Sobrevivente\n\n");

                break;
            case 6:
                console.log("\n\Sair\n\n");
                
                break;
            
             default:
                console.log("\nOpção Inválida!\n");

                break;
            
    }

    
}

}

export function sobre(): void {
console.log(colors.bg.black, colors.fg.greenstrong,"\n*****************************************************");
console.log("Projeto Desenvolvido por: Winnie Sant'Ana ");
console.log("Generation Brasil - winnies@genstudents.org");
console.log("https://github.com/wssant/Conta_bancaria_Generation");
console.log("*****************************************************",colors.reset)

}
main();
