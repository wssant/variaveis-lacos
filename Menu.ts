import readlinesync = require("readline-sync")
import { colors } from './src/util/Colors';
import { Sobrevivente } from './src/model/Sobrevivente';
import { KitLenhador } from "./src/model/KitLenhador";
import { KitMedico } from "./src/model/KitMedico";
import { SobreviventeController } from "./src/controller/SobreviventeController";

export function main() {

    let sobreviventes: SobreviventeController = new SobreviventeController();
    let opcao: number;

    const kitlenhador: KitLenhador = new KitLenhador('João', 'Masculino', 1, 1, 1, 'Machado')
    kitlenhador.visualizar();

    const kitmedico: KitMedico = new KitMedico('Firmina', 'Feminino', 3, 1, 2, 'Bisturi')
    kitmedico.visualizar();

    const tipoSobrevivente = ['Kit Medico', 'Kit Lenhador'];

    

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
                console.log("Digite o Nome do Sobrevivente: ");

        let nome = readlinesync.question("");

        console.log("Digite o Sexo do Sobrevivente (Masculino/Feminino): ");
        let sexo = readlinesync.question("");

        console.log("Digite a profissao do sobrevivente: ");
        let tipo = readlinesync.keyInSelect(tipoSobrevivente, "Escolha a profissão do sobrevivente:", { cancel: false }) + 1;


        console.log("\nDigite a quantidade de alimentos: ");
        let alimentos = readlinesync.questionInt("");

        console.log("\nDigite a quantidade de armas: ");
        let armas = readlinesync.questionInt("");
                
                keyPress();
                break;

            case 2:
                console.log("\n\nListar todos os Sobreviventes\n\n");
                sobreviventes.listarTodas();
                
                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar Sobreviventes por Nome\n\n");

                keyPress(); 
                break;
            case 4:
                console.log("\n\nAtualizar Inventário do Sobrevivente\n\n");

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar Sobrevivente\n\n");

                keyPress();  
                break;
            case 6:
                console.log("\n\Sair\n\n");

                keyPress();
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
