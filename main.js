// Observação: Necessário utilizar o browser para compilar.

let funcionarios = {};

function criar(id, nome) {
    if (funcionarios[id]) {
        return "ID já existente. Funcionário não pode ser adicionado.";
    }
    funcionarios[id] = nome;
    return `Funcionário "${nome}" adicionado com sucesso!`;
}

function buscar(id) {
    if (funcionarios[id]) {
        return `Funcionário encontrado: ID: "${id}", Nome: "${funcionarios[id]}"`;
    } else {
        return "Funcionário não foi encontrado.";
    }
}

function editar(id, novoNome) {
    if (funcionarios[id]) {
        funcionarios[id] = novoNome;
        return `Funcionário do ID: "${id}" foi editado com sucesso! Novo nome: "${novoNome}"`;
    } else {
        return "Funcionário não foi encontrado.";
    }
}

function apagar(id) {
    if (funcionarios[id]) {
        delete funcionarios[id];
        return `Funcionário do ID: "${id}" foi apagado com sucesso!`;
    } else {
        return "Funcionário não foi encontrado.";
    }
}

function menu() {
    let opcao;
    let resultado = "";

    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1 - Adicionar funcionário\n" +
            "2 - Buscar funcionário\n" +
            "3 - Editar funcionário\n" +
            "4 - Apagar funcionário\n" +
            "5 - Sair do Menu\n\n" +
            resultado
        );

        switch(opcao) {
            case '1':
                let criarId = prompt("Digite o ID do funcionário:");
                let criarNome = prompt("Digite o nome do funcionário:");
                resultado = criar(criarId, criarNome);
                break;
            case '2':
                let buscarId = prompt("Digite o ID do funcionário que deseja buscar:");
                resultado = buscar(buscarId);
                break;
            case '3': 
                let editarId = prompt("Digite o ID do funcionário que deseja editar:");
                let novoNome = prompt("Digite o novo nome do funcionário:");
                resultado = editar(editarId, novoNome);
                break;
            case '4':
                let apagarId = prompt("Digite o ID do funcionário que deseja apagar:");
                resultado = apagar(apagarId);
                break;
            case '5':
                console.log("Saindo do menu...");
                break;
            default:
                resultado = "Opção inválida. Tente novamente.";
        }
    } while(opcao !== '5');
}

menu();
