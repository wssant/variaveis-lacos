import readlinesync = require("readline-sync")

export function main() {
    let opcao: number;

    while (true) {

        console.log("************************************")

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                      BASE 42                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Sobrevivente                   ");
        console.log("            2 - Listar todos os Sobreviventes        ");
        console.log("            3 - Buscar Sobreviventes por Numero      ");
        console.log("            4 - Atualizar Inventário do Sobrevivente ");
        console.log("            5 - Apagar Sobrevivente                  ");
        console.log("            6 - Sair                                 ")               

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
                console.log("\n\nConsultar Sobreviventes por Numero\n\n");

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
console.log("\n*****************************************************");
console.log("Projeto Desenvolvido por: Winnie Sant'Ana ");
console.log("Generation Brasil - winnies@genstudents.org");
console.log("https://github.com/wssant/Conta_bancaria_Generation");
console.log("*****************************************************")

}
main();
